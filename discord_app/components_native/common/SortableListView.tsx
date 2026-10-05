// discord_app/components_native/common/SortableListView.tsx
import react2 from "../../../_runtime/00576_react.js";
import DeprecatedLayoutAnimation from "../../modules/animations/native/DeprecatedLayoutAnimation.tsx";
import react from "../../../_runtime/00019_react.js";
import react_native from "../../../_runtime/00017_react-native.js";
import Fragment from "../../../_runtime/react/00021_Fragment.js";
import ReactCompilerGating from "../../modules/react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../_runtime/metro/00002__.js";

let hoverIndex, listPageY;

let Dimensions;
let c3;
let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
({ View: c3, Animated: closure_4, Dimensions, PanResponder: hasOwnProperty, FlatList: metroRequire } = react_native);
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let height = Dimensions.get("window").height;
const authStore = -5;
let closure_11 = { x: 0, y: 0 };
let closure_12 = react.memo((arg0) => {
  let active;
  let hideContent;
  let hovering;
  let index;
  let item;
  let items;
  let onPressOut;
  let renderActiveDivider;
  let renderRow;
  let rowData;
  let closure_0 = arg0;
  ({ hovering, rowData, active, renderActiveDivider, hideContent, renderRow, onPressOut } = arg0);
  let closure_1 = react.useRef(arg0);
  const ref = react.useRef(null);
  let c3 = react.useRef(null);
  const effect = react.useEffect(() => {
    closure_1.current = current;
  });
  const callback = react.useCallback(() => {
    current = ref.current;
    if (current != null) {
      current.measure((frameX, frameY, frameWidth, frameHeight, pageX, pageY) => {
        let obj2;
        current = ref.current;
        const obj = { layout: obj2, rowData: ref.current.rowData };
        obj2 = { frameX, frameY, frameWidth, frameHeight, pageX, pageY };
        current.onRowActive(obj);
      });
    }
  }, []);
  const callback1 = react.useCallback((nativeEvent) => {
    let ref2;
    size = {
      x: nativeEvent.nativeEvent.layout.x,
      y: nativeEvent.nativeEvent.layout.y,
      width: nativeEvent.nativeEvent.layout.width,
      height,
    };
    height = ref.current;
    if (height == null) {
      height = nativeEvent.nativeEvent.layout.height;
    }
    current = ref.current;
    if (current != null) {
      current.measure((arg0, arg1, arg2, current) => {
        const tmp2 = null == ref2.current && current > 0;
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
  const cloneElement = react.cloneElement;
  ({ item, index } = rowData);
  if (active == null) {
    active = false;
  }
  let obj = { sortHandlers: { onLongPress: callback, onPressOut } };
  let obj2 = { onLayout: callback1, ref, children: items };
  const cloneElementResult = cloneElement(renderRow(item, index, active), obj);
  if (hovering) {
    hovering = renderActiveDivider();
  }
  items = [hovering];
  let obj3 = null;
  if (hideContent) {
    obj3 = { height: 0.01, opacity: 0 };
  }
  items[1] = metroImportDefault(_false, { style: obj3, children: cloneElementResult });
  return metroImportAll(_false, obj2);
});
const memo = react.memo;
let closure_13 = memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (listPageY) => {
        let frameHeight;
        let pan;
        let renderRow;
        let rowData;
        let sortRowStyle;
        const obj = react2;
        const cResult = obj.c(16);
        ({ sortRowStyle, rowData, renderRow, pan, frameHeight } = listPageY);
        const diff = listPageY.listPageY - listPageY.wrapperPageY;
        if (cResult[0] === frameHeight) {
          let tmp3;
          let tmp4;
          if (cResult[1] === diff) {
            tmp3 = cResult[2];
          }
          if (cResult[3] !== pan) {
            const layout = pan.getLayout();
            cResult[3] = pan;
            cResult[4] = layout;
            tmp4 = layout;
          } else {
            tmp4 = cResult[4];
          }
          if (cResult[5] === sortRowStyle) {
            if (cResult[6] === tmp3) {
              let tmp6;
              if (cResult[7] === tmp4) {
                tmp6 = cResult[8];
              }
              if (cResult[9] === renderRow) {
                if (cResult[10] === rowData.index) {
                  let tmp7;
                  if (cResult[11] === rowData.item) {
                    tmp7 = cResult[12];
                  }
                  if (cResult[13] === tmp6) {
                    let tmp9;
                    if (cResult[14] === tmp7) {
                      tmp9 = cResult[15];
                    }
                    return tmp9;
                  }
                  const obj2 = { style: tmp6, children: tmp7 };
                  const tmp12 = metroImportDefault(RN.View, obj2);
                  cResult[13] = tmp6;
                  cResult[14] = tmp7;
                  cResult[15] = tmp12;
                  tmp9 = tmp12;
                }
              }
              const renderRowResult = renderRow(rowData.item, rowData.index, true);
              cResult[9] = renderRow;
              cResult[10] = rowData.index;
              cResult[11] = rowData.item;
              cResult[12] = renderRowResult;
              tmp7 = renderRowResult;
            }
          }
          const items = [tmp3, sortRowStyle, tmp4];
          cResult[5] = sortRowStyle;
          cResult[6] = tmp3;
          cResult[7] = tmp4;
          cResult[8] = items;
          tmp6 = items;
        }
        const rect = {
          position: "absolute",
          left: 0,
          right: 0,
          opacity: 0.25,
          overflow: "hidden",
          backgroundColor: "transparent",
          height: frameHeight,
          marginTop: diff,
        };
        cResult[0] = frameHeight;
        cResult[1] = diff;
        cResult[2] = rect;
        tmp3 = rect;
      }
    : (listPageY) => {
        let frameHeight;
        let items1;
        let pan;
        let renderRow;
        let rowData;
        let sortRowStyle;
        ({ rowData, pan, frameHeight } = listPageY);
        listPageY = listPageY.listPageY;
        const wrapperPageY = listPageY.wrapperPageY;
        const items = [frameHeight, listPageY, wrapperPageY];
        ({ sortRowStyle, renderRow } = listPageY);
        const obj = { style: items1, children: renderRow(rowData.item, rowData.index, true) };
        items1 = [
          react.useMemo(() => {
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
        ];
        const View = RN.View;
        items1[2] = pan.getLayout();
        return metroImportDefault(View, obj);
      },
);
const Component = react.Component;
class SortableListView extends Component {
  constructor(arg0) {
    let tmp;
    let tmp2;
    let tmp3;
    let valueXY;
    const tmp22 = new tmp2(arg0, tmp5, tmp4, tmp3, new.target, tmp2, tmp, this);
    const state = tmp22;
    tmp22.memoedRowData = {};
    tmp22.firstRowY = undefined;
    tmp22.layoutMap = {};
    tmp22.scrollValue = 0;
    tmp22._delayedInitTimeout = null;
    tmp22._isMounted = false;
    tmp22.moved = false;
    tmp22._wrapperRef = react.createRef();
    tmp22._listRef = react.createRef();
    tmp22.scrollContainerHeight = height;
    let obj = { active: null, hovering: false, hoverIndex, pan: valueXY };
    valueXY = new RN.ValueXY(closure_11);
    tmp22.state = obj;
    tmp22.renderActive = function renderActive() {
      let num;
      let num2;
      let num3;
      const active = closure_0.state.active;
      if (null == active) {
        return null;
      } else {
        const rowData = active.rowData;
        const index = rowData.index;
        const obj2 = {
          pan: tmp3,
          rowData: closure_0.getMemoedRowData(index, rowData.item),
          shouldDisplayHovering: tmp2 === index,
          wrapperLayout: closure_0.wrapperLayout,
          frameHeight: num,
          listPageY: num2,
          wrapperPageY: num3,
          renderRow: tmp,
        };
        num = undefined;
        if (active != null) {
          num = active.layout.frameHeight;
        }
        if (num == null) {
          num = 0;
        }
        num2 = undefined;
        if (active != null) {
          num2 = active.layout.pageY;
        }
        if (num2 == null) {
          num2 = 0;
        }
        const wrapperLayout = closure_0.wrapperLayout;
        num3 = undefined;
        if (wrapperLayout != null) {
          num3 = wrapperLayout.pageY;
        }
        if (num3 == null) {
          num3 = 0;
        }
        return closure_2_7(closure_2_13, obj2);
      }
    };
    tmp22.renderActiveDivider = function renderActiveDivider() {
      let frameHeight;
      let obj2;
      let renderActiveDividerResult;
      const renderActiveDivider = closure_0.props.renderActiveDivider;
      const active = closure_0.state.active;
      if (null != active) {
        frameHeight = active.layout.frameHeight;
      }
      if (null != renderActiveDivider) {
        renderActiveDividerResult = renderActiveDivider(frameHeight);
      } else {
        const obj = { style: obj2 };
        obj2 = { height: frameHeight };
        renderActiveDividerResult = closure_2_7(closure_2_3, obj);
      }
      return renderActiveDividerResult;
    };
    tmp22.handleRowLayout = function handleRowLayout(arg0, arg1) {
      closure_0._updateLayoutMap(arg0, arg1);
    };
    tmp22.renderItem = function renderItem(item) {
      let active;
      let disableSorting;
      let index;
      let index2;
      let pan;
      let props;
      let renderRow;
      ({ index, active } = item);
      ({ props, state } = closure_0);
      let tmp = null == active;
      item = item.item;
      ({ disableSorting, renderRow } = props);
      ({ hoverIndex, pan } = state);
      if (tmp) {
        const active2 = closure_0.state.active;
        let index1;
        if (active2 != null) {
          const rowData = active2.rowData;
          if (rowData != null) {
            index1 = rowData.index;
          }
        }
        tmp = index1 === index;
      }
      const tmp3 = null == active && tmp;
      if (tmp3) {
        active = { active: true };
      }
      const active3 = closure_0.state.active;
      const obj3 = {
        index,
        disabled: disableSorting,
        active,
        hideContent: index2 === index,
        hovering: hoverIndex === index,
        onPressOut: null,
        onRowActive: null,
        onRowLayout: null,
        pan,
        renderActiveDivider: closure_0.renderActiveDivider,
        renderRow,
        rowData: closure_0.getMemoedRowData(index, item),
      };
      index2 = undefined;
      if (active3 != null) {
        index2 = active3.rowData.index;
      }
      ({ cancel: obj2.onPressOut, handleRowActive: obj2.onRowActive, handleRowLayout: obj2.onRowLayout } = closure_0);
      return closure_2_7(closure_2_12, obj3);
    };
    tmp22.handleScroll = function handleScroll(nativeEvent) {
      closure_0.scrollValue = nativeEvent.nativeEvent.contentOffset.y;
      const props = closure_0.props;
      const onScroll = props.onScroll;
      if (onScroll != null) {
        onScroll(nativeEvent);
      }
    };
    tmp22.handleLayout = function handleLayout(nativeEvent) {
      const obj = {};
      const merged = Object.assign(nativeEvent.nativeEvent.layout);
      closure_0.listLayout = obj;
    };
    tmp22.handleContentSizeChange = function handleContentSizeChange(arg0, scrollContainerHeight) {
      closure_0.scrollContainerHeight = scrollContainerHeight;
    };
    tmp22.checkTargetElement = function checkTargetElement() {
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
      const _Math = Math;
      if (num4 == null) {
        num4 = 0;
      }
      const maxResult = max(num4, diff1);
      const active = obj.state.active;
      let num5;
      if (active != null) {
        num5 = active.rowData.index;
      }
      if (num5 == null) {
        num5 = 0;
      }
      let sum = maxResult;
      if (num5 < maxResult) {
        sum = maxResult + 1;
      }
      if (sum !== obj.state.hoverIndex) {
        const obj2 = closure_0(state[5]);
        const result = obj2.DeprecatedLayoutAnimation();
        const obj3 = { hovering: true, hoverIndex: sum };
        obj.setState(obj3);
      }
    };
    tmp22.cancel = function cancel() {
      if (!closure_0.moved) {
        const obj2 = { active: null, hovering: false, hoverIndex };
        closure_0.setState(obj2);
      }
    };
    tmp22.scrollTo = function scrollTo() {
      const scrollResponder = closure_0.scrollResponder;
      const items = [...HermesBuiltin.copyRestArgs()];
      scrollResponder.scrollTo.apply(items);
    };
    tmp22.scrollAnimation = function scrollAnimation() {
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
    tmp22._updateLayoutMap = function _updateLayoutMap(arg0, arg1) {
      const tmp2 = null == closure_0.firstRowY || 0 === closure_0.firstRowY || arg1.y < closure_0.firstRowY;
      if (tmp2) {
        closure_0.firstRowY = arg1.y;
      }
      closure_0.layoutMap[arg0] = arg1;
    };
    tmp22.getScrollResponder = function getScrollResponder() {
      return closure_0.scrollResponder;
    };
    tmp22.handleRowActive = function handleRowActive(active) {
      if (!active.props.disableSorting) {
        const current = active._wrapperRef.current;
        if (current != null) {
          current.measure((frameX, frameY, frameWidth, frameHeight, pageX, pageY) => {
            const obj = { frameX, frameY, frameWidth, frameHeight, pageX, pageY };
            active.wrapperLayout = obj;
            const pan = active.state.pan;
            pan.setValue({ x: 0, y: 0 });
            const obj2 = active(state[5]);
            const result = obj2.DeprecatedLayoutAnimation();
            active.moveY = active.layout.pageY;
            const obj3 = { active, hovering: true, hoverIndex: active.rowData.index };
            active.setState(obj3, active.scrollAnimation);
          });
        }
      }
    };
    let obj2 = { dx: tmp22.state.pan.x, dy: tmp22.state.pan.y };
    let items = [null, obj2];
    let closure_0 = RN.event(items, { useNativeDriver: false });
    let obj3 = {
      onStartShouldSetPanResponder() {
        return true;
      },
      onMoveShouldSetPanResponderCapture(arg0, vy) {
        const absolute = Math.abs(vy.vy);
        const tmp2 = absolute > Math.abs(vy.vx) && null != state.state.active;
        return tmp2;
      },
      onPanResponderMove(arg0, moveY) {
        moveY.dx = 0;
        state.moveY = moveY.moveY;
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
        const obj = { active: null, hovering: false, hoverIndex };
        state.setState(obj);
      },
      onPanResponderRelease() {
        state.moved = false;
        const props = state.props;
        const onMoveEnd = props.onMoveEnd;
        if (onMoveEnd != null) {
          onMoveEnd();
        }
        if (null == state.state.active) {
          if (state.state.hovering) {
            const obj3 = { hovering: false, hoverIndex };
            state.setState(obj3);
          }
          state.moveY = null;
        } else {
          const index = state.state.active.rowData.index;
          if (false === state.state.hovering) {
            const obj4 = { active: null, hoverIndex };
            return state.setState(obj4);
          } else {
            hoverIndex = state.state.hoverIndex;
            let diff = hoverIndex;
            if (hoverIndex > index) {
              diff = hoverIndex - 1;
            }
            const obj2 = DeprecatedLayoutAnimation;
            const result = obj2.DeprecatedLayoutAnimation({ duration: 0 });
            const props2 = state.props;
            const onRowMoved = props2.onRowMoved;
            if (onRowMoved != null) {
              const obj5 = { row: state.state.active.rowData, from: index, to: diff };
              onRowMoved(obj5);
            }
            const obj6 = { active: null, hovering: false, hoverIndex };
            state.setState(obj6);
            const _Math = Math;
            const bound = Math.max(0, state.scrollContainerHeight - state.listLayout.height + tmp15);
            if (state.scrollValue > bound) {
              const scrollResponder = state.scrollResponder;
              const obj7 = { y: bound };
              scrollResponder.scrollTo(obj7);
            }
          }
        }
      },
    };
    tmp22._panResponder = closure_5.create(obj3);
    return tmp22;
  }
  componentDidMount() {
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
          const obj = { frameX, frameY, frameWidth, frameHeight, pageX, pageY };
          self.wrapperLayout = obj;
        });
      }
    }, 1);
  }
  componentWillUnmount() {
    clearTimeout(this._delayedInitTimeout);
  }
  getMemoedRowData(index, item) {
    let tmp = this.memoedRowData[index];
    const tmp2 = null != tmp && index === tmp.index && item === tmp.item;
    if (!tmp2) {
      tmp = { index, item };
      const obj = { index, item };
    }
    this.memoedRowData[index] = tmp;
    return tmp;
  }
  render() {
    let contentContainerStyle;
    let data;
    let footer;
    let header;
    let index;
    let items;
    let items1;
    let keyboardShouldPersistTaps;
    let scrollEnabled;
    let scrollEventThrottle;
    let tmp6;
    const self = this;
    const props = this.props;
    const disableSorting = props.disableSorting;
    const obj = { ref: this._wrapperRef, style: items, children: items1 };
    items = [props.wrapperStyles, { flex: 1 }];
    const obj3 = {
      ref: this._listRef,
      keyboardShouldPersistTaps,
      scrollEventThrottle,
      contentContainerStyle,
      ListHeaderComponent: header,
      ListFooterComponent: footer,
      data,
      scrollEnabled: tmp6,
      renderItem: self.renderItem,
      extraData: "" + disableSorting + ":" + index + ":" + self.state.hoverIndex,
    };
    ({ contentContainerStyle, header, footer, data, scrollEnabled, keyboardShouldPersistTaps, scrollEventThrottle } =
      props);
    const merged = Object.assign(this._panResponder.panHandlers);
    ({
      handleScroll: obj2.onScroll,
      handleContentSizeChange: obj2.onContentSizeChange,
      handleLayout: obj2.onLayout,
    } = this);
    const active = self.state.active;
    index = undefined;
    tmp6 = null == this.state.active && false !== scrollEnabled;
    if (active != null) {
      index = active.rowData.index;
    }
    items1 = [metroImportDefault(metroRequire, obj3), self.renderActive()];
    return metroImportAll(_false, obj);
  }
}
const prototype = SortableListView.prototype;
SortableListView.defaultProps = { disableSorting: false };
let size = size_mod;
let result = size.fileFinishedImporting("components_native/common/SortableListView.tsx");

export default SortableListView;
