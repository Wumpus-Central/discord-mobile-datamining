// === Module 4771: AgeGateUtils ===

// Module 4771 (AgeGateUtils)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import initialize from "initialize" /* 504 */;
import AgeGateConstants from "AgeGateConstants" /* 1098 */;
import util from "util" /* 1114 */;
import GuildRecord from "GuildRecord" /* 1975 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2024 */;
import AgeVerificationUtils from "AgeVerificationUtils" /* 4773 */;
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5423 */;
import AgeGatedFeature from "AgeGatedFeature" /* 5424 */;
import AgeGateModalActionCreators from "AgeGateModalActionCreators" /* 7211 */;
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 8413 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import GuildNSFWAgreeStore from "GuildNSFWAgreeStore" /* 4772 */;
import GuildStore from "GuildStore" /* 1979 */;
import UserStore from "UserStore" /* 1371 */;
import Constants from "Constants" /* 1074 */;
import size from "module_2" /* 2 */;

function shouldShowAgeGateForVoiceChannel(channelId) {
  const result = AgeVerificationUtils.shouldShowTiggerPawtect();
  let tmp4 = RegionalFeatureConfigUtils.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.AGE_GATED_SPACES) && result;
  if (tmp4) {
    const currentUser = UserStore.getCurrentUser();
    let flag = false;
    if (null != currentUser) {
      let tmpResult = AgeVerificationUtils;
      const result1 = tmpResult.shouldShowTiggerPawtect();
      tmpResult = RegionalFeatureConfigUtils;
      const tmp9 = tmpResult.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.AGE_GATED_SPACES) && result1;
      flag = true !== currentUser.nsfwAllowed || tmpResult.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.AGE_GATED_SPACES) && result1;
      const tmp10 = true !== currentUser.nsfwAllowed || tmpResult.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.AGE_GATED_SPACES) && result1;
    }
    let tmp12 = !flag;
    if (flag) {
      tmp12 = null == channelId;
    }
    let tmp13 = !tmp12;
    if (!tmp12) {
      tmp13 = isChannelContentGated(ChannelStore.getChannel(channelId));
    }
    tmp4 = tmp13;
  }
  return tmp4;
}
function isChannelContentGated(channel) {
  if (null == channel) {
    return false;
  } else {
    let didAgreeResult = GuildNSFWAgreeStore.didAgree(channel.guild_id);
    const currentUser = UserStore.getCurrentUser();
    if (currentUser != null) {
      const nsfwAllowed = currentUser.nsfwAllowed;
    }
    const isFeatureAgeGatedResult = RegionalFeatureConfigUtils.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.AGE_GATED_SPACES);
    let result = AgeVerificationUtils.shouldShowTiggerPawtect();
    if (didAgreeResult) {
      didAgreeResult = false !== nsfwAllowed;
    }
    let tmp6 = !didAgreeResult;
    if (didAgreeResult) {
      if (result) {
        result = isFeatureAgeGatedResult;
      }
      tmp6 = result;
    }
    if (channel.isNSFW()) {
      if (tmp6) {
        return true;
      }
    }
    const guild = GuildStore.getGuild(channel.guild_id);
    let tmp9 = null != guild;
    if (tmp9) {
      tmp9 = isGuildNSFW(guild) && tmp6;
      const tmp11 = isGuildNSFW(guild) && tmp6;
    }
    return tmp9;
  }
}
function useIsChannelContentGated(channel) {
  _require = channel;
  const shouldShowTiggerPawtect = require("AgeVerificationUtils").useShouldShowTiggerPawtect();
  const obj = require("AgeVerificationUtils");
  items = [GuildNSFWAgreeStore];
  let stateFromStores = require("initialize").useStateFromStores(items, () => {
    let guild_id;
    if (channel != null) {
      guild_id = channel.guild_id;
    }
    return GuildNSFWAgreeStore.didAgree(guild_id);
  });
  const obj2 = require("initialize");
  const items1 = [UserStore];
  const stateFromStores1 = require("initialize").useStateFromStores(items1, () => {
    currentUser = currentUser.getCurrentUser();
    let nsfwAllowed;
    if (currentUser != null) {
      nsfwAllowed = currentUser.nsfwAllowed;
    }
    return false === nsfwAllowed;
  });
  const obj3 = require("initialize");
  let isFeatureAgeGated = require("RegionalFeatureConfigUtils").useIsFeatureAgeGated(require("AgeGatedFeature").AgeGatedFeature.AGE_GATED_SPACES);
  const obj4 = require("RegionalFeatureConfigUtils");
  const items2 = [GuildStore];
  const stateFromStores2 = require("initialize").useStateFromStores(items2, () => {
    let guild_id;
    if (channel != null) {
      guild_id = channel.guild_id;
    }
    return GuildStore.getGuild(guild_id);
  });
  if (stateFromStores) {
    stateFromStores = !stateFromStores1;
  }
  let tmp6 = !stateFromStores;
  if (stateFromStores) {
    if (isFeatureAgeGated) {
      isFeatureAgeGated = shouldShowTiggerPawtect;
    }
    tmp6 = isFeatureAgeGated;
  }
  let tmp7 = null != channel;
  if (tmp7) {
    const isNSFWResult = channel.isNSFW();
    let tmp9 = !isNSFWResult;
    if (isNSFWResult) {
      tmp9 = !tmp6;
    }
    let tmp10 = !tmp9;
    if (tmp9) {
      let tmp11 = null != stateFromStores2;
      if (tmp11) {
        const tmp13 = isGuildNSFW(stateFromStores2);
        let tmp14 = !tmp13;
        if (tmp13) {
          tmp14 = !tmp6;
        }
        tmp11 = !tmp14;
      }
      tmp10 = tmp11;
    }
    tmp7 = tmp10;
  }
  return tmp7;
}
const isGuildNSFW = GuildRecord.isGuildNSFW;
const AgeGateSource = AgeGateConstants.AgeGateSource;
({ GuildNSFWContentLevel, HelpdeskArticles: closure_9 } = Constants);
const date = new Date("06/16/2020");
let items = [, ];
({ AGE_RESTRICTED: arr[0], EXPLICIT: arr[1] } = GuildNSFWContentLevel);
let items1 = [, , ];
({ NSFW_SERVER: arr2[0], NSFW_SERVER_INVITE: arr2[1], NSFW_SERVER_INVITE_EMBED: arr2[2] } = AgeGateSource);
const set = new Set(items1);
let result = size.fileFinishedImporting("modules/age_gate/AgeGateUtils.tsx");

