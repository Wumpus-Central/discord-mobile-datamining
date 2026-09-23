// === Module 13002: NsfwGateChat ===

// Module 13002 (NsfwGateChat)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import Text_Text from "Text/Text" /* 4823 */;
import _modDef13003 from "module_13003" /* 13003 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: c3, Image: closure_4, StyleSheet } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire, Fragment: closure_7 } = jsxProd);
const createStyles = fn(4827);
const obj2 = { container: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, alignItems: "center", justifyContent: "center" }, border: null, description: null };
let obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, alignItems: "center", justifyContent: "center" };
obj2.border = { height: StyleSheet.hairlineWidth, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
obj2.description = { marginTop: 16, textAlign: "center" };
let closure_8 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/age_gate/native/components/NsfwGateChat.tsx");

export default function NsfwGateChat() {
  const tmp = closure_8();
  const obj = { children: null };
  const items = [hasOwnProperty(React3, { style: tmp.border }), ];
  const obj3 = { style: tmp.container, children: null };
  const items1 = [hasOwnProperty(React4, { source: _modDef13003 }), ];
  const obj5 = { style: tmp.description, variant: "text-md/medium", color: "text-muted", children: null };
  const intl = util.intl;
  obj5.children = intl.string(util.t.W4Qyxr);
  items1[1] = hasOwnProperty(Text_Text.Text, obj5);
  obj3.children = items1;
  items[1] = timestampProducer(React3, obj3);
  obj.children = items;
  return timestampProducer(React5, obj);
};