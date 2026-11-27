// === Module 12358: GameOrganizationBenefitsCarousel ===

// Module 12358 (GameOrganizationBenefitsCarousel)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1112 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1495 */;
import Text_Text from "Text/Text" /* 5634 */;
import Stack_Stack from "Stack/Stack" /* 6115 */;
import Card from "Card" /* 6145 */;
import GameOrganizationBenefits from "GameOrganizationBenefits" /* 12359 */;
import GameOrganizationBenefitIllustrations from "GameOrganizationBenefitIllustrations" /* 12360 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
function BenefitCard(isLast) {
  isLast = isLast.isLast;
  ({ text, Illustration } = isLast);
  const tmp = closure_10(isLast.cardWidth);
  items = [tmp.card, ];
  let cardSpacing = !isLast;
  if (!isLast) {
    cardSpacing = tmp.cardSpacing;
  }
  const obj = { border: "none", radius: 12, style: items, children: null };
  items[1] = cardSpacing;
  const obj2 = { spacing: nativeDefault.space.PX_24, children: null };
  const items1 = [timestampProducer(Illustration, { width: "100%", accessible: false }), timestampProducer(Text_Text.Text, { variant: "body-sm/medium", color: "text-subtle", children: text })];
  obj2.children = items1;
  obj.children = metroImportDefault(Stack_Stack.Stack, obj2);
  return timestampProducer(Card.Card, obj);
}
function BenefitsCarousel(cardWidth) {
  cardWidth = cardWidth.cardWidth;
  const displayNoun = cardWidth.displayNoun;
  _slicedToArray = undefined;
  noop = undefined;
  const sum = cardWidth + PX_12;
  dependencyMap = sum;
  const tmp2 = closure_10(cardWidth);
  [tmp4, c3] = noop.useState(0);
  const tmp3 = _slicedToArray(noop.useState(0), 2);
  [tmp6, c4] = noop.useState(0);
  const tmp7 = _slicedToArray(noop.useState(0), 2);
  closure_5 = tmp7[1];
  let obj = { style: tmp2.carouselContainer, children: null };
  const obj2 = {
    style: tmp2.carousel,
    width: sum,
    pageIndictor: false,
    scrollViewProps: {
      contentContainerStyle: tmp2.carouselContent,
      onLayout(nativeEvent) {
        return _undefined2(nativeEvent.nativeEvent.layout.width);
      },
      onContentSizeChange(arg0) {
        return closure_5(arg0);
      },
      onScroll: function handleScroll(nativeEvent) {
        nativeEvent = nativeEvent.nativeEvent;
        const contentOffset = nativeEvent.contentOffset;
        const diff = nativeEvent.contentSize.width - nativeEvent.layoutMeasurement.width;
        if (diff > 0) {
          if (contentOffset.x >= diff - 1) {
            let diff1 = GameOrganizationBenefits.GAME_ORGANIZATION_BENEFITS.length - 1;
          }
          const _Math = Math;
          const _Math2 = Math;
          const bound = Math.max(diff1, 0);
          _undefined(Math.min(bound, GameOrganizationBenefits.GAME_ORGANIZATION_BENEFITS.length - 1));
        }
        diff1 = Math.round(contentOffset.x / c2);
      },
      scrollEventThrottle: 16,
      snapToInterval: sum,
      snapToAlignment: "start",
      decelerationRate: "fast"
    },
    children: null
  };
  const tmp5 = _slicedToArray(noop.useState(0), 2);
  const tmp9 = closure_5;
  const prop = cardWidth(12359).GAME_ORGANIZATION_BENEFITS;
  obj2.children = prop.map((key, index) => {
    const obj = { cardWidth, text: null, Illustration: null, isLast: null };
    const intl = util.intl;
    let str = displayNoun;
    if (displayNoun == null) {
      str = "other";
    }
    obj.text = intl.formatToPlainString(key.key.message, { displayNoun: str });
    obj.Illustration = GameOrganizationBenefitIllustrations.GAME_ORGANIZATION_BENEFIT_ILLUSTRATIONS[key.key];
    obj.isLast = index === GameOrganizationBenefits.GAME_ORGANIZATION_BENEFITS.length - 1;
    return timestampProducer(BenefitCard, obj, key.key);
  });
  obj.children = closure_6(displayNoun(9695), obj2);
  const children = [closure_6(closure_5, obj), ];
  let tmp10Result = null;
  if (cardWidth(12359).GAME_ORGANIZATION_BENEFITS.length > 1) {
    tmp10Result = null;
    if (tmp6 > 0) {
      tmp10Result = null;
      if (tmp7[0] > tmp6) {
        const obj3 = { containerStyle: tmp2.pagination, numberOfItems: tmp13(12359).GAME_ORGANIZATION_BENEFITS.length, currentIndex: tmp4 };
        tmp10Result = closure_6(tmp13(1186).CarouselPagination, obj3);
      }
    }
  }
  children[1] = tmp10Result;
  return closure_7(tmp9, { children });
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_6, jsxs: metroImportDefault } = jsxProd);
const PX_16 = nativeDefault.space.PX_16;
const PX_12 = nativeDefault.space.PX_12;
const createStyles = fn(5043);
let closure_10 = createStyles.createStyles((width) => {
  const obj = { carouselContainer: { marginHorizontal: -PX_16 }, carousel: { alignItems: "stretch" }, carouselContent: { paddingHorizontal: PX_16 }, card: { padding: nativeDefault.space.PX_16, width, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED }, cardSpacing: { marginRight: PX_12 }, pagination: { paddingBottom: 0 } };
  return obj;
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_organization_invites/native/GameOrganizationJoinModal/GameOrganizationBenefitsCarousel.tsx");

export default function GameOrganizationBenefitsCarousel(displayNoun) {
  const width = useWindowDimensionsDefault().width;
  return timestampProducer(BenefitsCarousel, { cardWidth: Math.min(0.75 * width, 400), displayNoun: displayNoun.displayNoun }, width);
};