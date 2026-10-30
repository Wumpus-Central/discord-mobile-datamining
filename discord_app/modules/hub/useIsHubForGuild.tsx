// === Module 13881: useIsHubForGuild ===

// Module 13881 (useIsHubForGuild)
import GuildStore from "GuildStore" /* 4880 */;

const require = globalThis.__r;

const require = fn;
const GuildFeatures = fn(1072).GuildFeatures;
const size = fn(2);
const result = size.fileFinishedImporting("modules/hub/useIsHubForGuild.tsx");

export default function useIsHubForGuild(arg0) {
  _require = arg0;
  const items = [GuildStore];
  const items1 = [arg0];
  return require("initialize").useStateFromStores(items, () => {
    if (null == closure_0) {
      return false;
    } else {
      const guild = GuildStore.getGuild(tmp);
      let flag;
      if (guild != null) {
        const features = guild.features;
        flag = features.has(GuildFeatures.HUB);
      }
      if (flag == null) {
        flag = false;
      }
      return flag;
    }
  }, items1);
};