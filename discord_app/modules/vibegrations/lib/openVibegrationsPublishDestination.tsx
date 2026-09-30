// discord_app/modules/vibegrations/lib/openVibegrationsPublishDestination.tsx
import router_utils from "../../routing/router_utils.tsx";
import ChannelActionCreatorsDefault from "../../../actions/ChannelActionCreators.tsx";
import transitionToGuild from "../../routing/transitionToGuild.native.tsx";
import FramesActionCreatorsDefault from "../../frames/FramesActionCreators.native.tsx";
import canLaunchFrame from "../../frames/utils/canLaunchFrame.tsx";
import ApplicationStore from "../../applications/ApplicationStore.tsx";
import GuildChannelStore from "../../../stores/GuildChannelStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";

require = fn;
const Routes = fn(1074).Routes;
const MAIN_SURFACE = fn(8699).MAIN_SURFACE;
const size = fn(2);
const result = size.fileFinishedImporting("modules/vibegrations/lib/openVibegrationsPublishDestination.tsx");

export const openVibegrationsProductionDm = function openVibegrationsProductionDm(arg0) {
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
export const openVibegrationsPublishDestination = function openVibegrationsPublishDestination(destination, arg1) {
  ({ applicationId, guildId, appChannelId, openAutomodSettings } = arg1);
  if ("launch" === destination) {
    if (obj.canLaunchFrame(ApplicationStore.getApplication(applicationId))) {
      const obj6 = { applicationId, surface: MAIN_SURFACE };
      FramesActionCreatorsDefault.launchFrame(obj6).catch(() => {});
      return Promise.resolve();
    }
    obj = canLaunchFrame;
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
        router_utils.transitionTo(Routes.CHANNEL(guildId, appChannelId));
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
};
