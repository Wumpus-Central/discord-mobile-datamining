// === Module 14204: ModalDisclaimer ===

// Module 14204 (ModalDisclaimer)
import Text_Text from "Text/Text" /* 4570 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4574);
let closure_4 = createStyles.createStyles({ container: { flexDirection: "column", alignItems: "center" }, disclaimer: { marginBottom: 12 } });
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Modal/native/ModalDisclaimer.native.tsx");

export const ModalDisclaimer = function ModalDisclaimer(children) {
  const tmp = closure_4();
  let obj = { style: tmp.container, children: null };
  obj = { variant: "text-xs/medium", color: "text-muted", style: tmp.disclaimer, children: children.children };
  obj.children = jsx(Text_Text.Text, { variant: "text-xs/medium", color: "text-muted", style: tmp.disclaimer, children: children.children });
  return <View variant="text-xs/medium" color="text-muted" style={tmp.disclaimer}>{children.children}</View>;
};