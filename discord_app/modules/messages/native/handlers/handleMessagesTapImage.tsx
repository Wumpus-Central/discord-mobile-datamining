// discord_app/modules/messages/native/handlers/handleMessagesTapImage.tsx
import LinkingDefault from "../../../../lib/native/Linking.tsx";
import MediaSourceUtil from "../../../media_viewer/native/MediaSourceUtil.tsx";
import ReferencedMessageStore from "../../../replies/ReferencedMessageStore.tsx";
import RelationshipStore from "../../../../stores/RelationshipStore.tsx";
import UserStore from "../../../../stores/UserStore.tsx";

require = fn;
const MessageTypes = fn(1074).MessageTypes;
const size = fn(2);
let result = size.fileFinishedImporting("modules/messages/native/handlers/handleMessagesTapImage.tsx");

export const handleMessagesTapImage = function handleMessagesTapImage(tapImageData) {
  let flattenSourceResult;
  tapImageData = tapImageData.tapImageData;
  ({ index, type, portal, embedIndex, componentId, componentMediaIndex, embedId } = tapImageData);
  ({ message, messageChannel, showContextName } = tapImageData);
  importDefault = undefined;
  ({ allowWithinModal, selectedChannelId } = tapImageData);
  if (null != portal) {
    let obj = embedId(8267);
    obj.markPortalAlive(portal);
  }
  if (true === allowWithinModal) {
    if ("attachment" !== type) {
      if ("embed" !== type) {
        if ("sticker" !== type) {
          if ("component" !== type) {
            const _Error = Error;
            const _HermesInternal = HermesInternal;
            const error = new Error("Unsupported thumbnail type: " + type);
            throw error;
          }
        }
      }
    }
    let tmp7 = message;
    if (message.type === MessageTypes.THREAD_STARTER_MESSAGE) {
      tmp7 = message;
      if (null != message.messageReference) {
        const message2 = ReferencedMessageStore.getMessageByReference(message.messageReference).message;
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
    if (type !== embedId(1096).MessageReferenceTypes.FORWARD) {
      const attachments = tmp7.attachments;
      const found = attachments.filter((item) => !embedId(8263).isThumbnailAttachment(item));
      if ("attachment" === type) {
        if (index < found.length) {
          let tmp10Result = embedId(8263);
          if (null == tmp10Result.extractMediaFromAttachment(found[index], tmp7, index, messageChannel.guild_id)) {
            if (null != tmp15.url) {
              if ("" !== tmp15.url) {
                LinkingDefault.openURL(tmp15.url);
              }
            }
          }
        }
      }
      importDefault = -1;
      if ("embed" === type) {
        if (null != embedIndex) {
          importDefault = embedIndex;
          tmp10Result = embedId(8263);
          const result = tmp10Result.extractMediaSourcesFromEmbed(
            tmp7,
            tmp12,
            tmp12.embeds[index],
            index,
            messageChannel.guild_id,
          );
          let found2 = result;
          let tmp25 = embedId;
          if (importDefault < result.length) {
            embedId(8263).setMediaSourcePortal(result[importDefault], portal);
            found2 = result;
            tmp25 = embedId;
            const tmp10Result1 = embedId(8263);
          }
        }
        if (-1 !== importDefault) {
          let tmp25Result = tmp25(8261);
          obj = {
            disableDownload: tmp44,
            initialSources: found2,
            initialIndex: importDefault,
            originViewOrOriginLayout: tapImageData.layout,
            analyticsSource: "Channel",
            channelId: messageChannel.id,
            contextName: null,
            contextIcon: null,
          };
          let channelName;
          if (showContextName) {
            tmp25Result = tmp25(4713);
            channelName = tmp25Result.computeChannelName(messageChannel, UserStore, RelationshipStore, false);
          }
          obj.contextName = channelName;
          let channelIcon;
          if (showContextName) {
            channelIcon = tmp25(5028).getChannelIcon(messageChannel);
            const tmp25Result1 = tmp25(5028);
          }
          obj.contextIcon = channelIcon;
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
                const tmp10Result2 = embedId(8263);
                const result1 = tmp10Result2.extractMediaSourcesFromComponent(
                  tmp7,
                  components,
                  messageChannel.guild_id,
                  embedId(4792).asComponentId(componentId),
                  componentMediaIndex,
                );
                if (null != result1) {
                  ({ sources, initialIndex: closure_1 } = result1);
                  embedId(8263).setMediaSourcePortal(sources[importDefault], portal);
                  found2 = sources;
                  tmp25 = embedId;
                  const tmp10Result4 = embedId(8263);
                }
                const tmp10Result3 = embedId(4792);
              }
            }
          }
          components = tmp12.components;
        }
      } else {
        const result2 = embedId(8263).extractMediaSourcesFromMessage(tmp7, tmp12, messageChannel.guild_id);
        let num2 = 0;
        found2 = result2;
        tmp25 = embedId;
        if (0 < result2.length) {
          while (true) {
            let obj4 = embedId(8263);
            flattenSourceResult = obj4.flattenSource(result2[num2]);
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
            tmp25 = embedId;
          }
          if (flattenSourceResult.noCarousel) {
            const items = [result2[num2]];
            importDefault = 0;
            let tmp20Result = embedId(8263);
            tmp20Result.setMediaSourcePortal(items[0], portal);
            found2 = items;
            tmp25 = embedId;
          } else {
            importDefault = num2;
            tmp20Result = embedId(8263);
            tmp20Result.setMediaSourcePortal(result2[num2], portal);
            found2 = result2.filter((item, index) => {
              const flattenSourceResult = MediaSourceUtil.flattenSource(item);
              let tmp3 = !tmp2;
              if (!(null != flattenSourceResult && !flattenSourceResult.noCarousel)) {
                tmp3 = closure_1 >= index;
              }
              if (tmp3) {
                closure_1 = closure_1 - 1;
              }
              return null != flattenSourceResult && !flattenSourceResult.noCarousel;
            });
            tmp25 = embedId;
          }
        }
        const tmp10Result5 = embedId(8263);
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
    embedId(11544);
  }
};
