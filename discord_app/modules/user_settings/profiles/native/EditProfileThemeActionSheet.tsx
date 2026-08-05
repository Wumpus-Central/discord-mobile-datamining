// discord_app/modules/user_settings/profiles/native/EditProfileThemeActionSheet.tsx
import "noop";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c3;
let c4;
const require = arg1;
({ jsx: c3, jsxs: c4 } = jsxProd);
createCacheKey = { nitroWheel: null, titleWrapper: null, titleContainer: null };
createCacheKey = { tintColor: require("Themes").colors.MOBILE_TEXT_HEADING_PRIMARY, marginLeft: 4, width: 20, height: 20 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flex: 0 };
createCacheKey[2] = { justifyContent: "flex-start" };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("createCacheKey").fileFinishedImporting("modules/user_settings/profiles/native/EditProfileThemeActionSheet.tsx");

export default function EditProfileThemeActionSheet(onResetTheme) {
  onResetTheme = onResetTheme.onResetTheme;
  const tmp = createCacheKey();
  let obj = { children: null };
  obj = { title: null, trailing: null, titleWrapperStyle: null, titleContainerStyle: null };
  const intl = onResetTheme(1236).intl;
  obj[0] = intl.string(onResetTheme(1236).t.DMeO2X);
  obj = { style: tmp.nitroWheel };
  obj[1] = callback(onResetTheme(1297).NitroWheel, obj);
  ({ titleWrapper: obj2[2], titleContainer: obj2[3] } = tmp);
  const items = [callback(onResetTheme(5337).BottomSheetTitleHeader, obj), ];
  const obj1 = { hasIcons: false, children: null };
  const obj2 = { label: null, subLabel: null, onPress: null };
  const intl2 = onResetTheme(1236).intl;
  obj2[0] = intl2.string(onResetTheme(1236).t["L+GmoR"]);
  const intl3 = onResetTheme(1236).intl;
  obj2[1] = intl3.string(onResetTheme(1236).t.MA9iNr);
  obj2[2] = function onPress() {
    onResetTheme();
    outer1_1(outer1_2[10]).hideActionSheet();
  };
  obj1[1] = callback(onResetTheme(5315).TableRow, obj2);
  items[1] = callback(onResetTheme(5649).TableRowGroup, obj1);
  obj[0] = items;
  return callback2(onResetTheme(5646).ActionSheet, obj);
};