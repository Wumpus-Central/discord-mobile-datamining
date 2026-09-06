// discord_app/modules/applications/native/AppInteractionInfoActionSheet.tsx
import closure_3 from "../../../../_runtime/00019_noop.js";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_5 from "../../../records/UserRecord.tsx";
import closure_6 from "../../../stores/GuildStore.tsx";
import closure_7 from "../../../stores/UserStore.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
({ jsx: closure_8, jsxs: c9 } = jsxProd);
let closure_10 = createCacheKey.createStyles({
  itemContainer: { flexDirection: "row", paddingVertical: 12, paddingHorizontal: 16, alignItems: "center" },
  itemLabel: { flexDirection: "column", alignItems: "flex-start", paddingLeft: 12 },
});
const result = require("set").fileFinishedImporting("modules/applications/native/AppInteractionInfoActionSheet.tsx");

export default function AppInteractionInfoActionSheet(message) {
  message = message.message;
  ({ guildId, onBack } = message);
  dependencyMap = undefined;
  let React;
  let id;
  let stateFromStores;
  closure_6 = undefined;
  let tmp = callback3();
  let obj = React;
  const items = [onBack];
  const interactionMetadata = message.interactionMetadata;
  let tmp5;
  const memo = React.useMemo(() => closure_1_8(onBack(11728), { onBack }), items);
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
  React = tmp7;
  const interactionMetadata3 = message.interactionMetadata;
  id = undefined;
  if (interactionMetadata3 != null) {
    id = interactionMetadata3.user.id;
  }
  obj1 = message(504);
  const items1 = [closure_7];
  stateFromStores = obj1.useStateFromStores(items1, () => closure_1_7.getUser(closure_2));
  let obj2 = message(504);
  const items2 = [closure_6];
  const stateFromStores1 = obj2.useStateFromStores(items2, () => guild.getGuild(closure_3));
  let obj3 = message(504);
  const items3 = [closure_7];
  const stateFromStores2 = obj3.useStateFromStores(items3, () => closure_1_7.getUser(id));
  closure_6 = stateFromStores2;
  const items4 = [stateFromStores, tmp5];
  const effect = obj.useEffect(() => {
    let tmp = null == stateFromStores;
    if (tmp) {
      tmp = null != dependencyMap;
    }
    if (tmp) {
      const user = message(8181).getUser(dependencyMap);
      const obj = message(8181);
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
    closure_6 = tmp16;
    tmp15 = tmp16;
  }
  if (null != stateFromStores1) {
    obj = { style: null, children: null };
    obj[0] = tmp.itemContainer;
    obj = { guild: null, size: null };
    obj[0] = stateFromStores1;
    obj[1] = tmp10(5584).GuildIconSizes.SMALL_32;
    const items5 = [callback(onBack(5584), obj)];
    obj1 = { style: null, children: null };
    obj1[0] = tmp.itemLabel;
    obj2 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: null };
    obj2[2] = stateFromStores1.name;
    const items6 = [callback(tmp10(4556).Text, obj2)];
    obj3 = { variant: "text-xs/medium", color: "text-subtle", children: null };
    const intl2 = tmp10(1114).intl;
    const obj4 = { application: null };
    obj4[0] = message.author.username;
    obj3[2] = intl2.format(tmp10(1114).t.ShLXXB, obj4);
    items6[1] = callback(tmp10(4556).Text, obj3);
    obj1[1] = items6;
    items5[1] = callback2(id, obj1);
    obj[1] = items5;
    let tmp26 = callback2(id, obj);
    const tmp2Result = onBack(5584);
  } else {
    tmp26 = null;
    if (null != stateFromStores) {
      const obj5 = { onPress: null, children: null };
      obj5[0] = function onPress() {
        return onBack(8179)({ userId: stateFromStores.id, channelId: message.channel_id });
      };
      const obj6 = { style: null, children: null };
      obj6[0] = tmp.itemContainer;
      const obj7 = { user: null, size: null, guildId: null };
      obj7[0] = stateFromStores;
      obj7[1] = tmp10(1178).AvatarSizes.REFRESH_MEDIUM_32;
      obj7[2] = guildId;
      const items7 = [callback(tmp10(1178).Avatar, obj7)];
      const obj8 = { style: null, children: null };
      obj8[0] = tmp.itemLabel;
      const obj9 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: null };
      obj9[2] = stateFromStores.username;
      const items8 = [callback(tmp10(4556).Text, obj9)];
      const obj10 = { variant: "text-xs/medium", color: "text-subtle", children: null };
      const intl = tmp10(1114).intl;
      const obj11 = { application: null };
      obj11[0] = message.author.username;
      obj10[2] = intl.format(tmp10(1114).t.ShLXXB, obj11);
      items8[1] = callback(tmp10(4556).Text, obj10);
      obj8[1] = items8;
      items7[1] = callback2(id, obj8);
      obj6[1] = items7;
      obj5[1] = callback2(id, obj6);
      tmp26 = callback(tmp10(5123).PressableOpacity, obj5);
    }
  }
  const obj12 = { header: memo, bodyStyles: { paddingBottom: onBack(1611)().bottom }, children: null };
  const items9 = [tmp26];
  let tmp32 = null;
  if (null != tmp15) {
    const obj13 = { onPress: null, children: null };
    obj13[0] = function onPress() {
      return onBack(8179)({ userId: guild.id, channelId: message.channel_id });
    };
    const obj14 = { style: null, children: null };
    obj14[0] = tmp.itemContainer;
    const obj15 = { user: null, size: null, guildId: null };
    obj15[0] = tmp15;
    obj15[1] = tmp10(1178).AvatarSizes.REFRESH_MEDIUM_32;
    obj15[2] = guildId;
    const items10 = [callback(tmp10(1178).Avatar, obj15)];
    const obj16 = { style: null, children: null };
    obj16[0] = tmp.itemLabel;
    const obj17 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: null };
    obj17[2] = tmp15.username;
    const items11 = [callback(tmp10(4556).Text, obj17)];
    const obj18 = { variant: "text-xs/medium", color: "text-subtle", children: null };
    const intl3 = tmp10(1114).intl;
    obj18[2] = intl3.string(tmp10(1114).t["04gxNg"]);
    items11[1] = callback(tmp10(4556).Text, obj18);
    obj16[1] = items11;
    items10[1] = tmp31(id, obj16);
    obj14[1] = items10;
    obj13[1] = tmp31(id, obj14);
    tmp32 = callback(tmp10(5123).PressableOpacity, obj13);
  }
  items9[1] = tmp32;
  obj12[2] = items9;
  return callback2(message(7150).BottomSheet, obj12);
}
