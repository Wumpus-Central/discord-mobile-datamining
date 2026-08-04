// discord_app/modules/notification_center/native/ForYouReadSectionHeader.tsx
import "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

let StyleSheet;
let obj1;
const require = arg1;
({ View: obj1, StyleSheet } = get_ActivityIndicator);
createCacheKey = { container: null, textHeader: null };
createCacheKey = { borderTopWidth: StyleSheet.hairlineWidth, borderTopColor: require("Themes").colors.BORDER_SUBTLE, marginVertical: 8, paddingHorizontal: 24 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { color: require("Themes").colors.TEXT_SUBTLE, marginTop: 20 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
obj1 = { color: require("Themes").colors.TEXT_SUBTLE, marginTop: 20 };
const result = require("jsxProd").fileFinishedImporting("modules/notification_center/native/ForYouReadSectionHeader.tsx");

export const ForYouReadSectionHeader = function ForYouReadSectionHeader() {
  const tmp = createCacheKey();
  let obj = { style: tmp.container, children: null };
  obj = { style: tmp.textHeader, variant: "text-sm/semibold", children: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[2] = intl.string(require(1236) /* getSystemLocale */.t.hftC1K);
  obj[1] = jsx(require(4189) /* Text */.Text, { style: tmp.textHeader, variant: "text-sm/semibold", children: null });
  return <closure_2 style={tmp.textHeader} variant="text-sm/semibold">{null}</closure_2>;
};