// === Module 16200: HappeningNowCardLiveStage ===

// Module 16200 (HappeningNowCardLiveStage)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1897 */;
import NicknameUtilsDefault from "NicknameUtils" /* 4790 */;
import HappeningNowCard from "HappeningNowCard" /* 15407 */;
import useLiveStageData from "useLiveStageData" /* 16201 */;
import noop from "module_19" /* 19 */;

require = fn;
class HappeningNowLiveStageContent {
  constructor(arg0) {
    ({ stage, streamingUser, guildId } = global);
    tmp2 = closure_0;
    tmp3 = closure_2;
    tmp = closure_9();
    obj = closure_0(closure_2[10]);
    liveStageData = obj.useLiveStageData(stage);
    ({ speakers, friends } = liveStageData);
    tmp5 = closure_1(closure_2[17])(liveStageData.channel);
    if ("guild" === global.renderingContext) {
      num = 0;
      if (speakers.length > 0) {
        tmp15 = null;
        tmp14 = getUsersSubtitle;
        if (null != streamingUser) {
          items = [];
          items[0] = streamingUser;
          speakers = items;
        }
        obj1 = { users: null, action: null, guildId: null };
        obj1.users = speakers;
        if (null != streamingUser) {
          tmp17 = closure_11;
          ON_STAGE2 = closure_11.SHARING;
        } else {
          tmp16 = closure_11;
          ON_STAGE2 = closure_11.ON_STAGE;
        }
        obj1.action = ON_STAGE2;
        obj1.guildId = guildId;
        tmp14Result = tmp14(obj1);
      }
    }
    if (friends.length > 0) {
      obj7 = { users: null, action: null, guildId: null };
      obj7.users = friends;
      tmp11 = null;
      tmp10 = getUsersSubtitle;
      if (null != streamingUser) {
        tmp13 = closure_11;
        LISTENING = closure_11.WATCHING;
      } else {
        tmp12 = closure_11;
        LISTENING = closure_11.LISTENING;
      }
      obj7.action = LISTENING;
      obj7.guildId = guildId;
      tmp10Result = tmp10(obj7);
    } else {
      tmp10Result = tmp5;
      if (speakers.length > 0) {
        tmp20 = null;
        tmp7 = speakers;
        tmp19 = getUsersSubtitle;
        if (null != streamingUser) {
          items1 = [];
          items1[0] = streamingUser;
          tmp7 = items1;
        }
        obj8 = { users: null, action: null, guildId: null };
        obj8.users = tmp7;
        if (null != streamingUser) {
          tmp9 = closure_11;
          ON_STAGE = closure_11.SHARING;
        } else {
          tmp8 = closure_11;
          ON_STAGE = closure_11.ON_STAGE;
        }
        obj8.action = ON_STAGE;
        obj8.guildId = guildId;
        tmp10Result = tmp19(obj8);
      }
    }
    obj9 = { style: tmp.content, children: null };
    obj10 = { lineClamp: 3, children: stage.topic };
    items2 = [, ];
    items2[0] = jsx(tmp2(tmp3[13]).HappeningNowCardHeader, obj10);
    items2[1] = jsx(tmp2(tmp3[13]).HappeningNowCardSubtitle, { lineClamp: 1, children: tmp10Result });
    obj9.children = items2;
    return jsxs(View, obj9);
  }
}
function getUsersSubtitle(arg0) {
  ({ users, action, guildId } = arg0);
  if (0 === users.length) {
    return "";
  } else if (1 === length) {
    const first = users[0];
    if (constants2.LISTENING === action) {
      const intl9 = util.intl;
      const obj2 = { name: NicknameUtilsDefault.getName(guildId, null, first) };
      let str3 = intl9.formatToPlainString(util.t.lJXKtO, obj2);
    } else if (constants2.WATCHING === action) {
      const intl8 = util.intl;
      const obj3 = { name: NicknameUtilsDefault.getName(guildId, null, first) };
      str3 = intl8.formatToPlainString(util.t.iWY9wg, obj3);
    } else if (constants2.ON_STAGE === action) {
      const intl7 = util.intl;
      const obj6 = { name: NicknameUtilsDefault.getName(guildId, null, first) };
      str3 = intl7.formatToPlainString(util.t["5uJ3+u"], obj6);
    } else {
      str3 = "";
      if (constants2.SHARING === action) {
        const intl12 = util.intl;
        const obj7 = { name: NicknameUtilsDefault.getName(guildId, null, first) };
        str3 = intl12.formatToPlainString(util.t["5oa7dX"], obj7);
      }
    }
    return str3;
  } else if (2 === length) {
    [tmp4, tmp5] = users;
    const name = NicknameUtilsDefault.getName(guildId, null, tmp4);
    const name1 = NicknameUtilsDefault.getName(guildId, null, tmp5);
    if (constants2.LISTENING === action) {
      const intl6 = util.intl;
      const obj8 = { name1: name, name2: name1 };
      let str2 = intl6.formatToPlainString(util.t.GFMcxs, obj8);
    } else if (constants2.WATCHING === action) {
      const intl5 = util.intl;
      const obj9 = { name1: name, name2: name1 };
      str2 = intl5.formatToPlainString(util.t.afUnti, obj9);
    } else if (constants2.ON_STAGE === action) {
      const intl4 = util.intl;
      const obj11 = { name1: name, name2: name1 };
      str2 = intl4.formatToPlainString(util.t.SrTuJ6, obj11);
    } else {
      str2 = "";
      if (constants2.SHARING === action) {
        const intl11 = util.intl;
        const obj13 = { name1: name, name2: name1 };
        str2 = intl11.formatToPlainString(util.t.uRjRHT, obj13);
      }
    }
    return str2;
  } else {
    let str = "";
    if (0 !== users.length) {
      const name2 = NicknameUtilsDefault.getName(guildId, null, users[0]);
      const diff = users.length - 1;
      if (constants2.LISTENING === action) {
        const intl3 = util.intl;
        const obj16 = { name: name2, count: diff };
        str = intl3.formatToPlainString(util.t.CsvyMc, obj16);
      } else if (constants2.WATCHING === action) {
        const intl2 = util.intl;
        const obj17 = { name: name2, count: diff };
        str = intl2.formatToPlainString(util.t.Iwxee0, obj17);
      } else if (constants2.ON_STAGE === action) {
        const intl = util.intl;
        const obj = { name: name2, count: diff };
        str = intl.formatToPlainString(util.t.zRm3ZX, obj);
      } else {
        str = "";
        if (constants2.SHARING === action) {
          const intl10 = util.intl;
          const obj18 = { name: name2, count: diff };
          str = intl10.formatToPlainString(util.t["m+NEcC"], obj18);
        }
      }
    }
    return str;
  }
}
const View = fn(17).View;
const HappeningNowConstants = fn(15406);
({ HappeningNowCardTrackingType: hasOwnProperty, HAPPENING_NOW_CONTENT_HEIGHT, HAPPENING_NOW_STAGE_PREVIEW_HEIGHT, HAPPENING_NOW_STAGE_PREVIEW_WIDTH } = HappeningNowConstants);
const AnalyticEvents = fn(1074).AnalyticEvents;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4638);
let obj = { content: { flexShrink: 1, gap: 2 }, stagePreviewContainer: { marginRight: 12, flexDirection: "column", justifyContent: "space-between", height: "100%", width: HAPPENING_NOW_STAGE_PREVIEW_WIDTH }, stagePreviewBackground: { height: HAPPENING_NOW_STAGE_PREVIEW_HEIGHT, backgroundColor: nativeDefault.unsafe_rawColors.PRIMARY_800, borderRadius: nativeDefault.radii.sm, alignItems: "center", paddingTop: 6 }, stagePreviewBackgroundNoAudience: null, avatarStackContainer: null };
let obj3 = { height: HAPPENING_NOW_STAGE_PREVIEW_HEIGHT, backgroundColor: nativeDefault.unsafe_rawColors.PRIMARY_800, borderRadius: nativeDefault.radii.sm, alignItems: "center", paddingTop: 6 };
obj.stagePreviewBackgroundNoAudience = { height: HAPPENING_NOW_CONTENT_HEIGHT, backgroundColor: nativeDefault.unsafe_rawColors.PRIMARY_800, borderRadius: nativeDefault.radii.sm, justifyContent: "center", alignItems: "center" };
let obj4 = { height: HAPPENING_NOW_CONTENT_HEIGHT, backgroundColor: nativeDefault.unsafe_rawColors.PRIMARY_800, borderRadius: nativeDefault.radii.sm, justifyContent: "center", alignItems: "center" };
obj.avatarStackContainer = { backgroundColor: nativeDefault.colors.STAGE_CARD_PILL_BG, padding: 2, borderRadius: nativeDefault.radii.xl, position: "absolute", alignSelf: "center", bottom: 0 };
const React7 = createStyles.createStyles(obj);
const constants2 = { LISTENING: 0, [0]: "LISTENING", WATCHING: 1, [1]: "WATCHING", ON_STAGE: 2, [2]: "ON_STAGE", SHARING: 3, [3]: "SHARING" };
let obj5 = { backgroundColor: nativeDefault.colors.STAGE_CARD_PILL_BG, padding: 2, borderRadius: nativeDefault.radii.xl, position: "absolute", alignSelf: "center", bottom: 0 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowCardLiveStage.tsx");

export default noop.memo((arg0) => {
  ({ stage, index } = arg0);
  ({ fullwidth, renderingContext, panelVariant } = arg0);
  if (panelVariant === undefined) {
    panelVariant = false;
  }
  const tmp = closure_9();
  const channel_id = stage.channel_id;
  const guild_id = stage.guild_id;
  const items = [channel_id, guild_id, index];
  const callback = noop.useCallback(() => {
    AnalyticsUtilsDefault.track(AnalyticEvents.ACTIVITY_CARD_CLICKED, { order: index, guild_id, type: constants.GUILD_LIVE_STAGE_CARD, destination_channel_id: channel_id });
    const obj2 = { order: index, guild_id, type: constants.GUILD_LIVE_STAGE_CARD, destination_channel_id: channel_id };
    asyncRequireImpl(9679, dependencyMap.paths).then((result) => {
      result.default(channel_id, true);
    });
  }, items);
  const liveStageData = index(guild_id[10]).useLiveStageData(stage);
  ({ speakers, audienceCount, audiencePrefixedFriends } = liveStageData);
  let obj = index(guild_id[10]);
  const stream = index(guild_id[11]).useCallActivityData(channel_id).stream;
  if (null != stream) {
    const obj3 = { index, userId: stream.ownerId, guildId: guild_id, stream, fullwidth, renderingContext, panelVariant };
    let tmp16Result = closure_7(channel_id(tmp4[12]), obj3);
  } else {
    const obj4 = { onPress: callback, width: null, IconComponent: null, panelVariant: null, children: null };
    let str = "large";
    if (fullwidth) {
      str = "full";
    }
    obj4.width = str;
    obj4.IconComponent = index(tmp4[14]).StageIcon;
    obj4.panelVariant = panelVariant;
    const obj5 = { style: tmp.stagePreviewContainer, children: null };
    const obj6 = { style: 0 === audienceCount ? tmp.stagePreviewBackgroundNoAudience : tmp.stagePreviewBackground, children: null };
    let tmp7Result = speakers.length > 0;
    if (tmp7Result) {
      const obj7 = { user: speakers[0], avatarDecoration: speakers[0].avatarDecoration, guildId: guild_id, size: index(tmp4[15]).AvatarSizes.REFRESH_MEDIUM_32 };
      tmp7Result = closure_7(index(tmp4[15]).Avatar, obj7);
    }
    obj6.children = tmp7Result;
    const items1 = [closure_7(View, obj6), ];
    let tmp7Result2 = null;
    if (audienceCount > 0) {
      const obj8 = { style: tmp.avatarStackContainer, children: null };
      const obj9 = { users: audiencePrefixedFriends, guildId: guild_id, userCount: null, isStage: true, avatarSize: null };
      let num2 = 0;
      const sum = audienceCount + speakers.length;
      if (speakers.length > 0) {
        num2 = 1;
      }
      obj9.userCount = sum - num2;
      obj9.avatarSize = index(tmp4[15]).AvatarSizes.SIZE_16;
      obj8.children = closure_7(index(tmp4[16]).HappeningNowAvatarStack, obj9);
      tmp7Result2 = closure_7(View, obj8);
    }
    items1[1] = tmp7Result2;
    obj5.children = items1;
    const items2 = [closure_8(View, obj5), ];
    const obj10 = { stage, renderingContext, guildId: null };
    let tmp12;
    if ("guild" === renderingContext) {
      tmp12 = guild_id;
    }
    obj10.guildId = tmp12;
    items2[1] = closure_7(HappeningNowLiveStageContent, obj10);
    obj4.children = items2;
    tmp16Result = closure_8(channel_id(tmp4[13]), obj4);
    const tmp18 = channel_id(tmp4[13]);
  }
  return tmp16Result;
});
export { HappeningNowLiveStageContent };