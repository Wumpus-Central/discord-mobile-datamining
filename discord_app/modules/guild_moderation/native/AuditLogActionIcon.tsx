// discord_app/modules/guild_moderation/native/AuditLogActionIcon.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import react2 from "../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../design/void/native.tsx";
import CircleInformationIcon from "../../../design/components/Icon/native/redesign/generated/CircleInformationIcon.tsx";
import LinkIcon from "../../../design/components/Icon/native/redesign/generated/LinkIcon.tsx";
import ChatIcon from "../../../design/components/Icon/native/redesign/generated/ChatIcon.tsx";
import ThreadIcon from "../../../design/components/Icon/native/redesign/generated/ThreadIcon.tsx";
import GroupIcon from "../../../design/components/Icon/native/redesign/generated/GroupIcon.tsx";
import StageIcon from "../../../design/components/Icon/native/redesign/generated/StageIcon.tsx";
import FlagIcon from "../../../design/components/Icon/native/redesign/generated/FlagIcon.tsx";
import ReactionIcon from "../../../design/components/Icon/native/redesign/generated/ReactionIcon.tsx";
import RobotIcon2 from "../../../design/components/Icon/native/redesign/generated/RobotIcon.tsx";
import CalendarIcon from "../../../design/components/Icon/native/redesign/generated/CalendarIcon.tsx";
import SlashBoxIcon from "../../../design/components/Icon/native/redesign/generated/SlashBoxIcon.tsx";
import CircleQuestionIcon from "../../../design/components/Icon/native/redesign/generated/CircleQuestionIcon.tsx";
import SoundboardIcon from "../../../design/components/Icon/native/redesign/generated/SoundboardIcon.tsx";
import StickerIcon from "../../../design/components/Icon/native/redesign/generated/StickerIcon.tsx";
import PuzzlePieceIcon from "../../../design/components/Icon/native/redesign/generated/PuzzlePieceIcon.tsx";
import WebhookIcon from "../../../design/components/Icon/native/redesign/generated/WebhookIcon.tsx";
import ChannelListIcon from "../../../design/components/Icon/native/redesign/generated/ChannelListIcon.tsx";
import ListBulletsIcon from "../../../design/components/Icon/native/redesign/generated/ListBulletsIcon.tsx";
import HomeIcon from "../../../design/components/Icon/native/redesign/generated/HomeIcon.tsx";
import AssetRegistryDefault from "../../../../_runtime/17770_AssetRegistry.js";
import AssetRegistryDefault2 from "../../../../_runtime/17771_AssetRegistry.js";
import AssetRegistryDefault3 from "../../../../_runtime/17772_AssetRegistry.js";
import react from "../../../../_runtime/00019_react.js";
import AuditLogRecord from "../../../records/AuditLogRecord.tsx";
import Constants from "../../../Constants.tsx";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../_runtime/metro/00002__.js";

