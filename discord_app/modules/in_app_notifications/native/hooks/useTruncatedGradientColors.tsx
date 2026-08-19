// discord_app/modules/in_app_notifications/native/hooks/useTruncatedGradientColors.tsx
import obj132 from "../../../../../_runtime/00002_obj132.js";
import noop from "../../../../../_runtime/00019_noop.js";
import nDefault from "../../../../../_runtime/00689_n.js";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

const useMemo = noop.useMemo;
let closure_4 = createCacheKey.createStyles({ gradient: { height: 40 } });
const result = obj132.fileFinishedImporting("modules/in_app_notifications/native/hooks/useTruncatedGradientColors.tsx");

export default function useTruncatedGradientColors() {
  let obj = token(4097);
  token = obj.useToken(ThemesDefault.colors.MOBILE_ALERT_BACKGROUND_DEFAULT);
  obj = {
    gradientColors: useMemo(() => {
      const obj = nDefault(token);
      const items = [nDefault(token).alpha(0).hex(), ];
      const alphaResult = nDefault(token).alpha(0);
      const obj3 = nDefault(token);
      items[1] = nDefault(token).alpha(0.72).hex();
      return items;
    }, items),
    gradientStyles: callback().gradient
  };
  items = [token];
  return obj;
};