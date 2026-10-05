// === Module 8717: useOAuth2AuthorizeForm ===

// Module 8717 (useOAuth2AuthorizeForm)
import react_native from "react-native" /* 17 */;
import BigFlagUtilsAll from "BigFlagUtils" /* 1097 */;
import PermissionUtilsAll from "PermissionUtils" /* 4514 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4612 */;
import timing from "timing" /* 4891 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 5070 */;
import ActivityIndicator_ActivityIndicator from "ActivityIndicator/ActivityIndicator" /* 5968 */;
import ApplicationActionCreatorsDefault from "ApplicationActionCreators" /* 6658 */;
import ApplicationIntegrationType from "ApplicationIntegrationType" /* 8708 */;
import Authorize from "Authorize" /* 8719 */;
import scopes2 from "scopes" /* 8720 */;
import react_nativeDefault from "react-native" /* 8721 */;
import permissions2 from "permissions" /* 8730 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import module_4524 from "module_4524" /* 4524 */;
import AccessibilityStore from "AccessibilityStore" /* 4879 */;
import ApplicationRecord from "ApplicationRecord" /* 2009 */;
import ConnectedAccountsStore from "ConnectedAccountsStore" /* 5440 */;
import UserStore from "UserStore" /* 1377 */;
import Constants_mod from "Constants" /* 8718 */;
import Constants_mod2 from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4890 */;
import size from "module_2" /* 2 */;

let _require, c5, c6, isAuthorized;

let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_18;
let closure_19;
let map1;
let View = react_native.View;
let Constants = Constants_mod2;
({ EMOJI_POINTING_DOWN_CODE_POINT: map1, OAuth2Steps: closure_14 } = Constants);
Constants = Constants_mod2;
({ AnalyticEvents: closure_15, Endpoints: closure_16 } = Constants);
({ jsx: closure_17, Fragment: closure_18, jsxs: closure_19 } = Fragment);
let closure_20 = createStyles.createStyles({ loading: { flex: 1, alignSelf: "center", justifyContent: "center" } });
let __initData = { code: "function useOAuth2AuthorizeFormTsx1(){const{shouldReduceMotion,withSequence,withTiming,Easing,withRepeat}=this.__closure;const TOTAL=500;if(shouldReduceMotion)return{};return{transform:[{translateY:withSequence(withTiming(-5,{duration:TOTAL/2,easing:Easing.inOut(Easing.quad)}),withRepeat(withTiming(5,{duration:TOTAL,easing:Easing.inOut(Easing.quad)}),-1,true))}]};}" };
let result = size.fileFinishedImporting("modules/oauth2/native/useOAuth2AuthorizeForm.tsx");

