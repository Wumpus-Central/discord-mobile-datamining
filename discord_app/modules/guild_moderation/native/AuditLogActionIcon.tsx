// discord_app/modules/guild_moderation/native/AuditLogActionIcon.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import Button from "../../../design/void/native.tsx";
import ChatIcon from "../../../design/components/Icon/native/redesign/generated/ChatIcon.tsx";
import RobotIcon2 from "../../../design/components/Icon/native/redesign/generated/RobotIcon.tsx";
import registerAssetDefault from "../../../../_runtime/16773_registerAsset.js";
import registerAssetDefault2 from "../../../../_runtime/16774_registerAsset.js";
import registerAssetDefault3 from "../../../../_runtime/16775_registerAsset.js";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import getTargetType from "../../../records/AuditLogRecord.tsx";
import ME from "../../../Constants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
function AuditIcons(action) {
  action = action.action;
  const tmp = callback4();
  const tmp2 = callback(action);
  if (constants.CREATE === tmp2) {
    let tmp4 = registerAssetDefault;
  } else if (tmp3.UPDATE === tmp2) {
    tmp4 = registerAssetDefault2;
  } else {
    tmp4 = null;
    if (tmp3.DELETE === tmp2) {
      tmp4 = registerAssetDefault3;
    }
  }
  if (action === constants2.MESSAGE_DELETE) {
    let RobotIcon = ChatIcon.ChatIcon;
  } else {
    if (action !== tmp12.AUTO_MODERATION_BLOCK_MESSAGE) {
      if (action !== tmp12.AUTO_MODERATION_FLAG_TO_CHANNEL) {
        if (action !== tmp12.AUTO_MODERATION_USER_COMMUNICATION_DISABLED) {
          if (action !== tmp12.AUTO_MODERATION_QUARANTINE_USER) {
            RobotIcon = obj1[tmp11];
          }
        }
      }
    }
    RobotIcon = RobotIcon2.RobotIcon;
  }
  let obj = { style: tmp.actionImageContainer, children: null };
  obj = { size: "custom", style: tmp.iconComponent };
  const items = [callback2(RobotIcon, obj), , ];
  const items1 = [, ];
  ({ actionImageOverlay: arr2[0], actionImage: arr2[1] } = tmp);
  items[1] = callback2(View, { style: items1 });
  obj = { style: tmp.actionImage, source: tmp4, disableColor: true };
  items[2] = callback2(Button.Icon, obj);
  obj[1] = items;
  return callback3(View, obj);
}
noopAll;
({ getTargetType: c4, getActionType: c5 } = getTargetType);
({ AuditLogTargetTypes, AuditLogActionTypes: closure_6, AuditLogActions: error } = ME);
({ jsx: closure_8, jsxs: c9 } = jsxProd);
createCacheKey = { actionImageContainer: { height: 24, width: 24 }, actionImageOverlay: null, iconComponent: null, actionImage: null };
createCacheKey = { borderRadius: ThemesDefault.radii.round, width: 13, height: 13, bottom: 0, right: 0, backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { width: 22, height: 22 };
createCacheKey[3] = { position: "absolute" };
let closure_10 = createCacheKey.createStyles(createCacheKey);
const obj1 = { [ALL]: require("ListBulletsIcon").ListBulletsIcon, [CHANNEL]: require("ChannelListIcon").ChannelListIcon, [CHANNEL_OVERWRITE]: require("ChannelListIcon").ChannelListIcon, [EMOJI]: require("ReactionIcon").ReactionIcon, [GUILD]: require("CircleInformationIcon").CircleInformationIcon, [GUILD_PROFILE]: require("CircleInformationIcon").CircleInformationIcon, [INTEGRATION]: require("PuzzlePieceIcon").PuzzlePieceIcon, [INVITE]: require("LinkIcon").LinkIcon, [ROLE]: require("FlagIcon").FlagIcon, [USER]: require("GroupIcon").GroupIcon, [WEBHOOK]: require("WebhookIcon").WebhookIcon, [STAGE_INSTANCE]: require("StageIcon").StageIcon, [GUILD_SCHEDULED_EVENT]: require("CalendarIcon").CalendarIcon, [GUILD_SCHEDULED_EVENT_EXCEPTION]: require("CalendarIcon").CalendarIcon, [THREAD]: require("ThreadIcon").ThreadIcon, [STICKER]: require("StickerIcon").StickerIcon, [APPLICATION_COMMAND]: require("SlashBoxIcon").SlashBoxIcon, [AUTO_MODERATION_RULE]: require("WebhookIcon").WebhookIcon, [GUILD_SOUNDBOARD]: require("SoundboardIcon").SoundboardIcon, [ONBOARDING_PROMPT]: require("GroupIcon").GroupIcon, [GUILD_ONBOARDING]: require("GroupIcon").GroupIcon, [HOME_SETTINGS]: require("GroupIcon").GroupIcon, [GUILD_MEMBER_VERIFICATION]: require("GroupIcon").GroupIcon, [VOICE_CHANNEL_STATUS]: require("ChannelListIcon").ChannelListIcon, [GUILD_HOME]: require("HomeIcon").HomeIcon, [UNKNOWN]: require("CircleQuestionIcon").CircleQuestionIcon };
({ ALL, CHANNEL, CHANNEL_OVERWRITE, EMOJI, GUILD, GUILD_PROFILE, INTEGRATION, INVITE, ROLE, USER, WEBHOOK, STAGE_INSTANCE, GUILD_SCHEDULED_EVENT, GUILD_SCHEDULED_EVENT_EXCEPTION, THREAD, STICKER, APPLICATION_COMMAND, AUTO_MODERATION_RULE, GUILD_SOUNDBOARD, ONBOARDING_PROMPT, GUILD_ONBOARDING, HOME_SETTINGS, GUILD_MEMBER_VERIFICATION, VOICE_CHANNEL_STATUS, GUILD_HOME, UNKNOWN } = AuditLogTargetTypes);
const result = require("set").fileFinishedImporting("modules/guild_moderation/native/AuditLogActionIcon.tsx");

export default function AuditLogActionIcon(action) {
  obj = { style: callback4().actionImageContainer, children: callback2(AuditIcons, obj) };
  obj = { action: action.action };
  return callback2(View, obj);
};