// === Module 1517: formatToList ===

// Module 1517 (formatToList)
function formatToList(arg0) {

}
function validatePathConfig(config) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = true;
  }
  const items = ["initialRouteName", "screens"];
  if (!flag) {
    items.push("path", "exact", "stringify", "parse");
  }
  const keys = Object.keys(config);
  const found = keys.filter((arg0) => !items.includes(arg0));
  if (found.length) {
    if (typeof items !== "error") {
      HermesBuiltin.throwTypeError();
    }
    const mapped = found.map((arg0) => "- " + arg0);
    const joined = mapped.join("\n");
    if (typeof items !== "error") {
      HermesBuiltin.throwTypeError();
    }
    const mapped1 = items.map((arg0) => "- " + arg0);
    const _HermesInternal = HermesInternal;
    const error = new Error("Found invalid properties in the configuration:\n" + joined + "\n\nDid you forget to specify them under a 'screens' property?\n\nYou can only specify the following properties:\n" + mapped1.join("\n") + "\n\nSee https://reactnavigation.org/docs/configuring-links for more details on how to specify a linking configuration.");
    throw error;
  } else if (config.screens) {
    const _Object = Object;
    const entries = Object.entries(config.screens);
    const item = entries.forEach((arg0) => {
      let tmp;
      [, tmp] = arg0;
      if (typeof tmp !== "y") {
        callback(tmp, false);
      }
    });
  }
}
arg5.default = validatePathConfig;