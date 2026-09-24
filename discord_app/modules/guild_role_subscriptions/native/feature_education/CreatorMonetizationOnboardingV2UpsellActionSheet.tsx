// === Module 16673: CreatorMonetizationOnboardingV2UpsellActionSheet ===

// Module 16673 (CreatorMonetizationOnboardingV2UpsellActionSheet)
import util from "util" /* 1115 */;
import Text_Text from "Text/Text" /* 4825 */;
import components_Button_Button from "components/Button/Button" /* 5273 */;
import FastImageDefault from "FastImage" /* 5892 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 7483 */;
import GuildSettingsActionCreatorsDefault from "GuildSettingsActionCreators" /* 9939 */;
import _modDef16674 from "module_16674" /* 16674 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const GuildSettingsSections = fn(1074).GuildSettingsSections;
const ContentDismissActionType = fn(2041).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4829);
let closure_8 = createStyles.createStyles({ container: { paddingLeft: 24, paddingRight: 24, paddingTop: 24 }, title: { marginBottom: 6 }, description: { marginBottom: 24 }, image: { marginBottom: 24, width: "100%" }, dismissButton: { marginTop: 4 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/feature_education/CreatorMonetizationOnboardingV2UpsellActionSheet.tsx");

export default function CreatorMonetizationOnboardingV2UpsellActionSheet(arg0) {
  ({ guildId: require, markAsDismissed: importDefault } = arg0);
  const tmp = closure_8();
  const obj = {
    startExpanded: true,
    onDismiss() {
      return importDefault(ContentDismissActionType.UNKNOWN);
    },
    children: null
  };
  const obj2 = { style: tmp.container, children: null };
  const obj3 = { style: tmp.title, accessibilityRole: "header", variant: "heading-lg/extrabold", color: "mobile-text-heading-primary", children: null };
  const intl = util.intl;
  obj3.children = intl.string(util.t["v+Jm6X"]);
  const items = [closure_6(Text_Text.Text, obj3), , , , ];
  const obj4 = { style: tmp.description, accessibilityRole: "text", variant: "text-sm/medium", color: "text-default", children: null };
  const intl2 = util.intl;
  obj4.children = intl2.string(util.t.kUUFbG);
  items[1] = closure_6(Text_Text.Text, obj4);
  const obj5 = { style: tmp.image, resizeMode: "contain", source: _modDef16674 };
  items[2] = closure_6(FastImageDefault, obj5);
  const obj6 = {
    onPress() {
      closure_1_1(ContentDismissActionType.UNKNOWN);
      GuildSettingsActionCreatorsDefault.open(require, GuildSettingsSections.ROLE_SUBSCRIPTIONS);
    },
    text: null
  };
  const intl3 = util.intl;
  obj6.text = intl3.string(util.t.OgQQbG);
  items[3] = closure_6(components_Button_Button.Button, obj6);
  const obj7 = { style: tmp.dismissButton, children: null };
  const obj8 = {
    onPress() {
      return importDefault(ContentDismissActionType.UNKNOWN);
    },
    text: null,
    variant: "secondary"
  };
  const intl4 = util.intl;
  obj8.text = intl4.string(util.t.WAI6xu);
  obj7.children = closure_6(components_Button_Button.Button, obj8);
  items[4] = closure_6(View, obj7);
  obj2.children = items;
  obj.children = closure_7(View, obj2);
  return closure_6(Sheet_BottomSheet.BottomSheet, obj);
};