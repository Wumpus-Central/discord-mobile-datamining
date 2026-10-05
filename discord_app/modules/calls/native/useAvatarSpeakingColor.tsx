// === Module 9122: useAvatarSpeakingColor ===

// Module 9122 (useAvatarSpeakingColor)
import get_initialized from "get initialized" /* 504 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import _modDef683 from "module_683" /* 683 */;
import useToken from "useToken" /* 4580 */;
import ColorUtils from "ColorUtils" /* 4727 */;
import VadColorConstants from "VadColorConstants" /* 9123 */;
import useVadColorsDefault from "useVadColors" /* 9124 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4879 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let importDefault;

const ratio = VadColorConstants.VAD_COLOR_MIN_CONTRAST_RATIO;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let guildId;
  let tmp4;
  let tmp5;
  let userId;
  const obj = react2;
  const cResult = obj.c(9);
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
    let num = 0;
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = get_initialized;
  const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  if (cResult[2] === guildId) {
    let tmp8;
    if (cResult[3] === userId) {
      tmp8 = cResult[4];
    }
    const tmp10 = useVadColorsDefault(tmp8);
    const tmpResult4 = useToken;
    const token = tmpResult4.useToken(nativeDefault.colors.BACKGROUND_BASE_LOWER);
    const tmpResult5 = useToken;
    let token1 = tmpResult5.useToken(nativeDefault.colors.STATUS_SPEAKING);
    let first;
    if (tmp10 != null) {
      first = tmp10[0];
    }
    if (null != first) {
      if (cResult[5] === token) {
        if (cResult[6] === stateFromStores) {
          let tmp15;
          if (cResult[7] === first) {
            tmp15 = cResult[8];
          }
          token1 = tmp15;
        }
      }
      const obj2 = { foreground: _modDef683(first), background: _modDef683(token), ratio, saturationFactor: stateFromStores };
      const getAccessibleForegroundColor = ColorUtils.getAccessibleForegroundColor;
      ColorUtils;
      const accessibleForegroundColor = getAccessibleForegroundColor(obj2);
      const hexResult = accessibleForegroundColor.hex();
      cResult[5] = token;
      cResult[6] = stateFromStores;
      cResult[7] = first;
      cResult[8] = hexResult;
      tmp15 = hexResult;
    }
    return token1;
  }
  const obj3 = { userId, guildId };
  cResult[2] = guildId;
  cResult[3] = userId;
  cResult[4] = obj3;
  tmp8 = obj3;
}) : ((arg0) => {
  let closure_1;
  let guildId;
  let userId;
  let stateFromStores;
  importDefault = undefined;
  let token;
  ({ userId, guildId } = arg0);
  let obj = stateFromStores(token[5]);
  const items = [AccessibilityStore];
  stateFromStores = obj.useStateFromStores(items, () => {
    let num = 1;
    if (AccessibilityStore.desaturateUserColors) {
      num = AccessibilityStore.saturation;
    }
    return num;
  });
  const tmp2 = require("useVadColors")({ userId, guildId });
  importDefault = tmp2;
  const obj2 = stateFromStores(token[7]);
  token = obj2.useToken(require("native").colors.BACKGROUND_BASE_LOWER);
  const obj3 = stateFromStores(token[7]);
  const token1 = obj3.useToken(require("native").colors.STATUS_SPEAKING);
  const items1 = [tmp2, token, token1, stateFromStores];
  return token1.useMemo(() => {
    let hexResult;
    let first;
    if (closure_1 != null) {
      first = closure_1[0];
    }
    if (null == first) {
      hexResult = token1;
    } else {
      const obj = { foreground: _modDef683(first), background: _modDef683(token), ratio, saturationFactor: stateFromStores };
      const getAccessibleForegroundColor = ColorUtils.getAccessibleForegroundColor;
      ColorUtils;
      const accessibleForegroundColor = getAccessibleForegroundColor(obj);
      hexResult = accessibleForegroundColor.hex();
    }
    return hexResult;
  }, items1);
});
const result = size.fileFinishedImporting("modules/calls/native/useAvatarSpeakingColor.tsx");

export const useAvatarSpeakingColor = tmp2;