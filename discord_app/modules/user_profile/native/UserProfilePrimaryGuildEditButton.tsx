// === Module 14640: UserProfilePrimaryGuildEditButton ===

// Module 14640 (UserProfilePrimaryGuildEditButton)
import nativeDefault from "native" /* 576 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 1979 */;

require = fn;
const GuildTagBadgeSize = fn(7944).GuildTagBadgeSize;
const jsx = fn(21).jsx;
fn(4560);
let createStyles = { tag: null };
createStyles = { paddingHorizontal: 6, paddingVertical: 2, columnGap: 4, borderRadius: nativeDefault.radii.sm };
createStyles.tag = createStyles;
let closure_6 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfilePrimaryGuildEditButton.tsx");

export default function UserProfilePrimaryGuildEditButton(arg0) {
  ({ user, pendingPrimaryGuildId } = arg0);
  pendingPrimaryGuildId = undefined;
  let userAvailableGuildsWithTags;
  function handleSelectPrimaryGuild(primaryGuildId) {
    pendingPrimaryGuildId(handleSelectPrimaryGuild[9]);
    const obj = { primaryGuildId };
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
  const items = [GuildStore];
  const items1 = [pendingPrimaryGuildId];
  const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(pendingPrimaryGuildId), items1);
  let obj1 = pendingPrimaryGuildId(handleSelectPrimaryGuild[7]);
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
    obj.label = intl2.string(tmp6(tmp7[10]).t["DUD+5n"]);
    obj.buttonText = name;
    obj = { text: combined };
    obj.accessibilityValue = obj;
    obj.onPress = function onPress() {
      const obj = { availableGuilds: userAvailableGuildsWithTags, selectedGuildId: pendingPrimaryGuildId, onSelectGuild: handleSelectPrimaryGuild };
      obj.openLazy(asyncRequireImpl(14642, dependencyMap.paths), "UserPrimaryGuildListBottomSheet", obj);
    };
    let tmp23Result = null;
    if (null != stateFromStores) {
      obj1 = { guild: stateFromStores, size: tmp6(tmp7[17]).GuildIconSizes.LARGE };
      tmp23Result = tmp23(userAvailableGuildsWithTags(tmp7[17]), obj1);
      const tmp26 = userAvailableGuildsWithTags(tmp7[17]);
    }
    obj.leading = tmp23Result;
    tmp23Result = null;
    if (null != tag) {
      obj2 = { containerStyles: null, textStyle: null, guildTag: null, guildBadge: null, badgeSize: null, textVariant: "text-md/semibold", textColor: "text-default" };
      const items2 = [tmp.tag, tagStyle];
      obj2.containerStyles = items2;
      const obj3 = { lineHeight: sum };
      obj2.textStyle = obj3;
      obj2.guildTag = tag;
      obj2.guildBadge = guildTagBadgeUrl;
      obj2.badgeSize = GuildTagBadgeSize.SIZE_16;
      tmp23Result = tmp23(tmp6(tmp7[18]).BaseGuildTagChiplet, obj2);
    }
    obj.trailing = tmp23Result;
    obj.disabled = disabled;
    return jsx(tmp6(tmp7[13]).UserProfileEditFormButton, { text: combined });
  }
  return null;
};