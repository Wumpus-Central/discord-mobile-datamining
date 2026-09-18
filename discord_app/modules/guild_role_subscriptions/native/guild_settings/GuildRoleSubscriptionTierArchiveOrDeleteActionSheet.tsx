// === Module 18105: GuildRoleSubscriptionTierArchiveOrDeleteActionSheet ===

// Module 18105 (GuildRoleSubscriptionTierArchiveOrDeleteActionSheet)
import _modDef38 from "module_38" /* 38 */;
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import native from "native" /* 1177 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1612 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4689 */;
import Text_Text from "Text/Text" /* 4718 */;
import components_Button_Button from "components/Button/Button" /* 5144 */;
import BottomSheetModal from "BottomSheetModal" /* 6820 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 7346 */;
import useArchiveOrDeleteDefault from "useArchiveOrDelete" /* 18106 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ TouchableOpacity: c3, View: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4722);
let obj2 = { container: { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, padding: 24 }, cancel: { alignSelf: "center" } };
let closure_7 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/GuildRoleSubscriptionTierArchiveOrDeleteActionSheet.tsx");

export default function GuildRoleSubscriptionTierArchiveOrDeleteActionSheet(groupListingId) {
  groupListingId = groupListingId.groupListingId;
  ({ editStateId, guildId } = groupListingId);
  const tmp = closure_7();
  _modDef38(null != groupListingId, "group listing id cannot be null");
  const tmp4 = useArchiveOrDeleteDefault(guildId, groupListingId, editStateId);
  let deleting = tmp4.deleting;
  ({ headerText, buttonText, descriptionText, handleArchiveOrDelete, archiving } = tmp4);
  const obj = { style: tmp.container, children: null };
  const obj2 = { contentContainerStyle: { paddingBottom: useSafeAreaInsetsDefault().bottom }, children: null };
  const items = [hasOwnProperty(Text_Text.Text, { variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: headerText }), hasOwnProperty(native.Spacer, { size: 12 }), hasOwnProperty(Text_Text.Text, { variant: "text-sm/normal", color: "text-default", children: descriptionText }), hasOwnProperty(native.Spacer, { size: 24 }), , , ];
  const obj3 = { text: buttonText, variant: "destructive", grow: true, onPress: handleArchiveOrDelete, disabled: null };
  if (!deleting) {
    deleting = archiving;
  }
  const obj4 = { backdropOpacity: 0.8, children: null };
  obj3.disabled = deleting;
  items[4] = hasOwnProperty(components_Button_Button.Button, obj3);
  items[5] = hasOwnProperty(native.Spacer, { size: 24 });
  const obj5 = {
    onPress() {
      return ActionSheetActionCreatorsDefault.hideActionSheet();
    },
    style: tmp.cancel,
    activeOpacity: 0.5,
    children: null
  };
  const obj6 = { variant: "text-sm/semibold", color: "interactive-text-active", children: null };
  const intl = util.intl;
  obj6.children = intl.string(util.t["ETE/oC"]);
  obj5.children = hasOwnProperty(Text_Text.Text, obj6);
  items[6] = hasOwnProperty(React3, obj5);
  obj2.children = items;
  obj.children = timestampProducer(BottomSheetModal.BottomSheetScrollView, obj2);
  obj4.children = hasOwnProperty(React4, obj);
  return hasOwnProperty(Sheet_BottomSheet.BottomSheet, obj4);
};