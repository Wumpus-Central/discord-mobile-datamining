// === Module 14274: ModalDisclaimer ===

// Module 14274 (ModalDisclaimer)
import Text_Text from "Text/Text" /* 4635 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4639);
let closure_4 = createStyles.createStyles({ container: { flexDirection: "column", alignItems: "center" }, disclaimer: { marginBottom: 12 } });
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Modal/native/ModalDisclaimer.native.tsx");

export const ModalDisclaimer = function ModalDisclaimer(children) {
  const tmp = closure_4();
  const obj = { style: tmp.container, children: jsx(Text_Text.Text, { variant: "text-xs/medium", color: "text-muted", style: tmp.disclaimer, children: children.children }) };
  return <View style={tmp.container}>{jsx(Text_Text.Text, { variant: "text-xs/medium", color: "text-muted", style: tmp.disclaimer, children: children.children })}</View>;
};