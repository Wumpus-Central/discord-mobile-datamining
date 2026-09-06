// discord_app/modules/collectibles/records/CollectiblesMarketingCoachmarkRecord.tsx
import CollectiblesMarketingType from "../../../../discord_common/js/shared/shared-constants/CollectiblesMarketingType.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const prototype = function CollectiblesMarketingCoachmarkRecord(arg0) {
  const obj = Object.create(new.target.prototype);
  obj.type = CollectiblesMarketingType.CollectiblesMarketingType.COACHMARK;
  ({
    title: tmp.title,
    body: tmp.body,
    assetDark: tmp.assetDark,
    assetLight: tmp.assetLight,
    version: tmp.version,
    refTargetBackground: tmp.refTargetBackground,
    badgeIcon: tmp.badgeIcon,
    badgeText: tmp.badgeText,
    buttonLabel: tmp.buttonLabel,
  } = arg0);
  return obj;
}.prototype;
prototype["fromServer"] = function fromServer(arg0) {
  let obj = {};
  const merged = Object.assign(arg0);
  ({
    asset_dark: obj.assetDark,
    asset_light: obj.assetLight,
    ref_target_background: obj.refTargetBackground,
    badge_icon: obj.badgeIcon,
    badge_text: obj.badgeText,
    button_label: obj.buttonLabel,
  } = arg0);
  if (typeof prototype === "function") {
    obj = Object.create(prototype.prototype);
    obj.type = CollectiblesMarketingType.CollectiblesMarketingType.COACHMARK;
    ({
      title: tmp2.title,
      body: tmp2.body,
      assetDark: tmp2.assetDark,
      assetLight: tmp2.assetLight,
      version: tmp2.version,
      refTargetBackground: tmp2.refTargetBackground,
      badgeIcon: tmp2.badgeIcon,
      badgeText: tmp2.badgeText,
      buttonLabel: tmp2.buttonLabel,
    } = obj);
    return obj;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
const result = size.fileFinishedImporting("modules/collectibles/records/CollectiblesMarketingCoachmarkRecord.tsx");

export const CollectiblesMarketingCoachmarkRecord = prototype;
