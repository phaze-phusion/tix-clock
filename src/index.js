import style from './scss/tix.scss';
import {TrixClockGroup} from './es/ClockGroup.class';

const TIMEOUT = 4e3;

function initClock() {
  const hourTens = new TrixClockGroup('ht', 3);
  const hourOnes = new TrixClockGroup('ho', 9);
  const minuteTens = new TrixClockGroup('mt', 6);
  const minuteOnes = new TrixClockGroup('mo', 9);

  setInterval(
    () => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();

      hourTens.update(~~((hours / 10) % 10));
      hourOnes.update(hours % 10);
      minuteTens.update(~~((minutes / 10) % 10));
      minuteOnes.update(minutes % 10);
    },
    TIMEOUT
  );
}

window.addEventListener('DOMContentLoaded', () => {
  initClock();
});
