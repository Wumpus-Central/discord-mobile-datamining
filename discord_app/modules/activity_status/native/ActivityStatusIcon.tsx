// === Module 10628: ActivityStatusIcon ===

// Module 10628 (ActivityStatusIcon)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_2 = ["icon", "style"];
const jsx = Fragment.jsx;
let closure_5 = createStyles.createStyles({ icon: { flexShrink: 0 } });
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let icon;
  let style;
  let tmp2;
  let tmp3;
  let tmp4;
  const obj = react2;
  const cResult = obj.c(11);
  if (cResult[0] !== arg0) {
    ({ icon, style } = arg0);
    const tmp7 = _objectWithoutProperties(arg0, closure_2);
    cResult[0] = arg0;
    cResult[1] = icon;
    cResult[2] = tmp7;
    cResult[3] = style;
    tmp4 = style;
    tmp3 = tmp7;
    tmp2 = icon;
  } else {
    tmp2 = cResult[1];
    tmp3 = cResult[2];
    tmp4 = cResult[3];
  }
  const tmp8 = closure_5();
  if (cResult[4] === tmp4) {
    let tmp9;
    if (cResult[5] === tmp8.icon) {
      tmp9 = cResult[6];
    }
    if (cResult[7] === tmp2) {
      if (cResult[8] === tmp3) {
        let tmp10;
        if (cResult[9] === tmp9) {
          tmp10 = cResult[10];
        }
        return tmp10;
      }
    }
    const merged = Object.assign(tmp3);
    const tmp15 = <tmp2 size="xxs" style={tmp9} color="status-positive" />;
    cResult[7] = tmp2;
    cResult[8] = tmp3;
    cResult[9] = tmp9;
    cResult[10] = tmp15;
    tmp10 = tmp15;
  }
  const items = [tmp8.icon, tmp4];
  cResult[4] = tmp4;
  cResult[5] = tmp8.icon;
  cResult[6] = items;
  tmp9 = items;
}) : ((arg0) => {
  let icon;
  let style;
  ({ icon, style } = arg0);
  const merged = Object.assign(arg0, Object.assign({ icon: 0, style: 0 }));
  const items = [closure_5().icon, style];
  const merged1 = Object.assign(merged);
  return <icon size="xxs" style={items} color="status-positive" />;
});
const result = size.fileFinishedImporting("modules/activity_status/native/ActivityStatusIcon.tsx");

export default tmp3;