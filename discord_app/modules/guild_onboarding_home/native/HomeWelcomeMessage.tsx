// discord_app/modules/guild_onboarding_home/native/HomeWelcomeMessage.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import maybeFetchUserProfileDefault from "../../user_profile/maybeFetchUserProfile.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import GuildStore from "../../../stores/GuildStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";
import GuildOnboardingHomeSettingsStore from "../GuildOnboardingHomeSettingsStore.tsx";

const require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
fn(4560);
let createStyles = {
  relativeContainer: { position: "relative" },
  welcomeContainer: null,
  welcomeContent: null,
  avatarBackground: null,
  avatarBorder: null,
  avatar: null,
  adminUsernameContainer: null,
  adminUsername: null,
  message: null,
  icon: null,
};
createStyles = {
  marginHorizontal: 12,
  marginVertical: 16,
  borderRadius: nativeDefault.radii.sm,
  padding: 2,
  display: "flex",
  flexDirection: "column",
};
createStyles.welcomeContainer = createStyles;
createStyles.welcomeContent = {
  borderRadius: nativeDefault.radii.sm,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  paddingHorizontal: 12,
  paddingBottom: 12,
  paddingTop: 4,
};
let size = {
  position: "absolute",
  zIndex: 2,
  top: 0,
  left: 28,
  width: 40,
  height: 40,
  borderRadius: nativeDefault.radii.round,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
};
createStyles.avatarBackground = size;
const size1 = {
  position: "absolute",
  top: -2,
  zIndex: -1,
  left: 26,
  width: 44,
  height: 44,
  borderRadius: nativeDefault.radii.round,
};
createStyles.avatarBorder = size1;
createStyles.avatar = { position: "absolute", top: 0, zIndex: 3, left: 28 };
createStyles.adminUsernameContainer = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  marginBottom: 4,
  paddingLeft: 44,
};
let obj1 = {
  borderRadius: nativeDefault.radii.sm,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  paddingHorizontal: 12,
  paddingBottom: 12,
  paddingTop: 4,
};
createStyles.adminUsername = { color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, paddingLeft: 8 };
let obj2 = { color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, paddingLeft: 8 };
createStyles.message = { color: nativeDefault.colors.TEXT_DEFAULT };
createStyles.icon = { marginLeft: 4 };
let closure_10 = createStyles.createStyles(createStyles);
size = fn(2);
const result = size.fileFinishedImporting("modules/guild_onboarding_home/native/HomeWelcomeMessage.tsx");

