// === Module 12687: voiceRouteRewriter ===

// Module 12687 (voiceRouteRewriter)
import timestampDefault from "timestamp" /* 3 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import transitionTo from "transitionTo" /* 1222 */;
import GuildThemeSourcePreference from "GuildThemeSourcePreference" /* 4310 */;
import _modDef4980 from "module_4980" /* 4980 */;
import _modDef5265 from "module_5265" /* 5265 */;
import showTooManyUserGuildsAlertDefault from "showTooManyUserGuildsAlert" /* 6815 */;
import _modDef8703 from "module_8703" /* 8703 */;
import MemoryRouter from "MemoryRouter" /* 12688 */;
import saveLastRoute from "saveLastRoute" /* 12693 */;
import initializeDefault from "initialize" /* 12694 */;
import closure_4 from "_objectWithoutProperties" /* 109 */;
import { setVoiceChatDrawerState } from "VoiceChatDrawerState" /* 8706 */;
import { isGuildSelectableChannelType as closure_6 } from "createChannelRecord" /* 1395 */;
import closure_7 from "ensureGuildLoaded" /* 1391 */;
import closure_8 from "initialize" /* 4205 */;
import closure_9 from "comparator" /* 1981 */;
import closure_10 from "handleConnectionOpen" /* 1980 */;
import ME from "ME" /* 676 */;
import { VoiceChatDrawerState } from "BOX_MODE_ACTIONSHEET_WIDTH" /* 8707 */;
import { RouteParam, RouteParam as RouteParam2, RouteParam as RouteParam3, RouteParam as RouteParam4 } from "RouteParam" /* 4219 */;

