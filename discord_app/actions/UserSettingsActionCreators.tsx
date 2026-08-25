// === Module 8845: saveGuildFolders ===

// Module 8845 (saveGuildFolders)
import dispatcherDefault from "dispatcher" /* 709 */;
import explicitContentFromProto from "explicitContentFromProto" /* 4070 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "isSyncedModeThemesEnabled" /* 4200 */;
import closure_5 from "initialize" /* 1303 */;
import closure_6 from "handleThemeChange" /* 1302 */;
import { ThemeTypes } from "ME" /* 676 */;
import SystemThemeState from "SystemThemeState" /* 1305 */;

require = arg1;
({ SystemTheme, SystemThemeState: closure_8 } = SystemThemeState);
let result = require("set").fileFinishedImporting("actions/UserSettingsActionCreators.tsx");

export default {
  overrideLocale(locale) {
    let obj = dispatcherDefault;
    obj = { type: "USER_SETTINGS_LOCALE_OVERRIDE", locale };
    obj.dispatch(obj);
  },
  updatedUnsyncedSettings(settings) {
    let obj = dispatcherDefault;
    obj = { type: "UNSYNCED_USER_SETTINGS_UPDATE", settings };
    obj.dispatch(obj);
  },
  setShouldSyncTextSettings(shouldSync) {
    let obj = dispatcherDefault;
    obj = { shouldSync, settings: null };
    if (shouldSync) {
      obj = {};
    } else {
      obj = { inlineAttachmentMedia: null, inlineEmbedMedia: null, renderEmbeds: null, renderReactions: null, animateEmoji: null, animateStickers: null, gifAutoPlay: null };
      const InlineAttachmentMedia = explicitContentFromProto.InlineAttachmentMedia;
      obj[0] = InlineAttachmentMedia.getSetting();
      const InlineEmbedMedia = explicitContentFromProto.InlineEmbedMedia;
      obj[1] = InlineEmbedMedia.getSetting();
      const RenderEmbeds = explicitContentFromProto.RenderEmbeds;
      obj[2] = RenderEmbeds.getSetting();
      const RenderReactions = explicitContentFromProto.RenderReactions;
      obj[3] = RenderReactions.getSetting();
      const AnimateEmoji = explicitContentFromProto.AnimateEmoji;
      obj[4] = AnimateEmoji.getSetting();
      const AnimateStickers = explicitContentFromProto.AnimateStickers;
      obj[5] = AnimateStickers.getSetting();
      const GifAutoPlay = explicitContentFromProto.GifAutoPlay;
      obj[6] = GifAutoPlay.getSetting();
    }
    obj[1] = obj;
    obj.dispatch({ type: "SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE", changes: { text: obj } });
  },
  setShouldSyncAppearanceSettings(is_sync_enabled) {
    closure_0 = is_sync_enabled;
    return callback(function*() {
      if (c3 === 2) {
        c3 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c3 = 2;
          if (0 === v0) {
            if (arg0 === 1) {
              c3 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c3 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_0 = tmp3;
              if (closure_1_0) {
                dependencyMap = 1;
                const PreloadedUserSettingsActionCreators = closure_1_0(1374).PreloadedUserSettingsActionCreators;
                v0 = 2;
                c3 = 1;
                obj1 = { value: null, done: false };
                obj1[0] = PreloadedUserSettingsActionCreators.updateAsync("appearance", (arg0) => {
                  theme = theme.theme;
                  if (constants.DARK === theme) {
                    let DARK = tmp3(1306).Theme.DARK;
                    tmp3 = dependencyMap;
                    let tmp4 = tmp3;
                  } else if (tmp.LIGHT === theme) {
                    DARK = tmp3(1306).Theme.LIGHT;
                    tmp3 = dependencyMap;
                    tmp4 = tmp3;
                  } else if (tmp.DARKER === theme) {
                    DARK = tmp3(1306).Theme.DARKER;
                    tmp3 = dependencyMap;
                    tmp4 = tmp3;
                  } else if (tmp.MIDNIGHT === theme) {
                    DARK = tmp3(1306).Theme.MIDNIGHT;
                    tmp3 = dependencyMap;
                    tmp4 = tmp3;
                  } else {
                    tmp3 = dependencyMap;
                    DARK = tmp3(1306).Theme.DARK;
                    tmp4 = tmp3;
                  }
                  arg0.theme = DARK;
                  gradientPreset = gradientPreset.gradientPreset;
                  let id;
                  if (gradientPreset != null) {
                    id = gradientPreset.id;
                  }
                  const ClientThemeSettings = tmp4(4070).ClientThemeSettings;
                  const setting = ClientThemeSettings.getSetting();
                  let prop;
                  if (setting != null) {
                    prop = setting.customUserThemeSettings;
                  }
                  let obj;
                  if (null != id) {
                    const UInt32Value = tmp4(1337).UInt32Value;
                    obj = { value: null };
                    obj[0] = id;
                    obj = UInt32Value.create(obj);
                  }
                  obj = { backgroundGradientPresetId: obj, customUserThemeSettings: null };
                  let tmp17;
                  if (null != prop) {
                    ({ colors: obj3[0], gradientColorStops: obj3[1], gradientAngle: obj3[2], baseMix: obj3[3] } = prop);
                    tmp17 = { colors: null, gradientColorStops: null, gradientAngle: null, baseMix: null };
                    obj1 = { colors: null, gradientColorStops: null, gradientAngle: null, baseMix: null };
                  }
                  obj[1] = tmp17;
                  arg0.clientThemeSettings = obj;
                }, closure_1_0(1374).UserSettingsDelay.INFREQUENT_USER_ACTION);
                return obj1;
              }
            }
          } else if (1 === tmp7) {
            dependencyMap = 0;
            c3 = 3;
            return { value: "HermesInternal", done: "HermesInternal" };
          } else if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            dependencyMap = 0;
            c3 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            dependencyMap = 0;
          }
          obj1 = v0(709);
          const obj2 = { shouldSync: null, settings: null };
          obj2[0] = closure_0;
          if (closure_0) {
            let obj3 = {};
          } else {
            obj3 = { theme: null, clientThemeSettings: null, developerMode: null };
            obj3[0] = closure_1_6.theme;
            let gradientPreset = closure_1_4.gradientPreset;
            let id;
            if (gradientPreset != null) {
              id = gradientPreset.id;
            }
            const obj4 = { backgroundGradientPresetId: null, customUserThemeSettings: null };
            obj4[0] = id;
            let ClientThemeSettings = closure_1_0(4070).ClientThemeSettings;
            obj4[1] = ClientThemeSettings.getSetting().customUserThemeSettings;
            obj3[1] = obj4;
            const DeveloperMode = closure_1_0(4070).DeveloperMode;
            obj3[2] = DeveloperMode.getSetting();
          }
          const obj5 = { type: "SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE", changes: null };
          const obj6 = { appearance: null };
          obj2[1] = obj3;
          obj6[0] = obj2;
          obj5[1] = obj6;
          obj1.dispatch(obj5);
          c3 = 3;
        } catch (tmp27) {
          if (tmp4 === dependencyMap) {
            c3 = tmp2;
            throw tmp27;
          } else {
            v0 = tmp;
          }
        }
      }
    })();
  },
  applySettingsOverride(settings) {
    let obj = dispatcherDefault;
    obj = { type: "USER_SETTINGS_OVERRIDE_APPLY", settings };
    obj.dispatch(obj);
  },
  clearSettingsOverride(gifAutoPlay, animateEmoji, animateStickers) {
    const items = [...arguments];
    dispatcherDefault.dispatch({ type: "USER_SETTINGS_OVERRIDE_CLEAR", settings: items });
  },
  updateLocale(arg0) {
    const _require = arg0;
    const PreloadedUserSettingsActionCreators = _require(1374).PreloadedUserSettingsActionCreators;
    return PreloadedUserSettingsActionCreators.updateAsync("localization", (arg0) => {
      const StringValue = callback(closure_1_2[8]).StringValue;
      arg0.locale = StringValue.create({ value: callback });
    }, _require(1374).UserSettingsDelay.INFREQUENT_USER_ACTION);
  },
  updateTheme(theme) {
    const _require = theme;
    let obj = dispatcherDefault;
    obj = { theme };
    obj.dispatch({ type: "SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE", changes: { appearance: { settings: obj } } });
    if (closure_5.shouldSync("appearance")) {
      const PreloadedUserSettingsActionCreators = _require(1374).PreloadedUserSettingsActionCreators;
      PreloadedUserSettingsActionCreators.updateAsync("appearance", (arg0) => {
        if (closure_1_7.DARK === theme) {
          let DARK = theme(closure_1_2[7]).Theme.DARK;
        } else if (tmp2.LIGHT === tmp) {
          DARK = theme(closure_1_2[7]).Theme.LIGHT;
        } else if (tmp2.DARKER === tmp) {
          DARK = theme(closure_1_2[7]).Theme.DARKER;
        } else if (tmp2.MIDNIGHT === tmp) {
          DARK = theme(closure_1_2[7]).Theme.MIDNIGHT;
        } else {
          DARK = theme(closure_1_2[7]).Theme.DARK;
        }
        arg0.theme = DARK;
      }, _require(1374).UserSettingsDelay.INFREQUENT_USER_ACTION);
    }
  }
};
export const saveGuildFolders = function saveGuildFolders(compatibleGuildFolders) {
  const _require = compatibleGuildFolders;
  const PreloadedUserSettingsActionCreators = _require(1374).PreloadedUserSettingsActionCreators;
  return PreloadedUserSettingsActionCreators.updateAsync("guildFolders", (arg0) => {
    arg0.folders = compatibleGuildFolders.map((guildIds) => {
      const GuildFolder = callback(table[7]).GuildFolder;
      let obj = { guildIds: guildIds.guildIds };
      obj = GuildFolder.create(obj);
      if (null != guildIds.folderId) {
        const Int64Value = tmp(tmp2[8]).Int64Value;
        obj = { value: null };
        const _String = String;
        obj[0] = String(guildIds.folderId);
        obj.id = Int64Value.create(obj);
      }
      if (null != guildIds.folderColor) {
        const UInt64Value = tmp(tmp2[8]).UInt64Value;
        obj1 = { value: null };
        const _String2 = String;
        obj1[0] = String(guildIds.folderColor);
        obj.color = UInt64Value.create(obj1);
      }
      let tmp6 = null != guildIds.folderName;
      if (tmp6) {
        tmp6 = "" !== guildIds.folderName;
      }
      if (tmp6) {
        const StringValue = tmp(tmp2[8]).StringValue;
        const obj2 = { value: null };
        const _String3 = String;
        obj2[0] = String(guildIds.folderName);
        obj.name = StringValue.create(obj2);
      }
      return obj;
    });
  }, _require(1374).UserSettingsDelay.FREQUENT_USER_ACTION);
};
export const saveClientTheme = function saveClientTheme(backgroundGradientPresetId, INFREQUENT_USER_ACTION) {
  backgroundGradientPresetId = backgroundGradientPresetId.backgroundGradientPresetId;
  const customUserThemeSettings = backgroundGradientPresetId.customUserThemeSettings;
  const theme = backgroundGradientPresetId.theme;
  const useSystemTheme = backgroundGradientPresetId.useSystemTheme;
  if (INFREQUENT_USER_ACTION === undefined) {
    INFREQUENT_USER_ACTION = backgroundGradientPresetId(theme[6]).UserSettingsDelay.INFREQUENT_USER_ACTION;
  }
  let obj = customUserThemeSettings(theme[9]);
  obj = { clientThemeSettings: { backgroundGradientPresetId, customUserThemeSettings }, theme: null };
  let tmp6;
  if ("system" !== theme) {
    tmp6 = theme;
  }
  obj[1] = tmp6;
  obj.dispatch({ type: "SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE", changes: { appearance: { settings: obj } } });
  let tmp9 = tmp5 ? tmp8.ON : tmp8.OFF;
  if (null != useSystemTheme) {
    tmp9 = useSystemTheme;
  }
  customUserThemeSettings(theme[9]).dispatch({ type: "UNSYNCED_USER_SETTINGS_UPDATE", settings: { useSystemTheme: tmp9 } });
  if (sameAsDeviceThemeEnabled.isSameAsDeviceThemeEnabled()) {
    const result = backgroundGradientPresetId(tmp4[10]).clearSyncedClientThemes();
    const obj4 = backgroundGradientPresetId(tmp4[10]);
  }
  if (closure_5.shouldSync("appearance")) {
    const PreloadedUserSettingsActionCreators = backgroundGradientPresetId(tmp4[6]).PreloadedUserSettingsActionCreators;
    return PreloadedUserSettingsActionCreators.updateAsync("appearance", (arg0) => {
      if (closure_1_7.DARK === theme) {
        let DARK = backgroundGradientPresetId(theme[7]).Theme.DARK;
        let tmp4 = theme;
        let tmp3 = backgroundGradientPresetId;
      } else if (tmp2.LIGHT === tmp) {
        DARK = backgroundGradientPresetId(theme[7]).Theme.LIGHT;
        tmp4 = theme;
        tmp3 = backgroundGradientPresetId;
      } else if (tmp2.DARKER === tmp) {
        DARK = backgroundGradientPresetId(theme[7]).Theme.DARKER;
        tmp4 = theme;
        tmp3 = backgroundGradientPresetId;
      } else if (tmp2.MIDNIGHT === tmp) {
        DARK = backgroundGradientPresetId(theme[7]).Theme.MIDNIGHT;
        tmp4 = theme;
        tmp3 = backgroundGradientPresetId;
      } else {
        tmp3 = backgroundGradientPresetId;
        tmp4 = theme;
        DARK = backgroundGradientPresetId(theme[7]).Theme.DARK;
      }
      arg0.theme = DARK;
      let obj;
      if (null != backgroundGradientPresetId) {
        const UInt32Value = tmp3(tmp4[8]).UInt32Value;
        obj = { value: null };
        obj[0] = tmp13;
        obj = UInt32Value.create(obj);
      }
      obj = { backgroundGradientPresetId: obj, customUserThemeSettings: null };
      let tmp16;
      if (null != customUserThemeSettings) {
        ({ colors: obj3[0], gradientColorStops: obj3[1], gradientAngle: obj3[2], baseMix: obj3[3] } = tmp14);
        tmp16 = { colors: null, gradientColorStops: null, gradientAngle: null, baseMix: null };
        obj1 = { colors: null, gradientColorStops: null, gradientAngle: null, baseMix: null };
      }
      obj[1] = tmp16;
      arg0.clientThemeSettings = obj;
    }, INFREQUENT_USER_ACTION);
  }
  let tmp3 = customUserThemeSettings;
  const tmp3Result = customUserThemeSettings(theme[9]);
};