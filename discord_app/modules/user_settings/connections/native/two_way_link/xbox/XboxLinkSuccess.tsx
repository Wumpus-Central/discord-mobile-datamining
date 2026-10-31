// === Module 14612: XboxLinkSuccess ===

// Module 14612 (XboxLinkSuccess)
import nativeDefault from "native" /* 575 */;
import PlatformUtils from "PlatformUtils" /* 1375 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, Linking: metroRequire, Pressable: closure_7 } = get_ActivityIndicator);
const XboxLinkModalScenes = fn(9723).XboxLinkModalScenes;
const GameConsoleConstants = fn(9737);
({ XBOX_ANDROID_APP_LINK: closure_9, XBOX_IOS_APP_LINK: c10, XBOX_URL_BASE: closure_11 } = GameConsoleConstants);
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
const createStyles = fn(5014);
let obj2 = { image: { width: 58, height: 85, marginBottom: 24 }, getApp: { alignItems: "center", alignSelf: "stretch", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, marginTop: 24, padding: 16, borderRadius: nativeDefault.radii.sm, flexDirection: "row" }, appLogoBox: null, appLogo: null, getAppTitle: null, icon: null, externalLinkIcon: null };
let size = { marginRight: 12, width: 40, height: 40, alignItems: "center", justifyContent: "center", borderRadius: nativeDefault.radii.xs, backgroundColor: nativeDefault.unsafe_rawColors.PLATFORM_XBOX };
obj2.appLogoBox = size;
obj2.appLogo = { width: 32, height: 32 };
obj2.getAppTitle = { flex: 1 };
obj2.icon = { marginLeft: 8 };
let obj3 = { alignItems: "center", alignSelf: "stretch", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, marginTop: 24, padding: 16, borderRadius: nativeDefault.radii.sm, flexDirection: "row" };
obj2.externalLinkIcon = { color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE };
let closure_14 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/xbox/XboxLinkSuccess.tsx");

export default function XboxLinkDiscordSuccess() {
  const tmp = closure_14();
  const twoWayLinkStyles = first(navigation[8]).useTwoWayLinkStyles();
  [first, importDefault] = noop.useState(true);
  const effect = noop.useEffect(() => {
    timestampProducer.canOpenURL(closure_2_11).then(closure_1);
  }, []);
  const items = [first];
  const callback = noop.useCallback(() => {
    if (!first) {
      const openURL = timestampProducer.openURL;
      if (obj.isAndroid()) {
        openURL(React7);
      } else {
        openURL(closure_2_10);
      }
      obj = PlatformUtils;
    }
  }, items);
  let obj = first(navigation[8]);
  navigation = first(navigation[10]).useNavigation();
  const items1 = [navigation];
  const obj3 = { style: twoWayLinkStyles.container, children: null };
  const obj4 = { style: twoWayLinkStyles.content, children: null };
  const callback1 = noop.useCallback(() => {
    navigation.push(XboxLinkModalScenes.EDUCATION);
  }, items1);
  const obj5 = { source: null, style: null };
  const obj2 = first(navigation[10]);
  obj5.source = require("module_14613");
  obj5.style = tmp.image;
  const items2 = [closure_12(require("FastImage"), obj5), , , ];
  const obj6 = { variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", style: twoWayLinkStyles.title, children: null };
  const intl = first(navigation[14]).intl;
  obj6.children = intl.string(first(navigation[14]).t.aGRPVq);
  items2[1] = closure_12(first(navigation[13]).Text, obj6);
  const obj7 = { variant: "text-md/normal", color: "text-default", style: twoWayLinkStyles.body, children: null };
  const intl2 = first(navigation[14]).intl;
  obj7.children = intl2.string(first(navigation[14]).t.m3mBYE);
  items2[2] = closure_12(first(navigation[13]).Text, obj7);
  const obj8 = { onPress: callback, style: tmp.getApp, children: null };
  const obj9 = { style: tmp.appLogoBox, children: null };
  const obj10 = { source: null, style: null };
  const tmp15 = require("FastImage");
  obj10.source = require("module_12044");
  obj10.style = tmp.appLogo;
  obj9.children = closure_12(require("FastImage"), obj10);
  const items3 = [closure_12(closure_5, obj9), , ];
  const obj11 = { style: tmp.getAppTitle, variant: "heading-md/semibold", color: "mobile-text-heading-primary", children: null };
  const intl3 = first(navigation[14]).intl;
  const string = intl3.string;
  const t = first(navigation[14]).t;
  if (first) {
    let stringResult = string(t.zcKE8W);
  } else {
    stringResult = string(t["12Kx2v"]);
  }
  obj11.children = stringResult;
  items3[1] = closure_12(first(navigation[13]).Text, obj11);
  if (first) {
    const obj12 = { source: tmp14(tmp3[16]), style: tmp.icon };
    let tmp13Result = closure_12(tmp14(tmp3[11]), obj12);
    const tmp14Result = tmp14(tmp3[11]);
  } else {
    const obj13 = { source: tmp14(tmp3[18]), size: tmp2(tmp3[17]).Icon.Sizes.SMALL, color: tmp.externalLinkIcon.color, style: tmp.icon };
    tmp13Result = closure_12(tmp2(tmp3[17]).Icon, obj13);
  }
  items3[2] = tmp13Result;
  obj8.children = items3;
  items2[3] = closure_13(closure_7, obj8);
  obj4.children = items2;
  const items4 = [closure_13(closure_5, obj4), ];
  const obj14 = { bottom: true, style: twoWayLinkStyles.footerContainer, children: null };
  const obj15 = { style: twoWayLinkStyles.footerButton, children: null };
  const obj16 = { size: "lg", variant: "primary", text: null, onPress: null };
  const intl4 = tmp2(tmp3[14]).intl;
  obj16.text = intl4.string(first(navigation[14]).t["3PatSz"]);
  obj16.onPress = callback1;
  obj15.children = closure_12(first(navigation[20]).Button, obj16);
  obj14.children = closure_12(closure_5, obj15);
  items4[1] = closure_12(first(navigation[19]).SafeAreaPaddingView, obj14);
  obj3.children = items4;
  return closure_13(closure_5, obj3);
};