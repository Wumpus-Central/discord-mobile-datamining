// _runtime/03372_formatDistance.js
let closure_0 = { lessThanXSeconds: { one: { regular: "m\u00E9n\u011B ne\u017E sekunda", past: "p\u0159ed m\u00E9n\u011B ne\u017E sekundou", future: "za m\u00E9n\u011B ne\u017E sekundu" }, few: { regular: "m\u00E9n\u011B ne\u017E {{count}} sekundy", past: "p\u0159ed m\u00E9n\u011B ne\u017E {{count}} sekundami", future: "za m\u00E9n\u011B ne\u017E {{count}} sekundy" }, many: { regular: "m\u00E9n\u011B ne\u017E {{count}} sekund", past: "p\u0159ed m\u00E9n\u011B ne\u017E {{count}} sekundami", future: "za m\u00E9n\u011B ne\u017E {{count}} sekund" } }, xSeconds: { one: { regular: "sekunda", past: "p\u0159ed sekundou", future: "za sekundu" }, few: { regular: "{{count}} sekundy", past: "p\u0159ed {{count}} sekundami", future: "za {{count}} sekundy" }, many: { regular: "{{count}} sekund", past: "p\u0159ed {{count}} sekundami", future: "za {{count}} sekund" } }, halfAMinute: { type: "other", other: { regular: "p\u016Fl minuty", past: "p\u0159ed p\u016Fl minutou", future: "za p\u016Fl minuty" } }, lessThanXMinutes: { one: { regular: "m\u00E9n\u011B ne\u017E minuta", past: "p\u0159ed m\u00E9n\u011B ne\u017E minutou", future: "za m\u00E9n\u011B ne\u017E minutu" }, few: { regular: "m\u00E9n\u011B ne\u017E {{count}} minuty", past: "p\u0159ed m\u00E9n\u011B ne\u017E {{count}} minutami", future: "za m\u00E9n\u011B ne\u017E {{count}} minuty" }, many: { regular: "m\u00E9n\u011B ne\u017E {{count}} minut", past: "p\u0159ed m\u00E9n\u011B ne\u017E {{count}} minutami", future: "za m\u00E9n\u011B ne\u017E {{count}} minut" } }, xMinutes: { one: { regular: "minuta", past: "p\u0159ed minutou", future: "za minutu" }, few: { regular: "{{count}} minuty", past: "p\u0159ed {{count}} minutami", future: "za {{count}} minuty" }, many: { regular: "{{count}} minut", past: "p\u0159ed {{count}} minutami", future: "za {{count}} minut" } }, aboutXHours: { one: { regular: "p\u0159ibli\u017En\u011B hodina", past: "p\u0159ibli\u017En\u011B p\u0159ed hodinou", future: "p\u0159ibli\u017En\u011B za hodinu" }, few: { regular: "p\u0159ibli\u017En\u011B {{count}} hodiny", past: "p\u0159ibli\u017En\u011B p\u0159ed {{count}} hodinami", future: "p\u0159ibli\u017En\u011B za {{count}} hodiny" }, many: { regular: "p\u0159ibli\u017En\u011B {{count}} hodin", past: "p\u0159ibli\u017En\u011B p\u0159ed {{count}} hodinami", future: "p\u0159ibli\u017En\u011B za {{count}} hodin" } }, xHours: { one: { regular: "hodina", past: "p\u0159ed hodinou", future: "za hodinu" }, few: { regular: "{{count}} hodiny", past: "p\u0159ed {{count}} hodinami", future: "za {{count}} hodiny" }, many: { regular: "{{count}} hodin", past: "p\u0159ed {{count}} hodinami", future: "za {{count}} hodin" } }, xDays: { one: { regular: "den", past: "p\u0159ed dnem", future: "za den" }, few: { regular: "{{count}} dny", past: "p\u0159ed {{count}} dny", future: "za {{count}} dny" }, many: { regular: "{{count}} dn\u00ED", past: "p\u0159ed {{count}} dny", future: "za {{count}} dn\u00ED" } }, aboutXWeeks: { one: { regular: "p\u0159ibli\u017En\u011B t\u00FDden", past: "p\u0159ibli\u017En\u011B p\u0159ed t\u00FDdnem", future: "p\u0159ibli\u017En\u011B za t\u00FDden" }, few: { regular: "p\u0159ibli\u017En\u011B {{count}} t\u00FDdny", past: "p\u0159ibli\u017En\u011B p\u0159ed {{count}} t\u00FDdny", future: "p\u0159ibli\u017En\u011B za {{count}} t\u00FDdny" }, many: { regular: "p\u0159ibli\u017En\u011B {{count}} t\u00FDdn\u016F", past: "p\u0159ibli\u017En\u011B p\u0159ed {{count}} t\u00FDdny", future: "p\u0159ibli\u017En\u011B za {{count}} t\u00FDdn\u016F" } }, xWeeks: { one: { regular: "t\u00FDden", past: "p\u0159ed t\u00FDdnem", future: "za t\u00FDden" }, few: { regular: "{{count}} t\u00FDdny", past: "p\u0159ed {{count}} t\u00FDdny", future: "za {{count}} t\u00FDdny" }, many: { regular: "{{count}} t\u00FDdn\u016F", past: "p\u0159ed {{count}} t\u00FDdny", future: "za {{count}} t\u00FDdn\u016F" } }, aboutXMonths: { one: { regular: "p\u0159ibli\u017En\u011B m\u011Bs\u00EDc", past: "p\u0159ibli\u017En\u011B p\u0159ed m\u011Bs\u00EDcem", future: "p\u0159ibli\u017En\u011B za m\u011Bs\u00EDc" }, few: { regular: "p\u0159ibli\u017En\u011B {{count}} m\u011Bs\u00EDce", past: "p\u0159ibli\u017En\u011B p\u0159ed {{count}} m\u011Bs\u00EDci", future: "p\u0159ibli\u017En\u011B za {{count}} m\u011Bs\u00EDce" }, many: { regular: "p\u0159ibli\u017En\u011B {{count}} m\u011Bs\u00EDc\u016F", past: "p\u0159ibli\u017En\u011B p\u0159ed {{count}} m\u011Bs\u00EDci", future: "p\u0159ibli\u017En\u011B za {{count}} m\u011Bs\u00EDc\u016F" } }, xMonths: { one: { regular: "m\u011Bs\u00EDc", past: "p\u0159ed m\u011Bs\u00EDcem", future: "za m\u011Bs\u00EDc" }, few: { regular: "{{count}} m\u011Bs\u00EDce", past: "p\u0159ed {{count}} m\u011Bs\u00EDci", future: "za {{count}} m\u011Bs\u00EDce" }, many: { regular: "{{count}} m\u011Bs\u00EDc\u016F", past: "p\u0159ed {{count}} m\u011Bs\u00EDci", future: "za {{count}} m\u011Bs\u00EDc\u016F" } }, aboutXYears: { one: { regular: "p\u0159ibli\u017En\u011B rok", past: "p\u0159ibli\u017En\u011B p\u0159ed rokem", future: "p\u0159ibli\u017En\u011B za rok" }, few: { regular: "p\u0159ibli\u017En\u011B {{count}} roky", past: "p\u0159ibli\u017En\u011B p\u0159ed {{count}} roky", future: "p\u0159ibli\u017En\u011B za {{count}} roky" }, many: { regular: "p\u0159ibli\u017En\u011B {{count}} rok\u016F", past: "p\u0159ibli\u017En\u011B p\u0159ed {{count}} roky", future: "p\u0159ibli\u017En\u011B za {{count}} rok\u016F" } }, xYears: { one: { regular: "rok", past: "p\u0159ed rokem", future: "za rok" }, few: { regular: "{{count}} roky", past: "p\u0159ed {{count}} roky", future: "za {{count}} roky" }, many: { regular: "{{count}} rok\u016F", past: "p\u0159ed {{count}} roky", future: "za {{count}} rok\u016F" } }, overXYears: { one: { regular: "v\u00EDce ne\u017E rok", past: "p\u0159ed v\u00EDce ne\u017E rokem", future: "za v\u00EDce ne\u017E rok" }, few: { regular: "v\u00EDce ne\u017E {{count}} roky", past: "p\u0159ed v\u00EDce ne\u017E {{count}} roky", future: "za v\u00EDce ne\u017E {{count}} roky" }, many: { regular: "v\u00EDce ne\u017E {{count}} rok\u016F", past: "p\u0159ed v\u00EDce ne\u017E {{count}} roky", future: "za v\u00EDce ne\u017E {{count}} rok\u016F" } }, almostXYears: { one: { regular: "skoro rok", past: "skoro p\u0159ed rokem", future: "skoro za rok" }, few: { regular: "skoro {{count}} roky", past: "skoro p\u0159ed {{count}} roky", future: "skoro za {{count}} roky" }, many: { regular: "skoro {{count}} rok\u016F", past: "skoro p\u0159ed {{count}} roky", future: "skoro za {{count}} rok\u016F" } } };

export default function formatDistance(arg0, arg1, addSuffix) {
  if ("other" === table[arg0].type) {
    let many = tmp.other;
  } else if (1 === arg1) {
    many = tmp.one;
  } else {
    if (arg1 > 1) {
      if (arg1 < 5) {
        many = tmp.few;
      }
    }
    many = tmp.many;
  }
  addSuffix = undefined;
  if (null != addSuffix) {
    addSuffix = addSuffix.addSuffix;
  }
  if (null != addSuffix) {
    const comparison = addSuffix.comparison;
  }
  if (true === addSuffix) {
    if (-1 === comparison) {
      let str = many.past;
    }
    const _String = String;
    return str.replace("{{count}}", String(arg1));
  }
  if (true === addSuffix) {
    if (1 === comparison) {
      str = many.future;
    }
  }
  str = many.regular;
};
export default exports.default;