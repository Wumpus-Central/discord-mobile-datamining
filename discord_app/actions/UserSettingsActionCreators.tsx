// === Module 9490: UserSettingsActionCreators ===

// Module 9490 (UserSettingsActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import preloaded_user_settings from "preloaded_user_settings" /* 1186 */;
import wrappers from "wrappers" /* 1217 */;
import UserSettings from "UserSettings" /* 1936 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import ClientThemesBackgroundStore from "ClientThemesBackgroundStore" /* 4459 */;
import SelectivelySyncedUserSettingsStore from "SelectivelySyncedUserSettingsStore" /* 1183 */;
import ThemeStore from "ThemeStore" /* 1182 */;

const require = globalThis.__r;

require = fn;
const ThemeTypes = fn(1074).ThemeTypes;
const ThemeConstants = fn(1185);
({ SystemTheme, SystemThemeState: closure_8 } = ThemeConstants);
const size = fn(2);
let result = size.fileFinishedImporting("actions/UserSettingsActionCreators.tsx");

export default {
  overrideLocale(locale) {
    DispatcherDefault.dispatch({ type: "USER_SETTINGS_LOCALE_OVERRIDE", locale });
  },
  updatedUnsyncedSettings(settings) {
    DispatcherDefault.dispatch({ type: "UNSYNCED_USER_SETTINGS_UPDATE", settings });
  },
  setShouldSyncTextSettings(shouldSync) {
    const obj2 = { shouldSync, settings: null };
    if (shouldSync) {
      let obj3 = {};
    } else {
      obj3 = { inlineAttachmentMedia: null, inlineEmbedMedia: null, renderEmbeds: null, renderReactions: null, animateEmoji: null, animateStickers: null, gifAutoPlay: null };
      const InlineAttachmentMedia = UserSettings.InlineAttachmentMedia;
      obj3.inlineAttachmentMedia = InlineAttachmentMedia.getSetting();
      const InlineEmbedMedia = UserSettings.InlineEmbedMedia;
      obj3.inlineEmbedMedia = InlineEmbedMedia.getSetting();
      const RenderEmbeds = UserSettings.RenderEmbeds;
      obj3.renderEmbeds = RenderEmbeds.getSetting();
      const RenderReactions = UserSettings.RenderReactions;
      obj3.renderReactions = RenderReactions.getSetting();
      const AnimateEmoji = UserSettings.AnimateEmoji;
      obj3.animateEmoji = AnimateEmoji.getSetting();
      const AnimateStickers = UserSettings.AnimateStickers;
      obj3.animateStickers = AnimateStickers.getSetting();
      const GifAutoPlay = UserSettings.GifAutoPlay;
      obj3.gifAutoPlay = GifAutoPlay.getSetting();
    }
    obj2.settings = obj3;
    DispatcherDefault.dispatch({ type: "SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE", changes: { text: obj2 } });
    const obj4 = { type: "SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE", changes: { text: obj2 } };
  },
  setShouldSyncAppearanceSettings(is_sync_enabled) {
    closure_0 = is_sync_enabled;
    return (async () => {
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c3 = 2;
          if (0 === v2) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else if (tmp3) {
              dependencyMap = 1;
              const PreloadedUserSettingsActionCreators = tmp3(1941).PreloadedUserSettingsActionCreators;
              v2 = 2;
              c3 = 1;
              const obj5 = {
                value: PreloadedUserSettingsActionCreators.updateAsync("appearance", async (arg0) => {
                          theme = theme.theme;
                          if (constants.ASH === theme) {
                            let DARK = closure_1_0(1186).Theme.DARK;
                            let tmp4 = closure_1_0;
                          } else if (constants.LIGHT === theme) {
                            DARK = closure_1_0(1186).Theme.LIGHT;
                            tmp4 = closure_1_0;
                          } else if (constants.DARK === theme) {
                            DARK = closure_1_0(1186).Theme.DARKER;
                            tmp4 = closure_1_0;
                          } else if (constants.ONYX === theme) {
                            DARK = closure_1_0(1186).Theme.MIDNIGHT;
                            tmp4 = closure_1_0;
                          } else {
                            DARK = closure_1_0(1186).Theme.DARK;
                            tmp4 = closure_1_0;
                          }
                          arg0.theme = DARK;
                          gradientPreset = gradientPreset.gradientPreset;
                          let id;
                          if (gradientPreset != null) {
                            id = gradientPreset.id;
                          }
                          const ClientThemeSettings = tmp4(1936).ClientThemeSettings;
                          const setting = ClientThemeSettings.getSetting();
                          let prop;
                          if (setting != null) {
                            prop = setting.customUserThemeSettings;
                          }
                          let obj2;
                          if (null != id) {
                            const UInt32Value = tmp4(1217).UInt32Value;
                            const obj = { value: id };
                            obj2 = UInt32Value.create(obj);
                          }
                          const obj6 = { backgroundGradientPresetId: obj2, customUserThemeSettings: null };
                          let tmp17;
                          if (null != prop) {
                            ({ colors: obj3.colors, gradientColorStops: obj3.gradientColorStops, gradientAngle: obj3.gradientAngle, baseMix: obj3.baseMix } = prop);
                            tmp17 = { colors: null, gradientColorStops: null, gradientAngle: null, baseMix: null };
                            const obj7 = { colors: null, gradientColorStops: null, gradientAngle: null, baseMix: null };
                          }
                          obj6.customUserThemeSettings = tmp17;
                          arg0.clientThemeSettings = obj6;
                        }, tmp3(1941).UserSettingsDelay.INFREQUENT_USER_ACTION),
                done: false
              };
              return obj5;
            }
          } else if (1 === tmp7) {
            dependencyMap = 0;
            c3 = 3;
            return { value: "HermesInternal", done: null };
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            dependencyMap = 0;
            c3 = 3;
            let obj = { value, done: true };
            return obj;
          } else {
            dependencyMap = 0;
          }
          let obj6 = { shouldSync: closure_128_0, settings: null };
          if (closure_128_0) {
            let obj7 = {};
          } else {
            obj7 = { theme: theme.theme, clientThemeSettings: null, developerMode: null };
            gradientPreset = gradientPreset.gradientPreset;
            let id;
            if (gradientPreset != null) {
              id = gradientPreset.id;
            }
            const obj8 = { backgroundGradientPresetId: id, customUserThemeSettings: null };
            let ClientThemeSettings = tmp3(1936).ClientThemeSettings;
            obj8.customUserThemeSettings = ClientThemeSettings.getSetting().customUserThemeSettings;
            obj7.clientThemeSettings = obj8;
            const DeveloperMode = tmp3(1936).DeveloperMode;
            obj7.developerMode = DeveloperMode.getSetting();
          }
          const obj9 = { type: "SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE", changes: null };
          const obj10 = { appearance: null };
          obj6.settings = obj7;
          obj10.appearance = obj6;
          obj9.changes = obj10;
          v2(573).dispatch(obj9);
          c3 = 3;
          let obj2 = v2(573);
        } catch (tmp27) {
          if (tmp4 === dependencyMap) {
            c3 = tmp2;
            throw tmp27;
          } else {
            v2 = tmp;
          }
        }
      }
    })();
  },
  applySettingsOverride(settings) {
    DispatcherDefault.dispatch({ type: "USER_SETTINGS_OVERRIDE_APPLY", settings });
  },
  clearSettingsOverride() {
    const items = [...arguments];
    DispatcherDefault.dispatch({ type: "USER_SETTINGS_OVERRIDE_CLEAR", settings: items });
  },
  updateLocale(value) {
    _require = value;
    const PreloadedUserSettingsActionCreators = require("UserSettingsProtoActionCreators").PreloadedUserSettingsActionCreators;
    return PreloadedUserSettingsActionCreators.updateAsync("localization", async (arg0) => {
      const StringValue = wrappers.StringValue;
      arg0.locale = StringValue.create({ value });
    }, require("UserSettingsProtoActionCreators").UserSettingsDelay.INFREQUENT_USER_ACTION);
  },
  updateTheme(theme) {
    _require = theme;
    const obj2 = { type: "SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE", changes: null };
    const obj3 = { appearance: { settings: { theme } } };
    obj2.changes = obj3;
    DispatcherDefault.dispatch(obj2);
    if (SelectivelySyncedUserSettingsStore.shouldSync("appearance")) {
      const PreloadedUserSettingsActionCreators = require("UserSettingsProtoActionCreators").PreloadedUserSettingsActionCreators;
      PreloadedUserSettingsActionCreators.updateAsync("appearance", async (arg0) => {
        if (ThemeTypes.ASH === closure_0) {
          let DARK = preloaded_user_settings.Theme.DARK;
        } else if (ThemeTypes.LIGHT === closure_0) {
          DARK = preloaded_user_settings.Theme.LIGHT;
        } else if (ThemeTypes.DARK === closure_0) {
          DARK = preloaded_user_settings.Theme.DARKER;
        } else if (ThemeTypes.ONYX === closure_0) {
          DARK = preloaded_user_settings.Theme.MIDNIGHT;
        } else {
          DARK = preloaded_user_settings.Theme.DARK;
        }
        arg0.theme = DARK;
      }, require("UserSettingsProtoActionCreators").UserSettingsDelay.INFREQUENT_USER_ACTION);
    }
    const obj4 = { settings: { theme } };
  }
};
export const saveGuildFolders = function saveGuildFolders(compatibleGuildFolders) {
  _require = compatibleGuildFolders;
  const PreloadedUserSettingsActionCreators = require("UserSettingsProtoActionCreators").PreloadedUserSettingsActionCreators;
  return PreloadedUserSettingsActionCreators.updateAsync("guildFolders", async (arg0) => {
    arg0.folders = compatibleGuildFolders.map((guildIds) => {
      const GuildFolder = compatibleGuildFolders(dependencyMap[7]).GuildFolder;
      const obj2 = GuildFolder.create({ guildIds: guildIds.guildIds });
      if (null != guildIds.folderId) {
        const Int64Value = compatibleGuildFolders(dependencyMap[8]).Int64Value;
        const obj3 = { value: null };
        const _String = String;
        obj3.value = String(guildIds.folderId);
        obj2.id = Int64Value.create(obj3);
      }
      if (null != guildIds.folderColor) {
        const UInt64Value = compatibleGuildFolders(dependencyMap[8]).UInt64Value;
        const obj4 = { value: null };
        const _String2 = String;
        obj4.value = String(guildIds.folderColor);
        obj2.color = UInt64Value.create(obj4);
      }
      let tmp6 = null != guildIds.folderName;
      if (tmp6) {
        tmp6 = "" !== guildIds.folderName;
      }
      if (tmp6) {
        const StringValue = compatibleGuildFolders(dependencyMap[8]).StringValue;
        const obj8 = { value: null };
        const _String3 = String;
        obj8.value = String(guildIds.folderName);
        obj2.name = StringValue.create(obj8);
      }
      return obj2;
    });
  }, require("UserSettingsProtoActionCreators").UserSettingsDelay.FREQUENT_USER_ACTION);
};
export const saveClientTheme = function saveClientTheme(backgroundGradientPresetId) {
  backgroundGradientPresetId = backgroundGradientPresetId.backgroundGradientPresetId;
  const customUserThemeSettings = backgroundGradientPresetId.customUserThemeSettings;
  const theme = backgroundGradientPresetId.theme;
  const useSystemTheme = backgroundGradientPresetId.useSystemTheme;
  if (INFREQUENT_USER_ACTION === undefined) {
    INFREQUENT_USER_ACTION = backgroundGradientPresetId(theme[6]).UserSettingsDelay.INFREQUENT_USER_ACTION;
  }
  let obj2 = { clientThemeSettings: { backgroundGradientPresetId, customUserThemeSettings }, theme: null };
  let tmp6;
  if ("system" !== theme) {
    tmp6 = theme;
  }
  const obj3 = { type: "SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE", changes: { appearance: { settings: obj2 } } };
  obj2.theme = tmp6;
  customUserThemeSettings(theme[9]).dispatch(obj3);
  let tmp9 = tmp5 ? constants.ON : constants.OFF;
  if (null != useSystemTheme) {
    tmp9 = useSystemTheme;
  }
  let obj = customUserThemeSettings(theme[9]);
  const obj4 = { appearance: { settings: obj2 } };
  customUserThemeSettings(theme[9]).dispatch({ type: "UNSYNCED_USER_SETTINGS_UPDATE", settings: { useSystemTheme: tmp9 } });
  if (ThemeStore.isSameAsDeviceThemeEnabled()) {
    const result = backgroundGradientPresetId(tmp4[10]).clearSyncedClientThemes();
    let obj7 = backgroundGradientPresetId(tmp4[10]);
  }
  if (SelectivelySyncedUserSettingsStore.shouldSync("appearance")) {
    const PreloadedUserSettingsActionCreators = backgroundGradientPresetId(tmp4[6]).PreloadedUserSettingsActionCreators;
    return PreloadedUserSettingsActionCreators.updateAsync("appearance", async (arg0) => {
      if (ThemeTypes.ASH === theme) {
        let DARK = preloaded_user_settings.Theme.DARK;
        let tmp3 = require;
      } else if (ThemeTypes.LIGHT === theme) {
        DARK = preloaded_user_settings.Theme.LIGHT;
        tmp3 = require;
      } else if (ThemeTypes.DARK === theme) {
        DARK = preloaded_user_settings.Theme.DARKER;
        tmp3 = require;
      } else if (ThemeTypes.ONYX === theme) {
        DARK = preloaded_user_settings.Theme.MIDNIGHT;
        tmp3 = require;
      } else {
        tmp3 = require;
        DARK = preloaded_user_settings.Theme.DARK;
      }
      arg0.theme = DARK;
      let obj2;
      if (null != backgroundGradientPresetId) {
        const UInt32Value = tmp3(1217).UInt32Value;
        const obj = { value: tmp13 };
        obj2 = UInt32Value.create(obj);
      }
      const obj6 = { backgroundGradientPresetId: obj2, customUserThemeSettings: null };
      let tmp16;
      if (null != customUserThemeSettings) {
        ({ colors: obj3.colors, gradientColorStops: obj3.gradientColorStops, gradientAngle: obj3.gradientAngle, baseMix: obj3.baseMix } = customUserThemeSettings);
        tmp16 = { colors: null, gradientColorStops: null, gradientAngle: null, baseMix: null };
        const obj7 = { colors: null, gradientColorStops: null, gradientAngle: null, baseMix: null };
      }
      obj6.customUserThemeSettings = tmp16;
      arg0.clientThemeSettings = obj6;
    }, INFREQUENT_USER_ACTION);
  }
  const obj5 = { type: "UNSYNCED_USER_SETTINGS_UPDATE", settings: { useSystemTheme: tmp9 } };
  const tmp3Result = customUserThemeSettings(theme[9]);
};