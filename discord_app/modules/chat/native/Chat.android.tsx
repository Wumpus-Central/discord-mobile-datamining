// === Module 13312: Chat ===

// Module 13312 (Chat)
import initialize from "initialize" /* 504 */;
import ChatNativeComponentDefault from "ChatNativeComponent" /* 10109 */;
import ChatListNativeComponentDefault from "ChatListNativeComponent" /* 13319 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5015 */;

require = fn;
function DCDChatList() {
  const tmp = closure_7();
  navigationTTIContentPainted = navigationTTIContentPainted(13313).useNavigationTTIContentPainted();
  const items = [navigationTTIContentPainted];
  const memo = noop.useMemo(() => {
    const Gesture = navigationTTIContentPainted(dependencyMap[5]).Gesture;
    const NativeResult = Gesture.Native();
    return Gesture.Native().disallowInterruption(true).shouldCancelWhenOutside(false);
  }, []);
  const callback = noop.useCallback((nativeEvent) => navigationTTIContentPainted(nativeEvent.nativeEvent), items);
  const obj2 = { gesture: memo, children: null };
  const obj3 = { style: tmp.chatList, floatingChatInputEnabled: true, onContentPaintStateChange: callback, children: null };
  const obj = navigationTTIContentPainted(13313);
  obj3.children = closure_5(navigationTTIContentPainted(13320).TTIFirstContentfulPaint, { label: "chat_list_android" });
  obj2.children = closure_5(ChatListNativeComponentDefault, obj3);
  return closure_5(navigationTTIContentPainted(5303).GestureDetector, obj2);
}
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(5014);
let closure_7 = createStyles.createStyles({ chatList: { flex: 1 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/chat/native/Chat.android.tsx");

export default function Chat(ref) {
  const merged = Object.assign(ref, Object.assign({ ref: 0 }));
  const items = [AccessibilityStore];
  const stateFromStores = initialize.useStateFromStores(items, () => roleStyle.roleStyle);
  const obj2 = {};
  const merged1 = Object.assign(merged);
  obj2.roleStyle = stateFromStores;
  obj2.ref = ref.ref;
  const items1 = [hasOwnProperty(DCDChatList, {}), merged.children];
  obj2.children = items1;
  return timestampProducer(ChatNativeComponentDefault, obj2);
};