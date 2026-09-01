// discord_app/modules/quests/native/BountiesModal/BountyCtaHelpers.tsx
import set from "../../../../../_runtime/00002_set.js";
import getSystemLocale from "../../../../intl/index.native.tsx";

const result = set.fileFinishedImporting("modules/quests/native/BountiesModal/BountyCtaHelpers.tsx");

export const getBountyCtaInfo = function getBountyCtaInfo(bounty) {
  const obj = { label: bounty.productName, subtext: bounty.cta.buttonLabel, buttonLabel: null, iconImageUri: null };
  const intl = getSystemLocale.intl;
  obj[2] = intl.string(getSystemLocale.t.LLLLPD);
  obj[3] = bounty.productIcon;
  return obj;
};
