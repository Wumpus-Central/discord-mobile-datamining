// === Module 102: set ===

// Module 102 (set)
let closure_0 = { "0.75": "ldpi", 1: "mdpi", "1.5": "hdpi", 2: "xhdpi", 3: "xxhdpi", 4: "xxxhdpi" };
const set = new Set(["gif", "heic", "heif", "jpeg", "jpg", "ktx", "png", "webp", "xml"]);

export default {
  getAndroidResourceFolderName(asset, arg1) {
    if (set.has(asset.type)) {
      if (arg1.toString() in closure_0) {
        let text = tmp2[arg1.toString(arg1)];
      } else {
        const _Number = Number;
        if (Number.isFinite(arg1)) {
          if (arg1 > 0) {
            const _Math = Math;
            text = `${Math.round(160 * arg1)}dpi`;
          }
        }
        const _Error = Error;
        error = new Error("no such scale " + arg1.toString());
        throw error;
      }
      if (text) {
        return "drawable-" + text;
      } else {
        const _Error2 = Error;
        const _JSON = JSON;
        const text1 = `Don't know which android drawable suffix to use for scale: ${arg1}`;
        const _JSON2 = JSON;
        const text2 = `${`Don't know which android drawable suffix to use for scale: ${arg1}`}
    Asset: ${JSON.stringify(asset, null, "\t")}`;
        const error1 = new Error(text2 + "\nPossible scales are:" + JSON.stringify(tmp2, null, "\t"));
        throw error1;
      }
    } else {
      return "raw";
    }
  },
  getAndroidResourceIdentifier(asset) {
    const httpServerLocation = asset.httpServerLocation;
    let substr = httpServerLocation;
    if (httpServerLocation.startsWith("/")) {
      substr = httpServerLocation.slice(1);
    }
    const str = `${tmp}/${asset.name}`;
    const str2 = `${tmp}/${asset.name}`.toLowerCase();
    const str3 = `${tmp}/${asset.name}`.toLowerCase().replace(/\//g, "_");
    return `${tmp}/${asset.name}`.toLowerCase().replace(/\//g, "_").replace(/([^a-z0-9_])/g, "").replace(/^(?:assets|assetsunstable_path)_/, "");
  },
  getBasePath(asset) {
    const httpServerLocation = asset.httpServerLocation;
    let substr = httpServerLocation;
    if (httpServerLocation.startsWith("/")) {
      substr = httpServerLocation.slice(1);
    }
    return substr;
  }
};