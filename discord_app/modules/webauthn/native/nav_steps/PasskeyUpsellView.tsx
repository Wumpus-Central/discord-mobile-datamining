// discord_app/modules/webauthn/native/nav_steps/PasskeyUpsellView.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import combinedDefault from "../../../../utils/HelpdeskUtils.tsx";
import registerAssetDefault from "../../../../../_runtime/14155_registerAsset.js";
import closure_3 from "../../../../../_runtime/metro/00032__slicedToArray.js";
import closure_4 from "../../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import { WebAuthnScreens } from "../../WebAuthnConstants.tsx";
import { HelpdeskArticles } from "../../../../Constants.tsx";
import { ContentDismissActionType } from "../../../dismissible_content/DismissibleContentConstants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
({ View: c5, Image: closure_6, ScrollView: error } = get_ActivityIndicator);
({ jsx: unpackModuleId, jsxs: closure_12 } = jsxProd);
createCacheKey = { container: null, scrollViewContainer: null, headerContainer: null, headerImage: null, headerText: null, circleIcon: null, listContainer: null, row: null, text: null, buttonContainer: null };
createCacheKey = { flex: 1, flexDirection: "column", backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flexGrow: 1, justifyContent: "space-between", paddingHorizontal: ThemesDefault.space.PX_16 };
let obj1 = { flexGrow: 1, justifyContent: "space-between", paddingHorizontal: ThemesDefault.space.PX_16 };
createCacheKey[2] = { alignItems: "center", justifyContent: "center", gap: ThemesDefault.space.PX_16 };
createCacheKey[3] = { height: 190, width: 220, resizeMode: "contain" };
createCacheKey[4] = { textAlign: "center" };
let obj2 = { alignItems: "center", justifyContent: "center", gap: ThemesDefault.space.PX_16 };
createCacheKey[5] = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWEST, width: ThemesDefault.space.PX_32, height: ThemesDefault.space.PX_32, borderRadius: ThemesDefault.radii.round };
let obj3 = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWEST, width: ThemesDefault.space.PX_32, height: ThemesDefault.space.PX_32, borderRadius: ThemesDefault.radii.round };
createCacheKey[6] = { gap: ThemesDefault.space.PX_24, marginLeft: ThemesDefault.space.PX_8, marginRight: ThemesDefault.space.PX_8 };
let obj4 = { gap: ThemesDefault.space.PX_24, marginLeft: ThemesDefault.space.PX_8, marginRight: ThemesDefault.space.PX_8 };
createCacheKey[7] = { flexDirection: "row", gap: ThemesDefault.space.PX_8, alignItems: "center" };
createCacheKey[8] = { flex: 1 };
let obj5 = { flexDirection: "row", gap: ThemesDefault.space.PX_8, alignItems: "center" };
createCacheKey[9] = { gap: ThemesDefault.space.PX_16, alignItems: "center" };
let closure_13 = createCacheKey.createStyles(createCacheKey);
let obj6 = { gap: ThemesDefault.space.PX_16, alignItems: "center" };
let result = require("set").fileFinishedImporting("modules/webauthn/native/nav_steps/PasskeyUpsellView.tsx");

