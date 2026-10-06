// _runtime/03985_formatDistance.js
const obj = {
  lessThanXSeconds: {
    standalone: { one: "weniger als 1 Sekunde", other: "weniger als {{count}} Sekunden" },
    withPreposition: { one: "weniger als 1 Sekunde", other: "weniger als {{count}} Sekunden" },
  },
  xSeconds: {
    standalone: { one: "1 Sekunde", other: "{{count}} Sekunden" },
    withPreposition: { one: "1 Sekunde", other: "{{count}} Sekunden" },
  },
  halfAMinute: { standalone: "halbe Minute", withPreposition: "halben Minute" },
  lessThanXMinutes: {
    standalone: { one: "weniger als 1 Minute", other: "weniger als {{count}} Minuten" },
    withPreposition: { one: "weniger als 1 Minute", other: "weniger als {{count}} Minuten" },
  },
  xMinutes: {
    standalone: { one: "1 Minute", other: "{{count}} Minuten" },
    withPreposition: { one: "1 Minute", other: "{{count}} Minuten" },
  },
  aboutXHours: {
    standalone: { one: "etwa 1 Stunde", other: "etwa {{count}} Stunden" },
    withPreposition: { one: "etwa 1 Stunde", other: "etwa {{count}} Stunden" },
  },
  xHours: {
    standalone: { one: "1 Stunde", other: "{{count}} Stunden" },
    withPreposition: { one: "1 Stunde", other: "{{count}} Stunden" },
  },
  xDays: {
    standalone: { one: "1 Tag", other: "{{count}} Tage" },
    withPreposition: { one: "1 Tag", other: "{{count}} Tagen" },
  },
  aboutXWeeks: {
    standalone: { one: "etwa 1 Woche", other: "etwa {{count}} Wochen" },
    withPreposition: { one: "etwa 1 Woche", other: "etwa {{count}} Wochen" },
  },
  xWeeks: {
    standalone: { one: "1 Woche", other: "{{count}} Wochen" },
    withPreposition: { one: "1 Woche", other: "{{count}} Wochen" },
  },
  aboutXMonths: {
    standalone: { one: "etwa 1 Monat", other: "etwa {{count}} Monate" },
    withPreposition: { one: "etwa 1 Monat", other: "etwa {{count}} Monaten" },
  },
  xMonths: {
    standalone: { one: "1 Monat", other: "{{count}} Monate" },
    withPreposition: { one: "1 Monat", other: "{{count}} Monaten" },
  },
  aboutXYears: {
    standalone: { one: "etwa 1 Jahr", other: "etwa {{count}} Jahre" },
    withPreposition: { one: "etwa 1 Jahr", other: "etwa {{count}} Jahren" },
  },
  xYears: {
    standalone: { one: "1 Jahr", other: "{{count}} Jahre" },
    withPreposition: { one: "1 Jahr", other: "{{count}} Jahren" },
  },
  overXYears: {
    standalone: { one: "mehr als 1 Jahr", other: "mehr als {{count}} Jahre" },
    withPreposition: { one: "mehr als 1 Jahr", other: "mehr als {{count}} Jahren" },
  },
  almostXYears: {
    standalone: { one: "fast 1 Jahr", other: "fast {{count}} Jahre" },
    withPreposition: { one: "fast 1 Jahr", other: "fast {{count}} Jahren" },
  },
};

export default function formatDistance(arg0, arg1, addSuffix) {
  if (null != addSuffix) {
    let standalone;
    if (addSuffix.addSuffix) {
      standalone = obj[arg0].withPreposition;
    }
    let tmp2 = standalone;
    if (typeof standalone !== "string") {
      let one;
      if (1 === arg1) {
        one = standalone.one;
      } else {
        const _String = String;
        const str = standalone.other;
        one = str.replace("{{count}}", String(arg1));
      }
      tmp2 = one;
    }
    let tmp4 = tmp2;
    if (null != addSuffix) {
      tmp4 = tmp2;
      if (addSuffix.addSuffix) {
        if (addSuffix.comparison) {
          let text;
          if (addSuffix.comparison > 0) {
            text = `in ${tmp2}`;
          }
          tmp4 = text;
        }
        text = `vor ${tmp2}`;
      }
    }
    return tmp4;
  }
  standalone = obj[arg0].standalone;
}
