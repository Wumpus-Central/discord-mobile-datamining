// === Module 5433: EmbedUtils ===

// Module 5433 (EmbedUtils)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import _modDef12 from "module_12" /* 12 */;
import utils_ColorUtils from "utils/ColorUtils" /* 1103 */;
import FlagUtils from "FlagUtils" /* 1390 */;
import _modDef4467 from "module_4467" /* 4467 */;
import InteractionComponentUtils from "InteractionComponentUtils" /* 5120 */;
import EmbedConstants from "EmbedConstants" /* 5434 */;
import Constants from "Constants" /* 1085 */;
import size_mod from "module_2" /* 2 */;

let map;

let c3;
let closure_4;
let hasOwnProperty;
function getEffectiveVideoProvider(name, url) {
  if ("YouTube" !== name) {
    if ("TikTok" !== name) {
      if (null != url) {
        try {
          const _URL = URL;
          const self = this;
          const self2 = this;
          const uRL = new URL(url);
          const hostname = uRL.hostname;
          if ("www.youtube.com" === hostname) {
            return "YouTube";
          } else if ("www.tiktok.com" === tmp7) {
            return "TikTok";
          }
        } catch (err) {
        }
      }
      return name;
    }
  }
  return name;
}
({ MessageEmbedMediaFlags: c3, MessageEmbedTypes: closure_4, Permissions: hasOwnProperty } = Constants);
const set = EmbedConstants.EMBED_TYPES_WITH_PARSEABLE_FIELDS;
const re7 = /sketchfab/i;
const re8 = /^https:\/\/sketchfab\.com/i;
const re9 = /youtube|steam|imgur|vimeo|sketchfab|soundcloud|streamable|twitch|vid\.me|twitter/i;
const re10 = /^https?:\/\/(?:canary\.|ptb\.|www\.)?discord(?:app)?\.com\/channels\/([0-9]+)\/shop$/;
const re11 = /^https?:\/\/(?:canary\.|ptb\.|www\.)?discord(?:app)?\.com\/channels\/([0-9]+)\/shop\/([0-9]+)$/;
const regExp = new RegExp("^https://(?:(?:canary\\.|ptb\\.)?discord(?:app)?.com|staging\\.discord\\.co)/shop");
const re13 = /^https?:\/\/(?:canary\.|ptb\.|www\.)?discord(?:app)?\.com\/channels\/([0-9]+)\/game-shop\/([0-9]+)\/([0-9]+)/;
const re14 = /^https?:\/\/(?:canary\.|ptb\.|www\.)?discord(?:app)?\.com\/game-shop\/([0-9]+)\/([0-9]+)/;
const re15 = /^https?:\/\/(?:canary\.|ptb\.|www\.)?discord(?:app)?\.com\/game-shop\/[0-9]+\/?\?(?=.*skuIds=)/;
const re16 = /^https?:\/\/(?:canary\.|ptb\.|www\.)?discord(?:app)?\.com\/shop\?(?=.*tab=game-shops)(?=.*applicationId=[0-9]+)(?=.*skuId=[0-9]+)/;
const re17 = /^https?:\/\/(?:canary\.|ptb\.|www\.)?discord(?:app)?\.com\/games\/[0-9]+(?:\/[A-Za-z0-9-]*)?\/?$/;
const re18 = /^https?:\/\/(?:canary\.|ptb\.|www\.)?discord(?:app)?\.com\/users\/[0-9]+\/?$/;
let size = size_mod;
let result = size.fileFinishedImporting("utils/EmbedUtils.tsx");

