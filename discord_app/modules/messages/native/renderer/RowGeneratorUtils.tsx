// === Module 8256: RowGeneratorUtils ===

// Module 8256 (RowGeneratorUtils)
import nativeDefault from "native" /* 576 */;
import utils_ImageUtilsDefault from "utils/ImageUtils" /* 1477 */;
import ColorUtils from "ColorUtils" /* 4489 */;
import MessageRecordUtils from "MessageRecordUtils" /* 4863 */;
import GuildOfficialMessageUtils from "GuildOfficialMessageUtils" /* 7381 */;
import AccessibilityStore from "AccessibilityStore" /* 4632 */;
import ChannelStore from "ChannelStore" /* 1958 */;
import GuildStore from "GuildStore" /* 1980 */;

require = fn;
const MessageConstants = fn(4633);
({ DEFAULT_GUILD_OFFICIAL_COLOR: metroRequire, GUILD_OFFICIAL_HIGHLIGHT_ALPHA_COLOR: closure_7 } = MessageConstants);
const SwipeActionsType = fn(8069).SwipeActionsType;
const Constants = fn(1074);
({ MessageFlags: closure_9, MessageTypes: c10 } = Constants);
let createStyles = fn(4640);
const result = createStyles.experimental_createToken(() => ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.BRAND_500, 0.1));
createStyles = fn(4640);
const nativeStyleProperties = createStyles.createNativeStyleProperties({ ephemeralBackgroundColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_ACTIVE, ephemeralGutterColor: nativeDefault.colors.BACKGROUND_BRAND, giftIntentEphemeralBackgroundColor: result, mentionedBackgroundColor: nativeDefault.colors.MESSAGE_MENTIONED_BACKGROUND_DEFAULT, mentionedGutterColor: nativeDefault.unsafe_rawColors.YELLOW_300, automodBlockedBackgroundColor: nativeDefault.colors.MESSAGE_AUTOMOD_BACKGROUND_DEFAULT, automodBlockedGutterColor: nativeDefault.unsafe_rawColors.RED_345, editingColor: nativeDefault.colors.MESSAGE_HIGHLIGHT_BACKGROUND_DEFAULT });
const MediaManager = fn(17).NativeModules.MediaManager;
const set = new Set(MediaManager.getConstants().supportedExtensions);
const size = fn(2);
const result1 = size.fileFinishedImporting("modules/messages/native/renderer/RowGeneratorUtils.tsx");

export default {
  getImageSrc(proxy_url, width, height, arg3) {
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
    return utils_ImageUtilsDefault.getMobileOptimizedSrc(proxy_url, width, height, str3);
  },
  createBackgroundHighlight(message) {
    message = message.message;
    ({ isEditing, isAutomodBlockedMessage } = message);
    const tmp = nativeStyleProperties(message.theme);
    if (isEditing) {
      const obj2 = { backgroundColor: tmp.editingColor };
      return obj2;
    } else if (isAutomodBlockedMessage) {
      ({ automodBlockedBackgroundColor: obj8.backgroundColor, automodBlockedGutterColor: obj8.gutterColor } = tmp);
      return { backgroundColor: null, gutterColor: null };
    } else {
      if (message.hasFlag(constants.IS_GUILD_OFFICIAL)) {
        if (obj.showGuildOfficialMessageGradient(AccessibilityStore.officialMessageStyle)) {
          const channel = ChannelStore.getChannel(message.getChannelId());
          let guild_id;
          if (channel != null) {
            guild_id = channel.guild_id;
          }
          const guild = GuildStore.getGuild(guild_id);
          if (tmp3Result.isGuildOfficialMessagesEnabled(guild, "RowGeneratorUtils")) {
            let officialMessageColor;
            if (guild != null) {
              officialMessageColor = guild.officialMessageColor;
            }
            if (officialMessageColor == null) {
              officialMessageColor = timestampProducer;
            }
            if (message.mentioned) {
              let ephemeralGutterColor = tmp.mentionedGutterColor;
            } else {
              if (tmp3Result2.hasEphemeralAppearance(message)) {
                ephemeralGutterColor = tmp.ephemeralGutterColor;
              }
              tmp3Result2 = MessageRecordUtils;
            }
            const obj6 = { backgroundColor: officialMessageColor | React5, gutterColor: ephemeralGutterColor };
            return obj6;
          }
          tmp3Result = GuildOfficialMessageUtils;
        }
        obj = GuildOfficialMessageUtils;
      }
      if (message.mentioned) {
        ({ mentionedBackgroundColor: obj5.backgroundColor, mentionedGutterColor: obj5.gutterColor } = tmp);
        const obj7 = { backgroundColor: null, gutterColor: null };
        const tmp14 = { backgroundColor: null, gutterColor: null };
      } else {
        if (obj3.hasEphemeralAppearance(message)) {
          const obj9 = { backgroundColor: message.type === constants2.GIFTING_PROMPT ? tmp.giftIntentEphemeralBackgroundColor : tmp.ephemeralBackgroundColor, gutterColor: tmp.ephemeralGutterColor };
        }
        obj3 = MessageRecordUtils;
      }
      return tmp14;
    }
  },
  createSwipeActions(canReply, arg1) {
    if (!canReply) {
      return SwipeActionsType.NONE;
    }
  }
};
export const InviteEmbedBackground = { dark: "#313339", light: "#fafafa" };
export const resolveHighlightThemedColors = nativeStyleProperties;