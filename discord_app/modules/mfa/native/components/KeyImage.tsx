// discord_app/modules/mfa/native/components/KeyImage.tsx
import _mod17 from "../../../../../_runtime/metro/00017__.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import SecurityKeySpotIllustration from "../../../../design/components/mana-assets/native/generated/SecurityKeySpotIllustration.native.tsx";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const View = _mod17.View;
const jsx = jsxProd.jsx;
const obj = { container: { marginBottom: nativeDefault.space.PX_8 } };
let closure_4 = createStyles.createStyles(obj);
let obj2 = { marginBottom: nativeDefault.space.PX_8 };
const result = size.fileFinishedImporting("modules/mfa/native/components/KeyImage.tsx");

export const KeyImage = ReactCompilerGating.isReactCompilerEnabled()
  ? function KeyImage() {
      const cResult = c.c(3);
      const tmp4 = closure_4();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp7 = jsx(SecurityKeySpotIllustration.SecurityKeySpotIllustration, { scale: 0.6 });
        cResult[0] = tmp7;
        let first = tmp7;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== tmp4.container) {
        const obj2 = { style: tmp4.container, children: first };
        const tmp11 = <View style={tmp4.container}>{first}</View>;
        cResult[1] = tmp4.container;
        cResult[2] = tmp11;
        let tmp8 = tmp11;
      } else {
        tmp8 = cResult[2];
      }
      return tmp8;
    }
  : function KeyImage() {
      return (
        <View style={closure_4().container}>
          {jsx(SecurityKeySpotIllustration.SecurityKeySpotIllustration, { scale: 0.6 })}
        </View>
      );
    };
