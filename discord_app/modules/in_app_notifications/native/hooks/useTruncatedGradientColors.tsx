// discord_app/modules/in_app_notifications/native/hooks/useTruncatedGradientColors.tsx
import set from "../../../../../_runtime/00002_set.js";
import noop from "../../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

const useMemo = noop.useMemo;
let closure_4 = createCacheKey.createStyles({ gradient: { height: 40 } });
const result = set.fileFinishedImporting("modules/in_app_notifications/native/hooks/useTruncatedGradientColors.tsx");

export default function useTruncatedGradientColors() {
  let obj = token(4197);
  token = obj.useToken(ThemesDefault.colors.MOBILE_ALERT_BACKGROUND_DEFAULT);
  obj = {
    gradientColors: useMemo(() => {
      const obj = closure_1_1(closure_1_2[4])(token);
      const items = [closure_1_1(closure_1_2[4])(token).alpha(0).hex(), ];
      const alphaResult = closure_1_1(closure_1_2[4])(token).alpha(0);
      const obj3 = closure_1_1(closure_1_2[4])(token);
      items[1] = closure_1_1(closure_1_2[4])(token).alpha(0.72).hex();
      return items;
    }, items),
    gradientStyles: callback().gradient
  };
  items = [token];
  return obj;
};