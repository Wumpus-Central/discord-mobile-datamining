// === Module 9222: TableRowApplicationIcon ===

// Module 9222 (TableRowApplicationIcon)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1402 */;
import FastImageDefault from "FastImage" /* 5974 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let application;

let size;
const jsx = Fragment.jsx;
let obj = { icon: size };
size = { width: 32, height: 32, borderRadius: nativeDefault.radii.sm };
let closure_4 = createStyles.createStyles(obj);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((application) => {
  const obj = react2;
  const cResult = obj.c(6);
  application = application.application;
  const tmp3 = closure_4();
  if (cResult[0] === application.icon) {
    let tmp4;
    if (cResult[1] === application.id) {
      tmp4 = cResult[2];
    }
    if (cResult[3] === tmp3.icon) {
      let tmp6;
      if (cResult[4] === tmp4) {
        tmp6 = cResult[5];
      }
      return tmp6;
    }
    const tmp9 = jsx(FastImageDefault, { source: tmp4, style: tmp3.icon });
    cResult[3] = tmp3.icon;
    cResult[4] = tmp4;
    cResult[5] = tmp9;
    tmp6 = tmp9;
  }
  const obj2 = AvatarUtilsDefault;
  const obj4 = { id: application.id, icon: application.icon, size: 32 };
  const applicationIconSource = obj2.getApplicationIconSource(obj4);
  cResult[0] = application.icon;
  cResult[1] = application.id;
  cResult[2] = applicationIconSource;
  tmp4 = applicationIconSource;
}) : ((application) => {
  application = application.application;
  const tmp = closure_4();
  FastImageDefault;
  const obj2 = AvatarUtilsDefault;
  const obj3 = { id: application.id, icon: application.icon, size: 32 };
  return <tmp2 source={obj2.getApplicationIconSource(obj3)} style={tmp.icon} />;
});
size = size_mod;
const result = size.fileFinishedImporting("modules/applications/native/TableRowApplicationIcon.tsx");

export default tmp3;