// === Module 12893: XboxLinkEducation ===

// Module 12893 (XboxLinkEducation)
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2127 */;
import Text_Text from "Text/Text" /* 5086 */;
import components_Button_Button from "components/Button/Button" /* 5375 */;
import FastImageDefault from "FastImage" /* 6164 */;
import common_SafeAreaView from "common/SafeAreaView" /* 6803 */;
import TwoWayLinkStyles from "TwoWayLinkStyles" /* 9120 */;
import _modDef9159 from "module_9159" /* 9159 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const HelpdeskArticles = fn(1085).HelpdeskArticles;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(5090);
let closure_8 = createStyles.createStyles({ image: { width: 124, height: 160, marginBottom: 24 } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/xbox/XboxLinkEducation.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function XboxLinkEducation(onClose) {
  const cResult = c.c(48);
  onClose = onClose.onClose;
  let str = closure_8();
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
                      let tmp28 = cResult[27];
                    }
                    if (cResult[28] === tmp6) {
                      if (cResult[29] === tmp12) {
                        if (cResult[30] === tmp13) {
                          if (cResult[31] === tmp14) {
                            if (cResult[32] === tmp28) {
                              let tmp31 = cResult[33];
                            }
                            const _Symbol = Symbol;
                            ({ footerContainer, footerButton } = twoWayLinkStyles);
                            if (cResult[34] === Symbol.for("react.memo_cache_sentinel")) {
                              const intl3 = util.intl;
                              const stringResult = intl3.string(util.t.i4jeWR);
                              cResult[34] = stringResult;
                              let tmp35 = stringResult;
                            } else {
                              tmp35 = cResult[34];
                            }
                            if (cResult[35] !== onClose) {
                              const obj4 = { size: "lg", variant: "primary", text: tmp35, onPress: onClose };
                              const tmp39 = timestampProducer(components_Button_Button.Button, obj4);
                              cResult[35] = onClose;
                              cResult[36] = tmp39;
                              let tmp37 = tmp39;
                            } else {
                              tmp37 = cResult[36];
                            }
                            if (cResult[37] === twoWayLinkStyles.footerButton) {
                              if (cResult[38] === tmp37) {
                                let tmp40 = cResult[39];
                              }
                              if (cResult[40] === twoWayLinkStyles.footerContainer) {
                                if (cResult[41] === tmp40) {
                                  let tmp44 = cResult[42];
                                }
                                if (cResult[43] === tmp7) {
                                  if (cResult[44] === tmp31) {
                                    if (cResult[45] === tmp44) {
                                      if (cResult[46] === tmp15) {
                                        let tmp47 = cResult[47];
                                      }
                                      return tmp47;
                                    }
                                  }
                                }
                                const obj5 = { style: tmp15, children: null };
                                const items = [tmp31, tmp44];
                                obj5.children = items;
                                const tmp49 = React5(tmp7, obj5);
                                cResult[43] = tmp7;
                                cResult[44] = tmp31;
                                cResult[45] = tmp44;
                                cResult[46] = tmp15;
                                cResult[47] = tmp49;
                                tmp47 = tmp49;
                              }
                              const obj6 = { bottom: true, style: footerContainer, children: tmp40 };
                              const tmp46 = timestampProducer(common_SafeAreaView.SafeAreaPaddingView, obj6);
                              cResult[40] = twoWayLinkStyles.footerContainer;
                              cResult[41] = tmp40;
                              cResult[42] = tmp46;
                              tmp44 = tmp46;
                            }
                            const obj7 = { style: footerButton, children: tmp37 };
                            const tmp43 = timestampProducer(View, obj7);
                            cResult[37] = twoWayLinkStyles.footerButton;
                            cResult[38] = tmp37;
                            cResult[39] = tmp43;
                            tmp40 = tmp43;
                          }
                        }
                      }
                    }
                    const obj8 = { style: tmp12, children: null };
                    const items1 = [tmp13, tmp14, tmp28];
                    obj8.children = items1;
                    const tmp33 = React5(tmp6, obj8);
                    cResult[28] = tmp6;
                    cResult[29] = tmp12;
                    cResult[30] = tmp13;
                    cResult[31] = tmp14;
                    cResult[32] = tmp28;
                    cResult[33] = tmp33;
                    tmp31 = tmp33;
                  }
                }
              }
            }
            const obj9 = { variant: cResult[8], color: cResult[9], style: cResult[10], children: cResult[11] };
            const tmp30 = timestampProducer(cResult[5], obj9);
            cResult[22] = cResult[5];
            cResult[23] = cResult[8];
            cResult[24] = cResult[9];
            cResult[25] = cResult[10];
            cResult[26] = cResult[11];
            cResult[27] = tmp30;
            tmp28 = tmp30;
          }
        }
      }
    }
  }
  const articleURL = HelpdeskUtilsDefault.getArticleURL(HelpdeskArticles.XBOX_CONNECTION);
  if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
    const obj10 = { uri: _modDef9159 };
    cResult[16] = obj10;
    let tmp18 = obj10;
  } else {
    tmp18 = cResult[16];
  }
  ({ container, content } = twoWayLinkStyles);
  if (cResult[17] !== str.image) {
    const obj11 = { source: tmp18, style: str.image };
    const tmp22 = timestampProducer(FastImageDefault, obj11);
    cResult[17] = str.image;
    cResult[18] = tmp22;
    let tmp20 = tmp22;
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
    const tmp27 = timestampProducer(Text_Text.Text, obj12);
    cResult[20] = twoWayLinkStyles.title;
    cResult[21] = tmp27;
    let tmp25 = tmp27;
  } else {
    tmp25 = cResult[21];
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
  cResult[6] = View;
  cResult[7] = View;
  str = "text-md/medium";
  cResult[8] = "text-md/medium";
  cResult[9] = "text-default";
  cResult[10] = twoWayLinkStyles.body;
  cResult[11] = formatResult;
  cResult[12] = content;
  cResult[13] = tmp20;
  cResult[14] = tmp25;
  cResult[15] = container;
}) : (function XboxLinkEducation(onClose) {
  const tmp = closure_8();
  const twoWayLinkStyles = TwoWayLinkStyles.useTwoWayLinkStyles();
  const articleURL = HelpdeskUtilsDefault.getArticleURL(HelpdeskArticles.XBOX_CONNECTION);
  const obj3 = { style: twoWayLinkStyles.container, children: null };
  const obj4 = { style: twoWayLinkStyles.content, children: null };
  const memo = noop.useMemo(() => ({ uri: _modDef9159 }), []);
  const items = [timestampProducer(FastImageDefault, { source: memo, style: tmp.image }), , ];
  const obj6 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: twoWayLinkStyles.title, children: null };
  const intl = util.intl;
  obj6.children = intl.string(util.t.jHytat);
  items[1] = timestampProducer(Text_Text.Text, obj6);
  const obj7 = { variant: "text-md/medium", color: "text-default", style: twoWayLinkStyles.body, children: null };
  const intl2 = util.intl;
  obj7.children = intl2.format(util.t.yhozpz, { helpdeskArticleUrl: articleURL });
  items[2] = timestampProducer(Text_Text.Text, obj7);
  obj4.children = items;
  const items1 = [React5(View, obj4), ];
  const obj8 = { bottom: true, style: twoWayLinkStyles.footerContainer, children: null };
  const obj9 = { style: twoWayLinkStyles.footerButton, children: null };
  const obj10 = { size: "lg", variant: "primary", text: null, onPress: null };
  const intl3 = util.intl;
  obj10.text = intl3.string(util.t.i4jeWR);
  obj10.onPress = onClose.onClose;
  obj9.children = timestampProducer(components_Button_Button.Button, obj10);
  obj8.children = timestampProducer(View, obj9);
  items1[1] = timestampProducer(common_SafeAreaView.SafeAreaPaddingView, obj8);
  obj3.children = items1;
  return React5(View, obj3);
});