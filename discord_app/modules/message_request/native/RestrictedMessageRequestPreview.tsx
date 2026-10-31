// === Module 18977: RestrictedMessageRequestPreview ===

// Module 18977 (RestrictedMessageRequestPreview)
import nativeDefault from "native" /* 575 */;
import useIsEmptyMessageRequestChat from "useIsEmptyMessageRequestChat" /* 14163 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 4863 */;
import MessageStore from "MessageStore" /* 6061 */;
import UserStore from "UserStore" /* 1383 */;

require = fn;
get_ActivityIndicator = fn(17);
({ ScrollView: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(5014);
let obj2 = { container: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW }, scroll: { flex: 1 }, hidden: { opacity: 0 }, scrollContent: null, scrollContentEmpty: null, emptyChat: null, footer: null };
let obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj2.scrollContent = { paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_8, paddingBottom: nativeDefault.space.PX_8 };
obj2.scrollContentEmpty = { flexGrow: 1 };
obj2.emptyChat = { flex: 1, justifyContent: "center" };
let obj4 = { paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_8, paddingBottom: nativeDefault.space.PX_8 };
obj2.footer = { paddingHorizontal: nativeDefault.space.PX_12 };
let closure_12 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/message_request/native/RestrictedMessageRequestPreview.tsx");

export default function RestrictedMessageRequestPreview(channelId) {
  channelId = channelId.channelId;
  let first;
  noop = undefined;
  c5 = undefined;
  isEmpty = undefined;
  let first1;
  const tmp = closure_12();
  const ref = noop.useRef(null);
  dependencyMap = noop.useRef(false);
  const tmp5 = first(noop.useState(false), 2);
  first = tmp5[0];
  noop = tmp5[1];
  const items = [MessageStore];
  const items1 = [channelId];
  const stateFromStoresObject = channelId(504).useStateFromStoresObject(items, () => {
    const messages = MessageStore.getMessages(channelId);
    const obj = { hasMessages: messages.length > 0, isEmpty: useIsEmptyMessageRequestChat.isEmptyLoadedChat(messages) };
    return obj;
  }, items1);
  ({ hasMessages: c5, isEmpty } = stateFromStoresObject);
  let obj = noop;
  const obj2 = channelId(504);
  const tmp7 = channelId;
  const items2 = [first1];
  const items3 = [channelId];
  const stateFromStores = channelId(504).useStateFromStores(items2, () => ChannelStore.getChannel(channelId), items3);
  first1 = undefined;
  if (stateFromStores != null) {
    const recipients = stateFromStores.recipients;
    if (recipients != null) {
      first1 = recipients[0];
    }
  }
  const obj3 = channelId(504);
  const items4 = [UserStore];
  const items5 = [first1];
  const stateFromStores1 = tmp7(504).useStateFromStores(items4, () => {
    let user;
    if (null != first1) {
      user = UserStore.getUser(tmp);
    }
    return user;
  }, items5);
  const items6 = [first];
  const effect = obj.useEffect(() => {
    if (!first) {
      const _setTimeout = setTimeout;
      const timeout = setTimeout(() => closure_1_4(true), 1000);
      return () => clearTimeout(closure_0);
    }
  }, items6);
  let tmp14Result = null;
  if (null != stateFromStores) {
    tmp14Result = null;
    if (null != stateFromStores1) {
      const obj4 = { style: tmp.container, children: null };
      const obj5 = { ref, style: null, contentContainerStyle: null, onScrollBeginDrag: null, onContentSizeChange: null, children: null };
      const items7 = [tmp.scroll, ];
      let hidden = null;
      if (!first) {
        hidden = null;
        if (!isEmpty) {
          hidden = tmp.hidden;
        }
      }
      items7[1] = hidden;
      obj5.style = items7;
      const items8 = [tmp.scrollContent, ];
      let scrollContentEmpty = null;
      if (isEmpty) {
        scrollContentEmpty = tmp.scrollContentEmpty;
      }
      items8[1] = scrollContentEmpty;
      obj5.contentContainerStyle = items8;
      obj5.onScrollBeginDrag = function onScrollBeginDrag() {
        closure_2.current = true;
      };
      obj5.onContentSizeChange = function onContentSizeChange() {
        if (!ref.current) {
          const current = ref.current;
          if (current != null) {
            current.scrollToEnd({ animated: false });
          }
        }
        let tmp4 = first;
        if (!first) {
          let tmp6 = !c5;
          if (!c5) {
            tmp6 = !isEmpty;
          }
          tmp4 = tmp6;
        }
        if (!tmp4) {
          const _requestAnimationFrame = requestAnimationFrame;
          const animationFrame = requestAnimationFrame(() => closure_1_4(true));
        }
      };
      const obj6 = { channel: stateFromStores, user: stateFromStores1 };
      const items9 = [closure_10(tmp2(18978), obj6), , ];
      const obj7 = { channelId };
      items9[1] = closure_10(tmp2(18980), obj7);
      let tmp19Result = null;
      if (isEmpty) {
        const obj8 = { style: tmp.emptyChat };
        tmp19Result = closure_10(tmp2(14191), obj8);
      }
      items9[2] = tmp19Result;
      obj5.children = items9;
      const items10 = [closure_11(c5, obj5), ];
      const obj9 = { style: null, children: null };
      const items11 = [tmp.footer, ];
      const obj10 = { paddingBottom: tmp2(575).space.PX_8 + ref(1625)().bottom };
      items11[1] = obj10;
      obj9.style = items11;
      const obj11 = { channel: stateFromStores };
      obj9.children = closure_10(tmp2(13998), obj11);
      items10[1] = closure_10(isEmpty, obj9);
      obj4.children = items10;
      tmp14Result = closure_11(tmp15, obj4);
    }
  }
  return tmp14Result;
};