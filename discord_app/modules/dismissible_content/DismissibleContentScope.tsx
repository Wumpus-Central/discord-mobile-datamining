// === Module 9563: DismissibleContentScope ===

// Module 9563 (DismissibleContentScope)
import LoggerDefault from "Logger" /* 3 */;
import DismissibleContentTypes from "DismissibleContentTypes" /* 5146 */;

require = fn;
function tagDismissibleContentKind(content) {
  if (obj.isSnowflakeBoundGuildDismissibleContent(content)) {
    const obj2 = { kind: "snowflake_bound_guild", content };
    let obj9 = obj2;
  } else {
    if (tmpResult.isTimeRecurringGuildDismissibleContent(content)) {
      const obj3 = { kind: "time_recurring_guild", content };
      obj9 = obj3;
    } else {
      if (tmpResult7.isSingleUseGuildDismissibleContent(content)) {
        const obj4 = { kind: "single_use_guild", content };
        obj9 = obj4;
      } else {
        if (tmpResult8.isSnowflakeBoundDismissibleContent(content)) {
          if (tmpResult9.isTimeRecurringDismissibleContent(content)) {
            const obj5 = { kind: "time_recurring_snowflake_bound", content };
            obj9 = obj5;
          }
          tmpResult9 = DismissibleContentTypes;
        }
        tmpResult8 = DismissibleContentTypes;
        if (tmpResult10.isVersionedDismissibleContent(content)) {
          const obj6 = { kind: "versioned", content };
          obj9 = obj6;
        } else {
          if (tmpResult11.isTimeRecurringDismissibleContent(content)) {
            const obj7 = { kind: "time_recurring", content };
            obj9 = obj7;
          } else {
            if (tmpResult12.isSnowflakeBoundDismissibleContent(content)) {
              const obj8 = { kind: "snowflake_bound", content };
              obj9 = obj8;
            } else {
              obj9 = { kind: "single_use", content };
            }
            tmpResult12 = DismissibleContentTypes;
          }
          tmpResult11 = DismissibleContentTypes;
        }
        tmpResult10 = DismissibleContentTypes;
      }
      tmpResult7 = DismissibleContentTypes;
    }
    tmpResult = DismissibleContentTypes;
  }
  return obj9;
}
function scopeUncheckedDismissibleContent(arg0) {
  ({ content, scope } = arg0);
  if (scope === undefined) {
    scope = {};
  }
  const tmp = tagDismissibleContentKind(content);
  const kind = tmp.kind;
  if ("single_use" === kind) {
    const obj2 = {};
    const merged = Object.assign(tmp);
    obj2.scope = {};
    return obj2;
  } else if ("single_use_guild" === kind) {
    const obj3 = {};
    const merged1 = Object.assign(tmp);
    const guildId3 = scope.guildId;
    if (null == guildId3) {
      const _Error10 = Error;
      const _HermesInternal10 = HermesInternal;
      const error = new Error("Dismissible content " + content + " is missing scope." + "guildId");
      throw error;
    } else {
      const obj4 = { guildId: guildId3 };
      obj3.scope = obj4;
      return obj3;
    }
  } else if ("versioned" === kind) {
    const obj5 = {};
    const merged2 = Object.assign(tmp);
    const version = scope.version;
    if (null == version) {
      const _Error9 = Error;
      const _HermesInternal9 = HermesInternal;
      const error1 = new Error("Dismissible content " + content + " is missing scope." + "version");
      throw error1;
    } else {
      const obj6 = { version };
      obj5.scope = obj6;
      return obj5;
    }
  } else if ("time_recurring" === kind) {
    const obj7 = {};
    const merged3 = Object.assign(tmp);
    const timeRecurringConfig3 = scope.timeRecurringConfig;
    if (null == timeRecurringConfig3) {
      const _Error8 = Error;
      const _HermesInternal8 = HermesInternal;
      const error2 = new Error("Dismissible content " + content + " is missing scope." + "timeRecurringConfig");
      throw error2;
    } else {
      const obj8 = { timeRecurringConfig: timeRecurringConfig3 };
      obj7.scope = obj8;
      return obj7;
    }
  } else if ("time_recurring_guild" === kind) {
    const obj9 = {};
    const merged4 = Object.assign(tmp);
    const timeRecurringConfig2 = scope.timeRecurringConfig;
    if (null == timeRecurringConfig2) {
      const _Error7 = Error;
      const _HermesInternal7 = HermesInternal;
      const error3 = new Error("Dismissible content " + content + " is missing scope." + "timeRecurringConfig");
      throw error3;
    } else {
      const obj10 = { timeRecurringConfig: timeRecurringConfig2, guildId: null };
      const guildId2 = scope.guildId;
      if (null == guildId2) {
        const _Error6 = Error;
        const _HermesInternal6 = HermesInternal;
        const error4 = new Error("Dismissible content " + content + " is missing scope." + "guildId");
        throw error4;
      } else {
        obj10.guildId = guildId2;
        obj9.scope = obj10;
        return obj9;
      }
    }
  } else if ("snowflake_bound" === kind) {
    const obj11 = {};
    const merged5 = Object.assign(tmp);
    const snowflakeId3 = scope.snowflakeId;
    if (null == snowflakeId3) {
      const _Error5 = Error;
      const _HermesInternal5 = HermesInternal;
      const error5 = new Error("Dismissible content " + content + " is missing scope." + "snowflakeId");
      throw error5;
    } else {
      const obj12 = { snowflakeId: snowflakeId3 };
      obj11.scope = obj12;
      return obj11;
    }
  } else if ("snowflake_bound_guild" === kind) {
    const obj13 = {};
    const merged6 = Object.assign(tmp);
    const snowflakeId2 = scope.snowflakeId;
    if (null == snowflakeId2) {
      const _Error4 = Error;
      const _HermesInternal4 = HermesInternal;
      const error6 = new Error("Dismissible content " + content + " is missing scope." + "snowflakeId");
      throw error6;
    } else {
      const obj14 = { snowflakeId: snowflakeId2, guildId: null };
      const guildId = scope.guildId;
      if (null == guildId) {
        const _Error3 = Error;
        const _HermesInternal3 = HermesInternal;
        const error7 = new Error("Dismissible content " + content + " is missing scope." + "guildId");
        throw error7;
      } else {
        obj14.guildId = guildId;
        obj13.scope = obj14;
        return obj13;
      }
    }
  } else if ("time_recurring_snowflake_bound" === kind) {
    const obj = {};
    const merged7 = Object.assign(tmp);
    const snowflakeId = scope.snowflakeId;
    if (null == snowflakeId) {
      const _Error2 = Error;
      const _HermesInternal2 = HermesInternal;
      const error8 = new Error("Dismissible content " + content + " is missing scope." + "snowflakeId");
      throw error8;
    } else {
      const obj15 = { snowflakeId, timeRecurringConfig: null };
      const timeRecurringConfig = scope.timeRecurringConfig;
      if (null == timeRecurringConfig) {
        const _Error = Error;
        const _HermesInternal = HermesInternal;
        const error9 = new Error("Dismissible content " + content + " is missing scope." + "timeRecurringConfig");
        throw error9;
      } else {
        obj15.timeRecurringConfig = timeRecurringConfig;
        obj.scope = obj15;
        return obj;
      }
    }
  }
}
const logger = new LoggerDefault("DismissibleContentScope");
const size = fn(2);
const result = size.fileFinishedImporting("modules/dismissible_content/DismissibleContentScope.tsx");

