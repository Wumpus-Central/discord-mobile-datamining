// discord_app/modules/age_gate/native/components/NsfwGateChat.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import FastImageDefault from "../../../../components_native/common/FastImage.tsx";
import _modDef11198 from "../../../../../_runtime/metro/11198__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ View: c3, StyleSheet } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty, Fragment: metroRequire } = jsxProd);
const createStyles = fn(5009);
const obj2 = {
  container: {
    flex: 1,
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
    alignItems: "center",
    justifyContent: "center",
  },
  border: null,
  description: null,
};
let obj3 = {
  flex: 1,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  alignItems: "center",
  justifyContent: "center",
};
obj2.border = { height: StyleSheet.hairlineWidth, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
obj2.description = { marginTop: 16, textAlign: "center" };
let closure_7 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/age_gate/native/components/NsfwGateChat.tsx");

export default function NsfwGateChat() {
  const tmp = closure_7();
  const obj = { children: null };
  const items = [React4(React3, { style: tmp.border })];
  const obj3 = { style: tmp.container, children: null };
  const obj4 = { source: _modDef11198 };
  const items1 = [React4(FastImageDefault, obj4)];
  const obj5 = { style: tmp.description, variant: "text-md/medium", color: "text-muted", children: null };
  const intl = util.intl;
  obj5.children = intl.string(util.t.W4Qyxr);
  items1[1] = React4(Text_Text.Text, obj5);
  obj3.children = items1;
  items[1] = hasOwnProperty(React3, obj3);
  obj.children = items;
  return hasOwnProperty(timestampProducer, obj);
}
