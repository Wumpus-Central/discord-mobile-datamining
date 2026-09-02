// discord_app/modules/quests/QuestUtmStore.tsx
import set from "../../../_runtime/00002_set.js";
import keys from "../../../_runtime/00641_keys.js";

let obj = keys.create((arg0) => {
  closure_0 = arg0;
  obj = {
    utmSourceCurrent: "r",
    utmMediumCurrent: "w",
    utmCampaignCurrent: "container",
    utmContentCurrent: "tag",
    setUtmCurrentContext: "NON_TOKEN_TYPE",
    getUtmCurrentContext: "Menu",
  };
  obj[4] = function setUtmCurrentContext(utmSourceCurrent) {
    return state({
      utmSourceCurrent: utmSourceCurrent.utmSourceCurrent,
      utmMediumCurrent: utmSourceCurrent.utmMediumCurrent,
      utmCampaignCurrent: utmSourceCurrent.utmCampaignCurrent,
      utmContentCurrent: utmSourceCurrent.utmContentCurrent,
    });
  };
  obj[5] = function getUtmCurrentContext() {
    return state.getState();
  };
  return obj;
});
const result = set.fileFinishedImporting("modules/quests/QuestUtmStore.tsx");

export default obj;
