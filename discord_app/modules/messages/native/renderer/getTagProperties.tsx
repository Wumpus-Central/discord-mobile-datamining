// === Module 8252: getTagProperties ===

// Module 8252 (getTagProperties)
import obj132 from "obj132" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import MESSAGE_GROUP_SPACING from "MESSAGE_GROUP_SPACING" /* 4663 */;
import isPublicSystemMessage from "isPublicSystemMessage" /* 8253 */;
import isCrosspostDefault from "isCrosspost" /* 8255 */;
import registerAssetDefault from "registerAsset" /* 8257 */;

const Image = get_ActivityIndicator.Image;
const MessageTagTypes = MESSAGE_GROUP_SPACING.MessageTagTypes;
const result = obj132.fileFinishedImporting("modules/messages/native/renderer/getTagProperties.tsx");

export default function getTagProperties(arg0) {
  ({ message, isSystemDM } = arg0);
  if (isSystemDM === undefined) {
    isSystemDM = false;
  }
  ({ channel, colors } = arg0);
  const author = message.author;
  const isVerifiedBotResult = author.isVerifiedBot();
  let obj = isPublicSystemMessage;
  if (!obj.isPublicSystemMessage(message)) {
    if (!isSystemDM) {
      if (isCrosspostDefault(message)) {
        const intl2 = getSystemLocale.intl;
        let stringResult = intl2.string(getSystemLocale.t.PuJGuM);
        let SYSTEM_DM_TAG_SYSTEM_TYPE = MessageTagTypes.BOT_TAG_SERVER_TYPE;
        let flag = isVerifiedBotResult;
      } else {
        flag = isVerifiedBotResult;
        stringResult = null;
        if (message.author.bot) {
          const intl = getSystemLocale.intl;
          let uri;
          if (isVerifiedBotResult) {
            uri = Image.resolveAssetSource(registerAssetDefault).uri;
          }
          flag = isVerifiedBotResult;
          stringResult = intl.string(getSystemLocale.t["9RNkeF"]);
          const stringResult1 = intl.string(getSystemLocale.t["9RNkeF"]);
          const tmp5 = uri;
        }
      }
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
        const intl6 = getSystemLocale.intl;
        stringResult2 = intl6.string(getSystemLocale.t.fyE8sH);
      }
      obj = { tagText: null, tagAccessibilityLabel: null, tagVerified: null, tagTextColor: "Boolean", tagBackgroundColor: "alignItems", tagType: "<string:1052311553>", tagIconUrl: "<string:3488022530>", opTagText: "<string:2316959745>", opTagTextColor: "<string:1312358401>", opTagBackgroundColor: "<string:3487956993>" };
      obj[0] = stringResult;
      obj[1] = null;
      obj[2] = flag;
      obj[5] = SYSTEM_DM_TAG_SYSTEM_TYPE;
      obj[6] = tmp5;
      obj[7] = stringResult2;
      ({ opTagTextColor: obj3[8], opTagBackgroundColor: obj3[9] } = colors);
      return obj;
    } else {
      if (!tmp2Result.isPublicSystemMessage(message)) {
        if (!isSystemDM) {
          const intl4 = getSystemLocale.intl;
          const string = intl4.string;
          const t = getSystemLocale.t;
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
      const intl5 = getSystemLocale.intl;
      stringResult3 = intl5.string(getSystemLocale.t["7s687k"]);
      tmp2Result = isPublicSystemMessage;
    }
  }
  const intl3 = getSystemLocale.intl;
  stringResult = intl3.string(getSystemLocale.t.lKQ7Wt);
  SYSTEM_DM_TAG_SYSTEM_TYPE = MessageTagTypes.SYSTEM_DM_TAG_SYSTEM_TYPE;
  flag = true;
};