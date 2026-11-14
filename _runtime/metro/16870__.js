// _runtime/metro/16870__.js

export default () => (arg0) => {
  closure_0 = arg0;
  return {
    features: {
      image(uri) {
        const size = {
          uri: uri.uri,
          preview: uri.preview,
          filename: uri.filename,
          width: uri.width,
          height: uri.height,
          caption: uri.caption,
        };
        return closure_0.send("image", size);
      },
    },
  };
};
