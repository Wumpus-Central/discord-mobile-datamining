// === Module 9434: RoleSubscriptionEmojiUpsellAlert ===

// Module 9434 (RoleSubscriptionEmojiUpsellAlert)
import util from "util" /* 1126 */;
import GuildActionCreatorsDefault from "GuildActionCreators" /* 6104 */;
import _modDef9243 from "module_9243" /* 9243 */;
import CreatorRevenueButton from "CreatorRevenueButton" /* 9435 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 2086 */;

const require = globalThis.__r;

require = fn;
const StaticChannelRoute = fn(2071).StaticChannelRoute;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
let size = fn(2);
let result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/emoji_upsell/RoleSubscriptionEmojiUpsellAlert.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function RoleSubscriptionEmojiUpsellAlert(guildId) {
  const cResult = guildId(576).c(18);
  guildId = guildId.guildId;
  const onClose = guildId.onClose;
  const size = onClose(1497)();
  const diff = Math.min(0.9 * Math.min(size.width, size.height), 500) - 32;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guildId) {
    const fn = function u() {
      guild = null;
      if (null != guildId) {
        guild = GuildStore.getGuild(tmp);
      }
      return guild;
    };
    cResult[1] = guildId;
    cResult[2] = fn;
    let tmp8 = fn;
  } else {
    tmp8 = cResult[2];
  }
  let obj = guildId(576);
  const stateFromStores = guildId(504).useStateFromStores(first, tmp8);
  let name;
  if (stateFromStores != null) {
    name = stateFromStores.name;
  }
  if (cResult[3] !== name) {
    const obj2 = { image: tmp4(9243), title: null, description: null };
    let intl = tmp(1126).intl;
    obj2.title = intl.string(tmp(1126).t.cBjkcx);
    const intl2 = tmp(1126).intl;
    const obj3 = { serverName: name };
    obj2.description = intl2.formatToPlainString(tmp(1126).t["h0u/Hi"], obj3);
    cResult[3] = name;
    cResult[4] = obj2;
    let tmp11 = obj2;
  } else {
    tmp11 = cResult[4];
  }
  if (cResult[5] === guildId) {
    if (cResult[6] === onClose) {
      let tmp12 = cResult[7];
    }
    dependencyMap = tmp12;
    const _Symbol = Symbol;
    if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
      const intl3 = tmp(1126).intl;
      const stringResult = intl3.string(tmp(1126).t.cpT0Cq);
      cResult[8] = stringResult;
      let tmp13 = stringResult;
    } else {
      tmp13 = cResult[8];
    }
    if (cResult[9] !== tmp12) {
      class P {
        constructor() {
          obj = { onPress: closure_2, text: null };
          intl = closure_0(closure_2[5]).intl;
          obj.text = intl.string(closure_0(closure_2[5]).t.p8FG1D);
          return jsx(closure_0(closure_2[11]).CreatorRevenueButton, obj);
        }
      }
      cResult[9] = tmp12;
      cResult[10] = P;
    } else {
      class P {
        constructor() {
          obj = { onPress: closure_2, text: null };
          intl = closure_0(closure_2[5]).intl;
          obj.text = intl.string(closure_0(closure_2[5]).t.p8FG1D);
          return jsx(closure_0(closure_2[11]).CreatorRevenueButton, obj);
        }
      }
    }
    if (cResult[11] === diff) {
      class P {
        constructor() {
          obj = { onPress: closure_2, text: null };
          intl = closure_0(closure_2[5]).intl;
          obj.text = intl.string(closure_0(closure_2[5]).t.p8FG1D);
          return jsx(closure_0(closure_2[11]).CreatorRevenueButton, obj);
        }
      }
      if (cResult[14] === onClose) {
        class P {
          constructor() {
            obj = { onPress: closure_2, text: null };
            intl = closure_0(closure_2[5]).intl;
            obj.text = intl.string(closure_0(closure_2[5]).t.p8FG1D);
            return jsx(closure_0(closure_2[11]).CreatorRevenueButton, obj);
          }
        }
      }
      const obj4 = { cancelText: tmp13, onClose, renderConfirmButton: P, children: tmp16 };
      const tmp21 = jsx(tmp4(5395), { cancelText: tmp13, onClose, renderConfirmButton: P, children: tmp16 });
      cResult[14] = onClose;
      cResult[15] = P;
      cResult[16] = tmp16;
      cResult[17] = tmp21;
    }
    const obj5 = { alertWidth: diff, upsellItem: tmp11 };
    const tmp18 = jsx(tmp(9438).PremiumUpsellItem, { alertWidth: diff, upsellItem: tmp11 });
    cResult[11] = diff;
    cResult[12] = tmp11;
    cResult[13] = tmp18;
  }
  function handleConfirm() {
    const result = GuildActionCreatorsDefault.transitionToGuildSync(guildId, undefined, StaticChannelRoute.ROLE_SUBSCRIPTIONS);
    if (onClose != null) {
      onClose();
    }
  }
  cResult[5] = guildId;
  cResult[6] = onClose;
  cResult[7] = handleConfirm;
  tmp12 = handleConfirm;
  const tmpResult = guildId(504);
}) : (function RoleSubscriptionEmojiUpsellAlert(arg0) {
  ({ guildId: require, onClose } = arg0);
  let stateFromStores;
  function handleConfirm() {
    const result = GuildActionCreatorsDefault.transitionToGuildSync(_require, undefined, StaticChannelRoute.ROLE_SUBSCRIPTIONS);
    if (onClose != null) {
      onClose();
    }
  }
  const size = onClose(stateFromStores[8])();
  const diff = Math.min(0.9 * Math.min(size.width, size.height), 500) - 32;
  const items = [GuildStore];
  stateFromStores = require("initialize").useStateFromStores(items, () => {
    guild = null;
    if (null != _require) {
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
    const obj = { image: _modDef9243, title: null, description: null };
    const intl = util.intl;
    obj.title = intl.string(util.t.cBjkcx);
    const intl2 = util.intl;
    obj.description = intl2.formatToPlainString(util.t["h0u/Hi"], { serverName: name });
    return obj;
  }, items1);
  const obj2 = { cancelText: null, onClose: null, renderConfirmButton: null, children: null };
  let obj = require("initialize");
  let intl = require("util").intl;
  obj2.cancelText = intl.string(require("util").t.cpT0Cq);
  obj2.onClose = onClose;
  obj2.renderConfirmButton = function renderConfirmButton() {
    const obj = { onPress: handleConfirm, text: null };
    const intl = util.intl;
    obj.text = intl.string(util.t.p8FG1D);
    return jsx(CreatorRevenueButton.CreatorRevenueButton, { onPress: handleConfirm, text: null });
  };
  obj2.children = jsx(require("PremiumUpsellAlert").PremiumUpsellItem, { alertWidth: diff, upsellItem: memo });
  return jsx(onClose(stateFromStores[13]), { cancelText: null, onClose: null, renderConfirmButton: null, children: null });
});