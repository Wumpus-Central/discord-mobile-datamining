// _runtime/metro/07344__.js
class MetadataMissingError {
  constructor(arg0) {
    const str = arg0 || "No Exif data";
    const error = new Error();
  }
}
let error = new Error();
MetadataMissingError.prototype = error;

export default { MetadataMissingError };
