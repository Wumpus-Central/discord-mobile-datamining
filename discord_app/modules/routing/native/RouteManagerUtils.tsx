// === Module 12917: RouteManagerUtils ===

// Module 12917 (RouteManagerUtils)
import LoggerDefault from "Logger" /* 3 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import router_utils from "router_utils" /* 1101 */;
import RouteUtils from "RouteUtils" /* 4479 */;
import Client from "Client" /* 4570 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 4840 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4842 */;
import PrivateChannelCallUtils from "PrivateChannelCallUtils" /* 4846 */;
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 5496 */;
import GuildActionCreatorsDefault from "GuildActionCreators" /* 5605 */;
import MemoryRouter from "MemoryRouter" /* 12918 */;
import DefaultRouteActionCreators from "DefaultRouteActionCreators" /* 12923 */;
import RouteManagerDefault from "RouteManager" /* 12924 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import ChannelStore from "ChannelStore" /* 1958 */;
import DefaultRouteStore from "DefaultRouteStore" /* 4465 */;
import GuildChannelStore from "GuildChannelStore" /* 2013 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2012 */;

require = fn;
function voiceRouteRewriter(location) {
  const obj = { match: MemoryRouter.matchPath(pathname, { path: items, strict: false, exact: false }), location };
  ({ state, pathname } = location);
  const tmp = extractParams(obj);
  ({ channelId, guildId } = tmp);
  const tmp2 = _objectWithoutProperties(tmp, closure_3);
  const channel = ChannelStore.getChannel(channelId);
  let tmp4 = null;
  if (null != channelId) {
    tmp4 = null;
    if (null != guildId) {
      let type;
      if (channel != null) {
        type = channel.type;
      }
      if (type === ChannelTypes.GUILD_VOICE) {
        const obj4 = {};
        const merged = Object.assign(tmp2);
        obj4.channelId = channelId;
        obj4.guildId = guildId;
        tmp4 = obj4;
      } else {
        let type1;
        if (channel != null) {
          type1 = channel.type;
        }
        tmp4 = null;
      }
    }
  }
  if (null != tmp4) {
    if (logger != null) {
      const _JSON = JSON;
      const _HermesInternal = HermesInternal;
      logger.log("voiceRouteRewriter: has voiceChannelParams = " + JSON.stringify(tmp4));
    }
    const _HermesInternal2 = HermesInternal;
    const combined = "" + DefaultRouteStore.lastNonVoiceRoute + Routes.VOICE_CHAT_CHANNEL_PARTIAL(tmp4.guildId, tmp4.channelId, tmp4.messageId);
    let tmp17 = null;
    if (combined !== location.pathname) {
      if (logger != null) {
        const _HermesInternal3 = HermesInternal;
        logger.log("voiceRouteRewriter: rewriting route: " + location.pathname + " -> " + combined);
      }
      const obj6 = { path: combined, state };
      tmp17 = obj6;
    }
    return tmp17;
  } else {
    return null;
  }
  const obj3 = { path: items, strict: false, exact: false };
}
function saveLastRouteListener(pathname) {
  DefaultRouteActionCreators.saveLastRoute(pathname.pathname);
}
function saveLastNonVoiceRouteListener(pathname) {
  const matchPathResult = MemoryRouter.matchPath(pathname.pathname, { path: items, strict: false, exact: false });
  let channelId;
  if (matchPathResult != null) {
    channelId = matchPathResult.params.channelId;
  }
  const channel = ChannelStore.getChannel(channelId);
  let type;
  if (channel != null) {
    type = channel.type;
  }
  let tmp9 = null;
  if (type !== ChannelTypes.GUILD_VOICE) {
    let type1;
    if (channel != null) {
      type1 = channel.type;
    }
    tmp9 = null;
    if (type1 !== tmp8.GUILD_STAGE_VOICE) {
      const obj3 = { match: matchPathResult, location: pathname };
      tmp9 = extractParams(obj3);
    }
  }
  if (null != tmp9) {
    const result = DefaultRouteActionCreators.saveLastNonVoiceRoute(Routes.CHANNEL(tmp9.guildId, tmp9.channelId));
    const tmpResult = DefaultRouteActionCreators;
  }
  const obj2 = { path: items, strict: false, exact: false };
}
function updateSelectedChannelListener(location) {
  const matchPathResult = channel2(12918).matchPath(location.pathname, { path: items, strict: false, exact: false });
  let params;
  if (matchPathResult != null) {
    params = matchPathResult.params;
  }
  if (params == null) {
    params = {};
  }
  const obj3 = {};
  ({ voiceChannelId, voiceGuildId, voiceMessageId } = params);
  const merged = Object.assign(extractParams({ match: matchPathResult, location }));
  obj3.voiceChannelId = voiceChannelId;
  obj3.voiceGuildId = voiceGuildId;
  obj3.voiceMessageId = voiceMessageId;
  ({ guildId, channelId, messageId, jumpType, voiceChannelId: voiceChannelId2, voiceGuildId: voiceGuildId2, voiceMessageId: voiceMessageId2 } = obj3);
  if (null == voiceChannelId2) {
    if (null == voiceGuildId2) {
      if (logger != null) {
        const _JSON5 = JSON;
        const json = JSON.stringify(location);
        const _JSON6 = JSON;
        const obj5 = { guildId, channelId, messageId, jumpType, voiceChannelId: voiceChannelId2, voiceGuildId: voiceGuildId2, voiceMessageId: voiceMessageId2 };
        const _HermesInternal3 = HermesInternal;
        logger.verbose("UpdateSelectedChannelListener -> no voice route present in " + json + " " + JSON.stringify(obj5) + " ");
      }
      const channel = ChannelStore.getChannel(SelectedChannelStore.getLastSelectedChannelId());
      let isGuildVoiceResult;
      if (channel != null) {
        isGuildVoiceResult = channel.isGuildVoice();
      }
      if (!isGuildVoiceResult) {
        let isGuildStageVoiceResult;
        if (channel != null) {
          isGuildStageVoiceResult = channel.isGuildStageVoice();
        }
        isGuildVoiceResult = isGuildStageVoiceResult;
      }
      if (isGuildVoiceResult) {
        const obj21 = ModalActionCreatorsDefault;
        obj21.popWithKey(tmp(4846).getVoiceChannelKey(channel.id));
        const tmpResult = tmp(4846);
      }
      const guild = GuildActionCreatorsDefault.selectGuild(guildId);
      const obj6 = { guildId, channelId, messageId, jumpType, skipMessageFetch: tmp5, opensChannel: null };
      let tmp41 = null != channelId;
      if (tmp41) {
        tmp41 = true !== location.navigationReplace || true === location.openChannel;
        const tmp42 = true !== location.navigationReplace || true === location.openChannel;
      }
      obj6.opensChannel = tmp41;
      const channel1 = SelectedChannelActionCreatorsDefault.selectChannel(obj6);
    }
  }
  channel2 = ChannelStore.getChannel(voiceChannelId2);
  let type;
  if (channel2 != null) {
    type = channel2.type;
  }
  if (type !== ChannelTypes.GUILD_VOICE) {
    let type1;
    if (channel2 != null) {
      type1 = channel2.type;
    }
    if (type1 !== tmp7.GUILD_STAGE_VOICE) {
      if (logger != null) {
        let id;
        if (channel2 != null) {
          id = channel2.id;
        }
        const _JSON = JSON;
        const _JSON2 = JSON;
        const obj7 = { guildId, channelId, messageId, jumpType, voiceChannelId: voiceChannelId2, voiceGuildId: voiceGuildId2, voiceMessageId: voiceMessageId2 };
        const json1 = JSON.stringify(location);
        const _HermesInternal = HermesInternal;
        logger.log("UpdateSelectedChannelListener -> !!!VERY BAD!!! channel.id " + id + " (voiceChannelId " + voiceChannelId2 + ") is not a voice channel! and yet RouteUtils thinks it is! " + json1 + " " + JSON.stringify(obj7) + " ");
      }
    }
  }
  if (logger != null) {
    const _JSON3 = JSON;
    const json2 = JSON.stringify(location);
    const _JSON4 = JSON;
    const obj9 = { guildId, channelId, messageId, jumpType, voiceChannelId: voiceChannelId2, voiceGuildId: voiceGuildId2, voiceMessageId: voiceMessageId2 };
    const _HermesInternal2 = HermesInternal;
    logger.verbose("UpdateSelectedChannelListener -> voice route present! " + json2 + " " + JSON.stringify(obj9) + " ");
  }
  const obj = channel2(12918);
  const obj2 = { path: items, strict: false, exact: false };
  const obj4 = { match: matchPathResult, location };
  if (!tmpResult5.isVoicePanelEnabled(channel2)) {
    const guild1 = GuildActionCreatorsDefault.selectGuild(voiceGuildId2);
    const obj12 = { guildId: voiceGuildId2, channelId: voiceChannelId2, messageId: voiceMessageId2, jumpType };
    const channel3 = SelectedChannelActionCreatorsDefault.selectChannel(obj12);
  }
  tmpResult5 = channel2(9813);
  const tmpResult6 = channel2(4497);
  if (!tmpResult6.isModalOpen(tmpResult7.getVoiceChannelKey(channel2.id))) {
    const obj15 = ModalActionCreatorsDefault;
    obj15.popAboveKey(tmp(4846).getVoiceChannelKey(channel2.id));
    const tmpResult8 = tmp(4846);
    DispatcherDefault.wait(() => {
      PrivateChannelCallUtils.openGuildVoiceModal(channel2);
    });
  }
  tmpResult7 = channel2(4846);
  if (tmp21) {
    setVoiceChatDrawerState(channel2.id, VoiceChatDrawerState.OPEN);
    if (tmp25) {
      const obj18 = ChannelRTCActionCreatorsDefault;
      const result = obj18.jumpToVoiceChannelMessage(voiceGuildId2, voiceChannelId2, voiceMessageId2, jumpType);
    }
    tmp25 = null != voiceGuildId2 && null != voiceChannelId2 && null != voiceMessageId2;
  }
  tmp21 = channel2.isGuildVoice() && null != voiceMessageId2 || channel2.isGuildStageVoice();
}
function extractParams(arg0) {
  ({ match, location: _location } = arg0);
  if (null == match) {
    const obj = { guildId, channelId: null, messageId: null, jumpType: Client.JumpType.ANIMATED, skipMessageFetch: false };
    return obj;
  } else {
    const params = match.params;
    ({ guildId, channelId } = params);
    if (_location.jumpType === Client.JumpType.INSTANT) {
      let ANIMATED = Client.JumpType.INSTANT;
    } else {
      ANIMATED = Client.JumpType.ANIMATED;
    }
    RouteUtils;
    const obj2 = { guildId, channelId: null, messageId: null, jumpType: null, skipMessageFetch: null };
    let tmp = null;
    if (tmp5Result2.isValidChannelId(channelId)) {
      tmp = channelId;
    }
    obj2.channelId = tmp;
    obj2.messageId = params.messageId;
    obj2.jumpType = ANIMATED;
    obj2.skipMessageFetch = _location.skipMessageFetch;
    return obj2;
  }
}
function logRouteChange(pathname) {
  logger.log("Navigated to: " + pathname.pathname);
}
let closure_3 = ["channelId", "guildId"];
const setVoiceChatDrawerState = fn(9599).setVoiceChatDrawerState;
let closure_6 = fn(1962).isGuildSelectableChannelType;
const Constants = fn(1074);
({ ME: closure_11, Routes } = Constants);
const ChannelTypes = Constants.ChannelTypes;
const VoiceChatDrawerState = fn(9600).VoiceChatDrawerState;
const logger = new LoggerDefault("RouteUtils");
let c16 = false;
const RouteParam = fn(4479).RouteParam;
const tmp3 = new LoggerDefault("RouteUtils");
const RouteParam2 = fn(4479).RouteParam;
const CHANNELResult = Routes.CHANNEL(RouteParam.guildId(), RouteParam2.channelId({ optional: true }), ":messageId?");
const RouteParam3 = fn(4479).RouteParam;
const guildIdResult = RouteParam.guildId();
const RouteParam4 = fn(4479).RouteParam;
const items = ["" + CHANNELResult + Routes.VOICE_CHAT_CHANNEL_PARTIAL(RouteParam3.guildId({ name: "voiceGuildId" }), RouteParam4.channelId({ name: "voiceChannelId" }), ":voiceMessageId?"), CHANNELResult];
const size = fn(2);
let result = size.fileFinishedImporting("modules/routing/native/RouteManagerUtils.tsx");

