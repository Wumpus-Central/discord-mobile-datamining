// discord_app/modules/user_settings/connections/native/two_way_link/crunchyroll/CrunchyrollLinkSuccess.tsx
import util from "../../../../../../intl/index.native.tsx";
import Text_Text from "../../../../../../design/components/Text/native/Text.tsx";
import components_Button_Button from "../../../../../../design/components/Button/native/Button.native.tsx";
import common_SafeAreaView from "../../../../../../components_native/common/SafeAreaView.tsx";
import TwoWayLinkStyles from "../TwoWayLinkStyles.tsx";
import _modDef9279 from "../../../../../../../_runtime/metro/09279__.js";
import noop from "../../../../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ Image: c3, View: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4560);
let closure_7 = createStyles.createStyles({ image: { width: 232, height: 108, marginBottom: 24 } });
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/user_settings/connections/native/two_way_link/crunchyroll/CrunchyrollLinkSuccess.tsx",
);

export default function CrunchyrollLinkDiscordSuccess(onClose) {
  let obj = TwoWayLinkStyles;
  const twoWayLinkStyles = obj.useTwoWayLinkStyles();
  obj = { style: twoWayLinkStyles.container, children: null };
  obj = { style: twoWayLinkStyles.content, children: null };
  const tmp = closure_7();
  const items = [hasOwnProperty(React3, { source: _modDef9279, style: closure_7().image }), ,];
  const obj2 = {
    variant: "heading-xl/extrabold",
    color: "mobile-text-heading-primary",
    style: twoWayLinkStyles.title,
    children: null,
  };
  const intl = util.intl;
  obj2.children = intl.string(util.t.Fnvxvk);
  items[1] = hasOwnProperty(Text_Text.Text, obj2);
  const obj3 = { variant: "text-md/normal", color: "text-default", style: twoWayLinkStyles.body, children: null };
  const intl2 = util.intl;
  obj3.children = intl2.string(util.t.YwXceg);
  items[2] = hasOwnProperty(Text_Text.Text, obj3);
  obj.children = items;
  const items1 = [timestampProducer(React4, obj)];
  const obj4 = { bottom: true, style: twoWayLinkStyles.footerContainer, children: null };
  const obj5 = { style: twoWayLinkStyles.footerButton, children: null };
  const obj6 = { size: "md", text: null, onPress: null };
  const intl3 = util.intl;
  obj6.text = intl3.string(util.t.i4jeWR);
  obj6.onPress = onClose.onClose;
  obj5.children = hasOwnProperty(components_Button_Button.Button, obj6);
  obj4.children = hasOwnProperty(React4, obj5);
  items1[1] = hasOwnProperty(common_SafeAreaView.SafeAreaPaddingView, obj4);
  obj.children = items1;
  return timestampProducer(React4, obj);
}
