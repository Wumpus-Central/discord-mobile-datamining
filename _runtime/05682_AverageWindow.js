// _runtime/05682_AverageWindow.js
import MultiTypeAverageWindow from "_classCallCheck";
import importDefaultResult from "_createClass";

class AverageWindow {
  constructor(arg0, arg1) {
    self = this;
    tmp = MultiTypeAverageWindow(this, MultiTypeAverageWindow);
    this.nextIndex = 0;
    num = 1;
    array = new Array(require("_createClass"));
    this.inputValues = array;
    num2 = arg1;
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
    return;
  }
}
MultiTypeAverageWindow = AverageWindow;
let obj = {
  key: "currentValue",
  get() {
    return this.currentAverage;
  }
};
const items = [
  obj,
  {
    key: "addValue",
    value: function addValue(arg0) {
      const self = this;
      const nextIndex = this.getNextIndex();
      let num = this.inputValues[nextIndex];
      if (undefined === num) {
        let currentCount = self.currentCount + 1;
      } else {
        currentCount = self.currentCount;
      }
      self.inputValues[nextIndex] = arg0;
      const result = self.currentAverage * (self.currentCount / currentCount);
      if (num == null) {
        num = 0;
      }
      self.currentAverage = Math.max(0, result + (arg0 - num) / currentCount);
      self.currentCount = currentCount;
    }
  },
  {
    key: "getNextIndex",
    value: function getNextIndex() {
      this.nextIndex = (this.nextIndex + 1) % this.inputValues.length;
      return this.nextIndex;
    }
  }
];
const importDefaultResultResult = importDefaultResult(AverageWindow, items);
class MultiTypeAverageWindow {
  constructor(arg0, arg1) {
    tmp = MultiTypeAverageWindow(this, MultiTypeAverageWindow);
    map = new Map();
    this.averageWindows = map;
    this.windowSize = global;
    this.defaultValue = arg1;
    return;
  }
}
obj = {
  key: "addValue",
  value: function addValue(arg0, arg1) {
    const self = this;
    const averageWindows = this.averageWindows;
    let value = averageWindows.get(arg1);
    if (!value) {
      const tmp4 = new closure_1(self.windowSize);
      const averageWindows2 = self.averageWindows;
      const result = averageWindows2.set(arg1, tmp4);
      value = tmp4;
    }
    value.addValue(arg0);
  }
};
const items1 = [
  obj,
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

export const AverageWindow = importDefaultResultResult;
export const MultiTypeAverageWindow = importDefaultResult(MultiTypeAverageWindow, items1);