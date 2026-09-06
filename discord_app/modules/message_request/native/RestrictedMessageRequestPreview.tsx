// discord_app/modules/message_request/native/RestrictedMessageRequestPreview.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import MessageStore from "../../../stores/MessageStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";

const require = fn;
get_ActivityIndicator = fn(17);
({ ScrollView: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
fn(4560);
let createStyles = { container: null, scroll: null, hidden: null, scrollContent: null, footer: null };
createStyles = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles.container = createStyles;
createStyles.scroll = { flex: 1 };
createStyles.hidden = { opacity: 0 };
createStyles.scrollContent = {
  paddingHorizontal: nativeDefault.space.PX_16,
  paddingTop: nativeDefault.space.PX_8,
  paddingBottom: nativeDefault.space.PX_8,
};
let obj1 = {
  paddingHorizontal: nativeDefault.space.PX_16,
  paddingTop: nativeDefault.space.PX_8,
  paddingBottom: nativeDefault.space.PX_8,
};
createStyles.footer = { paddingHorizontal: nativeDefault.space.PX_12 };
let closure_12 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/message_request/native/RestrictedMessageRequestPreview.tsx");

export default function RestrictedMessageRequestPreview(channelId) {
  channelId = channelId.channelId;
  let first;
  noop = undefined;
  const tmp = closure_12();
  let obj = noop;
  const ref = noop.useRef(null);
  dependencyMap = noop.useRef(false);
  const tmp5 = first(noop.useState(false), 2);
  first = tmp5[0];
  noop = tmp5[1];
  let obj1 = channelId(504);
  const items = [MessageStore];
  const items1 = [channelId];
  closure_5 = obj1.useStateFromStores(items, () => MessageStore.getMessages(channelId).length > 0, items1);
  let obj2 = channelId(504);
  const items2 = [ChannelStore];
  const items3 = [channelId];
  const stateFromStores = obj2.useStateFromStores(items2, () => ChannelStore.getChannel(channelId), items3);
  let first1;
  if (stateFromStores != null) {
    const recipients = stateFromStores.recipients;
    if (recipients != null) {
      first1 = recipients[0];
    }
  }
  const items4 = [UserStore];
  const items5 = [first1];
  const stateFromStores1 = channelId(504).useStateFromStores(
    items4,
    () => {
      let user;
      if (null != first1) {
        user = UserStore.getUser(tmp);
      }
      return user;
    },
    items5,
  );
  const items6 = [first];
  const effect = obj.useEffect(() => {
    if (!first) {
      const _setTimeout = setTimeout;
      const timeout = setTimeout(() => closure_1_4(true), 1000);
      return () => clearTimeout(closure_0);
    }
  }, items6);
  let tmp13Result = null;
  if (null != stateFromStores) {
    tmp13Result = null;
    if (null != stateFromStores1) {
      obj = { style: tmp.container, children: null };
      obj = {
        ref,
        style: null,
        contentContainerStyle: null,
        onScrollBeginDrag: null,
        onContentSizeChange: null,
        children: null,
      };
      const items7 = [tmp.scroll];
      let hidden = null;
      if (!first) {
        hidden = tmp.hidden;
      }
      items7[1] = hidden;
      obj.style = items7;
      obj.contentContainerStyle = tmp.scrollContent;
      obj.onScrollBeginDrag = function onScrollBeginDrag() {
        closure_2.current = true;
      };
      obj.onContentSizeChange = function onContentSizeChange() {
        if (!ref.current) {
          const current = ref.current;
          if (current != null) {
            current.scrollToEnd({ animated: false });
          }
        }
        let tmp4 = !first;
        if (!first) {
          tmp4 = closure_5;
        }
        if (tmp4) {
          const _requestAnimationFrame = requestAnimationFrame;
          const animationFrame = requestAnimationFrame(() => closure_1_4(true));
        }
      };
      obj1 = { channel: stateFromStores, user: stateFromStores1 };
      const items8 = [closure_10(tmp2(16896), obj1)];
      obj2 = { channelId };
      items8[1] = closure_10(tmp2(16898), obj2);
      obj.children = items8;
      const items9 = [closure_11(closure_5, obj)];
      const obj3 = { style: null, children: null };
      const items10 = [tmp.footer];
      const obj4 = { paddingBottom: tmp2(576).space.PX_8 + ref(1611)().bottom };
      items10[1] = obj4;
      obj3.style = items10;
      const obj5 = { channel: stateFromStores };
      obj3.children = closure_10(tmp2(12439), obj5);
      items9[1] = closure_10(first1, obj3);
      obj.children = items9;
      tmp13Result = tmp13(tmp14, obj);
    }
  }
  return tmp13Result;
}
