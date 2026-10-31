// _runtime/05126_ArtboardByIndex.js

export (index) => {
  if (Number.isInteger(index)) {
    const obj = { type: "index", index };
    return obj;
  } else {
    const _Error = Error;
    const error = new Error("Artboard index must be an integer");
    throw error;
  }
}
export (artboardName) => ({ type: "name", name: artboardName })