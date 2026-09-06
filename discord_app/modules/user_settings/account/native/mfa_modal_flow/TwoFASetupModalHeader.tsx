// === Module 14784: TwoFASetupModalHeader ===

// Module 14784 (TwoFASetupModalHeader)
import nativeDefault from "native" /* 576 */;
import noop from "module_19" /* 19 */;

const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_1, jsxs: c2 } = jsxProd);
const createStyles = fn(4560);
let obj = { pageMarkerContainer: { flex: 1, alignItems: "center", justifyContent: "space-between", flexDirection: "row" }, circleIcon: null, horizontalLine: null, filledCircle: null };
let size = { width: 14, height: 14, borderRadius: 7, borderWidth: 1, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG, borderColor: nativeDefault.colors.BORDER_SUBTLE };
obj.circleIcon = size;
const rect = { position: "absolute", left: 0, right: 0, top: "50%", bottom: "50%", height: 1, backgroundColor: nativeDefault.colors.BORDER_STRONG };
obj.horizontalLine = rect;
obj = { backgroundColor: nativeDefault.colors.TEXT_BRAND, borderColor: nativeDefault.colors.BORDER_SUBTLE };
obj.filledCircle = obj;
let closure_3 = createStyles.createStyles(obj);
size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/account/native/mfa_modal_flow/TwoFASetupModalHeader.tsx");

export const PageMarker = noop.memo((arg0) => {
  ({ numMarkers, currentPage: View } = arg0);
  const tmp = closure_3();
  closure_1 = tmp;
  const ArrayResult = Array(numMarkers);
  let obj = { style: null, children: null };
  const items = [tmp.pageMarkerContainer, ];
  obj = { width: 20 * numMarkers };
  items[1] = obj;
  obj.style = items;
  const mapped = Array(numMarkers).fill(undefined).map((item, index) => {
    const style = [closure_1.circleIcon, ];
    const sum = index + 1;
    let filledCircle = closure_1_0 === sum;
    if (filledCircle) {
      filledCircle = closure_1.filledCircle;
    }
    style[1] = filledCircle;
    return framebus(View, { style }, sum);
  });
  const items1 = [closure_1(View, { style: tmp.horizontalLine }), mapped];
  obj.children = items1;
  return closure_2(View, obj);
});