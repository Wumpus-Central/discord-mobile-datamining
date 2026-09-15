// discord_app/modules/voice_panel/native/card/VoicePanelCTACardCallerDisconnected.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import NicknameUtilsDefault from "../../../../utils/NicknameUtils.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import AuthenticationStore from "../../../../stores/AuthenticationStore.tsx";
import ChannelStore from "../../../../stores/ChannelStore.tsx";
import UserStore from "../../../../stores/UserStore.tsx";

const require = fn;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4639);
let obj = {
  container: null,
  avatarContainer: null,
  avatarWrapper: null,
  avatar: null,
  disconnectedAvatar: null,
  textContainer: null,
  text: null,
};
let size = {
  width: "100%",
  height: "100%",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: nativeDefault.colors.VOICE_VIDEO_VIDEO_TILE_BACKGROUND,
};
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
  let items = [UserStore];
  const items1 = [channelId, id, first];
  const obj = channelId(id[9]);
  [tmp9, tmp10, tmp11] = channelId(id[9]).useStateFromStoresArray(
    items,
    () => {
      const user = UserStore.getUser(id);
      const user1 = UserStore.getUser(first);
      let avatarURL;
      if (user != null) {
        avatarURL = user.getAvatarURL(undefined, 80);
      }
      const items = [avatarURL, ,];
      let avatarURL1;
      if (user1 != null) {
        avatarURL1 = user1.getAvatarURL(undefined, 80);
      }
      items[1] = avatarURL1;
      items[2] = NicknameUtilsDefault.getName(undefined, channelId, user1);
      return items;
    },
    items1,
  );
  const obj2 = { style: tmp3.container, children: null };
  const tmp8 = _slicedToArray(
    channelId(id[9]).useStateFromStoresArray(
      items,
      () => {
        const user = UserStore.getUser(id);
        const user1 = UserStore.getUser(first);
        let avatarURL;
        if (user != null) {
          avatarURL = user.getAvatarURL(undefined, 80);
        }
        const items = [avatarURL, ,];
        let avatarURL1;
        if (user1 != null) {
          avatarURL1 = user1.getAvatarURL(undefined, 80);
        }
        items[1] = avatarURL1;
        items[2] = NicknameUtilsDefault.getName(undefined, channelId, user1);
        return items;
      },
      items1,
    ),
    3,
  );
  const obj3 = { style: tmp3.avatarContainer, children: null };
  let tmp16Result = null != tmp9;
  const tmpResult = first(id[11]);
  if (tmp16Result) {
    const obj4 = { style: tmp3.avatarWrapper, children: null };
    let tmp19 = tmp9;
    const tmpResult8 = tmp(tmp2[11]);
    if (typeof tmp9 !== "number") {
      const obj5 = { uri: tmp9 };
      tmp19 = obj5;
    }
    const obj6 = { source: tmp19, style: tmp3.avatar };
    obj4.children = closure_8(tmp(tmp2[12]), obj6);
    tmp16Result = closure_8(tmpResult8, obj4);
    const tmpResult9 = tmp(tmp2[12]);
  }
  const items2 = [tmp16Result];
  let tmp21Result = null != tmp10;
  if (tmp21Result) {
    const obj7 = { style: tmp3.avatarWrapper, children: null };
    let tmp24 = tmp10;
    const tmpResult10 = tmp(tmp2[11]);
    if (typeof tmp10 !== "number") {
      const obj8 = { uri: tmp10 };
      tmp24 = obj8;
    }
    const obj9 = { source: tmp24, style: null };
    const items3 = [,];
    ({ avatar: arr5[0], disconnectedAvatar: arr5[1] } = tmp3);
    obj9.style = items3;
    obj7.children = closure_8(tmp(tmp2[12]), obj9);
    tmp21Result = closure_8(tmpResult10, obj7);
    const tmpResult11 = tmp(tmp2[12]);
  }
  items2[1] = tmp21Result;
  obj3.children = items2;
  const items4 = [closure_9(first(id[11]), obj3)];
  const obj10 = { style: tmp3.textContainer, children: null };
  const tmpResult7 = first(id[11]);
  const obj11 = { style: tmp3.text, variant: "heading-sm/semibold", color: "text-overlay-light", children: null };
  const intl = tmp7(tmp2[14]).intl;
  obj11.children = intl.string(channelId(id[14]).t.WkAgPU);
  const items5 = [closure_8(channelId(id[13]).Text, obj11)];
  let tmp26Result = null != tmp11;
  if (tmp26Result) {
    const obj12 = { style: tmp3.text, variant: "text-xs/medium", color: "text-overlay-light", children: null };
    const intl2 = tmp7(tmp2[14]).intl;
    const obj13 = { username: tmp11 };
    obj12.children = intl2.format(tmp7(tmp2[14]).t.kXrAqz, obj13);
    tmp26Result = closure_8(tmp7(tmp2[13]).Text, obj12);
  }
  items5[1] = tmp26Result;
  obj10.children = items5;
  items4[1] = closure_9(first(id[11]), obj10);
  obj2.children = items4;
  return closure_9(tmpResult, obj2);
});
