// _runtime/04048_buildFormatLongFn.js
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
    formats: { full: "y 'm'. MMMM d 'd'., EEEE", long: "y 'm'. MMMM d 'd'.", medium: "y-MM-dd", short: "y-MM-dd" },
    defaultWidth: "full",
  }),
  time: obj.default({
    formats: { full: "HH:mm:ss zzzz", long: "HH:mm:ss z", medium: "HH:mm:ss", short: "HH:mm" },
    defaultWidth: "full",
  }),
  dateTime: obj.default({
    formats: {
      full: "{{date}} {{time}}",
      long: "{{date}} {{time}}",
      medium: "{{date}} {{time}}",
      short: "{{date}} {{time}}",
    },
    defaultWidth: "full",
  }),
});

export default {
  date: obj.default({
    formats: { full: "y 'm'. MMMM d 'd'., EEEE", long: "y 'm'. MMMM d 'd'.", medium: "y-MM-dd", short: "y-MM-dd" },
    defaultWidth: "full",
  }),
  time: obj.default({
    formats: { full: "HH:mm:ss zzzz", long: "HH:mm:ss z", medium: "HH:mm:ss", short: "HH:mm" },
    defaultWidth: "full",
  }),
  dateTime: obj.default({
    formats: {
      full: "{{date}} {{time}}",
      long: "{{date}} {{time}}",
      medium: "{{date}} {{time}}",
      short: "{{date}} {{time}}",
    },
    defaultWidth: "full",
  }),
};
