// === Module 11463: NewBadge ===

// Module 11463 (NewBadge)
import "noop";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
let closure_5 = createCacheKey.createStyles((arg0, arg1) => {
  let obj = require(500) /* set */;
  let num = 0;
  if (obj.isIOS()) {
    num = 1;
  }
  obj = { text: { textAlign: "center", textTransform: "uppercase", marginTop: num }, base: null };
  obj = { flexDirection: "row", alignItems: "center", justifyContent: "center", borderRadius: importDefault(712).radii.round, paddingHorizontal: 6, paddingVertical: 3, backgroundColor: null };
  if (tmpResult.isThemeLight(arg1)) {
    if (!arg0) {
      let MOBILE_TOAST_BACKGROUND_DEFAULT = tmp3(712).colors.BACKGROUND_BRAND;
    }
    obj[6] = MOBILE_TOAST_BACKGROUND_DEFAULT;
    obj[1] = obj;
    return obj;
  }
  MOBILE_TOAST_BACKGROUND_DEFAULT = tmp3(712).colors.MOBILE_TOAST_BACKGROUND_DEFAULT;
});
const result = require("jsxProd").fileFinishedImporting("modules/channel_list_v2/native/components/NewBadge.tsx");

export default function NewBadge() {
  const tmp2 = importDefault(8834)();
  const tmp3 = importDefault(4129)();
  const tmp4 = callback(tmp2, tmp3);
  let obj = { style: tmp4.base, children: null };
  obj = { variant: "text-xxs/bold", style: tmp4.text, color: null, children: null };
  if (obj3.isThemeLight(tmp3)) {
    let str = "text-overlay-light";
  } else {
    str = "text-brand";
  }
  obj[2] = str;
  const intl = tmp7(1236).intl;
  obj[3] = intl.string(require(1236) /* getSystemLocale */.t.y2b7CA);
  obj[1] = jsx(require(4189) /* Text */.Text, { variant: "text-xxs/bold", style: tmp4.text, color: null, children: null });
  return <View variant="text-xxs/bold" style={tmp4.text} color={null}>{null}</View>;
};