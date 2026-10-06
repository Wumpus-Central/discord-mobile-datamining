// _runtime/01292_GetIntrinsic.js
import _mod1293 from "metro/01293__.js";
import _mod1294 from "metro/01294__.js";
import hasNativeSymbols from "01296_hasNativeSymbols.js";
import _mod1298 from "metro/01298__.js";
import _mod1299 from "metro/01299__.js";
import _mod1300 from "metro/01300__.js";
import _mod1301 from "metro/01301__.js";
import _mod1308 from "metro/01308__.js";
import _mod1309 from "metro/01309__.js";
import _mod1310 from "metro/01310__.js";
import _mod1311 from "metro/01311__.js";
import _mod1312 from "metro/01312__.js";
import _mod1313 from "metro/01313__.js";
import _mod1314 from "metro/01314__.js";
import _mod1315 from "metro/01315__.js";
import flag4 from "01316_flag.js";
import _mod1317 from "metro/01317__.js";
import _mod1318 from "metro/01318__.js";
import _mod1319 from "metro/01319__.js";
import _mod1320 from "metro/01320__.js";
import _mod1321 from "metro/01321__.js";
import _mod1322 from "metro/01322__.js";
import sign from "01323_sign.js";
import bind_mod from "01306_bind.js";

function getEvalledConstructor(arg0) {
  try {
    const _HermesInternal = HermesInternal;
    return Function('"use strict"; return (' + arg0 + ").constructor;")();
  } catch (err) {}
}
function throwTypeError() {
  const tmp = new _mod1293();
  throw tmp;
}
const _Function = Function;
if (_mod1294) {
  throwTypeError = (function () {
    try {
      return throwTypeError;
    } catch (err) {
      try {
        return _mod1294(arguments, "callee").get;
      } catch (err) {
        return throwTypeError;
      }
    }
  })();
}
let tmp = hasNativeSymbols();
const obj = {};
let tmp2;
if (typeof Uint8Array !== "undefined") {
  if (_mod1298) {
    const _Uint8Array = Uint8Array;
    tmp2 = _mod1298(Uint8Array);
  }
}
let AggregateError;
if (typeof globalThis.AggregateError !== "undefined") {
  AggregateError = globalThis.AggregateError;
}
const merged = Object.assign({
  "%AggregateError%": null,
  "%Array%": null,
  "%ArrayBuffer%": null,
  "%ArrayIteratorPrototype%": null,
  "%AsyncFromSyncIteratorPrototype%": "formatToPlainString",
  "%AsyncFunction%": "\u00C5bn Discord",
  "%AsyncGenerator%": "Tilmeld dig nu",
  "%AsyncGeneratorFunction%": "Klar til at pr\u00F8ve Discord? Det er gratis.",
  "%AsyncIteratorPrototype%": "SLUT DIG TIL OVER {num} MILLIONER AF SPILLERE I DAG",
  "%Atomics%": "Start",
  "%BigInt%": "Funktioner",
  "%BigInt64Array%": "Nitro",
  "%BigUint64Array%": "Download",
  "%Boolean%": "Partnere",
  "%DataView%": "Byg",
  "%Date%": "Mere",
  "%decodeURI%": "Status",
  "%decodeURIComponent%": "Hj\u00E6lp og support",
  "%encodeURI%": "Retningslinjer",
  "%encodeURIComponent%": "HypeSquad",
  "%Error%": "StreamKit",
  "%eval%": "Selskab",
  "%EvalError%": "Stillinger",
  "%Float16Array%": "Sikkerhed",
  "%Float32Array%": "Udviklere",
  "%Float64Array%": "Dokumentation",
  "%FinalizationRegistry%": "Varem\u00E6rke",
  "%Function%": "Log ind",
  "%GeneratorFunction%": "\u00C5bn",
  "%Int8Array%": "Produkt",
  "%Int16Array%": "Ressourcer",
  "%Int32Array%": "Applikationer",
  "%isFinite%": "Betingelser",
  "%isNaN%": "Fortrolighed",
  "%IteratorPrototype%": "Om",
  "%JSON%": "Bekr\u00E6ftelse",
  "%Map%": "Rich Presence",
  "%MapIteratorPrototype%": "Presseforesp\u00F8rgsler",
  "%Math%": "Support",
  "%Number%": "UdviklingsPortal",
  "%Object%": "Community",
  "%Object.getOwnPropertyDescriptor%": "Sikkerhed",
  "%parseFloat%": "Sikkerhedscenter",
  "%parseInt%": "Mod-Akademiet",
  "%Promise%": "Udforsk",
  "%Proxy%": "Servere",
  "%RangeError%": "Karrierer",
  "%ReferenceError%": "Missioner",
  "%Reflect%": "{count, plural, one {# eksklusiv fordel} other {# eksklusive fordele}}",
  "%RegExp%": "Eksklusivt for dette niveau",
  "%Set%": "Serverabonnement",
  "%SetIteratorPrototype%": "Personligt abonnement",
  "%SharedArrayBuffer%": "+ {count, plural, one {# fordel mere} other {# fordele mere}}",
  "%String%": "{num}M",
  "%StringIteratorPrototype%": "{num}K",
  "%Symbol%": "Dit sted, hvor du kan tale med communities og venner.",
  "%SyntaxError%": "Stop!",
  "%ThrowTypeError%":
    "Hvis nogen bad dig om at kopiere og inds\u00E6tte noget her, er der en 110 % chance for, at du bliver snydt.",
  "%TypedArray%": "Hvis du inds\u00E6tter noget herinde, giver det scammere adgang til din Discord-konto.",
  "%TypeError%":
    "Medmindre du forst\u00E5r pr\u00E6cist, hvad du har gang i, s\u00E5 luk dette vindue og forbliv p\u00E5 den sikre side.",
  "%Uint8Array%":
    "Hvis du rent faktisk forst\u00E5r pr\u00E6cist, hvad du har gang i, skulle du komme og arbejde sammen med os {url}",
  "%Uint8ClampedArray%": "capital_abcd",
  "%Uint16Array%": 0.667,
  "%Uint32Array%": 0.667,
  "%URIError%": 0.667,
  "%WeakMap%": "ArrayBuffer",
  "%WeakRef%": "prototype",
  "%WeakSet%": "over 1 year",
  "%Function.prototype.call%": "over {{count}} years",
  "%Function.prototype.apply%": "<string:206158386>",
  "%Object.defineProperty%": "<string:1562848002>",
  "%Object.getPrototypeOf%": "<string:3435974080>",
  "%Math.abs%": "<string:1094503628>",
  "%Math.floor%":
    "function pnpm_LinearTransitionTs1(values){const{delayFunction,delay,animation,config,callback}=this.__closure;return{initialValues:{originX:values.currentOriginX,originY:values.currentOriginY,width:values.currentWidth,height:values.currentHeight},animations:{originX:delayFunction(delay,animation(values.targetOriginX,config)),originY:delayFunction(delay,animation(values.targetOriginY,config)),width:delayFunction(delay,animation(values.targetWidth,config)),height:delayFunction(delay,animation(values.targetHeight,config))},callback:callback};}",
  "%Math.max%": "<string:1934295237>",
  "%Math.min%": "<string:1543504132>",
  "%Math.pow%": "<string:167772510>",
  "%Math.round%": "<string:184549637>",
  "%Math.sign%": "<string:201326853>",
  "%Reflect.getPrototypeOf%": "<string:3439329541>",
});
merged[0] = AggregateError;
merged[1] = Array;
let _ArrayBuffer;
if (typeof ArrayBuffer !== "undefined") {
  _ArrayBuffer = ArrayBuffer;
}
merged[2] = _ArrayBuffer;
let _moduleResult;
if (tmp) {
  if (_mod1298) {
    let items = [];
    const _Symbol = Symbol;
    const _module = _mod1298;
    _moduleResult = _module(items[Symbol.iterator]());
  }
}
merged[3] = _moduleResult;
merged[5] = obj;
merged[6] = obj;
merged[7] = obj;
merged[8] = obj;
let _Atomics;
if (typeof Atomics !== "undefined") {
  _Atomics = Atomics;
}
merged[9] = _Atomics;
let _BigInt;
if (typeof BigInt !== "undefined") {
  _BigInt = BigInt;
}
merged[10] = _BigInt;
let _BigInt64Array;
if (typeof BigInt64Array !== "undefined") {
  _BigInt64Array = BigInt64Array;
}
merged[11] = _BigInt64Array;
let _BigUint64Array;
if (typeof BigUint64Array !== "undefined") {
  _BigUint64Array = BigUint64Array;
}
merged[12] = _BigUint64Array;
merged[13] = Boolean;
let _DataView;
if (typeof DataView !== "undefined") {
  _DataView = DataView;
}
merged[14] = _DataView;
merged[15] = Date;
merged[16] = decodeURI;
merged[17] = decodeURIComponent;
merged[18] = encodeURI;
merged[19] = encodeURIComponent;
merged[20] = _mod1310;
merged[21] = globalThis.eval;
merged[22] = _mod1311;
let Float16Array;
if (typeof globalThis.Float16Array !== "undefined") {
  Float16Array = globalThis.Float16Array;
}
merged[23] = Float16Array;
let _Float32Array;
if (typeof Float32Array !== "undefined") {
  _Float32Array = Float32Array;
}
merged[24] = _Float32Array;
let _Float64Array;
if (typeof Float64Array !== "undefined") {
  _Float64Array = Float64Array;
}
merged[25] = _Float64Array;
let FinalizationRegistry;
if (typeof globalThis.FinalizationRegistry !== "undefined") {
  FinalizationRegistry = globalThis.FinalizationRegistry;
}
merged[26] = FinalizationRegistry;
merged[27] = _Function;
merged[28] = obj;
let _Int8Array;
if (typeof Int8Array !== "undefined") {
  _Int8Array = Int8Array;
}
merged[29] = _Int8Array;
let _Int16Array;
if (typeof Int16Array !== "undefined") {
  _Int16Array = Int16Array;
}
merged[30] = _Int16Array;
let _Int32Array;
if (typeof Int32Array !== "undefined") {
  _Int32Array = Int32Array;
}
merged[31] = _Int32Array;
merged[32] = isFinite;
merged[33] = isNaN;
let _module1Result;
if (tmp) {
  if (_mod1298) {
    const _module1 = _mod1298;
    const items1 = [];
    const _Symbol2 = Symbol;
    const _module2 = _mod1298;
    _module1Result = _module1(_module2(items1[Symbol.iterator]()));
  }
}
merged[34] = _module1Result;
let _JSON;
if (typeof JSON === "object") {
  _JSON = JSON;
}
merged[35] = _JSON;
let _Map1;
if (typeof Map !== "undefined") {
  _Map1 = Map;
}
merged[36] = _Map1;
let _module3Result;
if (typeof Map !== "undefined") {
  if (tmp) {
    if (_mod1298) {
      const _Map = Map;
      let self = this;
      let self2 = this;
      const _module3 = _mod1298;
      const _Symbol3 = Symbol;
      const map = new Map();
      _module3Result = _module3(map[Symbol.iterator]());
    }
  }
}
merged[37] = _module3Result;
merged[38] = Math;
merged[39] = Number;
merged[40] = _mod1301;
merged[41] = _mod1294;
merged[42] = parseFloat;
merged[43] = parseInt;
let _Promise;
if (typeof Promise !== "undefined") {
  _Promise = Promise;
}
merged[44] = _Promise;
let _Proxy;
if (typeof Proxy !== "undefined") {
  _Proxy = Proxy;
}
merged[45] = _Proxy;
merged[46] = _mod1312;
merged[47] = _mod1313;
let _Reflect;
if (typeof Reflect !== "undefined") {
  _Reflect = Reflect;
}
merged[48] = _Reflect;
merged[49] = RegExp;
let _Set1;
if (typeof Set !== "undefined") {
  _Set1 = Set;
}
merged[50] = _Set1;
let _module4Result;
if (typeof Set !== "undefined") {
  if (tmp) {
    if (_mod1298) {
      const _Set = Set;
      let self3 = this;
      let self4 = this;
      const _module4 = _mod1298;
      const set = new Set();
      const _Symbol4 = Symbol;
      _module4Result = _module4(set[Symbol.iterator]());
    }
  }
}
merged[51] = _module4Result;
let _SharedArrayBuffer;
if (typeof SharedArrayBuffer !== "undefined") {
  _SharedArrayBuffer = SharedArrayBuffer;
}
merged[52] = _SharedArrayBuffer;
merged[53] = String;
let _module5Result;
if (tmp) {
  if (_mod1298) {
    const _Symbol5 = Symbol;
    let str = "";
    const _module5 = _mod1298;
    _module5Result = _module5(""[Symbol.iterator]());
  }
}
merged[54] = _module5Result;
let _Symbol1;
if (tmp) {
  _Symbol1 = Symbol;
}
merged[55] = _Symbol1;
merged[56] = _mod1314;
merged[57] = throwTypeError;
merged[58] = tmp2;
merged[59] = _mod1293;
let _Uint8Array1;
if (typeof Uint8Array !== "undefined") {
  _Uint8Array1 = Uint8Array;
}
merged[60] = _Uint8Array1;
let _Uint8ClampedArray;
if (typeof Uint8ClampedArray !== "undefined") {
  _Uint8ClampedArray = Uint8ClampedArray;
}
merged[61] = _Uint8ClampedArray;
let _Uint16Array;
if (typeof Uint16Array !== "undefined") {
  _Uint16Array = Uint16Array;
}
merged[62] = _Uint16Array;
let _Uint32Array;
if (typeof Uint32Array !== "undefined") {
  _Uint32Array = Uint32Array;
}
merged[63] = _Uint32Array;
merged[64] = _mod1315;
let _WeakMap;
if (typeof WeakMap !== "undefined") {
  _WeakMap = WeakMap;
}
merged[65] = _WeakMap;
let _WeakRef;
if (typeof WeakRef !== "undefined") {
  _WeakRef = WeakRef;
}
merged[66] = _WeakRef;
let _WeakSet;
if (typeof WeakSet !== "undefined") {
  _WeakSet = WeakSet;
}
merged[67] = _WeakSet;
merged[68] = _mod1308;
merged[69] = _mod1309;
merged[70] = flag4;
merged[71] = _mod1300;
merged[72] = _mod1317;
merged[73] = _mod1318;
merged[74] = _mod1319;
merged[75] = _mod1320;
merged[76] = _mod1321;
merged[77] = _mod1322;
merged[78] = sign;
merged[79] = _mod1299;
if (_mod1298) {
  try {
    const error = null.error;
  } catch (tmp48) {
    const _module6 = _mod1298;
    merged["%Error.prototype%"] = _module6(_mod1298(tmp48));
  }
}
function doEval(arg0) {
  let prototype;
  if ("%AsyncFunction%" === arg0) {
    prototype = getEvalledConstructor("async function () {}");
  } else if ("%GeneratorFunction%" === arg0) {
    prototype = getEvalledConstructor("function* () {}");
  } else if ("%AsyncGeneratorFunction%" === arg0) {
    prototype = getEvalledConstructor("async function* () {}");
  } else if ("%AsyncGenerator%" === arg0) {
    const tmp7 = doEval("%AsyncGeneratorFunction%");
    if (tmp7) {
      prototype = tmp7.prototype;
    }
  } else if ("%AsyncIteratorPrototype%" === arg0) {
    const tmp12 = doEval("%AsyncGenerator%");
    const tmp3 = tmp12 && _mod1298;
    if (tmp3) {
      prototype = _mod1298(tmp12.prototype);
    }
  }
  merged[arg0] = prototype;
  return prototype;
}
const merged1 = Object.assign({
  "%ArrayBufferPrototype%": null,
  "%ArrayPrototype%": null,
  "%ArrayProto_entries%": null,
  "%ArrayProto_forEach%": null,
  "%ArrayProto_keys%": null,
  "%ArrayProto_values%": null,
  "%AsyncFunctionPrototype%": null,
  "%AsyncGenerator%": null,
  "%AsyncGeneratorPrototype%": null,
  "%BooleanPrototype%": null,
  "%DataViewPrototype%": null,
  "%DatePrototype%": null,
  "%ErrorPrototype%": null,
  "%EvalErrorPrototype%": null,
  "%Float32ArrayPrototype%": null,
  "%Float64ArrayPrototype%": null,
  "%FunctionPrototype%": null,
  "%Generator%": null,
  "%GeneratorPrototype%": null,
  "%Int8ArrayPrototype%": null,
  "%Int16ArrayPrototype%": null,
  "%Int32ArrayPrototype%": null,
  "%JSONParse%": null,
  "%JSONStringify%": null,
  "%MapPrototype%": null,
  "%NumberPrototype%": null,
  "%ObjectPrototype%": null,
  "%ObjProto_toString%": null,
  "%ObjProto_valueOf%": null,
  "%PromisePrototype%": null,
  "%PromiseProto_then%": null,
  "%Promise_all%": null,
  "%Promise_reject%": null,
  "%Promise_resolve%": null,
  "%RangeErrorPrototype%": null,
  "%ReferenceErrorPrototype%": null,
  "%RegExpPrototype%": null,
  "%SetPrototype%": null,
  "%SharedArrayBufferPrototype%": null,
  "%StringPrototype%": null,
  "%SymbolPrototype%": null,
  "%SyntaxErrorPrototype%": null,
  "%TypedArrayPrototype%": null,
  "%TypeErrorPrototype%": null,
  "%Uint8ArrayPrototype%": null,
  "%Uint8ClampedArrayPrototype%": null,
  "%Uint16ArrayPrototype%": null,
  "%Uint32ArrayPrototype%": null,
  "%URIErrorPrototype%": null,
  "%WeakMapPrototype%": null,
  "%WeakSetPrototype%": null,
});
merged1[0] = ["ArrayBuffer", "prototype"];
merged1[1] = ["Array", "prototype"];
merged1[2] = ["Array", "prototype", "entries"];
merged1[3] = ["Array", "prototype", "forEach"];
merged1[4] = ["Array", "prototype", "keys"];
merged1[5] = ["Array", "prototype", "values"];
merged1[6] = ["AsyncFunction", "prototype"];
merged1[7] = ["AsyncGeneratorFunction", "prototype"];
merged1[8] = ["AsyncGeneratorFunction", "prototype", "prototype"];
merged1[9] = ["Boolean", "prototype"];
merged1[10] = ["DataView", "prototype"];
merged1[11] = ["Date", "prototype"];
merged1[12] = ["Error", "prototype"];
merged1[13] = ["EvalError", "prototype"];
merged1[14] = ["Float32Array", "prototype"];
merged1[15] = ["Float64Array", "prototype"];
merged1[16] = ["Function", "prototype"];
merged1[17] = ["GeneratorFunction", "prototype"];
merged1[18] = ["GeneratorFunction", "prototype", "prototype"];
merged1[19] = ["Int8Array", "prototype"];
merged1[20] = ["Int16Array", "prototype"];
merged1[21] = ["Int32Array", "prototype"];
merged1[22] = ["JSON", "parse"];
merged1[23] = ["JSON", "stringify"];
merged1[24] = ["Map", "prototype"];
merged1[25] = ["Number", "prototype"];
merged1[26] = ["Object", "prototype"];
merged1[27] = ["Object", "prototype", "toString"];
merged1[28] = ["Object", "prototype", "valueOf"];
merged1[29] = ["Promise", "prototype"];
merged1[30] = ["Promise", "prototype", "then"];
merged1[31] = ["Promise", "all"];
merged1[32] = ["Promise", "reject"];
merged1[33] = ["Promise", "resolve"];
merged1[34] = ["RangeError", "prototype"];
merged1[35] = ["ReferenceError", "prototype"];
merged1[36] = ["RegExp", "prototype"];
merged1[37] = ["Set", "prototype"];
merged1[38] = ["SharedArrayBuffer", "prototype"];
merged1[39] = ["String", "prototype"];
merged1[40] = ["Symbol", "prototype"];
merged1[41] = ["SyntaxError", "prototype"];
merged1[42] = ["TypedArray", "prototype"];
merged1[43] = ["TypeError", "prototype"];
merged1[44] = ["Uint8Array", "prototype"];
merged1[45] = ["Uint8ClampedArray", "prototype"];
merged1[46] = ["Uint16Array", "prototype"];
merged1[47] = ["Uint32Array", "prototype"];
merged1[48] = ["URIError", "prototype"];
merged1[49] = ["WeakMap", "prototype"];
merged1[50] = ["WeakSet", "prototype"];
let bind = bind_mod;
bind.call(_mod1308, Array.prototype.concat);
bind = bind_mod;
const module_1309 = bind.call(_mod1309, Array.prototype.splice);
bind = bind_mod;
bind.call(_mod1308, String.prototype.replace);
bind = bind_mod;
bind.call(_mod1308, String.prototype.slice);
bind = bind_mod;
const module_1308 = bind.call(_mod1308, RegExp.prototype.exec);
const re14 = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
const re15 = /\\(\\)?/g;
function getBaseIntrinsic(arg0, arg1) {}

