// discord_app/design/components/Modal/native/ModalActionButton.native.tsx
import "noop";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { Button } from "../../Button/native/Button.native.tsx";

let c3;
let c4;
let c5;
const require = arg1;
({ jsx: c3, Fragment: c4, jsxs: c5 } = jsxProd);
let closure_6 = createCacheKey.createStyles({ spacer: { marginTop: 12 } });
const result = require("jsxProd").fileFinishedImporting("design/components/Modal/native/ModalActionButton.native.tsx");

export const ModalActionButton = function ModalActionButton(variant) {
  variant = variant.variant;
  const merged = Object.assign(variant, Object.create(null));
  let tmp5 = "secondary" === variant;
  if (tmp5) {
    let obj = { style: null };
    obj[0] = tmp2.spacer;
    tmp5 = callback(View, obj);
  }
  obj = { children: null };
  const items = [tmp5, ];
  obj = {};
  const merged1 = Object.assign(merged);
  obj.variant = variant;
  obj.size = "lg";
  items[1] = callback(Button /* Button */.Button, obj);
  obj[0] = items;
  return closure_5(closure_4, obj);
};