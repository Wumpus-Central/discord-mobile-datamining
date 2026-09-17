// === Module 17797: AuditLogActionIcon ===

// Module 17797 (AuditLogActionIcon)
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1177 */;
import ChatIcon from "ChatIcon" /* 5158 */;
import RobotIcon2 from "RobotIcon" /* 9589 */;
import _modDef17802 from "module_17802" /* 17802 */;
import _modDef17803 from "module_17803" /* 17803 */;
import _modDef17804 from "module_17804" /* 17804 */;
import noop from "module_19" /* 19 */;

require = fn;
function AuditIcons(action) {
  action = action.action;
  const tmp = closure_10();
  const tmp2 = hasOwnProperty(action);
  if (constants.CREATE === tmp2) {
    let tmp4 = _modDef17802;
  } else if (constants.UPDATE === tmp2) {
    tmp4 = _modDef17803;
  } else {
    tmp4 = null;
    if (constants.DELETE === tmp2) {
      tmp4 = _modDef17804;
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
const AuditLogRecord = fn(17787);
({ getTargetType: closure_4, getActionType: hasOwnProperty } = AuditLogRecord);
const Constants = fn(1074);
({ AuditLogTargetTypes, AuditLogActionTypes: metroRequire, AuditLogActions: closure_7 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4640);
const obj2 = { actionImageContainer: { height: 24, width: 24 }, actionImageOverlay: null, iconComponent: null, actionImage: null };
let size = { borderRadius: nativeDefault.radii.round, width: 13, height: 13, bottom: 0, right: 0, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
obj2.actionImageOverlay = size;
obj2.iconComponent = { width: 22, height: 22 };
obj2.actionImage = { position: "absolute" };
let closure_10 = createStyles.createStyles(obj2);
let obj3 = { [ALL]: fn(17798).ListBulletsIcon, [CHANNEL]: fn(17771).ChannelListIcon, [CHANNEL_OVERWRITE]: fn(17771).ChannelListIcon, [EMOJI]: fn(8913).ReactionIcon, [GUILD]: fn(4594).CircleInformationIcon, [GUILD_PROFILE]: fn(4594).CircleInformationIcon, [INTEGRATION]: fn(15078).PuzzlePieceIcon, [INVITE]: fn(4582).LinkIcon, [ROLE]: fn(8819).FlagIcon, [USER]: fn(5176).GroupIcon, [WEBHOOK]: fn(16974).WebhookIcon, [STAGE_INSTANCE]: fn(5184).StageIcon, [GUILD_SCHEDULED_EVENT]: fn(9936).CalendarIcon, [GUILD_SCHEDULED_EVENT_EXCEPTION]: fn(9936).CalendarIcon, [THREAD]: fn(5160).ThreadIcon, [STICKER]: fn(10263).StickerIcon, [APPLICATION_COMMAND]: fn(11367).SlashBoxIcon, [AUTO_MODERATION_RULE]: fn(16974).WebhookIcon, [GUILD_SOUNDBOARD]: fn(12680).SoundboardIcon, [ONBOARDING_PROMPT]: fn(5176).GroupIcon, [GUILD_ONBOARDING]: fn(5176).GroupIcon, [HOME_SETTINGS]: fn(5176).GroupIcon, [GUILD_MEMBER_VERIFICATION]: fn(5176).GroupIcon, [VOICE_CHANNEL_STATUS]: fn(17771).ChannelListIcon, [GUILD_HOME]: fn(17800).HomeIcon, [UNKNOWN]: fn(11266).CircleQuestionIcon };
({ ALL, CHANNEL, CHANNEL_OVERWRITE, EMOJI, GUILD, GUILD_PROFILE, INTEGRATION, INVITE, ROLE, USER, WEBHOOK, STAGE_INSTANCE, GUILD_SCHEDULED_EVENT, GUILD_SCHEDULED_EVENT_EXCEPTION, THREAD, STICKER, APPLICATION_COMMAND, AUTO_MODERATION_RULE, GUILD_SOUNDBOARD, ONBOARDING_PROMPT, GUILD_ONBOARDING, HOME_SETTINGS, GUILD_MEMBER_VERIFICATION, VOICE_CHANNEL_STATUS, GUILD_HOME, UNKNOWN } = AuditLogTargetTypes);
size = fn(2);
const result = size.fileFinishedImporting("modules/guild_moderation/native/AuditLogActionIcon.tsx");

export default function AuditLogActionIcon(action) {
  const obj = { style: closure_10().actionImageContainer, children: React6(AuditIcons, { action: action.action }) };
  return React6(View, obj);
};