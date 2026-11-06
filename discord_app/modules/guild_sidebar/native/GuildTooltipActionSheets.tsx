// discord_app/modules/guild_sidebar/native/GuildTooltipActionSheets.tsx
import _mod1705 from "../../../../_runtime/metro/01705__.js";
import asyncRequireImpl from "../../../../_runtime/02118_asyncRequireImpl.js";
import dismissible_content from "../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import SelectedDismissibleContentDefault from "../../dismissible_content/native/SelectedDismissibleContent.tsx";
import DismissibleActionSheet from "../../dismissible_content/native/DismissibleActionSheet.tsx";
import useIsGuildEligibleForRoleSubscriptionsUpsellDefault from "../../guild_role_subscriptions/useIsGuildEligibleForRoleSubscriptionsUpsell.tsx";
import useIsEligibleForTierTemplateUpsellDefault from "../../guild_role_subscriptions/tier_templates/useIsEligibleForTierTemplateUpsell.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
function GuildRoleSubscriptionsUpsellActionSheetImporter() {
  return asyncRequireImpl(18578, dependencyMap.paths);
}
function GuildRoleSubscriptionsIAPUpsellActionSheetImporter() {
  return asyncRequireImpl(18580, dependencyMap.paths);
}
function CreatorMonetizationOnboardingV2UpsellActionSheetImporter() {
  return asyncRequireImpl(18583, dependencyMap.paths);
}
function TierTemplatesUpsellActionSheetImporter() {
  return asyncRequireImpl(18585, dependencyMap.paths);
}
class GuildTooltipActionSheets {
  constructor(arg0) {
    id = undefined;
    id = global.guild.id;
    items = [];
    tmp = id;
    tmp2 = closure_2;
    obj = id(closure_2[9]);
    if (obj.useCanSeeCreatorMonetizationOnboardingV2Upsell(id)) {
      arr1 = items.push(tmp(tmp2[10]).DismissibleContent.CREATOR_MONETIZATION_ONBOARDING_V2_UPSELL);
    }
    tmp4 = closure_1;
    if (closure_1(tmp2[11])(id)) {
      arr2 = items.push(tmp(tmp2[10]).DismissibleContent.GUILD_HEADER_ROLE_SUBSCRIPTION_UPSELL);
    }
    tmpResult = tmp(tmp2[12]);
    if (tmpResult.useCanUseRoleSubscriptionIAP(id)) {
      arr3 = items.push(tmp(tmp2[10]).DismissibleContent.GUILD_ROLE_SUBSCRIPTION_IAP_UPSELL);
    }
    if (tmp4(tmp2[13])(id)) {
      arr4 = items.push(tmp(tmp2[10]).DismissibleContent.SERVER_SUBSCRIPTION_TIER_TEMPLATE_UPSELL);
    }
    obj1 = {
      contentTypes: items,
      groupName: closure_5.GUILD_HEADER_TOOLTIPS,
      children(arg0) {
        ({ visibleContent, markAsDismissed } = arg0);
        if (dismissible_content.DismissibleContent.GUILD_HEADER_ROLE_SUBSCRIPTION_UPSELL === visibleContent) {
          const obj2 = {
            markAsDismissed,
            importer: GuildRoleSubscriptionsUpsellActionSheetImporter,
            actionSheetKey: GuildTooltipActionSheet,
            guildId: id,
          };
          return jsx(DismissibleActionSheet.DismissibleActionSheet, {
            markAsDismissed,
            importer: GuildRoleSubscriptionsUpsellActionSheetImporter,
            actionSheetKey: GuildTooltipActionSheet,
            guildId: id,
          });
        } else if (dismissible_content.DismissibleContent.GUILD_ROLE_SUBSCRIPTION_IAP_UPSELL === visibleContent) {
          const obj3 = {
            markAsDismissed,
            importer: GuildRoleSubscriptionsIAPUpsellActionSheetImporter,
            actionSheetKey: GuildTooltipActionSheet,
            guildId: id,
          };
          return jsx(DismissibleActionSheet.DismissibleActionSheet, {
            markAsDismissed,
            importer: GuildRoleSubscriptionsIAPUpsellActionSheetImporter,
            actionSheetKey: GuildTooltipActionSheet,
            guildId: id,
          });
        } else if (
          dismissible_content.DismissibleContent.CREATOR_MONETIZATION_ONBOARDING_V2_UPSELL === visibleContent
        ) {
          const obj4 = {
            markAsDismissed,
            importer: CreatorMonetizationOnboardingV2UpsellActionSheetImporter,
            actionSheetKey: GuildTooltipActionSheet,
            guildId: id,
          };
          return jsx(DismissibleActionSheet.DismissibleActionSheet, {
            markAsDismissed,
            importer: CreatorMonetizationOnboardingV2UpsellActionSheetImporter,
            actionSheetKey: GuildTooltipActionSheet,
            guildId: id,
          });
        } else if (dismissible_content.DismissibleContent.SERVER_SUBSCRIPTION_TIER_TEMPLATE_UPSELL === visibleContent) {
          const obj = {
            actionSheetKey: GuildTooltipActionSheet,
            importer: TierTemplatesUpsellActionSheetImporter,
            markAsDismissed,
            guildId: id,
          };
          return jsx(DismissibleActionSheet.DismissibleActionSheet, {
            actionSheetKey: GuildTooltipActionSheet,
            importer: TierTemplatesUpsellActionSheetImporter,
            markAsDismissed,
            guildId: id,
          });
        } else {
          return null;
        }
      },
    };
    return jsx(tmp4(tmp2[14]), obj1);
  }
}
const hasOwnProperty = fn(5016).DismissibleContentGroupName;
const jsx = fn(21).jsx;
const GuildTooltipActionSheet = "GuildTooltipActionSheet";
let closure_13 = {
  code: "(function GuildTooltipActionSheetsTsx1(){let[scheduleOnRN,setShouldRender]=this.__closure;return scheduleOnRN(setShouldRender,true);})",
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_sidebar/native/GuildTooltipActionSheets.tsx");

export default function GuildTooltipActionSheetsGuard(arg0) {
  [tmp2, require] = noop.useState(false);
  const effect = noop.useEffect(() => {
    items = [closure_13, _mod1705.scheduleOnRN, closure_1_0];
    c0 = undefined;
    c1 = undefined;
    [tmp, tmp2, tmp3] = items;
    class GuildTooltipActionSheetsTsx1 {
      constructor() {
        return closure_0(closure_1, true);
      }
    }
    const items1 = [tmp2, tmp3];
    GuildTooltipActionSheetsTsx1.__closure = items1;
    GuildTooltipActionSheetsTsx1.__workletHash = 14288497747211;
    GuildTooltipActionSheetsTsx1.__initData = tmp;
    _mod1705.scheduleOnUI(GuildTooltipActionSheetsTsx1);
  }, []);
  let tmp4 = null;
  if (tmp2) {
    const obj = {};
    const merged = Object.assign(arg0);
    tmp4 = <GuildTooltipActionSheets />;
  }
  return tmp4;
}
export { GuildTooltipActionSheets };
