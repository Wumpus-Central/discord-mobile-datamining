// === Module 9225: TwoWayLinkLanding ===

// Module 9225 (TwoWayLinkLanding)
import Text_Text from "Text/Text" /* 4556 */;
import TableRow from "TableRow" /* 5605 */;
import noop from "module_19" /* 19 */;
import ConnectedAccountsStore from "ConnectedAccountsStore" /* 5281 */;

require = fn;
get_ActivityIndicator = fn(17);
({ Image: c2, View: c3, ScrollView: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4560);
let closure_8 = createStyles.createStyles({ image: { marginBottom: 32 }, valueProps: { marginTop: 24, maxWidth: "100%" } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/TwoWayLinkLanding.tsx");

export const TwoWayLinkLanding = function TwoWayLinkLanding(learnMoreLink) {
  ({ platformType: require, imgStyle, headerConnect, headerReconnect, valueProps } = learnMoreLink);
  learnMoreLink = learnMoreLink.learnMoreLink;
  ({ img, body, onNext } = learnMoreLink);
  const tmp = closure_8();
  let obj = require("TwoWayLinkStyles");
  const twoWayLinkStyles = obj.useTwoWayLinkStyles();
  require("initialize");
  const items = [ConnectedAccountsStore];
  obj = { style: twoWayLinkStyles.container, children: null };
  obj = { style: twoWayLinkStyles.content, children: null };
  const obj1 = { source: img, style: null };
  const items1 = [tmp.image, ];
  const stateFromStores = obj1.useStateFromStores(items, () => {
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
  obj1.style = items1;
  const items2 = [closure_6(closure_2, obj1), , , ];
  const obj2 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: twoWayLinkStyles.title, accessibilityRole: "header", children: null };
  let tmp11 = headerConnect;
  if (stateFromStores) {
    tmp11 = headerConnect;
    if (null != headerReconnect) {
      tmp11 = headerReconnect;
    }
  }
  obj2.children = tmp11;
  items2[1] = closure_6(require("Text/Text").Text, obj2);
  items2[2] = closure_6(require("Text/Text").Text, { variant: "text-md/medium", color: "text-default", style: twoWayLinkStyles.body, children: body });
  items2[3] = closure_6(closure_3, {
    style: tmp.valueProps,
    children: valueProps.map((label, index) => {
      label = label.label;
      ({ subLabel, icon } = label);
      return timestampProducer(TableRow.TableRow, { start: 0 === index, end: index === valueProps.length - 1, subLabel, label: timestampProducer(Text_Text.Text, { variant: "text-sm/normal", color: "mobile-text-heading-primary", children: label }), icon: timestampProducer(TableRow.TableRow.Icon, { IconComponent: icon }) }, label);
    })
  });
  obj.children = items2;
  const items3 = [closure_7(closure_3, obj), ];
  let tmp9Result = null;
  if (null != learnMoreLink) {
    const obj5 = { variant: "text-md/normal", color: "text-default", style: twoWayLinkStyles.body, children: null };
    const intl = tmp2(tmp3[9]).intl;
    const obj6 = { helpCenterLink: learnMoreLink };
    obj5.children = intl.format(tmp2(tmp3[9]).t["/l3n+1"], obj6);
    tmp9Result = tmp9(tmp2(tmp3[7]).Text, obj5);
  }
  items3[1] = tmp9Result;
  const items4 = [closure_7(closure_4, { alwaysBounceVertical: false, children: items3 }), ];
  const obj7 = { bottom: true, style: twoWayLinkStyles.footerContainer, children: null };
  const obj8 = { spacing: 8, direction: "vertical", style: twoWayLinkStyles.footerButton, children: null };
  const obj9 = { variant: "primary", size: "lg", text: null, onPress: null };
  const intl2 = tmp2(tmp3[9]).intl;
  obj9.text = intl2.string(require("util").t.LhlgY9);
  obj9.onPress = onNext;
  obj8.children = closure_6(require("components/Button/Button").Button, obj9);
  obj7.children = closure_6(require("Stack/Stack").Stack, obj8);
  items4[1] = closure_6(require("common/SafeAreaView").SafeAreaPaddingView, obj7);
  obj.children = items4;
  return closure_7(closure_3, obj);
};