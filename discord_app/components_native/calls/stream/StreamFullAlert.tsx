// discord_app/components_native/calls/stream/StreamFullAlert.tsx
import util from "../../../intl/index.native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import common_AlertDefault from "../../common/Alert.tsx";
import AVError from "../../../modules/errors/av_errors/AVError.tsx";
import _modDef17972 from "../../../../_runtime/metro/17972__.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const Image = fn(17).Image;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
let closure_6 = { image: { alignSelf: "center", marginTop: 32 }, body: { marginTop: 16 } };
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
  const obj3 = { variant: "text-md/normal", style: closure_6.body, children: null };
  const intl3 = util.intl;
  obj3.children = intl3.string(util.t.VVZDBL);
  const items = [
    React4(Text_Text.Text, obj3),
    React4(Text_Text.Text, {
      variant: "text-md/normal",
      selectable: true,
      color: "text-muted",
      style: closure_6.body,
      children: formatToPlainStringResult,
    }),
  ];
  const obj4 = {
    variant: "text-md/normal",
    selectable: true,
    color: "text-muted",
    style: closure_6.body,
    children: formatToPlainStringResult,
  };
  const tmp6 = common_AlertDefault;
  items[2] = React4(Image, { source: _modDef17972, style: closure_6.image });
  obj2.children = items;
  return hasOwnProperty(tmp6, obj2);
}
