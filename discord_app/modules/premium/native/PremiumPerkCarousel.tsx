// discord_app/modules/premium/native/PremiumPerkCarousel.tsx
import PremiumPerkCard from "PremiumPerkCard.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

const PremiumPerkCardDefault = PremiumPerkCard;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4560);
let closure_8 = createStyles.createStyles({
  title: { marginLeft: 24 },
  indicators: { marginBottom: -36 },
  carousel: { marginTop: 16 },
  carouselCard: { marginLeft: 8 },
  lastCarouselCard: { marginRight: 8 },
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/native/PremiumPerkCarousel.tsx");

export default function PremiumPerkCarousel(arg0) {
  ({ perks, onItemChange } = arg0);
  let currentIndex;
  _slicedToArray = undefined;
  let length;
  ({ title, style } = arg0);
  const tmp = closure_8();
  importDefault = tmp;
  let obj = onItemChange(currentIndex[5]);
  const perkCardHeight = obj.usePerkCardHeight(onItemChange(currentIndex[5]).PerkCardVariant.NARROW);
  const tmp3 = _slicedToArray(length.useState(0), 2);
  currentIndex = tmp3[0];
  _slicedToArray = tmp3[1];
  let items = [currentIndex, onItemChange];
  const callback = length.useCallback((arg0) => {
    if (arg0 !== first) {
      closure_3(arg0);
      if (onItemChange != null) {
        onItemChange(arg0);
      }
    }
  }, items);
  const width = onItemChange(currentIndex[5]).PERK_CARD_SIZES[
    onItemChange(undefined, currentIndex[5]).PerkCardVariant.NARROW
  ].width;
  length = perks.length;
  obj = { style, children: null };
  obj = { style: tmp.title, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: title };
  const items1 = [closure_6(onItemChange(currentIndex[6]).Text, obj), ,];
  const obj1 = {
    style: null,
    width,
    onPageChange: callback,
    pageIndictor: false,
    scrollViewProps: {
      overScrollMode: "always",
      snapToInterval: width + 8 + 0.2,
      snapToStart: true,
      snapToAlignment: "start",
      decelerationRate: "normal",
    },
    children: perks.map((item, index) => {
      const items = [closure_1.carouselCard];
      let lastCarouselCard = null;
      if (length - 1 === index) {
        lastCarouselCard = closure_1.lastCarouselCard;
      }
      items[1] = lastCarouselCard;
      const obj = {};
      const merged = Object.assign(item);
      obj.variant = PremiumPerkCard.PerkCardVariant.NARROW;
      obj.style = items;
      return timestampProducer(PremiumPerkCardDefault, obj, index);
    }),
  };
  const items2 = [tmp.carousel, { height: perkCardHeight + 8 }];
  obj1.style = items2;
  items1[1] = closure_6(require("Carousel"), obj1);
  items1[2] = closure_6(onItemChange(currentIndex[8]).CarouselPagination, {
    containerStyle: tmp.indicators,
    numberOfItems: perks.length,
    currentIndex,
  });
  obj.children = items1;
  return closure_7(View, obj);
}
