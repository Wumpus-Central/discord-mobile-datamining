// === Module 10155: StartStageChannelModal ===

// Module 10155 (StartStageChannelModal)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import native from "native" /* 1177 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import KeyboardManagerUtilsAll from "KeyboardManagerUtils" /* 1875 */;
import Text_Text from "Text/Text" /* 4823 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5030 */;
import Pressables from "Pressables" /* 5425 */;
import GuildIcon from "GuildIcon" /* 5887 */;
import _modDef7420 from "module_7420" /* 7420 */;
import HotspotStore2 from "HotspotStore" /* 7544 */;
import StageSparkleDefault from "StageSparkle" /* 8753 */;
import Form from "Form" /* 8947 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import StageInstanceStore from "StageInstanceStore" /* 2047 */;

const require = globalThis.__r;
const GuildIconDefault = GuildIcon;

require = fn;
function closeModal() {
  ModalActionCreatorsDefault.popWithKey(closure_1_11);
}
function NavigationBar(guild) {
  let tmp2 = null;
  if (null == guild.guild) {
    const obj = { style: null, children: null };
    const items = [, ];
    ({ contentContainer: arr[0], contentTopSpacing: arr[1] } = tmp);
    obj.style = items;
    const obj2 = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, children: null };
    const intl = util.intl;
    obj2.accessibilityLabel = intl.string(util.t.cpT0Cq);
    obj2.onPress = closeModal;
    const obj3 = { source: _modDef7420 };
    obj2.children = closure_1_14(native.Icon, obj3);
    obj.children = closure_1_14(Pressables.PressableOpacity, obj2);
    tmp2 = closure_1_14(React5, obj);
  }
  return tmp2;
}
function HeaderIcon(guild) {
  guild = guild.guild;
  if (null == guild) {
    let tmp7 = closure_1_14(StageSparkleDefault, {});
  } else {
    const obj = { style: tmp.guildIcon, size: GuildIcon.GuildIconSizes.LARGE, guild };
    tmp7 = closure_1_14(GuildIconDefault, obj);
  }
  return tmp7;
}
class NotificationToggle {
  constructor(arg0) {
    ({ sendStartNotification, onToggle } = global);
    tmp = closure_16();
    tmp2 = closure_0;
    tmp3 = closure_3;
    obj = closure_0(closure_3[18]);
    items = [];
    items[0] = closure_0(closure_3[19]).HotspotStore;
    tmp5 = jsx;
    stateFromStores = obj.useStateFromStores(items, () => {
      const HotspotStore = HotspotStore2.HotspotStore;
      return HotspotStore.hasHotspot(HotspotStore2.HotspotLocations.LIVE_STAGE_NOTIFICATION_BADGE);
    });
    obj1 = { DEPRECATED_style: tmp.notificationToggle, label: null, onPress: null, trailing: null };
    tmp7 = View;
    obj7 = { style: tmp.label, children: null };
    tmp6 = jsxs;
    obj8 = { text: null };
    intl = closure_0(closure_3[13]).intl;
    obj8.text = intl.string(closure_0(closure_3[13]).t.BYJgew);
    items1 = [, ];
    items1[0] = jsx(closure_0(closure_3[20]).FormLabel, obj8);
    tmp5Result = null;
    if (stateFromStores) {
      obj9 = { style: null, children: null };
      obj9.style = tmp.pill;
      obj10 = { style: null, variant: "text-xxs/bold", color: "text-overlay-light", children: null };
      obj10.style = tmp.pillLabel;
      intl2 = tmp2(tmp3[13]).intl;
      obj10.children = intl2.string(tmp2(tmp3[13]).t.y2b7CA);
      obj9.children = tmp5(tmp2(tmp3[21]).Text, obj10);
      tmp5Result = tmp5(tmp7, obj9);
    }
    items1[1] = tmp5Result;
    obj7.children = items1;
    obj1.label = tmp6(tmp7, obj7);
    obj1.onPress = onToggle;
    obj1.trailing = tmp5(tmp2(tmp3[14]).Checkbox, { selected: sendStartNotification });
    return tmp5(closure_0(closure_3[20]).FormRow, obj1);
  }
}
get_ActivityIndicator = fn(17);
({ View: closure_7, ScrollView: closure_8 } = get_ActivityIndicator);
const StageChannelsConstants = fn(5717);
({ MAX_STAGE_TOPIC_LENGTH: c10, START_STAGE_CHANNEL_EVENT_MODAL_KEY: closure_11 } = StageChannelsConstants);
const AnalyticEvents = fn(1074).AnalyticEvents;
let constants = fn(2048).GuildScheduledEventPrivacyLevel;
const jsxProd = fn(21);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
const createStyles = fn(4827);
let obj = { keyboardAwareView: { flex: 1 }, closeButtonContainer: { right: 10 }, container: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW }, contentContainer: { paddingHorizontal: 16 }, contentTopSpacing: { paddingTop: 16 }, header: { alignItems: "center", paddingBottom: 24 }, headerTitle: { marginTop: 16, marginBottom: 8 }, headerSubtitle: { textAlign: "center" }, textInput: null, startButton: null, error: null, optionExplanation: null, guildIcon: null, label: null, pill: null, pillLabel: null, notificationToggle: null, ageVerificationNotice: null };
let obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj.textInput = { padding: 12, width: "100%", borderRadius: nativeDefault.radii.xs, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, marginBottom: 16 };
obj.startButton = { marginTop: 16 };
obj.error = { paddingTop: 8 };
obj.optionExplanation = { lineHeight: 16, paddingTop: 8 };
let obj4 = { padding: 12, width: "100%", borderRadius: nativeDefault.radii.xs, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, marginBottom: 16 };
obj.guildIcon = { borderRadius: nativeDefault.radii.md };
obj.label = { display: "flex", alignItems: "center", flexDirection: "row" };
let obj5 = { borderRadius: nativeDefault.radii.md };
obj.pill = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND, paddingHorizontal: 4, paddingVertical: 2, marginStart: 8, borderRadius: nativeDefault.radii.xs };
obj.pillLabel = { textTransform: "uppercase" };
let obj6 = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND, paddingHorizontal: 4, paddingVertical: 2, marginStart: 8, borderRadius: nativeDefault.radii.xs };
obj.notificationToggle = { marginTop: 16, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.sm };
let obj7 = { marginTop: 16, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.sm };
obj.ageVerificationNotice = { marginBottom: nativeDefault.space.PX_16 };
const value = createStyles.createStyles(obj);
let obj8 = { marginBottom: nativeDefault.space.PX_16 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/stage_channels/native/modals/StartStageChannelModal.tsx");

export default noop.forwardRef((channel, arg1) => {
  ({ guild, onStageStarted: require, onClose: importDefault } = channel);
  channel = undefined;
  first1 = undefined;
  _slicedToArray = undefined;
  let first2;
  closure_7 = undefined;
  c8 = undefined;
  c9 = undefined;
  let canSendStageStartNotification;
  let first3;
  closure_12 = undefined;
  constants = undefined;
  let obj5;
  let ref;
  c16 = undefined;
  onConfirmPress = async function _handleSave() {
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            closure_1 = tmp3;
            closure_0 = tmp7;
            closure_128_0 = undefined;
            if ("" !== first1) {
              if (null != first2) {
                React6(true);
                StageInstanceStore(null);
                const result = tmp66(1875).dismissGlobalKeyboard();
                dependencyMap = 1;
                if (null != memo) {
                  c4 = 3;
                  c5 = 1;
                  const obj8 = { value: tmp66(8744).editStage(channel, first1, first2), done: false };
                  return obj8;
                } else {
                  obj5 = tmp66(8744);
                  c4 = 2;
                  c5 = 1;
                  const obj9 = { value: obj5.startStage(channel, first1, first2, first3), done: false };
                  return obj9;
                }
                const obj4 = tmp66(1875);
              }
            }
          }
        } else {
          if (1 === tmp7) {
            dependencyMap = 0;
            closure_128_1 = tmp66;
            const aPIError = new closure_0(4727).APIError(closure_128_1);
            closure_128_0 = aPIError;
            closure_129_9(closure_128_0);
            closure_129_8(false);
          } else {
            if (2 === tmp7) {
              if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 !== 2) {
                let tmp8 = closure_129_10;
                if (closure_129_10) {
                  tmp8 = closure_129_13;
                }
                if (tmp8) {
                  tmp66(7547).hideHotspot(closure_0(7544).HotspotLocations.LIVE_STAGE_NOTIFICATION_BADGE);
                  const obj2 = tmp66(7547);
                }
              }
            } else if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              dependencyMap = 0;
              c5 = 3;
              const obj = { value, done: true };
              return obj;
            }
            closure_129_8(false);
            closure_129_9(null);
            if (null != closure_129_1) {
              closure_129_1();
            } else {
              closure_1_17();
            }
            if (closure_129_0 != null) {
              tmp27(closure_129_2);
            }
            dependencyMap = 0;
          }
          dependencyMap = 0;
          c5 = 3;
          const obj10 = { value, done: true };
          return obj10;
        }
        c5 = 3;
      } catch (tmp66) {
        if (tmp4 === dependencyMap) {
          c5 = tmp2;
          throw tmp66;
        } else {
          c4 = tmp;
        }
      }
    }
  };
  let tmp = c16();
  const imperativeHandle = first2.useImperativeHandle(arg1, () => ({
    renderRightButton: function RightButton() {
      const obj = { style: c16().closeButtonContainer, accessibilityRole: "button", accessibilityLabel: null, source: null, onPress: null, disableColor: true };
      const tmp = c16();
      const intl = require("util").intl;
      obj.accessibilityLabel = intl.string(require("util").t.cpT0Cq);
      obj.source = require("module_7420");
      obj.onPress = onPress;
      return obj5(require("TouchableHitBox"), obj);
    }
  }));
  const tmp4 = _slicedToArray(first2.useState(channel.channel), 2);
  channel = tmp4[0];
  const items = [channel.id];
  const memo = first2.useMemo(() => StageInstanceStore.getStageInstanceByChannel(first.id), items);
  let str;
  if (memo != null) {
    str = memo.topic;
  }
  if (str == null) {
    str = "";
  }
  [first1, obj11.onChange] = first2.useState(str);
  _slicedToArray = tmp9;
  const GUILD_ONLY = constants.GUILD_ONLY;
  let privacy_level;
  if (memo != null) {
    privacy_level = memo.privacy_level;
  }
  if (privacy_level == null) {
    privacy_level = GUILD_ONLY;
  }
  const tmp3Result5 = _slicedToArray(first2.useState(privacy_level), 2);
  first2 = tmp3Result5[0];
  closure_7 = tmp3Result5[1];
  [tmp14, c8] = _slicedToArray(first2.useState(false), 2);
  const tmp3Result6 = _slicedToArray(first2.useState(false), 2);
  [obj2, c9] = _slicedToArray(first2.useState(null), 2);
  const tmp3Result7 = _slicedToArray(first2.useState(null), 2);
  canSendStageStartNotification = require("LiveStageNotificationsUtils").useCanSendStageStartNotification(channel);
  let obj3 = require("LiveStageNotificationsUtils");
  let tmp20 = null == memo;
  const defaultSendStartStageNotificationToggle = require("LiveStageNotificationsUtils").useDefaultSendStartStageNotificationToggle(channel);
  if (tmp20) {
    tmp20 = canSendStageStartNotification;
  }
  canSendStageStartNotification = tmp20;
  let tmp21 = tmp20;
  if (tmp20) {
    tmp21 = defaultSendStartStageNotificationToggle;
  }
  const tmp3Result8 = _slicedToArray(first2.useState(tmp21), 2);
  first3 = tmp3Result8[0];
  closure_12 = tmp3Result8[1];
  let obj4 = require("LiveStageNotificationsUtils");
  const items1 = [require("HotspotStore").HotspotStore];
  constants = require("initialize").useStateFromStores(items1, () => {
    const HotspotStore = require("HotspotStore").HotspotStore;
    return HotspotStore.hasHotspot(require("HotspotStore").HotspotLocations.LIVE_STAGE_NOTIFICATION_BADGE);
  });
  obj5 = { stageInstance: memo, privacyDefault: GUILD_ONLY };
  ref = obj.useRef(obj5);
  const effect = obj.useEffect(() => {
    closure_15.current = obj5;
  });
  const items2 = [channel.id];
  const effect1 = obj.useEffect(() => {
    const current = ref.current;
    const stageInstance = current.stageInstance;
    let privacy_level;
    if (stageInstance != null) {
      privacy_level = stageInstance.privacy_level;
    }
    if (privacy_level == null) {
      privacy_level = current.privacyDefault;
    }
    closure_7(privacy_level);
    if (null != stageInstance) {
      closure_5(stageInstance.topic);
    }
  }, items2);
  const tmp16Result = require("initialize");
  ({ helpText, publicDisabled: c16 } = require("usePrivacyLevelHelpText")(channel, memo, first2));
  require("useMountEffect")(() => {
    let id;
    if (memo != null) {
      id = memo.id;
    }
    AnalyticsUtilsDefault.track(AnalyticEvents.START_STAGE_OPENED, { stage_instance_id: id, can_start_public_stage: !c16, guild_id: first.guild_id });
  });
  let obj6 = { style: tmp.header, children: null };
  const items3 = [obj5(HeaderIcon, { guild }), , ];
  const obj7 = { style: tmp.headerTitle, accessibilityRole: "header", variant: "text-lg/semibold", color: "mobile-text-heading-primary", children: null };
  if (null == memo) {
    const intl2 = require("util").intl;
    let stringResult = intl2.string(require("util").t.DDF0cJ);
  } else {
    let intl = require("util").intl;
    stringResult = intl.string(require("util").t["5BKP4y"]);
  }
  obj7.children = stringResult;
  items3[1] = obj5(require("Text/Text").Text, obj7);
  let obj8 = { style: tmp.headerSubtitle, variant: "text-sm/medium", color: "text-default", children: null };
  if (null == memo) {
    const intl4 = require("util").intl;
    let stringResult1 = intl4.string(require("util").t.bqQIwa);
  } else {
    const intl3 = require("util").intl;
    stringResult1 = intl3.string(require("util").t["I+9bLx"]);
  }
  obj8.children = stringResult1;
  items3[2] = obj5(require("Text/Text").Text, obj8);
  obj6.children = items3;
  let obj9 = { keyboardShouldPersistTaps: "handled", showsVerticalScrollIndicator: false, alwaysBounceVertical: false, style: tmp.container, contentContainerStyle: null, children: null };
  const items4 = [tmp.contentContainer, ];
  let contentTopSpacing = null;
  const tmp27 = require("usePrivacyLevelHelpText")(channel, memo, first2);
  if (null != guild) {
    contentTopSpacing = tmp.contentTopSpacing;
  }
  items4[1] = contentTopSpacing;
  obj9.contentContainerStyle = items4;
  const items5 = [ref(closure_7, obj6), , , , , , , , ];
  let obj10 = { children: null };
  const tmp29Result = ref(closure_7, obj6);
  const tmp35 = c8;
  const intl5 = require("util").intl;
  obj10.children = intl5.string(require("util").t["5FPBOB"]);
  items5[1] = obj5(require("FormHeader"), obj10);
  const obj11 = { style: tmp.textInput, showBorder: false, showTopContainer: false, multiline: false, maxLength: canSendStageStartNotification, value: first1, placeholder: null, onChange: null, autoFocus: true, clearButtonVisibility: null };
  const intl6 = require("util").intl;
  obj11.placeholder = intl6.string(require("util").t.ZwWruY);
  obj11.clearButtonVisibility = require("native").ClearButtonVisibility.WITH_CONTENT;
  items5[2] = obj5(require("Form").FormInput, obj11);
  let tmp31Result = null != helpText;
  if (tmp31Result) {
    const obj12 = { style: tmp.optionExplanation, variant: "text-xs/medium", color: "text-default", children: helpText };
    tmp31Result = tmp31(require("Text/Text").Text, obj12);
  }
  items5[3] = tmp31Result;
  let tmp31Result5 = null != guild;
  if (tmp31Result5) {
    const obj13 = { guild, channel, onChangeChannel: tmp4[1] };
    tmp31Result5 = tmp31(require("GuildStageChannelSelection"), obj13);
  }
  items5[4] = tmp31Result5;
  let tmp31Result6 = null;
  if (tmp20) {
    const obj14 = {
      sendStartNotification: first3,
      onToggle: function handleSetSendStartNotification() {
          const result = KeyboardManagerUtilsAll.dismissGlobalKeyboard();
          closure_12(!first3);
        }
    };
    tmp31Result6 = tmp31(NotificationToggle, obj14);
  }
  items5[5] = tmp31Result6;
  items5[6] = obj5(require("StageChannelAgeVerificationNotice"), { onConfirmPress, style: tmp.ageVerificationNotice, channelId: channel.id });
  let tmp31Result7 = null;
  if (null != obj2) {
    const obj16 = { style: tmp.error, variant: "text-xs/medium", color: "text-feedback-critical", children: obj2.getAnyErrorMessage() };
    tmp31Result7 = tmp31(require("Text/Text").Text, obj16);
  }
  items5[7] = tmp31Result7;
  const obj17 = { style: tmp.startButton, children: null };
  if (null == memo) {
    const intl8 = require("util").intl;
    let stringResult2 = intl8.string(require("util").t.s8mM8A);
  } else {
    const intl7 = require("util").intl;
    stringResult2 = intl7.string(require("util").t.K344S7);
  }
  obj17.children = obj5(require("components/Button/Button").Button, {
    text: stringResult2,
    onPress: function handleSave() {
      const self = this;
      const apply = closure_17.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    },
    disabled: "" === first1 || null == first2,
    loading: tmp14
  });
  items5[8] = obj5(closure_7, obj17);
  obj9.children = items5;
  const tmp29Result2 = ref(tmp35, obj9);
  let tmp31Result8 = tmp29Result2;
  if (null == guild) {
    const rect = { top: true, bottom: true, style: tmp.container, children: null };
    const obj19 = { style: tmp.keyboardAwareView, children: null };
    const obj20 = { guild };
    const items6 = [tmp31(NavigationBar, obj20), tmp29Result2];
    obj19.children = items6;
    rect.children = tmp29(require("KeyboardAwareView"), obj19);
    tmp31Result8 = tmp31(require("common/SafeAreaView").SafeAreaPaddingView, rect);
    const tmp26Result2 = require("KeyboardAwareView");
  }
  return tmp31Result8;
});
export { NotificationToggle };