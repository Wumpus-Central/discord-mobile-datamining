// discord_app/modules/chat/native/Chat.android.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import useIsMobileVisualRefreshExperimentEnabled from "../../themes/experiments/MobileVisualRefreshExperiment.tsx";
import LegacyBaseButton from "../../../../_runtime/05617_LegacyBaseButton.js";
import __INTERNAL_VIEW_CONFIGDefault from "../../../../discord_common/js/packages/rtn-codegen/js/ChatNativeComponent.tsx";
import __INTERNAL_VIEW_CONFIGDefault2 from "../../../../discord_common/js/packages/rtn-codegen/js/ChatListNativeComponent.tsx";
import TTIFirstContentfulPaint from "../../tti_analytics/native/TTIFirstContentfulPaint.tsx";
import importAllResult from "../../../../_runtime/00019_noop.js";
import closure_4 from "../../a11y/AccessibilityStore.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
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
  obj[1] = callback(__INTERNAL_VIEW_CONFIGDefault2, obj);
  return callback(LegacyBaseButton.GestureDetector, obj);
}
let c3 = importAllResult;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
let closure_7 = createCacheKey.createStyles({ chatList: { flex: 1 } });
const forwardRefResult = importAllResult.forwardRef((children, ref) => {
  let obj = initialize;
  const items = [closure_4];
  const stateFromStores = obj.useStateFromStores(items, () => roleStyle.roleStyle);
  obj = {};
  const merged = Object.assign(children);
  obj.roleStyle = stateFromStores;
  obj.ref = ref;
  const items1 = [callback(DCDChatList, {}), children.children];
  obj.children = items1;
  return callback2(__INTERNAL_VIEW_CONFIGDefault, obj);
});
const result = require("set").fileFinishedImporting("modules/chat/native/Chat.android.tsx");

export default forwardRefResult;