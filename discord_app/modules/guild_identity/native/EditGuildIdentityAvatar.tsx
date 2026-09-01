// === Module 14307: EditGuildIdentityAvatar ===

// Module 14307 (EditGuildIdentityAvatar)
import closure_3 from "noop" /* 19 */;
import closure_4 from "trackCommunicationDisabled" /* 1992 */;
import closure_5 from "mergeGuildAvatar" /* 1922 */;
import ME from "ME" /* 676 */;
import { PremiumUpsellTypes } from "GuildFeatures" /* 1924 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

const require = arg1;
({ AnalyticsSections: closure_6, AnalyticsObjects: error, UpsellTypes: closure_8 } = ME);
({ jsx: c10, jsxs: unpackModuleId } = jsxProd);
let closure_12 = createCacheKey.createStyles({ editAvatarIcon: { position: "absolute", right: 0 } });
let result = require("set").fileFinishedImporting("modules/guild_identity/native/EditGuildIdentityAvatar.tsx");

export default function EditGuildIdentityAvatar(userId) {
  const guildId = userId.guildId;
  ({ disabled, disableStatus } = userId);
  if (disableStatus === undefined) {
    disableStatus = true;
  }
  let stateFromStores;
  let stateFromStores1;
  let analyticsLocations;
  setPendingAvatar = undefined;
  closure_5 = undefined;
  c6 = undefined;
  closure_7 = undefined;
  c8 = undefined;
  let avatarDecoration;
  ({ style, statusStyle, avatarStyle } = userId);
  let obj = guildId(stateFromStores1[7]);
  const items = [closure_5];
  stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  obj1 = guildId(stateFromStores1[7]);
  const items1 = [setPendingAvatar];
  stateFromStores1 = obj1.useStateFromStores(items1, () => {
    let member = null;
    if (null != stateFromStores) {
      let id;
      if (tmp != null) {
        id = tmp.id;
      }
      member = setPendingAvatar.getMember(guildId, id);
      const tmp4 = guildId;
    }
    return member;
  });
  let tmp = callback();
  analyticsLocations = stateFromStores(stateFromStores1[8])(stateFromStores(stateFromStores1[9]).EDIT_AVATAR).analyticsLocations;
  const tmp7 = stateFromStores(stateFromStores1[8]);
  ({ pendingAvatar, pendingAvatarDecoration, setPendingAvatar } = stateFromStores(stateFromStores1[10])({ guildId, analyticsLocations }));
  const tmp9 = stateFromStores(stateFromStores1[11])({ guildId, analyticsLocations });
  closure_5 = tmp9;
  const tmp8 = stateFromStores(stateFromStores1[10])({ guildId, analyticsLocations });
  const pendingAvatarSrc = guildId(stateFromStores1[12]).getPendingAvatarSrc({ userId: userId.userId, image: pendingAvatar });
  const obj3 = guildId(stateFromStores1[12]);
  let result = stateFromStores(stateFromStores1[13]).canUsePremiumGuildMemberProfile(stateFromStores);
  c6 = result;
  const obj4 = stateFromStores(stateFromStores1[13]);
  const tmp12 = !stateFromStores(stateFromStores1[13]).canUseAnimatedAvatar(stateFromStores);
  closure_7 = tmp12;
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
    obj = { style: null, disabled: null, onPress: null, accessibilityRole: "button", accessibilityLabel: null, children: null };
    obj[0] = style;
    obj[1] = disabled;
    obj[2] = tmp17;
    const intl = tmp2(tmp3[23]).intl;
    obj[4] = intl.string(tmp2(tmp3[23]).t["70lEQe"]);
    obj = { user: null, guildId: null, pendingAvatarSrc: null, pendingAvatarDecoration: null, statusStyle: null, disableStatus: null, style: null };
    obj[0] = stateFromStores;
    let tmp23;
    if (null !== pendingAvatar) {
      tmp23 = guildId;
    }
    obj[1] = tmp23;
    let tmp24;
    if (null !== pendingAvatar) {
      tmp24 = pendingAvatarSrc;
    }
    obj[2] = tmp24;
    obj[3] = pendingAvatarDecoration;
    obj[4] = statusStyle;
    obj[5] = disableStatus;
    obj[6] = avatarStyle;
    const items3 = [closure_10(tmp6(tmp3[24]), obj), ];
    let tmp20Result = !disabled;
    if (!disabled) {
      obj1 = { style: null };
      obj1[0] = tmp.editAvatarIcon;
      tmp20Result = tmp20(tmp6(tmp3[25]), obj1);
    }
    items3[1] = tmp20Result;
    obj[5] = items3;
    tmp19Result = closure_11(tmp2(tmp3[22]).PressableOpacity, obj);
    const tmp19 = closure_11;
    const tmp6Result = tmp6(tmp3[24]);
  }
  return tmp19Result;
};