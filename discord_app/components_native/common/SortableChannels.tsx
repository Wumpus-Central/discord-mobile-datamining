// === Module 16112: SortableChannels ===

// Module 16112 (SortableChannels)
import react2 from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import module_12 from "module_12" /* 12 */;
import size from "module_2" /* 2 */;

const react = react2;

let StyleSheet;
let c3;
let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
({ View: c3, Animated: closure_4, PanResponder: hasOwnProperty, SectionList: metroRequire, StyleSheet } = react_native);
({ jsxs: metroImportDefault, jsx: metroImportAll } = Fragment);
const createElement = react2.createElement;
let closure_10 = 24 + StyleSheet.hairlineWidth;
let closure_11 = module_12.memoize((arr) => {
  const mapped = arr.map((category) => {
    let data;
    const obj = { type: "section", data: category.category };
    const items = [obj, ...data.map((data) => ({ type: "row", data }))];
    data = category.data;
    return items;
  });
  return mapped.reduce((acc, item) => {
    const items = [...item];
    return items;
  }, []);
});
const Component = react.Component;
class Row extends Component {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    applyArgumentsResult.handleLongPress = function handleLongPress(arg0) {
      let closure_129_1;
      let closure_129_2;
      let closure_0 = arg0;
      ({ onRowActive: closure_129_1, rowData: closure_129_2 } = applyArgumentsResult.props);
      const _view = applyArgumentsResult._view;
      if (_view != null) {
        _view.measure((arg0, arg1, arg2, frameHeight, arg4, pageY) => {
          let obj2;
          if (closure_1_1 != null) {
            const obj = { layout: obj2, rowData, touch: nativeEvent.nativeEvent };
            obj2 = { frameHeight, pageY };
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
  render() {
    let active;
    let activeDivider;
    let isAfter;
    let items;
    let items1;
    let list;
    let obj2;
    let renderItem;
    let rowData;
    let sortingEnabled;
    let style;
    const self = this;
    const props = this.props;
    ({ rowData, list, activeDivider, isAfter } = props);
    const active2 = list.state.active;
    let num = -1;
    ({ active, renderItem, style, sortingEnabled } = props);
    if (null != active2) {
      num = active2.rowData.index;
    }
    const index = rowData.index;
    const cloneElement = react.cloneElement;
    let tmp3 = null;
    const renderItemResult = renderItem(rowData.data);
    if (sortingEnabled) {
      const obj = { sortHandlers: obj2, onLongPress: self.handleLongPress, onPressOut: list.cancel };
      tmp3 = obj;
      obj2 = { onLongPress: self.handleLongPress, onPressOut: list.cancel };
    }
    let obj3 = null;
    const cloneElementResult = cloneElement(renderItemResult, tmp3);
    if (active) {
      obj3 = { opacity: 0.2 };
    }
    const obj4 = { style: items, ref: self.setViewRef, collapsable: false, children: items1 };
    items = [obj3, style];
    let tmp8 = null;
    if (!isAfter) {
      tmp8 = null;
      if (num !== index) {
        tmp8 = null;
        if (null != activeDivider) {
          tmp8 = activeDivider;
        }
      }
    }
    items1 = [tmp8, cloneElementResult, ];
    let tmp9 = null;
    if (isAfter) {
      tmp9 = null;
      if (num !== index) {
        tmp9 = null;
        if (null != activeDivider) {
          tmp9 = activeDivider;
        }
      }
    }
    items1[2] = tmp9;
    return metroImportDefault(_false, obj4);
  }
}
const prototype = Row.prototype;
const Component2 = react.Component;
class SortRow extends Component2 {
  constructor(list) {
    let rect;
    const tmp3 = new SortRow(list, tmp2, tmp, new.target);
    if (null == list.list.state.active) {
      const _Error = Error;
      const self = this;
      const self2 = this;
      const error = new Error();
      throw error;
    } else {
      const layout = list.list.state.active.layout;
      let num = list.activeOpacity;
      const wrapperLayout = list.list.wrapperLayout;
      if (num == null) {
        num = 0.8;
      }
      const obj = { style: rect };
      rect = { position: "absolute", left: 0, right: 0, opacity: num, height: layout.frameHeight, overflow: "hidden", backgroundColor: "transparent", marginTop: layout.pageY - wrapperLayout.pageY };
      tmp3.state = obj;
      return tmp3;
    }
  }
  render() {
    let items;
    let renderItem;
    let rowData;
    const props = this.props;
    const obj = { style: items, children: renderItem(rowData.data, true) };
    items = [this.state.style, props.sortRowStyle, ];
    const pan = props.list.state.pan;
    ({ rowData, renderItem } = props);
    const View = RN.View;
    items[2] = pan.getLayout();
    return metroImportAll(View, obj);
  }
}
const prototype2 = SortRow.prototype;
const Component3 = react.Component;
class SortableChannels extends Component3 {
  constructor(arg0) {
    let tmp;
    let tmp2;
    let tmp3;
    let obj = new SortableChannels(arg0, tmp3, tmp2, arg0, new.target, tmp);
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
          let diff1;
          const _Math = Math;
          const bound = Math.max(obj.moveY - obj.wrapperLayout.pageY, 0);
          const sum = obj.scrollContainerHeight - obj.listLayout.height + active.layout.frameHeight;
          const scrollValue = obj.scrollValue;
          const diff = obj.listLayout.height - 100;
          if (bound < 100) {
            if (scrollValue > 0) {
              diff1 = scrollValue - 1500 * (1 - bound / 100);
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
      const hoveringIndex = obj.state.hoveringIndex;
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
      const tmp7 = diff1 !== hoveringIndex && diff1 >= 0;
      if (tmp7) {
        const obj2 = { hoveringIndex: diff1 };
        obj.setState(obj2);
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
        const obj2 = { active: layout, activeIndex: index, hoveringIndex: index };
        obj.setState(obj2, obj.scrollAnimation);
        if (onRowActive != null) {
          onRowActive(layout);
        }
      }
    };
    obj.renderActiveDivider = function renderActiveDivider(arg0) {
      let obj2;
      const active = obj.state.active;
      const renderActiveDivider = obj.props.renderActiveDivider;
      if (null == active) {
        return null;
      } else {
        let renderActiveDividerResult;
        const frameHeight = active.layout.frameHeight;
        if (null != renderActiveDivider) {
          let tmp5 = null;
          if (null != active) {
            tmp5 = tmp.props.order[active.rowData.index];
          }
          renderActiveDividerResult = renderActiveDivider(frameHeight, arg0, tmp5);
        } else {
          obj = { style: obj2 };
          obj2 = { height: frameHeight };
          renderActiveDividerResult = metroImportAll(_false, obj);
        }
        return renderActiveDividerResult;
      }
    };
    obj.renderSectionHeader = function renderSectionHeader(data, arg1) {
      let active;
      let activeIndex;
      let hoveringIndex;
      let panResponder;
      let tmp = arg1;
      const state = list.state;
      ({ active, hoveringIndex } = state);
      const order = list.props.order;
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
      let str = list.props.order[hoveringIndex];
      if (str == null) {
        str = "";
      }
      const obj2 = { data, index, isRow: false };
      const itemLayoutProps = list.getItemLayoutProps(obj2.index);
      const merged = Object.assign(list.props);
      const renderSectionHeader = list.props.renderSectionHeader;
      let renderActiveDividerResult = null;
      if (str === data.section.key) {
        renderActiveDividerResult = list.renderActiveDivider(str);
      }
      if (!tmp) {
        tmp = tmp4;
      }
      return <tmp3 renderItem={renderSectionHeader.bind(null, data)} activeDivider={renderActiveDividerResult} key={data.section.key} active={tmp} list={list} sortingEnabled={list.props.sortingEnabled} hovering={str === data.section.key} panResponder={panResponder} rowData={obj2} onRowActive={list.handleRowActive} isAfter={hoveringIndex > activeIndex} />;
    };
    obj.renderItem = function renderItem(data, arg1) {
      let active;
      let activeIndex;
      let hoveringIndex;
      let panResponder;
      let tmp = arg1;
      const state = list.state;
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
      let str = list.props.order[hoveringIndex];
      if (str == null) {
        str = "";
      }
      const obj2 = { data, index: data.item.index, isRow: true };
      const itemLayoutProps = list.getItemLayoutProps(obj2.index);
      const merged = Object.assign(list.props);
      let renderActiveDividerResult = null;
      if (str === data.item.key) {
        renderActiveDividerResult = list.renderActiveDivider(str);
      }
      if (!tmp) {
        tmp = tmp3;
      }
      return <tmp2 activeDivider={renderActiveDividerResult} key={data.item.key} active={tmp} list={list} sortingEnabled={list.props.sortingEnabled} hovering={str === data.item.key} panResponder={panResponder} rowData={obj2} onRowActive={list.handleRowActive} isAfter={hoveringIndex > activeIndex} />;
    };
    obj.getItemLayout = function getItemLayout(arg0, index) {
      return obj.getItemLayoutProps(index);
    };
    obj.getSectionHeight = function getSectionHeight(data) {
      const props = obj.props;
      let num = 20;
      const fontScale = props.fontScale;
      if (props.sortingEnabled) {
        num = 0;
      }
      let bound = Math.max(44 + 16 * fontScale, 60);
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
      const tmp3 = closure_11(obj.props.sections);
      const iter = tmp3[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let sectionHeight;
        let tmp2 = nextResult;
        if ("section" === nextResult.type) {
          sectionHeight = obj.getSectionHeight(tmp2);
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
        obj = { length: tmp, offset: num, index };
        if (null == tmp2) {
          return obj;
        } else {
          let id;
          if (null != tmp2.data.id) {
            id = tmp2.data.id;
          } else {
            id = null;
            if (null != tmp2.data.channel) {
              id = tmp2.data.channel.id;
            }
          }
          if (typeof id === "string") {
            let obj2 = { y: num, height: tmp };
            obj.layoutMap[id] = obj2;
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
        HermesBuiltin.arraySpread(items1, items, 0);
        HermesBuiltin.apply(scrollTo, items1, scrollResponder);
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
    let point = { x: 0, y: 0 };
    const valueXY = new RN.ValueXY(point);
    const panResponder = obj.createPanResponder(arg0, point, valueXY);
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
    const obj4 = obj(1484);
    obj.scrollContainerHeight = 1.2 * obj4.getWindowDimensions().height;
    obj.state = { active: null, activeIndex: -1, hoveringIndex: -1, panResponder, pan: valueXY };
    obj.layoutMap = {};
    return obj;
  }
  componentWillUnmount() {
    const pan = this.state.pan;
    pan.removeListener(this.listener);
  }
  createPanResponder(arg0, point, valueXY) {
    const self = this;
    let closure_1 = arg0;
    let closure_2 = point;
    const items = [null];
    const obj = { dx: valueXY.x, dy: valueXY.y };
    items[1] = obj;
    let closure_0 = RN.event(items, { useNativeDriver: false });
    let obj2 = {
      onStartShouldSetPanResponder() {
        return true;
      },
      onMoveShouldSetPanResponderCapture(arg0, vy) {
        const absolute = Math.abs(vy.vy);
        const tmp2 = absolute > Math.abs(vy.vx) && null != self.state.active;
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
        let active;
        let hoveringIndex;
        ({ active, hoveringIndex } = self.state);
        const onRowMoved = self.props.onRowMoved;
        self.moved = false;
        const onMoveEnd = closure_1.onMoveEnd;
        if (onMoveEnd != null) {
          onMoveEnd();
        }
        if (null == active) {
          if (hoveringIndex >= 0) {
            self.setState({ hoveringIndex: -1 });
          }
          self.moveY = 0;
        } else {
          const index = active.rowData.index;
          let tmp2 = hoveringIndex;
          const frameHeight = active.layout.frameHeight;
          if (-1 === hoveringIndex) {
            tmp2 = index;
          }
          if (tmp2 === index) {
            return self.setState({ active: null, hoveringIndex: -1, activeIndex: -1 });
          } else {
            const obj2 = { row: active.rowData, from: index - 1, to: tmp2 - 1 };
            if (onRowMoved != null) {
              onRowMoved(obj2);
            }
            self.setState({ active: null, hoveringIndex: -1, activeIndex: -1 });
            const _Math = Math;
            const bound = Math.max(0, self.scrollContainerHeight - self.listLayout.height + frameHeight);
            if (self.scrollValue > bound) {
              const obj3 = { y: bound };
              self.scrollTo(obj3);
            }
            self.state.active = null;
            self.state.hoveringIndex = -1;
            self.moveY = 0;
          }
        }
      }
    };
    return hasOwnProperty.create(obj2);
  }
  renderActive() {
    const self = this;
    const active = this.state.active;
    if (null != active) {
      let renderItemResult;
      const rowData = active.rowData;
      const data = rowData.data;
      if (rowData.isRow) {
        renderItemResult = self.renderItem(data, true);
      } else {
        renderItemResult = self.renderSectionHeader(data, true);
      }
      return renderItemResult;
    }
  }
  render() {
    let active;
    let items;
    let panResponder;
    let tmp7;
    const self = this;
    const obj = { style: { flex: 1 }, onLayout: this.handleWrapperLayout, ref: this.setWrapperRef, children: items };
    const obj3 = {
      enableEmptySections: true,
      scrollEnabled: tmp7,
      stickySectionHeadersEnabled: false,
      initialNumToRender: 20,
      keyExtractor(key) {
        return key.key;
      },
      getItemLayout: self.getItemLayout
    };
    ({ active, panResponder } = this.state);
    const scrollEnabled = this.props.scrollEnabled;
    const merged = Object.assign(this.props);
    const merged1 = Object.assign(panResponder.panHandlers);
    ({ setListRef: obj2.ref, handleScroll: obj2.onScroll, handleContentSizeChange: obj2.onContentSizeChange, handleListLayout: obj2.onLayout } = this);
    tmp7 = null == active && false !== scrollEnabled;
    ({ renderItem: obj2.renderItem, renderSectionHeader: obj2.renderSectionHeader } = self);
    items = [metroImportAll(metroRequire, obj3), self.renderActive()];
    return metroImportDefault(_false, obj);
  }
}
const prototype3 = SortableChannels.prototype;
const result = size.fileFinishedImporting("components_native/common/SortableChannels.tsx");

export default SortableChannels;