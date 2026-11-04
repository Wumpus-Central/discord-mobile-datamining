// === Module 19837: InterestGuildProfileSheetLayout ===

// Module 19837 (InterestGuildProfileSheetLayout)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/waterwheels/interest/native/InterestGuildProfileSheetLayout.tsx");

export function getInterestGuildProfileSheetLayout(footerHeight) {
  ({ windowHeight, contentHeight } = footerHeight);
  const sum = footerHeight.footerHeight + footerHeight.safeAreaBottom;
  const rounded = Math.floor(0.9 * windowHeight);
  const rounded1 = Math.ceil(0.45 * windowHeight);
  const bound = Math.min(rounded, Math.max(rounded1, Math.ceil(contentHeight + sum)));
  const bound1 = Math.max(0, bound - sum);
  return { height: bound, reservedBottom: sum, viewportHeight: bound1, scrollable: contentHeight > bound1 };
}