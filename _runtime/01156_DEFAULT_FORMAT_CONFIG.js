// === Module 1156: DEFAULT_FORMAT_CONFIG ===

// Module 1156 (DEFAULT_FORMAT_CONFIG)
import _mod1157 from "module_1157" /* 1157 */;
import dataFormatterCache2 from "dataFormatterCache" /* 1158 */;

require = arg1;
const dependencyMap = arg6;

export function makeDataFormatters(items, formatConfig) {
  closure_0 = items;
  closure_1 = formatConfig;
  let flag = _forceLookupMatcher;
  if (_forceLookupMatcher === undefined) {
    flag = false;
  }
  return {
    formatDate(arg0, format) {
      const formatConfigOptions = _mod1157.resolveFormatConfigOptions(closure_1.date, format);
      const dataFormatterCache = dataFormatterCache2.dataFormatterCache;
      let merged = formatConfigOptions;
      if (flag) {
        const _Object = Object;
        const _Object2 = Object;
        merged = Object.assign(Object.assign({}, formatConfigOptions), { localeMatcher: "lookup" });
      }
      const dateTimeFormatter = dataFormatterCache.getDateTimeFormatter(closure_0, merged);
      return dateTimeFormatter.format(arg0);
    },
    formatDuration(arg0, format) {
      const formatConfigOptions = _mod1157.resolveFormatConfigOptions(closure_1.time, format);
      const dataFormatterCache = dataFormatterCache2.dataFormatterCache;
      let merged = formatConfigOptions;
      if (flag) {
        const _Object = Object;
        const _Object2 = Object;
        merged = Object.assign(Object.assign({}, formatConfigOptions), { localeMatcher: "lookup" });
      }
      const durationFormatter = dataFormatterCache.getDurationFormatter(closure_0, merged);
      return durationFormatter.format(arg0);
    },
    formatNumber(result2, parseNumberSkeletonResult) {
      const formatConfigOptions = _mod1157.resolveFormatConfigOptions(closure_1.number, parseNumberSkeletonResult);
      const dataFormatterCache = dataFormatterCache2.dataFormatterCache;
      let merged = formatConfigOptions;
      if (flag) {
        const _Object = Object;
        const _Object2 = Object;
        merged = Object.assign(Object.assign({}, formatConfigOptions), { localeMatcher: "lookup" });
      }
      const numberFormatter = dataFormatterCache.getNumberFormatter(closure_0, merged);
      return numberFormatter.format(result2);
    },
    formatList(arg0, format) {
      const formatConfigOptions = _mod1157.resolveFormatConfigOptions(closure_1.list, format);
      const dataFormatterCache = dataFormatterCache2.dataFormatterCache;
      let merged = formatConfigOptions;
      if (flag) {
        const _Object = Object;
        const _Object2 = Object;
        merged = Object.assign(Object.assign({}, formatConfigOptions), { localeMatcher: "lookup" });
      }
      const listFormatter = dataFormatterCache.getListFormatter(closure_0, merged);
      return listFormatter.format(arg0);
    },
    formatListToParts(obj, format) {
      const formatConfigOptions = _mod1157.resolveFormatConfigOptions(closure_1.list, format);
      obj = {};
      for (const key10015 in arg0) {
        obj["$+/-$placeholder." + key10015] = arg0[key10015];
        continue;
      }
      const dataFormatterCache = dataFormatterCache2.dataFormatterCache;
      let merged = formatConfigOptions;
      if (flag) {
        const _Object = Object;
        const _Object2 = Object;
        merged = Object.assign(Object.assign({}, formatConfigOptions), { localeMatcher: "lookup" });
      }
      const listFormatter = dataFormatterCache.getListFormatter(closure_0, merged);
      return listFormatter.formatToParts(Object.keys(obj)).map((value) => {
        value = obj[value.value];
        if (null === value) {
          value = value.value;
        }
        value.value = value;
        return value;
      });
    },
    formatRelativeTime(arg0, day, format) {
      const formatConfigOptions = _mod1157.resolveFormatConfigOptions(closure_1.relativeTime, format);
      const dataFormatterCache = dataFormatterCache2.dataFormatterCache;
      let merged = formatConfigOptions;
      if (flag) {
        const _Object = Object;
        const _Object2 = Object;
        merged = Object.assign(Object.assign({}, formatConfigOptions), { localeMatcher: "lookup" });
      }
      const relativeTimeFormatter = dataFormatterCache.getRelativeTimeFormatter(closure_0, merged);
      return relativeTimeFormatter.format(arg0, day);
    },
    formatTime(arg0, format) {
      const formatConfigOptions = _mod1157.resolveFormatConfigOptions(closure_1.time, format);
      const dataFormatterCache = dataFormatterCache2.dataFormatterCache;
      let merged = formatConfigOptions;
      if (flag) {
        const _Object = Object;
        const _Object2 = Object;
        merged = Object.assign(Object.assign({}, formatConfigOptions), { localeMatcher: "lookup" });
      }
      const dateTimeFormatter = dataFormatterCache.getDateTimeFormatter(closure_0, merged);
      return dateTimeFormatter.format(arg0);
    },
    getPluralRules(arg0) {
      const dataFormatterCache = dataFormatterCache2.dataFormatterCache;
      let merged = arg0;
      if (flag) {
        const _Object = Object;
        const _Object2 = Object;
        merged = Object.assign(Object.assign({}, arg0), { localeMatcher: "lookup" });
      }
      return dataFormatterCache.getPluralRules(closure_0, merged);
    }
  };
}