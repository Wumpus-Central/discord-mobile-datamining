// === Module 16463: MessagesEmptyState ===

// Module 16463 (MessagesEmptyState)
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1273 */;
import useNavigation from "useNavigation" /* 1503 */;
import Text_Text from "Text/Text" /* 5088 */;
import components_Button_Button from "components/Button/Button" /* 5379 */;
import useIsScreenLandscape from "useIsScreenLandscape" /* 8326 */;
import useTrackImpressionDefault from "useTrackImpression" /* 8971 */;
import useYouBarTotalHeight from "useYouBarTotalHeight" /* 15352 */;
import ActivitiesTogetherSpotIllustration from "ActivitiesTogetherSpotIllustration" /* 16464 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, ScrollView: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(5092);
let closure_8 = createStyles.createStyles({ container: { flex: 1, justifyContent: "center" }, scrollViewContentContainer: { flexGrow: 2 }, innerContainer: { alignItems: "center", justifyContent: "center" }, imageContainer: { alignItems: "center", marginBottom: 24 }, textWrapper: { paddingHorizontal: 48 }, body: { marginBottom: 24, textAlign: "center" }, title: { textAlign: "center", fontSize: 18, marginBottom: 8 }, buttonWrapper: { paddingHorizontal: 16, paddingBottom: 16 } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/MessagesEmptyState.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function MessagesEmptyState() {
  const cResult = c.c(39);
  const tmp4 = closure_8();
  const navigation = useNavigation.useNavigation();
  if (cResult[0] !== navigation) {
    const fn = function t() {
      navigation.navigate("friends", { screen: "add-friends", params: { sourcePage: "Messages Empty State", presentation: "card" } });
    };
    cResult[0] = navigation;
    cResult[1] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { type: discord_common_AnalyticsUtils.ImpressionTypes.VIEW, name: discord_common_AnalyticsUtils.ImpressionNames.MESSAGES_EMPTY_NUX };
    cResult[2] = obj3;
    let tmp7 = obj3;
  } else {
    tmp7 = cResult[2];
  }
  useTrackImpressionDefault(tmp7);
  const isScreenLandscape = useIsScreenLandscape.useIsScreenLandscape();
  const tmpResult = useIsScreenLandscape;
  const youBarTotalHeight = useYouBarTotalHeight.useYouBarTotalHeight();
  if (cResult[3] === isScreenLandscape) {
    if (cResult[4] === youBarTotalHeight) {
      let tmp11 = cResult[5];
    }
    if (cResult[6] === tmp4.scrollViewContentContainer) {
      if (cResult[7] === tmp11) {
        let tmp13 = cResult[8];
      }
      const _Symbol = Symbol;
      ({ container, innerContainer } = tmp4);
      if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp16 = timestampProducer(ActivitiesTogetherSpotIllustration.ActivitiesTogetherSpotIllustration, { width: 230, accessible: false });
        cResult[9] = tmp16;
        let tmp14 = tmp16;
      } else {
        tmp14 = cResult[9];
      }
      if (cResult[10] !== tmp4.imageContainer) {
        const obj4 = { style: tmp4.imageContainer, children: tmp14 };
        const tmp20 = timestampProducer(React4, obj4);
        cResult[10] = tmp4.imageContainer;
        cResult[11] = tmp20;
        let tmp17 = tmp20;
      } else {
        tmp17 = cResult[11];
      }
      const _Symbol2 = Symbol;
      ({ textWrapper, title } = tmp4);
      if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = util.intl;
        const stringResult = intl.string(util.t["8JZof8"]);
        cResult[12] = stringResult;
        let tmp21 = stringResult;
      } else {
        tmp21 = cResult[12];
      }
      if (cResult[13] !== tmp4.title) {
        const obj5 = { color: "mobile-text-heading-primary", variant: "heading-md/bold", style: title, children: tmp21 };
        const tmp25 = timestampProducer(Text_Text.Heading, obj5);
        cResult[13] = tmp4.title;
        cResult[14] = tmp25;
        let tmp23 = tmp25;
      } else {
        tmp23 = cResult[14];
      }
      const _Symbol3 = Symbol;
      if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
        const intl2 = util.intl;
        const stringResult1 = intl2.string(util.t["qm+H7x"]);
        cResult[15] = stringResult1;
        let tmp26 = stringResult1;
      } else {
        tmp26 = cResult[15];
      }
      if (cResult[16] !== tmp4.body) {
        const obj6 = { color: "text-default", variant: "text-md/medium", style: tmp4.body, children: tmp26 };
        const tmp30 = timestampProducer(Text_Text.Text, obj6);
        cResult[16] = tmp4.body;
        cResult[17] = tmp30;
        let tmp28 = tmp30;
      } else {
        tmp28 = cResult[17];
      }
      if (cResult[18] === tmp4.textWrapper) {
        if (cResult[19] === tmp23) {
          if (cResult[20] === tmp28) {
            let tmp31 = cResult[21];
          }
          if (cResult[22] === tmp4.innerContainer) {
            if (cResult[23] === tmp31) {
              if (cResult[24] === tmp17) {
                let tmp35 = cResult[25];
              }
              const _Symbol4 = Symbol;
              if (cResult[26] === Symbol.for("react.memo_cache_sentinel")) {
                const intl3 = util.intl;
                const stringResult2 = intl3.string(util.t.zIJnA6);
                cResult[26] = stringResult2;
                let tmp39 = stringResult2;
              } else {
                tmp39 = cResult[26];
              }
              if (cResult[27] !== tmp6) {
                const obj7 = { text: tmp39, onPress: tmp6, size: "lg" };
                const tmp43 = timestampProducer(components_Button_Button.Button, obj7);
                cResult[27] = tmp6;
                cResult[28] = tmp43;
                let tmp41 = tmp43;
              } else {
                tmp41 = cResult[28];
              }
              if (cResult[29] === tmp4.buttonWrapper) {
                if (cResult[30] === tmp41) {
                  let tmp44 = cResult[31];
                }
                if (cResult[32] === tmp4.container) {
                  if (cResult[33] === tmp35) {
                    if (cResult[34] === tmp44) {
                      let tmp48 = cResult[35];
                    }
                    if (cResult[36] === tmp48) {
                      if (cResult[37] === tmp13) {
                        let tmp52 = cResult[38];
                      }
                      return tmp52;
                    }
                    const obj8 = { alwaysBounceVertical: false, bounces: false, contentContainerStyle: tmp13, children: tmp48 };
                    const tmp55 = timestampProducer(hasOwnProperty, obj8);
                    cResult[36] = tmp48;
                    cResult[37] = tmp13;
                    cResult[38] = tmp55;
                    tmp52 = tmp55;
                  }
                }
                const obj9 = { style: container, children: null };
                const items = [tmp35, tmp44];
                obj9.children = items;
                const tmp51 = React5(React4, obj9);
                cResult[32] = tmp4.container;
                cResult[33] = tmp35;
                cResult[34] = tmp44;
                cResult[35] = tmp51;
                tmp48 = tmp51;
              }
              const obj10 = { style: tmp4.buttonWrapper, children: tmp41 };
              const tmp47 = timestampProducer(React4, obj10);
              cResult[29] = tmp4.buttonWrapper;
              cResult[30] = tmp41;
              cResult[31] = tmp47;
              tmp44 = tmp47;
            }
          }
          const obj11 = { style: innerContainer, children: null };
          const items1 = [tmp17, tmp31];
          obj11.children = items1;
          const tmp38 = React5(React4, obj11);
          cResult[22] = tmp4.innerContainer;
          cResult[23] = tmp31;
          cResult[24] = tmp17;
          cResult[25] = tmp38;
          tmp35 = tmp38;
        }
      }
      const obj12 = { style: textWrapper, children: null };
      const items2 = [tmp23, tmp28];
      obj12.children = items2;
      const tmp34 = React5(React4, obj12);
      cResult[18] = tmp4.textWrapper;
      cResult[19] = tmp23;
      cResult[20] = tmp28;
      cResult[21] = tmp34;
      tmp31 = tmp34;
    }
    const items3 = [tmp4.scrollViewContentContainer, tmp11];
    cResult[6] = tmp4.scrollViewContentContainer;
    cResult[7] = tmp11;
    cResult[8] = items3;
    tmp13 = items3;
  }
  let tmp12;
  if (isScreenLandscape) {
    const obj13 = { paddingBottom: youBarTotalHeight };
    tmp12 = obj13;
  }
  cResult[3] = isScreenLandscape;
  cResult[4] = youBarTotalHeight;
  cResult[5] = tmp12;
  tmp11 = tmp12;
  const tmpResult2 = useYouBarTotalHeight;
}) : (function MessagesEmptyState() {
  const tmp = closure_8();
  const navigation = useNavigation.useNavigation();
  const items = [navigation];
  const callback = noop.useCallback(() => {
    navigation.navigate("friends", { screen: "add-friends", params: { sourcePage: "Messages Empty State", presentation: "card" } });
  }, items);
  const obj2 = { type: null, name: null };
  obj2.type = discord_common_AnalyticsUtils.ImpressionTypes.VIEW;
  obj2.name = discord_common_AnalyticsUtils.ImpressionNames.MESSAGES_EMPTY_NUX;
  useTrackImpressionDefault(obj2);
  const isScreenLandscape = useIsScreenLandscape.useIsScreenLandscape();
  useYouBarTotalHeight;
  const items1 = [tmp.scrollViewContentContainer, ];
  let tmp13;
  if (isScreenLandscape) {
    const obj4 = { paddingBottom: tmp10 };
    tmp13 = obj4;
  }
  const obj5 = { alwaysBounceVertical: false, bounces: false, contentContainerStyle: items1, children: null };
  items1[1] = tmp13;
  const obj6 = { style: tmp.container, children: null };
  const obj7 = { style: tmp.innerContainer, children: null };
  const items2 = [timestampProducer(React4, { style: tmp.imageContainer, children: timestampProducer(ActivitiesTogetherSpotIllustration.ActivitiesTogetherSpotIllustration, { width: 230, accessible: false }) }), ];
  const obj9 = { style: tmp.textWrapper, children: null };
  const obj10 = { color: "mobile-text-heading-primary", variant: "heading-md/bold", style: tmp.title, children: null };
  const intl = util.intl;
  obj10.children = intl.string(util.t["8JZof8"]);
  const items3 = [timestampProducer(Text_Text.Heading, obj10), ];
  const obj11 = { color: "text-default", variant: "text-md/medium", style: tmp.body, children: null };
  const intl2 = util.intl;
  obj11.children = intl2.string(util.t["qm+H7x"]);
  items3[1] = timestampProducer(Text_Text.Text, obj11);
  obj9.children = items3;
  items2[1] = React5(React4, obj9);
  obj7.children = items2;
  const items4 = [React5(React4, obj7), ];
  const obj12 = { style: tmp.buttonWrapper, children: null };
  const obj13 = { text: null, onPress: null, size: "lg" };
  const intl3 = util.intl;
  obj13.text = intl3.string(util.t.zIJnA6);
  obj13.onPress = callback;
  obj12.children = timestampProducer(components_Button_Button.Button, obj13);
  items4[1] = timestampProducer(React4, obj12);
  obj6.children = items4;
  obj5.children = React5(React4, obj6);
  return timestampProducer(hasOwnProperty, obj5);
});