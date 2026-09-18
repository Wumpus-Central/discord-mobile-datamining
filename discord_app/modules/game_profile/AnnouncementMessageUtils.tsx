// === Module 8992: AnnouncementMessageUtils ===

// Module 8992 (AnnouncementMessageUtils)
import util from "util" /* 1115 */;
import URLUtilsDefault from "URLUtils" /* 1366 */;
import MessageRecord from "MessageRecord" /* 4372 */;
import useFormattedExpirationLabel from "useFormattedExpirationLabel" /* 8994 */;
import size from "module_2" /* 2 */;

const isMessageComponentsV2 = MessageRecord.isMessageComponentsV2;
const re4 = /^#{1,3}\s+(.+)$/;
const re5 = /^https?:\/\/\S+$/;
let result = size.fileFinishedImporting("modules/game_profile/AnnouncementMessageUtils.tsx");

export const toAnnouncementMessages = function toAnnouncementMessages(messages) {
  return messages.map((reactions) => {
    const tmp2 = found5(found6[4]);
    const tmp2Result = tmp2(found4(found6[5]).createMessageRecord(reactions));
    if (closure_3(tmp2Result)) {
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
    if (closure_3(tmp2Result)) {
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
        const unfurledMediaItemType = tmp3(tmp[2]).getUnfurledMediaItemType(media);
        if ("INVALID" !== unfurledMediaItemType) {
          const obj2 = {};
          const merged = Object.assign(media);
          obj2.type = unfurledMediaItemType;
          const obj3 = { message: tmp2Result };
          obj2.sourceMetadata = obj3;
          let result = obj2;
        }
        const index = joined.indexOf("\n");
        let str9 = joined;
        if (-1 !== index) {
          str9 = joined.slice(0, index);
        }
        const match = str9.match(closure_4);
        if (null != match) {
          const obj4 = { title: match[1].trim(), body: null };
          let str11 = "";
          if (!tmp28) {
            const substr = joined.slice(index + 1);
            str11 = substr.trimStart();
          }
          obj4.body = str11;
          let obj5 = obj4;
        } else {
          obj5 = { body: joined };
        }
        reactions = reactions.reactions;
        let num5;
        ({ title, body } = obj5);
        if (reactions != null) {
          num5 = reactions.reduce((acc, count) => acc + count.count, 0);
        }
        if (num5 == null) {
          num5 = 0;
        }
        let tmp32;
        if (joined !== tmp2Result.content) {
          if (!closure_3(tmp2Result)) {
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
              const obj6 = { authorName: name, authorIconUrl: iconProxyURL, providerName: text, providerIconUrl: iconProxyURL1, url, color };
              tmp34 = obj6;
            }
            tmp32 = tmp34;
          }
        }
        const obj7 = { id: tmp2Result.id, media: result, title, body, content: joined, timestamp: reactions.timestamp, reactionCount: num5, embedSource: tmp32, poll: tmp2Result.poll };
        return obj7;
      }
    }
    const attachments = tmp2Result.attachments;
    const found2 = attachments.find((content_type) => found4(found6[3]).isImageContentType(content_type.content_type));
    if (null != found2) {
      result = tmp3(tmp[2]).messageAttachmentToMediaItem(found2, tmp2Result);
      const tmp3Result6 = tmp3(tmp[2]);
    } else {
      const attachments1 = tmp2Result.attachments;
      const found3 = attachments1.find((content_type) => found4(found6[3]).isVideoContentType(content_type.content_type));
      if (null != found3) {
        result = tmp3(tmp[2]).messageAttachmentToMediaItem(found3, tmp2Result);
        const tmp3Result7 = tmp3(tmp[2]);
      } else {
        const embeds1 = tmp2Result.embeds;
        found4 = embeds1.find((video) => null != video.video && null != video.thumbnail);
        let thumbnail;
        if (found4 != null) {
          thumbnail = found4.thumbnail;
        }
        if (null != thumbnail) {
          const obj8 = { message: tmp2Result, identifier: null };
          const obj9 = { type: "embed", embedIndex: null };
          const embeds3 = tmp2Result.embeds;
          obj9.embedIndex = embeds3.findIndex((item) => item === found4);
          obj8.identifier = obj9;
          result = tmp3(tmp[2]).embedMediaToMediaItem(found4.thumbnail, obj8, "IMAGE");
          const tmp3Result8 = tmp3(tmp[2]);
        } else {
          const embeds4 = tmp2Result.embeds;
          found5 = embeds4.find((image) => null != image.image);
          let image;
          if (found5 != null) {
            image = found5.image;
          }
          if (null != image) {
            const obj10 = { message: tmp2Result, identifier: null };
            const obj11 = { type: "embed", embedIndex: null };
            const embeds2 = tmp2Result.embeds;
            obj11.embedIndex = embeds2.findIndex((item) => item === found5);
            obj10.identifier = obj11;
            result = tmp3(tmp[2]).embedMediaToMediaItem(found5.image, obj10, "IMAGE");
            const tmp3Result9 = tmp3(tmp[2]);
          } else {
            const embeds5 = tmp2Result.embeds;
            found6 = embeds5.find((thumbnail) => null != thumbnail.thumbnail);
            let thumbnail1;
            if (found6 != null) {
              thumbnail1 = found6.thumbnail;
            }
            if (null != thumbnail1) {
              const obj12 = { message: tmp2Result, identifier: null };
              const obj13 = { type: "embed", embedIndex: null };
              const embeds = tmp2Result.embeds;
              obj13.embedIndex = embeds.findIndex((item) => item === found6);
              obj12.identifier = obj13;
              result = tmp3(tmp[2]).embedMediaToMediaItem(found6.thumbnail, obj12, "IMAGE");
              const tmp3Result10 = tmp3(tmp[2]);
            }
          }
        }
      }
    }
    const obj = found4(found6[5]);
  });
};
export const getPollExpiryLabel = function getPollExpiryLabel(poll) {
  let result = useFormattedExpirationLabel.formatExpirationLabel(poll.expiry);
  if (result == null) {
    const intl = util.intl;
    result = intl.string(util.t["e+J3JZ"]);
  }
  return result;
};
export const getPosterUrl = function getPosterUrl(proxyUrl, arg1, arg2) {
  const str = URLUtilsDefault.toURLSafe(proxyUrl);
  let str1 = null;
  if (null != str) {
    const searchParams = str.searchParams;
    searchParams.append("format", "webp");
    if (null != arg1) {
      const searchParams2 = str.searchParams;
      searchParams2.append("width", arg1.toString());
    }
    if (null != arg2) {
      const searchParams3 = str.searchParams;
      searchParams3.append("height", arg2.toString());
    }
    str1 = str.toString();
  }
  return str1;
};