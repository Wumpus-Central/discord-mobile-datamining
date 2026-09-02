// === Module 14501: EditProfileThemeActionSheet ===

// Module 14501 (EditProfileThemeActionSheet)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 709 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

const require = arg1;
noopAll;
({ jsx: c3, jsxs: c4 } = jsxProd);
createCacheKey = { nitroWheel: null, titleWrapper: null, titleContainer: null };
createCacheKey = { tintColor: ThemesDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, marginLeft: 4, width: 20, height: 20 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flex: 0 };
createCacheKey[2] = { justifyContent: "flex-start" };
let closure_5 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/user_settings/profiles/native/EditProfileThemeActionSheet.tsx");

export default function EditProfileThemeActionSheet(onResetTheme) {
  onResetTheme = onResetTheme.onResetTheme;
  const tmp = callback3();
  let obj = { children: null };
  obj = { title: null, trailing: null, titleWrapperStyle: null, titleContainerStyle: null };
  const intl = onResetTheme(1233).intl;
  obj[0] = intl.string(onResetTheme(1233).t.DMeO2X);
  obj = { style: tmp.nitroWheel };
  obj[1] = callback(onResetTheme(1296).NitroWheel, obj);
  ({ titleWrapper: obj2[2], titleContainer: obj2[3] } = tmp);
  const items = [callback(onResetTheme(5629).BottomSheetTitleHeader, obj), ];
  obj1 = { hasIcons: false, children: null };
  const obj2 = { label: null, subLabel: null, onPress: null };
  const intl2 = onResetTheme(1233).intl;
  obj2[0] = intl2.string(onResetTheme(1233).t["L+GmoR"]);
  const intl3 = onResetTheme(1233).intl;
  obj2[1] = intl3.string(onResetTheme(1233).t.MA9iNr);
  obj2[2] = function onPress() {
    onResetTheme();
    closure_1_1(closure_1_2[10]).hideActionSheet();
  };
  obj1[1] = callback(onResetTheme(5607).TableRow, obj2);
  items[1] = callback(onResetTheme(6000).TableRowGroup, obj1);
  obj[0] = items;
  return callback2(onResetTheme(5997).ActionSheet, obj);
};