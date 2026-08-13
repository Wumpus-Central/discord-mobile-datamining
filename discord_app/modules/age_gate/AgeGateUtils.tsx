// discord_app/modules/age_gate/AgeGateUtils.tsx
import { isGuildNSFW } from "GuildNSFWContentLevel";
import ensureGuildLoaded from "ensureGuildLoaded";
import initialize from "initialize";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import mergeGuildAvatar from "mergeGuildAvatar";
import { AgeGateSource } from "result";
import ME from "ME";
import set from "initialize";
import { initialize } from "../../../discord_common/js/packages/flux/index.tsx";
import { AgeGatedFeature } from "../../../discord_common/js/shared/shared-constants/AgeGatedFeature.tsx";
import { combined } from "../../utils/HelpdeskUtils.tsx";
import { DISCORD_EPOCH } from "../../utils/SnowflakeUtils.tsx";
import { useAgeVerificationRunner } from "../age_assurance/AgeVerificationUtils.tsx";
import { isFeatureAgeGated } from "../regional_feature_config/RegionalFeatureConfigUtils.tsx";
import { openAgeGateModal } from "AgeGateModalActionCreators.tsx";

let GuildNSFWContentLevel;
let c9;
function shouldShowAgeGateForVoiceChannel(channelId) {
  const result = useAgeVerificationRunner.shouldShowTiggerPawtect();
  const obj = useAgeVerificationRunner;
  let tmp4 = isFeatureAgeGated.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.AGE_GATED_SPACES) && result;
  if (tmp4) {
    const currentUser = authStore.getCurrentUser();
    let flag = false;
    if (null != currentUser) {
      let tmpResult = tmp(4560);
      const result1 = tmpResult.shouldShowTiggerPawtect();
      tmpResult = tmp(4040);
      const tmp9 = tmpResult.isFeatureAgeGated(tmp(5182).AgeGatedFeature.AGE_GATED_SPACES) && result1;
      flag = true !== currentUser.nsfwAllowed || tmpResult.isFeatureAgeGated(tmp(5182).AgeGatedFeature.AGE_GATED_SPACES) && result1;
      const tmp10 = true !== currentUser.nsfwAllowed || tmpResult.isFeatureAgeGated(tmp(5182).AgeGatedFeature.AGE_GATED_SPACES) && result1;
    }
    let tmp12 = !flag;
    if (flag) {
      tmp12 = null == channelId;
    }
    let tmp13 = !tmp12;
    if (!tmp12) {
      tmp13 = isChannelContentGated(store.getChannel(channelId));
    }
    tmp4 = tmp13;
  }
  return tmp4;
}
function isChannelContentGated(channel, arg1) {
  if (null == channel) {
    return false;
  } else {
    let didAgreeResult = initialize.didAgree(channel.guild_id);
    const currentUser = authStore.getCurrentUser();
    if (currentUser != null) {
      const nsfwAllowed = currentUser.nsfwAllowed;
    }
    const obj = isFeatureAgeGated;
    const isFeatureAgeGatedResult = isFeatureAgeGated.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.AGE_GATED_SPACES);
    let result = useAgeVerificationRunner.shouldShowTiggerPawtect();
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
    const guild = store2.getGuild(channel.guild_id);
    let tmp9 = null != guild;
    if (tmp9) {
      tmp9 = isGuildNSFW(guild) && tmp6;
      const tmp11 = isGuildNSFW(guild) && tmp6;
    }
    return tmp9;
  }
}
function useIsChannelContentGated(channel) {
  const _require = channel;
  const shouldShowTiggerPawtect = _useAgeVerificationRunner.useShouldShowTiggerPawtect();
  const obj = _useAgeVerificationRunner;
  const items = [initialize];
  let stateFromStores = _initialize.useStateFromStores(items, () => {
    let guild_id;
    if (channel != null) {
      guild_id = channel.guild_id;
    }
    return outer1_5.didAgree(guild_id);
  });
  const obj2 = _initialize;
  const items1 = [mergeGuildAvatar];
  const stateFromStores1 = _initialize.useStateFromStores(items1, () => {
    currentUser = currentUser.getCurrentUser();
    let nsfwAllowed;
    if (currentUser != null) {
      nsfwAllowed = currentUser.nsfwAllowed;
    }
    return false === nsfwAllowed;
  });
  const obj3 = _initialize;
  let isFeatureAgeGated = _isFeatureAgeGated.useIsFeatureAgeGated(_AgeGatedFeature.AgeGatedFeature.AGE_GATED_SPACES);
  const obj4 = _isFeatureAgeGated;
  const items2 = [createGuildRecordFromRust];
  const stateFromStores2 = _initialize.useStateFromStores(items2, () => {
    let guild_id;
    if (channel != null) {
      guild_id = channel.guild_id;
    }
    return outer1_6.getGuild(guild_id);
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
({ GuildNSFWContentLevel, HelpdeskArticles: c9 } = ME);
const date = new Date("06/16/2020");
let items = [, ];
({ AGE_RESTRICTED: arr[0], EXPLICIT: arr[1] } = GuildNSFWContentLevel);
let items1 = [, , ];
({ NSFW_SERVER: arr2[0], NSFW_SERVER_INVITE: arr2[1], NSFW_SERVER_INVITE_EMBED: arr2[2] } = AgeGateSource);
let set = new Set(items1);
let result = set.fileFinishedImporting("modules/age_gate/AgeGateUtils.tsx");

export const SERVER_AGE_GATE_SOURCES = set;
export const userNeedsAgeGate = function userNeedsAgeGate() {
  const currentUser = authStore.getCurrentUser();
  let tmp2 = null != currentUser;
  if (tmp2) {
    const obj = DISCORD_EPOCH;
    tmp2 = DISCORD_EPOCH.extractTimestamp(currentUser.id) > date.getTime();
    const extractTimestampResult = DISCORD_EPOCH.extractTimestamp(currentUser.id);
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
  const result = useAgeVerificationRunner.shouldShowTiggerPawtect();
  const obj = useAgeVerificationRunner;
  const obj2 = isFeatureAgeGated;
  return isFeatureAgeGated.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.AGE_GATED_SPACES) && result;
};
export const useShouldAgeVerifyForAgeGate = function useShouldAgeVerifyForAgeGate() {
  let isFeatureAgeGated = isFeatureAgeGated.useIsFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.AGE_GATED_SPACES);
  const obj = isFeatureAgeGated;
  if (isFeatureAgeGated) {
    isFeatureAgeGated = obj2.useShouldShowTiggerPawtect();
  }
  return isFeatureAgeGated;
};
export const useAgeGateVerifyContentForGuild = function useAgeGateVerifyContentForGuild(stateFromStores) {
  let NSFW_CHANNEL_AGE_VERIFY = dependencyMap;
  let obj = useAgeVerificationRunner;
  const isAgeVerified = obj.useIsAgeVerified();
  const tmp3 = isGuildNSFW(stateFromStores);
  const items = [mergeGuildAvatar];
  stateFromStores = initialize.useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    let nsfwAllowed;
    if (currentUser != null) {
      nsfwAllowed = currentUser.nsfwAllowed;
    }
    return false === nsfwAllowed;
  });
  const obj2 = initialize;
  const isFeatureAgeGated = isFeatureAgeGated.useIsFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.AGE_GATED_SPACES);
  const obj3 = isFeatureAgeGated;
  let shouldShowTiggerPawtect = isFeatureAgeGated;
  if (isFeatureAgeGated) {
    shouldShowTiggerPawtect = obj4.useShouldShowTiggerPawtect();
  }
  const intl = tmp(1236).intl;
  const t = tmp(1236).t;
  const stringResult = intl.string(tmp3 ? t.xi46lg : t.ZmwvDc);
  obj = { title: null, description: null, agreement: null, modalType: null };
  if (shouldShowTiggerPawtect) {
    obj[0] = stringResult;
    const intl6 = tmp(1236).intl;
    if (!isAgeVerified) {
      const string = intl6.string;
      const t4 = tmp(1236).t;
      if (tmp3) {
        let stringResult1 = string(t4.V6Gmu9);
      } else {
        stringResult1 = string(t4["5rygLk"]);
      }
      obj[1] = stringResult1;
      const intl7 = tmp(1236).intl;
      obj[2] = intl7.string(tmp(1236).t.FDSSia);
      obj[3] = tmp(7844).NsfwSpaceWarningModalType.NSFW_CHANNEL_AGE_VERIFY;
    }
    const format = intl6.format;
    let string2 = tmp(1236).t;
    if (tmp3) {
      let formatResult = format(string2["8tk6bB"], {});
    } else {
      formatResult = format(string2.XQZvwn, {});
    }
    obj[1] = formatResult;
    const intl8 = tmp(1236).intl;
    string2 = intl8.string;
    obj[2] = string2(tmp(1236).t.Zt4Mf4);
    NSFW_CHANNEL_AGE_VERIFY = tmp(7844).NsfwSpaceWarningModalType.NSFW_CHANNEL_AGE_VERIFY;
    obj[3] = NSFW_CHANNEL_AGE_VERIFY;
  } else if (stateFromStores) {
    const intl4 = tmp(1236).intl;
    const t3 = tmp(1236).t;
    obj[0] = intl4.string(tmp3 ? t3["H0SG/g"] : t3.NEabBa);
    const intl5 = tmp(1236).intl;
    let NSFW_CHANNEL_UNDERAGE = tmp(1236).t;
    obj = { helpURL: null };
    obj[0] = combined.getArticleURL(constants.NSFW_AGE_GATING);
    obj[1] = intl5.format(tmp3 ? NSFW_CHANNEL_UNDERAGE["6++3cX"] : NSFW_CHANNEL_UNDERAGE["2kHZes"], obj);
    NSFW_CHANNEL_UNDERAGE = tmp(7844).NsfwSpaceWarningModalType.NSFW_CHANNEL_UNDERAGE;
    obj[3] = NSFW_CHANNEL_UNDERAGE;
    const obj7 = combined;
    const tmp9 = tmp3 ? NSFW_CHANNEL_UNDERAGE["6++3cX"] : NSFW_CHANNEL_UNDERAGE["2kHZes"];
  } else {
    obj[0] = stringResult;
    const intl2 = tmp(1236).intl;
    const t2 = tmp(1236).t;
    obj[1] = intl2.string(tmp3 ? t2.ZtuRts : t2.E4Cd5I);
    const intl3 = tmp(1236).intl;
    obj[2] = intl3.string(tmp(1236).t.wVq7uo);
    obj[3] = tmp(7844).NsfwSpaceWarningModalType.NSFW_CHANNEL_VERIFIED;
    return obj;
  }
};
export const useAgeGateVerifyContent = function useAgeGateVerifyContent(source) {
  let obj = useAgeVerificationRunner;
  const isAgeVerified = obj.useIsAgeVerified();
  let obj1 = isFeatureAgeGated;
  const isFeatureAgeGated = obj1.useIsFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.AGE_GATED_SPACES);
  let obj2 = useAgeVerificationRunner;
  let shouldShowTiggerPawtect = isFeatureAgeGated;
  if (isFeatureAgeGated) {
    shouldShowTiggerPawtect = obj2.useShouldShowTiggerPawtect();
  }
  initialize;
  [][0] = mergeGuildAvatar;
  if (source !== AgeGateSource.JOIN_LARGE_GUILD_UNDERAGE) {
    if (source !== tmp6.ACCESS_LARGE_GUILD_UNDERAGE) {
      if (isAgeVerified) {
        obj = { verifyAgreementButtonText: null, verifyGateDescription: null, verifyTitle: null };
        const intl9 = tmp(1236).intl;
        obj[0] = intl9.string(tmp(1236).t.Zt4Mf4);
        const intl10 = tmp(1236).intl;
        const format = intl10.format;
        const t2 = tmp(1236).t;
        if (tmp7) {
          let formatResult = format(t2["8tk6bB"], {});
        } else {
          formatResult = format(t2.XQZvwn, {});
        }
        obj[1] = formatResult;
        const intl11 = tmp(1236).intl;
        const string3 = intl11.string;
        let xi46lg2 = tmp(1236).t;
        if (tmp7) {
          xi46lg2 = xi46lg2.xi46lg;
          let string3Result = string3(xi46lg2);
        } else {
          string3Result = string3(xi46lg2.ZmwvDc);
        }
        obj[2] = string3Result;
      } else {
        if (source === tmp6.LARGE_GUILD) {
          obj = { verifyTitle: null, verifyGateDescription: null, verifyAgreementButtonText: null };
          const intl6 = tmp(1236).intl;
          obj[0] = intl6.string(tmp(1236).t["7ymzsL"]);
          const intl7 = tmp(1236).intl;
          obj[1] = intl7.string(tmp(1236).t.SxY4IW);
          const intl8 = tmp(1236).intl;
          obj[2] = intl8.string(tmp(1236).t.FDSSia);
          obj1 = obj;
        } else {
          if (tmp9) {
            if (tmp7) {
              if (!shouldShowTiggerPawtect) {
                obj1 = { verifyTitle: null, verifyGateDescription: null, verifyAgreementButtonText: null };
                const intl = tmp(1236).intl;
                obj1[0] = intl.string(tmp(1236).t["H0SG/g"]);
                const intl2 = tmp(1236).intl;
                obj2 = { helpURL: null };
                obj2[0] = combined.getArticleURL(constants.AGE_GATE);
                obj1[1] = intl2.format(tmp(1236).t["6++3cX"], obj2);
                const obj6 = combined;
              }
            }
          }
          const obj3 = { verifyAgreementButtonText: null, verifyGateDescription: null, verifyTitle: null };
          const intl3 = tmp(1236).intl;
          obj3[0] = intl3.string(tmp(1236).t.FDSSia);
          const intl4 = tmp(1236).intl;
          const string = intl4.string;
          const t = tmp(1236).t;
          if (tmp7) {
            let stringResult = string(t.V6Gmu9);
          } else {
            stringResult = string(t["5rygLk"]);
          }
          obj3[1] = stringResult;
          const intl5 = tmp(1236).intl;
          const string2 = intl5.string;
          let xi46lg = tmp(1236).t;
          if (tmp7) {
            xi46lg = xi46lg.xi46lg;
            let string2Result = string2(xi46lg);
          } else {
            string2Result = string2(xi46lg.ZmwvDc);
          }
          obj3[2] = string2Result;
        }
        return obj1;
      }
    }
  }
  if (source === AgeGateSource.JOIN_LARGE_GUILD_UNDERAGE) {
    let MjQbfi = tmp(1236).t["u/xsK9"];
  } else {
    MjQbfi = tmp(1236).t.MjQbfi;
  }
  const intl12 = tmp(1236).intl;
  const string4 = intl12.string;
  const t3 = tmp(1236).t;
  if (isAgeVerified) {
    let string4Result = string4(t3.SAoMVJ);
  } else {
    string4Result = string4(t3.SxY4IW);
  }
  const intl13 = tmp(1236).intl;
  const string5 = intl13.string;
  const t4 = tmp(1236).t;
  if (isAgeVerified) {
    let string5Result = string5(t4.Zt4Mf4);
  } else {
    string5Result = string5(t4.FDSSia);
  }
  const obj4 = { verifyTitle: null, verifyGateDescription: null, verifyAgreementButtonText: null };
  const intl14 = tmp(1236).intl;
  obj4[0] = intl14.string(MjQbfi);
  obj4[1] = string4Result;
  obj4[2] = string5Result;
  return obj4;
};
export const shouldShowAgeGateForCurrentUser = function shouldShowAgeGateForCurrentUser() {
  const currentUser = authStore.getCurrentUser();
  if (null == currentUser) {
    return false;
  } else {
    const result = useAgeVerificationRunner.shouldShowTiggerPawtect();
    const obj = useAgeVerificationRunner;
    const obj2 = isFeatureAgeGated;
    const tmp5 = isFeatureAgeGated.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.AGE_GATED_SPACES) && result;
    return true !== currentUser.nsfwAllowed || isFeatureAgeGated.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.AGE_GATED_SPACES) && result;
  }
};
export const shouldShowAgeGateForGuildContentLevel = function shouldShowAgeGateForGuildContentLevel(arg0) {
  const currentUser = authStore.getCurrentUser();
  let flag = false;
  if (null != currentUser) {
    const result = useAgeVerificationRunner.shouldShowTiggerPawtect();
    const obj = useAgeVerificationRunner;
    const obj2 = isFeatureAgeGated;
    const tmp5 = isFeatureAgeGated.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.AGE_GATED_SPACES) && result;
    flag = true !== currentUser.nsfwAllowed || isFeatureAgeGated.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.AGE_GATED_SPACES) && result;
    const tmp6 = true !== currentUser.nsfwAllowed || isFeatureAgeGated.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.AGE_GATED_SPACES) && result;
  }
  if (flag) {
    if (null != arg0) {
      const guild = store2.getGuild(arg0);
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
  const currentUser = authStore.getCurrentUser();
  let flag = false;
  if (null != currentUser) {
    const result = useAgeVerificationRunner.shouldShowTiggerPawtect();
    const obj = useAgeVerificationRunner;
    const obj2 = isFeatureAgeGated;
    const tmp5 = isFeatureAgeGated.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.AGE_GATED_SPACES) && result;
    flag = true !== currentUser.nsfwAllowed || isFeatureAgeGated.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.AGE_GATED_SPACES) && result;
    const tmp6 = true !== currentUser.nsfwAllowed || isFeatureAgeGated.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.AGE_GATED_SPACES) && result;
  }
  let tmp7 = !flag;
  if (flag) {
    tmp7 = null == id;
  }
  let tmp8 = !tmp7;
  if (!tmp7) {
    tmp8 = isChannelContentGated(store.getChannel(id));
  }
  return tmp8;
};
export { shouldShowAgeGateForVoiceChannel };
export const maybeOpenAgeGateForVoiceChannel = function maybeOpenAgeGateForVoiceChannel(id) {
  let flag = shouldShowAgeGateForVoiceChannel(id);
  if (flag) {
    openAgeGateModal.openAgeGateModal(AgeGateSource.NSFW_VOICE_CHANNEL);
    flag = true;
    const obj = openAgeGateModal;
  }
  return flag;
};
export const maybeShowAgeGate = function maybeShowAgeGate(guildId, channelId, JOIN_LARGE_GUILD_UNDERAGE) {
  const currentUser = authStore.getCurrentUser();
  let flag = false;
  if (null != currentUser) {
    const result = useAgeVerificationRunner.shouldShowTiggerPawtect();
    const obj2 = useAgeVerificationRunner;
    const obj3 = isFeatureAgeGated;
    const tmp5 = isFeatureAgeGated.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.AGE_GATED_SPACES) && result;
    flag = true !== currentUser.nsfwAllowed || isFeatureAgeGated.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.AGE_GATED_SPACES) && result;
    const tmp6 = true !== currentUser.nsfwAllowed || isFeatureAgeGated.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.AGE_GATED_SPACES) && result;
  }
  let flag3 = false;
  if (flag) {
    flag3 = false;
    if (null != guildId) {
      const guild = store2.getGuild(guildId);
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
    openAgeGateModal.openAgeGateModal(NSFW_SERVER);
    const obj7 = openAgeGateModal;
  } else {
    const currentUser1 = obj.getCurrentUser();
    let tmp13 = null != currentUser1 && null == currentUser1.nsfwAllowed;
    if (tmp13) {
      const currentUser2 = obj.getCurrentUser();
      let flag4 = false;
      if (null != currentUser2) {
        const result1 = useAgeVerificationRunner.shouldShowTiggerPawtect();
        const obj4 = useAgeVerificationRunner;
        const obj5 = isFeatureAgeGated;
        const tmp18 = isFeatureAgeGated.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.AGE_GATED_SPACES) && result1;
        flag4 = true !== currentUser2.nsfwAllowed || isFeatureAgeGated.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.AGE_GATED_SPACES) && result1;
        const tmp19 = true !== currentUser2.nsfwAllowed || isFeatureAgeGated.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.AGE_GATED_SPACES) && result1;
      }
      let tmp21 = !flag4;
      if (flag4) {
        tmp21 = null == channelId;
      }
      let tmp22 = !tmp21;
      if (!tmp21) {
        tmp22 = isChannelContentGated(store.getChannel(channelId));
      }
      tmp13 = tmp22;
    }
    if (tmp13) {
      let NSFW_CHANNEL = NSFW_SERVER;
      if (NSFW_SERVER == null) {
        NSFW_CHANNEL = AgeGateSource.NSFW_CHANNEL;
      }
      openAgeGateModal.openAgeGateModal(NSFW_CHANNEL);
      const obj6 = openAgeGateModal;
    }
  }
};
export const isChannelOrGuildNSFW = function isChannelOrGuildNSFW(channel) {
  let tmp = null != channel;
  if (tmp) {
    let isNSFWResult = channel.isNSFW();
    if (!isNSFWResult) {
      isNSFWResult = isGuildNSFW(store2.getGuild(channel.guild_id));
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
    const result = useAgeVerificationRunner.shouldShowTiggerPawtect();
    if (tmp4) {
      let isNSFWResult = isNSFW.isNSFW();
      if (!isNSFWResult) {
        isNSFWResult = isGuildNSFW(store2.getGuild(isNSFW.guild_id));
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
    const currentUser = authStore.getCurrentUser();
    if (currentUser != null) {
      const nsfwAllowed = currentUser.nsfwAllowed;
    }
    let tmp3 = null != channel;
    if (tmp3) {
      let isNSFWResult = channel.isNSFW();
      if (!isNSFWResult) {
        isNSFWResult = isGuildNSFW(store2.getGuild(channel.guild_id));
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
  const currentUser = authStore.getCurrentUser();
  return null != currentUser && null == currentUser.nsfwAllowed;
};
export const shouldAgeVerifyForSettingsToggles = function shouldAgeVerifyForSettingsToggles() {
  let isFeatureAgeGatedResult = isFeatureAgeGated.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.COMMANDS_TOGGLE);
  const obj = isFeatureAgeGated;
  if (isFeatureAgeGatedResult) {
    isFeatureAgeGatedResult = obj2.shouldShowTiggerPawtect();
  }
  return isFeatureAgeGatedResult;
};
export const useShouldAgeVerifyForSettingsToggles = function useShouldAgeVerifyForSettingsToggles() {
  let isFeatureAgeGated = isFeatureAgeGated.useIsFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.COMMANDS_TOGGLE);
  const obj = isFeatureAgeGated;
  if (isFeatureAgeGated) {
    isFeatureAgeGated = obj2.useShouldShowTiggerPawtect();
  }
  return isFeatureAgeGated;
};