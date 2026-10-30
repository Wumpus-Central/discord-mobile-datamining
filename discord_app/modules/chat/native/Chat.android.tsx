// discord_app/modules/chat/native/Chat.android.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import ChatNativeComponentDefault from "../../../../discord_common/js/packages/rtn-codegen/js/ChatNativeComponent.tsx";
import ChatListNativeComponentDefault from "../../../../discord_common/js/packages/rtn-codegen/js/ChatListNativeComponent.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../a11y/AccessibilityStore.tsx";

require = fn;
function DCDChatList() {
  const tmp = closure_7();
  navigationTTIContentPainted = navigationTTIContentPainted(13278).useNavigationTTIContentPainted();
  const items = [navigationTTIContentPainted];
  const memo = noop.useMemo(() => {
    const Gesture = navigationTTIContentPainted(dependencyMap[5]).Gesture;
    const NativeResult = Gesture.Native();
    return Gesture.Native().disallowInterruption(true).shouldCancelWhenOutside(false);
  }, []);
  const callback = noop.useCallback((nativeEvent) => navigationTTIContentPainted(nativeEvent.nativeEvent), items);
  const obj2 = { gesture: memo, children: null };
  const obj3 = {
    style: tmp.chatList,
    floatingChatInputEnabled: true,
    onContentPaintStateChange: callback,
    children: null,
  };
  const obj = navigationTTIContentPainted(13278);
  obj3.children = closure_5(navigationTTIContentPainted(13285).TTIFirstContentfulPaint, { label: "chat_list_android" });
  obj2.children = closure_5(ChatListNativeComponentDefault, obj3);
  return closure_5(navigationTTIContentPainted(5298).GestureDetector, obj2);
}
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(5009);
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
}
