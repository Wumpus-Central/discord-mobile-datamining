// === Module 16484: EditProfileThemeActionSheet ===

// Module 16484 (EditProfileThemeActionSheet)
import nativeDefault from "native" /* 575 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5258 */;
import noop from "module_19" /* 19 */;

const require = fn;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const createStyles = fn(5014);
const obj2 = { nitroWheel: null, titleWrapper: null, titleContainer: null };
let size = { tintColor: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, marginLeft: 4, width: 20, height: 20 };
obj2.nitroWheel = size;
obj2.titleWrapper = { flex: 0 };
obj2.titleContainer = { justifyContent: "flex-start" };
let closure_5 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/profiles/native/EditProfileThemeActionSheet.tsx");

export default function EditProfileThemeActionSheet(onResetTheme) {
  onResetTheme = onResetTheme.onResetTheme;
  const tmp = closure_5();
  const obj = { children: null };
  const obj3 = { title: null, trailing: null, titleWrapperStyle: null, titleContainerStyle: null };
  const intl = onResetTheme(1113).intl;
  obj3.title = intl.string(onResetTheme(1113).t.DMeO2X);
  obj3.trailing = closure_3(onResetTheme(1187).NitroWheel, { style: tmp.nitroWheel });
  ({ titleWrapper: obj2.titleWrapperStyle, titleContainer: obj2.titleContainerStyle } = tmp);
  const items = [closure_3(onResetTheme(7321).BottomSheetTitleHeader, obj3), ];
  const obj5 = { hasIcons: false, children: null };
  const obj9 = { label: null, subLabel: null, onPress: null };
  const intl2 = onResetTheme(1113).intl;
  obj9.label = intl2.string(onResetTheme(1113).t["L+GmoR"]);
  const intl3 = onResetTheme(1113).intl;
  obj9.subLabel = intl3.string(onResetTheme(1113).t.MA9iNr);
  obj9.onPress = function handleResetThemePress() {
    onResetTheme();
    ActionSheetActionCreatorsDefault.hideActionSheet();
  };
  obj5.children = closure_3(onResetTheme(6975).TableRow, obj9);
  items[1] = closure_3(onResetTheme(7060).TableRowGroup, obj5);
  obj.children = items;
  return closure_4(onResetTheme(7366).ActionSheet, obj);
};