// === Module 14569: TwoFASetupModalHeader ===

// Module 14569 (TwoFASetupModalHeader)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let dependencyMap;

let c3;
let closure_4;
let obj2;
let rect;
let size;
const View = react_native.View;
({ jsx: c3, jsxs: closure_4 } = Fragment);
let createStyles = createStyles_mod;
let obj = { pageMarkerContainer: { flex: 1, alignItems: "center", justifyContent: "space-between", flexDirection: "row" }, circleIcon: size, horizontalLine: rect, filledCircle: obj2 };
size = { width: 14, height: 14, borderRadius: 7, borderWidth: 1, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG, borderColor: nativeDefault.colors.BORDER_SUBTLE };
createStyles = createStyles.createStyles;
rect = { position: "absolute", left: 0, right: 0, top: "50%", bottom: "50%", height: 1, backgroundColor: nativeDefault.colors.BORDER_STRONG };
obj2 = { backgroundColor: nativeDefault.colors.TEXT_BRAND, borderColor: nativeDefault.colors.BORDER_SUBTLE };
let closure_5 = createStyles(obj);
const memo = react.memo;
const memoResult = memo(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_1;
  let currentPage;
  let items;
  let numMarkers;
  let tmp3;
  const obj = currentPage(576);
  const cResult = obj.c(20);
  ({ numMarkers, currentPage } = arg0);
  const tmp2 = closure_5();
  dependencyMap = tmp2;
  if (cResult[0] === currentPage) {
    if (cResult[1] === numMarkers) {
      if (cResult[2] === tmp2.circleIcon) {
        let tmp8;
        if (cResult[3] === tmp2.filledCircle) {
          tmp3 = cResult[4];
        }
        const result = 20 * numMarkers;
        if (cResult[9] !== result) {
          const obj2 = { width: result };
          cResult[9] = result;
          cResult[10] = obj2;
          tmp8 = obj2;
        } else {
          tmp8 = cResult[10];
        }
        if (cResult[11] === tmp2.pageMarkerContainer) {
          let tmp9;
          let tmp10;
          if (cResult[12] === tmp8) {
            tmp9 = cResult[13];
          }
          if (cResult[14] !== tmp2.horizontalLine) {
            const obj3 = { style: tmp2.horizontalLine };
            const tmp13 = closure_3(View, obj3);
            cResult[14] = tmp2.horizontalLine;
            cResult[15] = tmp13;
            tmp10 = tmp13;
          } else {
            tmp10 = cResult[15];
          }
          if (cResult[16] === tmp3) {
            if (cResult[17] === tmp9) {
              let tmp14;
              if (cResult[18] === tmp10) {
                tmp14 = cResult[19];
              }
              return tmp14;
            }
          }
          const obj4 = { style: tmp9, children: items };
          items = [tmp10, tmp3];
          const tmp17 = closure_4(View, obj4);
          cResult[16] = tmp3;
          cResult[17] = tmp9;
          cResult[18] = tmp10;
          cResult[19] = tmp17;
          tmp14 = tmp17;
        }
        const items1 = [tmp2.pageMarkerContainer, tmp8];
        cResult[11] = tmp2.pageMarkerContainer;
        cResult[12] = tmp8;
        cResult[13] = items1;
        tmp9 = items1;
      }
    }
  }
  if (cResult[5] === currentPage) {
    if (cResult[6] === tmp2.circleIcon) {
      let tmp4;
      if (cResult[7] === tmp2.filledCircle) {
        tmp4 = cResult[8];
      }
      const _Array = Array;
      const ArrayResult = Array(numMarkers);
      const fillResult = ArrayResult.fill(undefined);
      const mapped = fillResult.map(tmp4);
      cResult[0] = currentPage;
      cResult[1] = numMarkers;
      cResult[2] = tmp2.circleIcon;
      cResult[3] = tmp2.filledCircle;
      cResult[4] = mapped;
      tmp3 = mapped;
    }
  }
  const fn = function u(arg0, arg1) {
    const style = [closure_1.circleIcon, ];
    const sum = arg1 + 1;
    const filledCircle = currentPage === sum && closure_1.filledCircle;
    style[1] = filledCircle;
    return _false(View, { style }, sum);
  };
  cResult[5] = currentPage;
  cResult[6] = tmp2.circleIcon;
  cResult[7] = tmp2.filledCircle;
  cResult[8] = fn;
  tmp4 = fn;
}) : ((arg0) => {
  let items;
  let items1;
  let numMarkers;
  ({ numMarkers, currentPage: require } = arg0);
  const tmp = closure_5();
  let closure_1 = tmp;
  const obj = { style: items, children: items1 };
  items = [tmp.pageMarkerContainer, ];
  const obj2 = { width: 20 * numMarkers };
  items[1] = obj2;
  const ArrayResult = Array(numMarkers);
  const fillResult = ArrayResult.fill(undefined);
  const obj3 = { style: tmp.horizontalLine };
  const mapped = fillResult.map((item, index) => {
    const style = [closure_1.circleIcon, ];
    const sum = index + 1;
    const filledCircle = require === sum && closure_1.filledCircle;
    style[1] = filledCircle;
    return _false(View, { style }, sum);
  });
  items1 = [closure_3(View, obj3), mapped];
  return closure_4(View, obj);
}));
size = size_mod;
let result = size.fileFinishedImporting("modules/user_settings/account/native/mfa_modal_flow/TwoFASetupModalHeader.tsx");

export const PageMarker = memoResult;