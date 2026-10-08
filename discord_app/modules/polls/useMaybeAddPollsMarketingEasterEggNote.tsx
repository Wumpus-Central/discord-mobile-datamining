// discord_app/modules/polls/useMaybeAddPollsMarketingEasterEggNote.tsx
import initialize from "../../../discord_common/js/packages/flux/index.tsx";
import c from "../../../_runtime/00576_c.js";
import util from "../../intl/index.native.tsx";
import LocaleStore from "../user_settings/LocaleStore.tsx";

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/polls/useMaybeAddPollsMarketingEasterEggNote.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function useMaybeAddPollsMarketingEasterEggNote(emojiName) {
      const cResult = c.c(5);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [LocaleStore];
        const fn = function s() {
          locale = locale.locale;
          return locale.startsWith("en-");
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      const stateFromStores = initialize.useStateFromStores(tmp4, tmp5);
      if (cResult[2] === emojiName) {
        if (cResult[3] === stateFromStores) {
          let tmp8 = cResult[4];
        }
        return tmp8;
      }
      let formatToPlainStringResult = emojiName;
      if (":pizza:" === emojiName) {
        formatToPlainStringResult = emojiName;
        if (stateFromStores) {
          const intl = util.intl;
          const obj2 = { emojiName };
          formatToPlainStringResult = intl.formatToPlainString(util.t["1knDPI"], obj2);
        }
      }
      cResult[2] = emojiName;
      cResult[3] = stateFromStores;
      cResult[4] = formatToPlainStringResult;
      tmp8 = formatToPlainStringResult;
      const tmpResult = initialize;
    }
  : function useMaybeAddPollsMarketingEasterEggNote(emojiName) {
      initialize;
      [][0] = LocaleStore;
      let formatToPlainStringResult = emojiName;
      if (":pizza:" === emojiName) {
        formatToPlainStringResult = emojiName;
        if (tmp4) {
          const intl = util.intl;
          const obj = { emojiName };
          formatToPlainStringResult = intl.formatToPlainString(util.t["1knDPI"], obj);
        }
      }
      return formatToPlainStringResult;
    };
