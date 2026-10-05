// === Module 12041: ApplicationCommandLoadingItem ===

// Module 12041 (ApplicationCommandLoadingItem)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import useFontScale from "useFontScale" /* 5602 */;
import ApplicationCommandsConstants from "ApplicationCommandsConstants" /* 10072 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
const View = react_native.View;
const AUTOCOMPLETE_ROW_HEIGHT = ApplicationCommandsConstants.AUTOCOMPLETE_ROW_HEIGHT;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let c7 = 16;
let closure_8 = createStyles.createStyles((arg0) => {
  let size1;
  let size2;
  const obj = { applicationCommandLoadingItem: { flexDirection: "row", paddingVertical: 4, paddingHorizontal: 16, alignItems: "center", height: Math.max(arg0 * AUTOCOMPLETE_ROW_HEIGHT, AUTOCOMPLETE_ROW_HEIGHT) }, applicationCommandLoadingLeftWrapper: { flexDirection: "column", width: "75%", height: "100%", justifyContent: "space-between" }, applicationCommandLoadingName: size, applicationCommandLoadingDescription: size1, applicationCommandLoadingSectionName: size2 };
  ({ flexDirection: "row", paddingVertical: 4, paddingHorizontal: 16, alignItems: "center", height: Math.max(arg0 * AUTOCOMPLETE_ROW_HEIGHT, AUTOCOMPLETE_ROW_HEIGHT) });
  size = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG, height: v16, borderRadius: v16, width: "20%" };
  size1 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, height: v16, borderRadius: v16, width: "80%" };
  size2 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG, paddingLeft: 16, width: "25%", marginLeft: "auto", height: v16, borderRadius: v16 };
  return obj;
});
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let items;
  let items1;
  let tmp3;
  let tmp7;
  const obj = react2;
  const cResult = obj.c(14);
  const obj2 = useFontScale;
  const tmp2 = closure_8(obj2.useFontScale());
  if (cResult[0] !== tmp2.applicationCommandLoadingName) {
    const obj3 = { style: tmp2.applicationCommandLoadingName };
    const tmp6 = hasOwnProperty(View, obj3);
    cResult[0] = tmp2.applicationCommandLoadingName;
    cResult[1] = tmp6;
    tmp3 = tmp6;
  } else {
    tmp3 = cResult[1];
  }
  if (cResult[2] !== tmp2.applicationCommandLoadingDescription) {
    const obj4 = { style: tmp2.applicationCommandLoadingDescription };
    const tmp10 = hasOwnProperty(View, obj4);
    cResult[2] = tmp2.applicationCommandLoadingDescription;
    cResult[3] = tmp10;
    tmp7 = tmp10;
  } else {
    tmp7 = cResult[3];
  }
  if (cResult[4] === tmp2.applicationCommandLoadingLeftWrapper) {
    if (cResult[5] === tmp3) {
      let tmp11;
      let tmp13;
      if (cResult[6] === tmp7) {
        tmp11 = cResult[7];
      }
      if (cResult[8] !== tmp2.applicationCommandLoadingSectionName) {
        const obj5 = { style: tmp2.applicationCommandLoadingSectionName };
        const tmp16 = hasOwnProperty(View, obj5);
        cResult[8] = tmp2.applicationCommandLoadingSectionName;
        cResult[9] = tmp16;
        tmp13 = tmp16;
      } else {
        tmp13 = cResult[9];
      }
      if (cResult[10] === tmp2.applicationCommandLoadingItem) {
        if (cResult[11] === tmp11) {
          let tmp17;
          if (cResult[12] === tmp13) {
            tmp17 = cResult[13];
          }
          return tmp17;
        }
      }
      const obj6 = { style: tmp2.applicationCommandLoadingItem, children: items };
      items = [tmp11, tmp13];
      const tmp20 = metroRequire(View, obj6);
      cResult[10] = tmp2.applicationCommandLoadingItem;
      cResult[11] = tmp11;
      cResult[12] = tmp13;
      cResult[13] = tmp20;
      tmp17 = tmp20;
    }
  }
  const obj7 = { style: tmp2.applicationCommandLoadingLeftWrapper, children: items1 };
  items1 = [tmp3, tmp7];
  const tmp12 = metroRequire(View, obj7);
  cResult[4] = tmp2.applicationCommandLoadingLeftWrapper;
  cResult[5] = tmp3;
  cResult[6] = tmp7;
  cResult[7] = tmp12;
  tmp11 = tmp12;
}) : (() => {
  let items;
  let items1;
  const obj = useFontScale;
  const tmp = closure_8(obj.useFontScale());
  const obj3 = { style: tmp.applicationCommandLoadingLeftWrapper, children: items };
  items = [, ];
  const obj2 = { style: tmp.applicationCommandLoadingItem, children: items1 };
  const obj4 = { style: tmp.applicationCommandLoadingName };
  items[0] = hasOwnProperty(View, obj4);
  const obj5 = { style: tmp.applicationCommandLoadingDescription };
  items[1] = hasOwnProperty(View, obj5);
  items1 = [metroRequire(View, obj3), ];
  const obj6 = { style: tmp.applicationCommandLoadingSectionName };
  items1[1] = hasOwnProperty(View, obj6);
  return metroRequire(View, obj2);
});
let size = size_mod;
const result = size.fileFinishedImporting("modules/application_commands/native/ApplicationCommandLoadingItem.tsx");

export default tmp4;