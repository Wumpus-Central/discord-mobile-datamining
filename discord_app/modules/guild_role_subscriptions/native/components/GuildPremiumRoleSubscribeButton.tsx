// === Module 17961: GuildPremiumRoleSubscribeButton ===

// Module 17961 (GuildPremiumRoleSubscribeButton)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import intl2 from "intl" /* 1126 */;
import CreatorRevenueButton2 from "CreatorRevenueButton" /* 9902 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let onPress;

const jsx = Fragment.jsx;
let closure_3 = createStyles.createStyles({ crButton: { marginVertical: 16 } });
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((onPress) => {
  let first;
  const obj = react2;
  const cResult = obj.c(4);
  onPress = onPress.onPress;
  const tmp4 = closure_3();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = intl2.intl;
    const stringResult = intl.string(intl2.t.BEeXib);
    cResult[0] = stringResult;
    first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === onPress) {
    let tmp7;
    if (cResult[2] === tmp4.crButton) {
      tmp7 = cResult[3];
    }
    return tmp7;
  }
  const tmp8 = jsx(CreatorRevenueButton2.CreatorRevenueButton, { text: first, onPress, style: tmp4.crButton, disabled: true });
  cResult[1] = onPress;
  cResult[2] = tmp4.crButton;
  cResult[3] = tmp8;
  tmp7 = tmp8;
}) : ((onPress) => {
  onPress = onPress.onPress;
  const tmp = closure_3();
  const CreatorRevenueButton = CreatorRevenueButton2.CreatorRevenueButton;
  const intl = intl2.intl;
  return <CreatorRevenueButton text={intl.string(intl2.t.BEeXib)} onPress={onPress} style={tmp.crButton} disabled />;
});
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/GuildPremiumRoleSubscribeButton.tsx");

export const GuildPremiumRoleSubscribeButton = tmp3;