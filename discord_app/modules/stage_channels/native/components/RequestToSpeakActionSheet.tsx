// discord_app/modules/stage_channels/native/components/RequestToSpeakActionSheet.tsx
import TableRowGroupTitle from "TableRowGroupTitle";
import AgeVerificationModalEntryPoint from "AgeVerificationModalEntryPoint";
import { View } from "useIsStageSpeakingDisabledForCurrentUser";
import fetchFingerprint from "fetchFingerprint";
import ensureGuildLoaded from "ensureGuildLoaded";
import { REQUEST_TO_SPEAK_SHEET_KEY as closure_8 } from "MAX_STAGE_TOPIC_LENGTH";
import jsxProd from "audienceAckRequestToSpeak";
import createCacheKey from "createCacheKey";
import { TableSwitchRow } from "../../../../design/components/TableRow/native/TableSwitchRow.native.tsx";
import { getSystemLocale } from "../../../../intl/index.native.tsx";
import { useAudienceRequestToSpeakState } from "../../useAudienceRequestToSpeakState.tsx";
import { useRequestToSpeakPermission } from "../../useRequestToSpeakPermission.tsx";

let c10;
let c9;
const require = arg1;
function RequestToSpeakRow(channel) {
  let c0;
  let tmp2;
  let _require;
  let obj = _useRequestToSpeakPermission;
  [tmp2, c0] = callback(obj.useRequestToSpeakPermission(channel.channel.id), 2);
  obj = { label: null, subLabel: null, value: null, onValueChange: null };
  const intl = _getSystemLocale.intl;
  obj[0] = intl.string(_getSystemLocale.t.TYZgzW);
  const intl2 = _getSystemLocale.intl;
  const string = intl2.string;
  const t = _getSystemLocale.t;
  if (tmp2) {
    let stringResult = string(t["JcFI/U"]);
  } else {
    stringResult = string(t.laPwJQ);
  }
  obj[1] = stringResult;
  obj[2] = tmp2;
  obj[3] = function onValueChange(arg0) {
    return _undefined(arg0);
  };
  return closure_9(_TableSwitchRow.TableSwitchRow, obj);
}
function ManageSelfSpeakerRow(channel) {
  channel = channel.channel;
  let importDefault;
  let obj = channel(589);
  const items = [fetchFingerprint];
  const stateFromStores = obj.useStateFromStores(items, () => id.getId());
  let id;
  if (channel != null) {
    id = channel.id;
  }
  const tmp4 = importDefault;
  const tmp5 = useAudienceRequestToSpeakState;
  const tmp8 = useAudienceRequestToSpeakState(stateFromStores, id) === channel(4469).RequestToSpeakStates.ON_STAGE;
  importDefault = tmp8;
  const intl = tmp(1236).intl;
  const string = intl.string;
  const t = tmp(1236).t;
  if (tmp8) {
    let stringResult = string(t.ezLpY6);
  } else {
    stringResult = string(t["8Joh+p"]);
  }
  if (tmp8) {
    let MicrophoneArrowRightIcon = tmp(10689).GroupArrowDownIcon;
  } else {
    MicrophoneArrowRightIcon = tmp(10691).MicrophoneArrowRightIcon;
  }
  obj = {
    onPress() {
      if (!_undefined) {
        let obj = channel(outer1_2[17]);
        if (obj.shouldAgeVerifyToSpeakForCurrentUser(channel.id)) {
          obj = { entryPoint: null };
          obj[0] = channel(outer1_2[19]).AgeVerificationModalEntryPoint.STAGE_CHANNEL_RAISE_HAND;
          const result = _undefined(outer1_2[18]).showAgeVerificationGetStartedModal(obj);
          const obj2 = _undefined(outer1_2[18]);
          _undefined(outer1_2[20]).hideActionSheet(outer1_8);
        }
      }
      const result1 = channel(outer1_2[21]).audienceAckRequestToSpeak(channel, _undefined);
      const obj5 = channel(outer1_2[21]);
      const tmp = _undefined;
      _undefined(outer1_2[20]).hideActionSheet(outer1_8);
    },
    icon: null,
    label: null,
    trailing: null
  };
  obj[1] = callback2(MicrophoneArrowRightIcon, {});
  obj[2] = stringResult;
  obj = { source: null };
  obj[0] = tmp4(10693);
  obj[3] = callback2(channel(1297).Icon, obj);
  return callback2(channel(5315).TableRow, obj);
}
({ jsx: c9, jsxs: c10 } = jsxProd);
createCacheKey = { container: null };
createCacheKey = { backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH };
createCacheKey[0] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
let result = require("get ActivityIndicator").fileFinishedImporting("modules/stage_channels/native/components/RequestToSpeakActionSheet.tsx");

