// === Module 7715: DismissibleContentAvailability ===

// Module 7715 (DismissibleContentAvailability)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import Uint8ArrayUtils from "Uint8ArrayUtils" /* 4975 */;
import DismissibleContentUtils from "DismissibleContentUtils" /* 4977 */;
import NewUserDismissibleContentRegistry from "NewUserDismissibleContentRegistry" /* 5195 */;
import DismissibleContentScope from "DismissibleContentScope" /* 7714 */;
import size from "module_2" /* 2 */;

function canShowTimeRecurringDismissibleContent(lastDismissedAtMs, numTimesDismissed, cooldownDurationMs, arg3) {
  let tmp;
  if (null != lastDismissedAtMs) {
    const _Number = Number;
    const _Number2 = Number;
    let NumberResult;
    if (!Number.isNaN(Number(lastDismissedAtMs))) {
      const _Number3 = Number;
      NumberResult = Number(lastDismissedAtMs);
    }
    tmp = NumberResult;
  }
  let num = 0;
  if (undefined !== tmp) {
    num = tmp + cooldownDurationMs.cooldownDurationMs;
  }
  const timestamp = Date.now();
  let tmp5 = null == cooldownDurationMs.showAfterTimestamp;
  if (!tmp5) {
    let tmp6 = timestamp >= cooldownDurationMs.showAfterTimestamp;
    if (tmp6) {
      let num2 = tmp;
      if (tmp == null) {
        num2 = 0;
      }
      tmp6 = num2 <= cooldownDurationMs.showAfterTimestamp;
    }
    tmp5 = tmp6;
  }
  let tmp7 = null == cooldownDurationMs.numTimesToRecur || 0 === cooldownDurationMs.numTimesToRecur;
  if (!tmp7) {
    tmp7 = null == numTimesDismissed;
  }
  if (!tmp7) {
    tmp7 = numTimesDismissed < cooldownDurationMs.numTimesToRecur;
  }
  let tmp8 = arg3;
  if (!arg3) {
    tmp8 = null != tmp && null != numTimesDismissed;
    const tmp9 = null != tmp && null != numTimesDismissed;
  }
  if (tmp8) {
    tmp8 = tmp5;
  }
  if (tmp8) {
    tmp8 = null == tmp || timestamp >= num;
    const tmp10 = null == tmp || timestamp >= num;
  }
  if (tmp8) {
    tmp8 = tmp7;
  }
  return tmp8;
}
let result = size.fileFinishedImporting("modules/dismissible_content/DismissibleContentAvailability.tsx");

export function canShowScopedDismissibleContent(scope, arg1, arg2) {
  ({ dismissedContents, recurringStates, guildStates } = arg1);
  if (obj.isGuildScopedDismissibleContent(scope)) {
    value = undefined;
    if (guildStates != null) {
      value = guildStates.get(scope.scope.guildId);
    }
  }
  const kind = scope.kind;
  let tmp6 = arg2;
  if ("single_use" === kind) {
    if (null != dismissedContents) {
      tmp6 = !Uint8ArrayUtils.hasBit(dismissedContents, tmp43);
      const tmp2Result = Uint8ArrayUtils;
    }
    return tmp6;
  } else if ("single_use_guild" === kind) {
    const content = scope.content;
    let tmp41 = tmp6;
    if (null != tmp4) {
      let tmp42 = null == tmp4[content];
      if (!tmp42) {
        tmp42 = false === tmp4[content].dismissed;
      }
      tmp41 = tmp42;
    }
    return tmp41;
  } else if ("versioned" === kind) {
    const result = NewUserDismissibleContentRegistry.disableNewUserDismissibleContent(scope.content);
    let tmp38 = !result;
    if (!result) {
      let lastDismissedVersion;
      if (tmp != null) {
        lastDismissedVersion = tmp.lastDismissedVersion;
      }
      let tmp40 = tmp6;
      if (null != lastDismissedVersion) {
        tmp40 = lastDismissedVersion < scope.scope.version;
      }
      tmp38 = tmp40;
    }
    return tmp38;
  } else if ("time_recurring" === kind) {
    const result1 = NewUserDismissibleContentRegistry.disableNewUserDismissibleContent(scope.content);
    let tmp31Result = !result1;
    if (!result1) {
      let lastDismissedAtMs;
      if (tmp != null) {
        lastDismissedAtMs = tmp.lastDismissedAtMs;
      }
      let numTimesDismissed;
      if (tmp != null) {
        numTimesDismissed = tmp.numTimesDismissed;
      }
      tmp31Result = canShowTimeRecurringDismissibleContent(lastDismissedAtMs, numTimesDismissed, scope.scope.timeRecurringConfig, tmp6);
    }
    return tmp31Result;
  } else if ("time_recurring_guild" === kind) {
    const result2 = NewUserDismissibleContentRegistry.disableNewUserDismissibleContent(scope.content);
    let tmp23Result = !result2;
    if (!result2) {
      let lastDismissedAtMs1;
      if (tmp20 != null) {
        lastDismissedAtMs1 = tmp20.lastDismissedAtMs;
      }
      let numTimesDismissed1;
      if (tmp20 != null) {
        numTimesDismissed1 = tmp20.numTimesDismissed;
      }
      tmp23Result = canShowTimeRecurringDismissibleContent(lastDismissedAtMs1, numTimesDismissed1, scope.scope.timeRecurringConfig, tmp6);
    }
    return tmp23Result;
  } else if ("snowflake_bound" === kind) {
    const result3 = NewUserDismissibleContentRegistry.disableNewUserDismissibleContent(scope.content);
    let tmp15 = !result3;
    if (!result3) {
      let prop;
      if (tmp != null) {
        prop = tmp.lastDismissedObjectId;
      }
      let tmp18 = tmp6;
      if (null != prop) {
        tmp18 = 1 === SnowflakeUtilsDefault.compare(tmp17, prop);
      }
      tmp15 = tmp18;
    }
    return tmp15;
  } else if ("snowflake_bound_guild" === kind) {
    const result4 = NewUserDismissibleContentRegistry.disableNewUserDismissibleContent(scope.content);
    let tmp8 = !result4;
    if (!result4) {
      let prop1;
      if (tmp4 != null) {
        if (tmp4[scope.content] != null) {
          prop1 = tmp10.lastDismissedObjectId;
        }
      }
      let tmp12 = tmp6;
      if (null != prop1) {
        tmp12 = 1 === SnowflakeUtilsDefault.compare(tmp11, prop1);
      }
      tmp8 = tmp12;
    }
    return tmp8;
  } else if ("time_recurring_snowflake_bound" === kind) {
    return !DismissibleContentUtils.isTimeRecurringSnowflakeBoundDismissibleContentDismissed(scope.content, scope.scope.snowflakeId, scope.scope.timeRecurringConfig);
  }
  obj = DismissibleContentScope;
}