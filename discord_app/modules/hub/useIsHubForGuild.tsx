// === Module 11942: useIsHubForGuild ===

// Module 11942 (useIsHubForGuild)
import closure_2 from "createGuildRecordFromRust" /* 1910 */;
import { GuildFeatures } from "ME" /* 676 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/hub/useIsHubForGuild.tsx");

export default function useIsHubForGuild(arg0) {
  const _require = arg0;
  const items = [closure_2];
  const items1 = [arg0];
  return _require(589).useStateFromStores(items, () => {
    if (null == closure_0) {
      return false;
    } else {
      const guild = closure_1_2.getGuild(tmp);
      let flag;
      if (guild != null) {
        const features = guild.features;
        flag = features.has(closure_1_3.HUB);
      }
      if (flag == null) {
        flag = false;
      }
      return flag;
    }
  }, items1);
};