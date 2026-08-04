import "Button";
import { View } from "getSystemLocale";
import participantFromServer from "participantFromServer";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import getUncachedChannelPermissions from "getUncachedChannelPermissions";
import ME from "ME";
import jsxProd from "registerAsset";
import createCacheKey from "createCacheKey";

let c10;
let c9;
let error;
let metroImportAll;
let unpackModuleId;
const require = arg1;
function PrivateChannelSubtitle(channel) {
  channel = channel.channel;
  const tmp = createCacheKey();
  const state = importDefault(12967)(channel.id).state;
  let obj = { style: tmp.subtitleWrapper, children: null };
  obj = { useAllAloneText: false, channel, voiceState: state, style: tmp.subtitle };
  const items = [callback(importDefault(12968), obj), , ];
  let tmp6Result = state === require(12967) /* id */.CallStates.CONNECTED;
  if (tmp6Result) {
    obj = { style: null, variant: "text-xs/medium", color: "text-overlay-light", children: " - " };
    obj[0] = tmp.subtitle;
    tmp6Result = tmp6(tmp7(4281).Text, obj);
  }
  items[1] = tmp6Result;
  tmp6Result = state === tmp7(12967).CallStates.CONNECTED;
  if (tmp6Result) {
    const obj1 = { channelId: null, style: null };
    obj1[0] = channel.id;
    obj1[1] = tmp.subtitle;
    tmp6Result = tmp6(importDefault(12969), obj1);
  }
  items[2] = tmp6Result;
  obj[1] = items;
  return closure_11(View, obj);
}
class VoiceChannelHeader {
  constructor(arg0) {
    channel = global.channel;
    f91008 = undefined;
    tmp = jsxs();
    tmp2 = channel;
    tmp3 = closure_2;
    obj = require("initialize");
    items = [];
    items[0] = View;
    stateFromStores = obj.useStateFromStores(items, () => outer1_5.getGuild(channel.getGuildId()));
    tmp5 = f91008;
    tmp6 = require("useIsVoiceChannelFull")(channel);
    obj2 = require("initialize");
    items1 = [];
    items1[0] = View;
    items2 = [];
    items2[0] = channel;
    f91008 = obj2.useStateFromStores(items1, () => outer1_4.getSelfEmbeddedActivityForChannel(channel.id), items2);
    name = undefined;
    tmp7 = require("computeChannelName")(channel);
    if (stateFromStores != null) {
      name = stateFromStores.name;
    }
    E = null;
    if (View.can(Permissions.CREATE_INSTANT_INVITE, channel)) {
      E = null;
      if (!tmp6) {
        E = () => {
          let obj = channel(outer1_2[16]);
          obj = { source: outer1_9.VOICE_CHANNEL, targetApplicationId: null };
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
          obj = require("navigationToRootTabHelper");
          return obj.navigateToNewGroupDM(channel.id, outer1_8.CHANNEL_CALL);
        }
      }
    }
    tmp12 = jsxs;
    tmp13 = View;
    obj2 = { style: tmp.container, children: null };
    tmp14 = jsx;
    obj3 = { size: null, source: null, disableColor: true, style: null };
    obj3[0] = require("Button").Icon.Sizes.MEDIUM;
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
  const obj = { onPress: onPress.onPress, iconSource: null, iconStyle: null, accessibilityLabel: null };
  obj[1] = importDefault(9638);
  obj[2] = createCacheKey().icons;
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[3] = intl.string(require(1236) /* getSystemLocale */.t["6Qgrev"]);
  return callback(IconButton, obj);
}
class IconButton {
  constructor(arg0) {
    ({ onPress, iconStyle, iconSource, accessibilityLabel, style } = global);
    obj = { accessibilityRole: "button", accessibilityLabel, onPress, style, children: null };
    obj[4] = jsx(require("Button").Icon, { source: iconSource, style: iconStyle });
    return jsx(require("PressableBase").PressableOpacity, obj);
  }
}
({ Permissions: error, AnalyticsPages: metroImportAll, InstantInviteSources: c9 } = ME);
({ jsx: c10, jsxs: unpackModuleId } = jsxProd);
createCacheKey = { container: { alignSelf: "stretch", flexDirection: "row", paddingVertical: 10, paddingHorizontal: 16, alignItems: "center" }, middle: { flex: 1, justifyContent: "space-around", marginHorizontal: 16 }, icons: null, subtitle: null, subtitleWrapper: null };
createCacheKey = { flexDirection: "row", tintColor: require("Themes").colors.WHITE };
createCacheKey[2] = createCacheKey;
createCacheKey[3] = { fontSize: 12, lineHeight: 16, color: require("Themes").colors.WHITE };
createCacheKey[4] = { flexDirection: "row" };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj1 = { fontSize: 12, lineHeight: 16, color: require("Themes").colors.WHITE };
const result = require("participantFromServer").fileFinishedImporting("modules/voice_calls/native/action_sheet/VoiceChannelHeader.tsx");

export default VoiceChannelHeader;
export { VoiceChannelHeader };
export { IconButton };