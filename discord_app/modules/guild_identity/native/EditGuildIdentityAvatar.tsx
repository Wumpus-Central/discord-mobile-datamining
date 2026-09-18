// === Module 14869: EditGuildIdentityAvatar ===

// Module 14869 (EditGuildIdentityAvatar)
import asyncRequireImpl from "asyncRequireImpl" /* 1897 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4689 */;
import PremiumUpsellUtilsDefault from "PremiumUpsellUtils" /* 9551 */;
import noop from "module_19" /* 19 */;
import GuildMemberStore from "GuildMemberStore" /* 2022 */;
import UserStore from "UserStore" /* 1372 */;

require = fn;
const Constants = fn(1074);
({ AnalyticsSections: metroRequire, AnalyticsObjects: closure_7, UpsellTypes: closure_8 } = Constants);
const PremiumUpsellTypes = fn(1374).PremiumUpsellTypes;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(4722);
let closure_12 = createStyles.createStyles({ editAvatarIcon: { position: "absolute", right: 0 } });
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_identity/native/EditGuildIdentityAvatar.tsx");

export default function EditGuildIdentityAvatar(userId) {
  const guildId = userId.guildId;
  ({ disabled, disableStatus } = userId);
  if (disableStatus === undefined) {
    disableStatus = true;
  }
  let stateFromStores1;
  setPendingAvatar = undefined;
  let handleUploadAvatarSelect;
  c8 = undefined;
  let avatarDecoration;
  ({ style, statusStyle, avatarStyle } = userId);
  let tmp = closure_12();
  const items = [handleUploadAvatarSelect];
  const stateFromStores = guildId(stateFromStores1[7]).useStateFromStores(items, () => handleUploadAvatarSelect.getCurrentUser());
  let obj = guildId(stateFromStores1[7]);
  const items1 = [setPendingAvatar];
  stateFromStores1 = guildId(stateFromStores1[7]).useStateFromStores(items1, () => {
    let member = null;
    if (null != stateFromStores) {
      let id;
      if (stateFromStores != null) {
        id = stateFromStores.id;
      }
      member = GuildMemberStore.getMember(guildId, id);
    }
    return member;
  });
  let obj2 = guildId(stateFromStores1[7]);
  const analyticsLocations = stateFromStores(stateFromStores1[8])(stateFromStores(stateFromStores1[9]).EDIT_AVATAR).analyticsLocations;
  const tmp7 = stateFromStores(stateFromStores1[8]);
  ({ pendingAvatar, pendingAvatarDecoration, setPendingAvatar } = stateFromStores(stateFromStores1[10])({ guildId, analyticsLocations }));
  const tmp9 = stateFromStores(stateFromStores1[11])({ guildId, analyticsLocations });
  handleUploadAvatarSelect = tmp9;
  const tmp8 = stateFromStores(stateFromStores1[10])({ guildId, analyticsLocations });
  const pendingAvatarSrc = guildId(stateFromStores1[12]).getPendingAvatarSrc({ userId: userId.userId, image: pendingAvatar });
  let obj3 = guildId(stateFromStores1[12]);
  let result = stateFromStores(stateFromStores1[13]).canUsePremiumGuildMemberProfile(stateFromStores);
  c6 = result;
  let obj4 = stateFromStores(stateFromStores1[13]);
  const tmp12 = !stateFromStores(stateFromStores1[13]).canUseAnimatedAvatar(stateFromStores);
  const showAnimatedAvatarUpsell = tmp12;
  const obj5 = stateFromStores(stateFromStores1[13]);
  let avatar;
  if (stateFromStores1 != null) {
    avatar = stateFromStores1.avatar;
  }
  const showRemoveAvatarResult = guildId(stateFromStores1[14]).showRemoveAvatar(pendingAvatar, avatar);
  c8 = showRemoveAvatarResult;
  let tmp15 = pendingAvatarDecoration;
  if (undefined === pendingAvatarDecoration) {
    avatarDecoration = undefined;
    if (stateFromStores1 != null) {
      avatarDecoration = stateFromStores1.avatarDecoration;
    }
    tmp15 = avatarDecoration;
  }
  avatarDecoration = tmp15;
  const items2 = [guildId, stateFromStores1, stateFromStores, result, tmp12, showRemoveAvatarResult, tmp15, analyticsLocations, tmp9, setPendingAvatar];
  let tmp19Result = null;
  if (null != stateFromStores) {
    const obj7 = { style, disabled, onPress: tmp17, accessibilityRole: "button", accessibilityLabel: null, children: null };
    const intl = tmp2(tmp3[23]).intl;
    obj7.accessibilityLabel = intl.string(tmp2(tmp3[23]).t["70lEQe"]);
    const obj8 = { user: stateFromStores, guildId: null, pendingAvatarSrc: null, pendingAvatarDecoration: null, statusStyle: null, disableStatus: null, style: null };
    let tmp23;
    if (null !== pendingAvatar) {
      tmp23 = guildId;
    }
    obj8.guildId = tmp23;
    let tmp24;
    if (null !== pendingAvatar) {
      tmp24 = pendingAvatarSrc;
    }
    obj8.pendingAvatarSrc = tmp24;
    obj8.pendingAvatarDecoration = pendingAvatarDecoration;
    obj8.statusStyle = statusStyle;
    obj8.disableStatus = disableStatus;
    obj8.style = avatarStyle;
    const items3 = [closure_10(tmp6(tmp3[24]), obj8), ];
    let tmp20Result = !disabled;
    if (!disabled) {
      const obj9 = { style: tmp.editAvatarIcon };
      tmp20Result = closure_10(tmp6(tmp3[25]), obj9);
    }
    items3[1] = tmp20Result;
    obj7.children = items3;
    tmp19Result = closure_11(tmp2(tmp3[22]).PressableOpacity, obj7);
    const tmp6Result = tmp6(tmp3[24]);
  }
  return tmp19Result;
};