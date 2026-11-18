// discord_app/modules/game_organization_invites/GameOrganizationBenefits.tsx
import util from "../../intl/index.native.tsx";
import _modDef2555 from "GameOrganizationInvitesUntranslated.messages.js";
import size from "../../../_runtime/metro/00002__.js";

const items = [
  {
    key: "auto-sync",
    getText() {
      const intl = util.intl;
      return intl.string(_modDef2555.WUVzdk);
    },
  },
  {
    key: "linked-channel",
    getText() {
      const intl = util.intl;
      return intl.string(_modDef2555.MEQJ1m);
    },
  },
  {
    key: "guild-invite",
    getText(noun) {
      const intl = util.intl;
      return intl.formatToPlainString(_modDef2555["hn+Lsg"], { noun });
    },
  },
];
const result = size.fileFinishedImporting("modules/game_organization_invites/GameOrganizationBenefits.tsx");

export const GAME_ORGANIZATION_BENEFITS = items;
