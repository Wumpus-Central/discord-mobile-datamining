// === Module 14868: getBountyCtaInfo ===

// Module 14868 (getBountyCtaInfo)
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;

const result = set.fileFinishedImporting("modules/quests/native/BountiesModal/BountyCtaHelpers.tsx");

export const getBountyCtaInfo = function getBountyCtaInfo(bounty) {
  const obj = { label: bounty.productName, subtext: bounty.cta.buttonLabel, buttonLabel: null, iconImageUri: null };
  const intl = getSystemLocale.intl;
  obj[2] = intl.string(getSystemLocale.t.LLLLPD);
  obj[3] = bounty.productIcon;
  return obj;
};