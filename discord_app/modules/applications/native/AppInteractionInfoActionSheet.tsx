// discord_app/modules/applications/native/AppInteractionInfoActionSheet.tsx
import showUserProfileActionSheetDefault from "../../user_profile/native/showUserProfileActionSheet.tsx";
import UserActionCreators from "../../../actions/UserActionCreators.tsx";
import ContextMenuSubmenuActionSheetHeaderDefault from "../../action_sheet/native/components/ContextMenuSubmenuActionSheetHeader.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import UserRecord from "../../../records/UserRecord.tsx";
import GuildStore from "../../../stores/GuildStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4836);
let closure_10 = createStyles.createStyles({
  itemContainer: { flexDirection: "row", paddingVertical: 12, paddingHorizontal: 16, alignItems: "center" },
  itemLabel: { flexDirection: "column", alignItems: "flex-start", paddingLeft: 12 },
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/applications/native/AppInteractionInfoActionSheet.tsx");

export default function AppInteractionInfoActionSheet(message) {
  message = message.message;
  ({ guildId, onBack } = message);
  dependencyMap = undefined;
  noop = undefined;
  let stateFromStores;
  let id;
  let tmp = closure_10();
  const items = [onBack];
  const interactionMetadata = message.interactionMetadata;
  let tmp5;
  const memo = noop.useMemo(() => React6(ContextMenuSubmenuActionSheetHeaderDefault, { onBack }), items);
  if (interactionMetadata != null) {
    tmp5 =
      interactionMetadata.authorizing_integration_owners[
        message(undefined, 8505).ApplicationIntegrationType.USER_INSTALL
      ];
  }
  dependencyMap = tmp5;
  const interactionMetadata2 = message.interactionMetadata;
  let tmp7;
  if (interactionMetadata2 != null) {
    tmp7 =
      interactionMetadata2.authorizing_integration_owners[
        message(undefined, 8505).ApplicationIntegrationType.GUILD_INSTALL
      ];
  }
  noop = tmp7;
  const interactionMetadata3 = message.interactionMetadata;
  id = undefined;
  if (interactionMetadata3 != null) {
    id = interactionMetadata3.user.id;
  }
  const items1 = [UserStore];
  stateFromStores = message(504).useStateFromStores(items1, () => UserStore.getUser(closure_2));
  let obj = noop;
  const obj2 = message(504);
  const items2 = [id];
  const stateFromStores1 = message(504).useStateFromStores(items2, () => GuildStore.getGuild(closure_3));
  const obj3 = message(504);
  const items3 = [UserStore];
  const stateFromStores2 = message(504).useStateFromStores(items3, () => UserStore.getUser(id));
  id = stateFromStores2;
  const items4 = [stateFromStores, tmp5];
  const effect = obj.useEffect(() => {
    let tmp = null == stateFromStores;
    if (tmp) {
      tmp = null != closure_2;
    }
    if (tmp) {
      const user = UserActionCreators.getUser(closure_2);
    }
  }, items4);
  let tmp15 = stateFromStores2;
  if (null == stateFromStores2) {
    const interactionMetadata4 = message.interactionMetadata;
    let user;
    if (interactionMetadata4 != null) {
      user = interactionMetadata4.user;
    }
    const tmp162 = new stateFromStores(user);
    id = tmp162;
    tmp15 = tmp162;
  }
  if (null != stateFromStores1) {
    const obj5 = { style: tmp.itemContainer, children: null };
    const obj6 = { guild: stateFromStores1, size: tmp10(5896).GuildIconSizes.SMALL_32 };
    const items5 = [closure_8(onBack(5896), obj6)];
    const obj7 = { style: tmp.itemLabel, children: null };
    const obj8 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: stateFromStores1.name };
    const items6 = [closure_8(tmp10(4832).Text, obj8)];
    const obj9 = { variant: "text-xs/medium", color: "text-subtle", children: null };
    const intl2 = tmp10(1115).intl;
    const obj10 = { application: message.author.username };
    obj9.children = intl2.format(tmp10(1115).t.ShLXXB, obj10);
    items6[1] = closure_8(tmp10(4832).Text, obj9);
    obj7.children = items6;
    items5[1] = closure_9(id, obj7);
    obj5.children = items5;
    let tmp26 = closure_9(id, obj5);
    const tmp2Result = onBack(5896);
  } else {
    tmp26 = null;
    if (null != stateFromStores) {
      const obj11 = {
        onPress() {
          return showUserProfileActionSheetDefault({ userId: stateFromStores.id, channelId: message.channel_id });
        },
        children: null,
      };
      const obj12 = { style: tmp.itemContainer, children: null };
      const obj13 = { user: stateFromStores, size: tmp10(1177).AvatarSizes.REFRESH_MEDIUM_32, guildId };
      const items7 = [closure_8(tmp10(1177).Avatar, obj13)];
      const obj14 = { style: tmp.itemLabel, children: null };
      const obj15 = {
        variant: "text-md/semibold",
        color: "mobile-text-heading-primary",
        children: stateFromStores.username,
      };
      const items8 = [closure_8(tmp10(4832).Text, obj15)];
      const obj16 = { variant: "text-xs/medium", color: "text-subtle", children: null };
      const intl = tmp10(1115).intl;
      const obj17 = { application: message.author.username };
      obj16.children = intl.format(tmp10(1115).t.ShLXXB, obj17);
      items8[1] = closure_8(tmp10(4832).Text, obj16);
      obj14.children = items8;
      items7[1] = closure_9(id, obj14);
      obj12.children = items7;
      obj11.children = closure_9(id, obj12);
      tmp26 = closure_8(tmp10(5435).PressableOpacity, obj11);
    }
  }
  const obj18 = { header: memo, bodyStyles: { paddingBottom: onBack(1613)().bottom }, children: null };
  const items9 = [tmp26];
  let tmp32 = null;
  if (null != tmp15) {
    const obj19 = {
      onPress() {
        return showUserProfileActionSheetDefault({ userId: id.id, channelId: message.channel_id });
      },
      children: null,
    };
    const obj20 = { style: tmp.itemContainer, children: null };
    const obj21 = { user: tmp15, size: tmp10(1177).AvatarSizes.REFRESH_MEDIUM_32, guildId };
    const items10 = [closure_8(tmp10(1177).Avatar, obj21)];
    const obj22 = { style: tmp.itemLabel, children: null };
    const obj23 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: tmp15.username };
    const items11 = [closure_8(tmp10(4832).Text, obj23)];
    const obj24 = { variant: "text-xs/medium", color: "text-subtle", children: null };
    const intl3 = tmp10(1115).intl;
    obj24.children = intl3.string(tmp10(1115).t["04gxNg"]);
    items11[1] = closure_8(tmp10(4832).Text, obj24);
    obj22.children = items11;
    items10[1] = closure_9(id, obj22);
    obj20.children = items10;
    obj19.children = closure_9(id, obj20);
    tmp32 = closure_8(tmp10(5435).PressableOpacity, obj19);
  }
  items9[1] = tmp32;
  obj18.children = items9;
  return closure_9(message(6571).BottomSheet, obj18);
}
