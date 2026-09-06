// === Module 17140: VoicePanelCTACardCallerDisconnected ===

// Module 17140 (VoicePanelCTACardCallerDisconnected)
import nativeDefault from "native" /* 576 */;
import NicknameUtilsDefault from "NicknameUtils" /* 4712 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import UserStore from "UserStore" /* 1371 */;

const require = fn;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4560);
let obj = { container: null, avatarContainer: null, avatarWrapper: null, avatar: null, disconnectedAvatar: null, textContainer: null, text: null };
let size = { width: "100%", height: "100%", alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.colors.VOICE_VIDEO_VIDEO_TILE_BACKGROUND };
obj.container = size;
obj.avatarContainer = { flexDirection: "row", gap: 24 };
const size1 = { width: 80, height: 80, borderRadius: nativeDefault.radii.round, overflow: "hidden" };
obj.avatarWrapper = size1;
obj.avatar = { width: 80, height: 80 };
obj.disconnectedAvatar = { opacity: 0.2 };
obj.textContainer = { position: "absolute", left: 0, right: 0, bottom: 0, padding: 16, width: "100%" };
obj.text = { textAlign: "center" };
let closure_10 = createStyles.createStyles(obj);
size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/card/VoicePanelCTACardCallerDisconnected.tsx");

export default noop.memo(function VoicePanelCTACardCallerDisconnected() {
  const channelId = noop.useContext(first(id[8])).channelId;
  const tmp3 = closure_10();
  const channel = ChannelStore.getChannel(channelId);
  let recipients;
  if (channel != null) {
    recipients = channel.recipients;
  }
  if (recipients == null) {
    recipients = [];
  }
  first = _slicedToArray(recipients, 1)[0];
  id = AuthenticationStore.getId();
  let obj = channelId(tmp2[9]);
  let items = [UserStore];
  const items1 = [channelId, id, first];
  [tmp9, tmp10, tmp11] = _slicedToArray(obj.useStateFromStoresArray(items, () => {
    const user = UserStore.getUser(id);
    const user1 = UserStore.getUser(first);
    let avatarURL;
    if (user != null) {
      avatarURL = user.getAvatarURL(undefined, 80);
    }
    const items = [avatarURL, , ];
    let avatarURL1;
    if (user1 != null) {
      avatarURL1 = user1.getAvatarURL(undefined, 80);
    }
    items[1] = avatarURL1;
    items[2] = NicknameUtilsDefault.getName(undefined, channelId, user1);
    return items;
  }, items1), 3);
  obj = { style: tmp3.container, children: null };
  tmp(tmp2[11]);
  obj = { style: tmp3.avatarContainer, children: null };
  let tmp16Result = null != tmp9;
  const tmpResult = tmp(tmp2[11]);
  if (tmp16Result) {
    const obj1 = { style: tmp3.avatarWrapper, children: null };
    let tmp19 = tmp9;
    const tmpResult1 = tmp(tmp2[11]);
    if (typeof tmp9 !== "number") {
      const obj2 = { uri: tmp9 };
      tmp19 = obj2;
    }
    const obj3 = { source: tmp19, style: tmp3.avatar };
    obj1.children = closure_8(tmp(tmp2[12]), obj3);
    tmp16Result = tmp16(tmpResult1, obj1);
    const tmpResult2 = tmp(tmp2[12]);
  }
  const items2 = [tmp16Result, ];
  let tmp21Result = null != tmp10;
  if (tmp21Result) {
    const obj4 = { style: tmp3.avatarWrapper, children: null };
    let tmp24 = tmp10;
    const tmpResult3 = tmp(tmp2[11]);
    if (typeof tmp10 !== "number") {
      const obj5 = { uri: tmp10 };
      tmp24 = obj5;
    }
    const obj6 = { source: tmp24, style: null };
    const items3 = [, ];
    ({ avatar: arr5[0], disconnectedAvatar: arr5[1] } = tmp3);
    obj6.style = items3;
    obj4.children = closure_8(tmp(tmp2[12]), obj6);
    tmp21Result = tmp21(tmpResult3, obj4);
    const tmpResult4 = tmp(tmp2[12]);
  }
  items2[1] = tmp21Result;
  obj.children = items2;
  const items4 = [closure_9(tmpResult, obj), ];
  const obj7 = { style: tmp3.textContainer, children: null };
  const tmp8 = _slicedToArray(obj.useStateFromStoresArray(items, () => {
    const user = UserStore.getUser(id);
    const user1 = UserStore.getUser(first);
    let avatarURL;
    if (user != null) {
      avatarURL = user.getAvatarURL(undefined, 80);
    }
    const items = [avatarURL, , ];
    let avatarURL1;
    if (user1 != null) {
      avatarURL1 = user1.getAvatarURL(undefined, 80);
    }
    items[1] = avatarURL1;
    items[2] = NicknameUtilsDefault.getName(undefined, channelId, user1);
    return items;
  }, items1), 3);
  const obj8 = { style: tmp3.text, variant: "heading-sm/semibold", color: "text-overlay-light", children: null };
  const intl = tmp7(tmp2[14]).intl;
  obj8.children = intl.string(channelId(id[14]).t.WkAgPU);
  const items5 = [closure_8(channelId(id[13]).Text, obj8), ];
  let tmp26Result = null != tmp11;
  if (tmp26Result) {
    const obj9 = { style: tmp3.text, variant: "text-xs/medium", color: "text-overlay-light", children: null };
    const intl2 = tmp7(tmp2[14]).intl;
    const obj10 = { username: tmp11 };
    obj9.children = intl2.format(tmp7(tmp2[14]).t.kXrAqz, obj10);
    tmp26Result = closure_8(tmp7(tmp2[13]).Text, obj9);
  }
  items5[1] = tmp26Result;
  obj7.children = items5;
  items4[1] = closure_9(first(id[11]), obj7);
  obj.children = items4;
  return closure_9(tmpResult, obj);
});