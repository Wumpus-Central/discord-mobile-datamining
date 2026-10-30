// === Module 18530: SeparatorDot ===

// Module 18530 (SeparatorDot)
import nativeDefault from "native" /* 575 */;
import noop from "module_19" /* 19 */;

const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(5009);
const obj2 = { separatorDot: null };
let size = { width: 4, height: 4, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG };
obj2.separatorDot = size;
let closure_2 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting("modules/icymi/native/SeparatorDot.tsx");

export default function SeparatorDot() {
  return <View style={closure_2().separatorDot} />;
};