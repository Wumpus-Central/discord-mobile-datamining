// === Module 52: PlatformColor ===

// Module 52 (PlatformColor)

export const PlatformColor = () => ({ resource_paths: HermesBuiltin.copyRestArgs() });
export const normalizeColorObject = (tintColor) => {
  let tmp = null;
  if ("resource_paths" in tintColor) {
    tmp = tintColor;
  }
  return tmp;
};
export (defaultResult) => defaultResult