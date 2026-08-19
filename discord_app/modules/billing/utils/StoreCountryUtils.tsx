// === Module 1944: parseStoreCountry ===

// Module 1944 (parseStoreCountry)
import obj132 from "obj132" /* 2 */;

const result = obj132.fileFinishedImporting("modules/billing/utils/StoreCountryUtils.tsx");

export const parseStoreCountry = function parseStoreCountry(storeCountry) {
  let tmp = storeCountry;
  if (null != storeCountry) {
    const obj = { country: null, setAt: null, isLocked: null };
    ({ country: obj[0], set_at } = storeCountry);
    if (set_at == null) {
      set_at = storeCountry.setAt;
    }
    if (set_at == null) {
      set_at = null;
    }
    obj[1] = set_at;
    let flag = storeCountry.is_locked;
    if (flag == null) {
      flag = storeCountry.isLocked;
    }
    if (flag == null) {
      flag = false;
    }
    obj[2] = flag;
    tmp = obj;
  }
  return tmp;
};