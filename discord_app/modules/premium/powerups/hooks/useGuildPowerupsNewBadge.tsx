// === Module 12167: useGuildPowerupsNewBadge ===

// Module 12167 (useGuildPowerupsNewBadge)
import DismissibleContentUtils from "DismissibleContentUtils" /* 2038 */;
import useGuildPowerupNewPerkMarketingVersionDefault from "useGuildPowerupNewPerkMarketingVersion" /* 12162 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GuildPowerupsStore from "GuildPowerupsStore" /* 4767 */;

const require = globalThis.__r;

require = fn;
const constants = fn(4768).GuildPowerupNewPerkMarketingVersion;
const ContentDismissActionType = fn(2048).ContentDismissActionType;
let closure_8 = fn(2036).DismissibleContent.GUILD_POWERUP_NEW_PERK_AVAILABLE_BADGE;
let ReactCompilerGating = fn(558);
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  _require = arg0;
  const cResult = require("c").c(3);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildPowerupsStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function u() {
      return GuildPowerupsStore.getStateForGuild(closure_0);
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const obj = require("c");
  const stateFromStores = require("initialize").useStateFromStores(first, tmp6);
  const tmpResult = require("initialize");
  const tmp8Result = useGuildPowerupNewPerkMarketingVersionDefault(arg0, stateFromStores);
  let num4 = 0;
  if (tmp8Result >= constants.GUILD_THEME) {
    num4 = tmp8Result;
  }
  return num4;
}) : ((arg0) => {
  _require = arg0;
  const items = [GuildPowerupsStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => GuildPowerupsStore.getStateForGuild(closure_0));
  const obj = require("initialize");
  const tmp2Result = useGuildPowerupNewPerkMarketingVersionDefault(arg0, stateFromStores);
  let num = 0;
  if (tmp2Result >= constants.GUILD_THEME) {
    num = tmp2Result;
  }
  return num;
});
fn(558);
ReactCompilerGating = fn(558);
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  const cResult = require("c").c(6);
  const tmp5 = closure_9(arg0);
  const obj = require("c");
  const tmp4 = undefined !== arg1 && arg1;
  let tmp6 = null;
  if (tmp5 > 0) {
    tmp6 = null;
    if (!tmp4) {
      tmp6 = closure_8;
    }
  }
  const tmp7 = _slicedToArray(require("useSelectedDismissibleContent").useSelectedVersionedDismissibleContent(tmp6, tmp5), 2);
  _require = tmp8;
  closure_1 = tmp9;
  if (cResult[0] === tmp7[1]) {
    if (cResult[1] === tmp9) {
      let tmp10 = cResult[2];
    }
    if (cResult[3] === tmp10) {
      if (cResult[4] === tmp9) {
        let tmp11 = cResult[5];
      }
      return tmp11;
    }
    const obj2 = { showNewBadgeOnRow: tmp9, dismissNewBadgeIfShown: tmp10 };
    cResult[3] = tmp10;
    cResult[4] = tmp9;
    cResult[5] = obj2;
    tmp11 = obj2;
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
  cResult[0] = tmp7[1];
  cResult[1] = tmp7[0] === closure_8;
  cResult[2] = fn;
  tmp10 = fn;
  const tmpResult = require("useSelectedDismissibleContent");
}) : ((arg0) => {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  _require = undefined;
  closure_1 = undefined;
  const tmp = closure_9(arg0);
  let tmp2 = null;
  if (tmp > 0) {
    tmp2 = null;
    if (!flag) {
      tmp2 = closure_8;
    }
  }
  const tmp3 = _slicedToArray(require("useSelectedDismissibleContent").useSelectedVersionedDismissibleContent(tmp2, tmp), 2);
  _require = tmp4;
  closure_1 = tmp5;
  const items = [tmp3[0] === closure_8, tmp3[1]];
  const obj = require("useSelectedDismissibleContent");
  return {
    showNewBadgeOnRow: tmp3[0] === closure_8,
    dismissNewBadgeIfShown: noop.useCallback(() => {
      let TAKE_ACTION = arg0;
      if (arg0 === undefined) {
        TAKE_ACTION = ContentDismissActionType.TAKE_ACTION;
      }
      if (closure_1) {
        closure_0(TAKE_ACTION);
      }
    }, items)
  };
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/premium/powerups/hooks/useGuildPowerupsNewBadge.tsx");

export default tmp2;
export const useAutoDismissGuildPowerupsNewBadge = ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  _require = guildId;
  const cResult = require("c").c(4);
  const tmp2 = closure_9(guildId);
  closure_1 = tmp2;
  if (cResult[0] === tmp2) {
    if (cResult[1] === guildId) {
      let tmp3 = cResult[2];
      let tmp4 = cResult[3];
    }
    const effect = noop.useEffect(tmp3, tmp4);
  }
  const fn = function o() {
    if (closure_1 > 0) {
      const obj2 = { dismissAction: ContentDismissActionType.AUTO_DISMISS, guildId };
      const result = DismissibleContentUtils.markVersionedDismissibleContentAsDismissed(closure_8, tmp, obj2);
    }
  };
  const items = [tmp2, guildId];
  cResult[0] = tmp2;
  cResult[1] = guildId;
  cResult[2] = fn;
  cResult[3] = items;
  tmp4 = items;
  tmp3 = fn;
  let obj = require("c");
}) : ((guildId) => {
  const tmp = closure_9(guildId);
  closure_1 = tmp;
  const items = [tmp, guildId];
  const effect = noop.useEffect(() => {
    if (closure_1 > 0) {
      const obj2 = { dismissAction: ContentDismissActionType.AUTO_DISMISS, guildId };
      const result = DismissibleContentUtils.markVersionedDismissibleContentAsDismissed(closure_8, tmp, obj2);
    }
  }, items);
});