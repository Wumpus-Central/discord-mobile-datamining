// _runtime/00052_PlatformColor.js

export () => ({ resource_paths: HermesBuiltin.copyRestArgs() })
export (tintColor) => {
  let tmp = null;
  if ("resource_paths" in tintColor) {
    tmp = tintColor;
  }
  return tmp;
}
export (defaultResult) => defaultResult