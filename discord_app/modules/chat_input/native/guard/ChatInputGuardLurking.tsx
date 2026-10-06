// === Module 12112: ChatInputGuardLurking ===

// Module 12112 (ChatInputGuardLurking)
import Fragment from "Fragment" /* 21 */;
import preloaded_user_settings from "preloaded_user_settings" /* 1197 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 5076 */;
import GuildActionCreatorsDefault from "GuildActionCreators" /* 5712 */;
import JoinGuildRefusedError from "JoinGuildRefusedError" /* 6730 */;
import GuildDiscoveryUtilsAll from "GuildDiscoveryUtils" /* 6854 */;
import HubProgressActionCreators from "HubProgressActionCreators" /* 9504 */;
import ChatInputConstants from "ChatInputConstants" /* 11589 */;
import ChatInputGuardDefault from "ChatInputGuard" /* 12105 */;
import showChannelFollowingActionSheet from "showChannelFollowingActionSheet" /* 12113 */;
import react from "react" /* 19 */;
import LurkingStore from "LurkingStore" /* 4516 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import Constants from "Constants" /* 1085 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let catchPromise, channel, goBackResult, importDefault, obj1, obj7, tmp11, tmp13, tmp14, tmp15, tmp19, tmp2, tmp3, tmp5, tmp7, tmp8, trackWithMetadataResult;

let c9;
let metroImportAll;
const TextAreaCta = ChatInputConstants.TextAreaCta;
({ AnalyticEvents: metroImportAll, JoinGuildSources: c9 } = Constants);
const jsx = Fragment.jsx;
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((channel) => {
  let closure_1;
  let isLurking;
  let lurkingSource;
  let obj3;
  let obj4;
  let tmp4;
  let tmp6;
  let tmp9;
  const tmp = channel;
  let obj = channel(576);
  const cResult = obj.c(29);
  channel = channel.channel;
  if (cResult[0] !== channel) {
    let guildId = channel.getGuildId();
    cResult[0] = channel;
    cResult[1] = guildId;
    tmp4 = guildId;
  } else {
    tmp4 = cResult[1];
  }
  importDefault = tmp4;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [LurkingStore];
    cResult[2] = items;
    tmp6 = items;
  } else {
    tmp6 = cResult[2];
  }
  if (cResult[3] !== tmp4) {
    class T {
      constructor() {
        tmp = closure_1;
        isLurkingResult = null != closure_1;
        if (isLurkingResult) {
          tmp3 = closure_5;
          isLurkingResult = closure_5.isLurking(tmp);
        }
        obj = { isLurking: isLurkingResult, lurkingSource: closure_5.getLurkingSourceForGuild(tmp) };
        return obj;
      }
    }
    const items1 = [tmp4];
    cResult[3] = tmp4;
    cResult[4] = T;
    cResult[5] = items1;
    tmp9 = items1;
  } else {
    class T {
      constructor() {
        tmp = closure_1;
        isLurkingResult = null != closure_1;
        if (isLurkingResult) {
          tmp3 = closure_5;
          isLurkingResult = closure_5.isLurking(tmp);
        }
        obj = { isLurking: isLurkingResult, lurkingSource: closure_5.getLurkingSourceForGuild(tmp) };
        return obj;
      }
    }
    tmp9 = cResult[5];
  }
  const tmpResult = tmp(504);
  const stateFromStoresObject = tmpResult.useStateFromStoresObject(tmp6, T, tmp9);
  ({ isLurking, lurkingSource } = stateFromStoresObject);
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    class G {
      constructor() {
        obj = channel(closure_1_3[9]);
        history = obj.getHistory();
        goBackResult = history.goBack();
        return;
      }
    }
    cResult[6] = G;
  } else {
    class G {
      constructor() {
        obj = channel(closure_1_3[9]);
        history = obj.getHistory();
        goBackResult = history.goBack();
        return;
      }
    }
  }
  if (cResult[7] === channel.id) {
    class G {
      constructor() {
        obj = channel(closure_1_3[9]);
        history = obj.getHistory();
        goBackResult = history.goBack();
        return;
      }
    }
    if (cResult[10] !== tmp4) {
      class I {
        constructor() {
          tmp = closure_1;
          if (null != closure_1) {
            tmp19 = closure_5;
            lurkingSourceForGuild = closure_5.getLurkingSourceForGuild(tmp);
            type = undefined;
            if (lurkingSourceForGuild != null) {
              type = lurkingSourceForGuild.type;
            }
            tmp3 = JoinGuildSources;
            if (type === JoinGuildSources.DIRECTORY_ENTRY) {
              tmp4 = closure_6;
              channel = closure_6.getChannel(lurkingSourceForGuild.directoryChannelId);
              if (null != channel) {
                tmp5 = closure_0;
                tmp6 = closure_3;
                tmp7 = closure_0(closure_3[12]);
                setHubProgressActionComplete = tmp7.setHubProgressActionComplete;
                guildId = channel.getGuildId();
                result = setHubProgressActionComplete(guildId, closure_0(closure_3[13]).HubProgressStep.JOIN_GUILD);
              }
            }
            tmp10 = closure_2;
            tmp11 = closure_3;
            obj2 = closure_2(closure_3[14]);
            result1 = obj2.trackGuildJoinClicked(tmp);
            tmp13 = closure_1;
            obj3 = closure_1(closure_3[10]);
            tmp14 = AnalyticEvents;
            obj1 = { cta_type: null };
            tmp15 = TextAreaCta;
            obj1.cta_type = TextAreaCta.JOIN_GUILD;
            trackWithMetadataResult = obj3.trackWithMetadata(AnalyticEvents.TEXT_AREA_CTA_CLICKED, obj1);
            obj5 = closure_1(closure_3[15]);
            obj7 = { source: null };
            obj7.source = tmp3.CHAT_INPUT_BLOCKER;
            joinGuildResult = obj5.joinGuild(tmp, obj7);
            tmp17 = closure_0;
            catchPromise = joinGuildResult.catch(closure_0(closure_3[16]).ignoreJoinGuildRefused);
          }
          return;
        }
      }
      cResult[10] = tmp4;
      cResult[11] = I;
    } else {
      class I {
        constructor() {
          tmp = closure_1;
          if (null != closure_1) {
            tmp19 = closure_5;
            lurkingSourceForGuild = closure_5.getLurkingSourceForGuild(tmp);
            type = undefined;
            if (lurkingSourceForGuild != null) {
              type = lurkingSourceForGuild.type;
            }
            tmp3 = JoinGuildSources;
            if (type === JoinGuildSources.DIRECTORY_ENTRY) {
              tmp4 = closure_6;
              channel = closure_6.getChannel(lurkingSourceForGuild.directoryChannelId);
              if (null != channel) {
                tmp5 = closure_0;
                tmp6 = closure_3;
                tmp7 = closure_0(closure_3[12]);
                setHubProgressActionComplete = tmp7.setHubProgressActionComplete;
                guildId = channel.getGuildId();
                result = setHubProgressActionComplete(guildId, closure_0(closure_3[13]).HubProgressStep.JOIN_GUILD);
              }
            }
            tmp10 = closure_2;
            tmp11 = closure_3;
            obj2 = closure_2(closure_3[14]);
            result1 = obj2.trackGuildJoinClicked(tmp);
            tmp13 = closure_1;
            obj3 = closure_1(closure_3[10]);
            tmp14 = AnalyticEvents;
            obj1 = { cta_type: null };
            tmp15 = TextAreaCta;
            obj1.cta_type = TextAreaCta.JOIN_GUILD;
            trackWithMetadataResult = obj3.trackWithMetadata(AnalyticEvents.TEXT_AREA_CTA_CLICKED, obj1);
            obj5 = closure_1(closure_3[15]);
            obj7 = { source: null };
            obj7.source = tmp3.CHAT_INPUT_BLOCKER;
            joinGuildResult = obj5.joinGuild(tmp, obj7);
            tmp17 = closure_0;
            catchPromise = joinGuildResult.catch(closure_0(closure_3[16]).ignoreJoinGuildRefused);
          }
          return;
        }
      }
    }
    if (lurkingSource != null) {
      class I {
        constructor() {
          tmp = closure_1;
          if (null != closure_1) {
            tmp19 = closure_5;
            lurkingSourceForGuild = closure_5.getLurkingSourceForGuild(tmp);
            type = undefined;
            if (lurkingSourceForGuild != null) {
              type = lurkingSourceForGuild.type;
            }
            tmp3 = JoinGuildSources;
            if (type === JoinGuildSources.DIRECTORY_ENTRY) {
              tmp4 = closure_6;
              channel = closure_6.getChannel(lurkingSourceForGuild.directoryChannelId);
              if (null != channel) {
                tmp5 = closure_0;
                tmp6 = closure_3;
                tmp7 = closure_0(closure_3[12]);
                setHubProgressActionComplete = tmp7.setHubProgressActionComplete;
                guildId = channel.getGuildId();
                result = setHubProgressActionComplete(guildId, closure_0(closure_3[13]).HubProgressStep.JOIN_GUILD);
              }
            }
            tmp10 = closure_2;
            tmp11 = closure_3;
            obj2 = closure_2(closure_3[14]);
            result1 = obj2.trackGuildJoinClicked(tmp);
            tmp13 = closure_1;
            obj3 = closure_1(closure_3[10]);
            tmp14 = AnalyticEvents;
            obj1 = { cta_type: null };
            tmp15 = TextAreaCta;
            obj1.cta_type = TextAreaCta.JOIN_GUILD;
            trackWithMetadataResult = obj3.trackWithMetadata(AnalyticEvents.TEXT_AREA_CTA_CLICKED, obj1);
            obj5 = closure_1(closure_3[15]);
            obj7 = { source: null };
            obj7.source = tmp3.CHAT_INPUT_BLOCKER;
            joinGuildResult = obj5.joinGuild(tmp, obj7);
            tmp17 = closure_0;
            catchPromise = joinGuildResult.catch(closure_0(closure_3[16]).ignoreJoinGuildRefused);
          }
          return;
        }
      }
    }
    if (undefined === constants2.DIRECTORY_ENTRY) {
      let tmp17;
      let tmp16;
      let tmp20;
      let tmp22;
      class I {
        constructor() {
          tmp = closure_1;
          if (null != closure_1) {
            tmp19 = closure_5;
            lurkingSourceForGuild = closure_5.getLurkingSourceForGuild(tmp);
            type = undefined;
            if (lurkingSourceForGuild != null) {
              type = lurkingSourceForGuild.type;
            }
            tmp3 = JoinGuildSources;
            if (type === JoinGuildSources.DIRECTORY_ENTRY) {
              tmp4 = closure_6;
              channel = closure_6.getChannel(lurkingSourceForGuild.directoryChannelId);
              if (null != channel) {
                tmp5 = closure_0;
                tmp6 = closure_3;
                tmp7 = closure_0(closure_3[12]);
                setHubProgressActionComplete = tmp7.setHubProgressActionComplete;
                guildId = channel.getGuildId();
                result = setHubProgressActionComplete(guildId, closure_0(closure_3[13]).HubProgressStep.JOIN_GUILD);
              }
            }
            tmp10 = closure_2;
            tmp11 = closure_3;
            obj2 = closure_2(closure_3[14]);
            result1 = obj2.trackGuildJoinClicked(tmp);
            tmp13 = closure_1;
            obj3 = closure_1(closure_3[10]);
            tmp14 = AnalyticEvents;
            obj1 = { cta_type: null };
            tmp15 = TextAreaCta;
            obj1.cta_type = TextAreaCta.JOIN_GUILD;
            trackWithMetadataResult = obj3.trackWithMetadata(AnalyticEvents.TEXT_AREA_CTA_CLICKED, obj1);
            obj5 = closure_1(closure_3[15]);
            obj7 = { source: null };
            obj7.source = tmp3.CHAT_INPUT_BLOCKER;
            joinGuildResult = obj5.joinGuild(tmp, obj7);
            tmp17 = closure_0;
            catchPromise = joinGuildResult.catch(closure_0(closure_3[16]).ignoreJoinGuildRefused);
          }
          return;
        }
      }
      if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
        class I {
          constructor() {
            tmp = closure_1;
            if (null != closure_1) {
              tmp19 = closure_5;
              lurkingSourceForGuild = closure_5.getLurkingSourceForGuild(tmp);
              type = undefined;
              if (lurkingSourceForGuild != null) {
                type = lurkingSourceForGuild.type;
              }
              tmp3 = JoinGuildSources;
              if (type === JoinGuildSources.DIRECTORY_ENTRY) {
                tmp4 = closure_6;
                channel = closure_6.getChannel(lurkingSourceForGuild.directoryChannelId);
                if (null != channel) {
                  tmp5 = closure_0;
                  tmp6 = closure_3;
                  tmp7 = closure_0(closure_3[12]);
                  setHubProgressActionComplete = tmp7.setHubProgressActionComplete;
                  guildId = channel.getGuildId();
                  result = setHubProgressActionComplete(guildId, closure_0(closure_3[13]).HubProgressStep.JOIN_GUILD);
                }
              }
              tmp10 = closure_2;
              tmp11 = closure_3;
              obj2 = closure_2(closure_3[14]);
              result1 = obj2.trackGuildJoinClicked(tmp);
              tmp13 = closure_1;
              obj3 = closure_1(closure_3[10]);
              tmp14 = AnalyticEvents;
              obj1 = { cta_type: null };
              tmp15 = TextAreaCta;
              obj1.cta_type = TextAreaCta.JOIN_GUILD;
              trackWithMetadataResult = obj3.trackWithMetadata(AnalyticEvents.TEXT_AREA_CTA_CLICKED, obj1);
              obj5 = closure_1(closure_3[15]);
              obj7 = { source: null };
              obj7.source = tmp3.CHAT_INPUT_BLOCKER;
              joinGuildResult = obj5.joinGuild(tmp, obj7);
              tmp17 = closure_0;
              catchPromise = joinGuildResult.catch(closure_0(closure_3[16]).ignoreJoinGuildRefused);
            }
            return;
          }
        }
        const stringResult = obj3.string(tmp(1126).t.G42YmG);
        const intl = tmp(1126).intl;
        const stringResult1 = intl.string(tmp(1126).t.GlKb5i);
        cResult[12] = stringResult;
        cResult[13] = stringResult1;
        tmp17 = stringResult1;
        tmp16 = stringResult;
      } else {
        class I {
          constructor() {
            tmp = closure_1;
            if (null != closure_1) {
              tmp19 = closure_5;
              lurkingSourceForGuild = closure_5.getLurkingSourceForGuild(tmp);
              type = undefined;
              if (lurkingSourceForGuild != null) {
                type = lurkingSourceForGuild.type;
              }
              tmp3 = JoinGuildSources;
              if (type === JoinGuildSources.DIRECTORY_ENTRY) {
                tmp4 = closure_6;
                channel = closure_6.getChannel(lurkingSourceForGuild.directoryChannelId);
                if (null != channel) {
                  tmp5 = closure_0;
                  tmp6 = closure_3;
                  tmp7 = closure_0(closure_3[12]);
                  setHubProgressActionComplete = tmp7.setHubProgressActionComplete;
                  guildId = channel.getGuildId();
                  result = setHubProgressActionComplete(guildId, closure_0(closure_3[13]).HubProgressStep.JOIN_GUILD);
                }
              }
              tmp10 = closure_2;
              tmp11 = closure_3;
              obj2 = closure_2(closure_3[14]);
              result1 = obj2.trackGuildJoinClicked(tmp);
              tmp13 = closure_1;
              obj3 = closure_1(closure_3[10]);
              tmp14 = AnalyticEvents;
              obj1 = { cta_type: null };
              tmp15 = TextAreaCta;
              obj1.cta_type = TextAreaCta.JOIN_GUILD;
              trackWithMetadataResult = obj3.trackWithMetadata(AnalyticEvents.TEXT_AREA_CTA_CLICKED, obj1);
              obj5 = closure_1(closure_3[15]);
              obj7 = { source: null };
              obj7.source = tmp3.CHAT_INPUT_BLOCKER;
              joinGuildResult = obj5.joinGuild(tmp, obj7);
              tmp17 = closure_0;
              catchPromise = joinGuildResult.catch(closure_0(closure_3[16]).ignoreJoinGuildRefused);
            }
            return;
          }
        }
        tmp17 = cResult[13];
      }
      const _Symbol = Symbol;
      if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
        class I {
          constructor() {
            tmp = closure_1;
            if (null != closure_1) {
              tmp19 = closure_5;
              lurkingSourceForGuild = closure_5.getLurkingSourceForGuild(tmp);
              type = undefined;
              if (lurkingSourceForGuild != null) {
                type = lurkingSourceForGuild.type;
              }
              tmp3 = JoinGuildSources;
              if (type === JoinGuildSources.DIRECTORY_ENTRY) {
                tmp4 = closure_6;
                channel = closure_6.getChannel(lurkingSourceForGuild.directoryChannelId);
                if (null != channel) {
                  tmp5 = closure_0;
                  tmp6 = closure_3;
                  tmp7 = closure_0(closure_3[12]);
                  setHubProgressActionComplete = tmp7.setHubProgressActionComplete;
                  guildId = channel.getGuildId();
                  result = setHubProgressActionComplete(guildId, closure_0(closure_3[13]).HubProgressStep.JOIN_GUILD);
                }
              }
              tmp10 = closure_2;
              tmp11 = closure_3;
              obj2 = closure_2(closure_3[14]);
              result1 = obj2.trackGuildJoinClicked(tmp);
              tmp13 = closure_1;
              obj3 = closure_1(closure_3[10]);
              tmp14 = AnalyticEvents;
              obj1 = { cta_type: null };
              tmp15 = TextAreaCta;
              obj1.cta_type = TextAreaCta.JOIN_GUILD;
              trackWithMetadataResult = obj3.trackWithMetadata(AnalyticEvents.TEXT_AREA_CTA_CLICKED, obj1);
              obj5 = closure_1(closure_3[15]);
              obj7 = { source: null };
              obj7.source = tmp3.CHAT_INPUT_BLOCKER;
              joinGuildResult = obj5.joinGuild(tmp, obj7);
              tmp17 = closure_0;
              catchPromise = joinGuildResult.catch(closure_0(closure_3[16]).ignoreJoinGuildRefused);
            }
            return;
          }
        }
        const stringResult2 = obj4.string(tmp(1126).t.RLch70);
        cResult[14] = stringResult2;
        tmp20 = stringResult2;
      } else {
        class I {
          constructor() {
            tmp = closure_1;
            if (null != closure_1) {
              tmp19 = closure_5;
              lurkingSourceForGuild = closure_5.getLurkingSourceForGuild(tmp);
              type = undefined;
              if (lurkingSourceForGuild != null) {
                type = lurkingSourceForGuild.type;
              }
              tmp3 = JoinGuildSources;
              if (type === JoinGuildSources.DIRECTORY_ENTRY) {
                tmp4 = closure_6;
                channel = closure_6.getChannel(lurkingSourceForGuild.directoryChannelId);
                if (null != channel) {
                  tmp5 = closure_0;
                  tmp6 = closure_3;
                  tmp7 = closure_0(closure_3[12]);
                  setHubProgressActionComplete = tmp7.setHubProgressActionComplete;
                  guildId = channel.getGuildId();
                  result = setHubProgressActionComplete(guildId, closure_0(closure_3[13]).HubProgressStep.JOIN_GUILD);
                }
              }
              tmp10 = closure_2;
              tmp11 = closure_3;
              obj2 = closure_2(closure_3[14]);
              result1 = obj2.trackGuildJoinClicked(tmp);
              tmp13 = closure_1;
              obj3 = closure_1(closure_3[10]);
              tmp14 = AnalyticEvents;
              obj1 = { cta_type: null };
              tmp15 = TextAreaCta;
              obj1.cta_type = TextAreaCta.JOIN_GUILD;
              trackWithMetadataResult = obj3.trackWithMetadata(AnalyticEvents.TEXT_AREA_CTA_CLICKED, obj1);
              obj5 = closure_1(closure_3[15]);
              obj7 = { source: null };
              obj7.source = tmp3.CHAT_INPUT_BLOCKER;
              joinGuildResult = obj5.joinGuild(tmp, obj7);
              tmp17 = closure_0;
              catchPromise = joinGuildResult.catch(closure_0(closure_3[16]).ignoreJoinGuildRefused);
            }
            return;
          }
        }
      }
      if (cResult[15] !== I) {
        class I {
          constructor() {
            tmp = closure_1;
            if (null != closure_1) {
              tmp19 = closure_5;
              lurkingSourceForGuild = closure_5.getLurkingSourceForGuild(tmp);
              type = undefined;
              if (lurkingSourceForGuild != null) {
                type = lurkingSourceForGuild.type;
              }
              tmp3 = JoinGuildSources;
              if (type === JoinGuildSources.DIRECTORY_ENTRY) {
                tmp4 = closure_6;
                channel = closure_6.getChannel(lurkingSourceForGuild.directoryChannelId);
                if (null != channel) {
                  tmp5 = closure_0;
                  tmp6 = closure_3;
                  tmp7 = closure_0(closure_3[12]);
                  setHubProgressActionComplete = tmp7.setHubProgressActionComplete;
                  guildId = channel.getGuildId();
                  result = setHubProgressActionComplete(guildId, closure_0(closure_3[13]).HubProgressStep.JOIN_GUILD);
                }
              }
              tmp10 = closure_2;
              tmp11 = closure_3;
              obj2 = closure_2(closure_3[14]);
              result1 = obj2.trackGuildJoinClicked(tmp);
              tmp13 = closure_1;
              obj3 = closure_1(closure_3[10]);
              tmp14 = AnalyticEvents;
              obj1 = { cta_type: null };
              tmp15 = TextAreaCta;
              obj1.cta_type = TextAreaCta.JOIN_GUILD;
              trackWithMetadataResult = obj3.trackWithMetadata(AnalyticEvents.TEXT_AREA_CTA_CLICKED, obj1);
              obj5 = closure_1(closure_3[15]);
              obj7 = { source: null };
              obj7.source = tmp3.CHAT_INPUT_BLOCKER;
              joinGuildResult = obj5.joinGuild(tmp, obj7);
              tmp17 = closure_0;
              catchPromise = joinGuildResult.catch(closure_0(closure_3[16]).ignoreJoinGuildRefused);
            }
            return;
          }
        }
        const tmp24 = jsx(ChatInputGuardDefault, { type: "button-action", message: tmp16, buttonSecondaryText: tmp17, buttonSecondaryOnPress: G, buttonPrimaryText: tmp20, buttonPrimaryOnPress: I });
        cResult[15] = I;
        cResult[16] = tmp24;
        tmp22 = tmp24;
      } else {
        class I {
          constructor() {
            tmp = closure_1;
            if (null != closure_1) {
              tmp19 = closure_5;
              lurkingSourceForGuild = closure_5.getLurkingSourceForGuild(tmp);
              type = undefined;
              if (lurkingSourceForGuild != null) {
                type = lurkingSourceForGuild.type;
              }
              tmp3 = JoinGuildSources;
              if (type === JoinGuildSources.DIRECTORY_ENTRY) {
                tmp4 = closure_6;
                channel = closure_6.getChannel(lurkingSourceForGuild.directoryChannelId);
                if (null != channel) {
                  tmp5 = closure_0;
                  tmp6 = closure_3;
                  tmp7 = closure_0(closure_3[12]);
                  setHubProgressActionComplete = tmp7.setHubProgressActionComplete;
                  guildId = channel.getGuildId();
                  result = setHubProgressActionComplete(guildId, closure_0(closure_3[13]).HubProgressStep.JOIN_GUILD);
                }
              }
              tmp10 = closure_2;
              tmp11 = closure_3;
              obj2 = closure_2(closure_3[14]);
              result1 = obj2.trackGuildJoinClicked(tmp);
              tmp13 = closure_1;
              obj3 = closure_1(closure_3[10]);
              tmp14 = AnalyticEvents;
              obj1 = { cta_type: null };
              tmp15 = TextAreaCta;
              obj1.cta_type = TextAreaCta.JOIN_GUILD;
              trackWithMetadataResult = obj3.trackWithMetadata(AnalyticEvents.TEXT_AREA_CTA_CLICKED, obj1);
              obj5 = closure_1(closure_3[15]);
              obj7 = { source: null };
              obj7.source = tmp3.CHAT_INPUT_BLOCKER;
              joinGuildResult = obj5.joinGuild(tmp, obj7);
              tmp17 = closure_0;
              catchPromise = joinGuildResult.catch(closure_0(closure_3[16]).ignoreJoinGuildRefused);
            }
            return;
          }
        }
      }
      return tmp22;
    } else {
      class I {
        constructor() {
          tmp = closure_1;
          if (null != closure_1) {
            tmp19 = closure_5;
            lurkingSourceForGuild = closure_5.getLurkingSourceForGuild(tmp);
            type = undefined;
            if (lurkingSourceForGuild != null) {
              type = lurkingSourceForGuild.type;
            }
            tmp3 = JoinGuildSources;
            if (type === JoinGuildSources.DIRECTORY_ENTRY) {
              tmp4 = closure_6;
              channel = closure_6.getChannel(lurkingSourceForGuild.directoryChannelId);
              if (null != channel) {
                tmp5 = closure_0;
                tmp6 = closure_3;
                tmp7 = closure_0(closure_3[12]);
                setHubProgressActionComplete = tmp7.setHubProgressActionComplete;
                guildId = channel.getGuildId();
                result = setHubProgressActionComplete(guildId, closure_0(closure_3[13]).HubProgressStep.JOIN_GUILD);
              }
            }
            tmp10 = closure_2;
            tmp11 = closure_3;
            obj2 = closure_2(closure_3[14]);
            result1 = obj2.trackGuildJoinClicked(tmp);
            tmp13 = closure_1;
            obj3 = closure_1(closure_3[10]);
            tmp14 = AnalyticEvents;
            obj1 = { cta_type: null };
            tmp15 = TextAreaCta;
            obj1.cta_type = TextAreaCta.JOIN_GUILD;
            trackWithMetadataResult = obj3.trackWithMetadata(AnalyticEvents.TEXT_AREA_CTA_CLICKED, obj1);
            obj5 = closure_1(closure_3[15]);
            obj7 = { source: null };
            obj7.source = tmp3.CHAT_INPUT_BLOCKER;
            joinGuildResult = obj5.joinGuild(tmp, obj7);
            tmp17 = closure_0;
            catchPromise = joinGuildResult.catch(closure_0(closure_3[16]).ignoreJoinGuildRefused);
          }
          return;
        }
      }
    }
  }
  class E {
    constructor() {
      if (null != closure_1) {
        tmp2 = closure_1;
        tmp3 = closure_3;
        obj = closure_1(closure_3[10]);
        tmp4 = AnalyticEvents;
        obj1 = { cta_type: null };
        tmp5 = TextAreaCta;
        obj1.cta_type = TextAreaCta.FOLLOW_ANNOUNCEMENT;
        trackWithMetadataResult = obj.trackWithMetadata(AnalyticEvents.TEXT_AREA_CTA_CLICKED, obj1);
        tmp7 = closure_0;
        obj3 = closure_0(closure_3[11]);
        tmp8 = channel;
        result = obj3.showChannelFollowingActionSheet(channel.id, tmp);
      }
      return;
    }
  }
  cResult[7] = channel.id;
  cResult[8] = tmp4;
  cResult[9] = E;
}) : ((channel) => {
  let intl;
  let intl2;
  let intl3;
  let intl5;
  let isLurking;
  let lurkingSource;
  let stringResult;
  let tmp10;
  let tmp15Result;
  channel = channel.channel;
  const isReadonlyAnnouncementsChannel = channel.isReadonlyAnnouncementsChannel;
  let guildId = channel.getGuildId();
  let obj = channel(504);
  const items = [LurkingStore];
  const items1 = [guildId];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const isLurkingResult = null != guildId && LurkingStore.isLurking(guildId);
    const obj = { isLurking: isLurkingResult, lurkingSource: LurkingStore.getLurkingSourceForGuild(guildId) };
    return obj;
  }, items1);
  ({ isLurking, lurkingSource } = stateFromStoresObject);
  const items2 = [guildId, channel.id];
  const callback = react.useCallback(() => {
    const obj = channel(dependencyMap[9]);
    const history = obj.getHistory();
    history.goBack();
  }, []);
  const items3 = [guildId];
  const callback1 = react.useCallback(() => {
    if (null != guildId) {
      const obj2 = { cta_type: TextAreaCta.FOLLOW_ANNOUNCEMENT };
      const obj = AppAnalyticsUtilsDefault;
      obj.trackWithMetadata(metroImportAll.TEXT_AREA_CTA_CLICKED, obj2);
      const obj3 = showChannelFollowingActionSheet;
      const result = obj3.showChannelFollowingActionSheet(channel.id, tmp);
    }
  }, items2);
  const callback2 = react.useCallback(() => {
    if (null != guildId) {
      const lurkingSourceForGuild = LurkingStore.getLurkingSourceForGuild(tmp);
      let type;
      if (lurkingSourceForGuild != null) {
        type = lurkingSourceForGuild.type;
      }
      if (type === constants.DIRECTORY_ENTRY) {
        channel = ChannelStore.getChannel(lurkingSourceForGuild.directoryChannelId);
        if (null != channel) {
          const setHubProgressActionComplete = HubProgressActionCreators.setHubProgressActionComplete;
          HubProgressActionCreators;
          guildId = channel.getGuildId();
          const result = setHubProgressActionComplete(guildId, preloaded_user_settings.HubProgressStep.JOIN_GUILD);
        }
      }
      const obj2 = GuildDiscoveryUtilsAll;
      const result1 = obj2.trackGuildJoinClicked(tmp);
      const obj = { cta_type: TextAreaCta.JOIN_GUILD };
      const obj3 = AppAnalyticsUtilsDefault;
      obj3.trackWithMetadata(metroImportAll.TEXT_AREA_CTA_CLICKED, obj);
      const obj4 = { source: constants.CHAT_INPUT_BLOCKER };
      const obj5 = GuildActionCreatorsDefault;
      const joinGuildResult = obj5.joinGuild(guildId, obj4);
      joinGuildResult.catch(JoinGuildRefusedError.ignoreJoinGuildRefused);
    }
  }, items3);
  let type;
  if (lurkingSource != null) {
    type = lurkingSource.type;
  }
  if (type === constants2.DIRECTORY_ENTRY) {
    guildId(12105);
    const intl6 = tmp2(1126).intl;
    const intl7 = tmp2(1126).intl;
    const intl8 = tmp2(1126).intl;
    tmp15Result = <tmp14 type="button-action" message={intl6.string(channel(1126).t.G42YmG)} buttonSecondaryText={intl7.string(channel(1126).t.GlKb5i)} buttonSecondaryOnPress={callback} buttonPrimaryText={intl8.string(channel(1126).t.RLch70)} buttonPrimaryOnPress={callback2} />;
  } else {
    let obj4;
    guildId(12105);
    if (isReadonlyAnnouncementsChannel) {
      let obj3 = { type: "button-action", message: intl3.string(channel(1126).t.Hl0Mqh), buttonSecondaryText: stringResult, buttonSecondaryOnPress: tmp10, buttonPrimaryText: intl5.string(channel(1126).t["3aOv+h"]), buttonPrimaryOnPress: callback1 };
      intl3 = tmp2(1126).intl;
      stringResult = undefined;
      if (isLurking) {
        const intl4 = tmp2(1126).intl;
        stringResult = intl4.string(tmp2(1126).t.VJlc0S);
      }
      tmp10 = undefined;
      if (isLurking) {
        tmp10 = callback2;
      }
      intl5 = tmp2(1126).intl;
      obj4 = obj3;
    } else {
      obj4 = { type: "button-action", message: intl.string(channel(1126).t.G42YmG), buttonPrimaryText: intl2.string(channel(1126).t.RLch70), buttonPrimaryOnPress: callback2 };
      intl = tmp2(1126).intl;
      intl2 = tmp2(1126).intl;
    }
    tmp15Result = <tmp17 {...obj4} />;
  }
  return tmp15Result;
}));
let result = size.fileFinishedImporting("modules/chat_input/native/guard/ChatInputGuardLurking.tsx");

export default memoResult;