// === Module 10869: useAvatarSpeakingColor ===

// Module 10869 (useAvatarSpeakingColor)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import _modDef683 from "module_683" /* 683 */;
import useVadColorsDefault from "useVadColors" /* 10871 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5080 */;

const require = globalThis.__r;

const initialize = accessibleForegroundColor(504);
const useToken = accessibleForegroundColor(4779);
const ColorUtils = accessibleForegroundColor(4928);
require = fn;
const ratio = fn(10870).VAD_COLOR_MIN_CONTRAST_RATIO;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/calls/native/useAvatarSpeakingColor.tsx");

export const useAvatarSpeakingColor = ReactCompilerGating.isReactCompilerEnabled() ? (function useAvatarSpeakingColor(arg0) {
  let accessibleForegroundColor = require;
  let tmp = dependencyMap;
  const cResult = c.c(9);
  ({ userId, guildId } = arg0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AccessibilityStore];
    const fn = function n() {
      let num = 1;
      if (AccessibilityStore.desaturateUserColors) {
        num = AccessibilityStore.saturation;
      }
      return num;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp3 = items;
    tmp4 = fn;
  } else {
    [tmp3, tmp4] = cResult;
  }
  const result = initialize;
  const stateFromStores = result.useStateFromStores(tmp3, tmp4);
  if (cResult[2] === guildId) {
    if (cResult[3] === userId) {
      let tmp7 = cResult[4];
    }
    const tmp9 = useVadColorsDefault(tmp7);
    const result1 = useToken;
    const token = result1.useToken(nativeDefault.colors.BACKGROUND_BASE_LOWER);
    const result2 = useToken;
    let first;
    const token1 = result2.useToken(nativeDefault.colors.STATUS_SPEAKING);
    if (tmp9 != null) {
      first = tmp9[0];
    }
    if (null == first) {
      return token1;
    } else {
      if (cResult[5] === token) {
        if (cResult[6] === stateFromStores) {
        }
      }
      const result3 = ColorUtils;
      const obj = { foreground: _modDef683(first), background: null, ratio: null, saturationFactor: null };
      tmp = _modDef683(token);
      obj.background = tmp;
      obj.ratio = ratio;
      obj.saturationFactor = stateFromStores;
      accessibleForegroundColor = result3.getAccessibleForegroundColor(obj);
      const hexResult = accessibleForegroundColor.hex();
      cResult[5] = token;
      cResult[6] = stateFromStores;
      cResult[7] = first;
      cResult[8] = hexResult;
    }
  }
  const obj3 = { userId, guildId };
  cResult[2] = guildId;
  cResult[3] = userId;
  cResult[4] = obj3;
  tmp7 = obj3;
}) : (function useAvatarSpeakingColor(arg0) {
  let stateFromStores;
  importDefault = undefined;
  let token;
  ({ userId, guildId } = arg0);
  const items = [AccessibilityStore];
  stateFromStores = stateFromStores(token[5]).useStateFromStores(items, () => {
    let num = 1;
    if (AccessibilityStore.desaturateUserColors) {
      num = AccessibilityStore.saturation;
    }
    return num;
  });
  const tmp2 = require("useVadColors")({ userId, guildId });
  importDefault = tmp2;
  let obj = stateFromStores(token[5]);
  token = stateFromStores(token[7]).useToken(require("native").colors.BACKGROUND_BASE_LOWER);
  let obj2 = stateFromStores(token[7]);
  const token1 = stateFromStores(token[7]).useToken(require("native").colors.STATUS_SPEAKING);
  const items1 = [tmp2, token, token1, stateFromStores];
  return token1.useMemo(() => {
    let first;
    if (closure_1 != null) {
      first = closure_1[0];
    }
    if (null == first) {
      let hexResult = token1;
    } else {
      const obj2 = { foreground: _modDef683(first), background: _modDef683(token), ratio, saturationFactor: stateFromStores };
      const accessibleForegroundColor = ColorUtils.getAccessibleForegroundColor(obj2);
      hexResult = accessibleForegroundColor.hex();
    }
    return hexResult;
  }, items1);
});