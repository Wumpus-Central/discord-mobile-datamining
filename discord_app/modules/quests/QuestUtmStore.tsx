// discord_app/modules/quests/QuestUtmStore.tsx
import 00570__ from "../../../_runtime/metro/00570__.js";
import size from "../../../_runtime/metro/00002__.js";

const obj = module_570.create((arg0) => {
  state = arg0;
  return {
    utmSourceCurrent: "r",
    utmMediumCurrent: "duration",
    utmCampaignCurrent: "code",
    utmContentCurrent: "Array",
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