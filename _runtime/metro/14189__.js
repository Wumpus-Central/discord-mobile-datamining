// _runtime/metro/14189__.js

export const getReactNativeVersionWithModules = function getReactNativeVersionWithModules(constants) {
  try {
    const tmp = constants;
    if (tmp) {
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
          const tmp16 = prerelease;
          if (tmp16) {
            const _HermesInternal = HermesInternal;
            items.push("-" + prerelease);
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
