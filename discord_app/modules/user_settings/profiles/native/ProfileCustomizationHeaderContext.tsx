// === Module 16355: ProfileCustomizationHeaderContext ===

// Module 16355 (ProfileCustomizationHeaderContext)
import c from "c" /* 576 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
let context = noop.createContext(null);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/profiles/native/ProfileCustomizationHeaderContext.tsx");

export default context;
export const ProfileCustomizationHeaderSpacer = ReactCompilerGating.isReactCompilerEnabled() ? (function ProfileCustomizationHeaderSpacer() {
  const cResult = c.c(2);
  context = noop.useContext(context);
  if (cResult[0] !== context) {
    let tmp4 = null;
    if (null != context) {
      const obj2 = { style: null };
      ({ height: obj3.height, backgroundColor: obj3.backgroundColor } = context);
      obj2.style = { height: null, backgroundColor: null };
      tmp4 = <View style={null} />;
      const obj5 = { height: null, backgroundColor: null };
    }
    cResult[0] = context;
    cResult[1] = tmp4;
    let tmp3 = tmp4;
  } else {
    tmp3 = cResult[1];
  }
  return tmp3;
}) : (function ProfileCustomizationHeaderSpacer() {
  context = noop.useContext(context);
  let tmp2 = null;
  if (null != context) {
    const obj = { style: null };
    ({ height: obj2.height, backgroundColor: obj2.backgroundColor } = context);
    obj.style = { height: null, backgroundColor: null };
    tmp2 = <View style={null} />;
    const obj3 = { height: null, backgroundColor: null };
  }
  return tmp2;
});