import noop from "noop";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c5;
let closure_6;
const require = arg1;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
createCacheKey = { screen: { flex: 1, position: "absolute", width: "100%", height: "100%", backgroundColor: "rgba(0, 0, 0, 0.8)", display: "flex", alignItems: "center", justifyContent: "center" }, text: { marginBottom: 16 }, progressBackground: null, progressForeground: null };
createCacheKey = { borderRadius: require("Themes").radii.round, height: 8, backgroundColor: require("Themes").colors.BACKGROUND_MOD_NORMAL, width: "60%" };
createCacheKey[2] = createCacheKey;
createCacheKey[3] = { backgroundColor: require("Themes").unsafe_rawColors.GREEN_330, borderRadius: require("Themes").radii.round, height: 8 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let closure_8 = { code: "function NewMemberActionsCompletedModalTsx1(){const{withDelay,withTiming,barWidth}=this.__closure;return{width:withDelay(500,withTiming(barWidth.get()*100+\"%\",{duration:700}))};}" };
let obj1 = { backgroundColor: require("Themes").unsafe_rawColors.GREEN_330, borderRadius: require("Themes").radii.round, height: 8 };
let result = require("jsxProd").fileFinishedImporting("modules/guild_onboarding_home/native/NewMemberActionsCompletedModal.tsx");

export default function NewMemberActionsCompleted(arg0) {
  let initialPercent;
  let numActions;
  let sharedValue;
  ({ initialPercent, numActions } = arg0);
  const tmp = createCacheKey();
  let obj = sharedValue(4054);
  sharedValue = obj.useSharedValue(initialPercent);
  const items = [sharedValue];
  const effect = React.useEffect(() => {
    const result = sharedValue.set(1);
  }, items);
  let obj1 = sharedValue(4054);
  const fn = function b() {
    const obj = { width: null };
    const obj2 = sharedValue(outer1_2[5]);
    obj[0] = obj2.withDelay(500, sharedValue(outer1_2[6]).withTiming(`${100 * sharedValue.get()}%`, { duration: 700 }));
    return obj;
  };
  obj = { withDelay: sharedValue(4054).withDelay, withTiming: sharedValue(4194).withTiming, barWidth: sharedValue };
  fn.__closure = obj;
  fn.__workletHash = 7643178959760;
  fn.__initData = closure_8;
  const animatedStyle = obj1.useAnimatedStyle(fn);
  const effect1 = React.useEffect(() => {
    const timerId = setTimeout(() => callback2(4399).popWithKey(callback(11453).NEW_MEMBER_ACTION_COMPLETE_MODAL_KEY), 2500);
  }, []);
  obj = { style: tmp.screen, children: null };
  obj1 = { style: tmp.text, variant: "heading-xl/semibold", color: "text-overlay-light", children: null };
  const intl = sharedValue(1236).intl;
  obj1[3] = intl.format(sharedValue(1236).t.pGj5u2, { count: numActions });
  const items1 = [callback(sharedValue(4189).Text, obj1), ];
  const items2 = [tmp.progressForeground, animatedStyle];
  items1[1] = callback(View, { style: tmp.progressBackground, children: callback(importDefault(4054).View, { style: items2 }) });
  obj[1] = items1;
  return callback2(View, obj);
};