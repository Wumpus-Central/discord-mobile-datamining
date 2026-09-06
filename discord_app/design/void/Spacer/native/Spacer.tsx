// === Module 14121: Spacer ===

// Module 14121 (Spacer)
import noop from "module_19" /* 19 */;

const View = fn(17).View;
const jsx = fn(21).jsx;
const apply = fn(12);
let closure_2 = apply.memoize((width) => {
  const size = { width, height: width };
  return size;
});
let size = fn(2);
const result = size.fileFinishedImporting("design/void/Spacer/native/Spacer.tsx");

export default function Spacer(pointerEvents) {
  return <View style={closure_2(arg0.size)} pointerEvents={arg0.pointerEvents} />;
};