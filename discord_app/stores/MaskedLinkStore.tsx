// === Module 8642: MaskedLinkStore ===

// Module 8642 (MaskedLinkStore)
import initializeDefault from "initialize" /* 504 */;
import Storage2 from "Storage" /* 510 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import URLUtilsDefault from "URLUtils" /* 1366 */;
import SpotifyConstants from "SpotifyConstants" /* 8610 */;
import MaskedLinkStoreMethodsAdditional from "MaskedLinkStoreMethodsAdditional" /* 8643 */;
import size from "module_2" /* 2 */;

const SPOTIFY_HOSTNAMES = SpotifyConstants.SPOTIFY_HOSTNAMES;
const MaskedLinkStore = "MaskedLinkStore";
let set = new Set();
let replaced;
if (window.GLOBAL_ENV.MEDIA_PROXY_ENDPOINT != null) {
  replaced = str.replace("//", "");
}
const Store = initializeDefault.Store;
class MaskedLinkStore extends Store {
}
const prototype = MaskedLinkStore.prototype;
prototype["initialize"] = function initialize() {
  const Storage = Storage2.Storage;
  let obj = Storage.get(MaskedLinkStore);
  if (obj == null) {
    obj = {};
  }
  if (Array.isArray(obj)) {
    let arr = null;
    if (null != obj) {
      const _Array3 = Array;
      arr = Array.from(obj);
    }
    const set = new Set(arr);
    set2 = set;
    const _Set = Set;
    const set1 = new Set();
    set3 = set1;
  } else {
    ({ trustedDomains, trustedProtocols } = obj);
    let arr3 = null;
    if (null != trustedDomains) {
      const _Array = Array;
      arr3 = Array.from(trustedDomains);
    }
    set2 = new Set(arr3);
    let arr4 = null;
    if (null != trustedProtocols) {
      const _Array2 = Array;
      arr4 = Array.from(trustedProtocols);
    }
    set3 = new Set(arr4);
  }
};
prototype["isTrustedDomain"] = function isTrustedDomain(url) {
  const hostname = MaskedLinkStoreMethodsAdditional.getHostname(url);
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
              hasItem = URLUtilsDefault.isDiscordHostname(hostname);
            }
            if (!hasItem) {
              hasItem = set2.has(hostname);
            }
            flag = hasItem;
          }
        }
      }
    }
  }
  return flag;
};
prototype["isTrustedProtocol"] = function isTrustedProtocol(url) {
  return set3.has(MaskedLinkStoreMethodsAdditional.getProtocol(url));
};
MaskedLinkStore.displayName = "MaskedLinkStore";
const maskedLinkStore = new MaskedLinkStore(DispatcherDefault, {
  MASKED_LINK_ADD_TRUSTED_DOMAIN: function handleAddTrustedDomain(url) {
    url = url.url;
    const hostname = MaskedLinkStoreMethodsAdditional.getHostname(url);
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
                hasItem = URLUtilsDefault.isDiscordHostname(hostname);
              }
              if (!hasItem) {
                hasItem = set2.has(hostname);
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
      set2.add(MaskedLinkStoreMethodsAdditional.getHostname(url));
      const Storage = Storage2.Storage;
      const obj3 = { trustedDomains: set2, trustedProtocols: set3 };
      const result = Storage.set(MaskedLinkStore, obj3);
      const tmpResult = MaskedLinkStoreMethodsAdditional;
    }
  },
  MASKED_LINK_ADD_TRUSTED_PROTOCOL: function handleAddTrustedProtocol(url) {
    url = url.url;
    if (set3.has(obj.getProtocol(url))) {
      return false;
    } else {
      set3.add(MaskedLinkStoreMethodsAdditional.getProtocol(url));
      const Storage = Storage2.Storage;
      const obj2 = { trustedDomains: set2, trustedProtocols: set3 };
      const result = Storage.set(MaskedLinkStore, obj2);
      const tmpResult = MaskedLinkStoreMethodsAdditional;
    }
    obj = MaskedLinkStoreMethodsAdditional;
  }
});
let result = size.fileFinishedImporting("stores/MaskedLinkStore.tsx");

export default maskedLinkStore;