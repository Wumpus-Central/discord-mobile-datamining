// === Module 14323: PageMarker ===

// Module 14323 (PageMarker)
import ThemesDefault from "Themes" /* 712 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4446 */;
import importAllResult from "noop" /* 19 */;

({ jsx: closure_1, jsxs: obj1 } = jsxProd);
let obj = { pageMarkerContainer: { flex: 1, alignItems: "center", justifyContent: "space-between", flexDirection: "row" }, circleIcon: null, horizontalLine: null, filledCircle: null };
obj = { width: 14, height: 14, borderRadius: 7, borderWidth: 1, backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_STRONG, borderColor: ThemesDefault.colors.BORDER_SUBTLE };
obj[1] = obj;
createCacheKey = { position: "absolute", left: 0, right: 0, top: "50%", bottom: "50%", height: 1, backgroundColor: ThemesDefault.colors.BORDER_STRONG };
obj[2] = createCacheKey;
obj[3] = { backgroundColor: ThemesDefault.colors.TEXT_BRAND, borderColor: ThemesDefault.colors.BORDER_SUBTLE };
let closure_3 = createCacheKey.createStyles(obj);
const obj2 = { backgroundColor: ThemesDefault.colors.TEXT_BRAND, borderColor: ThemesDefault.colors.BORDER_SUBTLE };
const memoResult = importAllResult.memo((arg0) => {
  ({ numMarkers, currentPage: View } = arg0);
  let callback;
  const tmp = callback3();
  callback = tmp;
  const ArrayResult = Array(numMarkers);
  let obj = { style: items, children: null };
  items = [tmp.pageMarkerContainer, ];
  obj = { width: 20 * numMarkers };
  items[1] = obj;
  const mapped = Array(numMarkers).fill(undefined).map((arg0, arg1) => {
    const style = [closure_1.circleIcon, ];
    const sum = arg1 + 1;
    let filledCircle = closure_0 === sum;
    if (filledCircle) {
      filledCircle = closure_1.filledCircle;
    }
    style[1] = filledCircle;
    return closure_1(closure_1_0, { style }, sum);
  });
  const items1 = [callback(View, { style: tmp.horizontalLine }), mapped];
  obj[1] = items1;
  return callback2(View, obj);
});
const result = require("set").fileFinishedImporting("modules/user_settings/account/native/mfa_modal_flow/TwoFASetupModalHeader.tsx");

export const PageMarker = memoResult;