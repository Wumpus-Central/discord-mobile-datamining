// discord_app/modules/user_settings/connections/native/ConnectionsEmptyStateUpsell.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import AvatarUtils from "../../../../utils/AvatarUtils.tsx";
import useSafeAreaInsetsDefault from "../../../safe_area/useSafeAreaInsets.native.tsx";
import shared from "../../../../design/shared.tsx";
import useThemeDefault from "../../../../hooks/useTheme.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import Stack_Stack from "../../../../design/components/Stack/native/Stack.native.tsx";
import Card from "../../../../design/components/Card/native/Card.native.tsx";
import ConnectionsHooks from "../../../connections/ConnectionsHooks.tsx";
import authorizeConnectionDefault from "../../../connections/authorizeConnection.native.tsx";
import ConnectionsTracking from "ConnectionsTracking.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
function OtherConnectionsCard(count) {
  const callback = noop.useCallback(() => {
    require("ActionSheetActionCreators").openLazy(require("asyncRequireImpl")(paths[17], paths.paths), "AddConnection");
  }, []);
  const obj = { onPress: callback, style: closure_8().card, border: "strong", children: null };
  const tmp = closure_8();
  obj.children = timestampProducer(Text_Text.Text, {
    variant: "text-md/medium",
    color: "interactive-text-default",
    children: "+" + count.count,
  });
  return timestampProducer(Card.Card, obj);
}
const View = fn(17).View;
const AnalyticsLocations = fn(1085).AnalyticsLocations;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4896);
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
  return obj;
});
let ReactCompilerGating = fn(558);
let closure_9 = ReactCompilerGating.isReactCompilerEnabled()
  ? (platform) => {
      const cResult = platform(576).c(27);
      platform = platform.platform;
      const tmp4 = closure_8();
      const tmp5 = useThemeDefault();
      if (cResult[0] !== platform.type) {
        const fn = function c() {
          authorizeConnectionDefault({
            platformType: platform.type,
            location: AnalyticsLocations.CONNECTIONS_EMPTY_STATE,
          });
          const result = ConnectionsTracking.trackEmptyStateCardClicked({ platformType: platform.type });
        };
        cResult[0] = platform.type;
        cResult[1] = fn;
        let tmp6 = fn;
      } else {
        tmp6 = cResult[1];
      }
      if (cResult[2] !== platform.type) {
        const connectionBackgroundColor = tmp(14785).getConnectionBackgroundColor(platform.type);
        cResult[2] = platform.type;
        cResult[3] = connectionBackgroundColor;
        let tmp7 = connectionBackgroundColor;
        const tmpResult = tmp(14785);
      } else {
        tmp7 = cResult[3];
      }
      if (cResult[4] === tmp7) {
        if (cResult[5] === platform.icon.darkPNG) {
          if (cResult[6] === platform.icon.lightPNG) {
            if (cResult[7] === platform.icon.whitePNG) {
              if (cResult[8] === tmp5) {
                if (cResult[10] === tmp7) {
                  if (cResult[11] === platform.color) {
                    let tmp12 = cResult[12];
                  }
                  if (cResult[13] === tmp4.iconContainer) {
                    if (cResult[14] === tmp12) {
                      let tmp15 = cResult[15];
                    }
                    if (cResult[16] === platform.name) {
                      if (cResult[17] === tmp9) {
                        if (cResult[18] === tmp4.icon) {
                          let tmp16 = cResult[19];
                        }
                        if (cResult[20] === tmp15) {
                          if (cResult[21] === tmp16) {
                            let tmp19 = cResult[22];
                          }
                          if (cResult[23] === tmp6) {
                            if (cResult[24] === tmp4.card) {
                              if (cResult[25] === tmp19) {
                                let tmp23 = cResult[26];
                              }
                              return tmp23;
                            }
                          }
                          const obj2 = { onPress: tmp6, style: tmp4.card, border: "strong", children: tmp19 };
                          const tmp25 = closure_6(tmp(6002).Card, obj2);
                          cResult[23] = tmp6;
                          cResult[24] = tmp4.card;
                          cResult[25] = tmp19;
                          cResult[26] = tmp25;
                          tmp23 = tmp25;
                        }
                        const obj3 = { style: tmp15, children: tmp16 };
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
                    const tmp18 = closure_6(tmp(1188).Icon, obj4);
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
                  const obj5 = { backgroundColor: tmp7 };
                  tmp14 = obj5;
                }
                cResult[10] = tmp7;
                cResult[11] = platform.color;
                cResult[12] = tmp14;
                tmp12 = tmp14;
              }
            }
          }
        }
      }
      const obj = platform(576);
      let whitePNG = platform(1402).makeSource;
      if (null != tmp7) {
        let whitePNG2 = platform.icon.whitePNG;
      } else {
        const icon = platform.icon;
        whitePNG2 = tmp(4735).isThemeDark(tmp5) ? icon.darkPNG : icon.lightPNG;
        const tmpResult4 = tmp(4735);
      }
      const tmpResult3 = platform(1402);
      cResult[4] = tmp7;
      cResult[5] = platform.icon.darkPNG;
      cResult[6] = platform.icon.lightPNG;
      whitePNG = platform.icon.whitePNG;
      cResult[7] = whitePNG;
      cResult[8] = tmp5;
      cResult[9] = whitePNG(whitePNG2);
      const whitePNGResult = whitePNG(whitePNG2);
    }
  : (platform) => {
      platform = platform.platform;
      importDefault = undefined;
      let connectionBackgroundColor;
      const tmp = closure_8();
      const tmp3 = require("useTheme")();
      importDefault = tmp3;
      const items = [platform];
      const callback = noop.useCallback(() => {
        authorizeConnectionDefault({
          platformType: platform.type,
          location: AnalyticsLocations.CONNECTIONS_EMPTY_STATE,
        });
        const result = ConnectionsTracking.trackEmptyStateCardClicked({ platformType: platform.type });
      }, items);
      connectionBackgroundColor = platform(connectionBackgroundColor[11]).getConnectionBackgroundColor(platform.type);
      const items1 = [
        connectionBackgroundColor,
        platform.icon.darkPNG,
        platform.icon.lightPNG,
        platform.icon.whitePNG,
        tmp3,
      ];
      const memo = noop.useMemo(() => {
        if (null != connectionBackgroundColor) {
          let whitePNG = platform.icon.whitePNG;
        } else {
          const icon = platform.icon;
          whitePNG = shared.isThemeDark(closure_1) ? icon.darkPNG : icon.lightPNG;
          const tmpResult = shared;
        }
        return AvatarUtils.makeSource(whitePNG);
      }, items1);
      const obj2 = { onPress: callback, style: tmp.card, border: "strong", children: null };
      const items2 = [tmp.iconContainer];
      let tmp10 = null != platform.color;
      if (tmp10) {
        const obj3 = { backgroundColor: connectionBackgroundColor };
        tmp10 = obj3;
      }
      const obj4 = {
        style: items2,
        children: closure_6(platform(connectionBackgroundColor[14]).Icon, {
          style: tmp.icon,
          source: memo,
          resizeMode: "contain",
          disableColor: true,
          accessibilityLabel: platform.name,
        }),
      };
      items2[1] = tmp10;
      obj2.children = closure_6(View, obj4);
      return closure_6(platform(connectionBackgroundColor[15]).Card, obj2);
    };
ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/connections/native/ConnectionsEmptyStateUpsell.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = c.c(43);
      const tmp4 = closure_8();
      const emptyStatePlatforms = ConnectionsHooks.useEmptyStatePlatforms();
      if (cResult[0] !== emptyStatePlatforms) {
        const substr = emptyStatePlatforms.slice(0, 3);
        cResult[0] = emptyStatePlatforms;
        cResult[1] = substr;
        let arr2 = substr;
      } else {
        arr2 = cResult[1];
      }
      if (cResult[2] !== emptyStatePlatforms) {
        const substr1 = emptyStatePlatforms.slice(3, 5);
        cResult[2] = emptyStatePlatforms;
        cResult[3] = substr1;
        let arr3 = substr1;
      } else {
        arr3 = cResult[3];
      }
      const bottom = useSafeAreaInsetsDefault().bottom;
      if (cResult[4] !== bottom) {
        const obj3 = { paddingBottom: bottom };
        cResult[4] = bottom;
        cResult[5] = obj3;
        let tmp7 = obj3;
      } else {
        tmp7 = cResult[5];
      }
      if (cResult[6] === tmp4.container) {
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
          if (cResult[12] !== tmp10) {
            class P {
              constructor(arg0) {
                obj = { platform: arg0 };
                return closure_1_6(closure_1_9, obj, arg0.type);
              }
            }
            const obj4 = { spacing: 16, justify: "center", direction: "horizontal", children: tmp10 };
            const tmp16 = timestampProducer(Stack_Stack.Stack, obj4);
            cResult[12] = tmp10;
            cResult[13] = tmp16;
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
            const diff = emptyStatePlatforms.length - 5;
            if (cResult[17] !== diff) {
              class T {
                constructor(arg0) {
                  obj = { platform: arg0 };
                  return closure_1_6(closure_1_9, obj, arg0.type);
                }
              }
              const obj5 = { count: diff };
              const tmp24 = timestampProducer(OtherConnectionsCard, obj5);
              cResult[17] = diff;
              cResult[18] = tmp24;
            } else {
              class T {
                constructor(arg0) {
                  obj = { platform: arg0 };
                  return closure_1_6(closure_1_9, obj, arg0.type);
                }
              }
            }
            if (cResult[19] === tmp22) {
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
              const obj6 = { spacing: 16, direction: "vertical", align: "center", style: tmp9, children: null };
              const items = [tmp15, tmp25];
              obj6.children = items;
              const tmp30 = React5(Stack_Stack.Stack, obj6);
              cResult[22] = tmp4.textContainer;
              cResult[23] = tmp25;
              cResult[24] = tmp15;
              cResult[25] = tmp30;
            }
            const obj7 = { spacing: 16, justify: "center", direction: "horizontal", children: null };
            const items1 = [tmp17, tmp22];
            obj7.children = items1;
            const tmp27 = React5(Stack_Stack.Stack, obj7);
            cResult[19] = tmp22;
            cResult[20] = tmp17;
            cResult[21] = tmp27;
          }
        }
      }
      const items2 = [tmp4.container, tmp7];
      cResult[6] = tmp4.container;
      cResult[7] = tmp7;
      cResult[8] = items2;
    }
  : () => {
      const tmp = closure_8();
      emptyStatePlatforms = emptyStatePlatforms(7025).useEmptyStatePlatforms();
      const items = [emptyStatePlatforms];
      const memo = noop.useMemo(() => emptyStatePlatforms.slice(0, 3), items);
      const items1 = [emptyStatePlatforms];
      const memo1 = noop.useMemo(() => emptyStatePlatforms.slice(3, 5), items1);
      const obj2 = { style: null, children: null };
      const items2 = [tmp.container];
      const obj = emptyStatePlatforms(7025);
      items2[1] = { paddingBottom: useSafeAreaInsetsDefault().bottom };
      obj2.style = items2;
      const obj4 = { style: tmp.content, children: null };
      const obj5 = { spacing: 16, direction: "vertical", align: "center", style: tmp.textContainer, children: null };
      const obj3 = { paddingBottom: useSafeAreaInsetsDefault().bottom };
      const items3 = [
        closure_6(emptyStatePlatforms(5600).Stack, {
          spacing: 16,
          justify: "center",
          direction: "horizontal",
          children: memo.map((platform) => closure_1_6(closure_1_9, { platform }, platform.type)),
        }),
      ];
      const obj7 = { spacing: 16, justify: "center", direction: "horizontal", children: null };
      const items4 = [
        memo1.map((platform) => closure_1_6(closure_1_9, { platform }, platform.type)),
        closure_6(OtherConnectionsCard, { count: emptyStatePlatforms.length - 5 }),
      ];
      obj7.children = items4;
      items3[1] = closure_7(emptyStatePlatforms(5600).Stack, obj7);
      obj5.children = items3;
      const items5 = [closure_7(emptyStatePlatforms(5600).Stack, obj5)];
      const obj9 = { spacing: 8, align: "center", style: tmp.textContainer, children: null };
      const obj10 = { variant: "text-lg/bold", color: "mobile-text-heading-primary", style: tmp.text, children: null };
      const intl = emptyStatePlatforms(1126).intl;
      obj10.children = intl.string(emptyStatePlatforms(1126).t.JlrHXb);
      const items6 = [closure_6(emptyStatePlatforms(4892).Text, obj10)];
      const obj11 = { variant: "text-md/medium", color: "text-default", style: tmp.text, children: null };
      const intl2 = emptyStatePlatforms(1126).intl;
      obj11.children = intl2.string(emptyStatePlatforms(1126).t.XijaQP);
      items6[1] = closure_6(emptyStatePlatforms(4892).Text, obj11);
      obj9.children = items6;
      items5[1] = closure_7(emptyStatePlatforms(5600).Stack, obj9);
      obj4.children = items5;
      obj2.children = closure_7(View, obj4);
      return closure_6(View, obj2);
    };
