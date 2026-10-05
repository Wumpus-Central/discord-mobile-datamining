// === Module 8741: TwoWayLinkLanding ===

// Module 8741 (TwoWayLinkLanding)
import Text_Text from "Text/Text" /* 4886 */;
import TableRow2 from "TableRow" /* 5993 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ConnectedAccountsStore from "ConnectedAccountsStore" /* 5440 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let platformType;

let c2;
let c3;
let closure_4;
let metroImportDefault;
let metroRequire;
({ Image: c2, View: c3, ScrollView: closure_4 } = react_native);
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let closure_8 = createStyles.createStyles({ image: { marginBottom: 32 }, valueProps: { marginTop: 24, maxWidth: "100%" } });
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((platformType) => {
  let body;
  let container;
  let content;
  let first;
  let footerButton;
  let footerContainer;
  let headerConnect;
  let headerReconnect;
  let img;
  let imgStyle;
  let intl;
  let items1;
  let items2;
  let items3;
  let learnMoreLink;
  let obj9;
  let onNext;
  let tmp8;
  let valueProps;
  let obj = platformType(valueProps[6]);
  const cResult = obj.c(47);
  platformType = platformType.platformType;
  ({ img, imgStyle, headerConnect, headerReconnect, body, valueProps } = platformType);
  ({ learnMoreLink, onNext } = platformType);
  const tmp4 = closure_8();
  const obj2 = platformType(valueProps[7]);
  const twoWayLinkStyles = obj2.useTwoWayLinkStyles();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ConnectedAccountsStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== platformType) {
    const fn = function h() {
      const account = ConnectedAccountsStore.getAccount(null, platformType);
      let twoWayLink;
      if (account != null) {
        twoWayLink = account.twoWayLink;
      }
      return false === twoWayLink;
    };
    cResult[1] = platformType;
    cResult[2] = fn;
    tmp8 = fn;
  } else {
    tmp8 = cResult[2];
  }
  const tmpResult = platformType(valueProps[8]);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp8);
  ({ container, content } = twoWayLinkStyles);
  if (imgStyle == null) {
    imgStyle = false;
  }
  if (cResult[3] === tmp4.image) {
    let tmp10;
    if (cResult[4] === imgStyle) {
      tmp10 = cResult[5];
    }
    if (cResult[6] === img) {
      let tmp11;
      if (cResult[7] === tmp10) {
        tmp11 = cResult[8];
      }
      let tmp15 = headerConnect;
      if (stateFromStores) {
        tmp15 = headerConnect;
        if (null != headerReconnect) {
          tmp15 = headerReconnect;
        }
      }
      if (cResult[9] === twoWayLinkStyles.title) {
        let tmp16;
        if (cResult[10] === tmp15) {
          tmp16 = cResult[11];
        }
        if (cResult[12] === body) {
          let tmp19;
          let tmp22;
          if (cResult[13] === twoWayLinkStyles.body) {
            tmp19 = cResult[14];
          }
          const valueProps2 = tmp4.valueProps;
          if (cResult[15] !== valueProps) {
            let tmp23;
            if (cResult[17] !== valueProps.length) {
              const fn2 = function z(label, arg1) {
                let icon;
                let subLabel;
                label = label.label;
                ({ subLabel, icon } = label);
                const obj = { start: 0 === arg1, end: arg1 === valueProps.length - 1, subLabel, label: metroRequire(Text_Text.Text, { variant: "text-sm/normal", color: "mobile-text-heading-primary", children: label }), icon: metroRequire(TableRow2.TableRow.Icon, { IconComponent: icon }) };
                const TableRow = TableRow2.TableRow;
                return metroRequire(TableRow, obj, label);
              };
              cResult[17] = valueProps.length;
              cResult[18] = fn2;
              tmp23 = fn2;
            } else {
              tmp23 = cResult[18];
            }
            const mapped = valueProps.map(tmp23);
            cResult[15] = valueProps;
            cResult[16] = mapped;
            tmp22 = mapped;
          } else {
            tmp22 = cResult[16];
          }
          if (cResult[19] === tmp4.valueProps) {
            let tmp25;
            if (cResult[20] === tmp22) {
              tmp25 = cResult[21];
            }
            if (cResult[22] === twoWayLinkStyles.content) {
              if (cResult[23] === tmp19) {
                if (cResult[24] === tmp25) {
                  if (cResult[25] === tmp11) {
                    let tmp29;
                    if (cResult[26] === tmp16) {
                      tmp29 = cResult[27];
                    }
                    if (cResult[28] === learnMoreLink) {
                      let tmp33;
                      if (cResult[29] === twoWayLinkStyles.body) {
                        tmp33 = cResult[30];
                      }
                      if (cResult[31] === tmp29) {
                        let tmp36;
                        let tmp40;
                        let tmp42;
                        if (cResult[32] === tmp33) {
                          tmp36 = cResult[33];
                        }
                        const _Symbol = Symbol;
                        ({ footerContainer, footerButton } = twoWayLinkStyles);
                        if (cResult[34] === Symbol.for("react.memo_cache_sentinel")) {
                          const intl2 = tmp(valueProps[11]).intl;
                          const stringResult = intl2.string(platformType(valueProps[11]).t.LhlgY9);
                          cResult[34] = stringResult;
                          tmp40 = stringResult;
                        } else {
                          tmp40 = cResult[34];
                        }
                        if (cResult[35] !== onNext) {
                          const obj3 = { variant: "primary", size: "lg", text: tmp40, onPress: onNext };
                          const tmp44 = closure_6(platformType(valueProps[12]).Button, obj3);
                          cResult[35] = onNext;
                          cResult[36] = tmp44;
                          tmp42 = tmp44;
                        } else {
                          tmp42 = cResult[36];
                        }
                        if (cResult[37] === twoWayLinkStyles.footerButton) {
                          let tmp45;
                          if (cResult[38] === tmp42) {
                            tmp45 = cResult[39];
                          }
                          if (cResult[40] === twoWayLinkStyles.footerContainer) {
                            let tmp48;
                            if (cResult[41] === tmp45) {
                              tmp48 = cResult[42];
                            }
                            if (cResult[43] === twoWayLinkStyles.container) {
                              if (cResult[44] === tmp36) {
                                let tmp51;
                                if (cResult[45] === tmp48) {
                                  tmp51 = cResult[46];
                                }
                                return tmp51;
                              }
                            }
                            const obj4 = { style: container, children: items1 };
                            items1 = [tmp36, tmp48];
                            const tmp54 = closure_7(closure_3, obj4);
                            cResult[43] = twoWayLinkStyles.container;
                            cResult[44] = tmp36;
                            cResult[45] = tmp48;
                            cResult[46] = tmp54;
                            tmp51 = tmp54;
                          }
                          const obj5 = { bottom: true, style: footerContainer, children: tmp45 };
                          const tmp50 = closure_6(platformType(valueProps[14]).SafeAreaPaddingView, obj5);
                          cResult[40] = twoWayLinkStyles.footerContainer;
                          cResult[41] = tmp45;
                          cResult[42] = tmp50;
                          tmp48 = tmp50;
                        }
                        const obj6 = { spacing: 8, direction: "vertical", style: footerButton, children: tmp42 };
                        const tmp47 = closure_6(platformType(valueProps[13]).Stack, obj6);
                        cResult[37] = twoWayLinkStyles.footerButton;
                        cResult[38] = tmp42;
                        cResult[39] = tmp47;
                        tmp45 = tmp47;
                      }
                      const obj7 = { alwaysBounceVertical: false, children: items2 };
                      items2 = [tmp29, tmp33];
                      const tmp39 = closure_7(closure_4, obj7);
                      cResult[31] = tmp29;
                      cResult[32] = tmp33;
                      cResult[33] = tmp39;
                      tmp36 = tmp39;
                    }
                    let tmp34 = null;
                    if (null != learnMoreLink) {
                      const obj8 = { variant: "text-md/normal", color: "text-default", style: twoWayLinkStyles.body, children: intl.format(platformType(valueProps[11]).t["/l3n+1"], obj9) };
                      const Text = tmp(valueProps[9]).Text;
                      intl = tmp(valueProps[11]).intl;
                      obj9 = { helpCenterLink: learnMoreLink };
                      tmp34 = closure_6(Text, obj8);
                    }
                    cResult[28] = learnMoreLink;
                    cResult[29] = twoWayLinkStyles.body;
                    cResult[30] = tmp34;
                    tmp33 = tmp34;
                  }
                }
              }
            }
            const obj10 = { style: content, children: items3 };
            items3 = [tmp11, tmp16, tmp19, tmp25];
            const tmp32 = closure_7(closure_3, obj10);
            cResult[22] = twoWayLinkStyles.content;
            cResult[23] = tmp19;
            cResult[24] = tmp25;
            cResult[25] = tmp11;
            cResult[26] = tmp16;
            cResult[27] = tmp32;
            tmp29 = tmp32;
          }
          const obj11 = { style: valueProps2, children: tmp22 };
          const tmp28 = closure_6(closure_3, obj11);
          cResult[19] = tmp4.valueProps;
          cResult[20] = tmp22;
          cResult[21] = tmp28;
          tmp25 = tmp28;
        }
        const obj12 = { variant: "text-md/medium", color: "text-default", style: twoWayLinkStyles.body, children: body };
        const tmp21 = closure_6(platformType(valueProps[9]).Text, obj12);
        cResult[12] = body;
        cResult[13] = twoWayLinkStyles.body;
        cResult[14] = tmp21;
        tmp19 = tmp21;
      }
      const obj13 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: twoWayLinkStyles.title, accessibilityRole: "header", children: tmp15 };
      const tmp18 = closure_6(platformType(valueProps[9]).Text, obj13);
      cResult[9] = twoWayLinkStyles.title;
      cResult[10] = tmp15;
      cResult[11] = tmp18;
      tmp16 = tmp18;
    }
    const obj14 = { source: img, style: tmp10 };
    const tmp14 = closure_6(closure_2, obj14);
    cResult[6] = img;
    cResult[7] = tmp10;
    cResult[8] = tmp14;
    tmp11 = tmp14;
  }
  const items4 = [tmp4.image, imgStyle];
  cResult[3] = tmp4.image;
  cResult[4] = imgStyle;
  cResult[5] = items4;
  tmp10 = items4;
}) : ((learnMoreLink) => {
  let Button;
  let Stack;
  let body;
  let headerConnect;
  let headerReconnect;
  let img;
  let imgStyle;
  let intl;
  let intl2;
  let items1;
  let items2;
  let items4;
  let obj10;
  let obj12;
  let obj13;
  let onNext;
  let tmp11;
  let valueProps;
  ({ platformType: require, imgStyle, headerConnect, headerReconnect, valueProps } = learnMoreLink);
  learnMoreLink = learnMoreLink.learnMoreLink;
  ({ img, body, onNext } = learnMoreLink);
  const tmp = closure_8();
  let obj = require("TwoWayLinkStyles");
  const twoWayLinkStyles = obj.useTwoWayLinkStyles();
  const items = [ConnectedAccountsStore];
  const obj5 = { source: img, style: items1 };
  items1 = [tmp.image, ];
  const obj3 = { style: twoWayLinkStyles.container, children: items4 };
  const obj4 = { style: twoWayLinkStyles.content, children: items2 };
  const obj2 = require("get initialized");
  const stateFromStores = obj2.useStateFromStores(items, () => {
    const account = ConnectedAccountsStore.getAccount(null, require);
    let twoWayLink;
    if (account != null) {
      twoWayLink = account.twoWayLink;
    }
    return false === twoWayLink;
  });
  if (imgStyle == null) {
    imgStyle = false;
  }
  items1[1] = imgStyle;
  items2 = [closure_6(closure_2, obj5), , , ];
  const obj6 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: twoWayLinkStyles.title, accessibilityRole: "header", children: tmp11 };
  tmp11 = headerConnect;
  const Text = require("Text/Text").Text;
  if (stateFromStores) {
    tmp11 = headerConnect;
    if (null != headerReconnect) {
      tmp11 = headerReconnect;
    }
  }
  items2[1] = closure_6(Text, obj6);
  const obj7 = { variant: "text-md/medium", color: "text-default", style: twoWayLinkStyles.body, children: body };
  items2[2] = closure_6(require("Text/Text").Text, obj7);
  const obj8 = {
    style: tmp.valueProps,
    children: valueProps.map((label, index) => {
      let icon;
      let subLabel;
      label = label.label;
      ({ subLabel, icon } = label);
      const obj = { start: 0 === index, end: index === valueProps.length - 1, subLabel, label: metroRequire(Text_Text.Text, { variant: "text-sm/normal", color: "mobile-text-heading-primary", children: label }), icon: metroRequire(TableRow2.TableRow.Icon, { IconComponent: icon }) };
      const TableRow = TableRow2.TableRow;
      return metroRequire(TableRow, obj, label);
    })
  };
  items2[3] = closure_6(closure_3, obj8);
  const items3 = [closure_7(closure_3, obj4), ];
  let tmp9Result = null;
  if (null != learnMoreLink) {
    const obj9 = { variant: "text-md/normal", color: "text-default", style: twoWayLinkStyles.body, children: intl.format(require("intl").t["/l3n+1"], obj10) };
    const Text2 = require("Text/Text").Text;
    intl = require("intl").intl;
    obj10 = { helpCenterLink: learnMoreLink };
    tmp9Result = closure_6(Text2, obj9);
  }
  items3[1] = tmp9Result;
  items4 = [closure_7(closure_4, { alwaysBounceVertical: false, children: items3 }), ];
  const obj11 = { bottom: true, style: twoWayLinkStyles.footerContainer, children: closure_6(Stack, obj12) };
  const SafeAreaPaddingView = require("common/SafeAreaView").SafeAreaPaddingView;
  obj12 = { spacing: 8, direction: "vertical", style: twoWayLinkStyles.footerButton, children: closure_6(Button, obj13) };
  Stack = require("Stack/Stack").Stack;
  obj13 = { variant: "primary", size: "lg", text: intl2.string(require("intl").t.LhlgY9), onPress: onNext };
  Button = require("components/Button/Button").Button;
  intl2 = require("intl").intl;
  items4[1] = closure_6(SafeAreaPaddingView, obj11);
  return closure_7(closure_3, obj3);
});
const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/TwoWayLinkLanding.tsx");

export const TwoWayLinkLanding = tmp5;