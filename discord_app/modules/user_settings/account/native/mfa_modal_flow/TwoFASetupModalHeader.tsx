// discord_app/modules/user_settings/account/native/mfa_modal_flow/TwoFASetupModalHeader.tsx
import ThemesDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import { View } from "../../../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";
import importAllResult from "../../../../../../_runtime/00019_noop.js";

({ jsx: closure_1, jsxs: obj1 } = jsxProd);
let obj = { width: 14, height: 14, borderRadius: 7, borderWidth: 1, backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_STRONG, borderColor: ThemesDefault.colors.BORDER_SUBTLE };
obj[1] = obj;
const createCacheKey = { position: "absolute", left: 0, right: 0, top: "50%", bottom: "50%", height: 1, backgroundColor: ThemesDefault.colors.BORDER_STRONG };
obj[2] = createCacheKey;
obj[3] = { backgroundColor: ThemesDefault.colors.TEXT_BRAND, borderColor: ThemesDefault.colors.BORDER_SUBTLE };
let closure_3 = createCacheKey.createStyles(obj);
const memoResult = importAllResult.memo((arg0) => {
  ({ numMarkers, currentPage: View } = arg0);
  const tmp = callback3();
  const callback = tmp;
  const ArrayResult = Array(numMarkers);
  const items = [tmp.pageMarkerContainer, ];
  const obj = { width: 20 * numMarkers };
  items[1] = obj;
  const mapped = Array(numMarkers).fill(undefined).map((item, index) => {
    const style = [lib.circleIcon, ];
    const sum = index + 1;
    let filledCircle = closure_0 === sum;
    if (filledCircle) {
      filledCircle = lib.filledCircle;
    }
    style[1] = filledCircle;
    return lib(View, { style }, sum);
  });
  const items1 = [callback(View, { style: tmp.horizontalLine }), mapped];
  obj[1] = items1;
  return callback2(View, obj);
});
const result = require("obj132").fileFinishedImporting("modules/user_settings/account/native/mfa_modal_flow/TwoFASetupModalHeader.tsx");

export const PageMarker = memoResult;