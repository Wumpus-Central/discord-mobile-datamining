// _runtime/01274_makeDataFormatters.js
const require = arg1;
const dependencyMap = arg6;
arg5.makeDataFormatters = function makeDataFormatters(items, formatConfig, _forceLookupMatcher) {
  closure_0 = items;
  closure_1 = formatConfig;
  let flag = _forceLookupMatcher;
  if (_forceLookupMatcher === undefined) {
    flag = false;
  }
  return {
    formatDate(arg0, format) {
      const formatConfigOptions = items(closure_1[0]).resolveFormatConfigOptions(closure_1.date, format);
      const dataFormatterCache = items(closure_1[1]).dataFormatterCache;
      let merged = formatConfigOptions;
      if (flag) {
        const _Object = Object;
        const _Object2 = Object;
        merged = Object.assign(Object.assign({}, formatConfigOptions), { localeMatcher: "lookup" });
      }
      const dateTimeFormatter = dataFormatterCache.getDateTimeFormatter(items, merged);
      return dateTimeFormatter.format(arg0);
    },
    formatDuration(arg0, format) {
      const formatConfigOptions = items(closure_1[0]).resolveFormatConfigOptions(closure_1.time, format);
      const dataFormatterCache = items(closure_1[1]).dataFormatterCache;
      let merged = formatConfigOptions;
      if (flag) {
        const _Object = Object;
        const _Object2 = Object;
        merged = Object.assign(Object.assign({}, formatConfigOptions), { localeMatcher: "lookup" });
      }
      const durationFormatter = dataFormatterCache.getDurationFormatter(items, merged);
      return durationFormatter.format(arg0);
    },
    formatNumber(result2, parseNumberSkeletonResult) {
      const formatConfigOptions = items(closure_1[0]).resolveFormatConfigOptions(
        closure_1.number,
        parseNumberSkeletonResult,
      );
      const dataFormatterCache = items(closure_1[1]).dataFormatterCache;
      let merged = formatConfigOptions;
      if (flag) {
        const _Object = Object;
        const _Object2 = Object;
        merged = Object.assign(Object.assign({}, formatConfigOptions), { localeMatcher: "lookup" });
      }
      const numberFormatter = dataFormatterCache.getNumberFormatter(items, merged);
      return numberFormatter.format(result2);
    },
    formatList(arg0, format) {
      const formatConfigOptions = items(closure_1[0]).resolveFormatConfigOptions(closure_1.list, format);
      const dataFormatterCache = items(closure_1[1]).dataFormatterCache;
      let merged = formatConfigOptions;
      if (flag) {
        const _Object = Object;
        const _Object2 = Object;
        merged = Object.assign(Object.assign({}, formatConfigOptions), { localeMatcher: "lookup" });
      }
      const listFormatter = dataFormatterCache.getListFormatter(items, merged);
      return listFormatter.format(arg0);
    },
    formatListToParts(obj, format) {
      const formatConfigOptions = items(closure_1[0]).resolveFormatConfigOptions(closure_1.list, format);
      obj = {};
      for (const key10015 in arg0) {
        let tmp5 = key10015;
        obj["$+/-$placeholder." + key10015] = arg0[key10015];
        continue;
      }
      const dataFormatterCache = items(closure_1[1]).dataFormatterCache;
      let merged = formatConfigOptions;
      if (flag) {
        const _Object = Object;
        const _Object2 = Object;
        merged = Object.assign(Object.assign({}, formatConfigOptions), { localeMatcher: "lookup" });
      }
      const listFormatter = dataFormatterCache.getListFormatter(obj, merged);
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
      const formatConfigOptions = items(closure_1[0]).resolveFormatConfigOptions(closure_1.relativeTime, format);
      const dataFormatterCache = items(closure_1[1]).dataFormatterCache;
      let merged = formatConfigOptions;
      if (flag) {
        const _Object = Object;
        const _Object2 = Object;
        merged = Object.assign(Object.assign({}, formatConfigOptions), { localeMatcher: "lookup" });
      }
      const relativeTimeFormatter = dataFormatterCache.getRelativeTimeFormatter(items, merged);
      return relativeTimeFormatter.format(arg0, day);
    },
    formatTime(arg0, format) {
      const formatConfigOptions = items(closure_1[0]).resolveFormatConfigOptions(closure_1.time, format);
      const dataFormatterCache = items(closure_1[1]).dataFormatterCache;
      let merged = formatConfigOptions;
      if (flag) {
        const _Object = Object;
        const _Object2 = Object;
        merged = Object.assign(Object.assign({}, formatConfigOptions), { localeMatcher: "lookup" });
      }
      const dateTimeFormatter = dataFormatterCache.getDateTimeFormatter(items, merged);
      return dateTimeFormatter.format(arg0);
    },
    getPluralRules(arg0) {
      const dataFormatterCache = items(closure_1[1]).dataFormatterCache;
      let merged = arg0;
      if (flag) {
        const _Object = Object;
        const _Object2 = Object;
        merged = Object.assign(Object.assign({}, arg0), { localeMatcher: "lookup" });
      }
      return dataFormatterCache.getPluralRules(items, merged);
    },
  };
};
