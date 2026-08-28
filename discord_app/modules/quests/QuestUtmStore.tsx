// === Module 7415: keys ===

// Module 7415 (keys)
import set from "set" /* 2 */;
import keys from "keys" /* 644 */;

const obj = keys.create((arg0) => {
  closure_0 = arg0;
  return {
    utmSourceCurrent: "r",
    utmMediumCurrent: "accessibilityRole",
    utmCampaignCurrent: "Button",
    utmContentCurrent: "limit",
    setUtmCurrentContext(utmSourceCurrent) {
      return state({ utmSourceCurrent: utmSourceCurrent.utmSourceCurrent, utmMediumCurrent: utmSourceCurrent.utmMediumCurrent, utmCampaignCurrent: utmSourceCurrent.utmCampaignCurrent, utmContentCurrent: utmSourceCurrent.utmContentCurrent });
    },
    getUtmCurrentContext() {
      return state.getState();
    }
  };
});
const result = set.fileFinishedImporting("modules/quests/QuestUtmStore.tsx");

export default obj;