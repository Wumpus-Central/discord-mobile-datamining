// discord_app/modules/messages/native/renderer/RowGeneratorUtils.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import utils_ImageUtilsDefault from "../../../../utils/native/ImageUtils.tsx";
import ColorUtils from "../../../../utils/ColorUtils.tsx";
import MessageRecordUtils from "../../MessageRecordUtils.tsx";
import GuildOfficialMessageUtils from "../../GuildOfficialMessageUtils.tsx";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";
import ChannelStore from "../../../../stores/ChannelStore.tsx";
import GuildStore from "../../../../stores/GuildStore.tsx";

require = fn;
const MessageConstants = fn(4553);
({ DEFAULT_GUILD_OFFICIAL_COLOR: metroRequire, GUILD_OFFICIAL_HIGHLIGHT_ALPHA_COLOR: closure_7 } = MessageConstants);
const SwipeActionsType = fn(7933).SwipeActionsType;
const Constants = fn(1074);
({ MessageFlags: closure_9, MessageTypes: c10 } = Constants);
let createStyles = fn(4560);
const result = createStyles.experimental_createToken(() =>
  ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.BRAND_500, 0.1),
);
fn(4560);
createStyles = {
  ephemeralBackgroundColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_ACTIVE,
  ephemeralGutterColor: nativeDefault.colors.BACKGROUND_BRAND,
  giftIntentEphemeralBackgroundColor: result,
  mentionedBackgroundColor: nativeDefault.colors.MESSAGE_MENTIONED_BACKGROUND_DEFAULT,
  mentionedGutterColor: nativeDefault.unsafe_rawColors.YELLOW_300,
  automodBlockedBackgroundColor: nativeDefault.colors.MESSAGE_AUTOMOD_BACKGROUND_DEFAULT,
  automodBlockedGutterColor: nativeDefault.unsafe_rawColors.RED_345,
  editingColor: nativeDefault.colors.MESSAGE_HIGHLIGHT_BACKGROUND_DEFAULT,
};
createStyles.createNativeStyleProperties(createStyles);
const MediaManager = fn(17).NativeModules.MediaManager;
const set = new Set(MediaManager.getConstants().supportedExtensions);
createStyles = {
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
    const tmp = createStyles(message.theme);
    if (isEditing) {
      let obj = { backgroundColor: tmp.editingColor };
      return obj;
    } else if (isAutomodBlockedMessage) {
      obj = { backgroundColor: null, gutterColor: null };
      ({ automodBlockedBackgroundColor: obj8.backgroundColor, automodBlockedGutterColor: obj8.gutterColor } = tmp);
      return obj;
    } else {
      if (message.hasFlag(constants.IS_GUILD_OFFICIAL)) {
        obj = GuildOfficialMessageUtils;
        if (obj.showGuildOfficialMessageGradient(AccessibilityStore.officialMessageStyle)) {
          const channel = ChannelStore.getChannel(message.getChannelId());
          let guild_id;
          if (channel != null) {
            guild_id = channel.guild_id;
          }
          const guild = GuildStore.getGuild(guild_id);
          let tmp3Result = GuildOfficialMessageUtils;
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
              tmp3Result = MessageRecordUtils;
              if (tmp3Result.hasEphemeralAppearance(message)) {
                ephemeralGutterColor = tmp.ephemeralGutterColor;
              }
            }
            const obj1 = { backgroundColor: officialMessageColor | React5, gutterColor: ephemeralGutterColor };
            return obj1;
          }
        }
      }
      if (message.mentioned) {
        let obj2 = { backgroundColor: null, gutterColor: null };
        ({ mentionedBackgroundColor: obj5.backgroundColor, mentionedGutterColor: obj5.gutterColor } = tmp);
        const tmp14 = obj2;
      } else {
        obj2 = MessageRecordUtils;
        if (obj2.hasEphemeralAppearance(message)) {
          const obj3 = {
            backgroundColor:
              message.type === constants2.GIFTING_PROMPT
                ? tmp.giftIntentEphemeralBackgroundColor
                : tmp.ephemeralBackgroundColor,
            gutterColor: tmp.ephemeralGutterColor,
          };
        }
      }
      return tmp14;
    }
  },
  createSwipeActions(canReply, arg1) {
    if (!canReply) {
      return SwipeActionsType.NONE;
    }
  },
};
const size = fn(2);
const result1 = size.fileFinishedImporting("modules/messages/native/renderer/RowGeneratorUtils.tsx");

export default createStyles;
export const InviteEmbedBackground = { dark: "#313339", light: "#fafafa" };
export const resolveHighlightThemedColors = createStyles;
