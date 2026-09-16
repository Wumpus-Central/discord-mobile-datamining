// discord_app/modules/premium/native/PremiumPerkCarousel.tsx
import PremiumPerkCard from "PremiumPerkCard.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;
const PremiumPerkCardDefault = PremiumPerkCard;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4638);
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
  currentIndex = undefined;
  _slicedToArray = undefined;
  let length;
  ({ title, style } = arg0);
  const tmp = closure_8();
  importDefault = tmp;
  const perkCardHeight = onItemChange(currentIndex[5]).usePerkCardHeight(
    onItemChange(currentIndex[5]).PerkCardVariant.NARROW,
  );
  [currentIndex, _slicedToArray] = length.useState(0);
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
  const obj2 = { style, children: null };
  const items1 = [
    closure_6(onItemChange(currentIndex[6]).Text, {
      style: tmp.title,
      variant: "heading-xl/extrabold",
      color: "mobile-text-heading-primary",
      children: title,
    }),
    ,
  ];
  const obj4 = {
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
    children: null,
  };
  const items2 = [tmp.carousel, { height: perkCardHeight + 8 }];
  obj4.style = items2;
  let obj = onItemChange(currentIndex[5]);
  const obj3 = {
    style: tmp.title,
    variant: "heading-xl/extrabold",
    color: "mobile-text-heading-primary",
    children: title,
  };
  const obj5 = { height: perkCardHeight + 8 };
  const obj6 = {
    overScrollMode: "always",
    snapToInterval: width + 8 + 0.2,
    snapToStart: true,
    snapToAlignment: "start",
    decelerationRate: "normal",
  };
  obj4.children = perks.map((item, index) => {
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
  });
  items1[1] = closure_6(require("Carousel"), obj4);
  items1[2] = closure_6(onItemChange(currentIndex[8]).CarouselPagination, {
    containerStyle: tmp.indicators,
    numberOfItems: perks.length,
    currentIndex,
  });
  obj2.children = items1;
  return closure_7(View, obj2);
}
