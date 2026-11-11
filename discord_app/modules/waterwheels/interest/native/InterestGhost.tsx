// === Module 18993: InterestGhost ===

// Module 18993 (InterestGhost)
import nativeDefault from "native" /* 575 */;
import noop from "module_19" /* 19 */;

const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(5243);
const obj2 = { ghost: { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED, overflow: "hidden" } };
let closure_2 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/waterwheels/interest/native/InterestGhost.tsx");

export default function InterestGhost(style) {
  const obj = { accessible: false, pointerEvents: "none", style: null };
  items = [closure_2().ghost, style.style];
  obj.style = items;
  return <View accessible={false} pointerEvents="none" style={null} />;
};