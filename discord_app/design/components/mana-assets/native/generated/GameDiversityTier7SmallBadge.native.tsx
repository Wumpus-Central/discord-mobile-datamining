// === Module 6079: GameDiversityTier7SmallBadge ===

// Module 6079 (GameDiversityTier7SmallBadge)
import jsxProd from "jsxProd" /* 21 */;
import FastImageDefault from "FastImage" /* 5587 */;
import _modDef6080 from "module_6080" /* 6080 */;
import size from "module_2" /* 2 */;

const jsx = jsxProd.jsx;
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/GameDiversityTier7SmallBadge.native.tsx");

export const GameDiversityTier7SmallBadge = function GameDiversityTier7SmallBadge(width) {
  let num = width.width;
  ({ accessible, accessibilityLabel, resizeMode } = width);
  if (num === undefined) {
    num = 24;
  }
  let num2 = width.height;
  if (num2 === undefined) {
    num2 = 24;
  }
  let num3 = width.scale;
  if (num3 === undefined) {
    num3 = 1;
  }
  let obj = { fadeDuration: 0, source: null, style: null, accessible: null, accessibilityLabel: null, resizeMode: null };
  obj = { uri: _modDef6080 };
  obj.source = obj;
  const size = { width: num * num3, height: num2 * num3 };
  const items = [size];
  obj.style = items;
  obj.accessible = accessible;
  obj.accessibilityLabel = accessibilityLabel;
  obj.resizeMode = resizeMode;
  return jsx(FastImageDefault, { uri: _modDef6080 });
};