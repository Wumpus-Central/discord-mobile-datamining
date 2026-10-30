// discord_app/modules/conjure/custom_widget/ConjureCustomWidget.tsx
import ConjureUtils from "../shared/ConjureUtils.tsx";
import GuildStore from "../../../stores/GuildStore.tsx";

const require = globalThis.__r;

require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/custom_widget/ConjureCustomWidget.tsx");

export const CONJURE_CUSTOM_WIDGET_PROMPT_MAX_LENGTH = 2000;
export function useCanConjureCustomWidget(ConjureCustomWidgetAddOption, arg1) {
  _require = ConjureCustomWidgetAddOption;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = true;
  }
  const items = [GuildStore, require("ApexExperiment").ApexExperimentStore];
  const items1 = [ConjureCustomWidgetAddOption, flag];
  return require("initialize").useStateFromStores(
    items,
    () => {
      let result = flag;
      if (flag) {
        result = ConjureUtils.hasEligibleConjureGuild(GuildStore.getGuildsArray(), closure_0);
      }
      return result;
    },
    items1,
  );
}
export function composeConjureCustomWidgetPrompt(arg0) {
  const items = [
    "Build a profile card (an application profile widget) for my Discord profile.",
    "Read the data from the public source below \u2014 it must be reachable without a login.",
    "Recommend which fields the card should show and ask me to confirm or edit them before you build.",
    "",
    arg0,
  ];
  return items.join("\n");
}
