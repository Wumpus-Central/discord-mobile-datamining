// === Module 15891: RegistrationBailoutButton ===

// Module 15891 (RegistrationBailoutButton)
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import native from "native" /* 1188 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4890);
let closure_3 = createStyles.createStyles({ bail: { marginBottom: 16, marginLeft: "auto", marginRight: "auto" } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/auth/native/components/RegistrationBailoutButton.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((onBail) => {
  const cResult = c.c(4);
  onBail = onBail.onBail;
  const tmp4 = closure_3();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = util.intl;
    const stringResult = intl.string(util.t.CZ7wvG);
    cResult[0] = stringResult;
    let first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === onBail) {
    if (cResult[2] === tmp4.bail) {
      let tmp7 = cResult[3];
    }
    return tmp7;
  }
  const tmp8 = jsx(native.Button, { shrink: true, text: first, size: native.Button.Sizes.MEDIUM, look: native.ButtonLooks.LINK, color: native.ButtonColors.LINK, style: tmp4.bail, onPress: onBail });
  cResult[1] = onBail;
  cResult[2] = tmp4.bail;
  cResult[3] = tmp8;
  tmp7 = tmp8;
  const obj2 = { shrink: true, text: first, size: native.Button.Sizes.MEDIUM, look: native.ButtonLooks.LINK, color: native.ButtonColors.LINK, style: tmp4.bail, onPress: onBail };
}) : ((onBail) => {
  const obj = { shrink: true, text: null, size: null, look: null, color: null, style: null, onPress: null };
  const intl = util.intl;
  obj.text = intl.string(util.t.CZ7wvG);
  obj.size = native.Button.Sizes.MEDIUM;
  obj.look = native.ButtonLooks.LINK;
  obj.color = native.ButtonColors.LINK;
  obj.style = closure_3().bail;
  obj.onPress = onBail.onBail;
  return jsx(native.Button, { shrink: true, text: null, size: null, look: null, color: null, style: null, onPress: null });
});