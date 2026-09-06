// _runtime/00052_PlatformColor.js

export const PlatformColor = () => ({ resource_paths: HermesBuiltin.copyRestArgs() });
export const normalizeColorObject = (tintColor) => {
  let tmp = null;
  if ("resource_paths" in tintColor) {
    tmp = tintColor;
  }
  return tmp;
};
export (defaultResult) => defaultResult