// === Module 6356: AverageWindow ===

// Module 6356 (AverageWindow)
import _classCallCheck from "_classCallCheck" /* 6351 */;
import _createClass from "_createClass" /* 6352 */;

class AverageWindow {
  constructor(arg0, arg1) {
    const self = this;
    _classCallCheck(this, AverageWindow);
    this.nextIndex = 0;
    let num = 1;
    const array = new Array(Math.max(1, arg0));
    this.inputValues = array;
    let num2 = arg1;
    if (arg1 == null) {
      num2 = 0;
    }
    self.currentAverage = num2;
    if (undefined === arg1) {
      num = 0;
    }
    self.currentCount = num;
    self.nextIndex = self.currentCount;
    self.inputValues[0] = arg1;
  }
}
const items = [, , ];
const obj = {
  key: "currentValue",
  get() {
    return this.currentAverage;
  }
};
items[0] = obj;
items[1] = {
  key: "addValue",
  value: function addValue(arg0) {
    let currentCount;
    const self = this;
    const nextIndex = this.getNextIndex();
    let num = this.inputValues[nextIndex];
    if (undefined === num) {
      currentCount = self.currentCount + 1;
    } else {
      currentCount = self.currentCount;
    }
    self.inputValues[nextIndex] = arg0;
    const _Math = Math;
    const result = self.currentAverage * (self.currentCount / currentCount);
    if (num == null) {
      num = 0;
    }
    self.currentAverage = max(0, result + (arg0 - num) / currentCount);
    self.currentCount = currentCount;
  }
};
items[2] = {
  key: "getNextIndex",
  value: function getNextIndex() {
    this.nextIndex = (this.nextIndex + 1) % this.inputValues.length;
    return this.nextIndex;
  }
};
const importDefaultResultResult = _createClass(AverageWindow, items);
const map = importDefaultResultResult;
class MultiTypeAverageWindow {
  constructor(windowSize, defaultValue) {
    _classCallCheck(this, MultiTypeAverageWindow);
    this.averageWindows = new Map();
    this.windowSize = windowSize;
    this.defaultValue = defaultValue;
    new Map();
  }
}
const entry = {
  key: "addValue",
  value: function addValue(arg0, arg1) {
    const self = this;
    const averageWindows = this.averageWindows;
    let value = averageWindows.get(arg1);
    if (!value) {
      const self2 = this;
      const self3 = this;
      const tmp2 = new map(self.windowSize);
      const averageWindows2 = self.averageWindows;
      const result = averageWindows2.set(arg1, tmp2);
      value = tmp2;
    }
    value.addValue(arg0);
  }
};
const items1 = [
  entry,
  {
    key: "getCurrentValue",
    value: function getCurrentValue(arg0) {
      const averageWindows = this.averageWindows;
      const value = averageWindows.get(arg0);
      let num;
      if (value != null) {
        num = value.currentValue;
      }
      if (num == null) {
        num = this.defaultValue;
      }
      if (num == null) {
        num = 0;
      }
      return num;
    }
  },
  {
    key: "reset",
    value: function reset() {
      const averageWindows = this.averageWindows;
      averageWindows.clear();
    }
  }
];
const AverageWindow_export = importDefaultResultResult;
const MultiTypeAverageWindow_export = _createClass(MultiTypeAverageWindow, items1);

export { AverageWindow_export as AverageWindow };
export { MultiTypeAverageWindow_export as MultiTypeAverageWindow };