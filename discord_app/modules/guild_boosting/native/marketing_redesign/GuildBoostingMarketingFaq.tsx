// discord_app/modules/guild_boosting/native/marketing_redesign/GuildBoostingMarketingFaq.tsx
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import { View } from "get ActivityIndicator";
import { HelpdeskArticles } from "ME";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let error;
let metroImportAll;
let require = arg1;
({ jsx: error, jsxs: metroImportAll } = jsxProd);
createCacheKey = { wrapper: null, content: null, heading: null, list: null, listItem: null, questionWrapper: null, questionWrapperExpanded: null, question: null, questionIcon: null, questionIconExpanded: null, answer: null };
createCacheKey = { alignSelf: "center", marginTop: 50, marginBottom: require("GuildBoostingMarketingPersistentCta").VISIBILITY_OFFSET, maxWidth: 800, paddingHorizontal: 16, width: "100%" };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { backgroundColor: require("Themes").colors.BACKGROUND_MOD_NORMAL, borderRadius: require("Themes").radii.sm, paddingHorizontal: 16, paddingVertical: 28 };
createCacheKey[2] = { marginBottom: 20, textAlign: "center" };
let obj1 = { backgroundColor: require("Themes").colors.BACKGROUND_MOD_NORMAL, borderRadius: require("Themes").radii.sm, paddingHorizontal: 16, paddingVertical: 28 };
createCacheKey[3] = { borderTopColor: require("Themes").colors.BORDER_MUTED, borderTopWidth: 1 };
let obj2 = { borderTopColor: require("Themes").colors.BORDER_MUTED, borderTopWidth: 1 };
createCacheKey[4] = { borderBottomColor: require("Themes").colors.BORDER_MUTED, borderBottomWidth: 1 };
createCacheKey[5] = { display: "flex", flexDirection: "row", paddingVertical: 10 };
createCacheKey[6] = { paddingBottom: 6 };
createCacheKey[7] = { flexGrow: 1, flexShrink: 1, paddingRight: 8 };
const obj3 = { borderBottomColor: require("Themes").colors.BORDER_MUTED, borderBottomWidth: 1 };
createCacheKey[8] = { flexGrow: 0, flexShrink: 0, tintColor: require("Themes").colors.ICON_MUTED };
let items = [{ rotate: "45deg" }];
createCacheKey[9] = { transform: items };
createCacheKey[10] = { marginBottom: 10 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let items1 = [
  {
    getQuestion() {
      const intl = require(1236) /* getSystemLocale */.intl;
      return intl.string(require(1236) /* getSystemLocale */.t.C4J8UB);
    },
    getAnswer() {
      const intl = require(1236) /* getSystemLocale */.intl;
      return intl.string(require(1236) /* getSystemLocale */.t.nhkk6k);
    }
  },
  {
    getQuestion() {
      const intl = require(1236) /* getSystemLocale */.intl;
      return intl.string(require(1236) /* getSystemLocale */.t.ai4ym2);
    },
    getAnswer() {
      const intl = require(1236) /* getSystemLocale */.intl;
      const obj = { helpCenterUrl: null };
      obj[0] = importDefault(1945).getArticleURL(HelpdeskArticles.GUILD_BOOSTING_FAQ);
      return intl.format(require(1236) /* getSystemLocale */.t["8zlqlD"], obj);
    }
  },
  {
    getQuestion() {
      const intl = require(1236) /* getSystemLocale */.intl;
      return intl.string(require(1236) /* getSystemLocale */.t.kMVGsC);
    },
    getAnswer() {
      const intl = require(1236) /* getSystemLocale */.intl;
      return intl.string(require(1236) /* getSystemLocale */.t["Vz/SCQ"]);
    }
  },
  {
    getQuestion() {
      const intl = require(1236) /* getSystemLocale */.intl;
      return intl.string(require(1236) /* getSystemLocale */.t.kYmXWF);
    },
    getAnswer() {
      const intl = require(1236) /* getSystemLocale */.intl;
      return intl.string(require(1236) /* getSystemLocale */.t["+OURPp"]);
    }
  },
  {
    getQuestion() {
      const intl = require(1236) /* getSystemLocale */.intl;
      return intl.string(require(1236) /* getSystemLocale */.t["LsX/vb"]);
    },
    getAnswer() {
      const intl = require(1236) /* getSystemLocale */.intl;
      return intl.string(require(1236) /* getSystemLocale */.t["3TeauK"]);
    }
  },
  {
    getQuestion() {
      const intl = require(1236) /* getSystemLocale */.intl;
      return intl.string(require(1236) /* getSystemLocale */.t.fRlnXU);
    },
    getAnswer() {
      const intl = require(1236) /* getSystemLocale */.intl;
      return intl.string(require(1236) /* getSystemLocale */.t.bTRacj);
    }
  },
  {
    getQuestion() {
      const intl = require(1236) /* getSystemLocale */.intl;
      return intl.string(require(1236) /* getSystemLocale */.t["8Mu5Q9"]);
    },
    getAnswer() {
      const intl = require(1236) /* getSystemLocale */.intl;
      return intl.string(require(1236) /* getSystemLocale */.t["2T5iPo"]);
    }
  },
  {
    getQuestion() {
      const intl = require(1236) /* getSystemLocale */.intl;
      return intl.string(require(1236) /* getSystemLocale */.t["6EN+TZ"]);
    },
    getAnswer() {
      const intl = require(1236) /* getSystemLocale */.intl;
      return intl.string(require(1236) /* getSystemLocale */.t.NZax1u);
    }
  },
  {
    getQuestion() {
      const intl = require(1236) /* getSystemLocale */.intl;
      return intl.string(require(1236) /* getSystemLocale */.t.f5B4EW);
    },
    getAnswer() {
      const intl = require(1236) /* getSystemLocale */.intl;
      return intl.string(require(1236) /* getSystemLocale */.t.Aje8Pb);
    }
  }
];
const obj4 = { flexGrow: 0, flexShrink: 0, tintColor: require("Themes").colors.ICON_MUTED };
const obj5 = {
  getQuestion() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.C4J8UB);
  },
  getAnswer() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.nhkk6k);
  }
};
const result = require("get ActivityIndicator").fileFinishedImporting("modules/guild_boosting/native/marketing_redesign/GuildBoostingMarketingFaq.tsx");

