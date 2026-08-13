// discord_app/modules/guild_sidebar/native/GuildTooltipActionSheets.tsx
import _slicedToArray from "_slicedToArray";
import set from "set";
import { DismissibleContentGroupName as closure_5 } from "ContentDismissActionType";
import { jsx } from "jsxProd";
import { asyncRequireImpl } from "../../../../_runtime/02007_asyncRequireImpl.js";

const require = arg1;
function NUFChannelsActionSheetImporter() {
  return asyncRequireImpl(13101, dependencyMap.paths);
}
function GuildRoleSubscriptionsUpsellActionSheetImporter() {
  return asyncRequireImpl(15449, dependencyMap.paths);
}
function GuildRoleSubscriptionsIAPUpsellActionSheetImporter() {
  return asyncRequireImpl(15451, dependencyMap.paths);
}
function CreatorMonetizationOnboardingV2UpsellActionSheetImporter() {
  return asyncRequireImpl(15454, dependencyMap.paths);
}
function TierTemplatesUpsellActionSheetImporter() {
  return asyncRequireImpl(15456, dependencyMap.paths);
}
class GuildTooltipActionSheets {
  constructor(arg0) {
    inRedesign = global.inRedesign;
    id = undefined;
    id = global.guild.id;
    tmp = id;
    tmp2 = closure_2;
    obj = require("useCanSeeNUFChannelsForGuild");
    if (inRedesign) {
      inRedesign = obj.useCanSeeNUFChannelsForGuild(id);
    }
    items = [];
    if (inRedesign) {
      arr = items.push(require("DismissibleContent").DismissibleContent.NUX_GUILD_CHANNEL_EXPLAINER);
    }
    tmpResult = require("items");
    if (tmpResult.useCanSeeCreatorMonetizationOnboardingV2Upsell(id)) {
      arr1 = items.push(require("DismissibleContent").DismissibleContent.CREATOR_MONETIZATION_ONBOARDING_V2_UPSELL);
    }
    tmp5 = closure_1;
    if (require("useIsGuildEligibleForRoleSubscriptionsUpsell")(id)) {
      arr2 = items.push(require("DismissibleContent").DismissibleContent.GUILD_HEADER_ROLE_SUBSCRIPTION_UPSELL);
    }
    tmpResult1 = require("items");
    if (tmpResult1.useCanUseRoleSubscriptionIAP(id)) {
      arr3 = items.push(require("DismissibleContent").DismissibleContent.GUILD_ROLE_SUBSCRIPTION_IAP_UPSELL);
    }
    if (require("useIsEligibleForTierTemplateUpsell")(id)) {
      arr4 = items.push(require("DismissibleContent").DismissibleContent.SERVER_SUBSCRIPTION_TIER_TEMPLATE_UPSELL);
    }
    obj = {
      contentTypes: items,
      groupName: closure_5.GUILD_HEADER_TOOLTIPS,
      children(arg0) {
            let markAsDismissed;
            let visibleContent;
            ({ visibleContent, markAsDismissed } = arg0);
            if (id(outer1_2[11]).DismissibleContent.GUILD_HEADER_ROLE_SUBSCRIPTION_UPSELL === visibleContent) {
              let obj = { markAsDismissed: null, importer: null, actionSheetKey: null, guildId: null };
              obj[0] = markAsDismissed;
              obj[1] = outer1_9;
              obj[2] = outer1_7;
              obj[3] = markAsDismissed;
              return outer1_6(tmp(tmp2[17]).DismissibleActionSheet, obj);
            } else if (tmp(tmp2[11]).DismissibleContent.GUILD_ROLE_SUBSCRIPTION_IAP_UPSELL === visibleContent) {
              obj = { markAsDismissed: null, importer: null, actionSheetKey: null, guildId: null };
              obj[0] = markAsDismissed;
              obj[1] = outer1_10;
              obj[2] = outer1_7;
              obj[3] = markAsDismissed;
              return outer1_6(tmp(tmp2[17]).DismissibleActionSheet, obj);
            } else if (tmp(tmp2[11]).DismissibleContent.CREATOR_MONETIZATION_ONBOARDING_V2_UPSELL === visibleContent) {
              const obj1 = { markAsDismissed: null, importer: null, actionSheetKey: null, guildId: null };
              obj1[0] = markAsDismissed;
              obj1[1] = outer1_11;
              obj1[2] = outer1_7;
              obj1[3] = markAsDismissed;
              return outer1_6(tmp(tmp2[17]).DismissibleActionSheet, obj1);
            } else if (tmp(tmp2[11]).DismissibleContent.SERVER_SUBSCRIPTION_TIER_TEMPLATE_UPSELL === visibleContent) {
              const obj2 = { actionSheetKey: null, importer: null, markAsDismissed: null, guildId: null };
              obj2[0] = outer1_7;
              obj2[1] = outer1_12;
              obj2[2] = markAsDismissed;
              obj2[3] = markAsDismissed;
              return outer1_6(tmp(tmp2[17]).DismissibleActionSheet, obj2);
            } else if (tmp(tmp2[11]).DismissibleContent.NUX_GUILD_CHANNEL_EXPLAINER === visibleContent) {
              obj = { markAsDismissed: null, actionSheetKey: null, importer: null };
              obj[0] = function markAsDismissed(arg0) {
                return markAsDismissed(arg0);
              };
              obj[1] = outer1_7;
              obj[2] = outer1_8;
              return outer1_6(tmp(tmp2[17]).DismissibleActionSheet, obj);
            } else {
              return null;
            }
          }
    };
    return jsx(require("SelectedDismissibleContent"), obj);
  }
}
const GuildTooltipActionSheet = "GuildTooltipActionSheet";
let closure_14 = { code: "function GuildTooltipActionSheetsTsx1(){const{runOnJS,setShouldRender}=this.__closure;return runOnJS(setShouldRender)(true);}" };
const result = require("ContentDismissActionType").fileFinishedImporting("modules/guild_sidebar/native/GuildTooltipActionSheets.tsx");

export default function GuildTooltipActionSheetsGuard(arg0) {
  let require;
  let tmp2;
  [tmp2, require] = callback(React.useState(false), 2);
  const effect = React.useEffect(() => {
    let obj = outer1_0(outer1_2[18]);
    const fn = function t() {
      return outer1_0(outer1_2[18]).runOnJS(closure_0)(true);
    };
    obj = { runOnJS: outer1_0(outer1_2[18]).runOnJS, setShouldRender: closure_0 };
    fn.__closure = obj;
    fn.__workletHash = 6076095421855;
    fn.__initData = outer1_14;
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