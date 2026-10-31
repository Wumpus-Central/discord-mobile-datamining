// discord_app/modules/conjure/scope_setup/useConjureScopeCards.tsx
import util from "../../../intl/index.native.tsx";
import _modDef3868 from "../intl/ConjureUntranslated.messages.js";
import conjureScopeSetup from "conjureScopeSetup.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import ConjureProjectStore from "../projects/ConjureProjectStore.tsx";

const require = globalThis.__r;

require = fn;
function errorStatus(status) {
  return status.status;
}
let isProjectOwner = fn(6844).isProjectOwner;
let c8 = "scope-setup:q0";
let closure_9 = "" + "scope-setup:q0" + ":0";
let closure_10 = "" + "scope-setup:q0" + ":1";
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/scope_setup/useConjureScopeCards.tsx");

export function useConjureScopeSetupCard(projectId) {
  _require = projectId;
  function settle() {
    const self = this;
    const apply = closure_8.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  const id = async function _settle(arg0) {
    closure_3 = tmp3;
    closure_130_0 = closure_1;
    asyncGeneratorStep(true);
    _slicedToArray(null);
    await closure_0(closure_2[6]).settleConjureInstallScope(projectId, closure_0, closure_1);
    if (1 === tmp7) {
      c5 = 0;
      closure_130_1 = closure_4;
      closure_131_3(false);
      let str = "failed";
      if (null != closure_130_0) {
        str = "failed";
        if (403 === errorStatus(closure_130_1)) {
          str = "server";
        }
      }
      closure_131_4(str);
      c7 = 3;
    } else if (arg0 === 1) {
      c7 = 3;
      throw value;
    } else if (arg0 !== 2) {
      c5 = 0;
    }
    return value;
  };
  let items = [guild_id];
  let items1 = [projectId];
  const stateFromStores = require("initialize").useStateFromStores(
    items,
    () => ConjureProjectStore.getProject(closure_0),
    items1,
  );
  let obj = require("initialize");
  const conjureEligibleGuilds = require("useConjureProjects").useConjureEligibleGuilds("ConjureScopeSetupCard");
  let obj2 = require("useConjureProjects");
  let obj3 = noop;
  [tmp5, dependencyMap] = noop.useState(null);
  const tmp4 = _slicedToArray(noop.useState(null), 2);
  [tmp7, asyncGeneratorStep] = noop.useState(false);
  const tmp6 = _slicedToArray(noop.useState(false), 2);
  [tmp9, _slicedToArray] = noop.useState(null);
  let install_scope_setup;
  if (stateFromStores != null) {
    install_scope_setup = stateFromStores.install_scope_setup;
  }
  let tmp11 = "server" === tmp5;
  if (!tmp11) {
    let tmp12 = null == tmp5;
    if (tmp12) {
      tmp12 = "choose_server" === install_scope_setup;
    }
    tmp11 = tmp12;
  }
  noop = tmp11;
  guild_id = undefined;
  if (stateFromStores != null) {
    guild_id = stateFromStores.guild_id;
  }
  let items2 = [tmp11, conjureEligibleGuilds, guild_id, projectId];
  const memo = obj3.useMemo(() => {
    if (closure_5) {
      let heldConjurePromptGuildId = guild_id;
      if (guild_id == null) {
        heldConjurePromptGuildId = conjureScopeSetup.getHeldConjurePromptGuildId(closure_0);
      }
      let str = "server-setup-empty";
      if (conjureEligibleGuilds.length > 0) {
        str = "server-setup";
      }
      const obj2 = { id: str, questions: null };
      const intl6 = util.intl;
      if (conjureEligibleGuilds.length > 0) {
        let ZWXDeI = _modDef3868.ZWXDeI;
      } else {
        ZWXDeI = _modDef3868["u5+Qhu"];
      }
      const obj3 = {
        id: "server-setup:q0",
        question: intl6.string(ZWXDeI),
        recommendation_reason: "",
        allow_custom: false,
        options: null,
      };
      if (conjureEligibleGuilds.length > 0) {
        let items = [];
      } else {
        const obj4 = { id: id2, label: null };
        const intl7 = util.intl;
        obj4.label = intl7.string(_modDef3868.qLYOpH);
        items = [obj4];
      }
      obj3.options = items;
      const merged = Object.assign(
        conjureScopeSetup.serverQuestionFields(conjureEligibleGuilds, heldConjurePromptGuildId),
      );
      const items1 = [obj3];
      obj2.questions = items1;
    } else {
      const obj = { id: "scope-setup", questions: null };
      const obj6 = { id, question: null, recommendation_reason: "", allow_custom: false, options: null };
      const intl = util.intl;
      obj6.question = intl.string(_modDef3868.ickKBI);
      const obj7 = { id: id2, label: null, detail: null };
      const intl2 = util.intl;
      obj7.label = intl2.string(_modDef3868.qLYOpH);
      const intl3 = util.intl;
      obj7.detail = intl3.string(_modDef3868.QSKvUE);
      const items2 = [obj7];
      const obj8 = { id: id3, label: null, detail: null };
      const intl4 = util.intl;
      obj8.label = intl4.string(_modDef3868.QV5C7b);
      const intl5 = util.intl;
      obj8.detail = intl5.string(_modDef3868["ZzHR4/"]);
      items2[1] = obj8;
      obj6.options = items2;
      const items3 = [obj6];
      obj.questions = items3;
      return obj;
    }
  }, items2);
  if (null == install_scope_setup) {
    return null;
  } else {
    if (null != stateFromStores) {
      if (settle(stateFromStores)) {
        let obj4 = {
          clarification: memo,
          readOnly: false,
          onSubmit: null,
          submitText: null,
          onBack: null,
          hideSubmit: false,
          serverStep: null,
          onPickServer: null,
          failure: null,
        };
        let handleAnswered;
        if (!tmp7) {
          handleAnswered = function handleAnswered(arg0, arg1) {
            let first;
            if (arg1 != null) {
              first = arg1.answers[0];
            }
            if (null != first) {
              const option_ids = first.option_ids;
              if (option_ids.includes(closure_10)) {
                dependencyMap("server");
              } else {
                settle("user", null);
              }
            }
          };
        }
        obj4.onSubmit = handleAnswered;
        let intl = tmp(1113).intl;
        obj4.submitText = intl.string(tmp(1113).t["cY+Oob"]);
        let fn;
        if (tmp11) {
          if (!tmp7) {
            fn = () => dependencyMap("scope");
          }
        }
        obj4.onBack = fn;
        if (tmp11) {
          tmp11 = conjureEligibleGuilds.length > 0;
        }
        obj4.serverStep = tmp11;
        let fn2;
        if (!tmp7) {
          fn2 = (arg0) => settle("guild", arg0);
        }
        obj4.onPickServer = fn2;
        if (null == tmp9) {
          obj4.failure = null;
          return obj4;
        } else {
          let intl2 = tmp(1113).intl;
          if ("server" === tmp9) {
            let jNVZ3e = conjureEligibleGuilds(3868)["XXKd+7"];
          } else {
            jNVZ3e = conjureEligibleGuilds(3868).jNVZ3e;
          }
          intl2.string(jNVZ3e);
        }
      }
    }
    let obj5 = {
      clarification: tmp(12580).ownerOnlyClarification(memo),
      readOnly: true,
      hideSubmit: true,
      failure: null,
    };
    return obj5;
  }
  const tmp8 = _slicedToArray(noop.useState(null), 2);
}
export function useConjureScopeSwitchCard(merged) {
  const projectId = merged.projectId;
  const clarification = merged.clarification;
  ({ offer, onKept: dependencyMap } = merged);
  c6 = undefined;
  isProjectOwner = undefined;
  function switchTo() {
    const self = this;
    const apply = closure_10.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  closure_10 = async function _switchTo(arg0) {
    ConjureProjectStore(true);
    _undefined(null);
    await closure_0(tmp3[6]).switchConjureInstallScope(projectId, id.id, scope, closure_0);
    if (1 === tmp7) {
      c4 = 0;
      closure_129_0 = closure_3;
      closure_130_6(false);
      let str = "failed";
      if (409 === errorStatus(closure_129_0)) {
        str = "locked";
      }
      closure_130_7(str);
      c6 = 3;
    } else if (arg0 === 1) {
      c6 = 3;
      throw value;
    } else if (arg0 !== 2) {
      c4 = 0;
    }
    return value;
  };
  const scope = offer.scope;
  const feature = offer.feature;
  let items = [c6];
  let items1 = [projectId];
  const stateFromStores = projectId(504).useStateFromStores(
    items,
    () => ConjureProjectStore.getProject(projectId),
    items1,
  );
  let obj = projectId(504);
  const conjureEligibleGuilds = projectId(12596).useConjureEligibleGuilds("ConjureScopeSwitchCard");
  let obj2 = projectId(12596);
  let obj3 = conjureEligibleGuilds;
  [tmp6, c6] = feature(conjureEligibleGuilds.useState(false), 2);
  const tmp5 = feature(conjureEligibleGuilds.useState(false), 2);
  [tmp8, c7] = feature(conjureEligibleGuilds.useState(null), 2);
  let guild_id;
  if (stateFromStores != null) {
    guild_id = stateFromStores.guild_id;
  }
  const items2 = [clarification, feature, conjureEligibleGuilds, guild_id, scope];
  const memo = obj3.useMemo(() => {
    const first = _slicedToArray(clarification.questions, 1)[0];
    const intl = util.intl;
    const tmp7 = _modDef3868;
    if ("guild" === scope) {
      let d7jxeT = tmp7["jh/iy+"];
      let tmp8 = importDefault;
    } else {
      d7jxeT = tmp7.d7jxeT;
      tmp8 = importDefault;
    }
    const obj2 = { id: clarification.id, questions: null };
    const obj3 = {};
    const merged = Object.assign(first);
    obj3.question = intl.formatToPlainString(d7jxeT, { feature });
    obj3.allow_custom = false;
    if ("guild" === scope) {
      const merged1 = Object.assign(conjureScopeSetup.serverQuestionFields(conjureEligibleGuilds, guild_id));
      let tmp12 = obj3;
      const tmp3Result = conjureScopeSetup;
    } else {
      const obj4 = { id: null, label: null };
      const _HermesInternal = HermesInternal;
      obj4.id = "" + first.id + ":0";
      const intl2 = util.intl;
      obj4.label = intl2.string(tmp8(3868).TVRkVh);
      const items = [obj4];
      obj3.options = items;
      tmp12 = obj3;
    }
    const items1 = [tmp12];
    obj2.questions = items1;
    return obj2;
  }, items2);
  if (null != stateFromStores) {
    if (isProjectOwner(stateFromStores)) {
      let obj4 = {
        clarification: memo,
        readOnly: false,
        onSubmit: null,
        submitText: null,
        onBack: null,
        backText: null,
        hideSubmit: null,
        failure: null,
      };
      let handleAnswered;
      if (!tmp6) {
        handleAnswered = function handleAnswered(arg0, arg1) {
          if (arg1 != null) {
            const first = arg1.answers[0];
            if (first != null) {
              const entities = first.entities;
              if (entities != null) {
                const first1 = entities[0];
              }
            }
          }
          if ("user" === scope) {
            switchTo(null);
          } else if (null != first1) {
            switchTo(first1.id);
          }
        };
      }
      obj4.onSubmit = handleAnswered;
      let intl = tmp(1113).intl;
      const tmp13 = clarification(3868);
      if ("guild" === scope) {
        let TVRkVh = tmp13.Ua7yKM;
        let tmp14 = tmp12;
      } else {
        TVRkVh = tmp13.TVRkVh;
        tmp14 = tmp12;
      }
      obj4.submitText = intl.string(TVRkVh);
      let keep;
      if (!tmp6) {
        keep = function keep() {
          _undefined(null);
          if (obj.keepConjureInstallScope(projectId)) {
            dependencyMap();
          } else {
            _undefined("failed");
          }
          obj = conjureScopeSetup;
        };
      }
      obj4.onBack = keep;
      let intl2 = tmp(1113).intl;
      const tmp14Result = tmp14(3868);
      obj4.backText = intl2.string("guild" === scope ? tmp14Result["4WnIqd"] : tmp14Result["am+p7p"]);
      obj4.hideSubmit = "user" === scope;
      if (null == tmp8) {
        obj4.failure = null;
        return obj4;
      } else {
        const intl3 = tmp(1113).intl;
        if ("locked" === tmp8) {
          let jNVZ3e = tmp14(3868).irUT0N;
        } else {
          jNVZ3e = tmp14(3868).jNVZ3e;
        }
        intl3.string(jNVZ3e);
      }
    }
  }
  const obj5 = { clarification: null, readOnly: true, hideSubmit: true, failure: null };
  let tmp7 = feature(conjureEligibleGuilds.useState(null), 2);
  obj5.clarification = projectId(12580).ownerOnlyClarification(memo);
  return obj5;
}
