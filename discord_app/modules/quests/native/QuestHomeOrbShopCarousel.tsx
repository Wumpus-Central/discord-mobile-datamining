// === Module 15337: QuestHomeOrbShopCarousel ===

// Module 15337 (QuestHomeOrbShopCarousel)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import Text_Text from "Text/Text" /* 5088 */;
import AnalyticsActions from "AnalyticsActions" /* 7406 */;
import AnalyticsTypes from "AnalyticsTypes" /* 7415 */;
import CollectiblesAnalyticsContext from "CollectiblesAnalyticsContext" /* 8970 */;
import SkeletonCardDefault from "SkeletonCard" /* 9086 */;
import usePopularOrbShopProducts from "usePopularOrbShopProducts" /* 15325 */;
import QuestHomeOrbShopRewardCardDefault from "QuestHomeOrbShopRewardCard" /* 15338 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ThemeStore from "ThemeStore" /* 1205 */;
import BountyStore from "BountyStore" /* 7389 */;

require = fn;
const View = fn(17).View;
const BOUNTY_ORB_AMOUNT = fn(5972).BOUNTY_ORB_AMOUNT;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
let PX_20 = nativeDefault.space.PX_20;
let PX_12 = nativeDefault.space.PX_12;
const contentContainerStyle = { backgroundColor: "transparent" };
let ReactCompilerGating = fn(558);
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? (function ListEdgeSpacer(width) {
  const cResult = c.c(2);
  width = width.width;
  if (cResult[0] !== width) {
    const obj2 = { style: null };
    const obj3 = { width };
    obj2.style = obj3;
    const tmp5 = options(View, obj2);
    cResult[0] = width;
    cResult[1] = tmp5;
    let tmp2 = tmp5;
  } else {
    tmp2 = cResult[1];
  }
  return tmp2;
}) : (function ListEdgeSpacer(width) {
  return options(View, { style: { width: width.width } });
});
ReactCompilerGating = fn(558);
const ItemSeparatorComponent = ReactCompilerGating.isReactCompilerEnabled() ? (function ItemSeparator() {
  const cResult = c.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { style: null };
    const obj3 = { width: PX_12 };
    obj2.style = obj3;
    const tmp6 = options(View, obj2);
    cResult[0] = tmp6;
    let first = tmp6;
  } else {
    first = cResult[0];
  }
  return first;
}) : (function ItemSeparator() {
  const obj = { style: { width: PX_12 } };
  return options(View, obj);
});
const data = Array.from({ length: fn(15325).MIN_PRODUCTS_FOR_ORB_SHOP_CAROUSEL }, (arg0, arg1) => arg1);
const createStyles = fn(5092);
let closure_17 = createStyles.createStyles(() => {
  const obj = { standaloneRoot: { marginTop: nativeDefault.space.PX_32 }, headerMediaRoot: null };
  const obj2 = { marginTop: nativeDefault.space.PX_32 };
  obj.headerMediaRoot = { paddingBottom: nativeDefault.space.PX_8 };
  return obj;
});
ReactCompilerGating = fn(558);
let closure_18 = ReactCompilerGating.isReactCompilerEnabled() ? (function useObtainableBountyOrbRewards() {
  const cResult = c.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [BountyStore];
    const fn = function t() {
      let num = 0;
      for (const item10007 of tmp) {
        if (!bountyCompleted.isBountyCompleted(item10007.id)) {
          num = num + BOUNTY_ORB_AMOUNT;
        }
        continue;
      }
      return num;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  return initialize.useStateFromStores(tmp4, tmp5);
}) : (function useObtainableBountyOrbRewards() {
  const items = [BountyStore];
  return initialize.useStateFromStores(items, () => {
    let num = 0;
    for (const item10007 of tmp) {
      if (!bountyCompleted.isBountyCompleted(item10007.id)) {
        num = num + BOUNTY_ORB_AMOUNT;
      }
      continue;
    }
    return num;
  });
});
fn(558);
let obj3 = { length: fn(15325).MIN_PRODUCTS_FOR_ORB_SHOP_CAROUSEL };
ReactCompilerGating = fn(558);
let closure_19 = ReactCompilerGating.isReactCompilerEnabled() ? (function QuestHomeOrbShopCarouselHeading(arg0) {
  const cResult = c.c(12);
  ({ orbRewardAmount, belowCarousel, listEdgeSpacing, compactHeading } = arg0);
  let num = 0;
  if (undefined !== belowCarousel && belowCarousel) {
    num = nativeDefault.space.PX_8;
  }
  let num2 = 0;
  if (!(undefined !== belowCarousel && belowCarousel)) {
    num2 = nativeDefault.space.PX_8;
  }
  if (cResult[0] === listEdgeSpacing) {
    if (cResult[1] === num) {
      if (cResult[2] === num2) {
        let tmp8 = cResult[3];
      }
      let str = "text-xs/medium";
      if (!tmp4) {
        let str2 = "text-md/semibold";
        if (tmp5) {
          str2 = "text-sm/semibold";
        }
        str = str2;
      }
      if (cResult[4] !== orbRewardAmount) {
        const intl = util.intl;
        const obj2 = { orbAmount: orbRewardAmount };
        const formatResult = intl.format(util.t.CXlsRP, obj2);
        cResult[4] = orbRewardAmount;
        cResult[5] = formatResult;
        let tmp9 = formatResult;
      } else {
        tmp9 = cResult[5];
      }
      if (cResult[6] === str) {
        if (cResult[7] === tmp9) {
          let tmp11 = cResult[8];
        }
        if (cResult[9] === tmp8) {
          if (cResult[10] === tmp11) {
            let tmp14 = cResult[11];
          }
          return tmp14;
        }
        const obj3 = { style: tmp8, children: tmp11 };
        const tmp17 = options(View, obj3);
        cResult[9] = tmp8;
        cResult[10] = tmp11;
        cResult[11] = tmp17;
        tmp14 = tmp17;
      }
      const obj4 = { variant: str, color: "text-strong", children: tmp9 };
      const tmp13 = options(Text_Text.Heading, obj4);
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
  tmp5 = undefined !== compactHeading && compactHeading;
}) : (function QuestHomeOrbShopCarouselHeading(orbAmount) {
  let flag = orbAmount.belowCarousel;
  if (flag === undefined) {
    flag = false;
  }
  ({ compactHeading, listEdgeSpacing } = orbAmount);
  if (compactHeading === undefined) {
    compactHeading = false;
  }
  const obj = { paddingHorizontal: listEdgeSpacing, marginTop: null, marginBottom: null };
  let num = 0;
  if (flag) {
    num = nativeDefault.space.PX_8;
  }
  obj.marginTop = num;
  let num2 = 0;
  if (!flag) {
    num2 = nativeDefault.space.PX_8;
  }
  const obj2 = { style: obj, children: null };
  obj.marginBottom = num2;
  let str = "text-xs/medium";
  if (!flag) {
    let str2 = "text-md/semibold";
    if (compactHeading) {
      str2 = "text-sm/semibold";
    }
    str = str2;
  }
  const obj3 = { variant: str, color: "text-strong", children: null };
  const intl = util.intl;
  obj3.children = intl.format(util.t.CXlsRP, { orbAmount: orbAmount.orbRewardAmount });
  obj2.children = options(Text_Text.Heading, obj3);
  return options(View, obj2);
});
ReactCompilerGating = fn(558);
let closure_20 = ReactCompilerGating.isReactCompilerEnabled() ? (function QuestHomeOrbShopCarouselPlaceholder(cardHeight) {
  const cResult = cardWidth(listEdgeSpacing[9]).c(18);
  ({ listStyle, cardWidth } = cardHeight);
  cardHeight = cardHeight.cardHeight;
  ({ cardStride, listEdgeSpacing } = cardHeight);
  if (cResult[0] === cardHeight) {
    if (cResult[1] === cardWidth) {
      let tmp4 = cResult[2];
    }
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const fn2 = function b(arg0) {
        return "placeholder-" + arg0;
      };
      cResult[3] = fn2;
      let tmp6 = fn2;
    } else {
      tmp6 = cResult[3];
    }
    if (cResult[4] !== listEdgeSpacing) {
      class E {
        constructor() {
          obj = { width: listEdgeSpacing };
          return jsx(ListEdgeSpacer, obj);
        }
      }
      cResult[4] = listEdgeSpacing;
      cResult[5] = E;
    } else {
      class E {
        constructor() {
          obj = { width: listEdgeSpacing };
          return jsx(ListEdgeSpacer, obj);
        }
      }
    }
    if (cResult[6] !== listEdgeSpacing) {
      class E {
        constructor() {
          obj = { width: listEdgeSpacing };
          return jsx(ListEdgeSpacer, obj);
        }
      }
      cResult[6] = listEdgeSpacing;
      cResult[7] = tmp9;
    } else {
      class E {
        constructor() {
          obj = { width: listEdgeSpacing };
          return jsx(ListEdgeSpacer, obj);
        }
      }
    }
    const _Symbol2 = Symbol;
    if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
      class E {
        constructor() {
          obj = { width: listEdgeSpacing };
          return jsx(ListEdgeSpacer, obj);
        }
      }
      const stringResult = obj2.string(cardWidth(listEdgeSpacing[13]).t.hVV8Wi);
      const obj3 = { busy: true };
      cResult[8] = stringResult;
      cResult[9] = obj3;
      let tmp11 = obj3;
      const tmp10 = stringResult;
    } else {
      class E {
        constructor() {
          obj = { width: listEdgeSpacing };
          return jsx(ListEdgeSpacer, obj);
        }
      }
      tmp11 = cResult[9];
    }
    if (cResult[10] !== listStyle) {
      class E {
        constructor() {
          obj = { width: listEdgeSpacing };
          return jsx(ListEdgeSpacer, obj);
        }
      }
      tmp14[0] = listStyle;
      tmp14[1] = contentContainerStyle;
      cResult[10] = listStyle;
      cResult[11] = tmp14;
    } else {
      class E {
        constructor() {
          obj = { width: listEdgeSpacing };
          return jsx(ListEdgeSpacer, obj);
        }
      }
    }
    if (cResult[12] === tmp9) {
      class E {
        constructor() {
          obj = { width: listEdgeSpacing };
          return jsx(ListEdgeSpacer, obj);
        }
      }
    }
    const obj4 = { horizontal: true, accessibilityRole: "list", accessibilityLabel: tmp10, accessibilityState: tmp11, data, keyExtractor: tmp6, renderItem: tmp4, style: tmp14, contentContainerStyle, decelerationRate: "fast", snapToInterval: cardStride, showsHorizontalScrollIndicator: false, ListHeaderComponent: E, ListFooterComponent: tmp9, ItemSeparatorComponent };
    const tmp21 = closure_9(cardWidth(listEdgeSpacing[16]).FlashList, obj4);
    cResult[12] = tmp9;
    cResult[13] = E;
    cResult[14] = cardStride;
    cResult[15] = tmp4;
    cResult[16] = tmp14;
    cResult[17] = tmp21;
  }
  const fn = function t() {
    const size = { width: cardWidth, height: cardHeight };
    return options(SkeletonCardDefault, size);
  };
  cResult[0] = cardHeight;
  cResult[1] = cardWidth;
  cResult[2] = fn;
  tmp4 = fn;
  const obj = cardWidth(listEdgeSpacing[9]);
}) : (function QuestHomeOrbShopCarouselPlaceholder(cardWidth) {
  cardWidth = cardWidth.cardWidth;
  const cardHeight = cardWidth.cardHeight;
  const listEdgeSpacing = cardWidth.listEdgeSpacing;
  const items = [cardWidth, cardHeight];
  ({ listStyle, cardStride } = cardWidth);
  const callback = noop.useCallback(() => {
    const size = { width: cardWidth, height: cardHeight };
    return options(SkeletonCardDefault, size);
  }, items);
  const items1 = [listEdgeSpacing];
  const callback1 = noop.useCallback((arg0) => "placeholder-" + arg0, []);
  const items2 = [listEdgeSpacing];
  const callback2 = noop.useCallback(() => options(closure_14, { width: listEdgeSpacing }), items1);
  const callback3 = noop.useCallback(() => options(closure_14, { width: listEdgeSpacing }), items2);
  const obj = { horizontal: true, accessibilityRole: "list", accessibilityLabel: null, accessibilityState: null, data: null, keyExtractor: null, renderItem: null, style: null, contentContainerStyle: null, decelerationRate: "fast", snapToInterval: null, showsHorizontalScrollIndicator: false, ListHeaderComponent: null, ListFooterComponent: null, ItemSeparatorComponent: null };
  const intl = cardWidth(listEdgeSpacing[13]).intl;
  obj.accessibilityLabel = intl.string(cardWidth(listEdgeSpacing[13]).t.hVV8Wi);
  obj.accessibilityState = { busy: true };
  obj.data = data;
  obj.keyExtractor = callback1;
  obj.renderItem = callback;
  const items3 = [listStyle, contentContainerStyle];
  obj.style = items3;
  obj.contentContainerStyle = contentContainerStyle;
  obj.snapToInterval = cardStride;
  obj.ListHeaderComponent = callback2;
  obj.ListFooterComponent = callback3;
  obj.ItemSeparatorComponent = ItemSeparatorComponent;
  return closure_9(cardWidth(listEdgeSpacing[16]).FlashList, obj);
});
ReactCompilerGating = fn(558);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useQuestHomeOrbShopCarouselData(arg0) {
  const cResult = c.c(7);
  ({ enabled, sortType } = arg0);
  const tmp4 = closure_18();
  if (cResult[0] === enabled) {
    if (cResult[1] === sortType) {
      let tmp5 = cResult[2];
    }
    const popularOrbShopProducts = usePopularOrbShopProducts.usePopularOrbShopProducts(tmp5);
    ({ products, showPlaceholderCarousel } = popularOrbShopProducts);
    if (cResult[3] === tmp4) {
      if (cResult[4] === products) {
        if (cResult[5] === showPlaceholderCarousel) {
          let tmp7 = cResult[6];
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
    const tmpResult = usePopularOrbShopProducts;
  }
  const obj3 = { enabled, sortType };
  cResult[0] = enabled;
  cResult[1] = sortType;
  cResult[2] = obj3;
  tmp5 = obj3;
}) : (function useQuestHomeOrbShopCarouselData(arg0) {
  ({ enabled, sortType } = arg0);
  const tmp = closure_18();
  const popularOrbShopProducts = usePopularOrbShopProducts.usePopularOrbShopProducts({ enabled, sortType });
  return { products: popularOrbShopProducts.products, obtainableOrbRewards: tmp, showPlaceholderCarousel: popularOrbShopProducts.showPlaceholderCarousel };
});
let size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/QuestHomeOrbShopCarousel.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function QuestHomeOrbShopCarousel(arg0) {
  const cResult = obtainableOrbRewards(576).c(58);
  ({ orbShopProducts, obtainableOrbRewards } = arg0);
  ({ showOrbShopPlaceholderCarousel, embedded, replacesHeaderMedia, listEdgeSpacing, clickable } = arg0);
  closure_1 = tmp4;
  dependencyMap = tmp6;
  if (undefined === listEdgeSpacing) {
    listEdgeSpacing = PX_20;
  }
  noop = undefined !== clickable && clickable;
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
  let obj = obtainableOrbRewards(576);
  const tmp5 = undefined !== embedded && embedded;
  let ONYX = obtainableOrbRewards(504).useStateFromStores(tmp8, tmp9);
  if (tmp5) {
    ONYX = obtainableOrbRewards(15313).ThemeTypes.ONYX;
  }
  if (undefined !== replacesHeaderMedia && replacesHeaderMedia) {
    let COLLECTIBLES_SHOP_CARD_WIDTH = obtainableOrbRewards(15338).QUEST_HOME_REPLACE_MEDIA_CARD_WIDTH;
  } else {
    COLLECTIBLES_SHOP_CARD_WIDTH = obtainableOrbRewards(8967).COLLECTIBLES_SHOP_CARD_WIDTH;
  }
  if (undefined !== replacesHeaderMedia && replacesHeaderMedia) {
    COLLECTIBLES_SHOP_CARD_HEIGHT = obtainableOrbRewards(15338).QUEST_HOME_REPLACE_MEDIA_CARD_HEIGHT;
  } else {
    COLLECTIBLES_SHOP_CARD_HEIGHT = obtainableOrbRewards(8967).COLLECTIBLES_SHOP_CARD_HEIGHT;
  }
  if (cResult[2] !== COLLECTIBLES_SHOP_CARD_WIDTH) {
    const sum = COLLECTIBLES_SHOP_CARD_WIDTH + PX_12;
    cResult[2] = COLLECTIBLES_SHOP_CARD_WIDTH;
    cResult[3] = sum;
    let tmp11 = sum;
  } else {
    tmp11 = cResult[3];
  }
  closure_7 = tmp11;
  if (cResult[4] !== COLLECTIBLES_SHOP_CARD_HEIGHT) {
    let obj2 = { height: COLLECTIBLES_SHOP_CARD_HEIGHT };
    cResult[4] = COLLECTIBLES_SHOP_CARD_HEIGHT;
    cResult[5] = obj2;
  }
  if (cResult[6] !== listEdgeSpacing) {
    class X {
      constructor() {
        obj = { width: closure_3 };
        return jsx(ListEdgeSpacer, obj);
      }
    }
    cResult[6] = listEdgeSpacing;
    cResult[7] = X;
  } else {
    class X {
      constructor() {
        obj = { width: closure_3 };
        return jsx(ListEdgeSpacer, obj);
      }
    }
  }
  if (cResult[8] !== listEdgeSpacing) {
    class G {
      constructor() {
        obj = { width: closure_3 };
        return jsx(ListEdgeSpacer, obj);
      }
    }
    cResult[8] = listEdgeSpacing;
    cResult[9] = G;
  } else {
    class G {
      constructor() {
        obj = { width: closure_3 };
        return jsx(ListEdgeSpacer, obj);
      }
    }
  }
  const tmp17 = listEdgeSpacing(noop.useState(0), 2);
  closure_8 = tmp17[0];
  closure_9 = tmp17[1];
  PX_20 = noop.useRef(false);
  let tmp18 = obtainableOrbRewards > 0;
  if (tmp18) {
    class G {
      constructor() {
        obj = { width: closure_3 };
        return jsx(ListEdgeSpacer, obj);
      }
    }
    if (!tmp4) {
      class G {
        constructor() {
          obj = { width: closure_3 };
          return jsx(ListEdgeSpacer, obj);
        }
      }
    }
    tmp18 = tmp19;
  }
  PX_12 = tmp18;
  if (cResult[10] === orbShopProducts.length) {
    class G {
      constructor() {
        obj = { width: closure_3 };
        return jsx(ListEdgeSpacer, obj);
      }
    }
  }
  class N {
    constructor() {
      current = closure_11.current;
      tmp = closure_11;
      if (!current) {
        tmp2 = closure_12;
        current = !closure_12;
      }
      if (!current) {
        current = closure_1;
      }
      if (!current) {
        flag = true;
        tmp.current = true;
        tmp3 = closure_0;
        tmp4 = closure_2;
        obj = closure_0(closure_2[20]);
        obj1 = { obtainableOrbRewards: null, carouselSize: null, isPlaceholderCarousel: false };
        tmp5 = obtainableOrbRewards;
        obj1.obtainableOrbRewards = obtainableOrbRewards;
        tmp6 = length;
        obj1.carouselSize = length;
        result = obj.trackQuestHomeOrbShopCarouselViewed(obj1);
      }
      return;
    }
  }
  const items1 = [orbShopProducts.length, tmp18, obtainableOrbRewards, undefined !== showOrbShopPlaceholderCarousel && showOrbShopPlaceholderCarousel];
  cResult[10] = orbShopProducts.length;
  cResult[11] = tmp18;
  cResult[12] = obtainableOrbRewards;
  cResult[13] = undefined !== showOrbShopPlaceholderCarousel && showOrbShopPlaceholderCarousel;
  cResult[14] = N;
  cResult[15] = items1;
  const tmpResult = obtainableOrbRewards(504);
}) : (function QuestHomeOrbShopCarousel(showOrbShopPlaceholderCarousel) {
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
  c7 = undefined;
  let first;
  closure_9 = undefined;
  let length;
  ref = undefined;
  closure_12 = undefined;
  const tmp = closure_17();
  obtainableOrbRewards(flag3[12]);
  [][0] = COLLECTIBLES_SHOP_CARD_HEIGHT;
  if (flag2) {
    let ONYX = obtainableOrbRewards(tmp3[17]).ThemeTypes.ONYX;
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
  const items = [COLLECTIBLES_SHOP_CARD_HEIGHT];
  const memo = flag4.useMemo(() => ({ height: COLLECTIBLES_SHOP_CARD_HEIGHT }), items);
  const items1 = [listEdgeSpacing];
  const items2 = [listEdgeSpacing];
  const callback = flag4.useCallback(() => options(closure_14, { width: listEdgeSpacing }), items1);
  const callback1 = flag4.useCallback(() => options(closure_14, { width: listEdgeSpacing }), items2);
  const tmp10 = listEdgeSpacing(flag4.useState(0), 2);
  first = tmp10[0];
  closure_9 = tmp10[1];
  length = orbShopProducts.length;
  ref = flag4.useRef(false);
  let tmp12 = obtainableOrbRewards > 0;
  if (tmp12) {
    let tmp13 = flag;
    if (!flag) {
      tmp13 = length > 0;
    }
    tmp12 = tmp13;
  }
  closure_12 = tmp12;
  const items3 = [length, tmp12, obtainableOrbRewards, flag];
  const effect = obj.useEffect(() => {
    let current = ref.current;
    if (!current) {
      current = !closure_12;
    }
    if (!current) {
      current = flag;
    }
    if (!current) {
      ref.current = true;
      const obj2 = { obtainableOrbRewards, carouselSize: length, isPlaceholderCarousel: false };
      const result = AnalyticsActions.trackQuestHomeOrbShopCarouselViewed(obj2);
    }
  }, items3);
  const items4 = [first, sum, length];
  const items5 = [COLLECTIBLES_SHOP_CARD_HEIGHT, COLLECTIBLES_SHOP_CARD_WIDTH, flag4, flag3];
  const callback2 = obj.useCallback((nativeEvent) => {
    const rounded = Math.round(nativeEvent.nativeEvent.contentOffset.x / c7);
    if (rounded !== first) {
      let result = dependencyMap;
      if (rounded > tmp2) {
        let LEFT = AnalyticsTypes.HorizontalScrollingDirection.RIGHT;
      } else {
        LEFT = AnalyticsTypes.HorizontalScrollingDirection.LEFT;
      }
      const obj2 = { scrollingDirection: LEFT, carouselPosition: rounded, carouselSize: length };
      result = AnalyticsActions.trackQuestHomeOrbShopCarouselScroll(obj2);
      closure_9(rounded);
    }
  }, items4);
  const callback3 = obj.useCallback((arg0) => {
    ({ item, index } = arg0);
    const obj = { newValue: { tilePosition: index, pageSection: "quest_home_orb_shop" }, children: options(QuestHomeOrbShopRewardCardDefault, { product: item, cardWidth: COLLECTIBLES_SHOP_CARD_WIDTH, cardHeight: COLLECTIBLES_SHOP_CARD_HEIGHT, hideCardDetails: flag3, clickable: flag4 }) };
    return options(CollectiblesAnalyticsContext.CollectiblesAnalyticsProvider, obj);
  }, items5);
  if (tmp12) {
    if (flag3) {
      let standaloneRoot = tmp.headerMediaRoot;
    } else if (!flag2) {
      standaloneRoot = tmp.standaloneRoot;
    }
    let obj2 = { theme: ONYX, children: null };
    const obj3 = { style: standaloneRoot, children: null };
    let tmp19Result = !flag3;
    if (!flag3) {
      const obj4 = { orbRewardAmount: obtainableOrbRewards, listEdgeSpacing, compactHeading: flag2 };
      tmp19Result = tmp19(closure_19, obj4);
    }
    const items6 = [tmp19Result, , ];
    const obj5 = { style: memo, children: null };
    if (flag) {
      const obj6 = { listStyle: memo, cardWidth: COLLECTIBLES_SHOP_CARD_WIDTH, cardHeight: COLLECTIBLES_SHOP_CARD_HEIGHT, cardStride: sum, listEdgeSpacing };
      let tmp19Result2 = tmp19(closure_20, obj6);
    } else {
      const obj7 = { horizontal: true, accessibilityRole: "list", accessibilityLabel: null, data: null, keyExtractor: null, renderItem: null, style: null, contentContainerStyle: null, decelerationRate: "fast", snapToInterval: null, showsHorizontalScrollIndicator: false, ListHeaderComponent: null, ListFooterComponent: null, ItemSeparatorComponent: null, onMomentumScrollEnd: null };
      const intl = obtainableOrbRewards(tmp3[13]).intl;
      obj7.accessibilityLabel = intl.string(obtainableOrbRewards(tmp3[13]).t.hVV8Wi);
      obj7.data = orbShopProducts;
      obj7.keyExtractor = tmp17;
      obj7.renderItem = callback3;
      const items7 = [memo, contentContainerStyle];
      obj7.style = items7;
      obj7.contentContainerStyle = contentContainerStyle;
      obj7.snapToInterval = sum;
      obj7.ListHeaderComponent = callback;
      obj7.ListFooterComponent = callback1;
      obj7.ItemSeparatorComponent = ItemSeparatorComponent;
      obj7.onMomentumScrollEnd = callback2;
      tmp19Result2 = tmp19(obtainableOrbRewards(tmp3[16]).FlashList, obj7);
    }
    obj5.children = tmp19Result2;
    items6[1] = closure_9(COLLECTIBLES_SHOP_CARD_WIDTH, obj5);
    if (flag3) {
      const obj8 = { orbRewardAmount: obtainableOrbRewards, belowCarousel: true, listEdgeSpacing, compactHeading: true };
      flag3 = tmp19(closure_19, obj8);
    }
    items6[2] = flag3;
    obj3.children = items6;
    obj2.children = length(COLLECTIBLES_SHOP_CARD_WIDTH, obj3);
    return closure_9(obtainableOrbRewards(tmp3[23]).ThemeContextProvider, obj2);
  } else {
    return null;
  }
});
export const useQuestHomeOrbShopCarouselData = tmp3;