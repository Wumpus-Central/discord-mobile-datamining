// === Module 14392: usePowerupGroupConfig ===

// Module 14392 (usePowerupGroupConfig)
import util from "util" /* 1113 */;
import GlobalUtils from "GlobalUtils" /* 1380 */;
import _modDef2696 from "module_2696" /* 2696 */;
import GuildTagUtils from "GuildTagUtils" /* 8813 */;
import _modDef14393 from "module_14393" /* 14393 */;
import _modDef14394 from "module_14394" /* 14394 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 5013 */;

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
      obj2.title = intl.string(_modDef2696.KC9HRW);
      const intl2 = util.intl;
      obj2.description = intl2.string(_modDef2696.GJiSmP);
      const obj3 = { staticUrl: _modDef14393, animatedUrl: _modDef14394 };
      obj2.image = obj3;
      let stringResult;
      if (!stateFromStores) {
        const intl3 = util.intl;
        stringResult = intl3.string(_modDef2696.lvk1Gc);
      }
      obj2.disabledReason = stringResult;
      return obj2;
    } else {
      GlobalUtils.assertNever(tmp.group);
    }
  }, items1);
};