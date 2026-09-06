// === Module 4897: EmbedUtils ===

// Module 4897 (EmbedUtils)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import _modDef12 from "module_12" /* 12 */;
import utils_ColorUtils from "utils/ColorUtils" /* 1091 */;
import FlagUtils from "FlagUtils" /* 1384 */;
import _modDef4153 from "module_4153" /* 4153 */;
import InteractionComponentUtils from "InteractionComponentUtils" /* 4785 */;
import EmbedConstants from "EmbedConstants" /* 4898 */;
import Constants from "Constants" /* 1074 */;
import size from "module_2" /* 2 */;

function getEffectiveVideoProvider(name, url) {
  if ("YouTube" !== name) {
    if ("TikTok" !== name) {
      if (null != url) {
        try {
          const _URL = URL;
          const uRL = new URL(url);
          const hostname = uRL.hostname;
          if ("www.youtube.com" === hostname) {
            return "YouTube";
          } else if ("www.tiktok.com" === tmp9) {
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
EmbedConstants.EMBED_TYPES_WITH_PARSEABLE_FIELDS;
const re7 = /sketchfab/i;
const re8 = /^https:\/\/sketchfab\.com/i;
const re9 = /youtube|steam|imgur|vimeo|sketchfab|soundcloud|streamable|twitch|vid\.me|twitter/i;
const re10 = /^https?:\/\/(?:canary\.|ptb\.|www\.)?discord(?:app)?\.com\/channels\/([0-9]+)\/shop$/;
const re11 = /^https?:\/\/(?:canary\.|ptb\.|www\.)?discord(?:app)?\.com\/channels\/([0-9]+)\/shop\/([0-9]+)$/;
const regExp = new RegExp("^https://(?:(?:canary\\.|ptb\\.)?discord(?:app)?.com|staging\\.discord\\.co)/shop");
const re13 = /^https?:\/\/(?:canary\.|ptb\.|www\.)?discord(?:app)?\.com\/channels\/([0-9]+)\/game-shop\/([0-9]+)\/([0-9]+)/;
const re14 = /^https?:\/\/(?:canary\.|ptb\.|www\.)?discord(?:app)?\.com\/game-shop\/([0-9]+)\/([0-9]+)/;
const re15 = /^https?:\/\/(?:canary\.|ptb\.|www\.)?discord(?:app)?\.com\/shop\?(?=.*tab=game-shops)(?=.*applicationId=[0-9]+)(?=.*skuId=[0-9]+)/;
const re16 = /^https?:\/\/(?:canary\.|ptb\.|www\.)?discord(?:app)?\.com\/games\/[0-9]+(?:\/[A-Za-z0-9-]*)?\/?$/;
const re17 = /^https?:\/\/(?:canary\.|ptb\.|www\.)?discord(?:app)?\.com\/users\/[0-9]+\/?$/;
let result = size.fileFinishedImporting("utils/EmbedUtils.tsx");

export const sanitizeEmbed = function sanitizeEmbed(channel_id, id, footer) {
  let obj = { id: null, url: null, type: null, rawTitle: null, rawDescription: null, referenceId: null, flags: null, contentScanVersion: null };
  let obj1 = _modDef12;
  obj.id = obj1.uniqueId("embed_");
  ({ url: obj.url, type: obj.type, title: obj.rawTitle, description: obj.rawDescription, reference_id: obj.referenceId, flags: obj.flags, content_scan_version: obj.contentScanVersion } = footer);
  if (null != footer.footer) {
    obj = { text: footer.footer.text, iconURL: footer.footer.icon_url, iconProxyURL: footer.footer.proxy_icon_url };
    obj.footer = obj;
  }
  if (tmp3) {
    obj = { name: footer.author.name, url: footer.author.url, iconURL: footer.author.icon_url, iconProxyURL: footer.author.proxy_icon_url };
    obj.author = obj;
  }
  if (tmp4) {
    obj1 = { name: footer.provider.name, url: footer.provider.url };
    obj.provider = obj1;
  }
  if (null != footer.timestamp) {
    const _Date = Date;
    let tmpResult = _modDef4153;
    const date = new Date(footer.timestamp);
    obj.timestamp = tmpResult(date);
  }
  if (null != footer.color) {
    obj.color = utils_ColorUtils.int2hsl(footer.color, false);
  }
  if (null != footer.thumbnail) {
    const thumbnail2 = footer.thumbnail;
    if (tmp12) {
      const type = obj.type;
      if (constants2.ARTICLE !== type) {
        if (constants2.IMAGE !== type) {
          const thumbnail3 = footer.thumbnail;
          ({ flags, content_type } = thumbnail3);
          const size = { url: null, proxyURL: null, width: null, height: null, placeholder: null, placeholderVersion: null, description: null, srcIsAnimated: null, flags: null, contentType: null };
          ({ url: obj18.url, proxy_url: obj18.proxyURL, width: obj18.width, height: obj18.height, placeholder: obj18.placeholder, placeholder_version: obj18.placeholderVersion, description: obj18.description } = thumbnail3);
          let num = flags;
          if (flags == null) {
            num = 0;
          }
          size.srcIsAnimated = FlagUtils.hasFlag(num, constants.IS_ANIMATED);
          if (flags == null) {
            flags = 0;
          }
          size.flags = flags;
          size.contentType = content_type;
          obj.thumbnail = size;
        }
      }
      const thumbnail = footer.thumbnail;
      ({ flags: flags2, content_type: content_type2 } = thumbnail);
      const size1 = { url: null, proxyURL: null, width: null, height: null, placeholder: null, placeholderVersion: null, description: null, srcIsAnimated: null, flags: null, contentType: null };
      ({ url: obj7.url, proxy_url: obj7.proxyURL, width: obj7.width, height: obj7.height, placeholder: obj7.placeholder, placeholder_version: obj7.placeholderVersion, description: obj7.description } = thumbnail);
      let num2 = flags2;
      if (flags2 == null) {
        num2 = 0;
      }
      size1.srcIsAnimated = FlagUtils.hasFlag(num2, constants.IS_ANIMATED);
      if (flags2 == null) {
        flags2 = 0;
      }
      size1.flags = flags2;
      size1.contentType = content_type2;
      obj.image = size1;
    }
    tmp12 = thumbnail2.width > 0 && thumbnail2.height > 0;
  }
  let tmp16 = null != footer.image;
  if (tmp16) {
    const image = footer.image;
    tmp16 = image.width > 0 && image.height > 0;
    const tmp17 = image.width > 0 && image.height > 0;
  }
  if (tmp16) {
    const image2 = footer.image;
    ({ flags: flags3, content_type: content_type3 } = image2);
    const size2 = { url: null, proxyURL: null, width: null, height: null, placeholder: null, placeholderVersion: null, description: null, srcIsAnimated: null, flags: null, contentType: null };
    ({ url: obj9.url, proxy_url: obj9.proxyURL, width: obj9.width, height: obj9.height, placeholder: obj9.placeholder, placeholder_version: obj9.placeholderVersion, description: obj9.description } = image2);
    let num4 = flags3;
    if (flags3 == null) {
      num4 = 0;
    }
    size2.srcIsAnimated = FlagUtils.hasFlag(num4, constants.IS_ANIMATED);
    if (flags3 == null) {
      flags3 = 0;
    }
    size2.flags = flags3;
    size2.contentType = content_type3;
    obj.image = size2;
  }
  if (null != footer.video) {
    let tmp20 = null == obj.thumbnail && null != footer.video.proxy_url;
    if (tmp20) {
      const video = footer.video;
      tmp20 = video.width > 0 && video.height > 0;
      const tmp21 = video.width > 0 && video.height > 0;
    }
    if (tmp20) {
      const size3 = { width: footer.video.width, height: footer.video.height, url: null };
      const _URL = URL;
      const str = new URL(footer.video.proxy_url);
      const _Object = Object;
      const keys = Object.keys({ format: "webp" });
      const item = keys.forEach((item) => {
        const searchParams = str.searchParams;
        const result = searchParams.set(item, obj2[item]);
      });
      size3.url = str.toString();
      obj.thumbnail = size3;
      const obj2 = { format: "webp" };
    }
    let tmp27 = null != obj.thumbnail;
    if (tmp27) {
      const video2 = footer.video;
      tmp27 = video2.width > 0 && video2.height > 0;
      const tmp28 = video2.width > 0 && video2.height > 0;
    }
    if (tmp27) {
      ({ provider, video: video3 } = footer);
      if (null == provider) {
        let flag2 = false;
        if (!re8.test(video3.url)) {
          let isMatch = null != video3.proxy_url;
          if (!isMatch) {
            isMatch = /^https:/i.test(video3.url);
            const obj13 = /^https:/i;
          }
          let tmp33 = null != id;
          if (tmp33) {
            tmpResult = SnowflakeUtilsDefault;
            tmp33 = tmpResult.extractTimestamp(id) < 1492472454139;
          }
          let tmp34 = isMatch;
          if (tmp33) {
            let isMatch1 = isMatch;
            if (isMatch) {
              isMatch1 = null != provider;
            }
            if (isMatch1) {
              isMatch1 = re9.test(provider.name);
            }
            tmp34 = isMatch1;
          }
          flag2 = tmp34;
        }
      } else {
        flag2 = false;
      }
      tmp27 = flag2;
    }
    if (tmp27) {
      const video4 = footer.video;
      ({ flags: flags4, content_type: content_type4 } = video4);
      const size4 = { url: null, proxyURL: null, width: null, height: null, placeholder: null, placeholderVersion: null, description: null, srcIsAnimated: null, flags: null, contentType: null };
      ({ url: obj15.url, proxy_url: obj15.proxyURL, width: obj15.width, height: obj15.height, placeholder: obj15.placeholder, placeholder_version: obj15.placeholderVersion, description: obj15.description } = video4);
      let num8 = flags4;
      if (flags4 == null) {
        num8 = 0;
      }
      size4.srcIsAnimated = FlagUtils.hasFlag(num8, constants.IS_ANIMATED);
      if (flags4 == null) {
        flags4 = 0;
      }
      size4.flags = flags4;
      size4.contentType = content_type4;
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
    const transformComponentsResult = InteractionComponentUtils.transformComponents(footer.components);
    let tmp40;
    if (transformComponentsResult.length > 0) {
      tmp40 = transformComponentsResult;
    }
    obj.components = tmp40;
  }
  return obj;
};
export const mergeEmbedsOnURL = function mergeEmbedsOnURL(mapped) {
  const map = new Map();
  const items = [];
  const item = mapped.forEach((url) => {
    if (null != url.url) {
      value = map.get(url.url);
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
export const isEmbedInline = function isEmbedInline(first1) {
  const type = first1.type;
  let tmp = null != first1.image;
  ({ author, rawTitle } = first1);
  if (!tmp) {
    tmp = null != first1.video;
  }
  if (tmp) {
    let tmp2 = type === constants2.GIFV;
    if (!tmp2) {
      tmp2 = type !== constants2.RICH && null == author && null == rawTitle;
      const tmp3 = type !== constants2.RICH && null == author && null == rawTitle;
    }
    tmp = tmp2;
  }
  return tmp;
};
export const isServerShopArticleEmbed = function isServerShopArticleEmbed(type) {
  let tmp = type.type === constants2.ARTICLE;
  if (tmp) {
    tmp = null != type.url;
  }
  if (tmp) {
    let isMatch = re11.test(type.url);
    if (!isMatch) {
      isMatch = re10.test(type.url);
    }
    tmp = isMatch;
  }
  return tmp;
};
export const isCollectiblesShopArticleEmbed = function isCollectiblesShopArticleEmbed(type) {
  let isMatch = type.type === constants2.ARTICLE;
  if (isMatch) {
    isMatch = null != type.url;
  }
  if (isMatch) {
    isMatch = regExp.test(type.url);
  }
  return isMatch;
};
export const isGameProfileArticleEmbed = function isGameProfileArticleEmbed(type) {
  let isMatch = type.type === constants2.ARTICLE;
  if (isMatch) {
    isMatch = null != type.url;
  }
  if (isMatch) {
    isMatch = re16.test(type.url);
  }
  return isMatch;
};
export const isUserProfileArticleEmbed = function isUserProfileArticleEmbed(type) {
  let isMatch = type.type === constants2.ARTICLE;
  if (isMatch) {
    isMatch = null != type.url;
  }
  if (isMatch) {
    isMatch = re17.test(type.url);
  }
  return isMatch;
};
export const isSocialLayerStorefrontArticleEmbed = function isSocialLayerStorefrontArticleEmbed(type) {
  let tmp = type.type === constants2.ARTICLE;
  if (tmp) {
    tmp = null != type.url;
  }
  if (tmp) {
    let isMatch = re14.test(type.url);
    if (!isMatch) {
      isMatch = re13.test(type.url);
    }
    if (!isMatch) {
      isMatch = re15.test(type.url);
    }
    tmp = isMatch;
  }
  return tmp;
};
export const getMaxEmbedMediaSize = function getMaxEmbedMediaSize(provider, maxMediaWidth, maxMediaHeight) {
  if (null != maxMediaWidth) {
    if (null != maxMediaHeight) {
      let obj = { maxMediaWidth, maxMediaHeight };
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
  if (isPrivate.isPrivate()) {
    let canResult = !isPrivate.isManaged();
  } else {
    canResult = PermissionStore.can(constants3.EMBED_LINKS, isPrivate);
  }
  return canResult;
};
export const shouldStripEmbeds = function shouldStripEmbeds(message) {
  let someResult = "" !== message.content;
  if (!someResult) {
    const messageSnapshots = message.messageSnapshots;
    someResult = messageSnapshots.some((message) => {
      let tmp = "" !== message.message.content;
      if (!tmp) {
        tmp = message.message.attachments.length > 0;
      }
      return tmp;
    });
  }
  return someResult;
};