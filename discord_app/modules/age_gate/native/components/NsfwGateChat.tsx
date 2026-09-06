// discord_app/modules/age_gate/native/components/NsfwGateChat.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import _modDef12664 from "../../../../../_runtime/metro/12664__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ View: c3, Image: closure_4, StyleSheet } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire, Fragment: closure_7 } = jsxProd);
fn(4560);
let createStyles = { container: null, border: null, description: null };
createStyles = {
  flex: 1,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  alignItems: "center",
  justifyContent: "center",
};
createStyles.container = createStyles;
createStyles.border = {
  height: StyleSheet.hairlineWidth,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
};
createStyles.description = { marginTop: 16, textAlign: "center" };
let closure_8 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/age_gate/native/components/NsfwGateChat.tsx");

export default function NsfwGateChat() {
  const tmp = closure_8();
  let obj = { children: null };
  obj = { style: tmp.border };
  const items = [hasOwnProperty(React3, obj)];
  obj = { style: tmp.container, children: null };
  const items1 = [hasOwnProperty(React4, { source: _modDef12664 })];
  const obj2 = { style: tmp.description, variant: "text-md/medium", color: "text-muted", children: null };
  const intl = util.intl;
  obj2.children = intl.string(util.t.W4Qyxr);
  items1[1] = hasOwnProperty(Text_Text.Text, obj2);
  obj.children = items1;
  items[1] = timestampProducer(React3, obj);
  obj.children = items;
  return timestampProducer(React5, obj);
}
