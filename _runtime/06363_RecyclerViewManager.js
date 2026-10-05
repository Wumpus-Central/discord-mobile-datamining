// === Module 6363: RecyclerViewManager ===

// Module 6363 (RecyclerViewManager)
import ErrorMessages from "ErrorMessages" /* 6339 */;
import _createClassDefault from "_createClass" /* 6352 */;
import RVEngagedIndicesTrackerImpl from "RVEngagedIndicesTrackerImpl" /* 6364 */;
import RenderStackManager from "RenderStackManager" /* 6366 */;
import _modDef6367 from "module_6367" /* 6367 */;
import RVMasonryLayoutManagerImpl from "RVMasonryLayoutManagerImpl" /* 6369 */;
import RVGridLayoutManagerImpl from "RVGridLayoutManagerImpl" /* 6380 */;
import RVLinearLayoutManagerImpl2 from "RVLinearLayoutManagerImpl" /* 6381 */;
import WarningMessages from "WarningMessages" /* 6382 */;
import _classCallCheck from "_classCallCheck" /* 6351 */;

let size;

class RecyclerViewManager {
  constructor(propsRef) {
    const self = this;
    _classCallCheck(this, RecyclerViewManager);
    this.initialDrawBatchSize = 2;
    this.isFirstLayoutComplete = false;
    this.hasRenderedProgressively = false;
    this.progressiveRenderCount = 0;
    this._isDisposed = false;
    this._isLayoutManagerDirty = false;
    this._animationOptimizationsEnabled = false;
    this.firstItemOffset = 0;
    this.ignoreScrollEvents = false;
    this.isFirstPaintOnUiComplete = false;
    this.isInitialScrollComplete = false;
    this.updateRenderStack = (arg0) => {
      let getDataKey;
      let getItemType;
      const renderStackManager = self.renderStackManager;
      ({ getDataKey, getItemType } = self);
      renderStackManager.sync(getDataKey, getItemType, arg0, self.getDataLength());
    };
    const getDataKey = this.getDataKey;
    this.getDataKey = getDataKey.bind(this);
    const getItemType = this.getItemType;
    this.getItemType = getItemType.bind(this);
    const overrideItemLayout = this.overrideItemLayout;
    this.overrideItemLayout = overrideItemLayout.bind(this);
    this.propsRef = propsRef;
    const rVEngagedIndicesTrackerImpl = new RVEngagedIndicesTrackerImpl.RVEngagedIndicesTrackerImpl();
    this.engagedIndicesTracker = rVEngagedIndicesTrackerImpl;
    let renderStackManager = new RenderStackManager.RenderStackManager(propsRef.maxItemsInRecyclePool);
    this.renderStackManager = renderStackManager;
    this.itemViewabilityManager = new _modDef6367(this);
    new _modDef6367(this);
    this.isInitialScrollComplete = undefined === this.getInitialScrollIndex();
    this.checkPropsAndWarn();
  }
}
let obj = {
  key: "animationOptimizationsEnabled",
  get() {
    return this._animationOptimizationsEnabled;
  },
  set(_animationOptimizationsEnabled) {
    this._animationOptimizationsEnabled = _animationOptimizationsEnabled;
    this.renderStackManager.disableRecycling = _animationOptimizationsEnabled;
  }
};
const items = [
  obj,
  {
    key: "isOffsetProjectionEnabled",
    get() {
      return this.engagedIndicesTracker.enableOffsetProjection;
    }
  },
  {
    key: "isDisposed",
    get() {
      return this._isDisposed;
    }
  },
  {
    key: "numColumns",
    get() {
      let num = this.propsRef.numColumns;
      if (num == null) {
        num = 1;
      }
      return num;
    }
  },
  {
    key: "props",
    get() {
      return this.propsRef;
    }
  },
  {
    key: "setOffsetProjectionEnabled",
    value: function setOffsetProjectionEnabled(enableOffsetProjection) {
      this.engagedIndicesTracker.enableOffsetProjection = enableOffsetProjection;
    }
  },
  {
    key: "updateProps",
    value: function updateProps(propsRef) {
      const self = this;
      this.propsRef = propsRef;
      let drawDistance = propsRef.drawDistance;
      const engagedIndicesTracker = this.engagedIndicesTracker;
      if (drawDistance == null) {
        drawDistance = self.engagedIndicesTracker.drawDistance;
      }
      engagedIndicesTracker.drawDistance = drawDistance;
      const overrideProps = self.propsRef.overrideProps;
      let initialDrawBatchSize;
      if (overrideProps != null) {
        initialDrawBatchSize = overrideProps.initialDrawBatchSize;
      }
      if (initialDrawBatchSize == null) {
        initialDrawBatchSize = self.initialDrawBatchSize;
      }
      self.initialDrawBatchSize = initialDrawBatchSize;
    }
  },
  {
    key: "updateScrollOffset",
    value: function updateScrollOffset(arg0, arg1) {
      const self = this;
      if (this.layoutManager) {
        if (!self._isDisposed) {
          const engagedIndicesTracker = self.engagedIndicesTracker;
          const updateScrollOffsetResult = engagedIndicesTracker.updateScrollOffset(arg0 - self.firstItemOffset, arg1, self.layoutManager);
          if (updateScrollOffsetResult) {
            self.updateRenderStack(updateScrollOffsetResult);
            return updateScrollOffsetResult;
          }
        }
      }
    }
  },
  {
    key: "updateAverageRenderTime",
    value: function updateAverageRenderTime(averageRenderTime) {
      this.engagedIndicesTracker.averageRenderTime = averageRenderTime;
    }
  },
  {
    key: "getIsFirstLayoutComplete",
    value: function getIsFirstLayoutComplete() {
      return this.isFirstLayoutComplete;
    }
  },
  {
    key: "getLayout",
    value: function getLayout(arg0) {
      if (this.layoutManager) {
        const layoutManager = tmp.layoutManager;
        return layoutManager.getLayout(arg0);
      } else {
        const _Error = Error;
        const self = this;
        const self2 = this;
        const error = new Error(ErrorMessages.ErrorMessages.layoutManagerNotInitializedLayoutInfo);
        throw error;
      }
    }
  },
  {
    key: "tryGetLayout",
    value: function tryGetLayout(currentStickyIndex) {
      const self = this;
      if (this.layoutManager) {
        if (currentStickyIndex >= 0) {
          const layoutManager = self.layoutManager;
          if (currentStickyIndex < layoutManager.getLayoutCount()) {
            const layoutManager2 = self.layoutManager;
            return layoutManager2.getLayout(currentStickyIndex);
          }
        }
      }
    }
  },
  {
    key: "isInLastRow",
    value: function isInLastRow(arg0) {
      const layoutManager = this.layoutManager;
      let flag;
      if (layoutManager != null) {
        flag = layoutManager.isInLastRow(arg0);
      }
      if (flag == null) {
        flag = false;
      }
      return flag;
    }
  },
  {
    key: "getChildContainerDimensions",
    value: function getChildContainerDimensions() {
      if (this.layoutManager) {
        const layoutManager = this.layoutManager;
        return layoutManager.getLayoutSize();
      } else {
        const _Error = Error;
        const self = this;
        const self2 = this;
        const error = new Error(ErrorMessages.ErrorMessages.layoutManagerNotInitializedChildContainer);
        throw error;
      }
    }
  },
  {
    key: "getRenderStack",
    value: function getRenderStack() {
      const renderStackManager = this.renderStackManager;
      return renderStackManager.getRenderStack();
    }
  },
  {
    key: "getWindowSize",
    value: function getWindowSize() {
      if (this.layoutManager) {
        const layoutManager = this.layoutManager;
        return layoutManager.getWindowsSize();
      } else {
        const _Error = Error;
        const self = this;
        const self2 = this;
        const error = new Error(ErrorMessages.ErrorMessages.layoutManagerNotInitializedWindowSize);
        throw error;
      }
    }
  },
  {
    key: "getLastScrollOffset",
    value: function getLastScrollOffset() {
      return this.engagedIndicesTracker.scrollOffset;
    }
  },
  {
    key: "getMaxScrollOffset",
    value: function getMaxScrollOffset() {
      const self = this;
      const _Math = Math;
      const horizontal = this.propsRef.horizontal;
      size = this.getChildContainerDimensions();
      const horizontal2 = self.propsRef.horizontal;
      const tmp = horizontal ? size.width : size.height;
      const size2 = self.getWindowSize();
      return max(0, tmp - (horizontal2 ? size2.width : size2.height) + self.firstItemOffset);
    }
  },
  {
    key: "getAbsoluteLastScrollOffset",
    value: function getAbsoluteLastScrollOffset() {
      return this.engagedIndicesTracker.scrollOffset + this.firstItemOffset;
    }
  },
  {
    key: "setScrollDirection",
    value: function setScrollDirection(arg0) {
      const engagedIndicesTracker = this.engagedIndicesTracker;
      engagedIndicesTracker.setScrollDirection(arg0);
    }
  },
  {
    key: "resetVelocityCompute",
    value: function resetVelocityCompute() {
      const engagedIndicesTracker = this.engagedIndicesTracker;
      engagedIndicesTracker.resetVelocityHistory();
    }
  },
  {
    key: "updateLayoutParams",
    value: function updateLayoutParams(windowSize, firstItemOffset) {
      let flag2;
      let layoutManager2;
      const self = this;
      this.firstItemOffset = firstItemOffset;
      const layoutManagerClass = this.getLayoutManagerClass();
      if (this.layoutManager) {
        const layoutManager = self.layoutManager;
        let isHorizontalResult;
        const _Boolean = Boolean;
        if (layoutManager != null) {
          isHorizontalResult = layoutManager.isHorizontal();
        }
        const _Boolean2 = Boolean;
        const _BooleanResult = _Boolean(isHorizontalResult);
        if (_BooleanResult !== Boolean(self.propsRef.horizontal)) {
          const _Error = Error;
          const self4 = this;
          const self5 = this;
          const error = new Error(ErrorMessages.ErrorMessages.horizontalPropCannotBeToggled);
          throw error;
        }
      }
      if (self._isLayoutManagerDirty) {
        self.layoutManager = undefined;
        self._isLayoutManagerDirty = false;
      }
      const obj = { windowSize, maxColumns: self.numColumns, horizontal: Boolean(self.propsRef.horizontal), optimizeItemArrangement: flag2, overrideItemLayout: null, getItemType: null };
      flag2 = self.propsRef.optimizeItemArrangement;
      if (flag2 == null) {
        flag2 = true;
      }
      ({ overrideItemLayout: obj.overrideItemLayout, getItemType: obj.getItemType, layoutManager: layoutManager2 } = self);
      if (self.layoutManager instanceof layoutManagerClass) {
        layoutManager2.updateLayoutParams(obj);
      } else {
        const self2 = this;
        const self3 = this;
        const layoutManagerClass1 = new layoutManagerClass(obj, layoutManager2);
        self.layoutManager = layoutManagerClass1;
      }
    }
  },
  {
    key: "hasLayout",
    value: function hasLayout() {
      return undefined !== this.layoutManager;
    }
  },
  {
    key: "computeVisibleIndices",
    value: function computeVisibleIndices() {
      const self = this;
      if (this.layoutManager) {
        const engagedIndicesTracker = self.engagedIndicesTracker;
        return engagedIndicesTracker.computeVisibleIndices(self.layoutManager);
      } else {
        const _Error = Error;
        const self2 = this;
        const self3 = this;
        const error = new Error(ErrorMessages.ErrorMessages.layoutManagerNotInitializedVisibleIndices);
        throw error;
      }
    }
  },
  {
    key: "getEngagedIndices",
    value: function getEngagedIndices() {
      const engagedIndicesTracker = this.engagedIndicesTracker;
      return engagedIndicesTracker.getEngagedIndices();
    }
  },
  {
    key: "modifyChildrenLayout",
    value: function modifyChildrenLayout(arr, arg1) {
      const self = this;
      const layoutManager = this.layoutManager;
      if (layoutManager != null) {
        layoutManager.modifyLayout(arr, arg1);
      }
      let tmp3 = 0 !== arg1;
      if (tmp3) {
        let flag;
        const layoutManager2 = self.layoutManager;
        let requiresRepaint;
        if (layoutManager2 != null) {
          requiresRepaint = layoutManager2.requiresRepaint;
        }
        if (requiresRepaint) {
          self.layoutManager.requiresRepaint = false;
          flag = true;
        } else if (self.hasRenderedProgressively) {
          flag = self.isFirstPaintOnUiComplete && undefined !== self.recomputeEngagedIndices();
          self.isFirstPaintOnUiComplete && undefined !== self.recomputeEngagedIndices();
        } else {
          self.renderProgressively();
          flag = !self.hasRenderedProgressively;
        }
        tmp3 = flag;
      }
      return tmp3;
    }
  },
  {
    key: "computeItemViewability",
    value: function computeItemViewability() {
      const self = this;
      if (this.itemViewabilityManager.shouldListenToVisibleIndices) {
        let toArrayResult;
        const itemViewabilityManager = self.itemViewabilityManager;
        const updateViewableItems = itemViewabilityManager.updateViewableItems;
        if (self.propsRef.masonry) {
          const engagedIndicesTracker = self.engagedIndicesTracker;
          const engagedIndices = engagedIndicesTracker.getEngagedIndices();
          toArrayResult = engagedIndices.toArray();
        } else {
          const visibleIndices = self.computeVisibleIndices();
          toArrayResult = visibleIndices.toArray();
        }
        updateViewableItems(toArrayResult);
      }
    }
  },
  {
    key: "recordInteraction",
    value: function recordInteraction() {
      const itemViewabilityManager = this.itemViewabilityManager;
      itemViewabilityManager.recordInteraction();
    }
  },
  {
    key: "recomputeViewableItems",
    value: function recomputeViewableItems() {
      const itemViewabilityManager = this.itemViewabilityManager;
      const result = itemViewabilityManager.clearLastReportedViewableIndices();
      const itemViewability = this.computeItemViewability();
    }
  },
  {
    key: "processDataUpdate",
    value: function processDataUpdate() {
      let engagedIndicesTracker;
      let updateRenderStack;
      const self = this;
      if (this.hasLayout()) {
        const data = self.propsRef.data;
        let num;
        const modifyChildrenLayout = self.modifyChildrenLayout;
        if (data != null) {
          num = data.length;
        }
        if (num == null) {
          num = 0;
        }
        modifyChildrenLayout([], num);
        const tmp3 = self.hasRenderedProgressively && !self.recomputeEngagedIndices();
        if (tmp3) {
          ({ engagedIndicesTracker, updateRenderStack } = self);
          updateRenderStack(engagedIndicesTracker.getEngagedIndices());
        }
      }
    }
  },
  {
    key: "recomputeEngagedIndices",
    value: function recomputeEngagedIndices() {
      return this.updateScrollOffset(this.getAbsoluteLastScrollOffset());
    }
  },
  {
    key: "restoreIfNeeded",
    value: function restoreIfNeeded() {
      if (this._isDisposed) {
        tmp._isDisposed = false;
      }
    }
  },
  {
    key: "dispose",
    value: function dispose() {
      this._isDisposed = true;
      const itemViewabilityManager = this.itemViewabilityManager;
      itemViewabilityManager.dispose();
    }
  },
  {
    key: "markLayoutManagerDirty",
    value: function markLayoutManagerDirty() {
      this._isLayoutManagerDirty = true;
    }
  },
  {
    key: "getInitialScrollIndex",
    value: function getInitialScrollIndex() {
      const self = this;
      let initialScrollIndex = this.propsRef.initialScrollIndex;
      if (initialScrollIndex == null) {
        const maintainVisibleContentPosition = self.propsRef.maintainVisibleContentPosition;
        let prop;
        if (maintainVisibleContentPosition != null) {
          prop = maintainVisibleContentPosition.startRenderingFromBottom;
        }
        let diff;
        if (prop) {
          diff = self.getDataLength() - 1;
        }
        initialScrollIndex = diff;
      }
      return initialScrollIndex;
    }
  },
  {
    key: "shouldMaintainVisibleContentPosition",
    value: function shouldMaintainVisibleContentPosition() {
      const maintainVisibleContentPosition = this.propsRef.maintainVisibleContentPosition;
      let disabled;
      if (maintainVisibleContentPosition != null) {
        disabled = maintainVisibleContentPosition.disabled;
      }
      return !disabled;
    }
  },
  {
    key: "getDataLength",
    value: function getDataLength() {
      const data = this.propsRef.data;
      let num;
      if (data != null) {
        num = data.length;
      }
      if (num == null) {
        num = 0;
      }
      return num;
    }
  },
  {
    key: "hasStableDataKeys",
    value: function hasStableDataKeys() {
      return Boolean(this.propsRef.keyExtractor);
    }
  },
  {
    key: "getDataKey",
    value: function getDataKey(bound) {
      const propsRef = this.propsRef;
      const keyExtractor = propsRef.keyExtractor;
      let keyExtractorResult;
      if (keyExtractor != null) {
        keyExtractorResult = keyExtractor(this.propsRef.data[bound], bound);
      }
      if (keyExtractorResult == null) {
        keyExtractorResult = bound.toString();
      }
      return keyExtractorResult;
    }
  },
  {
    key: "getLayoutManagerClass",
    value: function getLayoutManagerClass() {
      let RVLinearLayoutManagerImpl;
      const self = this;
      if (this.propsRef.masonry) {
        if (self.propsRef.horizontal) {
          const _Error2 = Error;
          const self4 = this;
          const self5 = this;
          const error = new Error(ErrorMessages.ErrorMessages.masonryAndHorizontalIncompatible);
          throw error;
        }
      }
      if (self.numColumns > 1) {
        if (self.propsRef.horizontal) {
          const _Error = Error;
          const self2 = this;
          const self3 = this;
          const error1 = new Error(ErrorMessages.ErrorMessages.numColumnsAndHorizontalIncompatible);
          throw error1;
        }
      }
      if (self.propsRef.masonry) {
        RVLinearLayoutManagerImpl = RVMasonryLayoutManagerImpl.RVMasonryLayoutManagerImpl;
      } else {
        if (self.numColumns > 1) {
          if (!self.propsRef.horizontal) {
            RVLinearLayoutManagerImpl = RVGridLayoutManagerImpl.RVGridLayoutManagerImpl;
          }
        }
        RVLinearLayoutManagerImpl = RVLinearLayoutManagerImpl2.RVLinearLayoutManagerImpl;
      }
      return RVLinearLayoutManagerImpl;
    }
  },
  {
    key: "applyInitialScrollAdjustment",
    value: function applyInitialScrollAdjustment() {
      const self = this;
      if (this.layoutManager) {
        if (0 !== self.getDataLength()) {
          const initialScrollIndex = self.getInitialScrollIndex();
          if (undefined !== initialScrollIndex) {
            const layoutManager2 = self.layoutManager;
            layoutManager2.recomputeLayouts(0, initialScrollIndex);
            const layoutManager3 = self.layoutManager;
            const point2 = layoutManager3.getLayout(initialScrollIndex);
            self.engagedIndicesTracker.scrollOffset = self.propsRef.horizontal ? point2.x : point2.y;
          } else {
            const layoutManager = self.layoutManager;
            const point = layoutManager.getLayout(0);
            self.engagedIndicesTracker.scrollOffset = (self.propsRef.horizontal ? point.x : point.y) - self.firstItemOffset;
          }
        }
      }
    }
  },
  {
    key: "renderProgressively",
    value: function renderProgressively() {
      const self = this;
      this.progressiveRenderCount = this.progressiveRenderCount + 1;
      const layoutManager = this.layoutManager;
      if (layoutManager) {
        const result = self.applyInitialScrollAdjustment();
        const visibleIndices = self.computeVisibleIndices();
        self.hasRenderedProgressively = visibleIndices.every((item) => {
          const tmp = layoutManager.getLayout(item).isHeightMeasured && layoutManager.getLayout(item).isWidthMeasured;
          return tmp;
        });
        if (self.hasRenderedProgressively) {
          self.isFirstLayoutComplete = true;
        }
        const _Math = Math;
        const numColumns = self.numColumns;
        const initialDrawBatchSize = self.initialDrawBatchSize;
        const tmp4 = !self.hasRenderedProgressively;
        if (tmp4) {
          const _Math2 = Math;
          self.updateRenderStack(visibleIndices.slice(0, Math.min(visibleIndices.length, self.getRenderStack().size + tmp3)));
        }
      }
    }
  },
  {
    key: "getItemType",
    value: function getItemType(arg0) {
      const propsRef = this.propsRef;
      const getItemType = propsRef.getItemType;
      let str;
      if (getItemType != null) {
        str = getItemType(tmp.propsRef.data[arg0], arg0);
      }
      if (str == null) {
        str = "default";
      }
      return str.toString();
    }
  },
  {
    key: "overrideItemLayout",
    value: function overrideItemLayout(sum, data) {
      const self = this;
      const propsRef = this.propsRef;
      if (propsRef != null) {
        const overrideItemLayout = propsRef.overrideItemLayout;
        if (overrideItemLayout != null) {
          overrideItemLayout(data, self.propsRef.data[sum], sum, self.numColumns, self.propsRef.extraData);
        }
      }
    }
  },
  {
    key: "checkPropsAndWarn",
    value: function checkPropsAndWarn() {
      const tmp = this.propsRef.onStartReached && !this.propsRef.keyExtractor;
      if (tmp) {
        const _console = console;
        console.warn(WarningMessages.WarningMessages.keyExtractorNotDefinedForMVCP);
      }
    }
  }
];
const RecyclerViewManager_export = _createClassDefault(RecyclerViewManager, items);

export { RecyclerViewManager_export as RecyclerViewManager };