// === Module 7076: RVLayoutManager ===

// Module 7076 (RVLayoutManager)
import _createClassDefault from "_createClass" /* 7051 */;
import _classCallCheck from "_classCallCheck" /* 7050 */;

const RVLayoutManager = arg1;
class RVLayoutManager {
  constructor(arg0, arg1) {
    self = this;
    tmp = closure_2(this, RVLayoutManager);
    this.requiresRepaint = false;
    this.maxItemsToProcess = 250;
    this.spanSizeInfo = {};
    this.spanTracker = [];
    this.currentMaxIndexWithChangedLayout = -1;
    this.lastSkippedLayoutIndex = Number.MAX_VALUE;
    multiTypeAverageWindow = new require("AverageWindow").MultiTypeAverageWindow(5, 200);
    this.heightAverageWindow = multiTypeAverageWindow;
    multiTypeAverageWindow1 = new require("AverageWindow").MultiTypeAverageWindow(5, 200);
    this.widthAverageWindow = multiTypeAverageWindow1;
    ({ getItemType: this.getItemType, overrideItemLayout: this.overrideItemLayout } = global);
    layouts = undefined;
    if (arg1 != null) {
      layouts = arg1.layouts;
    }
    if (layouts == null) {
      layouts = [];
    }
    self.layouts = layouts;
    if (arg1) {
      updateLayoutParamsResult = self.updateLayoutParams(global);
    } else {
      _Boolean = Boolean;
      self.horizontal = Boolean(global.horizontal);
      ({ windowSize: self.windowSize, maxColumns } = global);
      if (maxColumns == null) {
        maxColumns = 1;
      }
      self.maxColumns = maxColumns;
    }
    return;
  }
}
let items = [
  {
    key: "getEstimatedWidth",
    value: function getEstimatedWidth(arg0) {
      const widthAverageWindow = this.widthAverageWindow;
      return widthAverageWindow.getCurrentValue(this.getItemType(arg0));
    }
  },
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
      const result = RVLayoutManager(7077).findFirstVisibleIndex(this.layouts, bound1, this.horizontal);
      const obj = RVLayoutManager(7077);
      const findLastVisibleIndexResult = RVLayoutManager(7077).findLastVisibleIndex(this.layouts, arg1, this.horizontal);
      if (-1 !== result) {
        if (-1 !== findLastVisibleIndexResult) {
          let EMPTY = new RVLayoutManager(7064).ConsecutiveNumbers(result, findLastVisibleIndexResult);
        }
        return EMPTY;
      }
      EMPTY = RVLayoutManager(7064).ConsecutiveNumbers.EMPTY;
      const obj2 = RVLayoutManager(7077);
    }
  },
  {
    key: "deleteLayout",
    value: function deleteLayout(arr) {
      const self = this;
      const sorted = arr.sort((arg0, arg1) => arg1 - arg0);
      while (tmp2 !== undefined) {
        let layouts = self.layouts;
        let spliceResult = layouts.splice(tmp3, 1);
        continue;
      }
      const items = [...arr];
      const applyResult = Math.min.apply(items);
      const minRecomputeIndex = self.getMinRecomputeIndex(applyResult);
      self._recomputeLayouts(minRecomputeIndex, self.getMaxRecomputeIndex(applyResult));
    }
  },
  {
    key: "modifyLayout",
    value: function modifyLayout(arr, arg1) {
      const self = this;
      closure_0 = arg1;
      this.maxItemsToProcess = Math.max(this.maxItemsToProcess, 10 * arr.length);
      let found = arr;
      if (this.layouts.length > arg1) {
        self.layouts.length = arg1;
        self.spanTracker.length = arg1;
        MAX_VALUE = arg1 - 1;
        found = arr.filter((item, index) => item.index < closure_0);
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
      const minIndexWithChangedSpan = self.computeMinIndexWithChangedSpan(found);
      let processLayoutInfoResult = self.processLayoutInfo(found, arg1);
      if (processLayoutInfoResult == null) {
        processLayoutInfoResult = bound;
      }
      const bound1 = Math.min(bound, self.lastSkippedLayoutIndex, minIndexWithChangedSpan, processLayoutInfoResult, self.computeEstimatesAndMinMaxChangedLayout(found));
      if (bound1 >= 0) {
        if (bound1 < arg1) {
          self._recomputeLayouts(bound1, self.getMaxRecomputeIndex(bound1));
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
        error = new Error(RVLayoutManager(7038).ErrorMessages.indexOutOfBounds);
        throw error;
      } else {
        let tmp = self.layouts[arg0];
        if (!tmp) {
          const obj = { x: 0, y: 0, width: 0, height: 0 };
          self.layouts[arg0] = obj;
          tmp = obj;
        }
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
      if (num == null) {
        num = 1;
      }
      const bound = Math.min(num, self.maxColumns);
      if (!flag) {
        self.spanTracker[sum] = bound;
      }
      return bound;
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
    value: function _recomputeLayouts(bound1, maxRecomputeIndex) {
      const self = this;
      this.recomputeLayouts(bound1, maxRecomputeIndex);
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
        let size = self.layouts[index];
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
          let obj = RVLayoutManager(7078);
          result = obj.areDimensionsNotEqual(size.height, dimensions.height);
        }
        if (!result) {
          let obj2 = RVLayoutManager(7078);
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

export const RVLayoutManager = _createClassDefault(RVLayoutManager, items);