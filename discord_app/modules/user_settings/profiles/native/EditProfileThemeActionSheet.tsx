// === Module 14624: EditProfileThemeActionSheet ===

// Module 14624 (EditProfileThemeActionSheet)
import nativeDefault from "native" /* 576 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import noop from "module_19" /* 19 */;

const require = fn;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
fn(4560);
const createStyles = { nitroWheel: null, titleWrapper: null, titleContainer: null };
let size = { tintColor: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, marginLeft: 4, width: 20, height: 20 };
createStyles.nitroWheel = size;
createStyles.titleWrapper = { flex: 0 };
createStyles.titleContainer = { justifyContent: "flex-start" };
let closure_5 = createStyles.createStyles(createStyles);
size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/profiles/native/EditProfileThemeActionSheet.tsx");

export default function EditProfileThemeActionSheet(onResetTheme) {
  onResetTheme = onResetTheme.onResetTheme;
  const tmp = closure_5();
  let obj = { children: null };
  obj = { title: null, trailing: null, titleWrapperStyle: null, titleContainerStyle: null };
  const intl = onResetTheme(1114).intl;
  obj.title = intl.string(onResetTheme(1114).t.DMeO2X);
  obj = { style: tmp.nitroWheel };
  obj.trailing = closure_3(onResetTheme(1178).NitroWheel, obj);
  ({ titleWrapper: obj2.titleWrapperStyle, titleContainer: obj2.titleContainerStyle } = tmp);
  const items = [closure_3(onResetTheme(7149).BottomSheetTitleHeader, obj), ];
  const obj1 = { hasIcons: false, children: null };
  const obj2 = { label: null, subLabel: null, onPress: null };
  const intl2 = onResetTheme(1114).intl;
  obj2.label = intl2.string(onResetTheme(1114).t["L+GmoR"]);
  const intl3 = onResetTheme(1114).intl;
  obj2.subLabel = intl3.string(onResetTheme(1114).t.MA9iNr);
  obj2.onPress = function onPress() {
    onResetTheme();
    ActionSheetActionCreatorsDefault.hideActionSheet();
  };
  obj1.children = closure_3(onResetTheme(5605).TableRow, obj2);
  items[1] = closure_3(onResetTheme(5687).TableRowGroup, obj1);
  obj.children = items;
  return closure_4(onResetTheme(7198).ActionSheet, obj);
};