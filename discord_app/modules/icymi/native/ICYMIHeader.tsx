// discord_app/modules/icymi/native/ICYMIHeader.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, Fragment: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createICYMIStyles = fn(16452);
let closure_7 = createICYMIStyles.createICYMIStyles((margin) => {
  let obj = { text: null, separator: null };
  obj = { flexDirection: "row", justifyContent: "space-between", marginHorizontal: margin.margin };
  obj.text = obj;
  const size = {
    height: 1,
    width: "100%",
    backgroundColor: nativeDefault.colors.BORDER_SUBTLE,
    marginBottom: nativeDefault.space.PX_16,
  };
  obj.separator = size;
  return obj;
});
let size = fn(2);
const result = size.fileFinishedImporting("modules/icymi/native/ICYMIHeader.tsx");

export default function ICYMIHeader() {
  const tmp = closure_7();
  let obj = { children: null };
  obj = { style: tmp.separator };
  const items = [React4(View, obj)];
  obj = { style: tmp.text, variant: "heading-md/semibold", color: "mobile-text-heading-primary", children: null };
  const intl = util.intl;
  obj.children = intl.string(util.t["jnXV/V"]);
  items[1] = React4(Text_Text.Text, obj);
  obj.children = items;
  return timestampProducer(hasOwnProperty, obj);
}
