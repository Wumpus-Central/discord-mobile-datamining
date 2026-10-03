// === Module 8757: XboxLinkEducation ===

// Module 8757 (XboxLinkEducation)
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2115 */;
import Text_Text from "Text/Text" /* 4886 */;
import components_Button_Button from "components/Button/Button" /* 5594 */;
import common_SafeAreaView from "common/SafeAreaView" /* 6619 */;
import TwoWayLinkStyles from "TwoWayLinkStyles" /* 8742 */;
import _modDef8758 from "module_8758" /* 8758 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ Image: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const HelpdeskArticles = fn(1085).HelpdeskArticles;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4890);
let closure_9 = createStyles.createStyles({ image: { width: 124, height: 160, marginBottom: 24 } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/xbox/XboxLinkEducation.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((onClose) => {
  const cResult = c.c(48);
  onClose = onClose.onClose;
  let str = closure_9();
  const twoWayLinkStyles = TwoWayLinkStyles.useTwoWayLinkStyles();
  if (cResult[0] === twoWayLinkStyles.body) {
    if (cResult[1] === twoWayLinkStyles.container) {
      if (cResult[2] === twoWayLinkStyles.content) {
        if (cResult[3] === twoWayLinkStyles.title) {
          if (cResult[4] === str.image) {
            if (cResult[22] === cResult[5]) {
              if (cResult[23] === tmp8) {
                if (cResult[24] === tmp9) {
                  if (cResult[25] === tmp10) {
                    if (cResult[26] === tmp11) {
                      let tmp29 = cResult[27];
                    }
                    if (cResult[28] === tmp6) {
                      if (cResult[29] === tmp12) {
                        if (cResult[30] === tmp13) {
                          if (cResult[31] === tmp14) {
                            if (cResult[32] === tmp29) {
                              let tmp32 = cResult[33];
                            }
                            const _Symbol = Symbol;
                            ({ footerContainer, footerButton } = twoWayLinkStyles);
                            if (cResult[34] === Symbol.for("react.memo_cache_sentinel")) {
                              const intl3 = util.intl;
                              const stringResult = intl3.string(util.t.i4jeWR);
                              cResult[34] = stringResult;
                              let tmp36 = stringResult;
                            } else {
                              tmp36 = cResult[34];
                            }
                            if (cResult[35] !== onClose) {
                              const obj4 = { size: "lg", variant: "primary", text: tmp36, onPress: onClose };
                              const tmp40 = React5(components_Button_Button.Button, obj4);
                              cResult[35] = onClose;
                              cResult[36] = tmp40;
                              let tmp38 = tmp40;
                            } else {
                              tmp38 = cResult[36];
                            }
                            if (cResult[37] === twoWayLinkStyles.footerButton) {
                              if (cResult[38] === tmp38) {
                                let tmp41 = cResult[39];
                              }
                              if (cResult[40] === twoWayLinkStyles.footerContainer) {
                                if (cResult[41] === tmp41) {
                                  let tmp45 = cResult[42];
                                }
                                if (cResult[43] === tmp7) {
                                  if (cResult[44] === tmp32) {
                                    if (cResult[45] === tmp45) {
                                      if (cResult[46] === tmp15) {
                                        let tmp48 = cResult[47];
                                      }
                                      return tmp48;
                                    }
                                  }
                                }
                                const obj5 = { style: tmp15, children: null };
                                const items = [tmp32, tmp45];
                                obj5.children = items;
                                const tmp50 = closure_1_8(tmp7, obj5);
                                cResult[43] = tmp7;
                                cResult[44] = tmp32;
                                cResult[45] = tmp45;
                                cResult[46] = tmp15;
                                cResult[47] = tmp50;
                                tmp48 = tmp50;
                              }
                              const obj6 = { bottom: true, style: footerContainer, children: tmp41 };
                              const tmp47 = React5(common_SafeAreaView.SafeAreaPaddingView, obj6);
                              cResult[40] = twoWayLinkStyles.footerContainer;
                              cResult[41] = tmp41;
                              cResult[42] = tmp47;
                              tmp45 = tmp47;
                            }
                            const obj7 = { style: footerButton, children: tmp38 };
                            const tmp44 = React5(hasOwnProperty, obj7);
                            cResult[37] = twoWayLinkStyles.footerButton;
                            cResult[38] = tmp38;
                            cResult[39] = tmp44;
                            tmp41 = tmp44;
                          }
                        }
                      }
                    }
                    const obj8 = { style: tmp12, children: null };
                    const items1 = [tmp13, tmp14, tmp29];
                    obj8.children = items1;
                    const tmp34 = closure_1_8(tmp6, obj8);
                    cResult[28] = tmp6;
                    cResult[29] = tmp12;
                    cResult[30] = tmp13;
                    cResult[31] = tmp14;
                    cResult[32] = tmp29;
                    cResult[33] = tmp34;
                    tmp32 = tmp34;
                  }
                }
              }
            }
            const obj9 = { variant: cResult[8], color: cResult[9], style: cResult[10], children: cResult[11] };
            const tmp31 = React5(cResult[5], obj9);
            cResult[22] = cResult[5];
            cResult[23] = cResult[8];
            cResult[24] = cResult[9];
            cResult[25] = cResult[10];
            cResult[26] = cResult[11];
            cResult[27] = tmp31;
            tmp29 = tmp31;
          }
        }
      }
    }
  }
  const articleURL = HelpdeskUtilsDefault.getArticleURL(HelpdeskArticles.XBOX_CONNECTION);
  if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
    const obj10 = { uri: _modDef8758 };
    cResult[16] = obj10;
    let tmp18 = obj10;
  } else {
    tmp18 = cResult[16];
  }
  ({ container, content } = twoWayLinkStyles);
  if (cResult[17] !== str.image) {
    const obj11 = { source: tmp18, style: str.image };
    const tmp23 = React5(React4, obj11);
    cResult[17] = str.image;
    cResult[18] = tmp23;
    let tmp20 = tmp23;
  } else {
    tmp20 = cResult[18];
  }
  let format = twoWayLinkStyles.title;
  if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = util.intl;
    const stringResult1 = intl.string(util.t.jHytat);
    cResult[19] = stringResult1;
    let formatResult = stringResult1;
  } else {
    formatResult = cResult[19];
  }
  if (cResult[20] !== twoWayLinkStyles.title) {
    const obj12 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: format, children: formatResult };
    const tmp28 = React5(Text_Text.Text, obj12);
    cResult[20] = twoWayLinkStyles.title;
    cResult[21] = tmp28;
    let tmp26 = tmp28;
  } else {
    tmp26 = cResult[21];
  }
  const intl2 = util.intl;
  format = intl2.format;
  formatResult = format(util.t.yhozpz, { helpdeskArticleUrl: articleURL });
  cResult[0] = twoWayLinkStyles.body;
  cResult[1] = twoWayLinkStyles.container;
  cResult[2] = twoWayLinkStyles.content;
  cResult[3] = twoWayLinkStyles.title;
  cResult[4] = str.image;
  cResult[5] = Text_Text.Text;
  cResult[6] = hasOwnProperty;
  cResult[7] = hasOwnProperty;
  str = "text-md/medium";
  cResult[8] = "text-md/medium";
  cResult[9] = "text-default";
  cResult[10] = twoWayLinkStyles.body;
  cResult[11] = formatResult;
  cResult[12] = content;
  cResult[13] = tmp20;
  cResult[14] = tmp26;
  cResult[15] = container;
}) : ((onClose) => {
  const tmp = closure_9();
  const twoWayLinkStyles = TwoWayLinkStyles.useTwoWayLinkStyles();
  const articleURL = HelpdeskUtilsDefault.getArticleURL(HelpdeskArticles.XBOX_CONNECTION);
  const obj3 = { style: twoWayLinkStyles.container, children: null };
  const obj4 = { style: twoWayLinkStyles.content, children: null };
  const items = [React5(React4, { source: noop.useMemo(() => ({ uri: _modDef8758 }), []), style: tmp.image }), , ];
  const obj6 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: twoWayLinkStyles.title, children: null };
  const intl = util.intl;
  obj6.children = intl.string(util.t.jHytat);
  items[1] = React5(Text_Text.Text, obj6);
  const obj7 = { variant: "text-md/medium", color: "text-default", style: twoWayLinkStyles.body, children: null };
  const intl2 = util.intl;
  obj7.children = intl2.format(util.t.yhozpz, { helpdeskArticleUrl: articleURL });
  items[2] = React5(Text_Text.Text, obj7);
  obj4.children = items;
  const items1 = [closure_1_8(hasOwnProperty, obj4), ];
  const obj8 = { bottom: true, style: twoWayLinkStyles.footerContainer, children: null };
  const obj9 = { style: twoWayLinkStyles.footerButton, children: null };
  const obj10 = { size: "lg", variant: "primary", text: null, onPress: null };
  const intl3 = util.intl;
  obj10.text = intl3.string(util.t.i4jeWR);
  obj10.onPress = onClose.onClose;
  obj9.children = React5(components_Button_Button.Button, obj10);
  obj8.children = React5(hasOwnProperty, obj9);
  items1[1] = React5(common_SafeAreaView.SafeAreaPaddingView, obj8);
  obj3.children = items1;
  return closure_1_8(hasOwnProperty, obj3);
});