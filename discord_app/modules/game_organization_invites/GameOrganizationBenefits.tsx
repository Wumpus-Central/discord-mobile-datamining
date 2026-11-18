// === Module 12221: GameOrganizationBenefits ===

// Module 12221 (GameOrganizationBenefits)
import util from "util" /* 1113 */;
import _modDef2555 from "module_2555" /* 2555 */;
import size from "module_2" /* 2 */;

const items = [
  {
    key: "auto-sync",
    getText() {
      const intl = util.intl;
      return intl.string(_modDef2555.WUVzdk);
    }
  },
  {
    key: "linked-channel",
    getText() {
      const intl = util.intl;
      return intl.string(_modDef2555.MEQJ1m);
    }
  },
  {
    key: "guild-invite",
    getText(noun) {
      const intl = util.intl;
      return intl.formatToPlainString(_modDef2555["hn+Lsg"], { noun });
    }
  }
];
const result = size.fileFinishedImporting("modules/game_organization_invites/GameOrganizationBenefits.tsx");

export const GAME_ORGANIZATION_BENEFITS = items;