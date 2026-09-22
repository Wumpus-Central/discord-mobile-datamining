// _runtime/18143_unicodeToArray.js
const items = ["[^\\ud800-\\udfff]", "(?:\\ud83c[\\udde6-\\uddff]){2}", "[\\ud800-\\udbff][\\udc00-\\udfff]"];
const items1 = [
  "[^\\ud800-\\udfff][\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]?",
  "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
  "(?:\\ud83c[\\udde6-\\uddff]){2}",
  "[\\ud800-\\udbff][\\udc00-\\udfff]",
  "[\\ud800-\\udfff]",
];
const text = `(?:\\u200d(?:${arr.join("|")}`;
let closure_0 = RegExp(
  "\\ud83c[\\udffb-\\udfff](?=\\ud83c[\\udffb-\\udfff])|" +
    `(?:${arr2.join("|")}` +
    ")[\\ufe0e\\ufe0f]?(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?" +
    `(?:\\u200d(?:${arr.join("|")}` +
    ")[\\ufe0e\\ufe0f]?(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?)*",
  "g",
);

export default function unicodeToArray(str) {
  return str.match(closure_0) || [];
}
