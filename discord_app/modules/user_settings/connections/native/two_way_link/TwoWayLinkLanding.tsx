// === Module 9119: TwoWayLinkLanding ===

// Module 9119 (TwoWayLinkLanding)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1126 */;
import Text_Text from "Text/Text" /* 5086 */;
import Stack_Stack from "Stack/Stack" /* 5373 */;
import components_Button_Button from "components/Button/Button" /* 5375 */;
import TableRow from "TableRow" /* 6184 */;
import common_SafeAreaView from "common/SafeAreaView" /* 6803 */;
import TwoWayLinkStyles from "TwoWayLinkStyles" /* 9120 */;
import noop from "module_19" /* 19 */;
import ConnectedAccountsStore from "ConnectedAccountsStore" /* 5757 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: c3, ScrollView: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(5090);
let closure_8 = createStyles.createStyles({ image: { marginBottom: 32 }, valueProps: { marginTop: 24, maxWidth: "100%" } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/TwoWayLinkLanding.tsx");

export const TwoWayLinkLanding = ReactCompilerGating.isReactCompilerEnabled() ? (function TwoWayLinkLanding(platformType) {
  const cResult = platformType(576).c(47);
  platformType = platformType.platformType;
  ({ img, imgStyle, headerConnect, headerReconnect, body, valueProps } = platformType);
  ({ learnMoreLink, onNext } = platformType);
  const tmp4 = closure_8();
  const obj = platformType(576);
  const twoWayLinkStyles = platformType(9120).useTwoWayLinkStyles();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ConnectedAccountsStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== platformType) {
    const fn = function u() {
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
  const obj2 = platformType(9120);
  const stateFromStores = platformType(504).useStateFromStores(first, tmp8);
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
              class M {
                constructor(arg0, arg1) {
                  label = platformType.label;
                  ({ subLabel, icon } = platformType);
                  obj = { start: 0 === arg1, end: arg1 === valueProps.length - 1, subLabel, label: jsx(closure_0(closure_2[10]).Text, { variant: "text-sm/normal", color: "mobile-text-heading-primary", children: label }), icon: jsx(closure_0(closure_2[11]).TableRow.Icon, { IconComponent: icon }) };
                  return jsx(closure_0(closure_2[11]).TableRow, obj, label);
                }
              }
              cResult[17] = valueProps.length;
              cResult[18] = M;
            } else {
              class M {
                constructor(arg0, arg1) {
                  label = platformType.label;
                  ({ subLabel, icon } = platformType);
                  obj = { start: 0 === arg1, end: arg1 === valueProps.length - 1, subLabel, label: jsx(closure_0(closure_2[10]).Text, { variant: "text-sm/normal", color: "mobile-text-heading-primary", children: label }), icon: jsx(closure_0(closure_2[11]).TableRow.Icon, { IconComponent: icon }) };
                  return jsx(closure_0(closure_2[11]).TableRow, obj, label);
                }
              }
            }
            const mapped = valueProps.map(M);
            cResult[15] = valueProps;
            cResult[16] = mapped;
          } else {
            class M {
              constructor(arg0, arg1) {
                label = platformType.label;
                ({ subLabel, icon } = platformType);
                obj = { start: 0 === arg1, end: arg1 === valueProps.length - 1, subLabel, label: jsx(closure_0(closure_2[10]).Text, { variant: "text-sm/normal", color: "mobile-text-heading-primary", children: label }), icon: jsx(closure_0(closure_2[11]).TableRow.Icon, { IconComponent: icon }) };
                return jsx(closure_0(closure_2[11]).TableRow, obj, label);
              }
            }
            if (cResult[19] === tmp4.valueProps) {
              class M {
                constructor(arg0, arg1) {
                  label = platformType.label;
                  ({ subLabel, icon } = platformType);
                  obj = { start: 0 === arg1, end: arg1 === valueProps.length - 1, subLabel, label: jsx(closure_0(closure_2[10]).Text, { variant: "text-sm/normal", color: "mobile-text-heading-primary", children: label }), icon: jsx(closure_0(closure_2[11]).TableRow.Icon, { IconComponent: icon }) };
                  return jsx(closure_0(closure_2[11]).TableRow, obj, label);
                }
              }
              if (cResult[22] === twoWayLinkStyles.content) {
                class M {
                  constructor(arg0, arg1) {
                    label = platformType.label;
                    ({ subLabel, icon } = platformType);
                    obj = { start: 0 === arg1, end: arg1 === valueProps.length - 1, subLabel, label: jsx(closure_0(closure_2[10]).Text, { variant: "text-sm/normal", color: "mobile-text-heading-primary", children: label }), icon: jsx(closure_0(closure_2[11]).TableRow.Icon, { IconComponent: icon }) };
                    return jsx(closure_0(closure_2[11]).TableRow, obj, label);
                  }
                }
              }
              const obj3 = { style: content, children: null };
              const items1 = [tmp11, tmp16, tmp19, tmp27];
              obj3.children = items1;
              const tmp34 = closure_7(closure_3, obj3);
              cResult[22] = twoWayLinkStyles.content;
              cResult[23] = tmp19;
              cResult[24] = tmp27;
              cResult[25] = tmp11;
              cResult[26] = tmp16;
              cResult[27] = tmp34;
            }
            const obj4 = { style: tmp22, children: tmp23 };
            const tmp30 = closure_6(closure_3, obj4);
            cResult[19] = tmp4.valueProps;
            cResult[20] = tmp23;
            cResult[21] = tmp30;
          }
        }
        const obj5 = { variant: "text-md/medium", color: "text-default", style: twoWayLinkStyles.body, children: body };
        const tmp21 = closure_6(tmp(5086).Text, obj5);
        cResult[12] = body;
        cResult[13] = twoWayLinkStyles.body;
        cResult[14] = tmp21;
        tmp19 = tmp21;
      }
      const obj6 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: twoWayLinkStyles.title, accessibilityRole: "header", children: tmp15 };
      const tmp18 = closure_6(tmp(5086).Text, obj6);
      cResult[9] = twoWayLinkStyles.title;
      cResult[10] = tmp15;
      cResult[11] = tmp18;
      tmp16 = tmp18;
    }
    const obj7 = { source: img, style: tmp10 };
    const tmp14 = closure_6(valueProps(6164), obj7);
    cResult[6] = img;
    cResult[7] = tmp10;
    cResult[8] = tmp14;
    tmp11 = tmp14;
  }
  const items2 = [tmp4.image, imgStyle];
  cResult[3] = tmp4.image;
  cResult[4] = imgStyle;
  cResult[5] = items2;
  tmp10 = items2;
  const tmpResult = platformType(504);
}) : (function TwoWayLinkLanding(learnMoreLink) {
  ({ platformType: require, imgStyle, headerConnect, headerReconnect, valueProps } = learnMoreLink);
  learnMoreLink = learnMoreLink.learnMoreLink;
  ({ img, body, onNext } = learnMoreLink);
  const tmp = closure_8();
  const twoWayLinkStyles = TwoWayLinkStyles.useTwoWayLinkStyles();
  const items = [ConnectedAccountsStore];
  const obj3 = { style: twoWayLinkStyles.container, children: null };
  const obj4 = { style: twoWayLinkStyles.content, children: null };
  const stateFromStores = initialize.useStateFromStores(items, () => {
    const account = ConnectedAccountsStore.getAccount(null, _require);
    let twoWayLink;
    if (account != null) {
      twoWayLink = account.twoWayLink;
    }
    return false === twoWayLink;
  });
  const obj5 = { source: img, style: null };
  const items1 = [tmp.image, ];
  if (imgStyle == null) {
    imgStyle = false;
  }
  items1[1] = imgStyle;
  obj5.style = items1;
  const items2 = [closure_6(valueProps(6164), obj5), , , ];
  const obj6 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: twoWayLinkStyles.title, accessibilityRole: "header", children: null };
  let tmp11 = headerConnect;
  if (stateFromStores) {
    tmp11 = headerConnect;
    if (null != headerReconnect) {
      tmp11 = headerReconnect;
    }
  }
  obj6.children = tmp11;
  items2[1] = closure_6(Text_Text.Text, obj6);
  items2[2] = closure_6(Text_Text.Text, { variant: "text-md/medium", color: "text-default", style: twoWayLinkStyles.body, children: body });
  const obj7 = { variant: "text-md/medium", color: "text-default", style: twoWayLinkStyles.body, children: body };
  const tmp10 = valueProps(6164);
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
    const intl = util.intl;
    const obj10 = { helpCenterLink: learnMoreLink };
    obj9.children = intl.format(util.t["/l3n+1"], obj10);
    tmp9Result = closure_6(Text_Text.Text, obj9);
  }
  items3[1] = tmp9Result;
  const items4 = [closure_7(closure_4, { alwaysBounceVertical: false, children: items3 }), ];
  const obj11 = { bottom: true, style: twoWayLinkStyles.footerContainer, children: null };
  const obj12 = { spacing: 8, direction: "vertical", style: twoWayLinkStyles.footerButton, children: null };
  const obj13 = { variant: "primary", size: "lg", text: null, onPress: null };
  const intl2 = util.intl;
  obj13.text = intl2.string(util.t.LhlgY9);
  obj13.onPress = onNext;
  obj12.children = closure_6(components_Button_Button.Button, obj13);
  obj11.children = closure_6(Stack_Stack.Stack, obj12);
  items4[1] = closure_6(common_SafeAreaView.SafeAreaPaddingView, obj11);
  obj3.children = items4;
  return closure_7(closure_3, obj3);
});