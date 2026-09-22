// === Module 13241: GuildProductLinkActionCreators ===

// Module 13241 (GuildProductLinkActionCreators)
import util from "util" /* 1115 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5110 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_products/GuildProductLinkActionCreators.native.tsx");

export const openGuildProductLink = function openGuildProductLink() {
  const obj2 = { body: null, confirmText: null };
  const intl = util.intl;
  obj2.body = intl.string(util.t["mYlo/T"]);
  const intl2 = util.intl;
  obj2.confirmText = intl2.string(util.t.BddRzS);
  actions_AlertActionCreatorsDefault.show(obj2);
};