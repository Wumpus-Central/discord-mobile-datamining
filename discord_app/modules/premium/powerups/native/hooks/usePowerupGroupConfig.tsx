// === Module 12045: usePowerupGroupConfig ===

// Module 12045 (usePowerupGroupConfig)
import util from "util" /* 1115 */;
import GlobalUtils from "GlobalUtils" /* 1370 */;
import _modDef2519 from "module_2519" /* 2519 */;
import GuildTagUtils from "GuildTagUtils" /* 7610 */;
import _modDef12046 from "module_12046" /* 12046 */;
import _modDef12047 from "module_12047" /* 12047 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 2067 */;

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
      const obj2 = { title: null, description: null, image: null, disabledReason: null, badge: "HermesInternal", forceStaticImages: "HermesInternal" };
      const intl = util.intl;
      obj2.title = intl.string(_modDef2519.KC9HRW);
      const intl2 = util.intl;
      obj2.description = intl2.string(_modDef2519.GJiSmP);
      const obj3 = { staticUrl: _modDef12046, animatedUrl: _modDef12047 };
      obj2.image = obj3;
      let stringResult;
      if (!stateFromStores) {
        const intl3 = util.intl;
        stringResult = intl3.string(_modDef2519.lvk1Gc);
      }
      obj2.disabledReason = stringResult;
      return obj2;
    } else {
      GlobalUtils.assertNever(tmp.group);
    }
  }, items1);
};