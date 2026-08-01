// === Module 13753: UserProfilePrimaryGuildEditButton ===

// Module 13753 (UserProfilePrimaryGuildEditButton)
import "set";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import { GuildTagBadgeSize } from "items";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
createCacheKey = { tag: null };
createCacheKey = { paddingHorizontal: 6, paddingVertical: 2, columnGap: 4, borderRadius: require("Themes").radii.sm };
createCacheKey[0] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("items").fileFinishedImporting("modules/user_profile/native/UserProfilePrimaryGuildEditButton.tsx");

export default function UserProfilePrimaryGuildEditButton(arg0) {
  let disabled;
  let pendingPrimaryGuildId;
  let tagStyle;
  let user;
  ({ user, pendingPrimaryGuildId } = arg0);
  pendingPrimaryGuildId = undefined;
  let stateFromStores;
  let userAvailableGuildsWithTags;
  function handleSelectPrimaryGuild(primaryGuildId) {
    let obj = pendingPrimaryGuildId(userAvailableGuildsWithTags[8]);
    obj = { primaryGuildId };
    obj.setPendingChanges(obj);
  }
  ({ disabled, tagStyle } = arg0);
  if (undefined === pendingPrimaryGuildId) {
    const primaryGuild = user.primaryGuild;
    let identityEnabled;
    if (primaryGuild != null) {
      identityEnabled = primaryGuild.identityEnabled;
    }
    let tmp4 = null;
    if (identityEnabled) {
      const primaryGuild2 = user.primaryGuild;
      let identityGuildId;
      if (primaryGuild2 != null) {
        identityGuildId = primaryGuild2.identityGuildId;
      }
      tmp4 = identityGuildId;
    }
    pendingPrimaryGuildId = tmp4;
  }
  let obj = pendingPrimaryGuildId(userAvailableGuildsWithTags[6]);
  const items = [handleSelectPrimaryGuild];
  const items1 = [pendingPrimaryGuildId];
  stateFromStores = obj.useStateFromStores(items, () => handleSelectPrimaryGuild.getGuild(pendingPrimaryGuildId), items1);
  let obj1 = pendingPrimaryGuildId(userAvailableGuildsWithTags[7]);
  userAvailableGuildsWithTags = obj1.useUserAvailableGuildsWithTags();
  if (null != user) {
    if (userAvailableGuildsWithTags.length > 0) {
      let profile;
      if (stateFromStores != null) {
        profile = stateFromStores.profile;
      }
      let guildTagBadgeUrl = null != stateFromStores;
      if (guildTagBadgeUrl) {
        let tmp6Result = tmp6(tmp7[9]);
        let badge;
        if (profile != null) {
          badge = profile.badge;
        }
        guildTagBadgeUrl = tmp6Result.getGuildTagBadgeUrl(stateFromStores.id, badge, GuildTagBadgeSize.SIZE_24);
      }
      if (null != stateFromStores) {
        let name = stateFromStores.name;
      } else {
        const intl = tmp6(tmp7[10]).intl;
        name = intl.string(tmp6(tmp7[10]).t.ECv270);
      }
      let combined = name;
      if (null != profile) {
        const _HermesInternal = HermesInternal;
        combined = "" + name + ", " + profile.tag;
      }
      tmp6Result = tmp6(tmp7[11]);
      let num = 4;
      if (tmp6Result.isAndroid()) {
        num = 1;
      }
      const sum = tmp6(tmp7[12]).TextStyleSheet["text-md/semibold"].fontSize + num;
      obj = { label: null, buttonText: null, accessibilityValue: null, onPress: null, leading: null, trailing: null, disabled: null };
      const intl2 = tmp6(tmp7[10]).intl;
      obj[0] = intl2.string(tmp6(tmp7[10]).t["DUD+5n"]);
      obj[1] = name;
      obj = { text: null };
      obj[0] = combined;
      obj[2] = obj;
      obj[3] = function onPress() {
        let obj = stateFromStores(userAvailableGuildsWithTags[14]);
        obj = { availableGuilds: userAvailableGuildsWithTags, userPrimaryGuild: null, onSelectGuild: null };
        let tmp2 = stateFromStores;
        if (stateFromStores == null) {
          tmp2 = null;
        }
        obj[1] = tmp2;
        obj[2] = handleSelectPrimaryGuild;
        obj.openLazy(pendingPrimaryGuildId(userAvailableGuildsWithTags[16])(userAvailableGuildsWithTags[15], userAvailableGuildsWithTags.paths), "UserPrimaryGuildListBottomSheet", obj);
      };
      let tmp17Result = null;
      if (null != stateFromStores) {
        obj1 = { guild: null, size: null };
        obj1[0] = stateFromStores;
        obj1[1] = tmp6(tmp7[17]).GuildIconSizes.LARGE;
        tmp17Result = tmp17(stateFromStores(tmp7[17]), obj1);
        const tmp20 = stateFromStores(tmp7[17]);
      }
      obj[4] = tmp17Result;
      tmp17Result = null;
      if (null != profile) {
        const obj2 = { containerStyles: null, textStyle: null, guildTag: null, guildBadge: null, badgeSize: null, textVariant: "text-md/semibold", textColor: "text-default" };
        const items2 = [tmp.tag, tagStyle];
        obj2[0] = items2;
        const obj3 = { lineHeight: null };
        obj3[0] = sum;
        obj2[1] = obj3;
        const tag = profile.tag;
        obj2[2] = tag;
        obj2[3] = guildTagBadgeUrl;
        obj2[4] = GuildTagBadgeSize.SIZE_16;
        tmp17Result = tmp17(tmp6(tmp7[18]).BaseGuildTagChiplet, obj2);
      }
      obj[5] = tmp17Result;
      obj[6] = disabled;
      return jsx(tmp6(tmp7[13]).UserProfileEditFormButton, { text: null });
    }
  }
  return null;
};