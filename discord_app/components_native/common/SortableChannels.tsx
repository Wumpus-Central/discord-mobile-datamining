// discord_app/components_native/common/SortableChannels.tsx
import importAllResult from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import { createElement } from "noop" /* 19 */;
import importDefaultResult from "apply" /* 12 */;

let require = arg1;
({ View: c3, Animated: c4, PanResponder: c5, SectionList: closure_6, StyleSheet } = get_ActivityIndicator);
({ jsxs: error, jsx: closure_8 } = jsxProd);
let closure_10 = 24 + StyleSheet.hairlineWidth;
let closure_11 = importDefaultResult.memoize((arr) => {
  const mapped = arr.map((category) => {
    const items = [{ type: "section", data: category.category }, ...data.map((data) => ({ type: "row", data }))];
    data = category.data;
    return items;
  });
  return mapped.reduce((arg0, arg1) => {
    const items = [...arg1];
    return items;
  }, []);
});
const Component = importAllResult.Component;
class Row extends Component {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    applyArgumentsResult.handleLongPress = function handleLongPress(arg0) {
      ({ onRowActive: closure_1, rowData: closure_2 } = arg0.props);
      const _view = applyArgumentsResult._view;
      if (_view != null) {
        _view.measure((arg0, arg1, arg2, arg3, arg4, arg5) => {
          if (closure_1 != null) {
            let obj = { layout: null, rowData: null, touch: null };
            obj = { frameHeight: null, pageY: null };
            obj[0] = arg3;
            obj[1] = arg5;
            obj[0] = obj;
            obj[1] = closure_2;
            obj[2] = nativeEvent.nativeEvent;
            tmp(obj);
          }
        });
      }
    };
    applyArgumentsResult.setViewRef = function setViewRef(_view) {
      closure_0._view = _view;
    };
    applyArgumentsResult.measure = function measure(arg0) {
      const _view = applyArgumentsResult._view;
      if (_view != null) {
        _view.measure(arg0);
      }
    };
    return applyArgumentsResult;
  }
}
Row.prototype["render"] = function render() {
  const self = this;
  const props = this.props;
  ({ rowData, list, activeDivider, isAfter } = props);
  const active2 = list.state.active;
  let num = -1;
  ({ active, renderItem, style, sortingEnabled } = props);
  if (null != active2) {
    num = active2.rowData.index;
  }
  let tmp3 = null;
  if (sortingEnabled) {
    let obj = { sortHandlers: null, onLongPress: null, onPressOut: null };
    obj = { onLongPress: null, onPressOut: null };
    obj[0] = self.handleLongPress;
    obj[1] = list.cancel;
    obj[0] = obj;
    obj[1] = self.handleLongPress;
    obj[2] = list.cancel;
    tmp3 = obj;
  }
  obj = null;
  const renderItemResult = renderItem(rowData.data);
  if (active) {
    obj = { opacity: 0.2 };
  }
  obj1 = { style: items, ref: self.setViewRef, collapsable: false, children: null };
  items = [obj, style];
  let tmp8 = null;
  if (!isAfter) {
    tmp8 = null;
    if (tmp7) {
      tmp8 = null;
      if (null != activeDivider) {
        tmp8 = activeDivider;
      }
    }
  }
  const items1 = [tmp8, importAllResult.cloneElement(renderItem(rowData.data), tmp3), ];
  let tmp9 = null;
  if (isAfter) {
    tmp9 = null;
    if (tmp7) {
      tmp9 = null;
      if (null != activeDivider) {
        tmp9 = activeDivider;
      }
    }
  }
  items1[2] = tmp9;
  obj1[3] = items1;
  return closure_7(closure_3, obj1);
};
const Component2 = importAllResult.Component;
class SortRow extends Component2 {
  constructor(arg0) {
    tmp3 = new SortRow(global, tmp2, tmp, new.target);
    // ThrowIfThisInitialized (0x7c)
    if (null == global.list.state.active) {
      tmp5 = globalThis;
      _Error = Error;
      tmp6 = new.target;
      tmp7 = new.target;
      error = new Error();
      tmp9 = error;
      throw error;
    } else {
      layout = global.list.state.active.layout;
      num = global.activeOpacity;
      if (num == null) {
        num = 0.8;
      }
      tmp4 = tmp3;
      obj = { style: null };
      obj = { position: "absolute", left: 0, right: 0, opacity: null, height: null, overflow: "hidden", backgroundColor: "transparent", marginTop: null };
      obj[3] = num;
      obj[4] = layout.frameHeight;
      obj[7] = layout.pageY - global.list.wrapperLayout.pageY;
      obj[0] = obj;
      tmp3.state = obj;
      return tmp3;
    }
  }
}
SortRow.prototype["render"] = function render() {
  const props = this.props;
  const obj = { style: null, children: null };
  const items = [this.state.style, props.sortRowStyle, ];
  const pan = props.list.state.pan;
  ({ rowData, renderItem } = props);
  items[2] = pan.getLayout();
  obj[0] = items;
  obj[1] = renderItem(rowData.data, true);
  return callback(RN.View, obj);
};
const Component3 = importAllResult.Component;
class SortableChannels extends Component3 {
  constructor(arg0) {
    closure_0 = undefined;
    obj = new SortableChannels(global, tmp3, tmp2, global, new.target, tmp);
    // ThrowIfThisInitialized (0x7c)
    closure_0 = obj;
    obj.cancel = function cancel() {
      if (!obj.moved) {
        const onMoveCancel = obj.props.onMoveCancel;
        if (null != obj.state.active) {
          if (onMoveCancel != null) {
            onMoveCancel();
          }
        }
        obj.setState({ active: null, hoveringIndex: -1, activeIndex: -1 });
      }
    };
    obj.handleWrapperLayout = function handleWrapperLayout() {
      if (null != obj._view) {
        const _view = obj._view;
        _view.measure((arg0, arg1, arg2, frameHeight, arg4, pageY) => {
          closure_0.wrapperLayout = { frameHeight, pageY };
        });
      }
    };
    obj.handleListLayout = function handleListLayout(nativeEvent) {
      obj.listLayout = nativeEvent.nativeEvent.layout;
    };
    obj.handleScroll = function handleScroll(nativeEvent) {
      const onScroll = obj.props.onScroll;
      obj.scrollValue = nativeEvent.nativeEvent.contentOffset.y;
      if (onScroll != null) {
        onScroll(nativeEvent);
      }
    };
    obj.handleContentSizeChange = function handleContentSizeChange(arg0, scrollContainerHeight) {
      obj.scrollContainerHeight = scrollContainerHeight;
    };
    obj.setListRef = function setListRef(_list) {
      obj._list = _list;
    };
    obj.scrollAnimation = function scrollAnimation() {
      const active = obj.state.active;
      if (null != active) {
        if (null != obj.moveY) {
          const _Math = Math;
          const bound = Math.max(obj.moveY - obj.wrapperLayout.pageY, 0);
          const sum = obj.scrollContainerHeight - obj.listLayout.height + active.layout.frameHeight;
          const scrollValue = obj.scrollValue;
          const diff = obj.listLayout.height - 100;
          if (bound < 100) {
            if (scrollValue > 0) {
              let diff1 = scrollValue - 1500 * (1 - bound / 100);
              if (diff1 < 0) {
                diff1 = 0;
              }
            }
            if (null != diff1) {
              obj.scrollValue = diff1;
              obj = { y: null, x: 0 };
              obj[0] = obj.scrollValue;
              obj.scrollTo(obj);
            }
            if (obj.moved) {
              obj.checkTargetElement();
            }
            const _requestAnimationFrame2 = requestAnimationFrame;
            const animationFrame = requestAnimationFrame(obj.scrollAnimation);
          }
          diff1 = null;
          if (bound > diff) {
            diff1 = null;
            if (scrollValue < sum) {
              diff1 = scrollValue + 1500 * (1 - (obj.listLayout.height - bound) / 100);
              if (diff1 > sum) {
                diff1 = sum;
              }
            }
          }
        } else {
          const _requestAnimationFrame = requestAnimationFrame;
          const animationFrame1 = requestAnimationFrame(obj.scrollAnimation);
        }
      }
    };
    obj.setWrapperRef = function setWrapperRef(_view) {
      obj._view = _view;
    };
    obj.checkTargetElement = function checkTargetElement() {
      const onHoverChange = obj.props.onHoverChange;
      const scrollValue = obj.scrollValue;
      const diff = obj.moveY - obj.wrapperLayout.pageY;
      const order = obj.props.order;
      let num = 0;
      let num2 = 0;
      let flag = false;
      let num3 = 0;
      if (0 < scrollValue + diff) {
        flag = true;
        num3 = num;
        while (null != obj.layoutMap[order[num]]) {
          num2 = num2 + tmp3.height;
          num = num + 1;
          flag = false;
          num3 = num;
          obj = tmp2;
          if (num2 >= scrollValue + diff) {
            break;
          }
        }
      }
      let diff1 = num3;
      if (!flag) {
        diff1 = num3 - 1;
      }
      if (tmp7) {
        obj = { hoveringIndex: null };
        obj[0] = diff1;
        obj.setState(obj);
        if (onHoverChange != null) {
          onHoverChange(order[diff1]);
        }
      }
    };
    obj.handleRowActive = function handleRowActive(layout) {
      const props = obj.props;
      const onRowActive = props.onRowActive;
      if (!props.disableSorting) {
        const pan = obj.state.pan;
        pan.setValue({ x: 0, y: 0 });
        obj.moveY = layout.layout.pageY + layout.layout.frameHeight / 2;
        const index = layout.rowData.index;
        obj = { active: null, activeIndex: null, hoveringIndex: null };
        obj[0] = layout;
        obj[1] = index;
        obj[2] = index;
        obj.setState(obj, obj.scrollAnimation);
        if (onRowActive != null) {
          onRowActive(layout);
        }
      }
    };
    obj.renderActiveDivider = function renderActiveDivider(arg0) {
      const active = obj.state.active;
      const renderActiveDivider = obj.props.renderActiveDivider;
      if (null == active) {
        return null;
      } else {
        const frameHeight = active.layout.frameHeight;
        if (null != renderActiveDivider) {
          let tmp5 = null;
          if (null != active) {
            tmp5 = tmp.props.order[active.rowData.index];
          }
          let renderActiveDividerResult = renderActiveDivider(frameHeight, arg0, tmp5);
        } else {
          obj = { style: null };
          obj = { height: null };
          obj[0] = frameHeight;
          obj[0] = obj;
          renderActiveDividerResult = closure_1_8(closure_1_3, obj);
        }
        return renderActiveDividerResult;
      }
    };
    obj.renderSectionHeader = function renderSectionHeader(data) {
      let tmp = arg1;
      const state = obj.state;
      ({ active, hoveringIndex } = state);
      const order = obj.props.order;
      ({ activeIndex, panResponder } = state);
      const index = order.indexOf(data.section.category.id);
      let tmp4 = !tmp;
      if (!tmp) {
        let index1;
        if (active != null) {
          const rowData = active.rowData;
          if (rowData != null) {
            index1 = rowData.index;
          }
        }
        tmp4 = index1 === index;
      }
      let str = obj.props.order[hoveringIndex];
      if (str == null) {
        str = "";
      }
      obj = { data, index, isRow: false };
      const itemLayoutProps = obj.getItemLayoutProps(obj.index);
      obj = {};
      const merged = Object.assign(obj.props);
      const renderSectionHeader = obj.props.renderSectionHeader;
      obj.renderItem = renderSectionHeader.bind(null, data);
      let renderActiveDividerResult = null;
      if (str === data.section.key) {
        renderActiveDividerResult = obj.renderActiveDivider(str);
      }
      obj.activeDivider = renderActiveDividerResult;
      obj.key = data.section.key;
      if (!tmp) {
        tmp = tmp4;
      }
      obj.active = tmp;
      obj.list = obj;
      obj.sortingEnabled = obj.props.sortingEnabled;
      obj.hovering = str === data.section.key;
      obj.panResponder = panResponder;
      obj.rowData = obj;
      obj.onRowActive = obj.handleRowActive;
      obj.isAfter = hoveringIndex > activeIndex;
      return closure_1_9(arg1 ? closure_1_13 : closure_1_12, obj);
    };
    obj.renderItem = function renderItem(data) {
      let tmp = arg1;
      const state = obj.state;
      ({ active, hoveringIndex } = state);
      let tmp3 = !tmp;
      ({ activeIndex, panResponder } = state);
      if (!tmp) {
        let index;
        if (active != null) {
          const rowData = active.rowData;
          if (rowData != null) {
            index = rowData.index;
          }
        }
        tmp3 = index === data.item.index;
      }
      let str = obj.props.order[hoveringIndex];
      if (str == null) {
        str = "";
      }
      obj = { data, index: data.item.index, isRow: true };
      const itemLayoutProps = obj.getItemLayoutProps(obj.index);
      obj = {};
      const merged = Object.assign(obj.props);
      let renderActiveDividerResult = null;
      if (str === data.item.key) {
        renderActiveDividerResult = obj.renderActiveDivider(str);
      }
      obj.activeDivider = renderActiveDividerResult;
      obj.key = data.item.key;
      if (!tmp) {
        tmp = tmp3;
      }
      obj.active = tmp;
      obj.list = obj;
      obj.sortingEnabled = obj.props.sortingEnabled;
      obj.hovering = str === data.item.key;
      obj.panResponder = panResponder;
      obj.rowData = obj;
      obj.onRowActive = obj.handleRowActive;
      obj.isAfter = hoveringIndex > activeIndex;
      return closure_1_9(arg1 ? closure_1_13 : closure_1_12, obj);
    };
    obj.getItemLayout = function getItemLayout(arg0, index) {
      return obj.getItemLayoutProps(index);
    };
    obj.getSectionHeight = function getSectionHeight(data) {
      const props = obj.props;
      let num = 20;
      if (props.sortingEnabled) {
        num = 0;
      }
      let bound = Math.max(44 + 16 * props.fontScale, 60);
      if ("null" === data.data.id) {
        bound = num;
      }
      return bound;
    };
    obj.getRowHeight = function getRowHeight() {
      return Math.max(closure_1_10 + 20 * obj.props.fontScale, 48);
    };
    obj.getItemLayoutProps = function getItemLayoutProps(index) {
      let num = 0;
      let num2 = 0;
      const iter = closure_1_11(obj.props.sections)[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp2 = nextResult;
        if ("section" === nextResult.type) {
          let tmp7 = obj;
          let tmp8 = tmp2;
          let sectionHeight = obj.getSectionHeight(tmp2);
        } else {
          let tmp5 = obj;
          sectionHeight = obj.getRowHeight();
        }
        let tmp = sectionHeight;
        let tmp9 = num2;
        if (num2 === index) {
          let tmp13 = iter;
          iter.return();
          break;
        } else {
          let tmp10 = num;
          let tmp11 = tmp;
          num = num + tmp;
          let tmp12 = num2;
          num2 = num2 + 1;
          continue;
        }
        obj = { length: null, offset: null, index: null };
        let tmp14 = tmp;
        obj[0] = tmp;
        let tmp15 = num;
        obj[1] = num;
        obj[2] = index;
        let tmp16 = tmp2;
        let tmp17 = null;
        if (null == tmp2) {
          return obj;
        } else {
          let tmp18 = tmp2;
          if (null != tmp2.data.id) {
            let id = tmp2.data.id;
          } else {
            let tmp19 = tmp2;
            id = null;
            if (null != tmp2.data.channel) {
              let tmp21 = tmp2;
              id = tmp2.data.channel.id;
            }
          }
          if (typeof id === "string") {
            let tmp22 = obj;
            obj = { y: null, height: null };
            obj[0] = num;
            obj[1] = tmp;
            obj.layoutMap[id] = obj;
          }
          return obj;
        }
      }
    };
    obj.scrollTo = function scrollTo() {
      const items = [...arguments];
      const scrollResponder = obj.getScrollResponder();
      if (null != scrollResponder) {
        const scrollTo = scrollResponder.scrollTo;
        const items1 = [];
        HermesBuiltin.arraySpread(items, 0);
        HermesBuiltin.apply(items1, scrollResponder);
      }
    };
    obj.getScrollResponder = function getScrollResponder() {
      const _list = obj._list;
      let scrollResponder;
      if (_list != null) {
        const getScrollResponder = _list.getScrollResponder;
        if (getScrollResponder != null) {
          scrollResponder = getScrollResponder();
        }
      }
      if (scrollResponder == null) {
        scrollResponder = null;
      }
      return scrollResponder;
    };
    obj = { x: 0, y: 0 };
    valueXY = new Animated.ValueXY(obj);
    panResponder = obj.createPanResponder(global, obj, valueXY);
    obj.listener = valueXY.addListener((arg0) => {
      const y = arg0.y;
      tmp.panY = y;
      return y;
    });
    obj.moved = false;
    obj.moveY = 0;
    obj.dy = 0;
    obj.direction = "down";
    obj.scrollValue = 0;
    obj4 = require("useWindowDimensions");
    obj.scrollContainerHeight = 1.2 * obj4.getWindowDimensions().height;
    obj.state = { active: null, activeIndex: -1, hoveringIndex: -1, panResponder, pan: valueXY };
    obj.layoutMap = {};
    return obj;
  }
}
const prototype = SortableChannels.prototype;
prototype["componentWillUnmount"] = function componentWillUnmount() {
  const pan = this.state.pan;
  pan.removeListener(this.listener);
};
prototype["createPanResponder"] = function createPanResponder(arg0, arg1, valueXY) {
  const self = this;
  closure_1 = arg0;
  closure_2 = arg1;
  let obj = { dx: valueXY.x, dy: valueXY.y };
  const items = [null, obj];
  closure_0 = RN.event(items, { useNativeDriver: false });
  obj = {
    onStartShouldSetPanResponder() {
      return true;
    },
    onMoveShouldSetPanResponderCapture(arg0, vy) {
      const absolute = Math.abs(vy.vy);
      let tmp2 = absolute > Math.abs(vy.vx);
      if (tmp2) {
        tmp2 = null != self.state.active;
      }
      return tmp2;
    },
    onPanResponderMove(arg0, dy) {
      const active = self.state.active;
      if (null != active) {
        dy.dx = 0;
        const layout = active.layout;
        tmp.moveY = layout.pageY + layout.frameHeight / 2 + dy.dy;
        let str = "up";
        if (dy.dy >= tmp.dy) {
          str = "down";
        }
        tmp.direction = str;
        tmp.dy = dy.dy;
        callback(arg0, dy);
      }
    },
    onPanResponderGrant() {
      const state = self.state;
      const pan = state.pan;
      const onMoveStart = closure_1.onMoveStart;
      if (null != state.active) {
        tmp.moved = true;
        tmp.dy = 0;
        tmp.direction = "down";
        if (onMoveStart != null) {
          onMoveStart();
        }
        pan.setOffset(closure_2);
        pan.setValue(closure_2);
      }
    },
    onPanResponderTerminate() {
      const onHoverChange = self.props.onHoverChange;
      if (onHoverChange != null) {
        onHoverChange("-1");
      }
      self.setState({ active: null, hoveringIndex: -1, activeIndex: -1 });
    },
    onPanResponderRelease() {
      let obj = self;
      ({ active, hoveringIndex } = self.state);
      const onRowMoved = self.props.onRowMoved;
      self.moved = false;
      const onMoveEnd = closure_1.onMoveEnd;
      if (onMoveEnd != null) {
        onMoveEnd();
      }
      if (null == active) {
        if (hoveringIndex >= 0) {
          obj.setState({ hoveringIndex: -1 });
        }
        obj.moveY = 0;
      } else {
        const index = active.rowData.index;
        let tmp2 = hoveringIndex;
        if (-1 === hoveringIndex) {
          tmp2 = index;
        }
        if (tmp2 === index) {
          return obj.setState({ active: null, hoveringIndex: -1, activeIndex: -1 });
        } else {
          obj = { row: null, from: null, to: null };
          obj[0] = active.rowData;
          obj[1] = index - 1;
          obj[2] = tmp2 - 1;
          if (onRowMoved != null) {
            onRowMoved(obj);
          }
          obj.setState({ active: null, hoveringIndex: -1, activeIndex: -1 });
          const _Math = Math;
          const bound = Math.max(0, obj.scrollContainerHeight - obj.listLayout.height + active.layout.frameHeight);
          if (obj.scrollValue > bound) {
            obj = { y: null };
            obj[0] = bound;
            obj.scrollTo(obj);
          }
          obj.state.active = null;
          obj.state.hoveringIndex = -1;
          obj.moveY = 0;
        }
      }
    }
  };
  return closure_5.create(obj);
};
prototype["renderActive"] = function renderActive() {
  const self = this;
  const active = this.state.active;
  if (null != active) {
    const rowData = active.rowData;
    const data = rowData.data;
    if (rowData.isRow) {
      let renderItemResult = self.renderItem(data, true);
    } else {
      renderItemResult = self.renderSectionHeader(data, true);
    }
    return renderItemResult;
  }
};
prototype["render"] = function render() {
  const self = this;
  let obj = { style: { flex: 1 }, onLayout: this.handleWrapperLayout, ref: this.setWrapperRef, children: null };
  obj = { enableEmptySections: true };
  ({ active, panResponder } = this.state);
  const merged = Object.assign(this.props);
  const merged1 = Object.assign(panResponder.panHandlers);
  ({ setListRef: obj2.ref, handleScroll: obj2.onScroll, handleContentSizeChange: obj2.onContentSizeChange, handleListLayout: obj2.onLayout } = this);
  let tmp7 = null == active;
  if (tmp7) {
    tmp7 = false !== this.props.scrollEnabled;
  }
  obj.scrollEnabled = tmp7;
  ({ renderItem: obj2.renderItem, renderSectionHeader: obj2.renderSectionHeader } = self);
  obj.stickySectionHeadersEnabled = false;
  obj.initialNumToRender = 20;
  obj.keyExtractor = function keyExtractor(key) {
    return key.key;
  };
  obj.getItemLayout = self.getItemLayout;
  const items = [closure_8(closure_6, obj), self.renderActive()];
  obj[3] = items;
  return closure_7(closure_3, obj);
};
const result = require("set").fileFinishedImporting("components_native/common/SortableChannels.tsx");

export default SortableChannels;