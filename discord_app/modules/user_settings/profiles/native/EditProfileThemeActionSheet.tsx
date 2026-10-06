// === Module 14469: EditProfileThemeActionSheet ===

// Module 14469 (EditProfileThemeActionSheet)
import nativeDefault from "native" /* 587 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4860 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let onResetTheme;

let c3;
let closure_4;
let size;
({ jsx: c3, jsxs: closure_4 } = Fragment);
let obj = { nitroWheel: size, titleWrapper: { flex: 0 }, titleContainer: { justifyContent: "flex-start" } };
size = { tintColor: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, marginLeft: 4, width: 20, height: 20 };
let closure_5 = createStyles.createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((onResetTheme) => {
  let items;
  let obj4;
  let tmp5;
  let tmp6;
  let tmp8;
  let obj = onResetTheme(576);
  const cResult = obj.c(16);
  onResetTheme = onResetTheme.onResetTheme;
  const tmp4 = closure_5();
  if (cResult[0] !== onResetTheme) {
    const fn = function s() {
      onResetTheme();
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet();
    };
    cResult[0] = onResetTheme;
    cResult[1] = fn;
    tmp5 = fn;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(onResetTheme(1126).t.DMeO2X);
    cResult[2] = stringResult;
    tmp6 = stringResult;
  } else {
    tmp6 = cResult[2];
  }
  if (cResult[3] !== tmp4.nitroWheel) {
    const obj2 = { style: tmp4.nitroWheel };
    const tmp10 = closure_3(onResetTheme(1188).NitroWheel, obj2);
    cResult[3] = tmp4.nitroWheel;
    cResult[4] = tmp10;
    tmp8 = tmp10;
  } else {
    tmp8 = cResult[4];
  }
  if (cResult[5] === tmp4.titleContainer) {
    if (cResult[6] === tmp4.titleWrapper) {
      let tmp11;
      let tmp14;
      let tmp13;
      let tmp17;
      if (cResult[7] === tmp8) {
        tmp11 = cResult[8];
      }
      const _Symbol = Symbol;
      if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
        const intl2 = tmp(1126).intl;
        const stringResult1 = intl2.string(onResetTheme(1126).t["L+GmoR"]);
        const intl3 = tmp(1126).intl;
        const stringResult2 = intl3.string(onResetTheme(1126).t.MA9iNr);
        cResult[9] = stringResult1;
        cResult[10] = stringResult2;
        tmp14 = stringResult2;
        tmp13 = stringResult1;
      } else {
        tmp13 = cResult[9];
        tmp14 = cResult[10];
      }
      if (cResult[11] !== tmp5) {
        const obj3 = { hasIcons: false, children: closure_3(onResetTheme(6000).TableRow, obj4) };
        const TableRowGroup = tmp(6081).TableRowGroup;
        obj4 = { label: tmp13, subLabel: tmp14, onPress: tmp5 };
        const tmp19 = closure_3(TableRowGroup, obj3);
        cResult[11] = tmp5;
        cResult[12] = tmp19;
        tmp17 = tmp19;
      } else {
        tmp17 = cResult[12];
      }
      if (cResult[13] === tmp11) {
        let tmp20;
        if (cResult[14] === tmp17) {
          tmp20 = cResult[15];
        }
        return tmp20;
      }
      const obj5 = { children: items };
      items = [tmp11, tmp17];
      const tmp22 = closure_4(onResetTheme(6708).ActionSheet, obj5);
      cResult[13] = tmp11;
      cResult[14] = tmp17;
      cResult[15] = tmp22;
      tmp20 = tmp22;
    }
  }
  const obj6 = { title: tmp6, trailing: tmp8, titleWrapperStyle: tmp4.titleWrapper, titleContainerStyle: tmp4.titleContainer };
  const tmp12 = closure_3(onResetTheme(6651).BottomSheetTitleHeader, obj6);
  cResult[5] = tmp4.titleContainer;
  cResult[6] = tmp4.titleWrapper;
  cResult[7] = tmp8;
  cResult[8] = tmp12;
  tmp11 = tmp12;
}) : ((onResetTheme) => {
  let TableRow;
  let intl;
  let intl2;
  let intl3;
  let items;
  let obj4;
  let obj9;
  onResetTheme = onResetTheme.onResetTheme;
  const tmp = closure_5();
  let obj = { children: items };
  const ActionSheet = onResetTheme(6708).ActionSheet;
  const obj3 = { title: intl.string(onResetTheme(1126).t.DMeO2X), trailing: closure_3(onResetTheme(1188).NitroWheel, obj4), titleWrapperStyle: null, titleContainerStyle: null };
  const BottomSheetTitleHeader = onResetTheme(6651).BottomSheetTitleHeader;
  intl = onResetTheme(1126).intl;
  obj4 = { style: tmp.nitroWheel };
  ({ titleWrapper: obj2.titleWrapperStyle, titleContainer: obj2.titleContainerStyle } = tmp);
  items = [closure_3(BottomSheetTitleHeader, obj3), ];
  const obj5 = { hasIcons: false, children: closure_3(TableRow, obj9) };
  const TableRowGroup = onResetTheme(6081).TableRowGroup;
  obj9 = {
    label: intl2.string(onResetTheme(1126).t["L+GmoR"]),
    subLabel: intl3.string(onResetTheme(1126).t.MA9iNr),
    onPress() {
      onResetTheme();
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet();
    }
  };
  TableRow = onResetTheme(6000).TableRow;
  intl2 = onResetTheme(1126).intl;
  intl3 = onResetTheme(1126).intl;
  items[1] = closure_3(TableRowGroup, obj5);
  return closure_4(ActionSheet, obj);
});
size = size_mod;
const result = size.fileFinishedImporting("modules/user_settings/profiles/native/EditProfileThemeActionSheet.tsx");

export default tmp4;