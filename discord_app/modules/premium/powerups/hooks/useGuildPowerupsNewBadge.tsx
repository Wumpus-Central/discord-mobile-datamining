// discord_app/modules/premium/powerups/hooks/useGuildPowerupsNewBadge.tsx
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import calculateAppliedBoosts from "calculateAppliedBoosts";
import { GuildPowerupNewPerkMarketingVersion as closure_6 } from "BoostedGuildTiers";
import { ContentDismissActionType } from "ContentDismissActionType";
import { initialize } from "../../../../../discord_common/js/packages/flux/index.tsx";
import { useSelectedDismissibleContent } from "../../../dismissible_content/hooks/useSelectedDismissibleContent.tsx";
import { useGuildPowerupNewPerkMarketingVersion } from "useGuildPowerupNewPerkMarketingVersion.tsx";

const require = arg1;
let closure_8 = require("DismissibleContent").DismissibleContent.GUILD_POWERUP_NEW_PERK_AVAILABLE_BADGE;
let result = require("calculateAppliedBoosts").fileFinishedImporting("modules/premium/powerups/hooks/useGuildPowerupsNewBadge.tsx");

export default function useGuildPowerupsNewBadge(arg0) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  let _require;
  let importDefault;
  _require = arg0;
  let obj = _initialize;
  const items = [calculateAppliedBoosts];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_5.getStateForGuild(closure_0));
  const tmp4Result = useGuildPowerupNewPerkMarketingVersion(arg0, stateFromStores);
  let num = 0;
  if (tmp4Result >= constants.GUILD_THEME) {
    num = tmp4Result;
  }
  const tmp = _require;
  const tmp4 = useGuildPowerupNewPerkMarketingVersion;
  let tmp6 = null;
  if (num > 0) {
    tmp6 = null;
    if (!flag) {
      tmp6 = closure_8;
    }
  }
  const tmp7 = callback(_useSelectedDismissibleContent.useSelectedVersionedDismissibleContent(tmp6, num), 2);
  _require = tmp8;
  importDefault = tmp9;
  const items1 = [tmp7[0] === closure_8, tmp7[1]];
  obj = {
    showNewBadgeOnRow: tmp9,
    dismissNewBadgeIfShown: React.useCallback(() => {
      let TAKE_ACTION = arg0;
      if (arg0 === undefined) {
        TAKE_ACTION = outer1_7.TAKE_ACTION;
      }
      if (c1) {
        callback(TAKE_ACTION);
      }
    }, items1)
  };
  return obj;
};
export const useAutoDismissGuildPowerupsNewBadge = function useAutoDismissGuildPowerupsNewBadge(guildId) {
  const _require = guildId;
  const items = [calculateAppliedBoosts];
  const stateFromStores = _initialize.useStateFromStores(items, () => outer1_5.getStateForGuild(closure_0));
  let obj = _initialize;
  const tmp2Result = num(11797)(guildId, stateFromStores);
  num = 0;
  if (tmp2Result >= constants.GUILD_THEME) {
    num = tmp2Result;
  }
  const items1 = [num, guildId];
  const effect = React.useEffect(() => {
    if (num > 0) {
      let obj = guildId(outer1_2[9]);
      obj = { dismissAction: null, guildId: null };
      obj[0] = outer1_7.AUTO_DISMISS;
      obj[1] = guildId;
      const result = obj.markVersionedDismissibleContentAsDismissed(outer1_8, tmp, obj);
    }
  }, items1);
};