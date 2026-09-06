// === Module 16148: SortableChannels ===

// Module 16148 (SortableChannels)
import noop from "module_19" /* 19 */;
import apply from "module_12" /* 12 */;

let require = fn;
get_ActivityIndicator = fn(17);
({ View: c3, Animated: closure_4, PanResponder: hasOwnProperty, SectionList: metroRequire, StyleSheet } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsxs: closure_7, jsx: closure_8 } = jsxProd);
const createElement = fn(19).createElement;
let closure_10 = 24 + StyleSheet.hairlineWidth;
let closure_11 = apply.memoize((arr) => {
  const mapped = arr.map((category) => {
    const items = [{ type: "section", data: category.category }, ...data.map((data) => ({ type: "row", data }))];
    data = category.data;
    return items;
  });
  return mapped.reduce((acc, item) => {
    const items = [...item];
    return items;
  }, []);
});
const Component = noop.Component;
class Row extends Component {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    applyArgumentsResult.handleLongPress = function handleLongPress(arg0) {
      const nativeEvent = arg0;
      ({ onRowActive: closure_1, rowData: closure_2 } = applyArgumentsResult.props);
      const _view = applyArgumentsResult._view;
      if (_view != null) {
        _view.measure((arg0, arg1, arg2, frameHeight, arg4, pageY) => {
          if (closure_1_1 != null) {
            let obj = { layout: null, rowData: null, touch: null };
            obj = { frameHeight, pageY };
            obj.layout = obj;
            obj.rowData = rowData;
            obj.touch = nativeEvent.nativeEvent;
            tmp(obj);
          }
        });
      }
    };
    applyArgumentsResult.setViewRef = function setViewRef(_view) {
      applyArgumentsResult._view = _view;
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
  ({ active, renderItem, style, sortingEnabled } = props);
  let tmp3 = null;
  if (sortingEnabled) {
    let obj = { sortHandlers: null, onLongPress: null, onPressOut: null };
    obj = { onLongPress: self.handleLongPress, onPressOut: list.cancel };
    obj.sortHandlers = obj;
    obj.onLongPress = self.handleLongPress;
    obj.onPressOut = list.cancel;
    tmp3 = obj;
  }
  obj = null;
  const renderItemResult = renderItem(rowData.data);
  if (active) {
    obj = { opacity: 0.2 };
  }
  const obj1 = { style: null, ref: self.setViewRef, collapsable: false, children: null };
  const items = [obj, style];
  obj1.style = items;
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
  const items1 = [tmp8, noop.cloneElement(renderItem(rowData.data), tmp3), ];
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
  obj1.children = items1;
  return React5(React3, obj1);
};
const Component2 = noop.Component;
class SortRow extends Component2 {
  constructor(arg0) {
    tmp3 = new SortRow(global, tmp2, tmp, new.target);
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
      rect = { position: "absolute", left: 0, right: 0, opacity: null, height: null, overflow: "hidden", backgroundColor: "transparent", marginTop: null };
      rect.opacity = num;
      rect.height = layout.frameHeight;
      rect.marginTop = layout.pageY - global.list.wrapperLayout.pageY;
      obj.style = rect;
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
  obj.style = items;
  obj.children = renderItem(rowData.data, true);
  return React6(RN.View, obj);
};
const Component3 = noop.Component;
class SortableChannels extends Component3 {
  constructor(arg0) {
    closure_0 = undefined;
    obj = new SortableChannels(global, tmp3, tmp2, global, new.target, tmp);
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
          const wrapperLayout = { frameHeight, pageY };
          obj.wrapperLayout = wrapperLayout;
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
              const point = { y: obj.scrollValue, x: 0 };
              obj.scrollTo(point);
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
        obj = { hoveringIndex: diff1 };
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
        obj = { active: layout, activeIndex: index, hoveringIndex: index };
        obj.setState(obj, obj.scrollAnimation);
        if (onRowActive != null) {
          onRowActive(layout);
        }
      }
    };
    obj.renderActiveDivider = function renderActiveDivider(arg0) {
      const active = style.state.active;
      const renderActiveDivider = style.props.renderActiveDivider;
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
          style = { style: null };
          style = { height: frameHeight };
          style.style = style;
          renderActiveDividerResult = React6(React3, style);
        }
        return renderActiveDividerResult;
      }
    };
    obj.renderSectionHeader = function renderSectionHeader(data, arg1) {
      let tmp = arg1;
      const state = rowData.state;
      ({ active, hoveringIndex } = state);
      const order = rowData.props.order;
      ({ activeIndex, panResponder } = state);
      const index = order.indexOf(data.section.category.id);
      let tmp4 = !tmp;
      if (!tmp) {
        let index1;
        if (active != null) {
          rowData = active.rowData;
          if (rowData != null) {
            index1 = rowData.index;
          }
        }
        tmp4 = index1 === index;
      }
      let str = rowData.props.order[hoveringIndex];
      if (str == null) {
        str = "";
      }
      rowData = { data, index, isRow: false };
      const itemLayoutProps = rowData.getItemLayoutProps(rowData.index);
      rowData = {};
      const merged = Object.assign(rowData.props);
      const renderSectionHeader = rowData.props.renderSectionHeader;
      rowData.renderItem = renderSectionHeader.bind(null, data);
      let renderActiveDividerResult = null;
      if (str === data.section.key) {
        renderActiveDividerResult = rowData.renderActiveDivider(str);
      }
      rowData.activeDivider = renderActiveDividerResult;
      rowData.key = data.section.key;
      if (!tmp) {
        tmp = tmp4;
      }
      rowData.active = tmp;
      rowData.list = rowData;
      rowData.sortingEnabled = rowData.props.sortingEnabled;
      rowData.hovering = str === data.section.key;
      rowData.panResponder = panResponder;
      rowData.rowData = rowData;
      rowData.onRowActive = rowData.handleRowActive;
      rowData.isAfter = hoveringIndex > activeIndex;
      return createElement(arg1 ? SortRow : Row, {});
    };
    obj.renderItem = function renderItem(data, arg1) {
      let tmp = arg1;
      const state = rowData.state;
      ({ active, hoveringIndex } = state);
      let tmp3 = !tmp;
      ({ activeIndex, panResponder } = state);
      if (!tmp) {
        let index;
        if (active != null) {
          rowData = active.rowData;
          if (rowData != null) {
            index = rowData.index;
          }
        }
        tmp3 = index === data.item.index;
      }
      let str = rowData.props.order[hoveringIndex];
      if (str == null) {
        str = "";
      }
      rowData = { data, index: data.item.index, isRow: true };
      const itemLayoutProps = rowData.getItemLayoutProps(rowData.index);
      rowData = {};
      const merged = Object.assign(rowData.props);
      let renderActiveDividerResult = null;
      if (str === data.item.key) {
        renderActiveDividerResult = rowData.renderActiveDivider(str);
      }
      rowData.activeDivider = renderActiveDividerResult;
      rowData.key = data.item.key;
      if (!tmp) {
        tmp = tmp3;
      }
      rowData.active = tmp;
      rowData.list = rowData;
      rowData.sortingEnabled = rowData.props.sortingEnabled;
      rowData.hovering = str === data.item.key;
      rowData.panResponder = panResponder;
      rowData.rowData = rowData;
      rowData.onRowActive = rowData.handleRowActive;
      rowData.isAfter = hoveringIndex > activeIndex;
      return createElement(arg1 ? SortRow : Row, {});
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
      return Math.max(closure_10 + 20 * obj.props.fontScale, 48);
    };
    obj.getItemLayoutProps = function getItemLayoutProps(index) {
      let num = 0;
      let num2 = 0;
      const iter = closure_11(obj.props.sections)[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp2 = nextResult;
        if ("section" === nextResult.type) {
          let sectionHeight = obj.getSectionHeight(tmp2);
        } else {
          sectionHeight = obj.getRowHeight();
        }
        let tmp = sectionHeight;
        if (num2 === index) {
          iter.return();
          break;
        } else {
          num = num + tmp;
          num2 = num2 + 1;
          continue;
        }
        obj = { length: null, offset: null, index: null };
        obj.length = tmp;
        obj.offset = num;
        obj.index = index;
        if (null == tmp2) {
          return obj;
        } else {
          if (null != tmp2.data.id) {
            let id = tmp2.data.id;
          } else {
            id = null;
            if (null != tmp2.data.channel) {
              id = tmp2.data.channel.id;
            }
          }
          if (typeof id === "string") {
            obj = { y: num, height: tmp };
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
    point = { x: 0, y: 0 };
    valueXY = new Animated.ValueXY(point);
    panResponder = obj.createPanResponder(global, point, valueXY);
    obj.listener = valueXY.addListener((arg0) => {
      const y = arg0.y;
      obj.panY = y;
      return y;
    });
    obj.moved = false;
    obj.moveY = 0;
    obj.dy = 0;
    obj.direction = "down";
    obj.scrollValue = 0;
    obj4 = closure_0(closure_1[4]);
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
prototype["createPanResponder"] = function createPanResponder(arg0, point, valueXY) {
  const self = this;
  closure_1 = arg0;
  closure_2 = point;
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
        self.moveY = layout.pageY + layout.frameHeight / 2 + dy.dy;
        let str = "up";
        if (dy.dy >= self.dy) {
          str = "down";
        }
        self.direction = str;
        self.dy = dy.dy;
        closure_0(arg0, dy);
      }
    },
    onPanResponderGrant() {
      const state = self.state;
      const pan = state.pan;
      const onMoveStart = closure_1.onMoveStart;
      if (null != state.active) {
        self.moved = true;
        self.dy = 0;
        self.direction = "down";
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
          obj = { row: active.rowData, from: index - 1, to: tmp2 - 1 };
          if (onRowMoved != null) {
            onRowMoved(obj);
          }
          obj.setState({ active: null, hoveringIndex: -1, activeIndex: -1 });
          const _Math = Math;
          const bound = Math.max(0, obj.scrollContainerHeight - obj.listLayout.height + active.layout.frameHeight);
          if (obj.scrollValue > bound) {
            obj = { y: bound };
            obj.scrollTo(obj);
          }
          obj.state.active = null;
          obj.state.hoveringIndex = -1;
          obj.moveY = 0;
        }
      }
    }
  };
  return hasOwnProperty.create(obj);
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
  const items = [React6(timestampProducer, obj), self.renderActive()];
  obj.children = items;
  return React5(React3, obj);
};
const size = fn(2);
const result = size.fileFinishedImporting("components_native/common/SortableChannels.tsx");

export default SortableChannels;