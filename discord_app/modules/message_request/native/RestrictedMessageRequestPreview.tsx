// discord_app/modules/message_request/native/RestrictedMessageRequestPreview.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import useIsEmptyMessageRequestChat from "../hooks/useIsEmptyMessageRequestChat.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import MessageStore from "../../../stores/MessageStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";

require = fn;
get_ActivityIndicator = fn(17);
({ ScrollView: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(4966);
let obj2 = { container: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW }, scroll: { flex: 1 }, hidden: { opacity: 0 }, scrollContent: null, scrollContentEmpty: null, emptyChat: null, footer: null };
let obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj2.scrollContent = { paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_8, paddingBottom: nativeDefault.space.PX_8 };
obj2.scrollContentEmpty = { flexGrow: 1 };
obj2.emptyChat = { flex: 1, justifyContent: "center" };
let obj4 = { paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_8, paddingBottom: nativeDefault.space.PX_8 };
obj2.footer = { paddingHorizontal: nativeDefault.space.PX_12 };
let closure_12 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj5 = { paddingHorizontal: nativeDefault.space.PX_12 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/message_request/native/RestrictedMessageRequestPreview.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function RestrictedMessageRequestPreview(channelId) {
  const cResult = channelId(576).c(55);
  channelId = channelId.channelId;
  closure_12();
  const bottom = ref(1633)().bottom;
  let obj = channelId(576);
  const obj2 = noop;
  dependencyMap = noop.useRef(false);
  let tmp6 = first(noop.useState(false), 2);
  first = tmp6[0];
  noop = tmp6[1];
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [MessageStore];
    cResult[0] = items;
    let first1 = items;
  } else {
    first1 = cResult[0];
  }
  if (cResult[1] !== channelId) {
    class S {
      constructor() {
        messages = closure_8.getMessages(channelId);
        obj = { hasMessages: messages.length > 0, isEmpty: null };
        obj2 = closure_0(closure_2[12]);
        obj.isEmpty = obj2.isEmptyLoadedChat(messages);
        return obj;
      }
    }
    const items1 = [channelId];
    cResult[1] = channelId;
    cResult[2] = S;
    cResult[3] = items1;
    let tmp11 = items1;
  } else {
    class S {
      constructor() {
        messages = closure_8.getMessages(channelId);
        obj = { hasMessages: messages.length > 0, isEmpty: null };
        obj2 = closure_0(closure_2[12]);
        obj.isEmpty = obj2.isEmptyLoadedChat(messages);
        return obj;
      }
    }
    tmp11 = cResult[3];
  }
  ref = noop.useRef(null);
  const stateFromStoresObject = channelId(504).useStateFromStoresObject(first1, S, tmp11);
  const hasMessages = stateFromStoresObject.hasMessages;
  const isEmpty = stateFromStoresObject.isEmpty;
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    class S {
      constructor() {
        messages = closure_8.getMessages(channelId);
        obj = { hasMessages: messages.length > 0, isEmpty: null };
        obj2 = closure_0(closure_2[12]);
        obj.isEmpty = obj2.isEmptyLoadedChat(messages);
        return obj;
      }
    }
    const items2 = [c7];
    cResult[4] = items2;
    const tmp13 = items2;
  } else {
    class S {
      constructor() {
        messages = closure_8.getMessages(channelId);
        obj = { hasMessages: messages.length > 0, isEmpty: null };
        obj2 = closure_0(closure_2[12]);
        obj.isEmpty = obj2.isEmptyLoadedChat(messages);
        return obj;
      }
    }
  }
  if (cResult[5] !== channelId) {
    class S {
      constructor() {
        messages = closure_8.getMessages(channelId);
        obj = { hasMessages: messages.length > 0, isEmpty: null };
        obj2 = closure_0(closure_2[12]);
        obj.isEmpty = obj2.isEmptyLoadedChat(messages);
        return obj;
      }
    }
    const items3 = [channelId];
    cResult[5] = channelId;
    cResult[6] = tmp16;
    cResult[7] = items3;
    let tmp15 = items3;
  } else {
    class S {
      constructor() {
        messages = closure_8.getMessages(channelId);
        obj = { hasMessages: messages.length > 0, isEmpty: null };
        obj2 = closure_0(closure_2[12]);
        obj.isEmpty = obj2.isEmptyLoadedChat(messages);
        return obj;
      }
    }
    tmp15 = cResult[7];
  }
  const tmpResult = channelId(504);
  const stateFromStores = channelId(504).useStateFromStores(tmp13, tmp16, tmp15);
  if (stateFromStores != null) {
    class S {
      constructor() {
        messages = closure_8.getMessages(channelId);
        obj = { hasMessages: messages.length > 0, isEmpty: null };
        obj2 = closure_0(closure_2[12]);
        obj.isEmpty = obj2.isEmptyLoadedChat(messages);
        return obj;
      }
    }
    if (tmp19 != null) {
      class S {
        constructor() {
          messages = closure_8.getMessages(channelId);
          obj = { hasMessages: messages.length > 0, isEmpty: null };
          obj2 = closure_0(closure_2[12]);
          obj.isEmpty = obj2.isEmptyLoadedChat(messages);
          return obj;
        }
      }
    }
  }
  c7 = tmp18;
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    class S {
      constructor() {
        messages = closure_8.getMessages(channelId);
        obj = { hasMessages: messages.length > 0, isEmpty: null };
        obj2 = closure_0(closure_2[12]);
        obj.isEmpty = obj2.isEmptyLoadedChat(messages);
        return obj;
      }
    }
    const items4 = [UserStore];
    cResult[8] = items4;
    const tmp20 = items4;
  } else {
    class S {
      constructor() {
        messages = closure_8.getMessages(channelId);
        obj = { hasMessages: messages.length > 0, isEmpty: null };
        obj2 = closure_0(closure_2[12]);
        obj.isEmpty = obj2.isEmptyLoadedChat(messages);
        return obj;
      }
    }
  }
  if (cResult[9] !== undefined) {
    class A {
      constructor() {
        user = undefined;
        if (null != closure_7) {
          tmp3 = closure_9;
          user = closure_9.getUser(tmp);
        }
        return user;
      }
    }
    const items5 = [tmp18];
    cResult[9] = tmp18;
    cResult[10] = A;
    cResult[11] = items5;
    let tmp22 = items5;
  } else {
    class A {
      constructor() {
        user = undefined;
        if (null != closure_7) {
          tmp3 = closure_9;
          user = closure_9.getUser(tmp);
        }
        return user;
      }
    }
    tmp22 = cResult[11];
  }
  const tmpResult3 = channelId(504);
  const stateFromStores1 = channelId(504).useStateFromStores(tmp20, A, tmp22);
  if (cResult[12] !== first) {
    class G {
      constructor() {
        if (closure_3) {
          return;
        } else {
          tmp = globalThis;
          _setTimeout = setTimeout;
          num = 1000;
          closure_0 = setTimeout(() => { ... }, 1000);
          return () => { ... };
        }
      }
    }
    const items6 = [first];
    cResult[12] = first;
    cResult[13] = G;
    cResult[14] = items6;
    let tmp25 = items6;
  } else {
    class G {
      constructor() {
        if (closure_3) {
          return;
        } else {
          tmp = globalThis;
          _setTimeout = setTimeout;
          num = 1000;
          closure_0 = setTimeout(() => { ... }, 1000);
          return () => { ... };
        }
      }
    }
    tmp25 = cResult[14];
  }
  const effect = obj2.useEffect(G, tmp25);
  if (null != stateFromStores) {
    class G {
      constructor() {
        if (closure_3) {
          return;
        } else {
          tmp = globalThis;
          _setTimeout = setTimeout;
          num = 1000;
          closure_0 = setTimeout(() => { ... }, 1000);
          return () => { ... };
        }
      }
    }
  }
  return null;
}) : (function RestrictedMessageRequestPreview(channelId) {
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
      const items9 = [closure_10(tmp2(18179), obj6), , ];
      const obj7 = { channelId };
      items9[1] = closure_10(tmp2(18181), obj7);
      let tmp19Result = null;
      if (isEmpty) {
        const obj8 = { style: tmp.emptyChat };
        tmp19Result = closure_10(tmp2(13441), obj8);
      }
      items9[2] = tmp19Result;
      obj5.children = items9;
      const items10 = [closure_11(c5, obj5), ];
      const obj9 = { style: null, children: null };
      const items11 = [tmp.footer, ];
      const obj10 = { paddingBottom: tmp2(587).space.PX_8 + ref(1633)().bottom };
      items11[1] = obj10;
      obj9.style = items11;
      const obj11 = { channel: stateFromStores };
      obj9.children = closure_10(tmp2(13233), obj11);
      items10[1] = closure_10(isEmpty, obj9);
      obj4.children = items10;
      tmp14Result = closure_11(tmp15, obj4);
    }
  }
  return tmp14Result;
});