export const MAIN_DRAWER_ROUTES = CHANNELResult;
export const extractParamsFromVoiceModalRoute = function extractParamsFromVoiceModalRoute(location) {
  const matchPathResult = MemoryRouter.matchPath(location.pathname, { path: items, strict: false, exact: false });
  let params;
  if (matchPathResult != null) {
    params = matchPathResult.params;
  }
  if (params == null) {
    params = {};
  }
  const obj3 = {};
  ({ voiceChannelId, voiceGuildId, voiceMessageId } = params);
  const merged = Object.assign(extractParams({ match: matchPathResult, location }));
  obj3.voiceChannelId = voiceChannelId;
  obj3.voiceGuildId = voiceGuildId;
  obj3.voiceMessageId = voiceMessageId;
  return obj3;
};
export const popVoiceRoute = function popVoiceRoute(guildId) {
  const lastNonVoiceRoute = DefaultRouteStore.lastNonVoiceRoute;
  logger.log("popVoiceRoute: last non-voice route is " + lastNonVoiceRoute);
  const obj2 = { guildId, channelId: null };
  const channel = ChannelStore.getChannel(SelectedChannelStore.getLastSelectedChannelId());
  let type;
  if (channel != null) {
    type = channel.type;
  }
  if (null != type) {
    let type1;
    if (channel != null) {
      type1 = channel.type;
    }
    if (closure_6(type1)) {
      let id = channel.id;
    }
    obj2.channelId = id;
    const channel1 = obj.selectChannel(obj2);
    router_utils.transitionTo(lastNonVoiceRoute);
  }
  id = SelectedChannelStore.getMostRecentSelectedTextChannelId(guildId);
  if (id == null) {
    const defaultChannel = GuildChannelStore.getDefaultChannel(guildId);
    let id1;
    if (defaultChannel != null) {
      id1 = defaultChannel.id;
    }
    id = id1;
  }
  obj = SelectedChannelActionCreatorsDefault;
};
export const transitionToVoiceRoute = function transitionToVoiceRoute(guild_id, id) {
  const defaultRoute = DefaultRouteStore.defaultRoute;
  const matchPathResult = MemoryRouter.matchPath(defaultRoute, { path: items, strict: false, exact: false });
  let params;
  if (matchPathResult != null) {
    params = matchPathResult.params;
  }
  if (params == null) {
    params = {};
  }
  const voiceChannelId = params.voiceChannelId;
  logger.log("transitionToVoiceRoute(<" + guild_id + ">, <" + id + ">), current route " + defaultRoute + " has voiceChannelId " + voiceChannelId);
  if (voiceChannelId !== id) {
    router_utils.transitionToGuild(guild_id, id);
    const tmpResult = router_utils;
  } else {
    const _HermesInternal = HermesInternal;
    logger.log("transitionToVoiceRoute -> " + voiceChannelId + " === " + id + ". staying where we are");
  }
  const obj2 = { path: items, strict: false, exact: false };
};
export { voiceRouteRewriter };
export { saveLastRouteListener };
export { saveLastNonVoiceRouteListener };
export { updateSelectedChannelListener };
export { extractParams };
export const initializeRouteManagerIfNeeded = function initializeRouteManagerIfNeeded() {
  if (!c16) {
    RouteManagerDefault.addRouteRewriter(voiceRouteRewriter);
    const result = RouteManagerDefault.addRouteChangeListener(saveLastRouteListener);
    const result1 = RouteManagerDefault.addRouteChangeListener(saveLastNonVoiceRouteListener);
    const result2 = RouteManagerDefault.addRouteChangeListener(updateSelectedChannelListener);
    const result3 = RouteManagerDefault.addRouteChangeListener(logRouteChange);
    RouteManagerDefault.initialize();
    c16 = true;
  }
};
export const cleanupRouteManager = function cleanupRouteManager() {
  if (c16) {
    RouteManagerDefault.removeRouteRewriter(voiceRouteRewriter);
    const result = RouteManagerDefault.removeRouteChangeListener(saveLastRouteListener);
    const result1 = RouteManagerDefault.removeRouteChangeListener(saveLastNonVoiceRouteListener);
    const result2 = RouteManagerDefault.removeRouteChangeListener(updateSelectedChannelListener);
    const result3 = RouteManagerDefault.removeRouteChangeListener(logRouteChange);
    RouteManagerDefault.cleanup();
    c16 = false;
  }
};