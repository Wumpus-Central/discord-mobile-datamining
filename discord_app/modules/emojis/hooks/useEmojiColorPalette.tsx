// === Module 9990: useEmojiColorPalette ===

// Module 9990 (useEmojiColorPalette)
import get_initialized from "get initialized" /* 504 */;
import react from "react" /* 576 */;
import EmojiColorUtils from "EmojiColorUtils" /* 7627 */;
import AccessibilityStore from "AccessibilityStore" /* 4885 */;
import ThemeStore from "ThemeStore" /* 1193 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((colors) => {
  let saturation;
  let theme;
  let tmp4;
  let tmp5;
  let tmp8;
  let tmp9;
  let obj = react;
  const cResult = obj.c(8);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AccessibilityStore];
    const fn = function u() {
      return saturation.saturation;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = get_initialized;
  const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [ThemeStore];
    class S {
      constructor() {
        const obj = require("shared");
        return obj.isThemeDark(theme.theme);
      }
    }
    cResult[2] = items1;
    cResult[3] = S;
    tmp9 = S;
    tmp8 = items1;
  } else {
    tmp8 = cResult[2];
    tmp9 = cResult[3];
  }
  const tmpResult3 = get_initialized;
  const stateFromStores1 = tmpResult3.useStateFromStores(tmp8, tmp9);
  if (cResult[4] === colors) {
    if (cResult[5] === stateFromStores1) {
      let tmp12;
      if (cResult[6] === stateFromStores) {
        tmp12 = cResult[7];
      }
      return tmp12;
    }
  }
  const tmpResult4 = EmojiColorUtils;
  const emojiColorPalette = tmpResult4.buildEmojiColorPalette(colors, stateFromStores, stateFromStores1);
  cResult[4] = colors;
  cResult[5] = stateFromStores1;
  cResult[6] = stateFromStores;
  cResult[7] = emojiColorPalette;
  tmp12 = emojiColorPalette;
}) : ((colors) => {
  let saturation;
  let theme;
  let obj = get_initialized;
  const items = [AccessibilityStore];
  const stateFromStores = obj.useStateFromStores(items, () => saturation.saturation);
  const items1 = [ThemeStore];
  const obj2 = get_initialized;
  const stateFromStores1 = obj2.useStateFromStores(items1, () => {
    const obj = require("shared");
    return obj.isThemeDark(theme.theme);
  });
  const obj3 = EmojiColorUtils;
  return obj3.buildEmojiColorPalette(colors, stateFromStores, stateFromStores1);
});
const result = size.fileFinishedImporting("modules/emojis/hooks/useEmojiColorPalette.tsx");

export const useEmojiColorPalette = tmp2;