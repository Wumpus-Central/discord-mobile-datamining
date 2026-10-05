// === Module 17075: RestrictedMessageRequestPreview ===

// Module 17075 (RestrictedMessageRequestPreview)
import nativeDefault from "native" /* 587 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import MessageStore from "MessageStore" /* 5110 */;
import UserStore from "UserStore" /* 1377 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let channelId, dependencyMap, num;

let c10;
let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let obj4;
let unpackModuleId;
let react = react_mod;
({ ScrollView: hasOwnProperty, View: metroRequire } = react_native);
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, scroll: { flex: 1 }, hidden: { opacity: 0 }, scrollContent: obj3, footer: obj4 };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles = createStyles.createStyles;
obj3 = { paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_8, paddingBottom: nativeDefault.space.PX_8 };
obj4 = { paddingHorizontal: nativeDefault.space.PX_12 };
let closure_12 = createStyles(obj);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((channelId) => {
  let closure_4;
  let first;
  let first1;
  let ref;
  let tmp11;
  let tmp13;
  let tmp15;
  let tmp20;
  let tmp22;
  let tmp26;
  const tmp = channelId;
  const obj = channelId(576);
  const cResult = obj.c(47);
  channelId = channelId.channelId;
  let tmp4 = closure_12();
  const bottom = ref(1618)().bottom;
  ref = react.useRef(null);
  dependencyMap = react.useRef(false);
  const tmp6 = first(react.useState(false), 2);
  first = tmp6[0];
  const obj2 = react;
  react = tmp6[1];
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [MessageStore];
    cResult[0] = items;
    first1 = items;
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
    tmp11 = items1;
  } else {
    class C {
      constructor() {
        return closure_8.getMessages(channelId).length > 0;
      }
    }
    tmp11 = cResult[3];
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(first1, C, tmp11);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    class C {
      constructor() {
        return closure_8.getMessages(channelId).length > 0;
      }
    }
    const items2 = [ChannelStore];
    cResult[4] = items2;
    tmp13 = items2;
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
    tmp15 = items3;
  } else {
    class C {
      constructor() {
        return closure_8.getMessages(channelId).length > 0;
      }
    }
    tmp15 = cResult[7];
  }
  const tmpResult3 = tmp(504);
  const stateFromStores1 = tmpResult3.useStateFromStores(tmp13, tmp16, tmp15);
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
  let c6 = tmp18;
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    class C {
      constructor() {
        return closure_8.getMessages(channelId).length > 0;
      }
    }
    const items4 = [UserStore];
    cResult[8] = items4;
    tmp20 = items4;
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
    const items5 = [undefined];
    cResult[9] = undefined;
    cResult[10] = tmp23;
    cResult[11] = items5;
    tmp22 = items5;
  } else {
    class C {
      constructor() {
        return closure_8.getMessages(channelId).length > 0;
      }
    }
    tmp22 = cResult[11];
  }
  const tmpResult4 = tmp(504);
  const stateFromStores2 = tmpResult4.useStateFromStores(tmp20, tmp23, tmp22);
  if (cResult[12] !== first) {
    class U {
      constructor() {
        if (closure_3) {
          return;
        } else {
          tmp = globalThis;
          _setTimeout = setTimeout;
          num = 1000;
          closure_0 = setTimeout(() => { /* body not rendered: F147939 */ }, 1000);
          return () => { /* body not rendered: F147940 */ };
        }
      }
    }
    const items6 = [first];
    cResult[12] = first;
    cResult[13] = U;
    cResult[14] = items6;
    tmp26 = items6;
  } else {
    class U {
      constructor() {
        if (closure_3) {
          return;
        } else {
          tmp = globalThis;
          _setTimeout = setTimeout;
          num = 1000;
          closure_0 = setTimeout(() => { /* body not rendered: F147939 */ }, 1000);
          return () => { /* body not rendered: F147940 */ };
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
          closure_0 = setTimeout(() => { /* body not rendered: F147939 */ }, 1000);
          return () => { /* body not rendered: F147940 */ };
        }
      }
    }
  }
  return null;
}) : ((channelId) => {
  let closure_4;
  let items10;
  let items7;
  let items8;
  let items9;
  let obj10;
  channelId = channelId.channelId;
  let ref;
  let first;
  react = undefined;
  const tmp = closure_12();
  const bottom = ref(1618)().bottom;
  ref = react.useRef(null);
  dependencyMap = react.useRef(false);
  const tmp5 = first(react.useState(false), 2);
  first = tmp5[0];
  const obj = react;
  react = tmp5[1];
  const items = [MessageStore];
  const items1 = [channelId];
  const obj2 = channelId(504);
  let closure_5 = obj2.useStateFromStores(items, () => MessageStore.getMessages(channelId).length > 0, items1);
  const items2 = [ChannelStore];
  const items3 = [channelId];
  const obj3 = channelId(504);
  const stateFromStores = obj3.useStateFromStores(items2, () => ChannelStore.getChannel(channelId), items3);
  let first1;
  const tmp7 = channelId;
  if (stateFromStores != null) {
    const recipients = stateFromStores.recipients;
    if (recipients != null) {
      first1 = recipients[0];
    }
  }
  const items4 = [UserStore];
  const items5 = [first1];
  const tmp7Result = tmp7(504);
  const stateFromStores1 = tmp7Result.useStateFromStores(items4, () => {
    let user;
    if (null != first1) {
      user = UserStore.getUser(tmp);
    }
    return user;
  }, items5);
  const items6 = [first];
  const effect = obj.useEffect(() => {
    let closure_0;
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
      const obj5 = {
        ref,
        style: items7,
        contentContainerStyle: tmp.scrollContent,
        onScrollBeginDrag() {
              ref.current = true;
            },
        onContentSizeChange() {
              if (!ref.current) {
                const current = ref.current;
                if (current != null) {
                  current.scrollToEnd({ animated: false });
                }
              }
              const tmp4 = !first && closure_5;
              if (tmp4) {
                const _requestAnimationFrame = requestAnimationFrame;
                const animationFrame = requestAnimationFrame(() => closure_1_4(true));
              }
            },
        children: items8
      };
      items7 = [tmp.scroll, ];
      let hidden = null;
      const obj4 = { style: tmp.container, children: items9 };
      const tmp15 = closure_5;
      if (!first) {
        hidden = tmp.hidden;
      }
      items7[1] = hidden;
      const obj6 = { channel: stateFromStores, user: stateFromStores1 };
      items8 = [closure_10(tmp2(17076), obj6), ];
      const obj7 = { channelId };
      items8[1] = closure_10(ref(17078), obj7);
      items9 = [closure_11(tmp15, obj5), ];
      const obj8 = { style: items10, children: closure_10(ref(12082), obj10) };
      items10 = [tmp.footer, ];
      items10[1] = { paddingBottom: ref(587).space.PX_8 + bottom };
      obj10 = { channel: stateFromStores };
      const obj9 = { paddingBottom: ref(587).space.PX_8 + bottom };
      items9[1] = closure_10(first1, obj8);
      tmp13Result = closure_11(tmp14, obj4);
    }
  }
  return tmp13Result;
});
const result = size.fileFinishedImporting("modules/message_request/native/RestrictedMessageRequestPreview.tsx");

export default tmp5;