// discord_app/modules/billing/utils/StoreCountryUtils.tsx
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/billing/utils/StoreCountryUtils.tsx");

export const parseStoreCountry = function parseStoreCountry(storeCountry) {
  let tmp = storeCountry;
  if (null != storeCountry) {
    const obj = { country: null, setAt: null, isLocked: null };
    ({ country: obj.country, set_at } = storeCountry);
    if (set_at == null) {
      set_at = storeCountry.setAt;
    }
    if (set_at == null) {
      set_at = null;
    }
    obj.setAt = set_at;
    let flag = storeCountry.is_locked;
    if (flag == null) {
      flag = storeCountry.isLocked;
    }
    if (flag == null) {
      flag = false;
    }
    obj.isLocked = flag;
    tmp = obj;
  }
  return tmp;
};
