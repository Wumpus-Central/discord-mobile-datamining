// === Module 9629: useConjureEntryPointPlacement ===

// Module 9629 (useConjureEntryPointPlacement)
import ConjureMobileExperimentDefault from "ConjureMobileExperiment" /* 9631 */;
import ConjureYouBarPinStore from "ConjureYouBarPinStore" /* 9630 */;

const require = globalThis.__r;

const require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/title_bar/native/useConjureEntryPointPlacement.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureEntryPointPlacement(_location) {
  _require = _location;
  const cResult = require("c").c(10);
  const obj = require("c");
  const hasConjureGuild = require("ConjureGuildExperiment").useHasConjureGuild(_location);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [tmp(1453).ApexExperimentStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === hasConjureGuild) {
    if (cResult[2] === _location) {
      let tmp6 = cResult[3];
      let tmp7 = cResult[4];
    }
    const stateFromStores = tmp(504).useStateFromStores(first, tmp6, tmp7);
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const items1 = [ConjureYouBarPinStore];
      class P {
        constructor() {
          return closure_1_3.isPinned();
        }
      }
      cResult[5] = items1;
      cResult[6] = P;
    }
    tmp(504);
    if (null == stateFromStores) {
      return null;
    } else {
      class P {
        constructor() {
          return closure_1_3.isPinned();
        }
      }
      if ("profile" === stateFromStores) {
        let str3 = "you_bar";
        if (!tmp13) {
          str3 = "you_screen";
        }
      }
      if (cResult[7] === "profile" === stateFromStores) {
        if (cResult[8] === str3) {
          let tmp16 = cResult[9];
        }
        return tmp16;
      }
      const obj3 = { placement: str3, canPin: "profile" === stateFromStores };
      cResult[7] = "profile" === stateFromStores;
      cResult[8] = str3;
      cResult[9] = obj3;
      tmp16 = obj3;
    }
    const tmpResult = tmp(504);
  }
  const fn = function u() {
    if (hasConjureGuild) {
      const obj2 = { location: _location };
      const config = ConjureMobileExperimentDefault.getConfig(obj2);
      let entryPoint = null;
      if (config.enabled) {
        entryPoint = config.entryPoint;
      }
      return entryPoint;
    } else {
      return null;
    }
  };
  const items2 = [hasConjureGuild, _location];
  cResult[1] = hasConjureGuild;
  cResult[2] = _location;
  cResult[3] = fn;
  cResult[4] = items2;
  tmp7 = items2;
  tmp6 = fn;
  let obj2 = require("ConjureGuildExperiment");
}) : (function useConjureEntryPointPlacement(_location) {
  _require = _location;
  const hasConjureGuild = require("ConjureGuildExperiment").useHasConjureGuild(_location);
  const obj = require("ConjureGuildExperiment");
  const items = [require("ApexExperiment").ApexExperimentStore];
  const items1 = [hasConjureGuild, _location];
  const stateFromStores = require("initialize").useStateFromStores(items, () => {
    if (hasConjureGuild) {
      const obj2 = { location: _location };
      const config = ConjureMobileExperimentDefault.getConfig(obj2);
      let entryPoint = null;
      if (config.enabled) {
        entryPoint = config.entryPoint;
      }
      return entryPoint;
    } else {
      return null;
    }
  }, items1);
  require("initialize");
  [][0] = ConjureYouBarPinStore;
  if (null == stateFromStores) {
    return null;
  } else {
    let str3 = "you_bar";
    if ("profile" === stateFromStores) {
      str3 = "you_bar";
      if (!tmp4) {
        str3 = "you_screen";
      }
    }
    const obj3 = { placement: str3, canPin: "profile" === stateFromStores };
    return obj3;
  }
  let obj2 = require("initialize");
});