// === Module 10699: InstantInviteUsesLabel ===

// Module 10699 (InstantInviteUsesLabel)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import Text_Text from "Text/Text" /* 4892 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const jsxs = Fragment.jsxs;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
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
}) : ((style) => {
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
});
const result = size.fileFinishedImporting("modules/guild_instant_invites/native/InstantInviteUsesLabel.tsx");

export default tmp3;