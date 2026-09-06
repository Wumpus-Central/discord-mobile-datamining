// === Module 9587: PopoutMenu ===

// Module 9587 (PopoutMenu)
import _modDef12 from "module_12" /* 12 */;
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1178 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4296 */;
import Patterns from "Patterns" /* 4530 */;
import timing from "timing" /* 4561 */;
import LegacyBaseButton from "LegacyBaseButton" /* 6655 */;
import FormRowDefault from "FormRow" /* 7137 */;
import Form from "Form" /* 8593 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
function PopoutMenuRow(onClose) {
  ({ icon, onClick } = onClose);
  onClose = onClose.onClose;
  const tmp = closure_9();
  const items = [onClick, onClose];
  const callback = noop.useCallback(() => {
    if (onClick != null) {
      tmp();
    }
    if (onClose != null) {
      tmp3();
    }
  }, items);
  let tmp3Result = null;
  if (null != icon) {
    let obj = { source: icon };
    tmp3Result = timestampProducer(native.Icon, obj);
  }
  obj = { leading: tmp3Result, label: null, style: tmp.popoutMenuRow, onPress: callback };
  obj = { style: tmp.popoutMenuRowLabel, text: onClose.text };
  obj.label = timestampProducer(Form.FormLabel, obj);
  return timestampProducer(FormRowDefault, obj);
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7, Fragment: closure_8 } = jsxProd);
const createStyles = fn(4560);
let obj = { container: null, popoutMenuRow: null, popoutMenuRowLabel: null };
obj = { position: "absolute", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderRadius: nativeDefault.radii.sm };
obj.container = obj;
obj.popoutMenuRow = { flex: 1 };
obj.popoutMenuRowLabel = { width: "100%" };
let closure_9 = createStyles.createStyles(obj);
let closure_11 = { code: "function PopoutMenuTsx1(){const{withTiming,animateIn,STANDARD_EASING,ANIMATION_DURATION,runOnJS,handleClose,EXTRA_PADDING}=this.__closure;return{opacity:withTiming(animateIn?1:0,{easing:STANDARD_EASING,duration:ANIMATION_DURATION},'respect-motion-settings',function(finished){if(finished){runOnJS(handleClose)();}}),transform:[{translateY:withTiming(animateIn?-EXTRA_PADDING:0,{easing:STANDARD_EASING,duration:ANIMATION_DURATION})}]};}" };
let closure_12 = { code: "function PopoutMenuTsx2(finished){const{runOnJS,handleClose}=this.__closure;if(finished){runOnJS(handleClose)();}}" };
let closure_13 = { code: "function PopoutMenuTsx3(){const{runOnJS,handleLongPress}=this.__closure;runOnJS(handleLongPress)();}" };
let closure_14 = { code: "function PopoutMenuTsx4(){const{runOnJS,_setClose}=this.__closure;runOnJS(_setClose)(true);}" };
let size = fn(2);
const result = size.fileFinishedImporting("modules/video_calls/native/components/PopoutMenu.tsx");

export default noop.forwardRef(function PopoutMenu(onClose, arg1) {
  ({ title, trigger, rows, onOpen } = onClose);
  let width;
  onClose = undefined;
  ({ disabled, style } = onClose);
  let size = onClose(width[9])();
  width = size.width;
  const height = size.height;
  const bottom = onClose(width[10])().bottom;
  let obj = bottom;
  const tmp4 = height(bottom.useState(0), 2);
  closure_5 = tmp5;
  const tmp6 = height(bottom.useState(false), 2);
  const first = tmp6[0];
  const _setClose = tmp8;
  const tmp9 = height(bottom.useState(false), 2);
  const first1 = tmp9[0];
  closure_9 = tmp9[1];
  const ref = bottom.useRef(null);
  const ref1 = bottom.useRef(null);
  const tmp13 = height(bottom.useState({ top: 0, left: 0, width: 0, height: 0 }), 2);
  const first2 = tmp13[0];
  __initData2 = tmp13[1];
  const tmp15 = height(bottom.useState({ width: 0, height: 0 }), 2);
  const first3 = tmp15[0];
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
            const size = { top: Math.max(arg1, 0), left, width, height };
            __initData2(size);
          });
        }
      }
      const _setTimeout = setTimeout;
      const timerId = setTimeout(() => {
        if (ref != null) {
          const current = ref.current;
          if (current != null) {
            current.measureInWindow((arg0, arg1, width, height) => {
              const size = { width, height };
              closure_1_15(size);
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
      left = size.width - first3.width;
    }
    return { top, left };
  }, items1);
  const items2 = [tmp6[1]];
  ({ top, left } = memo);
  const imperativeHandle = bottom.useImperativeHandle(arg1, () => ({
    close() {
      _setClose(true);
    }
  }), items2);
  const items3 = [tmp4[1]];
  closure_16 = bottom.useMemo(() => _modDef12.debounce((arg0) => {
    closure_1_5(arg0);
  }, 16), items3);
  closure_17 = tmp20;
  const items4 = [first, onClose];
  const handleClose = obj.useCallback(() => {
    if (first) {
      onClose();
      closure_9(false);
    }
  }, items4);
  let obj1 = onOpen(tmp3[12]);
  function te() {
    let obj = timing;
    let num = 0;
    if (closure_17) {
      num = 1;
    }
    obj = { opacity: null, transform: null };
    obj = { easing: native.STANDARD_EASING, duration: 250 };
    const fn = function n(arg0) {
      if (arg0) {
        onOpen(width[12]).runOnJS(handleClose)();
        const obj = onOpen(width[12]);
      }
    };
    fn.__closure = { runOnJS: ReanimatedRexport.runOnJS, handleClose };
    fn.__workletHash = 7805688342878;
    fn.__initData = __initData;
    obj.opacity = obj.withTiming(num, obj, "respect-motion-settings", fn);
    const obj1 = { runOnJS: ReanimatedRexport.runOnJS, handleClose };
    let num2 = 0;
    if (closure_17) {
      num2 = -8;
    }
    const obj2 = { translateY: null };
    const tmpResult = timing;
    obj2.translateY = tmpResult.withTiming(num2, { easing: native.STANDARD_EASING, duration: 250 });
    const items = [obj2];
    obj.transform = items;
    return obj;
  }
  obj = { withTiming: onOpen(tmp3[13]).withTiming, animateIn: tmp20, STANDARD_EASING: onOpen(tmp3[7]).STANDARD_EASING, ANIMATION_DURATION: 250, runOnJS: onOpen(tmp3[12]).runOnJS, handleClose, EXTRA_PADDING: 8 };
  te.__closure = obj;
  te.__workletHash = 2727321893876;
  te.__initData = ref1;
  const animatedStyle = obj1.useAnimatedStyle(te);
  onClose = obj.useCallback(() => _setClose(true), []);
  const items5 = [onOpen];
  const callback1 = obj.useCallback(() => {
    _setClose(false);
    Patterns.trigger("impactHeavy");
    closure_9(true);
    onOpen();
  }, items5);
  [][0] = callback1;
  let tmp27Result = trigger;
  if (!disabled) {
    obj = { gesture: tmp25, children: null };
    obj1 = { ref, children: trigger };
    obj.children = first(closure_5, obj1);
    const items6 = [first(tmp22(tmp3[15]).GestureDetector, obj), ];
    tmp27Result = null;
    if (first1) {
      let obj2 = { ref: ref1, style: null, onLayout: null, children: null };
      const items7 = [tmp.container, style, , ];
      const rect = { left, top };
      items7[2] = rect;
      items7[3] = animatedStyle;
      obj2.style = items7;
      obj2.onLayout = function onLayout(nativeEvent) {
        closure_16(nativeEvent.nativeEvent.layout.height);
      };
      let tmp29Result = null;
      if (null != title) {
        const obj3 = { text: title };
        tmp29Result = tmp29(ref, obj3);
      }
      const items8 = [tmp29Result, , ];
      tmp29Result = null;
      if (null != title) {
        tmp29Result = tmp29(tmp22(tmp3[8]).FormDivider, {});
      }
      items8[1] = tmp29Result;
      items8[2] = rows.map((item, index) => {
        const obj = {};
        const merged = Object.assign(item);
        obj.onClose = onClose;
        return timestampProducer(PopoutMenuRow, obj, index);
      });
      obj2.children = items8;
      tmp27Result = tmp27(onClose(tmp3[12]).View, obj2);
    }
    const obj4 = { children: null };
    items6[1] = tmp27Result;
    obj4.children = items6;
    tmp27Result = tmp27(first1, obj4);
  }
  return tmp27Result;
});