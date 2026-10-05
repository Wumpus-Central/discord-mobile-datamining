// === Module 16745: ConjureFloatingActivity ===

// Module 16745 (ConjureFloatingActivity)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import _modDef3723 from "module_3723" /* 3723 */;
import ReanimatedRexportDefault from "ReanimatedRexport" /* 4612 */;
import timing from "timing" /* 4891 */;
import AssetRegistryDefault from "AssetRegistry" /* 5929 */;
import ConjureTodoListDefault from "ConjureTodoList" /* 16714 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let importDefault, set;

let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let rect;
let View = react_native.View;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { root: rect, pill: obj2, pillMain: obj3, checklistButton: obj4, panel: obj5, label: { flexShrink: 1 } };
rect = { position: "absolute", left: nativeDefault.space.PX_16, right: nativeDefault.space.PX_16, alignItems: "center" };
createStyles = createStyles.createStyles;
obj2 = { flexDirection: "row", alignItems: "center", maxWidth: "100%", paddingVertical: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_12, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_SECONDARY_ALT, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE };
const merged = Object.assign(nativeDefault.shadows.SHADOW_MEDIUM);
obj3 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, flexShrink: 1 };
obj4 = { marginVertical: -nativeDefault.space.PX_8, marginLeft: nativeDefault.space.PX_4, marginRight: -nativeDefault.space.PX_8 };
obj5 = { maxWidth: "100%", marginBottom: nativeDefault.space.PX_8, padding: nativeDefault.space.PX_12, borderRadius: nativeDefault.radii.md, backgroundColor: nativeDefault.colors.BACKGROUND_SECONDARY_ALT, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE };
const merged1 = Object.assign(nativeDefault.shadows.SHADOW_MEDIUM);
let closure_8 = createStyles(obj);
const __initData = { code: "function ConjureFloatingActivityTsx1(){const{opacity}=this.__closure;return{opacity:opacity.get()};}" };
const __initData2 = { code: "function ConjureFloatingActivityTsx2(){const{opacity}=this.__closure;return{opacity:opacity.get()};}" };
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let agents;
  let bottom;
  let line;
  let onJumpToActivity;
  let sharedValue;
  let tmp6;
  let tmp7;
  let todos;
  let todosLive;
  let obj = sharedValue(576);
  const cResult = obj.c(41);
  ({ line, onJumpToActivity, bottom, todos, todosLive, agents } = arg0);
  const tmp4 = closure_8();
  const tmpResult = sharedValue(4612);
  sharedValue = tmpResult.useSharedValue(0);
  if (cResult[0] !== sharedValue) {
    const fn = function _() {
      set = sharedValue.set;
      let obj = timing;
      const result = set(obj.withTiming(1, { duration: 150 }));
      return () => {
        const obj = sharedValue(dependencyMap[8]);
        return obj.cancelAnimation(closure_1_0);
      };
    };
    const items = [sharedValue];
    cResult[0] = sharedValue;
    cResult[1] = fn;
    cResult[2] = items;
    tmp7 = items;
    tmp6 = fn;
  } else {
    tmp6 = cResult[1];
    tmp7 = cResult[2];
  }
  const effect = react.useEffect(tmp6, tmp7);
  const tmpResult2 = sharedValue(4612);
  class D {
    constructor() {
      const obj = { opacity: sharedValue.get() };
      return obj;
    }
  }
  D.__closure = { opacity: sharedValue };
  D.__workletHash = 451170179306;
  D.__initData = __initData;
  const animatedStyle = tmpResult2.useAnimatedStyle(D);
  [r10047, importDefault] = react.useState(false);
  _slicedToArray(react.useState(false), 2);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    class R {
      constructor() {
        return importDefault((arg0) => !arg0);
      }
    }
    cResult[3] = R;
  } else {
    class R {
      constructor() {
        return importDefault((arg0) => !arg0);
      }
    }
  }
  if (cResult[4] !== bottom) {
    class R {
      constructor() {
        return importDefault((arg0) => !arg0);
      }
    }
    tmp13[0] = bottom;
    cResult[4] = bottom;
    cResult[5] = tmp13;
  } else {
    class R {
      constructor() {
        return importDefault((arg0) => !arg0);
      }
    }
  }
  if (cResult[6] === animatedStyle) {
    class R {
      constructor() {
        return importDefault((arg0) => !arg0);
      }
    }
  }
  const items1 = [tmp4.root, tmp13, animatedStyle];
  cResult[6] = animatedStyle;
  cResult[7] = tmp4.root;
  cResult[8] = tmp13;
  cResult[9] = items1;
}) : ((agents) => {
  let ToggleIconButton;
  let _undefined;
  let bottom;
  let c1;
  let intl;
  let intl2;
  let items1;
  let items2;
  let items3;
  let items4;
  let line;
  let obj11;
  let obj5;
  let onJumpToActivity;
  let tmp8;
  let todos;
  let todosLive;
  ({ line, todos, todosLive } = agents);
  ({ onJumpToActivity, bottom } = agents);
  if (todosLive === undefined) {
    todosLive = true;
  }
  let sharedValue;
  importDefault = undefined;
  agents = agents.agents;
  const tmp = closure_8();
  let obj = sharedValue(4612);
  sharedValue = obj.useSharedValue(0);
  const items = [sharedValue];
  const effect = react.useEffect(() => {
    set = sharedValue.set;
    let obj = timing;
    const result = set(obj.withTiming(1, { duration: 150 }));
    return () => {
      const obj = sharedValue(dependencyMap[8]);
      return obj.cancelAnimation(closure_1_0);
    };
  }, items);
  const obj2 = sharedValue(4612);
  class T {
    constructor() {
      const obj = { opacity: sharedValue.get() };
      return obj;
    }
  }
  T.__closure = { opacity: sharedValue };
  T.__workletHash = 4327855830857;
  T.__initData = __initData2;
  const animatedStyle = obj2.useAnimatedStyle(T);
  [tmp8, c1] = react.useState(false);
  _slicedToArray(react.useState(false), 2);
  const callback = react.useCallback(() => _undefined((arg0) => !arg0), []);
  const obj3 = { style: items1, pointerEvents: "box-none", children: items2 };
  items1 = [tmp.root, { bottom }, animatedStyle];
  let tmp12 = null;
  View = ReanimatedRexportDefault.View;
  if (tmp8) {
    tmp12 = null;
    if (null != todos) {
      const obj4 = { style: tmp.panel, children: closure_6(ConjureTodoListDefault, obj5) };
      obj5 = { todos, agents, live: todosLive, announceProgress: false };
      tmp12 = closure_6(View, obj4);
    }
  }
  items2 = [tmp12, ];
  const obj6 = { style: tmp.pill, children: items4 };
  const obj7 = { style: tmp.pillMain, accessibilityRole: "button", accessibilityLabel: intl.formatToPlainString(_modDef3723.xuQfOT, { activity: line }), hitSlop: 8, onPress: onJumpToActivity, children: items3 };
  const PressableOpacity = tmp2(5909).PressableOpacity;
  intl = tmp2(1126).intl;
  const obj8 = { size: "xs", color: nativeDefault.colors.TEXT_BRAND };
  const MagicWandIcon = tmp2(12500).MagicWandIcon;
  items3 = [closure_6(MagicWandIcon, obj8), ];
  const obj9 = { style: tmp.label, children: closure_6(sharedValue(4886).Text, { variant: "text-sm/medium", color: "text-default", lineClamp: 1, children: line }) };
  items3[1] = closure_6(View, obj9);
  items4 = [closure_7(PressableOpacity, obj7), ];
  let tmp16Result = null;
  if (null != todos) {
    const obj10 = { style: tmp.checklistButton, children: closure_6(ToggleIconButton, obj11) };
    obj11 = { variant: "default", size: "sm", icon: AssetRegistryDefault, pressed: tmp8, accessibilityLabel: intl2.string(_modDef3723.Qp2isI), onPress: callback };
    ToggleIconButton = tmp2(14251).ToggleIconButton;
    intl2 = tmp2(1126).intl;
    tmp16Result = closure_6(tmp15, obj10);
  }
  items4[1] = tmp16Result;
  items2[1] = closure_7(View, obj6);
  return closure_7(View, obj3);
});
let result = size.fileFinishedImporting("modules/conjure/agent_activity/native/ConjureFloatingActivity.tsx");

export default tmp6;