// === Module 10802: handleMessagesTapURLLink ===

// Module 10802 (handleMessagesTapURLLink)
import obj132 from "obj132" /* 2 */;
import AbortCodes from "AbortCodes" /* 1235 */;
import set from "set" /* 1398 */;
import APP_LAUNCHER_BUILT_IN_SECTION_ICON from "APP_LAUNCHER_BUILT_IN_SECTION_ICON" /* 1499 */;
import parseQueryDefault from "parseQuery" /* 4355 */;
import InviteTypes from "InviteTypes" /* 4369 */;
import str2 from "str2" /* 5259 */;
import getIndexKey from "getIndexKey" /* 8448 */;
import isLinkTrusted from "isLinkTrusted" /* 8775 */;
import _mod9096 from "module_9096" /* 9096 */;
import GameProfileEmbedAction from "GameProfileEmbedAction" /* 9101 */;
import isAlertOrActionSheetOpen from "isAlertOrActionSheetOpen" /* 10736 */;
import isLinkTrusted2 from "isLinkTrusted" /* 10800 */;
import handleAcceptEventInstantInviteDefault from "handleAcceptEventInstantInvite" /* 10801 */;
import addApplication from "addApplication" /* 4478 */;
import handleMessageSendFailedAutomod from "handleMessageSendFailedAutomod" /* 8163 */;
import handleQuickSwitcherUpdate from "handleQuickSwitcherUpdate" /* 10551 */;
import createdAt from "createdAt" /* 1930 */;
import ensureGuildLoaded from "ensureGuildLoaded" /* 1391 */;
import updateInvite from "updateInvite" /* 4359 */;
import reinjectEphemerals from "reinjectEphemerals" /* 4994 */;
import mergeGuildAvatar from "mergeGuildAvatar" /* 1922 */;
import ME from "ME" /* 676 */;

function handleMessagesTapURLLink(data, channelId) {
  let flag = null != data.url;
  if (flag) {
    flag = "" !== data.url;
  }
  if (flag) {
    const node = data.node;
    let flag2 = false;
    if (null != node) {
      let obj = isLinkTrusted2;
      flag2 = false;
      if (obj.isLinkTrusted(node)) {
        const payload = parseQueryDefault(tmp).payload;
        flag2 = false;
        if (payload.type === constants.INVITE) {
          flag2 = false;
          if (null != payload.inviteCode) {
            invite = invite.getInvite(payload.inviteCode);
            let num = null == invite;
            if (!num) {
              num = !InviteTypes.isGuildScheduledEventInviteEmbed(invite);
              const tmp2Result = InviteTypes;
            }
            if (!num) {
              handleAcceptEventInstantInviteDefault(invite);
              num = 0;
            }
            flag2 = !num;
          }
        }
      }
    }
    if (!flag2) {
      const payload2 = parseQueryDefault(data.url).payload;
      let flag3 = false;
      if (payload2.type === constants.GAME_PROFILE) {
        const gameId = payload2.gameId;
        let tmp13;
        if (null != channelId) {
          if (null != data.messageId) {
            message = message.getMessage(channelId, data.messageId);
            let id;
            if (message != null) {
              id = message.author.id;
            }
            tmp13 = id;
          }
        }
        obj = { gameId: null, source: null, sourceUserId: null, gameProfileModalChecks: null };
        obj[0] = gameId;
        obj[1] = GameProfileEmbedAction.GameProfileSources.Deeplink;
        obj[2] = tmp13;
        obj = { shouldOpenGameProfile: true, gameId: null };
        obj[1] = gameId;
        obj[3] = obj;
        _mod9096.default.openGameProfileModal(obj);
        flag3 = true;
        const _default = _mod9096.default;
      }
      flag2 = flag3;
    }
    flag = true;
    if (!flag2) {
      obj1 = { href: null, trusted: null, messageId: null, channelId: null };
      obj1[0] = data.url;
      let isLinkTrustedResult = null != data.node;
      if (isLinkTrustedResult) {
        isLinkTrustedResult = isLinkTrusted2.isLinkTrusted(data.node);
        const tmp19Result = isLinkTrusted2;
      }
      obj1[1] = isLinkTrustedResult;
      obj1[2] = data.messageId;
      obj1[3] = channelId;
      isLinkTrusted.handleClick(obj1);
      flag = true;
    }
  }
  return flag;
}
const getSection = getIndexKey.getSection;
({ AnalyticsLocations: closure_12, LinkingTypes: map1, Routes: closure_14 } = ME);
const AppLauncherRouteName = APP_LAUNCHER_BUILT_IN_SECTION_ICON.AppLauncherRouteName;
const StaticChannelRoute = set.StaticChannelRoute;
const NotificationTypes = str2.NotificationTypes;
let closure_18 = AbortCodes.OpenThreadAnalyticsLocations;
const result = obj132.fileFinishedImporting("modules/messages/native/handlers/handleMessagesTapLink.tsx");

export { handleMessagesTapURLLink };
export const handleMessagesTapLink = function handleMessagesTapLink(tapLinkData) {
  ({ chatInputRef, handleTransitionToThread, message, messageChannel } = tapLinkData);
  const data = tapLinkData.tapLinkData.data;
  if (true === tapLinkData.allowWithinModal) {
    let id;
    if (messageChannel != null) {
      id = messageChannel.id;
    }
    if (!handleMessagesTapURLLink(data, id)) {
      if (null != data.action) {
        const action = data.action;
      }
    }
  } else {
    isAlertOrActionSheetOpen;
  }
};