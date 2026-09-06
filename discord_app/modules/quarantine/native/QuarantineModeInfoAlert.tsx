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
fn(4560);
let createStyles = { header: null, text: null };
createStyles = {};
const merged = Object.assign(
  TextStyles(fn(1074).Fonts.PRIMARY_BOLD, nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, 24),
);
createStyles.textAlign = "center";
createStyles.marginVertical = 12;
createStyles.header = createStyles;
createStyles.text = { textAlign: "center", marginVertical: 8 };
let closure_5 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/quarantine/native/QuarantineModeInfoAlert.tsx");

export default function QuarantineModeInfoAlert(onClose) {
  const tmp = closure_5();
  let obj = { onClose: onClose.onClose, children: null };
  obj = { style: tmp.header, children: null };
  const intl = util.intl;
  obj.children = intl.string(util.t.EouHwv);
  const items = [React3(native.LegacyText, obj)];
  obj = { style: tmp.text, variant: "text-md/medium", children: null };
  const intl2 = util.intl;
  obj.children = intl2.string(util.t.zNPBMA);
  items[1] = React3(Text_Text.Text, obj);
  obj.children = items;
  return React4(common_AlertDefault, obj);
}
