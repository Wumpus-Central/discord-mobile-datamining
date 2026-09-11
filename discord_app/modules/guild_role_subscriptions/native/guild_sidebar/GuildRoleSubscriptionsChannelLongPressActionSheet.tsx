// === Module 16277: GuildRoleSubscriptionsChannelLongPressActionSheet ===

// Module 16277 (GuildRoleSubscriptionsChannelLongPressActionSheet)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import native from "native" /* 1178 */;
import BottomSheetTitleHeader from "BottomSheetTitleHeader" /* 7222 */;
import ActionSheet from "ActionSheet" /* 7270 */;
import Form from "Form" /* 8684 */;
import ChannelActionSheetUtils from "ChannelActionSheetUtils" /* 11048 */;
import _modDef12872 from "module_12872" /* 12872 */;
import _modDef16170 from "module_16170" /* 16170 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const StaticChannelRoute = fn(1964).StaticChannelRoute;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
fn(4606);
const createStyles = { headerIcon: null };
let size = { marginRight: 16, tintColor: nativeDefault.colors.CHANNEL_ICON, width: 20, height: 20 };
createStyles.headerIcon = size;
let closure_7 = createStyles.createStyles(createStyles);
size = fn(2);
let result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/guild_sidebar/GuildRoleSubscriptionsChannelLongPressActionSheet.tsx");

export default function GuildRoleSubscriptionsChannelLongPressActionSheet(arg0) {
  ({ guildId: require, onClose: importDefault } = arg0);
  let obj = { children: null };
  obj = { leading: null, title: null };
  obj = { style: closure_7().headerIcon, children: null };
  const tmp = closure_7();
  obj.children = closure_5(native.Icon, { disableColor: true, source: _modDef12872 });
  obj.leading = closure_5(View, obj);
  const intl = util.intl;
  obj.title = intl.string(util.t["KzCF/6"]);
  const items = [closure_5(BottomSheetTitleHeader.BottomSheetTitleHeader, obj), ];
  const obj2 = { leading: null, label: null, onPress: null };
  const obj1 = { disableColor: true, source: _modDef12872 };
  obj2.leading = closure_5(native.Icon, { source: _modDef16170 });
  const obj4 = { text: null };
  const intl2 = util.intl;
  obj4.text = intl2.string(util.t.WqhZss);
  obj2.label = closure_5(Form.FormLabel, obj4);
  obj2.onPress = function onPress() {
    importDefault();
    const result = ChannelActionSheetUtils.copyGuildChannelOrThreadLink(closure_1_0, StaticChannelRoute.ROLE_SUBSCRIPTIONS);
  };
  items[1] = closure_5(Form.FormRow, obj2);
  obj.children = items;
  return closure_6(ActionSheet.ActionSheet, obj);
};