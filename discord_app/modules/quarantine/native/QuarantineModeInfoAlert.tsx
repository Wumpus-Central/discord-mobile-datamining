// discord_app/modules/quarantine/native/QuarantineModeInfoAlert.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import native from "../../../design/void/native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import common_AlertDefault from "../../../components_native/common/Alert.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import TextStyles from "../../rebrand/native/TextStyles.tsx";

require = fn;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const createStyles = fn(4638);
let obj2 = { header: null, text: null };
let obj3 = {};
const merged = Object.assign(
  TextStyles(fn(1074).Fonts.PRIMARY_BOLD, nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, 24),
);
obj3.textAlign = "center";
obj3.marginVertical = 12;
obj2.header = obj3;
obj2.text = { textAlign: "center", marginVertical: 8 };
let closure_5 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/quarantine/native/QuarantineModeInfoAlert.tsx");

export default function QuarantineModeInfoAlert(onClose) {
  const tmp = closure_5();
  const obj = { onClose: onClose.onClose, children: null };
  const obj2 = { style: tmp.header, children: null };
  const intl = util.intl;
  obj2.children = intl.string(util.t.EouHwv);
  const items = [React3(native.LegacyText, obj2)];
  const obj3 = { style: tmp.text, variant: "text-md/medium", children: null };
  const intl2 = util.intl;
  obj3.children = intl2.string(util.t.zNPBMA);
  items[1] = React3(Text_Text.Text, obj3);
  obj.children = items;
  return React4(common_AlertDefault, obj);
}
