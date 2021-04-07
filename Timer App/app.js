class TimersDashboard extends React.Component {
    state = {
      timers: [
      {
          "title": "Feels great",
          "project": "Project 1",
          "id": "6735aad1-5f0e-476c-9298-04299f9df306",
          "elapsed": 1016359,
          "runningSince": null
      },
      {
          "title": "Timer",
          "project": "Project1",
          "id": "5f12b7ed-ac2a-4411-9ce0-fe5581421ea9",
          "elapsed": 33152,
          "runningSince": null
      }
  ],
    };
  
    componentDidMount() {
      this.loadTimersFromServer();
      setInterval(this.loadTimersFromServer, 5000);
    }
  
    loadTimersFromServer = () => {
      client.getTimers((serverTimers) => (
          this.setState({ timers: serverTimers })
        )
      );
    };
  
    handleCreateFormSubmit = (timer) => {
      this.createTimer(timer);
    };
  
    handleEditFormSubmit = (attrs) => {
      this.updateTimer(attrs);
    };
  
    handleDeleteClick = (timerId) => {
      this.deleteTimer(timerId);
    };
  
    handleStartClick = (timerId) => {
      this.startTimer(timerId);
    };
  
    handleStopClick = (timerId) => {
      this.stopTimer(timerId);
    };
  
    createTimer = (timer) => {
      const t = helpers.newTimer(timer);
      this.setState({
        timers: this.state.timers.concat(t),
      });
  
      client.createTimer(t);
    };
  
    updateTimer = (attrs) => {
      this.setState({
        timers: this.state.timers.map((timer) => {
          if (timer.id === attrs.id) {
            return Object.assign({}, timer, {
              title: attrs.title,
              project: attrs.project,
            });
          } else {
            return timer;
          }
        }),
      });
  
      client.updateTimer(attrs);
    };
  
    deleteTimer = (timerId) => {
      this.setState({
        timers: this.state.timers.filter(t => t.id !== timerId),
      });
  
      client.deleteTimer(
        { id: timerId }
      );
    };
  
    startTimer = (timerId) => {
      const now = Date.now();
  
      this.setState({
        timers: this.state.timers.map((timer) => {
          if (timer.id === timerId) {
            return Object.assign({}, timer, {
              runningSince: now,
            });
          } else {
            return timer;
          }
        }),
      });
  
      client.startTimer(
        {
          id: timerId,
          start: now
        }
      );
    };
  
    stopTimer = (timerId) => {
      const now = Date.now();
  
      this.setState({
        timers: this.state.timers.map((timer) => {
          if (timer.id === timerId) {
            const lastElapsed = now - timer.runningSince;
            return Object.assign({}, timer, {
              elapsed: timer.elapsed + lastElapsed,
              runningSince: null,
            });
          } else {
            return timer;
          }
        }),
      });
  
      client.stopTimer(
        {
          id: timerId,
          stop: now
        }
      );
    };
  
    render() {
      return (
        <div className='ui three column centered grid'>
          <div className='column'>
            <EditableTimerList
              timers={this.state.timers}
              onFormSubmit={this.handleEditFormSubmit}
              onDeleteClick={this.handleDeleteClick}
              onStartClick={this.handleStartClick}
              onStopClick={this.handleStopClick}
            />
            <ToggleableTimerForm
              onFormSubmit={this.handleCreateFormSubmit}
            />
          </div>
        </div>
      );
    }
  }
  