// === Module 15975: RegistrationBailoutButton ===

// Module 15975 (RegistrationBailoutButton)
import util from "util" /* 1114 */;
import native from "native" /* 1178 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let closure_3 = createStyles.createStyles({ bail: { marginBottom: 16, marginLeft: "auto", marginRight: "auto" } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/auth/native/components/RegistrationBailoutButton.tsx");

export default function RegistrationBailoutButton(onBail) {
  const obj = { shrink: true, text: null, size: null, look: null, color: null, style: null, onPress: null };
  const intl = util.intl;
  obj.text = intl.string(util.t.CZ7wvG);
  obj.size = native.Button.Sizes.MEDIUM;
  obj.look = native.ButtonLooks.LINK;
  obj.color = native.ButtonColors.LINK;
  obj.style = closure_3().bail;
  obj.onPress = onBail.onBail;
  return jsx(native.Button, { shrink: true, text: null, size: null, look: null, color: null, style: null, onPress: null });
};