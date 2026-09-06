// === Module 8033: getTagProperties ===

// Module 8033 (getTagProperties)
import _mod17 from "module_17" /* 17 */;
import MessageConstants from "MessageConstants" /* 4553 */;
import PublicGuildsUtils from "PublicGuildsUtils" /* 8034 */;
import isCrosspostDefault from "isCrosspost" /* 8036 */;
import size from "module_2" /* 2 */;

const Image = _mod17.Image;
const MessageTagTypes = MessageConstants.MessageTagTypes;
const result = size.fileFinishedImporting("modules/messages/native/renderer/getTagProperties.tsx");

export default function getTagProperties(arg0) {
  ({ message, isSystemDM } = arg0);
  if (isSystemDM === undefined) {
    isSystemDM = false;
  }
  ({ channel, colors } = arg0);
  const author = message.author;
  const isVerifiedBotResult = author.isVerifiedBot();
  let obj = PublicGuildsUtils;
  if (!obj.isPublicSystemMessage(message)) {
    if (!isSystemDM) {
      if (isCrosspostDefault(message)) {
        const intl2 = tmp2(1114).intl;
        let stringResult = intl2.string(tmp2(1114).t.PuJGuM);
        let SYSTEM_DM_TAG_SYSTEM_TYPE = MessageTagTypes.BOT_TAG_SERVER_TYPE;
        let flag = isVerifiedBotResult;
      } else {
        flag = isVerifiedBotResult;
        stringResult = null;
        if (message.author.bot) {
          const intl = tmp2(1114).intl;
          let uri;
          if (isVerifiedBotResult) {
            uri = Image.resolveAssetSource(tmp4(8038)).uri;
          }
          flag = isVerifiedBotResult;
          stringResult = intl.string(tmp2(1114).t["9RNkeF"]);
          const stringResult1 = intl.string(tmp2(1114).t["9RNkeF"]);
          const tmp5 = uri;
        }
      }
      tmp4 = importDefault;
    }
    if (null == stringResult) {
      let ownerId;
      if (channel != null) {
        ownerId = channel.ownerId;
      }
      let tmp18 = ownerId === message.author.id;
      if (tmp18) {
        let isForumPostResult;
        if (channel != null) {
          isForumPostResult = channel.isForumPost();
        }
        tmp18 = isForumPostResult;
      }
      let stringResult2 = null;
      if (tmp18) {
        const intl6 = tmp2(1114).intl;
        stringResult2 = intl6.string(tmp2(1114).t.fyE8sH);
      }
      obj = { tagText: stringResult, tagAccessibilityLabel: null, tagVerified: flag, tagTextColor: "Boolean", tagBackgroundColor: "accessible", tagType: SYSTEM_DM_TAG_SYSTEM_TYPE, tagIconUrl: tmp5, opTagText: stringResult2, opTagTextColor: "isArray", opTagBackgroundColor: "shouldObscureSpoiler" };
      ({ opTagTextColor: obj3.opTagTextColor, opTagBackgroundColor: obj3.opTagBackgroundColor } = colors);
      return obj;
    } else {
      if (!tmp2Result.isPublicSystemMessage(message)) {
        if (!isSystemDM) {
          const intl4 = tmp2(1114).intl;
          const string = intl4.string;
          const t = tmp2(1114).t;
          if (tmp14) {
            let stringResult3 = string(t["39trQT"]);
          } else if (flag) {
            stringResult3 = string(t.g76OcH);
          } else {
            stringResult3 = string(t.qwJHjo);
          }
          tmp14 = isCrosspostDefault(message);
        }
      }
      const intl5 = tmp2(1114).intl;
      stringResult3 = intl5.string(tmp2(1114).t["7s687k"]);
      tmp2Result = tmp2(8034);
    }
  }
  const intl3 = tmp2(1114).intl;
  stringResult = intl3.string(tmp2(1114).t.lKQ7Wt);
  SYSTEM_DM_TAG_SYSTEM_TYPE = MessageTagTypes.SYSTEM_DM_TAG_SYSTEM_TYPE;
  flag = true;
};