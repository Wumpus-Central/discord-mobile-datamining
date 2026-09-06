// === Module 9235: useOAuth2AuthorizeForm ===

// Module 9235 (useOAuth2AuthorizeForm)
import BigFlagUtilsAll from "BigFlagUtils" /* 1086 */;
import PermissionUtilsAll from "PermissionUtils" /* 4204 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4296 */;
import timing from "timing" /* 4561 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 4740 */;
import ActivityIndicator_ActivityIndicator from "ActivityIndicator/ActivityIndicator" /* 5577 */;
import ApplicationActionCreatorsDefault from "ApplicationActionCreators" /* 7163 */;
import Authorize from "Authorize" /* 9237 */;
import scopes2 from "scopes" /* 9238 */;
import SamsungManagerDefault from "SamsungManager" /* 9239 */;
import ApplicationIntegrationType from "ApplicationIntegrationType" /* 9245 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import defaultImageSrcGenerator from "defaultImageSrcGenerator" /* 4214 */;
import AccessibilityStore from "AccessibilityStore" /* 4552 */;
import ApplicationRecord from "ApplicationRecord" /* 1918 */;
import ConnectedAccountsStore from "ConnectedAccountsStore" /* 5281 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
const View = fn(17).View;
let Constants = fn(9236);
({ EMOJI_POINTING_DOWN_CODE_POINT: map1, OAuth2Steps: closure_14 } = Constants);
Constants = fn(1074);
({ AnalyticEvents: closure_15, Endpoints: closure_16 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_17, Fragment: closure_18, jsxs: closure_19 } = jsxProd);
const createStyles = fn(4560);
let closure_20 = createStyles.createStyles({ loading: { flex: 1, alignSelf: "center", justifyContent: "center" } });
let __initData = { code: "function useOAuth2AuthorizeFormTsx1(){const{shouldReduceMotion,withSequence,withTiming,Easing,withRepeat}=this.__closure;const TOTAL=500;if(shouldReduceMotion)return{};return{transform:[{translateY:withSequence(withTiming(-5,{duration:TOTAL/2,easing:Easing.inOut(Easing.quad)}),withRepeat(withTiming(5,{duration:TOTAL,easing:Easing.inOut(Easing.quad)}),-1,true))}]};}" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/oauth2/native/useOAuth2AuthorizeForm.tsx");

export default function useOAuth2AuthorizeForm(clientId) {
  clientId = clientId.clientId;
  _require = clientId;
  let responseType = clientId.responseType;
  let redirectUri = clientId.redirectUri;
  let codeChallenge = clientId.codeChallenge;
  let codeChallengeMethod = clientId.codeChallengeMethod;
  let state = clientId.state;
  let text1 = state;
  let nonce = clientId.nonce;
  const _prompt = clientId.prompt;
  let scopes = clientId.scopes;
  let permissions = clientId.permissions;
  ({ guildId, channelId, integrationType } = clientId);
  let flag = clientId.disableGuildSelect;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = clientId.isTrustedName;
  if (flag2 === undefined) {
    flag2 = false;
  }
  let flag3 = clientId.isEmbeddedFlow;
  if (flag3 === undefined) {
    flag3 = false;
  }
  let flag4 = clientId.withBackPressHandler;
  if (flag4 === undefined) {
    flag4 = true;
  }
  let callback = clientId.callback;
  const callbackWithoutPost = clientId.callbackWithoutPost;
  const dismissOAuthModal = clientId.dismissOAuthModal;
  let disclosures = clientId.disclosures;
  const connectedAccountProvider = clientId.connectedAccountProvider;
  let flag5 = clientId.wasDeepLink;
  if (flag5 === undefined) {
    flag5 = false;
  }
  let first1;
  let first3;
  closure_27 = undefined;
  let first4;
  closure_29 = undefined;
  let first5;
  closure_31 = undefined;
  let nsfwAllowed;
  let memo;
  closure_34 = undefined;
  let first6;
  closure_36 = undefined;
  let first7;
  closure_38 = undefined;
  let stateFromStores2;
  let isScreenReaderEnabled;
  let memo1;
  let first8;
  closure_43 = undefined;
  let memo2;
  let requestedScopes;
  let memo4;
  let first9;
  closure_48 = undefined;
  let first11;
  closure_51 = undefined;
  let first12;
  closure_53 = undefined;
  callback = undefined;
  let callback1;
  closure_56 = undefined;
  closure_57 = undefined;
  let callback2;
  let memo5;
  let AUTHORIZE_SCOPES;
  let callback4;
  let AUTHORIZE_BOT_PERMISSIONS;
  const loading = first1();
  let obj = nonce;
  let tmp2 = text1(nonce.useState(null), 2);
  const first = tmp2[0];
  closure_19 = tmp2[1];
  const tmp4 = text1(nonce.useState(null), 2);
  first1 = tmp4[0];
  __initData = tmp4[1];
  const tmp6 = text1(nonce.useState(null), 2);
  const first2 = tmp6[0];
  closure_23 = tmp6[1];
  closure_24 = text1(nonce.useState(false), 2)[1];
  let guilds;
  if (first != null) {
    guilds = first.guilds;
  }
  if (guildId == null) {
    guildId = null;
  }
  let tmpResult = tmp(obj.useState(guildId), 2);
  first3 = tmpResult[0];
  closure_27 = tmp12;
  if (channelId == null) {
    channelId = null;
  }
  tmpResult = tmp(obj.useState(channelId), 2);
  first4 = tmpResult[0];
  closure_29 = tmp15;
  const tmpResult1 = text1(obj.useState(redirectUri(codeChallenge[13]).NONE), 2);
  first5 = tmpResult1[0];
  closure_31 = tmpResult1[1];
  let obj1 = require("initialize");
  let items = [callbackWithoutPost];
  const stateFromStores = obj1.useStateFromStores(items, () => callbackWithoutPost.getCurrentUser());
  nsfwAllowed = undefined;
  if (stateFromStores != null) {
    nsfwAllowed = stateFromStores.nsfwAllowed;
  }
  const items1 = [guilds, first3];
  memo = obj.useMemo(() => {
    let found;
    if (guilds != null) {
      found = guilds.find((id) => id.id === first3);
    }
    return found;
  }, items1);
  let tmp20Result = tmp20(tmp17[14]);
  const items2 = [callback];
  const items3 = [connectedAccountProvider];
  const stateFromStores1 = tmp20Result.useStateFromStores(items2, () => {
    let tmp = null;
    if (null != connectedAccountProvider) {
      const accounts = ConnectedAccountsStore.getAccounts();
      let found = accounts.find((type) => type.type === connectedAccountProvider);
      if (found == null) {
        found = null;
      }
      tmp = found;
    }
    return tmp;
  }, items3);
  closure_34 = tmp25;
  const tmpResult2 = text1(obj.useState(null), 2);
  first6 = tmpResult2[0];
  closure_36 = tmpResult2[1];
  const tmpResult3 = text1(obj.useState(false), 2);
  first7 = tmpResult3[0];
  closure_38 = tmp30;
  tmp20Result = tmp20(tmp17[14]);
  const items4 = [permissions];
  stateFromStores2 = tmp20Result.useStateFromStores(items4, () => permissions.useReducedMotion);
  const tmp8 = text1(nonce.useState(false), 2);
  isScreenReaderEnabled = require("useIsScreenReaderEnabled").useIsScreenReaderEnabled();
  const tmp20Result1 = require("useIsScreenReaderEnabled");
  class V {
    constructor() {
      if (closure_39) {
        obj = {};
      } else {
        obj = { transform: null };
        obj = { translateY: null };
        tmp = closure_0;
        tmp2 = closure_3;
        obj3 = closure_0(closure_3[16]);
        obj4 = closure_0(closure_3[17]);
        obj1 = { duration: 250, easing: null };
        Easing = closure_0(closure_3[16]).Easing;
        obj1.easing = Easing.inOut(closure_0(closure_3[16]).Easing.quad);
        num = -5;
        withTimingResult = obj4.withTiming(-5, obj1);
        obj6 = closure_0(closure_3[16]);
        obj7 = closure_0(closure_3[17]);
        obj2 = { duration: 500, easing: null };
        Easing2 = closure_0(closure_3[16]).Easing;
        obj2.easing = Easing2.inOut(closure_0(closure_3[16]).Easing.quad);
        num2 = 5;
        flag = true;
        num3 = -1;
        obj.translateY = obj3.withSequence(withTimingResult, obj6.withRepeat(obj7.withTiming(5, obj2), -1, true));
        items = [];
        items[0] = obj;
        obj.transform = items;
      }
      return obj;
    }
  }
  obj = { shouldReduceMotion: stateFromStores2, withSequence: tmp20(tmp17[16]).withSequence, withTiming: tmp20(tmp17[17]).withTiming, Easing: tmp20(tmp17[16]).Easing, withRepeat: tmp20(tmp17[16]).withRepeat };
  V.__closure = obj;
  V.__workletHash = 1476082137097;
  V.__initData = __initData;
  const animatedStyle = require("ReanimatedRexport").useAnimatedStyle(V);
  let length;
  if (scopes != null) {
    length = scopes.length;
  }
  const items5 = [length, redirectUri, integrationType];
  memo1 = obj.useMemo(() => {
    let tmp = null == integrationType;
    if (tmp) {
      let num;
      if (scopes != null) {
        num = scopes.length;
      }
      if (num == null) {
        num = 0;
      }
      tmp = 0 === num;
    }
    if (tmp) {
      tmp = null == redirectUri;
    }
    return tmp;
  }, items5);
  const tmpResult4 = text1(obj.useState(null), 2);
  first8 = tmpResult4[0];
  closure_43 = tmpResult4[1];
  const items6 = [clientId, memo1];
  const effect = obj.useEffect(() => {
    if (memo1) {
      const application = ApplicationActionCreatorsDefault.fetchApplication(closure_0);
      application.then((result) => closure_1_43(integrationType.createFromServer(result)));
    }
  }, items6);
  let prop;
  if (first8 != null) {
    prop = first8.integrationTypesConfig;
  }
  const items7 = [prop, first6];
  memo2 = obj.useMemo(() => {
    let tmp2 = null;
    if (null != first6) {
      let oauth2InstallParams;
      if (first8 != null) {
        const integrationTypesConfig = first8.integrationTypesConfig;
        if (integrationTypesConfig != null) {
          if (integrationTypesConfig[tmp] != null) {
            oauth2InstallParams = tmp4.oauth2InstallParams;
          }
        }
      }
      tmp2 = oauth2InstallParams;
    }
    return tmp2;
  }, items7);
  let scopes1;
  if (memo2 != null) {
    scopes1 = memo2.scopes;
  }
  const items8 = [scopes1, scopes, memo1];
  const memo3 = obj.useMemo(() => {
    if (memo1) {
      scopes = undefined;
      if (memo2 != null) {
        scopes = memo2.scopes;
      }
      let items = scopes;
    } else {
      items = scopes;
    }
    let obj = Authorize;
    if (items == null) {
      items = [];
    }
    const filterScopesResult = obj.filterScopes(items);
    closure_0 = filterScopesResult;
    const OrderedAccountScopes = scopes2.OrderedAccountScopes;
    obj = { requestedScopes: filterScopesResult, accountScopes: OrderedAccountScopes.filter((item) => filterScopesResult.includes(item)) };
    return obj;
  }, items8);
  requestedScopes = memo3.requestedScopes;
  const accountScopes = memo3.accountScopes;
  permissions = undefined;
  if (memo2 != null) {
    permissions = memo2.permissions;
  }
  const items9 = [permissions, permissions, memo1];
  memo4 = obj.useMemo(() => {
    if (memo1) {
      const deserializer = BigFlagUtilsAll;
      let num;
      if (memo2 != null) {
        num = memo2.permissions;
      }
      if (num == null) {
        num = 0;
      }
      let NONE = deserializer.deserialize(num);
    } else {
      NONE = permissions;
    }
    if (NONE == null) {
      NONE = PermissionUtilsAll.NONE;
    }
    return NONE;
  }, items9);
  const tmpResult5 = text1(obj.useState(false), 2);
  first9 = tmpResult5[0];
  closure_48 = tmpResult5[1];
  const items10 = [clientId];
  const effect1 = obj.useEffect(() => {
    SamsungManagerDefault.checkIfOAuthRequest(closure_0).then(closure_48);
  }, items10);
  const tmp20Result2 = require("ReanimatedRexport");
  const first10 = text1(obj.useState(null), 2)[0];
  let tmp51 = state;
  if (first9) {
    tmp20(tmp17[23]);
    const text = `${obj8.getAPIBaseURL(false)}/v6${flag5.OAUTH2_AUTHORIZE_SAMSUNG_CALLBACK}`;
    redirectUri = text;
    if (tmp54) {
      tmp50(tmp20(tmp17[24]).v4());
      const tmp20Result4 = tmp20(tmp17[24]);
    }
    let tmp56 = state;
    if (null != first10) {
      text1 = state;
      if (state == null) {
        text1 = `SA${tmp49}`;
      }
      tmp56 = text1;
    }
    tmp51 = tmp56;
    redirectUri = text;
    tmp54 = null == state && null == first10;
  }
  obj.useRef(false);
  let items11 = disclosures;
  if (disclosures == null) {
    items11 = [];
  }
  const tmpResult7 = text1(obj.useState(items11), 2);
  first11 = tmpResult7[0];
  closure_51 = tmp60;
  const tmpResult8 = text1(obj.useState(null != disclosures), 2);
  first12 = tmpResult8[0];
  closure_53 = tmp63;
  const items12 = [clientId, disclosures, tmpResult7[1], tmpResult8[1]];
  const effect2 = obj.useEffect(() => {
    closure_0 = async function _doGetDisclosures(arg0, value) {
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp7 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj = { value, done: true };
          return obj;
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
              obj = { value, done: true };
              return obj;
            } else {
              closure_1 = tmp4;
              closure_0 = tmp8;
              closure_128_0 = undefined;
              disclosures = undefined;
              let allAcked;
              let body;
              ref.current = true;
              c3 = 2;
              let obj1 = application_id(codeChallenge[25]);
              c4 = 3;
              c5 = 1;
              obj1 = { value: null, done: false };
              obj1.value = obj1.getDisclosures(closure_0);
              return obj1;
            }
          } else if (1 === tmp8) {
            c3 = 0;
            ref.current = false;
            throw tmp48;
          } else if (2 === tmp8) {
            c3 = 1;
            body = tmp48.body;
            if (null != body.message) {
              let message = body.message;
            } else {
              const _Object = Object;
              const _Object2 = Object;
              const _HermesInternal = HermesInternal;
              message = "" + Object.keys(body)[0] + ": " + Object.values(body)[0];
            }
            const error = new Error(message);
            closure_1_23(error);
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else {
            if (arg0 !== 2) {
              closure_128_0 = value;
              disclosures = closure_128_0.disclosures;
              allAcked = closure_128_0.allAcked;
              closure_1_53(!allAcked);
              closure_1_51(disclosures);
              c3 = 1;
              c3 = 0;
              ref.current = false;
              c5 = 3;
            }
            c3 = 0;
            ref.current = false;
            c5 = 3;
            obj = { value, done: true };
            return obj;
          }
        } catch (tmp48) {
          if (tmp5 === c3) {
            c5 = tmp3;
            throw tmp48;
          } else if (tmp2 === tmp50) {
            c4 = tmp2;
          } else {
            c4 = tmp;
          }
        }
      }
    };
    if (!ref.current) {
      if (null == disclosures) {
        (function doGetDisclosures() {
          const self = this;
          const apply = closure_0.apply;
          if (typeof apply === "unknown") {
            let applyArgumentsResult = HermesBuiltin.applyArguments(self);
          } else {
            applyArgumentsResult = apply(self, arguments);
          }
          return applyArgumentsResult;
        })();
      }
    }
  }, items12);
  let prop1;
  if (first != null) {
    prop1 = first.application.content_classification;
  }
  if (prop1 == null) {
    let prop2;
    if (first8 != null) {
      prop2 = first8.contentClassification;
    }
    prop1 = prop2;
  }
  const tmpResult6 = text1(obj.useState(null), 2);
  let result = require("Utils").isContentClassificationRestricted(prop1, nsfwAllowed);
  _require = codeChallengeMethod((clientId) => {
    c5 = 0;
    c6 = 0;
    c4 = 0;
    const iter = (function*(arg0, value) {
      if (nonce === 2) {
        nonce = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp7 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj = { value, done: true };
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          nonce = 2;
          if (0 === state) {
            if (arg0 === 1) {
              nonce = 3;
              throw value;
            } else if (arg0 === 2) {
              nonce = 3;
              obj = { value, done: true };
              return obj;
            } else {
              redirectUri = tmp4;
              responseType = tmp8;
              closure_129_0 = undefined;
              closure_129_1 = undefined;
              closure_129_2 = undefined;
              ({ isAuthorized: closure_129_0, overrideSuccessCallback: closure_129_1, canceled: closure_129_2 } = clientId);
              closure_129_3 = undefined;
              let body;
              state = 1;
              nonce = 1;
              return { value: "PX_16", done: true };
            }
          } else {
            if (1 === tmp8) {
              if (arg0 === 1) {
                nonce = 3;
                throw value;
              } else if (arg0 === 2) {
                nonce = 3;
                const obj1 = { value, done: true };
                return obj1;
              } else if (null != callbackWithoutPost) {
                closure_1_24(true);
                callbackWithoutPost(closure_129_0);
                if (dismissOAuthModal != null) {
                  dismissOAuthModal();
                }
                nonce = 3;
                const obj2 = { value: undefined, done: true };
                return obj2;
              } else if (null != integrationType) {
                codeChallengeMethod = 2;
                closure_1_24(true);
                let obj7 = clientId(codeChallenge[27]);
                let obj3 = { authorize: closure_129_0, clientId, scopes, responseType, redirectUri, codeChallenge, codeChallengeMethod, state, nonce, permissions: null, guildId: null, channelId: null, integrationType: null, connectedAccountProvider: null };
                let obj9 = redirectUri(codeChallenge[21]);
                obj3.permissions = obj9.remove(memo4, first5);
                let tmp108;
                if (integrationType === clientId(codeChallenge[28]).ApplicationIntegrationType.GUILD_INSTALL) {
                  if (null != first3) {
                    tmp108 = first3;
                  }
                }
                obj3.guildId = tmp108;
                let tmp116;
                if (integrationType === clientId(codeChallenge[28]).ApplicationIntegrationType.GUILD_INSTALL) {
                  if (null != first4) {
                    tmp116 = first4;
                  }
                }
                obj3.channelId = tmp116;
                obj3.integrationType = integrationType;
                obj3.connectedAccountProvider = connectedAccountProvider;
                state = 4;
                nonce = 1;
                let obj4 = { value: obj7.authorize(obj3), done: false };
                return obj4;
              } else {
                const _Error2 = Error;
                const error = new Error("No integration type was selected.");
                closure_1_23(error);
                nonce = 3;
              }
            } else if (2 !== tmp8) {
              if (3 === tmp8) {
                codeChallengeMethod = 1;
                body = codeChallenge.body;
                let message;
                if (body != null) {
                  message = body.message;
                }
                if (null != message) {
                  if ("" !== body.message) {
                    const _Error = Error;
                    const error1 = new Error(body.message);
                    closure_1_23(error1);
                    closure_1_21(disclosures.AUTHORIZE_SCOPES);
                  }
                }
                closure_1_23(body);
                closure_1_21(disclosures.AUTHORIZE_SCOPES);
              } else {
                if (4 === tmp8) {
                  if (arg0 === 1) {
                    nonce = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    codeChallengeMethod = 0;
                    closure_1_24(false);
                    nonce = 3;
                    const obj5 = { value, done: true };
                    return obj5;
                  } else {
                    closure_129_3 = value;
                    if (closure_129_0) {
                      obj3 = responseType(codeChallenge[29]);
                      const response = obj3.fetch();
                      obj4 = clientId(codeChallenge[25]);
                      state = 5;
                      nonce = 1;
                      const obj6 = { value: obj4.ackDisclosures(clientId, first11), done: false };
                      return obj6;
                    }
                  }
                } else {
                  if (5 === tmp8) {
                    if (arg0 === 1) {
                      nonce = 3;
                      throw value;
                    } else if (arg0 === 2) {
                      codeChallengeMethod = 0;
                      closure_1_24(false);
                      nonce = 3;
                      obj7 = { value, done: true };
                      return obj7;
                    }
                  } else if (arg0 === 1) {
                    nonce = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    codeChallengeMethod = 0;
                    closure_1_24(false);
                    nonce = 3;
                    obj = { value, done: true };
                    return obj;
                  } else if (callback != null) {
                    const obj8 = {};
                    const merged = Object.assign(closure_129_3);
                    obj8.canceled = closure_129_2;
                    application = undefined;
                    if (application != null) {
                      application = application.application;
                    }
                    obj8.application = application;
                    obj8.guild = guild;
                    obj8.wasDeepLink = wasDeepLink;
                    tmp10(obj8);
                  }
                  codeChallengeMethod = 1;
                }
                if (null != closure_129_1) {
                  closure_129_1(closure_129_3.location);
                } else {
                  if (dismissOAuthModal != null) {
                    dismissOAuthModal();
                  }
                  const promise = new Promise((arg0) => setTimeout(arg0, 100));
                  state = 6;
                  nonce = 1;
                  obj9 = { value: promise, done: false };
                  return obj9;
                }
              }
              codeChallengeMethod = 0;
              closure_1_24(false);
            }
            codeChallengeMethod = 0;
            closure_1_24(false);
            throw codeChallenge;
          }
        } catch (tmp132) {
          codeChallenge = tmp132;
          if (tmp5 === codeChallengeMethod) {
            nonce = tmp3;
            throw tmp132;
          } else if (tmp2 === tmp134) {
            state = tmp;
          } else {
            state = tmp3;
          }
        }
      }
    })();
    iter.next();
    return iter;
  });
  const items13 = [first6, callbackWithoutPost, clientId, requestedScopes, responseType, redirectUri, codeChallenge, codeChallengeMethod, tmp51, nonce, memo4, first5, first3, first4, first11, dismissOAuthModal, callback, flag5, , , ];
  let application;
  if (first != null) {
    application = first.application;
  }
  items13[18] = application;
  items13[19] = memo;
  items13[20] = connectedAccountProvider;
  callback = obj.useCallback(function(arg0) {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }, items13);
  const items14 = [callback];
  callback1 = obj.useCallback((isAuthorized) => new Promise((arg0) => {
    isAuthorized = arg0;
    return callback({
      isAuthorized,
      overrideSuccessCallback(arg0) {
        closure_0(arg0);
      }
    });
  }), items14);
  const items15 = [clientId, first9, responseType, callback, callback1, tmp51, dismissOAuthModal, requestedScopes];
  closure_56 = obj.useCallback((isAuthorized) => {
    if (first9) {
      const result = responseType(codeChallenge[22]).showConnectionDisclaimer();
      const obj2 = responseType(codeChallenge[22]);
      const nextPromise = result.then(() => responseType(9239).getAccountUrlAndAuthCode());
      const nextPromise1 = result.then(() => responseType(9239).getAccountUrlAndAuthCode()).then((result) => {
        [tmp, tmp2] = result;
        const items = [tmp2, isAuthorized(codeChallenge[27]).startSamsungAuthorization(isAuthorized, requestedScopes, responseType, tmp, text1)];
        return Promise.all(items);
      });
      const nextPromise2 = result.then(() => responseType(9239).getAccountUrlAndAuthCode()).then((result) => {
        [tmp, tmp2] = result;
        const items = [tmp2, isAuthorized(codeChallenge[27]).startSamsungAuthorization(isAuthorized, requestedScopes, responseType, tmp, text1)];
        return Promise.all(items);
      }).then((result) => {
        [tmp, ] = result;
        const items = [tmp, callback1(closure_0)];
        return Promise.all(items);
      });
      const nextPromise3 = result.then(() => responseType(9239).getAccountUrlAndAuthCode()).then((result) => {
        [tmp, tmp2] = result;
        const items = [tmp2, isAuthorized(codeChallenge[27]).startSamsungAuthorization(isAuthorized, requestedScopes, responseType, tmp, text1)];
        return Promise.all(items);
      }).then((result) => {
        [tmp, ] = result;
        const items = [tmp, callback1(closure_0)];
        return Promise.all(items);
      }).then((result) => {
        [tmp, tmp2] = result;
        return responseType(codeChallenge[22]).finishSamsungAuthorization(tmp, tmp2, text1);
      });
      result.then(() => responseType(9239).getAccountUrlAndAuthCode()).then((result) => {
        [tmp, tmp2] = result;
        const items = [tmp2, isAuthorized(codeChallenge[27]).startSamsungAuthorization(isAuthorized, requestedScopes, responseType, tmp, text1)];
        return Promise.all(items);
      }).then((result) => {
        [tmp, ] = result;
        const items = [tmp, callback1(closure_0)];
        return Promise.all(items);
      }).then((result) => {
        [tmp, tmp2] = result;
        return responseType(codeChallenge[22]).finishSamsungAuthorization(tmp, tmp2, text1);
      }).then(() => {
        let tmp;
        if (dismissOAuthModal != null) {
          tmp = dismissOAuthModal();
        }
        return tmp;
      }).catch((error) => {
        responseType(1232).captureException(error);
      });
      const nextPromise4 = result.then(() => responseType(9239).getAccountUrlAndAuthCode()).then((result) => {
        [tmp, tmp2] = result;
        const items = [tmp2, isAuthorized(codeChallenge[27]).startSamsungAuthorization(isAuthorized, requestedScopes, responseType, tmp, text1)];
        return Promise.all(items);
      }).then((result) => {
        [tmp, ] = result;
        const items = [tmp, callback1(closure_0)];
        return Promise.all(items);
      }).then((result) => {
        [tmp, tmp2] = result;
        return responseType(codeChallenge[22]).finishSamsungAuthorization(tmp, tmp2, text1);
      }).then(() => {
        let tmp;
        if (dismissOAuthModal != null) {
          tmp = dismissOAuthModal();
        }
        return tmp;
      });
    } else {
      const obj = { isAuthorized };
      callback(obj);
    }
  }, items15);
  closure_57 = obj.useRef(false);
  const items16 = [clientId, requestedScopes, responseType, redirectUri, codeChallenge, codeChallengeMethod, tmp51, first6, connectedAccountProvider, _prompt, callback, first12, nsfwAllowed];
  callback2 = obj.useCallback(codeChallengeMethod(function*(arg0, value) {
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp7 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj = { value, done: true };
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_2 = tmp4;
            closure_1 = tmp8;
            closure_129_0 = undefined;
            closure_129_1 = undefined;
            closure_129_2 = undefined;
            let body;
            if (ref.current) {
              c6 = 3;
            } else {
              ref.current = true;
              c4 = 2;
              let obj3 = _undefined(tmp62[27]);
              const obj1 = { clientId: _undefined, scopes: requestedScopes, responseType, redirectUri, codeChallenge, codeChallengeMethod, state: text1, integrationType: null, connectedAccountProvider: null };
              _undefined = first6;
              if (first6 == null) {
                _undefined = undefined;
              }
              obj1.integrationType = _undefined;
              obj1.connectedAccountProvider = connectedAccountProvider;
              c5 = 3;
              c6 = 1;
              const obj2 = { value: obj3.fetchAuthorization(obj1), done: false };
              return obj2;
            }
          }
        } else if (1 !== tmp8) {
          if (2 === tmp8) {
            c4 = 1;
            body = tmp62.body;
            if (null != body.message) {
              let message = body.message;
            } else {
              const _Object = Object;
              const _Object2 = Object;
              const _HermesInternal = HermesInternal;
              message = "" + Object.keys(body)[0] + ": " + Object.values(body)[0];
            }
            const error = new Error(message);
            closure_130_23(error);
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            closure_130_57.current = false;
            c6 = 3;
            obj3 = { value, done: true };
            return obj3;
          } else {
            closure_129_0 = value;
            closure_129_1 = _undefined(tmp62[31]).convertOAuth2Authorization(closure_129_0);
            closure_130_19(closure_129_1);
            const obj9 = _undefined(tmp62[31]);
            closure_129_2 = _undefined(tmp62[26]).isContentClassificationRestricted(closure_129_1.application.content_classification, closure_130_32);
            let tmp11 = closure_130_7 !== _undefined(tmp62[32]).OAuth2Prompts.NONE;
            if (!tmp11) {
              tmp11 = !closure_129_0.authorized;
            }
            if (!tmp11) {
              tmp11 = closure_130_52;
            }
            if (!tmp11) {
              tmp11 = closure_129_2;
            }
            if (!tmp11) {
              closure_130_54({ isAuthorized: true });
            }
            obj = _undefined(tmp62[33]);
            const obj4 = { application_id: closure_129_0.application.id };
            obj.trackWithMetadata(closure_1_15.OAUTH2_AUTHORIZE_VIEWED, obj4);
            c4 = 1;
            c4 = 0;
            closure_130_57.current = false;
            const obj10 = _undefined(tmp62[26]);
          }
        }
        c4 = 0;
        closure_130_57.current = false;
        throw tmp62;
      } catch (tmp62) {
        if (tmp5 === c4) {
          c6 = tmp3;
          throw tmp62;
        } else if (tmp2 === tmp64) {
          c5 = tmp2;
        } else {
          c5 = tmp;
        }
      }
    }
  }), items16);
  const items17 = [first8, memo1];
  memo5 = obj.useMemo(() => {
    if (null != first8) {
      if (memo1) {
        let prop = tmp.integrationTypesConfig;
        if (prop == null) {
          prop = {};
        }
        const entries = Object.entries(prop);
        const found = entries.filter((item) => {
          [, tmp] = item;
          return null != tmp.oauth2InstallParams;
        });
        const mapped = found.map((item) => {
          [tmp, ] = item;
          return Number(tmp);
        });
      }
      return [];
    }
  }, items17);
  obj.useRef(null);
  const items18 = [clientId, first6, memo4, requestedScopes, first1];
  const effect3 = obj.useEffect(() => {
    if (first1 !== ref2.current) {
      ref2.current = tmp;
      const obj = { step: tmp, application_id, integration_type: first6, scopes: requestedScopes, permissions: memo4.toString() };
      obj.trackWithMetadata(__initData.OAUTH2_AUTHORIZE_STEP_VIEWED, obj);
    }
  }, items18);
  const items19 = [memo5, first8, memo1, integrationType, first1, connectedAccountProvider, null == connectedAccountProvider || null != stateFromStores1];
  const effect4 = obj.useEffect(() => {
    let tmp = null != first1;
    if (!tmp) {
      let tmp2 = memo1;
      if (memo1) {
        tmp2 = null == first8;
      }
      tmp = tmp2;
    }
    if (!tmp) {
      if (null != connectedAccountProvider) {
        if (!closure_34) {
          closure_21(constants.CONNECT_ACCOUNT);
        }
      }
      if (memo5.length > 1) {
        closure_21(constants.SELECT_INSTALL_TYPE);
      } else if (1 === arr.length) {
        closure_36(arr[0]);
        closure_21(constants.AUTHORIZE_SCOPES);
      } else if (null != integrationType) {
        closure_36(tmp9);
        closure_21(constants.AUTHORIZE_SCOPES);
      } else {
        closure_36(ApplicationIntegrationType.ApplicationIntegrationType.GUILD_INSTALL);
        closure_21(constants.AUTHORIZE_SCOPES);
      }
    }
  }, items19);
  const items20 = [first1, null == connectedAccountProvider || null != stateFromStores1, integrationType];
  const effect5 = obj.useEffect(() => {
    let tmp2 = first1 === constants.CONNECT_ACCOUNT;
    if (tmp2) {
      tmp2 = closure_34;
    }
    if (tmp2) {
      let USER_INSTALL = integrationType;
      if (integrationType == null) {
        USER_INSTALL = ApplicationIntegrationType.ApplicationIntegrationType.USER_INSTALL;
      }
      closure_36(USER_INSTALL);
      closure_21(constants.AUTHORIZE_SCOPES);
    }
  }, items20);
  const items21 = [callback2, requestedScopes, memo4, first6, first, first2];
  const effect6 = obj.useEffect(() => {
    if (null != first6) {
      if (null == first) {
        if (null == first2) {
          if (tmp === ApplicationIntegrationType.ApplicationIntegrationType.USER_INSTALL) {
            closure_27(null);
            closure_29(null);
          }
          const found = requestedScopes.filter((item) => {
            const ValidScopes = application_id(codeChallenge[20]).ValidScopes;
            return !ValidScopes.includes(item);
          });
          if (0 === requestedScopes.length) {
            const _Error3 = Error;
            const error = new Error("No scopes were provided.");
            closure_23(error);
          } else if (found.length > 0) {
            const _Error2 = Error;
            const _HermesInternal = HermesInternal;
            const error1 = new Error("Invalid scope: " + found[0]);
            closure_23(error1);
          } else {
            if (tmp33Result.containsDisallowedPermission(memo4)) {
              const _Error = Error;
              const error2 = new Error("Invalid permission(s) provided.");
              closure_23(error2);
            } else {
              callback2();
            }
            tmp33Result = tmp33(9248);
          }
          tmp33 = require;
        }
      }
    }
  }, items21);
  const items22 = [isScreenReaderEnabled, first7];
  const callback3 = obj.useCallback(() => {
    let tmp = isScreenReaderEnabled;
    if (isScreenReaderEnabled) {
      tmp = !first7;
    }
    if (tmp) {
      closure_38(true);
    }
  }, items22);
  if (first1 === disclosures.AUTHORIZE_SCOPES) {
    if (memo5.length > 1) {
      const SELECT_INSTALL_TYPE = tmp78.SELECT_INSTALL_TYPE;
      AUTHORIZE_SCOPES = SELECT_INSTALL_TYPE;
      let tmp79 = SELECT_INSTALL_TYPE;
    }
    const items23 = [tmp79, dismissOAuthModal, callback];
    callback4 = obj.useCallback(() => {
      if (null != AUTHORIZE_SCOPES) {
        closure_21(tmp);
      } else {
        callback({ isAuthorized: false, canceled: true });
        if (dismissOAuthModal != null) {
          dismissOAuthModal();
        }
      }
      return true;
    }, items23);
    responseType(tmp17[35])(callback4, flag4);
    const callback5 = obj.useCallback((arg0) => {
      closure_36(arg0);
      closure_19(null);
      closure_21(constants.AUTHORIZE_SCOPES);
    }, []);
    let _Error = Error;
    if (first2 instanceof Error) {
      obj = { body: null, goBackOrCancel: null, footer: null, obscured: false };
      obj1 = { error: first2.message, hideFooter: true };
      obj.body = loading(tmp81(tmp17[36]), obj1);
      obj.goBackOrCancel = callback4;
      let obj2 = { size: "lg", text: null, onPress: null };
      const intl = tmp20(tmp17[38]).intl;
      obj2.text = intl.string(tmp20(tmp17[38]).t.cpT0Cq);
      obj2.onPress = function onPress() {
        return callback4();
      };
      obj.footer = loading(tmp20(tmp17[37]).Button, obj2);
      return obj;
    } else {
      let str4 = "";
      if (null != connectedAccountProvider) {
        let tmp81Result = tmp81(tmp17[40]);
        value = tmp81Result.get(connectedAccountProvider);
        let str5;
        class Spinner {
          constructor() {
            obj = { style: closure_17.loading, children: jsx(closure_0(closure_3[39]).ActivityIndicator, {}) };
            return jsx(View, obj);
          }
        }
        if (str5 == null) {
          str5 = "";
        }
        str4 = str5;
      }
      class Spinner {
        constructor() {
          obj = { style: closure_17.loading, children: jsx(closure_0(closure_3[39]).ActivityIndicator, {}) };
          return jsx(View, obj);
        }
      }
      if (null === first1) {
        { body: null, obscured: false }.body = loading(Spinner, {});
        class Spinner {
          constructor() {
            obj = { style: closure_17.loading, children: jsx(closure_0(closure_3[39]).ActivityIndicator, {}) };
            return jsx(View, obj);
          }
        }
        let obj3 = { body: null, obscured: false };
      } else {
        if (tmp78.CONNECT_ACCOUNT === first1) {
          let obj4 = { clientId, platformType: null, platformName: null };
          class Spinner {
            constructor() {
              obj = { style: closure_17.loading, children: jsx(closure_0(closure_3[39]).ActivityIndicator, {}) };
              return jsx(View, obj);
            }
          }
          obj4.platformName = str4;
          let tmp88 = loading(tmp81(tmp17[41]), obj4);
          let flag9 = true;
          let flag6 = false;
          let flag7 = false;
          let flag8 = false;
        } else if (tmp78.SELECT_INSTALL_TYPE === first1) {
          if (null == first8) {
            { body: null, obscured: false }.body = loading(Spinner, {});
            class Spinner {
              constructor() {
                obj = { style: closure_17.loading, children: jsx(closure_0(closure_3[39]).ActivityIndicator, {}) };
                return jsx(View, obj);
              }
            }
            let obj5 = { body: null, obscured: false };
          } else {
            let obj6 = { application: first8, onSelect: null };
            class Spinner {
              constructor() {
                obj = { style: closure_17.loading, children: jsx(closure_0(closure_3[39]).ActivityIndicator, {}) };
                return jsx(View, obj);
              }
            }
            tmp88 = loading(tmp81(tmp17[42]), obj6);
            flag6 = false;
            flag7 = false;
            flag8 = false;
            flag9 = false;
          }
        } else if (tmp78.AUTHORIZE_SCOPES === first1) {
          if (null != first) {
            if (null != stateFromStores) {
              if (null != first6) {
                if (null == first2) {
                  let obj7 = {};
                } else {
                  let _Error2 = Error;
                  obj7 = first2;
                }
                if (guilds != null) {
                  let sorted = guilds.sort((name, name2) => {
                    const formatted = name.name.toLowerCase();
                    return formatted.localeCompare(name2.name.toLowerCase());
                  });
                }
                class Spinner {
                  constructor() {
                    obj = { style: closure_17.loading, children: jsx(closure_0(closure_3[39]).ActivityIndicator, {}) };
                    return jsx(View, obj);
                  }
                }
                if (hasItem) {
                  hasItem = requestedScopes.includes(tmp20(tmp17[43]).OAuth2Scopes.WEBHOOK_INCOMING);
                }
                let tmp92 = hasItem;
                if (!hasItem) {
                  const tmp93 = first6 === tmp20(tmp17[28]).ApplicationIntegrationType.GUILD_INSTALL;
                  if (tmp93) {
                    let hasItem1 = requestedScopes.includes(tmp20(tmp17[43]).OAuth2Scopes.BOT);
                    if (!hasItem1) {
                      hasItem1 = requestedScopes.includes(tmp20(tmp17[43]).OAuth2Scopes.APPLICATIONS_COMMANDS);
                    }
                    class Spinner {
                      constructor() {
                        obj = { style: closure_17.loading, children: jsx(closure_0(closure_3[39]).ActivityIndicator, {}) };
                        return jsx(View, obj);
                      }
                    }
                  }
                  tmp92 = tmp93;
                }
                let tmp98 = null;
                const isSocialLayerParentApplication = tmp20(tmp17[44]).getIsSocialLayerParentApplication(first.application);
                if (null != stateFromStores1) {
                  tmp98 = null;
                  if (tmp25) {
                    obj8 = { platformType: stateFromStores1.type, platformName: null, connectedAccount: null, applicationName: null };
                    class Spinner {
                      constructor() {
                        obj = { style: closure_17.loading, children: jsx(closure_0(closure_3[39]).ActivityIndicator, {}) };
                        return jsx(View, obj);
                      }
                    }
                    obj8.connectedAccount = stateFromStores1;
                    obj8.applicationName = first.application.name;
                    tmp98 = loading(tmp20(tmp17[41]).ConnectedAccountCard, obj8);
                  }
                }
                const items24 = [tmp98, , , , ];
                let obj9 = { application: first.application, accountScopes };
                items24[1] = loading(tmp81(tmp17[45]), obj9);
                let obj10 = { application: first.application, accountScopes, requestedScopes, integrationType: first6, errors: obj7, isTrustedName: null };
                tmp81Result = tmp81(tmp17[46]);
                if (!flag2) {
                  flag2 = isSocialLayerParentApplication;
                }
                obj10.isTrustedName = flag2;
                items24[2] = loading(tmp81Result, obj10);
                let tmp96Result = null;
                if (tmp92) {
                  const items25 = [tmp100(tmp20(tmp17[47]).AuthorizeFormSeparator, {}), ];
                  class Spinner {
                    constructor() {
                      obj = { style: closure_17.loading, children: jsx(closure_0(closure_3[39]).ActivityIndicator, {}) };
                      return jsx(View, obj);
                    }
                  }
                  if (items26 == null) {
                    items26 = obj7[tmp20(undefined, tmp17[43]).OAuth2Scopes.APPLICATIONS_COMMANDS];
                  }
                  if (items26 == null) {
                    items26 = [];
                  }
                  const obj11 = { error: items26[0], selectedGuildId: first3, onGuildChange: tmp12, guilds: null, disabled: null };
                  if (sorted == null) {
                    sorted = [];
                  }
                  obj11.guilds = sorted;
                  let tmp104 = "" !== first3;
                  if (tmp104) {
                    tmp104 = true === flag;
                  }
                  const obj12 = { children: null };
                  obj11.disabled = tmp104;
                  items25[1] = tmp100(tmp81(tmp17[48]), obj11);
                  obj12.children = items25;
                  tmp96Result = tmp96(tmp97, obj12);
                  const tmp81Result1 = tmp81(tmp17[48]);
                }
                items24[3] = tmp96Result;
                tmp96Result = null;
                if (hasItem) {
                  const items27 = [tmp100(tmp20(tmp17[47]).AuthorizeFormSeparator, {}), ];
                  class Spinner {
                    constructor() {
                      obj = { style: closure_17.loading, children: jsx(closure_0(closure_3[39]).ActivityIndicator, {}) };
                      return jsx(View, obj);
                    }
                  }
                  if (items28 == null) {
                    items28 = [];
                  }
                  const obj13 = { children: null };
                  const obj14 = { error: items28[0], selectedChannelId: first4, selectedGuildId: first3, onChannelChange: tmp15 };
                  items27[1] = tmp100(tmp81(tmp17[49]), obj14);
                  obj13.children = items27;
                  tmp96Result = tmp96(tmp97, obj13);
                  const tmp81Result2 = tmp81(tmp17[49]);
                }
                const obj15 = { children: null };
                items24[4] = tmp96Result;
                obj15.children = items24;
                const tmp20Result6 = tmp20(tmp17[44]);
                let hasItem2 = requestedScopes.includes(tmp20(tmp17[43]).OAuth2Scopes.BOT);
                if (hasItem2) {
                  hasItem2 = !tmp16(tmp17[21]).equals(memo4, tmp16(tmp17[13]).NONE);
                  const tmp16Result = tmp16(tmp17[21]);
                }
                if (hasItem2) {
                  AUTHORIZE_BOT_PERMISSIONS = tmp78.AUTHORIZE_BOT_PERMISSIONS;
                }
                if (tmp92) {
                  tmp92 = null == memo;
                }
                if (!tmp92) {
                  if (hasItem) {
                    hasItem = null == first4;
                  }
                  tmp92 = hasItem;
                }
                if (!tmp92) {
                  tmp92 = !first7;
                }
                flag6 = true;
                flag8 = tmp92;
                flag7 = true;
                flag9 = true;
                tmp88 = closure_19(first, obj15);
                const tmp96Result1 = closure_19(first, obj15);
              }
            }
          }
          class Spinner {
            constructor() {
              obj = { style: closure_17.loading, children: jsx(closure_0(closure_3[39]).ActivityIndicator, {}) };
              return jsx(View, obj);
            }
          }
          return { body: null, obscured: false };
        } else {
          flag6 = true;
          flag7 = true;
          flag8 = false;
          class Spinner {
            constructor() {
              obj = { style: closure_17.loading, children: jsx(closure_0(closure_3[39]).ActivityIndicator, {}) };
              return jsx(View, obj);
            }
          }
          if (tmp78.AUTHORIZE_BOT_PERMISSIONS === first1) {
            if (null == first) {
              { body: null, obscured: false }.body = loading(Spinner, {});
              class Spinner {
                constructor() {
                  obj = { style: closure_17.loading, children: jsx(closure_0(closure_3[39]).ActivityIndicator, {}) };
                  return jsx(View, obj);
                }
              }
              const obj17 = { body: null, obscured: false };
            } else {
              const obj18 = { application: first.application, permissions: null, deniedPermissions: null, onPermissionsChange: null, guild: null };
              class Spinner {
                constructor() {
                  obj = { style: closure_17.loading, children: jsx(closure_0(closure_3[39]).ActivityIndicator, {}) };
                  return jsx(View, obj);
                }
              }
              obj18.deniedPermissions = first5;
              obj18.onPermissionsChange = tmp84;
              obj18.guild = memo;
              tmp88 = loading(tmp81(tmp17[50]), obj18);
              flag6 = true;
              flag7 = true;
              flag8 = false;
              flag9 = true;
            }
          }
        }
        let tmp117Result;
        if (flag7) {
          if (tmp89 !== tmp78.AUTHORIZE_BOT_PERMISSIONS) {
            if (null != first) {
              let prop3;
              if (first != null) {
                prop3 = first.application.approximate_guild_count;
              }
              if (prop3 == null) {
                let prop4;
                if (first != null) {
                  const bot = first.bot;
                  if (bot != null) {
                    prop4 = bot.approximate_guild_count;
                  }
                }
                prop3 = prop4;
              }
              class Spinner {
                constructor() {
                  obj = { style: closure_17.loading, children: jsx(closure_0(closure_3[39]).ActivityIndicator, {}) };
                  return jsx(View, obj);
                }
              }
              const obj19 = { application: first.application, scopes: requestedScopes, disclosures: first11, redirectUri: null, approximateGuildCount: null, isEmbeddedFlow: null, connectedAccount: null };
              let redirect_uri = first.redirect_uri;
              if (redirect_uri == null) {
                redirect_uri = null;
              }
              obj19.redirectUri = redirect_uri;
              let tmp120 = null;
              if (undefined !== prop3) {
                tmp120 = prop3;
              }
              obj19.approximateGuildCount = tmp120;
              obj19.isEmbeddedFlow = flag3;
              obj19.connectedAccount = stateFromStores1;
              tmp117Result = tmp117(tmp81(tmp17[51]), obj19);
              const tmp81Result3 = tmp81(tmp17[51]);
            }
          }
        }
        class Spinner {
          constructor() {
            obj = { style: closure_17.loading, children: jsx(closure_0(closure_3[39]).ActivityIndicator, {}) };
            return jsx(View, obj);
          }
        }
        if (flag6) {
          flag6 = null != stateFromStores;
        }
        let tmp121;
        if (flag6) {
          const obj20 = { user: stateFromStores, application: null, accountScopes: null, bot: null };
          class Spinner {
            constructor() {
              obj = { style: closure_17.loading, children: jsx(closure_0(closure_3[39]).ActivityIndicator, {}) };
              return jsx(View, obj);
            }
          }
          obj20.accountScopes = accountScopes;
          obj20.bot = first.bot;
          tmp121 = loading(tmp81(tmp17[52]), obj20);
        }
        let tmp123 = flag8;
        if (flag8) {
          tmp123 = !first7;
        }
        const obj21 = { header: tmp121, body: tmp88, footer: null, appDetails: null, backStep: null, sendAuthorize: null, goBackOrCancel: null, allContentSeen: null, setAllContentSeen: null, hasContentBackground: null, obscured: null };
        let tmp126 = null;
        if (first1 !== tmp78.SELECT_INSTALL_TYPE) {
          tmp126 = null;
          if (first1 !== tmp78.CONNECT_ACCOUNT) {
            const obj22 = { accessibilityElementsHidden: tmp123, importantForAccessibility: null, children: null };
            let str6 = "auto";
            class Spinner {
              constructor() {
                obj = { style: closure_17.loading, children: jsx(closure_0(closure_3[39]).ActivityIndicator, {}) };
                return jsx(View, obj);
              }
            }
            if (tmp123) {
              str6 = "no-hide-descendants";
            }
            obj22.importantForAccessibility = str6;
            if (null != tmp89) {
              const string = tmp20(tmp17[38]).intl.string;
              const t2 = tmp20(tmp17[38]).t;
              class Spinner {
                constructor() {
                  obj = { style: closure_17.loading, children: jsx(closure_0(closure_3[39]).ActivityIndicator, {}) };
                  return jsx(View, obj);
                }
              }
            } else {
              const string2 = tmp20(tmp17[38]).intl.string;
              const t = tmp20(tmp17[38]).t;
              class Spinner {
                constructor() {
                  obj = { style: closure_17.loading, children: jsx(closure_0(closure_3[39]).ActivityIndicator, {}) };
                  return jsx(View, obj);
                }
              }
            }
            obj22.children = tmp124(tmp20(tmp17[37]).Button, tmp127);
            tmp124(tmp131, obj22);
          }
        }
        const obj23 = { children: tmp126 };
        obj21.footer = loading(first, obj23);
        obj21.appDetails = tmp117Result;
        obj21.backStep = tmp79;
        obj21.sendAuthorize = callback;
        obj21.goBackOrCancel = callback4;
        obj21.allContentSeen = first7;
        obj21.setAllContentSeen = tmp30;
        obj21.hasContentBackground = flag9;
        obj21.obscured = result;
        return obj21;
      }
    }
  }
  if (first1 === disclosures.AUTHORIZE_BOT_PERMISSIONS) {
    AUTHORIZE_SCOPES = tmp78.AUTHORIZE_SCOPES;
    tmp79 = AUTHORIZE_SCOPES;
  }
};