// === Module 11964: ModalActionButton ===

// Module 11964 (ModalActionButton)
import noopAll from "noop" /* 19 */;
import Button from "Button" /* 4745 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

require = fn;
noopAll;
({ jsx: c3, Fragment: c4, jsxs: c5 } = jsxProd);
let closure_6 = createCacheKey.createStyles({ spacer: { marginTop: 12 } });
const result = require("obj132").fileFinishedImporting("design/components/Modal/native/ModalActionButton.native.tsx");

export const ModalActionButton = function ModalActionButton(variant) {
  variant = variant.variant;
  const merged = Object.assign(variant, Object.create(null));
  let tmp5 = "secondary" === variant;
  if (tmp5) {
    let obj = { style: null };
    obj[0] = tmp2.spacer;
    tmp5 = callback(View, obj);
  }
  const items = [tmp5, ];
  obj = {};
  const merged1 = Object.assign(merged);
  obj.variant = variant;
  obj.size = "lg";
  items[1] = callback(Button.Button, obj);
  obj[0] = items;
  return callback(closure_4, obj);
};