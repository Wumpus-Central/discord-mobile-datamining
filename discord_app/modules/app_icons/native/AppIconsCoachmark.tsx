// === Module 16925: AppIconsCoachmark ===

// Module 16925 (AppIconsCoachmark)
import nativeDefault from "native" /* 576 */;
import PremiumUtilsDefault from "PremiumUtils" /* 4218 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import _modDef9963 from "module_9963" /* 9963 */;
import AppIconUtils from "AppIconUtils" /* 13363 */;
import _modDef16926 from "module_16926" /* 16926 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
get_ActivityIndicator = fn(17);
({ Image: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const ContentDismissActionType = fn(1954).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
fn(4560);
let createStyles = { container: null, info: null, image: null, nitroWheel: null, titleContainer: null, subtitle: null, footer: null };
createStyles = { padding: nativeDefault.space.PX_16, paddingBottom: 0 };
createStyles.container = createStyles;
createStyles.info = { alignItems: "center" };
createStyles.image = { alignSelf: "center", marginBottom: 20 };
createStyles.nitroWheel = { marginRight: 8 };
createStyles.titleContainer = { display: "flex", flexDirection: "row", alignItems: "center" };
createStyles.subtitle = { marginTop: 8, textAlign: "center" };
createStyles.footer = { marginTop: 20, gap: nativeDefault.space.PX_8 };
let closure_10 = createStyles.createStyles(createStyles);
const size = fn(2);
let result = size.fileFinishedImporting("modules/app_icons/native/AppIconsCoachmark.tsx");

export default function AppIconsCoachmarkActionSheet(markAsDismissed) {
  markAsDismissed = markAsDismissed.markAsDismissed;
  const tmp = closure_10();
  let obj = markAsDismissed(504);
  const items = [UserStore];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  const items1 = [markAsDismissed];
  const callback = noop.useCallback(() => {
    ActionSheetActionCreatorsDefault.hideActionSheet();
    if (markAsDismissed != null) {
      tmp2(ContentDismissActionType.DISMISS);
    }
  }, items1);
  obj = {
    onDismiss() {
      return markAsDismissed(ContentDismissActionType.DISMISS);
    },
    contentStyles: tmp.container,
    children: null
  };
  obj = { style: tmp.info, children: null };
  const obj1 = { source: _modDef16926, style: tmp.image };
  const items2 = [closure_8(closure_4, obj1), , ];
  let obj2 = { style: tmp.titleContainer, children: null };
  const isPremiumResult = obj1.isPremium(stateFromStores);
  const items3 = [closure_8(markAsDismissed(1178).Icon, { source: _modDef9963, size: markAsDismissed(1178).IconSizes.MEDIUM, style: tmp.nitroWheel, disableColor: true }), ];
  const obj4 = { variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
  const intl = markAsDismissed(1114).intl;
  obj4.children = intl.string(markAsDismissed(1114).t.EfA4Cq);
  items3[1] = closure_8(markAsDismissed(4556).Text, obj4);
  obj2.children = items3;
  items2[1] = closure_9(closure_5, obj2);
  const obj5 = { variant: "text-md/normal", color: "text-default", style: tmp.subtitle, children: null };
  const intl2 = markAsDismissed(1114).intl;
  const string = intl2.string;
  const t = markAsDismissed(1114).t;
  if (isPremiumResult) {
    let stringResult = string(t.IgchKK);
  } else {
    stringResult = string(t.D0XzaS);
  }
  obj5.children = stringResult;
  items2[2] = closure_8(markAsDismissed(4556).Text, obj5);
  obj.children = items2;
  const items4 = [closure_9(closure_5, obj), ];
  const obj6 = { style: tmp.footer, children: null };
  const obj7 = { text: null, onPress: null };
  const intl3 = tmp2(1114).intl;
  obj7.text = intl3.string(markAsDismissed(1114).t.Pt547C);
  obj7.onPress = function onPress() {
    ActionSheetActionCreatorsDefault.hideActionSheet();
    if (markAsDismissed != null) {
      tmp3(ContentDismissActionType.PRIMARY);
    }
    const result = AppIconUtils.navigateToAppIconSettings();
  };
  const items5 = [closure_8(markAsDismissed(4975).Button, obj7), ];
  const obj8 = { variant: "secondary", text: null, onPress: null };
  const intl4 = tmp2(1114).intl;
  obj8.text = intl4.string(markAsDismissed(1114).t.iSrIIZ);
  obj8.onPress = callback;
  items5[1] = closure_8(markAsDismissed(4975).Button, obj8);
  obj6.children = items5;
  items4[1] = closure_9(closure_5, obj6);
  obj.children = items4;
  return closure_9(markAsDismissed(7150).BottomSheet, obj);
};