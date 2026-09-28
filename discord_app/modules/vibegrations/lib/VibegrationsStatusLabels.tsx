// discord_app/modules/vibegrations/lib/VibegrationsStatusLabels.tsx
import util from "../../../intl/index.native.tsx";
import _modDef3715 from "../intl/VibegrationsUntranslated.messages.js";
import VibegrationsTypes from "../VibegrationsTypes.tsx";

require = fn;
function thinkingLabel(restoring) {
  ({ activity, compacting } = restoring);
  if (compacting === undefined) {
    compacting = false;
  }
  let flag = restoring.restoring;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = restoring.recalling;
  if (flag2 === undefined) {
    flag2 = false;
  }
  let flag3 = restoring.controlling;
  if (flag3 === undefined) {
    flag3 = false;
  }
  let tmp = null != activity;
  if (tmp) {
    tmp = "end" !== activity.phase;
  }
  if (flag3) {
    let ivvYHP = _modDef3715.ivvYHP;
  } else if (flag) {
    ivvYHP = _modDef3715.aFffp2;
  } else if (flag2) {
    ivvYHP = items[0];
  } else {
    const tmp4 = _modDef3715;
    if (compacting) {
      ivvYHP = tmp4["0vH/5G"];
    } else {
      ivvYHP = tmp ? tmp4.Ly7F7x : tmp4.QDGuNS;
    }
  }
  return ivvYHP;
}
const items = [
  _modDef3715.krnkPq,
  _modDef3715["8oUm/J"],
  _modDef3715["6Ea4dF"],
  _modDef3715.fQx5qC,
  _modDef3715["phXeK/"],
];
const size = fn(2);
const result = size.fileFinishedImporting("modules/vibegrations/lib/VibegrationsStatusLabels.tsx");

export const INDICATOR_PASS_MS = 1000;
export const INDICATOR_PASS_STAGGER_MS = 1800;
export const RECALLING_LINES = items;
export const recallingLine = function recallingLine(current) {
  const intl = util.intl;
  return intl.string(items[current % items.length]);
};
export const isRecallingLine = function isRecallingLine(current) {
  closure_0 = current;
  return items.some((item) => {
    const intl = util.intl;
    return intl.string(item) === closure_0;
  });
};
export const connectionLabel = function connectionLabel(stateFromStores6) {
  if ("connecting" === stateFromStores6) {
    const intl3 = util.intl;
    return intl3.string(_modDef3715.W7oyuf);
  } else if ("closed" === stateFromStores6) {
    const intl2 = util.intl;
    return intl2.string(_modDef3715["yBmS+I"]);
  } else if ("failed" === stateFromStores6) {
    const intl = util.intl;
    return intl.string(_modDef3715.eE60xI);
  }
};
export { thinkingLabel };
export const thinkingLine = function thinkingLine(restoring) {
  const intl = util.intl;
  return intl.string(thinkingLabel(restoring));
};
export const runesUsedLabels = function runesUsedLabels(projectUsage) {
  const runesFromUsdResult = VibegrationsTypes.runesFromUsd(projectUsage.cost_usd);
  const obj2 = { text: null, aria: null };
  const intl = util.intl;
  obj2.text = intl.formatToPlainString(_modDef3715["4PFO2p"], { runes: runesFromUsdResult.toLocaleString() });
  const intl2 = util.intl;
  obj2.aria = intl2.formatToPlainString(_modDef3715["7SZZvj"], {
    runes: runesFromUsdResult,
    turns: projectUsage.turns,
  });
  return obj2;
};
