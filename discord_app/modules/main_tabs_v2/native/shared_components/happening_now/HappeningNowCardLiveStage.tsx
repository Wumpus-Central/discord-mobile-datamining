// === Module 16070: HappeningNowCardLiveStage ===

// Module 16070 (HappeningNowCardLiveStage)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import NicknameUtilsDefault from "NicknameUtils" /* 4712 */;
import HappeningNowCard from "HappeningNowCard" /* 15295 */;
import useLiveStageData from "useLiveStageData" /* 16071 */;
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
        obj = { users: null, action: null, guildId: null };
        obj.users = speakers;
        if (null != streamingUser) {
          tmp17 = closure_11;
          ON_STAGE2 = closure_11.SHARING;
        } else {
          tmp16 = closure_11;
          ON_STAGE2 = closure_11.ON_STAGE;
        }
        obj.action = ON_STAGE2;
        obj.guildId = guildId;
        tmp14Result = tmp14(obj);
      }
    }
    if (friends.length > 0) {
      obj1 = { users: null, action: null, guildId: null };
      obj1.users = friends;
      tmp11 = null;
      tmp10 = getUsersSubtitle;
      if (null != streamingUser) {
        tmp13 = closure_11;
        LISTENING = closure_11.WATCHING;
      } else {
        tmp12 = closure_11;
        LISTENING = closure_11.LISTENING;
      }
      obj1.action = LISTENING;
      obj1.guildId = guildId;
      tmp10Result = tmp10(obj1);
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
        obj2 = { users: null, action: null, guildId: null };
        obj2.users = tmp7;
        if (null != streamingUser) {
          tmp9 = closure_11;
          ON_STAGE = closure_11.SHARING;
        } else {
          tmp8 = closure_11;
          ON_STAGE = closure_11.ON_STAGE;
        }
        obj2.action = ON_STAGE;
        obj2.guildId = guildId;
        tmp10Result = tmp19(obj2);
      }
    }
    obj3 = { style: tmp.content, children: null };
    obj4 = { lineClamp: 3, children: stage.topic };
    items2 = [, ];
    items2[0] = jsx(tmp2(tmp3[13]).HappeningNowCardHeader, obj4);
    items2[1] = jsx(tmp2(tmp3[13]).HappeningNowCardSubtitle, { lineClamp: 1, children: tmp10Result });
    obj3.children = items2;
    return jsxs(View, obj3);
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
      let obj = { name: NicknameUtilsDefault.getName(guildId, null, first) };
      let str3 = intl9.formatToPlainString(util.t.lJXKtO, obj);
    } else if (tmp16.WATCHING === action) {
      const intl8 = util.intl;
      obj = { name: NicknameUtilsDefault.getName(guildId, null, first) };
      str3 = intl8.formatToPlainString(util.t.iWY9wg, obj);
    } else if (tmp16.ON_STAGE === action) {
      const intl7 = util.intl;
      const obj1 = { name: null };
      let obj9 = NicknameUtilsDefault;
      obj1.name = obj9.getName(guildId, null, first);
      str3 = intl7.formatToPlainString(util.t["5uJ3+u"], obj1);
    } else {
      str3 = "";
      if (tmp16.SHARING === action) {
        const intl12 = util.intl;
        const obj2 = { name: NicknameUtilsDefault.getName(guildId, null, first) };
        str3 = intl12.formatToPlainString(util.t["5oa7dX"], obj2);
      }
    }
    return str3;
  } else if (2 === length) {
    [tmp4, tmp5] = users;
    let obj3 = NicknameUtilsDefault;
    const name = obj3.getName(guildId, null, tmp4);
    let obj4 = NicknameUtilsDefault;
    const name1 = obj4.getName(guildId, null, tmp5);
    if (constants2.LISTENING === action) {
      const intl6 = util.intl;
      obj3 = { name1: name, name2: name1 };
      let str2 = intl6.formatToPlainString(util.t.GFMcxs, obj3);
    } else if (tmp11.WATCHING === action) {
      const intl5 = util.intl;
      obj4 = { name1: name, name2: name1 };
      str2 = intl5.formatToPlainString(util.t.afUnti, obj4);
    } else if (tmp11.ON_STAGE === action) {
      const intl4 = util.intl;
      const obj5 = { name1: name, name2: name1 };
      str2 = intl4.formatToPlainString(util.t.SrTuJ6, obj5);
    } else {
      str2 = "";
      if (tmp11.SHARING === action) {
        const intl11 = util.intl;
        const obj6 = { name1: name, name2: name1 };
        str2 = intl11.formatToPlainString(util.t.uRjRHT, obj6);
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
        const obj7 = { name: name2, count: diff };
        str = intl3.formatToPlainString(util.t.CsvyMc, obj7);
      } else if (tmp34.WATCHING === action) {
        const intl2 = util.intl;
        const obj8 = { name: name2, count: diff };
        str = intl2.formatToPlainString(util.t.Iwxee0, obj8);
      } else if (tmp34.ON_STAGE === action) {
        const intl = util.intl;
        obj = { name: name2, count: diff };
        str = intl.formatToPlainString(util.t.zRm3ZX, obj);
      } else {
        str = "";
        if (tmp34.SHARING === action) {
          const intl10 = util.intl;
          obj9 = { name: name2, count: diff };
          str = intl10.formatToPlainString(util.t["m+NEcC"], obj9);
        }
      }
    }
    return str;
  }
}
const View = fn(17).View;
const HappeningNowConstants = fn(15294);
({ HappeningNowCardTrackingType: hasOwnProperty, HAPPENING_NOW_CONTENT_HEIGHT, HAPPENING_NOW_STAGE_PREVIEW_HEIGHT, HAPPENING_NOW_STAGE_PREVIEW_WIDTH } = HappeningNowConstants);
const AnalyticEvents = fn(1074).AnalyticEvents;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
fn(4560);
let obj = { content: { flexShrink: 1, gap: 2 }, stagePreviewContainer: { marginRight: 12, flexDirection: "column", justifyContent: "space-between", height: "100%", width: HAPPENING_NOW_STAGE_PREVIEW_WIDTH }, stagePreviewBackground: null, stagePreviewBackgroundNoAudience: null, avatarStackContainer: null };
obj = { height: HAPPENING_NOW_STAGE_PREVIEW_HEIGHT, backgroundColor: nativeDefault.unsafe_rawColors.PRIMARY_800, borderRadius: nativeDefault.radii.sm, alignItems: "center", paddingTop: 6 };
obj.stagePreviewBackground = obj;
const createStyles = { height: HAPPENING_NOW_CONTENT_HEIGHT, backgroundColor: nativeDefault.unsafe_rawColors.PRIMARY_800, borderRadius: nativeDefault.radii.sm, justifyContent: "center", alignItems: "center" };
obj.stagePreviewBackgroundNoAudience = createStyles;
obj.avatarStackContainer = { backgroundColor: nativeDefault.colors.STAGE_CARD_PILL_BG, padding: 2, borderRadius: nativeDefault.radii.xl, position: "absolute", alignSelf: "center", bottom: 0 };
const React7 = createStyles.createStyles(obj);
const constants2 = { LISTENING: 0, [0]: "LISTENING", WATCHING: 1, [1]: "WATCHING", ON_STAGE: 2, [2]: "ON_STAGE", SHARING: 3, [3]: "SHARING" };
let obj2 = { backgroundColor: nativeDefault.colors.STAGE_CARD_PILL_BG, padding: 2, borderRadius: nativeDefault.radii.xl, position: "absolute", alignSelf: "center", bottom: 0 };
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
    const obj = { order: index, guild_id, type: constants.GUILD_LIVE_STAGE_CARD, destination_channel_id: channel_id };
    obj.track(AnalyticEvents.ACTIVITY_CARD_CLICKED, obj);
    asyncRequireImpl(9536, dependencyMap.paths).then((result) => {
      result.default(channel_id, true);
    });
  }, items);
  let obj = index(guild_id[10]);
  const liveStageData = obj.useLiveStageData(stage);
  ({ speakers, audienceCount, audiencePrefixedFriends } = liveStageData);
  let obj1 = index(guild_id[11]);
  const stream = obj1.useCallActivityData(channel_id).stream;
  if (null != stream) {
    obj = { index, userId: stream.ownerId, guildId: guild_id, stream, fullwidth, renderingContext, panelVariant };
    let tmp16Result = closure_7(channel_id(tmp4[12]), obj);
  } else {
    obj = { onPress: callback, width: null, IconComponent: null, panelVariant: null, children: null };
    let str = "large";
    if (fullwidth) {
      str = "full";
    }
    obj.width = str;
    obj.IconComponent = tmp3(tmp4[14]).StageIcon;
    obj.panelVariant = panelVariant;
    obj1 = { style: tmp.stagePreviewContainer, children: null };
    const obj2 = { style: 0 === audienceCount ? tmp.stagePreviewBackgroundNoAudience : tmp.stagePreviewBackground, children: null };
    let tmp7Result = speakers.length > 0;
    if (tmp7Result) {
      const obj3 = { user: speakers[0], avatarDecoration: speakers[0].avatarDecoration, guildId: guild_id, size: tmp3(tmp4[15]).AvatarSizes.REFRESH_MEDIUM_32 };
      tmp7Result = tmp7(tmp3(tmp4[15]).Avatar, obj3);
    }
    obj2.children = tmp7Result;
    const items1 = [closure_7(View, obj2), ];
    tmp7Result = null;
    if (audienceCount > 0) {
      const obj4 = { style: tmp.avatarStackContainer, children: null };
      const obj5 = { users: audiencePrefixedFriends, guildId: guild_id, userCount: null, isStage: true, avatarSize: null };
      let num2 = 0;
      const sum = audienceCount + speakers.length;
      if (speakers.length > 0) {
        num2 = 1;
      }
      obj5.userCount = sum - num2;
      obj5.avatarSize = tmp3(tmp4[15]).AvatarSizes.SIZE_16;
      obj4.children = tmp7(tmp3(tmp4[16]).HappeningNowAvatarStack, obj5);
      tmp7Result = tmp7(tmp6, obj4);
    }
    items1[1] = tmp7Result;
    obj1.children = items1;
    const items2 = [closure_8(View, obj1), ];
    const obj6 = { stage, renderingContext, guildId: null };
    let tmp12;
    if ("guild" === renderingContext) {
      tmp12 = guild_id;
    }
    obj6.guildId = tmp12;
    items2[1] = closure_7(HappeningNowLiveStageContent, obj6);
    obj.children = items2;
    tmp16Result = tmp16(channel_id(tmp4[13]), obj);
    const tmp18 = channel_id(tmp4[13]);
  }
  return tmp16Result;
});
export { HappeningNowLiveStageContent };