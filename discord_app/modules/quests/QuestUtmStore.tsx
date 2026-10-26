// === Module 7797: QuestUtmStore ===

// Module 7797 (QuestUtmStore)
import module_570 from "module_570" /* 570 */;
import size from "module_2" /* 2 */;

const obj = module_570.create((arg0) => {
  const state = arg0;
  return {
    utmSourceCurrent: "r",
    utmMediumCurrent: "emoji",
    utmCampaignCurrent: "sr",
    utmContentCurrent: "toCharArray$esjava$1",
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