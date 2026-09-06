// === Module 13604: GuildBoostingMarketingFaq ===

// Module 13604 (GuildBoostingMarketingFaq)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2024 */;
import _modDef13605 from "module_13605" /* 13605 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const HelpdeskArticles = fn(1074).HelpdeskArticles;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
fn(4560);
let createStyles = { wrapper: null, content: null, heading: null, list: null, listItem: null, questionWrapper: null, questionWrapperExpanded: null, question: null, questionIcon: null, questionIconExpanded: null, answer: null };
createStyles = { alignSelf: "center", marginTop: 50, marginBottom: fn(7401).VISIBILITY_OFFSET, maxWidth: 800, paddingHorizontal: 16, width: "100%" };
createStyles.wrapper = createStyles;
createStyles.content = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL, borderRadius: nativeDefault.radii.sm, paddingHorizontal: 16, paddingVertical: 28 };
createStyles.heading = { marginBottom: 20, textAlign: "center" };
let obj1 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL, borderRadius: nativeDefault.radii.sm, paddingHorizontal: 16, paddingVertical: 28 };
createStyles.list = { borderTopColor: nativeDefault.colors.BORDER_MUTED, borderTopWidth: 1 };
let obj2 = { borderTopColor: nativeDefault.colors.BORDER_MUTED, borderTopWidth: 1 };
createStyles.listItem = { borderBottomColor: nativeDefault.colors.BORDER_MUTED, borderBottomWidth: 1 };
createStyles.questionWrapper = { display: "flex", flexDirection: "row", paddingVertical: 10 };
createStyles.questionWrapperExpanded = { paddingBottom: 6 };
createStyles.question = { flexGrow: 1, flexShrink: 1, paddingRight: 8 };
const obj3 = { borderBottomColor: nativeDefault.colors.BORDER_MUTED, borderBottomWidth: 1 };
createStyles.questionIcon = { flexGrow: 0, flexShrink: 0, tintColor: nativeDefault.colors.ICON_MUTED };
const obj5 = { transform: null };
let items = [{ rotate: "45deg" }];
obj5.transform = items;
createStyles.questionIconExpanded = obj5;
createStyles.answer = { marginBottom: 10 };
let closure_9 = createStyles.createStyles(createStyles);
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
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_boosting/native/marketing_redesign/GuildBoostingMarketingFaq.tsx");

export default function GuildBoostingMarketingFaq() {
  let tmp = closure_9();
  _require = tmp;
  [importDefault, dependencyMap] = _slicedToArray(noop.useState(null), 2);
  let obj = { style: tmp.wrapper, children: null };
  obj = { style: tmp.content, children: null };
  obj = { style: tmp.heading, variant: "heading-xxl/bold", children: null };
  const intl = require("util").intl;
  obj.children = intl.string(require("util").t.HPJ6Nj);
  let items = [closure_7(require("Text/Text").Heading, obj), ];
  const tmp2 = _slicedToArray(noop.useState(null), 2);
  items[1] = closure_7(View, {
    style: tmp.list,
    children: items1.map((getQuestion, index) => {
      closure_0 = index;
      let tmp = closure_1 === index;
      let obj = { style: closure_0.listItem, children: null };
      const items = [closure_0.questionWrapper, ];
      let questionWrapperExpanded = tmp;
      if (tmp) {
        questionWrapperExpanded = tmp4.questionWrapperExpanded;
      }
      obj = {
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
      obj = { color: str, style: tmp4.question, variant: "text-md/normal", children: getQuestion.getQuestion() };
      items1 = [closure_1_7(closure_0(4556).Text, obj), ];
      const obj1 = { source: _modDef13605, style: null };
      const items2 = [closure_0.questionIcon, ];
      let questionIconExpanded = tmp;
      if (tmp) {
        questionIconExpanded = tmp4.questionIconExpanded;
      }
      items2[1] = questionIconExpanded;
      obj1.style = items2;
      items1[1] = closure_1_7(closure_0(1178).Icon, obj1);
      obj.children = items1;
      const items3 = [closure_1_8(closure_0(5123).PressableOpacity, obj), ];
      if (tmp) {
        const obj2 = { style: tmp4.answer, color: "interactive-text-active", variant: "text-sm/normal", children: getQuestion.getAnswer() };
        tmp = closure_1_7(tmp5(4556).Text, obj2);
      }
      items3[1] = tmp;
      obj.children = items3;
      return closure_1_8(View, obj, index);
    })
  });
  obj.children = items;
  obj.children = closure_8(View, obj);
  return closure_7(View, obj);
};