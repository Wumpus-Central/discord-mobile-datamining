let prototype;
prototype = function CollectiblesMarketingCoachmarkRecord(arg0) {
  const obj = Object.create(new.target.prototype);
  obj.type = require(6934) /* CollectiblesMarketingType */.CollectiblesMarketingType.COACHMARK;
  ({ title: tmp.title, body: tmp.body, assetDark: tmp.assetDark, assetLight: tmp.assetLight, version: tmp.version, refTargetBackground: tmp.refTargetBackground, badgeIcon: tmp.badgeIcon, badgeText: tmp.badgeText, buttonLabel: tmp.buttonLabel } = arg0);
  return obj;
}.prototype;
prototype["fromServer"] = function fromServer(arg0) {
  let obj = {};
  const merged = Object.assign(arg0);
  ({ asset_dark: obj.assetDark, asset_light: obj.assetLight, ref_target_background: obj.refTargetBackground, badge_icon: obj.badgeIcon, badge_text: obj.badgeText, button_label: obj.buttonLabel } = arg0);
  if (typeof prototype !== "function") {
    HermesBuiltin.throwTypeError();
  }
  obj = Object.create(prototype.prototype);
  obj.type = require(6934) /* CollectiblesMarketingType */.CollectiblesMarketingType.COACHMARK;
  ({ title: tmp3.title, body: tmp3.body, assetDark: tmp3.assetDark, assetLight: tmp3.assetLight, version: tmp3.version, refTargetBackground: tmp3.refTargetBackground, badgeIcon: tmp3.badgeIcon, badgeText: tmp3.badgeText, buttonLabel: tmp3.buttonLabel } = obj);
  return obj;
};
const result = require("set").fileFinishedImporting("modules/collectibles/records/CollectiblesMarketingCoachmarkRecord.tsx");

export const CollectiblesMarketingCoachmarkRecord = prototype;