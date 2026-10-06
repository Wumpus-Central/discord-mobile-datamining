// discord_app/modules/content_inventory/utils.tsx
import SnowflakeUtilsDefault from "../../utils/SnowflakeUtils.tsx";
import DurationsDefault from "../../utils/Durations.tsx";
import intl4 from "../../intl/index.native.tsx";
import _mod4110 from "../../../_runtime/metro/04110__.js";
import _modDef4467 from "../../../_runtime/metro/04467__.js";
import ContentInventoryEntryType from "../../../discord_common/js/shared/shared-constants/ContentInventoryEntryType.tsx";
import ContentInventoryTraitType from "../../../discord_common/js/shared/shared-constants/ContentInventoryTraitType.tsx";
import size_mod from "../../../_runtime/metro/00002__.js";

function calculateTimestampDurations(end, now) {
  let rounded;
  let rounded1;
  const bound = Math.max(end - now, 0);
  const result = bound / DurationsDefault.Millis.SECOND;
  const time = {
    seconds: rounded % DurationsDefault.Seconds.MINUTE,
    minutes: rounded1 % DurationsDefault.Seconds.MINUTE,
    hours: Math.floor(result / DurationsDefault.Seconds.HOUR),
    days: Math.floor(result / DurationsDefault.Seconds.DAY),
  };
  rounded = Math.floor(result);
  rounded1 = Math.floor(result / DurationsDefault.Seconds.MINUTE);
  return time;
}
function formatActiveTimestamp(entry, now) {
  let hours;
  let minutes;
  let start;
  let end;
  if ("end" in entry) {
    end = entry.end;
  }
  const isCountDown = "isCountDown" in entry && null != entry.isCountDown && entry.isCountDown;
  if (isCountDown) {
    if (null != end) {
      let tmp6Result;
      let combined;
      if (end > now) {
        tmp6Result = calculateTimestampDurations(end, now);
      }
      ({ minutes, hours } = tmp6Result);
      let padStartResult = minutes;
      const seconds = tmp6Result.seconds;
      if (hours > 0) {
        const _String = String;
        const StringResult = String(minutes);
        padStartResult = StringResult.padStart(2, "0");
      }
      const _String2 = String;
      const StringResult1 = String(seconds);
      const padStartResult1 = StringResult1.padStart(2, "0");
      if (hours > 0) {
        const _HermesInternal2 = HermesInternal;
        combined = "" + hours + ":" + padStartResult + ":" + padStartResult1;
      } else {
        const _HermesInternal = HermesInternal;
        combined = "" + padStartResult + ":" + padStartResult1;
      }
      return combined;
    }
  }
  if ("id" in entry) {
    const obj = SnowflakeUtilsDefault;
    start = obj.extractTimestamp(entry.id);
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
function formatTimestampToA11yLabel(time) {
  let minutes;
  let seconds;
  const hours = time.hours;
  const items = [];
  ({ minutes, seconds } = time);
  if (hours > 0) {
    const push = items.push;
    const intl = intl4.intl;
    const obj = { hours };
    push(intl.formatToPlainString(intl4.t.xCjYxK, obj));
  }
  const push2 = items.push;
  const intl2 = intl4.intl;
  push2(intl2.formatToPlainString(intl4.t.iXLF9W, { minutes }));
  const push3 = items.push;
  const intl3 = intl4.intl;
  push3(intl3.formatToPlainString(intl4.t.geSp4K, { seconds }));
  return items.join(", ");
}
function formatEndedTimestamp(entry, stateFromStores, timestamp, arg3) {
  let obj = arg3;
  if (arg3 === undefined) {
    obj = {};
  }
  let formatSet = obj.formatSet;
  if (formatSet === undefined) {
    formatSet = closure_6;
  }
  const obj2 = _modDef4467(timestamp);
  const tmp3 = _modDef4467;
  const obj3 = SnowflakeUtilsDefault;
  const diffResult = obj2.diff(tmp3(obj3.extractTimestamp(entry.id)), "s");
  const absolute = Math.abs(diffResult);
  if (absolute < DurationsDefault.Seconds.MINUTE) {
    return formatSet.secondsAgo(diffResult);
  } else if (absolute < DurationsDefault.Seconds.HOUR) {
    const _Math5 = Math;
    return formatSet.minutesAgo(Math.round(diffResult / DurationsDefault.Seconds.MINUTE));
  } else if (absolute < 12 * DurationsDefault.Seconds.HOUR) {
    const _Math4 = Math;
    return formatSet.hoursAgo(Math.round(diffResult / DurationsDefault.Seconds.HOUR));
  } else if (absolute < 9 * DurationsDefault.Seconds.DAY) {
    const _Math3 = Math;
    return formatSet.daysAgo(Math.round(diffResult / DurationsDefault.Seconds.DAY));
  } else if (absolute < 4 * DurationsDefault.Seconds.WEEK) {
    const _Math2 = Math;
    return formatSet.weeksAgo(Math.round(diffResult / (7 * DurationsDefault.Seconds.DAY)));
  } else {
    const _Math = Math;
    return formatSet.monthsAgo(Math.round(diffResult / DurationsDefault.Seconds.DAYS_30));
  }
}
let closure_6 = {
  secondsAgo(count) {
    const intl = intl4.intl;
    const obj = { count };
    return intl.formatToPlainString(intl4.t.EOrEJl, obj);
  },
  minutesAgo(count) {
    const intl = intl4.intl;
    const obj = { count };
    return intl.formatToPlainString(intl4.t.LRNgHp, obj);
  },
  hoursAgo(count) {
    const intl = intl4.intl;
    const obj = { count };
    return intl.formatToPlainString(intl4.t.raJpz3, obj);
  },
  daysAgo(count) {
    const intl = intl4.intl;
    const obj = { count };
    return intl.formatToPlainString(intl4.t.KkvKhi, obj);
  },
  weeksAgo(count) {
    const intl = intl4.intl;
    const obj = { count };
    return intl.formatToPlainString(intl4.t.sDtO6D, obj);
  },
  monthsAgo(count) {
    const intl = intl4.intl;
    const obj = { count };
    return intl.formatToPlainString(intl4.t.ITymou, obj);
  },
};
let obj = {
  secondsAgo(count) {
    const intl = intl4.intl;
    const obj = { count };
    return intl.formatToPlainString(intl4.t.jfUoRQ, obj);
  },
  minutesAgo(count) {
    const intl = intl4.intl;
    const obj = { count };
    return intl.formatToPlainString(intl4.t.DmvRVO, obj);
  },
  hoursAgo(count) {
    const intl = intl4.intl;
    const obj = { count };
    return intl.formatToPlainString(intl4.t.AfXezt, obj);
  },
  daysAgo(count) {
    const intl = intl4.intl;
    const obj = { count };
    return intl.formatToPlainString(intl4.t.Lru1rV, obj);
  },
  weeksAgo(count) {
    const intl = intl4.intl;
    const obj = { count };
    return intl.formatToPlainString(intl4.t["jovF+x"], obj);
  },
  monthsAgo(count) {
    const intl = intl4.intl;
    const obj = { count };
    return intl.formatToPlainString(intl4.t.nmSbST, obj);
  },
};
let size = size_mod;
let result = size.fileFinishedImporting("modules/content_inventory/utils.tsx");

export { calculateTimestampDurations };
export const calculateActiveTimestampDurations = function calculateActiveTimestampDurations(end, now) {
  let start;
  end = undefined;
  if ("end" in end) {
    end = end.end;
  }
  const isCountDown = "isCountDown" in end && null != end.isCountDown && end.isCountDown;
  if (isCountDown) {
    if (null != end) {
      if (end > now) {
        return calculateTimestampDurations(end, now);
      }
    }
  }
  if ("id" in end) {
    const obj = SnowflakeUtilsDefault;
    start = obj.extractTimestamp(end.id);
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
  let start;
  end = undefined;
  if ("end" in end) {
    end = end.end;
  }
  const isCountDown = "isCountDown" in end && null != end.isCountDown && end.isCountDown;
  if (isCountDown) {
    if (null != end) {
      let tmp6Result;
      if (end > now) {
        tmp6Result = calculateTimestampDurations(end, now);
      }
      const time = { hours: null, minutes: null, seconds: null };
      ({ hours: obj2.hours, minutes: obj2.minutes, seconds: obj2.seconds } = tmp6Result);
      return formatTimestampToA11yLabel(time);
    }
  }
  if ("id" in end) {
    const obj = SnowflakeUtilsDefault;
    start = obj.extractTimestamp(end.id);
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
export const A11Y_FORMAT_SET = obj;
export { formatEndedTimestamp };
export const formatEntryTimestamp = function formatEntryTimestamp(contentInventoryEntry, locale) {
  let tmp8;
  let timestamp = time;
  if (time === undefined) {
    const _Date = Date;
    timestamp = Date.now();
  }
  let obj = arg3;
  if (arg3 === undefined) {
    obj = {};
  }
  const IS_LIVE = ContentInventoryTraitType.ContentInventoryTraitType.IS_LIVE;
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
    tmp8 = formatActiveTimestamp(contentInventoryEntry, timestamp);
  } else {
    tmp8 = formatEndedTimestamp(contentInventoryEntry, 0, timestamp, obj);
  }
  return tmp8;
};
export const getTrait = function getTrait(contentInventoryEntry, AGGREGATE_COUNT) {
  let closure_0 = AGGREGATE_COUNT;
  const traits = contentInventoryEntry.traits;
  return traits.find((type) => type.type === TRENDING_CONTENT);
};
export const isEntryActive = function isEntryActive(entry) {
  const IS_LIVE = ContentInventoryTraitType.ContentInventoryTraitType.IS_LIVE;
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
  const FIRST_TIME = ContentInventoryTraitType.ContentInventoryTraitType.FIRST_TIME;
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
  const obj = SnowflakeUtilsDefault;
  const ageResult = obj.age(id.id);
  return ageResult / DurationsDefault.Millis.HOUR < 48;
};
export const isEntryExpired = function isEntryExpired(content) {
  let tmp = null != content.expires_at;
  if (tmp) {
    const _Date = Date;
    const self = this;
    const self2 = this;
    const _Date2 = Date;
    const self3 = this;
    const self4 = this;
    const date = new Date(content.expires_at);
    tmp = date < new Date();
    const date1 = new Date();
  }
  return tmp;
};
export const isEntryLive = function isEntryLive(traits) {
  const IS_LIVE = ContentInventoryTraitType.ContentInventoryTraitType.IS_LIVE;
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
      const self = this;
      const self2 = this;
      const _Date2 = Date;
      const self3 = this;
      const self4 = this;
      const date = new Date(traits.expires_at);
      tmp2 = date < new Date();
      const date1 = new Date();
    }
    flag = !tmp2;
  }
  return flag;
};
export const getEntryDuration = function getEntryDuration(contentInventoryEntry) {
  const DURATION_SECONDS = ContentInventoryTraitType.ContentInventoryTraitType.DURATION_SECONDS;
  const traits = contentInventoryEntry.traits;
  const found = traits.find((type) => type.type === TRENDING_CONTENT);
  let duration_seconds;
  if (found != null) {
    duration_seconds = found.duration_seconds;
  }
  return duration_seconds;
};
export const getAggregateRange = function getAggregateRange(traits) {
  const AGGREGATE_RANGE = ContentInventoryTraitType.ContentInventoryTraitType.AGGREGATE_RANGE;
  traits = traits.traits;
  const found = traits.find((type) => type.type === TRENDING_CONTENT);
  let range;
  if (found != null) {
    range = found.range;
  }
  return range;
};
export const isEntryMarathon = function isEntryMarathon(entry) {
  const MARATHON = ContentInventoryTraitType.ContentInventoryTraitType.MARATHON;
  const traits = entry.traits;
  const found = traits.find((type) => type.type === TRENDING_CONTENT);
  let marathon;
  if (found != null) {
    marathon = found.marathon;
  }
  return marathon;
};
export const getResurrectedEntryLastPlayTime = function getResurrectedEntryLastPlayTime(traits) {
  const RESURRECTED = ContentInventoryTraitType.ContentInventoryTraitType.RESURRECTED;
  traits = traits.traits;
  const found = traits.find((type) => type.type === TRENDING_CONTENT);
  let prop;
  if (found != null) {
    prop = found.resurrected_last_played;
  }
  let date;
  if (null != prop) {
    const _Date = Date;
    const self = this;
    const self2 = this;
    date = new Date(found.resurrected_last_played);
  }
  return date;
};
export const getFullResurrectedBadgeText = function getFullResurrectedBadgeText(start) {
  let num4;
  let num5;
  const obj = { start, end: new Date() };
  const intervalToDuration = _mod4110.intervalToDuration;
  _mod4110;
  new Date();
  const intervalToDurationResult = intervalToDuration(obj);
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
  const intl = intl4.intl;
  const formatToPlainString = intl.formatToPlainString;
  const obj2 = { months: num, weeks: num4, days: num5 };
  num4 = 0;
  const NXBtjF = intl4.t.NXBtjF;
  if (num <= 0) {
    num4 = num2;
  }
  num5 = 0;
  if (num <= 0) {
    num5 = 0;
    if (num2 <= 0) {
      num5 = num3;
    }
  }
  return formatToPlainString(NXBtjF, obj2);
};
export const getEpisodeBadgeText = function getEpisodeBadgeText(large_text) {
  if (null != large_text) {
    if ("" !== large_text) {
      const obj2 = /\w+ (\d+), \w+ (\d+)/;
      const match = obj2.exec(large_text);
      let formatToPlainStringResult = null;
      if (null != match) {
        const intl = intl4.intl;
        const obj = { seasonNum: match[1], episodeNum: match[2] };
        formatToPlainStringResult = intl.formatToPlainString(intl4.t.ijVm6y, obj);
      }
      return formatToPlainStringResult;
    }
  }
  return null;
};
export const getEpisodeBadgeA11yText = function getEpisodeBadgeA11yText(arg0) {
  if (null != arg0) {
    if ("" !== arg0) {
      const obj = /\w+ (\d+), \w+ (\d+)/;
      const match = obj.exec(arg0);
      if (null != match) {
        const intl = intl4.intl;
        const obj2 = { seasonNum: match[1], episodeNum: match[2] };
        return intl.formatToPlainString(intl4.t.zmi5IM, obj2);
      }
    }
  }
};
export const getRichGameStateBadgeText = function getRichGameStateBadgeText(state, party) {
  let formatToPlainStringResult;
  let first;
  if (party != null) {
    size = party.size;
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
        let combined;
        if (tmp2 > 0) {
          const intl2 = intl4.intl;
          const obj2 = { count: first, max: tmp2 };
          formatToPlainStringResult = intl2.formatToPlainString(intl4.t.wmUSiy, obj2);
        }
        if (null != formatToPlainStringResult) {
          if (null != state) {
            const _HermesInternal = HermesInternal;
            combined = "" + state + " (" + formatToPlainStringResult + ")";
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
  const tmp3 = null != first && first > 0;
  if (tmp3) {
    const intl = intl4.intl;
    const obj = { count: first };
    formatToPlainStringResult = intl.formatToPlainString(intl4.t.UTYMsa, obj);
  }
};
export const isEntryTopGame = function isEntryTopGame(contentInventoryEntry) {
  return contentInventoryEntry.content_type === ContentInventoryEntryType.ContentInventoryEntryType.TOP_GAME;
};
export const getStreakCount = function getStreakCount(entry) {
  const STREAK_DAYS = ContentInventoryTraitType.ContentInventoryTraitType.STREAK_DAYS;
  const traits = entry.traits;
  const found = traits.find((type) => type.type === TRENDING_CONTENT);
  let streak_count_days;
  if (found != null) {
    streak_count_days = found.streak_count_days;
  }
  return streak_count_days;
};
export const isValidStreak = function isValidStreak(traits) {
  const STREAK_DAYS = ContentInventoryTraitType.ContentInventoryTraitType.STREAK_DAYS;
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
    const obj = SnowflakeUtilsDefault;
    const extractTimestampResult = obj.extractTimestamp(traits.id);
    const diff = Date.now() - extractTimestampResult;
    return diff <= 48 * DurationsDefault.Millis.HOUR;
  }
};
export const getMarathonDescription = function getMarathonDescription(entry) {
  let intl;
  let intl2;
  let intl3;
  let obj2;
  let obj3;
  let obj4;
  const DURATION_SECONDS = ContentInventoryTraitType.ContentInventoryTraitType.DURATION_SECONDS;
  const traits = entry.traits;
  const found = traits.find((type) => type.type === TRENDING_CONTENT);
  let duration_seconds;
  if (found != null) {
    duration_seconds = found.duration_seconds;
  }
  if (null == duration_seconds) {
    return { text: null, tooltipText: null, a11yText: null };
  } else {
    let obj;
    const _Math = Math;
    const rounded = Math.round(duration_seconds / DurationsDefault.Seconds.HOUR);
    if (rounded <= 0) {
      obj = { text: null, tooltipText: null, a11yText: null };
    } else {
      obj = {
        text: intl.formatToPlainString(intl4.t.vZaMem, obj2),
        tooltipText: intl2.formatToPlainString(intl4.t.S5F485, obj3),
        a11yText: intl3.formatToPlainString(intl4.t["RZY+tX"], obj4),
      };
      intl = intl4.intl;
      obj2 = { hours: rounded };
      intl2 = intl4.intl;
      obj3 = { hours: rounded };
      intl3 = intl4.intl;
      obj4 = { hours: rounded };
    }
    return obj;
  }
};
export const getTrendingType = function getTrendingType(traits) {
  const TRENDING_CONTENT = ContentInventoryTraitType.ContentInventoryTraitType.TRENDING_CONTENT;
  traits = traits.traits;
  const found = traits.find((type) => type.type === TRENDING_CONTENT);
  let trending;
  if (found != null) {
    trending = found.trending;
  }
  return trending;
};
