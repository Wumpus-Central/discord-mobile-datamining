// === Module 6377: RVLayoutManager ===

// Module 6377 (RVLayoutManager)
import ErrorMessages from "ErrorMessages" /* 6339 */;
import _createClassDefault from "_createClass" /* 6352 */;
import AverageWindow from "AverageWindow" /* 6356 */;
import ConsecutiveNumbers from "ConsecutiveNumbers" /* 6365 */;
import findFirstVisibleIndex from "findFirstVisibleIndex" /* 6378 */;
import react_native from "react-native" /* 6379 */;
import _classCallCheck from "_classCallCheck" /* 6351 */;

let MAX_VALUE, size;

class RVLayoutManager {
  constructor(horizontal, layouts) {
    let maxColumns;
    const self = this;
    _classCallCheck(this, RVLayoutManager);
    this.requiresRepaint = false;
    this.maxItemsToProcess = 250;
    this.spanSizeInfo = {};
    this.spanTracker = [];
    this.currentMaxIndexWithChangedLayout = -1;
    this.lastSkippedLayoutIndex = Number.MAX_VALUE;
    const multiTypeAverageWindow = new AverageWindow.MultiTypeAverageWindow(5, 200);
    this.heightAverageWindow = multiTypeAverageWindow;
    const multiTypeAverageWindow1 = new AverageWindow.MultiTypeAverageWindow(5, 200);
    this.widthAverageWindow = multiTypeAverageWindow1;
    ({ getItemType: this.getItemType, overrideItemLayout: this.overrideItemLayout } = horizontal);
    layouts = undefined;
    if (layouts != null) {
      layouts = layouts.layouts;
    }
    if (layouts == null) {
      layouts = [];
    }
    self.layouts = layouts;
    if (layouts) {
      self.updateLayoutParams(horizontal);
    } else {
      const _Boolean = Boolean;
      self.horizontal = Boolean(horizontal.horizontal);
      ({ windowSize: self.windowSize, maxColumns } = horizontal);
      if (maxColumns == null) {
        maxColumns = 1;
      }
      self.maxColumns = maxColumns;
    }
  }
}
const entry = {
  key: "getEstimatedWidth",
  value: function getEstimatedWidth(arg0) {
    const widthAverageWindow = this.widthAverageWindow;
    return widthAverageWindow.getCurrentValue(this.getItemType(arg0));
  }
};
let items = [
  entry,
  {
    key: "getEstimatedHeight",
    value: function getEstimatedHeight(arg0) {
      const heightAverageWindow = this.heightAverageWindow;
      return heightAverageWindow.getCurrentValue(this.getItemType(arg0));
    }
  },
  {
    key: "isHorizontal",
    value: function isHorizontal() {
      return this.horizontal;
    }
  },
  {
    key: "getWindowsSize",
    value: function getWindowsSize() {
      return this.windowSize;
    }
  },
  {
    key: "getVisibleLayouts",
    value: function getVisibleLayouts(bound1, arg1) {
      const obj = findFirstVisibleIndex;
      const result = obj.findFirstVisibleIndex(this.layouts, bound1, this.horizontal);
      const obj2 = findFirstVisibleIndex;
      const findLastVisibleIndexResult = obj2.findLastVisibleIndex(this.layouts, arg1, this.horizontal);
      if (-1 !== result) {
        let EMPTY;
        if (-1 !== findLastVisibleIndexResult) {
          const self = this;
          const self2 = this;
          EMPTY = new ConsecutiveNumbers.ConsecutiveNumbers(result, findLastVisibleIndexResult);
        }
        return EMPTY;
      }
      EMPTY = ConsecutiveNumbers.ConsecutiveNumbers.EMPTY;
    }
  },
  {
    key: "deleteLayout",
    value: function deleteLayout(arr) {
      const self = this;
      const sorted = arr.sort((arg0, arg1) => arg1 - arg0);
      const tmp2 = arr[Symbol.iterator]();
      while (tmp2 !== undefined) {
        let layouts = self.layouts;
        let spliceResult = layouts.splice(tmp3, 1);
        continue;
      }
      const items = [...arr];
      const applyResult = Math.min.apply(items);
      const _recomputeLayouts = self._recomputeLayouts;
      const minRecomputeIndex = self.getMinRecomputeIndex(applyResult);
      _recomputeLayouts(minRecomputeIndex, self.getMaxRecomputeIndex(applyResult));
    }
  },
  {
    key: "modifyLayout",
    value: function modifyLayout(arr, arg1) {
      const self = this;
      let closure_0 = arg1;
      this.maxItemsToProcess = Math.max(this.maxItemsToProcess, 10 * arr.length);
      let found = arr;
      if (this.layouts.length > arg1) {
        self.layouts.length = arg1;
        self.spanTracker.length = arg1;
        MAX_VALUE = arg1 - 1;
        found = arr.filter((item) => item.index < closure_0);
      }
      const bound = Math.min(MAX_VALUE, self.computeEstimatesAndMinMaxChangedLayout(found));
      if (self.layouts.length < arg1) {
        if (arg1 > 0) {
          self.layouts.length = arg1;
          self.spanTracker.length = arg1;
          let sum = length;
          if (self.layouts.length < arg1) {
            do {
              let layout = self.getLayout(sum);
              let span = self.getSpan(sum);
              sum = sum + 1;
            } while (sum < arg1);
          }
          self.recomputeLayouts(self.layouts.length, arg1 - 1);
        }
      }
      const _Math = Math;
      const lastSkippedLayoutIndex = self.lastSkippedLayoutIndex;
      const minIndexWithChangedSpan = self.computeMinIndexWithChangedSpan(found);
      let processLayoutInfoResult = self.processLayoutInfo(found, arg1);
      if (processLayoutInfoResult == null) {
        processLayoutInfoResult = bound;
      }
      const minResult = min(bound, lastSkippedLayoutIndex, minIndexWithChangedSpan, processLayoutInfoResult, self.computeEstimatesAndMinMaxChangedLayout(found));
      if (minResult >= 0) {
        if (minResult < arg1) {
          self._recomputeLayouts(minResult, self.getMaxRecomputeIndex(minResult));
        }
      }
      self.currentMaxIndexWithChangedLayout = -1;
    }
  },
  {
    key: "getLayout",
    value: function getLayout(arg0) {
      const self = this;
      if (arg0 >= this.layouts.length) {
        const _Error = Error;
        const self2 = this;
        const self3 = this;
        const error = new Error(ErrorMessages.ErrorMessages.indexOutOfBounds);
        throw error;
      } else {
        let tmp = self.layouts[arg0];
        if (!tmp) {
          size = { x: 0, y: 0, width: 0, height: 0 };
          self.layouts[arg0] = size;
          tmp = size;
        }
        const tmp2 = tmp.isWidthMeasured && tmp.isHeightMeasured;
        if (!tmp2) {
          self.estimateLayout(arg0);
        }
        return tmp;
      }
    }
  },
  {
    key: "updateLayoutParams",
    value: function updateLayoutParams(maxColumns) {
      let horizontal;
      const self = this;
      ({ windowSize: this.windowSize, horizontal } = maxColumns);
      if (horizontal == null) {
        horizontal = self.horizontal;
      }
      self.horizontal = horizontal;
      maxColumns = maxColumns.maxColumns;
      if (maxColumns == null) {
        maxColumns = self.maxColumns;
      }
      self.maxColumns = maxColumns;
      let optimizeItemArrangement = maxColumns.optimizeItemArrangement;
      if (optimizeItemArrangement == null) {
        optimizeItemArrangement = self.optimizeItemArrangement;
      }
      self.optimizeItemArrangement = optimizeItemArrangement;
    }
  },
  {
    key: "getLayoutCount",
    value: function getLayoutCount() {
      return this.layouts.length;
    }
  },
  {
    key: "isInLastRow",
    value: function isInLastRow(arg0) {
      return false;
    }
  },
  {
    key: "getSpan",
    value: function getSpan(sum, arg1) {
      let flag = arg1;
      if (arg1 === undefined) {
        flag = false;
      }
      const self = this;
      this.spanSizeInfo.span = undefined;
      this.overrideItemLayout(sum, this.spanSizeInfo);
      let num = this.spanSizeInfo.span;
      const _Math = Math;
      if (num == null) {
        num = 1;
      }
      const minResult = min(num, self.maxColumns);
      if (!flag) {
        self.spanTracker[sum] = minResult;
      }
      return minResult;
    }
  },
  {
    key: "handleSpanChange",
    value: function handleSpanChange(arg0) {

    }
  },
  {
    key: "getMaxRecomputeIndex",
    value: function getMaxRecomputeIndex(applyResult) {
      return Math.min(Math.max(applyResult, this.currentMaxIndexWithChangedLayout) + this.maxItemsToProcess, this.layouts.length - 1);
    }
  },
  {
    key: "getMinRecomputeIndex",
    value: function getMinRecomputeIndex(applyResult) {
      return applyResult;
    }
  },
  {
    key: "_recomputeLayouts",
    value: function _recomputeLayouts(minRecomputeIndex, maxRecomputeIndex) {
      const self = this;
      this.recomputeLayouts(minRecomputeIndex, maxRecomputeIndex);
      const tmp2 = this.lastSkippedLayoutIndex >= minRecomputeIndex && self.lastSkippedLayoutIndex <= maxRecomputeIndex;
      if (tmp2) {
        const _Number = Number;
        self.lastSkippedLayoutIndex = Number.MAX_VALUE;
      }
      if (maxRecomputeIndex + 1 < self.layouts.length) {
        const _Math = Math;
        self.lastSkippedLayoutIndex = Math.min(maxRecomputeIndex + 1, self.lastSkippedLayoutIndex);
        const diff = self.layouts.length - 1;
        if (self.layouts[diff].y < self.layouts[maxRecomputeIndex].y) {
          self.recomputeLayouts(self.lastSkippedLayoutIndex, diff);
          const _Number2 = Number;
          self.lastSkippedLayoutIndex = Number.MAX_VALUE;
        }
      }
    }
  },
  {
    key: "computeEstimatesAndMinMaxChangedLayout",
    value: function computeEstimatesAndMinMaxChangedLayout(found) {
      const self = this;
      const iter = found[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let index = nextResult.index;
        let tmp2 = index;
        let dimensions = nextResult.dimensions;
        size = self.layouts[index];
        let result = index >= self.lastSkippedLayoutIndex;
        if (!result) {
          result = !size;
        }
        if (!result) {
          result = !size.isHeightMeasured;
        }
        if (!result) {
          result = !size.isWidthMeasured;
        }
        if (!result) {
          let obj = react_native;
          result = obj.areDimensionsNotEqual(size.height, dimensions.height);
        }
        if (!result) {
          let obj2 = react_native;
          result = obj2.areDimensionsNotEqual(size.width, dimensions.width);
        }
        if (result) {
          let _Math = Math;
          MAX_VALUE = Math.min(MAX_VALUE, tmp2);
          let _Math2 = Math;
          self.currentMaxIndexWithChangedLayout = Math.max(self.currentMaxIndexWithChangedLayout, tmp2);
        }
        let heightAverageWindow = self.heightAverageWindow;
        let addValueResult = heightAverageWindow.addValue(dimensions.height, self.getItemType(tmp2));
        let widthAverageWindow = self.widthAverageWindow;
        let addValueResult1 = widthAverageWindow.addValue(dimensions.width, self.getItemType(tmp2));
        continue;
      }
      return MAX_VALUE;
    }
  },
  {
    key: "computeMinIndexWithChangedSpan",
    value: function computeMinIndexWithChangedSpan(found) {
      const self = this;
      const iter = found[Symbol.iterator]();
      while (iter !== undefined) {
        let index = iter.next().index;
        let tmp = index;
        let span = self.getSpan(index, true);
        if (span !== self.spanTracker[index]) {
          self.spanTracker[tmp] = tmp3;
          let handleSpanChangeResult = self.handleSpanChange(tmp);
          let _Math = Math;
          MAX_VALUE = Math.min(MAX_VALUE, tmp);
        }
        continue;
      }
      return MAX_VALUE;
    }
  }
];
const RVLayoutManager_export = _createClassDefault(RVLayoutManager, items);

export { RVLayoutManager_export as RVLayoutManager };