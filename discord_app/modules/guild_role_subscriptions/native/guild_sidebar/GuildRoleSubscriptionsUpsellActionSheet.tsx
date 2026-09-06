// discord_app/modules/guild_role_subscriptions/native/guild_sidebar/GuildRoleSubscriptionsUpsellActionSheet.tsx
import util from "../../../../intl/index.native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import components_Button_Button from "../../../../design/components/Button/native/Button.native.tsx";
import FastImageDefault from "../../../../components_native/common/FastImage.tsx";
import Sheet_BottomSheet from "../../../../design/components/Sheet/native/BottomSheet.native.tsx";
import GuildSettingsActionCreatorsDefault from "../../../guild_settings/GuildSettingsActionCreators.tsx";
import _modDef16243 from "../../../../../_runtime/metro/16243__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const GuildSettingsSections = fn(1074).GuildSettingsSections;
const ContentDismissActionType = fn(1954).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4560);
let closure_8 = createStyles.createStyles({
  title: { marginTop: 24, textAlign: "center" },
  description: { marginTop: 8, marginBottom: 24, textAlign: "center" },
  dismissButton: { marginTop: 4 },
});
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/guild_role_subscriptions/native/guild_sidebar/GuildRoleSubscriptionsUpsellActionSheet.tsx",
);

export default function GuildRoleSubscriptionsUpsellActionSheet(arg0) {
  ({ guildId: require, markAsDismissed: importDefault } = arg0);
  const tmp = closure_8();
  let obj = {
    startExpanded: true,
    onDismiss() {
      return importDefault(ContentDismissActionType.UNKNOWN);
    },
    children: null,
  };
  obj = { source: _modDef16243 };
  const items = [closure_6(FastImageDefault, obj), , , ,];
  obj = {
    style: tmp.title,
    accessibilityRole: "header",
    variant: "heading-xl/extrabold",
    color: "mobile-text-heading-primary",
    children: null,
  };
  const intl = util.intl;
  obj.children = intl.string(util.t.C0m4rQ);
  items[1] = closure_6(Text_Text.Text, obj);
  const obj1 = { style: tmp.description, variant: "text-sm/medium", color: "text-default", children: null };
  const intl2 = util.intl;
  obj1.children = intl2.string(util.t.zOHfEX);
  items[2] = closure_6(Text_Text.Text, obj1);
  const obj2 = {
    onPress() {
      closure_1_1(ContentDismissActionType.UNKNOWN);
      GuildSettingsActionCreatorsDefault.open(require, GuildSettingsSections.ROLE_SUBSCRIPTIONS);
    },
    text: null,
  };
  const intl3 = util.intl;
  obj2.text = intl3.string(util.t.OgQQbG);
  items[3] = closure_6(components_Button_Button.Button, obj2);
  const obj3 = { style: tmp.dismissButton, children: null };
  const obj4 = {
    onPress() {
      return importDefault(ContentDismissActionType.UNKNOWN);
    },
    text: null,
    variant: "secondary",
  };
  const intl4 = util.intl;
  obj4.text = intl4.string(util.t.WAI6xu);
  obj3.children = closure_6(components_Button_Button.Button, obj4);
  items[4] = closure_6(View, obj3);
  obj.children = items;
  return closure_7(Sheet_BottomSheet.BottomSheet, obj);
}
