// discord_app/modules/conjure/server_widgets/conjureServerWidgetConsent.tsx
import URLUtilsDefault from "../../../utils/URLUtils.tsx";
import WidgetActionCreatorsDefault from "../../user_profile/WidgetActionCreators.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import WidgetStore from "../../user_profile/WidgetStore.tsx";
import ConjureProjectStore from "../projects/ConjureProjectStore.tsx";

const require = globalThis.__r;

const require = fn;
let closure_6 = async function _exchangeConsentCode() {
  c3 = 0;
  c4 = 0;
  return (async (arg0, value) => {
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
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
        c4 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_2 = tmp2;
            closure_130_0 = undefined;
            const _fetch = fetch;
            const _HermesInternal2 = HermesInternal;
            const request = { method: "POST", headers: { "content-type": "application/json" }, body: null };
            const _JSON = JSON;
            const obj4 = { project_id, code };
            const combined = "" + require("conjureWorkerOrigin").getConjureWorkerOrigin() + "/agent/widget-consent";
            request.body = JSON.stringify(obj4);
            c3 = 1;
            c4 = 1;
            const obj6 = { value: fetch(combined, request), done: false };
            return obj6;
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          closure_130_0 = value;
          if (closure_130_0.ok) {
            c4 = 3;
            return { value: "HermesInternal", done: null };
          } else {
            const _Error = Error;
            const _HermesInternal = HermesInternal;
            const error = new Error("widget consent failed (" + closure_130_0.status + ")");
            throw error;
          }
        }
      } catch (tmp15) {
        c4 = tmp;
        throw tmp15;
      }
    }
  })();
};
let closure_8 = async function _addWidget() {
  c2 = 0;
  c1 = 0;
  return (async (arg0) => {
    if (c1 === 2) {
      c1 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c1 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c1 = 3;
            throw value;
          } else if (arg0 === 2) {
            c1 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            const obj5 = { applicationId };
            const applicationWidget = new require("UserProfileApplicationWidgetTypes").ApplicationWidget(obj5);
            const obj7 = require("WidgetUtils");
            if (hasPendingChangesResult) {
              obj7.addWidgetToPending(applicationWidget);
            } else {
              const savedWidgets = obj7.getSavedWidgets();
              const found = savedWidgets.filter((getUniqueKey) => {
                const uniqueKey = getUniqueKey.getUniqueKey();
                return uniqueKey !== applicationWidget.getUniqueKey();
              });
              items = [applicationWidget];
              HermesBuiltin.arraySpread(found, 1);
              c2 = 1;
              c1 = 1;
              const obj6 = { value: WidgetActionCreatorsDefault.savePendingWidgets(items), done: false };
              return obj6;
            }
            hasPendingChangesResult = WidgetStore.hasPendingChanges();
          }
        } else if (arg0 === 1) {
          c1 = 3;
          throw value;
        } else if (arg0 === 2) {
          c1 = 3;
          const obj = { value, done: true };
          return obj;
        }
        c1 = 3;
        return { value: "HermesInternal", done: null };
      } catch (tmp10) {
        c1 = tmp;
        throw tmp10;
      }
    }
  })();
};
let closure_9 = async function _exchangeAndAdd(arg0) {
  if (c9 === 2) {
    c9 = 3;
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
      c9 = 2;
      if (0 === c8) {
        if (arg0 === 1) {
          c9 = 3;
          throw value;
        } else if (arg0 === 2) {
          c9 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_5 = tmp4;
          closure_4 = tmp6;
          closure_132_3 = undefined;
          closure_132_4 = undefined;
          closure_132_0 = closure_0;
          closure_132_1 = closure_1;
          closure_132_2 = closure_2;
          ({ onTurnedOn: closure_132_3, showToast: closure_132_4 } = closure_3);
          c8 = 1;
          c9 = 1;
          return { value: "Path", done: true };
        }
      } else if (1 === tmp9) {
        if (arg0 === 1) {
          c9 = 3;
          throw value;
        } else if (arg0 === 2) {
          c9 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          c7 = 1;
          c8 = 4;
          c9 = 1;
          const obj7 = {
            value: (function exchangeConsentCode() {
              const self = this;
              const apply = closure_1_6.apply;
              if (typeof apply === "unknown") {
                let applyArgumentsResult = HermesBuiltin.applyArguments(self);
              } else {
                applyArgumentsResult = apply(self, arguments);
              }
              return applyArgumentsResult;
            })(closure_132_0, closure_132_2),
            done: false,
          };
          return obj7;
        }
      } else if (2 === tmp9) {
        c7 = 0;
        const obj8 = { text: null, variant: "critical" };
        const intl = closure_133_0(closure_133_2[7]).intl;
        obj8.text = intl.string(closure_133_1(closure_133_2[8]).to9Sp4);
        closure_132_4(obj8);
        c9 = 3;
        const obj9 = { value: undefined, done: true };
        return obj9;
      } else {
        if (3 === tmp9) {
          c7 = 0;
          closure_132_5 = closure_6;
          closure_133_1(closure_133_2[9]).captureException(closure_132_5);
          const obj5 = closure_133_1(closure_133_2[9]);
          const result = closure_133_0(closure_133_2[10]).refreshApplicationWidget(closure_132_1);
          c8 = 6;
          c9 = 1;
          const obj6 = closure_133_0(closure_133_2[10]);
        } else if (4 === tmp9) {
          if (arg0 === 1) {
            c9 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 0;
            c9 = 3;
            const obj10 = { value, done: true };
            return obj10;
          } else {
            c8 = 5;
            c9 = 1;
            const obj11 = {
              value: (function addWidget() {
                const self = this;
                const apply = closure_1_8.apply;
                if (typeof apply === "unknown") {
                  let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                } else {
                  applyArgumentsResult = apply(self, arguments);
                }
                return applyArgumentsResult;
              })(closure_132_1),
              done: false,
            };
            return obj11;
          }
        } else if (5 === tmp9) {
          if (arg0 === 1) {
            c9 = 3;
            throw value;
          } else if (arg0 !== 2) {
            c7 = 2;
            if (closure_132_3 != null) {
              closure_132_3();
            }
            c7 = 0;
          }
        } else if (arg0 === 1) {
          c9 = 3;
          throw value;
        } else if (arg0 === 2) {
          c9 = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          c9 = 3;
          return { value: "HermesInternal", done: null };
        }
        c7 = 0;
        c9 = 3;
        const obj12 = { value, done: true };
        return obj12;
      }
    } catch (tmp43) {
      closure_6 = tmp43;
      if (tmp5 === c7) {
        c9 = tmp3;
        throw tmp43;
      } else if (tmp2 === tmp45) {
        c8 = tmp;
      } else {
        c8 = tmp3;
      }
    }
  }
};
let closure_10 = async function _finishTurnOn(arg0) {
  if (c9 === 2) {
    c9 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
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
      c9 = 2;
      if (0 === c8) {
        if (arg0 === 1) {
          c9 = 3;
          throw value;
        } else if (arg0 === 2) {
          c9 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_5 = tmp3;
          closure_4 = tmp7;
          closure_132_0 = closure_1;
          if (set.has(closure_1)) {
            c9 = 3;
          } else {
            set.add(closure_1);
            c7 = 1;
            c8 = 2;
            c9 = 1;
            const obj4 = {
              value: (function exchangeAndAdd() {
                const self = this;
                const apply = closure_1_9.apply;
                if (typeof apply === "unknown") {
                  let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                } else {
                  applyArgumentsResult = apply(self, arguments);
                }
                return applyArgumentsResult;
              })(closure_0, closure_1, closure_2, closure_3),
              done: false,
            };
            return obj4;
          }
        }
      } else if (1 === tmp7) {
        c7 = 0;
        closure_133_7.delete(closure_132_0);
        throw closure_6;
      } else if (arg0 === 1) {
        c9 = 3;
        throw value;
      } else if (arg0 !== 2) {
        c7 = 0;
        closure_133_7.delete(closure_132_0);
      }
      c7 = 0;
      closure_133_7.delete(closure_132_0);
      c9 = 3;
      const obj = { value, done: true };
      return obj;
    } catch (tmp31) {
      closure_6 = tmp31;
      if (tmp4 === c7) {
        c9 = tmp2;
        throw tmp31;
      } else {
        c8 = tmp;
      }
    }
  }
};
const set = new Set();
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/server_widgets/conjureServerWidgetConsent.tsx");

