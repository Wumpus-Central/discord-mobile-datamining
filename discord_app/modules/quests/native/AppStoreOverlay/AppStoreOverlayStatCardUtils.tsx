// === Module 11328: formatAppStoreRatingValue ===

// Module 11328 (formatAppStoreRatingValue)
import set from "set" /* 2 */;

const result = set.fileFinishedImporting("modules/quests/native/AppStoreOverlay/AppStoreOverlayStatCardUtils.tsx");

export const formatAppStoreRatingValue = function formatAppStoreRatingValue(rating, currentLocale) {
  const numberFormat = new Intl.NumberFormat(currentLocale, { minimumFractionDigits: 1, maximumFractionDigits: 1 });
  return numberFormat.format(rating);
};
export const formatAppStoreRatingCount = function formatAppStoreRatingCount(ratingCount, currentLocale) {
  const numberFormat = new Intl.NumberFormat(currentLocale, { notation: "compact", compactDisplay: "short" });
  return numberFormat.format(ratingCount);
};
export const getAppStoreStarFillAmounts = function getAppStoreStarFillAmounts(rating, arg1) {
  let num = arg1;
  if (arg1 === undefined) {
    num = 5;
  }
  closure_0 = undefined;
  const length = Math.max(1, num);
  closure_0 = Math.max(0, Math.min(rating, length));
  return Array.from({ length }, (arg0, arg1) => Math.min(1, Math.max(0, closure_0 - arg1)));
};
export const formatAppStoreChartRank = function formatAppStoreChartRank(rank) {
  return "#" + rank;
};