// _runtime/04012_buildFormatLongFn.js
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
    formats: { full: "EEEE d MMMM y", long: "d MMMM y", medium: "d MMM y", short: "dd/MM/y" },
    defaultWidth: "full",
  }),
  time: obj.default({
    formats: { full: "HH:mm:ss zzzz", long: "HH:mm:ss z", medium: "HH:mm:ss", short: "HH:mm" },
    defaultWidth: "full",
  }),
  dateTime: obj.default({
    formats: {
      full: "{{date}} '\u00E0' {{time}}",
      long: "{{date}} '\u00E0' {{time}}",
      medium: "{{date}}, {{time}}",
      short: "{{date}}, {{time}}",
    },
    defaultWidth: "full",
  }),
});

export default {
  date: obj.default({
    formats: { full: "EEEE d MMMM y", long: "d MMMM y", medium: "d MMM y", short: "dd/MM/y" },
    defaultWidth: "full",
  }),
  time: obj.default({
    formats: { full: "HH:mm:ss zzzz", long: "HH:mm:ss z", medium: "HH:mm:ss", short: "HH:mm" },
    defaultWidth: "full",
  }),
  dateTime: obj.default({
    formats: {
      full: "{{date}} '\u00E0' {{time}}",
      long: "{{date}} '\u00E0' {{time}}",
      medium: "{{date}}, {{time}}",
      short: "{{date}}, {{time}}",
    },
    defaultWidth: "full",
  }),
};