export function getConjureServerWidgetConsentRequest(clientId, arg1) {
  _require = clientId;
  closure_1 = arg1;
  const result = ConjureProjectStore.findProjectByApplicationId(clientId);
  let id;
  if (result != null) {
    id = result.id;
  }
  let tmp3 = null;
  if (null != id) {
    const obj = {
      clientId,
      scopes: null,
      responseType: "code",
      redirectUri: "https://127.0.0.1",
      integrationType: null,
      callback: null,
    };
    items = [
      require("OAuth2Scopes").OAuth2Scopes.IDENTIFY,
      require("OAuth2Scopes").OAuth2Scopes.APPLICATION_IDENTITIES_WRITE,
    ];
    obj.scopes = items;
    obj.integrationType = require("ApplicationIntegrationType").ApplicationIntegrationType.GUILD_INSTALL;
    obj.callback = function callback(location) {
      let str = location.location;
      if (str == null) {
        str = "";
      }
      const toURLSafeResult = URLUtilsDefault.toURLSafe(str);
      value = undefined;
      if (toURLSafeResult != null) {
        const searchParams = toURLSafeResult.searchParams;
        value = searchParams.get("code");
      }
      if (null != value) {
        (function finishTurnOn() {
          const self = this;
          const apply = closure_1_10.apply;
          if (typeof apply === "unknown") {
            let applyArgumentsResult = HermesBuiltin.applyArguments(self);
          } else {
            applyArgumentsResult = apply(self, arguments);
          }
          return applyArgumentsResult;
        })(id, closure_0, value, closure_1);
      }
      return true;
    };
    tmp3 = obj;
  }
  return tmp3;
}
