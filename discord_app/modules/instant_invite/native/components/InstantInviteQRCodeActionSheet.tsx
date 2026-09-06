// === Module 9863: InstantInviteQRCodeActionSheet ===

// Module 9863 (InstantInviteQRCodeActionSheet)
import DispatcherDefault from "Dispatcher" /* 573 */;
import nativeDefault from "native" /* 576 */;
import GuildIconDefault from "GuildIcon" /* 5584 */;
import components_native_QRCodeDefault from "components_native/QRCode" /* 9864 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 1979 */;
import UserStore from "UserStore" /* 1371 */;

const require = fn;
const View = fn(17).View;
const Constants = fn(1074);
({ InstantInviteSources: closure_7, RelationshipTypes: closure_8 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
fn(4560);
let createStyles = { container: null, iconContainer: null, icon: null, code: null };
createStyles = { padding: nativeDefault.space.PX_12, display: "flex", alignItems: "center", justifyContent: "center", gap: nativeDefault.space.PX_24 };
createStyles.container = createStyles;
createStyles.iconContainer = { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, justifyContent: "center", alignItems: "center" };
createStyles.icon = { padding: nativeDefault.space.PX_4, borderRadius: nativeDefault.radii.lg + nativeDefault.space.PX_4, backgroundColor: nativeDefault.colors.WHITE };
createStyles.code = { alignSelf: "center" };
let closure_11 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/instant_invite/native/components/InstantInviteQRCodeActionSheet.tsx");

export default function InstantInviteQRCodeActionSheet(location) {
  const tmp = closure_11();
  if (location.location === constants.ADD_FRIENDS_MODAL) {
    const intl2 = presentFriendRequestAcceptedToast(1114).intl;
    let stringResult = intl2.string(presentFriendRequestAcceptedToast(1114).t.VUNqoc);
    let tmp6 = presentFriendRequestAcceptedToast;
  } else {
    const intl = presentFriendRequestAcceptedToast(1114).intl;
    stringResult = intl.string(presentFriendRequestAcceptedToast(1114).t.DqE26p);
    tmp6 = presentFriendRequestAcceptedToast;
  }
  ({ channel, location: _location } = location);
  const items = [UserStore];
  const stateFromStores = tmp6(504).useStateFromStores(items, () => currentUser.getCurrentUser());
  if (null != channel) {
    const guild = GuildStore.getGuild(channel.guild_id);
    if (null != guild) {
      let obj = { visible: null, plainText: null };
      const intl5 = tmp6(1114).intl;
      obj = { name: guild.name };
      obj.visible = intl5.format(tmp6(1114).t.VK3zyF, obj);
      const intl6 = tmp6(1114).intl;
      const obj1 = { name: guild.name };
      obj.plainText = intl6.formatToPlainString(tmp6(1114).t.VK3zyF, obj1);
      let tmp12 = obj;
    }
    const channel2 = location.channel;
    let tmp13 = null;
    if (null != channel2) {
      let obj7 = GuildStore;
      tmp13 = null;
      if (null != GuildStore.getGuild(channel2.guild_id)) {
        const obj2 = { guild: obj7.getGuild(channel2.guild_id), size: tmp6(5584).GuildIconSizes.LARGE };
        tmp13 = closure_9(GuildIconDefault, obj2);
      }
    }
    presentFriendRequestAcceptedToast = tmp6(4258).presentFriendRequestAcceptedToast;
    const items1 = [presentFriendRequestAcceptedToast];
    const effect = noop.useEffect(() => {
      function handleRelationshipAdd(relationship) {
        relationship = relationship.relationship;
        if (relationship.type === constants.FRIEND) {
          handleRelationshipAdd(relationship.user);
        }
      }
      const subscription = DispatcherDefault.subscribe("RELATIONSHIP_ADD", handleRelationshipAdd);
      return () => {
        DispatcherDefault.unsubscribe("RELATIONSHIP_ADD", handleRelationshipAdd);
      };
    }, items1);
    const obj3 = { header: null, children: null };
    const obj4 = { title: stringResult };
    obj3.header = closure_9(tmp6(7149).BottomSheetTitleHeader, obj4);
    const obj5 = { style: tmp.container, children: null };
    const obj6 = { text: location.link, size: 240, style: tmp.code, accessibilityLabel: null };
    let plainText;
    if (tmp12 != null) {
      plainText = tmp12.plainText;
    }
    obj6.accessibilityLabel = plainText;
    const items2 = [closure_9(components_native_QRCodeDefault, obj6), ];
    let tmp19Result = null != tmp13;
    if (tmp19Result) {
      obj7 = { style: tmp.iconContainer, children: null };
      const obj8 = { style: tmp.icon, children: tmp13 };
      obj7.children = closure_9(View, obj8);
      tmp19Result = closure_9(View, obj7);
    }
    const obj9 = { children: null };
    items2[1] = tmp19Result;
    obj9.children = items2;
    const items3 = [closure_10(View, obj9), ];
    tmp19Result = null != tmp12;
    if (tmp19Result) {
      const obj10 = { variant: "text-md/normal", children: tmp12.visible };
      tmp19Result = closure_9(tmp6(4556).Text, obj10);
    }
    items3[1] = tmp19Result;
    obj5.children = items3;
    obj3.children = closure_10(View, obj5);
    return closure_9(tmp6(7198).ActionSheet, obj3);
  }
  tmp12 = null;
  if (_location === constants.ADD_FRIENDS_MODAL) {
    tmp12 = null;
    if (null != stateFromStores) {
      const obj11 = { visible: null, plainText: null };
      const intl3 = tmp6(1114).intl;
      const obj12 = { name: stateFromStores.username };
      obj11.visible = intl3.format(tmp6(1114).t.zDGAfl, obj12);
      const intl4 = tmp6(1114).intl;
      const obj13 = { name: stateFromStores.username };
      obj11.plainText = intl4.formatToPlainString(tmp6(1114).t.zDGAfl, obj13);
      tmp12 = obj11;
    }
  }
  const tmp6Result = tmp6(504);
};