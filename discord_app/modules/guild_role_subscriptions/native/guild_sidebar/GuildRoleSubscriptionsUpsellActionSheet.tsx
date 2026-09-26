// === Module 15876: GuildRoleSubscriptionsUpsellActionSheet ===

// Module 15876 (GuildRoleSubscriptionsUpsellActionSheet)
import util from "util" /* 1115 */;
import Text_Text from "Text/Text" /* 4832 */;
import components_Button_Button from "components/Button/Button" /* 5281 */;
import FastImageDefault from "FastImage" /* 5899 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 6571 */;
import GuildSettingsActionCreatorsDefault from "GuildSettingsActionCreators" /* 9048 */;
import _modDef15877 from "module_15877" /* 15877 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const GuildSettingsSections = fn(1074).GuildSettingsSections;
const ContentDismissActionType = fn(2042).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4836);
let closure_8 = createStyles.createStyles({ title: { marginTop: 24, textAlign: "center" }, description: { marginTop: 8, marginBottom: 24, textAlign: "center" }, dismissButton: { marginTop: 4 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/guild_sidebar/GuildRoleSubscriptionsUpsellActionSheet.tsx");

export default function GuildRoleSubscriptionsUpsellActionSheet(arg0) {
  ({ guildId: require, markAsDismissed: importDefault } = arg0);
  const tmp = closure_8();
  const obj = {
    startExpanded: true,
    onDismiss() {
      return importDefault(ContentDismissActionType.UNKNOWN);
    },
    children: null
  };
  const obj2 = { source: _modDef15877 };
  const items = [closure_6(FastImageDefault, obj2), , , , ];
  const obj3 = { style: tmp.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
  const intl = util.intl;
  obj3.children = intl.string(util.t.C0m4rQ);
  items[1] = closure_6(Text_Text.Text, obj3);
  const obj4 = { style: tmp.description, variant: "text-sm/medium", color: "text-default", children: null };
  const intl2 = util.intl;
  obj4.children = intl2.string(util.t.zOHfEX);
  items[2] = closure_6(Text_Text.Text, obj4);
  const obj5 = {
    onPress() {
      closure_1_1(ContentDismissActionType.UNKNOWN);
      GuildSettingsActionCreatorsDefault.open(require, GuildSettingsSections.ROLE_SUBSCRIPTIONS);
    },
    text: null
  };
  const intl3 = util.intl;
  obj5.text = intl3.string(util.t.OgQQbG);
  items[3] = closure_6(components_Button_Button.Button, obj5);
  const obj6 = { style: tmp.dismissButton, children: null };
  const obj7 = {
    onPress() {
      return importDefault(ContentDismissActionType.UNKNOWN);
    },
    text: null,
    variant: "secondary"
  };
  const intl4 = util.intl;
  obj7.text = intl4.string(util.t.WAI6xu);
  obj6.children = closure_6(components_Button_Button.Button, obj7);
  items[4] = closure_6(View, obj6);
  obj.children = items;
  return closure_7(Sheet_BottomSheet.BottomSheet, obj);
};