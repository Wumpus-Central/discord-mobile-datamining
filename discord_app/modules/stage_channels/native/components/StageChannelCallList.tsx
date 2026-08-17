// discord_app/modules/stage_channels/native/components/StageChannelCallList.tsx
import closure_3 from "_slicedToArray" /* 32 */;
import importAllResult from "noop" /* 19 */;
import { MAX_AUDIENCE_ROW_LIMIT } from "MAX_STAGE_TOPIC_LENGTH" /* 4978 */;
import jsxProd from "jsxProd" /* 21 */;
import useActiveSpeakerPillScrollHandler from "useActiveSpeakerPillScrollHandler" /* 12603 */;

const require = arg1;
let c4 = importAllResult;
({ useActiveSpeakerPillScrollHandler: c5, useActiveSpeakerPillState: closure_6 } = require("useActiveSpeakerPillScrollHandler"));
({ jsx: closure_8, jsxs: c9 } = jsxProd);
let obj = { direction: require("Button").CutoutDirection.RIGHT, radius: 13, inset: -6 };
let closure_11 = { STREAM: 0, [0]: "STREAM", SPEAKER: 1, [1]: "SPEAKER", AUDIENCE: 2, [2]: "AUDIENCE" };
let closure_12 = importAllResult.memo((channel) => {
  channel = channel.channel;
  const listSections = channel.listSections;
  const rowsBySection = channel.rowsBySection;
  let first;
  importAllResult = undefined;
  let first1;
  let callback2;
  let first2;
  let callback3;
  let sections;
  let actualStageSpeakerCount;
  let stageParticipantsCount;
  let callback;
  let itemSize;
  let mapped;
  callback2 = undefined;
  let memo1;
  let memo2;
  let tmp = first(importAllResult.useState(false), 2);
  first = tmp[0];
  importAllResult = tmp3;
  let tmp4 = first(importAllResult.useState(false), 2);
  first1 = tmp4[0];
  callback2 = tmp6;
  const tmp7 = first(callback2(), 2);
  first2 = tmp7[0];
  callback3 = tmp9;
  listSections(rowsBySection[8])(() => () => {
    callback(false);
  });
  let items = [listSections];
  sections = importAllResult.useMemo(() => {
    let num = listSections[stageParticipantsCount.STREAM];
    if (num == null) {
      num = 1;
    }
    const items = [Math.max(num, 1), , ];
    let num2 = tmp[tmp2.SPEAKER];
    if (num2 == null) {
      num2 = 1;
    }
    items[1] = Math.max(num2, 1);
    items[2] = listSections[stageParticipantsCount.AUDIENCE];
    return items;
  }, items);
  actualStageSpeakerCount = channel(rowsBySection[9]).useActualStageSpeakerCount(channel.id);
  obj = channel(rowsBySection[9]);
  stageParticipantsCount = channel(rowsBySection[9]).useStageParticipantsCount(channel.id, channel(rowsBySection[7]).StageChannelParticipantNamedIndex.AUDIENCE);
  let items1 = [actualStageSpeakerCount, stageParticipantsCount];
  callback = importAllResult.useCallback((arg0) => {
    if (stageParticipantsCount.STREAM === arg0) {
      return 0;
    } else if (tmp.SPEAKER === arg0) {
      let num4 = 48;
      if (0 === actualStageSpeakerCount) {
        num4 = 0;
      }
      return num4;
    } else if (tmp.AUDIENCE === arg0) {
      let num2 = 48;
      if (0 === stageParticipantsCount) {
        num2 = 0;
      }
      return num2;
    } else {
      listSections(rowsBySection[10])(null != arg0, "Section Not Found");
      return 0;
    }
  }, items1);
  const items2 = [callback, rowsBySection, first, first1];
  itemSize = importAllResult.useCallback((arg0, arg1) => {
    if (null == arg1) {
      return 0;
    } else {
      let num = 0;
      if (0 === arg1) {
        num = callback(arg0);
      }
      if (stageParticipantsCount.STREAM === arg0) {
        let sum = num;
        if (null != rowsBySection[arg0][arg1]) {
          sum = channel(rowsBySection[6]).SPEAKER_TILE_HEIGHTS.FULL + 8 + num;
        }
        return sum;
      } else if (tmp2.SPEAKER === arg0) {
        if (null == rowsBySection[arg0][arg1]) {
          return num;
        } else {
          if (arg1 > 0) {
            let sum1 = channel(rowsBySection[6]).SPEAKER_TILE_HEIGHTS.THIRD + 8;
          } else if (1 === length) {
            sum1 = channel(rowsBySection[6]).SPEAKER_TILE_HEIGHTS.FULL + 8;
          } else if (2 === length) {
            sum1 = channel(rowsBySection[6]).SPEAKER_TILE_HEIGHTS.HALF + 8;
          } else {
            sum1 = channel(rowsBySection[6]).SPEAKER_TILE_HEIGHTS.THIRD + 8;
          }
          let sum2 = num;
          if (!first1) {
            sum2 = sum1 + num;
          }
          return sum2;
        }
      } else if (tmp2.AUDIENCE === arg0) {
        let sum3 = num;
        if (!first) {
          sum3 = 102 + num;
        }
        return sum3;
      } else {
        listSections(rowsBySection[10])(null != arg0, "Section Not Found");
        return 0;
      }
    }
  }, items2);
  let obj2 = channel(rowsBySection[9]);
  const stageParticipants = channel(rowsBySection[9]).useStageParticipants(channel.id, channel(rowsBySection[7]).StageChannelParticipantNamedIndex.SPEAKER);
  const found = stageParticipants.filter((type) => type.type === channel(rowsBySection[7]).StageChannelParticipantTypes.VOICE);
  mapped = found.map((user) => user.user);
  const items3 = [tmp[1], first, first1, tmp4[1], actualStageSpeakerCount, stageParticipantsCount, mapped];
  callback2 = importAllResult.useCallback((arg0) => {
    if (stageParticipantsCount.STREAM === arg0) {
      return null;
    } else if (tmp.AUDIENCE === arg0) {
      let tmp13 = null;
      if (0 !== stageParticipantsCount) {
        obj = { label: null, count: null, onToggleCollapse: null, collapsed: null };
        const intl = channel(rowsBySection[12]).intl;
        obj[0] = intl.string(channel(rowsBySection[12]).t["3foUu5"]);
        obj[1] = tmp12;
        obj[2] = function onToggleCollapse() {
          return callback(!closure_3);
        };
        obj[3] = first;
        tmp13 = callback(listSections(rowsBySection[11]), obj);
        const tmp17 = listSections(rowsBySection[11]);
      }
      return tmp13;
    } else if (tmp.SPEAKER === arg0) {
      let tmp21Result = null;
      if (0 !== actualStageSpeakerCount) {
        obj = { label: null, count: null, onToggleCollapse: null, collapsed: null, children: null };
        const intl2 = channel(rowsBySection[12]).intl;
        obj[0] = intl2.string(channel(rowsBySection[12]).t.CduOkx);
        obj[1] = tmp6;
        obj[2] = function onToggleCollapse() {
          return callback2(!closure_5);
        };
        obj[3] = first1;
        tmp21Result = undefined;
        if (first1) {
          obj = { users: null, max: 10, avatarSize: null, cutout: null };
          obj[0] = mapped;
          obj[2] = tmp25(tmp23[5]).AvatarSizes.XSMALL_20;
          obj[3] = actualStageSpeakerCount;
          tmp21Result = tmp21(tmp22(tmp23[13]), obj);
          const tmp22Result = tmp22(tmp23[13]);
        }
        obj[4] = tmp21Result;
        tmp21Result = tmp21(listSections(rowsBySection[11]), obj);
        tmp22 = listSections;
        const tmp24 = listSections(rowsBySection[11]);
        tmp25 = channel;
      }
      return tmp21Result;
    } else {
      listSections(rowsBySection[10])(null != arg0, "Section Not Found");
      return null;
    }
  }, items3);
  const renderSectionFooter = importAllResult.useCallback((arg0) => {
    if (stageParticipantsCount.SPEAKER !== arg0) {
      if (stageParticipantsCount.AUDIENCE !== arg0) {
        listSections(rowsBySection[10])(null != arg0, "Section Not Found");
        return null;
      }
    }
    return null;
  }, []);
  const items4 = [channel, callback2, rowsBySection, first, first1];
  const sectionFooterSize = importAllResult.useCallback((arg0) => {
    if (stageParticipantsCount.SPEAKER === arg0) {
      return 0;
    } else if (tmp.AUDIENCE === arg0) {
      return 160;
    } else {
      listSections(rowsBySection[10])(null != arg0, "Section Not Found");
      return 0;
    }
  }, []);
  const items5 = [sections, itemSize];
  const renderItem = importAllResult.useCallback((arg0, arg1) => {
    let tmp = null;
    if (0 === arg1) {
      tmp = callback2(arg0);
    }
    if (null == rowsBySection[arg0][arg1]) {
      return tmp;
    } else if (stageParticipantsCount.STREAM === arg0) {
      obj = { children: null };
      obj = { channel: null, participants: null, row: null };
      obj[0] = channel;
      obj[1] = tmp3[arg0][arg1];
      obj[2] = arg1;
      obj[0] = callback(listSections(rowsBySection[14]), obj);
      const _HermesInternal3 = HermesInternal;
      return callback(React.Fragment, obj, "stream-" + arg0 + "-" + arg1);
    } else if (tmp31.SPEAKER === arg0) {
      const items = [tmp, ];
      let tmp19 = !first1;
      if (!first1) {
        obj1 = { channel: null, participants: null, row: null };
        obj1[0] = channel;
        obj1[1] = tmp3[arg0][arg1];
        obj1[2] = arg1;
        tmp19 = callback(listSections(rowsBySection[14]), obj1);
      }
      const obj2 = { children: null };
      items[1] = tmp19;
      obj2[0] = items;
      const _HermesInternal2 = HermesInternal;
      return sections(React.Fragment, obj2, "speaker-" + arg0 + "-" + arg1);
    } else if (tmp31.AUDIENCE === arg0) {
      const items1 = [tmp, ];
      let tmp10 = !first;
      if (!first) {
        obj = { channel: null, participants: null };
        obj[0] = channel;
        obj[1] = tmp3[arg0][arg1];
        tmp10 = callback(listSections(rowsBySection[15]), obj);
      }
      const obj3 = { children: null };
      items1[1] = tmp10;
      obj3[0] = items1;
      const _HermesInternal = HermesInternal;
      return sections(React.Fragment, obj3, "audience-" + arg0 + "-" + arg1);
    } else {
      listSections(rowsBySection[10])(null != arg0, "Section Not Found");
      return null;
    }
  }, items4);
  memo1 = importAllResult.useMemo(() => {
    let num = 0;
    if (sections[stageParticipantsCount.STREAM] > 0) {
      num = itemSize(tmp.STREAM, 0);
    }
    return num;
  }, items5);
  const items6 = [sections, itemSize];
  memo2 = importAllResult.useMemo(() => {
    let tmp4;
    let num = 0;
    let num2 = 0;
    let num3 = 0;
    if (0 < sections[stageParticipantsCount.SPEAKER]) {
      do {
        let tmp = itemSize;
        let tmp2 = stageParticipantsCount;
        num2 = num2 + itemSize(stageParticipantsCount.SPEAKER, num);
        num = num + 1;
        let tmp3 = sections;
        num3 = num2;
        tmp4 = sections[stageParticipantsCount.SPEAKER];
      } while (num < tmp4);
    }
    return num3;
  }, items6);
  const items7 = [tmp7[1], first2, memo2, memo1];
  const onScroll = importAllResult.useCallback((nativeEvent) => {
    const y = nativeEvent.nativeEvent.contentOffset.y;
    const diff = memo2 + memo1 - 60;
    let tmp2 = first2;
    if (!first2) {
      if (y > diff) {
        callback(true);
      }
    }
    if (tmp2) {
      tmp2 = y < diff;
    }
    if (tmp2) {
      callback(false);
    }
  }, items7);
  return callback3(listSections(rowsBySection[16]), { ref: first(first1(), 1)[0], sections, renderItem, itemSize, renderSectionFooter, sectionFooterSize, onScroll });
});
const result = require("set").fileFinishedImporting("modules/stage_channels/native/components/StageChannelCallList.tsx");

export default function StageChannelCallList(channel) {
  channel = channel.channel;
  let width;
  let isScreenLandscape;
  obj = width(12627);
  const throttleDurationForChannel = obj.useThrottleDurationForChannel(channel.id);
  width = isScreenLandscape(1494)().width;
  isScreenLandscape = width(8944).useIsScreenLandscape();
  const items = [width, isScreenLandscape];
  const memo = importAllResult.useMemo(() => {
    let num = 3;
    if (isScreenLandscape) {
      const _Math = Math;
      const _Math2 = Math;
      num = Math.max(3, Math.floor(width / tmp2(tmp3[6]).LANDSCAPE_MAX_TILE_WIDTH));
    }
    obj = {};
    obj[width(closure_1_2[7]).StageChannelParticipantNamedIndex.SPEAKER] = num;
    obj[width(closure_1_2[7]).StageChannelParticipantNamedIndex.AUDIENCE] = closure_1_7;
    return obj;
  }, items);
  const obj2 = width(8944);
  const tmp4 = callback(width(12627).useStageChannelParticipantsListThrottled(channel.id, memo, throttleDurationForChannel, true), 2);
  obj = { channel, listSections: tmp4[0], rowsBySection: tmp4[1] };
  return callback3(closure_12, obj);
};