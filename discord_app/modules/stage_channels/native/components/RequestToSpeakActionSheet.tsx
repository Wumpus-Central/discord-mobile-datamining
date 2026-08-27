// discord_app/modules/stage_channels/native/components/RequestToSpeakActionSheet.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import useAudienceRequestToSpeakStateDefault from "../../useAudienceRequestToSpeakState.tsx";
import registerAssetDefault from "../../../../../_runtime/09932_registerAsset.js";
import closure_3 from "../../../../../_runtime/metro/00032__slicedToArray.js";
import closure_4 from "../../../../../_runtime/00019_noop.js";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_6 from "../../../../stores/AuthenticationStore.tsx";
import closure_7 from "../../../../stores/ChannelStore.tsx";
import { REQUEST_TO_SPEAK_SHEET_KEY as closure_8 } from "../../StageChannelsConstants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";
import { useRequestToSpeakPermission } from "../../useRequestToSpeakPermission.tsx";

const require = arg1;
function RequestToSpeakRow(channel) {
  let _require;
  let obj = useRequestToSpeakPermission;
  [tmp2, c0] = callback(obj.useRequestToSpeakPermission(channel.channel.id), 2);
  obj = { label: null, subLabel: null, value: null, onValueChange: null };
  const intl = require("../../../../intl/index.native.tsx").intl;
  obj[0] = intl.string(require("../../../../intl/index.native.tsx").t.TYZgzW);
  const intl2 = require("../../../../intl/index.native.tsx").intl;
  const string = intl2.string;
  const t = require("../../../../intl/index.native.tsx").t;
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
  return closure_9(require("../../../../design/components/TableRow/native/TableSwitchRow.native.tsx").TableSwitchRow, obj);
}
function ManageSelfSpeakerRow(channel) {
  channel = channel.channel;
  importDefault = undefined;
  let obj = channel(589);
  const items = [closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => id.getId());
  let id;
  if (channel != null) {
    id = channel.id;
  }
  const tmp4 = importDefault;
  const tmp5 = useAudienceRequestToSpeakStateDefault;
  const tmp8 = useAudienceRequestToSpeakStateDefault(stateFromStores, id) === channel(4633).RequestToSpeakStates.ON_STAGE;
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
    let MicrophoneArrowRightIcon = tmp(9928).GroupArrowDownIcon;
  } else {
    MicrophoneArrowRightIcon = tmp(9930).MicrophoneArrowRightIcon;
  }
  obj = {
    onPress() {
      if (!callback) {
        let obj = channel(closure_1_2[17]);
        if (obj.shouldAgeVerifyToSpeakForCurrentUser(channel.id)) {
          obj = { entryPoint: null };
          obj[0] = channel(closure_1_2[19]).AgeVerificationModalEntryPoint.STAGE_CHANNEL_RAISE_HAND;
          const result = callback(closure_1_2[18]).showAgeVerificationGetStartedModal(obj);
          const obj2 = callback(closure_1_2[18]);
          callback(closure_1_2[20]).hideActionSheet(closure_1_8);
        }
      }
      const result1 = channel(closure_1_2[21]).audienceAckRequestToSpeak(channel, callback);
      const obj5 = channel(closure_1_2[21]);
      const tmp = callback;
      callback(closure_1_2[20]).hideActionSheet(closure_1_8);
    },
    icon: callback2(MicrophoneArrowRightIcon, {}),
    label: stringResult,
    trailing: null
  };
  obj = { source: registerAssetDefault };
  obj[3] = callback2(channel(1297).Icon, obj);
  return callback2(channel(5551).TableRow, obj);
}
({ jsx: c9, jsxs: c10 } = jsxProd);
createCacheKey = { container: null };
createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH };
createCacheKey[0] = createCacheKey;
let closure_11 = createCacheKey.createStyles(createCacheKey);
let result = require("set").fileFinishedImporting("modules/stage_channels/native/components/RequestToSpeakActionSheet.tsx");

export default function RequestToSpeakActionSheet(channelId) {
  channelId = channelId.channelId;
  let first;
  dependencyMap = undefined;
  let first1;
  let React;
  let obj = channelId(4165);
  const token = obj.useToken(first(712).modules.mobile.TABLE_ROW_PADDING);
  const items = [];
  const tmp3 = first;
  const tmp5 = callback4();
  const tmp6 = first(5905);
  items[HermesBuiltin.arraySpread(channelId.analyticsLocations, 0)] = first(5925).REQUEST_TO_SPEAK;
  obj1 = channelId(589);
  const items1 = [closure_7];
  const stateFromStores = obj1.useStateFromStores(items1, () => closure_1_7.getChannel(channelId));
  let obj2 = channelId(5326);
  const stageParticipantsCount = obj2.useStageParticipantsCount(channelId, channelId(5320).StageChannelParticipantNamedIndex.ALL_REQUESTED_TO_SPEAK);
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
    const items3 = [callback3(tmp(5944).TableRowGroup, obj4), ];
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
    obj7[1] = callback2(tmp(4441).Text, obj9);
    items3[1] = callback2(View, obj7);
    obj3[2] = items3;
    const items4 = [callback3(tmp(4878).Stack, obj3), ];
    const obj11 = { channel: null, height: null };
    obj11[0] = stateFromStores;
    const _Math = Math;
    obj11[1] = Math.max(first1 - first - 8, 0);
    items4[1] = callback2(tmp3(9933), obj11);
    obj2[1] = items4;
    obj1[2] = callback3(tmp(4878).Stack, obj2);
    obj[2] = callback2(tmp(5576).BottomSheetScrollView, obj1);
    obj[1] = callback2(tmp(5574).BottomSheet, obj);
    tmp14 = callback2(tmp(5905).AnalyticsLocationProvider, obj);
    const tmp3Result = tmp3(9933);
  }
  return tmp14;
};