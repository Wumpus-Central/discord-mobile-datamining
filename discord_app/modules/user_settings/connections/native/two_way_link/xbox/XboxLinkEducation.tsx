// === Module 8789: XboxLinkEducation ===

// Module 8789 (XboxLinkEducation)
import react2 from "react" /* 576 */;
import Constants from "Constants" /* 1085 */;
import intl4 from "intl" /* 1126 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2115 */;
import Text_Text from "Text/Text" /* 4892 */;
import components_Button_Button from "components/Button/Button" /* 5601 */;
import common_SafeAreaView from "common/SafeAreaView" /* 6626 */;
import TwoWayLinkStyles from "TwoWayLinkStyles" /* 8774 */;
import _modDef8790 from "module_8790" /* 8790 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let onClose;

let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
({ Image: closure_4, View: hasOwnProperty } = react_native);
const HelpdeskArticles = Constants.HelpdeskArticles;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let closure_9 = createStyles.createStyles({ image: { width: 124, height: 160, marginBottom: 24 } });
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((onClose) => {
  let container;
  let content;
  let footerButton;
  let footerContainer;
  let items;
  let items1;
  let tmp17;
  let tmp19;
  let tmp23;
  let tmp25;
  const obj = react2;
  const cResult = obj.c(48);
  onClose = onClose.onClose;
  const tmp4 = closure_9();
  const obj2 = TwoWayLinkStyles;
  const twoWayLinkStyles = obj2.useTwoWayLinkStyles();
  if (cResult[0] === twoWayLinkStyles.body) {
    if (cResult[1] === twoWayLinkStyles.container) {
      if (cResult[2] === twoWayLinkStyles.content) {
        if (cResult[3] === twoWayLinkStyles.title) {
          let tmp6;
          let tmp7;
          let tmp8;
          let str;
          let str2;
          let tmp9;
          let tmp10;
          let tmp11;
          let tmp12;
          let tmp13;
          let tmp14;
          if (cResult[4] === tmp4.image) {
            tmp6 = cResult[5];
            tmp7 = cResult[6];
            tmp8 = cResult[7];
            str = cResult[8];
            str2 = cResult[9];
            tmp9 = cResult[10];
            tmp10 = cResult[11];
            tmp11 = cResult[12];
            tmp12 = cResult[13];
            tmp13 = cResult[14];
            tmp14 = cResult[15];
          }
          if (cResult[22] === tmp6) {
            if (cResult[23] === str) {
              if (cResult[24] === str2) {
                if (cResult[25] === tmp9) {
                  let tmp29;
                  if (cResult[26] === tmp10) {
                    tmp29 = cResult[27];
                  }
                  if (cResult[28] === tmp7) {
                    if (cResult[29] === tmp11) {
                      if (cResult[30] === tmp12) {
                        if (cResult[31] === tmp13) {
                          let tmp32;
                          let tmp36;
                          let tmp38;
                          if (cResult[32] === tmp29) {
                            tmp32 = cResult[33];
                          }
                          const _Symbol = Symbol;
                          ({ footerContainer, footerButton } = twoWayLinkStyles);
                          if (cResult[34] === Symbol.for("react.memo_cache_sentinel")) {
                            const intl3 = intl4.intl;
                            const stringResult = intl3.string(intl4.t.i4jeWR);
                            cResult[34] = stringResult;
                            tmp36 = stringResult;
                          } else {
                            tmp36 = cResult[34];
                          }
                          if (cResult[35] !== onClose) {
                            const obj4 = { size: "lg", variant: "primary", text: tmp36, onPress: onClose };
                            const tmp40 = metroImportDefault(components_Button_Button.Button, obj4);
                            cResult[35] = onClose;
                            cResult[36] = tmp40;
                            tmp38 = tmp40;
                          } else {
                            tmp38 = cResult[36];
                          }
                          if (cResult[37] === twoWayLinkStyles.footerButton) {
                            let tmp41;
                            if (cResult[38] === tmp38) {
                              tmp41 = cResult[39];
                            }
                            if (cResult[40] === twoWayLinkStyles.footerContainer) {
                              let tmp45;
                              if (cResult[41] === tmp41) {
                                tmp45 = cResult[42];
                              }
                              if (cResult[43] === tmp8) {
                                if (cResult[44] === tmp32) {
                                  if (cResult[45] === tmp45) {
                                    let tmp48;
                                    if (cResult[46] === tmp14) {
                                      tmp48 = cResult[47];
                                    }
                                    return tmp48;
                                  }
                                }
                              }
                              const obj5 = { style: tmp14, children: items };
                              items = [tmp32, tmp45];
                              const tmp50 = metroImportAll(tmp8, obj5);
                              cResult[43] = tmp8;
                              cResult[44] = tmp32;
                              cResult[45] = tmp45;
                              cResult[46] = tmp14;
                              cResult[47] = tmp50;
                              tmp48 = tmp50;
                            }
                            const obj6 = { bottom: true, style: footerContainer, children: tmp41 };
                            const tmp47 = metroImportDefault(common_SafeAreaView.SafeAreaPaddingView, obj6);
                            cResult[40] = twoWayLinkStyles.footerContainer;
                            cResult[41] = tmp41;
                            cResult[42] = tmp47;
                            tmp45 = tmp47;
                          }
                          const obj7 = { style: footerButton, children: tmp38 };
                          const tmp44 = metroImportDefault(hasOwnProperty, obj7);
                          cResult[37] = twoWayLinkStyles.footerButton;
                          cResult[38] = tmp38;
                          cResult[39] = tmp44;
                          tmp41 = tmp44;
                        }
                      }
                    }
                  }
                  const obj8 = { style: tmp11, children: items1 };
                  items1 = [tmp12, tmp13, tmp29];
                  const tmp34 = metroImportAll(tmp7, obj8);
                  cResult[28] = tmp7;
                  cResult[29] = tmp11;
                  cResult[30] = tmp12;
                  cResult[31] = tmp13;
                  cResult[32] = tmp29;
                  cResult[33] = tmp34;
                  tmp32 = tmp34;
                }
              }
            }
          }
          const obj9 = { variant: str, color: str2, style: tmp9, children: tmp10 };
          const tmp31 = metroImportDefault(tmp6, obj9);
          cResult[22] = tmp6;
          cResult[23] = str;
          cResult[24] = str2;
          cResult[25] = tmp9;
          cResult[26] = tmp10;
          cResult[27] = tmp31;
          tmp29 = tmp31;
        }
      }
    }
  }
  const obj3 = HelpdeskUtilsDefault;
  const articleURL = obj3.getArticleURL(HelpdeskArticles.XBOX_CONNECTION);
  if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
    const obj10 = { uri: _modDef8790 };
    cResult[16] = obj10;
    tmp17 = obj10;
  } else {
    tmp17 = cResult[16];
  }
  ({ container, content } = twoWayLinkStyles);
  if (cResult[17] !== tmp4.image) {
    const obj11 = { source: tmp17, style: tmp4.image };
    const tmp22 = metroImportDefault(React3, obj11);
    cResult[17] = tmp4.image;
    cResult[18] = tmp22;
    tmp19 = tmp22;
  } else {
    tmp19 = cResult[18];
  }
  const title = twoWayLinkStyles.title;
  if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = intl4.intl;
    const stringResult1 = intl.string(intl4.t.jHytat);
    cResult[19] = stringResult1;
    tmp23 = stringResult1;
  } else {
    tmp23 = cResult[19];
  }
  if (cResult[20] !== twoWayLinkStyles.title) {
    const obj12 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: title, children: tmp23 };
    const tmp27 = metroImportDefault(Text_Text.Text, obj12);
    cResult[20] = twoWayLinkStyles.title;
    cResult[21] = tmp27;
    tmp25 = tmp27;
  } else {
    tmp25 = cResult[21];
  }
  const Text = Text_Text.Text;
  const body = twoWayLinkStyles.body;
  const intl2 = intl4.intl;
  const formatResult = intl2.format(intl4.t.yhozpz, { helpdeskArticleUrl: articleURL });
  cResult[0] = twoWayLinkStyles.body;
  cResult[1] = twoWayLinkStyles.container;
  cResult[2] = twoWayLinkStyles.content;
  cResult[3] = twoWayLinkStyles.title;
  cResult[4] = tmp4.image;
  cResult[5] = Text;
  cResult[6] = hasOwnProperty;
  cResult[7] = hasOwnProperty;
  cResult[8] = "text-md/medium";
  cResult[9] = "text-default";
  cResult[10] = body;
  cResult[11] = formatResult;
  cResult[12] = content;
  cResult[13] = tmp19;
  cResult[14] = tmp25;
  cResult[15] = container;
  tmp13 = tmp25;
  tmp14 = container;
  tmp12 = tmp19;
  tmp11 = content;
  tmp10 = formatResult;
  tmp9 = body;
  str2 = "text-default";
  str = "text-md/medium";
  tmp8 = hasOwnProperty;
  tmp7 = hasOwnProperty;
  tmp6 = Text;
}) : ((onClose) => {
  let Button;
  let intl;
  let intl2;
  let intl3;
  let items;
  let items1;
  let obj10;
  let obj9;
  onClose = onClose.onClose;
  const tmp = closure_9();
  let obj = TwoWayLinkStyles;
  const twoWayLinkStyles = obj.useTwoWayLinkStyles();
  const obj2 = HelpdeskUtilsDefault;
  const articleURL = obj2.getArticleURL(HelpdeskArticles.XBOX_CONNECTION);
  const obj4 = { style: twoWayLinkStyles.content, children: items };
  items = [, , ];
  const obj3 = { style: twoWayLinkStyles.container, children: items1 };
  const obj5 = {
    source: react.useMemo(() => {
      const obj = { uri: _modDef8790 };
      return obj;
    }, []),
    style: tmp.image
  };
  items[0] = metroImportDefault(React3, obj5);
  const obj6 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: twoWayLinkStyles.title, children: intl.string(intl4.t.jHytat) };
  const Text = Text_Text.Text;
  intl = intl4.intl;
  items[1] = metroImportDefault(Text, obj6);
  const obj7 = { variant: "text-md/medium", color: "text-default", style: twoWayLinkStyles.body, children: intl2.format(intl4.t.yhozpz, { helpdeskArticleUrl: articleURL }) };
  const Text2 = Text_Text.Text;
  intl2 = intl4.intl;
  items[2] = metroImportDefault(Text2, obj7);
  items1 = [metroImportAll(hasOwnProperty, obj4), ];
  const obj8 = { bottom: true, style: twoWayLinkStyles.footerContainer, children: metroImportDefault(hasOwnProperty, obj9) };
  obj9 = { style: twoWayLinkStyles.footerButton, children: metroImportDefault(Button, obj10) };
  const SafeAreaPaddingView = common_SafeAreaView.SafeAreaPaddingView;
  obj10 = { size: "lg", variant: "primary", text: intl3.string(intl4.t.i4jeWR), onPress: onClose };
  Button = components_Button_Button.Button;
  intl3 = intl4.intl;
  items1[1] = metroImportDefault(SafeAreaPaddingView, obj8);
  return metroImportAll(hasOwnProperty, obj3);
});
const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/xbox/XboxLinkEducation.tsx");

export default tmp4;