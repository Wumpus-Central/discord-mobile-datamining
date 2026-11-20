// === Module 11937: getInvitableGameOrganizationsFullState ===

// Module 11937 (getInvitableGameOrganizationsFullState)
import util from "util" /* 1112 */;
import _modDef2559 from "module_2559" /* 2559 */;
import isGameOrganizationFullDefault from "isGameOrganizationFull" /* 11938 */;
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
  let str = stateFromStores;
  if (stateFromStores === undefined) {
    str = null;
  }
  const intl = util.intl;
  const obj = { orgName: data.name, displayNoun: null };
  if (str == null) {
    str = "other";
  }
  obj.displayNoun = str;
  return intl.formatToPlainString(_modDef2559.xuM052, obj);
}
export function getInvitableGameOrganizationsFullSubLabel(kind) {
  kind = kind.kind;
  if ("available" !== kind) {
    if ("single_full" === kind) {
      let str2 = kind.displayNoun;
      if (str2 === undefined) {
        str2 = null;
      }
      const intl2 = util.intl;
      const obj = { orgName: kind.organization.name, displayNoun: null };
      if (str2 == null) {
        str2 = "other";
      }
      obj.displayNoun = str2;
      return intl2.formatToPlainString(_modDef2559.xuM052, obj);
    } else if ("all_full" === kind) {
      const intl = util.intl;
      return intl.string(_modDef2559.bY80Jh);
    }
  }
}