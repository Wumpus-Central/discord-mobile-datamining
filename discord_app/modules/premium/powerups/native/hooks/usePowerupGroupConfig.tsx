// === Module 13487: usePowerupGroupConfig ===

// Module 13487 (usePowerupGroupConfig)
import util from "util" /* 1112 */;
import GlobalUtils from "GlobalUtils" /* 1254 */;
import _modDef2878 from "module_2878" /* 2878 */;
import GuildTagUtils from "GuildTagUtils" /* 8536 */;
import _modDef13488 from "module_13488" /* 13488 */;
import _modDef13489 from "module_13489" /* 13489 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 4883 */;

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
      const obj2 = { title: null, description: null, image: null, disabledReason: null, badge: "HermesInternal", forceStaticImages: "no-hide-descendants" };
      const intl = util.intl;
      obj2.title = intl.string(_modDef2878.KC9HRW);
      const intl2 = util.intl;
      obj2.description = intl2.string(_modDef2878.GJiSmP);
      const obj3 = { staticUrl: _modDef13488, animatedUrl: _modDef13489 };
      obj2.image = obj3;
      let stringResult;
      if (!stateFromStores) {
        const intl3 = util.intl;
        stringResult = intl3.string(_modDef2878.lvk1Gc);
      }
      obj2.disabledReason = stringResult;
      return obj2;
    } else {
      GlobalUtils.assertNever(tmp.group);
    }
  }, items1);
};