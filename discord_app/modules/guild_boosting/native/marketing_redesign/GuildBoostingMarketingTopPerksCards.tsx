// === Module 13408: GuildBoostingMarketingTopPerksCards ===

// Module 13408 (GuildBoostingMarketingTopPerksCards)
import nativeDefault from "native" /* 587 */;
import intl2 from "intl" /* 1126 */;
import Text_Text from "Text/Text" /* 4886 */;
import LottieAnimationViewDefault from "LottieAnimationView" /* 5920 */;
import AssetRegistryDefault from "AssetRegistry" /* 13409 */;
import _mod13410 from "module_13410" /* 13410 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 13411 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AccessibilityStore from "AccessibilityStore" /* 4879 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let c3;
let closure_4;
let metroImportDefault;
let metroRequire;
let obj2;
let size;
({ Image: c3, View: closure_4 } = react_native);
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { wrapper: { marginTop: 50 }, heading: { marginBottom: 20, textAlign: "center" }, scrollerContent: { alignItems: "stretch", flexDirection: "row", justifyContent: "center", minWidth: "100%", paddingHorizontal: 16, paddingBottom: 16 }, card: obj2, cardGraphic: size, cardLast: { marginRight: 0 }, cardHeading: { marginBottom: 4, textAlign: "center" }, cardBody: { textAlign: "center" } };
obj2 = { backgroundColor: nativeDefault.colors.CARD_BACKGROUND_DEFAULT, borderColor: nativeDefault.colors.BORDER_SUBTLE, borderWidth: 1, borderRadius: nativeDefault.radii.lg, display: "flex", alignItems: "center", justifyContent: "center", marginRight: 16, padding: 24, width: 324 };
createStyles = createStyles.createStyles;
size = { borderRadius: nativeDefault.radii.xs, height: 128, marginBottom: 16, overflow: "hidden", width: 211 };
let closure_8 = createStyles(obj);
let obj3 = {
  getHeadingCopy() {
    const intl = intl2.intl;
    return intl.string(intl2.t.y4ft4D);
  },
  getBodyCopy() {
    const intl = intl2.intl;
    return intl.string(intl2.t.HTvLGu);
  },
  getGraphic(style) {
    const obj = { style, source: AssetRegistryDefault };
    return metroRequire(_false, obj);
  }
};
let items = [
  obj3,
  {
    getHeadingCopy() {
      const intl = intl2.intl;
      return intl.string(intl2.t.PbAyub);
    },
    getBodyCopy() {
      const intl = intl2.intl;
      return intl.string(intl2.t.wOYbTv);
    },
    getGraphic(style) {
      const obj = { source: _mod13410, autoPlay: !AccessibilityStore.useReducedMotion, style };
      const tmp = LottieAnimationViewDefault;
      return metroRequire(tmp, obj);
    }
  },
  {
    getHeadingCopy() {
      const intl = intl2.intl;
      return intl.string(intl2.t["/bX4Jn"]);
    },
    getBodyCopy() {
      const intl = intl2.intl;
      return intl.string(intl2.t.yCjoUC);
    },
    getGraphic(style) {
      const obj = { style, source: AssetRegistryDefault2 };
      return metroRequire(_false, obj);
    }
  }
];
const tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let card;
  let first;
  let heading;
  let tmp7;
  let wrapper;
  let obj = require("react");
  const cResult = obj.c(16);
  const tmp4 = closure_8();
  _require = tmp4;
  ({ wrapper, heading } = tmp4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(require("intl").t.aGdB3E);
    cResult[0] = stringResult;
    first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp4.heading) {
    let obj2 = { style: heading, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: first };
    const tmp9 = closure_6(require("Text/Text").Heading, obj2);
    cResult[1] = tmp4.heading;
    cResult[2] = tmp9;
    tmp7 = tmp9;
  } else {
    tmp7 = cResult[2];
  }
  if (cResult[3] === tmp4.card) {
    if (cResult[4] === tmp4.cardBody) {
      if (cResult[5] === tmp4.cardGraphic) {
        if (cResult[6] === tmp4.cardHeading) {
          let tmp11;
          if (cResult[7] === tmp4.cardLast) {
            tmp11 = cResult[8];
          }
          if (cResult[9] === tmp4.scrollerContent) {
            let tmp13;
            if (cResult[10] === tmp11) {
              tmp13 = cResult[11];
            }
            if (cResult[12] === tmp4.wrapper) {
              if (cResult[13] === tmp7) {
                let tmp17;
                if (cResult[14] === tmp13) {
                  tmp17 = cResult[15];
                }
                return tmp17;
              }
            }
            let obj3 = { style: wrapper, children: items };
            items = [tmp7, tmp13];
            const tmp20 = closure_7(closure_4, obj3);
            cResult[12] = tmp4.wrapper;
            cResult[13] = tmp7;
            cResult[14] = tmp13;
            cResult[15] = tmp20;
            tmp17 = tmp20;
          }
          const obj4 = { itemCount: items.length, cardWidth: 324, cardMarginRight: 16, contentContainerStyle: tmp10, children: tmp11 };
          const tmp16 = closure_6(require("MarketingCardsScroller").MarketingCardsScroller, obj4);
          cResult[9] = tmp4.scrollerContent;
          cResult[10] = tmp11;
          cResult[11] = tmp16;
          tmp13 = tmp16;
        }
      }
    }
  }
  const mapped = items.map((getGraphic, index) => {
    let items1;
    items = [card.card, ];
    const cardLast = index === items.length - 1 && card.cardLast;
    const obj = { style: items, children: items1 };
    items[1] = cardLast;
    items1 = [getGraphic.getGraphic(card.cardGraphic), , ];
    const obj2 = { style: card.cardHeading, variant: "heading-lg/extrabold", color: "mobile-text-heading-primary", children: getGraphic.getHeadingCopy() };
    const Heading = Text_Text.Heading;
    items1[1] = metroRequire(Heading, obj2);
    const obj3 = { style: card.cardBody, variant: "text-sm/normal", color: "text-default", children: getGraphic.getBodyCopy() };
    const Text = Text_Text.Text;
    items1[2] = metroRequire(Text, obj3);
    return metroImportDefault(React3, obj, index);
  });
  cResult[3] = tmp4.card;
  cResult[4] = tmp4.cardBody;
  cResult[5] = tmp4.cardGraphic;
  cResult[6] = tmp4.cardHeading;
  cResult[7] = tmp4.cardLast;
  cResult[8] = mapped;
  tmp11 = mapped;
}) : (() => {
  let card;
  let intl;
  const tmp = closure_8();
  _require = tmp;
  let obj = { style: tmp.wrapper, children: items };
  let obj2 = { style: tmp.heading, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: intl.string(require("intl").t.aGdB3E) };
  let Heading = require("Text/Text").Heading;
  intl = require("intl").intl;
  items = [closure_6(Heading, obj2), ];
  let obj3 = {
    itemCount: items.length,
    cardWidth: 324,
    cardMarginRight: 16,
    contentContainerStyle: tmp.scrollerContent,
    children: items.map((getGraphic, index) => {
      let items1;
      items = [card.card, ];
      const cardLast = index === items.length - 1 && card.cardLast;
      const obj = { style: items, children: items1 };
      items[1] = cardLast;
      items1 = [getGraphic.getGraphic(card.cardGraphic), , ];
      const obj2 = { style: card.cardHeading, variant: "heading-lg/extrabold", color: "mobile-text-heading-primary", children: getGraphic.getHeadingCopy() };
      const Heading = Text_Text.Heading;
      items1[1] = metroRequire(Heading, obj2);
      const obj3 = { style: card.cardBody, variant: "text-sm/normal", color: "text-default", children: getGraphic.getBodyCopy() };
      const Text = Text_Text.Text;
      items1[2] = metroRequire(Text, obj3);
      return metroImportDefault(React3, obj, index);
    })
  };
  const MarketingCardsScroller = require("MarketingCardsScroller").MarketingCardsScroller;
  items[1] = closure_6(MarketingCardsScroller, obj3);
  return closure_7(closure_4, obj);
});
size = size_mod;
const result = size.fileFinishedImporting("modules/guild_boosting/native/marketing_redesign/GuildBoostingMarketingTopPerksCards.tsx");

export default tmp6;