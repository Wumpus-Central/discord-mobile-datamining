// discord_app/modules/user_settings/connections/native/two_way_link/TwoWayLinkLanding.tsx
import noopAll from "../../../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../../../_runtime/00017_get_ActivityIndicator.js";
import set from "../../../../../stores/ConnectedAccountsStore.tsx";
import jsxProd from "../../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../../design/components/Styles/native/createStyles.tsx";

const require = fn;
noopAll;
({ Image: obj1, View: c3, ScrollView: c4 } = get_ActivityIndicator);
({ jsx: closure_6, jsxs: error } = jsxProd);
let closure_8 = createCacheKey.createStyles({ image: { marginBottom: 32 }, valueProps: { marginTop: 24, maxWidth: "100%" } });
const result = require("obj132").fileFinishedImporting("modules/user_settings/connections/native/two_way_link/TwoWayLinkLanding.tsx");

export const TwoWayLinkLanding = function TwoWayLinkLanding(learnMoreLink) {
  ({ platformType: require, imgStyle, headerConnect, headerReconnect, valueProps } = learnMoreLink);
  learnMoreLink = learnMoreLink.learnMoreLink;
  ({ img, body, onNext } = learnMoreLink);
  const tmp = callback();
  let obj = require(valueProps[5]);
  const twoWayLinkStyles = obj.useTwoWayLinkStyles();
  require(valueProps[6]);
  const items = [closure_5];
  obj = { style: twoWayLinkStyles.content, children: null };
  obj1 = { source: img, style: null };
  const items1 = [tmp.image, ];
  const stateFromStores = obj1.useStateFromStores(items, () => {
    const account = closure_1_5.getAccount(null, closure_0);
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
  const items2 = [callback(closure_2, obj1), , , ];
  const obj2 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: twoWayLinkStyles.title, accessibilityRole: "header", children: null };
  let tmp11 = headerConnect;
  if (stateFromStores) {
    tmp11 = headerConnect;
    if (null != headerReconnect) {
      tmp11 = headerReconnect;
    }
  }
  obj2[4] = tmp11;
  items2[1] = callback(require(valueProps[7]).Text, obj2);
  items2[2] = callback(require(valueProps[7]).Text, { variant: "text-md/medium", color: "text-default", style: twoWayLinkStyles.body, children: body });
  items2[3] = callback(closure_3, {
    style: tmp.valueProps,
    children: valueProps.map((item, index) => {
      const label = item.label;
      ({ subLabel, icon } = item);
      return closure_1_6(require(valueProps[8]).TableRow, { start: 0 === index, end: index === valueProps.length - 1, subLabel, label: closure_1_6(require(valueProps[7]).Text, { variant: "text-sm/normal", color: "mobile-text-heading-primary", children: label }), icon: closure_1_6(require(valueProps[8]).TableRow.Icon, { IconComponent: icon }) }, label);
    })
  });
  obj[1] = items2;
  const items3 = [callback2(closure_3, obj), ];
  let tmp9Result = null;
  if (null != learnMoreLink) {
    const obj5 = { variant: "text-md/normal", color: "text-default", style: null, children: null };
    obj5[2] = twoWayLinkStyles.body;
    const intl = require(valueProps[9]).intl;
    const obj6 = { helpCenterLink: null };
    obj6[0] = learnMoreLink;
    obj5[3] = intl.format(require(valueProps[9]).t["/l3n+1"], obj6);
    tmp9Result = callback(require(valueProps[7]).Text, obj5);
  }
  items3[1] = tmp9Result;
  const items4 = [callback2(closure_4, { alwaysBounceVertical: false, children: items3 }), ];
  const obj7 = { bottom: true, style: twoWayLinkStyles.footerContainer, children: null };
  const obj8 = { spacing: 8, direction: "vertical", style: twoWayLinkStyles.footerButton, children: null };
  const obj9 = { variant: "primary", size: "lg", text: null, onPress: null };
  const intl2 = require(valueProps[9]).intl;
  obj9[2] = intl2.string(require(valueProps[9]).t.LhlgY9);
  obj9[3] = onNext;
  obj8[3] = callback(require(valueProps[12]).Button, obj9);
  obj7[2] = callback(require(valueProps[11]).Stack, obj8);
  items4[1] = callback(require(valueProps[10]).SafeAreaPaddingView, obj7);
  obj[1] = items4;
  return callback2(closure_3, obj);
};