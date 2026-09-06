// === Module 14418: ? ===

// Module 14418

export default () => (arg0) => {
  closure_0 = arg0;
  return {
    features: {
      image(dependencyMap) {
        const size = { uri: dependencyMap.uri, preview: dependencyMap.preview, filename: dependencyMap.filename, width: dependencyMap.width, height: dependencyMap.height, caption: dependencyMap.caption };
        return closure_0.send("image", size);
      }
    }
  };
};