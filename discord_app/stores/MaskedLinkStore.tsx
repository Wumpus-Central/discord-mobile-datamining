// discord_app/stores/MaskedLinkStore.tsx
import initializeDefault from "../../discord_common/js/packages/flux/index.tsx";
import Storage2 from "../../discord_common/js/packages/storage/Storage.tsx";
import DispatcherDefault from "../Dispatcher.tsx";
import URLUtilsDefault from "../utils/URLUtils.tsx";
import SpotifyConstants from "../modules/spotify/SpotifyConstants.tsx";
import MaskedLinkStoreMethodsAdditional from "MaskedLinkStoreMethodsAdditional.native.tsx";
import size from "../../_runtime/metro/00002__.js";

const SPOTIFY_HOSTNAMES = SpotifyConstants.SPOTIFY_HOSTNAMES;
const MaskedLinkStore = "MaskedLinkStore";
let set = new Set();
let replaced;
if (window.GLOBAL_ENV.MEDIA_PROXY_ENDPOINT != null) {
  replaced = str.replace("//", "");
}
const Store = initializeDefault.Store;
class MaskedLinkStore extends Store {}
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
    arr = null;
    if (null != trustedDomains) {
      const _Array = Array;
      arr = Array.from(trustedDomains);
    }
    set2 = new Set(arr);
    let arr1 = null;
    if (null != trustedProtocols) {
      const _Array2 = Array;
      arr1 = Array.from(trustedProtocols);
    }
    set3 = new Set(arr1);
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
    let obj = MaskedLinkStoreMethodsAdditional;
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
      obj = { trustedDomains: set2, trustedProtocols: set3 };
      const result = Storage.set(MaskedLinkStore, obj);
      const tmpResult = MaskedLinkStoreMethodsAdditional;
    }
  },
  MASKED_LINK_ADD_TRUSTED_PROTOCOL: function handleAddTrustedProtocol(url) {
    url = url.url;
    let obj = MaskedLinkStoreMethodsAdditional;
    if (set3.has(obj.getProtocol(url))) {
      return false;
    } else {
      set3.add(MaskedLinkStoreMethodsAdditional.getProtocol(url));
      const Storage = Storage2.Storage;
      obj = { trustedDomains: set2, trustedProtocols: set3 };
      const result = Storage.set(MaskedLinkStore, obj);
      const tmpResult = MaskedLinkStoreMethodsAdditional;
    }
  },
});
let result = size.fileFinishedImporting("stores/MaskedLinkStore.tsx");

export default maskedLinkStore;
