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
    badgeCountdownEndsAt: tmp.badgeCountdownEndsAt,
    buttonLabel: tmp.buttonLabel,
  } = arg0);
  return obj;
}.prototype;
prototype["fromServer"] = function fromServer(badge_countdown_ends_at) {
  let obj = {};
  const merged = Object.assign(badge_countdown_ends_at);
  ({
    asset_dark: obj.assetDark,
    asset_light: obj.assetLight,
    ref_target_background: obj.refTargetBackground,
    badge_icon: obj.badgeIcon,
    badge_text: obj.badgeText,
  } = badge_countdown_ends_at);
  let date;
  if (null != badge_countdown_ends_at.badge_countdown_ends_at) {
    const _Date = Date;
    date = new Date(badge_countdown_ends_at.badge_countdown_ends_at);
  }
  obj.badgeCountdownEndsAt = date;
  obj.buttonLabel = badge_countdown_ends_at.button_label;
  if (typeof prototype === "function") {
    obj = Object.create(prototype.prototype);
    obj.type = CollectiblesMarketingType.CollectiblesMarketingType.COACHMARK;
    ({
      title: tmp6.title,
      body: tmp6.body,
      assetDark: tmp6.assetDark,
      assetLight: tmp6.assetLight,
      version: tmp6.version,
      refTargetBackground: tmp6.refTargetBackground,
      badgeIcon: tmp6.badgeIcon,
      badgeText: tmp6.badgeText,
      badgeCountdownEndsAt: tmp6.badgeCountdownEndsAt,
      buttonLabel: tmp6.buttonLabel,
    } = obj);
    return obj;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
const result = size.fileFinishedImporting("modules/collectibles/records/CollectiblesMarketingCoachmarkRecord.tsx");

export const CollectiblesMarketingCoachmarkRecord = prototype;
