// === Module 11679: useGuildPowerupsNewBadge ===

// Module 11679 (useGuildPowerupsNewBadge)
import useGuildPowerupNewPerkMarketingVersionDefault from "useGuildPowerupNewPerkMarketingVersion" /* 11672 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import noop from "noop" /* 19 */;
import calculateAppliedBoosts from "calculateAppliedBoosts" /* 4261 */;
import { GuildPowerupNewPerkMarketingVersion as closure_6 } from "BoostedGuildTiers" /* 4262 */;
import { ContentDismissActionType } from "ContentDismissActionType" /* 1388 */;

const require = fn;
let closure_8 = require("DismissibleContent").DismissibleContent.GUILD_POWERUP_NEW_PERK_AVAILABLE_BADGE;
let result = require("obj132").fileFinishedImporting("modules/premium/powerups/hooks/useGuildPowerupsNewBadge.tsx");

export default function useGuildPowerupsNewBadge(arg0) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  importDefault = undefined;
  let _require = arg0;
  let obj = _require(589);
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => closure_1_5.getStateForGuild(closure_0));
  const tmp4Result = useGuildPowerupNewPerkMarketingVersionDefault(arg0, stateFromStores);
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
  const tmp7 = callback(_require(7366).useSelectedVersionedDismissibleContent(tmp6, num), 2);
  _require = tmp8;
  importDefault = tmp9;
  const items1 = [tmp7[0] === closure_8, tmp7[1]];
  obj = {
    showNewBadgeOnRow: tmp9,
    dismissNewBadgeIfShown: React.useCallback(() => {
      let TAKE_ACTION = arg0;
      if (arg0 === undefined) {
        TAKE_ACTION = ContentDismissActionType.TAKE_ACTION;
      }
      if (closure_1) {
        callback(TAKE_ACTION);
      }
    }, items1)
  };
  return obj;
};
export const useAutoDismissGuildPowerupsNewBadge = function useAutoDismissGuildPowerupsNewBadge(guildId) {
  const _require = guildId;
  const items = [closure_5];
  const stateFromStores = _require(589).useStateFromStores(items, () => closure_1_5.getStateForGuild(closure_0));
  let obj = _require(589);
  const tmp2Result = num(11672)(guildId, stateFromStores);
  num = 0;
  if (tmp2Result >= constants.GUILD_THEME) {
    num = tmp2Result;
  }
  const items1 = [num, guildId];
  const effect = React.useEffect(() => {
    if (num > 0) {
      guildId(dependencyMap[9]);
      const obj = { dismissAction: null, guildId: null };
      obj[0] = ContentDismissActionType.AUTO_DISMISS;
      obj[1] = guildId;
      const result = obj.markVersionedDismissibleContentAsDismissed(closure_1_8, tmp, obj);
    }
  }, items1);
};