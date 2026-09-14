// === Module 17040: AppIconsCoachmark ===

// Module 17040 (AppIconsCoachmark)
import nativeDefault from "native" /* 576 */;
import PremiumUtilsDefault from "PremiumUtils" /* 4294 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4603 */;
import _modDef10093 from "module_10093" /* 10093 */;
import AppIconUtils from "AppIconUtils" /* 13537 */;
import _modDef17041 from "module_17041" /* 17041 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
get_ActivityIndicator = fn(17);
({ Image: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const ContentDismissActionType = fn(1954).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4636);
let obj2 = { container: { padding: nativeDefault.space.PX_16, paddingBottom: 0 }, info: { alignItems: "center" }, image: { alignSelf: "center", marginBottom: 20 }, nitroWheel: { marginRight: 8 }, titleContainer: { display: "flex", flexDirection: "row", alignItems: "center" }, subtitle: { marginTop: 8, textAlign: "center" }, footer: null };
let obj3 = { padding: nativeDefault.space.PX_16, paddingBottom: 0 };
obj2.footer = { marginTop: 20, gap: nativeDefault.space.PX_8 };
let closure_10 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/app_icons/native/AppIconsCoachmark.tsx");

export default function AppIconsCoachmarkActionSheet(markAsDismissed) {
  markAsDismissed = markAsDismissed.markAsDismissed;
  const tmp = closure_10();
  const items = [UserStore];
  const stateFromStores = markAsDismissed(504).useStateFromStores(items, () => currentUser.getCurrentUser());
  let obj = markAsDismissed(504);
  const items1 = [markAsDismissed];
  const callback = noop.useCallback(() => {
    ActionSheetActionCreatorsDefault.hideActionSheet();
    if (markAsDismissed != null) {
      tmp2(ContentDismissActionType.DISMISS);
    }
  }, items1);
  const obj3 = {
    onDismiss() {
      return markAsDismissed(ContentDismissActionType.DISMISS);
    },
    contentStyles: tmp.container,
    children: null
  };
  const obj4 = { style: tmp.info, children: null };
  const isPremiumResult = PremiumUtilsDefault.isPremium(stateFromStores);
  const items2 = [closure_8(closure_4, { source: _modDef17041, style: tmp.image }), , ];
  const obj6 = { style: tmp.titleContainer, children: null };
  const obj5 = { source: _modDef17041, style: tmp.image };
  const items3 = [closure_8(markAsDismissed(1176).Icon, { source: _modDef10093, size: markAsDismissed(1176).IconSizes.MEDIUM, style: tmp.nitroWheel, disableColor: true }), ];
  const obj8 = { variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
  const intl = markAsDismissed(1114).intl;
  obj8.children = intl.string(markAsDismissed(1114).t.EfA4Cq);
  items3[1] = closure_8(markAsDismissed(4632).Text, obj8);
  obj6.children = items3;
  items2[1] = closure_9(closure_5, obj6);
  const obj9 = { variant: "text-md/normal", color: "text-default", style: tmp.subtitle, children: null };
  const intl2 = markAsDismissed(1114).intl;
  const string = intl2.string;
  const t = markAsDismissed(1114).t;
  if (isPremiumResult) {
    let stringResult = string(t.IgchKK);
  } else {
    stringResult = string(t.D0XzaS);
  }
  obj9.children = stringResult;
  items2[2] = closure_8(markAsDismissed(4632).Text, obj9);
  obj4.children = items2;
  const items4 = [closure_9(closure_5, obj4), ];
  const obj10 = { style: tmp.footer, children: null };
  const obj11 = { text: null, onPress: null };
  const intl3 = tmp2(1114).intl;
  obj11.text = intl3.string(markAsDismissed(1114).t.Pt547C);
  obj11.onPress = function onPress() {
    ActionSheetActionCreatorsDefault.hideActionSheet();
    if (markAsDismissed != null) {
      tmp3(ContentDismissActionType.PRIMARY);
    }
    const result = AppIconUtils.navigateToAppIconSettings();
  };
  const items5 = [closure_8(markAsDismissed(5056).Button, obj11), ];
  const obj12 = { variant: "secondary", text: null, onPress: null };
  const intl4 = tmp2(1114).intl;
  obj12.text = intl4.string(markAsDismissed(1114).t.iSrIIZ);
  obj12.onPress = callback;
  items5[1] = closure_8(markAsDismissed(5056).Button, obj12);
  obj10.children = items5;
  items4[1] = closure_9(closure_5, obj10);
  obj3.children = items4;
  return closure_9(markAsDismissed(7253).BottomSheet, obj3);
};