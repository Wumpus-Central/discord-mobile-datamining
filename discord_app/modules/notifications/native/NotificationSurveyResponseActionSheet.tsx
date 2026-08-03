import "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import ME from "ME";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import importDefaultResult from "createTextStyle";

let Fonts;
let c3;
let c4;
let c5;
let closure_6;
let error;
const require = arg1;
function onClose() {
  importDefault(4161).hideActionSheet();
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
    obj[1] = callback(tmp3(5556).ActionSheetCloseButton, obj);
    tmp5 = callback(tmp3(5246).BottomSheetTitleHeader, obj);
  }
  obj = { children: null };
  const items = [tmp5, ];
  const obj1 = { style: tmp.view, children: null };
  const items1 = [callback(closure_4, { style: tmp.rating, source: importDefault(9556) }), , ];
  const obj3 = { style: tmp.title, variant: "heading-md/bold", children: null };
  const intl = tmp3(1236).intl;
  obj3[2] = intl.string(require(1236) /* getSystemLocale */.t["d9+vQ8"]);
  items1[1] = callback(require(4189) /* Text */.Text, obj3);
  const obj4 = { style: tmp.subtitle, variant: "text-md/normal", children: null };
  const intl2 = tmp3(1236).intl;
  const obj5 = { helpUrl: null };
  const obj2 = { style: tmp.rating, source: importDefault(9556) };
  obj5[0] = importDefault(1945).getArticleURL(constants.HIGHLIGHTS_NOTIFICATIONS);
  obj4[2] = intl2.format(require(1236) /* getSystemLocale */.t.WxD5QY, obj5);
  items1[2] = callback(require(4189) /* Text */.Text, obj4);
  obj1[1] = items1;
  items[1] = closure_7(closure_3, obj1);
  obj[0] = items;
  return closure_7(require(5247) /* Background */.BottomSheet, obj);
};