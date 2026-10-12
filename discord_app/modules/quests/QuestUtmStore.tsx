// === Module 7412: QuestUtmStore ===

// Module 7412 (QuestUtmStore)
import module_570 from "module_570" /* 570 */;
import size from "module_2" /* 2 */;

let obj = module_570.create((arg0) => {
  const state = arg0;
  obj = {
    utmSourceCurrent: "r",
    utmMediumCurrent: "apply",
    utmCampaignCurrent: "exports",
    utmContentCurrent: "Symbol",
    setUtmCurrentContext(utmSourceCurrent) {
      return state({ utmSourceCurrent: utmSourceCurrent.utmSourceCurrent, utmMediumCurrent: utmSourceCurrent.utmMediumCurrent, utmCampaignCurrent: utmSourceCurrent.utmCampaignCurrent, utmContentCurrent: utmSourceCurrent.utmContentCurrent });
    },
    getUtmCurrentContext() {
      return state.getState();
    }
  };
  return obj;
});
const result = size.fileFinishedImporting("modules/quests/QuestUtmStore.tsx");

export default obj;