// === Module 16179: OnboardingV2Utils ===

// Module 16179 (OnboardingV2Utils)
import Constants from "Constants" /* 1085 */;
import GuildRecord from "GuildRecord" /* 2070 */;
import GuildRoleSubscriptionSettingUtils from "GuildRoleSubscriptionSettingUtils" /* 6763 */;
import GuildStore from "GuildStore" /* 2074 */;
import UserStore from "UserStore" /* 1377 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const isGuildOwner = GuildRecord.isGuildOwner;
let items = [, , , , ];
({ CREATOR_MONETIZABLE_PROVISIONAL: arr[0], CREATOR_MONETIZABLE: arr[1], CREATOR_MONETIZABLE_WHITEGLOVE: arr[2], CREATOR_MONETIZABLE_DISABLED: arr[3], CREATOR_MONETIZABLE_RESTRICTED: arr[4] } = Constants.GuildFeatures);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let currentUser;
  let first;
  let stateFromStores;
  let tmp8;
  let tmp9;
  _require = arg0;
  const obj = require("react");
  const cResult = obj.c(10);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    items = [GuildStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    class S {
      constructor() {
        return GuildStore.getGuild(closure_0);
      }
    }
    cResult[1] = arg0;
    cResult[2] = S;
  } else {
    class S {
      constructor() {
        return GuildStore.getGuild(closure_0);
      }
    }
  }
  const tmpResult = require("get initialized");
  stateFromStores = tmpResult.useStateFromStores(first, S);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    class S {
      constructor() {
        return GuildStore.getGuild(closure_0);
      }
    }
    const items1 = [UserStore];
    const fn = function b() {
      return currentUser.getCurrentUser();
    };
    cResult[3] = items1;
    cResult[4] = fn;
    tmp9 = fn;
    tmp8 = items1;
  } else {
    class S {
      constructor() {
        return GuildStore.getGuild(closure_0);
      }
    }
    tmp9 = cResult[4];
  }
  const tmpResult3 = require("get initialized");
  const stateFromStores1 = tmpResult3.useStateFromStores(tmp8, tmp9);
  const tmpResult4 = require("GuildRoleSubscriptionSettingUtils");
  const guildRoleSubscriptionSettingsVisibility = tmpResult4.useGuildRoleSubscriptionSettingsVisibility(stateFromStores);
  if (null == stateFromStores) {
    class S {
      constructor() {
        return GuildStore.getGuild(closure_0);
      }
    }
    return false;
  } else {
    class S {
      constructor() {
        return GuildStore.getGuild(closure_0);
      }
    }
    cResult[5] = stateFromStores;
    cResult[6] = stateFromStores1;
    cResult[7] = isGuildOwner(stateFromStores, stateFromStores1);
    const tmp14 = isGuildOwner(stateFromStores, stateFromStores1);
  }
}) : ((arg0) => {
  let closure_0;
  let currentUser;
  let stateFromStores;
  _require = arg0;
  items = [GuildStore];
  const obj = require("get initialized");
  stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(closure_0));
  const items1 = [UserStore];
  const obj2 = require("get initialized");
  const stateFromStores1 = obj2.useStateFromStores(items1, () => currentUser.getCurrentUser());
  const obj3 = require("GuildRoleSubscriptionSettingUtils");
  const guildRoleSubscriptionSettingsVisibility = obj3.useGuildRoleSubscriptionSettingsVisibility(stateFromStores);
  if (null == stateFromStores) {
    return false;
  } else {
    let tmp5 = guildRoleSubscriptionSettingsVisibility === tmp4;
    const tmp7 = isGuildOwner(stateFromStores, stateFromStores1);
    const everyResult = items.every((item) => {
      const features = stateFromStores.features;
      return !features.has(item);
    });
    if (tmp5) {
      tmp5 = tmp7;
    }
    if (tmp5) {
      tmp5 = everyResult;
    }
    return tmp5;
  }
});
const result = size.fileFinishedImporting("modules/creator_monetization_eligibility/feature_education/OnboardingV2Utils.tsx");

export const useCanSeeCreatorMonetizationOnboardingV2Upsell = tmp2;
export const canSeeCreatorMonetizationOnboardingV2Upsell = function canSeeCreatorMonetizationOnboardingV2Upsell(arg0) {
  const guild = GuildStore.getGuild(arg0);
  if (null == guild) {
    return false;
  } else {
    const currentUser = UserStore.getCurrentUser();
    if (null == currentUser) {
      return false;
    } else {
      const obj = GuildRoleSubscriptionSettingUtils;
      const guildRoleSubscriptionSettingsVisibility = obj.getGuildRoleSubscriptionSettingsVisibility(guild);
      let tmp5 = guildRoleSubscriptionSettingsVisibility === GuildRoleSubscriptionSettingUtils.GuildRoleSubscriptionSettingsVisibility.VISIBLE;
      const tmp7 = isGuildOwner(guild, currentUser);
      const everyResult = items.every((item) => {
        const features = guild.features;
        return !features.has(item);
      });
      if (tmp5) {
        tmp5 = tmp7;
      }
      if (tmp5) {
        tmp5 = everyResult;
      }
      return tmp5;
    }
  }
};