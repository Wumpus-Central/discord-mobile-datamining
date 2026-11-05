// === Module 14354: usePowerupGroupConfig ===

// Module 14354 (usePowerupGroupConfig)
import util from "util" /* 1113 */;
import GlobalUtils from "GlobalUtils" /* 1380 */;
import _modDef2699 from "module_2699" /* 2699 */;
import GuildTagUtils from "GuildTagUtils" /* 8882 */;
import _modDef14355 from "module_14355" /* 14355 */;
import _modDef14356 from "module_14356" /* 14356 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 5014 */;

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
      obj2.title = intl.string(_modDef2699.KC9HRW);
      const intl2 = util.intl;
      obj2.description = intl2.string(_modDef2699.GJiSmP);
      const obj3 = { staticUrl: _modDef14355, animatedUrl: _modDef14356 };
      obj2.image = obj3;
      let stringResult;
      if (!stateFromStores) {
        const intl3 = util.intl;
        stringResult = intl3.string(_modDef2699.lvk1Gc);
      }
      obj2.disabledReason = stringResult;
      return obj2;
    } else {
      GlobalUtils.assertNever(tmp.group);
    }
  }, items1);
};