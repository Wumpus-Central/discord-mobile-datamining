// === Module 12622: VibegrationsCustomWidget ===

// Module 12622 (VibegrationsCustomWidget)
import GuildStore from "GuildStore" /* 2067 */;

const require = globalThis.__r;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/vibegrations/lib/VibegrationsCustomWidget.tsx");

export const VIBEGRATIONS_CUSTOM_WIDGET_PROMPT_MAX_LENGTH = 2000;
export const useCanConjureVibegrationsCustomWidget = function useCanConjureVibegrationsCustomWidget(UserProfileContent) {
  _require = UserProfileContent;
  let flag = isMobileGameCollectionExperimentEnabled;
  if (isMobileGameCollectionExperimentEnabled === undefined) {
    flag = true;
  }
  const items = [GuildStore, require("ApexExperiment").ApexExperimentStore];
  const items1 = [UserProfileContent, flag];
  return require("initialize").useStateFromStores(items, () => {
    let someResult = flag;
    if (flag) {
      const guildsArray = GuildStore.getGuildsArray();
      someResult = guildsArray.some((item) => closure_0(flag[3]).isVibegrationsGuildEligible(item, UserProfileContent));
    }
    return someResult;
  }, items1);
};
export const composeVibegrationsCustomWidgetPrompt = function composeVibegrationsCustomWidgetPrompt(arg0) {
  const items = ["Build a profile card (an application profile widget) for my Discord profile.", "Read the data from the public source below \u2014 it must be reachable without a login.", "Recommend which fields the card should show and ask me to confirm or edit them before you build.", "", arg0];
  return items.join("\n");
};