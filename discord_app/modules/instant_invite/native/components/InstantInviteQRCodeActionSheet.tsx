// discord_app/modules/instant_invite/native/components/InstantInviteQRCodeActionSheet.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import GuildIconSizesDefault from "../../../guild/native/GuildIcon.tsx";
import frozenDefault from "../../../../components_native/QRCode.tsx";
import closure_3 from "../../../../../_runtime/00019_noop.js";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_5 from "../../../../stores/GuildStore.tsx";
import closure_6 from "../../../../stores/UserStore.tsx";
import ME from "../../../../Constants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
({ InstantInviteSources: error, RelationshipTypes: closure_8 } = ME);
({ jsx: c9, jsxs: c10 } = jsxProd);
createCacheKey = { container: null, iconContainer: null, icon: null, code: null };
createCacheKey = {
  padding: ThemesDefault.space.PX_12,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: ThemesDefault.space.PX_24,
};
createCacheKey[0] = createCacheKey;
createCacheKey[1] = {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  justifyContent: "center",
  alignItems: "center",
};
createCacheKey[2] = {
  padding: ThemesDefault.space.PX_4,
  borderRadius: ThemesDefault.radii.lg + ThemesDefault.space.PX_4,
  backgroundColor: ThemesDefault.colors.WHITE,
};
createCacheKey[3] = { alignSelf: "center" };
let closure_11 = createCacheKey.createStyles(createCacheKey);
let obj1 = {
  padding: ThemesDefault.space.PX_4,
  borderRadius: ThemesDefault.radii.lg + ThemesDefault.space.PX_4,
  backgroundColor: ThemesDefault.colors.WHITE,
};
const result = require("set").fileFinishedImporting(
  "modules/instant_invite/native/components/InstantInviteQRCodeActionSheet.tsx",
);

export default function InstantInviteQRCodeActionSheet(location) {
  const tmp = callback2();
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
  const items = [closure_6];
  const stateFromStores = tmp6(504).useStateFromStores(items, () => currentUser.getCurrentUser());
  if (null != channel) {
    const guild = store.getGuild(channel.guild_id);
    if (null != guild) {
      let obj = { visible: null, plainText: null };
      const intl5 = tmp6(1114).intl;
      obj = { name: null };
      obj[0] = guild.name;
      obj[0] = intl5.format(tmp6(1114).t.VK3zyF, obj);
      const intl6 = tmp6(1114).intl;
      obj1 = { name: null };
      obj1[0] = guild.name;
      obj[1] = intl6.formatToPlainString(tmp6(1114).t.VK3zyF, obj1);
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
        obj2[1] = tmp6(5584).GuildIconSizes.LARGE;
        tmp13 = callback(GuildIconSizesDefault, obj2);
        const tmp16 = GuildIconSizesDefault;
      }
    }
    presentFriendRequestAcceptedToast = tmp6(4258).presentFriendRequestAcceptedToast;
    const items1 = [presentFriendRequestAcceptedToast];
    const effect = React.useEffect(() => {
      function handleRelationshipAdd(relationship) {
        relationship = relationship.relationship;
        if (relationship.type === closure_1_8.FRIEND) {
          handleRelationshipAdd(relationship.user);
        }
      }
      const subscription = closure_1_1(closure_1_2[11]).subscribe("RELATIONSHIP_ADD", handleRelationshipAdd);
      return () => {
        closure_2_1(closure_2_2[11]).unsubscribe("RELATIONSHIP_ADD", handleRelationshipAdd);
      };
    }, items1);
    const obj3 = { header: null, children: null };
    const obj4 = { title: null };
    obj4[0] = stringResult;
    obj3[0] = callback(tmp6(7149).BottomSheetTitleHeader, obj4);
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
    const items2 = [callback(frozenDefault, obj6)];
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
    const items3 = [closure_10(View, obj9)];
    tmp19Result = null != tmp12;
    if (tmp19Result) {
      const obj10 = { variant: "text-md/normal", children: null };
      obj10[1] = tmp12.visible;
      tmp19Result = tmp19(tmp6(4556).Text, obj10);
    }
    items3[1] = tmp19Result;
    obj5[1] = items3;
    obj3[1] = closure_10(View, obj5);
    return callback(tmp6(7198).ActionSheet, obj3);
  }
  tmp12 = null;
  if (_location === constants.ADD_FRIENDS_MODAL) {
    tmp12 = null;
    if (null != stateFromStores) {
      const obj11 = { visible: null, plainText: null };
      const intl3 = tmp6(1114).intl;
      const obj12 = { name: null };
      obj12[0] = stateFromStores.username;
      obj11[0] = intl3.format(tmp6(1114).t.zDGAfl, obj12);
      const intl4 = tmp6(1114).intl;
      const obj13 = { name: null };
      obj13[0] = stateFromStores.username;
      obj11[1] = intl4.formatToPlainString(tmp6(1114).t.zDGAfl, obj13);
      tmp12 = obj11;
    }
  }
}
