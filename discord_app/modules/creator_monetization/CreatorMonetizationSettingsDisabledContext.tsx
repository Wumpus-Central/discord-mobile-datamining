// === Module 18417: CreatorMonetizationSettingsDisabledContext ===

// Module 18417 (CreatorMonetizationSettingsDisabledContext)
import c from "c" /* 576 */;
import CreatorMonetizationRestrictionsHooks from "CreatorMonetizationRestrictionsHooks" /* 6949 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let context = noop.createContext(undefined);
fn(558);
const ReactCompilerGating = fn(558);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useCreatorMonetizationSettingsDisabled() {
  context = noop.useContext(context);
  if (null == context) {
    const _Error = Error;
    const error = new Error("useCreatorMonetizationSettingsDisabled must be used within a CreatorMonetizationSettingsDisabledContext");
    throw error;
  } else {
    return context;
  }
}) : (function useCreatorMonetizationSettingsDisabled() {
  context = noop.useContext(context);
  if (null == context) {
    const _Error = Error;
    const error = new Error("useCreatorMonetizationSettingsDisabled must be used within a CreatorMonetizationSettingsDisabledContext");
    throw error;
  } else {
    return context;
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/creator_monetization/CreatorMonetizationSettingsDisabledContext.tsx");

export default context;
export const useCreatorMonetizationSettingsDisabled = tmp3;
export const CreatorMonetizationSettingsDisabledContextProvider = ReactCompilerGating.isReactCompilerEnabled() ? (function CreatorMonetizationSettingsDisabledContextProvider(arg0) {
  const cResult = c.c(3);
  ({ children, guildId } = arg0);
  const shouldRestrictUpdatingCreatorMonetizationSettings = CreatorMonetizationRestrictionsHooks.useShouldRestrictUpdatingCreatorMonetizationSettings(guildId).shouldRestrictUpdatingCreatorMonetizationSettings;
  if (cResult[0] === children) {
    if (cResult[1] === shouldRestrictUpdatingCreatorMonetizationSettings) {
      let tmp2 = cResult[2];
    }
    return tmp2;
  }
  const tmp3 = <context.Provider value={shouldRestrictUpdatingCreatorMonetizationSettings}>{children}</context.Provider>;
  cResult[0] = children;
  cResult[1] = shouldRestrictUpdatingCreatorMonetizationSettings;
  cResult[2] = tmp3;
  tmp2 = tmp3;
}) : (function CreatorMonetizationSettingsDisabledContextProvider(arg0) {
  ({ guildId, children } = arg0);
  return <context.Provider value={CreatorMonetizationRestrictionsHooks.useShouldRestrictUpdatingCreatorMonetizationSettings(guildId).shouldRestrictUpdatingCreatorMonetizationSettings}>{children}</context.Provider>;
});