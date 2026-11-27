// === Module 20094: openGuildSettingsRemoveAppAlert ===

// Module 20094 (openGuildSettingsRemoveAppAlert)
import useAlertStore from "useAlertStore" /* 6048 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ApplicationStore from "ApplicationStore" /* 2165 */;

require = fn;
function RemoveAppAlert(guildId) {
  guildId = guildId.guildId;
  ({ integrationId: importDefault, application } = guildId.app);
  _slicedToArray = undefined;
  noop = undefined;
  let ref;
  closure_7 = async function _disableIntegration(ConjureRemoveBotAlert) {
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
      if (ConjureRemoveBotAlert === 1) {
        throw value;
      } else if (ConjureRemoveBotAlert === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c4 = 2;
        if (0 === v2) {
          if (ConjureRemoveBotAlert === 1) {
            c4 = 3;
            throw value;
          } else if (ConjureRemoveBotAlert === 2) {
            c4 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            closure_0 = tmp3;
            c3 = 1;
            v2 = 2;
            c4 = 1;
            const obj5 = { value: v2(tmp20[8]).disableIntegration(guildId, importDefault), done: false };
            return obj5;
          }
        } else if (1 === tmp7) {
          c3 = 0;
          closure_128_6.current = null;
          throw tmp20;
        } else if (ConjureRemoveBotAlert === 1) {
          c4 = 3;
          throw value;
        } else if (ConjureRemoveBotAlert === 2) {
          c3 = 0;
          closure_128_6.current = null;
          c4 = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          c3 = 0;
          closure_128_6.current = null;
          c4 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp20) {
        if (tmp4 === c3) {
          c4 = tmp2;
          throw tmp20;
        } else {
          v2 = tmp;
        }
      }
    }
  };
  function removeIntegration() {
    if (ref.current == null) {
      ref.current = (function disableIntegration() {
        const self = this;
        const apply = closure_1_7.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      })();
    }
    return ref.current;
  }
  closure_9 = async function _remove() {
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c4 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_1 = tmp3;
            guildId = tmp7;
            closure_128_0 = undefined;
            noop(null);
            dependencyMap = 1;
            c3 = 2;
            c4 = 1;
            const obj4 = { value: removeIntegration(), done: false };
            return obj4;
          }
        } else if (1 === tmp7) {
          dependencyMap = 0;
          const intl = guildId(1112).intl;
          closure_128_0 = intl.string(guildId(1112).t.A4Mnst);
          closure_129_5(closure_128_0);
          const _Error = Error;
          const error = new Error(closure_128_0);
          throw error;
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          dependencyMap = 0;
          c4 = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          dependencyMap = 0;
          c4 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp23) {
        if (tmp4 === dependencyMap) {
          c4 = tmp2;
          throw tmp23;
        } else {
          c3 = tmp;
        }
      }
    }
  };
  items = [ref];
  const items1 = [application.id];
  const stateFromStores = guildId(application[5]).useStateFromStores(items, () => ApplicationStore.isHydrated(application.id), items1);
  const tmp4 = _slicedToArray(noop.useState(false), 2);
  _slicedToArray = tmp4[1];
  const items2 = [application.id, stateFromStores];
  const effect = noop.useEffect(() => {
    closure_0 = async function _load() {
      closure_0 = tmp3;
      let id = 1;
      await closure_2_0(closure_2_2[6]).fetchApplication(id.id);
      if (1 === tmp7) {
        id = 0;
        closure_1_4(true);
        c3 = 3;
      } else if (arg0 === 1) {
        c3 = 3;
        throw value;
      } else if (arg0 !== 2) {
        id = 0;
      }
      id = 0;
      return value;
    };
    if (!stateFromStores) {
      (function load() {
        const self = this;
        const apply = closure_0.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      })();
    }
  }, items2);
  let obj = guildId(application[5]);
  const conjureServerApp = guildId(application[7]).useConjureServerApp(guildId, application.id);
  let obj2 = guildId(application[7]);
  [tmp8, c5] = noop.useState(null);
  ref = noop.useRef(null);
  if (null != conjureServerApp) {
    let obj3 = { app: conjureServerApp, applicationId: application.id, onPlainConfirm: removeIntegration };
    return closure_7(tmp(tmp2[10]).ConjureRemoveBotAlert, obj3);
  } else {
    let tmp9 = !stateFromStores;
    if (!stateFromStores) {
      tmp9 = !tmp4[0];
    }
    let obj4 = { title: null, content: null, extraContent: null, actions: null };
    let intl = tmp(tmp2[9]).intl;
    let obj5 = { applicationName: application.name };
    obj4.title = intl.formatToPlainString(tmp(tmp2[9]).t["rL9d/1"], obj5);
    const intl2 = tmp(tmp2[9]).intl;
    const obj6 = { applicationName: application.name };
    obj4.content = intl2.format(tmp(tmp2[9]).t.FGE8ya, obj6);
    let tmp10Result;
    if (null != tmp8) {
      const obj7 = { variant: "body-sm/medium", color: "text-feedback-critical", children: tmp8 };
      tmp10Result = tmp10(tmp(tmp2[12]).Text, obj7);
    }
    obj4.extraContent = tmp10Result;
    const obj8 = { variant: "destructive", text: null, disabled: null, loading: null, onPress: null };
    const intl3 = tmp(tmp2[9]).intl;
    obj8.text = intl3.string(tmp(tmp2[9]).t.ebGf4m);
    obj8.disabled = tmp9;
    const obj9 = { children: null };
    obj8.loading = tmp9 || undefined;
    obj8.onPress = function remove() {
      const self = this;
      const apply = closure_9.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    const items3 = [closure_7(tmp(tmp2[11]).AlertActionButton, obj8), ];
    const obj10 = { variant: "secondary", text: null };
    const intl4 = tmp(tmp2[9]).intl;
    obj10.text = intl4.string(tmp(tmp2[9]).t["ETE/oC"]);
    items3[1] = closure_7(tmp(tmp2[11]).AlertActionButton, obj10);
    obj9.children = items3;
    obj4.actions = closure_9(removeIntegration, obj9);
    return closure_7(tmp(tmp2[11]).AlertModal, obj4);
  }
  const tmp7 = _slicedToArray(noop.useState(null), 2);
}
const jsxProd = fn(21);
({ jsx: metroImportDefault, Fragment: closure_8, jsxs: closure_9 } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_settings/integrations/native/openGuildSettingsRemoveAppAlert.tsx");

export default function openGuildSettingsRemoveAppAlert(arg0) {
  const merged = Object.assign(arg0);
  useAlertStore.openAlert("GuildSettingsRemoveApp", metroImportDefault(RemoveAppAlert, {}));
};