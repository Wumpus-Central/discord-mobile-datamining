// discord_app/modules/game_organization_invites/getInvitableGameOrganizationsFullState.tsx
import util from "../../intl/index.native.tsx";
import _modDef2559 from "GameOrganizationInvitesUntranslated.messages.js";
import isGameOrganizationFullDefault from "../game_organizations/isGameOrganizationFull.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__.js";

require = fn;
let closure_4 = { kind: "available" };
let closure_5 = { kind: "all_full" };
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/game_organization_invites/getInvitableGameOrganizationsFullState.tsx",
);

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
}
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
