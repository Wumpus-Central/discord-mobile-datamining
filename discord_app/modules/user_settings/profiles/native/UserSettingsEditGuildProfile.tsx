// discord_app/modules/user_settings/profiles/native/UserSettingsEditGuildProfile.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import maybeFetchUserProfileDefault from "../../../user_profile/maybeFetchUserProfile.tsx";
import GuildIdentityActionCreators from "../../../guild_identity/GuildIdentityActionCreators.tsx";
import maybeShowDiscardChangesAlertDefault from "maybeShowDiscardChangesAlert.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import UserProfileSettingsStore from "../../../user_profile/UserProfileSettingsStore.tsx";
import UserStore from "../../../../stores/UserStore.tsx";

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, StyleSheet } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
fn(4560);
let createStyles = { guildSelector: null };
createStyles = {
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  borderRadius: nativeDefault.radii.none,
  borderTopWidth: StyleSheet.hairlineWidth,
  borderBottomWidth: StyleSheet.hairlineWidth,
  borderColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
  overflow: "hidden",
};
createStyles.guildSelector = createStyles;
let closure_9 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/profiles/native/UserSettingsEditGuildProfile.tsx");

export default function UserSettingsEditGuildProfile() {
  function onSelectGuild(id) {
    resetPending();
    GuildIdentityActionCreators.setCurrentGuild(id.id);
  }
  let tmp = closure_9();
  let obj = stateFromStores(resetPending[9]);
  const items = [UserStore];
  stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  const tmp7 = guild(resetPending[10])();
  guild = tmp7.guild;
  resetPending = tmp7.resetPending;
  let obj1 = stateFromStores(resetPending[9]);
  const items1 = [UserProfileSettingsStore];
  noop = obj1.useStateFromStores(items1, () => UserProfileSettingsStore.showNotice());
  const items2 = [stateFromStores, guild];
  const effect = noop.useEffect(() => {
    let obj = stateFromStores;
    let tmp = null != stateFromStores;
    if (tmp) {
      tmp = null != guild;
    }
    if (tmp) {
      GuildIdentityActionCreators.setCurrentGuild(guild.id);
      obj = { guildId: guild.id, dispatchWait: true };
      maybeFetchUserProfileDefault(obj.id, obj.getAvatarURL(guild.id, 80), obj);
    }
  }, items2);
  if (null != stateFromStores) {
    if (null != guild) {
      obj = { value: tmp4(guild(resetPending[8]).USER_SETTINGS_GUILD_PROFILE).analyticsLocations, children: null };
      obj = { style: tmp.guildSelector, children: null };
      obj1 = { icon: null, label: null, arrow: true, onPress: null };
      let obj2 = { guild, size: null };
      let tmp2Result = tmp2(tmp3[15]);
      obj2.size = tmp5(tmp3[15]).GuildIconSizes.XSMALL;
      obj1.icon = closure_7(tmp2Result, obj2);
      obj1.label = guild.name;
      obj1.onPress = function onPress() {
        maybeShowDiscardChangesAlertDefault({
          onConfirm() {
            let tmp2 = null != user;
            if (tmp2) {
              tmp2 = null != selectedGuild;
            }
            if (tmp2) {
              guild(resetPending[17]);
              const obj = { user, selectedGuild, onSelectGuild };
              obj.openLazy(
                stateFromStores(resetPending[19])(resetPending[18], resetPending.paths),
                "GuildSelectComponentActionSheet",
                obj,
              );
            }
          },
          hasEdits,
          resetPending,
        });
      };
      obj.children = closure_7(tmp5(tmp3[14]).TableRow, obj1);
      const items3 = [closure_7(onSelectGuild, obj)];
      const obj3 = { currentUser: stateFromStores };
      const _HermesInternal = HermesInternal;
      tmp2Result = tmp2(tmp3[20]);
      items3[1] = closure_7(tmp2Result, obj3, "" + stateFromStores.id + "-" + guild.id);
      obj.children = items3;
      return closure_8(tmp5(tmp3[7]).AnalyticsLocationProvider, obj);
    }
  }
  return closure_7(guild(resetPending[13]), {});
}
