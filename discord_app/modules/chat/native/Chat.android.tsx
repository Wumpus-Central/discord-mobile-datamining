// === Module 11073: DCDChatList ===

// Module 11073 (DCDChatList)
import initialize from "initialize" /* 589 */;
import useIsMobileVisualRefreshExperimentEnabled from "useIsMobileVisualRefreshExperimentEnabled" /* 1367 */;
import LegacyBaseButton from "LegacyBaseButton" /* 6377 */;
import __INTERNAL_VIEW_CONFIGDefault from "__INTERNAL_VIEW_CONFIG" /* 10474 */;
import __INTERNAL_VIEW_CONFIGDefault2 from "__INTERNAL_VIEW_CONFIG" /* 11074 */;
import TTIFirstContentfulPaint from "TTIFirstContentfulPaint" /* 11075 */;
import importAllResult from "noop" /* 19 */;
import closure_4 from "maybeApplyNoTextColorForLightCustomTheme" /* 4662 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

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