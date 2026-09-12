// === Module 17661: AuditLogActionIcon ===

// Module 17661 (AuditLogActionIcon)
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1178 */;
import ChatIcon from "ChatIcon" /* 5152 */;
import RobotIcon2 from "RobotIcon" /* 9565 */;
import _modDef17666 from "module_17666" /* 17666 */;
import _modDef17667 from "module_17667" /* 17667 */;
import _modDef17668 from "module_17668" /* 17668 */;
import noop from "module_19" /* 19 */;

require = fn;
function AuditIcons(action) {
  action = action.action;
  const tmp = closure_10();
  const tmp2 = hasOwnProperty(action);
  if (constants.CREATE === tmp2) {
    let tmp4 = _modDef17666;
  } else if (constants.UPDATE === tmp2) {
    tmp4 = _modDef17667;
  } else {
    tmp4 = null;
    if (constants.DELETE === tmp2) {
      tmp4 = _modDef17668;
    }
  }
  if (action === constants2.MESSAGE_DELETE) {
    let RobotIcon = ChatIcon.ChatIcon;
  } else {
    if (action !== constants2.AUTO_MODERATION_BLOCK_MESSAGE) {
      if (action !== constants2.AUTO_MODERATION_FLAG_TO_CHANNEL) {
        if (action !== constants2.AUTO_MODERATION_USER_COMMUNICATION_DISABLED) {
          if (action !== constants2.AUTO_MODERATION_QUARANTINE_USER) {
            RobotIcon = createStyles[tmp11];
          }
        }
      }
    }
    RobotIcon = RobotIcon2.RobotIcon;
  }
  let obj = { style: tmp.actionImageContainer, children: null };
  obj = { size: "custom", style: tmp.iconComponent };
  const items = [React6(RobotIcon, obj), , ];
  obj = { style: null };
  const items1 = [, ];
  ({ actionImageOverlay: arr2[0], actionImage: arr2[1] } = tmp);
  obj.style = items1;
  items[1] = React6(View, obj);
  items[2] = React6(native.Icon, { style: tmp.actionImage, source: tmp4, disableColor: true });
  obj.children = items;
  return React7(View, obj);
}
const View = fn(17).View;
const AuditLogRecord = fn(17651);
({ getTargetType: closure_4, getActionType: hasOwnProperty } = AuditLogRecord);
const Constants = fn(1074);
({ AuditLogTargetTypes, AuditLogActionTypes: metroRequire, AuditLogActions: closure_7 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
fn(4636);
let createStyles = { actionImageContainer: { height: 24, width: 24 }, actionImageOverlay: null, iconComponent: null, actionImage: null };
let size = { borderRadius: nativeDefault.radii.round, width: 13, height: 13, bottom: 0, right: 0, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
createStyles.actionImageOverlay = size;
createStyles.iconComponent = { width: 22, height: 22 };
createStyles.actionImage = { position: "absolute" };
let closure_10 = createStyles.createStyles(createStyles);
createStyles = { [ALL]: fn(17662).ListBulletsIcon, [CHANNEL]: fn(17635).ChannelListIcon, [CHANNEL_OVERWRITE]: fn(17635).ChannelListIcon, [EMOJI]: fn(8883).ReactionIcon, [GUILD]: fn(4591).CircleInformationIcon, [GUILD_PROFILE]: fn(4591).CircleInformationIcon, [INTEGRATION]: fn(15043).PuzzlePieceIcon, [INVITE]: fn(4579).LinkIcon, [ROLE]: fn(8787).FlagIcon, [USER]: fn(5170).GroupIcon, [WEBHOOK]: fn(16838).WebhookIcon, [STAGE_INSTANCE]: fn(5178).StageIcon, [GUILD_SCHEDULED_EVENT]: fn(9915).CalendarIcon, [GUILD_SCHEDULED_EVENT_EXCEPTION]: fn(9915).CalendarIcon, [THREAD]: fn(5154).ThreadIcon, [STICKER]: fn(10242).StickerIcon, [APPLICATION_COMMAND]: fn(11346).SlashBoxIcon, [AUTO_MODERATION_RULE]: fn(16838).WebhookIcon, [GUILD_SOUNDBOARD]: fn(12657).SoundboardIcon, [ONBOARDING_PROMPT]: fn(5170).GroupIcon, [GUILD_ONBOARDING]: fn(5170).GroupIcon, [HOME_SETTINGS]: fn(5170).GroupIcon, [GUILD_MEMBER_VERIFICATION]: fn(5170).GroupIcon, [VOICE_CHANNEL_STATUS]: fn(17635).ChannelListIcon, [GUILD_HOME]: fn(17664).HomeIcon, [UNKNOWN]: fn(11239).CircleQuestionIcon };
({ ALL, CHANNEL, CHANNEL_OVERWRITE, EMOJI, GUILD, GUILD_PROFILE, INTEGRATION, INVITE, ROLE, USER, WEBHOOK, STAGE_INSTANCE, GUILD_SCHEDULED_EVENT, GUILD_SCHEDULED_EVENT_EXCEPTION, THREAD, STICKER, APPLICATION_COMMAND, AUTO_MODERATION_RULE, GUILD_SOUNDBOARD, ONBOARDING_PROMPT, GUILD_ONBOARDING, HOME_SETTINGS, GUILD_MEMBER_VERIFICATION, VOICE_CHANNEL_STATUS, GUILD_HOME, UNKNOWN } = AuditLogTargetTypes);
size = fn(2);
const result = size.fileFinishedImporting("modules/guild_moderation/native/AuditLogActionIcon.tsx");

export default function AuditLogActionIcon(action) {
  let obj = { style: closure_10().actionImageContainer, children: null };
  obj = { action: action.action };
  obj.children = React6(AuditIcons, obj);
  return React6(View, obj);
};