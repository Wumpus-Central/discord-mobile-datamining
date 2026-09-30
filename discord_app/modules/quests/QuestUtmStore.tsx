// === Module 7331: QuestUtmStore ===

// Module 7331 (QuestUtmStore)
import module_560 from "module_560" /* 560 */;
import size from "module_2" /* 2 */;

const obj = module_560.create((arg0) => {
  const state = arg0;
  return {
    utmSourceCurrent: "r",
    utmMediumCurrent: "WireType",
    utmCampaignCurrent: "body",
    utmContentCurrent: "__packager_asset",
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