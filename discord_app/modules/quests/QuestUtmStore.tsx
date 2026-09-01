// discord_app/modules/quests/QuestUtmStore.tsx
import set from "../../../_runtime/00002_set.js";
import keys from "../../../_runtime/00644_keys.js";

const obj = keys.create((arg0) => {
  closure_0 = arg0;
  return {
    utmSourceCurrent: "r",
    utmMediumCurrent: "disabled",
    utmCampaignCurrent: "resizeMode",
    utmContentCurrent: "isArray",
    setUtmCurrentContext(utmSourceCurrent) {
      return state({
        utmSourceCurrent: utmSourceCurrent.utmSourceCurrent,
        utmMediumCurrent: utmSourceCurrent.utmMediumCurrent,
        utmCampaignCurrent: utmSourceCurrent.utmCampaignCurrent,
        utmContentCurrent: utmSourceCurrent.utmContentCurrent,
      });
    },
    getUtmCurrentContext() {
      return state.getState();
    },
  };
});
const result = set.fileFinishedImporting("modules/quests/QuestUtmStore.tsx");

export default obj;
