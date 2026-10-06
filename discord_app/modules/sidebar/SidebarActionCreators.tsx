// === Module 7527: SidebarActionCreators ===

// Module 7527 (SidebarActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 1085 */;
import router_utils from "router_utils" /* 1112 */;
import ChannelRecord from "ChannelRecord" /* 2055 */;
import ChannelConstants from "ChannelConstants" /* 2058 */;
import flow_Client from "flow/Client" /* 4793 */;
import SidebarActionTypes from "SidebarActionTypes" /* 6795 */;
import MessageActionCreatorsDefault from "MessageActionCreators" /* 6978 */;
import MessageManagerDefault from "MessageManager" /* 7528 */;
import GuildOnboardingHomeActionCreators from "GuildOnboardingHomeActionCreators" /* 7532 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import size from "module_2" /* 2 */;

let closure_3 = ChannelRecord.isChannelThreadsForcedOpenedInFullView;
const Routes = Constants.Routes;
const StaticChannelRoute = ChannelConstants.StaticChannelRoute;
let obj = {
  openPrivateChannelAsSidebar(arg0) {
    let baseChannelId;
    let channelId;
    let hasSingleMessageRequest;
    let messageId;
    ({ channelId, messageId } = arg0);
    ({ baseChannelId, hasSingleMessageRequest } = arg0);
    const obj = DispatcherDefault;
    const obj2 = { type: "SIDEBAR_VIEW_CHANNEL", sidebarType: SidebarActionTypes.SidebarType.VIEW_MESSAGE_REQUEST, baseChannelId, channelId, details: { hasSingleMessageRequest } };
    obj.dispatch(obj2);
    if (null != messageId) {
      const obj3 = { channelId, messageId, flash: true };
      const tmpResult = MessageActionCreatorsDefault;
      tmpResult.jumpToMessage(obj3);
    } else {
      const obj4 = { channelId };
      const tmpResult2 = MessageManagerDefault;
      const messages = tmpResult2.fetchMessages(obj4);
    }
  },
  openChannelAsSidebar(baseChannelId) {
    let channelId;
    let flash;
    let guildId;
    ({ guildId, channelId, flash } = baseChannelId);
    baseChannelId = baseChannelId.baseChannelId;
    if (flash === undefined) {
      flash = true;
    }
    const details = baseChannelId.details;
    const obj = DispatcherDefault;
    const obj2 = { type: "SIDEBAR_VIEW_CHANNEL", sidebarType: SidebarActionTypes.SidebarType.VIEW_CHANNEL, guildId, baseChannelId, channelId, details };
    obj.dispatch(obj2);
    if (null != details.initialMessageId) {
      const obj3 = { channelId, messageId: details.initialMessageId, flash, jumpType: flow_Client.JumpType.INSTANT };
      const jumpToMessage = MessageActionCreatorsDefault.jumpToMessage;
      MessageActionCreatorsDefault;
      jumpToMessage(obj3);
    } else {
      const obj4 = { guildId, channelId };
      const tmpResult2 = MessageManagerDefault;
      const messages = tmpResult2.fetchMessages(obj4);
    }
  },
  openResourceChannelAsSidebar(arg0) {
    let channelId;
    let guildId;
    let obj3;
    ({ guildId, channelId } = arg0);
    if (null != guildId) {
      const obj = GuildOnboardingHomeActionCreators;
      const homeResourceChannel = obj.selectHomeResourceChannel(guildId, channelId, false);
      const obj2 = { type: "SIDEBAR_VIEW_CHANNEL", sidebarType: SidebarActionTypes.SidebarType.VIEW_CHANNEL, guildId, baseChannelId: StaticChannelRoute.GUILD_HOME, channelId, details: obj3 };
      const dispatch = DispatcherDefault.dispatch;
      DispatcherDefault;
      obj3 = { type: SidebarActionTypes.ViewChannelDetailType.CHAT };
      dispatch(obj2);
    }
  },
  openModReportAsSidebar(details) {
    let baseChannelId;
    let channelId;
    let flash;
    let guildId;
    ({ channelId, flash } = details);
    ({ guildId, baseChannelId } = details);
    if (flash === undefined) {
      flash = true;
    }
    details = details.details;
    const obj = DispatcherDefault;
    const obj2 = { type: "SIDEBAR_VIEW_CHANNEL", sidebarType: SidebarActionTypes.SidebarType.VIEW_MOD_REPORT, baseChannelId, channelId, details };
    obj.dispatch(obj2);
    let initialMessageId;
    if (details != null) {
      initialMessageId = details.initialMessageId;
    }
    if (null != initialMessageId) {
      const obj3 = { channelId, messageId: details.initialMessageId, flash, jumpType: flow_Client.JumpType.INSTANT };
      const jumpToMessage = MessageActionCreatorsDefault.jumpToMessage;
      MessageActionCreatorsDefault;
      jumpToMessage(obj3);
    } else {
      const obj4 = { guildId, channelId };
      const tmpResult2 = MessageManagerDefault;
      const messages = tmpResult2.fetchMessages(obj4);
    }
  },
  openThreadAsSidebar(details) {
    let baseChannelId;
    let channelId;
    let flash;
    let guildId;
    ({ guildId, baseChannelId, channelId, flash } = details);
    if (flash === undefined) {
      flash = true;
    }
    details = details.details;
    const channel = ChannelStore.getChannel(baseChannelId);
    if (null != channel) {
      if (closure_3(channel.type)) {
        const initialMessageId = details.initialMessageId;
        const replaceWith = router_utils.replaceWith;
        const CHANNEL = Routes.CHANNEL;
        router_utils;
        replaceWith(CHANNEL(guildId, channelId, initialMessageId));
      }
    }
    const obj = DispatcherDefault;
    const obj2 = { type: "SIDEBAR_VIEW_CHANNEL", sidebarType: SidebarActionTypes.SidebarType.VIEW_CHANNEL, baseChannelId, channelId, details };
    obj.dispatch(obj2);
    if (null != details.initialMessageId) {
      const obj3 = { channelId, messageId: details.initialMessageId, flash, jumpType: flow_Client.JumpType.INSTANT };
      const jumpToMessage = MessageActionCreatorsDefault.jumpToMessage;
      MessageActionCreatorsDefault;
      jumpToMessage(obj3);
    } else {
      const obj4 = { guildId, channelId };
      const tmp3Result2 = MessageManagerDefault;
      const messages = tmp3Result2.fetchMessages(obj4);
    }
  },
  closeChannelSidebar(baseChannelId) {
    const obj = DispatcherDefault;
    const obj2 = { type: "SIDEBAR_CLOSE", baseChannelId };
    obj.dispatch(obj2);
  },
  openGuildSidebar(arg0) {
    let baseChannelId;
    let details;
    let guildId;
    let sidebarType;
    ({ guildId, baseChannelId, sidebarType, details } = arg0);
    const obj = DispatcherDefault;
    return obj.dispatch({ type: "SIDEBAR_VIEW_GUILD", sidebarType, baseChannelId, guildId, details });
  },
  closeGuildSidebar(guildId) {
    const obj = DispatcherDefault;
    const obj2 = { type: "SIDEBAR_CLOSE_GUILD", guildId };
    obj.dispatch(obj2);
  },
  setSelectedSearchContext(searchContextId) {
    const obj = DispatcherDefault;
    const obj2 = { type: "SIDEBAR_SET_SELECTED_SEARCH_CONTEXT", searchContextId };
    obj.dispatch(obj2);
  }
};
const result = size.fileFinishedImporting("modules/sidebar/SidebarActionCreators.tsx");

export default obj;