export function getDismissibleContentKind(content) {
  return tagDismissibleContentKind(content).kind;
}
export function isGuildScopedDismissibleContent(found2) {
  let tmp = "single_use_guild" === found2.kind;
  if (!tmp) {
    tmp = "time_recurring_guild" === found2.kind;
  }
  if (!tmp) {
    tmp = "snowflake_bound_guild" === found2.kind;
  }
  return tmp;
}
export function isRecurringScopedDismissibleContent(kind) {
  let tmp = "versioned" === kind.kind;
  if (!tmp) {
    tmp = "time_recurring" === kind.kind;
  }
  if (!tmp) {
    tmp = "snowflake_bound" === kind.kind;
  }
  if (!tmp) {
    tmp = "time_recurring_snowflake_bound" === kind.kind;
  }
  return tmp;
}
export function scopeDismissibleContent(arg0) {
  return scopeUncheckedDismissibleContent(arg0);
}
export function scopeDismissibleContentEntry(content) {
  try {
    let tmp3 = content;
    if (typeof content !== "object") {
      const obj = { content };
      tmp3 = obj;
    }
    return scopeUncheckedDismissibleContent(tmp3);
  } catch (tmp4) {
    logger.error("Dropped a dismissible content entry", tmp4);
    return null;
  }
}
export function getDismissibleContentShowing(candidate) {
  const kind = candidate.kind;
  if ("single_use" !== kind) {
    if ("time_recurring" !== kind) {
      if ("single_use_guild" !== kind) {
        if ("time_recurring_guild" !== kind) {
          if ("versioned" === kind) {
            const obj2 = { version: candidate.scope.version };
            return obj2;
          } else {
            if ("snowflake_bound" !== kind) {
              if ("time_recurring_snowflake_bound" !== kind) {
                if ("snowflake_bound_guild" === kind) {
                  const obj = { snowflakeId: candidate.scope.snowflakeId, guildId: candidate.scope.guildId };
                  return obj;
                }
              }
            }
            const obj3 = { snowflakeId: candidate.scope.snowflakeId };
            return obj3;
          }
        }
      }
      const obj4 = { guildId: candidate.scope.guildId };
      return obj4;
    }
  }
  return {};
}
export function getDismissibleContentShowingKey(kind) {
  kind = kind.kind;
  if ("single_use" !== kind) {
    if ("time_recurring" !== kind) {
      if ("single_use_guild" !== kind) {
        if ("time_recurring_guild" !== kind) {
          if ("versioned" === kind) {
            const obj2 = { version: kind.scope.version };
            let obj = obj2;
          } else {
            if ("snowflake_bound" !== kind) {
              if ("time_recurring_snowflake_bound" !== kind) {
                if ("snowflake_bound_guild" === kind) {
                  const obj3 = { snowflakeId: kind.scope.snowflakeId, guildId: kind.scope.guildId };
                  obj = obj3;
                }
              }
            }
            const obj4 = { snowflakeId: kind.scope.snowflakeId };
            obj = obj4;
          }
        }
      }
      const obj5 = { guildId: kind.scope.guildId };
      obj = obj5;
    }
    ({ version, snowflakeId, guildId } = obj);
    const _String = String;
    const StringResult = String(kind.content);
    let sum = StringResult;
    if (null != version) {
      const _HermesInternal = HermesInternal;
      sum = StringResult + ":v" + version;
    }
    let sum1 = sum;
    if (null != snowflakeId) {
      const _HermesInternal2 = HermesInternal;
      sum1 = sum + ":s" + snowflakeId;
    }
    let sum2 = sum1;
    if (null != guildId) {
      const _HermesInternal3 = HermesInternal;
      sum2 = sum1 + ":g" + guildId;
    }
    return sum2;
  }
  obj = {};
}