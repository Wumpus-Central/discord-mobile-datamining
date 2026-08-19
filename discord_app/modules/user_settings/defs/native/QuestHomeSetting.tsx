// === Module 14350: route ===

// Module 14350 (route)
import obj132 from "obj132" /* 2 */;
import ME from "ME" /* 676 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import getIsEligibleForQuests from "getIsEligibleForQuests" /* 10685 */;
import QuestsIcon from "QuestsIcon" /* 14351 */;
import createToggle from "createToggle" /* 10669 */;

let obj = {
  route: ME.UserSettingsSections.QUESTS,
  getComponent() {
    return require(14353) /* QuestHomeSetting */.default;
  }
};
const route = createToggle.createRoute(obj);
let result = obj132.fileFinishedImporting("modules/user_settings/defs/native/QuestHomeSetting.tsx");

export default route;