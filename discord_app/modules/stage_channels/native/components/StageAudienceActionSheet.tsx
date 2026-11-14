// === Module 12951: StageAudienceActionSheet ===

// Module 12951 (StageAudienceActionSheet)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import _modDef4261 from "module_4261" /* 4261 */;
import Text_Text from "Text/Text" /* 5929 */;
import StageChannelActionCreators from "StageChannelActionCreators" /* 6909 */;
import TableRowGroup from "TableRowGroup" /* 7746 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 7918 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7937 */;
import TableSwitchRow from "TableSwitchRow" /* 7954 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 8476 */;
import useRequestToSpeakPermission from "useRequestToSpeakPermission" /* 12952 */;
import useStageSummaryDefault from "useStageSummary" /* 12955 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 5155 */;
import GuildMemberStore from "GuildMemberStore" /* 5218 */;

require = fn;
class RequestToSpeakSwitchRow {
  constructor(arg0) {
    obj = closure_0(closure_2[8]);
    tmp = closure_3(obj.useRequestToSpeakPermission(global.channel.id), 2);
    [tmp2, tmp3] = tmp;
    tmp4 = jsx;
    obj1 = { label: null, subLabel: null, value: null, onValueChange: null };
    intl = closure_0(closure_2[10]).intl;
    obj1.label = intl.string(closure_0(closure_2[10]).t.TYZgzW);
    intl2 = closure_0(closure_2[10]).intl;
    string = intl2.string;
    t = closure_0(closure_2[10]).t;
    if (tmp2) {
      stringResult = string(t["JcFI/U"]);
    } else {
      stringResult = string(t.laPwJQ);
    }
    obj1.subLabel = stringResult;
    obj1.value = tmp2;
    obj1.onValueChange = tmp3;
    return tmp4(closure_0(closure_2[9]).TableSwitchRow, obj1);
  }
}
function StageAudienceEmptyState() {
  const tmp = closure_11();
  const obj = { style: tmp.emptyState, children: null };
  const obj2 = { style: tmp.centered, variant: "heading-sm/semibold", color: "text-strong", children: null };
  const intl = util.intl;
  obj2.children = intl.string(util.t.FsP3VU);
  items = [React5(Text_Text.Text, obj2), ];
  const obj3 = { style: tmp.centered, variant: "body-sm/normal", color: "text-default", children: null };
  const intl2 = util.intl;
  obj3.children = intl2.string(_modDef4261.eo2IxJ);
  items[1] = React5(Text_Text.Text, obj3);
  obj.children = items;
  return refs(View, obj);
}
function getItemType(type) {
  return type.type;
}
function StageAudienceActionSheetContent(channel) {
  channel = channel.channel;
  const tmp = closure_11();
  importDefault = tmp;
  dependencyMap = channel(6938).useCanModerateRequestToSpeak(channel.id);
  let obj = channel(6938);
  const tmp2 = useStageSummaryDefault(channel.id);
  const canToggleRequestToSpeak = channel(6938).useCanToggleRequestToSpeak(channel);
  closure_129_0 = canToggleRequestToSpeak;
  let obj2 = channel(6938);
  const sortedRequestToSpeakParticipants = channel(6949).useSortedRequestToSpeakParticipants(channel.id);
  closure_129_1 = sortedRequestToSpeakParticipants;
  let obj3 = channel(6949);
  const throttledStageAudience = channel(12953).useThrottledStageAudience(channel.id);
  closure_129_2 = throttledStageAudience;
  items = [canToggleRequestToSpeak, sortedRequestToSpeakParticipants, throttledStageAudience];
  const memo = noop.useMemo(() => {
    items = [];
    if (items) {
      items.push({ type: "toggle" });
    }
    if (length.length > 0) {
      const obj2 = { type: "header", label: null };
      const intl2 = channel(length2[10]).intl;
      const obj3 = { numHands: length.length };
      obj2.label = intl2.formatToPlainString(channel(length2[10]).t["5z7q5a"], obj3);
      items.push(obj2);
      const item = length.forEach((participant, index) => items.push({ type: "request", participant, start: 0 === index, end: index === length.length - 1 }));
    }
    const obj = { type: "header", label: null };
    const intl = channel(length2[10]).intl;
    obj.label = intl.formatToPlainString(channel(length2[10]).t.vUrsZ9, { audienceSize: length2.length });
    items.push(obj);
    if (0 === length2.length) {
      items.push({ type: "empty" });
    }
    const item1 = length2.forEach((participant, index) => items.push({ type: "audience", participant, start: 0 === index, end: index === length2.length - 1 }));
    return items;
  }, items);
  const obj5 = { scrollable: true, startExpanded: true, dismissAccessibilityLabel: null, header: null, children: null };
  let intl = channel(1113).intl;
  obj5.dismissAccessibilityLabel = intl.string(_modDef4261["ZSmz+r"]);
  const obj6 = { title: null, subtitle: null };
  let intl2 = channel(1113).intl;
  obj6.title = intl2.string(channel(1113).t.suRApw);
  obj6.subtitle = tmp2;
  obj5.header = closure_8(channel(7913).BottomSheetTitleHeader, obj6);
  obj5.children = closure_8(channel(7888).BottomSheetFlashList, {
    contentContainerStyle: tmp.list,
    data: memo,
    renderItem(item) {
      item = item.item;
      const type = item.type;
      if ("toggle" === type) {
        const obj2 = { hasIcons: false, children: null };
        const obj3 = { channel };
        obj2.children = React5(RequestToSpeakSwitchRow, obj3);
        return React5(TableRowGroup.TableRowGroup, obj2);
      } else if ("header" === type) {
        const obj4 = { style: sectionHeader.sectionHeader, title: item.label };
        return React5(TableRowGroup.TableRowGroupTitle, obj4);
      } else {
        if ("request" !== type) {
          if ("audience" !== type) {
            if ("empty" === type) {
              return React5(StageAudienceEmptyState, {});
            }
          }
        }
        const obj = { participant: item.participant, channel, start: null, end: null, showRequestToSpeakActions: null };
        ({ start: obj.start, end: obj.end } = item);
        let tmp6 = "request" === item.type;
        if (tmp6) {
          tmp6 = closure_2;
        }
        obj.showRequestToSpeakActions = tmp6;
        return React5(closure_13, obj);
      }
    },
    getItemType
  });
  return closure_8(channel(7951).ActionSheet, obj5);
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_8, Fragment: closure_9, jsxs: closure_10 } = jsxProd);
const createStyles = fn(5306);
let obj = { list: { paddingBottom: nativeDefault.space.PX_16 }, sectionHeader: null, emptyState: null, centered: null };
let obj3 = { paddingBottom: nativeDefault.space.PX_16 };
obj.sectionHeader = { paddingTop: nativeDefault.space.PX_24 };
let obj4 = { paddingTop: nativeDefault.space.PX_24 };
obj.emptyState = { alignItems: "center", paddingVertical: nativeDefault.space.PX_24 };
obj.centered = { textAlign: "center" };
let closure_11 = createStyles.createStyles(obj);
let closure_13 = noop.memo(function StageAudienceRow(showRequestToSpeakActions) {
  ({ participant, channel } = showRequestToSpeakActions);
  showRequestToSpeakActions = showRequestToSpeakActions.showRequestToSpeakActions;
  let analyticsLocations;
  const user = participant.user;
  ({ start, end } = showRequestToSpeakActions);
  ({ userNick, blocked, ignored, rtsState } = participant);
  analyticsLocations = user(analyticsLocations[11])().analyticsLocations;
  items = [GuildMemberStore];
  const items1 = [channel.guild_id, user.id];
  const stateFromStores = channel(analyticsLocations[12]).useStateFromStores(items, () => {
    let tmp2 = null != channel.guild_id;
    if (tmp2) {
      const member = GuildMemberStore.getMember(tmp.guild_id, user.id);
      let premiumSince;
      if (member != null) {
        premiumSince = member.premiumSince;
      }
      tmp2 = null != premiumSince;
    }
    return tmp2;
  }, items1);
  const tmp5 = rtsState === channel(analyticsLocations[13]).RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
  if (!showRequestToSpeakActions) {
    let obj2 = { start, end, icon: null, label: null, onPress: null, accessibilityActions: null, onAccessibilityAction: null, trailing: null };
    const obj3 = { user, guildId: channel.guild_id, size: channel(tmp2[16]).AvatarSizes.SMALL };
    obj2.icon = closure_8(channel(tmp2[16]).Avatar, obj3);
    obj2.label = userNick;
    obj2.onPress = function handlePress() {
      showUserProfileActionSheetDefault({ userId: user.id, channelId: channel.id, isVoiceContext: true, sourceAnalyticsLocations: analyticsLocations });
    };
    obj2.accessibilityActions = undefined;
    obj2.onAccessibilityAction = function onAccessibilityAction(nativeEvent) {
      nativeEvent = nativeEvent.nativeEvent;
      if ("invite" === nativeEvent.actionName) {
        StageChannelActionCreators.setUserSuppress(channel, user.id, false);
      }
      if ("dismiss" === nativeEvent.actionName) {
        StageChannelActionCreators.setUserSuppress(channel, user.id, true);
      }
    };
    let tmp10Result = null;
    if (blocked) {
      const obj4 = { size: "sm", color: tmp(tmp2[7]).colors.TEXT_FEEDBACK_CRITICAL };
      tmp10Result = closure_8(channel(tmp2[19]).DenyIcon, obj4);
    }
    const items2 = [tmp10Result, , , ];
    let tmp10Result3 = null;
    if (ignored) {
      const obj5 = { size: "sm", color: tmp(tmp2[7]).colors.ICON_MUTED };
      tmp10Result3 = closure_8(channel(tmp2[20]).EyeSlashIcon, obj5);
    }
    items2[1] = tmp10Result3;
    let tmp10Result4 = null;
    if (stateFromStores) {
      const obj6 = { size: "sm", color: tmp(tmp2[7]).unsafe_rawColors.GUILD_BOOSTING_PINK };
      tmp10Result4 = closure_8(channel(tmp2[21]).BoostGemIcon, obj6);
    }
    items2[2] = tmp10Result4;
    let tmp11Result = null;
    if (showRequestToSpeakActions) {
      const obj7 = { children: null };
      function handleInviteToSpeak() {
        StageChannelActionCreators.setUserSuppress(channel, user.id, false);
      }
      function handleDismissRequest() {
        StageChannelActionCreators.setUserSuppress(channel, user.id, true);
      }
      const obj8 = { size: "sm", variant: "secondary", icon: closure_8(channel(tmp2[23]).MicrophoneArrowRightIcon, {}), accessibilityLabel: null, accessibilityRole: "none", disabled: null, onPress: null };
      const intl3 = channel(tmp2[10]).intl;
      obj8.accessibilityLabel = intl3.string(channel(tmp2[10]).t.f0T7hI);
      obj8.disabled = tmp5;
      obj8.onPress = handleInviteToSpeak;
      const items3 = [closure_8(channel(tmp2[22]).IconButton, obj8), ];
      const obj9 = { size: "sm", variant: "secondary", icon: closure_8(channel(tmp2[24]).XSmallIcon, {}), accessibilityLabel: null, accessibilityRole: "none", onPress: null };
      const intl4 = channel(tmp2[10]).intl;
      obj9.accessibilityLabel = intl4.string(channel(tmp2[10]).t.moABMy);
      obj9.onPress = handleDismissRequest;
      items3[1] = closure_8(channel(tmp2[22]).IconButton, obj9);
      obj7.children = items3;
      tmp11Result = closure_10(closure_9, obj7);
    }
    const obj10 = { direction: "horizontal", spacing: 8, align: "center", children: null };
    items2[3] = tmp11Result;
    obj10.children = items2;
    obj2.trailing = closure_10(channel(tmp2[18]).Stack, obj10);
    return closure_8(channel(tmp2[15]).TableRow, obj2);
  } else {
    if (tmp5) {
      let items4 = [];
    } else {
      const obj11 = { name: "invite", label: null };
      const intl = channel(tmp2[10]).intl;
      obj11.label = intl.string(channel(tmp2[10]).t.f0T7hI);
      items4 = [obj11];
    }
    const items5 = [];
    const obj12 = { name: "dismiss", label: null };
    const intl2 = channel(tmp2[10]).intl;
    obj12.label = intl2.string(channel(tmp2[10]).t.moABMy);
    items5[HermesBuiltin.arraySpread(items4, 0)] = obj12;
    const arraySpreadResult = HermesBuiltin.arraySpread(items4, 0);
  }
  let obj = channel(analyticsLocations[12]);
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/stage_channels/native/components/StageAudienceActionSheet.tsx");

export default function StageAudienceActionSheet(channelId) {
  channelId = channelId.channelId;
  const tmp2 = useAnalyticsLocationsDefault;
  const tmp3 = channelId;
  items = [ChannelStore];
  const items1 = [channelId];
  const stateFromStores = channelId(504).useStateFromStores(items, () => ChannelStore.getChannel(channelId), items1);
  let tmp5 = null;
  if (null != stateFromStores) {
    const obj2 = { value: tmp2(AnalyticsLocationDefault.AUDIENCE_SHEET).analyticsLocations, children: null };
    const obj3 = { channel: stateFromStores };
    obj2.children = closure_8(StageAudienceActionSheetContent, obj3);
    tmp5 = closure_8(tmp3(7918).AnalyticsLocationProvider, obj2);
  }
  return tmp5;
};
export { RequestToSpeakSwitchRow };