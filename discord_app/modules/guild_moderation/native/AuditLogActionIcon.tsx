// discord_app/modules/guild_moderation/native/AuditLogActionIcon.tsx
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../design/void/native.tsx";
import ChatIcon from "../../../design/components/Icon/native/redesign/generated/ChatIcon.tsx";
import RobotIcon2 from "../../../design/components/Icon/native/redesign/generated/RobotIcon.tsx";
import _modDef18057 from "../../../../_runtime/metro/18057__.js";
import _modDef18058 from "../../../../_runtime/metro/18058__.js";
import _modDef18059 from "../../../../_runtime/metro/18059__.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const AuditLogRecord = fn(18047);
({ getTargetType: closure_4, getActionType: hasOwnProperty } = AuditLogRecord);
const Constants = fn(1085);
({ AuditLogTargetTypes, AuditLogActionTypes: metroRequire, AuditLogActions: closure_7 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(5090);
let obj2 = {
  actionImageContainer: { height: 24, width: 24 },
  actionImageOverlay: null,
  iconComponent: null,
  actionImage: null,
};
let size = {
  borderRadius: nativeDefault.radii.round,
  width: 13,
  height: 13,
  bottom: 0,
  right: 0,
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
};
obj2.actionImageOverlay = size;
obj2.iconComponent = { width: 22, height: 22 };
obj2.actionImage = { position: "absolute" };
let closure_10 = createStyles.createStyles(obj2);
let obj3 = {
  [ALL]: fn(18053).ListBulletsIcon,
  [CHANNEL]: fn(17990).ChannelListIcon,
  [CHANNEL_OVERWRITE]: fn(17990).ChannelListIcon,
  [EMOJI]: fn(8930).ReactionIcon,
  [GUILD]: fn(5012).CircleInformationIcon,
  [GUILD_PROFILE]: fn(5012).CircleInformationIcon,
  [INTEGRATION]: fn(15039).PuzzlePieceIcon,
  [INVITE]: fn(5039).LinkIcon,
  [ROLE]: fn(9507).FlagIcon,
  [USER]: fn(8192).GroupIcon,
  [WEBHOOK]: fn(17214).WebhookIcon,
  [STAGE_INSTANCE]: fn(8200).StageIcon,
  [GUILD_SCHEDULED_EVENT]: fn(8639).CalendarIcon,
  [GUILD_SCHEDULED_EVENT_EXCEPTION]: fn(8639).CalendarIcon,
  [THREAD]: fn(8176).ThreadIcon,
  [STICKER]: fn(12284).StickerIcon,
  [APPLICATION_COMMAND]: fn(11230).SlashBoxIcon,
  [AUTO_MODERATION_RULE]: fn(17214).WebhookIcon,
  [GUILD_SOUNDBOARD]: fn(12279).SoundboardIcon,
  [ONBOARDING_PROMPT]: fn(8192).GroupIcon,
  [GUILD_ONBOARDING]: fn(8192).GroupIcon,
  [HOME_SETTINGS]: fn(8192).GroupIcon,
  [GUILD_MEMBER_VERIFICATION]: fn(8192).GroupIcon,
  [VOICE_CHANNEL_STATUS]: fn(17990).ChannelListIcon,
  [GUILD_HOME]: fn(18055).HomeIcon,
  [UNKNOWN]: fn(11203).CircleQuestionIcon,
};
({
  ALL,
  CHANNEL,
  CHANNEL_OVERWRITE,
  EMOJI,
  GUILD,
  GUILD_PROFILE,
  INTEGRATION,
  INVITE,
  ROLE,
  USER,
  WEBHOOK,
  STAGE_INSTANCE,
  GUILD_SCHEDULED_EVENT,
  GUILD_SCHEDULED_EVENT_EXCEPTION,
  THREAD,
  STICKER,
  APPLICATION_COMMAND,
  AUTO_MODERATION_RULE,
  GUILD_SOUNDBOARD,
  ONBOARDING_PROMPT,
  GUILD_ONBOARDING,
  HOME_SETTINGS,
  GUILD_MEMBER_VERIFICATION,
  VOICE_CHANNEL_STATUS,
  GUILD_HOME,
  UNKNOWN,
} = AuditLogTargetTypes);
let ReactCompilerGating = fn(558);
let closure_12 = ReactCompilerGating.isReactCompilerEnabled()
  ? function AuditIcons(action) {
      const cResult = c.c(18);
      action = action.action;
      const tmp4 = closure_10();
      if (cResult[0] !== action) {
        const tmp7 = hasOwnProperty(action);
        if (constants.CREATE === tmp7) {
          let tmp9 = _modDef18057;
          cResult[0] = action;
          cResult[1] = tmp9;
        } else if (constants.UPDATE !== tmp7) {
          tmp9 = null;
          if (constants.DELETE === tmp7) {
            tmp9 = _modDef18059;
          }
        }
        tmp9 = _modDef18058;
      } else if (cResult[2] !== action) {
        if (action === constants2.MESSAGE_DELETE) {
          let RobotIcon = ChatIcon.ChatIcon;
        } else {
          if (action !== constants2.AUTO_MODERATION_BLOCK_MESSAGE) {
            if (action !== constants2.AUTO_MODERATION_FLAG_TO_CHANNEL) {
              if (action !== constants2.AUTO_MODERATION_USER_COMMUNICATION_DISABLED) {
                if (action !== constants2.AUTO_MODERATION_QUARANTINE_USER) {
                  RobotIcon = obj3[tmp16];
                }
              }
            }
          }
          RobotIcon = RobotIcon2.RobotIcon;
        }
        cResult[2] = action;
        cResult[3] = RobotIcon;
      } else {
        if (cResult[4] === cResult[3]) {
          if (cResult[5] === tmp4.iconComponent) {
            let tmp20 = cResult[6];
          }
          if (cResult[7] === tmp4.actionImage) {
            if (cResult[8] === tmp4.actionImageOverlay) {
              let tmp23 = cResult[9];
            }
            if (cResult[10] === tmp5) {
              if (cResult[11] === tmp4.actionImage) {
                let tmp27 = cResult[12];
              }
              if (cResult[13] === tmp4.actionImageContainer) {
                if (cResult[14] === tmp20) {
                  if (cResult[15] === tmp23) {
                    if (cResult[16] === tmp27) {
                      let tmp30 = cResult[17];
                    }
                    return tmp30;
                  }
                }
              }
              const obj2 = { style: tmp4.actionImageContainer, children: null };
              const items = [tmp20, tmp23, tmp27];
              obj2.children = items;
              const tmp33 = options(View, obj2);
              cResult[13] = tmp4.actionImageContainer;
              cResult[14] = tmp20;
              cResult[15] = tmp23;
              cResult[16] = tmp27;
              cResult[17] = tmp33;
              tmp30 = tmp33;
            }
            obj3 = { style: tmp4.actionImage, source: tmp5, disableColor: true };
            const tmp29 = closure_1_8(native.Icon, obj3);
            cResult[10] = tmp5;
            cResult[11] = tmp4.actionImage;
            cResult[12] = tmp29;
            tmp27 = tmp29;
          }
          const obj4 = { style: null };
          const items1 = [,];
          ({ actionImageOverlay: arr[0], actionImage: arr[1] } = tmp4);
          obj4.style = items1;
          const tmp26 = closure_1_8(View, obj4);
          cResult[7] = tmp4.actionImage;
          cResult[8] = tmp4.actionImageOverlay;
          cResult[9] = tmp26;
          tmp23 = tmp26;
        }
        const obj5 = { size: "custom", style: tmp4.iconComponent };
        const tmp22 = closure_1_8(cResult[3], obj5);
        cResult[4] = cResult[3];
        cResult[5] = tmp4.iconComponent;
        cResult[6] = tmp22;
        tmp20 = tmp22;
      }
    }
  : function AuditIcons(action) {
      action = action.action;
      const tmp = closure_10();
      const tmp2 = hasOwnProperty(action);
      if (constants.CREATE === tmp2) {
        let tmp4 = _modDef18057;
      } else if (constants.UPDATE === tmp2) {
        tmp4 = _modDef18058;
      } else {
        tmp4 = null;
        if (constants.DELETE === tmp2) {
          tmp4 = _modDef18059;
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
      const items = [closure_1_8(RobotIcon, { size: "custom", style: tmp.iconComponent }), ,];
      obj3 = { style: null };
      const items1 = [,];
      ({ actionImageOverlay: arr2[0], actionImage: arr2[1] } = tmp);
      obj3.style = items1;
      items[1] = closure_1_8(View, obj3);
      items[2] = closure_1_8(native.Icon, { style: tmp.actionImage, source: tmp4, disableColor: true });
      obj.children = items;
      return options(View, obj);
    };
ReactCompilerGating = fn(558);
size = fn(2);
const result = size.fileFinishedImporting("modules/guild_moderation/native/AuditLogActionIcon.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function AuditLogActionIcon(action) {
      const cResult = c.c(5);
      const tmp2 = closure_10();
      action = action.action;
      if (cResult[0] !== action) {
        const obj2 = { action };
        const tmp6 = closure_1_8(closure_12, obj2);
        cResult[0] = action;
        cResult[1] = tmp6;
        let tmp3 = tmp6;
      } else {
        tmp3 = cResult[1];
      }
      if (cResult[2] === tmp2.actionImageContainer) {
        if (cResult[3] === tmp3) {
          let tmp7 = cResult[4];
        }
        return tmp7;
      }
      const tmp8 = closure_1_8(View, { style: tmp2.actionImageContainer, children: tmp3 });
      cResult[2] = tmp2.actionImageContainer;
      cResult[3] = tmp3;
      cResult[4] = tmp8;
      tmp7 = tmp8;
      obj3 = { style: tmp2.actionImageContainer, children: tmp3 };
    }
  : function AuditLogActionIcon(action) {
      const obj = {
        style: closure_10().actionImageContainer,
        children: closure_1_8(closure_12, { action: action.action }),
      };
      return closure_1_8(View, obj);
    };
