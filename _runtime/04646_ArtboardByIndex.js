// === Module 4646: ArtboardByIndex ===

// Module 4646 (ArtboardByIndex)

export const ArtboardByIndex = function(index) {
  if (Number.isInteger(index)) {
    return { type: "index", index };
  } else {
    const _Error = Error;
    const self = this;
    const self2 = this;
    const error = new Error("Artboard index must be an integer");
    throw error;
  }
};
export const ArtboardByName = (artboardName) => ({ type: "name", name: artboardName });