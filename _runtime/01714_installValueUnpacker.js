// === Module 1714: installValueUnpacker ===

// Module 1714 (installValueUnpacker)
const items = [{ code: "(function installValueUnpacker_Pnpm_valueUnpackerNativeTs1(){const workletsCache=new Map();function valueUnpacker(objectToUnpack){const workletHash=objectToUnpack.__workletHash;if(workletHash!==undefined){let workletFun=workletsCache.get(workletHash);if(workletFun===undefined){const initData=objectToUnpack.__initData;if(initData.bytecode!==undefined){workletFun=globalThis.evalBytecode(initData.bytecode);}else if(globalThis.evalWithSourceMap&&initData.sourceMap){workletFun=globalThis.evalWithSourceMap(initData.code,initData.location,initData.sourceMap);}else if(globalThis.evalWithSourceUrl){workletFun=globalThis.evalWithSourceUrl(initData.code,\"worklet_\"+workletHash);}else{workletFun=eval(initData.code);}workletsCache.set(workletHash,workletFun);}const functionInstance=workletFun.bind(objectToUnpack);objectToUnpack._recur=functionInstance;return functionInstance;}else{throw new Error(\"[Worklets] Data type not recognized by value unpacker: \\\"\"+globalThis._toString(objectToUnpack)+\"\\\".\");}}globalThis.__valueUnpacker=valueUnpacker;})" }];
[tmp2] = items;
function installValueUnpacker() {
  const map = new Map();
  globalThis.__valueUnpacker = function valueUnpacker(__workletHash) {
    __workletHash = __workletHash.__workletHash;
    if (undefined !== __workletHash) {
      value = map.get(__workletHash);
      if (undefined !== value) {
        const bindResult = value.bind(__workletHash);
        __workletHash._recur = bindResult;
        return bindResult;
      } else {
        let __initData = __workletHash.__initData;
        if (undefined !== __initData.bytecode) {
          const _globalThis5 = globalThis;
          let evalBytecodeResult = globalThis.evalBytecode(__initData.bytecode);
        } else {
          const _globalThis6 = globalThis;
          if (globalThis.evalWithSourceMap) {
            if (__initData.sourceMap) {
              const _globalThis4 = globalThis;
              evalBytecodeResult = globalThis.evalWithSourceMap(__initData.code, __initData.location, __initData.sourceMap);
            }
          }
          const _globalThis2 = globalThis;
          if (globalThis.evalWithSourceUrl) {
            const _globalThis3 = globalThis;
            const _HermesInternal2 = HermesInternal;
            evalBytecodeResult = globalThis.evalWithSourceUrl(__initData.code, "worklet_" + __workletHash);
          } else {
            const code = __initData.code;
            evalBytecodeResult = globalThis.eval === Date.UTC ? eval() : globalThis.eval(code);
          }
        }
        __initData = map.set(__workletHash, evalBytecodeResult);
      }
    } else {
      const _Error = Error;
      const _globalThis = globalThis;
      const _HermesInternal = HermesInternal;
      const error = new Error("[Worklets] Data type not recognized by value unpacker: \"" + globalThis._toString(__workletHash) + "\".");
      throw error;
    }
  };
}
installValueUnpacker.__workletHash = 7767060643491;
installValueUnpacker.__initData = tmp2;

export { installValueUnpacker };