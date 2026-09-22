// discord_app/modules/webauthn/native/nav_steps/PasskeyUpsellView.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import HelpdeskUtilsDefault from "../../../../utils/HelpdeskUtils.tsx";
import NavigatorHeader from "../../../../design/components/Navigator/native/NavigatorHeader.native.tsx";
import NativeCeremoniesDefault from "../NativeCeremonies.tsx";
import PasskeyUpsellManagerDefault from "../PasskeyUpsellManager.tsx";
import _modDef14949 from "../../../../../_runtime/metro/14949__.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, Image: metroRequire, ScrollView: closure_7 } = get_ActivityIndicator);
const WebAuthnScreens = fn(14940).WebAuthnScreens;
const HelpdeskArticles = fn(1074).HelpdeskArticles;
const ContentDismissActionType = fn(2039).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
const createStyles = fn(4757);
let obj2 = {
  container: { flex: 1, flexDirection: "column", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW },
  scrollViewContainer: null,
  headerContainer: null,
  headerImage: null,
  headerText: null,
  circleIcon: null,
  listContainer: null,
  row: null,
  text: null,
  buttonContainer: null,
};
let obj3 = { flex: 1, flexDirection: "column", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj2.scrollViewContainer = {
  flexGrow: 1,
  justifyContent: "space-between",
  paddingHorizontal: nativeDefault.space.PX_16,
};
let obj4 = { flexGrow: 1, justifyContent: "space-between", paddingHorizontal: nativeDefault.space.PX_16 };
obj2.headerContainer = { alignItems: "center", justifyContent: "center", gap: nativeDefault.space.PX_16 };
obj2.headerImage = { height: 190, width: 220, resizeMode: "contain" };
obj2.headerText = { textAlign: "center" };
let size = {
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
  width: nativeDefault.space.PX_32,
  height: nativeDefault.space.PX_32,
  borderRadius: nativeDefault.radii.round,
};
obj2.circleIcon = size;
let obj5 = { alignItems: "center", justifyContent: "center", gap: nativeDefault.space.PX_16 };
obj2.listContainer = {
  gap: nativeDefault.space.PX_24,
  marginLeft: nativeDefault.space.PX_8,
  marginRight: nativeDefault.space.PX_8,
};
let obj6 = {
  gap: nativeDefault.space.PX_24,
  marginLeft: nativeDefault.space.PX_8,
  marginRight: nativeDefault.space.PX_8,
};
obj2.row = { flexDirection: "row", gap: nativeDefault.space.PX_8, alignItems: "center" };
obj2.text = { flex: 1 };
let obj7 = { flexDirection: "row", gap: nativeDefault.space.PX_8, alignItems: "center" };
obj2.buttonContainer = { gap: nativeDefault.space.PX_16, alignItems: "center" };
let closure_13 = createStyles.createStyles(obj2);
size = fn(2);
let result = size.fileFinishedImporting("modules/webauthn/native/nav_steps/PasskeyUpsellView.tsx");

export default function PasskeyUpsellView() {
  function onRegisterSuccess(onCancel) {
    const obj = {};
    const merged = Object.assign(onCancel);
    const intl = util.intl;
    obj.name = intl.string(util.t["8H5RmH"]);
    navigation.push(WebAuthnScreens.NAME, obj);
  }
  function onCancel() {
    setError(setRegistering[11]).markDismissed(constants.USER_DISMISS);
    const obj = setError(setRegistering[11]);
    const result = setError(setRegistering[12]).closePasskeyUpsellModal();
  }
  navigation = navigation(1484).useNavigation();
  const tmp4 = closure_13();
  let obj = navigation(1484);
  [r10018, importDefault] = onRegisterSuccess(onCancel.useState(""), 2);
  const tmp5 = onRegisterSuccess(onCancel.useState(""), 2);
  [tmp7, dependencyMap] = onRegisterSuccess(onCancel.useState(false), 2);
  const items = [navigation];
  const layoutEffect = onCancel.useLayoutEffect(() => {
    const obj = { headerLeft: NavigatorHeader.getHeaderCloseButton(onCancel) };
    navigation.setOptions(obj);
  }, items);
  const tmp6 = onRegisterSuccess(onCancel.useState(false), 2);
  const articleURL = HelpdeskUtilsDefault.getArticleURL(HelpdeskArticles.SETTING_UP_TWO_FACTOR);
  const obj3 = { bottom: true, style: tmp4.container, children: null };
  const obj4 = { contentContainerStyle: tmp4.scrollViewContainer, children: null };
  const obj5 = { style: tmp4.headerContainer, children: null };
  const items1 = [closure_11(closure_6, { source: _modDef14949, style: tmp4.headerImage }), ,];
  const obj7 = {
    accessibilityRole: "header",
    variant: "heading-xl/bold",
    color: "mobile-text-heading-primary",
    style: tmp4.headerText,
    children: null,
  };
  let intl = navigation(1115).intl;
  obj7.children = intl.string(navigation(1115).t.CjleBl);
  items1[1] = closure_11(navigation(4753).Text, obj7);
  const obj8 = { variant: "heading-md/normal", color: "text-default", style: tmp4.headerText, children: null };
  const obj6 = { source: _modDef14949, style: tmp4.headerImage };
  const obj9 = navigation(1364);
  const intl2 = navigation(1115).intl;
  const string = intl2.string;
  const t = navigation(1115).t;
  if (isIOSResult) {
    let stringResult = string(t["7yxR9t"]);
  } else {
    stringResult = string(t.d6uxJy);
  }
  obj8.children = stringResult;
  items1[2] = closure_11(navigation(4753).Text, obj8);
  obj5.children = items1;
  const items2 = [closure_12(closure_5, obj5), ,];
  const obj10 = { style: tmp4.listContainer, children: null };
  const obj11 = { style: tmp4.row, children: null };
  const items3 = [closure_11(closure_5, { style: tmp4.circleIcon })];
  const obj13 = { variant: "heading-md/normal", color: "text-default", style: tmp4.text, children: null };
  const intl3 = tmp(1115).intl;
  obj13.children = intl3.string(navigation(1115).t.HtqVkj);
  items3[1] = closure_11(navigation(4753).Text, obj13);
  obj11.children = items3;
  const items4 = [closure_12(closure_5, obj11)];
  const obj14 = { style: tmp4.row, children: null };
  const items5 = [closure_11(closure_5, { style: tmp4.circleIcon })];
  const obj16 = { variant: "heading-md/normal", color: "text-default", style: tmp4.text, children: null };
  isIOSResult = navigation(1364).isIOS();
  const obj12 = { style: tmp4.circleIcon };
  const obj15 = { style: tmp4.circleIcon };
  const tmpResult = navigation(1364);
  const intl4 = tmp(1115).intl;
  const string2 = intl4.string;
  const t2 = tmp(1115).t;
  if (isIOSResult1) {
    let string2Result = string2(t2.U409I8);
  } else {
    string2Result = string2(t2.uYfqlo);
  }
  obj16.children = string2Result;
  items5[1] = closure_11(navigation(4753).Text, obj16);
  obj14.children = items5;
  items4[1] = closure_12(closure_5, obj14);
  obj10.children = items4;
  items2[1] = closure_12(closure_5, obj10);
  const obj17 = { style: tmp4.buttonContainer, children: null };
  const obj18 = { variant: "text-sm/semibold", color: "text-brand", children: null };
  const intl5 = tmp(1115).intl;
  obj18.children = intl5.format(navigation(1115).t.OeGXVv, { learnMoreLink: articleURL });
  const items6 = [closure_11(navigation(4753).Text, obj18), ,];
  const intl6 = tmp(1115).intl;
  const string3 = intl6.string;
  const t3 = tmp(1115).t;
  if (tmp7) {
    let string3Result = string3(t3.wePEBF);
  } else {
    string3Result = string3(t3.NIFmCJ);
  }
  items6[1] = closure_11(navigation(5187).Button, {
    text: string3Result,
    onPress() {
      PasskeyUpsellManagerDefault.markDismissed(ContentDismissActionType.TAKE_ACTION);
      NativeCeremoniesDefault.registerPasskey({ setRegistering, setError, onRegisterSuccess });
    },
    size: "lg",
    disabled: tmp7,
    loading: tmp7,
    grow: true,
  });
  const intl7 = tmp(1115).intl;
  const string4 = intl7.string;
  const t4 = tmp(1115).t;
  if (tmp7) {
    let string4Result = string4(t4.wePEBF);
  } else {
    string4Result = string4(t4["7J6/nG"]);
  }
  items6[2] = closure_11(navigation(5187).Button, {
    text: string4Result,
    onPress: onCancel,
    size: "lg",
    variant: "secondary",
    grow: true,
  });
  obj17.children = items6;
  items2[2] = closure_12(closure_5, obj17);
  obj4.children = items2;
  obj3.children = closure_12(closure_7, obj4);
  return closure_11(navigation(7370).SafeAreaPaddingView, obj3);
}
