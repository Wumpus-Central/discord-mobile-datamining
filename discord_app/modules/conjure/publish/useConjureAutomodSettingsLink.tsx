// discord_app/modules/conjure/publish/useConjureAutomodSettingsLink.tsx
import _modDef3864 from "../intl/ConjureUntranslated.messages.js";
import ConjureProjectTypes from "../projects/ConjureProjectTypes.tsx";
import GuildSettingsActionCreatorsDefault from "../../guild_settings/GuildSettingsActionCreators.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import GuildStore from "../../../stores/GuildStore.tsx";
import PermissionStore from "../../../stores/PermissionStore.tsx";
import ConjureProjectStore from "../projects/ConjureProjectStore.tsx";
import ConjurePublishStatusStore from "ConjurePublishStatusStore.tsx";

require = fn;
const Constants = fn(1084);
({ GuildSettingsSections: closure_7, Permissions: closure_8 } = Constants);
const jsxProd = fn(21);
({ Fragment: closure_9, jsxs: c10 } = jsxProd);
fn(558);
const ReactCompilerGating = fn(558);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useConjureAutomodSettingsLink(arg0) {
      _require = arg0;
      const cResult = require("c").c(3);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ConjureProjectStore, ConjurePublishStatusStore, GuildStore, PermissionStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const fn = function p() {
          const project = ConjureProjectStore.getProject(closure_0);
          if (null != project) {
            if ("user" !== project.install_scope) {
              if (null != project.guild_id) {
                const supported_surfaces = project.supported_surfaces;
                let hasItem;
                if (supported_surfaces != null) {
                  hasItem = supported_surfaces.includes(ConjureProjectTypes.ConjureSupportedSurface.AUTOMOD);
                }
                let tmp6 = true === hasItem;
                if (!tmp6) {
                  const publishStatus = ConjurePublishStatusStore.getPublishStatus(closure_0);
                  let surface;
                  if (publishStatus != null) {
                    surface = publishStatus.surface;
                  }
                  tmp6 = "automod" === surface;
                }
                guild = GuildStore.getGuild(project.guild_id);
                let canResult = null != guild;
                if (canResult) {
                  canResult = PermissionStore.can(constants2.MANAGE_GUILD, guild);
                }
                const obj = { automod: tmp6, guildId: null };
                let guild_id = null;
                if (tmp6) {
                  guild_id = null;
                  if (canResult) {
                    guild_id = project.guild_id;
                  }
                }
                obj.guildId = guild_id;
                return obj;
              }
            }
          }
          return { automod: false, guildId: null };
        };
        cResult[1] = arg0;
        cResult[2] = fn;
        let tmp9 = fn;
      } else {
        tmp9 = cResult[2];
      }
      let obj = require("c");
      return require("initialize").useStateFromStoresObject(first, tmp9);
    }
  : function useConjureAutomodSettingsLink(arg0) {
      _require = arg0;
      const items = [ConjureProjectStore, ConjurePublishStatusStore, GuildStore, PermissionStore];
      return require("initialize").useStateFromStoresObject(items, () => {
        const project = ConjureProjectStore.getProject(closure_0);
        if (null != project) {
          if ("user" !== project.install_scope) {
            if (null != project.guild_id) {
              const supported_surfaces = project.supported_surfaces;
              let hasItem;
              if (supported_surfaces != null) {
                hasItem = supported_surfaces.includes(ConjureProjectTypes.ConjureSupportedSurface.AUTOMOD);
              }
              let tmp6 = true === hasItem;
              if (!tmp6) {
                const publishStatus = ConjurePublishStatusStore.getPublishStatus(closure_0);
                let surface;
                if (publishStatus != null) {
                  surface = publishStatus.surface;
                }
                tmp6 = "automod" === surface;
              }
              guild = GuildStore.getGuild(project.guild_id);
              let canResult = null != guild;
              if (canResult) {
                canResult = PermissionStore.can(constants2.MANAGE_GUILD, guild);
              }
              const obj = { automod: tmp6, guildId: null };
              let guild_id = null;
              if (tmp6) {
                guild_id = null;
                if (canResult) {
                  guild_id = project.guild_id;
                }
              }
              obj.guildId = guild_id;
              return obj;
            }
          }
        }
        return { automod: false, guildId: null };
      });
    };
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/publish/useConjureAutomodSettingsLink.tsx");

export default tmp5;
export const ConjureAutomodSettingsLink = ReactCompilerGating.isReactCompilerEnabled()
  ? function ConjureAutomodSettingsLink(guildId) {
      const cResult = guildId(576).c(7);
      guildId = guildId.guildId;
      const update = guildId.update;
      if (cResult[0] === guildId) {
        if (cResult[1] === update) {
          if (cResult[5] !== cResult[2]) {
            const obj2 = { children: null };
            const items = [" ", tmp4];
            obj2.children = items;
            const tmp10 = closure_10(closure_9, obj2);
            cResult[5] = tmp4;
            cResult[6] = tmp10;
            let tmp7 = tmp10;
          } else {
            tmp7 = cResult[6];
          }
          return tmp7;
        }
      }
      if (cResult[3] !== guildId) {
        const fn = function n() {
          return GuildSettingsActionCreatorsDefault.open(guildId, constants.GUILD_AUTOMOD);
        };
        cResult[3] = guildId;
        cResult[4] = fn;
        let tmp5 = fn;
      } else {
        tmp5 = cResult[4];
      }
      const intl = guildId(1125).intl;
      let formatResult = _modDef3864;
      formatResult = intl.format(update ? formatResult.esEGL5 : formatResult["XrN+Bg"], { onOpen: tmp5 });
      cResult[0] = guildId;
      cResult[1] = update;
      cResult[2] = formatResult;
      const obj = guildId(576);
    }
  : function ConjureAutomodSettingsLink(guildId) {
      guildId = guildId.guildId;
      const intl = guildId(1125).intl;
      const tmp3 = _modDef3864;
      const obj = { children: null };
      const items = [
        " ",
        intl.format(guildId.update ? tmp3.esEGL5 : tmp3["XrN+Bg"], {
          onOpen() {
            return GuildSettingsActionCreatorsDefault.open(guildId, constants.GUILD_AUTOMOD);
          },
        }),
      ];
      obj.children = items;
      return closure_10(closure_9, obj);
    };
