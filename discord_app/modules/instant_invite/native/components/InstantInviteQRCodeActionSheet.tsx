// discord_app/modules/instant_invite/native/components/InstantInviteQRCodeActionSheet.tsx
import noop from "noop";
import { View } from "set";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import mergeGuildAvatar from "mergeGuildAvatar";
import ME from "ME";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { frozen } from "../../../../components_native/QRCode.tsx";
import { GuildIconSizes } from "../../../guild/native/GuildIcon.tsx";

let c10;
let c9;
let error;
let metroImportAll;
const require = arg1;
({ InstantInviteSources: error, RelationshipTypes: metroImportAll } = ME);
({ jsx: c9, jsxs: c10 } = jsxProd);
createCacheKey = { container: null, iconContainer: null, icon: null, code: null };
createCacheKey = { padding: require("Themes").space.PX_12, display: "flex", alignItems: "center", justifyContent: "center", gap: require("Themes").space.PX_24 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, justifyContent: "center", alignItems: "center" };
let obj1 = { padding: require("Themes").space.PX_4, borderRadius: null, backgroundColor: null };
obj1[1] = require("Themes").radii.lg + require("Themes").space.PX_4;
obj1[2] = require("Themes").colors.WHITE;
createCacheKey[2] = obj1;
createCacheKey[3] = { alignSelf: "center" };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("createGuildRecordFromRust").fileFinishedImporting("modules/instant_invite/native/components/InstantInviteQRCodeActionSheet.tsx");

export default function InstantInviteQRCodeActionSheet(location) {
  let _location;
  let channel;
  const tmp = createCacheKey();
  if (location.location === constants.ADD_FRIENDS_MODAL) {
    const intl2 = presentFriendRequestAcceptedToast(1236).intl;
    let stringResult = intl2.string(presentFriendRequestAcceptedToast(1236).t.VUNqoc);
    let tmp6 = presentFriendRequestAcceptedToast;
  } else {
    const intl = presentFriendRequestAcceptedToast(1236).intl;
    stringResult = intl.string(presentFriendRequestAcceptedToast(1236).t.DqE26p);
    tmp6 = presentFriendRequestAcceptedToast;
  }
  ({ channel, location: _location } = location);
  const items = [mergeGuildAvatar];
  const stateFromStores = tmp6(589).useStateFromStores(items, () => currentUser.getCurrentUser());
  if (null != channel) {
    const guild = store.getGuild(channel.guild_id);
    if (null != guild) {
      let obj = { visible: null, plainText: null };
      const intl5 = tmp6(1236).intl;
      obj = { name: null };
      obj[0] = guild.name;
      obj[0] = intl5.format(tmp6(1236).t.VK3zyF, obj);
      const intl6 = tmp6(1236).intl;
      const obj1 = { name: null };
      obj1[0] = guild.name;
      obj[1] = intl6.formatToPlainString(tmp6(1236).t.VK3zyF, obj1);
      let tmp12 = obj;
    }
    const channel2 = location.channel;
    let tmp13 = null;
    if (null != channel2) {
      let obj7 = store;
      tmp13 = null;
      if (null != store.getGuild(channel2.guild_id)) {
        const obj2 = { guild: null, size: null };
        obj2[0] = obj7.getGuild(channel2.guild_id);
        obj2[1] = tmp6(5819).GuildIconSizes.LARGE;
        tmp13 = callback(GuildIconSizes, obj2);
        const tmp16 = GuildIconSizes;
      }
    }
    presentFriendRequestAcceptedToast = tmp6(4061).presentFriendRequestAcceptedToast;
    const items1 = [presentFriendRequestAcceptedToast];
    const effect = React.useEffect(() => {
      function handleRelationshipAdd(relationship) {
        relationship = relationship.relationship;
        if (relationship.type === outer1_8.FRIEND) {
          handleRelationshipAdd(relationship.user);
        }
      }
      const subscription = outer1_1(outer1_2[11]).subscribe("RELATIONSHIP_ADD", handleRelationshipAdd);
      return () => {
        outer2_1(outer2_2[11]).unsubscribe("RELATIONSHIP_ADD", handleRelationshipAdd);
      };
    }, items1);
    const obj3 = { header: null, children: null };
    const obj4 = { title: null };
    obj4[0] = stringResult;
    obj3[0] = callback(tmp6(5436).BottomSheetTitleHeader, obj4);
    const obj5 = { style: null, children: null };
    obj5[0] = tmp.container;
    const obj6 = { text: null, size: 240, style: null, accessibilityLabel: null };
    obj6[0] = location.link;
    obj6[2] = tmp.code;
    let plainText;
    if (tmp12 != null) {
      plainText = tmp12.plainText;
    }
    obj6[3] = plainText;
    const items2 = [callback(frozen, obj6), ];
    let tmp19Result = null != tmp13;
    if (tmp19Result) {
      obj7 = { style: null, children: null };
      obj7[0] = tmp.iconContainer;
      const obj8 = { style: null, children: null };
      obj8[0] = tmp.icon;
      obj8[1] = tmp13;
      obj7[1] = tmp19(tmp21, obj8);
      tmp19Result = tmp19(tmp21, obj7);
    }
    const obj9 = { children: null };
    items2[1] = tmp19Result;
    obj9[0] = items2;
    const items3 = [closure_10(View, obj9), ];
    tmp19Result = null != tmp12;
    if (tmp19Result) {
      const obj10 = { variant: "text-md/normal", children: null };
      obj10[1] = tmp12.visible;
      tmp19Result = tmp19(tmp6(4338).Text, obj10);
    }
    items3[1] = tmp19Result;
    obj5[1] = items3;
    obj3[1] = closure_10(View, obj5);
    return callback(tmp6(5804).ActionSheet, obj3);
  }
  tmp12 = null;
  if (_location === constants.ADD_FRIENDS_MODAL) {
    tmp12 = null;
    if (null != stateFromStores) {
      const obj11 = { visible: null, plainText: null };
      const intl3 = tmp6(1236).intl;
      const obj12 = { name: null };
      obj12[0] = stateFromStores.username;
      obj11[0] = intl3.format(tmp6(1236).t.zDGAfl, obj12);
      const intl4 = tmp6(1236).intl;
      const obj13 = { name: null };
      obj13[0] = stateFromStores.username;
      obj11[1] = intl4.formatToPlainString(tmp6(1236).t.zDGAfl, obj13);
      tmp12 = obj11;
    }
  }
};