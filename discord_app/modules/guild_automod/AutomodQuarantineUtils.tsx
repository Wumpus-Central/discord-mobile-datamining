// === Module 11483: AutomodQuarantineUtils ===

// Module 11483 (AutomodQuarantineUtils)
import util from "util" /* 1126 */;
import AutomodPermissionUtils from "AutomodPermissionUtils" /* 4515 */;
import openUserSettings2 from "openUserSettings" /* 6885 */;
import GuildIdentityActionCreators from "GuildIdentityActionCreators" /* 9419 */;
import noop from "module_19" /* 19 */;
import ProfileCustomizationNavigationStore from "ProfileCustomizationNavigationStore" /* 9417 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import GuildMemberStore from "GuildMemberStore" /* 2112 */;
import GuildStore from "GuildStore" /* 2074 */;
import PermissionStore from "PermissionStore" /* 4509 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4699 */;

require = fn;
const Constants = fn(1085);
({ Permissions: closure_9, UserSettingsSections: c10 } = Constants);
const GuildMemberFlags = fn(4495).GuildMemberFlags;
const constants3 = fn(1095).ProfileCustomizationSubsection;
fn(558);
let ReactCompilerGating = fn(558);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  _require = arg0;
  const cResult = require("c").c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AuthenticationStore, GuildMemberStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function s() {
      if (null == closure_0) {
        return false;
      } else {
        const id = AuthenticationStore.getId();
        return AutomodPermissionUtils.hasAutomodQuarantinedProfile(GuildMemberStore.getMember(tmp, id));
      }
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp8 = items1;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  const obj = require("c");
  return require("useStateFromStores").useStateFromStores(first, tmp7, tmp8);
}) : ((arg0) => {
  _require = arg0;
  const items = [AuthenticationStore, GuildMemberStore];
  const items1 = [arg0];
  return require("useStateFromStores").useStateFromStores(items, () => {
    if (null == closure_0) {
      return false;
    } else {
      const id = AuthenticationStore.getId();
      return AutomodPermissionUtils.hasAutomodQuarantinedProfile(GuildMemberStore.getMember(tmp, id));
    }
  }, items1);
});
ReactCompilerGating = fn(558);
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  _require = arg0;
  const cResult = require("c").c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [AuthenticationStore, GuildMemberStore, SelectedGuildStore, GuildStore];
    cResult[0] = items;
    let first = items;
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
      guild = GuildStore.getGuild(guildId);
      if (null != guild) {
        if (null != guildId) {
          const member = GuildMemberStore.getMember(guildId, AuthenticationStore.getId());
          let flags;
          if (member != null) {
            flags = member.flags;
          }
          const automodQuarantinedProfileFlags = AutomodPermissionUtils.getAutomodQuarantinedProfileFlags(flags);
          if (0 !== automodQuarantinedProfileFlags.size) {
            if (!automodQuarantinedProfileFlags.has(GuildMemberFlags.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME)) {
              if (automodQuarantinedProfileFlags.has(GuildMemberFlags.AUTOMOD_QUARANTINED_BIO)) {
                const intl3 = util.intl;
                const items = [intl3.string(util.t.dZh1vz)];
                obj.bio = items;
              }
            } else {
              if (null == closure_0) {
                const intl2 = util.intl;
                let str = guild.name;
                if (str == null) {
                  str = "";
                }
                const obj2 = { guildName: str };
                guild = [intl2.formatToPlainString(util.t.WBUh3O, obj2)];
                let items1 = guild;
              } else {
                const intl = util.intl;
                items1 = [intl.string(util.t.EPZCrM)];
              }
              obj.nick = items1;
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
    let tmp10 = items1;
    let tmp9 = fn;
  } else {
    tmp9 = cResult[2];
    tmp10 = cResult[3];
  }
  let obj = require("c");
  return require("useStateFromStores").useStateFromStoresObject(first, tmp9, tmp10);
}) : ((arg0) => {
  _require = arg0;
  let items = [AuthenticationStore, GuildMemberStore, SelectedGuildStore, GuildStore];
  let items1 = [arg0];
  return require("useStateFromStores").useStateFromStoresObject(items, () => {
    let guildId = closure_0;
    if (closure_0 == null) {
      guildId = SelectedGuildStore.getGuildId();
    }
    const obj = { nick: "Array", bio: "Set" };
    guild = GuildStore.getGuild(guildId);
    if (null != guild) {
      if (null != guildId) {
        const member = GuildMemberStore.getMember(guildId, AuthenticationStore.getId());
        let flags;
        if (member != null) {
          flags = member.flags;
        }
        const automodQuarantinedProfileFlags = AutomodPermissionUtils.getAutomodQuarantinedProfileFlags(flags);
        if (0 !== automodQuarantinedProfileFlags.size) {
          if (!automodQuarantinedProfileFlags.has(GuildMemberFlags.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME)) {
            if (automodQuarantinedProfileFlags.has(GuildMemberFlags.AUTOMOD_QUARANTINED_BIO)) {
              const intl3 = util.intl;
              const items = [intl3.string(util.t.dZh1vz)];
              obj.bio = items;
            }
          } else {
            if (null == closure_0) {
              const intl2 = util.intl;
              let str = guild.name;
              if (str == null) {
                str = "";
              }
              const obj2 = { guildName: str };
              guild = [intl2.formatToPlainString(util.t.WBUh3O, obj2)];
              let items1 = guild;
            } else {
              const intl = util.intl;
              items1 = [intl.string(util.t.EPZCrM)];
            }
            obj.nick = items1;
          }
        }
        return obj;
      }
    }
    return obj;
  }, items1);
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_automod/AutomodQuarantineUtils.tsx");

export const useCurrentUserHasAutomodQuarantinedProfile = tmp3;
export const useGuildAutomodProfileQuarantineErrors = tmp4;
export const useOpenFixQuarantinedProfileModal = ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  const cResult = guildId(scrollPosition[11]).c(17);
  guildId = guildId.guildId;
  scrollPosition = guildId.scrollPosition;
  const analyticsLocations = guildId.analyticsLocations;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore];
    cResult[0] = items;
    let first = items;
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
    let tmp7 = items1;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  let obj = guildId(scrollPosition[11]);
  const stateFromStores = guildId(scrollPosition[13]).useStateFromStores(first, tmp6, tmp7);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [PermissionStore];
    cResult[4] = items2;
    let tmp9 = items2;
  } else {
    tmp9 = cResult[4];
  }
  if (cResult[5] !== stateFromStores) {
    const fn2 = function b() {
      let canResult = null != stateFromStores;
      if (canResult) {
        canResult = PermissionStore.can(constants.CHANGE_NICKNAME, tmp);
      }
      return canResult;
    };
    const items3 = [stateFromStores];
    cResult[5] = stateFromStores;
    cResult[6] = fn2;
    cResult[7] = items3;
    let tmp12 = items3;
    let tmp11 = fn2;
  } else {
    tmp11 = cResult[6];
    tmp12 = cResult[7];
  }
  const tmpResult = guildId(scrollPosition[13]);
  const stateFromStores1 = guildId(scrollPosition[13]).useStateFromStores(tmp9, tmp11, tmp12);
  const tmpResult3 = guildId(scrollPosition[13]);
  const isEligibleForUserProfileWYSIWYGEditing = guildId(scrollPosition[15]).useIsEligibleForUserProfileWYSIWYGEditing("AutomodQuarantineUtils");
  if (cResult[8] === analyticsLocations) {
    if (cResult[9] === stateFromStores1) {
      if (cResult[10] === stateFromStores) {
        if (cResult[11] === isEligibleForUserProfileWYSIWYGEditing) {
          if (cResult[12] === scrollPosition) {
            let tmp15 = cResult[13];
          }
          if (cResult[14] === stateFromStores1) {
            if (cResult[15] === tmp15) {
              let tmp16 = cResult[16];
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
      setState = closure_2;
      if (null == closure_2) {
        return;
      } else {
        tmp10 = UserSettingsSections;
        openUserSettings = closure_12.GUILD;
        tmp12 = closure_3;
        if (closure_3) {
          tmp = closure_0;
          tmp2 = closure_1;
          obj = closure_0(closure_1[16]);
          guildIdentitySettings = obj.initGuildIdentitySettings(setState.id);
          USER_PROFILE = openUserSettings;
        } else {
          USER_PROFILE = tmp11.USER_PROFILE;
        }
        tmp4 = closure_0;
        tmp5 = closure_1;
        openUserSettings = closure_0(closure_1[17]).openUserSettings;
        tmp6 = closure_3;
        setState = closure_3.setState;
        obj1 = { subsection: null, scrollPosition: null };
        obj1.subsection = USER_PROFILE;
        tmp7 = scrollPosition;
        obj1.scrollPosition = scrollPosition;
        setStateResult = setState(obj1);
        obj4 = { screen: null };
        obj4.screen = UserSettingsSections.PROFILE_CUSTOMIZATION;
        openUserSettingsResult = openUserSettings(obj4);
      }
      return;
    }
  }
  cResult[8] = analyticsLocations;
  cResult[9] = stateFromStores1;
  cResult[10] = stateFromStores;
  cResult[11] = isEligibleForUserProfileWYSIWYGEditing;
  cResult[12] = scrollPosition;
  cResult[13] = P;
  tmp15 = P;
  const tmpResult4 = guildId(scrollPosition[15]);
}) : ((guildId) => {
  guildId = guildId.guildId;
  const scrollPosition = guildId.scrollPosition;
  const items = [GuildStore];
  const items1 = [guildId];
  const stateFromStores = guildId(scrollPosition[13]).useStateFromStores(items, () => GuildStore.getGuild(guildId), items1);
  let obj = guildId(scrollPosition[13]);
  const items2 = [PermissionStore];
  const items3 = [stateFromStores];
  const stateFromStores1 = guildId(scrollPosition[13]).useStateFromStores(items2, () => {
    let canResult = null != stateFromStores;
    if (canResult) {
      canResult = PermissionStore.can(constants.CHANGE_NICKNAME, tmp);
    }
    return canResult;
  }, items3);
  let obj2 = guildId(scrollPosition[13]);
  const items4 = [stateFromStores1, scrollPosition, guildId.analyticsLocations, stateFromStores, guildId(scrollPosition[15]).useIsEligibleForUserProfileWYSIWYGEditing("AutomodQuarantineUtils")];
  const items5 = [
    stateFromStores.useCallback(() => {
      let setState = stateFromStores;
      if (null != stateFromStores) {
        let openUserSettings = constants.GUILD;
        if (stateFromStores1) {
          const guildIdentitySettings = GuildIdentityActionCreators.initGuildIdentitySettings(setState.id);
          let USER_PROFILE = openUserSettings;
        } else {
          USER_PROFILE = tmp11.USER_PROFILE;
        }
        openUserSettings = openUserSettings2.openUserSettings;
        setState = ProfileCustomizationNavigationStore.setState;
        const obj2 = { subsection: USER_PROFILE, scrollPosition };
        setState(obj2);
        const obj3 = { screen: constants2.PROFILE_CUSTOMIZATION };
        openUserSettings(obj3);
      }
    }, items4),
    stateFromStores1
  ];
  return items5;
});