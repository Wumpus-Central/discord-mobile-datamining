// === Module 16503: HappeningNowActions ===

// Module 16503 (HappeningNowActions)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1265 */;
import Text_Text from "Text/Text" /* 5088 */;
import FastImageDefault from "FastImage" /* 6156 */;
import CreateChannelModalActionCreatorsDefault from "CreateChannelModalActionCreators" /* 8605 */;
import GuildSettingsActionCreatorsDefault from "GuildSettingsActionCreators" /* 8637 */;
import instant_invite_InstantInviteUtils from "instant_invite/InstantInviteUtils" /* 8682 */;
import GuildDirectoryAddModalActionCreatorsDefault from "GuildDirectoryAddModalActionCreators" /* 12004 */;
import _modDef12540 from "module_12540" /* 12540 */;
import HappeningNowCardDefault from "HappeningNowCard" /* 15567 */;
import _modDef16504 from "module_16504" /* 16504 */;
import _modDef16505 from "module_16505" /* 16505 */;
import _modDef16506 from "module_16506" /* 16506 */;
import noop from "module_19" /* 19 */;
import GuildChannelStore from "GuildChannelStore" /* 4748 */;
import GuildStore from "GuildStore" /* 2087 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2116 */;

require = fn;
const View = fn(17).View;
const HappeningNowConstants = fn(15566);
({ HappeningNowCardTrackingType: closure_8, HAPPENING_NOW_CARD_HEIGHT } = HappeningNowConstants);
const Constants = fn(1085);
({ AnalyticEvents: closure_9, InstantInviteSources: c10 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
const createStyles = fn(5092);
let obj = { actionCard: { flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 8, borderWidth: 1, borderRadius: nativeDefault.radii.lg, height: HAPPENING_NOW_CARD_HEIGHT, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderColor: nativeDefault.colors.BORDER_SUBTLE }, actionCardImage: null };
let size = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, height: 44, width: "100%", alignItems: "center", justifyContent: "center", marginBottom: 4, borderRadius: nativeDefault.radii.sm };
obj.actionCardImage = size;
let closure_13 = createStyles.createStyles(obj);
fn(558);
let obj3 = { flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 8, borderWidth: 1, borderRadius: nativeDefault.radii.lg, height: HAPPENING_NOW_CARD_HEIGHT, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderColor: nativeDefault.colors.BORDER_SUBTLE };
let ReactCompilerGating = fn(558);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function HappeningNowCardCreateChannel(guildId) {
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
  const tmp9 = closure_11(closure_14, { imageSource: _modDef16504, onPress: tmp5, text: tmp6, panelVariant: undefined !== panelVariant && panelVariant });
  cResult[3] = tmp5;
  cResult[4] = undefined !== panelVariant && panelVariant;
  cResult[5] = tmp9;
  tmp8 = tmp9;
  let obj2 = { imageSource: _modDef16504, onPress: tmp5, text: tmp6, panelVariant: undefined !== panelVariant && panelVariant };
}) : (function HappeningNowCardCreateChannel(guildId) {
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
  obj.imageSource = _modDef16504;
  obj.onPress = callback;
  const intl = guildId(1126).intl;
  obj.text = intl.string(guildId(1126).t["fUYU+j"]);
  obj.panelVariant = flag;
  return closure_11(closure_14, obj);
});
ReactCompilerGating = fn(558);
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (function HappeningNowCardCustomizeGuild(guildId) {
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
  const tmp6 = closure_11(closure_14, { text: "Customize", imageSource: _modDef16505, onPress: tmp4, panelVariant: undefined !== panelVariant && panelVariant });
  cResult[2] = tmp4;
  cResult[3] = undefined !== panelVariant && panelVariant;
  cResult[4] = tmp6;
  tmp5 = tmp6;
  let obj2 = { text: "Customize", imageSource: _modDef16505, onPress: tmp4, panelVariant: undefined !== panelVariant && panelVariant };
}) : (function HappeningNowCardCustomizeGuild(guildId) {
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
  obj.imageSource = _modDef16505;
  obj.onPress = callback;
  obj.panelVariant = flag;
  return closure_11(closure_14, obj);
});
ReactCompilerGating = fn(558);
const tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? (function HappeningNowCardInvite(guildId) {
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
  const tmp9 = closure_11(closure_14, { imageSource: _modDef16506, onPress: tmp5, text: tmp6, panelVariant: undefined !== panelVariant && panelVariant });
  cResult[3] = tmp5;
  cResult[4] = undefined !== panelVariant && panelVariant;
  cResult[5] = tmp9;
  tmp8 = tmp9;
  let obj2 = { imageSource: _modDef16506, onPress: tmp5, text: tmp6, panelVariant: undefined !== panelVariant && panelVariant };
}) : (function HappeningNowCardInvite(guildId) {
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
  obj.imageSource = _modDef16506;
  obj.onPress = callback;
  const intl = guildId(1126).intl;
  obj.text = intl.string(guildId(1126).t.VINpSK);
  obj.panelVariant = flag;
  return closure_11(closure_14, obj);
});
ReactCompilerGating = fn(558);
let closure_14 = noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function ActionCard(arg0) {
  const cResult = c.c(13);
  ({ text, onPress, imageSource, panelVariant } = arg0);
  const tmp5 = closure_13();
  if (cResult[0] !== imageSource) {
    const obj2 = { source: imageSource };
    const tmp9 = closure_1_11(FastImageDefault, obj2);
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
      const tmp14 = closure_1_11(Text_Text.Text, obj3);
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
    const tmp18 = __initData(HappeningNowCardDefault, obj4);
    cResult[7] = onPress;
    cResult[8] = tmp4;
    cResult[9] = tmp5.actionCard;
    cResult[10] = tmp10;
    cResult[11] = tmp12;
    cResult[12] = tmp18;
    tmp15 = tmp18;
  }
  const tmp11 = closure_1_11(View, { style: tmp5.actionCardImage, children: tmp6 });
  cResult[2] = tmp5.actionCardImage;
  cResult[3] = tmp6;
  cResult[4] = tmp11;
  tmp10 = tmp11;
  const obj5 = { style: tmp5.actionCardImage, children: tmp6 };
}) : (function ActionCard(panelVariant) {
  let flag = panelVariant.panelVariant;
  ({ text, onPress, imageSource } = panelVariant);
  if (flag === undefined) {
    flag = false;
  }
  const tmp = closure_13();
  const obj = { onPress, style: tmp.actionCard, width: "medium", panelVariant: flag, children: null };
  const obj2 = { style: tmp.actionCardImage, children: closure_1_11(FastImageDefault, { source: imageSource }) };
  const items = [closure_1_11(View, obj2), closure_1_11(Text_Text.Text, { variant: "text-sm/normal", maxFontSizeMultiplier: 2, children: text })];
  obj.children = items;
  return __initData(HappeningNowCardDefault, obj);
}));
size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowActions.tsx");

export const HappeningNowCardCreateChannel = tmp5;
export const HappeningNowCardCustomizeGuild = tmp6;
export const HappeningNowCardInvite = tmp7;
export const HappeningNowStudentHubAddServer = ReactCompilerGating.isReactCompilerEnabled() ? (function HappeningNowStudentHubAddServer(guildId) {
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
  const tmp9 = closure_11(closure_14, { imageSource: _modDef12540, onPress: tmp5, text: tmp6, panelVariant: undefined !== panelVariant && panelVariant });
  cResult[3] = tmp5;
  cResult[4] = undefined !== panelVariant && panelVariant;
  cResult[5] = tmp9;
  tmp8 = tmp9;
  let obj2 = { imageSource: _modDef12540, onPress: tmp5, text: tmp6, panelVariant: undefined !== panelVariant && panelVariant };
}) : (function HappeningNowStudentHubAddServer(guildId) {
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
  obj.imageSource = _modDef12540;
  obj.onPress = callback;
  const intl = guildId(1126).intl;
  obj.text = intl.string(guildId(1126).t.emRpdS);
  obj.panelVariant = flag;
  return closure_11(closure_14, obj);
});