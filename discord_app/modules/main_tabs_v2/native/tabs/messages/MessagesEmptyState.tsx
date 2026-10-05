// === Module 15978: MessagesEmptyState ===

// Module 15978 (MessagesEmptyState)
import react2 from "react" /* 576 */;
import intl4 from "intl" /* 1126 */;
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1260 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1484 */;
import useNavigation from "useNavigation" /* 1490 */;
import Text_Text from "Text/Text" /* 4886 */;
import components_Button_Button from "components/Button/Button" /* 5594 */;
import useIsScreenLandscape from "useIsScreenLandscape" /* 5912 */;
import useTrackImpressionDefault from "useTrackImpression" /* 8422 */;
import useYouBarTotalHeight from "useYouBarTotalHeight" /* 14901 */;
import AssetRegistryDefault from "AssetRegistry" /* 15979 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let navigation;

let c9;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
({ View: hasOwnProperty, Image: metroRequire, ScrollView: metroImportDefault } = react_native);
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let c10 = 622;
let c11 = 350;
let closure_12 = createStyles.createStyles({ container: { flex: 1, justifyContent: "center" }, scrollViewContentContainer: { flexGrow: 2 }, innerContainer: { alignItems: "center", justifyContent: "center" }, imageContainer: { alignItems: "center", marginBottom: 24 }, textWrapper: { paddingHorizontal: 48 }, body: { marginBottom: 24, textAlign: "center" }, title: { textAlign: "center", fontSize: 18, marginBottom: 8 }, buttonWrapper: { paddingHorizontal: 16, paddingBottom: 16 } });
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let closure_129_0;
  let container;
  let imageContainer;
  let innerContainer;
  let items;
  let textWrapper;
  let title;
  let tmp7;
  const obj = react2;
  const cResult = obj.c(43);
  const tmp4 = closure_12();
  const width = useWindowDimensionsDefault().width;
  [tmp7, closure_129_0] = react.useState(0);
  _slicedToArray(react.useState(0), 2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function o(nativeEvent) {
      closure_1_0(nativeEvent.nativeEvent.layout.width);
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  const tmpResult = useNavigation;
  navigation = tmpResult.useNavigation();
  if (cResult[1] !== navigation) {
    class E {
      constructor() {
        navigation.navigate("friends", { screen: "add-friends", params: { sourcePage: "Messages Empty State", presentation: "card" } });
      }
    }
    cResult[1] = navigation;
    cResult[2] = E;
  } else {
    class E {
      constructor() {
        navigation.navigate("friends", { screen: "add-friends", params: { sourcePage: "Messages Empty State", presentation: "card" } });
      }
    }
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    class E {
      constructor() {
        navigation.navigate("friends", { screen: "add-friends", params: { sourcePage: "Messages Empty State", presentation: "card" } });
      }
    }
    tmp12[0] = discord_common_AnalyticsUtils.ImpressionTypes.VIEW;
    tmp12[1] = discord_common_AnalyticsUtils.ImpressionNames.MESSAGES_EMPTY_NUX;
    cResult[3] = tmp12;
  } else {
    class E {
      constructor() {
        navigation.navigate("friends", { screen: "add-friends", params: { sourcePage: "Messages Empty State", presentation: "card" } });
      }
    }
  }
  useTrackImpressionDefault(tmp12);
  if (tmp7 > 0) {
    class E {
      constructor() {
        navigation.navigate("friends", { screen: "add-friends", params: { sourcePage: "Messages Empty State", presentation: "card" } });
      }
    }
  }
  const result = 0.9 * width;
  const tmpResult3 = useIsScreenLandscape;
  const isScreenLandscape = tmpResult3.useIsScreenLandscape();
  const tmpResult4 = useYouBarTotalHeight;
  const youBarTotalHeight = tmpResult4.useYouBarTotalHeight();
  if (cResult[4] === isScreenLandscape) {
    class E {
      constructor() {
        navigation.navigate("friends", { screen: "add-friends", params: { sourcePage: "Messages Empty State", presentation: "card" } });
      }
    }
    if (cResult[7] === tmp4.scrollViewContentContainer) {
      let result1;
      class E {
        constructor() {
          navigation.navigate("friends", { screen: "add-friends", params: { sourcePage: "Messages Empty State", presentation: "card" } });
        }
      }
      ({ container, innerContainer, imageContainer } = tmp4);
      if (result < c10) {
        class E {
          constructor() {
            navigation.navigate("friends", { screen: "add-friends", params: { sourcePage: "Messages Empty State", presentation: "card" } });
          }
        }
        result1 = c11 * (result / c10);
      } else {
        class E {
          constructor() {
            navigation.navigate("friends", { screen: "add-friends", params: { sourcePage: "Messages Empty State", presentation: "card" } });
          }
        }
      }
      const _Math = Math;
      const bound = Math.min(result, c10);
      if (cResult[10] === result1) {
        class E {
          constructor() {
            navigation.navigate("friends", { screen: "add-friends", params: { sourcePage: "Messages Empty State", presentation: "card" } });
          }
        }
        if (cResult[13] === tmp4.imageContainer) {
          let tmp32;
          let tmp36;
          class E {
            constructor() {
              navigation.navigate("friends", { screen: "add-friends", params: { sourcePage: "Messages Empty State", presentation: "card" } });
            }
          }
          const _Symbol = Symbol;
          ({ textWrapper, title } = tmp4);
          if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
            class E {
              constructor() {
                navigation.navigate("friends", { screen: "add-friends", params: { sourcePage: "Messages Empty State", presentation: "card" } });
              }
            }
            const stringResult = obj8.string(intl4.t["8JZof8"]);
            cResult[16] = stringResult;
            tmp32 = stringResult;
          } else {
            class E {
              constructor() {
                navigation.navigate("friends", { screen: "add-friends", params: { sourcePage: "Messages Empty State", presentation: "card" } });
              }
            }
          }
          if (cResult[17] !== tmp4.title) {
            class E {
              constructor() {
                navigation.navigate("friends", { screen: "add-friends", params: { sourcePage: "Messages Empty State", presentation: "card" } });
              }
            }
            const obj2 = { color: "mobile-text-heading-primary", variant: "heading-md/bold", style: title, children: tmp32 };
            cResult[17] = tmp4.title;
            cResult[18] = metroImportAll(Text_Text.Heading, obj2);
            const tmp35 = metroImportAll(Text_Text.Heading, obj2);
          } else {
            class E {
              constructor() {
                navigation.navigate("friends", { screen: "add-friends", params: { sourcePage: "Messages Empty State", presentation: "card" } });
              }
            }
          }
          const _Symbol2 = Symbol;
          const body = tmp4.body;
          if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
            class E {
              constructor() {
                navigation.navigate("friends", { screen: "add-friends", params: { sourcePage: "Messages Empty State", presentation: "card" } });
              }
            }
            const stringResult1 = obj10.string(intl4.t["qm+H7x"]);
            cResult[19] = stringResult1;
            tmp36 = stringResult1;
          } else {
            class E {
              constructor() {
                navigation.navigate("friends", { screen: "add-friends", params: { sourcePage: "Messages Empty State", presentation: "card" } });
              }
            }
          }
          if (cResult[20] !== tmp4.body) {
            class E {
              constructor() {
                navigation.navigate("friends", { screen: "add-friends", params: { sourcePage: "Messages Empty State", presentation: "card" } });
              }
            }
            const obj3 = { color: "text-default", variant: "text-md/medium", style: body, children: tmp36 };
            cResult[20] = tmp4.body;
            cResult[21] = metroImportAll(Text_Text.Text, obj3);
            const tmp39 = metroImportAll(Text_Text.Text, obj3);
          } else {
            class E {
              constructor() {
                navigation.navigate("friends", { screen: "add-friends", params: { sourcePage: "Messages Empty State", presentation: "card" } });
              }
            }
          }
          if (cResult[22] === tmp4.textWrapper) {
            class E {
              constructor() {
                navigation.navigate("friends", { screen: "add-friends", params: { sourcePage: "Messages Empty State", presentation: "card" } });
              }
            }
          }
          const obj4 = { style: textWrapper, children: items };
          items = [tmp34, tmp38];
          cResult[22] = tmp4.textWrapper;
          cResult[23] = tmp34;
          cResult[24] = tmp38;
          cResult[25] = React4(hasOwnProperty, obj4);
          const tmp43 = React4(hasOwnProperty, obj4);
        }
        const obj5 = { style: imageContainer, children: tmp24 };
        cResult[13] = tmp4.imageContainer;
        cResult[14] = tmp24;
        cResult[15] = metroImportAll(hasOwnProperty, obj5);
        const tmp31 = metroImportAll(hasOwnProperty, obj5);
      }
      const obj6 = { resizeMode: "contain", source: AssetRegistryDefault, style: size };
      size = { height: result1, width: bound };
      cResult[10] = result1;
      cResult[11] = bound;
      cResult[12] = metroImportAll(metroRequire, obj6);
      const tmp27 = metroImportAll(metroRequire, obj6);
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
        navigation.navigate("friends", { screen: "add-friends", params: { sourcePage: "Messages Empty State", presentation: "card" } });
      }
    }
    tmp19[0] = youBarTotalHeight;
    tmp18 = tmp19;
  }
  cResult[4] = isScreenLandscape;
  cResult[5] = youBarTotalHeight;
  cResult[6] = tmp18;
}) : (() => {
  let Button;
  let closure_129_0;
  let intl;
  let intl2;
  let intl3;
  let items2;
  let items3;
  let items4;
  let obj13;
  let obj5;
  let obj8;
  let result1;
  let tmp5;
  const tmp = closure_12();
  let width = useWindowDimensionsDefault().width;
  [tmp5, closure_129_0] = react.useState(0);
  _slicedToArray(react.useState(0), 2);
  const callback = react.useCallback((nativeEvent) => {
    closure_1_0(nativeEvent.nativeEvent.layout.width);
  }, []);
  const obj = useNavigation;
  navigation = obj.useNavigation();
  const items = [navigation];
  const callback1 = react.useCallback(() => {
    navigation.navigate("friends", { screen: "add-friends", params: { sourcePage: "Messages Empty State", presentation: "card" } });
  }, items);
  const obj2 = { type: discord_common_AnalyticsUtils.ImpressionTypes.VIEW, name: discord_common_AnalyticsUtils.ImpressionNames.MESSAGES_EMPTY_NUX };
  const tmp10 = useTrackImpressionDefault;
  tmp10(obj2);
  if (tmp5 > 0) {
    width = tmp5;
  }
  const result = 0.9 * width;
  const tmp7Result = useIsScreenLandscape;
  const isScreenLandscape = tmp7Result.useIsScreenLandscape();
  useYouBarTotalHeight;
  const items1 = [tmp.scrollViewContentContainer, ];
  let tmp18;
  if (isScreenLandscape) {
    tmp18 = { paddingBottom: tmp15 };
    const obj3 = { paddingBottom: tmp15 };
  }
  items1[1] = tmp18;
  const obj4 = { alwaysBounceVertical: false, bounces: false, contentContainerStyle: items1, children: React4(hasOwnProperty, obj5) };
  obj5 = { style: tmp.container, onLayout: callback, children: items4 };
  const obj6 = { style: tmp.innerContainer, children: items2 };
  const obj7 = { style: tmp.imageContainer, children: metroImportAll(metroRequire, obj8) };
  obj8 = { resizeMode: "contain", source: AssetRegistryDefault, style: size };
  if (result < c10) {
    result1 = c11 * (result / c10);
  } else {
    result1 = c11;
  }
  size = { height: result1, width: Math.min(result, c10) };
  items2 = [metroImportAll(hasOwnProperty, obj7), ];
  const obj9 = { style: tmp.textWrapper, children: items3 };
  const obj10 = { color: "mobile-text-heading-primary", variant: "heading-md/bold", style: tmp.title, children: intl.string(intl4.t["8JZof8"]) };
  const Heading = Text_Text.Heading;
  intl = intl4.intl;
  items3 = [metroImportAll(Heading, obj10), ];
  const obj11 = { color: "text-default", variant: "text-md/medium", style: tmp.body, children: intl2.string(intl4.t["qm+H7x"]) };
  const Text = Text_Text.Text;
  intl2 = intl4.intl;
  items3[1] = metroImportAll(Text, obj11);
  items2[1] = React4(hasOwnProperty, obj9);
  items4 = [React4(hasOwnProperty, obj6), ];
  const obj12 = { style: tmp.buttonWrapper, children: metroImportAll(Button, obj13) };
  obj13 = { text: intl3.string(intl4.t.zIJnA6), onPress: callback1, size: "lg" };
  Button = components_Button_Button.Button;
  intl3 = intl4.intl;
  items4[1] = metroImportAll(hasOwnProperty, obj12);
  return metroImportAll(metroImportDefault, obj4);
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/MessagesEmptyState.tsx");

export default tmp4;