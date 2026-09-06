// discord_app/modules/guild_role_subscriptions/native/components/FormPriceTier.tsx
import _modDef38 from "../../../../../_runtime/metro/00038__.js";
import util from "../../../../intl/index.native.tsx";
import asyncRequireImpl from "../../../../../_runtime/01896_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const RoleTierEditStore = fn(17729);
({ LoadingState: c3, usePriceTiersAvailableInGuild: closure_4 } = RoleTierEditStore);
const CurrencyCodes = fn(1074).CurrencyCodes;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/FormPriceTier.tsx");

export default function FormPriceTier(guildId) {
  guildId = guildId.guildId;
  const price = guildId.price;
  const onChange = guildId.onChange;
  c4 = undefined;
  let USD;
  const tmp = c4(guildId);
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
    let obj = {
      disabled: state === tiers.LOADING,
      placeholder: stringResult,
      onPress() {
        return _undefined(guildId);
      },
    };
    return jsx(price(tmp7[5]), {
      disabled: state === tiers.LOADING,
      placeholder: stringResult,
      onPress() {
        return _undefined(guildId);
      },
    });
  } else {
    let formatPriceResult;
    if (null != price) {
      obj = guildId(tmp15[6]);
      formatPriceResult = obj.formatPrice(price, USD);
    }
    obj = {
      label: formatPriceResult,
      disabled: guildId.disabled,
      onPress() {
        _modDef38(null != tiers, "handleSelectPrice must only be called if tiers != null");
        let obj = { title: null, items: null, onItemSelect: null, selectedItem: null, hasIcons: false };
        const intl = util.intl;
        obj.title = intl.string(util.t.nCOuYJ);
        obj.items = tiers.map((value) => {
          const obj = { label: guildId(onChange[6]).formatPrice(value, USD), value };
          return obj;
        });
        obj.onItemSelect = function onItemSelect(arg0) {
          if (closure_1_2 != null) {
            tmp(arg0);
          }
          price(onChange[8]).hideActionSheet();
        };
        obj.selectedItem = price;
        obj.openLazy(asyncRequireImpl(9426, dependencyMap.paths), "GuildRoleSubscriptionPriceTierSelect", obj);
        const tmp2 = asyncRequireImpl(9426, dependencyMap.paths);
      },
      placeholder: null,
    };
    let intl = guildId(tmp15[4]).intl;
    obj.placeholder = intl.string(guildId(onChange[4]).t.nCOuYJ);
    return jsx(price(onChange[5]), {
      label: formatPriceResult,
      disabled: guildId.disabled,
      onPress() {
        _modDef38(null != tiers, "handleSelectPrice must only be called if tiers != null");
        let obj = { title: null, items: null, onItemSelect: null, selectedItem: null, hasIcons: false };
        const intl = util.intl;
        obj.title = intl.string(util.t.nCOuYJ);
        obj.items = tiers.map((value) => {
          const obj = { label: guildId(onChange[6]).formatPrice(value, USD), value };
          return obj;
        });
        obj.onItemSelect = function onItemSelect(arg0) {
          if (closure_1_2 != null) {
            tmp(arg0);
          }
          price(onChange[8]).hideActionSheet();
        };
        obj.selectedItem = price;
        obj.openLazy(asyncRequireImpl(9426, dependencyMap.paths), "GuildRoleSubscriptionPriceTierSelect", obj);
        const tmp2 = asyncRequireImpl(9426, dependencyMap.paths);
      },
      placeholder: null,
    });
  }
}
