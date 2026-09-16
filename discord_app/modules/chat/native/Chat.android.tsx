// === Module 12037: Chat ===

// Module 12037 (Chat)
import initialize from "initialize" /* 504 */;
import LegacyBaseButton from "LegacyBaseButton" /* 6763 */;
import ChatNativeComponentDefault from "ChatNativeComponent" /* 11418 */;
import ChatListNativeComponentDefault from "ChatListNativeComponent" /* 12038 */;
import TTIFirstContentfulPaint from "TTIFirstContentfulPaint" /* 12039 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4630 */;

require = fn;
function DCDChatList() {
  const memo = noop.useMemo(() => {
    const Gesture = LegacyBaseButton.Gesture;
    const NativeResult = Gesture.Native();
    return Gesture.Native().disallowInterruption(true).shouldCancelWhenOutside(false);
  }, []);
  const obj = { gesture: memo, children: null };
  const obj2 = { style: closure_7().chatList, floatingChatInputEnabled: true, children: null };
  const tmp = closure_7();
  obj2.children = hasOwnProperty(TTIFirstContentfulPaint.TTIFirstContentfulPaint, { label: "chat_list_android" });
  obj.children = hasOwnProperty(ChatListNativeComponentDefault, obj2);
  return hasOwnProperty(LegacyBaseButton.GestureDetector, obj);
}
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4638);
let closure_7 = createStyles.createStyles({ chatList: { flex: 1 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/chat/native/Chat.android.tsx");

export default noop.forwardRef((children, ref) => {
  const items = [AccessibilityStore];
  const stateFromStores = initialize.useStateFromStores(items, () => roleStyle.roleStyle);
  const obj2 = {};
  const merged = Object.assign(children);
  obj2.roleStyle = stateFromStores;
  obj2.ref = ref;
  const items1 = [hasOwnProperty(DCDChatList, {}), children.children];
  obj2.children = items1;
  return timestampProducer(ChatNativeComponentDefault, obj2);
});