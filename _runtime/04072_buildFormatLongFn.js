// _runtime/04072_buildFormatLongFn.js
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
    formats: { full: "EEEE, d 'de' MMMM 'de' y", long: "d 'de' MMMM 'de' y", medium: "d MMM y", short: "dd/MM/yyyy" },
    defaultWidth: "full",
  }),
  time: obj.default({
    formats: { full: "HH:mm:ss zzzz", long: "HH:mm:ss z", medium: "HH:mm:ss", short: "HH:mm" },
    defaultWidth: "full",
  }),
  dateTime: obj.default({
    formats: {
      full: "{{date}} '\u00E0s' {{time}}",
      long: "{{date}} '\u00E0s' {{time}}",
      medium: "{{date}}, {{time}}",
      short: "{{date}}, {{time}}",
    },
    defaultWidth: "full",
  }),
});

export default {
  date: obj.default({
    formats: { full: "EEEE, d 'de' MMMM 'de' y", long: "d 'de' MMMM 'de' y", medium: "d MMM y", short: "dd/MM/yyyy" },
    defaultWidth: "full",
  }),
  time: obj.default({
    formats: { full: "HH:mm:ss zzzz", long: "HH:mm:ss z", medium: "HH:mm:ss", short: "HH:mm" },
    defaultWidth: "full",
  }),
  dateTime: obj.default({
    formats: {
      full: "{{date}} '\u00E0s' {{time}}",
      long: "{{date}} '\u00E0s' {{time}}",
      medium: "{{date}}, {{time}}",
      short: "{{date}}, {{time}}",
    },
    defaultWidth: "full",
  }),
};
