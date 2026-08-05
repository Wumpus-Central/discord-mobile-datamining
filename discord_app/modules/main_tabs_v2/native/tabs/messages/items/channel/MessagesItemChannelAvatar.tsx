// discord_app/modules/main_tabs_v2/native/tabs/messages/items/channel/MessagesItemChannelAvatar.tsx
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme";
import fetchFingerprint from "fetchFingerprint";
import sortActivity from "sortActivity";
import handleTypingStart from "handleTypingStart";
import mergeGuildAvatar from "mergeGuildAvatar";
import { MUTED_OPACITY_CONTENT } from "hairlineWidth";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";
import importAllResult from "noop";
import { Themes } from "../../../../../../../../discord_common/js/packages/tokens/native.tsx";
import { FacepileGroupDMAvatar } from "../../../../../../group_dm/native/GroupDMAvatar.tsx";

const require = arg1;
let closure_10 = createCacheKey.createStyles((arg0) => {
  const avatar = { borderRadius: Themes.radii.round, marginRight: Themes.modules.mobile.MESSAGES_ITEM_CHANNEL_AVATAR_MARGIN_END, width: Themes.modules.mobile.MESSAGES_ITEM_CHANNEL_AVATAR_SIZE, height: Themes.modules.mobile.MESSAGES_ITEM_CHANNEL_AVATAR_SIZE, opacity: null };
  let num = 1;
  if (arg0) {
    num = MUTED_OPACITY_CONTENT;
  }
  avatar[4] = num;
  return { avatar };
});
const memoResult = require("noop").memo(function MessagesItemChannelAvatar(channel) {
  let blocked;
  let channelSelected;
  let importDefault;
  let isStreaming;
  let muted;
  let status;
  channel = channel.channel;
  ({ hasUnreadMessages: importDefault, muted, status } = channel);
  let dependencyMap;
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
  const REFRESH_MEDIUM_32 = channel(1297).AvatarSizes.REFRESH_MEDIUM_32;
  dependencyMap = id.getId();
  let obj = channel(589);
  const items = [handleTypingStart];
  stateFromStores = obj.useStateFromStores(items, () => {
    const typingUsers = outer1_6.getTypingUsers(channel.id);
    for (const key10007 in typingUsers) {
      let tmp2 = key10007;
      let tmp3 = closure_2;
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
  const stateFromStores1 = channel(589).useStateFromStores(items1, () => {
    const useReducedMotion = stateFromStores.useReducedMotion;
    let tmp = !useReducedMotion;
    if (!useReducedMotion) {
      let tmp2 = stateFromStores;
      if (!stateFromStores) {
        tmp2 = closure_1;
      }
      tmp = tmp2;
    }
    return tmp;
  });
  const obj2 = channel(589);
  let tmp = closure_10;
  let tmp3 = channel;
  const items2 = [mergeGuildAvatar];
  const stateFromStores2 = channel(589).useStateFromStores(items2, () => {
    let recipientId;
    if (true === channel.isDM()) {
      recipientId = channel.getRecipientId();
    }
    return outer1_7.getUser(recipientId);
  });
  const obj3 = channel(589);
  const items3 = [sortActivity];
  const stateFromStores3 = channel(589).useStateFromStores(items3, () => {
    let isMobileOnlineResult = channel.isDM();
    if (isMobileOnlineResult) {
      isMobileOnlineResult = outer1_5.isMobileOnline(channel.getRecipientId());
    }
    return isMobileOnlineResult;
  });
  const obj5 = channel(589);
  const items4 = [sortActivity];
  const stateFromStores4 = channel(589).useStateFromStores(items4, () => {
    let isVROnlineResult = channel.isDM();
    if (isVROnlineResult) {
      isVROnlineResult = outer1_5.isVROnline(channel.getRecipientId());
    }
    return isVROnlineResult;
  });
  if (channel.isGroupDM()) {
    obj = { status: null, size: null, channel: null, animate: null, style: null };
    obj[0] = status;
    obj[1] = REFRESH_MEDIUM_32;
    obj[2] = channel;
    obj[3] = stateFromStores1;
    obj[4] = tmpResult.avatar;
    let tmp11Result = jsx(FacepileGroupDMAvatar, { status: null, size: null, channel: null, animate: null, style: null });
  } else {
    tmp11Result = null;
    if (null != stateFromStores2) {
      obj = { user: null, avatarDecoration: null, guildId: "e", isMobileOnline: true, isVROnline: 10, status: true, streaming: "/assets/.cache/intl/bW9kdWxlcy9jbGlwcw==", style: null, size: "ec17384f93aac564d379768572045c1a", animate: "pt-BR.messages.ec17384f93aac564d379768572045c1a.compiled.messages", typing: "jsona", autoStatusCutout: 200 };
      obj[0] = stateFromStores2;
      obj[1] = stateFromStores2.avatarDecoration;
      obj[3] = stateFromStores3;
      obj[4] = stateFromStores4;
      let tmp12 = null;
      if (!stateFromStores2.isSystemUser()) {
        tmp12 = status;
      }
      obj[5] = tmp12;
      obj[6] = isStreaming;
      obj[7] = tmpResult.avatar;
      obj[8] = REFRESH_MEDIUM_32;
      obj[9] = stateFromStores1;
      obj[10] = stateFromStores;
      tmp11Result = jsx(tmp3(1297).Avatar, { user: null, avatarDecoration: null, guildId: "e", isMobileOnline: true, isVROnline: 10, status: true, streaming: "/assets/.cache/intl/bW9kdWxlcy9jbGlwcw==", style: null, size: "ec17384f93aac564d379768572045c1a", animate: "pt-BR.messages.ec17384f93aac564d379768572045c1a.compiled.messages", typing: "jsona", autoStatusCutout: 200 });
      const tmp11 = jsx;
    }
  }
  return tmp11Result;
});
const result = require("fetchFingerprint").fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/items/channel/MessagesItemChannelAvatar.tsx");

export default memoResult;