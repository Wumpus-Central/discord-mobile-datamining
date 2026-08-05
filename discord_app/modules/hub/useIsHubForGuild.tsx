// discord_app/modules/hub/useIsHubForGuild.tsx
import createGuildRecordFromRust from "createGuildRecordFromRust";
import { GuildFeatures } from "ME";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/hub/useIsHubForGuild.tsx");

export default function useIsHubForGuild(arg0) {
  const _require = arg0;
  const items = [createGuildRecordFromRust];
  const items1 = [arg0];
  return _require("../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items, () => {
    if (null == closure_0) {
      return false;
    } else {
      const guild = outer1_2.getGuild(tmp);
      let flag;
      if (guild != null) {
        const features = guild.features;
        flag = features.has(outer1_3.HUB);
      }
      if (flag == null) {
        flag = false;
      }
      return flag;
    }
  }, items1);
};