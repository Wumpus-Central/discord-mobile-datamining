// === Module 8773: TwoWayLinkLanding ===

// Module 8773 (TwoWayLinkLanding)
import Text_Text from "Text/Text" /* 4892 */;
import TableRow from "TableRow" /* 6000 */;
import noop from "module_19" /* 19 */;
import ConnectedAccountsStore from "ConnectedAccountsStore" /* 5447 */;

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ Image: c2, View: c3, ScrollView: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4896);
let closure_8 = createStyles.createStyles({ image: { marginBottom: 32 }, valueProps: { marginTop: 24, maxWidth: "100%" } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/TwoWayLinkLanding.tsx");

export const TwoWayLinkLanding = ReactCompilerGating.isReactCompilerEnabled() ? ((platformType) => {
  const cResult = platformType(valueProps[6]).c(47);
  platformType = platformType.platformType;
  ({ img, imgStyle, headerConnect, headerReconnect, body, valueProps } = platformType);
  ({ learnMoreLink, onNext } = platformType);
  const tmp4 = closure_8();
  const obj = platformType(valueProps[6]);
  const twoWayLinkStyles = platformType(valueProps[7]).useTwoWayLinkStyles();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ConnectedAccountsStore];
    cResult[0] = items;
    let first = items;
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
    let tmp8 = fn;
  } else {
    tmp8 = cResult[2];
  }
  const obj2 = platformType(valueProps[7]);
  const stateFromStores = platformType(valueProps[8]).useStateFromStores(first, tmp8);
  ({ container, content } = twoWayLinkStyles);
  if (imgStyle == null) {
    imgStyle = false;
  }
  if (cResult[3] === tmp4.image) {
    if (cResult[4] === imgStyle) {
      let tmp10 = cResult[5];
    }
    if (cResult[6] === img) {
      if (cResult[7] === tmp10) {
        let tmp11 = cResult[8];
      }
      let tmp15 = headerConnect;
      if (stateFromStores) {
        tmp15 = headerConnect;
        if (null != headerReconnect) {
          tmp15 = headerReconnect;
        }
      }
      if (cResult[9] === twoWayLinkStyles.title) {
        if (cResult[10] === tmp15) {
          let tmp16 = cResult[11];
        }
        if (cResult[12] === body) {
          if (cResult[13] === twoWayLinkStyles.body) {
            let tmp19 = cResult[14];
          }
          if (cResult[15] !== valueProps) {
            if (cResult[17] !== valueProps.length) {
              const fn2 = function z(label, arg1) {
                label = label.label;
                ({ subLabel, icon } = label);
                return timestampProducer(TableRow.TableRow, { start: 0 === arg1, end: arg1 === valueProps.length - 1, subLabel, label: timestampProducer(Text_Text.Text, { variant: "text-sm/normal", color: "mobile-text-heading-primary", children: label }), icon: timestampProducer(TableRow.TableRow.Icon, { IconComponent: icon }) }, label);
              };
              cResult[17] = valueProps.length;
              cResult[18] = fn2;
              let tmp24 = fn2;
            } else {
              tmp24 = cResult[18];
            }
            const mapped = valueProps.map(tmp24);
            cResult[15] = valueProps;
            cResult[16] = mapped;
          } else {
            if (cResult[19] === tmp4.valueProps) {
              if (cResult[20] === tmp23) {
                let tmp27 = cResult[21];
              }
              if (cResult[22] === twoWayLinkStyles.content) {
                if (cResult[23] === tmp19) {
                  if (cResult[24] === tmp27) {
                    if (cResult[25] === tmp11) {
                      if (cResult[26] === tmp16) {
                        let tmp31 = cResult[27];
                      }
                      if (cResult[28] === learnMoreLink) {
                        if (cResult[29] === twoWayLinkStyles.body) {
                          let tmp35 = cResult[30];
                        }
                        if (cResult[31] === tmp31) {
                          if (cResult[32] === tmp35) {
                            let tmp38 = cResult[33];
                          }
                          const _Symbol = Symbol;
                          ({ footerContainer, footerButton } = twoWayLinkStyles);
                          if (cResult[34] === Symbol.for("react.memo_cache_sentinel")) {
                            const intl2 = tmp(valueProps[11]).intl;
                            const stringResult = intl2.string(tmp(valueProps[11]).t.LhlgY9);
                            cResult[34] = stringResult;
                            let tmp42 = stringResult;
                          } else {
                            tmp42 = cResult[34];
                          }
                          if (cResult[35] !== onNext) {
                            const obj3 = { variant: "primary", size: "lg", text: tmp42, onPress: onNext };
                            const tmp46 = closure_6(tmp(valueProps[12]).Button, obj3);
                            cResult[35] = onNext;
                            cResult[36] = tmp46;
                            let tmp44 = tmp46;
                          } else {
                            tmp44 = cResult[36];
                          }
                          if (cResult[37] === twoWayLinkStyles.footerButton) {
                            if (cResult[38] === tmp44) {
                              let tmp47 = cResult[39];
                            }
                            if (cResult[40] === twoWayLinkStyles.footerContainer) {
                              if (cResult[41] === tmp47) {
                                let tmp50 = cResult[42];
                              }
                              if (cResult[43] === twoWayLinkStyles.container) {
                                if (cResult[44] === tmp38) {
                                  if (cResult[45] === tmp50) {
                                    let tmp53 = cResult[46];
                                  }
                                  return tmp53;
                                }
                              }
                              const obj4 = { style: container, children: null };
                              const items1 = [tmp38, tmp50];
                              obj4.children = items1;
                              const tmp56 = closure_7(closure_3, obj4);
                              cResult[43] = twoWayLinkStyles.container;
                              cResult[44] = tmp38;
                              cResult[45] = tmp50;
                              cResult[46] = tmp56;
                              tmp53 = tmp56;
                            }
                            const obj5 = { bottom: true, style: footerContainer, children: tmp47 };
                            const tmp52 = closure_6(tmp(valueProps[14]).SafeAreaPaddingView, obj5);
                            cResult[40] = twoWayLinkStyles.footerContainer;
                            cResult[41] = tmp47;
                            cResult[42] = tmp52;
                            tmp50 = tmp52;
                          }
                          const obj6 = { spacing: 8, direction: "vertical", style: footerButton, children: tmp44 };
                          const tmp49 = closure_6(tmp(valueProps[13]).Stack, obj6);
                          cResult[37] = twoWayLinkStyles.footerButton;
                          cResult[38] = tmp44;
                          cResult[39] = tmp49;
                          tmp47 = tmp49;
                        }
                        const obj7 = { alwaysBounceVertical: false, children: null };
                        const items2 = [tmp31, tmp35];
                        obj7.children = items2;
                        const tmp41 = closure_7(closure_4, obj7);
                        cResult[31] = tmp31;
                        cResult[32] = tmp35;
                        cResult[33] = tmp41;
                        tmp38 = tmp41;
                      }
                      let tmp36 = null;
                      if (null != learnMoreLink) {
                        const obj8 = { variant: "text-md/normal", color: "text-default", style: twoWayLinkStyles.body, children: null };
                        const intl = tmp(valueProps[11]).intl;
                        const obj9 = { helpCenterLink: learnMoreLink };
                        obj8.children = intl.format(tmp(valueProps[11]).t["/l3n+1"], obj9);
                        tmp36 = closure_6(tmp(valueProps[9]).Text, obj8);
                      }
                      cResult[28] = learnMoreLink;
                      cResult[29] = twoWayLinkStyles.body;
                      cResult[30] = tmp36;
                      tmp35 = tmp36;
                    }
                  }
                }
              }
              const obj10 = { style: content, children: null };
              const items3 = [tmp11, tmp16, tmp19, tmp27];
              obj10.children = items3;
              const tmp34 = closure_7(closure_3, obj10);
              cResult[22] = twoWayLinkStyles.content;
              cResult[23] = tmp19;
              cResult[24] = tmp27;
              cResult[25] = tmp11;
              cResult[26] = tmp16;
              cResult[27] = tmp34;
              tmp31 = tmp34;
            }
            const obj11 = { style: tmp22, children: cResult[16] };
            const tmp30 = closure_6(closure_3, obj11);
            cResult[19] = tmp4.valueProps;
            cResult[20] = cResult[16];
            cResult[21] = tmp30;
            tmp27 = tmp30;
          }
        }
        const obj12 = { variant: "text-md/medium", color: "text-default", style: twoWayLinkStyles.body, children: body };
        const tmp21 = closure_6(tmp(valueProps[9]).Text, obj12);
        cResult[12] = body;
        cResult[13] = twoWayLinkStyles.body;
        cResult[14] = tmp21;
        tmp19 = tmp21;
      }
      const obj13 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: twoWayLinkStyles.title, accessibilityRole: "header", children: tmp15 };
      const tmp18 = closure_6(tmp(valueProps[9]).Text, obj13);
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
  const tmpResult = platformType(valueProps[8]);
}) : ((learnMoreLink) => {
  ({ platformType: require, imgStyle, headerConnect, headerReconnect, valueProps } = learnMoreLink);
  learnMoreLink = learnMoreLink.learnMoreLink;
  ({ img, body, onNext } = learnMoreLink);
  const tmp = closure_8();
  const twoWayLinkStyles = require("TwoWayLinkStyles").useTwoWayLinkStyles();
  const obj = require("TwoWayLinkStyles");
  const items = [ConnectedAccountsStore];
  const obj3 = { style: twoWayLinkStyles.container, children: null };
  const obj4 = { style: twoWayLinkStyles.content, children: null };
  const obj5 = { source: img, style: null };
  const items1 = [tmp.image, ];
  const stateFromStores = require("initialize").useStateFromStores(items, () => {
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
  obj5.style = items1;
  const items2 = [closure_6(closure_2, obj5), , , ];
  const obj6 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: twoWayLinkStyles.title, accessibilityRole: "header", children: null };
  let tmp11 = headerConnect;
  if (stateFromStores) {
    tmp11 = headerConnect;
    if (null != headerReconnect) {
      tmp11 = headerReconnect;
    }
  }
  obj6.children = tmp11;
  items2[1] = closure_6(require("Text/Text").Text, obj6);
  items2[2] = closure_6(require("Text/Text").Text, { variant: "text-md/medium", color: "text-default", style: twoWayLinkStyles.body, children: body });
  const obj2 = require("initialize");
  const obj7 = { variant: "text-md/medium", color: "text-default", style: twoWayLinkStyles.body, children: body };
  items2[3] = closure_6(closure_3, {
    style: tmp.valueProps,
    children: valueProps.map((label, index) => {
      label = label.label;
      ({ subLabel, icon } = label);
      return timestampProducer(TableRow.TableRow, { start: 0 === index, end: index === valueProps.length - 1, subLabel, label: timestampProducer(Text_Text.Text, { variant: "text-sm/normal", color: "mobile-text-heading-primary", children: label }), icon: timestampProducer(TableRow.TableRow.Icon, { IconComponent: icon }) }, label);
    })
  });
  obj4.children = items2;
  const items3 = [closure_7(closure_3, obj4), ];
  let tmp9Result = null;
  if (null != learnMoreLink) {
    const obj9 = { variant: "text-md/normal", color: "text-default", style: twoWayLinkStyles.body, children: null };
    const intl = require("util").intl;
    const obj10 = { helpCenterLink: learnMoreLink };
    obj9.children = intl.format(require("util").t["/l3n+1"], obj10);
    tmp9Result = closure_6(require("Text/Text").Text, obj9);
  }
  items3[1] = tmp9Result;
  const items4 = [closure_7(closure_4, { alwaysBounceVertical: false, children: items3 }), ];
  const obj11 = { bottom: true, style: twoWayLinkStyles.footerContainer, children: null };
  const obj12 = { spacing: 8, direction: "vertical", style: twoWayLinkStyles.footerButton, children: null };
  const obj13 = { variant: "primary", size: "lg", text: null, onPress: null };
  const intl2 = require("util").intl;
  obj13.text = intl2.string(require("util").t.LhlgY9);
  obj13.onPress = onNext;
  obj12.children = closure_6(require("components/Button/Button").Button, obj13);
  obj11.children = closure_6(require("Stack/Stack").Stack, obj12);
  items4[1] = closure_6(require("common/SafeAreaView").SafeAreaPaddingView, obj11);
  obj3.children = items4;
  return closure_7(closure_3, obj3);
});