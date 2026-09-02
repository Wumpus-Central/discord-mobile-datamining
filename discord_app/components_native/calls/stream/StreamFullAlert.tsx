// === Module 17675: StreamFullAlert ===

// Module 17675 (StreamFullAlert)
import noopAll from "noop" /* 19 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;
import Text from "Text" /* 4474 */;
import componentDidMountDefault from "componentDidMount" /* 4947 */;
import mapped from "mapped" /* 9578 */;
import registerAssetDefault from "registerAsset" /* 17676 */;
import { Image } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;

require = arg1;
noopAll;
({ jsx: c4, jsxs: c5 } = jsxProd);
let closure_6 = { image: { alignSelf: "center", marginTop: 32 }, body: { marginTop: 16 } };
const result = require("set").fileFinishedImporting("components_native/calls/stream/StreamFullAlert.tsx");

export default function StreamFullAlert(arg0) {
  let obj = mapped;
  const errorInfo = obj.getErrorInfo(mapped.AVError.STREAM_FULL);
  let errorCode;
  if (errorInfo != null) {
    errorCode = errorInfo.errorCode;
  }
  const intl = tmp(1233).intl;
  obj = {};
  const formatToPlainStringResult = intl.formatToPlainString(getSystemLocale.t.ejOT95, { errorCode });
  const merged = Object.assign(arg0);
  const intl2 = tmp(1233).intl;
  obj.title = intl2.string(getSystemLocale.t.GzjdO5);
  obj = { variant: "text-md/normal", style: closure_6.body, children: null };
  const intl3 = tmp(1233).intl;
  obj[2] = intl3.string(getSystemLocale.t.VVZDBL);
  const items = [callback(Text.Text, obj), callback(Text.Text, { variant: "text-md/normal", selectable: true, color: "text-muted", style: closure_6.body, children: formatToPlainStringResult }), ];
  obj1 = { variant: "text-md/normal", selectable: true, color: "text-muted", style: closure_6.body, children: formatToPlainStringResult };
  const tmp6 = componentDidMountDefault;
  items[2] = callback(Image, { source: registerAssetDefault, style: closure_6.image });
  obj.children = items;
  return callback2(tmp6, obj);
};