// discord_app/modules/notifications/native/NotificationSurveyResponseActionSheet.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../intl/index.native.tsx";
import combinedDefault from "../../../utils/HelpdeskUtils.tsx";
import ACTION_SHEET_HEIGHT_HALFDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text from "../../../design/components/Text/native/Text.tsx";
import RedesignBottomSheetTitleHeaderBase from "../../../design/components/Sheet/native/BottomSheetTitleHeader.native.tsx";
import Background from "../../../design/components/Sheet/native/BottomSheet.native.tsx";
import ActionSheetCloseButton from "../../../design/components/Sheet/native/ActionSheetCloseButton.native.tsx";
import registerAssetDefault from "../../../../_runtime/10835_registerAsset.js";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";
import ME from "../../../Constants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";
import importDefaultResult from "../../rebrand/native/TextStyles.tsx";

require = fn;
function onClose() {
  ACTION_SHEET_HEIGHT_HALFDefault.hideActionSheet();
}
noopAll;
({ View: c3, Image: c4 } = get_ActivityIndicator);
({ HelpdeskArticles: c5, Fonts } = ME);
({ jsx: closure_6, jsxs: error } = jsxProd);
const createCacheKey = {};
const merged = Object.assign(importDefaultResult(Fonts.DISPLAY_EXTRABOLD, ThemesDefault.colors.INTERACTIVE_TEXT_ACTIVE, 16));
createCacheKey.marginTop = 8;
createCacheKey.marginBottom = 8;
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { color: ThemesDefault.colors.INTERACTIVE_TEXT_ACTIVE, textAlign: "center", width: 343 };
createCacheKey[2] = { paddingTop: 50, paddingBottom: 100, alignItems: "center" };
createCacheKey[3] = { width: 116, height: 93 };
let closure_8 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/notifications/native/NotificationSurveyResponseActionSheet.tsx");

export default function NotificationSurveyResponseActionSheet(header) {
  header = header.header;
  const tmp = callback2();
  let tmp5 = null != header;
  if (tmp5) {
    let obj = { title: null, trailing: null };
    obj[0] = header;
    obj = { onPress: null };
    obj[0] = onClose;
    obj[1] = callback(ActionSheetCloseButton.ActionSheetCloseButton, obj);
    tmp5 = callback(RedesignBottomSheetTitleHeaderBase.BottomSheetTitleHeader, obj);
  }
  obj = { children: null };
  const items = [tmp5, ];
  obj1 = { style: tmp.view, children: null };
  const items1 = [callback(closure_4, { style: tmp.rating, source: registerAssetDefault }), , ];
  const obj3 = { style: tmp.title, variant: "heading-md/bold", children: null };
  const intl = getSystemLocale.intl;
  obj3[2] = intl.string(getSystemLocale.t["d9+vQ8"]);
  items1[1] = callback(Text.Text, obj3);
  const obj4 = { style: tmp.subtitle, variant: "text-md/normal", children: null };
  const intl2 = getSystemLocale.intl;
  const obj5 = { helpUrl: null };
  obj5[0] = combinedDefault.getArticleURL(constants.HIGHLIGHTS_NOTIFICATIONS);
  obj4[2] = intl2.format(getSystemLocale.t.WxD5QY, obj5);
  items1[2] = callback(Text.Text, obj4);
  obj1[1] = items1;
  items[1] = callback(closure_3, obj1);
  obj[0] = items;
  return callback(Background.BottomSheet, obj);
};