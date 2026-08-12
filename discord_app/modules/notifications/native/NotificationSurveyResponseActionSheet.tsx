// discord_app/modules/notifications/native/NotificationSurveyResponseActionSheet.tsx
import "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import ME from "ME";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import importDefaultResult from "createTextStyle";
import { registerAsset } from "../../../../_runtime/11169_registerAsset.js";
import { Background } from "../../../design/components/Sheet/native/BottomSheet.native.tsx";
import { Text } from "../../../design/components/Text/native/Text.tsx";
import { getSystemLocale } from "../../../intl/index.native.tsx";
import { combined } from "../../../utils/HelpdeskUtils.tsx";
import { ACTION_SHEET_HEIGHT_HALF } from "../../action_sheet/native/ActionSheetActionCreators.tsx";

let Fonts;
let c3;
let c4;
let c5;
let closure_6;
let error;
const require = arg1;
function onClose() {
  ACTION_SHEET_HEIGHT_HALF.hideActionSheet();
}
({ View: c3, Image: c4 } = get_ActivityIndicator);
({ HelpdeskArticles: c5, Fonts } = ME);
({ jsx: closure_6, jsxs: error } = jsxProd);
createCacheKey = { title: null, subtitle: null, view: null, rating: null };
createCacheKey = {};
const merged = Object.assign(require("createTextStyle")(Fonts.DISPLAY_EXTRABOLD, require("Themes").colors.INTERACTIVE_TEXT_ACTIVE, 16));
createCacheKey.marginTop = 8;
createCacheKey.marginBottom = 8;
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { color: require("Themes").colors.INTERACTIVE_TEXT_ACTIVE, textAlign: "center", width: 343 };
createCacheKey[2] = { paddingTop: 50, paddingBottom: 100, alignItems: "center" };
createCacheKey[3] = { width: 116, height: 93 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj1 = { color: require("Themes").colors.INTERACTIVE_TEXT_ACTIVE, textAlign: "center", width: 343 };
const result = require("ME").fileFinishedImporting("modules/notifications/native/NotificationSurveyResponseActionSheet.tsx");

export default function NotificationSurveyResponseActionSheet(header) {
  header = header.header;
  const tmp = createCacheKey();
  let tmp5 = null != header;
  if (tmp5) {
    let obj = { title: null, trailing: null };
    obj[0] = header;
    obj = { onPress: null };
    obj[0] = onClose;
    obj[1] = callback(tmp3(5804).ActionSheetCloseButton, obj);
    tmp5 = callback(tmp3(5435).BottomSheetTitleHeader, obj);
  }
  obj = { children: null };
  const items = [tmp5, ];
  const obj1 = { style: tmp.view, children: null };
  const items1 = [callback(closure_4, { style: tmp.rating, source: registerAsset }), , ];
  const obj3 = { style: tmp.title, variant: "heading-md/bold", children: null };
  const intl = tmp3(1236).intl;
  obj3[2] = intl.string(getSystemLocale.t["d9+vQ8"]);
  items1[1] = callback(Text.Text, obj3);
  const obj4 = { style: tmp.subtitle, variant: "text-md/normal", children: null };
  const intl2 = tmp3(1236).intl;
  const obj5 = { helpUrl: null };
  const obj2 = { style: tmp.rating, source: registerAsset };
  obj5[0] = combined.getArticleURL(constants.HIGHLIGHTS_NOTIFICATIONS);
  obj4[2] = intl2.format(getSystemLocale.t.WxD5QY, obj5);
  items1[2] = callback(Text.Text, obj4);
  obj1[1] = items1;
  items[1] = closure_7(closure_3, obj1);
  obj[0] = items;
  return closure_7(Background.BottomSheet, obj);
};