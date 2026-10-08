// discord_app/modules/user_settings/account/native/mfa_modal_flow/TwoFASetupModalHeader.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

const require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const createStyles = fn(5090);
let obj = {
  pageMarkerContainer: { flex: 1, alignItems: "center", justifyContent: "space-between", flexDirection: "row" },
  circleIcon: null,
  horizontalLine: null,
  filledCircle: null,
};
let size = {
  width: 14,
  height: 14,
  borderRadius: 7,
  borderWidth: 1,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG,
  borderColor: nativeDefault.colors.BORDER_SUBTLE,
};
obj.circleIcon = size;
const rect = {
  position: "absolute",
  left: 0,
  right: 0,
  top: "50%",
  bottom: "50%",
  height: 1,
  backgroundColor: nativeDefault.colors.BORDER_STRONG,
};
obj.horizontalLine = rect;
obj.filledCircle = {
  backgroundColor: nativeDefault.colors.TEXT_BRAND,
  borderColor: nativeDefault.colors.BORDER_SUBTLE,
};
let closure_5 = createStyles.createStyles(obj);
const ReactCompilerGating = fn(558);
let obj3 = { backgroundColor: nativeDefault.colors.TEXT_BRAND, borderColor: nativeDefault.colors.BORDER_SUBTLE };
size = fn(2);
let result = size.fileFinishedImporting(
  "modules/user_settings/account/native/mfa_modal_flow/TwoFASetupModalHeader.tsx",
);

export const PageMarker = noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function PageMarker(arg0) {
        const cResult = filledCircle(576).c(20);
        ({ numMarkers, currentPage: filledCircle } = arg0);
        const tmp2 = closure_5();
        dependencyMap = tmp2;
        if (cResult[0] === filledCircle) {
          if (cResult[1] === numMarkers) {
            if (cResult[2] === tmp2.circleIcon) {
              if (cResult[3] === tmp2.filledCircle) {
                const result = 20 * numMarkers;
                if (cResult[9] !== result) {
                  const obj2 = { width: result };
                  cResult[9] = result;
                  cResult[10] = obj2;
                  let tmp9 = obj2;
                } else {
                  tmp9 = cResult[10];
                }
                if (cResult[11] === tmp2.pageMarkerContainer) {
                  if (cResult[12] === tmp9) {
                    let tmp10 = cResult[13];
                  }
                  if (cResult[14] !== tmp2.horizontalLine) {
                    const obj3 = { style: tmp2.horizontalLine };
                    const tmp14 = closure_3(View, obj3);
                    cResult[14] = tmp2.horizontalLine;
                    cResult[15] = tmp14;
                    let tmp11 = tmp14;
                  } else {
                    tmp11 = cResult[15];
                  }
                  if (cResult[16] === tmp3) {
                    if (cResult[17] === tmp10) {
                      if (cResult[18] === tmp11) {
                        let tmp15 = cResult[19];
                      }
                      return tmp15;
                    }
                  }
                  const obj4 = { style: tmp10, children: null };
                  const items = [tmp11, tmp3];
                  obj4.children = items;
                  const tmp18 = closure_4(View, obj4);
                  cResult[16] = tmp3;
                  cResult[17] = tmp10;
                  cResult[18] = tmp11;
                  cResult[19] = tmp18;
                  tmp15 = tmp18;
                }
                const items1 = [tmp2.pageMarkerContainer, tmp9];
                cResult[11] = tmp2.pageMarkerContainer;
                cResult[12] = tmp9;
                cResult[13] = items1;
                tmp10 = items1;
              }
            }
          }
        }
        if (cResult[5] === filledCircle) {
          if (cResult[6] === tmp2.circleIcon) {
            if (cResult[7] === tmp2.filledCircle) {
              let tmp4 = cResult[8];
            }
            const _Array = Array;
            const ArrayResult = Array(numMarkers);
            const mapped = Array(numMarkers).fill(undefined).map(tmp4);
            cResult[0] = filledCircle;
            cResult[1] = numMarkers;
            ({ circleIcon: tmp[2], filledCircle } = tmp2);
            cResult[3] = filledCircle;
            cResult[4] = mapped;
            const fillResult = Array(numMarkers).fill(undefined);
          }
        }
        const fn = function u(arg0, arg1) {
          const style = [closure_1.circleIcon];
          const sum = arg1 + 1;
          filledCircle = filledCircle === sum;
          if (filledCircle) {
            filledCircle = closure_1.filledCircle;
          }
          style[1] = filledCircle;
          return React3(View, { style }, sum);
        };
        cResult[5] = filledCircle;
        cResult[6] = tmp2.circleIcon;
        cResult[7] = tmp2.filledCircle;
        cResult[8] = fn;
        tmp4 = fn;
        const obj = filledCircle(576);
      }
    : function PageMarker(arg0) {
        ({ numMarkers, currentPage: require } = arg0);
        const tmp = closure_5();
        closure_1 = tmp;
        const ArrayResult = Array(numMarkers);
        const obj = { style: null, children: null };
        const items = [tmp.pageMarkerContainer, { width: 20 * numMarkers }];
        obj.style = items;
        const mapped = Array(numMarkers)
          .fill(undefined)
          .map((item, index) => {
            const style = [closure_1.circleIcon];
            const sum = index + 1;
            let filledCircle = require === sum;
            if (filledCircle) {
              filledCircle = closure_1.filledCircle;
            }
            style[1] = filledCircle;
            return React3(View, { style }, sum);
          });
        const items1 = [closure_3(View, { style: tmp.horizontalLine }), mapped];
        obj.children = items1;
        return closure_4(View, obj);
      },
);
