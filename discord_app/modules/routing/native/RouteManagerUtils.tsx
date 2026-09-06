// discord_app/modules/routing/native/RouteManagerUtils.tsx
import LoggerDefault from "../../debug/Logger.tsx";
import DispatcherDefault from "../../../Dispatcher.tsx";
import router_utils from "../router_utils.tsx";
import RouteUtils from "../RouteUtils.tsx";
import Client from "../../../flow/Client.tsx";
import ChannelRTCActionCreatorsDefault from "../../../actions/ChannelRTCActionCreators.tsx";
import ModalActionCreatorsDefault from "../../../actions/ModalActionCreators.tsx";
import PrivateChannelCallUtils from "../../../utils/native/PrivateChannelCallUtils.tsx";
import SelectedChannelActionCreatorsDefault from "../../../actions/SelectedChannelActionCreators.tsx";
import GuildActionCreatorsDefault from "../../../actions/GuildActionCreators.tsx";
import MemoryRouter from "../../../../_runtime/12783_MemoryRouter.js";
import DefaultRouteActionCreators from "../../../actions/DefaultRouteActionCreators.tsx";
import RouteManagerDefault from "../RouteManager.tsx";
import _objectWithoutProperties from "../../../../_runtime/metro/00109__objectWithoutProperties.js";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import DefaultRouteStore from "../../../stores/DefaultRouteStore.tsx";
import GuildChannelStore from "../../../stores/GuildChannelStore.tsx";
import SelectedChannelStore from "../../../stores/SelectedChannelStore.tsx";

