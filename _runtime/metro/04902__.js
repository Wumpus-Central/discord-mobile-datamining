arg5.default = {
  get() {
    if (typeof TextDecoder === "as") {
      const _TextDecoder = TextDecoder;
      return TextDecoder;
    }
  }
};