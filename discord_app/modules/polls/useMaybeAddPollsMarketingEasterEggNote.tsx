// discord_app/modules/polls/useMaybeAddPollsMarketingEasterEggNote.tsx
import get_initialized from "../../../discord_common/js/packages/flux/index.tsx";
import react from "../../../_runtime/00576_react.js";
import intl2 from "../../intl/index.native.tsx";
import LocaleStore from "../user_settings/LocaleStore.tsx";
import ReactCompilerGating from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

let locale;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (emojiName) => {
      let tmp4;
      let tmp5;
      const obj = react;
      const cResult = obj.c(5);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [LocaleStore];
        const fn = function l() {
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
      const tmpResult = get_initialized;
      const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
      if (cResult[2] === emojiName) {
        let tmp8;
        if (cResult[3] === stateFromStores) {
          tmp8 = cResult[4];
        }
        return tmp8;
      }
      let formatToPlainStringResult = emojiName;
      if (":pizza:" === emojiName) {
        formatToPlainStringResult = emojiName;
        if (stateFromStores) {
          const intl = intl2.intl;
          const obj2 = { emojiName };
          formatToPlainStringResult = intl.formatToPlainString(intl2.t["1knDPI"], obj2);
        }
      }
      cResult[2] = emojiName;
      cResult[3] = stateFromStores;
      cResult[4] = formatToPlainStringResult;
      tmp8 = formatToPlainStringResult;
    }
  : (emojiName) => {
      get_initialized;
      [][0] = LocaleStore;
      let formatToPlainStringResult = emojiName;
      if (":pizza:" === emojiName) {
        formatToPlainStringResult = emojiName;
        if (tmp4) {
          const intl = intl2.intl;
          const obj = { emojiName };
          formatToPlainStringResult = intl.formatToPlainString(intl2.t["1knDPI"], obj);
        }
      }
      return formatToPlainStringResult;
    };
const result = size.fileFinishedImporting("modules/polls/useMaybeAddPollsMarketingEasterEggNote.tsx");

export default tmp2;
