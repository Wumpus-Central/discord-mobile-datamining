// === Module 14063: usePowerupGroupConfig ===

// Module 14063 (usePowerupGroupConfig)
import util from "util" /* 1113 */;
import GlobalUtils from "GlobalUtils" /* 1255 */;
import _modDef2735 from "module_2735" /* 2735 */;
import GuildTagUtils from "GuildTagUtils" /* 8420 */;
import _modDef14064 from "module_14064" /* 14064 */;
import _modDef14065 from "module_14065" /* 14065 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 5181 */;

const require = globalThis.__r;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/native/hooks/usePowerupGroupConfig.tsx");

export default function usePowerupGroupConfig(arg0, arg1) {
  _require = arg0;
  const group = arg1;
  items = [GuildStore];
  stateFromStores = require("initialize").useStateFromStores(items, () => {
    guild = GuildStore.getGuild(closure_0);
    let guildSupportsTagsResult = null != guild;
    if (guildSupportsTagsResult) {
      guildSupportsTagsResult = GuildTagUtils.guildSupportsTags(guild);
    }
    return guildSupportsTagsResult;
  });
  const items1 = [arg1, stateFromStores];
  return noop.useMemo(() => {
    if ("guildTagsBadgePacks" === group.group) {
      const obj2 = { title: null, description: null, image: null, disabledReason: null, badge: "HermesInternal", forceStaticImages: "HermesInternal" };
      const intl = util.intl;
      obj2.title = intl.string(_modDef2735.KC9HRW);
      const intl2 = util.intl;
      obj2.description = intl2.string(_modDef2735.GJiSmP);
      const obj3 = { staticUrl: _modDef14064, animatedUrl: _modDef14065 };
      obj2.image = obj3;
      let stringResult;
      if (!stateFromStores) {
        const intl3 = util.intl;
        stringResult = intl3.string(_modDef2735.lvk1Gc);
      }
      obj2.disabledReason = stringResult;
      return obj2;
    } else {
      GlobalUtils.assertNever(tmp.group);
    }
  }, items1);
};