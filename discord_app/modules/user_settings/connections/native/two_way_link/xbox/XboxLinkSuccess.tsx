import _slicedToArray from "_slicedToArray";
import Button from "Button";
import get_ActivityIndicator from "registerAsset";
import { XboxLinkModalScenes } from "XboxLinkModalScenes";
import XBOX_URL_BASE from "XBOX_URL_BASE";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c10;
let c5;
let closure_12;
let closure_14;
let closure_6;
let error;
let map1;
let metroImportAll;
let unpackModuleId;
const require = arg1;
({ Image: c5, View: closure_6, Linking: error, Pressable: metroImportAll } = get_ActivityIndicator);
({ XBOX_ANDROID_APP_LINK: c10, XBOX_IOS_APP_LINK: unpackModuleId, XBOX_URL_BASE: closure_12 } = XBOX_URL_BASE);
({ jsx: map1, jsxs: closure_14 } = jsxProd);
createCacheKey = { image: { width: 58, height: 85, marginBottom: 24 }, getApp: null, appLogoBox: null, appLogo: null, getAppTitle: null, icon: null, externalLinkIcon: null };
createCacheKey = { alignItems: "center", alignSelf: "stretch", backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWEST, marginTop: 24, padding: 16, borderRadius: require("Themes").radii.sm, flexDirection: "row" };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { marginRight: 12, width: 40, height: 40, alignItems: "center", justifyContent: "center", borderRadius: require("Themes").radii.xs, backgroundColor: require("Themes").unsafe_rawColors.PLATFORM_XBOX };
createCacheKey[3] = { width: 32, height: 32 };
createCacheKey[4] = { flex: 1 };
createCacheKey[5] = { marginLeft: 8 };
let obj1 = { marginRight: 12, width: 40, height: 40, alignItems: "center", justifyContent: "center", borderRadius: require("Themes").radii.xs, backgroundColor: require("Themes").unsafe_rawColors.PLATFORM_XBOX };
createCacheKey[6] = { color: require("Themes").colors.INTERACTIVE_TEXT_ACTIVE };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj2 = { color: require("Themes").colors.INTERACTIVE_TEXT_ACTIVE };
const result = require("get ActivityIndicator").fileFinishedImporting("modules/user_settings/connections/native/two_way_link/xbox/XboxLinkSuccess.tsx");

export default function XboxLinkDiscordSuccess() {
  const tmp = createCacheKey();
  let obj = first(navigation[8]);
  const twoWayLinkStyles = obj.useTwoWayLinkStyles();
  const tmp5 = callback(React.useState(true), 2);
  first = tmp5[0];
  const importDefault = tmp5[1];
  const effect = React.useEffect(() => {
    outer1_7.canOpenURL(outer1_12).then(closure_1);
  }, []);
  const items = [first];
  callback = React.useCallback(() => {
    if (!first) {
      const openURL = outer1_7.openURL;
      if (obj.isAndroid()) {
        openURL(outer1_10);
      } else {
        openURL(outer1_11);
      }
      obj = first(navigation[9]);
    }
  }, items);
  let obj1 = first(navigation[10]);
  navigation = obj1.useNavigation();
  const items1 = [navigation];
  obj = { style: twoWayLinkStyles.container, children: null };
  obj = { style: twoWayLinkStyles.content, children: null };
  obj1 = { source: null, style: null };
  const callback1 = React.useCallback(() => {
    navigation.push(outer1_9.EDUCATION);
  }, items1);
  obj1[0] = importDefault(navigation[11]);
  obj1[1] = tmp.image;
  const items2 = [callback2(closure_5, obj1), , , ];
  const obj2 = { variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", style: twoWayLinkStyles.title, children: null };
  const intl = first(navigation[13]).intl;
  obj2[3] = intl.string(first(navigation[13]).t.aGRPVq);
  items2[1] = callback2(first(navigation[12]).Text, obj2);
  const obj3 = { variant: "text-md/normal", color: "text-default", style: twoWayLinkStyles.body, children: null };
  const intl2 = first(navigation[13]).intl;
  obj3[3] = intl2.string(first(navigation[13]).t.m3mBYE);
  items2[2] = callback2(first(navigation[12]).Text, obj3);
  const obj4 = { onPress: callback, style: tmp.getApp, children: null };
  const obj5 = { style: tmp.appLogoBox, children: null };
  obj5[1] = callback2(closure_5, { source: importDefault(navigation[14]), style: tmp.appLogo });
  const items3 = [callback2(closure_6, obj5), , ];
  const obj7 = { style: tmp.getAppTitle, variant: "heading-md/semibold", color: "mobile-text-heading-primary", children: null };
  const intl3 = first(navigation[13]).intl;
  const string = intl3.string;
  const t = first(navigation[13]).t;
  if (first) {
    let stringResult = string(t.zcKE8W);
  } else {
    stringResult = string(t["12Kx2v"]);
  }
  obj7[3] = stringResult;
  items3[1] = callback2(first(navigation[12]).Text, obj7);
  if (first) {
    const obj8 = { source: null, style: null };
    obj8[0] = tmp15(tmp3[15]);
    obj8[1] = tmp.icon;
    let tmp13Result = tmp13(closure_5, obj8);
  } else {
    const obj9 = { source: null, size: null, color: null, style: null };
    obj9[0] = tmp15(tmp3[17]);
    obj9[1] = tmp2(tmp3[16]).Icon.Sizes.SMALL;
    obj9[2] = tmp.externalLinkIcon.color;
    obj9[3] = tmp.icon;
    tmp13Result = tmp13(tmp2(tmp3[16]).Icon, obj9);
  }
  items3[2] = tmp13Result;
  obj4[2] = items3;
  items2[3] = closure_14(closure_8, obj4);
  obj[1] = items2;
  const items4 = [closure_14(closure_6, obj), ];
  const obj10 = { bottom: true, style: twoWayLinkStyles.footerContainer, children: null };
  const obj11 = { style: twoWayLinkStyles.footerButton, children: null };
  const obj12 = { size: "lg", variant: "primary", text: null, onPress: null };
  const intl4 = tmp2(tmp3[13]).intl;
  obj12[2] = intl4.string(first(navigation[13]).t["3PatSz"]);
  obj12[3] = callback1;
  obj11[1] = callback2(first(navigation[19]).Button, obj12);
  obj10[2] = callback2(closure_6, obj11);
  items4[1] = callback2(first(navigation[18]).SafeAreaPaddingView, obj10);
  obj[1] = items4;
  return closure_14(closure_6, obj);
};