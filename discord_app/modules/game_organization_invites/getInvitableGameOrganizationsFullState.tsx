// === Module 12017: getInvitableGameOrganizationsFullState ===

// Module 12017 (getInvitableGameOrganizationsFullState)
import util from "util" /* 1113 */;
import _modDef2555 from "module_2555" /* 2555 */;
import isGameOrganizationFullDefault from "isGameOrganizationFull" /* 12018 */;
import getGameOrganizationDisplayNounDefault from "getGameOrganizationDisplayNoun" /* 12019 */;
import _slicedToArray from "module_32" /* 32 */;

require = fn;
let closure_4 = { kind: "available" };
let closure_5 = { kind: "all_full" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_organization_invites/getInvitableGameOrganizationsFullState.tsx");

export default function getInvitableGameOrganizationsFullState(arr) {
  if (null != arr) {
    if (0 !== arr.length) {
      if (arr.every((organization) => isGameOrganizationFullDefault(organization.organization))) {
        if (1 === arr.length) {
          const obj = { kind: "single_full", organization: null, displayNoun: null };
          ({ organization: obj.organization, displayNoun: obj.displayNoun } = _slicedToArray(arr, 1)[0]);
          return obj;
        } else {
          return closure_5;
        }
      } else {
        return closure_4;
      }
    }
  }
  return closure_4;
};
export function getGameOrganizationFullSubLabel(data) {
  let tmp = stateFromStores;
  if (stateFromStores === undefined) {
    tmp = null;
  }
  const intl = util.intl;
  return intl.formatToPlainString(_modDef2555.xuM052, { orgName: data.name, noun: getGameOrganizationDisplayNounDefault({ displayNoun: tmp, lowercase: true }) });
}
export function getInvitableGameOrganizationsFullSubLabel(kind) {
  kind = kind.kind;
  if ("available" !== kind) {
    if ("single_full" === kind) {
      let displayNoun = kind.displayNoun;
      if (displayNoun === undefined) {
        displayNoun = null;
      }
      const intl2 = util.intl;
      const obj = { orgName: kind.organization.name, noun: null };
      const obj2 = { displayNoun, lowercase: true };
      obj.noun = getGameOrganizationDisplayNounDefault(obj2);
      return intl2.formatToPlainString(_modDef2555.xuM052, obj);
    } else if ("all_full" === kind) {
      const intl = util.intl;
      return intl.string(_modDef2555.bY80Jh);
    }
  }
}