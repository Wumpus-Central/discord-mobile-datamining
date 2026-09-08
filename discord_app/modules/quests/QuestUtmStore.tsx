// === Module 7723: QuestUtmStore ===

// Module 7723 (QuestUtmStore)
import module_560 from "module_560" /* 560 */;
import size from "module_2" /* 2 */;

const obj = module_560.create((arg0) => {
  const state = arg0;
  return {
    utmSourceCurrent: "r",
    utmMediumCurrent: "ip",
    utmCampaignCurrent: "values",
    utmContentCurrent: "isArray",
    setUtmCurrentContext(utmSourceCurrent) {
      return state({ utmSourceCurrent: utmSourceCurrent.utmSourceCurrent, utmMediumCurrent: utmSourceCurrent.utmMediumCurrent, utmCampaignCurrent: utmSourceCurrent.utmCampaignCurrent, utmContentCurrent: utmSourceCurrent.utmContentCurrent });
    },
    getUtmCurrentContext() {
      return state.getState();
    }
  };
});
const result = size.fileFinishedImporting("modules/quests/QuestUtmStore.tsx");

export default obj;