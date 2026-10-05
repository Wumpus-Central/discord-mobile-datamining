// discord_app/modules/user_settings/connections/native/two_way_link/xbox/XboxLinkSuccess.tsx
import nativeDefault from "../../../../../../../discord_common/js/packages/tokens/native.tsx";
import PlatformUtils from "../../../../../../utils/PlatformUtils.tsx";
import XboxLinkConstants from "XboxLinkConstants.tsx";
import _slicedToArray from "../../../../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../../../../_runtime/00019_react.js";
import react_native from "../../../../../../../_runtime/00017_react-native.js";
import GameConsoleConstants from "../../../../../game_console/GameConsoleConstants.tsx";
import Fragment from "../../../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let navigation;

let c10;
let closure_12;
let closure_14;
let hasOwnProperty;
let map1;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let size;
let unpackModuleId;
({ Image: hasOwnProperty, View: metroRequire, Linking: metroImportDefault, Pressable: metroImportAll } = react_native);
const XboxLinkModalScenes = XboxLinkConstants.XboxLinkModalScenes;
({ XBOX_ANDROID_APP_LINK: c10, XBOX_IOS_APP_LINK: unpackModuleId, XBOX_URL_BASE: closure_12 } = GameConsoleConstants);
({ jsx: map1, jsxs: closure_14 } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  image: { width: 58, height: 85, marginBottom: 24 },
  getApp: obj2,
  appLogoBox: size,
  appLogo: { width: 32, height: 32 },
  getAppTitle: { flex: 1 },
  icon: { marginLeft: 8 },
  externalLinkIcon: obj3,
};
obj2 = {
  alignItems: "center",
  alignSelf: "stretch",
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
  marginTop: 24,
  padding: 16,
  borderRadius: nativeDefault.radii.sm,
  flexDirection: "row",
};
createStyles = createStyles.createStyles;
size = {
  marginRight: 12,
  width: 40,
  height: 40,
  alignItems: "center",
  justifyContent: "center",
  borderRadius: nativeDefault.radii.xs,
  backgroundColor: nativeDefault.unsafe_rawColors.PLATFORM_XBOX,
};
obj3 = { color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE };
let closure_15 = createStyles(obj);
const tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let closure_1;
      let container;
      let content;
      let first;
      let tmp18;
      let tmp22;
      let tmp8;
      let tmp9;
      let obj = first(navigation[9]);
      const cResult = obj.c(53);
      const tmp4 = closure_15();
      const obj2 = first(navigation[10]);
      const twoWayLinkStyles = obj2.useTwoWayLinkStyles();
      [first, importDefault] = react.useState(true);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function n() {
          const canOpenURLResult = metroImportDefault.canOpenURL(closure_12);
          canOpenURLResult.then(closure_1);
        };
        const items = [];
        cResult[0] = fn;
        cResult[1] = items;
        tmp8 = fn;
        tmp9 = items;
      } else {
        [tmp8, tmp9] = cResult;
      }
      const effect = react.useEffect(tmp8, tmp9);
      if (cResult[2] !== first) {
        const fn2 = function f() {
          if (!first) {
            const openURL = metroImportDefault.openURL;
            const obj = PlatformUtils;
            if (obj.isAndroid()) {
              openURL(authStore);
            } else {
              openURL(unpackModuleId);
            }
          }
        };
        cResult[2] = first;
        cResult[3] = fn2;
      }
      const tmpResult = first(navigation[12]);
      navigation = tmpResult.useNavigation();
      if (cResult[4] !== navigation) {
        class C {
          constructor() {
            navigation.push(XboxLinkModalScenes.EDUCATION);
          }
        }
        cResult[4] = navigation;
        cResult[5] = C;
      } else {
        class C {
          constructor() {
            navigation.push(XboxLinkModalScenes.EDUCATION);
          }
        }
      }
      ({ container, content } = twoWayLinkStyles);
      if (cResult[6] !== tmp4.image) {
        class C {
          constructor() {
            navigation.push(XboxLinkModalScenes.EDUCATION);
          }
        }
        const obj4 = { source: require("AssetRegistry"), style: tmp4.image };
        cResult[6] = tmp4.image;
        cResult[7] = closure_13(closure_5, obj4);
        const tmp17 = closure_13(closure_5, obj4);
      } else {
        class C {
          constructor() {
            navigation.push(XboxLinkModalScenes.EDUCATION);
          }
        }
      }
      const title = twoWayLinkStyles.title;
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        class C {
          constructor() {
            navigation.push(XboxLinkModalScenes.EDUCATION);
          }
        }
        const stringResult = obj6.string(first(navigation[14]).t.aGRPVq);
        cResult[8] = stringResult;
        tmp18 = stringResult;
      } else {
        class C {
          constructor() {
            navigation.push(XboxLinkModalScenes.EDUCATION);
          }
        }
      }
      if (cResult[9] !== twoWayLinkStyles.title) {
        class C {
          constructor() {
            navigation.push(XboxLinkModalScenes.EDUCATION);
          }
        }
        const obj5 = {
          variant: "heading-xl/extrabold",
          color: "mobile-text-heading-primary",
          style: title,
          children: tmp18,
        };
        cResult[9] = twoWayLinkStyles.title;
        cResult[10] = closure_13(first(navigation[15]).Text, obj5);
        const tmp21 = closure_13(first(navigation[15]).Text, obj5);
      } else {
        class C {
          constructor() {
            navigation.push(XboxLinkModalScenes.EDUCATION);
          }
        }
      }
      const body = twoWayLinkStyles.body;
      if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
        class C {
          constructor() {
            navigation.push(XboxLinkModalScenes.EDUCATION);
          }
        }
        const stringResult1 = obj8.string(first(navigation[14]).t.m3mBYE);
        cResult[11] = stringResult1;
        tmp22 = stringResult1;
      } else {
        class C {
          constructor() {
            navigation.push(XboxLinkModalScenes.EDUCATION);
          }
        }
      }
      if (cResult[12] !== twoWayLinkStyles.body) {
        class C {
          constructor() {
            navigation.push(XboxLinkModalScenes.EDUCATION);
          }
        }
        const obj7 = { variant: "text-md/normal", color: "text-default", style: body, children: tmp22 };
        cResult[12] = twoWayLinkStyles.body;
        cResult[13] = closure_13(first(navigation[15]).Text, obj7);
        const tmp25 = closure_13(first(navigation[15]).Text, obj7);
      } else {
        class C {
          constructor() {
            navigation.push(XboxLinkModalScenes.EDUCATION);
          }
        }
      }
      if (cResult[14] !== tmp4.appLogo) {
        class C {
          constructor() {
            navigation.push(XboxLinkModalScenes.EDUCATION);
          }
        }
        const obj9 = { source: require("AssetRegistry"), style: tmp4.appLogo };
        cResult[14] = tmp4.appLogo;
        cResult[15] = closure_13(closure_5, obj9);
        const tmp29 = closure_13(closure_5, obj9);
      } else {
        class C {
          constructor() {
            navigation.push(XboxLinkModalScenes.EDUCATION);
          }
        }
      }
      if (cResult[16] === tmp4.appLogoBox) {
        class C {
          constructor() {
            navigation.push(XboxLinkModalScenes.EDUCATION);
          }
        }
        if (cResult[19] !== first) {
          class C {
            constructor() {
              navigation.push(XboxLinkModalScenes.EDUCATION);
            }
          }
          const string = tmp32.string;
          const t = tmp(tmp2[14]).t;
          if (first) {
            class C {
              constructor() {
                navigation.push(XboxLinkModalScenes.EDUCATION);
              }
            }
          } else {
            class C {
              constructor() {
                navigation.push(XboxLinkModalScenes.EDUCATION);
              }
            }
          }
          cResult[19] = first;
          cResult[20] = tmp33;
        } else {
          class C {
            constructor() {
              navigation.push(XboxLinkModalScenes.EDUCATION);
            }
          }
        }
        if (cResult[21] === tmp4.getAppTitle) {
          let tmp38Result;
          class C {
            constructor() {
              navigation.push(XboxLinkModalScenes.EDUCATION);
            }
          }
          if (cResult[24] === first) {
            class C {
              constructor() {
                navigation.push(XboxLinkModalScenes.EDUCATION);
              }
            }
          }
          if (first) {
            class C {
              constructor() {
                navigation.push(XboxLinkModalScenes.EDUCATION);
              }
            }
            const obj10 = { source: require("AssetRegistry"), style: tmp4.icon };
            tmp38Result = closure_13(closure_5, obj10);
          } else {
            class C {
              constructor() {
                navigation.push(XboxLinkModalScenes.EDUCATION);
              }
            }
            const Icon = tmp(tmp2[18]).Icon;
            tmp39[0] = require("AssetRegistry");
            tmp39[1] = first(navigation[18]).Icon.Sizes.SMALL;
            tmp39[2] = tmp4.externalLinkIcon.color;
            tmp39[3] = tmp4.icon;
            tmp38Result = closure_13(Icon, tmp39);
          }
          cResult[24] = first;
          cResult[25] = tmp4.externalLinkIcon;
          cResult[26] = tmp4.icon;
          cResult[27] = tmp38Result;
        }
        const obj11 = {
          style: tmp4.getAppTitle,
          variant: "heading-md/semibold",
          color: "mobile-text-heading-primary",
          children: tmp33,
        };
        cResult[21] = tmp4.getAppTitle;
        cResult[22] = tmp33;
        cResult[23] = closure_13(first(navigation[15]).Text, obj11);
        const tmp36 = closure_13(first(navigation[15]).Text, obj11);
      }
      const obj12 = { style: tmp4.appLogoBox, children: tmp26 };
      cResult[16] = tmp4.appLogoBox;
      cResult[17] = tmp26;
      cResult[18] = closure_13(closure_6, obj12);
      closure_13(closure_6, obj12);
    }
  : () => {
      let Button;
      let closure_1;
      let first;
      let intl;
      let intl2;
      let intl4;
      let items2;
      let items3;
      let items4;
      let obj10;
      let obj15;
      let obj16;
      let stringResult;
      let tmp13Result;
      const tmp = closure_15();
      let obj = first(navigation[10]);
      const twoWayLinkStyles = obj.useTwoWayLinkStyles();
      [first, importDefault] = react.useState(true);
      const effect = react.useEffect(() => {
        const canOpenURLResult = metroImportDefault.canOpenURL(closure_12);
        canOpenURLResult.then(closure_1);
      }, []);
      const items = [first];
      const callback = react.useCallback(() => {
        if (!first) {
          const openURL = metroImportDefault.openURL;
          const obj = PlatformUtils;
          if (obj.isAndroid()) {
            openURL(authStore);
          } else {
            openURL(unpackModuleId);
          }
        }
      }, items);
      const obj2 = first(navigation[12]);
      navigation = obj2.useNavigation();
      const items1 = [navigation];
      const obj3 = { style: twoWayLinkStyles.container, children: items4 };
      const obj4 = { style: twoWayLinkStyles.content, children: items2 };
      const obj5 = { source: require("AssetRegistry"), style: tmp.image };
      const callback1 = react.useCallback(() => {
        navigation.push(XboxLinkModalScenes.EDUCATION);
      }, items1);
      items2 = [closure_13(closure_5, obj5), , ,];
      const obj6 = {
        variant: "heading-xl/extrabold",
        color: "mobile-text-heading-primary",
        style: twoWayLinkStyles.title,
        children: intl.string(first(navigation[14]).t.aGRPVq),
      };
      const Text = first(navigation[15]).Text;
      intl = first(navigation[14]).intl;
      items2[1] = closure_13(Text, obj6);
      const obj7 = {
        variant: "text-md/normal",
        color: "text-default",
        style: twoWayLinkStyles.body,
        children: intl2.string(first(navigation[14]).t.m3mBYE),
      };
      const Text2 = first(navigation[15]).Text;
      intl2 = first(navigation[14]).intl;
      items2[2] = closure_13(Text2, obj7);
      const obj8 = { onPress: callback, style: tmp.getApp, children: items3 };
      const obj9 = { style: tmp.appLogoBox, children: closure_13(closure_5, obj10) };
      obj10 = { source: require("AssetRegistry"), style: tmp.appLogo };
      items3 = [closure_13(closure_6, obj9), ,];
      const obj11 = {
        style: tmp.getAppTitle,
        variant: "heading-md/semibold",
        color: "mobile-text-heading-primary",
        children: stringResult,
      };
      const Text3 = first(navigation[15]).Text;
      const intl3 = first(navigation[14]).intl;
      const string = intl3.string;
      const t = first(navigation[14]).t;
      if (first) {
        stringResult = string(t.zcKE8W);
      } else {
        stringResult = string(t["12Kx2v"]);
      }
      items3[1] = closure_13(Text3, obj11);
      if (first) {
        const obj12 = { source: require("AssetRegistry"), style: tmp.icon };
        tmp13Result = closure_13(closure_5, obj12);
      } else {
        const obj13 = {
          source: require("AssetRegistry"),
          size: first(navigation[18]).Icon.Sizes.SMALL,
          color: tmp.externalLinkIcon.color,
          style: tmp.icon,
        };
        const Icon = tmp2(tmp3[18]).Icon;
        tmp13Result = closure_13(Icon, obj13);
      }
      items3[2] = tmp13Result;
      items2[3] = closure_14(closure_8, obj8);
      items4 = [closure_14(closure_6, obj4)];
      const obj14 = { bottom: true, style: twoWayLinkStyles.footerContainer, children: closure_13(closure_6, obj15) };
      obj15 = { style: twoWayLinkStyles.footerButton, children: closure_13(Button, obj16) };
      const SafeAreaPaddingView = tmp2(tmp3[21]).SafeAreaPaddingView;
      obj16 = {
        size: "lg",
        variant: "primary",
        text: intl4.string(first(navigation[14]).t["3PatSz"]),
        onPress: callback1,
      };
      Button = tmp2(tmp3[20]).Button;
      intl4 = tmp2(tmp3[14]).intl;
      items4[1] = closure_13(SafeAreaPaddingView, obj14);
      return closure_14(closure_6, obj3);
    };
size = size_mod;
const result = size.fileFinishedImporting(
  "modules/user_settings/connections/native/two_way_link/xbox/XboxLinkSuccess.tsx",
);

export default tmp6;
