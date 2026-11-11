// === Module 12448: getInvitableGameOrganizationsFullState ===

// Module 12448 (getInvitableGameOrganizationsFullState)
import util from "util" /* 1113 */;
import _modDef2549 from "module_2549" /* 2549 */;
import isGameOrganizationFullDefault from "isGameOrganizationFull" /* 12449 */;
import size from "module_2" /* 2 */;

let closure_3 = { kind: "available" };
let closure_4 = { kind: "all_full" };
const result = size.fileFinishedImporting("modules/game_organization_invites/getInvitableGameOrganizationsFullState.tsx");

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
};
export function getGameOrganizationFullSubLabel(data) {
  const intl = util.intl;
  const obj = { orgName: data.name, noun: null };
  const intl2 = util.intl;
  obj.noun = intl2.string(_modDef2549.xXXGsq);
  return intl.formatToPlainString(_modDef2549.xuM052, obj);
}
export function getInvitableGameOrganizationsFullSubLabel(kind) {
  kind = kind.kind;
  if ("available" !== kind) {
    if ("single_full" === kind) {
      const intl2 = util.intl;
      const obj = { orgName: kind.organization.name, noun: null };
      const intl3 = util.intl;
      obj.noun = intl3.string(_modDef2549.xXXGsq);
      return intl2.formatToPlainString(_modDef2549.xuM052, obj);
    } else if ("all_full" === kind) {
      const intl = util.intl;
      return intl.string(_modDef2549.bY80Jh);
    }
  }
}