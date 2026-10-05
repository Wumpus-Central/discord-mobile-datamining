// discord_app/modules/conjure/custom_widget/ConjureCustomWidget.tsx
import GuildStore from "../../../stores/GuildStore.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, dependencyMap;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, arg1) => {
      let closure_0;
      let closure_1;
      let first;
      _require = arg0;
      let obj = require("react");
      const cResult = obj.c(5);
      dependencyMap = tmp4;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildStore, require("ApexExperiment").ApexExperimentStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === (undefined === arg1 || arg1)) {
        let tmp7;
        let tmp8;
        if (cResult[2] === arg0) {
          tmp7 = cResult[3];
          tmp8 = cResult[4];
        }
        const tmpResult = require("get initialized");
        return tmpResult.useStateFromStores(first, tmp7, tmp8);
      }
      const fn = function s() {
        let someResult = closure_1;
        if (someResult) {
          const guildsArray = GuildStore.getGuildsArray();
          someResult = guildsArray.some((item) => {
            const obj = closure_0(closure_1[4]);
            return obj.isConjureGuildEligible(item, closure_1_0);
          });
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
    }
  : (arg0) => {
      let closure_0;
      _require = arg0;
      let flag = arg1;
      if (arg1 === undefined) {
        flag = true;
      }
      const items = [GuildStore];
      const useStateFromStores = require("get initialized").useStateFromStores;
      require("get initialized");
      items[1] = require("ApexExperiment").ApexExperimentStore;
      const items1 = [arg0, flag];
      return useStateFromStores(
        items,
        () => {
          let someResult = flag;
          if (someResult) {
            const guildsArray = GuildStore.getGuildsArray();
            someResult = guildsArray.some((item) => {
              const obj = closure_0(flag[4]);
              return obj.isConjureGuildEligible(item, closure_1_0);
            });
          }
          return someResult;
        },
        items1,
      );
    };
const result = size.fileFinishedImporting("modules/conjure/custom_widget/ConjureCustomWidget.tsx");

export const CONJURE_CUSTOM_WIDGET_PROMPT_MAX_LENGTH = 2000;
export const useCanConjureCustomWidget = tmp2;
export const composeConjureCustomWidgetPrompt = function composeConjureCustomWidgetPrompt(trimmed) {
  const items = [
    "Build a profile card (an application profile widget) for my Discord profile.",
    "Read the data from the public source below \u2014 it must be reachable without a login.",
    "Recommend which fields the card should show and ask me to confirm or edit them before you build.",
    "",
    trimmed,
  ];
  return items.join("\n");
};
