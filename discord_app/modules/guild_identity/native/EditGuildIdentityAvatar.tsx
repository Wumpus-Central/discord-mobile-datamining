// === Module 14487: EditGuildIdentityAvatar ===

// Module 14487 (EditGuildIdentityAvatar)
import PremiumConstants from "PremiumConstants" /* 1379 */;
import asyncRequire from "asyncRequire" /* 1987 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import PremiumUpsellUtilsDefault from "PremiumUpsellUtils" /* 8818 */;
import react from "react" /* 19 */;
import GuildMemberStore from "GuildMemberStore" /* 2112 */;
import UserStore from "UserStore" /* 1377 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4890 */;
import size from "module_2" /* 2 */;

let c10;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let unpackModuleId;
({ AnalyticsSections: metroRequire, AnalyticsObjects: metroImportDefault, UpsellTypes: metroImportAll } = Constants);
const PremiumUpsellTypes = PremiumConstants.PremiumUpsellTypes;
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
let closure_12 = createStyles.createStyles({ editAvatarIcon: { position: "absolute", right: 0 } });
let result = size.fileFinishedImporting("modules/guild_identity/native/EditGuildIdentityAvatar.tsx");

export default function EditGuildIdentityAvatar(guildId) {
  let avatarStyle;
  let disableStatus;
  let disabled;
  let intl;
  let items3;
  let pendingAvatar;
  let pendingAvatarDecoration;
  let setPendingAvatar;
  let statusStyle;
  let style;
  let tmp24;
  let tmp25;
  guildId = guildId.guildId;
  ({ disabled, disableStatus } = guildId);
  const userId = guildId.userId;
  if (disableStatus === undefined) {
    disableStatus = true;
  }
  let stateFromStores1;
  setPendingAvatar = undefined;
  let handleUploadAvatarSelect;
  let c8;
  let avatarDecoration;
  ({ style, statusStyle, avatarStyle } = guildId);
  const tmp2 = guildId;
  let tmp3 = stateFromStores1;
  let tmp = closure_12();
  let obj = guildId(stateFromStores1[7]);
  const items = [handleUploadAvatarSelect];
  const stateFromStores = obj.useStateFromStores(items, () => handleUploadAvatarSelect.getCurrentUser());
  let obj2 = guildId(stateFromStores1[7]);
  const items1 = [setPendingAvatar];
  stateFromStores1 = obj2.useStateFromStores(items1, () => {
    let member = null;
    if (null != stateFromStores) {
      let id;
      const getMember = GuildMemberStore.getMember;
      if (stateFromStores != null) {
        id = stateFromStores.id;
      }
      member = getMember(guildId, id);
    }
    return member;
  });
  const tmp7 = stateFromStores(stateFromStores1[8]);
  const analyticsLocations = tmp7(stateFromStores(stateFromStores1[9]).EDIT_AVATAR).analyticsLocations;
  ({ pendingAvatar, pendingAvatarDecoration, setPendingAvatar } = stateFromStores(stateFromStores1[10])({ guildId, analyticsLocations }));
  stateFromStores(stateFromStores1[10])({ guildId, analyticsLocations });
  const tmp9 = stateFromStores(stateFromStores1[11])({ guildId, analyticsLocations });
  handleUploadAvatarSelect = tmp9;
  let obj3 = guildId(stateFromStores1[12]);
  const pendingAvatarSrc = obj3.getPendingAvatarSrc({ userId, image: pendingAvatar });
  let obj4 = stateFromStores(stateFromStores1[13]);
  let result = obj4.canUsePremiumGuildMemberProfile(stateFromStores);
  let c6 = result;
  const obj5 = stateFromStores(stateFromStores1[13]);
  const tmp12 = !obj5.canUseAnimatedAvatar(stateFromStores);
  const showAnimatedAvatarUpsell = tmp12;
  let avatar;
  const showRemoveAvatar = guildId(stateFromStores1[14]).showRemoveAvatar;
  guildId(stateFromStores1[14]);
  if (stateFromStores1 != null) {
    avatar = stateFromStores1.avatar;
  }
  const showRemoveAvatarResult = showRemoveAvatar(pendingAvatar, avatar);
  c8 = showRemoveAvatarResult;
  let tmp16 = pendingAvatarDecoration;
  if (undefined === pendingAvatarDecoration) {
    avatarDecoration = undefined;
    if (stateFromStores1 != null) {
      avatarDecoration = stateFromStores1.avatarDecoration;
    }
    tmp16 = avatarDecoration;
  }
  avatarDecoration = tmp16;
  const items2 = [guildId, stateFromStores1, stateFromStores, result, tmp12, showRemoveAvatarResult, tmp16, analyticsLocations, tmp9, setPendingAvatar];
  let tmp20Result = null;
  if (null != stateFromStores) {
    const obj6 = { style, disabled, onPress: tmp18, accessibilityRole: "button", accessibilityLabel: intl.string(tmp2(tmp3[23]).t["70lEQe"]), children: items3 };
    const PressableOpacity = tmp2(tmp3[22]).PressableOpacity;
    intl = tmp2(tmp3[23]).intl;
    const obj7 = { user: stateFromStores, guildId: tmp24, pendingAvatarSrc: tmp25, pendingAvatarDecoration, statusStyle, disableStatus, style: avatarStyle };
    tmp24 = undefined;
    const tmp6Result = stateFromStores(tmp3[24]);
    if (null !== pendingAvatar) {
      tmp24 = guildId;
    }
    tmp25 = undefined;
    if (null !== pendingAvatar) {
      tmp25 = pendingAvatarSrc;
    }
    items3 = [closure_10(tmp6Result, obj7), ];
    let tmp21Result = !disabled;
    if (tmp21Result) {
      const obj8 = { style: tmp.editAvatarIcon };
      tmp21Result = closure_10(tmp6(tmp3[25]), obj8);
    }
    items3[1] = tmp21Result;
    tmp20Result = closure_11(PressableOpacity, obj6);
  }
  return tmp20Result;
};