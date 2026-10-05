// === Module 12097: ChatInputGuardLurking ===

// Module 12097 (ChatInputGuardLurking)
import Fragment from "Fragment" /* 21 */;
import preloaded_user_settings from "preloaded_user_settings" /* 1197 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 5070 */;
import GuildActionCreatorsDefault from "GuildActionCreators" /* 5705 */;
import GuildDiscoveryUtilsAll from "GuildDiscoveryUtils" /* 6844 */;
import HubProgressActionCreators from "HubProgressActionCreators" /* 9491 */;
import ChatInputConstants from "ChatInputConstants" /* 11576 */;
import ChatInputGuardDefault from "ChatInputGuard" /* 12090 */;
import showChannelFollowingActionSheet from "showChannelFollowingActionSheet" /* 12098 */;
import react from "react" /* 19 */;
import LurkingStore from "LurkingStore" /* 4510 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import Constants from "Constants" /* 1085 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let channel, importDefault;

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
  let tmp8;
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
    const fn = function h() {
      const isLurkingResult = null != closure_1 && LurkingStore.isLurking(closure_1);
      const obj = { isLurking: isLurkingResult, lurkingSource: LurkingStore.getLurkingSourceForGuild(closure_1) };
      return obj;
    };
    const items1 = [tmp4];
    cResult[3] = tmp4;
    cResult[4] = fn;
    cResult[5] = items1;
    tmp9 = items1;
    tmp8 = fn;
  } else {
    tmp8 = cResult[4];
    tmp9 = cResult[5];
  }
  const tmpResult = tmp(504);
  const stateFromStoresObject = tmpResult.useStateFromStoresObject(tmp6, tmp8, tmp9);
  ({ isLurking, lurkingSource } = stateFromStoresObject);
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    class L {
      constructor() {
        const obj = channel(dependencyMap[9]);
        const history = obj.getHistory();
        history.goBack();
      }
    }
    cResult[6] = L;
  } else {
    class L {
      constructor() {
        const obj = channel(dependencyMap[9]);
        const history = obj.getHistory();
        history.goBack();
      }
    }
  }
  if (cResult[7] === channel.id) {
    class L {
      constructor() {
        const obj = channel(dependencyMap[9]);
        const history = obj.getHistory();
        history.goBack();
      }
    }
    if (cResult[10] !== tmp4) {
      class R {
        constructor() {
          if (null != closure_1) {
            const lurkingSourceForGuild = LurkingStore.getLurkingSourceForGuild(closure_1);
            let type;
            if (lurkingSourceForGuild != null) {
              type = lurkingSourceForGuild.type;
            }
            if (type === constants.DIRECTORY_ENTRY) {
              channel = ChannelStore.getChannel(lurkingSourceForGuild.directoryChannelId);
              if (null != channel) {
                const setHubProgressActionComplete = HubProgressActionCreators.setHubProgressActionComplete;
                HubProgressActionCreators;
                const guildId = channel.getGuildId();
                const result = setHubProgressActionComplete(guildId, preloaded_user_settings.HubProgressStep.JOIN_GUILD);
              }
            }
            const obj2 = GuildDiscoveryUtilsAll;
            const result1 = obj2.trackGuildJoinClicked(closure_1);
            const obj = { cta_type: TextAreaCta.JOIN_GUILD };
            const obj3 = AppAnalyticsUtilsDefault;
            obj3.trackWithMetadata(metroImportAll.TEXT_AREA_CTA_CLICKED, obj);
            const obj4 = { source: constants.CHAT_INPUT_BLOCKER };
            const obj5 = GuildActionCreatorsDefault;
            obj5.joinGuild(closure_1, obj4);
          }
        }
      }
      cResult[10] = tmp4;
      cResult[11] = R;
    } else {
      class R {
        constructor() {
          if (null != closure_1) {
            const lurkingSourceForGuild = LurkingStore.getLurkingSourceForGuild(closure_1);
            let type;
            if (lurkingSourceForGuild != null) {
              type = lurkingSourceForGuild.type;
            }
            if (type === constants.DIRECTORY_ENTRY) {
              channel = ChannelStore.getChannel(lurkingSourceForGuild.directoryChannelId);
              if (null != channel) {
                const setHubProgressActionComplete = HubProgressActionCreators.setHubProgressActionComplete;
                HubProgressActionCreators;
                const guildId = channel.getGuildId();
                const result = setHubProgressActionComplete(guildId, preloaded_user_settings.HubProgressStep.JOIN_GUILD);
              }
            }
            const obj2 = GuildDiscoveryUtilsAll;
            const result1 = obj2.trackGuildJoinClicked(closure_1);
            const obj = { cta_type: TextAreaCta.JOIN_GUILD };
            const obj3 = AppAnalyticsUtilsDefault;
            obj3.trackWithMetadata(metroImportAll.TEXT_AREA_CTA_CLICKED, obj);
            const obj4 = { source: constants.CHAT_INPUT_BLOCKER };
            const obj5 = GuildActionCreatorsDefault;
            obj5.joinGuild(closure_1, obj4);
          }
        }
      }
    }
    if (lurkingSource != null) {
      class R {
        constructor() {
          if (null != closure_1) {
            const lurkingSourceForGuild = LurkingStore.getLurkingSourceForGuild(closure_1);
            let type;
            if (lurkingSourceForGuild != null) {
              type = lurkingSourceForGuild.type;
            }
            if (type === constants.DIRECTORY_ENTRY) {
              channel = ChannelStore.getChannel(lurkingSourceForGuild.directoryChannelId);
              if (null != channel) {
                const setHubProgressActionComplete = HubProgressActionCreators.setHubProgressActionComplete;
                HubProgressActionCreators;
                const guildId = channel.getGuildId();
                const result = setHubProgressActionComplete(guildId, preloaded_user_settings.HubProgressStep.JOIN_GUILD);
              }
            }
            const obj2 = GuildDiscoveryUtilsAll;
            const result1 = obj2.trackGuildJoinClicked(closure_1);
            const obj = { cta_type: TextAreaCta.JOIN_GUILD };
            const obj3 = AppAnalyticsUtilsDefault;
            obj3.trackWithMetadata(metroImportAll.TEXT_AREA_CTA_CLICKED, obj);
            const obj4 = { source: constants.CHAT_INPUT_BLOCKER };
            const obj5 = GuildActionCreatorsDefault;
            obj5.joinGuild(closure_1, obj4);
          }
        }
      }
    }
    if (undefined === constants2.DIRECTORY_ENTRY) {
      let tmp17;
      let tmp16;
      let tmp20;
      let tmp22;
      class R {
        constructor() {
          if (null != closure_1) {
            const lurkingSourceForGuild = LurkingStore.getLurkingSourceForGuild(closure_1);
            let type;
            if (lurkingSourceForGuild != null) {
              type = lurkingSourceForGuild.type;
            }
            if (type === constants.DIRECTORY_ENTRY) {
              channel = ChannelStore.getChannel(lurkingSourceForGuild.directoryChannelId);
              if (null != channel) {
                const setHubProgressActionComplete = HubProgressActionCreators.setHubProgressActionComplete;
                HubProgressActionCreators;
                const guildId = channel.getGuildId();
                const result = setHubProgressActionComplete(guildId, preloaded_user_settings.HubProgressStep.JOIN_GUILD);
              }
            }
            const obj2 = GuildDiscoveryUtilsAll;
            const result1 = obj2.trackGuildJoinClicked(closure_1);
            const obj = { cta_type: TextAreaCta.JOIN_GUILD };
            const obj3 = AppAnalyticsUtilsDefault;
            obj3.trackWithMetadata(metroImportAll.TEXT_AREA_CTA_CLICKED, obj);
            const obj4 = { source: constants.CHAT_INPUT_BLOCKER };
            const obj5 = GuildActionCreatorsDefault;
            obj5.joinGuild(closure_1, obj4);
          }
        }
      }
      if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
        class R {
          constructor() {
            if (null != closure_1) {
              const lurkingSourceForGuild = LurkingStore.getLurkingSourceForGuild(closure_1);
              let type;
              if (lurkingSourceForGuild != null) {
                type = lurkingSourceForGuild.type;
              }
              if (type === constants.DIRECTORY_ENTRY) {
                channel = ChannelStore.getChannel(lurkingSourceForGuild.directoryChannelId);
                if (null != channel) {
                  const setHubProgressActionComplete = HubProgressActionCreators.setHubProgressActionComplete;
                  HubProgressActionCreators;
                  const guildId = channel.getGuildId();
                  const result = setHubProgressActionComplete(guildId, preloaded_user_settings.HubProgressStep.JOIN_GUILD);
                }
              }
              const obj2 = GuildDiscoveryUtilsAll;
              const result1 = obj2.trackGuildJoinClicked(closure_1);
              const obj = { cta_type: TextAreaCta.JOIN_GUILD };
              const obj3 = AppAnalyticsUtilsDefault;
              obj3.trackWithMetadata(metroImportAll.TEXT_AREA_CTA_CLICKED, obj);
              const obj4 = { source: constants.CHAT_INPUT_BLOCKER };
              const obj5 = GuildActionCreatorsDefault;
              obj5.joinGuild(closure_1, obj4);
            }
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
        class R {
          constructor() {
            if (null != closure_1) {
              const lurkingSourceForGuild = LurkingStore.getLurkingSourceForGuild(closure_1);
              let type;
              if (lurkingSourceForGuild != null) {
                type = lurkingSourceForGuild.type;
              }
              if (type === constants.DIRECTORY_ENTRY) {
                channel = ChannelStore.getChannel(lurkingSourceForGuild.directoryChannelId);
                if (null != channel) {
                  const setHubProgressActionComplete = HubProgressActionCreators.setHubProgressActionComplete;
                  HubProgressActionCreators;
                  const guildId = channel.getGuildId();
                  const result = setHubProgressActionComplete(guildId, preloaded_user_settings.HubProgressStep.JOIN_GUILD);
                }
              }
              const obj2 = GuildDiscoveryUtilsAll;
              const result1 = obj2.trackGuildJoinClicked(closure_1);
              const obj = { cta_type: TextAreaCta.JOIN_GUILD };
              const obj3 = AppAnalyticsUtilsDefault;
              obj3.trackWithMetadata(metroImportAll.TEXT_AREA_CTA_CLICKED, obj);
              const obj4 = { source: constants.CHAT_INPUT_BLOCKER };
              const obj5 = GuildActionCreatorsDefault;
              obj5.joinGuild(closure_1, obj4);
            }
          }
        }
        tmp17 = cResult[13];
      }
      const _Symbol = Symbol;
      if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
        class R {
          constructor() {
            if (null != closure_1) {
              const lurkingSourceForGuild = LurkingStore.getLurkingSourceForGuild(closure_1);
              let type;
              if (lurkingSourceForGuild != null) {
                type = lurkingSourceForGuild.type;
              }
              if (type === constants.DIRECTORY_ENTRY) {
                channel = ChannelStore.getChannel(lurkingSourceForGuild.directoryChannelId);
                if (null != channel) {
                  const setHubProgressActionComplete = HubProgressActionCreators.setHubProgressActionComplete;
                  HubProgressActionCreators;
                  const guildId = channel.getGuildId();
                  const result = setHubProgressActionComplete(guildId, preloaded_user_settings.HubProgressStep.JOIN_GUILD);
                }
              }
              const obj2 = GuildDiscoveryUtilsAll;
              const result1 = obj2.trackGuildJoinClicked(closure_1);
              const obj = { cta_type: TextAreaCta.JOIN_GUILD };
              const obj3 = AppAnalyticsUtilsDefault;
              obj3.trackWithMetadata(metroImportAll.TEXT_AREA_CTA_CLICKED, obj);
              const obj4 = { source: constants.CHAT_INPUT_BLOCKER };
              const obj5 = GuildActionCreatorsDefault;
              obj5.joinGuild(closure_1, obj4);
            }
          }
        }
        const stringResult2 = obj4.string(tmp(1126).t.RLch70);
        cResult[14] = stringResult2;
        tmp20 = stringResult2;
      } else {
        class R {
          constructor() {
            if (null != closure_1) {
              const lurkingSourceForGuild = LurkingStore.getLurkingSourceForGuild(closure_1);
              let type;
              if (lurkingSourceForGuild != null) {
                type = lurkingSourceForGuild.type;
              }
              if (type === constants.DIRECTORY_ENTRY) {
                channel = ChannelStore.getChannel(lurkingSourceForGuild.directoryChannelId);
                if (null != channel) {
                  const setHubProgressActionComplete = HubProgressActionCreators.setHubProgressActionComplete;
                  HubProgressActionCreators;
                  const guildId = channel.getGuildId();
                  const result = setHubProgressActionComplete(guildId, preloaded_user_settings.HubProgressStep.JOIN_GUILD);
                }
              }
              const obj2 = GuildDiscoveryUtilsAll;
              const result1 = obj2.trackGuildJoinClicked(closure_1);
              const obj = { cta_type: TextAreaCta.JOIN_GUILD };
              const obj3 = AppAnalyticsUtilsDefault;
              obj3.trackWithMetadata(metroImportAll.TEXT_AREA_CTA_CLICKED, obj);
              const obj4 = { source: constants.CHAT_INPUT_BLOCKER };
              const obj5 = GuildActionCreatorsDefault;
              obj5.joinGuild(closure_1, obj4);
            }
          }
        }
      }
      if (cResult[15] !== R) {
        class R {
          constructor() {
            if (null != closure_1) {
              const lurkingSourceForGuild = LurkingStore.getLurkingSourceForGuild(closure_1);
              let type;
              if (lurkingSourceForGuild != null) {
                type = lurkingSourceForGuild.type;
              }
              if (type === constants.DIRECTORY_ENTRY) {
                channel = ChannelStore.getChannel(lurkingSourceForGuild.directoryChannelId);
                if (null != channel) {
                  const setHubProgressActionComplete = HubProgressActionCreators.setHubProgressActionComplete;
                  HubProgressActionCreators;
                  const guildId = channel.getGuildId();
                  const result = setHubProgressActionComplete(guildId, preloaded_user_settings.HubProgressStep.JOIN_GUILD);
                }
              }
              const obj2 = GuildDiscoveryUtilsAll;
              const result1 = obj2.trackGuildJoinClicked(closure_1);
              const obj = { cta_type: TextAreaCta.JOIN_GUILD };
              const obj3 = AppAnalyticsUtilsDefault;
              obj3.trackWithMetadata(metroImportAll.TEXT_AREA_CTA_CLICKED, obj);
              const obj4 = { source: constants.CHAT_INPUT_BLOCKER };
              const obj5 = GuildActionCreatorsDefault;
              obj5.joinGuild(closure_1, obj4);
            }
          }
        }
        const tmp24 = jsx(ChatInputGuardDefault, { type: "button-action", message: tmp16, buttonSecondaryText: tmp17, buttonSecondaryOnPress: L, buttonPrimaryText: tmp20, buttonPrimaryOnPress: R });
        cResult[15] = R;
        cResult[16] = tmp24;
        tmp22 = tmp24;
      } else {
        class R {
          constructor() {
            if (null != closure_1) {
              const lurkingSourceForGuild = LurkingStore.getLurkingSourceForGuild(closure_1);
              let type;
              if (lurkingSourceForGuild != null) {
                type = lurkingSourceForGuild.type;
              }
              if (type === constants.DIRECTORY_ENTRY) {
                channel = ChannelStore.getChannel(lurkingSourceForGuild.directoryChannelId);
                if (null != channel) {
                  const setHubProgressActionComplete = HubProgressActionCreators.setHubProgressActionComplete;
                  HubProgressActionCreators;
                  const guildId = channel.getGuildId();
                  const result = setHubProgressActionComplete(guildId, preloaded_user_settings.HubProgressStep.JOIN_GUILD);
                }
              }
              const obj2 = GuildDiscoveryUtilsAll;
              const result1 = obj2.trackGuildJoinClicked(closure_1);
              const obj = { cta_type: TextAreaCta.JOIN_GUILD };
              const obj3 = AppAnalyticsUtilsDefault;
              obj3.trackWithMetadata(metroImportAll.TEXT_AREA_CTA_CLICKED, obj);
              const obj4 = { source: constants.CHAT_INPUT_BLOCKER };
              const obj5 = GuildActionCreatorsDefault;
              obj5.joinGuild(closure_1, obj4);
            }
          }
        }
      }
      return tmp22;
    } else {
      class R {
        constructor() {
          if (null != closure_1) {
            const lurkingSourceForGuild = LurkingStore.getLurkingSourceForGuild(closure_1);
            let type;
            if (lurkingSourceForGuild != null) {
              type = lurkingSourceForGuild.type;
            }
            if (type === constants.DIRECTORY_ENTRY) {
              channel = ChannelStore.getChannel(lurkingSourceForGuild.directoryChannelId);
              if (null != channel) {
                const setHubProgressActionComplete = HubProgressActionCreators.setHubProgressActionComplete;
                HubProgressActionCreators;
                const guildId = channel.getGuildId();
                const result = setHubProgressActionComplete(guildId, preloaded_user_settings.HubProgressStep.JOIN_GUILD);
              }
            }
            const obj2 = GuildDiscoveryUtilsAll;
            const result1 = obj2.trackGuildJoinClicked(closure_1);
            const obj = { cta_type: TextAreaCta.JOIN_GUILD };
            const obj3 = AppAnalyticsUtilsDefault;
            obj3.trackWithMetadata(metroImportAll.TEXT_AREA_CTA_CLICKED, obj);
            const obj4 = { source: constants.CHAT_INPUT_BLOCKER };
            const obj5 = GuildActionCreatorsDefault;
            obj5.joinGuild(closure_1, obj4);
          }
        }
      }
    }
  }
  class G {
    constructor() {
      if (null != closure_1) {
        const obj2 = { cta_type: TextAreaCta.FOLLOW_ANNOUNCEMENT };
        const obj = AppAnalyticsUtilsDefault;
        obj.trackWithMetadata(metroImportAll.TEXT_AREA_CTA_CLICKED, obj2);
        const obj3 = showChannelFollowingActionSheet;
        const result = obj3.showChannelFollowingActionSheet(channel.id, tmp);
      }
    }
  }
  cResult[7] = channel.id;
  cResult[8] = tmp4;
  cResult[9] = G;
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
      obj5.joinGuild(guildId, obj4);
    }
  }, items3);
  let type;
  if (lurkingSource != null) {
    type = lurkingSource.type;
  }
  if (type === constants2.DIRECTORY_ENTRY) {
    guildId(12090);
    const intl6 = tmp2(1126).intl;
    const intl7 = tmp2(1126).intl;
    const intl8 = tmp2(1126).intl;
    tmp15Result = <tmp14 type="button-action" message={intl6.string(channel(1126).t.G42YmG)} buttonSecondaryText={intl7.string(channel(1126).t.GlKb5i)} buttonSecondaryOnPress={callback} buttonPrimaryText={intl8.string(channel(1126).t.RLch70)} buttonPrimaryOnPress={callback2} />;
  } else {
    let obj4;
    guildId(12090);
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