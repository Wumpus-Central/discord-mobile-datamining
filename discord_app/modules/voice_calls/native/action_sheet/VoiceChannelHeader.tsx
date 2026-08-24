// === Module 12674: PrivateChannelSubtitle ===

// Module 12674 (PrivateChannelSubtitle)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import Button from "Button" /* 1297 */;
import computeChannelNameDefault from "computeChannelName" /* 4984 */;
import isRoleRequiredDefault from "isRoleRequired" /* 5287 */;
import PressableBase from "PressableBase" /* 5433 */;
import registerAssetDefault from "registerAsset" /* 9992 */;
import useIsVoiceChannelFullDefault from "useIsVoiceChannelFull" /* 12535 */;
import id from "id" /* 12675 */;
import idDefault from "id" /* 12675 */;
import OngoingCallStatusLabelDefault from "OngoingCallStatusLabel" /* 12676 */;
import OnGoingCallTimerDefault from "OnGoingCallTimer" /* 12677 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_4 from "participantFromServer" /* 1390 */;
import closure_5 from "createGuildRecordFromRust" /* 1910 */;
import closure_6 from "getUncachedChannelPermissions" /* 4021 */;
import ME from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

require = arg1;
function PrivateChannelSubtitle(channel) {
  channel = channel.channel;
  const tmp = callback2();
  const state = idDefault(channel.id).state;
  let obj = { style: tmp.subtitleWrapper, children: null };
  obj = { useAllAloneText: false, channel, voiceState: state, style: tmp.subtitle };
  const items = [callback(OngoingCallStatusLabelDefault, obj), , ];
  let tmp6Result = state === id.CallStates.CONNECTED;
  if (tmp6Result) {
    obj = { style: null, variant: "text-xs/medium", color: "text-overlay-light", children: " - " };
    obj[0] = tmp.subtitle;
    tmp6Result = tmp6(tmp7(4734).Text, obj);
  }
  items[1] = tmp6Result;
  tmp6Result = state === tmp7(12675).CallStates.CONNECTED;
  if (tmp6Result) {
    obj1 = { channelId: null, style: null };
    obj1[0] = channel.id;
    obj1[1] = tmp.subtitle;
    tmp6Result = tmp6(OnGoingCallTimerDefault, obj1);
  }
  items[2] = tmp6Result;
  obj[1] = items;
  return closure_11(View, obj);
}
class VoiceChannelHeader {
  constructor(arg0) {
    channel = global.channel;
    closure_1 = undefined;
    tmp = closure_12();
    tmp2 = channel;
    tmp3 = closure_2;
    obj = require("initialize");
    items = [];
    items[0] = closure_5;
    stateFromStores = obj.useStateFromStores(items, () => closure_1_5.getGuild(channel.getGuildId()));
    tmp5 = closure_1;
    tmp6 = require("useIsVoiceChannelFull")(channel);
    obj2 = require("initialize");
    items1 = [];
    items1[0] = closure_4;
    items2 = [];
    items2[0] = channel;
    closure_1 = obj2.useStateFromStores(items1, () => closure_1_4.getSelfEmbeddedActivityForChannel(channel.id), items2);
    name = undefined;
    tmp7 = require("computeChannelName")(channel);
    if (stateFromStores != null) {
      name = stateFromStores.name;
    }
    E = null;
    if (closure_6.can(Permissions.CREATE_INSTANT_INVITE, channel)) {
      E = null;
      if (!tmp6) {
        E = () => {
          let obj = channel(closure_1_2[16]);
          obj = { source: closure_1_9.VOICE_CHANNEL, targetApplicationId: null };
          let applicationId;
          if (applicationId != null) {
            applicationId = applicationId.applicationId;
          }
          obj[1] = applicationId;
          return obj.showInstantInviteActionSheet(channel, obj);
        };
      }
    }
    formatToPlainStringResult = tmp7;
    if (channel.isPrivate()) {
      intl = require("getSystemLocale").intl;
      obj = { count: null };
      num = 1;
      obj[0] = channel.recipients.length + 1;
      formatToPlainStringResult = intl.formatToPlainString(require("getSystemLocale").t["8bn8Br"], obj);
      tmp10 = jsx;
      tmp11 = PrivateChannelSubtitle;
      obj1 = { channel: null };
      obj1[0] = channel;
      name = jsx(PrivateChannelSubtitle, obj1);
      class E {
        constructor() {
          obj = require("coerceMainRoute");
          return obj.navigateToNewGroupDM(channel.id, closure_1_8.CHANNEL_CALL);
        }
      }
    }
    tmp12 = jsxs;
    tmp13 = View;
    obj2 = { style: tmp.container, children: null };
    tmp14 = jsx;
    obj3 = { size: require("Button").Icon.Sizes.MEDIUM, source: null, disableColor: true, style: null };
    if (require("isRoleRequired")(channel)) {
      tmp5Result = require("registerAsset");
    } else {
      tmp5Result = require("registerAsset");
    }
    obj3[1] = tmp5Result;
    obj3[3] = tmp.icons;
    items3 = [, , ];
    items3[0] = tmp14(require("Button").Icon, obj3);
    obj4 = { style: tmp.middle, children: null };
    tmp14Result = formatToPlainStringResult;
    if (typeof formatToPlainStringResult === "string") {
      obj5 = { lineClamp: 1, lineBreakMode: "tail", variant: "text-md/semibold", color: "text-overlay-light", children: null };
      obj5[4] = formatToPlainStringResult;
      tmp14Result = tmp14(require("Text").Text, obj5);
    }
    items4 = [, ];
    items4[0] = tmp14Result;
    tmp14Result1 = name;
    if (typeof name === "string") {
      obj6 = { lineClamp: 1, lineBreakMode: "tail", variant: "text-xs/medium", color: "text-overlay-light", children: null };
      obj6[4] = name;
      tmp14Result1 = tmp14(require("Text").Text, obj6);
    }
    items4[1] = tmp14Result1;
    obj4[1] = items4;
    items3[1] = tmp12(tmp13, obj4);
    obj7 = { style: tmp.icons, children: null };
    tmp14Result2 = null != E;
    if (tmp14Result2) {
      tmp19 = AddMemberButton;
      obj8 = { onPress: null };
      obj8[0] = E;
      tmp14Result2 = tmp14(AddMemberButton, obj8);
    }
    obj7[1] = tmp14Result2;
    items3[2] = tmp14(tmp13, obj7);
    obj2[1] = items3;
    return tmp12(tmp13, obj2);
  }
}
function AddMemberButton(onPress) {
  const obj = { onPress: onPress.onPress, iconSource: registerAssetDefault, iconStyle: callback2().icons, accessibilityLabel: null };
  const intl = getSystemLocale.intl;
  obj[3] = intl.string(getSystemLocale.t["6Qgrev"]);
  return callback(IconButton, obj);
}
class IconButton {
  constructor(arg0) {
    ({ onPress, iconStyle, iconSource, accessibilityLabel, style } = global);
    obj = { accessibilityRole: "button", accessibilityLabel, onPress, style, children: jsx(require("Button").Icon, { source: iconSource, style: iconStyle }) };
    return jsx(require("PressableBase").PressableOpacity, obj);
  }
}
noopAll;
({ Permissions: error, AnalyticsPages: closure_8, InstantInviteSources: c9 } = ME);
({ jsx: c10, jsxs: unpackModuleId } = jsxProd);
createCacheKey = { container: { alignSelf: "stretch", flexDirection: "row", paddingVertical: 10, paddingHorizontal: 16, alignItems: "center" }, middle: { flex: 1, justifyContent: "space-around", marginHorizontal: 16 }, icons: null, subtitle: null, subtitleWrapper: null };
createCacheKey = { flexDirection: "row", tintColor: ThemesDefault.colors.WHITE };
createCacheKey[2] = createCacheKey;
createCacheKey[3] = { fontSize: 12, lineHeight: 16, color: ThemesDefault.colors.WHITE };
createCacheKey[4] = { flexDirection: "row" };
let closure_12 = createCacheKey.createStyles(createCacheKey);
let obj1 = { fontSize: 12, lineHeight: 16, color: ThemesDefault.colors.WHITE };
const result = require("set").fileFinishedImporting("modules/voice_calls/native/action_sheet/VoiceChannelHeader.tsx");

export default VoiceChannelHeader;
export { VoiceChannelHeader };
export { IconButton };