export default function GetIntrinsic(str, flag) {
  let items;
  let tmp41;
  let tmp42;
  if (typeof str === "string") {
    if (0 !== str.length) {
      if (arguments.length > 1) {
        if (typeof flag !== "boolean") {
          const self15 = this;
          const self16 = this;
          const tmp80 = new items(1293)('"allowMissing" argument must be a boolean');
          throw tmp80;
        }
      }
      let tmp2 = null;
      if (null === module_1308(/^%?[^%]*%?$/, str)) {
        const self13 = this;
        const self14 = this;
        const tmp76 = new items(1314)(
          "`%` may not be present anywhere but at the beginning and end of the intrinsic name",
        );
        throw tmp76;
      } else {
        const tmp85 = module_1308(str, 0, 1);
        const tmp86 = module_1308(str, -1);
        if ("%" === tmp85) {
          if ("%" !== tmp86) {
            const self11 = this;
            const self12 = this;
            const tmp72 = new items(1314)("invalid intrinsic syntax, expected closing `%`");
            throw tmp72;
          }
        }
        if ("%" === tmp86) {
          if ("%" !== tmp85) {
            const self9 = this;
            const self10 = this;
            const tmp68 = new items(1314)("invalid intrinsic syntax, expected opening `%`");
            throw tmp68;
          }
        }
        items = [];
        module_1308(str, closure_14, (arg0, arg1, arg2, arg3) => {
          let tmp2;
          const length = items.length;
          if (arg2) {
            tmp2 = module_1308(arg3, re15, "$1");
          } else {
            tmp2 = arg1 || arg0;
          }
          items[length] = tmp2;
        });
        str = "";
        if (items.length > 0) {
          str = items[0];
        }
        if (typeof getBaseIntrinsic === "function") {
          const text = `${"%" + str}%`;
          let text1 = text;
          if (items(1325)(merged1, `${"%" + str}%`)) {
            text1 = `${"%" + merged1[`${"%" + str}%`][0]}%`;
          }
          if (items(1325)(merged, text1)) {
            let tmp20 = merged[text1];
            if (tmp20 === obj) {
              if (typeof doEval === "function") {
                let prototype;
                if ("%AsyncFunction%" === text1) {
                  prototype = getEvalledConstructor("async function () {}");
                } else if ("%GeneratorFunction%" === text1) {
                  prototype = getEvalledConstructor("function* () {}");
                } else if ("%AsyncGeneratorFunction%" === text1) {
                  prototype = getEvalledConstructor("async function* () {}");
                } else if ("%AsyncGenerator%" === text1) {
                  const tmp25 = getEvalledConstructor("async function* () {}");
                  merged["%AsyncGeneratorFunction%"] = tmp25;
                  if (tmp25) {
                    prototype = tmp25.prototype;
                  }
                } else if ("%AsyncIteratorPrototype%" === text1) {
                  const tmp89 = doEval("%AsyncGeneratorFunction%");
                  let prototype1;
                  if (tmp89) {
                    prototype1 = tmp89.prototype;
                  }
                  merged["%AsyncGenerator%"] = prototype1;
                  const tmp23 = prototype1 && items(1298);
                  if (tmp23) {
                    prototype = tmp8(1298)(prototype1.prototype);
                  }
                }
                merged[text1] = prototype;
                tmp20 = prototype;
              } else {
                throw new TypeError("Trying to call a non-function");
              }
            }
            if (undefined === tmp20) {
              if (!flag) {
                const _HermesInternal2 = HermesInternal;
                const self3 = this;
                const self4 = this;
                const tmp8Result = items(1293);
                const tmp8Result2 = new tmp8Result(
                  "intrinsic " + text + " exists, but is not available. Please file an issue!",
                );
                throw tmp8Result2;
              }
            }
            if (tmp12) {
              str = tmp12[0];
              module_1309(items, module_1308([0, 1], tmp12));
            }
            flag = true;
            let num = 1;
            let flag2 = false;
            let tmp37 = tmp20;
            let tmp38 = tmp20;
            if (1 < items.length) {
              do {
                let tmp39 = items[num];
                tmp41 = module_1308(tmp39, 0, 1);
                tmp42 = module_1308(tmp39, -1);
                let flag3 = flag2;
                if ('"' !== tmp41) {
                  if ("'" !== tmp41) {
                    if ("`" !== tmp41) {
                      if ('"' !== tmp42) {
                        let tmp54;
                        let tmp53;
                        let tmp47 = "constructor" !== tmp39 && flag;
                        if (!tmp47) {
                          flag3 = true;
                        }
                        let text2 = `${str}.${tmp39}`;
                        let _HermesInternal3 = HermesInternal;
                        let combined = "%" + text2 + "%";
                        let tmp50 = items;
                        if (items(1325)(merged, combined)) {
                          tmp54 = merged[combined];
                          tmp53 = flag;
                        } else {
                          tmp53 = flag;
                          tmp54 = tmp37;
                          if (null != tmp37) {
                            if (tmp39 in tmp37) {
                              if (tmp50(1294)) {
                                if (num + 1 >= items.length) {
                                  let tmp59 = tmp50(1294)(tmp37, tmp39);
                                  let tmp60 = tmp59;
                                  if (tmp60) {
                                    if ("get" in tmp59) {
                                      let get;
                                      if (!("originalValue" in tmp59.get)) {
                                        get = tmp59.get;
                                      }
                                      let tmp58 = get;
                                      let tmp57 = tmp60;
                                      let tmp61 = tmp57 && !flag3;
                                      tmp53 = tmp57;
                                      tmp54 = tmp58;
                                      if (tmp61) {
                                        merged[combined] = tmp58;
                                        tmp53 = tmp57;
                                        tmp54 = tmp58;
                                      }
                                    }
                                  }
                                  get = tmp37[tmp39];
                                }
                              }
                              tmp57 = tmp50(1325)(tmp37, tmp39);
                              tmp58 = tmp37[tmp39];
                            } else if (!flag) {
                              let str19 = "base intrinsic for ";
                              let self5 = this;
                              let str20 = " exists, but the property is not available.";
                              let self6 = this;
                              let tmp55 = new tmp50(1293)(
                                "base intrinsic for " + str + " exists, but the property is not available.",
                              );
                              throw tmp55;
                            }
                          }
                        }
                        num = num + 1;
                        flag = tmp53;
                        tmp37 = tmp54;
                        flag2 = flag3;
                        str = text2;
                        tmp38 = tmp54;
                      }
                    }
                  }
                }
              } while (tmp41 === tmp42);
              const self7 = this;
              const self8 = this;
              const tmp64 = new items(1314)("property names with quotes must have matching quotes");
              throw tmp64;
            }
            return tmp38;
          } else {
            const _HermesInternal = HermesInternal;
            const self = this;
            const self2 = this;
            const tmp8Result3 = items(1314);
            const tmp8Result11 = new tmp8Result3("intrinsic " + text + " does not exist!");
            throw tmp8Result11;
          }
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      }
    }
  }
  const tmp82 = new items(1293)("intrinsic name must be a non-empty string");
  throw tmp82;
}
