// === Module 12549: usePowerupGroupConfig ===

// Module 12549 (usePowerupGroupConfig)
import util from "util" /* 1114 */;
import GlobalUtils from "GlobalUtils" /* 1369 */;
import _modDef2428 from "module_2428" /* 2428 */;
import GuildTagUtils from "GuildTagUtils" /* 8165 */;
import _modDef12550 from "module_12550" /* 12550 */;
import _modDef12551 from "module_12551" /* 12551 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 1979 */;

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
      let obj = { title: null, description: null, image: null, disabledReason: null, badge: "HermesInternal", forceStaticImages: "HermesInternal" };
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
};