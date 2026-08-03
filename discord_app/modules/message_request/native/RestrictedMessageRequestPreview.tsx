import _slicedToArray from "_slicedToArray";
import noop from "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import ensureGuildLoaded from "ensureGuildLoaded";
import reinjectEphemerals from "reinjectEphemerals";
import mergeGuildAvatar from "mergeGuildAvatar";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c10;
let c5;
let closure_6;
let unpackModuleId;
const require = arg1;
({ ScrollView: c5, View: closure_6 } = get_ActivityIndicator);
({ jsx: c10, jsxs: unpackModuleId } = jsxProd);
createCacheKey = { container: null, scroll: null, hidden: null, scrollContent: null, footer: null };
createCacheKey = { flex: 1, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flex: 1 };
createCacheKey[2] = { opacity: 0 };
createCacheKey[3] = { paddingHorizontal: require("Themes").space.PX_16, paddingTop: require("Themes").space.PX_8, paddingBottom: require("Themes").space.PX_8 };
let obj1 = { paddingHorizontal: require("Themes").space.PX_16, paddingTop: require("Themes").space.PX_8, paddingBottom: require("Themes").space.PX_8 };
createCacheKey[4] = { paddingHorizontal: require("Themes").space.PX_12 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj2 = { paddingHorizontal: require("Themes").space.PX_12 };
const result = require("get ActivityIndicator").fileFinishedImporting("modules/message_request/native/RestrictedMessageRequestPreview.tsx");

export default function RestrictedMessageRequestPreview(channelId) {
  channelId = channelId.channelId;
  let ref;
  let dependencyMap;
  let first;
  let React;
  let closure_5;
  let first1;
  const tmp = createCacheKey();
  let obj = React;
  ref = React.useRef(null);
  dependencyMap = React.useRef(false);
  const tmp5 = first(React.useState(false), 2);
  first = tmp5[0];
  React = tmp5[1];
  let obj1 = channelId(589);
  const items = [reinjectEphemerals];
  const items1 = [channelId];
  closure_5 = obj1.useStateFromStores(items, () => outer1_8.getMessages(channelId).length > 0, items1);
  let obj2 = channelId(589);
  const items2 = [ensureGuildLoaded];
  const items3 = [channelId];
  const stateFromStores = obj2.useStateFromStores(items2, () => outer1_7.getChannel(channelId), items3);
  first1 = undefined;
  if (stateFromStores != null) {
    const recipients = stateFromStores.recipients;
    if (recipients != null) {
      first1 = recipients[0];
    }
  }
  const items4 = [mergeGuildAvatar];
  const items5 = [first1];
  const stateFromStores1 = channelId(589).useStateFromStores(items4, () => {
    let user;
    if (null != first1) {
      user = outer1_9.getUser(tmp);
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
      const items8 = [callback(tmp2(15745), obj1), ];
      obj2 = { channelId: null };
      obj2[0] = channelId;
      items8[1] = callback(tmp2(15747), obj2);
      obj[5] = items8;
      const items9 = [closure_11(closure_5, obj), ];
      const obj3 = { style: null, children: null };
      const items10 = [tmp.footer, ];
      const obj4 = { paddingBottom: null };
      obj4[0] = tmp2(712).space.PX_8 + ref(1581)().bottom;
      items10[1] = obj4;
      obj3[0] = items10;
      const obj5 = { channel: null };
      obj5[0] = stateFromStores;
      obj3[1] = callback(tmp2(11544), obj5);
      items9[1] = callback(first1, obj3);
      obj[1] = items9;
      tmp13Result = tmp13(tmp14, obj);
      const tmp15 = closure_5;
    }
  }
  return tmp13Result;
};