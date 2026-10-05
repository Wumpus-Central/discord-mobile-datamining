// discord_app/modules/conjure/publish/openConjurePublishDestination.tsx
import Constants from "../../../Constants.tsx";
import router_utils from "../../routing/router_utils.tsx";
import ChannelActionCreatorsDefault from "../../../actions/ChannelActionCreators.tsx";
import transitionToGuild from "../../routing/transitionToGuild.native.tsx";
import FramesConstants from "../../frames/FramesConstants.tsx";
import FramesActionCreatorsDefault from "../../frames/FramesActionCreators.native.tsx";
import canLaunchContextlessFrame from "../../frames/utils/canLaunchContextlessFrame.tsx";
import ApplicationStore from "../../applications/ApplicationStore.tsx";
import GuildChannelStore from "../../../stores/GuildChannelStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";
import size from "../../../../_runtime/metro/00002__.js";

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
      launchFrameResult.catch(() => {});
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