export default function GuildBoostingMarketingFaq() {
  let dependencyMap;
  let importDefault;
  let tmp = createCacheKey();
  const require = tmp;
  [importDefault, dependencyMap] = callback(React.useState(null), 2);
  let obj = { style: tmp.wrapper, children: null };
  obj = { style: tmp.content, children: null };
  obj = { style: tmp.heading, variant: "heading-xxl/bold", children: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[2] = intl.string(require(1236) /* getSystemLocale */.t.HPJ6Nj);
  let items = [callback2(require(4189) /* Text */.Heading, obj), ];
  const tmp2 = callback(React.useState(null), 2);
  items[1] = callback2(View, {
    style: tmp.list,
    children: items1.map((getQuestion) => {
      let tmp = arg1;
      tmp = closure_1 === arg1;
      let obj = { style: tmp.listItem, children: null };
      const items = [tmp.questionWrapper, ];
      let questionWrapperExpanded = tmp;
      if (tmp) {
        questionWrapperExpanded = tmp4.questionWrapperExpanded;
      }
      obj = {
        style: items,
        onPress() {
          return outer1_2((arg0) => {
            let tmp = null;
            if (arg0 !== closure_0) {
              tmp = closure_0;
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
      const items1 = [outer1_7(tmp(outer1_2[10]).Text, obj), ];
      const obj1 = { source: null, style: null };
      obj1[0] = outer1_1(outer1_2[13]);
      const items2 = [tmp.questionIcon, ];
      let questionIconExpanded = tmp;
      if (tmp) {
        questionIconExpanded = tmp4.questionIconExpanded;
      }
      items2[1] = questionIconExpanded;
      obj1[1] = items2;
      items1[1] = outer1_7(tmp(outer1_2[12]).Icon, obj1);
      obj[4] = items1;
      const items3 = [outer1_8(tmp(outer1_2[11]).PressableOpacity, obj), ];
      if (tmp) {
        const obj2 = { style: null, color: "interactive-text-active", variant: "text-sm/normal", children: null };
        obj2[0] = tmp4.answer;
        obj2[3] = getQuestion.getAnswer();
        tmp = tmp7(tmp5(tmp6[10]).Text, obj2);
      }
      items3[1] = tmp;
      obj[1] = items3;
      return outer1_8(outer1_5, obj, arg1);
    })
  });
  obj[1] = items;
  obj[1] = callback3(View, obj);
  return callback2(View, obj);
};