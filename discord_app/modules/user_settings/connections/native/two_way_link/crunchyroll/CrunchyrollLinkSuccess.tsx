// discord_app/modules/user_settings/connections/native/two_way_link/crunchyroll/CrunchyrollLinkSuccess.tsx
import util from "../../../../../../intl/index.native.tsx";
import Text_Text from "../../../../../../design/components/Text/native/Text.tsx";
import components_Button_Button from "../../../../../../design/components/Button/native/Button.native.tsx";
import FastImageDefault from "../../../../../../components_native/common/FastImage.tsx";
import common_SafeAreaView from "../../../../../../components_native/common/SafeAreaView.tsx";
import TwoWayLinkStyles from "../TwoWayLinkStyles.tsx";
import _modDef14604 from "../../../../../../../_runtime/metro/14604__.js";
import noop from "../../../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(5009);
let closure_6 = createStyles.createStyles({ image: { width: 232, height: 108, marginBottom: 24 } });
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/user_settings/connections/native/two_way_link/crunchyroll/CrunchyrollLinkSuccess.tsx",
);

export default function CrunchyrollLinkDiscordSuccess(onClose) {
  const tmp = closure_6();
  const twoWayLinkStyles = TwoWayLinkStyles.useTwoWayLinkStyles();
  const obj2 = { style: twoWayLinkStyles.container, children: null };
  const obj3 = { style: twoWayLinkStyles.content, children: null };
  const obj4 = { source: null, style: null };
  obj4.source = _modDef14604;
  obj4.style = tmp.image;
  const items = [React4(FastImageDefault, obj4), ,];
  const obj5 = {
    variant: "heading-xl/extrabold",
    color: "mobile-text-heading-primary",
    style: twoWayLinkStyles.title,
    children: null,
  };
  const intl = util.intl;
  obj5.children = intl.string(util.t.Fnvxvk);
  items[1] = React4(Text_Text.Text, obj5);
  const obj6 = { variant: "text-md/normal", color: "text-default", style: twoWayLinkStyles.body, children: null };
  const intl2 = util.intl;
  obj6.children = intl2.string(util.t.YwXceg);
  items[2] = React4(Text_Text.Text, obj6);
  obj3.children = items;
  const items1 = [hasOwnProperty(View, obj3)];
  const obj7 = { bottom: true, style: twoWayLinkStyles.footerContainer, children: null };
  const obj8 = { style: twoWayLinkStyles.footerButton, children: null };
  const obj9 = { size: "md", text: null, onPress: null };
  const intl3 = util.intl;
  obj9.text = intl3.string(util.t.i4jeWR);
  obj9.onPress = onClose.onClose;
  obj8.children = React4(components_Button_Button.Button, obj9);
  obj7.children = React4(View, obj8);
  items1[1] = React4(common_SafeAreaView.SafeAreaPaddingView, obj7);
  obj2.children = items1;
  return hasOwnProperty(View, obj2);
}
