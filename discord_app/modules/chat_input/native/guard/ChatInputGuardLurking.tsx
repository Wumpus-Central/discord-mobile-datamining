// discord_app/modules/chat_input/native/guard/ChatInputGuardLurking.tsx
import preloaded_user_settings from "../../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/preloaded_user_settings.tsx";
import AppAnalyticsUtilsDefault from "../../../app_analytics/AppAnalyticsUtils.tsx";
import GuildActionCreatorsDefault from "../../../../actions/GuildActionCreators.tsx";
import JoinGuildRefusedError from "../../../guild/JoinGuildRefusedError.tsx";
import GuildDiscoveryUtilsAll from "../../../../utils/GuildDiscoveryUtils.tsx";
import HubProgressActionCreators from "../../../hub/HubProgressActionCreators.tsx";
import ChatInputGuardDefault from "ChatInputGuard.tsx";
import showChannelFollowingActionSheet from "../../../channel_following/native/showChannelFollowingActionSheet.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import LurkingStore from "../../../lurker_mode/LurkingStore.tsx";
import ChannelStore from "../../../../stores/ChannelStore.tsx";

require = fn;
const TextAreaCta = fn(11634).TextAreaCta;
const Constants = fn(1085);
({ AnalyticEvents: closure_8, JoinGuildSources: closure_9 } = Constants);
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/chat_input/native/guard/ChatInputGuardLurking.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function ChatInputGuardLurking(channel) {
        const cResult = channel(576).c(29);
        channel = channel.channel;
        if (cResult[0] !== channel) {
          let guildId = channel.getGuildId();
          cResult[0] = channel;
          cResult[1] = guildId;
          let tmp4 = guildId;
        } else {
          tmp4 = cResult[1];
        }
        importDefault = tmp4;
        if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
          const items = [LurkingStore];
          cResult[2] = items;
          let tmp6 = items;
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
          let tmp9 = items1;
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
        let obj = channel(576);
        const stateFromStoresObject = channel(504).useStateFromStoresObject(tmp6, T, tmp9);
        ({ isLurking, lurkingSource } = stateFromStoresObject);
        if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
          class L {
            constructor() {
              obj = channel(closure_1_3[9]);
              history = obj.getHistory();
              goBackResult = history.goBack();
              return;
            }
          }
          cResult[6] = L;
        } else {
          class L {
            constructor() {
              obj = channel(closure_1_3[9]);
              history = obj.getHistory();
              goBackResult = history.goBack();
              return;
            }
          }
        }
        if (cResult[7] === channel.id) {
          class L {
            constructor() {
              obj = channel(closure_1_3[9]);
              history = obj.getHistory();
              goBackResult = history.goBack();
              return;
            }
          }
          if (cResult[10] !== tmp4) {
            class R {
              constructor() {
                tmp = closure_1;
                if (null != closure_1) {
                  tmp18 = closure_5;
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
                      obj2 = closure_0(closure_3[12]);
                      guildId = channel.getGuildId();
                      result = obj2.setHubProgressActionComplete(
                        guildId,
                        closure_0(closure_3[13]).HubProgressStep.JOIN_GUILD,
                      );
                    }
                  }
                  tmp9 = closure_2;
                  tmp10 = closure_3;
                  obj3 = closure_2(closure_3[14]);
                  result1 = obj3.trackGuildJoinClicked(tmp);
                  tmp12 = closure_1;
                  obj4 = closure_1(closure_3[10]);
                  tmp13 = AnalyticEvents;
                  obj1 = { cta_type: null };
                  tmp14 = TextAreaCta;
                  obj1.cta_type = TextAreaCta.JOIN_GUILD;
                  trackWithMetadataResult = obj4.trackWithMetadata(AnalyticEvents.TEXT_AREA_CTA_CLICKED, obj1);
                  obj6 = closure_1(closure_3[15]);
                  obj8 = { source: null };
                  obj8.source = tmp3.CHAT_INPUT_BLOCKER;
                  joinGuildResult = obj6.joinGuild(tmp, obj8);
                  tmp16 = closure_0;
                  catchPromise = joinGuildResult.catch(closure_0(closure_3[16]).ignoreJoinGuildRefused);
                }
                return;
              }
            }
            cResult[10] = tmp4;
            cResult[11] = R;
          } else {
            class R {
              constructor() {
                tmp = closure_1;
                if (null != closure_1) {
                  tmp18 = closure_5;
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
                      obj2 = closure_0(closure_3[12]);
                      guildId = channel.getGuildId();
                      result = obj2.setHubProgressActionComplete(
                        guildId,
                        closure_0(closure_3[13]).HubProgressStep.JOIN_GUILD,
                      );
                    }
                  }
                  tmp9 = closure_2;
                  tmp10 = closure_3;
                  obj3 = closure_2(closure_3[14]);
                  result1 = obj3.trackGuildJoinClicked(tmp);
                  tmp12 = closure_1;
                  obj4 = closure_1(closure_3[10]);
                  tmp13 = AnalyticEvents;
                  obj1 = { cta_type: null };
                  tmp14 = TextAreaCta;
                  obj1.cta_type = TextAreaCta.JOIN_GUILD;
                  trackWithMetadataResult = obj4.trackWithMetadata(AnalyticEvents.TEXT_AREA_CTA_CLICKED, obj1);
                  obj6 = closure_1(closure_3[15]);
                  obj8 = { source: null };
                  obj8.source = tmp3.CHAT_INPUT_BLOCKER;
                  joinGuildResult = obj6.joinGuild(tmp, obj8);
                  tmp16 = closure_0;
                  catchPromise = joinGuildResult.catch(closure_0(closure_3[16]).ignoreJoinGuildRefused);
                }
                return;
              }
            }
          }
          if (lurkingSource != null) {
            class R {
              constructor() {
                tmp = closure_1;
                if (null != closure_1) {
                  tmp18 = closure_5;
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
                      obj2 = closure_0(closure_3[12]);
                      guildId = channel.getGuildId();
                      result = obj2.setHubProgressActionComplete(
                        guildId,
                        closure_0(closure_3[13]).HubProgressStep.JOIN_GUILD,
                      );
                    }
                  }
                  tmp9 = closure_2;
                  tmp10 = closure_3;
                  obj3 = closure_2(closure_3[14]);
                  result1 = obj3.trackGuildJoinClicked(tmp);
                  tmp12 = closure_1;
                  obj4 = closure_1(closure_3[10]);
                  tmp13 = AnalyticEvents;
                  obj1 = { cta_type: null };
                  tmp14 = TextAreaCta;
                  obj1.cta_type = TextAreaCta.JOIN_GUILD;
                  trackWithMetadataResult = obj4.trackWithMetadata(AnalyticEvents.TEXT_AREA_CTA_CLICKED, obj1);
                  obj6 = closure_1(closure_3[15]);
                  obj8 = { source: null };
                  obj8.source = tmp3.CHAT_INPUT_BLOCKER;
                  joinGuildResult = obj6.joinGuild(tmp, obj8);
                  tmp16 = closure_0;
                  catchPromise = joinGuildResult.catch(closure_0(closure_3[16]).ignoreJoinGuildRefused);
                }
                return;
              }
            }
          }
          if (undefined === constants2.DIRECTORY_ENTRY) {
            class R {
              constructor() {
                tmp = closure_1;
                if (null != closure_1) {
                  tmp18 = closure_5;
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
                      obj2 = closure_0(closure_3[12]);
                      guildId = channel.getGuildId();
                      result = obj2.setHubProgressActionComplete(
                        guildId,
                        closure_0(closure_3[13]).HubProgressStep.JOIN_GUILD,
                      );
                    }
                  }
                  tmp9 = closure_2;
                  tmp10 = closure_3;
                  obj3 = closure_2(closure_3[14]);
                  result1 = obj3.trackGuildJoinClicked(tmp);
                  tmp12 = closure_1;
                  obj4 = closure_1(closure_3[10]);
                  tmp13 = AnalyticEvents;
                  obj1 = { cta_type: null };
                  tmp14 = TextAreaCta;
                  obj1.cta_type = TextAreaCta.JOIN_GUILD;
                  trackWithMetadataResult = obj4.trackWithMetadata(AnalyticEvents.TEXT_AREA_CTA_CLICKED, obj1);
                  obj6 = closure_1(closure_3[15]);
                  obj8 = { source: null };
                  obj8.source = tmp3.CHAT_INPUT_BLOCKER;
                  joinGuildResult = obj6.joinGuild(tmp, obj8);
                  tmp16 = closure_0;
                  catchPromise = joinGuildResult.catch(closure_0(closure_3[16]).ignoreJoinGuildRefused);
                }
                return;
              }
            }
            if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
              class R {
                constructor() {
                  tmp = closure_1;
                  if (null != closure_1) {
                    tmp18 = closure_5;
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
                        obj2 = closure_0(closure_3[12]);
                        guildId = channel.getGuildId();
                        result = obj2.setHubProgressActionComplete(
                          guildId,
                          closure_0(closure_3[13]).HubProgressStep.JOIN_GUILD,
                        );
                      }
                    }
                    tmp9 = closure_2;
                    tmp10 = closure_3;
                    obj3 = closure_2(closure_3[14]);
                    result1 = obj3.trackGuildJoinClicked(tmp);
                    tmp12 = closure_1;
                    obj4 = closure_1(closure_3[10]);
                    tmp13 = AnalyticEvents;
                    obj1 = { cta_type: null };
                    tmp14 = TextAreaCta;
                    obj1.cta_type = TextAreaCta.JOIN_GUILD;
                    trackWithMetadataResult = obj4.trackWithMetadata(AnalyticEvents.TEXT_AREA_CTA_CLICKED, obj1);
                    obj6 = closure_1(closure_3[15]);
                    obj8 = { source: null };
                    obj8.source = tmp3.CHAT_INPUT_BLOCKER;
                    joinGuildResult = obj6.joinGuild(tmp, obj8);
                    tmp16 = closure_0;
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
              let tmp17 = stringResult1;
              const tmp16 = stringResult;
            } else {
              class R {
                constructor() {
                  tmp = closure_1;
                  if (null != closure_1) {
                    tmp18 = closure_5;
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
                        obj2 = closure_0(closure_3[12]);
                        guildId = channel.getGuildId();
                        result = obj2.setHubProgressActionComplete(
                          guildId,
                          closure_0(closure_3[13]).HubProgressStep.JOIN_GUILD,
                        );
                      }
                    }
                    tmp9 = closure_2;
                    tmp10 = closure_3;
                    obj3 = closure_2(closure_3[14]);
                    result1 = obj3.trackGuildJoinClicked(tmp);
                    tmp12 = closure_1;
                    obj4 = closure_1(closure_3[10]);
                    tmp13 = AnalyticEvents;
                    obj1 = { cta_type: null };
                    tmp14 = TextAreaCta;
                    obj1.cta_type = TextAreaCta.JOIN_GUILD;
                    trackWithMetadataResult = obj4.trackWithMetadata(AnalyticEvents.TEXT_AREA_CTA_CLICKED, obj1);
                    obj6 = closure_1(closure_3[15]);
                    obj8 = { source: null };
                    obj8.source = tmp3.CHAT_INPUT_BLOCKER;
                    joinGuildResult = obj6.joinGuild(tmp, obj8);
                    tmp16 = closure_0;
                    catchPromise = joinGuildResult.catch(closure_0(closure_3[16]).ignoreJoinGuildRefused);
                  }
                  return;
                }
              }
              tmp17 = cResult[13];
            }
            const _Symbol = Symbol;
            if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
              class R {
                constructor() {
                  tmp = closure_1;
                  if (null != closure_1) {
                    tmp18 = closure_5;
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
                        obj2 = closure_0(closure_3[12]);
                        guildId = channel.getGuildId();
                        result = obj2.setHubProgressActionComplete(
                          guildId,
                          closure_0(closure_3[13]).HubProgressStep.JOIN_GUILD,
                        );
                      }
                    }
                    tmp9 = closure_2;
                    tmp10 = closure_3;
                    obj3 = closure_2(closure_3[14]);
                    result1 = obj3.trackGuildJoinClicked(tmp);
                    tmp12 = closure_1;
                    obj4 = closure_1(closure_3[10]);
                    tmp13 = AnalyticEvents;
                    obj1 = { cta_type: null };
                    tmp14 = TextAreaCta;
                    obj1.cta_type = TextAreaCta.JOIN_GUILD;
                    trackWithMetadataResult = obj4.trackWithMetadata(AnalyticEvents.TEXT_AREA_CTA_CLICKED, obj1);
                    obj6 = closure_1(closure_3[15]);
                    obj8 = { source: null };
                    obj8.source = tmp3.CHAT_INPUT_BLOCKER;
                    joinGuildResult = obj6.joinGuild(tmp, obj8);
                    tmp16 = closure_0;
                    catchPromise = joinGuildResult.catch(closure_0(closure_3[16]).ignoreJoinGuildRefused);
                  }
                  return;
                }
              }
              const stringResult2 = obj4.string(tmp(1126).t.RLch70);
              cResult[14] = stringResult2;
              const tmp20 = stringResult2;
            } else {
              class R {
                constructor() {
                  tmp = closure_1;
                  if (null != closure_1) {
                    tmp18 = closure_5;
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
                        obj2 = closure_0(closure_3[12]);
                        guildId = channel.getGuildId();
                        result = obj2.setHubProgressActionComplete(
                          guildId,
                          closure_0(closure_3[13]).HubProgressStep.JOIN_GUILD,
                        );
                      }
                    }
                    tmp9 = closure_2;
                    tmp10 = closure_3;
                    obj3 = closure_2(closure_3[14]);
                    result1 = obj3.trackGuildJoinClicked(tmp);
                    tmp12 = closure_1;
                    obj4 = closure_1(closure_3[10]);
                    tmp13 = AnalyticEvents;
                    obj1 = { cta_type: null };
                    tmp14 = TextAreaCta;
                    obj1.cta_type = TextAreaCta.JOIN_GUILD;
                    trackWithMetadataResult = obj4.trackWithMetadata(AnalyticEvents.TEXT_AREA_CTA_CLICKED, obj1);
                    obj6 = closure_1(closure_3[15]);
                    obj8 = { source: null };
                    obj8.source = tmp3.CHAT_INPUT_BLOCKER;
                    joinGuildResult = obj6.joinGuild(tmp, obj8);
                    tmp16 = closure_0;
                    catchPromise = joinGuildResult.catch(closure_0(closure_3[16]).ignoreJoinGuildRefused);
                  }
                  return;
                }
              }
            }
            if (cResult[15] !== R) {
              class R {
                constructor() {
                  tmp = closure_1;
                  if (null != closure_1) {
                    tmp18 = closure_5;
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
                        obj2 = closure_0(closure_3[12]);
                        guildId = channel.getGuildId();
                        result = obj2.setHubProgressActionComplete(
                          guildId,
                          closure_0(closure_3[13]).HubProgressStep.JOIN_GUILD,
                        );
                      }
                    }
                    tmp9 = closure_2;
                    tmp10 = closure_3;
                    obj3 = closure_2(closure_3[14]);
                    result1 = obj3.trackGuildJoinClicked(tmp);
                    tmp12 = closure_1;
                    obj4 = closure_1(closure_3[10]);
                    tmp13 = AnalyticEvents;
                    obj1 = { cta_type: null };
                    tmp14 = TextAreaCta;
                    obj1.cta_type = TextAreaCta.JOIN_GUILD;
                    trackWithMetadataResult = obj4.trackWithMetadata(AnalyticEvents.TEXT_AREA_CTA_CLICKED, obj1);
                    obj6 = closure_1(closure_3[15]);
                    obj8 = { source: null };
                    obj8.source = tmp3.CHAT_INPUT_BLOCKER;
                    joinGuildResult = obj6.joinGuild(tmp, obj8);
                    tmp16 = closure_0;
                    catchPromise = joinGuildResult.catch(closure_0(closure_3[16]).ignoreJoinGuildRefused);
                  }
                  return;
                }
              }
              let obj2 = {
                type: "button-action",
                message: tmp16,
                buttonSecondaryText: tmp17,
                buttonSecondaryOnPress: L,
                buttonPrimaryText: tmp20,
                buttonPrimaryOnPress: R,
              };
              const tmp24 = jsx(ChatInputGuardDefault, {
                type: "button-action",
                message: tmp16,
                buttonSecondaryText: tmp17,
                buttonSecondaryOnPress: L,
                buttonPrimaryText: tmp20,
                buttonPrimaryOnPress: R,
              });
              cResult[15] = R;
              cResult[16] = tmp24;
              const tmp22 = tmp24;
            } else {
              class R {
                constructor() {
                  tmp = closure_1;
                  if (null != closure_1) {
                    tmp18 = closure_5;
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
                        obj2 = closure_0(closure_3[12]);
                        guildId = channel.getGuildId();
                        result = obj2.setHubProgressActionComplete(
                          guildId,
                          closure_0(closure_3[13]).HubProgressStep.JOIN_GUILD,
                        );
                      }
                    }
                    tmp9 = closure_2;
                    tmp10 = closure_3;
                    obj3 = closure_2(closure_3[14]);
                    result1 = obj3.trackGuildJoinClicked(tmp);
                    tmp12 = closure_1;
                    obj4 = closure_1(closure_3[10]);
                    tmp13 = AnalyticEvents;
                    obj1 = { cta_type: null };
                    tmp14 = TextAreaCta;
                    obj1.cta_type = TextAreaCta.JOIN_GUILD;
                    trackWithMetadataResult = obj4.trackWithMetadata(AnalyticEvents.TEXT_AREA_CTA_CLICKED, obj1);
                    obj6 = closure_1(closure_3[15]);
                    obj8 = { source: null };
                    obj8.source = tmp3.CHAT_INPUT_BLOCKER;
                    joinGuildResult = obj6.joinGuild(tmp, obj8);
                    tmp16 = closure_0;
                    catchPromise = joinGuildResult.catch(closure_0(closure_3[16]).ignoreJoinGuildRefused);
                  }
                  return;
                }
              }
            }
            return tmp22;
          } else {
            class R {
              constructor() {
                tmp = closure_1;
                if (null != closure_1) {
                  tmp18 = closure_5;
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
                      obj2 = closure_0(closure_3[12]);
                      guildId = channel.getGuildId();
                      result = obj2.setHubProgressActionComplete(
                        guildId,
                        closure_0(closure_3[13]).HubProgressStep.JOIN_GUILD,
                      );
                    }
                  }
                  tmp9 = closure_2;
                  tmp10 = closure_3;
                  obj3 = closure_2(closure_3[14]);
                  result1 = obj3.trackGuildJoinClicked(tmp);
                  tmp12 = closure_1;
                  obj4 = closure_1(closure_3[10]);
                  tmp13 = AnalyticEvents;
                  obj1 = { cta_type: null };
                  tmp14 = TextAreaCta;
                  obj1.cta_type = TextAreaCta.JOIN_GUILD;
                  trackWithMetadataResult = obj4.trackWithMetadata(AnalyticEvents.TEXT_AREA_CTA_CLICKED, obj1);
                  obj6 = closure_1(closure_3[15]);
                  obj8 = { source: null };
                  obj8.source = tmp3.CHAT_INPUT_BLOCKER;
                  joinGuildResult = obj6.joinGuild(tmp, obj8);
                  tmp16 = closure_0;
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
        const tmpResult = channel(504);
      }
    : function ChatInputGuardLurking(channel) {
        channel = channel.channel;
        let guildId = channel.getGuildId();
        const items = [LurkingStore];
        const items1 = [guildId];
        const stateFromStoresObject = channel(504).useStateFromStoresObject(
          items,
          () => {
            let isLurkingResult = null != guildId;
            if (isLurkingResult) {
              isLurkingResult = LurkingStore.isLurking(guildId);
            }
            return { isLurking: isLurkingResult, lurkingSource: LurkingStore.getLurkingSourceForGuild(guildId) };
          },
          items1,
        );
        ({ isLurking, lurkingSource } = stateFromStoresObject);
        const items2 = [guildId, channel.id];
        const callback = noop.useCallback(() => {
          const history = channel(dependencyMap[9]).getHistory();
          history.goBack();
        }, []);
        const items3 = [guildId];
        const callback1 = noop.useCallback(() => {
          if (null != guildId) {
            const obj2 = { cta_type: TextAreaCta.FOLLOW_ANNOUNCEMENT };
            AppAnalyticsUtilsDefault.trackWithMetadata(constants.TEXT_AREA_CTA_CLICKED, obj2);
            const result = showChannelFollowingActionSheet.showChannelFollowingActionSheet(channel.id, tmp);
          }
        }, items2);
        const callback2 = noop.useCallback(() => {
          if (null != guildId) {
            const lurkingSourceForGuild = LurkingStore.getLurkingSourceForGuild(tmp);
            let type;
            if (lurkingSourceForGuild != null) {
              type = lurkingSourceForGuild.type;
            }
            if (type === constants2.DIRECTORY_ENTRY) {
              channel = ChannelStore.getChannel(lurkingSourceForGuild.directoryChannelId);
              if (null != channel) {
                guildId = channel.getGuildId();
                const result = HubProgressActionCreators.setHubProgressActionComplete(
                  guildId,
                  preloaded_user_settings.HubProgressStep.JOIN_GUILD,
                );
              }
            }
            const result1 = GuildDiscoveryUtilsAll.trackGuildJoinClicked(tmp);
            const obj = { cta_type: TextAreaCta.JOIN_GUILD };
            AppAnalyticsUtilsDefault.trackWithMetadata(constants.TEXT_AREA_CTA_CLICKED, obj);
            const obj5 = { source: constants2.CHAT_INPUT_BLOCKER };
            GuildActionCreatorsDefault.joinGuild(tmp, obj5).catch(JoinGuildRefusedError.ignoreJoinGuildRefused);
            const joinGuildResult = GuildActionCreatorsDefault.joinGuild(tmp, obj5);
          }
        }, items3);
        let type;
        if (lurkingSource != null) {
          type = lurkingSource.type;
        }
        if (type === constants2.DIRECTORY_ENTRY) {
          let obj2 = {
            type: "button-action",
            message: null,
            buttonSecondaryText: null,
            buttonSecondaryOnPress: null,
            buttonPrimaryText: null,
            buttonPrimaryOnPress: null,
          };
          const intl6 = tmp2(1126).intl;
          obj2.message = intl6.string(tmp2(1126).t.G42YmG);
          const intl7 = tmp2(1126).intl;
          obj2.buttonSecondaryText = intl7.string(tmp2(1126).t.GlKb5i);
          obj2.buttonSecondaryOnPress = callback;
          const intl8 = tmp2(1126).intl;
          obj2.buttonPrimaryText = intl8.string(tmp2(1126).t.RLch70);
          obj2.buttonPrimaryOnPress = callback2;
          let tmp15Result = jsx(guildId(12166), {
            type: "button-action",
            message: null,
            buttonSecondaryText: null,
            buttonSecondaryOnPress: null,
            buttonPrimaryText: null,
            buttonPrimaryOnPress: null,
          });
          const tmp14 = guildId(12166);
        } else {
          if (channel.isReadonlyAnnouncementsChannel) {
            let obj3 = {
              type: "button-action",
              message: null,
              buttonSecondaryText: null,
              buttonSecondaryOnPress: null,
              buttonPrimaryText: null,
              buttonPrimaryOnPress: null,
            };
            const intl3 = tmp2(1126).intl;
            obj3.message = intl3.string(tmp2(1126).t.Hl0Mqh);
            let stringResult;
            if (isLurking) {
              const intl4 = tmp2(1126).intl;
              stringResult = intl4.string(tmp2(1126).t.VJlc0S);
            }
            obj3.buttonSecondaryText = stringResult;
            let tmp10;
            if (isLurking) {
              tmp10 = callback2;
            }
            obj3.buttonSecondaryOnPress = tmp10;
            const intl5 = tmp2(1126).intl;
            obj3.buttonPrimaryText = intl5.string(tmp2(1126).t["3aOv+h"]);
            obj3.buttonPrimaryOnPress = callback1;
            let obj4 = obj3;
          } else {
            obj4 = { type: "button-action", message: null, buttonPrimaryText: null, buttonPrimaryOnPress: null };
            const intl = tmp2(1126).intl;
            obj4.message = intl.string(tmp2(1126).t.G42YmG);
            const intl2 = tmp2(1126).intl;
            obj4.buttonPrimaryText = intl2.string(tmp2(1126).t.RLch70);
            obj4.buttonPrimaryOnPress = callback2;
          }
          tmp15Result = jsx(guildId(12166), obj4);
          const tmp17 = guildId(12166);
        }
        return tmp15Result;
      },
);
