// === Module 11728: PlaceholderAppRow ===

// Module 11728 (PlaceholderAppRow)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import TableRow2 from "TableRow" /* 6000 */;
import usePlaceholderSize from "usePlaceholderSize" /* 11682 */;
import react from "react" /* 19 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let obj2;
let obj3;
let size;
const View = react_native.View;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { loadingAppIcon: size, loadingTextPlaceholder: obj2, loadingTextPlaceholderSmall: obj3 };
size = { width: 32, height: 32, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
createStyles = createStyles.createStyles;
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, height: 16, marginBottom: 4, borderRadius: nativeDefault.radii.lg, alignSelf: "flex-start" };
obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, height: 16, borderRadius: nativeDefault.radii.lg, alignSelf: "flex-start" };
let closure_4 = createStyles(obj);
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let isFirstRow;
  let isLastRow;
  let tmp14;
  let tmp9;
  const obj = react2;
  const cResult = obj.c(19);
  ({ isFirstRow, isLastRow } = arg0);
  const tmp6 = closure_4();
  const tmpResult = usePlaceholderSize;
  const placeholderWidth = tmpResult.usePlaceholderWidth(10, 50);
  const tmpResult2 = usePlaceholderSize;
  const placeholderWidth1 = tmpResult2.usePlaceholderWidth(30, 90);
  if (cResult[0] !== tmp6.loadingAppIcon) {
    const tmp12 = <View style={tmp6.loadingAppIcon} />;
    cResult[0] = tmp6.loadingAppIcon;
    cResult[1] = tmp12;
    tmp9 = tmp12;
  } else {
    tmp9 = cResult[1];
  }
  const combined = "" + placeholderWidth + "%";
  if (cResult[2] !== combined) {
    const obj3 = { width: combined };
    cResult[2] = combined;
    cResult[3] = obj3;
    tmp14 = obj3;
  } else {
    tmp14 = cResult[3];
  }
  if (cResult[4] === tmp6.loadingTextPlaceholder) {
    let tmp15;
    let tmp18;
    if (cResult[5] === tmp14) {
      tmp15 = cResult[6];
    }
    const _HermesInternal = HermesInternal;
    const combined1 = "" + placeholderWidth1 + "%";
    if (cResult[7] !== combined1) {
      const obj4 = { width: combined1 };
      cResult[7] = combined1;
      cResult[8] = obj4;
      tmp18 = obj4;
    } else {
      tmp18 = cResult[8];
    }
    if (cResult[9] === tmp6.loadingTextPlaceholderSmall) {
      let tmp19;
      if (cResult[10] === tmp18) {
        tmp19 = cResult[11];
      }
      const _Symbol = Symbol;
      if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
        class L {
          constructor() {
            return;
          }
        }
        cResult[12] = L;
      } else {
        class L {
          constructor() {
            return;
          }
        }
      }
      if (cResult[13] === (undefined !== isFirstRow && isFirstRow)) {
        class L {
          constructor() {
            return;
          }
        }
      }
      cResult[13] = undefined !== isFirstRow && isFirstRow;
      cResult[14] = undefined !== isLastRow && isLastRow;
      cResult[15] = tmp9;
      cResult[16] = tmp15;
      cResult[17] = tmp19;
      cResult[18] = jsx(TableRow2.TableRow, { icon: tmp9, label: tmp15, subLabel: tmp19, subLabelLineClamp: 1, start: undefined !== isFirstRow && isFirstRow, end: undefined !== isLastRow && isLastRow, onPress: L });
      const tmp26 = jsx(TableRow2.TableRow, { icon: tmp9, label: tmp15, subLabel: tmp19, subLabelLineClamp: 1, start: undefined !== isFirstRow && isFirstRow, end: undefined !== isLastRow && isLastRow, onPress: L });
    }
    const items = [tmp6.loadingTextPlaceholderSmall, tmp18];
    const tmp22 = <View style={items} />;
    cResult[9] = tmp6.loadingTextPlaceholderSmall;
    cResult[10] = tmp18;
    cResult[11] = tmp22;
    tmp19 = tmp22;
  }
  const items1 = [tmp6.loadingTextPlaceholder, tmp14];
  const tmp16 = <View style={items1} />;
  cResult[4] = tmp6.loadingTextPlaceholder;
  cResult[5] = tmp14;
  cResult[6] = tmp16;
  tmp15 = tmp16;
}) : ((isFirstRow) => {
  let flag = isFirstRow.isFirstRow;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = isFirstRow.isLastRow;
  if (flag2 === undefined) {
    flag2 = false;
  }
  const tmp = closure_4();
  const obj = usePlaceholderSize;
  const placeholderWidth = obj.usePlaceholderWidth(10, 50);
  const obj2 = usePlaceholderSize;
  const placeholderWidth1 = obj2.usePlaceholderWidth(30, 90);
  const TableRow = TableRow2.TableRow;
  const items = [tmp.loadingTextPlaceholder, { width: "" + placeholderWidth + "%" }];
  ({ width: "" + placeholderWidth + "%" });
  const items1 = [tmp.loadingTextPlaceholderSmall, { width: "" + placeholderWidth1 + "%" }];
  ({ width: "" + placeholderWidth1 + "%" });
  return <TableRow icon={null} label={null} subLabel={null} subLabelLineClamp={1} start={flag} end={flag2} onPress={function onPress() {

  }} />;
});
size = size_mod;
const result = size.fileFinishedImporting("modules/app_launcher/native/base_components/PlaceholderAppRow.tsx");

export default tmp4;