require = fn;
function voiceRouteRewriter(location) {
  let obj = { match: null, location: null };
  ({ state, pathname } = location);
  let obj1 = MemoryRouter;
  obj = { path: items, strict: false, exact: false };
  obj.match = obj1.matchPath(pathname, obj);
  obj.location = location;
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
        obj = {};
        const merged = Object.assign(tmp2);
        obj.channelId = channelId;
        obj.guildId = guildId;
        tmp4 = obj;
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
    const combined =
      "" +
      DefaultRouteStore.lastNonVoiceRoute +
      Routes.VOICE_CHAT_CHANNEL_PARTIAL(tmp4.guildId, tmp4.channelId, tmp4.messageId);
    let tmp17 = null;
    if (combined !== location.pathname) {
      if (logger != null) {
        const _HermesInternal3 = HermesInternal;
        logger.log("voiceRouteRewriter: rewriting route: " + location.pathname + " -> " + combined);
      }
      obj1 = { path: combined, state };
      tmp17 = obj1;
    }
    return tmp17;
  } else {
    return null;
  }
}
function saveLastRouteListener(pathname) {
  DefaultRouteActionCreators.saveLastRoute(pathname.pathname);
}
function saveLastNonVoiceRouteListener(pathname) {
  let obj = { path: items, strict: false, exact: false };
  const matchPathResult = obj.matchPath(pathname.pathname, obj);
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
      obj = { match: matchPathResult, location: pathname };
      tmp9 = extractParams(obj);
    }
  }
  if (null != tmp9) {
    const result = DefaultRouteActionCreators.saveLastNonVoiceRoute(Routes.CHANNEL(tmp9.guildId, tmp9.channelId));
    const tmpResult = DefaultRouteActionCreators;
  }
}
function updateSelectedChannelListener(location) {
  channel2(12783);
  let obj = { path: items, strict: false, exact: false };
  const matchPathResult = obj.matchPath(location.pathname, obj);
  let params;
  if (matchPathResult != null) {
    params = matchPathResult.params;
  }
  if (params == null) {
    params = {};
  }
  obj = {};
  ({ voiceChannelId, voiceGuildId, voiceMessageId } = params);
  const merged = Object.assign(extractParams({ match: matchPathResult, location }));
  obj.voiceChannelId = voiceChannelId;
  obj.voiceGuildId = voiceGuildId;
  obj.voiceMessageId = voiceMessageId;
  ({
    guildId,
    channelId,
    messageId,
    jumpType,
    voiceChannelId: voiceChannelId2,
    voiceGuildId: voiceGuildId2,
    voiceMessageId: voiceMessageId2,
  } = obj);
  if (null == voiceChannelId2) {
    if (null == voiceGuildId2) {
      if (logger != null) {
        const _JSON5 = JSON;
        const json = JSON.stringify(location);
        const _JSON6 = JSON;
        const obj2 = {
          guildId,
          channelId,
          messageId,
          jumpType,
          voiceChannelId: voiceChannelId2,
          voiceGuildId: voiceGuildId2,
          voiceMessageId: voiceMessageId2,
        };
        const _HermesInternal3 = HermesInternal;
        logger.verbose(
          "UpdateSelectedChannelListener -> no voice route present in " + json + " " + JSON.stringify(obj2) + " ",
        );
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
        let tmpResult = tmp(4767);
        ModalActionCreatorsDefault.popWithKey(tmpResult.getVoiceChannelKey(channel.id));
      }
      const guild = GuildActionCreatorsDefault.selectGuild(guildId);
      const obj3 = { guildId, channelId, messageId, jumpType, skipMessageFetch: tmp5, opensChannel: null };
      let tmp41 = null != channelId;
      if (tmp41) {
        tmp41 = true !== location.navigationReplace || true === location.openChannel;
        const tmp42 = true !== location.navigationReplace || true === location.openChannel;
      }
      obj3.opensChannel = tmp41;
      const channel1 = SelectedChannelActionCreatorsDefault.selectChannel(obj3);
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
        const obj4 = {
          guildId,
          channelId,
          messageId,
          jumpType,
          voiceChannelId: voiceChannelId2,
          voiceGuildId: voiceGuildId2,
          voiceMessageId: voiceMessageId2,
        };
        const json1 = JSON.stringify(location);
        const _HermesInternal = HermesInternal;
        logger.log(
          "UpdateSelectedChannelListener -> !!!VERY BAD!!! channel.id " +
            id +
            " (voiceChannelId " +
            voiceChannelId2 +
            ") is not a voice channel! and yet RouteUtils thinks it is! " +
            json1 +
            " " +
            JSON.stringify(obj4) +
            " ",
        );
      }
    }
  }
  if (logger != null) {
    const _JSON3 = JSON;
    const json2 = JSON.stringify(location);
    const _JSON4 = JSON;
    const obj5 = {
      guildId,
      channelId,
      messageId,
      jumpType,
      voiceChannelId: voiceChannelId2,
      voiceGuildId: voiceGuildId2,
      voiceMessageId: voiceMessageId2,
    };
    const _HermesInternal2 = HermesInternal;
    logger.verbose("UpdateSelectedChannelListener -> voice route present! " + json2 + " " + JSON.stringify(obj5) + " ");
  }
  tmpResult = tmp(9681);
  if (!tmpResult.isVoicePanelEnabled(channel2)) {
    const guild1 = GuildActionCreatorsDefault.selectGuild(voiceGuildId2);
    const obj6 = { guildId: voiceGuildId2, channelId: voiceChannelId2, messageId: voiceMessageId2, jumpType };
    const channel3 = SelectedChannelActionCreatorsDefault.selectChannel(obj6);
  }
  const obj1 = { match: matchPathResult, location };
  const tmpResult1 = channel2(4417);
  if (!tmpResult1.isModalOpen(tmpResult2.getVoiceChannelKey(channel2.id))) {
    const obj15 = ModalActionCreatorsDefault;
    obj15.popAboveKey(tmp(4767).getVoiceChannelKey(channel2.id));
    const tmpResult3 = tmp(4767);
    DispatcherDefault.wait(() => {
      PrivateChannelCallUtils.openGuildVoiceModal(channel2);
    });
  }
  tmpResult2 = channel2(4767);
  if (tmp21) {
    setVoiceChatDrawerState(channel2.id, VoiceChatDrawerState.OPEN);
    if (tmp25) {
      const obj18 = ChannelRTCActionCreatorsDefault;
      const result = obj18.jumpToVoiceChannelMessage(voiceGuildId2, voiceChannelId2, voiceMessageId2, jumpType);
    }
    tmp25 = null != voiceGuildId2 && null != voiceChannelId2 && null != voiceMessageId2;
  }
  tmp21 = (channel2.isGuildVoice() && null != voiceMessageId2) || channel2.isGuildStageVoice();
}
function extractParams(arg0) {
  ({ match, location: _location } = arg0);
  if (null == match) {
    let obj = {
      guildId,
      channelId: null,
      messageId: null,
      jumpType: Client.JumpType.ANIMATED,
      skipMessageFetch: false,
    };
    return obj;
  } else {
    const params = match.params;
    ({ guildId, channelId } = params);
    if (_location.jumpType === Client.JumpType.INSTANT) {
      let ANIMATED = Client.JumpType.INSTANT;
    } else {
      ANIMATED = Client.JumpType.ANIMATED;
    }
    obj = { guildId, channelId: null, messageId: null, jumpType: null, skipMessageFetch: null };
    const tmp5Result = RouteUtils;
    let tmp = null;
    if (tmp5Result.isValidChannelId(channelId)) {
      tmp = channelId;
    }
    obj.channelId = tmp;
    obj.messageId = params.messageId;
    obj.jumpType = ANIMATED;
    obj.skipMessageFetch = _location.skipMessageFetch;
    return obj;
  }
}
function logRouteChange(pathname) {
  logger.log("Navigated to: " + pathname.pathname);
}
let closure_3 = ["channelId", "guildId"];
const setVoiceChatDrawerState = fn(9467).setVoiceChatDrawerState;
let closure_6 = fn(1961).isGuildSelectableChannelType;
const Constants = fn(1074);
({ ME: closure_11, Routes } = Constants);
const ChannelTypes = Constants.ChannelTypes;
const VoiceChatDrawerState = fn(9468).VoiceChatDrawerState;
const logger = new LoggerDefault("RouteUtils");
let c16 = false;
const RouteParam = fn(4399).RouteParam;
const tmp3 = new LoggerDefault("RouteUtils");
const RouteParam2 = fn(4399).RouteParam;
const CHANNELResult = Routes.CHANNEL(RouteParam.guildId(), RouteParam2.channelId({ optional: true }), ":messageId?");
const RouteParam3 = fn(4399).RouteParam;
const guildIdResult = RouteParam.guildId();
const RouteParam4 = fn(4399).RouteParam;
const items = [
  "" +
    CHANNELResult +
    Routes.VOICE_CHAT_CHANNEL_PARTIAL(
      RouteParam3.guildId({ name: "voiceGuildId" }),
      RouteParam4.channelId({ name: "voiceChannelId" }),
      ":voiceMessageId?",
    ),
  CHANNELResult,
];
const size = fn(2);
let result = size.fileFinishedImporting("modules/routing/native/RouteManagerUtils.tsx");

