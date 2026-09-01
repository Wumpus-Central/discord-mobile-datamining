// discord_app/modules/content_inventory/utils.tsx
import set from "../../../_runtime/00002_set.js";
import DISCORD_EPOCHDefault from "../../utils/SnowflakeUtils.tsx";
import setDefault from "../../utils/Durations.tsx";
import getSystemLocale from "../../intl/index.native.tsx";
import _mod3718 from "../../../_runtime/metro/03718__.js";
import hooksDefault from "../../../_runtime/04075_hooks.js";
import ContentInventoryEntryType from "../../../discord_common/js/shared/shared-constants/ContentInventoryEntryType.tsx";

function calculateTimestampDurations(end, now) {
  const bound = Math.max(end - now, 0);
  const result = bound / setDefault.Millis.SECOND;
  const obj = { seconds: null, minutes: null, hours: null, days: null };
  const rounded = Math.floor(result);
  obj[0] = rounded % setDefault.Seconds.MINUTE;
  const rounded1 = Math.floor(result / setDefault.Seconds.MINUTE);
  obj[1] = rounded1 % setDefault.Seconds.MINUTE;
  obj[2] = Math.floor(result / setDefault.Seconds.HOUR);
  obj[3] = Math.floor(result / setDefault.Seconds.DAY);
  return obj;
}
function formatActiveTimestamp(entry, now) {
  let end;
  if ("end" in entry) {
    end = entry.end;
  }
  let isCountDown = "isCountDown" in entry;
  if (isCountDown) {
    isCountDown = null != entry.isCountDown;
  }
  if (isCountDown) {
    isCountDown = entry.isCountDown;
  }
  if (isCountDown) {
    if (null != end) {
      if (end > now) {
        let tmp6Result = calculateTimestampDurations(end, now);
      }
      ({ minutes, hours } = tmp6Result);
      let padStartResult = minutes;
      if (hours > 0) {
        const _String = String;
        padStartResult = String(minutes).padStart(2, "0");
        const StringResult = String(minutes);
      }
      const _String2 = String;
      const padStartResult1 = String(tmp6Result.seconds).padStart(2, "0");
      if (hours > 0) {
        const _HermesInternal2 = HermesInternal;
        let combined = "" + hours + ":" + padStartResult + ":" + padStartResult1;
      } else {
        const _HermesInternal = HermesInternal;
        combined = "" + padStartResult + ":" + padStartResult1;
      }
      return combined;
    }
  }
  if ("id" in entry) {
    let start = DISCORD_EPOCHDefault.extractTimestamp(entry.id);
    const obj = DISCORD_EPOCHDefault;
  } else {
    start = entry.start;
  }
  let bound = now;
  if (null != end) {
    bound = now;
    if (!isCountDown) {
      const _Math = Math;
      bound = Math.min(end, now);
    }
  }
  tmp6Result = calculateTimestampDurations(bound, start);
}
function formatTimestampToA11yLabel(hours) {
  hours = hours.hours;
  const items = [];
  ({ minutes, seconds } = hours);
  if (hours > 0) {
    const intl = getSystemLocale.intl;
    const obj = { hours: null };
    obj[0] = hours;
    items.push(intl.formatToPlainString(getSystemLocale.t.xCjYxK, obj));
  }
  const intl2 = getSystemLocale.intl;
  items.push(intl2.formatToPlainString(getSystemLocale.t.iXLF9W, { minutes }));
  const intl3 = getSystemLocale.intl;
  items.push(intl3.formatToPlainString(getSystemLocale.t.geSp4K, { seconds }));
  return items.join(", ");
}
function formatEndedTimestamp(entry, arg1, timestamp, arg3) {
  let obj = arg3;
  if (arg3 === undefined) {
    obj = {};
  }
  let formatSet = obj.formatSet;
  if (formatSet === undefined) {
    formatSet = closure_6;
  }
  const obj2 = hooksDefault(timestamp);
  const tmp3 = hooksDefault;
  const diffResult = obj2.diff(tmp3(DISCORD_EPOCHDefault.extractTimestamp(entry.id)), "s");
  const absolute = Math.abs(diffResult);
  if (absolute < setDefault.Seconds.MINUTE) {
    return formatSet.secondsAgo(diffResult);
  } else if (absolute < tmp(687).Seconds.HOUR) {
    const _Math5 = Math;
    return formatSet.minutesAgo(Math.round(diffResult / tmp(687).Seconds.MINUTE));
  } else if (absolute < 12 * tmp(687).Seconds.HOUR) {
    const _Math4 = Math;
    return formatSet.hoursAgo(Math.round(diffResult / tmp(687).Seconds.HOUR));
  } else if (absolute < 9 * tmp(687).Seconds.DAY) {
    const _Math3 = Math;
    return formatSet.daysAgo(Math.round(diffResult / tmp(687).Seconds.DAY));
  } else if (absolute < 4 * tmp(687).Seconds.WEEK) {
    const _Math2 = Math;
    return formatSet.weeksAgo(Math.round(diffResult / (7 * tmp(687).Seconds.DAY)));
  } else {
    const _Math = Math;
    return formatSet.monthsAgo(Math.round(diffResult / tmp(687).Seconds.DAYS_30));
  }
  const obj3 = DISCORD_EPOCHDefault;
}
let closure_6 = {
  secondsAgo(count) {
    const intl = getSystemLocale.intl;
    return intl.formatToPlainString(getSystemLocale.t.EOrEJl, { count });
  },
  minutesAgo(count) {
    const intl = getSystemLocale.intl;
    return intl.formatToPlainString(getSystemLocale.t.LRNgHp, { count });
  },
  hoursAgo(count) {
    const intl = getSystemLocale.intl;
    return intl.formatToPlainString(getSystemLocale.t.raJpz3, { count });
  },
  daysAgo(count) {
    const intl = getSystemLocale.intl;
    return intl.formatToPlainString(getSystemLocale.t.KkvKhi, { count });
  },
  weeksAgo(count) {
    const intl = getSystemLocale.intl;
    return intl.formatToPlainString(getSystemLocale.t.sDtO6D, { count });
  },
  monthsAgo(count) {
    const intl = getSystemLocale.intl;
    return intl.formatToPlainString(getSystemLocale.t.ITymou, { count });
  }
};
let result = set.fileFinishedImporting("modules/content_inventory/utils.tsx");

