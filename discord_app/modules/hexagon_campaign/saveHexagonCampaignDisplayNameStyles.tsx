// discord_app/modules/hexagon_campaign/saveHexagonCampaignDisplayNameStyles.tsx
import UserSettingsAccountActionCreators from "../../actions/UserSettingsAccountActionCreators.tsx";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";

require = fn;
let closure_3 = async function _saveHexagonCampaignDisplayNameStyles() {
  c2 = 0;
  c3 = 0;
  return (async (arg0) => {
    closure_1 = tmp2;
    await UserSettingsAccountActionCreators.saveProfileAndAccountChanges({ displayNameStyles });
    closure_129_0 = value;
    if (closure_129_0 != null) {
      const ok = closure_129_0.ok;
    }
    return true === ok;
  })();
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/hexagon_campaign/saveHexagonCampaignDisplayNameStyles.tsx");

export function saveHexagonCampaignDisplayNameStyles() {
  const self = this;
  const apply = closure_3.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
