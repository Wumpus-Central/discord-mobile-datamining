// discord_app/modules/chat/native/Chat.android.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import LegacyBaseButton from "../../../../_runtime/06655_LegacyBaseButton.js";
import ChatNativeComponentDefault from "../../../../discord_common/js/packages/rtn-codegen/js/ChatNativeComponent.tsx";
import ChatListNativeComponentDefault from "../../../../discord_common/js/packages/rtn-codegen/js/ChatListNativeComponent.tsx";
import TTIFirstContentfulPaint from "../../tti_analytics/native/TTIFirstContentfulPaint.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../a11y/AccessibilityStore.tsx";

require = fn;
function DCDChatList() {
  const memo = noop.useMemo(() => {
    const Gesture = LegacyBaseButton.Gesture;
    const NativeResult = Gesture.Native();
    return Gesture.Native().disallowInterruption(true).shouldCancelWhenOutside(false);
  }, []);
  let obj = { gesture: memo, children: null };
  obj = { style: closure_7().chatList, floatingChatInputEnabled: true, children: null };
  const tmp = closure_7();
  obj.children = hasOwnProperty(TTIFirstContentfulPaint.TTIFirstContentfulPaint, { label: "chat_list_android" });
  obj.children = hasOwnProperty(ChatListNativeComponentDefault, obj);
  return hasOwnProperty(LegacyBaseButton.GestureDetector, obj);
}
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4560);
let closure_7 = createStyles.createStyles({ chatList: { flex: 1 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/chat/native/Chat.android.tsx");

export default noop.forwardRef((children, ref) => {
  let obj = initialize;
  const items = [AccessibilityStore];
  const stateFromStores = obj.useStateFromStores(items, () => roleStyle.roleStyle);
  obj = {};
  const merged = Object.assign(children);
  obj.roleStyle = stateFromStores;
  obj.ref = ref;
  const items1 = [hasOwnProperty(DCDChatList, {}), children.children];
  obj.children = items1;
  return timestampProducer(ChatNativeComponentDefault, obj);
});