export { calculateTimestampDurations };
export const calculateActiveTimestampDurations = function calculateActiveTimestampDurations(end, now) {
  end = undefined;
  if ("end" in end) {
    end = end.end;
  }
  let isCountDown = "isCountDown" in end;
  if (isCountDown) {
    isCountDown = null != end.isCountDown;
  }
  if (isCountDown) {
    isCountDown = end.isCountDown;
  }
  if (isCountDown) {
    if (null != end) {
      if (end > now) {
        return calculateTimestampDurations(end, now);
      }
    }
  }
  if ("id" in end) {
    let start = DISCORD_EPOCHDefault.extractTimestamp(end.id);
    const obj = DISCORD_EPOCHDefault;
  } else {
    start = end.start;
  }
  let bound = now;
  if (null != end) {
    bound = now;
    if (!isCountDown) {
      const _Math = Math;
      bound = Math.min(end, now);
    }
  }
  return calculateTimestampDurations(bound, start);
};
export { formatActiveTimestamp };
export { formatTimestampToA11yLabel };
export const formatActiveA11yTimestamp = function formatActiveA11yTimestamp(end, now) {
  end = undefined;
  if ("end" in end) {
    end = end.end;
  }
  let isCountDown = "isCountDown" in end;
  if (isCountDown) {
    isCountDown = null != end.isCountDown;
  }
  if (isCountDown) {
    isCountDown = end.isCountDown;
  }
  if (isCountDown) {
    if (null != end) {
      if (end > now) {
        let tmp6Result = calculateTimestampDurations(end, now);
      }
      let obj = { hours: null, minutes: null, seconds: null };
      ({ hours: obj2[0], minutes: obj2[1], seconds: obj2[2] } = tmp6Result);
      return formatTimestampToA11yLabel(obj);
    }
  }
  if ("id" in end) {
    obj = DISCORD_EPOCHDefault;
    let start = obj.extractTimestamp(end.id);
  } else {
    start = end.start;
  }
  let bound = now;
  if (null != end) {
    bound = now;
    if (!isCountDown) {
      const _Math = Math;
      bound = Math.min(end, now);
    }
  }
  tmp6Result = calculateTimestampDurations(bound, start);
};
export const A11Y_FORMAT_SET = {
  secondsAgo(count) {
    const intl = getSystemLocale.intl;
    return intl.formatToPlainString(getSystemLocale.t.jfUoRQ, { count });
  },
  minutesAgo(count) {
    const intl = getSystemLocale.intl;
    return intl.formatToPlainString(getSystemLocale.t.DmvRVO, { count });
  },
  hoursAgo(count) {
    const intl = getSystemLocale.intl;
    return intl.formatToPlainString(getSystemLocale.t.AfXezt, { count });
  },
  daysAgo(count) {
    const intl = getSystemLocale.intl;
    return intl.formatToPlainString(getSystemLocale.t.Lru1rV, { count });
  },
  weeksAgo(count) {
    const intl = getSystemLocale.intl;
    return intl.formatToPlainString(getSystemLocale.t["jovF+x"], { count });
  },
  monthsAgo(count) {
    const intl = getSystemLocale.intl;
    return intl.formatToPlainString(getSystemLocale.t.nmSbST, { count });
  }
};
export { formatEndedTimestamp };
export const formatEntryTimestamp = function formatEntryTimestamp(contentInventoryEntry, locale, time, arg3) {
  let timestamp = time;
  if (time === undefined) {
    const _Date = Date;
    timestamp = Date.now();
  }
  let obj = arg3;
  if (arg3 === undefined) {
    obj = {};
  }
  IS_LIVE = IS_LIVE(8045).ContentInventoryTraitType.IS_LIVE;
  const traits = contentInventoryEntry.traits;
  const found = traits.find((type) => type.type === TRENDING_CONTENT);
  let flag;
  if (found != null) {
    flag = found.is_live;
  }
  if (flag == null) {
    flag = false;
  }
  if (flag) {
    let tmp8 = formatActiveTimestamp(contentInventoryEntry, timestamp);
  } else {
    tmp8 = formatEndedTimestamp(contentInventoryEntry, 0, timestamp, obj);
  }
  return tmp8;
};
export const getTrait = function getTrait(contentInventoryEntry, AGGREGATE_COUNT) {
  closure_0 = AGGREGATE_COUNT;
  const traits = contentInventoryEntry.traits;
  return traits.find((type) => type.type === TRENDING_CONTENT);
};
export const isEntryActive = function isEntryActive(entry) {
  IS_LIVE = IS_LIVE(8045).ContentInventoryTraitType.IS_LIVE;
  const traits = entry.traits;
  const found = traits.find((type) => type.type === TRENDING_CONTENT);
  let flag;
  if (found != null) {
    flag = found.is_live;
  }
  if (flag == null) {
    flag = false;
  }
  return flag;
};
export const isEntryNew = function isEntryNew(entry) {
  FIRST_TIME = FIRST_TIME(8045).ContentInventoryTraitType.FIRST_TIME;
  const traits = entry.traits;
  const found = traits.find((type) => type.type === TRENDING_CONTENT);
  let flag;
  if (found != null) {
    flag = found.first_time;
  }
  if (flag == null) {
    flag = false;
  }
  return flag;
};
export const isEntryRecent = function isEntryRecent(id) {
  const obj = DISCORD_EPOCHDefault;
  return DISCORD_EPOCHDefault.age(id.id) / setDefault.Millis.HOUR < 48;
};
export const isEntryExpired = function isEntryExpired(content) {
  let tmp = null != content.expires_at;
  if (tmp) {
    const _Date = Date;
    const date = new Date(content.expires_at);
    const _Date2 = Date;
    const date1 = new Date();
    tmp = date < date1;
  }
  return tmp;
};
export const isEntryLive = function isEntryLive(traits) {
  IS_LIVE = IS_LIVE(8045).ContentInventoryTraitType.IS_LIVE;
  traits = traits.traits;
  const found = traits.find((type) => type.type === TRENDING_CONTENT);
  let flag;
  if (found != null) {
    flag = found.is_live;
  }
  if (flag == null) {
    flag = false;
  }
  if (flag) {
    let tmp2 = null != traits.expires_at;
    if (tmp2) {
      const _Date = Date;
      const date = new Date(traits.expires_at);
      const _Date2 = Date;
      const date1 = new Date();
      tmp2 = date < date1;
    }
    flag = !tmp2;
  }
  return flag;
};
export const getEntryDuration = function getEntryDuration(contentInventoryEntry) {
  DURATION_SECONDS = DURATION_SECONDS(8045).ContentInventoryTraitType.DURATION_SECONDS;
  const traits = contentInventoryEntry.traits;
  const found = traits.find((type) => type.type === TRENDING_CONTENT);
  let duration_seconds;
  if (found != null) {
    duration_seconds = found.duration_seconds;
  }
  return duration_seconds;
};
export const getAggregateRange = function getAggregateRange(traits) {
  AGGREGATE_RANGE = AGGREGATE_RANGE(8045).ContentInventoryTraitType.AGGREGATE_RANGE;
  traits = traits.traits;
  const found = traits.find((type) => type.type === TRENDING_CONTENT);
  let range;
  if (found != null) {
    range = found.range;
  }
  return range;
};
export const isEntryMarathon = function isEntryMarathon(entry) {
  MARATHON = MARATHON(8045).ContentInventoryTraitType.MARATHON;
  const traits = entry.traits;
  const found = traits.find((type) => type.type === TRENDING_CONTENT);
  let marathon;
  if (found != null) {
    marathon = found.marathon;
  }
  return marathon;
};
export const getResurrectedEntryLastPlayTime = function getResurrectedEntryLastPlayTime(entry) {
  RESURRECTED = RESURRECTED(8045).ContentInventoryTraitType.RESURRECTED;
  const traits = entry.traits;
  const found = traits.find((type) => type.type === TRENDING_CONTENT);
  let prop;
  if (found != null) {
    prop = found.resurrected_last_played;
  }
  let date;
  if (null != prop) {
    const _Date = Date;
    date = new Date(found.resurrected_last_played);
  }
  return date;
};
export const getFullResurrectedBadgeText = function getFullResurrectedBadgeText(start) {
  let obj = _mod3718;
  obj = { start, end: new Date() };
  const intervalToDurationResult = obj.intervalToDuration(obj);
  const months = intervalToDurationResult.months;
  let num = 0;
  if (undefined !== months) {
    num = months;
  }
  const weeks = intervalToDurationResult.weeks;
  let num2 = 0;
  if (undefined !== weeks) {
    num2 = weeks;
  }
  const days = intervalToDurationResult.days;
  let num3 = 0;
  if (undefined !== days) {
    num3 = days;
  }
  const intl = tmp(1236).intl;
  obj = { months: num, weeks: null, days: null };
  let num4 = 0;
  if (num <= 0) {
    num4 = num2;
  }
  obj[1] = num4;
  let num5 = 0;
  if (num <= 0) {
    num5 = 0;
    if (num2 <= 0) {
      num5 = num3;
    }
  }
  obj[2] = num5;
  return intl.formatToPlainString(getSystemLocale.t.NXBtjF, obj);
};
export const getEpisodeBadgeText = function getEpisodeBadgeText(large_text) {
  if (null != large_text) {
    if ("" !== large_text) {
      const match = /\w+ (\d+), \w+ (\d+)/.exec(large_text);
      let formatToPlainStringResult = null;
      if (null != match) {
        const intl = getSystemLocale.intl;
        const obj = { seasonNum: null, episodeNum: null };
        obj[0] = match[1];
        obj[1] = match[2];
        formatToPlainStringResult = intl.formatToPlainString(getSystemLocale.t.ijVm6y, obj);
      }
      return formatToPlainStringResult;
    }
  }
  return null;
};
export const getEpisodeBadgeA11yText = function getEpisodeBadgeA11yText(arg0) {
  if (null != arg0) {
    if ("" !== arg0) {
      let obj = /\w+ (\d+), \w+ (\d+)/;
      const match = obj.exec(arg0);
      if (null != match) {
        const intl = getSystemLocale.intl;
        obj = { seasonNum: null, episodeNum: null };
        obj[0] = match[1];
        obj[1] = match[2];
        return intl.formatToPlainString(getSystemLocale.t.zmi5IM, obj);
      }
    }
  }
};
export const getRichGameStateBadgeText = function getRichGameStateBadgeText(state, party) {
  let first;
  if (party != null) {
    const size = party.size;
    if (size != null) {
      first = size[0];
    }
  }
  let tmp2;
  if (party != null) {
    const size2 = party.size;
    if (size2 != null) {
      tmp2 = size2[1];
    }
  }
  if (null != first) {
    if (null != tmp2) {
      if (first > 0) {
        if (tmp2 > 0) {
          const intl2 = getSystemLocale.intl;
          let obj = { count: null, max: null };
          obj[0] = first;
          obj[1] = tmp2;
          let formatToPlainStringResult = intl2.formatToPlainString(getSystemLocale.t.wmUSiy, obj);
        }
        if (null != formatToPlainStringResult) {
          if (null != state) {
            const _HermesInternal = HermesInternal;
            let combined = "" + state + " (" + formatToPlainStringResult + ")";
          }
          return combined;
        }
        combined = state;
        if (state == null) {
          combined = formatToPlainStringResult;
        }
      }
    }
  }
  let tmp3 = null != first;
  if (tmp3) {
    tmp3 = first > 0;
  }
  if (tmp3) {
    const intl = getSystemLocale.intl;
    obj = { count: null };
    obj[0] = first;
    formatToPlainStringResult = intl.formatToPlainString(getSystemLocale.t.UTYMsa, obj);
  }
};
export const isEntryTopGame = function isEntryTopGame(contentInventoryEntry) {
  return contentInventoryEntry.content_type === ContentInventoryEntryType.ContentInventoryEntryType.TOP_GAME;
};
export const getStreakCount = function getStreakCount(entry) {
  STREAK_DAYS = STREAK_DAYS(8045).ContentInventoryTraitType.STREAK_DAYS;
  const traits = entry.traits;
  const found = traits.find((type) => type.type === TRENDING_CONTENT);
  let streak_count_days;
  if (found != null) {
    streak_count_days = found.streak_count_days;
  }
  return streak_count_days;
};
export const isValidStreak = function isValidStreak(traits) {
  STREAK_DAYS = STREAK_DAYS(8045).ContentInventoryTraitType.STREAK_DAYS;
  traits = traits.traits;
  const found = traits.find((type) => type.type === TRENDING_CONTENT);
  let streak_count_days;
  if (found != null) {
    streak_count_days = found.streak_count_days;
  }
  if (null == streak_count_days) {
    return false;
  } else if (streak_count_days < 3) {
    return false;
  } else {
    const _Date = Date;
    const obj = DISCORD_EPOCHDefault;
    const diff = Date.now() - DISCORD_EPOCHDefault.extractTimestamp(traits.id);
    return diff <= 48 * setDefault.Millis.HOUR;
  }
};
export const getMarathonDescription = function getMarathonDescription(entry) {
  DURATION_SECONDS = DURATION_SECONDS(8045).ContentInventoryTraitType.DURATION_SECONDS;
  const traits = entry.traits;
  const found = traits.find((type) => type.type === TRENDING_CONTENT);
  let duration_seconds;
  if (found != null) {
    duration_seconds = found.duration_seconds;
  }
  if (null == duration_seconds) {
    return { text: null, tooltipText: null, a11yText: null };
  } else {
    const _Math = Math;
    const rounded = Math.round(duration_seconds / setDefault.Seconds.HOUR);
    if (rounded <= 0) {
      let obj = { text: null, tooltipText: null, a11yText: null };
    } else {
      obj = { text: null, tooltipText: null, a11yText: null };
      const intl = tmp(1236).intl;
      obj = { hours: null };
      obj[0] = rounded;
      obj[0] = intl.formatToPlainString(tmp(1236).t.vZaMem, obj);
      const intl2 = tmp(1236).intl;
      obj = { hours: null };
      obj[0] = rounded;
      obj[1] = intl2.formatToPlainString(tmp(1236).t.S5F485, obj);
      const intl3 = tmp(1236).intl;
      obj1 = { hours: null };
      obj1[0] = rounded;
      obj[2] = intl3.formatToPlainString(tmp(1236).t["RZY+tX"], obj1);
    }
    return obj;
  }
};
export const getTrendingType = function getTrendingType(entry) {
  TRENDING_CONTENT = TRENDING_CONTENT(8045).ContentInventoryTraitType.TRENDING_CONTENT;
  const traits = entry.traits;
  const found = traits.find((type) => type.type === TRENDING_CONTENT);
  let trending;
  if (found != null) {
    trending = found.trending;
  }
  return trending;
};