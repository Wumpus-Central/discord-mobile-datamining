// discord_app/actions/UserSettingsActionCreators.tsx
import DispatcherDefault from "../Dispatcher.tsx";
import preloaded_user_settings from "../../discord_common/js/packages/protos/discord_protos/discord_users/v1/preloaded_user_settings.tsx";
import wrappers from "../../discord_common/js/packages/protos/google/protobuf/wrappers.tsx";
import UserSettings from "../modules/user_settings/UserSettings.tsx";
import asyncGeneratorStep from "../../_runtime/00005_asyncGeneratorStep.js";
import ClientThemesBackgroundStore from "../modules/client_themes/ClientThemesBackgroundStore.tsx";
import SelectivelySyncedUserSettingsStore from "../modules/user_settings/SelectivelySyncedUserSettingsStore.tsx";
import ThemeStore from "../modules/user_settings/ThemeStore.tsx";

require = fn;
const ThemeTypes = fn(1074).ThemeTypes;
const ThemeConstants = fn(1186);
({ SystemTheme, SystemThemeState: closure_8 } = ThemeConstants);
const size = fn(2);
let result = size.fileFinishedImporting("actions/UserSettingsActionCreators.tsx");

export default {
  overrideLocale(locale) {
    const obj = { type: "USER_SETTINGS_LOCALE_OVERRIDE", locale };
    obj.dispatch(obj);
  },
  updatedUnsyncedSettings(settings) {
    const obj = { type: "UNSYNCED_USER_SETTINGS_UPDATE", settings };
    obj.dispatch(obj);
  },
  setShouldSyncTextSettings(shouldSync) {
    let obj = { shouldSync, settings: null };
    if (shouldSync) {
      obj = {};
    } else {
      obj = {
        inlineAttachmentMedia: null,
        inlineEmbedMedia: null,
        renderEmbeds: null,
        renderReactions: null,
        animateEmoji: null,
        animateStickers: null,
        gifAutoPlay: null,
      };
      const InlineAttachmentMedia = UserSettings.InlineAttachmentMedia;
      obj.inlineAttachmentMedia = InlineAttachmentMedia.getSetting();
      const InlineEmbedMedia = UserSettings.InlineEmbedMedia;
      obj.inlineEmbedMedia = InlineEmbedMedia.getSetting();
      const RenderEmbeds = UserSettings.RenderEmbeds;
      obj.renderEmbeds = RenderEmbeds.getSetting();
      const RenderReactions = UserSettings.RenderReactions;
      obj.renderReactions = RenderReactions.getSetting();
      const AnimateEmoji = UserSettings.AnimateEmoji;
      obj.animateEmoji = AnimateEmoji.getSetting();
      const AnimateStickers = UserSettings.AnimateStickers;
      obj.animateStickers = AnimateStickers.getSetting();
      const GifAutoPlay = UserSettings.GifAutoPlay;
      obj.gifAutoPlay = GifAutoPlay.getSetting();
    }
    obj.settings = obj;
    obj.dispatch({ type: "SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE", changes: { text: obj } });
  },
  setShouldSyncAppearanceSettings(is_sync_enabled) {
    closure_0 = is_sync_enabled;
    return (async (arg0, value) => {
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj = { value, done: true };
          return obj;
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
              obj = { value, done: true };
              return obj;
            } else if (tmp3) {
              dependencyMap = 1;
              const PreloadedUserSettingsActionCreators = tmp3(1940).PreloadedUserSettingsActionCreators;
              v2 = 2;
              c3 = 1;
              let obj1 = {
                value: PreloadedUserSettingsActionCreators.updateAsync(
                  "appearance",
                  async (arg0) => {
                    theme = theme.theme;
                    if (constants.DARK === theme) {
                      let DARK = closure_1_0(1187).Theme.DARK;
                      let tmp4 = closure_1_0;
                    } else if (tmp.LIGHT === theme) {
                      DARK = closure_1_0(1187).Theme.LIGHT;
                      tmp4 = closure_1_0;
                    } else if (tmp.DARKER === theme) {
                      DARK = closure_1_0(1187).Theme.DARKER;
                      tmp4 = closure_1_0;
                    } else if (tmp.MIDNIGHT === theme) {
                      DARK = closure_1_0(1187).Theme.MIDNIGHT;
                      tmp4 = closure_1_0;
                    } else {
                      DARK = closure_1_0(1187).Theme.DARK;
                      tmp4 = closure_1_0;
                    }
                    arg0.theme = DARK;
                    gradientPreset = gradientPreset.gradientPreset;
                    let id;
                    if (gradientPreset != null) {
                      id = gradientPreset.id;
                    }
                    const ClientThemeSettings = tmp4(1935).ClientThemeSettings;
                    const setting = ClientThemeSettings.getSetting();
                    let prop;
                    if (setting != null) {
                      prop = setting.customUserThemeSettings;
                    }
                    let obj;
                    if (null != id) {
                      const UInt32Value = tmp4(1218).UInt32Value;
                      obj = { value: id };
                      obj = UInt32Value.create(obj);
                    }
                    obj = { backgroundGradientPresetId: obj, customUserThemeSettings: null };
                    let tmp17;
                    if (null != prop) {
                      ({
                        colors: obj3.colors,
                        gradientColorStops: obj3.gradientColorStops,
                        gradientAngle: obj3.gradientAngle,
                        baseMix: obj3.baseMix,
                      } = prop);
                      tmp17 = { colors: null, gradientColorStops: null, gradientAngle: null, baseMix: null };
                      const obj1 = { colors: null, gradientColorStops: null, gradientAngle: null, baseMix: null };
                    }
                    obj.customUserThemeSettings = tmp17;
                    arg0.clientThemeSettings = obj;
                  },
                  tmp3(1940).UserSettingsDelay.INFREQUENT_USER_ACTION,
                ),
                done: false,
              };
              return obj1;
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
            obj = { value, done: true };
            return obj;
          } else {
            dependencyMap = 0;
          }
          obj1 = v2(573);
          const obj2 = { shouldSync: closure_128_0, settings: null };
          if (closure_128_0) {
            let obj3 = {};
          } else {
            obj3 = { theme: theme.theme, clientThemeSettings: null, developerMode: null };
            gradientPreset = gradientPreset.gradientPreset;
            let id;
            if (gradientPreset != null) {
              id = gradientPreset.id;
            }
            const obj4 = { backgroundGradientPresetId: id, customUserThemeSettings: null };
            let ClientThemeSettings = tmp3(1935).ClientThemeSettings;
            obj4.customUserThemeSettings = ClientThemeSettings.getSetting().customUserThemeSettings;
            obj3.clientThemeSettings = obj4;
            const DeveloperMode = tmp3(1935).DeveloperMode;
            obj3.developerMode = DeveloperMode.getSetting();
          }
          const obj5 = { type: "SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE", changes: null };
          const obj6 = { appearance: null };
          obj2.settings = obj3;
          obj6.appearance = obj2;
          obj5.changes = obj6;
          obj1.dispatch(obj5);
          c3 = 3;
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
    const obj = { type: "USER_SETTINGS_OVERRIDE_APPLY", settings };
    obj.dispatch(obj);
  },
  clearSettingsOverride() {
    const items = [...arguments];
    DispatcherDefault.dispatch({ type: "USER_SETTINGS_OVERRIDE_CLEAR", settings: items });
  },
  updateLocale(value) {
    _require = value;
    const PreloadedUserSettingsActionCreators =
      require("UserSettingsProtoActionCreators").PreloadedUserSettingsActionCreators;
    return PreloadedUserSettingsActionCreators.updateAsync(
      "localization",
      async (arg0) => {
        const StringValue = wrappers.StringValue;
        arg0.locale = StringValue.create({ value });
      },
      require("UserSettingsProtoActionCreators").UserSettingsDelay.INFREQUENT_USER_ACTION,
    );
  },
  updateTheme(theme) {
    _require = theme;
    let obj = { type: "SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE", changes: null };
    obj = { appearance: { settings: { theme } } };
    obj.changes = obj;
    obj.dispatch(obj);
    if (SelectivelySyncedUserSettingsStore.shouldSync("appearance")) {
      const PreloadedUserSettingsActionCreators =
        require("UserSettingsProtoActionCreators").PreloadedUserSettingsActionCreators;
      PreloadedUserSettingsActionCreators.updateAsync(
        "appearance",
        async (arg0) => {
          if (ThemeTypes.DARK === closure_0) {
            let DARK = preloaded_user_settings.Theme.DARK;
          } else if (tmp2.LIGHT === tmp) {
            DARK = preloaded_user_settings.Theme.LIGHT;
          } else if (tmp2.DARKER === tmp) {
            DARK = preloaded_user_settings.Theme.DARKER;
          } else if (tmp2.MIDNIGHT === tmp) {
            DARK = preloaded_user_settings.Theme.MIDNIGHT;
          } else {
            DARK = preloaded_user_settings.Theme.DARK;
          }
          arg0.theme = DARK;
        },
        require("UserSettingsProtoActionCreators").UserSettingsDelay.INFREQUENT_USER_ACTION,
      );
    }
  },
};
export const saveGuildFolders = function saveGuildFolders(compatibleGuildFolders) {
  _require = compatibleGuildFolders;
  const PreloadedUserSettingsActionCreators =
    require("UserSettingsProtoActionCreators").PreloadedUserSettingsActionCreators;
  return PreloadedUserSettingsActionCreators.updateAsync(
    "guildFolders",
    async (arg0) => {
      arg0.folders = compatibleGuildFolders.map((guildIds) => {
        const GuildFolder = compatibleGuildFolders(closure_1_2[7]).GuildFolder;
        let obj = { guildIds: guildIds.guildIds };
        obj = GuildFolder.create(obj);
        if (null != guildIds.folderId) {
          const Int64Value = tmp(tmp2[8]).Int64Value;
          obj = { value: null };
          const _String = String;
          obj.value = String(guildIds.folderId);
          obj.id = Int64Value.create(obj);
        }
        if (null != guildIds.folderColor) {
          const UInt64Value = tmp(tmp2[8]).UInt64Value;
          const obj1 = { value: null };
          const _String2 = String;
          obj1.value = String(guildIds.folderColor);
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
          obj2.value = String(guildIds.folderName);
          obj.name = StringValue.create(obj2);
        }
        return obj;
      });
    },
    require("UserSettingsProtoActionCreators").UserSettingsDelay.FREQUENT_USER_ACTION,
  );
};
export const saveClientTheme = function saveClientTheme(backgroundGradientPresetId, INFREQUENT_USER_ACTION) {
  backgroundGradientPresetId = backgroundGradientPresetId.backgroundGradientPresetId;
  const customUserThemeSettings = backgroundGradientPresetId.customUserThemeSettings;
  const theme = backgroundGradientPresetId.theme;
  const useSystemTheme = backgroundGradientPresetId.useSystemTheme;
  if (INFREQUENT_USER_ACTION === undefined) {
    INFREQUENT_USER_ACTION = backgroundGradientPresetId(theme[6]).UserSettingsDelay.INFREQUENT_USER_ACTION;
  }
  customUserThemeSettings(theme[9]);
  let obj = { clientThemeSettings: { backgroundGradientPresetId, customUserThemeSettings }, theme: null };
  let tmp6;
  if ("system" !== theme) {
    tmp6 = theme;
  }
  obj = { type: "SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE", changes: null, theme: tmp6 };
  obj.changes = { appearance: { settings: obj } };
  obj.dispatch(obj);
  let tmp9 = tmp5 ? tmp8.ON : tmp8.OFF;
  if (null != useSystemTheme) {
    tmp9 = useSystemTheme;
  }
  customUserThemeSettings(theme[9]).dispatch({
    type: "UNSYNCED_USER_SETTINGS_UPDATE",
    settings: { useSystemTheme: tmp9 },
  });
  if (ThemeStore.isSameAsDeviceThemeEnabled()) {
    const result = backgroundGradientPresetId(tmp4[10]).clearSyncedClientThemes();
    const obj7 = backgroundGradientPresetId(tmp4[10]);
  }
  if (SelectivelySyncedUserSettingsStore.shouldSync("appearance")) {
    const PreloadedUserSettingsActionCreators = backgroundGradientPresetId(tmp4[6]).PreloadedUserSettingsActionCreators;
    return PreloadedUserSettingsActionCreators.updateAsync(
      "appearance",
      async (arg0) => {
        if (ThemeTypes.DARK === theme) {
          let DARK = preloaded_user_settings.Theme.DARK;
          let tmp3 = require;
        } else if (tmp2.LIGHT === tmp) {
          DARK = preloaded_user_settings.Theme.LIGHT;
          tmp3 = require;
        } else if (tmp2.DARKER === tmp) {
          DARK = preloaded_user_settings.Theme.DARKER;
          tmp3 = require;
        } else if (tmp2.MIDNIGHT === tmp) {
          DARK = preloaded_user_settings.Theme.MIDNIGHT;
          tmp3 = require;
        } else {
          tmp3 = require;
          DARK = preloaded_user_settings.Theme.DARK;
        }
        arg0.theme = DARK;
        let obj;
        if (null != backgroundGradientPresetId) {
          const UInt32Value = tmp3(1218).UInt32Value;
          obj = { value: tmp13 };
          obj = UInt32Value.create(obj);
        }
        obj = { backgroundGradientPresetId: obj, customUserThemeSettings: null };
        let tmp16;
        if (null != customUserThemeSettings) {
          ({
            colors: obj3.colors,
            gradientColorStops: obj3.gradientColorStops,
            gradientAngle: obj3.gradientAngle,
            baseMix: obj3.baseMix,
          } = tmp14);
          tmp16 = { colors: null, gradientColorStops: null, gradientAngle: null, baseMix: null };
          const obj1 = { colors: null, gradientColorStops: null, gradientAngle: null, baseMix: null };
        }
        obj.customUserThemeSettings = tmp16;
        arg0.clientThemeSettings = obj;
      },
      INFREQUENT_USER_ACTION,
    );
  }
  let obj1 = { appearance: { settings: obj } };
  const obj2 = { type: "UNSYNCED_USER_SETTINGS_UPDATE", settings: { useSystemTheme: tmp9 } };
  const tmp3Result = customUserThemeSettings(theme[9]);
};
