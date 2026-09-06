// === Module 12510: useGuildPowerupsNewBadge ===

// Module 12510 (useGuildPowerupsNewBadge)
import DismissibleContentUtils from "DismissibleContentUtils" /* 1945 */;
import useGuildPowerupNewPerkMarketingVersionDefault from "useGuildPowerupNewPerkMarketingVersion" /* 12503 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GuildPowerupsStore from "GuildPowerupsStore" /* 4449 */;

require = fn;
const constants = fn(4450).GuildPowerupNewPerkMarketingVersion;
const ContentDismissActionType = fn(1954).ContentDismissActionType;
let closure_8 = fn(1943).DismissibleContent.GUILD_POWERUP_NEW_PERK_AVAILABLE_BADGE;
const size = fn(2);
let result = size.fileFinishedImporting("modules/premium/powerups/hooks/useGuildPowerupsNewBadge.tsx");

export default function useGuildPowerupsNewBadge(guildId) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  _require = undefined;
  importDefault = undefined;
  closure_129_0 = guildId;
  let obj = require("initialize");
  const items = [GuildPowerupsStore];
  const stateFromStores = obj.useStateFromStores(items, () => GuildPowerupsStore.getStateForGuild(closure_0));
  const tmp4Result = useGuildPowerupNewPerkMarketingVersionDefault(guildId, stateFromStores);
  let num = 0;
  if (tmp4Result >= constants.GUILD_THEME) {
    num = tmp4Result;
  }
  let tmp6 = null;
  if (num > 0) {
    tmp6 = null;
    if (!flag) {
      tmp6 = closure_8;
    }
  }
  const tmp7 = _slicedToArray(require("useSelectedDismissibleContent").useSelectedVersionedDismissibleContent(tmp6, num), 2);
  _require = tmp8;
  importDefault = tmp9;
  const items1 = [tmp7[0] === closure_8, tmp7[1]];
  obj = {
    showNewBadgeOnRow: tmp9,
    dismissNewBadgeIfShown: noop.useCallback(() => {
      let TAKE_ACTION = arg0;
      if (arg0 === undefined) {
        TAKE_ACTION = ContentDismissActionType.TAKE_ACTION;
      }
      if (closure_1) {
        closure_0(TAKE_ACTION);
      }
    }, items1)
  };
  return obj;
};
export const useAutoDismissGuildPowerupsNewBadge = function useAutoDismissGuildPowerupsNewBadge(guildId) {
  _require = guildId;
  closure_129_0 = guildId;
  const items = [GuildPowerupsStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => GuildPowerupsStore.getStateForGuild(closure_0));
  let obj = require("initialize");
  const tmp2Result = num(12503)(guildId, stateFromStores);
  num = 0;
  if (tmp2Result >= constants.GUILD_THEME) {
    num = tmp2Result;
  }
  const items1 = [num, guildId];
  const effect = noop.useEffect(() => {
    if (num > 0) {
      const obj = { dismissAction: ContentDismissActionType.AUTO_DISMISS, guildId };
      const result = obj.markVersionedDismissibleContentAsDismissed(closure_8, tmp, obj);
    }
  }, items1);
};