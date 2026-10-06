// === Module 5106: AgeGateUtils ===

// Module 5106 (AgeGateUtils)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import get_initialized from "get initialized" /* 504 */;
import react from "react" /* 576 */;
import AgeGateConstants from "AgeGateConstants" /* 1110 */;
import intl15 from "intl" /* 1126 */;
import GuildRecord from "GuildRecord" /* 2070 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2115 */;
import AgeVerificationUtils from "AgeVerificationUtils" /* 5108 */;
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5587 */;
import AgeGatedFeature from "AgeGatedFeature" /* 5588 */;
import AgeGateModalActionCreators from "AgeGateModalActionCreators" /* 6717 */;
import SpoilerChannelUtils from "SpoilerChannelUtils" /* 6842 */;
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 8119 */;
import getTinyBroncoWarningDescriptions from "getTinyBroncoWarningDescriptions" /* 9440 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import GuildNSFWAgreeStore from "GuildNSFWAgreeStore" /* 5107 */;
import GuildStore from "GuildStore" /* 2074 */;
import UserStore from "UserStore" /* 1377 */;
import Constants from "Constants" /* 1085 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let GuildNSFWContentLevel;
let c9;
function getLargeGuildUnderageContent(isAgeVerified) {
  let string2Result;
  let stringResult;
  let tmp5;
  const intl = intl15.intl;
  const string = intl.string;
  const t = intl15.t;
  if (isAgeVerified) {
    stringResult = string(t.SAoMVJ);
    tmp5 = require;
  } else {
    stringResult = string(t.SxY4IW);
    tmp5 = require;
  }
  const obj = { description: stringResult, agreement: string2Result };
  const intl2 = tmp5(1126).intl;
  const string2 = intl2.string;
  const t2 = tmp5(1126).t;
  if (isAgeVerified) {
    string2Result = string2(t2.Zt4Mf4);
  } else {
    string2Result = string2(t2.FDSSia);
  }
  return obj;
}
function getLegacyDescriptions(arg0) {
  let formatResult;
  let string2Result;
  const intl = intl15.intl;
  const string = intl.string;
  const t = intl15.t;
  const obj = { adult: string(arg0 ? t.ZtuRts : t.E4Cd5I), teen: formatResult, unverified: string2Result };
  const intl2 = intl15.intl;
  const format = intl2.format;
  const t2 = intl15.t;
  if (arg0) {
    formatResult = format(t2["8tk6bB"], {});
  } else {
    formatResult = format(t2.XQZvwn, {});
  }
  const intl3 = intl15.intl;
  const string2 = intl3.string;
  const t3 = intl15.t;
  if (arg0) {
    string2Result = string2(t3.V6Gmu9);
  } else {
    string2Result = string2(t3["5rygLk"]);
  }
  return obj;
}
function shouldShowAgeGateForVoiceChannel(channelId) {
  const obj = AgeVerificationUtils;
  const result = obj.shouldShowTiggerPawtect();
  const obj2 = RegionalFeatureConfigUtils;
  let tmp4 = obj2.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.AGE_GATED_SPACES) && result;
  if (tmp4) {
    const currentUser = UserStore.getCurrentUser();
    let flag = false;
    if (null != currentUser) {
      const tmpResult = AgeVerificationUtils;
      const result1 = tmpResult.shouldShowTiggerPawtect();
      const tmpResult2 = RegionalFeatureConfigUtils;
      flag = true !== currentUser.nsfwAllowed || tmpResult2.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.AGE_GATED_SPACES) && result1;
      true !== currentUser.nsfwAllowed || tmpResult2.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.AGE_GATED_SPACES) && result1;
    }
    let tmp12 = !flag;
    if (flag) {
      tmp12 = null == channelId;
    }
    tmp4 = !tmp12 && isChannelContentGated(ChannelStore.getChannel(channelId));
    const tmp13 = !tmp12 && isChannelContentGated(ChannelStore.getChannel(channelId));
  }
  return tmp4;
}
function isChannelContentGated(channel) {
  if (null == channel) {
    return false;
  } else {
    let nsfwAllowed;
    let didAgreeResult = GuildNSFWAgreeStore.didAgree(channel.guild_id);
    const currentUser = UserStore.getCurrentUser();
    if (currentUser != null) {
      nsfwAllowed = currentUser.nsfwAllowed;
    }
    const obj = RegionalFeatureConfigUtils;
    const isFeatureAgeGatedResult = obj.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.AGE_GATED_SPACES);
    const obj2 = AgeVerificationUtils;
    let result = obj2.shouldShowTiggerPawtect();
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
      isGuildNSFW(guild) && tmp6;
    }
    return tmp9;
  }
}
const isGuildNSFW = GuildRecord.isGuildNSFW;
const AgeGateSource = AgeGateConstants.AgeGateSource;
({ GuildNSFWContentLevel, HelpdeskArticles: c9 } = Constants);
const date = new Date("06/16/2020");
let items = [, ];
({ AGE_RESTRICTED: arr[0], EXPLICIT: arr[1] } = GuildNSFWContentLevel);
let items1 = [, , ];
({ NSFW_SERVER: arr2[0], NSFW_SERVER_INVITE: arr2[1], NSFW_SERVER_INVITE_EMBED: arr2[2] } = AgeGateSource);
const set = new Set(items1);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const obj = RegionalFeatureConfigUtils;
  let isFeatureAgeGated = obj.useIsFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.AGE_GATED_SPACES);
  const obj2 = AgeVerificationUtils;
  if (isFeatureAgeGated) {
    isFeatureAgeGated = obj2.useShouldShowTiggerPawtect();
  }
  return isFeatureAgeGated;
}) : (() => {
  const obj = RegionalFeatureConfigUtils;
  let isFeatureAgeGated = obj.useIsFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.AGE_GATED_SPACES);
  const obj2 = AgeVerificationUtils;
  if (isFeatureAgeGated) {
    isFeatureAgeGated = obj2.useShouldShowTiggerPawtect();
  }
  return isFeatureAgeGated;
});
let closure_14 = tmp5;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? ((name) => {
  const obj = react;
  const cResult = obj.c(3);
  const obj2 = RegionalFeatureConfigUtils;
  if (obj2.useIsFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.AGE_GATED_SPACES)) {
    let tmp7;
    let tmp6;
    if (cResult[0] !== name) {
      let tinyBroncoWarningDescriptions;
      let tmp13;
      const _Symbol = Symbol;
      const forResult = Symbol.for("react.early_return_sentinel");
      const tmp11 = isGuildNSFW(name);
      let str2;
      if (name != null) {
        str2 = name.name;
      }
      if (str2 == null) {
        str2 = "";
      }
      if (tmp11) {
        const tmpResult = getTinyBroncoWarningDescriptions;
        tinyBroncoWarningDescriptions = tmpResult.getTinyBroncoWarningDescriptions(tmp11, str2);
        tmp13 = forResult;
      } else {
        tmp13 = null;
      }
      cResult[0] = name;
      cResult[1] = tinyBroncoWarningDescriptions;
      cResult[2] = tmp13;
      tmp7 = tmp13;
      tmp6 = tinyBroncoWarningDescriptions;
    } else {
      tmp6 = cResult[1];
      tmp7 = cResult[2];
    }
    const _Symbol2 = Symbol;
    if (tmp7 !== Symbol.for("react.early_return_sentinel")) {
      tmp6 = tmp7;
    }
    return tmp6;
  } else {
    return null;
  }
}) : ((name) => {
  const obj = RegionalFeatureConfigUtils;
  if (obj.useIsFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.AGE_GATED_SPACES)) {
    let tinyBroncoWarningDescriptions;
    const tmp5 = isGuildNSFW(name);
    let str;
    if (name != null) {
      str = name.name;
    }
    if (str == null) {
      str = "";
    }
    if (tmp5) {
      const tmpResult = getTinyBroncoWarningDescriptions;
      tinyBroncoWarningDescriptions = tmpResult.getTinyBroncoWarningDescriptions(tmp5, str);
    } else {
      tinyBroncoWarningDescriptions = null;
    }
    return tinyBroncoWarningDescriptions;
  } else {
    return null;
  }
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_16 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const obj = react;
  const cResult = obj.c(1);
  let tmp4 = null;
  const obj2 = RegionalFeatureConfigUtils;
  if (obj2.useIsFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.AGE_GATED_SPACES)) {
    tmp4 = null;
    if (arg0) {
      let first;
      const _Symbol = Symbol;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const tmpResult = getTinyBroncoWarningDescriptions;
        const tinyBroncoWarningDescriptions = tmpResult.getTinyBroncoWarningDescriptions(true, "");
        cResult[0] = tinyBroncoWarningDescriptions;
        first = tinyBroncoWarningDescriptions;
      } else {
        first = cResult[0];
      }
      tmp4 = first;
    }
  }
  return tmp4;
}) : ((arg0) => {
  let tinyBroncoWarningDescriptions = null;
  const obj = RegionalFeatureConfigUtils;
  if (obj.useIsFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.AGE_GATED_SPACES)) {
    tinyBroncoWarningDescriptions = null;
    if (arg0) {
      const tmpResult = getTinyBroncoWarningDescriptions;
      tinyBroncoWarningDescriptions = tmpResult.getTinyBroncoWarningDescriptions(true, "");
    }
  }
  return tinyBroncoWarningDescriptions;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? ((guild) => {
  let obj6;
  let tmp13;
  let tmp6;
  let tmp7;
  const obj = react;
  const cResult = obj.c(26);
  const obj2 = AgeVerificationUtils;
  const isAgeVerified = obj2.useIsAgeVerified();
  const tmp5 = isGuildNSFW(guild);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    items = [UserStore];
    const fn = function o() {
      currentUser = currentUser.getCurrentUser();
      let nsfwAllowed;
      if (currentUser != null) {
        nsfwAllowed = currentUser.nsfwAllowed;
      }
      return false === nsfwAllowed;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp6 = items;
    tmp7 = fn;
  } else {
    [tmp6, tmp7] = cResult;
  }
  const tmpResult = get_initialized;
  const stateFromStores = tmpResult.useStateFromStores(tmp6, tmp7);
  const tmp10 = closure_14();
  const tmp11 = closure_15(guild);
  const tmp12 = getLegacyDescriptions(tmp5);
  if (cResult[2] !== tmp5) {
    const intl = intl15.intl;
    const string = intl.string;
    const t = intl15.t;
    const stringResult = string(tmp5 ? t.xi46lg : t.ZmwvDc);
    cResult[2] = tmp5;
    cResult[3] = stringResult;
    tmp13 = stringResult;
  } else {
    tmp13 = cResult[3];
  }
  if (tmp10) {
    if (isAgeVerified) {
      let tmp35;
      let teen;
      if (tmp11 != null) {
        teen = tmp11.teen;
      }
      if (teen == null) {
        teen = tmp12.teen;
      }
      if (cResult[4] !== tmp11) {
        let Zt4Mf4;
        const intl6 = intl15.intl;
        const string3 = intl6.string;
        if (null != tmp11) {
          Zt4Mf4 = intl15.t.FDSSia;
        } else {
          Zt4Mf4 = intl15.t.Zt4Mf4;
        }
        const string3Result = string3(Zt4Mf4);
        cResult[4] = tmp11;
        cResult[5] = string3Result;
        tmp35 = string3Result;
      } else {
        tmp35 = cResult[5];
      }
      if (cResult[6] === tmp13) {
        if (cResult[7] === teen) {
          if (cResult[8] === tmp35) {
            let tmp38;
            if (cResult[9] === null != tmp11) {
              tmp38 = cResult[10];
            }
            return tmp38;
          }
        }
      }
      const obj3 = { title: tmp13, description: teen, agreement: tmp35, modalType: AgeVerificationAnalyticsUtils.NsfwSpaceWarningModalType.NSFW_CHANNEL_AGE_VERIFY, emphasiseDisagree: null != tmp11 };
      cResult[6] = tmp13;
      cResult[7] = teen;
      cResult[8] = tmp35;
      cResult[9] = null != tmp11;
      cResult[10] = obj3;
      tmp38 = obj3;
    } else {
      let tmp31;
      let unverified;
      if (tmp11 != null) {
        unverified = tmp11.unverified;
      }
      if (unverified == null) {
        unverified = tmp12.unverified;
      }
      const _Symbol2 = Symbol;
      if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
        const intl5 = intl15.intl;
        const stringResult1 = intl5.string(intl15.t.FDSSia);
        cResult[11] = stringResult1;
        tmp31 = stringResult1;
      } else {
        tmp31 = cResult[11];
      }
      if (cResult[12] === tmp13) {
        let tmp33;
        if (cResult[13] === unverified) {
          tmp33 = cResult[14];
        }
        return tmp33;
      }
      const obj4 = { title: tmp13, description: unverified, agreement: tmp31, modalType: AgeVerificationAnalyticsUtils.NsfwSpaceWarningModalType.NSFW_CHANNEL_AGE_VERIFY };
      cResult[12] = tmp13;
      cResult[13] = unverified;
      cResult[14] = obj4;
      tmp33 = obj4;
    }
  } else if (stateFromStores) {
    let tmp20;
    let tmp22;
    if (cResult[15] !== tmp5) {
      const intl3 = intl15.intl;
      const string2 = intl3.string;
      const t2 = intl15.t;
      const string2Result = string2(tmp5 ? t2["H0SG/g"] : t2.NEabBa);
      cResult[15] = tmp5;
      cResult[16] = string2Result;
      tmp20 = string2Result;
    } else {
      tmp20 = cResult[16];
    }
    if (cResult[17] !== tmp5) {
      const intl4 = intl15.intl;
      const format = intl4.format;
      const t3 = intl15.t;
      const obj5 = { helpURL: obj6.getArticleURL(constants.NSFW_AGE_GATING) };
      const tmp23 = tmp5 ? t3["6++3cX"] : t3["2kHZes"];
      obj6 = HelpdeskUtilsDefault;
      const formatResult = format(tmp23, obj5);
      cResult[17] = tmp5;
      cResult[18] = formatResult;
      tmp22 = formatResult;
    } else {
      tmp22 = cResult[18];
    }
    if (cResult[19] === tmp20) {
      let tmp27;
      if (cResult[20] === tmp22) {
        tmp27 = cResult[21];
      }
      return tmp27;
    }
    const obj7 = { title: tmp20, description: tmp22, agreement: null, modalType: AgeVerificationAnalyticsUtils.NsfwSpaceWarningModalType.NSFW_CHANNEL_UNDERAGE };
    cResult[19] = tmp20;
    cResult[20] = tmp22;
    cResult[21] = obj7;
    tmp27 = obj7;
  } else {
    let tmp17;
    let adult;
    if (tmp11 != null) {
      adult = tmp11.adult;
    }
    if (adult == null) {
      adult = tmp12.adult;
    }
    const _Symbol = Symbol;
    if (cResult[22] === Symbol.for("react.memo_cache_sentinel")) {
      const intl2 = intl15.intl;
      const stringResult2 = intl2.string(intl15.t.wVq7uo);
      cResult[22] = stringResult2;
      tmp17 = stringResult2;
    } else {
      tmp17 = cResult[22];
    }
    if (cResult[23] === tmp13) {
      let tmp19;
      if (cResult[24] === adult) {
        tmp19 = cResult[25];
      }
      return tmp19;
    }
    const obj8 = { title: tmp13, description: adult, agreement: tmp17, modalType: AgeVerificationAnalyticsUtils.NsfwSpaceWarningModalType.NSFW_CHANNEL_VERIFIED };
    cResult[23] = tmp13;
    cResult[24] = adult;
    cResult[25] = obj8;
    tmp19 = obj8;
  }
}) : ((guild) => {
  let Zt4Mf4;
  let intl5;
  let obj5;
  let string3;
  let teen;
  let tmp12;
  let unverified;
  const obj = AgeVerificationUtils;
  const isAgeVerified = obj.useIsAgeVerified();
  const tmp4 = isGuildNSFW(guild);
  items = [UserStore];
  const obj2 = get_initialized;
  const stateFromStores = obj2.useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    let nsfwAllowed;
    if (currentUser != null) {
      nsfwAllowed = currentUser.nsfwAllowed;
    }
    return false === nsfwAllowed;
  });
  const tmp6 = closure_14();
  const tmp7 = closure_15(guild);
  const tmp8 = getLegacyDescriptions(tmp4);
  const intl = intl15.intl;
  const string = intl.string;
  const t = intl15.t;
  const stringResult = string(tmp4 ? t.xi46lg : t.ZmwvDc);
  if (tmp6) {
    let obj4;
    if (isAgeVerified) {
      const obj3 = { title: stringResult, description: teen, agreement: string3(Zt4Mf4), modalType: AgeVerificationAnalyticsUtils.NsfwSpaceWarningModalType.NSFW_CHANNEL_AGE_VERIFY, emphasiseDisagree: null != tmp7 };
      teen = undefined;
      if (tmp7 != null) {
        teen = tmp7.teen;
      }
      if (teen == null) {
        teen = tmp8.teen;
      }
      const intl6 = intl15.intl;
      string3 = intl6.string;
      if (null != tmp7) {
        Zt4Mf4 = intl15.t.FDSSia;
      } else {
        Zt4Mf4 = intl15.t.Zt4Mf4;
      }
      obj4 = obj3;
    } else {
      obj4 = { title: stringResult, description: unverified, agreement: intl5.string(intl15.t.FDSSia), modalType: AgeVerificationAnalyticsUtils.NsfwSpaceWarningModalType.NSFW_CHANNEL_AGE_VERIFY };
      unverified = undefined;
      if (tmp7 != null) {
        unverified = tmp7.unverified;
      }
      if (unverified == null) {
        unverified = tmp8.unverified;
      }
      intl5 = intl15.intl;
    }
    tmp12 = obj4;
  } else {
    const obj6 = { title: null, description: null, agreement: null, modalType: null };
    if (stateFromStores) {
      const intl3 = intl15.intl;
      const string2 = intl3.string;
      const t2 = intl15.t;
      obj6.title = string2(tmp4 ? t2["H0SG/g"] : t2.NEabBa);
      const intl4 = intl15.intl;
      const format = intl4.format;
      const t3 = intl15.t;
      const obj7 = { helpURL: obj5.getArticleURL(constants.NSFW_AGE_GATING) };
      const tmp13 = tmp4 ? t3["6++3cX"] : t3["2kHZes"];
      obj5 = HelpdeskUtilsDefault;
      obj6.description = format(tmp13, obj7);
      obj6.modalType = AgeVerificationAnalyticsUtils.NsfwSpaceWarningModalType.NSFW_CHANNEL_UNDERAGE;
      tmp12 = obj6;
    } else {
      obj6.title = stringResult;
      let adult;
      if (tmp7 != null) {
        adult = tmp7.adult;
      }
      if (adult == null) {
        adult = tmp8.adult;
      }
      obj6.description = adult;
      const intl2 = intl15.intl;
      obj6.agreement = intl2.string(intl15.t.wVq7uo);
      obj6.modalType = AgeVerificationAnalyticsUtils.NsfwSpaceWarningModalType.NSFW_CHANNEL_VERIFIED;
      tmp12 = obj6;
    }
  }
  return tmp12;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let MjQbfi;
  let intl7;
  let intl8;
  let intl9;
  let obj5;
  let tmp57;
  let tmp60;
  let tmp8;
  let tmp9;
  const obj = react;
  const cResult = obj.c(42);
  const obj2 = AgeVerificationUtils;
  const isAgeVerified = obj2.useIsAgeVerified();
  let tmp7 = arg0 === AgeGateSource.NSFW_SERVER;
  const tmp5 = closure_14();
  if (!tmp7) {
    tmp7 = arg0 === AgeGateSource.NSFW_SERVER_INVITE;
  }
  if (!tmp7) {
    tmp7 = arg0 === AgeGateSource.NSFW_SERVER_INVITE_EMBED;
  }
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    items = [UserStore];
    const fn = function l() {
      currentUser = currentUser.getCurrentUser();
      let nsfwAllowed;
      if (currentUser != null) {
        nsfwAllowed = currentUser.nsfwAllowed;
      }
      return false === nsfwAllowed;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp8 = items;
    tmp9 = fn;
  } else {
    [tmp8, tmp9] = cResult;
  }
  const tmpResult = get_initialized;
  const stateFromStores = tmpResult.useStateFromStores(tmp8, tmp9);
  const tmp12 = closure_16(tmp7);
  if (arg0 !== AgeGateSource.JOIN_LARGE_GUILD_UNDERAGE) {
    if (arg0 !== AgeGateSource.ACCESS_LARGE_GUILD_UNDERAGE) {
      if (isAgeVerified) {
        let tmp38;
        if (cResult[10] !== tmp12) {
          let Zt4Mf4;
          const intl10 = intl15.intl;
          const string4 = intl10.string;
          if (null != tmp12) {
            Zt4Mf4 = intl15.t.FDSSia;
          } else {
            Zt4Mf4 = intl15.t.Zt4Mf4;
          }
          const string4Result = string4(Zt4Mf4);
          cResult[10] = tmp12;
          cResult[11] = string4Result;
          tmp38 = string4Result;
        } else {
          tmp38 = cResult[11];
        }
        if (cResult[12] === tmp7) {
          let tmp44;
          let tmp49;
          let tmp51;
          let teen;
          const tmp41 = cResult[13];
          if (tmp12 != null) {
            teen = tmp12.teen;
          }
          if (tmp41 === teen) {
            tmp44 = cResult[14];
          }
          if (cResult[15] !== tmp7) {
            let string5Result;
            const intl12 = intl15.intl;
            const string5 = intl12.string;
            const t4 = intl15.t;
            if (tmp7) {
              string5Result = string5(t4.xi46lg);
            } else {
              string5Result = string5(t4.ZmwvDc);
            }
            cResult[15] = tmp7;
            cResult[16] = string5Result;
            tmp49 = string5Result;
          } else {
            tmp49 = cResult[16];
          }
          if (cResult[17] !== tmp12) {
            let f3Pet92;
            const intl13 = intl15.intl;
            const string6 = intl13.string;
            if (null != tmp12) {
              f3Pet92 = intl15.t["/g10LC"];
            } else {
              f3Pet92 = intl15.t.f3Pet9;
            }
            const string6Result = string6(f3Pet92);
            cResult[17] = tmp12;
            cResult[18] = string6Result;
            tmp51 = string6Result;
          } else {
            tmp51 = cResult[18];
          }
          if (cResult[19] === tmp38) {
            if (cResult[20] === tmp44) {
              if (cResult[21] === tmp49) {
                if (cResult[22] === tmp51) {
                  let tmp56;
                  if (cResult[23] === null != tmp12) {
                    tmp56 = cResult[24];
                  }
                  return tmp56;
                }
              }
            }
          }
          const obj3 = { verifyAgreementButtonText: tmp38, verifyGateDescription: tmp44, verifyTitle: tmp49, verifyDisagreementButtonText: tmp51, verifyEmphasiseDisagree: null != tmp12 };
          cResult[19] = tmp38;
          cResult[20] = tmp44;
          cResult[21] = tmp49;
          cResult[22] = tmp51;
          cResult[23] = null != tmp12;
          cResult[24] = obj3;
          tmp56 = obj3;
        }
        let teen1;
        if (tmp12 != null) {
          teen1 = tmp12.teen;
        }
        if (teen1 == null) {
          let format2Result;
          const intl11 = intl15.intl;
          const format2 = intl11.format;
          const t3 = intl15.t;
          if (tmp7) {
            format2Result = format2(t3["8tk6bB"], {});
          } else {
            format2Result = format2(t3.XQZvwn, {});
          }
          teen1 = format2Result;
        }
        cResult[12] = tmp7;
        let teen2;
        if (tmp12 != null) {
          teen2 = tmp12.teen;
        }
        cResult[13] = teen2;
        cResult[14] = teen1;
        tmp44 = teen1;
      } else {
        let tmp20;
        if (arg0 === AgeGateSource.LARGE_GUILD) {
          let tmp37;
          const _Symbol3 = Symbol;
          if (cResult[25] === Symbol.for("react.memo_cache_sentinel")) {
            const obj4 = { verifyTitle: intl7.string(intl15.t["7ymzsL"]), verifyGateDescription: intl8.string(intl15.t.SxY4IW), verifyAgreementButtonText: intl9.string(intl15.t.FDSSia) };
            intl7 = intl15.intl;
            intl8 = intl15.intl;
            intl9 = intl15.intl;
            cResult[25] = obj4;
            tmp37 = obj4;
          } else {
            tmp37 = cResult[25];
          }
          tmp20 = tmp37;
        } else {
          let tmp21;
          if (stateFromStores) {
            if (tmp7) {
              if (!tmp5) {
                let tmp14;
                let tmp13;
                const _Symbol = Symbol;
                if (cResult[26] === Symbol.for("react.memo_cache_sentinel")) {
                  const intl = intl15.intl;
                  const stringResult = intl.string(intl15.t["H0SG/g"]);
                  const intl2 = intl15.intl;
                  const format = intl2.format;
                  const obj6 = { helpURL: obj5.getArticleURL(constants.AGE_GATE) };
                  const prop = intl15.t["6++3cX"];
                  obj5 = HelpdeskUtilsDefault;
                  const formatResult = format(prop, obj6);
                  cResult[26] = stringResult;
                  cResult[27] = formatResult;
                  tmp14 = formatResult;
                  tmp13 = stringResult;
                } else {
                  tmp13 = cResult[26];
                  tmp14 = cResult[27];
                }
                if (cResult[28] !== tmp14) {
                  const obj7 = { verifyTitle: tmp13, verifyGateDescription: tmp14, verifyAgreementButtonText: null };
                  cResult[28] = tmp14;
                  cResult[29] = obj7;
                  tmp20 = obj7;
                } else {
                  tmp20 = cResult[29];
                }
              }
            }
          }
          const _Symbol2 = Symbol;
          if (cResult[30] === Symbol.for("react.memo_cache_sentinel")) {
            const intl3 = intl15.intl;
            const stringResult1 = intl3.string(intl15.t.FDSSia);
            cResult[30] = stringResult1;
            tmp21 = stringResult1;
          } else {
            tmp21 = cResult[30];
          }
          if (cResult[31] === tmp7) {
            let tmp26;
            let tmp31;
            let tmp33;
            let unverified;
            const tmp23 = cResult[32];
            if (tmp12 != null) {
              unverified = tmp12.unverified;
            }
            if (tmp23 === unverified) {
              tmp26 = cResult[33];
            }
            if (cResult[34] !== tmp7) {
              let string2Result;
              const intl5 = intl15.intl;
              const string2 = intl5.string;
              const t2 = intl15.t;
              if (tmp7) {
                string2Result = string2(t2.xi46lg);
              } else {
                string2Result = string2(t2.ZmwvDc);
              }
              cResult[34] = tmp7;
              cResult[35] = string2Result;
              tmp31 = string2Result;
            } else {
              tmp31 = cResult[35];
            }
            if (cResult[36] !== tmp12) {
              let f3Pet9;
              const intl6 = intl15.intl;
              const string3 = intl6.string;
              if (null != tmp12) {
                f3Pet9 = intl15.t["/g10LC"];
              } else {
                f3Pet9 = intl15.t.f3Pet9;
              }
              const string3Result = string3(f3Pet9);
              cResult[36] = tmp12;
              cResult[37] = string3Result;
              tmp33 = string3Result;
            } else {
              tmp33 = cResult[37];
            }
            if (cResult[38] === tmp26) {
              if (cResult[39] === tmp31) {
                let tmp36;
                if (cResult[40] === tmp33) {
                  tmp36 = cResult[41];
                }
                tmp20 = tmp36;
              }
            }
            const obj8 = { verifyAgreementButtonText: tmp21, verifyGateDescription: tmp26, verifyTitle: tmp31, verifyDisagreementButtonText: tmp33 };
            cResult[38] = tmp26;
            cResult[39] = tmp31;
            cResult[40] = tmp33;
            cResult[41] = obj8;
            tmp36 = obj8;
          }
          let unverified1;
          if (tmp12 != null) {
            unverified1 = tmp12.unverified;
          }
          if (unverified1 == null) {
            let stringResult2;
            const intl4 = intl15.intl;
            const string = intl4.string;
            const t = intl15.t;
            if (tmp7) {
              stringResult2 = string(t.V6Gmu9);
            } else {
              stringResult2 = string(t["5rygLk"]);
            }
            unverified1 = stringResult2;
          }
          cResult[31] = tmp7;
          let unverified2;
          if (tmp12 != null) {
            unverified2 = tmp12.unverified;
          }
          cResult[32] = unverified2;
          cResult[33] = unverified1;
          tmp26 = unverified1;
        }
        return tmp20;
      }
    }
  }
  if (arg0 === AgeGateSource.JOIN_LARGE_GUILD_UNDERAGE) {
    MjQbfi = intl15.t["u/xsK9"];
  } else {
    MjQbfi = intl15.t.MjQbfi;
  }
  if (cResult[2] !== isAgeVerified) {
    const tmp59 = getLargeGuildUnderageContent(isAgeVerified);
    cResult[2] = isAgeVerified;
    cResult[3] = tmp59;
    tmp57 = tmp59;
  } else {
    tmp57 = cResult[3];
  }
  if (cResult[4] !== MjQbfi) {
    const intl14 = intl15.intl;
    const stringResult3 = intl14.string(MjQbfi);
    cResult[4] = MjQbfi;
    cResult[5] = stringResult3;
    tmp60 = stringResult3;
  } else {
    tmp60 = cResult[5];
  }
  if (cResult[6] === tmp57.agreement) {
    if (cResult[7] === tmp57.description) {
      let tmp62;
      if (cResult[8] === tmp60) {
        tmp62 = cResult[9];
      }
      return tmp62;
    }
  }
  const obj9 = { verifyTitle: tmp60, verifyGateDescription: tmp57.description, verifyAgreementButtonText: tmp57.agreement };
  cResult[6] = tmp57.agreement;
  cResult[7] = tmp57.description;
  cResult[8] = tmp60;
  cResult[9] = obj9;
  tmp62 = obj9;
}) : ((arg0) => {
  let MjQbfi;
  let f3Pet9;
  let f3Pet92;
  let format;
  let intl;
  let intl14;
  let intl3;
  let intl7;
  let intl8;
  let intl9;
  let obj5;
  let obj6;
  let prop;
  let string2Result;
  let string3;
  let string5Result;
  let string6;
  let teen;
  let unverified;
  const obj = AgeVerificationUtils;
  const isAgeVerified = obj.useIsAgeVerified();
  let tmp6 = arg0 === AgeGateSource.NSFW_SERVER;
  const tmp4 = closure_14();
  if (!tmp6) {
    tmp6 = arg0 === AgeGateSource.NSFW_SERVER_INVITE;
  }
  if (!tmp6) {
    tmp6 = arg0 === AgeGateSource.NSFW_SERVER_INVITE_EMBED;
  }
  items = [UserStore];
  const tmpResult = get_initialized;
  const stateFromStores = tmpResult.useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    let nsfwAllowed;
    if (currentUser != null) {
      nsfwAllowed = currentUser.nsfwAllowed;
    }
    return false === nsfwAllowed;
  });
  const tmp8 = closure_16(tmp6);
  if (arg0 !== AgeGateSource.JOIN_LARGE_GUILD_UNDERAGE) {
    if (arg0 !== AgeGateSource.ACCESS_LARGE_GUILD_UNDERAGE) {
      let obj4;
      if (isAgeVerified) {
        let Zt4Mf4;
        const intl10 = intl15.intl;
        const string4 = intl10.string;
        if (null != tmp8) {
          Zt4Mf4 = intl15.t.FDSSia;
        } else {
          Zt4Mf4 = intl15.t.Zt4Mf4;
        }
        const obj2 = { verifyAgreementButtonText: string4(Zt4Mf4), verifyGateDescription: teen, verifyTitle: string5Result, verifyDisagreementButtonText: string6(f3Pet92), verifyEmphasiseDisagree: null != tmp8 };
        teen = undefined;
        if (tmp8 != null) {
          teen = tmp8.teen;
        }
        if (teen == null) {
          let format2Result;
          const intl11 = intl15.intl;
          const format2 = intl11.format;
          const t3 = intl15.t;
          if (tmp6) {
            format2Result = format2(t3["8tk6bB"], {});
          } else {
            format2Result = format2(t3.XQZvwn, {});
          }
          teen = format2Result;
        }
        const intl12 = intl15.intl;
        const string5 = intl12.string;
        const t4 = intl15.t;
        if (tmp6) {
          string5Result = string5(t4.xi46lg);
        } else {
          string5Result = string5(t4.ZmwvDc);
        }
        const intl13 = intl15.intl;
        string6 = intl13.string;
        if (null != tmp8) {
          f3Pet92 = intl15.t["/g10LC"];
        } else {
          f3Pet92 = intl15.t.f3Pet9;
        }
        obj4 = obj2;
      } else if (arg0 === AgeGateSource.LARGE_GUILD) {
        const obj3 = { verifyTitle: intl7.string(intl15.t["7ymzsL"]), verifyGateDescription: intl8.string(intl15.t.SxY4IW), verifyAgreementButtonText: intl9.string(intl15.t.FDSSia) };
        intl7 = intl15.intl;
        intl8 = intl15.intl;
        intl9 = intl15.intl;
        obj4 = obj3;
      } else {
        if (stateFromStores) {
          if (tmp6) {
            if (!tmp4) {
              obj4 = { verifyTitle: intl.string(intl15.t["H0SG/g"]), verifyGateDescription: format(prop, obj6), verifyAgreementButtonText: null };
              intl = intl15.intl;
              const intl2 = intl15.intl;
              format = intl2.format;
              obj6 = { helpURL: obj5.getArticleURL(constants.AGE_GATE) };
              prop = intl15.t["6++3cX"];
              obj5 = HelpdeskUtilsDefault;
            }
          }
        }
        const obj7 = { verifyAgreementButtonText: intl3.string(intl15.t.FDSSia), verifyGateDescription: unverified, verifyTitle: string2Result, verifyDisagreementButtonText: string3(f3Pet9) };
        intl3 = intl15.intl;
        unverified = undefined;
        if (tmp8 != null) {
          unverified = tmp8.unverified;
        }
        if (unverified == null) {
          let stringResult;
          const intl4 = intl15.intl;
          const string = intl4.string;
          const t = intl15.t;
          if (tmp6) {
            stringResult = string(t.V6Gmu9);
          } else {
            stringResult = string(t["5rygLk"]);
          }
          unverified = stringResult;
        }
        const intl5 = intl15.intl;
        const string2 = intl5.string;
        const t2 = intl15.t;
        if (tmp6) {
          string2Result = string2(t2.xi46lg);
        } else {
          string2Result = string2(t2.ZmwvDc);
        }
        const intl6 = intl15.intl;
        string3 = intl6.string;
        if (null != tmp8) {
          f3Pet9 = intl15.t["/g10LC"];
        } else {
          f3Pet9 = intl15.t.f3Pet9;
        }
        obj4 = obj7;
      }
      return obj4;
    }
  }
  if (arg0 === AgeGateSource.JOIN_LARGE_GUILD_UNDERAGE) {
    MjQbfi = intl15.t["u/xsK9"];
  } else {
    MjQbfi = intl15.t.MjQbfi;
  }
  const obj8 = { verifyTitle: intl14.string(MjQbfi), verifyGateDescription: null, verifyAgreementButtonText: null };
  const tmp20 = getLargeGuildUnderageContent(isAgeVerified);
  intl14 = intl15.intl;
  ({ description: obj9.verifyGateDescription, agreement: obj9.verifyAgreementButtonText } = tmp20);
  return obj8;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp8 = ReactCompilerGating.isReactCompilerEnabled() ? ((guild_id) => {
  let first;
  let tmp12;
  let tmp13;
  let tmp17;
  let tmp21;
  let tmp9;
  _require = guild_id;
  const obj = require("react");
  const cResult = obj.c(8);
  const obj2 = require("AgeVerificationUtils");
  const shouldShowTiggerPawtect = obj2.useShouldShowTiggerPawtect();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    items = [GuildNSFWAgreeStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  guild_id = undefined;
  const tmp7 = cResult[1];
  if (guild_id != null) {
    guild_id = guild_id.guild_id;
  }
  if (tmp7 !== guild_id) {
    let guild_id1;
    if (guild_id != null) {
      guild_id1 = guild_id.guild_id;
    }
    class S {
      constructor() {
        guild_id = undefined;
        const didAgree = GuildNSFWAgreeStore.didAgree;
        if (guild_id != null) {
          guild_id = guild_id.guild_id;
        }
        return didAgree(guild_id);
      }
    }
    cResult[1] = guild_id1;
    cResult[2] = S;
    tmp9 = S;
  } else {
    tmp9 = cResult[2];
  }
  const tmpResult = require("get initialized");
  let stateFromStores = tmpResult.useStateFromStores(first, tmp9);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [];
    class S {
      constructor() {
        guild_id = undefined;
        const didAgree = GuildNSFWAgreeStore.didAgree;
        if (guild_id != null) {
          guild_id = guild_id.guild_id;
        }
        return didAgree(guild_id);
      }
    }
    const fn = function c() {
      currentUser = currentUser.getCurrentUser();
      let nsfwAllowed;
      if (currentUser != null) {
        nsfwAllowed = currentUser.nsfwAllowed;
      }
      return false === nsfwAllowed;
    };
    cResult[3] = items1;
    cResult[4] = fn;
    tmp13 = fn;
    tmp12 = items1;
  } else {
    tmp12 = cResult[3];
    tmp13 = cResult[4];
  }
  const tmpResult4 = require("get initialized");
  const stateFromStores1 = tmpResult4.useStateFromStores(tmp12, tmp13);
  const tmpResult5 = require("RegionalFeatureConfigUtils");
  let isFeatureAgeGated = tmpResult5.useIsFeatureAgeGated(tmp(5588).AgeGatedFeature.AGE_GATED_SPACES);
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [];
    class S {
      constructor() {
        guild_id = undefined;
        const didAgree = GuildNSFWAgreeStore.didAgree;
        if (guild_id != null) {
          guild_id = guild_id.guild_id;
        }
        return didAgree(guild_id);
      }
    }
    cResult[5] = items2;
    tmp17 = items2;
  } else {
    tmp17 = cResult[5];
  }
  let guild_id2;
  const tmp19 = cResult[6];
  if (guild_id != null) {
    guild_id2 = guild_id.guild_id;
  }
  if (tmp19 !== guild_id2) {
    let guild_id3;
    if (guild_id != null) {
      guild_id3 = guild_id.guild_id;
    }
    class S {
      constructor() {
        guild_id = undefined;
        const didAgree = GuildNSFWAgreeStore.didAgree;
        if (guild_id != null) {
          guild_id = guild_id.guild_id;
        }
        return didAgree(guild_id);
      }
    }
    cResult[6] = guild_id3;
    cResult[7] = tmp23;
    tmp21 = tmp23;
  } else {
    tmp21 = cResult[7];
  }
  const tmpResult6 = require("get initialized");
  const stateFromStores2 = tmpResult6.useStateFromStores(tmp17, tmp21);
  if (stateFromStores) {
    stateFromStores = !stateFromStores1;
  }
  let tmp25 = !stateFromStores;
  if (stateFromStores) {
    if (isFeatureAgeGated) {
      isFeatureAgeGated = shouldShowTiggerPawtect;
    }
    tmp25 = isFeatureAgeGated;
  }
  let tmp26 = null != guild_id;
  if (tmp26) {
    const tmp28 = !guild_id.isNSFW();
    class S {
      constructor() {
        guild_id = undefined;
        const didAgree = GuildNSFWAgreeStore.didAgree;
        if (guild_id != null) {
          guild_id = guild_id.guild_id;
        }
        return didAgree(guild_id);
      }
    }
    const tmp29 = !tmp28;
    if (tmp28) {
      let tmp30 = null != stateFromStores2;
      if (tmp30) {
        let tmp33;
        const tmp32 = isGuildNSFW(stateFromStores2);
        class S {
          constructor() {
            guild_id = undefined;
            const didAgree = GuildNSFWAgreeStore.didAgree;
            if (guild_id != null) {
              guild_id = guild_id.guild_id;
            }
            return didAgree(guild_id);
          }
        }
        if (tmp32) {
          tmp33 = !tmp25;
        }
        tmp30 = !tmp33;
      }
      class S {
        constructor() {
          guild_id = undefined;
          const didAgree = GuildNSFWAgreeStore.didAgree;
          if (guild_id != null) {
            guild_id = guild_id.guild_id;
          }
          return didAgree(guild_id);
        }
      }
    }
    tmp26 = tmp29;
  }
  return tmp26;
}) : ((isNSFW) => {
  _require = isNSFW;
  const obj = require("AgeVerificationUtils");
  const shouldShowTiggerPawtect = obj.useShouldShowTiggerPawtect();
  items = [GuildNSFWAgreeStore];
  const obj2 = require("get initialized");
  let stateFromStores = obj2.useStateFromStores(items, () => {
    let guild_id;
    const didAgree = GuildNSFWAgreeStore.didAgree;
    if (isNSFW != null) {
      guild_id = isNSFW.guild_id;
    }
    return didAgree(guild_id);
  });
  const items1 = [UserStore];
  const obj3 = require("get initialized");
  const stateFromStores1 = obj3.useStateFromStores(items1, () => {
    currentUser = currentUser.getCurrentUser();
    let nsfwAllowed;
    if (currentUser != null) {
      nsfwAllowed = currentUser.nsfwAllowed;
    }
    return false === nsfwAllowed;
  });
  const obj4 = require("RegionalFeatureConfigUtils");
  let isFeatureAgeGated = obj4.useIsFeatureAgeGated(require("AgeGatedFeature").AgeGatedFeature.AGE_GATED_SPACES);
  const items2 = [GuildStore];
  const obj5 = require("get initialized");
  const stateFromStores2 = obj5.useStateFromStores(items2, () => {
    let guild_id;
    const getGuild = GuildStore.getGuild;
    if (isNSFW != null) {
      guild_id = isNSFW.guild_id;
    }
    return getGuild(guild_id);
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
  let tmp7 = null != isNSFW;
  if (tmp7) {
    const isNSFWResult = isNSFW.isNSFW();
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
});
let closure_20 = tmp8;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp9 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let isChannelSpoilerGated = closure_20(arg0);
  const obj = SpoilerChannelUtils;
  if (!isChannelSpoilerGated) {
    isChannelSpoilerGated = obj.useIsChannelSpoilerGated(arg0);
  }
  return isChannelSpoilerGated;
}) : ((arg0) => {
  let isChannelSpoilerGated = closure_20(arg0);
  const obj = SpoilerChannelUtils;
  if (!isChannelSpoilerGated) {
    isChannelSpoilerGated = obj.useIsChannelSpoilerGated(arg0);
  }
  return isChannelSpoilerGated;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp10 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const obj = RegionalFeatureConfigUtils;
  let isFeatureAgeGated = obj.useIsFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.COMMANDS_TOGGLE);
  const obj2 = AgeVerificationUtils;
  if (isFeatureAgeGated) {
    isFeatureAgeGated = obj2.useShouldShowTiggerPawtect();
  }
  return isFeatureAgeGated;
}) : (() => {
  const obj = RegionalFeatureConfigUtils;
  let isFeatureAgeGated = obj.useIsFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.COMMANDS_TOGGLE);
  const obj2 = AgeVerificationUtils;
  if (isFeatureAgeGated) {
    isFeatureAgeGated = obj2.useShouldShowTiggerPawtect();
  }
  return isFeatureAgeGated;
});
function shouldAgeVerifyForAgeGate() {
  const obj = AgeVerificationUtils;
  const result = obj.shouldShowTiggerPawtect();
  const obj2 = RegionalFeatureConfigUtils;
  const tmp2 = obj2.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.AGE_GATED_SPACES) && result;
  return tmp2;
}
function shouldShowAgeGateForCurrentUser() {
  const currentUser = UserStore.getCurrentUser();
  if (null == currentUser) {
    return false;
  } else {
    const obj = AgeVerificationUtils;
    const result = obj.shouldShowTiggerPawtect();
    const obj2 = RegionalFeatureConfigUtils;
    const tmp6 = true !== currentUser.nsfwAllowed || obj2.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.AGE_GATED_SPACES) && result;
    return tmp6;
  }
}
function shouldShowAgeGateForGuildContentLevel(arg0) {
  const currentUser = UserStore.getCurrentUser();
  let flag = false;
  if (null != currentUser) {
    const obj = AgeVerificationUtils;
    const result = obj.shouldShowTiggerPawtect();
    const obj2 = RegionalFeatureConfigUtils;
    flag = true !== currentUser.nsfwAllowed || obj2.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.AGE_GATED_SPACES) && result;
    true !== currentUser.nsfwAllowed || obj2.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.AGE_GATED_SPACES) && result;
  }
  if (flag) {
    if (null != arg0) {
      const guild = GuildStore.getGuild(arg0);
      const tmp10 = null != guild && isGuildNSFW(guild);
      return tmp10;
    }
  }
  return false;
}
function shouldShowAgeGateForChannelId(id) {
  const currentUser = UserStore.getCurrentUser();
  let flag = false;
  if (null != currentUser) {
    const obj = AgeVerificationUtils;
    const result = obj.shouldShowTiggerPawtect();
    const obj2 = RegionalFeatureConfigUtils;
    flag = true !== currentUser.nsfwAllowed || obj2.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.AGE_GATED_SPACES) && result;
    true !== currentUser.nsfwAllowed || obj2.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.AGE_GATED_SPACES) && result;
  }
  let tmp7 = !flag;
  if (flag) {
    tmp7 = null == id;
  }
  const tmp8 = !tmp7 && isChannelContentGated(ChannelStore.getChannel(id));
  return tmp8;
}
function isChannelOrGuildNSFW(channel) {
  let tmp = null != channel;
  if (tmp) {
    tmp = channel.isNSFW() || isGuildNSFW(GuildStore.getGuild(channel.guild_id));
    const isNSFWResult = channel.isNSFW() || isGuildNSFW(GuildStore.getGuild(channel.guild_id));
  }
  return tmp;
}
function isCurrentUserMissingDateOfBirth() {
  const currentUser = UserStore.getCurrentUser();
  return null != currentUser && null == currentUser.nsfwAllowed;
}
let result = size.fileFinishedImporting("modules/age_gate/AgeGateUtils.tsx");

export const SERVER_AGE_GATE_SOURCES = set;
export const userNeedsAgeGate = function userNeedsAgeGate() {
  const currentUser = UserStore.getCurrentUser();
  let tmp2 = null != currentUser;
  if (tmp2) {
    const obj = SnowflakeUtilsDefault;
    const extractTimestampResult = obj.extractTimestamp(currentUser.id);
    tmp2 = extractTimestampResult > date.getTime();
  }
  if (tmp2) {
    tmp2 = null == currentUser.nsfwAllowed;
  }
  return tmp2;
};
export const guildNeedsAgeGate = function guildNeedsAgeGate(nsfwLevel) {
  return items.includes(nsfwLevel.nsfwLevel);
};
export { shouldAgeVerifyForAgeGate };
export const useShouldAgeVerifyForAgeGate = tmp5;
export const useAgeGateVerifyContentForGuild = tmp6;
export const useAgeGateVerifyContent = tmp7;
export { shouldShowAgeGateForCurrentUser };
export { shouldShowAgeGateForGuildContentLevel };
export { shouldShowAgeGateForChannelId };
export { shouldShowAgeGateForVoiceChannel };
export const maybeOpenAgeGateForVoiceChannel = function maybeOpenAgeGateForVoiceChannel(id) {
  let flag = shouldShowAgeGateForVoiceChannel(id);
  if (flag) {
    const obj = AgeGateModalActionCreators;
    obj.openAgeGateModal(AgeGateSource.NSFW_VOICE_CHANNEL, id);
    flag = true;
  }
  return flag;
};
export const maybeShowAgeGate = function maybeShowAgeGate(guildId, channelId, JOIN_LARGE_GUILD_UNDERAGE) {
  const currentUser = UserStore.getCurrentUser();
  let flag = false;
  if (null != currentUser) {
    const obj2 = AgeVerificationUtils;
    const result = obj2.shouldShowTiggerPawtect();
    const obj3 = RegionalFeatureConfigUtils;
    flag = true !== currentUser.nsfwAllowed || obj3.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.AGE_GATED_SPACES) && result;
    true !== currentUser.nsfwAllowed || obj3.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.AGE_GATED_SPACES) && result;
  }
  let flag3 = false;
  if (flag) {
    flag3 = false;
    if (null != guildId) {
      const guild = GuildStore.getGuild(guildId);
      flag3 = null != guild && isGuildNSFW(guild);
      const tmp10 = null != guild && isGuildNSFW(guild);
    }
  }
  let NSFW_SERVER = JOIN_LARGE_GUILD_UNDERAGE;
  if (flag3) {
    if (null == NSFW_SERVER) {
      NSFW_SERVER = AgeGateSource.NSFW_SERVER;
    }
    const obj6 = AgeGateModalActionCreators;
    obj6.openAgeGateModal(NSFW_SERVER);
  } else {
    const currentUser1 = UserStore.getCurrentUser();
    let tmp13 = null != currentUser1 && null == currentUser1.nsfwAllowed;
    if (tmp13) {
      const currentUser2 = UserStore.getCurrentUser();
      let flag4 = false;
      if (null != currentUser2) {
        const obj4 = AgeVerificationUtils;
        const result1 = obj4.shouldShowTiggerPawtect();
        const obj5 = RegionalFeatureConfigUtils;
        flag4 = true !== currentUser2.nsfwAllowed || obj5.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.AGE_GATED_SPACES) && result1;
        true !== currentUser2.nsfwAllowed || obj5.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.AGE_GATED_SPACES) && result1;
      }
      let tmp21 = !flag4;
      if (flag4) {
        tmp21 = null == channelId;
      }
      tmp13 = !tmp21 && isChannelContentGated(ChannelStore.getChannel(channelId));
      const tmp22 = !tmp21 && isChannelContentGated(ChannelStore.getChannel(channelId));
    }
    if (tmp13) {
      let NSFW_CHANNEL = NSFW_SERVER;
      const openAgeGateModal = AgeGateModalActionCreators.openAgeGateModal;
      AgeGateModalActionCreators;
      if (NSFW_SERVER == null) {
        NSFW_CHANNEL = AgeGateSource.NSFW_CHANNEL;
      }
      openAgeGateModal(NSFW_CHANNEL);
    }
  }
};
export { isChannelOrGuildNSFW };
export const isChannelAgeVerificationGated = function isChannelAgeVerificationGated(isNSFW) {
  if (null == isNSFW) {
    return false;
  } else {
    let tmp4 = null != isNSFW;
    const obj = AgeVerificationUtils;
    const result = obj.shouldShowTiggerPawtect();
    if (tmp4) {
      tmp4 = isNSFW.isNSFW() || isGuildNSFW(GuildStore.getGuild(isNSFW.guild_id));
      const isNSFWResult = isNSFW.isNSFW() || isGuildNSFW(GuildStore.getGuild(isNSFW.guild_id));
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
    let nsfwAllowed;
    const currentUser = UserStore.getCurrentUser();
    if (currentUser != null) {
      nsfwAllowed = currentUser.nsfwAllowed;
    }
    let tmp3 = null != channel;
    if (tmp3) {
      tmp3 = channel.isNSFW() || isGuildNSFW(GuildStore.getGuild(channel.guild_id));
      const isNSFWResult = channel.isNSFW() || isGuildNSFW(GuildStore.getGuild(channel.guild_id));
    }
    if (tmp3) {
      tmp3 = true !== nsfwAllowed;
    }
    return tmp3;
  }
};
export { isChannelContentGated };
export const useIsChannelContentGated = tmp8;
export const useShouldHideChannelContent = tmp9;
export { isCurrentUserMissingDateOfBirth };
export const shouldAgeVerifyForSettingsToggles = function shouldAgeVerifyForSettingsToggles() {
  const obj = RegionalFeatureConfigUtils;
  let isFeatureAgeGatedResult = obj.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.COMMANDS_TOGGLE);
  const obj2 = AgeVerificationUtils;
  if (isFeatureAgeGatedResult) {
    isFeatureAgeGatedResult = obj2.shouldShowTiggerPawtect();
  }
  return isFeatureAgeGatedResult;
};
export const useShouldAgeVerifyForSettingsToggles = tmp10;