// discord_app/modules/app_icons/native/AppIconsCoachmark.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import PremiumUtilsDefault from "../../../utils/PremiumUtils.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import FastImageDefault from "../../../components_native/common/FastImage.tsx";
import _modDef10048 from "../../../../_runtime/metro/10048__.js";
import AppIconUtils from "AppIconUtils.tsx";
import _modDef19017 from "../../../../_runtime/metro/19017__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import UserStore from "../../../stores/UserStore.tsx";

require = fn;
const View = fn(17).View;
const ContentDismissActionType = fn(4860).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(5014);
let obj2 = {
  container: { padding: nativeDefault.space.PX_16, paddingBottom: 0 },
  info: { alignItems: "center" },
  image: { alignSelf: "center", marginBottom: 20 },
  nitroWheel: { marginRight: 8 },
  titleContainer: { display: "flex", flexDirection: "row", alignItems: "center" },
  subtitle: { marginTop: 8, textAlign: "center" },
  footer: null,
};
let obj3 = { padding: nativeDefault.space.PX_16, paddingBottom: 0 };
obj2.footer = { marginTop: 20, gap: nativeDefault.space.PX_8 };
let closure_9 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/app_icons/native/AppIconsCoachmark.tsx");

export default function AppIconsCoachmarkActionSheet(markAsDismissed) {
  markAsDismissed = markAsDismissed.markAsDismissed;
  const tmp = closure_9();
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
    children: null,
  };
  const obj4 = { style: tmp.info, children: null };
  const obj5 = { source: null, style: null };
  const isPremiumResult = PremiumUtilsDefault.isPremium(stateFromStores);
  obj5.source = _modDef19017;
  obj5.style = tmp.image;
  const items2 = [closure_7(FastImageDefault, obj5), ,];
  const obj6 = { style: tmp.titleContainer, children: null };
  const items3 = [
    closure_7(markAsDismissed(1187).Icon, {
      source: _modDef10048,
      size: markAsDismissed(1187).IconSizes.MEDIUM,
      style: tmp.nitroWheel,
      disableColor: true,
    }),
  ];
  const obj8 = { variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
  const intl = markAsDismissed(1113).intl;
  obj8.children = intl.string(markAsDismissed(1113).t.EfA4Cq);
  items3[1] = closure_7(markAsDismissed(5624).Text, obj8);
  obj6.children = items3;
  items2[1] = closure_8(View, obj6);
  const obj9 = { variant: "text-md/normal", color: "text-default", style: tmp.subtitle, children: null };
  const intl2 = markAsDismissed(1113).intl;
  const string = intl2.string;
  const t = markAsDismissed(1113).t;
  if (isPremiumResult) {
    let stringResult = string(t.IgchKK);
  } else {
    stringResult = string(t.D0XzaS);
  }
  obj9.children = stringResult;
  items2[2] = closure_7(markAsDismissed(5624).Text, obj9);
  obj4.children = items2;
  const items4 = [closure_8(View, obj4)];
  const obj10 = { style: tmp.footer, children: null };
  const obj11 = { text: null, onPress: null };
  const intl3 = tmp2(1113).intl;
  obj11.text = intl3.string(markAsDismissed(1113).t.Pt547C);
  obj11.onPress = function handleOnTryIt() {
    ActionSheetActionCreatorsDefault.hideActionSheet();
    if (markAsDismissed != null) {
      tmp3(ContentDismissActionType.PRIMARY);
    }
    const result = AppIconUtils.navigateToAppIconSettings();
  };
  const items5 = [closure_7(markAsDismissed(5634).Button, obj11)];
  const obj12 = { variant: "secondary", text: null, onPress: null };
  const intl4 = tmp2(1113).intl;
  obj12.text = intl4.string(markAsDismissed(1113).t.iSrIIZ);
  obj12.onPress = callback;
  items5[1] = closure_7(markAsDismissed(5634).Button, obj12);
  obj10.children = items5;
  items4[1] = closure_8(View, obj10);
  obj3.children = items4;
  return closure_8(markAsDismissed(5272).BottomSheet, obj3);
}
