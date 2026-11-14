// discord_app/modules/game_organization_invites/getInvitableGameOrganizationsFullState.tsx
import util from "../../intl/index.native.tsx";
import _modDef2565 from "GameOrganizationInvitesUntranslated.messages.js";
import isGameOrganizationFullDefault from "../game_organizations/isGameOrganizationFull.tsx";
import getGameOrganizationDisplayNounDefault from "getGameOrganizationDisplayNoun.tsx";
import size from "../../../_runtime/metro/00002__.js";

let closure_3 = { kind: "available" };
let closure_4 = { kind: "all_full" };
const result = size.fileFinishedImporting(
  "modules/game_organization_invites/getInvitableGameOrganizationsFullState.tsx",
);

export default function getInvitableGameOrganizationsFullState(arg0) {
  let organization = arg0;
  if (null != arg0) {
    if (0 !== organization.length) {
      if (organization.every((organization) => isGameOrganizationFullDefault(organization.organization))) {
        if (1 === organization.length) {
          const obj = { kind: "single_full", organization: null };
          organization = organization[0].organization;
          obj.organization = organization;
        }
      } else {
        let tmp = closure_3;
      }
    }
    return tmp;
  }
  tmp = closure_3;
}
export function getGameOrganizationFullSubLabel(data) {
  let tmp = stateFromStores;
  if (stateFromStores === undefined) {
    tmp = null;
  }
  const intl = util.intl;
  return intl.formatToPlainString(_modDef2565.xuM052, {
    orgName: data.name,
    noun: getGameOrganizationDisplayNounDefault({ displayNoun: tmp, lowercase: true }),
  });
}
export function getInvitableGameOrganizationsFullSubLabel(kind) {
  kind = kind.kind;
  if ("available" !== kind) {
    if ("single_full" === kind) {
      const intl2 = util.intl;
      const obj = { orgName: kind.organization.name, noun: null };
      const obj2 = { displayNoun: null, lowercase: true };
      obj.noun = getGameOrganizationDisplayNounDefault(obj2);
      return intl2.formatToPlainString(_modDef2565.xuM052, obj);
    } else if ("all_full" === kind) {
      const intl = util.intl;
      return intl.string(_modDef2565.bY80Jh);
    }
  }
}
