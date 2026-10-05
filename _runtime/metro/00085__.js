// === Module 85: ? ===

// Module 85
import _mod38 from "module_38" /* 38 */;
import _createClassDefault from "_createClass" /* 42 */;
import pickScale2 from "pickScale" /* 86 */;
import _mod87 from "module_87" /* 87 */;
import _mod102 from "module_102" /* 102 */;
import _classCallCheck from "_classCallCheck" /* 41 */;

let size;

class AssetSourceResolver {
  constructor(serverUrl, jsbundleUrl, asset) {
    _classCallCheck(this, AssetSourceResolver);
    this.serverUrl = serverUrl;
    this.jsbundleUrl = jsbundleUrl;
    this.asset = asset;
  }
}
const entry = {
  key: "isLoadedFromServer",
  value: function isLoadedFromServer() {
    const self = this;
    return null != this.serverUrl && "" !== self.serverUrl && "xml" !== self.asset.type;
  }
};
const items = [
  entry,
  {
    key: "isLoadedFromFileSystem",
    value: function isLoadedFromFileSystem() {
      let tmp = null != this.jsbundleUrl;
      if (tmp) {
        const jsbundleUrl = this.jsbundleUrl;
        let startsWithResult;
        if (jsbundleUrl != null) {
          startsWithResult = jsbundleUrl.startsWith("file://");
        }
        tmp = startsWithResult;
      }
      return tmp;
    }
  },
  {
    key: "defaultAsset",
    value: function defaultAsset() {
      let assetServerURLResult;
      const self = this;
      if (this.isLoadedFromServer()) {
        assetServerURLResult = self.assetServerURL();
      } else if (null != self.asset.resolver) {
        assetServerURLResult = self.getAssetUsingResolver(self.asset.resolver);
      } else if (self.isLoadedFromFileSystem()) {
        assetServerURLResult = self.drawableFolderInBundle();
      } else {
        assetServerURLResult = self.resourceIdentifierWithoutScale();
      }
      return assetServerURLResult;
    }
  },
  {
    key: "getAssetUsingResolver",
    value: function getAssetUsingResolver(resolver) {
      const self = this;
      if ("android" === resolver) {
        let result;
        if (self.isLoadedFromFileSystem()) {
          result = self.drawableFolderInBundle();
        } else {
          result = self.resourceIdentifierWithoutScale();
        }
        return result;
      } else if ("generic" === resolver) {
        return self.scaledAssetURLNearBundle();
      } else {
        const _Error = Error;
        const _JSON = JSON;
        const text = `Don't know how to get asset via provided resolver: ${resolver}`;
        const _JSON2 = JSON;
        const text1 = `${`Don't know how to get asset via provided resolver: ${resolver}`}
      Asset: ${JSON.stringify(self.asset, null, "\t")}`;
        const self2 = this;
        const self3 = this;
        const error = new Error(text1 + "\nPossible resolvers are:" + JSON.stringify(["android", "generic"], null, "\t"));
        throw error;
      }
    }
  },
  {
    key: "assetServerURL",
    value: function assetServerURL() {
      let asset;
      let fromSource;
      let serverUrl;
      const self = this;
      _mod38(null != this.serverUrl, "need server to load from");
      ({ asset, fromSource, serverUrl } = this);
      const pickScale = pickScale2.pickScale;
      const scales = asset.scales;
      pickScale2;
      let str = "";
      const _default = _mod87.default;
      const pickScaleResult = pickScale(scales, _default.get());
      if (1 !== pickScaleResult) {
        str = `${"@" + tmp5}x`;
      }
      const tmpResult = _mod102;
      return fromSource(serverUrl + (tmpResult.getBasePath(asset) + "/" + asset.name + str + "." + asset.type) + "?platform=android&hash=" + self.asset.hash);
    }
  },
  {
    key: "scaledAssetPath",
    value: function scaledAssetPath() {
      const asset = this.asset;
      const fromSource = this.fromSource;
      const pickScale = pickScale2.pickScale;
      const scales = asset.scales;
      pickScale2;
      let str = "";
      const _default = _mod87.default;
      const pickScaleResult = pickScale(scales, _default.get());
      if (1 !== pickScaleResult) {
        str = `${"@" + tmp4}x`;
      }
      const tmpResult = _mod102;
      return fromSource(tmpResult.getBasePath(asset) + "/" + asset.name + str + "." + asset.type);
    }
  },
  {
    key: "scaledAssetURLNearBundle",
    value: function scaledAssetURLNearBundle() {
      const self = this;
      let str = this.jsbundleUrl;
      if (str == null) {
        str = "file://";
      }
      const asset = self.asset;
      const fromSource = self.fromSource;
      const pickScale = pickScale2.pickScale;
      const scales = asset.scales;
      pickScale2;
      let str2 = "";
      const _default = _mod87.default;
      const pickScaleResult = pickScale(scales, _default.get());
      if (1 !== pickScaleResult) {
        str2 = `${"@" + tmp4}x`;
      }
      _mod102;
      const str5 = `${obj.getBasePath(asset)}/${asset.name}` + str2 + "." + asset.type;
      return fromSource(str + str5.replace(/\.\.\//g, "_"));
    }
  },
  {
    key: "resourceIdentifierWithoutScale",
    value: function resourceIdentifierWithoutScale() {
      _mod38(true, "resource identifiers work on Android");
      const fromSource = this.fromSource;
      const obj = _mod102;
      return fromSource(obj.getAndroidResourceIdentifier(this.asset));
    }
  },
  {
    key: "drawableFolderInBundle",
    value: function drawableFolderInBundle() {
      const self = this;
      let str = this.jsbundleUrl;
      if (str == null) {
        str = "file://";
      }
      const asset = self.asset;
      const fromSource = self.fromSource;
      const pickScale = pickScale2.pickScale;
      const scales = asset.scales;
      pickScale2;
      const _default = _mod87.default;
      pickScale(scales, _default.get());
      const obj = _mod102;
      const text = `${obj.getAndroidResourceFolderName(asset, tmp2)}/`;
      const obj2 = _mod102;
      return fromSource(str + (`${obj.getAndroidResourceFolderName(asset, tmp2)}/` + obj2.getAndroidResourceIdentifier(asset) + "." + asset.type));
    }
  },
  {
    key: "fromSource",
    value: function fromSource(uri) {
      let _default;
      let pickScale;
      let scales;
      size = { __packager_asset: true, width: this.asset.width, height: this.asset.height, uri, scale: pickScale(scales, _default.get()) };
      pickScale = pickScale2.pickScale;
      scales = this.asset.scales;
      pickScale2;
      _default = _mod87.default;
      return size;
    }
  }
];
const tmp2 = _createClassDefault(AssetSourceResolver, items);
tmp2.pickScale = pickScale2.pickScale;

export default tmp2;