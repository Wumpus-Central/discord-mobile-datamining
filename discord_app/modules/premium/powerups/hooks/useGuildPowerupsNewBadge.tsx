// === Module 12182: useGuildPowerupsNewBadge ===

// Module 12182 (useGuildPowerupsNewBadge)
import dismissible_content from "dismissible_content" /* 2036 */;
import DismissibleContentUtils from "DismissibleContentUtils" /* 2037 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2048 */;
import GuildPowerupsConstants from "GuildPowerupsConstants" /* 4774 */;
import useGuildPowerupNewPerkMarketingVersionDefault from "useGuildPowerupNewPerkMarketingVersion" /* 12177 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import GuildPowerupsStore from "GuildPowerupsStore" /* 4773 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const constants = GuildPowerupsConstants.GuildPowerupNewPerkMarketingVersion;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
let closure_8 = dismissible_content.DismissibleContent.GUILD_POWERUP_NEW_PERK_AVAILABLE_BADGE;
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let first;
  let tmp6;
  _require = arg0;
  const obj = require("react");
  const cResult = obj.c(3);
  const tmp = _require;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildPowerupsStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function u() {
      return GuildPowerupsStore.getStateForGuild(closure_0);
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
  const tmp8 = useGuildPowerupNewPerkMarketingVersionDefault;
  const tmp8Result = tmp8(arg0, stateFromStores);
  let num4 = 0;
  if (tmp8Result >= constants.GUILD_THEME) {
    num4 = tmp8Result;
  }
  return num4;
}) : ((arg0) => {
  let closure_0;
  _require = arg0;
  const items = [GuildPowerupsStore];
  const obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, () => GuildPowerupsStore.getStateForGuild(closure_0));
  const tmp2 = useGuildPowerupNewPerkMarketingVersionDefault;
  const tmp2Result = tmp2(arg0, stateFromStores);
  let num = 0;
  if (tmp2Result >= constants.GUILD_THEME) {
    num = tmp2Result;
  }
  return num;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  let closure_0;
  const obj = require("react");
  const cResult = obj.c(6);
  const tmp4 = undefined !== arg1 && arg1;
  const tmp5 = closure_9(arg0);
  let tmp7 = null;
  const useSelectedVersionedDismissibleContent = require("useSelectedDismissibleContent").useSelectedVersionedDismissibleContent;
  require("useSelectedDismissibleContent");
  if (tmp5 > 0) {
    tmp7 = null;
    if (!tmp4) {
      tmp7 = closure_8;
    }
  }
  const tmp8 = _slicedToArray(useSelectedVersionedDismissibleContent(tmp7, tmp5), 2);
  _require = tmp9;
  let closure_1 = tmp10;
  if (cResult[0] === tmp8[1]) {
    let tmp11;
    if (cResult[1] === tmp8[0] === closure_8) {
      tmp11 = cResult[2];
    }
    if (cResult[3] === tmp11) {
      let tmp12;
      if (cResult[4] === tmp8[0] === closure_8) {
        tmp12 = cResult[5];
      }
      return tmp12;
    }
    const obj2 = { showNewBadgeOnRow: tmp8[0] === closure_8, dismissNewBadgeIfShown: tmp11 };
    cResult[3] = tmp11;
    cResult[4] = tmp8[0] === closure_8;
    cResult[5] = obj2;
    tmp12 = obj2;
  }
  const fn = function n(arg0) {
    let TAKE_ACTION = arg0;
    if (undefined === arg0) {
      TAKE_ACTION = ContentDismissActionType.TAKE_ACTION;
    }
    if (closure_1) {
      closure_0(TAKE_ACTION);
    }
  };
  cResult[0] = tmp8[1];
  cResult[1] = tmp8[0] === closure_8;
  cResult[2] = fn;
  tmp11 = fn;
}) : ((arg0) => {
  let closure_0;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  _require = undefined;
  let closure_1;
  const tmp = closure_9(arg0);
  let tmp3 = null;
  const useSelectedVersionedDismissibleContent = require("useSelectedDismissibleContent").useSelectedVersionedDismissibleContent;
  require("useSelectedDismissibleContent");
  if (tmp > 0) {
    tmp3 = null;
    if (!flag) {
      tmp3 = closure_8;
    }
  }
  const tmp4 = _slicedToArray(useSelectedVersionedDismissibleContent(tmp3, tmp), 2);
  _require = tmp5;
  closure_1 = tmp6;
  const items = [tmp4[0] === closure_8, tmp4[1]];
  const obj = {
    showNewBadgeOnRow: tmp4[0] === closure_8,
    dismissNewBadgeIfShown: react.useCallback(() => {
      let TAKE_ACTION = arg0;
      if (arg0 === undefined) {
        TAKE_ACTION = ContentDismissActionType.TAKE_ACTION;
      }
      if (closure_1) {
        closure_0(TAKE_ACTION);
      }
    }, items)
  };
  return obj;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  _require = guildId;
  let obj = require("react");
  const cResult = obj.c(4);
  const tmp2 = closure_9(guildId);
  let closure_1 = tmp2;
  if (cResult[0] === tmp2) {
    let tmp3;
    let tmp4;
    if (cResult[1] === guildId) {
      tmp3 = cResult[2];
      tmp4 = cResult[3];
    }
    const effect = react.useEffect(tmp3, tmp4);
  }
  const fn = function o() {
    if (closure_1 > 0) {
      const obj2 = { dismissAction: ContentDismissActionType.AUTO_DISMISS, guildId };
      const obj = DismissibleContentUtils;
      const result = obj.markVersionedDismissibleContentAsDismissed(closure_8, tmp, obj2);
    }
  };
  const items = [tmp2, guildId];
  cResult[0] = tmp2;
  cResult[1] = guildId;
  cResult[2] = fn;
  cResult[3] = items;
  tmp4 = items;
  tmp3 = fn;
}) : ((guildId) => {
  const tmp = closure_9(guildId);
  let closure_1 = tmp;
  const items = [tmp, guildId];
  const effect = react.useEffect(() => {
    if (closure_1 > 0) {
      const obj2 = { dismissAction: ContentDismissActionType.AUTO_DISMISS, guildId };
      const obj = DismissibleContentUtils;
      const result = obj.markVersionedDismissibleContentAsDismissed(closure_8, tmp, obj2);
    }
  }, items);
});
let result = size.fileFinishedImporting("modules/premium/powerups/hooks/useGuildPowerupsNewBadge.tsx");

export default tmp2;
export const useAutoDismissGuildPowerupsNewBadge = tmp3;