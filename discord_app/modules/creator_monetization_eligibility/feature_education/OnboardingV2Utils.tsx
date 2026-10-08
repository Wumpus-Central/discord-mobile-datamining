// discord_app/modules/creator_monetization_eligibility/feature_education/OnboardingV2Utils.tsx
import Constants from "../../../Constants.tsx";
import GuildRecord from "../../../records/GuildRecord.tsx";
import GuildRoleSubscriptionSettingUtils from "../../guild_role_subscriptions/feature_gating/GuildRoleSubscriptionSettingUtils.tsx";
import GuildStore from "../../../stores/GuildStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;

const isGuildOwner = GuildRecord.isGuildOwner;
let items = [, , , ,];
({
  CREATOR_MONETIZABLE_PROVISIONAL: arr[0],
  CREATOR_MONETIZABLE: arr[1],
  CREATOR_MONETIZABLE_WHITEGLOVE: arr[2],
  CREATOR_MONETIZABLE_DISABLED: arr[3],
  CREATOR_MONETIZABLE_RESTRICTED: arr[4],
} = Constants.GuildFeatures);
const result = size.fileFinishedImporting(
  "modules/creator_monetization_eligibility/feature_education/OnboardingV2Utils.tsx",
);

export const useCanSeeCreatorMonetizationOnboardingV2Upsell = ReactCompilerGating.isReactCompilerEnabled()
  ? function useCanSeeCreatorMonetizationOnboardingV2Upsell(arg0) {
      _require = arg0;
      const cResult = require("c").c(10);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        items = [GuildStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        class S {
          constructor() {
            return closure_3.getGuild(closure_0);
          }
        }
        cResult[1] = arg0;
        cResult[2] = S;
      } else {
        class S {
          constructor() {
            return closure_3.getGuild(closure_0);
          }
        }
      }
      const obj = require("c");
      stateFromStores = require("initialize").useStateFromStores(first, S);
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        class S {
          constructor() {
            return closure_3.getGuild(closure_0);
          }
        }
        const items1 = [UserStore];
        const fn = function b() {
          return currentUser.getCurrentUser();
        };
        cResult[3] = items1;
        cResult[4] = fn;
        let tmp9 = fn;
        const tmp8 = items1;
      } else {
        class S {
          constructor() {
            return closure_3.getGuild(closure_0);
          }
        }
        tmp9 = cResult[4];
      }
      const tmpResult = require("initialize");
      const stateFromStores1 = require("initialize").useStateFromStores(tmp8, tmp9);
      const tmpResult3 = require("initialize");
      const guildRoleSubscriptionSettingsVisibility =
        require("GuildRoleSubscriptionSettingUtils").useGuildRoleSubscriptionSettingsVisibility(stateFromStores);
      if (null == stateFromStores) {
        class S {
          constructor() {
            return closure_3.getGuild(closure_0);
          }
        }
        return false;
      } else {
        class S {
          constructor() {
            return closure_3.getGuild(closure_0);
          }
        }
        const tmp14 = isGuildOwner(stateFromStores, stateFromStores1);
        cResult[5] = stateFromStores;
        cResult[6] = stateFromStores1;
        cResult[7] = tmp14;
      }
      const tmpResult4 = require("GuildRoleSubscriptionSettingUtils");
    }
  : function useCanSeeCreatorMonetizationOnboardingV2Upsell(arg0) {
      _require = arg0;
      items = [GuildStore];
      stateFromStores = require("initialize").useStateFromStores(items, () => GuildStore.getGuild(closure_0));
      const obj = require("initialize");
      const items1 = [UserStore];
      const stateFromStores1 = require("initialize").useStateFromStores(items1, () => currentUser.getCurrentUser());
      const obj2 = require("initialize");
      const guildRoleSubscriptionSettingsVisibility =
        require("GuildRoleSubscriptionSettingUtils").useGuildRoleSubscriptionSettingsVisibility(stateFromStores);
      if (null == stateFromStores) {
        return false;
      } else {
        let tmp5 = guildRoleSubscriptionSettingsVisibility === tmp4;
        const tmp7 = isGuildOwner(stateFromStores, stateFromStores1);
        if (tmp5) {
          tmp5 = tmp7;
        }
        if (tmp5) {
          tmp5 = everyResult;
        }
        return tmp5;
      }
      const obj3 = require("GuildRoleSubscriptionSettingUtils");
    };
export const canSeeCreatorMonetizationOnboardingV2Upsell = function canSeeCreatorMonetizationOnboardingV2Upsell(arg0) {
  guild = GuildStore.getGuild(arg0);
  if (null == guild) {
    return false;
  } else {
    const currentUser = UserStore.getCurrentUser();
    if (null == currentUser) {
      return false;
    } else {
      const guildRoleSubscriptionSettingsVisibility =
        GuildRoleSubscriptionSettingUtils.getGuildRoleSubscriptionSettingsVisibility(guild);
      let tmp5 =
        guildRoleSubscriptionSettingsVisibility ===
        GuildRoleSubscriptionSettingUtils.GuildRoleSubscriptionSettingsVisibility.VISIBLE;
      const tmp7 = isGuildOwner(guild, currentUser);
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
