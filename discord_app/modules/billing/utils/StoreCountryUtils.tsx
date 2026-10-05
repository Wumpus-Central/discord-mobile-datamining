// discord_app/modules/billing/utils/StoreCountryUtils.tsx
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/billing/utils/StoreCountryUtils.tsx");

export const parseStoreCountry = function parseStoreCountry(storeCountry) {
  let flag;
  let set_at;
  let tmp = storeCountry;
  if (null != storeCountry) {
    const obj = { country: null, setAt: set_at, isLocked: flag };
    ({ country: obj.country, set_at } = storeCountry);
    if (set_at == null) {
      set_at = storeCountry.setAt;
    }
    if (set_at == null) {
      set_at = null;
    }
    flag = storeCountry.is_locked;
    if (flag == null) {
      flag = storeCountry.isLocked;
    }
    if (flag == null) {
      flag = false;
    }
    tmp = obj;
  }
  return tmp;
};
