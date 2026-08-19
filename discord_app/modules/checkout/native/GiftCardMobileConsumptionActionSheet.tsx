// === Module 7370: GiftCardMobileConsumptionActionSheet ===

// Module 7370 (GiftCardMobileConsumptionActionSheet)
import ThemesDefault from "Themes" /* 712 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1629 */;
import messagesProxyDefault from "messagesProxy" /* 2107 */;
import noop from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { ContentDismissActionType } from "ContentDismissActionType" /* 1388 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";

const require = fn;
({ jsx: closure_6, jsxs: error } = jsxProd);
const createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { paddingHorizontal: ThemesDefault.space.PX_16 };
createCacheKey[2] = { alignSelf: "stretch", alignItems: "center", paddingTop: ThemesDefault.space.PX_12 };
createCacheKey[3] = { textAlign: "center", fontFamily: "gg sans", fontSize: 16, fontWeight: 600, lineHeight: 20, alignSelf: "center", width: 280 };
let closure_8 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/checkout/native/GiftCardMobileConsumptionActionSheet.tsx");

export default function GiftCardMobileConsumptionActionSheet(markAsDismissed) {
  markAsDismissed = markAsDismissed.markAsDismissed;
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
  const items2 = [tmp.container, { paddingBottom: useSafeAreaInsetsDefault().bottom }];
  let obj = { spacing: ThemesDefault.space.PX_16, children: null };
  const items3 = [callback(View, { style: tmp.illustration, children: callback(markAsDismissed(5447).LaptopSpotIllustration, { scale: 1, width: 150, height: 123 }) }), , ];
  const obj2 = { variant: "text-md/medium", color: "text-default", style: tmp.body, children: null };
  const intl = markAsDismissed(1236).intl;
  obj2[3] = intl.string(messagesProxyDefault.V3DI1E);
  items3[1] = callback(markAsDismissed(4734).Text, obj2);
  const obj3 = { size: "lg", variant: "secondary", grow: true, text: null, onPress: null };
  const intl2 = markAsDismissed(1236).intl;
  obj3[3] = intl2.string(messagesProxyDefault.YZePWx);
  obj3[4] = function onPress() {
    return callback(ContentDismissActionType.USER_DISMISS);
  };
  items3[2] = callback(markAsDismissed(4745).Button, obj3);
  obj[1] = items3;
  obj[1] = callback2(markAsDismissed(4733).Stack, obj);
  obj[3] = callback(View, obj);
  return callback(markAsDismissed(6950).BottomSheet, obj);
};