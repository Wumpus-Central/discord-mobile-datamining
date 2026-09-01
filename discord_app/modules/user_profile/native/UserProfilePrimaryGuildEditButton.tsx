// === Module 14294: UserProfilePrimaryGuildEditButton ===

// Module 14294 (UserProfilePrimaryGuildEditButton)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import closure_3 from "createGuildRecordFromRust" /* 1909 */;
import { GuildTagBadgeSize } from "items" /* 7853 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

const require = arg1;
noopAll;
createCacheKey = { tag: null };
createCacheKey = { paddingHorizontal: 6, paddingVertical: 2, columnGap: 4, borderRadius: ThemesDefault.radii.sm };
createCacheKey[0] = createCacheKey;
let closure_6 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/user_profile/native/UserProfilePrimaryGuildEditButton.tsx");

export default function UserProfilePrimaryGuildEditButton(arg0) {
  ({ user, pendingPrimaryGuildId } = arg0);
  pendingPrimaryGuildId = undefined;
  let userAvailableGuildsWithTags;
  function handleSelectPrimaryGuild(primaryGuildId) {
    let obj = pendingPrimaryGuildId(handleSelectPrimaryGuild[9]);
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
  let obj = pendingPrimaryGuildId(handleSelectPrimaryGuild[6]);
  const items = [closure_3];
  const items1 = [pendingPrimaryGuildId];
  const stateFromStores = obj.useStateFromStores(items, () => closure_1_3.getGuild(pendingPrimaryGuildId), items1);
  obj1 = pendingPrimaryGuildId(handleSelectPrimaryGuild[7]);
  userAvailableGuildsWithTags = obj1.useUserAvailableGuildsWithTags();
  let obj2 = pendingPrimaryGuildId(handleSelectPrimaryGuild[8]);
  const userPrimaryGuild = obj2.getUserPrimaryGuild(user.primaryGuild);
  if (null != user) {
    let profile;
    if (stateFromStores != null) {
      profile = stateFromStores.profile;
    }
    let tag;
    if (profile != null) {
      tag = profile.tag;
    }
    if (tag == null) {
      let tag1;
      if (tmp12) {
        tag1 = userPrimaryGuild.tag;
      }
      tag = tag1;
    }
    let badge;
    if (profile != null) {
      badge = profile.badge;
    }
    if (badge == null) {
      let badge1;
      if (tmp12) {
        badge1 = userPrimaryGuild.badge;
      }
      badge = badge1;
    }
    let guildTagBadgeUrl = null != pendingPrimaryGuildId;
    if (guildTagBadgeUrl) {
      let tmp6Result = tmp6(tmp7[8]);
      guildTagBadgeUrl = tmp6Result.getGuildTagBadgeUrl(pendingPrimaryGuildId, badge, GuildTagBadgeSize.SIZE_24);
    }
    if (null != stateFromStores) {
      let name = stateFromStores.name;
    } else {
      const intl = tmp6(tmp7[10]).intl;
      const string = intl.string;
      const t = tmp6(tmp7[10]).t;
      if (tmp12) {
        name = string(t.dtwqPR);
      } else {
        name = string(t.ECv270);
      }
    }
    let combined = name;
    if (null != tag) {
      const _HermesInternal = HermesInternal;
      combined = "" + name + ", " + tag;
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
      let obj = userAvailableGuildsWithTags(handleSelectPrimaryGuild[14]);
      obj = { availableGuilds: userAvailableGuildsWithTags, selectedGuildId: pendingPrimaryGuildId, onSelectGuild: handleSelectPrimaryGuild };
      obj.openLazy(pendingPrimaryGuildId(handleSelectPrimaryGuild[16])(handleSelectPrimaryGuild[15], handleSelectPrimaryGuild.paths), "UserPrimaryGuildListBottomSheet", obj);
    };
    let tmp23Result = null;
    if (null != stateFromStores) {
      obj1 = { guild: null, size: null };
      obj1[0] = stateFromStores;
      obj1[1] = tmp6(tmp7[17]).GuildIconSizes.LARGE;
      tmp23Result = tmp23(userAvailableGuildsWithTags(tmp7[17]), obj1);
      const tmp26 = userAvailableGuildsWithTags(tmp7[17]);
    }
    obj[4] = tmp23Result;
    tmp23Result = null;
    if (null != tag) {
      obj2 = { containerStyles: null, textStyle: null, guildTag: null, guildBadge: null, badgeSize: null, textVariant: "text-md/semibold", textColor: "text-default" };
      const items2 = [tmp.tag, tagStyle];
      obj2[0] = items2;
      const obj3 = { lineHeight: null };
      obj3[0] = sum;
      obj2[1] = obj3;
      obj2[2] = tag;
      obj2[3] = guildTagBadgeUrl;
      obj2[4] = GuildTagBadgeSize.SIZE_16;
      tmp23Result = tmp23(tmp6(tmp7[18]).BaseGuildTagChiplet, obj2);
    }
    obj[5] = tmp23Result;
    obj[6] = disabled;
    return jsx(tmp6(tmp7[13]).UserProfileEditFormButton, { text: null });
  }
  return null;
};