// discord_app/components_native/common/SortableListView.tsx
import DeprecatedLayoutAnimation from "../../modules/animations/native/DeprecatedLayoutAnimation.tsx";
import noop from "../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({
  View: c3,
  Animated: closure_4,
  Dimensions,
  PanResponder: hasOwnProperty,
  FlatList: metroRequire,
} = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
let height = Dimensions.get("window").height;
let c10 = -5;
let closure_11 = { x: 0, y: 0 };
let closure_12 = noop.memo((current) => {
  ({ hovering, rowData, active, renderActiveDivider, hideContent, renderRow, onPressOut } = current);
  closure_1 = noop.useRef(current);
  noop.useRef(null);
  const ref = noop.useRef(null);
  const effect = noop.useEffect(() => {
    closure_1.current = current;
  });
  const callback = noop.useCallback(() => {
    current = ref.current;
    if (current != null) {
      current.measure((frameX, frameY, frameWidth, frameHeight, pageX, pageY) => {
        current = ref.current;
        let obj = { layout: null, rowData: ref.current.rowData };
        obj = { frameX, frameY, frameWidth, frameHeight, pageX, pageY };
        obj.layout = obj;
        current.onRowActive(obj);
      });
    }
  }, []);
  const callback1 = noop.useCallback((nativeEvent) => {
    const size = {
      x: nativeEvent.nativeEvent.layout.x,
      y: nativeEvent.nativeEvent.layout.y,
      width: nativeEvent.nativeEvent.layout.width,
      height: null,
    };
    height = ref.current;
    if (height == null) {
      height = nativeEvent.nativeEvent.layout.height;
    }
    size.height = height;
    current = ref.current;
    if (current != null) {
      current.measure((arg0, arg1, arg2, current) => {
        let tmp2 = null == ref2.current;
        if (tmp2) {
          tmp2 = current > 0;
        }
        if (tmp2) {
          ref2.current = current;
        }
        current = ref.current;
        const onRowLayout = current.onRowLayout;
        if (onRowLayout != null) {
          onRowLayout(ref.current.index, size);
        }
      });
    }
  }, []);
  ({ item, index } = rowData);
  if (active == null) {
    active = false;
  }
  let obj = { sortHandlers: { onLongPress: callback, onPressOut } };
  obj = { onLayout: callback1, ref, children: null };
  if (hovering) {
    hovering = renderActiveDivider();
  }
  const items = [hovering];
  obj = null;
  if (hideContent) {
    obj = { height: 0.01, opacity: 0 };
  }
  items[1] = React5(React3, { style: obj, children: noop.cloneElement(renderRow(item, index, active), obj) });
  obj.children = items;
  return React6(React3, obj);
});
let closure_13 = noop.memo((listPageY) => {
  ({ rowData, pan, frameHeight } = listPageY);
  listPageY = listPageY.listPageY;
  const wrapperPageY = listPageY.wrapperPageY;
  const items = [frameHeight, listPageY, wrapperPageY];
  ({ sortRowStyle, renderRow } = listPageY);
  const obj = { style: null, children: null };
  const items1 = [
    noop.useMemo(() => {
      const rect = {
        position: "absolute",
        left: 0,
        right: 0,
        opacity: 0.25,
        overflow: "hidden",
        backgroundColor: "transparent",
        height: frameHeight,
        marginTop: listPageY - wrapperPageY,
      };
      return rect;
    }, items),
    sortRowStyle,
    pan.getLayout(),
  ];
  obj.style = items1;
  obj.children = renderRow(rowData.item, rowData.index, true);
  return React5(RN.View, obj);
});
const Component = noop.Component;
class SortableListView extends Component {
  constructor(arg0) {
    closure_1 = undefined;
    tmp2 = new tmp2(global, tmp5, tmp4, tmp3, new.target, tmp2, tmp, new.target);
    closure_1 = tmp2;
    closure_129_0 = tmp2;
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
    obj.pan = valueXY;
    tmp2.state = obj;
    tmp2.renderActive = function renderActive() {
      let obj = closure_0;
      const active = closure_0.state.active;
      if (null == active) {
        return null;
      } else {
        const rowData = active.rowData;
        const index = rowData.index;
        obj = {
          pan: tmp3,
          rowData: null,
          shouldDisplayHovering: null,
          wrapperLayout: null,
          frameHeight: null,
          listPageY: null,
          wrapperPageY: null,
          renderRow: null,
        };
        obj.rowData = obj.getMemoedRowData(index, rowData.item);
        obj.shouldDisplayHovering = tmp2 === index;
        obj.wrapperLayout = obj.wrapperLayout;
        let num;
        if (active != null) {
          num = active.layout.frameHeight;
        }
        if (num == null) {
          num = 0;
        }
        obj.frameHeight = num;
        let num2;
        if (active != null) {
          num2 = active.layout.pageY;
        }
        if (num2 == null) {
          num2 = 0;
        }
        obj.listPageY = num2;
        const wrapperLayout = obj.wrapperLayout;
        let num3;
        if (wrapperLayout != null) {
          num3 = wrapperLayout.pageY;
        }
        if (num3 == null) {
          num3 = 0;
        }
        obj.wrapperPageY = num3;
        obj.renderRow = tmp;
        return React5(closure_13, obj);
      }
    };
    tmp2.renderActiveDivider = function renderActiveDivider() {
      const renderActiveDivider = closure_0.props.renderActiveDivider;
      const active = closure_0.state.active;
      if (null != active) {
        const frameHeight = active.layout.frameHeight;
      }
      if (null != renderActiveDivider) {
        let renderActiveDividerResult = renderActiveDivider(frameHeight);
      } else {
        let obj = { style: null };
        obj = { height: frameHeight };
        obj.style = obj;
        renderActiveDividerResult = React5(React3, obj);
      }
      return renderActiveDividerResult;
    };
    tmp2.handleRowLayout = function handleRowLayout(arg0, arg1) {
      closure_0._updateLayoutMap(arg0, arg1);
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
      obj.hideContent = index1 === index;
      obj.hovering = hoverIndex === index;
      ({ cancel: obj2.onPressOut, handleRowActive: obj2.onRowActive, handleRowLayout: obj2.onRowLayout } = obj);
      obj.pan = pan;
      obj.renderActiveDivider = obj.renderActiveDivider;
      obj.renderRow = renderRow;
      obj.rowData = obj.getMemoedRowData(index, item.item);
      return React5(closure_12, obj);
    };
    tmp2.handleScroll = function handleScroll(nativeEvent) {
      closure_0.scrollValue = nativeEvent.nativeEvent.contentOffset.y;
      const props = closure_0.props;
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
      let obj = closure_0;
      const diff = closure_0.scrollValue + (closure_0.moveY - closure_0.wrapperLayout.pageY) - closure_0.firstRowY;
      let num = 0;
      let num2 = 0;
      let flag = false;
      let num3 = 0;
      if (0 <= diff) {
        flag = true;
        num3 = num;
        obj = closure_0;
        while (null != closure_0.layoutMap[num]) {
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
        const result = DeprecatedLayoutAnimation.DeprecatedLayoutAnimation();
        obj = { hovering: true, hoverIndex: sum };
        obj.setState(obj);
      }
    };
    tmp2.cancel = function cancel() {
      let obj = closure_0;
      if (!closure_0.moved) {
        obj = { active: null, hovering: false, hoverIndex };
        obj.setState(obj);
      }
    };
    tmp2.scrollTo = function scrollTo() {
      const scrollResponder = closure_0.scrollResponder;
      const items = [...HermesBuiltin.copyRestArgs()];
      scrollResponder.scrollTo.apply(items);
    };
    tmp2.scrollAnimation = function scrollAnimation() {
      if (closure_0._isMounted) {
        if (null != closure_0.state.active) {
          if (null == closure_0.moveY) {
            const _requestAnimationFrame2 = requestAnimationFrame;
            return requestAnimationFrame(closure_0.scrollAnimation);
          } else {
            const diff = closure_0.moveY - closure_0.wrapperLayout.pageY;
            const sum =
              closure_0.scrollContainerHeight -
              closure_0.listLayout.height +
              2 * closure_0.state.active.layout.frameHeight;
            const scrollValue = closure_0.scrollValue;
            let tmp2 = diff < 80;
            const diff1 = closure_0.listLayout.height - 80;
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
                sum1 = scrollValue + 20 * (1 - (closure_0.listLayout.height - diff) / 80);
                if (sum1 > sum) {
                  sum1 = sum;
                }
              }
            }
            if (null !== sum1) {
              closure_0.scrollValue = sum1;
              const scrollResponder = closure_0.scrollResponder;
              const point = { y: closure_0.scrollValue, x: 0, animated: false };
              scrollResponder.scrollTo(point);
            }
            closure_0.checkTargetElement();
            const _requestAnimationFrame = requestAnimationFrame;
            const animationFrame = requestAnimationFrame(closure_0.scrollAnimation);
          }
        }
      }
    };
    tmp2._updateLayoutMap = function _updateLayoutMap(arg0, arg1) {
      let tmp2 = null == closure_0.firstRowY;
      if (!tmp2) {
        tmp2 = 0 === closure_0.firstRowY;
      }
      if (!tmp2) {
        tmp2 = arg1.y < closure_0.firstRowY;
      }
      if (tmp2) {
        closure_0.firstRowY = arg1.y;
      }
      closure_0.layoutMap[arg0] = arg1;
    };
    tmp2.getScrollResponder = function getScrollResponder() {
      return closure_0.scrollResponder;
    };
    tmp2.handleRowActive = function handleRowActive(active) {
      if (!active.props.disableSorting) {
        const current = active._wrapperRef.current;
        if (current != null) {
          current.measure((frameX, frameY, frameWidth, frameHeight, pageX, pageY) => {
            let obj = { frameX, frameY, frameWidth, frameHeight, pageX, pageY };
            active.wrapperLayout = obj;
            const pan = active.state.pan;
            pan.setValue({ x: 0, y: 0 });
            const result = DeprecatedLayoutAnimation.DeprecatedLayoutAnimation();
            active.moveY = active.layout.pageY;
            obj = { active, hovering: true, hoverIndex: active.rowData.index };
            active.setState(obj, active.scrollAnimation);
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
        let tmp2 = absolute > Math.abs(vy.vx);
        if (tmp2) {
          tmp2 = null != state.state.active;
        }
        return tmp2;
      },
      onPanResponderMove(arg0, moveY) {
        moveY.dx = 0;
        closure_1.moveY = moveY.moveY;
        closure_0(arg0, moveY);
      },
      onPanResponderGrant() {
        state.moved = true;
        const pan = state.state.pan;
        pan.setOffset(closure_11);
        const pan2 = state.state.pan;
        pan2.setValue(closure_11);
        const props = state.props;
        const onMoveStart = props.onMoveStart;
        if (onMoveStart != null) {
          onMoveStart();
        }
      },
      onPanResponderTerminate() {
        state.setState({ active: null, hovering: false, hoverIndex });
      },
      onPanResponderRelease() {
        let obj = state;
        state.moved = false;
        const props = state.props;
        const onMoveEnd = props.onMoveEnd;
        if (onMoveEnd != null) {
          onMoveEnd();
        }
        if (null == obj.state.active) {
          if (obj.state.hovering) {
            obj = { hovering: false, hoverIndex };
            obj.setState(obj);
          }
          obj.moveY = null;
        } else {
          const index = obj.state.active.rowData.index;
          if (false === obj.state.hovering) {
            obj = { active: null, hoverIndex };
            return obj.setState(obj);
          } else {
            hoverIndex = obj.state.hoverIndex;
            let diff = hoverIndex;
            if (hoverIndex > index) {
              diff = hoverIndex - 1;
            }
            let obj1 = DeprecatedLayoutAnimation;
            const result = obj1.DeprecatedLayoutAnimation({ duration: 0 });
            const props2 = obj.props;
            const onRowMoved = props2.onRowMoved;
            if (onRowMoved != null) {
              obj1 = { row: obj.state.active.rowData, from: index, to: diff };
              onRowMoved(obj1);
            }
            const obj2 = { active: null, hovering: false, hoverIndex };
            obj.setState(obj2);
            const _Math = Math;
            const bound = Math.max(0, obj.scrollContainerHeight - obj.listLayout.height + tmp15);
            if (obj.scrollValue > bound) {
              const scrollResponder = obj.scrollResponder;
              const obj3 = { y: bound };
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
    const current2 = self._wrapperRef.current;
    if (current2 != null) {
      current2.measure((frameX, frameY, frameWidth, frameHeight, pageX, pageY) => {
        self.wrapperLayout = { frameX, frameY, frameWidth, frameHeight, pageX, pageY };
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
    const obj = { index, item };
    tmp = obj;
  }
  this.memoedRowData[index] = tmp;
  return tmp;
};
prototype["render"] = function render() {
  const self = this;
  const props = this.props;
  let obj = { ref: this._wrapperRef, style: null, children: null };
  const items = [props.wrapperStyles, { flex: 1 }];
  obj.style = items;
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
  const items1 = [React5(timestampProducer, obj), self.renderActive()];
  obj.children = items1;
  return React6(React3, obj);
};
SortableListView.defaultProps = { disableSorting: false };
let size = fn(2);
let result = size.fileFinishedImporting("components_native/common/SortableListView.tsx");

export default SortableListView;
