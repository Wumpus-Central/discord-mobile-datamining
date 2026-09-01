// === Module 11202: handleMessagesTapURLLink ===

// Module 11202 (handleMessagesTapURLLink)
import set from "set" /* 2 */;
import AbortCodes from "AbortCodes" /* 1235 */;
import set2 from "set" /* 1394 */;
import APP_LAUNCHER_BUILT_IN_SECTION_ICON from "APP_LAUNCHER_BUILT_IN_SECTION_ICON" /* 1498 */;
import parseQueryDefault from "parseQuery" /* 4458 */;
import str2 from "str2" /* 6055 */;
import getIndexKey from "getIndexKey" /* 8146 */;
import isLinkTrusted from "isLinkTrusted" /* 8641 */;
import _mod8806 from "module_8806" /* 8806 */;
import GameProfileEmbedAction from "GameProfileEmbedAction" /* 8812 */;
import isAlertOrActionSheetOpen from "isAlertOrActionSheetOpen" /* 11143 */;
import isLinkTrusted2 from "isLinkTrusted" /* 11200 */;
import closure_4 from "addApplication" /* 4519 */;
import closure_5 from "handleMessageSendFailedAutomod" /* 7847 */;
import closure_6 from "handleQuickSwitcherUpdate" /* 10982 */;
import closure_7 from "createdAt" /* 1935 */;
import closure_8 from "ensureGuildLoaded" /* 1387 */;
import closure_9 from "updateInvite" /* 4462 */;
import closure_10 from "reinjectEphemerals" /* 4735 */;
import closure_11 from "mergeGuildAvatar" /* 1922 */;
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
              num = !tmp2(7480).isGuildScheduledEventInviteEmbed(invite);
              const tmp2Result = tmp2(7480);
            }
            if (!num) {
              tmp4(11201)(invite);
              num = 0;
            }
            flag2 = !num;
          }
        }
        tmp4 = importDefault;
      }
      tmp2 = require;
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
        _mod8806.default.openGameProfileModal(obj);
        flag3 = true;
        const _default = _mod8806.default;
      }
      flag2 = flag3;
    }
    flag = true;
    if (!flag2) {
      obj1 = { href: null, trusted: null, messageId: null, channelId: null };
      obj1[0] = data.url;
      let isLinkTrustedResult = null != data.node;
      if (isLinkTrustedResult) {
        isLinkTrustedResult = tmp19(11200).isLinkTrusted(data.node);
        const tmp19Result = tmp19(11200);
      }
      obj1[1] = isLinkTrustedResult;
      obj1[2] = data.messageId;
      obj1[3] = channelId;
      isLinkTrusted.handleClick(obj1);
      flag = true;
      const obj5 = isLinkTrusted;
      tmp19 = require;
    }
  }
  return flag;
}
const getSection = getIndexKey.getSection;
({ AnalyticsLocations: closure_12, LinkingTypes: map1, Routes: closure_14 } = ME);
const AppLauncherRouteName = APP_LAUNCHER_BUILT_IN_SECTION_ICON.AppLauncherRouteName;
const StaticChannelRoute = set2.StaticChannelRoute;
const NotificationTypes = str2.NotificationTypes;
let closure_18 = AbortCodes.OpenThreadAnalyticsLocations;
const result = set.fileFinishedImporting("modules/messages/native/handlers/handleMessagesTapLink.tsx");

export { handleMessagesTapURLLink };
export const handleMessagesTapLink = function handleMessagesTapLink(tapLinkData) {
  ({ chatInputRef, handleTransitionToThread, message, messageChannel } = tapLinkData);
  const data = tapLinkData.tapLinkData.data;
  if (true === tapLinkData.allowWithinModal) {
    let id;
    if (messageChannel != null) {
      id = messageChannel.id;
    }
    if (!tmp4(data, id)) {
      if (null != data.action) {
        const action = data.action;
      }
    }
    tmp4 = handleMessagesTapURLLink;
  } else {
    const obj = isAlertOrActionSheetOpen;
  }
};