export default function useOAuth2AuthorizeForm(clientId) {
  let Button;
  let Button2;
  let channelId;
  let closure_21;
  let guildId;
  let hasItem;
  let integrationType;
  let intl;
  let intl2;
  let intl3;
  let items26;
  let items28;
  let items29;
  let items30;
  let obj31;
  let obj5;
  let obj6;
  let obj8;
  let redirect_uri;
  let str6;
  let tmp105;
  let tmp121;
  let tmp125;
  let tmp125Result;
  let tmp125Result3;
  let tmp126;
  let tmp80;
  let tmp82Result11;
  let tmp82Result12;
  clientId = clientId.clientId;
  let responseType = clientId.responseType;
  let redirectUri = clientId.redirectUri;
  let codeChallenge = clientId.codeChallenge;
  let codeChallengeMethod = clientId.codeChallengeMethod;
  let state = clientId.state;
  let nonce = clientId.nonce;
  const _prompt = clientId.prompt;
  let scopes = clientId.scopes;
  const permissions = clientId.permissions;
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
  const callback = clientId.callback;
  const callbackWithoutPost = clientId.callbackWithoutPost;
  const dismissOAuthModal = clientId.dismissOAuthModal;
  let disclosures = clientId.disclosures;
  const connectedAccountProvider = clientId.connectedAccountProvider;
  let flag5 = clientId.wasDeepLink;
  if (flag5 === undefined) {
    flag5 = false;
  }
  let first1;
  let first4;
  let closure_27;
  let first5;
  let closure_29;
  let first6;
  let closure_31;
  let nsfwAllowed;
  let memo;
  let closure_34;
  let first7;
  let closure_36;
  let first8;
  let closure_38;
  let stateFromStores2;
  let isScreenReaderEnabled;
  let memo1;
  let first9;
  let closure_43;
  let memo2;
  let requestedScopes;
  let memo4;
  let first10;
  let closure_48;
  let ref;
  let first12;
  let closure_51;
  let first13;
  let closure_53;
  let callback1;
  let callback2;
  let closure_56;
  let closure_57;
  let callback3;
  let memo5;
  let ref2;
  let AUTHORIZE_SCOPES;
  let callback5;
  let AUTHORIZE_BOT_PERMISSIONS;
  const loading = first1();
  let obj = nonce;
  let tmp = state;
  let tmp2 = state(nonce.useState(null), 2);
  const first = tmp2[0];
  let closure_19 = tmp2[1];
  const tmp4 = state(nonce.useState(null), 2);
  first1 = tmp4[0];
  __initData = tmp4[1];
  const tmp6 = state(nonce.useState(null), 2);
  const first2 = tmp6[0];
  let closure_23 = tmp6[1];
  const tmp8 = state(nonce.useState(false), 2);
  let closure_24 = tmp8[1];
  let guilds;
  const first3 = tmp8[0];
  if (first != null) {
    guilds = first.guilds;
  }
  const useState = obj.useState;
  if (guildId == null) {
    guildId = null;
  }
  const tmpResult = tmp(useState(guildId), 2);
  first4 = tmpResult[0];
  closure_27 = tmp13;
  const useState2 = obj.useState;
  if (channelId == null) {
    channelId = null;
  }
  const tmpResult10 = tmp(useState2(channelId), 2);
  first5 = tmpResult10[0];
  closure_29 = tmp16;
  const tmp18 = codeChallenge;
  const tmpResult11 = tmp(obj.useState(redirectUri(codeChallenge[13]).NONE), 2);
  first6 = tmpResult11[0];
  closure_31 = tmpResult11[1];
  let obj2 = clientId(codeChallenge[14]);
  let items = [callbackWithoutPost];
  const stateFromStores = obj2.useStateFromStores(items, () => callbackWithoutPost.getCurrentUser());
  nsfwAllowed = undefined;
  if (stateFromStores != null) {
    nsfwAllowed = stateFromStores.nsfwAllowed;
  }
  const items1 = [guilds, first4];
  memo = obj.useMemo(() => {
    let found;
    if (guilds != null) {
      found = guilds.find((id) => id.id === first4);
    }
    return found;
  }, items1);
  const items2 = [callback];
  const items3 = [connectedAccountProvider];
  const tmp21Result = clientId(tmp18[14]);
  const stateFromStores1 = tmp21Result.useStateFromStores(items2, () => {
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
  closure_34 = tmp26;
  const tmpResult12 = tmp(obj.useState(null), 2);
  first7 = tmpResult12[0];
  closure_36 = tmpResult12[1];
  const tmpResult13 = tmp(obj.useState(false), 2);
  first8 = tmpResult13[0];
  closure_38 = tmp31;
  const items4 = [permissions];
  const tmp21Result8 = clientId(tmp18[14]);
  stateFromStores2 = tmp21Result8.useStateFromStores(items4, () => permissions.useReducedMotion);
  const tmp21Result9 = clientId(tmp18[15]);
  isScreenReaderEnabled = tmp21Result9.useIsScreenReaderEnabled();
  const tmp21Result10 = clientId(tmp18[16]);
  class V {
    constructor() {
      let Easing;
      let Easing2;
      let items;
      let obj;
      let obj4;
      let withRepeat;
      let withSequence;
      let withTiming2;
      let withTimingResult;
      if (stateFromStores2) {
        obj = {};
      } else {
        obj = { transform: items };
        const obj2 = { translateY: withSequence(withTimingResult, withRepeat(withTiming2(5, obj4), -1, true)) };
        withSequence = ReanimatedRexport.withSequence;
        ReanimatedRexport;
        const obj3 = { duration: 250, easing: Easing.inOut(ReanimatedRexport.Easing.quad) };
        const withTiming = timing.withTiming;
        timing;
        Easing = ReanimatedRexport.Easing;
        withTimingResult = withTiming(-5, obj3);
        withRepeat = ReanimatedRexport.withRepeat;
        ReanimatedRexport;
        obj4 = { duration: 500, easing: Easing2.inOut(ReanimatedRexport.Easing.quad) };
        withTiming2 = timing.withTiming;
        timing;
        Easing2 = ReanimatedRexport.Easing;
        items = [obj2];
      }
      return obj;
    }
  }
  let obj3 = { shouldReduceMotion: stateFromStores2, withSequence: tmp21(tmp18[16]).withSequence, withTiming: tmp21(tmp18[17]).withTiming, Easing: tmp21(tmp18[16]).Easing, withRepeat: tmp21(tmp18[16]).withRepeat };
  V.__closure = obj3;
  V.__workletHash = 1476082137097;
  V.__initData = __initData;
  const animatedStyle = tmp21Result10.useAnimatedStyle(V);
  let length;
  const useMemo = obj.useMemo;
  if (scopes != null) {
    length = scopes.length;
  }
  const items5 = [length, redirectUri, integrationType];
  memo1 = useMemo(() => {
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
  const tmpResult14 = tmp(obj.useState(null), 2);
  first9 = tmpResult14[0];
  closure_43 = tmpResult14[1];
  const items6 = [clientId, memo1];
  const effect = obj.useEffect(() => {
    if (memo1) {
      const obj = ApplicationActionCreatorsDefault;
      const application = obj.fetchApplication(clientId);
      application.then((result) => closure_1_43(integrationType.createFromServer(result)));
    }
  }, items6);
  let prop;
  const useMemo2 = obj.useMemo;
  if (first9 != null) {
    prop = first9.integrationTypesConfig;
  }
  const items7 = [prop, first7];
  memo2 = useMemo2(() => {
    let tmp2 = null;
    if (null != first7) {
      let oauth2InstallParams;
      if (first9 != null) {
        const integrationTypesConfig = first9.integrationTypesConfig;
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
  const useMemo3 = obj.useMemo;
  if (memo2 != null) {
    scopes1 = memo2.scopes;
  }
  const items8 = [scopes1, scopes, memo1];
  const memo3 = useMemo3(() => {
    let items;
    if (memo1) {
      scopes = undefined;
      if (memo2 != null) {
        scopes = memo2.scopes;
      }
      items = scopes;
    } else {
      items = scopes;
    }
    const filterScopes = Authorize.filterScopes;
    Authorize;
    if (items == null) {
      items = [];
    }
    const filterScopesResult = filterScopes(items);
    const OrderedAccountScopes = scopes2.OrderedAccountScopes;
    const obj = { requestedScopes: filterScopesResult, accountScopes: OrderedAccountScopes.filter((item) => filterScopesResult.includes(item)) };
    return obj;
  }, items8);
  requestedScopes = memo3.requestedScopes;
  const accountScopes = memo3.accountScopes;
  let permissions1;
  const useMemo4 = obj.useMemo;
  if (memo2 != null) {
    permissions1 = memo2.permissions;
  }
  const items9 = [permissions1, permissions, memo1];
  memo4 = useMemo4(() => {
    let NONE;
    if (memo1) {
      let num;
      const deserialize = BigFlagUtilsAll.deserialize;
      BigFlagUtilsAll;
      if (memo2 != null) {
        num = memo2.permissions;
      }
      if (num == null) {
        num = 0;
      }
      NONE = deserialize(num);
    } else {
      NONE = permissions;
    }
    if (NONE == null) {
      NONE = PermissionUtilsAll.NONE;
    }
    return NONE;
  }, items9);
  const tmpResult15 = tmp(obj.useState(false), 2);
  first10 = tmpResult15[0];
  closure_48 = tmpResult15[1];
  const items10 = [clientId];
  const effect1 = obj.useEffect(() => {
    const obj = react_nativeDefault;
    const checkIfOAuthRequestResult = obj.checkIfOAuthRequest(clientId);
    checkIfOAuthRequestResult.then(closure_48);
  }, items10);
  const first11 = tmp(obj.useState(null), 2)[0];
  let tmp52 = state;
  tmp(obj.useState(null), 2);
  if (first10) {
    clientId(tmp18[23]);
    let str = "/v6";
    const text = `${obj8.getAPIBaseURL(false)}/v6${flag5.OAUTH2_AUTHORIZE_SAMSUNG_CALLBACK}`;
    redirectUri = text;
    const tmp55 = null == state && null == first11;
    if (tmp55) {
      const tmp21Result12 = clientId(tmp18[24]);
      tmp51(tmp21Result12.v4());
    }
    let tmp57 = state;
    if (null != first11) {
      let text1 = state;
      if (state == null) {
        let str2 = "SA";
        text1 = `SA${tmp50}`;
      }
      state = text1;
      tmp57 = text1;
    }
    tmp52 = tmp57;
    redirectUri = text;
  }
  ref = obj.useRef(false);
  let items11 = disclosures;
  const useState3 = obj.useState;
  if (disclosures == null) {
    items11 = [];
  }
  const tmpResult17 = tmp(useState3(items11), 2);
  first12 = tmpResult17[0];
  closure_51 = tmp61;
  const tmpResult18 = tmp(obj.useState(null != disclosures), 2);
  first13 = tmpResult18[0];
  closure_53 = tmp64;
  const items12 = [clientId, disclosures, tmp61, tmp64];
  const effect2 = obj.useEffect(() => {
    function doGetDisclosures() {
      return obj(...arguments);
    }
    let obj = function _doGetDisclosures() {
      obj = _asyncToGenerator(async function() {
        let obj2;
        if (c5 === 2) {
          c5 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj3 = { value, done: true };
            return obj3;
          } else {
            return { value: "IconComponent", done: null };
          }
        } else {
          let c3;
          let body;
          try {
            let closure_0;
            let allAcked;
            c5 = 2;
            if (0 === c4) {
              if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c5 = 3;
                const obj4 = { value, done: true };
                return obj4;
              } else {
                let closure_1 = tmp;
                closure_0 = undefined;
                disclosures = undefined;
                allAcked = undefined;
                body = undefined;
                closure_1_49.current = true;
                c3 = 2;
                c4 = 3;
                c5 = 1;
                const obj5 = { value: obj2.getDisclosures(closure_0), done: false };
                obj2 = closure_2_0(codeChallenge[25]);
                return obj5;
              }
            } else if (1 === c4) {
              c3 = 0;
              closure_1_49.current = false;
              throw body;
            } else {
              if (2 === c4) {
                let message;
                c3 = 1;
                body = body.body;
                const _Error = Error;
                if (null != body.message) {
                  message = body.message;
                } else {
                  const _Object = Object;
                  const _Object2 = Object;
                  const _HermesInternal = HermesInternal;
                  message = "" + Object.keys(body)[0] + ": " + Object.values(body)[0];
                }
                const self = this;
                const self2 = this;
                const _Error1 = new _Error(message);
                closure_1_23(_Error1);
              } else if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 0;
                closure_1_49.current = false;
                c5 = 3;
                obj = { value, done: true };
                return obj;
              } else {
                closure_0 = value;
                disclosures = closure_0.disclosures;
                allAcked = closure_0.allAcked;
                closure_1_53(!allAcked);
                closure_1_51(disclosures);
                c3 = 1;
              }
              c3 = 0;
              closure_1_49.current = false;
              c5 = 3;
              return { value: "IconComponent", done: null };
            }
          } catch (tmp42) {
            body = tmp42;
            if (0 === c3) {
              c5 = 3;
              throw tmp42;
            } else if (1 === tmp44) {
              c4 = 1;
            } else {
              c4 = 2;
            }
          }
        }
      });
      return obj(...arguments);
    };
    if (!ref.current) {
      if (null == disclosures) {
        const tmp3 = doGetDisclosures();
      }
    }
  }, items12);
  let prop1;
  if (first != null) {
    prop1 = first.application.content_classification;
  }
  if (prop1 == null) {
    let prop2;
    if (first9 != null) {
      prop2 = first9.contentClassification;
    }
    prop1 = prop2;
  }
  const tmp21Result13 = clientId(tmp18[26]);
  let result = tmp21Result13.isContentClassificationRestricted(prop1, nsfwAllowed);
  const useCallback = obj.useCallback;
  _require = codeChallengeMethod(function*(arg0) {
    let application;
    let authorize;
    let c0;
    let c1;
    let c2;
    let closure_2;
    let obj5;
    let obj9;
    let tmp107;
    let tmp99;
    if (1 === state) {
      if (arg0 === 1) {
        nonce = 3;
        throw value;
      } else if (arg0 === 2) {
        nonce = 3;
        const obj6 = { value, done: true };
        return obj6;
      } else if (null != callbackWithoutPost) {
        closure_1_24(true);
        callbackWithoutPost(authorize);
        if (dismissOAuthModal != null) {
          dismissOAuthModal();
        }
        nonce = 3;
        const obj7 = { value: undefined, done: true };
        return obj7;
      } else if (null != integrationType) {
        codeChallengeMethod = 2;
        closure_1_24(true);
        const obj8 = { authorize, clientId, scopes, responseType, redirectUri: tmp, codeChallenge, codeChallengeMethod, state, nonce, permissions: obj9.remove(memo4, first6), guildId: tmp99, channelId: tmp107, integrationType, connectedAccountProvider };
        authorize = clientId(codeChallenge[27]).authorize;
        const tmp82 = clientId(codeChallenge[27]);
        obj9 = redirectUri(codeChallenge[21]);
        tmp99 = undefined;
        if (integrationType === clientId(codeChallenge[28]).ApplicationIntegrationType.GUILD_INSTALL) {
          if (null != first4) {
            tmp99 = first4;
          }
        }
        tmp107 = undefined;
        if (integrationType === clientId(codeChallenge[28]).ApplicationIntegrationType.GUILD_INSTALL) {
          if (null != first5) {
            tmp107 = first5;
          }
        }
        state = 4;
        nonce = 1;
        const obj10 = { value: authorize(obj8), done: false };
        return obj10;
      } else {
        const _Error2 = Error;
        const self5 = this;
        const self6 = this;
        const error = new Error("No integration type was selected.");
        closure_1_23(error);
      }
    } else if (2 === state) {
      codeChallengeMethod = 0;
      closure_1_24(false);
      throw codeChallenge;
    } else {
      if (3 === state) {
        codeChallengeMethod = 1;
        const body = codeChallenge.body;
        let message;
        if (body != null) {
          message = body.message;
        }
        if (null != message) {
          if ("" !== body.message) {
            const _Error = Error;
            const self3 = this;
            const self4 = this;
            const error1 = new Error(body.message);
            closure_1_23(error1);
            closure_1_21(constants.AUTHORIZE_SCOPES);
          }
        }
        closure_1_23(body);
        closure_1_21(constants.AUTHORIZE_SCOPES);
      } else {
        if (4 === state) {
          if (arg0 === 1) {
            nonce = 3;
            throw value;
          } else if (arg0 === 2) {
            codeChallengeMethod = 0;
            closure_1_24(false);
            nonce = 3;
            const obj11 = { value, done: true };
            return obj11;
          } else {
            codeChallenge = value;
            const tmp138 = authorize;
            if (tmp138) {
              const obj4 = responseType(codeChallenge[29]);
              const response = obj4.fetch();
              state = 5;
              nonce = 1;
              const obj12 = { value: obj5.ackDisclosures(clientId, first12), done: false };
              obj5 = clientId(codeChallenge[25]);
              return obj12;
            }
          }
        } else {
          if (5 === state) {
            if (arg0 === 1) {
              nonce = 3;
              throw value;
            } else if (arg0 === 2) {
              codeChallengeMethod = 0;
              closure_1_24(false);
              nonce = 3;
              const obj13 = { value, done: true };
              return obj13;
            }
          } else if (arg0 === 1) {
            nonce = 3;
            throw value;
          } else if (arg0 === 2) {
            codeChallengeMethod = 0;
            closure_1_24(false);
            nonce = 3;
            const obj = { value, done: true };
            return obj;
          } else if (callback != null) {
            const obj14 = { canceled: tmp, application, guild, wasDeepLink };
            const merged = Object.assign(codeChallenge);
            application = undefined;
            if (application != null) {
              application = application.application;
            }
            tmp6(obj14);
          }
          codeChallengeMethod = 1;
        }
        if (null != responseType) {
          responseType(codeChallenge.location);
        } else {
          if (dismissOAuthModal != null) {
            dismissOAuthModal();
          }
          const self = this;
          const self2 = this;
          const promise = new Promise((arg0) => setTimeout(arg0, 100));
          state = 6;
          nonce = 1;
          const obj15 = { value: promise, done: false };
          return obj15;
        }
      }
      codeChallengeMethod = 0;
      closure_1_24(false);
    }
    yield "IconComponent";
    responseType = tmp4;
    ({ isAuthorized: c0, overrideSuccessCallback: c1, canceled: c2 } = clientId);
    return "Set";
  });
  const items13 = [first7, callbackWithoutPost, clientId, requestedScopes, responseType, redirectUri, codeChallenge, codeChallengeMethod, tmp52, nonce, memo4, first6, first4, first5, first12, dismissOAuthModal, callback, flag5, , , ];
  let application;
  const tmp69 = codeChallengeMethod;
  if (first != null) {
    application = first.application;
  }
  items13[18] = application;
  items13[19] = memo;
  items13[20] = connectedAccountProvider;
  callback1 = useCallback(function(arg0) {
    return closure_0(...arguments);
  }, items13);
  const items14 = [callback1];
  callback2 = obj.useCallback((isAuthorized) => {
    const promise = new Promise((arg0) => {
      isAuthorized = arg0;
      const obj = {
        isAuthorized,
        overrideSuccessCallback(arg0) {
          closure_0(arg0);
        }
      };
      return callback1(obj);
    });
    return promise;
  }, items14);
  const items15 = [clientId, first10, responseType, callback1, callback2, tmp52, dismissOAuthModal, requestedScopes];
  closure_56 = obj.useCallback((isAuthorized) => {
    let closure_0 = isAuthorized;
    if (first10) {
      const obj2 = responseType(codeChallenge[22]);
      const result = obj2.showConnectionDisclaimer();
      const nextPromise = result.then(() => {
        const obj = responseType(codeChallenge[22]);
        return obj.getAccountUrlAndAuthCode();
      });
      const nextPromise1 = nextPromise.then((result) => {
        let tmp;
        let tmp2;
        [tmp, tmp2] = result;
        const items = [tmp2, ];
        const obj = clientId(codeChallenge[27]);
        items[1] = obj.startSamsungAuthorization(isAuthorized, requestedScopes, responseType, tmp, state);
        return all(items);
      });
      const nextPromise2 = nextPromise1.then((result) => {
        let tmp;
        [tmp, ] = result;
        const items = [tmp, ];
        items[1] = callback2(isAuthorized);
        return all(items);
      });
      const nextPromise3 = nextPromise2.then((result) => {
        let tmp;
        let tmp2;
        [tmp, tmp2] = result;
        const obj = responseType(codeChallenge[22]);
        return obj.finishSamsungAuthorization(tmp, tmp2, state);
      });
      const nextPromise4 = nextPromise3.then(() => {
        let tmp;
        if (dismissOAuthModal != null) {
          tmp = dismissOAuthModal();
        }
        return tmp;
      });
      nextPromise4.catch((error) => {
        const obj = responseType(codeChallenge[30]);
        obj.captureException(error);
      });
    } else {
      let obj = { isAuthorized };
      callback1(obj);
    }
  }, items15);
  closure_57 = obj.useRef(false);
  const items16 = [clientId, requestedScopes, responseType, redirectUri, codeChallenge, codeChallengeMethod, tmp52, first7, connectedAccountProvider, _prompt, callback1, first13, nsfwAllowed];
  callback3 = obj.useCallback(tmp69(function*() {
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c4;
      let body;
      try {
        let application;
        let closure_2;
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            integrationType = undefined;
            application = undefined;
            closure_2 = undefined;
            body = undefined;
            if (!ref.current) {
              ref.current = true;
              c4 = 2;
              const obj4 = { clientId, scopes: requestedScopes, responseType, redirectUri, codeChallenge, codeChallengeMethod, state, integrationType, connectedAccountProvider };
              const tmp46 = integrationType(body[27]);
              integrationType = first7;
              const fetchAuthorization = tmp46.fetchAuthorization;
              if (first7 == null) {
                integrationType = undefined;
              }
              c5 = 3;
              c6 = 1;
              const obj5 = { value: fetchAuthorization(obj4), done: false };
              return obj5;
            }
          }
        } else if (1 === c5) {
          c4 = 0;
          closure_130_57.current = false;
          throw body;
        } else {
          if (2 === c5) {
            let message;
            c4 = 1;
            body = body.body;
            const _Error = Error;
            if (null != body.message) {
              message = body.message;
            } else {
              const _Object = Object;
              const _Object2 = Object;
              const _HermesInternal = HermesInternal;
              message = "" + Object.keys(body)[0] + ": " + Object.values(body)[0];
            }
            const self = this;
            const self2 = this;
            const _Error1 = new _Error(message);
            closure_130_23(_Error1);
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            closure_130_57.current = false;
            c6 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            integrationType = value;
            const obj8 = integrationType(body[31]);
            application = obj8.convertOAuth2Authorization(integrationType);
            closure_130_19(application);
            const obj9 = integrationType(body[26]);
            closure_2 = obj9.isContentClassificationRestricted(application.application.content_classification, closure_130_32);
            const tmp7 = closure_130_7 !== integrationType(body[32]).OAuth2Prompts.NONE || !integrationType.authorized || closure_130_52 || closure_2;
            if (!tmp7) {
              closure_130_54({ isAuthorized: true });
            }
            const obj7 = { application_id: integrationType.application.id };
            const obj = integrationType(body[33]);
            obj.trackWithMetadata(connectedAccountProvider.OAUTH2_AUTHORIZE_VIEWED, obj7);
            c4 = 1;
          }
          c4 = 0;
          closure_130_57.current = false;
        }
        c6 = 3;
        return { value: "IconComponent", done: null };
      } catch (tmp57) {
        body = tmp57;
        if (0 === c4) {
          c6 = 3;
          throw tmp57;
        } else if (1 === tmp59) {
          c5 = 1;
        } else {
          c5 = 2;
        }
      }
    }
  }), items16);
  const items17 = [first9, memo1];
  memo5 = obj.useMemo(() => {
    if (null != first9) {
      if (memo1) {
        let prop = tmp.integrationTypesConfig;
        const _Object = Object;
        if (prop == null) {
          prop = {};
        }
        const entries1 = entries(prop);
        const found = entries1.filter((item) => {
          let tmp;
          [, tmp] = item;
          return null != tmp.oauth2InstallParams;
        });
        const mapped = found.map((item) => {
          let tmp;
          [tmp, ] = item;
          return Number(tmp);
        });
      }
      return [];
    }
  }, items17);
  ref2 = obj.useRef(null);
  const items18 = [clientId, first7, memo4, requestedScopes, first1];
  const effect3 = obj.useEffect(() => {
    if (first1 !== ref2.current) {
      ref2.current = first1;
      const obj = { step: first1, application_id: clientId, integration_type: first7, scopes: requestedScopes, permissions: memo4.toString() };
      const trackWithMetadata = AppAnalyticsUtils.trackWithMetadata;
      const OAUTH2_AUTHORIZE_STEP_VIEWED = connectedAccountProvider.OAUTH2_AUTHORIZE_STEP_VIEWED;
      AppAnalyticsUtils;
      trackWithMetadata(OAUTH2_AUTHORIZE_STEP_VIEWED, obj);
    }
  }, items18);
  const items19 = [memo5, first9, memo1, integrationType, first1, connectedAccountProvider, tmp26];
  const effect4 = obj.useEffect(() => {
    let tmp = null != first1;
    if (!tmp) {
      tmp = memo1 && null == first9;
      const tmp2 = memo1 && null == first9;
    }
    if (!tmp) {
      if (null != connectedAccountProvider) {
        if (!closure_34) {
          closure_21(disclosures.CONNECT_ACCOUNT);
        }
      }
      if (memo5.length > 1) {
        closure_21(disclosures.SELECT_INSTALL_TYPE);
      } else if (1 === memo5.length) {
        closure_36(memo5[0]);
        closure_21(disclosures.AUTHORIZE_SCOPES);
      } else if (null != integrationType) {
        closure_36(tmp9);
        closure_21(disclosures.AUTHORIZE_SCOPES);
      } else {
        closure_36(ApplicationIntegrationType.ApplicationIntegrationType.GUILD_INSTALL);
        closure_21(disclosures.AUTHORIZE_SCOPES);
      }
    }
  }, items19);
  const items20 = [first1, tmp26, integrationType];
  const effect5 = obj.useEffect(() => {
    const tmp2 = first1 === disclosures.CONNECT_ACCOUNT && closure_34;
    if (tmp2) {
      let USER_INSTALL = integrationType;
      if (integrationType == null) {
        USER_INSTALL = ApplicationIntegrationType.ApplicationIntegrationType.USER_INSTALL;
      }
      closure_36(USER_INSTALL);
      closure_21(disclosures.AUTHORIZE_SCOPES);
    }
  }, items20);
  const items21 = [callback3, requestedScopes, memo4, first7, first, first2];
  const effect6 = obj.useEffect(function() {
    if (null != first7) {
      if (null == first) {
        if (null == first2) {
          if (tmp === ApplicationIntegrationType.ApplicationIntegrationType.USER_INSTALL) {
            closure_27(null);
            closure_29(null);
          }
          const found = requestedScopes.filter((item) => {
            const ValidScopes = clientId(codeChallenge[20]).ValidScopes;
            return !ValidScopes.includes(item);
          });
          if (0 === requestedScopes.length) {
            const _Error3 = Error;
            const self5 = this;
            const self6 = this;
            const error = new Error("No scopes were provided.");
            closure_23(error);
          } else if (found.length > 0) {
            const _Error2 = Error;
            const _HermesInternal = HermesInternal;
            const self3 = this;
            const self4 = this;
            const error1 = new Error("Invalid scope: " + found[0]);
            closure_23(error1);
          } else {
            const tmp27Result = permissions2;
            if (tmp27Result.containsDisallowedPermission(memo4)) {
              const _Error = Error;
              const self = this;
              const self2 = this;
              const error2 = new Error("Invalid permission(s) provided.");
              closure_23(error2);
            } else {
              callback3();
            }
          }
        }
      }
    }
  }, items21);
  const items22 = [isScreenReaderEnabled, first8];
  const callback4 = obj.useCallback(() => {
    const tmp = isScreenReaderEnabled && !first8;
    if (tmp) {
      closure_38(true);
    }
  }, items22);
  if (first1 === disclosures.AUTHORIZE_SCOPES) {
    let num = 1;
    if (memo5.length > 1) {
      const SELECT_INSTALL_TYPE = tmp79.SELECT_INSTALL_TYPE;
      AUTHORIZE_SCOPES = SELECT_INSTALL_TYPE;
      tmp80 = SELECT_INSTALL_TYPE;
    }
    const items23 = [tmp80, dismissOAuthModal, callback1];
    callback5 = obj.useCallback(() => {
      if (null != AUTHORIZE_SCOPES) {
        closure_21(tmp);
      } else {
        callback1({ isAuthorized: false, canceled: true });
        if (dismissOAuthModal != null) {
          dismissOAuthModal();
        }
      }
      return true;
    }, items23);
    let tmp82 = responseType;
    responseType(tmp18[35])(callback5, flag4);
    const callback6 = obj.useCallback((arg0) => {
      closure_36(arg0);
      closure_19(null);
      closure_21(disclosures.AUTHORIZE_SCOPES);
    }, []);
    let _Error = Error;
    if (first2 instanceof Error) {
      let obj4 = { body: loading(tmp82(tmp18[36]), obj5), goBackOrCancel: callback5, footer: loading(Button2, obj6), obscured: false };
      obj5 = { error: first2.message, hideFooter: true };
      obj6 = {
        size: "lg",
        text: intl3.string(tmp21(tmp18[38]).t.cpT0Cq),
        onPress() {
              return callback5();
            }
      };
      Button2 = tmp21(tmp18[37]).Button;
      intl3 = tmp21(tmp18[38]).intl;
      return obj4;
    } else {
      let str4 = "";
      if (null != connectedAccountProvider) {
        const tmp82Result = tmp82(tmp18[40]);
        const value = tmp82Result.get(connectedAccountProvider);
        let str5;
        class Spinner {
          constructor() {
            const obj = { style: loading.loading, children: loading(ActivityIndicator_ActivityIndicator.ActivityIndicator, {}) };
            return loading(View, obj);
          }
        }
        if (str5 == null) {
          str5 = "";
        }
        str4 = str5;
      }
      class Spinner {
        constructor() {
          const obj = { style: loading.loading, children: loading(ActivityIndicator_ActivityIndicator.ActivityIndicator, {}) };
          return loading(View, obj);
        }
      }
      if (null === first1) {
        let obj7 = { body: loading(Spinner, {}), obscured: false };
        class Spinner {
          constructor() {
            const obj = { style: loading.loading, children: loading(ActivityIndicator_ActivityIndicator.ActivityIndicator, {}) };
            return loading(View, obj);
          }
        }
      } else {
        let tmp89;
        let flag9;
        let flag6;
        let flag7;
        let flag8;
        if (disclosures.CONNECT_ACCOUNT === first1) {
          let obj9 = { clientId, platformType: null, platformName: str4 };
          class Spinner {
            constructor() {
              const obj = { style: loading.loading, children: loading(ActivityIndicator_ActivityIndicator.ActivityIndicator, {}) };
              return loading(View, obj);
            }
          }
          tmp89 = loading(tmp82(tmp18[41]), obj9);
          flag9 = true;
          flag6 = false;
          flag7 = false;
          flag8 = false;
        } else if (disclosures.SELECT_INSTALL_TYPE === first1) {
          if (null == first9) {
            let obj10 = { body: loading(Spinner, {}), obscured: false };
            class Spinner {
              constructor() {
                const obj = { style: loading.loading, children: loading(ActivityIndicator_ActivityIndicator.ActivityIndicator, {}) };
                return loading(View, obj);
              }
            }
          } else {
            let obj11 = { application: first9, onSelect: null };
            class Spinner {
              constructor() {
                const obj = { style: loading.loading, children: loading(ActivityIndicator_ActivityIndicator.ActivityIndicator, {}) };
                return loading(View, obj);
              }
            }
            tmp89 = loading(tmp82(tmp18[42]), obj11);
            flag6 = false;
            flag7 = false;
            flag8 = false;
            flag9 = false;
          }
        } else if (disclosures.AUTHORIZE_SCOPES === first1) {
          if (null != first) {
            if (null != stateFromStores) {
              if (null != first7) {
                let obj12;
                let sorted;
                if (null == first2) {
                  obj12 = {};
                } else {
                  let _Error2 = Error;
                  obj12 = first2;
                }
                if (guilds != null) {
                  sorted = guilds.sort((name, name2) => {
                    const str = name.name;
                    const formatted = str.toLowerCase();
                    const str2 = name2.name;
                    return formatted.localeCompare(str2.toLowerCase());
                  });
                }
                class Spinner {
                  constructor() {
                    const obj = { style: loading.loading, children: loading(ActivityIndicator_ActivityIndicator.ActivityIndicator, {}) };
                    return loading(View, obj);
                  }
                }
                if (hasItem) {
                  hasItem = requestedScopes.includes(tmp21(tmp18[43]).OAuth2Scopes.WEBHOOK_INCOMING);
                }
                let tmp93 = hasItem;
                if (!tmp93) {
                  const tmp94 = first7 === clientId(tmp18[28]).ApplicationIntegrationType.GUILD_INSTALL;
                  if (tmp94) {
                    const hasItem1 = requestedScopes.includes(tmp21(tmp18[43]).OAuth2Scopes.BOT) || requestedScopes.includes(tmp21(tmp18[43]).OAuth2Scopes.APPLICATIONS_COMMANDS);
                    class Spinner {
                      constructor() {
                        const obj = { style: loading.loading, children: loading(ActivityIndicator_ActivityIndicator.ActivityIndicator, {}) };
                        return loading(View, obj);
                      }
                    }
                  }
                  tmp93 = tmp94;
                }
                let tmp99 = null;
                const tmp21Result14 = clientId(tmp18[44]);
                const isSocialLayerParentApplication = tmp21Result14.getIsSocialLayerParentApplication(first.application);
                if (null != stateFromStores1) {
                  tmp99 = null;
                  if (null == connectedAccountProvider || null != stateFromStores1) {
                    let obj13 = { platformType: stateFromStores1.type, platformName: null, connectedAccount: stateFromStores1, applicationName: first.application.name };
                    class Spinner {
                      constructor() {
                        const obj = { style: loading.loading, children: loading(ActivityIndicator_ActivityIndicator.ActivityIndicator, {}) };
                        return loading(View, obj);
                      }
                    }
                    tmp99 = loading(tmp21(tmp18[41]).ConnectedAccountCard, obj13);
                  }
                }
                const items24 = [tmp99, , , , ];
                let obj14 = { application: first.application, accountScopes };
                items24[1] = loading(tmp82(tmp18[45]), obj14);
                let obj15 = { application: first.application, accountScopes, requestedScopes, integrationType: first7, errors: obj12, isTrustedName: flag2 };
                const tmp82Result7 = tmp82(tmp18[46]);
                if (!flag2) {
                  flag2 = isSocialLayerParentApplication;
                }
                items24[2] = loading(tmp82Result7, obj15);
                let tmp97Result = null;
                if (tmp93) {
                  const items25 = [loading(tmp21(tmp18[47]).AuthorizeFormSeparator, {}), ];
                  const tmp82Result8 = tmp82(tmp18[48]);
                  class Spinner {
                    constructor() {
                      const obj = { style: loading.loading, children: loading(ActivityIndicator_ActivityIndicator.ActivityIndicator, {}) };
                      return loading(View, obj);
                    }
                  }
                  if (items26 == null) {
                    items26 = obj12[tmp21(undefined, tmp18[43]).OAuth2Scopes.APPLICATIONS_COMMANDS];
                  }
                  if (items26 == null) {
                    items26 = [];
                  }
                  const obj16 = { error: items26[0], selectedGuildId: first4, onGuildChange: tmpResult[1], guilds: sorted, disabled: tmp105 };
                  if (sorted == null) {
                    sorted = [];
                  }
                  const obj17 = { children: items25 };
                  tmp105 = "" !== first4 && true === flag;
                  items25[1] = loading(tmp82Result8, obj16);
                  tmp97Result = tmp97(tmp98, obj17);
                }
                items24[3] = tmp97Result;
                let tmp97Result3 = null;
                if (hasItem) {
                  const items27 = [loading(tmp21(tmp18[47]).AuthorizeFormSeparator, {}), ];
                  const tmp82Result9 = tmp82(tmp18[49]);
                  class Spinner {
                    constructor() {
                      const obj = { style: loading.loading, children: loading(ActivityIndicator_ActivityIndicator.ActivityIndicator, {}) };
                      return loading(View, obj);
                    }
                  }
                  if (items28 == null) {
                    items28 = [];
                  }
                  const obj18 = { children: items27 };
                  const obj19 = { error: items28[0], selectedChannelId: first5, selectedGuildId: first4, onChannelChange: tmpResult10[1] };
                  items27[1] = loading(tmp82Result9, obj19);
                  tmp97Result3 = tmp97(tmp98, obj18);
                }
                const obj20 = { children: items24 };
                items24[4] = tmp97Result3;
                const tmp97Result4 = closure_19(first, obj20);
                let hasItem2 = requestedScopes.includes(tmp21(tmp18[43]).OAuth2Scopes.BOT);
                if (hasItem2) {
                  const tmp17Result = redirectUri(tmp18[21]);
                  hasItem2 = !tmp17Result.equals(memo4, tmp17(tmp18[13]).NONE);
                }
                if (hasItem2) {
                  AUTHORIZE_BOT_PERMISSIONS = tmp79.AUTHORIZE_BOT_PERMISSIONS;
                }
                if (tmp93) {
                  tmp93 = null == memo;
                }
                if (!tmp93) {
                  if (hasItem) {
                    hasItem = null == first5;
                  }
                  tmp93 = hasItem;
                }
                if (!tmp93) {
                  tmp93 = !first8;
                }
                flag6 = true;
                flag8 = tmp93;
                flag7 = true;
                flag9 = true;
                tmp89 = tmp97Result4;
              }
            }
          }
          const obj21 = { body: null, obscured: false };
          class Spinner {
            constructor() {
              const obj = { style: loading.loading, children: loading(ActivityIndicator_ActivityIndicator.ActivityIndicator, {}) };
              return loading(View, obj);
            }
          }
          return obj21;
        } else {
          flag6 = true;
          flag7 = true;
          flag8 = false;
          class Spinner {
            constructor() {
              const obj = { style: loading.loading, children: loading(ActivityIndicator_ActivityIndicator.ActivityIndicator, {}) };
              return loading(View, obj);
            }
          }
          if (disclosures.AUTHORIZE_BOT_PERMISSIONS === first1) {
            if (null == first) {
              ({ body: loading(Spinner, {}), obscured: false });
              class Spinner {
                constructor() {
                  const obj = { style: loading.loading, children: loading(ActivityIndicator_ActivityIndicator.ActivityIndicator, {}) };
                  return loading(View, obj);
                }
              }
            } else {
              const obj23 = { application: first.application, permissions: null, deniedPermissions: first6, onPermissionsChange: tmp85, guild: memo };
              class Spinner {
                constructor() {
                  const obj = { style: loading.loading, children: loading(ActivityIndicator_ActivityIndicator.ActivityIndicator, {}) };
                  return loading(View, obj);
                }
              }
              tmp89 = loading(tmp82(tmp18[50]), obj23);
              flag6 = true;
              flag7 = true;
              flag8 = false;
              flag9 = true;
            }
          }
        }
        let tmp118Result;
        if (flag7) {
          if (tmp90 !== disclosures.AUTHORIZE_BOT_PERMISSIONS) {
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
                  const obj = { style: loading.loading, children: loading(ActivityIndicator_ActivityIndicator.ActivityIndicator, {}) };
                  return loading(View, obj);
                }
              }
              const obj24 = { application: first.application, scopes: requestedScopes, disclosures: first12, redirectUri: redirect_uri, approximateGuildCount: tmp121, isEmbeddedFlow: flag3, connectedAccount: stateFromStores1 };
              redirect_uri = first.redirect_uri;
              const tmp82Result10 = tmp82(tmp18[51]);
              if (redirect_uri == null) {
                redirect_uri = null;
              }
              tmp121 = null;
              if (undefined !== prop3) {
                tmp121 = prop3;
              }
              tmp118Result = tmp118(tmp82Result10, obj24);
            }
          }
        }
        class Spinner {
          constructor() {
            const obj = { style: loading.loading, children: loading(ActivityIndicator_ActivityIndicator.ActivityIndicator, {}) };
            return loading(View, obj);
          }
        }
        if (flag6) {
          flag6 = null != stateFromStores;
        }
        let tmp122;
        if (flag6) {
          const obj25 = { user: stateFromStores, application: null, accountScopes, bot: first.bot };
          class Spinner {
            constructor() {
              const obj = { style: loading.loading, children: loading(ActivityIndicator_ActivityIndicator.ActivityIndicator, {}) };
              return loading(View, obj);
            }
          }
          tmp122 = loading(tmp82(tmp18[52]), obj25);
        }
        const obj26 = { header: tmp122, body: tmp89, footer: tmp125(tmp126, obj34), appDetails: tmp118Result, backStep: tmp80, sendAuthorize: callback1, goBackOrCancel: callback5, allContentSeen: first8, setAllContentSeen: tmpResult13[1], hasContentBackground: flag9, obscured: result };
        tmp125 = loading;
        let tmp125Result4 = null;
        tmp126 = first;
        if (first1 !== disclosures.SELECT_INSTALL_TYPE) {
          tmp125Result4 = null;
          if (first1 !== disclosures.CONNECT_ACCOUNT) {
            const obj27 = { accessibilityElementsHidden: flag8 && !first8, importantForAccessibility: str6, children: tmp125(Button, obj31) };
            str6 = "auto";
            class Spinner {
              constructor() {
                const obj = { style: loading.loading, children: loading(ActivityIndicator_ActivityIndicator.ActivityIndicator, {}) };
                return loading(View, obj);
              }
            }
            if (flag8 && !first8) {
              str6 = "no-hide-descendants";
            }
            Button = tmp21(tmp18[37]).Button;
            if (null != tmp90) {
              const string = tmp21(tmp18[38]).intl.string;
              const t = tmp21(tmp18[38]).t;
              class Spinner {
                constructor() {
                  const obj = { style: loading.loading, children: loading(ActivityIndicator_ActivityIndicator.ActivityIndicator, {}) };
                  return loading(View, obj);
                }
              }
              const obj28 = {
                size: "lg",
                text: tmp134,
                icon: tmp125Result,
                iconPosition: "end",
                onPress() {
                              return closure_21(AUTHORIZE_BOT_PERMISSIONS);
                            },
                disabled: flag8,
                accessibilityActions: items29,
                onAccessibilityAction: callback4
              };
              tmp125Result = undefined;
              if (!first8) {
                if (flag8) {
                  const obj29 = { style: animatedStyle, children: tmp125(tmp82Result11, tmp137) };
                  const View2 = tmp82(tmp18[16]).View;
                  class Spinner {
                    constructor() {
                      const obj = { style: loading.loading, children: loading(ActivityIndicator_ActivityIndicator.ActivityIndicator, {}) };
                      return loading(View, obj);
                    }
                  }
                  let tmp138 = scopes;
                  const convert2 = scopes.convert;
                  tmp82Result11 = tmp82(tmp18[53]);
                  tmp137[0] = convert2.fromCodePoint(dismissOAuthModal);
                  tmp125Result = tmp125(View2, obj29);
                }
              }
              if (!flag8) {
                flag8 = result;
              }
              const obj30 = { name: "enable", label: intl2.string(clientId(tmp18[38]).t.eIL75W) };
              intl2 = tmp21(tmp18[38]).intl;
              items29 = [obj30];
              obj31 = obj28;
            } else {
              const string2 = tmp21(tmp18[38]).intl.string;
              const t2 = tmp21(tmp18[38]).t;
              class Spinner {
                constructor() {
                  const obj = { style: loading.loading, children: loading(ActivityIndicator_ActivityIndicator.ActivityIndicator, {}) };
                  return loading(View, obj);
                }
              }
              obj31 = {
                size: "lg",
                text: tmp128,
                onPress() {
                              closure_56(true);
                            },
                icon: tmp125Result3,
                iconPosition: "end",
                disabled: flag8 || result,
                loading: first3,
                accessibilityActions: items30,
                onAccessibilityAction: callback4
              };
              tmp125Result3 = undefined;
              if (!first8) {
                const obj32 = { style: animatedStyle, children: tmp125(tmp82Result12, tmp131) };
                View = tmp82(tmp18[16]).View;
                class Spinner {
                  constructor() {
                    const obj = { style: loading.loading, children: loading(ActivityIndicator_ActivityIndicator.ActivityIndicator, {}) };
                    return loading(View, obj);
                  }
                }
                const convert = scopes.convert;
                tmp82Result12 = tmp82(tmp18[53]);
                tmp131[0] = convert.fromCodePoint(dismissOAuthModal);
                tmp125Result3 = tmp125(View, obj32);
              }
              const obj33 = { name: "enable", label: intl.string(clientId(tmp18[38]).t.eIL75W) };
              intl = tmp21(tmp18[38]).intl;
              items30 = [obj33];
            }
            tmp125Result4 = tmp125(tmp142, obj27);
          }
        }
        return obj26;
      }
    }
  }
  if (first1 === disclosures.AUTHORIZE_BOT_PERMISSIONS) {
    AUTHORIZE_SCOPES = tmp79.AUTHORIZE_SCOPES;
    tmp80 = AUTHORIZE_SCOPES;
  }
};