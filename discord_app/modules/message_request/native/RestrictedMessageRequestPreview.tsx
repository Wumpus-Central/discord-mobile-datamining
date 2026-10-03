// === Module 17051: RestrictedMessageRequestPreview ===

// Module 17051 (RestrictedMessageRequestPreview)
import nativeDefault from "native" /* 587 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import MessageStore from "MessageStore" /* 5110 */;
import UserStore from "UserStore" /* 1377 */;

const require = fn;
get_ActivityIndicator = fn(17);
({ ScrollView: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(4890);
let obj2 = { container: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW }, scroll: { flex: 1 }, hidden: { opacity: 0 }, scrollContent: null, footer: null };
let obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj2.scrollContent = { paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_8, paddingBottom: nativeDefault.space.PX_8 };
let obj4 = { paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_8, paddingBottom: nativeDefault.space.PX_8 };
obj2.footer = { paddingHorizontal: nativeDefault.space.PX_12 };
let closure_12 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj5 = { paddingHorizontal: nativeDefault.space.PX_12 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/message_request/native/RestrictedMessageRequestPreview.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((channelId) => {
  const cResult = channelId(576).c(47);
  channelId = channelId.channelId;
  closure_12();
  const bottom = ref(1618)().bottom;
  const obj = channelId(576);
  const obj2 = noop;
  dependencyMap = noop.useRef(false);
  const tmp6 = first(noop.useState(false), 2);
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
    class C {
      constructor() {
        return closure_8.getMessages(channelId).length > 0;
      }
    }
    const items1 = [channelId];
    cResult[1] = channelId;
    cResult[2] = C;
    cResult[3] = items1;
    let tmp11 = items1;
  } else {
    class C {
      constructor() {
        return closure_8.getMessages(channelId).length > 0;
      }
    }
    tmp11 = cResult[3];
  }
  ref = noop.useRef(null);
  const stateFromStores = channelId(504).useStateFromStores(first1, C, tmp11);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    class C {
      constructor() {
        return closure_8.getMessages(channelId).length > 0;
      }
    }
    const items2 = [ChannelStore];
    cResult[4] = items2;
    const tmp13 = items2;
  } else {
    class C {
      constructor() {
        return closure_8.getMessages(channelId).length > 0;
      }
    }
  }
  if (cResult[5] !== channelId) {
    class C {
      constructor() {
        return closure_8.getMessages(channelId).length > 0;
      }
    }
    const items3 = [channelId];
    cResult[5] = channelId;
    cResult[6] = tmp16;
    cResult[7] = items3;
    let tmp15 = items3;
  } else {
    class C {
      constructor() {
        return closure_8.getMessages(channelId).length > 0;
      }
    }
    tmp15 = cResult[7];
  }
  const tmpResult = channelId(504);
  const stateFromStores1 = channelId(504).useStateFromStores(tmp13, tmp16, tmp15);
  if (stateFromStores1 != null) {
    class C {
      constructor() {
        return closure_8.getMessages(channelId).length > 0;
      }
    }
    if (tmp19 != null) {
      class C {
        constructor() {
          return closure_8.getMessages(channelId).length > 0;
        }
      }
    }
  }
  c6 = tmp18;
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    class C {
      constructor() {
        return closure_8.getMessages(channelId).length > 0;
      }
    }
    const items4 = [UserStore];
    cResult[8] = items4;
    const tmp20 = items4;
  } else {
    class C {
      constructor() {
        return closure_8.getMessages(channelId).length > 0;
      }
    }
  }
  if (cResult[9] !== undefined) {
    class C {
      constructor() {
        return closure_8.getMessages(channelId).length > 0;
      }
    }
    const items5 = [tmp18];
    cResult[9] = tmp18;
    cResult[10] = tmp23;
    cResult[11] = items5;
    let tmp22 = items5;
  } else {
    class C {
      constructor() {
        return closure_8.getMessages(channelId).length > 0;
      }
    }
    tmp22 = cResult[11];
  }
  const tmpResult3 = channelId(504);
  const stateFromStores2 = channelId(504).useStateFromStores(tmp20, tmp23, tmp22);
  if (cResult[12] !== first) {
    class U {
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
    cResult[13] = U;
    cResult[14] = items6;
    let tmp26 = items6;
  } else {
    class U {
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
    tmp26 = cResult[14];
  }
  const effect = obj2.useEffect(U, tmp26);
  if (null != stateFromStores1) {
    class U {
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
}) : ((channelId) => {
  channelId = channelId.channelId;
  let first;
  noop = undefined;
  const tmp = closure_12();
  const ref = noop.useRef(null);
  dependencyMap = noop.useRef(false);
  const tmp5 = first(noop.useState(false), 2);
  first = tmp5[0];
  noop = tmp5[1];
  const items = [MessageStore];
  const items1 = [channelId];
  closure_5 = channelId(504).useStateFromStores(items, () => MessageStore.getMessages(channelId).length > 0, items1);
  const obj = noop;
  const obj2 = channelId(504);
  const tmp7 = channelId;
  const items2 = [ChannelStore];
  const items3 = [channelId];
  const stateFromStores = channelId(504).useStateFromStores(items2, () => ChannelStore.getChannel(channelId), items3);
  let first1;
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
  let tmp13Result = null;
  if (null != stateFromStores) {
    tmp13Result = null;
    if (null != stateFromStores1) {
      const obj4 = { style: tmp.container, children: null };
      const obj5 = { ref, style: null, contentContainerStyle: null, onScrollBeginDrag: null, onContentSizeChange: null, children: null };
      const items7 = [tmp.scroll, ];
      let hidden = null;
      if (!first) {
        hidden = tmp.hidden;
      }
      items7[1] = hidden;
      obj5.style = items7;
      obj5.contentContainerStyle = tmp.scrollContent;
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
        let tmp4 = !first;
        if (!first) {
          tmp4 = closure_5;
        }
        if (tmp4) {
          const _requestAnimationFrame = requestAnimationFrame;
          const animationFrame = requestAnimationFrame(() => closure_1_4(true));
        }
      };
      const obj6 = { channel: stateFromStores, user: stateFromStores1 };
      const items8 = [closure_10(tmp2(17052), obj6), ];
      const obj7 = { channelId };
      items8[1] = closure_10(tmp2(17054), obj7);
      obj5.children = items8;
      const items9 = [closure_11(closure_5, obj5), ];
      const obj8 = { style: null, children: null };
      const items10 = [tmp.footer, ];
      const obj9 = { paddingBottom: tmp2(587).space.PX_8 + ref(1618)().bottom };
      items10[1] = obj9;
      obj8.style = items10;
      const obj10 = { channel: stateFromStores };
      obj8.children = closure_10(tmp2(12082), obj10);
      items9[1] = closure_10(first1, obj8);
      obj4.children = items9;
      tmp13Result = closure_11(tmp14, obj4);
    }
  }
  return tmp13Result;
});