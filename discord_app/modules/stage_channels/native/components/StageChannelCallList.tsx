// discord_app/modules/stage_channels/native/components/StageChannelCallList.tsx
import _modDef38 from "../../../../../_runtime/metro/00038__.js";
import util from "../../../../intl/index.native.tsx";
import native from "../../../../design/void/native.tsx";
import StageChannelParticipants from "../../StageChannelParticipants.tsx";
import SpeakerTile from "SpeakerTile.tsx";
import StageSectionHeaderDefault from "StageSectionHeader.tsx";
import UserSummaryItemDefault from "../../../../components_native/common/UserSummaryItem.tsx";
import StageGridRowDefault from "StageGridRow.tsx";
import AudienceGridRowDefault from "AudienceGridRow.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const StageChannelListStore = fn(10045);
({ useActiveSpeakerPillScrollHandler: hasOwnProperty, useActiveSpeakerPillState: metroRequire } =
  StageChannelListStore);
const MAX_AUDIENCE_ROW_LIMIT = fn(5414).MAX_AUDIENCE_ROW_LIMIT;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
let cutout = { direction: fn(1178).CutoutDirection.RIGHT, radius: 13, inset: -6 };
let closure_11 = { STREAM: 0, [0]: "STREAM", SPEAKER: 1, [1]: "SPEAKER", AUDIENCE: 2, [2]: "AUDIENCE" };
let closure_12 = noop.memo((channel) => {
  channel = channel.channel;
  const listSections = channel.listSections;
  const rowsBySection = channel.rowsBySection;
  let collapsed;
  noop = undefined;
  let tmp = collapsed(noop.useState(false), 2);
  collapsed = tmp[0];
  noop = tmp3;
  let tmp4 = collapsed(noop.useState(false), 2);
  const first1 = tmp4[0];
  closure_6 = tmp6;
  const tmp7 = collapsed(closure_6(), 2);
  const first2 = tmp7[0];
  closure_8 = tmp9;
  listSections(rowsBySection[8])(() => () => {
    closure_1_8(false);
  });
  let items = [listSections];
  const sections = noop.useMemo(() => {
    let num = listSections[stageParticipantsCount.STREAM];
    if (num == null) {
      num = 1;
    }
    const items = [Math.max(num, 1), ,];
    let num2 = listSections[stageParticipantsCount.SPEAKER];
    if (num2 == null) {
      num2 = 1;
    }
    items[1] = Math.max(num2, 1);
    items[2] = listSections[stageParticipantsCount.AUDIENCE];
    return items;
  }, items);
  const actualStageSpeakerCount = channel(rowsBySection[9]).useActualStageSpeakerCount(channel.id);
  let obj = channel(rowsBySection[9]);
  const stageParticipantsCount = channel(rowsBySection[9]).useStageParticipantsCount(
    channel.id,
    channel(rowsBySection[7]).StageChannelParticipantNamedIndex.AUDIENCE,
  );
  let items1 = [actualStageSpeakerCount, stageParticipantsCount];
  const callback = noop.useCallback((arg0) => {
    if (stageParticipantsCount.STREAM === arg0) {
      return 0;
    } else if (stageParticipantsCount.SPEAKER === arg0) {
      let num4 = 48;
      if (0 === actualStageSpeakerCount) {
        num4 = 0;
      }
      return num4;
    } else if (stageParticipantsCount.AUDIENCE === arg0) {
      let num2 = 48;
      if (0 === stageParticipantsCount) {
        num2 = 0;
      }
      return num2;
    } else {
      _modDef38(null != arg0, "Section Not Found");
      return 0;
    }
  }, items1);
  const items2 = [callback, rowsBySection, collapsed, first1];
  const itemSize = noop.useCallback((arg0, arg1) => {
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
          sum = SpeakerTile.SPEAKER_TILE_HEIGHTS.FULL + 8 + num;
        }
        return sum;
      } else if (stageParticipantsCount.SPEAKER === arg0) {
        if (null == rowsBySection[arg0][arg1]) {
          return num;
        } else {
          if (arg1 > 0) {
            let sum1 = SpeakerTile.SPEAKER_TILE_HEIGHTS.THIRD + 8;
          } else if (1 === length) {
            sum1 = SpeakerTile.SPEAKER_TILE_HEIGHTS.FULL + 8;
          } else if (2 === length) {
            sum1 = SpeakerTile.SPEAKER_TILE_HEIGHTS.HALF + 8;
          } else {
            sum1 = SpeakerTile.SPEAKER_TILE_HEIGHTS.THIRD + 8;
          }
          let sum2 = num;
          if (!first1) {
            sum2 = sum1 + num;
          }
          return sum2;
        }
      } else if (stageParticipantsCount.AUDIENCE === arg0) {
        let sum3 = num;
        if (!first) {
          sum3 = 102 + num;
        }
        return sum3;
      } else {
        _modDef38(null != arg0, "Section Not Found");
        return 0;
      }
    }
  }, items2);
  let obj2 = channel(rowsBySection[9]);
  const stageParticipants = channel(rowsBySection[9]).useStageParticipants(
    channel.id,
    channel(rowsBySection[7]).StageChannelParticipantNamedIndex.SPEAKER,
  );
  const found = stageParticipants.filter(
    (type) => type.type === channel(rowsBySection[7]).StageChannelParticipantTypes.VOICE,
  );
  const mapped = found.map((user) => user.user);
  const items3 = [tmp[1], collapsed, first1, tmp4[1], actualStageSpeakerCount, stageParticipantsCount, mapped];
  const callback2 = noop.useCallback((arg0) => {
    if (stageParticipantsCount.STREAM === arg0) {
      return null;
    } else if (stageParticipantsCount.AUDIENCE === arg0) {
      let tmp13 = null;
      if (0 !== stageParticipantsCount) {
        cutout = { label: null, count: null, onToggleCollapse: null, collapsed: null };
        const intl = util.intl;
        cutout.label = intl.string(util.t["3foUu5"]);
        cutout.count = tmp12;
        cutout.onToggleCollapse = function onToggleCollapse() {
          return closure_1_4(!collapsed);
        };
        cutout.collapsed = collapsed;
        tmp13 = React6(StageSectionHeaderDefault, cutout);
      }
      return tmp13;
    } else if (stageParticipantsCount.SPEAKER === arg0) {
      let tmp21Result = null;
      if (0 !== actualStageSpeakerCount) {
        cutout = { label: null, count: null, onToggleCollapse: null, collapsed: null, children: null };
        const intl2 = util.intl;
        cutout.label = intl2.string(util.t.CduOkx);
        cutout.count = tmp6;
        cutout.onToggleCollapse = function onToggleCollapse() {
          return closure_1_6(!first1);
        };
        cutout.collapsed = first1;
        tmp21Result = undefined;
        if (first1) {
          cutout = { users: mapped, max: 10, avatarSize: native.AvatarSizes.XSMALL_20, cutout: null };
          cutout.cutout = cutout;
          tmp21Result = React6(UserSummaryItemDefault, cutout);
          const tmp22Result = UserSummaryItemDefault;
        }
        cutout.children = tmp21Result;
        tmp21Result = React6(StageSectionHeaderDefault, cutout);
      }
      return tmp21Result;
    } else {
      _modDef38(null != arg0, "Section Not Found");
      return null;
    }
  }, items3);
  const renderSectionFooter = noop.useCallback((arg0) => {
    if (stageParticipantsCount.SPEAKER !== arg0) {
      if (stageParticipantsCount.AUDIENCE !== arg0) {
        listSections(rowsBySection[10])(null != arg0, "Section Not Found");
        return null;
      }
    }
    return null;
  }, []);
  const items4 = [channel, callback2, rowsBySection, collapsed, first1];
  const sectionFooterSize = noop.useCallback((arg0) => {
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
  const renderItem = noop.useCallback((arg0, row) => {
    let tmp = null;
    if (0 === row) {
      tmp = callback2(arg0);
    }
    if (null == rowsBySection[arg0][row]) {
      return tmp;
    } else if (stageParticipantsCount.STREAM === arg0) {
      let obj = { children: null };
      obj = { channel, participants: rowsBySection[arg0][row], row };
      obj.children = React6(StageGridRowDefault, obj);
      const _HermesInternal3 = HermesInternal;
      return React6(noop.Fragment, obj, "stream-" + arg0 + "-" + row);
    } else if (stageParticipantsCount.SPEAKER === arg0) {
      const items = [tmp];
      let tmp19 = !first1;
      if (!first1) {
        const obj1 = { channel, participants: rowsBySection[arg0][row], row };
        tmp19 = React6(StageGridRowDefault, obj1);
      }
      const obj2 = { children: null };
      items[1] = tmp19;
      obj2.children = items;
      const _HermesInternal2 = HermesInternal;
      return React7(noop.Fragment, obj2, "speaker-" + arg0 + "-" + row);
    } else if (stageParticipantsCount.AUDIENCE === arg0) {
      const items1 = [tmp];
      let tmp10 = !first;
      if (!first) {
        obj = { channel, participants: rowsBySection[arg0][row] };
        tmp10 = React6(AudienceGridRowDefault, obj);
      }
      const obj3 = { children: null };
      items1[1] = tmp10;
      obj3.children = items1;
      const _HermesInternal = HermesInternal;
      return React7(noop.Fragment, obj3, "audience-" + arg0 + "-" + row);
    } else {
      _modDef38(null != arg0, "Section Not Found");
      return null;
    }
  }, items4);
  const memo1 = noop.useMemo(() => {
    let num = 0;
    if (sections[stageParticipantsCount.STREAM] > 0) {
      num = itemSize(tmp.STREAM, 0);
    }
    return num;
  }, items5);
  const items6 = [sections, itemSize];
  const memo2 = noop.useMemo(() => {
    let tmp4;
    let num = 0;
    let num2 = 0;
    let num3 = 0;
    if (0 < sections[stageParticipantsCount.SPEAKER]) {
      do {
        num2 = num2 + itemSize(stageParticipantsCount.SPEAKER, num);
        num = num + 1;
        num3 = num2;
        tmp4 = sections[stageParticipantsCount.SPEAKER];
      } while (num < tmp4);
    }
    return num3;
  }, items6);
  const items7 = [tmp7[1], first2, memo2, memo1];
  const onScroll = noop.useCallback((nativeEvent) => {
    const y = nativeEvent.nativeEvent.contentOffset.y;
    const diff = memo2 + memo1 - 60;
    let tmp2 = first2;
    if (!first2) {
      if (y > diff) {
        closure_8(true);
      }
    }
    if (tmp2) {
      tmp2 = y < diff;
    }
    if (tmp2) {
      closure_8(false);
    }
  }, items7);
  return closure_8(listSections(rowsBySection[16]), {
    ref: collapsed(first1(), 1)[0],
    sections,
    renderItem,
    itemSize,
    renderSectionFooter,
    sectionFooterSize,
    onScroll,
  });
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/stage_channels/native/components/StageChannelCallList.tsx");

export default function StageChannelCallList(channel) {
  channel = channel.channel;
  let width;
  let isScreenLandscape;
  let obj = width(10071);
  const throttleDurationForChannel = obj.useThrottleDurationForChannel(channel.id);
  width = isScreenLandscape(1477)().width;
  isScreenLandscape = width(5126).useIsScreenLandscape();
  const items = [width, isScreenLandscape];
  const memo = noop.useMemo(() => {
    let num = 3;
    if (isScreenLandscape) {
      const _Math = Math;
      const _Math2 = Math;
      num = Math.max(3, Math.floor(width / SpeakerTile.LANDSCAPE_MAX_TILE_WIDTH));
    }
    const obj = {};
    obj[StageChannelParticipants.StageChannelParticipantNamedIndex.SPEAKER] = num;
    obj[StageChannelParticipants.StageChannelParticipantNamedIndex.AUDIENCE] = MAX_AUDIENCE_ROW_LIMIT;
    return obj;
  }, items);
  const obj2 = width(5126);
  const tmp4 = _slicedToArray(
    width(10071).useStageChannelParticipantsListThrottled(channel.id, memo, throttleDurationForChannel, true),
    2,
  );
  obj = { channel, listSections: tmp4[0], rowsBySection: tmp4[1] };
  return closure_8(closure_12, obj);
}
