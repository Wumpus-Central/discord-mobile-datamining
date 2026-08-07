// discord_app/modules/chat/native/Chat.android.tsx
import importAllResult from "noop";
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { Directions } from "../../../../_runtime/05426_Directions.js";
import { initialize } from "../../../../discord_common/js/packages/flux/index.tsx";
import { __INTERNAL_VIEW_CONFIG } from "../../../../discord_common/js/packages/rtn-codegen/js/ChatListNativeComponent.tsx";
import { __INTERNAL_VIEW_CONFIG } from "../../../../discord_common/js/packages/rtn-codegen/js/ChatNativeComponent.tsx";
import { useIsMobileVisualRefreshExperimentEnabled } from "../../themes/experiments/MobileVisualRefreshExperiment.tsx";
import { TTIFirstContentfulPaint } from "../../tti_analytics/native/TTIFirstContentfulPaint.tsx";

let c5;
let closure_6;
const require = arg1;
function DCDChatList() {
  let obj = useIsMobileVisualRefreshExperimentEnabled;
  const memo = importAllResult.useMemo(() => {
    const Gesture = callback(table[5]).Gesture;
    const NativeResult = Gesture.Native();
    return Gesture.Native().disallowInterruption(true).shouldCancelWhenOutside(false);
  }, []);
  obj = { gesture: memo, children: null };
  obj = { style: callback3().chatList, floatingChatInputEnabled: obj.useMobileVisualRefreshConfig({ location: "DCDChatList" }).chatInputFloating, children: null };
  const tmp = callback3();
  obj[2] = callback(TTIFirstContentfulPaint.TTIFirstContentfulPaint, { label: "chat_list_android" });
  obj[1] = callback(__INTERNAL_VIEW_CONFIG, obj);
  return callback(Directions.GestureDetector, obj);
}
let c3 = importAllResult;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
let closure_7 = createCacheKey.createStyles({ chatList: { flex: 1 } });
const forwardRefResult = importAllResult.forwardRef((children, ref) => {
  let obj = initialize;
  const items = [maybeApplyNoTextColorForLightCustomTheme];
  const stateFromStores = obj.useStateFromStores(items, () => roleStyle.roleStyle);
  obj = {};
  const merged = Object.assign(children);
  obj.roleStyle = stateFromStores;
  obj.ref = ref;
  const items1 = [callback(DCDChatList, {}), children.children];
  obj.children = items1;
  return callback2(__INTERNAL_VIEW_CONFIG, obj);
});
const result = require("jsxProd").fileFinishedImporting("modules/chat/native/Chat.android.tsx");

export default forwardRefResult;