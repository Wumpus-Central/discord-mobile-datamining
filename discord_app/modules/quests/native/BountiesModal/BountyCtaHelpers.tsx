// === Module 14394: getBountyCtaInfo ===

// Module 14394 (getBountyCtaInfo)
import obj132 from "obj132" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;

const result = obj132.fileFinishedImporting("modules/quests/native/BountiesModal/BountyCtaHelpers.tsx");

export const getBountyCtaInfo = function getBountyCtaInfo(bounty) {
  const obj = { label: bounty.productName, subtext: bounty.cta.buttonLabel, buttonLabel: null, iconImageUri: null };
  const intl = getSystemLocale.intl;
  obj[2] = intl.string(getSystemLocale.t.LLLLPD);
  obj[3] = bounty.productIcon;
  return obj;
};