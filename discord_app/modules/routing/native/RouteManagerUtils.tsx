// discord_app/modules/routing/native/RouteManagerUtils.tsx
import LoggerDefault from "../../debug/Logger.tsx";
import DispatcherDefault from "../../../Dispatcher.tsx";
import router_utils from "../router_utils.tsx";
import ChannelRecord from "../../../records/ChannelRecord.tsx";
import RouteUtils from "../RouteUtils.tsx";
import flow_Client from "../../../flow/Client.tsx";
import ChannelRTCActionCreatorsDefault from "../../../actions/ChannelRTCActionCreators.tsx";
import ModalActionCreatorsDefault from "../../../actions/ModalActionCreators.tsx";
import PrivateChannelCallUtils from "../../../utils/native/PrivateChannelCallUtils.tsx";
import SelectedChannelActionCreatorsDefault from "../../../actions/SelectedChannelActionCreators.tsx";
import GuildActionCreatorsDefault from "../../../actions/GuildActionCreators.tsx";
import ChannelCallStore from "../../video_calls/native/ChannelCallStore.tsx";
import ChannelCallConstants from "../../video_calls/native/ChannelCallConstants.tsx";
import _mod12551 from "../../../../_runtime/metro/12551__.js";
import DefaultRouteActionCreators from "../../../actions/DefaultRouteActionCreators.tsx";
import RouteManagerDefault from "../RouteManager.tsx";
import _objectWithoutProperties from "../../../../_runtime/metro/00109__objectWithoutProperties.js";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import DefaultRouteStore from "../../../stores/DefaultRouteStore.tsx";
import GuildChannelStore from "../../../stores/GuildChannelStore.tsx";
import SelectedChannelStore from "../../../stores/SelectedChannelStore.tsx";
import Constants from "../../../Constants.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let Routes;
let unpackModuleId;
function voiceRouteRewriter(location) {
  let channelId;
  let obj2;
  let obj3;
  let pathname;
  let state;
  const obj = { match: obj2.matchPath(pathname, obj3), location };
  ({ state, pathname } = location);
  obj2 = _mod12551;
  obj3 = { path: items, strict: false, exact: false };
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
        const obj4 = { channelId, guildId };
        const merged = Object.assign(tmp2);
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
      tmp17 = { path: combined, state };
      const obj6 = { path: combined, state };
    }
    return tmp17;
  } else {
    return null;
  }
}
function saveLastRouteListener(pathname) {
  const obj = DefaultRouteActionCreators;
  obj.saveLastRoute(pathname.pathname);
}
function saveLastNonVoiceRouteListener(pathname) {
  pathname = pathname.pathname;
  const obj = _mod12551;
  const obj2 = { path: items, strict: false, exact: false };
  const matchPathResult = obj.matchPath(pathname, obj2);
  let channelId;
  const getChannel = ChannelStore.getChannel;
  if (matchPathResult != null) {
    channelId = matchPathResult.params.channelId;
  }
  const channel = getChannel(channelId);
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
    const tmpResult = DefaultRouteActionCreators;
    const result = tmpResult.saveLastNonVoiceRoute(Routes.CHANNEL(tmp9.guildId, tmp9.channelId));
  }
}
function updateSelectedChannelListener(location) {
  let channel2;
  let channelId;
  let jumpType;
  let messageId;
  let tmp51;
  let voiceChannelId;
  let voiceChannelId2;
  let voiceGuildId;
  let voiceGuildId2;
  let voiceMessageId;
  let voiceMessageId2;
  const pathname = location.pathname;
  let obj = channel2(12551);
  const obj2 = { path: items, strict: false, exact: false };
  const matchPathResult = obj.matchPath(pathname, obj2);
  let params;
  if (matchPathResult != null) {
    params = matchPathResult.params;
  }
  if (params == null) {
    params = {};
  }
  const obj3 = { voiceChannelId, voiceGuildId, voiceMessageId };
  const obj4 = { match: matchPathResult, location };
  ({ voiceChannelId, voiceGuildId, voiceMessageId } = params);
  const merged = Object.assign(extractParams(obj4));
  ({
    guildId,
    channelId,
    messageId,
    jumpType,
    voiceChannelId: voiceChannelId2,
    voiceGuildId: voiceGuildId2,
    voiceMessageId: voiceMessageId2,
  } = obj3);
  if (null == voiceChannelId2) {
    if (null == voiceGuildId2) {
      if (logger != null) {
        const _JSON5 = JSON;
        const verbose2 = logger.verbose;
        const json = JSON.stringify(location);
        const _JSON6 = JSON;
        const _HermesInternal3 = HermesInternal;
        const obj5 = {
          guildId,
          channelId,
          messageId,
          jumpType,
          voiceChannelId: voiceChannelId2,
          voiceGuildId: voiceGuildId2,
          voiceMessageId: voiceMessageId2,
        };
        verbose2(
          "UpdateSelectedChannelListener -> no voice route present in " + json + " " + JSON.stringify(obj5) + " ",
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
        const popWithKey = ModalActionCreatorsDefault.popWithKey;
        ModalActionCreatorsDefault;
        const tmpResult = channel2(5097);
        popWithKey(tmpResult.getVoiceChannelKey(channel.id));
      }
      const obj18 = GuildActionCreatorsDefault;
      const guild = obj18.selectGuild(guildId);
      const obj6 = { guildId, channelId, messageId, jumpType, skipMessageFetch: tmp5, opensChannel: tmp51 };
      tmp51 = null != channelId;
      const selectChannel = SelectedChannelActionCreatorsDefault.selectChannel;
      SelectedChannelActionCreatorsDefault;
      if (tmp51) {
        tmp51 = true !== location.navigationReplace || true === location.openChannel;
      }
      const channel1 = selectChannel(obj6);
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
        const log = logger.log;
        if (channel2 != null) {
          id = channel2.id;
        }
        const _JSON = JSON;
        const _JSON2 = JSON;
        const obj7 = {
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
        log(
          "UpdateSelectedChannelListener -> !!!VERY BAD!!! channel.id " +
            id +
            " (voiceChannelId " +
            voiceChannelId2 +
            ") is not a voice channel! and yet RouteUtils thinks it is! " +
            json1 +
            " " +
            JSON.stringify(obj7) +
            " ",
        );
      }
    }
  }
  if (logger != null) {
    const _JSON3 = JSON;
    const verbose = logger.verbose;
    const json2 = JSON.stringify(location);
    const _JSON4 = JSON;
    const _HermesInternal2 = HermesInternal;
    const obj10 = {
      guildId,
      channelId,
      messageId,
      jumpType,
      voiceChannelId: voiceChannelId2,
      voiceGuildId: voiceGuildId2,
      voiceMessageId: voiceMessageId2,
    };
    verbose("UpdateSelectedChannelListener -> voice route present! " + json2 + " " + JSON.stringify(obj10) + " ");
  }
  const isGuildStageVoiceResult1 =
    channel2.isGuildStageVoice() && SelectedChannelStore.getVoiceChannelId() === channel2.id;
  if (isGuildStageVoiceResult1) {
    const obj8 = GuildActionCreatorsDefault;
    const guild1 = obj8.selectGuild(voiceGuildId2);
    const obj11 = { guildId: voiceGuildId2, channelId: voiceChannelId2, messageId: voiceMessageId2, jumpType };
    const obj9 = SelectedChannelActionCreatorsDefault;
    const channel3 = obj9.selectChannel(obj11);
  }
  const isModalOpen = channel2(4736).isModalOpen;
  channel2(4736);
  const tmpResult5 = channel2(5097);
  if (!isModalOpen(tmpResult5.getVoiceChannelKey(channel2.id))) {
    const popAboveKey = ModalActionCreatorsDefault.popAboveKey;
    ModalActionCreatorsDefault;
    const tmpResult6 = channel2(5097);
    popAboveKey(tmpResult6.getVoiceChannelKey(channel2.id));
    const obj13 = DispatcherDefault;
    obj13.wait(() => {
      const obj = PrivateChannelCallUtils;
      obj.openGuildVoiceModal(channel2);
    });
  }
  const tmp26 = (channel2.isGuildVoice() && null != voiceMessageId2) || channel2.isGuildStageVoice();
  if (tmp26) {
    if (isGuildStageVoiceResult1) {
      setVoiceChatDrawerState(channel2.id, VoiceChatDrawerState.OPEN);
    } else {
      const obj14 = DispatcherDefault;
      obj14.wait(() => {
        const obj = ChannelRTCActionCreatorsDefault;
        return obj.updateChatOpen(channel2.id, true);
      });
    }
    const tmp32 = null != voiceGuildId2 && null != voiceChannelId2 && null != voiceMessageId2;
    if (tmp32) {
      const obj15 = ChannelRTCActionCreatorsDefault;
      const result = obj15.jumpToVoiceChannelMessage(voiceGuildId2, voiceChannelId2, voiceMessageId2, jumpType);
    }
  }
}
function extractParams(arg0) {
  let _location;
  let channelId;
  let match;
  let tmp;
  ({ match, location: _location } = arg0);
  if (null == match) {
    const obj = {
      guildId: unpackModuleId,
      channelId: null,
      messageId: null,
      jumpType: flow_Client.JumpType.ANIMATED,
      skipMessageFetch: false,
    };
    return obj;
  } else {
    let ANIMATED;
    const params = match.params;
    ({ guildId, channelId } = params);
    const messageId = params.messageId;
    if (_location.jumpType === flow_Client.JumpType.INSTANT) {
      ANIMATED = flow_Client.JumpType.INSTANT;
    } else {
      ANIMATED = flow_Client.JumpType.ANIMATED;
    }
    RouteUtils;
    const obj2 = {
      guildId: unpackModuleId,
      channelId: tmp,
      messageId,
      jumpType: ANIMATED,
      skipMessageFetch: _location.skipMessageFetch,
    };
    tmp = null;
    const tmp5Result2 = RouteUtils;
    if (tmp5Result2.isValidChannelId(channelId)) {
      tmp = channelId;
    }
    return obj2;
  }
}
function logRouteChange(pathname) {
  logger.log("Navigated to: " + pathname.pathname);
}
let closure_3 = ["channelId", "guildId"];
const setVoiceChatDrawerState = ChannelCallStore.setVoiceChatDrawerState;
let closure_6 = ChannelRecord.isGuildSelectableChannelType;
({ ME: unpackModuleId, Routes } = Constants);
const ChannelTypes = Constants.ChannelTypes;
const VoiceChatDrawerState = ChannelCallConstants.VoiceChatDrawerState;
const tmp3 = new LoggerDefault("RouteUtils");
const logger = tmp3;
let c16 = false;
const CHANNEL = Routes.CHANNEL;
const RouteParam = RouteUtils.RouteParam;
const guildIdResult = RouteParam.guildId();
const RouteParam2 = RouteUtils.RouteParam;
const CHANNELResult = CHANNEL(guildIdResult, RouteParam2.channelId({ optional: true }), ":messageId?");
const VOICE_CHAT_CHANNEL_PARTIAL = Routes.VOICE_CHAT_CHANNEL_PARTIAL;
const RouteParam3 = RouteUtils.RouteParam;
const guildIdResult1 = RouteParam3.guildId({ name: "voiceGuildId" });
const RouteParam4 = RouteUtils.RouteParam;
const items = [
  "" +
    CHANNELResult +
    VOICE_CHAT_CHANNEL_PARTIAL(guildIdResult1, RouteParam4.channelId({ name: "voiceChannelId" }), ":voiceMessageId?"),
  CHANNELResult,
];
let result = size.fileFinishedImporting("modules/routing/native/RouteManagerUtils.tsx");

export const MAIN_DRAWER_ROUTES = CHANNELResult;
export const extractParamsFromVoiceModalRoute = function extractParamsFromVoiceModalRoute(location) {
  let voiceChannelId;
  let voiceGuildId;
  let voiceMessageId;
  const pathname = location.pathname;
  const obj = _mod12551;
  const obj2 = { path: items, strict: false, exact: false };
  const matchPathResult = obj.matchPath(pathname, obj2);
  let params;
  if (matchPathResult != null) {
    params = matchPathResult.params;
  }
  if (params == null) {
    params = {};
  }
  const obj3 = { voiceChannelId, voiceGuildId, voiceMessageId };
  const obj4 = { match: matchPathResult, location };
  ({ voiceChannelId, voiceGuildId, voiceMessageId } = params);
  const merged = Object.assign(extractParams(obj4));
  return obj3;
};
export const popVoiceRoute = function popVoiceRoute(guildId) {
  let id;
  const lastNonVoiceRoute = DefaultRouteStore.lastNonVoiceRoute;
  logger.log("popVoiceRoute: last non-voice route is " + lastNonVoiceRoute);
  const obj = { guildId, channelId: null };
  const selectChannel = SelectedChannelActionCreatorsDefault.selectChannel;
  SelectedChannelActionCreatorsDefault;
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
      id = channel.id;
    }
    obj.channelId = id;
    const channel1 = selectChannel(obj);
    const obj3 = router_utils;
    obj3.transitionTo(lastNonVoiceRoute);
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
};
export const transitionToVoiceRoute = function transitionToVoiceRoute(guild_id, id) {
  const defaultRoute = DefaultRouteStore.defaultRoute;
  const obj = _mod12551;
  const obj2 = { path: items, strict: false, exact: false };
  const matchPathResult = obj.matchPath(defaultRoute, obj2);
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
    const tmpResult = router_utils;
    tmpResult.transitionToGuild(guild_id, id);
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
  const tmp = c16;
  if (!tmp) {
    const obj = RouteManagerDefault;
    obj.addRouteRewriter(voiceRouteRewriter);
    const obj2 = RouteManagerDefault;
    const result = obj2.addRouteChangeListener(saveLastRouteListener);
    const obj3 = RouteManagerDefault;
    const result1 = obj3.addRouteChangeListener(saveLastNonVoiceRouteListener);
    const obj4 = RouteManagerDefault;
    const result2 = obj4.addRouteChangeListener(updateSelectedChannelListener);
    const obj5 = RouteManagerDefault;
    const result3 = obj5.addRouteChangeListener(logRouteChange);
    const obj6 = RouteManagerDefault;
    obj6.initialize();
    c16 = true;
  }
};
export const cleanupRouteManager = function cleanupRouteManager() {
  const tmp = c16;
  if (tmp) {
    const obj = RouteManagerDefault;
    obj.removeRouteRewriter(voiceRouteRewriter);
    const obj2 = RouteManagerDefault;
    const result = obj2.removeRouteChangeListener(saveLastRouteListener);
    const obj3 = RouteManagerDefault;
    const result1 = obj3.removeRouteChangeListener(saveLastNonVoiceRouteListener);
    const obj4 = RouteManagerDefault;
    const result2 = obj4.removeRouteChangeListener(updateSelectedChannelListener);
    const obj5 = RouteManagerDefault;
    const result3 = obj5.removeRouteChangeListener(logRouteChange);
    const obj6 = RouteManagerDefault;
    obj6.cleanup();
    c16 = false;
  }
};
