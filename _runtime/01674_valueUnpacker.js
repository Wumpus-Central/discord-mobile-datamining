// === Module 1674: valueUnpacker ===

// Module 1674 (valueUnpacker)
const global = arg0;
function valueUnpacker(__workletHash) {
  closure_0 = arg2;
  ({ __workletsCache, __handleCache } = closure_0);
  if (undefined === __workletsCache) {
    const _Map = Map;
    const map = new Map();
    obj.__workletsCache = map;
    const _WeakMap = WeakMap;
    const weakMap = new WeakMap();
    obj.__handleCache = weakMap;
    __handleCache = weakMap;
    __workletsCache = map;
  }
  __workletHash = __workletHash.__workletHash;
  if (undefined !== __workletHash) {
    let value = __workletsCache.get(__workletHash);
    if (undefined !== value) {
      const bindResult = value.bind(__workletHash);
      __workletHash._recur = bindResult;
      return bindResult;
    } else {
      let __initData = __workletHash.__initData;
      if (obj.evalWithSourceMap) {
        let _eval = obj.evalWithSourceMap(`(${__initData.code}
  )`, __initData.location, __initData.sourceMap);
      } else if (obj.evalWithSourceUrl) {
        const _HermesInternal2 = HermesInternal;
        const text = `(${__initData.code}`;
        _eval = obj.evalWithSourceUrl(`${`(${__initData.code}`}
  )`, "worklet_" + __workletHash);
      } else {
        _eval = globalThis.eval;
        const text1 = `${"(" + __initData.code}
  )`;
        if (globalThis.eval === /* builtin1  */) {
          // DirectEval (0x78)
        } else {
          _eval = _eval(`${"(" + __initData.code}
  )`);
        }
      }
      __initData = __workletsCache.set(__workletHash, _eval);
    }
  } else if (undefined !== __workletHash.__init) {
    value = __handleCache.get(__workletHash);
    if (undefined === value) {
      const __initResult = __workletHash.__init();
      const result = __handleCache.set(__workletHash, __initResult);
      value = __initResult;
    }
    return value;
  } else if ("RemoteFunction" === arg1) {
    function fun() {
      let str = "anonymous function";
      if (closure_0) {
        const _HermesInternal = HermesInternal;
        str = "function `" + tmp + "`";
      }
      error = new Error("[Reanimated] Tried to synchronously call a non-worklet " + str + " on the UI thread.\nSee https://docs.swmansion.com/react-native-reanimated/docs/guides/troubleshooting#tried-to-synchronously-call-a-non-worklet-function-on-the-ui-thread for more details.");
      throw error;
    }
    fun.__remoteFunction = __workletHash;
    return fun;
  } else {
    const _Error = Error;
    let _HermesInternal = HermesInternal;
    error = new Error("[Reanimated] Data type in category \"" + arg1 + "\" not recognized by value unpacker: \"" + globalThis._toString(__workletHash) + "\".");
    throw error;
  }
}
valueUnpacker.__closure = {};
valueUnpacker.__workletHash = 7175751357828;
valueUnpacker.__initData = { code: "function valueUnpacker_Pnpm_valueUnpackerTs1(objectToUnpack,category,remoteFunctionName){let workletsCache=global.__workletsCache;let handleCache=global.__handleCache;if(workletsCache===undefined){workletsCache=global.__workletsCache=new Map();handleCache=global.__handleCache=new WeakMap();}const workletHash=objectToUnpack.__workletHash;if(workletHash!==undefined){let workletFun=workletsCache.get(workletHash);if(workletFun===undefined){const initData=objectToUnpack.__initData;if(global.evalWithSourceMap){workletFun=global.evalWithSourceMap('('+initData.code+'\\n)',initData.location,initData.sourceMap);}else if(global.evalWithSourceUrl){workletFun=global.evalWithSourceUrl('('+initData.code+'\\n)',\"worklet_\"+workletHash);}else{workletFun=eval('('+initData.code+'\\n)');}workletsCache.set(workletHash,workletFun);}const functionInstance=workletFun.bind(objectToUnpack);objectToUnpack._recur=functionInstance;return functionInstance;}else if(objectToUnpack.__init!==undefined){let value=handleCache.get(objectToUnpack);if(value===undefined){value=objectToUnpack.__init();handleCache.set(objectToUnpack,value);}return value;}else if(category==='RemoteFunction'){const fun=function(){const label=remoteFunctionName?\"function `\"+remoteFunctionName+\"`\":'anonymous function';throw new Error(\"[Reanimated] Tried to synchronously call a non-worklet \"+label+\" on the UI thread.\\nSee https://docs.swmansion.com/react-native-reanimated/docs/guides/troubleshooting#tried-to-synchronously-call-a-non-worklet-function-on-the-ui-thread for more details.\");};fun.__remoteFunction=objectToUnpack;return fun;}else{throw new Error(\"[Reanimated] Data type in category \\\"\"+category+\"\\\" not recognized by value unpacker: \\\"\"+_toString(objectToUnpack)+\"\\\".\");}}" };
arg5.getValueUnpackerCode = function getValueUnpackerCode() {
  return valueUnpacker.__initData.code;
};