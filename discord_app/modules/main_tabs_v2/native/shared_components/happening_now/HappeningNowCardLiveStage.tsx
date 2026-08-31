// === Module 15623: HappeningNowLiveStageContent ===

// Module 15623 (HappeningNowLiveStageContent)
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import getNicknameDefault from "getNickname" /* 4641 */;
import HAPPENING_NOW_CARD_MARGIN_RIGHT from "HAPPENING_NOW_CARD_MARGIN_RIGHT" /* 14858 */;
import useLiveStageData from "useLiveStageData" /* 15624 */;
import importAllResult from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import HAPPENING_NOW_PANELS_CONTAINER_PADDING from "HAPPENING_NOW_PANELS_CONTAINER_PADDING" /* 14857 */;
import { AnalyticEvents } from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4448 */;

require = arg1;
class HappeningNowLiveStageContent {
  constructor(arg0) {
    ({ stage, streamingUser, guildId } = global);
    tmp2 = closure_0;
    tmp3 = closure_2;
    tmp = closure_9();
    obj = require("useLiveStageData");
    liveStageData = obj.useLiveStageData(stage);
    ({ speakers, friends } = liveStageData);
    tmp5 = require("computeChannelName")(liveStageData.channel);
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
        obj[0] = speakers;
        if (null != streamingUser) {
          tmp17 = closure_11;
          ON_STAGE2 = closure_11.SHARING;
        } else {
          tmp16 = closure_11;
          ON_STAGE2 = closure_11.ON_STAGE;
        }
        obj[1] = ON_STAGE2;
        obj[2] = guildId;
        tmp14Result = tmp14(obj);
      }
    }
    if (friends.length > 0) {
      obj1 = { users: null, action: null, guildId: null };
      obj1[0] = friends;
      tmp11 = null;
      tmp10 = getUsersSubtitle;
      if (null != streamingUser) {
        tmp13 = closure_11;
        LISTENING = closure_11.WATCHING;
      } else {
        tmp12 = closure_11;
        LISTENING = closure_11.LISTENING;
      }
      obj1[1] = LISTENING;
      obj1[2] = guildId;
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
        obj2[0] = tmp7;
        if (null != streamingUser) {
          tmp9 = closure_11;
          ON_STAGE = closure_11.SHARING;
        } else {
          tmp8 = closure_11;
          ON_STAGE = closure_11.ON_STAGE;
        }
        obj2[1] = ON_STAGE;
        obj2[2] = guildId;
        tmp10Result = tmp19(obj2);
      }
    }
    obj3 = { style: tmp.content, children: null };
    obj4 = { lineClamp: 3, children: stage.topic };
    items2 = [, ];
    items2[0] = jsx(require("HAPPENING_NOW_CARD_MARGIN_RIGHT").HappeningNowCardHeader, obj4);
    items2[1] = jsx(require("HAPPENING_NOW_CARD_MARGIN_RIGHT").HappeningNowCardSubtitle, { lineClamp: 1, children: tmp10Result });
    obj3[1] = items2;
    return jsxs(View, obj3);
  }
}
function getUsersSubtitle(arg0) {
  ({ users, action, guildId } = arg0);
  if (0 === users.length) {
    return "";
  } else if (1 === length) {
    const first = users[0];
    if (constants.LISTENING === action) {
      const intl9 = getSystemLocale.intl;
      let obj = { name: null };
      obj[0] = getNicknameDefault.getName(guildId, null, first);
      let str3 = intl9.formatToPlainString(getSystemLocale.t.lJXKtO, obj);
      const obj14 = getNicknameDefault;
    } else if (tmp16.WATCHING === action) {
      const intl8 = getSystemLocale.intl;
      obj = { name: null };
      obj[0] = getNicknameDefault.getName(guildId, null, first);
      str3 = intl8.formatToPlainString(getSystemLocale.t.iWY9wg, obj);
      const obj12 = getNicknameDefault;
    } else if (tmp16.ON_STAGE === action) {
      const intl7 = getSystemLocale.intl;
      obj1 = { name: null };
      let obj9 = getNicknameDefault;
      obj1[0] = obj9.getName(guildId, null, first);
      str3 = intl7.formatToPlainString(getSystemLocale.t["5uJ3+u"], obj1);
    } else {
      str3 = "";
      if (tmp16.SHARING === action) {
        const intl12 = getSystemLocale.intl;
        const obj2 = { name: null };
        obj2[0] = getNicknameDefault.getName(guildId, null, first);
        str3 = intl12.formatToPlainString(getSystemLocale.t["5oa7dX"], obj2);
        const obj19 = getNicknameDefault;
      }
    }
    return str3;
  } else if (2 === length) {
    [tmp4, tmp5] = users;
    let obj3 = getNicknameDefault;
    const name = obj3.getName(guildId, null, tmp4);
    let obj4 = getNicknameDefault;
    const name1 = obj4.getName(guildId, null, tmp5);
    if (constants.LISTENING === action) {
      const intl6 = getSystemLocale.intl;
      obj3 = { name1: null, name2: null };
      obj3[0] = name;
      obj3[1] = name1;
      let str2 = intl6.formatToPlainString(getSystemLocale.t.GFMcxs, obj3);
    } else if (tmp11.WATCHING === action) {
      const intl5 = getSystemLocale.intl;
      obj4 = { name1: null, name2: null };
      obj4[0] = name;
      obj4[1] = name1;
      str2 = intl5.formatToPlainString(getSystemLocale.t.afUnti, obj4);
    } else if (tmp11.ON_STAGE === action) {
      const intl4 = getSystemLocale.intl;
      const obj5 = { name1: null, name2: null };
      obj5[0] = name;
      obj5[1] = name1;
      str2 = intl4.formatToPlainString(getSystemLocale.t.SrTuJ6, obj5);
    } else {
      str2 = "";
      if (tmp11.SHARING === action) {
        const intl11 = getSystemLocale.intl;
        const obj6 = { name1: null, name2: null };
        obj6[0] = name;
        obj6[1] = name1;
        str2 = intl11.formatToPlainString(getSystemLocale.t.uRjRHT, obj6);
      }
    }
    return str2;
  } else {
    let str = "";
    if (0 !== users.length) {
      const name2 = getNicknameDefault.getName(guildId, null, users[0]);
      const diff = users.length - 1;
      if (constants.LISTENING === action) {
        const intl3 = getSystemLocale.intl;
        const obj7 = { name: null, count: null };
        obj7[0] = name2;
        obj7[1] = diff;
        str = intl3.formatToPlainString(getSystemLocale.t.CsvyMc, obj7);
      } else if (tmp34.WATCHING === action) {
        const intl2 = getSystemLocale.intl;
        const obj8 = { name: null, count: null };
        obj8[0] = name2;
        obj8[1] = diff;
        str = intl2.formatToPlainString(getSystemLocale.t.Iwxee0, obj8);
      } else if (tmp34.ON_STAGE === action) {
        const intl = getSystemLocale.intl;
        obj = { name: null, count: null };
        obj[0] = name2;
        obj[1] = diff;
        str = intl.formatToPlainString(getSystemLocale.t.zRm3ZX, obj);
      } else {
        str = "";
        if (tmp34.SHARING === action) {
          const intl10 = getSystemLocale.intl;
          obj9 = { name: null, count: null };
          obj9[0] = name2;
          obj9[1] = diff;
          str = intl10.formatToPlainString(getSystemLocale.t["m+NEcC"], obj9);
        }
      }
      const obj15 = getNicknameDefault;
    }
    return str;
  }
}
let c3 = importAllResult;
({ HappeningNowCardTrackingType: c5, HAPPENING_NOW_CONTENT_HEIGHT, HAPPENING_NOW_STAGE_PREVIEW_HEIGHT, HAPPENING_NOW_STAGE_PREVIEW_WIDTH } = HAPPENING_NOW_PANELS_CONTAINER_PADDING);
({ jsx: error, jsxs: closure_8 } = jsxProd);
let obj = { content: { flexShrink: 1, gap: 2 }, stagePreviewContainer: { marginRight: 12, flexDirection: "column", justifyContent: "space-between", height: "100%", width: HAPPENING_NOW_STAGE_PREVIEW_WIDTH }, stagePreviewBackground: null, stagePreviewBackgroundNoAudience: null, avatarStackContainer: null };
obj = { height: HAPPENING_NOW_STAGE_PREVIEW_HEIGHT, backgroundColor: ThemesDefault.unsafe_rawColors.PRIMARY_800, borderRadius: ThemesDefault.radii.sm, alignItems: "center", paddingTop: 6 };
obj[2] = obj;
createCacheKey = { height: HAPPENING_NOW_CONTENT_HEIGHT, backgroundColor: ThemesDefault.unsafe_rawColors.PRIMARY_800, borderRadius: ThemesDefault.radii.sm, justifyContent: "center", alignItems: "center" };
obj[3] = createCacheKey;
obj[4] = { backgroundColor: ThemesDefault.colors.STAGE_CARD_PILL_BG, padding: 2, borderRadius: ThemesDefault.radii.xl, position: "absolute", alignSelf: "center", bottom: 0 };
let closure_9 = createCacheKey.createStyles(obj);
let closure_11 = { LISTENING: 0, [0]: "LISTENING", WATCHING: 1, [1]: "WATCHING", ON_STAGE: 2, [2]: "ON_STAGE", SHARING: 3, [3]: "SHARING" };
let obj2 = { backgroundColor: ThemesDefault.colors.STAGE_CARD_PILL_BG, padding: 2, borderRadius: ThemesDefault.radii.xl, position: "absolute", alignSelf: "center", bottom: 0 };
const memoResult = importAllResult.memo((arg0) => {
  ({ stage, index } = arg0);
  ({ fullwidth, renderingContext, panelVariant } = arg0);
  if (panelVariant === undefined) {
    panelVariant = false;
  }
  let channel_id;
  let guild_id;
  const tmp = callback3();
  channel_id = stage.channel_id;
  guild_id = stage.guild_id;
  const items = [channel_id, guild_id, index];
  const callback = importAllResult.useCallback(() => {
    let obj = channel_id(guild_id[7]);
    obj = { order: index, guild_id, type: closure_1_5.GUILD_LIVE_STAGE_CARD, destination_channel_id: channel_id };
    obj.track(closure_1_6.ACTIVITY_CARD_CLICKED, obj);
    index(guild_id[9])(guild_id[8], guild_id.paths).then((arg0) => {
      arg0.default(closure_1, true);
    });
  }, items);
  let obj = index(guild_id[10]);
  const liveStageData = obj.useLiveStageData(stage);
  ({ speakers, audienceCount, audiencePrefixedFriends } = liveStageData);
  obj1 = index(guild_id[11]);
  const stream = obj1.useCallActivityData(channel_id).stream;
  if (null != stream) {
    obj = { index: null, userId: null, guildId: null, stream: null, fullwidth: null, renderingContext: null, panelVariant: null };
    obj[0] = index;
    obj[1] = stream.ownerId;
    obj[2] = guild_id;
    obj[3] = stream;
    obj[4] = fullwidth;
    obj[5] = renderingContext;
    obj[6] = panelVariant;
    let tmp16Result = callback(channel_id(tmp4[12]), obj);
  } else {
    obj = { onPress: null, width: null, IconComponent: null, panelVariant: null, children: null };
    obj[0] = callback;
    let str = "large";
    if (fullwidth) {
      str = "full";
    }
    obj[1] = str;
    obj[2] = tmp3(tmp4[14]).StageIcon;
    obj[3] = panelVariant;
    obj1 = { style: null, children: null };
    obj1[0] = tmp.stagePreviewContainer;
    const obj2 = { style: null, children: null };
    obj2[0] = 0 === audienceCount ? tmp.stagePreviewBackgroundNoAudience : tmp.stagePreviewBackground;
    let tmp7Result = speakers.length > 0;
    if (tmp7Result) {
      const obj3 = { user: null, avatarDecoration: null, guildId: null, size: null };
      obj3[0] = speakers[0];
      obj3[1] = speakers[0].avatarDecoration;
      obj3[2] = guild_id;
      obj3[3] = tmp3(tmp4[15]).AvatarSizes.REFRESH_MEDIUM_32;
      tmp7Result = tmp7(tmp3(tmp4[15]).Avatar, obj3);
    }
    obj2[1] = tmp7Result;
    const items1 = [callback(View, obj2), ];
    tmp7Result = null;
    if (audienceCount > 0) {
      const obj4 = { style: null, children: null };
      obj4[0] = tmp.avatarStackContainer;
      const obj5 = { users: null, guildId: null, userCount: null, isStage: true, avatarSize: null };
      obj5[0] = audiencePrefixedFriends;
      obj5[1] = guild_id;
      let num2 = 0;
      const sum = audienceCount + speakers.length;
      if (speakers.length > 0) {
        num2 = 1;
      }
      obj5[2] = sum - num2;
      obj5[4] = tmp3(tmp4[15]).AvatarSizes.SIZE_16;
      obj4[1] = tmp7(tmp3(tmp4[16]).HappeningNowAvatarStack, obj5);
      tmp7Result = tmp7(tmp6, obj4);
    }
    items1[1] = tmp7Result;
    obj1[1] = items1;
    const items2 = [closure_8(View, obj1), ];
    const obj6 = { stage: null, renderingContext: null, guildId: null };
    obj6[0] = stage;
    obj6[1] = renderingContext;
    let tmp12;
    if ("guild" === renderingContext) {
      tmp12 = guild_id;
    }
    obj6[2] = tmp12;
    items2[1] = callback(HappeningNowLiveStageContent, obj6);
    obj[4] = items2;
    tmp16Result = tmp16(channel_id(tmp4[13]), obj);
    const tmp11 = HappeningNowLiveStageContent;
    const tmp18 = channel_id(tmp4[13]);
  }
  return tmp16Result;
});
const result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowCardLiveStage.tsx");

export default memoResult;
export { HappeningNowLiveStageContent };