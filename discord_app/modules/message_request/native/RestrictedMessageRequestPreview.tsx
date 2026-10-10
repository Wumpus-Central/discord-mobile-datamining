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
const createStyles = fn(5092);
let obj2 = {
  container: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW },
  scroll: { flex: 1 },
  hidden: { opacity: 0 },
  scrollContent: null,
  footer: null,
};
let obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj2.scrollContent = {
  paddingHorizontal: nativeDefault.space.PX_16,
  paddingTop: nativeDefault.space.PX_8,
  paddingBottom: nativeDefault.space.PX_8,
};
let obj4 = {
  paddingHorizontal: nativeDefault.space.PX_16,
  paddingTop: nativeDefault.space.PX_8,
  paddingBottom: nativeDefault.space.PX_8,
};
obj2.footer = { paddingHorizontal: nativeDefault.space.PX_12 };
let closure_12 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj5 = { paddingHorizontal: nativeDefault.space.PX_12 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/message_request/native/RestrictedMessageRequestPreview.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function RestrictedMessageRequestPreview(channelId) {
      const cResult = channelId(576).c(47);
      channelId = channelId.channelId;
      closure_12();
      const bottom = ref(1631)().bottom;
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
        const fn = function v() {
          return MessageStore.getMessages(channelId).length > 0;
        };
        const items1 = [channelId];
        cResult[1] = channelId;
        cResult[2] = fn;
        cResult[3] = items1;
        let tmp11 = items1;
        let tmp10 = fn;
      } else {
        tmp10 = cResult[2];
        tmp11 = cResult[3];
      }
      ref = noop.useRef(null);
      const stateFromStores = channelId(504).useStateFromStores(first1, tmp10, tmp11);
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const items2 = [ChannelStore];
        cResult[4] = items2;
        let tmp13 = items2;
      } else {
        tmp13 = cResult[4];
      }
      if (cResult[5] !== channelId) {
        const fn2 = function w() {
          return ChannelStore.getChannel(channelId);
        };
        const items3 = [channelId];
        cResult[5] = channelId;
        cResult[6] = fn2;
        cResult[7] = items3;
        let tmp16 = items3;
        let tmp15 = fn2;
      } else {
        tmp15 = cResult[6];
        tmp16 = cResult[7];
      }
      const tmpResult = channelId(504);
      const stateFromStores1 = channelId(504).useStateFromStores(tmp13, tmp15, tmp16);
      let first2;
      if (stateFromStores1 != null) {
        const recipients = stateFromStores1.recipients;
        if (recipients != null) {
          first2 = recipients[0];
        }
      }
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        const items4 = [UserStore];
        cResult[8] = items4;
        let tmp19 = items4;
      } else {
        tmp19 = cResult[8];
      }
      if (cResult[9] !== first2) {
        class A {
          constructor() {
            user = undefined;
            if (null != closure_6) {
              tmp3 = closure_9;
              user = closure_9.getUser(tmp);
            }
            return user;
          }
        }
        const items5 = [first2];
        cResult[9] = first2;
        cResult[10] = A;
        cResult[11] = items5;
        let tmp22 = items5;
      } else {
        class A {
          constructor() {
            user = undefined;
            if (null != closure_6) {
              tmp3 = closure_9;
              user = closure_9.getUser(tmp);
            }
            return user;
          }
        }
        tmp22 = cResult[11];
      }
      const tmpResult3 = channelId(504);
      const stateFromStores2 = channelId(504).useStateFromStores(tmp19, A, tmp22);
      if (cResult[12] !== first) {
        class U {
          constructor() {
            if (closure_3) {
              return;
            } else {
              tmp = globalThis;
              _setTimeout = setTimeout;
              num = 1000;
              closure_0 = setTimeout(() => closure_1_4(true), 1000);
              return () => clearTimeout(closure_0);
            }
          }
        }
        const items6 = [first];
        cResult[12] = first;
        cResult[13] = U;
        cResult[14] = items6;
        let tmp25 = items6;
      } else {
        class U {
          constructor() {
            if (closure_3) {
              return;
            } else {
              tmp = globalThis;
              _setTimeout = setTimeout;
              num = 1000;
              closure_0 = setTimeout(() => closure_1_4(true), 1000);
              return () => clearTimeout(closure_0);
            }
          }
        }
        tmp25 = cResult[14];
      }
      const effect = obj2.useEffect(U, tmp25);
      if (null != stateFromStores1) {
        class U {
          constructor() {
            if (closure_3) {
              return;
            } else {
              tmp = globalThis;
              _setTimeout = setTimeout;
              num = 1000;
              closure_0 = setTimeout(() => closure_1_4(true), 1000);
              return () => clearTimeout(closure_0);
            }
          }
        }
      }
      return null;
    }
  : function RestrictedMessageRequestPreview(channelId) {
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
      closure_5 = channelId(504).useStateFromStores(
        items,
        () => MessageStore.getMessages(channelId).length > 0,
        items1,
      );
      const obj = noop;
      const obj2 = channelId(504);
      const tmp7 = channelId;
      const items2 = [ChannelStore];
      const items3 = [channelId];
      const stateFromStores = channelId(504).useStateFromStores(
        items2,
        () => ChannelStore.getChannel(channelId),
        items3,
      );
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
      const stateFromStores1 = tmp7(504).useStateFromStores(
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
          const obj4 = { style: tmp.container, children: null };
          const obj5 = {
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
          const items8 = [closure_10(tmp2(17603), obj6)];
          const obj7 = { channelId };
          items8[1] = closure_10(tmp2(17605), obj7);
          obj5.children = items8;
          const items9 = [closure_11(closure_5, obj5)];
          const obj8 = { style: null, children: null };
          const items10 = [tmp.footer];
          const obj9 = { paddingBottom: tmp2(587).space.PX_8 + ref(1631)().bottom };
          items10[1] = obj9;
          obj8.style = items10;
          const obj10 = { channel: stateFromStores };
          obj8.children = closure_10(tmp2(12158), obj10);
          items9[1] = closure_10(first1, obj8);
          obj4.children = items9;
          tmp13Result = closure_11(tmp14, obj4);
        }
      }
      return tmp13Result;
    };
