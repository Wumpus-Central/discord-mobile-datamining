// === Module 10873: onClose ===

// Module 10873 (onClose)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import combinedDefault from "combined" /* 1994 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4346 */;
import Text from "Text" /* 4739 */;
import Background from "Background" /* 6988 */;
import registerAssetDefault from "registerAsset" /* 10874 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import ME from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4668 */;
import importDefaultResult from "createTextStyle" /* 6819 */;

require = arg1;
function onClose() {
  ACTION_SHEET_HEIGHT_HALFDefault.hideActionSheet();
}
noopAll;
({ View: c3, Image: c4 } = get_ActivityIndicator);
({ HelpdeskArticles: c5, Fonts } = ME);
({ jsx: closure_6, jsxs: error } = jsxProd);
createCacheKey = { title: null, subtitle: null, view: null, rating: null };
createCacheKey = {};
const merged = Object.assign(importDefaultResult(Fonts.DISPLAY_EXTRABOLD, ThemesDefault.colors.INTERACTIVE_TEXT_ACTIVE, 16));
createCacheKey.marginTop = 8;
createCacheKey.marginBottom = 8;
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { color: ThemesDefault.colors.INTERACTIVE_TEXT_ACTIVE, textAlign: "center", width: 343 };
createCacheKey[2] = { paddingTop: 50, paddingBottom: 100, alignItems: "center" };
createCacheKey[3] = { width: 116, height: 93 };
let closure_8 = createCacheKey.createStyles(createCacheKey);
let obj1 = { color: ThemesDefault.colors.INTERACTIVE_TEXT_ACTIVE, textAlign: "center", width: 343 };
const result = require("set").fileFinishedImporting("modules/notifications/native/NotificationSurveyResponseActionSheet.tsx");

export default function NotificationSurveyResponseActionSheet(header) {
  header = header.header;
  const tmp = callback2();
  let tmp5 = null != header;
  if (tmp5) {
    let obj = { title: null, trailing: null };
    obj[0] = header;
    obj = { onPress: null };
    obj[0] = onClose;
    obj[1] = callback(tmp3(7214).ActionSheetCloseButton, obj);
    tmp5 = callback(tmp3(6987).BottomSheetTitleHeader, obj);
  }
  obj = { children: null };
  const items = [tmp5, ];
  obj1 = { style: tmp.view, children: null };
  const items1 = [callback(closure_4, { style: tmp.rating, source: registerAssetDefault }), , ];
  const obj3 = { style: tmp.title, variant: "heading-md/bold", children: null };
  const intl = tmp3(1236).intl;
  obj3[2] = intl.string(getSystemLocale.t["d9+vQ8"]);
  items1[1] = callback(Text.Text, obj3);
  const obj4 = { style: tmp.subtitle, variant: "text-md/normal", children: null };
  const intl2 = tmp3(1236).intl;
  const obj5 = { helpUrl: null };
  const obj2 = { style: tmp.rating, source: registerAssetDefault };
  obj5[0] = combinedDefault.getArticleURL(constants.HIGHLIGHTS_NOTIFICATIONS);
  obj4[2] = intl2.format(getSystemLocale.t.WxD5QY, obj5);
  items1[2] = callback(Text.Text, obj4);
  obj1[1] = items1;
  items[1] = closure_7(closure_3, obj1);
  obj[0] = items;
  return closure_7(Background.BottomSheet, obj);
};