// === Module 12944: GuildProductLinkActionCreators ===

// Module 12944 (GuildProductLinkActionCreators)
import util from "util" /* 1114 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 4905 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_products/GuildProductLinkActionCreators.native.tsx");

export const openGuildProductLink = function openGuildProductLink() {
  const obj = { body: null, confirmText: null };
  const intl = util.intl;
  obj.body = intl.string(util.t["mYlo/T"]);
  const intl2 = util.intl;
  obj.confirmText = intl2.string(util.t.BddRzS);
  obj.show(obj);
};