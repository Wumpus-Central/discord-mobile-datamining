import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme";
import OAuth2Prompts from "OAuth2Prompts";
import filterScopes from "filterScopes";
import { View } from "CONFIG_NEVER_ANIMATE_TIMING";
import defaultImageSrcGenerator from "defaultImageSrcGenerator";
import closure_9 from "maybeApplyNoTextColorForLightCustomTheme";
import createExecutable from "createExecutable";
import set from "set";
import mergeGuildAvatar from "mergeGuildAvatar";
import OAuth2Steps from "OAuth2Steps";
import ME from "ME";
import jsxProd from "fromString";
import createCacheKey from "createCacheKey";

let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_18;
let closure_19;
let map1;
const require = arg1;
({ EMOJI_POINTING_DOWN_CODE_POINT: map1, OAuth2Steps: closure_14 } = OAuth2Steps);
({ AnalyticEvents: closure_15, Endpoints: closure_16 } = ME);
({ jsx: closure_17, Fragment: closure_18, jsxs: closure_19 } = jsxProd);
let closure_20 = createCacheKey.createStyles({ loading: { flex: 1, alignSelf: "center", justifyContent: "center" } });
let closure_21 = { code: "function useOAuth2AuthorizeFormTsx1(){const{shouldReduceMotion,withSequence,withTiming,Easing,withRepeat}=this.__closure;const TOTAL=500;if(shouldReduceMotion)return{};return{transform:[{translateY:withSequence(withTiming(-5,{duration:TOTAL/2,easing:Easing.inOut(Easing.quad)}),withRepeat(withTiming(5,{duration:TOTAL,easing:Easing.inOut(Easing.quad)}),-1,true))}]};}" };
let result = require("noop").fileFinishedImporting("modules/oauth2/native/useOAuth2AuthorizeForm.tsx");

