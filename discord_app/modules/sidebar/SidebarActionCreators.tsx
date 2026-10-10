// === Module 9315: SidebarActionCreators ===

// Module 9315 (SidebarActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 1085 */;
import router_utils from "router_utils" /* 1112 */;
import ChannelRecord from "ChannelRecord" /* 2069 */;
import ChannelConstants from "ChannelConstants" /* 2072 */;
import Client from "Client" /* 5027 */;
import SidebarActionTypes from "SidebarActionTypes" /* 6063 */;
import MessageActionCreatorsDefault from "MessageActionCreators" /* 7178 */;
import MessageManagerDefault from "MessageManager" /* 9316 */;
import GuildOnboardingHomeActionCreators from "GuildOnboardingHomeActionCreators" /* 9319 */;
import ChannelStore from "ChannelStore" /* 2065 */;
import size from "module_2" /* 2 */;

let closure_3 = ChannelRecord.isChannelThreadsForcedOpenedInFullView;
const Routes = Constants.Routes;
const StaticChannelRoute = ChannelConstants.StaticChannelRoute;
const result = size.fileFinishedImporting("modules/sidebar/SidebarActionCreators.tsx");

export default {
  openPrivateChannelAsSidebar(arg0) {
    ({ channelId, messageId } = arg0);
    ({ baseChannelId, hasSingleMessageRequest } = arg0);
    const obj = DispatcherDefault;
    obj.dispatch({ type: "SIDEBAR_VIEW_CHANNEL", sidebarType: SidebarActionTypes.SidebarType.VIEW_MESSAGE_REQUEST, baseChannelId, channelId, details: { hasSingleMessageRequest } });
    if (null != messageId) {
      const obj3 = { channelId, messageId, flash: true };
      MessageActionCreatorsDefault.jumpToMessage(obj3);
      const tmpResult = MessageActionCreatorsDefault;
    } else {
      const obj4 = { channelId };
      const messages = MessageManagerDefault.fetchMessages(obj4);
      const tmpResult2 = MessageManagerDefault;
    }
    const obj2 = { type: "SIDEBAR_VIEW_CHANNEL", sidebarType: SidebarActionTypes.SidebarType.VIEW_MESSAGE_REQUEST, baseChannelId, channelId, details: { hasSingleMessageRequest } };
  },
  openChannelAsSidebar(baseChannelId) {
    ({ guildId, channelId, flash } = baseChannelId);
    if (flash === undefined) {
      flash = true;
    }
    const details = baseChannelId.details;
    const obj = DispatcherDefault;
    obj.dispatch({ type: "SIDEBAR_VIEW_CHANNEL", sidebarType: SidebarActionTypes.SidebarType.VIEW_CHANNEL, guildId, baseChannelId: baseChannelId.baseChannelId, channelId, details });
    if (null != details.initialMessageId) {
      const obj3 = { channelId, messageId: details.initialMessageId, flash, jumpType: Client.JumpType.INSTANT };
      MessageActionCreatorsDefault.jumpToMessage(obj3);
      const tmpResult = MessageActionCreatorsDefault;
    } else {
      const obj4 = { guildId, channelId };
      const messages = MessageManagerDefault.fetchMessages(obj4);
      const tmpResult2 = MessageManagerDefault;
    }
    const obj2 = { type: "SIDEBAR_VIEW_CHANNEL", sidebarType: SidebarActionTypes.SidebarType.VIEW_CHANNEL, guildId, baseChannelId: baseChannelId.baseChannelId, channelId, details };
  },
  openResourceChannelAsSidebar(arg0) {
    ({ guildId, channelId } = arg0);
    if (null != guildId) {
      const homeResourceChannel = GuildOnboardingHomeActionCreators.selectHomeResourceChannel(guildId, channelId, false);
      const obj3 = { type: "SIDEBAR_VIEW_CHANNEL", sidebarType: SidebarActionTypes.SidebarType.VIEW_CHANNEL, guildId, baseChannelId: StaticChannelRoute.GUILD_HOME, channelId, details: null };
      const obj4 = { type: SidebarActionTypes.ViewChannelDetailType.CHAT };
      obj3.details = obj4;
      DispatcherDefault.dispatch(obj3);
    }
  },
  openModReportAsSidebar(details) {
    ({ channelId, flash } = details);
    ({ guildId, baseChannelId } = details);
    if (flash === undefined) {
      flash = true;
    }
    details = details.details;
    const obj = DispatcherDefault;
    obj.dispatch({ type: "SIDEBAR_VIEW_CHANNEL", sidebarType: SidebarActionTypes.SidebarType.VIEW_MOD_REPORT, baseChannelId, channelId, details });
    let initialMessageId;
    if (details != null) {
      initialMessageId = details.initialMessageId;
    }
    if (null != initialMessageId) {
      const obj3 = { channelId, messageId: details.initialMessageId, flash, jumpType: Client.JumpType.INSTANT };
      MessageActionCreatorsDefault.jumpToMessage(obj3);
      const tmpResult = MessageActionCreatorsDefault;
    } else {
      const obj4 = { guildId, channelId };
      const messages = MessageManagerDefault.fetchMessages(obj4);
      const tmpResult2 = MessageManagerDefault;
    }
    const obj2 = { type: "SIDEBAR_VIEW_CHANNEL", sidebarType: SidebarActionTypes.SidebarType.VIEW_MOD_REPORT, baseChannelId, channelId, details };
  },
  openThreadAsSidebar(details) {
    ({ guildId, baseChannelId, channelId, flash } = details);
    if (flash === undefined) {
      flash = true;
    }
    details = details.details;
    const channel = ChannelStore.getChannel(baseChannelId);
    if (null != channel) {
      if (closure_3(channel.type)) {
        const initialMessageId = details.initialMessageId;
        router_utils.replaceWith(Routes.CHANNEL(guildId, channelId, initialMessageId));
      }
    }
    const obj = DispatcherDefault;
    obj.dispatch({ type: "SIDEBAR_VIEW_CHANNEL", sidebarType: SidebarActionTypes.SidebarType.VIEW_CHANNEL, baseChannelId, channelId, details });
    if (null != details.initialMessageId) {
      const obj3 = { channelId, messageId: details.initialMessageId, flash, jumpType: Client.JumpType.INSTANT };
      MessageActionCreatorsDefault.jumpToMessage(obj3);
      const tmp3Result = MessageActionCreatorsDefault;
    } else {
      const obj4 = { guildId, channelId };
      const messages = MessageManagerDefault.fetchMessages(obj4);
      const tmp3Result2 = MessageManagerDefault;
    }
    const obj2 = { type: "SIDEBAR_VIEW_CHANNEL", sidebarType: SidebarActionTypes.SidebarType.VIEW_CHANNEL, baseChannelId, channelId, details };
  },
  closeChannelSidebar(baseChannelId) {
    DispatcherDefault.dispatch({ type: "SIDEBAR_CLOSE", baseChannelId });
  },
  openGuildSidebar(arg0) {
    ({ guildId, baseChannelId, sidebarType, details } = arg0);
    return DispatcherDefault.dispatch({ type: "SIDEBAR_VIEW_GUILD", sidebarType, baseChannelId, guildId, details });
  },
  closeGuildSidebar(guildId) {
    DispatcherDefault.dispatch({ type: "SIDEBAR_CLOSE_GUILD", guildId });
  },
  setSelectedSearchContext(searchContextId) {
    DispatcherDefault.dispatch({ type: "SIDEBAR_SET_SELECTED_SEARCH_CONTEXT", searchContextId });
  }
};