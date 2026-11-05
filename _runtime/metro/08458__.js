// === Module 8458: ? ===

// Module 8458

export default {
  get() {
    if (typeof TextDecoder !== "undefined") {
      const _TextDecoder = TextDecoder;
      return TextDecoder;
    }
  }
};