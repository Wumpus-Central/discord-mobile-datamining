// === Module 11315: ForwardingIcon ===

// Module 11315 (ForwardingIcon)
import Fragment from "Fragment" /* 21 */;
import react from "react" /* 576 */;
import ArrowAngleRightUpIcon2 from "ArrowAngleRightUpIcon" /* 11316 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let tmp4;
  const obj = react;
  const cResult = obj.c(2);
  if (cResult[0] !== arg0) {
    const ArrowAngleRightUpIcon = ArrowAngleRightUpIcon2.ArrowAngleRightUpIcon;
    const merged = Object.assign(arg0);
    const tmp9 = <ArrowAngleRightUpIcon />;
    cResult[0] = arg0;
    cResult[1] = tmp9;
    tmp4 = tmp9;
  } else {
    tmp4 = cResult[1];
  }
  return tmp4;
}) : ((arg0) => {
  const ArrowAngleRightUpIcon = ArrowAngleRightUpIcon2.ArrowAngleRightUpIcon;
  const merged = Object.assign(arg0);
  return <ArrowAngleRightUpIcon />;
});
const result = size.fileFinishedImporting("modules/forwarding/native/ForwardingIcon.tsx");

export default tmp2;