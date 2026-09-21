// discord_app/modules/guild_role_subscriptions/native/guild_sidebar/GuildRoleSubscriptionsChannelLongPressActionSheet.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import native from "../../../../design/void/native.tsx";
import BottomSheetTitleHeader from "../../../../design/components/Sheet/native/BottomSheetTitleHeader.native.tsx";
import ActionSheet from "../../../../design/components/Sheet/native/ActionSheet.native.tsx";
import Form from "../../../../design/void/Form/native/index.tsx";
import ChannelActionSheetUtils from "../../../channel/native/ChannelActionSheetUtils.tsx";
import _modDef13032 from "../../../../../_runtime/metro/13032__.js";
import _modDef16438 from "../../../../../_runtime/metro/16438__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const StaticChannelRoute = fn(2048).StaticChannelRoute;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4756);
let obj2 = { headerIcon: null };
let size = { marginRight: 16, tintColor: nativeDefault.colors.CHANNEL_ICON, width: 20, height: 20 };
obj2.headerIcon = size;
let closure_7 = createStyles.createStyles(obj2);
size = fn(2);
let result = size.fileFinishedImporting(
  "modules/guild_role_subscriptions/native/guild_sidebar/GuildRoleSubscriptionsChannelLongPressActionSheet.tsx",
);

export default function GuildRoleSubscriptionsChannelLongPressActionSheet(arg0) {
  ({ guildId: require, onClose: importDefault } = arg0);
  const obj = { children: null };
  const obj2 = { leading: null, title: null };
  const obj3 = { style: closure_7().headerIcon, children: null };
  const tmp = closure_7();
  obj3.children = closure_5(native.Icon, { disableColor: true, source: _modDef13032 });
  obj2.leading = closure_5(View, obj3);
  const intl = util.intl;
  obj2.title = intl.string(util.t["KzCF/6"]);
  const items = [closure_5(BottomSheetTitleHeader.BottomSheetTitleHeader, obj2)];
  const obj5 = { leading: null, label: null, onPress: null };
  const obj4 = { disableColor: true, source: _modDef13032 };
  obj5.leading = closure_5(native.Icon, { source: _modDef16438 });
  const obj7 = { text: null };
  const intl2 = util.intl;
  obj7.text = intl2.string(util.t.WqhZss);
  obj5.label = closure_5(Form.FormLabel, obj7);
  obj5.onPress = function onPress() {
    importDefault();
    const result = ChannelActionSheetUtils.copyGuildChannelOrThreadLink(
      closure_1_0,
      StaticChannelRoute.ROLE_SUBSCRIPTIONS,
    );
  };
  items[1] = closure_5(Form.FormRow, obj5);
  obj.children = items;
  return closure_6(ActionSheet.ActionSheet, obj);
}
