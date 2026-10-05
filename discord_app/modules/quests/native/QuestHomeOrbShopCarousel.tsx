// === Module 14886: QuestHomeOrbShopCarousel ===

// Module 14886 (QuestHomeOrbShopCarousel)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl2 from "intl" /* 1126 */;
import Text_Text from "Text/Text" /* 4886 */;
import QuestConstants from "QuestConstants" /* 5623 */;
import AnalyticsActions from "AnalyticsActions" /* 7202 */;
import AnalyticsTypes from "AnalyticsTypes" /* 7212 */;
import CollectiblesAnalyticsContext from "CollectiblesAnalyticsContext" /* 8421 */;
import SkeletonCardDefault from "SkeletonCard" /* 8534 */;
import usePopularOrbShopProducts from "usePopularOrbShopProducts" /* 14873 */;
import QuestHomeOrbShopRewardCardDefault from "QuestHomeOrbShopRewardCard" /* 14887 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import ThemeStore from "ThemeStore" /* 1193 */;
import BountyStore from "BountyStore" /* 7186 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import createStyles from "createStyles" /* 4890 */;
import size_mod from "module_2" /* 2 */;

let closure_12, dependencyMap, width;

let c10;
let c9;
let react = react_mod;
const View = react_native.View;
const BOUNTY_ORB_AMOUNT = QuestConstants.BOUNTY_ORB_AMOUNT;
({ jsx: c9, jsxs: c10 } = Fragment);
let PX_20 = nativeDefault.space.PX_20;
let PX_12 = nativeDefault.space.PX_12;
const contentContainerStyle = { backgroundColor: "transparent" };
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? ((width) => {
  let obj3;
  let tmp2;
  const obj = react2;
  const cResult = obj.c(2);
  width = width.width;
  if (cResult[0] !== width) {
    const obj2 = { style: obj3 };
    obj3 = { width };
    const tmp5 = React4(View, obj2);
    cResult[0] = width;
    cResult[1] = tmp5;
    tmp2 = tmp5;
  } else {
    tmp2 = cResult[1];
  }
  return tmp2;
}) : ((width) => {
  const obj = { style: { width: width.width } };
  return React4(View, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
const ItemSeparatorComponent = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let first;
  let obj3;
  const obj = react2;
  const cResult = obj.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { style: obj3 };
    obj3 = { width: PX_12 };
    const tmp6 = React4(View, obj2);
    cResult[0] = tmp6;
    first = tmp6;
  } else {
    first = cResult[0];
  }
  return first;
}) : (() => {
  let obj2;
  const obj = { style: obj2 };
  obj2 = { width: PX_12 };
  return React4(View, obj);
});
let obj = { length: usePopularOrbShopProducts.MIN_PRODUCTS_FOR_ORB_SHOP_CAROUSEL };
const data = Array.from(obj, (arg0, arg1) => arg1);
let closure_17 = createStyles.createStyles(() => {
  const obj = { standaloneRoot: { marginTop: nativeDefault.space.PX_32 }, headerMediaRoot: { paddingBottom: nativeDefault.space.PX_8 } };
  ({ marginTop: nativeDefault.space.PX_32 });
  ({ paddingBottom: nativeDefault.space.PX_8 });
  return obj;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_18 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let bountyCompleted;
  let tmp4;
  let tmp5;
  const obj = react2;
  const cResult = obj.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [BountyStore];
    const fn = function t() {
      let num = 0;
      const questHomeBounties = bountyCompleted.questHomeBounties;
      for (const item10007 of questHomeBounties) {
        if (!bountyCompleted.isBountyCompleted(item10007.id)) {
          num = num + BOUNTY_ORB_AMOUNT;
        }
        continue;
      }
      return num;
    };
    let num = 0;
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = get_initialized;
  return tmpResult.useStateFromStores(tmp4, tmp5);
}) : (() => {
  let bountyCompleted;
  const items = [BountyStore];
  const obj = get_initialized;
  return obj.useStateFromStores(items, () => {
    let num = 0;
    const questHomeBounties = bountyCompleted.questHomeBounties;
    for (const item10007 of questHomeBounties) {
      if (!bountyCompleted.isBountyCompleted(item10007.id)) {
        num = num + BOUNTY_ORB_AMOUNT;
      }
      continue;
    }
    return num;
  });
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let enabled;
  let products;
  let showPlaceholderCarousel;
  let sortType;
  const obj = react2;
  const cResult = obj.c(7);
  ({ enabled, sortType } = arg0);
  const tmp4 = closure_18();
  if (cResult[0] === enabled) {
    let tmp5;
    if (cResult[1] === sortType) {
      tmp5 = cResult[2];
    }
    const tmpResult = usePopularOrbShopProducts;
    const popularOrbShopProducts = tmpResult.usePopularOrbShopProducts(tmp5);
    ({ products, showPlaceholderCarousel } = popularOrbShopProducts);
    if (cResult[3] === tmp4) {
      if (cResult[4] === products) {
        let tmp7;
        if (cResult[5] === showPlaceholderCarousel) {
          tmp7 = cResult[6];
        }
        return tmp7;
      }
    }
    const obj2 = { products, obtainableOrbRewards: tmp4, showPlaceholderCarousel };
    cResult[3] = tmp4;
    cResult[4] = products;
    cResult[5] = showPlaceholderCarousel;
    cResult[6] = obj2;
    tmp7 = obj2;
  }
  const obj3 = { enabled, sortType };
  cResult[0] = enabled;
  cResult[1] = sortType;
  cResult[2] = obj3;
  tmp5 = obj3;
}) : ((arg0) => {
  let enabled;
  let sortType;
  ({ enabled, sortType } = arg0);
  const tmp = closure_18();
  const obj = usePopularOrbShopProducts;
  const popularOrbShopProducts = obj.usePopularOrbShopProducts({ enabled, sortType });
  return { products: popularOrbShopProducts.products, obtainableOrbRewards: tmp, showPlaceholderCarousel: popularOrbShopProducts.showPlaceholderCarousel };
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_19 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let belowCarousel;
  let compactHeading;
  let listEdgeSpacing;
  let orbRewardAmount;
  const obj = react2;
  const cResult = obj.c(12);
  ({ orbRewardAmount, belowCarousel, listEdgeSpacing, compactHeading } = arg0);
  let num = 0;
  const tmp5 = undefined !== compactHeading && compactHeading;
  if (undefined !== belowCarousel && belowCarousel) {
    num = nativeDefault.space.PX_8;
  }
  let num2 = 0;
  if (!(undefined !== belowCarousel && belowCarousel)) {
    num2 = nativeDefault.space.PX_8;
  }
  if (cResult[0] === listEdgeSpacing) {
    if (cResult[1] === num) {
      let tmp8;
      let tmp9;
      if (cResult[2] === num2) {
        tmp8 = cResult[3];
      }
      let str = "text-xs/medium";
      if (!(undefined !== belowCarousel && belowCarousel)) {
        let str2 = "text-md/semibold";
        if (tmp5) {
          str2 = "text-sm/semibold";
        }
        str = str2;
      }
      if (cResult[4] !== orbRewardAmount) {
        const intl = intl2.intl;
        const obj2 = { orbAmount: orbRewardAmount };
        const formatResult = intl.format(intl2.t.CXlsRP, obj2);
        cResult[4] = orbRewardAmount;
        cResult[5] = formatResult;
        tmp9 = formatResult;
      } else {
        tmp9 = cResult[5];
      }
      if (cResult[6] === str) {
        let tmp11;
        if (cResult[7] === tmp9) {
          tmp11 = cResult[8];
        }
        if (cResult[9] === tmp8) {
          let tmp14;
          if (cResult[10] === tmp11) {
            tmp14 = cResult[11];
          }
          return tmp14;
        }
        const obj3 = { style: tmp8, children: tmp11 };
        const tmp17 = React4(View, obj3);
        cResult[9] = tmp8;
        cResult[10] = tmp11;
        cResult[11] = tmp17;
        tmp14 = tmp17;
      }
      const obj4 = { variant: str, color: "text-strong", children: tmp9 };
      const tmp13 = React4(Text_Text.Heading, obj4);
      cResult[6] = str;
      cResult[7] = tmp9;
      cResult[8] = tmp13;
      tmp11 = tmp13;
    }
  }
  const obj5 = { paddingHorizontal: listEdgeSpacing, marginTop: num, marginBottom: num2 };
  cResult[0] = listEdgeSpacing;
  cResult[1] = num;
  cResult[2] = num2;
  cResult[3] = obj5;
  tmp8 = obj5;
}) : ((belowCarousel) => {
  let Heading;
  let compactHeading;
  let intl;
  let listEdgeSpacing;
  let num;
  let num2;
  let obj3;
  let flag = belowCarousel.belowCarousel;
  const orbRewardAmount = belowCarousel.orbRewardAmount;
  if (flag === undefined) {
    flag = false;
  }
  ({ compactHeading, listEdgeSpacing } = belowCarousel);
  if (compactHeading === undefined) {
    compactHeading = false;
  }
  const obj = { paddingHorizontal: listEdgeSpacing, marginTop: num, marginBottom: num2 };
  num = 0;
  if (flag) {
    num = nativeDefault.space.PX_8;
  }
  num2 = 0;
  if (!flag) {
    num2 = nativeDefault.space.PX_8;
  }
  let str = "text-xs/medium";
  const obj2 = { style: obj, children: React4(Heading, obj3) };
  Heading = Text_Text.Heading;
  if (!flag) {
    let str2 = "text-md/semibold";
    if (compactHeading) {
      str2 = "text-sm/semibold";
    }
    str = str2;
  }
  obj3 = { variant: str, color: "text-strong", children: intl.format(intl2.t.CXlsRP, { orbAmount: orbRewardAmount }) };
  intl = intl2.intl;
  return React4(View, obj2);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_20 = ReactCompilerGating.isReactCompilerEnabled() ? ((cardHeight) => {
  let cardStride;
  let cardWidth;
  let listEdgeSpacing;
  let listStyle;
  let obj = cardWidth(listEdgeSpacing[9]);
  const cResult = obj.c(18);
  ({ listStyle, cardWidth } = cardHeight);
  cardHeight = cardHeight.cardHeight;
  ({ cardStride, listEdgeSpacing } = cardHeight);
  if (cResult[0] === cardHeight) {
    let tmp4;
    let tmp6;
    let tmp11;
    let tmp10;
    if (cResult[1] === cardWidth) {
      tmp4 = cResult[2];
    }
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const fn2 = function p(arg0) {
        return "placeholder-" + arg0;
      };
      cResult[3] = fn2;
      tmp6 = fn2;
    } else {
      tmp6 = cResult[3];
    }
    if (cResult[4] !== listEdgeSpacing) {
      class H {
        constructor() {
          const obj = { width: listEdgeSpacing };
          return React4(closure_14, obj);
        }
      }
      cResult[4] = listEdgeSpacing;
      cResult[5] = H;
    } else {
      class H {
        constructor() {
          const obj = { width: listEdgeSpacing };
          return React4(closure_14, obj);
        }
      }
    }
    if (cResult[6] !== listEdgeSpacing) {
      class H {
        constructor() {
          const obj = { width: listEdgeSpacing };
          return React4(closure_14, obj);
        }
      }
      cResult[6] = listEdgeSpacing;
      cResult[7] = tmp9;
    } else {
      class H {
        constructor() {
          const obj = { width: listEdgeSpacing };
          return React4(closure_14, obj);
        }
      }
    }
    const _Symbol2 = Symbol;
    if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
      class H {
        constructor() {
          const obj = { width: listEdgeSpacing };
          return React4(closure_14, obj);
        }
      }
      const stringResult = obj2.string(cardWidth(listEdgeSpacing[13]).t.hVV8Wi);
      const obj3 = { busy: true };
      cResult[8] = stringResult;
      cResult[9] = obj3;
      tmp11 = obj3;
      tmp10 = stringResult;
    } else {
      class H {
        constructor() {
          const obj = { width: listEdgeSpacing };
          return React4(closure_14, obj);
        }
      }
      tmp11 = cResult[9];
    }
    if (cResult[10] !== listStyle) {
      class H {
        constructor() {
          const obj = { width: listEdgeSpacing };
          return React4(closure_14, obj);
        }
      }
      tmp14[0] = listStyle;
      tmp14[1] = contentContainerStyle;
      cResult[10] = listStyle;
      cResult[11] = tmp14;
    } else {
      class H {
        constructor() {
          const obj = { width: listEdgeSpacing };
          return React4(closure_14, obj);
        }
      }
    }
    if (cResult[12] === tmp9) {
      class H {
        constructor() {
          const obj = { width: listEdgeSpacing };
          return React4(closure_14, obj);
        }
      }
    }
    const obj4 = { horizontal: true, accessibilityRole: "list", accessibilityLabel: tmp10, accessibilityState: tmp11, data, keyExtractor: tmp6, renderItem: tmp4, style: tmp14, contentContainerStyle, decelerationRate: "fast", snapToInterval: cardStride, showsHorizontalScrollIndicator: false, ListHeaderComponent: H, ListFooterComponent: tmp9, ItemSeparatorComponent };
    cResult[12] = tmp9;
    cResult[13] = H;
    cResult[14] = cardStride;
    cResult[15] = tmp4;
    cResult[16] = tmp14;
    cResult[17] = closure_9(cardWidth(listEdgeSpacing[16]).FlashList, obj4);
    const tmp21 = closure_9(cardWidth(listEdgeSpacing[16]).FlashList, obj4);
  }
  const fn = function t() {
    size = { width: cardWidth, height: cardHeight };
    return React4(SkeletonCardDefault, size);
  };
  cResult[0] = cardHeight;
  cResult[1] = cardWidth;
  cResult[2] = fn;
  tmp4 = fn;
}) : ((cardWidth) => {
  let cardStride;
  let intl;
  let items3;
  let listStyle;
  cardWidth = cardWidth.cardWidth;
  const cardHeight = cardWidth.cardHeight;
  const listEdgeSpacing = cardWidth.listEdgeSpacing;
  const items = [cardWidth, cardHeight];
  ({ listStyle, cardStride } = cardWidth);
  const callback = react.useCallback(() => {
    size = { width: cardWidth, height: cardHeight };
    return React4(SkeletonCardDefault, size);
  }, items);
  const items1 = [listEdgeSpacing];
  const callback1 = react.useCallback((arg0) => "placeholder-" + arg0, []);
  const items2 = [listEdgeSpacing];
  const callback2 = react.useCallback(() => {
    const obj = { width: listEdgeSpacing };
    return React4(closure_14, obj);
  }, items1);
  const callback3 = react.useCallback(() => {
    const obj = { width: listEdgeSpacing };
    return React4(closure_14, obj);
  }, items2);
  let obj = { horizontal: true, accessibilityRole: "list", accessibilityLabel: intl.string(cardWidth(listEdgeSpacing[13]).t.hVV8Wi), accessibilityState: { busy: true }, data, keyExtractor: callback1, renderItem: callback, style: items3, contentContainerStyle, decelerationRate: "fast", snapToInterval: cardStride, showsHorizontalScrollIndicator: false, ListHeaderComponent: callback2, ListFooterComponent: callback3, ItemSeparatorComponent };
  const FlashList = cardWidth(listEdgeSpacing[16]).FlashList;
  intl = cardWidth(listEdgeSpacing[13]).intl;
  items3 = [listStyle, contentContainerStyle];
  return closure_9(FlashList, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let COLLECTIBLES_SHOP_CARD_HEIGHT;
  let COLLECTIBLES_SHOP_CARD_WIDTH;
  let clickable;
  let embedded;
  let hideCardDetails;
  let listEdgeSpacing;
  let obtainableOrbRewards;
  let orbShopProducts;
  let ref;
  let replacesHeaderMedia;
  let showOrbShopPlaceholderCarousel;
  let tmp11;
  let tmp8;
  let tmp9;
  const tmp2 = dependencyMap;
  let obj = obtainableOrbRewards(576);
  const cResult = obj.c(58);
  ({ orbShopProducts, obtainableOrbRewards } = arg0);
  ({ showOrbShopPlaceholderCarousel, embedded, replacesHeaderMedia, listEdgeSpacing, clickable } = arg0);
  let closure_1 = tmp4;
  const tmp5 = undefined !== embedded && embedded;
  dependencyMap = tmp6;
  if (undefined === listEdgeSpacing) {
    listEdgeSpacing = PX_20;
  }
  react = undefined !== clickable && clickable;
  closure_17();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [COLLECTIBLES_SHOP_CARD_HEIGHT];
    const fn = function c() {
      return COLLECTIBLES_SHOP_CARD_HEIGHT.theme;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp8 = items;
    tmp9 = fn;
  } else {
    [tmp8, tmp9] = cResult;
  }
  const tmpResult = obtainableOrbRewards(504);
  let ONYX = tmpResult.useStateFromStores(tmp8, tmp9);
  if (tmp5) {
    ONYX = obtainableOrbRewards(14863).ThemeTypes.ONYX;
  }
  if (undefined !== replacesHeaderMedia && replacesHeaderMedia) {
    COLLECTIBLES_SHOP_CARD_WIDTH = obtainableOrbRewards(14887).QUEST_HOME_REPLACE_MEDIA_CARD_WIDTH;
  } else {
    COLLECTIBLES_SHOP_CARD_WIDTH = obtainableOrbRewards(8418).COLLECTIBLES_SHOP_CARD_WIDTH;
  }
  if (undefined !== replacesHeaderMedia && replacesHeaderMedia) {
    COLLECTIBLES_SHOP_CARD_HEIGHT = obtainableOrbRewards(14887).QUEST_HOME_REPLACE_MEDIA_CARD_HEIGHT;
  } else {
    COLLECTIBLES_SHOP_CARD_HEIGHT = obtainableOrbRewards(8418).COLLECTIBLES_SHOP_CARD_HEIGHT;
  }
  if (cResult[2] !== COLLECTIBLES_SHOP_CARD_WIDTH) {
    const sum = COLLECTIBLES_SHOP_CARD_WIDTH + PX_12;
    cResult[2] = COLLECTIBLES_SHOP_CARD_WIDTH;
    cResult[3] = sum;
    tmp11 = sum;
  } else {
    tmp11 = cResult[3];
  }
  let closure_7 = tmp11;
  if (cResult[4] !== COLLECTIBLES_SHOP_CARD_HEIGHT) {
    let obj2 = { height: COLLECTIBLES_SHOP_CARD_HEIGHT };
    cResult[4] = COLLECTIBLES_SHOP_CARD_HEIGHT;
    cResult[5] = obj2;
  }
  if (cResult[6] !== listEdgeSpacing) {
    class Q {
      constructor() {
        const obj = { width: listEdgeSpacing };
        return React4(closure_14, obj);
      }
    }
    cResult[6] = listEdgeSpacing;
    cResult[7] = Q;
  } else {
    class Q {
      constructor() {
        const obj = { width: listEdgeSpacing };
        return React4(closure_14, obj);
      }
    }
  }
  if (cResult[8] !== listEdgeSpacing) {
    class G {
      constructor() {
        const obj = { width: listEdgeSpacing };
        return React4(closure_14, obj);
      }
    }
    cResult[8] = listEdgeSpacing;
    cResult[9] = G;
  } else {
    class G {
      constructor() {
        const obj = { width: listEdgeSpacing };
        return React4(closure_14, obj);
      }
    }
  }
  const tmp17 = listEdgeSpacing(react.useState(0), 2);
  let closure_8 = tmp17[0];
  let closure_9 = tmp17[1];
  const length = orbShopProducts.length;
  PX_20 = react.useRef(false);
  let tmp18 = obtainableOrbRewards > 0;
  if (tmp18) {
    class G {
      constructor() {
        const obj = { width: listEdgeSpacing };
        return React4(closure_14, obj);
      }
    }
    tmp18 = tmp19;
  }
  PX_12 = tmp18;
  if (cResult[10] === length) {
    class G {
      constructor() {
        const obj = { width: listEdgeSpacing };
        return React4(closure_14, obj);
      }
    }
  }
  class N {
    constructor() {
      const current = ref.current || !PX_12 || closure_1;
      if (!current) {
        ref.current = true;
        const obj2 = { obtainableOrbRewards, carouselSize: length, isPlaceholderCarousel: false };
        const obj = AnalyticsActions;
        const result = obj.trackQuestHomeOrbShopCarouselViewed(obj2);
      }
    }
  }
  const items1 = [length, tmp18, obtainableOrbRewards, undefined !== showOrbShopPlaceholderCarousel && showOrbShopPlaceholderCarousel];
  cResult[10] = length;
  cResult[11] = tmp18;
  cResult[12] = obtainableOrbRewards;
  cResult[13] = undefined !== showOrbShopPlaceholderCarousel && showOrbShopPlaceholderCarousel;
  cResult[14] = N;
  cResult[15] = items1;
}) : ((showOrbShopPlaceholderCarousel) => {
  let ONYX;
  let intl;
  let items6;
  let items7;
  let obj3;
  let obtainableOrbRewards;
  let orbShopProducts;
  let ref;
  let tmp19Result2;
  let tmp20;
  ({ orbShopProducts, obtainableOrbRewards } = showOrbShopPlaceholderCarousel);
  let flag = showOrbShopPlaceholderCarousel.showOrbShopPlaceholderCarousel;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = showOrbShopPlaceholderCarousel.embedded;
  if (flag2 === undefined) {
    flag2 = false;
  }
  let flag3 = showOrbShopPlaceholderCarousel.replacesHeaderMedia;
  if (flag3 === undefined) {
    flag3 = false;
  }
  let listEdgeSpacing = showOrbShopPlaceholderCarousel.listEdgeSpacing;
  if (listEdgeSpacing === undefined) {
    listEdgeSpacing = ref;
  }
  let flag4 = showOrbShopPlaceholderCarousel.clickable;
  if (flag4 === undefined) {
    flag4 = false;
  }
  let COLLECTIBLES_SHOP_CARD_WIDTH;
  let COLLECTIBLES_SHOP_CARD_HEIGHT;
  let c7;
  let first;
  let closure_9;
  let length;
  ref = undefined;
  closure_12 = undefined;
  const tmp = closure_17();
  obtainableOrbRewards(flag3[12]);
  [][0] = COLLECTIBLES_SHOP_CARD_HEIGHT;
  if (flag2) {
    ONYX = obtainableOrbRewards(tmp3[17]).ThemeTypes.ONYX;
  } else {
    ONYX = tmp5;
  }
  if (flag3) {
    COLLECTIBLES_SHOP_CARD_WIDTH = obtainableOrbRewards(tmp3[18]).QUEST_HOME_REPLACE_MEDIA_CARD_WIDTH;
  } else {
    COLLECTIBLES_SHOP_CARD_WIDTH = obtainableOrbRewards(tmp3[19]).COLLECTIBLES_SHOP_CARD_WIDTH;
  }
  if (flag3) {
    COLLECTIBLES_SHOP_CARD_HEIGHT = obtainableOrbRewards(tmp3[18]).QUEST_HOME_REPLACE_MEDIA_CARD_HEIGHT;
  } else {
    COLLECTIBLES_SHOP_CARD_HEIGHT = obtainableOrbRewards(tmp3[19]).COLLECTIBLES_SHOP_CARD_HEIGHT;
  }
  const sum = COLLECTIBLES_SHOP_CARD_WIDTH + closure_12;
  c7 = sum;
  let obj = flag4;
  const items = [COLLECTIBLES_SHOP_CARD_HEIGHT];
  const memo = flag4.useMemo(() => ({ height: COLLECTIBLES_SHOP_CARD_HEIGHT }), items);
  const items1 = [listEdgeSpacing];
  const items2 = [listEdgeSpacing];
  const callback = flag4.useCallback(() => {
    const obj = { width: listEdgeSpacing };
    return React4(closure_14, obj);
  }, items1);
  const callback1 = flag4.useCallback(() => {
    const obj = { width: listEdgeSpacing };
    return React4(closure_14, obj);
  }, items2);
  const tmp10 = listEdgeSpacing(flag4.useState(0), 2);
  first = tmp10[0];
  closure_9 = tmp10[1];
  length = orbShopProducts.length;
  ref = flag4.useRef(false);
  let tmp12 = obtainableOrbRewards > 0;
  if (tmp12) {
    tmp12 = flag || length > 0;
  }
  closure_12 = tmp12;
  const items3 = [length, tmp12, obtainableOrbRewards, flag];
  const effect = obj.useEffect(() => {
    const current = ref.current || !closure_12 || flag;
    if (!current) {
      ref.current = true;
      const obj2 = { obtainableOrbRewards, carouselSize: length, isPlaceholderCarousel: false };
      const obj = AnalyticsActions;
      const result = obj.trackQuestHomeOrbShopCarouselViewed(obj2);
    }
  }, items3);
  const items4 = [first, sum, length];
  const items5 = [COLLECTIBLES_SHOP_CARD_HEIGHT, COLLECTIBLES_SHOP_CARD_WIDTH, flag4, flag3];
  const callback2 = obj.useCallback((nativeEvent) => {
    const rounded = Math.round(nativeEvent.nativeEvent.contentOffset.x / c7);
    if (rounded !== first) {
      let LEFT;
      const trackQuestHomeOrbShopCarouselScroll = AnalyticsActions.trackQuestHomeOrbShopCarouselScroll;
      AnalyticsActions;
      if (rounded > tmp2) {
        LEFT = AnalyticsTypes.HorizontalScrollingDirection.RIGHT;
      } else {
        LEFT = AnalyticsTypes.HorizontalScrollingDirection.LEFT;
      }
      const obj = { scrollingDirection: LEFT, carouselPosition: rounded, carouselSize: length };
      const result = trackQuestHomeOrbShopCarouselScroll(obj);
      closure_9(rounded);
    }
  }, items4);
  const callback3 = obj.useCallback((arg0) => {
    let index;
    let item;
    let obj2;
    ({ item, index } = arg0);
    const obj = { newValue: { tilePosition: index, pageSection: "quest_home_orb_shop" }, children: React4(QuestHomeOrbShopRewardCardDefault, obj2) };
    const CollectiblesAnalyticsProvider = CollectiblesAnalyticsContext.CollectiblesAnalyticsProvider;
    obj2 = { product: item, cardWidth: COLLECTIBLES_SHOP_CARD_WIDTH, cardHeight: COLLECTIBLES_SHOP_CARD_HEIGHT, hideCardDetails: flag3, clickable: flag4 };
    return React4(CollectiblesAnalyticsProvider, obj);
  }, items5);
  if (tmp12) {
    let standaloneRoot;
    if (flag3) {
      standaloneRoot = tmp.headerMediaRoot;
    } else if (!flag2) {
      standaloneRoot = tmp.standaloneRoot;
    }
    let obj2 = { theme: ONYX, children: tmp20(COLLECTIBLES_SHOP_CARD_WIDTH, obj3) };
    let tmp19Result = !flag3;
    obj3 = { style: standaloneRoot, children: items6 };
    const ThemeContextProvider = obtainableOrbRewards(tmp3[23]).ThemeContextProvider;
    tmp20 = length;
    if (!flag3) {
      const obj4 = { orbRewardAmount: obtainableOrbRewards, listEdgeSpacing, compactHeading: flag2 };
      tmp19Result = tmp19(closure_19, obj4);
    }
    items6 = [tmp19Result, , ];
    const obj5 = { style: memo, children: tmp19Result2 };
    if (flag) {
      const obj6 = { listStyle: memo, cardWidth: COLLECTIBLES_SHOP_CARD_WIDTH, cardHeight: COLLECTIBLES_SHOP_CARD_HEIGHT, cardStride: sum, listEdgeSpacing };
      tmp19Result2 = tmp19(closure_20, obj6);
    } else {
      const obj7 = { horizontal: true, accessibilityRole: "list", accessibilityLabel: intl.string(obtainableOrbRewards(flag3[13]).t.hVV8Wi), data: orbShopProducts, keyExtractor: tmp17, renderItem: callback3, style: items7, contentContainerStyle, decelerationRate: "fast", snapToInterval: sum, showsHorizontalScrollIndicator: false, ListHeaderComponent: callback, ListFooterComponent: callback1, ItemSeparatorComponent, onMomentumScrollEnd: callback2 };
      const FlashList = obtainableOrbRewards(tmp3[16]).FlashList;
      intl = obtainableOrbRewards(tmp3[13]).intl;
      items7 = [memo, contentContainerStyle];
      tmp19Result2 = tmp19(FlashList, obj7);
    }
    items6[1] = closure_9(COLLECTIBLES_SHOP_CARD_WIDTH, obj5);
    if (flag3) {
      const obj8 = { orbRewardAmount: obtainableOrbRewards, belowCarousel: true, listEdgeSpacing, compactHeading: true };
      flag3 = tmp19(closure_19, obj8);
    }
    items6[2] = flag3;
    return closure_9(ThemeContextProvider, obj2);
  } else {
    return null;
  }
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/quests/native/QuestHomeOrbShopCarousel.tsx");

export default tmp4;
export const useQuestHomeOrbShopCarouselData = tmp3;