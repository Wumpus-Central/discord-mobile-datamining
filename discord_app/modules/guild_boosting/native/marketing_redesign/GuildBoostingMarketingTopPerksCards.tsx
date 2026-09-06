// === Module 13600: items ===

// Module 13600 (items)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 576 */;
import getSystemLocale from "getSystemLocale" /* 1114 */;
import playDefault from "play" /* 5529 */;
import registerAssetDefault from "registerAsset" /* 13601 */;
import _mod13602 from "module_13602" /* 13602 */;
import registerAssetDefault2 from "registerAsset" /* 13603 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import closure_5 from "maybeApplyNoTextColorForLightCustomTheme" /* 4552 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4560 */;

require = arg1;
noopAll;
({ Image: c3, View: c4 } = get_ActivityIndicator);
({ jsx: closure_6, jsxs: error } = jsxProd);
createCacheKey = { wrapper: { marginTop: 50 }, heading: { marginBottom: 20, textAlign: "center" }, scrollerContent: { alignItems: "stretch", flexDirection: "row", justifyContent: "center", minWidth: "100%", paddingHorizontal: 16, paddingBottom: 16 }, card: null, cardGraphic: null, cardLast: null, cardHeading: null, cardBody: null };
createCacheKey = { backgroundColor: ThemesDefault.colors.CARD_BACKGROUND_DEFAULT, borderColor: ThemesDefault.colors.BORDER_SUBTLE, borderWidth: 1, borderRadius: ThemesDefault.radii.lg, display: "flex", alignItems: "center", justifyContent: "center", marginRight: 16, padding: 24, width: 324 };
createCacheKey[3] = createCacheKey;
createCacheKey[4] = { borderRadius: ThemesDefault.radii.xs, height: 128, marginBottom: 16, overflow: "hidden", width: 211 };
createCacheKey[5] = { marginRight: 0 };
createCacheKey[6] = { marginBottom: 4, textAlign: "center" };
createCacheKey[7] = { textAlign: "center" };
let closure_8 = createCacheKey.createStyles(createCacheKey);
let items = [
  {
    getHeadingCopy() {
      const intl = getSystemLocale.intl;
      return intl.string(getSystemLocale.t.y4ft4D);
    },
    getBodyCopy() {
      const intl = getSystemLocale.intl;
      return intl.string(getSystemLocale.t.HTvLGu);
    },
    getGraphic(style) {
      return callback(closure_3, { style, source: registerAssetDefault });
    }
  },
  {
    getHeadingCopy() {
      const intl = getSystemLocale.intl;
      return intl.string(getSystemLocale.t.PbAyub);
    },
    getBodyCopy() {
      const intl = getSystemLocale.intl;
      return intl.string(getSystemLocale.t.wOYbTv);
    },
    getGraphic(arg0) {
      const obj = { source: _mod13602, autoPlay: !useReducedMotion.useReducedMotion, style: arg0 };
      return callback(playDefault, obj);
    }
  },
  {
    getHeadingCopy() {
      const intl = getSystemLocale.intl;
      return intl.string(getSystemLocale.t["/bX4Jn"]);
    },
    getBodyCopy() {
      const intl = getSystemLocale.intl;
      return intl.string(getSystemLocale.t.yCjoUC);
    },
    getGraphic(style) {
      return callback(closure_3, { style, source: registerAssetDefault2 });
    }
  }
];
const obj1 = { borderRadius: ThemesDefault.radii.xs, height: 128, marginBottom: 16, overflow: "hidden", width: 211 };
const obj2 = {
  getHeadingCopy() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.y4ft4D);
  },
  getBodyCopy() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.HTvLGu);
  },
  getGraphic(style) {
    return callback(closure_3, { style, source: registerAssetDefault });
  }
};
const result = require("set").fileFinishedImporting("modules/guild_boosting/native/marketing_redesign/GuildBoostingMarketingTopPerksCards.tsx");

export default function GuildBoostingMarketingTopPerksCards() {
  const tmp = callback3();
  const _require = tmp;
  let obj = { style: tmp.wrapper, children: null };
  obj = { style: tmp.heading, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
  const intl = _require(1114).intl;
  obj[3] = intl.string(_require(1114).t.aGdB3E);
  items = [callback(_require(4556).Heading, obj), ];
  obj = {
    itemCount: items.length,
    cardWidth: 324,
    cardMarginRight: 16,
    contentContainerStyle: tmp.scrollerContent,
    children: items.map((getGraphic) => {
      items = [lib.card, ];
      let cardLast = arg1 === closure_1_9.length - 1;
      if (cardLast) {
        cardLast = tmp3.cardLast;
      }
      let obj = { style: items, children: null };
      items[1] = cardLast;
      const items1 = [getGraphic.getGraphic(lib.cardGraphic), , ];
      obj = { style: tmp3.cardHeading, variant: "heading-lg/extrabold", color: "mobile-text-heading-primary", children: getGraphic.getHeadingCopy() };
      items1[1] = closure_1_6(lib(closure_1_2[11]).Heading, obj);
      obj = { style: tmp3.cardBody, variant: "text-sm/normal", color: "text-default", children: getGraphic.getBodyCopy() };
      items1[2] = closure_1_6(lib(closure_1_2[11]).Text, obj);
      obj[1] = items1;
      return closure_1_7(closure_1_4, obj, arg1);
    })
  };
  items[1] = callback(_require(12564).MarketingCardsScroller, obj);
  obj[1] = items;
  return callback2(closure_4, obj);
};