export default function useOAuth2AuthorizeForm(clientId) {
  let channelId;
  let guildId;
  let integrationType;
  clientId = clientId.clientId;
  let _require = clientId;
  const responseType = clientId.responseType;
  let redirectUri = clientId.redirectUri;
  const codeChallenge = clientId.codeChallenge;
  const codeChallengeMethod = clientId.codeChallengeMethod;
  const state = clientId.state;
  let text1 = state;
  const nonce = clientId.nonce;
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
  callback = undefined;
  let first;
  let closure_19;
  let first1;
  let closure_21;
  let first2;
  let closure_23;
  let closure_24;
  let guilds;
  let first3;
  let c27;
  let first4;
  let c29;
  let first5;
  let closure_31;
  let nsfwAllowed;
  let memo;
  let c34;
  let first6;
  let closure_36;
  let first7;
  let c38;
  let stateFromStores2;
  let isScreenReaderEnabled;
  let memo1;
  let first8;
  let closure_43;
  let memo2;
  let requestedScopes;
  let memo4;
  let first9;
  let closure_48;
  let closure_49;
  let first11;
  let c51;
  let first12;
  let c53;
  callback = undefined;
  let callback1;
  let closure_56;
  let closure_57;
  let callback2;
  let memo5;
  let closure_60;
  let AUTHORIZE_SCOPES;
  let callback4;
  let AUTHORIZE_BOT_PERMISSIONS;
  callback = first1();
  let obj = nonce;
  let hasItem2 = text1;
  let tmp2 = text1(nonce.useState(null), 2);
  first = tmp2[0];
  closure_19 = tmp2[1];
  const tmp4 = text1(nonce.useState(null), 2);
  first1 = tmp4[0];
  closure_21 = tmp4[1];
  const tmp6 = text1(nonce.useState(null), 2);
  first2 = tmp6[0];
  closure_23 = tmp6[1];
  closure_24 = text1(nonce.useState(false), 2)[1];
  guilds = undefined;
  if (first != null) {
    guilds = first.guilds;
  }
  if (guildId == null) {
    guildId = null;
  }
  const hasItem2Result = hasItem2(obj.useState(guildId), 2);
  first3 = hasItem2Result[0];
  c27 = tmp12;
  if (channelId == null) {
    channelId = null;
  }
  const hasItem2Result1 = hasItem2(obj.useState(channelId), 2);
  first4 = hasItem2Result1[0];
  c29 = tmp15;
  const hasItem2Result2 = hasItem2(obj.useState(redirectUri(codeChallenge[13]).NONE), 2);
  first5 = hasItem2Result2[0];
  closure_31 = hasItem2Result2[1];
  let obj1 = _require(codeChallenge[14]);
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
      found = guilds.find((id) => id.id === closure_26);
    }
    return found;
  }, items1);
  let tmp20Result = tmp20(tmp17[14]);
  const items2 = [callback];
  const items3 = [connectedAccountProvider];
  const stateFromStores1 = tmp20Result.useStateFromStores(items2, () => {
    let tmp = null;
    if (null != connectedAccountProvider) {
      const accounts = callback.getAccounts();
      let found = accounts.find((type) => type.type === closure_15);
      if (found == null) {
        found = null;
      }
      tmp = found;
    }
    return tmp;
  }, items3);
  c34 = tmp25;
  const hasItem2Result3 = hasItem2(obj.useState(null), 2);
  first6 = hasItem2Result3[0];
  closure_36 = hasItem2Result3[1];
  const hasItem2Result4 = hasItem2(obj.useState(false), 2);
  first7 = hasItem2Result4[0];
  c38 = tmp30;
  tmp20Result = tmp20(tmp17[14]);
  const items4 = [permissions];
  stateFromStores2 = tmp20Result.useStateFromStores(items4, () => permissions.useReducedMotion);
  const tmp8 = text1(nonce.useState(false), 2);
  isScreenReaderEnabled = _require(codeChallenge[15]).useIsScreenReaderEnabled();
  const tmp20Result1 = _require(codeChallenge[15]);
  class V {
    constructor() {
      if (c39) {
        obj = {};
      } else {
        obj = { transform: null };
        obj = { translateY: null };
        tmp = f107594;
        tmp2 = codeChallenge;
        obj3 = f107594(codeChallenge[16]);
        obj4 = f107594(codeChallenge[17]);
        obj1 = { duration: 250, easing: null };
        Easing = f107594(codeChallenge[16]).Easing;
        obj1[1] = Easing.inOut(f107594(codeChallenge[16]).Easing.quad);
        num = -5;
        withTimingResult = obj4.withTiming(-5, obj1);
        obj6 = f107594(codeChallenge[16]);
        obj7 = f107594(codeChallenge[17]);
        obj2 = { duration: 500, easing: null };
        Easing2 = f107594(codeChallenge[16]).Easing;
        obj2[1] = Easing2.inOut(f107594(codeChallenge[16]).Easing.quad);
        num2 = 5;
        flag = true;
        num3 = -1;
        obj[0] = obj3.withSequence(withTimingResult, obj6.withRepeat(obj7.withTiming(5, obj2), -1, true));
        items = [];
        items[0] = obj;
        obj[0] = items;
      }
      return obj;
    }
  }
  obj = { shouldReduceMotion: stateFromStores2, withSequence: tmp20(tmp17[16]).withSequence, withTiming: tmp20(tmp17[17]).withTiming, Easing: tmp20(tmp17[16]).Easing, withRepeat: tmp20(tmp17[16]).withRepeat };
  V.__closure = obj;
  V.__workletHash = 1476082137097;
  V.__initData = closure_21;
  const animatedStyle = _require(codeChallenge[16]).useAnimatedStyle(V);
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
  const hasItem2Result5 = hasItem2(obj.useState(null), 2);
  first8 = hasItem2Result5[0];
  closure_43 = hasItem2Result5[1];
  const items6 = [clientId, memo1];
  const effect = obj.useEffect(() => {
    if (memo1) {
      const application = responseType(codeChallenge[18]).fetchApplication(closure_0);
      application.then((arg0) => callback(outer1_10.createFromServer(arg0)));
      const obj = responseType(codeChallenge[18]);
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
      let scopes;
      if (memo2 != null) {
        scopes = memo2.scopes;
      }
      let items = scopes;
    } else {
      items = scopes;
    }
    let obj = callback(codeChallenge[19]);
    if (items == null) {
      items = [];
    }
    const filterScopesResult = obj.filterScopes(items);
    callback = filterScopesResult;
    const OrderedAccountScopes = callback(codeChallenge[20]).OrderedAccountScopes;
    obj = { requestedScopes: filterScopesResult, accountScopes: OrderedAccountScopes.filter((arg0) => closure_0.includes(arg0)) };
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
      let num;
      if (memo2 != null) {
        num = memo2.permissions;
      }
      if (num == null) {
        num = 0;
      }
      let NONE = redirectUri(codeChallenge[21]).deserialize(num);
      const obj = redirectUri(codeChallenge[21]);
    } else {
      NONE = permissions;
    }
    if (NONE == null) {
      NONE = redirectUri(codeChallenge[13]).NONE;
    }
    return NONE;
  }, items9);
  const hasItem2Result6 = hasItem2(obj.useState(false), 2);
  first9 = hasItem2Result6[0];
  closure_48 = hasItem2Result6[1];
  const items10 = [clientId];
  const effect1 = obj.useEffect(() => {
    const obj = responseType(codeChallenge[22]);
    responseType(codeChallenge[22]).checkIfOAuthRequest(closure_0).then(closure_48);
  }, items10);
  const tmp20Result2 = _require(codeChallenge[16]);
  const first10 = hasItem2(obj.useState(null), 2)[0];
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
  closure_49 = obj.useRef(false);
  let items11 = disclosures;
  if (disclosures == null) {
    items11 = [];
  }
  const hasItem2Result8 = hasItem2(obj.useState(items11), 2);
  first11 = hasItem2Result8[0];
  c51 = tmp60;
  const hasItem2Result9 = hasItem2(obj.useState(null != disclosures), 2);
  first12 = hasItem2Result9[0];
  c53 = tmp63;
  const items12 = [clientId, disclosures, hasItem2Result8[1], hasItem2Result9[1]];
  const effect2 = obj.useEffect(() => {
    function _doGetDisclosures() {
      const self = this;
      const tmp = codeChallengeMethod(function*() {
        if (c5 === 2) {
          c5 = 3;
          HermesBuiltin.throwTypeError();
        } else if (tmp7 === 3) {
          if (arg0 === 1) {
            throw arg1;
          } else if (arg0 === 2) {
            let obj = { value: null, done: true };
            obj[0] = arg1;
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
                throw arg1;
              } else if (arg0 === 2) {
                c5 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                let disclosures = tmp4;
                let lib = tmp8;
                lib = undefined;
                disclosures = undefined;
                let allAcked;
                let body;
                outer1_49.current = true;
                body = 2;
                let obj1 = lib(outer2_3[25]);
                c4 = 3;
                c5 = 1;
                obj1 = { value: null, done: false };
                obj1[0] = obj1.getDisclosures(outer1_0);
                return obj1;
              }
            } else if (1 === tmp8) {
              body = 0;
              outer1_49.current = false;
              throw allAcked;
            } else if (2 === tmp8) {
              body = 1;
              body = allAcked.body;
              if (null != body.message) {
                let message = body.message;
              } else {
                const _Object = Object;
                const _Object2 = Object;
                const _HermesInternal = HermesInternal;
                message = "" + Object.keys(body)[0] + ": " + Object.values(body)[0];
              }
              const error = new Error(message);
              outer1_23(error);
              const tmp25 = outer1_23;
            } else if (arg0 === 1) {
              c5 = 3;
              throw arg1;
            } else {
              if (arg0 !== 2) {
                lib = arg1;
                disclosures = lib.disclosures;
                allAcked = lib.allAcked;
                outer1_53(!allAcked);
                outer1_51(disclosures);
                body = 1;
                body = 0;
                outer1_49.current = false;
                c5 = 3;
              }
              body = 0;
              outer1_49.current = false;
              c5 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            }
          } catch (tmp48) {
            allAcked = tmp48;
            if (tmp5 === body) {
              c5 = tmp3;
              throw tmp48;
            } else if (tmp2 === tmp50) {
              c4 = tmp2;
            } else {
              c4 = tmp;
            }
          }
        }
      });
      const _doGetDisclosures = tmp;
      const apply = tmp.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }
    if (!ref.current) {
      if (null == disclosures) {
        (function doGetDisclosures() {
          const self = this;
          const apply = _doGetDisclosures.apply;
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
  const hasItem2Result7 = hasItem2(obj.useState(null), 2);
  let result = _require(codeChallenge[26]).isContentClassificationRestricted(prop1, nsfwAllowed);
  _require = undefined;
  _require = codeChallengeMethod((arg0) => {
    let closure_0 = arg0;
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
    const iter = (function*(arg0) {
      let c0;
      let c1;
      let c2;
      if (c6 === 2) {
        c6 = 3;
        let throwTypeErrorResult = HermesBuiltin.throwTypeError();
      } else {
        throwTypeErrorResult = arg1;
        throwTypeErrorResult = arg0;
        throwTypeErrorResult = tmp6;
        throwTypeErrorResult = null;
        throwTypeErrorResult = globalThis;
        if (tmp7 === 3) {
          if (arg0 === 1) {
            throw arg1;
          } else if (arg0 === 2) {
            let obj = { value: null, done: true };
            obj[0] = arg1;
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
                throw arg1;
              } else if (arg0 === 2) {
                c6 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                c2 = tmp4;
                c1 = tmp8;
                c0 = undefined;
                c1 = undefined;
                c2 = undefined;
                throwTypeErrorResult = c0;
                ({ isAuthorized: c0, overrideSuccessCallback: c1, canceled: c2 } = c0);
                let body;
                let body2;
                c5 = 1;
                c6 = 1;
                return { value: "ct", done: "Array" };
              }
            } else {
              if (1 === tmp8) {
                if (arg0 === 1) {
                  c6 = 3;
                  throw arg1;
                } else if (arg0 === 2) {
                  c6 = 3;
                  const obj1 = { value: null, done: true };
                  obj1[0] = arg1;
                  return obj1;
                } else {
                  throwTypeErrorResult = c2;
                  throwTypeErrorResult = outer1_12;
                  if (null != outer1_12) {
                    throwTypeErrorResult = c1;
                    throwTypeErrorResult = c2;
                    throwTypeErrorResult = outer1_24;
                    throwTypeErrorResult = outer1_24(true);
                    throwTypeErrorResult = outer1_12;
                    throwTypeErrorResult = callback;
                    throwTypeErrorResult = outer1_12(callback);
                    if (outer1_13 != null) {
                      throwTypeErrorResult = outer1_13();
                    }
                    c6 = 3;
                    const obj2 = { value: null, done: true };
                    obj2[0] = undefined;
                    return obj2;
                  } else {
                    throwTypeErrorResult = c2;
                    throwTypeErrorResult = outer1_35;
                    if (null != outer1_35) {
                      body2 = 2;
                      outer1_24(true);
                      let obj7 = callback(codeChallenge[27]);
                      let obj3 = { authorize: null, clientId: null, scopes: null, responseType: null, redirectUri: null, codeChallenge: null, codeChallengeMethod: null, state: null, nonce: null, permissions: null, guildId: null, channelId: null, integrationType: null, connectedAccountProvider: null };
                      obj3[0] = c0;
                      obj3[1] = callback;
                      obj3[2] = outer1_45;
                      obj3[3] = outer1_1;
                      obj3[4] = outer1_2;
                      obj3[5] = outer1_3;
                      obj3[6] = body2;
                      obj3[7] = c5;
                      throwTypeErrorResult = c6;
                      obj3[8] = c6;
                      throwTypeErrorResult = redirectUri;
                      throwTypeErrorResult = codeChallenge;
                      let obj9 = redirectUri(codeChallenge[21]);
                      throwTypeErrorResult = outer1_46;
                      throwTypeErrorResult = outer1_30;
                      obj3[9] = obj9.remove(outer1_46, outer1_30);
                      throwTypeErrorResult = outer1_35;
                      throwTypeErrorResult = callback;
                      throwTypeErrorResult = codeChallenge;
                      throwTypeErrorResult = undefined;
                      if (outer1_35 === callback(codeChallenge[28]).ApplicationIntegrationType.GUILD_INSTALL) {
                        throwTypeErrorResult = c2;
                        throwTypeErrorResult = outer1_26;
                        if (null != outer1_26) {
                          throwTypeErrorResult = c2;
                          throwTypeErrorResult = outer1_26;
                        }
                      }
                      throwTypeErrorResult = c2;
                      obj3[10] = throwTypeErrorResult;
                      throwTypeErrorResult = outer1_35;
                      throwTypeErrorResult = callback;
                      throwTypeErrorResult = codeChallenge;
                      throwTypeErrorResult = undefined;
                      if (outer1_35 === callback(codeChallenge[28]).ApplicationIntegrationType.GUILD_INSTALL) {
                        throwTypeErrorResult = c2;
                        throwTypeErrorResult = outer1_28;
                        if (null != outer1_28) {
                          throwTypeErrorResult = c2;
                          throwTypeErrorResult = outer1_28;
                        }
                      }
                      throwTypeErrorResult = c2;
                      obj3[11] = throwTypeErrorResult;
                      throwTypeErrorResult = outer1_35;
                      obj3[12] = outer1_35;
                      throwTypeErrorResult = outer1_15;
                      obj3[13] = outer1_15;
                      c5 = 4;
                      c6 = 1;
                      let obj4 = { value: null, done: false };
                      obj4[0] = obj7.authorize(obj3);
                      return obj4;
                    } else {
                      const _Error2 = Error;
                      const error = new Error("No integration type was selected.");
                      outer1_23(error);
                      c6 = 3;
                    }
                  }
                }
              } else if (2 !== tmp8) {
                if (3 === tmp8) {
                  body2 = 1;
                  body2 = body.body;
                  let message;
                  if (body2 != null) {
                    message = body2.message;
                  }
                  if (null != message) {
                    if ("" !== body2.message) {
                      const _Error = Error;
                      const error1 = new Error(body2.message);
                      outer1_23(error1);
                      outer1_21(disclosures.AUTHORIZE_SCOPES);
                    }
                  }
                  outer1_23(body2);
                  outer1_21(disclosures.AUTHORIZE_SCOPES);
                } else {
                  if (4 === tmp8) {
                    if (arg0 === 1) {
                      c6 = 3;
                      throw arg1;
                    } else if (arg0 === 2) {
                      body2 = 0;
                      outer1_24(false);
                      c6 = 3;
                      const obj5 = { value: null, done: true };
                      obj5[0] = arg1;
                      return obj5;
                    } else {
                      throwTypeErrorResult = c1;
                      outer1_3 = arg1;
                      throwTypeErrorResult = callback;
                      if (callback) {
                        obj3 = responseType(codeChallenge[29]);
                        const response = obj3.fetch();
                        obj4 = callback(codeChallenge[25]);
                        c5 = 5;
                        c6 = 1;
                        const obj6 = { value: null, done: false };
                        obj6[0] = obj4.ackDisclosures(callback, outer1_50);
                        return obj6;
                      }
                    }
                  } else {
                    if (5 === tmp8) {
                      if (arg0 === 1) {
                        c6 = 3;
                        throw arg1;
                      } else if (arg0 === 2) {
                        body2 = 0;
                        outer1_24(false);
                        c6 = 3;
                        obj7 = { value: null, done: true };
                        obj7[0] = arg1;
                        return obj7;
                      }
                    } else if (arg0 === 1) {
                      c6 = 3;
                      throw arg1;
                    } else if (arg0 === 2) {
                      body2 = 0;
                      outer1_24(false);
                      c6 = 3;
                      obj = { value: null, done: true };
                      obj[0] = arg1;
                      return obj;
                    } else if (outer1_11 != null) {
                      throwTypeErrorResult = c1;
                      throwTypeErrorResult = c2;
                      const obj8 = {};
                      throwTypeErrorResult = body;
                      throwTypeErrorResult = obj8;
                      throwTypeErrorResult = Object.assign(body);
                      throwTypeErrorResult = c2;
                      obj8.canceled = c2;
                      let application;
                      if (outer1_18 != null) {
                        application = outer1_18.application;
                      }
                      obj8.application = application;
                      obj8.guild = outer1_33;
                      obj8.wasDeepLink = outer1_16;
                      tmp10(obj8);
                    }
                    body2 = 1;
                  }
                  if (null != outer1_1) {
                    outer1_1(outer1_3.location);
                  } else {
                    if (outer1_13 != null) {
                      outer1_13();
                    }
                    const promise = new Promise((arg0) => setTimeout(arg0, 100));
                    c5 = 6;
                    c6 = 1;
                    obj9 = { value: null, done: false };
                    obj9[0] = promise;
                    return obj9;
                  }
                }
                body2 = 0;
                outer1_24(false);
              }
              body2 = 0;
              outer1_24(false);
              throw body;
            }
          } catch (throwTypeErrorResult) {
            body = throwTypeErrorResult;
            if (tmp5 === body2) {
              throwTypeErrorResult = tmp3;
              c6 = tmp3;
              throw throwTypeErrorResult;
            } else if (tmp2 === throwTypeErrorResult) {
              c5 = throwTypeErrorResult;
            } else {
              c5 = tmp3;
            }
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
  callback1 = obj.useCallback((arg0) => {
    let closure_0 = arg0;
    return new Promise((arg0) => {
      let closure_0 = arg0;
      return outer1_54({
        isAuthorized: closure_0,
        overrideSuccessCallback(arg0) {
          callback(arg0);
        }
      });
    });
  }, items14);
  const items15 = [clientId, first9, responseType, callback, callback1, tmp51, dismissOAuthModal, requestedScopes];
  closure_56 = obj.useCallback((arg0) => {
    let closure_0 = arg0;
    if (first9) {
      const result = responseType(codeChallenge[22]).showConnectionDisclaimer();
      const obj2 = responseType(codeChallenge[22]);
      const nextPromise = result.then(() => callback2(10426).getAccountUrlAndAuthCode());
      const nextPromise1 = result.then(() => callback2(10426).getAccountUrlAndAuthCode()).then((arg0) => {
        let tmp;
        let tmp2;
        [tmp, tmp2] = arg0;
        const items = [tmp2, callback(outer1_3[27]).startSamsungAuthorization(callback, closure_45, closure_1, tmp, OAuth2Prompts)];
        return Promise.all(items);
      });
      const nextPromise2 = result.then(() => callback2(10426).getAccountUrlAndAuthCode()).then((arg0) => {
        let tmp;
        let tmp2;
        [tmp, tmp2] = arg0;
        const items = [tmp2, callback(outer1_3[27]).startSamsungAuthorization(callback, closure_45, closure_1, tmp, OAuth2Prompts)];
        return Promise.all(items);
      }).then((arg0) => {
        let tmp;
        [tmp, ] = arg0;
        const items = [tmp, outer1_55(closure_0)];
        return Promise.all(items);
      });
      const nextPromise3 = result.then(() => callback2(10426).getAccountUrlAndAuthCode()).then((arg0) => {
        let tmp;
        let tmp2;
        [tmp, tmp2] = arg0;
        const items = [tmp2, callback(outer1_3[27]).startSamsungAuthorization(callback, closure_45, closure_1, tmp, OAuth2Prompts)];
        return Promise.all(items);
      }).then((arg0) => {
        let tmp;
        [tmp, ] = arg0;
        const items = [tmp, outer1_55(closure_0)];
        return Promise.all(items);
      }).then((arg0) => {
        let tmp;
        let tmp2;
        [tmp, tmp2] = arg0;
        return outer1_1(outer1_3[22]).finishSamsungAuthorization(tmp, tmp2, OAuth2Prompts);
      });
      result.then(() => callback2(10426).getAccountUrlAndAuthCode()).then((arg0) => {
        let tmp;
        let tmp2;
        [tmp, tmp2] = arg0;
        const items = [tmp2, callback(outer1_3[27]).startSamsungAuthorization(callback, closure_45, closure_1, tmp, OAuth2Prompts)];
        return Promise.all(items);
      }).then((arg0) => {
        let tmp;
        [tmp, ] = arg0;
        const items = [tmp, outer1_55(closure_0)];
        return Promise.all(items);
      }).then((arg0) => {
        let tmp;
        let tmp2;
        [tmp, tmp2] = arg0;
        return outer1_1(outer1_3[22]).finishSamsungAuthorization(tmp, tmp2, OAuth2Prompts);
      }).then(() => {
        let tmp;
        if (callback3 != null) {
          tmp = callback3();
        }
        return tmp;
      }).catch((arg0) => {
        callback2(1208).captureException(arg0);
      });
      const nextPromise4 = result.then(() => callback2(10426).getAccountUrlAndAuthCode()).then((arg0) => {
        let tmp;
        let tmp2;
        [tmp, tmp2] = arg0;
        const items = [tmp2, callback(outer1_3[27]).startSamsungAuthorization(callback, closure_45, closure_1, tmp, OAuth2Prompts)];
        return Promise.all(items);
      }).then((arg0) => {
        let tmp;
        [tmp, ] = arg0;
        const items = [tmp, outer1_55(closure_0)];
        return Promise.all(items);
      }).then((arg0) => {
        let tmp;
        let tmp2;
        [tmp, tmp2] = arg0;
        return outer1_1(outer1_3[22]).finishSamsungAuthorization(tmp, tmp2, OAuth2Prompts);
      }).then(() => {
        let tmp;
        if (callback3 != null) {
          tmp = callback3();
        }
        return tmp;
      });
    } else {
      const obj = { isAuthorized: null };
      obj[0] = arg0;
      callback(obj);
    }
  }, items15);
  closure_57 = obj.useRef(false);
  const items16 = [clientId, requestedScopes, responseType, redirectUri, codeChallenge, codeChallengeMethod, tmp51, first6, connectedAccountProvider, _prompt, callback, first12, nsfwAllowed];
  callback2 = obj.useCallback(codeChallengeMethod(function*() {
    if (c6 === 2) {
      c6 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp7 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
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
            throw arg1;
          } else if (arg0 === 2) {
            c6 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let closure_2 = tmp4;
            let application = tmp8;
            let closure_0;
            application = undefined;
            closure_2 = undefined;
            let c3;
            if (outer1_57.current) {
              c6 = 3;
            } else {
              outer1_57.current = true;
              let c4 = 2;
              let obj3 = outer1_0(outer1_3[27]);
              const obj1 = { clientId: null, scopes: null, responseType: null, redirectUri: null, codeChallenge: null, codeChallengeMethod: null, state: null, integrationType: null, connectedAccountProvider: null };
              obj1[0] = outer1_0;
              obj1[1] = outer1_45;
              obj1[2] = outer1_1;
              obj1[3] = outer1_2;
              obj1[4] = outer1_3;
              obj1[5] = c4;
              obj1[6] = c5;
              closure_0 = outer1_35;
              if (outer1_35 == null) {
                closure_0 = undefined;
              }
              obj1[7] = closure_0;
              obj1[8] = outer1_15;
              c5 = 3;
              c6 = 1;
              const obj2 = { value: null, done: false };
              obj2[0] = obj3.fetchAuthorization(obj1);
              return obj2;
            }
          }
        } else if (1 !== tmp8) {
          if (2 === tmp8) {
            c4 = 1;
            outer1_3 = c3.body;
            if (null != outer1_3.message) {
              let message = c3.message;
            } else {
              const _Object = Object;
              const _Object2 = Object;
              const _HermesInternal = HermesInternal;
              message = "" + Object.keys(outer1_3)[0] + ": " + Object.values(outer1_3)[0];
            }
            const error = new Error(message);
            closure_23(error);
            const tmp30 = closure_23;
          } else if (arg0 === 1) {
            c6 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c4 = 0;
            outer1_57.current = false;
            c6 = 3;
            obj3 = { value: null, done: true };
            obj3[0] = arg1;
            return obj3;
          } else {
            closure_0 = arg1;
            application = outer1_0(outer1_3[31]).convertOAuth2Authorization(closure_0);
            callback(application);
            const obj9 = outer1_0(outer1_3[31]);
            closure_2 = outer1_0(outer1_3[26]).isContentClassificationRestricted(application.application.content_classification, closure_32);
            let tmp11 = closure_7 !== outer1_0(outer1_3[32]).OAuth2Prompts.NONE;
            if (!tmp11) {
              tmp11 = !closure_0.authorized;
            }
            if (!tmp11) {
              tmp11 = closure_52;
            }
            if (!tmp11) {
              tmp11 = closure_2;
            }
            if (!tmp11) {
              outer1_54({ isAuthorized: true });
            }
            obj = outer1_0(outer1_3[33]);
            const obj4 = { application_id: null };
            obj4[0] = closure_0.application.id;
            obj.trackWithMetadata(outer1_15.OAUTH2_AUTHORIZE_VIEWED, obj4);
            c4 = 1;
            c4 = 0;
            outer1_57.current = false;
            const obj10 = outer1_0(outer1_3[26]);
          }
        }
        c4 = 0;
        closure_57.current = false;
        throw c3;
      } catch (tmp62) {
        c3 = tmp62;
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
        const found = entries.filter((arg0) => {
          let tmp;
          [, tmp] = arg0;
          return null != tmp.oauth2InstallParams;
        });
        const mapped = found.map((arg0) => {
          let tmp;
          [tmp, ] = arg0;
          return Number(tmp);
        });
      }
      return [];
    }
  }, items17);
  closure_60 = obj.useRef(null);
  const items18 = [clientId, first6, memo4, requestedScopes, first1];
  const effect3 = obj.useEffect(() => {
    if (first1 !== ref2.current) {
      ref2.current = tmp;
      let obj = callback(codeChallenge[33]);
      obj = { step: null, application_id: null, integration_type: null, scopes: null, permissions: null };
      obj[0] = tmp;
      obj[1] = callback;
      obj[2] = first6;
      obj[3] = requestedScopes;
      obj[4] = memo4.toString();
      obj.trackWithMetadata(connectedAccountProvider.OAUTH2_AUTHORIZE_STEP_VIEWED, obj);
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
        if (!c34) {
          callback3(disclosures.CONNECT_ACCOUNT);
        }
      }
      if (memo5.length > 1) {
        callback3(disclosures.SELECT_INSTALL_TYPE);
      } else if (1 === arr.length) {
        callback6(arr[0]);
        callback3(disclosures.AUTHORIZE_SCOPES);
      } else if (null != integrationType) {
        callback6(tmp9);
        callback3(disclosures.AUTHORIZE_SCOPES);
      } else {
        callback6(callback(codeChallenge[28]).ApplicationIntegrationType.GUILD_INSTALL);
        callback3(disclosures.AUTHORIZE_SCOPES);
      }
    }
  }, items19);
  const items20 = [first1, null == connectedAccountProvider || null != stateFromStores1, integrationType];
  const effect5 = obj.useEffect(() => {
    let tmp2 = first1 === disclosures.CONNECT_ACCOUNT;
    if (tmp2) {
      tmp2 = c34;
    }
    if (tmp2) {
      let USER_INSTALL = integrationType;
      if (integrationType == null) {
        USER_INSTALL = callback(codeChallenge[28]).ApplicationIntegrationType.USER_INSTALL;
      }
      closure_36(USER_INSTALL);
      callback3(disclosures.AUTHORIZE_SCOPES);
      const tmp3 = closure_36;
    }
  }, items20);
  const items21 = [callback2, requestedScopes, memo4, first6, first, first2];
  const effect6 = obj.useEffect(() => {
    if (null != first6) {
      if (null == first) {
        if (null == first2) {
          if (tmp === callback(codeChallenge[28]).ApplicationIntegrationType.USER_INSTALL) {
            _undefined(null);
            _undefined2(null);
          }
          const found = requestedScopes.filter((arg0) => {
            const ValidScopes = callback(table[20]).ValidScopes;
            return !ValidScopes.includes(arg0);
          });
          if (0 === requestedScopes.length) {
            const _Error3 = Error;
            const error = new Error("No scopes were provided.");
            callback4(error);
          } else if (found.length > 0) {
            const _Error2 = Error;
            const _HermesInternal = HermesInternal;
            const error1 = new Error("Invalid scope: " + found[0]);
            callback4(error1);
          } else {
            if (tmp33Result.containsDisallowedPermission(memo4)) {
              const _Error = Error;
              const error2 = new Error("Invalid permission(s) provided.");
              callback4(error2);
            } else {
              callback2();
            }
            tmp33Result = tmp33(tmp34[34]);
          }
          tmp33 = callback;
          tmp34 = codeChallenge;
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
      _undefined3(true);
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
        callback3(tmp);
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
      callback6(arg0);
      callback2(null);
      callback3(disclosures.AUTHORIZE_SCOPES);
    }, []);
    let _Error = Error;
    if (first2 instanceof Error) {
      obj = { body: null, goBackOrCancel: null, footer: null, obscured: false };
      hasItem2 = callback;
      obj1 = { error: null, hideFooter: true };
      obj1[0] = first2.message;
      obj[0] = callback(tmp81(tmp17[36]), obj1);
      obj[1] = callback4;
      let obj2 = { size: "lg", text: null, onPress: null };
      const intl = tmp20(tmp17[38]).intl;
      obj2[1] = intl.string(tmp20(tmp17[38]).t.cpT0Cq);
      obj2[2] = function onPress() {
        return callback4();
      };
      obj[2] = callback(tmp20(tmp17[37]).Button, obj2);
      return obj;
    } else {
      let str4 = "";
      if (null != connectedAccountProvider) {
        const value = tmp81(tmp17[40]).get(connectedAccountProvider);
        let str5;
        class Spinner {
          constructor() {
            obj = { style: closure_17.loading, children: closure_17(f107594(codeChallenge[39]).ActivityIndicator, {}) };
            return closure_17(prompt, obj);
          }
        }
        if (str5 == null) {
          str5 = "";
        }
        str4 = str5;
        const tmp81Result = tmp81(tmp17[40]);
      }
      class Spinner {
        constructor() {
          obj = { style: closure_17.loading, children: closure_17(f107594(codeChallenge[39]).ActivityIndicator, {}) };
          return closure_17(prompt, obj);
        }
      }
      if (null === first1) {
        hasItem2 = callback;
        { body: null, obscured: false }[0] = callback(Spinner, {});
        class Spinner {
          constructor() {
            obj = { style: closure_17.loading, children: closure_17(f107594(codeChallenge[39]).ActivityIndicator, {}) };
            return closure_17(prompt, obj);
          }
        }
        let obj3 = { body: null, obscured: false };
      } else {
        if (tmp78.CONNECT_ACCOUNT === first1) {
          hasItem2 = callback;
          let obj4 = { clientId: null, platformType: null, platformName: null };
          obj4[0] = clientId;
          class Spinner {
            constructor() {
              obj = { style: closure_17.loading, children: closure_17(f107594(codeChallenge[39]).ActivityIndicator, {}) };
              return closure_17(prompt, obj);
            }
          }
          obj4[2] = str4;
          let tmp88 = callback(tmp81(tmp17[41]), obj4);
          let flag9 = true;
          let flag6 = false;
          let flag7 = false;
          let flag8 = false;
        } else if (tmp78.SELECT_INSTALL_TYPE === first1) {
          if (null == first8) {
            hasItem2 = callback;
            { body: null, obscured: false }[0] = callback(Spinner, {});
            class Spinner {
              constructor() {
                obj = { style: closure_17.loading, children: closure_17(f107594(codeChallenge[39]).ActivityIndicator, {}) };
                return closure_17(prompt, obj);
              }
            }
            let obj5 = { body: null, obscured: false };
          } else {
            hasItem2 = callback;
            let obj6 = { application: null, onSelect: null };
            obj6[0] = first8;
            class Spinner {
              constructor() {
                obj = { style: closure_17.loading, children: closure_17(f107594(codeChallenge[39]).ActivityIndicator, {}) };
                return closure_17(prompt, obj);
              }
            }
            tmp88 = callback(tmp81(tmp17[42]), obj6);
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
                    obj = { style: closure_17.loading, children: closure_17(f107594(codeChallenge[39]).ActivityIndicator, {}) };
                    return closure_17(prompt, obj);
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
                        obj = { style: closure_17.loading, children: closure_17(f107594(codeChallenge[39]).ActivityIndicator, {}) };
                        return closure_17(prompt, obj);
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
                    obj8 = { platformType: null, platformName: null, connectedAccount: null, applicationName: null };
                    obj8[0] = stateFromStores1.type;
                    class Spinner {
                      constructor() {
                        obj = { style: closure_17.loading, children: closure_17(f107594(codeChallenge[39]).ActivityIndicator, {}) };
                        return closure_17(prompt, obj);
                      }
                    }
                    obj8[2] = stateFromStores1;
                    obj8[3] = first.application.name;
                    tmp98 = callback(tmp20(tmp17[41]).ConnectedAccountCard, obj8);
                  }
                }
                const items24 = [tmp98, , , , ];
                hasItem2 = callback;
                let obj9 = { application: null, accountScopes: null };
                obj9[0] = first.application;
                obj9[1] = accountScopes;
                items24[1] = callback(tmp81(tmp17[45]), obj9);
                let obj10 = { application: null, accountScopes: null, requestedScopes: null, integrationType: null, errors: null, isTrustedName: null };
                obj10[0] = first.application;
                obj10[1] = accountScopes;
                obj10[2] = requestedScopes;
                obj10[3] = first6;
                obj10[4] = obj7;
                hasItem2 = tmp81(tmp17[46]);
                if (!flag2) {
                  flag2 = isSocialLayerParentApplication;
                }
                obj10[5] = flag2;
                items24[2] = hasItem2(hasItem2, obj10);
                hasItem2 = null;
                if (tmp92) {
                  const items25 = [hasItem2(tmp20(tmp17[47]).AuthorizeFormSeparator, {}), ];
                  hasItem2 = tmp81(tmp17[48]);
                  class Spinner {
                    constructor() {
                      obj = { style: closure_17.loading, children: closure_17(f107594(codeChallenge[39]).ActivityIndicator, {}) };
                      return closure_17(prompt, obj);
                    }
                  }
                  if (items26 == null) {
                    items26 = obj7[tmp20(undefined, tmp17[43]).OAuth2Scopes.APPLICATIONS_COMMANDS];
                  }
                  if (items26 == null) {
                    items26 = [];
                  }
                  const obj11 = { error: null, selectedGuildId: null, onGuildChange: null, guilds: null, disabled: null };
                  obj11[0] = items26[0];
                  obj11[1] = first3;
                  obj11[2] = tmp12;
                  if (sorted == null) {
                    sorted = [];
                  }
                  obj11[3] = sorted;
                  hasItem2 = "" !== first3;
                  if (hasItem2) {
                    hasItem2 = true === flag;
                  }
                  const obj12 = { children: null };
                  obj11[4] = hasItem2;
                  items25[1] = hasItem2(hasItem2, obj11);
                  obj12[0] = items25;
                  hasItem2 = tmp96(tmp97, obj12);
                }
                items24[3] = hasItem2;
                hasItem2 = null;
                if (hasItem) {
                  const items27 = [hasItem2(tmp20(tmp17[47]).AuthorizeFormSeparator, {}), ];
                  hasItem2 = tmp81(tmp17[49]);
                  class Spinner {
                    constructor() {
                      obj = { style: closure_17.loading, children: closure_17(f107594(codeChallenge[39]).ActivityIndicator, {}) };
                      return closure_17(prompt, obj);
                    }
                  }
                  if (items28 == null) {
                    items28 = [];
                  }
                  const obj13 = { children: null };
                  const obj14 = { error: null, selectedChannelId: null, selectedGuildId: null, onChannelChange: null };
                  obj14[0] = items28[0];
                  obj14[1] = first4;
                  obj14[2] = first3;
                  obj14[3] = tmp15;
                  items27[1] = hasItem2(hasItem2, obj14);
                  obj13[0] = items27;
                  hasItem2 = tmp96(tmp97, obj13);
                }
                const obj15 = { children: null };
                items24[4] = hasItem2;
                obj15[0] = items24;
                hasItem2 = tmp96(tmp97, obj15);
                hasItem2 = requestedScopes.includes(tmp20(tmp17[43]).OAuth2Scopes.BOT);
                if (hasItem2) {
                  hasItem2 = !tmp16(tmp17[21]).equals(memo4, tmp16(tmp17[13]).NONE);
                  const tmp16Result = tmp16(tmp17[21]);
                }
                hasItem2 = undefined;
                if (hasItem2) {
                  AUTHORIZE_BOT_PERMISSIONS = tmp78.AUTHORIZE_BOT_PERMISSIONS;
                  hasItem2 = AUTHORIZE_BOT_PERMISSIONS;
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
                tmp88 = hasItem2;
                const tmp20Result6 = tmp20(tmp17[44]);
              }
            }
          }
          hasItem2 = callback;
          class Spinner {
            constructor() {
              obj = { style: closure_17.loading, children: closure_17(f107594(codeChallenge[39]).ActivityIndicator, {}) };
              return closure_17(prompt, obj);
            }
          }
          return { body: null, obscured: false };
        } else {
          flag6 = true;
          flag7 = true;
          flag8 = false;
          class Spinner {
            constructor() {
              obj = { style: closure_17.loading, children: closure_17(f107594(codeChallenge[39]).ActivityIndicator, {}) };
              return closure_17(prompt, obj);
            }
          }
          if (tmp78.AUTHORIZE_BOT_PERMISSIONS === first1) {
            if (null == first) {
              { body: null, obscured: false }[0] = callback(Spinner, {});
              class Spinner {
                constructor() {
                  obj = { style: closure_17.loading, children: closure_17(f107594(codeChallenge[39]).ActivityIndicator, {}) };
                  return closure_17(prompt, obj);
                }
              }
              const obj17 = { body: null, obscured: false };
            } else {
              const obj18 = { application: null, permissions: null, deniedPermissions: null, onPermissionsChange: null, guild: null };
              obj18[0] = first.application;
              class Spinner {
                constructor() {
                  obj = { style: closure_17.loading, children: closure_17(f107594(codeChallenge[39]).ActivityIndicator, {}) };
                  return closure_17(prompt, obj);
                }
              }
              obj18[2] = first5;
              obj18[3] = tmp84;
              obj18[4] = memo;
              tmp88 = callback(tmp81(tmp17[50]), obj18);
              flag6 = true;
              flag7 = true;
              flag8 = false;
              flag9 = true;
            }
          }
        }
        hasItem2 = undefined;
        if (flag7) {
          if (tmp89 !== tmp78.AUTHORIZE_BOT_PERMISSIONS) {
            if (null != first) {
              hasItem2 = undefined;
              if (first != null) {
                hasItem2 = first.application.approximate_guild_count;
              }
              if (hasItem2 == null) {
                hasItem2 = undefined;
                if (first != null) {
                  const bot = first.bot;
                  if (bot != null) {
                    hasItem2 = bot.approximate_guild_count;
                  }
                }
              }
              class Spinner {
                constructor() {
                  obj = { style: closure_17.loading, children: closure_17(f107594(codeChallenge[39]).ActivityIndicator, {}) };
                  return closure_17(prompt, obj);
                }
              }
              const obj19 = { application: null, scopes: null, disclosures: null, redirectUri: null, approximateGuildCount: null, isEmbeddedFlow: null, connectedAccount: null };
              obj19[0] = first.application;
              obj19[1] = requestedScopes;
              obj19[2] = first11;
              hasItem2 = first.redirect_uri;
              hasItem2 = tmp81(tmp17[51]);
              if (hasItem2 == null) {
                hasItem2 = null;
              }
              obj19[3] = hasItem2;
              hasItem2 = null;
              obj19[4] = hasItem2;
              obj19[5] = flag3;
              obj19[6] = stateFromStores1;
              hasItem2 = hasItem2(hasItem2, obj19);
            }
          }
        }
        class Spinner {
          constructor() {
            obj = { style: closure_17.loading, children: closure_17(f107594(codeChallenge[39]).ActivityIndicator, {}) };
            return closure_17(prompt, obj);
          }
        }
        if (flag6) {
          flag6 = null != stateFromStores;
        }
        hasItem2 = undefined;
        if (flag6) {
          hasItem2 = callback;
          const obj20 = { user: null, application: null, accountScopes: null, bot: null };
          obj20[0] = stateFromStores;
          class Spinner {
            constructor() {
              obj = { style: closure_17.loading, children: closure_17(f107594(codeChallenge[39]).ActivityIndicator, {}) };
              return closure_17(prompt, obj);
            }
          }
          obj20[2] = accountScopes;
          obj20[3] = first.bot;
          hasItem2 = callback(tmp81(tmp17[52]), obj20);
        }
        hasItem2 = flag8;
        if (flag8) {
          hasItem2 = !first7;
        }
        const obj21 = { header: null, body: null, footer: null, appDetails: null, backStep: null, sendAuthorize: null, goBackOrCancel: null, allContentSeen: null, setAllContentSeen: null, hasContentBackground: null, obscured: null };
        obj21[0] = hasItem2;
        obj21[1] = tmp88;
        hasItem2 = callback;
        hasItem2 = null;
        hasItem2 = first;
        if (first1 !== tmp78.SELECT_INSTALL_TYPE) {
          hasItem2 = null;
          if (first1 !== tmp78.CONNECT_ACCOUNT) {
            const obj22 = { accessibilityElementsHidden: null, importantForAccessibility: null, children: null };
            obj22[0] = hasItem2;
            let str6 = "auto";
            class Spinner {
              constructor() {
                obj = { style: closure_17.loading, children: closure_17(f107594(codeChallenge[39]).ActivityIndicator, {}) };
                return closure_17(prompt, obj);
              }
            }
            if (hasItem2) {
              str6 = "no-hide-descendants";
            }
            obj22[1] = str6;
            if (null != tmp89) {
              const string = tmp20(tmp17[38]).intl.string;
              const t2 = tmp20(tmp17[38]).t;
              class Spinner {
                constructor() {
                  obj = { style: closure_17.loading, children: closure_17(f107594(codeChallenge[39]).ActivityIndicator, {}) };
                  return closure_17(prompt, obj);
                }
              }
            } else {
              const string2 = tmp20(tmp17[38]).intl.string;
              const t = tmp20(tmp17[38]).t;
              class Spinner {
                constructor() {
                  obj = { style: closure_17.loading, children: closure_17(f107594(codeChallenge[39]).ActivityIndicator, {}) };
                  return closure_17(prompt, obj);
                }
              }
            }
            obj22[2] = hasItem2(tmp20(tmp17[37]).Button, hasItem2);
            hasItem2 = hasItem2(hasItem2, obj22);
          }
        }
        const obj23 = { children: null };
        obj23[0] = hasItem2;
        obj21[2] = hasItem2(hasItem2, obj23);
        obj21[3] = hasItem2;
        obj21[4] = tmp79;
        obj21[5] = callback;
        obj21[6] = callback4;
        obj21[7] = first7;
        obj21[8] = tmp30;
        obj21[9] = flag9;
        obj21[10] = result;
        return obj21;
      }
    }
  }
  if (first1 === disclosures.AUTHORIZE_BOT_PERMISSIONS) {
    AUTHORIZE_SCOPES = tmp78.AUTHORIZE_SCOPES;
    tmp79 = AUTHORIZE_SCOPES;
  }
};