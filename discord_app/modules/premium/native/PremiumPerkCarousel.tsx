// === Module 13083: PremiumPerkCarousel ===

// Module 13083 (PremiumPerkCarousel)
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4448 */;

const require = arg1;
({ jsx: closure_6, jsxs: error } = jsxProd);
let closure_8 = createCacheKey.createStyles({ title: { marginLeft: 24 }, indicators: { marginBottom: -36 }, carousel: { marginTop: 16 }, carouselCard: { marginLeft: 8 }, lastCarouselCard: { marginRight: 8 } });
const result = require("set").fileFinishedImporting("modules/premium/native/PremiumPerkCarousel.tsx");

export default function PremiumPerkCarousel(arg0) {
  ({ perks, onItemChange } = arg0);
  importDefault = undefined;
  let first;
  let callback;
  let length;
  ({ title, style } = arg0);
  const tmp = callback4();
  importDefault = tmp;
  let obj = onItemChange(first[5]);
  const perkCardHeight = obj.usePerkCardHeight(onItemChange(first[5]).PerkCardVariant.NARROW);
  const tmp3 = callback(length.useState(0), 2);
  first = tmp3[0];
  callback = tmp3[1];
  let items = [first, onItemChange];
  callback = length.useCallback((arg0) => {
    if (arg0 !== first) {
      callback(arg0);
      if (onItemChange != null) {
        onItemChange(arg0);
      }
    }
  }, items);
  const width = onItemChange(first[5]).PERK_CARD_SIZES[onItemChange(undefined, first[5]).PerkCardVariant.NARROW].width;
  length = perks.length;
  obj = { style, children: null };
  obj = { style: tmp.title, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: title };
  const items1 = [callback2(onItemChange(first[6]).Text, obj), , ];
  obj1 = {
    style: items2,
    width,
    onPageChange: callback,
    pageIndictor: false,
    scrollViewProps: obj3,
    children: perks.map((arg0, arg1) => {
      const items = [lib.carouselCard, ];
      let lastCarouselCard = null;
      if (length - 1 === arg1) {
        lastCarouselCard = lib.lastCarouselCard;
      }
      items[1] = lastCarouselCard;
      const obj = {};
      const merged = Object.assign(arg0);
      obj.variant = onItemChange(first[5]).PerkCardVariant.NARROW;
      obj.style = items;
      return closure_1_6(lib(first[5]), obj, arg1);
    })
  };
  items2 = [tmp.carousel, { height: perkCardHeight + 8 }];
  items1[1] = callback2(importDefault(first[7]), obj1);
  items1[2] = callback2(onItemChange(first[8]).CarouselPagination, { containerStyle: tmp.indicators, numberOfItems: perks.length, currentIndex: first });
  obj[1] = items1;
  return callback3(View, obj);
};