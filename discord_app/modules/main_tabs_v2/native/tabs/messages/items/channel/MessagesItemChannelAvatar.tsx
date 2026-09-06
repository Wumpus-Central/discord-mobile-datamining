// discord_app/modules/main_tabs_v2/native/tabs/messages/items/channel/MessagesItemChannelAvatar.tsx
import nativeDefault from "../../../../../../../../discord_common/js/packages/tokens/native.tsx";
import GroupDMAvatarDefault from "../../../../../../group_dm/native/GroupDMAvatar.tsx";
import noop from "../../../../../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../../../../../a11y/AccessibilityStore.tsx";
import AuthenticationStore from "../../../../../../../stores/AuthenticationStore.tsx";
import PresenceStore from "../../../../../../../stores/PresenceStore.tsx";
import TypingStore from "../../../../../../../stores/TypingStore.tsx";
import UserStore from "../../../../../../../stores/UserStore.tsx";

const require = fn;
const MUTED_OPACITY_CONTENT = fn(10118).MUTED_OPACITY_CONTENT;
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let closure_10 = createStyles.createStyles((arg0) => {
  const avatar = {
    borderRadius: nativeDefault.radii.round,
    marginRight: nativeDefault.modules.mobile.MESSAGES_ITEM_CHANNEL_AVATAR_MARGIN_END,
    width: nativeDefault.modules.mobile.MESSAGES_ITEM_CHANNEL_AVATAR_SIZE,
    height: nativeDefault.modules.mobile.MESSAGES_ITEM_CHANNEL_AVATAR_SIZE,
    opacity: null,
  };
  let num = 1;
  if (arg0) {
    num = MUTED_OPACITY_CONTENT;
  }
  avatar.opacity = num;
  return { avatar };
});
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/main_tabs_v2/native/tabs/messages/items/channel/MessagesItemChannelAvatar.tsx",
);

export default noop.memo(function MessagesItemChannelAvatar(channel) {
  channel = channel.channel;
  ({ hasUnreadMessages: importDefault, muted, status } = channel);
  dependencyMap = undefined;
  let stateFromStores;
  ({ channelSelected, isStreaming, blocked } = channel);
  if (!muted) {
    muted = channel.ignored;
  }
  if (!muted) {
    muted = blocked;
  }
  if (muted) {
    muted = !channelSelected;
  }
  const tmpResult = closure_10(muted);
  const REFRESH_MEDIUM_32 = channel(1178).AvatarSizes.REFRESH_MEDIUM_32;
  dependencyMap = AuthenticationStore.getId();
  let obj = channel(504);
  const items = [TypingStore];
  stateFromStores = obj.useStateFromStores(items, () => {
    const typingUsers = TypingStore.getTypingUsers(channel.id);
    for (const key10007 in typingUsers) {
      if (key10007 === closure_2) {
        continue;
      } else {
        let flag = true;
        return true;
      }
    }
    return false;
  });
  const items1 = [stateFromStores];
  const stateFromStores1 = channel(504).useStateFromStores(items1, () => {
    const useReducedMotion = AccessibilityStore.useReducedMotion;
    let tmp = !useReducedMotion;
    if (!useReducedMotion) {
      let tmp2 = stateFromStores;
      if (!stateFromStores) {
        tmp2 = importDefault;
      }
      tmp = tmp2;
    }
    return tmp;
  });
  const obj2 = channel(504);
  let tmp3 = channel;
  const items2 = [UserStore];
  const stateFromStores2 = channel(504).useStateFromStores(items2, () => {
    let recipientId;
    if (true === channel.isDM()) {
      recipientId = channel.getRecipientId();
    }
    return UserStore.getUser(recipientId);
  });
  const obj3 = channel(504);
  const items3 = [PresenceStore];
  const stateFromStores3 = channel(504).useStateFromStores(items3, () => {
    let isMobileOnlineResult = channel.isDM();
    if (isMobileOnlineResult) {
      isMobileOnlineResult = PresenceStore.isMobileOnline(channel.getRecipientId());
    }
    return isMobileOnlineResult;
  });
  const obj5 = channel(504);
  const items4 = [PresenceStore];
  const stateFromStores4 = channel(504).useStateFromStores(items4, () => {
    let isVROnlineResult = channel.isDM();
    if (isVROnlineResult) {
      isVROnlineResult = PresenceStore.isVROnline(channel.getRecipientId());
    }
    return isVROnlineResult;
  });
  if (channel.isGroupDM()) {
    obj = { status, size: REFRESH_MEDIUM_32, channel, animate: stateFromStores1, style: tmpResult.avatar };
    let tmp11Result = jsx(GroupDMAvatarDefault, {
      status,
      size: REFRESH_MEDIUM_32,
      channel,
      animate: stateFromStores1,
      style: tmpResult.avatar,
    });
  } else {
    tmp11Result = null;
    if (null != stateFromStores2) {
      obj = {
        user: stateFromStores2,
        avatarDecoration: stateFromStores2.avatarDecoration,
        guildId: "e",
        isMobileOnline: stateFromStores3,
        isVROnline: stateFromStores4,
        status: true,
        streaming: true,
        style: "accessible",
        size: "<string:307298308>",
        animate: "<string:906248450>",
        typing: "<string:1715535874>",
        autoStatusCutout: "<string:1358955583>",
      };
      let tmp12 = null;
      if (!stateFromStores2.isSystemUser()) {
        tmp12 = status;
      }
      obj.status = tmp12;
      obj.streaming = isStreaming;
      obj.style = tmpResult.avatar;
      obj.size = REFRESH_MEDIUM_32;
      obj.animate = stateFromStores1;
      obj.typing = stateFromStores;
      tmp11Result = jsx(tmp3(1178).Avatar, {
        user: stateFromStores2,
        avatarDecoration: stateFromStores2.avatarDecoration,
        guildId: "e",
        isMobileOnline: stateFromStores3,
        isVROnline: stateFromStores4,
        status: true,
        streaming: true,
        style: "accessible",
        size: "<string:307298308>",
        animate: "<string:906248450>",
        typing: "<string:1715535874>",
        autoStatusCutout: "<string:1358955583>",
      });
    }
  }
  return tmp11Result;
});
