// discord_app/modules/messages/native/renderer/getTagProperties.tsx
import { Image } from "get ActivityIndicator";
import { MessageTagTypes } from "MESSAGE_GROUP_SPACING";
import { isPublicSystemMessage } from "../../../public_guilds/PublicGuildsUtils.tsx";
import { isCrosspost } from "../../isCrosspost.tsx";

const result = require("isPublicSystemMessage").fileFinishedImporting("modules/messages/native/renderer/getTagProperties.tsx");

export default function getTagProperties(arg0) {
  let channel;
  let colors;
  let isSystemDM;
  let message;
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
      if (isCrosspost(message)) {
        const intl2 = tmp2(1236).intl;
        let stringResult = intl2.string(tmp2(1236).t.PuJGuM);
        let SYSTEM_DM_TAG_SYSTEM_TYPE = MessageTagTypes.BOT_TAG_SERVER_TYPE;
        let flag = isVerifiedBotResult;
      } else {
        flag = isVerifiedBotResult;
        stringResult = null;
        if (message.author.bot) {
          const intl = tmp2(1236).intl;
          let uri;
          if (isVerifiedBotResult) {
            uri = Image.resolveAssetSource(tmp4(8085)).uri;
          }
          flag = isVerifiedBotResult;
          stringResult = intl.string(tmp2(1236).t["9RNkeF"]);
          const stringResult1 = intl.string(tmp2(1236).t["9RNkeF"]);
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
        const intl6 = tmp2(1236).intl;
        stringResult2 = intl6.string(tmp2(1236).t.fyE8sH);
      }
      obj = { tagText: null, tagAccessibilityLabel: null, tagVerified: null, tagTextColor: "Boolean", tagBackgroundColor: "add", tagType: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000007854562309725305, tagIconUrl: -33390466905060710000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, opTagText: -0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000007296780991884167, opTagTextColor: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002649572103959116, opTagBackgroundColor: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000355024749901963 };
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
          const intl4 = tmp2(1236).intl;
          const string = intl4.string;
          const t = tmp2(1236).t;
          if (tmp14) {
            let stringResult3 = string(t["39trQT"]);
          } else if (flag) {
            stringResult3 = string(t.g76OcH);
          } else {
            stringResult3 = string(t.qwJHjo);
          }
          tmp14 = isCrosspost(message);
        }
      }
      const intl5 = tmp2(1236).intl;
      stringResult3 = intl5.string(tmp2(1236).t["7s687k"]);
      tmp2Result = tmp2(8081);
    }
  }
  const intl3 = tmp2(1236).intl;
  stringResult = intl3.string(tmp2(1236).t.lKQ7Wt);
  SYSTEM_DM_TAG_SYSTEM_TYPE = MessageTagTypes.SYSTEM_DM_TAG_SYSTEM_TYPE;
  flag = true;
};