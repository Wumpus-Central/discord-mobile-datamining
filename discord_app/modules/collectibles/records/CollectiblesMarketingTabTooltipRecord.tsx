// === Module 7569: CollectiblesMarketingTabTooltipRecord ===

// Module 7569 (CollectiblesMarketingTabTooltipRecord)
import CollectiblesMarketingType from "CollectiblesMarketingType" /* 7566 */;
import size from "module_2" /* 2 */;

const prototype = function CollectiblesMarketingTabTooltipRecord(arg0) {
  const obj = Object.create(new.target.prototype);
  obj.type = CollectiblesMarketingType.CollectiblesMarketingType.TAB_TOOLTIP;
  ({ title: tmp.title, body: tmp.body, asset: tmp.asset, dismissibleContent: tmp.dismissibleContent, version: tmp.version, refTargetBackground: tmp.refTargetBackground, badgeIcon: tmp.badgeIcon, badgeText: tmp.badgeText, showHoverGradient: tmp.showHoverGradient } = arg0);
  return obj;
}.prototype;
prototype["fromServer"] = function fromServer(arg0) {
  let obj = {};
  const merged = Object.assign(arg0);
  ({ dismissible_content: obj.dismissibleContent, ref_target_background: obj.refTargetBackground, badge_icon: obj.badgeIcon, badge_text: obj.badgeText, show_hover_gradient: obj.showHoverGradient } = arg0);
  if (typeof prototype === "function") {
    obj = Object.create(tmp.prototype);
    obj.type = CollectiblesMarketingType.CollectiblesMarketingType.TAB_TOOLTIP;
    ({ title: tmp3.title, body: tmp3.body, asset: tmp3.asset, dismissibleContent: tmp3.dismissibleContent, version: tmp3.version, refTargetBackground: tmp3.refTargetBackground, badgeIcon: tmp3.badgeIcon, badgeText: tmp3.badgeText, showHoverGradient: tmp3.showHoverGradient } = obj);
    return obj;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
  tmp = prototype;
};
const result = size.fileFinishedImporting("modules/collectibles/records/CollectiblesMarketingTabTooltipRecord.tsx");

export default prototype;