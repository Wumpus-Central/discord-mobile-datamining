// === Module 9947: RequestToSpeakActionSheet ===

// Module 9947 (RequestToSpeakActionSheet)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4541 */;
import useAudienceRequestToSpeakStateDefault from "useAudienceRequestToSpeakState" /* 4721 */;
import useStageSpeakingForCurrentUser from "useStageSpeakingForCurrentUser" /* 5436 */;
import TableSwitchRow from "TableSwitchRow" /* 7214 */;
import StageChannelActionCreators from "StageChannelActionCreators" /* 8426 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 8439 */;
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 8441 */;
import useRequestToSpeakPermission from "useRequestToSpeakPermission" /* 9948 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 1957 */;

const _modDef9953 = tmp4(9953);
require = fn;
function RequestToSpeakRow(channel) {
  c0 = undefined;
  let obj = useRequestToSpeakPermission;
  [tmp2, c0] = _slicedToArray(obj.useRequestToSpeakPermission(channel.channel.id), 2);
  obj = { label: null, subLabel: null, value: null, onValueChange: null };
  const intl = util.intl;
  obj.label = intl.string(util.t.TYZgzW);
  const intl2 = util.intl;
  const string = intl2.string;
  const t = util.t;
  if (tmp2) {
    let stringResult = string(t["JcFI/U"]);
  } else {
    stringResult = string(t.laPwJQ);
  }
  obj.subLabel = stringResult;
  obj.value = tmp2;
  obj.onValueChange = function onValueChange(arg0) {
    return _undefined(arg0);
  };
  return React7(TableSwitchRow.TableSwitchRow, obj);
}
function ManageSelfSpeakerRow(channel) {
  channel = channel.channel;
  importDefault = undefined;
  let obj = channel(504);
  const items = [AuthenticationStore];
  const stateFromStores = obj.useStateFromStores(items, () => id.getId());
  let id;
  if (channel != null) {
    id = channel.id;
  }
  const tmp8 = useAudienceRequestToSpeakStateDefault(stateFromStores, id) === channel(4721).RequestToSpeakStates.ON_STAGE;
  importDefault = tmp8;
  const intl = tmp(1114).intl;
  const string = intl.string;
  const t = tmp(1114).t;
  if (tmp8) {
    let stringResult = string(t.ezLpY6);
  } else {
    stringResult = string(t["8Joh+p"]);
  }
  if (tmp8) {
    let MicrophoneArrowRightIcon = tmp(9949).GroupArrowDownIcon;
  } else {
    MicrophoneArrowRightIcon = tmp(9951).MicrophoneArrowRightIcon;
  }
  obj = {
    onPress() {
      if (!closure_1) {
        let obj = useStageSpeakingForCurrentUser;
        if (obj.shouldAgeVerifyToSpeakForCurrentUser(channel.id)) {
          obj = { entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.STAGE_CHANNEL_RAISE_HAND };
          const result = AgeVerificationActionCreatorsDefault.showAgeVerificationGetStartedModal(obj);
          ActionSheetActionCreatorsDefault.hideActionSheet(closure_8);
        }
      }
      const result1 = StageChannelActionCreators.audienceAckRequestToSpeak(channel, closure_1);
      ActionSheetActionCreatorsDefault.hideActionSheet(closure_8);
    },
    icon: closure_9(MicrophoneArrowRightIcon, {}),
    label: stringResult,
    trailing: null
  };
  obj = { source: _modDef9953 };
  obj.trailing = closure_9(channel(1178).Icon, obj);
  return closure_9(channel(5619).TableRow, obj);
}
const View = fn(17).View;
let closure_8 = fn(5428).REQUEST_TO_SPEAK_SHEET_KEY;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
fn(4574);
let createStyles = { container: null };
createStyles = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
createStyles.container = createStyles;
let closure_11 = createStyles.createStyles(createStyles);
const size = fn(2);
let result = size.fileFinishedImporting("modules/stage_channels/native/components/RequestToSpeakActionSheet.tsx");

