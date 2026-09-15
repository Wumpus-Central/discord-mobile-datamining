// discord_app/modules/user_settings/connections/native/two_way_link/xbox/XboxLinkSuccess.tsx
import nativeDefault from "../../../../../../../discord_common/js/packages/tokens/native.tsx";
import PlatformUtils from "../../../../../../utils/PlatformUtils.tsx";
import _slicedToArray from "../../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ Image: hasOwnProperty, View: metroRequire, Linking: closure_7, Pressable: closure_8 } = get_ActivityIndicator);
const XboxLinkModalScenes = fn(9351).XboxLinkModalScenes;
const GameConsoleConstants = fn(9365);
({ XBOX_ANDROID_APP_LINK: c10, XBOX_IOS_APP_LINK: closure_11, XBOX_URL_BASE: closure_12 } = GameConsoleConstants);
const jsxProd = fn(21);
({ jsx: map1, jsxs: closure_14 } = jsxProd);
const createStyles = fn(4639);
let obj2 = {
  image: { width: 58, height: 85, marginBottom: 24 },
  getApp: {
    alignItems: "center",
    alignSelf: "stretch",
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
    marginTop: 24,
    padding: 16,
    borderRadius: nativeDefault.radii.sm,
    flexDirection: "row",
  },
  appLogoBox: null,
  appLogo: null,
  getAppTitle: null,
  icon: null,
  externalLinkIcon: null,
};
let size = {
  marginRight: 12,
  width: 40,
  height: 40,
  alignItems: "center",
  justifyContent: "center",
  borderRadius: nativeDefault.radii.xs,
  backgroundColor: nativeDefault.unsafe_rawColors.PLATFORM_XBOX,
};
obj2.appLogoBox = size;
obj2.appLogo = { width: 32, height: 32 };
obj2.getAppTitle = { flex: 1 };
obj2.icon = { marginLeft: 8 };
let obj3 = {
  alignItems: "center",
  alignSelf: "stretch",
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
  marginTop: 24,
  padding: 16,
  borderRadius: nativeDefault.radii.sm,
  flexDirection: "row",
};
obj2.externalLinkIcon = { color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE };
let closure_15 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting(
  "modules/user_settings/connections/native/two_way_link/xbox/XboxLinkSuccess.tsx",
);

export default function XboxLinkDiscordSuccess() {
  const tmp = closure_15();
  const twoWayLinkStyles = first(navigation[8]).useTwoWayLinkStyles();
  [first, importDefault] = noop.useState(true);
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
  let obj = first(navigation[8]);
  navigation = first(navigation[10]).useNavigation();
  const items1 = [navigation];
  const obj3 = { style: twoWayLinkStyles.container, children: null };
  const obj4 = { style: twoWayLinkStyles.content, children: null };
  const obj5 = { source: null, style: null };
  const callback1 = noop.useCallback(() => {
    navigation.push(XboxLinkModalScenes.EDUCATION);
  }, items1);
  obj5.source = require("../../../../../../../_runtime/metro/09573__.js");
  obj5.style = tmp.image;
  const items2 = [closure_13(closure_5, obj5), , ,];
  const obj6 = {
    variant: "heading-xl/extrabold",
    color: "mobile-text-heading-primary",
    style: twoWayLinkStyles.title,
    children: null,
  };
  const intl = first(navigation[13]).intl;
  obj6.children = intl.string(first(navigation[13]).t.aGRPVq);
  items2[1] = closure_13(first(navigation[12]).Text, obj6);
  const obj7 = { variant: "text-md/normal", color: "text-default", style: twoWayLinkStyles.body, children: null };
  const intl2 = first(navigation[13]).intl;
  obj7.children = intl2.string(first(navigation[13]).t.m3mBYE);
  items2[2] = closure_13(first(navigation[12]).Text, obj7);
  const obj8 = { onPress: callback, style: tmp.getApp, children: null };
  const obj9 = { style: tmp.appLogoBox, children: null };
  const obj2 = first(navigation[10]);
  obj9.children = closure_13(closure_5, {
    source: require("../../../../../../../_runtime/metro/09574__.js"),
    style: tmp.appLogo,
  });
  const items3 = [closure_13(closure_6, obj9), ,];
  const obj11 = {
    style: tmp.getAppTitle,
    variant: "heading-md/semibold",
    color: "mobile-text-heading-primary",
    children: null,
  };
  const intl3 = first(navigation[13]).intl;
  const string = intl3.string;
  const t = first(navigation[13]).t;
  if (first) {
    let stringResult = string(t.zcKE8W);
  } else {
    stringResult = string(t["12Kx2v"]);
  }
  obj11.children = stringResult;
  items3[1] = closure_13(first(navigation[12]).Text, obj11);
  if (first) {
    const obj12 = { source: tmp15(tmp3[15]), style: tmp.icon };
    let tmp13Result = closure_13(closure_5, obj12);
  } else {
    const obj13 = {
      source: tmp15(tmp3[17]),
      size: tmp2(tmp3[16]).Icon.Sizes.SMALL,
      color: tmp.externalLinkIcon.color,
      style: tmp.icon,
    };
    tmp13Result = closure_13(tmp2(tmp3[16]).Icon, obj13);
  }
  items3[2] = tmp13Result;
  obj8.children = items3;
  items2[3] = closure_14(closure_8, obj8);
  obj4.children = items2;
  const items4 = [closure_14(closure_6, obj4)];
  const obj14 = { bottom: true, style: twoWayLinkStyles.footerContainer, children: null };
  const obj15 = { style: twoWayLinkStyles.footerButton, children: null };
  const obj16 = { size: "lg", variant: "primary", text: null, onPress: null };
  const intl4 = tmp2(tmp3[13]).intl;
  obj16.text = intl4.string(first(navigation[13]).t["3PatSz"]);
  obj16.onPress = callback1;
  obj15.children = closure_13(first(navigation[19]).Button, obj16);
  obj14.children = closure_13(closure_6, obj15);
  items4[1] = closure_13(first(navigation[18]).SafeAreaPaddingView, obj14);
  obj3.children = items4;
  return closure_14(closure_6, obj3);
}
