// discord_app/modules/in_app_notifications/native/hooks/useTruncatedGradientColors.tsx
import { useMemo } from "noop";
import createCacheKey from "createCacheKey";
import { Themes } from "../../../../../discord_common/js/packages/tokens/native.tsx";

let closure_4 = createCacheKey.createStyles({ gradient: { height: 40 } });
const result = require("map").fileFinishedImporting("modules/in_app_notifications/native/hooks/useTruncatedGradientColors.tsx");

export default function useTruncatedGradientColors() {
  let obj = token(4065);
  token = obj.useToken(Themes.colors.MOBILE_ALERT_BACKGROUND_DEFAULT);
  obj = {
    gradientColors: useMemo(() => {
      const obj = outer1_1(outer1_2[4])(token);
      const items = [outer1_1(outer1_2[4])(token).alpha(0).hex(), ];
      const alphaResult = outer1_1(outer1_2[4])(token).alpha(0);
      const obj3 = outer1_1(outer1_2[4])(token);
      items[1] = outer1_1(outer1_2[4])(token).alpha(0.72).hex();
      return items;
    }, items),
    gradientStyles: callback().gradient
  };
  items = [token];
  return obj;
};