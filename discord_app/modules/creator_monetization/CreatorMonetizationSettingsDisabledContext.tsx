// discord_app/modules/creator_monetization/CreatorMonetizationSettingsDisabledContext.tsx
import useShouldHideGuildPurchaseEntryPoints from "../creator_monetization_review/CreatorMonetizationRestrictionsHooks.tsx";
import importAllResult from "../../../_runtime/00019_noop.js";
import { jsx } from "../../../_runtime/react/00021_jsxProd.js";

require = arg1;
let context = importAllResult.createContext(undefined);
const result = require("set").fileFinishedImporting(
  "modules/creator_monetization/CreatorMonetizationSettingsDisabledContext.tsx",
);

export default context;
export const useCreatorMonetizationSettingsDisabled = function useCreatorMonetizationSettingsDisabled() {
  context = importAllResult.useContext(context);
  if (null == context) {
    const _Error = Error;
    error = new Error(
      "useCreatorMonetizationSettingsDisabled must be used within a CreatorMonetizationSettingsDisabledContext",
    );
    throw error;
  } else {
    return context;
  }
};
export const CreatorMonetizationSettingsDisabledContextProvider =
  function CreatorMonetizationSettingsDisabledContextProvider(arg0) {
    ({ guildId, children } = arg0);
    let obj = useShouldHideGuildPurchaseEntryPoints;
    obj = {
      value:
        obj.useShouldRestrictUpdatingCreatorMonetizationSettings(guildId)
          .shouldRestrictUpdatingCreatorMonetizationSettings,
      children,
    };
    return (
      <context.Provider
        value={
          obj.useShouldRestrictUpdatingCreatorMonetizationSettings(guildId)
            .shouldRestrictUpdatingCreatorMonetizationSettings
        }
      >
        {children}
      </context.Provider>
    );
  };
