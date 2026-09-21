// discord_app/modules/premium/powerups/native/hooks/usePowerupGroupConfig.tsx
import util from "../../../../../intl/index.native.tsx";
import GlobalUtils from "../../../../../utils/GlobalUtils.tsx";
import _modDef2514 from "../../GuildPowerups.messages.js";
import GuildTagUtils from "../../../../guild_tag/GuildTagUtils.tsx";
import _modDef12804 from "../../../../../../discord_assets/assets/powerups/badge-packs/group-static.png.js";
import _modDef12805 from "../../../../../../discord_assets/assets/powerups/badge-packs/group-animated.png.js";
import noop from "../../../../../../_runtime/metro/00019__.js";
import GuildStore from "../../../../../stores/GuildStore.tsx";

const require = globalThis.__r;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/native/hooks/usePowerupGroupConfig.tsx");

export default function usePowerupGroupConfig(arg0, arg1) {
  _require = arg0;
  const group = arg1;
  const items = [GuildStore];
  stateFromStores = require("initialize").useStateFromStores(items, () => {
    const guild = GuildStore.getGuild(closure_0);
    let guildSupportsTagsResult = null != guild;
    if (guildSupportsTagsResult) {
      guildSupportsTagsResult = GuildTagUtils.guildSupportsTags(guild);
    }
    return guildSupportsTagsResult;
  });
  const items1 = [arg1, stateFromStores];
  return noop.useMemo(() => {
    if ("guildTagsBadgePacks" === group.group) {
      const obj2 = {
        title: null,
        description: null,
        image: null,
        disabledReason: null,
        badge: "HermesInternal",
        forceStaticImages: "HermesInternal",
      };
      const intl = util.intl;
      obj2.title = intl.string(_modDef2514.KC9HRW);
      const intl2 = util.intl;
      obj2.description = intl2.string(_modDef2514.GJiSmP);
      const obj3 = { staticUrl: _modDef12804, animatedUrl: _modDef12805 };
      obj2.image = obj3;
      let stringResult;
      if (!stateFromStores) {
        const intl3 = util.intl;
        stringResult = intl3.string(_modDef2514.lvk1Gc);
      }
      obj2.disabledReason = stringResult;
      return obj2;
    } else {
      GlobalUtils.assertNever(tmp.group);
    }
  }, items1);
}
