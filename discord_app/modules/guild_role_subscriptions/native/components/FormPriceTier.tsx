// === Module 17965: FormPriceTier ===

// Module 17965 (FormPriceTier)
import Fragment from "Fragment" /* 21 */;
import _modDef38 from "module_38" /* 38 */;
import Constants from "Constants" /* 1085 */;
import intl4 from "intl" /* 1126 */;
import asyncRequire from "asyncRequire" /* 1987 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import react from "react" /* 19 */;
import RoleTierEditStore from "RoleTierEditStore" /* 17926 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
({ LoadingState: c3, usePriceTiersAvailableInGuild: closure_4 } = RoleTierEditStore);
const CurrencyCodes = Constants.CurrencyCodes;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/FormPriceTier.tsx");

export default function FormPriceTier(guildId) {
  let _undefined;
  let c4;
  let state;
  guildId = guildId.guildId;
  const price = guildId.price;
  const onChange = guildId.onChange;
  c4 = undefined;
  let USD;
  const disabled = guildId.disabled;
  let tmp = c4(guildId);
  const tiers = tmp.tiers;
  ({ state, onRefresh: c4 } = tmp);
  USD = USD.USD;
  if (null == tiers) {
    let stringResult;
    let tmp7;
    const tmp5 = tiers;
    if (state === tiers.LOADING) {
      const intl3 = guildId(onChange[4]).intl;
      stringResult = intl3.string(guildId(onChange[4]).t.ZTNur7);
      tmp7 = onChange;
    } else {
      tmp7 = onChange;
      const intl2 = guildId(onChange[4]).intl;
      stringResult = intl2.string(guildId(onChange[4]).t.R0RpRX);
    }
    return jsx(price(tmp7[5]), {
      disabled: state === tmp5.LOADING,
      placeholder: stringResult,
      onPress() {
          return _undefined(guildId);
        }
    });
  } else {
    let formatPriceResult;
    price(onChange[5]);
    if (null != price) {
      let tmp2 = guildId;
      let obj = guildId(tmp15[6]);
      formatPriceResult = obj.formatPrice(price, USD);
    }
    let intl = guildId(tmp15[4]).intl;
    return <tmp16 label={formatPriceResult} disabled={disabled} onPress={function onPress() {
      let intl;
      const tmp = _modDef38(null != tiers, "handleSelectPrice must only be called if tiers != null");
      const openLazy = ActionSheetActionCreatorsDefault.openLazy;
      let obj = {
        title: intl.string(intl4.t.nCOuYJ),
        items: tiers.map((value) => {
          let obj2;
          const obj = { label: obj2.formatPrice(value, USD), value };
          obj2 = guildId(onChange[6]);
          return obj;
        }),
        onItemSelect(arg0) {
          if (closure_1_2 != null) {
            tmp(arg0);
          }
          const obj = price(onChange[8]);
          obj.hideActionSheet();
        },
        selectedItem: price,
        hasIcons: false
      };
      const tmp3 = asyncRequire(8949, dependencyMap.paths);
      intl = intl4.intl;
      openLazy(tmp3, "GuildRoleSubscriptionPriceTierSelect", obj);
    }} placeholder={intl.string(guildId(onChange[4]).t.nCOuYJ)} />;
  }
};