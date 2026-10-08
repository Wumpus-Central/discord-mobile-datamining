// discord_app/modules/channel_list_v2/native/GuildHeaderCoachmarks.tsx
import dismissible_content from "../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import useBoostToUnlockFeaturedPowerupDefault from "../../premium/powerups/hooks/useBoostToUnlockFeaturedPowerup.tsx";
import useHasAllocateBoostPermissionDefault from "../../premium/powerups/hooks/useHasAllocateBoostPermission.tsx";
import useShouldShowGuildThemeMemberCoachmarkDefault from "../../premium/powerups/hooks/useShouldShowGuildThemeMemberCoachmark.tsx";
import useGuildThemeNuxTriggerDefault from "../../guild_themes/native/useGuildThemeNuxTrigger.tsx";
import useIsCurrentUserEligibleForPowerupUpsellsDefault from "../../premium/powerups/hooks/useIsCurrentUserEligibleForPowerupUpsells.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import PermissionStore from "../../../stores/PermissionStore.tsx";

require = fn;
const Permissions = fn(1085).Permissions;
const constants = fn(2060).DismissibleContentGroupName;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/channel_list_v2/native/GuildHeaderCoachmarks.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function GuildHeaderCoachmarks(arg0) {
      const cResult = guild(576).c(21);
      ({ targetRef, guild } = arg0);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [PermissionStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== guild) {
        class C {
          constructor() {
            return closure_5.can(Permissions.MANAGE_GUILD, guild);
          }
        }
        const items1 = [guild];
        cResult[1] = guild;
        cResult[2] = C;
        cResult[3] = items1;
        let tmp7 = items1;
      } else {
        class C {
          constructor() {
            return closure_5.can(Permissions.MANAGE_GUILD, guild);
          }
        }
        tmp7 = cResult[3];
      }
      const obj = guild(576);
      const stateFromStores = guild(504).useStateFromStores(first, C, tmp7);
      const tmp9 = useShouldShowGuildThemeMemberCoachmarkDefault(guild.id);
      useGuildThemeNuxTriggerDefault(guild.id);
      useHasAllocateBoostPermissionDefault(guild.id);
      useIsCurrentUserEligibleForPowerupUpsellsDefault();
      useBoostToUnlockFeaturedPowerupDefault(guild.id);
      if (cResult[4] === stateFromStores) {
        class C {
          constructor() {
            return closure_5.can(Permissions.MANAGE_GUILD, guild);
          }
        }
      }
      if (stateFromStores) {
        class C {
          constructor() {
            return closure_5.can(Permissions.MANAGE_GUILD, guild);
          }
        }
      }
      const items2 = [];
      if (stateFromStores) {
        class C {
          constructor() {
            return closure_5.can(Permissions.MANAGE_GUILD, guild);
          }
        }
        tmp14(guild(2048).DismissibleContent.BOOST_PROGRESS_BAR_MOBILE_COACHMARK);
      }
      if (tmp9) {
        class C {
          constructor() {
            return closure_5.can(Permissions.MANAGE_GUILD, guild);
          }
        }
        tmp16(guild(2048).DismissibleContent.GUILD_THEME_MEMBER_COACHMARK);
      }
      cResult[4] = stateFromStores;
      cResult[5] = guild.premiumProgressBarEnabled;
      cResult[6] = tmp9;
      cResult[7] = items2;
      const tmpResult = guild(504);
    }
  : function GuildHeaderCoachmarks(arg0) {
      ({ targetRef, guild } = arg0);
      let items = [PermissionStore];
      const items1 = [guild];
      const stateFromStores = guild(504).useStateFromStores(
        items,
        () => PermissionStore.can(Permissions.MANAGE_GUILD, guild),
        items1,
      );
      const tmp5 = stateFromStores(16381)(guild.id);
      dependencyMap = tmp5;
      stateFromStores(16383)(guild.id);
      const obj = guild(504);
      const tmp7 = stateFromStores(12264)(guild.id);
      const tmp9 = stateFromStores(12257)(guild.id);
      const items2 = [stateFromStores, guild.premiumProgressBarEnabled, tmp5];
      const tmp8 = stateFromStores(16390)();
      const memo = noop.useMemo(() => {
        let tmp = stateFromStores;
        if (stateFromStores) {
          tmp = !guild.premiumProgressBarEnabled;
        }
        const items = [];
        if (tmp) {
          items.push(dismissible_content.DismissibleContent.BOOST_PROGRESS_BAR_MOBILE_COACHMARK);
        }
        if (closure_2) {
          items.push(dismissible_content.DismissibleContent.GUILD_THEME_MEMBER_COACHMARK);
        }
        return items;
      }, items2);
      const tmp10 = stateFromStores(12258)();
      const obj2 = guild(7090);
      [tmp15, tmp16] = guild(7090).useSelectedDismissibleContent(memo, constants.GUILD_HEADER_TOOLTIPS);
      const tmp14 = _slicedToArray(guild(7090).useSelectedDismissibleContent(memo, constants.GUILD_HEADER_TOOLTIPS), 2);
      let tmp17 = false === tmp7;
      if (tmp17) {
        tmp17 = tmp8;
      }
      if (tmp17) {
        tmp17 = null != tmp9;
      }
      if (tmp17) {
        tmp17 = tmp10;
      }
      const tmp13Result = _slicedToArray(
        guild(12254).useBoostToUnlockCoachmarkDCF(tmp17, guild.id, constants.GUILD_HEADER_TOOLTIPS),
        2,
      );
      if (first == null) {
        first = tmp13Result[0];
      }
      if (guild(2048).DismissibleContent.BOOST_PROGRESS_BAR_MOBILE_COACHMARK === first) {
        const obj4 = { targetRef, guild, markAsDismissed: tmp16 };
        return jsx(tmp4(16391), { targetRef, guild, markAsDismissed: tmp16 });
      } else if (guild(2048).DismissibleContent.GUILD_THEME_MEMBER_COACHMARK === first) {
        const obj5 = { guildId: guild.id, targetRef, markAsDismissed: tmp16 };
        return jsx(tmp4(16392), { guildId: guild.id, targetRef, markAsDismissed: tmp16 });
      } else if (guild(2048).DismissibleContent.BOOST_TO_UNLOCK_COACHMARK === first) {
        let tmp20 = null;
        if (null != tmp9) {
          const obj6 = { guildId: guild.id, powerup: tmp9, targetRef, markAsDismissed: tmp13Result[1] };
          tmp20 = jsx(tmp4(16394), { guildId: guild.id, powerup: tmp9, targetRef, markAsDismissed: tmp13Result[1] });
        }
        return tmp20;
      } else {
        return null;
      }
      const obj3 = guild(12254);
    };
