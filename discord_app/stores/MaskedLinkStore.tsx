// === Module 8059: MaskedLinkStore ===

// Module 8059 (MaskedLinkStore)
import get_initializedDefault from "get initialized" /* 504 */;
import Storage2 from "Storage" /* 510 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import URLUtilsDefault from "URLUtils" /* 1371 */;
import SpotifyConstants from "SpotifyConstants" /* 8026 */;
import MaskedLinkStoreMethodsAdditional from "MaskedLinkStoreMethodsAdditional" /* 8060 */;
import size from "module_2" /* 2 */;

const SPOTIFY_HOSTNAMES = SpotifyConstants.SPOTIFY_HOSTNAMES;
const MaskedLinkStore_str = "MaskedLinkStore";
let set = new Set();
let _Set1 = set;
let _Set21 = new Set();
let replaced;
new Set();
if (window.GLOBAL_ENV.MEDIA_PROXY_ENDPOINT != null) {
  replaced = str.replace("//", "");
}
const Store = get_initializedDefault.Store;
class MaskedLinkStore extends Store {
  initialize() {
    let trustedDomains;
    let trustedProtocols;
    const Storage = Storage2.Storage;
    let obj = Storage.get(MaskedLinkStore_str);
    if (obj == null) {
      obj = {};
    }
    if (Array.isArray(obj)) {
      let arr = null;
      const _Set3 = Set;
      if (null != obj) {
        const _Array3 = Array;
        arr = Array.from(obj);
      }
      const self5 = this;
      const self6 = this;
      const _Set31 = new _Set3(arr);
      _Set1 = _Set31;
      const _Set4 = Set;
      const self7 = this;
      const self8 = this;
      _Set21 = new Set();
      set = new Set();
    } else {
      ({ trustedDomains, trustedProtocols } = obj);
      let arr3 = null;
      const _Set = Set;
      if (null != trustedDomains) {
        const _Array = Array;
        arr3 = Array.from(trustedDomains);
      }
      const self = this;
      const self2 = this;
      _Set1 = new _Set(arr3);
      let arr4 = null;
      const _Set2 = Set;
      if (null != trustedProtocols) {
        const _Array2 = Array;
        arr4 = Array.from(trustedProtocols);
      }
      const self3 = this;
      const self4 = this;
      _Set21 = new _Set2(arr4);
    }
  }
  isTrustedDomain(url) {
    const obj = MaskedLinkStoreMethodsAdditional;
    const hostname = obj.getHostname(url);
    let flag = true;
    if (window.GLOBAL_ENV.INVITE_HOST !== hostname) {
      const _window2 = window;
      flag = true;
      if (window.GLOBAL_ENV.GIFT_CODE_HOST !== hostname) {
        const _window = window;
        flag = true;
        if (window.GLOBAL_ENV.GUILD_TEMPLATE_HOST !== hostname) {
          flag = true;
          if (replaced !== hostname) {
            const _location = location;
            flag = true;
            if (location.hostname !== hostname) {
              let hasItem = SPOTIFY_HOSTNAMES.includes(hostname);
              if (!hasItem) {
                const obj2 = URLUtilsDefault;
                hasItem = obj2.isDiscordHostname(hostname);
              }
              if (!hasItem) {
                hasItem = _Set1.has(hostname);
              }
              flag = hasItem;
            }
          }
        }
      }
    }
    return flag;
  }
  isTrustedProtocol(url) {
    const obj = MaskedLinkStoreMethodsAdditional;
    return _Set21.has(obj.getProtocol(url));
  }
}
const prototype = MaskedLinkStore.prototype;
MaskedLinkStore.displayName = "MaskedLinkStore";
let obj = {
  MASKED_LINK_ADD_TRUSTED_DOMAIN: function handleAddTrustedDomain(url) {
    url = url.url;
    const obj = MaskedLinkStoreMethodsAdditional;
    const hostname = obj.getHostname(url);
    let flag = true;
    if (window.GLOBAL_ENV.INVITE_HOST !== hostname) {
      const _window2 = window;
      flag = true;
      if (window.GLOBAL_ENV.GIFT_CODE_HOST !== hostname) {
        const _window = window;
        flag = true;
        if (window.GLOBAL_ENV.GUILD_TEMPLATE_HOST !== hostname) {
          flag = true;
          if (replaced !== hostname) {
            const _location = location;
            flag = true;
            if (location.hostname !== hostname) {
              let hasItem = SPOTIFY_HOSTNAMES.includes(hostname);
              if (!hasItem) {
                const obj2 = URLUtilsDefault;
                hasItem = obj2.isDiscordHostname(hostname);
              }
              if (!hasItem) {
                hasItem = _Set1.has(hostname);
              }
              flag = hasItem;
            }
          }
        }
      }
    }
    if (flag) {
      return false;
    } else {
      const add = _Set1.add;
      const tmpResult = MaskedLinkStoreMethodsAdditional;
      add(tmpResult.getHostname(url));
      const Storage = Storage2.Storage;
      const obj3 = { trustedDomains: _Set1, trustedProtocols: _Set21 };
      const result = Storage.set(MaskedLinkStore_str, obj3);
    }
  },
  MASKED_LINK_ADD_TRUSTED_PROTOCOL: function handleAddTrustedProtocol(url) {
    url = url.url;
    const obj = MaskedLinkStoreMethodsAdditional;
    if (_Set21.has(obj.getProtocol(url))) {
      return false;
    } else {
      const add = _Set21.add;
      const tmpResult = MaskedLinkStoreMethodsAdditional;
      add(tmpResult.getProtocol(url));
      const Storage = Storage2.Storage;
      const obj2 = { trustedDomains: _Set1, trustedProtocols: _Set21 };
      const result = Storage.set(MaskedLinkStore_str, obj2);
    }
  }
};
const maskedLinkStore = new MaskedLinkStore(DispatcherDefault, obj);
let result = size.fileFinishedImporting("stores/MaskedLinkStore.tsx");

export default maskedLinkStore;