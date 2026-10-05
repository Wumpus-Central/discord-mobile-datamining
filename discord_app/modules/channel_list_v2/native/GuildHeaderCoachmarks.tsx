// discord_app/modules/channel_list_v2/native/GuildHeaderCoachmarks.tsx
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import Constants from "../../../Constants.tsx";
import dismissible_content from "../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import DismissibleContentConstants from "../../dismissible_content/DismissibleContentConstants.tsx";
import useBoostToUnlockFeaturedPowerupDefault from "../../premium/powerups/hooks/useBoostToUnlockFeaturedPowerup.tsx";
import useHasAllocateBoostPermissionDefault from "../../premium/powerups/hooks/useHasAllocateBoostPermission.tsx";
import useShouldShowGuildThemeMemberCoachmarkDefault from "../../premium/powerups/hooks/useShouldShowGuildThemeMemberCoachmark.tsx";
import useGuildThemeNuxTriggerDefault from "../../guild_themes/native/useGuildThemeNuxTrigger.tsx";
import useIsCurrentUserEligibleForPowerupUpsellsDefault from "../../premium/powerups/hooks/useIsCurrentUserEligibleForPowerupUpsells.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../_runtime/00019_react.js";
import PermissionStore from "../../../stores/PermissionStore.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let dependencyMap;

const Permissions = Constants.Permissions;
const constants = DismissibleContentConstants.DismissibleContentGroupName;
const jsx = Fragment.jsx;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let first;
      let guild;
      let targetRef;
      let tmp7;
      const obj = guild(576);
      const cResult = obj.c(21);
      ({ targetRef, guild } = arg0);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [PermissionStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== guild) {
        class O {
          constructor() {
            return closure_5.can(Permissions.MANAGE_GUILD, guild);
          }
        }
        const items1 = [guild];
        cResult[1] = guild;
        cResult[2] = O;
        cResult[3] = items1;
        tmp7 = items1;
      } else {
        class O {
          constructor() {
            return closure_5.can(Permissions.MANAGE_GUILD, guild);
          }
        }
        tmp7 = cResult[3];
      }
      const tmpResult = guild(504);
      const stateFromStores = tmpResult.useStateFromStores(first, O, tmp7);
      const tmp9 = useShouldShowGuildThemeMemberCoachmarkDefault(guild.id);
      useGuildThemeNuxTriggerDefault(guild.id);
      useHasAllocateBoostPermissionDefault(guild.id);
      useIsCurrentUserEligibleForPowerupUpsellsDefault();
      useBoostToUnlockFeaturedPowerupDefault(guild.id);
      if (cResult[4] === stateFromStores) {
        class O {
          constructor() {
            return closure_5.can(Permissions.MANAGE_GUILD, guild);
          }
        }
      }
      const items2 = [];
      const tmp14 = stateFromStores && !guild.premiumProgressBarEnabled;
      if (tmp14) {
        class O {
          constructor() {
            return closure_5.can(Permissions.MANAGE_GUILD, guild);
          }
        }
        tmp15(guild(2036).DismissibleContent.BOOST_PROGRESS_BAR_MOBILE_COACHMARK);
      }
      if (tmp9) {
        class O {
          constructor() {
            return closure_5.can(Permissions.MANAGE_GUILD, guild);
          }
        }
        tmp17(guild(2036).DismissibleContent.GUILD_THEME_MEMBER_COACHMARK);
      }
      cResult[4] = stateFromStores;
      cResult[5] = guild.premiumProgressBarEnabled;
      cResult[6] = tmp9;
      cResult[7] = items2;
    }
  : (arg0) => {
      let closure_2;
      let first;
      let guild;
      let targetRef;
      let tmp15;
      let tmp16;
      ({ targetRef, guild } = arg0);
      let items = [PermissionStore];
      const items1 = [guild];
      const obj = guild(504);
      const stateFromStores = obj.useStateFromStores(
        items,
        () => PermissionStore.can(Permissions.MANAGE_GUILD, guild),
        items1,
      );
      const tmp5 = stateFromStores(16082)(guild.id);
      dependencyMap = tmp5;
      stateFromStores(16084)(guild.id);
      const tmp7 = stateFromStores(12170)(guild.id);
      const tmp8 = stateFromStores(16091)();
      const tmp9 = stateFromStores(12163)(guild.id);
      const items2 = [stateFromStores, guild.premiumProgressBarEnabled, tmp5];
      const tmp10 = stateFromStores(12164)();
      const memo = react.useMemo(() => {
        const items = [];
        const tmp = stateFromStores && !guild.premiumProgressBarEnabled;
        if (tmp) {
          items.push(dismissible_content.DismissibleContent.BOOST_PROGRESS_BAR_MOBILE_COACHMARK);
        }
        if (closure_2) {
          items.push(dismissible_content.DismissibleContent.GUILD_THEME_MEMBER_COACHMARK);
        }
        return items;
      }, items2);
      const obj2 = guild(6891);
      [tmp15, tmp16] = obj2.useSelectedDismissibleContent(memo, constants.GUILD_HEADER_TOOLTIPS);
      _slicedToArray(obj2.useSelectedDismissibleContent(memo, constants.GUILD_HEADER_TOOLTIPS), 2);
      let tmp18 = false === tmp7;
      const useBoostToUnlockCoachmarkDCF = guild(12160).useBoostToUnlockCoachmarkDCF;
      guild(12160);
      if (tmp18) {
        tmp18 = tmp8;
      }
      if (tmp18) {
        tmp18 = null != tmp9;
      }
      if (tmp18) {
        tmp18 = tmp10;
      }
      const tmp13Result = _slicedToArray(
        useBoostToUnlockCoachmarkDCF(tmp18, guild.id, constants.GUILD_HEADER_TOOLTIPS),
        2,
      );
      const tmp21 = tmp13Result[1];
      if (first == null) {
        first = tmp13Result[0];
      }
      if (guild(2036).DismissibleContent.BOOST_PROGRESS_BAR_MOBILE_COACHMARK === first) {
        return jsx(stateFromStores(16092), { targetRef, guild, markAsDismissed: tmp16 });
      } else if (guild(2036).DismissibleContent.GUILD_THEME_MEMBER_COACHMARK === first) {
        return jsx(stateFromStores(16093), { guildId: guild.id, targetRef, markAsDismissed: tmp16 });
      } else if (guild(2036).DismissibleContent.BOOST_TO_UNLOCK_COACHMARK === first) {
        let tmp22 = null;
        if (null != tmp9) {
          tmp22 = jsx(tmp4(16095), { guildId: guild.id, powerup: tmp9, targetRef, markAsDismissed: tmp21 });
        }
        return tmp22;
      } else {
        return null;
      }
    };
const result = size.fileFinishedImporting("modules/channel_list_v2/native/GuildHeaderCoachmarks.tsx");

export default tmp2;
