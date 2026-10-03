// === Module 13410: GuildBoostingMarketingFaq ===

// Module 13410 (GuildBoostingMarketingFaq)
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2115 */;
import _modDef13411 from "module_13411" /* 13411 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const HelpdeskArticles = fn(1085).HelpdeskArticles;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4890);
let obj2 = { wrapper: { alignSelf: "center", marginTop: 50, marginBottom: fn(6906).VISIBILITY_OFFSET, maxWidth: 800, paddingHorizontal: 16, width: "100%" }, content: null, heading: null, list: null, listItem: null, questionWrapper: null, questionWrapperExpanded: null, question: null, questionIcon: null, questionIconExpanded: null, answer: null };
let obj3 = { alignSelf: "center", marginTop: 50, marginBottom: fn(6906).VISIBILITY_OFFSET, maxWidth: 800, paddingHorizontal: 16, width: "100%" };
obj2.content = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL, borderRadius: nativeDefault.radii.sm, paddingHorizontal: 16, paddingVertical: 28 };
obj2.heading = { marginBottom: 20, textAlign: "center" };
let obj4 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL, borderRadius: nativeDefault.radii.sm, paddingHorizontal: 16, paddingVertical: 28 };
obj2.list = { borderTopColor: nativeDefault.colors.BORDER_MUTED, borderTopWidth: 1 };
let obj5 = { borderTopColor: nativeDefault.colors.BORDER_MUTED, borderTopWidth: 1 };
obj2.listItem = { borderBottomColor: nativeDefault.colors.BORDER_MUTED, borderBottomWidth: 1 };
obj2.questionWrapper = { display: "flex", flexDirection: "row", paddingVertical: 10 };
obj2.questionWrapperExpanded = { paddingBottom: 6 };
obj2.question = { flexGrow: 1, flexShrink: 1, paddingRight: 8 };
const obj6 = { borderBottomColor: nativeDefault.colors.BORDER_MUTED, borderBottomWidth: 1 };
obj2.questionIcon = { flexGrow: 0, flexShrink: 0, tintColor: nativeDefault.colors.ICON_MUTED };
const obj8 = { transform: null };
let items = [{ rotate: "45deg" }];
obj8.transform = items;
obj2.questionIconExpanded = obj8;
obj2.answer = { marginBottom: 10 };
let closure_9 = createStyles.createStyles(obj2);
let items1 = [
  {
    getQuestion() {
      const intl = util.intl;
      return intl.string(util.t.C4J8UB);
    },
    getAnswer() {
      const intl = util.intl;
      return intl.string(util.t.nhkk6k);
    }
  },
  {
    getQuestion() {
      const intl = util.intl;
      return intl.string(util.t.ai4ym2);
    },
    getAnswer() {
      const intl = util.intl;
      const obj = { helpCenterUrl: HelpdeskUtilsDefault.getArticleURL(HelpdeskArticles.GUILD_BOOSTING_FAQ) };
      return intl.format(util.t["8zlqlD"], obj);
    }
  },
  {
    getQuestion() {
      const intl = util.intl;
      return intl.string(util.t.kMVGsC);
    },
    getAnswer() {
      const intl = util.intl;
      return intl.string(util.t["Vz/SCQ"]);
    }
  },
  {
    getQuestion() {
      const intl = util.intl;
      return intl.string(util.t.kYmXWF);
    },
    getAnswer() {
      const intl = util.intl;
      return intl.string(util.t["+OURPp"]);
    }
  },
  {
    getQuestion() {
      const intl = util.intl;
      return intl.string(util.t["LsX/vb"]);
    },
    getAnswer() {
      const intl = util.intl;
      return intl.string(util.t["3TeauK"]);
    }
  },
  {
    getQuestion() {
      const intl = util.intl;
      return intl.string(util.t.fRlnXU);
    },
    getAnswer() {
      const intl = util.intl;
      return intl.string(util.t.bTRacj);
    }
  },
  {
    getQuestion() {
      const intl = util.intl;
      return intl.string(util.t["8Mu5Q9"]);
    },
    getAnswer() {
      const intl = util.intl;
      return intl.string(util.t["2T5iPo"]);
    }
  },
  {
    getQuestion() {
      const intl = util.intl;
      return intl.string(util.t["6EN+TZ"]);
    },
    getAnswer() {
      const intl = util.intl;
      return intl.string(util.t.NZax1u);
    }
  },
  {
    getQuestion() {
      const intl = util.intl;
      return intl.string(util.t.f5B4EW);
    },
    getAnswer() {
      const intl = util.intl;
      return intl.string(util.t.Aje8Pb);
    }
  }
];
const ReactCompilerGating = fn(558);
const obj7 = { flexGrow: 0, flexShrink: 0, tintColor: nativeDefault.colors.ICON_MUTED };
const obj9 = {
  getQuestion() {
    const intl = util.intl;
    return intl.string(util.t.C4J8UB);
  },
  getAnswer() {
    const intl = util.intl;
    return intl.string(util.t.nhkk6k);
  }
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_boosting/native/marketing_redesign/GuildBoostingMarketingFaq.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = require("c").c(22);
  const tmp4 = closure_9();
  _require = tmp4;
  [first, dependencyMap] = noop.useState(null);
  ({ wrapper, content, heading } = tmp4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(tmp(1126).t.HPJ6Nj);
    cResult[0] = stringResult;
    let first1 = stringResult;
  } else {
    first1 = cResult[0];
  }
  if (cResult[1] !== tmp4.heading) {
    let obj2 = { style: heading, variant: "heading-xxl/bold", children: first1 };
    const tmp11 = closure_7(tmp(4886).Heading, obj2);
    cResult[1] = tmp4.heading;
    cResult[2] = tmp11;
    let tmp9 = tmp11;
  } else {
    tmp9 = cResult[2];
  }
  if (cResult[3] === first) {
    if (cResult[4] === tmp4.answer) {
      if (cResult[5] === tmp4.listItem) {
        if (cResult[6] === tmp4.question) {
          if (cResult[7] === tmp4.questionIcon) {
            if (cResult[8] === tmp4.questionIconExpanded) {
              if (cResult[9] === tmp4.questionWrapper) {
                if (cResult[10] === tmp4.questionWrapperExpanded) {
                  let tmp13 = cResult[11];
                }
                if (cResult[12] === tmp4.list) {
                  if (cResult[13] === tmp13) {
                    let tmp15 = cResult[14];
                  }
                  if (cResult[15] === tmp4.content) {
                    if (cResult[16] === tmp9) {
                      if (cResult[17] === tmp15) {
                        let tmp19 = cResult[18];
                      }
                      if (cResult[19] === tmp4.wrapper) {
                        if (cResult[20] === tmp19) {
                          let tmp23 = cResult[21];
                        }
                        return tmp23;
                      }
                      const obj3 = { style: wrapper, children: tmp19 };
                      const tmp26 = closure_7(View, obj3);
                      cResult[19] = tmp4.wrapper;
                      cResult[20] = tmp19;
                      cResult[21] = tmp26;
                      tmp23 = tmp26;
                    }
                  }
                  let obj4 = { style: content, children: null };
                  let items = [tmp9, tmp15];
                  obj4.children = items;
                  const tmp22 = closure_8(View, obj4);
                  cResult[15] = tmp4.content;
                  cResult[16] = tmp9;
                  cResult[17] = tmp15;
                  cResult[18] = tmp22;
                  tmp19 = tmp22;
                }
                let obj5 = { style: tmp12, children: tmp13 };
                const tmp18 = closure_7(View, obj5);
                cResult[12] = tmp4.list;
                cResult[13] = tmp13;
                cResult[14] = tmp18;
                tmp15 = tmp18;
              }
            }
          }
        }
      }
    }
  }
  const mapped = items1.map((getQuestion, index) => {
    closure_0 = index;
    let tmp = first === index;
    const obj = { style: closure_0.listItem, children: null };
    const items = [closure_0.questionWrapper, ];
    let questionWrapperExpanded = tmp;
    if (tmp) {
      questionWrapperExpanded = tmp4.questionWrapperExpanded;
    }
    const obj2 = {
      style: items,
      onPress() {
        return closure_2((arg0) => {
          let tmp = null;
          if (arg0 !== index) {
            tmp = index;
          }
          return tmp;
        });
      },
      accessibilityRole: "button",
      accessibilityState: { expanded: tmp },
      children: null
    };
    items[1] = questionWrapperExpanded;
    let str = "interactive-text-default";
    if (tmp) {
      str = "interactive-text-active";
    }
    items1 = [closure_1_7(closure_0(dependencyMap[12]).Text, { color: str, style: closure_0.question, variant: "text-md/normal", children: getQuestion.getQuestion() }), ];
    const obj4 = { source: first(dependencyMap[15]), style: null };
    const items2 = [closure_0.questionIcon, ];
    let questionIconExpanded = tmp;
    if (tmp) {
      questionIconExpanded = tmp4.questionIconExpanded;
    }
    items2[1] = questionIconExpanded;
    obj4.style = items2;
    items1[1] = closure_1_7(closure_0(dependencyMap[14]).Icon, obj4);
    obj2.children = items1;
    const items3 = [closure_1_8(closure_0(dependencyMap[13]).PressableOpacity, obj2), ];
    if (tmp) {
      const obj5 = { style: tmp4.answer, color: "interactive-text-active", variant: "text-sm/normal", children: getQuestion.getAnswer() };
      tmp = closure_1_7(tmp5(dependencyMap[12]).Text, obj5);
    }
    items3[1] = tmp;
    obj.children = items3;
    return closure_1_8(View, obj, index);
  });
  cResult[3] = first;
  cResult[4] = tmp4.answer;
  cResult[5] = tmp4.listItem;
  cResult[6] = tmp4.question;
  cResult[7] = tmp4.questionIcon;
  cResult[8] = tmp4.questionIconExpanded;
  cResult[9] = tmp4.questionWrapper;
  cResult[10] = tmp4.questionWrapperExpanded;
  cResult[11] = mapped;
  tmp13 = mapped;
  let obj = require("c");
}) : (() => {
  let tmp = closure_9();
  _require = tmp;
  [importDefault, dependencyMap] = noop.useState(null);
  let obj = { style: tmp.wrapper, children: null };
  let obj2 = { style: tmp.content, children: null };
  const obj3 = { style: tmp.heading, variant: "heading-xxl/bold", children: null };
  const intl = require("util").intl;
  obj3.children = intl.string(require("util").t.HPJ6Nj);
  let items = [closure_7(require("Text/Text").Heading, obj3), ];
  const tmp2 = _slicedToArray(noop.useState(null), 2);
  items[1] = closure_7(View, {
    style: tmp.list,
    children: items1.map((getQuestion, index) => {
      closure_0 = index;
      let tmp = closure_1 === index;
      const obj = { style: closure_0.listItem, children: null };
      const items = [closure_0.questionWrapper, ];
      let questionWrapperExpanded = tmp;
      if (tmp) {
        questionWrapperExpanded = tmp4.questionWrapperExpanded;
      }
      const obj2 = {
        style: items,
        onPress() {
          return dependencyMap((arg0) => {
            let tmp = null;
            if (arg0 !== index) {
              tmp = index;
            }
            return tmp;
          });
        },
        accessibilityRole: "button",
        accessibilityState: { expanded: tmp },
        children: null
      };
      items[1] = questionWrapperExpanded;
      let str = "interactive-text-default";
      if (tmp) {
        str = "interactive-text-active";
      }
      items1 = [closure_1_7(closure_0(4886).Text, { color: str, style: closure_0.question, variant: "text-md/normal", children: getQuestion.getQuestion() }), ];
      const obj4 = { source: _modDef13411, style: null };
      const items2 = [closure_0.questionIcon, ];
      let questionIconExpanded = tmp;
      if (tmp) {
        questionIconExpanded = tmp4.questionIconExpanded;
      }
      items2[1] = questionIconExpanded;
      obj4.style = items2;
      items1[1] = closure_1_7(closure_0(1188).Icon, obj4);
      obj2.children = items1;
      const items3 = [closure_1_8(closure_0(5909).PressableOpacity, obj2), ];
      if (tmp) {
        const obj5 = { style: tmp4.answer, color: "interactive-text-active", variant: "text-sm/normal", children: getQuestion.getAnswer() };
        tmp = closure_1_7(tmp5(4886).Text, obj5);
      }
      items3[1] = tmp;
      obj.children = items3;
      return closure_1_8(View, obj, index);
    })
  });
  obj2.children = items;
  obj.children = closure_8(View, obj2);
  return closure_7(View, obj);
});