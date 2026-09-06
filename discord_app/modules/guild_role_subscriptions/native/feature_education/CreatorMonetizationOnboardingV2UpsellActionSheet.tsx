// === Module 16247: CreatorMonetizationOnboardingV2UpsellActionSheet ===

// Module 16247 (CreatorMonetizationOnboardingV2UpsellActionSheet)
import util from "util" /* 1114 */;
import Text_Text from "Text/Text" /* 4556 */;
import components_Button_Button from "components/Button/Button" /* 4975 */;
import FastImageDefault from "FastImage" /* 5587 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 7150 */;
import GuildSettingsActionCreatorsDefault from "GuildSettingsActionCreators" /* 9063 */;
import _modDef16248 from "module_16248" /* 16248 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const GuildSettingsSections = fn(1074).GuildSettingsSections;
const ContentDismissActionType = fn(1954).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4560);
let closure_8 = createStyles.createStyles({ container: { paddingLeft: 24, paddingRight: 24, paddingTop: 24 }, title: { marginBottom: 6 }, description: { marginBottom: 24 }, image: { marginBottom: 24, width: "100%" }, dismissButton: { marginTop: 4 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/feature_education/CreatorMonetizationOnboardingV2UpsellActionSheet.tsx");

export default function CreatorMonetizationOnboardingV2UpsellActionSheet(arg0) {
  ({ guildId: require, markAsDismissed: importDefault } = arg0);
  const tmp = closure_8();
  let obj = {
    startExpanded: true,
    onDismiss() {
      return importDefault(ContentDismissActionType.UNKNOWN);
    },
    children: null
  };
  obj = { style: tmp.container, children: null };
  obj = { style: tmp.title, accessibilityRole: "header", variant: "heading-lg/extrabold", color: "mobile-text-heading-primary", children: null };
  const intl = util.intl;
  obj.children = intl.string(util.t["v+Jm6X"]);
  const items = [closure_6(Text_Text.Text, obj), , , , ];
  const obj1 = { style: tmp.description, accessibilityRole: "text", variant: "text-sm/medium", color: "text-default", children: null };
  const intl2 = util.intl;
  obj1.children = intl2.string(util.t.kUUFbG);
  items[1] = closure_6(Text_Text.Text, obj1);
  const obj2 = { style: tmp.image, resizeMode: "contain", source: _modDef16248 };
  items[2] = closure_6(FastImageDefault, obj2);
  const obj3 = {
    onPress() {
      closure_1_1(ContentDismissActionType.UNKNOWN);
      GuildSettingsActionCreatorsDefault.open(require, GuildSettingsSections.ROLE_SUBSCRIPTIONS);
    },
    text: null
  };
  const intl3 = util.intl;
  obj3.text = intl3.string(util.t.OgQQbG);
  items[3] = closure_6(components_Button_Button.Button, obj3);
  const obj4 = { style: tmp.dismissButton, children: null };
  const obj5 = {
    onPress() {
      return importDefault(ContentDismissActionType.UNKNOWN);
    },
    text: null,
    variant: "secondary"
  };
  const intl4 = util.intl;
  obj5.text = intl4.string(util.t.WAI6xu);
  obj4.children = closure_6(components_Button_Button.Button, obj5);
  items[4] = closure_6(View, obj4);
  obj.children = items;
  obj.children = closure_7(View, obj);
  return closure_6(Sheet_BottomSheet.BottomSheet, obj);
};