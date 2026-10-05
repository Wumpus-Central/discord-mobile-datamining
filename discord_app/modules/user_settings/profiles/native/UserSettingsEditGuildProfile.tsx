// discord_app/modules/user_settings/profiles/native/UserSettingsEditGuildProfile.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import maybeFetchUserProfileDefault from "../../../user_profile/maybeFetchUserProfile.tsx";
import GuildIdentityActionCreators from "../../../guild_identity/GuildIdentityActionCreators.tsx";
import maybeShowDiscardChangesAlertDefault from "maybeShowDiscardChangesAlert.tsx";
import react_mod from "../../../../../_runtime/00019_react.js";
import react_native from "../../../../../_runtime/00017_react-native.js";
import UserProfileSettingsStore from "../../../user_profile/UserProfileSettingsStore.tsx";
import UserStore from "../../../../stores/UserStore.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let StyleSheet;
let closure_4;
let metroImportAll;
let metroImportDefault;
let obj2;
let react = react_mod;
({ View: closure_4, StyleSheet } = react_native);
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let obj = { guildSelector: obj2 };
obj2 = {
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  borderRadius: nativeDefault.radii.none,
  borderTopWidth: StyleSheet.hairlineWidth,
  borderBottomWidth: StyleSheet.hairlineWidth,
  borderColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
  overflow: "hidden",
};
let closure_9 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/user_settings/profiles/native/UserSettingsEditGuildProfile.tsx");

export default function UserSettingsEditGuildProfile() {
  let TableRow;
  let currentUser;
  let guild;
  let hasEdits;
  let items3;
  let obj5;
  let obj6;
  let resetPending;
  let stateFromStores;
  let tmp2Result;
  function onSelectGuild(dependencyMap) {
    resetPending();
    const obj = GuildIdentityActionCreators;
    obj.setCurrentGuild(dependencyMap.id);
  }
  let tmp2 = guild;
  let tmp = closure_9();
  const tmp4 = guild(resetPending[7]);
  const analyticsLocations = tmp4(guild(resetPending[8]).USER_SETTINGS_GUILD_PROFILE).analyticsLocations;
  let obj = stateFromStores(resetPending[9]);
  const items = [UserStore];
  stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  const tmp7 = guild(resetPending[10])();
  guild = tmp7.guild;
  resetPending = tmp7.resetPending;
  let obj2 = stateFromStores(resetPending[9]);
  const items1 = [UserProfileSettingsStore];
  react = obj2.useStateFromStores(items1, () => UserProfileSettingsStore.showNotice());
  const items2 = [stateFromStores, guild];
  const effect = react.useEffect(() => {
    const tmp = null != stateFromStores && null != guild;
    if (tmp) {
      const obj2 = GuildIdentityActionCreators;
      obj2.setCurrentGuild(guild.id);
      const obj3 = { guildId: guild.id, dispatchWait: true };
      const tmp8 = maybeFetchUserProfileDefault;
      tmp8(stateFromStores.id, stateFromStores.getAvatarURL(guild.id, 80), obj3);
    }
  }, items2);
  if (null != stateFromStores) {
    if (null != guild) {
      let obj3 = { value: analyticsLocations, children: items3 };
      const obj4 = { style: tmp.guildSelector, children: closure_7(TableRow, obj5) };
      const AnalyticsLocationProvider = tmp5(tmp3[7]).AnalyticsLocationProvider;
      obj5 = {
        icon: closure_7(tmp2Result, obj6),
        label: guild.name,
        arrow: true,
        onPress() {
          let selectedGuild;
          let user;
          let obj = {
            onConfirm() {
              const tmp2 = null != user && null != selectedGuild;
              if (tmp2) {
                const obj2 = { user, selectedGuild, onSelectGuild };
                const obj = guild(resetPending[17]);
                obj.openLazy(
                  stateFromStores(resetPending[19])(resetPending[18], resetPending.paths),
                  "GuildSelectComponentActionSheet",
                  obj2,
                );
              }
            },
            hasEdits,
            resetPending,
          };
          maybeShowDiscardChangesAlertDefault(obj);
        },
      };
      TableRow = tmp5(tmp3[14]).TableRow;
      obj6 = { guild, size: stateFromStores(resetPending[15]).GuildIconSizes.XSMALL };
      tmp2Result = tmp2(resetPending[15]);
      items3 = [closure_7(onSelectGuild, obj4)];
      const _HermesInternal = HermesInternal;
      const obj7 = { currentUser: stateFromStores };
      const tmp2Result2 = tmp2(resetPending[20]);
      items3[1] = closure_7(tmp2Result2, obj7, "" + stateFromStores.id + "-" + guild.id);
      return closure_8(AnalyticsLocationProvider, obj3);
    }
  }
  return closure_7(tmp2(resetPending[13]), {});
}
