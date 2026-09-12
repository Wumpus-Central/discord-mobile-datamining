// discord_app/modules/quests/QuestUtmStore.tsx
import 00560__ from "../../../_runtime/metro/00560__.js";
import size from "../../../_runtime/metro/00002__.js";

const obj = module_560.create((arg0) => {
  const state = arg0;
  return {
    utmSourceCurrent: "r",
    utmMediumCurrent: "ip",
    utmCampaignCurrent: "accessibilityLabel",
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