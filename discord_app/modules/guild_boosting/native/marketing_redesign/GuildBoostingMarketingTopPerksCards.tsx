// === Module 15487: GuildBoostingMarketingTopPerksCards ===

// Module 15487 (GuildBoostingMarketingTopPerksCards)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import LottieAnimationViewDefault from "LottieAnimationView" /* 5618 */;
import Text_Text from "Text/Text" /* 5624 */;
import FastImageDefault from "FastImage" /* 5717 */;
import _modDef15488 from "module_15488" /* 15488 */;
import _mod15489 from "module_15489" /* 15489 */;
import _modDef15490 from "module_15490" /* 15490 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5015 */;

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(5014);
let obj2 = { wrapper: { marginTop: 50 }, heading: { marginBottom: 20, textAlign: "center" }, scrollerContent: { alignItems: "stretch", flexDirection: "row", justifyContent: "center", minWidth: "100%", paddingHorizontal: 16, paddingBottom: 16 }, card: { backgroundColor: nativeDefault.colors.CARD_BACKGROUND_DEFAULT, borderColor: nativeDefault.colors.BORDER_SUBTLE, borderWidth: 1, borderRadius: nativeDefault.radii.lg, display: "flex", alignItems: "center", justifyContent: "center", marginRight: 16, padding: 24, width: 324 }, cardGraphic: null, cardLast: null, cardHeading: null, cardBody: null };
let size = { borderRadius: nativeDefault.radii.xs, height: 128, marginBottom: 16, overflow: "hidden", width: 211 };
obj2.cardGraphic = size;
obj2.cardLast = { marginRight: 0 };
obj2.cardHeading = { marginBottom: 4, textAlign: "center" };
obj2.cardBody = { textAlign: "center" };
let closure_7 = createStyles.createStyles(obj2);
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
      const obj = { style, source: _modDef15488 };
      return hasOwnProperty(FastImageDefault, obj);
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
      const obj = { source: _mod15489, autoPlay: !AccessibilityStore.useReducedMotion, style };
      return hasOwnProperty(LottieAnimationViewDefault, obj);
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
      const obj = { style, source: _modDef15490 };
      return hasOwnProperty(FastImageDefault, obj);
    }
  }
];
size = fn(2);
const result = size.fileFinishedImporting("modules/guild_boosting/native/marketing_redesign/GuildBoostingMarketingTopPerksCards.tsx");

export default function GuildBoostingMarketingTopPerksCards() {
  const tmp = closure_7();
  _require = tmp;
  let obj = { style: tmp.wrapper, children: null };
  let obj2 = { style: tmp.heading, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
  const intl = require("util").intl;
  obj2.children = intl.string(require("util").t.aGdB3E);
  items = [closure_5(require("Text/Text").Heading, obj2), ];
  items[1] = closure_5(require("MarketingCardsScroller").MarketingCardsScroller, {
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
      const items1 = [getGraphic.getGraphic(card.cardGraphic), hasOwnProperty(Text_Text.Heading, { style: card.cardHeading, variant: "heading-lg/extrabold", color: "mobile-text-heading-primary", children: getGraphic.getHeadingCopy() }), ];
      const obj2 = { style: card.cardHeading, variant: "heading-lg/extrabold", color: "mobile-text-heading-primary", children: getGraphic.getHeadingCopy() };
      items1[2] = hasOwnProperty(Text_Text.Text, { style: card.cardBody, variant: "text-sm/normal", color: "text-default", children: getGraphic.getBodyCopy() });
      obj.children = items1;
      return timestampProducer(View, obj, index);
    })
  });
  obj.children = items;
  return closure_6(View, obj);
};