// discord_app/modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowCardLiveStage.tsx
import c from "../../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../../intl/index.native.tsx";
import AnalyticsUtilsDefault from "../../../../../utils/AnalyticsUtils.tsx";
import asyncRequireImpl from "../../../../../../_runtime/01999_asyncRequireImpl.js";
import NicknameUtilsDefault from "../../../../../utils/NicknameUtils.tsx";
import useChannelNameDefault from "../../../../channel/useChannelName.tsx";
import HappeningNowCard from "HappeningNowCard.tsx";
import useLiveStageData from "useLiveStageData.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
function getUsersSubtitle(usersSubtitle) {
  ({ users, action, guildId } = usersSubtitle);
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
const HappeningNowConstants = fn(15391);
({
  HappeningNowCardTrackingType: hasOwnProperty,
  HAPPENING_NOW_CONTENT_HEIGHT,
  HAPPENING_NOW_STAGE_PREVIEW_HEIGHT,
  HAPPENING_NOW_STAGE_PREVIEW_WIDTH,
} = HappeningNowConstants);
const AnalyticEvents = fn(1085).AnalyticEvents;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(5090);
let obj = {
  content: { flexShrink: 1, gap: 2 },
  stagePreviewContainer: {
    marginRight: 12,
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
    width: HAPPENING_NOW_STAGE_PREVIEW_WIDTH,
  },
  stagePreviewBackground: {
    height: HAPPENING_NOW_STAGE_PREVIEW_HEIGHT,
    backgroundColor: nativeDefault.unsafe_rawColors.PRIMARY_800,
    borderRadius: nativeDefault.radii.sm,
    alignItems: "center",
    paddingTop: 6,
  },
  stagePreviewBackgroundNoAudience: null,
  avatarStackContainer: null,
};
let obj3 = {
  height: HAPPENING_NOW_STAGE_PREVIEW_HEIGHT,
  backgroundColor: nativeDefault.unsafe_rawColors.PRIMARY_800,
  borderRadius: nativeDefault.radii.sm,
  alignItems: "center",
  paddingTop: 6,
};
obj.stagePreviewBackgroundNoAudience = {
  height: HAPPENING_NOW_CONTENT_HEIGHT,
  backgroundColor: nativeDefault.unsafe_rawColors.PRIMARY_800,
  borderRadius: nativeDefault.radii.sm,
  justifyContent: "center",
  alignItems: "center",
};
let obj4 = {
  height: HAPPENING_NOW_CONTENT_HEIGHT,
  backgroundColor: nativeDefault.unsafe_rawColors.PRIMARY_800,
  borderRadius: nativeDefault.radii.sm,
  justifyContent: "center",
  alignItems: "center",
};
obj.avatarStackContainer = {
  backgroundColor: nativeDefault.colors.STAGE_CARD_PILL_BG,
  padding: 2,
  borderRadius: nativeDefault.radii.xl,
  position: "absolute",
  alignSelf: "center",
  bottom: 0,
};
let closure_9 = createStyles.createStyles(obj);
let obj5 = {
  backgroundColor: nativeDefault.colors.STAGE_CARD_PILL_BG,
  padding: 2,
  borderRadius: nativeDefault.radii.xl,
  position: "absolute",
  alignSelf: "center",
  bottom: 0,
};
const ReactCompilerGating = fn(558);
const tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? function HappeningNowLiveStageContent(renderingContext) {
      const cResult = c.c(20);
      ({ stage, streamingUser, guildId } = renderingContext);
      const tmp4 = closure_9();
      const liveStageData = useLiveStageData.useLiveStageData(stage);
      ({ speakers, friends } = liveStageData);
      if ("guild" === renderingContext.renderingContext) {
        let num = 0;
        if (speakers.length > 0) {
          let tmp22 = speakers;
          if (null != streamingUser) {
            const items = [streamingUser];
            tmp22 = items;
          }
          let obj3 = { users: tmp22, action: null, guildId: null };
          if (null != streamingUser) {
            let ON_STAGE2 = constants2.SHARING;
          } else {
            ON_STAGE2 = constants2.ON_STAGE;
          }
          obj3.action = ON_STAGE2;
          obj3.guildId = guildId;
          obj3 = getUsersSubtitle(obj3);
          cResult[num] = guildId;
          cResult[1] = speakers;
          cResult[2] = streamingUser;
          num = 3;
          cResult[3] = obj3;
        }
      }
      if (friends.length > 0) {
        if (null != streamingUser) {
          let LISTENING = constants2.WATCHING;
        } else {
          LISTENING = constants2.LISTENING;
        }
        if (cResult[4] === friends) {
          if (cResult[5] === guildId) {
            if (cResult[6] === LISTENING) {
              let tmp17 = cResult[7];
            }
            let tmp13 = tmp17;
          }
        }
        const obj4 = { users: friends, action: LISTENING, guildId };
        const tmp19 = getUsersSubtitle(obj4);
        cResult[4] = friends;
        cResult[5] = guildId;
        cResult[6] = LISTENING;
        cResult[7] = tmp19;
        tmp17 = tmp19;
      } else {
        tmp13 = tmp6;
        if (speakers.length > 0) {
          if (cResult[8] === guildId) {
            if (cResult[9] === speakers) {
              if (cResult[10] === streamingUser) {
                tmp13 = cResult[11];
              }
            }
          }
          let tmp9 = speakers;
          if (null != streamingUser) {
            const items1 = [streamingUser];
            tmp9 = items1;
          }
          let obj5 = { users: tmp9, action: null, guildId: null };
          if (null != streamingUser) {
            let ON_STAGE = constants2.SHARING;
          } else {
            ON_STAGE = constants2.ON_STAGE;
          }
          obj5.action = ON_STAGE;
          obj5.guildId = guildId;
          obj5 = getUsersSubtitle(obj5);
          cResult[8] = guildId;
          cResult[9] = speakers;
          cResult[10] = streamingUser;
          cResult[11] = obj5;
        }
      }
      if (cResult[12] !== stage.topic) {
        const obj6 = { lineClamp: 3, children: stage.topic };
        const tmp29 = React5(HappeningNowCard.HappeningNowCardHeader, obj6);
        cResult[12] = stage.topic;
        cResult[13] = tmp29;
        let tmp27 = tmp29;
      } else {
        tmp27 = cResult[13];
      }
      if (cResult[14] !== tmp13) {
        const obj7 = { lineClamp: 1, children: tmp13 };
        const tmp32 = React5(HappeningNowCard.HappeningNowCardSubtitle, obj7);
        cResult[14] = tmp13;
        cResult[15] = tmp32;
        let tmp30 = tmp32;
      } else {
        tmp30 = cResult[15];
      }
      if (cResult[16] === tmp4.content) {
        if (cResult[17] === tmp27) {
          if (cResult[18] === tmp30) {
            let tmp33 = cResult[19];
          }
          return tmp33;
        }
      }
      const obj8 = { style: tmp4.content, children: null };
      const items2 = [tmp27, tmp30];
      obj8.children = items2;
      const tmp34 = closure_1_8(View, obj8);
      cResult[16] = tmp4.content;
      cResult[17] = tmp27;
      cResult[18] = tmp30;
      cResult[19] = tmp34;
      tmp33 = tmp34;
      tmp6 = useChannelNameDefault(liveStageData.channel);
    }
  : function HappeningNowLiveStageContent(renderingContext) {
      ({ stage, streamingUser, guildId } = renderingContext);
      const tmp = closure_9();
      const liveStageData = useLiveStageData.useLiveStageData(stage);
      ({ speakers, friends } = liveStageData);
      if ("guild" === renderingContext.renderingContext) {
        if (speakers.length > 0) {
          if (null != streamingUser) {
            const items = [streamingUser];
            speakers = items;
          }
          const obj2 = { users: speakers, action: null, guildId: null };
          if (null != streamingUser) {
            let ON_STAGE2 = constants2.SHARING;
          } else {
            ON_STAGE2 = constants2.ON_STAGE;
          }
          obj2.action = ON_STAGE2;
          obj2.guildId = guildId;
          getUsersSubtitle(obj2);
        }
      }
      if (friends.length > 0) {
        const obj3 = { users: friends, action: null, guildId: null };
        if (null != streamingUser) {
          let LISTENING = constants2.WATCHING;
        } else {
          LISTENING = constants2.LISTENING;
        }
        obj3.action = LISTENING;
        obj3.guildId = guildId;
        let tmp19Result = getUsersSubtitle(obj3);
      } else {
        tmp19Result = tmp5;
        if (speakers.length > 0) {
          let tmp7 = speakers;
          if (null != streamingUser) {
            const items1 = [streamingUser];
            tmp7 = items1;
          }
          const obj4 = { users: tmp7, action: null, guildId: null };
          if (null != streamingUser) {
            let ON_STAGE = constants2.SHARING;
          } else {
            ON_STAGE = constants2.ON_STAGE;
          }
          obj4.action = ON_STAGE;
          obj4.guildId = guildId;
          tmp19Result = getUsersSubtitle(obj4);
        }
      }
      const obj5 = { style: tmp.content, children: null };
      const items2 = [
        React5(HappeningNowCard.HappeningNowCardHeader, { lineClamp: 3, children: stage.topic }),
        React5(HappeningNowCard.HappeningNowCardSubtitle, { lineClamp: 1, children: tmp19Result }),
      ];
      obj5.children = items2;
      return closure_1_8(View, obj5);
    };
let closure_10 = tmp5;
const constants2 = {
  LISTENING: 0,
  [0]: "LISTENING",
  WATCHING: 1,
  [1]: "WATCHING",
  ON_STAGE: 2,
  [2]: "ON_STAGE",
  SHARING: 3,
  [3]: "SHARING",
};
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowCardLiveStage.tsx",
);

