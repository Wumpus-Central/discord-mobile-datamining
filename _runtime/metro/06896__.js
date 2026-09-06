// _runtime/metro/06896__.js
import _modDef6885 from "06885__.js";
import _classCallCheck from "06866__.js";
import _createClass from "06867__.js";
import _getPrototypeOf from "06887__.js";
import _get from "06888__.js";
import _inherits from "06890__.js";

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
    closure_0 = !callResult;
    _isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return closure_0;
    };
    return _isNativeReflectConstruct();
  } catch (err) {}
}
_modDef6885;
class RVLinearLayoutManagerImpl {
  constructor(arg0, arg1) {
    self = this;
    tmp = closure_0(this, RVLinearLayoutManagerImpl);
    items = [,];
    items[0] = global;
    items[1] = fn;
    tmp2 = c2;
    obj = c2(RVLinearLayoutManagerImpl);
    tmp3 = closure_1;
    if (closure_4()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items);
    }
    tmp3Result = tmp3(self, constructResult);
    tmp3Result.hasSize = false;
    tmp3Result.tallestItemHeight = 0;
    windowSize = global.windowSize;
    tmp3Result.boundedSize = tmp3Result.horizontal ? windowSize.height : windowSize.width;
    tmp3Result.hasSize = tmp3Result.boundedSize > 0;
    return tmp3Result;
  }
}
_classCallCheck = RVLinearLayoutManagerImpl;
_inherits(RVLinearLayoutManagerImpl, fn(6892).RVLayoutManager);
const entry = {
  key: "updateLayoutParams",
  value: function updateLayoutParams(windowSize) {
    const self = this;
    let fn = _get(_getPrototypeOf(_classCallCheck.prototype), "updateLayoutParams", this);
    if (typeof fn === "function") {
      fn = (items) => fn.apply(self, items);
    }
    const items = [windowSize];
    !fn(items);
    windowSize = windowSize.windowSize;
    self.boundedSize = self.horizontal ? windowSize.height : windowSize.width;
    if (!tmp2) {
      if (self.layouts.length > 0) {
        self.recomputeLayouts(0, self.layouts.length - 1);
        self.requiresRepaint = true;
      }
    }
  },
};
let items = [
  entry,
  {
    key: "processLayoutInfo",
    value: function processLayoutInfo(arg0, arg1) {
      const self = this;
      const iter = arg0[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let dimensions = nextResult.dimensions;
        let tmp2 = self.layouts[nextResult.index];
        let tmp3 = tmp2;
        if (self.horizontal) {
          let boundedSize = dimensions.width;
        } else {
          boundedSize = self.boundedSize;
        }
        tmp2.width = boundedSize;
        tmp3.isHeightMeasured = true;
        tmp3.isWidthMeasured = true;
        tmp3.height = dimensions.height;
        continue;
      }
      if (tmp7) {
        const result = self.normalizeLayoutHeights(arg0);
      }
    },
  },
  {
    key: "estimateLayout",
    value: function estimateLayout(arg0) {
      const self = this;
      if (this.horizontal) {
        let boundedSize = self.getEstimatedWidth(arg0);
      } else {
        boundedSize = self.boundedSize;
      }
      this.layouts[arg0].width = boundedSize;
      this.layouts[arg0].height = self.getEstimatedHeight(arg0);
      this.layouts[arg0].isWidthMeasured = !self.horizontal;
      this.layouts[arg0].enforcedWidth = !self.horizontal;
    },
  },
  {
    key: "getLayoutSize",
    value: function getLayoutSize() {
      const self = this;
      if (0 === this.layouts.length) {
        return { width: 0, height: 0 };
      } else {
        let size = self.layouts[self.layouts.length - 1];
        if (self.horizontal) {
          let boundedSize = size.x + size.width;
        } else {
          boundedSize = self.boundedSize;
        }
        size = { width: boundedSize, height: null };
        if (self.horizontal) {
          const tallestItem = self.tallestItem;
          let height;
          if (tallestItem != null) {
            height = tallestItem.height;
          }
          if (height == null) {
            height = self.boundedSize;
          }
          let sum = height;
        } else {
          sum = size.y + size.height;
        }
        size.height = sum;
        return size;
      }
    },
  },
  {
    key: "normalizeLayoutHeights",
    value: function normalizeLayoutHeights(arg0) {
      const self = this;
      let tmp;
      const iter = arg0[Symbol.iterator]();
      while (iter !== undefined) {
        let tmp2 = self.layouts[iter.next().index];
        let num = tmp2.minHeight;
        let tmp3 = tmp2;
        if (num == null) {
          num = 0;
        }
        let tmp4 = tmp2.height > num;
        if (tmp4) {
          let num2;
          if (tmp != null) {
            num2 = tmp.height;
          }
          if (num2 == null) {
            num2 = 0;
          }
          tmp4 = tmp3.height > num2;
        }
        if (tmp4) {
          tmp = tmp2;
        }
        continue;
      }
      if (tmp) {
        if (tmp.height !== self.tallestItemHeight) {
          let num3 = tmp.height;
          if (tmp.height < self.tallestItemHeight) {
            self.requiresRepaint = true;
            num3 = 0;
          }
          const layouts = self.layouts;
          for (const item10035 of layouts) {
            if (num3 > 0) {
              item10035.height = tmp.height;
            }
            item10035.minHeight = num3;
            continue;
          }
          tmp.minHeight = 0;
          self.tallestItem = tmp;
          self.tallestItemHeight = tmp.height;
        }
      }
    },
  },
  {
    key: "recomputeLayouts",
    value: function recomputeLayouts(arg0, arg1) {
      const self = this;
      let sum = arg0;
      if (arg0 <= arg1) {
        do {
          let layout = self.getLayout(sum);
          if (0 === sum) {
            layout.x = 0;
            layout.y = 0;
          } else {
            let size = self.getLayout(sum - 1);
            let num = 0;
            if (self.horizontal) {
              num = size.x + size.width;
            }
            layout.x = num;
            let num2 = 0;
            if (!self.horizontal) {
              num2 = size.y + size.height;
            }
            layout.y = num2;
          }
          if (self.horizontal) {
            if (self.hasSize) {
              layout.minHeight = self.boundedSize;
            }
          } else {
            layout.width = self.boundedSize;
          }
          sum = sum + 1;
        } while (sum <= arg1);
      }
    },
  },
];

export const RVLinearLayoutManagerImpl = _createClass(RVLinearLayoutManagerImpl, items);