export const MAIN_DRAWER_ROUTES = CHANNELResult;
export const extractParamsFromVoiceModalRoute = function extractParamsFromVoiceModalRoute(location) {
  let obj = { path: items, strict: false, exact: false };
  const matchPathResult = obj.matchPath(location.pathname, obj);
  let params;
  if (matchPathResult != null) {
    params = matchPathResult.params;
  }
  if (params == null) {
    params = {};
  }
  obj = {};
  ({ voiceChannelId, voiceGuildId, voiceMessageId } = params);
  const merged = Object.assign(extractParams({ match: matchPathResult, location }));
  obj.voiceChannelId = voiceChannelId;
  obj.voiceGuildId = voiceGuildId;
  obj.voiceMessageId = voiceMessageId;
  return obj;
};
export const popVoiceRoute = function popVoiceRoute(guildId) {
  const lastNonVoiceRoute = DefaultRouteStore.lastNonVoiceRoute;
  logger.log("popVoiceRoute: last non-voice route is " + lastNonVoiceRoute);
  const obj = { guildId, channelId: null };
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
    obj.channelId = id;
    const channel1 = obj.selectChannel(obj);
    router_utils.transitionTo(lastNonVoiceRoute);
  }
  id = SelectedChannelStore.getMostRecentSelectedTextChannelId(guildId);
  if (id == null) {
    const defaultChannel = GuildChannelStore.getDefaultChannel(guildId);
    id = undefined;
    if (defaultChannel != null) {
      id = defaultChannel.id;
    }
  }
};
export const transitionToVoiceRoute = function transitionToVoiceRoute(guild_id, id) {
  const defaultRoute = DefaultRouteStore.defaultRoute;
  const obj = { path: items, strict: false, exact: false };
  const matchPathResult = obj.matchPath(defaultRoute, obj);
  let params;
  if (matchPathResult != null) {
    params = matchPathResult.params;
  }
  if (params == null) {
    params = {};
  }
  const voiceChannelId = params.voiceChannelId;
  logger.log(
    "transitionToVoiceRoute(<" +
      guild_id +
      ">, <" +
      id +
      ">), current route " +
      defaultRoute +
      " has voiceChannelId " +
      voiceChannelId,
  );
  if (voiceChannelId !== id) {
    router_utils.transitionToGuild(guild_id, id);
    const tmpResult = router_utils;
  } else {
    const _HermesInternal = HermesInternal;
    logger.log("transitionToVoiceRoute -> " + voiceChannelId + " === " + id + ". staying where we are");
  }
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
