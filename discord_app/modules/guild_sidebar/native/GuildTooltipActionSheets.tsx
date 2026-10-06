// === Module 16210: GuildTooltipActionSheets ===

// Module 16210 (GuildTooltipActionSheets)
import Fragment from "Fragment" /* 21 */;
import asyncRequire from "asyncRequire" /* 1987 */;
import dismissible_content from "dismissible_content" /* 2036 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2048 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4618 */;
import SelectedDismissibleContentDefault from "SelectedDismissibleContent" /* 10367 */;
import DismissibleActionSheet from "DismissibleActionSheet" /* 10368 */;
import useIsGuildEligibleForRoleSubscriptionsUpsellDefault from "useIsGuildEligibleForRoleSubscriptionsUpsell" /* 16220 */;
import useIsEligibleForTierTemplateUpsellDefault from "useIsEligibleForTierTemplateUpsell" /* 16221 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

function GuildRoleSubscriptionsUpsellActionSheetImporter() {
  return asyncRequire(16211, dependencyMap.paths);
}
function GuildRoleSubscriptionsIAPUpsellActionSheetImporter() {
  return asyncRequire(16213, dependencyMap.paths);
}
function CreatorMonetizationOnboardingV2UpsellActionSheetImporter() {
  return asyncRequire(16216, dependencyMap.paths);
}
function TierTemplatesUpsellActionSheetImporter() {
  return asyncRequire(16218, dependencyMap.paths);
}
const constants = DismissibleContentConstants.DismissibleContentGroupName;
const jsx = Fragment.jsx;
const GuildTooltipActionSheet = "GuildTooltipActionSheet";
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((guild) => {
  let id;
  let tmp9;
  const obj = id(576);
  const cResult = obj.c(2);
  id = guild.guild.id;
  const items = [];
  const obj2 = id(16219);
  if (obj2.useCanSeeCreatorMonetizationOnboardingV2Upsell(id)) {
    items.push(id(2036).DismissibleContent.CREATOR_MONETIZATION_ONBOARDING_V2_UPSELL);
  }
  if (useIsGuildEligibleForRoleSubscriptionsUpsellDefault(id)) {
    items.push(id(2036).DismissibleContent.GUILD_HEADER_ROLE_SUBSCRIPTION_UPSELL);
  }
  const tmpResult = id(5685);
  if (tmpResult.useCanUseRoleSubscriptionIAP(id)) {
    items.push(id(2036).DismissibleContent.GUILD_ROLE_SUBSCRIPTION_IAP_UPSELL);
  }
  if (useIsEligibleForTierTemplateUpsellDefault(id)) {
    items.push(id(2036).DismissibleContent.SERVER_SUBSCRIPTION_TIER_TEMPLATE_UPSELL);
  }
  if (cResult[0] !== id) {
    const fn = function s(arg0) {
      let markAsDismissed;
      let visibleContent;
      ({ visibleContent, markAsDismissed } = arg0);
      if (dismissible_content.DismissibleContent.GUILD_HEADER_ROLE_SUBSCRIPTION_UPSELL === visibleContent) {
        return jsx(DismissibleActionSheet.DismissibleActionSheet, { markAsDismissed, importer: GuildRoleSubscriptionsUpsellActionSheetImporter, actionSheetKey: GuildTooltipActionSheet, guildId: id });
      } else if (dismissible_content.DismissibleContent.GUILD_ROLE_SUBSCRIPTION_IAP_UPSELL === visibleContent) {
        return jsx(DismissibleActionSheet.DismissibleActionSheet, { markAsDismissed, importer: GuildRoleSubscriptionsIAPUpsellActionSheetImporter, actionSheetKey: GuildTooltipActionSheet, guildId: id });
      } else if (dismissible_content.DismissibleContent.CREATOR_MONETIZATION_ONBOARDING_V2_UPSELL === visibleContent) {
        return jsx(DismissibleActionSheet.DismissibleActionSheet, { markAsDismissed, importer: CreatorMonetizationOnboardingV2UpsellActionSheetImporter, actionSheetKey: GuildTooltipActionSheet, guildId: id });
      } else if (dismissible_content.DismissibleContent.SERVER_SUBSCRIPTION_TIER_TEMPLATE_UPSELL === visibleContent) {
        return jsx(DismissibleActionSheet.DismissibleActionSheet, { actionSheetKey: GuildTooltipActionSheet, importer: TierTemplatesUpsellActionSheetImporter, markAsDismissed, guildId: id });
      } else {
        return null;
      }
    };
    cResult[0] = id;
    cResult[1] = fn;
    tmp9 = fn;
  } else {
    tmp9 = cResult[1];
  }
  return jsx(SelectedDismissibleContentDefault, { contentTypes: items, groupName: constants.GUILD_HEADER_TOOLTIPS, children: tmp9 });
}) : ((guild) => {
  const id = guild.guild.id;
  const items = [];
  const obj = id(16219);
  if (obj.useCanSeeCreatorMonetizationOnboardingV2Upsell(id)) {
    items.push(id(2036).DismissibleContent.CREATOR_MONETIZATION_ONBOARDING_V2_UPSELL);
  }
  if (useIsGuildEligibleForRoleSubscriptionsUpsellDefault(id)) {
    items.push(id(2036).DismissibleContent.GUILD_HEADER_ROLE_SUBSCRIPTION_UPSELL);
  }
  const tmpResult = id(5685);
  if (tmpResult.useCanUseRoleSubscriptionIAP(id)) {
    items.push(id(2036).DismissibleContent.GUILD_ROLE_SUBSCRIPTION_IAP_UPSELL);
  }
  if (useIsEligibleForTierTemplateUpsellDefault(id)) {
    items.push(id(2036).DismissibleContent.SERVER_SUBSCRIPTION_TIER_TEMPLATE_UPSELL);
  }
  return jsx(SelectedDismissibleContentDefault, {
    contentTypes: items,
    groupName: constants.GUILD_HEADER_TOOLTIPS,
    children(arg0) {
      let markAsDismissed;
      let visibleContent;
      ({ visibleContent, markAsDismissed } = arg0);
      if (dismissible_content.DismissibleContent.GUILD_HEADER_ROLE_SUBSCRIPTION_UPSELL === visibleContent) {
        return jsx(DismissibleActionSheet.DismissibleActionSheet, { markAsDismissed, importer: GuildRoleSubscriptionsUpsellActionSheetImporter, actionSheetKey: GuildTooltipActionSheet, guildId: id });
      } else if (dismissible_content.DismissibleContent.GUILD_ROLE_SUBSCRIPTION_IAP_UPSELL === visibleContent) {
        return jsx(DismissibleActionSheet.DismissibleActionSheet, { markAsDismissed, importer: GuildRoleSubscriptionsIAPUpsellActionSheetImporter, actionSheetKey: GuildTooltipActionSheet, guildId: id });
      } else if (dismissible_content.DismissibleContent.CREATOR_MONETIZATION_ONBOARDING_V2_UPSELL === visibleContent) {
        return jsx(DismissibleActionSheet.DismissibleActionSheet, { markAsDismissed, importer: CreatorMonetizationOnboardingV2UpsellActionSheetImporter, actionSheetKey: GuildTooltipActionSheet, guildId: id });
      } else if (dismissible_content.DismissibleContent.SERVER_SUBSCRIPTION_TIER_TEMPLATE_UPSELL === visibleContent) {
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
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let first;
  let setShouldRender;
  let tmp4;
  let tmp5;
  let obj = require("react");
  const cResult = obj.c(4);
  [first, _require] = react.useState(false);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let fn = function l() {
      let obj = ReanimatedRexport;
      const fn = function t() {
        const obj = closure_0(dependencyMap[18]);
        return obj.runOnJS(closure_1_0)(true);
      };
      fn.__closure = { runOnJS: ReanimatedRexport.runOnJS, setShouldRender };
      fn.__workletHash = 6076095421855;
      fn.__initData = __initData;
      ({ runOnJS: ReanimatedRexport.runOnJS, setShouldRender });
      obj.runOnUI(fn)();
    };
    const items = [];
    cResult[0] = fn;
    cResult[1] = items;
    tmp4 = fn;
    tmp5 = items;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const effect = react.useEffect(tmp4, tmp5);
  let tmp7 = null;
  if (first) {
    let tmp9;
    if (cResult[2] !== arg0) {
      const merged = Object.assign(arg0);
      const tmp15 = <closure_12 />;
      cResult[2] = arg0;
      cResult[3] = tmp15;
      tmp9 = tmp15;
    } else {
      tmp9 = cResult[3];
    }
    tmp7 = tmp9;
  }
  return tmp7;
}) : ((arg0) => {
  let require;
  let setShouldRender;
  let tmp2;
  [tmp2, require] = _slicedToArray(react.useState(false), 2);
  const tmp = _slicedToArray(react.useState(false), 2);
  const effect = react.useEffect(() => {
    let obj = ReanimatedRexport;
    const fn = function t() {
      const obj = ReanimatedRexport;
      return obj.runOnJS(setShouldRender)(true);
    };
    fn.__closure = { runOnJS: ReanimatedRexport.runOnJS, setShouldRender: require };
    fn.__workletHash = 10416584823644;
    fn.__initData = __initData;
    ({ runOnJS: ReanimatedRexport.runOnJS, setShouldRender: require });
    obj.runOnUI(fn)();
  }, []);
  let tmp4 = null;
  if (tmp2) {
    const merged = Object.assign(arg0);
    tmp4 = <closure_12 />;
  }
  return tmp4;
});
const result = size.fileFinishedImporting("modules/guild_sidebar/native/GuildTooltipActionSheets.tsx");

export default tmp3;
export const GuildTooltipActionSheets = tmp2;