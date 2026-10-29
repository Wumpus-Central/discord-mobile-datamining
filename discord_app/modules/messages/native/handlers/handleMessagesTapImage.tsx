// discord_app/modules/messages/native/handlers/handleMessagesTapImage.tsx
import LinkingDefault from "../../../../lib/native/Linking.tsx";
import MediaSourceUtil from "../../../media_viewer/native/MediaSourceUtil.tsx";
import ReferencedMessageStore from "../../../replies/ReferencedMessageStore.tsx";
import RelationshipStore from "../../../../stores/RelationshipStore.tsx";
import UserStore from "../../../../stores/UserStore.tsx";

require = fn;
const MessageTypes = fn(1084).MessageTypes;
const size = fn(2);
let result = size.fileFinishedImporting("modules/messages/native/handlers/handleMessagesTapImage.tsx");

export function handleMessagesTapImage(tapImageData) {
  let flattenSourceResult;
  tapImageData = tapImageData.tapImageData;
  ({ index, type, portal, embedIndex, componentId, componentMediaIndex, embedId } = tapImageData);
  ({ message, messageChannel, showContextName } = tapImageData);
  importDefault = undefined;
  ({ allowWithinModal, selectedChannelId } = tapImageData);
  if (null != portal) {
    embedId(8800).markPortalAlive(portal);
    const obj = embedId(8800);
  }
  if (true === allowWithinModal) {
    if ("attachment" !== type) {
      if ("embed" !== type) {
        if ("embedThumbnail" !== type) {
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
    if (type1 !== embedId(1107).MessageReferenceTypes.FORWARD) {
      const attachments = tmp7.attachments;
      const found = attachments.filter((item) => !embedId(8797).isThumbnailAttachment(item));
      if ("attachment" === type) {
        if (index < found.length) {
          const tmp10Result = embedId(8797);
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
          const tmp10Result9 = embedId(8797);
          const result = tmp10Result9.extractMediaSourcesFromEmbed(
            tmp7,
            tmp12,
            tmp12.embeds[index],
            index,
            messageChannel.guild_id,
          );
          let found2 = result;
          let tmp25 = embedId;
          if (importDefault < result.length) {
            embedId(8797).setMediaSourcePortal(result[importDefault], portal);
            found2 = result;
            tmp25 = embedId;
            const tmp10Result10 = embedId(8797);
          }
        }
        if (-1 !== importDefault) {
          const obj3 = {
            disableDownload: tmp47,
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
            const tmp25Result3 = tmp25(5641);
            channelName = tmp25Result3.computeChannelName(messageChannel, UserStore, RelationshipStore, false);
          }
          obj3.contextName = channelName;
          let channelIcon;
          if (showContextName) {
            channelIcon = tmp25(8561).getChannelIcon(messageChannel);
            const tmp25Result4 = tmp25(8561);
          }
          obj3.contextIcon = channelIcon;
          tmp25(8791).openMediaModal(obj3);
          const tmp25Result = tmp25(8791);
        }
      }
      if ("embedThumbnail" === type) {
        let result1;
        if (null != tmp12.embeds[index]) {
          const tmp10Result11 = embedId(8797);
          result1 = tmp10Result11.extractThumbnailMediaFromEmbed(tmp32, tmp7, tmp12, index, messageChannel.guild_id);
        }
        if (null != result1) {
          const items = [result1];
          importDefault = 0;
          embedId(8797).setMediaSourcePortal(result1, portal);
          found2 = items;
          tmp25 = embedId;
          const tmp10Result12 = embedId(8797);
        }
      } else if ("component" === type) {
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
                const tmp10Result13 = embedId(8797);
                const result2 = tmp10Result13.extractMediaSourcesFromComponent(
                  tmp7,
                  components,
                  messageChannel.guild_id,
                  embedId(6061).asComponentId(componentId),
                  componentMediaIndex,
                );
                if (null != result2) {
                  ({ sources, initialIndex: closure_1 } = result2);
                  embedId(8797).setMediaSourcePortal(sources[importDefault], portal);
                  found2 = sources;
                  tmp25 = embedId;
                  const tmp10Result15 = embedId(8797);
                }
                const tmp10Result14 = embedId(6061);
              }
            }
          }
          components = tmp12.components;
        }
      } else {
        const result3 = embedId(8797).extractMediaSourcesFromMessage(tmp7, tmp12, messageChannel.guild_id);
        let num2 = 0;
        found2 = result3;
        tmp25 = embedId;
        if (0 < result3.length) {
          while (true) {
            let obj4 = embedId(8797);
            flattenSourceResult = obj4.flattenSource(result3[num2]);
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
            found2 = result3;
            tmp25 = embedId;
          }
          if (flattenSourceResult.noCarousel) {
            const items1 = [result3[num2]];
            importDefault = 0;
            embedId(8797).setMediaSourcePortal(items1[0], portal);
            found2 = items1;
            tmp25 = embedId;
            const tmp20Result = embedId(8797);
          } else {
            importDefault = num2;
            embedId(8797).setMediaSourcePortal(result3[num2], portal);
            found2 = result3.filter((item, index) => {
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
            const tmp20Result2 = embedId(8797);
          }
        }
        const tmp10Result16 = embedId(8797);
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
    embedId(10087);
  }
}
