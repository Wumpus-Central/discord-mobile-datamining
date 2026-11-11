// === Module 18235: useCampaignDevTools ===

// Module 18235 (useCampaignDevTools)
import CampaignDevToolsUtils from "CampaignDevToolsUtils" /* 9604 */;
import OverridePremiumTypeActions from "OverridePremiumTypeActions" /* 18205 */;
import _slicedToArray from "module_32" /* 32 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import OverridePremiumTypeStore from "OverridePremiumTypeStore" /* 1386 */;
import PromotionsStore from "PromotionsStore" /* 9557 */;
import LocaleStore from "LocaleStore" /* 2186 */;
import UserStore from "UserStore" /* 1385 */;

require = fn;
function setCampaignNitro(value) {
  closure_0 = value;
  const iter = prop.find((id) => id.id === closure_0);
  value = undefined;
  if (iter != null) {
    value = iter.value;
  }
  const result = OverridePremiumTypeActions.updateClientPremiumTypeOverride(value, UserStore.getCurrentUser());
}
const prop = fn(1387).PREMIUM_TYPE_OVERRIDE_OPTIONS;
let items = [
  { id: "actual", value: "actual", label: "Use actual Nitro status" },
  ...prop.map((id) => {
    const obj = {};
    const merged = Object.assign(id);
    obj.value = id.id;
    return obj;
  })
];
let c11 = 0;
let c12 = 0;
const module_560 = fn(560);
let closure_13 = module_560.create((arg0) => {
  closure_0 = arg0;
  let obj = { campaigns: [], campaignsLoading: true, componentsLoading: false, error: null, reload: null };
  closure_1 = asyncGeneratorStep(async () => {
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp8 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_1 = tmp4;
            closure_128_1 = undefined;
            sum = sum + 1;
            closure_128_0 = sum;
            tmp6({ campaignsLoading: true, error: null });
            c3 = 2;
            const HTTP = tmp6(tmp43[9]).HTTP;
            c4 = 3;
            c5 = 1;
            const obj4 = { value: HTTP.get({ url: "/premium-marketing/promotions", rejectWithError: true }), done: false };
            return obj4;
          }
        } else if (1 === tmp9) {
          c3 = 0;
          if (closure_128_0 === sum) {
            closure_129_0({ campaignsLoading: false });
          }
          throw tmp43;
        } else {
          if (2 === tmp9) {
            c3 = 1;
            if (closure_128_0 === sum) {
              closure_129_0({ error: "Could not load campaigns. Staff access is required." });
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            if (closure_128_0 === sum) {
              closure_129_0({ campaignsLoading: false });
            }
            c5 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            closure_128_1 = value;
            if (closure_128_0 === sum) {
              const obj = { campaigns: closure_128_1.body };
              closure_129_0(obj);
            }
            c3 = 1;
          }
          c3 = 0;
          if (closure_128_0 === sum) {
            closure_129_0({ campaignsLoading: false });
          }
          c5 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp43) {
        if (tmp5 === c3) {
          c5 = tmp3;
          throw tmp43;
        } else if (tmp2 === tmp45) {
          c4 = tmp2;
        } else {
          c4 = tmp;
        }
      }
    }
  });
  obj.reload = function reload() {
    const self = this;
    const apply = closure_1.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  };
  return obj;
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/devtools/useCampaignDevTools.tsx");

