// === Module 5126: ArtboardByIndex ===

// Module 5126 (ArtboardByIndex)

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