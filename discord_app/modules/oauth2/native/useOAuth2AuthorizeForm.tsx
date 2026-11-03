// discord_app/modules/oauth2/native/useOAuth2AuthorizeForm.tsx
import BigFlagUtilsAll from "../../../../discord_common/js/shared/utils/BigFlagUtils.tsx";
import PermissionUtilsAll from "../../../utils/PermissionUtils.tsx";
import ApplicationIntegrationType from "../../../../discord_common/js/shared/shared-constants/ApplicationIntegrationType.tsx";
import AppAnalyticsUtils from "../../app_analytics/AppAnalyticsUtils.tsx";
import useBackPressHandlerDefault from "../../routing/native/useBackPressHandler.tsx";
import ApplicationActionCreatorsDefault from "../../applications/ApplicationActionCreators.tsx";
import ActivityIndicator_ActivityIndicator from "../../../design/components/ActivityIndicator/native/ActivityIndicator.native.tsx";
import Authorize from "../Authorize.tsx";
import scopes2 from "../scopes.tsx";
import SamsungManagerDefault from "../../samsung/native/SamsungManager.android.tsx";
import permissions2 from "../permissions.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import defaultImageSrcGenerator from "../../../../node_modules/.pnpm/@discordapp+twemoji@16.0.1/node_modules/@discordapp/twemoji/dist/twemoji.npm.js";
import AccessibilityStore from "../../a11y/AccessibilityStore.tsx";
import ApplicationRecord from "../../../records/ApplicationRecord.tsx";
import ConnectedAccountsStore from "../../../stores/ConnectedAccountsStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
let Constants = fn(9873);
({ EMOJI_POINTING_DOWN_CODE_POINT: map1, OAuth2Steps: closure_14 } = Constants);
Constants = fn(1072);
({ AnalyticEvents: closure_15, Endpoints: closure_16 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_17, Fragment: closure_18, jsxs: closure_19 } = jsxProd);
const createStyles = fn(5141);
let closure_20 = createStyles.createStyles({ loading: { flex: 1, alignSelf: "center", justifyContent: "center" } });
let closure_21 = { code: "(function useOAuth2AuthorizeFormTsx1(){let[shouldReduceMotion,withSequence,withTiming,Easing,withRepeat]=this.__closure;const TOTAL=500;if(shouldReduceMotion)return{};return{transform:[{translateY:withSequence(withTiming(-5,{duration:TOTAL/2,easing:Easing.inOut(Easing.quad)}),withRepeat(withTiming(5,{duration:TOTAL,easing:Easing.inOut(Easing.quad)}),-1,true))}]};})" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/oauth2/native/useOAuth2AuthorizeForm.tsx");

export default function useOAuth2AuthorizeForm(clientId) {
  clientId = clientId.clientId;
  _require = clientId;
  let responseType = clientId.responseType;
  importDefault = responseType;
  let redirectUri = clientId.redirectUri;
  importAll = redirectUri;
  let codeChallenge = clientId.codeChallenge;
  dependencyMap = codeChallenge;
  let codeChallengeMethod = clientId.codeChallengeMethod;
  asyncGeneratorStep = codeChallengeMethod;
  state = clientId.state;
  let text1 = state;
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
  let isScreenReaderEnabled;
  let memo1;
  let first8;
  closure_42 = undefined;
  let memo2;
  let requestedScopes;
  let memo4;
  let first9;
  closure_47 = undefined;
  let first11;
  closure_50 = undefined;
  let first12;
  closure_52 = undefined;
  let callback1;
  let callback2;
  closure_55 = undefined;
  closure_56 = undefined;
  let callback3;
  let memo5;
  let AUTHORIZE_SCOPES;
  let callback5;
  let AUTHORIZE_BOT_PERMISSIONS;
  const loading = first1();
  let tmp2 = text1(nonce.useState(null), 2);
  const first = tmp2[0];
  closure_19 = tmp2[1];
  let tmp4 = text1(nonce.useState(null), 2);
  first1 = tmp4[0];
  closure_21 = tmp4[1];
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
  const tmpResult = text1(nonce.useState(guildId), 2);
  first3 = tmpResult[0];
  closure_27 = tmp12;
  if (channelId == null) {
    channelId = null;
  }
  const tmpResult10 = text1(nonce.useState(channelId), 2);
  first4 = tmpResult10[0];
  closure_29 = tmp15;
  const tmpResult11 = text1(nonce.useState(PermissionUtilsAll.NONE), 2);
  first5 = tmpResult11[0];
  closure_31 = tmpResult11[1];
  const tmp8 = text1(nonce.useState(false), 2);
  items = [callbackWithoutPost];
  const stateFromStores = require("initialize").useStateFromStores(items, () => callbackWithoutPost.getCurrentUser());
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
  let obj2 = require("initialize");
  const items2 = [callback];
  const items3 = [connectedAccountProvider];
  const stateFromStores1 = require("initialize").useStateFromStores(items2, () => {
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
  const tmpResult12 = text1(nonce.useState(null), 2);
  first6 = tmpResult12[0];
  closure_36 = tmpResult12[1];
  const tmpResult13 = text1(nonce.useState(false), 2);
  first7 = tmpResult13[0];
  closure_38 = tmp30;
  const tmp20Result = require("initialize");
  const items4 = [permissions];
  const stateFromStores2 = require("initialize").useStateFromStores(items4, () => permissions.useReducedMotion);
  const tmp20Result8 = require("initialize");
  isScreenReaderEnabled = require("useIsScreenReaderEnabled").useIsScreenReaderEnabled();
  const tmp20Result9 = require("useIsScreenReaderEnabled");
  const items5 = [closure_21, stateFromStores2, require("../../../../_runtime/metro/01652__.js").withSequence, require("timing/timing").withTiming, require("../../../../_runtime/metro/01652__.js").Easing, require("../../../../_runtime/metro/01652__.js").withRepeat];
  _require = undefined;
  importDefault = undefined;
  importAll = undefined;
  dependencyMap = undefined;
  asyncGeneratorStep = undefined;
  [tmp33, tmp34, tmp35, tmp36, tmp37, tmp38] = items5;
  function useOAuth2AuthorizeFormTsx1() {
    if (closure_0) {
      let obj = {};
    } else {
      obj = { transform: null };
      const obj2 = { translateY: null };
      const obj3 = { duration: 250, easing: _undefined3.inOut(_undefined3.quad) };
      const obj4 = { duration: 500, easing: _undefined3.inOut(_undefined3.quad) };
      obj2.translateY = _undefined(_undefined2(-5, obj3), _undefined4(_undefined2(5, obj4), -1, true));
      items = [obj2];
      obj.transform = items;
      const tmp4 = _undefined2(-5, obj3);
    }
    return obj;
  }
  const items6 = [tmp34, tmp35, tmp36, tmp37, tmp38];
  useOAuth2AuthorizeFormTsx1.__closure = items6;
  useOAuth2AuthorizeFormTsx1.__workletHash = 9714380430000;
  useOAuth2AuthorizeFormTsx1.__initData = tmp33;
  const animatedStyle = require("../../../../_runtime/metro/01652__.js").useAnimatedStyle(useOAuth2AuthorizeFormTsx1);
  let length;
  if (scopes != null) {
    length = scopes.length;
  }
  const items7 = [length, redirectUri, integrationType];
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
      tmp = null == c2;
    }
    return tmp;
  }, items7);
  const tmpResult14 = text1(nonce.useState(null), 2);
  first8 = tmpResult14[0];
  closure_42 = tmpResult14[1];
  const items8 = [clientId, memo1];
  const effect = obj.useEffect(() => {
    if (memo1) {
      const application = ApplicationActionCreatorsDefault.fetchApplication(closure_0);
      application.then((result) => closure_1_42(integrationType.createFromServer(result)));
    }
  }, items8);
  let prop;
  if (first8 != null) {
    prop = first8.integrationTypesConfig;
  }
  const items9 = [prop, first6];
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
  }, items9);
  let scopes1;
  if (memo2 != null) {
    scopes1 = memo2.scopes;
  }
  const items10 = [scopes1, scopes, memo1];
  const memo3 = obj.useMemo(() => {
    if (memo1) {
      scopes = undefined;
      if (memo2 != null) {
        scopes = memo2.scopes;
      }
      items = scopes;
    } else {
      items = scopes;
    }
    if (items == null) {
      items = [];
    }
    const filterScopesResult = Authorize.filterScopes(items);
    closure_0 = filterScopesResult;
    const OrderedAccountScopes = scopes2.OrderedAccountScopes;
    return { requestedScopes: filterScopesResult, accountScopes: OrderedAccountScopes.filter((item) => filterScopesResult.includes(item)) };
  }, items10);
  requestedScopes = memo3.requestedScopes;
  const accountScopes = memo3.accountScopes;
  let permissions1;
  if (memo2 != null) {
    permissions1 = memo2.permissions;
  }
  const items11 = [permissions1, permissions, memo1];
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
  }, items11);
  const tmpResult15 = text1(nonce.useState(false), 2);
  first9 = tmpResult15[0];
  closure_47 = tmpResult15[1];
  const items12 = [clientId];
  const effect1 = obj.useEffect(() => {
    SamsungManagerDefault.checkIfOAuthRequest(closure_0).then(closure_47);
  }, items12);
  const tmp20Result10 = require("../../../../_runtime/metro/01652__.js");
  const first10 = text1(nonce.useState(null), 2)[0];
  let tmp57 = state;
  if (first9) {
    tmp20(1282);
    const text = `${obj7.getAPIBaseURL(false)}/v6${flag5.OAUTH2_AUTHORIZE_SAMSUNG_CALLBACK}`;
    importAll = text;
    if (tmp60) {
      tmp56(tmp20(1266).v4());
      const tmp20Result12 = tmp20(1266);
    }
    let tmp62 = state;
    if (null != first10) {
      text1 = state;
      if (state == null) {
        text1 = `SA${tmp55}`;
      }
      tmp62 = text1;
    }
    tmp57 = tmp62;
    redirectUri = text;
    tmp60 = null == state && null == first10;
  }
  nonce.useRef(false);
  let items13 = disclosures;
  if (disclosures == null) {
    items13 = [];
  }
  const tmpResult17 = text1(nonce.useState(items13), 2);
  first11 = tmpResult17[0];
  closure_50 = tmp66;
  const tmpResult18 = text1(nonce.useState(null != disclosures), 2);
  first12 = tmpResult18[0];
  closure_52 = tmp69;
  const items14 = [clientId, disclosures, tmpResult17[1], tmpResult18[1]];
  const effect2 = obj.useEffect(() => {
    closure_0 = async function _doGetDisclosures() {
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp7 === 3) {
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
              closure_1 = tmp4;
              closure_0 = tmp8;
              closure_128_0 = undefined;
              disclosures = undefined;
              let allAcked;
              let body;
              ref.current = true;
              c3 = 2;
              c4 = 3;
              c5 = 1;
              const obj5 = { value: application_id(_undefined3[25]).getDisclosures(closure_0), done: false };
              return obj5;
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
              closure_1_52(!allAcked);
              closure_1_50(disclosures);
              c3 = 1;
              c3 = 0;
              ref.current = false;
              c5 = 3;
            }
            c3 = 0;
            ref.current = false;
            c5 = 3;
            const obj = { value, done: true };
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
  }, items14);
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
  const tmpResult16 = text1(nonce.useState(null), 2);
  let result = require("Utils").isContentClassificationRestricted(prop1, nsfwAllowed);
  _require = asyncGeneratorStep(async (clientId) => {
    if (nonce === 2) {
      nonce = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp7 === 3) {
      if (clientId === 1) {
        throw value;
      } else if (clientId === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        nonce = 2;
        if (0 === state) {
          if (clientId === 1) {
            nonce = 3;
            throw value;
          } else if (clientId === 2) {
            nonce = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            const redirectUri = tmp4;
            const responseType = tmp8;
            closure_129_0 = undefined;
            closure_129_1 = undefined;
            closure_129_2 = undefined;
            ({ isAuthorized: closure_129_0, overrideSuccessCallback: closure_129_1, canceled: closure_129_2 } = clientId);
            closure_129_3 = undefined;
            let body;
            state = 1;
            nonce = 1;
            return { value: "flexDirection", done: true };
          }
        } else {
          if (1 === tmp8) {
            if (clientId === 1) {
              nonce = 3;
              throw value;
            } else if (clientId === 2) {
              nonce = 3;
              const obj6 = { value, done: true };
              return obj6;
            } else if (null != callbackWithoutPost) {
              closure_1_24(true);
              callbackWithoutPost(closure_129_0);
              if (dismissOAuthModal != null) {
                dismissOAuthModal();
              }
              nonce = 3;
              const obj7 = { value: undefined, done: true };
              return obj7;
            } else if (null != integrationType) {
              let codeChallengeMethod = 2;
              closure_1_24(true);
              const obj9 = { authorize: closure_129_0, clientId, scopes, responseType, redirectUri, codeChallenge, codeChallengeMethod, state, nonce, permissions: null, guildId: null, channelId: null, integrationType: null, connectedAccountProvider: null };
              const obj8 = clientId(codeChallenge[27]);
              obj9.permissions = redirectUri(codeChallenge[21]).remove(memo4, first5);
              let tmp108;
              if (integrationType === clientId(codeChallenge[28]).ApplicationIntegrationType.GUILD_INSTALL) {
                if (null != first3) {
                  tmp108 = first3;
                }
              }
              obj9.guildId = tmp108;
              let tmp116;
              if (integrationType === clientId(codeChallenge[28]).ApplicationIntegrationType.GUILD_INSTALL) {
                if (null != first4) {
                  tmp116 = first4;
                }
              }
              obj9.channelId = tmp116;
              obj9.integrationType = integrationType;
              obj9.connectedAccountProvider = connectedAccountProvider;
              state = 4;
              nonce = 1;
              const obj11 = { value: obj8.authorize(obj9), done: false };
              return obj11;
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
                if (clientId === 1) {
                  nonce = 3;
                  throw value;
                } else if (clientId === 2) {
                  codeChallengeMethod = 0;
                  closure_1_24(false);
                  nonce = 3;
                  const obj12 = { value, done: true };
                  return obj12;
                } else {
                  closure_129_3 = value;
                  if (closure_129_0) {
                    const response = responseType(codeChallenge[29]).fetch();
                    const obj4 = responseType(codeChallenge[29]);
                    state = 5;
                    nonce = 1;
                    const obj13 = { value: clientId(codeChallenge[25]).ackDisclosures(clientId, first11), done: false };
                    return obj13;
                  }
                }
              } else {
                if (5 === tmp8) {
                  if (clientId === 1) {
                    nonce = 3;
                    throw value;
                  } else if (clientId === 2) {
                    codeChallengeMethod = 0;
                    closure_1_24(false);
                    nonce = 3;
                    const obj14 = { value, done: true };
                    return obj14;
                  }
                } else if (clientId === 1) {
                  nonce = 3;
                  throw value;
                } else if (clientId === 2) {
                  codeChallengeMethod = 0;
                  closure_1_24(false);
                  nonce = 3;
                  const obj = { value, done: true };
                  return obj;
                } else if (callback != null) {
                  const obj15 = {};
                  const merged = Object.assign(closure_129_3);
                  obj15.canceled = closure_129_2;
                  let application;
                  if (application != null) {
                    application = application.application;
                  }
                  obj15.application = application;
                  obj15.guild = guild;
                  obj15.wasDeepLink = wasDeepLink;
                  tmp10(obj15);
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
                const obj16 = { value: promise, done: false };
                return obj16;
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
  });
  const items15 = [first6, callbackWithoutPost, clientId, requestedScopes, responseType, redirectUri, codeChallenge, codeChallengeMethod, tmp57, nonce, memo4, first5, first3, first4, first11, dismissOAuthModal, callback, flag5, , , ];
  let application;
  if (first != null) {
    application = first.application;
  }
  items15[18] = application;
  items15[19] = memo;
  items15[20] = connectedAccountProvider;
  callback1 = obj.useCallback(function(arg0) {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }, items15);
  const items16 = [callback1];
  callback2 = obj.useCallback((isAuthorized) => new Promise((arg0) => {
    isAuthorized = arg0;
    return callback1({
      isAuthorized,
      overrideSuccessCallback(arg0) {
        closure_0(arg0);
      }
    });
  }), items16);
  const items17 = [clientId, first9, responseType, callback1, callback2, tmp57, dismissOAuthModal, requestedScopes];
  closure_55 = obj.useCallback((isAuthorized) => {
    if (first9) {
      const result = _undefined(_undefined3[22]).showConnectionDisclaimer();
      const obj2 = _undefined(_undefined3[22]);
      const nextPromise = result.then(() => _undefined(9876).getAccountUrlAndAuthCode());
      const nextPromise1 = result.then(() => _undefined(9876).getAccountUrlAndAuthCode()).then((result) => {
        [tmp, tmp2] = result;
        items = [tmp2, isAuthorized(9881).startSamsungAuthorization(isAuthorized, requestedScopes, _undefined, tmp, text1)];
        return Promise.all(items);
      });
      const nextPromise2 = result.then(() => _undefined(9876).getAccountUrlAndAuthCode()).then((result) => {
        [tmp, tmp2] = result;
        items = [tmp2, isAuthorized(9881).startSamsungAuthorization(isAuthorized, requestedScopes, _undefined, tmp, text1)];
        return Promise.all(items);
      }).then((result) => {
        [tmp, ] = result;
        items = [tmp, callback2(closure_0)];
        return Promise.all(items);
      });
      const nextPromise3 = result.then(() => _undefined(9876).getAccountUrlAndAuthCode()).then((result) => {
        [tmp, tmp2] = result;
        items = [tmp2, isAuthorized(9881).startSamsungAuthorization(isAuthorized, requestedScopes, _undefined, tmp, text1)];
        return Promise.all(items);
      }).then((result) => {
        [tmp, ] = result;
        items = [tmp, callback2(closure_0)];
        return Promise.all(items);
      }).then((result) => {
        [tmp, tmp2] = result;
        return c1(9876).finishSamsungAuthorization(tmp, tmp2, text1);
      });
      result.then(() => _undefined(9876).getAccountUrlAndAuthCode()).then((result) => {
        [tmp, tmp2] = result;
        items = [tmp2, isAuthorized(9881).startSamsungAuthorization(isAuthorized, requestedScopes, _undefined, tmp, text1)];
        return Promise.all(items);
      }).then((result) => {
        [tmp, ] = result;
        items = [tmp, callback2(closure_0)];
        return Promise.all(items);
      }).then((result) => {
        [tmp, tmp2] = result;
        return c1(9876).finishSamsungAuthorization(tmp, tmp2, text1);
      }).then(() => {
        let tmp;
        if (dismissOAuthModal != null) {
          tmp = dismissOAuthModal();
        }
        return tmp;
      }).catch((error) => {
        _undefined(1242).captureException(error);
      });
      const nextPromise4 = result.then(() => _undefined(9876).getAccountUrlAndAuthCode()).then((result) => {
        [tmp, tmp2] = result;
        items = [tmp2, isAuthorized(9881).startSamsungAuthorization(isAuthorized, requestedScopes, _undefined, tmp, text1)];
        return Promise.all(items);
      }).then((result) => {
        [tmp, ] = result;
        items = [tmp, callback2(closure_0)];
        return Promise.all(items);
      }).then((result) => {
        [tmp, tmp2] = result;
        return c1(9876).finishSamsungAuthorization(tmp, tmp2, text1);
      }).then(() => {
        let tmp;
        if (dismissOAuthModal != null) {
          tmp = dismissOAuthModal();
        }
        return tmp;
      });
    } else {
      const obj = { isAuthorized };
      callback1(obj);
    }
  }, items17);
  closure_56 = obj.useRef(false);
  const items18 = [clientId, requestedScopes, responseType, redirectUri, codeChallenge, codeChallengeMethod, tmp57, first6, connectedAccountProvider, _prompt, callback1, first12, nsfwAllowed];
  callback3 = obj.useCallback(asyncGeneratorStep(async () => {
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp7 === 3) {
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
              let codeChallengeMethod = 2;
              const obj5 = { clientId: _undefined, scopes: requestedScopes, responseType, redirectUri, codeChallenge, codeChallengeMethod, state: text1, integrationType: null, connectedAccountProvider: null };
              _undefined = first6;
              if (first6 == null) {
                _undefined = undefined;
              }
              obj5.integrationType = _undefined;
              obj5.connectedAccountProvider = connectedAccountProvider;
              c5 = 3;
              c6 = 1;
              const obj6 = { value: _undefined(codeChallenge[27]).fetchAuthorization(obj5), done: false };
              return obj6;
            }
          }
        } else if (1 !== tmp8) {
          if (2 === tmp8) {
            codeChallengeMethod = 1;
            body = codeChallenge.body;
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
            codeChallengeMethod = 0;
            closure_130_56.current = false;
            c6 = 3;
            const obj7 = { value, done: true };
            return obj7;
          } else {
            closure_129_0 = value;
            closure_129_1 = _undefined(codeChallenge[31]).convertOAuth2Authorization(closure_129_0);
            closure_130_19(closure_129_1);
            const obj9 = _undefined(codeChallenge[31]);
            closure_129_2 = _undefined(codeChallenge[26]).isContentClassificationRestricted(closure_129_1.application.content_classification, closure_130_32);
            let tmp11 = closure_130_7 !== _undefined(codeChallenge[32]).OAuth2Prompts.NONE;
            if (!tmp11) {
              tmp11 = !closure_129_0.authorized;
            }
            if (!tmp11) {
              tmp11 = closure_130_51;
            }
            if (!tmp11) {
              tmp11 = closure_129_2;
            }
            if (!tmp11) {
              closure_130_53({ isAuthorized: true });
            }
            const obj10 = _undefined(codeChallenge[26]);
            const obj8 = { application_id: closure_129_0.application.id };
            _undefined(codeChallenge[33]).trackWithMetadata(closure_1_15.OAUTH2_AUTHORIZE_VIEWED, obj8);
            codeChallengeMethod = 1;
            codeChallengeMethod = 0;
            closure_130_56.current = false;
            const obj = _undefined(codeChallenge[33]);
          }
        }
        codeChallengeMethod = 0;
        closure_130_56.current = false;
        throw codeChallenge;
      } catch (tmp62) {
        codeChallenge = tmp62;
        if (tmp5 === codeChallengeMethod) {
          c6 = tmp3;
          throw tmp62;
        } else if (tmp2 === tmp64) {
          c5 = tmp2;
        } else {
          c5 = tmp;
        }
      }
    }
  }), items18);
  const items19 = [first8, memo1];
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
  }, items19);
  nonce.useRef(null);
  const items20 = [clientId, first6, memo4, requestedScopes, first1];
  const effect3 = obj.useEffect(() => {
    if (first1 !== ref2.current) {
      ref2.current = first1;
      const obj2 = { step: first1, application_id, integration_type: first6, scopes: requestedScopes, permissions: memo4.toString() };
      AppAnalyticsUtils.trackWithMetadata(closure_2_15.OAUTH2_AUTHORIZE_STEP_VIEWED, obj2);
    }
  }, items20);
  const items21 = [memo5, first8, memo1, integrationType, first1, connectedAccountProvider, null == connectedAccountProvider || null != stateFromStores1];
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
      } else if (1 === memo5.length) {
        closure_36(memo5[0]);
        closure_21(constants.AUTHORIZE_SCOPES);
      } else if (null != integrationType) {
        closure_36(tmp9);
        closure_21(constants.AUTHORIZE_SCOPES);
      } else {
        closure_36(ApplicationIntegrationType.ApplicationIntegrationType.GUILD_INSTALL);
        closure_21(constants.AUTHORIZE_SCOPES);
      }
    }
  }, items21);
  const items22 = [first1, null == connectedAccountProvider || null != stateFromStores1, integrationType];
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
  }, items22);
  const items23 = [callback3, requestedScopes, memo4, first6, first, first2];
  const effect6 = obj.useEffect(() => {
    if (null != first6) {
      if (null == first) {
        if (null == first2) {
          if (tmp === ApplicationIntegrationType.ApplicationIntegrationType.USER_INSTALL) {
            closure_27(null);
            closure_29(null);
          }
          const found = requestedScopes.filter((item) => {
            const ValidScopes = application_id(_undefined3[20]).ValidScopes;
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
              callback3();
            }
            tmp33Result = permissions2;
          }
        }
      }
    }
  }, items23);
  const items24 = [isScreenReaderEnabled, first7];
  const callback4 = obj.useCallback(() => {
    let tmp = isScreenReaderEnabled;
    if (isScreenReaderEnabled) {
      tmp = !first7;
    }
    if (tmp) {
      closure_38(true);
    }
  }, items24);
  if (first1 === disclosures.AUTHORIZE_SCOPES) {
    if (memo5.length > 1) {
      const SELECT_INSTALL_TYPE = tmp84.SELECT_INSTALL_TYPE;
      AUTHORIZE_SCOPES = SELECT_INSTALL_TYPE;
      let tmp85 = SELECT_INSTALL_TYPE;
    }
    const items25 = [tmp85, dismissOAuthModal, callback1];
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
    }, items25);
    useBackPressHandlerDefault(callback5, flag4);
    const callback6 = obj.useCallback((arg0) => {
      closure_36(arg0);
      closure_19(null);
      closure_21(constants.AUTHORIZE_SCOPES);
    }, []);
    let _Error = Error;
    if (first2 instanceof Error) {
      let obj3 = { body: null, goBackOrCancel: null, footer: null, obscured: false };
      let obj4 = { error: first2.message, hideFooter: true };
      obj3.body = loading(tmp87(9885), obj4);
      obj3.goBackOrCancel = callback5;
      let obj5 = { size: "lg", text: null, onPress: null };
      const intl = tmp20(1113).intl;
      obj5.text = intl.string(tmp20(1113).t.cpT0Cq);
      obj5.onPress = function onPress() {
        return callback5();
      };
      obj3.footer = loading(tmp20(5754).Button, obj5);
      return obj3;
    } else {
      let str4 = "";
      if (null != connectedAccountProvider) {
        value = tmp87(6694).get(connectedAccountProvider);
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
        const tmp87Result = tmp87(6694);
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
        let obj6 = { body: null, obscured: false };
      } else {
        if (tmp84.CONNECT_ACCOUNT === first1) {
          let obj8 = { clientId, platformType: null, platformName: null };
          class Spinner {
            constructor() {
              obj = { style: closure_17.loading, children: jsx(closure_0(closure_3[39]).ActivityIndicator, {}) };
              return jsx(View, obj);
            }
          }
          obj8.platformName = str4;
          let tmp94 = loading(tmp87(9887), obj8);
          let flag9 = true;
          let flag6 = false;
          let flag7 = false;
          let flag8 = false;
        } else if (tmp84.SELECT_INSTALL_TYPE === first1) {
          if (null == first8) {
            { body: null, obscured: false }.body = loading(Spinner, {});
            class Spinner {
              constructor() {
                obj = { style: closure_17.loading, children: jsx(closure_0(closure_3[39]).ActivityIndicator, {}) };
                return jsx(View, obj);
              }
            }
            let obj9 = { body: null, obscured: false };
          } else {
            let obj10 = { application: first8, onSelect: null };
            class Spinner {
              constructor() {
                obj = { style: closure_17.loading, children: jsx(closure_0(closure_3[39]).ActivityIndicator, {}) };
                return jsx(View, obj);
              }
            }
            tmp94 = loading(tmp87(9889), obj10);
            flag6 = false;
            flag7 = false;
            flag8 = false;
            flag9 = false;
          }
        } else if (tmp84.AUTHORIZE_SCOPES === first1) {
          if (null != first) {
            if (null != stateFromStores) {
              if (null != first6) {
                if (null == first2) {
                  let obj11 = {};
                } else {
                  let _Error2 = Error;
                  obj11 = first2;
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
                  hasItem = requestedScopes.includes(tmp20(9034).OAuth2Scopes.WEBHOOK_INCOMING);
                }
                let tmp98 = hasItem;
                if (!hasItem) {
                  const tmp99 = first6 === tmp20(5771).ApplicationIntegrationType.GUILD_INSTALL;
                  if (tmp99) {
                    let hasItem1 = requestedScopes.includes(tmp20(9034).OAuth2Scopes.BOT);
                    if (!hasItem1) {
                      hasItem1 = requestedScopes.includes(tmp20(9034).OAuth2Scopes.APPLICATIONS_COMMANDS);
                    }
                    class Spinner {
                      constructor() {
                        obj = { style: closure_17.loading, children: jsx(closure_0(closure_3[39]).ActivityIndicator, {}) };
                        return jsx(View, obj);
                      }
                    }
                  }
                  tmp98 = tmp99;
                }
                let tmp104 = null;
                const isSocialLayerParentApplication = tmp20(9880).getIsSocialLayerParentApplication(first.application);
                if (null != stateFromStores1) {
                  tmp104 = null;
                  if (tmp25) {
                    let obj12 = { platformType: stateFromStores1.type, platformName: null, connectedAccount: null, applicationName: null };
                    class Spinner {
                      constructor() {
                        obj = { style: closure_17.loading, children: jsx(closure_0(closure_3[39]).ActivityIndicator, {}) };
                        return jsx(View, obj);
                      }
                    }
                    obj12.connectedAccount = stateFromStores1;
                    obj12.applicationName = first.application.name;
                    tmp104 = loading(tmp20(9887).ConnectedAccountCard, obj12);
                  }
                }
                const items26 = [tmp104, , , , ];
                let obj13 = { application: first.application, accountScopes };
                items26[1] = loading(tmp87(14744), obj13);
                let obj14 = { application: first.application, accountScopes, requestedScopes, integrationType: first6, errors: obj11, isTrustedName: null };
                const tmp20Result14 = tmp20(9880);
                if (!flag2) {
                  flag2 = isSocialLayerParentApplication;
                }
                obj14.isTrustedName = flag2;
                items26[2] = loading(tmp87(14748), obj14);
                let tmp102Result = null;
                if (tmp98) {
                  const items27 = [tmp106(tmp20(14747).AuthorizeFormSeparator, {}), ];
                  class Spinner {
                    constructor() {
                      obj = { style: closure_17.loading, children: jsx(closure_0(closure_3[39]).ActivityIndicator, {}) };
                      return jsx(View, obj);
                    }
                  }
                  if (items28 == null) {
                    items28 = obj11[tmp20(undefined, 9034).OAuth2Scopes.APPLICATIONS_COMMANDS];
                  }
                  if (items28 == null) {
                    items28 = [];
                  }
                  let obj15 = { error: items28[0], selectedGuildId: first3, onGuildChange: tmp12, guilds: null, disabled: null };
                  if (sorted == null) {
                    sorted = [];
                  }
                  obj15.guilds = sorted;
                  let tmp110 = "" !== first3;
                  if (tmp110) {
                    tmp110 = true === flag;
                  }
                  let obj16 = { children: null };
                  obj15.disabled = tmp110;
                  items27[1] = tmp106(tmp87(14749), obj15);
                  obj16.children = items27;
                  tmp102Result = tmp102(tmp103, obj16);
                  const tmp87Result6 = tmp87(14749);
                }
                items26[3] = tmp102Result;
                let tmp102Result3 = null;
                if (hasItem) {
                  const items29 = [tmp106(tmp20(14747).AuthorizeFormSeparator, {}), ];
                  class Spinner {
                    constructor() {
                      obj = { style: closure_17.loading, children: jsx(closure_0(closure_3[39]).ActivityIndicator, {}) };
                      return jsx(View, obj);
                    }
                  }
                  if (items30 == null) {
                    items30 = [];
                  }
                  const obj17 = { children: null };
                  const obj18 = { error: items30[0], selectedChannelId: first4, selectedGuildId: first3, onChannelChange: tmp15 };
                  items29[1] = tmp106(tmp87(14750), obj18);
                  obj17.children = items29;
                  tmp102Result3 = tmp102(tmp103, obj17);
                  const tmp87Result7 = tmp87(14750);
                }
                const obj19 = { children: null };
                items26[4] = tmp102Result3;
                obj19.children = items26;
                const tmp87Result5 = tmp87(14748);
                let hasItem2 = requestedScopes.includes(tmp20(9034).OAuth2Scopes.BOT);
                if (hasItem2) {
                  hasItem2 = !tmp16(1084).equals(memo4, tmp16(5078).NONE);
                  const tmp16Result = tmp16(1084);
                }
                if (hasItem2) {
                  AUTHORIZE_BOT_PERMISSIONS = tmp84.AUTHORIZE_BOT_PERMISSIONS;
                }
                if (tmp98) {
                  tmp98 = null == memo;
                }
                if (!tmp98) {
                  if (hasItem) {
                    hasItem = null == first4;
                  }
                  tmp98 = hasItem;
                }
                if (!tmp98) {
                  tmp98 = !first7;
                }
                flag6 = true;
                flag8 = tmp98;
                flag7 = true;
                flag9 = true;
                tmp94 = closure_19(first, obj19);
                const tmp102Result4 = closure_19(first, obj19);
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
          if (tmp84.AUTHORIZE_BOT_PERMISSIONS === first1) {
            if (null == first) {
              { body: null, obscured: false }.body = loading(Spinner, {});
              class Spinner {
                constructor() {
                  obj = { style: closure_17.loading, children: jsx(closure_0(closure_3[39]).ActivityIndicator, {}) };
                  return jsx(View, obj);
                }
              }
              const obj21 = { body: null, obscured: false };
            } else {
              const obj22 = { application: first.application, permissions: null, deniedPermissions: null, onPermissionsChange: null, guild: null };
              class Spinner {
                constructor() {
                  obj = { style: closure_17.loading, children: jsx(closure_0(closure_3[39]).ActivityIndicator, {}) };
                  return jsx(View, obj);
                }
              }
              obj22.deniedPermissions = first5;
              obj22.onPermissionsChange = tmp90;
              obj22.guild = memo;
              tmp94 = loading(tmp87(14751), obj22);
              flag6 = true;
              flag7 = true;
              flag8 = false;
              flag9 = true;
            }
          }
        }
        let tmp123Result;
        if (flag7) {
          if (tmp95 !== tmp84.AUTHORIZE_BOT_PERMISSIONS) {
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
              const obj23 = { application: first.application, scopes: requestedScopes, disclosures: first11, redirectUri: null, approximateGuildCount: null, isEmbeddedFlow: null, connectedAccount: null };
              let redirect_uri = first.redirect_uri;
              if (redirect_uri == null) {
                redirect_uri = null;
              }
              obj23.redirectUri = redirect_uri;
              let tmp126 = null;
              if (undefined !== prop3) {
                tmp126 = prop3;
              }
              obj23.approximateGuildCount = tmp126;
              obj23.isEmbeddedFlow = flag3;
              obj23.connectedAccount = stateFromStores1;
              tmp123Result = tmp123(tmp87(14753), obj23);
              const tmp87Result8 = tmp87(14753);
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
        let tmp127;
        if (flag6) {
          const obj24 = { user: stateFromStores, application: null, accountScopes: null, bot: null };
          class Spinner {
            constructor() {
              obj = { style: closure_17.loading, children: jsx(closure_0(closure_3[39]).ActivityIndicator, {}) };
              return jsx(View, obj);
            }
          }
          obj24.accountScopes = accountScopes;
          obj24.bot = first.bot;
          tmp127 = loading(tmp87(14756), obj24);
        }
        let tmp129 = flag8;
        if (flag8) {
          tmp129 = !first7;
        }
        const obj25 = { header: tmp127, body: tmp94, footer: null, appDetails: null, backStep: null, sendAuthorize: null, goBackOrCancel: null, allContentSeen: null, setAllContentSeen: null, hasContentBackground: null, obscured: null };
        let tmp132 = null;
        if (first1 !== tmp84.SELECT_INSTALL_TYPE) {
          tmp132 = null;
          if (first1 !== tmp84.CONNECT_ACCOUNT) {
            const obj26 = { accessibilityElementsHidden: tmp129, importantForAccessibility: null, children: null };
            let str6 = "auto";
            class Spinner {
              constructor() {
                obj = { style: closure_17.loading, children: jsx(closure_0(closure_3[39]).ActivityIndicator, {}) };
                return jsx(View, obj);
              }
            }
            if (tmp129) {
              str6 = "no-hide-descendants";
            }
            obj26.importantForAccessibility = str6;
            if (null != tmp95) {
              const string = tmp20(1113).intl.string;
              const t2 = tmp20(1113).t;
              class Spinner {
                constructor() {
                  obj = { style: closure_17.loading, children: jsx(closure_0(closure_3[39]).ActivityIndicator, {}) };
                  return jsx(View, obj);
                }
              }
            } else {
              const string2 = tmp20(1113).intl.string;
              const t = tmp20(1113).t;
              class Spinner {
                constructor() {
                  obj = { style: closure_17.loading, children: jsx(closure_0(closure_3[39]).ActivityIndicator, {}) };
                  return jsx(View, obj);
                }
              }
            }
            obj26.children = tmp130(tmp20(5754).Button, tmp133);
            tmp130(tmp137, obj26);
          }
        }
        const obj27 = { children: tmp132 };
        obj25.footer = loading(first, obj27);
        obj25.appDetails = tmp123Result;
        obj25.backStep = tmp85;
        obj25.sendAuthorize = callback1;
        obj25.goBackOrCancel = callback5;
        obj25.allContentSeen = first7;
        obj25.setAllContentSeen = tmp30;
        obj25.hasContentBackground = flag9;
        obj25.obscured = result;
        return obj25;
      }
    }
  }
  if (first1 === disclosures.AUTHORIZE_BOT_PERMISSIONS) {
    AUTHORIZE_SCOPES = tmp84.AUTHORIZE_SCOPES;
    tmp85 = AUTHORIZE_SCOPES;
  }
};