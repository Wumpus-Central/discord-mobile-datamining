// _runtime/00052_PlatformColor.js

export const PlatformColor = () => {
  const obj = { resource_paths: HermesBuiltin.copyRestArgs() };
  return obj;
};
export const normalizeColorObject = (tintColor) => {
  let tmp = null;
  if ("resource_paths" in tintColor) {
    tmp = tintColor;
  }
  return tmp;
};
export const processColorObject = (defaultResult) => defaultResult;
