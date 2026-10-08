// discord_app/modules/main_tabs_v2/native/tabs/messages/MessagesEmptyState.tsx
import c from "../../../../../../_runtime/00576_c.js";
import util from "../../../../../intl/index.native.tsx";
import discord_common_AnalyticsUtils from "../../../../../../discord_common/js/packages/analytics-utils/AnalyticsUtils.tsx";
import useWindowDimensionsDefault from "../../../../screen/useWindowDimensions.native.tsx";
import useNavigation from "../../../../../design/components/Navigator/native/useNavigation.native.tsx";
import Text_Text from "../../../../../design/components/Text/native/Text.tsx";
import components_Button_Button from "../../../../../design/components/Button/native/Button.native.tsx";
import useIsScreenLandscape from "../../../../screen/useIsScreenLandscape.native.tsx";
import useTrackImpressionDefault from "../../../../app_analytics/useTrackImpression.tsx";
import useYouBarTotalHeight from "../../you_bar/hooks/useYouBarTotalHeight.tsx";
import _modDef16278 from "../../../../../../_runtime/metro/16278__.js";
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, Image: metroRequire, ScrollView: closure_7 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
let c10 = 622;
let c11 = 350;
const createStyles = fn(5090);
let closure_12 = createStyles.createStyles({
  container: { flex: 1, justifyContent: "center" },
  scrollViewContentContainer: { flexGrow: 2 },
  innerContainer: { alignItems: "center", justifyContent: "center" },
  imageContainer: { alignItems: "center", marginBottom: 24 },
  textWrapper: { paddingHorizontal: 48 },
  body: { marginBottom: 24, textAlign: "center" },
  title: { textAlign: "center", fontSize: 18, marginBottom: 8 },
  buttonWrapper: { paddingHorizontal: 16, paddingBottom: 16 },
});
const ReactCompilerGating = fn(558);
let size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/MessagesEmptyState.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function MessagesEmptyState() {
      const cResult = c.c(43);
      const tmp4 = closure_12();
      [tmp7, require] = noop.useState(0);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function o(nativeEvent) {
          require(nativeEvent.nativeEvent.layout.width);
        };
        cResult[0] = fn;
        let first = fn;
      } else {
        first = cResult[0];
      }
      const tmp6 = _slicedToArray(noop.useState(0), 2);
      const navigation = useNavigation.useNavigation();
      if (cResult[1] !== navigation) {
        class E {
          constructor() {
            navigateResult = closure_1.navigate("friends", {
              screen: "add-friends",
              params: { sourcePage: "Messages Empty State", presentation: "card" },
            });
            return;
          }
        }
        cResult[1] = navigation;
        cResult[2] = E;
      } else {
        class E {
          constructor() {
            navigateResult = closure_1.navigate("friends", {
              screen: "add-friends",
              params: { sourcePage: "Messages Empty State", presentation: "card" },
            });
            return;
          }
        }
      }
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        class E {
          constructor() {
            navigateResult = closure_1.navigate("friends", {
              screen: "add-friends",
              params: { sourcePage: "Messages Empty State", presentation: "card" },
            });
            return;
          }
        }
        tmp12[0] = discord_common_AnalyticsUtils.ImpressionTypes.VIEW;
        tmp12[1] = discord_common_AnalyticsUtils.ImpressionNames.MESSAGES_EMPTY_NUX;
        cResult[3] = tmp12;
      } else {
        class E {
          constructor() {
            navigateResult = closure_1.navigate("friends", {
              screen: "add-friends",
              params: { sourcePage: "Messages Empty State", presentation: "card" },
            });
            return;
          }
        }
      }
      useTrackImpressionDefault(tmp12);
      if (tmp7 > 0) {
        class E {
          constructor() {
            navigateResult = closure_1.navigate("friends", {
              screen: "add-friends",
              params: { sourcePage: "Messages Empty State", presentation: "card" },
            });
            return;
          }
        }
      }
      const result = 0.9 * useWindowDimensionsDefault().width;
      const tmpResult = useNavigation;
      const isScreenLandscape = useIsScreenLandscape.useIsScreenLandscape();
      const tmpResult3 = useIsScreenLandscape;
      const youBarTotalHeight = useYouBarTotalHeight.useYouBarTotalHeight();
      if (cResult[4] === isScreenLandscape) {
        class E {
          constructor() {
            navigateResult = closure_1.navigate("friends", {
              screen: "add-friends",
              params: { sourcePage: "Messages Empty State", presentation: "card" },
            });
            return;
          }
        }
        if (cResult[7] === tmp4.scrollViewContentContainer) {
          class E {
            constructor() {
              navigateResult = closure_1.navigate("friends", {
                screen: "add-friends",
                params: { sourcePage: "Messages Empty State", presentation: "card" },
              });
              return;
            }
          }
          ({ container, innerContainer, imageContainer } = tmp4);
          if (result < c10) {
            class E {
              constructor() {
                navigateResult = closure_1.navigate("friends", {
                  screen: "add-friends",
                  params: { sourcePage: "Messages Empty State", presentation: "card" },
                });
                return;
              }
            }
            const result1 = c11 * (result / c10);
          } else {
            class E {
              constructor() {
                navigateResult = closure_1.navigate("friends", {
                  screen: "add-friends",
                  params: { sourcePage: "Messages Empty State", presentation: "card" },
                });
                return;
              }
            }
          }
          const _Math = Math;
          const bound = Math.min(result, c10);
          if (cResult[10] === result1) {
            class E {
              constructor() {
                navigateResult = closure_1.navigate("friends", {
                  screen: "add-friends",
                  params: { sourcePage: "Messages Empty State", presentation: "card" },
                });
                return;
              }
            }
            if (cResult[13] === tmp4.imageContainer) {
              class E {
                constructor() {
                  navigateResult = closure_1.navigate("friends", {
                    screen: "add-friends",
                    params: { sourcePage: "Messages Empty State", presentation: "card" },
                  });
                  return;
                }
              }
              const _Symbol = Symbol;
              ({ textWrapper, title } = tmp4);
              if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
                class E {
                  constructor() {
                    navigateResult = closure_1.navigate("friends", {
                      screen: "add-friends",
                      params: { sourcePage: "Messages Empty State", presentation: "card" },
                    });
                    return;
                  }
                }
                const stringResult = obj8.string(util.t["8JZof8"]);
                cResult[16] = stringResult;
                const tmp32 = stringResult;
              } else {
                class E {
                  constructor() {
                    navigateResult = closure_1.navigate("friends", {
                      screen: "add-friends",
                      params: { sourcePage: "Messages Empty State", presentation: "card" },
                    });
                    return;
                  }
                }
              }
              if (cResult[17] !== tmp4.title) {
                class E {
                  constructor() {
                    navigateResult = closure_1.navigate("friends", {
                      screen: "add-friends",
                      params: { sourcePage: "Messages Empty State", presentation: "card" },
                    });
                    return;
                  }
                }
                const obj2 = {
                  color: "mobile-text-heading-primary",
                  variant: "heading-md/bold",
                  style: title,
                  children: tmp32,
                };
                const tmp35 = closure_1_8(Text_Text.Heading, obj2);
                cResult[17] = tmp4.title;
                cResult[18] = tmp35;
              } else {
                class E {
                  constructor() {
                    navigateResult = closure_1.navigate("friends", {
                      screen: "add-friends",
                      params: { sourcePage: "Messages Empty State", presentation: "card" },
                    });
                    return;
                  }
                }
              }
              const _Symbol2 = Symbol;
              if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
                class E {
                  constructor() {
                    navigateResult = closure_1.navigate("friends", {
                      screen: "add-friends",
                      params: { sourcePage: "Messages Empty State", presentation: "card" },
                    });
                    return;
                  }
                }
                const stringResult1 = obj10.string(util.t["qm+H7x"]);
                cResult[19] = stringResult1;
                const tmp36 = stringResult1;
              } else {
                class E {
                  constructor() {
                    navigateResult = closure_1.navigate("friends", {
                      screen: "add-friends",
                      params: { sourcePage: "Messages Empty State", presentation: "card" },
                    });
                    return;
                  }
                }
              }
              if (cResult[20] !== tmp4.body) {
                class E {
                  constructor() {
                    navigateResult = closure_1.navigate("friends", {
                      screen: "add-friends",
                      params: { sourcePage: "Messages Empty State", presentation: "card" },
                    });
                    return;
                  }
                }
                const obj3 = { color: "text-default", variant: "text-md/medium", style: tmp4.body, children: tmp36 };
                const tmp39 = closure_1_8(Text_Text.Text, obj3);
                cResult[20] = tmp4.body;
                cResult[21] = tmp39;
              } else {
                class E {
                  constructor() {
                    navigateResult = closure_1.navigate("friends", {
                      screen: "add-friends",
                      params: { sourcePage: "Messages Empty State", presentation: "card" },
                    });
                    return;
                  }
                }
              }
              if (cResult[22] === tmp4.textWrapper) {
                class E {
                  constructor() {
                    navigateResult = closure_1.navigate("friends", {
                      screen: "add-friends",
                      params: { sourcePage: "Messages Empty State", presentation: "card" },
                    });
                    return;
                  }
                }
              }
              const obj4 = { style: textWrapper, children: null };
              const items = [tmp34, tmp38];
              obj4.children = items;
              const tmp43 = options(hasOwnProperty, obj4);
              cResult[22] = tmp4.textWrapper;
              cResult[23] = tmp34;
              cResult[24] = tmp38;
              cResult[25] = tmp43;
            }
            const obj5 = { style: imageContainer, children: tmp24 };
            const tmp31 = closure_1_8(hasOwnProperty, obj5);
            cResult[13] = tmp4.imageContainer;
            cResult[14] = tmp24;
            cResult[15] = tmp31;
          }
          const obj6 = { resizeMode: "contain", source: _modDef16278, style: null };
          const size = { height: result1, width: bound };
          obj6.style = size;
          const tmp27 = closure_1_8(timestampProducer, obj6);
          cResult[10] = result1;
          cResult[11] = bound;
          cResult[12] = tmp27;
        }
        const items1 = [tmp4.scrollViewContentContainer, tmp17];
        cResult[7] = tmp4.scrollViewContentContainer;
        cResult[8] = tmp17;
        cResult[9] = items1;
      }
      let tmp18;
      if (isScreenLandscape) {
        class E {
          constructor() {
            navigateResult = closure_1.navigate("friends", {
              screen: "add-friends",
              params: { sourcePage: "Messages Empty State", presentation: "card" },
            });
            return;
          }
        }
        tmp19[0] = youBarTotalHeight;
        tmp18 = tmp19;
      }
      cResult[4] = isScreenLandscape;
      cResult[5] = youBarTotalHeight;
      cResult[6] = tmp18;
      const tmpResult4 = useYouBarTotalHeight;
    }
  : function MessagesEmptyState() {
      const tmp = closure_12();
      let width = useWindowDimensionsDefault().width;
      [tmp5, require] = noop.useState(0);
      const callback = noop.useCallback((nativeEvent) => {
        require(nativeEvent.nativeEvent.layout.width);
      }, []);
      const tmp4 = _slicedToArray(noop.useState(0), 2);
      const navigation = useNavigation.useNavigation();
      const items = [navigation];
      const callback1 = noop.useCallback(() => {
        navigation.navigate("friends", {
          screen: "add-friends",
          params: { sourcePage: "Messages Empty State", presentation: "card" },
        });
      }, items);
      const obj2 = { type: null, name: null };
      obj2.type = discord_common_AnalyticsUtils.ImpressionTypes.VIEW;
      obj2.name = discord_common_AnalyticsUtils.ImpressionNames.MESSAGES_EMPTY_NUX;
      useTrackImpressionDefault(obj2);
      if (tmp5 > 0) {
        width = tmp5;
      }
      const result = 0.9 * width;
      const isScreenLandscape = useIsScreenLandscape.useIsScreenLandscape();
      useYouBarTotalHeight;
      const items1 = [tmp.scrollViewContentContainer];
      let tmp18;
      if (isScreenLandscape) {
        const obj3 = { paddingBottom: tmp15 };
        tmp18 = obj3;
      }
      const obj4 = { alwaysBounceVertical: false, bounces: false, contentContainerStyle: items1, children: null };
      items1[1] = tmp18;
      const obj5 = { style: tmp.container, onLayout: callback, children: null };
      const obj6 = { style: tmp.innerContainer, children: null };
      const obj7 = { style: tmp.imageContainer, children: null };
      const obj8 = { resizeMode: "contain", source: _modDef16278, style: null };
      if (result < c10) {
        let result1 = c11 * (result / c10);
      } else {
        result1 = c11;
      }
      const size = { height: result1, width: Math.min(result, c10) };
      obj8.style = size;
      obj7.children = closure_1_8(timestampProducer, obj8);
      const items2 = [closure_1_8(hasOwnProperty, obj7)];
      const obj9 = { style: tmp.textWrapper, children: null };
      const obj10 = {
        color: "mobile-text-heading-primary",
        variant: "heading-md/bold",
        style: tmp.title,
        children: null,
      };
      const intl = util.intl;
      obj10.children = intl.string(util.t["8JZof8"]);
      const items3 = [closure_1_8(Text_Text.Heading, obj10)];
      const obj11 = { color: "text-default", variant: "text-md/medium", style: tmp.body, children: null };
      const intl2 = util.intl;
      obj11.children = intl2.string(util.t["qm+H7x"]);
      items3[1] = closure_1_8(Text_Text.Text, obj11);
      obj9.children = items3;
      items2[1] = options(hasOwnProperty, obj9);
      obj6.children = items2;
      const items4 = [options(hasOwnProperty, obj6)];
      const obj12 = { style: tmp.buttonWrapper, children: null };
      const obj13 = { text: null, onPress: null, size: "lg" };
      const intl3 = util.intl;
      obj13.text = intl3.string(util.t.zIJnA6);
      obj13.onPress = callback1;
      obj12.children = closure_1_8(components_Button_Button.Button, obj13);
      items4[1] = closure_1_8(hasOwnProperty, obj12);
      obj5.children = items4;
      obj4.children = options(hasOwnProperty, obj5);
      return closure_1_8(React5, obj4);
    };
