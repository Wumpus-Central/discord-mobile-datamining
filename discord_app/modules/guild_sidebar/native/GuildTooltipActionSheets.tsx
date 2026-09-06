// === Module 16241: GuildTooltipActionSheets ===

// Module 16241 (GuildTooltipActionSheets)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import dismissible_content from "dismissible_content" /* 1943 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4296 */;
import SelectedDismissibleContentDefault from "SelectedDismissibleContent" /* 10625 */;
import useIsGuildEligibleForRoleSubscriptionsUpsellDefault from "useIsGuildEligibleForRoleSubscriptionsUpsell" /* 16252 */;
import useIsEligibleForTierTemplateUpsellDefault from "useIsEligibleForTierTemplateUpsell" /* 16253 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
function NUFChannelsActionSheetImporter() {
  return asyncRequireImpl(13768, dependencyMap.paths);
}
function GuildRoleSubscriptionsUpsellActionSheetImporter() {
  return asyncRequireImpl(16242, dependencyMap.paths);
}
function GuildRoleSubscriptionsIAPUpsellActionSheetImporter() {
  return asyncRequireImpl(16244, dependencyMap.paths);
}
function CreatorMonetizationOnboardingV2UpsellActionSheetImporter() {
  return asyncRequireImpl(16247, dependencyMap.paths);
}
function TierTemplatesUpsellActionSheetImporter() {
  return asyncRequireImpl(16249, dependencyMap.paths);
}
class GuildTooltipActionSheets {
  constructor(arg0) {
    inRedesign = global.inRedesign;
    id = undefined;
    id = global.guild.id;
    tmp = id;
    tmp2 = closure_2;
    obj = id(closure_2[10]);
    if (inRedesign) {
      inRedesign = obj.useCanSeeNUFChannelsForGuild(id);
    }
    items = [];
    if (inRedesign) {
      arr = items.push(tmp(tmp2[11]).DismissibleContent.NUX_GUILD_CHANNEL_EXPLAINER);
    }
    tmpResult = tmp(tmp2[12]);
    if (tmpResult.useCanSeeCreatorMonetizationOnboardingV2Upsell(id)) {
      arr1 = items.push(tmp(tmp2[11]).DismissibleContent.CREATOR_MONETIZATION_ONBOARDING_V2_UPSELL);
    }
    tmp5 = closure_1;
    if (closure_1(tmp2[13])(id)) {
      arr2 = items.push(tmp(tmp2[11]).DismissibleContent.GUILD_HEADER_ROLE_SUBSCRIPTION_UPSELL);
    }
    tmpResult1 = tmp(tmp2[14]);
    if (tmpResult1.useCanUseRoleSubscriptionIAP(id)) {
      arr3 = items.push(tmp(tmp2[11]).DismissibleContent.GUILD_ROLE_SUBSCRIPTION_IAP_UPSELL);
    }
    if (tmp5(tmp2[15])(id)) {
      arr4 = items.push(tmp(tmp2[11]).DismissibleContent.SERVER_SUBSCRIPTION_TIER_TEMPLATE_UPSELL);
    }
    obj = {
      contentTypes: items,
      groupName: closure_5.GUILD_HEADER_TOOLTIPS,
      children(arg0) {
            ({ visibleContent, markAsDismissed } = arg0);
            if (dismissible_content.DismissibleContent.GUILD_HEADER_ROLE_SUBSCRIPTION_UPSELL === visibleContent) {
              let obj = { markAsDismissed, importer: GuildRoleSubscriptionsUpsellActionSheetImporter, actionSheetKey: GuildTooltipActionSheet, guildId: id };
              return jsx(tmp(10626).DismissibleActionSheet, { markAsDismissed, importer: GuildRoleSubscriptionsUpsellActionSheetImporter, actionSheetKey: GuildTooltipActionSheet, guildId: id });
            } else if (tmp(1943).DismissibleContent.GUILD_ROLE_SUBSCRIPTION_IAP_UPSELL === visibleContent) {
              obj = { markAsDismissed, importer: GuildRoleSubscriptionsIAPUpsellActionSheetImporter, actionSheetKey: GuildTooltipActionSheet, guildId: id };
              return jsx(tmp(10626).DismissibleActionSheet, { markAsDismissed, importer: GuildRoleSubscriptionsIAPUpsellActionSheetImporter, actionSheetKey: GuildTooltipActionSheet, guildId: id });
            } else if (tmp(1943).DismissibleContent.CREATOR_MONETIZATION_ONBOARDING_V2_UPSELL === visibleContent) {
              const obj1 = { markAsDismissed, importer: CreatorMonetizationOnboardingV2UpsellActionSheetImporter, actionSheetKey: GuildTooltipActionSheet, guildId: id };
              return jsx(tmp(10626).DismissibleActionSheet, { markAsDismissed, importer: CreatorMonetizationOnboardingV2UpsellActionSheetImporter, actionSheetKey: GuildTooltipActionSheet, guildId: id });
            } else if (tmp(1943).DismissibleContent.SERVER_SUBSCRIPTION_TIER_TEMPLATE_UPSELL === visibleContent) {
              const obj2 = { actionSheetKey: GuildTooltipActionSheet, importer: TierTemplatesUpsellActionSheetImporter, markAsDismissed, guildId: id };
              return jsx(tmp(10626).DismissibleActionSheet, { actionSheetKey: GuildTooltipActionSheet, importer: TierTemplatesUpsellActionSheetImporter, markAsDismissed, guildId: id });
            } else if (tmp(1943).DismissibleContent.NUX_GUILD_CHANNEL_EXPLAINER === visibleContent) {
              obj = {
                markAsDismissed(arg0) {
                    return markAsDismissed(arg0);
                  },
                actionSheetKey: GuildTooltipActionSheet,
                importer: NUFChannelsActionSheetImporter
              };
              return jsx(tmp(10626).DismissibleActionSheet, {
                markAsDismissed(arg0) {
                    return markAsDismissed(arg0);
                  },
                actionSheetKey: GuildTooltipActionSheet,
                importer: NUFChannelsActionSheetImporter
              });
            } else {
              return null;
            }
          }
    };
    return jsx(tmp5(tmp2[16]), obj);
  }
}
const hasOwnProperty = fn(1954).DismissibleContentGroupName;
const jsx = fn(21).jsx;
const GuildTooltipActionSheet = "GuildTooltipActionSheet";
let closure_14 = { code: "function GuildTooltipActionSheetsTsx1(){const{runOnJS,setShouldRender}=this.__closure;return runOnJS(setShouldRender)(true);}" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_sidebar/native/GuildTooltipActionSheets.tsx");

export default function GuildTooltipActionSheetsGuard(arg0) {
  [tmp2, require] = _slicedToArray(noop.useState(false), 2);
  const effect = noop.useEffect(() => {
    const fn = function t() {
      return setShouldRender(dependencyMap[18]).runOnJS(closure_1_0)(true);
    };
    const obj = { runOnJS: ReanimatedRexport.runOnJS, setShouldRender };
    fn.__closure = obj;
    fn.__workletHash = 6076095421855;
    fn.__initData = __initData;
    obj.runOnUI(fn)();
  }, []);
  let tmp4 = null;
  if (tmp2) {
    let obj = {};
    const merged = Object.assign(arg0);
    tmp4 = <GuildTooltipActionSheets />;
  }
  return tmp4;
};
export { GuildTooltipActionSheets };