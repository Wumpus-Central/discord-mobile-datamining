// === Module 13852: ? ===

// Module 13852
arg5.default = () => (arg0) => {
  closure_0 = arg0;
  const features = {
    image(uri) {
      return closure_0.send("image", { uri: uri.uri, preview: uri.preview, filename: uri.filename, width: uri.width, height: uri.height, caption: uri.caption });
    }
  };
  return { features };
};