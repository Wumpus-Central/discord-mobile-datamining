// === Module 6223: GiftCardMobileConsumptionActionSheet ===

// Module 6223 (GiftCardMobileConsumptionActionSheet)
import ThemesDefault from "Themes" /* 712 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1628 */;
import messagesProxyDefault from "messagesProxy" /* 2141 */;
import closure_3 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { ContentDismissActionType } from "ContentDismissActionType" /* 1384 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4448 */;

const require = arg1;
({ jsx: closure_6, jsxs: error } = jsxProd);
createCacheKey = { sheet: null, container: null, illustration: null, body: null };
createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { paddingHorizontal: ThemesDefault.space.PX_16 };
const obj1 = { paddingHorizontal: ThemesDefault.space.PX_16 };
createCacheKey[2] = { alignSelf: "stretch", alignItems: "center", paddingTop: ThemesDefault.space.PX_12 };
createCacheKey[3] = { textAlign: "center", fontFamily: "gg sans", fontSize: 16, fontWeight: 600, lineHeight: 20, alignSelf: "center", width: 280 };
let closure_8 = createCacheKey.createStyles(createCacheKey);
let obj2 = { alignSelf: "stretch", alignItems: "center", paddingTop: ThemesDefault.space.PX_12 };
const result = require("set").fileFinishedImporting("modules/checkout/native/GiftCardMobileConsumptionActionSheet.tsx");

export default function GiftCardMobileConsumptionActionSheet(markAsDismissed) {
  markAsDismissed = markAsDismissed.markAsDismissed;
  importDefault = undefined;
  dependencyMap = undefined;
  let React;
  const tmp = callback3();
  importDefault = React.useRef(false);
  dependencyMap = React.useRef(markAsDismissed);
  const items = [markAsDismissed];
  const effect = React.useEffect(() => {
    closure_2.current = markAsDismissed;
  }, items);
  const effect1 = React.useEffect(() => () => {
    if (!ref.current) {
      ref2.current(closure_1_5.AUTO_DISMISS);
    }
  }, []);
  const items1 = [markAsDismissed];
  React = React.useCallback((arg0) => {
    if (!ref.current) {
      tmp.current = true;
      markAsDismissed(arg0);
      ref(table[7]).hideActionSheet();
      const obj = ref(table[7]);
    }
  }, items1);
  let obj = {
    startExpanded: true,
    backgroundStyles: tmp.sheet,
    onDismiss() {
      return callback(closure_1_5.USER_DISMISS);
    },
    children: null
  };
  obj = { style: items2, children: null };
  items2 = [tmp.container, { paddingBottom: useSafeAreaInsetsDefault().bottom }];
  obj = { spacing: ThemesDefault.space.PX_16, children: null };
  const items3 = [callback(View, { style: tmp.illustration, children: callback(markAsDismissed(6224).LaptopSpotIllustration, { scale: 1, width: 150, height: 123 }) }), , ];
  const obj2 = { variant: "text-md/medium", color: "text-default", style: tmp.body, children: null };
  const intl = markAsDismissed(1236).intl;
  obj2[3] = intl.string(messagesProxyDefault.V3DI1E);
  items3[1] = callback(markAsDismissed(4444).Text, obj2);
  const obj3 = { size: "lg", variant: "secondary", grow: true, text: null, onPress: null };
  const intl2 = markAsDismissed(1236).intl;
  obj3[3] = intl2.string(messagesProxyDefault.YZePWx);
  obj3[4] = function onPress() {
    return callback(closure_1_5.USER_DISMISS);
  };
  items3[2] = callback(markAsDismissed(4896).Button, obj3);
  obj[1] = items3;
  obj[1] = callback2(markAsDismissed(4894).Stack, obj);
  obj[3] = callback(View, obj);
  return callback(markAsDismissed(5590).BottomSheet, obj);
};