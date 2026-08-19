// discord_app/modules/user_settings/profiles/native/EditProfileThemeActionSheet.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ACTION_SHEET_HEIGHT_HALFDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";

const require = fn;
noopAll;
({ jsx: c3, jsxs: c4 } = jsxProd);
const createCacheKey = { tintColor: ThemesDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, marginLeft: 4, width: 20, height: 20 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flex: 0 };
createCacheKey[2] = { justifyContent: "flex-start" };
let closure_5 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/user_settings/profiles/native/EditProfileThemeActionSheet.tsx");

export default function EditProfileThemeActionSheet(onResetTheme) {
  onResetTheme = onResetTheme.onResetTheme;
  const tmp = callback3();
  let obj = { title: null, trailing: null, titleWrapperStyle: null, titleContainerStyle: null };
  const intl = onResetTheme(1236).intl;
  obj[0] = intl.string(onResetTheme(1236).t.DMeO2X);
  obj = { style: tmp.nitroWheel };
  obj[1] = callback(onResetTheme(1297).NitroWheel, obj);
  ({ titleWrapper: obj2[2], titleContainer: obj2[3] } = tmp);
  const items = [callback(onResetTheme(6949).BottomSheetTitleHeader, obj), ];
  obj1 = { hasIcons: false, children: null };
  const obj2 = { label: null, subLabel: null, onPress: null };
  const intl2 = onResetTheme(1236).intl;
  obj2[0] = intl2.string(onResetTheme(1236).t["L+GmoR"]);
  const intl3 = onResetTheme(1236).intl;
  obj2[1] = intl3.string(onResetTheme(1236).t.MA9iNr);
  obj2[2] = function onPress() {
    onResetTheme();
    ACTION_SHEET_HEIGHT_HALFDefault.hideActionSheet();
  };
  obj1[1] = callback(onResetTheme(6291).TableRow, obj2);
  items[1] = callback(onResetTheme(6286).TableRowGroup, obj1);
  obj[0] = items;
  return callback2(onResetTheme(7175).ActionSheet, obj);
};