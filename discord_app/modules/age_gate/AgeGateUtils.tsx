// === Module 5100: AgeGateUtils ===

// Module 5100 (AgeGateUtils)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import AgeGateConstants from "AgeGateConstants" /* 1110 */;
import util from "util" /* 1126 */;
import GuildRecord from "GuildRecord" /* 2070 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2115 */;
import AgeVerificationUtils from "AgeVerificationUtils" /* 5102 */;
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5580 */;
import AgeGatedFeature from "AgeGatedFeature" /* 5581 */;
import AgeGateModalActionCreators from "AgeGateModalActionCreators" /* 6710 */;
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 8086 */;
import getTinyBroncoWarningDescriptions2 from "getTinyBroncoWarningDescriptions" /* 9427 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import GuildNSFWAgreeStore from "GuildNSFWAgreeStore" /* 5101 */;
import GuildStore from "GuildStore" /* 2074 */;
import UserStore from "UserStore" /* 1377 */;
import Constants from "Constants" /* 1085 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import "ReactCompilerGating";
import size from "module_2" /* 2 */;

const require = globalThis.__r;

function getLargeGuildUnderageContent(isAgeVerified) {
  const intl = util.intl;
  const string = intl.string;
  const t = util.t;
  if (isAgeVerified) {
    let stringResult = string(t.SAoMVJ);
    let tmp5 = require;
  } else {
    stringResult = string(t.SxY4IW);
    tmp5 = require;
  }
  const obj = { description: stringResult, agreement: null };
  const intl2 = tmp5(1126).intl;
  const string2 = intl2.string;
  const t2 = tmp5(1126).t;
  if (isAgeVerified) {
    let string2Result = string2(t2.Zt4Mf4);
  } else {
    string2Result = string2(t2.FDSSia);
  }
  obj.agreement = string2Result;
  return obj;
}
function getLegacyDescriptions(arg0) {
  const intl = util.intl;
  const t = util.t;
  const obj = { adult: intl.string(arg0 ? t.ZtuRts : t.E4Cd5I), teen: null, unverified: null };
  const intl2 = util.intl;
  const format = intl2.format;
  const t2 = util.t;
  if (arg0) {
    let formatResult = format(t2["8tk6bB"], {});
  } else {
    formatResult = format(t2.XQZvwn, {});
  }
  obj.teen = formatResult;
  const intl3 = util.intl;
  const string = intl3.string;
  const t3 = util.t;
  if (arg0) {
    let stringResult = string(t3.V6Gmu9);
  } else {
    stringResult = string(t3["5rygLk"]);
  }
  obj.unverified = stringResult;
  return obj;
}
function shouldShowAgeGateForVoiceChannel(channelId) {
  const result = AgeVerificationUtils.shouldShowTiggerPawtect();
  let tmp4 = RegionalFeatureConfigUtils.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.AGE_GATED_SPACES) && result;
  if (tmp4) {
    const currentUser = UserStore.getCurrentUser();
    let flag = false;
    if (null != currentUser) {
      const result1 = AgeVerificationUtils.shouldShowTiggerPawtect();
      const tmpResult = AgeVerificationUtils;
      const tmpResult2 = RegionalFeatureConfigUtils;
      const tmp9 = RegionalFeatureConfigUtils.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.AGE_GATED_SPACES) && result1;
      flag = true !== currentUser.nsfwAllowed || RegionalFeatureConfigUtils.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.AGE_GATED_SPACES) && result1;
      const tmp10 = true !== currentUser.nsfwAllowed || RegionalFeatureConfigUtils.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.AGE_GATED_SPACES) && result1;
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
    guild = GuildStore.getGuild(channel.guild_id);
    let tmp9 = null != guild;
    if (tmp9) {
      tmp9 = isGuildNSFW(guild) && tmp6;
      const tmp11 = isGuildNSFW(guild) && tmp6;
    }
    return tmp9;
  }
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
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let isFeatureAgeGated = RegionalFeatureConfigUtils.useIsFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.AGE_GATED_SPACES);
  if (isFeatureAgeGated) {
    isFeatureAgeGated = obj2.useShouldShowTiggerPawtect();
  }
  return isFeatureAgeGated;
}) : (() => {
  let isFeatureAgeGated = RegionalFeatureConfigUtils.useIsFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.AGE_GATED_SPACES);
  if (isFeatureAgeGated) {
    isFeatureAgeGated = obj2.useShouldShowTiggerPawtect();
  }
  return isFeatureAgeGated;
});
let closure_14 = tmp5;
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? ((name) => {
  const cResult = c.c(3);
  if (obj2.useIsFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.AGE_GATED_SPACES)) {
    if (cResult[0] !== name) {
      const _Symbol = Symbol;
      const tmp11 = isGuildNSFW(name);
      let str2;
      if (name != null) {
        str2 = name.name;
      }
      if (str2 == null) {
        str2 = "";
      }
      if (tmp11) {
        const tinyBroncoWarningDescriptions = getTinyBroncoWarningDescriptions2.getTinyBroncoWarningDescriptions(tmp11, str2);
        let tmp13 = forResult;
        const tmpResult = getTinyBroncoWarningDescriptions2;
      } else {
        tmp13 = null;
      }
      cResult[0] = name;
      cResult[1] = tinyBroncoWarningDescriptions;
      cResult[2] = tmp13;
      let tmp7 = tmp13;
      let tmp6 = tinyBroncoWarningDescriptions;
      forResult = Symbol.for("react.early_return_sentinel");
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
  obj2 = RegionalFeatureConfigUtils;
}) : ((name) => {
  if (obj.useIsFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.AGE_GATED_SPACES)) {
    const tmp5 = isGuildNSFW(name);
    let str;
    if (name != null) {
      str = name.name;
    }
    if (str == null) {
      str = "";
    }
    if (tmp5) {
      let tinyBroncoWarningDescriptions = getTinyBroncoWarningDescriptions2.getTinyBroncoWarningDescriptions(tmp5, str);
      const tmpResult = getTinyBroncoWarningDescriptions2;
    } else {
      tinyBroncoWarningDescriptions = null;
    }
    return tinyBroncoWarningDescriptions;
  } else {
    return null;
  }
  obj = RegionalFeatureConfigUtils;
});
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_16 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let getTinyBroncoWarningDescriptions = require;
  let tinyBroncoWarningDescriptions1 = dependencyMap;
  const cResult = c.c(1);
  let tmp3 = null;
  if (obj2.useIsFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.AGE_GATED_SPACES)) {
    tmp3 = null;
    if (arg0) {
      const _Symbol = Symbol;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const tinyBroncoWarningDescriptions = getTinyBroncoWarningDescriptions2;
        getTinyBroncoWarningDescriptions = tinyBroncoWarningDescriptions.getTinyBroncoWarningDescriptions;
        tinyBroncoWarningDescriptions1 = getTinyBroncoWarningDescriptions(true, "");
        cResult[0] = tinyBroncoWarningDescriptions1;
        let first = tinyBroncoWarningDescriptions1;
      } else {
        first = cResult[0];
      }
    }
  }
  return tmp3;
}) : ((arg0) => {
  let tinyBroncoWarningDescriptions = null;
  if (obj.useIsFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.AGE_GATED_SPACES)) {
    tinyBroncoWarningDescriptions = null;
    if (arg0) {
      tinyBroncoWarningDescriptions = getTinyBroncoWarningDescriptions2.getTinyBroncoWarningDescriptions(true, "");
      const tmpResult = getTinyBroncoWarningDescriptions2;
    }
  }
  return tinyBroncoWarningDescriptions;
});
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? ((guild) => {
  const cResult = c.c(26);
  const isAgeVerified = AgeVerificationUtils.useIsAgeVerified();
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
  const stateFromStores = initialize.useStateFromStores(tmp6, tmp7);
  const tmpResult = initialize;
  const tmp11 = closure_15(guild);
  const tmp12 = getLegacyDescriptions(tmp5);
  if (cResult[2] !== tmp5) {
    const intl = util.intl;
    const t = util.t;
    const stringResult = intl.string(tmp5 ? t.xi46lg : t.ZmwvDc);
    cResult[2] = tmp5;
    cResult[3] = stringResult;
  } else if (tmp10) {
    if (isAgeVerified) {
      let teen;
      if (!tmp31) {
        teen = tmp11.teen;
      }
      if (teen == null) {
        teen = tmp12.teen;
      }
      if (cResult[4] !== tmp11) {
        const intl6 = util.intl;
        if (null != tmp11) {
          let Zt4Mf4 = util.t.FDSSia;
        } else {
          Zt4Mf4 = util.t.Zt4Mf4;
        }
        const stringResult1 = intl6.string(Zt4Mf4);
        cResult[4] = tmp11;
        cResult[5] = stringResult1;
      } else {
        if (cResult[6] === tmp13) {
          if (cResult[7] === teen) {
            if (cResult[8] === tmp37) {
              if (cResult[9] === tmp40) {
                let tmp41 = cResult[10];
              }
              return tmp41;
            }
          }
        }
        const obj3 = { title: tmp13, description: teen, agreement: cResult[5], modalType: AgeVerificationAnalyticsUtils.NsfwSpaceWarningModalType.NSFW_CHANNEL_AGE_VERIFY, emphasiseDisagree: null != tmp11 };
        cResult[6] = tmp13;
        cResult[7] = teen;
        cResult[8] = cResult[5];
        cResult[9] = null != tmp11;
        cResult[10] = obj3;
        tmp41 = obj3;
      }
    } else {
      let unverified;
      if (!tmp31) {
        unverified = tmp11.unverified;
      }
      if (unverified == null) {
        unverified = tmp12.unverified;
      }
      const _Symbol2 = Symbol;
      if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
        const intl5 = util.intl;
        const stringResult2 = intl5.string(util.t.FDSSia);
        cResult[11] = stringResult2;
        let tmp33 = stringResult2;
      } else {
        tmp33 = cResult[11];
      }
      if (cResult[12] === tmp13) {
        if (cResult[13] === unverified) {
          let tmp35 = cResult[14];
        }
        return tmp35;
      }
      const obj4 = { title: tmp13, description: unverified, agreement: tmp33, modalType: AgeVerificationAnalyticsUtils.NsfwSpaceWarningModalType.NSFW_CHANNEL_AGE_VERIFY };
      cResult[12] = tmp13;
      cResult[13] = unverified;
      cResult[14] = obj4;
      tmp35 = obj4;
    }
  } else if (stateFromStores) {
    if (cResult[15] !== tmp5) {
      const intl3 = util.intl;
      const t2 = util.t;
      const stringResult3 = intl3.string(tmp5 ? t2["H0SG/g"] : t2.NEabBa);
      cResult[15] = tmp5;
      cResult[16] = stringResult3;
    } else if (cResult[17] !== tmp5) {
      const intl4 = util.intl;
      let t3 = util.t;
      const obj5 = { helpURL: HelpdeskUtilsDefault.getArticleURL(constants.NSFW_AGE_GATING) };
      t3 = intl4.format(tmp5 ? t3["6++3cX"] : t3["2kHZes"], obj5);
      cResult[17] = tmp5;
      cResult[18] = t3;
      const tmp25 = tmp5 ? t3["6++3cX"] : t3["2kHZes"];
    } else {
      if (cResult[19] === tmp21) {
        if (cResult[20] === tmp24) {
          let tmp29 = cResult[21];
        }
        return tmp29;
      }
      const obj7 = { title: tmp21, description: cResult[18], agreement: null, modalType: AgeVerificationAnalyticsUtils.NsfwSpaceWarningModalType.NSFW_CHANNEL_UNDERAGE };
      cResult[19] = tmp21;
      cResult[20] = cResult[18];
      cResult[21] = obj7;
      tmp29 = obj7;
    }
  } else {
    let adult;
    if (tmp11 != null) {
      adult = tmp11.adult;
    }
    if (adult == null) {
      adult = tmp12.adult;
    }
    const _Symbol = Symbol;
    if (cResult[22] === Symbol.for("react.memo_cache_sentinel")) {
      const intl2 = util.intl;
      const stringResult4 = intl2.string(util.t.wVq7uo);
      cResult[22] = stringResult4;
      let tmp18 = stringResult4;
    } else {
      tmp18 = cResult[22];
    }
    if (cResult[23] === tmp13) {
      if (cResult[24] === adult) {
        let tmp20 = cResult[25];
      }
      return tmp20;
    }
    const obj8 = { title: tmp13, description: adult, agreement: tmp18, modalType: AgeVerificationAnalyticsUtils.NsfwSpaceWarningModalType.NSFW_CHANNEL_VERIFIED };
    cResult[23] = tmp13;
    cResult[24] = adult;
    cResult[25] = obj8;
    tmp20 = obj8;
  }
  tmp10 = closure_14();
}) : ((guild) => {
  let NSFW_CHANNEL_AGE_VERIFY = dependencyMap;
  const isAgeVerified = AgeVerificationUtils.useIsAgeVerified();
  const tmp3 = isGuildNSFW(guild);
  items = [UserStore];
  const stateFromStores = initialize.useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    let nsfwAllowed;
    if (currentUser != null) {
      nsfwAllowed = currentUser.nsfwAllowed;
    }
    return false === nsfwAllowed;
  });
  const tmp6 = closure_15(guild);
  const tmp7 = getLegacyDescriptions(tmp3);
  const intl = util.intl;
  const t = util.t;
  const stringResult = intl.string(tmp3 ? t.xi46lg : t.ZmwvDc);
  if (tmp5) {
    if (!isAgeVerified) {
      const obj3 = { title: stringResult, description: null, agreement: null, modalType: null };
      let unverified;
      if (tmp6 != null) {
        unverified = tmp6.unverified;
      }
      if (unverified == null) {
        unverified = tmp7.unverified;
      }
      obj3.description = unverified;
      const intl5 = util.intl;
      obj3.agreement = intl5.string(util.t.FDSSia);
      obj3.modalType = AgeVerificationAnalyticsUtils.NsfwSpaceWarningModalType.NSFW_CHANNEL_AGE_VERIFY;
    }
    const obj4 = { title: stringResult, description: null, agreement: null, modalType: null, emphasiseDisagree: null };
    let tmp18 = null;
    let teen;
    if (tmp6 != null) {
      teen = tmp6.teen;
    }
    if (teen == tmp18) {
      teen = tmp7.teen;
    }
    obj4.description = teen;
    const intl6 = util.intl;
    if (tmp18 != tmp6) {
      let Zt4Mf4 = util.t.FDSSia;
    } else {
      Zt4Mf4 = util.t.Zt4Mf4;
    }
    obj4.agreement = intl6.string(Zt4Mf4);
    NSFW_CHANNEL_AGE_VERIFY = AgeVerificationAnalyticsUtils.NsfwSpaceWarningModalType.NSFW_CHANNEL_AGE_VERIFY;
    obj4.modalType = NSFW_CHANNEL_AGE_VERIFY;
    tmp18 = tmp18 != tmp6;
    obj4.emphasiseDisagree = tmp18;
  } else {
    const obj6 = { title: null, description: null, agreement: null, modalType: null };
    if (stateFromStores) {
      const intl3 = util.intl;
      const t2 = util.t;
      obj6.title = intl3.string(tmp3 ? t2["H0SG/g"] : t2.NEabBa);
      const intl4 = util.intl;
      let NSFW_CHANNEL_UNDERAGE = util.t;
      const obj7 = { helpURL: HelpdeskUtilsDefault.getArticleURL(constants.NSFW_AGE_GATING) };
      obj6.description = intl4.format(tmp3 ? NSFW_CHANNEL_UNDERAGE["6++3cX"] : NSFW_CHANNEL_UNDERAGE["2kHZes"], obj7);
      NSFW_CHANNEL_UNDERAGE = AgeVerificationAnalyticsUtils.NsfwSpaceWarningModalType.NSFW_CHANNEL_UNDERAGE;
      obj6.modalType = NSFW_CHANNEL_UNDERAGE;
      const tmp12 = tmp3 ? NSFW_CHANNEL_UNDERAGE["6++3cX"] : NSFW_CHANNEL_UNDERAGE["2kHZes"];
    } else {
      obj6.title = stringResult;
      let adult;
      if (tmp6 != null) {
        adult = tmp6.adult;
      }
      if (adult == null) {
        adult = tmp7.adult;
      }
      obj6.description = adult;
      const intl2 = util.intl;
      obj6.agreement = intl2.string(util.t.wVq7uo);
      obj6.modalType = AgeVerificationAnalyticsUtils.NsfwSpaceWarningModalType.NSFW_CHANNEL_VERIFIED;
      return obj6;
    }
  }
  tmp5 = closure_14();
});
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp8 = ReactCompilerGating.isReactCompilerEnabled() ? ((guild_id) => {
  _require = guild_id;
  const cResult = require("c").c(8);
  const obj = require("c");
  const shouldShowTiggerPawtect = require("AgeVerificationUtils").useShouldShowTiggerPawtect();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    items = [GuildNSFWAgreeStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  guild_id = undefined;
  if (guild_id != null) {
    guild_id = guild_id.guild_id;
  }
  if (cResult[1] !== guild_id) {
    let guild_id1;
    if (guild_id != null) {
      guild_id1 = guild_id.guild_id;
    }
    class S {
      constructor() {
        guild_id = undefined;
        tmp = closure_5;
        if (closure_0 != null) {
          guild_id = closure_0.guild_id;
        }
        return closure_5.didAgree(guild_id);
      }
    }
    cResult[1] = guild_id1;
    cResult[2] = S;
    let tmp8 = S;
  } else {
    tmp8 = cResult[2];
  }
  const obj2 = require("AgeVerificationUtils");
  let stateFromStores = require("initialize").useStateFromStores(first, tmp8);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [];
    class S {
      constructor() {
        guild_id = undefined;
        tmp = closure_5;
        if (closure_0 != null) {
          guild_id = closure_0.guild_id;
        }
        return closure_5.didAgree(guild_id);
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
    let tmp12 = fn;
    let tmp11 = items1;
  } else {
    tmp11 = cResult[3];
    tmp12 = cResult[4];
  }
  const tmpResult = require("initialize");
  const stateFromStores1 = require("initialize").useStateFromStores(tmp11, tmp12);
  const tmpResult4 = require("initialize");
  let isFeatureAgeGated = require("RegionalFeatureConfigUtils").useIsFeatureAgeGated(tmp(5581).AgeGatedFeature.AGE_GATED_SPACES);
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [];
    class S {
      constructor() {
        guild_id = undefined;
        tmp = closure_5;
        if (closure_0 != null) {
          guild_id = closure_0.guild_id;
        }
        return closure_5.didAgree(guild_id);
      }
    }
    cResult[5] = items2;
    let tmp16 = items2;
  } else {
    tmp16 = cResult[5];
  }
  let guild_id2;
  if (guild_id != null) {
    guild_id2 = guild_id.guild_id;
  }
  if (cResult[6] !== guild_id2) {
    let guild_id3;
    if (guild_id != null) {
      guild_id3 = guild_id.guild_id;
    }
    class S {
      constructor() {
        guild_id = undefined;
        tmp = closure_5;
        if (closure_0 != null) {
          guild_id = closure_0.guild_id;
        }
        return closure_5.didAgree(guild_id);
      }
    }
    cResult[6] = guild_id3;
    cResult[7] = tmp21;
    let tmp19 = tmp21;
  } else {
    tmp19 = cResult[7];
  }
  const tmpResult5 = require("RegionalFeatureConfigUtils");
  const stateFromStores2 = require("initialize").useStateFromStores(tmp16, tmp19);
  if (stateFromStores) {
    stateFromStores = !stateFromStores1;
  }
  let tmp23 = !stateFromStores;
  if (stateFromStores) {
    if (isFeatureAgeGated) {
      isFeatureAgeGated = shouldShowTiggerPawtect;
    }
    tmp23 = isFeatureAgeGated;
  }
  let tmp24 = null != guild_id;
  if (tmp24) {
    const tmp26 = !guild_id.isNSFW();
    class S {
      constructor() {
        guild_id = undefined;
        tmp = closure_5;
        if (closure_0 != null) {
          guild_id = closure_0.guild_id;
        }
        return closure_5.didAgree(guild_id);
      }
    }
    if (tmp26) {
      let tmp28 = null != stateFromStores2;
      if (tmp28) {
        class S {
          constructor() {
            guild_id = undefined;
            tmp = closure_5;
            if (closure_0 != null) {
              guild_id = closure_0.guild_id;
            }
            return closure_5.didAgree(guild_id);
          }
        }
        if (tmp30) {
          const tmp31 = !tmp23;
        }
        tmp28 = !tmp31;
        tmp30 = isGuildNSFW(stateFromStores2);
      }
      class S {
        constructor() {
          guild_id = undefined;
          tmp = closure_5;
          if (closure_0 != null) {
            guild_id = closure_0.guild_id;
          }
          return closure_5.didAgree(guild_id);
        }
      }
    }
    tmp24 = !tmp26;
    const isNSFWResult = guild_id.isNSFW();
    const tmp27 = !tmp26;
  }
  return tmp24;
}) : ((isNSFW) => {
  _require = isNSFW;
  const shouldShowTiggerPawtect = require("AgeVerificationUtils").useShouldShowTiggerPawtect();
  const obj = require("AgeVerificationUtils");
  items = [GuildNSFWAgreeStore];
  let stateFromStores = require("initialize").useStateFromStores(items, () => {
    let guild_id;
    if (isNSFW != null) {
      guild_id = isNSFW.guild_id;
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
    if (isNSFW != null) {
      guild_id = isNSFW.guild_id;
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
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(42);
  const isAgeVerified = AgeVerificationUtils.useIsAgeVerified();
  let tmp7 = arg0 === AgeGateSource.NSFW_SERVER;
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
  const tmp5 = closure_14();
  const stateFromStores = initialize.useStateFromStores(tmp8, tmp9);
  const tmp12 = closure_16(tmp7);
  if (arg0 !== AgeGateSource.JOIN_LARGE_GUILD_UNDERAGE) {
    if (arg0 !== AgeGateSource.ACCESS_LARGE_GUILD_UNDERAGE) {
      if (isAgeVerified) {
        if (cResult[10] !== tmp12) {
          const intl10 = util.intl;
          if (null != tmp12) {
            let Zt4Mf4 = util.t.FDSSia;
          } else {
            Zt4Mf4 = util.t.Zt4Mf4;
          }
          const stringResult = intl10.string(Zt4Mf4);
          cResult[10] = tmp12;
          cResult[11] = stringResult;
        } else {
          if (cResult[12] === tmp7) {
            let teen;
            if (tmp12 != null) {
              teen = tmp12.teen;
            }
            if (cResult[13] === teen) {
              let tmp47 = cResult[14];
            }
            if (cResult[15] !== tmp7) {
              const intl12 = util.intl;
              const string3 = intl12.string;
              let xi46lg2 = util.t;
              if (tmp7) {
                xi46lg2 = xi46lg2.xi46lg;
                let string3Result = string3(xi46lg2);
              } else {
                string3Result = string3(xi46lg2.ZmwvDc);
              }
              cResult[15] = tmp7;
              cResult[16] = string3Result;
            } else if (cResult[17] !== tmp12) {
              const intl13 = util.intl;
              if (null != tmp12) {
                let f3Pet92 = util.t["/g10LC"];
              } else {
                f3Pet92 = util.t.f3Pet9;
              }
              const stringResult1 = intl13.string(f3Pet92);
              cResult[17] = tmp12;
              cResult[18] = stringResult1;
            } else {
              if (cResult[19] === tmp41) {
                if (cResult[20] === tmp47) {
                  if (cResult[21] === tmp53) {
                    if (cResult[22] === tmp56) {
                      if (cResult[23] === tmp61) {
                        let tmp62 = cResult[24];
                      }
                      return tmp62;
                    }
                  }
                }
              }
              const obj3 = { verifyAgreementButtonText: tmp41, verifyGateDescription: tmp47, verifyTitle: tmp53, verifyDisagreementButtonText: cResult[18], verifyEmphasiseDisagree: null != tmp12 };
              cResult[19] = tmp41;
              cResult[20] = tmp47;
              cResult[21] = tmp53;
              cResult[22] = cResult[18];
              cResult[23] = null != tmp12;
              cResult[24] = obj3;
              tmp62 = obj3;
            }
          }
          let teen1;
          if (tmp12 != null) {
            teen1 = tmp12.teen;
          }
          if (teen1 != null) {
            cResult[12] = tmp7;
            let teen2;
            if (tmp12 != null) {
              teen2 = tmp12.teen;
            }
            cResult[13] = teen2;
            cResult[14] = teen1;
            tmp47 = teen1;
          } else {
            const intl11 = util.intl;
            const format = intl11.format;
            let t = util.t;
            if (tmp7) {
              t = {};
              let formatResult = format(t["8tk6bB"], t);
            } else {
              formatResult = format(t.XQZvwn, {});
            }
          }
        }
      } else if (arg0 === AgeGateSource.LARGE_GUILD) {
        const _Symbol3 = Symbol;
        if (cResult[25] === Symbol.for("react.memo_cache_sentinel")) {
          const obj4 = { verifyTitle: null, verifyGateDescription: null, verifyAgreementButtonText: null };
          const intl7 = util.intl;
          obj4.verifyTitle = intl7.string(util.t["7ymzsL"]);
          const intl8 = util.intl;
          obj4.verifyGateDescription = intl8.string(util.t.SxY4IW);
          const intl9 = util.intl;
          obj4.verifyAgreementButtonText = intl9.string(util.t.FDSSia);
          cResult[25] = obj4;
        }
      } else {
        if (stateFromStores) {
          if (tmp7) {
            if (!tmp5) {
              const _Symbol = Symbol;
              if (cResult[26] === Symbol.for("react.memo_cache_sentinel")) {
                const intl = util.intl;
                const stringResult2 = intl.string(util.t["H0SG/g"]);
                const intl2 = util.intl;
                const obj6 = { helpURL: HelpdeskUtilsDefault.getArticleURL(constants.AGE_GATE) };
                const formatResult1 = intl2.format(util.t["6++3cX"], obj6);
                cResult[26] = stringResult2;
                cResult[27] = formatResult1;
                let tmp14 = formatResult1;
                let tmp13 = stringResult2;
              } else {
                tmp13 = cResult[26];
                tmp14 = cResult[27];
              }
              if (cResult[28] !== tmp14) {
                const obj7 = { verifyTitle: tmp13, verifyGateDescription: tmp14, verifyAgreementButtonText: null };
                cResult[28] = tmp14;
                cResult[29] = obj7;
                let tmp19 = obj7;
              } else {
                tmp19 = cResult[29];
              }
              return tmp19;
            }
          }
        }
        const _Symbol2 = Symbol;
        if (cResult[30] === Symbol.for("react.memo_cache_sentinel")) {
          const intl3 = util.intl;
          const stringResult3 = intl3.string(util.t.FDSSia);
          cResult[30] = stringResult3;
          let tmp20 = stringResult3;
        } else {
          tmp20 = cResult[30];
        }
        if (cResult[31] === tmp7) {
          let unverified;
          if (tmp12 != null) {
            unverified = tmp12.unverified;
          }
          if (cResult[32] === unverified) {
            let tmp24 = cResult[33];
          }
          if (cResult[34] !== tmp7) {
            const intl5 = util.intl;
            const string2 = intl5.string;
            let xi46lg = util.t;
            if (tmp7) {
              xi46lg = xi46lg.xi46lg;
              let string2Result = string2(xi46lg);
            } else {
              string2Result = string2(xi46lg.ZmwvDc);
            }
            cResult[34] = tmp7;
            cResult[35] = string2Result;
          } else if (cResult[36] !== tmp12) {
            const intl6 = util.intl;
            if (null != tmp12) {
              let f3Pet9 = util.t["/g10LC"];
            } else {
              f3Pet9 = util.t.f3Pet9;
            }
            const stringResult4 = intl6.string(f3Pet9);
            cResult[36] = tmp12;
            cResult[37] = stringResult4;
          } else {
            if (cResult[38] === tmp24) {
              if (cResult[39] === tmp30) {
              }
            }
            const obj8 = { verifyAgreementButtonText: tmp20, verifyGateDescription: tmp24, verifyTitle: tmp30, verifyDisagreementButtonText: cResult[37] };
            cResult[38] = tmp24;
            cResult[39] = tmp30;
            cResult[40] = cResult[37];
            cResult[41] = obj8;
          }
        }
        let unverified1;
        if (tmp12 != null) {
          unverified1 = tmp12.unverified;
        }
        if (unverified1 != null) {
          cResult[31] = tmp7;
          let unverified2;
          if (tmp12 != null) {
            unverified2 = tmp12.unverified;
          }
          cResult[32] = unverified2;
          cResult[33] = unverified1;
          tmp24 = unverified1;
        } else {
          const intl4 = util.intl;
          const string = intl4.string;
          let V6Gmu9 = util.t;
          if (tmp7) {
            V6Gmu9 = V6Gmu9.V6Gmu9;
            let stringResult5 = string(V6Gmu9);
          } else {
            stringResult5 = string(V6Gmu9["5rygLk"]);
          }
        }
      }
    }
  }
  if (arg0 === AgeGateSource.JOIN_LARGE_GUILD_UNDERAGE) {
    let MjQbfi = util.t["u/xsK9"];
  } else {
    MjQbfi = util.t.MjQbfi;
  }
  if (cResult[2] !== isAgeVerified) {
    const tmp65 = getLargeGuildUnderageContent(isAgeVerified);
    cResult[2] = isAgeVerified;
    cResult[3] = tmp65;
    let tmp63 = tmp65;
  } else {
    tmp63 = cResult[3];
  }
  if (cResult[4] !== MjQbfi) {
    const intl14 = util.intl;
    const stringResult6 = intl14.string(MjQbfi);
    cResult[4] = MjQbfi;
    cResult[5] = stringResult6;
    let tmp66 = stringResult6;
  } else {
    tmp66 = cResult[5];
  }
  if (cResult[6] === tmp63.agreement) {
    if (cResult[7] === tmp63.description) {
      if (cResult[8] === tmp66) {
        let tmp68 = cResult[9];
      }
      return tmp68;
    }
  }
  const obj9 = { verifyTitle: tmp66, verifyGateDescription: tmp63.description, verifyAgreementButtonText: tmp63.agreement };
  cResult[6] = tmp63.agreement;
  cResult[7] = tmp63.description;
  cResult[8] = tmp66;
  cResult[9] = obj9;
  tmp68 = obj9;
  const tmpResult = initialize;
}) : ((arg0) => {
  const isAgeVerified = AgeVerificationUtils.useIsAgeVerified();
  let tmp6 = arg0 === AgeGateSource.NSFW_SERVER;
  if (!tmp6) {
    tmp6 = arg0 === AgeGateSource.NSFW_SERVER_INVITE;
  }
  if (!tmp6) {
    tmp6 = arg0 === AgeGateSource.NSFW_SERVER_INVITE_EMBED;
  }
  const tmp4 = closure_14();
  items = [UserStore];
  const stateFromStores = initialize.useStateFromStores(items, () => {
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
      if (isAgeVerified) {
        const intl10 = util.intl;
        let tmp17 = null;
        if (null != tmp8) {
          let Zt4Mf4 = util.t.FDSSia;
        } else {
          Zt4Mf4 = util.t.Zt4Mf4;
        }
        const obj2 = { verifyAgreementButtonText: intl10.string(Zt4Mf4), verifyGateDescription: null, verifyTitle: null, verifyDisagreementButtonText: null, verifyEmphasiseDisagree: null };
        let teen;
        if (tmp8 != tmp17) {
          teen = tmp8.teen;
        }
        if (teen != tmp17) {
          obj2.verifyGateDescription = teen;
          const intl12 = util.intl;
          const string3 = intl12.string;
          const t2 = util.t;
          if (tmp6) {
            let string3Result = string3(t2.xi46lg);
          } else {
            string3Result = string3(t2.ZmwvDc);
          }
          obj2.verifyTitle = string3Result;
          const intl13 = util.intl;
          if (tmp17 != tmp8) {
            let f3Pet92 = util.t["/g10LC"];
          } else {
            f3Pet92 = util.t.f3Pet9;
          }
          obj2.verifyDisagreementButtonText = intl13.string(f3Pet92);
          tmp17 = tmp17 != tmp8;
          obj2.verifyEmphasiseDisagree = tmp17;
        } else {
          const intl11 = util.intl;
          const format = intl11.format;
          let t1 = util.t;
          if (tmp6) {
            t1 = {};
            let formatResult = format(t1["8tk6bB"], t1);
          } else {
            formatResult = format(t1.XQZvwn, {});
          }
        }
      } else {
        if (arg0 === AgeGateSource.LARGE_GUILD) {
          const obj3 = { verifyTitle: null, verifyGateDescription: null, verifyAgreementButtonText: null };
          const intl7 = util.intl;
          obj3.verifyTitle = intl7.string(util.t["7ymzsL"]);
          const intl8 = util.intl;
          obj3.verifyGateDescription = intl8.string(util.t.SxY4IW);
          const intl9 = util.intl;
          obj3.verifyAgreementButtonText = intl9.string(util.t.FDSSia);
          let obj4 = obj3;
        } else {
          if (stateFromStores) {
            if (tmp6) {
              if (!tmp4) {
                obj4 = { verifyTitle: null, verifyGateDescription: null, verifyAgreementButtonText: null };
                const intl = util.intl;
                obj4.verifyTitle = intl.string(util.t["H0SG/g"]);
                const intl2 = util.intl;
                const obj6 = { helpURL: HelpdeskUtilsDefault.getArticleURL(constants.AGE_GATE) };
                obj4.verifyGateDescription = intl2.format(util.t["6++3cX"], obj6);
              }
            }
          }
          const obj7 = { verifyAgreementButtonText: null, verifyGateDescription: null, verifyTitle: null, verifyDisagreementButtonText: null };
          const intl3 = util.intl;
          obj7.verifyAgreementButtonText = intl3.string(util.t.FDSSia);
          let unverified;
          if (tmp8 != null) {
            unverified = tmp8.unverified;
          }
          if (unverified != null) {
            obj7.verifyGateDescription = unverified;
            const intl5 = util.intl;
            const string2 = intl5.string;
            const t = util.t;
            if (tmp6) {
              let string2Result = string2(t.xi46lg);
            } else {
              string2Result = string2(t.ZmwvDc);
            }
            obj7.verifyTitle = string2Result;
            const intl6 = util.intl;
            if (null != tmp8) {
              let f3Pet9 = util.t["/g10LC"];
            } else {
              f3Pet9 = util.t.f3Pet9;
            }
            obj7.verifyDisagreementButtonText = intl6.string(f3Pet9);
          } else {
            const intl4 = util.intl;
            const string = intl4.string;
            let V6Gmu9 = util.t;
            if (tmp6) {
              V6Gmu9 = V6Gmu9.V6Gmu9;
              let stringResult = string(V6Gmu9);
            } else {
              stringResult = string(V6Gmu9["5rygLk"]);
            }
          }
        }
        return obj4;
      }
    }
  }
  if (arg0 === AgeGateSource.JOIN_LARGE_GUILD_UNDERAGE) {
    let MjQbfi = util.t["u/xsK9"];
  } else {
    MjQbfi = util.t.MjQbfi;
  }
  const tmpResult = initialize;
  const obj8 = { verifyTitle: null, verifyGateDescription: null, verifyAgreementButtonText: null };
  const intl14 = util.intl;
  obj8.verifyTitle = intl14.string(MjQbfi);
  ({ description: obj10.verifyGateDescription, agreement: obj10.verifyAgreementButtonText } = getLargeGuildUnderageContent(isAgeVerified));
  return obj8;
});
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp9 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let isChannelSpoilerGated = closure_20(arg0);
  if (!isChannelSpoilerGated) {
    isChannelSpoilerGated = obj.useIsChannelSpoilerGated(arg0);
  }
  return isChannelSpoilerGated;
}) : ((arg0) => {
  let isChannelSpoilerGated = closure_20(arg0);
  if (!isChannelSpoilerGated) {
    isChannelSpoilerGated = obj.useIsChannelSpoilerGated(arg0);
  }
  return isChannelSpoilerGated;
});
function shouldAgeVerifyForAgeGate() {
  const result = AgeVerificationUtils.shouldShowTiggerPawtect();
  return RegionalFeatureConfigUtils.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.AGE_GATED_SPACES) && result;
}
function shouldShowAgeGateForCurrentUser() {
  const currentUser = UserStore.getCurrentUser();
  if (null == currentUser) {
    return false;
  } else {
    const result = AgeVerificationUtils.shouldShowTiggerPawtect();
    const tmp5 = RegionalFeatureConfigUtils.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.AGE_GATED_SPACES) && result;
    return true !== currentUser.nsfwAllowed || RegionalFeatureConfigUtils.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.AGE_GATED_SPACES) && result;
  }
}
function shouldShowAgeGateForGuildContentLevel(arg0) {
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
      guild = GuildStore.getGuild(arg0);
      let tmp10 = null != guild;
      if (tmp10) {
        tmp10 = isGuildNSFW(guild);
      }
      return tmp10;
    }
  }
  return false;
}
function shouldShowAgeGateForChannelId(id) {
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
}
function isChannelOrGuildNSFW(channel) {
  let tmp = null != channel;
  if (tmp) {
    let isNSFWResult = channel.isNSFW();
    if (!isNSFWResult) {
      isNSFWResult = isGuildNSFW(GuildStore.getGuild(channel.guild_id));
    }
    tmp = isNSFWResult;
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
      guild = GuildStore.getGuild(guildId);
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
export { isChannelOrGuildNSFW };
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
export const useIsChannelContentGated = tmp8;
export const useShouldHideChannelContent = tmp9;
export { isCurrentUserMissingDateOfBirth };
export const shouldAgeVerifyForSettingsToggles = function shouldAgeVerifyForSettingsToggles() {
  let isFeatureAgeGatedResult = RegionalFeatureConfigUtils.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.COMMANDS_TOGGLE);
  if (isFeatureAgeGatedResult) {
    isFeatureAgeGatedResult = obj2.shouldShowTiggerPawtect();
  }
  return isFeatureAgeGatedResult;
};
export const useShouldAgeVerifyForSettingsToggles = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let isFeatureAgeGated = RegionalFeatureConfigUtils.useIsFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.COMMANDS_TOGGLE);
  if (isFeatureAgeGated) {
    isFeatureAgeGated = obj2.useShouldShowTiggerPawtect();
  }
  return isFeatureAgeGated;
}) : (() => {
  let isFeatureAgeGated = RegionalFeatureConfigUtils.useIsFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.COMMANDS_TOGGLE);
  if (isFeatureAgeGated) {
    isFeatureAgeGated = obj2.useShouldShowTiggerPawtect();
  }
  return isFeatureAgeGated;
});