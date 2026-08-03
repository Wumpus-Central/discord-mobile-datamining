import _slicedToArray from "_slicedToArray";
import importAllResult from "noop";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let closure_6;
let error;
let metroImportAll;
const require = arg1;
function PopoutMenuRow(onClose) {
  let icon;
  let onClick;
  ({ icon, onClick } = onClose);
  onClose = onClose.onClose;
  const tmp = callback();
  const items = [onClick, onClose];
  callback = importAllResult.useCallback(() => {
    if (onClick != null) {
      tmp();
    }
    if (onClose != null) {
      tmp3();
    }
  }, items);
  let tmp3Result = null;
  if (null != icon) {
    let obj = { source: null };
    obj[0] = icon;
    tmp3Result = tmp3(onClick(1297).Icon, obj);
  }
  obj = { leading: tmp3Result, label: tmp3(onClick(7639).FormLabel, obj), style: tmp.popoutMenuRow, onPress: callback };
  obj = { style: tmp.popoutMenuRowLabel, text: onClose.text };
  return closure_6(onClose(5217), obj);
}
let c4 = importAllResult;
({ jsx: closure_6, jsxs: error, Fragment: metroImportAll } = jsxProd);
let obj = { container: null, popoutMenuRow: null, popoutMenuRowLabel: null };
obj = { position: "absolute", backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWEST, borderRadius: require("Themes").radii.sm };
obj[0] = obj;
obj[1] = { flex: 1 };
obj[2] = { width: "100%" };
let closure_9 = createCacheKey.createStyles(obj);
let closure_11 = { code: "function PopoutMenuTsx1(){const{withTiming,animateIn,STANDARD_EASING,ANIMATION_DURATION,runOnJS,handleClose,EXTRA_PADDING}=this.__closure;return{opacity:withTiming(animateIn?1:0,{easing:STANDARD_EASING,duration:ANIMATION_DURATION},'respect-motion-settings',function(finished){if(finished){runOnJS(handleClose)();}}),transform:[{translateY:withTiming(animateIn?-EXTRA_PADDING:0,{easing:STANDARD_EASING,duration:ANIMATION_DURATION})}]};}" };
let closure_12 = { code: "function PopoutMenuTsx2(finished){const{runOnJS,handleClose}=this.__closure;if(finished){runOnJS(handleClose)();}}" };
let closure_13 = { code: "function PopoutMenuTsx3(){const{runOnJS,handleLongPress}=this.__closure;runOnJS(handleLongPress)();}" };
let closure_14 = { code: "function PopoutMenuTsx4(){const{runOnJS,_setClose}=this.__closure;runOnJS(_setClose)(true);}" };
const forwardRefResult = importAllResult.forwardRef(function PopoutMenu(onClose, ref) {
  let disabled;
  let left;
  let onOpen;
  let rows;
  let style;
  let title;
  let top;
  let trigger;
  ({ title, trigger, rows, onOpen } = onClose);
  onClose = onClose.onClose;
  let width;
  let height;
  let bottom;
  let c5;
  let first;
  let c7;
  let first1;
  let callback;
  ref = undefined;
  let ref1;
  let first2;
  let closure_13;
  let first3;
  let closure_15;
  let closure_16;
  let c17;
  callback = undefined;
  let closure_19;
  let callback1;
  ({ disabled, style } = onClose);
  let size = onClose(width[9])();
  width = size.width;
  height = size.height;
  bottom = onClose(width[10])().bottom;
  let obj = bottom;
  const tmp4 = height(bottom.useState(0), 2);
  c5 = tmp5;
  const tmp6 = height(bottom.useState(false), 2);
  first = tmp6[0];
  c7 = tmp8;
  const tmp9 = height(bottom.useState(false), 2);
  first1 = tmp9[0];
  callback = tmp9[1];
  ref = bottom.useRef(null);
  ref1 = bottom.useRef(null);
  const tmp13 = height(bottom.useState({ top: 0, left: 0, width: 0, height: 0 }), 2);
  first2 = tmp13[0];
  closure_13 = tmp13[1];
  const tmp15 = height(bottom.useState({ width: 0, height: 0 }), 2);
  first3 = tmp15[0];
  closure_15 = tmp15[1];
  let items = [first1];
  const effect = bottom.useEffect(() => {
    let tmp = first1;
    if (first1) {
      let current;
      if (ref != null) {
        current = ref.current;
      }
      tmp = null != current;
    }
    if (tmp) {
      if (ref != null) {
        current = ref.current;
        if (current != null) {
          current.measureInWindow((left, arg1, width, height) => {
            callback({ top: Math.max(arg1, 0), left, width, height });
          });
        }
      }
      const _setTimeout = setTimeout;
      const timerId = setTimeout(() => {
        if (ref != null) {
          const current = ref.current;
          if (current != null) {
            current.measureInWindow((arg0, arg1, width, height) => {
              callback({ width, height });
            });
          }
        }
      });
    }
  }, items);
  const items1 = [first3, bottom, height, width, first2];
  const memo = bottom.useMemo(() => {
    let top = -first3.height;
    const size = first2;
    if (first2.top + first2.height + first3.height + 8 + bottom < height) {
      top = size.height + 16;
    }
    let left = 0;
    if (size.left + first3.width + 8 > width) {
      left = size.width - tmp.width;
    }
    return { top, left };
  }, items1);
  const items2 = [tmp6[1]];
  ({ top, left } = memo);
  const imperativeHandle = bottom.useImperativeHandle(ref, () => ({
    close() {
      callback(true);
    }
  }), items2);
  const items3 = [tmp4[1]];
  closure_16 = bottom.useMemo(() => onClose(width[11]).debounce((arg0) => {
    callback(arg0);
  }, 16), items3);
  c17 = tmp20;
  const items4 = [first, onClose];
  callback = obj.useCallback(() => {
    if (first) {
      onClose();
      callback(false);
    }
  }, items4);
  let obj1 = onOpen(tmp3[12]);
  function te() {
    let obj = onOpen(width[13]);
    let num = 0;
    if (c17) {
      num = 1;
    }
    obj = { opacity: null, transform: null };
    obj = { easing: tmp(tmp2[7]).STANDARD_EASING, duration: 250 };
    const fn = function n(arg0) {
      if (arg0) {
        outer1_0(outer1_2[12]).runOnJS(closure_18)();
        const obj = outer1_0(outer1_2[12]);
      }
    };
    fn.__closure = { runOnJS: onOpen(width[12]).runOnJS, handleClose: callback };
    fn.__workletHash = 7805688342878;
    fn.__initData = first2;
    obj[0] = obj.withTiming(num, obj, "respect-motion-settings", fn);
    const obj1 = { runOnJS: onOpen(width[12]).runOnJS, handleClose: callback };
    const tmp3 = c17;
    let num2 = 0;
    if (tmp3) {
      num2 = -8;
    }
    const obj2 = { translateY: null };
    const tmpResult = onOpen(width[13]);
    obj2[0] = tmpResult.withTiming(num2, { easing: onOpen(width[7]).STANDARD_EASING, duration: 250 });
    const items = [obj2];
    obj[1] = items;
    return obj;
  }
  obj = { withTiming: onOpen(tmp3[13]).withTiming, animateIn: tmp20, STANDARD_EASING: onOpen(tmp3[7]).STANDARD_EASING, ANIMATION_DURATION: 250, runOnJS: onOpen(tmp3[12]).runOnJS, handleClose: callback, EXTRA_PADDING: 8 };
  te.__closure = obj;
  te.__workletHash = 2727321893876;
  te.__initData = ref1;
  const animatedStyle = obj1.useAnimatedStyle(te);
  closure_19 = obj.useCallback(() => _undefined(true), []);
  const items5 = [onOpen];
  callback1 = obj.useCallback(() => {
    _undefined(false);
    onOpen(width[14]).trigger("impactHeavy");
    callback(true);
    onOpen();
  }, items5);
  [][0] = callback1;
  let tmp27Result = trigger;
  if (!disabled) {
    obj = { gesture: null, children: null };
    obj[0] = tmp25;
    obj1 = { ref: null, children: null };
    obj1[0] = ref;
    obj1[1] = trigger;
    obj[1] = first(c5, obj1);
    const items6 = [first(tmp22(tmp3[15]).GestureDetector, obj), ];
    tmp27Result = null;
    if (first1) {
      let obj2 = { ref: null, style: null, onLayout: null, children: null };
      obj2[0] = ref1;
      const items7 = [tmp.container, style, , ];
      const obj3 = { left: null, top: null };
      obj3[0] = left;
      obj3[1] = top;
      items7[2] = obj3;
      items7[3] = animatedStyle;
      obj2[1] = items7;
      obj2[2] = function onLayout(nativeEvent) {
        callback2(nativeEvent.nativeEvent.layout.height);
      };
      let tmp29Result = null;
      if (null != title) {
        const obj4 = { text: null };
        obj4[0] = title;
        tmp29Result = tmp29(ref, obj4);
      }
      const items8 = [tmp29Result, , ];
      tmp29Result = null;
      if (null != title) {
        tmp29Result = tmp29(tmp22(tmp3[8]).FormDivider, {});
      }
      items8[1] = tmp29Result;
      items8[2] = rows.map((arg0, _exports2) => {
        const obj = {};
        const merged = Object.assign(arg0);
        obj.onClose = closure_19;
        return first(ref, obj, _exports2);
      });
      obj2[3] = items8;
      tmp27Result = tmp27(onClose(tmp3[12]).View, obj2);
    }
    const obj5 = { children: null };
    items6[1] = tmp27Result;
    obj5[0] = items6;
    tmp27Result = tmp27(first1, obj5);
    const tmp28 = first1;
  }
  return tmp27Result;
});
const result = require("get ActivityIndicator").fileFinishedImporting("modules/video_calls/native/components/PopoutMenu.tsx");

export default forwardRefResult;