// === Module 11176: handleMessagesTapImage ===

// Module 11176 (handleMessagesTapImage)
import Constants from "Constants" /* 1085 */;
import LinkingDefault from "Linking" /* 4571 */;
import MediaSourceUtil from "MediaSourceUtil" /* 7950 */;
import ReferencedMessageStore from "ReferencedMessageStore" /* 7115 */;
import RelationshipStore from "RelationshipStore" /* 4525 */;
import UserStore from "UserStore" /* 1377 */;
import size from "module_2" /* 2 */;

let importDefault;

const MessageTypes = Constants.MessageTypes;
let result = size.fileFinishedImporting("modules/messages/native/handlers/handleMessagesTapImage.tsx");

export const handleMessagesTapImage = function handleMessagesTapImage(tapImageData) {
  let allowWithinModal;
  let channelIcon;
  let channelName;
  let closure_1;
  let componentId;
  let componentMediaIndex;
  let embedId;
  let embedIndex;
  let flattenSourceResult;
  let index;
  let message;
  let messageChannel;
  let portal;
  let selectedChannelId;
  let showContextName;
  let sources;
  let type;
  tapImageData = tapImageData.tapImageData;
  ({ index, type, portal, embedIndex, componentId, componentMediaIndex, embedId } = tapImageData);
  ({ message, messageChannel, showContextName } = tapImageData);
  importDefault = undefined;
  const layout = tapImageData.layout;
  ({ allowWithinModal, selectedChannelId } = tapImageData);
  if (null != portal) {
    let obj = embedId(7953);
    obj.markPortalAlive(portal);
  }
  if (true === allowWithinModal) {
    if ("attachment" !== type) {
      if ("embed" !== type) {
        if ("sticker" !== type) {
          if ("component" !== type) {
            const _Error = Error;
            const _HermesInternal = HermesInternal;
            const self = this;
            const self2 = this;
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
    let type1;
    if (messageReference != null) {
      type1 = messageReference.type;
    }
    let tmp12 = tmp7;
    if (type1 !== embedId(1108).MessageReferenceTypes.FORWARD) {
      let found2;
      let tmp25;
      const attachments = tmp7.attachments;
      const found = attachments.filter((item) => {
        const obj = embedId(dependencyMap[7]);
        return !obj.isThumbnailAttachment(item);
      });
      if ("attachment" === type) {
        if (index < found.length) {
          const tmp10Result = embedId(7950);
          if (null == tmp10Result.extractMediaFromAttachment(found[index], tmp7, index, messageChannel.guild_id)) {
            if (null != found[index].url) {
              if ("" !== found[index].url) {
                const obj13 = LinkingDefault;
                obj13.openURL(found[index].url);
              }
            }
          }
        }
      }
      importDefault = -1;
      if ("embed" === type) {
        if (null != embedIndex) {
          importDefault = embedIndex;
          const tmp38 = tmp12.embeds[index];
          const tmp10Result7 = embedId(7950);
          const result = tmp10Result7.extractMediaSourcesFromEmbed(tmp7, tmp12, tmp38, index, messageChannel.guild_id);
          found2 = result;
          tmp25 = embedId;
          if (importDefault < result.length) {
            const tmp10Result8 = embedId(7950);
            tmp10Result8.setMediaSourcePortal(result[importDefault], portal);
            found2 = result;
            tmp25 = embedId;
          }
        }
        if (-1 !== importDefault) {
          const obj3 = { disableDownload: tmp46, initialSources: found2, initialIndex: importDefault, originViewOrOriginLayout: layout, analyticsSource: "Channel", channelId: messageChannel.id, contextName: channelName, contextIcon: channelIcon };
          channelName = undefined;
          const openMediaModal = tmp25(7944).openMediaModal;
          tmp25(7944);
          if (showContextName) {
            const tmp25Result3 = tmp25(5049);
            channelName = tmp25Result3.computeChannelName(messageChannel, UserStore, RelationshipStore, false);
          }
          channelIcon = undefined;
          if (showContextName) {
            const tmp25Result4 = tmp25(5819);
            channelIcon = tmp25Result4.getChannelIcon(messageChannel);
          }
          openMediaModal(obj3);
        }
      }
      if ("component" === type) {
        if (null == componentId) {
          return null;
        } else {
          if (null != embedId) {
            let components;
            if ("" !== embedId) {
              const embeds = tmp12.embeds;
              const found1 = embeds.find((id) => id.id === embedId);
              if (found1 != null) {
                components = found1.components;
              }
            }
            if (null != components) {
              if (0 !== components.length) {
                const extractMediaSourcesFromComponent = embedId(7950).extractMediaSourcesFromComponent;
                const guild_id = messageChannel.guild_id;
                const tmp10Result9 = embedId(7950);
                const tmp10Result10 = embedId(5129);
                const result1 = extractMediaSourcesFromComponent(tmp7, components, guild_id, tmp10Result10.asComponentId(componentId), componentMediaIndex);
                if (null != result1) {
                  ({ sources, initialIndex: closure_1 } = result1);
                  const tmp10Result11 = embedId(7950);
                  tmp10Result11.setMediaSourcePortal(sources[importDefault], portal);
                  found2 = sources;
                  tmp25 = embedId;
                }
              }
            }
          }
          components = tmp12.components;
        }
      } else {
        const tmp10Result12 = embedId(7950);
        const result2 = tmp10Result12.extractMediaSourcesFromMessage(tmp7, tmp12, messageChannel.guild_id);
        let num2 = 0;
        found2 = result2;
        tmp25 = embedId;
        if (0 < result2.length) {
          while (true) {
            let obj4 = embedId(7950);
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
            const tmp20Result = embedId(7950);
            tmp20Result.setMediaSourcePortal(items[0], portal);
            found2 = items;
            tmp25 = embedId;
          } else {
            importDefault = num2;
            const tmp20Result2 = embedId(7950);
            tmp20Result2.setMediaSourcePortal(result2[num2], portal);
            found2 = result2.filter((item, index) => {
              const obj = MediaSourceUtil;
              const flattenSourceResult = obj.flattenSource(item);
              const tmp3 = !tmp2 && closure_1 >= index;
              if (tmp3) {
                closure_1 = closure_1 - 1;
              }
              return null != flattenSourceResult && !flattenSourceResult.noCarousel;
            });
            tmp25 = embedId;
          }
        }
      }
    } else {
      const first = tmp7.messageSnapshots[0];
      let message1;
      if (first != null) {
        message1 = first.message;
      }
      tmp12 = message1;
    }
  } else {
    embedId(11174);
  }
};