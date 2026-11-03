// === Module 1780: StepsEasing ===

// Module 1780 (StepsEasing)
import _createClassDefault from "_createClass" /* 42 */;
import _classCallCheck_mod from "_classCallCheck" /* 41 */;

let _classCallCheck = _classCallCheck_mod;
const ERROR_MESSAGES = {
  invalidStepsNumber(stepsNumber) {
    return "Steps easing function accepts only positive integers as numbers of steps, " + stepsNumber + " isn't a one";
  }
};
class StepsEasing {
  constructor(arg0) {
    str = arg1;
    if (arg1 === undefined) {
      str = "jump-end";
    }
    self = this;
    tmp = closure_0(this, StepsEasing);
    if (global > 0) {
      num = 1;
      if (global % 1 === 0) {
        self.stepsNumber = global;
        self.modifier = str;
        return;
      }
    }
    error = new Error("[Reanimated] " + closure_1.invalidStepsNumber(global));
    throw error;
  }
}
_classCallCheck = StepsEasing;
const entry = {
  key: "toString",
  value: function toString() {
    return "" + _classCallCheck.easingName + "(" + this.stepsNumber + ", " + this.modifier + ")";
  }
};
let items = [
  entry,
  {
    key: "normalize",
    value: function normalize() {
      const self = this;
      const modifier = this.modifier;
      if ("jump-start" !== modifier) {
        if ("start" !== modifier) {
          if ("jump-end" !== modifier) {
            if ("end" !== modifier) {
              if ("jump-both" === modifier) {
                return self.jumpBoth();
              } else {
                let str5 = "linear";
                if (1 !== self.stepsNumber) {
                  str5 = self.jumpNone();
                }
                return str5;
              }
            }
          }
          return self.jumpEnd();
        }
      }
      return self.jumpStart();
    }
  },
  {
    key: "jumpNone",
    value: function jumpNone() {
      let stepsNumber;
      const self = this;
      items = [];
      let num = 0;
      if (0 < this.stepsNumber) {
        do {
          let point = { x: num / self.stepsNumber, y: num / tmp };
          let arr = items.push(point);
          num = num + 1;
          stepsNumber = self.stepsNumber;
        } while (num < stepsNumber);
      }
      return self.withName(items);
    }
  },
  {
    key: "jumpStart",
    value: function jumpStart() {
      let stepsNumber;
      let sum;
      const self = this;
      items = [];
      let num = 0;
      if (0 < this.stepsNumber) {
        do {
          let point = { x: num / self.stepsNumber, y: null };
          sum = num + 1;
          point.y = sum / self.stepsNumber;
          let arr = items.push(point);
          num = sum;
          stepsNumber = self.stepsNumber;
        } while (sum < stepsNumber);
      }
      return self.withName(items);
    }
  },
  {
    key: "jumpEnd",
    value: function jumpEnd() {
      let stepsNumber;
      const self = this;
      items = [];
      let num = 0;
      if (0 < this.stepsNumber) {
        do {
          let point = { x: num / self.stepsNumber, y: num / self.stepsNumber };
          let arr = items.push(point);
          num = num + 1;
          stepsNumber = self.stepsNumber;
        } while (num < stepsNumber);
      }
      items.push({ x: 1, y: 1 });
      return self.withName(items);
    }
  },
  {
    key: "jumpBoth",
    value: function jumpBoth() {
      let stepsNumber;
      let sum;
      const self = this;
      items = [];
      let num = 0;
      if (0 < this.stepsNumber) {
        do {
          let point = { x: num / self.stepsNumber, y: null };
          sum = num + 1;
          point.y = sum / tmp;
          let arr = items.push(point);
          num = sum;
          stepsNumber = self.stepsNumber;
        } while (sum < stepsNumber);
      }
      items.push({ x: 1, y: 1 });
      return self.withName(items);
    }
  },
  {
    key: "withName",
    value: function withName(items) {
      return { name: _classCallCheck.easingName, points: items };
    }
  }
];
const tmp2 = _createClassDefault(StepsEasing, items);
tmp2.easingName = "steps";

export { ERROR_MESSAGES };
export const StepsEasing = tmp2;