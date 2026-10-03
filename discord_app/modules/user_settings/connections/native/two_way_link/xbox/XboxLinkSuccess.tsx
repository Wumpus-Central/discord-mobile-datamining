// === Module 8752: XboxLinkSuccess ===

// Module 8752 (XboxLinkSuccess)
import nativeDefault from "native" /* 587 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ Image: hasOwnProperty, View: metroRequire, Linking: closure_7, Pressable: closure_8 } = get_ActivityIndicator);
const XboxLinkModalScenes = fn(8735).XboxLinkModalScenes;
const GameConsoleConstants = fn(8749);
({ XBOX_ANDROID_APP_LINK: c10, XBOX_IOS_APP_LINK: closure_11, XBOX_URL_BASE: closure_12 } = GameConsoleConstants);
const jsxProd = fn(21);
({ jsx: map1, jsxs: closure_14 } = jsxProd);
const createStyles = fn(4890);
let obj2 = { image: { width: 58, height: 85, marginBottom: 24 }, getApp: { alignItems: "center", alignSelf: "stretch", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, marginTop: 24, padding: 16, borderRadius: nativeDefault.radii.sm, flexDirection: "row" }, appLogoBox: null, appLogo: null, getAppTitle: null, icon: null, externalLinkIcon: null };
let size = { marginRight: 12, width: 40, height: 40, alignItems: "center", justifyContent: "center", borderRadius: nativeDefault.radii.xs, backgroundColor: nativeDefault.unsafe_rawColors.PLATFORM_XBOX };
obj2.appLogoBox = size;
obj2.appLogo = { width: 32, height: 32 };
obj2.getAppTitle = { flex: 1 };
obj2.icon = { marginLeft: 8 };
let obj3 = { alignItems: "center", alignSelf: "stretch", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, marginTop: 24, padding: 16, borderRadius: nativeDefault.radii.sm, flexDirection: "row" };
obj2.externalLinkIcon = { color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE };
let closure_15 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj4 = { color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE };
size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/xbox/XboxLinkSuccess.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = icon(navigation[9]).c(53);
  const tmp4 = closure_15();
  let obj = icon(navigation[9]);
  const twoWayLinkStyles = icon(navigation[10]).useTwoWayLinkStyles();
  [icon, importDefault] = noop.useState(true);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function n() {
      React5.canOpenURL(__initData).then(closure_1);
    };
    const items = [];
    cResult[0] = fn;
    cResult[1] = items;
    tmp7 = fn;
    tmp8 = items;
  } else {
    [tmp7, tmp8] = cResult;
  }
  const effect = noop.useEffect(tmp7, tmp8);
  if (cResult[2] !== icon) {
    const fn2 = function f() {
      if (!icon) {
        const openURL = React5.openURL;
        if (obj.isAndroid()) {
          openURL(v65535);
        } else {
          openURL(closure_2_11);
        }
        obj = PlatformUtils;
      }
    };
    cResult[2] = icon;
    cResult[3] = fn2;
  }
  const obj2 = icon(navigation[10]);
  navigation = icon(navigation[12]).useNavigation();
  if (cResult[4] !== navigation) {
    class C {
      constructor() {
        arr = closure_2.push(XboxLinkModalScenes.EDUCATION);
        return;
      }
    }
    cResult[4] = navigation;
    cResult[5] = C;
  } else {
    class C {
      constructor() {
        arr = closure_2.push(XboxLinkModalScenes.EDUCATION);
        return;
      }
    }
  }
  ({ container, content } = twoWayLinkStyles);
  if (cResult[6] !== tmp4.image) {
    class C {
      constructor() {
        arr = closure_2.push(XboxLinkModalScenes.EDUCATION);
        return;
      }
    }
    const obj4 = { source: require("module_8753"), style: tmp4.image };
    const tmp16 = closure_13(closure_5, obj4);
    cResult[6] = tmp4.image;
    cResult[7] = tmp16;
  } else {
    class C {
      constructor() {
        arr = closure_2.push(XboxLinkModalScenes.EDUCATION);
        return;
      }
    }
  }
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    class C {
      constructor() {
        arr = closure_2.push(XboxLinkModalScenes.EDUCATION);
        return;
      }
    }
    const stringResult = obj6.string(tmp(tmp2[14]).t.aGRPVq);
    cResult[8] = stringResult;
    const tmp17 = stringResult;
  } else {
    class C {
      constructor() {
        arr = closure_2.push(XboxLinkModalScenes.EDUCATION);
        return;
      }
    }
  }
  if (cResult[9] !== twoWayLinkStyles.title) {
    class C {
      constructor() {
        arr = closure_2.push(XboxLinkModalScenes.EDUCATION);
        return;
      }
    }
    const obj5 = { variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", style: twoWayLinkStyles.title, children: tmp17 };
    const tmp20 = closure_13(tmp(tmp2[15]).Text, obj5);
    cResult[9] = twoWayLinkStyles.title;
    cResult[10] = tmp20;
  } else {
    class C {
      constructor() {
        arr = closure_2.push(XboxLinkModalScenes.EDUCATION);
        return;
      }
    }
  }
  if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
    class C {
      constructor() {
        arr = closure_2.push(XboxLinkModalScenes.EDUCATION);
        return;
      }
    }
    const stringResult1 = obj8.string(tmp(tmp2[14]).t.m3mBYE);
    cResult[11] = stringResult1;
    const tmp21 = stringResult1;
  } else {
    class C {
      constructor() {
        arr = closure_2.push(XboxLinkModalScenes.EDUCATION);
        return;
      }
    }
  }
  if (cResult[12] !== twoWayLinkStyles.body) {
    class C {
      constructor() {
        arr = closure_2.push(XboxLinkModalScenes.EDUCATION);
        return;
      }
    }
    const obj7 = { variant: "text-md/normal", color: "text-default", style: twoWayLinkStyles.body, children: tmp21 };
    const tmp24 = closure_13(tmp(tmp2[15]).Text, obj7);
    cResult[12] = twoWayLinkStyles.body;
    cResult[13] = tmp24;
  } else {
    class C {
      constructor() {
        arr = closure_2.push(XboxLinkModalScenes.EDUCATION);
        return;
      }
    }
  }
  if (cResult[14] !== tmp4.appLogo) {
    class C {
      constructor() {
        arr = closure_2.push(XboxLinkModalScenes.EDUCATION);
        return;
      }
    }
    const obj9 = { source: require("module_8754"), style: tmp4.appLogo };
    const tmp28 = closure_13(closure_5, obj9);
    cResult[14] = tmp4.appLogo;
    cResult[15] = tmp28;
  } else {
    class C {
      constructor() {
        arr = closure_2.push(XboxLinkModalScenes.EDUCATION);
        return;
      }
    }
  }
  if (cResult[16] === tmp4.appLogoBox) {
    class C {
      constructor() {
        arr = closure_2.push(XboxLinkModalScenes.EDUCATION);
        return;
      }
    }
    if (cResult[19] !== icon) {
      class C {
        constructor() {
          arr = closure_2.push(XboxLinkModalScenes.EDUCATION);
          return;
        }
      }
      if (icon) {
        class C {
          constructor() {
            arr = closure_2.push(XboxLinkModalScenes.EDUCATION);
            return;
          }
        }
        const stringResult2 = obj12.string(tmp(tmp2[14]).t);
      } else {
        class C {
          constructor() {
            arr = closure_2.push(XboxLinkModalScenes.EDUCATION);
            return;
          }
        }
      }
      cResult[19] = icon;
      cResult[20] = stringResult2;
    } else {
      class C {
        constructor() {
          arr = closure_2.push(XboxLinkModalScenes.EDUCATION);
          return;
        }
      }
      if (cResult[21] === tmp4.getAppTitle) {
        class C {
          constructor() {
            arr = closure_2.push(XboxLinkModalScenes.EDUCATION);
            return;
          }
        }
        if (cResult[24] === icon) {
          class C {
            constructor() {
              arr = closure_2.push(XboxLinkModalScenes.EDUCATION);
              return;
            }
          }
        }
        if (icon) {
          class C {
            constructor() {
              arr = closure_2.push(XboxLinkModalScenes.EDUCATION);
              return;
            }
          }
          const obj10 = { source: require("module_8755"), style: tmp4.icon };
          let tmp36Result = closure_13(closure_5, obj10);
        } else {
          class C {
            constructor() {
              arr = closure_2.push(XboxLinkModalScenes.EDUCATION);
              return;
            }
          }
          tmp37[0] = require("module_8756");
          tmp37[1] = tmp(tmp2[18]).Icon.Sizes.SMALL;
          tmp37[2] = tmp4.externalLinkIcon.color;
          tmp37[3] = tmp4.icon;
          tmp36Result = closure_13(tmp(tmp2[18]).Icon, tmp37);
        }
        cResult[24] = icon;
        ({ externalLinkIcon: tmp3[25], icon } = tmp4);
        cResult[26] = icon;
        cResult[27] = tmp36Result;
      }
      const obj11 = { style: tmp4.getAppTitle, variant: "heading-md/semibold", color: "mobile-text-heading-primary", children: tmp30 };
      const tmp35 = closure_13(tmp(tmp2[15]).Text, obj11);
      cResult[21] = tmp4.getAppTitle;
      cResult[22] = tmp30;
      cResult[23] = tmp35;
    }
  }
  const obj13 = { style: tmp4.appLogoBox, children: tmp25 };
  const tmpResult = icon(navigation[12]);
  cResult[16] = tmp4.appLogoBox;
  cResult[17] = tmp25;
  cResult[18] = closure_13(closure_6, { style: tmp4.appLogoBox, children: tmp25 });
  const tmp29 = closure_13(closure_6, { style: tmp4.appLogoBox, children: tmp25 });
}) : (() => {
  const tmp = closure_15();
  const twoWayLinkStyles = first(navigation[10]).useTwoWayLinkStyles();
  [first, importDefault] = noop.useState(true);
  const effect = noop.useEffect(() => {
    React5.canOpenURL(__initData).then(closure_1);
  }, []);
  const items = [first];
  const callback = noop.useCallback(() => {
    if (!first) {
      const openURL = React5.openURL;
      if (obj.isAndroid()) {
        openURL(v65535);
      } else {
        openURL(closure_2_11);
      }
      obj = PlatformUtils;
    }
  }, items);
  let obj = first(navigation[10]);
  navigation = first(navigation[12]).useNavigation();
  const items1 = [navigation];
  const obj3 = { style: twoWayLinkStyles.container, children: null };
  const obj4 = { style: twoWayLinkStyles.content, children: null };
  const obj5 = { source: null, style: null };
  const callback1 = noop.useCallback(() => {
    navigation.push(XboxLinkModalScenes.EDUCATION);
  }, items1);
  obj5.source = require("module_8753");
  obj5.style = tmp.image;
  const items2 = [closure_13(closure_5, obj5), , , ];
  const obj6 = { variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", style: twoWayLinkStyles.title, children: null };
  const intl = first(navigation[14]).intl;
  obj6.children = intl.string(first(navigation[14]).t.aGRPVq);
  items2[1] = closure_13(first(navigation[15]).Text, obj6);
  const obj7 = { variant: "text-md/normal", color: "text-default", style: twoWayLinkStyles.body, children: null };
  const intl2 = first(navigation[14]).intl;
  obj7.children = intl2.string(first(navigation[14]).t.m3mBYE);
  items2[2] = closure_13(first(navigation[15]).Text, obj7);
  const obj8 = { onPress: callback, style: tmp.getApp, children: null };
  const obj9 = { style: tmp.appLogoBox, children: null };
  const obj2 = first(navigation[12]);
  obj9.children = closure_13(closure_5, { source: require("module_8754"), style: tmp.appLogo });
  const items3 = [closure_13(closure_6, obj9), , ];
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
  items3[1] = closure_13(first(navigation[15]).Text, obj11);
  if (first) {
    const obj12 = { source: tmp15(tmp3[17]), style: tmp.icon };
    let tmp13Result = closure_13(closure_5, obj12);
  } else {
    const obj13 = { source: tmp15(tmp3[19]), size: tmp2(tmp3[18]).Icon.Sizes.SMALL, color: tmp.externalLinkIcon.color, style: tmp.icon };
    tmp13Result = closure_13(tmp2(tmp3[18]).Icon, obj13);
  }
  items3[2] = tmp13Result;
  obj8.children = items3;
  items2[3] = closure_14(closure_8, obj8);
  obj4.children = items2;
  const items4 = [closure_14(closure_6, obj4), ];
  const obj14 = { bottom: true, style: twoWayLinkStyles.footerContainer, children: null };
  const obj15 = { style: twoWayLinkStyles.footerButton, children: null };
  const obj16 = { size: "lg", variant: "primary", text: null, onPress: null };
  const intl4 = tmp2(tmp3[14]).intl;
  obj16.text = intl4.string(first(navigation[14]).t["3PatSz"]);
  obj16.onPress = callback1;
  obj15.children = closure_13(first(navigation[20]).Button, obj16);
  obj14.children = closure_13(closure_6, obj15);
  items4[1] = closure_13(first(navigation[21]).SafeAreaPaddingView, obj14);
  obj3.children = items4;
  return closure_14(closure_6, obj3);
});