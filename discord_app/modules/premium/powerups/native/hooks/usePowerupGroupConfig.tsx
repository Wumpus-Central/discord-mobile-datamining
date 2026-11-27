// === Module 13547: usePowerupGroupConfig ===

// Module 13547 (usePowerupGroupConfig)
import util from "util" /* 1112 */;
import GlobalUtils from "GlobalUtils" /* 1255 */;
import _modDef2879 from "module_2879" /* 2879 */;
import GuildTagUtils from "GuildTagUtils" /* 8579 */;
import _modDef13548 from "module_13548" /* 13548 */;
import _modDef13549 from "module_13549" /* 13549 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 4914 */;

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
      obj2.title = intl.string(_modDef2879.KC9HRW);
      const intl2 = util.intl;
      obj2.description = intl2.string(_modDef2879.GJiSmP);
      const obj3 = { staticUrl: _modDef13548, animatedUrl: _modDef13549 };
      obj2.image = obj3;
      let stringResult;
      if (!stateFromStores) {
        const intl3 = util.intl;
        stringResult = intl3.string(_modDef2879.lvk1Gc);
      }
      obj2.disabledReason = stringResult;
      return obj2;
    } else {
      GlobalUtils.assertNever(tmp.group);
    }
  }, items1);
};