// discord_app/modules/game_organization_invites/getGameOrganizationInviteCtaState.tsx
import util from "../../intl/index.native.tsx";
import _modDef2530 from "GameOrganizationInvitesUntranslated.messages.js";
import size from "../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/game_organization_invites/getGameOrganizationInviteCtaState.tsx");

export default function getGameOrganizationInviteCtaState(noun) {
  noun = noun.noun;
  if (noun.accepted) {
    if (noun.canGoToGuild) {
      const obj2 = { kind: "go_to_server", label: null, actionable: true };
      const intl5 = util.intl;
      obj2.label = intl5.string(_modDef2530.H1wMHV);
      let obj3 = obj2;
    } else {
      obj3 = { kind: "joined", label: null, actionable: false };
      const intl4 = util.intl;
      obj3.label = intl4.string(util.t.cEnaWx);
    }
  } else {
    if (tmp2) {
      const obj4 = { kind: "full", label: null, actionable: false };
      const intl3 = util.intl;
      const obj5 = { noun };
      obj4.label = intl3.formatToPlainString(_modDef2530.rMimTG, obj5);
      let obj = obj4;
    } else if (tmp) {
      const obj6 = { kind: "awaiting", label: null, actionable: false };
      const intl2 = util.intl;
      obj6.label = intl2.string(_modDef2530.OkMPbI);
      obj = obj6;
    } else {
      obj = { kind: "join", label: null, actionable: true };
      const intl = util.intl;
      const obj7 = { noun };
      obj.label = intl.formatToPlainString(_modDef2530["Cz/ZUM"], obj7);
    }
    return obj;
  }
}
