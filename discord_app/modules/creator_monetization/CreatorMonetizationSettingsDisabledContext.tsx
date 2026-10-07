// discord_app/modules/creator_monetization/CreatorMonetizationSettingsDisabledContext.tsx
import c from "../../../_runtime/00576_c.js";
import CreatorMonetizationRestrictionsHooks from "../creator_monetization_review/CreatorMonetizationRestrictionsHooks.tsx";
import noop from "../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
let context = noop.createContext(undefined);
fn(558);
const ReactCompilerGating = fn(558);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
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
    }
  : () => {
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
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/creator_monetization/CreatorMonetizationSettingsDisabledContext.tsx",
);

export default context;
export const useCreatorMonetizationSettingsDisabled = tmp3;
export const CreatorMonetizationSettingsDisabledContextProvider = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(3);
      ({ children, guildId } = arg0);
      const shouldRestrictUpdatingCreatorMonetizationSettings =
        CreatorMonetizationRestrictionsHooks.useShouldRestrictUpdatingCreatorMonetizationSettings(
          guildId,
        ).shouldRestrictUpdatingCreatorMonetizationSettings;
      if (cResult[0] === children) {
        if (cResult[1] === shouldRestrictUpdatingCreatorMonetizationSettings) {
          let tmp2 = cResult[2];
        }
        return tmp2;
      }
      const tmp3 = (
        <context.Provider value={shouldRestrictUpdatingCreatorMonetizationSettings}>{children}</context.Provider>
      );
      cResult[0] = children;
      cResult[1] = shouldRestrictUpdatingCreatorMonetizationSettings;
      cResult[2] = tmp3;
      tmp2 = tmp3;
    }
  : (arg0) => {
      ({ guildId, children } = arg0);
      return (
        <context.Provider
          value={
            CreatorMonetizationRestrictionsHooks.useShouldRestrictUpdatingCreatorMonetizationSettings(guildId)
              .shouldRestrictUpdatingCreatorMonetizationSettings
          }
        >
          {children}
        </context.Provider>
      );
    };
