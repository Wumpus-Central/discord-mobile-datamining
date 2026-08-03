import "noop";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c4;
let c5;
const require = arg1;
function ConfirmActivityGateContent(children) {
  const tmp = createCacheKey();
  let obj = { style: tmp.alertContainer, children: null };
  const items = [callback(importDefault(10665), {}), ];
  obj = { style: tmp.alertBodyText, variant: "text-md/normal", children: children.description };
  items[1] = callback(require(4189) /* Text */.Text, obj);
  obj[1] = items;
  return callback2(View, obj);
}
({ jsx: c4, jsxs: c5 } = jsxProd);
createCacheKey = { alertContainer: { display: "flex", alignItems: "center", padding: 8 }, alertBodyText: null };
createCacheKey = { fontSize: 16, lineHeight: 24, color: require("Themes").colors.INTERACTIVE_TEXT_DEFAULT, textAlign: "center" };
createCacheKey[1] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("jsxProd").fileFinishedImporting("modules/activities/confirmActivityAgeGateAlert.native.tsx");

export const confirmActivityAgeGateAlert = function confirmActivityAgeGateAlert(arg0) {
  let application;
  let onAgree;
  let onDisagree;
  ({ application, onAgree, onDisagree } = arg0);
  const intl = require(1236) /* getSystemLocale */.intl;
  let obj = { applicationName: application.name };
  const formatToPlainStringResult = intl.formatToPlainString(require(1236) /* getSystemLocale */.t.OgmIqy, obj);
  obj = { title: null, children: null, cancelText: null, confirmText: null, onConfirm: null, onCancel: null, confirmColor: null };
  const intl2 = require(1236) /* getSystemLocale */.intl;
  obj[0] = intl2.string(require(1236) /* getSystemLocale */.t.SSDPOF);
  obj[1] = callback(ConfirmActivityGateContent, { description: formatToPlainStringResult });
  const intl3 = require(1236) /* getSystemLocale */.intl;
  obj[2] = intl3.string(require(1236) /* getSystemLocale */.t.hg1uxn);
  const intl4 = require(1236) /* getSystemLocale */.intl;
  obj[3] = intl4.string(require(1236) /* getSystemLocale */.t.wVq7uo);
  obj[4] = onAgree;
  obj[5] = onDisagree;
  obj[6] = require(1297) /* Button */.ButtonColors.RED;
  return Promise.resolve(importDefault(4532).show(obj));
};