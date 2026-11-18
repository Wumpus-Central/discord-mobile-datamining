// === Module 12208: GameOrganizationBenefitsCarousel ===

// Module 12208 (GameOrganizationBenefitsCarousel)
import nativeDefault from "native" /* 575 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1496 */;
import Text_Text from "Text/Text" /* 5414 */;
import Stack_Stack from "Stack/Stack" /* 5837 */;
import Card from "Card" /* 6958 */;
import GameOrganizationBenefits from "GameOrganizationBenefits" /* 12221 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
function BenefitCard(isLast) {
  isLast = isLast.isLast;
  ({ text, Illustration } = isLast);
  const tmp = closure_11(isLast.cardWidth);
  items = [tmp.card, ];
  let cardSpacing = !isLast;
  if (!isLast) {
    cardSpacing = tmp.cardSpacing;
  }
  obj = { border: "none", radius: 12, style: items, children: null };
  items[1] = cardSpacing;
  const obj2 = { spacing: nativeDefault.space.PX_24, children: null };
  const items1 = [timestampProducer(Illustration, { width: "100%", accessible: false }), timestampProducer(Text_Text.Text, { variant: "body-sm/medium", color: "text-subtle", children: text })];
  obj2.children = items1;
  obj.children = metroImportDefault(Stack_Stack.Stack, obj2);
  return timestampProducer(Card.Card, obj);
}
function BenefitsCarousel(cardWidth) {
  cardWidth = cardWidth.cardWidth;
  const noun = cardWidth.noun;
  _slicedToArray = undefined;
  noop = undefined;
  const sum = cardWidth + PX_12;
  dependencyMap = sum;
  const tmp2 = closure_11(cardWidth);
  [tmp4, c3] = noop.useState(0);
  const tmp3 = _slicedToArray(noop.useState(0), 2);
  [tmp6, c4] = noop.useState(0);
  const tmp7 = _slicedToArray(noop.useState(0), 2);
  closure_5 = tmp7[1];
  obj = { style: tmp2.carouselContainer, children: null };
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
  const prop = cardWidth(12221).GAME_ORGANIZATION_BENEFITS;
  obj2.children = prop.map((key, index) => {
    obj = { cardWidth, text: key.key.getText(noun), Illustration: obj[key.key], isLast: index === GameOrganizationBenefits.GAME_ORGANIZATION_BENEFITS.length - 1 };
    return timestampProducer(BenefitCard, obj, key.key);
  });
  obj.children = closure_6(noun(10464), obj2);
  const children = [closure_6(closure_5, obj), ];
  let tmp10Result = null;
  if (cardWidth(12221).GAME_ORGANIZATION_BENEFITS.length > 1) {
    tmp10Result = null;
    if (tmp6 > 0) {
      tmp10Result = null;
      if (tmp7[0] > tmp6) {
        const obj3 = { containerStyle: tmp2.pagination, numberOfItems: tmp13(12221).GAME_ORGANIZATION_BENEFITS.length, currentIndex: tmp4 };
        tmp10Result = closure_6(tmp13(1187).CarouselPagination, obj3);
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
let obj = { "auto-sync": fn(12209).GuildRolesAbstractUI, "linked-channel": fn(12213).GuildChatAbstractUI, "guild-invite": fn(12217).GuildInviteAbstractUI };
const createStyles = fn(4823);
let closure_11 = createStyles.createStyles((width) => {
  obj = { carouselContainer: { marginHorizontal: -PX_16 }, carousel: { alignItems: "stretch" }, carouselContent: { paddingHorizontal: PX_16 }, card: { padding: nativeDefault.space.PX_16, width, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED }, cardSpacing: { marginRight: PX_12 }, pagination: { paddingBottom: 0 } };
  return obj;
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_organization_invites/native/GameOrganizationJoinModal/GameOrganizationBenefitsCarousel.tsx");

export default function GameOrganizationBenefitsCarousel(noun) {
  const width = useWindowDimensionsDefault().width;
  return timestampProducer(BenefitsCarousel, { cardWidth: Math.min(0.75 * width, 400), noun: noun.noun }, width);
};