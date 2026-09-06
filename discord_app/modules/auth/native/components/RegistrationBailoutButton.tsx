// discord_app/modules/auth/native/components/RegistrationBailoutButton.tsx
import util from "../../../../intl/index.native.tsx";
import native from "../../../../design/void/native.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

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
  return jsx(native.Button, {
    shrink: true,
    text: null,
    size: null,
    look: null,
    color: null,
    style: null,
    onPress: null,
  });
}
