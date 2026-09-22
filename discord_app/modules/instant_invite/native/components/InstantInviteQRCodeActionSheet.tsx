// discord_app/modules/instant_invite/native/components/InstantInviteQRCodeActionSheet.tsx
import DispatcherDefault from "../../../../Dispatcher.tsx";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import GuildIconDefault from "../../../guild/native/GuildIcon.tsx";
import components_native_QRCodeDefault from "../../../../components_native/QRCode.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import GuildStore from "../../../../stores/GuildStore.tsx";
import UserStore from "../../../../stores/UserStore.tsx";

const require = fn;
const View = fn(17).View;
const Constants = fn(1074);
({ InstantInviteSources: closure_7, RelationshipTypes: closure_8 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4757);
let obj2 = {
  container: {
    padding: nativeDefault.space.PX_12,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: nativeDefault.space.PX_24,
  },
  iconContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: null,
  code: null,
};
let obj3 = {
  padding: nativeDefault.space.PX_12,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: nativeDefault.space.PX_24,
};
obj2.icon = {
  padding: nativeDefault.space.PX_4,
  borderRadius: nativeDefault.radii.lg + nativeDefault.space.PX_4,
  backgroundColor: nativeDefault.colors.WHITE,
};
obj2.code = { alignSelf: "center" };
let closure_11 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/instant_invite/native/components/InstantInviteQRCodeActionSheet.tsx",
);

export default function InstantInviteQRCodeActionSheet(location) {
  const tmp = closure_11();
  if (location.location === constants.ADD_FRIENDS_MODAL) {
    const intl2 = presentFriendRequestAcceptedToast(1115).intl;
    let stringResult = intl2.string(presentFriendRequestAcceptedToast(1115).t.VUNqoc);
    let tmp6 = presentFriendRequestAcceptedToast;
  } else {
    const intl = presentFriendRequestAcceptedToast(1115).intl;
    stringResult = intl.string(presentFriendRequestAcceptedToast(1115).t.DqE26p);
    tmp6 = presentFriendRequestAcceptedToast;
  }
  ({ channel, location: _location } = location);
  const items = [UserStore];
  const stateFromStores = tmp6(504).useStateFromStores(items, () => currentUser.getCurrentUser());
  if (null != channel) {
    const guild = GuildStore.getGuild(channel.guild_id);
    if (null != guild) {
      const obj = { visible: null, plainText: null };
      const intl5 = tmp6(1115).intl;
      const obj2 = { name: guild.name };
      obj.visible = intl5.format(tmp6(1115).t.VK3zyF, obj2);
      const intl6 = tmp6(1115).intl;
      const obj3 = { name: guild.name };
      obj.plainText = intl6.formatToPlainString(tmp6(1115).t.VK3zyF, obj3);
      let tmp12 = obj;
    }
    const channel2 = location.channel;
    let tmp13 = null;
    if (null != channel2) {
      tmp13 = null;
      if (null != GuildStore.getGuild(channel2.guild_id)) {
        const obj4 = { guild: GuildStore.getGuild(channel2.guild_id), size: tmp6(5803).GuildIconSizes.LARGE };
        tmp13 = closure_9(GuildIconDefault, obj4);
      }
    }
    presentFriendRequestAcceptedToast = tmp6(4454).presentFriendRequestAcceptedToast;
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
    const obj5 = { header: null, children: null };
    const obj6 = { title: stringResult };
    obj5.header = closure_9(tmp6(7396).BottomSheetTitleHeader, obj6);
    const obj7 = { style: tmp.container, children: null };
    const obj9 = { text: location.link, size: 240, style: tmp.code, accessibilityLabel: null };
    let plainText;
    if (tmp12 != null) {
      plainText = tmp12.plainText;
    }
    obj9.accessibilityLabel = plainText;
    const items2 = [closure_9(components_native_QRCodeDefault, obj9)];
    let tmp19Result = null != tmp13;
    if (tmp19Result) {
      const obj10 = { style: tmp.iconContainer, children: null };
      const obj11 = { style: tmp.icon, children: tmp13 };
      obj10.children = closure_9(View, obj11);
      tmp19Result = closure_9(View, obj10);
    }
    const obj12 = { children: null };
    items2[1] = tmp19Result;
    obj12.children = items2;
    const items3 = [closure_10(View, obj12)];
    let tmp19Result2 = null != tmp12;
    if (tmp19Result2) {
      const obj13 = { variant: "text-md/normal", children: tmp12.visible };
      tmp19Result2 = closure_9(tmp6(4753).Text, obj13);
    }
    items3[1] = tmp19Result2;
    obj7.children = items3;
    obj5.children = closure_10(View, obj7);
    return closure_9(tmp6(7444).ActionSheet, obj5);
  }
  tmp12 = null;
  if (_location === constants.ADD_FRIENDS_MODAL) {
    tmp12 = null;
    if (null != stateFromStores) {
      const obj14 = { visible: null, plainText: null };
      const intl3 = tmp6(1115).intl;
      const obj15 = { name: stateFromStores.username };
      obj14.visible = intl3.format(tmp6(1115).t.zDGAfl, obj15);
      const intl4 = tmp6(1115).intl;
      const obj16 = { name: stateFromStores.username };
      obj14.plainText = intl4.formatToPlainString(tmp6(1115).t.zDGAfl, obj16);
      tmp12 = obj14;
    }
  }
  const tmp6Result = tmp6(504);
}
