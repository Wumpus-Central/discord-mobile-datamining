// === Module 13033: items ===

// Module 13033 (items)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import playDefault from "play" /* 7130 */;
import registerAssetDefault from "registerAsset" /* 13034 */;
import _mod13035 from "module_13035" /* 13035 */;
import registerAssetDefault2 from "registerAsset" /* 13036 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme" /* 4662 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";

require = fn;
noopAll;
({ Image: c3, View: c4 } = get_ActivityIndicator);
({ jsx: closure_6, jsxs: error } = jsxProd);
const createCacheKey = { backgroundColor: ThemesDefault.colors.CARD_BACKGROUND_DEFAULT, borderColor: ThemesDefault.colors.BORDER_SUBTLE, borderWidth: 1, borderRadius: ThemesDefault.radii.lg, display: "flex", alignItems: "center", justifyContent: "center", marginRight: 16, padding: 24, width: 324 };
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
      const obj = { source: _mod13035, autoPlay: !useReducedMotion.useReducedMotion, style: arg0 };
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
const result = require("obj132").fileFinishedImporting("modules/guild_boosting/native/marketing_redesign/GuildBoostingMarketingTopPerksCards.tsx");

export default function GuildBoostingMarketingTopPerksCards() {
  const tmp = callback3();
  const _require = tmp;
  let obj = { style: tmp.heading, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
  const intl = _require(1236).intl;
  obj[3] = intl.string(_require(1236).t.aGdB3E);
  items = [callback(_require(4734).Heading, obj), ];
  obj = {
    itemCount: items.length,
    cardWidth: 324,
    cardMarginRight: 16,
    contentContainerStyle: tmp.scrollerContent,
    children: items.map((item, index) => {
      items = [lib.card, ];
      let cardLast = index === closure_1_9.length - 1;
      if (cardLast) {
        cardLast = lib.cardLast;
      }
      items[1] = cardLast;
      const items1 = [item.getGraphic(lib.cardGraphic), , ];
      let obj = { style: lib.cardHeading, variant: "heading-lg/extrabold", color: "mobile-text-heading-primary", children: item.getHeadingCopy() };
      items1[1] = closure_1_6(lib(dependencyMap[11]).Heading, obj);
      obj = { style: lib.cardBody, variant: "text-sm/normal", color: "text-default", children: item.getBodyCopy() };
      items1[2] = closure_1_6(lib(dependencyMap[11]).Text, obj);
      obj[1] = items1;
      return closure_1_7(closure_1_4, obj, index);
    })
  };
  items[1] = callback(_require(11733).MarketingCardsScroller, obj);
  obj[1] = items;
  return callback2(closure_4, obj);
};