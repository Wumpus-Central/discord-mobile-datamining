// === Module 17922: CreatorMonetizationSettingsDisabledContext ===

// Module 17922 (CreatorMonetizationSettingsDisabledContext)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import CreatorMonetizationRestrictionsHooks from "CreatorMonetizationRestrictionsHooks" /* 6756 */;
import react from "react" /* 19 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let context = react.createContext(undefined);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function() {
  context = react.useContext(context);
  if (null == context) {
    const _Error = Error;
    const self = this;
    const self2 = this;
    const error = new Error("useCreatorMonetizationSettingsDisabled must be used within a CreatorMonetizationSettingsDisabledContext");
    throw error;
  } else {
    return context;
  }
}) : (function() {
  context = react.useContext(context);
  if (null == context) {
    const _Error = Error;
    const self = this;
    const self2 = this;
    const error = new Error("useCreatorMonetizationSettingsDisabled must be used within a CreatorMonetizationSettingsDisabledContext");
    throw error;
  } else {
    return context;
  }
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let children;
  let guildId;
  const obj = react2;
  const cResult = obj.c(3);
  ({ children, guildId } = arg0);
  const obj2 = CreatorMonetizationRestrictionsHooks;
  const shouldRestrictUpdatingCreatorMonetizationSettings = obj2.useShouldRestrictUpdatingCreatorMonetizationSettings(guildId).shouldRestrictUpdatingCreatorMonetizationSettings;
  if (cResult[0] === children) {
    let tmp2;
    if (cResult[1] === shouldRestrictUpdatingCreatorMonetizationSettings) {
      tmp2 = cResult[2];
    }
    return tmp2;
  }
  const tmp3 = <context.Provider value={shouldRestrictUpdatingCreatorMonetizationSettings}>{children}</context.Provider>;
  cResult[0] = children;
  cResult[1] = shouldRestrictUpdatingCreatorMonetizationSettings;
  cResult[2] = tmp3;
  tmp2 = tmp3;
}) : ((arg0) => {
  let children;
  let guildId;
  ({ guildId, children } = arg0);
  const obj = CreatorMonetizationRestrictionsHooks;
  return <context.Provider value={obj.useShouldRestrictUpdatingCreatorMonetizationSettings(guildId).shouldRestrictUpdatingCreatorMonetizationSettings}>{children}</context.Provider>;
});
const result = size.fileFinishedImporting("modules/creator_monetization/CreatorMonetizationSettingsDisabledContext.tsx");

export default context;
export const useCreatorMonetizationSettingsDisabled = tmp3;
export const CreatorMonetizationSettingsDisabledContextProvider = tmp4;