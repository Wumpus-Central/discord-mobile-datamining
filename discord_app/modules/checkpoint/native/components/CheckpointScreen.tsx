// === Module 12387: CheckpointScreen ===

// Module 12387 (CheckpointScreen)
import nativeDefault from "native" /* 575 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1494 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1628 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

const _modDef1653 = tmp2(1653);
const require = fn;
get_ActivityIndicator = fn(17);
({ ScrollView: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const CheckpointConstants = fn(5850);
({ CHECKPOINT_CONTENT_MAX_HEIGHT: closure_6, CHECKPOINT_CONTENT_MAX_WIDTH: metroImportDefault, CHECKPOINT_NAV_HEIGHT: closure_8 } = CheckpointConstants);
const jsx = fn(21).jsx;
const PX_24 = nativeDefault.space.PX_24;
const createStyles = fn(4794);
let closure_12 = createStyles.createStyles({ container: { height: "100%", width: "100%" }, scroll: { width: "100%" }, scrollContent: { flexGrow: 1 }, centered: { justifyContent: "center" } });
let items = [{ code: "(function getKeyboardShift_CheckpointScreenTsx1(containerBottom,windowHeight,keyboardHeight){let[KEYBOARD_GAP]=this.__closure;const overlap=containerBottom+KEYBOARD_GAP-(windowHeight-keyboardHeight);return Math.min(keyboardHeight,Math.max(0,overlap));})" }, nativeDefault.space.PX_16];
let closure_129_0;
[tmp4, tmp5] = items;
function getKeyboardShift(arg0, arg1, arg2) {
  return Math.min(arg2, Math.max(0, arg0 + require - (arg1 - arg2)));
}
let items1 = [tmp5];
getKeyboardShift.__closure = items1;
getKeyboardShift.__workletHash = 1986039801391;
getKeyboardShift.__initData = tmp4;
let closure_14 = { code: "(function CheckpointScreenTsx2(e){let[containerRef,shift,measure,containerBottom]=this.__closure;if(containerRef==null||e.height===0||shift.get()!==0)return;const frame=measure(containerRef);containerBottom.set(frame!=null?frame.pageY+frame.height:0);})" };
let closure_15 = { code: "(function CheckpointScreenTsx3(e){let[containerRef,shift,getKeyboardShift,containerBottom,windowHeight]=this.__closure;if(containerRef==null)return;shift.set(getKeyboardShift(containerBottom.get(),windowHeight,e.height));})" };
let closure_16 = { code: "(function CheckpointScreenTsx4(e){let[containerRef,shift,getKeyboardShift,containerBottom,windowHeight]=this.__closure;if(containerRef==null)return;shift.set(getKeyboardShift(containerBottom.get(),windowHeight,e.height));})" };
let closure_17 = { code: "(function CheckpointScreenTsx5(){let[isEnabled,shift]=this.__closure;return{transform:[{translateY:isEnabled?-shift.get():0}]};})" };
let size = fn(2);
let result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointScreen.tsx");

export default function CheckpointScreen(keyboardInput) {
  ({ children, centered } = keyboardInput);
  if (centered === undefined) {
    centered = false;
  }
  _require = centered;
  keyboardInput = keyboardInput.keyboardInput;
  const tmp = closure_12();
  const tmp4 = useSafeAreaInsetsDefault();
  importDefault = tmp4;
  const size = useWindowDimensionsDefault({ ignoreKeyboard: true });
  const width = size.width;
  dependencyMap = width;
  const height = size.height;
  noop = height;
  let tmp6;
  if (obj.isAndroid()) {
    let containerRef;
    if (keyboardInput != null) {
      containerRef = keyboardInput.containerRef;
    }
    tmp6 = containerRef;
  }
  obj = require("PlatformUtils");
  const sharedValue = require("module_1653").useSharedValue(0);
  const tmp5Result = require("module_1653");
  const sharedValue1 = require("module_1653").useSharedValue(0);
  const tmp5Result5 = require("module_1653");
  items = [closure_14, tmp6, sharedValue1, require("module_1653").measure, sharedValue];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  noop = undefined;
  [tmp11, tmp12, tmp13, tmp14, tmp15] = items;
  const obj2 = { onStart: null, onMove: null, onEnd: null };
  class CheckpointScreenTsx2 {
    constructor(arg0) {
      if (null != closure_0) {
        tmp2 = keyboardInput;
        num = 0;
        if (0 !== keyboardInput.height) {
          tmp3 = closure_1;
          if (0 === closure_1.get()) {
            tmp4 = closure_2;
            tmp5 = closure_2(tmp);
            num2 = 0;
            tmp6 = closure_3;
            if (null != tmp5) {
              num2 = tmp5.pageY + tmp5.height;
            }
            result = closure_3.set(num2);
          }
        }
      }
      return;
    }
  }
  const items1 = [tmp12, tmp13, tmp14, tmp15];
  CheckpointScreenTsx2.__closure = items1;
  CheckpointScreenTsx2.__workletHash = 5808424766174;
  CheckpointScreenTsx2.__initData = tmp11;
  obj2.onStart = CheckpointScreenTsx2;
  const items2 = [closure_15, tmp6, sharedValue1, getKeyboardShift, sharedValue, height];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  noop = undefined;
  c4 = undefined;
  [tmp16, tmp17, tmp18, tmp19, tmp20, tmp21] = items2;
  class CheckpointScreenTsx3 {
    constructor(arg0) {
      if (null != closure_0) {
        tmp = keyboardInput;
        tmp2 = closure_1;
        tmp3 = closure_2;
        tmp4 = closure_3;
        tmp5 = closure_4;
        result = closure_1.set(closure_2(closure_3.get(), closure_4, keyboardInput.height));
      }
      return;
    }
  }
  const items3 = [tmp17, tmp18, tmp19, tmp20, tmp21];
  CheckpointScreenTsx3.__closure = items3;
  CheckpointScreenTsx3.__workletHash = 15804020579446;
  CheckpointScreenTsx3.__initData = tmp16;
  obj2.onMove = CheckpointScreenTsx3;
  const items4 = [closure_16, tmp6, sharedValue1, getKeyboardShift, sharedValue, height];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  noop = undefined;
  c4 = undefined;
  [tmp22, tmp23, tmp24, tmp25, tmp26, tmp27] = items4;
  class CheckpointScreenTsx4 {
    constructor(arg0) {
      if (null != closure_0) {
        tmp = keyboardInput;
        tmp2 = closure_1;
        tmp3 = closure_2;
        tmp4 = closure_3;
        tmp5 = closure_4;
        result = closure_1.set(closure_2(closure_3.get(), closure_4, keyboardInput.height));
      }
      return;
    }
  }
  const items5 = [tmp23, tmp24, tmp25, tmp26, tmp27];
  CheckpointScreenTsx4.__closure = items5;
  CheckpointScreenTsx4.__workletHash = 15114287885457;
  CheckpointScreenTsx4.__initData = tmp22;
  obj2.onEnd = CheckpointScreenTsx4;
  const items6 = [tmp6, height];
  require("KeyboardChatScrollView").useKeyboardHandler(obj2, items6);
  const tmp5Result6 = require("KeyboardChatScrollView");
  const items7 = [closure_17, null != tmp6, sharedValue1];
  _require = undefined;
  importDefault = undefined;
  [tmp29, tmp30, tmp31] = items7;
  class CheckpointScreenTsx5 {
    constructor() {
      num = 0;
      if (closure_0) {
        tmp = closure_1;
        num = -closure_1.get();
      }
      obj = { transform: null };
      items = [];
      items[0] = { translateY: num };
      obj.transform = items;
      return obj;
    }
  }
  const items8 = [tmp30, tmp31];
  CheckpointScreenTsx5.__closure = items8;
  CheckpointScreenTsx5.__workletHash = 13320023813122;
  CheckpointScreenTsx5.__initData = tmp29;
  const items9 = [tmp4, centered, width, height];
  const animatedStyle = require("module_1653").useAnimatedStyle(CheckpointScreenTsx5);
  let str = "never";
  const memo = noop.useMemo(() => {
    let num = 0;
    if (!c0) {
      const _Math = Math;
      num = Math.max(0, (c2 - _undefined.left - _undefined.right - 2 * PX_24 - metroImportDefault) / 2);
    }
    let num3 = 0;
    if (!c0) {
      const _Math2 = Math;
      num3 = Math.max(0, (c3 - _undefined.top - React5 - _undefined.bottom - PX_24 - timestampProducer) / 2);
    }
    const obj = { paddingLeft: _undefined.left + PX_24 + num, paddingRight: _undefined.right + PX_24 + num, paddingBottom: null, paddingTop: null };
    let num5 = 0;
    if (!c0) {
      num5 = PX_24;
    }
    obj.paddingBottom = _undefined.bottom + num5 + num3;
    let num6 = 0;
    if (!c0) {
      num6 = React5;
    }
    obj.paddingTop = _undefined.top + num6 + num3;
    return obj;
  }, items9);
  if (null != keyboardInput) {
    str = "handled";
  }
  const obj3 = { keyboardShouldPersistTaps: str, style: tmp.scroll, contentContainerStyle: null, showsVerticalScrollIndicator: false };
  const items10 = [tmp.scrollContent, , , ];
  if (centered) {
    centered = tmp.centered;
  }
  items10[1] = centered;
  items10[2] = memo;
  items10[3] = keyboardInput.contentContainerStyle;
  obj3.contentContainerStyle = items10;
  const obj4 = { style: tmp.container, children: null };
  const tmp5Result7 = require("module_1653");
  if (tmp5Result8.isAndroid()) {
    const obj5 = { style: null, children: null };
    const items11 = [tmp.container, animatedStyle];
    obj5.style = items11;
    let str2 = "none";
    if (null != keyboardInput) {
      str2 = "on-drag";
    }
    const obj6 = { keyboardDismissMode: str2 };
    const merged = Object.assign(obj3);
    obj6.children = children;
    obj5.children = <c4 keyboardDismissMode={str2} />;
    let tmp34Result = jsx(_modDef1653.View, { style: null, children: null });
  } else {
    const obj7 = { enabled: null != keyboardInput, bottomOffset: null };
    let bottomOffset;
    if (keyboardInput != null) {
      bottomOffset = keyboardInput.bottomOffset;
    }
    obj7.bottomOffset = bottomOffset;
    const merged1 = Object.assign(obj3);
    obj7.children = children;
    tmp34Result = jsx(tmp5(1642).KeyboardAwareScrollView, { enabled: null != keyboardInput, bottomOffset: null });
  }
  obj4.children = tmp34Result;
  return <closure_5 style={tmp.container}>{null}</closure_5>;
};
export function useCheckpointScreenContentHeight(arg0) {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = false;
  }
  const height = useWindowDimensionsDefault({ ignoreKeyboard: true }).height;
  const rect = useSafeAreaInsetsDefault();
  if (flag) {
    let diff = height - rect.top - rect.bottom;
  } else {
    const _Math = Math;
    diff = Math.min(height - rect.top - React5 - rect.bottom - PX_24, timestampProducer);
  }
  return diff;
}
export function useCheckpointScreenFrame() {
  ({ height, width } = useWindowDimensionsDefault({ ignoreKeyboard: true }));
  const rect = useSafeAreaInsetsDefault();
  const size = { width: Math.min(width, metroImportDefault + 2 * PX_24), height: Math.min(height, height - (height - rect.top - React5 - rect.bottom - PX_24) + timestampProducer) };
  return size;
}