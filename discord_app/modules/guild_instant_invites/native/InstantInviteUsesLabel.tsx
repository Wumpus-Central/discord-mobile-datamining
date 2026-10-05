// discord_app/modules/guild_instant_invites/native/InstantInviteUsesLabel.tsx
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../_runtime/00576_react.js";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import react from "../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const jsxs = Fragment.jsxs;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let maxUses;
      let style;
      let uses;
      const obj = react2;
      const cResult = obj.c(3);
      ({ uses, maxUses, style } = arg0);
      let combined = uses;
      if (0 !== maxUses) {
        const _HermesInternal = HermesInternal;
        combined = "" + uses + "/" + maxUses;
      }
      if (cResult[0] === combined) {
        let tmp6;
        if (cResult[1] === style) {
          tmp6 = cResult[2];
        }
        return tmp6;
      }
      const items = ["Uses: ", combined];
      const tmp7 = jsxs(Text_Text.Text, { variant: "text-md/semibold", color: "text-default", style, children: items });
      cResult[0] = combined;
      cResult[1] = style;
      cResult[2] = tmp7;
      tmp6 = tmp7;
    }
  : (style) => {
      let maxUses;
      let uses;
      ({ uses, maxUses } = style);
      let combined = uses;
      style = style.style;
      if (0 !== maxUses) {
        const _HermesInternal = HermesInternal;
        combined = "" + uses + "/" + maxUses;
      }
      const items = ["Uses: ", combined];
      return jsxs(Text_Text.Text, { variant: "text-md/semibold", color: "text-default", style, children: items });
    };
const result = size.fileFinishedImporting("modules/guild_instant_invites/native/InstantInviteUsesLabel.tsx");

export default tmp3;
