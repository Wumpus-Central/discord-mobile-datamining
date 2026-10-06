// === Module 16653: openConjurePublishDestination ===

// Module 16653 (openConjurePublishDestination)
import Constants from "Constants" /* 1085 */;
import router_utils from "router_utils" /* 1112 */;
import ChannelActionCreatorsDefault from "ChannelActionCreators" /* 4909 */;
import transitionToGuild from "transitionToGuild" /* 6855 */;
import FramesConstants from "FramesConstants" /* 8738 */;
import FramesActionCreatorsDefault from "FramesActionCreators" /* 9019 */;
import canLaunchContextlessFrame from "canLaunchContextlessFrame" /* 9027 */;
import ApplicationStore from "ApplicationStore" /* 5124 */;
import GuildChannelStore from "GuildChannelStore" /* 4513 */;
import UserStore from "UserStore" /* 1377 */;
import size from "module_2" /* 2 */;

const Routes = Constants.Routes;
const MAIN_SURFACE = FramesConstants.MAIN_SURFACE;
const result = size.fileFinishedImporting("modules/conjure/publish/openConjurePublishDestination.tsx");

export const openConjureProductionDm = function openConjureProductionDm(arg0) {
  const application = ApplicationStore.getApplication(arg0);
  let recipientIds;
  if (application != null) {
    const bot = application.bot;
    if (bot != null) {
      recipientIds = bot.id;
    }
  }
  if (recipientIds == null) {
    recipientIds = arg0;
  }
  const obj = ChannelActionCreatorsDefault;
  return obj.openPrivateChannel({ recipientIds });
};
export const openConjurePublishDestination = function openConjurePublishDestination(destination, arg1) {
  let appChannelId;
  let applicationId;
  let guildId;
  let openAutomodSettings;
  ({ applicationId, guildId, appChannelId, openAutomodSettings } = arg1);
  if ("launch" === destination) {
    const obj = canLaunchContextlessFrame;
    if (obj.canLaunchContextlessFrame(ApplicationStore.getApplication(applicationId))) {
      const obj6 = { applicationId, surface: MAIN_SURFACE };
      const obj5 = FramesActionCreatorsDefault;
      const launchFrameResult = obj5.launchFrame(obj6);
      launchFrameResult.catch(() => {

      });
      return Promise.resolve();
    }
  } else if ("profile" === destination) {
    const currentUser = UserStore.getCurrentUser();
    let id;
    if (currentUser != null) {
      id = currentUser.id;
    }
    if (null != id) {
      tmp(id);
      return Promise.resolve();
    }
  } else if ("channel" === destination) {
    if (null != guildId) {
      if (null != appChannelId) {
        const obj7 = router_utils;
        obj7.transitionTo(Routes.CHANNEL(guildId, appChannelId));
        return Promise.resolve();
      }
    }
  } else if ("automod" === destination) {
    if (null != guildId) {
      if (null != openAutomodSettings) {
        openAutomodSettings(guildId);
        return Promise.resolve();
      }
    }
  }
  if ("dm" !== destination) {
    let resolved;
    if (null != guildId) {
      const defaultChannel = GuildChannelStore.getDefaultChannel(guildId);
      let id1;
      if (defaultChannel != null) {
        id1 = defaultChannel.id;
      }
      if (null == id1) {
        const obj4 = transitionToGuild;
        obj4.transitionToGuild(guildId);
      } else {
        const obj3 = router_utils;
        obj3.transitionTo(Routes.CHANNEL(guildId, id1));
      }
      resolved = Promise.resolve();
    }
    return resolved;
  }
  const application = ApplicationStore.getApplication(applicationId);
  let id2;
  if (application != null) {
    const bot = application.bot;
    if (bot != null) {
      id2 = bot.id;
    }
  }
  if (id2 == null) {
    id2 = applicationId;
  }
  const obj2 = ChannelActionCreatorsDefault;
  resolved = obj2.openPrivateChannel({ recipientIds: id2 });
};