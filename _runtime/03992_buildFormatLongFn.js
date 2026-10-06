// _runtime/03992_buildFormatLongFn.js
import buildFormatLongFn from "02121_buildFormatLongFn.js";

let obj;
if (!buildFormatLongFn) {
  obj = { default: buildFormatLongFn };
  const obj2 = { default: buildFormatLongFn };
} else {
  obj = buildFormatLongFn;
}
({
  date: obj.default({
    formats: { full: "EEEE, d MMMM y", long: "d MMMM y", medium: "d MMM y", short: "d/M/yy" },
    defaultWidth: "full",
  }),
  time: obj.default({
    formats: { full: "h:mm:ss a zzzz", long: "h:mm:ss a z", medium: "h:mm:ss a", short: "h:mm a" },
    defaultWidth: "full",
  }),
  dateTime: obj.default({
    formats: {
      full: "{{date}} - {{time}}",
      long: "{{date}} - {{time}}",
      medium: "{{date}}, {{time}}",
      short: "{{date}}, {{time}}",
    },
    defaultWidth: "full",
  }),
});

export default {
  date: obj.default({
    formats: { full: "EEEE, d MMMM y", long: "d MMMM y", medium: "d MMM y", short: "d/M/yy" },
    defaultWidth: "full",
  }),
  time: obj.default({
    formats: { full: "h:mm:ss a zzzz", long: "h:mm:ss a z", medium: "h:mm:ss a", short: "h:mm a" },
    defaultWidth: "full",
  }),
  dateTime: obj.default({
    formats: {
      full: "{{date}} - {{time}}",
      long: "{{date}} - {{time}}",
      medium: "{{date}}, {{time}}",
      short: "{{date}}, {{time}}",
    },
    defaultWidth: "full",
  }),
};
