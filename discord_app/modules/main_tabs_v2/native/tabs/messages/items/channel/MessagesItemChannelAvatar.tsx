// === Module 15589: ? ===

// Module 15589
import ThemesDefault from "Themes" /* 712 */;
import FacepileGroupDMAvatarDefault from "FacepileGroupDMAvatar" /* 10610 */;
import closure_3 from "maybeApplyNoTextColorForLightCustomTheme" /* 4440 */;
import closure_4 from "fetchFingerprint" /* 1218 */;
import closure_5 from "sortActivity" /* 4537 */;
import closure_6 from "handleTypingStart" /* 11504 */;
import closure_7 from "mergeGuildAvatar" /* 1922 */;
import { MUTED_OPACITY_CONTENT } from "hairlineWidth" /* 10162 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4448 */;
import importAllResult from "noop" /* 19 */;

const require = arg1;
let closure_10 = createCacheKey.createStyles((arg0) => {
  const avatar = { borderRadius: ThemesDefault.radii.round, marginRight: ThemesDefault.modules.mobile.MESSAGES_ITEM_CHANNEL_AVATAR_MARGIN_END, width: ThemesDefault.modules.mobile.MESSAGES_ITEM_CHANNEL_AVATAR_SIZE, height: ThemesDefault.modules.mobile.MESSAGES_ITEM_CHANNEL_AVATAR_SIZE, opacity: null };
  let num = 1;
  if (arg0) {
    num = MUTED_OPACITY_CONTENT;
  }
  avatar[4] = num;
  return { avatar };
});
const memoResult = importAllResult.memo(function MessagesItemChannelAvatar(channel) {
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
  const REFRESH_MEDIUM_32 = channel(1297).AvatarSizes.REFRESH_MEDIUM_32;
  dependencyMap = id.getId();
  let obj = channel(589);
  const items = [closure_6];
  stateFromStores = obj.useStateFromStores(items, () => {
    const typingUsers = closure_1_6.getTypingUsers(channel.id);
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
  const items2 = [closure_7];
  const stateFromStores2 = channel(589).useStateFromStores(items2, () => {
    let recipientId;
    if (true === channel.isDM()) {
      recipientId = channel.getRecipientId();
    }
    return closure_1_7.getUser(recipientId);
  });
  const obj3 = channel(589);
  const items3 = [closure_5];
  const stateFromStores3 = channel(589).useStateFromStores(items3, () => {
    let isMobileOnlineResult = channel.isDM();
    if (isMobileOnlineResult) {
      isMobileOnlineResult = closure_1_5.isMobileOnline(channel.getRecipientId());
    }
    return isMobileOnlineResult;
  });
  const obj5 = channel(589);
  const items4 = [closure_5];
  const stateFromStores4 = channel(589).useStateFromStores(items4, () => {
    let isVROnlineResult = channel.isDM();
    if (isVROnlineResult) {
      isVROnlineResult = closure_1_5.isVROnline(channel.getRecipientId());
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
    let tmp11Result = jsx(FacepileGroupDMAvatarDefault, { status: null, size: null, channel: null, animate: null, style: null });
  } else {
    tmp11Result = null;
    if (null != stateFromStores2) {
      obj = { user: null, avatarDecoration: null, guildId: "e", isMobileOnline: true, isVROnline: false, status: true, streaming: true, style: "accessibilityLabel", size: false, animate: false, typing: false, autoStatusCutout: false };
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
      tmp11Result = jsx(tmp3(1297).Avatar, { user: null, avatarDecoration: null, guildId: "e", isMobileOnline: true, isVROnline: false, status: true, streaming: true, style: "accessibilityLabel", size: false, animate: false, typing: false, autoStatusCutout: false });
      const tmp11 = jsx;
    }
  }
  return tmp11Result;
});
const result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/items/channel/MessagesItemChannelAvatar.tsx");

export default memoResult;