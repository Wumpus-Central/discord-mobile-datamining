// === Module 8902: useAvatarSpeakingColor ===

// Module 8902 (useAvatarSpeakingColor)
import _modDef672 from "module_672" /* 672 */;
import ColorUtils from "ColorUtils" /* 4683 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4825 */;

const require = globalThis.__r;

require = fn;
let closure_5 = fn(8903).VAD_COLOR_MIN_CONTRAST_RATIO;
const size = fn(2);
const result = size.fileFinishedImporting("modules/calls/native/useAvatarSpeakingColor.tsx");

export const useAvatarSpeakingColor = function useAvatarSpeakingColor(arg0) {
  let stateFromStores;
  importDefault = undefined;
  let token;
  ({ userId, guildId } = arg0);
  const items = [AccessibilityStore];
  stateFromStores = stateFromStores(token[3]).useStateFromStores(items, () => {
    let num = 1;
    if (AccessibilityStore.desaturateUserColors) {
      num = AccessibilityStore.saturation;
    }
    return num;
  });
  const tmp2 = require("useVadColors")({ userId, guildId });
  importDefault = tmp2;
  let obj = stateFromStores(token[3]);
  token = stateFromStores(token[5]).useToken(require("native").colors.BACKGROUND_BASE_LOWER);
  let obj2 = stateFromStores(token[5]);
  const token1 = stateFromStores(token[5]).useToken(require("native").colors.STATUS_SPEAKING);
  const items1 = [tmp2, token, token1, stateFromStores];
  return token1.useMemo(() => {
    let first;
    if (closure_1 != null) {
      first = closure_1[0];
    }
    if (null == first) {
      let hexResult = token1;
    } else {
      const obj2 = { foreground: _modDef672(first), background: _modDef672(token), ratio, saturationFactor: stateFromStores };
      const accessibleForegroundColor = ColorUtils.getAccessibleForegroundColor(obj2);
      hexResult = accessibleForegroundColor.hex();
    }
    return hexResult;
  }, items1);
};