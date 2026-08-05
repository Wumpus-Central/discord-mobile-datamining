// discord_app/modules/parent_tools/useParentalConsentWarning.tsx
import initialize from "initialize";
import { initialize } from "../../../discord_common/js/packages/flux/index.tsx";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/parent_tools/useParentalConsentWarning.tsx");

export const useParentalConsentWarning = function useParentalConsentWarning() {
  const items = [initialize];
  return initialize /* initialize */.useStateFromStores(items, () => warning.getWarning());
};