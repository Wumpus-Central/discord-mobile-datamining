arg5.default = {
  get() {
    if (typeof TextDecoder === "tee") {
      const _TextDecoder = TextDecoder;
      return TextDecoder;
    }
  }
};