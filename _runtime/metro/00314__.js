// === Module 314: ? ===

// Module 314
import javaScriptFlagGetterAll from "javaScriptFlagGetter" /* 27 */;
import _modDef38 from "module_38" /* 38 */;
import nullthrowsDefault from "nullthrows" /* 70 */;
import elementsThatOverlapOffsets from "elementsThatOverlapOffsets" /* 313 */;
import _modDef315 from "module_315" /* 315 */;
import _modDef316 from "module_316" /* 316 */;
import infoLogDefault from "infoLog" /* 317 */;
import _modDef318 from "module_318" /* 318 */;
import _modDef319 from "module_319" /* 319 */;
import react2 from "react" /* 320 */;
import _modDef321 from "module_321" /* 321 */;
import _mod322 from "module_322" /* 322 */;
import clampDefault from "clamp" /* 323 */;
import CellRenderMask from "CellRenderMask" /* 324 */;
import _modDef325 from "module_325" /* 325 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import metroImportDefault from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;
import "react";
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;

let size, viewabilityHelper;

let Platform;
let StyleSheet;
let c10;
let closure_12;
let closure_14;
let closure_16;
let closure_17;
let closure_18;
let closure_19;
let items2;
let items3;
let map1;
let obj2;
let obj3;
let unpackModuleId;
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
let closure_4 = ["onContentSizeChange"];
({ cloneElement: c10, isValidElement: unpackModuleId } = react);
({ I18nManager: closure_12, Platform, RefreshControl: map1, ScrollView: closure_14, StyleSheet } = react_native);
({ View: closure_16, findNodeHandle: closure_17 } = react_native);
({ jsx: closure_18, jsxs: closure_19 } = Fragment);
let c21 = false;
let displayName = "";
class VirtualizedList {
  constructor(getItemCount) {
    let _getItemKeyResult;
    let constructResult;
    let num2;
    let onViewableItemsChanged;
    let tmp14;
    let viewabilityConfig;
    const self = this;
    let obj = closure_0;
    let tmp = _classCallCheck(this, closure_0);
    let items = [getItemCount];
    let obj2 = _getPrototypeOf(closure_0);
    if (_isNativeReflectConstruct()) {
      let tmp5 = globalThis;
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj2, items, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj2.apply(self, items);
    }
    const tmp3Result = closure_1_7(self, constructResult);
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
    tmp3Result._onUpdateSeparators = (arr, arg1) => {
      const _cellRefs = arg1;
      const item = arr.forEach((item) => {
        if (null != item && _cellRefs._cellRefs[item]) {
          (null != item && _cellRefs._cellRefs[item]).updateSeparatorProps(_cellRefs);
        }
      });
    };
    tmp3Result._getSpacerKey = (arg0) => {
      let str = "width";
      const tmp = arg0;
      if (tmp) {
        str = "height";
      }
      return str;
    };
    tmp3Result._cellRefs = {};
    tmp3Result._listMetrics = new _modDef315();
    tmp3Result._footerLength = 0;
    tmp3Result._hasTriggeredInitialScrollToIndex = false;
    tmp3Result._hasInteracted = false;
    tmp3Result._hasMore = false;
    tmp3Result._hasWarned = {};
    tmp3Result._headerLength = 0;
    tmp3Result._hiPriInProgress = false;
    new _modDef315();
    tmp3Result._indicesToKeys = new Map();
    tmp3Result._lastFocusedCellKey = null;
    new Map();
    tmp3Result._nestedChildLists = new _modDef316();
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
      let refreshControl;
      onRefresh = onRefresh.onRefresh;
      if (closure_0._isNestedWithSameOrientation()) {
        const onContentSizeChange = onRefresh.onContentSizeChange;
        const obj2 = {};
        const merged = Object.assign(_objectWithoutProperties(onRefresh, closure_4));
        return authStore4(authStore3, obj2);
      } else {
        let tmp14Result;
        if (onRefresh) {
          let str = onRefresh.refreshing;
          const refreshing = onRefresh.refreshing;
          const _JSON = JSON;
          const tmp9 = _modDef38;
          if (str == null) {
            str = "undefined";
          }
          const tmp12 = typeof refreshing === "boolean";
          tmp9(tmp12, `\`refreshing\` prop must be set as a boolean in order to use \`onRefresh\`, but got \`${stringify(str)}\``);
          const obj3 = { refreshControl };
          const merged1 = Object.assign(onRefresh);
          if (null == onRefresh.refreshControl) {
            const obj4 = { refreshing: onRefresh.refreshing, onRefresh, progressViewOffset: onRefresh.progressViewOffset };
            refreshControl = authStore4(map1, obj4);
          } else {
            refreshControl = onRefresh.refreshControl;
          }
          tmp14Result = authStore4(authStore2, obj3);
        } else {
          const obj = {};
          const merged2 = Object.assign(onRefresh);
          tmp14Result = authStore4(authStore2, obj);
        }
        return tmp14Result;
      }
    };
    tmp3Result._onCellLayout = (layout, cellKey, cellIndex) => {
      const _listMetrics = closure_0._listMetrics;
      const obj2 = { cellIndex, cellKey, layout: layout.nativeEvent.layout, orientation: closure_0._orientation() };
      if (_listMetrics.notifyCellLayout(obj2)) {
        const result = closure_0._scheduleCellsToRenderUpdate();
      }
      const result1 = closure_0._triggerRemeasureForChildListsInCell(cellKey);
      closure_0._computeBlankness();
      closure_0._updateViewableItems(closure_0.props, closure_0.state.cellsAroundViewport);
    };
    tmp3Result._onCellFocusCapture = (_lastFocusedCellKey) => {
      closure_0._lastFocusedCellKey = _lastFocusedCellKey;
      const obj2 = javaScriptFlagGetterAll;
      if (obj2.deferFlatListFocusChangeRenderUpdate()) {
        const result = closure_0._scheduleCellsToRenderUpdate();
      } else {
        closure_0._updateCellsToRender();
      }
    };
    tmp3Result._onCellUnmount = (arg0) => {
      delete closure_0._cellRefs[arg0];
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
      const _listMetrics = closure_0._listMetrics;
      const obj2 = { layout: { width, height }, orientation: closure_0._orientation() };
      const result = _listMetrics.notifyListContentLayout(obj2);
      const result1 = closure_0._maybeScrollToInitialScrollIndex(width, height);
      if (closure_0.props.onContentSizeChange) {
        const props = closure_0.props;
        props.onContentSizeChange(width, height);
      }
      const result2 = closure_0._scheduleCellsToRenderUpdate();
      const result3 = closure_0._maybeCallOnEdgeReached();
    };
    tmp3Result._convertParentScrollMetrics = (visibleLength) => {
      let _listMetrics;
      let diff1;
      const diff = visibleLength.offset - closure_0._offsetFromParentVirtualizedList;
      const obj = { visibleLength: visibleLength.visibleLength, contentLength: _listMetrics.getContentLength(), offset: diff, dOffset: diff1 };
      _listMetrics = closure_0._listMetrics;
      diff1 = diff - closure_0._scrollMetrics.offset;
      return obj;
    };
    tmp3Result._onScroll = (timeStamp) => {
      let contentLength;
      let dOffset;
      let offset;
      let visibleLength;
      closure_0 = timeStamp;
      const _nestedChildLists = closure_0._nestedChildLists;
      const item = _nestedChildLists.forEach((_onScroll) => {
        _onScroll._onScroll(closure_0);
      });
      if (closure_0.props.onScroll) {
        const props = obj.props;
        props.onScroll(timeStamp);
      }
      timeStamp = timeStamp.timeStamp;
      const _selectLengthResult = closure_0._selectLength(timeStamp.nativeEvent.layoutMeasurement);
      contentLength = obj._selectLength(timeStamp.nativeEvent.contentSize);
      const result = obj._offsetFromScrollEvent(timeStamp);
      dOffset = result - obj._scrollMetrics.offset;
      offset = result;
      visibleLength = _selectLengthResult;
      if (closure_0._isNestedWithSameOrientation()) {
        const _listMetrics = obj._listMetrics;
        if (0 !== _listMetrics.getContentLength()) {
          const obj2 = { visibleLength: _selectLengthResult, offset: result };
          const result1 = obj._convertParentScrollMetrics(obj2);
          ({ visibleLength, contentLength, offset, dOffset } = result1);
        }
      }
      let num2 = 1;
      if (closure_0._scrollMetrics.timestamp) {
        const _Math = Math;
        num2 = Math.max(1, timeStamp - obj._scrollMetrics.timestamp);
      }
      const result2 = dOffset / num2;
      const tmp7 = num2 > 500 && closure_0._scrollMetrics.dt > 500 && contentLength > 5 * visibleLength && !closure_0._hasWarned.perf;
      if (tmp7) {
        const obj3 = { dt: num2, prevDt: closure_0._scrollMetrics.dt, contentLength };
        infoLogDefault("VirtualizedList: You have a large list that is slow to update - make sure your renderItem function renders components that follow React performance best practices like PureComponent, shouldComponentUpdate, etc.", obj3);
        closure_0._hasWarned.perf = true;
      }
      let num4 = 1;
      if (timeStamp.nativeEvent.zoomScale >= 0) {
        num4 = timeStamp.nativeEvent.zoomScale;
      }
      closure_0._scrollMetrics = { dt: num2, dOffset, offset, timestamp: timeStamp, velocity: result2, visibleLength, zoomScale: num4 };
      if (closure_0.state.pendingScrollUpdateCount > 0) {
        closure_0.setState((pendingScrollUpdateCount) => ({ pendingScrollUpdateCount: pendingScrollUpdateCount.pendingScrollUpdateCount - 1 }));
      }
      closure_0._updateViewableItems(closure_0.props, closure_0.state.cellsAroundViewport);
      if (closure_0.props) {
        const result3 = obj._maybeCallOnEdgeReached();
        if (0 !== result2) {
          const _fillRateHelper = obj._fillRateHelper;
          _fillRateHelper.activate();
        }
        closure_0._computeBlankness();
        const result4 = obj._scheduleCellsToRenderUpdate();
      }
    };
    tmp3Result._onScrollBeginDrag = (arg0) => {
      closure_0 = arg0;
      const _nestedChildLists = closure_0._nestedChildLists;
      const item = _nestedChildLists.forEach((_onScrollBeginDrag) => {
        _onScrollBeginDrag._onScrollBeginDrag(closure_0);
      });
      const _viewabilityTuples = closure_0._viewabilityTuples;
      const item1 = _viewabilityTuples.forEach((viewabilityHelper) => {
        viewabilityHelper = viewabilityHelper.viewabilityHelper;
        viewabilityHelper.recordInteraction();
      });
      closure_0._hasInteracted = true;
      const tmp = closure_0;
      if (closure_0.props.onScrollBeginDrag) {
        const props = tmp.props;
        props.onScrollBeginDrag(arg0);
      }
    };
    tmp3Result._onScrollEndDrag = (nativeEvent) => {
      closure_0 = nativeEvent;
      const _nestedChildLists = closure_0._nestedChildLists;
      const item = _nestedChildLists.forEach((_onScrollEndDrag) => {
        _onScrollEndDrag._onScrollEndDrag(closure_0);
      });
      const velocity = nativeEvent.nativeEvent.velocity;
      if (velocity) {
        closure_0._scrollMetrics.velocity = closure_0._selectOffset(velocity);
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
      const item = _nestedChildLists.forEach((_onMomentumScrollBegin) => {
        const result = _onMomentumScrollBegin._onMomentumScrollBegin(closure_0);
      });
      const tmp = closure_0;
      if (closure_0.props.onMomentumScrollBegin) {
        const props = tmp.props;
        let result = props.onMomentumScrollBegin(arg0);
      }
    };
    tmp3Result._onMomentumScrollEnd = (arg0) => {
      closure_0 = arg0;
      const _nestedChildLists = closure_0._nestedChildLists;
      const item = _nestedChildLists.forEach((_onMomentumScrollEnd) => {
        _onMomentumScrollEnd._onMomentumScrollEnd(closure_0);
      });
      closure_0._scrollMetrics.velocity = 0;
      closure_0._computeBlankness();
      const tmp = closure_0;
      if (closure_0.props.onMomentumScrollEnd) {
        const props = tmp.props;
        props.onMomentumScrollEnd(arg0);
      }
    };
    tmp3Result._updateCellsToRender = () => {
      closure_0._updateViewableItems(closure_0.props, closure_0.state.cellsAroundViewport);
      closure_0.setState((cellsAroundViewport, getItemCount) => {
        const result = closure_1_0._adjustCellsAroundViewport(getItemCount, cellsAroundViewport.cellsAroundViewport, cellsAroundViewport.pendingScrollUpdateCount);
        const _createRenderMaskResult = closure_0._createRenderMask(getItemCount, result, closure_1_0._getNonViewportRenderRegions(getItemCount));
        if (result.first === cellsAroundViewport.cellsAroundViewport.first) {
          let obj;
          if (result.last === cellsAroundViewport.cellsAroundViewport.last) {
            obj = null;
          }
          return obj;
        }
        obj = { cellsAroundViewport: result, renderMask: _createRenderMaskResult };
      });
    };
    tmp3Result._createViewToken = (index, isViewable, getItem) => {
      const value = getItem.getItem(getItem.data, index);
      const obj = { index, item: value, key: closure_0._keyExtractor(value, index, getItem), isViewable };
      return obj;
    };
    tmp3Result._getNonViewportRenderRegions = (getItemCount) => {
      if (closure_0._lastFocusedCellKey) {
        if (closure_0._cellRefs[closure_0._lastFocusedCellKey]) {
          const index = closure_0._cellRefs[closure_0._lastFocusedCellKey].props.index;
          const itemCount = getItemCount.getItemCount(getItemCount.data);
          if (index < itemCount) {
            if (VirtualizedList._getItemKey(getItemCount, index) === closure_0._lastFocusedCellKey) {
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
              const items = [{ first: tmp5, last: tmp13 }];
              return items;
            }
          }
          return [];
        }
      }
      return [];
    };
    const tmp10 = new _modDef316();
    tmp3Result._checkProps(getItemCount);
    let tmp12 = new _modDef318(tmp3Result._listMetrics);
    tmp3Result._fillRateHelper = tmp12;
    let props = tmp3Result.props;
    if (tmp3Result.props.viewabilityConfigCallbackPairs) {
      const prop = props.viewabilityConfigCallbackPairs;
      tmp3Result._viewabilityTuples = prop.map((viewabilityConfig) => {
        const obj = { viewabilityHelper: new closure_1_1(closure_1_3[15])(viewabilityConfig.viewabilityConfig), onViewableItemsChanged: viewabilityConfig.onViewableItemsChanged };
        new closure_1_1(closure_1_3[15])(viewabilityConfig.viewabilityConfig);
        return obj;
      });
    } else {
      ({ onViewableItemsChanged, viewabilityConfig } = props);
      if (onViewableItemsChanged) {
        let _viewabilityTuples = tmp3Result._viewabilityTuples;
        let obj3 = { viewabilityHelper: tmp14, onViewableItemsChanged };
        const push = _viewabilityTuples.push;
        const self2 = this;
        const self3 = this;
        tmp14 = new _modDef319(viewabilityConfig);
        const arr = push(obj3);
      }
    }
    const _initialRenderRegionResult = obj._initialRenderRegion(getItemCount);
    const maintainVisibleContentPosition = tmp3Result.props.maintainVisibleContentPosition;
    let num;
    if (maintainVisibleContentPosition != null) {
      num = maintainVisibleContentPosition.minIndexForVisible;
    }
    if (num == null) {
      num = 0;
    }
    let obj4 = { cellsAroundViewport: _initialRenderRegionResult, renderMask: obj._createRenderMask(getItemCount, _initialRenderRegionResult), firstVisibleItemKey: _getItemKeyResult, pendingScrollUpdateCount: num2 };
    const props2 = tmp3Result.props;
    _getItemKeyResult = null;
    if (props2.getItemCount(tmp3Result.props.data) > num) {
      _getItemKeyResult = obj._getItemKey(tmp3Result.props, num);
    }
    num2 = 0;
    if (null != tmp3Result.props.initialScrollIndex) {
      num2 = 0;
      if (tmp3Result.props.initialScrollIndex > 0) {
        num2 = 1;
      }
    }
    tmp3Result.state = obj4;
    return tmp3Result;
  }
}
_inherits(VirtualizedList, _modDef325);
const entry = {
  key: "scrollToEnd",
  value: function scrollToEnd(animated) {
    animated = !animated && animated.animated;
    const self = this;
    const props = this.props;
    const diff = props.getItemCount(this.props.data) - 1;
    if (diff >= 0) {
      const _listMetrics = self._listMetrics;
      const cellMetricsApprox = _listMetrics.getCellMetricsApprox(diff, self.props);
      const _Math = Math;
      const obj = { animated, offset: Math.max(0, cellMetricsApprox.offset + cellMetricsApprox.length + self._footerLength - self._scrollMetrics.visibleLength) };
      self.scrollToOffset(obj);
    }
  }
};
let items = [
  entry,
  {
    key: "scrollToIndex",
    value: function scrollToIndex(animated) {
      let _listMetrics2;
      let _listMetrics3;
      let data;
      let getItemCount;
      let index;
      let onScrollToIndexFailed;
      let viewOffset;
      let viewPosition;
      const self = this;
      const props = this.props;
      ({ data, getItemCount, onScrollToIndexFailed } = props);
      ({ index, viewOffset, viewPosition } = animated);
      const getItemLayout = props.getItemLayout;
      animated = animated.animated;
      const tmp3 = _modDef38;
      const tmp4 = index >= 0;
      tmp3(tmp4, "scrollToIndex out of range: requested index " + index + " but minimum is 0");
      const tmp6 = _modDef38;
      const tmp7 = getItemCount(data) >= 1;
      tmp6(tmp7, "scrollToIndex out of range: item length " + getItemCount(data) + " but minimum is 1");
      const tmp9 = _modDef38;
      const tmp10 = index < getItemCount(data);
      tmp9(tmp10, "scrollToIndex out of range: requested index " + index + " is out of 0 to " + getItemCount(data) - 1);
      if (!getItemLayout) {
        const _listMetrics = self._listMetrics;
        if (index > _listMetrics.getHighestMeasuredCellIndex()) {
          _modDef38(onScrollToIndexFailed, "scrollToIndex should be used in conjunction with getItemLayout or onScrollToIndexFailed, otherwise there is no way to know the location of offscreen indices or handle failures.");
          const obj = { averageItemLength: _listMetrics2.getAverageCellLength(), highestMeasuredFrameIndex: _listMetrics3.getHighestMeasuredCellIndex(), index };
          _listMetrics2 = self._listMetrics;
          _listMetrics3 = self._listMetrics;
          const result = onScrollToIndexFailed(obj);
        }
      }
      const _listMetrics4 = self._listMetrics;
      const _listMetrics5 = self._listMetrics;
      const cellMetricsApprox = _listMetrics4.getCellMetricsApprox(Math.floor(index), self.props);
      const _Math = Math;
      const cellOffsetApprox = _listMetrics5.getCellOffsetApprox(index, self.props);
      if (!viewPosition) {
        viewPosition = 0;
      }
      const maxResult = max(0, cellOffsetApprox - viewPosition * (self._scrollMetrics.visibleLength - cellMetricsApprox.length));
      if (!viewOffset) {
        viewOffset = 0;
      }
      const obj2 = { offset: maxResult - viewOffset, animated };
      self.scrollToOffset(obj2);
    }
  },
  {
    key: "scrollToItem",
    value: function scrollToItem(item) {
      const self = this;
      const props = this.props;
      const data = props.data;
      item = item.item;
      const getItem = props.getItem;
      const itemCount = props.getItemCount(data);
      let num = 0;
      if (0 < itemCount) {
        while (getItem(data, num) !== item) {
          num = num + 1;
        }
        const scrollToIndex = self.scrollToIndex;
        const obj = { index: num };
        const merged = Object.assign(item);
        scrollToIndex(obj);
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
          const scrollTo = _scrollRef.scrollTo;
          const obj = { animated: tmp };
          const merged = Object.assign(self._scrollToParamsFromOffset(tmp2));
          scrollTo(obj);
        } else {
          const _console = console;
          console.warn("No scrollTo method provided. This may be because you have two nested VirtualizedLists with the same orientation, or because you are using a custom component that does not implement scrollTo.");
        }
      }
    }
  },
  {
    key: "_scrollToParamsFromOffset",
    value: function _scrollToParamsFromOffset(x) {
      let obj;
      const self = this;
      const _orientationResult = this._orientation();
      const horizontal = _orientationResult.horizontal;
      if (horizontal) {
        if (_orientationResult.rtl) {
          let obj3;
          const _listMetrics = self._listMetrics;
          const cartesianOffsetResult = _listMetrics.cartesianOffset(x + self._scrollMetrics.visibleLength);
          if (horizontal) {
            obj3 = { x: cartesianOffsetResult };
            const obj2 = { x: cartesianOffsetResult };
          } else {
            obj3 = { y: cartesianOffsetResult };
          }
          return obj3;
        }
      }
      if (horizontal) {
        obj = { x };
        const obj4 = { x };
      } else {
        obj = { y: x };
      }
      return obj;
    }
  },
  {
    key: "recordInteraction",
    value: function recordInteraction() {
      const _nestedChildLists = this._nestedChildLists;
      const item = _nestedChildLists.forEach((recordInteraction) => {
        recordInteraction.recordInteraction();
      });
      const _viewabilityTuples = this._viewabilityTuples;
      const item1 = _viewabilityTuples.forEach((viewabilityHelper) => {
        viewabilityHelper = viewabilityHelper.viewabilityHelper;
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
        let scrollableNode;
        if (self._scrollRef.getScrollableNode) {
          const _scrollRef = self._scrollRef;
          scrollableNode = _scrollRef.getScrollableNode();
        }
        return scrollableNode;
      }
      scrollableNode = closure_17(self._scrollRef);
    }
  },
  {
    key: "getScrollRef",
    value: function getScrollRef() {
      const self = this;
      if (this._scrollRef) {
        let _scrollRef;
        if (self._scrollRef.getScrollRef) {
          const _scrollRef2 = self._scrollRef;
          _scrollRef = _scrollRef2.getScrollRef();
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
      let data;
      let getItemCount;
      let initialScrollIndex;
      let onScroll;
      let windowSize;
      ({ onScroll, getItemCount, initialScrollIndex } = arg0);
      ({ windowSize, data } = arg0);
      let tmp4 = !onScroll;
      const tmp3 = _modDef38;
      if (onScroll) {
        tmp4 = !onScroll.__isNative;
      }
      const self = this;
      tmp3(tmp4, "Components based on VirtualizedList must be wrapped with Animated.createAnimatedComponent to support native onScroll events with useNativeDriver");
      const tmpResult = _modDef38;
      const obj = react2;
      tmpResult(obj.windowSizeOrDefault(windowSize) > 0, "VirtualizedList: The windowSize prop must be present and set to a value greater than 0.");
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
    }
  },
  {
    key: "_adjustCellsAroundViewport",
    value: function _adjustCellsAroundViewport(onEndReachedThreshold, cellsAroundViewport, pendingScrollUpdateCount) {
      let data;
      let getItemCount;
      let sum;
      const self = this;
      ({ data, getItemCount } = onEndReachedThreshold);
      const visibleLength = this._scrollMetrics.visibleLength;
      const _listMetrics = this._listMetrics;
      const obj = react2;
      const result = obj.onEndReachedThresholdOrDefault(onEndReachedThreshold.onEndReachedThreshold);
      const contentLength = _listMetrics.getContentLength();
      if (visibleLength > 0) {
        if (contentLength > 0) {
          let windowedRenderLimits;
          if (onEndReachedThreshold.disableVirtualization) {
            let num = 0;
            if (tmp5 < result * visibleLength) {
              const tmpResult = react2;
              num = tmpResult.maxToRenderPerBatchOrDefault(onEndReachedThreshold.maxToRenderPerBatch);
            }
            const _Math = Math;
            const obj2 = { first: 0, last: Math.min(sum, getItemCount(data) - 1) };
            sum = cellsAroundViewport.last + num;
            windowedRenderLimits = obj2;
          } else if (pendingScrollUpdateCount > 0) {
            let result1 = cellsAroundViewport;
            if (cellsAroundViewport.last >= getItemCount(data)) {
              result1 = VirtualizedList._constrainToItemCount(cellsAroundViewport, onEndReachedThreshold);
            }
            return result1;
          } else {
            const computeWindowedRenderLimits = elementsThatOverlapOffsets.computeWindowedRenderLimits;
            const tmpResult4 = elementsThatOverlapOffsets;
            const tmpResult5 = react2;
            const result2 = tmpResult5.maxToRenderPerBatchOrDefault(onEndReachedThreshold.maxToRenderPerBatch);
            const tmpResult6 = react2;
            windowedRenderLimits = computeWindowedRenderLimits(onEndReachedThreshold, result2, tmpResult6.windowSizeOrDefault(onEndReachedThreshold.windowSize), cellsAroundViewport, self._listMetrics, self._scrollMetrics);
            const tmp21 = _modDef38;
            tmp21(windowedRenderLimits.last < getItemCount(data), "computeWindowedRenderLimits() should return range in-bounds");
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
        const obj = { ref: self, cellKey: self.context.cellKey };
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
        const obj = { ref: self };
        const result = context.unregisterAsNestedChild(obj);
      }
      clearTimeout(self._updateCellsToRenderTimeoutID);
      const _viewabilityTuples = self._viewabilityTuples;
      const item = _viewabilityTuples.forEach((viewabilityHelper) => {
        viewabilityHelper = viewabilityHelper.viewabilityHelper;
        viewabilityHelper.dispose();
      });
      const _fillRateHelper = self._fillRateHelper;
      _fillRateHelper.deactivateAndFlush();
    }
  },
  {
    key: "_pushCells",
    value: function _pushCells(items, items1, set, sum, arg4, inversionStyle) {
      let CellRendererComponent;
      let ItemSeparatorComponent;
      let ListItemComponent;
      let _cellRefs;
      let getItem;
      let getItemCount;
      let getItemLayout;
      let horizontal;
      let renderItem;
      let tmp19;
      let tmp4;
      const self = this;
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
        let _keyExtractorResult = VirtualizedList._keyExtractor(value, sum, self.props);
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
        let push = items.push;
        let obj = {
          CellRendererComponent,
          ItemSeparatorComponent: tmp19,
          ListItemComponent,
          cellKey: _keyExtractorResult,
          horizontal,
          index: sum,
          inversionStyle,
          item: value,
          prevCellKey: tmp4,
          onUpdateSeparators: null,
          onCellFocusCapture: null,
          onUnmount: null,
          ref(arg0) {
              _cellRefs._cellRefs[_keyExtractorResult] = arg0;
            },
          renderItem
        };
        tmp19 = undefined;
        let tmp18 = _modDef321;
        if (sum < diff) {
          tmp19 = ItemSeparatorComponent;
        }
        ({ _onUpdateSeparators: obj.onUpdateSeparators, _onCellFocusCapture: obj.onCellFocusCapture, _onCellUnmount: obj.onUnmount } = self);
        if (enabledResult) {
          let obj2 = { onCellLayout: self._onCellLayout };
          enabledResult = obj2;
        }
        let merged = Object.assign(enabledResult);
        let arr2 = push(authStore4(tmp18, obj, _keyExtractorResult));
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
        const tmp3 = !context.horizontal;
        const obj = react2;
        tmp2 = !tmp3 !== obj.horizontalOrDefault(tmp.props.horizontal);
      }
      return !tmp2;
    }
  },
  {
    key: "_renderEmptyComponent",
    value: function _renderEmptyComponent(type, arg1) {
      const self = this;
      let closure_0 = type;
      let tmp = type;
      if (type.type !== react.Fragment) {
        const obj = {
          onLayout(arg0) {
              self._onLayoutEmpty(arg0);
              if (closure_0.props.onLayout) {
                const props = closure_0.props;
                props.onLayout(arg0);
              }
            },
          style: StyleSheet.compose(arg1, type.props.style)
        };
        tmp = authStore(type, obj);
      }
      return tmp;
    }
  },
  {
    key: "render",
    value: function render() {
      let ListEmptyComponent;
      let ListFooterComponent;
      let ListHeaderComponent;
      let _defaultRenderScrollComponent;
      let data;
      let horizontal;
      let inverted;
      let items3;
      let minIndexForVisible;
      let num2;
      let num3;
      let obj14;
      let obj15;
      let obj16;
      let obj3;
      let obj6;
      let obj8;
      let style;
      let tmp63;
      const self = this;
      this._checkProps(this.props);
      ({ ListEmptyComponent, ListFooterComponent, ListHeaderComponent } = this.props);
      let tmp2 = null;
      ({ data, horizontal } = this.props);
      if (this.props.inverted) {
        const obj = react2;
        tmp2 = obj.horizontalOrDefault(self.props.horizontal) ? debug.horizontallyInverted : debug.verticallyInverted;
      }
      const items = [];
      set = new Set(self.props.stickyHeaderIndices);
      const items1 = [];
      if (ListHeaderComponent) {
        if (set.has(0)) {
          items1.push(0);
        }
        let tmp8 = ListHeaderComponent;
        if (!unpackModuleId(ListHeaderComponent)) {
          tmp8 = authStore4(ListHeaderComponent, {});
        }
        const push = items.push;
        const obj2 = { cellKey: `${self._getCellKey()}-header`, children: authStore4(authStore3, obj3) };
        const VirtualizedListCellContextProvider = _mod322.VirtualizedListCellContextProvider;
        obj3 = { collapsable: false, onLayout: self._onLayoutHeader, style: StyleSheet.compose(tmp2, self.props.ListHeaderComponentStyle), children: tmp8 };
        push(authStore4(VirtualizedListCellContextProvider, obj2, "$header"));
      }
      const props = self.props;
      const itemCount = props.getItemCount(data);
      if (0 === itemCount) {
        if (ListEmptyComponent) {
          let tmp18 = ListEmptyComponent;
          if (!unpackModuleId(ListEmptyComponent)) {
            tmp18 = authStore4(ListEmptyComponent, {});
          }
          const push2 = items.push;
          const obj4 = { cellKey: `${self._getCellKey()}-empty`, children: self._renderEmptyComponent(tmp18, tmp2) };
          const VirtualizedListCellContextProvider2 = _mod322.VirtualizedListCellContextProvider;
          push2(authStore4(VirtualizedListCellContextProvider2, obj4, "$empty"));
        }
      }
      if (itemCount > 0) {
        c21 = false;
        displayName = "";
        const renderMask = self.state.renderMask;
        const _getSpacerKeyResult = self._getSpacerKey(!horizontal);
        const enumerateRegionsResult = renderMask.enumerateRegions();
        let isSpacer;
        if (enumerateRegionsResult[enumerateRegionsResult.length - 1] != null) {
          isSpacer = tmp74.isSpacer;
        }
        let tmp25 = null;
        if (isSpacer) {
          tmp25 = tmp74;
        }
        const iter = enumerateRegionsResult[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          let tmp30 = nextResult;
          if (nextResult.isSpacer) {
            if (self.props.disableVirtualization) {
              continue;
            } else {
              if (tmp30 === tmp25) {
                let last;
                if (!self.props.getItemLayout) {
                  let _listMetrics = self._listMetrics;
                  let tmp41 = clampDefault;
                  let diff = tmp30.first - 1;
                  last = tmp41(diff, tmp30.last, _listMetrics.getHighestMeasuredCellIndex());
                }
                let _listMetrics2 = self._listMetrics;
                let _listMetrics3 = self._listMetrics;
                let cellMetricsApprox = _listMetrics2.getCellMetricsApprox(tmp30.first, self.props);
                let cellMetricsApprox1 = _listMetrics3.getCellMetricsApprox(last, self.props);
                let obj5 = { style: obj6 };
                obj6 = {};
                obj6[_getSpacerKeyResult] = cellMetricsApprox1.offset + cellMetricsApprox1.length - cellMetricsApprox.offset;
                let _HermesInternal = HermesInternal;
                let arr3 = items.push(authStore4(authStore3, obj5, "$spacer-" + tmp30.first));
              }
              last = tmp30.last;
            }
          } else {
            let _pushCellsResult = self._pushCells(items, items1, set, tmp30.first, tmp30.last, tmp2);
          }
          continue;
        }
        const tmp50 = !self._hasWarned.keys && c21;
        if (tmp50) {
          const _console = console;
          console.warn("VirtualizedList: missing keys for items, make sure to specify a key or id property on each item or provide a custom keyExtractor.", displayName);
          self._hasWarned.keys = true;
        }
      }
      if (ListFooterComponent) {
        let tmp54 = ListFooterComponent;
        if (!unpackModuleId(ListFooterComponent)) {
          tmp54 = authStore4(ListFooterComponent, {});
        }
        const push3 = items.push;
        const obj7 = { cellKey: self._getFooterCellKey(), children: authStore4(authStore3, obj8) };
        const VirtualizedListCellContextProvider3 = _mod322.VirtualizedListCellContextProvider;
        obj8 = { onLayout: self._onLayoutFooter, style: StyleSheet.compose(tmp2, self.props.ListFooterComponentStyle), children: tmp54 };
        push3(authStore4(VirtualizedListCellContextProvider3, obj7, "$footer"));
      }
      const obj9 = { scrollEventThrottle: num2, invertStickyHeaders: inverted, stickyHeaderIndices: items1, style, isInvertedVirtualizedList: self.props.inverted, maintainVisibleContentPosition: tmp63 };
      const merged = Object.assign(self.props);
      ({ _onContentSizeChange: obj10.onContentSizeChange, _onLayout: obj10.onLayout, _onScroll: obj10.onScroll, _onScrollBeginDrag: obj10.onScrollBeginDrag, _onScrollEndDrag: obj10.onScrollEndDrag, _onMomentumScrollBegin: obj10.onMomentumScrollBegin, _onMomentumScrollEnd: obj10.onMomentumScrollEnd } = self);
      num2 = self.props.scrollEventThrottle;
      if (num2 == null) {
        num2 = 0.0001;
      }
      if (undefined !== self.props.invertStickyHeaders) {
        inverted = self.props.invertStickyHeaders;
      } else {
        inverted = self.props.inverted;
      }
      if (tmp2) {
        const items2 = [tmp2, self.props.style];
        style = items2;
      } else {
        style = self.props.style;
      }
      tmp63 = undefined;
      if (null != self.props.maintainVisibleContentPosition) {
        const obj11 = { minIndexForVisible: minIndexForVisible + num3 };
        const merged1 = Object.assign(self.props.maintainVisibleContentPosition);
        num3 = 0;
        minIndexForVisible = self.props.maintainVisibleContentPosition.minIndexForVisible;
        if (self.props.ListHeaderComponent) {
          num3 = 1;
        }
        tmp63 = obj11;
      }
      self._hasMore = self.state.cellsAroundViewport.last < itemCount - 1;
      const obj12 = { value: obj15, children: authStore(_defaultRenderScrollComponent(obj9), obj16, items) };
      obj15 = { cellKey: null, getScrollMetrics: self._getScrollMetrics, horizontal: obj14.horizontalOrDefault(self.props.horizontal), getOutermostParentListRef: null, registerAsNestedChild: null, unregisterAsNestedChild: null };
      const VirtualizedListContextProvider = _mod322.VirtualizedListContextProvider;
      ({ _getOutermostParentListRef: obj13.getOutermostParentListRef, _registerAsNestedChild: obj13.registerAsNestedChild, _unregisterAsNestedChild: obj13.unregisterAsNestedChild } = self);
      _defaultRenderScrollComponent = self.props.renderScrollComponent || self._defaultRenderScrollComponent;
      obj14 = react2;
      obj16 = { ref: self._captureScrollRef };
      const tmp66Result = authStore4(VirtualizedListContextProvider, obj12);
      let tmp69 = tmp66Result;
      if (self.props.debug) {
        const obj29 = { style: debug.debug, children: items3 };
        items3 = [tmp66Result, self._renderDebugOverlay()];
        tmp69 = closure_19(authStore3, obj29);
      }
      return tmp69;
    }
  },
  {
    key: "componentDidUpdate",
    value: function componentDidUpdate(data) {
      const self = this;
      const props = this.props;
      let tmp2 = props.data === data.data;
      const getItemLayout = props.getItemLayout;
      if (tmp2) {
        tmp2 = tmp === data.extraData;
      }
      if (!tmp2) {
        const _viewabilityTuples = self._viewabilityTuples;
        const item = _viewabilityTuples.forEach((viewabilityHelper) => {
          viewabilityHelper = viewabilityHelper.viewabilityHelper;
          viewabilityHelper.resetViewableIndices();
        });
      }
      const _hiPriInProgress = self._hiPriInProgress;
      const result = self._scheduleCellsToRenderUpdate();
      if (_hiPriInProgress) {
        self._hiPriInProgress = false;
      }
      if (null != getItemLayout) {
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
    value: function _triggerRemeasureForChildListsInCell(cellKey) {
      const _nestedChildLists = this._nestedChildLists;
      _nestedChildLists.forEachInCell(cellKey, (measureLayoutRelativeToContainingList) => {
        const result = measureLayoutRelativeToContainingList.measureLayoutRelativeToContainingList();
      });
    }
  },
  {
    key: "measureLayoutRelativeToContainingList",
    value: function measureLayoutRelativeToContainingList() {
      let _scrollRef;
      let context;
      const self = this;
      try {
        if (self._scrollRef) {
          ({ _scrollRef, context } = self);
          const measureLayout = _scrollRef.measureLayout;
          const outermostParentListRef = context.getOutermostParentListRef();
          measureLayout(outermostParentListRef.getScrollRef(), (x, y, width, height) => {
            let _convertParentScrollMetrics;
            let context;
            const point = { x, y };
            self._offsetFromParentVirtualizedList = self._selectOffset(point);
            const _listMetrics = self._listMetrics;
            const obj = { layout: size, orientation: self._orientation() };
            size = { width, height };
            let result = _listMetrics.notifyListContentLayout(obj);
            ({ context, _convertParentScrollMetrics } = self);
            const result1 = _convertParentScrollMetrics(context.getScrollMetrics());
            const tmp4 = self._scrollMetrics.visibleLength !== result1.visibleLength || self._scrollMetrics.offset !== result1.offset;
            if (tmp4) {
              ({ visibleLength: tmp._scrollMetrics.visibleLength, offset: tmp._scrollMetrics.offset } = result1);
              const _nestedChildLists = self._nestedChildLists;
              const item = _nestedChildLists.forEach((measureLayoutRelativeToContainingList) => {
                const result = measureLayoutRelativeToContainingList.measureLayoutRelativeToContainingList();
              });
            }
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
      let items1;
      let items2;
      let items3;
      let items4;
      let num;
      const self = this;
      const _listMetrics = this._listMetrics;
      const visibleLength = this._scrollMetrics.visibleLength;
      const result = visibleLength / (_listMetrics.getContentLength() || 1);
      require = result;
      let items = [];
      const props = self.props;
      _listMetrics.getContentLength() || 1;
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
      let obj = { style: items1, children: items2 };
      items1 = [, ];
      ({ debugOverlayBase: arr3[0], debugOverlay: arr3[1] } = closure_23);
      const diff = cellMetricsApprox1.offset + cellMetricsApprox1.length - offset;
      const offset2 = self._scrollMetrics.offset;
      const visibleLength2 = self._scrollMetrics.visibleLength;
      items2 = [
        items.map((item, index) => {
          let items;
          const obj = { style: items };
          items = [, , ];
          ({ debugOverlayBase: arr[0], debugOverlayFrame: arr[1] } = debug);
          const obj2 = { top: item.offset * require, height: item.length * require };
          items[2] = obj2;
          return authStore4(authStore3, obj, "f" + index);
        }),
      ,

      ];
      let obj2 = { style: items3 };
      items3 = [, , ];
      ({ debugOverlayBase: arr5[0], debugOverlayFrameLast: arr5[1] } = closure_23);
      items3[2] = { top: offset * result, height: diff * result };
      items2[1] = closure_18(closure_16, obj2);
      const obj3 = { style: items4 };
      items4 = [, , ];
      ({ debugOverlayBase: arr6[0], debugOverlayFrameVis: arr6[1] } = closure_23);
      items4[2] = { top: offset2 * result, height: visibleLength2 * result };
      items2[2] = closure_18(closure_16, obj3);
      return closure_19(closure_16, obj);
    }
  },
  {
    key: "_selectLength",
    value: function _selectLength(width) {
      const obj = react2;
      return obj.horizontalOrDefault(this.props.horizontal) ? width.width : width.height;
    }
  },
  {
    key: "_selectOffset",
    value: function _selectOffset(arg0) {
      let x;
      let y;
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
      let obj2;
      const obj = { horizontal: obj2.horizontalOrDefault(this.props.horizontal), rtl: isRTL.isRTL };
      obj2 = react2;
      return obj;
    }
  },
  {
    key: "_maybeCallOnEdgeReached",
    value: function _maybeCallOnEdgeReached() {
      let data;
      let getItemCount;
      let offset;
      let onEndReached;
      let onEndReachedThreshold;
      let onStartReached;
      let onStartReachedThreshold;
      let visibleLength;
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
            let tmp3 = onEndReached && self.state.cellsAroundViewport.last === getItemCount(data) - 1 && tmp4;
            if (tmp3) {
              const _listMetrics2 = self._listMetrics;
              tmp3 = _listMetrics2.getContentLength() !== self._sentEndForContentLength;
            }
            if (tmp3) {
              const _listMetrics3 = self._listMetrics;
              self._sentEndForContentLength = _listMetrics3.getContentLength();
              const obj = { distanceFromEnd: num2 };
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
              const obj2 = { distanceFromStart: offset };
              onStartReached(obj2);
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
      let tmp = width > 0 && height > 0;
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
        if (null == self.props.contentOffset) {
          const props = self.props;
          if (self.props.initialScrollIndex < props.getItemCount(self.props.data)) {
            const scrollToIndex = self.scrollToIndex;
            const obj = { animated: false, index: nullthrowsDefault(self.props.initialScrollIndex) };
            scrollToIndex(obj);
          } else {
            self.scrollToEnd({ animated: false });
          }
        }
        self._hasTriggeredInitialScrollToIndex = true;
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
      let contentOffset;
      let contentSize;
      let layoutMeasurement;
      const self = this;
      ({ contentOffset, contentSize, layoutMeasurement } = nativeEvent.nativeEvent);
      const _orientationResult = this._orientation();
      if (_orientationResult.horizontal) {
        let diff;
        if (_orientationResult.rtl) {
          const _selectLengthResult = self._selectLength(contentSize);
          const _selectOffsetResult = self._selectOffset(contentOffset);
          diff = _selectLengthResult - (_selectOffsetResult + self._selectLength(layoutMeasurement));
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
        const _setTimeout = setTimeout;
        if (num == null) {
          num = 50;
        }
        self._updateCellsToRenderTimeoutID = _setTimeout(() => {
          self._updateCellsToRenderTimeoutID = null;
          self._updateCellsToRender();
        }, num);
      }
    }
  },
  {
    key: "_shouldRenderWithPriority",
    value: function _shouldRenderWithPriority() {
      let first;
      let last;
      let offset;
      let velocity;
      let visibleLength;
      const self = this;
      ({ first, last } = this.state.cellsAroundViewport);
      ({ offset, visibleLength, velocity } = this._scrollMetrics);
      const props = this.props;
      const itemCount = props.getItemCount(this.props.data);
      const obj = react2;
      const result = obj.onStartReachedThresholdOrDefault(this.props.onStartReachedThreshold);
      let flag = false;
      const obj2 = react2;
      const result1 = obj2.onEndReachedThresholdOrDefault(this.props.onEndReachedThreshold);
      if (first > 0) {
        const _listMetrics = self._listMetrics;
        const diff = offset - _listMetrics.getCellMetricsApprox(first, self.props).offset;
        let tmp5 = diff < 0;
        if (!tmp5) {
          tmp5 = velocity < -2 && diff < result * visibleLength / 2;
          const tmp6 = velocity < -2 && diff < result * visibleLength / 2;
        }
        flag = tmp5;
      }
      let tmp7 = flag;
      if (!tmp7) {
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
      let closure_1 = props;
      let closure_0 = cellsAroundViewport;
      if (this.state.pendingScrollUpdateCount <= 0) {
        const _viewabilityTuples = this._viewabilityTuples;
        const item = _viewabilityTuples.forEach((viewabilityHelper) => {
          viewabilityHelper = viewabilityHelper.viewabilityHelper;
          viewabilityHelper.onUpdate(props, self._scrollMetrics.offset, self._scrollMetrics.visibleLength, self._listMetrics, self._createViewToken, viewabilityHelper.onViewableItemsChanged, cellsAroundViewport);
        });
      }
    }
  }
];
const entry1 = {
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
  entry1,
  {
    key: "_getItemKey",
    value: function _getItemKey(props, index) {
      return VirtualizedList._keyExtractor(props.getItem(props.data, index), index, props);
    }
  },
  {
    key: "_createRenderMask",
    value: function _createRenderMask(getItemCount, _initialRenderRegionResult, arg2) {
      const itemCount = getItemCount.getItemCount(getItemCount.data);
      let tmp4 = _initialRenderRegionResult.first >= 0;
      const tmp3 = _modDef38;
      if (tmp4) {
        tmp4 = _initialRenderRegionResult.last >= _initialRenderRegionResult.first - 1;
      }
      if (tmp4) {
        tmp4 = _initialRenderRegionResult.last < itemCount;
      }
      tmp3(tmp4, "Invalid cells around viewport \"[" + _initialRenderRegionResult.first + ", " + _initialRenderRegionResult.last + "]\" was passed to VirtualizedList._createRenderMask");
      const cellRenderMask = new CellRenderMask.CellRenderMask(itemCount);
      if (itemCount > 0) {
        let items1 = arg2;
        const items = [_initialRenderRegionResult];
        if (arg2 == null) {
          items1 = [];
        }
        HermesBuiltin.arraySpread(items, items1, 1);
        for (const item10045 of items) {
          let addCellsResult = cellRenderMask.addCells(item10045);
          continue;
        }
        if (null == getItemCount.initialScrollIndex) {
          cellRenderMask.addCells(VirtualizedList._initialRenderRegion(getItemCount));
        }
        const _Set = Set;
        const self = this;
        const self2 = this;
        set = new Set(getItemCount.stickyHeaderIndices);
        const result = VirtualizedList._ensureClosestStickyHeader(getItemCount, set, tmp6, _initialRenderRegionResult.first);
      }
      return cellRenderMask;
    }
  },
  {
    key: "_initialRenderRegion",
    value: function _initialRenderRegion(getItemCount) {
      let min2;
      let obj2;
      const itemCount = getItemCount.getItemCount(getItemCount.data);
      let num = getItemCount.initialScrollIndex;
      const _Math = Math;
      const _Math2 = Math;
      const diff = itemCount - 1;
      const _Math3 = Math;
      if (num == null) {
        num = 0;
      }
      const maxResult = max(0, min(diff, floor(num)));
      const obj = { first: maxResult, last: min2(itemCount, maxResult + obj2.initialNumToRenderOrDefault(getItemCount.initialNumToRender)) - 1 };
      min2 = Math.min;
      obj2 = react2;
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
        const obj = { first: diff, last: diff };
        addCells.addCells(obj);
      }
    }
  },
  {
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(getItemCount, renderMask) {
      let sum;
      const itemCount = getItemCount.getItemCount(getItemCount.data);
      renderMask = renderMask.renderMask;
      if (itemCount === renderMask.numCells()) {
        return renderMask;
      } else {
        let tmp9;
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
        const cellsAroundViewport = renderMask.cellsAroundViewport;
        const _constrainToItemCount = VirtualizedList._constrainToItemCount;
        if (null != tmp4) {
          tmp9 = { first: cellsAroundViewport.first + tmp4, last: renderMask.cellsAroundViewport.last + tmp4 };
          const obj2 = { first: cellsAroundViewport.first + tmp4, last: renderMask.cellsAroundViewport.last + tmp4 };
        } else {
          tmp9 = cellsAroundViewport;
        }
        const result1 = _constrainToItemCount(tmp9, getItemCount);
        const pendingScrollUpdateCount = renderMask.pendingScrollUpdateCount;
        const obj3 = { cellsAroundViewport: result1, renderMask: VirtualizedList._createRenderMask(getItemCount, result1), firstVisibleItemKey: _getItemKeyResult, pendingScrollUpdateCount: sum };
        if (null != tmp4) {
          sum = pendingScrollUpdateCount + 1;
        } else {
          sum = pendingScrollUpdateCount;
        }
        return obj3;
      }
    }
  },
  {
    key: "_constrainToItemCount",
    value: function _constrainToItemCount(cellsAroundViewport, getItemCount) {
      let bound;
      const diff = getItemCount.getItemCount(getItemCount.data) - 1;
      const obj2 = { first: clampDefault(0, cellsAroundViewport.first, bound), last: Math.min(diff, cellsAroundViewport.last) };
      const obj = react2;
      bound = Math.max(0, diff - obj.maxToRenderPerBatchOrDefault(getItemCount.maxToRenderPerBatch));
      return obj2;
    }
  },
  {
    key: "_keyExtractor",
    value: function _keyExtractor(value, sum, props) {
      if (null != props.keyExtractor) {
        return props.keyExtractor(value, sum);
      } else {
        const obj = elementsThatOverlapOffsets;
        const keyExtractorResult = obj.keyExtractor(value, sum);
        const _String = String;
        if (keyExtractorResult === String(sum)) {
          c21 = true;
          const tmp5 = value.type && value.type.displayName;
          if (tmp5) {
            displayName = value.type.displayName;
          }
        }
        return keyExtractorResult;
      }
    }
  }
];
const importDefaultResultResult = _createClass(VirtualizedList, items, items1);
importDefaultResultResult.contextType = _mod322.VirtualizedListContext;
let obj = { verticallyInverted: obj2, horizontallyInverted: obj3, debug: { flex: 1 }, debugOverlayBase: { position: "absolute", top: 0, right: 0 }, debugOverlay: { bottom: 0, width: 20, borderColor: "blue", borderWidth: 1 }, debugOverlayFrame: { left: 0, backgroundColor: "orange" }, debugOverlayFrameLast: { left: 0, borderColor: "green", borderWidth: 2 }, debugOverlayFrameVis: { left: 0, borderColor: "red", borderWidth: 2 } };
obj2 = { transform: items2 };
items2 = [{ scale: -1 }];
obj3 = { transform: items3 };
items3 = [{ scaleX: -1 }];
const debug = StyleSheet.create(obj);

export default importDefaultResultResult;