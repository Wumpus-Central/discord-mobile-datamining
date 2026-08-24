// discord_app/modules/guild_boosting/native/marketing_redesign/GuildBoostingMarketingFaq.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../../intl/index.native.tsx";
import combinedDefault from "../../../../utils/HelpdeskUtils.tsx";
import closure_3 from "../../../../../_runtime/metro/00032__slicedToArray.js";
import closure_4 from "../../../../../_runtime/00019_noop.js";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import { HelpdeskArticles } from "../../../../Constants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
({ jsx: error, jsxs: closure_8 } = jsxProd);
createCacheKey = { wrapper: null, content: null, heading: null, list: null, listItem: null, questionWrapper: null, questionWrapperExpanded: null, question: null, questionIcon: null, questionIconExpanded: null, answer: null };
createCacheKey = { alignSelf: "center", marginTop: 50, marginBottom: require("GuildBoostingMarketingPersistentCta").VISIBILITY_OFFSET, maxWidth: 800, paddingHorizontal: 16, width: "100%" };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_NORMAL, borderRadius: ThemesDefault.radii.sm, paddingHorizontal: 16, paddingVertical: 28 };
createCacheKey[2] = { marginBottom: 20, textAlign: "center" };
let obj1 = { backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_NORMAL, borderRadius: ThemesDefault.radii.sm, paddingHorizontal: 16, paddingVertical: 28 };
createCacheKey[3] = { borderTopColor: ThemesDefault.colors.BORDER_MUTED, borderTopWidth: 1 };
let obj2 = { borderTopColor: ThemesDefault.colors.BORDER_MUTED, borderTopWidth: 1 };
createCacheKey[4] = { borderBottomColor: ThemesDefault.colors.BORDER_MUTED, borderBottomWidth: 1 };
createCacheKey[5] = { display: "flex", flexDirection: "row", paddingVertical: 10 };
createCacheKey[6] = { paddingBottom: 6 };
createCacheKey[7] = { flexGrow: 1, flexShrink: 1, paddingRight: 8 };
const obj3 = { borderBottomColor: ThemesDefault.colors.BORDER_MUTED, borderBottomWidth: 1 };
createCacheKey[8] = { flexGrow: 0, flexShrink: 0, tintColor: ThemesDefault.colors.ICON_MUTED };
let items = [{ rotate: "45deg" }];
createCacheKey[9] = { transform: items };
createCacheKey[10] = { marginBottom: 10 };
let closure_9 = createCacheKey.createStyles(createCacheKey);
let items1 = [
  {
    getQuestion() {
      const intl = getSystemLocale.intl;
      return intl.string(getSystemLocale.t.C4J8UB);
    },
    getAnswer() {
      const intl = getSystemLocale.intl;
      return intl.string(getSystemLocale.t.nhkk6k);
    }
  },
  {
    getQuestion() {
      const intl = getSystemLocale.intl;
      return intl.string(getSystemLocale.t.ai4ym2);
    },
    getAnswer() {
      const intl = getSystemLocale.intl;
      const obj = { helpCenterUrl: combinedDefault.getArticleURL(HelpdeskArticles.GUILD_BOOSTING_FAQ) };
      return intl.format(getSystemLocale.t["8zlqlD"], obj);
    }
  },
  {
    getQuestion() {
      const intl = getSystemLocale.intl;
      return intl.string(getSystemLocale.t.kMVGsC);
    },
    getAnswer() {
      const intl = getSystemLocale.intl;
      return intl.string(getSystemLocale.t["Vz/SCQ"]);
    }
  },
  {
    getQuestion() {
      const intl = getSystemLocale.intl;
      return intl.string(getSystemLocale.t.kYmXWF);
    },
    getAnswer() {
      const intl = getSystemLocale.intl;
      return intl.string(getSystemLocale.t["+OURPp"]);
    }
  },
  {
    getQuestion() {
      const intl = getSystemLocale.intl;
      return intl.string(getSystemLocale.t["LsX/vb"]);
    },
    getAnswer() {
      const intl = getSystemLocale.intl;
      return intl.string(getSystemLocale.t["3TeauK"]);
    }
  },
  {
    getQuestion() {
      const intl = getSystemLocale.intl;
      return intl.string(getSystemLocale.t.fRlnXU);
    },
    getAnswer() {
      const intl = getSystemLocale.intl;
      return intl.string(getSystemLocale.t.bTRacj);
    }
  },
  {
    getQuestion() {
      const intl = getSystemLocale.intl;
      return intl.string(getSystemLocale.t["8Mu5Q9"]);
    },
    getAnswer() {
      const intl = getSystemLocale.intl;
      return intl.string(getSystemLocale.t["2T5iPo"]);
    }
  },
  {
    getQuestion() {
      const intl = getSystemLocale.intl;
      return intl.string(getSystemLocale.t["6EN+TZ"]);
    },
    getAnswer() {
      const intl = getSystemLocale.intl;
      return intl.string(getSystemLocale.t.NZax1u);
    }
  },
  {
    getQuestion() {
      const intl = getSystemLocale.intl;
      return intl.string(getSystemLocale.t.f5B4EW);
    },
    getAnswer() {
      const intl = getSystemLocale.intl;
      return intl.string(getSystemLocale.t.Aje8Pb);
    }
  }
];
const obj4 = { flexGrow: 0, flexShrink: 0, tintColor: ThemesDefault.colors.ICON_MUTED };
const obj5 = {
  getQuestion() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.C4J8UB);
  },
  getAnswer() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.nhkk6k);
  }
};
const result = require("set").fileFinishedImporting("modules/guild_boosting/native/marketing_redesign/GuildBoostingMarketingFaq.tsx");

