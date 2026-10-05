// === Module 11483: AutomodQuarantineUtils ===

// Module 11483 (AutomodQuarantineUtils)
import UserSettingsConstants from "UserSettingsConstants" /* 1095 */;
import intl4 from "intl" /* 1126 */;
import GuildMemberConstants from "GuildMemberConstants" /* 4495 */;
import AutomodPermissionUtils from "AutomodPermissionUtils" /* 4515 */;
import openUserSettings2 from "openUserSettings" /* 6885 */;
import GuildIdentityActionCreators from "GuildIdentityActionCreators" /* 9419 */;
import react from "react" /* 19 */;
import ProfileCustomizationNavigationStore from "ProfileCustomizationNavigationStore" /* 9417 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import GuildMemberStore from "GuildMemberStore" /* 2112 */;
import GuildStore from "GuildStore" /* 2074 */;
import PermissionStore from "PermissionStore" /* 4509 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4699 */;
import Constants from "Constants" /* 1085 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let c10;
let c9;
({ Permissions: c9, UserSettingsSections: c10 } = Constants);
const GuildMemberFlags = GuildMemberConstants.GuildMemberFlags;
let closure_12 = UserSettingsConstants.ProfileCustomizationSubsection;
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let first;
  let tmp7;
  let tmp8;
  _require = arg0;
  const tmp = _require;
  let obj = require("react");
  const cResult = obj.c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AuthenticationStore, GuildMemberStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function s() {
      if (null == closure_0) {
        return false;
      } else {
        const id = AuthenticationStore.getId();
        const obj = AutomodPermissionUtils;
        return obj.hasAutomodQuarantinedProfile(GuildMemberStore.getMember(tmp, id));
      }
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp8 = items1;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  const tmpResult = tmp(573);
  return tmpResult.useStateFromStores(first, tmp7, tmp8);
}) : ((arg0) => {
  let closure_0;
  _require = arg0;
  let obj = require("useStateFromStores");
  const items = [AuthenticationStore, GuildMemberStore];
  const items1 = [arg0];
  return obj.useStateFromStores(items, () => {
    if (null == closure_0) {
      return false;
    } else {
      const id = AuthenticationStore.getId();
      const obj = AutomodPermissionUtils;
      return obj.hasAutomodQuarantinedProfile(GuildMemberStore.getMember(tmp, id));
    }
  }, items1);
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let first;
  let tmp10;
  let tmp9;
  _require = arg0;
  let obj = require("react");
  const cResult = obj.c(4);
  const tmp = _require;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [AuthenticationStore, GuildMemberStore, SelectedGuildStore, GuildStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function u() {
      let guildId = closure_0;
      if (closure_0 == null) {
        guildId = SelectedGuildStore.getGuildId();
      }
      const obj = { nick: "Array", bio: "Set" };
      const guild = GuildStore.getGuild(guildId);
      if (null != guild) {
        if (null != guildId) {
          const member = GuildMemberStore.getMember(guildId, AuthenticationStore.getId());
          let flags;
          const getAutomodQuarantinedProfileFlags = AutomodPermissionUtils.getAutomodQuarantinedProfileFlags;
          AutomodPermissionUtils;
          if (member != null) {
            flags = member.flags;
          }
          const automodQuarantinedProfileFlags = getAutomodQuarantinedProfileFlags(flags);
          if (0 !== automodQuarantinedProfileFlags.size) {
            if (automodQuarantinedProfileFlags.has(GuildMemberFlags.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME)) {
              let items1;
              if (null == closure_0) {
                const intl2 = intl4.intl;
                const formatToPlainString = intl2.formatToPlainString;
                let str = guild.name;
                const WBUh3O = intl4.t.WBUh3O;
                if (str == null) {
                  str = "";
                }
                const obj2 = { guildName: str };
                const items = [formatToPlainString(WBUh3O, obj2)];
                items1 = items;
              } else {
                const intl = intl4.intl;
                items1 = [intl.string(intl4.t.EPZCrM)];
              }
              obj.nick = items1;
            }
            if (automodQuarantinedProfileFlags.has(GuildMemberFlags.AUTOMOD_QUARANTINED_BIO)) {
              const intl3 = intl4.intl;
              const items2 = [intl3.string(intl4.t.dZh1vz)];
              obj.bio = items2;
            }
          }
          return obj;
        }
      }
      return obj;
    };
    let items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp10 = items1;
    tmp9 = fn;
  } else {
    tmp9 = cResult[2];
    tmp10 = cResult[3];
  }
  const tmpResult = tmp(573);
  return tmpResult.useStateFromStoresObject(first, tmp9, tmp10);
}) : ((arg0) => {
  let closure_0;
  _require = arg0;
  let obj = require("useStateFromStores");
  let items = [AuthenticationStore, GuildMemberStore, SelectedGuildStore, GuildStore];
  let items1 = [arg0];
  return obj.useStateFromStoresObject(items, () => {
    let guildId = closure_0;
    if (closure_0 == null) {
      guildId = SelectedGuildStore.getGuildId();
    }
    const obj = { nick: "Array", bio: "Set" };
    const guild = GuildStore.getGuild(guildId);
    if (null != guild) {
      if (null != guildId) {
        const member = GuildMemberStore.getMember(guildId, AuthenticationStore.getId());
        let flags;
        const getAutomodQuarantinedProfileFlags = AutomodPermissionUtils.getAutomodQuarantinedProfileFlags;
        AutomodPermissionUtils;
        if (member != null) {
          flags = member.flags;
        }
        const automodQuarantinedProfileFlags = getAutomodQuarantinedProfileFlags(flags);
        if (0 !== automodQuarantinedProfileFlags.size) {
          if (automodQuarantinedProfileFlags.has(GuildMemberFlags.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME)) {
            let items1;
            if (null == closure_0) {
              const intl2 = intl4.intl;
              const formatToPlainString = intl2.formatToPlainString;
              let str = guild.name;
              const WBUh3O = intl4.t.WBUh3O;
              if (str == null) {
                str = "";
              }
              const obj2 = { guildName: str };
              const items = [formatToPlainString(WBUh3O, obj2)];
              items1 = items;
            } else {
              const intl = intl4.intl;
              items1 = [intl.string(intl4.t.EPZCrM)];
            }
            obj.nick = items1;
          }
          if (automodQuarantinedProfileFlags.has(GuildMemberFlags.AUTOMOD_QUARANTINED_BIO)) {
            const intl3 = intl4.intl;
            const items2 = [intl3.string(intl4.t.dZh1vz)];
            obj.bio = items2;
          }
        }
        return obj;
      }
    }
    return obj;
  }, items1);
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  let first;
  let scrollPosition;
  let tmp11;
  let tmp12;
  let tmp6;
  let tmp7;
  let tmp9;
  const tmp = guildId;
  let obj = guildId(scrollPosition[11]);
  const cResult = obj.c(17);
  guildId = guildId.guildId;
  scrollPosition = guildId.scrollPosition;
  const analyticsLocations = guildId.analyticsLocations;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guildId) {
    const fn = function l() {
      return GuildStore.getGuild(guildId);
    };
    const items1 = [guildId];
    cResult[1] = guildId;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp7 = items1;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const tmpResult = tmp(scrollPosition[13]);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6, tmp7);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [PermissionStore];
    cResult[4] = items2;
    tmp9 = items2;
  } else {
    tmp9 = cResult[4];
  }
  if (cResult[5] !== stateFromStores) {
    const fn2 = function b() {
      const canResult = null != stateFromStores && PermissionStore.can(constants.CHANGE_NICKNAME, tmp);
      return canResult;
    };
    const items3 = [stateFromStores];
    cResult[5] = stateFromStores;
    cResult[6] = fn2;
    cResult[7] = items3;
    tmp12 = items3;
    tmp11 = fn2;
  } else {
    tmp11 = cResult[6];
    tmp12 = cResult[7];
  }
  const tmpResult3 = tmp(scrollPosition[13]);
  const stateFromStores1 = tmpResult3.useStateFromStores(tmp9, tmp11, tmp12);
  const tmpResult4 = tmp(scrollPosition[15]);
  const isEligibleForUserProfileWYSIWYGEditing = tmpResult4.useIsEligibleForUserProfileWYSIWYGEditing("AutomodQuarantineUtils");
  if (cResult[8] === analyticsLocations) {
    if (cResult[9] === stateFromStores1) {
      if (cResult[10] === stateFromStores) {
        if (cResult[11] === isEligibleForUserProfileWYSIWYGEditing) {
          let tmp15;
          if (cResult[12] === scrollPosition) {
            tmp15 = cResult[13];
          }
          if (cResult[14] === stateFromStores1) {
            let tmp16;
            if (cResult[15] === tmp15) {
              tmp16 = cResult[16];
            }
            return tmp16;
          }
          const items4 = [tmp15, stateFromStores1];
          cResult[14] = stateFromStores1;
          cResult[15] = tmp15;
          cResult[16] = items4;
          tmp16 = items4;
        }
      }
    }
  }
  class P {
    constructor() {
      if (null != stateFromStores) {
        let USER_PROFILE;
        const PROFILE_CUSTOMIZATION = constants2.PROFILE_CUSTOMIZATION;
        if (stateFromStores1) {
          const obj = GuildIdentityActionCreators;
          const guildIdentitySettings = obj.initGuildIdentitySettings(tmp.id);
          USER_PROFILE = tmp13;
        } else {
          USER_PROFILE = tmp12.USER_PROFILE;
        }
        const obj2 = { subsection: USER_PROFILE, scrollPosition };
        const openUserSettings = openUserSettings2.openUserSettings;
        ProfileCustomizationNavigationStore.setState(obj2);
        const obj3 = { screen: PROFILE_CUSTOMIZATION };
        openUserSettings(obj3);
      }
    }
  }
  cResult[8] = analyticsLocations;
  cResult[9] = stateFromStores1;
  cResult[10] = stateFromStores;
  cResult[11] = isEligibleForUserProfileWYSIWYGEditing;
  cResult[12] = scrollPosition;
  cResult[13] = P;
  tmp15 = P;
}) : ((guildId) => {
  guildId = guildId.guildId;
  const scrollPosition = guildId.scrollPosition;
  const analyticsLocations = guildId.analyticsLocations;
  let obj = guildId(scrollPosition[13]);
  const items = [GuildStore];
  const items1 = [guildId];
  const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(guildId), items1);
  let obj2 = guildId(scrollPosition[13]);
  const items2 = [PermissionStore];
  const items3 = [stateFromStores];
  const stateFromStores1 = obj2.useStateFromStores(items2, () => {
    const canResult = null != stateFromStores && PermissionStore.can(constants.CHANGE_NICKNAME, tmp);
    return canResult;
  }, items3);
  let obj3 = guildId(scrollPosition[15]);
  const items4 = [stateFromStores1, scrollPosition, analyticsLocations, stateFromStores, obj3.useIsEligibleForUserProfileWYSIWYGEditing("AutomodQuarantineUtils")];
  const items5 = [
    stateFromStores.useCallback(() => {
      if (null != stateFromStores) {
        let USER_PROFILE;
        const PROFILE_CUSTOMIZATION = constants2.PROFILE_CUSTOMIZATION;
        if (stateFromStores1) {
          const obj = GuildIdentityActionCreators;
          const guildIdentitySettings = obj.initGuildIdentitySettings(tmp.id);
          USER_PROFILE = tmp13;
        } else {
          USER_PROFILE = tmp12.USER_PROFILE;
        }
        const obj2 = { subsection: USER_PROFILE, scrollPosition };
        const openUserSettings = openUserSettings2.openUserSettings;
        ProfileCustomizationNavigationStore.setState(obj2);
        const obj3 = { screen: PROFILE_CUSTOMIZATION };
        openUserSettings(obj3);
      }
    }, items4),
    stateFromStores1
  ];
  return items5;
});
const result = size.fileFinishedImporting("modules/guild_automod/AutomodQuarantineUtils.tsx");

export const useCurrentUserHasAutomodQuarantinedProfile = tmp3;
export const useGuildAutomodProfileQuarantineErrors = tmp4;
export const useOpenFixQuarantinedProfileModal = tmp5;