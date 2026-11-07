// === Module 7646: markScopedDismissibleContentAsDismissed ===

// Module 7646 (markScopedDismissibleContentAsDismissed)
import DismissibleContentUtils from "DismissibleContentUtils" /* 4974 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 5170 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/dismissible_content/markScopedDismissibleContentAsDismissed.tsx");

export function markScopedDismissibleContentAsDismissed(kind, arg1) {
  kind = kind.kind;
  if ("single_use" === kind) {
    return DismissibleContentUnsafeUtils.UNSAFE_markDismissibleContentAsDismissed(kind.content, arg1);
  } else if ("single_use_guild" === kind) {
    return DismissibleContentUnsafeUtils.UNSAFE_markSingleUseGuildDismissibleContentAsDismissed(kind.content, kind.scope.guildId, arg1);
  } else if ("versioned" === kind) {
    const obj6 = {};
    const merged = Object.assign(arg1);
    obj6.version = kind.scope.version;
    return DismissibleContentUtils.markVersionedDismissibleContentAsDismissed(kind.content, kind.scope.version, obj6);
  } else if ("time_recurring" === kind) {
    return DismissibleContentUtils.markTimeRecurringDismissibleContentAsDismissed(kind.content, arg1);
  } else if ("time_recurring_guild" === kind) {
    return DismissibleContentUnsafeUtils.UNSAFE_markTimeRecurringGuildDismissibleContentAsDismissed(kind.content, kind.scope.guildId, arg1);
  } else {
    if ("snowflake_bound" !== kind) {
      if ("time_recurring_snowflake_bound" !== kind) {
        if ("snowflake_bound_guild" === kind) {
          const obj = DismissibleContentUnsafeUtils;
          return obj.UNSAFE_markSnowflakeBoundGuildDismissibleContentAsDismissed(kind.content, kind.scope.snowflakeId, kind.scope.guildId, arg1);
        }
      }
    }
    return DismissibleContentUtils.markSnowflakeBoundDismissibleContentAsDismissed(kind.content, kind.scope.snowflakeId, arg1);
  }
}