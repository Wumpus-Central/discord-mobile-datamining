// discord_app/modules/guild_role_subscriptions/native/components/FormPriceTier.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import usePriceTiers from "../RoleTierEditStore.tsx";
import { CurrencyCodes } from "../../../../Constants.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";

const require = fn;
noopAll;
({ LoadingState: c3, usePriceTiersAvailableInGuild: c4 } = usePriceTiers);
const result = require("obj132").fileFinishedImporting("modules/guild_role_subscriptions/native/components/FormPriceTier.tsx");

export default function FormPriceTier(guildId) {
  guildId = guildId.guildId;
  const price = guildId.price;
  const onChange = guildId.onChange;
  let callback;
  let USD;
  const tmp = callback(guildId);
  const tiers = tmp.tiers;
  ({ state, onRefresh: c4 } = tmp);
  USD = USD.USD;
  if (null == tiers) {
    if (state === tiers.LOADING) {
      const intl3 = guildId(onChange[4]).intl;
      let stringResult = intl3.string(guildId(onChange[4]).t.ZTNur7);
      let tmp7 = onChange;
    } else {
      tmp7 = onChange;
      const intl2 = guildId(onChange[4]).intl;
      stringResult = intl2.string(guildId(onChange[4]).t.R0RpRX);
    }
    let obj = { disabled: null, placeholder: null, onPress: null };
    obj[0] = state === tiers.LOADING;
    obj[1] = stringResult;
    obj[2] = function onPress() {
      return _undefined(guildId);
    };
    return jsx(price(tmp7[5]), { disabled: null, placeholder: null, onPress: null });
  } else {
    let formatPriceResult;
    if (null != price) {
      obj = guildId(tmp15[6]);
      formatPriceResult = obj.formatPrice(price, USD);
    }
    obj = { label: null, disabled: null, onPress: null, placeholder: null };
    obj[0] = formatPriceResult;
    obj[1] = guildId.disabled;
    obj[2] = function onPress() {
      price(onChange[7])(null != tiers, "handleSelectPrice must only be called if tiers != null");
      price(onChange[8]);
      let obj = { title: null, items: null, onItemSelect: null, selectedItem: null, hasIcons: false };
      const intl = guildId(onChange[4]).intl;
      obj[0] = intl.string(guildId(onChange[4]).t.nCOuYJ);
      obj[1] = tiers.map((item, index) => {
        const obj = { label: guildId(onChange[6]).formatPrice(item, closure_5), value: item };
        return obj;
      });
      obj[2] = function onItemSelect(arg0) {
        if (closure_2 != null) {
          tmp(arg0);
        }
        price(onChange[8]).hideActionSheet();
      };
      obj[3] = price;
      obj.openLazy(guildId(onChange[10])(onChange[9], onChange.paths), "GuildRoleSubscriptionPriceTierSelect", obj);
      const tmp2 = guildId(onChange[10])(onChange[9], onChange.paths);
    };
    let intl = guildId(tmp15[4]).intl;
    obj[3] = intl.string(guildId(onChange[4]).t.nCOuYJ);
    return jsx(price(onChange[5]), { label: null, disabled: null, onPress: null, placeholder: null });
  }
};