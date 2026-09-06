// _runtime/06871_AverageWindow.js
import _classCallCheck from "metro/06866__.js";
import _createClass from "metro/06867__.js";

class AverageWindow {
  constructor(arg0, arg1) {
    self = this;
    tmp = closure_0(this, MultiTypeAverageWindow);
    this.nextIndex = 0;
    num = 1;
    array = new Array(Math.max(1, global));
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
_classCallCheck = AverageWindow;
const items = [
  {
    key: "currentValue",
    get() {
      return this.currentAverage;
    },
  },
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
    },
  },
  {
    key: "getNextIndex",
    value: function getNextIndex() {
      this.nextIndex = (this.nextIndex + 1) % this.inputValues.length;
      return this.nextIndex;
    },
  },
];
const importDefaultResultResult = _createClass(AverageWindow, items);
let closure_1 = importDefaultResultResult;
class MultiTypeAverageWindow {
  constructor(arg0, arg1) {
    tmp = closure_0(this, MultiTypeAverageWindow);
    map = new Map();
    this.averageWindows = map;
    this.windowSize = global;
    this.defaultValue = arg1;
    return;
  }
}
_classCallCheck = MultiTypeAverageWindow;
const entry = {
  key: "addValue",
  value: function addValue(arg0, arg1) {
    const self = this;
    const averageWindows = this.averageWindows;
    value = averageWindows.get(arg1);
    if (!value) {
      const tmp4 = new importDefaultResultResult(self.windowSize);
      const averageWindows2 = self.averageWindows;
      const result = averageWindows2.set(arg1, tmp4);
      value = tmp4;
    }
    value.addValue(arg0);
  },
};
const items1 = [
  entry,
  {
    key: "getCurrentValue",
    value: function getCurrentValue(arg0) {
      const averageWindows = this.averageWindows;
      value = averageWindows.get(arg0);
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
    },
  },
  {
    key: "reset",
    value: function reset() {
      const averageWindows = this.averageWindows;
      averageWindows.clear();
    },
  },
];

export const AverageWindow = importDefaultResultResult;
export const MultiTypeAverageWindow = _createClass(MultiTypeAverageWindow, items1);
