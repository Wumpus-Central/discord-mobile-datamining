// discord_app/modules/messages/native/renderer/RowGeneratorUtils.tsx
import ThemesDefault from "Themes" /* 712 */;
import getSrcWithWidthAndHeightDefault from "getSrcWithWidthAndHeight" /* 1493 */;
import hexToRgba from "hexToRgba" /* 4223 */;
import createMinimalMessageRecord from "createMinimalMessageRecord" /* 4803 */;
import useCanManageGuildOfficialMessages from "useCanManageGuildOfficialMessages" /* 7232 */;
import closure_3 from "maybeApplyNoTextColorForLightCustomTheme" /* 4662 */;
import closure_4 from "ensureGuildLoaded" /* 1391 */;
import closure_5 from "createGuildRecordFromRust" /* 1910 */;
import MESSAGE_GROUP_SPACING from "MESSAGE_GROUP_SPACING" /* 4663 */;
import { SwipeActionsType } from "Changeset" /* 8158 */;
import ME from "ME" /* 676 */;
import createCacheKey from "createCacheKey" /* 4661 */;
import set from "set" /* 2 */;

require = arg1;
({ DEFAULT_GUILD_OFFICIAL_COLOR: closure_6, GUILD_OFFICIAL_HIGHLIGHT_ALPHA_COLOR: error } = MESSAGE_GROUP_SPACING);
({ MessageFlags: c9, MessageTypes: c10 } = ME);
const result = createCacheKey.experimental_createToken(() => hexToRgba.hexWithOpacity(ThemesDefault.unsafe_rawColors.BRAND_500, 0.1));
createCacheKey = { ephemeralBackgroundColor: ThemesDefault.colors.INTERACTIVE_BACKGROUND_ACTIVE, ephemeralGutterColor: ThemesDefault.colors.BACKGROUND_BRAND, giftIntentEphemeralBackgroundColor: result, mentionedBackgroundColor: ThemesDefault.colors.MESSAGE_MENTIONED_BACKGROUND_DEFAULT, mentionedGutterColor: ThemesDefault.unsafe_rawColors.YELLOW_300, automodBlockedBackgroundColor: ThemesDefault.colors.MESSAGE_AUTOMOD_BACKGROUND_DEFAULT, automodBlockedGutterColor: ThemesDefault.unsafe_rawColors.RED_345, editingColor: ThemesDefault.colors.MESSAGE_HIGHLIGHT_BACKGROUND_DEFAULT };
createCacheKey = createCacheKey.createNativeStyleProperties(createCacheKey);
const MediaManager = require("get ActivityIndicator").NativeModules.MediaManager;
let set = new Set(MediaManager.getConstants().supportedExtensions);
createCacheKey = {
  getImageSrc(proxy_url, width, height) {
    const endsWithResult = proxy_url.endsWith(".webp");
    let hasItem = !endsWithResult;
    if (!endsWithResult) {
      hasItem = !proxy_url.endsWith(".avif");
    }
    if (!hasItem) {
      hasItem = set.has("webp");
    }
    let flag = arg3;
    if (!hasItem) {
      flag = true;
    }
    let str3 = null;
    if (flag) {
      str3 = "png";
    }
    return getSrcWithWidthAndHeightDefault.getMobileOptimizedSrc(proxy_url, width, height, str3);
  },
  createBackgroundHighlight(message) {
    message = message.message;
    ({ isEditing, isAutomodBlockedMessage } = message);
    const tmp = createCacheKey(message.theme);
    if (isEditing) {
      let obj = { backgroundColor: null };
      obj[0] = tmp.editingColor;
      return obj;
    } else if (isAutomodBlockedMessage) {
      obj = { backgroundColor: null, gutterColor: null };
      ({ automodBlockedBackgroundColor: obj8[0], automodBlockedGutterColor: obj8[1] } = tmp);
      return obj;
    } else {
      if (message.hasFlag(constants.IS_GUILD_OFFICIAL)) {
        obj = useCanManageGuildOfficialMessages;
        if (obj.showGuildOfficialMessageGradient(officialMessageStyle.officialMessageStyle)) {
          channel = channel.getChannel(message.getChannelId());
          let guild_id;
          if (channel != null) {
            guild_id = channel.guild_id;
          }
          guild = guild.getGuild(guild_id);
          let tmp3Result = tmp3(7232);
          if (tmp3Result.isGuildOfficialMessagesEnabled(guild, "RowGeneratorUtils")) {
            let officialMessageColor;
            if (guild != null) {
              officialMessageColor = guild.officialMessageColor;
            }
            if (officialMessageColor == null) {
              officialMessageColor = closure_6;
            }
            if (message.mentioned) {
              let ephemeralGutterColor = tmp.mentionedGutterColor;
            } else {
              tmp3Result = tmp3(4803);
              if (tmp3Result.hasEphemeralAppearance(message)) {
                ephemeralGutterColor = tmp.ephemeralGutterColor;
              }
            }
            obj1 = { backgroundColor: null, gutterColor: null };
            obj1[0] = officialMessageColor | closure_7;
            obj1[1] = ephemeralGutterColor;
            return obj1;
          }
        }
      }
      if (message.mentioned) {
        let obj2 = { backgroundColor: null, gutterColor: null };
        ({ mentionedBackgroundColor: obj5[0], mentionedGutterColor: obj5[1] } = tmp);
        const tmp14 = obj2;
      } else {
        obj2 = createMinimalMessageRecord;
        if (obj2.hasEphemeralAppearance(message)) {
          const obj3 = { backgroundColor: null, gutterColor: null };
          obj3[0] = message.type === constants2.GIFTING_PROMPT ? tmp.giftIntentEphemeralBackgroundColor : tmp.ephemeralBackgroundColor;
          obj3[1] = tmp.ephemeralGutterColor;
        }
      }
      return tmp14;
    }
  },
  createSwipeActions(canReply, arg1) {
    if (!canReply) {
      return tmp.NONE;
    }
  }
};
const result1 = set.fileFinishedImporting("modules/messages/native/renderer/RowGeneratorUtils.tsx");

export default createCacheKey;
export const InviteEmbedBackground = { dark: "#313339", light: "#fafafa" };
export const resolveHighlightThemedColors = createCacheKey;