// === Module 9440: XboxLinkSuccess ===

// Module 9440 (XboxLinkSuccess)
import nativeDefault from "native" /* 576 */;
import PlatformUtils from "PlatformUtils" /* 1115 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ Image: hasOwnProperty, View: metroRequire, Linking: closure_7, Pressable: closure_8 } = get_ActivityIndicator);
const XboxLinkModalScenes = fn(9219).XboxLinkModalScenes;
const GameConsoleConstants = fn(9233);
({ XBOX_ANDROID_APP_LINK: c10, XBOX_IOS_APP_LINK: closure_11, XBOX_URL_BASE: closure_12 } = GameConsoleConstants);
const jsxProd = fn(21);
({ jsx: map1, jsxs: closure_14 } = jsxProd);
fn(4560);
let createStyles = { image: { width: 58, height: 85, marginBottom: 24 }, getApp: null, appLogoBox: null, appLogo: null, getAppTitle: null, icon: null, externalLinkIcon: null };
createStyles = { alignItems: "center", alignSelf: "stretch", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, marginTop: 24, padding: 16, borderRadius: nativeDefault.radii.sm, flexDirection: "row" };
createStyles.getApp = createStyles;
let size = { marginRight: 12, width: 40, height: 40, alignItems: "center", justifyContent: "center", borderRadius: nativeDefault.radii.xs, backgroundColor: nativeDefault.unsafe_rawColors.PLATFORM_XBOX };
createStyles.appLogoBox = size;
createStyles.appLogo = { width: 32, height: 32 };
createStyles.getAppTitle = { flex: 1 };
createStyles.icon = { marginLeft: 8 };
createStyles.externalLinkIcon = { color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE };
let closure_15 = createStyles.createStyles(createStyles);
size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/xbox/XboxLinkSuccess.tsx");

export default function XboxLinkDiscordSuccess() {
  const tmp = closure_15();
  let obj = first(navigation[8]);
  const twoWayLinkStyles = obj.useTwoWayLinkStyles();
  const tmp5 = _slicedToArray(noop.useState(true), 2);
  first = tmp5[0];
  importDefault = tmp5[1];
  const effect = noop.useEffect(() => {
    React5.canOpenURL(closure_2_12).then(closure_1);
  }, []);
  const items = [first];
  const callback = noop.useCallback(() => {
    if (!first) {
      const openURL = React5.openURL;
      if (obj.isAndroid()) {
        openURL(closure_2_10);
      } else {
        openURL(closure_2_11);
      }
      obj = PlatformUtils;
    }
  }, items);
  let obj1 = first(navigation[10]);
  navigation = obj1.useNavigation();
  const items1 = [navigation];
  obj = { style: twoWayLinkStyles.container, children: null };
  obj = { style: twoWayLinkStyles.content, children: null };
  obj1 = { source: null, style: null };
  const callback1 = noop.useCallback(() => {
    navigation.push(XboxLinkModalScenes.EDUCATION);
  }, items1);
  obj1.source = require("module_9441");
  obj1.style = tmp.image;
  const items2 = [closure_13(closure_5, obj1), , , ];
  const obj2 = { variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", style: twoWayLinkStyles.title, children: null };
  const intl = first(navigation[13]).intl;
  obj2.children = intl.string(first(navigation[13]).t.aGRPVq);
  items2[1] = closure_13(first(navigation[12]).Text, obj2);
  const obj3 = { variant: "text-md/normal", color: "text-default", style: twoWayLinkStyles.body, children: null };
  const intl2 = first(navigation[13]).intl;
  obj3.children = intl2.string(first(navigation[13]).t.m3mBYE);
  items2[2] = closure_13(first(navigation[12]).Text, obj3);
  const obj4 = { onPress: callback, style: tmp.getApp, children: null };
  const obj5 = { style: tmp.appLogoBox, children: closure_13(closure_5, { source: require("module_9442"), style: tmp.appLogo }) };
  const items3 = [closure_13(closure_6, obj5), , ];
  const obj7 = { style: tmp.getAppTitle, variant: "heading-md/semibold", color: "mobile-text-heading-primary", children: null };
  const intl3 = first(navigation[13]).intl;
  const string = intl3.string;
  const t = first(navigation[13]).t;
  if (first) {
    let stringResult = string(t.zcKE8W);
  } else {
    stringResult = string(t["12Kx2v"]);
  }
  obj7.children = stringResult;
  items3[1] = closure_13(first(navigation[12]).Text, obj7);
  if (first) {
    const obj8 = { source: tmp15(tmp3[15]), style: tmp.icon };
    let tmp13Result = tmp13(closure_5, obj8);
  } else {
    const obj9 = { source: tmp15(tmp3[17]), size: tmp2(tmp3[16]).Icon.Sizes.SMALL, color: tmp.externalLinkIcon.color, style: tmp.icon };
    tmp13Result = tmp13(tmp2(tmp3[16]).Icon, obj9);
  }
  items3[2] = tmp13Result;
  obj4.children = items3;
  items2[3] = closure_14(closure_8, obj4);
  obj.children = items2;
  const items4 = [closure_14(closure_6, obj), ];
  const obj10 = { bottom: true, style: twoWayLinkStyles.footerContainer, children: null };
  const obj11 = { style: twoWayLinkStyles.footerButton, children: null };
  const obj12 = { size: "lg", variant: "primary", text: null, onPress: null };
  const intl4 = tmp2(tmp3[13]).intl;
  obj12.text = intl4.string(first(navigation[13]).t["3PatSz"]);
  obj12.onPress = callback1;
  obj11.children = closure_13(first(navigation[19]).Button, obj12);
  obj10.children = closure_13(closure_6, obj11);
  items4[1] = closure_13(first(navigation[18]).SafeAreaPaddingView, obj10);
  obj.children = items4;
  return closure_14(closure_6, obj);
};