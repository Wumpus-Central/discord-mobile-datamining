// === Module 10108: useTruncatedGradientColors ===

// Module 10108 (useTruncatedGradientColors)
import _mod19 from "module_19" /* 19 */;
import nativeDefault from "native" /* 576 */;
import _modDef672 from "module_672" /* 672 */;
import createStyles from "createStyles" /* 4560 */;
import size from "module_2" /* 2 */;

const useMemo = _mod19.useMemo;
let closure_4 = createStyles.createStyles({ gradient: { height: 40 } });
const result = size.fileFinishedImporting("modules/in_app_notifications/native/hooks/useTruncatedGradientColors.tsx");

export default function useTruncatedGradientColors() {
  let obj = token(4262);
  token = obj.useToken(nativeDefault.colors.MOBILE_ALERT_BACKGROUND_DEFAULT);
  obj = { gradientColors: null, gradientStyles: closure_4().gradient };
  let items = [token];
  obj.gradientColors = useMemo(() => {
    const obj = _modDef672(token);
    const items = [_modDef672(token).alpha(0).hex(), ];
    const alphaResult = _modDef672(token).alpha(0);
    const obj3 = _modDef672(token);
    items[1] = _modDef672(token).alpha(0.72).hex();
    return items;
  }, items);
  return obj;
};