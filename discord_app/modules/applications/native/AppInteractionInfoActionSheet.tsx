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
const createStyles = fn(4560);
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
  let obj = noop;
  const items = [onBack];
  const interactionMetadata = message.interactionMetadata;
  let tmp5;
  const memo = noop.useMemo(() => React6(ContextMenuSubmenuActionSheetHeaderDefault, { onBack }), items);
  if (interactionMetadata != null) {
    tmp5 =
      interactionMetadata.authorizing_integration_owners[
        message(undefined, 9245).ApplicationIntegrationType.USER_INSTALL
      ];
  }
  dependencyMap = tmp5;
  const interactionMetadata2 = message.interactionMetadata;
  let tmp7;
  if (interactionMetadata2 != null) {
    tmp7 =
      interactionMetadata2.authorizing_integration_owners[
        message(undefined, 9245).ApplicationIntegrationType.GUILD_INSTALL
      ];
  }
  noop = tmp7;
  const interactionMetadata3 = message.interactionMetadata;
  id = undefined;
  if (interactionMetadata3 != null) {
    id = interactionMetadata3.user.id;
  }
  let obj1 = message(504);
  const items1 = [UserStore];
  stateFromStores = obj1.useStateFromStores(items1, () => UserStore.getUser(closure_2));
  let obj2 = message(504);
  const items2 = [id];
  const stateFromStores1 = obj2.useStateFromStores(items2, () => GuildStore.getGuild(closure_3));
  let obj3 = message(504);
  const items3 = [UserStore];
  const stateFromStores2 = obj3.useStateFromStores(items3, () => UserStore.getUser(id));
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
    let tmp16 = stateFromStores;
    if (interactionMetadata4 != null) {
      user = interactionMetadata4.user;
    }
    tmp16 = new tmp16(user);
    id = tmp16;
    tmp15 = tmp16;
  }
  if (null != stateFromStores1) {
    obj = { style: tmp.itemContainer, children: null };
    obj = { guild: stateFromStores1, size: tmp10(5584).GuildIconSizes.SMALL_32 };
    const items5 = [closure_8(onBack(5584), obj)];
    obj1 = { style: tmp.itemLabel, children: null };
    obj2 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: stateFromStores1.name };
    const items6 = [closure_8(tmp10(4556).Text, obj2)];
    obj3 = { variant: "text-xs/medium", color: "text-subtle", children: null };
    const intl2 = tmp10(1114).intl;
    const obj4 = { application: message.author.username };
    obj3.children = intl2.format(tmp10(1114).t.ShLXXB, obj4);
    items6[1] = closure_8(tmp10(4556).Text, obj3);
    obj1.children = items6;
    items5[1] = closure_9(id, obj1);
    obj.children = items5;
    let tmp26 = closure_9(id, obj);
    const tmp2Result = onBack(5584);
  } else {
    tmp26 = null;
    if (null != stateFromStores) {
      const obj5 = {
        onPress() {
          return showUserProfileActionSheetDefault({ userId: stateFromStores.id, channelId: message.channel_id });
        },
        children: null,
      };
      const obj6 = { style: tmp.itemContainer, children: null };
      const obj7 = { user: stateFromStores, size: tmp10(1178).AvatarSizes.REFRESH_MEDIUM_32, guildId };
      const items7 = [closure_8(tmp10(1178).Avatar, obj7)];
      const obj8 = { style: tmp.itemLabel, children: null };
      const obj9 = {
        variant: "text-md/semibold",
        color: "mobile-text-heading-primary",
        children: stateFromStores.username,
      };
      const items8 = [closure_8(tmp10(4556).Text, obj9)];
      const obj10 = { variant: "text-xs/medium", color: "text-subtle", children: null };
      const intl = tmp10(1114).intl;
      const obj11 = { application: message.author.username };
      obj10.children = intl.format(tmp10(1114).t.ShLXXB, obj11);
      items8[1] = closure_8(tmp10(4556).Text, obj10);
      obj8.children = items8;
      items7[1] = closure_9(id, obj8);
      obj6.children = items7;
      obj5.children = closure_9(id, obj6);
      tmp26 = closure_8(tmp10(5123).PressableOpacity, obj5);
    }
  }
  const obj12 = { header: memo, bodyStyles: { paddingBottom: onBack(1611)().bottom }, children: null };
  const items9 = [tmp26];
  let tmp32 = null;
  if (null != tmp15) {
    const obj13 = {
      onPress() {
        return showUserProfileActionSheetDefault({ userId: id.id, channelId: message.channel_id });
      },
      children: null,
    };
    const obj14 = { style: tmp.itemContainer, children: null };
    const obj15 = { user: tmp15, size: tmp10(1178).AvatarSizes.REFRESH_MEDIUM_32, guildId };
    const items10 = [closure_8(tmp10(1178).Avatar, obj15)];
    const obj16 = { style: tmp.itemLabel, children: null };
    const obj17 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: tmp15.username };
    const items11 = [closure_8(tmp10(4556).Text, obj17)];
    const obj18 = { variant: "text-xs/medium", color: "text-subtle", children: null };
    const intl3 = tmp10(1114).intl;
    obj18.children = intl3.string(tmp10(1114).t["04gxNg"]);
    items11[1] = closure_8(tmp10(4556).Text, obj18);
    obj16.children = items11;
    items10[1] = closure_9(id, obj16);
    obj14.children = items10;
    obj13.children = closure_9(id, obj14);
    tmp32 = closure_8(tmp10(5123).PressableOpacity, obj13);
  }
  items9[1] = tmp32;
  obj12.children = items9;
  return closure_9(message(7150).BottomSheet, obj12);
}
