// discord_app/modules/guild_boosting/native/marketing_redesign/GuildBoostingMarketingTopPerksCards.tsx
import "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { registerAsset } from "../../../../../_runtime/12751_registerAsset.js";
import { registerAsset } from "../../../../../_runtime/12753_registerAsset.js";
import { 12752__ } from "../../../../../_runtime/metro/12752__.js";
import { play } from "../../../../components_native/common/LottieAnimationView.tsx";
import { Text } from "../../../../design/components/Text/native/Text.tsx";
import { getSystemLocale } from "../../../../intl/index.native.tsx";
import { items } from "MarketingCardsScroller.tsx";

let c3;
let c4;
let closure_6;
let error;
let require = arg1;
({ Image: c3, View: c4 } = get_ActivityIndicator);
({ jsx: closure_6, jsxs: error } = jsxProd);
createCacheKey = { wrapper: { marginTop: 50 }, heading: { marginBottom: 20, textAlign: "center" }, scrollerContent: { alignItems: "stretch", flexDirection: "row", justifyContent: "center", minWidth: "100%", paddingHorizontal: 16, paddingBottom: 16 }, card: null, cardGraphic: null, cardLast: null, cardHeading: null, cardBody: null };
createCacheKey = { backgroundColor: require("Themes").colors.CARD_BACKGROUND_DEFAULT, borderColor: require("Themes").colors.BORDER_SUBTLE, borderWidth: 1, borderRadius: require("Themes").radii.lg, display: "flex", alignItems: "center", justifyContent: "center", marginRight: 16, padding: 24, width: 324 };
createCacheKey[3] = createCacheKey;
createCacheKey[4] = { borderRadius: require("Themes").radii.xs, height: 128, marginBottom: 16, overflow: "hidden", width: 211 };
createCacheKey[5] = { marginRight: 0 };
createCacheKey[6] = { marginBottom: 4, textAlign: "center" };
createCacheKey[7] = { textAlign: "center" };
createCacheKey = createCacheKey.createStyles(createCacheKey);
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
      return callback(closure_3, { style, source: registerAsset });
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
      const obj = { source: null, autoPlay: null, style: null };
      obj[0] = 12752__;
      obj[1] = !useReducedMotion.useReducedMotion;
      obj[2] = arg0;
      return callback(play, obj);
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
      return callback(closure_3, { style, source: registerAsset });
    }
  }
];
const obj1 = { borderRadius: require("Themes").radii.xs, height: 128, marginBottom: 16, overflow: "hidden", width: 211 };
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
    return callback(closure_3, { style, source: registerAsset });
  }
};
const result = require("maybeApplyNoTextColorForLightCustomTheme").fileFinishedImporting("modules/guild_boosting/native/marketing_redesign/GuildBoostingMarketingTopPerksCards.tsx");

export default function GuildBoostingMarketingTopPerksCards() {
  const tmp = createCacheKey();
  const require = tmp;
  let obj = { style: tmp.wrapper, children: null };
  obj = { style: tmp.heading, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
  const intl = getSystemLocale.intl;
  obj[3] = intl.string(getSystemLocale.t.aGdB3E);
  let items = [callback(Text.Heading, obj), ];
  obj = { itemCount: items.length, cardWidth: 324, cardMarginRight: 16, contentContainerStyle: tmp.scrollerContent, children: null };
  obj[4] = items.map((getGraphic) => {
    const items = [tmp.card, ];
    let cardLast = arg1 === outer1_9.length - 1;
    if (cardLast) {
      cardLast = tmp3.cardLast;
    }
    let obj = { style: items, children: null };
    items[1] = cardLast;
    const items1 = [getGraphic.getGraphic(tmp.cardGraphic), , ];
    obj = { style: tmp3.cardHeading, variant: "heading-lg/extrabold", color: "mobile-text-heading-primary", children: null };
    obj[3] = getGraphic.getHeadingCopy();
    items1[1] = outer1_6(outer1_7(outer1_2[11]).Heading, obj);
    obj = { style: tmp3.cardBody, variant: "text-sm/normal", color: "text-default", children: null };
    obj[3] = getGraphic.getBodyCopy();
    items1[2] = outer1_6(outer1_7(outer1_2[11]).Text, obj);
    obj[1] = items1;
    return outer1_7(outer1_4, obj, arg1);
  });
  items[1] = callback(items.MarketingCardsScroller, obj);
  obj[1] = items;
  return callback2(closure_4, obj);
};