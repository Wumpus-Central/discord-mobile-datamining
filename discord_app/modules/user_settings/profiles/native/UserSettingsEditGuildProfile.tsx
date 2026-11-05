// === Module 16835: UserSettingsEditGuildProfile ===

// Module 16835 (UserSettingsEditGuildProfile)
import nativeDefault from "native" /* 575 */;
import maybeFetchUserProfileDefault from "maybeFetchUserProfile" /* 8904 */;
import maybeShowUnsavedChangesAlertDefault from "maybeShowUnsavedChangesAlert" /* 11604 */;
import GuildIdentityActionCreators from "GuildIdentityActionCreators" /* 11717 */;
import noop from "module_19" /* 19 */;
import UserProfileSettingsStore from "UserProfileSettingsStore" /* 8877 */;
import UserStore from "UserStore" /* 1385 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, StyleSheet } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroImportDefault, jsxs: closure_8 } = jsxProd);
const createStyles = fn(5143);
let obj2 = { guildSelector: { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.none, borderTopWidth: StyleSheet.hairlineWidth, borderBottomWidth: StyleSheet.hairlineWidth, borderColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, overflow: "hidden" } };
let closure_9 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/profiles/native/UserSettingsEditGuildProfile.tsx");

export default function UserSettingsEditGuildProfile(showGuildSelector) {
  let flag = showGuildSelector.showGuildSelector;
  if (flag === undefined) {
    flag = true;
  }
  let stateFromStores;
  guild = undefined;
  dependencyMap = undefined;
  noop = undefined;
  function onSelectGuild(guild) {
    onReset();
    GuildIdentityActionCreators.setCurrentGuild(guild.id);
  }
  let tmp = closure_9();
  const tmp4 = guild(7465);
  items = [UserStore];
  stateFromStores = stateFromStores(504).useStateFromStores(items, () => currentUser.getCurrentUser());
  const tmp7 = guild(16836)();
  guild = tmp7.guild;
  ({ resetPending: c2, handleSubmit: c3 } = tmp7);
  let obj = stateFromStores(504);
  const items1 = [onSelectGuild];
  const hasUnsavedChanges = stateFromStores(504).useStateFromStores(items1, () => onSelectGuild.showNotice());
  const items2 = [stateFromStores, guild];
  const effect = noop.useEffect(() => {
    let tmp = null != stateFromStores;
    if (tmp) {
      tmp = null != guild;
    }
    if (tmp) {
      GuildIdentityActionCreators.setCurrentGuild(guild.id);
      const obj3 = { guildId: guild.id };
      maybeFetchUserProfileDefault(stateFromStores.id, stateFromStores.getAvatarURL(guild.id, 80), obj3);
    }
  }, items2);
  if (null != stateFromStores) {
    if (null != guild) {
      let obj3 = { style: tmp.guildSelector, children: null };
      const obj4 = { icon: null, label: null, arrow: true, onPress: null };
      const obj5 = { guild, size: tmp5(7101).GuildIconSizes.XSMALL };
      obj4.icon = closure_7(tmp2(7101), obj5);
      obj4.label = guild.name;
      obj4.onPress = function onPress() {
        maybeShowUnsavedChangesAlertDefault({
          location: "UserSettingsEditGuildProfile",
          hasUnsavedChanges,
          onReset,
          onContinue: function openGuildSelectActionSheet() {
            let tmp2 = null != user;
            if (tmp2) {
              tmp2 = null != selectedGuild;
            }
            if (tmp2) {
              const obj2 = { user, selectedGuild, onSelectGuild };
              guild(paths[17]).openLazy(stateFromStores(paths[19])(paths[18], paths.paths), "GuildSelectComponentActionSheet", obj2);
              const obj = guild(paths[17]);
            }
          },
          onSave
        });
      };
      obj3.children = closure_7(tmp5(7119).TableRow, obj4);
      const tmp2Result = tmp2(7101);
      const obj6 = { value: tmp4(guild(7490).USER_SETTINGS_GUILD_PROFILE).analyticsLocations, children: null };
      if (flag) {
        flag = tmp14;
      }
      const items3 = [flag, ];
      const obj7 = { currentUser: stateFromStores };
      const _HermesInternal = HermesInternal;
      tmp14 = closure_7(hasUnsavedChanges, obj3);
      items3[1] = closure_7(tmp2(16841), obj7, "" + stateFromStores.id + "-" + guild.id);
      obj6.children = items3;
      return closure_8(tmp5(7465).AnalyticsLocationProvider, obj6);
    }
  }
  return closure_7(guild(16838), {});
};