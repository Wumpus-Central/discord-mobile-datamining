// discord_app/modules/quests/QuestUtmStore.tsx
import keys from "keys";

let obj = keys.create((arg0) => {
  let closure_0 = arg0;
  const obj = { utmSourceCurrent: "r", utmMediumCurrent: "__closure", utmCampaignCurrent: "e", utmContentCurrent: "max", setUtmCurrentContext: true, getUtmCurrentContext: true };
  obj[4] = function setUtmCurrentContext(utmSourceCurrent) {
    return state({ utmSourceCurrent: utmSourceCurrent.utmSourceCurrent, utmMediumCurrent: utmSourceCurrent.utmMediumCurrent, utmCampaignCurrent: utmSourceCurrent.utmCampaignCurrent, utmContentCurrent: utmSourceCurrent.utmContentCurrent });
  };
  obj[5] = function getUtmCurrentContext() {
    return state.getState();
  };
  return obj;
});
const result = require("set").fileFinishedImporting("modules/quests/QuestUtmStore.tsx");

export default obj;