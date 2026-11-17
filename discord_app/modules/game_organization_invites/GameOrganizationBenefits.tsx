// === Module 12933: GameOrganizationBenefits ===

// Module 12933 (GameOrganizationBenefits)
import util from "util" /* 1113 */;
import _modDef2565 from "module_2565" /* 2565 */;
import size from "module_2" /* 2 */;

const items = [
  {
    key: "auto-sync",
    getText() {
      const intl = util.intl;
      return intl.string(_modDef2565.WUVzdk);
    }
  },
  {
    key: "linked-channel",
    getText() {
      const intl = util.intl;
      return intl.string(_modDef2565.MEQJ1m);
    }
  },
  {
    key: "guild-invite",
    getText(noun) {
      const intl = util.intl;
      return intl.formatToPlainString(_modDef2565["hn+Lsg"], { noun });
    }
  }
];
const result = size.fileFinishedImporting("modules/game_organization_invites/GameOrganizationBenefits.tsx");

export const GAME_ORGANIZATION_BENEFITS = items;