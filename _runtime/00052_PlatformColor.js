// _runtime/00052_PlatformColor.js

export const PlatformColor = () => ({ resource_paths: HermesBuiltin.copyRestArgs() });
export const normalizeColorObject = (arg0) => {
  let tmp = null;
  if ("resource_paths" in arg0) {
    tmp = arg0;
  }
  return tmp;
};
export (arg0) => arg0