require = arg1;
function voiceRouteRewriter(pathname) {
  let obj = { match: null, location: null };
  ({ state, pathname } = pathname);
  obj1 = MemoryRouter;
  obj = { path: items, strict: false, exact: false };
  obj[0] = obj1.matchPath(pathname, obj);
  obj[1] = pathname;
  const tmp = extractParams(obj);
  ({ channelId, guildId } = tmp);
  const tmp2 = callback(tmp, closure_3);
  const channel = store.getChannel(channelId);
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
    if (closure_15 != null) {
      const _JSON = JSON;
      const _HermesInternal = HermesInternal;
      obj5.log("voiceRouteRewriter: has voiceChannelParams = " + JSON.stringify(tmp4));
    }
    const _HermesInternal2 = HermesInternal;
    const combined = "" + closure_8.lastNonVoiceRoute + Routes.VOICE_CHAT_CHANNEL_PARTIAL(tmp4.guildId, tmp4.channelId, tmp4.messageId);
    let tmp17 = null;
    if (combined !== pathname.pathname) {
      if (obj5 != null) {
        const _HermesInternal3 = HermesInternal;
        obj5.log("voiceRouteRewriter: rewriting route: " + pathname.pathname + " -> " + combined);
      }
      obj1 = { path: null, state: null };
      obj1[0] = combined;
      obj1[1] = state;
      tmp17 = obj1;
    }
    return tmp17;
  } else {
    return null;
  }
}
function saveLastRouteListener(pathname) {
  saveLastRoute.saveLastRoute(pathname.pathname);
}
function saveLastNonVoiceRouteListener(pathname) {
  let obj = MemoryRouter;
  obj = { path: items, strict: false, exact: false };
  const matchPathResult = obj.matchPath(pathname.pathname, obj);
  let channelId;
  if (matchPathResult != null) {
    channelId = matchPathResult.params.channelId;
  }
  const channel = store.getChannel(channelId);
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
      obj = { match: null, location: null };
      obj[0] = matchPathResult;
      obj[1] = pathname;
      tmp9 = extractParams(obj);
    }
  }
  if (null != tmp9) {
    const result = saveLastRoute.saveLastNonVoiceRoute(Routes.CHANNEL(tmp9.guildId, tmp9.channelId));
    const tmpResult = saveLastRoute;
  }
}
function updateSelectedChannelListener(location) {
  let obj = channel2(12688);
  obj = { path: items, strict: false, exact: false };
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
  ({ guildId, channelId, messageId, jumpType, voiceChannelId: voiceChannelId2, voiceGuildId: voiceGuildId2, voiceMessageId: voiceMessageId2 } = obj);
  if (null == voiceChannelId2) {
    if (null == voiceGuildId2) {
      if (closure_15 != null) {
        const _JSON5 = JSON;
        const json = JSON.stringify(location);
        const _JSON6 = JSON;
        const obj2 = { guildId: null, channelId: null, messageId: null, jumpType: null, voiceChannelId: null, voiceGuildId: null, voiceMessageId: null };
        obj2[0] = guildId;
        obj2[1] = channelId;
        obj2[2] = messageId;
        obj2[3] = jumpType;
        obj2[4] = voiceChannelId2;
        obj2[5] = voiceGuildId2;
        obj2[6] = voiceMessageId2;
        const _HermesInternal3 = HermesInternal;
        obj19.verbose("UpdateSelectedChannelListener -> no voice route present in " + json + " " + JSON.stringify(obj2) + " ");
      }
      const channel = store.getChannel(store2.getLastSelectedChannelId());
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
        let tmpResult = tmp(8700);
        _modDef5265.popWithKey(tmpResult.getVoiceChannelKey(channel.id));
        const obj21 = _modDef5265;
      }
      const guild = showTooManyUserGuildsAlertDefault.selectGuild(guildId);
      obj19 = closure_15;
      const obj23 = showTooManyUserGuildsAlertDefault;
      const obj3 = { guildId: null, channelId: null, messageId: null, jumpType: null, skipMessageFetch: null };
      obj3[0] = guildId;
      obj3[1] = channelId;
      obj3[2] = messageId;
      obj3[3] = jumpType;
      obj3[4] = tmp5;
      const channel1 = _modDef4980.selectChannel(obj3);
    }
  }
  channel2 = store.getChannel(voiceChannelId2);
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
      if (closure_15 != null) {
        let id;
        if (channel2 != null) {
          id = channel2.id;
        }
        const _JSON = JSON;
        const _JSON2 = JSON;
        const obj4 = { guildId: null, channelId: null, messageId: null, jumpType: null, voiceChannelId: null, voiceGuildId: null, voiceMessageId: null };
        obj4[0] = guildId;
        obj4[1] = channelId;
        obj4[2] = messageId;
        obj4[3] = jumpType;
        obj4[4] = voiceChannelId2;
        obj4[5] = voiceGuildId2;
        obj4[6] = voiceMessageId2;
        const json1 = JSON.stringify(location);
        const _HermesInternal = HermesInternal;
        obj26.log("UpdateSelectedChannelListener -> !!!VERY BAD!!! channel.id " + id + " (voiceChannelId " + voiceChannelId2 + ") is not a voice channel! and yet RouteUtils thinks it is! " + json1 + " " + JSON.stringify(obj4) + " ");
      }
      obj26 = closure_15;
    }
  }
  if (closure_15 != null) {
    const _JSON3 = JSON;
    const json2 = JSON.stringify(location);
    const _JSON4 = JSON;
    const obj5 = { guildId: null, channelId: null, messageId: null, jumpType: null, voiceChannelId: null, voiceGuildId: null, voiceMessageId: null };
    obj5[0] = guildId;
    obj5[1] = channelId;
    obj5[2] = messageId;
    obj5[3] = jumpType;
    obj5[4] = voiceChannelId2;
    obj5[5] = voiceGuildId2;
    obj5[6] = voiceMessageId2;
    const _HermesInternal2 = HermesInternal;
    obj8.verbose("UpdateSelectedChannelListener -> voice route present! " + json2 + " " + JSON.stringify(obj5) + " ");
  }
  tmpResult = tmp(8704);
  if (!tmpResult.isVoicePanelEnabled(channel2)) {
    const guild1 = showTooManyUserGuildsAlertDefault.selectGuild(voiceGuildId2);
    const obj10 = showTooManyUserGuildsAlertDefault;
    const obj6 = { guildId: null, channelId: null, messageId: null, jumpType: null };
    obj6[0] = voiceGuildId2;
    obj6[1] = voiceChannelId2;
    obj6[2] = voiceMessageId2;
    obj6[3] = jumpType;
    const channel3 = _modDef4980.selectChannel(obj6);
    const obj11 = _modDef4980;
  }
  obj1 = { match: matchPathResult, location };
  obj8 = closure_15;
  const tmpResult1 = channel2(4233);
  if (!tmpResult1.isModalOpen(tmpResult2.getVoiceChannelKey(channel2.id))) {
    const obj15 = _modDef5265;
    obj15.popAboveKey(tmp(8700).getVoiceChannelKey(channel2.id));
    const tmpResult3 = tmp(8700);
    dispatcherDefault.wait(() => {
      channel2(closure_1_2[16]).openGuildVoiceModal(channel2);
    });
    const obj17 = dispatcherDefault;
  }
  tmpResult2 = channel2(8700);
  if (tmp21) {
    setVoiceChatDrawerState(channel2.id, VoiceChatDrawerState.OPEN);
    if (tmp25) {
      const obj18 = _modDef8703;
      const result = obj18.jumpToVoiceChannelMessage(voiceGuildId2, voiceChannelId2, voiceMessageId2, jumpType);
    }
    tmp25 = null != voiceGuildId2 && null != voiceChannelId2 && null != voiceMessageId2;
  }
}
function extractParams(arg0) {
  ({ match, location: _location } = arg0);
  if (null == match) {
    let obj = { guildId: null, channelId: null, messageId: null, jumpType: null, skipMessageFetch: false };
    obj[0] = closure_11;
    obj[3] = GuildThemeSourcePreference.JumpType.ANIMATED;
    return obj;
  } else {
    const params = match.params;
    ({ guildId, channelId } = params);
    if (_location.jumpType === GuildThemeSourcePreference.JumpType.INSTANT) {
      let ANIMATED = tmp5(4310).JumpType.INSTANT;
    } else {
      ANIMATED = tmp5(4310).JumpType.ANIMATED;
    }
    let tmp5Result = tmp5(4219);
    if (!tmp5Result.isValidGuildId(guildId)) {
      guildId = closure_11;
    }
    obj = { guildId: null, channelId: null, messageId: null, jumpType: null, skipMessageFetch: null };
    obj[0] = guildId;
    tmp5Result = tmp5(4219);
    let tmp = null;
    if (tmp5Result.isValidChannelId(channelId)) {
      tmp = channelId;
    }
    obj[1] = tmp;
    obj[2] = params.messageId;
    obj[3] = ANIMATED;
    obj[4] = _location.skipMessageFetch;
    return obj;
  }
}
function logRouteChange(pathname) {
  logger.log("Navigated to: " + pathname.pathname);
}
let closure_3 = ["channelId", "guildId"];
({ ME: unpackModuleId, Routes } = ME);
const ChannelTypes = ME.ChannelTypes;
let closure_15 = new timestampDefault("RouteUtils");
let c16 = false;
const tmp3 = new timestampDefault("RouteUtils");
const CHANNELResult = Routes.CHANNEL(RouteParam.guildId(), RouteParam2.channelId({ optional: true }), ":messageId?");
const guildIdResult = RouteParam.guildId();
const items = ["" + CHANNELResult + Routes.VOICE_CHAT_CHANNEL_PARTIAL(RouteParam3.guildId({ name: "voiceGuildId" }), RouteParam4.channelId({ name: "voiceChannelId" }), ":voiceMessageId?"), CHANNELResult];
const guildIdResult1 = RouteParam3.guildId({ name: "voiceGuildId" });
let result = require("set").fileFinishedImporting("modules/routing/native/RouteManagerUtils.tsx");

