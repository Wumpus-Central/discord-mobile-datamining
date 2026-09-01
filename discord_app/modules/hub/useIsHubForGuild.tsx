// discord_app/modules/hub/useIsHubForGuild.tsx
import closure_2 from "../../stores/GuildStore.tsx";
import { GuildFeatures } from "../../Constants.tsx";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/hub/useIsHubForGuild.tsx");

export default function useIsHubForGuild(arg0) {
  const _require = arg0;
  const items = [closure_2];
  const items1 = [arg0];
  return require("../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(
    items,
    () => {
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
    },
    items1,
  );
}
