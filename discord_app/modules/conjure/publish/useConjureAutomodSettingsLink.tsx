// discord_app/modules/conjure/publish/useConjureAutomodSettingsLink.tsx
import _modDef3868 from "../intl/ConjureUntranslated.messages.js";
import ConjureProjectTypes from "../projects/ConjureProjectTypes.tsx";
import GuildSettingsActionCreatorsDefault from "../../guild_settings/GuildSettingsActionCreators.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import GuildStore from "../../../stores/GuildStore.tsx";
import PermissionStore from "../../../stores/PermissionStore.tsx";
import ConjureProjectStore from "../projects/ConjureProjectStore.tsx";
import ConjurePublishStatusStore from "ConjurePublishStatusStore.tsx";

const require = globalThis.__r;

require = fn;
const Constants = fn(1072);
({ GuildSettingsSections: closure_7, Permissions: closure_8 } = Constants);
const jsxProd = fn(21);
({ Fragment: closure_9, jsxs: c10 } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/publish/useConjureAutomodSettingsLink.tsx");

export default function useConjureAutomodSettingsLink(arg0) {
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
          const guild = GuildStore.getGuild(project.guild_id);
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
}
export function ConjureAutomodSettingsLink(guildId) {
  guildId = guildId.guildId;
  const intl = guildId(1113).intl;
  const tmp3 = _modDef3868;
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
}
