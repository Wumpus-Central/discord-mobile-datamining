// === Module 13427: GuildBoostingMarketingTopPerksCards ===

// Module 13427 (GuildBoostingMarketingTopPerksCards)
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import Text_Text from "Text/Text" /* 4892 */;
import LottieAnimationViewDefault from "LottieAnimationView" /* 5927 */;
import _modDef13428 from "module_13428" /* 13428 */;
import _mod13429 from "module_13429" /* 13429 */;
import _modDef13430 from "module_13430" /* 13430 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4885 */;

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ Image: c3, View: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4896);
let obj2 = { wrapper: { marginTop: 50 }, heading: { marginBottom: 20, textAlign: "center" }, scrollerContent: { alignItems: "stretch", flexDirection: "row", justifyContent: "center", minWidth: "100%", paddingHorizontal: 16, paddingBottom: 16 }, card: { backgroundColor: nativeDefault.colors.CARD_BACKGROUND_DEFAULT, borderColor: nativeDefault.colors.BORDER_SUBTLE, borderWidth: 1, borderRadius: nativeDefault.radii.lg, display: "flex", alignItems: "center", justifyContent: "center", marginRight: 16, padding: 24, width: 324 }, cardGraphic: null, cardLast: null, cardHeading: null, cardBody: null };
let size = { borderRadius: nativeDefault.radii.xs, height: 128, marginBottom: 16, overflow: "hidden", width: 211 };
obj2.cardGraphic = size;
obj2.cardLast = { marginRight: 0 };
obj2.cardHeading = { marginBottom: 4, textAlign: "center" };
obj2.cardBody = { textAlign: "center" };
let closure_8 = createStyles.createStyles(obj2);
let items = [
  {
    getHeadingCopy() {
      const intl = util.intl;
      return intl.string(util.t.y4ft4D);
    },
    getBodyCopy() {
      const intl = util.intl;
      return intl.string(util.t.HTvLGu);
    },
    getGraphic(style) {
      return timestampProducer(React3, { style, source: _modDef13428 });
    }
  },
  {
    getHeadingCopy() {
      const intl = util.intl;
      return intl.string(util.t.PbAyub);
    },
    getBodyCopy() {
      const intl = util.intl;
      return intl.string(util.t.wOYbTv);
    },
    getGraphic(style) {
      const obj = { source: _mod13429, autoPlay: !AccessibilityStore.useReducedMotion, style };
      return timestampProducer(LottieAnimationViewDefault, obj);
    }
  },
  {
    getHeadingCopy() {
      const intl = util.intl;
      return intl.string(util.t["/bX4Jn"]);
    },
    getBodyCopy() {
      const intl = util.intl;
      return intl.string(util.t.yCjoUC);
    },
    getGraphic(style) {
      return timestampProducer(React3, { style, source: _modDef13430 });
    }
  }
];
const ReactCompilerGating = fn(558);
let obj3 = { backgroundColor: nativeDefault.colors.CARD_BACKGROUND_DEFAULT, borderColor: nativeDefault.colors.BORDER_SUBTLE, borderWidth: 1, borderRadius: nativeDefault.radii.lg, display: "flex", alignItems: "center", justifyContent: "center", marginRight: 16, padding: 24, width: 324 };
let obj4 = {
  getHeadingCopy() {
    const intl = util.intl;
    return intl.string(util.t.y4ft4D);
  },
  getBodyCopy() {
    const intl = util.intl;
    return intl.string(util.t.HTvLGu);
  },
  getGraphic(style) {
    return timestampProducer(React3, { style, source: _modDef13428 });
  }
};
size = fn(2);
const result = size.fileFinishedImporting("modules/guild_boosting/native/marketing_redesign/GuildBoostingMarketingTopPerksCards.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = require("c").c(16);
  const tmp4 = closure_8();
  _require = tmp4;
  ({ wrapper, heading } = tmp4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(tmp(1126).t.aGdB3E);
    cResult[0] = stringResult;
    let first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp4.heading) {
    let obj2 = { style: heading, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: first };
    const tmp9 = closure_6(tmp(4892).Heading, obj2);
    cResult[1] = tmp4.heading;
    cResult[2] = tmp9;
    let tmp7 = tmp9;
  } else {
    tmp7 = cResult[2];
  }
  if (cResult[3] === tmp4.card) {
    if (cResult[4] === tmp4.cardBody) {
      if (cResult[5] === tmp4.cardGraphic) {
        if (cResult[6] === tmp4.cardHeading) {
          if (cResult[7] === tmp4.cardLast) {
            let tmp11 = cResult[8];
          }
          if (cResult[9] === tmp4.scrollerContent) {
            if (cResult[10] === tmp11) {
              let tmp13 = cResult[11];
            }
            if (cResult[12] === tmp4.wrapper) {
              if (cResult[13] === tmp7) {
                if (cResult[14] === tmp13) {
                  let tmp17 = cResult[15];
                }
                return tmp17;
              }
            }
            const obj3 = { style: wrapper, children: null };
            items = [tmp7, tmp13];
            obj3.children = items;
            const tmp20 = closure_7(closure_4, obj3);
            cResult[12] = tmp4.wrapper;
            cResult[13] = tmp7;
            cResult[14] = tmp13;
            cResult[15] = tmp20;
            tmp17 = tmp20;
          }
          const obj4 = { itemCount: items.length, cardWidth: 324, cardMarginRight: 16, contentContainerStyle: tmp10, children: tmp11 };
          const tmp16 = closure_6(tmp(12242).MarketingCardsScroller, obj4);
          cResult[9] = tmp4.scrollerContent;
          cResult[10] = tmp11;
          cResult[11] = tmp16;
          tmp13 = tmp16;
        }
      }
    }
  }
  const mapped = items.map((getGraphic, index) => {
    items = [card.card, ];
    let cardLast = index === items.length - 1;
    if (cardLast) {
      cardLast = card.cardLast;
    }
    const obj = { style: items, children: null };
    items[1] = cardLast;
    const items1 = [getGraphic.getGraphic(card.cardGraphic), timestampProducer(Text_Text.Heading, { style: card.cardHeading, variant: "heading-lg/extrabold", color: "mobile-text-heading-primary", children: getGraphic.getHeadingCopy() }), ];
    const obj2 = { style: card.cardHeading, variant: "heading-lg/extrabold", color: "mobile-text-heading-primary", children: getGraphic.getHeadingCopy() };
    items1[2] = timestampProducer(Text_Text.Text, { style: card.cardBody, variant: "text-sm/normal", color: "text-default", children: getGraphic.getBodyCopy() });
    obj.children = items1;
    return React5(React4, obj, index);
  });
  cResult[3] = tmp4.card;
  cResult[4] = tmp4.cardBody;
  cResult[5] = tmp4.cardGraphic;
  cResult[6] = tmp4.cardHeading;
  cResult[7] = tmp4.cardLast;
  cResult[8] = mapped;
  tmp11 = mapped;
  let obj = require("c");
}) : (() => {
  const tmp = closure_8();
  _require = tmp;
  let obj = { style: tmp.wrapper, children: null };
  let obj2 = { style: tmp.heading, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
  const intl = require("util").intl;
  obj2.children = intl.string(require("util").t.aGdB3E);
  items = [closure_6(require("Text/Text").Heading, obj2), ];
  items[1] = closure_6(require("MarketingCardsScroller").MarketingCardsScroller, {
    itemCount: items.length,
    cardWidth: 324,
    cardMarginRight: 16,
    contentContainerStyle: tmp.scrollerContent,
    children: items.map((getGraphic, index) => {
      items = [card.card, ];
      let cardLast = index === items.length - 1;
      if (cardLast) {
        cardLast = card.cardLast;
      }
      const obj = { style: items, children: null };
      items[1] = cardLast;
      const items1 = [getGraphic.getGraphic(card.cardGraphic), timestampProducer(Text_Text.Heading, { style: card.cardHeading, variant: "heading-lg/extrabold", color: "mobile-text-heading-primary", children: getGraphic.getHeadingCopy() }), ];
      const obj2 = { style: card.cardHeading, variant: "heading-lg/extrabold", color: "mobile-text-heading-primary", children: getGraphic.getHeadingCopy() };
      items1[2] = timestampProducer(Text_Text.Text, { style: card.cardBody, variant: "text-sm/normal", color: "text-default", children: getGraphic.getBodyCopy() });
      obj.children = items1;
      return React5(React4, obj, index);
    })
  });
  obj.children = items;
  return closure_7(closure_4, obj);
});