export default function GuildBoostingMarketingFaq() {
  let tmp = callback4();
  const _require = tmp;
  [importDefault, dependencyMap] = callback(React.useState(null), 2);
  let obj = { style: tmp.wrapper, children: null };
  obj = { style: tmp.content, children: null };
  obj = { style: tmp.heading, variant: "heading-xxl/bold", children: null };
  const intl = require("../../../../intl/index.native.tsx").intl;
  obj[2] = intl.string(require("../../../../intl/index.native.tsx").t.HPJ6Nj);
  let items = [callback2(require("../../../../design/components/Text/native/Text.tsx").Heading, obj), ];
  const tmp2 = callback(React.useState(null), 2);
  items[1] = callback2(View, {
    style: tmp.list,
    children: items1.map((getQuestion) => {
      const lib = arg1;
      let tmp = closure_1 === arg1;
      let obj = { style: lib.listItem, children: null };
      const items = [lib.questionWrapper, ];
      let questionWrapperExpanded = tmp;
      if (tmp) {
        questionWrapperExpanded = tmp4.questionWrapperExpanded;
      }
      obj = {
        style: items,
        onPress() {
          return closure_1_2((arg0) => {
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
      items1 = [closure_1_7(lib(closure_1_2[10]).Text, obj), ];
      obj1 = { source: closure_1_1(closure_1_2[13]), style: null };
      const items2 = [lib.questionIcon, ];
      let questionIconExpanded = tmp;
      if (tmp) {
        questionIconExpanded = tmp4.questionIconExpanded;
      }
      items2[1] = questionIconExpanded;
      obj1[1] = items2;
      items1[1] = closure_1_7(lib(closure_1_2[12]).Icon, obj1);
      obj[4] = items1;
      const items3 = [closure_1_8(lib(closure_1_2[11]).PressableOpacity, obj), ];
      if (tmp) {
        const obj2 = { style: null, color: "interactive-text-active", variant: "text-sm/normal", children: null };
        obj2[0] = tmp4.answer;
        obj2[3] = getQuestion.getAnswer();
        tmp = tmp7(tmp5(tmp6[10]).Text, obj2);
      }
      items3[1] = tmp;
      obj[1] = items3;
      return closure_1_8(closure_1_5, obj, arg1);
    })
  });
  obj[1] = items;
  obj[1] = callback3(View, obj);
  return callback2(View, obj);
};