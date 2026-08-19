// === Module 5546: BookIllocon ===

// Module 5546 (BookIllocon)
import obj132 from "obj132" /* 2 */;
import jsxProd from "jsxProd" /* 21 */;
import preloadDefault from "preload" /* 5449 */;
import metadataDefault from "metadata" /* 5547 */;

const jsx = jsxProd.jsx;
const result = obj132.fileFinishedImporting("design/components/mana-assets/native/generated/BookIllocon.native.tsx");

export const BookIllocon = function BookIllocon(size) {
  let num = size.size;
  ({ accessible, accessibilityLabel, resizeMode } = size);
  if (num === undefined) {
    num = 64;
  }
  const obj = { uri: metadataDefault };
  obj[1] = obj;
  const items = [{ width: num, height: num }];
  obj[2] = items;
  obj[3] = accessible;
  obj[4] = accessibilityLabel;
  obj[5] = resizeMode;
  return jsx(preloadDefault, { uri: metadataDefault });
};