export default function PasskeyUpsellView() {
  function onRegisterSuccess(onCancel, arg1) {
    const obj = {};
    const merged = Object.assign(onCancel);
    const intl = navigation(closure_1_2[10]).intl;
    obj.name = intl.string(navigation(closure_1_2[10]).t["8H5RmH"]);
    navigation.push(closure_1_8.NAME, obj);
  }
  function onCancel() {
    callback(14151).markDismissed(constants.USER_DISMISS);
    const obj = callback(14151);
    const result = callback(14152).closePasskeyUpsellModal();
  }
  let obj = navigation(1500);
  navigation = obj.useNavigation();
  const tmp4 = callback2();
  [r10018, importDefault] = onRegisterSuccess(onCancel.useState(""), 2);
  const tmp5 = onRegisterSuccess(onCancel.useState(""), 2);
  [tmp7, dependencyMap] = onRegisterSuccess(onCancel.useState(false), 2);
  const items = [navigation];
  const layoutEffect = onCancel.useLayoutEffect(() => {
    const obj = { headerLeft: navigation(closure_1_2[13]).getHeaderCloseButton(onCancel) };
    navigation.setOptions(obj);
  }, items);
  obj1 = combinedDefault;
  const articleURL = obj1.getArticleURL(HelpdeskArticles.SETTING_UP_TWO_FACTOR);
  obj = { bottom: true, style: tmp4.container, children: null };
  obj = { contentContainerStyle: tmp4.scrollViewContainer, children: null };
  obj1 = { style: tmp4.headerContainer, children: null };
  const tmp6 = onRegisterSuccess(onCancel.useState(false), 2);
  const items1 = [callback(closure_6, { source: registerAssetDefault, style: tmp4.headerImage }), , ];
  const obj3 = { accessibilityRole: "header", variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: tmp4.headerText, children: null };
  let intl = navigation(1236).intl;
  obj3[4] = intl.string(navigation(1236).t.CjleBl);
  items1[1] = callback(navigation(4739).Text, obj3);
  const obj4 = { variant: "heading-md/normal", color: "text-default", style: tmp4.headerText, children: null };
  let obj8 = navigation(500);
  const obj2 = { source: registerAssetDefault, style: tmp4.headerImage };
  const tmp12 = closure_7;
  const intl2 = navigation(1236).intl;
  const string = intl2.string;
  const t = navigation(1236).t;
  if (isIOSResult) {
    let stringResult = string(t["7yxR9t"]);
  } else {
    stringResult = string(t.d6uxJy);
  }
  obj4[3] = stringResult;
  items1[2] = callback(navigation(4739).Text, obj4);
  obj1[1] = items1;
  const items2 = [closure_12(closure_5, obj1), , ];
  const obj5 = { style: tmp4.listContainer, children: null };
  const obj6 = { style: tmp4.row, children: null };
  const items3 = [callback(closure_5, { style: tmp4.circleIcon }), ];
  obj8 = { variant: "heading-md/normal", color: "text-default", style: tmp4.text, children: null };
  const intl3 = tmp(1236).intl;
  obj8[3] = intl3.string(navigation(1236).t.HtqVkj);
  items3[1] = callback(navigation(4739).Text, obj8);
  obj6[1] = items3;
  const items4 = [closure_12(closure_5, obj6), ];
  const obj9 = { style: tmp4.row, children: null };
  const items5 = [callback(closure_5, { style: tmp4.circleIcon }), ];
  const obj11 = { variant: "heading-md/normal", color: "text-default", style: tmp4.text, children: null };
  isIOSResult = obj8.isIOS();
  const obj10 = { style: tmp4.circleIcon };
  const obj7 = { style: tmp4.circleIcon };
  const tmpResult = navigation(500);
  const intl4 = tmp(1236).intl;
  const string2 = intl4.string;
  const t2 = tmp(1236).t;
  if (isIOSResult1) {
    let string2Result = string2(t2.U409I8);
  } else {
    string2Result = string2(t2.uYfqlo);
  }
  obj11[3] = string2Result;
  items5[1] = callback(navigation(4739).Text, obj11);
  obj9[1] = items5;
  items4[1] = closure_12(closure_5, obj9);
  obj5[1] = items4;
  items2[1] = closure_12(closure_5, obj5);
  const obj12 = { style: tmp4.buttonContainer, children: null };
  const obj13 = { variant: "text-sm/semibold", color: "text-brand", children: null };
  const intl5 = tmp(1236).intl;
  obj13[2] = intl5.format(navigation(1236).t.OeGXVv, { learnMoreLink: articleURL });
  const items6 = [callback(navigation(4739).Text, obj13), , ];
  const intl6 = tmp(1236).intl;
  const string3 = intl6.string;
  const t3 = tmp(1236).t;
  if (tmp7) {
    let string3Result = string3(t3.wePEBF);
  } else {
    string3Result = string3(t3.NIFmCJ);
  }
  items6[1] = callback(navigation(4750).Button, {
    text: string3Result,
    onPress() {
      let obj = closure_1_1(closure_1_2[11]);
      obj.markDismissed(closure_1_10.TAKE_ACTION);
      obj = { setRegistering: closure_2, setError: closure_1, onRegisterSuccess };
      closure_1_1(closure_1_2[20]).registerPasskey(obj);
    },
    size: "lg",
    disabled: tmp7,
    loading: tmp7,
    grow: true
  });
  const intl7 = tmp(1236).intl;
  const string4 = intl7.string;
  const t4 = tmp(1236).t;
  if (tmp7) {
    let string4Result = string4(t4.wePEBF);
  } else {
    string4Result = string4(t4["7J6/nG"]);
  }
  items6[2] = callback(navigation(4750).Button, { text: string4Result, onPress: onCancel, size: "lg", variant: "secondary", grow: true });
  obj12[1] = items6;
  items2[2] = closure_12(closure_5, obj12);
  obj[1] = items2;
  obj[2] = closure_12(tmp12, obj);
  return callback(navigation(6840).SafeAreaPaddingView, obj);
};