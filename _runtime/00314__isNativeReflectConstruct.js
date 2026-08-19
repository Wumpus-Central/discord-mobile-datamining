// _runtime/00314__isNativeReflectConstruct.js
import javaScriptFlagGetterAll from "00027_javaScriptFlagGetter.js";
import _modDef38 from "metro/00038__.js";
import nullthrowsDefault from "00070_nullthrows.js";
import _inheritsDefault from "00098__inherits.js";
import ListMetricsAggregatorDefault from "00315_ListMetricsAggregator.js";
import ChildListCollectionDefault from "00316_ChildListCollection.js";
import infoLogDefault from "00317_infoLog.js";
import InfoDefault from "00318_Info.js";
import ViewabilityHelperDefault from "00319_ViewabilityHelper.js";
import _isNativeReflectConstructDefault from "00321__isNativeReflectConstruct.js";
import clampDefault from "00323_clamp.js";
import _isNativeReflectConstructDefault2 from "00325__isNativeReflectConstruct.js";
import _objectWithoutProperties from "metro/00109__objectWithoutProperties.js";
import _classCallCheck from "metro/00041__classCallCheck.js";
import _possibleConstructorReturn from "metro/00093__possibleConstructorReturn.js";
import _getPrototypeOf from "00095__getPrototypeOf.js";
import importDefaultResult from "metro/00042__createClass.js";
import noop2 from "00019_noop.js";
import noop from "00019_noop.js";
import get_ActivityIndicator from "00017_get_ActivityIndicator.js";
import jsxProd from "react/00021_jsxProd.js";