export const sanitizeEmbed = function sanitizeEmbed(channel_id, id, footer) {
  let content_type;
  let content_type2;
  let content_type3;
  let content_type4;
  let flags;
  let flags2;
  let flags3;
  let flags4;
  let hasFlag;
  let hasFlag2;
  let hasFlag3;
  let hasFlag4;
  let num;
  let num2;
  let num4;
  let num8;
  let obj2;
  let provider;
  let str;
  let video3;
  const obj = { id: obj2.uniqueId("embed_"), url: null, type: null, rawTitle: null, rawDescription: null, referenceId: null, flags: null, contentScanVersion: null };
  ({ url: obj.url, type: obj.type, title: obj.rawTitle, description: obj.rawDescription, reference_id: obj.referenceId, flags: obj.flags, content_scan_version: obj.contentScanVersion } = footer);
  obj2 = _modDef12;
  if (null != footer.footer) {
    const obj3 = { text: footer.footer.text, iconURL: footer.footer.icon_url, iconProxyURL: footer.footer.proxy_icon_url };
    obj.footer = obj3;
  }
  const tmp3 = null != footer.author && null != footer.author.name;
  if (tmp3) {
    const obj4 = { name: footer.author.name, url: footer.author.url, iconURL: footer.author.icon_url, iconProxyURL: footer.author.proxy_icon_url };
    obj.author = obj4;
  }
  const tmp4 = null != footer.provider && null != footer.provider.name;
  if (tmp4) {
    const obj5 = { name: footer.provider.name, url: footer.provider.url };
    obj.provider = obj5;
  }
  if (null != footer.timestamp) {
    const _Date = Date;
    const self = this;
    const self2 = this;
    const tmpResult = _modDef4467;
    const date = new Date(footer.timestamp);
    obj.timestamp = tmpResult(date);
  }
  if (null != footer.color) {
    const obj6 = utils_ColorUtils;
    obj.color = obj6.int2hsl(footer.color, false);
  }
  if (null != footer.thumbnail) {
    const thumbnail2 = footer.thumbnail;
    const tmp10 = thumbnail2.width > 0 && thumbnail2.height > 0;
    if (tmp10) {
      const type = obj.type;
      if (constants2.ARTICLE !== type) {
        if (constants2.IMAGE !== type) {
          const thumbnail3 = footer.thumbnail;
          ({ flags, content_type } = thumbnail3);
          size = { url: null, proxyURL: null, width: null, height: null, placeholder: null, placeholderVersion: null, description: null, srcIsAnimated: hasFlag4(num, constants.IS_ANIMATED), flags, contentType: content_type };
          ({ url: obj15.url, proxy_url: obj15.proxyURL, width: obj15.width, height: obj15.height, placeholder: obj15.placeholder, placeholder_version: obj15.placeholderVersion, description: obj15.description } = thumbnail3);
          num = flags;
          hasFlag4 = FlagUtils.hasFlag;
          FlagUtils;
          if (flags == null) {
            num = 0;
          }
          if (flags == null) {
            flags = 0;
          }
          obj.thumbnail = size;
        }
      }
      const thumbnail = footer.thumbnail;
      ({ flags: flags2, content_type: content_type2 } = thumbnail);
      const size1 = { url: null, proxyURL: null, width: null, height: null, placeholder: null, placeholderVersion: null, description: null, srcIsAnimated: hasFlag(num2, constants.IS_ANIMATED), flags: flags2, contentType: content_type2 };
      ({ url: obj7.url, proxy_url: obj7.proxyURL, width: obj7.width, height: obj7.height, placeholder: obj7.placeholder, placeholder_version: obj7.placeholderVersion, description: obj7.description } = thumbnail);
      num2 = flags2;
      hasFlag = FlagUtils.hasFlag;
      FlagUtils;
      if (flags2 == null) {
        num2 = 0;
      }
      if (flags2 == null) {
        flags2 = 0;
      }
      obj.image = size1;
    }
  }
  let tmp15 = null != footer.image;
  if (tmp15) {
    const image = footer.image;
    tmp15 = image.width > 0 && image.height > 0;
  }
  if (tmp15) {
    const image2 = footer.image;
    ({ flags: flags3, content_type: content_type3 } = image2);
    const size2 = { url: null, proxyURL: null, width: null, height: null, placeholder: null, placeholderVersion: null, description: null, srcIsAnimated: hasFlag2(num4, constants.IS_ANIMATED), flags: flags3, contentType: content_type3 };
    ({ url: obj8.url, proxy_url: obj8.proxyURL, width: obj8.width, height: obj8.height, placeholder: obj8.placeholder, placeholder_version: obj8.placeholderVersion, description: obj8.description } = image2);
    num4 = flags3;
    hasFlag2 = FlagUtils.hasFlag;
    FlagUtils;
    if (flags3 == null) {
      num4 = 0;
    }
    if (flags3 == null) {
      flags3 = 0;
    }
    obj.image = size2;
  }
  if (null != footer.video) {
    let tmp20 = null == obj.thumbnail && null != footer.video.proxy_url;
    if (tmp20) {
      const video = footer.video;
      tmp20 = video.width > 0 && video.height > 0;
    }
    if (tmp20) {
      const size3 = { width: footer.video.width, height: footer.video.height, url: str.toString() };
      const obj9 = { format: "webp" };
      const _URL = URL;
      const self3 = this;
      const self4 = this;
      str = new URL(footer.video.proxy_url);
      const _Object = Object;
      const keys = Object.keys(obj9);
      const item = keys.forEach((item) => {
        const searchParams = str.searchParams;
        const result = searchParams.set(item, obj9[item]);
      });
      obj.thumbnail = size3;
    }
    let tmp25 = null != obj.thumbnail;
    if (tmp25) {
      const video2 = footer.video;
      tmp25 = video2.width > 0 && video2.height > 0;
    }
    if (tmp25) {
      let flag2;
      ({ provider, video: video3 } = footer);
      if (null == provider) {
        flag2 = false;
        if (!re8.test(video3.url)) {
          let isMatch = null != video3.proxy_url;
          if (!isMatch) {
            const obj11 = /^https:/i;
            isMatch = obj11.test(video3.url);
          }
          let tmp31 = null != id;
          if (tmp31) {
            const tmpResult2 = SnowflakeUtilsDefault;
            tmp31 = tmpResult2.extractTimestamp(id) < 1492472454139;
          }
          let tmp32 = isMatch;
          if (tmp31) {
            const isMatch1 = isMatch && null != provider && re9.test(provider.name);
            tmp32 = isMatch1;
          }
          flag2 = tmp32;
        }
      } else {
        flag2 = false;
      }
      tmp25 = flag2;
    }
    if (tmp25) {
      const video4 = footer.video;
      ({ flags: flags4, content_type: content_type4 } = video4);
      const size4 = { url: null, proxyURL: null, width: null, height: null, placeholder: null, placeholderVersion: null, description: null, srcIsAnimated: hasFlag3(num8, constants.IS_ANIMATED), flags: flags4, contentType: content_type4 };
      ({ url: obj13.url, proxy_url: obj13.proxyURL, width: obj13.width, height: obj13.height, placeholder: obj13.placeholder, placeholder_version: obj13.placeholderVersion, description: obj13.description } = video4);
      num8 = flags4;
      hasFlag3 = FlagUtils.hasFlag;
      FlagUtils;
      if (flags4 == null) {
        num8 = 0;
      }
      if (flags4 == null) {
        flags4 = 0;
      }
      obj.video = size4;
    }
  }
  if (set.has(obj.type)) {
    let fields = footer.fields;
    if (fields == null) {
      fields = [];
    }
    obj.fields = fields.map((name) => ({ rawName: name.name, rawValue: name.value, inline: name.inline }));
  } else {
    obj.fields = [];
  }
  if (null != footer.components) {
    const obj14 = InteractionComponentUtils;
    const transformComponentsResult = obj14.transformComponents(footer.components);
    let tmp39;
    if (transformComponentsResult.length > 0) {
      tmp39 = transformComponentsResult;
    }
    obj.components = tmp39;
  }
  return obj;
};
export const mergeEmbedsOnURL = function mergeEmbedsOnURL(mapped) {
  map = new Map();
  const items = [];
  const item = mapped.forEach((url) => {
    if (null != url.url) {
      const value = map.get(url.url);
      if (null == value) {
        items.push(url);
        const result = map.set(url.url, url);
      } else if (null != url.image) {
        if (null == value.images) {
          value.images = [];
          if (null != value.image) {
            const images = value.images;
            images.push(value.image);
          }
        }
        const images1 = value.images;
        images1.push(url.image);
      }
    } else {
      items.push(url);
    }
  });
  return items;
};
export { getEffectiveVideoProvider };
export const isEmbedInline = function isEmbedInline(type) {
  let author;
  let rawTitle;
  type = type.type;
  let tmp = null != type.image;
  ({ author, rawTitle } = type);
  if (!tmp) {
    tmp = null != type.video;
  }
  if (tmp) {
    let tmp2 = type === constants2.GIFV;
    if (!tmp2) {
      tmp2 = type !== constants2.RICH && null == author && null == rawTitle;
    }
    tmp = tmp2;
  }
  return tmp;
};
export const isServerShopArticleEmbed = function isServerShopArticleEmbed(type) {
  let tmp = type.type === constants2.ARTICLE && null != type.url;
  if (tmp) {
    const isMatch = re11.test(type.url) || re10.test(type.url);
    tmp = isMatch;
  }
  return tmp;
};
export const isCollectiblesShopArticleEmbed = function isCollectiblesShopArticleEmbed(type) {
  const isMatch = type.type === constants2.ARTICLE && null != type.url && regExp.test(type.url);
  return isMatch;
};
export const isGameProfileArticleEmbed = function isGameProfileArticleEmbed(type) {
  const isMatch = type.type === constants2.ARTICLE && null != type.url && re17.test(type.url);
  return isMatch;
};
export const isUserProfileArticleEmbed = function isUserProfileArticleEmbed(type) {
  const isMatch = type.type === constants2.ARTICLE && null != type.url && re18.test(type.url);
  return isMatch;
};
export const isSocialLayerStorefrontArticleEmbed = function isSocialLayerStorefrontArticleEmbed(type) {
  let tmp = type.type === constants2.ARTICLE && null != type.url;
  if (tmp) {
    const isMatch = re14.test(type.url) || re15.test(type.url) || re13.test(type.url) || re16.test(type.url);
    tmp = isMatch;
  }
  return tmp;
};
export const getMaxEmbedMediaSize = function getMaxEmbedMediaSize(provider, maxMediaWidth, maxMediaHeight) {
  let obj;
  if (null != maxMediaWidth) {
    if (null != maxMediaHeight) {
      obj = { maxMediaWidth, maxMediaHeight };
      const obj2 = { maxMediaWidth, maxMediaHeight };
    }
    return obj;
  }
  provider = provider.provider;
  let name;
  if (provider != null) {
    name = provider.name;
  }
  if ("TikTok" === name) {
    obj = { maxMediaWidth: 400, maxMediaHeight: 450 };
  } else {
    if (null != provider.video) {
      if (provider.video.height > provider.video.width) {
        const provider2 = provider.provider;
        let name1;
        if (provider2 != null) {
          name1 = provider2.name;
        }
      }
    }
    obj = { maxMediaWidth: 400, maxMediaHeight: 300 };
  }
};
export const canEmbedLinks = function canEmbedLinks(isPrivate, PermissionStore) {
  let canResult;
  if (isPrivate.isPrivate()) {
    canResult = !isPrivate.isManaged();
  } else {
    canResult = PermissionStore.can(hasOwnProperty.EMBED_LINKS, isPrivate);
  }
  return canResult;
};
export const shouldStripEmbeds = function shouldStripEmbeds(message) {
  let someResult = "" !== message.content;
  if (!someResult) {
    const messageSnapshots = message.messageSnapshots;
    someResult = messageSnapshots.some((message) => "" !== message.message.content || message.message.attachments.length > 0);
  }
  return someResult;
};