export default function useCampaignDevTools() {
  const locale = async function _select(arg0) {
    if (c7 === 2) {
      c7 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp8 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c7 = 2;
        if (0 === c6) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_3 = tmp4;
            closure_130_0 = campaigns;
            closure_130_2 = undefined;
            sum = sum + 1;
            closure_130_1 = sum;
            dependencyMap(null);
            if (null == campaigns) {
              closure_1_13.setState({ componentsLoading: false });
              const obj4 = { type: "CAMPAIGN_OVERRIDE_SET", promotionId: null, endDate: null, components: [] };
              endDate(tmp6[13]).dispatch(obj4);
              c7 = 3;
              return { value: true, done: true };
            } else {
              closure_1_13.setState({ componentsLoading: true });
              c5 = 2;
              const HTTP = campaigns(tmp6[9]).HTTP;
              const obj5 = { url: null, rejectWithError: true };
              const _HermesInternal = HermesInternal;
              obj5.url = "/premium-marketing/promotions/" + campaigns + "/components";
              c6 = 3;
              c7 = 1;
              const obj6 = { value: HTTP.get(obj5), done: false };
              return obj6;
            }
          }
        } else if (1 === tmp9) {
          c5 = 0;
          if (closure_130_1 === sum) {
            closure_1_13.setState({ componentsLoading: false });
          }
          throw closure_4;
        } else if (2 === tmp9) {
          c5 = 1;
          if (closure_130_1 === sum) {
            closure_131_2("Could not enable campaign. Try again.");
          }
          c5 = 0;
          if (closure_130_1 === sum) {
            closure_1_13.setState({ componentsLoading: false });
          }
          c7 = 3;
          return { value: false, done: true };
        } else if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 0;
          if (closure_130_1 === sum) {
            closure_1_13.setState({ componentsLoading: false });
          }
          c7 = 3;
          const obj8 = { value, done: true };
          return obj8;
        } else {
          closure_130_2 = value;
          let flag = closure_130_1 === sum;
          if (flag) {
            const obj9 = { type: "CAMPAIGN_OVERRIDE_SET", promotionId: closure_130_0, endDate: null, components: null };
            const found = closure_131_0.find((id) => id.id === closure_1_0);
            end_date = undefined;
            if (found != null) {
              end_date = found.end_date;
            }
            endDate = end_date;
            if (end_date == null) {
              endDate = null;
            }
            obj9.endDate = endDate;
            obj9.components = closure_130_2.body;
            endDate(tmp6[13]).dispatch(obj9);
            closure_1_13.setState({ error: null });
            flag = true;
            const obj = endDate(tmp6[13]);
          }
          c5 = 0;
          if (closure_130_1 === sum) {
            closure_1_13.setState({ componentsLoading: false });
          }
          c7 = 3;
          const obj10 = { value: flag, done: true };
          return obj10;
        }
      } catch (tmp64) {
        closure_4 = tmp64;
        if (tmp5 === c5) {
          c7 = tmp3;
          throw tmp64;
        } else if (tmp2 === tmp66) {
          c6 = tmp2;
        } else {
          c6 = tmp;
        }
      }
    }
  };
  const tmp = closure_13();
  const campaigns = tmp.campaigns;
  ({ campaignsLoading, componentsLoading, reload } = tmp);
  [error, dependencyMap] = stateFromStores(stateFromStores1.useState(null), 2);
  let obj = stateFromStores1;
  const tmp2 = stateFromStores(stateFromStores1.useState(null), 2);
  items = [closure_7];
  stateFromStores = campaigns(504).useStateFromStores(items, () => closure_7.campaignOverrideId);
  let found = campaigns.find((id) => id.id === stateFromStores);
  let obj2 = campaigns(504);
  const items1 = [closure_7];
  const stateFromStoresArray = campaigns(504).useStateFromStoresArray(items1, () => closure_7.campaignOverrideRows);
  let obj3 = campaigns(504);
  const tmp8 = reload(18236)(stateFromStores, stateFromStoresArray);
  const items2 = [locale];
  stateFromStores1 = campaigns(504).useStateFromStores(items2, () => locale.locale);
  let end_date;
  if (found != null) {
    end_date = found.end_date;
  }
  if (end_date == null) {
    end_date = null;
  }
  const items3 = [stateFromStoresArray, stateFromStores1, end_date];
  if (componentsLoading) {
    let items4 = [];
  } else {
    items4 = tmp3(9604).campaignPreviewActions(tmp11, stateFromStoresArray, found);
    const tmp3Result = tmp3(9604);
  }
  let obj4 = campaigns(504);
  const items5 = [end_date];
  closure_7 = campaigns(504).useStateFromStores(items5, () => end_date.getPremiumTypeOverride());
  const found1 = prop.find((value) => value.value === closure_7);
  let str;
  if (found1 != null) {
    str = found1.id;
  }
  if (str == null) {
    str = "actual";
  }
  const items6 = [reload];
  let obj5 = { campaigns, dismissals: tmp8, error: null, loading: null, campaignsLoading: null, componentsLoading: null, reload: null, select: null, selectedId: null, previewActions: null, details: null, nitro: null, setNitro: null };
  const callback = obj.useCallback(() => {
    dependencyMap(null);
    return reload();
  }, items6);
  if (error == null) {
    error = tmp.error;
  }
  obj5.error = error;
  let tmp14 = componentsLoading;
  if (!componentsLoading) {
    tmp14 = campaignsLoading;
  }
  obj5.loading = tmp14;
  obj5.campaignsLoading = campaignsLoading;
  obj5.componentsLoading = componentsLoading;
  obj5.reload = callback;
  obj5.select = function select(arg0) {
    const self = this;
    const apply = closure_8.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  };
  obj5.selectedId = stateFromStores;
  obj5.previewActions = items4;
  if (!componentsLoading) {
    if (null != found) {
      tmp3(9604).campaignDetails(found, stateFromStoresArray);
      const tmp3Result4 = tmp3(9604);
    }
    obj5.details = [];
    obj5.nitro = str;
    obj5.setNitro = setCampaignNitro;
    return obj5;
  }
  const tmp3Result3 = campaigns(504);
};
export const NITRO_OPTIONS = items;
export { setCampaignNitro };