// discord_app/components_native/common/SortableListView.tsx
import importAllResult from "../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../_runtime/react/00021_jsxProd.js";

const require = arg1;
({ View: c3, Animated: c4, Dimensions, PanResponder: c5, FlatList: closure_6 } = get_ActivityIndicator);
({ jsx: error, jsxs: closure_8 } = jsxProd);
let height = Dimensions.get("window").height;
let c10 = -5;
let closure_11 = { x: 0, y: 0 };
let closure_12 = importAllResult.memo((stateFromStores) => {
  closure_0 = stateFromStores;
  ({ hovering, rowData, active, renderActiveDivider, hideContent, renderRow, onPressOut } = stateFromStores);
  closure_1 = ref.useRef(stateFromStores);
  ref = ref.useRef(null);
  closure_3 = ref.useRef(null);
  const effect = ref.useEffect(() => {
    closure_1.current = closure_0;
  });
  const callback = ref.useCallback(() => {
    let current = ref.current;
    if (current != null) {
      current.measure((frameX, frameY, frameWidth, frameHeight, pageX, pageY) => {
        const current = ref.current;
        obj = { layout: obj, rowData: ref.current.rowData };
        obj = { frameX, frameY, frameWidth, frameHeight, pageX, pageY };
        current.onRowActive(obj);
      });
    }
  }, []);
  const callback1 = ref.useCallback((nativeEvent) => {
    const obj = {
      x: nativeEvent.nativeEvent.layout.x,
      y: nativeEvent.nativeEvent.layout.y,
      width: nativeEvent.nativeEvent.layout.width,
      height: null,
    };
    height = ref.current;
    if (height == null) {
      height = nativeEvent.nativeEvent.layout.height;
    }
    obj[3] = height;
    let current = ref.current;
    if (current != null) {
      current.measure((arg0, arg1, arg2, current) => {
        let tmp2 = null == closure_1_3.current;
        if (tmp2) {
          tmp2 = current > 0;
        }
        if (tmp2) {
          closure_1_3.current = current;
        }
        current = closure_1_1.current;
        const onRowLayout = current.onRowLayout;
        if (onRowLayout != null) {
          onRowLayout(closure_1_1.current.index, obj);
        }
      });
    }
  }, []);
  ({ item, index } = rowData);
  if (active == null) {
    active = false;
  }
  let obj = { onLayout: callback1, ref, children: null };
  if (hovering) {
    hovering = renderActiveDivider();
  }
  const items = [hovering];
  obj = null;
  if (hideContent) {
    obj = { height: 0.01, opacity: 0 };
  }
  items[1] = closure_7(closure_3, {
    style: obj,
    children: ref.cloneElement(renderRow(item, index, active), { sortHandlers: { onLongPress: callback, onPressOut } }),
  });
  obj[2] = items;
  return closure_8(closure_3, obj);
});
let closure_13 = importAllResult.memo((listPageY) => {
  ({ rowData, pan, frameHeight } = listPageY);
  listPageY = listPageY.listPageY;
  const wrapperPageY = listPageY.wrapperPageY;
  const items = [frameHeight, listPageY, wrapperPageY];
  ({ sortRowStyle, renderRow } = listPageY);
  const obj = { style: null, children: null };
  const items1 = [
    wrapperPageY.useMemo(
      () => ({
        position: "absolute",
        left: 0,
        right: 0,
        opacity: 0.25,
        overflow: "hidden",
        backgroundColor: "transparent",
        height: frameHeight,
        marginTop: listPageY - wrapperPageY,
      }),
      items,
    ),
    sortRowStyle,
    pan.getLayout(),
  ];
  obj[0] = items1;
  obj[1] = renderRow(rowData.item, rowData.index, true);
  return callback(RN.View, obj);
});
const Component = importAllResult.Component;
class SortableListView extends Component {
  constructor(arg0) {
    closure_1 = undefined;
    tmp2 = new tmp2(global, tmp5, tmp4, tmp3, new.target, tmp2, tmp, new.target);
    // ThrowIfThisInitialized (0x7c)
    closure_1 = tmp2;
    closure_0 = tmp2;
    tmp2.memoedRowData = {};
    tmp2.firstRowY = undefined;
    tmp2.layoutMap = {};
    tmp2.scrollValue = 0;
    tmp2._delayedInitTimeout = null;
    tmp2._isMounted = false;
    tmp2.moved = false;
    tmp2._wrapperRef = closure_2.createRef();
    tmp2._listRef = closure_2.createRef();
    tmp2.scrollContainerHeight = height;
    obj = { active: null, hovering: false, hoverIndex: c10, pan: null };
    valueXY = new Animated.ValueXY(closure_11);
    obj[3] = valueXY;
    tmp2.state = obj;
    tmp2.renderActive = function renderActive() {
      let obj = lib;
      const active = lib.state.active;
      if (null == active) {
        return null;
      } else {
        const rowData = active.rowData;
        const index = rowData.index;
        obj = {
          pan: null,
          rowData: null,
          shouldDisplayHovering: null,
          wrapperLayout: null,
          frameHeight: null,
          listPageY: null,
          wrapperPageY: null,
          renderRow: null,
        };
        obj[0] = tmp3;
        obj[1] = obj.getMemoedRowData(index, rowData.item);
        obj[2] = tmp2 === index;
        obj[3] = obj.wrapperLayout;
        let num;
        if (active != null) {
          num = active.layout.frameHeight;
        }
        if (num == null) {
          num = 0;
        }
        obj[4] = num;
        let num2;
        if (active != null) {
          num2 = active.layout.pageY;
        }
        if (num2 == null) {
          num2 = 0;
        }
        obj[5] = num2;
        const wrapperLayout = obj.wrapperLayout;
        let num3;
        if (wrapperLayout != null) {
          num3 = wrapperLayout.pageY;
        }
        if (num3 == null) {
          num3 = 0;
        }
        obj[6] = num3;
        obj[7] = tmp;
        return closure_1_7(closure_1_13, obj);
      }
    };
    tmp2.renderActiveDivider = function renderActiveDivider() {
      const renderActiveDivider = lib.props.renderActiveDivider;
      const active = lib.state.active;
      if (null != active) {
        const frameHeight = active.layout.frameHeight;
      }
      if (null != renderActiveDivider) {
        let renderActiveDividerResult = renderActiveDivider(frameHeight);
      } else {
        let obj = { style: null };
        obj = { height: null };
        obj[0] = frameHeight;
        obj[0] = obj;
        renderActiveDividerResult = closure_1_7(closure_1_3, obj);
      }
      return renderActiveDividerResult;
    };
    tmp2.handleRowLayout = function handleRowLayout(arg0, arg1) {
      lib._updateLayoutMap(arg0, arg1);
    };
    tmp2.renderItem = function renderItem(item) {
      ({ index, active } = item);
      let obj = closure_0;
      ({ props, state } = closure_0);
      let tmp = null == active;
      ({ disableSorting, renderRow } = props);
      ({ hoverIndex, pan } = state);
      if (tmp) {
        const active2 = obj.state.active;
        index = undefined;
        if (active2 != null) {
          const rowData = active2.rowData;
          if (rowData != null) {
            index = rowData.index;
          }
        }
        tmp = index === index;
      }
      if (tmp3) {
        active = { active: true };
      }
      obj = {
        index,
        disabled: disableSorting,
        active,
        hideContent: null,
        hovering: null,
        onPressOut: null,
        onRowActive: null,
        onRowLayout: null,
        pan: null,
        renderActiveDivider: null,
        renderRow: null,
        rowData: null,
      };
      const active3 = obj.state.active;
      let index1;
      if (active3 != null) {
        index1 = active3.rowData.index;
      }
      obj[3] = index1 === index;
      obj[4] = hoverIndex === index;
      ({ cancel: obj2[5], handleRowActive: obj2[6], handleRowLayout: obj2[7] } = obj);
      obj[8] = pan;
      obj[9] = obj.renderActiveDivider;
      obj[10] = renderRow;
      obj[11] = obj.getMemoedRowData(index, item.item);
      return closure_1_7(closure_1_12, obj);
    };
    tmp2.handleScroll = function handleScroll(nativeEvent) {
      lib.scrollValue = nativeEvent.nativeEvent.contentOffset.y;
      const props = lib.props;
      const onScroll = props.onScroll;
      if (onScroll != null) {
        onScroll(nativeEvent);
      }
    };
    tmp2.handleLayout = function handleLayout(nativeEvent) {
      const merged = Object.assign(nativeEvent.nativeEvent.layout);
      closure_0.listLayout = {};
    };
    tmp2.handleContentSizeChange = function handleContentSizeChange(arg0, scrollContainerHeight) {
      closure_0.scrollContainerHeight = scrollContainerHeight;
    };
    tmp2.checkTargetElement = function checkTargetElement() {
      let obj = lib;
      const diff = lib.scrollValue + (lib.moveY - lib.wrapperLayout.pageY) - lib.firstRowY;
      let num = 0;
      let num2 = 0;
      let flag = false;
      let num3 = 0;
      if (0 <= diff) {
        flag = true;
        num3 = num;
        obj = lib;
        while (null != lib.layoutMap[num]) {
          num2 = num2 + tmp3.height;
          num = num + 1;
          flag = false;
          num3 = num;
          obj = tmp2;
          if (num2 > diff) {
            break;
          }
        }
      }
      let diff1 = num3;
      if (!flag) {
        diff1 = num3 - 1;
      }
      let num4 = obj.props.minDraggableIndex;
      if (num4 == null) {
        num4 = 0;
      }
      const bound = Math.max(num4, diff1);
      const active = obj.state.active;
      let num5;
      if (active != null) {
        num5 = active.rowData.index;
      }
      if (num5 == null) {
        num5 = 0;
      }
      let sum = bound;
      if (num5 < bound) {
        sum = bound + 1;
      }
      if (sum !== obj.state.hoverIndex) {
        const result = lib(5605).DeprecatedLayoutAnimation();
        obj = { hovering: true, hoverIndex: null };
        obj[1] = sum;
        obj.setState(obj);
        const obj2 = lib(5605);
      }
    };
    tmp2.cancel = function cancel() {
      let obj = lib;
      if (!lib.moved) {
        obj = { active: null, hovering: false, hoverIndex: null };
        obj[2] = closure_1_10;
        obj.setState(obj);
      }
    };
    tmp2.scrollTo = function scrollTo() {
      const scrollResponder = lib.scrollResponder;
      const items = [...HermesBuiltin.copyRestArgs()];
      scrollResponder.scrollTo.apply(items);
    };
    tmp2.scrollAnimation = function scrollAnimation() {
      let obj = lib;
      if (lib._isMounted) {
        if (null != obj.state.active) {
          if (null == obj.moveY) {
            const _requestAnimationFrame2 = requestAnimationFrame;
            return requestAnimationFrame(obj.scrollAnimation);
          } else {
            const diff = obj.moveY - obj.wrapperLayout.pageY;
            const sum = obj.scrollContainerHeight - obj.listLayout.height + 2 * obj.state.active.layout.frameHeight;
            const scrollValue = obj.scrollValue;
            let tmp2 = diff < 80;
            const diff1 = obj.listLayout.height - 80;
            if (tmp2) {
              tmp2 = scrollValue > 0;
            }
            let num2 = null;
            if (tmp2) {
              const diff2 = scrollValue - 20 * (1 - diff / 80);
              tmp2 = diff2 < 0;
              num2 = diff2;
            }
            if (tmp2) {
              num2 = 0;
            }
            let sum1 = num2;
            if (diff > diff1) {
              sum1 = num2;
              if (scrollValue < sum) {
                sum1 = scrollValue + 20 * (1 - (obj.listLayout.height - diff) / 80);
                if (sum1 > sum) {
                  sum1 = sum;
                }
              }
            }
            if (null !== sum1) {
              obj.scrollValue = sum1;
              const scrollResponder = obj.scrollResponder;
              obj = { y: null, x: 0, animated: false };
              obj[0] = obj.scrollValue;
              scrollResponder.scrollTo(obj);
            }
            obj.checkTargetElement();
            const _requestAnimationFrame = requestAnimationFrame;
            const animationFrame = requestAnimationFrame(obj.scrollAnimation);
          }
        }
      }
    };
    tmp2._updateLayoutMap = function _updateLayoutMap(arg0, arg1) {
      let tmp2 = null == lib.firstRowY;
      if (!tmp2) {
        tmp2 = 0 === tmp.firstRowY;
      }
      if (!tmp2) {
        tmp2 = arg1.y < tmp.firstRowY;
      }
      if (tmp2) {
        tmp.firstRowY = arg1.y;
      }
      lib.layoutMap[arg0] = arg1;
    };
    tmp2.getScrollResponder = function getScrollResponder() {
      return lib.scrollResponder;
    };
    tmp2.handleRowActive = function handleRowActive(arg0) {
      const lib = arg0;
      if (!lib.props.disableSorting) {
        const current = lib._wrapperRef.current;
        if (current != null) {
          current.measure((frameX, frameY, frameWidth, frameHeight, pageX, pageY) => {
            let obj = { frameX, frameY, frameWidth, frameHeight, pageX, pageY };
            state.wrapperLayout = obj;
            const pan = state.state.pan;
            pan.setValue({ x: 0, y: 0 });
            const result = state(table[3]).DeprecatedLayoutAnimation();
            state.moveY = state.layout.pageY;
            obj = { active: state, hovering: true, hoverIndex: state.rowData.index };
            state.setState(obj, state.scrollAnimation);
          });
        }
      }
    };
    obj = { dx: tmp2.state.pan.x, dy: tmp2.state.pan.y };
    items = [null];
    items[1] = obj;
    closure_0 = Animated.event(items, { useNativeDriver: false });
    obj1 = {
      onStartShouldSetPanResponder() {
        return true;
      },
      onMoveShouldSetPanResponderCapture(arg0, vy) {
        const absolute = Math.abs(vy.vy);
        const absolute1 = Math.abs(vy.vx);
        if (absolute <= absolute1) {
          return tmp3;
        } else {
          const active = absolute1.state.active;
          throw active;
        }
      },
      onPanResponderMove(arg0, arg1) {
        tmp2.moveY = tmp.moveY;
        lib(arg0, tmp);
      },
      onPanResponderGrant() {
        tmp2.moved = true;
        const pan = tmp.state.pan;
        pan.setOffset(closure_1_11);
        const pan2 = tmp.state.pan;
        pan2.setValue(closure_1_11);
        const props = tmp.props;
        const onMoveStart = props.onMoveStart;
        if (onMoveStart != null) {
          onMoveStart();
        }
      },
      onPanResponderTerminate() {
        const obj = { active: null, hovering: false, hoverIndex: closure_1_10 };
        obj.setState(obj);
      },
      onPanResponderRelease() {
        tmp.moved = false;
        const props = obj.props;
        const onMoveEnd = props.onMoveEnd;
        if (onMoveEnd != null) {
          onMoveEnd();
        }
        if (null == obj.state.active) {
          if (obj.state.hovering) {
            obj = { hovering: false, hoverIndex: null };
            obj[1] = closure_1_10;
            obj.setState(obj);
          }
          obj.moveY = null;
        } else {
          const index = obj.state.active.rowData.index;
          if (false === obj.state.hovering) {
            obj = { active: null, hoverIndex: null };
            obj[1] = closure_1_10;
            return obj.setState(obj);
          } else {
            const hoverIndex = obj.state.hoverIndex;
            let diff = hoverIndex;
            if (hoverIndex > index) {
              diff = hoverIndex - 1;
            }
            obj1 = lib(5605);
            const result = obj1.DeprecatedLayoutAnimation({ duration: 0 });
            const props2 = obj.props;
            const onRowMoved = props2.onRowMoved;
            if (onRowMoved != null) {
              obj1 = { row: null, from: null, to: null };
              obj1[0] = obj.state.active.rowData;
              obj1[1] = index;
              obj1[2] = diff;
              onRowMoved(obj1);
            }
            const obj2 = { active: null, hovering: false, hoverIndex: null };
            obj2[2] = closure_1_10;
            obj.setState(obj2);
            const _Math = Math;
            const bound = Math.max(0, obj.scrollContainerHeight - obj.listLayout.height + tmp16);
            if (obj.scrollValue > bound) {
              const scrollResponder = obj.scrollResponder;
              const obj3 = { y: null };
              obj3[0] = bound;
              scrollResponder.scrollTo(obj3);
            }
          }
        }
      },
    };
    tmp2._panResponder = PanResponder.create(obj1);
    return tmp2;
  }
}
const prototype = SortableListView.prototype;
prototype["componentDidMount"] = function componentDidMount() {
  const self = this;
  this._isMounted = true;
  this._delayedInitTimeout = setTimeout(() => {
    const current = self._listRef.current;
    let scrollResponder;
    if (current != null) {
      scrollResponder = current.getScrollResponder();
    }
    self.scrollResponder = scrollResponder;
    const current2 = tmp._wrapperRef.current;
    if (current2 != null) {
      current2.measure((frameX, frameY, frameWidth, frameHeight, pageX, pageY) => {
        closure_0.wrapperLayout = { frameX, frameY, frameWidth, frameHeight, pageX, pageY };
      });
    }
  }, 1);
};
prototype["componentWillUnmount"] = function componentWillUnmount() {
  clearTimeout(this._delayedInitTimeout);
};
prototype["getMemoedRowData"] = function getMemoedRowData(index, item) {
  let tmp = this.memoedRowData[index];
  let tmp2 = null != tmp;
  if (tmp2) {
    tmp2 = index === tmp.index;
  }
  if (tmp2) {
    tmp2 = item === tmp.item;
  }
  if (!tmp2) {
    const obj = { index: null, item: null };
    obj[0] = index;
    obj[1] = item;
    tmp = obj;
  }
  this.memoedRowData[index] = tmp;
  return tmp;
};
prototype["render"] = function render() {
  const self = this;
  const props = this.props;
  let obj = { ref: this._wrapperRef, style: items, children: null };
  items = [props.wrapperStyles, { flex: 1 }];
  obj = {};
  ({ contentContainerStyle, header, footer, data, scrollEnabled, keyboardShouldPersistTaps, scrollEventThrottle } =
    props);
  const merged = Object.assign(this._panResponder.panHandlers);
  obj.ref = this._listRef;
  obj.keyboardShouldPersistTaps = keyboardShouldPersistTaps;
  obj.scrollEventThrottle = scrollEventThrottle;
  obj.contentContainerStyle = contentContainerStyle;
  obj.ListHeaderComponent = header;
  obj.ListFooterComponent = footer;
  obj.data = data;
  ({
    handleScroll: obj2.onScroll,
    handleContentSizeChange: obj2.onContentSizeChange,
    handleLayout: obj2.onLayout,
  } = this);
  let tmp6 = null == this.state.active;
  if (tmp6) {
    tmp6 = false !== scrollEnabled;
  }
  obj.scrollEnabled = tmp6;
  obj.renderItem = self.renderItem;
  const active = self.state.active;
  let index;
  if (active != null) {
    index = active.rowData.index;
  }
  obj.extraData = "" + props.disableSorting + ":" + index + ":" + self.state.hoverIndex;
  const items1 = [closure_7(closure_6, obj), self.renderActive()];
  obj[2] = items1;
  return closure_8(closure_3, obj);
};
SortableListView.defaultProps = { disableSorting: false };
let result = require("set").fileFinishedImporting("components_native/common/SortableListView.tsx");

export default SortableListView;
