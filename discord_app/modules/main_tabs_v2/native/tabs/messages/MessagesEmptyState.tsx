// discord_app/modules/main_tabs_v2/native/tabs/messages/MessagesEmptyState.tsx
import c from "../../../../../../_runtime/00576_c.js";
import util from "../../../../../intl/index.native.tsx";
import discord_common_AnalyticsUtils from "../../../../../../discord_common/js/packages/analytics-utils/AnalyticsUtils.tsx";
import useWindowDimensionsDefault from "../../../../screen/useWindowDimensions.native.tsx";
import useNavigation from "../../../../../design/components/Navigator/native/useNavigation.native.tsx";
import Text_Text from "../../../../../design/components/Text/native/Text.tsx";
import components_Button_Button from "../../../../../design/components/Button/native/Button.native.tsx";
import FastImageDefault from "../../../../../components_native/common/FastImage.tsx";
import useIsScreenLandscape from "../../../../screen/useIsScreenLandscape.native.tsx";
import useTrackImpressionDefault from "../../../../app_analytics/useTrackImpression.tsx";
import useYouBarTotalHeight from "../../you_bar/hooks/useYouBarTotalHeight.tsx";
import _modDef16397 from "../../../../../../_runtime/metro/16397__.js";
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, ScrollView: metroRequire } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
let c9 = 622;
let c10 = 350;
const createStyles = fn(5091);
let closure_11 = createStyles.createStyles({
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
      const tmp4 = closure_11();
      let width = useWindowDimensionsDefault().width;
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
        const fn2 = function w() {
          navigation.navigate("friends", {
            screen: "add-friends",
            params: { sourcePage: "Messages Empty State", presentation: "card" },
          });
        };
        cResult[1] = navigation;
        cResult[2] = fn2;
        let tmp10 = fn2;
      } else {
        tmp10 = cResult[2];
      }
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = {
          type: discord_common_AnalyticsUtils.ImpressionTypes.VIEW,
          name: discord_common_AnalyticsUtils.ImpressionNames.MESSAGES_EMPTY_NUX,
        };
        cResult[3] = obj2;
        let tmp11 = obj2;
      } else {
        tmp11 = cResult[3];
      }
      useTrackImpressionDefault(tmp11);
      if (tmp7 > 0) {
        width = tmp7;
      }
      const result = 0.9 * width;
      const tmpResult = useNavigation;
      const isScreenLandscape = useIsScreenLandscape.useIsScreenLandscape();
      const tmpResult3 = useIsScreenLandscape;
      const youBarTotalHeight = useYouBarTotalHeight.useYouBarTotalHeight();
      if (cResult[4] === isScreenLandscape) {
        if (cResult[5] === youBarTotalHeight) {
          let tmp16 = cResult[6];
        }
        if (cResult[7] === tmp4.scrollViewContentContainer) {
          if (cResult[8] === tmp16) {
            let tmp18 = cResult[9];
          }
          ({ container, innerContainer, imageContainer } = tmp4);
          if (result < c9) {
            let result1 = c10 * (result / c9);
          } else {
            result1 = c10;
          }
          const _Math = Math;
          const bound = Math.min(result, c9);
          if (cResult[10] === result1) {
            if (cResult[11] === bound) {
              let tmp23 = cResult[12];
            }
            if (cResult[13] === tmp4.imageContainer) {
              if (cResult[14] === tmp23) {
                let tmp27 = cResult[15];
              }
              const _Symbol = Symbol;
              ({ textWrapper, title } = tmp4);
              if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
                const intl = util.intl;
                const stringResult = intl.string(util.t["8JZof8"]);
                cResult[16] = stringResult;
                let tmp31 = stringResult;
              } else {
                tmp31 = cResult[16];
              }
              if (cResult[17] !== tmp4.title) {
                const obj3 = {
                  color: "mobile-text-heading-primary",
                  variant: "heading-md/bold",
                  style: title,
                  children: tmp31,
                };
                const tmp35 = React5(Text_Text.Heading, obj3);
                cResult[17] = tmp4.title;
                cResult[18] = tmp35;
                let tmp33 = tmp35;
              } else {
                tmp33 = cResult[18];
              }
              const _Symbol2 = Symbol;
              if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
                const intl2 = util.intl;
                const stringResult1 = intl2.string(util.t["qm+H7x"]);
                cResult[19] = stringResult1;
                let tmp36 = stringResult1;
              } else {
                tmp36 = cResult[19];
              }
              if (cResult[20] !== tmp4.body) {
                const obj4 = { color: "text-default", variant: "text-md/medium", style: tmp4.body, children: tmp36 };
                const tmp40 = React5(Text_Text.Text, obj4);
                cResult[20] = tmp4.body;
                cResult[21] = tmp40;
                let tmp38 = tmp40;
              } else {
                tmp38 = cResult[21];
              }
              if (cResult[22] === tmp4.textWrapper) {
                if (cResult[23] === tmp33) {
                  if (cResult[24] === tmp38) {
                    let tmp41 = cResult[25];
                  }
                  if (cResult[26] === tmp4.innerContainer) {
                    if (cResult[27] === tmp27) {
                      if (cResult[28] === tmp41) {
                        let tmp45 = cResult[29];
                      }
                      const _Symbol3 = Symbol;
                      if (cResult[30] === Symbol.for("react.memo_cache_sentinel")) {
                        const intl3 = util.intl;
                        const stringResult2 = intl3.string(util.t.zIJnA6);
                        cResult[30] = stringResult2;
                        let tmp49 = stringResult2;
                      } else {
                        tmp49 = cResult[30];
                      }
                      if (cResult[31] !== tmp10) {
                        const obj5 = { text: tmp49, onPress: tmp10, size: "lg" };
                        const tmp53 = React5(components_Button_Button.Button, obj5);
                        cResult[31] = tmp10;
                        cResult[32] = tmp53;
                        let tmp51 = tmp53;
                      } else {
                        tmp51 = cResult[32];
                      }
                      if (cResult[33] === tmp4.buttonWrapper) {
                        if (cResult[34] === tmp51) {
                          let tmp54 = cResult[35];
                        }
                        if (cResult[36] === tmp4.container) {
                          if (cResult[37] === tmp45) {
                            if (cResult[38] === tmp54) {
                              let tmp58 = cResult[39];
                            }
                            if (cResult[40] === tmp58) {
                              if (cResult[41] === tmp18) {
                                let tmp62 = cResult[42];
                              }
                              return tmp62;
                            }
                            const obj6 = {
                              alwaysBounceVertical: false,
                              bounces: false,
                              contentContainerStyle: tmp18,
                              children: tmp58,
                            };
                            const tmp65 = React5(timestampProducer, obj6);
                            cResult[40] = tmp58;
                            cResult[41] = tmp18;
                            cResult[42] = tmp65;
                            tmp62 = tmp65;
                          }
                        }
                        const obj7 = { style: container, onLayout: first, children: null };
                        const items = [tmp45, tmp54];
                        obj7.children = items;
                        const tmp61 = closure_1_8(hasOwnProperty, obj7);
                        cResult[36] = tmp4.container;
                        cResult[37] = tmp45;
                        cResult[38] = tmp54;
                        cResult[39] = tmp61;
                        tmp58 = tmp61;
                      }
                      const obj8 = { style: tmp4.buttonWrapper, children: tmp51 };
                      const tmp57 = React5(hasOwnProperty, obj8);
                      cResult[33] = tmp4.buttonWrapper;
                      cResult[34] = tmp51;
                      cResult[35] = tmp57;
                      tmp54 = tmp57;
                    }
                  }
                  const obj9 = { style: innerContainer, children: null };
                  const items1 = [tmp27, tmp41];
                  obj9.children = items1;
                  const tmp48 = closure_1_8(hasOwnProperty, obj9);
                  cResult[26] = tmp4.innerContainer;
                  cResult[27] = tmp27;
                  cResult[28] = tmp41;
                  cResult[29] = tmp48;
                  tmp45 = tmp48;
                }
              }
              const obj10 = { style: textWrapper, children: null };
              const items2 = [tmp33, tmp38];
              obj10.children = items2;
              const tmp44 = closure_1_8(hasOwnProperty, obj10);
              cResult[22] = tmp4.textWrapper;
              cResult[23] = tmp33;
              cResult[24] = tmp38;
              cResult[25] = tmp44;
              tmp41 = tmp44;
            }
            const obj11 = { style: imageContainer, children: tmp23 };
            const tmp30 = React5(hasOwnProperty, obj11);
            cResult[13] = tmp4.imageContainer;
            cResult[14] = tmp23;
            cResult[15] = tmp30;
            tmp27 = tmp30;
          }
          const obj12 = { resizeMode: "contain", source: _modDef16397, style: null };
          const size = { height: result1, width: bound };
          obj12.style = size;
          const tmp26 = React5(FastImageDefault, obj12);
          cResult[10] = result1;
          cResult[11] = bound;
          cResult[12] = tmp26;
          tmp23 = tmp26;
          const tmp5Result = FastImageDefault;
        }
        const items3 = [tmp4.scrollViewContentContainer, tmp16];
        cResult[7] = tmp4.scrollViewContentContainer;
        cResult[8] = tmp16;
        cResult[9] = items3;
        tmp18 = items3;
      }
      let tmp17;
      if (isScreenLandscape) {
        const obj13 = { paddingBottom: youBarTotalHeight };
        tmp17 = obj13;
      }
      cResult[4] = isScreenLandscape;
      cResult[5] = youBarTotalHeight;
      cResult[6] = tmp17;
      tmp16 = tmp17;
      const tmpResult4 = useYouBarTotalHeight;
    }
  : function MessagesEmptyState() {
      const tmp = closure_11();
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
      const obj8 = { resizeMode: "contain", source: null, style: null };
      const tmp7Result = useIsScreenLandscape;
      obj8.source = _modDef16397;
      if (result < c9) {
        let result1 = c10 * (result / c9);
      } else {
        result1 = c10;
      }
      const size = { height: result1, width: Math.min(result, c9) };
      obj8.style = size;
      obj7.children = React5(FastImageDefault, obj8);
      const items2 = [React5(hasOwnProperty, obj7)];
      const obj9 = { style: tmp.textWrapper, children: null };
      const obj10 = {
        color: "mobile-text-heading-primary",
        variant: "heading-md/bold",
        style: tmp.title,
        children: null,
      };
      const intl = util.intl;
      obj10.children = intl.string(util.t["8JZof8"]);
      const items3 = [React5(Text_Text.Heading, obj10)];
      const obj11 = { color: "text-default", variant: "text-md/medium", style: tmp.body, children: null };
      const intl2 = util.intl;
      obj11.children = intl2.string(util.t["qm+H7x"]);
      items3[1] = React5(Text_Text.Text, obj11);
      obj9.children = items3;
      items2[1] = closure_1_8(hasOwnProperty, obj9);
      obj6.children = items2;
      const items4 = [closure_1_8(hasOwnProperty, obj6)];
      const obj12 = { style: tmp.buttonWrapper, children: null };
      const obj13 = { text: null, onPress: null, size: "lg" };
      const intl3 = util.intl;
      obj13.text = intl3.string(util.t.zIJnA6);
      obj13.onPress = callback1;
      obj12.children = React5(components_Button_Button.Button, obj13);
      items4[1] = React5(hasOwnProperty, obj12);
      obj5.children = items4;
      obj4.children = closure_1_8(hasOwnProperty, obj5);
      return React5(timestampProducer, obj4);
    };
