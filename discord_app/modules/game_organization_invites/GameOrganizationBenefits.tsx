// discord_app/modules/game_organization_invites/GameOrganizationBenefits.tsx
import util from "../../intl/index.native.tsx";
import _modDef2639 from "GameOrganizationInvitesUntranslated.messages.js";
import size from "../../../_runtime/metro/00002__.js";

const items = [
  {
    key: "auto-sync",
    getText() {
      const intl = util.intl;
      return intl.string(_modDef2639.WUVzdk);
    },
  },
  {
    key: "linked-channel",
    getText() {
      const intl = util.intl;
      return intl.string(_modDef2639.MEQJ1m);
    },
  },
  {
    key: "guild-invite",
    getText(arg0) {
      let displayNoun = arg0;
      const intl = util.intl;
      if (arg0 == null) {
        displayNoun = "other";
      }
      return intl.formatToPlainString(_modDef2639["hn+Lsg"], { displayNoun });
    },
  },
];
const result = size.fileFinishedImporting("modules/game_organization_invites/GameOrganizationBenefits.tsx");

export const GAME_ORGANIZATION_BENEFITS = items;
