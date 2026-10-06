// discord_app/modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowCardLiveStage.tsx
import react_native from "../../../../../../_runtime/00017_react-native.js";
import react2 from "../../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../../../Constants.tsx";
import intl13 from "../../../../../intl/index.native.tsx";
import AnalyticsUtilsDefault from "../../../../../utils/AnalyticsUtils.tsx";
import asyncRequire from "../../../../../../_runtime/01987_asyncRequire.js";
import NicknameUtilsDefault from "../../../../../utils/NicknameUtils.tsx";
import useChannelNameDefault from "../../../../channel/useChannelName.tsx";
import HappeningNowCard from "HappeningNowCard.tsx";
import useLiveStageData from "useLiveStageData.tsx";
import react from "../../../../../../_runtime/00019_react.js";
import HappeningNowConstants from "HappeningNowConstants.tsx";
import Fragment from "../../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

let HAPPENING_NOW_CONTENT_HEIGHT;
let HAPPENING_NOW_STAGE_PREVIEW_HEIGHT;
let HAPPENING_NOW_STAGE_PREVIEW_WIDTH;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
function getUsersSubtitle(arg0) {
  let action;
  let guildId;
  let obj10;
  let obj12;
  let obj14;
  let obj19;
  let tmp4;
  let tmp5;
  let users;
  ({ users, action, guildId } = arg0);
  if (0 === users.length) {
    return "";
  } else if (1 === users.length) {
    let str3;
    const first = users[0];
    if (constants2.LISTENING === action) {
      const intl9 = intl13.intl;
      const formatToPlainString3 = intl9.formatToPlainString;
      const obj2 = { name: obj14.getName(guildId, null, first) };
      const lJXKtO = intl13.t.lJXKtO;
      obj14 = NicknameUtilsDefault;
      str3 = formatToPlainString3(lJXKtO, obj2);
    } else if (constants2.WATCHING === action) {
      const intl8 = intl13.intl;
      const formatToPlainString2 = intl8.formatToPlainString;
      const obj3 = { name: obj12.getName(guildId, null, first) };
      const iWY9wg = intl13.t.iWY9wg;
      obj12 = NicknameUtilsDefault;
      str3 = formatToPlainString2(iWY9wg, obj3);
    } else if (constants2.ON_STAGE === action) {
      const intl7 = intl13.intl;
      const formatToPlainString = intl7.formatToPlainString;
      const obj6 = { name: obj10.getName(guildId, null, first) };
      const prop = intl13.t["5uJ3+u"];
      obj10 = NicknameUtilsDefault;
      str3 = formatToPlainString(prop, obj6);
    } else {
      str3 = "";
      if (constants2.SHARING === action) {
        const intl12 = intl13.intl;
        const formatToPlainString4 = intl12.formatToPlainString;
        const obj7 = { name: obj19.getName(guildId, null, first) };
        const v5oa7dX = intl13.t["5oa7dX"];
        obj19 = NicknameUtilsDefault;
        str3 = formatToPlainString4(v5oa7dX, obj7);
      }
    }
    return str3;
  } else if (2 === users.length) {
    let str2;
    [tmp4, tmp5] = users;
    const obj4 = NicknameUtilsDefault;
    const name = obj4.getName(guildId, null, tmp4);
    const obj5 = NicknameUtilsDefault;
    const name1 = obj5.getName(guildId, null, tmp5);
    if (constants2.LISTENING === action) {
      const intl6 = intl13.intl;
      const obj8 = { name1: name, name2: name1 };
      str2 = intl6.formatToPlainString(intl13.t.GFMcxs, obj8);
    } else if (constants2.WATCHING === action) {
      const intl5 = intl13.intl;
      const obj9 = { name1: name, name2: name1 };
      str2 = intl5.formatToPlainString(intl13.t.afUnti, obj9);
    } else if (constants2.ON_STAGE === action) {
      const intl4 = intl13.intl;
      const obj11 = { name1: name, name2: name1 };
      str2 = intl4.formatToPlainString(intl13.t.SrTuJ6, obj11);
    } else {
      str2 = "";
      if (constants2.SHARING === action) {
        const intl11 = intl13.intl;
        const obj13 = { name1: name, name2: name1 };
        str2 = intl11.formatToPlainString(intl13.t.uRjRHT, obj13);
      }
    }
    return str2;
  } else {
    let str = "";
    if (0 !== users.length) {
      const obj15 = NicknameUtilsDefault;
      const name2 = obj15.getName(guildId, null, users[0]);
      const diff = users.length - 1;
      if (constants2.LISTENING === action) {
        const intl3 = intl13.intl;
        const obj16 = { name: name2, count: diff };
        str = intl3.formatToPlainString(intl13.t.CsvyMc, obj16);
      } else if (constants2.WATCHING === action) {
        const intl2 = intl13.intl;
        const obj17 = { name: name2, count: diff };
        str = intl2.formatToPlainString(intl13.t.Iwxee0, obj17);
      } else if (constants2.ON_STAGE === action) {
        const intl = intl13.intl;
        const obj = { name: name2, count: diff };
        str = intl.formatToPlainString(intl13.t.zRm3ZX, obj);
      } else {
        str = "";
        if (constants2.SHARING === action) {
          const intl10 = intl13.intl;
          const obj18 = { name: name2, count: diff };
          str = intl10.formatToPlainString(intl13.t["m+NEcC"], obj18);
        }
      }
    }
    return str;
  }
}
const View = react_native.View;
({
  HappeningNowCardTrackingType: hasOwnProperty,
  HAPPENING_NOW_CONTENT_HEIGHT,
  HAPPENING_NOW_STAGE_PREVIEW_HEIGHT,
  HAPPENING_NOW_STAGE_PREVIEW_WIDTH,
} = HappeningNowConstants);
const AnalyticEvents = Constants.AnalyticEvents;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  content: { flexShrink: 1, gap: 2 },
  stagePreviewContainer: {
    marginRight: 12,
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
    width: HAPPENING_NOW_STAGE_PREVIEW_WIDTH,
  },
  stagePreviewBackground: obj2,
  stagePreviewBackgroundNoAudience: obj3,
  avatarStackContainer: obj4,
};
obj2 = {
  height: HAPPENING_NOW_STAGE_PREVIEW_HEIGHT,
  backgroundColor: nativeDefault.unsafe_rawColors.PRIMARY_800,
  borderRadius: nativeDefault.radii.sm,
  alignItems: "center",
  paddingTop: 6,
};
createStyles = createStyles.createStyles;
obj3 = {
  height: HAPPENING_NOW_CONTENT_HEIGHT,
  backgroundColor: nativeDefault.unsafe_rawColors.PRIMARY_800,
  borderRadius: nativeDefault.radii.sm,
  justifyContent: "center",
  alignItems: "center",
};
obj4 = {
  backgroundColor: nativeDefault.colors.STAGE_CARD_PILL_BG,
  padding: 2,
  borderRadius: nativeDefault.radii.xl,
  position: "absolute",
  alignSelf: "center",
  bottom: 0,
};
let closure_9 = createStyles(obj);
const memoResult = react.memo((arg0) => {
  let HappeningNowAvatarStack;
  let audienceCount;
  let audiencePrefixedFriends;
  let fullwidth;
  let index;
  let items1;
  let items2;
  let num2;
  let obj9;
  let panelVariant;
  let renderingContext;
  let speakers;
  let stage;
  let str;
  let sum;
  let tmp12;
  let tmp16Result;
  let tmp7Result;
  ({ stage, index } = arg0);
  ({ fullwidth, renderingContext, panelVariant } = arg0);
  if (panelVariant === undefined) {
    panelVariant = false;
  }
  const tmp = closure_9();
  const channel_id = stage.channel_id;
  const guild_id = stage.guild_id;
  const items = [channel_id, guild_id, index];
  const callback = react.useCallback(() => {
    const obj = AnalyticsUtilsDefault;
    const obj2 = {
      order: index,
      guild_id,
      type: hasOwnProperty.GUILD_LIVE_STAGE_CARD,
      destination_channel_id: channel_id,
    };
    obj.track(AnalyticEvents.ACTIVITY_CARD_CLICKED, obj2);
    const promise = asyncRequire(12710, dependencyMap.paths);
    promise.then((result) => {
      result.default(channel_id, true);
    });
  }, items);
  let obj = index(guild_id[10]);
  const liveStageData = obj.useLiveStageData(stage);
  ({ speakers, audienceCount, audiencePrefixedFriends } = liveStageData);
  let obj2 = index(guild_id[11]);
  const stream = obj2.useCallActivityData(channel_id).stream;
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
    tmp16Result = closure_7(channel_id(tmp4[12]), obj3);
  } else {
    const obj4 = {
      onPress: callback,
      width: str,
      IconComponent: index(guild_id[14]).StageIcon,
      panelVariant,
      children: items2,
    };
    str = "large";
    const tmp18 = channel_id(guild_id[13]);
    if (fullwidth) {
      str = "full";
    }
    const obj6 = {
      style: 0 === audienceCount ? tmp.stagePreviewBackgroundNoAudience : tmp.stagePreviewBackground,
      children: tmp7Result,
    };
    tmp7Result = speakers.length > 0;
    const obj5 = { style: tmp.stagePreviewContainer, children: items1 };
    if (tmp7Result) {
      const obj7 = {
        user: speakers[0],
        avatarDecoration: speakers[0].avatarDecoration,
        guildId: guild_id,
        size: index(guild_id[15]).AvatarSizes.REFRESH_MEDIUM_32,
      };
      const Avatar = index(tmp4[15]).Avatar;
      tmp7Result = closure_7(Avatar, obj7);
    }
    items1 = [closure_7(View, obj6)];
    let tmp7Result2 = null;
    if (audienceCount > 0) {
      const obj8 = { style: tmp.avatarStackContainer, children: closure_7(HappeningNowAvatarStack, obj9) };
      obj9 = {
        users: audiencePrefixedFriends,
        guildId: guild_id,
        userCount: sum - num2,
        isStage: true,
        avatarSize: index(guild_id[15]).AvatarSizes.SIZE_16,
      };
      num2 = 0;
      HappeningNowAvatarStack = index(tmp4[16]).HappeningNowAvatarStack;
      sum = audienceCount + speakers.length;
      if (speakers.length > 0) {
        num2 = 1;
      }
      tmp7Result2 = closure_7(View, obj8);
    }
    items1[1] = tmp7Result2;
    items2 = [closure_8(View, obj5)];
    const obj10 = { stage, renderingContext, guildId: tmp12 };
    tmp12 = undefined;
    if ("guild" === renderingContext) {
      tmp12 = guild_id;
    }
    items2[1] = closure_7(closure_10, obj10);
    tmp16Result = closure_8(tmp18, obj4);
  }
  return tmp16Result;
});
let tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? (renderingContext) => {
      let ON_STAGE;
      let ON_STAGE2;
      let friends;
      let guildId;
      let items1;
      let speakers;
      let stage;
      let streamingUser;
      let tmp14;
      const obj = react2;
      const cResult = obj.c(20);
      ({ stage, streamingUser, guildId } = renderingContext);
      renderingContext = renderingContext.renderingContext;
      const tmp4 = closure_9();
      const obj2 = useLiveStageData;
      const liveStageData = obj2.useLiveStageData(stage);
      ({ speakers, friends } = liveStageData);
      const tmp6 = useChannelNameDefault(liveStageData.channel);
      if ("guild" === renderingContext) {
        let tmp28;
        let tmp31;
        if (speakers.length > 0) {
          if (cResult[0] === guildId) {
            if (cResult[1] === speakers) {
              let tmp21;
              if (cResult[2] === streamingUser) {
                tmp21 = cResult[3];
              }
              tmp14 = tmp21;
            }
          }
          let tmp24 = speakers;
          if (null != streamingUser) {
            const items = [streamingUser];
            tmp24 = items;
          }
          const obj3 = { users: tmp24, action: ON_STAGE2, guildId };
          if (null != streamingUser) {
            ON_STAGE2 = constants2.SHARING;
          } else {
            ON_STAGE2 = constants2.ON_STAGE;
          }
          const tmp22Result = getUsersSubtitle(obj3);
          cResult[0] = guildId;
          cResult[1] = speakers;
          cResult[2] = streamingUser;
          cResult[3] = tmp22Result;
          tmp21 = tmp22Result;
        }
        if (cResult[12] !== stage.topic) {
          const obj4 = { lineClamp: 3, children: stage.topic };
          const tmp30 = metroImportDefault(HappeningNowCard.HappeningNowCardHeader, obj4);
          cResult[12] = stage.topic;
          cResult[13] = tmp30;
          tmp28 = tmp30;
        } else {
          tmp28 = cResult[13];
        }
        if (cResult[14] !== tmp14) {
          const obj5 = { lineClamp: 1, children: tmp14 };
          const tmp33 = metroImportDefault(HappeningNowCard.HappeningNowCardSubtitle, obj5);
          cResult[14] = tmp14;
          cResult[15] = tmp33;
          tmp31 = tmp33;
        } else {
          tmp31 = cResult[15];
        }
        if (cResult[16] === tmp4.content) {
          if (cResult[17] === tmp28) {
            let tmp34;
            if (cResult[18] === tmp31) {
              tmp34 = cResult[19];
            }
            return tmp34;
          }
        }
        const obj6 = { style: tmp4.content, children: items1 };
        items1 = [tmp28, tmp31];
        const tmp37 = metroImportAll(View, obj6);
        cResult[16] = tmp4.content;
        cResult[17] = tmp28;
        cResult[18] = tmp31;
        cResult[19] = tmp37;
        tmp34 = tmp37;
      }
      if (friends.length > 0) {
        let LISTENING;
        if (null != streamingUser) {
          LISTENING = constants2.WATCHING;
        } else {
          LISTENING = constants2.LISTENING;
        }
        if (cResult[4] === friends) {
          if (cResult[5] === guildId) {
            let tmp18;
            if (cResult[6] === LISTENING) {
              tmp18 = cResult[7];
            }
            tmp14 = tmp18;
          }
        }
        const obj7 = { users: friends, action: LISTENING, guildId };
        const tmp20 = getUsersSubtitle(obj7);
        cResult[4] = friends;
        cResult[5] = guildId;
        cResult[6] = LISTENING;
        cResult[7] = tmp20;
        tmp18 = tmp20;
      } else {
        tmp14 = tmp6;
        if (speakers.length > 0) {
          if (cResult[8] === guildId) {
            if (cResult[9] === speakers) {
              let tmp7;
              if (cResult[10] === streamingUser) {
                tmp7 = cResult[11];
              }
              tmp14 = tmp7;
            }
          }
          let tmp10 = speakers;
          if (null != streamingUser) {
            const items2 = [streamingUser];
            tmp10 = items2;
          }
          const obj8 = { users: tmp10, action: ON_STAGE, guildId };
          if (null != streamingUser) {
            ON_STAGE = constants2.SHARING;
          } else {
            ON_STAGE = constants2.ON_STAGE;
          }
          const tmp8Result = getUsersSubtitle(obj8);
          cResult[8] = guildId;
          cResult[9] = speakers;
          cResult[10] = streamingUser;
          cResult[11] = tmp8Result;
          tmp7 = tmp8Result;
        }
      }
    }
  : (renderingContext) => {
      let LISTENING;
      let ON_STAGE;
      let ON_STAGE2;
      let friends;
      let guildId;
      let items1;
      let speakers;
      let stage;
      let streamingUser;
      let tmp10Result;
      ({ stage, streamingUser, guildId } = renderingContext);
      renderingContext = renderingContext.renderingContext;
      const tmp = closure_9();
      const obj = useLiveStageData;
      const liveStageData = obj.useLiveStageData(stage);
      ({ speakers, friends } = liveStageData);
      const tmp5 = useChannelNameDefault(liveStageData.channel);
      if ("guild" === renderingContext) {
        if (speakers.length > 0) {
          if (null != streamingUser) {
            const items = [streamingUser];
            speakers = items;
          }
          const obj2 = { users: speakers, action: ON_STAGE2, guildId };
          if (null != streamingUser) {
            ON_STAGE2 = constants2.SHARING;
          } else {
            ON_STAGE2 = constants2.ON_STAGE;
          }
          tmp10Result = getUsersSubtitle(obj2);
        }
        const obj3 = { style: tmp.content, children: items1 };
        const obj4 = { lineClamp: 3, children: stage.topic };
        items1 = [metroImportDefault(HappeningNowCard.HappeningNowCardHeader, obj4)];
        const obj5 = { lineClamp: 1, children: tmp10Result };
        items1[1] = metroImportDefault(HappeningNowCard.HappeningNowCardSubtitle, obj5);
        return metroImportAll(View, obj3);
      }
      if (friends.length > 0) {
        const obj6 = { users: friends, action: LISTENING, guildId };
        if (null != streamingUser) {
          LISTENING = constants2.WATCHING;
        } else {
          LISTENING = constants2.LISTENING;
        }
        tmp10Result = getUsersSubtitle(obj6);
      } else {
        tmp10Result = tmp5;
        if (speakers.length > 0) {
          let tmp7 = speakers;
          if (null != streamingUser) {
            const items2 = [streamingUser];
            tmp7 = items2;
          }
          const obj7 = { users: tmp7, action: ON_STAGE, guildId };
          if (null != streamingUser) {
            ON_STAGE = constants2.SHARING;
          } else {
            ON_STAGE = constants2.ON_STAGE;
          }
          tmp10Result = getUsersSubtitle(obj7);
        }
      }
    };
let closure_10 = tmp6;
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
const result = size.fileFinishedImporting(
  "modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowCardLiveStage.tsx",
);

export default memoResult;
export const HappeningNowLiveStageContent = tmp6;
