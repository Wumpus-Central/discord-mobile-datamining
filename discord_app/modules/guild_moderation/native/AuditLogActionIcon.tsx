// === Module 20494: AuditLogActionIcon ===

// Module 20494 (AuditLogActionIcon)
import nativeDefault from "native" /* 575 */;
import native from "native" /* 1187 */;
import ChatIcon from "ChatIcon" /* 8069 */;
import RobotIcon2 from "RobotIcon" /* 12682 */;
import _modDef20499 from "module_20499" /* 20499 */;
import _modDef20500 from "module_20500" /* 20500 */;
import _modDef20501 from "module_20501" /* 20501 */;
import noop from "module_19" /* 19 */;

require = fn;
function AuditIcons(action) {
  action = action.action;
  const tmp = closure_10();
  const tmp2 = hasOwnProperty(action);
  if (constants.CREATE === tmp2) {
    let tmp4 = _modDef20499;
  } else if (constants.UPDATE === tmp2) {
    tmp4 = _modDef20500;
  } else {
    tmp4 = null;
    if (constants.DELETE === tmp2) {
      tmp4 = _modDef20501;
    }
  }
  if (action === constants2.MESSAGE_DELETE) {
    let RobotIcon = ChatIcon.ChatIcon;
  } else {
    if (action !== constants2.AUTO_MODERATION_BLOCK_MESSAGE) {
      if (action !== constants2.AUTO_MODERATION_FLAG_TO_CHANNEL) {
        if (action !== constants2.AUTO_MODERATION_USER_COMMUNICATION_DISABLED) {
          if (action !== constants2.AUTO_MODERATION_QUARANTINE_USER) {
            RobotIcon = obj3[tmp11];
          }
        }
      }
    }
    RobotIcon = RobotIcon2.RobotIcon;
  }
  const obj = { style: tmp.actionImageContainer, children: null };
  items = [React5(RobotIcon, { size: "custom", style: tmp.iconComponent }), , ];
  obj3 = { style: null };
  const items1 = [, ];
  ({ actionImageOverlay: arr2[0], actionImage: arr2[1] } = tmp);
  obj3.style = items1;
  items[1] = React5(View, obj3);
  items[2] = React5(native.Icon, { style: tmp.actionImage, source: tmp4, disableColor: true });
  obj.children = items;
  return React6(View, obj);
}
const View = fn(17).View;
const AuditLogRecord = fn(20489);
({ getTargetType: closure_4, getActionType: hasOwnProperty } = AuditLogRecord);
const Constants = fn(1072);
({ AuditLogTargetTypes, AuditLogActionTypes: closure_6, AuditLogActions: metroImportDefault } = Constants);
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(5306);
const obj2 = { actionImageContainer: { height: 24, width: 24 }, actionImageOverlay: null, iconComponent: null, actionImage: null };
let size = { borderRadius: nativeDefault.radii.round, width: 13, height: 13, bottom: 0, right: 0, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
obj2.actionImageOverlay = size;
obj2.iconComponent = { width: 22, height: 22 };
obj2.actionImage = { position: "absolute" };
let closure_10 = createStyles.createStyles(obj2);
let obj3 = { [ALL]: fn(20495).ListBulletsIcon, [CHANNEL]: fn(20431).ChannelListIcon, [CHANNEL_OVERWRITE]: fn(20431).ChannelListIcon, [EMOJI]: fn(10409).ReactionIcon, [GUILD]: fn(6037).CircleInformationIcon, [GUILD_PROFILE]: fn(6037).CircleInformationIcon, [INTEGRATION]: fn(19679).PuzzlePieceIcon, [INVITE]: fn(6029).LinkIcon, [ROLE]: fn(11328).FlagIcon, [USER]: fn(7436).GroupIcon, [WEBHOOK]: fn(19570).WebhookIcon, [STAGE_INSTANCE]: fn(8017).StageIcon, [GUILD_SCHEDULED_EVENT]: fn(8457).CalendarIcon, [GUILD_SCHEDULED_EVENT_EXCEPTION]: fn(8457).CalendarIcon, [THREAD]: fn(8071).ThreadIcon, [STICKER]: fn(10737).StickerIcon, [APPLICATION_COMMAND]: fn(12576).SlashBoxIcon, [AUTO_MODERATION_RULE]: fn(19570).WebhookIcon, [GUILD_SOUNDBOARD]: fn(10726).SoundboardIcon, [ONBOARDING_PROMPT]: fn(7436).GroupIcon, [GUILD_ONBOARDING]: fn(7436).GroupIcon, [HOME_SETTINGS]: fn(7436).GroupIcon, [GUILD_MEMBER_VERIFICATION]: fn(7436).GroupIcon, [VOICE_CHANNEL_STATUS]: fn(20431).ChannelListIcon, [GUILD_HOME]: fn(20497).HomeIcon, [UNKNOWN]: fn(10059).CircleQuestionIcon };
({ ALL, CHANNEL, CHANNEL_OVERWRITE, EMOJI, GUILD, GUILD_PROFILE, INTEGRATION, INVITE, ROLE, USER, WEBHOOK, STAGE_INSTANCE, GUILD_SCHEDULED_EVENT, GUILD_SCHEDULED_EVENT_EXCEPTION, THREAD, STICKER, APPLICATION_COMMAND, AUTO_MODERATION_RULE, GUILD_SOUNDBOARD, ONBOARDING_PROMPT, GUILD_ONBOARDING, HOME_SETTINGS, GUILD_MEMBER_VERIFICATION, VOICE_CHANNEL_STATUS, GUILD_HOME, UNKNOWN } = AuditLogTargetTypes);
size = fn(2);
const result = size.fileFinishedImporting("modules/guild_moderation/native/AuditLogActionIcon.tsx");

export default function AuditLogActionIcon(action) {
  const obj = { style: closure_10().actionImageContainer, children: React5(AuditIcons, { action: action.action }) };
  return React5(View, obj);
};