// discord_app/modules/quests/native/BountiesModal/BountyCtaHelpers.tsx
import util from "../../../../intl/index.native.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/quests/native/BountiesModal/BountyCtaHelpers.tsx");

export const getBountyCtaInfo = function getBountyCtaInfo(bounty) {
  const obj = { label: bounty.productName, subtext: bounty.cta.buttonLabel, buttonLabel: null, iconImageUri: null };
  const intl = util.intl;
  obj.buttonLabel = intl.string(util.t.LLLLPD);
  obj.iconImageUri = bounty.productIcon;
  return obj;
};
