// === Module 17891: AuditLogActionIcon ===

// Module 17891 (AuditLogActionIcon)
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1177 */;
import ChatIcon from "ChatIcon" /* 5240 */;
import RobotIcon2 from "RobotIcon" /* 9673 */;
import _modDef17896 from "module_17896" /* 17896 */;
import _modDef17897 from "module_17897" /* 17897 */;
import _modDef17898 from "module_17898" /* 17898 */;
import noop from "module_19" /* 19 */;

require = fn;
function AuditIcons(action) {
  action = action.action;
  const tmp = closure_10();
  const tmp2 = hasOwnProperty(action);
  if (constants.CREATE === tmp2) {
    let tmp4 = _modDef17896;
  } else if (constants.UPDATE === tmp2) {
    tmp4 = _modDef17897;
  } else {
    tmp4 = null;
    if (constants.DELETE === tmp2) {
      tmp4 = _modDef17898;
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
  const items = [React6(RobotIcon, { size: "custom", style: tmp.iconComponent }), , ];
  obj3 = { style: null };
  const items1 = [, ];
  ({ actionImageOverlay: arr2[0], actionImage: arr2[1] } = tmp);
  obj3.style = items1;
  items[1] = React6(View, obj3);
  items[2] = React6(native.Icon, { style: tmp.actionImage, source: tmp4, disableColor: true });
  obj.children = items;
  return React7(View, obj);
}
const View = fn(17).View;
const AuditLogRecord = fn(17886);
({ getTargetType: closure_4, getActionType: hasOwnProperty } = AuditLogRecord);
const Constants = fn(1074);
({ AuditLogTargetTypes, AuditLogActionTypes: metroRequire, AuditLogActions: closure_7 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4722);
const obj2 = { actionImageContainer: { height: 24, width: 24 }, actionImageOverlay: null, iconComponent: null, actionImage: null };
let size = { borderRadius: nativeDefault.radii.round, width: 13, height: 13, bottom: 0, right: 0, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
obj2.actionImageOverlay = size;
obj2.iconComponent = { width: 22, height: 22 };
obj2.actionImage = { position: "absolute" };
let closure_10 = createStyles.createStyles(obj2);
let obj3 = { [ALL]: fn(17892).ListBulletsIcon, [CHANNEL]: fn(17834).ChannelListIcon, [CHANNEL_OVERWRITE]: fn(17834).ChannelListIcon, [EMOJI]: fn(8997).ReactionIcon, [GUILD]: fn(4676).CircleInformationIcon, [GUILD_PROFILE]: fn(4676).CircleInformationIcon, [INTEGRATION]: fn(15172).PuzzlePieceIcon, [INVITE]: fn(4664).LinkIcon, [ROLE]: fn(8902).FlagIcon, [USER]: fn(5258).GroupIcon, [WEBHOOK]: fn(17114).WebhookIcon, [STAGE_INSTANCE]: fn(5266).StageIcon, [GUILD_SCHEDULED_EVENT]: fn(10030).CalendarIcon, [GUILD_SCHEDULED_EVENT_EXCEPTION]: fn(10030).CalendarIcon, [THREAD]: fn(5242).ThreadIcon, [STICKER]: fn(10357).StickerIcon, [APPLICATION_COMMAND]: fn(11465).SlashBoxIcon, [AUTO_MODERATION_RULE]: fn(17114).WebhookIcon, [GUILD_SOUNDBOARD]: fn(12771).SoundboardIcon, [ONBOARDING_PROMPT]: fn(5258).GroupIcon, [GUILD_ONBOARDING]: fn(5258).GroupIcon, [HOME_SETTINGS]: fn(5258).GroupIcon, [GUILD_MEMBER_VERIFICATION]: fn(5258).GroupIcon, [VOICE_CHANNEL_STATUS]: fn(17834).ChannelListIcon, [GUILD_HOME]: fn(17894).HomeIcon, [UNKNOWN]: fn(11359).CircleQuestionIcon };
({ ALL, CHANNEL, CHANNEL_OVERWRITE, EMOJI, GUILD, GUILD_PROFILE, INTEGRATION, INVITE, ROLE, USER, WEBHOOK, STAGE_INSTANCE, GUILD_SCHEDULED_EVENT, GUILD_SCHEDULED_EVENT_EXCEPTION, THREAD, STICKER, APPLICATION_COMMAND, AUTO_MODERATION_RULE, GUILD_SOUNDBOARD, ONBOARDING_PROMPT, GUILD_ONBOARDING, HOME_SETTINGS, GUILD_MEMBER_VERIFICATION, VOICE_CHANNEL_STATUS, GUILD_HOME, UNKNOWN } = AuditLogTargetTypes);
size = fn(2);
const result = size.fileFinishedImporting("modules/guild_moderation/native/AuditLogActionIcon.tsx");

export default function AuditLogActionIcon(action) {
  const obj = { style: closure_10().actionImageContainer, children: React6(AuditIcons, { action: action.action }) };
  return React6(View, obj);
};