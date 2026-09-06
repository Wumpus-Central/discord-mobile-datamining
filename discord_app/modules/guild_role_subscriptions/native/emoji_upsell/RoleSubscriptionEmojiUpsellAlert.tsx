// discord_app/modules/guild_role_subscriptions/native/emoji_upsell/RoleSubscriptionEmojiUpsellAlert.tsx
import util from "../../../../intl/index.native.tsx";
import GuildActionCreatorsDefault from "../../../../actions/GuildActionCreators.tsx";
import _modDef9314 from "../../../../../_runtime/metro/09314__.js";
import CreatorRevenueButton from "../components/CreatorRevenueButton.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import GuildStore from "../../../../stores/GuildStore.tsx";

require = fn;
const StaticChannelRoute = fn(1964).StaticChannelRoute;
const jsx = fn(21).jsx;
let size = fn(2);
let result = size.fileFinishedImporting(
  "modules/guild_role_subscriptions/native/emoji_upsell/RoleSubscriptionEmojiUpsellAlert.tsx",
);

export default function RoleSubscriptionEmojiUpsellAlert(arg0) {
  ({ guildId: require, onClose } = arg0);
  let stateFromStores;
  function handleConfirm() {
    const result = GuildActionCreatorsDefault.transitionToGuildSync(
      require,
      undefined,
      StaticChannelRoute.ROLE_SUBSCRIPTIONS,
    );
    if (onClose != null) {
      onClose();
    }
  }
  const size = onClose(stateFromStores[6])();
  const diff = Math.min(0.9 * Math.min(size.width, size.height), 500) - 32;
  let obj = require("initialize");
  const items = [GuildStore];
  stateFromStores = obj.useStateFromStores(items, () => {
    let guild = null;
    if (null != require) {
      guild = GuildStore.getGuild(tmp);
    }
    return guild;
  });
  let name;
  if (stateFromStores != null) {
    name = stateFromStores.name;
  }
  const items1 = [name];
  const memo = handleConfirm.useMemo(() => {
    let name;
    if (stateFromStores != null) {
      name = stateFromStores.name;
    }
    const obj = { image: _modDef9314, title: null, description: null };
    const intl = util.intl;
    obj.title = intl.string(util.t.cBjkcx);
    const intl2 = util.intl;
    obj.description = intl2.formatToPlainString(util.t["h0u/Hi"], { serverName: name });
    return obj;
  }, items1);
  obj = { cancelText: null, onClose: null, renderConfirmButton: null, children: null };
  let intl = tmp4(tmp2[5]).intl;
  obj.cancelText = intl.string(require("util").t.cpT0Cq);
  obj.onClose = onClose;
  obj.renderConfirmButton = function renderConfirmButton() {
    const obj = { onPress: handleConfirm, text: null };
    const intl = util.intl;
    obj.text = intl.string(util.t.p8FG1D);
    return jsx(CreatorRevenueButton.CreatorRevenueButton, { onPress: handleConfirm, text: null });
  };
  obj.children = jsx(require("PremiumUpsellAlert").PremiumUpsellItem, { alertWidth: diff, upsellItem: memo });
  return jsx(onClose(stateFromStores[9]), {
    cancelText: null,
    onClose: null,
    renderConfirmButton: null,
    children: null,
  });
}
