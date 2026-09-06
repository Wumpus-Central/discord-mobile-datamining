// discord_app/modules/premium/powerups/native/hooks/usePowerupGroupConfig.tsx
import util from "../../../../../intl/index.native.tsx";
import GlobalUtils from "../../../../../utils/GlobalUtils.tsx";
import _modDef2428 from "../../GuildPowerups.messages.js";
import GuildTagUtils from "../../../../guild_tag/GuildTagUtils.tsx";
import _modDef12550 from "../../../../../../discord_assets/assets/powerups/badge-packs/group-static.png.js";
import _modDef12551 from "../../../../../../discord_assets/assets/powerups/badge-packs/group-animated.png.js";
import noop from "../../../../../../_runtime/metro/00019__.js";
import GuildStore from "../../../../../stores/GuildStore.tsx";

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
      let obj = {
        title: null,
        description: null,
        image: null,
        disabledReason: null,
        badge: "HermesInternal",
        forceStaticImages: "HermesInternal",
      };
      const intl = util.intl;
      obj.title = intl.string(_modDef2428.KC9HRW);
      const intl2 = util.intl;
      obj.description = intl2.string(_modDef2428.GJiSmP);
      obj = { staticUrl: _modDef12550, animatedUrl: _modDef12551 };
      obj.image = obj;
      let stringResult;
      if (!stateFromStores) {
        const intl3 = util.intl;
        stringResult = intl3.string(_modDef2428.lvk1Gc);
      }
      obj.disabledReason = stringResult;
      return obj;
    } else {
      obj = GlobalUtils;
      obj.assertNever(tmp.group);
    }
  }, items1);
}
