// === Module 19755: NewMemberActionsCompletedModal ===

// Module 19755 (NewMemberActionsCompletedModal)
import nativeDefault from "native" /* 575 */;
import _modDef1652 from "module_1652" /* 1652 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

const require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: closure_6 } = jsxProd);
const createStyles = fn(5141);
const obj2 = { screen: { flex: 1, position: "absolute", width: "100%", height: "100%", backgroundColor: "rgba(0, 0, 0, 0.8)", display: "flex", alignItems: "center", justifyContent: "center" }, text: { marginBottom: 16 }, progressBackground: null, progressForeground: null };
let size = { borderRadius: nativeDefault.radii.round, height: 8, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL, width: "60%" };
obj2.progressBackground = size;
obj2.progressForeground = { backgroundColor: nativeDefault.unsafe_rawColors.GREEN_330, borderRadius: nativeDefault.radii.round, height: 8 };
let closure_7 = createStyles.createStyles(obj2);
let closure_8 = { code: "(function NewMemberActionsCompletedModalTsx1(){let[withDelay,withTiming,barWidth]=this.__closure;return{width:withDelay(500,withTiming(barWidth.get()*100+\"%\",{duration:700}))};})" };
size = fn(2);
let result = size.fileFinishedImporting("modules/guild_onboarding_home/native/NewMemberActionsCompletedModal.tsx");

export default function NewMemberActionsCompleted(arg0) {
  _require = undefined;
  ({ initialPercent, numActions } = arg0);
  const tmp = closure_7();
  const sharedValue = require("module_1652").useSharedValue(initialPercent);
  _require = sharedValue;
  items = [sharedValue];
  const effect = noop.useEffect(() => {
    const result = _undefined.set(1);
  }, items);
  const obj = require("module_1652");
  const items1 = [closure_8, require("module_1652").withDelay, require("timing/timing").withTiming, sharedValue];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  [tmp6, tmp7, tmp8, tmp9] = items1;
  class NewMemberActionsCompletedModalTsx1 {
    constructor() {
      obj = { width: closure_0(500, closure_1(`${100 * closure_2.get()}%`, { duration: 700 })) };
      return obj;
    }
  }
  const items2 = [tmp7, tmp8, tmp9];
  NewMemberActionsCompletedModalTsx1.__closure = items2;
  NewMemberActionsCompletedModalTsx1.__workletHash = 7122689544809;
  NewMemberActionsCompletedModalTsx1.__initData = tmp6;
  const animatedStyle = require("module_1652").useAnimatedStyle(NewMemberActionsCompletedModalTsx1);
  const effect1 = noop.useEffect(() => {
    const timerId = setTimeout(() => _undefined2(6879).popWithKey(_undefined(7539).NEW_MEMBER_ACTION_COMPLETE_MODAL_KEY), 2500);
  }, []);
  const obj4 = { style: tmp.screen, children: null };
  const obj5 = { style: tmp.text, variant: "heading-xl/semibold", color: "text-overlay-light", children: null };
  const intl = tmp2(1113).intl;
  obj5.children = intl.format(require("util").t.pGj5u2, { count: numActions });
  const items3 = [closure_5(require("Text/Text").Text, obj5), ];
  const obj6 = { style: tmp.progressBackground, children: null };
  const obj7 = { style: null };
  const items4 = [tmp.progressForeground, animatedStyle];
  obj7.style = items4;
  obj6.children = closure_5(_modDef1652.View, obj7);
  items3[1] = closure_5(View, obj6);
  obj4.children = items3;
  return closure_6(View, obj4);
};