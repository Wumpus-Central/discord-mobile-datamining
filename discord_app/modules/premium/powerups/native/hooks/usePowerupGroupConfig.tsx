// === Module 14108: usePowerupGroupConfig ===

// Module 14108 (usePowerupGroupConfig)
import util from "util" /* 1113 */;
import GlobalUtils from "GlobalUtils" /* 1379 */;
import _modDef2570 from "module_2570" /* 2570 */;
import GuildTagUtils from "GuildTagUtils" /* 8736 */;
import _modDef14109 from "module_14109" /* 14109 */;
import _modDef14110 from "module_14110" /* 14110 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 4885 */;

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
      const obj2 = { title: null, description: null, image: null, disabledReason: null, badge: "HermesInternal", forceStaticImages: "no-hide-descendants" };
      const intl = util.intl;
      obj2.title = intl.string(_modDef2570.KC9HRW);
      const intl2 = util.intl;
      obj2.description = intl2.string(_modDef2570.GJiSmP);
      const obj3 = { staticUrl: _modDef14109, animatedUrl: _modDef14110 };
      obj2.image = obj3;
      let stringResult;
      if (!stateFromStores) {
        const intl3 = util.intl;
        stringResult = intl3.string(_modDef2570.lvk1Gc);
      }
      obj2.disabledReason = stringResult;
      return obj2;
    } else {
      GlobalUtils.assertNever(tmp.group);
    }
  }, items1);
};