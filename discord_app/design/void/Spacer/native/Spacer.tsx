// discord_app/design/void/Spacer/native/Spacer.tsx
import c from "../../../../../_runtime/00576_c.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const apply = fn(12);
let closure_4 = apply.memoize((width) => {
  const size = { width, height: width };
  return size;
});
const ReactCompilerGating = fn(558);
let size = fn(2);
const result = size.fileFinishedImporting("design/void/Spacer/native/Spacer.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function Spacer(arg0) {
      const cResult = c.c(5);
      ({ size, pointerEvents } = arg0);
      if (cResult[0] !== size) {
        const tmp4 = closure_4(size);
        cResult[0] = size;
        cResult[1] = tmp4;
        let tmp2 = tmp4;
      } else {
        tmp2 = cResult[1];
      }
      if (cResult[2] === pointerEvents) {
        if (cResult[3] === tmp2) {
          let tmp5 = cResult[4];
        }
        return tmp5;
      }
      const tmp6 = <View style={tmp2} pointerEvents={pointerEvents} />;
      cResult[2] = pointerEvents;
      cResult[3] = tmp2;
      cResult[4] = tmp6;
      tmp5 = tmp6;
    }
  : function Spacer(pointerEvents) {
      return <View style={closure_4(pointerEvents.size)} pointerEvents={pointerEvents.pointerEvents} />;
    };
