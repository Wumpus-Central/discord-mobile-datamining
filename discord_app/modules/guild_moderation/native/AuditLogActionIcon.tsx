// === Module 16470: AuditIcons ===

// Module 16470 (AuditIcons)
import "StickerIcon";
import { View } from "CalendarIcon";
import getTargetType from "getTargetType";
import ME from "ME";
import jsxProd from "SoundboardIcon";
import createCacheKey from "createCacheKey";

let ALL;
let APPLICATION_COMMAND;
let AUTO_MODERATION_RULE;
let AuditLogTargetTypes;
let CHANNEL;
let CHANNEL_OVERWRITE;
let EMOJI;
let GUILD;
let GUILD_HOME;
let GUILD_MEMBER_VERIFICATION;
let GUILD_ONBOARDING;
let GUILD_PROFILE;
let GUILD_SCHEDULED_EVENT;
let GUILD_SCHEDULED_EVENT_EXCEPTION;
let GUILD_SOUNDBOARD;
let HOME_SETTINGS;
let INTEGRATION;
let INVITE;
let ONBOARDING_PROMPT;
let ROLE;
let STAGE_INSTANCE;
let STICKER;
let THREAD;
let UNKNOWN;
let USER;
let VOICE_CHANNEL_STATUS;
let WEBHOOK;
let c4;
let c5;
let c9;
let closure_6;
let error;
let metroImportAll;
const require = arg1;
function AuditIcons(action) {
  action = action.action;
  const tmp = createCacheKey();
  const tmp2 = callback(action);
  if (constants.CREATE === tmp2) {
    let tmp4 = importDefault(16475);
  } else if (tmp3.UPDATE === tmp2) {
    tmp4 = importDefault(16476);
  } else {
    tmp4 = null;
    if (tmp3.DELETE === tmp2) {
      tmp4 = importDefault(16477);
    }
  }
  if (action === constants2.MESSAGE_DELETE) {
    let RobotIcon = require(4752) /* ChatIcon */.ChatIcon;
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
    RobotIcon = require(9210) /* RobotIcon */.RobotIcon;
  }
  let obj = { style: tmp.actionImageContainer, children: null };
  obj = { size: "custom", style: tmp.iconComponent };
  const items = [callback2(RobotIcon, obj), , ];
  const items1 = [, ];
  ({ actionImageOverlay: arr2[0], actionImage: arr2[1] } = tmp);
  items[1] = callback2(View, { style: items1 });
  obj = { style: tmp.actionImage, source: tmp4, disableColor: true };
  items[2] = callback2(require(1297) /* Button */.Icon, obj);
  obj[1] = items;
  return callback3(View, obj);
}
({ getTargetType: c4, getActionType: c5 } = getTargetType);
({ AuditLogTargetTypes, AuditLogActionTypes: closure_6, AuditLogActions: error } = ME);
({ jsx: metroImportAll, jsxs: c9 } = jsxProd);
createCacheKey = { actionImageContainer: { height: 24, width: 24 }, actionImageOverlay: null, iconComponent: null, actionImage: null };
createCacheKey = { borderRadius: require("Themes").radii.round, width: 13, height: 13, bottom: 0, right: 0, backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { width: 22, height: 22 };
createCacheKey[3] = { position: "absolute" };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const obj1 = { [ALL]: require("ListBulletsIcon").ListBulletsIcon, [CHANNEL]: require("ChannelListIcon").ChannelListIcon, [CHANNEL_OVERWRITE]: require("ChannelListIcon").ChannelListIcon, [EMOJI]: require("ReactionIcon").ReactionIcon, [GUILD]: require("CircleInformationIcon").CircleInformationIcon, [GUILD_PROFILE]: require("CircleInformationIcon").CircleInformationIcon, [INTEGRATION]: require("PuzzlePieceIcon").PuzzlePieceIcon, [INVITE]: require("LinkIcon").LinkIcon, [ROLE]: require("FlagIcon").FlagIcon, [USER]: require("GroupIcon").GroupIcon, [WEBHOOK]: require("WebhookIcon").WebhookIcon, [STAGE_INSTANCE]: require("StageIcon").StageIcon, [GUILD_SCHEDULED_EVENT]: require("CalendarIcon").CalendarIcon, [GUILD_SCHEDULED_EVENT_EXCEPTION]: require("CalendarIcon").CalendarIcon, [THREAD]: require("ThreadIcon").ThreadIcon, [STICKER]: require("StickerIcon").StickerIcon, [APPLICATION_COMMAND]: require("SlashBoxIcon").SlashBoxIcon, [AUTO_MODERATION_RULE]: require("WebhookIcon").WebhookIcon, [GUILD_SOUNDBOARD]: require("SoundboardIcon").SoundboardIcon, [ONBOARDING_PROMPT]: require("GroupIcon").GroupIcon, [GUILD_ONBOARDING]: require("GroupIcon").GroupIcon, [HOME_SETTINGS]: require("GroupIcon").GroupIcon, [GUILD_MEMBER_VERIFICATION]: require("GroupIcon").GroupIcon, [VOICE_CHANNEL_STATUS]: require("ChannelListIcon").ChannelListIcon, [GUILD_HOME]: require("HomeIcon").HomeIcon, [UNKNOWN]: require("CircleQuestionIcon").CircleQuestionIcon };
({ ALL, CHANNEL, CHANNEL_OVERWRITE, EMOJI, GUILD, GUILD_PROFILE, INTEGRATION, INVITE, ROLE, USER, WEBHOOK, STAGE_INSTANCE, GUILD_SCHEDULED_EVENT, GUILD_SCHEDULED_EVENT_EXCEPTION, THREAD, STICKER, APPLICATION_COMMAND, AUTO_MODERATION_RULE, GUILD_SOUNDBOARD, ONBOARDING_PROMPT, GUILD_ONBOARDING, HOME_SETTINGS, GUILD_MEMBER_VERIFICATION, VOICE_CHANNEL_STATUS, GUILD_HOME, UNKNOWN } = AuditLogTargetTypes);
const result = require("getTargetType").fileFinishedImporting("modules/guild_moderation/native/AuditLogActionIcon.tsx");

export default function AuditLogActionIcon(action) {
  obj = { style: createCacheKey().actionImageContainer, children: callback2(AuditIcons, obj) };
  obj = { action: action.action };
  return callback2(View, obj);
};