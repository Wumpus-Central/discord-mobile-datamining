// === Module 15934: RegistrationBailoutButton ===

// Module 15934 (RegistrationBailoutButton)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import intl2 from "intl" /* 1126 */;
import native from "native" /* 1188 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let onBail;

const jsx = Fragment.jsx;
let closure_3 = createStyles.createStyles({ bail: { marginBottom: 16, marginLeft: "auto", marginRight: "auto" } });
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((onBail) => {
  let first;
  const obj = react2;
  const cResult = obj.c(4);
  onBail = onBail.onBail;
  const tmp4 = closure_3();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = intl2.intl;
    const stringResult = intl.string(intl2.t.CZ7wvG);
    cResult[0] = stringResult;
    first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === onBail) {
    let tmp7;
    if (cResult[2] === tmp4.bail) {
      tmp7 = cResult[3];
    }
    return tmp7;
  }
  const Button = native.Button;
  const tmp8 = <Button shrink text={first} size={native.Button.Sizes.MEDIUM} look={native.ButtonLooks.LINK} color={native.ButtonColors.LINK} style={tmp4.bail} onPress={onBail} />;
  cResult[1] = onBail;
  cResult[2] = tmp4.bail;
  cResult[3] = tmp8;
  tmp7 = tmp8;
}) : ((onBail) => {
  onBail = onBail.onBail;
  const tmp = closure_3();
  const Button = native.Button;
  const intl = intl2.intl;
  return <Button shrink text={intl.string(intl2.t.CZ7wvG)} size={native.Button.Sizes.MEDIUM} look={native.ButtonLooks.LINK} color={native.ButtonColors.LINK} style={tmp.bail} onPress={onBail} />;
});
const result = size.fileFinishedImporting("modules/auth/native/components/RegistrationBailoutButton.tsx");

export default tmp3;