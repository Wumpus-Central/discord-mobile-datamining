// === Module 16461: UserSettingsEditGuildProfile ===

// Module 16461 (UserSettingsEditGuildProfile)
import nativeDefault from "native" /* 587 */;
import maybeFetchUserProfileDefault from "maybeFetchUserProfile" /* 8716 */;
import maybeShowUnsavedChangesAlertDefault from "maybeShowUnsavedChangesAlert" /* 11164 */;
import GuildIdentityActionCreators from "GuildIdentityActionCreators" /* 11282 */;
import noop from "module_19" /* 19 */;
import UserProfileSettingsStore from "UserProfileSettingsStore" /* 8689 */;
import UserStore from "UserStore" /* 1389 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, StyleSheet } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_7, Fragment: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(5005);
let obj2 = { guildSelector: { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.none, borderTopWidth: StyleSheet.hairlineWidth, borderBottomWidth: StyleSheet.hairlineWidth, borderColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, overflow: "hidden" } };
let closure_10 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/profiles/native/UserSettingsEditGuildProfile.tsx");

export default function UserSettingsEditGuildProfile() {
  function onSelectGuild(dependencyMap) {
    onReset();
    GuildIdentityActionCreators.setCurrentGuild(dependencyMap.id);
  }
  const context = noop.useContext(guild(16355));
  let tmp = closure_10();
  let obj = stateFromStores(5071);
  const tmp6 = guild(7313);
  const items = [UserStore];
  stateFromStores = stateFromStores(504).useStateFromStores(items, () => currentUser.getCurrentUser());
  let tmp8 = guild(16462)();
  guild = tmp8.guild;
  ({ resetPending: dependencyMap, handleSubmit: noop } = tmp8);
  let obj2 = stateFromStores(504);
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
      const obj4 = { style: tmp.guildSelector, children: null };
      const obj5 = { icon: null, label: null, arrow: true, onPress: null };
      const obj6 = { guild, size: tmp5(6943).GuildIconSizes.XSMALL };
      obj5.icon = closure_7(tmp2(6943), obj6);
      obj5.label = guild.name;
      obj5.onPress = function onPress() {
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
              guild(onReset[19]).openLazy(stateFromStores(onReset[21])(onReset[20], onReset.paths), "GuildSelectComponentActionSheet", obj2);
              const obj = guild(onReset[19]);
            }
          },
          onSave
        });
      };
      obj4.children = closure_7(tmp5(6963).TableRow, obj5);
      const tmp17 = closure_7(hasUnsavedChanges, obj4);
      const obj7 = { value: tmp6(guild(7338).USER_SETTINGS_GUILD_PROFILE).analyticsLocations, children: null };
      let tmp10 = null == context;
      if (tmp10) {
        tmp10 = tmp17;
      }
      const items3 = [tmp10, ];
      const obj8 = { currentUser: stateFromStores, stickyHeader: null };
      let tmp14Result;
      const tmp2Result = tmp2(6943);
      if (null != context) {
        const obj9 = { theme: obj.useThemeContext().theme, children: null };
        const obj10 = { children: tmp17 };
        obj9.children = closure_7(tmp5(11825).DisableCustomTheme, obj10);
        tmp14Result = closure_7(tmp5(5071).ThemeContextProvider, obj9);
      }
      obj8.stickyHeader = tmp14Result;
      const _HermesInternal = HermesInternal;
      items3[1] = closure_7(tmp2(16467), obj8, "" + stateFromStores.id + "-" + guild.id);
      obj7.children = items3;
      return closure_9(tmp5(7313).AnalyticsLocationProvider, obj7);
    }
  }
  const obj11 = { children: null };
  const items4 = [closure_7(stateFromStores(16355).ProfileCustomizationHeaderSpacer, {}), closure_7(guild(16464), {})];
  obj11.children = items4;
  return closure_9(closure_8, obj11);
};