// === Module 12310: useGuildPowerupsNewBadge ===

// Module 12310 (useGuildPowerupsNewBadge)
import useGuildPowerupNewPerkMarketingVersionDefault from "useGuildPowerupNewPerkMarketingVersion" /* 12303 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import closure_5 from "calculateAppliedBoosts" /* 4364 */;
import { GuildPowerupNewPerkMarketingVersion as closure_6 } from "BoostedGuildTiers" /* 4365 */;
import { ContentDismissActionType } from "ContentDismissActionType" /* 1383 */;

const require = arg1;
let closure_8 = require("DismissibleContent").DismissibleContent.GUILD_POWERUP_NEW_PERK_AVAILABLE_BADGE;
let result = require("set").fileFinishedImporting("modules/premium/powerups/hooks/useGuildPowerupsNewBadge.tsx");

export default function useGuildPowerupsNewBadge(arg0) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  let _require;
  importDefault = undefined;
  _require = arg0;
  let obj = _require(586);
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => closure_1_5.getStateForGuild(closure_0));
  const tmp4Result = useGuildPowerupNewPerkMarketingVersionDefault(arg0, stateFromStores);
  let num = 0;
  if (tmp4Result >= constants.GUILD_THEME) {
    num = tmp4Result;
  }
  const tmp = _require;
  const tmp4 = useGuildPowerupNewPerkMarketingVersionDefault;
  let tmp6 = null;
  if (num > 0) {
    tmp6 = null;
    if (!flag) {
      tmp6 = closure_8;
    }
  }
  const tmp7 = callback(_require(6261).useSelectedVersionedDismissibleContent(tmp6, num), 2);
  _require = tmp8;
  importDefault = tmp9;
  const items1 = [tmp7[0] === closure_8, tmp7[1]];
  obj = {
    showNewBadgeOnRow: tmp9,
    dismissNewBadgeIfShown: React.useCallback(() => {
      let TAKE_ACTION = arg0;
      if (arg0 === undefined) {
        TAKE_ACTION = closure_1_7.TAKE_ACTION;
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
  const stateFromStores = _require(586).useStateFromStores(items, () => closure_1_5.getStateForGuild(closure_0));
  let obj = _require(586);
  const tmp2Result = num(12303)(guildId, stateFromStores);
  num = 0;
  if (tmp2Result >= constants.GUILD_THEME) {
    num = tmp2Result;
  }
  const items1 = [num, guildId];
  const effect = React.useEffect(() => {
    if (num > 0) {
      let obj = guildId(closure_1_2[9]);
      obj = { dismissAction: null, guildId: null };
      obj[0] = closure_1_7.AUTO_DISMISS;
      obj[1] = guildId;
      const result = obj.markVersionedDismissibleContentAsDismissed(closure_1_8, tmp, obj);
    }
  }, items1);
};