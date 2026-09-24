// === Module 15011: UserProfilePrimaryGuildEditButton ===

// Module 15011 (UserProfilePrimaryGuildEditButton)
import nativeDefault from "native" /* 576 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4796 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 2066 */;

require = fn;
const GuildTagBadgeSize = fn(8292).GuildTagBadgeSize;
const jsx = fn(21).jsx;
const createStyles = fn(4829);
let obj2 = { tag: { paddingHorizontal: 6, paddingVertical: 2, columnGap: 4, borderRadius: nativeDefault.radii.sm } };
let closure_6 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfilePrimaryGuildEditButton.tsx");

export default function UserProfilePrimaryGuildEditButton(arg0) {
  ({ user, pendingPrimaryGuildId } = arg0);
  pendingPrimaryGuildId = undefined;
  let userAvailableGuildsWithTags;
  function handleSelectPrimaryGuild(primaryGuildId) {
    pendingPrimaryGuildId(handleSelectPrimaryGuild[9]).setPendingChanges({ primaryGuildId });
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
  const tmp = closure_6();
  const items = [GuildStore];
  const items1 = [pendingPrimaryGuildId];
  const stateFromStores = pendingPrimaryGuildId(handleSelectPrimaryGuild[6]).useStateFromStores(items, () => GuildStore.getGuild(pendingPrimaryGuildId), items1);
  const obj = pendingPrimaryGuildId(handleSelectPrimaryGuild[6]);
  userAvailableGuildsWithTags = pendingPrimaryGuildId(handleSelectPrimaryGuild[7]).useUserAvailableGuildsWithTags();
  const obj2 = pendingPrimaryGuildId(handleSelectPrimaryGuild[7]);
  const userPrimaryGuild = pendingPrimaryGuildId(handleSelectPrimaryGuild[8]).getUserPrimaryGuild(user.primaryGuild);
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
      guildTagBadgeUrl = tmp6(tmp7[8]).getGuildTagBadgeUrl(pendingPrimaryGuildId, badge, GuildTagBadgeSize.SIZE_24);
      const tmp6Result = tmp6(tmp7[8]);
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
    let num = 4;
    if (tmp6Result2.isAndroid()) {
      num = 1;
    }
    const sum = tmp6(tmp7[12]).TextStyleSheet["text-md/semibold"].fontSize + num;
    const obj4 = { label: null, buttonText: null, accessibilityValue: null, onPress: null, leading: null, trailing: null, disabled: null };
    const intl2 = tmp6(tmp7[10]).intl;
    obj4.label = intl2.string(tmp6(tmp7[10]).t["DUD+5n"]);
    obj4.buttonText = name;
    const obj5 = { text: combined };
    obj4.accessibilityValue = obj5;
    obj4.onPress = function onPress() {
      ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(15013, dependencyMap.paths), "UserPrimaryGuildListBottomSheet", { availableGuilds: userAvailableGuildsWithTags, selectedGuildId: pendingPrimaryGuildId, onSelectGuild: handleSelectPrimaryGuild });
    };
    let tmp23Result = null;
    if (null != stateFromStores) {
      const obj6 = { guild: stateFromStores, size: tmp6(tmp7[17]).GuildIconSizes.LARGE };
      tmp23Result = jsx(userAvailableGuildsWithTags(tmp7[17]), { guild: stateFromStores, size: tmp6(tmp7[17]).GuildIconSizes.LARGE });
      const tmp26 = userAvailableGuildsWithTags(tmp7[17]);
    }
    obj4.leading = tmp23Result;
    let tmp23Result2 = null;
    if (null != tag) {
      const obj7 = { containerStyles: null, textStyle: null, guildTag: null, guildBadge: null, badgeSize: null, textVariant: "text-md/semibold", textColor: "text-default" };
      const items2 = [tmp.tag, tagStyle];
      obj7.containerStyles = items2;
      const obj8 = { lineHeight: sum };
      obj7.textStyle = obj8;
      obj7.guildTag = tag;
      obj7.guildBadge = guildTagBadgeUrl;
      obj7.badgeSize = GuildTagBadgeSize.SIZE_16;
      tmp23Result2 = jsx(tmp6(tmp7[18]).BaseGuildTagChiplet, { containerStyles: null, textStyle: null, guildTag: null, guildBadge: null, badgeSize: null, textVariant: "text-md/semibold", textColor: "text-default" });
    }
    obj4.trailing = tmp23Result2;
    obj4.disabled = disabled;
    return jsx(tmp6(tmp7[13]).UserProfileEditFormButton, { label: null, buttonText: null, accessibilityValue: null, onPress: null, leading: null, trailing: null, disabled: null });
  }
  return null;
};