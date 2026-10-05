// discord_app/modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowActions.tsx
import react2 from "../../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import AnalyticsUtilsDefault from "../../../../../utils/AnalyticsUtils.tsx";
import Text_Text from "../../../../../design/components/Text/native/Text.tsx";
import CreateChannelModalActionCreatorsDefault from "../../../../../actions/native/CreateChannelModalActionCreators.tsx";
import GuildSettingsActionCreatorsDefault from "../../../../guild_settings/GuildSettingsActionCreators.tsx";
import instant_invite_InstantInviteUtils from "../../../../instant_invite/native/InstantInviteUtils.tsx";
import GuildDirectoryAddModalActionCreatorsDefault from "../../../../directory_channels/native/components/GuildDirectoryAddModalActionCreators.tsx";
import AssetRegistryDefault from "../../../../../../_runtime/12442_AssetRegistry.js";
import HappeningNowCardDefault from "HappeningNowCard.tsx";
import AssetRegistryDefault2 from "../../../../../../_runtime/16016_AssetRegistry.js";
import AssetRegistryDefault3 from "../../../../../../_runtime/16017_AssetRegistry.js";
import AssetRegistryDefault4 from "../../../../../../_runtime/16018_AssetRegistry.js";
import react from "../../../../../../_runtime/00019_react.js";
import react_native from "../../../../../../_runtime/00017_react-native.js";
import GuildChannelStore from "../../../../../stores/GuildChannelStore.tsx";
import GuildStore from "../../../../../stores/GuildStore.tsx";
import SelectedChannelStore from "../../../../../stores/SelectedChannelStore.tsx";
import HappeningNowConstants from "HappeningNowConstants.tsx";
import Constants from "../../../../../Constants.tsx";
import Fragment from "../../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../../../_runtime/metro/00002__.js";

let guildId;

