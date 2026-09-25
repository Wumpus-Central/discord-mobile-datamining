// discord_app/modules/guild_onboarding_home/native/NewMemberActionsCompletedModal.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import ReanimatedRexport from "../../reanimated/ReanimatedRexport.tsx";
import timing from "../../../design/animation/reanimated/timing/timing.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const ReanimatedRexportDefault = ReanimatedRexport;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4829);
let obj2 = {
  screen: {
    flex: 1,
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  text: { marginBottom: 16 },
  progressBackground: null,
  progressForeground: null,
};
let size = {
  borderRadius: nativeDefault.radii.round,
  height: 8,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL,
  width: "60%",
};
obj2.progressBackground = size;
obj2.progressForeground = {
  backgroundColor: nativeDefault.unsafe_rawColors.GREEN_330,
  borderRadius: nativeDefault.radii.round,
  height: 8,
};
let closure_7 = createStyles.createStyles(obj2);
const __initData = {
  code: 'function NewMemberActionsCompletedModalTsx1(){const{withDelay,withTiming,barWidth}=this.__closure;return{width:withDelay(500,withTiming(barWidth.get()*100+"%",{duration:700}))};}',
};
size = fn(2);
let result = size.fileFinishedImporting("modules/guild_onboarding_home/native/NewMemberActionsCompletedModal.tsx");

export default function NewMemberActionsCompleted(arg0) {
  let sharedValue;
  ({ initialPercent, numActions } = arg0);
  const tmp = closure_7();
  sharedValue = sharedValue(4563).useSharedValue(initialPercent);
  const items = [sharedValue];
  const effect = noop.useEffect(() => {
    const result = sharedValue.set(1);
  }, items);
  let obj = sharedValue(4563);
  const fn = function b() {
    const obj = { width: null };
    const obj2 = ReanimatedRexport;
    obj.width = obj2.withDelay(500, timing.withTiming(`${100 * sharedValue.get()}%`, { duration: 700 }));
    return obj;
  };
  let obj2 = sharedValue(4563);
  fn.__closure = {
    withDelay: sharedValue(4563).withDelay,
    withTiming: sharedValue(4830).withTiming,
    barWidth: sharedValue,
  };
  fn.__workletHash = 7643178959760;
  fn.__initData = __initData;
  const animatedStyle = obj2.useAnimatedStyle(fn);
  const effect1 = noop.useEffect(() => {
    const timerId = setTimeout(
      () => closure_1_1(5032).popWithKey(sharedValue(11754).NEW_MEMBER_ACTION_COMPLETE_MODAL_KEY),
      2500,
    );
  }, []);
  const obj4 = { style: tmp.screen, children: null };
  const obj5 = { style: tmp.text, variant: "heading-xl/semibold", color: "text-overlay-light", children: null };
  const intl = sharedValue(1115).intl;
  obj5.children = intl.format(sharedValue(1115).t.pGj5u2, { count: numActions });
  const items1 = [closure_5(sharedValue(4825).Text, obj5)];
  const obj6 = { style: tmp.progressBackground, children: null };
  const obj7 = { style: null };
  const items2 = [tmp.progressForeground, animatedStyle];
  obj7.style = items2;
  obj6.children = closure_5(ReanimatedRexportDefault.View, obj7);
  items1[1] = closure_5(View, obj6);
  obj4.children = items1;
  return closure_6(View, obj4);
}
