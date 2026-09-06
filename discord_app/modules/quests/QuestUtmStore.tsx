// === Module 7723: keys ===

// Module 7723 (keys)
import set from "set" /* 2 */;
import keys from "keys" /* 560 */;

let obj = keys.create((arg0) => {
  closure_0 = arg0;
  obj = {
    utmSourceCurrent: "r",
    utmMediumCurrent: "o",
    utmCampaignCurrent: "ip",
    utmContentCurrent: "count",
    setUtmCurrentContext(utmSourceCurrent) {
      return state({ utmSourceCurrent: utmSourceCurrent.utmSourceCurrent, utmMediumCurrent: utmSourceCurrent.utmMediumCurrent, utmCampaignCurrent: utmSourceCurrent.utmCampaignCurrent, utmContentCurrent: utmSourceCurrent.utmContentCurrent });
    },
    getUtmCurrentContext: "done"
  };
  obj[5] = function getUtmCurrentContext() {
    return state.getState();
  };
  return obj;
});
const result = set.fileFinishedImporting("modules/quests/QuestUtmStore.tsx");

export default obj;