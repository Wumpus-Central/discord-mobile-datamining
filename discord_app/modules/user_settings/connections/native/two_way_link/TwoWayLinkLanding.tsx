// === Module 9368: TwoWayLinkLanding ===

// Module 9368 (TwoWayLinkLanding)
import Text_Text from "Text/Text" /* 4634 */;
import TableRow from "TableRow" /* 5691 */;
import noop from "module_19" /* 19 */;
import ConnectedAccountsStore from "ConnectedAccountsStore" /* 5367 */;

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ Image: c2, View: c3, ScrollView: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4638);
let closure_8 = createStyles.createStyles({ image: { marginBottom: 32 }, valueProps: { marginTop: 24, maxWidth: "100%" } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/TwoWayLinkLanding.tsx");

export const TwoWayLinkLanding = function TwoWayLinkLanding(learnMoreLink) {
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
};