export default function HomeWelcomeMessage(guildId) {
  let diff;
  guildId = guildId.guildId;
  let stateFromStores2;
  let stateFromStores3;
  const tmp = closure_10();
  let tmp2 = guildId;
  let tmp3 = stateFromStores2;
  let obj = guildId(stateFromStores2[8]);
  const items = [UserStore];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  let obj1 = guildId(stateFromStores2[8]);
  const items1 = [GuildOnboardingHomeSettingsStore];
  const stateFromStores1 = obj1.useStateFromStores(items1, () =>
    GuildOnboardingHomeSettingsStore.getWelcomeMessage(guildId),
  );
  let obj2 = guildId(stateFromStores2[8]);
  const items2 = [UserStore];
  stateFromStores2 = obj2.useStateFromStores(items2, () => {
    let first;
    if (stateFromStores1 != null) {
      first = stateFromStores1.authorIds[0];
    }
    return UserStore.getUser(first);
  });
  let id;
  if (stateFromStores2 != null) {
    id = stateFromStores2.id;
  }
  const tmp8 = stateFromStores1(stateFromStores2[9]);
  const tmp8Result = stateFromStores1(stateFromStores2[9])(id, guildId);
  ({ primaryColor, secondaryColor, theme } = stateFromStores1(tmp3[10])({
    user: stateFromStores2,
    displayProfile: stateFromStores1(stateFromStores2[9])(id, guildId),
  }));
  let tmp2Result = tmp2(tmp3[8]);
  const items3 = [GuildStore];
  stateFromStores3 = tmp2Result.useStateFromStores(items3, () => GuildStore.getGuild(guildId));
  tmp2Result = tmp2(tmp3[11]);
  let authorIds;
  if (stateFromStores1 != null) {
    authorIds = stateFromStores1.authorIds;
  }
  if (authorIds == null) {
    authorIds = [];
  }
  obj = {};
  obj[guildId] = authorIds;
  const subscribeGuildMembers = tmp2Result.useSubscribeGuildMembers(obj, "HomeWelcomeMessage");
  const items4 = [stateFromStores2, stateFromStores3];
  const effect = stateFromStores3.useEffect(() => {
    let obj = stateFromStores2;
    if (!tmp) {
      id = undefined;
      ({ id, getAvatarURL } = obj);
      if (stateFromStores3 != null) {
        id = tmp5.id;
      }
      let id1;
      const avatarURL = getAvatarURL(id, 80);
      if (stateFromStores3 != null) {
        id1 = tmp5.id;
      }
      obj = { dispatchWait: true, guildId: id1 };
      maybeFetchUserProfileDefault(id, avatarURL, obj);
    }
  }, items4);
  const tmp11 = stateFromStores1(tmp3[10])({
    user: stateFromStores2,
    displayProfile: stateFromStores1(stateFromStores2[9])(id, guildId),
  });
  const name = tmp2(tmp3[13]).useName(stateFromStores);
  if (null != stateFromStores1) {
    if (null != stateFromStores) {
      if (null != stateFromStores2) {
        const items5 = ["#B8CDFF", "#8CD9FF"];
        obj = { theme, primaryColor, secondaryColor, children: null };
        obj1 = { style: tmp.relativeContainer, children: null };
        if (null != stateFromStores2.avatarDecoration) {
          const items6 = [null, , ,];
          obj2 = { style: tmp.avatarBackground };
          items6[1] = tmp17(tmp20, obj2);
          const obj3 = { style: tmp.avatar, user: stateFromStores2, size: null, disableStatus: true };
          let tmp7Result = tmp7(tmp3[16]);
          obj3.size = tmp2(tmp3[17]).AvatarSizes.NORMAL;
          items6[2] = tmp17(tmp7Result, obj3);
          const obj4 = {
            containerStyle: tmp.welcomeContainer,
            primaryColor,
            secondaryColor,
            fallbackBackground: items5,
            children: null,
          };
          const obj5 = { style: tmp.welcomeContent, children: null };
          const obj6 = { style: tmp.adminUsernameContainer, children: null };
          tmp7Result = tmp7(tmp3[18]);
          const obj7 = {
            style: tmp.adminUsername,
            variant: "text-md/semibold",
            children: tmp7(tmp3[20]).getName(guildId, null, stateFromStores2),
          };
          const items7 = [tmp17(tmp2(tmp3[19]).Text, obj7)];
          let tmp17Result = null;
          if (tmp16) {
            const obj8 = {
              size: tmp2(tmp3[17]).Icon.Sizes.REFRESH_SMALL_16,
              style: tmp.icon,
              source: tmp7(tmp3[21]),
              disableColor: true,
            };
            tmp17Result = tmp17(tmp2(tmp3[17]).Icon, obj8);
          }
          items7[1] = tmp17Result;
          obj6.children = items7;
          const items8 = [tmp19(tmp20, obj6)];
          let username = name;
          if (name == null) {
            username = stateFromStores.username;
          }
          const parts = stateFromStores1.message.split(/\[@username\]/g);
          const items9 = [];
          let tmp28 = tmp17;
          let num3 = 0;
          if (0 < parts.length - 1) {
            do {
              let obj9 = { variant: "text-sm/normal", style: tmp.message, children: parts[num3] };
              let arr = items9.push(closure_8(guildId(stateFromStores2[19]).Text, obj9, num3));
              let obj10 = { variant: "text-sm/bold", style: tmp.message, children: null };
              let _HermesInternal = HermesInternal;
              obj10.children = "@" + username;
              let _HermesInternal2 = HermesInternal;
              arr = items9.push(closure_8(guildId(stateFromStores2[19]).Text, obj10, "" + num3 + "-user"));
              num3 = num3 + 1;
              tmp3 = stateFromStores2;
              tmp2 = guildId;
              tmp28 = closure_8;
              diff = parts.length - 1;
            } while (num3 < diff);
          }
          const obj11 = { variant: "text-sm/normal", children: null };
          const obj12 = { variant: "text-sm/normal", style: tmp.message, children: parts[parts.length - 1] };
          items9.push(tmp28(tmp2(tmp3[19]).Text, obj12, parts.length));
          obj11.children = items9;
          items8[1] = tmp17(tmp2(tmp3[19]).Text, obj11);
          obj5.children = items8;
          obj4.children = tmp19(tmp20, obj5);
          items6[3] = tmp17(tmp7Result, obj4);
          obj1.children = items6;
          obj.children = tmp19(tmp20, obj1);
          return tmp17(tmp18, obj);
        } else {
          const items10 = [tmp.avatarBorder];
          if (null != primaryColor) {
            let int2rgbaResult = tmp2(tmp3[15]).int2rgba(primaryColor, 1);
            const tmp2Result2 = tmp2(tmp3[15]);
          } else {
            int2rgbaResult = items5[0];
          }
          const obj13 = { style: null };
          const obj14 = { backgroundColor: int2rgbaResult };
          items10[1] = obj14;
          obj13.style = items10;
          tmp17Result = tmp17(tmp20, obj13);
        }
        tmp16 = null != stateFromStores3 && stateFromStores3.ownerId === stateFromStores2.id;
      }
    }
  }
  return null;
}
