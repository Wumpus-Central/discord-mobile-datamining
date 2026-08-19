// === Module 13794: ? ===

// Module 13794
arg5.default = () => (arg0) => {
  closure_0 = arg0;
  const features = {
    image(upload) {
      return closure_0.send("image", { uri: upload.uri, preview: upload.preview, filename: upload.filename, width: upload.width, height: upload.height, caption: upload.caption });
    }
  };
  return { features };
};