// discord_app/modules/guild_products/GuildProductLinkActionCreators.native.tsx
import util from "../../intl/index.native.tsx";
import actions_AlertActionCreatorsDefault from "../../actions/native/AlertActionCreators.tsx";
import size from "../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/guild_products/GuildProductLinkActionCreators.native.tsx");

export const openGuildProductLink = function openGuildProductLink() {
  const obj = { body: null, confirmText: null };
  const intl = util.intl;
  obj.body = intl.string(util.t["mYlo/T"]);
  const intl2 = util.intl;
  obj.confirmText = intl2.string(util.t.BddRzS);
  obj.show(obj);
};
