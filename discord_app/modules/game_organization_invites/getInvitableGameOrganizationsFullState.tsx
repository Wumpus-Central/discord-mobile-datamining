// discord_app/modules/game_organization_invites/getInvitableGameOrganizationsFullState.tsx
import util from "../../intl/index.native.tsx";
import _modDef2549 from "GameOrganizationInvitesUntranslated.messages.js";
import isGameOrganizationFullDefault from "../game_organizations/isGameOrganizationFull.tsx";
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
