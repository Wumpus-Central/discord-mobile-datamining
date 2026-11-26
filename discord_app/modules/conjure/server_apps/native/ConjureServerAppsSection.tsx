// === Module 19983: ConjureServerAppsSection ===

// Module 19983 (ConjureServerAppsSection)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1112 */;
import _modDef4245 from "module_4245" /* 4245 */;
import ConjureAppSheetIconDefault from "ConjureAppSheetIcon" /* 11556 */;
import GuildSettingsModalIntegrationsAppsDefault from "GuildSettingsModalIntegrationsApps" /* 19981 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_5 = async function _removeApp(arg0) {
  if (c6 === 2) {
    c6 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj3 = { value, done: true };
      return obj3;
    } else {
      return { value: "HermesInternal", done: "+95" };
    }
  } else {
    try {
      c6 = 2;
      if (0 === c5) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          closure_4 = tmp5;
          closure_3 = tmp2;
          closure_131_1 = undefined;
          closure_131_2 = undefined;
          closure_131_3 = undefined;
          closure_131_0 = closure_0;
          ({ integrationId: closure_131_1, application: closure_131_2 } = closure_1);
          closure_131_3 = closure_2;
          closure_131_4 = undefined;
          c5 = 1;
          c6 = 1;
          return { value: "Path", done: true };
        }
      } else if (1 === tmp5) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          c5 = 2;
          c6 = 1;
          const obj7 = { value: closure_132_0(closure_132_2[3]).loadConjureServerApp(closure_131_0, closure_131_2.id), done: false };
          return obj7;
        }
      } else if (arg0 === 1) {
        c6 = 3;
        throw value;
      } else if (arg0 === 2) {
        c6 = 3;
        const obj8 = { value, done: true };
        return obj8;
      } else {
        closure_131_4 = value;
        if (null != closure_131_4) {
          const obj9 = {
            app: closure_131_4,
            applicationId: closure_131_2.id,
            onPlainConfirm() {
                      return closure_1_3(closure_1_1);
                    }
          };
          const result = closure_132_0(closure_132_2[7]).openConjureRemoveBotAlert(obj9);
          const obj2 = closure_132_0(closure_132_2[7]);
        } else {
          const intl = closure_132_0(closure_132_2[5]).intl;
          closure_132_0(closure_132_2[4]).presentError(intl.string(closure_132_1(closure_132_2[6]).PJ2Fkn));
          const obj = closure_132_0(closure_132_2[4]);
        }
        c6 = 3;
      }
    } catch (tmp30) {
      c6 = tmp;
      throw tmp30;
    }
  }
};
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/server_apps/native/ConjureServerAppsSection.tsx");

export default function ConjureServerAppsSection(apps) {
  ({ guildId: require, onRemoveIntegration: importDefault } = apps);
  let obj = { title: null, apps: null, renderIcon: null, onRemove: null };
  const intl = util.intl;
  obj.title = intl.string(_modDef4245.EPSYTs);
  obj.apps = apps.apps;
  obj.renderIcon = function renderIcon(application) {
    const obj = { application, size: 24, radius: nativeDefault.radii.xs };
    return jsx(ConjureAppSheetIconDefault, { application, size: 24, radius: nativeDefault.radii.xs });
  };
  obj.onRemove = function onRemove(arg0) {
    !(function removeApp() {
      const self = this;
      const apply = closure_1_5.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    })(require, arg0, importDefault);
  };
  return jsx(GuildSettingsModalIntegrationsAppsDefault, { title: null, apps: null, renderIcon: null, onRemove: null });
};