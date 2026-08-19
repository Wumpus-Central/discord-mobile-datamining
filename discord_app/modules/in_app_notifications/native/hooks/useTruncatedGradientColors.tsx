// === Module 10049: useTruncatedGradientColors ===

// Module 10049 (useTruncatedGradientColors)
import obj132 from "obj132" /* 2 */;
import noop from "noop" /* 19 */;
import nDefault from "n" /* 689 */;
import ThemesDefault from "Themes" /* 712 */;
import createCacheKey from "createCacheKey" /* 4661 */;

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