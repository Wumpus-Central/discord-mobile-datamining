// === Module 17371: NewMemberActionsCompletedModal ===

// Module 17371 (NewMemberActionsCompletedModal)
import nativeDefault from "native" /* 576 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4296 */;
import timing from "timing" /* 4561 */;
import noop from "module_19" /* 19 */;

const ReanimatedRexportDefault = ReanimatedRexport;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
fn(4560);
let createStyles = { screen: { flex: 1, position: "absolute", width: "100%", height: "100%", backgroundColor: "rgba(0, 0, 0, 0.8)", display: "flex", alignItems: "center", justifyContent: "center" }, text: { marginBottom: 16 }, progressBackground: null, progressForeground: null };
let size = { borderRadius: nativeDefault.radii.round, height: 8, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL, width: "60%" };
createStyles.progressBackground = size;
createStyles = { backgroundColor: nativeDefault.unsafe_rawColors.GREEN_330, borderRadius: nativeDefault.radii.round, height: 8 };
createStyles.progressForeground = createStyles;
let closure_7 = createStyles.createStyles(createStyles);
const __initData = { code: "function NewMemberActionsCompletedModalTsx1(){const{withDelay,withTiming,barWidth}=this.__closure;return{width:withDelay(500,withTiming(barWidth.get()*100+\"%\",{duration:700}))};}" };
size = fn(2);
let result = size.fileFinishedImporting("modules/guild_onboarding_home/native/NewMemberActionsCompletedModal.tsx");

export default function NewMemberActionsCompleted(arg0) {
  let sharedValue;
  ({ initialPercent, numActions } = arg0);
  const tmp = closure_7();
  let obj = sharedValue(4296);
  sharedValue = obj.useSharedValue(initialPercent);
  const items = [sharedValue];
  const effect = noop.useEffect(() => {
    const result = sharedValue.set(1);
  }, items);
  let obj1 = sharedValue(4296);
  const fn = function b() {
    const obj = { width: null };
    const obj2 = ReanimatedRexport;
    obj.width = obj2.withDelay(500, timing.withTiming(`${100 * sharedValue.get()}%`, { duration: 700 }));
    return obj;
  };
  obj = { withDelay: sharedValue(4296).withDelay, withTiming: sharedValue(4561).withTiming, barWidth: sharedValue };
  fn.__closure = obj;
  fn.__workletHash = 7643178959760;
  fn.__initData = __initData;
  const animatedStyle = obj1.useAnimatedStyle(fn);
  const effect1 = noop.useEffect(() => {
    const timerId = setTimeout(() => closure_1_1(4763).popWithKey(sharedValue(12285).NEW_MEMBER_ACTION_COMPLETE_MODAL_KEY), 2500);
  }, []);
  obj = { style: tmp.screen, children: null };
  obj1 = { style: tmp.text, variant: "heading-xl/semibold", color: "text-overlay-light", children: null };
  const intl = sharedValue(1114).intl;
  obj1.children = intl.format(sharedValue(1114).t.pGj5u2, { count: numActions });
  const items1 = [closure_5(sharedValue(4556).Text, obj1), ];
  let obj2 = { style: tmp.progressBackground, children: null };
  const obj3 = { style: null };
  const items2 = [tmp.progressForeground, animatedStyle];
  obj3.style = items2;
  obj2.children = closure_5(ReanimatedRexportDefault.View, obj3);
  items1[1] = closure_5(View, obj2);
  obj.children = items1;
  return closure_6(View, obj);
};