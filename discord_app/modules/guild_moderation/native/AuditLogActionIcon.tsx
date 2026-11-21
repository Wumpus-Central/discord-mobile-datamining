// === Module 19759: AuditLogActionIcon ===

// Module 19759 (AuditLogActionIcon)
import nativeDefault from "native" /* 575 */;
import native from "native" /* 1186 */;
import ChatIcon from "ChatIcon" /* 7672 */;
import RobotIcon2 from "RobotIcon" /* 12172 */;
import _modDef19764 from "module_19764" /* 19764 */;
import _modDef19765 from "module_19765" /* 19765 */;
import _modDef19766 from "module_19766" /* 19766 */;
import noop from "module_19" /* 19 */;

require = fn;
function AuditIcons(action) {
  action = action.action;
  const tmp = closure_10();
  const tmp2 = hasOwnProperty(action);
  if (constants.CREATE === tmp2) {
    let tmp4 = _modDef19764;
  } else if (constants.UPDATE === tmp2) {
    tmp4 = _modDef19765;
  } else {
    tmp4 = null;
    if (constants.DELETE === tmp2) {
      tmp4 = _modDef19766;
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
const AuditLogRecord = fn(19754);
({ getTargetType: closure_4, getActionType: hasOwnProperty } = AuditLogRecord);
const Constants = fn(1071);
({ AuditLogTargetTypes, AuditLogActionTypes: closure_6, AuditLogActions: metroImportDefault } = Constants);
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4913);
const obj2 = { actionImageContainer: { height: 24, width: 24 }, actionImageOverlay: null, iconComponent: null, actionImage: null };
let size = { borderRadius: nativeDefault.radii.round, width: 13, height: 13, bottom: 0, right: 0, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
obj2.actionImageOverlay = size;
obj2.iconComponent = { width: 22, height: 22 };
obj2.actionImage = { position: "absolute" };
let closure_10 = createStyles.createStyles(obj2);
let obj3 = { [ALL]: fn(19760).ListBulletsIcon, [CHANNEL]: fn(19696).ChannelListIcon, [CHANNEL_OVERWRITE]: fn(19696).ChannelListIcon, [EMOJI]: fn(9489).ReactionIcon, [GUILD]: fn(5617).CircleInformationIcon, [GUILD_PROFILE]: fn(5617).CircleInformationIcon, [INTEGRATION]: fn(18940).PuzzlePieceIcon, [INVITE]: fn(5609).LinkIcon, [ROLE]: fn(10269).FlagIcon, [USER]: fn(7038).GroupIcon, [WEBHOOK]: fn(18836).WebhookIcon, [STAGE_INSTANCE]: fn(7620).StageIcon, [GUILD_SCHEDULED_EVENT]: fn(8048).CalendarIcon, [GUILD_SCHEDULED_EVENT_EXCEPTION]: fn(8048).CalendarIcon, [THREAD]: fn(7674).ThreadIcon, [STICKER]: fn(11128).StickerIcon, [APPLICATION_COMMAND]: fn(12104).SlashBoxIcon, [AUTO_MODERATION_RULE]: fn(18836).WebhookIcon, [GUILD_SOUNDBOARD]: fn(13419).SoundboardIcon, [ONBOARDING_PROMPT]: fn(7038).GroupIcon, [GUILD_ONBOARDING]: fn(7038).GroupIcon, [HOME_SETTINGS]: fn(7038).GroupIcon, [GUILD_MEMBER_VERIFICATION]: fn(7038).GroupIcon, [VOICE_CHANNEL_STATUS]: fn(19696).ChannelListIcon, [GUILD_HOME]: fn(19762).HomeIcon, [UNKNOWN]: fn(9449).CircleQuestionIcon };
({ ALL, CHANNEL, CHANNEL_OVERWRITE, EMOJI, GUILD, GUILD_PROFILE, INTEGRATION, INVITE, ROLE, USER, WEBHOOK, STAGE_INSTANCE, GUILD_SCHEDULED_EVENT, GUILD_SCHEDULED_EVENT_EXCEPTION, THREAD, STICKER, APPLICATION_COMMAND, AUTO_MODERATION_RULE, GUILD_SOUNDBOARD, ONBOARDING_PROMPT, GUILD_ONBOARDING, HOME_SETTINGS, GUILD_MEMBER_VERIFICATION, VOICE_CHANNEL_STATUS, GUILD_HOME, UNKNOWN } = AuditLogTargetTypes);
size = fn(2);
const result = size.fileFinishedImporting("modules/guild_moderation/native/AuditLogActionIcon.tsx");

export default function AuditLogActionIcon(action) {
  const obj = { style: closure_10().actionImageContainer, children: React5(AuditIcons, { action: action.action }) };
  return React5(View, obj);
};