// discord_app/modules/emojis/hooks/useEmojiColorPalette.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import c from "../../../../_runtime/00576_c.js";
import EmojiColorUtils from "../utils/EmojiColorUtils.tsx";
import AccessibilityStore from "../../a11y/AccessibilityStore.tsx";
import ThemeStore from "../../user_settings/ThemeStore.tsx";

const require = globalThis.__r;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/emojis/hooks/useEmojiColorPalette.tsx");

export const useEmojiColorPalette = ReactCompilerGating.isReactCompilerEnabled()
  ? function useEmojiColorPalette(colors) {
      const cResult = c.c(8);
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
      const stateFromStores = initialize.useStateFromStores(tmp4, tmp5);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [ThemeStore];
        class S {
          constructor() {
            obj = closure_1_0(closure_1_1[5]);
            return obj.isThemeDark(closure_1_3.theme);
          }
        }
        cResult[2] = items1;
        cResult[3] = S;
        let tmp9 = S;
        let tmp8 = items1;
      } else {
        tmp8 = cResult[2];
        tmp9 = cResult[3];
      }
      const tmpResult = initialize;
      const stateFromStores1 = initialize.useStateFromStores(tmp8, tmp9);
      if (cResult[4] === colors) {
        if (cResult[5] === stateFromStores1) {
          if (cResult[6] === stateFromStores) {
            let tmp12 = cResult[7];
          }
          return tmp12;
        }
      }
      const tmpResult3 = initialize;
      const emojiColorPalette = EmojiColorUtils.buildEmojiColorPalette(colors, stateFromStores, stateFromStores1);
      cResult[4] = colors;
      cResult[5] = stateFromStores1;
      cResult[6] = stateFromStores;
      cResult[7] = emojiColorPalette;
      tmp12 = emojiColorPalette;
      const tmpResult4 = EmojiColorUtils;
    }
  : function useEmojiColorPalette(colors) {
      const items = [AccessibilityStore];
      const stateFromStores = initialize.useStateFromStores(items, () => saturation.saturation);
      const items1 = [ThemeStore];
      const stateFromStores1 = initialize.useStateFromStores(items1, () => require("shared").isThemeDark(theme.theme));
      return EmojiColorUtils.buildEmojiColorPalette(colors, stateFromStores, stateFromStores1);
    };
