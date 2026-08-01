// === Module 9070: AcceptRequestConfirmationModal ===

// Module 9070 (AcceptRequestConfirmationModal)
import "noop";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c4;
let c5;
const require = arg1;
({ jsx: c4, jsxs: c5 } = jsxProd);
createCacheKey = { bodyText: null, text: null };
createCacheKey = { textAlign: "center", alignItems: "center", gap: require("Themes").space.PX_8 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { textAlign: "center" };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("jsxProd").fileFinishedImporting("modules/people/strangers/native/AcceptRequestConfirmationModal.tsx");

export default function AcceptRequestConfirmationModal(onConfirm) {
  onConfirm = onConfirm.onConfirm;
  const tmp = createCacheKey();
  let obj = { confirmText: null, cancelText: null, onConfirm: null, onCancel: null, children: null };
  const intl = onConfirm(1236).intl;
  obj[0] = intl.string(onConfirm(1236).t.MMlhsr);
  const intl2 = onConfirm(1236).intl;
  obj[1] = intl2.string(onConfirm(1236).t["ETE/oC"]);
  obj[2] = function onConfirm() {
    onConfirm();
    outer1_1(outer1_2[7]).close();
  };
  obj[3] = onConfirm.onCancel;
  obj = { style: tmp.bodyText, children: null };
  obj = { variant: "heading-lg/bold", color: "text-strong", style: tmp.text, children: null };
  const intl3 = onConfirm(1236).intl;
  obj[3] = intl3.string(onConfirm(1236).t.eJzSDT);
  const items = [callback(onConfirm(4189).Text, obj), ];
  const obj1 = { variant: "text-md/medium", color: "text-subtle", style: tmp.text, children: null };
  const intl4 = onConfirm(1236).intl;
  obj1[3] = intl4.string(onConfirm(1236).t.GB4jUw);
  items[1] = callback(onConfirm(4189).Text, obj1);
  obj[1] = items;
  obj[4] = callback2(View, obj);
  return callback(importDefault(4622), obj);
};