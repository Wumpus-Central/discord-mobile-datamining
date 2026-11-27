// discord_app/modules/conjure/server_apps/native/ConjureServerAppsSection.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import _modDef4245 from "../../intl/ConjureUntranslated.messages.js";
import ConjureAppSheetIconDefault from "../../app_hover_card/native/ConjureAppSheetIcon.tsx";
import GuildSettingsModalIntegrationsAppsDefault from "../../../guild_settings/integrations/native/GuildSettingsModalIntegrationsApps.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/server_apps/native/ConjureServerAppsSection.tsx");

export default function ConjureServerAppsSection(arg0) {
  let obj = {};
  const merged = Object.assign(arg0);
  const intl = util.intl;
  obj.title = intl.string(_modDef4245.EPSYTs);
  obj.renderIcon = function renderIcon(application) {
    const obj = { application, size: 32, radius: nativeDefault.radii.sm };
    return jsx(ConjureAppSheetIconDefault, { application, size: 32, radius: nativeDefault.radii.sm });
  };
  return jsx(GuildSettingsModalIntegrationsAppsDefault, {});
}
