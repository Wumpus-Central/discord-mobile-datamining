// discord_app/modules/user_settings/profiles/native/UserSettingsEditGuildProfile.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import maybeFetchUserProfileDefault from "../../../user_profile/maybeFetchUserProfile.tsx";
import maybeShowUnsavedChangesAlertDefault from "maybeShowUnsavedChangesAlert.tsx";
import GuildIdentityActionCreators from "../../../guild_identity/GuildIdentityActionCreators.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import UserProfileSettingsStore from "../../../user_profile/UserProfileSettingsStore.tsx";
import UserStore from "../../../../stores/UserStore.tsx";

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, StyleSheet } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4945);
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
let closure_9 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/profiles/native/UserSettingsEditGuildProfile.tsx");

export default function UserSettingsEditGuildProfile() {
  function onSelectGuild(dependencyMap) {
    onReset();
    GuildIdentityActionCreators.setCurrentGuild(dependencyMap.id);
  }
  let tmp = closure_9();
  const tmp4 = guild(7199);
  const items = [UserStore];
  stateFromStores = stateFromStores(504).useStateFromStores(items, () => currentUser.getCurrentUser());
  const tmp7 = guild(15742)();
  guild = tmp7.guild;
  ({ resetPending: dependencyMap, handleSubmit: noop } = tmp7);
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
      let obj3 = { value: tmp4(guild(7224).USER_SETTINGS_GUILD_PROFILE).analyticsLocations, children: null };
      const obj4 = { style: tmp.guildSelector, children: null };
      const obj5 = { icon: null, label: null, arrow: true, onPress: null };
      const obj6 = { guild, size: tmp5(6831).GuildIconSizes.XSMALL };
      obj5.icon = closure_7(tmp2(6831), obj6);
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
              guild(onReset[17]).openLazy(
                stateFromStores(onReset[19])(onReset[18], onReset.paths),
                "GuildSelectComponentActionSheet",
                obj2,
              );
              const obj = guild(onReset[17]);
            }
          },
          onSave,
        });
      };
      obj4.children = closure_7(tmp5(6851).TableRow, obj5);
      const items3 = [closure_7(hasUnsavedChanges, obj4)];
      const obj7 = { currentUser: stateFromStores };
      const _HermesInternal = HermesInternal;
      const tmp2Result = tmp2(6831);
      items3[1] = closure_7(tmp2(15747), obj7, "" + stateFromStores.id + "-" + guild.id);
      obj3.children = items3;
      return closure_8(tmp5(7199).AnalyticsLocationProvider, obj3);
    }
  }
  return closure_7(guild(15744), {});
}
