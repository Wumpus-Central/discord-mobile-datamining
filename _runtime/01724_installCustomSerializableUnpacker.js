// _runtime/01724_installCustomSerializableUnpacker.js
const items = [
  {
    code: '(function installCustomSerializableUnpacker_Pnpm_customSerializableUnpackerNativeTs1(){if(!globalThis.__customSerializationRegistry){globalThis.__customSerializationRegistry=[];}const registry=globalThis.__customSerializationRegistry;function customSerializableUnpacker(value,typeId){const data=registry[typeId];if(!data){throw new Error("[Worklets] No custom serializable registered for type ID "+typeId+".");}return data.unpack(value);}globalThis.__customSerializableUnpacker=customSerializableUnpacker;})',
  },
];
[tmp2] = items;
function installCustomSerializableUnpacker() {
  if (!globalThis.__customSerializationRegistry) {
    const _globalThis = globalThis;
    globalThis.__customSerializationRegistry = [];
  }
  closure_0 = globalThis.__customSerializationRegistry;
  globalThis.__customSerializableUnpacker = function customSerializableUnpacker(arg0, arg1) {
    if (closure_0[arg1]) {
      return obj.unpack(arg0);
    } else {
      const _Error = Error;
      const _HermesInternal = HermesInternal;
      const error = new Error("[Worklets] No custom serializable registered for type ID " + arg1 + ".");
      throw error;
    }
  };
}
installCustomSerializableUnpacker.__workletHash = 4367404668659;
installCustomSerializableUnpacker.__initData = tmp2;

export { installCustomSerializableUnpacker };
