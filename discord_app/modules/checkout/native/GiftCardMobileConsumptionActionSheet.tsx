// === Module 7499: GiftCardMobileConsumptionActionSheet ===

// Module 7499 (GiftCardMobileConsumptionActionSheet)
import nativeDefault from "native" /* 576 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1612 */;
import _modDef2169 from "module_2169" /* 2169 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4606 */;
import noop from "module_19" /* 19 */;

const require = fn;
const View = fn(17).View;
const ContentDismissActionType = fn(1955).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4639);
let obj2 = { sheet: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW }, container: null, illustration: null, body: null };
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj2.container = { paddingHorizontal: nativeDefault.space.PX_16 };
const obj4 = { paddingHorizontal: nativeDefault.space.PX_16 };
obj2.illustration = { alignSelf: "stretch", alignItems: "center", paddingTop: nativeDefault.space.PX_12 };
obj2.body = { textAlign: "center", fontFamily: "gg sans", fontSize: 16, fontWeight: 600, lineHeight: 20, alignSelf: "center", width: 280 };
let closure_8 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/checkout/native/GiftCardMobileConsumptionActionSheet.tsx");

export default function GiftCardMobileConsumptionActionSheet(markAsDismissed) {
  markAsDismissed = markAsDismissed.markAsDismissed;
  noop = undefined;
  const tmp = closure_8();
  importDefault = noop.useRef(false);
  dependencyMap = noop.useRef(markAsDismissed);
  const items = [markAsDismissed];
  const effect = noop.useEffect(() => {
    closure_2.current = markAsDismissed;
  }, items);
  const effect1 = noop.useEffect(() => () => {
    if (!ref.current) {
      ref2.current(constants.AUTO_DISMISS);
    }
  }, []);
  const items1 = [markAsDismissed];
  noop = noop.useCallback((arg0) => {
    if (!ref.current) {
      tmp.current = true;
      markAsDismissed(arg0);
      ActionSheetActionCreatorsDefault.hideActionSheet();
    }
  }, items1);
  let obj = {
    startExpanded: true,
    backgroundStyles: tmp.sheet,
    onDismiss() {
      return closure_3(ContentDismissActionType.USER_DISMISS);
    },
    children: null
  };
  const obj2 = { style: null, children: null };
  const items2 = [tmp.container, { paddingBottom: useSafeAreaInsetsDefault().bottom }];
  obj2.style = items2;
  const obj3 = { spacing: nativeDefault.space.PX_16, children: null };
  const items3 = [closure_6(View, { style: tmp.illustration, children: closure_6(markAsDismissed(5777).LaptopSpotIllustration, { scale: 1, width: 150, height: 123 }) }), , ];
  const obj5 = { variant: "text-md/medium", color: "text-default", style: tmp.body, children: null };
  const intl = markAsDismissed(1115).intl;
  obj5.children = intl.string(_modDef2169.V3DI1E);
  items3[1] = closure_6(markAsDismissed(4635).Text, obj5);
  const obj6 = { size: "lg", variant: "secondary", grow: true, text: null, onPress: null };
  const intl2 = markAsDismissed(1115).intl;
  obj6.text = intl2.string(_modDef2169.YZePWx);
  obj6.onPress = function onPress() {
    return closure_3(ContentDismissActionType.USER_DISMISS);
  };
  items3[2] = closure_6(markAsDismissed(5059).Button, obj6);
  obj3.children = items3;
  obj2.children = closure_7(markAsDismissed(5057).Stack, obj3);
  obj.children = closure_6(View, obj2);
  return closure_6(markAsDismissed(7257).BottomSheet, obj);
};