export const SERVER_AGE_GATE_SOURCES = set;
export const userNeedsAgeGate = function userNeedsAgeGate() {
  const currentUser = UserStore.getCurrentUser();
  let tmp2 = null != currentUser;
  if (tmp2) {
    tmp2 = SnowflakeUtilsDefault.extractTimestamp(currentUser.id) > date.getTime();
    const extractTimestampResult = SnowflakeUtilsDefault.extractTimestamp(currentUser.id);
  }
  if (tmp2) {
    tmp2 = null == currentUser.nsfwAllowed;
  }
  return tmp2;
};
export const guildNeedsAgeGate = function guildNeedsAgeGate(nsfwLevel) {
  return items.includes(nsfwLevel.nsfwLevel);
};
export const shouldAgeVerifyForAgeGate = function shouldAgeVerifyForAgeGate() {
  const result = AgeVerificationUtils.shouldShowTiggerPawtect();
  return RegionalFeatureConfigUtils.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.AGE_GATED_SPACES) && result;
};
export const useShouldAgeVerifyForAgeGate = function useShouldAgeVerifyForAgeGate() {
  let isFeatureAgeGated = RegionalFeatureConfigUtils.useIsFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.AGE_GATED_SPACES);
  if (isFeatureAgeGated) {
    isFeatureAgeGated = obj2.useShouldShowTiggerPawtect();
  }
  return isFeatureAgeGated;
};
export const useAgeGateVerifyContentForGuild = function useAgeGateVerifyContentForGuild(stateFromStores) {
  let NSFW_CHANNEL_AGE_VERIFY = dependencyMap;
  let obj = AgeVerificationUtils;
  const isAgeVerified = obj.useIsAgeVerified();
  const tmp3 = isGuildNSFW(stateFromStores);
  items = [UserStore];
  stateFromStores = initialize.useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    let nsfwAllowed;
    if (currentUser != null) {
      nsfwAllowed = currentUser.nsfwAllowed;
    }
    return false === nsfwAllowed;
  });
  const isFeatureAgeGated = RegionalFeatureConfigUtils.useIsFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.AGE_GATED_SPACES);
  let shouldShowTiggerPawtect = isFeatureAgeGated;
  if (isFeatureAgeGated) {
    shouldShowTiggerPawtect = obj4.useShouldShowTiggerPawtect();
  }
  const intl = util.intl;
  const t = util.t;
  const stringResult = intl.string(tmp3 ? t.xi46lg : t.ZmwvDc);
  obj = { title: null, description: null, agreement: null, modalType: null };
  if (shouldShowTiggerPawtect) {
    obj.title = stringResult;
    const intl6 = util.intl;
    if (!isAgeVerified) {
      const string = intl6.string;
      const t4 = util.t;
      if (tmp3) {
        let stringResult1 = string(t4.V6Gmu9);
      } else {
        stringResult1 = string(t4["5rygLk"]);
      }
      obj.description = stringResult1;
      const intl7 = util.intl;
      obj.agreement = intl7.string(util.t.FDSSia);
      obj.modalType = AgeVerificationAnalyticsUtils.NsfwSpaceWarningModalType.NSFW_CHANNEL_AGE_VERIFY;
    }
    const format = intl6.format;
    let string2 = util.t;
    if (tmp3) {
      let formatResult = format(string2["8tk6bB"], {});
    } else {
      formatResult = format(string2.XQZvwn, {});
    }
    obj.description = formatResult;
    const intl8 = util.intl;
    string2 = intl8.string;
    obj.agreement = string2(util.t.Zt4Mf4);
    NSFW_CHANNEL_AGE_VERIFY = AgeVerificationAnalyticsUtils.NsfwSpaceWarningModalType.NSFW_CHANNEL_AGE_VERIFY;
    obj.modalType = NSFW_CHANNEL_AGE_VERIFY;
  } else if (stateFromStores) {
    const intl4 = util.intl;
    const t3 = util.t;
    obj.title = intl4.string(tmp3 ? t3["H0SG/g"] : t3.NEabBa);
    const intl5 = util.intl;
    let NSFW_CHANNEL_UNDERAGE = util.t;
    obj = { helpURL: HelpdeskUtilsDefault.getArticleURL(constants.NSFW_AGE_GATING) };
    obj.description = intl5.format(tmp3 ? NSFW_CHANNEL_UNDERAGE["6++3cX"] : NSFW_CHANNEL_UNDERAGE["2kHZes"], obj);
    NSFW_CHANNEL_UNDERAGE = AgeVerificationAnalyticsUtils.NsfwSpaceWarningModalType.NSFW_CHANNEL_UNDERAGE;
    obj.modalType = NSFW_CHANNEL_UNDERAGE;
    const tmp9 = tmp3 ? NSFW_CHANNEL_UNDERAGE["6++3cX"] : NSFW_CHANNEL_UNDERAGE["2kHZes"];
  } else {
    obj.title = stringResult;
    const intl2 = util.intl;
    const t2 = util.t;
    obj.description = intl2.string(tmp3 ? t2.ZtuRts : t2.E4Cd5I);
    const intl3 = util.intl;
    obj.agreement = intl3.string(util.t.wVq7uo);
    obj.modalType = AgeVerificationAnalyticsUtils.NsfwSpaceWarningModalType.NSFW_CHANNEL_VERIFIED;
    return obj;
  }
  obj4 = AgeVerificationUtils;
};
export const useAgeGateVerifyContent = function useAgeGateVerifyContent(source) {
  let obj = AgeVerificationUtils;
  const isAgeVerified = obj.useIsAgeVerified();
  let obj1 = RegionalFeatureConfigUtils;
  const isFeatureAgeGated = obj1.useIsFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.AGE_GATED_SPACES);
  let obj2 = AgeVerificationUtils;
  let shouldShowTiggerPawtect = isFeatureAgeGated;
  if (isFeatureAgeGated) {
    shouldShowTiggerPawtect = obj2.useShouldShowTiggerPawtect();
  }
  initialize;
  [][0] = UserStore;
  if (source !== AgeGateSource.JOIN_LARGE_GUILD_UNDERAGE) {
    if (source !== AgeGateSource.ACCESS_LARGE_GUILD_UNDERAGE) {
      if (isAgeVerified) {
        obj = { verifyAgreementButtonText: null, verifyGateDescription: null, verifyTitle: null };
        const intl9 = util.intl;
        obj.verifyAgreementButtonText = intl9.string(util.t.Zt4Mf4);
        const intl10 = util.intl;
        const format = intl10.format;
        const t2 = util.t;
        if (tmp7) {
          let formatResult = format(t2["8tk6bB"], {});
        } else {
          formatResult = format(t2.XQZvwn, {});
        }
        obj.verifyGateDescription = formatResult;
        const intl11 = util.intl;
        const string3 = intl11.string;
        let xi46lg2 = util.t;
        if (tmp7) {
          xi46lg2 = xi46lg2.xi46lg;
          let string3Result = string3(xi46lg2);
        } else {
          string3Result = string3(xi46lg2.ZmwvDc);
        }
        obj.verifyTitle = string3Result;
      } else {
        if (source === AgeGateSource.LARGE_GUILD) {
          obj = { verifyTitle: null, verifyGateDescription: null, verifyAgreementButtonText: null };
          const intl6 = util.intl;
          obj.verifyTitle = intl6.string(util.t["7ymzsL"]);
          const intl7 = util.intl;
          obj.verifyGateDescription = intl7.string(util.t.SxY4IW);
          const intl8 = util.intl;
          obj.verifyAgreementButtonText = intl8.string(util.t.FDSSia);
          obj1 = obj;
        } else {
          if (tmp9) {
            if (tmp7) {
              if (!shouldShowTiggerPawtect) {
                obj1 = { verifyTitle: null, verifyGateDescription: null, verifyAgreementButtonText: null };
                const intl = util.intl;
                obj1.verifyTitle = intl.string(util.t["H0SG/g"]);
                const intl2 = util.intl;
                obj2 = { helpURL: HelpdeskUtilsDefault.getArticleURL(constants.AGE_GATE) };
                obj1.verifyGateDescription = intl2.format(util.t["6++3cX"], obj2);
              }
            }
          }
          const obj3 = { verifyAgreementButtonText: null, verifyGateDescription: null, verifyTitle: null };
          const intl3 = util.intl;
          obj3.verifyAgreementButtonText = intl3.string(util.t.FDSSia);
          const intl4 = util.intl;
          const string = intl4.string;
          const t = util.t;
          if (tmp7) {
            let stringResult = string(t.V6Gmu9);
          } else {
            stringResult = string(t["5rygLk"]);
          }
          obj3.verifyGateDescription = stringResult;
          const intl5 = util.intl;
          const string2 = intl5.string;
          let xi46lg = util.t;
          if (tmp7) {
            xi46lg = xi46lg.xi46lg;
            let string2Result = string2(xi46lg);
          } else {
            string2Result = string2(xi46lg.ZmwvDc);
          }
          obj3.verifyTitle = string2Result;
        }
        return obj1;
      }
    }
  }
  if (source === AgeGateSource.JOIN_LARGE_GUILD_UNDERAGE) {
    let MjQbfi = util.t["u/xsK9"];
  } else {
    MjQbfi = util.t.MjQbfi;
  }
  const intl12 = util.intl;
  const string4 = intl12.string;
  const t3 = util.t;
  if (isAgeVerified) {
    let string4Result = string4(t3.SAoMVJ);
  } else {
    string4Result = string4(t3.SxY4IW);
  }
  const intl13 = util.intl;
  const string5 = intl13.string;
  const t4 = util.t;
  if (isAgeVerified) {
    let string5Result = string5(t4.Zt4Mf4);
  } else {
    string5Result = string5(t4.FDSSia);
  }
  const obj4 = { verifyTitle: null, verifyGateDescription: null, verifyAgreementButtonText: null };
  const intl14 = util.intl;
  obj4.verifyTitle = intl14.string(MjQbfi);
  obj4.verifyGateDescription = string4Result;
  obj4.verifyAgreementButtonText = string5Result;
  return obj4;
};
export const shouldShowAgeGateForCurrentUser = function shouldShowAgeGateForCurrentUser() {
  const currentUser = UserStore.getCurrentUser();
  if (null == currentUser) {
    return false;
  } else {
    const result = AgeVerificationUtils.shouldShowTiggerPawtect();
    const tmp5 = RegionalFeatureConfigUtils.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.AGE_GATED_SPACES) && result;
    return true !== currentUser.nsfwAllowed || RegionalFeatureConfigUtils.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.AGE_GATED_SPACES) && result;
  }
};
export const shouldShowAgeGateForGuildContentLevel = function shouldShowAgeGateForGuildContentLevel(arg0) {
  const currentUser = UserStore.getCurrentUser();
  let flag = false;
  if (null != currentUser) {
    const result = AgeVerificationUtils.shouldShowTiggerPawtect();
    const tmp5 = RegionalFeatureConfigUtils.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.AGE_GATED_SPACES) && result;
    flag = true !== currentUser.nsfwAllowed || RegionalFeatureConfigUtils.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.AGE_GATED_SPACES) && result;
    const tmp6 = true !== currentUser.nsfwAllowed || RegionalFeatureConfigUtils.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.AGE_GATED_SPACES) && result;
  }
  if (flag) {
    if (null != arg0) {
      const guild = GuildStore.getGuild(arg0);
      let tmp10 = null != guild;
      if (tmp10) {
        tmp10 = isGuildNSFW(guild);
      }
      return tmp10;
    }
  }
  return false;
};
export const shouldShowAgeGateForChannelId = function shouldShowAgeGateForChannelId(id) {
  const currentUser = UserStore.getCurrentUser();
  let flag = false;
  if (null != currentUser) {
    const result = AgeVerificationUtils.shouldShowTiggerPawtect();
    const tmp5 = RegionalFeatureConfigUtils.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.AGE_GATED_SPACES) && result;
    flag = true !== currentUser.nsfwAllowed || RegionalFeatureConfigUtils.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.AGE_GATED_SPACES) && result;
    const tmp6 = true !== currentUser.nsfwAllowed || RegionalFeatureConfigUtils.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.AGE_GATED_SPACES) && result;
  }
  let tmp7 = !flag;
  if (flag) {
    tmp7 = null == id;
  }
  let tmp8 = !tmp7;
  if (!tmp7) {
    tmp8 = isChannelContentGated(ChannelStore.getChannel(id));
  }
  return tmp8;
};
export { shouldShowAgeGateForVoiceChannel };
export const maybeOpenAgeGateForVoiceChannel = function maybeOpenAgeGateForVoiceChannel(id) {
  let flag = shouldShowAgeGateForVoiceChannel(id);
  if (flag) {
    AgeGateModalActionCreators.openAgeGateModal(AgeGateSource.NSFW_VOICE_CHANNEL);
    flag = true;
  }
  return flag;
};
export const maybeShowAgeGate = function maybeShowAgeGate(guildId, channelId, JOIN_LARGE_GUILD_UNDERAGE) {
  const currentUser = UserStore.getCurrentUser();
  let flag = false;
  if (null != currentUser) {
    const result = AgeVerificationUtils.shouldShowTiggerPawtect();
    const tmp5 = RegionalFeatureConfigUtils.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.AGE_GATED_SPACES) && result;
    flag = true !== currentUser.nsfwAllowed || RegionalFeatureConfigUtils.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.AGE_GATED_SPACES) && result;
    const tmp6 = true !== currentUser.nsfwAllowed || RegionalFeatureConfigUtils.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.AGE_GATED_SPACES) && result;
  }
  let flag3 = false;
  if (flag) {
    flag3 = false;
    if (null != guildId) {
      const guild = GuildStore.getGuild(guildId);
      let tmp10 = null != guild;
      if (tmp10) {
        tmp10 = isGuildNSFW(guild);
      }
      flag3 = tmp10;
    }
  }
  let NSFW_SERVER = JOIN_LARGE_GUILD_UNDERAGE;
  if (flag3) {
    if (null == NSFW_SERVER) {
      NSFW_SERVER = AgeGateSource.NSFW_SERVER;
    }
    AgeGateModalActionCreators.openAgeGateModal(NSFW_SERVER);
  } else {
    const currentUser1 = UserStore.getCurrentUser();
    let tmp13 = null != currentUser1 && null == currentUser1.nsfwAllowed;
    if (tmp13) {
      const currentUser2 = UserStore.getCurrentUser();
      let flag4 = false;
      if (null != currentUser2) {
        const result1 = AgeVerificationUtils.shouldShowTiggerPawtect();
        const tmp18 = RegionalFeatureConfigUtils.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.AGE_GATED_SPACES) && result1;
        flag4 = true !== currentUser2.nsfwAllowed || RegionalFeatureConfigUtils.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.AGE_GATED_SPACES) && result1;
        const tmp19 = true !== currentUser2.nsfwAllowed || RegionalFeatureConfigUtils.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.AGE_GATED_SPACES) && result1;
      }
      let tmp21 = !flag4;
      if (flag4) {
        tmp21 = null == channelId;
      }
      let tmp22 = !tmp21;
      if (!tmp21) {
        tmp22 = isChannelContentGated(ChannelStore.getChannel(channelId));
      }
      tmp13 = tmp22;
    }
    if (tmp13) {
      let NSFW_CHANNEL = NSFW_SERVER;
      if (NSFW_SERVER == null) {
        NSFW_CHANNEL = AgeGateSource.NSFW_CHANNEL;
      }
      AgeGateModalActionCreators.openAgeGateModal(NSFW_CHANNEL);
    }
  }
};
export const isChannelOrGuildNSFW = function isChannelOrGuildNSFW(channel) {
  let tmp = null != channel;
  if (tmp) {
    let isNSFWResult = channel.isNSFW();
    if (!isNSFWResult) {
      isNSFWResult = isGuildNSFW(GuildStore.getGuild(channel.guild_id));
    }
    tmp = isNSFWResult;
  }
  return tmp;
};
export const isChannelAgeVerificationGated = function isChannelAgeVerificationGated(isNSFW) {
  if (null == isNSFW) {
    return false;
  } else {
    let tmp4 = null != isNSFW;
    const result = AgeVerificationUtils.shouldShowTiggerPawtect();
    if (tmp4) {
      let isNSFWResult = isNSFW.isNSFW();
      if (!isNSFWResult) {
        isNSFWResult = isGuildNSFW(GuildStore.getGuild(isNSFW.guild_id));
      }
      tmp4 = isNSFWResult;
    }
    if (tmp4) {
      tmp4 = result;
    }
    return tmp4;
  }
};
export const userCannotSeeNSFWContent = function userCannotSeeNSFWContent(channel) {
  if (null == channel) {
    return false;
  } else {
    const currentUser = UserStore.getCurrentUser();
    if (currentUser != null) {
      const nsfwAllowed = currentUser.nsfwAllowed;
    }
    let tmp3 = null != channel;
    if (tmp3) {
      let isNSFWResult = channel.isNSFW();
      if (!isNSFWResult) {
        isNSFWResult = isGuildNSFW(GuildStore.getGuild(channel.guild_id));
      }
      tmp3 = isNSFWResult;
    }
    if (tmp3) {
      tmp3 = true !== nsfwAllowed;
    }
    return tmp3;
  }
};
export { isChannelContentGated };
export { useIsChannelContentGated };
export const useShouldHideChannelContent = function useShouldHideChannelContent(stateFromStores) {
  const tmp = useIsChannelContentGated(stateFromStores);
  let isChannelSpoilerGated = tmp;
  if (!tmp) {
    isChannelSpoilerGated = obj.useIsChannelSpoilerGated(stateFromStores);
  }
  return isChannelSpoilerGated;
};
export const isCurrentUserMissingDateOfBirth = function isCurrentUserMissingDateOfBirth() {
  const currentUser = UserStore.getCurrentUser();
  return null != currentUser && null == currentUser.nsfwAllowed;
};
export const shouldAgeVerifyForSettingsToggles = function shouldAgeVerifyForSettingsToggles() {
  let isFeatureAgeGatedResult = RegionalFeatureConfigUtils.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.COMMANDS_TOGGLE);
  if (isFeatureAgeGatedResult) {
    isFeatureAgeGatedResult = obj2.shouldShowTiggerPawtect();
  }
  return isFeatureAgeGatedResult;
};
export const useShouldAgeVerifyForSettingsToggles = function useShouldAgeVerifyForSettingsToggles() {
  let isFeatureAgeGated = RegionalFeatureConfigUtils.useIsFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.COMMANDS_TOGGLE);
  if (isFeatureAgeGated) {
    isFeatureAgeGated = obj2.useShouldShowTiggerPawtect();
  }
  return isFeatureAgeGated;
};