// _runtime/06369_RVMasonryLayoutManagerImpl.js
import RVLayoutManager from "06377_RVLayoutManager.js";
import _classCallCheck from "metro/06351__classCallCheck.js";
import _createClass from "metro/06352__createClass.js";
import map from "metro/06370__possibleConstructorReturn.js";
import _getPrototypeOf from "06372__getPrototypeOf.js";
import _get from "metro/06373__get.js";
import _inherits from "06375__inherits.js";

let MAX_VALUE, size;

function _isNativeReflectConstruct() {
  try {
    const _Boolean = Boolean;
    const _Reflect = Reflect;
    const _Boolean2 = Boolean;
    let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {}));
    _isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return closure_0;
    };
    return _isNativeReflectConstruct();
  } catch (err) {}
}
class RVMasonryLayoutManagerImpl {
  constructor(windowSize, arg1) {
    let constructResult;
    const self = this;
    _classCallCheck(this, RVMasonryLayoutManagerImpl);
    const items = [windowSize, arg1];
    const obj = _getPrototypeOf(RVMasonryLayoutManagerImpl);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj.apply(self, items);
    }
    const tmp3Result = map(self, constructResult);
    tmp3Result.currentColumn = 0;
    tmp3Result.fullRelayoutRequired = false;
    tmp3Result.boundedSize = windowSize.windowSize.width;
    tmp3Result.optimizeItemArrangement = windowSize.optimizeItemArrangement;
    let columnHeights = tmp3Result.columnHeights;
    if (columnHeights == null) {
      const _Array = Array;
      const ArrayResult = Array(tmp3Result.maxColumns);
      columnHeights = ArrayResult.fill(0);
    }
    tmp3Result.columnHeights = columnHeights;
    return tmp3Result;
  }
}
_inherits(RVMasonryLayoutManagerImpl, RVLayoutManager.RVLayoutManager);
const entry = {
  key: "updateLayoutParams",
  value: function updateLayoutParams(windowSize) {
    let maxColumns;
    let optimizeItemArrangement;
    const self = this;
    ({ maxColumns, optimizeItemArrangement } = this);
    const tmp = _get(_getPrototypeOf(RVMasonryLayoutManagerImpl.prototype), "updateLayoutParams", this);
    let closure_1 = tmp;
    let fn = tmp;
    if (typeof tmp === "function") {
      fn = (items) => closure_1.apply(self, items);
    }
    const items = [windowSize];
    !fn(items);
    const tmp3 =
      self.boundedSize === windowSize.windowSize.width &&
      maxColumns === windowSize.maxColumns &&
      optimizeItemArrangement === windowSize.optimizeItemArrangement;
    if (!tmp3) {
      self.boundedSize = windowSize.windowSize.width;
      if (self.layouts.length > 0) {
        self.updateAllWidths();
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
        let index = nextResult.index;
        let tmp2 = self.layouts[index];
        tmp2.height = nextResult.dimensions.height;
        tmp2.isHeightMeasured = true;
        tmp2.isWidthMeasured = true;
        self.layouts[index] = tmp2;
        continue;
      }
      if (self.fullRelayoutRequired) {
        self.updateAllWidths();
        self.fullRelayoutRequired = false;
        return 0;
      }
    },
  },
  {
    key: "estimateLayout",
    value: function estimateLayout(arg0) {
      this.layouts[arg0].width = this.getWidth(arg0);
      this.layouts[arg0].height = this.getEstimatedHeight(arg0);
      this.layouts[arg0].isWidthMeasured = true;
      this.layouts[arg0].enforcedWidth = true;
    },
  },
  {
    key: "handleSpanChange",
    value: function handleSpanChange(arg0) {
      this.fullRelayoutRequired = true;
    },
  },
  {
    key: "getLayoutSize",
    value: function getLayoutSize() {
      const self = this;
      if (0 === this.layouts.length) {
        return { width: 0, height: 0 };
      } else {
        const _Math = Math;
        const items = [];
        HermesBuiltin.arraySpread(items, self.columnHeights, 0);
        const _Math2 = Math;
        size = { width: self.boundedSize, height: HermesBuiltin.apply(max, items, Math) };
        return size;
      }
    },
  },
  {
    key: "recomputeLayouts",
    value: function recomputeLayouts(sum, arg1) {
      const self = this;
      if (0 === sum) {
        const _Array = Array;
        const ArrayResult = Array(self.maxColumns);
        self.columnHeights = ArrayResult.fill(0);
        self.currentColumn = 0;
      } else {
        const result = self.updateColumnHeightsToIndex(sum);
      }
      if (sum < self.layouts.length) {
        do {
          let layout = self.getLayout(sum);
          let span = self.getSpan(sum, true);
          if (self.optimizeItemArrangement) {
            if (1 === span) {
              let result1 = self.placeSingleColumnItem(layout);
            } else {
              let result2 = self.placeOptimizedMultiColumnItem(layout, span);
            }
          } else {
            let result3 = self.placeItemSequentially(layout, span);
          }
          sum = sum + 1;
        } while (sum < self.layouts.length);
      }
    },
  },
  {
    key: "getWidth",
    value: function getWidth(sum) {
      const result = this.boundedSize / this.maxColumns;
      return result * this.getSpan(sum);
    },
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
          self.layouts[num].minHeight = undefined;
          num = num + 1;
          length = self.layouts.length;
        } while (num < length);
      }
    },
  },
  {
    key: "placeItemSequentially",
    value: function placeItemSequentially(layout, span) {
      const self = this;
      if (this.currentColumn + span > this.maxColumns) {
        self.currentColumn = 0;
      }
      let tmp = self.columnHeights[self.currentColumn];
      let sum = self.currentColumn + 1;
      let tmp3 = tmp;
      if (sum < self.currentColumn + span) {
        do {
          let bound = tmp;
          if (sum < self.maxColumns) {
            let _Math = Math;
            bound = Math.max(tmp, self.columnHeights[sum]);
          }
          sum = sum + 1;
          tmp = bound;
          tmp3 = bound;
        } while (sum < self.currentColumn + span);
      }
      layout.x = (self.boundedSize / self.maxColumns) * self.currentColumn;
      layout.y = tmp3;
      let currentColumn = self.currentColumn;
      if (currentColumn < self.currentColumn + span) {
        do {
          if (currentColumn < self.maxColumns) {
            self.columnHeights[currentColumn] = tmp3 + layout.height;
          }
          currentColumn = currentColumn + 1;
        } while (currentColumn < self.currentColumn + span);
      }
      self.currentColumn = self.currentColumn + span;
      if (self.currentColumn >= self.maxColumns) {
        self.currentColumn = 0;
      }
    },
  },
  {
    key: "placeSingleColumnItem",
    value: function placeSingleColumnItem(layout) {
      const self = this;
      let first = this.columnHeights[0];
      let num = 0;
      let num2 = 1;
      let num3 = 0;
      if (1 < this.maxColumns) {
        do {
          let tmp3 = first;
          let tmp4 = num;
          if (self.columnHeights[num2] < first) {
            tmp3 = self.columnHeights[num2];
            tmp4 = num2;
          }
          num2 = num2 + 1;
          first = tmp3;
          num = tmp4;
          num3 = tmp4;
        } while (num2 < self.maxColumns);
      }
      layout.x = (self.boundedSize / self.maxColumns) * num3;
      layout.y = self.columnHeights[num3];
      const columnHeights = self.columnHeights;
      columnHeights[num3] = columnHeights[num3] + layout.height;
    },
  },
  {
    key: "placeOptimizedMultiColumnItem",
    value: function placeOptimizedMultiColumnItem(layout, span) {
      let sum;
      let sum2;
      let sum5;
      const self = this;
      let num = 0;
      let num2 = 0;
      let num3 = 0;
      if (0 <= this.maxColumns - span) {
        do {
          let bound = self.columnHeights[num];
          sum = num + 1;
          let tmp4 = MAX_VALUE;
          let tmp5 = num2;
          let tmp6 = bound;
          let sum1 = sum;
          if (sum < num + span) {
            do {
              let _Math = Math;
              bound = Math.max(bound, self.columnHeights[sum1]);
              sum1 = sum1 + 1;
              tmp6 = bound;
              sum2 = num + span;
            } while (sum1 < sum2);
          }
          let num4 = 0;
          let num5 = 0;
          let num6 = 0;
          if (0 < self.maxColumns) {
            while (true) {
              if (num <= num4) {
                if (num4 < num + span) {
                  let sum3 = tmp6 + layout.height;
                  num5 = num5 + sum3;
                  num4 = num4 + 1;
                  num6 = num5;
                  if (num4 >= self.maxColumns) {
                    break;
                  }
                }
              }
              sum3 = self.columnHeights[num4];
            }
          }
          if (num6 < tmp4) {
            tmp4 = num6;
            tmp5 = num;
          }
          MAX_VALUE = tmp4;
          num2 = tmp5;
          num = sum;
          num3 = tmp5;
        } while (sum <= self.maxColumns - span);
      }
      const columnHeights = self.columnHeights;
      const items = [...columnHeights.slice(num3, num3 + span)];
      const applyResult = Math.max.apply(items);
      layout.x = (self.boundedSize / self.maxColumns) * num3;
      layout.y = applyResult;
      let sum4 = num3;
      if (num3 < num3 + span) {
        do {
          self.columnHeights[sum4] = applyResult + layout.height;
          sum4 = sum4 + 1;
          sum5 = num3 + span;
        } while (sum4 < sum5);
      }
    },
  },
  {
    key: "updateColumnHeightsToIndex",
    value: function updateColumnHeightsToIndex(sum) {
      const self = this;
      let num = 0;
      const ArrayResult = Array(this.maxColumns);
      this.columnHeights = ArrayResult.fill(0);
      this.currentColumn = 0;
      if (0 < sum) {
        do {
          size = self.layouts[num];
          let result = self.boundedSize / self.maxColumns;
          let _Math = Math;
          let rounded = Math.round(size.width / result);
          let _Math2 = Math;
          let rounded1 = Math.round(size.x / result);
          let _Math3 = Math;
          let bound = Math.min(rounded1 + rounded, self.maxColumns);
          sum = rounded1;
          if (rounded1 < bound) {
            do {
              let _Math4 = Math;
              self.columnHeights[sum] = Math.max(self.columnHeights[sum], size.y + size.height);
              sum = sum + 1;
            } while (sum < bound);
          }
          if (!self.optimizeItemArrangement) {
            self.currentColumn = (rounded1 + rounded) % self.maxColumns;
          }
          num = num + 1;
        } while (num < sum);
      }
    },
  },
];
const RVMasonryLayoutManagerImpl_export = _createClass(RVMasonryLayoutManagerImpl, items);

export { RVMasonryLayoutManagerImpl_export as RVMasonryLayoutManagerImpl };
