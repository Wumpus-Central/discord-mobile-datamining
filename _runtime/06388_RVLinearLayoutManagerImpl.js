// === Module 6388: RVLinearLayoutManagerImpl ===

// Module 6388 (RVLinearLayoutManagerImpl)
import RVLayoutManager from "RVLayoutManager" /* 6384 */;
import _classCallCheck from "_classCallCheck" /* 6358 */;
import _createClass from "_createClass" /* 6359 */;
import map from "_possibleConstructorReturn" /* 6377 */;
import _getPrototypeOf from "_getPrototypeOf" /* 6379 */;
import _get from "_get" /* 6380 */;
import _inherits from "_inherits" /* 6382 */;

let size;

function _isNativeReflectConstruct() {
  try {
    const _Boolean = Boolean;
    const _Reflect = Reflect;
    const _Boolean2 = Boolean;
    let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

    }));
    _isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return closure_0;
    };
    return _isNativeReflectConstruct();
  } catch (err) {
  }
}
class RVLinearLayoutManagerImpl {
  constructor(windowSize, arg1) {
    let constructResult;
    const self = this;
    _classCallCheck(this, RVLinearLayoutManagerImpl);
    const items = [windowSize, arg1];
    const obj = _getPrototypeOf(RVLinearLayoutManagerImpl);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj.apply(self, items);
    }
    const tmp3Result = map(self, constructResult);
    tmp3Result.hasSize = false;
    tmp3Result.tallestItemHeight = 0;
    windowSize = windowSize.windowSize;
    tmp3Result.boundedSize = tmp3Result.horizontal ? windowSize.height : windowSize.width;
    tmp3Result.hasSize = tmp3Result.boundedSize > 0;
    return tmp3Result;
  }
}
_inherits(RVLinearLayoutManagerImpl, RVLayoutManager.RVLayoutManager);
const entry = {
  key: "updateLayoutParams",
  value: function updateLayoutParams(windowSize) {
    const self = this;
    const horizontal = this.horizontal;
    let fn = _get(_getPrototypeOf(RVLinearLayoutManagerImpl.prototype), "updateLayoutParams", this);
    if (typeof fn === "function") {
      fn = (items) => fn.apply(self, items);
    }
    const items = [windowSize];
    !fn(items);
    windowSize = windowSize.windowSize;
    self.boundedSize = self.horizontal ? windowSize.height : windowSize.width;
    const tmp2 = self.boundedSize === self.boundedSize && horizontal === self.horizontal;
    if (!tmp2) {
      if (self.layouts.length > 0) {
        self.recomputeLayouts(0, self.layouts.length - 1);
        self.requiresRepaint = true;
      }
    }
  }
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
        let boundedSize;
        let dimensions = nextResult.dimensions;
        let tmp2 = self.layouts[nextResult.index];
        let tmp3 = tmp2;
        if (self.horizontal) {
          boundedSize = dimensions.width;
        } else {
          boundedSize = self.boundedSize;
        }
        tmp2.width = boundedSize;
        tmp3.isHeightMeasured = true;
        tmp3.isWidthMeasured = true;
        tmp3.height = dimensions.height;
        continue;
      }
      const tmp7 = self.horizontal && !self.hasSize;
      if (tmp7) {
        const result = self.normalizeLayoutHeights(arg0);
      }
    }
  },
  {
    key: "estimateLayout",
    value: function estimateLayout(arg0) {
      let boundedSize;
      const self = this;
      if (this.horizontal) {
        boundedSize = self.getEstimatedWidth(arg0);
      } else {
        boundedSize = self.boundedSize;
      }
      this.layouts[arg0].width = boundedSize;
      this.layouts[arg0].height = self.getEstimatedHeight(arg0);
      this.layouts[arg0].isWidthMeasured = !self.horizontal;
      this.layouts[arg0].enforcedWidth = !self.horizontal;
    }
  },
  {
    key: "getLayoutSize",
    value: function getLayoutSize() {
      let sum;
      const self = this;
      if (0 === this.layouts.length) {
        return { width: 0, height: 0 };
      } else {
        let boundedSize;
        size = self.layouts[self.layouts.length - 1];
        if (self.horizontal) {
          boundedSize = size.x + size.width;
        } else {
          boundedSize = self.boundedSize;
        }
        const size1 = { width: boundedSize, height: sum };
        if (self.horizontal) {
          const tallestItem = self.tallestItem;
          let height;
          if (tallestItem != null) {
            height = tallestItem.height;
          }
          if (height == null) {
            height = self.boundedSize;
          }
          sum = height;
        } else {
          sum = size.y + size.height;
        }
        return size1;
      }
    }
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
        let height = tmp2.height;
        if (num == null) {
          num = 0;
        }
        let tmp4 = height > num;
        if (tmp4) {
          let num2;
          let height2 = tmp3.height;
          if (tmp != null) {
            num2 = tmp.height;
          }
          if (num2 == null) {
            num2 = 0;
          }
          tmp4 = height2 > num2;
        }
        if (tmp4) {
          tmp = tmp2;
        }
        continue;
      }
      const tmp7 = tmp;
      if (tmp7) {
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
    }
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
            size = self.getLayout(sum - 1);
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
    }
  }
];
const RVLinearLayoutManagerImpl_export = _createClass(RVLinearLayoutManagerImpl, items);

export { RVLinearLayoutManagerImpl_export as RVLinearLayoutManagerImpl };