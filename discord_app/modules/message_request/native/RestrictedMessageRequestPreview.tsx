// === Module 16895: RestrictedMessageRequestPreview ===

// Module 16895 (RestrictedMessageRequestPreview)
import ThemesDefault from "Themes" /* 576 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import closure_7 from "ensureGuildLoaded" /* 1957 */;
import closure_8 from "reinjectEphemerals" /* 4781 */;
import closure_9 from "mergeGuildAvatar" /* 1371 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4560 */;

const require = arg1;
({ ScrollView: c5, View: closure_6 } = get_ActivityIndicator);
({ jsx: c10, jsxs: unpackModuleId } = jsxProd);
createCacheKey = { container: null, scroll: null, hidden: null, scrollContent: null, footer: null };
createCacheKey = { flex: 1, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flex: 1 };
createCacheKey[2] = { opacity: 0 };
createCacheKey[3] = { paddingHorizontal: ThemesDefault.space.PX_16, paddingTop: ThemesDefault.space.PX_8, paddingBottom: ThemesDefault.space.PX_8 };
let obj1 = { paddingHorizontal: ThemesDefault.space.PX_16, paddingTop: ThemesDefault.space.PX_8, paddingBottom: ThemesDefault.space.PX_8 };
createCacheKey[4] = { paddingHorizontal: ThemesDefault.space.PX_12 };
let closure_12 = createCacheKey.createStyles(createCacheKey);
let obj2 = { paddingHorizontal: ThemesDefault.space.PX_12 };
const result = require("set").fileFinishedImporting("modules/message_request/native/RestrictedMessageRequestPreview.tsx");

export default function RestrictedMessageRequestPreview(channelId) {
  channelId = channelId.channelId;
  let ref;
  dependencyMap = undefined;
  let first;
  let React;
  closure_5 = undefined;
  let first1;
  const tmp = callback2();
  let obj = React;
  ref = React.useRef(null);
  dependencyMap = React.useRef(false);
  const tmp5 = first(React.useState(false), 2);
  first = tmp5[0];
  React = tmp5[1];
  obj1 = channelId(504);
  const items = [closure_8];
  const items1 = [channelId];
  closure_5 = obj1.useStateFromStores(items, () => closure_1_8.getMessages(channelId).length > 0, items1);
  let obj2 = channelId(504);
  const items2 = [closure_7];
  const items3 = [channelId];
  const stateFromStores = obj2.useStateFromStores(items2, () => closure_1_7.getChannel(channelId), items3);
  first1 = undefined;
  if (stateFromStores != null) {
    const recipients = stateFromStores.recipients;
    if (recipients != null) {
      first1 = recipients[0];
    }
  }
  const items4 = [closure_9];
  const items5 = [first1];
  const stateFromStores1 = channelId(504).useStateFromStores(items4, () => {
    let user;
    if (null != first1) {
      user = closure_1_9.getUser(tmp);
    }
    return user;
  }, items5);
  const items6 = [first];
  const effect = obj.useEffect(() => {
    if (!first) {
      const _setTimeout = setTimeout;
      const timeout = setTimeout(() => callback(true), 1000);
      return () => clearTimeout(closure_0);
    }
  }, items6);
  let tmp13Result = null;
  if (null != stateFromStores) {
    tmp13Result = null;
    if (null != stateFromStores1) {
      obj = { style: null, children: null };
      obj[0] = tmp.container;
      obj = { ref: null, style: null, contentContainerStyle: null, onScrollBeginDrag: null, onContentSizeChange: null, children: null };
      obj[0] = ref;
      const items7 = [tmp.scroll, ];
      let hidden = null;
      if (!first) {
        hidden = tmp.hidden;
      }
      items7[1] = hidden;
      obj[1] = items7;
      obj[2] = tmp.scrollContent;
      obj[3] = function onScrollBeginDrag() {
        closure_2.current = true;
      };
      obj[4] = function onContentSizeChange() {
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
          const animationFrame = requestAnimationFrame(() => callback(true));
        }
      };
      obj1 = { channel: null, user: null };
      obj1[0] = stateFromStores;
      obj1[1] = stateFromStores1;
      const items8 = [callback(tmp2(16896), obj1), ];
      obj2 = { channelId: null };
      obj2[0] = channelId;
      items8[1] = callback(tmp2(16898), obj2);
      obj[5] = items8;
      const items9 = [closure_11(closure_5, obj), ];
      const obj3 = { style: null, children: null };
      const items10 = [tmp.footer, ];
      const obj4 = { paddingBottom: null };
      obj4[0] = tmp2(576).space.PX_8 + ref(1611)().bottom;
      items10[1] = obj4;
      obj3[0] = items10;
      const obj5 = { channel: null };
      obj5[0] = stateFromStores;
      obj3[1] = callback(tmp2(12439), obj5);
      items9[1] = callback(first1, obj3);
      obj[1] = items9;
      tmp13Result = tmp13(tmp14, obj);
      const tmp15 = closure_5;
    }
  }
  return tmp13Result;
};