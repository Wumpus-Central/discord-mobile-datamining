// === Module 16373: ForYouHoistedItemsHeader ===

// Module 16373 (ForYouHoistedItemsHeader)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4890);
let obj2 = { container: { marginTop: nativeDefault.space.PX_16 } };
let closure_4 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
const obj3 = { marginTop: nativeDefault.space.PX_16 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/notification_center/native/ForYouHoistedItemsHeader.tsx");

export const ForYouHoistedItemsHeader = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(2);
  const tmp2 = closure_4();
  if (cResult[0] !== tmp2.container) {
    const obj2 = { style: tmp2.container };
    const tmp6 = <View style={tmp2.container} />;
    cResult[0] = tmp2.container;
    cResult[1] = tmp6;
    let tmp3 = tmp6;
  } else {
    tmp3 = cResult[1];
  }
  return tmp3;
}) : (() => <View style={closure_4().container} />);