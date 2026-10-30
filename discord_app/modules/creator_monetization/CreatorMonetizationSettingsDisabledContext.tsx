// === Module 19882: CreatorMonetizationSettingsDisabledContext ===

// Module 19882 (CreatorMonetizationSettingsDisabledContext)
import CreatorMonetizationRestrictionsHooks from "CreatorMonetizationRestrictionsHooks" /* 7421 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let context = noop.createContext(undefined);
const size = fn(2);
const result = size.fileFinishedImporting("modules/creator_monetization/CreatorMonetizationSettingsDisabledContext.tsx");

export default context;
export function useCreatorMonetizationSettingsDisabled() {
  context = noop.useContext(context);
  if (null == context) {
    const _Error = Error;
    const error = new Error("useCreatorMonetizationSettingsDisabled must be used within a CreatorMonetizationSettingsDisabledContext");
    throw error;
  } else {
    return context;
  }
}
export function CreatorMonetizationSettingsDisabledContextProvider(arg0) {
  ({ guildId, children } = arg0);
  return <context.Provider value={CreatorMonetizationRestrictionsHooks.useShouldRestrictUpdatingCreatorMonetizationSettings(guildId).shouldRestrictUpdatingCreatorMonetizationSettings}>{children}</context.Provider>;
}