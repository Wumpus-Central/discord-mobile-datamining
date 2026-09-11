// === Module 12756: NsfwGateChat ===

// Module 12756 (NsfwGateChat)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import Text_Text from "Text/Text" /* 4602 */;
import _modDef12757 from "module_12757" /* 12757 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: c3, Image: closure_4, StyleSheet } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire, Fragment: closure_7 } = jsxProd);
fn(4606);
let createStyles = { container: null, border: null, description: null };
createStyles = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, alignItems: "center", justifyContent: "center" };
createStyles.container = createStyles;
createStyles.border = { height: StyleSheet.hairlineWidth, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
createStyles.description = { marginTop: 16, textAlign: "center" };
let closure_8 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/age_gate/native/components/NsfwGateChat.tsx");

export default function NsfwGateChat() {
  const tmp = closure_8();
  let obj = { children: null };
  obj = { style: tmp.border };
  const items = [hasOwnProperty(React3, obj), ];
  obj = { style: tmp.container, children: null };
  const items1 = [hasOwnProperty(React4, { source: _modDef12757 }), ];
  const obj2 = { style: tmp.description, variant: "text-md/medium", color: "text-muted", children: null };
  const intl = util.intl;
  obj2.children = intl.string(util.t.W4Qyxr);
  items1[1] = hasOwnProperty(Text_Text.Text, obj2);
  obj.children = items1;
  items[1] = timestampProducer(React3, obj);
  obj.children = items;
  return timestampProducer(React5, obj);
};