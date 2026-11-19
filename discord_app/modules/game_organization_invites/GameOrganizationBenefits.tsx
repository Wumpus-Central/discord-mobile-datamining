// === Module 12204: GameOrganizationBenefits ===

// Module 12204 (GameOrganizationBenefits)
import util from "util" /* 1113 */;
import _modDef2557 from "module_2557" /* 2557 */;
import size from "module_2" /* 2 */;

const items = [
  {
    key: "auto-sync",
    getText() {
      const intl = util.intl;
      return intl.string(_modDef2557.WUVzdk);
    }
  },
  {
    key: "linked-channel",
    getText() {
      const intl = util.intl;
      return intl.string(_modDef2557.MEQJ1m);
    }
  },
  {
    key: "guild-invite",
    getText(arg0) {
      let displayNoun = arg0;
      const intl = util.intl;
      if (arg0 == null) {
        displayNoun = "other";
      }
      return intl.formatToPlainString(_modDef2557["hn+Lsg"], { displayNoun });
    }
  }
];
const result = size.fileFinishedImporting("modules/game_organization_invites/GameOrganizationBenefits.tsx");

export const GAME_ORGANIZATION_BENEFITS = items;