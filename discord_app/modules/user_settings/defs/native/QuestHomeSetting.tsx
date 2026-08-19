// discord_app/modules/user_settings/defs/native/QuestHomeSetting.tsx
import obj132 from "../../../../../_runtime/00002_obj132.js";
import ME from "../../../../Constants.tsx";
import getSystemLocale from "../../../../intl/index.native.tsx";
import getIsEligibleForQuests from "../../../quests/lib/QuestsEligibility.tsx";
import QuestsIcon from "../../../../design/components/Icon/native/redesign/generated/QuestsIcon.tsx";
import createToggle from "../../../settings/native/renderer/SettingBuilders.tsx";
import { QuestHomeSetting } from "../../../quests/native/QuestHomeSetting.tsx";

let obj = {
  route: ME.UserSettingsSections.QUESTS,
  getComponent() {
    return QuestHomeSetting /* QuestHomeSetting */.default;
  }
};
const route = createToggle.createRoute(obj);
let result = obj132.fileFinishedImporting("modules/user_settings/defs/native/QuestHomeSetting.tsx");

export default route;