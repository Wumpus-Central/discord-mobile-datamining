// === Module 6728: AgeGateUtils ===

// Module 6728 (AgeGateUtils)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import initialize from "initialize" /* 504 */;
import util from "util" /* 1114 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2062 */;
import GuildRecord from "GuildRecord" /* 4876 */;
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5688 */;
import shouldAgeVerifyForAgeGate2 from "shouldAgeVerifyForAgeGate" /* 6719 */;
import AgeVerificationUtils from "AgeVerificationUtils" /* 6720 */;
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 6723 */;
import AgeGatedFeature from "AgeGatedFeature" /* 6725 */;
import getTinyBroncoWarningDescriptions from "getTinyBroncoWarningDescriptions" /* 6730 */;
import AgeGateModalActionCreators from "AgeGateModalActionCreators" /* 6733 */;
import NSFWContentGate from "NSFWContentGate" /* 6746 */;
import ChannelStore from "ChannelStore" /* 4858 */;
import GuildNSFWAgreeStore from "GuildNSFWAgreeStore" /* 6729 */;
import GuildStore from "GuildStore" /* 4880 */;
import SelectedChannelStore from "SelectedChannelStore" /* 4912 */;
import UserStore from "UserStore" /* 1384 */;
import AgeGateConstants from "AgeGateConstants" /* 1098 */;
import Constants from "Constants" /* 1072 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

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
function useIsChannelContentGated(stateFromStores) {
  _require = stateFromStores;
  const shouldShowTiggerPawtect = require("AgeVerificationUtils").useShouldShowTiggerPawtect();
  const obj = require("AgeVerificationUtils");
  items = [GuildNSFWAgreeStore];
  stateFromStores = require("initialize").useStateFromStores(items, () => {
    let guild_id;
    if (stateFromStores != null) {
      guild_id = stateFromStores.guild_id;
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
    if (stateFromStores != null) {
      guild_id = stateFromStores.guild_id;
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
  let tmp7 = null != stateFromStores;
  if (tmp7) {
    const isNSFWResult = stateFromStores.isNSFW();
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
const AgeGateType = AgeGateConstants.AgeGateType;
({ GuildNSFWContentLevel, HelpdeskArticles: closure_11 } = Constants);
const date = new Date("06/16/2020");
let items = [, ];
({ AGE_RESTRICTED: arr[0], EXPLICIT: arr[1] } = GuildNSFWContentLevel);
let items1 = [, , ];
({ NSFW_SERVER: arr2[0], NSFW_SERVER_INVITE: arr2[1], NSFW_SERVER_INVITE_EMBED: arr2[2] } = AgeGateSource);
const set = new Set(items1);
let items2 = [, ];
({ FAMILY_CENTER: arr3[0], DEEP_LINK_PROMPT: arr3[1] } = AgeGateSource);
const set1 = new Set(items2);
let result = size.fileFinishedImporting("modules/age_gate/AgeGateUtils.tsx");

export const SERVER_AGE_GATE_SOURCES = set;
export function userNeedsAgeGate() {
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
}
export function guildNeedsAgeGate(nsfwLevel) {
  return items.includes(nsfwLevel.nsfwLevel);
}
export function useAgeGateVerifyContentForGuild(stateFromStores) {
  let NSFW_CHANNEL_AGE_VERIFY = dependencyMap;
  const isAgeVerified = AgeVerificationUtils.useIsAgeVerified();
  const tmp4 = isGuildNSFW(stateFromStores);
  items = [UserStore];
  stateFromStores = initialize.useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    let nsfwAllowed;
    if (currentUser != null) {
      nsfwAllowed = currentUser.nsfwAllowed;
    }
    return false === nsfwAllowed;
  });
  const shouldAgeVerifyForAgeGate = shouldAgeVerifyForAgeGate2.useShouldAgeVerifyForAgeGate();
  let tmp7 = null;
  let tmp8 = null;
  if (obj4.useIsFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.AGE_GATED_SPACES)) {
    const tmp3Result = isGuildNSFW(stateFromStores);
    let str;
    if (stateFromStores != tmp7) {
      str = stateFromStores.name;
    }
    if (str == tmp7) {
      str = "";
    }
    if (tmp3Result) {
      let tinyBroncoWarningDescriptions = getTinyBroncoWarningDescriptions.getTinyBroncoWarningDescriptions(tmp3Result, str);
      const tmpResult = getTinyBroncoWarningDescriptions;
    } else {
      tinyBroncoWarningDescriptions = null;
    }
    tmp8 = tinyBroncoWarningDescriptions;
  }
  const intl = util.intl;
  const t = util.t;
  obj4 = RegionalFeatureConfigUtils;
  const intl2 = util.intl;
  const format = intl2.format;
  const t2 = util.t;
  if (tmp4) {
    let formatResult = format(t2["8tk6bB"], {});
  } else {
    formatResult = format(t2.XQZvwn, {});
  }
  const intl3 = util.intl;
  const string = intl3.string;
  const t3 = util.t;
  if (tmp4) {
    let stringResult1 = string(t3.V6Gmu9);
  } else {
    stringResult1 = string(t3["5rygLk"]);
  }
  const intl4 = util.intl;
  const t4 = util.t;
  const stringResult2 = intl4.string(tmp4 ? t4.xi46lg : t4.ZmwvDc);
  if (shouldAgeVerifyForAgeGate) {
    if (!isAgeVerified) {
      const obj5 = { title: stringResult2, description: null, agreement: null, modalType: null };
      let unverified;
      if (tmp8 != tmp7) {
        unverified = tmp8.unverified;
      }
      if (unverified == tmp7) {
        unverified = stringResult1;
      }
      obj5.description = unverified;
      const intl8 = util.intl;
      obj5.agreement = intl8.string(util.t.FDSSia);
      obj5.modalType = AgeVerificationAnalyticsUtils.NsfwSpaceWarningModalType.NSFW_CHANNEL_AGE_VERIFY;
    }
    const obj6 = { title: stringResult2, description: null, agreement: null, modalType: null, emphasiseDisagree: null };
    let teen;
    if (tmp8 != tmp7) {
      teen = tmp8.teen;
    }
    if (teen == tmp7) {
      teen = formatResult;
    }
    obj6.description = teen;
    const intl9 = util.intl;
    if (tmp7 != tmp8) {
      let Zt4Mf4 = util.t.FDSSia;
    } else {
      Zt4Mf4 = util.t.Zt4Mf4;
    }
    obj6.agreement = intl9.string(Zt4Mf4);
    NSFW_CHANNEL_AGE_VERIFY = AgeVerificationAnalyticsUtils.NsfwSpaceWarningModalType.NSFW_CHANNEL_AGE_VERIFY;
    obj6.modalType = NSFW_CHANNEL_AGE_VERIFY;
    tmp7 = tmp7 != tmp8;
    obj6.emphasiseDisagree = tmp7;
  } else {
    const obj7 = { title: null, description: null, agreement: null, modalType: null };
    if (stateFromStores) {
      const intl6 = util.intl;
      const t5 = util.t;
      obj7.title = intl6.string(tmp4 ? t5["H0SG/g"] : t5.NEabBa);
      const intl7 = util.intl;
      let NSFW_CHANNEL_UNDERAGE = util.t;
      const obj9 = { helpURL: HelpdeskUtilsDefault.getArticleURL(constants.NSFW_AGE_GATING) };
      obj7.description = intl7.format(tmp4 ? NSFW_CHANNEL_UNDERAGE["6++3cX"] : NSFW_CHANNEL_UNDERAGE["2kHZes"], obj9);
      NSFW_CHANNEL_UNDERAGE = AgeVerificationAnalyticsUtils.NsfwSpaceWarningModalType.NSFW_CHANNEL_UNDERAGE;
      obj7.modalType = NSFW_CHANNEL_UNDERAGE;
      const tmp17 = tmp4 ? NSFW_CHANNEL_UNDERAGE["6++3cX"] : NSFW_CHANNEL_UNDERAGE["2kHZes"];
    } else {
      obj7.title = stringResult2;
      let adult;
      if (tmp8 != tmp7) {
        adult = tmp8.adult;
      }
      if (adult == tmp7) {
        adult = stringResult;
      }
      obj7.description = adult;
      const intl5 = util.intl;
      obj7.agreement = intl5.string(util.t.wVq7uo);
      obj7.modalType = AgeVerificationAnalyticsUtils.NsfwSpaceWarningModalType.NSFW_CHANNEL_VERIFIED;
      return obj7;
    }
  }
  stringResult = intl.string(tmp4 ? t.ZtuRts : t.E4Cd5I);
}
export function useAgeGateVerifyContent(source) {
  const isAgeVerified = AgeVerificationUtils.useIsAgeVerified();
  let tmp6 = source === AgeGateSource.NSFW_SERVER;
  const shouldAgeVerifyForAgeGate = shouldAgeVerifyForAgeGate2.useShouldAgeVerifyForAgeGate();
  if (!tmp6) {
    tmp6 = source === AgeGateSource.NSFW_SERVER_INVITE;
  }
  if (!tmp6) {
    tmp6 = source === AgeGateSource.NSFW_SERVER_INVITE_EMBED;
  }
  items = [UserStore];
  const stateFromStores = initialize.useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    let nsfwAllowed;
    if (currentUser != null) {
      nsfwAllowed = currentUser.nsfwAllowed;
    }
    return false === nsfwAllowed;
  });
  const tmpResult = initialize;
  let tmp8 = null;
  let tinyBroncoWarningDescriptions = null;
  if (tmpResult3.useIsFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.AGE_GATED_SPACES)) {
    tinyBroncoWarningDescriptions = null;
    if (tmp6) {
      tinyBroncoWarningDescriptions = getTinyBroncoWarningDescriptions.getTinyBroncoWarningDescriptions(true, "");
      const tmpResult4 = getTinyBroncoWarningDescriptions;
    }
  }
  if (source !== AgeGateSource.JOIN_LARGE_GUILD_UNDERAGE) {
    if (source !== AgeGateSource.ACCESS_LARGE_GUILD_UNDERAGE) {
      if (isAgeVerified) {
        const intl10 = util.intl;
        if (tmp8 != tinyBroncoWarningDescriptions) {
          let Zt4Mf4 = util.t.FDSSia;
        } else {
          Zt4Mf4 = util.t.Zt4Mf4;
        }
        const obj3 = { verifyAgreementButtonText: intl10.string(Zt4Mf4), verifyGateDescription: null, verifyTitle: null, verifyDisagreementButtonText: null, verifyEmphasiseDisagree: null };
        let teen;
        if (tinyBroncoWarningDescriptions != tmp8) {
          teen = tinyBroncoWarningDescriptions.teen;
        }
        if (teen != tmp8) {
          obj3.verifyGateDescription = teen;
          const intl12 = util.intl;
          const string3 = intl12.string;
          const t2 = util.t;
          if (tmp6) {
            let string3Result = string3(t2.xi46lg);
          } else {
            string3Result = string3(t2.ZmwvDc);
          }
          obj3.verifyTitle = string3Result;
          const intl13 = util.intl;
          if (tmp8 != tinyBroncoWarningDescriptions) {
            let f3Pet92 = util.t["/g10LC"];
          } else {
            f3Pet92 = util.t.f3Pet9;
          }
          obj3.verifyDisagreementButtonText = intl13.string(f3Pet92);
          tmp8 = tmp8 != tinyBroncoWarningDescriptions;
          obj3.verifyEmphasiseDisagree = tmp8;
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
        if (source === AgeGateSource.LARGE_GUILD) {
          const obj4 = { verifyTitle: null, verifyGateDescription: null, verifyAgreementButtonText: null };
          const intl7 = util.intl;
          obj4.verifyTitle = intl7.string(util.t["7ymzsL"]);
          const intl8 = util.intl;
          obj4.verifyGateDescription = intl8.string(util.t.SxY4IW);
          const intl9 = util.intl;
          obj4.verifyAgreementButtonText = intl9.string(util.t.FDSSia);
          let obj5 = obj4;
        } else {
          if (stateFromStores) {
            if (tmp6) {
              if (!shouldAgeVerifyForAgeGate) {
                obj5 = { verifyTitle: null, verifyGateDescription: null, verifyAgreementButtonText: null };
                const intl = util.intl;
                obj5.verifyTitle = intl.string(util.t["H0SG/g"]);
                const intl2 = util.intl;
                const obj6 = { helpURL: HelpdeskUtilsDefault.getArticleURL(constants.AGE_GATE) };
                obj5.verifyGateDescription = intl2.format(util.t["6++3cX"], obj6);
              }
            }
          }
          const obj7 = { verifyAgreementButtonText: null, verifyGateDescription: null, verifyTitle: null, verifyDisagreementButtonText: null };
          const intl3 = util.intl;
          obj7.verifyAgreementButtonText = intl3.string(util.t.FDSSia);
          let unverified;
          if (tinyBroncoWarningDescriptions != tmp8) {
            unverified = tinyBroncoWarningDescriptions.unverified;
          }
          if (unverified != tmp8) {
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
            if (tmp8 != tinyBroncoWarningDescriptions) {
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
        return obj5;
      }
    }
  }
  if (source === AgeGateSource.JOIN_LARGE_GUILD_UNDERAGE) {
    let MjQbfi = util.t["u/xsK9"];
  } else {
    MjQbfi = util.t.MjQbfi;
  }
  const intl14 = util.intl;
  const string4 = intl14.string;
  const t3 = util.t;
  if (isAgeVerified) {
    let string4Result = string4(t3.SAoMVJ);
  } else {
    string4Result = string4(t3.SxY4IW);
  }
  const intl15 = util.intl;
  const string5 = intl15.string;
  const t4 = util.t;
  if (isAgeVerified) {
    let string5Result = string5(t4.Zt4Mf4);
  } else {
    string5Result = string5(t4.FDSSia);
  }
  const obj9 = { verifyTitle: null, verifyGateDescription: null, verifyAgreementButtonText: null };
  const intl16 = util.intl;
  obj9.verifyTitle = intl16.string(MjQbfi);
  obj9.verifyGateDescription = string4Result;
  obj9.verifyAgreementButtonText = string5Result;
  return obj9;
}
export function shouldShowAgeGateForCurrentUser() {
  const currentUser = UserStore.getCurrentUser();
  if (null == currentUser) {
    return false;
  } else {
    return true !== currentUser.nsfwAllowed || shouldAgeVerifyForAgeGate2.shouldAgeVerifyForAgeGate();
  }
}
export function shouldShowAgeGateForGuildContentLevel(arg0) {
  const currentUser = UserStore.getCurrentUser();
  let flag = false;
  if (null != currentUser) {
    flag = true !== currentUser.nsfwAllowed || shouldAgeVerifyForAgeGate2.shouldAgeVerifyForAgeGate();
    const tmp4 = true !== currentUser.nsfwAllowed || shouldAgeVerifyForAgeGate2.shouldAgeVerifyForAgeGate();
  }
  if (flag) {
    if (null != arg0) {
      const guild = GuildStore.getGuild(arg0);
      let tmp8 = null != guild;
      if (tmp8) {
        tmp8 = isGuildNSFW(guild);
      }
      return tmp8;
    }
  }
  return false;
}
export function shouldShowAgeGateForChannelId(id) {
  const currentUser = UserStore.getCurrentUser();
  let flag = false;
  if (null != currentUser) {
    flag = true !== currentUser.nsfwAllowed || shouldAgeVerifyForAgeGate2.shouldAgeVerifyForAgeGate();
    const tmp4 = true !== currentUser.nsfwAllowed || shouldAgeVerifyForAgeGate2.shouldAgeVerifyForAgeGate();
  }
  let tmp5 = !flag;
  if (flag) {
    tmp5 = null == id;
  }
  let tmp6 = !tmp5;
  if (!tmp5) {
    tmp6 = isChannelContentGated(ChannelStore.getChannel(id));
  }
  return tmp6;
}
export function shouldShowAgeGateForVoiceChannel(channelId) {
  let result = shouldAgeVerifyForAgeGate2.shouldAgeVerifyForAgeGate();
  if (result) {
    const currentUser = UserStore.getCurrentUser();
    let flag = false;
    if (null != currentUser) {
      const tmpResult = shouldAgeVerifyForAgeGate2;
      flag = true !== currentUser.nsfwAllowed || shouldAgeVerifyForAgeGate2.shouldAgeVerifyForAgeGate();
      const tmp7 = true !== currentUser.nsfwAllowed || shouldAgeVerifyForAgeGate2.shouldAgeVerifyForAgeGate();
    }
    let tmp9 = !flag;
    if (flag) {
      tmp9 = null == channelId;
    }
    let tmp10 = !tmp9;
    if (!tmp9) {
      tmp10 = isChannelContentGated(ChannelStore.getChannel(channelId));
    }
    result = tmp10;
  }
  return result;
}
export function maybeOpenAgeGateForVoiceChannel(id) {
  let result = shouldAgeVerifyForAgeGate2.shouldAgeVerifyForAgeGate();
  if (result) {
    const currentUser = UserStore.getCurrentUser();
    let flag = false;
    if (null != currentUser) {
      const tmpResult = shouldAgeVerifyForAgeGate2;
      flag = true !== currentUser.nsfwAllowed || shouldAgeVerifyForAgeGate2.shouldAgeVerifyForAgeGate();
      const tmp7 = true !== currentUser.nsfwAllowed || shouldAgeVerifyForAgeGate2.shouldAgeVerifyForAgeGate();
    }
    let tmp8 = !flag;
    if (flag) {
      tmp8 = null == id;
    }
    let tmp9 = !tmp8;
    if (!tmp8) {
      tmp9 = isChannelContentGated(ChannelStore.getChannel(id));
    }
    result = tmp9;
  }
  let flag3 = result;
  if (flag3) {
    AgeGateModalActionCreators.openAgeGateModal(AgeGateSource.NSFW_VOICE_CHANNEL, id);
    flag3 = true;
    const tmpResult2 = AgeGateModalActionCreators;
  }
  return flag3;
}
export function maybeShowAgeGate(guildId, channelId, JOIN_LARGE_GUILD_UNDERAGE) {
  const currentUser = UserStore.getCurrentUser();
  let flag = false;
  if (null != currentUser) {
    flag = true !== currentUser.nsfwAllowed || shouldAgeVerifyForAgeGate2.shouldAgeVerifyForAgeGate();
    const tmp4 = true !== currentUser.nsfwAllowed || shouldAgeVerifyForAgeGate2.shouldAgeVerifyForAgeGate();
  }
  let flag3 = false;
  if (flag) {
    flag3 = false;
    if (null != guildId) {
      const guild = GuildStore.getGuild(guildId);
      let tmp8 = null != guild;
      if (tmp8) {
        tmp8 = isGuildNSFW(guild);
      }
      flag3 = tmp8;
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
    let tmp11 = null != currentUser1 && null == currentUser1.nsfwAllowed;
    if (tmp11) {
      const currentUser2 = UserStore.getCurrentUser();
      let flag4 = false;
      if (null != currentUser2) {
        flag4 = true !== currentUser2.nsfwAllowed || shouldAgeVerifyForAgeGate2.shouldAgeVerifyForAgeGate();
        const tmp15 = true !== currentUser2.nsfwAllowed || shouldAgeVerifyForAgeGate2.shouldAgeVerifyForAgeGate();
      }
      let tmp17 = !flag4;
      if (flag4) {
        tmp17 = null == channelId;
      }
      let tmp18 = !tmp17;
      if (!tmp17) {
        tmp18 = isChannelContentGated(ChannelStore.getChannel(channelId));
      }
      tmp11 = tmp18;
    }
    if (tmp11) {
      let NSFW_CHANNEL = NSFW_SERVER;
      if (NSFW_SERVER == null) {
        NSFW_CHANNEL = AgeGateSource.NSFW_CHANNEL;
      }
      AgeGateModalActionCreators.openAgeGateModal(NSFW_CHANNEL);
    }
  }
}
export const SOURCES_WITH_DOB = set1;
export function getAgeGateType(source) {
  if (set1.has(source)) {
    return AgeGateType.DATE_OF_BIRTH;
  } else {
    if (obj.shouldAgeVerifyForAgeGate()) {
      return AgeGateType.AGE_ASSURANCE;
    } else {
      const channel = ChannelStore.getChannel(SelectedChannelStore.getChannelId());
      const currentUser = UserStore.getCurrentUser();
      let nsfwAllowed;
      if (currentUser != null) {
        nsfwAllowed = currentUser.nsfwAllowed;
      }
      if (false !== nsfwAllowed) {
        let AGE_ASSURANCE = AgeGateType.DATE_OF_BIRTH;
      } else {
        AGE_ASSURANCE = AgeGateType.AGE_ASSURANCE;
      }
      return AGE_ASSURANCE;
    }
    obj = shouldAgeVerifyForAgeGate2;
  }
}
export const isChannelOrGuildNSFW = NSFWContentGate.isChannelOrGuildNSFW;
export const userCannotSeeNSFWContent = NSFWContentGate.userCannotSeeNSFWContent;
export function isChannelAgeVerificationGated(channel) {
  if (null == channel) {
    return false;
  } else {
    const result = AgeVerificationUtils.shouldShowTiggerPawtect();
    return NSFWContentGate.isChannelOrGuildNSFW(channel) && result;
  }
}
export { isChannelContentGated };
export { useIsChannelContentGated };
export function useShouldHideChannelContent(stateFromStores) {
  const tmp = useIsChannelContentGated(stateFromStores);
  let isChannelSpoilerGated = tmp;
  if (!tmp) {
    isChannelSpoilerGated = obj.useIsChannelSpoilerGated(stateFromStores);
  }
  return isChannelSpoilerGated;
}
export function isCurrentUserMissingDateOfBirth() {
  const currentUser = UserStore.getCurrentUser();
  return null != currentUser && null == currentUser.nsfwAllowed;
}
export function shouldAgeVerifyForSettingsToggles() {
  let isFeatureAgeGatedResult = RegionalFeatureConfigUtils.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.COMMANDS_TOGGLE);
  if (isFeatureAgeGatedResult) {
    isFeatureAgeGatedResult = obj2.shouldShowTiggerPawtect();
  }
  return isFeatureAgeGatedResult;
}
export function useShouldAgeVerifyForSettingsToggles() {
  let isFeatureAgeGated = RegionalFeatureConfigUtils.useIsFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.COMMANDS_TOGGLE);
  if (isFeatureAgeGated) {
    isFeatureAgeGated = obj2.useShouldShowTiggerPawtect();
  }
  return isFeatureAgeGated;
}