// discord_app/modules/premium/powerups/hooks/useGuildPowerupsNewBadge.tsx
import useGuildPowerupNewPerkMarketingVersionDefault from "useGuildPowerupNewPerkMarketingVersion.tsx";
import closure_3 from "../../../../../_runtime/metro/00032__slicedToArray.js";
import closure_4 from "../../../../../_runtime/00019_noop.js";
import closure_5 from "../GuildPowerupsStore.tsx";
import { GuildPowerupNewPerkMarketingVersion as closure_6 } from "../constants/GuildPowerupsConstants.tsx";
import { ContentDismissActionType } from "../../../dismissible_content/DismissibleContentConstants.tsx";
import { initialize } from "../../../../../discord_common/js/packages/flux/index.tsx";

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
  let obj = initialize;
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
  const tmp7 = callback(require("../../../dismissible_content/hooks/useSelectedDismissibleContent.tsx").useSelectedVersionedDismissibleContent(tmp6, num), 2);
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
  const stateFromStores = require("../../../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items, () => closure_1_5.getStateForGuild(closure_0));
  let obj = initialize;
  const tmp2Result = num(12034)(guildId, stateFromStores);
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