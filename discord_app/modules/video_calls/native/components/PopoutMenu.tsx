// discord_app/modules/video_calls/native/components/PopoutMenu.tsx
import _modDef12 from "../../../../../_runtime/metro/00012__.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../../design/void/native.tsx";
import useWindowDimensionsDefault from "../../../screen/useWindowDimensions.native.tsx";
import useSafeAreaInsetsDefault from "../../../safe_area/useSafeAreaInsets.native.tsx";
import _mod1705 from "../../../../../_runtime/metro/01705__.js";
import Patterns from "../../../../../_runtime/05385_Patterns.js";
import LegacyBaseButton from "../../../../../_runtime/05426_LegacyBaseButton.js";
import FormRowDefault from "../../../../design/void/Form/native/FormRow.tsx";
import Form from "../../../../design/void/Form/native/index.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

const _modDef1652 = tmp2(1652);
require = fn;
function PopoutMenuRow(onClose) {
  ({ icon, onClick } = onClose);
  onClose = onClose.onClose;
  const tmp = closure_9();
  items = [onClick, onClose];
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
    const obj = { source: icon };
    tmp3Result = timestampProducer(native.Icon, obj);
  }
  const obj2 = {
    leading: tmp3Result,
    label: timestampProducer(Form.FormLabel, { style: tmp.popoutMenuRowLabel, text: onClose.text }),
    style: tmp.popoutMenuRow,
    onPress: callback,
  };
  return timestampProducer(FormRowDefault, obj2);
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7, Fragment: closure_8 } = jsxProd);
const createStyles = fn(5141);
let obj2 = {
  container: {
    position: "absolute",
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
    borderRadius: nativeDefault.radii.sm,
  },
  popoutMenuRow: { flex: 1 },
  popoutMenuRowLabel: { width: "100%" },
};
let closure_9 = createStyles.createStyles(obj2);
let closure_11 = {
  code: "(function PopoutMenuTsx1(finished){let[scheduleOnRN,handleClose]=this.__closure;if(finished){scheduleOnRN(handleClose);}})",
};
let closure_12 = {
  code: "(function PopoutMenuTsx2(){let[withTiming,animateIn,STANDARD_EASING,ANIMATION_DURATION,_worklet_6402723539301_init_data,scheduleOnRN,handleClose,EXTRA_PADDING]=this.__closure;return{opacity:withTiming(animateIn?1:0,{easing:STANDARD_EASING,duration:ANIMATION_DURATION},'respect-motion-settings',function PopoutMenuTsx1Factory([_worklet_6402723539301_init_data,scheduleOnRN,handleClose]){const PopoutMenuTsx1=function(finished){if(finished){scheduleOnRN(handleClose);}};PopoutMenuTsx1.__closure=[scheduleOnRN,handleClose];PopoutMenuTsx1.__workletHash=6402723539301;PopoutMenuTsx1.__initData=_worklet_6402723539301_init_data;return PopoutMenuTsx1;}([_worklet_6402723539301_init_data,scheduleOnRN,handleClose])),transform:[{translateY:withTiming(animateIn?-EXTRA_PADDING:0,{easing:STANDARD_EASING,duration:ANIMATION_DURATION})}]};})",
};
let closure_13 = {
  code: "(function PopoutMenuTsx3(){let[scheduleOnRN,_setClose]=this.__closure;scheduleOnRN(_setClose,true);})",
};
let closure_14 = {
  code: "(function PopoutMenuTsx4(){let[scheduleOnRN,handleLongPress]=this.__closure;scheduleOnRN(handleLongPress);})",
};
let size = fn(2);
const result = size.fileFinishedImporting("modules/video_calls/native/components/PopoutMenu.tsx");

