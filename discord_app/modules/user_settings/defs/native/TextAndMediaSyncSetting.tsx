// === Module 15291: TextAndMediaSyncSetting ===

// Module 15291 (TextAndMediaSyncSetting)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import UserSettingsActionCreatorsDefault from "UserSettingsActionCreators" /* 8863 */;
import SelectivelySyncedUserSettingsStore from "SelectivelySyncedUserSettingsStore" /* 1194 */;

require = fn;
const ReactCompilerGating = fn(558);
const SettingBuilders = fn(11129);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [SelectivelySyncedUserSettingsStore];
    const fn = function s() {
      return SelectivelySyncedUserSettingsStore.shouldSync("text");
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  return initialize.useStateFromStores(tmp4, tmp5);
}) : (() => {
  const items = [SelectivelySyncedUserSettingsStore];
  return initialize.useStateFromStores(items, () => SelectivelySyncedUserSettingsStore.shouldSync("text"));
});
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["3340dY"]);
  },
  parent: fn(7634).MobileUserSettings.CHAT,
  useValue: ReactCompilerGating.isReactCompilerEnabled() ? (() => {
    const cResult = c.c(2);
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const items = [SelectivelySyncedUserSettingsStore];
      const fn = function s() {
        return SelectivelySyncedUserSettingsStore.shouldSync("text");
      };
      cResult[0] = items;
      cResult[1] = fn;
      tmp4 = items;
      tmp5 = fn;
    } else {
      [tmp4, tmp5] = cResult;
    }
    return initialize.useStateFromStores(tmp4, tmp5);
  }) : (() => {
    const items = [SelectivelySyncedUserSettingsStore];
    return initialize.useStateFromStores(items, () => SelectivelySyncedUserSettingsStore.shouldSync("text"));
  }),
  onValueChange: UserSettingsActionCreatorsDefault.setShouldSyncTextSettings
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/TextAndMediaSyncSetting.tsx");

export default toggle;