export const MAIN_DRAWER_ROUTES = CHANNELResult;
export const extractParamsFromVoiceModalRoute = function extractParamsFromVoiceModalRoute(location) {
  let obj = MemoryRouter;
  obj = { path: items, strict: false, exact: false };
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
  const lastNonVoiceRoute = closure_8.lastNonVoiceRoute;
  logger.log("popVoiceRoute: last non-voice route is " + lastNonVoiceRoute);
  let obj = _modDef4980;
  obj = { guildId, channelId: null };
  const channel = store.getChannel(store2.getLastSelectedChannelId());
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
    obj[1] = id;
    const channel1 = obj.selectChannel(obj);
    transitionTo.transitionTo(lastNonVoiceRoute);
  }
  id = store2.getMostRecentSelectedTextChannelId(guildId);
  if (id == null) {
    defaultChannel = defaultChannel.getDefaultChannel(guildId);
    id = undefined;
    if (defaultChannel != null) {
      id = defaultChannel.id;
    }
  }
};
export const transitionToVoiceRoute = function transitionToVoiceRoute(arg0, arg1) {
  const defaultRoute = closure_8.defaultRoute;
  let obj = MemoryRouter;
  obj = { path: items, strict: false, exact: false };
  const matchPathResult = obj.matchPath(defaultRoute, obj);
  let params;
  if (matchPathResult != null) {
    params = matchPathResult.params;
  }
  if (params == null) {
    params = {};
  }
  const voiceChannelId = params.voiceChannelId;
  logger.log("transitionToVoiceRoute(<" + arg0 + ">, <" + arg1 + ">), current route " + defaultRoute + " has voiceChannelId " + voiceChannelId);
  if (voiceChannelId !== arg1) {
    transitionTo.transitionToGuild(arg0, arg1);
    const tmpResult = transitionTo;
  } else {
    const _HermesInternal = HermesInternal;
    logger.log("transitionToVoiceRoute -> " + voiceChannelId + " === " + arg1 + ". staying where we are");
  }
};
export { voiceRouteRewriter };
export { saveLastRouteListener };
export { saveLastNonVoiceRouteListener };
export { updateSelectedChannelListener };
export { extractParams };
export const initializeRouteManagerIfNeeded = function initializeRouteManagerIfNeeded() {
  if (!c16) {
    initializeDefault.addRouteRewriter(voiceRouteRewriter);
    const obj = initializeDefault;
    const result = initializeDefault.addRouteChangeListener(saveLastRouteListener);
    const obj2 = initializeDefault;
    const result1 = initializeDefault.addRouteChangeListener(saveLastNonVoiceRouteListener);
    const obj3 = initializeDefault;
    const result2 = initializeDefault.addRouteChangeListener(updateSelectedChannelListener);
    const obj4 = initializeDefault;
    const result3 = initializeDefault.addRouteChangeListener(logRouteChange);
    const obj5 = initializeDefault;
    initializeDefault.initialize();
    c16 = true;
    const obj6 = initializeDefault;
  }
};
export const cleanupRouteManager = function cleanupRouteManager() {
  if (c16) {
    initializeDefault.removeRouteRewriter(voiceRouteRewriter);
    const obj = initializeDefault;
    const result = initializeDefault.removeRouteChangeListener(saveLastRouteListener);
    const obj2 = initializeDefault;
    const result1 = initializeDefault.removeRouteChangeListener(saveLastNonVoiceRouteListener);
    const obj3 = initializeDefault;
    const result2 = initializeDefault.removeRouteChangeListener(updateSelectedChannelListener);
    const obj4 = initializeDefault;
    const result3 = initializeDefault.removeRouteChangeListener(logRouteChange);
    const obj5 = initializeDefault;
    initializeDefault.cleanup();
    c16 = false;
    const obj6 = initializeDefault;
  }
};