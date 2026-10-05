// === Module 52: PlatformColor ===

// Module 52 (PlatformColor)

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