let action;

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
let c9;
let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let size;
const View = react_native.View;
({ getTargetType: closure_4, getActionType: hasOwnProperty } = AuditLogRecord);
({ AuditLogTargetTypes, AuditLogActionTypes: metroRequire, AuditLogActions: metroImportDefault } = Constants);
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let obj = {
  actionImageContainer: { height: 24, width: 24 },
  actionImageOverlay: size,
  iconComponent: { width: 22, height: 22 },
  actionImage: { position: "absolute" },
};
size = {
  borderRadius: nativeDefault.radii.round,
  width: 13,
  height: 13,
  bottom: 0,
  right: 0,
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
};
let closure_10 = createStyles.createStyles(obj);
let obj2 = {
  [ALL]: ListBulletsIcon.ListBulletsIcon,
  [CHANNEL]: ChannelListIcon.ChannelListIcon,
  [CHANNEL_OVERWRITE]: ChannelListIcon.ChannelListIcon,
  [EMOJI]: ReactionIcon.ReactionIcon,
  [GUILD]: CircleInformationIcon.CircleInformationIcon,
  [GUILD_PROFILE]: CircleInformationIcon.CircleInformationIcon,
  [INTEGRATION]: PuzzlePieceIcon.PuzzlePieceIcon,
  [INVITE]: LinkIcon.LinkIcon,
  [ROLE]: FlagIcon.FlagIcon,
  [USER]: GroupIcon.GroupIcon,
  [WEBHOOK]: WebhookIcon.WebhookIcon,
  [STAGE_INSTANCE]: StageIcon.StageIcon,
  [GUILD_SCHEDULED_EVENT]: CalendarIcon.CalendarIcon,
  [GUILD_SCHEDULED_EVENT_EXCEPTION]: CalendarIcon.CalendarIcon,
  [THREAD]: ThreadIcon.ThreadIcon,
  [STICKER]: StickerIcon.StickerIcon,
  [APPLICATION_COMMAND]: SlashBoxIcon.SlashBoxIcon,
  [AUTO_MODERATION_RULE]: WebhookIcon.WebhookIcon,
  [GUILD_SOUNDBOARD]: SoundboardIcon.SoundboardIcon,
  [ONBOARDING_PROMPT]: GroupIcon.GroupIcon,
  [GUILD_ONBOARDING]: GroupIcon.GroupIcon,
  [HOME_SETTINGS]: GroupIcon.GroupIcon,
  [GUILD_MEMBER_VERIFICATION]: GroupIcon.GroupIcon,
  [VOICE_CHANNEL_STATUS]: ChannelListIcon.ChannelListIcon,
  [GUILD_HOME]: HomeIcon.HomeIcon,
  [UNKNOWN]: CircleQuestionIcon.CircleQuestionIcon,
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
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_12 = ReactCompilerGating.isReactCompilerEnabled()
  ? (action) => {
      let items;
      let items1;
      let tmp13;
      let tmp5;
      const obj = react2;
      const cResult = obj.c(18);
      action = action.action;
      const tmp4 = closure_10();
      if (cResult[0] !== action) {
        let tmp9;
        const tmp7 = hasOwnProperty(action);
        if (metroRequire.CREATE === tmp7) {
          tmp9 = AssetRegistryDefault;
        } else if (metroRequire.UPDATE === tmp7) {
          tmp9 = AssetRegistryDefault2;
        } else {
          tmp9 = null;
          if (metroRequire.DELETE === tmp7) {
            tmp9 = AssetRegistryDefault3;
          }
        }
        cResult[0] = action;
        cResult[1] = tmp9;
        tmp5 = tmp9;
      } else {
        tmp5 = cResult[1];
      }
      if (cResult[2] !== action) {
        let RobotIcon;
        if (action === metroImportDefault.MESSAGE_DELETE) {
          RobotIcon = ChatIcon.ChatIcon;
        } else {
          if (action !== metroImportDefault.AUTO_MODERATION_BLOCK_MESSAGE) {
            if (action !== metroImportDefault.AUTO_MODERATION_FLAG_TO_CHANNEL) {
              if (action !== metroImportDefault.AUTO_MODERATION_USER_COMMUNICATION_DISABLED) {
                if (action !== metroImportDefault.AUTO_MODERATION_QUARANTINE_USER) {
                  RobotIcon = obj2[tmp15];
                }
              }
            }
          }
          RobotIcon = RobotIcon2.RobotIcon;
        }
        cResult[2] = action;
        cResult[3] = RobotIcon;
        tmp13 = RobotIcon;
      } else {
        tmp13 = cResult[3];
      }
      if (cResult[4] === tmp13) {
        let tmp18;
        if (cResult[5] === tmp4.iconComponent) {
          tmp18 = cResult[6];
        }
        if (cResult[7] === tmp4.actionImage) {
          let tmp20;
          if (cResult[8] === tmp4.actionImageOverlay) {
            tmp20 = cResult[9];
          }
          if (cResult[10] === tmp5) {
            let tmp24;
            if (cResult[11] === tmp4.actionImage) {
              tmp24 = cResult[12];
            }
            if (cResult[13] === tmp4.actionImageContainer) {
              if (cResult[14] === tmp18) {
                if (cResult[15] === tmp20) {
                  let tmp27;
                  if (cResult[16] === tmp24) {
                    tmp27 = cResult[17];
                  }
                  return tmp27;
                }
              }
            }
            obj2 = { style: tmp4.actionImageContainer, children: items };
            items = [tmp18, tmp20, tmp24];
            const tmp30 = React4(View, obj2);
            cResult[13] = tmp4.actionImageContainer;
            cResult[14] = tmp18;
            cResult[15] = tmp20;
            cResult[16] = tmp24;
            cResult[17] = tmp30;
            tmp27 = tmp30;
          }
          const obj3 = { style: tmp4.actionImage, source: tmp5, disableColor: true };
          const tmp26 = metroImportAll(native.Icon, obj3);
          cResult[10] = tmp5;
          cResult[11] = tmp4.actionImage;
          cResult[12] = tmp26;
          tmp24 = tmp26;
        }
        const obj4 = { style: items1 };
        items1 = [,];
        ({ actionImageOverlay: arr[0], actionImage: arr[1] } = tmp4);
        const tmp23 = metroImportAll(View, obj4);
        cResult[7] = tmp4.actionImage;
        cResult[8] = tmp4.actionImageOverlay;
        cResult[9] = tmp23;
        tmp20 = tmp23;
      }
      const obj5 = { size: "custom", style: tmp4.iconComponent };
      const tmp19 = metroImportAll(tmp13, obj5);
      cResult[4] = tmp13;
      cResult[5] = tmp4.iconComponent;
      cResult[6] = tmp19;
      tmp18 = tmp19;
    }
  : (action) => {
      let RobotIcon;
      let items;
      let items1;
      let tmp4;
      action = action.action;
      const tmp = closure_10();
      const tmp2 = hasOwnProperty(action);
      if (metroRequire.CREATE === tmp2) {
        tmp4 = AssetRegistryDefault;
      } else if (metroRequire.UPDATE === tmp2) {
        tmp4 = AssetRegistryDefault2;
      } else {
        tmp4 = null;
        if (metroRequire.DELETE === tmp2) {
          tmp4 = AssetRegistryDefault3;
        }
      }
      if (action === metroImportDefault.MESSAGE_DELETE) {
        RobotIcon = ChatIcon.ChatIcon;
      } else {
        if (action !== metroImportDefault.AUTO_MODERATION_BLOCK_MESSAGE) {
          if (action !== metroImportDefault.AUTO_MODERATION_FLAG_TO_CHANNEL) {
            if (action !== metroImportDefault.AUTO_MODERATION_USER_COMMUNICATION_DISABLED) {
              if (action !== metroImportDefault.AUTO_MODERATION_QUARANTINE_USER) {
                RobotIcon = obj2[tmp11];
              }
            }
          }
        }
        RobotIcon = RobotIcon2.RobotIcon;
      }
      obj2 = { size: "custom", style: tmp.iconComponent };
      const obj = { style: tmp.actionImageContainer, children: items };
      items = [metroImportAll(RobotIcon, obj2), ,];
      const obj3 = { style: items1 };
      items1 = [,];
      ({ actionImageOverlay: arr2[0], actionImage: arr2[1] } = tmp);
      items[1] = metroImportAll(View, obj3);
      const obj4 = { style: tmp.actionImage, source: tmp4, disableColor: true };
      items[2] = metroImportAll(native.Icon, obj4);
      return React4(View, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? (action) => {
      let tmp3;
      const obj = react2;
      const cResult = obj.c(5);
      const tmp2 = closure_10();
      action = action.action;
      if (cResult[0] !== action) {
        obj2 = { action };
        const tmp6 = metroImportAll(closure_12, obj2);
        cResult[0] = action;
        cResult[1] = tmp6;
        tmp3 = tmp6;
      } else {
        tmp3 = cResult[1];
      }
      if (cResult[2] === tmp2.actionImageContainer) {
        let tmp7;
        if (cResult[3] === tmp3) {
          tmp7 = cResult[4];
        }
        return tmp7;
      }
      const obj3 = { style: tmp2.actionImageContainer, children: tmp3 };
      const tmp8 = metroImportAll(View, obj3);
      cResult[2] = tmp2.actionImageContainer;
      cResult[3] = tmp3;
      cResult[4] = tmp8;
      tmp7 = tmp8;
    }
  : (action) => {
      const obj = { style: closure_10().actionImageContainer, children: metroImportAll(closure_12, obj2) };
      obj2 = { action: action.action };
      return metroImportAll(View, obj);
    };
size = size_mod;
const result = size.fileFinishedImporting("modules/guild_moderation/native/AuditLogActionIcon.tsx");

export default tmp6;
