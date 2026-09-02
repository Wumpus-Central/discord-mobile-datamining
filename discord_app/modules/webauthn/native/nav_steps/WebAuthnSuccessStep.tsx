// === Module 14556: WebAuthnSuccessStep ===

// Module 14556 (WebAuthnSuccessStep)
import CodeRowDefault from "CodeRow" /* 14557 */;
import closure_3 from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
let result = require("set").fileFinishedImporting("modules/webauthn/native/nav_steps/WebAuthnSuccessStep.tsx");

export default function WebAuthnSuccessStep() {
  let obj = navigation(1498);
  navigation = obj.useNavigation();
  const items = [navigation];
  const layoutEffect = React.useLayoutEffect(() => {
    const obj = {
      headerLeft: navigation(closure_1_2[3]).getHeaderCloseButton(() => {
        closure_0.popToTop();
        const result = closure_1_1(closure_1_2[4]).closePasskeyUpsellModal();
      })
    };
    navigation.setOptions(obj);
  }, items);
  obj = { onGenerate: null, headerLabel: null };
  const intl = navigation(1233).intl;
  obj[1] = intl.format(navigation(1233).t.iVTs6i, {});
  return jsx(CodeRowDefault, { onGenerate: null, headerLabel: null });
};