// === Module 1275: resolveFormatConfigOptions ===

// Module 1275 (resolveFormatConfigOptions)
arg5.DEFAULT_FORMAT_CONFIG = undefined;
arg5.resolveFormatConfigOptions = function resolveFormatConfigOptions(list, format) {
  format = undefined;
  if (null != format) {
    format = format.format;
  }
  if (typeof format === "string") {
    const _Object = Object;
    const _Object2 = Object;
    return Object.assign(Object.assign({}, list[format.format]), format);
  } else {
    return format;
  }
};
arg5.DEFAULT_FORMAT_CONFIG = { duration: {}, list: {}, relativeTime: {}, number: { integer: { maximumFractionDigits: 0 }, currency: { style: "currency" }, percent: { style: "percent" } }, date: { short: { month: "numeric", day: "numeric", year: "2-digit" }, medium: { month: "short", day: "numeric", year: "numeric" }, long: { month: "long", day: "numeric", year: "numeric" }, full: { weekday: "long", month: "long", day: "numeric", year: "numeric" } }, time: { short: { hour: "numeric", minute: "numeric" }, medium: { hour: "numeric", minute: "numeric", second: "numeric" }, long: { hour: "numeric", minute: "numeric", second: "numeric", timeZoneName: "short" }, full: { hour: "numeric", minute: "numeric", second: "numeric", timeZoneName: "short" } } };