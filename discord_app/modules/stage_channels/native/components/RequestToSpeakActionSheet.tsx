// discord_app/modules/stage_channels/native/components/RequestToSpeakActionSheet.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import useAudienceRequestToSpeakStateDefault from "../../useAudienceRequestToSpeakState.tsx";
import AgeVerificationAnalyticsUtils from "../../../age_assurance/AgeVerificationAnalyticsUtils.tsx";
import useStageSpeakingForCurrentUser from "../../useStageSpeakingForCurrentUser.tsx";
import StageChannelActionCreators from "../../StageChannelActionCreators.tsx";
import AgeVerificationActionCreatorsDefault from "../../../age_assurance/AgeVerificationActionCreators.native.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import AuthenticationStore from "../../../../stores/AuthenticationStore.tsx";
import ChannelStore from "../../../../stores/ChannelStore.tsx";

const _modDef12860 = tmp4(12860);
require = fn;
function ManageSelfSpeakerRow(channel) {
  channel = channel.channel;
  importDefault = undefined;
  items = [AuthenticationStore];
  const stateFromStores = channel(504).useStateFromStores(items, () => id.getId());
  let id;
  let obj = channel(504);
  if (channel != null) {
    id = channel.id;
  }
  const tmp8 =
    useAudienceRequestToSpeakStateDefault(stateFromStores, id) === channel(6295).RequestToSpeakStates.ON_STAGE;
  importDefault = tmp8;
  const intl = tmp(1113).intl;
  const string = intl.string;
  const t = tmp(1113).t;
  if (tmp8) {
    let stringResult = string(t.ezLpY6);
  } else {
    stringResult = string(t["8Joh+p"]);
  }
  if (tmp8) {
    let MicrophoneArrowRightIcon = tmp(12856).GroupArrowDownIcon;
  } else {
    MicrophoneArrowRightIcon = tmp(12858).MicrophoneArrowRightIcon;
  }
  let obj2 = {
    onPress: function handleSetSelfSpeaker() {
      if (!closure_1) {
        if (obj.shouldAgeVerifyToSpeakForCurrentUser(channel.id)) {
          const obj3 = {
            entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.STAGE_CHANNEL_RAISE_HAND,
          };
          const result = AgeVerificationActionCreatorsDefault.showAgeVerificationGetStartedModal(obj3);
          ActionSheetActionCreatorsDefault.hideActionSheet(closure_8);
        }
        obj = useStageSpeakingForCurrentUser;
      }
      const result1 = StageChannelActionCreators.audienceAckRequestToSpeak(channel, closure_1);
      ActionSheetActionCreatorsDefault.hideActionSheet(closure_8);
    },
    icon: closure_9(MicrophoneArrowRightIcon, {}),
    label: stringResult,
    trailing: null,
  };
  const tmp5Result = useAudienceRequestToSpeakStateDefault(stateFromStores, id);
  obj2.trailing = closure_9(channel(1187).Icon, { source: _modDef12860 });
  return closure_9(channel(7379).TableRow, obj2);
}
const View = fn(17).View;
let closure_8 = fn(6843).REQUEST_TO_SPEAK_SHEET_KEY;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: closure_10 } = jsxProd);
const createStyles = fn(5243);
let obj2 = { container: { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH } };
let closure_11 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/stage_channels/native/components/RequestToSpeakActionSheet.tsx");

export default function RequestToSpeakActionSheet(channelId) {
  channelId = channelId.channelId;
  let first;
  let first1;
  noop = undefined;
  const token = channelId(5839).useToken(first(575).modules.mobile.TABLE_ROW_PADDING);
  const obj = channelId(5839);
  const tmp3 = first;
  items = [];
  const tmp5 = closure_11();
  const tmp6 = first(7852);
  items[HermesBuiltin.arraySpread(channelId.analyticsLocations, 0)] = first(7871).REQUEST_TO_SPEAK;
  const arraySpreadResult = HermesBuiltin.arraySpread(channelId.analyticsLocations, 0);
  const items1 = [ChannelStore];
  const stateFromStores = channelId(504).useStateFromStores(items1, () => ChannelStore.getChannel(channelId));
  const obj2 = channelId(504);
  const stageParticipantsCount = channelId(6886).useStageParticipantsCount(
    channelId,
    channelId(6880).StageChannelParticipantNamedIndex.ALL_REQUESTED_TO_SPEAK,
  );
  const tmp10 = first1(noop.useState(0), 2);
  first = tmp10[0];
  dependencyMap = tmp10[1];
  const tmp12 = first1(noop.useState(0), 2);
  first1 = tmp12[0];
  noop = tmp12[1];
  let tmp14 = null;
  if (null != stateFromStores) {
    const obj4 = { value: tmp6(items).analyticsLocations, children: null };
    const obj5 = { scrollable: true, startExpanded: stageParticipantsCount >= 5, children: null };
    const obj6 = {
      style: tmp5.container,
      onLayout: function handleScrollLayout(nativeEvent) {
        const height = nativeEvent.nativeEvent.layout.height;
        let tmp = null != height;
        if (tmp) {
          tmp = first1 !== height;
        }
        if (tmp) {
          closure_4(height);
        }
      },
      children: null,
    };
    const obj7 = { spacing: 8, children: null };
    const obj8 = {
      spacing: 8,
      onLayout: function handleHeaderLayout(nativeEvent) {
        const height = nativeEvent.nativeEvent.layout.height;
        let tmp = null != height;
        if (tmp) {
          tmp = first !== height;
        }
        if (tmp) {
          closure_2(height);
        }
      },
      children: null,
    };
    const obj9 = { hasIcons: true, children: null };
    const obj10 = { channel: stateFromStores };
    const items2 = [closure_9(tmp(12861).RequestToSpeakSwitchRow, obj10)];
    const obj11 = { channel: stateFromStores };
    items2[1] = closure_9(ManageSelfSpeakerRow, obj11);
    obj9.children = items2;
    const items3 = [closure_10(tmp(7680).TableRowGroup, obj9)];
    const obj12 = { style: null, children: null };
    const obj13 = { paddingHorizontal: token };
    obj12.style = obj13;
    const obj14 = { accessibilityRole: "header", variant: "body-sm/medium", color: "text-default", children: null };
    const intl = tmp(1113).intl;
    const obj15 = { numHands: null };
    const _HermesInternal = HermesInternal;
    obj15.numHands = "" + stageParticipantsCount;
    obj14.children = intl.format(tmp(1113).t["5z7q5a"], obj15);
    obj12.children = closure_9(tmp(5866).Text, obj14);
    items3[1] = closure_9(View, obj12);
    obj8.children = items3;
    const items4 = [closure_10(tmp(6274).Stack, obj8)];
    const obj16 = { channel: stateFromStores, height: null };
    const _Math = Math;
    obj16.height = Math.max(first1 - first - 8, 0);
    items4[1] = closure_9(tmp3(12866), obj16);
    obj7.children = items4;
    obj6.children = closure_10(tmp(6274).Stack, obj7);
    obj5.children = closure_9(tmp(5507).BottomSheetScrollView, obj6);
    obj4.children = closure_9(tmp(5503).BottomSheet, obj5);
    tmp14 = closure_9(tmp(7852).AnalyticsLocationProvider, obj4);
    const tmp3Result = tmp3(12866);
  }
  return tmp14;
}
