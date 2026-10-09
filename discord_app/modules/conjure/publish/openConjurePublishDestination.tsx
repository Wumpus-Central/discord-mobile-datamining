// discord_app/modules/conjure/publish/openConjurePublishDestination.tsx
import router_utils from "../../routing/router_utils.tsx";
import ChannelActionCreatorsDefault from "../../../actions/ChannelActionCreators.tsx";
import transitionToGuild from "../../routing/transitionToGuild.native.tsx";
import canLaunchContextlessFrame from "../../frames/utils/canLaunchContextlessFrame.tsx";
import FramesActionCreatorsDefault from "../../frames/FramesActionCreators.native.tsx";
import ApplicationStore from "../../applications/ApplicationStore.tsx";
import GuildChannelStore from "../../../stores/GuildChannelStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";

require = fn;
const Routes = fn(1085).Routes;
const MAIN_SURFACE = fn(10767).MAIN_SURFACE;
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
        FramesActionCreatorsDefault.launchFrame(obj6).catch(() => {});
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
