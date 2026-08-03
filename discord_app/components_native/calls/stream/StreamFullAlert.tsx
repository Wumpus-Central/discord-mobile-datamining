import "noop";
import { Image } from "get ActivityIndicator";
import jsxProd from "jsxProd";

let c4;
let c5;
const require = arg1;
({ jsx: c4, jsxs: c5 } = jsxProd);
let closure_6 = { image: { alignSelf: "center", marginTop: 32 }, body: { marginTop: 16 } };
const result = require("jsxProd").fileFinishedImporting("components_native/calls/stream/StreamFullAlert.tsx");

export default function StreamFullAlert(arg0) {
  let obj = require(8861) /* mapped */;
  const errorInfo = obj.getErrorInfo(require(8861) /* mapped */.AVError.STREAM_FULL);
  let errorCode;
  if (errorInfo != null) {
    errorCode = errorInfo.errorCode;
  }
  const intl = tmp(1236).intl;
  obj = {};
  const formatToPlainStringResult = intl.formatToPlainString(require(1236) /* getSystemLocale */.t.ejOT95, { errorCode });
  const merged = Object.assign(arg0);
  const intl2 = tmp(1236).intl;
  obj.title = intl2.string(require(1236) /* getSystemLocale */.t.GzjdO5);
  obj = { variant: "text-md/normal", style: closure_6.body, children: null };
  const intl3 = tmp(1236).intl;
  obj[2] = intl3.string(require(1236) /* getSystemLocale */.t.VVZDBL);
  const items = [callback(require(4189) /* Text */.Text, obj), callback(require(4189) /* Text */.Text, { variant: "text-md/normal", selectable: true, color: "text-muted", style: closure_6.body, children: formatToPlainStringResult }), ];
  const obj1 = { variant: "text-md/normal", selectable: true, color: "text-muted", style: closure_6.body, children: formatToPlainStringResult };
  const tmp6 = importDefault(4622);
  items[2] = callback(Image, { source: importDefault(16719), style: closure_6.image });
  obj.children = items;
  return callback2(tmp6, obj);
};