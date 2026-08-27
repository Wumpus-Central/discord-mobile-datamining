// === Module 6955: SnailIllocon ===

// Module 6955 (SnailIllocon)
import set from "set" /* 2 */;
import jsxProd from "jsxProd" /* 21 */;
import preloadDefault from "preload" /* 5445 */;
import metadataDefault from "metadata" /* 6956 */;

const jsx = jsxProd.jsx;
const result = set.fileFinishedImporting("design/components/mana-assets/native/generated/SnailIllocon.native.tsx");

export const SnailIllocon = function SnailIllocon(size) {
  let num = size.size;
  ({ accessible, accessibilityLabel, resizeMode } = size);
  if (num === undefined) {
    num = 64;
  }
  let obj = { fadeDuration: 0, source: null, style: null, accessible: null, accessibilityLabel: null, resizeMode: null };
  obj = { uri: metadataDefault };
  obj[1] = obj;
  const items = [{ width: num, height: num }];
  obj[2] = items;
  obj[3] = accessible;
  obj[4] = accessibilityLabel;
  obj[5] = resizeMode;
  return jsx(preloadDefault, { uri: metadataDefault });
};