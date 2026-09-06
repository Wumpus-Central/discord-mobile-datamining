// === Module 17736: GuildRoleSubscriptionTierArchiveOrDeleteActionSheet ===

// Module 17736 (GuildRoleSubscriptionTierArchiveOrDeleteActionSheet)
import _modDef38 from "module_38" /* 38 */;
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import native from "native" /* 1178 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1611 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import Text_Text from "Text/Text" /* 4556 */;
import components_Button_Button from "components/Button/Button" /* 4975 */;
import BottomSheetModal from "BottomSheetModal" /* 6627 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 7150 */;
import useArchiveOrDeleteDefault from "useArchiveOrDelete" /* 17737 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ TouchableOpacity: c3, View: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
fn(4560);
let createStyles = { container: null, cancel: null };
createStyles = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, padding: 24 };
createStyles.container = createStyles;
createStyles.cancel = { alignSelf: "center" };
let closure_7 = createStyles.createStyles(createStyles);
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
  let obj = { style: tmp.container, children: null };
  obj = { contentContainerStyle: { paddingBottom: useSafeAreaInsetsDefault().bottom }, children: null };
  const items = [hasOwnProperty(Text_Text.Text, { variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: headerText }), hasOwnProperty(native.Spacer, { size: 12 }), hasOwnProperty(Text_Text.Text, { variant: "text-sm/normal", color: "text-default", children: descriptionText }), hasOwnProperty(native.Spacer, { size: 24 }), , , ];
  obj = { text: buttonText, variant: "destructive", grow: true, onPress: handleArchiveOrDelete, disabled: null };
  if (!deleting) {
    deleting = archiving;
  }
  const obj1 = { backdropOpacity: 0.8, children: null };
  obj.disabled = deleting;
  items[4] = hasOwnProperty(components_Button_Button.Button, obj);
  items[5] = hasOwnProperty(native.Spacer, { size: 24 });
  const obj2 = {
    onPress() {
      return ActionSheetActionCreatorsDefault.hideActionSheet();
    },
    style: tmp.cancel,
    activeOpacity: 0.5,
    children: null
  };
  const obj3 = { variant: "text-sm/semibold", color: "interactive-text-active", children: null };
  const intl = util.intl;
  obj3.children = intl.string(util.t["ETE/oC"]);
  obj2.children = hasOwnProperty(Text_Text.Text, obj3);
  items[6] = hasOwnProperty(React3, obj2);
  obj.children = items;
  obj.children = timestampProducer(BottomSheetModal.BottomSheetScrollView, obj);
  obj1.children = hasOwnProperty(React4, obj);
  return hasOwnProperty(Sheet_BottomSheet.BottomSheet, obj1);
};