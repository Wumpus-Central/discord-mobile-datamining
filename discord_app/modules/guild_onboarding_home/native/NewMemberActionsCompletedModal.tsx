// discord_app/modules/guild_onboarding_home/native/NewMemberActionsCompletedModal.tsx
import ThemesDefault from "Themes" /* 712 */;
import _modDef4115 from "module_4115" /* 4115 */;
import closure_3 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

const require = arg1;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
createCacheKey = { screen: { flex: 1, position: "absolute", width: "100%", height: "100%", backgroundColor: "rgba(0, 0, 0, 0.8)", display: "flex", alignItems: "center", justifyContent: "center" }, text: { marginBottom: 16 }, progressBackground: null, progressForeground: null };
createCacheKey = { borderRadius: ThemesDefault.radii.round, height: 8, backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_NORMAL, width: "60%" };
createCacheKey[2] = createCacheKey;
createCacheKey[3] = { backgroundColor: ThemesDefault.unsafe_rawColors.GREEN_330, borderRadius: ThemesDefault.radii.round, height: 8 };
let closure_7 = createCacheKey.createStyles(createCacheKey);
let closure_8 = { code: "function NewMemberActionsCompletedModalTsx1(){const{withDelay,withTiming,barWidth}=this.__closure;return{width:withDelay(500,withTiming(barWidth.get()*100+\"%\",{duration:700}))};}" };
let obj1 = { backgroundColor: ThemesDefault.unsafe_rawColors.GREEN_330, borderRadius: ThemesDefault.radii.round, height: 8 };
let result = require("set").fileFinishedImporting("modules/guild_onboarding_home/native/NewMemberActionsCompletedModal.tsx");

export default function NewMemberActionsCompleted(arg0) {
  let sharedValue;
  ({ initialPercent, numActions } = arg0);
  const tmp = callback3();
  let obj = sharedValue(4115);
  sharedValue = obj.useSharedValue(initialPercent);
  const items = [sharedValue];
  const effect = React.useEffect(() => {
    const result = sharedValue.set(1);
  }, items);
  obj1 = sharedValue(4115);
  const fn = function b() {
    const obj = { width: null };
    const obj2 = sharedValue(closure_1_2[5]);
    obj[0] = obj2.withDelay(500, sharedValue(closure_1_2[6]).withTiming(`${100 * sharedValue.get()}%`, { duration: 700 }));
    return obj;
  };
  obj = { withDelay: sharedValue(4115).withDelay, withTiming: sharedValue(4664).withTiming, barWidth: sharedValue };
  fn.__closure = obj;
  fn.__workletHash = 7643178959760;
  fn.__initData = closure_8;
  const animatedStyle = obj1.useAnimatedStyle(fn);
  const effect1 = React.useEffect(() => {
    const timerId = setTimeout(() => callback2(5260).popWithKey(callback(11453).NEW_MEMBER_ACTION_COMPLETE_MODAL_KEY), 2500);
  }, []);
  obj = { style: tmp.screen, children: null };
  obj1 = { style: tmp.text, variant: "heading-xl/semibold", color: "text-overlay-light", children: null };
  const intl = sharedValue(1236).intl;
  obj1[3] = intl.format(sharedValue(1236).t.pGj5u2, { count: numActions });
  const items1 = [callback(sharedValue(4734).Text, obj1), ];
  const items2 = [tmp.progressForeground, animatedStyle];
  items1[1] = callback(View, { style: tmp.progressBackground, children: callback(_modDef4115.View, { style: items2 }) });
  obj[1] = items1;
  return callback2(View, obj);
};