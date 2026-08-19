// === Module 5868: GiftingTier4LargeBadge ===

// Module 5868 (GiftingTier4LargeBadge)
import obj132 from "obj132" /* 2 */;
import jsxProd from "jsxProd" /* 21 */;
import preloadDefault from "preload" /* 5449 */;
import vanityUrlDefault from "vanityUrl" /* 5869 */;

const jsx = jsxProd.jsx;
const result = obj132.fileFinishedImporting("design/components/mana-assets/native/generated/GiftingTier4LargeBadge.native.tsx");

export const GiftingTier4LargeBadge = function GiftingTier4LargeBadge(width) {
  let num = width.width;
  ({ accessible, accessibilityLabel, resizeMode } = width);
  if (num === undefined) {
    num = 106;
  }
  let num2 = width.height;
  if (num2 === undefined) {
    num2 = 100;
  }
  let num3 = width.scale;
  if (num3 === undefined) {
    num3 = 1;
  }
  let obj = { uri: vanityUrlDefault };
  obj[1] = obj;
  obj = { width: num * num3, height: num2 * num3 };
  const items = [obj];
  obj[2] = items;
  obj[3] = accessible;
  obj[4] = accessibilityLabel;
  obj[5] = resizeMode;
  return jsx(preloadDefault, { width: num * num3, height: num2 * num3 });
};