export default function PopoutMenu(onClose) {
  ({ title, trigger, rows, onOpen } = onClose);
  _require = onOpen;
  onClose = onClose.onClose;
  importDefault = onClose;
  onClose = undefined;
  let callback1;
  ({ disabled, style, ref } = onClose);
  let size = useWindowDimensionsDefault();
  const width = size.width;
  const height = size.height;
  duration = height;
  const bottom = useSafeAreaInsetsDefault().bottom;
  noop = bottom;
  const tmp4 = duration(noop.useState(0), 2);
  const tmp6 = duration(noop.useState(false), 2);
  const first = tmp6[0];
  const tmp9 = duration(noop.useState(false), 2);
  const first1 = tmp9[0];
  closure_9 = tmp9[1];
  const ref1 = noop.useRef(null);
  const ref2 = noop.useRef(null);
  const tmp13 = duration(noop.useState({ top: 0, left: 0, width: 0, height: 0 }), 2);
  const first2 = tmp13[0];
  closure_13 = tmp13[1];
  const tmp15 = duration(noop.useState({ width: 0, height: 0 }), 2);
  const first3 = tmp15[0];
  closure_15 = tmp15[1];
  items = [first1];
  const effect = noop.useEffect(() => {
    let tmp = first1;
    if (first1) {
      let current1;
      if (ref1 != null) {
        current1 = ref1.current;
      }
      tmp = null != current1;
    }
    if (tmp) {
      if (ref1 != null) {
        let current = ref1.current;
        if (current != null) {
          current.measureInWindow((left, arg1, width, height) => {
            const size = { top: Math.max(arg1, 0), left, width, height };
            closure_1_13(size);
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
  let items1 = [first3, bottom, height, width, first2];
  const memo = noop.useMemo(() => {
    let top = -first3.height;
    const size = first2;
    if (first2.top + first2.height + first3.height + 8 + c4 < c3) {
      top = size.height + 16;
    }
    let left = 0;
    if (size.left + first3.width + 8 > c2) {
      left = size.width - first3.width;
    }
    return { top, left };
  }, items1);
  let items2 = [tmp6[1]];
  ({ top, left } = memo);
  const imperativeHandle = noop.useImperativeHandle(
    ref,
    () => ({
      close() {
        _undefined3(true);
      },
    }),
    items2,
  );
  let items3 = [tmp4[1]];
  closure_16 = noop.useMemo(
    () =>
      _modDef12.debounce((arg0) => {
        closure_1_5(arg0);
      }, 16),
    items3,
  );
  const items4 = [first, onClose];
  const callback = noop.useCallback(() => {
    if (c6) {
      _undefined2();
      closure_9(false);
    }
  }, items4);
  let tmp = closure_9();
  const items5 = [
    first2,
    require("timing/timing").withTiming,
    tmp4[0] > 0 && !first,
    require("native").STANDARD_EASING,
    250,
    ref2,
    require("../../../../../_runtime/metro/01705__.js").scheduleOnRN,
    callback,
    8,
  ];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  duration = undefined;
  noop = undefined;
  c5 = undefined;
  c6 = undefined;
  c7 = undefined;
  [tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30] = items5;
  class PopoutMenuTsx2 {
    constructor() {
      tmp = closure_0;
      num = 0;
      tmp2 = closure_1;
      if (closure_1) {
        num = 1;
      }
      obj = { easing: closure_2, duration: closure_3 };
      items = [, ,];
      items[0] = closure_4;
      items[1] = closure_5;
      items[2] = closure_6;
      [tmp5, tmp6, tmp7] = items;
      obj1 = { opacity: null, transform: null };
      class PopoutMenuTsx1 {
        constructor(arg0) {
          if (onClose) {
            tmp = closure_0;
            tmp2 = closure_1;
            tmp3 = closure_0(closure_1);
          }
          return;
        }
      }
      items1 = [,];
      items1[0] = tmp6;
      items1[1] = tmp7;
      PopoutMenuTsx1.__closure = items1;
      PopoutMenuTsx1.__workletHash = 6402723539301;
      PopoutMenuTsx1.__initData = tmp5;
      tmp3 = closure_2;
      tmp4 = closure_3;
      obj1.opacity = tmp(num, obj, "respect-motion-settings", PopoutMenuTsx1);
      num2 = 0;
      if (tmp2) {
        tmp8 = closure_7;
        num2 = -closure_7;
      }
      obj4 = { translateY: tmp(num2, { easing: tmp3, duration: tmp4 }) };
      items2 = [];
      items2[0] = obj4;
      obj1.transform = items2;
      return obj1;
    }
  }
  const items6 = [tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30];
  PopoutMenuTsx2.__closure = items6;
  PopoutMenuTsx2.__workletHash = 5794060579369;
  PopoutMenuTsx2.__initData = tmp22;
  const animatedStyle = require("../../../../../_runtime/metro/01652__.js").useAnimatedStyle(PopoutMenuTsx2);
  onClose = obj.useCallback(() => _undefined3(true), []);
  const items7 = [onOpen];
  callback1 = obj.useCallback(() => {
    _undefined3(false);
    Patterns.trigger("impactHeavy");
    closure_9(true);
    _undefined();
  }, items7);
  [][0] = callback1;
  let tmp35Result2 = trigger;
  if (!disabled) {
    const obj3 = { gesture: tmp33, children: null };
    const obj4 = { ref: ref1, children: trigger };
    obj3.children = c6(c5, obj4);
    const items8 = [c6(tmp21(5426).GestureDetector, obj3)];
    let tmp35Result = null;
    if (first1) {
      const obj5 = { ref: ref2, style: null, onLayout: null, children: null };
      const items9 = [tmp.container, style, ,];
      const rect = { left, top };
      items9[2] = rect;
      items9[3] = animatedStyle;
      obj5.style = items9;
      obj5.onLayout = function onLayout(nativeEvent) {
        closure_16(nativeEvent.nativeEvent.layout.height);
      };
      let tmp37Result = null;
      if (null != title) {
        const obj6 = { text: title };
        tmp37Result = tmp37(ref1, obj6);
      }
      const items10 = [tmp37Result, ,];
      let tmp37Result2 = null;
      if (null != title) {
        tmp37Result2 = tmp37(tmp21(8301).FormDivider, {});
      }
      items10[1] = tmp37Result2;
      items10[2] = rows.map((item, index) => {
        const obj = {};
        const merged = Object.assign(item);
        obj.onClose = onClose;
        return timestampProducer(PopoutMenuRow, obj, index);
      });
      obj5.children = items10;
      tmp35Result = tmp35(_modDef1652.View, obj5);
    }
    const obj7 = { children: null };
    items8[1] = tmp35Result;
    obj7.children = items8;
    tmp35Result2 = tmp35(first1, obj7);
  }
  return tmp35Result2;
}
