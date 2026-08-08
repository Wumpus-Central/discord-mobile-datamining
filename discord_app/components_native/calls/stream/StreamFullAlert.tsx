// discord_app/components_native/calls/stream/StreamFullAlert.tsx
import "noop";
import { Image } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import { registerAsset } from "../../../../_runtime/16934_registerAsset.js";
import { Text } from "../../../design/components/Text/native/Text.tsx";
import { getSystemLocale } from "../../../intl/index.native.tsx";
import { mapped } from "../../../modules/errors/av_errors/AVError.tsx";
import { componentDidMount } from "../../common/Alert.tsx";

let c4;
let c5;
const require = arg1;
({ jsx: c4, jsxs: c5 } = jsxProd);
let closure_6 = { image: { alignSelf: "center", marginTop: 32 }, body: { marginTop: 16 } };
const result = require("jsxProd").fileFinishedImporting("components_native/calls/stream/StreamFullAlert.tsx");

export default function StreamFullAlert(arg0) {
  let obj = mapped;
  const errorInfo = obj.getErrorInfo(mapped.AVError.STREAM_FULL);
  let errorCode;
  if (errorInfo != null) {
    errorCode = errorInfo.errorCode;
  }
  const intl = tmp(1236).intl;
  obj = {};
  const formatToPlainStringResult = intl.formatToPlainString(getSystemLocale.t.ejOT95, { errorCode });
  const merged = Object.assign(arg0);
  const intl2 = tmp(1236).intl;
  obj.title = intl2.string(getSystemLocale.t.GzjdO5);
  obj = { variant: "text-md/normal", style: closure_6.body, children: null };
  const intl3 = tmp(1236).intl;
  obj[2] = intl3.string(getSystemLocale.t.VVZDBL);
  const items = [callback(Text.Text, obj), callback(Text.Text, { variant: "text-md/normal", selectable: true, color: "text-muted", style: closure_6.body, children: formatToPlainStringResult }), ];
  const obj1 = { variant: "text-md/normal", selectable: true, color: "text-muted", style: closure_6.body, children: formatToPlainStringResult };
  const tmp6 = componentDidMount;
  items[2] = callback(Image, { source: registerAsset, style: closure_6.image });
  obj.children = items;
  return callback2(tmp6, obj);
};