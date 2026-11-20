// === Module 14200: getGameOrganizationInviteCtaState ===

// Module 14200 (getGameOrganizationInviteCtaState)
import util from "util" /* 1112 */;
import _modDef2559 from "module_2559" /* 2559 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/game_organization_invites/getGameOrganizationInviteCtaState.tsx");

export default function getGameOrganizationInviteCtaState(displayNoun) {
  let str = displayNoun.displayNoun;
  if (displayNoun.accepted) {
    if (displayNoun.canGoToGuild) {
      const obj2 = { kind: "go_to_server", label: null, actionable: true };
      const intl5 = util.intl;
      obj2.label = intl5.string(_modDef2559.H1wMHV);
      let obj3 = obj2;
    } else {
      obj3 = { kind: "joined", label: null, actionable: false };
      const intl4 = util.intl;
      obj3.label = intl4.string(util.t.cEnaWx);
    }
  } else {
    if (tmp2) {
      const intl3 = util.intl;
      if (str == null) {
        str = "other";
      }
      const obj4 = { kind: "full", label: null, actionable: false };
      const obj5 = { displayNoun: str };
      obj4.label = intl3.formatToPlainString(_modDef2559.rMimTG, obj5);
      let obj = obj4;
    } else if (tmp) {
      const obj6 = { kind: "awaiting", label: null, actionable: false };
      const intl2 = util.intl;
      obj6.label = intl2.string(_modDef2559.OkMPbI);
      obj = obj6;
    } else {
      const intl = util.intl;
      let str2 = str;
      if (str == null) {
        str2 = "other";
      }
      obj = { kind: "join", label: null, actionable: true };
      const obj7 = { displayNoun: str2 };
      obj.label = intl.formatToPlainString(_modDef2559["Cz/ZUM"], obj7);
    }
    return obj;
  }
};