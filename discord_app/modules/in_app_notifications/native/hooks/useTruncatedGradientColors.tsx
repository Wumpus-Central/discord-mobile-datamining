// === Module 11019: useTruncatedGradientColors ===

// Module 11019 (useTruncatedGradientColors)
import _mod19 from "module_19" /* 19 */;
import nativeDefault from "native" /* 575 */;
import _modDef671 from "module_671" /* 671 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

const useMemo = _mod19.useMemo;
let closure_4 = createStyles.createStyles({ gradient: { height: 40 } });
const result = size.fileFinishedImporting("modules/in_app_notifications/native/hooks/useTruncatedGradientColors.tsx");

export default function useTruncatedGradientColors() {
  const tmp = closure_4();
  token = token(5591).useToken(nativeDefault.colors.MOBILE_ALERT_BACKGROUND_DEFAULT);
  const obj2 = { gradientColors: null, gradientStyles: tmp.gradient };
  let items = [token];
  obj2.gradientColors = useMemo(() => {
    const obj = _modDef671(token);
    const items = [_modDef671(token).alpha(0).hex(), ];
    const alphaResult = _modDef671(token).alpha(0);
    const obj3 = _modDef671(token);
    items[1] = _modDef671(token).alpha(0.72).hex();
    return items;
  }, items);
  return obj2;
};