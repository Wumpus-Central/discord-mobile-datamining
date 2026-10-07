// === Module 16210: GuildTooltipActionSheets ===

// Module 16210 (GuildTooltipActionSheets)
import asyncRequireImpl from "asyncRequireImpl" /* 1987 */;
import dismissible_content from "dismissible_content" /* 2036 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4618 */;
import SelectedDismissibleContentDefault from "SelectedDismissibleContent" /* 10367 */;
import DismissibleActionSheet from "DismissibleActionSheet" /* 10368 */;
import useIsGuildEligibleForRoleSubscriptionsUpsellDefault from "useIsGuildEligibleForRoleSubscriptionsUpsell" /* 16220 */;
import useIsEligibleForTierTemplateUpsellDefault from "useIsEligibleForTierTemplateUpsell" /* 16221 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
function GuildRoleSubscriptionsUpsellActionSheetImporter() {
  return asyncRequireImpl(16211, dependencyMap.paths);
}
function GuildRoleSubscriptionsIAPUpsellActionSheetImporter() {
  return asyncRequireImpl(16213, dependencyMap.paths);
}
function CreatorMonetizationOnboardingV2UpsellActionSheetImporter() {
  return asyncRequireImpl(16216, dependencyMap.paths);
}
function TierTemplatesUpsellActionSheetImporter() {
  return asyncRequireImpl(16218, dependencyMap.paths);
}
const constants = fn(2048).DismissibleContentGroupName;
const jsx = fn(21).jsx;
const GuildTooltipActionSheet = "GuildTooltipActionSheet";
let ReactCompilerGating = fn(558);
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((guild) => {
  const cResult = id(576).c(2);
  id = guild.guild.id;
  const items = [];
  let obj = id(576);
  if (obj2.useCanSeeCreatorMonetizationOnboardingV2Upsell(id)) {
    items.push(tmp(2036).DismissibleContent.CREATOR_MONETIZATION_ONBOARDING_V2_UPSELL);
  }
  if (useIsGuildEligibleForRoleSubscriptionsUpsellDefault(id)) {
    items.push(tmp(2036).DismissibleContent.GUILD_HEADER_ROLE_SUBSCRIPTION_UPSELL);
  }
  obj2 = id(16219);
  if (tmpResult.useCanUseRoleSubscriptionIAP(id)) {
    items.push(tmp(2036).DismissibleContent.GUILD_ROLE_SUBSCRIPTION_IAP_UPSELL);
  }
  if (useIsEligibleForTierTemplateUpsellDefault(id)) {
    items.push(tmp(2036).DismissibleContent.SERVER_SUBSCRIPTION_TIER_TEMPLATE_UPSELL);
  }
  if (cResult[0] !== id) {
    const fn = function s(arg0) {
      ({ visibleContent, markAsDismissed } = arg0);
      if (dismissible_content.DismissibleContent.GUILD_HEADER_ROLE_SUBSCRIPTION_UPSELL === visibleContent) {
        const obj2 = { markAsDismissed, importer: GuildRoleSubscriptionsUpsellActionSheetImporter, actionSheetKey: GuildTooltipActionSheet, guildId: id };
        return jsx(DismissibleActionSheet.DismissibleActionSheet, { markAsDismissed, importer: GuildRoleSubscriptionsUpsellActionSheetImporter, actionSheetKey: GuildTooltipActionSheet, guildId: id });
      } else if (dismissible_content.DismissibleContent.GUILD_ROLE_SUBSCRIPTION_IAP_UPSELL === visibleContent) {
        const obj3 = { markAsDismissed, importer: GuildRoleSubscriptionsIAPUpsellActionSheetImporter, actionSheetKey: GuildTooltipActionSheet, guildId: id };
        return jsx(DismissibleActionSheet.DismissibleActionSheet, { markAsDismissed, importer: GuildRoleSubscriptionsIAPUpsellActionSheetImporter, actionSheetKey: GuildTooltipActionSheet, guildId: id });
      } else if (dismissible_content.DismissibleContent.CREATOR_MONETIZATION_ONBOARDING_V2_UPSELL === visibleContent) {
        const obj4 = { markAsDismissed, importer: CreatorMonetizationOnboardingV2UpsellActionSheetImporter, actionSheetKey: GuildTooltipActionSheet, guildId: id };
        return jsx(DismissibleActionSheet.DismissibleActionSheet, { markAsDismissed, importer: CreatorMonetizationOnboardingV2UpsellActionSheetImporter, actionSheetKey: GuildTooltipActionSheet, guildId: id });
      } else if (dismissible_content.DismissibleContent.SERVER_SUBSCRIPTION_TIER_TEMPLATE_UPSELL === visibleContent) {
        const obj = { actionSheetKey: GuildTooltipActionSheet, importer: TierTemplatesUpsellActionSheetImporter, markAsDismissed, guildId: id };
        return jsx(DismissibleActionSheet.DismissibleActionSheet, { actionSheetKey: GuildTooltipActionSheet, importer: TierTemplatesUpsellActionSheetImporter, markAsDismissed, guildId: id });
      } else {
        return null;
      }
    };
    cResult[0] = id;
    cResult[1] = fn;
    let tmp9 = fn;
  } else {
    tmp9 = cResult[1];
  }
  return jsx(SelectedDismissibleContentDefault, { contentTypes: items, groupName: constants.GUILD_HEADER_TOOLTIPS, children: tmp9 });
}) : ((guild) => {
  const id = guild.guild.id;
  const items = [];
  if (obj.useCanSeeCreatorMonetizationOnboardingV2Upsell(id)) {
    items.push(tmp(2036).DismissibleContent.CREATOR_MONETIZATION_ONBOARDING_V2_UPSELL);
  }
  if (useIsGuildEligibleForRoleSubscriptionsUpsellDefault(id)) {
    items.push(tmp(2036).DismissibleContent.GUILD_HEADER_ROLE_SUBSCRIPTION_UPSELL);
  }
  obj = id(16219);
  if (tmpResult.useCanUseRoleSubscriptionIAP(id)) {
    items.push(tmp(2036).DismissibleContent.GUILD_ROLE_SUBSCRIPTION_IAP_UPSELL);
  }
  if (useIsEligibleForTierTemplateUpsellDefault(id)) {
    items.push(tmp(2036).DismissibleContent.SERVER_SUBSCRIPTION_TIER_TEMPLATE_UPSELL);
  }
  return jsx(SelectedDismissibleContentDefault, {
    contentTypes: items,
    groupName: constants.GUILD_HEADER_TOOLTIPS,
    children(arg0) {
      ({ visibleContent, markAsDismissed } = arg0);
      if (dismissible_content.DismissibleContent.GUILD_HEADER_ROLE_SUBSCRIPTION_UPSELL === visibleContent) {
        const obj2 = { markAsDismissed, importer: GuildRoleSubscriptionsUpsellActionSheetImporter, actionSheetKey: GuildTooltipActionSheet, guildId: id };
        return jsx(DismissibleActionSheet.DismissibleActionSheet, { markAsDismissed, importer: GuildRoleSubscriptionsUpsellActionSheetImporter, actionSheetKey: GuildTooltipActionSheet, guildId: id });
      } else if (dismissible_content.DismissibleContent.GUILD_ROLE_SUBSCRIPTION_IAP_UPSELL === visibleContent) {
        const obj3 = { markAsDismissed, importer: GuildRoleSubscriptionsIAPUpsellActionSheetImporter, actionSheetKey: GuildTooltipActionSheet, guildId: id };
        return jsx(DismissibleActionSheet.DismissibleActionSheet, { markAsDismissed, importer: GuildRoleSubscriptionsIAPUpsellActionSheetImporter, actionSheetKey: GuildTooltipActionSheet, guildId: id });
      } else if (dismissible_content.DismissibleContent.CREATOR_MONETIZATION_ONBOARDING_V2_UPSELL === visibleContent) {
        const obj4 = { markAsDismissed, importer: CreatorMonetizationOnboardingV2UpsellActionSheetImporter, actionSheetKey: GuildTooltipActionSheet, guildId: id };
        return jsx(DismissibleActionSheet.DismissibleActionSheet, { markAsDismissed, importer: CreatorMonetizationOnboardingV2UpsellActionSheetImporter, actionSheetKey: GuildTooltipActionSheet, guildId: id });
      } else if (dismissible_content.DismissibleContent.SERVER_SUBSCRIPTION_TIER_TEMPLATE_UPSELL === visibleContent) {
        const obj = { actionSheetKey: GuildTooltipActionSheet, importer: TierTemplatesUpsellActionSheetImporter, markAsDismissed, guildId: id };
        return jsx(DismissibleActionSheet.DismissibleActionSheet, { actionSheetKey: GuildTooltipActionSheet, importer: TierTemplatesUpsellActionSheetImporter, markAsDismissed, guildId: id });
      } else {
        return null;
      }
    }
  });
});
let closure_12 = tmp2;
let closure_13 = { code: "function GuildTooltipActionSheetsTsx1(){const{runOnJS,setShouldRender}=this.__closure;return runOnJS(setShouldRender)(true);}" };
let closure_14 = { code: "function GuildTooltipActionSheetsTsx2(){const{runOnJS,setShouldRender}=this.__closure;return runOnJS(setShouldRender)(true);}" };
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_sidebar/native/GuildTooltipActionSheets.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = require("c").c(4);
  let num = 2;
  const tmp2 = _slicedToArray(noop.useState(false), 2);
  _require = tmp2[1];
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let fn = function l() {
      const fn = function t() {
        return closure_0(dependencyMap[18]).runOnJS(setShouldRender)(true);
      };
      const obj = ReanimatedRexport;
      fn.__closure = { runOnJS: ReanimatedRexport.runOnJS, setShouldRender };
      fn.__workletHash = 6076095421855;
      fn.__initData = __initData;
      obj.runOnUI(fn)();
    };
    const items = [];
    cResult[0] = fn;
    cResult[1] = items;
    tmp3 = fn;
    tmp4 = items;
  } else {
    [tmp3, tmp4] = cResult;
  }
  const effect = noop.useEffect(tmp3, tmp4);
  if (!tmp2[0]) {
    return null;
  } else if (cResult[2] !== arg0) {
    const obj3 = {};
    const merged = Object.assign(arg0);
    const tmp13 = <closure_12 />;
    cResult[num] = arg0;
    num = 3;
    cResult[3] = tmp13;
  }
  let obj = require("c");
}) : ((arg0) => {
  [tmp2, require] = noop.useState(false);
  const effect = noop.useEffect(() => {
    const fn = function t() {
      return setShouldRender(dependencyMap[18]).runOnJS(closure_1_0)(true);
    };
    const obj = ReanimatedRexport;
    fn.__closure = { runOnJS: ReanimatedRexport.runOnJS, setShouldRender };
    fn.__workletHash = 10416584823644;
    fn.__initData = __initData;
    obj.runOnUI(fn)();
  }, []);
  let tmp4 = null;
  if (tmp2) {
    let obj = {};
    const merged = Object.assign(arg0);
    tmp4 = <closure_12 />;
  }
  return tmp4;
});
export const GuildTooltipActionSheets = tmp2;