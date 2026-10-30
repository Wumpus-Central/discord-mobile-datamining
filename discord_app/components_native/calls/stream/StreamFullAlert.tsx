// discord_app/components_native/calls/stream/StreamFullAlert.tsx
import util from "../../../intl/index.native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import AVError from "../../../modules/errors/av_errors/AVError.tsx";
import common_AlertDefault from "../../common/Alert.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
let closure_5 = { body: { marginTop: 16 } };
const size = fn(2);
const result = size.fileFinishedImporting("components_native/calls/stream/StreamFullAlert.tsx");

export default function StreamFullAlert(arg0) {
  const errorInfo = AVError.getErrorInfo(AVError.AVError.STREAM_FULL);
  let errorCode;
  if (errorInfo != null) {
    errorCode = errorInfo.errorCode;
  }
  const intl = util.intl;
  const obj2 = {};
  const formatToPlainStringResult = intl.formatToPlainString(util.t.ejOT95, { errorCode });
  const merged = Object.assign(arg0);
  const intl2 = util.intl;
  obj2.title = intl2.string(util.t.GzjdO5);
  const obj3 = { variant: "text-md/normal", style: closure_5.body, children: null };
  const intl3 = util.intl;
  obj3.children = intl3.string(util.t.VVZDBL);
  const items = [
    React3(Text_Text.Text, obj3),
    React3(Text_Text.Text, {
      variant: "text-md/normal",
      selectable: true,
      color: "text-muted",
      style: closure_5.body,
      children: formatToPlainStringResult,
    }),
  ];
  obj2.children = items;
  return React4(common_AlertDefault, obj2);
}
