// _runtime/metro/04549__.js
let CUSTOMER,
  Cardinal,
  FLOW_ENDPOINTS,
  MANDATE_TYPE_ENUM,
  _Array2,
  _Error3,
  _Object2,
  _Object3,
  _Promise21,
  _Promise4,
  _addModalBackdropResult,
  _bus2,
  _bus3,
  _bus4,
  _bus5,
  _bus6,
  _bus7,
  _cardinalEvents,
  _catch,
  _checkForVerifyCardError,
  _client2,
  _clientPromise,
  _clientPromise1,
  _closeWindowResult,
  _closeWindowResult1,
  _createCardinalConfigurationOptions,
  _createPromise1,
  _data,
  _destructor,
  _destructor2,
  _destructor3,
  _destructor4,
  _emitResult,
  _events,
  _fields,
  _formatAuthResponseResult,
  _formatLookupData,
  _formatLookupDataResult,
  _formatVerifyCardOptions,
  _frameService2,
  _frameServicePromise,
  _framework,
  _getDefaultConfigResult,
  _googlePayVersion,
  _isGraphQLEnabledResult,
  _isNaN,
  _isRedirectFlow,
  _lineItems,
  _loadCardinalScriptResult,
  _lookupPaymentMethod,
  _modalBackdrop,
  _modalBackdrop2,
  _navigator,
  _onLookupComplete,
  _presentChallengeResult,
  _promise,
  _reloadThreeDSecureResult,
  _resetStateResult,
  _riskCorrelationId,
  _setBusEventsResult,
  _setRejectedResult,
  _setResolvedResult,
  _setupV1ElementsResult,
  _shouldUseLegacyFlow,
  _songbirdPromise,
  _teardownRegistry,
  _teardownV1ElementsResult,
  _v1Bus,
  _verifyCardPromisePlus,
  _verifyCardPromisePlus2,
  _verifyCardPromisePlus3,
  _waitForClientResult,
  _writeDispatchFrameResult,
  acsUrl,
  addFrameResult,
  allPromises,
  appendChildResult,
  applePayWeb,
  arr1,
  bankDetails,
  bindResult,
  btLpPayerId,
  cancelVerifyCard,
  checkOriginResult,
  closeResult,
  closure_12,
  combined5,
  constants,
  continueResult,
  creditCards,
  currency,
  definePropertyResult,
  description,
  determineStatusResult,
  dfReferenceId,
  displayExitButton,
  emitResult,
  emitResult1,
  endpoint,
  error2,
  errorHandler2,
  everyResult,
  features,
  fields,
  findRootErrorResult,
  fingerprint,
  flag2,
  flag3,
  flag4,
  flag5,
  fn3,
  frameElement,
  hasItem,
  hasOwnProperty,
  iframe,
  ignoreOnLookupCompleteRequirement,
  invalidFieldKeys,
  isArray,
  isDebug,
  keys1,
  level_0,
  liabilityShiftPossible,
  limitBroadcastToFramesArray,
  listener5,
  listeners,
  loadHandler2,
  lookupResponse,
  mandate,
  mapped,
  nextPromise3,
  noopHandler,
  num15,
  number,
  obj1,
  obj17,
  offResult,
  onResult,
  onResult1,
  onResult2,
  onResult3,
  onResult4,
  onResult5,
  onResult6,
  open,
  openResult,
  orderId,
  payment,
  paymentType,
  paymentType2,
  plaid,
  platform,
  popupBridge,
  prepareLookupResult,
  promise1,
  promise2,
  prop1,
  query,
  queryItems,
  queryify,
  redirectResult,
  reject4,
  reject4Result,
  reject5,
  reject5Result,
  removeChildResult,
  removeFrameResult,
  replace,
  requestResult1,
  resolveResult1,
  result1,
  result2,
  result3,
  runWebLogin,
  sandbox,
  self10,
  self11,
  self12,
  sendEvent,
  sendEventResult,
  sendEventResult1,
  sendEventResult2,
  sendResult,
  sepaDebitMandateDetail,
  sessionId2,
  setAlertResult,
  setCardinalListenerResult,
  setUpEventListeners,
  setUpEventListenersResult,
  settings,
  setup,
  setupSongbirdResult,
  shippingAddress2,
  shippingAddress3,
  shippingOptions,
  singleUseTokenId,
  size1,
  slice2,
  someResult,
  someResult1,
  startPollingResult,
  str10,
  str11,
  str12,
  str13,
  str14,
  str15,
  str16,
  str17,
  str18,
  str19,
  str20,
  str21,
  str22,
  str23,
  str24,
  str25,
  str26,
  str27,
  str28,
  str29,
  str30,
  str9,
  subscribers,
  supportedCardTypes,
  targetFrames,
  teardownResult,
  text2,
  then,
  threeDSecureInfo,
  tmp30,
  tmp31,
  tmp33,
  tmp34,
  tmp35,
  tmp36,
  tmp37,
  tmp38,
  tmp39,
  tmp41,
  tmp42,
  tmp43,
  tmp45,
  tmp47,
  tmp51,
  tmp52,
  tmp53,
  tmp55,
  tmp56,
  tmp57,
  tmp58,
  tmp59,
  tmp61,
  tmp62,
  tmp63,
  tmp67,
  tmp68,
  tmp69,
  tmp70,
  tmp71,
  totalPrice,
  triggerResult,
  vault,
  verifyDomainResult,
  visaCheckout;

let _window;
let fn = () => {
  let handler = function r(arg0, arg1, arg2) {
    let fn;
    let tmp2;
    const f150338 = function (arg0) {
      closure_0 = tmp2;
      if (!closure_1[closure_0[closure_0][1][arg0] || arg0]) {
        let _exports;
        if (closure_0[closure_0[closure_0][1][arg0] || arg0]) {
          const obj = { exports: {} };
          closure_1[closure_0[closure_0][1][arg0] || arg0] = obj;
          const first = tmp[tmp2][0];
          const _exports2 = obj.exports;
          const fn = f150338;
          const _exports3 = obj.exports;
          first.call(_exports2, fn, obj, _exports3, closure_0, closure_0, closure_1, closure_2);
        } else {
          let tmp4 = typeof closure_0 === "function";
          if (typeof closure_0 === "function") {
            tmp4 = closure_0;
          }
          if (tmp4) {
            _exports = tmp4(tmp2, true);
          } else if (closure_3) {
            _exports = tmp5(tmp2, true);
          } else {
            const _Error = Error;
            const self = this;
            const self2 = this;
            const error = new Error("Cannot find module '" + tmp2 + "'");
            error.code = "MODULE_NOT_FOUND";
            throw error;
          }
        }
        return _exports;
      }
      _exports = closure_1[tmp2].exports;
    };
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    let tmp = typeof fn === "function";
    if (typeof fn === "function") {
      tmp = fn;
    }
    let closure_3 = tmp;
    let num = 0;
    if (0 < arg2.length) {
      while (true) {
        tmp2 = arg2[num];
        closure_0 = tmp2;
        let tmp3 = num;
        if (!arg1[tmp2]) {
          if (arg0[tmp2]) {
            let obj = { exports: {} };
            arg1[tmp2] = obj;
            let first = arg0[tmp2][0];
            let _exports = obj.exports;
            fn = f150338;
            let _exports2 = obj.exports;
            let tmp10 = closure_0;
            let callResult = first.call(_exports, fn, obj, _exports2, tmp10, arg0, arg1, arg2);
          } else {
            let tmp4 = typeof fn === "function";
            if (typeof fn === "function") {
              tmp4 = fn;
            }
            if (tmp4) {
              let tmp4Result = tmp4(tmp2, true);
            } else if (!tmp) {
              break;
            } else {
              let tmpResult = tmp(tmp2, true);
            }
          }
          num = num + 1;
        }
        let _exports3 = arg1[tmp2].exports;
      }
      const tmp5 = globalThis;
      let _Error = Error;
      const str = "Cannot find module '";
      let self = this;
      const str2 = "'";
      let self2 = this;
      let error = new Error("Cannot find module '" + tmp2 + "'");
      const str3 = "MODULE_NOT_FOUND";
      error.code = "MODULE_NOT_FOUND";
      throw error;
    }
    return function o(arg0, arg1) {
      closure_0 = arg0;
      if (!closure_1[arg0]) {
        let fn;
        const tmp2 = closure_0;
        if (closure_0[arg0]) {
          let obj = { exports: {} };
          closure_1[arg0] = obj;
          let first = tmp2[arg0][0];
          let _exports = obj.exports;
          fn = f150338;
          let _exports2 = obj.exports;
          first.call(_exports, fn, obj, _exports2, closure_0, tmp2, closure_1, closure_2);
        } else {
          let tmp3 = typeof fn === "function";
          if (typeof fn === "function") {
            tmp3 = fn;
          }
          let tmp4 = arg1;
          if (!tmp4) {
            if (tmp3) {
              return tmp3(arg0, true);
            }
          }
          if (closure_3) {
            return tmp5(arg0, true);
          } else {
            let _Error = Error;
            let self = this;
            let self2 = this;
            let error = new Error("Cannot find module '" + arg0 + "'");
            error.code = "MODULE_NOT_FOUND";
            throw error;
          }
        }
      }
      return closure_1[arg0].exports;
    };
  };
  let obj = {
    1: null,
    2: null,
    3: null,
    4: null,
    5: null,
    6: null,
    7: null,
    8: null,
    9: null,
    10: null,
    11: null,
    12: null,
    13: null,
    14: null,
    15: null,
    16: null,
    17: null,
    18: null,
    19: null,
    20: null,
    21: null,
    22: null,
    23: null,
    24: null,
    25: null,
    26: null,
    27: null,
    28: null,
    29: null,
    30: null,
    31: null,
    32: null,
    33: null,
    34: null,
    35: null,
    36: null,
    37: null,
    38: null,
    39: null,
    40: null,
    41: null,
    42: null,
    43: null,
    44: null,
    45: null,
    46: null,
    47: null,
    48: null,
    49: null,
    50: null,
    51: null,
    52: null,
    53: null,
    54: null,
    55: null,
    56: null,
    57: null,
    58: null,
    59: null,
    60: null,
    61: null,
    62: null,
    63: null,
    64: null,
    65: null,
    66: null,
    67: null,
    68: null,
    69: null,
    70: null,
    71: null,
    72: null,
    73: null,
    74: null,
    75: null,
    76: null,
    77: null,
    78: null,
    79: null,
    80: null,
    81: null,
    82: null,
    83: null,
    84: null,
    85: null,
    86: null,
    87: null,
    88: null,
    89: null,
    90: null,
    91: null,
    92: null,
    93: null,
    94: null,
    95: null,
    96: null,
    97: null,
    98: null,
    99: null,
    100: null,
    101: null,
    102: null,
    103: null,
    104: null,
    105: null,
    106: null,
    107: null,
    108: null,
    109: null,
    110: null,
    111: null,
    112: null,
    113: null,
    114: null,
    115: null,
    116: null,
    117: null,
    118: null,
    119: null,
    120: null,
    121: null,
    122: null,
    123: null,
    124: null,
    125: null,
    126: null,
    127: null,
    128: null,
    129: null,
    130: null,
    131: null,
    132: null,
    133: null,
    134: null,
    135: null,
    136: null,
    137: null,
    138: null,
    139: null,
    140: null,
    141: null,
    142: null,
    143: null,
    144: null,
    145: null,
    146: null,
    147: null,
    148: null,
    149: null,
    150: null,
    151: null,
    152: null,
    153: null,
    154: null,
    155: null,
    156: null,
    157: null,
    158: null,
    159: null,
    160: null,
    161: null,
    162: null,
    163: null,
    164: null,
    165: null,
    166: null,
    167: null,
    168: null,
    169: null,
    170: null,
    171: null,
    172: null,
    173: null,
    174: null,
    175: null,
    176: null,
    177: null,
    178: null,
    179: null,
    180: null,
    181: null,
    182: null,
    183: null,
    184: null,
    185: null,
    186: null,
    187: null,
    188: null,
    189: null,
    190: null,
    191: null,
    192: null,
    193: null,
    194: null,
    195: null,
    196: null,
    197: null,
    198: null,
    199: null,
    200: null,
    201: null,
    202: null,
    203: null,
    204: null,
    205: null,
    206: null,
    207: null,
    208: null,
    209: null,
    210: null,
    211: null,
    212: null,
    213: null,
    214: null,
    215: null,
    216: null,
    217: null,
    218: null,
    219: null,
    220: null,
    221: null,
    222: null,
    223: null,
    224: null,
    225: null,
    226: null,
    227: null,
    228: null,
    229: null,
    230: null,
    231: null,
    232: null,
    233: null,
    234: null,
    235: null,
    236: null,
    237: null,
    238: null,
    239: null,
    240: null,
    241: null,
    242: null,
    243: null,
    244: null,
    245: null,
    246: null,
    247: null,
    248: null,
  };
  let items = [
    (arg0, arg1, arg2) => {
      function loadScript(forceScriptReload) {
        closure_0 = forceScriptReload;
        const json = JSON.stringify(forceScriptReload);
        if (!forceScriptReload.forceScriptReload) {
          if (closure_0[json]) {
            return closure_0[json];
          }
        }
        let element = <script />;
        const tmp4 = forceScriptReload.dataAttributes || {};
        let closure_2 = tmp4;
        let head = forceScriptReload.container;
        if (!head) {
          const _document = document;
          head = document.head;
        }
        element.src = forceScriptReload.src;
        element.id = forceScriptReload.id || "";
        element.async = true;
        if (forceScriptReload.type) {
          const concat = "".concat;
          let attr = element.setAttribute("type", "".concat(forceScriptReload.type));
        }
        if (forceScriptReload.crossorigin) {
          const concat2 = "".concat;
          const attr1 = element.setAttribute("crossorigin", "".concat(forceScriptReload.crossorigin));
        }
        const keys = Object.keys(tmp4);
        const item = keys.forEach((item) => {
          const setAttribute = element.setAttribute;
          const combined = "data-".concat(item);
          const attr = setAttribute(combined, "".concat(closure_2[item]));
        });
        const promise = new Promise((arg0, arg1) => {
          let closure_1;
          closure_0 = arg0;
          element = arg1;
          const listener = element.addEventListener("load", () => {
            closure_0(element);
          });
          const listener1 = element.addEventListener("error", () => {
            const error = new Error("".concat(closure_0.src, " failed to load."));
            closure_1(error);
          });
          const listener2 = element.addEventListener("abort", () => {
            const error = new Error("".concat(closure_0.src, " has aborted."));
            closure_1(error);
          });
          head.appendChild(element);
        });
        closure_0[json] = promise;
        return promise;
      }
      let closure_0 = {};
      loadScript.clearCache = () => {
        closure_0 = {};
      };
      module.exports = loadScript;
    },
    {},
  ];
  obj[1] = items;
  let items1 = [
    (arg0, arg1, arg2) => {
      module.exports = global("./dist/load-script");
    },
    { "./dist/load-script": 1 },
  ];
  obj[2] = items1;
  let items2 = [
    (arg0, arg1, arg2) => {
      module.exports = function isAndroid(arg0) {
        let userAgent = arg0;
        if (!userAgent) {
          const _window = window;
          userAgent = window.navigator.userAgent;
        }
        const obj = /Android/i;
        return obj.test(userAgent);
      };
    },
    {},
  ];
  obj[3] = items2;
  let items3 = [
    (arg0, arg1, arg2) => {
      module.exports = function isChromeOS(arg0) {
        let userAgent = arg0;
        if (!userAgent) {
          const _window = window;
          userAgent = window.navigator.userAgent;
        }
        const obj = /CrOS/i;
        return obj.test(userAgent);
      };
    },
    {},
  ];
  obj[4] = items3;
  let items4 = [
    (arg0, arg1, arg2) => {
      let closure_0 = global("./is-edge");
      let closure_1 = global("./is-samsung");
      let closure_2 = global("./is-duckduckgo");
      let closure_3 = global("./is-opera");
      let closure_4 = global("./is-silk");
      module.exports = function isChrome(arg0) {
        let userAgent = arg0;
        if (!userAgent) {
          const _window = window;
          userAgent = window.navigator.userAgent;
        }
        const tmp2 =
          (-1 === userAgent.indexOf("Chrome") && -1 === userAgent.indexOf("CriOS")) ||
          closure_0(userAgent) ||
          closure_1(userAgent) ||
          closure_2(userAgent) ||
          closure_3(userAgent) ||
          closure_4(userAgent);
        return !tmp2;
      };
    },
    { "./is-duckduckgo": 6, "./is-edge": 7, "./is-opera": 16, "./is-samsung": 17, "./is-silk": 18 },
  ];
  obj[5] = items4;
  let items5 = [
    (arg0, arg1, arg2) => {
      module.exports = function isDuckDuckGo(arg0) {
        let userAgent = arg0;
        if (!userAgent) {
          const _window = window;
          userAgent = window.navigator.userAgent;
        }
        return -1 !== userAgent.indexOf("DuckDuckGo/");
      };
    },
    {},
  ];
  obj[6] = items5;
  let items6 = [
    (arg0, arg1, arg2) => {
      module.exports = function isEdge(arg0) {
        let userAgent = arg0;
        if (!userAgent) {
          const _window = window;
          userAgent = window.navigator.userAgent;
        }
        const tmp2 = -1 !== userAgent.indexOf("Edge/") || -1 !== userAgent.indexOf("Edg/");
        return tmp2;
      };
    },
    {},
  ];
  obj[7] = items6;
  let items7 = [
    (arg0, arg1, arg2) => {
      module.exports = function isFirefox(arg0) {
        let userAgent = arg0;
        if (!userAgent) {
          const _window = window;
          userAgent = window.navigator.userAgent;
        }
        const obj = /Firefox/i;
        return obj.test(userAgent);
      };
    },
    {},
  ];
  obj[8] = items7;
  const items8 = [
    (arg0, arg1, arg2) => {
      module.exports = function isIosFirefox(arg0) {
        let userAgent = arg0;
        if (!userAgent) {
          const _window = window;
          userAgent = window.navigator.userAgent;
        }
        const obj = /FxiOS/i;
        return obj.test(userAgent);
      };
    },
    {},
  ];
  obj[9] = items8;
  const items9 = [
    (arg0, arg1, arg2) => {
      let closure_0 = global("./is-ios");
      module.exports = function isIosGoogleSearchApp(arg0) {
        let userAgent = arg0;
        if (!userAgent) {
          const _window = window;
          userAgent = window.navigator.userAgent;
        }
        let isMatch = closure_0(userAgent);
        if (isMatch) {
          const obj = /\bGSA\b/;
          isMatch = obj.test(userAgent);
        }
        return isMatch;
      };
    },
    { "./is-ios": 14 },
  ];
  obj[10] = items9;
  const items10 = [
    (arg0, arg1, arg2) => {
      let closure_0 = global("./is-ios");
      let closure_1 = global("./is-ios-firefox");
      const re2 = /webkit/i;
      module.exports = function isIosSafari(arg0) {
        let userAgent = arg0;
        if (!userAgent) {
          const _window = window;
          userAgent = window.navigator.userAgent;
        }
        const isMatch =
          closure_0(userAgent) &&
          re2.test(userAgent) &&
          userAgent.indexOf("CriOS") <= -1 &&
          !closure_1(userAgent) &&
          userAgent.indexOf("FBAN") <= -1;
        return isMatch;
      };
    },
    { "./is-ios": 14, "./is-ios-firefox": 9 },
  ];
  obj[11] = items10;
  const items11 = [
    (arg0, arg1, arg2) => {
      let closure_0 = global("./is-ios");
      let closure_1 = global("./is-ios-google-search-app");
      module.exports = function isIosWebview(arg0) {
        let userAgent = arg0;
        if (!userAgent) {
          const _window = window;
          userAgent = window.navigator.userAgent;
        }
        let tmp2 = closure_0(userAgent);
        if (tmp2) {
          let isMatch = closure_1(userAgent);
          if (!isMatch) {
            const obj = /.+AppleWebKit(?!.*Safari)/i;
            isMatch = obj.test(userAgent);
          }
          tmp2 = isMatch;
        }
        return tmp2;
      };
    },
    { "./is-ios": 14, "./is-ios-google-search-app": 10 },
  ];
  obj[12] = items11;
  const items12 = [
    (arg0, arg1, arg2) => {
      let closure_0 = global("./is-ios-webview");
      module.exports = function isIosWKWebview(arg0, arg1) {
        let visible = arg1;
        if (undefined === arg1) {
          const _window = window;
          visible = window.statusbar.visible;
        }
        const tmp2 = closure_0(arg0) && visible;
        return tmp2;
      };
    },
    { "./is-ios-webview": 12 },
  ];
  obj[13] = items12;
  const items13 = [
    (arg0, arg1, arg2) => {
      let closure_0 = global("./is-ipados");
      module.exports = function isIos(arg0, arg1, arg2) {
        let flag = arg1;
        if (undefined === arg1) {
          flag = true;
        }
        let userAgent = arg0;
        if (!userAgent) {
          const _window = window;
          userAgent = window.navigator.userAgent;
        }
        const obj = /iPhone|iPod|iPad/i;
        const isMatch = obj.test(userAgent);
        let tmp3 = isMatch;
        if (flag) {
          tmp3 = isMatch || closure_0(userAgent, arg2);
          const tmp4 = isMatch || closure_0(userAgent, arg2);
        }
        return tmp3;
      };
    },
    { "./is-ipados": 15 },
  ];
  obj[14] = items13;
  const items14 = [
    (arg0, arg1, arg2) => {
      module.exports = function isIpadOS(arg0, arg1) {
        let userAgent = arg0;
        if (!userAgent) {
          const _window = window;
          userAgent = window.navigator.userAgent;
        }
        let _document = arg1;
        if (!_document) {
          const _window2 = window;
          _document = window.document;
        }
        const obj = /Mac|iPad/i;
        const isMatch = obj.test(userAgent) && "ontouchend" in _document;
        return isMatch;
      };
    },
    {},
  ];
  obj[15] = items14;
  const items15 = [
    (arg0, arg1, arg2) => {
      module.exports = function isOpera(arg0) {
        let userAgent = arg0;
        if (!userAgent) {
          const _window = window;
          userAgent = window.navigator.userAgent;
        }
        const tmp2 =
          -1 !== userAgent.indexOf("OPR/") || -1 !== userAgent.indexOf("Opera/") || -1 !== userAgent.indexOf("OPT/");
        return tmp2;
      };
    },
    {},
  ];
  obj[16] = items15;
  const items16 = [
    (arg0, arg1, arg2) => {
      module.exports = function isSamsungBrowser(arg0) {
        let userAgent = arg0;
        if (!userAgent) {
          const _window = window;
          userAgent = window.navigator.userAgent;
        }
        const obj = /SamsungBrowser/i;
        return obj.test(userAgent);
      };
    },
    {},
  ];
  obj[17] = items16;
  const items17 = [
    (arg0, arg1, arg2) => {
      module.exports = function isSilk(arg0) {
        let userAgent = arg0;
        if (!userAgent) {
          const _window = window;
          userAgent = window.navigator.userAgent;
        }
        return -1 !== userAgent.indexOf("Silk/");
      };
    },
    {},
  ];
  obj[18] = items17;
  const items18 = [
    (arg0, arg1, arg2) => {
      let closure_0 = global("./is-android");
      let closure_1 = global("./is-ios-firefox");
      let closure_2 = global("./is-ios-webview");
      let closure_3 = global("./is-chrome");
      let closure_4 = global("./is-samsung");
      let closure_5 = global("./is-duckduckgo");
      module.exports = function supportsPopups(arg0) {
        let userAgent = arg0;
        if (!userAgent) {
          const _window = window;
          userAgent = window.navigator.userAgent;
        }
        let tmp2 = closure_2(userAgent) || closure_1(userAgent);
        if (!tmp2) {
          let userAgent2 = userAgent;
          if (!userAgent2) {
            const _window2 = window;
            userAgent2 = window.navigator.userAgent;
          }
          let isMatch = closure_0(userAgent2);
          if (isMatch) {
            const obj = /Version\/[\d.]+/i;
            isMatch = obj.test(userAgent2);
          }
          if (isMatch) {
            let userAgent1 = userAgent2;
            if (!userAgent1) {
              const _window3 = window;
              userAgent1 = window.navigator.userAgent;
            }
            isMatch = userAgent1.indexOf("Opera Mini") <= -1;
          }
          if (isMatch) {
            isMatch = !closure_5(userAgent2);
          }
          tmp2 = isMatch;
        }
        if (!tmp2) {
          let userAgent3 = userAgent;
          if (!userAgent3) {
            const _window4 = window;
            userAgent3 = window.navigator.userAgent;
          }
          tmp2 = userAgent3.indexOf("Opera Mini") > -1;
        }
        if (!tmp2) {
          let str3 = userAgent;
          if (!str3) {
            const _window5 = window;
            str3 = window.navigator.userAgent;
          }
          const match = str3.match(/CriOS\/(\d+)\./);
          let tmp13 = match;
          if (tmp13) {
            const _parseInt = parseInt;
            tmp13 = parseInt(match[1], 10) < 48;
          }
          tmp2 = tmp13;
        }
        if (!tmp2) {
          let isMatch1 = !closure_3(userAgent);
          closure_3(userAgent);
          if (isMatch1) {
            isMatch1 = !closure_4(userAgent);
          }
          if (isMatch1) {
            const obj2 = /samsung/i;
            isMatch1 = obj2.test(userAgent);
          }
          tmp2 = isMatch1;
        }
        return !tmp2;
      };
    },
    {
      "./is-android": 3,
      "./is-chrome": 5,
      "./is-duckduckgo": 6,
      "./is-ios-firefox": 9,
      "./is-ios-webview": 12,
      "./is-samsung": 17,
    },
  ];
  obj[19] = items18;
  const items19 = [
    (arg0, arg1, arg2) => {
      module.exports = global("./dist/is-android");
    },
    { "./dist/is-android": 3 },
  ];
  obj[20] = items19;
  const items20 = [
    (arg0, arg1, arg2) => {
      module.exports = global("./dist/is-chrome-os");
    },
    { "./dist/is-chrome-os": 4 },
  ];
  obj[21] = items20;
  const items21 = [
    (arg0, arg1, arg2) => {
      module.exports = global("./dist/is-chrome");
    },
    { "./dist/is-chrome": 5 },
  ];
  obj[22] = items21;
  const items22 = [
    (arg0, arg1, arg2) => {
      module.exports = global("./dist/is-firefox");
    },
    { "./dist/is-firefox": 8 },
  ];
  obj[23] = items22;
  const items23 = [
    (arg0, arg1, arg2) => {
      module.exports = global("./dist/is-ios-safari");
    },
    { "./dist/is-ios-safari": 11 },
  ];
  obj[24] = items23;
  const items24 = [
    (arg0, arg1, arg2) => {
      module.exports = global("./dist/is-ios-webview");
    },
    { "./dist/is-ios-webview": 12 },
  ];
  obj[25] = items24;
  const items25 = [
    (arg0, arg1, arg2) => {
      module.exports = global("./dist/is-ios-wkwebview");
    },
    { "./dist/is-ios-wkwebview": 13 },
  ];
  obj[26] = items25;
  const items26 = [
    (arg0, arg1, arg2) => {
      module.exports = global("./dist/is-ios");
    },
    { "./dist/is-ios": 14 },
  ];
  obj[27] = items26;
  const items27 = [
    (arg0, arg1, arg2) => {
      module.exports = global("./dist/is-samsung");
    },
    { "./dist/is-samsung": 17 },
  ];
  obj[28] = items27;
  const items28 = [
    (arg0, arg1, arg2) => {
      module.exports = global("./dist/supports-popups");
    },
    { "./dist/supports-popups": 19 },
  ];
  obj[29] = items28;
  const items29 = [
    (arg0, arg1, arg2) => {
      class EventEmitter {
        constructor() {
          this._events = {};
          return;
        }
        on(arg0, arg1) {
          _events = this._events;
          if (this._events[global]) {
            arr2 = _events[global];
            arr1 = arr2.push(module);
          } else {
            items = [];
            items[0] = module;
            _events[global] = items;
          }
          return;
        }
        off(arg0, arg1) {
          arr = this._events[global];
          if (arr) {
            tmp = module;
            num = 1;
            spliceResult = arr.splice(arr.indexOf(module), 1);
          }
          return;
        }
        _emit(arg0) {
          items = [];
          closure_0 = items;
          num = 1;
          if (1 < arguments.length) {
            do {
              items[num - 1] = arguments[num];
              num = num + 1;
              length = arguments.length;
            } while (num < length);
          }
          arr2 = this._events[global];
          if (arr2) {
            item = arr2.forEach(() => {
              /* body not rendered: F154221 */
            });
          }
          return;
        }
        hasListener(arg0) {
          arr = this._events[global];
          tmp = arr;
          if (tmp) {
            num = 0;
            tmp = arr.length > 0;
          }
          return tmp;
        }
        static createChild(arg0) {
          obj = { constructor: global };
          global.prototype = Object.create(EventEmitter.prototype, obj);
          return;
        }
      }
      module.exports = EventEmitter;
    },
    {},
  ];
  obj[30] = items29;
  const items30 = [
    (arg0, arg1, arg2) => {
      let _Promise = null;
      if (typeof Promise !== "undefined") {
        _Promise = Promise;
      }
      class ExtendedPromise {
        constructor(arg0) {
          self = this;
          self = this;
          if (typeof global !== "function") {
            obj = ExtendedPromise;
            self2 = this;
            self3 = this;
            promise1 = new ExtendedPromise.Promise(() => {
              /* body not rendered: F154222 */
            });
            tmp2 = promise1;
            self._promise = promise1;
            tmp3 = global || {};
            self._onResolve = tmp3.onResolve || obj.defaultOnResolve;
            self._onReject = tmp3.onReject || obj.defaultOnReject;
            if (obj.shouldCatchExceptions(tmp3)) {
              _promise = self._promise;
              catchPromise = _promise.catch(function () {
                /* body not rendered: F154223 */
              });
            }
            _resetStateResult = self._resetState();
          } else {
            tmp6 = ExtendedPromise;
            self4 = this;
            self5 = this;
            tmp7 = global;
            promise2 = new ExtendedPromise.Promise(global);
            tmp9 = promise2;
            self._promise = promise2;
          }
          return;
        }
        static defaultOnResolve(arg0) {
          _Promise = ExtendedPromise.Promise;
          return _Promise.resolve(global);
        }
        static defaultOnReject(arg0) {
          _Promise = ExtendedPromise.Promise;
          return _Promise.reject(global);
        }
        static setPromise(arg0) {
          ExtendedPromise.Promise = global;
          return;
        }
        static shouldCatchExceptions(arg0) {
          _Boolean = Boolean;
          if (global.hasOwnProperty("suppressUnhandledPromiseMessage")) {
            _BooleanResult = _Boolean(global.suppressUnhandledPromiseMessage);
          } else {
            tmp = ExtendedPromise;
            _BooleanResult = _Boolean(ExtendedPromise.suppressUnhandledPromiseMessage);
          }
          return _BooleanResult;
        }
        static all(arg0) {
          _Promise = ExtendedPromise.Promise;
          return _Promise.all(global);
        }
        static allSettled(arg0) {
          _Promise = ExtendedPromise.Promise;
          return _Promise.allSettled(global);
        }
        static race(arg0) {
          _Promise = ExtendedPromise.Promise;
          return _Promise.race(global);
        }
        static reject(arg0) {
          _Promise = ExtendedPromise.Promise;
          return _Promise.reject(global);
        }
        static resolve(arg0) {
          _Promise = ExtendedPromise.Promise;
          return _Promise.resolve(global);
        }
        then() {
          items = [];
          num = 0;
          if (0 < arguments.length) {
            do {
              items[num] = arguments[num];
              num = num + 1;
              length = arguments.length;
            } while (num < length);
          }
          _promise = this._promise;
          then = _promise.then;
          return then.apply(_promise, items);
        }
        catch() {
          items = [];
          num = 0;
          if (0 < arguments.length) {
            do {
              items[num] = arguments[num];
              num = num + 1;
              length = arguments.length;
            } while (num < length);
          }
          _promise = this._promise;
          _catch = _promise.catch;
          return _catch.apply(_promise, items);
        }
        resolve(arg0) {
          self = this;
          closure_0 = global;
          self = this;
          if (!this.isFulfilled) {
            _setResolvedResult = self._setResolved();
            tmp2 = ExtendedPromise;
            _Promise = ExtendedPromise.Promise;
            resolveResult = _Promise.resolve();
            nextPromise = resolveResult.then(() => {
              /* body not rendered: F154224 */
            });
            nextPromise1 = nextPromise.then(() => {
              /* body not rendered: F154225 */
            });
            catchPromise = nextPromise1.catch(() => {
              /* body not rendered: F154226 */
            });
          }
          return self;
        }
        reject(arg0) {
          self = this;
          closure_0 = global;
          self = this;
          if (!this.isFulfilled) {
            _setRejectedResult = self._setRejected();
            tmp2 = ExtendedPromise;
            _Promise = ExtendedPromise.Promise;
            resolveResult = _Promise.resolve();
            nextPromise = resolveResult.then(() => {
              /* body not rendered: F154227 */
            });
            nextPromise1 = nextPromise.then(() => {
              /* body not rendered: F154228 */
            });
            catchPromise = nextPromise1.catch(() => {
              /* body not rendered: F154229 */
            });
          }
          return self;
        }
        _resetState() {
          return;
        }
        _setResolved() {
          return;
        }
        _setRejected() {
          return;
        }
      }
      ExtendedPromise.Promise = _Promise;
      module.exports = ExtendedPromise;
    },
    {},
  ];
  obj[31] = items30;
  const items31 = [
    (arg0, arg1, arg2) => {
      const attributes = global("./lib/set-attributes");
      const defaultAttributes = global("./lib/default-attributes");
      let closure_2 = global("./lib/assign");
      module.exports = function createFrame(arg0) {
        let obj = arg0;
        if (undefined === arg0) {
          obj = {};
        }
        const element = <iframe />;
        const obj2 = closure_2.assign({}, defaultAttributes.defaultAttributes, obj);
        const tmp2 = obj2.style && typeof obj2.style !== "string";
        if (tmp2) {
          closure_2.assign(element.style, obj2.style);
          delete tmp["style"];
        }
        attributes.setAttributes(element, obj2);
        if (!element.getAttribute("id")) {
          element.id = element.name;
        }
        return element;
      };
    },
    { "./lib/assign": 33, "./lib/default-attributes": 34, "./lib/set-attributes": 35 },
  ];
  obj[32] = items31;
  const items32 = [
    (arg0, arg1, arg2) => {
      arg2.assign = function assign(arg0) {
        let length;
        let closure_0 = arg0;
        const items = [];
        let num = 1;
        if (1 < arguments.length) {
          do {
            items[num - 1] = arguments[num];
            num = num + 1;
            length = arguments.length;
          } while (num < length);
        }
        let item = items.forEach((item) => {
          if (typeof item === "object") {
            const _Object = Object;
            const keys = Object.keys(item);
            item = keys.forEach((item) => {
              item[item] = item[item];
            });
          }
        });
        return arg0;
      };
    },
    {},
  ];
  obj[33] = items32;
  const items33 = [
    (arg0, arg1, arg2) => {
      arg2.defaultAttributes = { src: "about:blank", frameBorder: 0, allowtransparency: true, scrolling: "no" };
    },
    {},
  ];
  obj[34] = items33;
  const items34 = [
    (arg0, arg1, arg2) => {
      arg2.setAttributes = function setAttributes(removeAttribute, obj) {
        for (const key10005 in obj) {
          if (!obj.hasOwnProperty(key10005)) {
            continue;
          } else {
            let tmp = obj[key10005];
            if (null == tmp) {
              let removeAttributeResult = removeAttribute.removeAttribute(key10005);
              continue;
            } else {
              let attr = removeAttribute.setAttribute(key10005, tmp);
              continue;
            }
            continue;
          }
          continue;
        }
      };
    },
    {},
  ];
  obj[35] = items34;
  const items35 = [
    (arg0, arg1, arg2) => {
      module.exports = function uuid() {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (arg0) => {
          const tmp = (16 * Math.random()) | 0;
          let str = tmp;
          if ("x" !== arg0) {
            str = (3 & tmp) | 8;
          }
          return str.toString(16);
        });
      };
    },
    {},
  ];
  obj[36] = items35;
  const items36 = [
    (arg0, arg1, arg2) => {
      arg2.deferred = function deferred(arg0) {
        let closure_0 = arg0;
        return function () {
          let length;
          const items = [];
          let num = 0;
          if (0 < arguments.length) {
            do {
              items[num] = arguments[num];
              num = num + 1;
              length = arguments.length;
            } while (num < length);
          }
          const timerId = setTimeout(() => {
            try {
              items.apply(undefined, items);
            } catch (tmp4) {
              const _console = console;
              console.log("Error in callback function");
              const _console2 = console;
              console.log(tmp4);
            }
          }, 1);
        };
      };
    },
    {},
  ];
  obj[37] = items36;
  const items37 = [
    (arg0, arg1, arg2) => {
      arg2.once = function once(arg0) {
        let closure_0 = arg0;
        let c1 = false;
        return function () {
          let length;
          const items = [];
          let num = 0;
          if (0 < arguments.length) {
            do {
              items[num] = arguments[num];
              num = num + 1;
              length = arguments.length;
            } while (num < length);
          }
          const tmp = c1;
          if (!tmp) {
            c1 = true;
            closure_0.apply(undefined, items);
          }
        };
      };
    },
    {},
  ];
  obj[38] = items37;
  const items38 = [
    (arg0, arg1, arg2) => {
      arg2.promiseOrCallback = function promiseOrCallback(promise, onceResult) {
        if (onceResult) {
          const nextPromise = promise.then((result) => onceResult(null, result));
          nextPromise.catch((error) => onceResult(error));
        } else {
          return promise;
        }
      };
    },
    {},
  ];
  obj[39] = items38;
  const items39 = [
    (arg0, arg1, arg2) => {
      function wrapPromise(arg0) {
        closure_0 = arg0;
        return function () {
          let length;
          const items = [];
          let num = 0;
          if (0 < arguments.length) {
            do {
              items[num] = arguments[num];
              num = num + 1;
              length = arguments.length;
            } while (num < length);
          }
          let onceResult;
          if (typeof items[items.length - 1] === "function") {
            onceResult = closure_2_1.once(closure_2_0.deferred(items.pop()));
          }
          return closure_2_2.promiseOrCallback(closure_0.apply(this, items), onceResult);
        };
      }
      let closure_0 = global("./lib/deferred");
      let closure_1 = global("./lib/once");
      let closure_2 = global("./lib/promise-or-callback");
      wrapPromise.wrapPrototype = (arg0, arg1) => {
        closure_0 = arg0;
        let obj = arg1;
        if (undefined === arg1) {
          obj = {};
        }
        closure_1 = obj.ignoreMethods || [];
        closure_2 = true === obj.transformPrivateMethods;
        const ownPropertyNames = Object.getOwnPropertyNames(arg0.prototype);
        const found = ownPropertyNames.filter((item) => {
          let tmp = "constructor" !== item && typeof closure_0.prototype[item] === "function";
          let tmp4 = closure_2;
          const index = closure_1.indexOf(item);
          if (!tmp4) {
            tmp4 = "_" !== item.charAt(0);
          }
          if (tmp) {
            tmp = tmp4;
          }
          if (tmp) {
            tmp = -1 === index;
          }
          return tmp;
        });
        const item = found.forEach((item) => {
          closure_0 = closure_0.prototype[item];
          closure_0.prototype[item] = function () {
            let length;
            const items = [];
            let num = 0;
            if (0 < arguments.length) {
              do {
                items[num] = arguments[num];
                num = num + 1;
                length = arguments.length;
              } while (num < length);
            }
            let onceResult;
            if (typeof items[items.length - 1] === "function") {
              onceResult = closure_2_1.once(closure_2_0.deferred(items.pop()));
            }
            return closure_2_2.promiseOrCallback(closure_0.apply(this, items), onceResult);
          };
        });
        return arg0;
      };
      module.exports = wrapPromise;
    },
    { "./lib/deferred": 37, "./lib/once": 38, "./lib/promise-or-callback": 39 },
  ];
  obj[40] = items39;
  const items40 = [
    function (arg0, arg1, obj) {
      const fn = (arg0) => {
        let combined;
        let combined1;
        let combined2;
        let combined3;
        let concat;
        let concat2;
        let obj5;
        let obj6;
        let obj8;
        let obj9;
        function loadScript$1(forceScriptReload) {
          closure_0 = forceScriptReload;
          const json = JSON.stringify(forceScriptReload);
          if (!forceScriptReload.forceScriptReload) {
            if (closure_0[json]) {
              return closure_0[json];
            }
          }
          let element = <script />;
          const tmp4 = forceScriptReload.dataAttributes || {};
          let closure_2 = tmp4;
          let head = forceScriptReload.container;
          if (!head) {
            const _document = document;
            head = document.head;
          }
          element.src = forceScriptReload.src;
          element.id = forceScriptReload.id || "";
          element.async = true;
          if (forceScriptReload.type) {
            const concat = "".concat;
            let attr = element.setAttribute("type", "".concat(forceScriptReload.type));
          }
          if (forceScriptReload.crossorigin) {
            const concat2 = "".concat;
            const attr1 = element.setAttribute("crossorigin", "".concat(forceScriptReload.crossorigin));
          }
          const keys = Object.keys(tmp4);
          const item = keys.forEach((item) => {
            const setAttribute = element.setAttribute;
            const combined = "data-".concat(item);
            const attr = setAttribute(combined, "".concat(closure_2[item]));
          });
          const promise = new Promise((arg0, arg1) => {
            let closure_1;
            closure_0 = arg0;
            element = arg1;
            const listener = element.addEventListener("load", () => {
              closure_0(element);
            });
            const listener1 = element.addEventListener("error", () => {
              const error = new Error("".concat(closure_0.src, " failed to load."));
              closure_1(error);
            });
            const listener2 = element.addEventListener("abort", () => {
              const error = new Error("".concat(closure_0.src, " has aborted."));
              closure_1(error);
            });
            head.appendChild(element);
          });
          closure_0[json] = promise;
          return promise;
        }
        function loadAXOScript(src, arg1) {
          let obj3;
          let flag = arg1;
          if (undefined === arg1) {
            flag = true;
          }
          let amd = typeof define === "function";
          if (typeof define === "function") {
            const _window4 = window;
            amd = window.define.amd;
          }
          if (amd) {
            const _window = window;
            const define2 = window.define;
            let amd1 = typeof define2 === "function";
            if (typeof define2 === "function") {
              const _window5 = window;
              amd1 = window.define.amd;
            }
            if (amd1) {
              const _window2 = window;
              amd1 = typeof window.requirejs === "function";
            }
            if (amd1) {
              const _window3 = window;
              amd1 = typeof window.requirejs.config === "function";
            }
            if (amd1) {
              obj2 = { paths: obj3 };
              obj3 = {};
              obj3[fastlane] = src;
              globalThis.requirejs.config(obj2);
            }
            const concat = "".concat;
            const combined = "".concat(fastlane, "/");
            const AXO_ASSET_NAME = obj2.AXO_ASSET_NAME;
            closure_0 = combined.concat(flag ? AXO_ASSET_NAME.minified : AXO_ASSET_NAME.unminified);
            const self = this;
            const self2 = this;
            const promise = new Promise((arg0, arg1) => {
              const items = [closure_0];
              const _module = window.require(items, arg0, arg1);
            });
            return promise;
          } else {
            const obj = { id: "axo-id", src, forceScriptReload: true };
            return loadScript$1(obj);
          }
        }
        let obj = {
          loadScript: loadScript$1,
          loadStylesheet(href) {
            const element = document.querySelector('link[href="'.concat(href.href, '"]'));
            if (element) {
              return Promise.resolve(element);
            } else {
              const _document = document;
              const element1 = <link />;
              let head = href.container;
              if (!head) {
                const _document2 = document;
                head = document.head;
              }
              const attr = element1.setAttribute("rel", "stylesheet");
              const attr1 = element1.setAttribute("type", "text/css");
              const attr2 = element1.setAttribute("href", href.href);
              const attr3 = element1.setAttribute("id", href.id);
              if (head.firstChild) {
                head.insertBefore(element1, head.firstChild);
              } else {
                head.appendChild(element1);
              }
              return Promise.resolve(element1);
            }
          },
        };
        let closure_0 = {};
        loadScript$1.clearCache = () => {
          closure_0 = {};
        };
        loadScript$1 = undefined;
        const fastlane = "fastlane";
        let obj2 = {
          AXO_ASSET_NAME: { minified: "axo.min", unminified: "axo" },
          AXO_ASSET_PATH: "connect-boba",
          LOCALE_PATH: "".concat("connect-boba", "/locales/"),
          CDNX_PROD: "https://www.paypalobjects.com",
        };
        const BT = "BT";
        const PPCP = "PPCP";
        let obj3 = { client: "client", hostedFields: "hosted-fields" };
        const obj4 = { client: obj5, hostedFields: obj8 };
        obj5 = {
          id: "client",
          module: "client",
          amdModule: obj6,
          script: { unminified: "".concat(obj3.client, ".js"), minified: "".concat(obj3.client, ".min.js") },
        };
        obj6 = { unminified: combined.concat(obj3.client), minified: combined1.concat(obj3.client, ".min") };
        combined = "".concat("braintree", "/");
        combined1 = "".concat("braintree", "/");
        obj8 = {
          id: "hcf",
          module: "hostedFields",
          amdModule: obj9,
          script: {
            unminified: "".concat(obj3.hostedFields, ".js"),
            minified: "".concat(obj3.hostedFields, ".min.js"),
          },
        };
        obj9 = {
          unminified: combined2.concat(obj3.hostedFields),
          minified: combined3.concat(obj3.hostedFields, ".min"),
        };
        ({ unminified: "".concat(obj3.client, ".js"), minified: "".concat(obj3.client, ".min.js") });
        combined2 = "".concat("braintree", "/");
        combined3 = "".concat("braintree", "/");
        ({ concat, concat: concat2 } = "");
        arg0.constants = obj2;
        arg0.loadAxo = function loadAxo(arg0) {
          closure_0 = arg0;
          let self = this;
          const f154240 = function () {
            function sent() {
              if (1 & closure_1_4[0]) {
                throw closure_1_4[1];
              } else {
                return closure_1_4[1];
              }
            }
            const f154234 = function () {
              return this;
            };
            let btSdkVersion = this;
            let minified = function (label) {
              const f1542372 = function () {
                let braintree = this;
                let VERSION1 = function (arg0) {
                  let combined3;
                  let tmp10;
                  braintree = undefined;
                  if (null !== window) {
                    const _window = window;
                    if (undefined !== window) {
                      const _window2 = window;
                      braintree = window.braintree;
                    }
                  }
                  if (braintree) {
                    if (braintree[closure_2_0.module]) {
                      if (closure_2_1) {
                        closure_3 = tmp16;
                        let VERSION;
                        if (null !== braintree[closure_2_0.module]) {
                          if (undefined !== braintree[closure_2_0.module]) {
                            VERSION = tmp16.VERSION;
                          }
                        }
                        if (VERSION !== closure_2_1) {
                          closure_4 = tmp21;
                          VERSION1 = undefined;
                          if (null !== braintree[closure_2_0.module]) {
                            if (undefined !== braintree[closure_2_0.module]) {
                              VERSION1 = tmp21.VERSION;
                            }
                          }
                          const _Error2 = Error;
                          const concat4 = "".concat;
                          const combined = "".concat(closure_2_0.module, " already loaded with version ");
                          const combined1 = combined.concat(VERSION1, " cannot load version ");
                          const self5 = this;
                          const self6 = this;
                          const error = new Error(combined1.concat(closure_2_1));
                          throw error;
                        }
                      }
                      let items = [2, true];
                      return items;
                    }
                  }
                  if (closure_2_1) {
                    let promise;
                    let flag = closure_2_2;
                    if (undefined === closure_2_2) {
                      flag = true;
                    }
                    const _window3 = window;
                    let amd = typeof define === "function";
                    if (typeof define === "function") {
                      const _window4 = window;
                      amd = window.define.amd;
                    }
                    if (amd) {
                      const amdModule = closure_2_0.amdModule;
                      closure_0 = flag ? amdModule.minified : amdModule.unminified;
                      const self3 = this;
                      const self4 = this;
                      promise = new Promise((arg0, arg1) => {
                        const items = [closure_0];
                        const _module = window.require(items, arg0, arg1);
                      });
                    } else {
                      const script = closure_2_0.script;
                      const concat2 = "".concat;
                      const obj = { id: combined2.concat(closure_2_1), src: combined3.concat(tmp10) };
                      tmp10 = flag ? script.minified : script.unminified;
                      combined2 = "".concat(closure_2_0.id, "-");
                      const concat3 = "https://js.braintreegateway.com/web/".concat;
                      combined3 = "https://js.braintreegateway.com/web/".concat(closure_2_1, "/js/");
                      promise = Promise(obj);
                    }
                    const items1 = [2, promise];
                    return items1;
                  } else {
                    const _Error = Error;
                    const concat = "Attempted to load ".concat;
                    self = this;
                    const self2 = this;
                    const error1 = new Error(
                      "Attempted to load ".concat(closure_2_0.module, " without specifying version"),
                    );
                    throw error1;
                  }
                };
                closure_5 = { label: 0, sent, trys: [], ops: [] };
                let obj = {
                  next: (arg0) => {
                    function step(items) {
                      let items1 = items;
                      const tmp = c2;
                      if (tmp) {
                        const _TypeError = TypeError;
                        self = this;
                        const self2 = this;
                        const typeError = new TypeError("Generator is already executing.");
                        throw typeError;
                      } else {
                        if (c5) {
                          try {
                            c2 = 1;
                            const tmp3 = closure_3;
                            if (tmp3) {
                              let next;
                              if (2 & items1[0]) {
                                next = closure_3.return;
                              } else if (items1[0]) {
                                let num9 = iter.throw;
                                if (!num9) {
                                  const _return = closure_3.return;
                                  c4 = _return;
                                  num9 = 0;
                                  if (_return) {
                                    _return.call(closure_3);
                                    num9 = 0;
                                  }
                                }
                                next = num9;
                              } else {
                                next = iter.next;
                              }
                              c4 = next;
                              if (next) {
                                const iter2 = next.call(closure_3, items1[1]);
                                c4 = iter2;
                                if (!iter2.done) {
                                  c4 = 0;
                                  c2 = 0;
                                  return c4;
                                }
                              }
                            }
                            closure_3 = 0;
                            const tmp14 = c4;
                            if (tmp14) {
                              items = [2 & items1[0], c4.value];
                              items1 = items;
                            }
                            const first = items1[0];
                            if (0 !== first) {
                              if (1 !== first) {
                                if (4 === first) {
                                  c5.label = c5.label + 1;
                                  c4 = 0;
                                  c2 = 0;
                                  return { value: items1[1], done: false };
                                } else if (5 === first) {
                                  c5.label = c5.label + 1;
                                  closure_3 = items1[1];
                                  items1 = [0];
                                  c4 = 0;
                                  c2 = 0;
                                } else {
                                  if (7 === first) {
                                    const ops = c5.ops;
                                    items1 = ops.pop();
                                    const trys = c5.trys;
                                    trys.pop();
                                    c4 = 0;
                                    c2 = 0;
                                  } else {
                                    const trys1 = c5.trys;
                                    c4 = trys1;
                                    const tmp22 = trys1.length > 0 && c4[c4.length - 1];
                                    c4 = tmp22;
                                    if (!c4) {
                                      if (6 === items1[0]) {
                                        c5 = 0;
                                        c4 = 0;
                                        c2 = 0;
                                      }
                                    }
                                    if (3 !== items1[0]) {
                                      if (6 === items1[0]) {
                                        if (c5.label < c4[1]) {
                                          c5.label = c4[1];
                                          c4 = items1;
                                        }
                                      }
                                      const tmp40 = c4;
                                      if (tmp40) {
                                        if (c5.label < c4[2]) {
                                          c5.label = c4[2];
                                          const ops1 = c5.ops;
                                          ops1.push(items1);
                                        }
                                      }
                                      if (c4[2]) {
                                        const ops2 = c5.ops;
                                        ops2.pop();
                                      }
                                      const trys2 = c5.trys;
                                      trys2.pop();
                                      c4 = 0;
                                      c2 = 0;
                                    } else {
                                      const tmp28 = c4;
                                      if (!tmp28) {
                                        c5.label = items1[1];
                                      }
                                    }
                                  }
                                  items1 = closure_1_1.call(closure_1_0, c5);
                                  c4 = 0;
                                  c2 = 0;
                                }
                              }
                            }
                            c4 = items1;
                          } catch (tmp76) {
                            c4 = 0;
                            c2 = 0;
                            throw tmp76;
                          }
                        }
                        if (5 & items1[0]) {
                          throw items1[1];
                        } else {
                          let tmp75;
                          if (items1[0]) {
                            tmp75 = items1[1];
                          }
                          return { value: tmp75, done: true };
                        }
                      }
                    }
                    let items = [c0, arg0];
                    return step(items);
                  },
                  throw: (arg0) => {
                    function step(items) {
                      let items1 = items;
                      const tmp = c2;
                      if (tmp) {
                        const _TypeError = TypeError;
                        self = this;
                        const self2 = this;
                        const typeError = new TypeError("Generator is already executing.");
                        throw typeError;
                      } else {
                        if (c5) {
                          try {
                            c2 = 1;
                            const tmp3 = closure_3;
                            if (tmp3) {
                              let next;
                              if (2 & items1[0]) {
                                next = closure_3.return;
                              } else if (items1[0]) {
                                let num9 = iter.throw;
                                if (!num9) {
                                  const _return = closure_3.return;
                                  c4 = _return;
                                  num9 = 0;
                                  if (_return) {
                                    _return.call(closure_3);
                                    num9 = 0;
                                  }
                                }
                                next = num9;
                              } else {
                                next = iter.next;
                              }
                              c4 = next;
                              if (next) {
                                const iter2 = next.call(closure_3, items1[1]);
                                c4 = iter2;
                                if (!iter2.done) {
                                  c4 = 0;
                                  c2 = 0;
                                  return c4;
                                }
                              }
                            }
                            closure_3 = 0;
                            const tmp14 = c4;
                            if (tmp14) {
                              items = [2 & items1[0], c4.value];
                              items1 = items;
                            }
                            const first = items1[0];
                            if (0 !== first) {
                              if (1 !== first) {
                                if (4 === first) {
                                  c5.label = c5.label + 1;
                                  c4 = 0;
                                  c2 = 0;
                                  return { value: items1[1], done: false };
                                } else if (5 === first) {
                                  c5.label = c5.label + 1;
                                  closure_3 = items1[1];
                                  items1 = [0];
                                  c4 = 0;
                                  c2 = 0;
                                } else {
                                  if (7 === first) {
                                    const ops = c5.ops;
                                    items1 = ops.pop();
                                    const trys = c5.trys;
                                    trys.pop();
                                    c4 = 0;
                                    c2 = 0;
                                  } else {
                                    const trys1 = c5.trys;
                                    c4 = trys1;
                                    const tmp22 = trys1.length > 0 && c4[c4.length - 1];
                                    c4 = tmp22;
                                    if (!c4) {
                                      if (6 === items1[0]) {
                                        c5 = 0;
                                        c4 = 0;
                                        c2 = 0;
                                      }
                                    }
                                    if (3 !== items1[0]) {
                                      if (6 === items1[0]) {
                                        if (c5.label < c4[1]) {
                                          c5.label = c4[1];
                                          c4 = items1;
                                        }
                                      }
                                      const tmp40 = c4;
                                      if (tmp40) {
                                        if (c5.label < c4[2]) {
                                          c5.label = c4[2];
                                          const ops1 = c5.ops;
                                          ops1.push(items1);
                                        }
                                      }
                                      if (c4[2]) {
                                        const ops2 = c5.ops;
                                        ops2.pop();
                                      }
                                      const trys2 = c5.trys;
                                      trys2.pop();
                                      c4 = 0;
                                      c2 = 0;
                                    } else {
                                      const tmp28 = c4;
                                      if (!tmp28) {
                                        c5.label = items1[1];
                                      }
                                    }
                                  }
                                  items1 = closure_1_1.call(closure_1_0, c5);
                                  c4 = 0;
                                  c2 = 0;
                                }
                              }
                            }
                            c4 = items1;
                          } catch (tmp76) {
                            c4 = 0;
                            c2 = 0;
                            throw tmp76;
                          }
                        }
                        if (5 & items1[0]) {
                          throw items1[1];
                        } else {
                          let tmp75;
                          if (items1[0]) {
                            tmp75 = items1[1];
                          }
                          return { value: tmp75, done: true };
                        }
                      }
                    }
                    let items = [c0, arg0];
                    return step(items);
                  },
                  return: (arg0) => {
                    function step(items) {
                      let items1 = items;
                      const tmp = c2;
                      if (tmp) {
                        const _TypeError = TypeError;
                        self = this;
                        const self2 = this;
                        const typeError = new TypeError("Generator is already executing.");
                        throw typeError;
                      } else {
                        if (c5) {
                          try {
                            c2 = 1;
                            const tmp3 = closure_3;
                            if (tmp3) {
                              let next;
                              if (2 & items1[0]) {
                                next = closure_3.return;
                              } else if (items1[0]) {
                                let num9 = iter.throw;
                                if (!num9) {
                                  const _return = closure_3.return;
                                  c4 = _return;
                                  num9 = 0;
                                  if (_return) {
                                    _return.call(closure_3);
                                    num9 = 0;
                                  }
                                }
                                next = num9;
                              } else {
                                next = iter.next;
                              }
                              c4 = next;
                              if (next) {
                                const iter2 = next.call(closure_3, items1[1]);
                                c4 = iter2;
                                if (!iter2.done) {
                                  c4 = 0;
                                  c2 = 0;
                                  return c4;
                                }
                              }
                            }
                            closure_3 = 0;
                            const tmp14 = c4;
                            if (tmp14) {
                              items = [2 & items1[0], c4.value];
                              items1 = items;
                            }
                            const first = items1[0];
                            if (0 !== first) {
                              if (1 !== first) {
                                if (4 === first) {
                                  c5.label = c5.label + 1;
                                  c4 = 0;
                                  c2 = 0;
                                  return { value: items1[1], done: false };
                                } else if (5 === first) {
                                  c5.label = c5.label + 1;
                                  closure_3 = items1[1];
                                  items1 = [0];
                                  c4 = 0;
                                  c2 = 0;
                                } else {
                                  if (7 === first) {
                                    const ops = c5.ops;
                                    items1 = ops.pop();
                                    const trys = c5.trys;
                                    trys.pop();
                                    c4 = 0;
                                    c2 = 0;
                                  } else {
                                    const trys1 = c5.trys;
                                    c4 = trys1;
                                    const tmp22 = trys1.length > 0 && c4[c4.length - 1];
                                    c4 = tmp22;
                                    if (!c4) {
                                      if (6 === items1[0]) {
                                        c5 = 0;
                                        c4 = 0;
                                        c2 = 0;
                                      }
                                    }
                                    if (3 !== items1[0]) {
                                      if (6 === items1[0]) {
                                        if (c5.label < c4[1]) {
                                          c5.label = c4[1];
                                          c4 = items1;
                                        }
                                      }
                                      const tmp40 = c4;
                                      if (tmp40) {
                                        if (c5.label < c4[2]) {
                                          c5.label = c4[2];
                                          const ops1 = c5.ops;
                                          ops1.push(items1);
                                        }
                                      }
                                      if (c4[2]) {
                                        const ops2 = c5.ops;
                                        ops2.pop();
                                      }
                                      const trys2 = c5.trys;
                                      trys2.pop();
                                      c4 = 0;
                                      c2 = 0;
                                    } else {
                                      const tmp28 = c4;
                                      if (!tmp28) {
                                        c5.label = items1[1];
                                      }
                                    }
                                  }
                                  items1 = closure_1_1.call(closure_1_0, c5);
                                  c4 = 0;
                                  c2 = 0;
                                }
                              }
                            }
                            c4 = items1;
                          } catch (tmp76) {
                            c4 = 0;
                            c2 = 0;
                            throw tmp76;
                          }
                        }
                        if (5 & items1[0]) {
                          throw items1[1];
                        } else {
                          let tmp75;
                          if (items1[0]) {
                            tmp75 = items1[1];
                          }
                          return { value: tmp75, done: true };
                        }
                      }
                    }
                    let items = [c0, arg0];
                    return step(items);
                  },
                };
                let c0 = 2;
                if (typeof Symbol === "function") {
                  const _Symbol = Symbol;
                  obj[Symbol.iterator] = f154234;
                }
                return obj;
              };
              label = label.label;
              if (0 === label) {
                let unminified;
                let AXO_ASSET_PATH;
                let items;
                const _performance = performance;
                performance.mark("pp_axo_sdk_init_invoked");
                btSdkVersion = self.btSdkVersion;
                const tmp21 = self;
                minified = undefined;
                if (null != self) {
                  minified = tmp22.minified;
                }
                if (false !== minified) {
                  unminified = constants.AXO_ASSET_NAME.minified;
                } else {
                  unminified = constants.AXO_ASSET_NAME.unminified;
                }
                let _window = window;
                let amd = typeof define === "function";
                if (typeof define === "function") {
                  let _window2 = window;
                  amd = window.define.amd;
                }
                if (amd) {
                  AXO_ASSET_PATH = constants.AXO_ASSET_PATH;
                } else {
                  let concat = "".concat;
                  let combined = "".concat(constants.AXO_ASSET_PATH, "/");
                  AXO_ASSET_PATH = combined.concat(unminified, ".js");
                }
                let metadata;
                if (null != self) {
                  metadata = tmp22.metadata;
                }
                let bundleIdOverride;
                if (null !== metadata) {
                  if (undefined !== metadata) {
                    bundleIdOverride = metadata.bundleIdOverride;
                  }
                }
                if (bundleIdOverride) {
                  let concat3 = "https://cdn-".concat;
                  let combined1 = "https://cdn-".concat(bundleIdOverride, ".static.engineering.dev.paypalinc.com/");
                  combined2 = combined1.concat(AXO_ASSET_PATH);
                } else {
                  let concat2 = "".concat;
                  let combined3 = "".concat(constants.CDNX_PROD, "/");
                  combined2 = combined3.concat(AXO_ASSET_PATH);
                }
                const LOCALE_PATH = constants.LOCALE_PATH;
                let metadata1;
                if (null != self) {
                  metadata1 = self.metadata;
                }
                let bundleIdOverride1;
                if (null !== metadata1) {
                  if (undefined !== metadata1) {
                    bundleIdOverride1 = metadata1.bundleIdOverride;
                  }
                }
                if (bundleIdOverride1) {
                  const concat5 = "https://cdn-".concat;
                  const combined4 = "https://cdn-".concat(bundleIdOverride1, ".static.engineering.dev.paypalinc.com/");
                  combined5 = combined4.concat(LOCALE_PATH);
                } else {
                  let concat4 = "".concat;
                  const combined6 = "".concat(constants.CDNX_PROD, "/");
                  combined5 = combined6.concat(LOCALE_PATH);
                }
                if (self.platform !== closure_3_4) {
                  items = [3, 2];
                } else {
                  let hostedFields = closure_3_6.hostedFields;
                  let closure_1 = btSdkVersion;
                  let c2 = minified;
                  let c3;
                  let c4;
                  const all2 = Promise.all;
                  if (undefined === minified) {
                    c2 = true;
                  }
                  let f154237 = f1542372;
                  const self7 = this;
                  const self8 = this;
                  let promise = new Promise(function (fn, arg1) {
                    closure_0 = fn;
                    let closure_1 = arg1;
                    function fulfilled(result) {
                      try {
                        step(f154237.next(result));
                      } catch (tmp5) {
                        closure_1(tmp5);
                      }
                    }
                    let iter = fulfilled;
                    function rejected(arg0) {
                      try {
                        step(f154237.throw(arg0));
                      } catch (tmp5) {
                        closure_1(tmp5);
                      }
                    }
                    function step(done) {
                      if (done.done) {
                        fn(done.value);
                      } else {
                        let tmp1 = done.value;
                        const value = tmp1;
                        if (!(tmp1 instanceof Promise)) {
                          self = this;
                          const self2 = this;
                          tmp1 = new tmp((fn) => {
                            fn(value);
                          });
                        }
                        tmp1.then(iter, rejected);
                      }
                    }
                    iter = iter.apply(closure_0, []);
                    const iter2 = iter.next();
                    let value = iter2.value;
                    if (iter2.done) {
                      fn(value);
                    } else {
                      let tmp2 = value;
                      if (!(value instanceof closure_1)) {
                        self = this;
                        let self2 = this;
                        tmp2 = new tmp((fn) => {
                          fn(value);
                        });
                      }
                      tmp2.then(fulfilled, rejected);
                    }
                  });
                  let items1 = [promise, closure_3_7(combined2, minified)];
                  items = [4, all2(items1)];
                }
                return items;
              } else {
                if (1 !== label) {
                  if (3 !== label) {
                    if (2 === label) {
                      let items2;
                      const tmp5 = self;
                      if (self.platform !== closure_3_5) {
                        items2 = [3, 4];
                      } else {
                        const client = closure_3_6.client;
                        closure_1 = btSdkVersion;
                        c2 = minified;
                        c3 = undefined;
                        c4 = undefined;
                        if (undefined === minified) {
                          let flag = true;
                          c2 = true;
                        }
                        f154237 = f1542372;
                        let self3 = this;
                        let self4 = this;
                        const items3 = [
                          new Promise(function (fn, arg1) {
                            closure_0 = fn;
                            let closure_1 = arg1;
                            function fulfilled(result) {
                              try {
                                step(f154237.next(result));
                              } catch (tmp5) {
                                closure_1(tmp5);
                              }
                            }
                            let iter = fulfilled;
                            function rejected(arg0) {
                              try {
                                step(f154237.throw(arg0));
                              } catch (tmp5) {
                                closure_1(tmp5);
                              }
                            }
                            function step(done) {
                              if (done.done) {
                                fn(done.value);
                              } else {
                                let tmp1 = done.value;
                                const value = tmp1;
                                if (!(tmp1 instanceof Promise)) {
                                  self = this;
                                  const self2 = this;
                                  tmp1 = new tmp((fn) => {
                                    fn(value);
                                  });
                                }
                                tmp1.then(iter, rejected);
                              }
                            }
                            iter = iter.apply(closure_0, []);
                            const iter2 = iter.next();
                            let value = iter2.value;
                            if (iter2.done) {
                              fn(value);
                            } else {
                              let tmp2 = value;
                              if (!(value instanceof closure_1)) {
                                self = this;
                                let self2 = this;
                                tmp2 = new tmp((fn) => {
                                  fn(value);
                                });
                              }
                              tmp2.then(fulfilled, rejected);
                            }
                          }),
                          ,
                        ];
                        let tmp10 = btSdkVersion;
                        hostedFields = closure_3_6.hostedFields;
                        closure_1 = btSdkVersion;
                        c2 = minified;
                        c3 = undefined;
                        c4 = undefined;
                        const promise3 = new Promise(function (fn, arg1) {
                          closure_0 = fn;
                          let closure_1 = arg1;
                          function fulfilled(result) {
                            try {
                              step(f154237.next(result));
                            } catch (tmp5) {
                              closure_1(tmp5);
                            }
                          }
                          let iter = fulfilled;
                          function rejected(arg0) {
                            try {
                              step(f154237.throw(arg0));
                            } catch (tmp5) {
                              closure_1(tmp5);
                            }
                          }
                          function step(done) {
                            if (done.done) {
                              fn(done.value);
                            } else {
                              let tmp1 = done.value;
                              const value = tmp1;
                              if (!(tmp1 instanceof Promise)) {
                                self = this;
                                const self2 = this;
                                tmp1 = new tmp((fn) => {
                                  fn(value);
                                });
                              }
                              tmp1.then(iter, rejected);
                            }
                          }
                          iter = iter.apply(closure_0, []);
                          const iter2 = iter.next();
                          let value = iter2.value;
                          if (iter2.done) {
                            fn(value);
                          } else {
                            let tmp2 = value;
                            if (!(value instanceof closure_1)) {
                              self = this;
                              let self2 = this;
                              tmp2 = new tmp((fn) => {
                                fn(value);
                              });
                            }
                            tmp2.then(fulfilled, rejected);
                          }
                        });
                        if (undefined === minified) {
                          c2 = true;
                        }
                        f154237 = f1542372;
                        let self5 = this;
                        let self6 = this;
                        items3[1] = new Promise(function (fn, arg1) {
                          closure_0 = fn;
                          let closure_1 = arg1;
                          function fulfilled(result) {
                            try {
                              step(f154237.next(result));
                            } catch (tmp5) {
                              closure_1(tmp5);
                            }
                          }
                          let iter = fulfilled;
                          function rejected(arg0) {
                            try {
                              step(f154237.throw(arg0));
                            } catch (tmp5) {
                              closure_1(tmp5);
                            }
                          }
                          function step(done) {
                            if (done.done) {
                              fn(done.value);
                            } else {
                              let tmp1 = done.value;
                              const value = tmp1;
                              if (!(tmp1 instanceof Promise)) {
                                self = this;
                                const self2 = this;
                                tmp1 = new tmp((fn) => {
                                  fn(value);
                                });
                              }
                              tmp1.then(iter, rejected);
                            }
                          }
                          iter = iter.apply(closure_0, []);
                          const iter2 = iter.next();
                          let value = iter2.value;
                          if (iter2.done) {
                            fn(value);
                          } else {
                            let tmp2 = value;
                            if (!(value instanceof closure_1)) {
                              self = this;
                              let self2 = this;
                              tmp2 = new tmp((fn) => {
                                fn(value);
                              });
                            }
                            tmp2.then(fulfilled, rejected);
                          }
                        });
                        const tmp16 = minified;
                        const promise4 = new Promise(function (fn, arg1) {
                          closure_0 = fn;
                          let closure_1 = arg1;
                          function fulfilled(result) {
                            try {
                              step(f154237.next(result));
                            } catch (tmp5) {
                              closure_1(tmp5);
                            }
                          }
                          let iter = fulfilled;
                          function rejected(arg0) {
                            try {
                              step(f154237.throw(arg0));
                            } catch (tmp5) {
                              closure_1(tmp5);
                            }
                          }
                          function step(done) {
                            if (done.done) {
                              fn(done.value);
                            } else {
                              let tmp1 = done.value;
                              const value = tmp1;
                              if (!(tmp1 instanceof Promise)) {
                                self = this;
                                const self2 = this;
                                tmp1 = new tmp((fn) => {
                                  fn(value);
                                });
                              }
                              tmp1.then(iter, rejected);
                            }
                          }
                          iter = iter.apply(closure_0, []);
                          const iter2 = iter.next();
                          let value = iter2.value;
                          if (iter2.done) {
                            fn(value);
                          } else {
                            let tmp2 = value;
                            if (!(value instanceof closure_1)) {
                              self = this;
                              let self2 = this;
                              tmp2 = new tmp((fn) => {
                                fn(value);
                              });
                            }
                            tmp2.then(fulfilled, rejected);
                          }
                        });
                        items3[2] = closure_3_7(combined2, minified);
                        items2 = [4, all(items3)];
                      }
                      return items2;
                    } else if (4 === label) {
                      let tmp2 = globalThis;
                      let _Error = Error;
                      self = this;
                      let self2 = this;
                      let error = new Error("unsupported axo platform");
                      throw error;
                    } else if (5 === label) {
                      let obj = { metadata: obj2 };
                      const tmp = combined5;
                      const items4 = [2, obj];
                      return items4;
                    }
                  }
                }
                label.sent();
                return [3, 5];
              }
            };
            let closure_5 = { label: 0, sent, trys: [], ops: [] };
            let obj = {
              next: (arg0) => {
                function step(items) {
                  let items1 = items;
                  const tmp = c2;
                  if (tmp) {
                    const _TypeError = TypeError;
                    self = this;
                    const self2 = this;
                    const typeError = new TypeError("Generator is already executing.");
                    throw typeError;
                  } else {
                    if (c5) {
                      try {
                        c2 = 1;
                        const tmp3 = closure_3;
                        if (tmp3) {
                          let next;
                          if (2 & items1[0]) {
                            next = closure_3.return;
                          } else if (items1[0]) {
                            let num9 = iter.throw;
                            if (!num9) {
                              const _return = closure_3.return;
                              c4 = _return;
                              num9 = 0;
                              if (_return) {
                                _return.call(closure_3);
                                num9 = 0;
                              }
                            }
                            next = num9;
                          } else {
                            next = iter.next;
                          }
                          c4 = next;
                          if (next) {
                            const iter2 = next.call(closure_3, items1[1]);
                            c4 = iter2;
                            if (!iter2.done) {
                              c4 = 0;
                              c2 = 0;
                              return c4;
                            }
                          }
                        }
                        closure_3 = 0;
                        const tmp14 = c4;
                        if (tmp14) {
                          items = [2 & items1[0], c4.value];
                          items1 = items;
                        }
                        const first = items1[0];
                        if (0 !== first) {
                          if (1 !== first) {
                            if (4 === first) {
                              c5.label = c5.label + 1;
                              c4 = 0;
                              c2 = 0;
                              return { value: items1[1], done: false };
                            } else if (5 === first) {
                              c5.label = c5.label + 1;
                              closure_3 = items1[1];
                              items1 = [0];
                              c4 = 0;
                              c2 = 0;
                            } else {
                              if (7 === first) {
                                const ops = c5.ops;
                                items1 = ops.pop();
                                const trys = c5.trys;
                                trys.pop();
                                c4 = 0;
                                c2 = 0;
                              } else {
                                const trys1 = c5.trys;
                                c4 = trys1;
                                const tmp22 = trys1.length > 0 && c4[c4.length - 1];
                                c4 = tmp22;
                                if (!c4) {
                                  if (6 === items1[0]) {
                                    c5 = 0;
                                    c4 = 0;
                                    c2 = 0;
                                  }
                                }
                                if (3 !== items1[0]) {
                                  if (6 === items1[0]) {
                                    if (c5.label < c4[1]) {
                                      c5.label = c4[1];
                                      c4 = items1;
                                    }
                                  }
                                  const tmp40 = c4;
                                  if (tmp40) {
                                    if (c5.label < c4[2]) {
                                      c5.label = c4[2];
                                      const ops1 = c5.ops;
                                      ops1.push(items1);
                                    }
                                  }
                                  if (c4[2]) {
                                    const ops2 = c5.ops;
                                    ops2.pop();
                                  }
                                  const trys2 = c5.trys;
                                  trys2.pop();
                                  c4 = 0;
                                  c2 = 0;
                                } else {
                                  const tmp28 = c4;
                                  if (!tmp28) {
                                    c5.label = items1[1];
                                  }
                                }
                              }
                              items1 = closure_1_1.call(closure_1_0, c5);
                              c4 = 0;
                              c2 = 0;
                            }
                          }
                        }
                        c4 = items1;
                      } catch (tmp76) {
                        c4 = 0;
                        c2 = 0;
                        throw tmp76;
                      }
                    }
                    if (5 & items1[0]) {
                      throw items1[1];
                    } else {
                      let tmp75;
                      if (items1[0]) {
                        tmp75 = items1[1];
                      }
                      return { value: tmp75, done: true };
                    }
                  }
                }
                let items = [c0, arg0];
                return step(items);
              },
              throw: (arg0) => {
                function step(items) {
                  let items1 = items;
                  const tmp = c2;
                  if (tmp) {
                    const _TypeError = TypeError;
                    self = this;
                    const self2 = this;
                    const typeError = new TypeError("Generator is already executing.");
                    throw typeError;
                  } else {
                    if (c5) {
                      try {
                        c2 = 1;
                        const tmp3 = closure_3;
                        if (tmp3) {
                          let next;
                          if (2 & items1[0]) {
                            next = closure_3.return;
                          } else if (items1[0]) {
                            let num9 = iter.throw;
                            if (!num9) {
                              const _return = closure_3.return;
                              c4 = _return;
                              num9 = 0;
                              if (_return) {
                                _return.call(closure_3);
                                num9 = 0;
                              }
                            }
                            next = num9;
                          } else {
                            next = iter.next;
                          }
                          c4 = next;
                          if (next) {
                            const iter2 = next.call(closure_3, items1[1]);
                            c4 = iter2;
                            if (!iter2.done) {
                              c4 = 0;
                              c2 = 0;
                              return c4;
                            }
                          }
                        }
                        closure_3 = 0;
                        const tmp14 = c4;
                        if (tmp14) {
                          items = [2 & items1[0], c4.value];
                          items1 = items;
                        }
                        const first = items1[0];
                        if (0 !== first) {
                          if (1 !== first) {
                            if (4 === first) {
                              c5.label = c5.label + 1;
                              c4 = 0;
                              c2 = 0;
                              return { value: items1[1], done: false };
                            } else if (5 === first) {
                              c5.label = c5.label + 1;
                              closure_3 = items1[1];
                              items1 = [0];
                              c4 = 0;
                              c2 = 0;
                            } else {
                              if (7 === first) {
                                const ops = c5.ops;
                                items1 = ops.pop();
                                const trys = c5.trys;
                                trys.pop();
                                c4 = 0;
                                c2 = 0;
                              } else {
                                const trys1 = c5.trys;
                                c4 = trys1;
                                const tmp22 = trys1.length > 0 && c4[c4.length - 1];
                                c4 = tmp22;
                                if (!c4) {
                                  if (6 === items1[0]) {
                                    c5 = 0;
                                    c4 = 0;
                                    c2 = 0;
                                  }
                                }
                                if (3 !== items1[0]) {
                                  if (6 === items1[0]) {
                                    if (c5.label < c4[1]) {
                                      c5.label = c4[1];
                                      c4 = items1;
                                    }
                                  }
                                  const tmp40 = c4;
                                  if (tmp40) {
                                    if (c5.label < c4[2]) {
                                      c5.label = c4[2];
                                      const ops1 = c5.ops;
                                      ops1.push(items1);
                                    }
                                  }
                                  if (c4[2]) {
                                    const ops2 = c5.ops;
                                    ops2.pop();
                                  }
                                  const trys2 = c5.trys;
                                  trys2.pop();
                                  c4 = 0;
                                  c2 = 0;
                                } else {
                                  const tmp28 = c4;
                                  if (!tmp28) {
                                    c5.label = items1[1];
                                  }
                                }
                              }
                              items1 = closure_1_1.call(closure_1_0, c5);
                              c4 = 0;
                              c2 = 0;
                            }
                          }
                        }
                        c4 = items1;
                      } catch (tmp76) {
                        c4 = 0;
                        c2 = 0;
                        throw tmp76;
                      }
                    }
                    if (5 & items1[0]) {
                      throw items1[1];
                    } else {
                      let tmp75;
                      if (items1[0]) {
                        tmp75 = items1[1];
                      }
                      return { value: tmp75, done: true };
                    }
                  }
                }
                let items = [c0, arg0];
                return step(items);
              },
              return: (arg0) => {
                function step(items) {
                  let items1 = items;
                  const tmp = c2;
                  if (tmp) {
                    const _TypeError = TypeError;
                    self = this;
                    const self2 = this;
                    const typeError = new TypeError("Generator is already executing.");
                    throw typeError;
                  } else {
                    if (c5) {
                      try {
                        c2 = 1;
                        const tmp3 = closure_3;
                        if (tmp3) {
                          let next;
                          if (2 & items1[0]) {
                            next = closure_3.return;
                          } else if (items1[0]) {
                            let num9 = iter.throw;
                            if (!num9) {
                              const _return = closure_3.return;
                              c4 = _return;
                              num9 = 0;
                              if (_return) {
                                _return.call(closure_3);
                                num9 = 0;
                              }
                            }
                            next = num9;
                          } else {
                            next = iter.next;
                          }
                          c4 = next;
                          if (next) {
                            const iter2 = next.call(closure_3, items1[1]);
                            c4 = iter2;
                            if (!iter2.done) {
                              c4 = 0;
                              c2 = 0;
                              return c4;
                            }
                          }
                        }
                        closure_3 = 0;
                        const tmp14 = c4;
                        if (tmp14) {
                          items = [2 & items1[0], c4.value];
                          items1 = items;
                        }
                        const first = items1[0];
                        if (0 !== first) {
                          if (1 !== first) {
                            if (4 === first) {
                              c5.label = c5.label + 1;
                              c4 = 0;
                              c2 = 0;
                              return { value: items1[1], done: false };
                            } else if (5 === first) {
                              c5.label = c5.label + 1;
                              closure_3 = items1[1];
                              items1 = [0];
                              c4 = 0;
                              c2 = 0;
                            } else {
                              if (7 === first) {
                                const ops = c5.ops;
                                items1 = ops.pop();
                                const trys = c5.trys;
                                trys.pop();
                                c4 = 0;
                                c2 = 0;
                              } else {
                                const trys1 = c5.trys;
                                c4 = trys1;
                                const tmp22 = trys1.length > 0 && c4[c4.length - 1];
                                c4 = tmp22;
                                if (!c4) {
                                  if (6 === items1[0]) {
                                    c5 = 0;
                                    c4 = 0;
                                    c2 = 0;
                                  }
                                }
                                if (3 !== items1[0]) {
                                  if (6 === items1[0]) {
                                    if (c5.label < c4[1]) {
                                      c5.label = c4[1];
                                      c4 = items1;
                                    }
                                  }
                                  const tmp40 = c4;
                                  if (tmp40) {
                                    if (c5.label < c4[2]) {
                                      c5.label = c4[2];
                                      const ops1 = c5.ops;
                                      ops1.push(items1);
                                    }
                                  }
                                  if (c4[2]) {
                                    const ops2 = c5.ops;
                                    ops2.pop();
                                  }
                                  const trys2 = c5.trys;
                                  trys2.pop();
                                  c4 = 0;
                                  c2 = 0;
                                } else {
                                  const tmp28 = c4;
                                  if (!tmp28) {
                                    c5.label = items1[1];
                                  }
                                }
                              }
                              items1 = closure_1_1.call(closure_1_0, c5);
                              c4 = 0;
                              c2 = 0;
                            }
                          }
                        }
                        c4 = items1;
                      } catch (tmp76) {
                        c4 = 0;
                        c2 = 0;
                        throw tmp76;
                      }
                    }
                    if (5 & items1[0]) {
                      throw items1[1];
                    } else {
                      let tmp75;
                      if (items1[0]) {
                        tmp75 = items1[1];
                      }
                      return { value: tmp75, done: true };
                    }
                  }
                }
                let items = [c0, arg0];
                return step(items);
              },
            };
            let c0 = 2;
            if (typeof Symbol === "function") {
              let _Symbol = Symbol;
              obj[Symbol.iterator] = f154234;
            }
            return obj;
          };
          let promise = new Promise(function (fn, arg1) {
            closure_0 = fn;
            let closure_1 = arg1;
            function fulfilled(result) {
              try {
                step(f154237.next(result));
              } catch (tmp5) {
                closure_1(tmp5);
              }
            }
            let iter = fulfilled;
            function rejected(arg0) {
              try {
                step(f154237.throw(arg0));
              } catch (tmp5) {
                closure_1(tmp5);
              }
            }
            function step(done) {
              if (done.done) {
                fn(done.value);
              } else {
                let tmp1 = done.value;
                const value = tmp1;
                if (!(tmp1 instanceof Promise)) {
                  self = this;
                  const self2 = this;
                  tmp1 = new tmp((fn) => {
                    fn(value);
                  });
                }
                tmp1.then(iter, rejected);
              }
            }
            iter = iter.apply(closure_0, []);
            const iter2 = iter.next();
            let value = iter2.value;
            if (iter2.done) {
              fn(value);
            } else {
              let tmp2 = value;
              if (!(value instanceof closure_1)) {
                self = this;
                let self2 = this;
                tmp2 = new tmp((fn) => {
                  fn(value);
                });
              }
              tmp2.then(fulfilled, rejected);
            }
          });
          return promise;
        };
        ({ unminified: "".concat(obj3.hostedFields, ".js"), minified: "".concat(obj3.hostedFields, ".min.js") });
      };
      if (typeof obj === "object") {
        let tmp3 = arg1;
        if (undefined !== arg1) {
          fn(obj);
        }
      }
      let self = this;
      if (typeof globalThis !== "undefined") {
        self = globalThis;
      }
      obj = {};
      self.loadAxo = obj;
      fn(obj);
    },
    {},
  ];
  obj[41] = items40;
  const items41 = [
    function (arg0, arg1, arg2) {
      let tmp =
        (this && this.__assign) ||
        function () {
          const obj =
            Object.assign ||
            function (arg0) {
              let num;
              const length = arguments.length;
              for (let num = 1; num < length; num = num + 1) {
                let tmp = arguments[num];
                for (const key10012 in tmp) {
                  let _Object = Object;
                  hasOwnProperty = Object.prototype.hasOwnProperty;
                  if (!hasOwnProperty.call(tmp, key10012)) {
                    continue;
                  } else {
                    arg0[key10012] = tmp[key10012];
                    continue;
                  }
                  continue;
                }
              }
              return arg0;
            };
          return obj(...arguments);
        };
      function creditCardType(arg0) {
        let closure_0 = arg0;
        items = [];
        if (validInputType.isValidInputType(arg0)) {
          if (0 === arg0.length) {
            return closure_8.map((item) => {
              let tmp = closure_1_6[item];
              clone = clone.clone;
              if (!tmp) {
                tmp = items[item];
              }
              return clone(tmp);
            });
          } else {
            const item = closure_8.forEach((item) => {
              const tmp = closure_6[item] || items[item];
              const result = closure_2.addMatchingCardsToResults(closure_0, tmp, items);
            });
            const findBestMatchResult = closure_4.findBestMatch(items);
            if (findBestMatchResult) {
              const items1 = [findBestMatchResult];
              items = items1;
            }
            return items;
          }
        } else {
          return items;
        }
      }
      let closure_1 = global("./lib/card-types");
      let closure_2 = global("./lib/add-matching-cards-to-results");
      const validInputType = global("./lib/is-valid-input-type");
      let closure_4 = global("./lib/find-best-match");
      const globalResult = global("./lib/clone");
      let closure_6 = {};
      const types = {
        VISA: "visa",
        MASTERCARD: "mastercard",
        AMERICAN_EXPRESS: "american-express",
        DINERS_CLUB: "diners-club",
        DISCOVER: "discover",
        JCB: "jcb",
        UNIONPAY: "unionpay",
        MAESTRO: "maestro",
        ELO: "elo",
        MIR: "mir",
        HIPER: "hiper",
        HIPERCARD: "hipercard",
      };
      let items = [, , , , , , , , , , ,];
      ({
        VISA: arr[0],
        MASTERCARD: arr[1],
        AMERICAN_EXPRESS: arr[2],
        DINERS_CLUB: arr[3],
        DISCOVER: arr[4],
        JCB: arr[5],
        UNIONPAY: arr[6],
        MAESTRO: arr[7],
        ELO: arr[8],
        MIR: arr[9],
        HIPER: arr[10],
        HIPERCARD: arr[11],
      } = types);
      let closure_8 = globalResult.clone(items);
      creditCardType.getTypeInfo = (arg0) => {
        let tmp = closure_6[arg0];
        const clone = globalResult.clone;
        if (!tmp) {
          tmp = closure_1[arg0];
        }
        return clone(tmp);
      };
      creditCardType.removeCard = function (arg0) {
        const index = closure_8.indexOf(arg0);
        if (-1 === index) {
          const _Error = Error;
          const self = this;
          const self2 = this;
          const error = new Error('"' + arg0 + '" is not a supported card type.');
          throw error;
        } else {
          closure_8.splice(index, 1);
        }
      };
      creditCardType.addCard = (type) => {
        closure_6[type.type] = type;
        if (-1 === closure_8.indexOf(type.type)) {
          closure_8.push(type.type);
        }
      };
      creditCardType.updateCard = function (arg0, type) {
        if (closure_6[arg0] || closure_1[arg0]) {
          if (type.type) {
            if ((closure_6[arg0] || closure_1[arg0]).type !== type.type) {
              const _Error2 = Error;
              const self3 = this;
              const self4 = this;
              const error = new Error("Cannot overwrite type parameter.");
              throw error;
            }
          }
          const tmp9 = obj(obj({}, globalResult.clone(closure_6[arg0] || closure_1[arg0])), type);
          closure_6[tmp9.type] = tmp9;
        } else {
          const _Error = Error;
          const concat = '"'.concat;
          const self = this;
          const self2 = this;
          const error1 = new Error('"'.concat(arg0, "\" is not a recognized type. Use `addCard` instead.'"));
          throw error1;
        }
      };
      creditCardType.changeOrder = function (arg0, arg1) {
        const index = closure_8.indexOf(arg0);
        if (-1 === index) {
          const _Error = Error;
          const self = this;
          const self2 = this;
          const error = new Error('"' + arg0 + '" is not a supported card type.');
          throw error;
        } else {
          closure_8.splice(index, 1);
          closure_8.splice(arg1, 0, arg0);
        }
      };
      creditCardType.resetModifications = () => {
        closure_8 = globalResult.clone(items);
        closure_6 = {};
      };
      creditCardType.types = types;
      module.exports = creditCardType;
    },
    {
      "./lib/add-matching-cards-to-results": 43,
      "./lib/card-types": 44,
      "./lib/clone": 45,
      "./lib/find-best-match": 46,
      "./lib/is-valid-input-type": 47,
    },
  ];
  obj[42] = items41;
  const items42 = [
    (fn, arg1, arg2) => {
      arg2.addMatchingCardsToResults = undefined;
      let closure_0 = fn("./clone");
      let closure_1 = fn("./matches");
      arg2.addMatchingCardsToResults = function addMatchingCardsToResults(arg0, patterns, items) {
        let num = 0;
        if (0 < patterns.patterns.length) {
          let length;
          while (!closure_1.matches(arg0, patterns.patterns[num])) {
            num = num + 1;
          }
          const cloneResult = closure_0.clone(patterns);
          const _Array = Array;
          const _String = String;
          if (Array.isArray(patterns.patterns[num])) {
            length = _String(tmp[0]).length;
          } else {
            length = _String(tmp).length;
          }
          if (arg0.length >= length) {
            cloneResult.matchStrength = length;
          }
          items.push(cloneResult);
        }
      };
    },
    { "./clone": 45, "./matches": 48 },
  ];
  obj[43] = items42;
  const items43 = [
    (arg0, arg1, arg2) => {
      let items;
      let items1;
      let items2;
      let items3;
      let items4;
      let items5;
      let items6;
      let items7;
      let obj2;
      let obj3;
      let obj4;
      let obj5;
      let obj6;
      let obj7;
      let obj8;
      let obj9;
      const obj = {
        visa: {
          niceType: "Visa",
          type: "visa",
          patterns: [4],
          gaps: [4, 8, 12],
          lengths: [16, 18, 19],
          code: { name: "CVV", size: 3 },
        },
        mastercard: obj2,
        "american-express": {
          niceType: "American Express",
          type: "american-express",
          patterns: [34, 37],
          gaps: [4, 10],
          lengths: [15],
          code: { name: "CID", size: 4 },
        },
        "diners-club": obj3,
        discover: obj4,
        jcb: obj5,
        unionpay: obj6,
        maestro: obj7,
        elo: obj8,
        mir: obj9,
        hiper: {
          niceType: "Hiper",
          type: "hiper",
          patterns: [637095, 63737423, 63743358, 637568, 637599, 637609, 637612],
          gaps: [4, 8, 12],
          lengths: [16],
          code: { name: "CVC", size: 3 },
        },
        hipercard: {
          niceType: "Hipercard",
          type: "hipercard",
          patterns: [606282],
          gaps: [4, 8, 12],
          lengths: [16],
          code: { name: "CVC", size: 3 },
        },
      };
      obj2 = {
        niceType: "Mastercard",
        type: "mastercard",
        patterns: items,
        gaps: [4, 8, 12],
        lengths: [16],
        code: { name: "CVC", size: 3 },
      };
      items = [[51, 55], [2221, 2229], [223, 229], [23, 26], [270, 271], 2720];
      obj3 = {
        niceType: "Diners Club",
        type: "diners-club",
        patterns: items1,
        gaps: [4, 10],
        lengths: [14, 16, 19],
        code: { name: "CVV", size: 3 },
      };
      items1 = [[300, 305], 36, 38, 39];
      obj4 = {
        niceType: "Discover",
        type: "discover",
        patterns: items2,
        gaps: [4, 8, 12],
        lengths: [16, 19],
        code: { name: "CID", size: 3 },
      };
      items2 = [6011, [644, 649], 65];
      obj5 = {
        niceType: "JCB",
        type: "jcb",
        patterns: items3,
        gaps: [4, 8, 12],
        lengths: [16, 17, 18, 19],
        code: { name: "CVV", size: 3 },
      };
      items3 = [2131, 1800, [3528, 3589]];
      obj6 = {
        niceType: "UnionPay",
        type: "unionpay",
        patterns: items4,
        gaps: [4, 8, 12],
        lengths: [14, 15, 16, 17, 18, 19],
        code: { name: "CVN", size: 3 },
      };
      items4 = [
        620,
        [62100, 62182],
        [62184, 62187],
        [62185, 62197],
        [62200, 62205],
        [622010, 622999],
        622018,
        [62207, 62209],
        [623, 626],
        6270,
        6272,
        6276,
        [627700, 627779],
        [627781, 627799],
        [6282, 6289],
        6291,
        6292,
        810,
        [8110, 8131],
        [8132, 8151],
        [8152, 8163],
        [8164, 8171],
      ];
      obj7 = {
        niceType: "Maestro",
        type: "maestro",
        patterns: items5,
        gaps: [4, 8, 12],
        lengths: [12, 13, 14, 15, 16, 17, 18, 19],
        code: { name: "CVC", size: 3 },
      };
      items5 = [493698, [500000, 504174], [504176, 506698], [506779, 508999], [56, 59], 63, 67, 6];
      obj8 = {
        niceType: "Elo",
        type: "elo",
        patterns: items6,
        gaps: [4, 8, 12],
        lengths: [16],
        code: { name: "CVE", size: 3 },
      };
      items6 = [
        401178,
        401179,
        438935,
        457631,
        457632,
        431274,
        451416,
        457393,
        504175,
        [506699, 506778],
        [509000, 509999],
        627780,
        636297,
        636368,
        [650031, 650033],
        [650035, 650051],
        [650405, 650439],
        [650485, 650538],
        [650541, 650598],
        [650700, 650718],
        [650720, 650727],
        [650901, 650978],
        [651652, 651679],
        [655000, 655019],
        [655021, 655058],
      ];
      obj9 = {
        niceType: "Mir",
        type: "mir",
        patterns: items7,
        gaps: [4, 8, 12],
        lengths: [16, 17, 18, 19],
        code: { name: "CVP2", size: 3 },
      };
      items7 = [[2200, 2204]];
      module.exports = obj;
    },
    {},
  ];
  obj[44] = items43;
  const items44 = [
    (arg0, arg1, arg2) => {
      arg2.clone = function clone(arg0) {
        let parsed = null;
        if (arg0) {
          const _JSON = JSON;
          const _JSON2 = JSON;
          parsed = JSON.parse(JSON.stringify(arg0));
        }
        return parsed;
      };
    },
    {},
  ];
  obj[45] = items44;
  const items45 = [
    (arg0, arg1, arg2) => {
      arg2.findBestMatch = function findBestMatch(arr) {
        const length = arr.filter((matchStrength) => matchStrength.matchStrength).length;
        let tmp = length > 0 && length === arr.length;
        let reduced = null;
        if (tmp) {
          reduced = arr.reduce((acc, matchStrength) => {
            let tmp = acc;
            let tmp2 = matchStrength;
            if (acc) {
              const _Number = Number;
              const _Number2 = Number;
              const NumberResult = Number(tmp.matchStrength);
              if (NumberResult < Number(matchStrength.matchStrength)) {
                tmp = matchStrength;
              }
              tmp2 = tmp;
            }
            return tmp2;
          });
        }
        return reduced;
      };
    },
    {},
  ];
  obj[46] = items45;
  const items46 = [
    (arg0, arg1, arg2) => {
      arg2.isValidInputType = function isValidInputType(str) {
        let tmp = typeof str === "string";
        if (!tmp) {
          const _String = String;
          tmp = str instanceof String;
        }
        return tmp;
      };
    },
    {},
  ];
  obj[47] = items46;
  const items47 = [
    (arg0, arg1, arg2) => {
      arg2.matches = function matches(str, arg1) {
        let tmp2;
        if (Array.isArray(arg1)) {
          const first = arg1[0];
          const _String2 = String;
          const tmp4 = arg1[1];
          const substr = str.substr(0, String(first).length);
          const _parseInt = parseInt;
          const parsed = parseInt(substr, 10);
          const _parseInt2 = parseInt;
          const _String3 = String;
          const _parseInt3 = parseInt;
          const _String4 = String;
          const str2 = String(first);
          const parsed1 = parseInt(str2.substr(0, substr.length), 10);
          const str3 = String(tmp4);
          tmp2 = parsed >= parsed1 && parsed <= parseInt(str3.substr(0, substr.length), 10);
          parsed >= parsed1 && parsed <= parseInt(str3.substr(0, substr.length), 10);
        } else {
          const _String = String;
          str = String(arg1);
          const substr1 = str.substring(0, str.length);
          tmp2 = substr1 === str.substring(0, str.length);
        }
        return tmp2;
      };
    },
    {},
  ];
  obj[48] = items47;
  const items48 = [
    (fn, arg1, arg2) => {
      arg2.Framebus = undefined;
      handler = fn("./lib");
      let _Promise = typeof window !== "undefined";
      if (typeof window !== "undefined") {
        let _window = window;
        _Promise = window.Promise;
      }
      class Framebus {
        constructor(arg0) {
          obj = {};
          obj1 = fn;
          if (undefined === fn) {
            obj1 = {};
          }
          obj.origin = obj1.origin || "*";
          obj.channel = obj1.channel || "";
          obj.verifyDomain = obj1.verifyDomain;
          obj.targetFrames = obj1.targetFrames || [];
          obj.limitBroadcastToFramesArray = Boolean(obj1.targetFrames);
          obj.isDestroyed = false;
          obj.listeners = [];
          limitBroadcastToFramesArray = obj.verifyDomain;
          _Boolean = Boolean;
          if (!limitBroadcastToFramesArray) {
            limitBroadcastToFramesArray = obj.limitBroadcastToFramesArray;
          }
          obj.hasAdditionalChecksForOnListeners = _Boolean(limitBroadcastToFramesArray);
          return;
        }
        static setPromise(arg0) {
          Framebus.Promise = fn;
          return;
        }
        static target(arg0) {
          obj = fn;
          obj1 = Object.create(Framebus.prototype);
          obj3 = {};
          if (undefined === fn) {
            obj = {};
          }
          obj3.origin = obj.origin || "*";
          obj3.channel = obj.channel || "";
          obj3.verifyDomain = obj.verifyDomain;
          obj3.targetFrames = obj.targetFrames || [];
          obj3.limitBroadcastToFramesArray = Boolean(obj.targetFrames);
          obj3.isDestroyed = false;
          obj3.listeners = [];
          limitBroadcastToFramesArray = obj3.verifyDomain;
          _Boolean = Boolean;
          if (!limitBroadcastToFramesArray) {
            limitBroadcastToFramesArray = obj3.limitBroadcastToFramesArray;
          }
          obj3.hasAdditionalChecksForOnListeners = _Boolean(limitBroadcastToFramesArray);
          return obj3;
        }
        addTargetFrame(arg0) {
          if (this.limitBroadcastToFramesArray) {
            tmp2 = fn;
            targetFrames = tmp.targetFrames;
            arr1 = targetFrames.push(fn);
          }
          return;
        }
        include(arg0) {
          tmp = null != fn;
          if (tmp) {
            tmp2 = null != fn.Window;
            if (tmp2) {
              flag = fn.constructor === fn.Window;
              if (flag) {
                tmp3 = closure_0;
                childWindows = closure_0.childWindows;
                arr1 = childWindows.push(fn);
                flag = true;
              }
              tmp2 = flag;
            }
            tmp = tmp2;
          }
          return tmp;
        }
        target(arg0) {
          return Framebus.target(fn);
        }
        emit(arg0, arg1, arg2) {
          self = this;
          if (this.isDestroyed) {
            flag4 = false;
            return false;
          } else {
            tmp = fn;
            origin = self.origin;
            namespaceEventResult = self.namespaceEvent(fn);
            obj = origin;
            if (origin.isntString(namespaceEventResult)) {
              flag3 = false;
              return false;
            } else if (obj.isntString(origin)) {
              flag2 = false;
              return false;
            } else {
              tmp3 = arg1;
              tmp4 = arg2;
              tmp5 = arg1;
              if (typeof arg1 === "function") {
                tmp4 = arg1;
              }
              tmp6 = namespaceEventResult;
              tmp7 = origin;
              tmp8 = tmp5;
              tmp9 = tmp4;
              packagePayloadResult = obj.packagePayload(namespaceEventResult, origin, tmp5, tmp4);
              closure_1 = packagePayloadResult;
              flag = packagePayloadResult;
              if (flag) {
                if (self.limitBroadcastToFramesArray) {
                  result = self.targetFramesAsWindows();
                  item = result.forEach(() => {
                    /* body not rendered: F154243 */
                  });
                  flag = true;
                } else {
                  obj1 = { origin: null, frame: null };
                  obj1.origin = origin;
                  tmp11 = globalThis;
                  _window = window;
                  _self = window.top;
                  broadcast = obj.broadcast;
                  if (!_self) {
                    _window2 = window;
                    _self = window.self;
                  }
                  obj1.frame = _self;
                  broadcastResult = broadcast(packagePayloadResult, obj1);
                  flag = true;
                }
              }
              return flag;
            }
          }
        }
        emitAsPromise(arg0, arg1) {
          closure_0 = fn;
          closure_1 = arg1;
          self = this;
          promise = new Framebus.Promise(() => {
            /* body not rendered: F154244 */
          });
          return promise;
        }
        on(arg0, arg1) {
          self = this;
          closure_0 = arg1;
          if (this.isDestroyed) {
            flag2 = false;
            return false;
          } else {
            tmp = fn;
            origin = self.origin;
            namespaceEventResult = self.namespaceEvent(fn);
            tmp3 = closure_0;
            result = closure_0.subscriptionArgsInvalid(namespaceEventResult, arg1, origin);
            flag = !result;
            if (flag) {
              fn = arg1;
              if (self.hasAdditionalChecksForOnListeners) {
                fn = function d() {
                  /* body not rendered: F154245 */
                };
              }
              listeners = self.listeners;
              obj = { eventName: null, handler: null, originalHandler: null };
              obj.eventName = namespaceEventResult;
              obj.handler = fn;
              obj.originalHandler = arg1;
              arr1 = listeners.push(obj);
              obj1 = tmp3.subscribers[origin];
              subscribers = tmp3.subscribers;
              if (!obj1) {
                obj1 = {};
              }
              subscribers[origin] = obj1;
              items = tmp3.subscribers[origin][namespaceEventResult];
              tmp6 = tmp3.subscribers[origin];
              if (!items) {
                items = [];
              }
              tmp6[namespaceEventResult] = items;
              arr3 = tmp3.subscribers[origin][namespaceEventResult];
              arr4 = arr3.push(fn);
              flag = true;
            }
            return flag;
          }
        }
        off(arg0, arg1) {
          self = this;
          if (this.isDestroyed) {
            flag5 = false;
            return false;
          } else {
            tmp = arg1;
            tmp2 = arg1;
            if (self.verifyDomain) {
              num = 0;
              num2 = 1;
              tmp3 = arg1;
              tmp2 = arg1;
              if (0 < self.listeners.length) {
                do {
                  tmp4 = self.listeners[num];
                  tmp5 = num;
                  handler = tmp3;
                  if (tmp4.originalHandler === arg1) {
                    handler = tmp4.handler;
                  }
                  num = num + 1;
                  tmp3 = handler;
                  tmp2 = handler;
                } while (num < self.listeners.length);
              }
            }
            tmp6 = fn;
            namespaceEventResult = self.namespaceEvent(fn);
            origin = self.origin;
            tmp8 = closure_0;
            if (closure_0.subscriptionArgsInvalid(namespaceEventResult, tmp2, origin)) {
              flag4 = false;
              return false;
            } else {
              arr = tmp8.subscribers[origin] && tmp8.subscribers[origin][namespaceEventResult];
              if (arr) {
                num3 = 0;
                num4 = 1;
                if (0 < arr.length) {
                  tmp9 = num3;
                  while (arr[num3] !== tmp2) {
                    num3 = num3 + 1;
                  }
                  spliceResult = arr.splice(num3, 1);
                  flag3 = true;
                  return true;
                }
                flag2 = false;
                return false;
              } else {
                flag = false;
                return false;
              }
            }
          }
        }
        teardown() {
          self = this;
          if (!this.isDestroyed) {
            flag = true;
            self.isDestroyed = true;
            num = 0;
            num2 = 1;
            num3 = 0;
            if (0 < self.listeners.length) {
              do {
                tmp = self.listeners[num3];
                offResult = self.off(tmp.eventName, tmp.handler);
                num3 = num3 + 1;
                length = self.listeners.length;
              } while (num3 < length);
            }
            self.listeners.length = 0;
          }
          return;
        }
        passesVerifyDomainCheck(arg0) {
          self = this;
          verifyDomain = this.verifyDomain;
          checkOriginResult = !verifyDomain;
          if (verifyDomain) {
            tmp2 = fn;
            checkOriginResult = self.checkOrigin(fn);
          }
          return checkOriginResult;
        }
        targetFramesAsWindows() {
          if (this.limitBroadcastToFramesArray) {
            targetFrames = this.targetFrames;
            mapped = targetFrames.map(() => {
              /* body not rendered: F154246 */
            });
            found = mapped.filter(function () {
              /* body not rendered: F154247 */
            });
          } else {
            found = [];
          }
          return found;
        }
        hasMatchingTargetFrame(arg0) {
          self = this;
          closure_0 = fn;
          if (this.limitBroadcastToFramesArray) {
            result = self.targetFramesAsWindows();
            tmp = globalThis;
            _Boolean = Boolean;
            return Boolean(
              result.find(function () {
                /* body not rendered: F154248 */
              }),
            );
          } else {
            flag = true;
            return true;
          }
        }
        checkOrigin(arg0) {
          url = document.createElement("a");
          url.href = location.href;
          if ("https:" === url.protocol) {
            str4 = url.host;
            str5 = "";
            host = str4.replace(/:443$/, "");
          } else {
            str = "http:";
            if ("http:" === url.protocol) {
              str2 = url.host;
              str3 = "";
              host = str2.replace(/:80$/, "");
            } else {
              host = url.host;
            }
          }
          tmp = `${url.protocol}//${host}` === fn;
          if (!tmp) {
            self = this;
            verifyDomain = this.verifyDomain;
            verifyDomainResult = !verifyDomain;
            if (verifyDomain) {
              verifyDomainResult = self.verifyDomain(fn);
            }
            tmp = verifyDomainResult;
          }
          return tmp;
        }
        namespaceEvent(arg0) {
          combined1 = fn;
          if (this.channel) {
            str = "";
            concat = "".concat;
            str2 = ":";
            combined = "".concat(tmp.channel, ":");
            combined1 = combined.concat(fn);
          }
          return combined1;
        }
      }
      Framebus.Promise = _Promise;
      arg2.Framebus = Framebus;
    },
    { "./lib": 57 },
  ];
  obj[49] = items48;
  const items49 = [
    (arg0, arg1, arg2) => {
      const globalResult = global("./lib");
      const globalResult1 = global("./framebus");
      globalResult.attach();
      module.exports = globalResult1.Framebus;
    },
    { "./framebus": 49, "./lib": 57 },
  ];
  obj[50] = items49;
  const items50 = [
    (fn, arg1, arg2) => {
      arg2.attach = undefined;
      arg2.detach = undefined;
      let closure_0 = fn("./");
      let c1 = false;
      arg2.attach = function attach() {
        let tmp = c1;
        if (!tmp) {
          const _window = window;
          tmp = typeof window === "undefined";
        }
        if (!tmp) {
          c1 = true;
          const _window2 = window;
          const listener = window.addEventListener("message", closure_0.onMessage, false);
        }
      };
      arg2.detach = function detach() {
        c1 = false;
        const removed = window.removeEventListener("message", closure_0.onMessage, false);
      };
    },
    { "./": 57 },
  ];
  obj[51] = items50;
  const items51 = [
    (fn, arg1, arg2) => {
      arg2.broadcastToChildWindows = undefined;
      let closure_0 = fn("./");
      arg2.broadcastToChildWindows = function broadcastToChildWindows(data, origin, source) {
        let diff = closure_0.childWindows.length - 1;
        if (0 <= diff) {
          do {
            let tmp2 = closure_0.childWindows[diff];
            if (tmp2.closed) {
              let childWindows = closure_0.childWindows;
              let spliceResult = childWindows.splice(diff, 1);
            } else if (source !== tmp2) {
              let obj2 = { origin, frame: tmp2.top };
              let broadcastResult = closure_0.broadcast(data, obj2);
            }
            diff = diff - 1;
          } while (0 <= diff);
        }
      };
    },
    { "./": 57 },
  ];
  obj[52] = items51;
  const items52 = [
    (fn, arg1, arg2) => {
      arg2.broadcast = undefined;
      let closure_0 = fn("./");
      function broadcast(packagePayloadResult, arg1) {
        let frame;
        let origin;
        let num = 0;
        ({ origin, frame } = arg1);
        try {
          frame.postMessage(packagePayloadResult, origin);
          let hasOpenerResult = closure_0.hasOpener(frame);
          if (hasOpenerResult) {
            const _window = window;
            hasOpenerResult = frame.opener.top !== window.top;
          }
          if (hasOpenerResult) {
            const obj = { origin, frame: frame.opener.top };
            broadcast(packagePayloadResult, obj);
          }
          let tmp10 = tmp9;
          if (frame.frames[num]) {
            do {
              let obj2 = { origin, frame: tmp10 };
              let tmp13 = broadcast(packagePayloadResult, obj2);
              let sum = num + 1;
              num = sum;
              tmp10 = frame.frames[sum];
            } while (tmp16);
          }
        } catch (err) {}
      }
      arg2.broadcast = broadcast;
    },
    { "./": 57 },
  ];
  obj[53] = items52;
  const items53 = [
    (arg0, arg1, arg2) => {
      arg2.prefix = undefined;
      arg2.childWindows = undefined;
      arg2.subscribers = undefined;
      arg2.prefix = "/*framebus*/";
      arg2.childWindows = [];
      arg2.subscribers = {};
    },
    {},
  ];
  obj[54] = items53;
  const items54 = [
    (fn, arg1, arg2) => {
      arg2.dispatch = undefined;
      let closure_0 = fn("./");
      arg2.dispatch = function dispatch(arg0, arg1, arg2, arg3, arg4) {
        let length;
        if (closure_0.subscribers[arg0]) {
          if (closure_0.subscribers[arg0][arg1]) {
            const items = [];
            if (arg2) {
              items.push(arg2);
            }
            const tmp5 = arg3;
            if (tmp5) {
              items.push(arg3);
            }
            let num = 0;
            if (0 < closure_0.subscribers[arg0][arg1].length) {
              do {
                let obj = closure_0.subscribers[arg0][arg1][num];
                let applyResult = obj.apply(arg4, items);
                num = num + 1;
                length = closure_0.subscribers[arg0][arg1].length;
              } while (num < length);
            }
          }
        }
      };
    },
    { "./": 57 },
  ];
  obj[55] = items54;
  const items55 = [
    (arg0, arg1, arg2) => {
      arg2.hasOpener = function hasOpener(frame) {
        let tmp = frame.top === frame;
        if (tmp) {
          let tmp3 = null != frame.opener;
          if (tmp3) {
            tmp3 = frame.opener !== frame && true !== frame.opener.closed;
            const tmp4 = frame.opener !== frame && true !== frame.opener.closed;
          }
          tmp = tmp3;
        }
        return tmp;
      };
    },
    {},
  ];
  obj[56] = items55;
  const items56 = [
    function (fn, arg1, arg2) {
      const self = this;
      let tmp = this && self.__createBinding;
      if (!tmp) {
        let _Object = Object;
        tmp = Object.create
          ? (arg0, __esModule, arg2, arg3) => {
              function get() {
                return __esModule[closure_1];
              }
              closure_0 = __esModule;
              let closure_1 = arg2;
              let tmp = arg3;
              if (undefined === arg3) {
                tmp = arg2;
              }
              let ownPropertyDescriptor = Object.getOwnPropertyDescriptor(__esModule, arg2);
              let tmp3 = ownPropertyDescriptor;
              if (tmp3) {
                let tmp4;
                if ("get" in ownPropertyDescriptor) {
                  tmp4 = !__esModule.__esModule;
                } else {
                  tmp4 = ownPropertyDescriptor.writable || ownPropertyDescriptor.configurable;
                }
                tmp3 = !tmp4;
              }
              if (!tmp3) {
                ownPropertyDescriptor = { enumerable: true, get };
                const obj = { enumerable: true, get };
              }
              Object.defineProperty(arg0, tmp, ownPropertyDescriptor);
            }
          : (arg0, arg1, arg2, arg3) => {
              let tmp = arg3;
              if (undefined === arg3) {
                tmp = arg2;
              }
              arg0[tmp] = arg1[arg2];
            };
      }
      let closure_0 = tmp;
      let tmp3 =
        (self && self.__exportStar) ||
        ((obj, arg1) => {
          for (const key10007 in obj) {
            let callResult = "default" === key10007;
            if (!callResult) {
              let _Object = Object;
              hasOwnProperty = Object.prototype.hasOwnProperty;
              callResult = hasOwnProperty.call(arg1, key10007);
            }
            if (callResult) {
              continue;
            } else {
              let tmp3 = closure_0(arg1, obj, key10007);
              continue;
            }
            continue;
          }
        });
      tmp3(fn("./attach"), arg2);
      tmp3(fn("./broadcast-to-child-windows"), arg2);
      tmp3(fn("./broadcast"), arg2);
      tmp3(fn("./constants"), arg2);
      tmp3(fn("./dispatch"), arg2);
      tmp3(fn("./has-opener"), arg2);
      tmp3(fn("./is-not-string"), arg2);
      tmp3(fn("./message"), arg2);
      tmp3(fn("./package-payload"), arg2);
      tmp3(fn("./send-message"), arg2);
      tmp3(fn("./subscribe-replier"), arg2);
      tmp3(fn("./subscription-args-invalid"), arg2);
      tmp3(fn("./types"), arg2);
      tmp3(fn("./unpack-payload"), arg2);
    },
    {
      "./attach": 51,
      "./broadcast": 53,
      "./broadcast-to-child-windows": 52,
      "./constants": 54,
      "./dispatch": 55,
      "./has-opener": 56,
      "./is-not-string": 58,
      "./message": 59,
      "./package-payload": 60,
      "./send-message": 61,
      "./subscribe-replier": 62,
      "./subscription-args-invalid": 63,
      "./types": 64,
      "./unpack-payload": 65,
    },
  ];
  obj[57] = items56;
  const items57 = [
    (arg0, arg1, arg2) => {
      arg2.isntString = function isntString(data) {
        return typeof data !== "string";
      };
    },
    {},
  ];
  obj[58] = items57;
  const items58 = [
    (fn, arg1, arg2) => {
      arg2.onMessage = undefined;
      let closure_0 = fn("./");
      arg2.onMessage = function onMessage(data) {
        let eventData;
        let reply;
        if (!closure_0.isntString(data.data)) {
          const unpackPayloadResult = closure_0.unpackPayload(data);
          if (unpackPayloadResult) {
            ({ eventData, reply } = unpackPayloadResult);
            closure_0.dispatch("*", unpackPayloadResult.event, eventData, reply, data);
            closure_0.dispatch(data.origin, unpackPayloadResult.event, eventData, reply, data);
            const result = closure_0.broadcastToChildWindows(data.data, unpackPayloadResult.origin, data.source);
          }
        }
      };
    },
    { "./": 57 },
  ];
  obj[59] = items58;
  const items59 = [
    (fn, arg1, arg2) => {
      arg2.packagePayload = undefined;
      let closure_0 = fn("./");
      arg2.packagePayload = function packagePayload(namespaceEventResult, origin, eventData, fn) {
        const obj = { event: namespaceEventResult, origin, eventData };
        if (typeof fn === "function") {
          obj.reply = closure_0.subscribeReplier(fn, origin);
        }
        try {
          const _JSON = JSON;
          return closure_0.prefix + JSON.stringify(obj);
        } catch (tmp3) {
          const _Error = Error;
          const concat = "Could not stringify event: ".concat;
          const self = this;
          const self2 = this;
          const error = new Error("Could not stringify event: ".concat(tmp3.message));
          throw error;
        }
      };
    },
    { "./": 57 },
  ];
  obj[60] = items59;
  const items60 = [
    (arg0, arg1, arg2) => {
      arg2.sendMessage = function sendMessage(postMessage, arg1, arg2) {
        try {
          postMessage.postMessage(arg1, arg2);
        } catch (err) {}
      };
    },
    {},
  ];
  obj[61] = items60;
  const items61 = [
    function (fn, arg1, arg2) {
      fn =
        (this && this.__importDefault) ||
        ((__esModule) => {
          let tmp2;
          const tmp = __esModule;
          if (!tmp) {
            tmp2 = { default: __esModule };
            const obj = { default: __esModule };
          } else {
            tmp2 = __esModule;
          }
          return tmp2;
        });
      arg2.subscribeReplier = undefined;
      let Framebus = fn("../framebus");
      let closure_1 = fn(fn("@braintree/uuid"));
      arg2.subscribeReplier = function subscribeReplier(fn, origin) {
        Framebus = fn;
        const defaultResult = origin.default();
        let closure_2 = defaultResult;
        Framebus = Framebus.Framebus;
        let obj = { origin };
        let targetResult = Framebus.target(obj);
        function replier(arg0, arg1) {
          fn(arg0, arg1);
          Framebus = fn.Framebus;
          const obj = { origin };
          const targetResult = Framebus.target(obj);
          targetResult.off(closure_2, replier);
        }
        targetResult.on(defaultResult, replier);
        return defaultResult;
      };
    },
    { "../framebus": 49, "@braintree/uuid": 66 },
  ];
  obj[62] = items61;
  const items62 = [
    (fn, arg1, arg2) => {
      arg2.subscriptionArgsInvalid = undefined;
      let closure_0 = fn("./");
      arg2.subscriptionArgsInvalid = function subscriptionArgsInvalid(namespaceEventResult, fn, origin) {
        let isntStringResult1 = closure_0.isntString(namespaceEventResult);
        if (!isntStringResult1) {
          isntStringResult1 = typeof fn !== "function" || closure_0.isntString(origin);
          const isntStringResult = typeof fn !== "function" || closure_0.isntString(origin);
        }
        return isntStringResult1;
      };
    },
    { "./": 57 },
  ];
  obj[63] = items62;
  const items63 = [(arg0, arg1, arg2) => {}, {}];
  obj[64] = items63;
  const items64 = [
    (fn, arg1, arg2) => {
      arg2.unpackPayload = undefined;
      let closure_0 = fn("./");
      arg2.unpackPayload = function unpackPayload(data) {
        let closure_1;
        data = data.data;
        if (data.slice(0, closure_0.prefix.length) !== closure_0.prefix) {
          return false;
        } else {
          try {
            const _JSON = JSON;
            const data1 = data.data;
            const parsed = JSON.parse(data1.slice(closure_0.prefix.length));
            if (parsed.reply) {
              ({ origin: closure_0, source: closure_1 } = data);
              const reply = parsed.reply;
              parsed.reply = function reply(eventData) {
                if (closure_1) {
                  const packagePayloadResult = closure_0.packagePayload(reply, closure_0, eventData);
                  if (packagePayloadResult) {
                    closure_1.postMessage(packagePayloadResult, closure_0);
                  }
                }
              };
            }
            return parsed;
          } catch (err) {
            return false;
          }
        }
      };
    },
    { "./": 57 },
  ];
  obj[65] = items64;
  const items65 = [
    (arg0, arg1, arg2) => {
      module.exports = function uuid() {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (arg0) => {
          const tmp = (16 * Math.random()) | 0;
          let str = tmp;
          if ("x" !== arg0) {
            str = (3 & tmp) | 8;
          }
          return str.toString(16);
        });
      };
    },
    {},
  ];
  obj[66] = items65;
  const items66 = [
    (fn, arg1, arg2) => {
      arg2.isKitKatWebview = undefined;
      arg2.isAndroidChrome = undefined;
      arg2.isSamsungBrowser = undefined;
      arg2.isIE9 = undefined;
      arg2.isIos = undefined;
      let userAgent = typeof window !== "undefined";
      if (typeof window !== "undefined") {
        const _window2 = window;
        userAgent = window.navigator;
      }
      if (userAgent) {
        const _window = window;
        userAgent = window.navigator.userAgent;
      }
      let closure_1 = fn("@braintree/browser-detection/is-android");
      let closure_2 = fn("@braintree/browser-detection/is-chrome-os");
      let closure_3 = fn("@braintree/browser-detection/is-chrome");
      arg2.isIos = fn("@braintree/browser-detection/is-ios");
      arg2.isIE9 = fn("@braintree/browser-detection/is-ie9");
      const re4 = /Version\/\d\.\d* Chrome\/\d*\.0\.0\.0/;
      arg2.isKitKatWebview = function isKitKatWebview(arg0) {
        let tmp = arg0;
        if (undefined === arg0) {
          tmp = userAgent;
        }
        const isMatch = closure_1(tmp) && re4.test(tmp);
        return isMatch;
      };
      arg2.isAndroidChrome = function isAndroidChrome(arg0) {
        let tmp = arg0;
        if (undefined === arg0) {
          tmp = userAgent;
        }
        const tmp2 = (closure_1(tmp) || closure_2(tmp)) && closure_3(tmp);
        return tmp2;
      };
      arg2.isSamsungBrowser = function isSamsungBrowser(arg0) {
        let arr = arg0;
        if (undefined === arg0) {
          arr = userAgent;
        }
        const obj = /SamsungBrowser/;
        let isMatch = obj.test(arr);
        if (!isMatch) {
          let tmp4 = !closure_3(arr);
          closure_3(arr);
          if (tmp4) {
            tmp4 = arr.indexOf("Samsung") > -1;
          }
          isMatch = tmp4;
        }
        return isMatch;
      };
    },
    {
      "@braintree/browser-detection/is-android": 80,
      "@braintree/browser-detection/is-chrome": 82,
      "@braintree/browser-detection/is-chrome-os": 81,
      "@braintree/browser-detection/is-ie9": 83,
      "@braintree/browser-detection/is-ios": 84,
    },
  ];
  obj[67] = items66;
  const items67 = [
    (arg0, arg1, arg2) => {
      const samsungBrowser = global("./lib/device");
      module.exports = function supportsInputFormatting() {
        return !samsungBrowser.isSamsungBrowser();
      };
    },
    { "./lib/device": 67 },
  ];
  obj[68] = items67;
  const items68 = [
    function (arg0, arg1, arg2) {
      const first = arguments[4][3][0];
      first(...arguments);
    },
    { dup: 3 },
  ];
  obj[69] = items68;
  const items69 = [
    function (arg0, arg1, arg2) {
      const first = arguments[4][4][0];
      first(...arguments);
    },
    { dup: 4 },
  ];
  obj[70] = items69;
  const items70 = [
    function (arg0, arg1, arg2) {
      const first = arguments[4][5][0];
      first(...arguments);
    },
    { "./is-duckduckgo": 72, "./is-edge": 73, "./is-opera": 77, "./is-samsung": 78, "./is-silk": 79, dup: 5 },
  ];
  obj[71] = items70;
  const items71 = [
    function (arg0, arg1, arg2) {
      const first = arguments[4][6][0];
      first(...arguments);
    },
    { dup: 6 },
  ];
  obj[72] = items71;
  const items72 = [
    function (arg0, arg1, arg2) {
      const first = arguments[4][7][0];
      first(...arguments);
    },
    { dup: 7 },
  ];
  obj[73] = items72;
  const items73 = [
    (arg0, arg1, arg2) => {
      module.exports = function isIe9(arg0) {
        let userAgent = arg0;
        if (!userAgent) {
          const _window = window;
          userAgent = window.navigator.userAgent;
        }
        return -1 !== userAgent.indexOf("MSIE 9");
      };
    },
    {},
  ];
  obj[74] = items73;
  const items74 = [
    function (arg0, arg1, arg2) {
      const first = arguments[4][14][0];
      first(...arguments);
    },
    { "./is-ipados": 76, dup: 14 },
  ];
  obj[75] = items74;
  const items75 = [
    function (arg0, arg1, arg2) {
      const first = arguments[4][15][0];
      first(...arguments);
    },
    { dup: 15 },
  ];
  obj[76] = items75;
  const items76 = [
    function (arg0, arg1, arg2) {
      const first = arguments[4][16][0];
      first(...arguments);
    },
    { dup: 16 },
  ];
  obj[77] = items76;
  const items77 = [
    function (arg0, arg1, arg2) {
      const first = arguments[4][17][0];
      first(...arguments);
    },
    { dup: 17 },
  ];
  obj[78] = items77;
  const items78 = [
    function (arg0, arg1, arg2) {
      const first = arguments[4][18][0];
      first(...arguments);
    },
    { dup: 18 },
  ];
  obj[79] = items78;
  const items79 = [
    function (arg0, arg1, arg2) {
      const first = arguments[4][20][0];
      first(...arguments);
    },
    { "./dist/is-android": 69, dup: 20 },
  ];
  obj[80] = items79;
  const items80 = [
    function (arg0, arg1, arg2) {
      const first = arguments[4][21][0];
      first(...arguments);
    },
    { "./dist/is-chrome-os": 70, dup: 21 },
  ];
  obj[81] = items80;
  const items81 = [
    function (arg0, arg1, arg2) {
      const first = arguments[4][22][0];
      first(...arguments);
    },
    { "./dist/is-chrome": 71, dup: 22 },
  ];
  obj[82] = items81;
  const items82 = [
    (arg0, arg1, arg2) => {
      module.exports = global("./dist/is-ie9");
    },
    { "./dist/is-ie9": 74 },
  ];
  obj[83] = items82;
  const items83 = [
    function (arg0, arg1, arg2) {
      const first = arguments[4][27][0];
      first(...arguments);
    },
    { "./dist/is-ios": 75, dup: 27 },
  ];
  obj[84] = items83;
  const items84 = [
    (arg0, arg1, arg2) => {
      module.exports = global("./dist/supports-input-formatting");
    },
    { "./dist/supports-input-formatting": 68 },
  ];
  obj[85] = items84;
  const items85 = [
    (arg0, arg1, arg2) => {
      class AmericanExpress {
        constructor(arg0) {
          this._client = global.client;
          return;
        }
        getRewardsBalance(arg0) {
          nonce = global.nonce;
          if (nonce) {
            self3 = this;
            tmp8 = assign;
            obj1 = { _meta: null, paymentMethodNonce: null };
            obj1._meta = { source: "american-express" };
            obj1.paymentMethodNonce = nonce;
            tmp9 = assign(obj1, global);
            delete tmp9["nonce"];
            _client = this._client;
            obj4 = { method: "get", endpoint: "payment_methods/amex_rewards_balance", data: null };
            obj4.data = tmp9;
            requestResult = _client.request(obj4);
            catchPromise = requestResult.catch(() => {
              /* body not rendered: F150401 */
            });
          } else {
            tmp = globalThis;
            _Promise = Promise;
            tmp2 = closure_0;
            obj = { type: null, code: null, message: "getRewardsBalance must be called with a nonce." };
            tmp3 = closure_1;
            obj.type = closure_1.AMEX_NONCE_REQUIRED.type;
            obj.code = closure_1.AMEX_NONCE_REQUIRED.code;
            self = this;
            self2 = this;
            tmp4 = obj;
            reject = Promise.reject;
            tmp5 = new closure_0(obj);
            tmp6 = tmp5;
            catchPromise = reject(tmp5);
          }
          return catchPromise;
        }
        getExpressCheckoutProfile(arg0) {
          if (global.nonce) {
            self3 = this;
            _client = this._client;
            obj1 = { method: "get", endpoint: null, data: null };
            str = "payment_methods/amex_express_checkout_cards/";
            obj1.endpoint = `payment_methods/amex_express_checkout_cards/${global.nonce}`;
            obj4 = { _meta: null, paymentMethodNonce: null };
            obj4._meta = { source: "american-express" };
            obj4.paymentMethodNonce = global.nonce;
            obj1.data = obj4;
            requestResult = _client.request(obj1);
            catchPromise = requestResult.catch(() => {
              /* body not rendered: F150402 */
            });
          } else {
            tmp = globalThis;
            _Promise = Promise;
            tmp2 = closure_0;
            obj = { type: null, code: null, message: "getExpressCheckoutProfile must be called with a nonce." };
            tmp3 = closure_1;
            obj.type = closure_1.AMEX_NONCE_REQUIRED.type;
            obj.code = closure_1.AMEX_NONCE_REQUIRED.code;
            self = this;
            self2 = this;
            tmp4 = obj;
            reject = Promise.reject;
            tmp5 = new closure_0(obj);
            tmp6 = tmp5;
            catchPromise = reject(tmp5);
          }
          return catchPromise;
        }
        teardown() {
          tmp = closure_4(this, closure_3(AmericanExpress.prototype));
          return Promise.resolve();
        }
      }
      let closure_0 = global("../lib/braintree-error");
      constants = global("./errors");
      const assign = global("../lib/assign").assign;
      let closure_3 = global("../lib/methods");
      let closure_4 = global("../lib/convert-methods-to-error");
      const globalResult = global("@braintree/wrap-promise");
      module.exports = globalResult.wrapPrototype(AmericanExpress);
    },
    {
      "../lib/assign": 140,
      "../lib/braintree-error": 143,
      "../lib/convert-methods-to-error": 146,
      "../lib/methods": 175,
      "./errors": 87,
      "@braintree/wrap-promise": 40,
    },
  ];
  obj[86] = items85;
  const items86 = [
    (arg0, arg1, arg2) => {
      const globalResult = global("../lib/braintree-error");
      const obj = {
        AMEX_NONCE_REQUIRED: { type: globalResult.types.MERCHANT, code: "AMEX_NONCE_REQUIRED" },
        AMEX_NETWORK_ERROR: { type: globalResult.types.NETWORK, code: "AMEX_NETWORK_ERROR" },
      };
      module.exports = obj;
    },
    { "../lib/braintree-error": 143 },
  ];
  obj[87] = items86;
  const items87 = [
    (arg0, arg1, arg2) => {
      let closure_0 = global("./american-express");
      let closure_1 = global("../lib/basic-component-verification");
      let closure_2 = global("../lib/create-deferred-client");
      let closure_3 = global("../lib/create-assets-url");
      let obj = {
        create: global("@braintree/wrap-promise")(function create(client) {
          let obj = { name: "American Express", client: client.client, authorization: client.authorization };
          const verifyResult = closure_1.verify(obj);
          const nextPromise = verifyResult.then(() => {
            const obj = {
              authorization: client.authorization,
              client: client.client,
              debug: client.debug,
              assetsUrl: closure_3.create(client.authorization),
              name: "American Express",
            };
            return closure_2.create(obj);
          });
          return nextPromise.then((client) => {
            client.client = client;
            const tmp = new client(client);
            return tmp;
          });
        }),
        VERSION: "3.112.1",
      };
      module.exports = obj;
    },
    {
      "../lib/basic-component-verification": 141,
      "../lib/create-assets-url": 148,
      "../lib/create-deferred-client": 150,
      "./american-express": 86,
      "@braintree/wrap-promise": 40,
    },
  ];
  obj[88] = items87;
  const items88 = [
    (arg0, arg1, arg2) => {
      class ApplePay {
        constructor(arg0) {
          obj = {
            _instantiatedWithClient: Boolean(!global.useDeferredClient),
            _client: global.client,
            _createPromise: global.createPromise,
          };
          if (obj._client) {
            result = obj._setMerchantIdentifier();
          }
          return;
        }
        _waitForClient() {
          self = this;
          if (this._client) {
            tmp2 = globalThis;
            _Promise = Promise;
            resolved = Promise.resolve();
          } else {
            _createPromise = self._createPromise;
            fn = () => {
              /* body not rendered: F150405 */
            };
            resolved = _createPromise.then(fn.bind(self));
          }
          return resolved;
        }
        _setMerchantIdentifier() {
          _client = this._client;
          applePayWeb = _client.getConfiguration().gatewayConfiguration.applePayWeb;
          if (applePayWeb) {
            tmp = globalThis;
            _Object = Object;
            obj = { value: null, configurable: false, writable: false };
            obj.value = applePayWeb.merchantIdentifier;
            str = "merchantIdentifier";
            definePropertyResult = Object.defineProperty(this, "merchantIdentifier", obj);
          }
          return;
        }
        createPaymentRequest(arg0) {
          self = this;
          closure_0 = global;
          if (this._instantiatedWithClient) {
            result = self._createPaymentRequestSynchronously(global);
          } else {
            _waitForClientResult = self._waitForClient();
            fn = () => {
              /* body not rendered: F150406 */
            };
            result = _waitForClientResult.then(fn.bind(self));
          }
          return result;
        }
        _createPaymentRequestSynchronously(arg0) {
          _client = this._client;
          applePayWeb = _client.getConfiguration().gatewayConfiguration.applePayWeb;
          obj = {
            countryCode: applePayWeb.countryCode,
            currencyCode: applePayWeb.currencyCode,
            merchantCapabilities: null,
            supportedNetworks: null,
          };
          tmp = applePayWeb.merchantCapabilities || ["supports3DS"];
          obj.merchantCapabilities = tmp;
          supportedNetworks = applePayWeb.supportedNetworks;
          obj.supportedNetworks = supportedNetworks.map(function () {
            /* body not rendered: F150407 */
          });
          return Object.assign({}, obj, global);
        }
        performValidation(arg0) {
          self = this;
          closure_0 = global;
          self = this;
          if (global) {
            if (global.validationURL) {
              _waitForClientResult = self._waitForClient();
              nextPromise = _waitForClientResult.then(() => {
                /* body not rendered: F150408 */
              });
              nextPromise1 = nextPromise.then(() => {
                /* body not rendered: F150409 */
              });
              catchPromise = nextPromise1.catch(() => {
                /* body not rendered: F150410 */
              });
            }
            return catchPromise;
          }
          reject = Promise.reject;
          tmp = new closure_0(closure_2.APPLE_PAY_VALIDATION_URL_REQUIRED);
          catchPromise = reject(tmp);
          return;
        }
        tokenize(arg0) {
          self = this;
          closure_0 = global;
          self = this;
          if (global.token) {
            _waitForClientResult = self._waitForClient();
            nextPromise = _waitForClientResult.then(() => {
              /* body not rendered: F150411 */
            });
            nextPromise1 = nextPromise.then(() => {
              /* body not rendered: F150412 */
            });
            catchPromise = nextPromise1.catch(() => {
              /* body not rendered: F150413 */
            });
          } else {
            tmp = globalThis;
            _Promise = Promise;
            tmp2 = closure_0;
            tmp3 = closure_2;
            self2 = this;
            self3 = this;
            reject = Promise.reject;
            tmp4 = new closure_0(closure_2.APPLE_PAY_PAYMENT_TOKEN_REQUIRED);
            tmp5 = tmp4;
            catchPromise = reject(tmp4);
          }
          return catchPromise;
        }
        teardown() {
          tmp = closure_4(this, closure_3(ApplePay.prototype));
          return Promise.resolve();
        }
      }
      let closure_0 = global("../lib/braintree-error");
      let closure_1 = global("../lib/analytics");
      constants = global("./errors");
      let closure_3 = global("../lib/methods");
      let closure_4 = global("../lib/convert-methods-to-error");
      const globalResult = global("@braintree/wrap-promise");
      module.exports = globalResult.wrapPrototype(ApplePay);
    },
    {
      "../lib/analytics": 138,
      "../lib/braintree-error": 143,
      "../lib/convert-methods-to-error": 146,
      "../lib/methods": 175,
      "./errors": 90,
      "@braintree/wrap-promise": 40,
    },
  ];
  obj[89] = items88;
  const items89 = [
    (arg0, arg1, arg2) => {
      const globalResult = global("../lib/braintree-error");
      const obj = {
        APPLE_PAY_NOT_ENABLED: {
          type: globalResult.types.MERCHANT,
          code: "APPLE_PAY_NOT_ENABLED",
          message: "Apple Pay is not enabled for this merchant.",
        },
        APPLE_PAY_VALIDATION_URL_REQUIRED: {
          type: globalResult.types.MERCHANT,
          code: "APPLE_PAY_VALIDATION_URL_REQUIRED",
          message: "performValidation must be called with a validationURL.",
        },
        APPLE_PAY_MERCHANT_VALIDATION_NETWORK: {
          type: globalResult.types.NETWORK,
          code: "APPLE_PAY_MERCHANT_VALIDATION_NETWORK",
          message: "A network error occurred when validating the Apple Pay merchant.",
        },
        APPLE_PAY_MERCHANT_VALIDATION_FAILED: {
          type: globalResult.types.MERCHANT,
          code: "APPLE_PAY_MERCHANT_VALIDATION_FAILED",
          message: "Make sure you have registered your domain name in the Braintree Control Panel.",
        },
        APPLE_PAY_PAYMENT_TOKEN_REQUIRED: {
          type: globalResult.types.MERCHANT,
          code: "APPLE_PAY_PAYMENT_TOKEN_REQUIRED",
          message: "tokenize must be called with a payment token.",
        },
        APPLE_PAY_TOKENIZATION: {
          type: globalResult.types.NETWORK,
          code: "APPLE_PAY_TOKENIZATION",
          message: "A network error occurred when processing the Apple Pay payment.",
        },
      };
      module.exports = obj;
    },
    { "../lib/braintree-error": 143 },
  ];
  obj[90] = items89;
  const items90 = [
    (arg0, arg1, arg2) => {
      let closure_0 = global("./apple-pay");
      let closure_1 = global("../lib/analytics");
      let closure_2 = global("../lib/braintree-error");
      let closure_3 = global("../lib/basic-component-verification");
      let closure_4 = global("../lib/create-assets-url");
      let closure_5 = global("../lib/create-deferred-client");
      let closure_6 = global("./errors");
      let obj = {
        create: global("@braintree/wrap-promise")(function create(client) {
          let obj = { name: "Apple Pay", client: client.client, authorization: client.authorization };
          const verifyResult = closure_3.verify(obj);
          return verifyResult.then(() => {
            const obj = {
              authorization: client.authorization,
              client: client.client,
              debug: client.debug,
              assetsUrl: closure_4.create(client.authorization),
              name: "Apple Pay",
            };
            const obj2 = closure_5.create(obj);
            const nextPromise = obj2.then(function (getConfiguration) {
              let rejectResult;
              if (getConfiguration.getConfiguration().gatewayConfiguration.applePayWeb) {
                closure_1_1.sendEvent(getConfiguration, "applepay.initialized");
                rejectResult = getConfiguration;
              } else {
                const self = this;
                const self2 = this;
                const tmp4 = new closure_1_2(constants.APPLE_PAY_NOT_ENABLED);
                rejectResult = reject(tmp4);
              }
              return rejectResult;
            });
            client.createPromise = nextPromise;
            const tmp = new client(client);
            let nextPromise1 = tmp;
            client = tmp;
            if (!client.useDeferredClient) {
              nextPromise1 = nextPromise.then((_client) => {
                closure_0._client = _client;
                return closure_0;
              });
            }
            return nextPromise1;
          });
        }),
        VERSION: "3.112.1",
      };
      module.exports = obj;
    },
    {
      "../lib/analytics": 138,
      "../lib/basic-component-verification": 141,
      "../lib/braintree-error": 143,
      "../lib/create-assets-url": 148,
      "../lib/create-deferred-client": 150,
      "./apple-pay": 89,
      "./errors": 90,
      "@braintree/wrap-promise": 40,
    },
  ];
  obj[91] = items90;
  const items91 = [
    (arg0, arg1, arg2) => {
      class Client {
        constructor(arg0) {
          obj = {};
          tmp = global || {};
          closure_0 = JSON.stringify(tmp);
          gatewayConfiguration = tmp.gatewayConfiguration;
          if (gatewayConfiguration) {
            items = ["assetsUrl", "clientApiUrl", "configUrl"];
            item = items.forEach(function (item) {
              if (item in gatewayConfiguration) {
                if (!closure_3(tmp[item])) {
                  const self = this;
                  const self2 = this;
                  const obj = {
                    type: constants.CLIENT_GATEWAY_CONFIGURATION_INVALID_DOMAIN.type,
                    code: constants.CLIENT_GATEWAY_CONFIGURATION_INVALID_DOMAIN.code,
                    message: `${item} property is on an invalid domain.`,
                  };
                  const tmp6 = new closure_4(obj);
                  throw tmp6;
                }
              }
            });
            obj.getConfiguration = () => JSON.parse(closure_0);
            tmp7 = closure_2;
            obj._request = closure_2;
            obj._configuration = obj.getConfiguration();
            str = "/v1/";
            obj._clientApiBaseUrl = `${gatewayConfiguration.clientApiUrl}/v1/`;
            if (gatewayConfiguration.graphQL) {
              tmp8 = closure_3;
              if (closure_3(gatewayConfiguration.graphQL.url)) {
                tmp14 = gatewayConfiguration;
                obj1 = { graphQL: null };
                obj1.graphQL = gatewayConfiguration.graphQL;
                self5 = this;
                self6 = this;
                tmp15 = obj1;
                tmp16 = new gatewayConfiguration(obj1);
                tmp17 = tmp16;
                obj._graphQL = tmp16;
              } else {
                tmp9 = closure_4;
                obj4 = { type: null, code: null, message: "graphQL.url property is on an invalid domain." };
                tmp10 = closure_13;
                obj4.type = closure_13.CLIENT_GATEWAY_CONFIGURATION_INVALID_DOMAIN.type;
                obj4.code = closure_13.CLIENT_GATEWAY_CONFIGURATION_INVALID_DOMAIN.code;
                self3 = this;
                self4 = this;
                tmp11 = obj4;
                tmp12 = new closure_4(obj4);
                tmp13 = tmp12;
                throw tmp12;
              }
            }
            return;
          } else {
            tmp2 = closure_4;
            tmp3 = closure_13;
            self = this;
            self2 = this;
            tmp4 = new closure_4(closure_13.CLIENT_MISSING_GATEWAY_CONFIGURATION);
            tmp5 = tmp4;
            throw tmp4;
          }
        }
        static initialize(arg0) {
          closure_0 = global;
          tmp = closure_22[global.authorization];
          if (tmp) {
            tmp14 = closure_12;
            str2 = "custom.client.load.cached";
            sendEventResult = closure_12.sendEvent(tmp, "custom.client.load.cached");
            return tmp;
          } else {
            try {
              tmp2 = closure_7;
              tmp3 = closure_7(global.authorization);
              tmp4 = getConfiguration;
              tmp5 = tmp3;
              promise = getConfiguration(tmp3, global.sessionId);
              nextPromise = promise.then((result) => {
                if (authorization.debug) {
                  result.isDebug = true;
                }
                result.authorization = authorization.authorization;
                obj = Object.create(Client.prototype);
                new Client(result);
                return obj;
              });
              tmp6 = closure_22;
              closure_22[global.authorization] = nextPromise;
              tmp7 = closure_12;
              str = "custom.client.load.initialized";
              sendEventResult1 = closure_12.sendEvent(nextPromise, "custom.client.load.initialized");
              nextPromise1 = nextPromise.then((result) => {
                closure_12.sendEvent(obj, "custom.client.load.succeeded");
                return result;
              });
              return nextPromise1.catch((error) => {
                delete closure_22[authorization.authorization];
                return Promise.reject(error);
              });
            } catch (err) {
              tmp9 = globalThis;
              _Promise = Promise;
              tmp10 = closure_4;
              tmp11 = closure_13;
              self = this;
              self2 = this;
              reject = Promise.reject;
              tmp12 = new closure_4(closure_13.CLIENT_INVALID_AUTHORIZATION);
              tmp13 = tmp12;
              return reject(tmp12);
            }
          }
          return;
        }
        static clearCache() {
          closure_22 = {};
        }
        _findOrCreateFraudnetJSON(arg0) {
          tmp = FRAUDNET_FNCLS;
          element = document.querySelector(`script[fncls="${FRAUDNET_FNCLS}"]`);
          if (!element) {
            _document = document;
            body = document.body;
            _document2 = document;
            str = "script";
            appendChildResult = body.appendChild(document.createElement("script"));
            str2 = "application/json";
            appendChildResult.type = "application/json";
            str3 = "fncls";
            attr = appendChildResult.setAttribute("fncls", tmp);
            element = appendChildResult;
          }
          configuration = this.getConfiguration();
          obj1 = { rda_tenant: "bt_card", mid: configuration.gatewayConfiguration.merchantId };
          closure_0 = obj1;
          str4 = configuration.authorizationFingerprint;
          if (str4) {
            str5 = "&";
            parts = str4.split("&");
            item = parts.forEach((item) => {
              const parts = item.split("=");
              const tmp = "customer_id" === parts[0] && parts.length > 1;
              if (tmp) {
                obj.cid = parts[1];
              }
            });
          }
          obj4 = { f: global.substr(0, 32), fp: obj1, bu: false, s: FRAUDNET_SOURCE };
          element.text = JSON.stringify(obj4);
          return;
        }
        request(arg0, arg1) {
          closure_0 = global;
          closure_1 = module;
          self = this;
          promise = new Promise(function (arg0, arg1) {
            let _clientApiBaseUrl;
            let closure_0;
            let obj6;
            let str5;
            let tmp4;
            endpoint = arg0;
            closure_1 = arg1;
            let tmp = endpoint;
            let collectDeviceData = "payment_methods/credit_cards" === endpoint.endpoint;
            const _Boolean = Boolean;
            if (collectDeviceData) {
              let tmp2 = str5;
              collectDeviceData = str5.getConfiguration().gatewayConfiguration.creditCards.collectDeviceData;
            }
            closure_3 = _Boolean(collectDeviceData);
            let tmp3;
            if ("graphQLApi" !== tmp.api) {
              let str = "options.method";
              if (tmp.method) {
                let str2;
                if (!tmp.endpoint) {
                  str2 = "options.endpoint";
                }
                str = str2;
              }
              tmp3 = str;
            }
            if (tmp3) {
              let obj3 = {
                type: constants.CLIENT_OPTION_REQUIRED.type,
                code: constants.CLIENT_OPTION_REQUIRED.code,
                message: `${tmp3} is required when making a request.`,
              };
              let self3 = this;
              let self4 = this;
              let tmp18 = new closure_1_4(obj3);
              throw tmp18;
            } else {
              str5 = "clientApi";
              if ("api" in tmp) {
                str5 = tmp.api;
              }
              let obj = {
                method: tmp.method,
                graphQL: str5._graphQL,
                timeout: tmp.timeout,
                metadata: str5._configuration.analyticsMetadata,
                url: _clientApiBaseUrl + tmp.endpoint,
                sendAnalyticsEvent() {
                  /* body not rendered: F154251 */
                },
              };
              let obj2 = str5;
              if ("clientApi" === str5) {
                _clientApiBaseUrl = obj2._clientApiBaseUrl;
                obj.data = closure_1_8.addMetadata(obj2._configuration, tmp.data);
              } else if ("graphQLApi" !== str5) {
                let obj4 = {
                  type: constants.CLIENT_OPTION_INVALID.type,
                  code: constants.CLIENT_OPTION_INVALID.code,
                  message: "options.api is invalid.",
                };
                self = this;
                let self2 = this;
                const tmp10 = new closure_1_4(obj4);
                throw tmp10;
              } else {
                _clientApiBaseUrl = GRAPHQL_URLS[obj2._configuration.gatewayConfiguration.environment];
                tmp.endpoint = "";
                obj.method = "post";
                const obj5 = { clientSdkMetadata: obj6 };
                obj6 = {
                  platform: obj2._configuration.analyticsMetadata.platform,
                  source: obj2._configuration.analyticsMetadata.source,
                  integration: obj2._configuration.analyticsMetadata.integration,
                  sessionId: obj2._configuration.analyticsMetadata.sessionId,
                  version,
                };
                obj.data = assign(obj5, tmp.data);
                const _configuration = obj2._configuration;
                const obj7 = { Authorization: `Bearer ${tmp4}`, "Braintree-Version": endpoint };
                tmp4 = _configuration.authorizationFingerprint || _configuration.authorization;
                obj.headers = obj7;
              }
              obj2._request(obj, () => {
                /* body not rendered: F154252 */
              });
            }
          });
          tmp = promise;
          if (typeof module === "function") {
            tmp2 = closure_9;
            tmp3 = closure_10;
            closure_1 = closure_9(closure_10(module));
            nextPromise = promise.then((_httpStatus) => {
              closure_1(null, _httpStatus, _httpStatus._httpStatus);
            });
            catchPromise = nextPromise.catch((error) => {
              const tmp = error && error.details && error.details.httpStatus;
              closure_1(error, null, tmp);
            });
          }
          return tmp;
        }
        toJSON() {
          return this.getConfiguration();
        }
        getVersion() {
          return VERSION;
        }
      }
      const BRAINTREE_VERSION = global("./constants").BRAINTREE_VERSION;
      let closure_1 = global("./request/graphql");
      const _request = global("./request");
      let closure_3 = global("../lib/is-verified-domain");
      let closure_4 = global("../lib/braintree-error");
      let closure_5 = global("../lib/convert-to-braintree-error");
      const getConfiguration = global("./get-configuration").getConfiguration;
      let closure_7 = global("../lib/create-authorization-data");
      let closure_8 = global("../lib/add-metadata");
      const globalResult = global("@braintree/wrap-promise");
      let closure_9 = global("../lib/once");
      let closure_10 = global("../lib/deferred");
      const assign = global("../lib/assign").assign;
      closure_12 = global("../lib/analytics");
      constants = global("./errors");
      const VERSION = global("../lib/constants").VERSION;
      const GRAPHQL_URLS = global("../lib/constants").GRAPHQL_URLS;
      let closure_16 = global("../lib/methods");
      let closure_17 = global("../lib/convert-methods-to-error");
      let closure_18 = global("../lib/assets");
      const FRAUDNET_FNCLS = global("../lib/constants").FRAUDNET_FNCLS;
      const FRAUDNET_SOURCE = global("../lib/constants").FRAUDNET_SOURCE;
      const FRAUDNET_URL = global("../lib/constants").FRAUDNET_URL;
      let closure_22 = {};
      Client.prototype.teardown = globalResult(function () {
        delete closure_22[this.getConfiguration(this).authorization];
        closure_17(this, closure_16(Client.prototype));
        return Promise.resolve();
      });
      module.exports = Client;
    },
    {
      "../lib/add-metadata": 137,
      "../lib/analytics": 138,
      "../lib/assets": 139,
      "../lib/assign": 140,
      "../lib/braintree-error": 143,
      "../lib/constants": 145,
      "../lib/convert-methods-to-error": 146,
      "../lib/convert-to-braintree-error": 147,
      "../lib/create-authorization-data": 149,
      "../lib/deferred": 151,
      "../lib/is-verified-domain": 173,
      "../lib/methods": 175,
      "../lib/once": 176,
      "./constants": 93,
      "./errors": 94,
      "./get-configuration": 95,
      "./request": 108,
      "./request/graphql": 106,
      "@braintree/wrap-promise": 40,
    },
  ];
  obj[92] = items91;
  const items92 = [
    (arg0, arg1, arg2) => {
      module.exports = { BRAINTREE_VERSION: "2018-05-10" };
    },
    {},
  ];
  obj[93] = items92;
  const items93 = [
    (arg0, arg1, arg2) => {
      const globalResult = global("../lib/braintree-error");
      const obj = {
        CLIENT_GATEWAY_CONFIGURATION_INVALID_DOMAIN: {
          type: globalResult.types.MERCHANT,
          code: "CLIENT_GATEWAY_CONFIGURATION_INVALID_DOMAIN",
        },
        CLIENT_OPTION_REQUIRED: { type: globalResult.types.MERCHANT, code: "CLIENT_OPTION_REQUIRED" },
        CLIENT_OPTION_INVALID: { type: globalResult.types.MERCHANT, code: "CLIENT_OPTION_INVALID" },
        CLIENT_MISSING_GATEWAY_CONFIGURATION: {
          type: globalResult.types.INTERNAL,
          code: "CLIENT_MISSING_GATEWAY_CONFIGURATION",
          message: "Missing gatewayConfiguration.",
        },
        CLIENT_INVALID_AUTHORIZATION: {
          type: globalResult.types.MERCHANT,
          code: "CLIENT_INVALID_AUTHORIZATION",
          message: "Authorization is invalid. Make sure your client token or tokenization key is valid.",
        },
        CLIENT_GATEWAY_NETWORK: {
          type: globalResult.types.NETWORK,
          code: "CLIENT_GATEWAY_NETWORK",
          message: "Cannot contact the gateway at this time.",
        },
        CLIENT_REQUEST_TIMEOUT: {
          type: globalResult.types.NETWORK,
          code: "CLIENT_REQUEST_TIMEOUT",
          message: "Request timed out waiting for a reply.",
        },
        CLIENT_REQUEST_ERROR: {
          type: globalResult.types.NETWORK,
          code: "CLIENT_REQUEST_ERROR",
          message: "There was a problem with your request.",
        },
        CLIENT_GRAPHQL_REQUEST_ERROR: {
          type: globalResult.types.NETWORK,
          code: "CLIENT_GRAPHQL_REQUEST_ERROR",
          message: "There was a problem with your request.",
        },
        CLIENT_RATE_LIMITED: {
          type: globalResult.types.MERCHANT,
          code: "CLIENT_RATE_LIMITED",
          message: "You are being rate-limited; please try again in a few minutes.",
        },
        CLIENT_AUTHORIZATION_INSUFFICIENT: {
          type: globalResult.types.MERCHANT,
          code: "CLIENT_AUTHORIZATION_INSUFFICIENT",
          message: "The authorization used has insufficient privileges.",
        },
        CLIENT_AUTHORIZATION_INVALID: {
          type: globalResult.types.MERCHANT,
          code: "CLIENT_AUTHORIZATION_INVALID",
          message:
            "Either the client token has expired and a new one should be generated or the tokenization key has been deactivated or deleted.",
        },
      };
      module.exports = obj;
    },
    { "../lib/braintree-error": 143 },
  ];
  obj[94] = items93;
  const items94 = [
    (arg0, arg1, arg2) => {
      let closure_0 = global("../lib/braintree-error");
      const globalResult = global("@braintree/wrap-promise");
      let closure_1 = global("./request");
      let closure_2 = global("@braintree/uuid");
      let closure_3 = global("../lib/constants");
      let closure_4 = global("./errors");
      let closure_5 = global("./request/graphql");
      const GRAPHQL_URLS = global("../lib/constants").GRAPHQL_URLS;
      let closure_7 = global("../lib/is-date-string-before-or-on");
      const BRAINTREE_VERSION = global("./constants").BRAINTREE_VERSION;
      let obj = {
        getConfiguration: globalResult(function getConfiguration(arg0, sessionId) {
          closure_0 = arg0;
          const promise = new Promise(function (arg0, arg1) {
            let obj3;
            let obj5;
            closure_0 = arg0;
            sessionId = arg1;
            let tmp = sessionId || closure_2();
            const obj = {
              merchantAppId: window.location.host,
              platform: constants.PLATFORM,
              sdkVersion: constants.VERSION,
              source: constants.SOURCE,
              integration: constants.INTEGRATION,
              integrationType: constants.INTEGRATION,
              sessionId: tmp,
            };
            const attrs = closure_0.attrs;
            attrs._meta = obj;
            attrs.braintreeLibraryVersion = constants.BRAINTREE_LIBRARY_VERSION;
            attrs.configVersion = "3";
            const request = { url: closure_0.configUrl, method: "GET", data: attrs };
            if (attrs.authorizationFingerprint) {
              if (closure_0.graphQL) {
                if (closure_7(closure_0.graphQL.date, BRAINTREE_VERSION)) {
                  const obj2 = { graphQL: obj3 };
                  obj3 = { url: tmp3.graphQL.url, features: ["configuration"] };
                  const self3 = this;
                  const self4 = this;
                  const tmp13 = new closure_5(obj2);
                  let tmp14 = tmp13;
                  request.graphQL = tmp13;
                }
                request.metadata = obj;
              }
              sessionId(request, function (originalError, gatewayConfiguration, arg2) {
                let obj5;
                const tmp = originalError;
                if (tmp) {
                  let CLIENT_GATEWAY_NETWORK;
                  if (403 === arg2) {
                    CLIENT_GATEWAY_NETWORK = constants.CLIENT_AUTHORIZATION_INSUFFICIENT;
                  } else if (401 === arg2) {
                    CLIENT_GATEWAY_NETWORK = constants.CLIENT_AUTHORIZATION_INVALID;
                  } else {
                    CLIENT_GATEWAY_NETWORK = constants.CLIENT_GATEWAY_NETWORK;
                  }
                  const obj3 = { type: null, code: null, message: null, details: obj5 };
                  ({ type: obj2.type, code: obj2.code, message: obj2.message } = CLIENT_GATEWAY_NETWORK);
                  const self = this;
                  const self2 = this;
                  obj5 = { originalError };
                  const tmp14 = new closure_2_0(obj3);
                  closure_1(tmp14);
                } else {
                  let str = "CLIENT_TOKEN";
                  if (attrs.tokenizationKey) {
                    str = "TOKENIZATION_KEY";
                  }
                  analyticsMetadata = {
                    authorizationType: str,
                    authorizationFingerprint: attrs.authorizationFingerprint,
                    analyticsMetadata,
                    gatewayConfiguration,
                  };
                  closure_0(analyticsMetadata);
                }
              });
            }
            if (attrs.tokenizationKey) {
              const obj4 = { graphQL: obj5 };
              obj5 = { url: GRAPHQL_URLS[tmp3.environment], features: ["configuration"] };
              let self = this;
              let self2 = this;
              request.graphQL = new closure_5(obj4);
              request.metadata = obj;
              const tmp7 = new closure_5(obj4);
            }
          });
          return promise;
        }),
      };
      module.exports = obj;
    },
    {
      "../lib/braintree-error": 143,
      "../lib/constants": 145,
      "../lib/is-date-string-before-or-on": 170,
      "./constants": 93,
      "./errors": 94,
      "./request": 108,
      "./request/graphql": 106,
      "@braintree/uuid": 36,
      "@braintree/wrap-promise": 40,
    },
  ];
  obj[95] = items94;
  const items95 = [
    (arg0, arg1, arg2) => {
      let closure_0 = global("../lib/braintree-error");
      let closure_1 = global("./client");
      const globalResult = global("@braintree/wrap-promise");
      constants = global("../lib/errors");
      let obj = {
        create: globalResult(function create(authorization) {
          let initializeResult;
          if (authorization.authorization) {
            initializeResult = closure_1.initialize(authorization);
          } else {
            const self = this;
            const self2 = this;
            const obj = {
              type: constants.INSTANTIATION_OPTION_REQUIRED.type,
              code: constants.INSTANTIATION_OPTION_REQUIRED.code,
              message: "options.authorization is required when instantiating a client.",
            };
            const tmp5 = new closure_0(obj);
            initializeResult = reject(tmp5);
          }
          return initializeResult;
        }),
        VERSION: "3.112.1",
      };
      module.exports = obj;
    },
    { "../lib/braintree-error": 143, "../lib/errors": 154, "./client": 92, "@braintree/wrap-promise": 40 },
  ];
  obj[96] = items95;
  const items96 = [
    (arg0, arg1, arg2) => {
      function _requestWithRetry(graphQL, sum, arg2) {
        let data;
        let headers;
        let obj2;
        let queryifyResult1;
        let timeout;
        let tmp22;
        let url;
        closure_0 = graphQL;
        assign = sum;
        closure_2 = arg2;
        graphQL = graphQL.graphQL;
        ({ url, timeout } = graphQL);
        const requestObject = globalResult.getRequestObject();
        let closure_9 = arg2;
        let isGraphQLRequestResult = graphQL;
        const _Boolean = Boolean;
        const tmp = graphQL;
        if (graphQL) {
          isGraphQLRequestResult = graphQL.isGraphQLRequest(url, graphQL.data);
        }
        const _BooleanResult = _Boolean(isGraphQLRequestResult);
        let closure_10 = _BooleanResult;
        graphQL.headers = assign({ "Content-Type": "application/json" }, graphQL.headers);
        if (_BooleanResult) {
          const self3 = this;
          const self4 = this;
          obj2 = new headers(graphQL);
        } else {
          const self = this;
          const self2 = this;
          obj2 = new data(graphQL);
        }
        const url1 = obj2.getUrl();
        const body = obj2.getBody();
        const method = obj2.getMethod();
        headers = obj2.getHeaders();
        let queryifyResult = url1;
        let tmp13 = body;
        if ("GET" === method) {
          queryifyResult = closure_0.queryify(url1, body);
          tmp13 = null;
        }
        if (obj2) {
          requestObject.onreadystatechange = () => {
            if (4 === requestObject.readyState) {
              if (0 === requestObject.status) {
                if (closure_10) {
                  delete graphQL["graphQL"];
                  _requestWithRetry(graphQL, closure_1, closure_2);
                }
              }
              data = determineStatusResult(requestObject.responseText);
              closure_4 = obj2.adaptResponseBody(data);
              determineStatusResult = obj2.determineStatus(requestObject.status, data);
              if (determineStatusResult < 400) {
                if (determineStatusResult >= 200) {
                  closure_9(null, closure_4, determineStatusResult);
                }
              }
              if (closure_10) {
                const tmp16 =
                  !data.data &&
                  data.errors &&
                  data.errors[0] &&
                  data.errors[0].extensions &&
                  data.errors[0].extensions.errorClass;
                const tmp17 = "UNKNOWN" === tmp16 || "INTERNAL" === tmp16;
                if (tmp17) {
                  delete graphQL["graphQL"];
                  _requestWithRetry(graphQL, closure_1, closure_2);
                }
              }
              if (closure_1 < 1) {
                let tmp20 = !determineStatusResult;
                if (determineStatusResult) {
                  tmp20 = 408 === tmp19;
                }
                if (tmp20) {
                  sum = closure_1 + 1;
                  closure_1 = sum;
                  _requestWithRetry(graphQL, sum, closure_2);
                }
              }
              const str3 = closure_4 || "error";
              const tmp22 = determineStatusResult || 500;
              closure_9(str3, null, tmp22);
            }
          };
          queryifyResult1 = queryifyResult;
        } else {
          queryifyResult1 = queryifyResult;
          if (graphQL.headers) {
            let tmp17 = closure_0;
            queryifyResult1 = closure_0.queryify(queryifyResult, headers);
          }
          requestObject.onload = () => {
            closure_9(null, determineStatusResult(requestObject.responseText), requestObject.status);
          };
          requestObject.onerror = () => {
            closure_9("error", null, 500);
          };
          requestObject.onprogress = () => {};
          requestObject.ontimeout = () => {
            closure_9("timeout", null, -1);
          };
        }
        try {
          requestObject.open(method, queryifyResult1, true);
          requestObject.timeout = timeout;
          if (obj2) {
            const _Object = Object;
            const keys = Object.keys(headers);
            const item = keys.forEach((item) => {
              requestObject.setRequestHeader(item, headers[item]);
            });
          }
          try {
            let tmp20 = closure_2;
            requestObject.send(closure_2(method, tmp13));
          } catch (err) {}
        } catch (tmp22) {
          if (_BooleanResult) {
            delete tmp["graphQL"];
            requestObject(graphQL, assign, arg2);
          } else {
            throw tmp22;
          }
        }
      }
      let closure_0 = global("../../lib/querystring");
      let assign = global("../../lib/assign").assign;
      let closure_2 = global("./prep-body");
      let closure_3 = global("./parse-body");
      const globalResult = global("./xhr");
      const isAvailable = globalResult.isAvailable;
      let closure_6 = global("./graphql/request");
      let closure_7 = global("./default-request");
      const obj = {
        request(graphQL, arg1) {
          _requestWithRetry(graphQL, 0, arg1);
        },
      };
      module.exports = obj;
    },
    {
      "../../lib/assign": 140,
      "../../lib/querystring": 177,
      "./default-request": 98,
      "./graphql/request": 107,
      "./parse-body": 109,
      "./prep-body": 110,
      "./xhr": 111,
    },
  ];
  obj[97] = items96;
  const items97 = [
    (arg0, arg1, arg2) => {
      class DefaultRequest {
        constructor(arg0) {
          return;
        }
        getUrl() {
          return this._url;
        }
        getBody() {
          return this._data;
        }
        getMethod() {
          return this._method;
        }
        getHeaders() {
          return this._headers;
        }
        adaptResponseBody(arg0) {
          return global;
        }
        determineStatus(arg0) {
          return global;
        }
      }
      module.exports = DefaultRequest;
    },
    {},
  ];
  obj[98] = items97;
  const items98 = [
    (arg0, arg1, arg2) => {
      let closure_0 = global("./error");
      const assign = global("../../../../lib/assign").assign;
      let closure_2 = {
        AMERICAN_EXPRESS: "American Express",
        DISCOVER: "Discover",
        INTERNATIONAL_MAESTRO: "Maestro",
        JCB: "JCB",
        MASTERCARD: "MasterCard",
        SOLO: "Solo",
        UK_MAESTRO: "UK Maestro",
        UNION_PAY: "UnionPay",
        VISA: "Visa",
        ELO: "Elo",
        HIPER: "Hiper",
        HIPERCARD: "Hipercard",
      };
      let closure_3 = {
        VISA: "visa",
        MASTERCARD: "mastercard",
        DISCOVER: "discover",
        AMERICAN_EXPRESS: "amex",
        INTERNATIONAL_MAESTRO: "maestro",
        ELO: "elo",
      };
      let closure_4 = {
        VISA: "Visa",
        MASTERCARD: "MasterCard",
        DISCOVER: "Discover",
        AMERICAN_EXPRESS: "American Express",
      };
      let closure_5 = {
        VISA: "visa",
        MASTERCARD: "mastercard",
        DISCOVER: "discover",
        AMERICAN_EXPRESS: "amex",
        INTERNATIONAL_MAESTRO: "maestro",
        ELO: "elo",
      };
      let closure_6 = {
        VISA: "visa",
        MASTERCARD: "master",
        DISCOVER: "discover",
        AMERICAN_EXPRESS: "amex",
        DINERS: "diners",
        INTERNATIONAL_MAESTRO: "maestro",
        JCB: "jcb",
      };
      module.exports = function configurationResponseAdapter(data, _graphQL) {
        let obj13;
        let obj2;
        let str;
        let str2;
        let str3;
        let supportedCardBrands1;
        let supportedCardBrands2;
        let supportedCardBrands3;
        let supportedCardBrands4;
        let supportedFeatures;
        const f150431 = (arr, item) => {
          let combined = arr;
          if (closure_0.hasOwnProperty(item)) {
            combined = arr.concat(closure_0[item]);
          }
          return combined;
        };
        if (data.data) {
          let tmp8;
          if (!data.errors) {
            const clientConfiguration = data.data.clientConfiguration;
            const obj = {
              environment: str.toLowerCase(),
              clientApiUrl: null,
              assetsUrl: null,
              analytics: obj2,
              merchantId: clientConfiguration.merchantId,
              venmo: "off",
            };
            str = clientConfiguration.environment;
            ({ clientApiUrl: obj.clientApiUrl, assetsUrl: obj.assetsUrl } = clientConfiguration);
            obj2 = { url: clientConfiguration.analyticsUrl };
            if (clientConfiguration.supportedFeatures) {
              const obj3 = {
                url: _graphQL._graphQL._config.url,
                features: supportedFeatures.map((item) => item.toLowerCase()),
              };
              supportedFeatures = clientConfiguration.supportedFeatures;
              obj.graphQL = obj3;
            }
            if (clientConfiguration.braintreeApi) {
              obj.braintreeApi = clientConfiguration.braintreeApi;
            }
            if (clientConfiguration.applePayWeb) {
              obj.applePayWeb = clientConfiguration.applePayWeb;
              const supportedCardBrands = clientConfiguration.applePayWeb.supportedCardBrands;
              closure_0 = closure_3;
              obj.applePayWeb.supportedNetworks = supportedCardBrands.reduce(f150431, []);
              delete obj.applePayWeb["supportedCardBrands"];
            }
            if (clientConfiguration.fastlane) {
              obj.fastlane = clientConfiguration.fastlane;
            }
            if (clientConfiguration.ideal) {
              obj.ideal = clientConfiguration.ideal;
            }
            if (clientConfiguration.kount) {
              const obj4 = { kountMerchantId: clientConfiguration.kount.merchantId };
              obj.kount = obj4;
            }
            if (clientConfiguration.creditCard) {
              const challenges = clientConfiguration.creditCard.challenges;
              obj.challenges = challenges.map((item) => item.toLowerCase());
              const obj5 = { supportedCardTypes: supportedCardBrands1.reduce(f150431, []) };
              supportedCardBrands1 = clientConfiguration.creditCard.supportedCardBrands;
              closure_0 = closure_2;
              obj.creditCards = obj5;
              obj.threeDSecureEnabled = clientConfiguration.creditCard.threeDSecureEnabled;
              obj.threeDSecure = clientConfiguration.creditCard.threeDSecure;
            } else {
              obj.challenges = [];
              const obj6 = { supportedCardTypes: [] };
              obj.creditCards = obj6;
              obj.threeDSecureEnabled = false;
            }
            if (clientConfiguration.googlePay) {
              const obj7 = {
                displayName: clientConfiguration.googlePay.displayName,
                enabled: true,
                environment: str2.toLowerCase(),
                googleAuthorizationFingerprint: clientConfiguration.googlePay.googleAuthorization,
                paypalClientId: clientConfiguration.googlePay.paypalClientId,
                supportedNetworks: supportedCardBrands2.reduce(f150431, []),
              };
              supportedCardBrands2 = clientConfiguration.googlePay.supportedCardBrands;
              closure_0 = closure_5;
              str2 = clientConfiguration.googlePay.environment;
              obj.androidPay = obj7;
            }
            if (clientConfiguration.venmo) {
              const obj8 = {
                merchantId: clientConfiguration.venmo.merchantId,
                accessToken: clientConfiguration.venmo.accessToken,
                environment: str3.toLowerCase(),
                enrichedCustomerDataEnabled: clientConfiguration.venmo.enrichedCustomerDataEnabled,
              };
              str3 = clientConfiguration.venmo.environment;
              obj.payWithVenmo = obj8;
            }
            if (clientConfiguration.paypal) {
              obj.paypalEnabled = true;
              obj.paypal = assign({}, clientConfiguration.paypal);
              obj.paypal.currencyIsoCode = obj.paypal.currencyCode;
              const str4 = obj.paypal.environment;
              obj.paypal.environment = str4.toLowerCase();
              delete obj.paypal["currencyCode"];
            } else {
              obj.paypalEnabled = false;
            }
            if (clientConfiguration.unionPay) {
              const obj9 = { enabled: true, merchantAccountId: clientConfiguration.unionPay.merchantAccountId };
              obj.unionPay = obj9;
            }
            if (clientConfiguration.visaCheckout) {
              const obj10 = {
                apikey: clientConfiguration.visaCheckout.apiKey,
                encryptionKey: clientConfiguration.visaCheckout.encryptionKey,
                externalClientId: clientConfiguration.visaCheckout.externalClientId,
                supportedCardTypes: supportedCardBrands3.reduce(f150431, []),
              };
              supportedCardBrands3 = clientConfiguration.visaCheckout.supportedCardBrands;
              closure_0 = closure_4;
              obj.visaCheckout = obj10;
            }
            if (clientConfiguration.masterpass) {
              const obj11 = {
                merchantCheckoutId: clientConfiguration.masterpass.merchantCheckoutId,
                supportedNetworks: supportedCardBrands4.reduce(f150431, []),
              };
              supportedCardBrands4 = clientConfiguration.masterpass.supportedCardBrands;
              closure_0 = closure_6;
              obj.masterpass = obj11;
            }
            tmp8 = obj;
            if (clientConfiguration.usBankAccount) {
              const obj12 = { routeId: clientConfiguration.usBankAccount.routeId, plaid: obj13 };
              obj13 = { publicKey: clientConfiguration.usBankAccount.plaidPublicKey };
              obj.usBankAccount = obj12;
              tmp8 = obj;
            }
          }
          return tmp8;
        }
        tmp8 = closure_0(data);
      };
    },
    { "../../../../lib/assign": 140, "./error": 102 },
  ];
  obj[99] = items98;
  const items99 = [
    (arg0, arg1, arg2) => {
      let closure_0 = global("./error");
      let closure_1 = {
        AMERICAN_EXPRESS: "American Express",
        DINERS: "Discover",
        DISCOVER: "Discover",
        ELO: "Elo",
        HIPER: "Hiper",
        HIPERCARD: "Hipercard",
        INTERNATIONAL_MAESTRO: "Maestro",
        JCB: "JCB",
        MASTERCARD: "MasterCard",
        UK_MAESTRO: "Maestro",
        UNION_PAY: "UnionPay",
        VISA: "Visa",
      };
      let closure_2 = { YES: "Yes", NO: "No", UNKNOWN: "Unknown" };
      let closure_3 = { PSDTWO: "psd2" };
      module.exports = function creditCardTokenizationFastlaneResponseAdapter(data) {
        let binData;
        let items2;
        let obj3;
        let str4;
        let tmp4;
        if (data.data) {
          let tmp5;
          if (!data.errors) {
            const tokenizeCreditCardForPayPalConnect = data.data.tokenizeCreditCardForPayPalConnect;
            const details = tokenizeCreditCardForPayPalConnect.paymentMethod.details;
            let str2 = "";
            if (details.last4) {
              const str3 = details.last4;
              str2 = str3.substr(2, 4);
            }
            binData = details.binData;
            if (binData) {
              const items = ["commercial", "debit", "durbinRegulated", "healthcare", "payroll", "prepaid"];
              const item = items.forEach((item) => {
                if (binData[item]) {
                  binData[item] = closure_2[binData[item]];
                } else {
                  binData[item] = "Unknown";
                }
              });
              const items1 = ["issuingBank", "countryOfIssuance", "productId"];
              const item1 = items1.forEach((item) => {
                if (!binData[item]) {
                  tmp[item] = "Unknown";
                }
              });
            }
            const obj = {
              binData,
              consumed: false,
              description: str4,
              nonce: tokenizeCreditCardForPayPalConnect.paymentMethod.id,
              details: obj3,
              type: "CreditCard",
              threeDSecureInfo: null,
            };
            str4 = "";
            if (str2) {
              str4 = `ending in ${str2}`;
            }
            obj3 = {
              cardholderName: null,
              expirationMonth: null,
              expirationYear: null,
              bin: details.bin || "",
              cardType: closure_1[details.brandCode] || "Unknown",
              lastFour: tmp4,
              lastTwo: str2,
            };
            ({
              cardholderName: obj2.cardholderName,
              expirationMonth: obj2.expirationMonth,
              expirationYear: obj2.expirationYear,
            } = details);
            const obj4 = { creditCards: items2 };
            items2 = [obj];
            tmp5 = obj4;
            tmp4 = details.last4 || "";
            if (tokenizeCreditCardForPayPalConnect.authenticationInsight) {
              let formatted = closure_3[str6];
              const first = obj4.creditCards[0];
              if (!formatted) {
                formatted = str6.toLowerCase();
              }
              const obj7 = { regulationEnvironment: formatted };
              first.authenticationInsight = obj7;
              tmp5 = obj4;
            }
          }
          return tmp5;
        }
        tmp5 = binData(data);
      };
    },
    { "./error": 102 },
  ];
  obj[100] = items99;
  const items100 = [
    (arg0, arg1, arg2) => {
      let closure_0 = global("./error");
      let closure_1 = {
        AMERICAN_EXPRESS: "American Express",
        DINERS: "Discover",
        DISCOVER: "Discover",
        ELO: "Elo",
        HIPER: "Hiper",
        HIPERCARD: "Hipercard",
        INTERNATIONAL_MAESTRO: "Maestro",
        JCB: "JCB",
        MASTERCARD: "MasterCard",
        UK_MAESTRO: "Maestro",
        UNION_PAY: "UnionPay",
        VISA: "Visa",
      };
      let closure_2 = { YES: "Yes", NO: "No", UNKNOWN: "Unknown" };
      let closure_3 = { PSDTWO: "psd2" };
      module.exports = function creditCardTokenizationResponseAdapter(data) {
        let binData;
        let items2;
        let obj3;
        let str4;
        let tmp4;
        if (data.data) {
          let tmp5;
          if (!data.errors) {
            const tokenizeCreditCard = data.data.tokenizeCreditCard;
            const creditCard = tokenizeCreditCard.creditCard;
            let str2 = "";
            if (creditCard.last4) {
              const str3 = creditCard.last4;
              str2 = str3.substr(2, 4);
            }
            binData = creditCard.binData;
            if (binData) {
              const items = ["commercial", "debit", "durbinRegulated", "healthcare", "payroll", "prepaid"];
              const item = items.forEach((item) => {
                if (binData[item]) {
                  binData[item] = closure_2[binData[item]];
                } else {
                  binData[item] = "Unknown";
                }
              });
              const items1 = ["issuingBank", "countryOfIssuance", "productId"];
              const item1 = items1.forEach((item) => {
                if (!binData[item]) {
                  tmp[item] = "Unknown";
                }
              });
            }
            const obj = {
              binData,
              consumed: false,
              description: str4,
              nonce: tokenizeCreditCard.token,
              details: obj3,
              type: "CreditCard",
              threeDSecureInfo: null,
            };
            str4 = "";
            if (str2) {
              str4 = `ending in ${str2}`;
            }
            obj3 = {
              cardholderName: null,
              expirationMonth: null,
              expirationYear: null,
              bin: creditCard.bin || "",
              cardType: closure_1[creditCard.brandCode] || "Unknown",
              lastFour: tmp4,
              lastTwo: str2,
            };
            ({
              cardholderName: obj2.cardholderName,
              expirationMonth: obj2.expirationMonth,
              expirationYear: obj2.expirationYear,
            } = creditCard);
            const obj4 = { creditCards: items2 };
            items2 = [obj];
            tmp5 = obj4;
            tmp4 = creditCard.last4 || "";
            if (tokenizeCreditCard.authenticationInsight) {
              let formatted = closure_3[str6];
              const first = obj4.creditCards[0];
              if (!formatted) {
                formatted = str6.toLowerCase();
              }
              const obj7 = { regulationEnvironment: formatted };
              first.authenticationInsight = obj7;
              tmp5 = obj4;
            }
          }
          return tmp5;
        }
        tmp5 = binData(data);
      };
    },
    { "./error": 102 },
  ];
  obj[101] = items100;
  const items101 = [
    (arg0, arg1, arg2) => {
      const f150432 = (field) => {};
      function addFieldError(arr, message, fieldErrors) {
        let obj2;
        const first = arr[0];
        if (1 !== arr.length) {
          const item = fieldErrors.forEach(f150432);
          const tmp5 = obj2;
          if (!tmp5) {
            obj2 = { field: first, fieldErrors: [] };
            arr = fieldErrors.push(obj2);
          }
          addFieldError(arr.slice(1), message, obj2.fieldErrors);
        } else {
          const obj = { code: tmp, field: first, message: message.message };
          fieldErrors.push(obj);
        }
      }
      module.exports = function errorResponseAdapter(errors) {
        let obj3;
        let obj5;
        let tmp2;
        let tmp =
          errors.errors && errors.errors[0] && errors.errors[0].extensions && errors.errors[0].extensions.errorClass;
        if ("VALIDATION" === tmp) {
          let obj4;
          errors = errors.errors;
          const items = [];
          let item = errors.forEach((extensions) => {
            const tmp = extensions.extensions && extensions.extensions.inputPath;
            if (tmp) {
              const inputPath = extensions.extensions.inputPath;
              const substr = inputPath.slice(1);
              let obj2;
              const first = substr[0];
              if (1 !== substr.length) {
                const item = items.forEach(f150432);
                const tmp6 = obj2;
                if (!tmp6) {
                  obj2 = { field: first, fieldErrors: [] };
                  items.push(obj2);
                }
                const substr1 = substr.slice(1);
                const fieldErrors = obj2.fieldErrors;
                let obj3;
                const first1 = substr1[0];
                if (1 !== substr1.length) {
                  const item1 = fieldErrors.forEach(f150432);
                  const tmp14 = obj3;
                  if (!tmp14) {
                    obj3 = { field: first1, fieldErrors: [] };
                    fieldErrors.push(obj3);
                  }
                  addFieldError(substr1.slice(1), extensions, obj3.fieldErrors);
                } else {
                  const obj4 = { code: tmp10, field: first1, message: extensions.message };
                  fieldErrors.push(obj4);
                }
              } else {
                const obj = { code: tmp2, field: first, message: extensions.message };
                items.push(obj);
              }
            }
          });
          if (0 === items.length) {
            let obj2 = { error: obj3 };
            obj3 = { message: errors.errors[0].message };
            obj4 = obj2;
          } else {
            obj4 = { error: obj5, fieldErrors: items };
            obj5 = { message: { creditCard: "Credit card is invalid" }[items[0].field] };
          }
          tmp2 = obj4;
        } else {
          let obj = { error: null, fieldErrors: null };
          if (tmp) {
            const obj6 = { message: errors.errors[0].message };
            obj.error = obj6;
            obj.fieldErrors = [];
            tmp2 = obj;
          } else {
            obj.error = { message: "There was a problem serving your request" };
            obj.fieldErrors = [];
            tmp2 = obj;
          }
        }
        return tmp2;
      };
    },
    {},
  ];
  obj[102] = items101;
  const items102 = [
    (arg0, arg1, arg2) => {
      module.exports = function configuration() {
        return {
          query:
            "query ClientConfiguration {   clientConfiguration {     analyticsUrl     environment     merchantId     assetsUrl     clientApiUrl     creditCard {       supportedCardBrands       challenges       threeDSecureEnabled       threeDSecure {         cardinalAuthenticationJWT       }     }     applePayWeb {       countryCode       currencyCode       merchantIdentifier       supportedCardBrands     }     fastlane {       enabled     }     googlePay {       displayName       supportedCardBrands       environment       googleAuthorization       paypalClientId     }     ideal {       routeId       assetsUrl     }     kount {       merchantId     }     masterpass {       merchantCheckoutId       supportedCardBrands     }     paypal {       displayName       clientId       assetsUrl       environment       environmentNoNetwork       unvettedMerchant       braintreeClientId       billingAgreementsEnabled       merchantAccountId       currencyCode       payeeEmail     }     unionPay {       merchantAccountId     }     usBankAccount {       routeId       plaidPublicKey     }     venmo {       merchantId       accessToken       environment       enrichedCustomerDataEnabled    }     visaCheckout {       apiKey       externalClientId       supportedCardBrands     }     braintreeApi {       accessToken       url     }     supportedFeatures   } }",
          operationName: "ClientConfiguration",
        };
      };
    },
    {},
  ];
  obj[103] = items102;
  const items103 = [
    (arg0, arg1, arg2) => {
      const assign = global("../../../../lib/assign").assign;
      module.exports = function creditCardForFastlaneTokenization(authenticationInsight) {
        let flag;
        let tmp11;
        let merchantAccountId = authenticationInsight.authenticationInsight;
        const _Boolean = Boolean;
        if (merchantAccountId) {
          merchantAccountId = authenticationInsight.merchantAccountId;
        }
        const _BooleanResult = _Boolean(merchantAccountId);
        let str = "mutation TokenizeCreditCardForPayPalConnect($input: TokenizeCreditCardForPayPalConnectInput!";
        if (_BooleanResult) {
          str =
            "mutation TokenizeCreditCardForPayPalConnect($input: TokenizeCreditCardForPayPalConnectInput!, $authenticationInsightInput: AuthenticationInsightInput!";
        }
        const text = `${str}) {   tokenizeCreditCardForPayPalConnect(input: $input) {     clientMutationId     paymentMethod {       id       details {         ... on CreditCardDetails {       bin       brandCode       last4       cardholderName       expirationMonth      expirationYear      binData {         prepaid         healthcare         debit         durbinRegulated         commercial         payroll         issuingBank         countryOfIssuance         productId       }         }       }     }`;
        let text1 = text;
        if (_BooleanResult) {
          text1 = `${str}) {   tokenizeCreditCardForPayPalConnect(input: $input) {     clientMutationId     paymentMethod {       id       details {         ... on CreditCardDetails {       bin       brandCode       last4       cardholderName       expirationMonth      expirationYear      binData {         prepaid         healthcare         debit         durbinRegulated         commercial         payroll         issuingBank         countryOfIssuance         productId       }         }       }     }    authenticationInsight(input: $authenticationInsightInput) {      customerAuthenticationRegulationEnvironment    }`;
        }
        const obj = { query: `${tmp3}  } }`, variables: null, operationName: "TokenizeCreditCardForPayPalConnect" };
        const creditCard = authenticationInsight.creditCard;
        const tmp4 = creditCard.fastlane || {};
        const termsAndConditionsVersion =
          "fastlane" in creditCard &&
          "termsAndConditionsVersion" in creditCard.fastlane &&
          creditCard.fastlane.termsAndConditionsVersion;
        let hasBuyerConsent = "hasBuyerConsent" in tmp4;
        const email = creditCard.email;
        if (hasBuyerConsent) {
          hasBuyerConsent = tmp4.hasBuyerConsent;
        }
        const shippingAddress = creditCard.shippingAddress;
        const creditCard2 = authenticationInsight.creditCard;
        let tmp6 = creditCard2;
        if (tmp6) {
          let expirationMonth = creditCard2.expirationMonth;
          if (!expirationMonth) {
            let trimmed = str4;
            if (trimmed) {
              const str6 = (creditCard2 && creditCard2.expirationDate).split("/")[0];
              trimmed = str6.trim();
            }
            expirationMonth = trimmed;
          }
          tmp6 = expirationMonth;
        }
        let tmp8 = creditCard2;
        if (tmp8) {
          let expirationYear = creditCard2.expirationYear;
          if (!expirationYear) {
            let trimmed1 = str4;
            if (trimmed1) {
              const str8 = (creditCard2 && creditCard2.expirationDate).split("/")[1];
              trimmed1 = str8.trim();
            }
            expirationYear = trimmed1;
          }
          tmp8 = expirationYear;
        }
        const obj3 = {
          input: {
            creditCard: {
              number: creditCard2 && creditCard2.number,
              expirationMonth: tmp6,
              expirationYear: tmp8,
              cvv: creditCard2 && creditCard2.cvv,
              cardholderName: tmp11,
            },
            options: {},
          },
        };
        tmp11 = creditCard2 && creditCard2.cardholderName;
        if (_BooleanResult) {
          const obj4 = { merchantAccountId: authenticationInsight.merchantAccountId };
          obj3.authenticationInsightInput = obj4;
        }
        if (creditCard2 && creditCard2.billingAddress) {
          obj3.input.creditCard.billingAddress = creditCard2 && creditCard2.billingAddress;
        }
        const input = obj3.input;
        if (authenticationInsight.creditCard) {
          if (authenticationInsight.creditCard.options) {
            if (typeof authenticationInsight.creditCard.options.validate === "boolean") {
              flag = authenticationInsight.creditCard.options.validate;
            }
            if (typeof flag === "boolean") {
              const obj5 = { validate: flag };
              input.options = assign(obj5, input.options);
            }
            obj3.input = input;
            const obj6 = { email, optIn: hasBuyerConsent, phone: creditCard.phone, termsAndConditionsVersion };
            const tmp13 = assign({}, obj3.input, obj6);
            if ("authAssertion" in tmp4) {
              tmp13.authAssertion = tmp4.authAssertion;
            }
            if (shippingAddress) {
              tmp13.shippingAddress = shippingAddress;
            }
            const obj7 = { input: tmp13 };
            obj.variables = obj7;
            return obj;
          }
        }
        if (!authenticationInsight.authorizationFingerprint) {
          flag = true;
          if (!authenticationInsight.authorizationFingerprint) {
            if (authenticationInsight.tokenizationKey) {
              flag = false;
            }
          }
        } else {
          flag = true;
        }
      };
    },
    { "../../../../lib/assign": 140 },
  ];
  obj[104] = items103;
  const items104 = [
    (arg0, arg1, arg2) => {
      const assign = global("../../../../lib/assign").assign;
      module.exports = function creditCardTokenization(authenticationInsight) {
        let flag;
        let tmp10;
        let merchantAccountId = authenticationInsight.authenticationInsight;
        const _Boolean = Boolean;
        if (merchantAccountId) {
          merchantAccountId = authenticationInsight.merchantAccountId;
        }
        const _BooleanResult = _Boolean(merchantAccountId);
        let str = "mutation TokenizeCreditCard($input: TokenizeCreditCardInput!";
        if (_BooleanResult) {
          str =
            "mutation TokenizeCreditCard($input: TokenizeCreditCardInput!, $authenticationInsightInput: AuthenticationInsightInput!";
        }
        const text = `${str}) {   tokenizeCreditCard(input: $input) {     token     creditCard {       bin       brandCode       last4       cardholderName       expirationMonth      expirationYear      binData {         prepaid         healthcare         debit         durbinRegulated         commercial         payroll         issuingBank         countryOfIssuance         productId       }     } `;
        let text1 = text;
        if (_BooleanResult) {
          text1 = `${str}) {   tokenizeCreditCard(input: $input) {     token     creditCard {       bin       brandCode       last4       cardholderName       expirationMonth      expirationYear      binData {         prepaid         healthcare         debit         durbinRegulated         commercial         payroll         issuingBank         countryOfIssuance         productId       }     }     authenticationInsight(input: $authenticationInsightInput) {      customerAuthenticationRegulationEnvironment    }`;
        }
        const obj = { query: `${tmp3}  } }`, variables: null, operationName: "TokenizeCreditCard" };
        const creditCard = authenticationInsight.creditCard;
        let tmp5 = creditCard;
        if (tmp5) {
          let expirationMonth = creditCard.expirationMonth;
          if (!expirationMonth) {
            let trimmed = str3;
            if (trimmed) {
              const str5 = (creditCard && creditCard.expirationDate).split("/")[0];
              trimmed = str5.trim();
            }
            expirationMonth = trimmed;
          }
          tmp5 = expirationMonth;
        }
        let tmp7 = creditCard;
        if (tmp7) {
          let expirationYear = creditCard.expirationYear;
          if (!expirationYear) {
            let trimmed1 = str3;
            if (trimmed1) {
              const str7 = (creditCard && creditCard.expirationDate).split("/")[1];
              trimmed1 = str7.trim();
            }
            expirationYear = trimmed1;
          }
          tmp7 = expirationYear;
        }
        const obj3 = {
          input: {
            creditCard: {
              number: creditCard && creditCard.number,
              expirationMonth: tmp5,
              expirationYear: tmp7,
              cvv: creditCard && creditCard.cvv,
              cardholderName: tmp10,
            },
            options: {},
          },
        };
        tmp10 = creditCard && creditCard.cardholderName;
        if (_BooleanResult) {
          const obj4 = { merchantAccountId: authenticationInsight.merchantAccountId };
          obj3.authenticationInsightInput = obj4;
        }
        if (creditCard && creditCard.billingAddress) {
          obj3.input.creditCard.billingAddress = creditCard && creditCard.billingAddress;
        }
        const input = obj3.input;
        if (authenticationInsight.creditCard) {
          if (authenticationInsight.creditCard.options) {
            if (typeof authenticationInsight.creditCard.options.validate === "boolean") {
              flag = authenticationInsight.creditCard.options.validate;
            }
            if (typeof flag === "boolean") {
              const obj5 = { validate: flag };
              input.options = assign(obj5, input.options);
            }
            obj3.input = input;
            obj.variables = obj3;
            return obj;
          }
        }
        if (!authenticationInsight.authorizationFingerprint) {
          flag = true;
          if (!authenticationInsight.authorizationFingerprint) {
            if (authenticationInsight.tokenizationKey) {
              flag = false;
            }
          }
        } else {
          flag = true;
        }
      };
    },
    { "../../../../lib/assign": 140 },
  ];
  obj[105] = items104;
  const items105 = [
    (arg0, arg1, arg2) => {
      class GraphQL {
        constructor(arg0) {
          this._config = global.graphQL;
          return;
        }
        getGraphQLEndpoint() {
          return this._config.url;
        }
        isGraphQLRequest(arg0, arg1) {
          clientApiPath = this.getClientApiPath(global);
          closure_0 = clientApiPath;
          _isGraphQLEnabledResult = this._isGraphQLEnabled();
          tmp3 = !_isGraphQLEnabledResult;
          if (_isGraphQLEnabledResult) {
            tmp3 = !clientApiPath;
          }
          tmp4 = !tmp3;
          if (tmp4) {
            tmp5 = module;
            features = this._config.features;
            closure_0 = module;
            tmp7 = closure_1;
            someResult = features.some(() => {
              /* body not rendered: F150433 */
            });
            someResult1 = closure_1.some(() => {
              /* body not rendered: F154260 */
            });
            tmp9 = !someResult1 && someResult;
            tmp4 = tmp9;
          }
          return tmp4;
        }
        getClientApiPath(arg0) {
          parts = global.split("/client_api/v1/");
          first = undefined;
          if (parts.length > 1) {
            str = parts[1];
            str2 = "?";
            first = str.split("?")[0];
          }
          return first;
        }
        _isGraphQLEnabled() {
          return Boolean(this._config);
        }
      }
      let closure_0 = { tokenize_credit_cards: "payment_methods/credit_cards", configuration: "configuration" };
      let closure_1 = ["creditCard.options.unionPayEnrollment"];
      module.exports = GraphQL;
    },
    {},
  ];
  obj[106] = items105;
  const items106 = [
    (arg0, arg1, arg2) => {
      let closure_8;
      class GraphQLRequest {
        constructor(graphQL) {
          let clientApiPath;
          let prototype;
          obj = {
            _clientSdkMetadata: {
              source: graphQL.metadata.source,
              integration: graphQL.metadata.integration,
              sessionId: graphQL.metadata.sessionId,
            },
            _sendAnalyticsEvent: prototype,
            _generator: closure_8[clientApiPath],
            _adapter: obj[clientApiPath],
          };
          graphQL = graphQL.graphQL;
          clientApiPath = graphQL.getClientApiPath(graphQL.url);
          ({ graphQL: obj._graphQL, data: obj._data, method: obj._method, headers: obj._headers } = graphQL);
          prototype = graphQL.sendAnalyticsEvent;
          if (!prototype) {
            const _Function = Function;
            prototype = Function.prototype;
          }
          obj._sendAnalyticsEvent("graphql.init");
        }
        getUrl() {
          const _graphQL = this._graphQL;
          return _graphQL.getGraphQLEndpoint();
        }
        getBody() {
          _data = this._data;
          obj = {};
          closure_1 = obj;
          keys = Object.keys(_data);
          item = keys.forEach((item) => {
            const tmp = closure_2(item);
            if (typeof _data[item] === "object") {
              let closure_0 = tmp6;
              obj = {};
              const _Object = Object;
              const keys = Object.keys(tmp6);
              item = keys.forEach(f150434);
              obj[tmp] = obj;
            } else if (typeof _data[item] === "number") {
              const _String = String;
              obj[tmp] = String(_data[item]);
            } else {
              obj[tmp] = _data[item];
            }
          });
          obj1 = { clientSdkMetadata: this._clientSdkMetadata };
          return JSON.stringify(closure_1(obj1, this._generator(obj, closure_3(this._data.creditCard))));
        }
        getMethod() {
          return "POST";
        }
        getHeaders() {
          let tokenizationKey;
          const self = this;
          const _sendAnalyticsEvent = this._sendAnalyticsEvent;
          if (this._data.authorizationFingerprint) {
            _sendAnalyticsEvent("graphql.authorization-fingerprint");
            tokenizationKey = self._data.authorizationFingerprint;
          } else {
            _sendAnalyticsEvent("graphql.tokenization-key");
            tokenizationKey = self._data.tokenizationKey;
          }
          obj = { Authorization: `Bearer ${tokenizationKey}`, "Braintree-Version": BRAINTREE_VERSION };
          return assign({}, self._headers, obj);
        }
        adaptResponseBody(arg0) {
          const self = this;
          let tmp = "creditCard" in this._data;
          const _adapter = this._adapter;
          if (tmp) {
            tmp = closure_3(self._data.creditCard);
          }
          return _adapter(arg0, self, tmp);
        }
        determineStatus(arg0, errors) {
          let tmp;
          let num = 200;
          if (200 === arg0) {
            const tmp3 =
              errors.errors &&
              errors.errors[0] &&
              errors.errors[0].extensions &&
              errors.errors[0].extensions.errorClass;
            if (!errors.data) {
              let num2 = 422;
              if ("VALIDATION" !== tmp3) {
                let num4 = 403;
                if ("AUTHORIZATION" !== tmp3) {
                  let num5 = 401;
                  if ("AUTHENTICATION" !== tmp3) {
                    let num6 = 500;
                    const tmp4 = !tmp3 && errors.errors[0].message;
                    if (tmp4) {
                      num6 = 403;
                    }
                    num5 = num6;
                  }
                  num4 = num5;
                }
                num2 = num4;
              }
              num = num2;
            }
            tmp = num;
          } else {
            tmp = arg0 || 500;
          }
          this._sendAnalyticsEvent(`graphql.status.${arg0}`);
          this._sendAnalyticsEvent(`graphql.determinedStatus.${tmp}`);
          return tmp;
        }
      }
      const BRAINTREE_VERSION = global("../../constants").BRAINTREE_VERSION;
      const assign = global("../../../lib/assign").assign;
      let closure_2 = global("../../../lib/snake-case-to-camel-case");
      let closure_3 = global("../../../lib/is-fastlane-checkout");
      let closure_4 = global("./generators/credit-card-tokenization");
      let closure_5 = global("./adapters/credit-card-tokenization");
      let closure_6 = global("./adapters/credit-card-tokenization-fastlane");
      let closure_7 = global("./generators/credit-card-for-fastlane-tokenization");
      query = {
        "payment_methods/credit_cards": (arg0, arg1) => {
          let tmp3;
          const tmp = arg1;
          if (tmp) {
            tmp3 = closure_7(arg0);
          } else {
            tmp3 = closure_4(arg0);
          }
          return tmp3;
        },
        configuration: global("./generators/configuration"),
      };
      global("./generators/configuration");
      let obj = {
        "payment_methods/credit_cards": (arg0, arg1, arg2) => {
          let tmp3;
          const tmp = arg2;
          if (tmp) {
            tmp3 = closure_6(arg0, arg1);
          } else {
            tmp3 = closure_5(arg0, arg1);
          }
          return tmp3;
        },
        configuration: global("./adapters/configuration"),
      };
      module.exports = GraphQLRequest;
    },
    {
      "../../../lib/assign": 140,
      "../../../lib/is-fastlane-checkout": 171,
      "../../../lib/snake-case-to-camel-case": 179,
      "../../constants": 93,
      "./adapters/configuration": 99,
      "./adapters/credit-card-tokenization": 101,
      "./adapters/credit-card-tokenization-fastlane": 100,
      "./generators/configuration": 103,
      "./generators/credit-card-for-fastlane-tokenization": 104,
      "./generators/credit-card-tokenization": 105,
    },
  ];
  obj[107] = items106;
  const items107 = [
    (arg0, arg1, arg2) => {
      let closure_0 = global("../../lib/once");
      let closure_1 = global("./ajax-driver");
      module.exports = (method, arg1) => {
        let prototype = arg1;
        if (!prototype) {
          const _Function = Function;
          prototype = Function.prototype;
        }
        let str = method.method;
        const tmpResult = closure_0(prototype);
        if (!str) {
          str = "GET";
        }
        method.method = str.toUpperCase();
        let num = 60000;
        if (null != method.timeout) {
          num = method.timeout;
        }
        method.timeout = num;
        method.data = method.data || {};
        closure_1.request(method, tmpResult);
      };
    },
    { "../../lib/once": 176, "./ajax-driver": 97 },
  ];
  obj[108] = items107;
  const items108 = [
    (arg0, arg1, arg2) => {
      module.exports = (arg0) => {
        let parsed = arg0;
        try {
          const _JSON = JSON;
          parsed = JSON.parse(parsed);
        } catch (err) {}
        return parsed;
      };
    },
    {},
  ];
  obj[109] = items108;
  const items109 = [
    (arg0, arg1, arg2) => {
      module.exports = function (str, str2) {
        if (typeof str !== "string") {
          const _Error = Error;
          const self = this;
          const self2 = this;
          const error = new Error("Method must be a string");
          throw error;
        } else {
          let tmp3 = str2;
          const tmp2 = "get" !== str.toLowerCase() && null != str2;
          if (tmp2) {
            let json = str2;
            if (typeof "get" !== "string") {
              const _JSON = JSON;
              json = JSON.stringify(str2);
            }
            tmp3 = json;
          }
          return tmp3;
        }
      };
    },
    {},
  ];
  obj[110] = items109;
  const items110 = [
    function (arg0, arg1, arg2) {
      let _XMLHttpRequest = typeof window !== "undefined";
      if (typeof window !== "undefined") {
        const _window2 = window;
        _XMLHttpRequest = window.XMLHttpRequest;
      }
      if (_XMLHttpRequest) {
        let _window = window;
        let self = this;
        let self2 = this;
        let xMLHttpRequest = new window.XMLHttpRequest();
        _XMLHttpRequest = "withCredentials" in xMLHttpRequest;
      }
      module.exports = {
        isAvailable: _XMLHttpRequest,
        getRequestObject() {
          let xMLHttpRequest;
          const _window = window;
          if (_XMLHttpRequest) {
            const self3 = this;
            const self4 = this;
            xMLHttpRequest = new _window.XMLHttpRequest();
          } else {
            const self = this;
            const self2 = this;
            xMLHttpRequest = new _window.XDomainRequest();
          }
          return xMLHttpRequest;
        },
      };
    },
    {},
  ];
  obj[111] = items110;
  const items111 = [
    (arg0, arg1, arg2) => {
      const globalResult = global("../lib/braintree-error");
      const obj = {
        DATA_COLLECTOR_KOUNT_NOT_ENABLED: {
          type: globalResult.types.MERCHANT,
          code: "DATA_COLLECTOR_KOUNT_NOT_ENABLED",
          message: "Kount is not enabled for this merchant.",
        },
        DATA_COLLECTOR_KOUNT_ERROR: { type: globalResult.types.MERCHANT, code: "DATA_COLLECTOR_KOUNT_ERROR" },
        DATA_COLLECTOR_REQUIRES_CREATE_OPTIONS: {
          type: globalResult.types.MERCHANT,
          code: "DATA_COLLECTOR_REQUIRES_CREATE_OPTIONS",
          message: "Data Collector must be created with Kount and/or PayPal.",
        },
      };
      module.exports = obj;
    },
    { "../lib/braintree-error": 143 },
  ];
  obj[112] = items111;
  const items112 = [
    (arg0, arg1, arg2) => {
      class Fraudnet {
        constructor() {}
        initialize(arg0) {
          self = this;
          self = this;
          ({ sessionId, environment } = global);
          if (!sessionId) {
            sessionId = global.clientSessionId;
          }
          self.sessionId = sessionId;
          if (self.sessionId) {
            str = self.sessionId;
            num = 32;
            num2 = 0;
            self.sessionId = str.substring(0, 32);
          }
          if (!global.sessionId) {
            c0 = self.sessionId;
          }
          sessionId2 = self.sessionId;
          date = new Date();
          self._beaconId = `https://b.stats.paypal.com/counter.cgi?i=127.0.0.1&p=${sessionId2}&t=${obj.getTime() / 1000}&a=14`;
          body = document.body;
          ({ sessionId: sessionId3, _beaconId } = self);
          appendChildResult = body.appendChild(document.createElement("script"));
          obj1 = { f: sessionId3, s: FRAUDNET_SOURCE, b: _beaconId };
          if ("production" !== environment) {
            flag = true;
            obj1.sandbox = true;
          }
          appendChildResult.type = "application/json";
          attr = appendChildResult.setAttribute("fncls", FRAUDNET_FNCLS);
          appendChildResult.text = JSON.stringify(obj1);
          self._parameterBlock = appendChildResult;
          obj5 = { src: FRAUDNET_URL };
          promise = loadScript(obj5);
          nextPromise = promise.then((_thirdPartyBlock) => {
            self._thirdPartyBlock = _thirdPartyBlock;
            return self;
          });
          return nextPromise.catch(() => null);
        }
        teardown() {
          const element = document.querySelector('iframe[title="ppfniframe"]');
          const tmp2 = element && element.parentNode;
          if (tmp2) {
            const parentNode = element.parentNode;
            parentNode.removeChild(element);
          }
          const element1 = document.querySelector('iframe[title="pbf"]');
          const tmp5 = element1 && element1.parentNode;
          if (tmp5) {
            const parentNode2 = element1.parentNode;
            parentNode2.removeChild(element1);
          }
          const _parameterBlock = this._parameterBlock;
          const parentNode3 = _parameterBlock && _parameterBlock.parentNode;
          if (parentNode3) {
            const parentNode4 = _parameterBlock.parentNode;
            parentNode4.removeChild(_parameterBlock);
          }
          const _thirdPartyBlock = this._thirdPartyBlock;
          const tmp8 = _thirdPartyBlock && _thirdPartyBlock.parentNode;
          if (tmp8) {
            const parentNode5 = _thirdPartyBlock.parentNode;
            parentNode5.removeChild(_thirdPartyBlock);
          }
        }
      }
      const FRAUDNET_FNCLS = global("../lib/constants").FRAUDNET_FNCLS;
      const FRAUDNET_SOURCE = global("../lib/constants").FRAUDNET_SOURCE;
      const FRAUDNET_URL = global("../lib/constants").FRAUDNET_URL;
      const loadScript = global("../lib/assets").loadScript;
      let obj = {
        setup(arg0) {
          let obj = arg0;
          const prototype = Fraudnet.prototype;
          if (!arg0) {
            obj = {};
          }
          const obj2 = Object.create(prototype);
          if (!obj.sessionId) {
            let resolved;
            if (sessionId) {
              obj2.sessionId = sessionId;
              resolved = Promise.resolve(obj2);
            }
            return resolved;
          }
          resolved = obj2.initialize(obj);
        },
        clearSessionIdCache() {
          let c0 = null;
        },
      };
      module.exports = obj;
    },
    { "../lib/assets": 139, "../lib/constants": 145 },
  ];
  obj[113] = items112;
  const items113 = [
    (arg0, arg1, arg2) => {
      let closure_0 = global("./kount");
      let closure_1 = global("./fraudnet");
      let closure_2 = global("../lib/braintree-error");
      let closure_3 = global("../lib/basic-component-verification");
      let closure_4 = global("../lib/create-deferred-client");
      let closure_5 = global("../lib/create-assets-url");
      let closure_6 = global("../lib/methods");
      let closure_7 = global("../lib/convert-methods-to-error");
      const globalResult = global("@braintree/wrap-promise");
      let closure_8 = globalResult;
      let closure_9 = global("./errors");
      let obj = {
        create: globalResult(function create(client) {
          closure_2 = { _instances: [] };
          let obj = { name: "Data Collector", client: client.client, authorization: client.authorization };
          const verifyResult = closure_3.verify(obj);
          return verifyResult.then(() => {
            let rawDeviceData;
            closure_2._instantiatedWithAClient = !client.useDeferredClient;
            let obj = {
              authorization: client.authorization,
              client: client.client,
              debug: client.debug,
              assetsUrl: closure_5.create(client.authorization),
              name: "Data Collector",
            };
            let obj2 = closure_4.create(obj);
            const nextPromise = obj2.then(function (getConfiguration) {
              const configuration = getConfiguration.getConfiguration();
              if (true === closure_1_0.kount) {
                if (configuration.gatewayConfiguration.kount) {
                  try {
                    const obj = {
                      environment: configuration.gatewayConfiguration.environment,
                      merchantId: configuration.gatewayConfiguration.kount.kountMerchantId,
                    };
                    const setupResult = closure_0.setup(obj);
                    let deviceData = setupResult.deviceData;
                    const _instances = closure_1_2._instances;
                    _instances.push(setupResult);
                  } catch (tmp8) {
                    const self = this;
                    const self2 = this;
                    const obj2 = {
                      type: constants.DATA_COLLECTOR_KOUNT_ERROR.type,
                      code: constants.DATA_COLLECTOR_KOUNT_ERROR.code,
                      message: tmp8.message,
                    };
                    const tmp13 = new closure_2(obj2);
                    return reject(tmp13);
                  }
                }
                return Promise.resolve(getConfiguration);
              }
              deviceData = {};
            });
            const nextPromise1 = nextPromise.then((getConfiguration) => {
              const configuration = getConfiguration.getConfiguration();
              let correlationId = client.riskCorrelationId;
              setup = setup.setup;
              if (!correlationId) {
                correlationId = client.clientMetadataId;
              }
              if (!correlationId) {
                correlationId = client.correlationId;
              }
              const obj = {
                sessionId: correlationId,
                clientSessionId: configuration.analyticsMetadata.sessionId,
                environment: configuration.gatewayConfiguration.environment,
              };
              const setupResult = setup(obj);
              return setupResult.then((sessionId) => {
                const tmp = sessionId;
                if (tmp) {
                  rawDeviceData.correlation_id = sessionId.sessionId;
                  _instances = _instances._instances;
                  _instances.push(sessionId);
                }
              });
            });
            closure_2._createPromise = nextPromise1.then(function () {
              let rejectResult = closure_1_2;
              if (0 === closure_1_2._instances.length) {
                const self = this;
                const self2 = this;
                const tmp8 = new closure_2(constants.DATA_COLLECTOR_REQUIRES_CREATE_OPTIONS);
                rejectResult = reject(tmp8);
              } else {
                const _JSON = JSON;
                rejectResult.deviceData = JSON.stringify(rawDeviceData);
                rejectResult.rawDeviceData = rawDeviceData;
              }
              return rejectResult;
            });
            closure_2.teardown = closure_8(function teardown() {
              return _createPromise._createPromise.then(() => {
                _instances = _instances._instances;
                const item = _instances.forEach((teardown) => {
                  const tmp = teardown;
                  if (tmp) {
                    teardown.teardown();
                  }
                });
                closure_2_7(_instances, closure_2_6(_instances));
              });
            });
            client = closure_2;
            closure_2.getDeviceData = closure_8(function getDeviceData(arg0) {
              const obj = arg0 || {};
              const _createPromise = obj._createPromise;
              return _createPromise.then(() => {
                let resolveResult;
                if (obj.raw) {
                  resolveResult = resolve(closure_0.rawDeviceData);
                } else {
                  resolveResult = resolve(closure_0.deviceData);
                }
                return resolveResult;
              });
            });
            let _createPromise = closure_2;
            if (closure_2._instantiatedWithAClient) {
              _createPromise = closure_2._createPromise;
            }
            return _createPromise;
          });
        }),
        VERSION: "3.112.1",
      };
      module.exports = obj;
    },
    {
      "../lib/basic-component-verification": 141,
      "../lib/braintree-error": 143,
      "../lib/convert-methods-to-error": 146,
      "../lib/create-assets-url": 148,
      "../lib/create-deferred-client": 150,
      "../lib/methods": 175,
      "./errors": 112,
      "./fraudnet": 113,
      "./kount": 115,
      "@braintree/wrap-promise": 40,
    },
  ];
  obj[114] = items113;
  const items114 = [
    (arg0, arg1, arg2) => {
      class Kount {
        constructor(merchantId) {
          const self = this;
          const cachedDeviceData = Kount.getCachedDeviceData(merchantId.merchantId);
          if (cachedDeviceData) {
            self.deviceData = cachedDeviceData;
            self._isCached = true;
          } else {
            self._currentEnvironment = self._initializeEnvironment(merchantId);
            const random = closure_0.random;
            random.startCollectors();
            self._deviceSessionId = self._generateDeviceSessionId();
            self.deviceData = self._getDeviceData();
            Kount.setCachedDeviceData(merchantId.merchantId, self.deviceData);
            self._iframe = self._setupIFrame();
          }
        }
        static getCachedDeviceData(arg0) {
          return closure_3[arg0];
        }
        static setCachedDeviceData(arg0, arg1) {
          closure_3[arg0] = arg1;
        }
        teardown() {
          const self = this;
          if (!this._isCached) {
            const random = closure_0.random;
            random.stopCollectors();
            self._removeIframe();
          }
        }
        _removeIframe() {
          const parentNode = this._iframe.parentNode;
          parentNode.removeChild(this._iframe);
        }
        _getDeviceData() {
          const obj = { deviceSessionId: this._deviceSessionId, fraudMerchantId: this._currentEnvironment.id };
          return closure_1(obj);
        }
        _generateDeviceSessionId() {
          const random = closure_0.random;
          const hex = closure_0.codec.hex;
          return hex.fromBits(random.randomWords(4, 0));
        }
        _setupIFrame() {
          self = this;
          closure_0 = `?m=${this._currentEnvironment.id}&s=${this._deviceSessionId}`;
          element = document.createElement("iframe");
          closure_1 = element;
          element.width = 1;
          element.id = `braintreeDataFrame-${this._deviceSessionId}`;
          element.height = 1;
          element.frameBorder = 0;
          element.scrolling = "no";
          element.style.position = "fixed";
          element.style.left = "-999999px";
          element.style.top = "-999999px";
          element.title = "Braintree-Kount-iframe";
          attr = element.setAttribute("aria-hidden", "true");
          body = document.body;
          appendChildResult = body.appendChild(element);
          timerId = setTimeout(() => {
            element.src = `${self._currentEnvironment.url}/logo.htm${closure_0}`;
            element.innerHTML = `<img src="${self._currentEnvironment.url}/logo.gif${closure_0}" alt="" />`;
          }, 10);
          return element;
        }
        _initializeEnvironment(environment) {
          let obj;
          if (null == obj[environment.environment]) {
            const _Error = Error;
            const self = this;
            const self2 = this;
            const error = new Error(environment.environment + " is not a valid environment for kount.environment");
            throw error;
          } else {
            obj = { url: obj[environment.environment], name: null, id: null };
            ({ environment: obj.name, merchantId: obj.id } = environment);
            return obj;
          }
        }
      }
      handler = global("./vendor/sjcl");
      let closure_1 = global("../lib/camel-case-to-snake-case");
      const environmentUrls = {
        development: "https://assets.qa.braintreepayments.com/data",
        qa: "https://assets.qa.braintreepayments.com/data",
        sandbox: "https://assets.braintreegateway.com/sandbox/data",
        production: "https://assets.braintreegateway.com/data",
      };
      let closure_3 = {};
      const obj2 = {
        setup(arg0) {
          let obj = arg0;
          if (null == arg0) {
            obj = {};
          }
          const obj3 = Object.create(Kount.prototype);
          const cachedDeviceData = Kount.getCachedDeviceData(obj.merchantId);
          if (cachedDeviceData) {
            obj3.deviceData = cachedDeviceData;
            obj3._isCached = true;
          } else {
            obj3._currentEnvironment = obj3._initializeEnvironment(obj);
            const random = closure_0.random;
            random.startCollectors();
            obj3._deviceSessionId = obj3._generateDeviceSessionId();
            obj3.deviceData = obj3._getDeviceData();
            Kount.setCachedDeviceData(obj.merchantId, obj3.deviceData);
            obj3._iframe = obj3._setupIFrame();
          }
          return obj3;
        },
        Kount,
        environmentUrls,
      };
      module.exports = obj2;
    },
    { "../lib/camel-case-to-snake-case": 144, "./vendor/sjcl": 116 },
  ];
  obj[115] = items114;
  const items115 = [
    function (arg0, arg1, arg2) {
      let items1;
      let prng;
      let tmp20;
      function t(arg0, arg1, arg2) {
        let tmp5;
        let tmp6;
        let tmp7;
        let tmp8;
        let tmp9;
        if (4 !== arg1.length) {
          const self = this;
          const self2 = this;
          const invalid = new obj2.exception.invalid("invalid aes block size");
          throw invalid;
        } else {
          let num3 = 3;
          if (arg2) {
            num3 = 1;
          }
          let tmp3 = arg1[num3] ^ arr2[3];
          const diff = arr2.length / 4 - 2;
          const items = [0, 0, 0, 0];
          [tmp5, tmp6, tmp7, tmp8, tmp9] = arg0.l[arg2];
          let num10 = 4;
          let num11 = 0;
          let tmp10 = tmp2;
          let tmp11 = tmp;
          let tmp12 = tmp32;
          let num12 = 4;
          let tmp13 = tmp2;
          let tmp14 = tmp;
          let tmp15 = tmp32;
          let tmp16 = tmp3;
          if (0 < diff) {
            do {
              let tmp17 =
                tmp5[tmp12 >>> 24] ^
                tmp6[(tmp11 >> 16) & 255] ^
                tmp7[(tmp10 >> 8) & 255] ^
                tmp8[255 & tmp3] ^
                arr2[num10];
              let tmp18 =
                tmp5[tmp11 >>> 24] ^
                tmp6[(tmp10 >> 16) & 255] ^
                tmp7[(tmp3 >> 8) & 255] ^
                tmp8[255 & tmp12] ^
                arr2[num10 + 1];
              let tmp19 =
                tmp5[tmp10 >>> 24] ^
                tmp6[(tmp3 >> 16) & 255] ^
                tmp7[(tmp12 >> 8) & 255] ^
                tmp8[255 & tmp11] ^
                arr2[num10 + 2];
              tmp3 =
                tmp5[tmp3 >>> 24] ^
                tmp6[(tmp12 >> 16) & 255] ^
                tmp7[(tmp11 >> 8) & 255] ^
                tmp8[255 & tmp10] ^
                arr2[num10 + 3];
              num10 = num10 + 4;
              num11 = num11 + 1;
              tmp10 = tmp19;
              tmp11 = tmp18;
              tmp12 = tmp17;
              num12 = num10;
              tmp13 = tmp19;
              tmp14 = tmp18;
              tmp15 = tmp17;
              tmp16 = tmp3;
            } while (num11 < diff);
          }
          let num13 = 0;
          do {
            let tmp26 = num13;
            let tmp20 = num12;
            let tmp22 = tmp13;
            let tmp23 = tmp14;
            let tmp24 = tmp15;
            if (arg2) {
              tmp26 = 3 & -num13;
            }
            num12 = num12 + 1;
            items[tmp26] =
              (tmp9[tmp15 >>> 24] << 24) ^
              (tmp9[(tmp14 >> 16) & 255] << 16) ^
              (tmp9[(tmp13 >> 8) & 255] << 8) ^
              tmp9[255 & tmp16] ^
              arr2[tmp20];
            num13 = num13 + 1;
            tmp13 = tmp16;
            tmp14 = tmp22;
            tmp15 = tmp23;
            tmp16 = tmp24;
          } while (num13 < 4);
          return items;
        }
      }
      function u(u, arg1) {
        let tmp11;
        let tmp12;
        let tmp13;
        let tmp15;
        let tmp16;
        let tmp17;
        let tmp2;
        let tmp21;
        let tmp22;
        let tmp3;
        let tmp4;
        let tmp5;
        let tmp6;
        let tmp7;
        let tmp8;
        let tmp9;
        u = u.u;
        [tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9] = u;
        let num = 0;
        do {
          let tmp19;
          tmp11 = tmp8;
          tmp12 = tmp7;
          tmp13 = tmp6;
          tmp15 = tmp4;
          tmp16 = tmp3;
          tmp17 = tmp2;
          if (num < 16) {
            tmp19 = arg1[num];
          } else {
            let tmp23 = arg1[(num + 1) & 15];
            let tmp24 = arg1[(num + 14) & 15];
            let tmp25 = 15 & num;
            tmp19 =
              (((tmp23 >>> 7) ^ (tmp23 >>> 18) ^ (tmp23 >>> 3) ^ (tmp23 << 25) ^ (tmp23 << 14)) +
                ((tmp24 >>> 17) ^ (tmp24 >>> 19) ^ (tmp24 >>> 10) ^ (tmp24 << 15) ^ (tmp24 << 13)) +
                arg1[tmp25] +
                arg1[(num + 9) & 15]) |
              0;
            arg1[tmp25] = tmp19;
          }
          let sum =
            tmp19 +
            tmp9 +
            ((tmp6 >>> 6) ^ (tmp6 >>> 11) ^ (tmp6 >>> 25) ^ (tmp6 << 26) ^ (tmp6 << 21) ^ (tmp6 << 7)) +
            (tmp8 ^ (tmp6 & (tmp7 ^ tmp8))) +
            tmp[num];
          tmp21 = (tmp5 + sum) | 0;
          tmp22 =
            (sum +
              ((tmp2 & tmp3) ^ (tmp4 & (tmp2 ^ tmp3))) +
              ((tmp2 >>> 2) ^ (tmp2 >>> 13) ^ (tmp2 >>> 22) ^ (tmp2 << 30) ^ (tmp2 << 19) ^ (tmp2 << 10))) |
            0;
          num = num + 1;
          tmp9 = tmp8;
          tmp8 = tmp7;
          tmp7 = tmp6;
          tmp6 = tmp21;
          tmp5 = tmp4;
          tmp4 = tmp3;
          tmp3 = tmp2;
          tmp2 = tmp22;
        } while (num < 64);
        u[0] = (u[0] + tmp22) | 0;
        u[1] = (u[1] + tmp17) | 0;
        u[2] = (u[2] + tmp16) | 0;
        u[3] = (u[3] + tmp15) | 0;
        u[4] = (u[4] + tmp21) | 0;
        u[5] = (u[5] + tmp13) | 0;
        u[6] = (u[6] + tmp12) | 0;
        u[7] = (u[7] + tmp11) | 0;
      }
      function C(addEntropy, arg1) {
        if (typeof window !== "undefined") {
          const _window3 = window;
          if (window.performance) {
            const _window = window;
            if (typeof window.performance.now === "function") {
              const _window2 = window;
              const _performance = window.performance;
              addEntropy.addEntropy(_performance.now(), 0, "loadtime");
            }
          }
        }
        addEntropy = addEntropy.addEntropy;
        const date = new Date();
        addEntropy(date.valueOf(), 0, "loadtime");
      }
      function y(g) {
        g.g[0] = (g.g[0] + 1) | 0;
        let num = 0;
        if (!g.g[0]) {
          const sum = num + 1;
          while (sum < 4) {
            g.g[sum] = (g.g[sum] + 1) | 0;
            num = sum;
            if (g.g[sum]) {
              break;
            }
          }
        }
        C = g.C;
        g.g[0] = (g.g[0] + 1) | 0;
        let num2 = 0;
        const concat = C.encrypt(g.g).concat;
        C.encrypt(g.g);
        if (!g.g[0]) {
          const sum1 = num2 + 1;
          while (sum1 < 4) {
            g.g[sum1] = (g.g[sum1] + 1) | 0;
            num2 = sum1;
            if (g.g[sum1]) {
              break;
            }
          }
        }
        const C2 = g.C;
        g.b = concat(C2.encrypt(g.g));
        const aes = new obj2.cipher.aes(g.b);
        g.C = aes;
      }
      const obj2 = {
        cipher: {},
        hash: {},
        keyexchange: {},
        mode: {},
        misc: {},
        codec: {},
        exception: {
          corrupt(arg0) {},
          invalid(arg0) {},
          bug(arg0) {},
          notReady(arg0) {},
        },
        bitArray: {
          bitSlice(arr, arg1, arg2) {
            const bitArray = obj2.bitArray;
            const MResult = bitArray.M(arr.slice(arg1 / 32), 32 - (31 & arg1));
            const substr = MResult.slice(1);
            let clampResult = substr;
            if (undefined !== arg2) {
              const bitArray2 = obj2.bitArray;
              clampResult = bitArray2.clamp(substr, arg2 - arg1);
            }
            return clampResult;
          },
          extract(arg0, arg1, arg2) {
            let tmp3;
            const rounded = Math.floor((-arg1 - arg2) & 31);
            if (-32 & ((arg1 + arg2 - 1) ^ arg1)) {
              tmp3 = (tmp2 << (32 - rounded)) ^ (arg0[(arg1 / 32 + 1) | 0] >>> rounded);
            } else {
              tmp3 = tmp2 >>> rounded;
            }
            return tmp3 & ((1 << arg2) - 1);
          },
          concat(arr, arg1) {
            if (0 !== arr.length) {
              if (0 !== arg1.length) {
                let combined;
                const bitArray = obj2.bitArray;
                const partial = bitArray.getPartial(tmp);
                if (32 === partial) {
                  combined = arr.concat(arg1);
                } else {
                  const bitArray2 = obj2.bitArray;
                  const tmp4 = arr[arr.length - 1] | 0;
                  combined = bitArray2.M(arg1, partial, tmp4, arr.slice(0, arr.length - 1));
                }
                return combined;
              }
            }
            return arr.concat(arg1);
          },
          bitLength(toBitsResult) {
            let num = 0;
            if (0 !== toBitsResult.length) {
              const bitArray = obj2.bitArray;
              const diff = length - 1;
              num = 32 * diff + bitArray.getPartial(toBitsResult[length - 1]);
            }
            return num;
          },
          clamp(arr, arg1) {
            if (32 * arr.length < arg1) {
              return arr;
            } else {
              const _Math = Math;
              const substr = arr.slice(0, Math.ceil(arg1 / 32));
              const tmp = 0 < substr.length && arg1 & 31;
              if (tmp) {
                const bitArray = obj2.bitArray;
                const diff = length - 1;
                substr[diff] = bitArray.partial(
                  arg1 & 31,
                  substr[substr.length - 1] & (2147483648 >> ((arg1 & 31) - 1)),
                  1,
                );
              }
              return substr;
            }
          },
          partial(arg0, arg1, arg2) {
            let sum = arg1;
            if (32 !== arg0) {
              let tmp3;
              const tmp2 = arg2;
              if (tmp2) {
                tmp3 = arg1 | 0;
              } else {
                tmp3 = arg1 << (32 - arg0);
              }
              sum = tmp3 + 1099511627776 * arg0;
            }
            return sum;
          },
          getPartial(arr) {
            const tmp = Math.round(arr / 1099511627776) || 32;
            return tmp;
          },
          equal(toBitsResult, toBitsResult2) {
            let bitArray;
            let bitArray2;
            let length;
            ({ bitArray, bitArray: bitArray2 } = obj2);
            const bitLengthResult = bitArray.bitLength(toBitsResult);
            if (bitLengthResult !== bitArray2.bitLength(toBitsResult)) {
              return false;
            } else {
              let num3 = 0;
              let num4 = 0;
              let num5 = 0;
              if (0 < toBitsResult.length) {
                do {
                  num3 = num3 | (toBitsResult[num4] ^ toBitsResult[num4]);
                  num4 = num4 + 1;
                  num5 = num3;
                  length = toBitsResult.length;
                } while (num4 < length);
              }
              return 0 === num5;
            }
          },
          M(arr, arg1, arg2, arg3) {
            let length;
            let items = arg3;
            if (undefined === arg3) {
              items = [];
            }
            let diff = arg1;
            let num = arg2;
            let num2 = arg2;
            let tmp2 = arg1;
            if (32 <= arg1) {
              do {
                arr = items.push(num);
                diff = diff - 32;
                num = 0;
                num2 = 0;
                tmp2 = diff;
              } while (32 <= diff);
            }
            if (0 === tmp2) {
              return items.concat(arr);
            } else {
              let num3 = 0;
              let tmp5 = num2;
              let arr6 = num2;
              if (0 < arr.length) {
                do {
                  let arr5 = items.push(tmp5 | (arr[num3] >>> tmp2));
                  tmp5 = arr[num3] << (32 - tmp2);
                  num3 = num3 + 1;
                  arr6 = tmp5;
                  length = arr.length;
                } while (num3 < length);
              }
              let num4 = 0;
              if (arr.length) {
                num4 = arr[arr.length - 1];
              }
              const bitArray = obj2.bitArray;
              const partial1 = bitArray.getPartial(num4);
              const bitArray2 = obj2.bitArray;
              const push = items.push;
              const partial = bitArray2.partial;
              const tmp9 = (tmp2 + partial1) & 31;
              if (32 >= tmp2 + partial1) {
                arr6 = items.pop();
              }
              push(partial(tmp9, arr6, 1));
              return items;
            }
          },
          Y(arg0, arg1) {
            const items = [arg0[0] ^ arg1[0], arg0[1] ^ arg1[1], arg0[2] ^ arg1[2], arg0[3] ^ arg1[3]];
            return items;
          },
          byteswapM(arg0) {
            let length;
            let num = 0;
            if (0 < arg0.length) {
              do {
                let tmp = arg0[num];
                arg0[num] = (tmp >>> 24) | ((tmp >>> 8) & 65280) | ((65280 & tmp) << 8) | (tmp << 24);
                num = num + 1;
                length = arg0.length;
              } while (num < length);
            }
            return arg0;
          },
        },
        prng: (D) => {
          const sha256 = new obj2.hash.sha256();
          const items = [sha256];
        },
        random: prng,
      };
      obj2.cipher.aes = function (arr) {
        const self = this;
        if (!this.l[0][0][0]) {
          self.G();
        }
        if (4 !== arr.length) {
          if (6 !== arr.length) {
            if (8 !== arr.length) {
              const self2 = this;
              const self3 = this;
              const invalid = new obj2.exception.invalid("invalid aes key size");
              throw invalid;
            }
          }
        }
        const substr = arr.slice(0);
        const items = [substr];
        const items1 = [];
        items[1] = items1;
        self.b = items;
        let num3 = 1;
        let sum = length;
        let diff1 = length;
        const tmp5 = 8 === arr.length;
        if (arr.length < 4 * arr.length + 28) {
          do {
            let tmp8 = substr[sum - 1];
            let tmp9 = 0 == sum % length;
            if (!tmp9) {
              let tmp12 = tmp5 && 4 == sum % length;
              tmp9 = tmp12;
            }
            let tmp13 = num3;
            let tmp14 = tmp8;
            if (tmp9) {
              let tmp15 =
                (tmp2[tmp8 >>> 24] << 24) ^
                (tmp2[(tmp8 >> 16) & 255] << 16) ^
                (tmp2[(tmp8 >> 8) & 255] << 8) ^
                tmp2[255 & tmp8];
              let tmp16 = num3;
              let tmp17 = tmp15;
              if (0 == sum % length) {
                tmp17 = (tmp15 << 8) ^ (tmp15 >>> 24) ^ (num3 << 24);
                tmp16 = (num3 << 1) ^ (283 * (num3 >> 7));
              }
              tmp13 = tmp16;
              tmp14 = tmp17;
            }
            substr[sum] = substr[sum - length] ^ tmp14;
            sum = sum + 1;
            num3 = tmp13;
            diff1 = sum;
          } while (sum < 4 * arr.length + 28);
        }
        let num4 = 0;
        while (diff1) {
          let diff = diff1;
          if (!(3 & num4)) {
            diff = diff1 - 4;
          }
          let tmp21 = substr[diff];
          let tmp22 = tmp21;
          if (4 < diff1) {
            tmp22 = tmp21;
            if (num4 >= 4) {
              tmp22 =
                tmp3[0][tmp2[tmp21 >>> 24]] ^
                tmp3[1][tmp2[(tmp21 >> 16) & 255]] ^
                tmp3[2][tmp2[(tmp21 >> 8) & 255]] ^
                tmp3[3][tmp2[255 & tmp21]];
            }
          }
          items1[num4] = tmp22;
          num4 = num4 + 1;
          diff1 = diff1 - 1;
        }
      };
      let obj3 = {
        encrypt(g) {
          return t(this, g, 0);
        },
        decrypt(encrypted_nonce) {
          return t(this, encrypted_nonce, 1);
        },
        l: items1,
        G() {
          let tmp15;
          const first = this.l[0];
          const items = [];
          const items1 = [];
          let num = 0;
          const tmp4 = this.l[1][4];
          do {
            let tmp5 = (num << 1) ^ (283 * (num >> 7));
            items[num] = tmp5;
            items1[tmp5 ^ num] = num;
            num = num + 1;
          } while (num < 256);
          let num2 = 0;
          let num3 = 0;
          let num4 = 0;
          if (!first[4][0]) {
            const tmp6 = num2 ^ (num2 << 1) ^ (num2 << 2) ^ (num2 << 3) ^ (num2 << 4);
            first[4][num3] = (tmp6 >> 8) ^ (255 & tmp6) ^ 99;
            tmp4[(tmp6 >> 8) ^ (255 & tmp6) ^ 99] = num3;
            let num5 = items[num3];
            let tmp9 = (16843009 * items[tmp8]) ^ (65537 * tmp8) ^ (257 * num5) ^ (16843008 * num3);
            let tmp10 = (257 * items[tmp7]) ^ (16843008 * tmp7);
            let num6 = 0;
            do {
              do {
                let tmp13 = (tmp10 << 24) ^ (tmp10 >>> 8);
                first[num6][num3] = tmp13;
                let tmp14 = (tmp9 << 24) ^ (tmp9 >>> 8);
                tmp2[num6][tmp7] = tmp14;
                num6 = num6 + 1;
                tmp9 = tmp14;
                tmp10 = tmp13;
              } while (num6 < 4);
              if (!num5) {
                num5 = 1;
              }
              tmp15 = num3 ^ num5;
              let tmp16 = items1[num2] || 1;
              num2 = tmp16;
              num3 = tmp15;
              num4 = 0;
            } while (!first[4][tmp15]);
          }
          do {
            let arr3 = first[num4];
            first[num4] = arr3.slice(0);
            let arr4 = tmp2[num4];
            tmp2[num4] = arr4.slice(0);
            num4 = num4 + 1;
          } while (num4 < 5);
        },
      };
      let items = [[], [], [], [], []];
      items1 = [items];
      let items2 = [[], [], [], [], []];
      items1[1] = items2;
      obj2.cipher.aes.prototype = obj3;
      obj2.codec.utf8String = {
        fromBits(toBitsResult) {
          let tmp2;
          const bitArray = obj2.bitArray;
          const bitLengthResult = bitArray.bitLength(toBitsResult);
          let str = "";
          let str2 = "";
          let num = 0;
          if (0 < bitLengthResult / 8) {
            do {
              let tmp4 = tmp2;
              if (!(3 & num)) {
                tmp4 = toBitsResult[num / 4];
              }
              let _String = String;
              str = str + String.fromCharCode(((tmp4 >>> 8) >>> 8) >>> 8);
              tmp2 = tmp4 << 8;
              num = num + 1;
              str2 = str;
            } while (num < bitLengthResult / 8);
          }
          return decodeURIComponent(escape(str2));
        },
        toBits(arg0) {
          const unescapeResult = unescape(encodeURIComponent(arg0));
          const items = [];
          let num = 0;
          let num2 = 0;
          let num3 = 0;
          let num4 = 0;
          if (0 < unescapeResult.length) {
            do {
              let tmp = (num << 8) | unescapeResult.charCodeAt(num2);
              let num5 = tmp;
              if (!(3 & ~num2)) {
                let arr = items.push(tmp);
                num5 = 0;
              }
              num2 = num2 + 1;
              num = num5;
              num3 = num5;
              num4 = num2;
            } while (num2 < unescapeResult.length);
          }
          if (3 & num4) {
            const bitArray = obj2.bitArray;
            items.push(bitArray.partial(8 * (3 & num4), num3));
          }
          return items;
        },
      };
      obj2.codec.hex = {
        fromBits(toBitsResult) {
          let length;
          let str = "";
          let num = 0;
          let str2 = "";
          if (0 < toBitsResult.length) {
            do {
              let str3 = 263882790666240 + (toBitsResult[num] | 0);
              let str4 = str3.toString(16);
              str = `${str4.substr(4)}`;
              num = num + 1;
              str2 = str;
              length = toBitsResult.length;
            } while (num < length);
          }
          const bitArray = obj2.bitArray;
          return str2.substr(0, bitArray.bitLength(toBitsResult) / 4);
        },
        toBits(str) {
          let length2;
          const items = [];
          const replaced = str.replace(/\s|0x/g, "");
          let num = 0;
          const length = replaced.length;
          if (0 < `${arr2}00000000`.length) {
            do {
              let _parseInt = parseInt;
              let arr = items.push(0 ^ parseInt(`${arr2}00000000`.substr(num, 8), 16));
              num = num + 8;
              length2 = `${arr2}00000000`.length;
            } while (num < length2);
          }
          const bitArray = obj2.bitArray;
          return bitArray.clamp(items, 4 * length);
        },
      };
      obj2.hash.sha256 = function (u) {
        const self = this;
        if (!this.b[0]) {
          self.G();
        }
        const tmp2 = u;
        if (tmp2) {
          u = u.u;
          self.u = u.slice(0);
          const o = u.o;
          self.o = o.slice(0);
          self.h = u.h;
        } else {
          self.reset();
        }
      };
      obj2.hash.sha256.hash = (arg0) => {
        const sha256 = new obj2.hash.sha256();
        const updateResult = sha256.update(arg0);
        return updateResult.finalize();
      };
      obj2.hash.sha256.prototype = {
        blockSize: 512,
        reset() {
          const K = this.K;
          this.u = K.slice(0);
          this.o = [];
          this.h = 0;
          return this;
        },
        update(toBitsResult) {
          if (typeof toBitsResult === "string") {
            const utf8String = obj2.codec.utf8String;
            toBitsResult = utf8String.toBits(toBitsResult);
          }
          const self = this;
          const bitArray = obj2.bitArray;
          const combined = bitArray.concat(this.o, toBitsResult);
          this.o = combined;
          const h = this.h;
          const bitArray2 = obj2.bitArray;
          const sum = h + bitArray2.bitLength(toBitsResult);
          this.h = sum;
          if (9007199254740991 < sum) {
            const self4 = this;
            const self5 = this;
            const invalid = new obj2.exception.invalid("Cannot hash more than 2^53 - 1 bits");
            throw invalid;
          } else {
            const _Uint32Array2 = Uint32Array;
            if (typeof Uint32Array !== "undefined") {
              const _Uint32Array = Uint32Array;
              const self2 = this;
              const self3 = this;
              const uint32Array = new Uint32Array(combined);
              let diff = 512 + h - ((512 + h) & 511);
              let num6 = 0;
              let num7 = 0;
              if (diff <= sum) {
                do {
                  let sum1 = num6 + 1;
                  let tmp12 = u(self, uint32Array.subarray(16 * num6, 16 * sum1));
                  diff = diff + 512;
                  num6 = sum1;
                  num7 = sum1;
                } while (diff <= sum);
              }
              combined.splice(0, 16 * num7);
            } else {
              let diff1 = 512 + h - ((512 + h) & 511);
              if (diff1 <= sum) {
                do {
                  let tmp5 = u(self, combined.splice(0, 16));
                  diff1 = diff1 + 512;
                } while (diff1 <= sum);
              }
            }
            return self;
          }
        },
        finalize() {
          let bitArray;
          let bitArray2;
          let length;
          let o;
          let tmp4;
          const self = this;
          ({ bitArray, bitArray: bitArray2 } = obj2);
          ({ o, u } = this);
          const concat = bitArray.concat;
          const items = [bitArray2.partial(1, 1)];
          const combined = concat(o, items);
          let sum = combined.length + 2;
          if (15 & sum) {
            do {
              let arr = combined.push(0);
              let sum1 = sum + 1;
              sum = sum1;
              tmp4 = 15 & sum1;
            } while (tmp4);
          }
          combined.push(Math.floor(self.h / 4294967296));
          combined.push(self.h | 0);
          if (combined.length) {
            do {
              let tmp8 = u(self, combined.splice(0, 16));
              length = combined.length;
            } while (length);
          }
          self.reset();
          return u;
        },
        K: [],
        b: [],
        G() {
          let sum1;
          const self = this;
          let num = 2;
          let num2 = 0;
          do {
            let num3 = 2;
            let flag = true;
            if (4 <= num) {
              flag = false;
              while (0 !== num % num3) {
                let sum = num3 + 1;
                num3 = sum;
                flag = true;
                if (sum * sum > num) {
                  break;
                }
              }
            }
            sum1 = num2;
            if (flag) {
              if (num2 < 8) {
                let _Math = Math;
                let K = self.K;
                let powResult = Math.pow(num, 0.5);
                let _Math2 = Math;
                K[num2] = (4294967296 * (powResult - Math.floor(powResult))) | 0;
              }
              let _Math3 = Math;
              let b = self.b;
              let powResult1 = Math.pow(num, 0.3333333333333333);
              let _Math4 = Math;
              b[num2] = (4294967296 * (powResult1 - Math.floor(powResult1))) | 0;
              sum1 = num2 + 1;
            }
            num = num + 1;
            num2 = sum1;
          } while (sum1 < 64);
        },
      };
      obj2.prng.prototype = {
        randomWords(arg0, arg1) {
          const self = this;
          const isReadyResult = this.isReady(arg1);
          if (isReadyResult === this.m) {
            const self8 = this;
            const self9 = this;
            const notReady = new obj2.exception.notReady("generator isn't seeded");
            throw notReady;
          } else {
            let num13;
            if (isReadyResult & self.A) {
              const items = [];
              const _Date = Date;
              const self2 = this;
              const self3 = this;
              const tmp2 = isReadyResult & self.w;
              const date = new Date();
              const sum = date.valueOf() + self.P;
              items[0] = sum;
              self.L = sum;
              let num5 = 0;
              do {
                let _Math = Math;
                let arr = items.push((4294967296 * Math.random()) | 0);
                num5 = num5 + 1;
              } while (num5 < 16);
              let num6 = 0;
              let tmp7 = items;
              if (0 < self.c.length) {
                const first = self.c[0];
                const combined = items.concat(first.finalize());
                const first1 = self.i[0];
                self.i[0] = 0;
                let tmp11 = first1;
                let num7 = 0;
                let obj3 = combined;
                if (!tmp2) {
                  const sum1 = num7 + 1;
                  num6 = tmp11;
                  tmp7 = obj3;
                  while (sum1 < self.c.length) {
                    let obj4 = self.c[sum1];
                    let combined1 = obj3.concat(obj4.finalize());
                    let sum2 = tmp11 + self.i[sum1];
                    self.i[sum1] = 0;
                    tmp11 = sum2;
                    num7 = sum1;
                    obj3 = combined1;
                    if (tmp8) {
                      continue;
                    } else {
                      tmp11 = sum2;
                      num7 = sum1;
                      obj3 = combined1;
                      num6 = sum2;
                      tmp7 = combined1;
                      if (self.H & (1 << sum1)) {
                        break;
                      }
                    }
                    continue;
                  }
                } else {
                  tmp11 = first1;
                  num7 = 0;
                  obj3 = combined;
                  num6 = first1;
                  tmp7 = combined;
                }
              }
              if (self.H >= 1 << self.c.length) {
                const c = self.c;
                const self4 = this;
                const self5 = this;
                const push = c.push;
                const sha2561 = new obj2.hash.sha256();
                push(sha2561);
                const i = self.i;
                i.push(0);
              }
              self.f = self.f - num6;
              if (num6 > self.j) {
                self.j = num6;
              }
              self.H = self.H + 1;
              const sha256 = obj2.hash.sha256;
              const b = self.b;
              self.b = sha256.hash(b.concat(tmp7));
              const self6 = this;
              const self7 = this;
              const aes = new obj2.cipher.aes(self.b);
              self.C = aes;
              self.g[0] = (self.g[0] + 1) | 0;
              let num9 = 0;
              if (!self.g[0]) {
                const sum3 = num9 + 1;
                while (sum3 < 4) {
                  self.g[sum3] = (self.g[sum3] + 1) | 0;
                  num9 = sum3;
                  if (self.g[sum3]) {
                    break;
                  }
                }
              }
            }
            const items1 = [];
            for (let num13 = 0; num13 < arg0; num13 = num13 + 4) {
              if (0 === (num13 + 1) % self.O) {
                let tmp29 = y(self);
              }
              self.g[0] = (self.g[0] + 1) | 0;
              let num14 = 0;
              if (!self.g[0]) {
                let sum4 = num14 + 1;
                while (sum4 < 4) {
                  self.g[sum4] = (self.g[sum4] + 1) | 0;
                  num14 = sum4;
                  if (self.g[sum4]) {
                    break;
                  }
                }
              }
              C = self.C;
              let encryptResult = C.encrypt(self.g);
              let arr4 = items1.push(encryptResult[0], encryptResult[1], encryptResult[2], encryptResult[3]);
            }
            y(self);
            return items1.slice(0, arg0);
          }
        },
        setDefaultParanoia(D, arg1) {
          if (0 === D) {
            if ("Setting paranoia=0 will ruin your security; use it only for testing" !== arg1) {
              const self = this;
              const self2 = this;
              const invalid = new obj2.exception.invalid(
                "Setting paranoia=0 will ruin your security; use it only for testing",
              );
              throw invalid;
            }
          }
          this.D = D;
        },
        addEntropy(_performance, arg1, loadtime) {
          let length2;
          let length3;
          let num3;
          let num4;
          let tmp10;
          let tmp17;
          const self = this;
          const date = new Date();
          const valueOfResult = date.valueOf();
          let num = this.v[tmp];
          let tmp4 = this.J[tmp];
          const isReadyResult = this.isReady();
          if (undefined === tmp4) {
            self.T = +self.T + 1;
            self.J[loadtime || "user"] = +self.T;
            tmp4 = tmp5;
          }
          if (undefined === num) {
            self.v[loadtime || "user"] = 0;
            num = 0;
          }
          self.v[loadtime || "user"] = (self.v[loadtime || "user"] + 1) % self.c.length;
          if ("number" === typeof _performance) {
            let num16 = arg1;
            if (undefined === arg1) {
              num16 = 1;
            }
            const items = [, , , , , ,];
            const obj5 = self.c[num];
            items[0] = tmp4;
            self.F = +self.F + 1;
            items[1] = +self.F;
            items[2] = 1;
            items[3] = num16;
            items[4] = valueOfResult;
            items[5] = 1;
            num3 = _performance | 0;
            items[6] = num3;
            obj5.update(items);
            num4 = 0;
            tmp10 = num16;
          } else if ("object" === typeof _performance) {
            let arr2;
            const _Object = Object;
            const callResult = toString.call(_performance);
            if ("[object Uint32Array]" === callResult) {
              const items1 = [];
              let num10 = 0;
              num3 = 0;
              arr2 = items1;
              if (0 < _performance.length) {
                do {
                  let arr = items1.push(_performance[num10]);
                  let sum = num10 + 1;
                  num10 = sum;
                  num3 = 0;
                  arr2 = items1;
                  tmp17 = sum < _performance.length;
                } while (tmp17);
              }
            } else {
              let num6 = 0;
              if ("[object Array]" !== callResult) {
                num6 = 1;
              }
              num3 = num6;
              arr2 = _performance;
              if (0 < _performance.length) {
                let tmp14 = num6;
                let num8 = 0;
                arr2 = _performance;
                num3 = num6;
                if (!num3) {
                  while (true) {
                    let num7 = tmp14;
                    if (typeof _performance[num8] !== "number") {
                      num7 = 1;
                    }
                    let sum1 = num8 + 1;
                    num3 = num7;
                    arr2 = _performance;
                    if (sum1 >= _performance.length) {
                      break;
                    } else {
                      tmp14 = num7;
                      num8 = sum1;
                      num3 = num7;
                      arr2 = _performance;
                      if (num7) {
                        break;
                      }
                    }
                  }
                }
              }
            }
            tmp10 = arg1;
            num4 = num3;
            if (!num4) {
              let num11 = arg1;
              if (undefined === arg1) {
                let num13 = 0;
                let num14 = 0;
                num11 = 0;
                if (0 < arr2.length) {
                  do {
                    let tmp18 = arr2[num13];
                    let sum2 = num14;
                    let tmp21 = num14;
                    if (0 < tmp18) {
                      do {
                        sum2 = sum2 + 1;
                        tmp18 = tmp18 >>> 1;
                        tmp21 = sum2;
                      } while (0 < tmp18);
                    }
                    num13 = num13 + 1;
                    num14 = tmp21;
                    num11 = tmp21;
                  } while (num13 < arr2.length);
                }
              }
              const items2 = [, , , , ,];
              const obj4 = self.c[num];
              items2[0] = tmp4;
              self.F = +self.F + 1;
              items2[1] = +self.F;
              items2[2] = 2;
              items2[3] = num11;
              items2[4] = valueOfResult;
              items2[5] = arr2.length;
              obj4.update(items2.concat(arr2));
              tmp10 = num11;
              num4 = num3;
            }
          } else {
            num4 = 1;
            tmp10 = arg1;
            if ("string" === typeof _performance) {
              let length = arg1;
              if (undefined === arg1) {
                length = _performance.length;
              }
              const items3 = [tmp4, , , , ,];
              self.F = +self.F + 1;
              items3[1] = +self.F;
              num3 = 3;
              items3[2] = 3;
              items3[3] = length;
              items3[4] = valueOfResult;
              items3[5] = _performance.length;
              self.c[num].update(items3);
              const obj3 = self.c[num];
              obj3.update(_performance);
              num4 = 0;
              tmp10 = length;
            }
          }
          if (num4) {
            const self2 = this;
            const self3 = this;
            const bug = new obj2.exception.bug("random: addEntropy only supports number, array of numbers or string");
            throw bug;
          } else {
            const i = self.i;
            i[num] = i[num] + tmp10;
            self.f = self.f + tmp10;
            if (isReadyResult === self.m) {
              if (self.isReady() !== self.m) {
                const _Math = Math;
                const seeded = obj2.random.B.seeded;
                const items4 = [];
                const bound = Math.max(self.j, self.f);
                for (const key10119 in seeded) {
                  if (!seeded.hasOwnProperty(key10119)) {
                    continue;
                  } else {
                    let arr3 = items4.push(seeded[key10119]);
                    continue;
                  }
                  continue;
                }
                let num17 = 0;
                if (0 < items4.length) {
                  do {
                    let tmp27 = items4[num17](bound);
                    num17 = num17 + 1;
                    length2 = items4.length;
                  } while (num17 < length2);
                }
              }
              const progress = obj2.random.B.progress;
              const items5 = [];
              const progress1 = self.getProgress();
              for (const key10138 in progress) {
                if (!progress.hasOwnProperty(key10138)) {
                  continue;
                } else {
                  let arr4 = items5.push(progress[key10138]);
                  continue;
                }
                continue;
              }
              let num18 = 0;
              if (0 < items5.length) {
                do {
                  let tmp32 = items5[num18](progress1);
                  num18 = num18 + 1;
                  length3 = items5.length;
                } while (num18 < length3);
              }
            }
          }
        },
        isReady(arg0) {
          let m;
          const self = this;
          let D = arg0;
          const I = this.I;
          if (undefined === arg0) {
            D = self.D;
          }
          if (self.j) {
            if (self.j >= I[D]) {
              if (self.i[0] > self.N) {
                let w;
                const _Date = Date;
                const self2 = this;
                const self3 = this;
                const date = new Date();
                if (date.valueOf() > self.L) {
                  w = self.A | self.w;
                }
                m = w;
              }
              w = self.w;
            }
            return m;
          }
          if (self.f >= I[D]) {
            m = self.A | self.m;
          } else {
            m = self.m;
          }
        },
        getProgress(arg0) {
          const self = this;
          let D = arg0;
          const I = this.I;
          if (!arg0) {
            D = self.D;
          }
          let num = 1;
          if (self.j < I[D]) {
            num = 1;
            if (self.f <= I[D]) {
              num = self.f / tmp;
            }
          }
          return num;
        },
        startCollectors() {
          const loadTimeCollector = function () {
            X(...arguments);
          };
          const self = this;
          if (!this.s) {
            const V = self.X;
            const obj = {
              loadTimeCollector,
              mouseCollector: loadTimeCollector,
              keyboardCollector: loadTimeCollector,
              accelerometerCollector: loadTimeCollector,
              touchCollector: loadTimeCollector,
            };
            self.a = obj;
            const _window = window;
            if (window.addEventListener) {
              const _window2 = window;
              const listener = window.addEventListener("load", self.a.loadTimeCollector, false);
              const _window3 = window;
              const listener1 = window.addEventListener("mousemove", self.a.mouseCollector, false);
              const _window4 = window;
              const listener2 = window.addEventListener("keypress", self.a.keyboardCollector, false);
              const _window5 = window;
              const listener3 = window.addEventListener("devicemotion", self.a.accelerometerCollector, false);
              const _window6 = window;
              const listener4 = window.addEventListener("touchmove", self.a.touchCollector, false);
            } else {
              const _document = document;
              if (document.attachEvent) {
                const _document2 = document;
                document.attachEvent("onload", self.a.loadTimeCollector);
                const _document3 = document;
                document.attachEvent("onmousemove", self.a.mouseCollector);
                const _document4 = document;
                document.attachEvent("keypress", self.a.keyboardCollector);
              } else {
                const self2 = this;
                const self3 = this;
                const bug = new obj2.exception.bug("can't attach event");
                throw bug;
              }
            }
            self.s = true;
          }
        },
        stopCollectors() {
          const self = this;
          if (this.s) {
            const _window = window;
            if (window.removeEventListener) {
              const _window2 = window;
              const removed = window.removeEventListener("load", self.a.loadTimeCollector, false);
              const _window3 = window;
              const removed1 = window.removeEventListener("mousemove", self.a.mouseCollector, false);
              const _window4 = window;
              const removed2 = window.removeEventListener("keypress", self.a.keyboardCollector, false);
              const _window5 = window;
              const removed3 = window.removeEventListener("devicemotion", self.a.accelerometerCollector, false);
              const _window6 = window;
              const removed4 = window.removeEventListener("touchmove", self.a.touchCollector, false);
            } else {
              const _document = document;
              if (document.detachEvent) {
                const _document2 = document;
                document.detachEvent("onload", self.a.loadTimeCollector);
                const _document3 = document;
                document.detachEvent("onmousemove", self.a.mouseCollector);
                const _document4 = document;
                document.detachEvent("keypress", self.a.keyboardCollector);
              }
            }
            self.s = false;
          }
        },
        addEventListener(arg0, arg1) {
          this.S = +this.S + 1;
          this.B[arg0][+this.S] = arg1;
        },
        removeEventListener(arg0, arg1) {
          let length;
          const items = [];
          for (const key10008 in obj) {
            let hasOwnPropertyResult = obj.hasOwnProperty(key10008) && obj[key10008] === arg1;
            if (!hasOwnPropertyResult) {
              continue;
            } else {
              let arr2 = items.push(key10008);
              continue;
            }
            continue;
          }
          let num = 0;
          if (0 < items.length) {
            do {
              delete obj[arr[num]];
              num = num + 1;
              length = items.length;
            } while (num < length);
          }
        },
        U() {
          const self = this;
          if (typeof window !== "undefined") {
            const _window3 = window;
            if (window.performance) {
              const _window = window;
              if (typeof window.performance.now === "function") {
                const _window2 = window;
                const _performance = window.performance;
                self.addEntropy(_performance.now(), 1, "loadtime");
              }
            }
          }
          const addEntropy = self.addEntropy;
          const date = new Date();
          addEntropy(date.valueOf(), 1, "loadtime");
        },
        W(arg0) {
          let num2;
          let num4;
          try {
            num2 = arg0.x || arg0.clientX || arg0.offsetX || 0;
            num4 = arg0.y || arg0.clientY || arg0.offsetY || 0;
            const num = arg0.x || arg0.clientX || arg0.offsetX || 0;
            const num3 = arg0.y || arg0.clientY || arg0.offsetY || 0;
          } catch (err) {
            num2 = 0;
            num4 = 0;
          }
          const self = this;
          const tmp2 = 0 != num2 && 0 != num4;
          if (tmp2) {
            const items = [num2, num4];
            self.addEntropy(items, 2, "mouse");
          }
          C(self, 0);
        },
        X(arg0) {
          const self = this;
          let clientX = tmp.pageX;
          const addEntropy = this.addEntropy;
          if (!clientX) {
            clientX = tmp.clientX;
          }
          const items = [
            clientX,
            (arg0.touches[0] || arg0.changedTouches[0]).pageY || (arg0.touches[0] || arg0.changedTouches[0]).clientY,
          ];
          addEntropy(items, 1, "touch");
          if (typeof window !== "undefined") {
            const _window3 = window;
            if (window.performance) {
              const _window = window;
              if (typeof window.performance.now === "function") {
                const _window2 = window;
                const _performance = window.performance;
                self.addEntropy(_performance.now(), 0, "loadtime");
              }
            }
          }
          const addEntropy2 = self.addEntropy;
          const date = new Date();
          addEntropy2(date.valueOf(), 0, "loadtime");
        },
        V() {
          const self = this;
          if (typeof window !== "undefined") {
            const _window3 = window;
            if (window.performance) {
              const _window = window;
              if (typeof window.performance.now === "function") {
                const _window2 = window;
                const _performance = window.performance;
                self.addEntropy(_performance.now(), 2, "loadtime");
              }
            }
          }
          const addEntropy = self.addEntropy;
          const date = new Date();
          addEntropy(date.valueOf(), 2, "loadtime");
        },
        R(accelerationIncludingGravity) {
          const self = this;
          if (window.orientation) {
            const _window = window;
            if (typeof orientation === "number") {
              self.addEntropy(orientation, 1, "accelerometer");
            }
          }
          if (
            accelerationIncludingGravity.accelerationIncludingGravity.x ||
            accelerationIncludingGravity.accelerationIncludingGravity.y ||
            accelerationIncludingGravity.accelerationIncludingGravity.z
          ) {
            self.addEntropy(
              accelerationIncludingGravity.accelerationIncludingGravity.x ||
                accelerationIncludingGravity.accelerationIncludingGravity.y ||
                accelerationIncludingGravity.accelerationIncludingGravity.z,
              2,
              "accelerometer",
            );
          }
          if (typeof window !== "undefined") {
            const _window4 = window;
            if (window.performance) {
              const _window2 = window;
              if (typeof window.performance.now === "function") {
                const _window3 = window;
                const _performance = window.performance;
                self.addEntropy(_performance.now(), 0, "loadtime");
              }
            }
          }
          const addEntropy = self.addEntropy;
          const date = new Date();
          addEntropy(date.valueOf(), 0, "loadtime");
        },
      };
      prng = new obj2.prng(6);
      try {
        let obj;
        const _exports = undefined !== module && module.exports;
        let tmp2 = _exports;
        if (tmp2) {
          let globalResult;
          try {
            let str = "crypto";
            globalResult = global("crypto");
          } catch (err) {
            globalResult = null;
          }
          obj = globalResult;
          tmp2 = globalResult;
        }
        if (tmp2) {
          let tmp5 = obj;
          if (obj.randomBytes) {
            let tmp13 = obj;
            let num2 = 128;
            let tmp14 = globalThis;
            let _Uint32Array = Uint32Array;
            const _Uint8Array = Uint8Array;
            let self = this;
            let self2 = this;
            const uint8Array = new Uint8Array(obj.randomBytes(128));
            let tmp16 = uint8Array;
            let self3 = this;
            let self4 = this;
            let uint32Array = new Uint32Array(uint8Array.buffer);
            const random2 = obj2.random;
            let str3 = "crypto['randomBytes']";
            let num3 = 1024;
            let tmp18 = uint32Array;
            random2.addEntropy(uint32Array, 1024, "crypto['randomBytes']");
          }
          const _exports2 = undefined !== module && module.exports;
          if (_exports2) {
            module.exports = obj2;
          }
        }
        let tmp6 = globalThis;
        let _window = window;
        if (typeof window !== "undefined") {
          let _Uint32Array2 = Uint32Array;
          if (typeof Uint32Array !== "undefined") {
            const _Uint32Array3 = Uint32Array;
            let self5 = this;
            let num4 = 32;
            let self6 = this;
            const uint32Array1 = new Uint32Array(32);
            let tmp25 = uint32Array1;
            const _window8 = window;
            if (window.crypto) {
              let _window2 = window;
              if (window.crypto.getRandomValues) {
                let _window6 = window;
                const _crypto = window.crypto;
                let tmp9 = uint32Array1;
                const randomValues = _crypto.getRandomValues(tmp25);
                const random = obj2.random;
                let tmp11 = uint32Array1;
                let str2 = "crypto['getRandomValues']";
                let num = 1024;
                random.addEntropy(tmp25, 1024, "crypto['getRandomValues']");
              }
            }
            let _window3 = window;
            if (window.msCrypto) {
              let _window4 = window;
              if (window.msCrypto.getRandomValues) {
                let _window5 = window;
                let tmp7 = uint32Array1;
                const randomValues1 = msCrypto.getRandomValues(tmp25);
              }
            }
          }
        }
      } catch (tmp20) {
        let tmp21 = globalThis;
        const _window7 = window;
        let _console = typeof window !== "undefined";
        if (_console) {
          const _window9 = window;
          _console = window.console;
        }
        if (_console) {
          const _console2 = console;
          let str4 = "There was an error collecting entropy from the browser:";
          console.log("There was an error collecting entropy from the browser:");
          const _console3 = console;
          console.log(tmp20);
        }
      }
    },
    { crypto: "r" },
  ];
  obj[116] = items115;
  const items116 = [
    (arg0, arg1, arg2) => {
      module.exports = {
        FASTLANE_SDK_LOAD_ERROR: {
          type: global("../lib/braintree-error").types.MERCHANT,
          code: "FASTLANE_SDK_LOAD_ERROR",
        },
      };
      const obj = {
        FASTLANE_SDK_LOAD_ERROR: {
          type: global("../lib/braintree-error").types.MERCHANT,
          code: "FASTLANE_SDK_LOAD_ERROR",
        },
      };
      ({ type: global("../lib/braintree-error").types.MERCHANT, code: "FASTLANE_SDK_LOAD_ERROR" });
    },
    { "../lib/braintree-error": 143 },
  ];
  obj[117] = items116;
  const items117 = [
    (arg0, arg1, arg2) => {
      let closure_0 = global("../lib/braintree-error");
      let closure_1 = global("./errors");
      const loadFastlane = global("../lib/assets").loadFastlane;
      const globalResult = global("@braintree/wrap-promise");
      const assign = global("../lib/assign").assign;
      module.exports = globalResult(function fastlane(arg0) {
        let client;
        let client2;
        closure_0 = arg0;
        ({ client, client: client2 } = arg0);
        const configuration = client.getConfiguration();
        let flag = true;
        const version = client2.getVersion();
        if ("production" !== configuration.gatewayConfiguration.environment) {
          flag = false;
        }
        const promise = loadFastlane(assign({ platform: "BT", btSdkVersion: version, minified: flag }, arg0));
        const nextPromise = promise.then((metadata) => {
          const platformOptions = {
            platform: "BT",
            authorization: closure_0.authorization,
            client: closure_0.client,
            deviceData: closure_0.deviceData,
          };
          delete closure_0["authorization"];
          delete closure_0["client"];
          delete closure_0["deviceData"];
          delete closure_0["minified"];
          delete closure_0["btSdkVersion"];
          return fastlane.create(assign({ platformOptions }, closure_0, metadata.metadata));
        });
        return nextPromise.catch((error) => {
          const obj = {
            type: constants.FASTLANE_SDK_LOAD_ERROR.type,
            code: constants.FASTLANE_SDK_LOAD_ERROR.code,
            message: error.message,
          };
          const tmp = new closure_0(obj);
          return reject(tmp);
        });
      });
    },
    {
      "../lib/assets": 139,
      "../lib/assign": 140,
      "../lib/braintree-error": 143,
      "./errors": 117,
      "@braintree/wrap-promise": 40,
    },
  ];
  obj[118] = items117;
  const items118 = [
    (arg0, arg1, arg2) => {
      let closure_0 = global("../lib/basic-component-verification");
      let closure_1 = global("./fastlane");
      let closure_2 = global("../lib/create-assets-url");
      let closure_3 = global("../lib/create-deferred-client");
      const globalResult = global("@braintree/wrap-promise");
      const assign = global("../lib/assign").assign;
      let obj = {
        create: globalResult(function create(client) {
          let obj = { name: "fastlane", client: client.client, authorization: client.authorization };
          const verifyResult = client.verify(obj);
          const nextPromise = verifyResult.then(() => {
            const obj = {
              authorization: client.authorization,
              client: client.client,
              assetsUrl: closure_2.create(client.authorization),
              name: "fastlane",
            };
            return closure_3.create(obj);
          });
          return nextPromise.then((client) => {
            const obj = { client, deviceData: client.deviceData };
            return closure_1(assign(obj, client));
          });
        }),
        VERSION: "3.112.1",
      };
      module.exports = obj;
    },
    {
      "../lib/assign": 140,
      "../lib/basic-component-verification": 141,
      "../lib/create-assets-url": 148,
      "../lib/create-deferred-client": 150,
      "./fastlane": 118,
      "@braintree/wrap-promise": 40,
    },
  ];
  obj[119] = items118;
  const items119 = [
    (arg0, arg1, arg2) => {
      const globalResult = global("../lib/braintree-error");
      const obj = {
        GOOGLE_PAYMENT_NOT_ENABLED: {
          type: globalResult.types.MERCHANT,
          code: "GOOGLE_PAYMENT_NOT_ENABLED",
          message: "Google Pay is not enabled for this merchant.",
        },
        GOOGLE_PAYMENT_GATEWAY_ERROR: {
          code: "GOOGLE_PAYMENT_GATEWAY_ERROR",
          message: "There was an error when tokenizing the Google Pay payment method.",
          type: globalResult.types.UNKNOWN,
        },
        GOOGLE_PAYMENT_UNSUPPORTED_VERSION: {
          code: "GOOGLE_PAYMENT_UNSUPPORTED_VERSION",
          type: globalResult.types.MERCHANT,
        },
      };
      module.exports = obj;
    },
    { "../lib/braintree-error": 143 },
  ];
  obj[120] = items119;
  const items120 = [
    (arg0, arg1, arg2) => {
      let closure_8;
      class GooglePayment {
        constructor(arg0) {
          obj = {
            _createPromise: global.createPromise,
            _client: global.client,
            _useDeferredClient: global.useDeferredClient,
            _googlePayVersion: tmp,
            _googleMerchantId: global.googleMerchantId,
          };
          tmp = global.googlePayVersion || 1;
          if (obj._isUnsupportedGooglePayAPIVersion()) {
            tmp2 = closure_5;
            obj1 = { code: null, message: null, type: null };
            tmp3 = closure_6;
            obj1.code = closure_6.GOOGLE_PAYMENT_UNSUPPORTED_VERSION.code;
            str = "The Braintree SDK does not support Google Pay version ";
            str2 = ". Please upgrade the version of your Braintree SDK and contact support if this error persists.";
            obj1.message = `The Braintree SDK does not support Google Pay version ${obj._googlePayVersion}. Please upgrade the version of your Braintree SDK and contact support if this error persists.`;
            obj1.type = closure_6.GOOGLE_PAYMENT_UNSUPPORTED_VERSION.type;
            self = this;
            self2 = this;
            tmp4 = obj1;
            tmp5 = new closure_5(obj1);
            tmp6 = tmp5;
            throw tmp5;
          } else {
            return;
          }
        }
        _waitForClient() {
          self = this;
          if (this._client) {
            tmp2 = globalThis;
            _Promise = Promise;
            resolved = Promise.resolve();
          } else {
            _createPromise = self._createPromise;
            fn = () => {
              /* body not rendered: F150448 */
            };
            resolved = _createPromise.then(fn.bind(self));
          }
          return resolved;
        }
        _isUnsupportedGooglePayAPIVersion() {
          return !(this._googlePayVersion in closure_8);
        }
        _getDefaultConfig() {
          self = this;
          if (!this._defaultConfig) {
            tmp = closure_4;
            _client = self._client;
            self._defaultConfig = closure_4(_client.getConfiguration(), self._googlePayVersion, self._googleMerchantId);
          }
          return self._defaultConfig;
        }
        _createV1PaymentDataRequest(arg0) {
          _getDefaultConfigResult = this._getDefaultConfig();
          tmp2 =
            (global.cardRequirements && global.cardRequirements.allowedCardNetworks) ||
            _getDefaultConfigResult.cardRequirements.allowedCardNetworks;
          tmp3 = assign({}, _getDefaultConfigResult, global);
          tmp3.cardRequirements.allowedCardNetworks = tmp2;
          return tmp3;
        }
        _createV2PaymentDataRequest(arg0) {
          _getDefaultConfigResult = this._getDefaultConfig();
          closure_0 = _getDefaultConfigResult;
          if (global.allowedPaymentMethods) {
            prop = global.allowedPaymentMethods;
            item = prop.forEach(() => {
              /* body not rendered: F150449 */
            });
          }
          return assign({}, _getDefaultConfigResult, global);
        }
        createPaymentDataRequest(arg0) {
          self = this;
          closure_0 = global;
          if (this._useDeferredClient) {
            _waitForClientResult = self._waitForClient();
            fn = () => {
              /* body not rendered: F150450 */
            };
            nextPromise = _waitForClientResult.then(fn.bind(self));
          } else {
            nextPromise = self._createPaymentDataRequestSyncronously(global);
          }
          return nextPromise;
        }
        _createPaymentDataRequestSyncronously(arg0) {
          self = this;
          tmp = assign({}, global);
          _googlePayVersion = this._googlePayVersion;
          totalPrice = tmp.transactionInfo;
          tmp2 = closure_8[_googlePayVersion];
          if (totalPrice) {
            totalPrice = tmp.transactionInfo.totalPrice;
          }
          if (totalPrice) {
            str = tmp.transactionInfo.totalPrice;
            tmp.transactionInfo.totalPrice = str.toString();
          }
          sendEventResult = closure_0.sendEvent(
            self._createPromise,
            `google-payment.v${_googlePayVersion}.createPaymentDataRequest`,
          );
          return self[tmp2](tmp);
        }
        parseResponse(arg0) {
          closure_0 = global;
          self = this;
          resolved = Promise.resolve();
          nextPromise = resolved.then(() => {
            /* body not rendered: F150451 */
          });
          return nextPromise.catch(() => {
            /* body not rendered: F150452 */
          });
        }
        teardown() {
          tmp = closure_2(this, closure_7(GooglePayment.prototype));
          return Promise.resolve();
        }
      }
      handler = global("../lib/analytics");
      const assign = global("../lib/assign").assign;
      let closure_2 = global("../lib/convert-methods-to-error");
      let closure_3 = global("../lib/find");
      let closure_4 = global("../lib/generate-google-pay-configuration");
      let closure_5 = global("../lib/braintree-error");
      constants = global("./errors");
      let closure_7 = global("../lib/methods");
      query = { 1: "_createV1PaymentDataRequest", 2: "_createV2PaymentDataRequest" };
      const globalResult = global("@braintree/wrap-promise");
      module.exports = globalResult.wrapPrototype(GooglePayment);
    },
    {
      "../lib/analytics": 138,
      "../lib/assign": 140,
      "../lib/braintree-error": 143,
      "../lib/convert-methods-to-error": 146,
      "../lib/find": 156,
      "../lib/generate-google-pay-configuration": 168,
      "../lib/methods": 175,
      "./errors": 120,
      "@braintree/wrap-promise": 40,
    },
  ];
  obj[121] = items120;
  const items121 = [
    (arg0, arg1, arg2) => {
      let closure_0 = global("./google-payment");
      let closure_1 = global("../lib/braintree-error");
      let closure_2 = global("../lib/create-assets-url");
      let closure_3 = global("../lib/create-deferred-client");
      let closure_4 = global("../lib/basic-component-verification");
      const globalResult = global("@braintree/wrap-promise");
      let closure_5 = global("./errors");
      let obj = {
        create: globalResult(function create(client) {
          let obj = { name: "Google Pay", client: client.client, authorization: client.authorization };
          const verifyResult = closure_4.verify(obj);
          return verifyResult.then(() => {
            const obj = {
              authorization: client.authorization,
              client: client.client,
              debug: client.debug,
              assetsUrl: closure_1_2.create(client.authorization),
              name: "Google Pay",
            };
            const obj2 = closure_1_3.create(obj);
            const nextPromise = obj2.then(function (client) {
              let rejectResult = client;
              closure_0.client = client;
              if (!client.getConfiguration().gatewayConfiguration.androidPay) {
                const self = this;
                const self2 = this;
                const tmp5 = new closure_2_1(constants.GOOGLE_PAYMENT_NOT_ENABLED);
                rejectResult = reject(tmp5);
              }
              return rejectResult;
            });
            client.createPromise = nextPromise;
            const tmp = new client(client);
            let nextPromise1 = tmp;
            client = tmp;
            if (!client.useDeferredClient) {
              nextPromise1 = nextPromise.then((_client) => {
                closure_0._client = _client;
                return closure_0;
              });
            }
            return nextPromise1;
          });
        }),
        VERSION: "3.112.1",
      };
      module.exports = obj;
    },
    {
      "../lib/basic-component-verification": 141,
      "../lib/braintree-error": 143,
      "../lib/create-assets-url": 148,
      "../lib/create-deferred-client": 150,
      "./errors": 120,
      "./google-payment": 121,
      "@braintree/wrap-promise": 40,
    },
  ];
  obj[122] = items121;
  const items122 = [
    (arg0, arg1, arg2) => {
      let closure_0 = global("../../lib/braintree-error");
      constants = global("../shared/errors");
      const allowedAttributes = global("../shared/constants").allowedAttributes;
      module.exports = function attributeValidationError(keys, str) {
        let tmp5;
        if (allowedAttributes.hasOwnProperty(keys)) {
          let tmp8 = null == str;
          if (!tmp8) {
            let flag;
            if ("string" === allowedAttributes[keys]) {
              flag = typeof str === "string" || typeof str === "number";
            } else {
              flag = false;
              if ("boolean" === allowedAttributes[keys]) {
                const _String = String;
                let tmp10 = "true" === String(str);
                if (!tmp10) {
                  const _String2 = String;
                  tmp10 = "false" === String(str);
                }
                flag = tmp10;
              }
            }
            tmp8 = flag;
          }
          if (!tmp8) {
            const self3 = this;
            const self4 = this;
            const obj2 = {
              type: constants.HOSTED_FIELDS_ATTRIBUTE_VALUE_NOT_ALLOWED.type,
              code: constants.HOSTED_FIELDS_ATTRIBUTE_VALUE_NOT_ALLOWED.code,
              message: `Value "${str}" is not allowed for "${keys}" attribute.`,
            };
            tmp5 = new closure_0(obj2);
          }
        } else {
          const self = this;
          const self2 = this;
          const obj = {
            type: constants.HOSTED_FIELDS_ATTRIBUTE_NOT_SUPPORTED.type,
            code: constants.HOSTED_FIELDS_ATTRIBUTE_NOT_SUPPORTED.code,
            message: `The "${keys}" attribute is not supported in Hosted Fields.`,
          };
          tmp5 = new closure_0(obj);
        }
        return tmp5;
      };
    },
    { "../../lib/braintree-error": 143, "../shared/constants": 131, "../shared/errors": 132 },
  ];
  obj[123] = items122;
  const items123 = [
    (arg0, arg1, arg2) => {
      constants = global("../shared/constants");
      let closure_1 = global("../../lib/use-min");
      module.exports = function composeUrl(arg0, arg1, arg2) {
        const text = `${arg0}/web/${closure_0.VERSION}`;
        return text + "/html/hosted-fields-frame" + closure_1(arg2) + ".html#" + arg1;
      };
    },
    { "../../lib/use-min": 181, "../shared/constants": 131 },
  ];
  obj[124] = items123;
  const items124 = [
    (arg0, arg1, arg2) => {
      const navigationDirections = global("../shared/constants").navigationDirections;
      let closure_1 = global("../shared/browser-detection");
      let closure_2 = global("../shared/focus-intercept");
      let closure_3 = global("../shared/find-parent-tags");
      let closure_4 = ["INPUT", "SELECT", "TEXTAREA"];
      let closure_5 = ["hidden", "button", "reset", "submit", "checkbox", "radio", "file"];
      let obj = {
        removeExtraFocusElements(elements, arg1) {
          let closure_0 = arg1;
          const callResult = slice.call(elements.elements);
          let num = 0;
          let tmp = null;
          if (0 < callResult.length) {
            while (true) {
              let tmp5;
              let tmp2 = callResult[num];
              if (closure_1.hasSoftwareKeyboard()) {
                let tmp7 = closure_4.indexOf(tmp2.tagName) > -1 && closure_5.indexOf(tmp2.type) < 0;
                tmp5 = tmp7;
              } else {
                tmp5 = "hidden" !== tmp2.type;
              }
              tmp = tmp2;
              if (tmp5) {
                break;
              } else {
                let sum = num + 1;
                num = sum;
                tmp = null;
                if (sum >= callResult.length) {
                  break;
                }
              }
            }
          }
          const items = [tmp];
          const reversed = callResult.reverse();
          let num2 = 0;
          let tmp10 = null;
          if (0 < reversed.length) {
            while (true) {
              let tmp14;
              let tmp11 = reversed[num2];
              if (closure_1.hasSoftwareKeyboard()) {
                let tmp16 = closure_4.indexOf(tmp11.tagName) > -1 && closure_5.indexOf(tmp11.type) < 0;
                tmp14 = tmp16;
              } else {
                tmp14 = "hidden" !== tmp11.type;
              }
              tmp10 = tmp11;
              if (tmp14) {
                break;
              } else {
                let sum1 = num2 + 1;
                num2 = sum1;
                tmp10 = null;
                if (sum1 >= reversed.length) {
                  break;
                }
              }
            }
          }
          items[1] = tmp10;
          const item = items.forEach((getAttribute) => {
            const matchFocusElementResult =
              getAttribute && closure_2.matchFocusElement(getAttribute.getAttribute("id"));
            if (matchFocusElementResult) {
              closure_0(getAttribute.getAttribute("id"));
            }
          });
        },
        createFocusChangeHandler(arg0, arg1) {
          let closure_0 = arg0;
          closure_1 = arg1;
          return (direction) => {
            function checkIndexBounds(arg0) {
              return arg0 < 0;
            }
            const checkIndexBounds2 = function checkIndexBounds(arg0) {
              return arg0 > length - 1;
            };
            const element = document.getElementById(`bt-${direction.field}-${direction.direction}-${closure_0}`);
            if (element) {
              const first = closure_3(element, "form")[0];
              const _document = document;
              if (document.forms.length >= 1) {
                if (first) {
                  let obj;
                  const slice = [].slice;
                  const callResult = slice.call(first.elements);
                  let index = callResult.indexOf(element);
                  direction = direction.direction;
                  const length = callResult.length;
                  if (navigationDirections.BACK === direction) {
                    obj = { checkIndexBounds, indexChange: -1 };
                    const obj2 = { checkIndexBounds, indexChange: -1 };
                  } else if (tmp5.FORWARD === direction) {
                    obj = { checkIndexBounds: checkIndexBounds2, indexChange: 1 };
                    const obj3 = { checkIndexBounds: checkIndexBounds2, indexChange: 1 };
                  } else {
                    obj = {};
                  }
                  const sum = index + obj.indexChange;
                  while (!obj.checkIndexBounds(sum)) {
                    let tmp8;
                    let obj4 = callResult[sum];
                    if (closure_1.hasSoftwareKeyboard()) {
                      let tmp10 = closure_4.indexOf(obj4.tagName) > -1 && closure_5.indexOf(obj4.type) < 0;
                      tmp8 = tmp10;
                    } else {
                      tmp8 = "hidden" !== obj4.type;
                    }
                    index = sum;
                    if (!tmp8) {
                      continue;
                    } else {
                      let str3 = "id";
                      if (closure_2.matchFocusElement(obj4.getAttribute("id"))) {
                        let str4 = "data-braintree-type";
                        let onTriggerInputFocusResult = closure_1.onTriggerInputFocus(
                          obj4.getAttribute("data-braintree-type"),
                        );
                      } else {
                        let focusResult = obj4.focus();
                      }
                    }
                  }
                }
              }
              const result = closure_1.onRemoveFocusIntercepts();
            }
          };
        },
      };
      module.exports = obj;
    },
    {
      "../shared/browser-detection": 130,
      "../shared/constants": 131,
      "../shared/find-parent-tags": 133,
      "../shared/focus-intercept": 134,
    },
  ];
  obj[125] = items124;
  const items125 = [
    (arg0, arg1, arg2) => {
      const allowedStyles = global("../shared/constants").allowedStyles;
      module.exports = function getStylesFromClass(str) {
        const element = <input />;
        const obj = {};
        let substr = str;
        if ("." === str[0]) {
          substr = str.substring(1);
        }
        element.className = substr;
        element.style.display = "none !important";
        element.style.position = "fixed !important";
        element.style.left = "-99999px !important";
        element.style.top = "-99999px !important";
        body.appendChild(element);
        const computedStyle = window.getComputedStyle(element);
        const item = allowedStyles.forEach((item) => {
          if (closure_0[item]) {
            obj[item] = closure_0[item];
          }
        });
        const body2 = document.body;
        body2.removeChild(element);
        return obj;
      };
    },
    { "../shared/constants": 131 },
  ];
  obj[126] = items125;
  const items126 = [
    (arg0, arg1, arg2) => {
      let closure_8;
      let constants2;
      class HostedFields {
        constructor(arg0) {
          self = this;
          closure_0 = global;
          self = this;
          obj = {};
          closure_4 = obj;
          closure_5 = {};
          items = [];
          closure_6 = items;
          tmp = closure_13();
          closure_7 = tmp;
          sessionId = global.sessionId;
          this._merchantConfigurationOptions = closure_0({}, global);
          if (global.client) {
            client = global.client;
            configuration = client.getConfiguration(undefined, sessionId);
            assetsUrl = configuration.gatewayConfiguration.assetsUrl;
            isDebug = configuration.isDebug;
          } else {
            tmp2 = closure_1;
            tmp4 = globalThis;
            _Boolean = Boolean;
            obj1 = closure_1.create(global.authorization);
            isDebug = Boolean(global.isDebug);
            assetsUrl = obj1;
          }
          obj7 = {
            client: global.client,
            authorization: global.authorization,
            debug: isDebug,
            assetsUrl,
            name: "Hosted Fields",
            sessionId,
          };
          self._clientPromise = closure_6.create(obj7);
          closure_2 = closure_8(assetsUrl, tmp, isDebug);
          if (global.fields) {
            tmp6 = globalThis;
            _Object = Object;
            num = 0;
            if (0 !== Object.keys(global.fields).length) {
              callResult = closure_17.call(self);
              self._injectedNodes = [];
              tmp7 = self;
              self2 = this;
              self3 = this;
              tmp8 = new self();
              tmp9 = tmp8;
              self._destructor = tmp8;
              self._fields = obj;
              obj8 = { fields: null, cards: null };
              obj8.fields = {};
              tmp10 = closure_26;
              str = "";
              obj8.cards = closure_26("");
              self._state = obj8;
              tmp11 = closure_5;
              obj9 = { channel: null, verifyDomain: null, targetFrames: null };
              obj9.channel = tmp;
              tmp12 = closure_2;
              obj9.verifyDomain = closure_2;
              _window = window;
              items1 = [];
              items1[0] = window;
              obj9.targetFrames = items1;
              self4 = this;
              self5 = this;
              tmp13 = obj9;
              tmp14 = new closure_5(obj9);
              tmp15 = tmp14;
              self._bus = tmp14;
              _destructor = self._destructor;
              result = _destructor.registerFunctionForTeardown(() => {
                /* body not rendered: F150457 */
              });
              tmp17 = closure_19;
              sendEvent = closure_19.sendEvent;
              _clientPromise = self._clientPromise;
              if (global.client) {
                str3 = "custom.hosted-fields.initialized";
                sendEventResult = sendEvent(_clientPromise, "custom.hosted-fields.initialized");
              } else {
                str2 = "custom.hosted-fields.initialized.deferred-client";
                sendEventResult1 = sendEvent(_clientPromise, "custom.hosted-fields.initialized.deferred-client");
              }
              _Object2 = Object;
              keys = Object.keys(global.fields);
              fn = () => {
                /* body not rendered: F150458 */
              };
              item = keys.forEach(fn.bind(self));
              if (self._merchantConfigurationOptions.styles) {
                _Object3 = Object;
                keys1 = Object.keys(self._merchantConfigurationOptions.styles);
                item1 = keys1.forEach(() => {
                  /* body not rendered: F150459 */
                });
              }
              _bus = self._bus;
              tmp22 = events;
              onResult = _bus.on(events.REMOVE_FOCUS_INTERCEPTS, () => {
                /* body not rendered: F150460 */
              });
              _bus2 = self._bus;
              tmp24 = closure_28;
              obj10 = { onRemoveFocusIntercepts: null, onTriggerInputFocus: null };
              obj10.onRemoveFocusIntercepts = function onRemoveFocusIntercepts() {
                /* body not rendered: F150461 */
              };
              obj10.onTriggerInputFocus = function onTriggerInputFocus() {
                /* body not rendered: F150462 */
              };
              onResult1 = _bus2.on(events.TRIGGER_FOCUS_CHANGE, closure_28.createFocusChangeHandler(tmp, obj10));
              _bus3 = self._bus;
              onResult2 = _bus3.on(events.READY_FOR_CLIENT, () => {
                /* body not rendered: F150463 */
              });
              _bus4 = self._bus;
              onResult3 = _bus4.on(events.CARD_FORM_ENTRY_HAS_BEGUN, () => {
                /* body not rendered: F150464 */
              });
              _bus5 = self._bus;
              onResult4 = _bus5.on(events.BIN_AVAILABLE, () => {
                /* body not rendered: F150465 */
              });
              _setTimeout = setTimeout;
              tmp29 = INTEGRATION_TIMEOUT_MS;
              closure_1 = setTimeout(() => {
                /* body not rendered: F150466 */
              }, INTEGRATION_TIMEOUT_MS);
              _Promise = Promise;
              allPromises = Promise.all(items);
              nextPromise = allPromises.then(() => {
                /* body not rendered: F150467 */
              });
              _bus6 = self._bus;
              onResult5 = _bus6.on(events.FRAME_READY, () => {
                /* body not rendered: F150468 */
              });
              _bus7 = self._bus;
              closure_0 = obj;
              fn2 = () => {
                /* body not rendered: F154270 */
              };
              onResult6 = _bus7.on(events.INPUT_EVENT, fn2.bind(self));
              _destructor2 = self._destructor;
              result1 = _destructor2.registerFunctionForTeardown(() => {
                /* body not rendered: F150469 */
              });
              _destructor3 = self._destructor;
              result2 = _destructor3.registerFunctionForTeardown(() => {
                /* body not rendered: F150470 */
              });
              _destructor4 = self._destructor;
              result3 = _destructor4.registerFunctionForTeardown(() => {
                /* body not rendered: F150471 */
              });
              return;
            }
          }
          obj11 = {
            type: closure_25.INSTANTIATION_OPTION_REQUIRED.type,
            code: closure_25.INSTANTIATION_OPTION_REQUIRED.code,
            message: "options.fields is required when instantiating Hosted Fields.",
          };
          tmp36 = new closure_7(obj11);
          throw tmp36;
        }
        _setupLabelFocus(arg0, arg1) {
          closure_0 = global;
          triggerFocus = function triggerFocus() {
            /* body not rendered: F150472 */
          };
          self = this;
          obj = closure_23(module);
          if (null != module.id) {
            tmp8 = globalThis;
            _Array2 = Array;
            slice2 = Array.prototype.slice;
            _document2 = document;
            str3 = 'label[for="';
            str4 = '"]';
            callResult = slice2.call(document.querySelectorAll(`label[for="${module.id}"]`));
            closure_1 = callResult;
            _document = document;
            obj3 = callResult;
            if (obj !== document) {
              _Array = Array;
              slice = Array.prototype.slice;
              combined = callResult.concat(slice.call(obj.querySelectorAll(`label[for="${module.id}"]`)));
              closure_1 = combined;
              obj3 = combined;
            }
            tmp2 = closure_14;
            str = "label";
            combined1 = obj3.concat(closure_14(module, "label"));
            closure_1 = combined1;
            found = combined1.filter(() => {
              /* body not rendered: F150473 */
            });
            closure_1 = found;
            num = 0;
            closure_2 = 0;
            flag = false;
            str2 = "click";
            if (0 < found.length) {
              do {
                tmp3 = closure_2;
                obj4 = found[closure_2];
                listener = obj4.addEventListener("click", triggerFocus, false);
                tmp5 = closure_2;
                sum = closure_2 + 1;
                closure_2 = sum;
                length = found.length;
              } while (sum < length);
            }
            _destructor = this._destructor;
            result = _destructor.registerFunctionForTeardown(() => {
              /* body not rendered: F150474 */
            });
          }
          return;
        }
        _getAnyFieldContainer() {
          self = this;
          keys = Object.keys(this._fields);
          return keys.reduce(() => {
            /* body not rendered: F150475 */
          }, null);
        }
        _cleanUpFocusIntercepts() {
          self = this;
          if (document.forms.length < 1) {
            _bus2 = self._bus;
            tmp7 = events;
            emitResult = _bus2.emit(events.REMOVE_FOCUS_INTERCEPTS);
          } else {
            tmp = closure_14;
            str = "form";
            first = closure_14(self._getAnyFieldContainer(), "form")[0];
            if (first) {
              tmp5 = closure_28;
              fn = () => {
                /* body not rendered: F150476 */
              };
              result = closure_28.removeExtraFocusElements(first, fn.bind(self));
            } else {
              _bus = self._bus;
              tmp3 = events;
              emitResult1 = _bus.emit(events.REMOVE_FOCUS_INTERCEPTS);
            }
          }
          return;
        }
        _attachInvalidFieldContainersToError(arg0) {
          closure_0 = global;
          tmp = global.details && global.details.invalidFieldKeys;
          if (tmp) {
            num = 0;
            tmp = global.details.invalidFieldKeys.length > 0;
          }
          if (tmp) {
            self = this;
            global.details.invalidFields = {};
            invalidFieldKeys = global.details.invalidFieldKeys;
            fn = () => {
              /* body not rendered: F150477 */
            };
            item = invalidFieldKeys.forEach(fn.bind(this));
          }
          return;
        }
        getChallenges() {
          _clientPromise = this._clientPromise;
          return _clientPromise.then(() => {
            /* body not rendered: F150478 */
          });
        }
        getSupportedCardTypes() {
          _clientPromise = this._clientPromise;
          return _clientPromise.then(() => {
            /* body not rendered: F150479 */
          });
        }
        teardown() {
          self = this;
          promise = new Promise(() => {
            /* body not rendered: F150480 */
          });
          return promise;
        }
        tokenize(arg0) {
          closure_0 = global;
          self = this;
          if (!global) {
            closure_0 = {};
          }
          promise = new Promise(() => {
            /* body not rendered: F150481 */
          });
          return promise;
        }
        addClass(arg0, arg1) {
          if (allowedFields.hasOwnProperty(global)) {
            _fields = this._fields;
            self3 = this;
            if (_fields.hasOwnProperty(global)) {
              tmp8 = module;
              _bus = self3._bus;
              tmp9 = events;
              obj1 = { field: null, classname: null };
              obj1.field = global;
              obj1.classname = module;
              emitResult = _bus.emit(events.ADD_CLASS, obj1);
            } else {
              tmp5 = closure_7;
              obj4 = { type: null, code: null, message: null };
              tmp6 = closure_11;
              obj4.type = closure_11.HOSTED_FIELDS_FIELD_NOT_PRESENT.type;
              obj4.code = closure_11.HOSTED_FIELDS_FIELD_NOT_PRESENT.code;
              str3 = 'Cannot add class to "';
              str4 = '" field because it is not part of the current Hosted Fields options.';
              obj4.message = `Cannot add class to "${global}" field because it is not part of the current Hosted Fields options.`;
              self4 = this;
              self5 = this;
              tmp7 = obj4;
              tmp4 = new closure_7(obj4);
            }
          } else {
            tmp = closure_7;
            obj = { type: null, code: null, message: null };
            tmp2 = closure_11;
            obj.type = closure_11.HOSTED_FIELDS_FIELD_INVALID.type;
            obj.code = closure_11.HOSTED_FIELDS_FIELD_INVALID.code;
            str = '"';
            str2 = '" is not a valid field. You must use a valid field option when adding a class.';
            obj.message = `"${global}" is not a valid field. You must use a valid field option when adding a class.`;
            self = this;
            self2 = this;
            tmp3 = obj;
            tmp4 = new closure_7(obj);
          }
          _Promise = Promise;
          if (tmp4) {
            rejectResult = _Promise.reject(tmp4);
          } else {
            rejectResult = _Promise.resolve();
          }
          return rejectResult;
        }
        removeClass(arg0, arg1) {
          if (allowedFields.hasOwnProperty(global)) {
            _fields = this._fields;
            self3 = this;
            if (_fields.hasOwnProperty(global)) {
              tmp8 = module;
              _bus = self3._bus;
              tmp9 = events;
              obj1 = { field: null, classname: null };
              obj1.field = global;
              obj1.classname = module;
              emitResult = _bus.emit(events.REMOVE_CLASS, obj1);
            } else {
              tmp5 = closure_7;
              obj4 = { type: null, code: null, message: null };
              tmp6 = closure_11;
              obj4.type = closure_11.HOSTED_FIELDS_FIELD_NOT_PRESENT.type;
              obj4.code = closure_11.HOSTED_FIELDS_FIELD_NOT_PRESENT.code;
              str3 = 'Cannot remove class from "';
              str4 = '" field because it is not part of the current Hosted Fields options.';
              obj4.message = `Cannot remove class from "${global}" field because it is not part of the current Hosted Fields options.`;
              self4 = this;
              self5 = this;
              tmp7 = obj4;
              tmp4 = new closure_7(obj4);
            }
          } else {
            tmp = closure_7;
            obj = { type: null, code: null, message: null };
            tmp2 = closure_11;
            obj.type = closure_11.HOSTED_FIELDS_FIELD_INVALID.type;
            obj.code = closure_11.HOSTED_FIELDS_FIELD_INVALID.code;
            str = '"';
            str2 = '" is not a valid field. You must use a valid field option when removing a class.';
            obj.message = `"${global}" is not a valid field. You must use a valid field option when removing a class.`;
            self = this;
            self2 = this;
            tmp3 = obj;
            tmp4 = new closure_7(obj);
          }
          _Promise = Promise;
          if (tmp4) {
            rejectResult = _Promise.reject(tmp4);
          } else {
            rejectResult = _Promise.resolve();
          }
          return rejectResult;
        }
        setAttribute(arg0) {
          if (allowedFields.hasOwnProperty(global.field)) {
            _fields = this._fields;
            self3 = this;
            if (_fields.hasOwnProperty(global.field)) {
              tmp8 = closure_27;
              tmp4 = closure_27(global.attribute, global.value);
              if (!tmp4) {
                _bus = self3._bus;
                tmp9 = events;
                obj1 = { field: null, attribute: null, value: null };
                ({ field: obj3.field, attribute: obj3.attribute, value: obj3.value } = global);
                emitResult = _bus.emit(events.SET_ATTRIBUTE, obj1);
              }
            } else {
              tmp5 = closure_7;
              obj4 = { type: null, code: null, message: null };
              tmp6 = closure_11;
              obj4.type = closure_11.HOSTED_FIELDS_FIELD_NOT_PRESENT.type;
              obj4.code = closure_11.HOSTED_FIELDS_FIELD_NOT_PRESENT.code;
              str3 = 'Cannot set attribute for "';
              str4 = '" field because it is not part of the current Hosted Fields options.';
              obj4.message = `Cannot set attribute for "${global.field}" field because it is not part of the current Hosted Fields options.`;
              self4 = this;
              self5 = this;
              tmp7 = obj4;
              tmp4 = new closure_7(obj4);
            }
          } else {
            tmp = closure_7;
            obj = { type: null, code: null, message: null };
            tmp2 = closure_11;
            obj.type = closure_11.HOSTED_FIELDS_FIELD_INVALID.type;
            obj.code = closure_11.HOSTED_FIELDS_FIELD_INVALID.code;
            str = '"';
            str2 = '" is not a valid field. You must use a valid field option when setting an attribute.';
            obj.message = `"${global.field}" is not a valid field. You must use a valid field option when setting an attribute.`;
            self = this;
            self2 = this;
            tmp3 = obj;
            tmp4 = new closure_7(obj);
          }
          _Promise = Promise;
          if (tmp4) {
            rejectResult = _Promise.reject(tmp4);
          } else {
            rejectResult = _Promise.resolve();
          }
          return rejectResult;
        }
        setMonthOptions(arg0) {
          closure_0 = global;
          self = this;
          fields = this._merchantConfigurationOptions.fields;
          str = "Expiration month field must exist to use setMonthOptions.";
          if (fields.expirationMonth) {
            if (!fields.expirationMonth.select) {
              str = "Expiration month field must be a select element.";
            }
          }
          _Promise = Promise;
          if (str) {
            tmp2 = closure_7;
            obj = { type: null, code: null, message: null };
            tmp3 = closure_11;
            obj.type = closure_11.HOSTED_FIELDS_FIELD_PROPERTY_INVALID.type;
            obj.code = closure_11.HOSTED_FIELDS_FIELD_PROPERTY_INVALID.code;
            obj.message = str;
            self3 = this;
            self4 = this;
            tmp4 = obj;
            reject = _Promise.reject;
            tmp5 = new closure_7(obj);
            tmp6 = tmp5;
            rejectResult = reject(tmp5);
          } else {
            self = this;
            self2 = this;
            rejectResult = new _Promise(() => {
              /* body not rendered: F150482 */
            });
          }
          return rejectResult;
        }
        setMessage(arg0) {
          _bus = this._bus;
          obj = { field: global.field, message: global.message };
          emitResult = _bus.emit(events.SET_MESSAGE, obj);
          return;
        }
        removeAttribute(arg0) {
          if (allowedFields.hasOwnProperty(global.field)) {
            _fields = this._fields;
            self3 = this;
            if (_fields.hasOwnProperty(global.field)) {
              tmp8 = closure_27;
              tmp4 = closure_27(global.attribute);
              if (!tmp4) {
                _bus = self3._bus;
                tmp9 = events;
                obj1 = { field: null, attribute: null };
                ({ field: obj3.field, attribute: obj3.attribute } = global);
                emitResult = _bus.emit(events.REMOVE_ATTRIBUTE, obj1);
              }
            } else {
              tmp5 = closure_7;
              obj4 = { type: null, code: null, message: null };
              tmp6 = closure_11;
              obj4.type = closure_11.HOSTED_FIELDS_FIELD_NOT_PRESENT.type;
              obj4.code = closure_11.HOSTED_FIELDS_FIELD_NOT_PRESENT.code;
              str3 = 'Cannot remove attribute for "';
              str4 = '" field because it is not part of the current Hosted Fields options.';
              obj4.message = `Cannot remove attribute for "${global.field}" field because it is not part of the current Hosted Fields options.`;
              self4 = this;
              self5 = this;
              tmp7 = obj4;
              tmp4 = new closure_7(obj4);
            }
          } else {
            tmp = closure_7;
            obj = { type: null, code: null, message: null };
            tmp2 = closure_11;
            obj.type = closure_11.HOSTED_FIELDS_FIELD_INVALID.type;
            obj.code = closure_11.HOSTED_FIELDS_FIELD_INVALID.code;
            str = '"';
            str2 = '" is not a valid field. You must use a valid field option when removing an attribute.';
            obj.message = `"${global.field}" is not a valid field. You must use a valid field option when removing an attribute.`;
            self = this;
            self2 = this;
            tmp3 = obj;
            tmp4 = new closure_7(obj);
          }
          _Promise = Promise;
          if (tmp4) {
            rejectResult = _Promise.reject(tmp4);
          } else {
            rejectResult = _Promise.resolve();
          }
          return rejectResult;
        }
        setPlaceholder(arg0, arg1) {
          obj = { field: global, attribute: "placeholder", value: module };
          return this.setAttribute(obj);
        }
        clear(arg0) {
          if (allowedFields.hasOwnProperty(global)) {
            _fields = this._fields;
            self3 = this;
            if (_fields.hasOwnProperty(global)) {
              _bus = self3._bus;
              tmp8 = events;
              obj1 = { field: null };
              obj1.field = global;
              emitResult = _bus.emit(events.CLEAR_FIELD, obj1);
            } else {
              tmp5 = closure_7;
              obj4 = { type: null, code: null, message: null };
              tmp6 = closure_11;
              obj4.type = closure_11.HOSTED_FIELDS_FIELD_NOT_PRESENT.type;
              obj4.code = closure_11.HOSTED_FIELDS_FIELD_NOT_PRESENT.code;
              str3 = 'Cannot clear "';
              str4 = '" field because it is not part of the current Hosted Fields options.';
              obj4.message = `Cannot clear "${global}" field because it is not part of the current Hosted Fields options.`;
              self4 = this;
              self5 = this;
              tmp7 = obj4;
              tmp4 = new closure_7(obj4);
            }
          } else {
            tmp = closure_7;
            obj = { type: null, code: null, message: null };
            tmp2 = closure_11;
            obj.type = closure_11.HOSTED_FIELDS_FIELD_INVALID.type;
            obj.code = closure_11.HOSTED_FIELDS_FIELD_INVALID.code;
            str = '"';
            str2 = '" is not a valid field. You must use a valid field option when clearing a field.';
            obj.message = `"${global}" is not a valid field. You must use a valid field option when clearing a field.`;
            self = this;
            self2 = this;
            tmp3 = obj;
            tmp4 = new closure_7(obj);
          }
          _Promise = Promise;
          if (tmp4) {
            rejectResult = _Promise.reject(tmp4);
          } else {
            rejectResult = _Promise.resolve();
          }
          return rejectResult;
        }
        focus(arg0) {
          self = this;
          tmp = this._fields[global];
          closure_0 = tmp;
          if (allowedFields.hasOwnProperty(global)) {
            _fields = self._fields;
            if (_fields.hasOwnProperty(global)) {
              frameElement = tmp.frameElement;
              focusResult = frameElement.focus();
              _bus = self._bus;
              tmp10 = events;
              obj1 = { field: null };
              obj1.field = global;
              emitResult = _bus.emit(events.TRIGGER_INPUT_FOCUS, obj1);
              tmp12 = closure_15;
              if (closure_15.isIos()) {
                tmp13 = globalThis;
                _setTimeout = setTimeout;
                num = 5;
                timerId = setTimeout(() => {
                  /* body not rendered: F150483 */
                }, 5);
              }
            } else {
              tmp6 = closure_7;
              obj4 = { type: null, code: null, message: null };
              tmp7 = closure_11;
              obj4.type = closure_11.HOSTED_FIELDS_FIELD_NOT_PRESENT.type;
              obj4.code = closure_11.HOSTED_FIELDS_FIELD_NOT_PRESENT.code;
              str3 = 'Cannot focus "';
              str4 = '" field because it is not part of the current Hosted Fields options.';
              obj4.message = `Cannot focus "${global}" field because it is not part of the current Hosted Fields options.`;
              self4 = this;
              self5 = this;
              tmp8 = obj4;
              tmp5 = new closure_7(obj4);
            }
          } else {
            tmp2 = closure_7;
            obj = { type: null, code: null, message: null };
            tmp3 = closure_11;
            obj.type = closure_11.HOSTED_FIELDS_FIELD_INVALID.type;
            obj.code = closure_11.HOSTED_FIELDS_FIELD_INVALID.code;
            str = '"';
            str2 = '" is not a valid field. You must use a valid field option when focusing a field.';
            obj.message = `"${global}" is not a valid field. You must use a valid field option when focusing a field.`;
            self2 = this;
            self3 = this;
            tmp4 = obj;
            tmp5 = new closure_7(obj);
          }
          _Promise = Promise;
          if (tmp5) {
            rejectResult = _Promise.reject(tmp5);
          } else {
            rejectResult = _Promise.resolve();
          }
          return rejectResult;
        }
        getState() {
          return this._state;
        }
      }
      let assign = global("../../lib/assign").assign;
      let closure_1 = global("../../lib/create-assets-url");
      let verifyDomain = global("../../lib/is-verified-domain");
      let closure_3 = global("../../lib/destructor");
      let closure_4 = global("@braintree/iframer");
      let closure_5 = global("framebus");
      let closure_6 = global("../../lib/create-deferred-client");
      let closure_7 = global("../../lib/braintree-error");
      query = global("./compose-url");
      let closure_9 = global("./get-styles-from-class");
      const globalResult = global("../shared/constants");
      let closure_10 = globalResult;
      global("../shared/errors");
      const INTEGRATION_TIMEOUT_MS = global("../../lib/constants").INTEGRATION_TIMEOUT_MS;
      let closure_13 = global("@braintree/uuid");
      let closure_14 = global("../shared/find-parent-tags");
      const ios = global("../shared/browser-detection");
      const events = globalResult.events;
      const globalResult1 = global("@braintree/event-emitter");
      let closure_18 = global("./inject-frame");
      sendEvent = global("../../lib/analytics");
      let allowedFields = globalResult.allowedFields;
      let closure_21 = global("../../lib/methods");
      let closure_22 = global("../../lib/shadow");
      let closure_23 = global("../../lib/find-root-node");
      let closure_24 = global("../../lib/convert-methods-to-error");
      constants = global("../../lib/errors");
      let closure_26 = global("../shared/get-card-types");
      let closure_27 = global("./attribute-validation-error");
      const globalResult2 = global("@braintree/wrap-promise");
      let closure_28 = global("./focus-change");
      const destroy = global("../shared/focus-intercept").destroy;
      const child = globalResult1.createChild(HostedFields);
      module.exports = globalResult2.wrapPrototype(HostedFields);
    },
    {
      "../../lib/analytics": 138,
      "../../lib/assign": 140,
      "../../lib/braintree-error": 143,
      "../../lib/constants": 145,
      "../../lib/convert-methods-to-error": 146,
      "../../lib/create-assets-url": 148,
      "../../lib/create-deferred-client": 150,
      "../../lib/destructor": 152,
      "../../lib/errors": 154,
      "../../lib/find-root-node": 155,
      "../../lib/is-verified-domain": 173,
      "../../lib/methods": 175,
      "../../lib/shadow": 178,
      "../shared/browser-detection": 130,
      "../shared/constants": 131,
      "../shared/errors": 132,
      "../shared/find-parent-tags": 133,
      "../shared/focus-intercept": 134,
      "../shared/get-card-types": 135,
      "./attribute-validation-error": 123,
      "./compose-url": 124,
      "./focus-change": 125,
      "./get-styles-from-class": 126,
      "./inject-frame": 128,
      "@braintree/event-emitter": 30,
      "@braintree/iframer": 32,
      "@braintree/uuid": 36,
      "@braintree/wrap-promise": 40,
      framebus: 50,
    },
  ];
  obj[127] = items126;
  const items127 = [
    (arg0, arg1, arg2) => {
      let closure_0 = global("../shared/focus-intercept");
      const navigationDirections = global("../shared/constants").navigationDirections;
      module.exports = function injectFrame(arg0, getAttribute, appendChild, arg3) {
        const attr = getAttribute.getAttribute("type");
        const element = <div />;
        const documentFragment = document.createDocumentFragment();
        element.style.clear = "both";
        const generateResult = closure_0.generate(arg0, attr, navigationDirections.BACK, arg3);
        const generateResult1 = closure_0.generate(arg0, attr, navigationDirections.FORWARD, arg3);
        documentFragment.appendChild(generateResult);
        documentFragment.appendChild(getAttribute);
        documentFragment.appendChild(generateResult1);
        documentFragment.appendChild(element);
        appendChild.appendChild(documentFragment);
        const items = [getAttribute, element];
        return items;
      };
    },
    { "../shared/constants": 131, "../shared/focus-intercept": 134 },
  ];
  obj[128] = items127;
  const items128 = [
    (arg0, arg1, arg2) => {
      let closure_0 = global("./external/hosted-fields");
      let closure_1 = global("../lib/basic-component-verification");
      let closure_2 = global("./shared/errors");
      const globalResult = global("restricted-input/supports-input-formatting");
      const globalResult1 = global("@braintree/wrap-promise");
      let closure_3 = global("../lib/braintree-error");
      let obj = {
        supportsInputFormatting: globalResult,
        create: globalResult1(function create(authorization) {
          closure_0 = authorization;
          const obj = {
            name: "Hosted Fields",
            authorization: authorization.authorization,
            client: authorization.client,
          };
          const verifyResult = closure_1.verify(obj);
          return verifyResult.then(() => {
            let tmp = new closure_0(closure_0);
            closure_0 = tmp;
            const promise = new Promise((arg0, arg1) => {
              closure_0 = arg0;
              closure_1 = arg1;
              closure_0.on("ready", () => {
                closure_0(closure_0);
              });
              closure_0.on("timeout", () => {
                const tmp = new closure_3_3(constants.HOSTED_FIELDS_TIMEOUT);
                closure_1(tmp);
              });
            });
            return promise;
          });
        }),
        VERSION: "3.112.1",
      };
      module.exports = obj;
    },
    {
      "../lib/basic-component-verification": 141,
      "../lib/braintree-error": 143,
      "./external/hosted-fields": 127,
      "./shared/errors": 132,
      "@braintree/wrap-promise": 40,
      "restricted-input/supports-input-formatting": 85,
    },
  ];
  obj[129] = items128;
  const items129 = [
    (arg0, arg1, arg2) => {
      function isChromeIos() {
        const tmp = closure_3() && globalResult2();
        return tmp;
      }
      function hasSoftwareKeyboard() {
        const tmp = fn() || globalResult1() || globalResult2();
        return tmp;
      }
      const globalResult = global("@braintree/browser-detection/is-android");
      const fn = globalResult;
      const globalResult1 = global("@braintree/browser-detection/is-chrome-os");
      const globalResult2 = global("@braintree/browser-detection/is-ios");
      let closure_3 = global("@braintree/browser-detection/is-chrome");
      module.exports = {
        isAndroid: globalResult,
        isChromeOS: globalResult1,
        isChromeIos,
        isFirefox: global("@braintree/browser-detection/is-firefox"),
        isIos: globalResult2,
        isIosWebview: global("@braintree/browser-detection/is-ios-webview"),
        hasSoftwareKeyboard,
      };
      ({
        isAndroid: globalResult,
        isChromeOS: globalResult1,
        isChromeIos,
        isFirefox: global("@braintree/browser-detection/is-firefox"),
        isIos: globalResult2,
        isIosWebview: global("@braintree/browser-detection/is-ios-webview"),
        hasSoftwareKeyboard,
      });
    },
    {
      "@braintree/browser-detection/is-android": 20,
      "@braintree/browser-detection/is-chrome": 22,
      "@braintree/browser-detection/is-chrome-os": 21,
      "@braintree/browser-detection/is-firefox": 23,
      "@braintree/browser-detection/is-ios": 27,
      "@braintree/browser-detection/is-ios-webview": 25,
    },
  ];
  obj[130] = items129;
  const items130 = [
    (arg0, arg1, arg2) => {
      let obj3;
      const globalResult = global("../../lib/enumerate");
      const obj = {
        VERSION: "3.112.1",
        maxExpirationYearAge: 19,
        externalEvents: {
          FOCUS: "focus",
          BLUR: "blur",
          EMPTY: "empty",
          NOT_EMPTY: "notEmpty",
          VALIDITY_CHANGE: "validityChange",
          CARD_TYPE_CHANGE: "cardTypeChange",
        },
        defaultMaxLengths: {
          number: 19,
          postalCode: 8,
          expirationDate: 7,
          expirationMonth: 2,
          expirationYear: 4,
          cvv: 3,
        },
        externalClasses: {
          FOCUSED: "braintree-hosted-fields-focused",
          INVALID: "braintree-hosted-fields-invalid",
          VALID: "braintree-hosted-fields-valid",
        },
        navigationDirections: { BACK: "before", FORWARD: "after" },
        defaultIFrameStyle: { border: "none", width: "100%", height: "100%", float: "left" },
        tokenizationErrorCodes: obj3,
        allowedStyles: [
          "-moz-appearance",
          "-moz-box-shadow",
          "-moz-osx-font-smoothing",
          "-moz-tap-highlight-color",
          "-moz-transition",
          "-webkit-appearance",
          "-webkit-box-shadow",
          "-webkit-font-smoothing",
          "-webkit-tap-highlight-color",
          "-webkit-transition",
          "appearance",
          "box-shadow",
          "color",
          "direction",
          "font",
          "font-family",
          "font-size",
          "font-size-adjust",
          "font-stretch",
          "font-style",
          "font-variant",
          "font-variant-alternates",
          "font-variant-caps",
          "font-variant-east-asian",
          "font-variant-ligatures",
          "font-variant-numeric",
          "font-weight",
          "letter-spacing",
          "line-height",
          "margin",
          "margin-top",
          "margin-right",
          "margin-bottom",
          "margin-left",
          "opacity",
          "outline",
          "padding",
          "padding-top",
          "padding-right",
          "padding-bottom",
          "padding-left",
          "text-align",
          "text-shadow",
          "transition",
        ],
        allowedFields: {
          cardholderName: { name: "cardholder-name", label: "Cardholder Name" },
          number: { name: "credit-card-number", label: "Credit Card Number" },
          cvv: { name: "cvv", label: "CVV" },
          expirationDate: { name: "expiration", label: "Expiration Date" },
          expirationMonth: { name: "expiration-month", label: "Expiration Month" },
          expirationYear: { name: "expiration-year", label: "Expiration Year" },
          postalCode: { name: "postal-code", label: "Postal Code" },
        },
        allowedAttributes: {
          "aria-invalid": "boolean",
          "aria-required": "boolean",
          disabled: "boolean",
          placeholder: "string",
        },
        allowedBillingAddressFields: [
          "company",
          "countryCodeNumeric",
          "countryCodeAlpha2",
          "countryCodeAlpha3",
          "countryName",
          "extendedAddress",
          "locality",
          "region",
          "firstName",
          "lastName",
          "postalCode",
          "streetAddress",
        ],
        allowedShippingAddressFields: [
          "company",
          "countryCodeNumeric",
          "countryCodeAlpha2",
          "countryCodeAlpha3",
          "countryName",
          "extendedAddress",
          "locality",
          "region",
          "firstName",
          "lastName",
          "postalCode",
          "streetAddress",
        ],
        autocompleteMappings: {
          "cardholder-name": "cc-name",
          "credit-card-number": "cc-number",
          expiration: "cc-exp",
          "expiration-month": "cc-exp-month",
          "expiration-year": "cc-exp-year",
          cvv: "cc-csc",
          "postal-code": "billing postal-code",
        },
        events: globalResult(
          [
            "ADD_CLASS",
            "AUTOFILL_DATA_AVAILABLE",
            "BIN_AVAILABLE",
            "CARD_FORM_ENTRY_HAS_BEGUN",
            "CLEAR_FIELD",
            "CONFIGURATION",
            "FRAME_READY",
            "INPUT_EVENT",
            "READY_FOR_CLIENT",
            "REMOVE_ATTRIBUTE",
            "REMOVE_CLASS",
            "REMOVE_FOCUS_INTERCEPTS",
            "SET_ATTRIBUTE",
            "SET_MESSAGE",
            "SET_MONTH_OPTIONS",
            "TOKENIZATION_REQUEST",
            "TRIGGER_FOCUS_CHANGE",
            "TRIGGER_INPUT_FOCUS",
            "VALIDATE_STRICT",
          ],
          "hosted-fields:",
        ),
      };
      obj3 = { 81724: null, 81736: null };
      ({
        HOSTED_FIELDS_TOKENIZATION_FAIL_ON_DUPLICATE: obj2[81724],
        HOSTED_FIELDS_TOKENIZATION_CVV_VERIFICATION_FAILED: obj2[81736],
      } = global("./errors"));
      global("./errors");
      module.exports = obj;
    },
    { "../../lib/enumerate": 153, "./errors": 132 },
  ];
  obj[131] = items130;
  const items131 = [
    (arg0, arg1, arg2) => {
      const globalResult = global("../../lib/braintree-error");
      const obj = {
        HOSTED_FIELDS_TIMEOUT: {
          type: globalResult.types.UNKNOWN,
          code: "HOSTED_FIELDS_TIMEOUT",
          message: "Hosted Fields timed out when attempting to set up.",
        },
        HOSTED_FIELDS_INVALID_FIELD_KEY: { type: globalResult.types.MERCHANT, code: "HOSTED_FIELDS_INVALID_FIELD_KEY" },
        HOSTED_FIELDS_INVALID_FIELD_SELECTOR: {
          type: globalResult.types.MERCHANT,
          code: "HOSTED_FIELDS_INVALID_FIELD_SELECTOR",
          message: "Selector does not reference a valid DOM node.",
        },
        HOSTED_FIELDS_FIELD_DUPLICATE_IFRAME: {
          type: globalResult.types.MERCHANT,
          code: "HOSTED_FIELDS_FIELD_DUPLICATE_IFRAME",
          message: "Element already contains a Braintree iframe.",
        },
        HOSTED_FIELDS_FIELD_INVALID: { type: globalResult.types.MERCHANT, code: "HOSTED_FIELDS_FIELD_INVALID" },
        HOSTED_FIELDS_FIELD_NOT_PRESENT: { type: globalResult.types.MERCHANT, code: "HOSTED_FIELDS_FIELD_NOT_PRESENT" },
        HOSTED_FIELDS_TOKENIZATION_NETWORK_ERROR: {
          type: globalResult.types.NETWORK,
          code: "HOSTED_FIELDS_TOKENIZATION_NETWORK_ERROR",
          message: "A tokenization network error occurred.",
        },
        HOSTED_FIELDS_TOKENIZATION_FAIL_ON_DUPLICATE: {
          type: globalResult.types.CUSTOMER,
          code: "HOSTED_FIELDS_TOKENIZATION_FAIL_ON_DUPLICATE",
          message: "This credit card already exists in the merchant's vault.",
        },
        HOSTED_FIELDS_TOKENIZATION_CVV_VERIFICATION_FAILED: {
          type: globalResult.types.CUSTOMER,
          code: "HOSTED_FIELDS_TOKENIZATION_CVV_VERIFICATION_FAILED",
          message: "CVV verification failed during tokenization.",
        },
        HOSTED_FIELDS_FAILED_TOKENIZATION: {
          type: globalResult.types.CUSTOMER,
          code: "HOSTED_FIELDS_FAILED_TOKENIZATION",
          message: "The supplied card data failed tokenization.",
        },
        HOSTED_FIELDS_FIELDS_EMPTY: {
          type: globalResult.types.CUSTOMER,
          code: "HOSTED_FIELDS_FIELDS_EMPTY",
          message: "All fields are empty. Cannot tokenize empty card fields.",
        },
        HOSTED_FIELDS_FIELDS_INVALID: {
          type: globalResult.types.CUSTOMER,
          code: "HOSTED_FIELDS_FIELDS_INVALID",
          message: "Some payment input fields are invalid. Cannot tokenize invalid card fields.",
        },
        HOSTED_FIELDS_ATTRIBUTE_NOT_SUPPORTED: {
          type: globalResult.types.MERCHANT,
          code: "HOSTED_FIELDS_ATTRIBUTE_NOT_SUPPORTED",
        },
        HOSTED_FIELDS_ATTRIBUTE_VALUE_NOT_ALLOWED: {
          type: globalResult.types.MERCHANT,
          code: "HOSTED_FIELDS_ATTRIBUTE_VALUE_NOT_ALLOWED",
        },
        HOSTED_FIELDS_FIELD_PROPERTY_INVALID: {
          type: globalResult.types.MERCHANT,
          code: "HOSTED_FIELDS_FIELD_PROPERTY_INVALID",
        },
      };
      module.exports = obj;
    },
    { "../../lib/braintree-error": 143 },
  ];
  obj[132] = items131;
  const items132 = [
    (arg0, arg1, arg2) => {
      module.exports = function findParentTags(parentNode, arg1) {
        parentNode = parentNode.parentNode;
        const items = [];
        if (null != parentNode) {
          do {
            let tmp = null != parentNode.tagName;
            if (tmp) {
              let str = parentNode.tagName;
              tmp = str.toLowerCase() === arg1;
            }
            if (tmp) {
              let arr = items.push(parentNode);
            }
            parentNode = parentNode.parentNode;
          } while (null != parentNode);
        }
        return items;
      };
    },
    {},
  ];
  obj[133] = items132;
  const items133 = [
    (arg0, arg1, arg2) => {
      let closure_0 = global("./browser-detection");
      const globalResult = global("./constants");
      let closure_1 = Object.keys(globalResult.allowedFields);
      const navigationDirections = globalResult.navigationDirections;
      const exports = {
        generate(arg0, arg1, arg2, arg3) {
          closure_0 = arg3;
          const element = <input />;
          const obj2 = closure_0;
          if (!closure_0.hasSoftwareKeyboard()) {
            let documentFragment;
            if (!obj2.isFirefox()) {
              const _document = document;
              documentFragment = document.createDocumentFragment();
            }
            return documentFragment;
          }
          const attr = element.setAttribute("aria-hidden", "true");
          const attr1 = element.setAttribute("autocomplete", "off");
          const attr2 = element.setAttribute("data-braintree-direction", arg2);
          const attr3 = element.setAttribute("data-braintree-type", arg1);
          const attr4 = element.setAttribute("id", `bt-${arg1}-${arg2}-${arg0}`);
          const setAttribute = element.setAttribute;
          const str = JSON.stringify({
            border: "none !important",
            display: "block !important",
            height: "1px !important",
            left: "-1px !important",
            opacity: "0 !important",
            position: "absolute !important",
            top: "-1px !important",
            width: "1px !important",
          });
          const str2 = str.replace(/[{}"]/g, "");
          const attr5 = setAttribute("style", str2.replace(/,/g, ";"));
          const classList = element.classList;
          classList.add("focus-intercept");
          const listener = element.addEventListener("focus", (event) => {
            closure_0(event);
            if (!closure_0.hasSoftwareKeyboard()) {
              element.blur();
            }
          });
          documentFragment = element;
        },
        destroy(ReanimatedCustomWebAnimationsStyle) {
          let callResult;
          const _document = document;
          if (ReanimatedCustomWebAnimationsStyle) {
            const items = [_document.getElementById(ReanimatedCustomWebAnimationsStyle)];
            callResult = items;
          } else {
            const slice = [].slice;
            callResult = slice.call(_document.querySelectorAll("[data-braintree-direction]"));
          }
          const item = callResult.forEach((nodeType) => {
            const matchFocusElementResult =
              nodeType && 1 === nodeType.nodeType && exports.matchFocusElement(nodeType.getAttribute("id"));
            if (matchFocusElementResult) {
              const parentNode = nodeType.parentNode;
              parentNode.removeChild(nodeType);
            }
          });
        },
        matchFocusElement(attribute) {
          let tmp = attribute;
          if (tmp) {
            const parts = attribute.split("-");
            let _BooleanResult = parts.length >= 4;
            if (_BooleanResult) {
              const first = parts[0];
              let tmp7 = parts[2] === navigationDirections.BACK;
              const tmp5 = closure_1.indexOf(parts[1]) > -1;
              if (!tmp7) {
                tmp7 = parts[2] === tmp6.FORWARD;
              }
              let tmp8 = "bt" === first;
              const _Boolean = Boolean;
              if (tmp8) {
                tmp8 = tmp5;
              }
              if (tmp8) {
                tmp8 = tmp7;
              }
              _BooleanResult = _Boolean(tmp8);
            }
            tmp = _BooleanResult;
          }
          return tmp;
        },
      };
      module.exports = exports;
    },
    { "./browser-detection": 130, "./constants": 131 },
  ];
  obj[134] = items133;
  const items134 = [
    (arg0, arg1, arg2) => {
      let closure_0 = global("credit-card-type");
      module.exports = (arg0) => {
        const arr = closure_0(arg0);
        const item = arr.forEach((type) => {
          if ("mastercard" === type.type) {
            type.type = "master-card";
          }
        });
        return arr;
      };
    },
    { "credit-card-type": 42 },
  ];
  obj[135] = items134;
  const items135 = [
    (arg0, arg1, arg2) => {
      const globalResult = global("./american-express");
      const globalResult1 = global("./apple-pay");
      const globalResult2 = global("./client");
      const globalResult3 = global("./fastlane");
      const globalResult4 = global("./data-collector");
      const globalResult5 = global("./hosted-fields");
      const globalResult6 = global("./local-payment");
      const globalResult7 = global("./masterpass");
      const globalResult8 = global("./payment-request");
      const globalResult9 = global("./paypal");
      const globalResult10 = global("./paypal-checkout");
      const globalResult11 = global("./google-payment");
      const globalResult12 = global("./sepa");
      const globalResult13 = global("./three-d-secure");
      const globalResult14 = global("./unionpay");
      const globalResult15 = global("./us-bank-account");
      const globalResult16 = global("./vault-manager");
      const globalResult17 = global("./venmo");
      const globalResult18 = global("./visa-checkout");
      module.exports = {
        fastlane: globalResult3,
        americanExpress: globalResult,
        applePay: globalResult1,
        client: globalResult2,
        dataCollector: globalResult4,
        hostedFields: globalResult5,
        localPayment: globalResult6,
        masterpass: globalResult7,
        googlePayment: globalResult11,
        paymentRequest: globalResult8,
        paypal: globalResult9,
        paypalCheckout: globalResult10,
        threeDSecure: globalResult13,
        unionpay: globalResult14,
        usBankAccount: globalResult15,
        vaultManager: globalResult16,
        venmo: globalResult17,
        visaCheckout: globalResult18,
        sepa: globalResult12,
        preferredPaymentMethods: global("./preferred-payment-methods"),
        VERSION: "3.112.1",
      };
      ({
        fastlane: globalResult3,
        americanExpress: globalResult,
        applePay: globalResult1,
        client: globalResult2,
        dataCollector: globalResult4,
        hostedFields: globalResult5,
        localPayment: globalResult6,
        masterpass: globalResult7,
        googlePayment: globalResult11,
        paymentRequest: globalResult8,
        paypal: globalResult9,
        paypalCheckout: globalResult10,
        threeDSecure: globalResult13,
        unionpay: globalResult14,
        usBankAccount: globalResult15,
        vaultManager: globalResult16,
        venmo: globalResult17,
        visaCheckout: globalResult18,
        sepa: globalResult12,
        preferredPaymentMethods: global("./preferred-payment-methods"),
        VERSION: "3.112.1",
      });
    },
    {
      "./american-express": 88,
      "./apple-pay": 91,
      "./client": 96,
      "./data-collector": 114,
      "./fastlane": 119,
      "./google-payment": 122,
      "./hosted-fields": 129,
      "./local-payment": 185,
      "./masterpass": 188,
      "./payment-request": 193,
      "./paypal": 200,
      "./paypal-checkout": 197,
      "./preferred-payment-methods": 203,
      "./sepa": 207,
      "./three-d-secure": 219,
      "./unionpay": 223,
      "./us-bank-account": 229,
      "./vault-manager": 232,
      "./venmo": 237,
      "./visa-checkout": 247,
    },
  ];
  obj[136] = items135;
  const items136 = [
    (arg0, arg1, arg2) => {
      let closure_0 = global("./create-authorization-data");
      let closure_1 = global("./json-clone");
      constants = global("./constants");
      let obj = {
        addMetadata(_configuration, data) {
          let obj;
          const tmp = data;
          if (tmp) {
            obj = closure_1(data);
          } else {
            obj = {};
          }
          const attrs = closure_0(_configuration.authorization).attrs;
          const tmp3 = closure_1(_configuration.analyticsMetadata);
          obj.braintreeLibraryVersion = constants.BRAINTREE_LIBRARY_VERSION;
          for (const key10017 in obj._meta) {
            let _meta = obj._meta;
            if (!_meta.hasOwnProperty(key10017)) {
              continue;
            } else {
              tmp3[key10017] = obj._meta[key10017];
              continue;
            }
            continue;
          }
          obj._meta = tmp3;
          if (attrs.tokenizationKey) {
            obj.tokenizationKey = attrs.tokenizationKey;
          } else {
            obj.authorizationFingerprint = attrs.authorizationFingerprint;
          }
          return obj;
        },
        addEventMetadata(getConfiguration) {
          let str;
          const configuration = getConfiguration.getConfiguration();
          const attrs = closure_0(configuration.authorization).attrs;
          const obj = {
            api_integration_type: configuration.analyticsMetadata.integrationType,
            app_id: window.location.host,
            c_sdk_ver: constants.VERSION,
            component: "braintreeclientsdk",
            merchant_sdk_env: str,
            merchant_id: configuration.gatewayConfiguration.merchantId,
            event_source: "web",
            platform: constants.PLATFORM,
            platform_version: window.navigator.userAgent,
            session_id: configuration.analyticsMetadata.sessionId,
            client_session_id: configuration.analyticsMetadata.sessionId,
            tenant_name: "braintree",
          };
          str = "sandbox";
          if ("production" === configuration.gatewayConfiguration.environment) {
            str = "production";
          }
          if (attrs.tokenizationKey) {
            obj.tokenization_key = attrs.tokenizationKey;
          } else {
            obj.auth_fingerprint = attrs.authorizationFingerprint;
          }
          return obj;
        },
      };
      module.exports = obj;
    },
    { "./constants": 145, "./create-authorization-data": 149, "./json-clone": 174 },
  ];
  obj[137] = items136;
  const items137 = [
    (arg0, arg1, arg2) => {
      let closure_0 = global("./constants");
      let closure_1 = global("./add-metadata");
      let obj = {
        sendEvent: function sendPaypalEvent(arg0, arg1, arg2) {
          let closure_2;
          constants = arg1;
          closure_1 = arg2;
          const t = Date.now();
          const resolved = Promise.resolve(arg0);
          const nextPromise = resolved.then((_request) => {
            let items;
            let items1;
            let str;
            const sum = constants.ANALYTICS_PREFIX + constants;
            _request = _request._request;
            const ANALYTICS_URL = constants.ANALYTICS_URL;
            const obj = { events: items, tracking: items1 };
            const environment = _request.getConfiguration().gatewayConfiguration.environment;
            const addEventMetadataResult = closure_1.addEventMetadata(_request, obj);
            addEventMetadataResult.event_name = sum;
            addEventMetadataResult.t = t;
            const obj2 = { level: "info", event: sum, payload: { env: str, timestamp: t } };
            str = "sandbox";
            if ("production" === environment) {
              str = "production";
            }
            items = [obj2];
            items1 = [addEventMetadataResult];
            const request = {
              url: ANALYTICS_URL,
              method: "post",
              data: obj,
              timeout: constants.ANALYTICS_REQUEST_TIMEOUT_MS,
            };
            return _request(request, closure_1);
          });
          return nextPromise.catch((error) => {
            if (closure_1) {
              tmp(error);
            }
          });
        },
      };
      module.exports = obj;
    },
    { "./add-metadata": 137, "./constants": 145 },
  ];
  obj[138] = items137;
  const items138 = [
    (arg0, arg1, arg2) => {
      const globalResult = global("@braintree/asset-loader/load-script");
      module.exports = {
        loadScript: globalResult,
        loadFastlane: global("@paypal/accelerated-checkout-loader").loadAxo,
      };
      ({ loadScript: globalResult, loadFastlane: global("@paypal/accelerated-checkout-loader").loadAxo });
    },
    { "@braintree/asset-loader/load-script": 2, "@paypal/accelerated-checkout-loader": 41 },
  ];
  obj[139] = items138;
  const items139 = [
    (arg0, arg1, arg2) => {
      function assignPolyfill(arg0) {
        let num;
        for (let num = 1; num < arguments.length; num = num + 1) {
          let obj = arguments[num];
          for (const key10011 in obj) {
            if (!obj.hasOwnProperty(key10011)) {
              continue;
            } else {
              arg0[key10011] = obj[key10011];
              continue;
            }
            continue;
          }
        }
        return arg0;
      }
      let assign = assignPolyfill;
      if (typeof Object.assign === "function") {
        const _Object = Object;
        assign = Object.assign;
      }
      module.exports = { assign, _assign: assignPolyfill };
    },
    {},
  ];
  obj[140] = items139;
  const items140 = [
    (arg0, arg1, arg2) => {
      let closure_0 = global("./braintree-error");
      constants = global("./errors");
      let c2 = "3.112.1";
      let obj = {
        verify: function basicComponentVerification(arg0) {
          let authorization;
          let client;
          let name;
          let rejectResult;
          const tmp = arg0;
          if (tmp) {
            let reject2Result;
            ({ name, client, authorization } = arg0);
            if (!client) {
              if (!authorization) {
                const self3 = this;
                const self4 = this;
                const reject2 = Promise.reject;
                const obj2 = {
                  type: constants.INSTANTIATION_OPTION_REQUIRED.type,
                  code: constants.INSTANTIATION_OPTION_REQUIRED.code,
                  message: `options.client is required when instantiating ${name}.`,
                };
                const tmp13 = new closure_0(obj2);
                reject2Result = reject2(tmp13);
              }
              rejectResult = reject2Result;
            }
            if (!authorization) {
              let reject3Result;
              if (client.getVersion() !== c2) {
                const reject3 = Promise.reject;
                const self5 = this;
                const self6 = this;
                const obj3 = {
                  type: constants.INCOMPATIBLE_VERSIONS.type,
                  code: constants.INCOMPATIBLE_VERSIONS.code,
                  message: `Client (version ${client.getVersion()}) and ${name} (version ${tmp16}) components must be from the same SDK version.`,
                };
                const tmp23 = new closure_0(obj3);
                reject3Result = reject3(tmp23);
              }
              reject2Result = reject3Result;
            }
            reject3Result = Promise.resolve();
          } else {
            const self = this;
            const self2 = this;
            const obj = {
              type: constants.INVALID_USE_OF_INTERNAL_FUNCTION.type,
              code: constants.INVALID_USE_OF_INTERNAL_FUNCTION.code,
              message: "Options must be passed to basicComponentVerification function.",
            };
            const tmp6 = new closure_0(obj);
            rejectResult = reject(tmp6);
          }
          return rejectResult;
        },
      };
      module.exports = obj;
    },
    { "./braintree-error": 143, "./errors": 154 },
  ];
  obj[141] = items140;
  const items141 = [
    (arg0, arg1, arg2) => {
      let closure_0 = global("./once");
      module.exports = (arg0, arg1) => {
        let length = arg0.length;
        function finish(arg0) {
          const tmp = arg0;
          if (tmp) {
            closure_1(arg0);
          } else {
            const diff = length - 1;
            if (0 === diff) {
              closure_1(null);
            }
          }
        }
        let tmp = closure_0(arg1);
        let closure_1 = tmp;
        if (0 !== length) {
          let num2;
          for (let num2 = 0; num2 < length; num2 = num2 + 1) {
            let arr = arg0[num2];
            if (0 === arr.length) {
              let arrResult = arr();
              let diff = length - 1;
              length = diff;
              if (0 === diff) {
                let tmpResult = tmp(null);
              }
            } else {
              let arrResult2 = arr(finish);
            }
          }
        } else {
          tmp(null);
        }
      };
    },
    { "./once": 176 },
  ];
  obj[142] = items141;
  const items142 = [
    (arg0, arg1, arg2) => {
      class BraintreeError {
        constructor(arg0) {
          obj = {};
          types = BraintreeError.types;
          if (types.hasOwnProperty(global.type)) {
            if (global.code) {
              if (global.message) {
                str4 = "BraintreeError";
                obj.name = "BraintreeError";
                ({ code: obj.code, message: obj.message, type: obj.type, details: obj.details } = global);
                return;
              } else {
                tmp7 = globalThis;
                _Error3 = Error;
                self5 = this;
                str3 = "Error message required.";
                self6 = this;
                error = new Error("Error message required.");
                tmp9 = error;
                throw error;
              }
            } else {
              tmp4 = globalThis;
              _Error2 = Error;
              self3 = this;
              str2 = "Error code required.";
              self4 = this;
              error1 = new Error("Error code required.");
              tmp6 = error1;
              throw error1;
            }
          } else {
            tmp = globalThis;
            _Error = Error;
            str = " is not a valid type.";
            self = this;
            self2 = this;
            error2 = new Error(global.type + " is not a valid type.");
            tmp3 = error2;
            throw error2;
          }
        }
        static findRootError(arg0) {
          obj = BraintreeError;
          findRootErrorResult = global;
          if (global instanceof BraintreeError) {
            findRootErrorResult = global;
            if (global.details) {
              findRootErrorResult = global;
              if (global.details.originalError) {
                findRootErrorResult = obj.findRootError(global.details.originalError);
              }
            }
          }
          return findRootErrorResult;
        }
      }
      const globalResult = global("./enumerate");
      BraintreeError.prototype = Object.create(Error.prototype);
      BraintreeError.prototype.constructor = BraintreeError;
      BraintreeError.types = globalResult(["CUSTOMER", "MERCHANT", "NETWORK", "INTERNAL", "UNKNOWN"]);
      module.exports = BraintreeError;
    },
    { "./enumerate": 153 },
  ];
  obj[143] = items142;
  const items143 = [
    (arg0, arg1, arg2) => {
      module.exports = function camelCaseToSnakeCase(arr) {
        let reduced;
        const f150491 = (arr) => {
          let closure_0 = arr;
          reduced = undefined;
          let tmp = reduced;
          let push = reduced.push;
          if (null === arr) {
            reduced = null;
          } else {
            let tmp2 = globalThis;
            let _Array = Array;
            if (Array.isArray(arr)) {
              let items = [];
              let item = arr.forEach(f150491);
              reduced = items;
            } else {
              reduced = arr;
              if (typeof arr === "object") {
                let _Object = Object;
                let keys = Object.keys(arr);
                reduced = keys.reduce(f150492, {});
              }
            }
          }
          arr = push(reduced);
        };
        const f150492 = (acc, item) => {
          let str = item.replace(/([a-z\d])([A-Z])/g, "$1_$2");
          let str2 = str.replace(/([A-Z]+)([A-Z][a-z\d]+)/g, "$1_$2");
          let formatted = str2.toLowerCase();
          if (typeof closure_1_0[item] === "object") {
            let arr = closure_1_0[item];
            let reduced;
            let tmp3 = null;
            if (null === arr) {
              reduced = null;
            } else {
              let tmp4 = globalThis;
              let _Array = Array;
              if (Array.isArray(arr)) {
                let items = [];
                item = arr.forEach(f150491);
                reduced = items;
              } else {
                reduced = arr;
                if (typeof arr === "object") {
                  let _Object = Object;
                  let keys = Object.keys(arr);
                  reduced = keys.reduce(f150492, {});
                }
              }
            }
            acc[formatted] = reduced;
          } else {
            acc[formatted] = closure_1_0[item];
          }
          return acc;
        };
        let closure_0 = arr;
        if (null === arr) {
          reduced = null;
        } else {
          const _Array = Array;
          if (Array.isArray(arr)) {
            const items = [];
            const item = arr.forEach(f150491);
            reduced = items;
          } else {
            reduced = arr;
            if (typeof arr === "object") {
              const _Object = Object;
              const keys = Object.keys(arr);
              reduced = keys.reduce(f150492, {});
            }
          }
        }
        return reduced;
      };
    },
    {},
  ];
  obj[144] = items143;
  const items144 = [
    (arg0, arg1, arg2) => {
      module.exports = {
        ANALYTICS_PREFIX: "web.",
        ANALYTICS_REQUEST_TIMEOUT_MS: 2000,
        ANALYTICS_URL: "https://www.paypal.com/xoplatform/logger/api/logger",
        ASSETS_URLS: {
          production: "https://assets.braintreegateway.com",
          sandbox: "https://assets.braintreegateway.com",
        },
        CLIENT_API_URLS: {
          production: "https://api.braintreegateway.com:443",
          sandbox: "https://api.sandbox.braintreegateway.com:443",
        },
        FRAUDNET_SOURCE: "BRAINTREE_SIGNIN",
        FRAUDNET_FNCLS: "fnparams-dede7cc5-15fd-4c75-a9f4-36c430ee3a99",
        FRAUDNET_URL: "https://c.paypal.com/da/r/fb.js",
        BUS_CONFIGURATION_REQUEST_EVENT: "BUS_CONFIGURATION_REQUEST",
        GRAPHQL_URLS: {
          production: "https://payments.braintree-api.com/graphql",
          sandbox: "https://payments.sandbox.braintree-api.com/graphql",
        },
        INTEGRATION_TIMEOUT_MS: 60000,
        VERSION: "3.112.1",
        INTEGRATION: "custom",
        SOURCE: "client",
        PLATFORM: "web",
        BRAINTREE_LIBRARY_VERSION: "braintree/web/3.112.1",
      };
    },
    {},
  ];
  obj[145] = items144;
  const items145 = [
    (arg0, arg1, arg2) => {
      let closure_0 = global("./braintree-error");
      let closure_1 = global("./errors");
      module.exports = (arg0, arr) => {
        closure_0 = arg0;
        const item = arr.forEach((item) => {
          closure_0 = item;
          closure_0[item] = () => {
            const obj = {
              type: constants.METHOD_CALLED_AFTER_TEARDOWN.type,
              code: constants.METHOD_CALLED_AFTER_TEARDOWN.code,
              message: `${closure_0} cannot be called after teardown.`,
            };
            const tmp = new closure_2_0(obj);
            throw tmp;
          };
        });
      };
    },
    { "./braintree-error": 143, "./errors": 154 },
  ];
  obj[146] = items145;
  const items146 = [
    (arg0, arg1, arg2) => {
      let closure_0 = global("./braintree-error");
      module.exports = function convertToBraintreeError(originalError, arg1) {
        let obj2;
        let tmp2 = originalError;
        if (!(originalError instanceof closure_0)) {
          const obj = { type: null, code: null, message: null, details: obj2 };
          ({ type: obj.type, code: obj.code, message: obj.message } = arg1);
          const self = this;
          const self2 = this;
          obj2 = { originalError };
          tmp2 = new tmp(obj);
        }
        return tmp2;
      };
    },
    { "./braintree-error": 143 },
  ];
  obj[147] = items146;
  const items147 = [
    (arg0, arg1, arg2) => {
      const ASSETS_URLS = global("./constants").ASSETS_URLS;
      const obj = {
        create: function createAssetsUrl(arg0) {
          return ASSETS_URLS.production;
        },
      };
      module.exports = obj;
    },
    { "./constants": 145 },
  ];
  obj[148] = items147;
  const items148 = [
    (arg0, arg1, arg2) => {
      const atob = global("../lib/vendor/polyfill").atob;
      const CLIENT_API_URLS = global("../lib/constants").CLIENT_API_URLS;
      module.exports = function createAuthorizationData(tokenizationKey) {
        const obj = { attrs: {}, configUrl: "" };
        const obj2 = /^[a-zA-Z0-9]+_[a-zA-Z0-9]+_[a-zA-Z0-9_]+$/;
        if (obj2.test(tokenizationKey)) {
          const parts = tokenizationKey.split("_");
          const first = parts[0];
          const substr = parts.slice(2);
          obj.environment = first;
          obj.attrs.tokenizationKey = tokenizationKey;
          obj.configUrl = `${CLIENT_API_URLS[tmp4]}/merchants/${obj3.join("_")}/client_api/v1/configuration`;
        } else {
          const _JSON = JSON;
          const parsed = JSON.parse(atob(tokenizationKey));
          ({
            environment: obj.environment,
            authorizationFingerprint: obj.attrs.authorizationFingerprint,
            configUrl: obj.configUrl,
            graphQL: obj.graphQL,
          } = parsed);
        }
        return obj;
      };
    },
    { "../lib/constants": 145, "../lib/vendor/polyfill": 182 },
  ];
  obj[149] = items148;
  const items149 = [
    (arg0, arg1, arg2) => {
      let closure_0 = global("./braintree-error");
      let closure_1 = global("./assets");
      let closure_2 = global("./errors");
      let c3 = "3.112.1";
      let obj = {
        create: function createDeferredClient(client) {
          let resolved1;
          let resolved = Promise.resolve();
          if (client.client) {
            resolved1 = Promise.resolve(client.client);
          } else {
            let _window = window;
            client = window.braintree;
            if (client) {
              let _window2 = window;
              client = window.braintree.client;
            }
            if (!client) {
              let obj = { src: `${client.assetsUrl}/web/${c3}/js/client.min.js` };
              const script = closure_1.loadScript(obj);
              resolved = script.catch((error) => {
                let obj2;
                const obj = {
                  type: constants.CLIENT_SCRIPT_FAILED_TO_LOAD.type,
                  code: constants.CLIENT_SCRIPT_FAILED_TO_LOAD.code,
                  message: constants.CLIENT_SCRIPT_FAILED_TO_LOAD.message,
                  details: obj2,
                };
                obj2 = { originalError: error };
                const tmp = new client(obj);
                return reject(tmp);
              });
            }
            resolved1 = resolved.then(function () {
              let rejectResult;
              if (window.braintree.client.VERSION !== c3) {
                const _window2 = window;
                const self = this;
                const self2 = this;
                const obj2 = {
                  type: constants.INCOMPATIBLE_VERSIONS.type,
                  code: constants.INCOMPATIBLE_VERSIONS.code,
                  message: `Client (version ${window.braintree.client.VERSION}) and ${closure_0.name} (version ${tmp}) components must be from the same SDK version.`,
                };
                const tmp8 = new client(obj2);
                rejectResult = reject(tmp8);
              } else {
                const _window = window;
                client = window.braintree.client;
                const obj = { authorization: null, debug: null };
                ({ authorization: obj.authorization, debug: obj.debug } = client);
                rejectResult = client.create(obj);
              }
              return rejectResult;
            });
          }
          return resolved1;
        },
      };
      module.exports = obj;
    },
    { "./assets": 139, "./braintree-error": 143, "./errors": 154 },
  ];
  obj[150] = items149;
  const items150 = [
    (arg0, arg1, arg2) => {
      module.exports = (arg0) => {
        let closure_0 = arg0;
        return function () {
          closure_0 = arguments;
          const timerId = setTimeout(() => {
            closure_0.apply(null, closure_0);
          }, 1);
        };
      };
    },
    {},
  ];
  obj[151] = items150;
  const items151 = [
    (arg0, arg1, arg2) => {
      class Destructor {
        constructor() {
          return;
        }
        registerFunctionForTeardown(arg0) {
          if (typeof global === "function") {
            self = this;
            _teardownRegistry = this._teardownRegistry;
            arr1 = _teardownRegistry.push(global);
          }
          return;
        }
        teardown(arg0) {
          self = this;
          closure_0 = global;
          if (this._isTearingDown) {
            tmp3 = globalThis;
            _Error = Error;
            self2 = this;
            str = "Destructor is already tearing down";
            self3 = this;
            error = new Error("Destructor is already tearing down");
            tmp5 = error;
            tmp6 = global(error);
          } else {
            flag = true;
            self._isTearingDown = true;
            tmp = closure_0;
            fn = () => {
              /* body not rendered: F150497 */
            };
            tmp2 = closure_0(self._teardownRegistry, fn.bind(self));
          }
          return;
        }
      }
      handler = global("./batch-execute-functions");
      module.exports = Destructor;
    },
    { "./batch-execute-functions": 142 },
  ];
  obj[152] = items151;
  const items152 = [
    (arg0, arg1, arg2) => {
      module.exports = function enumerate(arr, arg1) {
        let str = "";
        if (null != arg1) {
          str = arg1;
        }
        return arr.reduce((acc, item) => {
          acc[item] = str + item;
          return acc;
        }, {});
      };
    },
    {},
  ];
  obj[153] = items152;
  const items153 = [
    (arg0, arg1, arg2) => {
      const globalResult = global("./braintree-error");
      const obj = {
        INVALID_USE_OF_INTERNAL_FUNCTION: {
          type: globalResult.types.INTERNAL,
          code: "INVALID_USE_OF_INTERNAL_FUNCTION",
        },
        INSTANTIATION_OPTION_REQUIRED: { type: globalResult.types.MERCHANT, code: "INSTANTIATION_OPTION_REQUIRED" },
        INCOMPATIBLE_VERSIONS: { type: globalResult.types.MERCHANT, code: "INCOMPATIBLE_VERSIONS" },
        CLIENT_SCRIPT_FAILED_TO_LOAD: {
          type: globalResult.types.NETWORK,
          code: "CLIENT_SCRIPT_FAILED_TO_LOAD",
          message: "Braintree client script could not be loaded.",
        },
        METHOD_CALLED_AFTER_TEARDOWN: { type: globalResult.types.MERCHANT, code: "METHOD_CALLED_AFTER_TEARDOWN" },
      };
      module.exports = obj;
    },
    { "./braintree-error": 143 },
  ];
  obj[154] = items153;
  const items154 = [
    (arg0, arg1, arg2) => {
      module.exports = function findRootNode(parentNode) {
        let parentNode2;
        let tmp = parentNode;
        let tmp2 = parentNode;
        if (parentNode.parentNode) {
          do {
            parentNode = tmp.parentNode;
            tmp = parentNode;
            tmp2 = parentNode;
            parentNode2 = parentNode.parentNode;
          } while (parentNode2);
        }
        return tmp2;
      };
    },
    {},
  ];
  obj[155] = items154;
  const items155 = [
    (arg0, arg1, arg2) => {
      module.exports = (arg0, keys, arg2) => {
        let num = 0;
        if (0 < arg0.length) {
          while (true) {
            let obj = arg0[num];
            if (obj.hasOwnProperty(keys)) {
              if (arg0[num][keys] === arg2) {
                break;
              }
            }
            num = num + 1;
          }
          return arg0[num];
        }
        return null;
      };
    },
    {},
  ];
  obj[156] = items155;
  const items156 = [
    (arg0, arg1, arg2) => {
      let closure_8;
      function noop() {}
      class FrameService {
        constructor(arg0) {
          closure_0 = global;
          if (global) {
            tmp4 = closure_13;
            item = closure_13.forEach(function (item) {
              if (!closure_0.hasOwnProperty(item)) {
                const _Error = Error;
                const self = this;
                const self2 = this;
                const error = new Error("A valid frame " + item + " must be provided");
                throw error;
              }
            });
            obj = /^[\w_]+$/;
            if (obj.test(global.name)) {
              self5 = this;
              tmp9 = closure_7;
              str3 = closure_7();
              str4 = "";
              this._serviceId = str3.replace(/-/g, "");
              size = {
                name: null,
                dispatchFrameUrl: null,
                openFrameUrl: null,
                height: null,
                width: null,
                top: null,
                left: null,
              };
              str5 = "_";
              size.name = `${global.name}_${this._serviceId}`;
              ({
                dispatchFrameUrl: obj2.dispatchFrameUrl,
                openFrameUrl: obj2.openFrameUrl,
                height: obj2.height,
                width: obj2.width,
                top: obj2.top,
                left: obj2.left,
              } = global);
              this._options = size;
              self5.state = global.state || {};
              tmp10 = closure_3;
              obj1 = { channel: null };
              obj1.channel = self5._serviceId;
              self6 = this;
              self7 = this;
              tmp11 = obj1;
              tmp12 = new closure_3(obj1);
              tmp13 = tmp12;
              self5._bus = tmp12;
              _setBusEventsResult = self5._setBusEvents();
              return;
            } else {
              tmp6 = globalThis;
              _Error2 = Error;
              self3 = this;
              str2 = "A valid frame name must be provided";
              self4 = this;
              error = new Error("A valid frame name must be provided");
              tmp8 = error;
              throw error;
            }
          } else {
            tmp = globalThis;
            _Error = Error;
            self = this;
            str = "Valid configuration is required";
            self2 = this;
            error1 = new Error("Valid configuration is required");
            tmp3 = error1;
            throw error1;
          }
        }
        initialize(arg0) {
          closure_0 = global;
          fn = function () {
            closure_0();
            const _bus = this._bus;
            _bus.off(constants.DISPATCH_FRAME_READY, closure_1);
          };
          bindResult = fn.bind(this);
          closure_1 = bindResult;
          _bus = this._bus;
          onResult = _bus.on(closure_4.DISPATCH_FRAME_READY, bindResult);
          _writeDispatchFrameResult = this._writeDispatchFrame();
          return;
        }
        _writeDispatchFrame() {
          const text = `${closure_6.DISPATCH_FRAME_NAME}_${this._serviceId}`;
          size = {
            "aria-hidden": true,
            name: text,
            title: text,
            src: this._options.dispatchFrameUrl,
            class: constants3.DISPATCH_FRAME_CLASS,
            height: 0,
            width: 0,
            style: { position: "absolute", left: "-9999px" },
          };
          this._dispatchFrame = closure_8(size);
          body.appendChild(this._dispatchFrame);
        }
        _setBusEvents() {
          _bus = this._bus;
          fn = function (err, fn) {
            const self = this;
            if (this._onCompleteCallback) {
              const _onCompleteCallback = self._onCompleteCallback;
              _onCompleteCallback.call(null, err.err, err.payload);
            }
            const _frame = self._frame;
            _frame.close();
            self._onCompleteCallback = null;
            if (fn) {
              fn();
            }
          };
          onResult = _bus.on(closure_4.DISPATCH_FRAME_REPORT, fn.bind(this));
          _bus2 = this._bus;
          fn2 = function (fn) {
            fn(this.state);
          };
          onResult1 = _bus2.on(closure_12, fn2.bind(this));
          return;
        }
        open(arg0, _onCompleteCallback) {
          const tmp = arg0 || {};
          const self = this;
          this._frame = this._getFrameForEnvironment(tmp);
          const _frame = this._frame;
          _frame.initialize(_onCompleteCallback);
          if (!(this._frame instanceof closure_1)) {
            assign(self.state, tmp.state);
            self._onCompleteCallback = _onCompleteCallback;
            const _frame2 = self._frame;
            _frame2.open();
            if (self.isFrameClosed()) {
              self._cleanupFrame();
              const tmp8 = _onCompleteCallback;
              if (tmp8) {
                const self2 = this;
                const self3 = this;
                const tmp11 = new closure_9(constants2.FRAME_SERVICE_FRAME_OPEN_FAILED);
                _onCompleteCallback(tmp11);
              }
            } else {
              self._pollForPopupClose();
            }
          }
        }
        redirect(arg0) {
          const self = this;
          const tmp = this._frame && !self.isFrameClosed();
          if (tmp) {
            const _frame = self._frame;
            _frame.redirect(arg0);
          }
        }
        close() {
          if (!this.isFrameClosed()) {
            const _frame = this._frame;
            _frame.close();
          }
        }
        focus() {
          if (!this.isFrameClosed()) {
            const _frame = this._frame;
            _frame.focus();
          }
        }
        createHandler(arg0) {
          obj = global;
          closure_0 = global;
          if (!global) {
            obj = {};
          }
          closure_0 = obj;
          obj1 = { close: null, focus: null };
          fn = function () {
            if (obj.beforeClose) {
              obj.beforeClose();
            }
            this.close();
          };
          obj1.close = fn.bind(this);
          fn2 = function () {
            if (obj.beforeFocus) {
              obj.beforeFocus();
            }
            this.focus();
          };
          obj1.focus = fn2.bind(this);
          return obj1;
        }
        createNoopHandler() {
          return { close: noop, focus: noop };
        }
        teardown() {
          this.close();
          const parentNode = this._dispatchFrame.parentNode;
          parentNode.removeChild(this._dispatchFrame);
          this._dispatchFrame = null;
          this._cleanupFrame();
        }
        isFrameClosed() {
          let isClosedResult = null == this._frame;
          if (!isClosedResult) {
            const _frame = this._frame;
            isClosedResult = _frame.isClosed();
          }
          return isClosedResult;
        }
        _cleanupFrame() {
          this._frame = null;
          clearInterval(this._popupInterval);
          this._popupInterval = null;
        }
        _pollForPopupClose() {
          fn = function () {
            const self = this;
            if (this.isFrameClosed()) {
              self._cleanupFrame();
              if (self._onCompleteCallback) {
                const self2 = this;
                const self3 = this;
                const _onCompleteCallback = self._onCompleteCallback;
                const tmp4 = new closure_1_9(constants.FRAME_SERVICE_FRAME_CLOSED);
                _onCompleteCallback(tmp4);
              }
            }
          };
          this._popupInterval = setInterval(fn.bind(this), closure_6.POPUP_POLL_INTERVAL);
          return this._popupInterval;
        }
        _getFrameForEnvironment(arg0) {
          let tmp6;
          const supportsPopupsResult = closure_10.supportsPopups();
          const BooleanResult = Boolean(window.popupBridge);
          const tmp3 = assign({}, this._options, arg0);
          if (BooleanResult) {
            const self5 = this;
            const self6 = this;
            tmp6 = new closure_1(tmp3);
          } else if (supportsPopupsResult) {
            const self3 = this;
            const self4 = this;
            tmp6 = new closure_0(tmp3);
          } else {
            const self = this;
            const self2 = this;
            tmp6 = new closure_2(tmp3);
          }
          return tmp6;
        }
      }
      let closure_0 = global("./strategies/popup");
      let closure_1 = global("./strategies/popup-bridge");
      let closure_2 = global("./strategies/modal");
      let closure_3 = global("framebus");
      constants = global("../shared/events");
      const constants2 = global("../shared/errors");
      const constants3 = global("../shared/constants");
      let closure_7 = global("@braintree/uuid");
      query = global("@braintree/iframer");
      let closure_9 = global("../../braintree-error");
      let closure_10 = global("../shared/browser-detection");
      const assign = global("./../../assign").assign;
      closure_12 = global("../../constants").BUS_CONFIGURATION_REQUEST_EVENT;
      let closure_13 = ["name", "dispatchFrameUrl", "openFrameUrl"];
      module.exports = FrameService;
    },
    {
      "../../braintree-error": 143,
      "../../constants": 145,
      "../shared/browser-detection": 164,
      "../shared/constants": 165,
      "../shared/errors": 166,
      "../shared/events": 167,
      "./../../assign": 140,
      "./strategies/modal": 159,
      "./strategies/popup": 162,
      "./strategies/popup-bridge": 160,
      "@braintree/iframer": 32,
      "@braintree/uuid": 36,
      framebus: 50,
    },
  ];
  obj[157] = items156;
  const items157 = [
    (arg0, arg1, arg2) => {
      let closure_0 = global("./frame-service");
      let obj = {
        create: function createFrameService(arg0, arg1) {
          closure_0 = arg1;
          const obj = new closure_0(arg0);
          obj.initialize(() => {
            closure_0(obj);
          });
        },
      };
      module.exports = obj;
    },
    { "./frame-service": 157 },
  ];
  obj[158] = items157;
  const items158 = [
    (arg0, arg1, arg2) => {
      let closure_0;
      function noop() {}
      class Modal {
        constructor(arg0) {
          let body;
          let obj2;
          const obj = { _closed: null, _frame: null, _options: obj2, _container: body };
          body = obj._options.container;
          obj2 = arg0 || {};
          if (!body) {
            const _document = document;
            body = document.body;
          }
        }
        open() {
          const self = this;
          size = {
            src: this._options.openFrameUrl,
            name: this._options.name,
            scrolling: "yes",
            height: "100%",
            width: "100%",
            style: assign({}, closure_3),
            title: "Lightbox Frame",
          };
          if (closure_2.isIos()) {
            if (closure_2.isIosWKWebview()) {
              self._lockScrolling();
              size.style = {};
            }
            const _document = document;
            self._el = <div />;
            assign(self._el.style, closure_3, {
              height: "100%",
              width: "100%",
              overflow: "auto",
              "-webkit-overflow-scrolling": "touch",
            });
            self._frame = closure_0(size);
            const _el = self._el;
            _el.appendChild(self._frame);
          } else {
            const tmp4 = closure_0(size);
            self._frame = tmp4;
            self._el = tmp4;
          }
          self._closed = false;
          const _container = self._container;
          _container.appendChild(self._el);
        }
        close() {
          const self = this;
          const _container = this._container;
          _container.removeChild(this._el);
          this._frame = null;
          this._closed = true;
          if (closure_2.isIosWKWebview()) {
            self._unlockScrolling();
          }
        }
        isClosed() {
          return Boolean(this._closed);
        }
        redirect(src) {
          this._frame.src = src;
        }
        _unlockScrolling() {
          document.body.style.overflow = this._savedBodyProperties.overflowStyle;
          document.body.style.position = this._savedBodyProperties.positionStyle;
          window.scrollTo(this._savedBodyProperties.left, this._savedBodyProperties.top);
          delete this["_savedBodyProperties"];
        }
        _lockScrolling() {
          let tmp3;
          let tmp4;
          const rect = {
            left: (window.pageXOffset || documentElement.scrollLeft) - (documentElement.clientLeft || 0),
            top: tmp3 - tmp4,
            overflowStyle: document.body.style.overflow,
            positionStyle: document.body.style.position,
          };
          tmp3 = window.pageYOffset || documentElement.scrollTop;
          tmp4 = documentElement.clientTop || 0;
          this._savedBodyProperties = rect;
          document.body.style.overflow = "hidden";
          document.body.style.position = "fixed";
          window.scrollTo(0, 0);
        }
      }
      handler = global("@braintree/iframer");
      const assign = global("../../../assign").assign;
      let closure_2 = global("../../shared/browser-detection");
      let closure_3 = {
        position: "fixed",
        top: 0,
        left: 0,
        bottom: 0,
        padding: 0,
        margin: 0,
        border: 0,
        outline: "none",
        zIndex: 20001,
        background: "#FFFFFF",
      };
      Modal.prototype.initialize = noop;
      Modal.prototype.focus = noop;
      module.exports = Modal;
    },
    { "../../../assign": 140, "../../shared/browser-detection": 164, "@braintree/iframer": 32 },
  ];
  obj[159] = items158;
  const items159 = [
    (arg0, arg1, arg2) => {
      function noop() {}
      class PopupBridge {
        constructor(arg0) {}
        initialize(arg0) {
          closure_0 = global;
          self = this;
          window.popupBridge.onComplete = (arg0, arg1) => {
            const tmp = !arg1 && !arg0;
            self._closed = true;
            if (!arg0) {
              if (!tmp) {
                closure_0(null, arg1);
              }
            }
            const tmp5 = new closure_0(constants.FRAME_SERVICE_FRAME_CLOSED);
            closure_0(tmp5);
          };
          return;
        }
        open(arg0) {
          const self = this;
          const tmp2 = (arg0 || {}).openFrameUrl || self._options.openFrameUrl;
          self._closed = false;
          popupBridge.open(tmp2);
        }
        isClosed() {
          return Boolean(this._closed);
        }
        redirect(openFrameUrl) {
          const obj = { openFrameUrl };
          this.open(obj);
        }
      }
      let closure_0 = global("../../../braintree-error");
      let closure_1 = global("../../shared/errors");
      PopupBridge.prototype.focus = noop;
      PopupBridge.prototype.close = noop;
      module.exports = PopupBridge;
    },
    { "../../../braintree-error": 143, "../../shared/errors": 166 },
  ];
  obj[160] = items159;
  const items160 = [
    (arg0, arg1, arg2) => {
      constants = global("../../../shared/constants");
      let closure_1 = global("./position");
      module.exports = function composePopupOptions(height) {
        const DEFAULT_POPUP_HEIGHT = height.height || constants.DEFAULT_POPUP_HEIGHT;
        const DEFAULT_POPUP_WIDTH = height.width || constants.DEFAULT_POPUP_WIDTH;
        let top = height.top;
        if (undefined === top) {
          top = closure_1.top(DEFAULT_POPUP_HEIGHT);
        }
        let left = height.left;
        if (undefined === left) {
          left = closure_1.left(DEFAULT_POPUP_WIDTH);
        }
        const items = [
          constants.POPUP_BASE_OPTIONS,
          `height=${DEFAULT_POPUP_HEIGHT}`,
          `width=${DEFAULT_POPUP_WIDTH}`,
          `top=${top}`,
          `left=${left}`,
        ];
        return items.join(",");
      };
    },
    { "../../../shared/constants": 165, "./position": 163 },
  ];
  obj[161] = items160;
  const items161 = [
    (arg0, arg1, arg2) => {
      let closure_0;
      class Popup {
        constructor(arg0) {
          obj = global;
          if (!global) {
            obj = {};
          }
          ({ _frame: null })._options = obj;
          return;
        }
        initialize() {
          return;
        }
        open() {
          this._frame = window.open(this._options.openFrameUrl, this._options.name, closure_0(this._options));
          return;
        }
        focus() {
          _frame = this._frame;
          focusResult = _frame.focus();
          return;
        }
        close() {
          if (!this._frame.closed) {
            _frame = this._frame;
            closeResult = _frame.close();
          }
          return;
        }
        isClosed() {
          _frame = this._frame;
          BooleanResult = !_frame;
          if (_frame) {
            tmp3 = globalThis;
            _Boolean = Boolean;
            BooleanResult = Boolean(tmp._frame.closed);
          }
          return BooleanResult;
        }
        redirect(arg0) {
          this._frame.location.href = global;
          return;
        }
      }
      handler = global("./compose-options");
      module.exports = Popup;
    },
    { "./compose-options": 161 },
  ];
  obj[162] = items161;
  const items162 = [
    (arg0, arg1, arg2) => {
      const rect = {
        top(dependencyMap) {
          let screenY;
          let clientHeight = window.outerHeight;
          if (!clientHeight) {
            const _document = document;
            clientHeight = document.documentElement.clientHeight;
          }
          if (null == window.screenY) {
            const _window2 = window;
            screenY = window.screenTop;
          } else {
            const _window = window;
            screenY = window.screenY;
          }
          return (clientHeight - dependencyMap) / 2 + screenY;
        },
        left(right) {
          let screenX;
          let clientWidth = window.outerWidth;
          if (!clientWidth) {
            const _document = document;
            clientWidth = document.documentElement.clientWidth;
          }
          if (null == window.screenX) {
            const _window2 = window;
            screenX = window.screenLeft;
          } else {
            const _window = window;
            screenX = window.screenX;
          }
          return (clientWidth - right) / 2 + screenX;
        },
        center(arg0, arg1, arg2) {
          return (arg0 - arg1) / 2 + arg2;
        },
      };
      module.exports = rect;
    },
    {},
  ];
  obj[163] = items162;
  const items163 = [
    (arg0, arg1, arg2) => {
      module.exports = {
        isIos: global("@braintree/browser-detection/is-ios"),
        isIosWKWebview: global("@braintree/browser-detection/is-ios-wkwebview"),
        supportsPopups: global("@braintree/browser-detection/supports-popups"),
      };
      ({
        isIos: global("@braintree/browser-detection/is-ios"),
        isIosWKWebview: global("@braintree/browser-detection/is-ios-wkwebview"),
        supportsPopups: global("@braintree/browser-detection/supports-popups"),
      });
    },
    {
      "@braintree/browser-detection/is-ios": 27,
      "@braintree/browser-detection/is-ios-wkwebview": 26,
      "@braintree/browser-detection/supports-popups": 29,
    },
  ];
  obj[164] = items163;
  const items164 = [
    (arg0, arg1, arg2) => {
      module.exports = {
        DISPATCH_FRAME_NAME: "dispatch",
        DISPATCH_FRAME_CLASS: "braintree-dispatch-frame",
        POPUP_BASE_OPTIONS: "resizable,scrollbars",
        DEFAULT_POPUP_WIDTH: 450,
        DEFAULT_POPUP_HEIGHT: 535,
        POPUP_POLL_INTERVAL: 100,
        POPUP_CLOSE_TIMEOUT: 100,
      };
    },
    {},
  ];
  obj[165] = items164;
  const items165 = [
    (arg0, arg1, arg2) => {
      const globalResult = global("../../braintree-error");
      const obj = {
        FRAME_SERVICE_FRAME_CLOSED: {
          type: globalResult.types.INTERNAL,
          code: "FRAME_SERVICE_FRAME_CLOSED",
          message: "Frame closed before tokenization could occur.",
        },
        FRAME_SERVICE_FRAME_OPEN_FAILED: {
          type: globalResult.types.INTERNAL,
          code: "FRAME_SERVICE_FRAME_OPEN_FAILED",
          message: "Frame failed to open.",
        },
      };
      module.exports = obj;
    },
    { "../../braintree-error": 143 },
  ];
  obj[166] = items165;
  const items166 = [
    (arg0, arg1, arg2) => {
      module.exports = global("../../enumerate")(["DISPATCH_FRAME_READY", "DISPATCH_FRAME_REPORT"], "frameService:");
    },
    { "../../enumerate": 153 },
  ];
  obj[167] = items166;
  const items167 = [
    (arg0, arg1, arg2) => {
      const assign = global("./assign").assign;
      module.exports = (gatewayConfiguration, apiVersion, merchantId) => {
        let items;
        let items1;
        let obj11;
        let obj12;
        let obj14;
        let obj15;
        let obj16;
        let obj18;
        let obj19;
        let obj21;
        let obj23;
        let obj3;
        let obj4;
        let obj45;
        let obj46;
        let obj47;
        let obj5;
        let obj6;
        let obj8;
        let supportedNetworks;
        let supportedNetworks1;
        let tmp;
        const androidPay = gatewayConfiguration.gatewayConfiguration.androidPay;
        let str = "TEST";
        if ("production" === gatewayConfiguration.gatewayConfiguration.environment) {
          str = "PRODUCTION";
        }
        if (2 === apiVersion) {
          const obj = { apiVersion: 2, apiVersionMinor: 0, environment: str, allowedPaymentMethods: items };
          const obj2 = { type: "CARD", parameters: obj3, tokenizationSpecification: obj4 };
          obj3 = {
            allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
            allowedCardNetworks: supportedNetworks.map((item) => item.toUpperCase()),
          };
          supportedNetworks = androidPay.supportedNetworks;
          obj4 = { type: "PAYMENT_GATEWAY", parameters: assign({}, obj6, obj5) };
          obj5 = { "braintree:authorizationFingerprint": androidPay.googleAuthorizationFingerprint };
          const _JSON = JSON;
          obj6 = {
            gateway: "braintree",
            "braintree:merchantId": gatewayConfiguration.gatewayConfiguration.merchantId,
            "braintree:apiVersion": "v1",
            "braintree:sdkVersion": "3.112.1",
            "braintree:metadata": JSON.stringify(obj8),
          };
          obj8 = { source: null, integration: null, sessionId: null, version: "3.112.1", platform: null };
          ({
            source: obj7.source,
            integration: obj7.integration,
            sessionId: obj7.sessionId,
            platform: obj7.platform,
          } = gatewayConfiguration.analyticsMetadata);
          items = [obj2];
          if (merchantId) {
            const obj9 = { merchantId };
            obj.merchantInfo = obj9;
          }
          tmp = obj;
          if (androidPay.paypalClientId) {
            const obj10 = { type: "PAYPAL", parameters: obj11, tokenizationSpecification: obj15 };
            obj11 = { purchase_context: obj12 };
            const obj13 = { payee: obj14, recurring_payment: true };
            obj12 = { purchase_units: items1 };
            items1 = [obj13];
            obj14 = { client_id: androidPay.paypalClientId };
            obj15 = { type: "PAYMENT_GATEWAY", parameters: assign({}, obj18, obj16) };
            obj16 = { "braintree:paypalClientId": androidPay.paypalClientId };
            const _JSON2 = JSON;
            obj18 = {
              gateway: "braintree",
              "braintree:merchantId": gatewayConfiguration.gatewayConfiguration.merchantId,
              "braintree:apiVersion": "v1",
              "braintree:sdkVersion": "3.112.1",
              "braintree:metadata": JSON.stringify(obj19),
            };
            obj19 = { source: null, integration: null, sessionId: null, version: "3.112.1", platform: null };
            ({
              source: obj17.source,
              integration: obj17.integration,
              sessionId: obj17.sessionId,
              platform: obj17.platform,
            } = gatewayConfiguration.analyticsMetadata);
            const prop = obj.allowedPaymentMethods;
            prop.push(obj10);
            tmp = obj;
          }
        } else {
          const obj20 = {
            environment: str,
            allowedPaymentMethods: ["CARD", "TOKENIZED_CARD"],
            paymentMethodTokenizationParameters: obj21,
            cardRequirements: obj47,
          };
          obj21 = { tokenizationType: "PAYMENT_GATEWAY", parameters: assign({}, obj45, obj23) };
          obj23 = { "braintree:authorizationFingerprint": androidPay.googleAuthorizationFingerprint };
          const _JSON3 = JSON;
          obj45 = {
            gateway: "braintree",
            "braintree:merchantId": gatewayConfiguration.gatewayConfiguration.merchantId,
            "braintree:apiVersion": "v1",
            "braintree:sdkVersion": "3.112.1",
            "braintree:metadata": JSON.stringify(obj46),
          };
          obj46 = { source: null, integration: null, sessionId: null, version: "3.112.1", platform: null };
          ({
            source: obj22.source,
            integration: obj22.integration,
            sessionId: obj22.sessionId,
            platform: obj22.platform,
          } = gatewayConfiguration.analyticsMetadata);
          obj47 = { allowedCardNetworks: supportedNetworks1.map((item) => item.toUpperCase()) };
          supportedNetworks1 = androidPay.supportedNetworks;
          if ("TOKENIZATION_KEY" === gatewayConfiguration.authorizationType) {
            obj20.paymentMethodTokenizationParameters.parameters["braintree:clientKey"] =
              gatewayConfiguration.authorization;
          }
          if (merchantId) {
            obj20.merchantId = merchantId;
          }
          tmp = obj20;
          if (apiVersion) {
            obj20.apiVersion = apiVersion;
            tmp = obj20;
          }
        }
        return tmp;
      };
    },
    { "./assign": 140 },
  ];
  obj[168] = items167;
  const items168 = [
    (arg0, arg1, arg2) => {
      module.exports = function inIframe(arg0) {
        const _window = arg0 || window;
        try {
          return _window.self !== _window.top;
        } catch (err) {
          return true;
        }
      };
    },
    {},
  ];
  obj[169] = items168;
  const items169 = [
    (arg0, arg1, arg2) => {
      module.exports = function isDateStringBeforeOrOn(str, str2) {
        const parts = str.split("-");
        const date = new Date(parts[0], parts[1], parts[2]);
        const parts1 = str2.split("-");
        const date1 = new Date(parts1[0], parts1[1], parts1[2]);
        return date <= date1;
      };
    },
    {},
  ];
  obj[170] = items169;
  const items170 = [
    (arg0, arg1, arg2) => {
      module.exports = (fastlane) => {
        if (fastlane) {
          fastlane = fastlane.hasOwnProperty("fastlane");
        }
        if (fastlane) {
          fastlane = fastlane.fastlane;
        }
        return fastlane;
      };
    },
    {},
  ];
  obj[171] = items170;
  const items171 = [
    (arg0, arg1, arg2) => {
      const obj = {
        isHTTPS(arg0) {
          let protocol = arg0;
          if (!protocol) {
            const _window = window;
            protocol = window.location.protocol;
          }
          return "https:" === protocol;
        },
      };
      module.exports = obj;
    },
    {},
  ];
  obj[172] = items171;
  const items172 = [
    (arg0, arg1, arg2) => {
      let closure_1 = {
        "paypal.com": 1,
        "braintreepayments.com": 1,
        "braintreegateway.com": 1,
        "braintree-api.com": 1,
      };
      module.exports = function isVerifiedDomain(str) {
        const formatted = str.toLowerCase();
        const obj = /^https:/;
        let hasOwnPropertyResult = obj.test(formatted);
        if (hasOwnPropertyResult) {
          if (!element) {
            const _document = document;
            element = <a />;
          }
          element.href = formatted;
          const str2 = element.hostname;
          const parts = str2.split(".");
          const substr = parts.slice(-2);
          hasOwnPropertyResult = closure_1.hasOwnProperty(substr.join("."));
        }
        return hasOwnPropertyResult;
      };
    },
    {},
  ];
  obj[173] = items172;
  const items173 = [
    (arg0, arg1, arg2) => {
      module.exports = (arg0) => JSON.parse(JSON.stringify(arg0));
    },
    {},
  ];
  obj[174] = items173;
  const items174 = [
    (arg0, arg1, arg2) => {
      module.exports = (arg0) => {
        let closure_0 = arg0;
        const keys = Object.keys(arg0);
        return keys.filter((item) => typeof closure_0[item] === "function");
      };
    },
    {},
  ];
  obj[175] = items174;
  const items175 = [
    (arg0, arg1, arg2) => {
      module.exports = function once(arg0) {
        let closure_0 = arg0;
        let c1 = false;
        return function () {
          const tmp = c1;
          if (!tmp) {
            c1 = true;
            closure_0(...arguments);
          }
        };
      };
    },
    {},
  ];
  obj[176] = items175;
  const items176 = [
    (arg0, arg1, arg2) => {
      function stringify(obj, arg1) {
        const items = [];
        for (const key10012 in obj) {
          if (!obj.hasOwnProperty(key10012)) {
            continue;
          } else {
            let tmp = obj[key10012];
            let tmp2 = key10012;
            if (arg1) {
              if (obj) {
                if (typeof obj === "object") {
                  if (typeof obj.length === "number") {
                    let _Object = Object;
                    if ("[object Array]" === toString.call(obj)) {
                      let text = `${arg1}[]`;
                      tmp2 = text;
                    }
                  }
                }
              }
              text = `${arg1 + "[" + key10012}]`;
            }
            if (typeof tmp === "object") {
              let arr = items.push(stringify(tmp, tmp2));
              continue;
            } else {
              let _encodeURIComponent = encodeURIComponent;
              let push = items.push;
              let _encodeURIComponent2 = encodeURIComponent;
              let text1 = `${encodeURIComponent(tmp2)}=`;
              let arr3 = push(`${encodeURIComponent(tmp2)}=` + encodeURIComponent(tmp));
              continue;
            }
            continue;
          }
          continue;
        }
        return items.join("&");
      }
      let obj = {
        parse(arg0) {
          let reduced;
          let str = arg0;
          if (!str) {
            const _window = window;
            str = window.location.href;
          }
          let href = str;
          if (!href) {
            const _window2 = window;
            href = window.location.href;
          }
          const obj = /\?/;
          if (obj.test(href)) {
            const str3 = str.split("?")[1] || "";
            const str5 = str3.replace(/#.*$/, "");
            let parts = str5.split("&");
            reduced = parts.reduce((acc, item) => {
              const parts = item.split("=");
              const decodeURIComponentResult = decodeURIComponent(parts[0]);
              acc[decodeURIComponentResult] = decodeURIComponent(parts[1]);
              return acc;
            }, {});
          } else {
            reduced = {};
          }
          return reduced;
        },
        stringify,
        queryify(_redirectUrl, body) {
          let tmp2 = null != body && typeof body === "object";
          if (tmp2) {
            let flag = false;
            const keys = Object.keys();
            if (keys !== undefined) {
              flag = false;
              while (keys[tmp] !== undefined) {
                flag = true;
                if (body.hasOwnProperty(tmp5)) {
                  break;
                }
              }
            }
            tmp2 = flag;
          }
          let sum1 = arr;
          if (tmp2) {
            let str2 = "";
            let str3 = "";
            if (-1 === (_redirectUrl || "").indexOf("?")) {
              str3 = "?";
            }
            const sum = arr + str3;
            if (-1 !== sum.indexOf("=")) {
              str2 = "&";
            }
            sum1 = sum + str2 + stringify(body);
          }
          return sum1;
        },
        hasQueryParams(arg0) {
          let href = arg0;
          if (!href) {
            const _window = window;
            href = window.location.href;
          }
          const obj = /\?/;
          return obj.test(href);
        },
      };
      module.exports = obj;
    },
    {},
  ];
  obj[177] = items176;
  const items177 = [
    (arg0, arg1, arg2) => {
      let transformToSlot;
      let closure_0 = global("@braintree/uuid");
      let closure_1 = global("./find-root-node");
      let obj = {
        isShadowElement(element) {
          const str = closure_1(element);
          return "[object ShadowRoot]" === str.toString();
        },
        getShadowHost(arg0) {
          const tmp = closure_1(arg0);
          let host = null;
          const str = closure_1(tmp);
          if ("[object ShadowRoot]" === str.toString()) {
            host = tmp.host;
          }
          return host;
        },
        transformToSlot,
      };
      transformToSlot = function transformToSlot(element, arg1) {
        const obj = closure_1(element);
        element = obj.querySelector("style");
        const tmp3 = closure_1(element);
        let host = null;
        const str = closure_1(tmp3);
        if ("[object ShadowRoot]" === str.toString()) {
          host = tmp3.host;
        }
        const text = `shadow-slot-${closure_0()}`;
        const element1 = <slot />;
        const element2 = <div />;
        const attr = element1.setAttribute("name", `shadow-slot-${closure_0()}`);
        element.appendChild(element1);
        const attr1 = element2.setAttribute("slot", `shadow-slot-${closure_0()}`);
        host.appendChild(element2);
        if (arg1) {
          if (!element) {
            const _document = document;
            const element3 = <style />;
            element.appendChild(element3);
            element = element3;
          }
          const sheet = element.sheet;
          const _HermesInternal = HermesInternal;
          sheet.insertRule(`${'::slotted([slot="' + tmp5 + '"]) { '}${arg1} }`);
        }
        let tmp13 = element2;
        const str5 = closure_1(host);
        if ("[object ShadowRoot]" === str5.toString()) {
          tmp13 = transformToSlot(element2, arg1);
        }
        return tmp13;
      };
      module.exports = obj;
    },
    { "./find-root-node": 155, "@braintree/uuid": 36 },
  ];
  obj[178] = items177;
  const items178 = [
    (arg0, arg1, arg2) => {
      module.exports = (arr) => {
        let replaced = arr;
        if (-1 !== arr.indexOf("_")) {
          let str = arr.toLowerCase();
          replaced = str.replace(/(\_\w)/g, (arg0) => {
            const str = arg0[1];
            return str.toUpperCase();
          });
        }
        return replaced;
      };
    },
    {},
  ];
  obj[179] = items178;
  const items179 = [
    (arg0, arg1, arg2) => {
      let closure_0 = global("./querystring");
      const obj = {
        getUrlParams() {
          return closure_0.parse(window.location.href);
        },
      };
      module.exports = obj;
    },
    { "./querystring": 177 },
  ];
  obj[180] = items179;
  const items180 = [
    (arg0, arg1, arg2) => {
      module.exports = function useMin(arg0) {
        let str = ".min";
        const tmp = arg0;
        if (tmp) {
          str = "";
        }
        return str;
      };
    },
    {},
  ];
  obj[181] = items180;
  const items181 = [
    (arg0, arg1, arg2) => {
      function atobPolyfill(str) {
        let sum4;
        const regExp = new RegExp(
          "^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{4})([=]{1,2})?$",
        );
        str = "";
        let num = 0;
        if (regExp.test(str)) {
          do {
            let indexOf = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf;
            let sum = num + 1;
            let indexOf2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf;
            let sum1 = sum + 1;
            let tmp4 =
              63 & "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(str.charAt(num));
            let index = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(str.charAt(sum));
            let indexOf3 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf;
            let sum2 = sum1 + 1;
            let tmp7 = index >> 4;
            let tmp8 = 15 & index;
            let index1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(str.charAt(sum1));
            let tmp11 = (tmp8 << 4) | ((index1 >> 2) & 15);
            let indexOf4 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf;
            let tmp12 = 3 & index1;
            let _String = String;
            let tmp13 =
              63 & "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(str.charAt(sum2));
            let str3 = "";
            let fromCharCodeResult = String.fromCharCode((tmp4 << 2) | (tmp7 & 3));
            if (tmp11) {
              let _String2 = String;
              str3 = String.fromCharCode(tmp11);
            }
            let tmp16 = (tmp12 << 6) | tmp13;
            let str4 = "";
            let sum3 = fromCharCodeResult + str3;
            if (tmp16) {
              let _String3 = String;
              str4 = String.fromCharCode(tmp16);
            }
            num = sum2 + 1;
            sum4 = str + (sum3 + str4);
            str = sum4;
          } while (num < str.length);
          return sum4;
        } else {
          const _Error = Error;
          const self = this;
          const self2 = this;
          const error = new Error("Non base64 encoded input passed to window.atob polyfill");
          throw error;
        }
      }
      let _atob = atobPolyfill;
      if (typeof atob === "function") {
        _atob = atob;
      }
      module.exports = {
        atob(placeholder) {
          return _atob.call(window, placeholder);
        },
        _atob: atobPolyfill,
      };
    },
    {},
  ];
  obj[182] = items181;
  const items182 = [
    (arg0, arg1, arg2) => {
      module.exports = {
        REQUIRED_OPTIONS_FOR_START_PAYMENT: [
          "givenName",
          "surname",
          "currencyCode",
          "paymentType",
          "amount",
          "fallback",
        ],
        REQUIRED_OPTIONS_FOR_PAY_UPON_INVOICE_PAYMENT_TYPE: [
          "givenName",
          "surname",
          "currencyCode",
          "onPaymentStart",
          "paymentType",
          "amount",
          "address",
          "billingAddress",
          "birthDate",
          "email",
          "locale",
          "customerServiceInstructions",
          "correlationId",
          "phone",
          "phoneCountryCode",
          "lineItems",
        ],
        REQUIRED_OPTIONS_FOR_ADDRESS: ["streetAddress", "locality", "postalCode", "countryCode"],
        REQUIRED_OPTIONS_FOR_LINE_ITEMS: ["category", "name", "quantity", "unitAmount", "unitTaxAmount"],
        REQUIRED_OPTIONS_FOR_BLIK_SEAMLESS_PAYMENT_TYPE: [
          "givenName",
          "surname",
          "currencyCode",
          "paymentType",
          "amount",
        ],
        REQUIRED_OPTIONS_FOR_BLIK_OPTIONS_LEVEL_0: ["authCode"],
        REQUIRED_OPTIONS_FOR_BLIK_OPTIONS_ONE_CLICK_FIRST: ["authCode", "consumerReference", "aliasLabel"],
        REQUIRED_OPTIONS_FOR_BLIK_OPTIONS_ONE_CLICK_SUBSEQUENT: ["consumerReference", "aliasKey"],
      };
    },
    {},
  ];
  obj[183] = items182;
  const items183 = [
    (arg0, arg1, arg2) => {
      class LocalPayment {
        constructor(arg0) {
          obj = {
            _client: global.client,
            _assetsUrl: `${client.getConfiguration().gatewayConfiguration.assetsUrl}/web/3.112.1`,
            _isDebug: client2.getConfiguration().isDebug,
            _loadingFrameUrl: `${`${obj._assetsUrl}/html/local-payment-landing-frame`}${closure_2(obj._isDebug)}.html`,
            _authorizationInProgress: false,
            _paymentType: "unknown",
            _merchantAccountId: global.merchantAccountId,
          };
          client = global.client;
          client2 = global.client;
          if (global.redirectUrl) {
            obj._redirectUrl = global.redirectUrl;
            flag = true;
            obj._isRedirectFlow = true;
          }
          return;
        }
        _initialize() {
          self = this;
          _client = this._client;
          closure_2 = setTimeout(() => {
            /* body not rendered: F150513 */
          }, INTEGRATION_TIMEOUT_MS);
          promise = new Promise(() => {
            /* body not rendered: F150514 */
          });
          return promise;
        }
        startPayment(arg0) {
          self = this;
          closure_0 = global;
          self = this;
          if (this._isRedirectFlow) {
            global.redirectUrl = self._redirectUrl;
          } else {
            _serviceId = self._frameService._serviceId;
          }
          str = true;
          if (global) {
            obj = global.blikOptions || {};
            if (typeof global.paymentType === "string") {
              str2 = global.paymentType;
              paymentType = str2.toLowerCase();
            } else {
              paymentType = global.paymentType;
            }
            str3 = "blik";
            if ("blik" === paymentType) {
              str4 = "level_0";
              hasOwnPropertyResult = obj.hasOwnProperty("level_0");
              if (!hasOwnPropertyResult) {
                str5 = "oneClick";
                hasOwnPropertyResult = obj.hasOwnProperty("oneClick");
              }
              hasItem = hasOwnPropertyResult;
            } else {
              items = ["pay_upon_invoice", "mbway", "bancomatpay"];
              hasItem = items.includes(paymentType);
            }
            if (hasItem) {
              str7 = global.paymentType || "";
              str8 = "pay_upon_invoice";
              if ("pay_upon_invoice" === str7.toLowerCase()) {
                tmp26 = closure_10;
                num9 = 0;
                num10 = 1;
                str16 = "lineItems";
                str17 = "billingAddress";
                str18 = "address";
                num11 = 0;
                str = false;
                if (0 < closure_10.REQUIRED_OPTIONS_FOR_PAY_UPON_INVOICE_PAYMENT_TYPE.length) {
                  tmp27 = closure_10;
                  tmp28 = closure_10.REQUIRED_OPTIONS_FOR_PAY_UPON_INVOICE_PAYMENT_TYPE[num11];
                  tmp29 = num11;
                  str = tmp28;
                  label0: while (global.hasOwnProperty(tmp28)) {
                    if ("address" !== tmp28) {
                      if ("billingAddress" !== tmp28) {
                        tmp36 = tmp27;
                        if ("lineItems" === tmp28) {
                          arr5 = global[tmp28];
                          num13 = 0;
                          tmp35 = tmp27;
                          if (0 < arr5.length) {
                            while (true) {
                              obj4 = arr5[num13];
                              tmp30 = closure_10;
                              tmp31 = num13;
                              num12 = 0;
                              if (0 >= closure_10.REQUIRED_OPTIONS_FOR_LINE_ITEMS.length) {
                                num13 = num13 + 1;
                                tmp35 = tmp30;
                              } else {
                                tmp32 = closure_10;
                                tmp33 = num12;
                                tmp34 = closure_10;
                                while (obj4.hasOwnProperty(flag2)) {
                                  num12 = num12 + 1;
                                  tmp30 = tmp32;
                                }
                              }
                              tmp36 = tmp34;
                              if (flag2) {
                                str19 = ".";
                                str = `${tmp28}.${flag2}`;
                                break label0;
                              }
                              break label0;
                            }
                          }
                          tmp34 = tmp35;
                          flag2 = false;
                        }
                      }
                      sum = num11 + 1;
                      num11 = sum;
                      str = false;
                      if (sum < tmp36.REQUIRED_OPTIONS_FOR_PAY_UPON_INVOICE_PAYMENT_TYPE.length) {
                        continue;
                      } else {
                        break;
                      }
                      break;
                    }
                    obj5 = global[tmp28];
                    num14 = 0;
                    if (0 >= tmp27.REQUIRED_OPTIONS_FOR_ADDRESS.length) {
                      tmp39 = tmp27;
                      flag3 = false;
                    } else {
                      tmp37 = closure_10;
                      tmp38 = num14;
                      tmp39 = closure_10;
                      while (obj5.hasOwnProperty(flag3)) {
                        num14 = num14 + 1;
                        tmp27 = tmp37;
                      }
                    }
                    tmp36 = tmp39;
                    if (flag3) {
                      str20 = ".";
                      str = `${tmp28}.${flag3}`;
                      break;
                    }
                    break;
                  }
                }
              } else {
                str = false;
                if ("blik" === str7.toLowerCase()) {
                  obj2 = global.blikOptions || {};
                  if (!global.redirectUrl) {
                    tmp9 = closure_10;
                    prop = closure_10.REQUIRED_OPTIONS_FOR_BLIK_SEAMLESS_PAYMENT_TYPE;
                    str9 = "onPaymentStart";
                    arr1 = prop.push("onPaymentStart");
                  }
                  tmp11 = closure_10;
                  num3 = 0;
                  num4 = 1;
                  num5 = 0;
                  if (0 >= closure_10.REQUIRED_OPTIONS_FOR_BLIK_SEAMLESS_PAYMENT_TYPE.length) {
                    str10 = "level_0";
                    if (obj2.hasOwnProperty("level_0")) {
                      num8 = 0;
                      flag = false;
                      if (0 < tmp11.REQUIRED_OPTIONS_FOR_BLIK_OPTIONS_LEVEL_0.length) {
                        tmp23 = closure_10.REQUIRED_OPTIONS_FOR_BLIK_OPTIONS_LEVEL_0[num8];
                        level_0 = obj2.level_0;
                        tmp22 = closure_10;
                        tmp24 = num8;
                        while (level_0.hasOwnProperty(tmp23)) {
                          sum1 = num8 + 1;
                          num8 = sum1;
                          flag = false;
                        }
                        str15 = "blikOptions.level_0.";
                        flag = `blikOptions.level_0.${tmp23}`;
                      }
                    } else {
                      str11 = "oneClick";
                      flag = false;
                      if (obj2.hasOwnProperty("oneClick")) {
                        obj3 = obj2.oneClick || {};
                        str12 = "aliasKey";
                        if (obj3.hasOwnProperty("aliasKey")) {
                          num7 = 0;
                          flag = false;
                          if (0 < tmp11.REQUIRED_OPTIONS_FOR_BLIK_OPTIONS_ONE_CLICK_SUBSEQUENT.length) {
                            tmp19 = closure_10.REQUIRED_OPTIONS_FOR_BLIK_OPTIONS_ONE_CLICK_SUBSEQUENT[num7];
                            tmp18 = closure_10;
                            tmp20 = num7;
                            while (obj3.hasOwnProperty(tmp19)) {
                              sum2 = num7 + 1;
                              num7 = sum2;
                              flag = false;
                            }
                            str14 = "blikOptions.oneClick.";
                            flag = `blikOptions.oneClick.${tmp19}`;
                          }
                        } else {
                          num6 = 0;
                          flag = false;
                          if (0 < tmp11.REQUIRED_OPTIONS_FOR_BLIK_OPTIONS_ONE_CLICK_FIRST.length) {
                            tmp15 = closure_10.REQUIRED_OPTIONS_FOR_BLIK_OPTIONS_ONE_CLICK_FIRST[num6];
                            tmp14 = closure_10;
                            tmp16 = num6;
                            while (obj3.hasOwnProperty(tmp15)) {
                              sum3 = num6 + 1;
                              num6 = sum3;
                              flag = false;
                            }
                            str13 = "blikOptions.oneClick.";
                            flag = `blikOptions.oneClick.${tmp15}`;
                          }
                        }
                      }
                    }
                  } else {
                    tmp12 = closure_10;
                    tmp13 = num5;
                    while (global.hasOwnProperty(flag)) {
                      num5 = num5 + 1;
                      tmp11 = tmp12;
                      break;
                    }
                  }
                  str = flag;
                }
              }
            } else {
              if (!global.redirectUrl) {
                tmp3 = closure_10;
                prop1 = closure_10.REQUIRED_OPTIONS_FOR_START_PAYMENT;
                str6 = "onPaymentStart";
                arr6 = prop1.push("onPaymentStart");
              }
              tmp5 = closure_10;
              num = 0;
              num2 = 1;
              if (0 >= closure_10.REQUIRED_OPTIONS_FOR_START_PAYMENT.length) {
                str = "fallback.url";
                if (global.fallback.url) {
                  str = "fallback.buttonText";
                  if (global.fallback.buttonText) {
                    str = false;
                    if (true === global.recurrent) {
                      str = false;
                      if (!global.customerId) {
                        str = "customerId";
                      }
                    }
                  }
                }
              } else {
                tmp7 = closure_10.REQUIRED_OPTIONS_FOR_START_PAYMENT[num];
                tmp6 = closure_10;
                tmp8 = num;
                str = tmp7;
                while (global.hasOwnProperty(tmp7)) {
                  num = num + 1;
                  break;
                }
              }
            }
          }
          if (str) {
            tmp67 = closure_1;
            tmp68 = closure_11;
            self6 = this;
            self7 = this;
            tmp69 = new closure_1(closure_11.LOCAL_PAYMENT_START_PAYMENT_MISSING_REQUIRED_OPTION);
            tmp70 = tmp69;
            if (typeof str === "string") {
              str29 = "Missing required '";
              str30 = "' option.";
              tmp69.details = `Missing required '${str}' option.`;
            }
            tmp71 = globalThis;
            _Promise2 = Promise;
            rejectResult = Promise.reject(tmp69);
          } else {
            size = global.windowOptions || {};
            tmp41 = global.address || {};
            tmp42 = global.fallback || {};
            tmp43 = global.billingAddress || {};
            obj1 = {
              amount: null,
              billingAddress: null,
              birthDate: null,
              blikOptions: null,
              city: null,
              correlationId: null,
              countryCode: null,
              currencyIsoCode: null,
              discountAmount: null,
              experienceProfile: null,
              firstName: null,
              fundingSource: null,
              intent: "sale",
              lastName: null,
              line1: null,
              line2: null,
              lineItems: null,
              merchantAccountId: null,
              merchantOrPartnerCustomerId: null,
              payerEmail: null,
              paymentTypeCountryCode: null,
              phone: null,
              phoneCountryCode: null,
              postalCode: null,
              recurrent: null,
              shippingAmount: null,
              state: null,
            };
            obj1.amount = global.amount;
            obj16 = { line1: null, line2: null, city: null, state: null, postalCode: null, countryCode: null };
            ({
              streetAddress: obj7.line1,
              extendedAddress: obj7.line2,
              locality: obj7.city,
              region: obj7.state,
              postalCode: obj7.postalCode,
              countryCode: obj7.countryCode,
            } = tmp43);
            obj1.billingAddress = obj16;
            ({ birthDate: obj6.birthDate, blikOptions: obj6.blikOptions } = global);
            obj1.city = tmp41.locality;
            obj1.correlationId = global.correlationId;
            obj1.countryCode = tmp41.countryCode;
            ({ currencyCode: obj6.currencyIsoCode, discountAmount: obj6.discountAmount } = global);
            obj17 = { brandName: null, customerServiceInstructions: null, locale: null, noShipping: null };
            ({
              displayName: obj8.brandName,
              customerServiceInstructions: obj8.customerServiceInstructions,
              locale: obj8.locale,
            } = global);
            obj17.noShipping = !global.shippingAddressRequired;
            obj1.experienceProfile = obj17;
            ({ givenName: obj6.firstName, paymentType: obj6.fundingSource, surname: obj6.lastName } = global);
            ({ streetAddress: obj6.line1, extendedAddress: obj6.line2 } = tmp41);
            obj1.lineItems = global.lineItems;
            obj1.merchantAccountId = self._merchantAccountId;
            ({
              customerId: obj6.merchantOrPartnerCustomerId,
              email: obj6.payerEmail,
              paymentTypeCountryCode: obj6.paymentTypeCountryCode,
              phone: obj6.phone,
              phoneCountryCode: obj6.phoneCountryCode,
            } = global);
            obj1.postalCode = tmp41.postalCode;
            ({ recurrent: obj6.recurrent, shippingAmount: obj6.shippingAmount } = global);
            obj1.state = tmp41.region;
            obj9 = closure_9;
            queryify = closure_9.queryify;
            if (self._isRedirectFlow) {
              queryifyResult = queryify(self._redirectUrl, { wasCanceled: true });
              _redirectUrl = self._redirectUrl;
            } else {
              str21 = "/html/local-payment-redirect-frame";
              text = `${self._assetsUrl}/html/local-payment-redirect-frame`;
              tmp45 = closure_2;
              obj18 = { channel: null, r: null, t: null, c: 1 };
              obj18.channel = _serviceId;
              url = tmp42.cancelUrl;
              text1 = `${self._assetsUrl}/html/local-payment-redirect-frame${closure_2(self._isDebug)}`;
              if (!url) {
                url = tmp42.url;
              }
              obj18.r = url;
              tmp47 = tmp42.cancelButtonText || tmp42.buttonText;
              str22 = ".html";
              obj18.t = tmp47;
              queryifyResult1 = queryify(`${tmp46}.html`, obj18);
              text2 = `${self._assetsUrl}/html/local-payment-redirect-frame`;
              obj19 = { channel: null, r: null, t: null };
              obj19.channel = _serviceId;
              ({ url: obj11.r, buttonText: obj11.t } = tmp42);
              _redirectUrl = obj9.queryify(
                `${`${self._assetsUrl}/html/local-payment-redirect-frame`}${tmp45(self._isDebug)}.html`,
                obj19,
              );
              queryifyResult = queryifyResult1;
            }
            tmp51 = assign;
            obj20 = { cancelUrl: null, returnUrl: null };
            obj20.cancelUrl = queryifyResult;
            obj20.returnUrl = _redirectUrl;
            tmp52 = assign(obj1, obj20);
            str23 = global.paymentType;
            self._paymentType = str23.toLowerCase();
            if (self._authorizationInProgress) {
              if (!self._isRedirectFlow) {
                tmp53 = closure_4;
                str24 = ".local-payment.start-payment.error.already-opened";
                sendEventResult = closure_4.sendEvent(
                  self._client,
                  `${self._paymentType}.local-payment.start-payment.error.already-opened`,
                );
                tmp55 = globalThis;
                _Promise = Promise;
                tmp56 = closure_1;
                tmp57 = closure_11;
                self2 = this;
                self3 = this;
                reject = Promise.reject;
                tmp58 = new closure_1(closure_11.LOCAL_PAYMENT_ALREADY_IN_PROGRESS);
                tmp59 = tmp58;
                rejectResult = reject(tmp58);
              }
            }
            self._authorizationInProgress = true;
            tmp61 = closure_8;
            self4 = this;
            self5 = this;
            tmp62 = new closure_8();
            tmp63 = tmp62;
            closure_1 = tmp62;
            obj13 = global.blikOptions || {};
            if (typeof global.paymentType === "string") {
              str25 = global.paymentType;
              paymentType2 = str25.toLowerCase();
            } else {
              paymentType2 = global.paymentType;
            }
            str26 = "blik";
            if ("blik" === paymentType2) {
              str27 = "level_0";
              hasOwnPropertyResult1 = obj13.hasOwnProperty("level_0");
              if (!hasOwnPropertyResult1) {
                str28 = "oneClick";
                hasOwnPropertyResult1 = obj13.hasOwnProperty("oneClick");
              }
              _isRedirectFlow = hasOwnPropertyResult1;
            } else {
              items1 = ["pay_upon_invoice", "mbway", "bancomatpay"];
              _isRedirectFlow = items1.includes(paymentType2);
            }
            if (!_isRedirectFlow) {
              _isRedirectFlow = self._isRedirectFlow;
            }
            if (!_isRedirectFlow) {
              self._startPaymentCallback = self._createStartPaymentCallback(
                () => {
                  /* body not rendered: F150515 */
                },
                () => {
                  /* body not rendered: F150516 */
                },
              );
              _frameService = self._frameService;
              num15 = size.width;
              open = _frameService.open;
              if (!num15) {
                num15 = 1282;
              }
              size1 = { width: null, height: null };
              size1.width = num15;
              size1.height = size.height || 720;
              openResult = open(size1, self._startPaymentCallback);
            }
            _client = self._client;
            obj21 = { method: "post", endpoint: "local_payments/create", data: null };
            obj21.data = obj1;
            requestResult = _client.request(obj21);
            nextPromise = requestResult.then(() => {
              /* body not rendered: F150517 */
            });
            catchPromise = nextPromise.catch(() => {
              /* body not rendered: F150518 */
            });
            rejectResult = tmp62;
          }
          return rejectResult;
        }
        tokenize(arg0) {
          self = this;
          parsed = global;
          self = this;
          _client = this._client;
          if (!global) {
            tmp2 = closure_9;
            parsed = closure_9.parse();
          }
          queryItems = parsed;
          if (parsed.queryItems) {
            queryItems = parsed.queryItems;
          }
          if (!queryItems.c) {
            if (!queryItems.wasCanceled) {
              if (queryItems.errorcode) {
                tmp4 = globalThis;
                _Promise = Promise;
                tmp5 = _client;
                obj1 = { type: null, code: null, message: null, details: null };
                tmp6 = closure_11;
                obj1.type = closure_11.LOCAL_PAYMENT_START_PAYMENT_FAILED.type;
                obj1.code = closure_11.LOCAL_PAYMENT_START_PAYMENT_FAILED.code;
                obj1.message = closure_11.LOCAL_PAYMENT_START_PAYMENT_FAILED.message;
                obj7 = { originalError: null };
                obj8 = { errorcode: null, token: null };
                ({ errorcode: obj4.errorcode, btLpToken: obj4.token } = queryItems);
                obj7.originalError = obj8;
                obj1.details = obj7;
                self2 = this;
                self3 = this;
                tmp7 = obj1;
                reject = Promise.reject;
                tmp8 = new _client(obj1);
                tmp9 = tmp8;
                rejectResult = reject(tmp8);
              } else {
                obj = { endpoint: "payment_methods/paypal_accounts", method: "post", data: null };
                request = _client.request;
                obj.data = self._formatTokenizeData(queryItems);
                requestResult = request(obj);
                nextPromise = requestResult.then(() => {
                  /* body not rendered: F150519 */
                });
                rejectResult = nextPromise.catch(() => {
                  /* body not rendered: F150520 */
                });
              }
            }
            return rejectResult;
          }
          obj9 = {
            type: closure_11.LOCAL_PAYMENT_CANCELED.type,
            code: closure_11.LOCAL_PAYMENT_CANCELED.code,
            message: closure_11.LOCAL_PAYMENT_CANCELED.message,
            details: null,
          };
          obj10 = { originalError: { errorcode: queryItems.errorcode, token: queryItems.btLpToken } };
          obj9.details = obj10;
          reject2 = Promise.reject;
          tmp10 = new _client(obj9);
          rejectResult = reject2(tmp10);
          return;
        }
        closeWindow() {
          self = this;
          if (this._authoriztionInProgress) {
            tmp = closure_4;
            str = ".local-payment.start-payment.closed.by-merchant";
            sendEventResult = closure_4.sendEvent(
              self._client,
              `${self._paymentType}.local-payment.start-payment.closed.by-merchant`,
            );
          }
          _frameService = self._frameService;
          closeResult = _frameService.close();
          return;
        }
        focusWindow() {
          _frameService = this._frameService;
          focusResult = _frameService.focus();
          return;
        }
        _createStartPaymentCallback(arg0, arg1) {
          closure_0 = global;
          closure_1 = module;
          self = this;
          _client = this._client;
          return () => {
            /* body not rendered: F150521 */
          };
        }
        _formatTokenizePayload(arg0) {
          first = {};
          if (global.paypalAccounts) {
            first = global.paypalAccounts[0];
          }
          obj1 = { nonce: first.nonce, details: {}, type: first.type };
          if (first.details) {
            if (first.details.payerInfo) {
              obj1.details = first.details.payerInfo;
            }
            if (first.details.correlationId) {
              obj1.correlationId = first.details.correlationId;
            }
          }
          return obj1;
        }
        hasTokenizationParams() {
          parsed = closure_9.parse();
          _BooleanResult = parsed.errorcode;
          if (!_BooleanResult) {
            tmp3 = globalThis;
            btLpPayerId = parsed.btLpToken;
            _Boolean = Boolean;
            if (btLpPayerId) {
              btLpPayerId = parsed.btLpPaymentId;
            }
            if (btLpPayerId) {
              btLpPayerId = parsed.btLpPayerId;
            }
            _BooleanResult = _Boolean(btLpPayerId);
          }
          return _BooleanResult;
        }
        _formatTokenizeData(arg0) {
          _client = this._client;
          obj = { merchantAccountId: this._merchantAccountId, paypalAccount: null };
          token = global.btLpToken;
          gatewayConfiguration = _client.getConfiguration().gatewayConfiguration;
          if (!token) {
            token = global.token;
          }
          obj1 = {
            correlationId: token,
            paymentToken: global.btLpPaymentId || global.paymentId,
            payerId: global.btLpPayerId || global.PayerID,
            unilateral: gatewayConfiguration.paypal.unvettedMerchant,
            intent: "sale",
          };
          obj.paypalAccount = obj1;
          return obj;
        }
        teardown() {
          self = this;
          if (!this._isRedirectFlow) {
            _frameService = self._frameService;
            teardownResult = _frameService.teardown();
          }
          tmp2 = closure_6(self, closure_5(LocalPayment.prototype));
          sendEventResult = closure_4.sendEvent(self._client, "local-payment.teardown-completed");
          return Promise.resolve();
        }
      }
      let closure_0 = global("../../lib/frame-service/external");
      let closure_1 = global("../../lib/braintree-error");
      let closure_2 = global("../../lib/use-min");
      const INTEGRATION_TIMEOUT_MS = global("../../lib/constants").INTEGRATION_TIMEOUT_MS;
      let closure_4 = global("../../lib/analytics");
      let closure_5 = global("../../lib/methods");
      let closure_6 = global("../../lib/convert-methods-to-error");
      let closure_7 = global("../../lib/convert-to-braintree-error");
      const globalResult = global("@braintree/extended-promise");
      let closure_8 = globalResult;
      let closure_9 = global("../../lib/querystring");
      const globalResult1 = global("@braintree/wrap-promise");
      let closure_10 = global("./constants");
      constants = global("../shared/errors");
      const assign = global("../../lib/assign").assign;
      globalResult.suppressUnhandledPromiseMessage = true;
      module.exports = globalResult1.wrapPrototype(LocalPayment);
    },
    {
      "../../lib/analytics": 138,
      "../../lib/assign": 140,
      "../../lib/braintree-error": 143,
      "../../lib/constants": 145,
      "../../lib/convert-methods-to-error": 146,
      "../../lib/convert-to-braintree-error": 147,
      "../../lib/frame-service/external": 158,
      "../../lib/methods": 175,
      "../../lib/querystring": 177,
      "../../lib/use-min": 181,
      "../shared/errors": 186,
      "./constants": 183,
      "@braintree/extended-promise": 31,
      "@braintree/wrap-promise": 40,
    },
  ];
  obj[184] = items183;
  const items184 = [
    (arg0, arg1, arg2) => {
      let closure_0 = global("../lib/analytics");
      let closure_1 = global("../lib/basic-component-verification");
      let closure_2 = global("../lib/create-deferred-client");
      let closure_3 = global("../lib/create-assets-url");
      let closure_4 = global("./external/local-payment");
      const globalResult = global("@braintree/wrap-promise");
      let closure_5 = global("../lib/braintree-error");
      let closure_6 = global("./shared/errors");
      const parse = global("../lib/querystring").parse;
      let obj = {
        create: globalResult(function create(client) {
          let obj = { name: "Local Payment", client: client.client, authorization: client.authorization };
          const verifyResult = closure_1.verify(obj);
          let nextPromise = verifyResult.then(() => {
            const obj = {
              authorization: client.authorization,
              client: client.client,
              debug: client.debug,
              assetsUrl: closure_3.create(client.authorization),
              name: "Local Payment",
            };
            return closure_2.create(obj);
          });
          return nextPromise.then(function (client) {
            let rejectResult;
            client.client = client;
            if (true !== client.getConfiguration().gatewayConfiguration.paypalEnabled) {
              const self = this;
              const self2 = this;
              const tmp10 = new closure_5(constants.LOCAL_PAYMENT_NOT_ENABLED);
              rejectResult = reject(tmp10);
            } else {
              client.sendEvent(client, "local-payment.initialized");
              const self3 = this;
              const self4 = this;
              const tokenizer = new closure_4(client);
              if (client.redirectUrl) {
                let catchPromise;
                const _window = window;
                const tmp5 = parse(window.location.href);
                if (tmp5.token) {
                  const tokenizeResult = tokenizer.tokenize(tmp5);
                  const nextPromise = tokenizeResult.then((tokenizePayload) => {
                    tokenizer.tokenizePayload = tokenizePayload;
                    return tokenizer;
                  });
                  catchPromise = nextPromise.catch((error) => {
                    console.log("Error while tokenizing: ", error);
                    return tokenizer;
                  });
                } else {
                  catchPromise = tokenizer;
                }
                rejectResult = catchPromise;
              } else {
                rejectResult = tokenizer._initialize();
              }
            }
            return rejectResult;
          });
        }),
        VERSION: "3.112.1",
      };
      module.exports = obj;
    },
    {
      "../lib/analytics": 138,
      "../lib/basic-component-verification": 141,
      "../lib/braintree-error": 143,
      "../lib/create-assets-url": 148,
      "../lib/create-deferred-client": 150,
      "../lib/querystring": 177,
      "./external/local-payment": 184,
      "./shared/errors": 186,
      "@braintree/wrap-promise": 40,
    },
  ];
  obj[185] = items184;
  const items185 = [
    (arg0, arg1, arg2) => {
      const globalResult = global("../../lib/braintree-error");
      const obj = {
        LOCAL_PAYMENT_NOT_ENABLED: {
          type: globalResult.types.MERCHANT,
          code: "LOCAL_PAYMENT_NOT_ENABLED",
          message: "LocalPayment is not enabled for this merchant.",
        },
        LOCAL_PAYMENT_ALREADY_IN_PROGRESS: {
          type: globalResult.types.MERCHANT,
          code: "LOCAL_PAYMENT_ALREADY_IN_PROGRESS",
          message: "LocalPayment payment is already in progress.",
        },
        LOCAL_PAYMENT_CANCELED: {
          type: globalResult.types.CUSTOMER,
          code: "LOCAL_PAYMENT_CANCELED",
          message: "Customer canceled the LocalPayment before authorizing.",
        },
        LOCAL_PAYMENT_WINDOW_CLOSED: {
          type: globalResult.types.CUSTOMER,
          code: "LOCAL_PAYMENT_WINDOW_CLOSED",
          message: "Customer closed LocalPayment window before authorizing.",
        },
        LOCAL_PAYMENT_WINDOW_OPEN_FAILED: {
          type: globalResult.types.MERCHANT,
          code: "LOCAL_PAYMENT_WINDOW_OPEN_FAILED",
          message:
            "LocalPayment window failed to open; make sure startPayment was called in response to a user action.",
        },
        LOCAL_PAYMENT_START_PAYMENT_FAILED: {
          type: globalResult.types.NETWORK,
          code: "LOCAL_PAYMENT_START_PAYMENT_FAILED",
          message: "LocalPayment startPayment failed.",
        },
        LOCAL_PAYMENT_START_PAYMENT_MISSING_REQUIRED_OPTION: {
          type: globalResult.types.MERCHANT,
          code: "LOCAL_PAYMENT_START_PAYMENT_MISSING_REQUIRED_OPTION",
          message: "Missing required option for startPayment.",
        },
        LOCAL_PAYMENT_START_PAYMENT_DEFERRED_PAYMENT_FAILED: {
          type: globalResult.types.UNKNOWN,
          code: "LOCAL_PAYMENT_START_PAYMENT_DEFERRED_PAYMENT_FAILED",
          message: "LocalPayment startPayment deferred payment failed.",
        },
        LOCAL_PAYMENT_TOKENIZATION_FAILED: {
          type: globalResult.types.NETWORK,
          code: "LOCAL_PAYMENT_TOKENIZATION_FAILED",
          message: "Could not tokenize user's local payment method.",
        },
        LOCAL_PAYMENT_INVALID_PAYMENT_OPTION: {
          type: globalResult.types.MERCHANT,
          code: "LOCAL_PAYMENT_INVALID_PAYMENT_OPTION",
          message: "Local payment options are invalid.",
        },
      };
      module.exports = obj;
    },
    { "../../lib/braintree-error": 143 },
  ];
  obj[186] = items185;
  const items186 = [
    (arg0, arg1, arg2) => {
      class Masterpass {
        constructor(arg0) {
          obj = {};
          client = global.client;
          configuration = client.getConfiguration();
          obj._client = global.client;
          obj._assetsUrl = `${tmp.gatewayConfiguration.assetsUrl}/web/3.112.1`;
          obj._isDebug = configuration.isDebug;
          obj._authInProgress = false;
          if (window.popupBridge) {
            _window = window;
            if (typeof window.popupBridge.getReturnUrlPrefix === "function") {
              _window2 = window;
              popupBridge = window.popupBridge;
              str2 = "return";
              obj._callbackUrl = `${popupBridge.getReturnUrlPrefix()}return`;
            }
            return;
          }
          str = ".min";
          text = `${obj._assetsUrl}/html/redirect-frame`;
          if (obj._isDebug) {
            str = "";
          }
          obj._callbackUrl = text + str + ".html";
          return;
        }
        _initialize() {
          self = this;
          promise = new Promise(() => {
            /* body not rendered: F150524 */
          });
          return promise;
        }
        tokenize(arg0) {
          closure_0 = global;
          self = this;
          if (global) {
            tmp2 = closure_7;
            num = 0;
            num2 = 1;
            flag = false;
            if (0 < closure_7.REQUIRED_OPTIONS_FOR_TOKENIZE.length) {
              tmp3 = closure_7;
              tmp4 = num;
              flag = true;
              while (global.hasOwnProperty(closure_7.REQUIRED_OPTIONS_FOR_TOKENIZE[num])) {
                sum = num + 1;
                num = sum;
                flag = false;
                if (sum >= tmp3.REQUIRED_OPTIONS_FOR_TOKENIZE.length) {
                  break;
                }
              }
            }
            if (!flag) {
              tmp6 = globalThis;
              _Promise = Promise;
              if (tmp._authInProgress) {
                tmp8 = closure_1;
                tmp9 = closure_2;
                self3 = this;
                self4 = this;
                reject = _Promise.reject;
                tmp10 = new closure_1(closure_2.MASTERPASS_TOKENIZATION_ALREADY_IN_PROGRESS);
                tmp11 = tmp10;
                rejectResult = reject(tmp10);
              } else {
                self = this;
                self2 = this;
                rejectResult = new _Promise(() => {
                  /* body not rendered: F150525 */
                });
              }
            }
            return rejectResult;
          }
          reject2 = Promise.reject;
          tmp12 = new closure_1(closure_2.MASTERPASS_TOKENIZE_MISSING_REQUIRED_OPTION);
          rejectResult = reject2(tmp12);
          return;
        }
        _navigateFrameToLoadingPage(arg0) {
          closure_0 = global;
          self = this;
          this._authInProgress = true;
          _client = this._client;
          obj = { method: "post", endpoint: "masterpass/request_token", data: null };
          obj1 = { requestToken: null };
          obj4 = {
            originUrl: `${window.location.protocol}//${window.location.hostname}`,
            subtotal: global.subtotal,
            currencyCode: global.currencyCode,
            callbackUrl: this._callbackUrl,
          };
          obj1.requestToken = obj4;
          obj.data = obj1;
          requestResult = _client.request(obj);
          nextPromise = requestResult.then(() => {
            /* body not rendered: F150526 */
          });
          return nextPromise.catch(() => {
            /* body not rendered: F150527 */
          });
        }
        _createFrameOpenHandler(arg0, arg1) {
          closure_0 = global;
          closure_1 = module;
          self = this;
          return window.popupBridge
            ? () => {
                /* body not rendered: F150528 */
              }
            : () => {
                /* body not rendered: F150529 */
              };
        }
        _tokenizeMasterpass(arg0) {
          self = this;
          self = this;
          if ("success" !== global.mpstatus) {
            tmp10 = closure_4;
            str2 = "masterpass.tokenization.closed.by-user";
            sendEventResult = closure_4.sendEvent(self._client, "masterpass.tokenization.closed.by-user");
            _closeWindowResult = self._closeWindow();
            tmp13 = globalThis;
            _Promise2 = Promise;
            tmp14 = closure_1;
            tmp15 = closure_2;
            self4 = this;
            self5 = this;
            reject2 = Promise.reject;
            tmp16 = new closure_1(closure_2.MASTERPASS_POPUP_CLOSED);
            tmp17 = tmp16;
            reject2Result = reject2(tmp16);
          } else {
            items = [, ,];
            ({ oauth_verifier: arr[0], oauth_token: arr[1], checkout_resource_url: arr[2] } = global);
            if (
              items.some(() => {
                /* body not rendered: F154288 */
              })
            ) {
              tmp2 = closure_4;
              str = "masterpass.tokenization.closed.missing-payload";
              sendEventResult1 = closure_4.sendEvent(self._client, "masterpass.tokenization.closed.missing-payload");
              _closeWindowResult1 = self._closeWindow();
              tmp5 = globalThis;
              _Promise = Promise;
              tmp6 = closure_1;
              tmp7 = closure_2;
              self2 = this;
              self3 = this;
              reject = Promise.reject;
              tmp8 = new closure_1(closure_2.MASTERPASS_POPUP_MISSING_REQUIRED_PARAMETERS);
              tmp9 = tmp8;
              reject2Result = reject(tmp8);
            } else {
              _client = self._client;
              obj = { endpoint: "payment_methods/masterpass_cards", method: "post", data: null };
              obj1 = { masterpassCard: null };
              obj4 = { checkoutResourceUrl: null, requestToken: null, verifierToken: null };
              ({
                checkout_resource_url: obj3.checkoutResourceUrl,
                oauth_token: obj3.requestToken,
                oauth_verifier: obj3.verifierToken,
              } = global);
              obj1.masterpassCard = obj4;
              obj.data = obj1;
              requestResult = _client.request(obj);
              nextPromise = requestResult.then(() => {
                /* body not rendered: F150530 */
              });
              reject2Result = nextPromise.catch(() => {
                /* body not rendered: F150531 */
              });
            }
          }
          return reject2Result;
        }
        _closeWindow() {
          this._authInProgress = false;
          _frameService = this._frameService;
          closeResult = _frameService.close();
          return;
        }
        teardown() {
          self = this;
          promise = new Promise(() => {
            /* body not rendered: F150532 */
          });
          return promise;
        }
      }
      let closure_0 = global("../../lib/frame-service/external");
      let closure_1 = global("../../lib/braintree-error");
      constants = global("../shared/errors");
      let closure_3 = global("../../lib/methods");
      const globalResult = global("@braintree/wrap-promise");
      let closure_4 = global("../../lib/analytics");
      let closure_5 = global("../../lib/convert-methods-to-error");
      let closure_6 = global("../../lib/convert-to-braintree-error");
      const constants2 = global("../shared/constants");
      const INTEGRATION_TIMEOUT_MS = global("../../lib/constants").INTEGRATION_TIMEOUT_MS;
      module.exports = globalResult.wrapPrototype(Masterpass);
    },
    {
      "../../lib/analytics": 138,
      "../../lib/braintree-error": 143,
      "../../lib/constants": 145,
      "../../lib/convert-methods-to-error": 146,
      "../../lib/convert-to-braintree-error": 147,
      "../../lib/frame-service/external": 158,
      "../../lib/methods": 175,
      "../shared/constants": 190,
      "../shared/errors": 191,
      "@braintree/wrap-promise": 40,
    },
  ];
  obj[187] = items186;
  const items187 = [
    (arg0, arg1, arg2) => {
      let closure_0 = global("../lib/braintree-error");
      let closure_1 = global("../lib/basic-component-verification");
      let closure_2 = global("./shared/browser-detection");
      let closure_3 = global("./external/masterpass");
      let closure_4 = global("../lib/create-deferred-client");
      let closure_5 = global("../lib/create-assets-url");
      let closure_6 = global("./shared/errors");
      let obj = {
        create: global("@braintree/wrap-promise")(function create(client) {
          let obj = { name: "Masterpass", client: client.client, authorization: client.authorization };
          const verifyResult = closure_1.verify(obj);
          const nextPromise = verifyResult.then(function () {
            let resolveResult;
            const _Boolean = Boolean;
            if (!popupBridge) {
              popupBridge = closure_1_2.supportsPopups();
            }
            if (_Boolean(popupBridge)) {
              resolveResult = _Promise.resolve();
            } else {
              const self = this;
              const self2 = this;
              const reject = _Promise.reject;
              const tmp4 = new client(constants.MASTERPASS_BROWSER_NOT_SUPPORTED);
              resolveResult = reject(tmp4);
            }
            return resolveResult;
          });
          const nextPromise1 = nextPromise.then(() => {
            const obj = {
              authorization: client.authorization,
              client: client.client,
              debug: client.debug,
              assetsUrl: closure_5.create(client.authorization),
              name: "Masterpass",
            };
            return closure_4.create(obj);
          });
          return nextPromise1.then(function (client) {
            let _initializeResult;
            client.client = client;
            client = client.client;
            if (client.getConfiguration().gatewayConfiguration.masterpass) {
              const self3 = this;
              const self4 = this;
              const obj = new closure_3(client);
              _initializeResult = obj._initialize();
            } else {
              const self = this;
              const self2 = this;
              const tmp5 = new client(constants.MASTERPASS_NOT_ENABLED);
              _initializeResult = reject(tmp5);
            }
            return _initializeResult;
          });
        }),
        isSupported() {
          const _Boolean = Boolean;
          if (!popupBridge) {
            popupBridge = closure_2.supportsPopups();
          }
          return _Boolean(popupBridge);
        },
        VERSION: "3.112.1",
      };
      module.exports = obj;
    },
    {
      "../lib/basic-component-verification": 141,
      "../lib/braintree-error": 143,
      "../lib/create-assets-url": 148,
      "../lib/create-deferred-client": 150,
      "./external/masterpass": 187,
      "./shared/browser-detection": 189,
      "./shared/errors": 191,
      "@braintree/wrap-promise": 40,
    },
  ];
  obj[188] = items187;
  const items188 = [
    (arg0, arg1, arg2) => {
      module.exports = { supportsPopups: global("@braintree/browser-detection/supports-popups") };
      ({ supportsPopups: global("@braintree/browser-detection/supports-popups") });
    },
    { "@braintree/browser-detection/supports-popups": 29 },
  ];
  obj[189] = items188;
  const items189 = [
    (arg0, arg1, arg2) => {
      module.exports = {
        LANDING_FRAME_NAME: "braintreemasterpasslanding",
        POPUP_WIDTH: 450,
        POPUP_HEIGHT: 660,
        MASTERPASS_VERSION: "v6",
        REQUIRED_OPTIONS_FOR_TOKENIZE: ["subtotal", "currencyCode"],
      };
    },
    {},
  ];
  obj[190] = items189;
  const items190 = [
    (arg0, arg1, arg2) => {
      const globalResult = global("../../lib/braintree-error");
      const obj = {
        MASTERPASS_BROWSER_NOT_SUPPORTED: {
          type: globalResult.types.CUSTOMER,
          code: "MASTERPASS_BROWSER_NOT_SUPPORTED",
          message: "Browser is not supported.",
        },
        MASTERPASS_NOT_ENABLED: {
          type: globalResult.types.MERCHANT,
          code: "MASTERPASS_NOT_ENABLED",
          message: "Masterpass is not enabled for this merchant.",
        },
        MASTERPASS_TOKENIZE_MISSING_REQUIRED_OPTION: {
          type: globalResult.types.MERCHANT,
          code: "MASTERPASS_TOKENIZE_MISSING_REQUIRED_OPTION",
          message: "Missing required option for tokenize.",
        },
        MASTERPASS_TOKENIZATION_ALREADY_IN_PROGRESS: {
          type: globalResult.types.MERCHANT,
          code: "MASTERPASS_TOKENIZATION_ALREADY_IN_PROGRESS",
          message: "Masterpass tokenization is already in progress.",
        },
        MASTERPASS_ACCOUNT_TOKENIZATION_FAILED: {
          type: globalResult.types.NETWORK,
          code: "MASTERPASS_ACCOUNT_TOKENIZATION_FAILED",
          message: "Could not tokenize user's Masterpass account.",
        },
        MASTERPASS_POPUP_OPEN_FAILED: {
          type: globalResult.types.MERCHANT,
          code: "MASTERPASS_POPUP_OPEN_FAILED",
          message:
            "Masterpass popup failed to open. Make sure to tokenize in response to a user action, such as a click.",
        },
        MASTERPASS_POPUP_MISSING_REQUIRED_PARAMETERS: {
          type: globalResult.types.MERCHANT,
          code: "MASTERPASS_POPUP_MISSING_REQUIRED_PARAMETERS",
          message: "Masterpass popup failed to return all required parameters needed to continue tokenization.",
        },
        MASTERPASS_POPUP_CLOSED: {
          type: globalResult.types.CUSTOMER,
          code: "MASTERPASS_POPUP_CLOSED",
          message: "Customer closed Masterpass popup before authorizing.",
        },
        MASTERPASS_INVALID_PAYMENT_OPTION: {
          type: globalResult.types.MERCHANT,
          code: "MASTERPASS_INVALID_PAYMENT_OPTION",
          message: "Masterpass payment options are invalid.",
        },
        MASTERPASS_FLOW_FAILED: {
          type: globalResult.types.NETWORK,
          code: "MASTERPASS_FLOW_FAILED",
          message: "Could not initialize Masterpass flow.",
        },
      };
      module.exports = obj;
    },
    { "../../lib/braintree-error": 143 },
  ];
  obj[191] = items190;
  const items191 = [
    (arg0, arg1, arg2) => {
      let closure_13;
      let closure_8;
      let constants2;
      class PaymentRequestComponent {
        constructor(arg0) {
          tmp = global.enabledPaymentMethods || {};
          self = this;
          callResult = closure_9.call(self);
          self._componentId = closure_6();
          self._client = global.client;
          obj = { basicCard: false !== tmp.basicCard, googlePay: false !== tmp.googlePay };
          self._enabledPaymentMethods = obj;
          num = 1;
          if (2 === global.googlePayVersion) {
            num = 2;
          }
          self._googlePayVersion = num;
          self._googleMerchantId = "18278000977346790994";
          self._supportedPaymentMethods = self._constructDefaultSupportedPaymentMethods();
          keys = Object.keys(self._supportedPaymentMethods);
          fn = () => {
            /* body not rendered: F150536 */
          };
          self._defaultSupportedPaymentMethods = keys.map(fn.bind(self));
          obj1 = { channel: self._componentId };
          tmp2 = new closure_2(obj1);
          self._bus = tmp2;
          return;
        }
        _constructDefaultSupportedPaymentMethods() {
          self = this;
          _client = this._client;
          configuration = _client.getConfiguration();
          androidPay = configuration.gatewayConfiguration.androidPay;
          creditCards = configuration.gatewayConfiguration.creditCards;
          tmp2 = this._enabledPaymentMethods.basicCard && creditCards;
          if (tmp2) {
            num = 0;
            tmp2 = creditCards.supportedCardTypes.length > 0;
          }
          obj = {};
          if (tmp2) {
            obj1 = { supportedMethods: "basic-card", data: null };
            obj5 = { supportedNetworks: null };
            supportedCardTypes = creditCards.supportedCardTypes;
            obj5.supportedNetworks = supportedCardTypes.reduce(() => {
              /* body not rendered: F150537 */
            }, []);
            obj1.data = obj5;
            obj.basicCard = obj1;
          }
          tmp3 = self._enabledPaymentMethods.googlePay && androidPay && androidPay.enabled;
          if (tmp3) {
            obj6 = { supportedMethods: "https://google.com/pay", data: null };
            tmp4 = closure_4;
            obj6.data = closure_4(configuration, self._googlePayVersion, self._googleMerchantId);
            obj.googlePay = obj6;
          }
          return obj;
        }
        initialize() {
          _client = this._client;
          closure_0 = _client.getConfiguration();
          self = this;
          this._frame = closure_5({
            allowPaymentRequest: true,
            name: "braintree-payment-request-frame",
            class: "braintree-payment-request-frame",
            height: 0,
            width: 0,
            style: { position: "absolute", left: "-9999px" },
            title: "Secure Payment Frame",
          });
          if (0 === this._defaultSupportedPaymentMethods.length) {
            tmp3 = globalThis;
            _Promise2 = Promise;
            tmp4 = closure_10;
            tmp5 = errors;
            self3 = this;
            self4 = this;
            reject = Promise.reject;
            tmp6 = new closure_10(errors.PAYMENT_REQUEST_NO_VALID_SUPPORTED_PAYMENT_METHODS);
            tmp7 = tmp6;
            rejectResult = reject(tmp6);
          } else {
            tmp = globalThis;
            _Promise = Promise;
            self = this;
            self2 = this;
            rejectResult = new Promise(() => {
              /* body not rendered: F150538 */
            });
          }
          return rejectResult;
        }
        createSupportedPaymentMethodsConfiguration(arg0, arg1) {
          tmp = global;
          if (tmp) {
            if (this._enabledPaymentMethods[global]) {
              tmp11 = module;
              tmp12 = assign;
              tmp13 = assign({}, tmp6._supportedPaymentMethods[global]);
              tmp13.data = assign({}, tmp13.data, module);
              return tmp13;
            } else {
              tmp7 = closure_10;
              tmp8 = errors;
              self3 = this;
              self4 = this;
              tmp9 = new closure_10(
                errors.PAYMENT_REQUEST_CREATE_SUPPORTED_PAYMENT_METHODS_CONFIGURATION_TYPE_NOT_ENABLED,
              );
              tmp10 = tmp9;
              throw tmp9;
            }
          } else {
            tmp2 = closure_10;
            tmp3 = errors;
            self = this;
            self2 = this;
            tmp4 = new closure_10(
              errors.PAYMENT_REQUEST_CREATE_SUPPORTED_PAYMENT_METHODS_CONFIGURATION_MUST_INCLUDE_TYPE,
            );
            tmp5 = tmp4;
            throw tmp4;
          }
        }
        tokenize(arg0) {
          closure_0 = global;
          self = this;
          promise = new Promise(() => {
            /* body not rendered: F150539 */
          });
          return promise;
        }
        canMakePayment(arg0) {
          closure_0 = global;
          self = this;
          if (window.PaymentRequest) {
            if (global.supportedPaymentMethods) {
              prop = global.supportedPaymentMethods;
              item = prop.forEach(() => {
                /* body not rendered: F150540 */
              });
              tmp6 = supportedMethods;
              if (tmp6) {
                _Promise3 = Promise;
                tmp8 = closure_10;
                obj = { type: null, code: null, message: null };
                tmp9 = errors;
                obj.type = errors.PAYMENT_REQUEST_UNSUPPORTED_PAYMENT_METHOD.type;
                obj.code = errors.PAYMENT_REQUEST_UNSUPPORTED_PAYMENT_METHOD.code;
                tmp10 = supportedMethods;
                str2 = " is not a supported payment method.";
                obj.message = `${supportedMethods} is not a supported payment method.`;
                self3 = this;
                self4 = this;
                tmp11 = obj;
                reject = Promise.reject;
                tmp12 = new closure_10(obj);
                tmp13 = tmp12;
                rejectResult = reject(tmp12);
              }
              resolved = rejectResult;
            }
            _Promise2 = Promise;
            self = this;
            self2 = this;
            rejectResult = new Promise(() => {
              /* body not rendered: F150541 */
            });
          } else {
            tmp2 = closure_0;
            str = "payment-request.can-make-payment.not-available";
            sendEventResult = closure_0.sendEvent(tmp._client, "payment-request.can-make-payment.not-available");
            _Promise = Promise;
            flag = false;
            resolved = Promise.resolve(false);
          }
          return resolved;
        }
        teardown() {
          _bus = this._bus;
          teardownResult = _bus.teardown();
          parentNode = this._frame.parentNode;
          removeChildResult = parentNode.removeChild(this._frame);
          tmp3 = closure_3(this, closure_8(PaymentRequestComponent.prototype));
          sendEventResult = closure_0.sendEvent(this._client, "payment-request.teardown-completed");
          return Promise.resolve();
        }
        _formatTokenizationError(arg0) {
          name = global.name;
          self = this;
          if ("AbortError" === name) {
            tmp16 = closure_10;
            obj1 = { type: null, code: null, message: null, details: null };
            tmp17 = errors;
            obj1.type = errors.PAYMENT_REQUEST_CANCELED.type;
            obj1.code = errors.PAYMENT_REQUEST_CANCELED.code;
            obj1.message = errors.PAYMENT_REQUEST_CANCELED.message;
            obj11 = { originalError: null };
            obj11.originalError = global;
            obj1.details = obj11;
            self10 = this;
            self11 = this;
            tmp18 = obj1;
            tmp19 = new closure_10(obj1);
            tmp20 = closure_0;
            str2 = "payment-request.tokenize.canceled";
            sendEventResult = closure_0.sendEvent(self._client, "payment-request.tokenize.canceled");
            tmp22 = tmp19;
            return tmp19;
          } else {
            str3 = "PAYMENT_REQUEST_INITIALIZATION_FAILED";
            if ("PAYMENT_REQUEST_INITIALIZATION_FAILED" === name) {
              tmp11 = closure_10;
              obj12 = { type: null, code: null, message: null, details: null };
              tmp12 = errors;
              obj12.type = errors.PAYMENT_REQUEST_INITIALIZATION_MISCONFIGURED.type;
              obj12.code = errors.PAYMENT_REQUEST_INITIALIZATION_MISCONFIGURED.code;
              obj12.message = errors.PAYMENT_REQUEST_INITIALIZATION_MISCONFIGURED.message;
              obj13 = { originalError: null };
              obj13.originalError = global;
              obj12.details = obj13;
              self8 = this;
              self9 = this;
              tmp13 = obj12;
              tmp1 = new closure_10(obj12);
            } else {
              str4 = "BRAINTREE_GATEWAY_GOOGLE_PAYMENT_TOKENIZATION_ERROR";
              if ("BRAINTREE_GATEWAY_GOOGLE_PAYMENT_TOKENIZATION_ERROR" === name) {
                tmp8 = closure_10;
                obj14 = { type: null, code: null, message: null, details: null };
                tmp9 = errors;
                obj14.type = errors.PAYMENT_REQUEST_GOOGLE_PAYMENT_FAILED_TO_TOKENIZE.type;
                obj14.code = errors.PAYMENT_REQUEST_GOOGLE_PAYMENT_FAILED_TO_TOKENIZE.code;
                obj14.message = errors.PAYMENT_REQUEST_GOOGLE_PAYMENT_FAILED_TO_TOKENIZE.message;
                obj15 = { originalError: null };
                obj15.originalError = global;
                obj14.details = obj15;
                self6 = this;
                self7 = this;
                tmp10 = obj14;
                tmp1 = new closure_10(obj14);
              } else {
                str5 = "BRAINTREE_GATEWAY_GOOGLE_PAYMENT_PARSING_ERROR";
                if ("BRAINTREE_GATEWAY_GOOGLE_PAYMENT_PARSING_ERROR" === name) {
                  tmp5 = closure_10;
                  obj16 = { type: null, code: null, message: null, details: null };
                  tmp6 = errors;
                  obj16.type = errors.PAYMENT_REQUEST_GOOGLE_PAYMENT_PARSING_ERROR.type;
                  obj16.code = errors.PAYMENT_REQUEST_GOOGLE_PAYMENT_PARSING_ERROR.code;
                  obj16.message = errors.PAYMENT_REQUEST_GOOGLE_PAYMENT_PARSING_ERROR.message;
                  obj17 = { originalError: null };
                  obj17.originalError = global;
                  obj16.details = obj17;
                  self4 = this;
                  self5 = this;
                  tmp7 = obj16;
                  tmp1 = new closure_10(obj16);
                } else {
                  tmp = closure_10;
                  obj = { code: null, type: null, message: null, details: null };
                  obj.code = errors.PAYMENT_REQUEST_NOT_COMPLETED.code;
                  CUSTOMER = global.type;
                  tmp2 = errors;
                  if (!CUSTOMER) {
                    CUSTOMER = tmp.types.CUSTOMER;
                  }
                  obj.type = CUSTOMER;
                  obj.message = tmp2.PAYMENT_REQUEST_NOT_COMPLETED.message;
                  obj18 = { originalError: null };
                  obj18.originalError = global;
                  obj.details = obj18;
                  self2 = this;
                  self3 = this;
                  tmp3 = obj;
                  tmp1 = new tmp(obj);
                }
              }
            }
            tmp14 = closure_0;
            str = "payment-request.tokenize.failed";
            sendEventResult1 = closure_0.sendEvent(self._client, "payment-request.tokenize.failed");
            return tmp1;
          }
        }
        _formatCanMakePaymentError(arg0) {
          name = global.name;
          if ("PAYMENT_REQUEST_INITIALIZATION_FAILED" === name) {
            tmp8 = closure_10;
            obj1 = { type: null, code: null, message: null, details: null };
            tmp9 = errors;
            obj1.type = errors.PAYMENT_REQUEST_INITIALIZATION_MISCONFIGURED.type;
            obj1.code = errors.PAYMENT_REQUEST_INITIALIZATION_MISCONFIGURED.code;
            obj1.message = errors.PAYMENT_REQUEST_INITIALIZATION_MISCONFIGURED.message;
            obj7 = { originalError: null };
            obj7.originalError = global;
            obj1.details = obj7;
            self5 = this;
            self6 = this;
            tmp10 = obj1;
            tmp4 = new closure_10(obj1);
          } else {
            str = "NotAllowedError";
            if ("NotAllowedError" === name) {
              tmp5 = closure_10;
              obj8 = { type: null, code: null, message: null, details: null };
              tmp6 = errors;
              obj8.type = errors.PAYMENT_REQUEST_CAN_MAKE_PAYMENT_NOT_ALLOWED.type;
              obj8.code = errors.PAYMENT_REQUEST_CAN_MAKE_PAYMENT_NOT_ALLOWED.code;
              obj8.message = errors.PAYMENT_REQUEST_CAN_MAKE_PAYMENT_NOT_ALLOWED.message;
              obj9 = { originalError: null };
              obj9.originalError = global;
              obj8.details = obj9;
              self3 = this;
              self4 = this;
              tmp7 = obj8;
              tmp4 = new closure_10(obj8);
            } else {
              tmp = closure_10;
              obj = { code: null, type: null, message: null, details: null };
              tmp2 = errors;
              obj.code = errors.PAYMENT_REQUEST_CAN_MAKE_PAYMENT_FAILED.code;
              obj.type = errors.PAYMENT_REQUEST_CAN_MAKE_PAYMENT_FAILED.type;
              obj.message = errors.PAYMENT_REQUEST_CAN_MAKE_PAYMENT_FAILED.message;
              obj10 = { originalError: null };
              obj10.originalError = global;
              obj.details = obj10;
              self = this;
              self2 = this;
              tmp3 = obj;
              tmp4 = new closure_10(obj);
            }
          }
          sendEventResult = closure_0.sendEvent(this._client, "payment-request.can-make-payment.failed");
          return tmp4;
        }
      }
      handler = global("../../lib/analytics");
      const assign = global("../../lib/assign").assign;
      let closure_2 = global("framebus");
      let closure_3 = global("../../lib/convert-methods-to-error");
      let closure_4 = global("../../lib/generate-google-pay-configuration");
      let closure_5 = global("@braintree/iframer");
      let closure_6 = global("@braintree/uuid");
      let closure_7 = global("../../lib/use-min");
      query = global("../../lib/methods");
      const globalResult = global("@braintree/event-emitter");
      const types = global("../../lib/braintree-error");
      const globalResult1 = global("../shared/constants");
      ({ events: closure_12, errors: closure_13 } = globalResult1);
      let closure_14 = {
        Visa: "visa",
        MasterCard: "mastercard",
        "American Express": "amex",
        "Diners Club": "diners",
        Discover: "discover",
        JCB: "jcb",
        UnionPay: "unionpay",
        Maestro: "maestro",
      };
      const globalResult2 = global("@braintree/wrap-promise");
      const child = globalResult.createChild(PaymentRequestComponent);
      module.exports = globalResult2.wrapPrototype(PaymentRequestComponent);
    },
    {
      "../../lib/analytics": 138,
      "../../lib/assign": 140,
      "../../lib/braintree-error": 143,
      "../../lib/convert-methods-to-error": 146,
      "../../lib/generate-google-pay-configuration": 168,
      "../../lib/methods": 175,
      "../../lib/use-min": 181,
      "../shared/constants": 194,
      "@braintree/event-emitter": 30,
      "@braintree/iframer": 32,
      "@braintree/uuid": 36,
      "@braintree/wrap-promise": 40,
      framebus: 50,
    },
  ];
  obj[192] = items191;
  const items192 = [
    (arg0, arg1, arg2) => {
      let closure_0 = global("./external/payment-request");
      let closure_1 = global("../lib/basic-component-verification");
      let closure_2 = global("../lib/create-deferred-client");
      let closure_3 = global("../lib/create-assets-url");
      let obj = {
        create: global("@braintree/wrap-promise")(function create(client) {
          let obj = { name: "Payment Request", client: client.client, authorization: client.authorization };
          const verifyResult = closure_1.verify(obj);
          const nextPromise = verifyResult.then(() => {
            const obj = {
              authorization: client.authorization,
              client: client.client,
              debug: client.debug,
              assetsUrl: closure_3.create(client.authorization),
              name: "Payment Request",
            };
            return closure_2.create(obj);
          });
          return nextPromise.then((client) => {
            client.client = client;
            const obj = new client(client);
            return obj.initialize();
          });
        }),
        VERSION: "3.112.1",
      };
      module.exports = obj;
    },
    {
      "../lib/basic-component-verification": 141,
      "../lib/create-assets-url": 148,
      "../lib/create-deferred-client": 150,
      "./external/payment-request": 192,
      "@braintree/wrap-promise": 40,
    },
  ];
  obj[193] = items192;
  const items193 = [
    (arg0, arg1, arg2) => {
      let globalResult;
      let globalResult1;
      const obj = {
        events: globalResult(
          [
            "CAN_MAKE_PAYMENT",
            "FRAME_READY",
            "FRAME_CAN_MAKE_REQUESTS",
            "PAYMENT_REQUEST_INITIALIZED",
            "SHIPPING_ADDRESS_CHANGE",
            "UPDATE_SHIPPING_ADDRESS",
            "SHIPPING_OPTION_CHANGE",
            "UPDATE_SHIPPING_OPTION",
          ],
          "payment-request:",
        ),
        errors: globalResult1,
        SUPPORTED_METHODS: { "basic-card": true, "https://google.com/pay": true },
      };
      globalResult = global("../../lib/enumerate");
      module.exports = obj;
      globalResult1 = global("./errors");
    },
    { "../../lib/enumerate": 153, "./errors": 195 },
  ];
  obj[194] = items193;
  const items194 = [
    (arg0, arg1, arg2) => {
      const globalResult = global("../../lib/braintree-error");
      const obj = {
        PAYMENT_REQUEST_NO_VALID_SUPPORTED_PAYMENT_METHODS: {
          type: globalResult.types.MERCHANT,
          code: "PAYMENT_REQUEST_NO_VALID_SUPPORTED_PAYMENT_METHODS",
          message: "There are no supported payment methods associated with this account.",
        },
        PAYMENT_REQUEST_CANCELED: {
          type: globalResult.types.CUSTOMER,
          code: "PAYMENT_REQUEST_CANCELED",
          message: "Payment request was canceled.",
        },
        PAYMENT_REQUEST_INITIALIZATION_MISCONFIGURED: {
          type: globalResult.types.MERCHANT,
          code: "PAYMENT_REQUEST_INITIALIZATION_MISCONFIGURED",
          message: "Something went wrong when configuring the payment request.",
        },
        PAYMENT_REQUEST_CAN_MAKE_PAYMENT_FAILED: {
          type: globalResult.types.UNKNOWN,
          code: "PAYMENT_REQUEST_CAN_MAKE_PAYMENT_FAILED",
          message: "Something went wrong when calling `canMakePayment`",
        },
        PAYMENT_REQUEST_CAN_MAKE_PAYMENT_NOT_ALLOWED: {
          type: globalResult.types.MERCHANT,
          code: "PAYMENT_REQUEST_CAN_MAKE_PAYMENT_NOT_ALLOWED",
          message:
            "Something went wrong when calling `canMakePayment`. Most likely, `canMakePayment` was called multiple times with different supportedMethods configurations.",
        },
        PAYMENT_REQUEST_UNSUPPORTED_PAYMENT_METHOD: {
          type: globalResult.types.MERCHANT,
          code: "PAYMENT_REQUEST_UNSUPPORTED_PAYMENT_METHOD",
        },
        PAYMENT_REQUEST_GOOGLE_PAYMENT_FAILED_TO_TOKENIZE: {
          type: globalResult.types.MERCHANT,
          code: "PAYMENT_REQUEST_GOOGLE_PAYMENT_FAILED_TO_TOKENIZE",
          message: "Something went wrong when tokenizing the Google Pay card.",
        },
        PAYMENT_REQUEST_GOOGLE_PAYMENT_PARSING_ERROR: {
          type: globalResult.types.UNKNOWN,
          code: "PAYMENT_REQUEST_GOOGLE_PAYMENT_PARSING_ERROR",
          message: "Something went wrong when tokenizing the Google Pay card.",
        },
        PAYMENT_REQUEST_NOT_COMPLETED: {
          code: "PAYMENT_REQUEST_NOT_COMPLETED",
          message: "Payment request could not be completed.",
        },
        PAYMENT_REQUEST_CREATE_SUPPORTED_PAYMENT_METHODS_CONFIGURATION_MUST_INCLUDE_TYPE: {
          type: globalResult.types.MERCHANT,
          code: "PAYMENT_REQUEST_CREATE_SUPPORTED_PAYMENT_METHODS_CONFIGURATION_MUST_INCLUDE_TYPE",
          message: "createSupportedPaymentMethodsConfiguration must include a type parameter.",
        },
        PAYMENT_REQUEST_CREATE_SUPPORTED_PAYMENT_METHODS_CONFIGURATION_TYPE_NOT_ENABLED: {
          type: globalResult.types.MERCHANT,
          code: "PAYMENT_REQUEST_CREATE_SUPPORTED_PAYMENT_METHODS_CONFIGURATION_TYPE_NOT_ENABLED",
          message: "createSupportedPaymentMethodsConfiguration type parameter must be valid or enabled.",
        },
      };
      module.exports = obj;
    },
    { "../../lib/braintree-error": 143 },
  ];
  obj[195] = items194;
  const items195 = [
    (arg0, arg1, arg2) => {
      const globalResult = global("../lib/braintree-error");
      const obj = {
        PAYPAL_NOT_ENABLED: {
          type: globalResult.types.MERCHANT,
          code: "PAYPAL_NOT_ENABLED",
          message: "PayPal is not enabled for this merchant.",
        },
        PAYPAL_SANDBOX_ACCOUNT_NOT_LINKED: {
          type: globalResult.types.MERCHANT,
          code: "PAYPAL_SANDBOX_ACCOUNT_NOT_LINKED",
          message:
            "A linked PayPal Sandbox account is required to use PayPal Checkout in Sandbox. See https://developer.paypal.com/braintree/docs/guides/paypal/testing-go-live#linked-paypal-testing for details on linking your PayPal sandbox with Braintree.",
        },
        PAYPAL_ACCOUNT_TOKENIZATION_FAILED: {
          type: globalResult.types.NETWORK,
          code: "PAYPAL_ACCOUNT_TOKENIZATION_FAILED",
          message: "Could not tokenize user's PayPal account.",
        },
        PAYPAL_FLOW_FAILED: {
          type: globalResult.types.NETWORK,
          code: "PAYPAL_FLOW_FAILED",
          message: "Could not initialize PayPal flow.",
        },
        PAYPAL_FLOW_OPTION_REQUIRED: {
          type: globalResult.types.MERCHANT,
          code: "PAYPAL_FLOW_OPTION_REQUIRED",
          message: "PayPal flow property is invalid or missing.",
        },
        PAYPAL_START_VAULT_INITIATED_CHECKOUT_PARAM_REQUIRED: {
          type: globalResult.types.MERCHANT,
          code: "PAYPAL_START_VAULT_INITIATED_CHECKOUT_PARAM_REQUIRED",
        },
        PAYPAL_START_VAULT_INITIATED_CHECKOUT_SETUP_FAILED: {
          type: globalResult.types.NETWORK,
          code: "PAYPAL_START_VAULT_INITIATED_CHECKOUT_SETUP_FAILED",
          message: "Something went wrong when setting up the checkout workflow.",
        },
        PAYPAL_START_VAULT_INITIATED_CHECKOUT_POPUP_OPEN_FAILED: {
          type: globalResult.types.MERCHANT,
          code: "PAYPAL_START_VAULT_INITIATED_CHECKOUT_POPUP_OPEN_FAILED",
          message:
            "PayPal popup failed to open, make sure to initiate the vault checkout in response to a user action.",
        },
        PAYPAL_START_VAULT_INITIATED_CHECKOUT_CANCELED: {
          type: globalResult.types.CUSTOMER,
          code: "PAYPAL_START_VAULT_INITIATED_CHECKOUT_CANCELED",
          message: "Customer closed PayPal popup before authorizing.",
        },
        PAYPAL_START_VAULT_INITIATED_CHECKOUT_IN_PROGRESS: {
          type: globalResult.types.MERCHANT,
          code: "PAYPAL_START_VAULT_INITIATED_CHECKOUT_IN_PROGRESS",
          message: "Vault initiated checkout already in progress.",
        },
        PAYPAL_INVALID_PAYMENT_OPTION: {
          type: globalResult.types.MERCHANT,
          code: "PAYPAL_INVALID_PAYMENT_OPTION",
          message: "PayPal payment options are invalid.",
        },
        PAYPAL_MISSING_REQUIRED_OPTION: {
          type: globalResult.types.MERCHANT,
          code: "PAYPAL_MISSING_REQUIRED_OPTION",
          message: "Missing required option.",
        },
      };
      module.exports = obj;
    },
    { "../lib/braintree-error": 143 },
  ];
  obj[196] = items195;
  const items196 = [
    (arg0, arg1, arg2) => {
      let closure_0 = global("../lib/basic-component-verification");
      const globalResult = global("@braintree/wrap-promise");
      let closure_1 = global("./paypal-checkout");
      let obj = {
        create: globalResult(function create(client) {
          closure_0 = client;
          let obj = { name: "PayPal Checkout", client: client.client, authorization: client.authorization };
          const verifyResult = closure_0.verify(obj);
          return verifyResult.then(() => {
            const obj = new closure_1(client);
            return obj._initialize(client);
          });
        }),
        isSupported() {
          return true;
        },
        VERSION: "3.112.1",
      };
      module.exports = obj;
    },
    { "../lib/basic-component-verification": 141, "./paypal-checkout": 198, "@braintree/wrap-promise": 40 },
  ];
  obj[197] = items196;
  const items197 = [
    (arg0, arg1, arg2) => {
      let constants2;
      class PayPalCheckout {
        constructor(arg0) {
          obj = {
            _merchantAccountId: global.merchantAccountId,
            _autoSetDataUserIdToken: Boolean(global.autoSetDataUserIdToken),
          };
          return;
        }
        _initialize(arg0) {
          self = this;
          if (global.client) {
            client = global.client;
            configuration = client.getConfiguration();
            obj1 = { fingerprint: null, environment: null };
            obj1.fingerprint = configuration.authorizationFingerprint;
            obj1.environment = configuration.gatewayConfiguration.environment;
            self._authorizationInformation = obj1;
          } else {
            tmp = closure_10;
            tmp2 = closure_10(global.authorization);
            obj = { fingerprint: null, environment: null };
            obj.fingerprint = tmp2.attrs.authorizationFingerprint;
            obj.environment = tmp2.environment;
            self._authorizationInformation = obj;
          }
          obj4 = {
            authorization: global.authorization,
            client: global.client,
            debug: global.debug,
            assetsUrl: closure_3.create(global.authorization),
            name: "PayPal Checkout",
          };
          obj5 = closure_2.create(obj4);
          fn = () => {
            /* body not rendered: F150545 */
          };
          self._clientPromise = obj5.then(fn.bind(self));
          if (global.client) {
            _clientPromise = self._clientPromise;
            fn2 = function () {
              /* body not rendered: F150546 */
            };
            nextPromise = _clientPromise.then(fn2.bind(self));
          } else {
            tmp4 = globalThis;
            _Promise = Promise;
            nextPromise = Promise.resolve(self);
          }
          return nextPromise;
        }
        _setupFrameService(arg0) {
          obj = {};
          closure_0 = global;
          tmp = new closure_4();
          closure_1 = tmp;
          configuration = global.getConfiguration();
          closure_2 = setTimeout(() => {
            /* body not rendered: F150547 */
          }, INTEGRATION_TIMEOUT_MS);
          obj._assetsUrl = `${tmp2.gatewayConfiguration.paypal.assetsUrl}/web/3.112.1`;
          obj._isDebug = configuration.isDebug;
          obj._loadingFrameUrl = `${`${obj._assetsUrl}/html/paypal-landing-frame`}${closure_12(obj._isDebug)}.html`;
          obj1 = {
            name: "braintreepaypallanding",
            dispatchFrameUrl: `${`${obj._assetsUrl}/html/dispatch-frame`}${closure_12(obj._isDebug)}.html`,
            openFrameUrl: obj._loadingFrameUrl,
          };
          fn = () => {
            /* body not rendered: F150548 */
          };
          obj3 = closure_9.create(obj1, fn.bind(obj));
          return tmp;
        }
        createPayment(arg0) {
          closure_0 = global;
          if (global) {
            tmp = closure_8;
            FLOW_ENDPOINTS = closure_8.FLOW_ENDPOINTS;
            if (FLOW_ENDPOINTS.hasOwnProperty(global.flow)) {
              self = this;
              tmp4 = closure_0;
              str = "paypal-checkout.createPayment";
              sendEventResult = closure_0.sendEvent(this._clientPromise, "paypal-checkout.createPayment");
              result = this._createPaymentResource(global);
              nextPromise = result.then(() => {
                /* body not rendered: F150549 */
              });
            }
            return nextPromise;
          }
          reject = Promise.reject;
          tmp2 = new closure_5(closure_7.PAYPAL_FLOW_OPTION_REQUIRED);
          nextPromise = reject(tmp2);
          return;
        }
        _createPaymentResource(arg0, arg1) {
          self = this;
          closure_0 = global;
          obj = module;
          closure_1 = module;
          self = this;
          closure_3 = `paypal_hermes/${closure_8.FLOW_ENDPOINTS[global.flow]}`;
          this._flow = global.flow;
          delete self["intentFromCreatePayment"];
          if (!module) {
            obj = {};
          }
          closure_1 = obj;
          if (true === global.offerCredit) {
            tmp = closure_0;
            str = "paypal-checkout.credit.offered";
            sendEventResult = closure_0.sendEvent(self._clientPromise, "paypal-checkout.credit.offered");
          }
          _clientPromise = self._clientPromise;
          nextPromise = _clientPromise.then(() => {
            /* body not rendered: F150550 */
          });
          return nextPromise.catch(() => {
            /* body not rendered: F150551 */
          });
        }
        updatePayment(arg0) {
          self = this;
          closure_0 = global;
          self = this;
          if (global) {
            tmp = closure_8;
            if (!self._hasMissingOption(global, closure_8.REQUIRED_OPTIONS)) {
              tmp2 = closure_0;
              sendEvent = closure_0.sendEvent;
              _clientPromise = self._clientPromise;
              if (self._verifyConsistentCurrency(global)) {
                str3 = "paypal-checkout.updatePayment";
                sendEventResult = sendEvent(_clientPromise, "paypal-checkout.updatePayment");
                _clientPromise1 = self._clientPromise;
                nextPromise = _clientPromise1.then(() => {
                  /* body not rendered: F150552 */
                });
                catchPromise = nextPromise.catch(() => {
                  /* body not rendered: F150553 */
                });
              } else {
                str = "paypal-checkout.updatePayment.inconsistent-currencies";
                sendEventResult1 = sendEvent(_clientPromise, "paypal-checkout.updatePayment.inconsistent-currencies");
                tmp4 = globalThis;
                _Promise = Promise;
                tmp5 = closure_5;
                obj = { type: null, code: null, message: null, details: null };
                tmp6 = closure_7;
                obj.type = closure_7.PAYPAL_INVALID_PAYMENT_OPTION.type;
                obj.code = closure_7.PAYPAL_INVALID_PAYMENT_OPTION.code;
                obj.message = closure_7.PAYPAL_INVALID_PAYMENT_OPTION.message;
                obj1 = { originalError: null };
                _Error = Error;
                self2 = this;
                str2 = "One or more shipping option currencies differ from checkout currency.";
                self3 = this;
                reject = Promise.reject;
                error = new Error("One or more shipping option currencies differ from checkout currency.");
                tmp8 = error;
                obj1.originalError = error;
                obj.details = obj1;
                self4 = this;
                self5 = this;
                tmp9 = obj;
                tmp10 = new closure_5(obj);
                tmp11 = tmp10;
                catchPromise = reject(tmp10);
              }
            }
            return catchPromise;
          }
          sendEventResult2 = closure_0.sendEvent(self._clientPromise, "paypal-checkout.updatePayment.missing-options");
          reject2 = Promise.reject;
          tmp15 = new closure_5(closure_7.PAYPAL_MISSING_REQUIRED_OPTION);
          catchPromise = reject2(tmp15);
          return;
        }
        startVaultInitiatedCheckout(arg0) {
          self = this;
          closure_0 = global;
          self = this;
          if (this._vaultInitiatedCheckoutInProgress) {
            tmp16 = closure_0;
            str4 = "paypal-checkout.startVaultInitiatedCheckout.error.already-in-progress";
            sendEventResult = closure_0.sendEvent(
              self._clientPromise,
              "paypal-checkout.startVaultInitiatedCheckout.error.already-in-progress",
            );
            tmp18 = globalThis;
            _Promise2 = Promise;
            tmp19 = closure_5;
            tmp20 = closure_7;
            self4 = this;
            self5 = this;
            reject2 = Promise.reject;
            tmp21 = new closure_5(closure_7.PAYPAL_START_VAULT_INITIATED_CHECKOUT_IN_PROGRESS);
            tmp22 = tmp21;
            reject2Result = reject2(tmp21);
          } else {
            tmp = closure_17;
            item = closure_17.forEach(() => {
              /* body not rendered: F150554 */
            });
            tmp3 = assign;
            if (tmp3) {
              tmp9 = globalThis;
              _Promise = Promise;
              tmp10 = closure_5;
              obj = { type: null, code: null, message: null };
              tmp11 = closure_7;
              obj.type = closure_7.PAYPAL_START_VAULT_INITIATED_CHECKOUT_PARAM_REQUIRED.type;
              obj.code = closure_7.PAYPAL_START_VAULT_INITIATED_CHECKOUT_PARAM_REQUIRED.code;
              tmp12 = assign;
              str2 = "Required param ";
              str3 = " is missing.";
              obj.message = `Required param ${assign} is missing.`;
              self2 = this;
              self3 = this;
              tmp13 = obj;
              reject = Promise.reject;
              tmp14 = new closure_5(obj);
              tmp15 = tmp14;
              reject2Result = reject(tmp14);
            } else {
              flag = true;
              self._vaultInitiatedCheckoutInProgress = true;
              _addModalBackdropResult = self._addModalBackdrop(global);
              tmp5 = assign;
              closure_0 = assign({}, global, { flow: "checkout" });
              tmp6 = closure_0;
              str = "paypal-checkout.startVaultInitiatedCheckout.started";
              sendEventResult1 = closure_0.sendEvent(
                self._clientPromise,
                "paypal-checkout.startVaultInitiatedCheckout.started",
              );
              result = self._waitForVaultInitiatedCheckoutDependencies();
              nextPromise = result.then(() => {
                /* body not rendered: F150555 */
              });
              catchPromise = nextPromise.catch(() => {
                /* body not rendered: F150556 */
              });
              reject2Result = catchPromise.then(() => {
                /* body not rendered: F150557 */
              });
            }
          }
          return reject2Result;
        }
        _addModalBackdrop(arg0) {
          if (!global.optOutOfModalBackdrop) {
            self = this;
            if (!this._modalBackdrop) {
              tmp = globalThis;
              _document = document;
              str = "div";
              self._modalBackdrop = document.createElement("div");
              _modalBackdrop = self._modalBackdrop;
              flag = true;
              str2 = "data-braintree-paypal-vault-initiated-checkout-modal";
              attr = _modalBackdrop.setAttribute("data-braintree-paypal-vault-initiated-checkout-modal", true);
              str3 = "fixed";
              self._modalBackdrop.style.position = "fixed";
              num = 0;
              self._modalBackdrop.style.top = 0;
              self._modalBackdrop.style.bottom = 0;
              self._modalBackdrop.style.left = 0;
              self._modalBackdrop.style.right = 0;
              num2 = 9999;
              self._modalBackdrop.style.zIndex = 9999;
              str4 = "black";
              self._modalBackdrop.style.background = "black";
              str5 = "0.7";
              self._modalBackdrop.style.opacity = "0.7";
              _modalBackdrop2 = self._modalBackdrop;
              fn = () => {
                /* body not rendered: F150558 */
              };
              str6 = "click";
              listener = _modalBackdrop2.addEventListener("click", fn.bind(self));
            }
            tmp4 = globalThis;
            _document2 = document;
            body = document.body;
            appendChildResult = body.appendChild(self._modalBackdrop);
          }
          return;
        }
        _removeModalBackdrop() {
          self = this;
          tmp = this._modalBackdrop && self._modalBackdrop.parentNode;
          if (tmp) {
            parentNode = self._modalBackdrop.parentNode;
            removeChildResult = parentNode.removeChild(self._modalBackdrop);
          }
          return;
        }
        closeVaultInitiatedCheckoutWindow() {
          self = this;
          if (this._vaultInitiatedCheckoutInProgress) {
            tmp = closure_0;
            str = "paypal-checkout.startVaultInitiatedCheckout.canceled.by-merchant";
            sendEventResult = closure_0.sendEvent(
              self._clientPromise,
              "paypal-checkout.startVaultInitiatedCheckout.canceled.by-merchant",
            );
          }
          result = self._waitForVaultInitiatedCheckoutDependencies();
          fn = () => {
            /* body not rendered: F150559 */
          };
          return result.then(fn.bind(self));
        }
        focusVaultInitiatedCheckoutWindow() {
          result = this._waitForVaultInitiatedCheckoutDependencies();
          fn = () => {
            /* body not rendered: F150560 */
          };
          return result.then(fn.bind(this));
        }
        _createFrameServiceCallback(arg0) {
          closure_0 = global;
          self = this;
          return () => {
            /* body not rendered: F150561 */
          };
        }
        _waitForVaultInitiatedCheckoutDependencies() {
          self = this;
          _clientPromise = this._clientPromise;
          return _clientPromise.then(() => {
            /* body not rendered: F150562 */
          });
        }
        _constructVaultCheckutUrl(arg0) {
          text = `${this._assetsUrl}/html/${global}`;
          return text + closure_12(this._isDebug) + ".html?channel=" + this._frameService._serviceId;
        }
        tokenizePayment(arg0) {
          self = this;
          self = this;
          obj = { flow: this._flow, intent: global.intent || self.intentFromCreatePayment };
          closure_2 = obj;
          closure_3 = {
            ecToken: global.paymentToken,
            billingToken: global.billingToken,
            payerId: global.payerID,
            paymentId: global.paymentID,
            orderId: global.orderID,
            shippingOptionsId: global.shippingOptionsId,
          };
          flag = true;
          if (global.hasOwnProperty("vault")) {
            flag = global.vault;
          }
          obj.vault = flag;
          sendEventResult = closure_0.sendEvent(self._clientPromise, "paypal-checkout.tokenization.started");
          _clientPromise = self._clientPromise;
          nextPromise = _clientPromise.then(() => {
            /* body not rendered: F150563 */
          });
          nextPromise1 = nextPromise.then(() => {
            /* body not rendered: F150564 */
          });
          return nextPromise1.catch(() => {
            /* body not rendered: F150565 */
          });
        }
        getClientId() {
          _clientPromise = this._clientPromise;
          return _clientPromise.then(() => {
            /* body not rendered: F150566 */
          });
        }
        loadPayPalSDK(arg0) {
          closure_0 = global;
          promise = new closure_4();
          closure_1 = promise;
          tmp = (global && global.dataAttributes) || {};
          closure_2 = tmp;
          tmp2 = tmp["user-id-token"] || tmp["data-user-id-token"];
          self = this;
          closure_3 = tmp2;
          if (this._configuration) {
            if (tmp["client-metadata-id"]) {
              sessionId = tmp["client-metadata-id"];
            } else {
              sessionId = self._configuration.analyticsMetadata.sessionId;
            }
            tmp["client-metadata-id"] = sessionId;
          }
          if (!tmp2) {
            fingerprint = self._authorizationInformation.fingerprint;
            if (fingerprint) {
              str = self._authorizationInformation.fingerprint;
              str2 = "?";
              fingerprint = str.split("?")[0];
            }
            closure_3 = fingerprint;
          }
          self._paypalScript = document.createElement("script");
          tmp3 = closure_1({}, { components: "buttons" }, global);
          closure_0 = tmp3;
          delete tmp3["dataAttributes"];
          str3 = tmp3.intent;
          if (tmp3.vault) {
            if (!str3) {
              str3 = "tokenize";
            }
            tmp3.intent = str3;
          } else {
            tmp3.intent = str3 || "authorize";
            tmp3.currency = tmp3.currency || "USD";
          }
          self._paypalScript.onload = function onload() {
            /* body not rendered: F150567 */
          };
          keys = Object.keys(tmp);
          fn = () => {
            /* body not rendered: F150568 */
          };
          item = keys.forEach(fn.bind(self));
          if (tmp3["client-id"]) {
            _Promise = Promise;
            resolved = Promise.resolve(tmp3["client-id"]);
          } else {
            resolved = self.getClientId();
          }
          fn2 = () => {
            /* body not rendered: F150569 */
          };
          nextPromise = resolved.then(fn2.bind(self));
          fn3 = function () {
            /* body not rendered: F150570 */
          };
          return promise.then(fn3.bind(self));
        }
        _attachPreloadPixel(arg0) {
          str = "sandbox.";
          ({ id, userIdToken } = global);
          replace = "https://www.{ENV}paypal.com/smart/buttons/preload".replace;
          if ("production" === this._authorizationInformation.environment) {
            str = "";
          }
          obj = { "client-id": id, "user-id-token": userIdToken };
          replaced = replace("{ENV}", str);
          if (global.amount) {
            obj.amount = global.amount;
          }
          if (global.currency) {
            obj.currency = global.currency;
          }
          if (global.merchantId) {
            obj["merchant-id"] = global.merchantId;
          }
          xMLHttpRequest = new XMLHttpRequest();
          openResult = xMLHttpRequest.open("GET", closure_14.queryify(replaced, obj));
          sendResult = xMLHttpRequest.send();
          return;
        }
        _formatPaymentResourceData(arg0, arg1) {
          self = this;
          str = global.intent;
          str2 = module.returnUrl;
          gatewayConfiguration = this._configuration.gatewayConfiguration;
          if (!str2) {
            str2 = "https://www.paypal.com/checkoutnow/error";
          }
          obj = {
            returnUrl: str2,
            cancelUrl: module.cancelUrl || "https://www.paypal.com/checkoutnow/error",
            offerPaypalCredit: true === global.offerCredit,
            merchantAccountId: self._merchantAccountId,
            experienceProfile: null,
            shippingOptions: null,
            payer_email: null,
          };
          tmp = global.displayName || gatewayConfiguration.paypal.displayName;
          obj1 = {
            brandName: tmp,
            localeCode: global.locale,
            noShipping: null,
            addressOverride: false === global.shippingAddressEditable,
            landingPageType: global.landingPageType,
          };
          str3 = !global.enableShippingAddress;
          obj1.noShipping = str3.toString();
          obj.experienceProfile = obj1;
          ({ shippingOptions: obj.shippingOptions, userAuthenticationEmail: obj.payer_email } = global);
          if ("checkout" === global.flow) {
            ({
              amount: obj.amount,
              currency: obj.currencyIsoCode,
              requestBillingAgreement: obj.requestBillingAgreement,
            } = global);
            if (str) {
              str4 = "capture";
              if ("capture" === str) {
                str = "sale";
              }
              obj.intent = str;
            }
            str5 = "lineItems";
            if (global.hasOwnProperty("lineItems")) {
              obj.lineItems = global.lineItems;
            }
            str6 = "vaultInitiatedCheckoutPaymentMethodToken";
            if (global.hasOwnProperty("vaultInitiatedCheckoutPaymentMethodToken")) {
              obj.vaultInitiatedCheckoutPaymentMethodToken = global.vaultInitiatedCheckoutPaymentMethodToken;
            }
            str7 = "shippingOptions";
            if (global.hasOwnProperty("shippingOptions")) {
              obj.shippingOptions = global.shippingOptions;
            }
            for (const key10057 in global.shippingAddressOverride) {
              tmp3 = key10057;
              shippingAddressOverride = global.shippingAddressOverride;
              if (!shippingAddressOverride.hasOwnProperty(key10057)) {
                continue;
              } else {
                obj[key10057] = global.shippingAddressOverride[key10057];
                continue;
              }
              continue;
            }
            str8 = "billingAgreementDetails";
            if (global.hasOwnProperty("billingAgreementDetails")) {
              obj.billingAgreementDetails = global.billingAgreementDetails;
            }
          } else {
            obj.shippingAddress = global.shippingAddressOverride;
            if (global.billingAgreementDescription) {
              obj.description = global.billingAgreementDescription;
            }
            if (global.planType) {
              obj.plan_type = global.planType;
              if (global.planMetadata) {
                tmp2 = closure_15;
                obj.plan_metadata = closure_15(global.planMetadata);
              }
            }
          }
          self._riskCorrelationId = global.riskCorrelationId;
          if (global.riskCorrelationId) {
            obj.correlationId = self._riskCorrelationId;
          }
          return obj;
        }
        _verifyConsistentCurrency(arg0) {
          closure_0 = global;
          currency = global.currency;
          if (currency) {
            str = "shippingOptions";
            currency = global.hasOwnProperty("shippingOptions");
          }
          if (currency) {
            tmp = globalThis;
            _Array = Array;
            currency = Array.isArray(global.shippingOptions);
          }
          everyResult = !currency;
          if (currency) {
            shippingOptions = global.shippingOptions;
            everyResult = shippingOptions.every(() => {
              /* body not rendered: F150571 */
            });
          }
          return everyResult;
        }
        _hasMissingOption(arg0, arg1) {
          arr = module || [];
          if (!global.hasOwnProperty("amount")) {
            str = "lineItems";
            if (!global.hasOwnProperty("lineItems")) {
              flag = true;
              return true;
            }
          }
          num = 0;
          if (0 < arr.length) {
            tmp = num;
            while (global.hasOwnProperty(arr[num])) {
              num = num + 1;
            }
            flag2 = true;
            return true;
          }
          return false;
        }
        _formatUpdatePaymentData(arg0) {
          obj = { merchantAccountId: this._merchantAccountId, paymentId: null, currencyIsoCode: null };
          orderId = global.paymentId;
          if (!orderId) {
            orderId = global.orderId;
          }
          obj.paymentId = orderId;
          obj.currencyIsoCode = global.currency;
          if (global.hasOwnProperty("amount")) {
            obj.amount = global.amount;
          }
          if (global.hasOwnProperty("lineItems")) {
            obj.lineItems = global.lineItems;
          }
          if (global.hasOwnProperty("shippingOptions")) {
            obj.shippingOptions = global.shippingOptions;
          }
          if (global.hasOwnProperty("amountBreakdown")) {
            obj.amountBreakdown = global.amountBreakdown;
          }
          if (global.hasOwnProperty("shippingAddress")) {
            tmp = closure_0;
            str = "paypal-checkout.updatePayment.shippingAddress.provided.by-the-merchant";
            sendEventResult = closure_0.sendEvent(
              this._clientPromise,
              "paypal-checkout.updatePayment.shippingAddress.provided.by-the-merchant",
            );
            obj.line1 = global.shippingAddress.line1;
            shippingAddress = global.shippingAddress;
            str2 = "line2";
            if (shippingAddress.hasOwnProperty("line2")) {
              obj.line2 = global.shippingAddress.line2;
            }
            obj.city = global.shippingAddress.city;
            obj.state = global.shippingAddress.state;
            obj.postalCode = global.shippingAddress.postalCode;
            obj.countryCode = global.shippingAddress.countryCode;
            shippingAddress2 = global.shippingAddress;
            str3 = "phone";
            if (shippingAddress2.hasOwnProperty("phone")) {
              obj.phone = global.shippingAddress.phone;
            }
            shippingAddress3 = global.shippingAddress;
            str4 = "recipientName";
            if (shippingAddress3.hasOwnProperty("recipientName")) {
              obj.recipientName = global.shippingAddress.recipientName;
            }
          }
          return obj;
        }
        _formatTokenizeData(arg0, arg1) {
          self = this;
          ({ _configuration, _riskCorrelationId } = this);
          ({ gatewayConfiguration, authorizationType } = _configuration);
          flow = global.flow;
          if (!_riskCorrelationId) {
            _riskCorrelationId = module.billingToken;
          }
          if (!_riskCorrelationId) {
            _riskCorrelationId = module.ecToken;
          }
          tmp = "vault" === flow;
          obj = { correlationId: _riskCorrelationId, options: null };
          vault = tmp;
          if (vault) {
            str = "TOKENIZATION_KEY";
            vault = "TOKENIZATION_KEY" !== authorizationType;
          }
          if (vault) {
            vault = global.vault;
          }
          obj1 = { paypalAccount: obj };
          obj.options = { validate: vault };
          paypalAccount = obj1.paypalAccount;
          if (tmp) {
            paypalAccount.billingAgreementToken = module.billingToken;
          } else {
            paypalAccount.paymentToken = module.paymentId || module.orderId;
            obj1.paypalAccount.payerId = module.payerId;
            obj1.paypalAccount.unilateral = gatewayConfiguration.paypal.unvettedMerchant;
            if (global.intent) {
              obj1.paypalAccount.intent = global.intent;
            }
          }
          if (self._merchantAccountId) {
            obj1.merchantAccountId = self._merchantAccountId;
          }
          return obj1;
        }
        _formatTokenizePayload(arg0) {
          first = {};
          if (global.paypalAccounts) {
            first = global.paypalAccounts[0];
          }
          obj1 = { nonce: first.nonce, details: {}, type: first.type };
          tmp = first.details && first.details.payerInfo;
          if (tmp) {
            obj1.details = first.details.payerInfo;
          }
          tmp2 = first.details && first.details.creditFinancingOffered;
          if (tmp2) {
            obj1.creditFinancingOffered = first.details.creditFinancingOffered;
          }
          tmp3 = first.details && first.details.shippingOptionId;
          if (tmp3) {
            obj1.shippingOptionId = first.details.shippingOptionId;
          }
          tmp4 = first.details && first.details.cobrandedCardLabel;
          if (tmp4) {
            obj1.cobrandedCardLabel = first.details.cobrandedCardLabel;
          }
          return obj1;
        }
        teardown() {
          self = this;
          self = this;
          tmp = closure_13(this, closure_11(PayPalCheckout.prototype));
          tmp2 = this._paypalScript && self._paypalScript.parentNode;
          if (tmp2) {
            parentNode = self._paypalScript.parentNode;
            removeChildResult = parentNode.removeChild(self._paypalScript);
          }
          _frameServicePromise = self._frameServicePromise;
          catchPromise = _frameServicePromise.catch(function () {
            /* body not rendered: F150572 */
          });
          return catchPromise.then(() => {
            /* body not rendered: F150573 */
          });
        }
      }
      handler = global("../lib/analytics");
      const assign = global("../lib/assign").assign;
      let closure_2 = global("../lib/create-deferred-client");
      let closure_3 = global("../lib/create-assets-url");
      const globalResult = global("@braintree/extended-promise");
      const globalResult1 = global("@braintree/wrap-promise");
      let closure_5 = global("../lib/braintree-error");
      let closure_6 = global("../lib/convert-to-braintree-error");
      constants = global("./errors");
      query = global("../paypal/shared/constants");
      let closure_9 = global("../lib/frame-service/external");
      let closure_10 = global("../lib/create-authorization-data");
      let closure_11 = global("../lib/methods");
      closure_12 = global("../lib/use-min");
      let closure_13 = global("../lib/convert-methods-to-error");
      let closure_14 = global("../lib/querystring");
      let closure_15 = global("../lib/camel-case-to-snake-case");
      const INTEGRATION_TIMEOUT_MS = global("../lib/constants").INTEGRATION_TIMEOUT_MS;
      let closure_17 = ["amount", "currency", "vaultInitiatedCheckoutPaymentMethodToken"];
      globalResult.suppressUnhandledPromiseMessage = true;
      module.exports = globalResult1.wrapPrototype(PayPalCheckout);
    },
    {
      "../lib/analytics": 138,
      "../lib/assign": 140,
      "../lib/braintree-error": 143,
      "../lib/camel-case-to-snake-case": 144,
      "../lib/constants": 145,
      "../lib/convert-methods-to-error": 146,
      "../lib/convert-to-braintree-error": 147,
      "../lib/create-assets-url": 148,
      "../lib/create-authorization-data": 149,
      "../lib/create-deferred-client": 150,
      "../lib/frame-service/external": 158,
      "../lib/methods": 175,
      "../lib/querystring": 177,
      "../lib/use-min": 181,
      "../paypal/shared/constants": 201,
      "./errors": 196,
      "@braintree/extended-promise": 31,
      "@braintree/wrap-promise": 40,
    },
  ];
  obj[198] = items197;
  const items198 = [
    (arg0, arg1, arg2) => {
      let closure_8;
      class PayPal {
        constructor(_client) {
          let client;
          let client2;
          let obj;
          obj = {
            _client: _client.client,
            _assetsUrl: `${client.getConfiguration().gatewayConfiguration.paypal.assetsUrl}/web/${c5}`,
            _isDebug: client2.getConfiguration().isDebug,
            _loadingFrameUrl: `${`${obj._assetsUrl}/html/paypal-landing-frame`}${closure_3(obj._isDebug)}.html`,
            _authorizationInProgress: false,
          };
          client = _client.client;
          client2 = _client.client;
        }
        _initialize() {
          self = this;
          _client = this._client;
          closure_2 = setTimeout(() => {
            closure_8.sendEvent(_client, "paypal.load.timed-out");
          }, INTEGRATION_TIMEOUT_MS);
          promise = new Promise((arg0) => {
            _self = arg0;
            const obj = {
              name: constants.LANDING_FRAME_NAME,
              dispatchFrameUrl: `${`${closure_0._assetsUrl}/html/dispatch-frame`}${closure_1_3(closure_0._isDebug)}.html`,
              openFrameUrl: _self._loadingFrameUrl,
            };
            self.create(obj, () => {
              /* body not rendered: F154297 */
            });
          });
          return promise;
        }
        tokenize(arg0, arg1) {
          self = this;
          closure_0 = global;
          closure_1 = module;
          self = this;
          _client = this._client;
          tmp = module;
          if (tmp) {
            tmp2 = closure_4;
            tmp3 = closure_10;
            tmp4 = closure_4(closure_10(module));
            closure_1 = tmp4;
            tmp = tmp4;
          }
          if (global) {
            tmp5 = closure_6;
            FLOW_ENDPOINTS = closure_6.FLOW_ENDPOINTS;
            if (FLOW_ENDPOINTS.hasOwnProperty(global.flow)) {
              tmp10 = globalThis;
              _Promise2 = Promise;
              self2 = this;
              self3 = this;
              promise = new Promise(function (arg0, fn) {
                if (self._authorizationInProgress) {
                  closure_8.sendEvent(_client, "paypal.tokenization.error.already-opened");
                  self = this;
                  const self2 = this;
                  const tmp20 = new closure_1(constants.PAYPAL_TOKENIZATION_REQUEST_ACTIVE);
                  fn(tmp20);
                } else {
                  self._authorizationInProgress = true;
                  const _window = window;
                  if (!window.popupBridge) {
                    closure_8.sendEvent(_client, "paypal.tokenization.opened");
                  }
                  if (true === flow.offerCredit) {
                    closure_8.sendEvent(_client, "paypal.credit.offered");
                  }
                  if (true === flow.offerPayLater) {
                    closure_8.sendEvent(_client, "paypal.paylater.offered");
                  }
                  const _navigateFrameToAuthResult = self._navigateFrameToAuth(flow);
                  _navigateFrameToAuthResult.catch(fn);
                  const _frameService = obj._frameService;
                  _frameService.open({}, self._createFrameServiceCallback(flow, arg0, fn));
                }
              });
              tmp11 = promise;
              handler = promise;
              if (tmp) {
                nextPromise = promise.then((result) => {
                  closure_1(null, result);
                });
                catchPromise = nextPromise.catch(tmp);
                _frameService2 = self._frameService;
                obj = { beforeClose: null };
                obj.beforeClose = function beforeClose() {
                  closure_8.sendEvent(_client, "paypal.tokenization.closed.by-merchant");
                };
                handler = _frameService2.createHandler(obj);
              }
              noopHandler = handler;
            }
            return noopHandler;
          }
          tmp6 = new closure_1(closure_11.PAYPAL_FLOW_OPTION_REQUIRED);
          if (tmp) {
            tmpResult = tmp(tmp6);
            _frameService = self._frameService;
            noopHandler = _frameService.createNoopHandler();
          } else {
            tmp7 = globalThis;
            _Promise = Promise;
            noopHandler = Promise.reject(tmp6);
          }
          return;
        }
        _createFrameServiceCallback(arg0, arg1, arg2) {
          closure_0 = global;
          closure_1 = module;
          closure_2 = exports;
          self = this;
          _client = this._client;
          return window.popupBridge
            ? (arg0, path) => {
                let tmp = path && path.path;
                if (tmp) {
                  const str = path.path;
                  tmp = "/cancel" === str.substring(0, 7);
                }
                self._authorizationInProgress = false;
                if (!arg0) {
                  if (!tmp) {
                    if (path) {
                      const _tokenizePayPalResult = self._tokenizePayPal(closure_0, path.queryItems);
                      const nextPromise = _tokenizePayPalResult.then(closure_1);
                      nextPromise.catch(closure_2);
                    }
                  }
                }
                closure_8.sendEvent(_client, "paypal.tokenization.closed-popupbridge.by-user");
                const tmp7 = new closure_1(constants.PAYPAL_POPUP_CLOSED);
                closure_2(tmp7);
              }
            : function (code, arg1) {
                let obj3;
                self._authorizationInProgress = false;
                const obj = self;
                if (code) {
                  if ("FRAME_SERVICE_FRAME_CLOSED" === code.code) {
                    closure_8.sendEvent(_client, "paypal.tokenization.closed.by-user");
                    const self3 = this;
                    const self4 = this;
                    const tmp21 = new closure_1(constants.PAYPAL_POPUP_CLOSED);
                    closure_2(tmp21);
                  } else {
                    code = code.code;
                    if (code) {
                      const code1 = code.code;
                      code = code1.indexOf("FRAME_SERVICE_FRAME_OPEN_FAILED") > -1;
                    }
                    if (code) {
                      const obj2 = {
                        code: constants.PAYPAL_POPUP_OPEN_FAILED.code,
                        type: constants.PAYPAL_POPUP_OPEN_FAILED.type,
                        message: constants.PAYPAL_POPUP_OPEN_FAILED.message,
                        details: obj3,
                      };
                      self = this;
                      const self2 = this;
                      obj3 = { originalError: code };
                      const tmp12 = new closure_1(obj2);
                      closure_2(tmp12);
                    }
                  }
                } else {
                  const tmp = arg1;
                  if (tmp) {
                    const _tokenizePayPalResult = obj._tokenizePayPal(closure_0, arg1);
                    const nextPromise = _tokenizePayPalResult.then(closure_1);
                    nextPromise.catch(closure_2);
                  }
                }
              };
        }
        _tokenizePayPal(arg0, arg1) {
          self = this;
          self = this;
          _client = this._client;
          if (!window.popupBridge) {
            _frameService = self._frameService;
            redirectResult = _frameService.redirect(self._loadingFrameUrl);
          }
          obj = {
            endpoint: "payment_methods/paypal_accounts",
            method: "post",
            data: self._formatTokenizeData(global, module),
          };
          requestResult = _client.request(obj);
          nextPromise = requestResult.then((result) => {
            let tmp6;
            result = self._formatTokenizePayload(result);
            sendEvent = closure_8.sendEvent;
            if (window.popupBridge) {
              sendEvent(_client, "paypal.tokenization.success-popupbridge");
              tmp6 = _client;
            } else {
              sendEvent(_client, "paypal.tokenization.success");
              tmp6 = _client;
            }
            if (result.creditFinancingOffered) {
              closure_8.sendEvent(tmp6, "paypal.credit.accepted");
            }
            const _frameService = self._frameService;
            _frameService.close();
            return result;
          });
          return nextPromise.catch((error) => {
            sendEvent = closure_8.sendEvent;
            if (window.popupBridge) {
              sendEvent(_client, "paypal.tokenization.failed-popupbridge");
            } else {
              sendEvent(_client, "paypal.tokenization.failed");
            }
            const _frameService = self._frameService;
            _frameService.close();
            const obj = {
              type: constants.PAYPAL_ACCOUNT_TOKENIZATION_FAILED.type,
              code: constants.PAYPAL_ACCOUNT_TOKENIZATION_FAILED.code,
              message: constants.PAYPAL_ACCOUNT_TOKENIZATION_FAILED.message,
            };
            return Promise.reject(closure_2(error, obj));
          });
        }
        _formatTokenizePayload(paypalAccounts) {
          let first = {};
          if (paypalAccounts.paypalAccounts) {
            first = paypalAccounts.paypalAccounts[0];
          }
          const obj = { nonce: first.nonce, details: {}, type: first.type };
          const tmp = first.details && first.details.payerInfo;
          if (tmp) {
            obj.details = first.details.payerInfo;
          }
          const tmp2 = first.details && first.details.creditFinancingOffered;
          if (tmp2) {
            obj.creditFinancingOffered = first.details.creditFinancingOffered;
          }
          return obj;
        }
        _formatTokenizeData(flow, ba_token) {
          let authorizationType;
          let gatewayConfiguration;
          let tmp2;
          const _client = this._client;
          const configuration = _client.getConfiguration();
          let token = ba_token.ba_token;
          ({ gatewayConfiguration, authorizationType } = configuration);
          if (!token) {
            token = ba_token.token;
          }
          const obj = { correlationId: token, options: { validate: tmp2 } };
          const obj3 = { paypalAccount: obj };
          const paypalAccount = obj3.paypalAccount;
          tmp2 = "vault" === flow.flow && "TOKENIZATION_KEY" !== authorizationType;
          if (ba_token.ba_token) {
            paypalAccount.billingAgreementToken = ba_token.ba_token;
          } else {
            ({ paymentId: paypalAccount.paymentToken, PayerID: obj2.paypalAccount.payerId } = ba_token);
            obj3.paypalAccount.unilateral = gatewayConfiguration.paypal.unvettedMerchant;
            if (flow.hasOwnProperty("intent")) {
              obj3.paypalAccount.intent = flow.intent;
            }
          }
          return obj3;
        }
        _navigateFrameToAuth(arg0) {
          closure_0 = global;
          self = this;
          _client = this._client;
          obj = {
            endpoint: `paypal_hermes/${closure_6.FLOW_ENDPOINTS[global.flow]}`,
            method: "post",
            data: this._formatPaymentResourceData(global),
          };
          requestResult = _client.request(obj);
          nextPromise = requestResult.then((paymentResource) => {
            let approvalUrl;
            if ("checkout" === flow.flow) {
              approvalUrl = paymentResource.paymentResource.redirectUrl;
            } else {
              approvalUrl = paymentResource.agreementSetup.approvalUrl;
            }
            let queryifyResult = approvalUrl;
            if ("commit" === flow.useraction) {
              queryifyResult = closure_13.queryify(approvalUrl, { useraction: "commit" });
            }
            if (window.popupBridge) {
              closure_8.sendEvent(_client, "paypal.tokenization.opened-popupbridge");
            }
            const _frameService = self._frameService;
            _frameService.redirect(queryifyResult);
          });
          return nextPromise.catch(function (error) {
            let obj3;
            let rejectResult;
            const _frameService = self._frameService;
            const tmp = error.details && error.details.httpStatus;
            _frameService.close();
            self._authorizationInProgress = false;
            if (422 === tmp) {
              const obj2 = {
                type: constants.PAYPAL_INVALID_PAYMENT_OPTION.type,
                code: constants.PAYPAL_INVALID_PAYMENT_OPTION.code,
                message: constants.PAYPAL_INVALID_PAYMENT_OPTION.message,
                details: obj3,
              };
              self = this;
              const self2 = this;
              obj3 = { originalError: error };
              const tmp15 = new closure_1(obj2);
              rejectResult = reject(tmp15);
            } else {
              const obj = {
                type: constants.PAYPAL_FLOW_FAILED.type,
                code: constants.PAYPAL_FLOW_FAILED.code,
                message: constants.PAYPAL_FLOW_FAILED.message,
              };
              rejectResult = Promise.reject(_client(error, obj));
            }
            return rejectResult;
          });
        }
        _formatPaymentResourceData(localeCode) {
          let obj2;
          let str;
          const _client = this._client;
          const gatewayConfiguration = _client.getConfiguration().gatewayConfiguration;
          const _serviceId = this._frameService._serviceId;
          const obj = {
            returnUrl: `${`${gatewayConfiguration.paypal.assetsUrl}/web/`}${c5}/html/redirect-frame${closure_3(this._isDebug)}.html?channel=${_serviceId}`,
            cancelUrl: `${`${gatewayConfiguration.paypal.assetsUrl}/web/`}${c5}/html/cancel-frame${closure_3(this._isDebug)}.html?channel=${_serviceId}`,
            offerPaypalCredit: true === localeCode.offerCredit,
            offerPayLater: true === localeCode.offerPayLater,
            experienceProfile: obj2,
          };
          obj2 = {
            brandName: localeCode.displayName || gatewayConfiguration.paypal.displayName,
            localeCode: localeCode.locale,
            noShipping: str.toString(),
            addressOverride: false === localeCode.shippingAddressEditable,
            landingPageType: localeCode.landingPageType,
          };
          str = !localeCode.enableShippingAddress;
          if (popupBridge) {
            const _window = window;
            popupBridge = typeof window.popupBridge.getReturnUrlPrefix === "function";
          }
          if (popupBridge) {
            const _window2 = window;
            const popupBridge2 = window.popupBridge;
            obj.returnUrl = `${popupBridge2.getReturnUrlPrefix()}return`;
            const _window3 = window;
            const popupBridge3 = window.popupBridge;
            obj.cancelUrl = `${popupBridge3.getReturnUrlPrefix()}cancel`;
          }
          if ("checkout" === localeCode.flow) {
            ({ amount: obj.amount, currency: obj.currencyIsoCode } = localeCode);
            if (localeCode.hasOwnProperty("intent")) {
              obj.intent = localeCode.intent;
            }
            for (const key10084 in localeCode.shippingAddressOverride) {
              let shippingAddressOverride = localeCode.shippingAddressOverride;
              if (!shippingAddressOverride.hasOwnProperty(key10084)) {
                continue;
              } else {
                obj[key10084] = localeCode.shippingAddressOverride[key10084];
                continue;
              }
              continue;
            }
          } else {
            obj.shippingAddress = localeCode.shippingAddressOverride;
            if (localeCode.billingAgreementDescription) {
              obj.description = localeCode.billingAgreementDescription;
            }
          }
          return obj;
        }
        closeWindow() {
          const self = this;
          if (this._authorizationInProgress) {
            closure_8.sendEvent(self._client, "paypal.tokenize.closed.by-merchant");
          }
          const _frameService = self._frameService;
          _frameService.close();
        }
        focusWindow() {
          const _frameService = this._frameService;
          _frameService.focus();
        }
      }
      let closure_0 = global("../../lib/frame-service/external");
      let closure_1 = global("../../lib/braintree-error");
      let closure_2 = global("../../lib/convert-to-braintree-error");
      let closure_3 = global("../../lib/use-min");
      let closure_4 = global("../../lib/once");
      let c5 = "3.112.1";
      constants = global("../shared/constants");
      const INTEGRATION_TIMEOUT_MS = global("../../lib/constants").INTEGRATION_TIMEOUT_MS;
      query = global("../../lib/analytics");
      let closure_9 = global("../../lib/methods");
      let closure_10 = global("../../lib/deferred");
      const constants2 = global("../shared/errors");
      closure_12 = global("../../lib/convert-methods-to-error");
      let closure_13 = global("../../lib/querystring");
      PayPal.prototype.teardown = global("@braintree/wrap-promise")(function () {
        const _frameService = this._frameService;
        _frameService.teardown();
        closure_12(this, closure_9(PayPal.prototype));
        closure_8.sendEvent(this._client, "paypal.teardown-completed");
        return Promise.resolve();
      });
      module.exports = PayPal;
    },
    {
      "../../lib/analytics": 138,
      "../../lib/braintree-error": 143,
      "../../lib/constants": 145,
      "../../lib/convert-methods-to-error": 146,
      "../../lib/convert-to-braintree-error": 147,
      "../../lib/deferred": 151,
      "../../lib/frame-service/external": 158,
      "../../lib/methods": 175,
      "../../lib/once": 176,
      "../../lib/querystring": 177,
      "../../lib/use-min": 181,
      "../shared/constants": 201,
      "../shared/errors": 202,
      "@braintree/wrap-promise": 40,
    },
  ];
  obj[199] = items198;
  const items199 = [
    (arg0, arg1, arg2) => {
      let closure_0 = global("../lib/analytics");
      let closure_1 = global("../lib/basic-component-verification");
      let closure_2 = global("../lib/create-deferred-client");
      let closure_3 = global("../lib/create-assets-url");
      let closure_4 = global("../lib/braintree-error");
      let closure_5 = global("./shared/errors");
      let closure_6 = global("./external/paypal");
      let obj = {
        create: global("@braintree/wrap-promise")(function create(client) {
          let obj = { name: "PayPal", client: client.client, authorization: client.authorization };
          const verifyResult = closure_1.verify(obj);
          const nextPromise = verifyResult.then(() => {
            const obj = {
              authorization: client.authorization,
              client: client.client,
              debug: client.debug,
              assetsUrl: closure_3.create(client.authorization),
              name: "PayPal",
            };
            return closure_2.create(obj);
          });
          return nextPromise.then(function (client) {
            let rejectResult;
            client.client = client;
            if (true !== client.getConfiguration().gatewayConfiguration.paypalEnabled) {
              const self3 = this;
              const self4 = this;
              const tmp11 = new closure_4(constants.PAYPAL_NOT_ENABLED);
              rejectResult = reject(tmp11);
            } else {
              client.sendEvent(client.client, "paypal.initialized");
              const self = this;
              const self2 = this;
              const obj = new closure_6(client);
              rejectResult = obj._initialize();
            }
            return rejectResult;
          });
        }),
        isSupported() {
          return true;
        },
        VERSION: "3.112.1",
      };
      module.exports = obj;
    },
    {
      "../lib/analytics": 138,
      "../lib/basic-component-verification": 141,
      "../lib/braintree-error": 143,
      "../lib/create-assets-url": 148,
      "../lib/create-deferred-client": 150,
      "./external/paypal": 199,
      "./shared/errors": 202,
      "@braintree/wrap-promise": 40,
    },
  ];
  obj[200] = items199;
  const items200 = [
    (arg0, arg1, arg2) => {
      module.exports = {
        LANDING_FRAME_NAME: "braintreepaypallanding",
        FLOW_ENDPOINTS: { checkout: "create_payment_resource", vault: "setup_billing_agreement" },
        REQUIRED_OPTIONS: ["paymentId", "currency"],
      };
    },
    {},
  ];
  obj[201] = items200;
  const items201 = [
    (arg0, arg1, arg2) => {
      const globalResult = global("../../lib/braintree-error");
      const obj = {
        PAYPAL_NOT_ENABLED: {
          type: globalResult.types.MERCHANT,
          code: "PAYPAL_NOT_ENABLED",
          message: "PayPal is not enabled for this merchant.",
        },
        PAYPAL_TOKENIZATION_REQUEST_ACTIVE: {
          type: globalResult.types.MERCHANT,
          code: "PAYPAL_TOKENIZATION_REQUEST_ACTIVE",
          message: "Another tokenization request is active.",
        },
        PAYPAL_ACCOUNT_TOKENIZATION_FAILED: {
          type: globalResult.types.NETWORK,
          code: "PAYPAL_ACCOUNT_TOKENIZATION_FAILED",
          message: "Could not tokenize user's PayPal account.",
        },
        PAYPAL_FLOW_FAILED: {
          type: globalResult.types.NETWORK,
          code: "PAYPAL_FLOW_FAILED",
          message: "Could not initialize PayPal flow.",
        },
        PAYPAL_FLOW_OPTION_REQUIRED: {
          type: globalResult.types.MERCHANT,
          code: "PAYPAL_FLOW_OPTION_REQUIRED",
          message: "PayPal flow property is invalid or missing.",
        },
        PAYPAL_POPUP_OPEN_FAILED: {
          type: globalResult.types.MERCHANT,
          code: "PAYPAL_POPUP_OPEN_FAILED",
          message: "PayPal popup failed to open, make sure to tokenize in response to a user action.",
        },
        PAYPAL_POPUP_CLOSED: {
          type: globalResult.types.CUSTOMER,
          code: "PAYPAL_POPUP_CLOSED",
          message: "Customer closed PayPal popup before authorizing.",
        },
        PAYPAL_INVALID_PAYMENT_OPTION: {
          type: globalResult.types.MERCHANT,
          code: "PAYPAL_INVALID_PAYMENT_OPTION",
          message: "PayPal payment options are invalid.",
        },
      };
      module.exports = obj;
    },
    { "../../lib/braintree-error": 143 },
  ];
  obj[202] = items201;
  const items202 = [
    (arg0, arg1, arg2) => {
      const globalResult = global("@braintree/wrap-promise");
      let closure_0 = global("../lib/basic-component-verification");
      let closure_1 = global("./preferred-payment-methods");
      let obj = {
        create: globalResult(function create(client) {
          closure_0 = client;
          let obj = { name: "PreferredPaymentMethods", client: client.client, authorization: client.authorization };
          const verifyResult = closure_0.verify(obj);
          return verifyResult.then(() => {
            const obj = new closure_1();
            return obj.initialize(client);
          });
        }),
        VERSION: "3.112.1",
      };
      module.exports = obj;
    },
    { "../lib/basic-component-verification": 141, "./preferred-payment-methods": 204, "@braintree/wrap-promise": 40 },
  ];
  obj[203] = items202;
  const items203 = [
    (arg0, arg1, arg2) => {
      let closure_0;
      class PreferredPaymentMethods {
        constructor() {
          return;
        }
        initialize(arg0) {
          self = this;
          obj = {
            authorization: global.authorization,
            client: global.client,
            debug: global.debug,
            assetsUrl: closure_1.create(global.authorization),
            name: "PreferredPaymentMethods",
          };
          obj1 = closure_2.create(obj);
          this._clientPromise = obj1.catch(() => {
            /* body not rendered: F150588 */
          });
          sendEventResult = closure_0.sendEvent(this._clientPromise, "preferred-payment-methods.initialized");
          return Promise.resolve(this);
        }
        fetchPreferredPaymentMethods() {
          self = this;
          _clientPromise = this._clientPromise;
          nextPromise = _clientPromise.then(() => {
            /* body not rendered: F150589 */
          });
          nextPromise1 = nextPromise.then(() => {
            /* body not rendered: F150590 */
          });
          return nextPromise1.catch(() => {
            /* body not rendered: F150591 */
          });
        }
      }
      const globalResult = global("@braintree/wrap-promise");
      handler = global("../lib/analytics");
      let closure_1 = global("../lib/create-assets-url");
      let closure_2 = global("../lib/create-deferred-client");
      module.exports = globalResult.wrapPrototype(PreferredPaymentMethods);
    },
    {
      "../lib/analytics": 138,
      "../lib/create-assets-url": 148,
      "../lib/create-deferred-client": 150,
      "@braintree/wrap-promise": 40,
    },
  ];
  obj[204] = items203;
  const items204 = [
    (arg0, arg1, arg2) => {
      let closure_0 = global("../../lib/braintree-error");
      let closure_1 = global("../shared/errors");
      let closure_2 = global("../../lib/frame-service/external");
      let closure_3 = global("../../lib/analytics");
      let closure_4 = global("../../lib/use-min");
      const BILLING_ADDRESS_OPTIONS = global("../shared/constants").BILLING_ADDRESS_OPTIONS;
      let closure_6 = global("../../lib/snake-case-to-camel-case");
      const assign = global("../../lib/assign").assign;
      let c8 = 400;
      let c9 = 570;
      let obj = {
        createMandate(_client, locale) {
          let obj2;
          const data = {
            sepa_debit: obj2,
            locale: locale.locale,
            cancel_url: locale.cancelUrl,
            return_url: locale.returnUrl,
            merchant_account_id: locale.merchantAccountId,
          };
          obj2 = {
            account_holder_name: locale.accountHolderName,
            billing_address: { country_code: locale.countryCode },
            iban: locale.iban,
            merchant_or_partner_customer_id: locale.customerId,
            mandate_type: locale.mandateType,
          };
          if (locale.billingAddress) {
            const item = BILLING_ADDRESS_OPTIONS.forEach((item) => {
              const tmp = closure_6(item);
              if (tmp in locale.billingAddress) {
                obj.sepa_debit.billing_address[item] = tmp2.billingAddress[tmp];
              }
            });
          }
          const requestResult = _client.request({ api: "clientApi", method: "post", endpoint: "sepa_debit", data });
          const nextPromise = requestResult.then(function (message) {
            let obj;
            const sepaDebitAccount = message.message.body.sepaDebitAccount;
            if (sepaDebitAccount) {
              obj = { approvalUrl: null, last4: null, bankReferenceToken: null };
              ({
                approvalUrl: obj.approvalUrl,
                last4: obj.last4,
                bankReferenceToken: obj.bankReferenceToken,
              } = sepaDebitAccount);
              return obj;
            } else {
              const self = this;
              const self2 = this;
              const tmp3 = new locale(obj.SEPA_CREATE_MANDATE_FAILED);
              throw tmp3;
            }
          });
          return nextPromise.catch(() => {
            const tmp = new locale(obj.SEPA_CREATE_MANDATE_FAILED);
            throw tmp;
          });
        },
        openPopup(arg0, debug) {
          let height;
          let width;
          closure_0 = arg0;
          closure_1 = debug;
          let create = `${debug.assetsUrl}/html`;
          closure_3 = debug.debug || false;
          const promise = new Promise((arg0, arg1) => {
            let sum1;
            closure_0 = arg0;
            const approvalUrl = arg1;
            const sum = Math.round((window.outerHeight - height) / 2) + window.screenTop;
            size = {
              name: "sepadirectdebit",
              dispatchFrameUrl: `${closure_2}/dispatch-frame${closure_1_4(closure_3)}.html`,
              openFrameUrl: `${closure_2}/sepa-landing-frame${closure_1_4(closure_3)}.html`,
              top: sum,
              left: sum1,
              height,
              width,
            };
            sum1 = Math.round((window.outerWidth - width) / 2) + window.screenLeft;
            create = create.create;
            create(size, (open) => {
              closure_3.sendEvent(open, "sepa.popup.initialized");
              open.open({}, function (code, success) {
                let tmp7Result;
                const tmp = success && success.success;
                if (tmp) {
                  open.close();
                  tmp7Result = open();
                } else {
                  let tmp2 = success && success.cancel;
                  if (!tmp2) {
                    tmp2 = code && "FRAME_SERVICE_FRAME_CLOSED" === code.code;
                    const tmp4 = code && "FRAME_SERVICE_FRAME_CLOSED" === code.code;
                  }
                  open.close();
                  if (tmp2) {
                    const self3 = this;
                    const self4 = this;
                    const tmp83 = new open(approvalUrl.SEPA_CUSTOMER_CANCELED);
                    tmp7Result = approvalUrl(tmp83);
                  } else {
                    const self = this;
                    const self2 = this;
                    const tmp84 = new open(approvalUrl.SEPA_TOKENIZATION_FAILED);
                    tmp7Result = approvalUrl(tmp84);
                  }
                }
                return tmp7Result;
              });
              open.redirect(approvalUrl.approvalUrl);
            });
          });
          return promise;
        },
        handleApproval(_client, last_4) {
          closure_0 = last_4;
          const obj = {
            sepa_debit_account: {
              last_4: last_4.last4,
              merchant_or_partner_customer_id: last_4.customerId,
              bank_reference_token: last_4.bankReferenceToken,
              mandate_type: last_4.mandateType,
            },
            merchant_account_id: last_4.merchantAccountId,
          };
          const requestResult = _client.request({
            api: "clientApi",
            method: "post",
            endpoint: "payment_methods/sepa_debit_accounts",
            data: obj,
          });
          const nextPromise = requestResult.then(function (nonce) {
            if (nonce.nonce) {
              const obj = { nonce: nonce.nonce, ibanLastFour: null, customerId: null, mandateType: null };
              ({ last4: obj.ibanLastFour, customerId: obj.customerId, mandateType: obj.mandateType } = closure_0);
              return obj;
            } else {
              const self = this;
              const self2 = this;
              const tmp3 = new client(constants.SEPA_TRANSACTION_FAILED);
              throw tmp3;
            }
          });
          return nextPromise.catch(() => {
            const tmp = new client(constants.SEPA_TRANSACTION_FAILED);
            throw tmp;
          });
        },
        POPUP_WIDTH: 400,
        POPUP_HEIGHT: 570,
        redirectPage(approvalUrl) {
          window.location.href = approvalUrl;
        },
        handleApprovalForFullPageRedirect(client, result) {
          constants = result;
          let obj = { api: "clientApi", method: "get", endpoint: `sepa_debit/${result.cart_id}` };
          let requestResult = client.request(obj);
          let nextPromise = requestResult.then((sepaDebitMandateDetail) => {
            sepaDebitMandateDetail = sepaDebitMandateDetail.sepaDebitMandateDetail;
            closure_3.sendEvent(client, "sepa.redirect.mandate.approved");
            let obj = {
              last4: sepaDebitMandateDetail.last4,
              customerId: sepaDebitMandateDetail.merchantOrPartnerCustomerId,
              mandateType: sepaDebitMandateDetail.mandateType,
              bankReferenceToken: sepaDebitMandateDetail.bankReferenceToken,
            };
            assign(constants, obj);
            client = constants;
            const obj2 = {
              sepa_debit_account: {
                last_4: constants.last4,
                merchant_or_partner_customer_id: constants.customerId,
                bank_reference_token: constants.bankReferenceToken,
                mandate_type: constants.mandateType,
              },
              merchant_account_id: constants.merchantAccountId,
            };
            const requestResult = client.request({
              api: "clientApi",
              method: "post",
              endpoint: "payment_methods/sepa_debit_accounts",
              data: obj2,
            });
            const nextPromise = requestResult.then(function (nonce) {
              if (nonce.nonce) {
                const obj = { nonce: nonce.nonce, ibanLastFour: null, customerId: null, mandateType: null };
                ({ last4: obj.ibanLastFour, customerId: obj.customerId, mandateType: obj.mandateType } = closure_0);
                return obj;
              } else {
                const self = this;
                const self2 = this;
                const tmp3 = new client(constants.SEPA_TRANSACTION_FAILED);
                throw tmp3;
              }
            });
            return nextPromise.catch(() => {
              const tmp = new client(constants.SEPA_TRANSACTION_FAILED);
              throw tmp;
            });
          });
          const nextPromise1 = nextPromise.then((result) => {
            closure_3.sendEvent(client, "sepa.redirect.tokenization.success");
            return result;
          });
          return nextPromise1.catch(() => {
            closure_3.sendEvent(client, "sepa.redirect.handle-approval.failed");
            const tmp2 = new client(constants.SEPA_TRANSACTION_FAILED);
            throw tmp2;
          });
        },
      };
      module.exports = obj;
    },
    {
      "../../lib/analytics": 138,
      "../../lib/assign": 140,
      "../../lib/braintree-error": 143,
      "../../lib/frame-service/external": 158,
      "../../lib/snake-case-to-camel-case": 179,
      "../../lib/use-min": 181,
      "../shared/constants": 208,
      "../shared/errors": 209,
    },
  ];
  obj[205] = items204;
  const items205 = [
    (arg0, arg1, arg2) => {
      class SEPA {
        constructor(arg0) {
          obj = {};
          client = global.client;
          configuration = client.getConfiguration();
          obj._client = global.client;
          obj._assetsUrl = `${tmp.gatewayConfiguration.assetsUrl}/web/3.112.1`;
          obj._isDebug = configuration.isDebug;
          if (global.redirectUrl) {
            obj._returnUrl = global.redirectUrl;
            str3 = "?cancel=1";
            obj._cancelUrl = `${global.redirectUrl}?cancel=1`;
            flag = true;
            obj._isRedirectFlow = true;
          } else {
            str = "/html/redirect-frame.html?success=1";
            obj._returnUrl = `${obj._assetsUrl}/html/redirect-frame.html?success=1`;
            str2 = "/html/redirect-frame.html?cancel=1";
            obj._cancelUrl = `${obj._assetsUrl}/html/redirect-frame.html?cancel=1`;
          }
          if (global.tokenizePayload) {
            obj.tokenizePayload = global.tokenizePayload;
          }
          sendEventResult = closure_5.sendEvent(obj._client, "sepa.component.initialized");
          return;
        }
        tokenize(arg0) {
          self = this;
          closure_0 = global;
          self = this;
          if (global) {
            tmp2 = closure_4;
            tmp3 = closure_2;
            if (!closure_4(global, closure_2.REQUIRED_OPTIONS)) {
              MANDATE_TYPE_ENUM = tmp3.MANDATE_TYPE_ENUM;
              if (MANDATE_TYPE_ENUM.includes(global.mandateType)) {
                tmp12 = closure_3;
                mandate = closure_3.createMandate(self._client, tmp);
                nextPromise = mandate.then(() => {
                  /* body not rendered: F150601 */
                });
                if (self._isRedirectFlow) {
                  tmp14 = globalThis;
                  _Promise2 = Promise;
                  resolved = Promise.resolve();
                } else {
                  nextPromise1 = nextPromise.then(() => {
                    /* body not rendered: F150602 */
                  });
                  nextPromise2 = nextPromise1.then(() => {
                    /* body not rendered: F150603 */
                  });
                  resolved = nextPromise2.catch(() => {
                    /* body not rendered: F150604 */
                  });
                }
                rejectResult = resolved;
              } else {
                tmp4 = closure_5;
                str = "sepa.input-validation.invalid-mandate";
                sendEventResult = closure_5.sendEvent(self._client, "sepa.input-validation.invalid-mandate");
                tmp6 = globalThis;
                _Promise = Promise;
                tmp7 = closure_0;
                tmp8 = self;
                self2 = this;
                self3 = this;
                reject = Promise.reject;
                tmp9 = new closure_0(self.SEPA_INVALID_MANDATE_TYPE);
                tmp10 = tmp9;
                rejectResult = reject(tmp9);
              }
            }
            return rejectResult;
          }
          sendEventResult1 = closure_5.sendEvent(self._client, "sepa.input-validation.missing-options");
          reject2 = Promise.reject;
          tmp16 = new closure_0(self.SEPA_TOKENIZE_MISSING_REQUIRED_OPTION);
          rejectResult = reject2(tmp16);
          return;
        }
      }
      const globalResult = global("@braintree/wrap-promise");
      let closure_0 = global("../../lib/braintree-error");
      let closure_1 = global("../shared/errors");
      constants = global("../shared/constants");
      let closure_3 = global("./mandate");
      let closure_4 = global("../shared/has-missing-option");
      let closure_5 = global("../../lib/analytics");
      const assign = global("../../lib/assign").assign;
      module.exports = globalResult.wrapPrototype(SEPA);
    },
    {
      "../../lib/analytics": 138,
      "../../lib/assign": 140,
      "../../lib/braintree-error": 143,
      "../shared/constants": 208,
      "../shared/errors": 209,
      "../shared/has-missing-option": 210,
      "./mandate": 205,
      "@braintree/wrap-promise": 40,
    },
  ];
  obj[206] = items205;
  const items206 = [
    (arg0, arg1, arg2) => {
      let closure_0 = global("../lib/analytics");
      let closure_1 = global("./external/sepa");
      let closure_2 = global("../lib/create-assets-url");
      let closure_3 = global("../lib/create-deferred-client");
      let closure_4 = global("../lib/basic-component-verification");
      const globalResult = global("@braintree/wrap-promise");
      const parse = global("../lib/querystring").parse;
      const assign = global("../lib/assign").assign;
      let closure_7 = global("./external/mandate");
      let obj = {
        create: globalResult(function create(arg0) {
          closure_0 = arg0;
          const success = parse(window.location.href);
          let obj = { name: "SEPA", client: closure_0.client, authorization: closure_0.authorization };
          const verifyResult = closure_4.verify(obj);
          let nextPromise = verifyResult.then(() => {
            const obj = {
              authorization: closure_0.authorization,
              client: closure_0.client,
              debug: closure_0.debug,
              assetsUrl: closure_2.create(closure_0.authorization),
              name: "SEPA",
            };
            return closure_3.create(obj);
          });
          const nextPromise1 = nextPromise.then((client) => {
            closure_0.client = client;
            closure_0.sendEvent(client, "sepa.client.initialized");
            const tmp2 = new closure_1(closure_0);
            return tmp2;
          });
          return nextPromise1.then((result) => {
            let catchPromise;
            closure_0 = result;
            if (success.success) {
              if ("true" === success.success) {
                if (success.cart_id) {
                  closure_0 = assign(closure_0, success);
                  result = closure_7.handleApprovalForFullPageRedirect(closure_0.client, closure_0);
                  const nextPromise = result.then((tokenizePayload) => {
                    closure_0.tokenizePayload = tokenizePayload;
                    return closure_0;
                  });
                  catchPromise = nextPromise.catch((error) => {
                    console.error("Problem while finishing tokenizing: ", error);
                  });
                }
                return catchPromise;
              }
            }
            catchPromise = result;
            if (success.cancel) {
              closure_0.sendEvent(closure_0.client, "sepa.redirect.customer-canceled.failed");
              catchPromise = result;
            }
          });
        }),
        VERSION: "3.112.1",
      };
      module.exports = obj;
    },
    {
      "../lib/analytics": 138,
      "../lib/assign": 140,
      "../lib/basic-component-verification": 141,
      "../lib/create-assets-url": 148,
      "../lib/create-deferred-client": 150,
      "../lib/querystring": 177,
      "./external/mandate": 205,
      "./external/sepa": 206,
      "@braintree/wrap-promise": 40,
    },
  ];
  obj[207] = items206;
  const items207 = [
    (arg0, arg1, arg2) => {
      module.exports = {
        REQUIRED_OPTIONS: [
          "iban",
          "merchantAccountId",
          "mandateType",
          "customerId",
          "accountHolderName",
          "countryCode",
        ],
        BILLING_ADDRESS_OPTIONS: ["address_line_1", "address_line_2", "admin_area_1", "admin_area_2", "postal_code"],
        MANDATE_TYPE_ENUM: ["ONE_OFF", "RECURRENT"],
      };
    },
    {},
  ];
  obj[208] = items207;
  const items208 = [
    (arg0, arg1, arg2) => {
      const globalResult = global("../../lib/braintree-error");
      const obj = {
        SEPA_CREATE_MANDATE_FAILED: {
          type: globalResult.types.MERCHANT,
          code: "SEPA_CREATE_MANDATE_FAILED",
          message: "SEPA create mandate failed.",
          details: "create-mandate",
        },
        SEPA_CUSTOMER_CANCELED: {
          type: globalResult.types.CUSTOMER,
          code: "SEPA_CUSTOMER_CANCELED",
          message: "User canceled SEPA authorization",
          details: "customer-canceled",
        },
        SEPA_INVALID_MANDATE_TYPE: {
          type: globalResult.types.MERCHANT,
          code: "SEPA_INVALID_MANDATE_TYPE",
          message: "SEPA mandate type is invalid",
        },
        SEPA_TOKENIZATION_FAILED: {
          type: globalResult.types.UNKNOWN,
          code: "SEPA_TOKENIZATION_FAILED",
          message: "SEPA encountered a problem",
          details: "open-popup",
        },
        SEPA_TOKENIZE_MISSING_REQUIRED_OPTION: {
          type: globalResult.types.MERCHANT,
          code: "SEPA_TOKENIZE_MISSING_REQUIRED_OPTION",
          message: "Missing required option for tokenize.",
        },
        SEPA_TRANSACTION_FAILED: {
          type: globalResult.types.UNKNOWN,
          code: "SEPA_TRANSACTION_FAILED",
          message: "SEPA transaction failed",
          details: "handle-approval",
        },
      };
      module.exports = obj;
    },
    { "../../lib/braintree-error": 143 },
  ];
  obj[209] = items208;
  const items209 = [
    (arg0, arg1, arg2) => {
      module.exports = function hasMissingOption(arg0, arg1) {
        const arr = arg1 || [];
        let num = 0;
        if (0 < arr.length) {
          while (arg0.hasOwnProperty(arr[num])) {
            num = num + 1;
          }
          return true;
        }
        return false;
      };
    },
    {},
  ];
  obj[210] = items209;
  const items210 = [
    (arg0, arg1, arg2) => {
      class BaseFramework {
        constructor(arg0) {
          self = this;
          callResult = closure_5.call(self);
          ({ client: self._client, createPromise: self._createPromise } = global);
          self._createOptions = global;
          if (self._client) {
            _client = self._client;
            self._isDebug = _client.getConfiguration().isDebug;
            _client2 = self._client;
            self._assetsUrl = _client2.getConfiguration().gatewayConfiguration.assetsUrl;
          } else {
            tmp = globalThis;
            _Boolean = Boolean;
            self._isDebug = Boolean(global.isDebug);
            self._assetsUrl = global.assetsUrl;
          }
          self._assetsUrl = `${self._assetsUrl}/web/${c14}`;
          return;
        }
        _waitForClient() {
          self = this;
          if (this._client) {
            tmp2 = globalThis;
            _Promise = Promise;
            resolved = Promise.resolve();
          } else {
            _createPromise = self._createPromise;
            fn = () => {
              /* body not rendered: F150608 */
            };
            resolved = _createPromise.then(fn.bind(self));
          }
          return resolved;
        }
        setUpEventListeners() {
          tmp = new closure_2(closure_6.THREEDS_FRAMEWORK_METHOD_NOT_IMPLEMENTED);
          throw tmp;
        }
        verifyCard(arg0, arg1) {
          self = this;
          obj = module;
          self = this;
          if (!module) {
            obj = {};
          }
          result = self._checkForVerifyCardError(global, obj);
          if (result) {
            tmp4 = globalThis;
            _Promise = Promise;
            rejectResult = Promise.reject(result);
          } else {
            flag = true;
            self._verifyCardInProgress = true;
            result1 = self._formatVerifyCardOptions(global);
            closure_0 = result1;
            _formatLookupDataResult = self._formatLookupData(result1);
            nextPromise = _formatLookupDataResult.then(() => {
              /* body not rendered: F150609 */
            });
            nextPromise1 = nextPromise.then(() => {
              /* body not rendered: F150610 */
            });
            nextPromise2 = nextPromise1.then(() => {
              /* body not rendered: F150611 */
            });
            nextPromise3 = nextPromise2.then(() => {
              /* body not rendered: F150612 */
            });
            rejectResult = nextPromise3.catch(() => {
              /* body not rendered: F150613 */
            });
          }
          return rejectResult;
        }
        _checkForFrameworkSpecificVerifyCardErrors() {
          tmp = new closure_2(closure_6.THREEDS_FRAMEWORK_METHOD_NOT_IMPLEMENTED);
          throw tmp;
        }
        _presentChallenge() {
          tmp = new closure_2(closure_6.THREEDS_FRAMEWORK_METHOD_NOT_IMPLEMENTED);
          throw tmp;
        }
        prepareLookup() {
          tmp = new closure_2(closure_6.THREEDS_FRAMEWORK_METHOD_NOT_IMPLEMENTED);
          throw tmp;
        }
        _resetVerificationState() {
          obj = { _verifyCardInProgress: false, _verifyCardPromisePlus: null };
          if (typeof obj._reloadThreeDSecure === "function") {
            _reloadThreeDSecureResult = obj._reloadThreeDSecure();
          }
          return;
        }
        _performLookup(arg0, arg1) {
          closure_0 = module;
          self = this;
          closure_2 = `payment_methods/${global}/three_d_secure/lookup`;
          _waitForClientResult = this._waitForClient();
          return _waitForClientResult.then(() => {
            /* body not rendered: F150614 */
          });
        }
        _existsAndIsNumeric(arg0) {
          isArray = null == global;
          if (!isArray) {
            tmp2 = globalThis;
            _Array = Array;
            isArray = Array.isArray(global);
          }
          if (!isArray) {
            isArray = typeof global === "boolean";
          }
          if (!isArray) {
            tmp3 = typeof global === "string";
            if (typeof global === "string") {
              str = "";
              tmp3 = "" === global.trim();
            }
            isArray = tmp3;
          }
          if (!isArray) {
            tmp4 = globalThis;
            _isNaN = isNaN;
            _Number = Number;
            isArray = isNaN(Number(global));
          }
          return !isArray;
        }
        _checkForVerifyCardError(arg0, arg1) {
          self = this;
          if (true === this._verifyCardInProgress) {
            tmp6 = closure_2;
            tmp7 = closure_6;
            self4 = this;
            self5 = this;
            tmp2 = new closure_2(closure_6.THREEDS_AUTHENTICATION_IN_PROGRESS);
          } else {
            tmp8 = global;
            str = "a nonce";
            if (global.nonce) {
              if (!self._existsAndIsNumeric(global.amount)) {
                str = "an amount";
              }
            }
            if (!str) {
              tmp = module;
              str = self._checkForFrameworkSpecificVerifyCardErrors(global, module);
            }
            tmp2 = null;
            if (str) {
              tmp3 = closure_2;
              obj = { type: null, code: null, message: null };
              tmp4 = closure_6;
              obj.type = closure_6.THREEDS_MISSING_VERIFY_CARD_OPTION.type;
              obj.code = closure_6.THREEDS_MISSING_VERIFY_CARD_OPTION.code;
              str2 = "verifyCard options must include ";
              str3 = ".";
              obj.message = `verifyCard options must include ${str}.`;
              self2 = this;
              self3 = this;
              tmp5 = obj;
              tmp2 = new closure_2(obj);
            }
          }
          return tmp2;
        }
        initializeChallengeWithLookupResponse(arg0, arg1) {
          self = this;
          obj = module;
          self = this;
          if (!module) {
            obj = {};
          }
          self._lookupPaymentMethod = global.paymentMethod;
          _verifyCardPromisePlus = self._verifyCardPromisePlus;
          if (!_verifyCardPromisePlus) {
            tmp = closure_4;
            self2 = this;
            self3 = this;
            _verifyCardPromisePlus = new closure_4();
          }
          self._verifyCardPromisePlus = _verifyCardPromisePlus;
          result = self._handleLookupResponse(global, obj);
          prop = self._verifyCardPromisePlus;
          return prop.then(() => {
            /* body not rendered: F150615 */
          });
        }
        _handleLookupResponse(arg0, arg1) {
          acsUrl = global.lookup;
          _Boolean = Boolean;
          if (acsUrl) {
            acsUrl = global.lookup.acsUrl;
          }
          self = this;
          _BooleanResult = _Boolean(acsUrl);
          sendEventResult = closure_1.sendEvent(
            this._createPromise,
            `three-d-secure.verification-flow.challenge-presented.${String(tmp)}`,
          );
          if (_BooleanResult) {
            tmp5 = module;
            _presentChallengeResult = self._presentChallenge(global, module);
          } else {
            _formatAuthResponseResult = self._formatAuthResponse(global.paymentMethod, global.threeDSecureInfo);
            _formatAuthResponseResult.verificationDetails = global.threeDSecureInfo;
            _verifyCardPromisePlus = self._verifyCardPromisePlus;
            resolveResult = _verifyCardPromisePlus.resolve(_formatAuthResponseResult);
          }
          return;
        }
        _onLookupComplete(arg0) {
          obj = { _lookupPaymentMethod: global.paymentMethod };
          tmp = new closure_4();
          obj._verifyCardPromisePlus = tmp;
          return Promise.resolve(global);
        }
        _formatAuthResponse(arg0, arg1) {
          obj = {
            nonce: global.nonce,
            type: global.type,
            binData: global.binData,
            details: global.details,
            description: null,
            liabilityShifted: null,
            liabilityShiftPossible: null,
            threeDSecureInfo: null,
          };
          description = global.description;
          if (description) {
            str = global.description;
            str2 = " ";
            description = str.replace(/\+/g, " ");
          }
          obj.description = description;
          obj.liabilityShifted = module && module.liabilityShifted;
          obj.liabilityShiftPossible = module && module.liabilityShiftPossible;
          obj.threeDSecureInfo = global.threeDSecureInfo;
          return obj;
        }
        _formatVerifyCardOptions(arg0) {
          return assign({}, global);
        }
        _formatLookupData(arg0) {
          obj = { amount: global.amount };
          if (true === global.collectDeviceData) {
            tmp = globalThis;
            _window = window;
            obj.browserColorDepth = window.screen.colorDepth;
            _window2 = window;
            _navigator = window.navigator;
            obj.browserJavaEnabled = _navigator.javaEnabled();
            obj.browserJavascriptEnabled = true;
            _window3 = window;
            obj.browserLanguage = window.navigator.language;
            _window4 = window;
            obj.browserScreenHeight = window.screen.height;
            _window5 = window;
            obj.browserScreenWidth = window.screen.width;
            _Date = Date;
            self = this;
            self2 = this;
            date = new Date();
            tmp2 = date;
            obj.browserTimeZone = date.getTimezoneOffset();
            str = "Browser";
            obj.deviceChannel = "Browser";
          }
          return Promise.resolve(obj);
        }
        _handleV1AuthResponse(arg0) {
          self = this;
          parsed = JSON.parse(global.auth_response);
          if (parsed.success) {
            _verifyCardPromisePlus3 = self._verifyCardPromisePlus;
            resolveResult = _verifyCardPromisePlus3.resolve(
              self._formatAuthResponse(parsed.paymentMethod, parsed.threeDSecureInfo),
            );
          } else {
            if (parsed.threeDSecureInfo) {
              if (parsed.threeDSecureInfo.liabilityShiftPossible) {
                _verifyCardPromisePlus2 = self._verifyCardPromisePlus;
                resolveResult1 = _verifyCardPromisePlus2.resolve(
                  self._formatAuthResponse(self._lookupPaymentMethod, parsed.threeDSecureInfo),
                );
              }
            }
            _verifyCardPromisePlus = self._verifyCardPromisePlus;
            tmp2 = closure_2;
            obj = { type: null, code: "UNKNOWN_AUTH_RESPONSE", message: null };
            obj.type = closure_2.types.UNKNOWN;
            obj.message = parsed.error.message;
            self2 = this;
            self3 = this;
            tmp3 = obj;
            reject = _verifyCardPromisePlus.reject;
            tmp4 = new closure_2(obj);
            tmp5 = tmp4;
            rejectResult = reject(tmp4);
          }
          return;
        }
        cancelVerifyCard() {
          self = this;
          this._verifyCardInProgress = false;
          if (this._lookupPaymentMethod) {
            threeDSecureInfo = self._lookupPaymentMethod.threeDSecureInfo;
            liabilityShiftPossible = threeDSecureInfo;
            tmp7 = assign;
            _lookupPaymentMethod = self._lookupPaymentMethod;
            if (threeDSecureInfo) {
              liabilityShiftPossible = threeDSecureInfo.liabilityShiftPossible;
            }
            obj = { liabilityShiftPossible: null, liabilityShifted: null, verificationDetails: null };
            obj.liabilityShiftPossible = liabilityShiftPossible;
            obj.liabilityShifted = threeDSecureInfo && threeDSecureInfo.liabilityShifted;
            obj.verificationDetails = threeDSecureInfo && threeDSecureInfo.verificationDetails;
            tmp8 = globalThis;
            _Promise2 = Promise;
            resolved = Promise.resolve(tmp7({}, _lookupPaymentMethod, obj));
          } else {
            tmp = globalThis;
            _Promise = Promise;
            tmp2 = closure_2;
            tmp3 = closure_6;
            self2 = this;
            self3 = this;
            reject = Promise.reject;
            tmp4 = new closure_2(closure_6.THREEDS_NO_VERIFICATION_PAYLOAD);
            tmp5 = tmp4;
            resolved = reject(tmp4);
          }
          return resolved;
        }
        _setupV1Bus(arg0) {
          closure_0 = global;
          _client = this._client;
          closure_1 = _client.getConfiguration();
          str = window.location.href;
          closure_2 = str.split("#")[0];
          lookupResponse = global.lookupResponse;
          tmp = closure_10();
          obj = { channel: tmp, verifyDomain: lookupResponse };
          obj2 = new closure_8(obj);
          closure_4 = `${`${this._assetsUrl}/html/three-d-secure-authentication-complete-frame.html?channel=`}${encodeURIComponent(tmp)}&`;
          onResult = obj2.on(closure_13, () => {
            /* body not rendered: F150616 */
          });
          onResult1 = obj2.on(closure_11.AUTHENTICATION_COMPLETE, global.handleAuthResponse);
          return obj2;
        }
        _setupV1Iframe(arg0) {
          size = {
            src: `${`${this._assetsUrl}/html/three-d-secure-bank-frame`}${closure_12(this._isDebug)}.html?showLoader=${global.showLoader}`,
            height: 400,
            width: 400,
            name: `${closure_9.LANDING_FRAME_NAME}_${this._v1Bus.channel}`,
            title: "3D Secure Authorization Frame",
          };
          return closure_7(size);
        }
        _setupV1Elements(arg0) {
          this._v1Bus = this._setupV1Bus(global);
          this._v1Iframe = this._setupV1Iframe(global);
          return;
        }
        _teardownV1Elements() {
          self = this;
          if (this._v1Bus) {
            _v1Bus = self._v1Bus;
            teardownResult = _v1Bus.teardown();
            tmp2 = null;
            self._v1Bus = null;
          }
          tmp3 = self._v1Iframe && self._v1Iframe.parentNode;
          if (tmp3) {
            parentNode = self._v1Iframe.parentNode;
            removeChildResult = parentNode.removeChild(self._v1Iframe);
            tmp5 = null;
            self._v1Iframe = null;
          }
          if (self._onV1Keyup) {
            tmp6 = globalThis;
            _document = document;
            str = "keyup";
            removed = document.removeEventListener("keyup", self._onV1Keyup);
            tmp8 = null;
            self._onV1Keyup = null;
          }
          return;
        }
        teardown() {
          sendEventResult = closure_1.sendEvent(this._createPromise, "three-d-secure.teardown-completed");
          _teardownV1ElementsResult = this._teardownV1Elements();
          return Promise.resolve();
        }
      }
      const assign = global("../../../lib/assign").assign;
      let closure_1 = global("../../../lib/analytics");
      const types = global("../../../lib/braintree-error");
      let closure_3 = global("../../../lib/is-verified-domain");
      const globalResult = global("@braintree/extended-promise");
      const globalResult1 = global("@braintree/event-emitter");
      constants = global("../../shared/errors");
      let closure_7 = global("@braintree/iframer");
      let closure_8 = global("framebus");
      const constants2 = global("../../shared/constants");
      let closure_10 = global("@braintree/uuid");
      const constants3 = global("../../shared/events");
      closure_12 = global("../../../lib/use-min");
      let closure_13 = global("../../../lib/constants").BUS_CONFIGURATION_REQUEST_EVENT;
      let c14 = "3.112.1";
      globalResult.suppressUnhandledPromiseMessage = true;
      const child = globalResult1.createChild(BaseFramework);
      module.exports = BaseFramework;
    },
    {
      "../../../lib/analytics": 138,
      "../../../lib/assign": 140,
      "../../../lib/braintree-error": 143,
      "../../../lib/constants": 145,
      "../../../lib/is-verified-domain": 173,
      "../../../lib/use-min": 181,
      "../../shared/constants": 220,
      "../../shared/errors": 221,
      "../../shared/events": 222,
      "@braintree/event-emitter": 30,
      "@braintree/extended-promise": 31,
      "@braintree/iframer": 32,
      "@braintree/uuid": 36,
      framebus: 50,
    },
  ];
  obj[211] = items210;
  const items211 = [
    (arg0, arg1, arg2) => {
      class Bootstrap3ModalFramework {
        constructor(arg0) {
          callResult = closure_0.call(this, global);
          return;
        }
        _createV1IframeModalElement(arg0) {
          element = document.createElement("div");
          element.innerHTML =
            '<div class="modal fade in" tabindex="-1" role="dialog" aria-labelledby="CCAFrameModal-label" aria-hidden="true" style="display: block;"><div class="modal-dialog" style="width:440px;z-index:999999;"><div class="modal-content"><div class="modal-body" data-braintree-v1-fallback-iframe-container><button type="button" data-braintree-v1-fallback-close-button class="close" data-dismiss="modal" aria-hidden="true">\u00D7</button></div></div></div><div data-braintree-v1-fallback-backdrop style="position: fixed;cursor: pointer;z-index: 999998;top: 0;left: 0;width: 100%;height: 100%;"></div></div>';
          element1 = element.querySelector("[data-braintree-v1-fallback-iframe-container]");
          appendChildResult = element1.appendChild(global);
          return element;
        }
        _createCardinalConfigurationOptions(arg0) {
          _createCardinalConfigurationOptions = closure_0.prototype._createCardinalConfigurationOptions;
          callResult = _createCardinalConfigurationOptions.call(this, global);
          callResult.payment.framework = "bootstrap3";
          return callResult;
        }
      }
      const globalResult = global("./songbird");
      const fn = globalResult;
      Bootstrap3ModalFramework.prototype = Object.create(globalResult.prototype, { constructor: globalResult });
      module.exports = Bootstrap3ModalFramework;
    },
    { "./songbird": 217 },
  ];
  obj[212] = items211;
  const items212 = [
    (arg0, arg1, arg2) => {
      class CardinalModalFramework {
        constructor(arg0) {
          callResult = closure_0.call(this, global);
          return;
        }
        _createV1IframeModalElement(arg0) {
          self = this;
          element = document.createElement("div");
          displayExitButton = this._createOptions;
          _Boolean = Boolean;
          if (displayExitButton) {
            displayExitButton = self._createOptions.cardinalSDKConfig;
          }
          if (displayExitButton) {
            displayExitButton = self._createOptions.cardinalSDKConfig.payment;
          }
          if (displayExitButton) {
            displayExitButton = self._createOptions.cardinalSDKConfig.payment.displayExitButton;
          }
          element.innerHTML =
            '<div style="position: fixed;z-index: 999999;top: 50%;left: 50%;padding: 24px 20px;transform: translate(-50%,-50%);border-radius: 2px;background: #fff;max-width: 100%;overflow: auto;"><div><button data-braintree-v1-fallback-close-button style="font-family: Helvetica,Arial,sans-serif;font-size: 25px;line-height: 12px;position: absolute;top: 2px;right: 0px;cursor: pointer;color: #999;border: 0;outline: none;background: none;" onMouseOver="this.style.color=\'#000\'" onMouseOut="this.style.color=\'#999\'">\u00D7</button></div><div data-braintree-v1-fallback-iframe-container style="height: 400px;"></div></div><div data-braintree-v1-fallback-backdrop style="position: fixed;z-index: 999998;cursor: pointer;top: 0;left: 0;width: 100%;height: 100%;transition: opacity 1ms ease;background: rgba(0,0,0,.6);"></div>';
          if (!_Boolean(displayExitButton)) {
            str = "[data-braintree-v1-fallback-close-button]";
            str2 = "none";
            element.querySelector("[data-braintree-v1-fallback-close-button]").style.display = "none";
          }
          element1 = element.querySelector("[data-braintree-v1-fallback-iframe-container]");
          appendChildResult = element1.appendChild(global);
          return element;
        }
      }
      const globalResult = global("./songbird");
      const fn = globalResult;
      CardinalModalFramework.prototype = Object.create(globalResult.prototype, { constructor: globalResult });
      module.exports = CardinalModalFramework;
    },
    { "./songbird": 217 },
  ];
  obj[213] = items212;
  const items213 = [
    (arg0, arg1, arg2) => {
      const globalResult = global("./legacy");
      const globalResult1 = global("./cardinal-modal");
      const globalResult2 = global("./bootstrap3-modal");
      module.exports = {
        legacy: globalResult,
        "cardinal-modal": globalResult1,
        "bootstrap3-modal": globalResult2,
        "inline-iframe": global("./inline-iframe"),
      };
      ({
        legacy: globalResult,
        "cardinal-modal": globalResult1,
        "bootstrap3-modal": globalResult2,
        "inline-iframe": global("./inline-iframe"),
      });
    },
    { "./bootstrap3-modal": 212, "./cardinal-modal": 213, "./inline-iframe": 215, "./legacy": 216 },
  ];
  obj[214] = items213;
  const items214 = [
    (arg0, arg1, arg2) => {
      class InlineIframeFramework {
        constructor(arg0) {
          callResult = closure_0.call(this, global);
          return;
        }
        setUpEventListeners(arg0) {
          self = this;
          closure_0 = global;
          setUpEventListeners = closure_0.prototype.setUpEventListeners;
          callResult = setUpEventListeners.call(self, global);
          onResult = self.on(InlineIframeFramework.events.AUTHENTICATION_IFRAME_AVAILABLE, () => {
            /* body not rendered: F150617 */
          });
          return;
        }
        _createCardinalConfigurationOptions(arg0) {
          _createCardinalConfigurationOptions = closure_0.prototype._createCardinalConfigurationOptions;
          callResult = _createCardinalConfigurationOptions.call(this, global);
          callResult.payment.framework = "inline";
          return callResult;
        }
        _addV1IframeToPage() {
          obj = { element: this._v1Modal };
          _emitResult = this._emit(InlineIframeFramework.events.AUTHENTICATION_IFRAME_AVAILABLE, obj, function () {
            /* body not rendered: F150618 */
          });
          return;
        }
        _setupFrameworkSpecificListeners() {
          ({ _onInlineSetup, setCardinalListener } = this);
          setCardinalListenerResult = setCardinalListener("ui.inline.setup", _onInlineSetup.bind(this));
          return;
        }
        _onInlineSetup(arg0, arg1, arg2, arg3) {
          closure_0 = exports;
          flag = true;
          if (global) {
            flag = true;
            if (module) {
              str = "CCA";
              tmp = "CCA" !== module.paymentType;
              if (!tmp) {
                str2 = "suppress";
                tmp2 = "suppress" !== module.data.mode;
                if (tmp2) {
                  str3 = "static";
                  tmp2 = "static" !== module.data.mode;
                }
                tmp = tmp2;
              }
              if (tmp) {
                flag = true;
              }
            }
          }
          if (flag) {
            tmp7 = arg3;
            tmp8 = closure_1;
            tmp9 = closure_2;
            self = this;
            self2 = this;
            tmp10 = new closure_1(closure_2.THREEDS_INLINE_IFRAME_DETAILS_INCORRECT);
            tmp11 = tmp10;
            tmp12 = arg3(tmp10);
          } else {
            tmp3 = globalThis;
            _document = document;
            str4 = "div";
            element = document.createElement("div");
            element.innerHTML = global;
            str5 = "suppress";
            if ("suppress" === module.data.mode) {
              str7 = "none";
              element.style.display = "none";
              _document2 = document;
              body = document.body;
              appendChildResult = body.appendChild(element);
              tmp6 = exports();
            } else {
              str6 = "static";
              if ("static" === module.data.mode) {
                self3 = this;
                tmp13 = InlineIframeFramework;
                obj = { element: null };
                obj.element = element;
                _emitResult = this._emit(InlineIframeFramework.events.AUTHENTICATION_IFRAME_AVAILABLE, obj, () => {
                  /* body not rendered: F150619 */
                });
              }
            }
          }
          return;
        }
      }
      const globalResult = global("./songbird");
      const fn = globalResult;
      let closure_1 = global("../../../lib/braintree-error");
      constants = global("../../shared/errors");
      const globalResult1 = global("../../../lib/enumerate");
      InlineIframeFramework.prototype = Object.create(globalResult.prototype, { constructor: globalResult });
      InlineIframeFramework.events = globalResult1(["AUTHENTICATION_IFRAME_AVAILABLE"], "inline-iframe-framework:");
      module.exports = InlineIframeFramework;
    },
    {
      "../../../lib/braintree-error": 143,
      "../../../lib/enumerate": 153,
      "../../shared/errors": 221,
      "./songbird": 217,
    },
  ];
  obj[215] = items214;
  const items215 = [
    (arg0, arg1, arg2) => {
      class LegacyFramework {
        constructor(arg0) {
          callResult = closure_0.call(this, global);
          return;
        }
        setUpEventListeners() {
          return;
        }
        transformV1CustomerBillingAddress(arg0) {
          global.billingAddress.line1 = global.billingAddress.streetAddress;
          global.billingAddress.line2 = global.billingAddress.extendedAddress;
          global.billingAddress.city = global.billingAddress.locality;
          global.billingAddress.state = global.billingAddress.region;
          global.billingAddress.countryCode = global.billingAddress.countryCodeAlpha2;
          delete global.billingAddress["streetAddress"];
          delete global.billingAddress["extendedAddress"];
          delete global.billingAddress["locality"];
          delete global.billingAddress["region"];
          delete global.billingAddress["countryCodeAlpha2"];
          return global;
        }
        _createIframe(arg0) {
          closure_0 = global;
          self = this;
          obj = {
            nonce: global.nonce,
            lookupResponse: global.lookupResponse,
            showLoader: global.showLoader,
            handleAuthResponse() {
              /* body not rendered: F150620 */
            },
          };
          _setupV1ElementsResult = this._setupV1Elements(obj);
          return this._v1Iframe;
        }
        _handleAuthResponse(arg0, arg1) {
          closure_0 = global;
          _v1Bus = this._v1Bus;
          teardownResult = _v1Bus.teardown();
          removeFrameResult = module.removeFrame();
          fn = () => {
            /* body not rendered: F150621 */
          };
          tmp3 = closure_1(fn.bind(this))();
          return;
        }
        _checkForFrameworkSpecificVerifyCardErrors(arg0) {
          str = "an addFrame function";
          if (typeof global.addFrame === "function") {
            if (typeof global.removeFrame !== "function") {
              str = "a removeFrame function";
            }
          }
          return str;
        }
        _formatVerifyCardOptions(arg0) {
          _formatVerifyCardOptions = closure_0.prototype._formatVerifyCardOptions;
          callResult = _formatVerifyCardOptions.call(this, global);
          callResult.addFrame = closure_1(global.addFrame);
          callResult.removeFrame = closure_1(global.removeFrame);
          callResult.showLoader = false !== global.showLoader;
          return callResult;
        }
        _formatLookupData(arg0) {
          closure_0 = global;
          self = this;
          _formatLookupData = closure_0.prototype._formatLookupData;
          callResult = _formatLookupData.call(this, global);
          return callResult.then(() => {
            /* body not rendered: F150622 */
          });
        }
        _presentChallenge(arg0, arg1) {
          obj = {
            showLoader: module.showLoader,
            lookupResponse: global.lookup,
            nonce: global.paymentMethod.nonce,
            removeFrame: module.removeFrame,
          };
          addFrameResult = module.addFrame(null, this._createIframe(obj));
          return;
        }
      }
      const globalResult = global("./base");
      let fn = globalResult;
      let closure_1 = global("../../../lib/deferred");
      let obj = { constructor: LegacyFramework };
      LegacyFramework.prototype = Object.create(globalResult.prototype, obj);
      module.exports = LegacyFramework;
    },
    { "../../../lib/deferred": 151, "./base": 211 },
  ];
  obj[216] = items215;
  const items216 = [
    (arg0, arg1, arg2) => {
      let constants2;
      class SongbirdFramework {
        constructor(arg0) {
          self = this;
          callResult = closure_0.call(self, global);
          self._songbirdInitFailed = false;
          obj = { requestedThreeDSecureVersion: "2", sdkVersion: `${PLATFORM}/3.112.1` };
          self._clientMetadata = obj;
          self.originalSetupOptions = global;
          tmp = new closure_9();
          self._getDfReferenceIdPromisePlus = tmp;
          setupSongbirdResult = self.setupSongbird(global);
          self._cardinalEvents = [];
          return;
        }
        setUpEventListeners(arg0) {
          closure_0 = global;
          onResult = this.on(SongbirdFramework.events.LOOKUP_COMPLETE, () => {
            /* body not rendered: F150623 */
          });
          onResult1 = this.on(SongbirdFramework.events.CUSTOMER_CANCELED, () => {
            /* body not rendered: F150624 */
          });
          onResult2 = this.on(SongbirdFramework.events["UI.CLOSE"], () => {
            /* body not rendered: F150625 */
          });
          onResult3 = this.on(SongbirdFramework.events["UI.RENDER"], () => {
            /* body not rendered: F150626 */
          });
          onResult4 = this.on(SongbirdFramework.events["UI.RENDERHIDDEN"], () => {
            /* body not rendered: F150627 */
          });
          onResult5 = this.on(SongbirdFramework.events["UI.LOADING.CLOSE"], () => {
            /* body not rendered: F150628 */
          });
          onResult6 = this.on(SongbirdFramework.events["UI.LOADING.RENDER"], () => {
            /* body not rendered: F150629 */
          });
          return;
        }
        prepareLookup(arg0) {
          closure_0 = global;
          closure_1 = assign({}, global);
          self = this;
          dfReferenceId = this.getDfReferenceId();
          nextPromise = dfReferenceId.then(() => {
            /* body not rendered: F150630 */
          });
          nextPromise1 = nextPromise.then(() => {
            /* body not rendered: F150631 */
          });
          catchPromise = nextPromise1.catch(function () {
            /* body not rendered: F150632 */
          });
          nextPromise2 = catchPromise.then(() => {
            /* body not rendered: F150633 */
          });
          return nextPromise2.then(() => {
            /* body not rendered: F150634 */
          });
        }
        initializeChallengeWithLookupResponse(arg0, arg1) {
          closure_0 = global;
          closure_1 = module;
          setupSongbirdResult = this.setupSongbird();
          fn = () => {
            /* body not rendered: F150635 */
          };
          return setupSongbirdResult.then(fn.bind(this));
        }
        handleSongbirdError(arg0) {
          this._songbirdInitFailed = true;
          result = this._removeSongbirdListeners();
          sendEventResult = closure_5.sendEvent(
            this._createPromise,
            `three-d-secure.cardinal-sdk.songbird-error.${global}`,
          );
          if (this._songbirdPromise) {
            _songbirdPromise = this._songbirdPromise;
            resolveResult = _songbirdPromise.resolve();
          }
          return;
        }
        _triggerCardinalBinProcess(arg0) {
          self = this;
          closure_1 = Date.now();
          Cardinal = window.Cardinal;
          triggerResult = Cardinal.trigger("bin.process", global);
          return triggerResult.then(() => {
            /* body not rendered: F150636 */
          });
        }
        transformBillingAddress(arg0, arg1) {
          tmp = module;
          if (tmp) {
            ({
              streetAddress: global.billingLine1,
              extendedAddress: global.billingLine2,
              line3: global.billingLine3,
              locality: global.billingCity,
              region: global.billingState,
              postalCode: global.billingPostalCode,
              countryCodeAlpha2: global.billingCountryCode,
              phoneNumber: global.billingPhoneNumber,
              givenName: global.billingGivenName,
              surname: global.billingSurname,
            } = module);
          }
          return global;
        }
        transformShippingAddress(arg0) {
          shippingAddress = global.shippingAddress;
          if (shippingAddress) {
            ({
              streetAddress: global.shippingLine1,
              extendedAddress: global.shippingLine2,
              line3: global.shippingLine3,
              locality: global.shippingCity,
              region: global.shippingState,
              postalCode: global.shippingPostalCode,
              countryCodeAlpha2: global.shippingCountryCode,
            } = shippingAddress);
            delete tmp["shippingAddress"];
          }
          return global;
        }
        _createV1IframeModalElement(arg0) {
          element = document.createElement("div");
          element.innerHTML = '<div data-braintree-v1-fallback-iframe-container="true" style="height: 400px;"></div>';
          element1 = element.querySelector('[data-braintree-v1-fallback-iframe-container="true"]');
          appendChildResult = element1.appendChild(global);
          return element;
        }
        _createV1IframeModal(arg0) {
          closeHandler = function closeHandler() {
            /* body not rendered: F150637 */
          };
          result = this._createV1IframeModalElement(global);
          closure_0 = result;
          element = result.querySelector("[data-braintree-v1-fallback-close-button]");
          element1 = result.querySelector("[data-braintree-v1-fallback-backdrop]");
          self = this;
          this._onV1Keyup = function _onV1Keyup() {
            /* body not rendered: F150638 */
          };
          if (element) {
            str = "click";
            listener = element.addEventListener("click", closeHandler);
          }
          if (element1) {
            str2 = "click";
            listener1 = element1.addEventListener("click", closeHandler);
          }
          listener2 = document.addEventListener("keyup", this._onV1Keyup);
          return result;
        }
        _addV1IframeToPage() {
          body = document.body;
          appendChildResult = body.appendChild(this._v1Modal);
          return;
        }
        setupSongbird(arg0) {
          self = this;
          obj = global;
          closure_0 = global;
          self = this;
          closure_2 = Date.now();
          if (!this._songbirdPromise) {
            if (!obj) {
              obj = {};
            }
            closure_0 = obj;
            tmp = closure_9;
            self2 = this;
            self3 = this;
            tmp2 = new closure_9();
            tmp3 = tmp2;
            self._songbirdPromise = tmp2;
            str = "reason-unknown";
            self._v2SetupFailureReason = "reason-unknown";
            _loadCardinalScriptResult = self._loadCardinalScript(obj);
            nextPromise = _loadCardinalScriptResult.then(() => {
              /* body not rendered: F150639 */
            });
            catchPromise = nextPromise.catch(() => {
              /* body not rendered: F150640 */
            });
          }
          return self._songbirdPromise;
        }
        _configureCardinalSdk(arg0) {
          closure_0 = global;
          self = this;
          _waitForClientResult = this._waitForClient();
          nextPromise = _waitForClientResult.then(() => {
            /* body not rendered: F150641 */
          });
          nextPromise1 = nextPromise.then(() => {
            /* body not rendered: F150642 */
          });
          return nextPromise1.catch(() => {
            /* body not rendered: F150643 */
          });
        }
        setCardinalListener(arg0, arg1) {
          _cardinalEvents = this._cardinalEvents;
          arr1 = _cardinalEvents.push(global);
          Cardinal = window.Cardinal;
          onResult = Cardinal.on(global, module);
          return;
        }
        _setupFrameworkSpecificListeners() {
          return;
        }
        _createCardinalConfigurationOptions(arg0) {
          tmp = global.cardinalSDKConfig || {};
          obj = tmp.payment || {};
          tmp2 = !tmp.logging && global.loggingEnabled;
          if (tmp2) {
            tmp.logging = { level: "verbose" };
          }
          tmp.payment = {};
          if (obj.hasOwnProperty("displayLoading")) {
            tmp.payment.displayLoading = obj.displayLoading;
          }
          if (obj.hasOwnProperty("displayExitButton")) {
            tmp.payment.displayExitButton = obj.displayExitButton;
          }
          return tmp;
        }
        _loadCardinalScript(arg0) {
          closure_0 = global;
          self = this;
          _waitForClientResult = this._waitForClient();
          nextPromise = _waitForClientResult.then(() => {
            /* body not rendered: F150644 */
          });
          return nextPromise.catch(() => {
            /* body not rendered: F150645 */
          });
        }
        _getCardinalScriptSource() {
          _client = this._client;
          gatewayConfiguration = _client.getConfiguration().gatewayConfiguration;
          if (gatewayConfiguration) {
            str = "production";
            if ("production" === gatewayConfiguration.environment) {
              tmp = closure_8;
              sandbox = closure_8.CARDINAL_SCRIPT_SOURCE.production;
            }
            return sandbox;
          }
          sandbox = closure_8.CARDINAL_SCRIPT_SOURCE.sandbox;
          return;
        }
        _createPaymentsSetupCompleteCallback() {
          self = this;
          return () => {
            /* body not rendered: F150646 */
          };
        }
        getDfReferenceId() {
          return this._getDfReferenceIdPromisePlus;
        }
        _performJWTValidation(arg0, arg1) {
          self = this;
          closure_0 = global;
          closure_1 = module;
          self = this;
          nonce = this._lookupPaymentMethod.nonce;
          closure_4 = `payment_methods/${nonce}/three_d_secure/authenticate_from_jwt`;
          tmp = global && global.Payment && global.Payment.ExtendedData && global.Payment.ExtendedData.ChallengeCancel;
          if (tmp) {
            tmp2 = closure_5;
            str = "three-d-secure.verification-flow.cardinal-sdk.cancel-code.";
            sendEventResult = closure_5.sendEvent(
              self._createPromise,
              `three-d-secure.verification-flow.cardinal-sdk.cancel-code.${tmp}`,
            );
            str2 = "01";
            if ("01" === tmp) {
              tmp4 = SongbirdFramework;
              _emitResult = self._emit(SongbirdFramework.events.CUSTOMER_CANCELED);
            }
          }
          sendEventResult1 = closure_5.sendEvent(
            self._createPromise,
            "three-d-secure.verification-flow.upgrade-payment-method.started",
          );
          _waitForClientResult = self._waitForClient();
          nextPromise = _waitForClientResult.then(() => {
            /* body not rendered: F150647 */
          });
          nextPromise1 = nextPromise.then(() => {
            /* body not rendered: F150648 */
          });
          return nextPromise1.catch(() => {
            /* body not rendered: F150649 */
          });
        }
        _createPaymentsValidatedCallback() {
          self = this;
          return () => {
            /* body not rendered: F150650 */
          };
        }
        _checkForVerifyCardError(arg0, arg1) {
          if (global.bin) {
            tmp5 = module;
            tmp6 = closure_0;
            _checkForVerifyCardError = closure_0.prototype._checkForVerifyCardError;
            callResult = _checkForVerifyCardError.call(this, global, module);
          } else {
            tmp = closure_3;
            obj = { type: null, code: null, message: "verifyCard options must include a BIN." };
            tmp2 = closure_7;
            obj.type = closure_7.THREEDS_MISSING_VERIFY_CARD_OPTION.type;
            obj.code = closure_7.THREEDS_MISSING_VERIFY_CARD_OPTION.code;
            self = this;
            self2 = this;
            tmp3 = obj;
            callResult = new closure_3(obj);
          }
          return callResult;
        }
        _checkForFrameworkSpecificVerifyCardErrors(arg0, arg1) {
          ignoreOnLookupCompleteRequirement = typeof global.onLookupComplete === "function";
          if (!ignoreOnLookupCompleteRequirement) {
            tmp = module;
            ignoreOnLookupCompleteRequirement = module.ignoreOnLookupCompleteRequirement;
          }
          str = undefined;
          if (!ignoreOnLookupCompleteRequirement) {
            str = "an onLookupComplete function";
          }
          return str;
        }
        _formatVerifyCardOptions(arg0) {
          self = this;
          _formatVerifyCardOptions = closure_0.prototype._formatVerifyCardOptions;
          callResult = _formatVerifyCardOptions.call(self, global);
          tmp2 = callResult.additionalInformation || {};
          result = self.transformShippingAddress(self.transformBillingAddress(tmp2, global.billingAddress));
          if (global.onLookupComplete) {
            tmp4 = closure_2;
            callResult.onLookupComplete = closure_2(global.onLookupComplete);
          }
          if (global.email) {
            result.email = global.email;
          }
          if (global.mobilePhoneNumber) {
            result.mobilePhoneNumber = global.mobilePhoneNumber;
          }
          callResult.additionalInformation = result;
          return callResult;
        }
        _onLookupComplete(arg0, arg1) {
          closure_0 = module;
          self = this;
          _onLookupComplete = closure_0.prototype._onLookupComplete;
          callResult = _onLookupComplete.call(this, global);
          return callResult.then(() => {
            /* body not rendered: F150651 */
          });
        }
        _presentChallenge(arg0) {
          tmp = !this._songbirdInitFailed && global.lookup.transactionId;
          if (tmp) {
            tmp2 = globalThis;
            _window = window;
            Cardinal = window.Cardinal;
            obj = { AcsUrl: null, Payload: null };
            obj.AcsUrl = global.lookup.acsUrl;
            obj.Payload = global.lookup.pareq;
            obj1 = { OrderDetails: null };
            obj4 = { TransactionId: null };
            obj4.TransactionId = global.lookup.transactionId;
            obj1.OrderDetails = obj4;
            str = "cca";
            continueResult = Cardinal.continue("cca", obj, obj1);
          }
          return;
        }
        _formatLookupData(arg0) {
          closure_0 = global;
          self = this;
          _formatLookupData = closure_0.prototype._formatLookupData;
          callResult = _formatLookupData.call(this, global);
          return callResult.then(() => {
            /* body not rendered: F150652 */
          });
        }
        cancelVerifyCard(arg0) {
          closure_0 = global;
          self = this;
          cancelVerifyCard = closure_0.prototype.cancelVerifyCard;
          callResult = cancelVerifyCard.call(this);
          return callResult.then(() => {
            /* body not rendered: F150653 */
          });
        }
        _removeSongbirdListeners() {
          _cardinalEvents = this._cardinalEvents;
          item = _cardinalEvents.forEach(() => {
            /* body not rendered: F150654 */
          });
          this._cardinalEvents = [];
          return;
        }
        teardown() {
          self = this;
          if (window.Cardinal) {
            result = self._removeSongbirdListeners();
          }
          teardown = closure_0.prototype.teardown;
          return teardown.call(self);
        }
        _reloadThreeDSecure() {
          self = this;
          closure_1 = Date.now();
          teardownResult = this.teardown();
          return teardownResult.then(() => {
            /* body not rendered: F150655 */
          });
        }
      }
      const globalResult = global("./base");
      let fn = globalResult;
      const assign = global("../../../lib/assign").assign;
      let closure_2 = global("../../../lib/deferred");
      let closure_3 = global("../../../lib/braintree-error");
      let closure_4 = global("../../../lib/convert-to-braintree-error");
      let closure_5 = global("../../../lib/analytics");
      let closure_6 = global("../../../lib/assets");
      constants = global("../../shared/errors");
      const globalResult1 = global("../../../lib/enumerate");
      query = global("../../shared/constants");
      const globalResult2 = global("@braintree/extended-promise");
      const INTEGRATION_TIMEOUT_MS = global("../../../lib/constants").INTEGRATION_TIMEOUT_MS;
      const PLATFORM = global("../../../lib/constants").PLATFORM;
      closure_12 = ["ui.close", "ui.render", "ui.renderHidden", "ui.loading.close", "ui.loading.render"];
      let closure_13 = ["low_value", "transaction_risk_analysis"];
      globalResult2.suppressUnhandledPromiseMessage = true;
      let obj = { constructor: SongbirdFramework };
      SongbirdFramework.prototype = Object.create(globalResult.prototype, obj);
      SongbirdFramework.events = globalResult1(
        [
          "LOOKUP_COMPLETE",
          "CUSTOMER_CANCELED",
          "UI.CLOSE",
          "UI.RENDER",
          "UI.RENDERHIDDEN",
          "UI.LOADING.CLOSE",
          "UI.LOADING.RENDER",
        ],
        "songbird-framework:",
      );
      module.exports = SongbirdFramework;
    },
    {
      "../../../lib/analytics": 138,
      "../../../lib/assets": 139,
      "../../../lib/assign": 140,
      "../../../lib/braintree-error": 143,
      "../../../lib/constants": 145,
      "../../../lib/convert-to-braintree-error": 147,
      "../../../lib/deferred": 151,
      "../../../lib/enumerate": 153,
      "../../shared/constants": 220,
      "../../shared/errors": 221,
      "./base": 211,
      "@braintree/extended-promise": 31,
    },
  ];
  obj[217] = items216;
  const items217 = [
    (arg0, arg1, arg2) => {
      let closure_0;
      class ThreeDSecure {
        constructor(arg0) {
          self = this;
          self = this;
          tmp = closure_3[global.framework];
          callResult = closure_2.call(self);
          tmp1 = new tmp(global);
          self._framework = tmp1;
          _framework = self._framework;
          setUpEventListenersResult = _framework.setUpEventListeners(() => {
            /* body not rendered: F150656 */
          });
          return;
        }
        verifyCard(arg0) {
          obj = undefined;
          if (this.hasListener("lookup-complete")) {
            obj = { ignoreOnLookupCompleteRequirement: true };
          }
          _framework = this._framework;
          return _framework.verifyCard(global, obj);
        }
        initializeChallengeWithLookupResponse(arg0) {
          parsed = global;
          if (typeof global === "string") {
            tmp2 = globalThis;
            _JSON = JSON;
            parsed = JSON.parse(global);
          }
          _framework = this._framework;
          return _framework.initializeChallengeWithLookupResponse(parsed);
        }
        prepareLookup(arg0) {
          _framework = this._framework;
          prepareLookupResult = _framework.prepareLookup(global);
          return prepareLookupResult.then(() => {
            /* body not rendered: F150657 */
          });
        }
        cancelVerifyCard() {
          _framework = this._framework;
          return _framework.cancelVerifyCard();
        }
        teardown() {
          obj = closure_0(ThreeDSecure.prototype);
          tmp = closure_1(this, obj.concat(closure_0(closure_2.prototype)));
          _framework = this._framework;
          return _framework.teardown();
        }
      }
      const globalResult = global("@braintree/wrap-promise");
      handler = global("../../lib/methods");
      let closure_1 = global("../../lib/convert-methods-to-error");
      const globalResult1 = global("@braintree/event-emitter");
      let closure_3 = global("./frameworks");
      const child = globalResult1.createChild(ThreeDSecure);
      module.exports = globalResult.wrapPrototype(ThreeDSecure);
    },
    {
      "../../lib/convert-methods-to-error": 146,
      "../../lib/methods": 175,
      "./frameworks": 214,
      "@braintree/event-emitter": 30,
      "@braintree/wrap-promise": 40,
    },
  ];
  obj[218] = items217;
  const items218 = [
    (arg0, arg1, arg2) => {
      let closure_0 = global("./external/three-d-secure");
      const isHTTPS = global("../lib/is-https").isHTTPS;
      let closure_2 = global("../lib/basic-component-verification");
      let closure_3 = global("../lib/create-deferred-client");
      let closure_4 = global("../lib/create-assets-url");
      let closure_5 = global("../lib/braintree-error");
      let closure_6 = global("../lib/analytics");
      constants = global("./shared/errors");
      let obj = {
        create: global("@braintree/wrap-promise")(function create(version) {
          let str = version.version;
          const _String = String;
          if (!str) {
            str = "";
          }
          const _StringResult = _String(str);
          if (_StringResult) {
            if ("1" !== _StringResult) {
              if ("2" !== _StringResult) {
                if ("2-cardinal-modal" !== _StringResult) {
                  if ("2-bootstrap3-modal" === _StringResult) {
                    let str3 = "bootstrap3-modal";
                  } else {
                    str3 = "inline-iframe";
                    if ("2-inline-iframe" !== _StringResult) {
                      let obj = {
                        code: constants.THREEDS_UNRECOGNIZED_VERSION.code,
                        type: constants.THREEDS_UNRECOGNIZED_VERSION.type,
                        message: `Version \`${version.version}\` is not a recognized version. You may need to update the version of your Braintree SDK to support this version.`,
                      };
                      let self = this;
                      let self2 = this;
                      const tmp5 = new closure_5(obj);
                      throw tmp5;
                    }
                  }
                }
                const obj3 = { name: "3D Secure", client: null, authorization: null };
                ({ client: obj2.client, authorization: obj2.authorization } = version);
                const verifyResult = closure_2.verify(obj3);
                return verifyResult.then(() => {
                  const obj2 = closure_1_4.create(version.authorization);
                  const obj = {
                    authorization: version.authorization,
                    client: version.client,
                    debug: version.debug,
                    assetsUrl: obj2,
                    name: "3D Secure",
                  };
                  const obj5 = closure_1_3.create(obj);
                  const nextPromise = obj5.then(function (getConfiguration) {
                    let rejectResult = getConfiguration;
                    const configuration = getConfiguration.getConfiguration();
                    const gatewayConfiguration = configuration.gatewayConfiguration;
                    closure_0.client = getConfiguration;
                    let THREEDS_NOT_ENABLED;
                    if (!gatewayConfiguration.threeDSecureEnabled) {
                      THREEDS_NOT_ENABLED = constants.THREEDS_NOT_ENABLED;
                    }
                    if ("TOKENIZATION_KEY" === configuration.authorizationType) {
                      THREEDS_NOT_ENABLED = constants.THREEDS_CAN_NOT_USE_TOKENIZATION_KEY;
                    }
                    const tmp7 = "production" === gatewayConfiguration.environment && !str3();
                    if (tmp7) {
                      THREEDS_NOT_ENABLED = constants.THREEDS_HTTPS_REQUIRED;
                    }
                    let tmp10 = "legacy" === closure_1_1;
                    if (!tmp10) {
                      tmp10 =
                        gatewayConfiguration.threeDSecure &&
                        gatewayConfiguration.threeDSecure.cardinalAuthenticationJWT;
                    }
                    if (!tmp10) {
                      closure_2_6.sendEvent(
                        closure_0.client,
                        "three-d-secure.initialization.failed.missing-cardinalAuthenticationJWT",
                      );
                      THREEDS_NOT_ENABLED = constants.THREEDS_NOT_ENABLED_FOR_V2;
                    }
                    if (THREEDS_NOT_ENABLED) {
                      const self = this;
                      const self2 = this;
                      const tmp20 = new closure_2_5(THREEDS_NOT_ENABLED);
                      rejectResult = reject(tmp20);
                    } else {
                      closure_2_6.sendEvent(closure_0.client, "three-d-secure.initialized");
                    }
                    return rejectResult;
                  });
                  const obj6 = {
                    client: version.client,
                    assetsUrl: obj2,
                    createPromise: nextPromise,
                    loggingEnabled: version.loggingEnabled,
                    cardinalSDKConfig: version.cardinalSDKConfig,
                    framework: str3,
                  };
                  const tmp2 = new version(obj6);
                  let nextPromise1 = tmp2;
                  version = tmp2;
                  if (version.client) {
                    nextPromise1 = nextPromise.then(() => closure_0);
                  }
                  return nextPromise1;
                });
              }
              str3 = "cardinal-modal";
            }
          }
          let obj5 = {
            code: constants.THREEDS_UNSUPPORTED_VERSION.code,
            type: constants.THREEDS_UNSUPPORTED_VERSION.type,
            message: constants.THREEDS_UNSUPPORTED_VERSION.message,
          };
          const tmp8 = new closure_5(obj5);
          throw tmp8;
        }),
        VERSION: "3.112.1",
      };
      module.exports = obj;
    },
    {
      "../lib/analytics": 138,
      "../lib/basic-component-verification": 141,
      "../lib/braintree-error": 143,
      "../lib/create-assets-url": 148,
      "../lib/create-deferred-client": 150,
      "../lib/is-https": 172,
      "./external/three-d-secure": 218,
      "./shared/errors": 221,
      "@braintree/wrap-promise": 40,
    },
  ];
  obj[219] = items218;
  const items219 = [
    (arg0, arg1, arg2) => {
      module.exports = {
        LANDING_FRAME_NAME: "braintreethreedsecurelanding",
        CARDINAL_SCRIPT_SOURCE: {
          production: "https://songbird.cardinalcommerce.com/edge/v1/songbird.js",
          sandbox: "https://songbirdstag.cardinalcommerce.com/edge/v1/songbird.js",
        },
      };
    },
    {},
  ];
  obj[220] = items219;
  const items220 = [
    (arg0, arg1, arg2) => {
      const globalResult = global("../../lib/braintree-error");
      const obj = {
        THREEDS_NOT_ENABLED: {
          type: globalResult.types.MERCHANT,
          code: "THREEDS_NOT_ENABLED",
          message: "3D Secure is not enabled for this merchant.",
        },
        THREEDS_CAN_NOT_USE_TOKENIZATION_KEY: {
          type: globalResult.types.MERCHANT,
          code: "THREEDS_CAN_NOT_USE_TOKENIZATION_KEY",
          message: "3D Secure can not use a tokenization key for authorization.",
        },
        THREEDS_HTTPS_REQUIRED: {
          type: globalResult.types.MERCHANT,
          code: "THREEDS_HTTPS_REQUIRED",
          message: "3D Secure requires HTTPS.",
        },
        THREEDS_NOT_ENABLED_FOR_V2: {
          type: globalResult.types.MERCHANT,
          code: "THREEDS_NOT_ENABLED_FOR_V2",
          message:
            "3D Secure version 2 is not enabled for this merchant. Contact Braintree Support for assistance at https://help.braintreepayments.com/",
        },
        THREEDS_UNRECOGNIZED_VERSION: { type: globalResult.types.MERCHANT, code: "THREEDS_UNRECOGNIZED_VERSION" },
        THREEDS_CARDINAL_SDK_SETUP_FAILED: {
          type: globalResult.types.UNKNOWN,
          code: "THREEDS_CARDINAL_SDK_SETUP_FAILED",
          message: "Something went wrong setting up Cardinal's Songbird.js library.",
        },
        THREEDS_CARDINAL_SDK_SCRIPT_LOAD_FAILED: {
          type: globalResult.types.NETWORK,
          code: "THREEDS_CARDINAL_SDK_SCRIPT_LOAD_FAILED",
          message: "Cardinal's Songbird.js library could not be loaded.",
        },
        THREEDS_CARDINAL_SDK_SETUP_TIMEDOUT: {
          type: globalResult.types.UNKNOWN,
          code: "THREEDS_CARDINAL_SDK_SETUP_TIMEDOUT",
          message: "Cardinal's Songbird.js took too long to setup.",
        },
        THREEDS_CARDINAL_SDK_RESPONSE_TIMEDOUT: {
          type: globalResult.types.UNKNOWN,
          code: "THREEDS_CARDINAL_SDK_RESPONSE_TIMEDOUT",
          message: "Cardinal's API took too long to respond.",
        },
        THREEDS_CARDINAL_SDK_BAD_CONFIG: {
          type: globalResult.types.MERCHANT,
          code: "THREEDS_CARDINAL_SDK_BAD_CONFIG",
          message: "JWT or other required field missing. Please check your setup configuration.",
        },
        THREEDS_CARDINAL_SDK_BAD_JWT: {
          type: globalResult.types.MERCHANT,
          code: "THREEDS_CARDINAL_SDK_BAD_JWT",
          message: "Cardinal JWT missing or malformed. Please check your setup configuration.",
        },
        THREEDS_CARDINAL_SDK_ERROR: {
          type: globalResult.types.UNKNOWN,
          code: "THREEDS_CARDINAL_SDK_ERROR",
          message: "A general error has occurred with Cardinal. See description for more information.",
        },
        THREEDS_CARDINAL_SDK_CANCELED: {
          type: globalResult.types.CUSTOMER,
          code: "THREEDS_CARDINAL_SDK_CANCELED",
          message: "Canceled by user.",
        },
        THREEDS_VERIFY_CARD_CANCELED_BY_MERCHANT: {
          type: globalResult.types.MERCHANT,
          code: "THREEDS_VERIFY_CARD_CANCELED_BY_MERCHANT",
          message: "3D Secure verfication canceled by merchant.",
        },
        THREEDS_AUTHENTICATION_IN_PROGRESS: {
          type: globalResult.types.MERCHANT,
          code: "THREEDS_AUTHENTICATION_IN_PROGRESS",
          message: "Cannot call verifyCard while existing authentication is in progress.",
        },
        THREEDS_MISSING_VERIFY_CARD_OPTION: {
          type: globalResult.types.MERCHANT,
          code: "THREEDS_MISSING_VERIFY_CARD_OPTION",
        },
        THREEDS_JWT_AUTHENTICATION_FAILED: {
          type: globalResult.types.UNKNOWN,
          code: "THREEDS_JWT_AUTHENTICATION_FAILED",
          message: "Something went wrong authenticating the JWT from Cardinal",
        },
        THREEDS_LOOKUP_TOKENIZED_CARD_NOT_FOUND_ERROR: {
          type: globalResult.types.MERCHANT,
          code: "THREEDS_LOOKUP_TOKENIZED_CARD_NOT_FOUND_ERROR",
          message: "Either the payment method nonce passed to `verifyCard` does not exist, or it was already consumed",
        },
        THREEDS_LOOKUP_VALIDATION_ERROR: {
          type: globalResult.types.CUSTOMER,
          code: "THREEDS_LOOKUP_VALIDATION_ERROR",
          message: "The data passed in `verifyCard` did not pass validation checks. See details for more info",
        },
        THREEDS_LOOKUP_ERROR: {
          type: globalResult.types.UNKNOWN,
          code: "THREEDS_LOOKUP_ERROR",
          message: "Something went wrong during the 3D Secure lookup",
        },
        THREEDS_INLINE_IFRAME_DETAILS_INCORRECT: {
          type: globalResult.types.UNKNOWN,
          code: "THREEDS_INLINE_IFRAME_DETAILS_INCORRECT",
          message: "Something went wrong when attempting to add the authentication iframe to the page.",
        },
        THREEDS_NO_VERIFICATION_PAYLOAD: {
          type: globalResult.types.MERCHANT,
          code: "THREEDS_NO_VERIFICATION_PAYLOAD",
          message: "No verification payload available.",
        },
        THREEDS_TERM_URL_REQUIRES_BRAINTREE_DOMAIN: {
          type: globalResult.types.INTERNAL,
          code: "THREEDS_TERM_URL_REQUIRES_BRAINTREE_DOMAIN",
          message: "Term Url must be on a Braintree domain.",
        },
        THREEDS_FRAMEWORK_METHOD_NOT_IMPLEMENTED: {
          type: globalResult.types.INTERNAL,
          code: "THREEDS_FRAMEWORK_METHOD_NOT_IMPLEMENTED",
          message: "Method not implemented for this framework.",
        },
        THREEDS_REQUESTED_EXEMPTION_TYPE_INVALID: {
          type: globalResult.types.MERCHANT,
          code: "THREEDS_REQUESTED_EXEMPTION_TYPE_INVALID",
          message: "Requested Exemption Type is invalid.",
        },
        THREEDS_UNSUPPORTED_VERSION: {
          type: globalResult.types.MERCHANT,
          code: "THREEDS_UNSUPPORTED_VERSION",
          message:
            "3D Secure `1` is deprecated and no longer supported. See available versions at https://braintree.github.io/braintree-web/current/module-braintree-web_three-d-secure.html#.create",
        },
      };
      module.exports = obj;
    },
    { "../../lib/braintree-error": 143 },
  ];
  obj[221] = items220;
  const items221 = [
    (arg0, arg1, arg2) => {
      module.exports = global("../../lib/enumerate")(["AUTHENTICATION_COMPLETE"], "threedsecure:");
    },
    { "../../lib/enumerate": 153 },
  ];
  obj[222] = items221;
  const items222 = [
    (arg0, arg1, arg2) => {
      let closure_0 = global("./shared/unionpay");
      let closure_1 = global("../lib/basic-component-verification");
      let closure_2 = global("../lib/braintree-error");
      let closure_3 = global("../lib/create-deferred-client");
      let closure_4 = global("../lib/create-assets-url");
      let closure_5 = global("../lib/analytics");
      let closure_6 = global("./shared/errors");
      let obj = {
        create: global("@braintree/wrap-promise")(function create(client) {
          let obj = { name: "UnionPay", client: client.client, authorization: client.authorization };
          const verifyResult = closure_1.verify(obj);
          const nextPromise = verifyResult.then(() => {
            const obj = {
              authorization: client.authorization,
              client: client.client,
              debug: client.debug,
              assetsUrl: closure_4.create(client.authorization),
              name: "UnionPay",
            };
            return closure_3.create(obj);
          });
          return nextPromise.then(function (getConfiguration) {
            const configuration = getConfiguration.getConfiguration();
            client.client = getConfiguration;
            if (configuration.gatewayConfiguration.unionPay) {
              let rejectResult;
              if (true === configuration.gatewayConfiguration.unionPay.enabled) {
                closure_5.sendEvent(client.client, "unionpay.initialized");
                const self = this;
                const self2 = this;
                rejectResult = new client(client);
              }
              return rejectResult;
            }
            const tmp3 = new closure_2(constants.UNIONPAY_NOT_ENABLED);
            rejectResult = reject(tmp3);
          });
        }),
        VERSION: "3.112.1",
      };
      module.exports = obj;
    },
    {
      "../lib/analytics": 138,
      "../lib/basic-component-verification": 141,
      "../lib/braintree-error": 143,
      "../lib/create-assets-url": 148,
      "../lib/create-deferred-client": 150,
      "./shared/errors": 225,
      "./shared/unionpay": 226,
      "@braintree/wrap-promise": 40,
    },
  ];
  obj[223] = items222;
  const items223 = [
    (arg0, arg1, arg2) => {
      module.exports = {
        events: global("../../lib/enumerate")(
          ["HOSTED_FIELDS_FETCH_CAPABILITIES", "HOSTED_FIELDS_ENROLL", "HOSTED_FIELDS_TOKENIZE"],
          "union-pay:",
        ),
        HOSTED_FIELDS_FRAME_NAME: "braintreeunionpayhostedfields",
      };
      ({
        events: global("../../lib/enumerate")(
          ["HOSTED_FIELDS_FETCH_CAPABILITIES", "HOSTED_FIELDS_ENROLL", "HOSTED_FIELDS_TOKENIZE"],
          "union-pay:",
        ),
        HOSTED_FIELDS_FRAME_NAME: "braintreeunionpayhostedfields",
      });
    },
    { "../../lib/enumerate": 153 },
  ];
  obj[224] = items223;
  const items224 = [
    (arg0, arg1, arg2) => {
      const globalResult = global("../../lib/braintree-error");
      const obj = {
        UNIONPAY_NOT_ENABLED: {
          type: globalResult.types.MERCHANT,
          code: "UNIONPAY_NOT_ENABLED",
          message: "UnionPay is not enabled for this merchant.",
        },
        UNIONPAY_HOSTED_FIELDS_INSTANCE_INVALID: {
          type: globalResult.types.MERCHANT,
          code: "UNIONPAY_HOSTED_FIELDS_INSTANCE_INVALID",
          message: "Found an invalid Hosted Fields instance. Please use a valid Hosted Fields instance.",
        },
        UNIONPAY_HOSTED_FIELDS_INSTANCE_REQUIRED: {
          type: globalResult.types.MERCHANT,
          code: "UNIONPAY_HOSTED_FIELDS_INSTANCE_REQUIRED",
          message: "Could not find the Hosted Fields instance.",
        },
        UNIONPAY_CARD_OR_HOSTED_FIELDS_INSTANCE_REQUIRED: {
          type: globalResult.types.MERCHANT,
          code: "UNIONPAY_CARD_OR_HOSTED_FIELDS_INSTANCE_REQUIRED",
          message: "A card or a Hosted Fields instance is required. Please supply a card or a Hosted Fields instance.",
        },
        UNIONPAY_CARD_AND_HOSTED_FIELDS_INSTANCES: {
          type: globalResult.types.MERCHANT,
          code: "UNIONPAY_CARD_AND_HOSTED_FIELDS_INSTANCES",
          message: "Please supply either a card or a Hosted Fields instance, not both.",
        },
        UNIONPAY_EXPIRATION_DATE_INCOMPLETE: {
          type: globalResult.types.MERCHANT,
          code: "UNIONPAY_EXPIRATION_DATE_INCOMPLETE",
          message: "You must supply expiration month and year or neither.",
        },
        UNIONPAY_ENROLLMENT_CUSTOMER_INPUT_INVALID: {
          type: globalResult.types.CUSTOMER,
          code: "UNIONPAY_ENROLLMENT_CUSTOMER_INPUT_INVALID",
          message: "Enrollment failed due to user input error.",
        },
        UNIONPAY_ENROLLMENT_NETWORK_ERROR: {
          type: globalResult.types.NETWORK,
          code: "UNIONPAY_ENROLLMENT_NETWORK_ERROR",
          message: "Could not enroll UnionPay card.",
        },
        UNIONPAY_FETCH_CAPABILITIES_NETWORK_ERROR: {
          type: globalResult.types.NETWORK,
          code: "UNIONPAY_FETCH_CAPABILITIES_NETWORK_ERROR",
          message: "Could not fetch card capabilities.",
        },
        UNIONPAY_TOKENIZATION_NETWORK_ERROR: {
          type: globalResult.types.NETWORK,
          code: "UNIONPAY_TOKENIZATION_NETWORK_ERROR",
          message: "A tokenization network error occurred.",
        },
        UNIONPAY_MISSING_MOBILE_PHONE_DATA: {
          type: globalResult.types.MERCHANT,
          code: "UNIONPAY_MISSING_MOBILE_PHONE_DATA",
          message: "A `mobile` with `countryCode` and `number` is required.",
        },
        UNIONPAY_FAILED_TOKENIZATION: {
          type: globalResult.types.CUSTOMER,
          code: "UNIONPAY_FAILED_TOKENIZATION",
          message: "The supplied card data failed tokenization.",
        },
      };
      module.exports = obj;
    },
    { "../../lib/braintree-error": 143 },
  ];
  obj[225] = items224;
  const items225 = [
    (arg0, arg1, arg2) => {
      class UnionPay {
        constructor(arg0) {
          this._options = global;
          return;
        }
        fetchCapabilities(arg0) {
          self = this;
          self = this;
          client = this._options.client;
          number = null;
          if (global.card) {
            number = global.card.number;
          }
          hostedFields = global.hostedFields;
          if (number) {
            if (hostedFields) {
              tmp14 = globalThis;
              _Promise3 = Promise;
              tmp15 = client;
              tmp16 = closure_7;
              self6 = this;
              self7 = this;
              reject3 = Promise.reject;
              tmp17 = new client(closure_7.UNIONPAY_CARD_AND_HOSTED_FIELDS_INSTANCES);
              tmp18 = tmp17;
              reject3Result = reject3(tmp17);
            }
            return reject3Result;
          }
          if (number) {
            obj = { method: "get", endpoint: "payment_methods/credit_cards/capabilities", data: null };
            obj1 = { _meta: null, creditCard: null };
            obj1._meta = { source: "unionpay" };
            obj4 = { number: null };
            obj4.number = number;
            obj1.creditCard = obj4;
            obj.data = obj1;
            requestResult = client.request(obj);
            nextPromise = requestResult.then(() => {
              /* body not rendered: F150661 */
            });
            reject3Result = nextPromise.catch(() => {
              /* body not rendered: F150662 */
            });
          } else if (hostedFields) {
            if (hostedFields._bus) {
              result = self._initializeHostedFields();
              nextPromise1 = result.then(() => {
                /* body not rendered: F150663 */
              });
            } else {
              tmp8 = globalThis;
              _Promise2 = Promise;
              tmp9 = client;
              tmp10 = closure_7;
              self4 = this;
              self5 = this;
              reject2 = Promise.reject;
              tmp11 = new client(closure_7.UNIONPAY_HOSTED_FIELDS_INSTANCE_INVALID);
              tmp12 = tmp11;
              nextPromise1 = reject2(tmp11);
            }
            reject3Result = nextPromise1;
          } else {
            tmp2 = globalThis;
            _Promise = Promise;
            tmp3 = client;
            tmp4 = closure_7;
            self2 = this;
            self3 = this;
            reject = Promise.reject;
            tmp5 = new client(closure_7.UNIONPAY_CARD_OR_HOSTED_FIELDS_INSTANCE_REQUIRED);
            tmp6 = tmp5;
            reject3Result = reject(tmp5);
          }
          return;
        }
        enroll(arg0) {
          self = this;
          client = this._options.client;
          ({ card, mobile } = global);
          hostedFields = global.hostedFields;
          if (mobile) {
            if (hostedFields) {
              tmp16 = globalThis;
              _Promise4 = Promise;
              if (hostedFields._bus) {
                if (card) {
                  tmp23 = client;
                  tmp24 = closure_7;
                  self11 = this;
                  self12 = this;
                  reject5 = _Promise4.reject;
                  tmp25 = new client(closure_7.UNIONPAY_CARD_AND_HOSTED_FIELDS_INSTANCES);
                  tmp26 = tmp25;
                  reject5Result = reject5(tmp25);
                } else {
                  self9 = this;
                  self10 = this;
                  reject5Result = new _Promise4(() => {
                    /* body not rendered: F150664 */
                  });
                }
                reject4Result = reject5Result;
              } else {
                tmp17 = client;
                tmp18 = closure_7;
                self7 = this;
                self8 = this;
                reject4 = _Promise4.reject;
                tmp19 = new client(closure_7.UNIONPAY_HOSTED_FIELDS_INSTANCE_INVALID);
                tmp20 = tmp19;
                reject4Result = reject4(tmp19);
              }
              return reject4Result;
            } else {
              if (card) {
                if (card.number) {
                  obj = { _meta: null, unionPayEnrollment: null };
                  obj._meta = { source: "unionpay" };
                  obj1 = { number: null, mobileCountryCode: null, mobileNumber: null };
                  obj1.number = card.number;
                  ({ countryCode: obj2.mobileCountryCode, number: obj2.mobileNumber } = mobile);
                  obj.unionPayEnrollment = obj1;
                  if (card.expirationDate) {
                    obj.unionPayEnrollment.expirationDate = card.expirationDate;
                  } else if (card.expirationMonth) {
                    if (card.expirationMonth) {
                      if (card.expirationYear) {
                        ({
                          expirationYear: obj.unionPayEnrollment.expirationYear,
                          expirationMonth: obj.unionPayEnrollment.expirationMonth,
                        } = card);
                      }
                    }
                    tmp11 = globalThis;
                    _Promise3 = Promise;
                    tmp12 = client;
                    tmp13 = closure_7;
                    self5 = this;
                    self6 = this;
                    reject3 = Promise.reject;
                    tmp14 = new client(closure_7.UNIONPAY_EXPIRATION_DATE_INCOMPLETE);
                    tmp15 = tmp14;
                    return reject3(tmp14);
                  }
                  obj4 = { method: "post", endpoint: "union_pay_enrollments", data: null };
                  obj4.data = obj;
                  requestResult = client.request(obj4);
                  nextPromise = requestResult.then(() => {
                    /* body not rendered: F150665 */
                  });
                  return nextPromise.catch(() => {
                    /* body not rendered: F150666 */
                  });
                }
              }
              tmp6 = globalThis;
              _Promise2 = Promise;
              tmp7 = client;
              tmp8 = closure_7;
              self3 = this;
              self4 = this;
              reject2 = Promise.reject;
              tmp9 = new client(closure_7.UNIONPAY_CARD_OR_HOSTED_FIELDS_INSTANCE_REQUIRED);
              tmp10 = tmp9;
              return reject2(tmp9);
            }
          } else {
            tmp = globalThis;
            _Promise = Promise;
            tmp2 = client;
            tmp3 = closure_7;
            self = this;
            self2 = this;
            reject = Promise.reject;
            tmp4 = new client(closure_7.UNIONPAY_MISSING_MOBILE_PHONE_DATA);
            tmp5 = tmp4;
            return reject(tmp4);
          }
        }
        tokenize(arg0) {
          closure_0 = global;
          self = this;
          client = this._options.client;
          ({ card, hostedFields } = global);
          if (card) {
            if (hostedFields) {
              tmp13 = globalThis;
              _Promise3 = Promise;
              tmp14 = self;
              tmp15 = closure_7;
              self7 = this;
              self8 = this;
              reject3 = Promise.reject;
              tmp16 = new self(closure_7.UNIONPAY_CARD_AND_HOSTED_FIELDS_INSTANCES);
              tmp17 = tmp16;
              reject3Result = reject3(tmp16);
            }
            return reject3Result;
          }
          if (card) {
            obj = { _meta: null, creditCard: null };
            obj._meta = { source: "unionpay" };
            obj1 = { number: null, options: null };
            obj1.number = global.card.number;
            obj6 = { unionPayEnrollment: null };
            obj7 = { id: null };
            obj7.id = global.enrollmentId;
            obj6.unionPayEnrollment = obj7;
            obj1.options = obj6;
            obj.creditCard = obj1;
            if (global.smsCode) {
              obj.creditCard.options.unionPayEnrollment.smsCode = global.smsCode;
            }
            if (card.expirationDate) {
              obj.creditCard.expirationDate = card.expirationDate;
            } else {
              tmp12 = card.expirationMonth && card.expirationYear;
              if (tmp12) {
                ({ expirationYear: obj.creditCard.expirationYear, expirationMonth: obj.creditCard.expirationMonth } =
                  card);
              }
            }
            if (global.card.cvv) {
              obj.creditCard.cvv = global.card.cvv;
            }
            obj8 = { method: "post", endpoint: "payment_methods/credit_cards", data: null };
            obj8.data = obj;
            requestResult = client.request(obj8);
            nextPromise = requestResult.then(() => {
              /* body not rendered: F150667 */
            });
            reject3Result = nextPromise.catch(() => {
              /* body not rendered: F150668 */
            });
          } else {
            tmp = globalThis;
            if (hostedFields) {
              _Promise2 = Promise;
              if (hostedFields._bus) {
                self5 = this;
                self6 = this;
                _Promise21 = new _Promise2(() => {
                  /* body not rendered: F150669 */
                });
              } else {
                tmp7 = self;
                tmp8 = closure_7;
                self3 = this;
                self4 = this;
                reject2 = _Promise2.reject;
                tmp9 = new self(closure_7.UNIONPAY_HOSTED_FIELDS_INSTANCE_INVALID);
                tmp10 = tmp9;
                _Promise21 = reject2(tmp9);
              }
              reject3Result = _Promise21;
            } else {
              _Promise = Promise;
              tmp2 = self;
              tmp3 = closure_7;
              self = this;
              self2 = this;
              reject = Promise.reject;
              tmp4 = new self(closure_7.UNIONPAY_CARD_OR_HOSTED_FIELDS_INSTANCE_REQUIRED);
              tmp5 = tmp4;
              reject3Result = reject(tmp4);
            }
          }
          return;
        }
        teardown() {
          self = this;
          if (this._bus) {
            parentNode = self._hostedFieldsFrame.parentNode;
            removeChildResult = parentNode.removeChild(self._hostedFieldsFrame);
            _bus = self._bus;
            teardownResult = _bus.teardown();
          }
          tmp3 = closure_6(self, closure_10(UnionPay.prototype));
          return Promise.resolve();
        }
        _initializeHostedFields() {
          self = this;
          closure_2 = closure_11();
          self = this;
          if (!this._hostedFieldsInitializePromise) {
            tmp = globalThis;
            _Promise = Promise;
            self2 = this;
            self3 = this;
            promise = new Promise(() => {
              /* body not rendered: F150670 */
            });
            tmp3 = promise;
            self._hostedFieldsInitializePromise = promise;
          }
          return self._hostedFieldsInitializePromise;
        }
      }
      let closure_0 = global("../../lib/analytics");
      let closure_1 = global("../../lib/braintree-error");
      let closure_2 = global("framebus");
      const globalResult = global("./constants");
      let closure_3 = globalResult;
      let closure_4 = global("../../lib/is-verified-domain");
      let closure_5 = global("../../lib/use-min");
      let closure_6 = global("../../lib/convert-methods-to-error");
      constants = global("./errors");
      const events = globalResult.events;
      let closure_9 = global("@braintree/iframer");
      let closure_10 = global("../../lib/methods");
      let closure_11 = global("@braintree/uuid");
      const globalResult1 = global("@braintree/wrap-promise");
      closure_12 = global("../../lib/constants").BUS_CONFIGURATION_REQUEST_EVENT;
      module.exports = globalResult1.wrapPrototype(UnionPay);
    },
    {
      "../../lib/analytics": 138,
      "../../lib/braintree-error": 143,
      "../../lib/constants": 145,
      "../../lib/convert-methods-to-error": 146,
      "../../lib/is-verified-domain": 173,
      "../../lib/methods": 175,
      "../../lib/use-min": 181,
      "./constants": 224,
      "./errors": 225,
      "@braintree/iframer": 32,
      "@braintree/uuid": 36,
      "@braintree/wrap-promise": 40,
      framebus: 50,
    },
  ];
  obj[226] = items225;
  const items226 = [
    (arg0, arg1, arg2) => {
      module.exports = { PLAID_LINK_JS: "https://cdn.plaid.com/link/v2/stable/link-initialize.js" };
    },
    {},
  ];
  obj[227] = items226;
  const items227 = [
    (arg0, arg1, arg2) => {
      const globalResult = global("../lib/braintree-error");
      const obj = {
        US_BANK_ACCOUNT_OPTION_REQUIRED: { type: globalResult.types.MERCHANT, code: "US_BANK_ACCOUNT_OPTION_REQUIRED" },
        US_BANK_ACCOUNT_MUTUALLY_EXCLUSIVE_OPTIONS: {
          type: globalResult.types.MERCHANT,
          code: "US_BANK_ACCOUNT_MUTUALLY_EXCLUSIVE_OPTIONS",
        },
        US_BANK_ACCOUNT_LOGIN_LOAD_FAILED: {
          type: globalResult.types.NETWORK,
          code: "US_BANK_ACCOUNT_LOGIN_LOAD_FAILED",
          message: "Bank login flow failed to load.",
        },
        US_BANK_ACCOUNT_LOGIN_CLOSED: {
          type: globalResult.types.CUSTOMER,
          code: "US_BANK_ACCOUNT_LOGIN_CLOSED",
          message: "Customer closed bank login flow before authorizing.",
        },
        US_BANK_ACCOUNT_LOGIN_REQUEST_ACTIVE: {
          type: globalResult.types.MERCHANT,
          code: "US_BANK_ACCOUNT_LOGIN_REQUEST_ACTIVE",
          message: "Another bank login tokenization request is active.",
        },
        US_BANK_ACCOUNT_TOKENIZATION_NETWORK_ERROR: {
          type: globalResult.types.NETWORK,
          code: "US_BANK_ACCOUNT_TOKENIZATION_NETWORK_ERROR",
          message: "A tokenization network error occurred.",
        },
        US_BANK_ACCOUNT_FAILED_TOKENIZATION: {
          type: globalResult.types.CUSTOMER,
          code: "US_BANK_ACCOUNT_FAILED_TOKENIZATION",
          message: "The supplied data failed tokenization.",
        },
        US_BANK_ACCOUNT_NOT_ENABLED: {
          type: globalResult.types.MERCHANT,
          code: "US_BANK_ACCOUNT_NOT_ENABLED",
          message: "US bank account is not enabled.",
        },
        US_BANK_ACCOUNT_BANK_LOGIN_NOT_ENABLED: {
          type: globalResult.types.MERCHANT,
          code: "US_BANK_ACCOUNT_BANK_LOGIN_NOT_ENABLED",
          message: "Bank login is not enabled.",
        },
      };
      module.exports = obj;
    },
    { "../lib/braintree-error": 143 },
  ];
  obj[228] = items227;
  const items228 = [
    (arg0, arg1, arg2) => {
      let closure_0 = global("../lib/basic-component-verification");
      let closure_1 = global("../lib/braintree-error");
      let closure_2 = global("../lib/create-deferred-client");
      let closure_3 = global("../lib/create-assets-url");
      let closure_4 = global("./errors");
      let closure_5 = global("./us-bank-account");
      let obj = {
        create: global("@braintree/wrap-promise")(function create(client) {
          let obj = { name: "US Bank Account", client: client.client, authorization: client.authorization };
          const verifyResult = client.verify(obj);
          const nextPromise = verifyResult.then(() => {
            const obj = {
              authorization: client.authorization,
              client: client.client,
              debug: client.debug,
              assetsUrl: closure_3.create(client.authorization),
              name: "US Bank Account",
            };
            return closure_2.create(obj);
          });
          return nextPromise.then(function (client) {
            let rejectResult;
            client.client = client;
            client = client.client;
            if (client.getConfiguration().gatewayConfiguration.usBankAccount) {
              const self3 = this;
              const self4 = this;
              rejectResult = new closure_5(tmp);
            } else {
              const self = this;
              const self2 = this;
              const tmp5 = new closure_1(constants.US_BANK_ACCOUNT_NOT_ENABLED);
              rejectResult = reject(tmp5);
            }
            return rejectResult;
          });
        }),
        VERSION: "3.112.1",
      };
      module.exports = obj;
    },
    {
      "../lib/basic-component-verification": 141,
      "../lib/braintree-error": 143,
      "../lib/create-assets-url": 148,
      "../lib/create-deferred-client": 150,
      "./errors": 228,
      "./us-bank-account": 230,
      "@braintree/wrap-promise": 40,
    },
  ];
  obj[229] = items228;
  const items229 = [
    (arg0, arg1, arg2) => {
      class USBankAccount {
        constructor(arg0) {
          obj = { _client: global.client, _isTokenizingBankLogin: false };
          sendEventResult = closure_4.sendEvent(obj._client, "usbankaccount.initialized");
          return;
        }
        tokenize(arg0) {
          tmp = global || {};
          if (tmp.mandateText) {
            if (tmp.bankDetails) {
              if (tmp.bankLogin) {
                tmp16 = globalThis;
                _Promise3 = Promise;
                tmp17 = closure_0;
                obj1 = {
                  type: null,
                  code: null,
                  message: "tokenize must be called with bankDetails or bankLogin, not both.",
                };
                tmp18 = closure_2;
                obj1.type = closure_2.US_BANK_ACCOUNT_MUTUALLY_EXCLUSIVE_OPTIONS.type;
                obj1.code = closure_2.US_BANK_ACCOUNT_MUTUALLY_EXCLUSIVE_OPTIONS.code;
                self6 = this;
                self7 = this;
                tmp19 = obj1;
                reject3 = Promise.reject;
                tmp20 = new closure_0(obj1);
                tmp21 = tmp20;
                reject3Result = reject3(tmp20);
              }
              rejectResult = reject3Result;
            }
            self3 = this;
            if (tmp.bankDetails) {
              reject3Result = self3._tokenizeBankDetails(tmp);
            } else if (tmp.bankLogin) {
              reject3Result = self3._tokenizeBankLogin(tmp);
            } else {
              tmp9 = globalThis;
              _Promise2 = Promise;
              tmp10 = closure_0;
              obj4 = { type: null, code: null, message: "tokenize must be called with bankDetails or bankLogin." };
              tmp11 = closure_2;
              obj4.type = closure_2.US_BANK_ACCOUNT_OPTION_REQUIRED.type;
              obj4.code = closure_2.US_BANK_ACCOUNT_OPTION_REQUIRED.code;
              self4 = this;
              self5 = this;
              tmp12 = obj4;
              reject2 = Promise.reject;
              tmp13 = new closure_0(obj4);
              tmp14 = tmp13;
              reject3Result = reject2(tmp13);
            }
          } else {
            tmp2 = globalThis;
            _Promise = Promise;
            tmp3 = closure_0;
            obj = { type: null, code: null, message: "mandateText property is required." };
            tmp4 = closure_2;
            obj.type = closure_2.US_BANK_ACCOUNT_OPTION_REQUIRED.type;
            obj.code = closure_2.US_BANK_ACCOUNT_OPTION_REQUIRED.code;
            self = this;
            self2 = this;
            tmp5 = obj;
            reject = Promise.reject;
            tmp6 = new closure_0(obj);
            tmp7 = tmp6;
            rejectResult = reject(tmp6);
          }
          return rejectResult;
        }
        _tokenizeBankDetails(arg0) {
          _client = this._client;
          bankDetails = global.bankDetails;
          obj = {
            achMandate: global.mandateText,
            routingNumber: bankDetails.routingNumber,
            accountNumber: bankDetails.accountNumber,
            accountType: null,
            billingAddress: null,
          };
          str = bankDetails.accountType;
          obj.accountType = str.toUpperCase();
          tmp = bankDetails.billingAddress || {};
          obj.billingAddress = {
            streetAddress: tmp.streetAddress,
            extendedAddress: tmp.extendedAddress,
            city: tmp.locality,
            state: tmp.region,
            zipCode: tmp.postalCode,
          };
          if ("personal" === bankDetails.ownershipType) {
            obj1 = { firstName: null, lastName: null };
            ({ firstName: obj3.firstName, lastName: obj3.lastName } = bankDetails);
            obj.individualOwner = obj1;
          } else {
            str2 = "business";
            if ("business" === bankDetails.ownershipType) {
              obj7 = { businessName: null };
              obj7.businessName = bankDetails.businessName;
              obj.businessOwner = obj7;
            }
          }
          obj8 = { api: "graphQLApi", data: null };
          obj9 = { query: c8, variables: null };
          obj10 = { input: { usBankAccount: obj } };
          obj9.variables = obj10;
          obj8.data = obj9;
          requestResult = _client.request(obj8);
          nextPromise = requestResult.then(() => {
            /* body not rendered: F150675 */
          });
          return nextPromise.catch(() => {
            /* body not rendered: F150676 */
          });
        }
        _tokenizeBankLogin(arg0) {
          self = this;
          closure_0 = global;
          self = this;
          _client = this._client;
          gatewayConfiguration = _client.getConfiguration().gatewayConfiguration;
          closure_3 = "production" === gatewayConfiguration.environment;
          plaid = gatewayConfiguration.usBankAccount.plaid;
          if (global.bankLogin.displayName) {
            if (plaid) {
              if (self._isTokenizingBankLogin) {
                _Promise4 = Promise;
                tmp13 = closure_0;
                tmp14 = _client;
                self8 = this;
                self9 = this;
                reject3 = Promise.reject;
                tmp15 = new closure_0(_client.US_BANK_ACCOUNT_LOGIN_REQUEST_ACTIVE);
                tmp16 = tmp15;
                reject3Result = reject3(tmp15);
              } else {
                flag = true;
                self._isTokenizingBankLogin = true;
                _Promise3 = Promise;
                self6 = this;
                self7 = this;
                reject3Result = new Promise(() => {
                  /* body not rendered: F150677 */
                });
              }
              reject2Result = reject3Result;
            } else {
              _Promise2 = Promise;
              tmp7 = closure_0;
              tmp8 = _client;
              self4 = this;
              self5 = this;
              reject2 = Promise.reject;
              tmp9 = new closure_0(_client.US_BANK_ACCOUNT_BANK_LOGIN_NOT_ENABLED);
              tmp10 = tmp9;
              reject2Result = reject2(tmp9);
            }
            rejectResult = reject2Result;
          } else {
            _Promise = Promise;
            tmp = closure_0;
            obj = { type: null, code: null, message: "displayName property is required when using bankLogin." };
            tmp2 = _client;
            obj.type = _client.US_BANK_ACCOUNT_OPTION_REQUIRED.type;
            obj.code = _client.US_BANK_ACCOUNT_OPTION_REQUIRED.code;
            self2 = this;
            self3 = this;
            tmp3 = obj;
            reject = Promise.reject;
            tmp4 = new closure_0(obj);
            tmp5 = tmp4;
            rejectResult = reject(tmp4);
          }
          return rejectResult;
        }
        _loadPlaid(arg0) {
          tmp = closure_5(global);
          if (window.Plaid) {
            _window = window;
            tmp10 = null;
            tmpResult = tmp(null, window.Plaid);
          } else {
            _document = document;
            str = 'script[src="';
            str2 = '"]';
            tmp2 = closure_1;
            element = document.querySelector(`script[src="${closure_1.PLAID_LINK_JS}"]`);
            if (element) {
              closure_0 = element;
              closure_1 = tmp;
              loadHandler2 = function loadHandler() {
                /* body not rendered: F150673 */
              };
              loadHandler = loadHandler2;
              errorHandler2 = function errorHandler() {
                /* body not rendered: F150674 */
              };
              errorHandler = errorHandler2;
              str7 = "error";
              listener = element.addEventListener("error", errorHandler2);
              str8 = "load";
              listener1 = element.addEventListener("load", loadHandler2);
              str9 = "readystatechange";
              listener2 = element.addEventListener("readystatechange", loadHandler2);
            } else {
              self = this;
              _document2 = document;
              str3 = "script";
              element1 = document.createElement("script");
              element1.src = tmp2.PLAID_LINK_JS;
              flag = true;
              element1.async = true;
              closure_0 = element1;
              closure_1 = tmp;
              loadHandler = function loadHandler() {
                /* body not rendered: F150673 */
              };
              errorHandler = function errorHandler() {
                /* body not rendered: F150674 */
              };
              str4 = "error";
              listener3 = element1.addEventListener("error", errorHandler);
              str5 = "load";
              listener4 = element1.addEventListener("load", loadHandler);
              str6 = "readystatechange";
              listener5 = element1.addEventListener("readystatechange", loadHandler);
              _document3 = document;
              body = document.body;
              appendChildResult = body.appendChild(element1);
              this._plaidScript = element1;
            }
          }
          return;
        }
        teardown() {
          self = this;
          if (this._plaidScript) {
            tmp = globalThis;
            _document = document;
            body = document.body;
            removeChildResult = body.removeChild(self._plaidScript);
          }
          tmp3 = closure_6(self, closure_7(USBankAccount.prototype));
          return Promise.resolve();
        }
      }
      let closure_0 = global("../lib/braintree-error");
      constants = global("./constants");
      const constants2 = global("./errors");
      let closure_3 = global("../lib/errors");
      let closure_4 = global("../lib/analytics");
      let closure_5 = global("../lib/once");
      let closure_6 = global("../lib/convert-methods-to-error");
      let closure_7 = global("../lib/methods");
      query =
        "mutation TokenizeUsBankAccount($input: TokenizeUsBankAccountInput!) {  tokenizeUsBankAccount(input: $input) {    paymentMethod {      id      details {        ... on UsBankAccountDetails {          last4        }      }    }  }}";
      let c9 =
        "mutation TokenizeUsBankLogin($input: TokenizeUsBankLoginInput!) {  tokenizeUsBankLogin(input: $input) {    paymentMethod {      id      details {        ... on UsBankAccountDetails {          last4        }      }    }  }}";
      const globalResult = global("@braintree/wrap-promise");
      module.exports = globalResult.wrapPrototype(USBankAccount);
    },
    {
      "../lib/analytics": 138,
      "../lib/braintree-error": 143,
      "../lib/convert-methods-to-error": 146,
      "../lib/errors": 154,
      "../lib/methods": 175,
      "../lib/once": 176,
      "./constants": 227,
      "./errors": 228,
      "@braintree/wrap-promise": 40,
    },
  ];
  obj[230] = items229;
  const items230 = [
    (arg0, arg1, arg2) => {
      const globalResult = global("../lib/braintree-error");
      const obj = {
        VAULT_MANAGER_DELETE_PAYMENT_METHOD_NONCE_REQUIRES_CLIENT_TOKEN: {
          type: globalResult.types.MERCHANT,
          code: "VAULT_MANAGER_DELETE_PAYMENT_METHOD_NONCE_REQUIRES_CLIENT_TOKEN",
          message: "A client token with a customer id must be used to delete a payment method nonce.",
        },
        VAULT_MANAGER_PAYMENT_METHOD_NONCE_NOT_FOUND: {
          type: globalResult.types.MERCHANT,
          code: "VAULT_MANAGER_PAYMENT_METHOD_NONCE_NOT_FOUND",
        },
        VAULT_MANAGER_DELETE_PAYMENT_METHOD_UNKNOWN_ERROR: {
          type: globalResult.types.UNKNOWN,
          code: "VAULT_MANAGER_DELETE_PAYMENT_METHOD_UNKNOWN_ERROR",
        },
      };
      module.exports = obj;
    },
    { "../lib/braintree-error": 143 },
  ];
  obj[231] = items230;
  const items231 = [
    (arg0, arg1, arg2) => {
      let closure_0 = global("../lib/basic-component-verification");
      let closure_1 = global("../lib/create-deferred-client");
      let closure_2 = global("../lib/create-assets-url");
      let closure_3 = global("./vault-manager");
      let obj = {
        create: global("@braintree/wrap-promise")(function create(client) {
          let obj = { name: "Vault Manager", client: client.client, authorization: client.authorization };
          const verifyResult = client.verify(obj);
          return verifyResult.then(() => {
            let obj2;
            const obj = { createPromise: closure_1.create(obj2) };
            obj2 = {
              authorization: client.authorization,
              client: client.client,
              debug: client.debug,
              assetsUrl: closure_2.create(client.authorization),
              name: "Vault Manager",
            };
            const tmp = new closure_3(obj);
            return tmp;
          });
        }),
        VERSION: "3.112.1",
      };
      module.exports = obj;
    },
    {
      "../lib/basic-component-verification": 141,
      "../lib/create-assets-url": 148,
      "../lib/create-deferred-client": 150,
      "./vault-manager": 233,
      "@braintree/wrap-promise": 40,
    },
  ];
  obj[232] = items231;
  const items232 = [
    (arg0, arg1, arg2) => {
      class VaultManager {
        constructor(createPromise) {
          this._createPromise = createPromise.createPromise;
        }
        fetchPaymentMethods(arg0) {
          tmp = global || {};
          num = 0;
          if (true === tmp.defaultFirst) {
            num = 1;
          }
          c0 = num;
          _createPromise = this._createPromise;
          nextPromise = _createPromise.then((request) => {
            let obj2;
            const obj = { endpoint: "payment_methods", method: "get", data: obj2 };
            obj2 = { defaultFirst: num };
            return request.request(obj);
          });
          fn = function (paymentMethods) {
            num.sendEvent(this._createPromise, "vault-manager.fetch-payment-methods.succeeded");
            paymentMethods = paymentMethods.paymentMethods;
            return paymentMethods.map(formatPaymentMethodPayload);
          };
          return nextPromise.then(fn.bind(this));
        }
        deletePaymentMethod(arg0) {
          closure_0 = global;
          _createPromise = this._createPromise;
          return _createPromise.then(function (getConfiguration) {
            let catchPromise;
            let obj2;
            let obj3;
            let obj4;
            singleUseTokenId = getConfiguration;
            if ("CLIENT_TOKEN" === getConfiguration.getConfiguration().authorizationType) {
              let obj = { api: "graphQLApi", data: obj2 };
              obj2 = {
                query:
                  "mutation DeletePaymentMethodFromSingleUseToken($input: DeletePaymentMethodFromSingleUseTokenInput!) {  deletePaymentMethodFromSingleUseToken(input: $input) {    clientMutationId  }}",
                variables: obj3,
                operationName: "DeletePaymentMethodFromSingleUseToken",
              };
              obj3 = { input: obj4 };
              obj4 = { singleUseTokenId };
              const requestResult = getConfiguration.request(obj);
              const nextPromise = requestResult.then(() => {
                /* body not rendered: F154314 */
              });
              catchPromise = nextPromise.catch(() => {
                /* body not rendered: F154315 */
              });
            } else {
              let self = this;
              let self2 = this;
              const tmp4 = new closure_1_1(constants.VAULT_MANAGER_DELETE_PAYMENT_METHOD_NONCE_REQUIRES_CLIENT_TOKEN);
              catchPromise = reject(tmp4);
            }
            return catchPromise;
          });
        }
        teardown() {
          closure_3(this, closure_4(VaultManager.prototype));
          return Promise.resolve();
        }
      }
      function formatPaymentMethodPayload(nonce) {
        const obj = {
          nonce: nonce.nonce,
          default: nonce.default,
          details: nonce.details,
          hasSubscription: nonce.hasSubscription,
          type: nonce.type,
        };
        if (nonce.description) {
          obj.description = nonce.description;
        }
        if (nonce.binData) {
          obj.binData = nonce.binData;
        }
        return obj;
      }
      let closure_0 = global("../lib/analytics");
      let closure_1 = global("../lib/braintree-error");
      let closure_2 = global("./errors");
      let closure_3 = global("../lib/convert-methods-to-error");
      let closure_4 = global("../lib/methods");
      const globalResult = global("@braintree/wrap-promise");
      module.exports = globalResult.wrapPrototype(VaultManager);
    },
    {
      "../lib/analytics": 138,
      "../lib/braintree-error": 143,
      "../lib/convert-methods-to-error": 146,
      "../lib/methods": 175,
      "./errors": 231,
      "@braintree/wrap-promise": 40,
    },
  ];
  obj[233] = items232;
  const items233 = [
    function (arg0, arg1, arg2) {
      const fn =
        (this && this.__importDefault) ||
        ((__esModule) => {
          let tmp2;
          const tmp = __esModule;
          if (!tmp) {
            tmp2 = { default: __esModule };
            const obj = { default: __esModule };
          } else {
            tmp2 = __esModule;
          }
          return tmp2;
        });
      let closure_0 = fn(global("./venmo-desktop"));
      module.exports = function createVenmoDesktop(arg0) {
        const _default = new closure_0.default(arg0);
        return _default.initialize();
      };
    },
    { "./venmo-desktop": 236 },
  ];
  obj[234] = items233;
  const items234 = [
    (arg0, arg1, arg2) => {
      arg2.LEGACY_CREATE_PAYMENT_CONTEXT_QUERY = undefined;
      arg2.CREATE_PAYMENT_CONTEXT_QUERY = undefined;
      arg2.LEGACY_UPDATE_PAYMENT_CONTEXT_QUERY = undefined;
      arg2.UPDATE_PAYMENT_CONTEXT_QUERY = undefined;
      arg2.LEGACY_VENMO_PAYMENT_CONTEXT_STATUS_QUERY = undefined;
      arg2.VENMO_PAYMENT_CONTEXT_STATUS_QUERY = undefined;
      arg2.LEGACY_CREATE_PAYMENT_CONTEXT_QUERY =
        "mutation CreateVenmoQRCodePaymentContext($input: CreateVenmoQRCodePaymentContextInput!) {\n  createVenmoQRCodePaymentContext(input: $input) {\n    clientMutationId\n    venmoQRCodePaymentContext {\n      id\n      merchantId\n      createdAt\n      expiresAt\n    }\n  }\n}";
      arg2.CREATE_PAYMENT_CONTEXT_QUERY =
        "mutation CreateVenmoPaymentContext($input: CreateVenmoPaymentContextInput!) {\n  createVenmoPaymentContext(input: $input) {\n    clientMutationId\n    venmoPaymentContext {\n      id\n      merchantId\n      createdAt\n      expiresAt\n    }\n  }\n}";
      arg2.LEGACY_UPDATE_PAYMENT_CONTEXT_QUERY =
        "mutation UpdateVenmoQRCodePaymentContext($input: UpdateVenmoQRCodePaymentContextInput!) {\n  updateVenmoQRCodePaymentContext(input: $input) {\n    clientMutationId\n  }\n}";
      arg2.UPDATE_PAYMENT_CONTEXT_QUERY =
        "mutation UpdateVenmoPaymentContextStatus($input: UpdateVenmoPaymentContextStatusInput!) {\n  updateVenmoPaymentContextStatus(input: $input) {\n    clientMutationId\n  }\n}";
      arg2.LEGACY_VENMO_PAYMENT_CONTEXT_STATUS_QUERY =
        "query PaymentContext($id: ID!) {\n  node(id: $id) {\n    ... on VenmoQRCodePaymentContext {\n      status\n      paymentMethodId\n      userName\n    }\n  }\n}";
      arg2.VENMO_PAYMENT_CONTEXT_STATUS_QUERY =
        "query PaymentContext($id: ID!) {\n  node(id: $id) {\n    ... on VenmoPaymentContext {\n      status\n      paymentMethodId\n      userName\n      payerInfo {\n        firstName\n        lastName\n        phoneNumber\n        email\n        externalId\n        userName\n        billingAddress {\n          fullName\n          addressLine1\n          addressLine2\n          adminArea1\n          adminArea2\n          postalCode\n          countryCode\n        }\n        shippingAddress {\n          fullName\n          addressLine1\n          addressLine2\n          adminArea1\n          adminArea2\n          postalCode\n          countryCode\n        }\n      }\n    }\n  }\n}";
    },
    {},
  ];
  obj[235] = items234;
  const items235 = [
    function (fn, arg1, arg2) {
      let self = this;
      let input =
        (this && self.__assign) ||
        function () {
          const obj =
            Object.assign ||
            function (arg0) {
              let num;
              const length = arguments.length;
              for (let num = 1; num < length; num = num + 1) {
                let tmp = arguments[num];
                for (const key10012 in tmp) {
                  let _Object = Object;
                  hasOwnProperty = Object.prototype.hasOwnProperty;
                  if (!hasOwnProperty.call(tmp, key10012)) {
                    continue;
                  } else {
                    arg0[key10012] = tmp[key10012];
                    continue;
                  }
                  continue;
                }
              }
              return arg0;
            };
          return obj(...arguments);
        };
      fn =
        (self && self.__importDefault) ||
        ((__esModule) => {
          let tmp2;
          const tmp = __esModule;
          if (!tmp) {
            tmp2 = { default: __esModule };
            const obj = { default: __esModule };
          } else {
            tmp2 = __esModule;
          }
          return tmp2;
        });
      let closure_1 = fn(fn("framebus"));
      let closure_2 = fn(fn("@braintree/iframer"));
      let closure_3 = fn(fn("@braintree/uuid"));
      constants = fn("../shared/events");
      const constants2 = fn("./queries");
      class VenmoDesktop {
        constructor(env) {
          let obj;
          let obj2;
          let text;
          obj = {
            isHidden: true,
            env: env.environment,
            id: closure_3.default(),
            profileId: env.profileId,
            displayName: env.displayName,
            paymentMethodUsage: env.paymentMethodUsage,
            shouldUseLegacyQRCodeMutation: !obj.paymentMethodUsage,
            bus: new closure_1.default(obj2),
            alertBox: <div />,
            iframe: closure_2.default({
              src: text,
              name: "venmo-desktop-iframe",
              style: {
                display: "none",
                position: "fixed",
                top: "0",
                bottom: "0",
                right: "0",
                left: "0",
                height: "100%",
                width: "100%",
                zIndex: "9999999",
              },
              title: "Venmo Desktop",
            }),
          };
          text = `${env.url}#${obj.env}_${obj.id}`;
          obj2 = { channel: obj.id, verifyDomain: env.verifyDomain, targetFrames: [] };
          ({ apiRequest: obj.apiRequest, sendEvent: obj.sendEvent, Promise: obj.Promise } = env);
          new closure_1.default(obj2);
          const alertBox = obj.alertBox;
          const attr = alertBox.setAttribute("data-venmo-desktop-id", obj.id);
          const alertBox2 = obj.alertBox;
          const attr1 = alertBox2.setAttribute("role", "alert");
          obj.alertBox.style.position = "fixed";
          obj.alertBox.style.display = "none";
          obj.alertBox.style.height = "1px";
          obj.alertBox.style.width = "1px";
          obj.alertBox.style.overflow = "hidden";
          obj.alertBox.style.zIndex = "0";
          const bus = obj.bus;
          bus.addTargetFrame(obj.iframe);
        }
        initialize() {
          self = this;
          promise = new this.Promise((arg0) => {
            let closure_0;
            _self = arg0;
            const bus = _self.bus;
            bus.on(constants.VENMO_DESKTOP_IFRAME_READY, () => {
              closure_0(self);
            });
            const bus2 = _self.bus;
            bus2.on(constants.VENMO_DESKTOP_REQUEST_NEW_QR_CODE, () => {
              closure_0.sendEvent("venmo.tokenize.desktop.restarted-from-error-view");
              closure_0.startPolling();
            });
            body.appendChild(_self.iframe);
            const body2 = document.body;
            body2.appendChild(_self.alertBox);
          });
          return promise;
        }
        launchDesktopFlow() {
          self = this;
          this.isHidden = false;
          promise = new this.Promise((arg0, launchDesktopPromiseRejectFunction) => {
            let closure_0;
            _self = arg0;
            _self.launchDesktopPromiseRejectFunction = launchDesktopPromiseRejectFunction;
            function removeListeners() {}
            function unknownErrorHandler(err) {
              if (typeof removeListeners === "function") {
                const bus = self.bus;
                bus.off(customerCancelledHandler.VENMO_DESKTOP_CUSTOMER_CANCELED, customerCancelledHandler);
                const bus2 = self.bus;
                bus2.off(customerCancelledHandler.VENMO_DESKTOP_UNKNOWN_ERROR, unknownErrorHandler);
                self.sendEvent("venmo.tokenize.desktop.unknown-error");
                const obj = { allowUIToHandleError: false, reason: "UNKNOWN_ERROR", err };
                launchDesktopPromiseRejectFunction(obj);
              } else {
                throw new TypeError("Trying to call a non-function");
              }
            }
            function customerCancelledHandler() {
              if (typeof removeListeners === "function") {
                const bus = self.bus;
                bus.off(customerCancelledHandler.VENMO_DESKTOP_CUSTOMER_CANCELED, customerCancelledHandler);
                const bus2 = self.bus;
                bus2.off(customerCancelledHandler.VENMO_DESKTOP_UNKNOWN_ERROR, unknownErrorHandler);
                const result = self.updateVenmoDesktopPaymentContext("CANCELED");
                self.sendEvent("venmo.tokenize.desktop.status-change.canceled-from-modal");
                launchDesktopPromiseRejectFunction({ allowUIToHandleError: false, reason: "CUSTOMER_CANCELED" });
              } else {
                throw new TypeError("Trying to call a non-function");
              }
            }
            _self.completedHandler = (arg0) => {
              if (typeof removeListeners === "function") {
                const bus = self.bus;
                bus.off(customerCancelledHandler.VENMO_DESKTOP_CUSTOMER_CANCELED, customerCancelledHandler);
                const bus2 = self.bus;
                bus2.off(customerCancelledHandler.VENMO_DESKTOP_UNKNOWN_ERROR, unknownErrorHandler);
                closure_0(arg0);
              } else {
                throw new TypeError("Trying to call a non-function");
              }
            };
            let bus = _self.bus;
            bus.on(constants.VENMO_DESKTOP_CUSTOMER_CANCELED, customerCancelledHandler);
            let bus2 = _self.bus;
            bus2.on(constants.VENMO_DESKTOP_UNKNOWN_ERROR, unknownErrorHandler);
          });
          this.iframe.style.display = "block";
          setAlertResult = this.setAlert("Generating a QR code, get your Venmo app ready");
          iframe = this.iframe;
          focusResult = iframe.focus();
          startPollingResult = this.startPolling();
          nextPromise = promise.then((result) => {
            delete self["venmoContextId"];
            delete self["launchDesktopPromiseRejectFunction"];
            return result;
          });
          return nextPromise.catch((error) => {
            delete self["venmoContextId"];
            delete self["launchDesktopPromiseRejectFunction"];
            const _Promise = self.Promise;
            return _Promise.reject(error);
          });
        }
        triggerCompleted(arg0) {
          let closure_0 = arg0;
          const self = this;
          if (!this.isHidden) {
            const _setTimeout = setTimeout;
            const timerId = setTimeout(() => {
              if (self.completedHandler) {
                self.completedHandler(closure_0);
              }
              delete self["completedHandler"];
            }, 2000);
          }
        }
        triggerRejected(arg0) {
          const self = this;
          if (this.launchDesktopPromiseRejectFunction) {
            const result = self.launchDesktopPromiseRejectFunction(arg0);
          }
        }
        hideDesktopFlow() {
          this.setAlert("");
          this.iframe.style.display = "none";
          const bus = this.bus;
          bus.emit(constants.VENMO_DESKTOP_CLOSED_FROM_PARENT);
          this.isHidden = true;
        }
        displayError(message) {
          const self = this;
          if (!this.isHidden) {
            const bus = self.bus;
            const obj = { message };
            bus.emit(constants.VENMO_DESKTOP_DISPLAY_ERROR, obj);
            self.setAlert(message);
          }
        }
        displayQRCode(id, merchantId) {
          const self = this;
          if (!this.isHidden) {
            const bus = self.bus;
            const obj = { id, merchantId };
            bus.emit(constants.VENMO_DESKTOP_DISPLAY_QR_CODE, obj);
            self.setAlert("To scan the QR code, open your Venmo app");
          }
        }
        authorize() {
          const self = this;
          if (!this.isHidden) {
            const bus = self.bus;
            bus.emit(constants.VENMO_DESKTOP_AUTHORIZE);
            self.setAlert("Venmo account authorized");
          }
        }
        authorizing() {
          const self = this;
          if (!this.isHidden) {
            const bus = self.bus;
            bus.emit(constants.VENMO_DESKTOP_AUTHORIZING);
            self.setAlert("Authorize on your Venmo app");
          }
        }
        startPolling() {
          const self = this;
          const venmoDesktopPaymentContext = this.createVenmoDesktopPaymentContext();
          const nextPromise = venmoDesktopPaymentContext.then((expiresAt) => {
            const date = new Date(expiresAt.expiresAt);
            const time = date.getTime();
            const date1 = new Date(expiresAt.createdAt);
            const diff = time - date1.getTime();
            const sum = Date.now() + diff;
            self.displayQRCode(expiresAt.id, expiresAt.merchantId);
            return self.pollForStatusChange(expiresAt.status, sum);
          });
          const nextPromise1 = nextPromise.then((userName) => {
            let str;
            let str4;
            const tmp = userName;
            if (tmp) {
              const obj = {
                paymentMethodNonce: userName.paymentMethodId,
                username: `@${str.replace("@", "")}`,
                payerInfo: userName.payerInfo,
                id: str4,
              };
              str4 = self.venmoContextId;
              const triggerCompleted = self.triggerCompleted;
              str = userName.userName || "";
              if (!str4) {
                str4 = "";
              }
              triggerCompleted(obj);
            }
          });
          return nextPromise1.catch((error) => {
            if (!error.allowUIToHandleError) {
              self.sendEvent("venmo.tokenize.desktop.unhandled-error");
              self.triggerRejected(error);
            }
          });
        }
        pollForStatusChange(arg0, arg1) {
          self = this;
          status = fn;
          closure_1 = arg1;
          self = this;
          if (this.venmoContextId) {
            tmp2 = globalThis;
            _Date = Date;
            if (Date.now() > arg1) {
              str = "EXPIRED";
              result = self.updateVenmoDesktopPaymentContext("EXPIRED");
              nextPromise = result.then(() => {
                self.displayError("Something went wrong");
                self.sendEvent("venmo.tokenize.desktop.status-change.sdk-timeout");
                const _Promise = self.Promise;
                return _Promise.reject({ allowUIToHandleError: true, reason: "TIMEOUT" });
              });
            } else {
              result1 = self.lookupVenmoDesktopPaymentContext();
              nextPromise = result1.then(function (status) {
                if (self.venmoContextId) {
                  const tmp = status;
                  if (tmp) {
                    status = status.status;
                    if (status !== status) {
                      self.sendEvent(`venmo.tokenize.desktop.status-change.${status.toLowerCase()}`);
                      if ("CREATED" !== status) {
                        if ("EXPIRED" !== status) {
                          if ("FAILED" !== status) {
                            if ("CANCELED" !== status) {
                              if ("SCANNED" === status) {
                                self.authorizing();
                              } else if ("APPROVED" === status) {
                                self.authorize();
                                const _Promise2 = self.Promise;
                                return _Promise2.resolve(status);
                              }
                            }
                          }
                        }
                        let str5 = "Something went wrong";
                        if ("CANCELED" === status) {
                          str5 = "The authorization was canceled";
                        }
                        self.displayError(str5);
                        const _Promise3 = self.Promise;
                        const obj2 = { allowUIToHandleError: true, reason: status };
                        return _Promise3.reject(obj2);
                      }
                    }
                    self = this;
                    const self2 = this;
                    const promise = new self.Promise((arg0, arg1) => {
                      let closure_0 = arg0;
                      closure_1 = arg1;
                      const timerId = setTimeout(() => {
                        /* body not rendered: F155624 */
                      }, 1000);
                    });
                    return promise;
                  }
                }
                const _Promise = self.Promise;
                return _Promise.resolve();
              });
            }
            resolveResult = nextPromise;
          } else {
            _Promise = self.Promise;
            resolveResult = _Promise.resolve();
          }
          return resolveResult;
        }
        teardown() {
          const self = this;
          const bus = this.bus;
          bus.teardown();
          if (this.iframe.parentNode) {
            const parentNode = self.iframe.parentNode;
            parentNode.removeChild(self.iframe);
          }
          if (self.alertBox.parentNode) {
            const parentNode2 = self.alertBox.parentNode;
            parentNode2.removeChild(self.alertBox);
          }
        }
        setAlert(textContent) {
          let str = "none";
          const style = this.alertBox.style;
          if (textContent) {
            str = "block";
          }
          style.display = str;
          this.alertBox.textContent = textContent;
        }
        createPaymentContextFromGraphqlLegacyQRCodeMutation(intent) {
          let obj2;
          const obj = { input: obj2 };
          obj2 = { environment: this.env, intent };
          const apiRequestResult = this.apiRequest(constants2.LEGACY_CREATE_PAYMENT_CONTEXT_QUERY, obj);
          return apiRequestResult.then(
            (createVenmoQRCodePaymentContext) =>
              createVenmoQRCodePaymentContext.createVenmoQRCodePaymentContext.venmoQRCodePaymentContext,
          );
        }
        createPaymentContextFromGraphQL(intent) {
          const self = this;
          input = { intent, paymentMethodUsage: this.paymentMethodUsage, customerClient: "DESKTOP" };
          if (this.profileId) {
            input.merchantProfileId = self.profileId;
          }
          if (self.displayName) {
            input.displayName = self.displayName;
          }
          const apiRequestResult = self.apiRequest(constants2.CREATE_PAYMENT_CONTEXT_QUERY, { input });
          return apiRequestResult.then(
            (createVenmoPaymentContext) => createVenmoPaymentContext.createVenmoPaymentContext.venmoPaymentContext,
          );
        }
        createVenmoDesktopPaymentContext() {
          let paymentContextFromGraphqlLegacyQRCodeMutation;
          const self = this;
          if (this.shouldUseLegacyQRCodeMutation) {
            paymentContextFromGraphqlLegacyQRCodeMutation =
              self.createPaymentContextFromGraphqlLegacyQRCodeMutation("PAY_FROM_APP");
          } else {
            paymentContextFromGraphqlLegacyQRCodeMutation = self.createPaymentContextFromGraphQL("PAY_FROM_APP");
          }
          return paymentContextFromGraphqlLegacyQRCodeMutation.then((id) => {
            self.venmoContextId = id.id;
            return {
              id: id.id,
              status: id.status,
              merchantId: self.profileId || id.merchantId,
              createdAt: id.createdAt,
              expiresAt: id.expiresAt,
            };
          });
        }
        updateVenmoDesktopPaymentContext(status, arg1) {
          let obj3;
          let obj = arg1;
          if (undefined === arg1) {
            obj = {};
          }
          const self = this;
          if (this.venmoContextId) {
            const obj2 = { input: obj(obj3, obj) };
            obj3 = { id: self.venmoContextId, status };
            const apiRequestResult = self.apiRequest(
              self.shouldUseLegacyQRCodeMutation
                ? constants2.LEGACY_UPDATE_PAYMENT_CONTEXT_QUERY
                : constants2.UPDATE_PAYMENT_CONTEXT_QUERY,
              obj2,
            );
            return apiRequestResult.then(() => {});
          } else {
            const _Promise = self.Promise;
            return _Promise.resolve();
          }
        }
        lookupVenmoDesktopPaymentContext() {
          const self = this;
          if (this.venmoContextId) {
            const obj = { id: self.venmoContextId };
            const apiRequestResult = self.apiRequest(
              self.shouldUseLegacyQRCodeMutation
                ? constants2.LEGACY_VENMO_PAYMENT_CONTEXT_STATUS_QUERY
                : constants2.VENMO_PAYMENT_CONTEXT_STATUS_QUERY,
              obj,
            );
            return apiRequestResult.then((node) => node.node);
          } else {
            const _Promise = self.Promise;
            return _Promise.resolve();
          }
        }
      }
      arg2.default = VenmoDesktop;
    },
    { "../shared/events": 241, "./queries": 235, "@braintree/iframer": 32, "@braintree/uuid": 36, framebus: 50 },
  ];
  obj[236] = items235;
  const items236 = [
    (arg0, arg1, arg2) => {
      let closure_0 = global("../lib/analytics");
      let closure_1 = global("../lib/basic-component-verification");
      let closure_2 = global("../lib/create-deferred-client");
      let closure_3 = global("../lib/create-assets-url");
      let closure_4 = global("./shared/errors");
      const globalResult = global("@braintree/wrap-promise");
      let closure_5 = global("../lib/braintree-error");
      let closure_6 = global("./venmo");
      const browserSupported = global("./shared/supports-venmo");
      let obj = {
        create: globalResult(function create(client) {
          let obj = { name: "Venmo", client: client.client, authorization: client.authorization };
          const verifyResult = closure_1.verify(obj);
          return verifyResult.then(function () {
            let reject2Result;
            if (client.profileId) {
              if (typeof client.profileId !== "string") {
                const self3 = this;
                const self4 = this;
                const reject2 = Promise.reject;
                const tmp13 = new closure_1_5(constants.VENMO_INVALID_PROFILE_ID);
                reject2Result = reject2(tmp13);
              }
              return reject2Result;
            }
            if (client.deepLinkReturnUrl) {
              if (typeof client.deepLinkReturnUrl !== "string") {
                let tmp5 = globalThis;
                let self = this;
                let self2 = this;
                const tmp8 = new closure_1_5(constants.VENMO_INVALID_DEEP_LINK_RETURN_URL);
                reject2Result = reject(tmp8);
              }
            }
            const obj = {
              authorization: client.authorization,
              client: client.client,
              debug: client.debug,
              assetsUrl: closure_1_3.create(client.authorization),
              name: "Venmo",
            };
            const obj2 = closure_1_2.create(obj);
            const nextPromise = obj2.then(function (client) {
              let rejectResult = client;
              closure_0.client = client;
              if (!client.getConfiguration().gatewayConfiguration.payWithVenmo) {
                const self = this;
                const self2 = this;
                const tmp5 = new closure_2_5(constants.VENMO_NOT_ENABLED);
                rejectResult = reject(tmp5);
              }
              return rejectResult;
            });
            client.createPromise = nextPromise;
            client = new closure_1_6(tmp);
            const tmp2 = new closure_1_6(tmp);
            client.sendEvent(nextPromise, "venmo.initialized");
            reject2Result = nextPromise.then(() => closure_0);
          });
        }),
        isBrowserSupported(arg0) {
          return browserSupported.isBrowserSupported(arg0);
        },
        VERSION: "3.112.1",
      };
      module.exports = obj;
    },
    {
      "../lib/analytics": 138,
      "../lib/basic-component-verification": 141,
      "../lib/braintree-error": 143,
      "../lib/create-assets-url": 148,
      "../lib/create-deferred-client": 150,
      "./shared/errors": 240,
      "./shared/supports-venmo": 243,
      "./venmo": 245,
      "@braintree/wrap-promise": 40,
    },
  ];
  obj[237] = items236;
  const items237 = [
    (arg0, arg1, arg2) => {
      function isAndroidWebview() {
        let tmp = fn();
        if (tmp) {
          const _window = window;
          const str = window.navigator.userAgent;
          const formatted = str.toLowerCase();
          tmp = formatted.indexOf("wv") > -1;
        }
        return tmp;
      }
      function isIosChrome() {
        const tmp = globalResult2() && globalResult1();
        return tmp;
      }
      function isFacebookOwnedBrowserOnAndroid() {
        const str = window.navigator.userAgent;
        const formatted = str.toLowerCase();
        let tmp = formatted.indexOf("huawei") > -1 && formatted.indexOf("fban") > -1;
        if (!tmp) {
          let tmp3 = fn();
          if (tmp3) {
            tmp3 = formatted.indexOf("fb_iab") > -1 || formatted.indexOf("instagram") > -1;
            const tmp4 = formatted.indexOf("fb_iab") > -1 || formatted.indexOf("instagram") > -1;
          }
          tmp = tmp3;
        }
        return tmp;
      }
      function doesNotSupportWindowOpenInIos() {
        let tmp = globalResult2();
        if (tmp) {
          tmp = globalResult4() || !globalResult3();
          const tmp3 = globalResult4() || !globalResult3();
        }
        return tmp;
      }
      const globalResult = global("@braintree/browser-detection/is-android");
      const fn = globalResult;
      const globalResult1 = global("@braintree/browser-detection/is-chrome");
      const globalResult2 = global("@braintree/browser-detection/is-ios");
      const globalResult3 = global("@braintree/browser-detection/is-ios-safari");
      const globalResult4 = global("@braintree/browser-detection/is-ios-webview");
      module.exports = {
        isAndroid: globalResult,
        isAndroidWebview,
        isChrome: globalResult1,
        isIos: globalResult2,
        isIosChrome,
        isSamsung: global("@braintree/browser-detection/is-samsung"),
        isIosSafari: globalResult3,
        isIosWebview: globalResult4,
        isFacebookOwnedBrowserOnAndroid,
        doesNotSupportWindowOpenInIos,
      };
      ({
        isAndroid: globalResult,
        isAndroidWebview,
        isChrome: globalResult1,
        isIos: globalResult2,
        isIosChrome,
        isSamsung: global("@braintree/browser-detection/is-samsung"),
        isIosSafari: globalResult3,
        isIosWebview: globalResult4,
        isFacebookOwnedBrowserOnAndroid,
        doesNotSupportWindowOpenInIos,
      });
    },
    {
      "@braintree/browser-detection/is-android": 20,
      "@braintree/browser-detection/is-chrome": 22,
      "@braintree/browser-detection/is-ios": 27,
      "@braintree/browser-detection/is-ios-safari": 24,
      "@braintree/browser-detection/is-ios-webview": 25,
      "@braintree/browser-detection/is-samsung": 28,
    },
  ];
  obj[238] = items237;
  const items238 = [
    (arg0, arg1, arg2) => {
      module.exports = {
        DOCUMENT_VISIBILITY_CHANGE_EVENT_DELAY: 500,
        DEFAULT_PROCESS_RESULTS_DELAY: 1000,
        VENMO_APP_OR_MOBILE_AUTH_URL: "https://venmo.com/go/checkout",
        VENMO_MOBILE_APP_AUTH_ONLY_URL: "https://venmo.com/braintree/checkout",
        VENMO_WEB_LOGIN_URL: "https://account.venmo.com/go/web",
      };
    },
    {},
  ];
  obj[239] = items238;
  const items239 = [
    (arg0, arg1, arg2) => {
      const globalResult = global("../../lib/braintree-error");
      const obj = {
        VENMO_NOT_ENABLED: {
          type: globalResult.types.MERCHANT,
          code: "VENMO_NOT_ENABLED",
          message: "Venmo is not enabled for this merchant.",
        },
        VENMO_TOKENIZATION_REQUEST_ACTIVE: {
          type: globalResult.types.MERCHANT,
          code: "VENMO_TOKENIZATION_REQUEST_ACTIVE",
          message: "Another tokenization request is active.",
        },
        VENMO_TOKENIZATION_REQUEST_NOT_ACTIVE: {
          type: globalResult.types.MERCHANT,
          code: "VENMO_TOKENIZATION_REQUEST_NOT_ACTIVE",
          message: "No tokenization in progress.",
        },
        VENMO_APP_FAILED: {
          type: globalResult.types.UNKNOWN,
          code: "VENMO_APP_FAILED",
          message: "Venmo app encountered a problem.",
        },
        VENMO_APP_CANCELED: {
          type: globalResult.types.CUSTOMER,
          code: "VENMO_APP_CANCELED",
          message: "Venmo app authorization was canceled.",
        },
        VENMO_CANCELED: {
          type: globalResult.types.CUSTOMER,
          code: "VENMO_CANCELED",
          message: "User canceled Venmo authorization, or Venmo app is not available.",
        },
        VENMO_CUSTOMER_CANCELED: {
          type: globalResult.types.CUSTOMER,
          code: "VENMO_CUSTOMER_CANCELED",
          message: "User canceled Venmo authorization.",
        },
        VENMO_NETWORK_ERROR: {
          type: globalResult.types.NETWORK,
          code: "VENMO_NETWORK_ERROR",
          message: "Something went wrong making the request",
        },
        VENMO_DESKTOP_CANCELED: {
          type: globalResult.types.CUSTOMER,
          code: "VENMO_DESKTOP_CANCELED",
          message: "User canceled Venmo authorization by closing the Venmo Desktop modal.",
        },
        VENMO_TOKENIZATION_CANCELED_BY_MERCHANT: {
          type: globalResult.types.MERCHANT,
          code: "VENMO_TOKENIZATION_CANCELED_BY_MERCHANT",
          message: "The Venmo tokenization was canceled by the merchant.",
        },
        VENMO_DESKTOP_UNKNOWN_ERROR: {
          type: globalResult.types.UNKNOWN,
          code: "VENMO_DESKTOP_UNKNOWN_ERROR",
          message: "Something went wrong with the Venmo Desktop flow.",
        },
        VENMO_MOBILE_PAYMENT_CONTEXT_SETUP_FAILED: {
          type: globalResult.types.NETWORK,
          code: "VENMO_MOBILE_PAYMENT_CONTEXT_SETUP_FAILED",
          message: "Something went wrong creating the Venmo Payment Context.",
        },
        VENMO_MOBILE_POLLING_TOKENIZATION_NETWORK_ERROR: {
          type: globalResult.types.UNKNOWN,
          code: "VENMO_MOBILE_POLLING_TOKENIZATION_NETWORK_ERROR",
          message: "Something went wrong during mobile polling.",
        },
        VENMO_MOBILE_POLLING_TOKENIZATION_EXPIRED: {
          type: globalResult.types.CUSTOMER,
          code: "VENMO_MOBILE_POLLING_TOKENIZATION_EXPIRED",
          message: "The Venmo authorization request is expired.",
        },
        VENMO_MOBILE_POLLING_TOKENIZATION_CANCELED: {
          type: globalResult.types.CUSTOMER,
          code: "VENMO_MOBILE_POLLING_TOKENIZATION_CANCELED",
          message: "The Venmo authorization was canceled",
        },
        VENMO_MOBILE_POLLING_TOKENIZATION_TIMEOUT: {
          type: globalResult.types.CUSTOMER,
          code: "VENMO_MOBILE_POLLING_TOKENIZATION_TIMEOUT",
          message: "Customer took too long to authorize Venmo payment.",
        },
        VENMO_MOBILE_POLLING_TOKENIZATION_FAILED: {
          type: globalResult.types.UNKNOWN,
          code: "VENMO_MOBILE_POLLING_TOKENIZATION_FAILED",
          message: "The Venmo authorization failed.",
        },
        VENMO_INVALID_PROFILE_ID: {
          type: globalResult.types.MERCHANT,
          code: "VENMO_INVALID_PROFILE_ID",
          message: "Venmo profile ID is invalid.",
        },
        VENMO_INVALID_DEEP_LINK_RETURN_URL: {
          type: globalResult.types.MERCHANT,
          code: "VENMO_INVALID_DEEP_LINK_RETURN_URL",
          message: "Venmo deep link return URL is invalid.",
        },
        VENMO_TOKENIZATION_FAILED: {
          type: globalResult.types.UNKNOWN,
          code: "VENMO_TOKENIZATION_FAILED",
          message: "Venmo encountered a problem",
        },
        VENMO_ECD_DISABLED: {
          type: globalResult.types.MERCHANT,
          code: "ECD_DISABLED",
          message:
            "Cannot collect customer data when ECD is disabled. Enable this feature in the Control Panel to collect this data.",
        },
      };
      module.exports = obj;
    },
    { "../../lib/braintree-error": 143 },
  ];
  obj[240] = items239;
  const items240 = [
    (arg0, arg1, arg2) => {
      arg2.VENMO_DESKTOP_AUTHORIZATION_TIMED_OUT = undefined;
      arg2.VENMO_DESKTOP_AUTHORIZE = undefined;
      arg2.VENMO_DESKTOP_AUTHORIZING = undefined;
      arg2.VENMO_DESKTOP_CUSTOMER_CANCELED = undefined;
      arg2.VENMO_DESKTOP_DISPLAY_ERROR = undefined;
      arg2.VENMO_DESKTOP_DISPLAY_QR_CODE = undefined;
      arg2.VENMO_DESKTOP_IFRAME_READY = undefined;
      arg2.VENMO_DESKTOP_CLOSED_FROM_PARENT = undefined;
      arg2.VENMO_DESKTOP_REQUEST_NEW_QR_CODE = undefined;
      arg2.VENMO_DESKTOP_UNKNOWN_ERROR = undefined;
      arg2.VENMO_DESKTOP_AUTHORIZATION_TIMED_OUT = "VENMO_DESKTOP_AUTHORIZATION_TIMED_OUT";
      arg2.VENMO_DESKTOP_AUTHORIZE = "VENMO_DESKTOP_AUTHORIZE";
      arg2.VENMO_DESKTOP_AUTHORIZING = "VENMO_DESKTOP_AUTHORIZING";
      arg2.VENMO_DESKTOP_CUSTOMER_CANCELED = "VENMO_DESKTOP_CUSTOMER_CANCELED";
      arg2.VENMO_DESKTOP_DISPLAY_ERROR = "VENMO_DESKTOP_DISPLAY_ERROR";
      arg2.VENMO_DESKTOP_DISPLAY_QR_CODE = "VENMO_DESKTOP_DISPLAY_QR_CODE";
      arg2.VENMO_DESKTOP_IFRAME_READY = "VENMO_DESKTOP_IFRAME_READY";
      arg2.VENMO_DESKTOP_CLOSED_FROM_PARENT = "VENMO_DESKTOP_CLOSED_FROM_PARENT";
      arg2.VENMO_DESKTOP_REQUEST_NEW_QR_CODE = "VENMO_DESKTOP_REQUEST_NEW_QR_CODE";
      arg2.VENMO_DESKTOP_UNKNOWN_ERROR = "VENMO_DESKTOP_UNKNOWN_ERROR";
    },
    {},
  ];
  obj[241] = items240;
  const items241 = [
    (arg0, arg1, arg2) => {
      constants = global("./constants");
      module.exports = function getVenmoUrl(useAllowDesktopWebLogin) {
        let VENMO_WEB_LOGIN_URL;
        if (useAllowDesktopWebLogin.useAllowDesktopWebLogin) {
          VENMO_WEB_LOGIN_URL = constants.VENMO_WEB_LOGIN_URL;
        } else {
          VENMO_WEB_LOGIN_URL = useAllowDesktopWebLogin.mobileWebFallBack
            ? constants.VENMO_APP_OR_MOBILE_AUTH_URL
            : constants.VENMO_MOBILE_APP_AUTH_ONLY_URL;
        }
        return VENMO_WEB_LOGIN_URL;
      };
    },
    { "./constants": 239 },
  ];
  obj[242] = items241;
  const items242 = [
    (arg0, arg1, arg2) => {
      const android = global("./browser-detection");
      let closure_1 = global("../../lib/in-iframe");
      const obj = {
        isBrowserSupported(arg0) {
          let isAndroidResult = android.isAndroid();
          const tmp2 = isAndroidResult || android.isIos();
          if (isAndroidResult) {
            isAndroidResult = android.isChrome();
          }
          let tmp3 = android.isIosSafari() || isAndroidResult;
          const obj2 = arg0 || {};
          const tmp4 = obj2.allowDesktopWebLogin || obj2.allowDesktop;
          const hasOwnPropertyResult = obj2.hasOwnProperty("allowNewBrowserTab");
          let allowNewBrowserTab = !hasOwnPropertyResult;
          if (hasOwnPropertyResult) {
            allowNewBrowserTab = obj2.allowNewBrowserTab;
          }
          const hasOwnPropertyResult1 = obj2.hasOwnProperty("allowWebviews");
          let allowWebviews = !hasOwnPropertyResult1;
          if (hasOwnPropertyResult1) {
            allowWebviews = obj2.allowWebviews;
          }
          const tmp7 = allowNewBrowserTab && !closure_1();
          let tmp10 = !(
            (!tmp7 && android.isIosChrome()) ||
            android.isFacebookOwnedBrowserOnAndroid() ||
            android.isSamsung()
          );
          (!tmp7 && android.isIosChrome()) || android.isFacebookOwnedBrowserOnAndroid() || android.isSamsung();
          if (tmp10) {
            let tmp11 = !allowWebviews;
            if (tmp11) {
              tmp11 = android.isAndroidWebview() || android.isIosWebview();
              android.isAndroidWebview() || android.isIosWebview();
            }
            let tmp13 = !tmp11;
            if (tmp13) {
              let tmp14 = true === tmp4;
              if (tmp2) {
                if (allowNewBrowserTab) {
                  tmp3 = tmp2;
                }
                tmp14 = tmp3;
              }
              tmp13 = tmp14;
            }
            tmp10 = tmp13;
          }
          return tmp10;
        },
      };
      module.exports = obj;
    },
    { "../../lib/in-iframe": 169, "./browser-detection": 238 },
  ];
  obj[243] = items242;
  const items243 = [
    (arg0, arg1, arg2) => {
      let id;
      let id2;
      let id3;
      let id4;
      let id5;
      let id6;
      let create = global("../../lib/frame-service/external");
      let closure_1 = global("../../lib/use-min");
      const globalResult = global("@braintree/extended-promise");
      let closure_2 = globalResult;
      let closure_3 = global("../shared/errors");
      let closure_4 = global("../../lib/braintree-error");
      let c5 = "venmo-desktop-web-backdrop";
      let c6 = "venmo-desktop-web-backdrop.hidden";
      let c7 = "venmo-backdrop-container";
      let c8 = "venmo-popup-cancel-button";
      let c9 = "venmo-popup-continue-button";
      let c10 = "venmo-message";
      let c11 = "venmo-instructions";
      let c12 = "venmo-full-logo";
      globalResult.suppressUnhandledPromiseMessage = true;
      const obj = {
        runWebLogin(frameServiceInstance) {
          let closure_2;
          let tmp;
          const element = document.getElementById(id);
          if (element) {
            let classList = element.classList;
            classList.remove("hidden");
          } else {
            const _document = document;
            const element1 = <style />;
            const _document2 = document;
            const element2 = <div />;
            const _document3 = document;
            const element3 = <div />;
            const _document4 = document;
            const element4 = <div />;
            const _document5 = document;
            const element5 = <div />;
            const _document6 = document;
            const element6 = <div />;
            const _document7 = document;
            const element7 = <button />;
            const _document8 = document;
            const element8 = <button />;
            element1.id = "venmo-desktop-web__injected-styles";
            const items = [
              `#${c6} {`,
              "display: none;",
              "}",
              `#${tmp} {`,
              "z-index: 3141592632;",
              "cursor: pointer;",
              "position: fixed;",
              "top: 0;",
              "left: 0;",
              "bottom: 0;",
              "width: 100%;",
              "background: rgba(0, 0, 0, 0.8);",
              "}",
            ];
            const items1 = [
              `#${c7} {`,
              "display: flex;",
              "align-content: center;",
              "justify-content: center;",
              "align-items: center;",
              "width: 100%;",
              "height: 100%;",
              "flex-direction: column;",
              "}",
            ];
            const items2 = [
              `#${c8} {`,
              "height: 24px;",
              "width: 380px;",
              "font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;",
              "font-style: normal;",
              "font-weight: 700;",
              "font-size: 18px;",
              "line-height: 24px;",
              "text-align: center;",
              "background-color: transparent;",
              "border: none;",
              "color: #FFFFFF;",
              "margin-top: 28px;",
              "}",
            ];
            const items3 = [
              `#${c9} {`,
              "width: 400px;",
              "height: 50px;",
              "background: #0074DE;",
              "border-radius: 24px;",
              "border: none;",
              "font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;",
              "font-style: normal;",
              "font-weight: 700;",
              "font-size: 18px;",
              "color: #FFFFFF;",
              "margin-top: 44px;",
              "}",
            ];
            const items4 = [
              `#${c10} {`,
              "font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;",
              "font-style: normal;",
              "font-weight: 500;",
              "font-size: 24px;",
              "line-height: 32px;",
              "text-align: center;",
              "color: #FFFFFF;",
              "margin-top: 32px;",
              "}",
            ];
            const items5 = [
              `#${c11} {`,
              "font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;",
              "font-style: normal;",
              "font-weight: 400;",
              "font-size: 16px;",
              "line-height: 20px;",
              "text-align: center;",
              "color: #FFFFFF;",
              "margin-top: 16px;",
              "width: 400px;",
              "}",
            ];
            const combined = items.concat(items1, items2, items3, items4, items5);
            element1.innerHTML = combined.join("\n");
            element2.id = id;
            element3.id = id;
            element4.id = id6;
            element4.innerHTML =
              '<svg width="198" height="58" viewBox="0 0 198 58" fill="none" xmlns="http://www.w3.org/2000/svg">\n  <path fill-rule="evenodd" clip-rule="evenodd" d="M43.0702 13.6572C44.1935 15.4585 44.6999 17.3139 44.6999 19.6576C44.6999 27.1328 38.1277 36.8436 32.7935 43.6625H20.6099L15.7236 15.2939L26.3917 14.3105L28.9751 34.4966C31.389 30.6783 34.3678 24.6779 34.3678 20.587C34.3678 18.3477 33.9727 16.8225 33.3553 15.5666L43.0702 13.6572Z" fill="white"/>\n  <path fill-rule="evenodd" clip-rule="evenodd" d="M56.8965 26.1491C58.8596 26.1491 63.8018 25.2772 63.8018 22.5499C63.8018 21.2402 62.8481 20.587 61.7242 20.587C59.7579 20.587 57.1776 22.8763 56.8965 26.1491ZM56.6715 31.5506C56.6715 34.8807 58.5787 36.1873 61.107 36.1873C63.8603 36.1873 66.4966 35.534 69.923 33.8433L68.6324 42.3523C66.2183 43.4976 62.4559 44.2617 58.8039 44.2617C49.5403 44.2617 46.2249 38.8071 46.2249 31.9879C46.2249 23.1496 51.6179 13.765 62.7365 13.765C68.858 13.765 72.2809 17.0949 72.2809 21.7317C72.2815 29.2066 62.4005 31.4965 56.6715 31.5506Z" fill="white"/>\n  <path fill-rule="evenodd" clip-rule="evenodd" d="M103.067 20.3142C103.067 21.4052 102.897 22.9875 102.727 24.0216L99.5262 43.6622H89.1385L92.0585 25.658C92.1139 25.1696 92.284 24.1865 92.284 23.6411C92.284 22.3314 91.4414 22.0047 90.4282 22.0047C89.0826 22.0047 87.7337 22.6042 86.8354 23.0418L83.5234 43.6625H73.0772L77.8495 14.257H86.8908L87.0052 16.6041C89.1382 15.2404 91.9469 13.7656 95.932 13.7656C101.212 13.765 103.067 16.3845 103.067 20.3142Z" fill="white"/>\n  <path fill-rule="evenodd" clip-rule="evenodd" d="M133.906 16.9841C136.881 14.9131 139.69 13.765 143.563 13.765C148.897 13.765 150.753 16.3845 150.753 20.3142C150.753 21.4052 150.583 22.9875 150.413 24.0216L147.216 43.6622H136.825L139.801 25.2774C139.855 24.786 139.971 24.1865 139.971 23.8063C139.971 22.3317 139.128 22.0047 138.115 22.0047C136.824 22.0047 135.535 22.5501 134.577 23.0418L131.266 43.6625H120.878L123.854 25.2777C123.908 24.7863 124.02 24.1868 124.02 23.8065C124.02 22.332 123.177 22.0049 122.167 22.0049C120.819 22.0049 119.473 22.6045 118.574 23.0421L115.26 43.6628H104.817L109.589 14.2573H118.52L118.8 16.7122C120.878 15.241 123.684 13.7662 127.446 13.7662C130.704 13.765 132.837 15.129 133.906 16.9841Z" fill="white"/>\n  <path fill-rule="evenodd" clip-rule="evenodd" d="M171.426 25.5502C171.426 23.1496 170.808 21.513 168.956 21.513C164.857 21.513 164.015 28.55 164.015 32.1498C164.015 34.8807 164.802 36.5709 166.653 36.5709C170.528 36.5709 171.426 29.1497 171.426 25.5502ZM153.458 31.7152C153.458 22.442 158.511 13.765 170.136 13.765C178.896 13.765 182.098 18.7854 182.098 25.7148C182.098 34.8805 177.099 44.3723 165.194 44.3723C156.378 44.3723 153.458 38.7525 153.458 31.7152Z" fill="white"/>\n</svg>';
            element5.id = id4;
            element5.innerText = "What would you like to do?";
            element6.id = id5;
            element6.innerText =
              "Tap cancel payment to cancel and return to the business. Continue payment will relaunch the payment window.";
            element7.id = id3;
            element7.innerText = "Continue payment";
            element8.id = id2;
            element8.innerText = "Cancel payment";
            const _document9 = document;
            head.appendChild(element1);
            element3.appendChild(element4);
            element3.appendChild(element5);
            element3.appendChild(element6);
            element3.appendChild(element7);
            element3.appendChild(element8);
            element2.appendChild(element3);
            const _document10 = document;
            body.appendChild(element2);
            const listener = element2.addEventListener("click", (event) => {
              event.stopPropagation();
            });
          }
          frameServiceInstance = frameServiceInstance.frameServiceInstance;
          ({
            checkForStatusChange: closure_1,
            cancelTokenization: closure_2,
            checkPaymentContextStatus: closure_3,
          } = frameServiceInstance);
          const venmoUrl = frameServiceInstance.venmoUrl;
          const tmp32 = new closure_2();
          closure_4 = tmp32;
          const element9 = document.getElementById(id3);
          const listener1 = element9.addEventListener("click", () => {
            frameServiceInstance.focus();
          });
          const element10 = document.getElementById(id2);
          const listener2 = element10.addEventListener("click", () => {
            frameServiceInstance.close();
            closure_2();
            const classList = document.getElementById("venmo-desktop-web-backdrop").classList;
            classList.add("hidden");
          });
          frameServiceInstance.open({}, (arg0) => {
            const tmp = arg0;
            if (tmp) {
              closure_4.reject(arg0);
            } else {
              let promise = closure_1(1);
              const nextPromise = promise.then((result) => {
                closure_1_4.resolve(result);
              });
              nextPromise.catch((error) => {
                let closure_0 = error;
                const promise = constants();
                promise.then(function (status) {
                  if ("CREATED" === status.status) {
                    const self = this;
                    const self2 = this;
                    const reject = closure_2_4.reject;
                    const tmp7 = new closure_4(constants.VENMO_CUSTOMER_CANCELED);
                    reject(tmp7);
                  } else {
                    closure_2_4.reject(error);
                  }
                });
              });
            }
            frameServiceInstance.close();
            const classList = document.getElementById("venmo-desktop-web-backdrop").classList;
            classList.add("hidden");
          });
          frameServiceInstance.redirect(venmoUrl);
          return tmp32;
        },
        openPopup(frameServiceInstance) {
          let closure_2;
          frameServiceInstance = frameServiceInstance.frameServiceInstance;
          ({
            checkForStatusChange: closure_1,
            cancelTokenization: closure_2,
            checkPaymentContextStatus: closure_3,
          } = frameServiceInstance);
          const venmoUrl = frameServiceInstance.venmoUrl;
          const tmp = new closure_2();
          closure_4 = tmp;
          const element = document.getElementById(c9);
          const listener = element.addEventListener("click", () => {
            frameServiceInstance.focus();
          });
          const element1 = document.getElementById(c8);
          const listener1 = element1.addEventListener("click", () => {
            frameServiceInstance.close();
            closure_2();
            const classList = document.getElementById("venmo-desktop-web-backdrop").classList;
            classList.add("hidden");
          });
          frameServiceInstance.open({}, (arg0) => {
            const tmp = arg0;
            if (tmp) {
              closure_4.reject(arg0);
            } else {
              let promise = closure_1(1);
              const nextPromise = promise.then((result) => {
                closure_1_4.resolve(result);
              });
              nextPromise.catch((error) => {
                let closure_0 = error;
                const promise = constants();
                promise.then(function (status) {
                  if ("CREATED" === status.status) {
                    const self = this;
                    const self2 = this;
                    const reject = closure_2_4.reject;
                    const tmp7 = new closure_4(constants.VENMO_CUSTOMER_CANCELED);
                    reject(tmp7);
                  } else {
                    closure_2_4.reject(error);
                  }
                });
              });
            }
            frameServiceInstance.close();
            const classList = document.getElementById("venmo-desktop-web-backdrop").classList;
            classList.add("hidden");
          });
          frameServiceInstance.redirect(venmoUrl);
          return tmp;
        },
        setupDesktopWebLogin(arg0) {
          let assetsUrl;
          let debug;
          let sum1;
          const tmp = new closure_2();
          create = tmp;
          ({ debug, assetsUrl } = arg0);
          if (!debug) {
            debug = false;
          }
          const sum = Math.round((window.outerHeight - 570) / 2) + window.screenTop;
          size = {
            name: "venmoDesktopWebLogin",
            dispatchFrameUrl: `${`${assetsUrl}/web/3.112.1/html`}/dispatch-frame${closure_1(debug)}.html`,
            openFrameUrl: `${`${assetsUrl}/web/3.112.1/html`}/venmo-landing-frame${closure_1(debug)}.html`,
            top: sum,
            left: sum1,
            height: 570,
            width: 400,
          };
          sum1 = Math.round((window.outerWidth - 400) / 2) + window.screenLeft;
          create = create.create;
          create(size, (arg0) => {
            closure_0.resolve(arg0);
          });
          return tmp;
        },
        POPUP_WIDTH: 400,
        POPUP_HEIGHT: 570,
      };
      module.exports = obj;
    },
    {
      "../../lib/braintree-error": 143,
      "../../lib/frame-service/external": 158,
      "../../lib/use-min": 181,
      "../shared/errors": 240,
      "@braintree/extended-promise": 31,
    },
  ];
  obj[244] = items243;
  const items244 = [
    (arg0, arg1, arg2) => {
      const f150710 = (acc, item) => {
        const parts = item.split("=");
        const str = decodeURIComponent(parts[0]);
        const tmp2 = closure_1_14(str.replace(/\W/g, ""));
        acc[tmp2] = decodeURIComponent(parts[1]);
        return acc;
      };
      class Venmo {
        constructor(arg0) {
          self = this;
          self = this;
          self._allowDesktopWebLogin = global.allowDesktopWebLogin || false;
          self._mobileWebFallBack = global.mobileWebFallBack || false;
          self._createPromise = global.createPromise;
          self._allowNewBrowserTab = false !== global.allowNewBrowserTab;
          self._allowWebviews = false !== global.allowWebviews;
          self._allowDesktop = true === global.allowDesktop;
          self._useRedirectForIOS = true === global.useRedirectForIOS;
          ({
            profileId: self._profileId,
            displayName: self._displayName,
            deepLinkReturnUrl: self._deepLinkReturnUrl,
            ignoreHistoryChanges: self._ignoreHistoryChanges,
          } = global);
          str = global.paymentMethodUsage || "";
          self._paymentMethodUsage = str.toUpperCase();
          self._shouldUseLegacyFlow = !self._paymentMethodUsage;
          self._requireManualReturn = true === global.requireManualReturn;
          tmp = self._allowDesktop && self._isDesktop() && !self._allowDesktopWebLogin;
          self._useDesktopQRFlow = tmp;
          tmp2 = self._allowDesktopWebLogin && self._isDesktop();
          self._useAllowDesktopWebLogin = tmp2;
          tmp3 = closure_10() || self._requireManualReturn;
          self._cannotHaveReturnUrls = tmp3;
          self._allowAndroidRecreation = false !== global.allowAndroidRecreation;
          self._maxRetryCount = 3;
          self._collectCustomerBillingAddress = global.collectCustomerBillingAddress || false;
          self._collectCustomerShippingAddress = global.collectCustomerShippingAddress || false;
          self._isFinalAmount = global.isFinalAmount || false;
          ({
            lineItems: self._lineItems,
            subTotalAmount: self._subTotalAmount,
            discountAmount: self._discountAmount,
            taxAmount: self._taxAmount,
            shippingAmount: self._shippingAmount,
            totalAmount: self._totalAmount,
          } = global);
          self._shouldCreateVenmoPaymentContext = self._cannotHaveReturnUrls || !self._shouldUseLegacyFlow;
          obj = self;
          sendEventResult = self.sendEvent(
            self._createPromise,
            `venmo.desktop-flow.configured.${String(Boolean(self._allowDesktop))}`,
          );
          if (self.hasTokenizationResult()) {
            str2 = "venmo.appswitch.return-in-new-tab";
            sendEventResult1 = obj.sendEvent(self._createPromise, "venmo.appswitch.return-in-new-tab");
          } else if (self._useDesktopQRFlow) {
            _createPromise = self._createPromise;
            self._createPromise = _createPromise.then((getConfiguration) => {
              let str;
              _self = getConfiguration;
              const gatewayConfiguration = getConfiguration.getConfiguration().gatewayConfiguration;
              let obj = {
                url: `${gatewayConfiguration.assetsUrl}/web/${closure_1_18}/html/venmo-desktop-frame.html`,
                environment: str,
                profileId: _self._profileId || gatewayConfiguration.payWithVenmo.merchantId,
                paymentMethodUsage: null,
                displayName: null,
                Promise: Promise,
                apiRequest() {
                  /* body not rendered: F154335 */
                },
                sendEvent() {
                  /* body not rendered: F154336 */
                },
                verifyDomain,
              };
              str = "SANDBOX";
              if ("production" === gatewayConfiguration.environment) {
                str = "PRODUCTION";
              }
              ({ _paymentMethodUsage: obj.paymentMethodUsage, _displayName: obj.displayName } = _self);
              const tmpResult = closure_1_16(obj);
              const nextPromise = tmpResult.then(() => {
                /* body not rendered: F154337 */
              });
              return nextPromise.catch(() => {
                /* body not rendered: F154338 */
              });
            });
          } else if (self._shouldCreateVenmoPaymentContext) {
            num = 250;
            self._mobilePollingInterval = 250;
            num2 = 300000;
            self._mobilePollingExpiresThreshold = 300000;
            _createPromise1 = self._createPromise;
            self._createPromise = _createPromise1.then((getConfiguration) => {
              _self = getConfiguration;
              let obj = _self;
              let str = "mobile-payment-context";
              if (_self._cannotHaveReturnUrls) {
                str = "manual-return";
              }
              const configuration = getConfiguration.getConfiguration();
              const obj2 = { assetsUrl: configuration.gatewayConfiguration.assetsUrl, debug: configuration.isDebug };
              const setupDesktopWebLoginResult = closure_1_13.setupDesktopWebLogin(obj2);
              const str2 = configuration.gatewayConfiguration.environment;
              const nextPromise = setupDesktopWebLoginResult.then(() => {
                /* body not rendered: F154339 */
              });
              const catchPromise = nextPromise.catch(function () {
                /* body not rendered: F154340 */
              });
              obj._mobilePollingContextEnvironment = str2.toUpperCase();
              const result = obj._createVenmoPaymentContext(getConfiguration);
              const items = [catchPromise];
              const nextPromise1 = result.then(() => {
                /* body not rendered: F154341 */
              });
              items[1] = nextPromise1.catch(() => {
                /* body not rendered: F154342 */
              });
              const allResult = globalResult1.all(items);
              const nextPromise2 = allResult.then(() => {
                /* body not rendered: F154343 */
              });
              return nextPromise2.catch(() => {
                /* body not rendered: F154344 */
              });
            });
          }
          return;
        }
        _createVenmoPaymentContext(arg0, arg1) {
          self = this;
          closure_0 = global;
          closure_1 = module;
          self = this;
          str = "MOBILE_WEB";
          payWithVenmo = global.getConfiguration().gatewayConfiguration.payWithVenmo;
          if (this._useAllowDesktopWebLogin) {
            str = "NATIVE_WEB";
          }
          if (self._shouldCreateVenmoPaymentContext) {
            if (self._shouldUseLegacyFlow) {
              obj1 = { api: "graphQLApi", data: null };
              obj12 = { query: null, variables: null };
              tmp11 = closure_17;
              obj12.query = closure_17.LEGACY_CREATE_PAYMENT_CONTEXT_QUERY;
              obj13 = { input: null };
              obj14 = { environment: null, intent: "PAY_FROM_APP" };
              obj14.environment = self._mobilePollingContextEnvironment;
              obj13.input = obj14;
              obj12.variables = obj13;
              obj1.data = obj12;
              requestResult = global.request(obj1);
              nextPromise = requestResult.then(
                (data) => data.data.createVenmoQRCodePaymentContext.venmoQRCodePaymentContext,
              );
            } else {
              if (self._collectCustomerBillingAddress) {
                if (!payWithVenmo.enrichedCustomerDataEnabled) {
                  tmp2 = globalThis;
                  _Promise2 = Promise;
                  tmp3 = closure_9;
                  tmp4 = closure_4;
                  self2 = this;
                  self3 = this;
                  reject = Promise.reject;
                  tmp5 = new closure_9(closure_4.VENMO_ECD_DISABLED);
                  tmp6 = tmp5;
                  return reject(tmp5);
                }
              }
              if (self._lineItems) {
                _lineItems = self._lineItems;
                item = _lineItems.forEach((unitTaxAmount) => {
                  unitTaxAmount.unitTaxAmount = unitTaxAmount.unitTaxAmount || "0";
                });
              }
              obj = {
                subTotalAmount: null,
                discountAmount: null,
                taxAmount: null,
                shippingAmount: null,
                totalAmount: null,
                lineItems: null,
              };
              ({
                _subTotalAmount: obj.subTotalAmount,
                _discountAmount: obj.discountAmount,
                _taxAmount: obj.taxAmount,
                _shippingAmount: obj.shippingAmount,
                _totalAmount: obj.totalAmount,
                _lineItems: obj.lineItems,
              } = self);
              closure_2 = obj;
              tmp8 = globalThis;
              _Object = Object;
              keys = Object.keys(obj);
              obj15 = { query: null, variables: null };
              tmp9 = closure_17;
              obj15.query = closure_17.CREATE_PAYMENT_CONTEXT_QUERY;
              obj16 = {
                paymentMethodUsage: null,
                intent: "CONTINUE",
                customerClient: null,
                isFinalAmount: null,
                displayName: null,
                paysheetDetails: null,
              };
              obj16.paymentMethodUsage = self._paymentMethodUsage;
              obj16.customerClient = str;
              ({ _isFinalAmount: obj4.isFinalAmount, _displayName: obj4.displayName } = self);
              obj17 = {
                collectCustomerBillingAddress: null,
                collectCustomerShippingAddress: null,
                transactionDetails: null,
              };
              ({
                _collectCustomerBillingAddress: obj5.collectCustomerBillingAddress,
                _collectCustomerShippingAddress: obj5.collectCustomerShippingAddress,
              } = self);
              tmp10 = undefined;
              request = global.request;
              if (keys.some((item) => undefined !== obj[item])) {
                tmp10 = obj;
              }
              obj18 = { api: "graphQLApi", data: null };
              obj19 = { input: null };
              obj17.transactionDetails = tmp10;
              obj16.paysheetDetails = obj17;
              obj19.input = obj16;
              obj15.variables = obj19;
              obj18.data = obj15;
              requestResult1 = request(obj18);
              nextPromise = requestResult1.then((data) => data.data.createVenmoPaymentContext.venmoPaymentContext);
            }
            return nextPromise.then((expiresAt) => {
              const date = new Date(expiresAt.expiresAt);
              let result = 0.6666 * (date - new Date(expiresAt.createdAt));
              new Date(expiresAt.createdAt);
              clearTimeout(self._refreshPaymentContextTimeout);
              self._refreshPaymentContextTimeout = setTimeout(() => {
                /* body not rendered: F154345 */
              }, result);
              const tmp6 = closure_1 && self._tokenizationInProgress;
              if (!tmp6) {
                ({ status: tmp4._venmoPaymentContextStatus, id: tmp4._venmoPaymentContextId } = expiresAt);
              }
            });
          } else {
            tmp = globalThis;
            _Promise = Promise;
            return Promise.resolve();
          }
        }
        appSwitch(href) {
          const self = this;
          if (this._deepLinkReturnUrl) {
            const _window3 = window;
            if (platform) {
              const _window4 = window;
              const obj = /iPhone|iPad|iPod/;
              platform = obj.test(window.navigator.platform);
            }
            if (platform) {
              closure_0.sendEvent(self._createPromise, "venmo.appswitch.start.ios-webview");
              const _window9 = window;
              window.location.href = href;
            } else {
              const _window5 = window;
              if (window.popupBridge) {
                const _window6 = window;
                if (typeof window.popupBridge.open === "function") {
                  closure_0.sendEvent(self._createPromise, "venmo.appswitch.start.popup-bridge");
                  const _window8 = window;
                  popupBridge.open(href);
                }
              }
              closure_0.sendEvent(self._createPromise, "venmo.appswitch.start.webview");
              const _window7 = window;
              window.open(href);
            }
          } else {
            closure_0.sendEvent(self._createPromise, "venmo.appswitch.start.browser");
            if (!closure_2.doesNotSupportWindowOpenInIos()) {
              if (!self._shouldUseRedirectStrategy()) {
                const _window = window;
                window.open(href);
              }
            }
            const _window2 = window;
            window.location.href = href;
          }
        }
        getUrl() {
          _createPromise = this._createPromise;
          fn = function (getConfiguration) {
            const self = this;
            const configuration = getConfiguration.getConfiguration();
            let str = this._deepLinkReturnUrl;
            if (!str) {
              const _window = window;
              const _window2 = window;
              const str2 = window.location.href;
              str = str2.replace(window.location.hash, "");
            }
            const obj = {
              "x-success": `${tmp3}#venmoSuccess=1`,
              "x-cancel": `${tmp3}#venmoCancel=1`,
              "x-error": `${tmp3}#venmoError=1`,
            };
            const payWithVenmo = configuration.gatewayConfiguration.payWithVenmo;
            const analyticsMetadata = configuration.analyticsMetadata;
            const accessToken = payWithVenmo.accessToken;
            const obj2 = {
              _meta: {
                version: analyticsMetadata.sdkVersion,
                integration: analyticsMetadata.integration,
                platform: analyticsMetadata.platform,
                sessionId: analyticsMetadata.sessionId,
              },
            };
            self._isDebug = configuration.isDebug;
            self._assetsUrl = configuration.gatewayConfiguration.assetsUrl;
            let replaced = str.replace(/#*$/, "");
            let tmp4 = accessToken;
            if (self._venmoPaymentContextId) {
              let text;
              const _venmoPaymentContextId = self._venmoPaymentContextId;
              if (self._shouldUseLegacyFlow) {
                text = `${accessToken}|pcid:${_venmoPaymentContextId}`;
              } else {
                obj.resource_id = _venmoPaymentContextId;
                text = accessToken;
              }
              tmp4 = text;
            }
            if (!self._shouldIncludeReturnUrls()) {
              if (!self._useAllowDesktopWebLogin) {
                obj["x-success"] = "NOOP";
                obj["x-cancel"] = "NOOP";
                obj["x-error"] = "NOOP";
              }
              if (self._allowAndroidRecreation) {
                obj.allowAndroidRecreation = 1;
              } else {
                obj.allowAndroidRecreation = 0;
              }
              const _window3 = window;
              obj.ua = window.navigator.userAgent;
              obj.braintree_merchant_id = self._profileId || payWithVenmo.merchantId;
              obj.braintree_access_token = tmp4;
              obj.braintree_environment = payWithVenmo.environment;
              const _btoa = btoa;
              const _JSON = JSON;
              obj.braintree_sdk_data = btoa(JSON.stringify(obj2));
              ({ _useAllowDesktopWebLogin: obj3.useAllowDesktopWebLogin, _mobileWebFallBack: obj3.mobileWebFallBack } =
                self);
              const text1 = `${closure_1_12(obj3)}?`;
              return `${closure_1_12(obj3)}?` + closure_1_5.stringify(obj);
            }
            if (self._useAllowDesktopWebLogin) {
              replaced = `${self._assetsUrl + "/web/" + closure_1_18}/html/redirect-frame.html`;
            }
          };
          return _createPromise.then(fn.bind(this));
        }
        isBrowserSupported() {
          const obj = {
            allowNewBrowserTab: this._allowNewBrowserTab,
            allowWebviews: this._allowWebviews,
            allowDesktop: this._allowDesktop,
            allowDesktopWebLogin: this._allowDesktopWebLogin,
          };
          return browserSupported.isBrowserSupported(obj);
        }
        hasTokenizationResult() {
          return this._hasTokenizationResult();
        }
        _hasTokenizationResult(arg0) {
          let str = arg0;
          if (!str) {
            const _window = window;
            const str2 = window.location.hash;
            str = str2.substring(1);
          }
          const parts = str.split("&");
          const reduced = parts.reduce(f150710, {});
          if (reduced.resourceId) {
            reduced.id = reduced.resourceId;
          }
          urlParams = urlParams.getUrlParams();
          if (urlParams.resource_id) {
            const self = this;
            this._venmoPaymentContextId = urlParams.resource_id;
          }
          return undefined !== (reduced.venmoSuccess || reduced.venmoError || reduced.venmoCancel);
        }
        _shouldIncludeReturnUrls() {
          return this._deepLinkReturnUrl || !this._cannotHaveReturnUrls;
        }
        _isDesktop() {
          const tmp = closure_2.isIos() || closure_2.isAndroid();
          return !tmp;
        }
        tokenize(arg0) {
          self = this;
          obj = global;
          self = this;
          if (!global) {
            obj = {};
          }
          if (true === self._tokenizationInProgress) {
            tmp2 = globalThis;
            _Promise = Promise;
            tmp3 = closure_9;
            tmp4 = closure_4;
            self2 = this;
            self3 = this;
            reject = Promise.reject;
            tmp5 = new closure_9(closure_4.VENMO_TOKENIZATION_REQUEST_ACTIVE);
            tmp6 = tmp5;
            rejectResult = reject(tmp5);
          } else {
            self._tokenizationInProgress = true;
            if (self._useDesktopQRFlow) {
              result = self._tokenizeForDesktopQRFlow(obj);
            } else if (self._useAllowDesktopWebLogin) {
              result = self._tokenizeWebLoginWithRedirect();
            } else if (self._cannotHaveReturnUrls) {
              result = self._tokenizeForMobileWithManualReturn();
            } else {
              result = self._tokenizeForMobileWithHashChangeListeners(obj);
            }
            nextPromise = result.then((result) => {
              _self = result;
              const _createPromise = _self._createPromise;
              const nextPromise = _createPromise.then(() => {
                /* body not rendered: F154346 */
              });
              return nextPromise.then(() => {
                /* body not rendered: F154347 */
              });
            });
            rejectResult = nextPromise.catch((error) => {
              _self = error;
              const _createPromise = _self._createPromise;
              const nextPromise = _createPromise.then(() => {
                /* body not rendered: F154348 */
              });
              return nextPromise.then(() => {
                /* body not rendered: F154349 */
              });
            });
          }
          return rejectResult;
        }
        cancelTokenization() {
          let allResult;
          const self = this;
          if (this._tokenizationInProgress) {
            const result = self._removeVisibilityEventListener();
            if (self._tokenizePromise) {
              const self4 = this;
              const self5 = this;
              const reject2 = self._tokenizePromise.reject;
              const tmp10 = new closure_9(constants.VENMO_TOKENIZATION_CANCELED_BY_MERCHANT);
              reject2(tmp10);
            }
            const items = [self._cancelMobilePaymentContext(), self._cancelVenmoDesktopContext()];
            allResult = all(items);
          } else {
            const self2 = this;
            const self3 = this;
            const tmp4 = new closure_9(constants.VENMO_TOKENIZATION_REQUEST_NOT_ACTIVE);
            allResult = reject(tmp4);
          }
          return allResult;
        }
        _tokenizeWebLoginWithRedirect() {
          self = this;
          sendEventResult = self.sendEvent(this._createPromise, "venmo.tokenize.web-login.start");
          tmp2 = new closure_11();
          this._tokenizePromise = tmp2;
          url = this.getUrl();
          return url.then((venmoUrl) => {
            let _checkPaymentContextStatus;
            let _checkPaymentContextStatusAndProcessResult;
            let cancelTokenization;
            let obj = {
              checkForStatusChange: _checkPaymentContextStatusAndProcessResult.bind(self),
              cancelTokenization: cancelTokenization.bind(self),
              frameServiceInstance: self._frameServiceInstance,
              venmoUrl,
              debug: self._isDebug,
              checkPaymentContextStatus: _checkPaymentContextStatus.bind(self),
            };
            runWebLogin = runWebLogin.runWebLogin;
            cancelTokenization = self.cancelTokenization;
            _checkPaymentContextStatus = self._checkPaymentContextStatus;
            _checkPaymentContextStatusAndProcessResult = self._checkPaymentContextStatusAndProcessResult;
            const runWebLoginResult = runWebLogin(obj);
            const nextPromise = runWebLoginResult.then(() => {
              /* body not rendered: F154350 */
            });
            nextPromise.catch(() => {
              /* body not rendered: F154351 */
            });
            return self._tokenizePromise;
          });
        }
        _queryPaymentContextStatus(arg0) {
          closure_0 = global;
          self = this;
          _createPromise = this._createPromise;
          nextPromise = _createPromise.then((request) => {
            let obj2;
            let obj3;
            const obj = { api: "graphQLApi", data: obj2 };
            obj2 = {
              query: self._shouldUseLegacyFlow
                ? constants2.LEGACY_VENMO_PAYMENT_CONTEXT_STATUS_QUERY
                : constants2.VENMO_PAYMENT_CONTEXT_STATUS_QUERY,
              variables: obj3,
            };
            obj3 = { id };
            return request.request(obj);
          });
          return nextPromise.then((data) => data.data.node);
        }
        _checkPaymentContextStatusAndProcessResult(arg0) {
          closure_0 = global;
          self = this;
          result = this._checkPaymentContextStatus();
          return result.then(function (status) {
            let _maxRetryCount;
            status = status.status;
            if (status !== self._venmoPaymentContextStatus) {
              self._venmoPaymentContextStatus = status;
              closure_0.sendEvent(self._createPromise, "venmo.tokenize.web-login.status-change");
              if ("APPROVED" === status) {
                return Promise.resolve(status);
              } else if ("CANCELED" === status) {
                const self3 = this;
                const self4 = this;
                const reject2 = Promise.reject;
                const tmp13 = new closure_9(constants.VENMO_CUSTOMER_CANCELED);
                return reject2(tmp13);
              } else if ("FAILED" === status) {
                self = this;
                let self2 = this;
                const tmp8 = new closure_9(constants.VENMO_TOKENIZATION_FAILED);
                return reject(tmp8);
              }
            }
            const promise = new Promise(() => {
              /* body not rendered: F154352 */
            });
            return promise;
          });
        }
        _checkPaymentContextStatus() {
          result = this._queryPaymentContextStatus(this._venmoPaymentContextId);
          catchPromise = result.catch((error) => {
            const obj = {
              type: constants.VENMO_NETWORK_ERROR.type,
              code: constants.VENMO_NETWORK_ERROR.code,
              message: constants.VENMO_NETWORK_ERROR.message,
              details: error,
            };
            const tmp = new closure_1_9(obj);
            return reject(tmp);
          });
          return catchPromise.then((result) => Promise.resolve(result));
        }
        _pollForStatusChange() {
          self = this;
          self = this;
          if (Date.now() > this._mobilePollingContextExpiresIn) {
            _Promise = Promise;
            tmp2 = closure_9;
            tmp3 = closure_4;
            self2 = this;
            self3 = this;
            reject = Promise.reject;
            tmp4 = new closure_9(closure_4.VENMO_MOBILE_POLLING_TOKENIZATION_TIMEOUT);
            tmp5 = tmp4;
            rejectResult = reject(tmp4);
          } else {
            result = self._queryPaymentContextStatus(self._venmoPaymentContextId);
            catchPromise = result.catch((error) => {
              let obj2;
              const obj = {
                type: constants.VENMO_MOBILE_POLLING_TOKENIZATION_NETWORK_ERROR.type,
                code: constants.VENMO_MOBILE_POLLING_TOKENIZATION_NETWORK_ERROR.code,
                message: constants.VENMO_MOBILE_POLLING_TOKENIZATION_NETWORK_ERROR.message,
                details: obj2,
              };
              obj2 = { originalError: error };
              const tmp = new closure_1_9(obj);
              return reject(tmp);
            });
            rejectResult = catchPromise.then(function (status) {
              let self;
              if (status.status !== self._venmoPaymentContextStatus) {
                self._venmoPaymentContextStatus = status.status;
                _self.sendEvent(
                  self._createPromise,
                  `venmo.tokenize.manual-return.status-change.${status.status.toLowerCase()}`,
                );
                if ("EXPIRED" !== status.status) {
                  if ("FAILED" !== status.status) {
                    if ("CANCELED" !== status.status) {
                      if ("APPROVED" === status.status) {
                        return Promise.resolve(status);
                      }
                    }
                  }
                }
                self = this;
                const self2 = this;
                const tmp9 = new closure_9(constants["VENMO_MOBILE_POLLING_TOKENIZATION_" + status.status]);
                return reject(tmp9);
              }
              const promise = new Promise(() => {
                /* body not rendered: F154353 */
              });
              return promise;
            });
          }
          return rejectResult;
        }
        _tokenizeForMobileWithManualReturn() {
          self = this;
          sendEventResult = self.sendEvent(this._createPromise, "venmo.tokenize.manual-return.start");
          this._mobilePollingContextExpiresIn = Date.now() + this._mobilePollingExpiresThreshold;
          tmp2 = new closure_11();
          this._tokenizePromise = tmp2;
          _pollForStatusChangeResult = this._pollForStatusChange();
          nextPromise = _pollForStatusChangeResult.then((paymentMethodId) => {
            _self.sendEvent(self._createPromise, "venmo.tokenize.manual-return.success");
            const _tokenizePromise = self._tokenizePromise;
            const obj = {
              paymentMethodNonce: paymentMethodId.paymentMethodId,
              username: paymentMethodId.userName,
              payerInfo: paymentMethodId.payerInfo,
              id: self._venmoPaymentContextId,
            };
            _tokenizePromise.resolve(obj);
          });
          catchPromise = nextPromise.catch((error) => {
            _self.sendEvent(self._createPromise, "venmo.tokenize.manual-return.failure");
            const _tokenizePromise = self._tokenizePromise;
            _tokenizePromise.reject(error);
          });
          url = this.getUrl();
          return url.then((result) => {
            self.appSwitch(result);
            return self._tokenizePromise;
          });
        }
        _shouldUseRedirectStrategy() {
          let isIosResult = closure_2.isIos();
          if (isIosResult) {
            isIosResult = true === this._mobileWebFallBack || this._useRedirectForIOS;
          }
          return isIosResult;
        }
        _tokenizeForMobileWithHashChangeListeners(arg0) {
          self = this;
          closure_0 = global;
          completeFlow = function completeFlow(arg0) {
            const result = self.processHashChangeFlowResults(arg0);
            const catchPromise = result.catch(f154354);
            catchPromise.then(() => {
              /* body not rendered: F154355 */
            });
          };
          self = this;
          if (this.hasTokenizationResult()) {
            return self.processHashChangeFlowResults();
          } else {
            tmp = closure_0;
            str = "venmo.tokenize.mobile.start";
            sendEventResult = closure_0.sendEvent(self._createPromise, "venmo.tokenize.mobile.start");
            tmp3 = closure_11;
            self2 = this;
            self3 = this;
            tmp4 = new closure_11();
            tmp5 = tmp4;
            self._tokenizePromise = tmp4;
            tmp6 = globalThis;
            _window = window;
            self._previousHash = window.location.hash;
            self._onHashChangeListener = (newURL) => {
              const str = newURL.newURL;
              const tmp = str.split("#")[1];
              if (self._hasTokenizationResult(tmp)) {
                let c1 = true;
                const _clearTimeout = clearTimeout;
                clearTimeout(closure_2);
                let c0;
                let result = self.processHashChangeFlowResults(tmp);
                const catchPromise = result.catch(f154354);
                catchPromise.then(() => {
                  /* body not rendered: F154355 */
                });
              }
            };
            _window2 = window;
            flag = false;
            str2 = "hashchange";
            listener = window.addEventListener("hashchange", self._onHashChangeListener, false);
            self._visibilityChangeListener = () => {
              const DEFAULT_PROCESS_RESULTS_DELAY =
                processResultsDelay.processResultsDelay || constants.DEFAULT_PROCESS_RESULTS_DELAY;
              const tmp2 = window.document.hidden || browserSupported;
              if (!tmp2) {
                const _setTimeout = setTimeout;
                const timeout = setTimeout(completeFlow, DEFAULT_PROCESS_RESULTS_DELAY);
              }
            };
            url = self.getUrl();
            return url.then((result) => {
              self.appSwitch(result);
              const timerId = setTimeout(() => {
                /* body not rendered: F154356 */
              }, constants.DOCUMENT_VISIBILITY_CHANGE_EVENT_DELAY);
              return self._tokenizePromise;
            });
          }
        }
        _tokenizeForDesktopQRFlow() {
          self = this;
          sendEventResult = self.sendEvent(this._createPromise, "venmo.tokenize.desktop.start");
          tmp2 = new closure_11();
          this._tokenizePromise = tmp2;
          _createPromise = this._createPromise;
          nextPromise = _createPromise.then(() => {
            const _venmoDesktopInstance = self._venmoDesktopInstance;
            return _venmoDesktopInstance.launchDesktopFlow();
          });
          nextPromise1 = nextPromise.then((result) => {
            const _venmoDesktopInstance = self._venmoDesktopInstance;
            _venmoDesktopInstance.hideDesktopFlow();
            _self.sendEvent(self._createPromise, "venmo.tokenize.desktop.success");
            const _tokenizePromise = self._tokenizePromise;
            _tokenizePromise.resolve(result);
          });
          catchPromise = nextPromise1.catch(function (error) {
            let self;
            _self.sendEvent(self._createPromise, "venmo.tokenize.desktop.failure");
            if (self._venmoDesktopInstance) {
              const _venmoDesktopInstance = tmp._venmoDesktopInstance;
              _venmoDesktopInstance.hideDesktopFlow();
            }
            const tmp4 = error;
            if (tmp4) {
              if ("CUSTOMER_CANCELED" === error.reason) {
                const _tokenizePromise2 = self._tokenizePromise;
                self = this;
                const self2 = this;
                const reject2 = _tokenizePromise2.reject;
                const tmp9 = new closure_9(constants.VENMO_DESKTOP_CANCELED);
                reject2(tmp9);
              }
            }
            const reject = self._tokenizePromise.reject;
            const obj = {
              type: constants.VENMO_DESKTOP_UNKNOWN_ERROR.type,
              code: constants.VENMO_DESKTOP_UNKNOWN_ERROR.code,
              message: constants.VENMO_DESKTOP_UNKNOWN_ERROR.message,
              details: { originalError: error },
            };
            const tmp5 = new closure_9(obj);
            reject(tmp5);
          });
          return this._tokenizePromise;
        }
        _cancelMobilePaymentContext() {
          self = this;
          _createPromise = this._createPromise;
          return _createPromise.then((request) => {
            let obj2;
            let obj3;
            let obj4;
            let requestResult;
            if (self._venmoPaymentContextId) {
              const obj = { api: "graphQLApi", data: obj2 };
              obj2 = {
                query: self._shouldUseLegacyFlow
                  ? constants2.LEGACY_UPDATE_PAYMENT_CONTEXT_QUERY
                  : constants2.UPDATE_PAYMENT_CONTEXT_QUERY,
                variables: obj3,
              };
              obj3 = { input: obj4 };
              obj4 = { id: self._venmoPaymentContextId, status: "CANCELED" };
              requestResult = request.request(obj);
            } else {
              requestResult = Promise.resolve();
            }
            return requestResult;
          });
        }
        _cancelVenmoDesktopContext() {
          self = this;
          _createPromise = this._createPromise;
          return _createPromise.then(() => {
            if (self._venmoDesktopInstance) {
              const _venmoDesktopInstance = self._venmoDesktopInstance;
              const result = _venmoDesktopInstance.updateVenmoDesktopPaymentContext("CANCELED");
            }
            return Promise.resolve();
          });
        }
        teardown() {
          self = this;
          result = this._removeVisibilityEventListener();
          _createPromise = this._createPromise;
          fn = function () {
            if (self._venmoDesktopInstance) {
              const _venmoDesktopInstance = self._venmoDesktopInstance;
              _venmoDesktopInstance.teardown();
            }
            clearTimeout(self._refreshPaymentContextTimeout);
            const result = self._cancelMobilePaymentContext();
            closure_8(this, closure_7(Venmo.prototype));
          };
          return _createPromise.then(fn.bind(this));
        }
        _removeVisibilityEventListener() {
          const self = this;
          const removed = window.removeEventListener("hashchange", this._onHashChangeListener);
          const _document = window.document;
          let str = "visibilitychange";
          const removeEventListener = _document.removeEventListener;
          if (undefined === window.document.hidden) {
            const _window = window;
            str = "msvisibilitychange";
            if (undefined === window.document.msHidden) {
              const _window2 = window;
              if (undefined !== window.document.webkitHidden) {
                str = "webkitvisibilitychange";
              }
            }
          }
          const removed1 = removeEventListener(str, self._visibilityChangeListener);
          delete self["_visibilityChangeListener"];
          delete self["_onHashChangeListener"];
        }
        processHashChangeFlowResults(arg0) {
          str = global;
          self = this;
          if (!global) {
            tmp = globalThis;
            _window = window;
            str2 = window.location.hash;
            num = 1;
            str = str2.substring(1);
          }
          parts = str.split("&");
          reduced = parts.reduce((acc, item) => {
            const parts = item.split("=");
            const str = decodeURIComponent(parts[0]);
            const tmp2 = closure_1_14(str.replace(/\W/g, ""));
            acc[tmp2] = decodeURIComponent(parts[1]);
            return acc;
          }, {});
          if (reduced.resourceId) {
            reduced.id = reduced.resourceId;
          }
          closure_1 = reduced;
          promise = new Promise(function (fn, fn2) {
            let obj3;
            let obj4;
            let self;
            _shouldUseLegacyFlow = fn;
            reduced = fn2;
            let obj = _shouldUseLegacyFlow;
            if (_shouldUseLegacyFlow._shouldUseLegacyFlow) {
              if (reduced.venmoSuccess) {
                self.sendEvent(obj._createPromise, "venmo.appswitch.handle.success");
                fn(reduced);
              } else if (reduced.venmoError) {
                self.sendEvent(obj._createPromise, "venmo.appswitch.handle.error");
                const obj2 = {
                  type: constants.VENMO_APP_FAILED.type,
                  code: constants.VENMO_APP_FAILED.code,
                  message: constants.VENMO_APP_FAILED.message,
                  details: obj3,
                };
                obj3 = { originalError: obj4 };
                const _decodeURIComponent = decodeURIComponent;
                const self5 = this;
                const self6 = this;
                obj4 = { message: decodeURIComponent(reduced.errorMessage), code: reduced.errorCode };
                const tmp24 = new closure_1_9(obj2);
                fn2(tmp24);
              } else {
                sendEvent = self.sendEvent;
                if (reduced.venmoCancel) {
                  sendEvent(obj._createPromise, "venmo.appswitch.handle.cancel");
                  const self3 = this;
                  const self4 = this;
                  const tmp13 = new closure_1_9(constants.VENMO_APP_CANCELED);
                  fn2(tmp13);
                } else {
                  sendEvent(obj._createPromise, "venmo.appswitch.cancel-or-unavailable");
                  self = this;
                  const self2 = this;
                  const tmp7 = new closure_1_9(constants.VENMO_CANCELED);
                  fn2(tmp7);
                }
              }
            } else {
              const _pollForStatusChangeResult = obj._pollForStatusChange();
              const nextPromise = _pollForStatusChangeResult.then(() => {
                /* body not rendered: F154357 */
              });
              nextPromise.catch(() => {
                /* body not rendered: F154358 */
              });
            }
            const result = obj._clearFragmentParameters();
          });
          return promise;
        }
        _clearFragmentParameters() {
          if (!this._ignoreHistoryChanges) {
            const _window = window;
            let hash = typeof replaceState === "function";
            if (typeof replaceState === "function") {
              const _window4 = window;
              hash = window.location.hash;
            }
            if (hash) {
              const _window2 = window;
              const _window3 = window;
              const href1 = window.location.href;
              globalThis.history.pushState({}, "", href.slice(0, href1.indexOf("#")));
            }
          }
        }
      }
      handler = global("../lib/analytics");
      const browserSupported = global("./shared/supports-venmo");
      let closure_2 = global("./shared/browser-detection");
      let closure_3 = global("./shared/constants");
      constants = global("./shared/errors");
      let closure_5 = global("../lib/querystring");
      let closure_6 = global("../lib/is-verified-domain");
      let closure_7 = global("../lib/methods");
      let closure_8 = global("../lib/convert-methods-to-error");
      const globalResult = global("@braintree/wrap-promise");
      let closure_9 = global("../lib/braintree-error");
      let closure_10 = global("../lib/in-iframe");
      const globalResult1 = global("@braintree/extended-promise");
      closure_12 = global("./shared/get-venmo-url");
      let closure_13 = global("./shared/web-login-backdrop");
      let closure_14 = global("../lib/snake-case-to-camel-case");
      let urlParams = global("../lib/url-params");
      let closure_16 = global("./external/");
      const constants2 = global("./external/queries");
      let c18 = "3.112.1";
      globalResult1.suppressUnhandledPromiseMessage = true;
      module.exports = globalResult.wrapPrototype(Venmo);
    },
    {
      "../lib/analytics": 138,
      "../lib/braintree-error": 143,
      "../lib/convert-methods-to-error": 146,
      "../lib/in-iframe": 169,
      "../lib/is-verified-domain": 173,
      "../lib/methods": 175,
      "../lib/querystring": 177,
      "../lib/snake-case-to-camel-case": 179,
      "../lib/url-params": 180,
      "./external/": 234,
      "./external/queries": 235,
      "./shared/browser-detection": 238,
      "./shared/constants": 239,
      "./shared/errors": 240,
      "./shared/get-venmo-url": 242,
      "./shared/supports-venmo": 243,
      "./shared/web-login-backdrop": 244,
      "@braintree/extended-promise": 31,
      "@braintree/wrap-promise": 40,
    },
  ];
  obj[245] = items244;
  const items245 = [
    (arg0, arg1, arg2) => {
      const globalResult = global("../lib/braintree-error");
      const obj = {
        VISA_CHECKOUT_NOT_ENABLED: {
          type: globalResult.types.MERCHANT,
          code: "VISA_CHECKOUT_NOT_ENABLED",
          message: "Visa Checkout is not enabled for this merchant.",
        },
        VISA_CHECKOUT_INIT_OPTIONS_REQUIRED: {
          type: globalResult.types.MERCHANT,
          code: "VISA_CHECKOUT_INIT_OPTIONS_REQUIRED",
          message: "initOptions requires an object.",
        },
        VISA_CHECKOUT_PAYMENT_REQUIRED: {
          type: globalResult.types.MERCHANT,
          code: "VISA_CHECKOUT_PAYMENT_REQUIRED",
          message: "tokenize requires callid, encKey, and encPaymentData.",
        },
        VISA_CHECKOUT_TOKENIZATION: {
          type: globalResult.types.NETWORK,
          code: "VISA_CHECKOUT_TOKENIZATION",
          message: "A network error occurred when processing the Visa Checkout payment.",
        },
      };
      module.exports = obj;
    },
    { "../lib/braintree-error": 143 },
  ];
  obj[246] = items245;
  const items246 = [
    (arg0, arg1, arg2) => {
      let closure_0 = global("../lib/basic-component-verification");
      let closure_1 = global("../lib/braintree-error");
      let closure_2 = global("../lib/create-deferred-client");
      let closure_3 = global("../lib/create-assets-url");
      let closure_4 = global("./visa-checkout");
      let closure_5 = global("../lib/analytics");
      let closure_6 = global("./errors");
      let obj = {
        create: global("@braintree/wrap-promise")(function create(client) {
          let obj = { name: "Visa Checkout", client: client.client, authorization: client.authorization };
          const verifyResult = client.verify(obj);
          const nextPromise = verifyResult.then(() => {
            const obj = {
              authorization: client.authorization,
              client: client.client,
              debug: client.debug,
              assetsUrl: closure_3.create(client.authorization),
              name: "Visa Checkout",
            };
            return closure_2.create(obj);
          });
          return nextPromise.then(function (client) {
            let rejectResult;
            client.client = client;
            client = client.client;
            if (client.getConfiguration().gatewayConfiguration.visaCheckout) {
              closure_5.sendEvent(client.client, "visacheckout.initialized");
              const self3 = this;
              const self4 = this;
              rejectResult = new closure_4(tmp);
            } else {
              const self = this;
              const self2 = this;
              const tmp5 = new closure_1(constants.VISA_CHECKOUT_NOT_ENABLED);
              rejectResult = reject(tmp5);
            }
            return rejectResult;
          });
        }),
        VERSION: "3.112.1",
      };
      module.exports = obj;
    },
    {
      "../lib/analytics": 138,
      "../lib/basic-component-verification": 141,
      "../lib/braintree-error": 143,
      "../lib/create-assets-url": 148,
      "../lib/create-deferred-client": 150,
      "./errors": 246,
      "./visa-checkout": 248,
      "@braintree/wrap-promise": 40,
    },
  ];
  obj[247] = items246;
  const items247 = [
    (arg0, arg1, arg2) => {
      class VisaCheckout {
        constructor(arg0) {
          this._client = global.client;
          return;
        }
        createInitOptions(arg0) {
          _client = this._client;
          gatewayConfiguration = _client.getConfiguration().gatewayConfiguration;
          visaCheckout = gatewayConfiguration.visaCheckout;
          if (global) {
            tmp5 = closure_3;
            tmp6 = closure_3(global);
            tmp6.apikey = tmp6.apikey || visaCheckout.apikey;
            tmp6.encryptionKey = visaCheckout.encryptionKey;
            tmp6.externalClientId = tmp6.externalClientId || visaCheckout.externalClientId;
            tmp6.settings = tmp6.settings || {};
            str = "FULL";
            tmp6.settings.dataLevel = "FULL";
            payment = tmp6.settings.payment;
            settings = tmp6.settings;
            if (!payment) {
              payment = {};
            }
            settings.payment = payment;
            if (!tmp6.settings.payment.cardBrands) {
              supportedCardTypes = gatewayConfiguration.visaCheckout.supportedCardTypes;
              tmp6.settings.payment.cardBrands = supportedCardTypes.reduce(() => {
                /* body not rendered: F154359 */
              }, []);
            }
            return tmp6;
          } else {
            tmp = closure_0;
            tmp2 = closure_2;
            self = this;
            self2 = this;
            tmp3 = new closure_0(closure_2.VISA_CHECKOUT_INIT_OPTIONS_REQUIRED);
            tmp4 = tmp3;
            throw tmp3;
          }
        }
        tokenize(arg0) {
          self = this;
          if (global.callid) {
            if (global.encKey) {
              if (global.encPaymentData) {
                _client = tmp._client;
                obj = { method: "post", endpoint: "payment_methods/visa_checkout_cards", data: null };
                obj1 = { _meta: null, visaCheckoutCard: null };
                obj1._meta = { source: "visa-checkout" };
                obj4 = { callId: null, encryptedPaymentData: null, encryptedKey: null };
                ({
                  callid: obj3.callId,
                  encPaymentData: obj3.encryptedPaymentData,
                  encKey: obj3.encryptedKey,
                } = global);
                obj1.visaCheckoutCard = obj4;
                obj.data = obj1;
                requestResult = _client.request(obj);
                nextPromise = requestResult.then(() => {
                  /* body not rendered: F150743 */
                });
                catchPromise = nextPromise.catch(() => {
                  /* body not rendered: F150744 */
                });
              }
              return catchPromise;
            }
          }
          reject = Promise.reject;
          tmp2 = new self(closure_2.VISA_CHECKOUT_PAYMENT_REQUIRED);
          catchPromise = reject(tmp2);
          return;
        }
        teardown() {
          tmp = closure_5(this, closure_4(VisaCheckout.prototype));
          return Promise.resolve();
        }
      }
      let closure_0 = global("../lib/braintree-error");
      let closure_1 = global("../lib/analytics");
      constants = global("./errors");
      let closure_3 = global("../lib/json-clone");
      let closure_4 = global("../lib/methods");
      let closure_5 = global("../lib/convert-methods-to-error");
      let closure_6 = { Visa: "VISA", MasterCard: "MASTERCARD", Discover: "DISCOVER", "American Express": "AMEX" };
      const globalResult = global("@braintree/wrap-promise");
      module.exports = globalResult.wrapPrototype(VisaCheckout);
    },
    {
      "../lib/analytics": 138,
      "../lib/braintree-error": 143,
      "../lib/convert-methods-to-error": 146,
      "../lib/json-clone": 174,
      "../lib/methods": 175,
      "./errors": 246,
      "@braintree/wrap-promise": 40,
    },
  ];
  obj[248] = items247;
  return handler(obj, {}, [136])(136);
};
if (typeof exports === "object") {
  if (undefined !== module) {
    module.exports = fn();
  }
}
if (typeof globalThis.define === "function") {
  let define2 = globalThis.define;
  if (globalThis.define.amd) {
    globalThis.define([], fn);
  }
}
if (typeof window !== "undefined") {
  _window = window;
} else {
  _window = global;
  if (undefined === global) {
    let _self = self;
    let _self2 = globalThis;
    if (typeof self !== "undefined") {
      _self2 = self;
    }
    _window = _self2;
  }
}
_window.braintree = fn();
