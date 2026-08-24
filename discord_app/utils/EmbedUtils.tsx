// discord_app/utils/EmbedUtils.tsx
import set from "../../_runtime/00002_set.js";
import MessageEmbedTypes from "../modules/messages/EmbedConstants.tsx";
import ME from "../Constants.tsx";

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
({ MessageEmbedMediaFlags: c3, MessageEmbedTypes: c4, Permissions: c5 } = ME);
let closure_6 = MessageEmbedTypes.EMBED_TYPES_WITH_PARSEABLE_FIELDS;
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
let result = set.fileFinishedImporting("utils/EmbedUtils.tsx");

export const sanitizeEmbed = function sanitizeEmbed(channel_id, id, footer) {
  let obj = { id: null, url: null, type: null, rawTitle: null, rawDescription: null, referenceId: null, flags: null, contentScanVersion: null };
  obj1 = str(12);
  obj[0] = obj1.uniqueId("embed_");
  ({ url: obj[1], type: obj[2], title: obj[3], description: obj[4], reference_id: obj[5], flags: obj[6], content_scan_version: obj[7] } = footer);
  if (null != footer.footer) {
    obj = { text: null, iconURL: null, iconProxyURL: null };
    obj[0] = footer.footer.text;
    obj[1] = footer.footer.icon_url;
    obj[2] = footer.footer.proxy_icon_url;
    obj.footer = obj;
  }
  if (tmp3) {
    obj = { name: null, url: null, iconURL: null, iconProxyURL: null };
    obj[0] = footer.author.name;
    obj[1] = footer.author.url;
    obj[2] = footer.author.icon_url;
    obj[3] = footer.author.proxy_icon_url;
    obj.author = obj;
  }
  if (tmp4) {
    obj1 = { name: null, url: null };
    obj1[0] = footer.provider.name;
    obj1[1] = footer.provider.url;
    obj.provider = obj1;
  }
  if (null != footer.timestamp) {
    const _Date = Date;
    let tmpResult = tmp(3975);
    const date = new Date(footer.timestamp);
    obj.timestamp = tmpResult(date);
  }
  if (null != footer.color) {
    let obj5 = obj6(688);
    obj.color = obj5.int2hsl(footer.color, false);
  }
  if (null != footer.thumbnail) {
    const thumbnail2 = footer.thumbnail;
    if (tmp12) {
      const type = obj.type;
      if (constants2.ARTICLE !== type) {
        if (constants2.IMAGE !== type) {
          const thumbnail3 = footer.thumbnail;
          ({ flags, content_type } = thumbnail3);
          const obj2 = { url: null, proxyURL: null, width: null, height: null, placeholder: null, placeholderVersion: null, description: null, srcIsAnimated: null, flags: null, contentType: null };
          ({ url: obj18[0], proxy_url: obj18[1], width: obj18[2], height: obj18[3], placeholder: obj18[4], placeholder_version: obj18[5], description: obj18[6] } = thumbnail3);
          let num = flags;
          if (flags == null) {
            num = 0;
          }
          obj2[7] = obj6(1403).hasFlag(num, constants.IS_ANIMATED);
          if (flags == null) {
            flags = 0;
          }
          obj2[8] = flags;
          obj2[9] = content_type;
          obj.thumbnail = obj2;
          const obj19 = obj6(1403);
        }
      }
      const thumbnail = footer.thumbnail;
      ({ flags: flags2, content_type: content_type2 } = thumbnail);
      const obj3 = { url: null, proxyURL: null, width: null, height: null, placeholder: null, placeholderVersion: null, description: null, srcIsAnimated: null, flags: null, contentType: null };
      ({ url: obj7[0], proxy_url: obj7[1], width: obj7[2], height: obj7[3], placeholder: obj7[4], placeholder_version: obj7[5], description: obj7[6] } = thumbnail);
      let obj7 = obj6(1403);
      let num2 = flags2;
      if (flags2 == null) {
        num2 = 0;
      }
      obj3[7] = obj7.hasFlag(num2, constants.IS_ANIMATED);
      if (flags2 == null) {
        flags2 = 0;
      }
      obj3[8] = flags2;
      obj3[9] = content_type2;
      obj.image = obj3;
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
    const obj4 = { url: null, proxyURL: null, width: null, height: null, placeholder: null, placeholderVersion: null, description: null, srcIsAnimated: null, flags: null, contentType: null };
    ({ url: obj9[0], proxy_url: obj9[1], width: obj9[2], height: obj9[3], placeholder: obj9[4], placeholder_version: obj9[5], description: obj9[6] } = image2);
    let num4 = flags3;
    if (flags3 == null) {
      num4 = 0;
    }
    obj4[7] = obj6(1403).hasFlag(num4, constants.IS_ANIMATED);
    if (flags3 == null) {
      flags3 = 0;
    }
    obj4[8] = flags3;
    obj4[9] = content_type3;
    obj.image = obj4;
    const obj10 = obj6(1403);
  }
  if (null != footer.video) {
    let tmp20 = null == obj.thumbnail && null != footer.video.proxy_url;
    if (tmp20) {
      const video = footer.video;
      tmp20 = video.width > 0 && video.height > 0;
      const tmp21 = video.width > 0 && video.height > 0;
    }
    if (tmp20) {
      obj5 = { width: null, height: null, url: null };
      obj5[0] = footer.video.width;
      obj5[1] = footer.video.height;
      obj6 = { format: "webp" };
      str = undefined;
      const _URL = URL;
      str = new URL(footer.video.proxy_url);
      const _Object = Object;
      const keys = Object.keys(obj6);
      const item = keys.forEach((arg0) => {
        const searchParams = str.searchParams;
        const result = searchParams.set(arg0, obj6[arg0]);
      });
      obj5[2] = str.toString();
      obj.thumbnail = obj5;
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
        if (!regex2.test(video3.url)) {
          let isMatch = null != video3.proxy_url;
          if (!isMatch) {
            isMatch = /^https:/i.test(video3.url);
            const obj13 = /^https:/i;
          }
          let tmp33 = null != id;
          if (tmp33) {
            tmpResult = tmp(11);
            tmp33 = tmpResult.extractTimestamp(id) < 1492472454139;
          }
          let tmp34 = isMatch;
          if (tmp33) {
            let isMatch1 = isMatch;
            if (isMatch) {
              isMatch1 = null != provider;
            }
            if (isMatch1) {
              isMatch1 = regex3.test(provider.name);
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
      obj7 = { url: null, proxyURL: null, width: null, height: null, placeholder: null, placeholderVersion: null, description: null, srcIsAnimated: null, flags: null, contentType: null };
      ({ url: obj15[0], proxy_url: obj15[1], width: obj15[2], height: obj15[3], placeholder: obj15[4], placeholder_version: obj15[5], description: obj15[6] } = video4);
      let num8 = flags4;
      if (flags4 == null) {
        num8 = 0;
      }
      obj7[7] = obj6(1403).hasFlag(num8, constants.IS_ANIMATED);
      if (flags4 == null) {
        flags4 = 0;
      }
      obj7[8] = flags4;
      obj7[9] = content_type4;
      obj.video = obj7;
      const obj16 = obj6(1403);
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
    const transformComponentsResult = obj6(4805).transformComponents(footer.components);
    let tmp40;
    if (transformComponentsResult.length > 0) {
      tmp40 = transformComponentsResult;
    }
    obj.components = tmp40;
    const obj17 = obj6(4805);
  }
  return obj;
};
export const mergeEmbedsOnURL = function mergeEmbedsOnURL(mapped) {
  const map = new Map();
  const items = [];
  const item = mapped.forEach((url) => {
    if (null != url.url) {
      const value = map.get(url.url);
      if (null == value) {
        items.push(url);
        const result = obj.set(url.url, url);
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
      obj = map;
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
    let isMatch = regex5.test(type.url);
    if (!isMatch) {
      isMatch = regex4.test(type.url);
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
    isMatch = regex9.test(type.url);
  }
  return isMatch;
};
export const isUserProfileArticleEmbed = function isUserProfileArticleEmbed(type) {
  let isMatch = type.type === constants2.ARTICLE;
  if (isMatch) {
    isMatch = null != type.url;
  }
  if (isMatch) {
    isMatch = regex10.test(type.url);
  }
  return isMatch;
};
export const isSocialLayerStorefrontArticleEmbed = function isSocialLayerStorefrontArticleEmbed(type) {
  let tmp = type.type === constants2.ARTICLE;
  if (tmp) {
    tmp = null != type.url;
  }
  if (tmp) {
    let isMatch = regex7.test(type.url);
    if (!isMatch) {
      isMatch = regex6.test(type.url);
    }
    if (!isMatch) {
      isMatch = regex8.test(type.url);
    }
    tmp = isMatch;
  }
  return tmp;
};
export const getMaxEmbedMediaSize = function getMaxEmbedMediaSize(provider) {
  if (null != arg1) {
    if (null != arg2) {
      let obj = { maxMediaWidth: null, maxMediaHeight: null };
      obj[0] = arg1;
      obj[1] = arg2;
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
        const tmp3 = getEffectiveVideoProvider;
      }
    }
    obj = { maxMediaWidth: 400, maxMediaHeight: 300 };
  }
};
export const canEmbedLinks = function canEmbedLinks(isPrivate, closure_9) {
  if (isPrivate.isPrivate()) {
    let canResult = !isPrivate.isManaged();
  } else {
    canResult = closure_9.can(constants3.EMBED_LINKS, isPrivate);
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