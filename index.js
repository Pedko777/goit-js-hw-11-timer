class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.targetDate = targetDate;
    this.timer = document.querySelector(selector);

    this.refs = {
      days: this.timer.querySelector('span[data-value="days"]'),
      hours: this.timer.querySelector('span[data-value="hours"]'),
      mins: this.timer.querySelector('span[data-value="mins"]'),
      secs: this.timer.querySelector('span[data-value="secs"]'),
    };

    this.getRemainingTime();
  }

  getRemainingTime() {
    setInterval(() => {
      let time = this.targetDate.getTime() - Date.now();

      if (time < 1) {
        time = 0;
        this.updateTimer(time);
        return;
      }
      this.updateTimer(time);
    }, 1000);
  }

  updateTimer(time) {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    this.refs.days.innerText = days;
    this.refs.hours.innerText = hours;
    this.refs.mins.innerText = mins;
    this.refs.secs.innerText = secs;
  }

  pad(value) {
    return String(value).padStart(2, '0');
  }
}

new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 17, 2020'),
});
