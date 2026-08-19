// === Module 15817: HomeWelcomeMessage ===

// Module 15817 (HomeWelcomeMessage)
import ThemesDefault from "Themes" /* 712 */;
import closure_3 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_5 from "createGuildRecordFromRust" /* 1910 */;
import closure_6 from "mergeGuildAvatar" /* 1922 */;
import closure_7 from "handleSettingsLoadSuccess" /* 5048 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

const require = arg1;
({ jsx: closure_8, jsxs: c9 } = jsxProd);
createCacheKey = { relativeContainer: { position: "relative" }, welcomeContainer: null, welcomeContent: null, avatarBackground: null, avatarBorder: null, avatar: null, adminUsernameContainer: null, adminUsername: null, message: null, icon: null };
createCacheKey = { marginHorizontal: 12, marginVertical: 16, borderRadius: ThemesDefault.radii.sm, padding: 2, display: "flex", flexDirection: "column" };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { borderRadius: ThemesDefault.radii.sm, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW, paddingHorizontal: 12, paddingBottom: 12, paddingTop: 4 };
let obj1 = { borderRadius: ThemesDefault.radii.sm, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW, paddingHorizontal: 12, paddingBottom: 12, paddingTop: 4 };
createCacheKey[3] = { position: "absolute", zIndex: 2, top: 0, left: 28, width: 40, height: 40, borderRadius: ThemesDefault.radii.round, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW };
let obj2 = { position: "absolute", zIndex: 2, top: 0, left: 28, width: 40, height: 40, borderRadius: ThemesDefault.radii.round, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW };
createCacheKey[4] = { position: "absolute", top: -2, zIndex: -1, left: 26, width: 44, height: 44, borderRadius: ThemesDefault.radii.round };
createCacheKey[5] = { position: "absolute", top: 0, zIndex: 3, left: 28 };
createCacheKey[6] = { display: "flex", flexDirection: "row", alignItems: "center", marginBottom: 4, paddingLeft: 44 };
let obj3 = { position: "absolute", top: -2, zIndex: -1, left: 26, width: 44, height: 44, borderRadius: ThemesDefault.radii.round };
createCacheKey[7] = { color: ThemesDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, paddingLeft: 8 };
let obj4 = { color: ThemesDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, paddingLeft: 8 };
createCacheKey[8] = { color: ThemesDefault.colors.TEXT_DEFAULT };
createCacheKey[9] = { marginLeft: 4 };
let closure_10 = createCacheKey.createStyles(createCacheKey);
let obj5 = { color: ThemesDefault.colors.TEXT_DEFAULT };
const result = require("set").fileFinishedImporting("modules/guild_onboarding_home/native/HomeWelcomeMessage.tsx");

export default function HomeWelcomeMessage(guildId) {
  let diff;
  guildId = guildId.guildId;
  let stateFromStores1;
  let stateFromStores2;
  let stateFromStores3;
  const tmp = callback2();
  let tmp2 = guildId;
  let tmp3 = stateFromStores2;
  let obj = guildId(stateFromStores2[8]);
  const items = [closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  obj1 = guildId(stateFromStores2[8]);
  const items1 = [closure_7];
  stateFromStores1 = obj1.useStateFromStores(items1, () => closure_1_7.getWelcomeMessage(guildId));
  let obj2 = guildId(stateFromStores2[8]);
  const items2 = [closure_6];
  stateFromStores2 = obj2.useStateFromStores(items2, () => {
    let first;
    if (stateFromStores1 != null) {
      first = stateFromStores1.authorIds[0];
    }
    return closure_1_6.getUser(first);
  });
  let id;
  if (stateFromStores2 != null) {
    id = stateFromStores2.id;
  }
  const tmp8 = stateFromStores1(stateFromStores2[9]);
  const tmp8Result = stateFromStores1(stateFromStores2[9])(id, guildId);
  ({ primaryColor, secondaryColor, theme } = stateFromStores1(tmp3[10])({ user: stateFromStores2, displayProfile: stateFromStores1(stateFromStores2[9])(id, guildId) }));
  let tmp2Result = tmp2(tmp3[8]);
  const items3 = [closure_5];
  stateFromStores3 = tmp2Result.useStateFromStores(items3, () => closure_1_5.getGuild(guildId));
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
      obj = { dispatchWait: true, guildId: null };
      obj[1] = id1;
      stateFromStores1(stateFromStores2[12])(id, avatarURL, obj);
      const tmp4 = stateFromStores1(stateFromStores2[12]);
    }
  }, items4);
  const tmp11 = stateFromStores1(tmp3[10])({ user: stateFromStores2, displayProfile: stateFromStores1(stateFromStores2[9])(id, guildId) });
  const name = tmp2(tmp3[13]).useName(stateFromStores);
  if (null != stateFromStores1) {
    if (null != stateFromStores) {
      if (null != stateFromStores2) {
        const items5 = ["#B8CDFF", "#8CD9FF"];
        obj = { theme: null, primaryColor: null, secondaryColor: null, children: null };
        obj[0] = theme;
        obj[1] = primaryColor;
        obj[2] = secondaryColor;
        obj1 = { style: null, children: null };
        obj1[0] = tmp.relativeContainer;
        if (null != stateFromStores2.avatarDecoration) {
          const items6 = [null, , , ];
          obj2 = { style: null };
          obj2[0] = tmp.avatarBackground;
          items6[1] = tmp17(tmp20, obj2);
          const obj3 = { style: null, user: null, size: null, disableStatus: true };
          obj3[0] = tmp.avatar;
          obj3[1] = stateFromStores2;
          let tmp7Result = tmp7(tmp3[16]);
          obj3[2] = tmp2(tmp3[17]).AvatarSizes.NORMAL;
          items6[2] = tmp17(tmp7Result, obj3);
          const obj4 = { containerStyle: null, primaryColor: null, secondaryColor: null, fallbackBackground: null, children: null };
          obj4[0] = tmp.welcomeContainer;
          obj4[1] = primaryColor;
          obj4[2] = secondaryColor;
          obj4[3] = items5;
          const obj5 = { style: null, children: null };
          obj5[0] = tmp.welcomeContent;
          const obj6 = { style: null, children: null };
          obj6[0] = tmp.adminUsernameContainer;
          tmp7Result = tmp7(tmp3[18]);
          const obj7 = { style: null, variant: "text-md/semibold", children: null };
          obj7[0] = tmp.adminUsername;
          obj7[2] = tmp7(tmp3[20]).getName(guildId, null, stateFromStores2);
          const items7 = [tmp17(tmp2(tmp3[19]).Text, obj7), ];
          let tmp17Result = null;
          if (tmp16) {
            const obj8 = { size: null, style: null, source: null, disableColor: true };
            obj8[0] = tmp2(tmp3[17]).Icon.Sizes.REFRESH_SMALL_16;
            obj8[1] = tmp.icon;
            obj8[2] = tmp7(tmp3[21]);
            tmp17Result = tmp17(tmp2(tmp3[17]).Icon, obj8);
          }
          items7[1] = tmp17Result;
          obj6[1] = items7;
          const items8 = [tmp19(tmp20, obj6), ];
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
              let tmp29 = callback;
              let tmp30 = guildId;
              let tmp31 = stateFromStores2;
              let obj9 = { variant: "text-sm/normal", style: null, children: null };
              obj9[1] = tmp.message;
              obj9[2] = parts[num3];
              let arr = items9.push(callback(guildId(stateFromStores2[19]).Text, obj9, num3));
              let obj10 = { variant: "text-sm/bold", style: null, children: null };
              obj10[1] = tmp.message;
              let _HermesInternal = HermesInternal;
              obj10[2] = "@" + username;
              let _HermesInternal2 = HermesInternal;
              arr = items9.push(callback(guildId(stateFromStores2[19]).Text, obj10, "" + num3 + "-user"));
              num3 = num3 + 1;
              tmp3 = stateFromStores2;
              tmp2 = guildId;
              tmp28 = callback;
              diff = parts.length - 1;
            } while (num3 < diff);
          }
          const obj11 = { variant: "text-sm/normal", children: null };
          const obj12 = { variant: "text-sm/normal", style: null, children: null };
          obj12[1] = tmp.message;
          obj12[2] = parts[parts.length - 1];
          items9.push(tmp28(tmp2(tmp3[19]).Text, obj12, parts.length));
          obj11[1] = items9;
          items8[1] = tmp17(tmp2(tmp3[19]).Text, obj11);
          obj5[1] = items8;
          obj4[4] = tmp19(tmp20, obj5);
          items6[3] = tmp17(tmp7Result, obj4);
          obj1[1] = items6;
          obj[3] = tmp19(tmp20, obj1);
          return tmp17(tmp18, obj);
        } else {
          const items10 = [tmp.avatarBorder, ];
          if (null != primaryColor) {
            let int2rgbaResult = tmp2(tmp3[15]).int2rgba(primaryColor, 1);
            const tmp2Result2 = tmp2(tmp3[15]);
          } else {
            int2rgbaResult = items5[0];
          }
          const obj13 = { style: null };
          const obj14 = { backgroundColor: null };
          obj14[0] = int2rgbaResult;
          items10[1] = obj14;
          obj13[0] = items10;
          tmp17Result = tmp17(tmp20, obj13);
        }
        tmp16 = null != stateFromStores3 && stateFromStores3.ownerId === stateFromStores2.id;
      }
    }
  }
  return null;
};