// discord_app/components_native/calls/stream/StreamFullAlert.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import getSystemLocale from "../../../intl/index.native.tsx";
import Text from "../../../design/components/Text/native/Text.tsx";
import componentDidMountDefault from "../../common/Alert.tsx";
import mapped from "../../../modules/errors/av_errors/AVError.tsx";
import registerAssetDefault from "../../../../_runtime/17202_registerAsset.js";
import { Image } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";

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
  obj1 = { variant: "text-md/normal", selectable: true, color: "text-muted", style: closure_6.body, children: formatToPlainStringResult };
  const tmp6 = componentDidMountDefault;
  items[2] = callback(Image, { source: registerAssetDefault, style: closure_6.image });
  obj.children = items;
  return callback2(tmp6, obj);
};