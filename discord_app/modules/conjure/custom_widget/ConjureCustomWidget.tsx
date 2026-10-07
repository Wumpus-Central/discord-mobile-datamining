// discord_app/modules/conjure/custom_widget/ConjureCustomWidget.tsx
import GuildStore from "../../../stores/GuildStore.tsx";

const require = globalThis.__r;

const require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/custom_widget/ConjureCustomWidget.tsx");

export const CONJURE_CUSTOM_WIDGET_PROMPT_MAX_LENGTH = 2000;
export const useCanConjureCustomWidget = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, arg1) => {
      _require = arg0;
      const cResult = require("c").c(5);
      dependencyMap = tmp4;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildStore, tmp(1440).ApexExperimentStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === (undefined === arg1 || arg1)) {
        if (cResult[2] === arg0) {
          let tmp7 = cResult[3];
          let tmp8 = cResult[4];
        }
        return tmp(504).useStateFromStores(first, tmp7, tmp8);
      }
      const fn = function s() {
        let someResult = closure_1;
        if (closure_1) {
          const guildsArray = GuildStore.getGuildsArray();
          someResult = guildsArray.some((item) => closure_0(closure_1[4]).isConjureGuildEligible(item, closure_1_0));
        }
        return someResult;
      };
      const items1 = [arg0, undefined === arg1 || arg1];
      cResult[1] = undefined === arg1 || arg1;
      cResult[2] = arg0;
      cResult[3] = fn;
      cResult[4] = items1;
      tmp8 = items1;
      tmp7 = fn;
      const obj = require("c");
    }
  : (arg0) => {
      _require = arg0;
      let flag = arg1;
      if (arg1 === undefined) {
        flag = true;
      }
      const items = [GuildStore, require("ApexExperiment").ApexExperimentStore];
      const items1 = [arg0, flag];
      return require("initialize").useStateFromStores(
        items,
        () => {
          let someResult = flag;
          if (flag) {
            const guildsArray = GuildStore.getGuildsArray();
            someResult = guildsArray.some((item) => closure_0(flag[4]).isConjureGuildEligible(item, closure_1_0));
          }
          return someResult;
        },
        items1,
      );
    };
export const composeConjureCustomWidgetPrompt = function composeConjureCustomWidgetPrompt(arg0) {
  const items = [
    "Build a profile card (an application profile widget) for my Discord profile.",
    "Read the data from the public source below \u2014 it must be reachable without a login.",
    "Recommend which fields the card should show and ask me to confirm or edit them before you build.",
    "",
    arg0,
  ];
  return items.join("\n");
};
