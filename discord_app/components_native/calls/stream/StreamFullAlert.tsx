// === Module 17855: StreamFullAlert ===

// Module 17855 (StreamFullAlert)
import util from "util" /* 1114 */;
import Text_Text from "Text/Text" /* 4556 */;
import common_AlertDefault from "common/Alert" /* 4994 */;
import AVError from "AVError" /* 9110 */;
import _modDef17856 from "module_17856" /* 17856 */;
import noop from "module_19" /* 19 */;

require = fn;
const Image = fn(17).Image;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
let closure_6 = { image: { alignSelf: "center", marginTop: 32 }, body: { marginTop: 16 } };
const size = fn(2);
const result = size.fileFinishedImporting("components_native/calls/stream/StreamFullAlert.tsx");

export default function StreamFullAlert(arg0) {
  let obj = AVError;
  const errorInfo = obj.getErrorInfo(AVError.AVError.STREAM_FULL);
  let errorCode;
  if (errorInfo != null) {
    errorCode = errorInfo.errorCode;
  }
  const intl = tmp(1114).intl;
  obj = {};
  const formatToPlainStringResult = intl.formatToPlainString(util.t.ejOT95, { errorCode });
  const merged = Object.assign(arg0);
  const intl2 = tmp(1114).intl;
  obj.title = intl2.string(util.t.GzjdO5);
  obj = { variant: "text-md/normal", style: closure_6.body, children: null };
  const intl3 = tmp(1114).intl;
  obj.children = intl3.string(util.t.VVZDBL);
  const items = [React4(Text_Text.Text, obj), React4(Text_Text.Text, { variant: "text-md/normal", selectable: true, color: "text-muted", style: closure_6.body, children: formatToPlainStringResult }), ];
  const obj1 = { variant: "text-md/normal", selectable: true, color: "text-muted", style: closure_6.body, children: formatToPlainStringResult };
  const tmp6 = common_AlertDefault;
  items[2] = React4(Image, { source: _modDef17856, style: closure_6.image });
  obj.children = items;
  return hasOwnProperty(tmp6, obj);
};