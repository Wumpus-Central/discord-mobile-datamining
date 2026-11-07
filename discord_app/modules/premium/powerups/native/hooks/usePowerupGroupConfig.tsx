// === Module 14365: usePowerupGroupConfig ===

// Module 14365 (usePowerupGroupConfig)
import util from "util" /* 1113 */;
import GlobalUtils from "GlobalUtils" /* 1380 */;
import _modDef2696 from "module_2696" /* 2696 */;
import GuildTagUtils from "GuildTagUtils" /* 8807 */;
import _modDef14366 from "module_14366" /* 14366 */;
import _modDef14367 from "module_14367" /* 14367 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 5011 */;

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
      const obj2 = { title: null, description: null, image: null, disabledReason: null, badge: "HermesInternal", forceStaticImages: "/assets/.cache/intl/bW9kdWxlcy9jb2xsZWN0aWJsZXMvd2Vi" };
      const intl = util.intl;
      obj2.title = intl.string(_modDef2696.KC9HRW);
      const intl2 = util.intl;
      obj2.description = intl2.string(_modDef2696.GJiSmP);
      const obj3 = { staticUrl: _modDef14366, animatedUrl: _modDef14367 };
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