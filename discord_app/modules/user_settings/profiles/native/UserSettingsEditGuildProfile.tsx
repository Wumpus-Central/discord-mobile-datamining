// discord_app/modules/user_settings/profiles/native/UserSettingsEditGuildProfile.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import maybeFetchUserProfileDefault from "../../../user_profile/maybeFetchUserProfile.tsx";
import GuildIdentityActionCreators from "../../../guild_identity/GuildIdentityActionCreators.tsx";
import maybeShowUnsavedChangesAlertDefault from "maybeShowUnsavedChangesAlert.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import UserProfileSettingsStore from "../../../user_profile/UserProfileSettingsStore.tsx";
import UserStore from "../../../../stores/UserStore.tsx";

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, StyleSheet } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroImportDefault, Fragment: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(5243);
let obj2 = {
  guildSelector: {
    backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
    borderRadius: nativeDefault.radii.none,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
    overflow: "hidden",
  },
};
let closure_10 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/profiles/native/UserSettingsEditGuildProfile.tsx");

export default function UserSettingsEditGuildProfile(arg0) {
  ({ header, showGuildSelector } = arg0);
  if (showGuildSelector === undefined) {
    showGuildSelector = true;
  }
  let stateFromStores;
  guild = undefined;
  dependencyMap = undefined;
  noop = undefined;
  function onSelectGuild(guild) {
    onReset();
    GuildIdentityActionCreators.setCurrentGuild(guild.id);
  }
  let tmp = closure_10();
  const tmp4 = guild(7852);
  items = [UserStore];
  stateFromStores = stateFromStores(504).useStateFromStores(items, () => currentUser.getCurrentUser());
  const tmp7 = guild(17065)();
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
      const obj5 = { guild, size: tmp5(7654).GuildIconSizes.XSMALL };
      obj4.icon = closure_7(tmp2(7654), obj5);
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
              guild(paths[17]).openLazy(
                stateFromStores(paths[19])(paths[18], paths.paths),
                "GuildSelectComponentActionSheet",
                obj2,
              );
              const obj = guild(paths[17]);
            }
          },
          onSave,
        });
      };
      obj3.children = closure_7(tmp5(7379).TableRow, obj4);
      const tmp2Result = tmp2(7654);
      const obj6 = { value: tmp4(guild(7871).USER_SETTINGS_GUILD_PROFILE).analyticsLocations, children: null };
      if (showGuildSelector) {
        showGuildSelector = tmp14;
      }
      const items3 = [showGuildSelector];
      const obj7 = { currentUser: stateFromStores, header };
      const _HermesInternal = HermesInternal;
      tmp14 = closure_7(hasUnsavedChanges, obj3);
      items3[1] = closure_7(tmp2(17070), obj7, "" + stateFromStores.id + "-" + guild.id);
      obj6.children = items3;
      return closure_9(tmp5(7852).AnalyticsLocationProvider, obj6);
    }
  }
  const obj8 = { children: null };
  const items4 = [header, closure_7(guild(17067), {})];
  obj8.children = items4;
  return closure_9(closure_8, obj8);
}
