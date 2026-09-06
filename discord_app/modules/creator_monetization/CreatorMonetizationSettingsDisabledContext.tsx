// discord_app/modules/creator_monetization/CreatorMonetizationSettingsDisabledContext.tsx
import CreatorMonetizationRestrictionsHooks from "../creator_monetization_review/CreatorMonetizationRestrictionsHooks.tsx";
import noop from "../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
let context = noop.createContext(undefined);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/creator_monetization/CreatorMonetizationSettingsDisabledContext.tsx",
);

export default context;
export const useCreatorMonetizationSettingsDisabled = function useCreatorMonetizationSettingsDisabled() {
  context = noop.useContext(context);
  if (null == context) {
    const _Error = Error;
    const error = new Error(
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
    let obj = CreatorMonetizationRestrictionsHooks;
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