export default function RequestToSpeakActionSheet(channelId) {
  channelId = channelId.channelId;
  let first;
  let dependencyMap;
  let first1;
  let React;
  let obj = channelId(3989);
  const token = obj.useToken(first(712).modules.mobile.TABLE_ROW_PADDING);
  const items = [];
  const tmp3 = first;
  const tmp5 = createCacheKey();
  const tmp6 = first(5610);
  items[HermesBuiltin.arraySpread(channelId.analyticsLocations, 0)] = first(5630).REQUEST_TO_SPEAK;
  let obj1 = channelId(589);
  const items1 = [ensureGuildLoaded];
  const stateFromStores = obj1.useStateFromStores(items1, () => outer1_7.getChannel(channelId));
  let obj2 = channelId(5115);
  const stageParticipantsCount = obj2.useStageParticipantsCount(channelId, channelId(5109).StageChannelParticipantNamedIndex.ALL_REQUESTED_TO_SPEAK);
  const tmp10 = first1(React.useState(0), 2);
  first = tmp10[0];
  dependencyMap = tmp10[1];
  const tmp12 = first1(React.useState(0), 2);
  first1 = tmp12[0];
  React = tmp12[1];
  let tmp14 = null;
  if (null != stateFromStores) {
    obj = { value: null, children: null };
    obj[0] = tmp6(items).analyticsLocations;
    obj = { scrollable: true, startExpanded: null, children: null };
    obj[1] = stageParticipantsCount >= 5;
    obj1 = { style: null, onLayout: null, children: null };
    obj1[0] = tmp5.container;
    obj1[1] = function onLayout(nativeEvent) {
      const height = nativeEvent.nativeEvent.layout.height;
      let tmp = null != height;
      if (tmp) {
        tmp = first1 !== height;
      }
      if (tmp) {
        callback2(height);
      }
    };
    obj2 = { spacing: 8, children: null };
    const obj3 = { spacing: 8, onLayout: null, children: null };
    obj3[1] = function onLayout(nativeEvent) {
      const height = nativeEvent.nativeEvent.layout.height;
      let tmp = null != height;
      if (tmp) {
        tmp = first !== height;
      }
      if (tmp) {
        callback(height);
      }
    };
    const obj4 = { hasIcons: true, children: null };
    const obj5 = { channel: null };
    obj5[0] = stateFromStores;
    const items2 = [callback2(RequestToSpeakRow, obj5), ];
    const obj6 = { channel: null };
    obj6[0] = stateFromStores;
    items2[1] = callback2(ManageSelfSpeakerRow, obj6);
    obj4[1] = items2;
    const items3 = [callback3(tmp(5649).TableRowGroup, obj4), ];
    const obj7 = { style: null, children: null };
    const obj8 = { paddingHorizontal: null };
    obj8[0] = token;
    obj7[0] = obj8;
    const obj9 = { accessibilityRole: "header", variant: "eyebrow", color: "text-default", children: null };
    const intl = tmp(1236).intl;
    const obj10 = { numHands: null };
    const _HermesInternal = HermesInternal;
    obj10[0] = "" + stageParticipantsCount;
    obj9[3] = intl.format(tmp(1236).t["5z7q5a"], obj10);
    obj7[1] = callback2(tmp(4281).Text, obj9);
    items3[1] = callback2(View, obj7);
    obj3[2] = items3;
    const items4 = [callback3(tmp(4693).Stack, obj3), ];
    const obj11 = { channel: null, height: null };
    obj11[0] = stateFromStores;
    const _Math = Math;
    obj11[1] = Math.max(first1 - first - 8, 0);
    items4[1] = callback2(tmp3(10694), obj11);
    obj2[1] = items4;
    obj1[2] = callback3(tmp(4693).Stack, obj2);
    obj[2] = callback2(tmp(5340).BottomSheetScrollView, obj1);
    obj[1] = callback2(tmp(5338).BottomSheet, obj);
    tmp14 = callback2(tmp(5610).AnalyticsLocationProvider, obj);
    const tmp3Result = tmp3(10694);
  }
  return tmp14;
};