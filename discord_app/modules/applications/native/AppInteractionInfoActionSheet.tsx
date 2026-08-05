// discord_app/modules/applications/native/AppInteractionInfoActionSheet.tsx
import set from "set";
import { View } from "Button";
import createdAt from "createdAt";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import mergeGuildAvatar from "mergeGuildAvatar";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c9;
let metroImportAll;
const require = arg1;
({ jsx: metroImportAll, jsxs: c9 } = jsxProd);
let closure_10 = createCacheKey.createStyles({ itemContainer: { flexDirection: "row", paddingVertical: 12, paddingHorizontal: 16, alignItems: "center" }, itemLabel: { flexDirection: "column", alignItems: "flex-start", paddingLeft: 12 } });
const result = require("createdAt").fileFinishedImporting("modules/applications/native/AppInteractionInfoActionSheet.tsx");

export default function AppInteractionInfoActionSheet(message) {
  let guildId;
  let onBack;
  message = message.message;
  ({ guildId, onBack } = message);
  let dependencyMap;
  let React;
  let id;
  let stateFromStores;
  let stateFromStores2;
  let tmp = callback3();
  let obj = React;
  const items = [onBack];
  const interactionMetadata = message.interactionMetadata;
  let tmp5;
  const memo = React.useMemo(() => outer1_8(onBack(_undefined[8]), { onBack }), items);
  if (interactionMetadata != null) {
    tmp5 = interactionMetadata.authorizing_integration_owners[message(undefined, 9430).ApplicationIntegrationType.USER_INSTALL];
  }
  dependencyMap = tmp5;
  const interactionMetadata2 = message.interactionMetadata;
  let tmp7;
  if (interactionMetadata2 != null) {
    tmp7 = interactionMetadata2.authorizing_integration_owners[message(undefined, 9430).ApplicationIntegrationType.GUILD_INSTALL];
  }
  React = tmp7;
  const interactionMetadata3 = message.interactionMetadata;
  id = undefined;
  if (interactionMetadata3 != null) {
    id = interactionMetadata3.user.id;
  }
  let obj1 = message(589);
  const items1 = [mergeGuildAvatar];
  stateFromStores = obj1.useStateFromStores(items1, () => outer1_7.getUser(c2));
  let obj2 = message(589);
  const items2 = [stateFromStores2];
  const stateFromStores1 = obj2.useStateFromStores(items2, () => stateFromStores2.getGuild(c3));
  let obj3 = message(589);
  const items3 = [mergeGuildAvatar];
  stateFromStores2 = obj3.useStateFromStores(items3, () => outer1_7.getUser(id));
  const items4 = [stateFromStores, tmp5];
  const effect = obj.useEffect(() => {
    let tmp = null == stateFromStores;
    if (tmp) {
      tmp = null != _undefined;
    }
    if (tmp) {
      const user = message(_undefined[11]).getUser(_undefined);
      const obj = message(_undefined[11]);
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
    stateFromStores2 = tmp16;
    tmp15 = tmp16;
  }
  if (null != stateFromStores1) {
    obj = { style: null, children: null };
    obj[0] = tmp.itemContainer;
    obj = { guild: null, size: null };
    obj[0] = stateFromStores1;
    obj[1] = tmp10(5646).GuildIconSizes.SMALL_32;
    const items5 = [callback(onBack(5646), obj), ];
    obj1 = { style: null, children: null };
    obj1[0] = tmp.itemLabel;
    obj2 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: null };
    obj2[2] = stateFromStores1.name;
    const items6 = [callback(tmp10(4251).Text, obj2), ];
    obj3 = { variant: "text-xs/medium", color: "text-subtle", children: null };
    const intl2 = tmp10(1236).intl;
    const obj4 = { application: null };
    obj4[0] = message.author.username;
    obj3[2] = intl2.format(tmp10(1236).t.ShLXXB, obj4);
    items6[1] = callback(tmp10(4251).Text, obj3);
    obj1[1] = items6;
    items5[1] = callback2(id, obj1);
    obj[1] = items5;
    let tmp26 = callback2(id, obj);
    const tmp2Result = onBack(5646);
  } else {
    tmp26 = null;
    if (null != stateFromStores) {
      const obj5 = { onPress: null, children: null };
      obj5[0] = function onPress() {
        return onBack(_undefined[16])({ userId: stateFromStores.id, channelId: message.channel_id });
      };
      const obj6 = { style: null, children: null };
      obj6[0] = tmp.itemContainer;
      const obj7 = { user: null, size: null, guildId: null };
      obj7[0] = stateFromStores;
      obj7[1] = tmp10(1297).AvatarSizes.REFRESH_MEDIUM_32;
      obj7[2] = guildId;
      const items7 = [callback(tmp10(1297).Avatar, obj7), ];
      const obj8 = { style: null, children: null };
      obj8[0] = tmp.itemLabel;
      const obj9 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: null };
      obj9[2] = stateFromStores.username;
      const items8 = [callback(tmp10(4251).Text, obj9), ];
      const obj10 = { variant: "text-xs/medium", color: "text-subtle", children: null };
      const intl = tmp10(1236).intl;
      const obj11 = { application: null };
      obj11[0] = message.author.username;
      obj10[2] = intl.format(tmp10(1236).t.ShLXXB, obj11);
      items8[1] = callback(tmp10(4251).Text, obj10);
      obj8[1] = items8;
      items7[1] = callback2(id, obj8);
      obj6[1] = items7;
      obj5[1] = callback2(id, obj6);
      tmp26 = callback(tmp10(4797).PressableOpacity, obj5);
    }
  }
  const obj12 = { header: memo, bodyStyles: { paddingBottom: onBack(1581)().bottom }, children: null };
  const items9 = [tmp26, ];
  let tmp32 = null;
  if (null != tmp15) {
    const obj13 = { onPress: null, children: null };
    obj13[0] = function onPress() {
      return onBack(_undefined[16])({ userId: stateFromStores2.id, channelId: message.channel_id });
    };
    const obj14 = { style: null, children: null };
    obj14[0] = tmp.itemContainer;
    const obj15 = { user: null, size: null, guildId: null };
    obj15[0] = tmp15;
    obj15[1] = tmp10(1297).AvatarSizes.REFRESH_MEDIUM_32;
    obj15[2] = guildId;
    const items10 = [callback(tmp10(1297).Avatar, obj15), ];
    const obj16 = { style: null, children: null };
    obj16[0] = tmp.itemLabel;
    const obj17 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: null };
    obj17[2] = tmp15.username;
    const items11 = [callback(tmp10(4251).Text, obj17), ];
    const obj18 = { variant: "text-xs/medium", color: "text-subtle", children: null };
    const intl3 = tmp10(1236).intl;
    obj18[2] = intl3.string(tmp10(1236).t["04gxNg"]);
    items11[1] = callback(tmp10(4251).Text, obj18);
    obj16[1] = items11;
    items10[1] = tmp31(id, obj16);
    obj14[1] = items10;
    obj13[1] = tmp31(id, obj14);
    tmp32 = callback(tmp10(4797).PressableOpacity, obj13);
  }
  items9[1] = tmp32;
  obj12[2] = items9;
  return callback2(message(5323).BottomSheet, obj12);
};