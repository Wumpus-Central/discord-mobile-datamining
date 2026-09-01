// _runtime/04247_ArtboardByIndex.js
arg5.ArtboardByIndex = (arg0) => {
  if (Number.isInteger(arg0)) {
    const obj = { type: "index", index: null };
    obj[1] = arg0;
    return obj;
  } else {
    const _Error = Error;
    error = new Error("Artboard index must be an integer");
    throw error;
  }
};
arg5.ArtboardByName = (name) => ({ type: "name", name });
