// === Module 16915: openConjurePublishDestination ===

// Module 16915 (openConjurePublishDestination)
import router_utils from "router_utils" /* 1112 */;
import ChannelActionCreatorsDefault from "ChannelActionCreators" /* 7001 */;
import transitionToGuild from "transitionToGuild" /* 7043 */;
import canLaunchContextlessFrame from "canLaunchContextlessFrame" /* 10617 */;
import FramesActionCreatorsDefault from "FramesActionCreators" /* 10618 */;
import ApplicationStore from "ApplicationStore" /* 5436 */;
import GuildChannelStore from "GuildChannelStore" /* 4705 */;
import UserStore from "UserStore" /* 1389 */;

require = fn;
const Routes = fn(1085).Routes;
const MAIN_SURFACE = fn(10613).MAIN_SURFACE;
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/publish/openConjurePublishDestination.tsx");
function openConjurePublishDestination(channel, arg1) {
  ({ applicationId, guildId, appChannelId, openProfile, openAutomodSettings } = arg1);
  if ("launch" === channel) {
    if (null != guildId) {
      const obj5 = { applicationId, guildId, appChannelId, openProfile };
      return openConjurePublishDestination("channel", obj5);
    } else {
      if (obj8.canLaunchContextlessFrame(ApplicationStore.getApplication(applicationId))) {
        const obj6 = { applicationId, surface: MAIN_SURFACE };
        FramesActionCreatorsDefault.launchFrame(obj6).catch(() => {

        });
        return Promise.resolve();
      }
      obj8 = canLaunchContextlessFrame;
    }
  } else if ("profile" === channel) {
    const currentUser = UserStore.getCurrentUser();
    let id;
    if (currentUser != null) {
      id = currentUser.id;
    }
    if (null != id) {
      openProfile(id);
      return Promise.resolve();
    }
  } else if ("channel" === channel) {
    if (null != guildId) {
      if (null != appChannelId) {
        router_utils.transitionTo(Routes.CHANNEL(guildId, appChannelId));
        return Promise.resolve();
      }
    }
  } else if ("automod" === channel) {
    if (null != guildId) {
      if (null != openAutomodSettings) {
        openAutomodSettings(guildId);
        return Promise.resolve();
      }
    }
  }
  if ("dm" !== channel) {
    if (null != guildId) {
      const defaultChannel = GuildChannelStore.getDefaultChannel(guildId);
      let id1;
      if (defaultChannel != null) {
        id1 = defaultChannel.id;
      }
      if (null == id1) {
        transitionToGuild.transitionToGuild(guildId);
      } else {
        router_utils.transitionTo(Routes.CHANNEL(guildId, id1));
      }
      const resolved = Promise.resolve();
    }
  }
  const application = ApplicationStore.getApplication(applicationId);
  let recipientIds;
  if (application != null) {
    const bot = application.bot;
    if (bot != null) {
      recipientIds = bot.id;
    }
  }
  if (recipientIds == null) {
    recipientIds = applicationId;
  }
  return ChannelActionCreatorsDefault.openPrivateChannel({ recipientIds });
}

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
  return ChannelActionCreatorsDefault.openPrivateChannel({ recipientIds });
};
export { openConjurePublishDestination };