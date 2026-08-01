// === Module 8946: TwoWayLinkLanding ===

// Module 8946 (TwoWayLinkLanding)
import "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import set from "set";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c3;
let c4;
let closure_6;
let error;
let obj1;
const require = arg1;
({ Image: obj1, View: c3, ScrollView: c4 } = get_ActivityIndicator);
({ jsx: closure_6, jsxs: error } = jsxProd);
let closure_8 = createCacheKey.createStyles({ image: { marginBottom: 32 }, valueProps: { marginTop: 24, maxWidth: "100%" } });
const result = require("set").fileFinishedImporting("modules/user_settings/connections/native/two_way_link/TwoWayLinkLanding.tsx");

export const TwoWayLinkLanding = function TwoWayLinkLanding(learnMoreLink) {
  let body;
  let headerConnect;
  let headerReconnect;
  let img;
  let imgStyle;
  let onNext;
  let require;
  let valueProps;
  ({ platformType: require, imgStyle, headerConnect, headerReconnect, valueProps } = learnMoreLink);
  learnMoreLink = learnMoreLink.learnMoreLink;
  ({ img, body, onNext } = learnMoreLink);
  const tmp = callback();
  let obj = require(valueProps[5]);
  const twoWayLinkStyles = obj.useTwoWayLinkStyles();
  let obj1 = require(valueProps[6]);
  const items = [set];
  obj = { style: twoWayLinkStyles.container, children: null };
  obj = { style: twoWayLinkStyles.content, children: null };
  obj1 = { source: img, style: null };
  const items1 = [tmp.image, ];
  const stateFromStores = obj1.useStateFromStores(items, () => {
    const account = outer1_5.getAccount(null, closure_0);
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
  obj1[1] = items1;
  const items2 = [closure_6(closure_2, obj1), , , ];
  const obj2 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: twoWayLinkStyles.title, accessibilityRole: "header", children: null };
  let tmp11 = headerConnect;
  if (stateFromStores) {
    tmp11 = headerConnect;
    if (null != headerReconnect) {
      tmp11 = headerReconnect;
    }
  }
  obj2[4] = tmp11;
  items2[1] = closure_6(require(valueProps[7]).Text, obj2);
  items2[2] = closure_6(require(valueProps[7]).Text, { variant: "text-md/medium", color: "text-default", style: twoWayLinkStyles.body, children: body });
  items2[3] = closure_6(closure_3, {
    style: tmp.valueProps,
    children: valueProps.map((label) => {
      let icon;
      let subLabel;
      label = label.label;
      ({ subLabel, icon } = label);
      const obj = { start: 0 === arg1, end: arg1 === valueProps.length - 1, subLabel, label: null, icon: null };
      obj[3] = outer1_6(outer1_0(valueProps[7]).Text, { variant: "text-sm/normal", color: "mobile-text-heading-primary", children: label });
      obj[4] = outer1_6(outer1_0(valueProps[8]).TableRow.Icon, { IconComponent: icon });
      return outer1_6(outer1_0(valueProps[8]).TableRow, obj, label);
    })
  });
  obj[1] = items2;
  const items3 = [closure_7(closure_3, obj), ];
  let tmp9Result = null;
  if (null != learnMoreLink) {
    const obj5 = { variant: "text-md/normal", color: "text-default", style: null, children: null };
    obj5[2] = twoWayLinkStyles.body;
    const intl = tmp2(tmp3[9]).intl;
    const obj6 = { helpCenterLink: null };
    obj6[0] = learnMoreLink;
    obj5[3] = intl.format(tmp2(tmp3[9]).t["/l3n+1"], obj6);
    tmp9Result = tmp9(tmp2(tmp3[7]).Text, obj5);
  }
  items3[1] = tmp9Result;
  const items4 = [closure_7(closure_4, { alwaysBounceVertical: false, children: items3 }), ];
  const obj7 = { bottom: true, style: twoWayLinkStyles.footerContainer, children: null };
  const obj8 = { spacing: 8, direction: "vertical", style: twoWayLinkStyles.footerButton, children: null };
  const obj9 = { variant: "primary", size: "lg", text: null, onPress: null };
  const intl2 = tmp2(tmp3[9]).intl;
  obj9[2] = intl2.string(require(valueProps[9]).t.LhlgY9);
  obj9[3] = onNext;
  obj8[3] = closure_6(require(valueProps[12]).Button, obj9);
  obj7[2] = closure_6(require(valueProps[11]).Stack, obj8);
  items4[1] = closure_6(require(valueProps[10]).SafeAreaPaddingView, obj7);
  obj[1] = items4;
  return closure_7(closure_3, obj);
};