// _runtime/00085_AssetSourceResolver.js
import _createClassDefault from "metro/00042__createClass.js";
import closure_2 from "metro/00041__classCallCheck.js";

const AssetSourceResolver = arg1;
class AssetSourceResolver {
  constructor(arg0, arg1, arg2) {
    tmp = closure_2(this, AssetSourceResolver);
    this.serverUrl = global;
    this.jsbundleUrl = arg1;
    this.asset = importDefault;
    return;
  }
}
const items = [
  {
    key: "isLoadedFromServer",
    value: function isLoadedFromServer() {
      const self = this;
      let tmp = null != this.serverUrl;
      if (tmp) {
        tmp = "" !== self.serverUrl;
      }
      if (tmp) {
        tmp = "xml" !== self.asset.type;
      }
      return tmp;
    }
  },
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
      const self = this;
      if (this.isLoadedFromServer()) {
        let assetServerURLResult = self.assetServerURL();
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
        if (self.isLoadedFromFileSystem()) {
          let result = self.drawableFolderInBundle();
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
        error = new Error(text1 + "\nPossible resolvers are:" + JSON.stringify(["android", "generic"], null, "\t"));
        throw error;
      }
    }
  },
  {
    key: "assetServerURL",
    value: function assetServerURL() {
      const self = this;
      AssetSourceResolver(38)(null != this.serverUrl, "need server to load from");
      ({ asset, fromSource, serverUrl } = this);
      const obj = AssetSourceResolver(86);
      const tmp = AssetSourceResolver;
      const _default = AssetSourceResolver(87).default;
      let str = "";
      if (1 !== pickScaleResult) {
        str = `${"@" + tmp4}x`;
      }
      pickScaleResult = obj.pickScale(asset.scales, AssetSourceResolver(87).default.get());
      return fromSource(serverUrl + (tmp(102).getBasePath(asset) + "/" + asset.name + str + "." + asset.type) + "?platform=android&hash=" + self.asset.hash);
    }
  },
  {
    key: "scaledAssetPath",
    value: function scaledAssetPath() {
      const asset = this.asset;
      const obj = AssetSourceResolver(86);
      const tmp = AssetSourceResolver;
      const _default = AssetSourceResolver(87).default;
      let str = "";
      if (1 !== pickScaleResult) {
        str = `${"@" + tmp3}x`;
      }
      pickScaleResult = obj.pickScale(asset.scales, AssetSourceResolver(87).default.get());
      return this.fromSource(tmp(102).getBasePath(asset) + "/" + asset.name + str + "." + asset.type);
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
      const obj = AssetSourceResolver(86);
      const tmp = AssetSourceResolver;
      const _default = AssetSourceResolver(87).default;
      let str2 = "";
      if (1 !== pickScaleResult) {
        str2 = `${"@" + tmp3}x`;
      }
      tmp(102);
      pickScaleResult = obj.pickScale(asset.scales, AssetSourceResolver(87).default.get());
      return self.fromSource(str + `${obj2.getBasePath(asset)}/${asset.name}` + str2 + "." + asset.type.replace(/\.\.\//g, "_"));
    }
  },
  {
    key: "resourceIdentifierWithoutScale",
    value: function resourceIdentifierWithoutScale() {
      AssetSourceResolver(38)(true, "resource identifiers work on Android");
      return this.fromSource(AssetSourceResolver(102).getAndroidResourceIdentifier(this.asset));
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
      const obj = AssetSourceResolver(86);
      obj.pickScale(asset.scales, AssetSourceResolver(87).default.get());
      const obj2 = AssetSourceResolver(102);
      const text = `${obj2.getAndroidResourceFolderName(asset, tmp)}/`;
      const _default = AssetSourceResolver(87).default;
      return self.fromSource(str + (`${obj2.getAndroidResourceFolderName(asset, tmp)}/` + AssetSourceResolver(102).getAndroidResourceIdentifier(asset) + "." + asset.type));
    }
  },
  {
    key: "fromSource",
    value: function fromSource(uri) {
      const obj = { __packager_asset: true, width: this.asset.width, height: this.asset.height, uri, scale: null };
      const obj2 = AssetSourceResolver(86);
      obj[4] = obj2.pickScale(this.asset.scales, AssetSourceResolver(87).default.get());
      return obj;
    }
  }
];
const tmp2 = _createClassDefault(AssetSourceResolver, items);
tmp2.pickScale = require("pickScale").pickScale;

export default tmp2;