// === Module 11894: Chat ===

// Module 11894 (Chat)
import initialize from "initialize" /* 504 */;
import LegacyBaseButton from "LegacyBaseButton" /* 6655 */;
import ChatNativeComponentDefault from "ChatNativeComponent" /* 11272 */;
import ChatListNativeComponentDefault from "ChatListNativeComponent" /* 11895 */;
import TTIFirstContentfulPaint from "TTIFirstContentfulPaint" /* 11896 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4552 */;

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