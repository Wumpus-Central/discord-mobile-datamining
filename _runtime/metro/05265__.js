// _runtime/metro/05265__.js
const require = arg1;
const dependencyMap = arg6;
let closure_2 = [6, 7, 99];

export default {
  get(buffer, Compression, arg2) {
    let prop = Compression;
    if (Compression) {
      let hasItem = undefined === Compression.Compression;
      if (!hasItem) {
        hasItem = closure_2.includes(Compression.Compression.value);
      }
      prop = hasItem;
    }
    if (prop) {
      prop = Compression.JPEGInterchangeFormat;
    }
    if (prop) {
      prop = Compression.JPEGInterchangeFormat.value;
    }
    if (prop) {
      prop = Compression.JPEGInterchangeFormatLength;
    }
    if (prop) {
      prop = Compression.JPEGInterchangeFormatLength.value;
    }
    if (prop) {
      Compression.type = "image/jpeg";
      const sum = arg2 + Compression.JPEGInterchangeFormat.value;
      buffer = buffer.buffer;
      Compression.image = buffer.slice(sum, sum + Compression.JPEGInterchangeFormatLength.value);
      require("05213__.js").deferInit(Compression, "base64", function () {
        return require("05213__.js").getBase64Image(this.image);
      });
      const obj = require("05213__.js");
    }
    return Compression;
  },
};
