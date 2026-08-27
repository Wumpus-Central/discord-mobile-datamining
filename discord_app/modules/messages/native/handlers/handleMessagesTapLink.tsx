// discord_app/modules/messages/native/handlers/handleMessagesTapLink.tsx
import set from "../../../../../_runtime/00002_set.js";
import AbortCodes from "../../../threads/ThreadConstants.tsx";
import set2 from "../../../channel/ChannelConstants.tsx";
import APP_LAUNCHER_BUILT_IN_SECTION_ICON from "../../../app_launcher/native/AppLauncherNativeConstants.tsx";
import parseQueryDefault from "../../../../utils/native/parseURL.tsx";
import str2 from "../../../push_notifications/PushNotificationConstants.tsx";
import getIndexKey from "../../../application_commands/ApplicationCommandIndexStore.tsx";
import isLinkTrusted from "../../../../utils/MaskedLinkUtils.tsx";
import _mod8731 from "../../../game_profile/GameProfileActionCreators.native.tsx";
import GameProfileEmbedAction from "../../../game_profile/GameProfileAnalyticUtils.tsx";
import isAlertOrActionSheetOpen from "../../../../components_native/chat/isAlertOrActionSheetOpen.tsx";
import isLinkTrusted2 from "../../../markup/MarkupReactLinkUtils.tsx";
import closure_4 from "../../../applications/ApplicationStore.tsx";
import closure_5 from "../../../guild_automod/GuildAutomodMessageStore.tsx";
import closure_6 from "../../../summaries/SummaryStore.tsx";
import closure_7 from "../../../../records/UserRecord.tsx";
import closure_8 from "../../../../stores/ChannelStore.tsx";
import closure_9 from "../../../../stores/InviteStore.tsx";
import closure_10 from "../../../../stores/MessageStore.tsx";
import closure_11 from "../../../../stores/UserStore.tsx";
import ME from "../../../../Constants.tsx";

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
              num = !tmp2(7413).isGuildScheduledEventInviteEmbed(invite);
              const tmp2Result = tmp2(7413);
            }
            if (!num) {
              tmp4(11117)(invite);
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
        _mod8731.default.openGameProfileModal(obj);
        flag3 = true;
        const _default = _mod8731.default;
      }
      flag2 = flag3;
    }
    flag = true;
    if (!flag2) {
      obj1 = { href: null, trusted: null, messageId: null, channelId: null };
      obj1[0] = data.url;
      let isLinkTrustedResult = null != data.node;
      if (isLinkTrustedResult) {
        isLinkTrustedResult = tmp19(11116).isLinkTrusted(data.node);
        const tmp19Result = tmp19(11116);
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
        if (chatInputRef != null) {
          const current = chatInputRef.current;
          if (current != null) {
            let flag = data.addSpace;
            if (flag == null) {
              flag = true;
            }
            current.insertText(data.text, null, flag);
          }
        }
      }
    }
    tmp4 = handleMessagesTapURLLink;
  } else {
    const obj = isAlertOrActionSheetOpen;
  }
};