// === Module 13759: UserSettingsEditGuildProfile ===

// Module 13759 (UserSettingsEditGuildProfile)
import asyncRequireImpl from "asyncRequireImpl";
import get_ActivityIndicator from "ACTION_SHEET_HEIGHT_HALF";
import handleFormOpen from "handleFormOpen";
import mergeGuildAvatar from "mergeGuildAvatar";
import jsxProd from "set";
import createCacheKey from "createCacheKey";

let StyleSheet;
let c4;
let error;
let metroImportAll;
const require = arg1;
({ View: c4, StyleSheet } = get_ActivityIndicator);
({ jsx: error, jsxs: metroImportAll } = jsxProd);
createCacheKey = { guildSelector: null };
createCacheKey = { backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH, borderRadius: require("Themes").radii.none, borderTopWidth: StyleSheet.hairlineWidth, borderBottomWidth: StyleSheet.hairlineWidth, borderColor: require("Themes").colors.BACKGROUND_BASE_LOWEST, overflow: "hidden" };
createCacheKey[0] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("handleFormOpen").fileFinishedImporting("modules/user_settings/profiles/native/UserSettingsEditGuildProfile.tsx");

export default function UserSettingsEditGuildProfile() {
  function onSelectGuild(id) {
    resetPending();
    stateFromStores(resetPending[11]).setCurrentGuild(id.id);
  }
  let tmp = createCacheKey();
  let obj = stateFromStores(resetPending[9]);
  const items = [mergeGuildAvatar];
  stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  const tmp7 = guild(resetPending[10])();
  guild = tmp7.guild;
  resetPending = tmp7.resetPending;
  let obj1 = stateFromStores(resetPending[9]);
  const items1 = [handleFormOpen];
  const React = obj1.useStateFromStores(items1, () => handleFormOpen.showNotice());
  const items2 = [stateFromStores, guild];
  const effect = React.useEffect(() => {
    let obj = stateFromStores;
    let tmp = null != stateFromStores;
    if (tmp) {
      tmp = null != guild;
    }
    if (tmp) {
      stateFromStores(resetPending[11]).setCurrentGuild(guild.id);
      const obj2 = stateFromStores(resetPending[11]);
      obj = { guildId: null, dispatchWait: true };
      obj[0] = guild.id;
      guild(resetPending[12])(obj.id, obj.getAvatarURL(guild.id, 80), obj);
      const tmp8 = guild(resetPending[12]);
    }
  }, items2);
  if (null != stateFromStores) {
    if (null != guild) {
      obj = { value: null, children: null };
      obj[0] = tmp4(guild(resetPending[8]).USER_SETTINGS_GUILD_PROFILE).analyticsLocations;
      obj = { style: null, children: null };
      obj[0] = tmp.guildSelector;
      obj1 = { icon: null, label: null, arrow: true, onPress: null };
      let obj2 = { guild: null, size: null };
      obj2[0] = guild;
      let tmp2Result = tmp2(tmp3[15]);
      obj2[1] = tmp5(tmp3[15]).GuildIconSizes.XSMALL;
      obj1[0] = callback(tmp2Result, obj2);
      obj1[1] = guild.name;
      obj1[3] = function onPress() {
        guild(resetPending[16])({
          onConfirm() {
            let tmp2 = null != closure_0;
            if (tmp2) {
              tmp2 = null != closure_1;
            }
            if (tmp2) {
              let obj = outer1_1(outer1_2[17]);
              obj = { user: null, selectedGuild: null, onSelectGuild: null };
              obj[0] = closure_0;
              obj[1] = closure_1;
              obj[2] = closure_4;
              obj.openLazy(outer1_0(outer1_2[19])(outer1_2[18], outer1_2.paths), "GuildSelectComponentActionSheet", obj);
            }
          },
          hasEdits: asyncRequireImpl,
          resetPending
        });
      };
      obj[1] = callback(tmp5(tmp3[14]).TableRow, obj1);
      const items3 = [callback(onSelectGuild, obj), ];
      const obj3 = { currentUser: null };
      obj3[0] = stateFromStores;
      const _HermesInternal = HermesInternal;
      tmp2Result = tmp2(tmp3[20]);
      items3[1] = callback(tmp2Result, obj3, "" + stateFromStores.id + "-" + guild.id);
      obj[1] = items3;
      return callback2(tmp5(tmp3[7]).AnalyticsLocationProvider, obj);
    }
  }
  return callback(guild(resetPending[13]), {});
};