export default noop.memo(function HappeningNowCardLiveStage(arg0) {
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
    AnalyticsUtilsDefault.track(AnalyticEvents.ACTIVITY_CARD_CLICKED, {
      order: index,
      guild_id,
      type: constants.GUILD_LIVE_STAGE_CARD,
      destination_channel_id: channel_id,
    });
    const obj2 = { order: index, guild_id, type: constants.GUILD_LIVE_STAGE_CARD, destination_channel_id: channel_id };
    asyncRequireImpl(11123, dependencyMap.paths).then((result) => {
      result.default(channel_id, true);
    });
  }, items);
  const liveStageData = index(guild_id[10]).useLiveStageData(stage);
  ({ speakers, audienceCount, audiencePrefixedFriends } = liveStageData);
  let obj = index(guild_id[10]);
  const stream = index(guild_id[11]).useCallActivityData(channel_id).stream;
  if (null != stream) {
    const obj3 = {
      index,
      userId: stream.ownerId,
      guildId: guild_id,
      stream,
      fullwidth,
      renderingContext,
      panelVariant,
    };
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
    const obj6 = {
      style: 0 === audienceCount ? tmp.stagePreviewBackgroundNoAudience : tmp.stagePreviewBackground,
      children: null,
    };
    let tmp7Result = speakers.length > 0;
    if (tmp7Result) {
      const obj7 = {
        user: speakers[0],
        avatarDecoration: speakers[0].avatarDecoration,
        guildId: guild_id,
        size: index(tmp4[15]).AvatarSizes.REFRESH_MEDIUM_32,
      };
      tmp7Result = closure_7(index(tmp4[15]).Avatar, obj7);
    }
    obj6.children = tmp7Result;
    const items1 = [closure_7(View, obj6)];
    let tmp7Result2 = null;
    if (audienceCount > 0) {
      const obj8 = { style: tmp.avatarStackContainer, children: null };
      const obj9 = {
        users: audiencePrefixedFriends,
        guildId: guild_id,
        userCount: null,
        isStage: true,
        avatarSize: null,
      };
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
    const items2 = [closure_8(View, obj5)];
    const obj10 = { stage, renderingContext, guildId: null };
    let tmp12;
    if ("guild" === renderingContext) {
      tmp12 = guild_id;
    }
    obj10.guildId = tmp12;
    items2[1] = closure_7(closure_10, obj10);
    obj4.children = items2;
    tmp16Result = closure_8(channel_id(tmp4[13]), obj4);
    const tmp18 = channel_id(tmp4[13]);
  }
  return tmp16Result;
});
export const HappeningNowLiveStageContent = tmp5;
