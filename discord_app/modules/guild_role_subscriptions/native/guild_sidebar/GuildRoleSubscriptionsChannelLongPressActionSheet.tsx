// discord_app/modules/guild_role_subscriptions/native/guild_sidebar/GuildRoleSubscriptionsChannelLongPressActionSheet.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import native from "../../../../design/void/native.tsx";
import BottomSheetTitleHeader from "../../../../design/components/Sheet/native/BottomSheetTitleHeader.native.tsx";
import ActionSheet from "../../../../design/components/Sheet/native/ActionSheet.native.tsx";
import Form from "../../../../design/void/Form/native/index.tsx";
import ChannelActionSheetUtils from "../../../channel/native/ChannelActionSheetUtils.tsx";
import _modDef12779 from "../../../../../_runtime/metro/12779__.js";
import _modDef16099 from "../../../../../_runtime/metro/16099__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const StaticChannelRoute = fn(1964).StaticChannelRoute;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
fn(4560);
const createStyles = { headerIcon: null };
let size = { marginRight: 16, tintColor: nativeDefault.colors.CHANNEL_ICON, width: 20, height: 20 };
createStyles.headerIcon = size;
let closure_7 = createStyles.createStyles(createStyles);
size = fn(2);
let result = size.fileFinishedImporting(
  "modules/guild_role_subscriptions/native/guild_sidebar/GuildRoleSubscriptionsChannelLongPressActionSheet.tsx",
);

export default function GuildRoleSubscriptionsChannelLongPressActionSheet(arg0) {
  ({ guildId: require, onClose: importDefault } = arg0);
  let obj = { children: null };
  obj = { leading: null, title: null };
  obj = { style: closure_7().headerIcon, children: null };
  const tmp = closure_7();
  obj.children = closure_5(native.Icon, { disableColor: true, source: _modDef12779 });
  obj.leading = closure_5(View, obj);
  const intl = util.intl;
  obj.title = intl.string(util.t["KzCF/6"]);
  const items = [closure_5(BottomSheetTitleHeader.BottomSheetTitleHeader, obj)];
  const obj2 = { leading: null, label: null, onPress: null };
  const obj1 = { disableColor: true, source: _modDef12779 };
  obj2.leading = closure_5(native.Icon, { source: _modDef16099 });
  const obj4 = { text: null };
  const intl2 = util.intl;
  obj4.text = intl2.string(util.t.WqhZss);
  obj2.label = closure_5(Form.FormLabel, obj4);
  obj2.onPress = function onPress() {
    importDefault();
    const result = ChannelActionSheetUtils.copyGuildChannelOrThreadLink(
      closure_1_0,
      StaticChannelRoute.ROLE_SUBSCRIPTIONS,
    );
  };
  items[1] = closure_5(Form.FormRow, obj2);
  obj.children = items;
  return closure_6(ActionSheet.ActionSheet, obj);
}
