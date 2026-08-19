// discord_app/stores/MaskedLinkStore.tsx
import obj132 from "../../_runtime/00002_obj132.js";
import initializeDefault from "../../discord_common/js/packages/flux/index.tsx";
import Storage2 from "../../discord_common/js/packages/storage/Storage.tsx";
import dispatcherDefault from "../Dispatcher.tsx";
import isDiscordProxiedAssetUrlDefault from "../utils/URLUtils.tsx";
import SPOTIFY_APP_PROTOCOL from "../modules/spotify/SpotifyConstants.tsx";
import getHostname from "MaskedLinkStoreMethodsAdditional.native.tsx";

const SPOTIFY_HOSTNAMES = SPOTIFY_APP_PROTOCOL.SPOTIFY_HOSTNAMES;
const MaskedLinkStore = "MaskedLinkStore";
let set = new Set();
let set1 = new Set();
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
    set = new Set(arr);
    let set2 = set;
    const _Set = Set;
    set1 = new Set();
    let set3 = set1;
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
prototype["isTrustedDomain"] = function isTrustedDomain(arg0) {
  const hostname = getHostname.getHostname(arg0);
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
              hasItem = isDiscordProxiedAssetUrlDefault.isDiscordHostname(hostname);
            }
            if (!hasItem) {
              hasItem = set.has(hostname);
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
  return set1.has(getHostname.getProtocol(url));
};
MaskedLinkStore.displayName = "MaskedLinkStore";
const maskedLinkStore = new MaskedLinkStore(dispatcherDefault, {
  MASKED_LINK_ADD_TRUSTED_DOMAIN: function handleAddTrustedDomain(url) {
    url = url.url;
    let obj = getHostname;
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
                hasItem = isDiscordProxiedAssetUrlDefault.isDiscordHostname(hostname);
              }
              if (!hasItem) {
                hasItem = set.has(hostname);
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
      set.add(getHostname.getHostname(url));
      const Storage = Storage2.Storage;
      obj = { trustedDomains: null, trustedProtocols: null };
      obj[0] = set;
      obj[1] = set1;
      const result = Storage.set(MaskedLinkStore, obj);
      const tmpResult = getHostname;
    }
  },
  MASKED_LINK_ADD_TRUSTED_PROTOCOL: function handleAddTrustedProtocol(url) {
    url = url.url;
    let obj = getHostname;
    if (set1.has(obj.getProtocol(url))) {
      return false;
    } else {
      set1.add(getHostname.getProtocol(url));
      const Storage = Storage2.Storage;
      obj = { trustedDomains: null, trustedProtocols: null };
      obj[0] = set;
      obj[1] = set1;
      const result = Storage.set(MaskedLinkStore, obj);
      const tmpResult = getHostname;
    }
  }
});
let result = obj132.fileFinishedImporting("stores/MaskedLinkStore.tsx");

export default maskedLinkStore;