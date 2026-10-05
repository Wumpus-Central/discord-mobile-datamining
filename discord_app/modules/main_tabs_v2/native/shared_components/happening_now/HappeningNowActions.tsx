// === Module 16015: HappeningNowActions ===

// Module 16015 (HappeningNowActions)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import Text_Text from "Text/Text" /* 4886 */;
import CreateChannelModalActionCreatorsDefault from "CreateChannelModalActionCreators" /* 9214 */;
import GuildSettingsActionCreatorsDefault from "GuildSettingsActionCreators" /* 9247 */;
import instant_invite_InstantInviteUtils from "instant_invite/InstantInviteUtils" /* 9481 */;
import GuildDirectoryAddModalActionCreatorsDefault from "GuildDirectoryAddModalActionCreators" /* 11936 */;
import _modDef12442 from "module_12442" /* 12442 */;
import HappeningNowCardDefault from "HappeningNowCard" /* 15115 */;
import _modDef16016 from "module_16016" /* 16016 */;
import _modDef16017 from "module_16017" /* 16017 */;
import _modDef16018 from "module_16018" /* 16018 */;
import noop from "module_19" /* 19 */;
import GuildChannelStore from "GuildChannelStore" /* 4507 */;
import GuildStore from "GuildStore" /* 2074 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2103 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, Image: hasOwnProperty } = get_ActivityIndicator);
const HappeningNowConstants = fn(15114);
({ HappeningNowCardTrackingType: closure_9, HAPPENING_NOW_CARD_HEIGHT } = HappeningNowConstants);
const Constants = fn(1085);
({ AnalyticEvents: c10, InstantInviteSources: closure_11 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
const createStyles = fn(4890);
let obj = { actionCard: { flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 8, borderWidth: 1, borderRadius: nativeDefault.radii.lg, height: HAPPENING_NOW_CARD_HEIGHT, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderColor: nativeDefault.colors.BORDER_SUBTLE }, actionCardImage: null };
let size = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, height: 44, width: "100%", alignItems: "center", justifyContent: "center", marginBottom: 4, borderRadius: nativeDefault.radii.sm };
obj.actionCardImage = size;
let closure_14 = createStyles.createStyles(obj);
fn(558);
let obj3 = { flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 8, borderWidth: 1, borderRadius: nativeDefault.radii.lg, height: HAPPENING_NOW_CARD_HEIGHT, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderColor: nativeDefault.colors.BORDER_SUBTLE };
let ReactCompilerGating = fn(558);
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  const cResult = guildId(576).c(6);
  guildId = guildId.guildId;
  const panelVariant = guildId.panelVariant;
  if (cResult[0] !== guildId) {
    const fn = function t() {
      AnalyticsUtilsDefault.track(constants2.ACTIVITY_CARD_CLICKED, { type: constants.GUILD_ACTION_CREATE_CHANNEL_CARD, order: 0, guild_id: guildId });
      const obj2 = { type: constants.GUILD_ACTION_CREATE_CHANNEL_CARD, order: 0, guild_id: guildId };
      CreateChannelModalActionCreatorsDefault.open(null, guildId, null, null);
    };
    cResult[0] = guildId;
    cResult[1] = fn;
    let tmp5 = fn;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(tmp(1126).t["fUYU+j"]);
    cResult[2] = stringResult;
    let tmp6 = stringResult;
  } else {
    tmp6 = cResult[2];
  }
  if (cResult[3] === tmp5) {
    if (cResult[4] === tmp4) {
      let tmp8 = cResult[5];
    }
    return tmp8;
  }
  let obj = guildId(576);
  const tmp9 = closure_12(closure_15, { imageSource: _modDef16016, onPress: tmp5, text: tmp6, panelVariant: undefined !== panelVariant && panelVariant });
  cResult[3] = tmp5;
  cResult[4] = undefined !== panelVariant && panelVariant;
  cResult[5] = tmp9;
  tmp8 = tmp9;
  let obj2 = { imageSource: _modDef16016, onPress: tmp5, text: tmp6, panelVariant: undefined !== panelVariant && panelVariant };
}) : ((guildId) => {
  guildId = guildId.guildId;
  let flag = guildId.panelVariant;
  if (flag === undefined) {
    flag = false;
  }
  const items = [guildId];
  let obj = { imageSource: null, onPress: null, text: null, panelVariant: null };
  const callback = noop.useCallback(() => {
    AnalyticsUtilsDefault.track(constants2.ACTIVITY_CARD_CLICKED, { type: constants.GUILD_ACTION_CREATE_CHANNEL_CARD, order: 0, guild_id: guildId });
    const obj2 = { type: constants.GUILD_ACTION_CREATE_CHANNEL_CARD, order: 0, guild_id: guildId };
    CreateChannelModalActionCreatorsDefault.open(null, guildId, null, null);
  }, items);
  obj.imageSource = _modDef16016;
  obj.onPress = callback;
  const intl = guildId(1126).intl;
  obj.text = intl.string(guildId(1126).t["fUYU+j"]);
  obj.panelVariant = flag;
  return closure_12(closure_15, obj);
});
ReactCompilerGating = fn(558);
const tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  const cResult = guildId(576).c(5);
  guildId = guildId.guildId;
  const panelVariant = guildId.panelVariant;
  if (cResult[0] !== guildId) {
    const fn = function t() {
      AnalyticsUtilsDefault.track(constants2.ACTIVITY_CARD_CLICKED, { type: constants.GUILD_ACTION_CUSTOMIZE_CARD, order: 0, guild_id: guildId });
      const obj2 = { type: constants.GUILD_ACTION_CUSTOMIZE_CARD, order: 0, guild_id: guildId };
      GuildSettingsActionCreatorsDefault.open(guildId);
    };
    cResult[0] = guildId;
    cResult[1] = fn;
    let tmp4 = fn;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] === tmp4) {
    if (cResult[3] === tmp3) {
      let tmp5 = cResult[4];
    }
    return tmp5;
  }
  let obj = guildId(576);
  const tmp6 = closure_12(closure_15, { text: "Customize", imageSource: _modDef16017, onPress: tmp4, panelVariant: undefined !== panelVariant && panelVariant });
  cResult[2] = tmp4;
  cResult[3] = undefined !== panelVariant && panelVariant;
  cResult[4] = tmp6;
  tmp5 = tmp6;
  let obj2 = { text: "Customize", imageSource: _modDef16017, onPress: tmp4, panelVariant: undefined !== panelVariant && panelVariant };
}) : ((guildId) => {
  guildId = guildId.guildId;
  let flag = guildId.panelVariant;
  if (flag === undefined) {
    flag = false;
  }
  const items = [guildId];
  let obj = { text: "Customize", imageSource: null, onPress: null, panelVariant: null };
  const callback = noop.useCallback(() => {
    AnalyticsUtilsDefault.track(constants2.ACTIVITY_CARD_CLICKED, { type: constants.GUILD_ACTION_CUSTOMIZE_CARD, order: 0, guild_id: guildId });
    const obj2 = { type: constants.GUILD_ACTION_CUSTOMIZE_CARD, order: 0, guild_id: guildId };
    GuildSettingsActionCreatorsDefault.open(guildId);
  }, items);
  obj.imageSource = _modDef16017;
  obj.onPress = callback;
  obj.panelVariant = flag;
  return closure_12(closure_15, obj);
});
ReactCompilerGating = fn(558);
let tmp8 = ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  const cResult = guildId(576).c(6);
  guildId = guildId.guildId;
  const panelVariant = guildId.panelVariant;
  if (cResult[0] !== guildId) {
    const fn = function t() {
      guild = GuildStore.getGuild(guildId);
      const channels = GuildChannelStore.getChannels(guildId);
      const channelId = SelectedChannelStore.getChannelId(guildId);
      if (null != guild) {
        const obj2 = { type: constants.GUILD_ACTION_INVITE_CARD, order: 0, guild_id: guildId };
        AnalyticsUtilsDefault.track(constants2.ACTIVITY_CARD_CLICKED, obj2);
        const obj3 = instant_invite_InstantInviteUtils;
        const result = obj3.handleOpenInviteActionsheet(guild, channelId, channels, constants3.SERVER_PROFILE);
      }
    };
    cResult[0] = guildId;
    cResult[1] = fn;
    let tmp5 = fn;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(tmp(1126).t.VINpSK);
    cResult[2] = stringResult;
    let tmp6 = stringResult;
  } else {
    tmp6 = cResult[2];
  }
  if (cResult[3] === tmp5) {
    if (cResult[4] === tmp4) {
      let tmp8 = cResult[5];
    }
    return tmp8;
  }
  let obj = guildId(576);
  const tmp9 = closure_12(closure_15, { imageSource: _modDef16018, onPress: tmp5, text: tmp6, panelVariant: undefined !== panelVariant && panelVariant });
  cResult[3] = tmp5;
  cResult[4] = undefined !== panelVariant && panelVariant;
  cResult[5] = tmp9;
  tmp8 = tmp9;
  let obj2 = { imageSource: _modDef16018, onPress: tmp5, text: tmp6, panelVariant: undefined !== panelVariant && panelVariant };
}) : ((guildId) => {
  guildId = guildId.guildId;
  let flag = guildId.panelVariant;
  if (flag === undefined) {
    flag = false;
  }
  const items = [guildId];
  let obj = { imageSource: null, onPress: null, text: null, panelVariant: null };
  const callback = noop.useCallback(() => {
    guild = GuildStore.getGuild(guildId);
    const channels = GuildChannelStore.getChannels(guildId);
    const channelId = SelectedChannelStore.getChannelId(guildId);
    if (null != guild) {
      const obj2 = { type: constants.GUILD_ACTION_INVITE_CARD, order: 0, guild_id: guildId };
      AnalyticsUtilsDefault.track(constants2.ACTIVITY_CARD_CLICKED, obj2);
      const obj3 = instant_invite_InstantInviteUtils;
      const result = obj3.handleOpenInviteActionsheet(guild, channelId, channels, constants3.SERVER_PROFILE);
    }
  }, items);
  obj.imageSource = _modDef16018;
  obj.onPress = callback;
  const intl = guildId(1126).intl;
  obj.text = intl.string(guildId(1126).t.VINpSK);
  obj.panelVariant = flag;
  return closure_12(closure_15, obj);
});
ReactCompilerGating = fn(558);
let closure_15 = noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(13);
  ({ text, onPress, imageSource, panelVariant } = arg0);
  const tmp5 = closure_14();
  if (cResult[0] !== imageSource) {
    const obj2 = { source: imageSource };
    const tmp9 = __initData(hasOwnProperty, obj2);
    cResult[0] = imageSource;
    cResult[1] = tmp9;
    let tmp6 = tmp9;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] === tmp5.actionCardImage) {
    if (cResult[3] === tmp6) {
      let tmp10 = cResult[4];
    }
    if (cResult[5] !== text) {
      const obj3 = { variant: "text-sm/normal", maxFontSizeMultiplier: 2, children: text };
      const tmp14 = __initData(Text_Text.Text, obj3);
      cResult[5] = text;
      cResult[6] = tmp14;
      let tmp12 = tmp14;
    } else {
      tmp12 = cResult[6];
    }
    if (cResult[7] === onPress) {
      if (cResult[8] === tmp4) {
        if (cResult[9] === tmp5.actionCard) {
          if (cResult[10] === tmp10) {
            if (cResult[11] === tmp12) {
              let tmp15 = cResult[12];
            }
            return tmp15;
          }
        }
      }
    }
    const obj4 = { onPress, style: tmp5.actionCard, width: "medium", panelVariant: tmp4, children: null };
    const items = [tmp10, tmp12];
    obj4.children = items;
    const tmp18 = __initData2(HappeningNowCardDefault, obj4);
    cResult[7] = onPress;
    cResult[8] = tmp4;
    cResult[9] = tmp5.actionCard;
    cResult[10] = tmp10;
    cResult[11] = tmp12;
    cResult[12] = tmp18;
    tmp15 = tmp18;
  }
  const tmp11 = __initData(React4, { style: tmp5.actionCardImage, children: tmp6 });
  cResult[2] = tmp5.actionCardImage;
  cResult[3] = tmp6;
  cResult[4] = tmp11;
  tmp10 = tmp11;
  const obj5 = { style: tmp5.actionCardImage, children: tmp6 };
}) : ((panelVariant) => {
  let flag = panelVariant.panelVariant;
  ({ text, onPress, imageSource } = panelVariant);
  if (flag === undefined) {
    flag = false;
  }
  const tmp = closure_14();
  const obj = { onPress, style: tmp.actionCard, width: "medium", panelVariant: flag, children: null };
  const obj2 = { style: tmp.actionCardImage, children: __initData(hasOwnProperty, { source: imageSource }) };
  const items = [__initData(React4, obj2), __initData(Text_Text.Text, { variant: "text-sm/normal", maxFontSizeMultiplier: 2, children: text })];
  obj.children = items;
  return __initData2(HappeningNowCardDefault, obj);
}));
size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowActions.tsx");

export const HappeningNowCardCreateChannel = tmp6;
export const HappeningNowCardCustomizeGuild = tmp7;
export const HappeningNowCardInvite = tmp8;
export const HappeningNowStudentHubAddServer = ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  const cResult = guildId(576).c(6);
  guildId = guildId.guildId;
  const panelVariant = guildId.panelVariant;
  if (cResult[0] !== guildId) {
    const fn = function t() {
      guild = GuildStore.getGuild(guildId);
      const defaultChannel = GuildChannelStore.getDefaultChannel(guildId);
      if (tmp4) {
        const obj2 = { type: constants.GUILD_ACTION_STUDENT_HUB_ADD_SERVER, order: 0, guild_id: guildId };
        AnalyticsUtilsDefault.track(constants2.ACTIVITY_CARD_CLICKED, obj2);
        const obj6 = { directoryGuildId: null, directoryGuildName: null, directoryChannelId: null };
        ({ id: obj4.directoryGuildId, name: obj4.directoryGuildName } = guild);
        obj6.directoryChannelId = defaultChannel.id;
        GuildDirectoryAddModalActionCreatorsDefault.open(obj6);
      }
      tmp4 = null != guild && null != defaultChannel;
    };
    cResult[0] = guildId;
    cResult[1] = fn;
    let tmp5 = fn;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(tmp(1126).t.emRpdS);
    cResult[2] = stringResult;
    let tmp6 = stringResult;
  } else {
    tmp6 = cResult[2];
  }
  if (cResult[3] === tmp5) {
    if (cResult[4] === tmp4) {
      let tmp8 = cResult[5];
    }
    return tmp8;
  }
  let obj = guildId(576);
  const tmp9 = closure_12(closure_15, { imageSource: _modDef12442, onPress: tmp5, text: tmp6, panelVariant: undefined !== panelVariant && panelVariant });
  cResult[3] = tmp5;
  cResult[4] = undefined !== panelVariant && panelVariant;
  cResult[5] = tmp9;
  tmp8 = tmp9;
  let obj2 = { imageSource: _modDef12442, onPress: tmp5, text: tmp6, panelVariant: undefined !== panelVariant && panelVariant };
}) : ((guildId) => {
  guildId = guildId.guildId;
  let flag = guildId.panelVariant;
  if (flag === undefined) {
    flag = false;
  }
  const items = [guildId];
  let obj = { imageSource: null, onPress: null, text: null, panelVariant: null };
  const callback = noop.useCallback(() => {
    guild = GuildStore.getGuild(guildId);
    const defaultChannel = GuildChannelStore.getDefaultChannel(guildId);
    if (tmp4) {
      const obj2 = { type: constants.GUILD_ACTION_STUDENT_HUB_ADD_SERVER, order: 0, guild_id: guildId };
      AnalyticsUtilsDefault.track(constants2.ACTIVITY_CARD_CLICKED, obj2);
      const obj6 = { directoryGuildId: null, directoryGuildName: null, directoryChannelId: null };
      ({ id: obj4.directoryGuildId, name: obj4.directoryGuildName } = guild);
      obj6.directoryChannelId = defaultChannel.id;
      GuildDirectoryAddModalActionCreatorsDefault.open(obj6);
    }
    tmp4 = null != guild && null != defaultChannel;
  }, items);
  obj.imageSource = _modDef12442;
  obj.onPress = callback;
  const intl = guildId(1126).intl;
  obj.text = intl.string(guildId(1126).t.emRpdS);
  obj.panelVariant = flag;
  return closure_12(closure_15, obj);
});