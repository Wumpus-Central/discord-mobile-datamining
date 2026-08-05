// discord_app/modules/guild_products/GuildProductLinkActionCreators.native.tsx
const result = require("set").fileFinishedImporting("modules/guild_products/GuildProductLinkActionCreators.native.tsx");

export const openGuildProductLink = function openGuildProductLink(closure_0, closure_1) {
  let obj = require("../../actions/native/AlertActionCreators.tsx");
  obj = { body: null, confirmText: null };
  const intl = require("../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj[0] = intl.string(require("../../intl/index.native.tsx") /* getSystemLocale */.t["mYlo/T"]);
  const intl2 = require("../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj[1] = intl2.string(require("../../intl/index.native.tsx") /* getSystemLocale */.t.BddRzS);
  obj.show(obj);
};