// === Module 14915: UserSettingsEditGuildProfile ===

// Module 14915 (UserSettingsEditGuildProfile)
import nativeDefault from "native" /* 576 */;
import maybeFetchUserProfileDefault from "maybeFetchUserProfile" /* 8455 */;
import GuildIdentityActionCreators from "GuildIdentityActionCreators" /* 10036 */;
import maybeShowDiscardChangesAlertDefault from "maybeShowDiscardChangesAlert" /* 11186 */;
import noop from "module_19" /* 19 */;
import UserProfileSettingsStore from "UserProfileSettingsStore" /* 8428 */;
import UserStore from "UserStore" /* 1372 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, StyleSheet } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4756);
let obj2 = { guildSelector: { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.none, borderTopWidth: StyleSheet.hairlineWidth, borderBottomWidth: StyleSheet.hairlineWidth, borderColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, overflow: "hidden" } };
let closure_9 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/profiles/native/UserSettingsEditGuildProfile.tsx");

export default function UserSettingsEditGuildProfile() {
  function onSelectGuild(id) {
    resetPending();
    GuildIdentityActionCreators.setCurrentGuild(id.id);
  }
  let tmp = closure_9();
  const tmp4 = guild(resetPending[7]);
  const items = [UserStore];
  stateFromStores = stateFromStores(resetPending[9]).useStateFromStores(items, () => currentUser.getCurrentUser());
  const tmp7 = guild(resetPending[10])();
  guild = tmp7.guild;
  resetPending = tmp7.resetPending;
  let obj = stateFromStores(resetPending[9]);
  const items1 = [UserProfileSettingsStore];
  noop = stateFromStores(resetPending[9]).useStateFromStores(items1, () => UserProfileSettingsStore.showNotice());
  const items2 = [stateFromStores, guild];
  const effect = noop.useEffect(() => {
    let tmp = null != stateFromStores;
    if (tmp) {
      tmp = null != guild;
    }
    if (tmp) {
      GuildIdentityActionCreators.setCurrentGuild(guild.id);
      const obj3 = { guildId: guild.id, dispatchWait: true };
      maybeFetchUserProfileDefault(stateFromStores.id, stateFromStores.getAvatarURL(guild.id, 80), obj3);
    }
  }, items2);
  if (null != stateFromStores) {
    if (null != guild) {
      let obj3 = { value: tmp4(guild(resetPending[8]).USER_SETTINGS_GUILD_PROFILE).analyticsLocations, children: null };
      const obj4 = { style: tmp.guildSelector, children: null };
      const obj5 = { icon: null, label: null, arrow: true, onPress: null };
      const obj6 = { guild, size: tmp5(tmp3[15]).GuildIconSizes.XSMALL };
      obj5.icon = closure_7(tmp2(tmp3[15]), obj6);
      obj5.label = guild.name;
      obj5.onPress = function onPress() {
        maybeShowDiscardChangesAlertDefault({
          onConfirm() {
            let tmp2 = null != user;
            if (tmp2) {
              tmp2 = null != selectedGuild;
            }
            if (tmp2) {
              const obj2 = { user, selectedGuild, onSelectGuild };
              guild(resetPending[17]).openLazy(stateFromStores(resetPending[19])(resetPending[18], resetPending.paths), "GuildSelectComponentActionSheet", obj2);
              const obj = guild(resetPending[17]);
            }
          },
          hasEdits,
          resetPending
        });
      };
      obj4.children = closure_7(tmp5(tmp3[14]).TableRow, obj5);
      const items3 = [closure_7(onSelectGuild, obj4), ];
      const obj7 = { currentUser: stateFromStores };
      const _HermesInternal = HermesInternal;
      const tmp2Result = tmp2(tmp3[15]);
      items3[1] = closure_7(tmp2(tmp3[20]), obj7, "" + stateFromStores.id + "-" + guild.id);
      obj3.children = items3;
      return closure_8(tmp5(tmp3[7]).AnalyticsLocationProvider, obj3);
    }
  }
  return closure_7(guild(resetPending[13]), {});
};