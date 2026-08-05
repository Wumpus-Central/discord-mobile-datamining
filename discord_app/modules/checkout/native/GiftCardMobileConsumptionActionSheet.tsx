// discord_app/modules/checkout/native/GiftCardMobileConsumptionActionSheet.tsx
import noop from "noop";
import { View } from "get ActivityIndicator";
import { ContentDismissActionType } from "ContentDismissActionType";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { Themes } from "../../../../discord_common/js/packages/tokens/native.tsx";
import { useSafeAreaInsets } from "../../safe_area/useSafeAreaInsets.native.tsx";
import { messagesProxy } from "../messages/GiftCard.messages.js";

let closure_6;
let error;
const require = arg1;
({ jsx: closure_6, jsxs: error } = jsxProd);
createCacheKey = { sheet: null, container: null, illustration: null, body: null };
createCacheKey = { backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { paddingHorizontal: require("Themes").space.PX_16 };
const obj1 = { paddingHorizontal: require("Themes").space.PX_16 };
createCacheKey[2] = { alignSelf: "stretch", alignItems: "center", paddingTop: require("Themes").space.PX_12 };
createCacheKey[3] = { textAlign: "center", fontFamily: "gg sans", fontSize: 16, fontWeight: 600, lineHeight: 20, alignSelf: "center", width: 280 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj2 = { alignSelf: "stretch", alignItems: "center", paddingTop: require("Themes").space.PX_12 };
const result = require("ContentDismissActionType").fileFinishedImporting("modules/checkout/native/GiftCardMobileConsumptionActionSheet.tsx");

export default function GiftCardMobileConsumptionActionSheet(markAsDismissed) {
  markAsDismissed = markAsDismissed.markAsDismissed;
  let importDefault;
  let dependencyMap;
  let React;
  const tmp = createCacheKey();
  importDefault = React.useRef(false);
  dependencyMap = React.useRef(markAsDismissed);
  const items = [markAsDismissed];
  const effect = React.useEffect(() => {
    closure_2.current = markAsDismissed;
  }, items);
  const effect1 = React.useEffect(() => () => {
    if (!ref.current) {
      ref2.current(outer1_5.AUTO_DISMISS);
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
      return callback(outer1_5.USER_DISMISS);
    },
    children: null
  };
  obj = { style: items2, children: null };
  items2 = [tmp.container, { paddingBottom: useSafeAreaInsets().bottom }];
  obj = { spacing: null, children: null };
  obj[0] = Themes.space.PX_16;
  const items3 = [callback(View, { style: tmp.illustration, children: callback(markAsDismissed(5936).LaptopSpotIllustration, { scale: 1, width: 150, height: 123 }) }), , ];
  const obj2 = { variant: "text-md/medium", color: "text-default", style: tmp.body, children: null };
  const intl = markAsDismissed(1236).intl;
  obj2[3] = intl.string(messagesProxy.V3DI1E);
  items3[1] = callback(markAsDismissed(4281).Text, obj2);
  const obj3 = { size: "lg", variant: "secondary", grow: true, text: null, onPress: null };
  const intl2 = markAsDismissed(1236).intl;
  obj3[3] = intl2.string(messagesProxy.YZePWx);
  obj3[4] = function onPress() {
    return callback(outer1_5.USER_DISMISS);
  };
  items3[2] = callback(markAsDismissed(4695).Button, obj3);
  obj[1] = items3;
  obj[1] = callback2(markAsDismissed(4693).Stack, obj);
  obj[3] = callback(View, obj);
  return callback(markAsDismissed(5338).BottomSheet, obj);
};