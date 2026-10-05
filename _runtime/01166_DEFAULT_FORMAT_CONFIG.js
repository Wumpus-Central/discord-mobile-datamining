// _runtime/01166_DEFAULT_FORMAT_CONFIG.js
import _mod1167 from "metro/01167__.js";
import dataFormatterCache2 from "01168_dataFormatterCache.js";

let value;

export function makeDataFormatters(items, formatConfig) {
  let closure_0 = items;
  let flag = _forceLookupMatcher;
  if (_forceLookupMatcher === undefined) {
    flag = false;
  }
  let obj = {
    formatDate(arg0, format) {
      const formatConfigOptions = _mod1167.resolveFormatConfigOptions(formatConfig.date, format);
      const dataFormatterCache = dataFormatterCache2.dataFormatterCache;
      let merged = formatConfigOptions;
      const getDateTimeFormatter = dataFormatterCache.getDateTimeFormatter;
      if (flag) {
        const _Object = Object;
        const _Object2 = Object;
        merged = Object.assign(Object.assign({}, formatConfigOptions), { localeMatcher: "lookup" });
      }
      const dateTimeFormatter = getDateTimeFormatter(items, merged);
      return dateTimeFormatter.format(arg0);
    },
    formatDuration(arg0, format) {
      const formatConfigOptions = _mod1167.resolveFormatConfigOptions(formatConfig.time, format);
      const dataFormatterCache = dataFormatterCache2.dataFormatterCache;
      let merged = formatConfigOptions;
      const getDurationFormatter = dataFormatterCache.getDurationFormatter;
      if (flag) {
        const _Object = Object;
        const _Object2 = Object;
        merged = Object.assign(Object.assign({}, formatConfigOptions), { localeMatcher: "lookup" });
      }
      const durationFormatter = getDurationFormatter(items, merged);
      return durationFormatter.format(arg0);
    },
    formatNumber(result2, parseNumberSkeletonResult) {
      const formatConfigOptions = _mod1167.resolveFormatConfigOptions(formatConfig.number, parseNumberSkeletonResult);
      const dataFormatterCache = dataFormatterCache2.dataFormatterCache;
      let merged = formatConfigOptions;
      const getNumberFormatter = dataFormatterCache.getNumberFormatter;
      if (flag) {
        const _Object = Object;
        const _Object2 = Object;
        merged = Object.assign(Object.assign({}, formatConfigOptions), { localeMatcher: "lookup" });
      }
      const numberFormatter = getNumberFormatter(items, merged);
      return numberFormatter.format(result2);
    },
    formatList(arg0, format) {
      const formatConfigOptions = _mod1167.resolveFormatConfigOptions(formatConfig.list, format);
      const dataFormatterCache = dataFormatterCache2.dataFormatterCache;
      let merged = formatConfigOptions;
      const getListFormatter = dataFormatterCache.getListFormatter;
      if (flag) {
        const _Object = Object;
        const _Object2 = Object;
        merged = Object.assign(Object.assign({}, formatConfigOptions), { localeMatcher: "lookup" });
      }
      const listFormatter = getListFormatter(items, merged);
      return listFormatter.format(arg0);
    },
    formatListToParts(obj, format) {
      const formatConfigOptions = _mod1167.resolveFormatConfigOptions(formatConfig.list, format);
      obj = {};
      for (const key10015 in obj) {
        obj["$+/-$placeholder." + key10015] = obj[key10015];
        continue;
      }
      const dataFormatterCache = dataFormatterCache2.dataFormatterCache;
      let merged = formatConfigOptions;
      const getListFormatter = dataFormatterCache.getListFormatter;
      if (flag) {
        const _Object = Object;
        const _Object2 = Object;
        merged = Object.assign(Object.assign({}, formatConfigOptions), { localeMatcher: "lookup" });
      }
      const listFormatter = getListFormatter(items, merged);
      const formatToPartsResult = listFormatter.formatToParts(Object.keys(obj));
      return formatToPartsResult.map((value) => {
        value = obj[value.value];
        if (null === value) {
          value = value.value;
        }
        value.value = value;
        return value;
      });
    },
    formatRelativeTime(arg0, day, format) {
      const formatConfigOptions = _mod1167.resolveFormatConfigOptions(formatConfig.relativeTime, format);
      const dataFormatterCache = dataFormatterCache2.dataFormatterCache;
      let merged = formatConfigOptions;
      const getRelativeTimeFormatter = dataFormatterCache.getRelativeTimeFormatter;
      if (flag) {
        const _Object = Object;
        const _Object2 = Object;
        merged = Object.assign(Object.assign({}, formatConfigOptions), { localeMatcher: "lookup" });
      }
      const relativeTimeFormatter = getRelativeTimeFormatter(items, merged);
      return relativeTimeFormatter.format(arg0, day);
    },
    formatTime(arg0, format) {
      const formatConfigOptions = _mod1167.resolveFormatConfigOptions(formatConfig.time, format);
      const dataFormatterCache = dataFormatterCache2.dataFormatterCache;
      let merged = formatConfigOptions;
      const getDateTimeFormatter = dataFormatterCache.getDateTimeFormatter;
      if (flag) {
        const _Object = Object;
        const _Object2 = Object;
        merged = Object.assign(Object.assign({}, formatConfigOptions), { localeMatcher: "lookup" });
      }
      const dateTimeFormatter = getDateTimeFormatter(items, merged);
      return dateTimeFormatter.format(arg0);
    },
    getPluralRules(arg0) {
      const dataFormatterCache = dataFormatterCache2.dataFormatterCache;
      let merged = arg0;
      const getPluralRules = dataFormatterCache.getPluralRules;
      if (flag) {
        const _Object = Object;
        const _Object2 = Object;
        merged = Object.assign(Object.assign({}, arg0), { localeMatcher: "lookup" });
      }
      return getPluralRules(items, merged);
    },
  };
  return obj;
}
