// === Module 5458: _isNativeReflectConstruct ===

// Module 5458 (_isNativeReflectConstruct)
import RVGridLayoutManagerImpl from "_classCallCheck";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _get from "_get";
import importDefaultResult from "_createClass";

function _isNativeReflectConstruct() {
  try {
    const _Boolean = Boolean;
    const call = valueOf.call;
    const _Reflect = Reflect;
    const _Boolean2 = Boolean;
    if (typeof call === "unknown") {
      let callResult = valueOf();
    } else {
      callResult = call(constructResult);
    }
    let closure_0 = !callResult;
    function _isNativeReflectConstruct() {
      return closure_0;
    }
    return _isNativeReflectConstruct();
  } catch (err) {
  }
}
class RVGridLayoutManagerImpl {
  constructor(arg0, arg1) {
    self = this;
    tmp = RVGridLayoutManagerImpl(this, RVGridLayoutManagerImpl);
    items = [, ];
    items[0] = global;
    items[1] = arg1;
    tmp2 = __esModule;
    obj = __esModule(RVGridLayoutManagerImpl);
    tmp3 = __esModule;
    if (_isNativeReflectConstruct()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items);
    }
    tmp3Result = tmp3(self, constructResult);
    tmp3Result.fullRelayoutRequired = false;
    tmp3Result.boundedSize = global.windowSize.width;
    return tmp3Result;
  }
}
require("_inherits")(RVGridLayoutManagerImpl, require("RVLayoutManager").RVLayoutManager);
let items = [
  {
    key: "updateLayoutParams",
    value: function updateLayoutParams(windowSize) {
      let self = this;
      self = this;
      let c1;
      const tmp = callback2(callback(self.prototype), "updateLayoutParams", this);
      c1 = tmp;
      let fn = tmp;
      if (typeof tmp !== "disabledUntil") {
        fn = (items) => _undefined.apply(self, items);
      }
      const items = [windowSize];
      !fn(items);
      if (!tmp3) {
        self.boundedSize = windowSize.windowSize.width;
        if (self.layouts.length > 0) {
          self.updateAllWidths();
          self.recomputeLayouts(0, self.layouts.length - 1);
          self.requiresRepaint = true;
        }
      }
    }
  },
  {
    key: "processLayoutInfo",
    value: function processLayoutInfo(arg0, arg1) {
      const self = this;
      const iter = arg0[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp2 = self.layouts[nextResult.index];
        tmp2.height = nextResult.dimensions.height;
        tmp2.isHeightMeasured = true;
        tmp2.isWidthMeasured = true;
        continue;
      }
      if (self.fullRelayoutRequired) {
        self.updateAllWidths();
        self.fullRelayoutRequired = false;
        return 0;
      }
    }
  },
  {
    key: "estimateLayout",
    value: function estimateLayout(arg0) {
      this.layouts[arg0].width = this.getWidth(arg0);
      this.layouts[arg0].height = this.getEstimatedHeight(arg0);
      this.layouts[arg0].isWidthMeasured = true;
      this.layouts[arg0].enforcedWidth = true;
    }
  },
  {
    key: "handleSpanChange",
    value: function handleSpanChange(arg0) {
      this.fullRelayoutRequired = true;
    }
  },
  {
    key: "getLayoutSize",
    value: function getLayoutSize() {
      const self = this;
      if (0 === this.layouts.length) {
        return { width: 0, height: 0 };
      } else {
        const obj = { width: null, height: null };
        obj[0] = self.boundedSize;
        obj[1] = self.computeTotalHeightTillRow(self.layouts.length - 1);
        return obj;
      }
    }
  },
  {
    key: "recomputeLayouts",
    value: function recomputeLayouts(arg0, arg1) {
      let x;
      let y;
      const self = this;
      let result = this.locateFirstIndexInRow(Math.max(0, arg0 - 1));
      const layout = this.getLayout(result);
      ({ x, y } = layout);
      if (result <= arg1) {
        do {
          let layout1 = self.getLayout(result);
          let tmp4 = result;
          let sum = y;
          let num = x;
          if (!self.checkBounds(x, layout1.width)) {
            let result1 = self.processAndReturnTallestItemInRow(result - 1);
            sum = result1.y + result1.height;
            num = 0;
          }
          layout1.x = num;
          layout1.y = sum;
          x = num + layout1.width;
          result = result + 1;
          y = sum;
        } while (result <= arg1);
      }
      if (arg1 === self.layouts.length - 1) {
        const result2 = self.processAndReturnTallestItemInRow(arg1);
      }
    }
  },
  {
    key: "getWidth",
    value: function getWidth(sum) {
      const result = this.boundedSize / this.maxColumns;
      return result * this.getSpan(sum);
    }
  },
  {
    key: "processAndReturnTallestItemInRow",
    value: function processAndReturnTallestItemInRow(arg0) {
      let height;
      let minHeight;
      const self = this;
      const result = this.locateFirstIndexInRow(arg0);
      let flag = false;
      let tmp2 = result;
      let num = 0;
      let flag2 = false;
      let num2 = 0;
      let tmp4;
      if (result <= arg0) {
        while (true) {
          let tmp5 = self.layouts[tmp2];
          let BooleanResult = flag;
          let tmp7 = tmp2;
          let tmp8 = num;
          let tmp9 = tmp3;
          if (!flag) {
            let _Boolean = Boolean;
            BooleanResult = Boolean(tmp5.isHeightMeasured);
          }
          let _Math = Math;
          let bound = Math.max(num, tmp5.height);
          ({ minHeight, height } = tmp5);
          if (minHeight == null) {
            minHeight = 0;
          }
          let tmp11 = height > minHeight;
          if (tmp11) {
            let num3;
            if (tmp9 != null) {
              num3 = tmp9.height;
            }
            if (num3 == null) {
              num3 = 0;
            }
            tmp11 = tmp5.height > num3;
          }
          if (tmp11) {
            tmp9 = tmp5;
          }
          let sum = tmp2 + 1;
          flag2 = BooleanResult;
          num2 = bound;
          tmp4 = tmp9;
          if (sum >= self.layouts.length) {
            break;
          } else {
            flag = BooleanResult;
            num = bound;
            tmp3 = tmp9;
            flag2 = BooleanResult;
            num2 = bound;
            tmp4 = tmp9;
            tmp2 = sum;
            if (sum > arg0) {
              break;
            }
          }
        }
      }
      let tmp13 = !tmp4;
      if (!tmp4) {
        tmp13 = num2 > 0;
      }
      if (tmp13) {
        const _Number = Number;
        num2 = Number.MAX_SAFE_INTEGER;
      }
      if (tmp4 == null) {
        tmp4 = self.layouts[result];
      }
      if (flag2) {
        if (tmp4) {
          let num4 = tmp4.height;
          if (num2 - tmp4.height > 1) {
            self.requiresRepaint = true;
            num4 = 0;
          }
          if (result <= arg0) {
            self.layouts[result].minHeight = num4;
            if (num4 > 0) {
              self.layouts[result].height = num4;
            }
            let sum1 = result + 1;
            if (sum1 < self.layouts.length) {
              while (sum1 <= arg0) {
                self.layouts[sum1].minHeight = num4;
                if (num4 > 0) {
                  self.layouts[sum1].height = num4;
                }
                sum1 = sum1 + 1;
                if (sum1 >= self.layouts.length) {
                  break;
                }
              }
            }
          }
          tmp4.minHeight = 0;
        }
        return tmp4;
      } else {
        return tmp4;
      }
    }
  },
  {
    key: "computeTotalHeightTillRow",
    value: function computeTotalHeightTillRow(arg0) {
      const self = this;
      const result = this.locateFirstIndexInRow(arg0);
      let num = 0;
      if (result <= arg0) {
        const _Math = Math;
        let bound = Math.max(0, self.layouts[result].height);
        let sum = result + 1;
        num = bound;
        if (sum < self.layouts.length) {
          num = bound;
          while (sum <= arg0) {
            let _Math2 = Math;
            bound = Math.max(bound, self.layouts[sum].height);
            sum = sum + 1;
            num = bound;
            if (sum >= self.layouts.length) {
              break;
            }
          }
        }
      }
      return this.layouts[result].y + num;
    }
  },
  {
    key: "updateAllWidths",
    value: function updateAllWidths() {
      let length;
      const self = this;
      let num = 0;
      if (0 < this.layouts.length) {
        do {
          self.layouts[num].width = self.getWidth(num);
          num = num + 1;
          length = self.layouts.length;
        } while (num < length);
      }
    }
  },
  {
    key: "checkBounds",
    value: function checkBounds(arg0, width) {
      return arg0 + width <= this.boundedSize + 0.9;
    }
  },
  {
    key: "locateFirstIndexInRow",
    value: function locateFirstIndexInRow(arg0) {
      if (0 === arg0) {
        return 0;
      } else {
        let tmp = arg0;
        if (arg0 >= 0) {
          let tmp3 = arg0;
          tmp = arg0;
          if (0 !== this.layouts[arg0].x) {
            const diff = tmp3 - 1;
            tmp = diff;
            while (diff >= 0) {
              tmp3 = diff;
              tmp = diff;
              if (0 === tmp2.layouts[diff].x) {
                break;
              }
            }
          }
        }
        const _Math = Math;
        return Math.max(tmp, 0);
      }
    }
  },
  {
    key: "isInLastRow",
    value: function isInLastRow(arg0) {
      const self = this;
      if (0 === this.layouts.length) {
        return false;
      } else {
        const diff = self.layouts.length - 1;
        let tmp3 = arg0 === diff;
        if (!tmp3) {
          let y;
          if (self.layouts[arg0] != null) {
            y = tmp4.y;
          }
          let y1;
          if (self.layouts[diff] != null) {
            y1 = tmp7.y;
          }
          tmp3 = y === y1;
        }
        return tmp3;
      }
    }
  }
];

export const RVGridLayoutManagerImpl = importDefaultResult(RVGridLayoutManagerImpl, items);