export default function RequestToSpeakActionSheet(channelId) {
  channelId = channelId.channelId;
  let first;
  let first1;
  noop = undefined;
  let obj = channelId(4275);
  const token = obj.useToken(first(576).modules.mobile.TABLE_ROW_PADDING);
  const items = [];
  const tmp3 = first;
  const tmp5 = closure_11();
  const tmp6 = first(7176);
  items[HermesBuiltin.arraySpread(channelId.analyticsLocations, 0)] = first(7196).REQUEST_TO_SPEAK;
  let obj1 = channelId(504);
  const items1 = [ChannelStore];
  const stateFromStores = obj1.useStateFromStores(items1, () => ChannelStore.getChannel(channelId));
  let obj2 = channelId(5445);
  const stageParticipantsCount = obj2.useStageParticipantsCount(channelId, channelId(5439).StageChannelParticipantNamedIndex.ALL_REQUESTED_TO_SPEAK);
  const tmp10 = first1(noop.useState(0), 2);
  first = tmp10[0];
  dependencyMap = tmp10[1];
  const tmp12 = first1(noop.useState(0), 2);
  first1 = tmp12[0];
  noop = tmp12[1];
  let tmp14 = null;
  if (null != stateFromStores) {
    obj = { value: tmp6(items).analyticsLocations, children: null };
    obj = { scrollable: true, startExpanded: stageParticipantsCount >= 5, children: null };
    obj1 = {
      style: tmp5.container,
      onLayout(nativeEvent) {
          const height = nativeEvent.nativeEvent.layout.height;
          let tmp = null != height;
          if (tmp) {
            tmp = first1 !== height;
          }
          if (tmp) {
            closure_4(height);
          }
        },
      children: null
    };
    obj2 = { spacing: 8, children: null };
    const obj3 = {
      spacing: 8,
      onLayout(nativeEvent) {
          const height = nativeEvent.nativeEvent.layout.height;
          let tmp = null != height;
          if (tmp) {
            tmp = first !== height;
          }
          if (tmp) {
            closure_2(height);
          }
        },
      children: null
    };
    const obj4 = { hasIcons: true, children: null };
    const obj5 = { channel: stateFromStores };
    const items2 = [closure_9(RequestToSpeakRow, obj5), ];
    const obj6 = { channel: stateFromStores };
    items2[1] = closure_9(ManageSelfSpeakerRow, obj6);
    obj4.children = items2;
    const items3 = [closure_10(tmp(5701).TableRowGroup, obj4), ];
    const obj7 = { style: null, children: null };
    const obj8 = { paddingHorizontal: token };
    obj7.style = obj8;
    const obj9 = { accessibilityRole: "header", variant: "eyebrow", color: "text-default", children: null };
    const intl = tmp(1114).intl;
    const obj10 = { numHands: null };
    const _HermesInternal = HermesInternal;
    obj10.numHands = "" + stageParticipantsCount;
    obj9.children = intl.format(tmp(1114).t["5z7q5a"], obj10);
    obj7.children = closure_9(tmp(4570).Text, obj9);
    items3[1] = closure_9(View, obj7);
    obj3.children = items3;
    const items4 = [closure_10(tmp(4987).Stack, obj3), ];
    const obj11 = { channel: stateFromStores, height: null };
    const _Math = Math;
    obj11.height = Math.max(first1 - first - 8, 0);
    items4[1] = closure_9(tmp3(9954), obj11);
    obj2.children = items4;
    obj1.children = closure_10(tmp(4987).Stack, obj2);
    obj.children = closure_9(tmp(6641).BottomSheetScrollView, obj1);
    obj.children = closure_9(tmp(7164).BottomSheet, obj);
    tmp14 = closure_9(tmp(7176).AnalyticsLocationProvider, obj);
    const tmp3Result = tmp3(9954);
  }
  return tmp14;
};