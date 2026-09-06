// === Module 13600: GuildBoostingMarketingTopPerksCards ===

// Module 13600 (GuildBoostingMarketingTopPerksCards)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import Text_Text from "Text/Text" /* 4556 */;
import LottieAnimationViewDefault from "LottieAnimationView" /* 5529 */;
import _modDef13601 from "module_13601" /* 13601 */;
import _mod13602 from "module_13602" /* 13602 */;
import _modDef13603 from "module_13603" /* 13603 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4552 */;

require = fn;
get_ActivityIndicator = fn(17);
({ Image: c3, View: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
fn(4560);
let createStyles = { wrapper: { marginTop: 50 }, heading: { marginBottom: 20, textAlign: "center" }, scrollerContent: { alignItems: "stretch", flexDirection: "row", justifyContent: "center", minWidth: "100%", paddingHorizontal: 16, paddingBottom: 16 }, card: null, cardGraphic: null, cardLast: null, cardHeading: null, cardBody: null };
createStyles = { backgroundColor: nativeDefault.colors.CARD_BACKGROUND_DEFAULT, borderColor: nativeDefault.colors.BORDER_SUBTLE, borderWidth: 1, borderRadius: nativeDefault.radii.lg, display: "flex", alignItems: "center", justifyContent: "center", marginRight: 16, padding: 24, width: 324 };
createStyles.card = createStyles;
let size = { borderRadius: nativeDefault.radii.xs, height: 128, marginBottom: 16, overflow: "hidden", width: 211 };
createStyles.cardGraphic = size;
createStyles.cardLast = { marginRight: 0 };
createStyles.cardHeading = { marginBottom: 4, textAlign: "center" };
createStyles.cardBody = { textAlign: "center" };
let closure_8 = createStyles.createStyles(createStyles);
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
      return timestampProducer(React3, { style, source: _modDef13601 });
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
      const obj = { source: _mod13602, autoPlay: !AccessibilityStore.useReducedMotion, style };
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
      return timestampProducer(React3, { style, source: _modDef13603 });
    }
  }
];
size = fn(2);
const result = size.fileFinishedImporting("modules/guild_boosting/native/marketing_redesign/GuildBoostingMarketingTopPerksCards.tsx");

export default function GuildBoostingMarketingTopPerksCards() {
  const tmp = closure_8();
  _require = tmp;
  let obj = { style: tmp.wrapper, children: null };
  obj = { style: tmp.heading, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
  const intl = require("util").intl;
  obj.children = intl.string(require("util").t.aGdB3E);
  items = [closure_6(require("Text/Text").Heading, obj), ];
  obj = {
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
      let obj = { style: items, children: null };
      items[1] = cardLast;
      const items1 = [getGraphic.getGraphic(card.cardGraphic), , ];
      obj = { style: card.cardHeading, variant: "heading-lg/extrabold", color: "mobile-text-heading-primary", children: getGraphic.getHeadingCopy() };
      items1[1] = timestampProducer(Text_Text.Heading, obj);
      obj = { style: card.cardBody, variant: "text-sm/normal", color: "text-default", children: getGraphic.getBodyCopy() };
      items1[2] = timestampProducer(Text_Text.Text, obj);
      obj.children = items1;
      return React5(React4, obj, index);
    })
  };
  items[1] = closure_6(require("MarketingCardsScroller").MarketingCardsScroller, obj);
  obj.children = items;
  return closure_7(closure_4, obj);
};