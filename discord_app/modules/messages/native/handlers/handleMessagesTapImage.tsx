// discord_app/modules/messages/native/handlers/handleMessagesTapImage.tsx
import closure_3 from "../../../replies/ReferencedMessageStore.tsx";
import closure_4 from "../../../../stores/RelationshipStore.tsx";
import closure_5 from "../../../../stores/UserStore.tsx";
import { MessageTypes } from "../../../../Constants.tsx";

const require = arg1;
let result = require("set").fileFinishedImporting("modules/messages/native/handlers/handleMessagesTapImage.tsx");

export const handleMessagesTapImage = function handleMessagesTapImage(tapImageData) {
  let flattenSourceResult;
  let tmp20;
  tapImageData = tapImageData.tapImageData;
  ({ index, type, portal, embedIndex, componentId, componentMediaIndex, embedId } = tapImageData);
  ({ message, messageChannel, showContextName } = tapImageData);
  num2 = undefined;
  ({ allowWithinModal, selectedChannelId } = tapImageData);
  if (null != portal) {
    let obj = embedId(9034);
    obj.markPortalAlive(portal);
  }
  if (true === allowWithinModal) {
    if ("attachment" !== type) {
      if ("embed" !== type) {
        if ("sticker" !== type) {
          if ("component" !== type) {
            const _Error = Error;
            const _HermesInternal = HermesInternal;
            error = new Error("Unsupported thumbnail type: " + type);
            throw error;
          }
        }
      }
    }
    let tmp7 = message;
    if (message.type === MessageTypes.THREAD_STARTER_MESSAGE) {
      tmp7 = message;
      if (null != message.messageReference) {
        const message2 = messageByReference.getMessageByReference(message.messageReference).message;
        tmp7 = message;
        if (null != message2) {
          tmp7 = message2;
        }
      }
    }
    const messageReference = tmp7.messageReference;
    type = undefined;
    if (messageReference != null) {
      type = messageReference.type;
    }
    let tmp12 = tmp7;
    if (type !== embedId(694).MessageReferenceTypes.FORWARD) {
      const attachments = tmp7.attachments;
      const found = attachments.filter((flags) => !embedId(9031).isThumbnailAttachment(flags));
      if ("attachment" === type) {
        if (index < found.length) {
          let tmp10Result = tmp10(9031);
          if (null == tmp10Result.extractMediaFromAttachment(found[index], tmp7, index, messageChannel.guild_id)) {
            if (null != tmp15.url) {
              if ("" !== tmp15.url) {
                num2(4093).openURL(tmp15.url);
              }
            }
          }
        }
      }
      num2 = -1;
      if ("embed" === type) {
        if (null != embedIndex) {
          num2 = embedIndex;
          tmp10Result = tmp10(9031);
          const result = tmp10Result.extractMediaSourcesFromEmbed(tmp7, tmp12, tmp12.embeds[index], index, messageChannel.guild_id);
          let found2 = result;
          let tmp25 = tmp10;
          if (num2 < result.length) {
            tmp10(9031).setMediaSourcePortal(result[num2], portal);
            found2 = result;
            tmp25 = tmp10;
            const tmp10Result1 = tmp10(9031);
          }
        }
        if (-1 !== num2) {
          let tmp25Result = tmp25(9029);
          obj = { disableDownload: null, initialSources: null, initialIndex: null, originViewOrOriginLayout: null, analyticsSource: "Channel", channelId: null, contextName: null, contextIcon: null };
          obj[0] = tmp44;
          obj[1] = found2;
          obj[2] = num2;
          obj[3] = tapImageData.layout;
          obj[5] = messageChannel.id;
          let channelName;
          if (showContextName) {
            tmp25Result = tmp25(4989);
            channelName = tmp25Result.computeChannelName(messageChannel, closure_5, closure_4, false);
          }
          obj[6] = channelName;
          let channelIcon;
          if (showContextName) {
            channelIcon = tmp25(6870).getChannelIcon(messageChannel);
            const tmp25Result1 = tmp25(6870);
          }
          obj[7] = channelIcon;
          tmp25Result.openMediaModal(obj);
        }
      }
      if ("component" === type) {
        if (null == componentId) {
          return null;
        } else {
          if (null != embedId) {
            if ("" !== embedId) {
              const embeds = tmp12.embeds;
              const found1 = embeds.find((id) => id.id === embedId);
              if (found1 != null) {
                let components = found1.components;
              }
            }
            if (null != components) {
              if (0 !== components.length) {
                const tmp10Result2 = tmp10(9031);
                const result1 = tmp10Result2.extractMediaSourcesFromComponent(tmp7, components, messageChannel.guild_id, tmp10(4818).asComponentId(componentId), componentMediaIndex);
                if (null != result1) {
                  ({ sources, initialIndex: num2 } = result1);
                  tmp10(9031).setMediaSourcePortal(sources[num2], portal);
                  found2 = sources;
                  tmp25 = tmp10;
                  const tmp10Result4 = tmp10(9031);
                }
                const tmp10Result3 = tmp10(4818);
              }
            }
          }
          components = tmp12.components;
        }
      } else {
        const result2 = tmp10(9031).extractMediaSourcesFromMessage(tmp7, tmp12, messageChannel.guild_id);
        num2 = 0;
        found2 = result2;
        tmp25 = tmp10;
        if (0 < result2.length) {
          while (true) {
            tmp20 = embedId;
            let tmp21 = dependencyMap;
            let obj4 = embedId(9031);
            flattenSourceResult = obj4.flattenSource(result2[num2]);
            let tmp23 = num2;
            if (null != flattenSourceResult) {
              if (flattenSourceResult.accessoryType === type) {
                let mediaIndex = flattenSourceResult.mediaViewIndex;
                if (mediaIndex == null) {
                  mediaIndex = flattenSourceResult.mediaIndex;
                }
                if (mediaIndex === index) {
                  break;
                }
              }
            }
            num2 = num2 + 1;
            found2 = result2;
            tmp25 = tmp20;
            let tmp26 = tmp21;
          }
          if (flattenSourceResult.noCarousel) {
            const items = [result2[num2]];
            num2 = 0;
            let tmp20Result = tmp20(9031);
            tmp20Result.setMediaSourcePortal(items[0], portal);
            found2 = items;
            tmp25 = tmp20;
          } else {
            tmp20Result = tmp20(9031);
            tmp20Result.setMediaSourcePortal(result2[num2], portal);
            found2 = result2.filter((closure_1) => {
              const flattenSourceResult = embedId(closure_1_2[7]).flattenSource(closure_1);
              let tmp3 = !tmp2;
              if (!(null != flattenSourceResult && !flattenSourceResult.noCarousel)) {
                tmp3 = closure_1 >= arg1;
              }
              if (tmp3) {
                closure_1 = closure_1 - 1;
              }
              return null != flattenSourceResult && !flattenSourceResult.noCarousel;
            });
            tmp25 = tmp20;
          }
        }
        const tmp10Result5 = tmp10(9031);
      }
    } else {
      const first = tmp7.messageSnapshots[0];
      message = undefined;
      if (first != null) {
        message = first.message;
      }
      tmp12 = message;
    }
  } else {
    const obj2 = embedId(10775);
  }
};