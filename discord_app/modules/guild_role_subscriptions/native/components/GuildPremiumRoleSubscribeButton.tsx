// discord_app/modules/guild_role_subscriptions/native/components/GuildPremiumRoleSubscribeButton.tsx
import c from "../../../../../_runtime/00576_c.js";
import util from "../../../../intl/index.native.tsx";
import CreatorRevenueButton from "CreatorRevenueButton.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4890);
let closure_3 = createStyles.createStyles({ crButton: { marginVertical: 16 } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/guild_role_subscriptions/native/components/GuildPremiumRoleSubscribeButton.tsx",
);

export const GuildPremiumRoleSubscribeButton = ReactCompilerGating.isReactCompilerEnabled()
  ? (onPress) => {
      const cResult = c.c(4);
      onPress = onPress.onPress;
      const tmp4 = closure_3();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = util.intl;
        const stringResult = intl.string(util.t.BEeXib);
        cResult[0] = stringResult;
        let first = stringResult;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === onPress) {
        if (cResult[2] === tmp4.crButton) {
          let tmp7 = cResult[3];
        }
        return tmp7;
      }
      const tmp8 = jsx(CreatorRevenueButton.CreatorRevenueButton, {
        text: first,
        onPress,
        style: tmp4.crButton,
        disabled: true,
      });
      cResult[1] = onPress;
      cResult[2] = tmp4.crButton;
      cResult[3] = tmp8;
      tmp7 = tmp8;
      const obj2 = { text: first, onPress, style: tmp4.crButton, disabled: true };
    }
  : (onPress) => {
      const obj = { text: null, onPress: null, style: null, disabled: true };
      const intl = util.intl;
      obj.text = intl.string(util.t.BEeXib);
      obj.onPress = onPress.onPress;
      obj.style = closure_3().crButton;
      return jsx(CreatorRevenueButton.CreatorRevenueButton, { text: null, onPress: null, style: null, disabled: true });
    };
