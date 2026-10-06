// discord_app/modules/user_settings/connections/native/ConnectionsEmptyStateUpsell.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../../Constants.tsx";
import AvatarUtils from "../../../../utils/AvatarUtils.tsx";
import useSafeAreaInsetsDefault from "../../../safe_area/useSafeAreaInsets.native.tsx";
import shared from "../../../../design/shared.tsx";
import useThemeDefault from "../../../../hooks/useTheme.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import Stack_Stack from "../../../../design/components/Stack/native/Stack.native.tsx";
import Card_Card from "../../../../design/components/Card/native/Card.native.tsx";
import ConnectionsHooks from "../../../connections/ConnectionsHooks.tsx";
import authorizeConnectionDefault from "../../../connections/authorizeConnection.native.tsx";
import ConnectionsTracking from "ConnectionsTracking.tsx";
import react from "../../../../../_runtime/00019_react.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let importDefault, platform;

let metroImportDefault;
let metroRequire;
function OtherConnectionsCard(count) {
  let Text;
  let obj2;
  let paths;
  count = count.count;
  const tmp = closure_8();
  const callback = react.useCallback(() => {
    const obj = require("ActionSheetActionCreators");
    obj.openLazy(require("asyncRequire")(paths[17], paths.paths), "AddConnection");
  }, []);
  let obj = { onPress: callback, style: tmp.card, border: "strong", children: metroRequire(Text, obj2) };
  const Card = Card_Card.Card;
  obj2 = { variant: "text-md/medium", color: "interactive-text-default", children: "+" + count };
  Text = Text_Text.Text;
  return metroRequire(Card, obj);
}
const View = react_native.View;
const AnalyticsLocations = Constants.AnalyticsLocations;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let closure_8 = createStyles.createStyles(() => {
  const obj = {
    container: { flex: 1, alignItems: "center" },
    content: { flex: 1, width: "100%", maxWidth: 260, alignItems: "center", justifyContent: "center" },
    card: {
      flex: 1,
      maxHeight: 76,
      maxWidth: 76,
      aspectRatio: 1,
      alignItems: "center",
      justifyContent: "center",
      padding: 12,
    },
    textContainer: { marginTop: 32 },
    text: { textAlign: "center" },
    iconContainer: {
      flex: 1,
      maxHeight: 52,
      maxWidth: 52,
      aspectRatio: 1,
      borderRadius: nativeDefault.radii.round,
      alignItems: "center",
      justifyContent: "center",
      padding: 8,
    },
    icon: { flex: 1, aspectRatio: 1 },
  };
  ({
    flex: 1,
    maxHeight: 52,
    maxWidth: 52,
    aspectRatio: 1,
    borderRadius: nativeDefault.radii.round,
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  });
  return obj;
});
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_9 = ReactCompilerGating.isReactCompilerEnabled()
  ? (platform) => {
      let tmp6;
      let tmp7;
      let whitePNG;
      let obj = platform(576);
      const cResult = obj.c(27);
      platform = platform.platform;
      const tmp4 = closure_8();
      const tmp5 = useThemeDefault();
      if (cResult[0] !== platform.type) {
        const fn = function c() {
          const obj = { platformType: platform.type, location: AnalyticsLocations.CONNECTIONS_EMPTY_STATE };
          authorizeConnectionDefault(obj);
          const obj2 = ConnectionsTracking;
          const obj3 = { platformType: platform.type };
          const result = obj2.trackEmptyStateCardClicked(obj3);
        };
        cResult[0] = platform.type;
        cResult[1] = fn;
        tmp6 = fn;
      } else {
        tmp6 = cResult[1];
      }
      if (cResult[2] !== platform.type) {
        const tmpResult = platform(14785);
        const connectionBackgroundColor = tmpResult.getConnectionBackgroundColor(platform.type);
        cResult[2] = platform.type;
        cResult[3] = connectionBackgroundColor;
        tmp7 = connectionBackgroundColor;
      } else {
        tmp7 = cResult[3];
      }
      if (cResult[4] === tmp7) {
        if (cResult[5] === platform.icon.darkPNG) {
          if (cResult[6] === platform.icon.lightPNG) {
            if (cResult[7] === platform.icon.whitePNG) {
              let tmp9;
              if (cResult[8] === tmp5) {
                tmp9 = cResult[9];
              }
              if (cResult[10] === tmp7) {
                let tmp12;
                if (cResult[11] === platform.color) {
                  tmp12 = cResult[12];
                }
                if (cResult[13] === tmp4.iconContainer) {
                  let tmp15;
                  if (cResult[14] === tmp12) {
                    tmp15 = cResult[15];
                  }
                  if (cResult[16] === platform.name) {
                    if (cResult[17] === tmp9) {
                      let tmp16;
                      if (cResult[18] === tmp4.icon) {
                        tmp16 = cResult[19];
                      }
                      if (cResult[20] === tmp15) {
                        let tmp19;
                        if (cResult[21] === tmp16) {
                          tmp19 = cResult[22];
                        }
                        if (cResult[23] === tmp6) {
                          if (cResult[24] === tmp4.card) {
                            let tmp23;
                            if (cResult[25] === tmp19) {
                              tmp23 = cResult[26];
                            }
                            return tmp23;
                          }
                        }
                        let obj2 = { onPress: tmp6, style: tmp4.card, border: "strong", children: tmp19 };
                        const tmp25 = closure_6(platform(6002).Card, obj2);
                        cResult[23] = tmp6;
                        cResult[24] = tmp4.card;
                        cResult[25] = tmp19;
                        cResult[26] = tmp25;
                        tmp23 = tmp25;
                      }
                      let obj3 = { style: tmp15, children: tmp16 };
                      const tmp22 = closure_6(View, obj3);
                      cResult[20] = tmp15;
                      cResult[21] = tmp16;
                      cResult[22] = tmp22;
                      tmp19 = tmp22;
                    }
                  }
                  const obj4 = {
                    style: tmp4.icon,
                    source: tmp9,
                    resizeMode: "contain",
                    disableColor: true,
                    accessibilityLabel: platform.name,
                  };
                  const tmp18 = closure_6(platform(1188).Icon, obj4);
                  cResult[16] = platform.name;
                  cResult[17] = tmp9;
                  cResult[18] = tmp4.icon;
                  cResult[19] = tmp18;
                  tmp16 = tmp18;
                }
                const items = [tmp4.iconContainer, tmp12];
                cResult[13] = tmp4.iconContainer;
                cResult[14] = tmp12;
                cResult[15] = items;
                tmp15 = items;
              }
              let tmp14 = null != platform.color;
              if (tmp14) {
                tmp14 = { backgroundColor: tmp7 };
                const obj5 = { backgroundColor: tmp7 };
              }
              cResult[10] = tmp7;
              cResult[11] = platform.color;
              cResult[12] = tmp14;
              tmp12 = tmp14;
            }
          }
        }
      }
      const makeSource = tmp(1402).makeSource;
      platform(1402);
      if (null != tmp7) {
        whitePNG = platform.icon.whitePNG;
      } else {
        const icon = platform.icon;
        const tmpResult4 = platform(4735);
        whitePNG = tmpResult4.isThemeDark(tmp5) ? icon.darkPNG : icon.lightPNG;
      }
      const source = makeSource(whitePNG);
      cResult[4] = tmp7;
      cResult[5] = platform.icon.darkPNG;
      cResult[6] = platform.icon.lightPNG;
      cResult[7] = platform.icon.whitePNG;
      cResult[8] = tmp5;
      cResult[9] = source;
      tmp9 = source;
    }
  : (platform) => {
      let closure_1;
      let obj4;
      let obj5;
      platform = platform.platform;
      importDefault = undefined;
      let connectionBackgroundColor;
      const tmp = closure_8();
      const tmp3 = require("useTheme")();
      importDefault = tmp3;
      const items = [platform];
      const callback = react.useCallback(() => {
        const obj = { platformType: platform.type, location: AnalyticsLocations.CONNECTIONS_EMPTY_STATE };
        authorizeConnectionDefault(obj);
        const obj2 = ConnectionsTracking;
        const obj3 = { platformType: platform.type };
        const result = obj2.trackEmptyStateCardClicked(obj3);
      }, items);
      let obj = platform(connectionBackgroundColor[11]);
      const tmp2 = connectionBackgroundColor;
      connectionBackgroundColor = obj.getConnectionBackgroundColor(platform.type);
      const items1 = [
        connectionBackgroundColor,
        platform.icon.darkPNG,
        platform.icon.lightPNG,
        platform.icon.whitePNG,
        tmp3,
      ];
      const memo = react.useMemo(() => {
        let whitePNG;
        const makeSource = AvatarUtils.makeSource;
        AvatarUtils;
        if (null != connectionBackgroundColor) {
          whitePNG = platform.icon.whitePNG;
        } else {
          const icon = platform.icon;
          const tmpResult = shared;
          whitePNG = tmpResult.isThemeDark(closure_1) ? icon.darkPNG : icon.lightPNG;
        }
        return makeSource(whitePNG);
      }, items1);
      let obj2 = { onPress: callback, style: tmp.card, border: "strong", children: closure_6(View, obj4) };
      const items2 = [tmp.iconContainer];
      let tmp10 = null != platform.color;
      const Card = platform(connectionBackgroundColor[15]).Card;
      const tmp5 = platform;
      if (tmp10) {
        let obj3 = { backgroundColor: connectionBackgroundColor };
        tmp10 = obj3;
      }
      items2[1] = tmp10;
      obj4 = { style: items2, children: closure_6(tmp5(tmp2[14]).Icon, obj5) };
      obj5 = {
        style: tmp.icon,
        source: memo,
        resizeMode: "contain",
        disableColor: true,
        accessibilityLabel: platform.name,
      };
      return closure_6(Card, obj2);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let arr2;
      let arr3;
      let content;
      let items;
      let items1;
      let textContainer;
      let tmp7;
      let obj = react2;
      const cResult = obj.c(43);
      const tmp4 = closure_8();
      const obj2 = ConnectionsHooks;
      const emptyStatePlatforms = obj2.useEmptyStatePlatforms();
      if (cResult[0] !== emptyStatePlatforms) {
        const substr = emptyStatePlatforms.slice(0, 3);
        cResult[0] = emptyStatePlatforms;
        cResult[1] = substr;
        arr2 = substr;
      } else {
        arr2 = cResult[1];
      }
      if (cResult[2] !== emptyStatePlatforms) {
        const substr1 = emptyStatePlatforms.slice(3, 5);
        cResult[2] = emptyStatePlatforms;
        cResult[3] = substr1;
        arr3 = substr1;
      } else {
        arr3 = cResult[3];
      }
      const bottom = useSafeAreaInsetsDefault().bottom;
      if (cResult[4] !== bottom) {
        const obj3 = { paddingBottom: bottom };
        cResult[4] = bottom;
        cResult[5] = obj3;
        tmp7 = obj3;
      } else {
        tmp7 = cResult[5];
      }
      if (cResult[6] === tmp4.container) {
        ({ content, textContainer } = tmp4);
        if (cResult[9] !== arr2) {
          const _Symbol = Symbol;
          if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
            class P {
              constructor(arg0) {
                obj = { platform: arg0 };
                return closure_1_6(closure_1_9, obj, arg0.type);
              }
            }
            cResult[11] = P;
          } else {
            class P {
              constructor(arg0) {
                obj = { platform: arg0 };
                return closure_1_6(closure_1_9, obj, arg0.type);
              }
            }
          }
          const mapped = arr2.map(P);
          cResult[9] = arr2;
          cResult[10] = mapped;
        } else {
          class P {
            constructor(arg0) {
              obj = { platform: arg0 };
              return closure_1_6(closure_1_9, obj, arg0.type);
            }
          }
        }
        if (cResult[12] !== tmp9) {
          class P {
            constructor(arg0) {
              obj = { platform: arg0 };
              return closure_1_6(closure_1_9, obj, arg0.type);
            }
          }
          const obj4 = { spacing: 16, justify: "center", direction: "horizontal", children: tmp9 };
          cResult[12] = tmp9;
          cResult[13] = metroRequire(Stack_Stack.Stack, obj4);
          const tmp14 = metroRequire(Stack_Stack.Stack, obj4);
        } else {
          class P {
            constructor(arg0) {
              obj = { platform: arg0 };
              return closure_1_6(closure_1_9, obj, arg0.type);
            }
          }
        }
        if (cResult[14] !== arr3) {
          class P {
            constructor(arg0) {
              obj = { platform: arg0 };
              return closure_1_6(closure_1_9, obj, arg0.type);
            }
          }
          const _Symbol2 = Symbol;
          if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
            class T {
              constructor(arg0) {
                obj = { platform: arg0 };
                return closure_1_6(closure_1_9, obj, arg0.type);
              }
            }
            cResult[16] = T;
          } else {
            class T {
              constructor(arg0) {
                obj = { platform: arg0 };
                return closure_1_6(closure_1_9, obj, arg0.type);
              }
            }
          }
          const mapped1 = arr3.map(T);
          cResult[14] = arr3;
          cResult[15] = mapped1;
        } else {
          class T {
            constructor(arg0) {
              obj = { platform: arg0 };
              return closure_1_6(closure_1_9, obj, arg0.type);
            }
          }
        }
        const diff = emptyStatePlatforms.length - 5;
        if (cResult[17] !== diff) {
          class T {
            constructor(arg0) {
              obj = { platform: arg0 };
              return closure_1_6(closure_1_9, obj, arg0.type);
            }
          }
          const obj5 = { count: diff };
          cResult[17] = diff;
          cResult[18] = metroRequire(OtherConnectionsCard, obj5);
          const tmp21 = metroRequire(OtherConnectionsCard, obj5);
        } else {
          class T {
            constructor(arg0) {
              obj = { platform: arg0 };
              return closure_1_6(closure_1_9, obj, arg0.type);
            }
          }
        }
        if (cResult[19] === tmp19) {
          class T {
            constructor(arg0) {
              obj = { platform: arg0 };
              return closure_1_6(closure_1_9, obj, arg0.type);
            }
          }
          if (cResult[22] === tmp4.textContainer) {
            class T {
              constructor(arg0) {
                obj = { platform: arg0 };
                return closure_1_6(closure_1_9, obj, arg0.type);
              }
            }
          }
          const obj6 = { spacing: 16, direction: "vertical", align: "center", style: textContainer, children: items };
          items = [tmp13, tmp22];
          cResult[22] = tmp4.textContainer;
          cResult[23] = tmp22;
          cResult[24] = tmp13;
          cResult[25] = metroImportDefault(Stack_Stack.Stack, obj6);
          const tmp27 = metroImportDefault(Stack_Stack.Stack, obj6);
        }
        const obj7 = { spacing: 16, justify: "center", direction: "horizontal", children: items1 };
        items1 = [tmp15, tmp19];
        cResult[19] = tmp19;
        cResult[20] = tmp15;
        cResult[21] = metroImportDefault(Stack_Stack.Stack, obj7);
        const tmp24 = metroImportDefault(Stack_Stack.Stack, obj7);
      }
      const items2 = [tmp4.container, tmp7];
      cResult[6] = tmp4.container;
      cResult[7] = tmp7;
      cResult[8] = items2;
    }
  : () => {
      let emptyStatePlatforms;
      let intl;
      let intl2;
      let items2;
      let items3;
      let items4;
      let items5;
      let items6;
      let obj4;
      const tmp = closure_8();
      let obj = emptyStatePlatforms(7025);
      emptyStatePlatforms = obj.useEmptyStatePlatforms();
      const items = [emptyStatePlatforms];
      const memo = react.useMemo(() => emptyStatePlatforms.slice(0, 3), items);
      const items1 = [emptyStatePlatforms];
      const memo1 = react.useMemo(() => emptyStatePlatforms.slice(3, 5), items1);
      const obj2 = { style: items2, children: closure_7(View, obj4) };
      items2 = [tmp.container, { paddingBottom: useSafeAreaInsetsDefault().bottom }];
      obj4 = { style: tmp.content, children: items5 };
      const obj5 = { spacing: 16, direction: "vertical", align: "center", style: tmp.textContainer, children: items3 };
      ({ paddingBottom: useSafeAreaInsetsDefault().bottom });
      const Stack = emptyStatePlatforms(5600).Stack;
      const obj6 = {
        spacing: 16,
        justify: "center",
        direction: "horizontal",
        children: memo.map((platform) => {
          const obj = { platform };
          return closure_1_6(closure_1_9, obj, platform.type);
        }),
      };
      const Stack2 = emptyStatePlatforms(5600).Stack;
      items3 = [closure_6(Stack2, obj6)];
      const obj7 = { spacing: 16, justify: "center", direction: "horizontal", children: items4 };
      const Stack3 = emptyStatePlatforms(5600).Stack;
      items4 = [
        memo1.map((platform) => {
          const obj = { platform };
          return closure_1_6(closure_1_9, obj, platform.type);
        }),
      ];
      const obj8 = { count: emptyStatePlatforms.length - 5 };
      items4[1] = closure_6(OtherConnectionsCard, obj8);
      items3[1] = closure_7(Stack3, obj7);
      items5 = [closure_7(Stack, obj5)];
      const obj9 = { spacing: 8, align: "center", style: tmp.textContainer, children: items6 };
      const Stack4 = emptyStatePlatforms(5600).Stack;
      const obj10 = {
        variant: "text-lg/bold",
        color: "mobile-text-heading-primary",
        style: tmp.text,
        children: intl.string(emptyStatePlatforms(1126).t.JlrHXb),
      };
      const Text = emptyStatePlatforms(4892).Text;
      intl = emptyStatePlatforms(1126).intl;
      items6 = [closure_6(Text, obj10)];
      const obj11 = {
        variant: "text-md/medium",
        color: "text-default",
        style: tmp.text,
        children: intl2.string(emptyStatePlatforms(1126).t.XijaQP),
      };
      const Text2 = emptyStatePlatforms(4892).Text;
      intl2 = emptyStatePlatforms(1126).intl;
      items6[1] = closure_6(Text2, obj11);
      items5[1] = closure_7(Stack4, obj9);
      return closure_6(View, obj2);
    };
let result = size.fileFinishedImporting("modules/user_settings/connections/native/ConnectionsEmptyStateUpsell.tsx");

export default tmp3;
