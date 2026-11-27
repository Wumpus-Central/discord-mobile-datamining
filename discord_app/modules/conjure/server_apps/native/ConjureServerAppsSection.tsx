// === Module 20008: ConjureServerAppsSection ===

// Module 20008 (ConjureServerAppsSection)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1112 */;
import _modDef4245 from "module_4245" /* 4245 */;
import ConjureAppSheetIconDefault from "ConjureAppSheetIcon" /* 11564 */;
import GuildSettingsModalIntegrationsAppsDefault from "GuildSettingsModalIntegrationsApps" /* 20006 */;
import noop from "module_19" /* 19 */;

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
};