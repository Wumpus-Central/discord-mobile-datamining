// === Module 15936: ForYouReadSectionHeader ===

// Module 15936 (ForYouReadSectionHeader)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import Text from "Text" /* 4441 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4445 */;

require = arg1;
noopAll;
({ View: obj1, StyleSheet } = get_ActivityIndicator);
createCacheKey = { container: null, textHeader: null };
createCacheKey = { borderTopWidth: StyleSheet.hairlineWidth, borderTopColor: ThemesDefault.colors.BORDER_SUBTLE, marginVertical: 8, paddingHorizontal: 24 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { color: ThemesDefault.colors.TEXT_SUBTLE, marginTop: 20 };
let closure_4 = createCacheKey.createStyles(createCacheKey);
obj1 = { color: ThemesDefault.colors.TEXT_SUBTLE, marginTop: 20 };
const result = require("set").fileFinishedImporting("modules/notification_center/native/ForYouReadSectionHeader.tsx");

export const ForYouReadSectionHeader = function ForYouReadSectionHeader() {
  const tmp = callback();
  let obj = { style: tmp.container, children: null };
  obj = { style: tmp.textHeader, variant: "text-sm/semibold", children: null };
  const intl = getSystemLocale.intl;
  obj[2] = intl.string(getSystemLocale.t.hftC1K);
  obj[1] = jsx(Text.Text, { style: tmp.textHeader, variant: "text-sm/semibold", children: null });
  return <closure_2 style={tmp.textHeader} variant="text-sm/semibold">{null}</closure_2>;
};