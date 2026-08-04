// discord_app/modules/quests/QuestUtmStore.tsx
import keys from "keys";

const obj = keys.create((arg0) => {
  let closure_0 = arg0;
  return {
    utmSourceCurrent: "r",
    utmMediumCurrent: "description",
    utmCampaignCurrent: "cix",
    utmContentCurrent: "isArray",
    setUtmCurrentContext(utmSourceCurrent) {
      return state({ utmSourceCurrent: utmSourceCurrent.utmSourceCurrent, utmMediumCurrent: utmSourceCurrent.utmMediumCurrent, utmCampaignCurrent: utmSourceCurrent.utmCampaignCurrent, utmContentCurrent: utmSourceCurrent.utmContentCurrent });
    },
    getUtmCurrentContext() {
      return state.getState();
    }
  };
});
const result = require("set").fileFinishedImporting("modules/quests/QuestUtmStore.tsx");

export default obj;