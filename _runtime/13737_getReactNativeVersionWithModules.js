// _runtime/13737_getReactNativeVersionWithModules.js
arg5.getReactNativeVersionWithModules = function getReactNativeVersionWithModules(constants) {
  try {
    if (constants) {
      if (constants.reactNativeVersion) {
        const major = constants.reactNativeVersion.major;
        const minor = constants.reactNativeVersion.minor;
        const patch = constants.reactNativeVersion.patch;
        const prerelease = constants.reactNativeVersion.prerelease;
        if (typeof major !== "number") {
          return null;
        } else {
          const items = [];
          const _HermesInternal2 = HermesInternal;
          items.push("" + tmp4 + "." + minor + "." + patch);
          if (prerelease) {
            const _HermesInternal = HermesInternal;
            arr2.push("-" + prerelease);
          }
          return items.join("");
        }
      } else {
        return null;
      }
    } else {
      return null;
    }
  } catch (err) {
    return null;
  }
};