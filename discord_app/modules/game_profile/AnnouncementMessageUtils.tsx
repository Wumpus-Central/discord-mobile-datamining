import { isDiscordProxiedAssetUrl } from "../../utils/URLUtils.tsx";
import { formatExpirationLabel } from "../polls/chat/useFormattedExpirationLabel.tsx";
// discord_app/modules/game_profile/AnnouncementMessageUtils.tsx
import { isMessageComponentsV2 } from "hasFlag";

const re4 = /^#{1,3}\s+(.+)$/;
const re5 = /^https?:\/\/\S+$/;
let result = require("messageAttachmentToUnfurledMediaItem").fileFinishedImporting("modules/game_profile/AnnouncementMessageUtils.tsx");

export const toAnnouncementMessages = function toAnnouncementMessages(messages) {
  return messages.map((reactions) => {
    let body;
    let color;
    let title;
    let url;
    let obj = found4(found6[5]);
    const tmp2Result = found5(found6[4])(obj.createMessageRecord(reactions));
    if (callback(tmp2Result)) {
      const components = tmp2Result.components;
      const found = components.filter((type) => type.type === found4(found6[1]).ComponentType.TEXT_DISPLAY);
      const mapped = found.map((content) => content.content);
      let joined = mapped.join("\n");
    } else {
      const content = tmp2Result.content;
      if (0 === content.length) {
        const first = tmp2Result.embeds[0];
        let tmp9 = null;
        if (null != first) {
          const items = [];
          if (null != first.rawTitle) {
            const _HermesInternal = HermesInternal;
            items.push("# " + first.rawTitle);
          }
          if (null != first.rawDescription) {
            items.push(first.rawDescription);
          }
          let joined1 = null;
          if (items.length > 0) {
            joined1 = items.join("\n");
          }
          tmp9 = joined1;
        }
        if (tmp9 == null) {
          tmp9 = content;
        }
        joined = tmp9;
      } else {
        joined = content;
      }
    }
    if (callback(tmp2Result)) {
      const components1 = tmp2Result.components;
      const found1 = components1.find((type) => type.type === found4(found6[1]).ComponentType.MEDIA_GALLERY);
      let media;
      if (found1 != null) {
        const first1 = found1.items[0];
        if (first1 != null) {
          media = first1.media;
        }
      }
      if (null != media) {
        let tmp3Result = tmp3(tmp[2]);
        const unfurledMediaItemType = tmp3Result.getUnfurledMediaItemType(media);
        if ("INVALID" !== unfurledMediaItemType) {
          obj = {};
          const merged = Object.assign(media);
          obj.type = unfurledMediaItemType;
          obj = { message: null };
          obj[0] = tmp2Result;
          obj.sourceMetadata = obj;
          let result = obj;
        }
        const index = joined.indexOf("\n");
        let str9 = joined;
        if (-1 !== index) {
          str9 = joined.slice(0, index);
        }
        const match = str9.match(closure_4);
        if (null != match) {
          const obj1 = { title: null, body: null };
          obj1[0] = match[1].trim();
          let str11 = "";
          if (!tmp28) {
            const substr = joined.slice(index + 1);
            str11 = substr.trimStart();
          }
          obj1[1] = str11;
          let obj2 = obj1;
          const str10 = match[1];
        } else {
          obj2 = { body: null };
          obj2[0] = joined;
        }
        reactions = reactions.reactions;
        let num5;
        ({ title, body } = obj2);
        if (reactions != null) {
          num5 = reactions.reduce((arg0, count) => arg0 + count.count, 0);
        }
        if (num5 == null) {
          num5 = 0;
        }
        let tmp32;
        if (joined !== tmp2Result.content) {
          if (!tmp5(tmp2Result)) {
            const first2 = tmp2Result.embeds[0];
            let tmp34;
            if (null != first2) {
              const author = first2.author;
              let name;
              if (author != null) {
                name = author.name;
              }
              const author2 = first2.author;
              let iconProxyURL;
              if (author2 != null) {
                iconProxyURL = author2.iconProxyURL;
              }
              if (iconProxyURL == null) {
                const author3 = first2.author;
                let iconURL;
                if (author3 != null) {
                  iconURL = author3.iconURL;
                }
                iconProxyURL = iconURL;
              }
              const footer = first2.footer;
              let text;
              if (footer != null) {
                text = footer.text;
              }
              if (text == null) {
                const provider = first2.provider;
                let name1;
                if (provider != null) {
                  name1 = provider.name;
                }
                text = name1;
              }
              const footer2 = first2.footer;
              let iconProxyURL1;
              if (footer2 != null) {
                iconProxyURL1 = footer2.iconProxyURL;
              }
              if (iconProxyURL1 == null) {
                const footer3 = first2.footer;
                let iconURL1;
                if (footer3 != null) {
                  iconURL1 = footer3.iconURL;
                }
                iconProxyURL1 = iconURL1;
              }
              ({ url, color } = first2);
              const obj3 = { authorName: null, authorIconUrl: null, providerName: null, providerIconUrl: null, url: null, color: null };
              obj3[0] = name;
              obj3[1] = iconProxyURL;
              obj3[2] = text;
              obj3[3] = iconProxyURL1;
              obj3[4] = url;
              obj3[5] = color;
              tmp34 = obj3;
            }
            tmp32 = tmp34;
          }
        }
        const obj4 = { id: null, media: null, title: null, body: null, content: null, timestamp: null, reactionCount: null, embedSource: null, poll: null };
        obj4[0] = tmp2Result.id;
        obj4[1] = result;
        obj4[2] = title;
        obj4[3] = body;
        obj4[4] = joined;
        obj4[5] = reactions.timestamp;
        obj4[6] = num5;
        obj4[7] = tmp32;
        obj4[8] = tmp2Result.poll;
        return obj4;
      }
    }
    const attachments = tmp2Result.attachments;
    const found2 = attachments.find((content_type) => found4(found6[3]).isImageContentType(content_type.content_type));
    if (null != found2) {
      tmp3Result = tmp3(tmp[2]);
      result = tmp3Result.messageAttachmentToMediaItem(found2, tmp2Result);
    } else {
      const attachments1 = tmp2Result.attachments;
      const found3 = attachments1.find((content_type) => found4(found6[3]).isVideoContentType(content_type.content_type));
      if (null != found3) {
        result = tmp3(tmp[2]).messageAttachmentToMediaItem(found3, tmp2Result);
        const tmp3Result1 = tmp3(tmp[2]);
      } else {
        let embeds = tmp2Result.embeds;
        found4 = embeds.find((video) => null != video.video && null != video.thumbnail);
        let thumbnail;
        if (found4 != null) {
          thumbnail = found4.thumbnail;
        }
        if (null != thumbnail) {
          const obj5 = { message: null, identifier: null };
          obj5[0] = tmp2Result;
          const obj6 = { type: "embed", embedIndex: null };
          const embeds3 = tmp2Result.embeds;
          obj6[1] = embeds3.findIndex((arg0) => arg0 === found4);
          obj5[1] = obj6;
          result = tmp3(tmp[2]).embedMediaToMediaItem(found4.thumbnail, obj5, "IMAGE");
          const tmp3Result2 = tmp3(tmp[2]);
        } else {
          const embeds1 = tmp2Result.embeds;
          found5 = embeds1.find((image) => null != image.image);
          let image;
          if (found5 != null) {
            image = found5.image;
          }
          if (null != image) {
            const obj7 = { message: null, identifier: null };
            obj7[0] = tmp2Result;
            const obj8 = { type: "embed", embedIndex: null };
            let embeds2 = tmp2Result.embeds;
            obj8[1] = embeds2.findIndex((arg0) => arg0 === found5);
            obj7[1] = obj8;
            result = tmp3(tmp[2]).embedMediaToMediaItem(found5.image, obj7, "IMAGE");
            const tmp3Result3 = tmp3(tmp[2]);
          } else {
            embeds2 = tmp2Result.embeds;
            found6 = embeds2.find((thumbnail) => null != thumbnail.thumbnail);
            let thumbnail1;
            if (found6 != null) {
              thumbnail1 = found6.thumbnail;
            }
            if (null != thumbnail1) {
              const obj9 = { message: null, identifier: null };
              obj9[0] = tmp2Result;
              const obj10 = { type: "embed", embedIndex: null };
              embeds = tmp2Result.embeds;
              obj10[1] = embeds.findIndex((arg0) => arg0 === found6);
              obj9[1] = obj10;
              result = tmp3(tmp[2]).embedMediaToMediaItem(found6.thumbnail, obj9, "IMAGE");
              const tmp3Result4 = tmp3(tmp[2]);
            }
          }
        }
      }
    }
  });
};
export const getPollExpiryLabel = function getPollExpiryLabel(poll) {
  let result = formatExpirationLabel /* formatExpirationLabel */.formatExpirationLabel(poll.expiry);
  if (result == null) {
    const intl = tmp(1236).intl;
    result = intl.string(tmp(1236).t["e+J3JZ"]);
  }
  return result;
};
export const getPosterUrl = function getPosterUrl(proxyUrl, arg1, c12) {
  let str = isDiscordProxiedAssetUrl.toURLSafe(proxyUrl);
  str = null;
  if (null != str) {
    const searchParams = str.searchParams;
    searchParams.append("format", "webp");
    if (null != arg1) {
      const searchParams2 = str.searchParams;
      searchParams2.append("width", arg1.toString());
    }
    if (null != c12) {
      const searchParams3 = str.searchParams;
      searchParams3.append("height", c12.toString());
    }
    str = str.toString();
  }
  return str;
};