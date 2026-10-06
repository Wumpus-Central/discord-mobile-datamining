// === Module 8091: UserSettingsActionCreators ===

// Module 8091 (UserSettingsActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 1085 */;
import preloaded_user_settings from "preloaded_user_settings" /* 1197 */;
import wrappers from "wrappers" /* 1228 */;
import UserSettings from "UserSettings" /* 2028 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import ClientThemesBackgroundStore from "ClientThemesBackgroundStore" /* 4703 */;
import SelectivelySyncedUserSettingsStore from "SelectivelySyncedUserSettingsStore" /* 1194 */;
import ThemeStore from "ThemeStore" /* 1193 */;
import ThemeConstants from "ThemeConstants" /* 1196 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c3;

let SystemTheme;
let metroImportAll;
const ThemeTypes = Constants.ThemeTypes;
({ SystemTheme, SystemThemeState: metroImportAll } = ThemeConstants);
let obj = {
  overrideLocale(locale) {
    const obj = DispatcherDefault;
    const obj2 = { type: "USER_SETTINGS_LOCALE_OVERRIDE", locale };
    obj.dispatch(obj2);
  },
  updatedUnsyncedSettings(settings) {
    const obj = DispatcherDefault;
    const obj2 = { type: "UNSYNCED_USER_SETTINGS_UPDATE", settings };
    obj.dispatch(obj2);
  },
  setShouldSyncTextSettings(shouldSync) {
    let AnimateEmoji;
    let AnimateStickers;
    let GifAutoPlay;
    let InlineAttachmentMedia;
    let InlineEmbedMedia;
    let RenderEmbeds;
    let RenderReactions;
    let obj2;
    const obj = { shouldSync, settings: obj2 };
    const dispatch = DispatcherDefault.dispatch;
    DispatcherDefault;
    if (shouldSync) {
      obj2 = {};
    } else {
      obj2 = { inlineAttachmentMedia: InlineAttachmentMedia.getSetting(), inlineEmbedMedia: InlineEmbedMedia.getSetting(), renderEmbeds: RenderEmbeds.getSetting(), renderReactions: RenderReactions.getSetting(), animateEmoji: AnimateEmoji.getSetting(), animateStickers: AnimateStickers.getSetting(), gifAutoPlay: GifAutoPlay.getSetting() };
      InlineAttachmentMedia = UserSettings.InlineAttachmentMedia;
      InlineEmbedMedia = UserSettings.InlineEmbedMedia;
      RenderEmbeds = UserSettings.RenderEmbeds;
      RenderReactions = UserSettings.RenderReactions;
      AnimateEmoji = UserSettings.AnimateEmoji;
      AnimateStickers = UserSettings.AnimateStickers;
      GifAutoPlay = UserSettings.GifAutoPlay;
    }
    const obj3 = { type: "SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE", changes: { text: obj } };
    dispatch(obj3);
  },
  setShouldSyncAppearanceSettings(is_sync_enabled) {
    let closure_0 = is_sync_enabled;
    return (async () => {
      let ClientThemeSettings;
      let DeveloperMode;
      let closure_0;
      let gradientPreset;
      let obj6;
      let obj7;
      let obj9;
      let theme;
      let tmp3;
      let tmp4;
      let v1;
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        let c2;
        try {
          c3 = 2;
          if (0 === v1) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else if (tmp) {
              c2 = 1;
              const PreloadedUserSettingsActionCreators = tmp(c2[6]).PreloadedUserSettingsActionCreators;
              v1 = 2;
              c3 = 1;
              const obj4 = {
                value: PreloadedUserSettingsActionCreators.updateAsync("appearance", async (arg0) => {
                          let DARK;
                          let tmp17;
                          let tmp3;
                          let tmp4;
                          theme = theme.theme;
                          if (constants.ASH === theme) {
                            DARK = closure_1_0(closure_1_2[7]).Theme.DARK;
                            tmp3 = closure_1_2;
                            tmp4 = closure_1_0;
                          } else if (constants.LIGHT === theme) {
                            DARK = closure_1_0(closure_1_2[7]).Theme.LIGHT;
                            tmp3 = closure_1_2;
                            tmp4 = closure_1_0;
                          } else if (constants.DARK === theme) {
                            DARK = closure_1_0(closure_1_2[7]).Theme.DARKER;
                            tmp3 = closure_1_2;
                            tmp4 = closure_1_0;
                          } else if (constants.ONYX === theme) {
                            DARK = closure_1_0(closure_1_2[7]).Theme.MIDNIGHT;
                            tmp3 = closure_1_2;
                            tmp4 = closure_1_0;
                          } else {
                            tmp3 = closure_1_2;
                            DARK = closure_1_0(closure_1_2[7]).Theme.DARK;
                            tmp4 = closure_1_0;
                          }
                          arg0.theme = DARK;
                          gradientPreset = gradientPreset.gradientPreset;
                          let id;
                          if (gradientPreset != null) {
                            id = gradientPreset.id;
                          }
                          const ClientThemeSettings = tmp4(tmp3[11]).ClientThemeSettings;
                          const setting = ClientThemeSettings.getSetting();
                          let prop;
                          if (setting != null) {
                            prop = setting.customUserThemeSettings;
                          }
                          let obj2;
                          if (null != id) {
                            const UInt32Value = tmp4(tmp3[8]).UInt32Value;
                            const obj = { value: id };
                            obj2 = UInt32Value.create(obj);
                          }
                          const obj6 = { backgroundGradientPresetId: obj2, customUserThemeSettings: tmp17 };
                          tmp17 = undefined;
                          if (null != prop) {
                            const obj7 = { colors: null, gradientColorStops: null, gradientAngle: null, baseMix: null };
                            ({ colors: obj3.colors, gradientColorStops: obj3.gradientColorStops, gradientAngle: obj3.gradientAngle, baseMix: obj3.baseMix } = prop);
                            tmp17 = obj7;
                          }
                          arg0.clientThemeSettings = obj6;
                        }, tmp(c2[6]).UserSettingsDelay.INFREQUENT_USER_ACTION),
                done: false
              };
              return obj4;
            }
          } else if (1 === tmp4) {
            c2 = 0;
            c3 = 3;
            return { value: "IconComponent", done: null };
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 0;
            c3 = 3;
            let obj = { value, done: true };
            return obj;
          } else {
            c2 = 0;
          }
          const obj5 = { shouldSync: closure_128_0, settings: obj6 };
          const dispatch = v1(c2[9]).dispatch;
          const tmp8 = v1(c2[9]);
          if (closure_128_0) {
            obj6 = {};
          } else {
            obj6 = { theme: theme.theme, clientThemeSettings: obj7, developerMode: DeveloperMode.getSetting() };
            gradientPreset = gradientPreset.gradientPreset;
            let id;
            if (gradientPreset != null) {
              id = gradientPreset.id;
            }
            obj7 = { backgroundGradientPresetId: id, customUserThemeSettings: ClientThemeSettings.getSetting().customUserThemeSettings };
            let tmp17 = c2;
            ClientThemeSettings = tmp(c2[11]).ClientThemeSettings;
            DeveloperMode = tmp(c2[11]).DeveloperMode;
          }
          const obj8 = { type: "SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE", changes: obj9 };
          obj9 = { appearance: obj5 };
          dispatch(obj8);
          c3 = 3;
          return { value: "IconComponent", done: null };
        } catch (tmp25) {
          if (0 === c2) {
            c3 = 3;
            throw tmp25;
          } else {
            v1 = 1;
          }
        }
      }
    })();
  },
  applySettingsOverride(settings) {
    const obj = DispatcherDefault;
    const obj2 = { type: "USER_SETTINGS_OVERRIDE_APPLY", settings };
    obj.dispatch(obj2);
  },
  clearSettingsOverride() {
    const items = [...arguments];
    const obj = DispatcherDefault;
    obj.dispatch({ type: "USER_SETTINGS_OVERRIDE_CLEAR", settings: items });
  },
  updateLocale(value) {
    _require = value;
    const PreloadedUserSettingsActionCreators = require("UserSettingsProtoActionCreators").PreloadedUserSettingsActionCreators;
    return PreloadedUserSettingsActionCreators.updateAsync("localization", async (arg0) => {
      const StringValue = wrappers.StringValue;
      const obj = { value };
      arg0.locale = StringValue.create(obj);
    }, require("UserSettingsProtoActionCreators").UserSettingsDelay.INFREQUENT_USER_ACTION);
  },
  updateTheme(theme) {
    let obj3;
    let obj4;
    _require = theme;
    const obj2 = { type: "SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE", changes: obj3 };
    obj3 = { appearance: obj4 };
    obj4 = { settings: { theme } };
    const obj = DispatcherDefault;
    obj.dispatch(obj2);
    if (SelectivelySyncedUserSettingsStore.shouldSync("appearance")) {
      const PreloadedUserSettingsActionCreators = require("UserSettingsProtoActionCreators").PreloadedUserSettingsActionCreators;
      PreloadedUserSettingsActionCreators.updateAsync("appearance", async (arg0) => {
        let DARK;
        if (ThemeTypes.ASH === theme) {
          DARK = preloaded_user_settings.Theme.DARK;
        } else if (ThemeTypes.LIGHT === theme) {
          DARK = preloaded_user_settings.Theme.LIGHT;
        } else if (ThemeTypes.DARK === theme) {
          DARK = preloaded_user_settings.Theme.DARKER;
        } else if (ThemeTypes.ONYX === theme) {
          DARK = preloaded_user_settings.Theme.MIDNIGHT;
        } else {
          DARK = preloaded_user_settings.Theme.DARK;
        }
        arg0.theme = DARK;
      }, require("UserSettingsProtoActionCreators").UserSettingsDelay.INFREQUENT_USER_ACTION);
    }
  }
};
let result = size.fileFinishedImporting("actions/UserSettingsActionCreators.tsx");

export default obj;
export const saveGuildFolders = function saveGuildFolders(compatibleGuildFolders) {
  _require = compatibleGuildFolders;
  const PreloadedUserSettingsActionCreators = require("UserSettingsProtoActionCreators").PreloadedUserSettingsActionCreators;
  return PreloadedUserSettingsActionCreators.updateAsync("guildFolders", async (arg0) => {
    arg0.folders = compatibleGuildFolders.map((guildIds) => {
      const GuildFolder = compatibleGuildFolders(closure_1_2[7]).GuildFolder;
      const obj = { guildIds: guildIds.guildIds };
      const obj2 = GuildFolder.create(obj);
      if (null != guildIds.folderId) {
        const Int64Value = compatibleGuildFolders(closure_1_2[8]).Int64Value;
        const _String = String;
        const create = Int64Value.create;
        const obj3 = { value: String(guildIds.folderId) };
        obj2.id = create(obj3);
      }
      if (null != guildIds.folderColor) {
        const UInt64Value = compatibleGuildFolders(closure_1_2[8]).UInt64Value;
        const _String2 = String;
        const create2 = UInt64Value.create;
        const obj4 = { value: String(guildIds.folderColor) };
        obj2.color = create2(obj4);
      }
      const tmp6 = null != guildIds.folderName && "" !== guildIds.folderName;
      if (tmp6) {
        const StringValue = compatibleGuildFolders(closure_1_2[8]).StringValue;
        const _String3 = String;
        const create3 = StringValue.create;
        const obj8 = { value: String(guildIds.folderName) };
        obj2.name = create3(obj8);
      }
      return obj2;
    });
  }, require("UserSettingsProtoActionCreators").UserSettingsDelay.FREQUENT_USER_ACTION);
};
export const saveClientTheme = function saveClientTheme(backgroundGradientPresetId) {
  let INFREQUENT_USER_ACTION;
  let obj3;
  let tmp7;
  backgroundGradientPresetId = backgroundGradientPresetId.backgroundGradientPresetId;
  const customUserThemeSettings = backgroundGradientPresetId.customUserThemeSettings;
  const theme = backgroundGradientPresetId.theme;
  const useSystemTheme = backgroundGradientPresetId.useSystemTheme;
  if (INFREQUENT_USER_ACTION === undefined) {
    INFREQUENT_USER_ACTION = backgroundGradientPresetId(theme[6]).UserSettingsDelay.INFREQUENT_USER_ACTION;
  }
  let tmp3 = customUserThemeSettings;
  let obj = { clientThemeSettings: { backgroundGradientPresetId, customUserThemeSettings }, theme: tmp7 };
  tmp7 = undefined;
  const dispatch = customUserThemeSettings(theme[9]).dispatch;
  customUserThemeSettings(theme[9]);
  if ("system" !== theme) {
    tmp7 = theme;
  }
  let obj2 = { type: "SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE", changes: obj3 };
  obj3 = { appearance: { settings: obj } };
  dispatch(obj2);
  let tmp10 = tmp6 ? constants.ON : constants.OFF;
  if (null != useSystemTheme) {
    tmp10 = useSystemTheme;
  }
  const obj4 = { type: "UNSYNCED_USER_SETTINGS_UPDATE", settings: { useSystemTheme: tmp10 } };
  const tmp3Result = tmp3(theme[9]);
  tmp3Result.dispatch(obj4);
  if (ThemeStore.isSameAsDeviceThemeEnabled()) {
    let obj6 = backgroundGradientPresetId(tmp4[10]);
    const result = obj6.clearSyncedClientThemes();
  }
  if (SelectivelySyncedUserSettingsStore.shouldSync("appearance")) {
    const PreloadedUserSettingsActionCreators = backgroundGradientPresetId(tmp4[6]).PreloadedUserSettingsActionCreators;
    return PreloadedUserSettingsActionCreators.updateAsync("appearance", async (arg0) => {
      let DARK;
      let tmp16;
      let tmp3;
      if (ThemeTypes.ASH === theme) {
        DARK = preloaded_user_settings.Theme.DARK;
        tmp3 = require;
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
        const UInt32Value = tmp3(1228).UInt32Value;
        const obj = { value: tmp13 };
        obj2 = UInt32Value.create(obj);
      }
      const obj6 = { backgroundGradientPresetId: obj2, customUserThemeSettings: tmp16 };
      tmp16 = undefined;
      if (null != customUserThemeSettings) {
        const obj7 = { colors: null, gradientColorStops: null, gradientAngle: null, baseMix: null };
        ({ colors: obj3.colors, gradientColorStops: obj3.gradientColorStops, gradientAngle: obj3.gradientAngle, baseMix: obj3.baseMix } = customUserThemeSettings);
        tmp16 = obj7;
      }
      arg0.clientThemeSettings = obj6;
    }, INFREQUENT_USER_ACTION);
  }
};