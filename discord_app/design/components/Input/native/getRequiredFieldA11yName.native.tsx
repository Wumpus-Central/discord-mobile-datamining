// discord_app/design/components/Input/native/getRequiredFieldA11yName.native.tsx
import util from "../../../../intl/index.native.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("design/components/Input/native/getRequiredFieldA11yName.native.tsx");

export const getRequiredFieldA11yName = function getRequiredFieldA11yName(accessibilityLabel, required) {
  let combined;
  if (null != accessibilityLabel) {
    if ("" !== accessibilityLabel) {
      if (true === required) {
        const intl = util.intl;
        const _HermesInternal = HermesInternal;
        combined = "" + accessibilityLabel + " (" + intl.string(util.t.EkokLy) + ")";
      }
    }
  }
  return combined;
};