let VirtualizedList = fn;
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
  } catch (err) {
  }
}
let closure_4 = ["onContentSizeChange"];
({ cloneElement: c10, isValidElement: unpackModuleId } = noop);
({ I18nManager: closure_12, Platform, RefreshControl: map1, ScrollView: closure_14, StyleSheet } = get_ActivityIndicator);
({ View: closure_16, findNodeHandle: closure_17 } = get_ActivityIndicator);
({ jsx: closure_18, jsxs: closure_19 } = jsxProd);
let c21 = false;
let c22 = "";
class VirtualizedList {
  constructor(arg0) {
    self = this;
    obj = closure_0;
    tmp = closure_6(this, closure_0);
    items = [];
    items[0] = global;
    tmp2 = closure_8;
    obj2 = closure_8(closure_0);
    tmp3 = closure_7;
    if (_isNativeReflectConstruct()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj2, items, tmp2(self).constructor);
    } else {
      constructResult = obj2.apply(self, items);
    }
    tmp3Result = tmp3(self, constructResult);
    closure_0 = tmp3Result;
    tmp3Result._getScrollMetrics = () => closure_0._scrollMetrics;
    tmp3Result._getOutermostParentListRef = () => {
      let outermostParentListRef = closure_0;
      if (closure_0._isNestedWithSameOrientation()) {
        const context = closure_0.context;
        outermostParentListRef = context.getOutermostParentListRef();
      }
      return outermostParentListRef;
    };
    tmp3Result._registerAsNestedChild = (ref) => {
      const _nestedChildLists = closure_0._nestedChildLists;
      _nestedChildLists.add(ref.ref, ref.cellKey);
      if (closure_0._hasInteracted) {
        ref.ref.recordInteraction();
      }
    };
    tmp3Result._unregisterAsNestedChild = (ref) => {
      const _nestedChildLists = closure_0._nestedChildLists;
      _nestedChildLists.remove(ref.ref);
    };
    tmp3Result._onUpdateSeparators = (arr) => {
      closure_0 = arg1;
      const item = arr.forEach((item, index) => {
        let obj = null != item;
        if (obj) {
          obj = _cellRefs._cellRefs[item];
        }
        if (obj) {
          obj.updateSeparatorProps(_cellRefs);
        }
      });
    };
    tmp3Result._getSpacerKey = (arg0) => {
      let str = "width";
      if (arg0) {
        str = "height";
      }
      return str;
    };
    tmp3Result._cellRefs = {};
    tmp6 = closure_1;
    tmp7 = closure_3;
    tmp8 = new require("ListMetricsAggregator")();
    tmp3Result._listMetrics = tmp8;
    tmp3Result._footerLength = 0;
    tmp3Result._hasTriggeredInitialScrollToIndex = false;
    tmp3Result._hasInteracted = false;
    tmp3Result._hasMore = false;
    tmp3Result._hasWarned = {};
    tmp3Result._headerLength = 0;
    tmp3Result._hiPriInProgress = false;
    map = new Map();
    tmp3Result._indicesToKeys = map;
    tmp3Result._lastFocusedCellKey = null;
    tmp10 = new require("ChildListCollection")();
    tmp3Result._nestedChildLists = tmp10;
    tmp3Result._offsetFromParentVirtualizedList = 0;
    tmp3Result._pendingViewabilityUpdate = false;
    tmp3Result._prevParentOffset = 0;
    tmp3Result._scrollMetrics = { dOffset: 0, dt: 10, offset: 0, timestamp: 0, velocity: 0, visibleLength: 0, zoomScale: 1 };
    tmp3Result._scrollRef = null;
    tmp3Result._sentStartForContentLength = 0;
    tmp3Result._sentEndForContentLength = 0;
    tmp3Result._updateCellsToRenderTimeoutID = null;
    tmp3Result._viewabilityTuples = [];
    tmp3Result._captureScrollRef = (_scrollRef) => {
      closure_0._scrollRef = _scrollRef;
    };
    tmp3Result._defaultRenderScrollComponent = (onRefresh) => {
      let progressViewOffset = onRefresh.onRefresh;
      if (closure_0._isNestedWithSameOrientation()) {
        const onContentSizeChange = onRefresh.onContentSizeChange;
        let obj = {};
        const merged = Object.assign(callback2(onRefresh, closure_4));
        return closure_2_18(closure_2_16, obj);
      } else if (progressViewOffset) {
        let str = onRefresh.refreshing;
        if (str == null) {
          str = "undefined";
        }
        _modDef38(typeof onRefresh.refreshing === "boolean", `\`refreshing\` prop must be set as a boolean in order to use \`onRefresh\`, but got \`${tmp11(str)}\``);
        obj = {};
        const merged1 = Object.assign(onRefresh);
        if (null == onRefresh.refreshControl) {
          obj1 = { refreshing: null, onRefresh: null, progressViewOffset: null };
          obj1[0] = onRefresh.refreshing;
          obj1[1] = progressViewOffset;
          progressViewOffset = onRefresh.progressViewOffset;
          obj1[2] = progressViewOffset;
          let refreshControl = closure_2_18(map1, obj1);
        } else {
          refreshControl = onRefresh.refreshControl;
        }
        obj.refreshControl = refreshControl;
        closure_2_18(closure_2_14, obj);
      } else {
        obj = {};
        const merged2 = Object.assign(onRefresh);
        return closure_2_18(closure_2_14, obj);
      }
    };
    tmp3Result._onCellLayout = (layout, cellKey, cellIndex) => {
      const _listMetrics = closure_0._listMetrics;
      const obj = { cellIndex, cellKey, layout: layout.nativeEvent.layout, orientation: closure_0._orientation() };
      if (_listMetrics.notifyCellLayout(obj)) {
        const result = obj._scheduleCellsToRenderUpdate();
      }
      const result1 = obj._triggerRemeasureForChildListsInCell(cellKey);
      obj._computeBlankness();
      obj._updateViewableItems(obj.props, obj.state.cellsAroundViewport);
    };
    tmp3Result._onCellFocusCapture = (_lastFocusedCellKey) => {
      closure_0._lastFocusedCellKey = _lastFocusedCellKey;
      if (obj2.deferFlatListFocusChangeRenderUpdate()) {
        const result = closure_0._scheduleCellsToRenderUpdate();
      } else {
        closure_0._updateCellsToRender();
      }
      obj2 = javaScriptFlagGetterAll;
    };
    tmp3Result._onCellUnmount = (arg0) => {
      delete tmp[tmp2];
      const _listMetrics = closure_0._listMetrics;
      _listMetrics.notifyCellUnmounted(arg0);
    };
    tmp3Result._onLayout = (nativeEvent) => {
      if (closure_0._isNestedWithSameOrientation()) {
        const result = closure_0.measureLayoutRelativeToContainingList();
      } else {
        closure_0._scrollMetrics.visibleLength = closure_0._selectLength(nativeEvent.nativeEvent.layout);
      }
      if (closure_0.props.onLayout) {
        const props = closure_0.props;
        props.onLayout(nativeEvent);
      }
      const result1 = closure_0._scheduleCellsToRenderUpdate();
      const result2 = closure_0._maybeCallOnEdgeReached();
    };
    tmp3Result._onLayoutEmpty = (arg0) => {
      if (closure_0.props.onLayout) {
        const props = tmp.props;
        props.onLayout(arg0);
      }
    };
    tmp3Result._onLayoutFooter = (nativeEvent) => {
      const result = closure_0._triggerRemeasureForChildListsInCell(closure_0._getFooterCellKey());
      closure_0._footerLength = closure_0._selectLength(nativeEvent.nativeEvent.layout);
    };
    tmp3Result._onLayoutHeader = (nativeEvent) => {
      closure_0._headerLength = closure_0._selectLength(nativeEvent.nativeEvent.layout);
    };
    tmp3Result._onContentSizeChange = (width, height) => {
      let obj = closure_0;
      const _listMetrics = closure_0._listMetrics;
      { layout: obj, orientation: closure_0._orientation() };
      obj = { width, height };
      const result = _listMetrics.notifyListContentLayout(obj);
      const result1 = closure_0._maybeScrollToInitialScrollIndex(width, height);
      if (closure_0.props.onContentSizeChange) {
        const props = obj.props;
        props.onContentSizeChange(width, height);
      }
      const result2 = obj._scheduleCellsToRenderUpdate();
      const result3 = obj._maybeCallOnEdgeReached();
    };
    tmp3Result._convertParentScrollMetrics = (offset) => {
      const diff = offset.offset - closure_0._offsetFromParentVirtualizedList;
      const _listMetrics = closure_0._listMetrics;
      const diff1 = diff - closure_0._scrollMetrics.offset;
      return { visibleLength: offset.visibleLength, contentLength: _listMetrics.getContentLength(), offset: diff, dOffset: diff1 };
    };
    tmp3Result._onScroll = (timeStamp) => {
      closure_0 = timeStamp;
      let obj = closure_0;
      const _nestedChildLists = closure_0._nestedChildLists;
      const item = _nestedChildLists.forEach((item, index) => {
        item._onScroll(closure_0);
      });
      if (closure_0.props.onScroll) {
        const props = obj.props;
        props.onScroll(timeStamp);
      }
      timeStamp = timeStamp.timeStamp;
      const _selectLengthResult = obj._selectLength(timeStamp.nativeEvent.layoutMeasurement);
      contentLength = obj._selectLength(timeStamp.nativeEvent.contentSize);
      const result = obj._offsetFromScrollEvent(timeStamp);
      dOffset = result - obj._scrollMetrics.offset;
      offset = result;
      visibleLength = _selectLengthResult;
      if (obj._isNestedWithSameOrientation()) {
        const _listMetrics = obj._listMetrics;
        if (0 !== _listMetrics.getContentLength()) {
          obj = { visibleLength: null, offset: null };
          obj[0] = _selectLengthResult;
          obj[1] = result;
          const result1 = obj._convertParentScrollMetrics(obj);
          ({ visibleLength, contentLength, offset, dOffset } = result1);
        }
      }
      let num2 = 1;
      if (obj._scrollMetrics.timestamp) {
        const _Math = Math;
        num2 = Math.max(1, timeStamp - obj._scrollMetrics.timestamp);
      }
      const result2 = dOffset / num2;
      let tmp7 = num2 > 500 && obj._scrollMetrics.dt > 500;
      if (tmp7) {
        tmp7 = contentLength > 5 * visibleLength;
      }
      if (tmp7) {
        tmp7 = !obj._hasWarned.perf;
      }
      if (tmp7) {
        obj = { dt: null, prevDt: null, contentLength: null };
        obj[0] = num2;
        obj[1] = obj._scrollMetrics.dt;
        obj[2] = contentLength;
        infoLogDefault("VirtualizedList: You have a large list that is slow to update - make sure your renderItem function renders components that follow React performance best practices like PureComponent, shouldComponentUpdate, etc.", obj);
        obj._hasWarned.perf = true;
      }
      let num4 = 1;
      if (timeStamp.nativeEvent.zoomScale >= 0) {
        num4 = timeStamp.nativeEvent.zoomScale;
      }
      obj._scrollMetrics = { dt: num2, dOffset, offset, timestamp: timeStamp, velocity: result2, visibleLength, zoomScale: num4 };
      if (obj.state.pendingScrollUpdateCount > 0) {
        obj.setState((pendingScrollUpdateCount) => ({ pendingScrollUpdateCount: pendingScrollUpdateCount.pendingScrollUpdateCount - 1 }));
      }
      obj._updateViewableItems(obj.props, obj.state.cellsAroundViewport);
      if (obj.props) {
        const result3 = obj._maybeCallOnEdgeReached();
        if (0 !== result2) {
          const _fillRateHelper = obj._fillRateHelper;
          _fillRateHelper.activate();
        }
        obj._computeBlankness();
        const result4 = obj._scheduleCellsToRenderUpdate();
      }
    };
    tmp3Result._onScrollBeginDrag = (arg0) => {
      closure_0 = arg0;
      const _nestedChildLists = closure_0._nestedChildLists;
      const item = _nestedChildLists.forEach((item, index) => {
        item._onScrollBeginDrag(closure_0);
      });
      const _viewabilityTuples = closure_0._viewabilityTuples;
      const item1 = _viewabilityTuples.forEach((item, index) => {
        const viewabilityHelper = item.viewabilityHelper;
        viewabilityHelper.recordInteraction();
      });
      closure_0._hasInteracted = true;
      if (closure_0.props.onScrollBeginDrag) {
        const props = closure_0.props;
        props.onScrollBeginDrag(arg0);
      }
    };
    tmp3Result._onScrollEndDrag = (nativeEvent) => {
      closure_0 = nativeEvent;
      const _nestedChildLists = closure_0._nestedChildLists;
      const item = _nestedChildLists.forEach((item, index) => {
        item._onScrollEndDrag(closure_0);
      });
      const velocity = nativeEvent.nativeEvent.velocity;
      if (velocity) {
        obj._scrollMetrics.velocity = obj._selectOffset(velocity);
      }
      closure_0._computeBlankness();
      if (closure_0.props.onScrollEndDrag) {
        const props = obj.props;
        props.onScrollEndDrag(nativeEvent);
      }
    };
    tmp3Result._onMomentumScrollBegin = (arg0) => {
      closure_0 = arg0;
      const _nestedChildLists = closure_0._nestedChildLists;
      const item = _nestedChildLists.forEach((item, index) => {
        const result = item._onMomentumScrollBegin(closure_0);
      });
      if (closure_0.props.onMomentumScrollBegin) {
        const props = closure_0.props;
        let result = props.onMomentumScrollBegin(arg0);
      }
    };
    tmp3Result._onMomentumScrollEnd = (arg0) => {
      closure_0 = arg0;
      const _nestedChildLists = closure_0._nestedChildLists;
      const item = _nestedChildLists.forEach((item, index) => {
        item._onMomentumScrollEnd(closure_0);
      });
      closure_0._scrollMetrics.velocity = 0;
      closure_0._computeBlankness();
      if (closure_0.props.onMomentumScrollEnd) {
        const props = closure_0.props;
        props.onMomentumScrollEnd(arg0);
      }
    };
    tmp3Result._updateCellsToRender = () => {
      closure_0._updateViewableItems(closure_0.props, closure_0.state.cellsAroundViewport);
      closure_0.setState((cellsAroundViewport, getItemCount) => {
        const result = closure_0._adjustCellsAroundViewport(getItemCount, cellsAroundViewport.cellsAroundViewport, cellsAroundViewport.pendingScrollUpdateCount);
        const _createRenderMaskResult = closure_1_0._createRenderMask(getItemCount, result, closure_0._getNonViewportRenderRegions(getItemCount));
        if (result.first === cellsAroundViewport.cellsAroundViewport.first) {
          if (result.last === cellsAroundViewport.cellsAroundViewport.last) {
            let obj = null;
          }
          return obj;
        }
        obj = { cellsAroundViewport: result, renderMask: _createRenderMaskResult };
      });
    };
    tmp3Result._createViewToken = (index, isViewable, getItem) => {
      const value = getItem.getItem(getItem.data, index);
      return { index, item: value, key: closure_0._keyExtractor(value, index, getItem), isViewable };
    };
    tmp3Result._getNonViewportRenderRegions = (getItemCount) => {
      if (closure_0._lastFocusedCellKey) {
        if (closure_0._cellRefs[closure_0._lastFocusedCellKey]) {
          const index = closure_0._cellRefs[closure_0._lastFocusedCellKey].props.index;
          const itemCount = getItemCount.getItemCount(getItemCount.data);
          if (index < itemCount) {
            if (closure_0._getItemKey(getItemCount, index) === closure_0._lastFocusedCellKey) {
              let diff = index - 1;
              let tmp5 = index;
              let tmp6 = closure_0;
              if (0 <= diff) {
                let num = 0;
                let tmp4 = index;
                tmp5 = index;
                tmp6 = closure_0;
                if (0 < closure_0._scrollMetrics.visibleLength) {
                  const diff1 = tmp4 - 1;
                  const _listMetrics = closure_0._listMetrics;
                  const sum = num + _listMetrics.getCellMetricsApprox(diff, getItemCount).length;
                  const diff2 = diff - 1;
                  tmp5 = diff1;
                  tmp6 = closure_0;
                  while (0 <= diff2) {
                    diff = diff2;
                    tmp4 = diff1;
                    tmp5 = diff1;
                    tmp6 = closure_0;
                    num = sum;
                    if (sum >= closure_0._scrollMetrics.visibleLength) {
                      break;
                    }
                  }
                }
              }
              let sum1 = index + 1;
              let tmp13 = index;
              if (sum1 < itemCount) {
                let num2 = 0;
                let tmp14 = index;
                tmp13 = index;
                if (0 < tmp6._scrollMetrics.visibleLength) {
                  const sum2 = tmp14 + 1;
                  const _listMetrics2 = closure_0._listMetrics;
                  const sum3 = num2 + _listMetrics2.getCellMetricsApprox(sum1, getItemCount).length;
                  const sum4 = sum1 + 1;
                  tmp13 = sum2;
                  while (sum4 < itemCount) {
                    sum1 = sum4;
                    tmp14 = sum2;
                    tmp13 = sum2;
                    num2 = sum3;
                    if (sum3 >= closure_0._scrollMetrics.visibleLength) {
                      break;
                    }
                  }
                }
              }
              const obj = { first: null, last: null };
              obj[0] = tmp5;
              obj[1] = tmp13;
              const items = [obj];
              return items;
            }
          }
          return [];
        }
      }
      return [];
    };
    _checkPropsResult = tmp3Result._checkProps(global);
    tmp12 = new require("Info")(tmp3Result._listMetrics);
    tmp3Result._fillRateHelper = tmp12;
    props = tmp3Result.props;
    if (tmp3Result.props.viewabilityConfigCallbackPairs) {
      prop = props.viewabilityConfigCallbackPairs;
      tmp3Result._viewabilityTuples = prop.map((item, index) => {
        const obj = { viewabilityHelper: new callback(table[15])(item.viewabilityConfig), onViewableItemsChanged: item.onViewableItemsChanged };
        return obj;
      });
    } else {
      ({ onViewableItemsChanged, viewabilityConfig } = props);
      if (onViewableItemsChanged) {
        _viewabilityTuples = tmp3Result._viewabilityTuples;
        obj = { viewabilityHelper: null, onViewableItemsChanged: null };
        tmp13 = new.target;
        tmp14 = new.target;
        tmp15 = viewabilityConfig;
        tmp16 = new require("ViewabilityHelper")(viewabilityConfig);
        tmp17 = tmp16;
        obj[0] = tmp16;
        obj[1] = onViewableItemsChanged;
        arr = _viewabilityTuples.push(obj);
      }
    }
    _initialRenderRegionResult = obj._initialRenderRegion(global);
    maintainVisibleContentPosition = tmp3Result.props.maintainVisibleContentPosition;
    num = undefined;
    if (maintainVisibleContentPosition != null) {
      num = maintainVisibleContentPosition.minIndexForVisible;
    }
    if (num == null) {
      num = 0;
    }
    obj1 = { cellsAroundViewport: _initialRenderRegionResult, renderMask: obj._createRenderMask(global, _initialRenderRegionResult), firstVisibleItemKey: null, pendingScrollUpdateCount: null };
    props2 = tmp3Result.props;
    _getItemKeyResult = null;
    if (props2.getItemCount(tmp3Result.props.data) > num) {
      _getItemKeyResult = obj._getItemKey(tmp3Result.props, num);
    }
    obj1[2] = _getItemKeyResult;
    num2 = 0;
    if (null != tmp3Result.props.initialScrollIndex) {
      num2 = 0;
      if (tmp3Result.props.initialScrollIndex > 0) {
        num2 = 1;
      }
    }
    obj1[3] = num2;
    tmp3Result.state = obj1;
    return tmp3Result;
  }
}
_inheritsDefault(VirtualizedList, _isNativeReflectConstructDefault2);
let obj = {
  key: "scrollToEnd",
  value: function scrollToEnd(animated) {
    animated = !animated;
    if (animated) {
      animated = animated.animated;
    }
    const self = this;
    const props = this.props;
    const diff = props.getItemCount(this.props.data) - 1;
    if (diff >= 0) {
      const _listMetrics = self._listMetrics;
      const cellMetricsApprox = _listMetrics.getCellMetricsApprox(diff, self.props);
      const _Math = Math;
      const obj = { animated: null, offset: null };
      obj[0] = animated;
      obj[1] = Math.max(0, cellMetricsApprox.offset + cellMetricsApprox.length + self._footerLength - self._scrollMetrics.visibleLength);
      self.scrollToOffset(obj);
    }
  }
};
let items = [
  obj,
  {
    key: "scrollToIndex",
    value: function scrollToIndex(animated) {
      const self = this;
      const props = this.props;
      ({ data, getItemCount, onScrollToIndexFailed } = props);
      ({ index, viewOffset, viewPosition } = animated);
      _modDef38(index >= 0, "scrollToIndex out of range: requested index " + index + " but minimum is 0");
      const tmp6 = _modDef38;
      tmp6(getItemCount(data) >= 1, "scrollToIndex out of range: item length " + getItemCount(data) + " but minimum is 1");
      const tmp7 = getItemCount(data) >= 1;
      const tmp9 = _modDef38;
      tmp9(index < getItemCount(data), "scrollToIndex out of range: requested index " + index + " is out of 0 to " + getItemCount(data) - 1);
      if (!props.getItemLayout) {
        const _listMetrics = self._listMetrics;
        if (index > _listMetrics.getHighestMeasuredCellIndex()) {
          _modDef38(onScrollToIndexFailed, "scrollToIndex should be used in conjunction with getItemLayout or onScrollToIndexFailed, otherwise there is no way to know the location of offscreen indices or handle failures.");
          let obj = { averageItemLength: null, highestMeasuredFrameIndex: null, index: null };
          const _listMetrics2 = self._listMetrics;
          obj[0] = _listMetrics2.getAverageCellLength();
          const _listMetrics3 = self._listMetrics;
          obj[1] = _listMetrics3.getHighestMeasuredCellIndex();
          obj[2] = index;
          const result = onScrollToIndexFailed(obj);
        }
      }
      const _listMetrics4 = self._listMetrics;
      const _listMetrics5 = self._listMetrics;
      const cellMetricsApprox = _listMetrics4.getCellMetricsApprox(Math.floor(index), self.props);
      const cellOffsetApprox = _listMetrics5.getCellOffsetApprox(index, self.props);
      if (!viewPosition) {
        viewPosition = 0;
      }
      const bound = Math.max(0, cellOffsetApprox - viewPosition * (self._scrollMetrics.visibleLength - cellMetricsApprox.length));
      if (!viewOffset) {
        viewOffset = 0;
      }
      obj = { offset: bound - viewOffset, animated: animated.animated };
      self.scrollToOffset(obj);
      const tmp10 = index < getItemCount(data);
    }
  },
  {
    key: "scrollToItem",
    value: function scrollToItem(arg0) {
      const self = this;
      const props = this.props;
      const data = props.data;
      const itemCount = props.getItemCount(data);
      let num = 0;
      if (0 < itemCount) {
        while (tmp2(data, num) !== tmp) {
          num = num + 1;
        }
        const obj = {};
        const merged = Object.assign(arg0);
        obj.index = num;
        self.scrollToIndex(obj);
      }
    }
  },
  {
    key: "scrollToOffset",
    value: function scrollToOffset(arg0) {
      const self = this;
      const _scrollRef = this._scrollRef;
      if (null != _scrollRef) {
        if (null != _scrollRef.scrollTo) {
          const _orientationResult = self._orientation();
          if (_orientationResult.horizontal) {
            if (_orientationResult.rtl) {
              const _listMetrics = self._listMetrics;
              if (!_listMetrics.hasContentLength()) {
                const _console2 = console;
                console.warn("scrollToOffset may not be called in RTL before content is laid out");
              }
            }
          }
          const obj = { animated: null };
          obj[0] = tmp;
          const merged = Object.assign(self._scrollToParamsFromOffset(tmp2));
          _scrollRef.scrollTo(obj);
        } else {
          const _console = console;
          console.warn("No scrollTo method provided. This may be because you have two nested VirtualizedLists with the same orientation, or because you are using a custom component that does not implement scrollTo.");
        }
      }
    }
  },
  {
    key: "_scrollToParamsFromOffset",
    value: function _scrollToParamsFromOffset(arg0) {
      const self = this;
      const _orientationResult = this._orientation();
      const horizontal = _orientationResult.horizontal;
      if (horizontal) {
        if (_orientationResult.rtl) {
          const _listMetrics = self._listMetrics;
          const cartesianOffsetResult = _listMetrics.cartesianOffset(arg0 + self._scrollMetrics.visibleLength);
          if (horizontal) {
            let obj = { x: null };
            obj[0] = cartesianOffsetResult;
          } else {
            obj = { y: null };
            obj[0] = cartesianOffsetResult;
          }
          return obj;
        }
      }
      if (horizontal) {
        obj1 = { x: null };
        obj1[0] = arg0;
        obj = obj1;
      } else {
        obj = { y: null };
        obj[0] = arg0;
      }
      return obj;
    }
  },
  {
    key: "recordInteraction",
    value: function recordInteraction() {
      const _nestedChildLists = this._nestedChildLists;
      const item = _nestedChildLists.forEach((item, index) => {
        item.recordInteraction();
      });
      const _viewabilityTuples = this._viewabilityTuples;
      const item1 = _viewabilityTuples.forEach((item, index) => {
        const viewabilityHelper = item.viewabilityHelper;
        viewabilityHelper.recordInteraction();
      });
      this._updateViewableItems(this.props, this.state.cellsAroundViewport);
    }
  },
  {
    key: "flashScrollIndicators",
    value: function flashScrollIndicators() {
      if (null != this._scrollRef) {
        const _scrollRef = this._scrollRef;
        const result = _scrollRef.flashScrollIndicators();
      }
    }
  },
  {
    key: "getScrollResponder",
    value: function getScrollResponder() {
      const self = this;
      if (this._scrollRef) {
        if (self._scrollRef.getScrollResponder) {
          const _scrollRef = self._scrollRef;
          return _scrollRef.getScrollResponder();
        }
      }
    }
  },
  {
    key: "getScrollableNode",
    value: function getScrollableNode() {
      const self = this;
      if (this._scrollRef) {
        if (self._scrollRef.getScrollableNode) {
          const _scrollRef = self._scrollRef;
          let scrollableNode = _scrollRef.getScrollableNode();
        }
        return scrollableNode;
      }
      scrollableNode = callback5(self._scrollRef);
    }
  },
  {
    key: "getScrollRef",
    value: function getScrollRef() {
      const self = this;
      if (this._scrollRef) {
        if (self._scrollRef.getScrollRef) {
          const _scrollRef2 = self._scrollRef;
          let _scrollRef = _scrollRef2.getScrollRef();
        }
        return _scrollRef;
      }
      _scrollRef = self._scrollRef;
    }
  },
  {
    key: "setNativeProps",
    value: function setNativeProps(arg0) {
      if (this._scrollRef) {
        const _scrollRef = tmp._scrollRef;
        _scrollRef.setNativeProps(arg0);
      }
    }
  },
  {
    key: "_getCellKey",
    value: function _getCellKey() {
      const context = this.context;
      let str;
      if (context != null) {
        str = context.cellKey;
      }
      if (!str) {
        str = "rootList";
      }
      return str;
    }
  },
  {
    key: "hasMore",
    value: function hasMore() {
      return this._hasMore;
    }
  },
  {
    key: "_checkProps",
    value: function _checkProps(arg0) {
      ({ onScroll, getItemCount, initialScrollIndex } = arg0);
      ({ windowSize, data } = arg0);
      let tmp4 = !onScroll;
      if (onScroll) {
        tmp4 = !onScroll.__isNative;
      }
      const self = this;
      _modDef38(tmp4, "Components based on VirtualizedList must be wrapped with Animated.createAnimatedComponent to support native onScroll events with useNativeDriver");
      const tmpResult = _modDef38;
      tmpResult(VirtualizedList(320).windowSizeOrDefault(windowSize) > 0, "VirtualizedList: The windowSize prop must be present and set to a value greater than 0.");
      _modDef38(getItemCount, "VirtualizedList: The \"getItemCount\" prop must be provided");
      const itemCount = getItemCount(data);
      let initialScrollIndex2 = null == initialScrollIndex || self._hasTriggeredInitialScrollToIndex;
      if (!initialScrollIndex2) {
        let tmp10 = initialScrollIndex < 0;
        if (!tmp10) {
          tmp10 = itemCount > 0 && initialScrollIndex >= itemCount;
        }
        initialScrollIndex2 = !tmp10;
      }
      if (!initialScrollIndex2) {
        initialScrollIndex2 = self._hasWarned.initialScrollIndex;
      }
      if (!initialScrollIndex2) {
        const _console = console;
        const _HermesInternal = HermesInternal;
        console.warn("initialScrollIndex \"" + initialScrollIndex + "\" is not valid (list has " + itemCount + " items)");
        self._hasWarned.initialScrollIndex = true;
      }
      const obj = VirtualizedList(320);
    }
  },
  {
    key: "_adjustCellsAroundViewport",
    value: function _adjustCellsAroundViewport(onEndReachedThreshold, cellsAroundViewport, pendingScrollUpdateCount) {
      const self = this;
      ({ data, getItemCount } = onEndReachedThreshold);
      let obj = VirtualizedList(320);
      const visibleLength = this._scrollMetrics.visibleLength;
      const _listMetrics = this._listMetrics;
      const result = obj.onEndReachedThresholdOrDefault(onEndReachedThreshold.onEndReachedThreshold);
      const contentLength = _listMetrics.getContentLength();
      if (visibleLength > 0) {
        if (contentLength > 0) {
          if (onEndReachedThreshold.disableVirtualization) {
            let num = 0;
            if (tmp5 < result * visibleLength) {
              let tmpResult = VirtualizedList(320);
              num = tmpResult.maxToRenderPerBatchOrDefault(onEndReachedThreshold.maxToRenderPerBatch);
            }
            obj = { first: 0, last: null };
            const _Math = Math;
            const sum = cellsAroundViewport.last + num;
            obj[1] = Math.min(sum, getItemCount(data) - 1);
            let windowedRenderLimits = obj;
          } else if (pendingScrollUpdateCount > 0) {
            let result1 = cellsAroundViewport;
            if (cellsAroundViewport.last >= getItemCount(data)) {
              result1 = VirtualizedList._constrainToItemCount(cellsAroundViewport, onEndReachedThreshold);
            }
            return result1;
          } else {
            tmpResult = VirtualizedList(313);
            const result2 = VirtualizedList(320).maxToRenderPerBatchOrDefault(onEndReachedThreshold.maxToRenderPerBatch);
            const tmpResult1 = VirtualizedList(320);
            windowedRenderLimits = tmpResult.computeWindowedRenderLimits(onEndReachedThreshold, result2, VirtualizedList(320).windowSizeOrDefault(onEndReachedThreshold.windowSize), cellsAroundViewport, self._listMetrics, self._scrollMetrics);
            const tmpResult2 = VirtualizedList(320);
            _modDef38(windowedRenderLimits.last < getItemCount(data), "computeWindowedRenderLimits() should return range in-bounds");
          }
          const _nestedChildLists = self._nestedChildLists;
          if (_nestedChildLists.size() > 0) {
            let last = self._findFirstChildWithMore(windowedRenderLimits.first, windowedRenderLimits.last);
            if (last == null) {
              last = windowedRenderLimits.last;
            }
            windowedRenderLimits.last = last;
          }
          return windowedRenderLimits;
        }
      }
      let result3 = cellsAroundViewport;
      if (cellsAroundViewport.last >= getItemCount(data)) {
        result3 = VirtualizedList._constrainToItemCount(cellsAroundViewport, onEndReachedThreshold);
      }
      return result3;
    }
  },
  {
    key: "_findFirstChildWithMore",
    value: function _findFirstChildWithMore(windowedRenderLimits, windowedRenderLimits2) {
      const self = this;
      let sum = windowedRenderLimits;
      if (windowedRenderLimits <= windowedRenderLimits2) {
        while (true) {
          let _indicesToKeys = self._indicesToKeys;
          let value = _indicesToKeys.get(sum);
          if (null != value) {
            let _nestedChildLists = self._nestedChildLists;
            if (_nestedChildLists.anyInCell(value, (hasMore) => hasMore.hasMore())) {
              break;
            }
          }
          sum = sum + 1;
        }
        return sum;
      }
      return null;
    }
  },
  {
    key: "componentDidMount",
    value: function componentDidMount() {
      const self = this;
      if (this._isNestedWithSameOrientation()) {
        const context = self.context;
        const obj = { ref: null, cellKey: null };
        obj[0] = self;
        obj[1] = self.context.cellKey;
        const result = context.registerAsNestedChild(obj);
      }
    }
  },
  {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      const self = this;
      if (this._isNestedWithSameOrientation()) {
        const context = self.context;
        const obj = { ref: null };
        obj[0] = self;
        const result = context.unregisterAsNestedChild(obj);
      }
      clearTimeout(self._updateCellsToRenderTimeoutID);
      const _viewabilityTuples = self._viewabilityTuples;
      const item = _viewabilityTuples.forEach((item, index) => {
        const viewabilityHelper = item.viewabilityHelper;
        viewabilityHelper.dispose();
      });
      const _fillRateHelper = self._fillRateHelper;
      _fillRateHelper.deactivateAndFlush();
    }
  },
  {
    key: "_pushCells",
    value: function _pushCells(items, items1, set, sum, arg4, arg5) {
      let self = this;
      const props = this.props;
      const data = props.data;
      let num = 0;
      ({ CellRendererComponent, ItemSeparatorComponent, ListItemComponent, debug, getItem, getItemCount, getItemLayout, horizontal, renderItem } = props);
      if (props.ListHeaderComponent) {
        num = 1;
      }
      const diff = getItemCount(data) - 1;
      const bound = Math.min(diff, arg4);
      let tmp5 = sum;
      while (sum <= bound) {
        let value = getItem(data, sum);
        let _keyExtractorResult = self._keyExtractor(value, sum, self.props);
        self = _keyExtractorResult;
        let _indicesToKeys = self._indicesToKeys;
        let result = _indicesToKeys.set(sum, _keyExtractorResult);
        if (set.has(sum + num)) {
          let arr = items1.push(items.length);
        }
        let enabledResult = null == getItemLayout || debug;
        if (!enabledResult) {
          let _fillRateHelper = self._fillRateHelper;
          enabledResult = _fillRateHelper.enabled();
        }
        let obj = { CellRendererComponent: null, ItemSeparatorComponent: null, ListItemComponent: null, cellKey: null, horizontal: null, index: null, inversionStyle: null, item: null, prevCellKey: null, onUpdateSeparators: null, onCellFocusCapture: null, onUnmount: null, ref: null, renderItem: null };
        obj[0] = CellRendererComponent;
        let tmp19;
        let tmp18 = _isNativeReflectConstructDefault;
        if (sum < diff) {
          tmp19 = ItemSeparatorComponent;
        }
        obj[1] = tmp19;
        obj[2] = ListItemComponent;
        obj[3] = _keyExtractorResult;
        obj[4] = horizontal;
        obj[5] = sum;
        obj[6] = arg5;
        obj[7] = value;
        obj[8] = tmp4;
        ({ _onUpdateSeparators: obj[9], _onCellFocusCapture: obj[10], _onCellUnmount: obj[11] } = self);
        obj[12] = function ref(arg0) {
          self._cellRefs[self] = arg0;
        };
        obj[13] = renderItem;
        if (enabledResult) {
          obj = { onCellLayout: null };
          obj[0] = self._onCellLayout;
          enabledResult = obj;
        }
        let merged = Object.assign(enabledResult);
        arr = items.push(closure_1_18(tmp18, obj, _keyExtractorResult));
        sum = tmp5 + 1;
        tmp4 = _keyExtractorResult;
        tmp5 = sum;
      }
    }
  },
  {
    key: "_isNestedWithSameOrientation",
    value: function _isNestedWithSameOrientation() {
      const context = this.context;
      let tmp2 = !context;
      if (context) {
        tmp2 = !!context.horizontal !== VirtualizedList(320).horizontalOrDefault(tmp.props.horizontal);
        const obj = VirtualizedList(320);
      }
      return !tmp2;
    }
  },
  {
    key: "_renderEmptyComponent",
    value: function _renderEmptyComponent(type, arg1) {
      const self = this;
      closure_0 = type;
      let tmp = type;
      if (type.type !== React.Fragment) {
        const obj = { onLayout: null, style: null };
        obj[0] = function onLayout(arg0) {
          self._onLayoutEmpty(arg0);
          if (type.props.onLayout) {
            const props = type.props;
            props.onLayout(arg0);
          }
        };
        obj[1] = StyleSheet.compose(arg1, type.props.style);
        tmp = callback3(type, obj);
      }
      return tmp;
    }
  },
  {
    key: "render",
    value: function render() {
      const self = this;
      this._checkProps(this.props);
      ({ ListEmptyComponent, ListFooterComponent, ListHeaderComponent } = this.props);
      if (!this.props.inverted) {
        const items = [];
        const _Set = Set;
        const set = new Set(self.props.stickyHeaderIndices);
        const items1 = [];
        if (ListHeaderComponent) {
          if (set.has(0)) {
            items1.push(0);
          }
          let tmp14 = ListHeaderComponent;
          if (!callback4(ListHeaderComponent)) {
            tmp14 = callback6(ListHeaderComponent, {});
          }
          let obj = { cellKey: null, children: null };
          obj[0] = `${self._getCellKey()}-header`;
          obj = { collapsable: false, onLayout: null, style: null, children: null };
          obj[1] = self._onLayoutHeader;
          obj[2] = StyleSheet.compose(null, self.props.ListHeaderComponentStyle);
          obj[3] = tmp14;
          obj[1] = callback6(closure_16, obj);
          items.push(callback6(VirtualizedList(322).VirtualizedListCellContextProvider, obj, "$header"));
        }
        const props = self.props;
        const itemCount = props.getItemCount(tmp2);
        if (0 === itemCount) {
          if (ListEmptyComponent) {
            let tmp24 = ListEmptyComponent;
            if (!callback4(ListEmptyComponent)) {
              tmp24 = callback6(ListEmptyComponent, {});
            }
            obj1 = { cellKey: null, children: null };
            obj1[0] = `${self._getCellKey()}-empty`;
            obj1[1] = self._renderEmptyComponent(tmp24, null);
            items.push(callback6(VirtualizedList(322).VirtualizedListCellContextProvider, obj1, "$empty"));
          }
        }
        if (itemCount > 0) {
          c21 = false;
          c22 = "";
          const renderMask = self.state.renderMask;
          const enumerateRegionsResult = renderMask.enumerateRegions();
          let isSpacer;
          if (enumerateRegionsResult[enumerateRegionsResult.length - 1] != null) {
            isSpacer = tmp83.isSpacer;
          }
          let tmp31 = null;
          if (isSpacer) {
            tmp31 = tmp83;
          }
          const iter = enumerateRegionsResult[Symbol.iterator]();
          const nextResult = iter.next();
          while (iter !== undefined) {
            let tmp36 = nextResult;
            if (nextResult.isSpacer) {
              if (self.props.disableVirtualization) {
                continue;
              } else {
                if (tmp36 === tmp31) {
                  if (!self.props.getItemLayout) {
                    let _listMetrics = self._listMetrics;
                    let tmp47 = clampDefault;
                    let diff = tmp36.first - 1;
                    let last = tmp47(diff, tmp36.last, _listMetrics.getHighestMeasuredCellIndex());
                  }
                  let _listMetrics2 = self._listMetrics;
                  let _listMetrics3 = self._listMetrics;
                  let cellMetricsApprox = _listMetrics2.getCellMetricsApprox(tmp36.first, self.props);
                  let cellMetricsApprox1 = _listMetrics3.getCellMetricsApprox(last, self.props);
                  let obj2 = { style: null };
                  let obj3 = {};
                  obj3[_getSpacerKeyResult] = cellMetricsApprox1.offset + cellMetricsApprox1.length - cellMetricsApprox.offset;
                  obj2[0] = obj3;
                  let _HermesInternal = HermesInternal;
                  let arr2 = items.push(callback6(closure_16, obj2, "$spacer-" + tmp36.first));
                }
                last = tmp36.last;
              }
            } else {
              let _pushCellsResult = self._pushCells(items, items1, set, tmp36.first, tmp36.last, null);
              continue;
            }
            continue;
          }
          const keys = self._hasWarned.keys;
          let tmp56 = !keys;
          if (!keys) {
            tmp56 = c21;
          }
          if (tmp56) {
            const _console = console;
            console.warn("VirtualizedList: missing keys for items, make sure to specify a key or id property on each item or provide a custom keyExtractor.", c22);
            self._hasWarned.keys = true;
          }
          _getSpacerKeyResult = self._getSpacerKey(!tmp3);
        }
        if (ListFooterComponent) {
          let tmp60 = ListFooterComponent;
          if (!callback4(ListFooterComponent)) {
            tmp60 = callback6(ListFooterComponent, {});
          }
          const obj4 = { cellKey: null, children: null };
          obj4[0] = self._getFooterCellKey();
          const obj5 = { onLayout: null, style: null, children: null };
          obj5[0] = self._onLayoutFooter;
          obj5[1] = StyleSheet.compose(null, self.props.ListFooterComponentStyle);
          obj5[2] = tmp60;
          obj4[1] = callback6(closure_16, obj5);
          items.push(callback6(VirtualizedList(322).VirtualizedListCellContextProvider, obj4, "$footer"));
        }
        const obj6 = {};
        const merged = Object.assign(self.props);
        ({ _onContentSizeChange: obj10.onContentSizeChange, _onLayout: obj10.onLayout, _onScroll: obj10.onScroll, _onScrollBeginDrag: obj10.onScrollBeginDrag, _onScrollEndDrag: obj10.onScrollEndDrag, _onMomentumScrollBegin: obj10.onMomentumScrollBegin, _onMomentumScrollEnd: obj10.onMomentumScrollEnd } = self);
        let num3 = self.props.scrollEventThrottle;
        if (num3 == null) {
          num3 = 0.0001;
        }
        obj6.scrollEventThrottle = num3;
        if (undefined !== self.props.invertStickyHeaders) {
          let inverted = self.props.invertStickyHeaders;
        } else {
          inverted = self.props.inverted;
        }
        obj6.invertStickyHeaders = inverted;
        obj6.stickyHeaderIndices = items1;
        if (null) {
          const items2 = [null, self.props.style];
          let style = items2;
        } else {
          style = self.props.style;
        }
        obj6.style = style;
        obj6.isInvertedVirtualizedList = self.props.inverted;
        let tmp70;
        if (null != self.props.maintainVisibleContentPosition) {
          const obj7 = {};
          const merged1 = Object.assign(self.props.maintainVisibleContentPosition);
          let num4 = 0;
          if (self.props.ListHeaderComponent) {
            num4 = 1;
          }
          obj7.minIndexForVisible = self.props.maintainVisibleContentPosition.minIndexForVisible + num4;
          tmp70 = obj7;
        }
        obj6.maintainVisibleContentPosition = tmp70;
        self._hasMore = self.state.cellsAroundViewport.last < itemCount - 1;
        const obj8 = { value: null, children: null };
        const obj9 = { cellKey: null, getScrollMetrics: null, horizontal: null, getOutermostParentListRef: null, registerAsNestedChild: null, unregisterAsNestedChild: null };
        obj9[1] = self._getScrollMetrics;
        obj9[2] = VirtualizedList(320).horizontalOrDefault(self.props.horizontal);
        ({ _getOutermostParentListRef: obj13[3], _registerAsNestedChild: obj13[4], _unregisterAsNestedChild: obj13[5] } = self);
        obj8[0] = obj9;
        let _defaultRenderScrollComponent = self.props.renderScrollComponent;
        if (!_defaultRenderScrollComponent) {
          _defaultRenderScrollComponent = self._defaultRenderScrollComponent;
        }
        const obj10 = { ref: null };
        obj10[0] = self._captureScrollRef;
        obj8[1] = callback2(_defaultRenderScrollComponent(obj6), obj10, items);
        const tmp73Result = callback6(VirtualizedList(322).VirtualizedListContextProvider, obj8);
        let tmp78 = tmp73Result;
        if (self.props.debug) {
          const obj11 = { style: null, children: null };
          obj11[0] = debug.debug;
          const items3 = [tmp73Result, self._renderDebugOverlay()];
          obj11[1] = items3;
          tmp78 = callback7(closure_16, obj11);
        }
        return tmp78;
      } else {
        obj = VirtualizedList(320);
        obj.horizontalOrDefault(self.props.horizontal) ? debug.horizontallyInverted : debug.verticallyInverted;
      }
    }
  },
  {
    key: "componentDidUpdate",
    value: function componentDidUpdate(data) {
      const self = this;
      const props = this.props;
      let tmp2 = props.data === data.data;
      if (tmp2) {
        tmp2 = tmp === data.extraData;
      }
      if (!tmp2) {
        const _viewabilityTuples = self._viewabilityTuples;
        const item = _viewabilityTuples.forEach((item, index) => {
          const viewabilityHelper = item.viewabilityHelper;
          viewabilityHelper.resetViewableIndices();
        });
      }
      const result = self._scheduleCellsToRenderUpdate();
      if (self._hiPriInProgress) {
        self._hiPriInProgress = false;
      }
      if (null != props.getItemLayout) {
        const result1 = self._maybeCallOnEdgeReached();
      }
    }
  },
  {
    key: "_computeBlankness",
    value: function _computeBlankness() {
      const _fillRateHelper = this._fillRateHelper;
      const blankness = _fillRateHelper.computeBlankness(this.props, this.state.cellsAroundViewport, this._scrollMetrics);
    }
  },
  {
    key: "_triggerRemeasureForChildListsInCell",
    value: function _triggerRemeasureForChildListsInCell(closure_0) {
      const _nestedChildLists = this._nestedChildLists;
      _nestedChildLists.forEachInCell(closure_0, (measureLayoutRelativeToContainingList) => {
        const result = measureLayoutRelativeToContainingList.measureLayoutRelativeToContainingList();
      });
    }
  },
  {
    key: "measureLayoutRelativeToContainingList",
    value: function measureLayoutRelativeToContainingList() {
      const self = this;
      try {
        if (self._scrollRef) {
          ({ _scrollRef, context } = self);
          const outermostParentListRef = context.getOutermostParentListRef();
          _scrollRef.measureLayout(outermostParentListRef.getScrollRef(), (arg0, arg1, width, height) => {
            let obj = { x: arg0, y: arg1 };
            self._offsetFromParentVirtualizedList = self._selectOffset(obj);
            const _listMetrics = self._listMetrics;
            { layout: obj, orientation: self._orientation() };
            obj = { width, height };
            let result = _listMetrics.notifyListContentLayout(obj);
            ({ context, _convertParentScrollMetrics } = self);
            const result1 = _convertParentScrollMetrics(context.getScrollMetrics());
            if (tmp4) {
              ({ visibleLength: tmp._scrollMetrics.visibleLength, offset: tmp._scrollMetrics.offset } = result1);
              const _nestedChildLists = self._nestedChildLists;
              const item = _nestedChildLists.forEach((item, index) => {
                const result = item.measureLayoutRelativeToContainingList();
              });
            }
            tmp4 = self._scrollMetrics.visibleLength !== result1.visibleLength || self._scrollMetrics.offset !== result1.offset;
          }, (arg0) => {
            console.warn("VirtualizedList: Encountered an error while measuring a list's offset from its containing VirtualizedList.");
          });
        }
      } catch (tmp2) {
        const _console = console;
        console.warn("measureLayoutRelativeToContainingList threw an error", tmp2.stack);
      }
    }
  },
  {
    key: "_getFooterCellKey",
    value: function _getFooterCellKey() {
      return this._getCellKey() + "-footer";
    }
  },
  {
    key: "_renderDebugOverlay",
    value: function _renderDebugOverlay() {
      const self = this;
      const _listMetrics = this._listMetrics;
      const result = this._scrollMetrics.visibleLength / (_listMetrics.getContentLength() || 1);
      VirtualizedList = result;
      const items = [];
      const props = self.props;
      const itemCount = props.getItemCount(self.props.data);
      for (let num = 0; num < itemCount; num = num + 1) {
        let _listMetrics2 = self._listMetrics;
        let cellMetricsApprox = _listMetrics2.getCellMetricsApprox(num, self.props);
        if (cellMetricsApprox.isMounted) {
          let arr = items.push(cellMetricsApprox);
        }
      }
      const _listMetrics3 = self._listMetrics;
      const offset = _listMetrics3.getCellMetricsApprox(self.state.cellsAroundViewport.first, self.props).offset;
      const _listMetrics4 = self._listMetrics;
      const cellMetricsApprox1 = _listMetrics4.getCellMetricsApprox(self.state.cellsAroundViewport.last, self.props);
      const obj = { style: items1, children: null };
      items1 = [, ];
      ({ debugOverlayBase: arr3[0], debugOverlay: arr3[1] } = closure_23);
      const diff = cellMetricsApprox1.offset + cellMetricsApprox1.length - offset;
      const items2 = [
        items.map((item, index) => {
          const style = [, , ];
          ({ debugOverlayBase: arr[0], debugOverlayFrame: arr[1] } = closure_1_23);
          style[2] = { top: item.offset * closure_0, height: item.length * closure_0 };
          return closure_1_18(closure_1_16, { style }, "f" + index);
        }),
      ,

      ];
      const items3 = [, , ];
      ({ debugOverlayBase: arr5[0], debugOverlayFrameLast: arr5[1] } = closure_23);
      items3[2] = { top: offset * result, height: diff * result };
      items2[1] = callback6(closure_16, { style: items3 });
      const items4 = [, , ];
      ({ debugOverlayBase: arr6[0], debugOverlayFrameVis: arr6[1] } = closure_23);
      items4[2] = { top: self._scrollMetrics.offset * result, height: self._scrollMetrics.visibleLength * result };
      items2[2] = callback6(closure_16, { style: items4 });
      obj[1] = items2;
      return callback7(closure_16, obj);
    }
  },
  {
    key: "_selectLength",
    value: function _selectLength(width) {
      return VirtualizedList(320).horizontalOrDefault(this.props.horizontal) ? width.width : width.height;
    }
  },
  {
    key: "_selectOffset",
    value: function _selectOffset(arg0) {
      ({ y, x } = arg0);
      if (this._orientation().horizontal) {
        y = x;
      }
      return y;
    }
  },
  {
    key: "_orientation",
    value: function _orientation() {
      const obj = { horizontal: VirtualizedList(320).horizontalOrDefault(this.props.horizontal), rtl: isRTL.isRTL };
      return obj;
    }
  },
  {
    key: "_maybeCallOnEdgeReached",
    value: function _maybeCallOnEdgeReached() {
      const self = this;
      const props = this.props;
      ({ onStartReached, onStartReachedThreshold, onEndReached, onEndReachedThreshold } = props);
      const _listMetrics = this._listMetrics;
      ({ data, getItemCount } = props);
      if (_listMetrics.hasContentLength()) {
        if (0 !== self._scrollMetrics.visibleLength) {
          if (self.state.pendingScrollUpdateCount <= 0) {
            ({ visibleLength, offset } = self._scrollMetrics);
            const _listMetrics6 = self._listMetrics;
            let num2 = _listMetrics6.getContentLength() - visibleLength - offset;
            if (offset < 0.001) {
              offset = 0;
            }
            if (num2 < 0.001) {
              num2 = 0;
            }
            let num3 = 2;
            let num4 = 2;
            if (null != onStartReachedThreshold) {
              num4 = onStartReachedThreshold * visibleLength;
            }
            if (null != onEndReachedThreshold) {
              num3 = onEndReachedThreshold * visibleLength;
            }
            let tmp3 = onEndReached;
            if (onEndReached) {
              tmp3 = self.state.cellsAroundViewport.last === getItemCount(data) - 1;
            }
            if (tmp3) {
              tmp3 = tmp4;
            }
            if (tmp3) {
              const _listMetrics2 = self._listMetrics;
              tmp3 = _listMetrics2.getContentLength() !== self._sentEndForContentLength;
            }
            if (tmp3) {
              const _listMetrics3 = self._listMetrics;
              self._sentEndForContentLength = _listMetrics3.getContentLength();
              let obj = { distanceFromEnd: null };
              obj[0] = num2;
              onEndReached(obj);
            }
            let tmp6 = null != onStartReached && 0 === self.state.cellsAroundViewport.first && tmp2;
            if (tmp6) {
              const _listMetrics4 = self._listMetrics;
              tmp6 = _listMetrics4.getContentLength() !== self._sentStartForContentLength;
            }
            if (tmp6) {
              const _listMetrics5 = self._listMetrics;
              self._sentStartForContentLength = _listMetrics5.getContentLength();
              obj = { distanceFromStart: null };
              obj[0] = offset;
              onStartReached(obj);
            }
            if (offset > num4) {
              self._sentStartForContentLength = 0;
            }
            if (num2 > num3) {
              self._sentEndForContentLength = 0;
            }
          }
        }
      }
    }
  },
  {
    key: "_maybeScrollToInitialScrollIndex",
    value: function _maybeScrollToInitialScrollIndex(width, height) {
      let tmp = width > 0;
      if (tmp) {
        tmp = height > 0;
      }
      const self = this;
      if (tmp) {
        tmp = null != self.props.initialScrollIndex;
      }
      if (tmp) {
        tmp = self.props.initialScrollIndex > 0;
      }
      if (tmp) {
        tmp = !self._hasTriggeredInitialScrollToIndex;
      }
      if (tmp) {
        if (null != self.props.contentOffset) {
          self._hasTriggeredInitialScrollToIndex = true;
        } else {
          const props = self.props;
          if (self.props.initialScrollIndex >= props.getItemCount(self.props.data)) {
            self.scrollToEnd({ animated: false });
          }
        }
        const obj = { animated: false, index: null };
        obj[1] = nullthrowsDefault(self.props.initialScrollIndex);
        self.scrollToIndex(obj);
      }
    }
  },
  {
    key: "unstable_onScroll",
    value: function unstable_onScroll(arg0) {
      this._onScroll(arg0);
    }
  },
  {
    key: "_offsetFromScrollEvent",
    value: function _offsetFromScrollEvent(nativeEvent) {
      const self = this;
      ({ contentOffset, contentSize, layoutMeasurement } = nativeEvent.nativeEvent);
      const _orientationResult = this._orientation();
      if (_orientationResult.horizontal) {
        if (_orientationResult.rtl) {
          const _selectLengthResult = self._selectLength(contentSize);
          let diff = _selectLengthResult - (self._selectOffset(contentOffset) + self._selectLength(layoutMeasurement));
          const _selectOffsetResult = self._selectOffset(contentOffset);
        }
        return diff;
      }
      diff = self._selectOffset(contentOffset);
    }
  },
  {
    key: "_scheduleCellsToRenderUpdate",
    value: function _scheduleCellsToRenderUpdate() {
      const self = this;
      const _listMetrics = this._listMetrics;
      if (_listMetrics.getAverageCellLength() > 0) {
        if (self._shouldRenderWithPriority()) {
          if (!self._hiPriInProgress) {
            self._hiPriInProgress = true;
            if (null != self._updateCellsToRenderTimeoutID) {
              const _clearTimeout = clearTimeout;
              clearTimeout(self._updateCellsToRenderTimeoutID);
              self._updateCellsToRenderTimeoutID = null;
            }
            self._updateCellsToRender();
          }
        }
      }
      if (null == self._updateCellsToRenderTimeoutID) {
        let num = self.props.updateCellsBatchingPeriod;
        if (num == null) {
          num = 50;
        }
        self._updateCellsToRenderTimeoutID = setTimeout(() => {
          self._updateCellsToRenderTimeoutID = null;
          self._updateCellsToRender();
        }, num);
      }
    }
  },
  {
    key: "_shouldRenderWithPriority",
    value: function _shouldRenderWithPriority() {
      const self = this;
      ({ first, last } = this.state.cellsAroundViewport);
      ({ offset, visibleLength, velocity } = this._scrollMetrics);
      const props = this.props;
      const itemCount = props.getItemCount(this.props.data);
      const result = VirtualizedList(320).onStartReachedThresholdOrDefault(this.props.onStartReachedThreshold);
      const obj = VirtualizedList(320);
      let flag = false;
      const result1 = VirtualizedList(320).onEndReachedThresholdOrDefault(this.props.onEndReachedThreshold);
      if (first > 0) {
        const _listMetrics = self._listMetrics;
        const diff = offset - _listMetrics.getCellMetricsApprox(first, self.props).offset;
        let tmp5 = diff < 0;
        if (!tmp5) {
          let tmp6 = velocity < -2;
          if (tmp6) {
            tmp6 = diff < result * visibleLength / 2;
          }
          tmp5 = tmp6;
        }
        flag = tmp5;
      }
      let tmp7 = flag;
      if (!flag) {
        tmp7 = flag;
        if (last >= 0) {
          tmp7 = flag;
          if (last < itemCount - 1) {
            const _listMetrics2 = self._listMetrics;
            const diff1 = _listMetrics2.getCellMetricsApprox(last, self.props).offset - (offset + visibleLength);
            let tmp9 = diff1 < 0;
            if (!tmp9) {
              tmp9 = velocity > 2 && diff1 < result1 * visibleLength / 2;
            }
            tmp7 = tmp9;
          }
        }
      }
      return tmp7;
    }
  },
  {
    key: "unstable_onScrollBeginDrag",
    value: function unstable_onScrollBeginDrag(arg0) {
      this._onScrollBeginDrag(arg0);
    }
  },
  {
    key: "unstable_onScrollEndDrag",
    value: function unstable_onScrollEndDrag(arg0) {
      this._onScrollEndDrag(arg0);
    }
  },
  {
    key: "unstable_onMomentumScrollBegin",
    value: function unstable_onMomentumScrollBegin(arg0) {
      const result = this._onMomentumScrollBegin(arg0);
    }
  },
  {
    key: "unstable_onMomentumScrollEnd",
    value: function unstable_onMomentumScrollEnd(arg0) {
      this._onMomentumScrollEnd(arg0);
    }
  },
  {
    key: "__getListMetrics",
    value: function __getListMetrics() {
      return this._listMetrics;
    }
  },
  {
    key: "_updateViewableItems",
    value: function _updateViewableItems(props, cellsAroundViewport) {
      const self = this;
      closure_1 = props;
      closure_0 = cellsAroundViewport;
      if (this.state.pendingScrollUpdateCount <= 0) {
        const _viewabilityTuples = this._viewabilityTuples;
        const item = _viewabilityTuples.forEach((item, index) => {
          const viewabilityHelper = item.viewabilityHelper;
          viewabilityHelper.onUpdate(closure_1, self._scrollMetrics.offset, self._scrollMetrics.visibleLength, self._listMetrics, self._createViewToken, item.onViewableItemsChanged, closure_0);
        });
      }
    }
  }
];
obj = {
  key: "_findItemIndexWithKey",
  value: function _findItemIndexWithKey(getItemCount, firstVisibleItemKey, index) {
    const itemCount = getItemCount.getItemCount(getItemCount.data);
    if (null != index) {
      if (index >= 0) {
        if (index < itemCount) {
          if (VirtualizedList._getItemKey(getItemCount, index) === firstVisibleItemKey) {
            return index;
          }
        }
      }
    }
    let num2 = 0;
    if (0 < itemCount) {
      while (VirtualizedList._getItemKey(getItemCount, num2) !== firstVisibleItemKey) {
        num2 = num2 + 1;
      }
      return num2;
    }
    return null;
  }
};
let items1 = [
  obj,
  {
    key: "_getItemKey",
    value: function _getItemKey(props, index) {
      return VirtualizedList._keyExtractor(props.getItem(props.data, index), index, props);
    }
  },
  {
    key: "_createRenderMask",
    value: function _createRenderMask(getItemCount, _initialRenderRegionResult, closure_0) {
      const itemCount = getItemCount.getItemCount(getItemCount.data);
      let tmp4 = _initialRenderRegionResult.first >= 0;
      if (tmp4) {
        tmp4 = _initialRenderRegionResult.last >= _initialRenderRegionResult.first - 1;
      }
      if (tmp4) {
        tmp4 = _initialRenderRegionResult.last < itemCount;
      }
      _modDef38(tmp4, "Invalid cells around viewport \"[" + _initialRenderRegionResult.first + ", " + _initialRenderRegionResult.last + "]\" was passed to VirtualizedList._createRenderMask");
      const cellRenderMask = new VirtualizedList(324).CellRenderMask(itemCount);
      if (itemCount > 0) {
        let items1 = closure_0;
        const items = [_initialRenderRegionResult];
        if (closure_0 == null) {
          items1 = [];
        }
        HermesBuiltin.arraySpread(items1, 1);
        for (const item10045 of items) {
          let addCellsResult = cellRenderMask.addCells(item10045);
          continue;
        }
        if (null == getItemCount.initialScrollIndex) {
          cellRenderMask.addCells(VirtualizedList._initialRenderRegion(getItemCount));
        }
        const _Set = Set;
        const set = new Set(getItemCount.stickyHeaderIndices);
        const result = VirtualizedList._ensureClosestStickyHeader(getItemCount, set, tmp6, _initialRenderRegionResult.first);
      }
      return cellRenderMask;
    }
  },
  {
    key: "_initialRenderRegion",
    value: function _initialRenderRegion(getItemCount) {
      const itemCount = getItemCount.getItemCount(getItemCount.data);
      let num = getItemCount.initialScrollIndex;
      const diff = itemCount - 1;
      if (num == null) {
        num = 0;
      }
      const bound = Math.max(0, Math.min(diff, Math.floor(num)));
      const obj = { first: bound, last: Math.min(itemCount, bound + VirtualizedList(320).initialNumToRenderOrDefault(getItemCount.initialNumToRender)) - 1 };
      return obj;
    }
  },
  {
    key: "_ensureClosestStickyHeader",
    value: function _ensureClosestStickyHeader(ListHeaderComponent, set, addCells, _initialRenderRegionResult) {
      let num = 0;
      if (ListHeaderComponent.ListHeaderComponent) {
        num = 1;
      }
      let diff = _initialRenderRegionResult - 1;
      if (0 <= diff) {
        while (!set.has(diff + num)) {
          diff = diff - 1;
        }
        const obj = { first: null, last: null };
        obj[0] = diff;
        obj[1] = diff;
        addCells.addCells(obj);
      }
    }
  },
  {
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(getItemCount, renderMask) {
      const itemCount = getItemCount.getItemCount(getItemCount.data);
      renderMask = renderMask.renderMask;
      if (itemCount === renderMask.numCells()) {
        return renderMask;
      } else {
        const firstVisibleItemKey = renderMask.firstVisibleItemKey;
        const maintainVisibleContentPosition = getItemCount.maintainVisibleContentPosition;
        let num;
        if (maintainVisibleContentPosition != null) {
          num = maintainVisibleContentPosition.minIndexForVisible;
        }
        if (num == null) {
          num = 0;
        }
        let _getItemKeyResult = null;
        if (getItemCount.getItemCount(getItemCount.data) > num) {
          _getItemKeyResult = VirtualizedList._getItemKey(getItemCount, num);
        }
        let tmp4 = null;
        if (null != getItemCount.maintainVisibleContentPosition) {
          tmp4 = null;
          if (null != firstVisibleItemKey) {
            tmp4 = null;
            if (null != _getItemKeyResult) {
              tmp4 = null;
              if (_getItemKeyResult !== firstVisibleItemKey) {
                const renderMask2 = renderMask.renderMask;
                const result = VirtualizedList._findItemIndexWithKey(getItemCount, firstVisibleItemKey, itemCount - renderMask2.numCells() + num);
                let diff = null;
                if (null != result) {
                  diff = result - num;
                }
                tmp4 = diff;
              }
            }
          }
        }
        let obj = VirtualizedList;
        const cellsAroundViewport = renderMask.cellsAroundViewport;
        if (null != tmp4) {
          obj = { first: null, last: null };
          obj[0] = cellsAroundViewport.first + tmp4;
          obj[1] = renderMask.cellsAroundViewport.last + tmp4;
          let tmp9 = obj;
        } else {
          tmp9 = cellsAroundViewport;
        }
        const result1 = VirtualizedList._constrainToItemCount(tmp9, getItemCount);
        obj = { cellsAroundViewport: null, renderMask: null, firstVisibleItemKey: null, pendingScrollUpdateCount: null };
        obj[0] = result1;
        obj[1] = obj._createRenderMask(getItemCount, result1);
        obj[2] = _getItemKeyResult;
        const pendingScrollUpdateCount = renderMask.pendingScrollUpdateCount;
        if (null != tmp4) {
          let sum = pendingScrollUpdateCount + 1;
        } else {
          sum = pendingScrollUpdateCount;
        }
        obj[3] = sum;
        return obj;
      }
    }
  },
  {
    key: "_constrainToItemCount",
    value: function _constrainToItemCount(cellsAroundViewport, getItemCount) {
      const diff = getItemCount.getItemCount(getItemCount.data) - 1;
      VirtualizedList(320);
      const obj = { first: null, last: null };
      const bound = Math.max(0, diff - obj.maxToRenderPerBatchOrDefault(getItemCount.maxToRenderPerBatch));
      obj[0] = clampDefault(0, cellsAroundViewport.first, bound);
      obj[1] = Math.min(diff, cellsAroundViewport.last);
      return obj;
    }
  },
  {
    key: "_keyExtractor",
    value: function _keyExtractor(value, sum, props) {
      if (null != props.keyExtractor) {
        return props.keyExtractor(value, sum);
      } else {
        const keyExtractorResult = VirtualizedList(313).keyExtractor(value, sum);
        const _String = String;
        if (keyExtractorResult === String(sum)) {
          c21 = true;
          if (tmp5) {
            const displayName = value.type.displayName;
          }
          tmp5 = value.type && value.type.displayName;
        }
        return keyExtractorResult;
      }
    }
  }
];
const importDefaultResultResult = importDefaultResult(VirtualizedList, items, items1);
importDefaultResultResult.contextType = require("createContext").VirtualizedListContext;
let items2 = [{ scale: -1 }];
let items3 = [{ scaleX: -1 }];
const styles = StyleSheet.create({ verticallyInverted: { transform: items2 }, horizontallyInverted: { transform: items3 }, debug: { flex: 1 }, debugOverlayBase: { position: "absolute", top: 0, right: 0 }, debugOverlay: { bottom: 0, width: 20, borderColor: "blue", borderWidth: 1 }, debugOverlayFrame: { left: 0, backgroundColor: "orange" }, debugOverlayFrameLast: { left: 0, borderColor: "green", borderWidth: 2 }, debugOverlayFrameVis: { left: 0, borderColor: "red", borderWidth: 2 } });

export default importDefaultResultResult;