let HAPPENING_NOW_CARD_HEIGHT;
let c10;
let c9;
let closure_12;
let closure_4;
let hasOwnProperty;
let map1;
let obj2;
let size;
let unpackModuleId;
({ View: closure_4, Image: hasOwnProperty } = react_native);
({ HappeningNowCardTrackingType: c9, HAPPENING_NOW_CARD_HEIGHT } = HappeningNowConstants);
({ AnalyticEvents: c10, InstantInviteSources: unpackModuleId } = Constants);
({ jsx: closure_12, jsxs: map1 } = Fragment);
let createStyles = createStyles_mod;
let obj = { actionCard: obj2, actionCardImage: size };
obj2 = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: 8,
  borderWidth: 1,
  borderRadius: nativeDefault.radii.lg,
  height: HAPPENING_NOW_CARD_HEIGHT,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  borderColor: nativeDefault.colors.BORDER_SUBTLE,
};
createStyles = createStyles.createStyles;
size = {
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER,
  height: 44,
  width: "100%",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: 4,
  borderRadius: nativeDefault.radii.sm,
};
let closure_14 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp8 = ReactCompilerGating.isReactCompilerEnabled()
  ? (guildId) => {
      let tmp5;
      let tmp6;
      let obj = guildId(576);
      const cResult = obj.c(6);
      guildId = guildId.guildId;
      const panelVariant = guildId.panelVariant;
      if (cResult[0] !== guildId) {
        const fn = function t() {
          const GUILD_ACTION_CREATE_CHANNEL_CARD = constants.GUILD_ACTION_CREATE_CHANNEL_CARD;
          const obj = AnalyticsUtilsDefault;
          const obj2 = { type: GUILD_ACTION_CREATE_CHANNEL_CARD, order: 0, guild_id: guildId };
          obj.track(constants2.ACTIVITY_CARD_CLICKED, obj2);
          const obj3 = CreateChannelModalActionCreatorsDefault;
          obj3.open(null, guildId, null, null);
        };
        cResult[0] = guildId;
        cResult[1] = fn;
        tmp5 = fn;
      } else {
        tmp5 = cResult[1];
      }
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = tmp(1126).intl;
        const stringResult = intl.string(guildId(1126).t["fUYU+j"]);
        cResult[2] = stringResult;
        tmp6 = stringResult;
      } else {
        tmp6 = cResult[2];
      }
      if (cResult[3] === tmp5) {
        let tmp8;
        if (cResult[4] === (undefined !== panelVariant && panelVariant)) {
          tmp8 = cResult[5];
        }
        return tmp8;
      }
      let obj2 = { imageSource: AssetRegistryDefault2, onPress: tmp5, text: tmp6, panelVariant: tmp4 };
      const tmp9 = closure_12(closure_15, obj2);
      cResult[3] = tmp5;
      cResult[4] = undefined !== panelVariant && panelVariant;
      cResult[5] = tmp9;
      tmp8 = tmp9;
    }
  : (guildId) => {
      let callback;
      let intl;
      guildId = guildId.guildId;
      let flag = guildId.panelVariant;
      if (flag === undefined) {
        flag = false;
      }
      const items = [guildId];
      let obj = {
        imageSource: AssetRegistryDefault2,
        onPress: callback,
        text: intl.string(guildId(1126).t["fUYU+j"]),
        panelVariant: flag,
      };
      callback = react.useCallback(() => {
        const GUILD_ACTION_CREATE_CHANNEL_CARD = constants.GUILD_ACTION_CREATE_CHANNEL_CARD;
        const obj = AnalyticsUtilsDefault;
        const obj2 = { type: GUILD_ACTION_CREATE_CHANNEL_CARD, order: 0, guild_id: guildId };
        obj.track(constants2.ACTIVITY_CARD_CLICKED, obj2);
        const obj3 = CreateChannelModalActionCreatorsDefault;
        obj3.open(null, guildId, null, null);
      }, items);
      intl = guildId(1126).intl;
      return closure_12(closure_15, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp9 = ReactCompilerGating.isReactCompilerEnabled()
  ? (guildId) => {
      let tmp4;
      let obj = guildId(576);
      const cResult = obj.c(5);
      guildId = guildId.guildId;
      const panelVariant = guildId.panelVariant;
      if (cResult[0] !== guildId) {
        const fn = function t() {
          const GUILD_ACTION_CUSTOMIZE_CARD = constants.GUILD_ACTION_CUSTOMIZE_CARD;
          const obj = AnalyticsUtilsDefault;
          const obj2 = { type: GUILD_ACTION_CUSTOMIZE_CARD, order: 0, guild_id: guildId };
          obj.track(constants2.ACTIVITY_CARD_CLICKED, obj2);
          const obj3 = GuildSettingsActionCreatorsDefault;
          obj3.open(guildId);
        };
        cResult[0] = guildId;
        cResult[1] = fn;
        tmp4 = fn;
      } else {
        tmp4 = cResult[1];
      }
      if (cResult[2] === tmp4) {
        let tmp5;
        if (cResult[3] === (undefined !== panelVariant && panelVariant)) {
          tmp5 = cResult[4];
        }
        return tmp5;
      }
      let obj2 = { text: "Customize", imageSource: AssetRegistryDefault3, onPress: tmp4, panelVariant: tmp3 };
      const tmp6 = closure_12(closure_15, obj2);
      cResult[2] = tmp4;
      cResult[3] = undefined !== panelVariant && panelVariant;
      cResult[4] = tmp6;
      tmp5 = tmp6;
    }
  : (guildId) => {
      let callback;
      guildId = guildId.guildId;
      let flag = guildId.panelVariant;
      if (flag === undefined) {
        flag = false;
      }
      const items = [guildId];
      let obj = { text: "Customize", imageSource: AssetRegistryDefault3, onPress: callback, panelVariant: flag };
      callback = react.useCallback(() => {
        const GUILD_ACTION_CUSTOMIZE_CARD = constants.GUILD_ACTION_CUSTOMIZE_CARD;
        const obj = AnalyticsUtilsDefault;
        const obj2 = { type: GUILD_ACTION_CUSTOMIZE_CARD, order: 0, guild_id: guildId };
        obj.track(constants2.ACTIVITY_CARD_CLICKED, obj2);
        const obj3 = GuildSettingsActionCreatorsDefault;
        obj3.open(guildId);
      }, items);
      return closure_12(closure_15, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp10 = ReactCompilerGating.isReactCompilerEnabled()
  ? (guildId) => {
      let tmp5;
      let tmp6;
      let obj = guildId(576);
      const cResult = obj.c(6);
      guildId = guildId.guildId;
      const panelVariant = guildId.panelVariant;
      if (cResult[0] !== guildId) {
        const fn = function t() {
          const guild = GuildStore.getGuild(guildId);
          const channels = GuildChannelStore.getChannels(guildId);
          const channelId = SelectedChannelStore.getChannelId(guildId);
          if (null != guild) {
            const GUILD_ACTION_INVITE_CARD = constants.GUILD_ACTION_INVITE_CARD;
            const obj2 = { type: GUILD_ACTION_INVITE_CARD, order: 0, guild_id: guildId };
            const obj = AnalyticsUtilsDefault;
            obj.track(constants2.ACTIVITY_CARD_CLICKED, obj2);
            const obj3 = instant_invite_InstantInviteUtils;
            const result = obj3.handleOpenInviteActionsheet(guild, channelId, channels, unpackModuleId.SERVER_PROFILE);
          }
        };
        cResult[0] = guildId;
        cResult[1] = fn;
        tmp5 = fn;
      } else {
        tmp5 = cResult[1];
      }
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = tmp(1126).intl;
        const stringResult = intl.string(guildId(1126).t.VINpSK);
        cResult[2] = stringResult;
        tmp6 = stringResult;
      } else {
        tmp6 = cResult[2];
      }
      if (cResult[3] === tmp5) {
        let tmp8;
        if (cResult[4] === (undefined !== panelVariant && panelVariant)) {
          tmp8 = cResult[5];
        }
        return tmp8;
      }
      let obj2 = { imageSource: AssetRegistryDefault4, onPress: tmp5, text: tmp6, panelVariant: tmp4 };
      const tmp9 = closure_12(closure_15, obj2);
      cResult[3] = tmp5;
      cResult[4] = undefined !== panelVariant && panelVariant;
      cResult[5] = tmp9;
      tmp8 = tmp9;
    }
  : (guildId) => {
      let callback;
      let intl;
      guildId = guildId.guildId;
      let flag = guildId.panelVariant;
      if (flag === undefined) {
        flag = false;
      }
      const items = [guildId];
      let obj = {
        imageSource: AssetRegistryDefault4,
        onPress: callback,
        text: intl.string(guildId(1126).t.VINpSK),
        panelVariant: flag,
      };
      callback = react.useCallback(() => {
        const guild = GuildStore.getGuild(guildId);
        const channels = GuildChannelStore.getChannels(guildId);
        const channelId = SelectedChannelStore.getChannelId(guildId);
        if (null != guild) {
          const GUILD_ACTION_INVITE_CARD = constants.GUILD_ACTION_INVITE_CARD;
          const obj2 = { type: GUILD_ACTION_INVITE_CARD, order: 0, guild_id: guildId };
          const obj = AnalyticsUtilsDefault;
          obj.track(constants2.ACTIVITY_CARD_CLICKED, obj2);
          const obj3 = instant_invite_InstantInviteUtils;
          const result = obj3.handleOpenInviteActionsheet(guild, channelId, channels, unpackModuleId.SERVER_PROFILE);
        }
      }, items);
      intl = guildId(1126).intl;
      return closure_12(closure_15, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp11 = ReactCompilerGating.isReactCompilerEnabled()
  ? (guildId) => {
      let tmp5;
      let tmp6;
      let obj = guildId(576);
      const cResult = obj.c(6);
      guildId = guildId.guildId;
      const panelVariant = guildId.panelVariant;
      let tmp4 = undefined !== panelVariant && panelVariant;
      if (cResult[0] !== guildId) {
        const fn = function t() {
          const guild = GuildStore.getGuild(guildId);
          const defaultChannel = GuildChannelStore.getDefaultChannel(guildId);
          const tmp4 = null != guild && null != defaultChannel;
          if (tmp4) {
            const GUILD_ACTION_STUDENT_HUB_ADD_SERVER = constants.GUILD_ACTION_STUDENT_HUB_ADD_SERVER;
            const obj2 = { type: GUILD_ACTION_STUDENT_HUB_ADD_SERVER, order: 0, guild_id: guildId };
            const obj = AnalyticsUtilsDefault;
            obj.track(constants2.ACTIVITY_CARD_CLICKED, obj2);
            const obj6 = { directoryGuildId: null, directoryGuildName: null, directoryChannelId: defaultChannel.id };
            ({ id: obj4.directoryGuildId, name: obj4.directoryGuildName } = guild);
            const obj3 = GuildDirectoryAddModalActionCreatorsDefault;
            obj3.open(obj6);
          }
        };
        cResult[0] = guildId;
        cResult[1] = fn;
        tmp5 = fn;
      } else {
        tmp5 = cResult[1];
      }
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = tmp(1126).intl;
        const stringResult = intl.string(guildId(1126).t.emRpdS);
        cResult[2] = stringResult;
        tmp6 = stringResult;
      } else {
        tmp6 = cResult[2];
      }
      if (cResult[3] === tmp5) {
        let tmp8;
        if (cResult[4] === tmp4) {
          tmp8 = cResult[5];
        }
        return tmp8;
      }
      let obj2 = { imageSource: AssetRegistryDefault, onPress: tmp5, text: tmp6, panelVariant: tmp4 };
      const tmp9 = closure_12(closure_15, obj2);
      cResult[3] = tmp5;
      cResult[4] = tmp4;
      cResult[5] = tmp9;
      tmp8 = tmp9;
    }
  : (guildId) => {
      let callback;
      let intl;
      guildId = guildId.guildId;
      let flag = guildId.panelVariant;
      if (flag === undefined) {
        flag = false;
      }
      const items = [guildId];
      let obj = {
        imageSource: AssetRegistryDefault,
        onPress: callback,
        text: intl.string(guildId(1126).t.emRpdS),
        panelVariant: flag,
      };
      callback = react.useCallback(() => {
        const guild = GuildStore.getGuild(guildId);
        const defaultChannel = GuildChannelStore.getDefaultChannel(guildId);
        const tmp4 = null != guild && null != defaultChannel;
        if (tmp4) {
          const GUILD_ACTION_STUDENT_HUB_ADD_SERVER = constants.GUILD_ACTION_STUDENT_HUB_ADD_SERVER;
          const obj2 = { type: GUILD_ACTION_STUDENT_HUB_ADD_SERVER, order: 0, guild_id: guildId };
          const obj = AnalyticsUtilsDefault;
          obj.track(constants2.ACTIVITY_CARD_CLICKED, obj2);
          const obj6 = { directoryGuildId: null, directoryGuildName: null, directoryChannelId: defaultChannel.id };
          ({ id: obj4.directoryGuildId, name: obj4.directoryGuildName } = guild);
          const obj3 = GuildDirectoryAddModalActionCreatorsDefault;
          obj3.open(obj6);
        }
      }, items);
      intl = guildId(1126).intl;
      return closure_12(closure_15, obj);
    };
const memo = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_15 = memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (arg0) => {
        let imageSource;
        let items;
        let onPress;
        let panelVariant;
        let text;
        let tmp6;
        const obj = react2;
        const cResult = obj.c(13);
        ({ text, onPress, imageSource, panelVariant } = arg0);
        const tmp5 = closure_14();
        if (cResult[0] !== imageSource) {
          const obj2 = { source: imageSource };
          const tmp9 = closure_12(hasOwnProperty, obj2);
          cResult[0] = imageSource;
          cResult[1] = tmp9;
          tmp6 = tmp9;
        } else {
          tmp6 = cResult[1];
        }
        if (cResult[2] === tmp5.actionCardImage) {
          let tmp10;
          let tmp12;
          if (cResult[3] === tmp6) {
            tmp10 = cResult[4];
          }
          if (cResult[5] !== text) {
            const obj3 = { variant: "text-sm/normal", maxFontSizeMultiplier: 2, children: text };
            const tmp14 = closure_12(Text_Text.Text, obj3);
            cResult[5] = text;
            cResult[6] = tmp14;
            tmp12 = tmp14;
          } else {
            tmp12 = cResult[6];
          }
          if (cResult[7] === onPress) {
            if (cResult[8] === (undefined !== panelVariant && panelVariant)) {
              if (cResult[9] === tmp5.actionCard) {
                if (cResult[10] === tmp10) {
                  let tmp15;
                  if (cResult[11] === tmp12) {
                    tmp15 = cResult[12];
                  }
                  return tmp15;
                }
              }
            }
          }
          const obj4 = {
            onPress,
            style: tmp5.actionCard,
            width: "medium",
            panelVariant: undefined !== panelVariant && panelVariant,
            children: items,
          };
          items = [tmp10, tmp12];
          const tmp18 = map1(HappeningNowCardDefault, obj4);
          cResult[7] = onPress;
          cResult[8] = undefined !== panelVariant && panelVariant;
          cResult[9] = tmp5.actionCard;
          cResult[10] = tmp10;
          cResult[11] = tmp12;
          cResult[12] = tmp18;
          tmp15 = tmp18;
        }
        const obj5 = { style: tmp5.actionCardImage, children: tmp6 };
        const tmp11 = closure_12(React3, obj5);
        cResult[2] = tmp5.actionCardImage;
        cResult[3] = tmp6;
        cResult[4] = tmp11;
        tmp10 = tmp11;
      }
    : (panelVariant) => {
        let imageSource;
        let items;
        let onPress;
        let text;
        let flag = panelVariant.panelVariant;
        ({ text, onPress, imageSource } = panelVariant);
        if (flag === undefined) {
          flag = false;
        }
        const tmp = closure_14();
        const obj = { onPress, style: tmp.actionCard, width: "medium", panelVariant: flag, children: items };
        const obj2 = { style: tmp.actionCardImage, children: closure_12(hasOwnProperty, { source: imageSource }) };
        const tmp2 = HappeningNowCardDefault;
        items = [
          closure_12(React3, obj2),
          closure_12(Text_Text.Text, { variant: "text-sm/normal", maxFontSizeMultiplier: 2, children: text }),
        ];
        return map1(tmp2, obj);
      },
);
size = size_mod;
let result = size.fileFinishedImporting(
  "modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowActions.tsx",
);

export const HappeningNowCardCreateChannel = tmp8;
export const HappeningNowCardCustomizeGuild = tmp9;
export const HappeningNowCardInvite = tmp10;
export const HappeningNowStudentHubAddServer = tmp11;
