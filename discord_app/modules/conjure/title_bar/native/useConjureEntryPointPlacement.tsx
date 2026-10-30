// === Module 9654: useConjureEntryPointPlacement ===

// Module 9654 (useConjureEntryPointPlacement)
import ConjureMobileExperimentDefault from "ConjureMobileExperiment" /* 9656 */;
import ConjureYouBarPinStore from "ConjureYouBarPinStore" /* 9655 */;

const require = globalThis.__r;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/title_bar/native/useConjureEntryPointPlacement.tsx");

export default function useConjureEntryPointPlacement(DMAppChannel) {
  _require = DMAppChannel;
  const hasConjureGuild = require("ConjureGuildExperiment").useHasConjureGuild(DMAppChannel);
  const obj = require("ConjureGuildExperiment");
  const items = [require("ApexExperiment").ApexExperimentStore];
  const items1 = [hasConjureGuild, DMAppChannel];
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
};