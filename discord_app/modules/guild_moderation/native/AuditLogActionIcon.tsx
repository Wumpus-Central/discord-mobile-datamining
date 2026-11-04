// === Module 19996: AuditLogActionIcon ===

// Module 19996 (AuditLogActionIcon)
import nativeDefault from "native" /* 575 */;
import native from "native" /* 1187 */;
import ChatIcon from "ChatIcon" /* 8784 */;
import RobotIcon2 from "RobotIcon" /* 12303 */;
import _modDef20001 from "module_20001" /* 20001 */;
import _modDef20002 from "module_20002" /* 20002 */;
import _modDef20003 from "module_20003" /* 20003 */;
import noop from "module_19" /* 19 */;

require = fn;
function AuditIcons(action) {
  action = action.action;
  const tmp = closure_10();
  const tmp2 = hasOwnProperty(action);
  if (constants.CREATE === tmp2) {
    let tmp4 = _modDef20001;
  } else if (constants.UPDATE === tmp2) {
    tmp4 = _modDef20002;
  } else {
    tmp4 = null;
    if (constants.DELETE === tmp2) {
      tmp4 = _modDef20003;
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
const AuditLogRecord = fn(19991);
({ getTargetType: closure_4, getActionType: hasOwnProperty } = AuditLogRecord);
const Constants = fn(1072);
({ AuditLogTargetTypes, AuditLogActionTypes: closure_6, AuditLogActions: metroImportDefault } = Constants);
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(5141);
const obj2 = { actionImageContainer: { height: 24, width: 24 }, actionImageOverlay: null, iconComponent: null, actionImage: null };
let size = { borderRadius: nativeDefault.radii.round, width: 13, height: 13, bottom: 0, right: 0, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
obj2.actionImageOverlay = size;
obj2.iconComponent = { width: 22, height: 22 };
obj2.actionImage = { position: "absolute" };
let closure_10 = createStyles.createStyles(obj2);
let obj3 = { [ALL]: fn(19997).ListBulletsIcon, [CHANNEL]: fn(19933).ChannelListIcon, [CHANNEL_OVERWRITE]: fn(19933).ChannelListIcon, [EMOJI]: fn(9599).ReactionIcon, [GUILD]: fn(5869).CircleInformationIcon, [GUILD_PROFILE]: fn(5869).CircleInformationIcon, [INTEGRATION]: fn(19179).PuzzlePieceIcon, [INVITE]: fn(5861).LinkIcon, [ROLE]: fn(10262).FlagIcon, [USER]: fn(8802).GroupIcon, [WEBHOOK]: fn(19084).WebhookIcon, [STAGE_INSTANCE]: fn(8810).StageIcon, [GUILD_SCHEDULED_EVENT]: fn(9260).CalendarIcon, [GUILD_SCHEDULED_EVENT_EXCEPTION]: fn(9260).CalendarIcon, [THREAD]: fn(8786).ThreadIcon, [STICKER]: fn(11225).StickerIcon, [APPLICATION_COMMAND]: fn(11688).SlashBoxIcon, [AUTO_MODERATION_RULE]: fn(19084).WebhookIcon, [GUILD_SOUNDBOARD]: fn(14320).SoundboardIcon, [ONBOARDING_PROMPT]: fn(8802).GroupIcon, [GUILD_ONBOARDING]: fn(8802).GroupIcon, [HOME_SETTINGS]: fn(8802).GroupIcon, [GUILD_MEMBER_VERIFICATION]: fn(8802).GroupIcon, [VOICE_CHANNEL_STATUS]: fn(19933).ChannelListIcon, [GUILD_HOME]: fn(19999).HomeIcon, [UNKNOWN]: fn(14728).CircleQuestionIcon };
({ ALL, CHANNEL, CHANNEL_OVERWRITE, EMOJI, GUILD, GUILD_PROFILE, INTEGRATION, INVITE, ROLE, USER, WEBHOOK, STAGE_INSTANCE, GUILD_SCHEDULED_EVENT, GUILD_SCHEDULED_EVENT_EXCEPTION, THREAD, STICKER, APPLICATION_COMMAND, AUTO_MODERATION_RULE, GUILD_SOUNDBOARD, ONBOARDING_PROMPT, GUILD_ONBOARDING, HOME_SETTINGS, GUILD_MEMBER_VERIFICATION, VOICE_CHANNEL_STATUS, GUILD_HOME, UNKNOWN } = AuditLogTargetTypes);
size = fn(2);
const result = size.fileFinishedImporting("modules/guild_moderation/native/AuditLogActionIcon.tsx");

export default function AuditLogActionIcon(action) {
  const obj = { style: closure_10().actionImageContainer, children: React5(AuditIcons, { action: action.action }) };
  return React5(View, obj);
};