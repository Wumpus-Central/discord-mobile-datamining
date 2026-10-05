// discord_app/modules/auth/native/components/RegistrationBailoutButton.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../_runtime/00576_react.js";
import intl2 from "../../../../intl/index.native.tsx";
import native from "../../../../design/void/native.tsx";
import react from "../../../../../_runtime/00019_react.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let onBail;

const jsx = Fragment.jsx;
let closure_3 = createStyles.createStyles({ bail: { marginBottom: 16, marginLeft: "auto", marginRight: "auto" } });
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (onBail) => {
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
      const tmp8 = (
        <Button
          shrink
          text={first}
          size={native.Button.Sizes.MEDIUM}
          look={native.ButtonLooks.LINK}
          color={native.ButtonColors.LINK}
          style={tmp4.bail}
          onPress={onBail}
        />
      );
      cResult[1] = onBail;
      cResult[2] = tmp4.bail;
      cResult[3] = tmp8;
      tmp7 = tmp8;
    }
  : (onBail) => {
      onBail = onBail.onBail;
      const tmp = closure_3();
      const Button = native.Button;
      const intl = intl2.intl;
      return (
        <Button
          shrink
          text={intl.string(intl2.t.CZ7wvG)}
          size={native.Button.Sizes.MEDIUM}
          look={native.ButtonLooks.LINK}
          color={native.ButtonColors.LINK}
          style={tmp.bail}
          onPress={onBail}
        />
      );
    };
const result = size.fileFinishedImporting("modules/auth/native/components/RegistrationBailoutButton.tsx");

export default tmp3;
