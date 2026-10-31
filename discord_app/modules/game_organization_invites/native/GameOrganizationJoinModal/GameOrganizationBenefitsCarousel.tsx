// discord_app/modules/game_organization_invites/native/GameOrganizationJoinModal/GameOrganizationBenefitsCarousel.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import _modDef2404 from "../../GameOrganizationInvitesUntranslated.messages.js";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import FastImageDefault from "../../../../components_native/common/FastImage.tsx";
import Stack_Stack from "../../../../design/components/Stack/native/Stack.native.tsx";
import Card from "../../../../design/components/Card/native/Card.native.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
function BenefitCard(arg0) {
  ({ img, isLast } = arg0);
  ({ text, width } = arg0);
  const tmp = closure_10();
  items = [tmp.card, { width }];
  let cardSpacing = !isLast;
  if (!isLast) {
    cardSpacing = tmp.cardSpacing;
  }
  const obj = { style: items, children: null };
  items[2] = cardSpacing;
  const obj2 = { spacing: nativeDefault.space.PX_24, children: null };
  if (null != img) {
    const obj3 = { source: null, style: null, resizeMode: "cover", accessible: false };
    const obj4 = { uri: img };
    obj3.source = obj4;
    obj3.style = tmp.benefitImage;
    let tmp2Result = timestampProducer(FastImageDefault, obj3);
  } else {
    const obj5 = { style: tmp.benefitImage };
    tmp2Result = timestampProducer(View, obj5);
  }
  const items1 = [
    tmp2Result,
    timestampProducer(Text_Text.Text, { variant: "text-sm/medium", color: "text-subtle", children: text }),
  ];
  obj2.children = items1;
  obj.children = React5(Stack_Stack.Stack, obj2);
  return timestampProducer(Card.Card, obj);
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const PX_16 = nativeDefault.space.PX_16;
const PX_12 = nativeDefault.space.PX_12;
let items = [{ message: _modDef2404.WUVzdk }];
let obj = { message: _modDef2404.WUVzdk };
items[1] = { message: _modDef2404.MEQJ1m };
const createStyles = fn(5014);
let obj4 = {
  carouselContainer: { marginHorizontal: -PX_16 },
  carousel: { alignItems: "stretch" },
  carouselContent: { paddingHorizontal: PX_16 },
  card: null,
  cardSpacing: null,
  benefitImage: null,
  pagination: null,
};
let obj2 = { message: _modDef2404.MEQJ1m };
obj4.card = { padding: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_32 };
obj4.cardSpacing = { marginRight: PX_12 };
let obj5 = { padding: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_32 };
obj4.benefitImage = {
  width: "100%",
  aspectRatio: 1.7,
  borderRadius: nativeDefault.radii.lg,
  overflow: "hidden",
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
};
obj4.pagination = { paddingBottom: 0 };
let closure_10 = createStyles.createStyles(obj4);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/game_organization_invites/native/GameOrganizationJoinModal/GameOrganizationBenefitsCarousel.tsx",
);

export default function GameOrganizationBenefitsCarousel() {
  const tmp = closure_10();
  [width, require] = noop.useState(null);
  const tmp5 = _slicedToArray(noop.useState(0), 2);
  importDefault = tmp5[1];
  if (width == null) {
    width = require("useWindowDimensions")({ ignoreKeyboard: true }).width;
  }
  rounded = Math.round(0.75 * width);
  const sum = rounded + PX_12;
  _slicedToArray = sum;
  items = [rounded];
  const items1 = [sum];
  const callback = noop.useCallback((nativeEvent) => {
    const width = nativeEvent.nativeEvent.layout.width;
    if (Math.round(0.75 * width) !== rounded) {
      closure_1(0);
    }
    require(width);
  }, items);
  const obj2 = { style: tmp.carouselContainer, onLayout: callback, children: null };
  const callback1 = noop.useCallback((nativeEvent) => {
    closure_1(Math.min(Math.max(Math.round(nativeEvent.nativeEvent.contentOffset.x / sum), 0), items.length - 1));
  }, items1);
  const obj3 = {
    style: tmp.carousel,
    width: sum,
    pageIndictor: false,
    scrollViewProps: {
      contentContainerStyle: tmp.carouselContent,
      onScroll: callback1,
      scrollEventThrottle: 16,
      snapToInterval: sum,
      snapToAlignment: "start",
      decelerationRate: "fast",
    },
    children: null,
  };
  const tmp4 = _slicedToArray(noop.useState(null), 2);
  obj3.children = items.map((item, index) => {
    const obj = { text: null, img: null, width: null, isLast: null };
    ({ message, img } = item);
    const intl = util.intl;
    obj.text = intl.string(message);
    obj.img = img;
    obj.width = rounded;
    obj.isLast = index === items.length - 1;
    return timestampProducer(BenefitCard, obj, index);
  });
  obj2.children = closure_6(require("Carousel"), obj3, rounded);
  const children = [closure_6(View, obj2)];
  let tmp12Result = null;
  if (items.length > 1) {
    const obj4 = { containerStyle: tmp.pagination, numberOfItems: items.length, currentIndex: tmp5[0] };
    tmp12Result = closure_6(require("native").CarouselPagination, obj4);
  }
  children[1] = tmp12Result;
  return closure_7(View, { children });
}
