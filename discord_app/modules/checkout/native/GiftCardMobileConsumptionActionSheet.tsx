// === Module 7392: GiftCardMobileConsumptionActionSheet ===

// Module 7392 (GiftCardMobileConsumptionActionSheet)
import nativeDefault from "native" /* 576 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1611 */;
import _modDef2168 from "module_2168" /* 2168 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import noop from "module_19" /* 19 */;

const require = fn;
const View = fn(17).View;
const ContentDismissActionType = fn(1954).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
fn(4560);
let createStyles = { sheet: null, container: null, illustration: null, body: null };
createStyles = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles.sheet = createStyles;
createStyles.container = { paddingHorizontal: nativeDefault.space.PX_16 };
const obj1 = { paddingHorizontal: nativeDefault.space.PX_16 };
createStyles.illustration = { alignSelf: "stretch", alignItems: "center", paddingTop: nativeDefault.space.PX_12 };
createStyles.body = { textAlign: "center", fontFamily: "gg sans", fontSize: 16, fontWeight: 600, lineHeight: 20, alignSelf: "center", width: 280 };
let closure_8 = createStyles.createStyles(createStyles);
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
  obj = { style: null, children: null };
  const items2 = [tmp.container, { paddingBottom: useSafeAreaInsetsDefault().bottom }];
  obj.style = items2;
  obj = { spacing: nativeDefault.space.PX_16, children: null };
  const items3 = [closure_6(View, { style: tmp.illustration, children: closure_6(markAsDismissed(5692).LaptopSpotIllustration, { scale: 1, width: 150, height: 123 }) }), , ];
  const obj2 = { variant: "text-md/medium", color: "text-default", style: tmp.body, children: null };
  const intl = markAsDismissed(1114).intl;
  obj2.children = intl.string(_modDef2168.V3DI1E);
  items3[1] = closure_6(markAsDismissed(4556).Text, obj2);
  const obj3 = { size: "lg", variant: "secondary", grow: true, text: null, onPress: null };
  const intl2 = markAsDismissed(1114).intl;
  obj3.text = intl2.string(_modDef2168.YZePWx);
  obj3.onPress = function onPress() {
    return closure_3(ContentDismissActionType.USER_DISMISS);
  };
  items3[2] = closure_6(markAsDismissed(4975).Button, obj3);
  obj.children = items3;
  obj.children = closure_7(markAsDismissed(4973).Stack, obj);
  obj.children = closure_6(View, obj);
  return closure_6(markAsDismissed(7150).BottomSheet, obj);
};