// === Module 1736: bundleValueUnpacker ===

// Module 1736 (bundleValueUnpacker)

export function bundleValueUnpacker(__workletHash) {
  __workletHash = __workletHash.__workletHash;
  if (undefined !== __workletHash) {
    const __closure = __workletHash.__closure;
    const _default = __r(__workletHash).default;
    let _defaultResult = _default;
    if (undefined !== __closure) {
      _defaultResult = _default(__closure);
    }
    return _defaultResult;
  } else {
    const _Error = Error;
    const _globalThis = globalThis;
    const _HermesInternal = HermesInternal;
    const error = new Error("[Worklets] Data type not recognized by value unpacker: \"" + globalThis._toString(__workletHash) + "\".");
    throw error;
  }
}