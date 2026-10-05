// === Module 9474: StartStageChannelModal ===

// Module 9474 (StartStageChannelModal)
import get_initialized from "get initialized" /* 504 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import intl9 from "intl" /* 1126 */;
import native from "native" /* 1188 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import KeyboardManagerUtilsAll from "KeyboardManagerUtils" /* 1881 */;
import GuildScheduledEventsConstants from "GuildScheduledEventsConstants" /* 2057 */;
import Text_Text from "Text/Text" /* 4886 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5093 */;
import Pressables from "Pressables" /* 5909 */;
import GuildIcon from "GuildIcon" /* 5971 */;
import AssetRegistryDefault from "AssetRegistry" /* 6584 */;
import HotspotStore2 from "HotspotStore" /* 6712 */;
import Form from "Form" /* 8895 */;
import StageSparkleDefault from "StageSparkle" /* 9292 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import StageInstanceStore from "StageInstanceStore" /* 2056 */;
import StageChannelsConstants from "StageChannelsConstants" /* 5571 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const GuildIconDefault = GuildIcon;
let c3, c4, c5, channel, closure_12;

let c10;
let closure_14;
let closure_15;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let unpackModuleId;
function closeModal() {
  const obj = ModalActionCreatorsDefault;
  obj.popWithKey(unpackModuleId);
}
let _slicedToArray = _slicedToArray_mod;
({ View: metroImportDefault, ScrollView: metroImportAll } = react_native);
({ MAX_STAGE_TOPIC_LENGTH: c10, START_STAGE_CHANNEL_EVENT_MODAL_KEY: unpackModuleId } = StageChannelsConstants);
const AnalyticEvents = Constants.AnalyticEvents;
let constants = GuildScheduledEventsConstants.GuildScheduledEventPrivacyLevel;
({ jsx: closure_14, jsxs: closure_15 } = Fragment);
let createStyles = createStyles_mod;
let obj = { keyboardAwareView: { flex: 1 }, closeButtonContainer: { right: 10 }, container: obj2, contentContainer: { paddingHorizontal: 16 }, contentTopSpacing: { paddingTop: 16 }, header: { alignItems: "center", paddingBottom: 24 }, headerTitle: { marginTop: 16, marginBottom: 8 }, headerSubtitle: { textAlign: "center" }, textInput: obj3, startButton: { marginTop: 16 }, error: { paddingTop: 8 }, optionExplanation: { lineHeight: 16, paddingTop: 8 }, guildIcon: obj4, label: { display: "flex", alignItems: "center", flexDirection: "row" }, pill: obj5, pillLabel: { textTransform: "uppercase" }, notificationToggle: obj6, ageVerificationNotice: obj7 };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles = createStyles.createStyles;
obj3 = { padding: 12, width: "100%", borderRadius: nativeDefault.radii.xs, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, marginBottom: 16 };
obj4 = { borderRadius: nativeDefault.radii.md };
obj5 = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND, paddingHorizontal: 4, paddingVertical: 2, marginStart: 8, borderRadius: nativeDefault.radii.xs };
obj6 = { marginTop: 16, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.sm };
obj7 = { marginBottom: nativeDefault.space.PX_16 };
let closure_16 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_18 = ReactCompilerGating.isReactCompilerEnabled() ? ((guild) => {
  let Icon;
  let obj3;
  const obj = react2;
  const cResult = obj.c(7);
  guild = guild.guild;
  const tmp4 = closure_16();
  let tmp5 = null;
  if (null == guild) {
    if (cResult[0] === tmp4.contentContainer) {
      let tmp6;
      let tmp8;
      let tmp10;
      let tmp15;
      if (cResult[1] === tmp4.contentTopSpacing) {
        tmp6 = cResult[2];
      }
      const _Symbol = Symbol;
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = intl9.intl;
        const stringResult = intl.string(intl9.t.cpT0Cq);
        cResult[3] = stringResult;
        tmp8 = stringResult;
      } else {
        tmp8 = cResult[3];
      }
      const _Symbol2 = Symbol;
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { accessibilityRole: "button", accessibilityLabel: tmp8, onPress: closeModal, children: authStore2(Icon, obj3) };
        const PressableOpacity = Pressables.PressableOpacity;
        obj3 = { source: AssetRegistryDefault };
        Icon = native.Icon;
        const tmp14 = authStore2(PressableOpacity, obj2);
        cResult[4] = tmp14;
        tmp10 = tmp14;
      } else {
        tmp10 = cResult[4];
      }
      if (cResult[5] !== tmp6) {
        const obj4 = { style: tmp6, children: tmp10 };
        const tmp18 = authStore2(metroImportDefault, obj4);
        cResult[5] = tmp6;
        cResult[6] = tmp18;
        tmp15 = tmp18;
      } else {
        tmp15 = cResult[6];
      }
      tmp5 = tmp15;
    }
    const items = [, ];
    ({ contentContainer: arr[0], contentTopSpacing: arr[1] } = tmp4);
    cResult[0] = tmp4.contentContainer;
    cResult[1] = tmp4.contentTopSpacing;
    cResult[2] = items;
    tmp6 = items;
  }
  return tmp5;
}) : ((guild) => {
  let Icon;
  let PressableOpacity;
  let intl;
  let items;
  let obj2;
  let obj3;
  guild = guild.guild;
  let tmp2 = null;
  const tmp = closure_16();
  if (null == guild) {
    const obj = { style: items, children: authStore2(PressableOpacity, obj2) };
    items = [, ];
    ({ contentContainer: arr[0], contentTopSpacing: arr[1] } = tmp);
    obj2 = { accessibilityRole: "button", accessibilityLabel: intl.string(intl9.t.cpT0Cq), onPress: closeModal, children: authStore2(Icon, obj3) };
    PressableOpacity = Pressables.PressableOpacity;
    intl = intl9.intl;
    obj3 = { source: AssetRegistryDefault };
    Icon = native.Icon;
    tmp2 = authStore2(metroImportDefault, obj);
  }
  return tmp2;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_19 = ReactCompilerGating.isReactCompilerEnabled() ? ((guild) => {
  let tmp5;
  const obj = react2;
  const cResult = obj.c(4);
  guild = guild.guild;
  const tmp4 = closure_16();
  if (null == guild) {
    let first;
    const _Symbol = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp14 = authStore2(StageSparkleDefault, {});
      cResult[0] = tmp14;
      first = tmp14;
    } else {
      first = cResult[0];
    }
    tmp5 = first;
  } else {
    if (cResult[1] === guild) {
      if (cResult[2] === tmp4.guildIcon) {
        tmp5 = cResult[3];
      }
    }
    const obj2 = { style: tmp4.guildIcon, size: GuildIcon.GuildIconSizes.LARGE, guild };
    const tmp8 = GuildIconDefault;
    const tmp9 = authStore2(tmp8, obj2);
    cResult[1] = guild;
    cResult[2] = tmp4.guildIcon;
    cResult[3] = tmp9;
    tmp5 = tmp9;
  }
  return tmp5;
}) : ((guild) => {
  let tmp7;
  guild = guild.guild;
  if (null == guild) {
    tmp7 = authStore2(StageSparkleDefault, {});
  } else {
    const obj = { style: tmp.guildIcon, size: GuildIcon.GuildIconSizes.LARGE, guild };
    const tmp5 = GuildIconDefault;
    tmp7 = authStore2(tmp5, obj);
  }
  return tmp7;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let Text;
  let intl;
  let intl2;
  let items1;
  let obj7;
  let onToggle;
  let sendStartNotification;
  let tmp5;
  let tmp6;
  let tmp8;
  const obj = react2;
  const cResult = obj.c(17);
  ({ sendStartNotification, onToggle } = arg0);
  const tmp4 = closure_16();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [HotspotStore2.HotspotStore];
    const fn = function n() {
      const HotspotStore = HotspotStore2.HotspotStore;
      return HotspotStore.hasHotspot(HotspotStore2.HotspotLocations.LIVE_STAGE_NOTIFICATION_BADGE);
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const tmpResult = get_initialized;
  const stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { text: intl.string(intl9.t.BYJgew) };
    const FormLabel = Form.FormLabel;
    intl = intl9.intl;
    const tmp10 = authStore2(FormLabel, obj2);
    cResult[2] = tmp10;
    tmp8 = tmp10;
  } else {
    tmp8 = cResult[2];
  }
  if (cResult[3] === stateFromStores) {
    if (cResult[4] === tmp4.pill) {
      let tmp11;
      if (cResult[5] === tmp4.pillLabel) {
        tmp11 = cResult[6];
      }
      if (cResult[7] === tmp4.label) {
        let tmp15;
        let tmp19;
        if (cResult[8] === tmp11) {
          tmp15 = cResult[9];
        }
        if (cResult[10] !== sendStartNotification) {
          const obj3 = { selected: sendStartNotification };
          const tmp21 = authStore2(native.Checkbox, obj3);
          cResult[10] = sendStartNotification;
          cResult[11] = tmp21;
          tmp19 = tmp21;
        } else {
          tmp19 = cResult[11];
        }
        if (cResult[12] === onToggle) {
          if (cResult[13] === tmp4.notificationToggle) {
            if (cResult[14] === tmp15) {
              let tmp22;
              if (cResult[15] === tmp19) {
                tmp22 = cResult[16];
              }
              return tmp22;
            }
          }
        }
        const obj4 = { DEPRECATED_style: tmp4.notificationToggle, label: tmp15, onPress: onToggle, trailing: tmp19 };
        const tmp24 = authStore2(Form.FormRow, obj4);
        cResult[12] = onToggle;
        cResult[13] = tmp4.notificationToggle;
        cResult[14] = tmp15;
        cResult[15] = tmp19;
        cResult[16] = tmp24;
        tmp22 = tmp24;
      }
      const obj5 = { style: tmp4.label, children: items1 };
      items1 = [tmp8, tmp11];
      const tmp18 = closure_15(metroImportDefault, obj5);
      cResult[7] = tmp4.label;
      cResult[8] = tmp11;
      cResult[9] = tmp18;
      tmp15 = tmp18;
    }
  }
  let tmp12 = null;
  if (stateFromStores) {
    const obj6 = { style: tmp4.pill, children: authStore2(Text, obj7) };
    obj7 = { style: tmp4.pillLabel, variant: "text-xxs/bold", color: "text-overlay-light", children: intl2.string(intl9.t.y2b7CA) };
    Text = Text_Text.Text;
    intl2 = intl9.intl;
    tmp12 = authStore2(metroImportDefault, obj6);
  }
  cResult[3] = stateFromStores;
  cResult[4] = tmp4.pill;
  cResult[5] = tmp4.pillLabel;
  cResult[6] = tmp12;
  tmp11 = tmp12;
}) : ((arg0) => {
  let Text;
  let intl;
  let intl2;
  let items1;
  let obj2;
  let obj5;
  let onToggle;
  let sendStartNotification;
  ({ sendStartNotification, onToggle } = arg0);
  const tmp = closure_16();
  const useStateFromStores = get_initialized.useStateFromStores;
  const items = [];
  get_initialized;
  items[0] = HotspotStore2.HotspotStore;
  const stateFromStores = useStateFromStores(items, () => {
    const HotspotStore = HotspotStore2.HotspotStore;
    return HotspotStore.hasHotspot(HotspotStore2.HotspotLocations.LIVE_STAGE_NOTIFICATION_BADGE);
  });
  const obj = { DEPRECATED_style: tmp.notificationToggle, label: closure_15(metroImportDefault, obj2), onPress: onToggle, trailing: authStore2(native.Checkbox, { selected: sendStartNotification }) };
  obj2 = { style: tmp.label, children: items1 };
  const FormRow = Form.FormRow;
  const obj3 = { text: intl.string(intl9.t.BYJgew) };
  const FormLabel = Form.FormLabel;
  intl = intl9.intl;
  items1 = [authStore2(FormLabel, obj3), ];
  let tmp6Result = null;
  if (stateFromStores) {
    const obj4 = { style: tmp.pill, children: authStore2(Text, obj5) };
    obj5 = { style: tmp.pillLabel, variant: "text-xxs/bold", color: "text-overlay-light", children: intl2.string(intl9.t.y2b7CA) };
    Text = Text_Text.Text;
    intl2 = intl9.intl;
    tmp6Result = authStore2(metroImportDefault, obj4);
  }
  items1[1] = tmp6Result;
  return authStore2(FormRow, obj);
});
let closure_20 = tmp6;
const forwardRefResult = react.forwardRef((channel, arg1) => {
  let Button;
  let _undefined;
  let _undefined2;
  let c16;
  let c8;
  let c9;
  let closure_13;
  let closure_5;
  let guild;
  let helpText;
  let intl5;
  let intl6;
  let items3;
  let items4;
  let items5;
  let items6;
  let obj18;
  let obj19;
  let obj2;
  let stringResult;
  let stringResult1;
  let stringResult2;
  let tmp15;
  let tmp28Result2;
  let tmp6;
  ({ guild, onStageStarted: require, onClose: importDefault } = channel);
  channel = undefined;
  let first1;
  _slicedToArray = undefined;
  let first2;
  let closure_7;
  c8 = undefined;
  c9 = undefined;
  let canSendStageStartNotification;
  let first3;
  closure_12 = undefined;
  constants = undefined;
  let obj5;
  let ref;
  c16 = undefined;
  let onConfirmPress = function _handleSave() {
    let obj = _asyncToGenerator(async function() {
      let closure_2;
      let obj7;
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let closure_1;
          let closure_0;
          let aPIError;
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
              closure_1 = tmp;
              closure_0 = tmp4;
              aPIError = undefined;
              if ("" !== first1) {
                if (null != first2) {
                  _undefined(true);
                  _undefined2(null);
                  const obj4 = tmp61(c3[29]);
                  const result = obj4.dismissGlobalKeyboard();
                  c3 = 1;
                  if (null != memo) {
                    c4 = 3;
                    c5 = 1;
                    const obj8 = { value: obj7.editStage(channel, first1, first2), done: false };
                    obj7 = tmp61(c3[30]);
                    return obj8;
                  } else {
                    obj5 = tmp61(c3[30]);
                    c4 = 2;
                    c5 = 1;
                    const obj9 = { value: obj5.startStage(channel, first1, first2, first3), done: false };
                    return obj9;
                  }
                }
              }
            }
          } else if (1 === c4) {
            c3 = 0;
            closure_1 = tmp61;
            const self = this;
            const self2 = this;
            aPIError = new closure_0(c3[32]).APIError(closure_1);
            closure_129_9(aPIError);
            closure_129_8(false);
          } else {
            if (2 === c4) {
              if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 0;
                c5 = 3;
                const obj10 = { value, done: true };
                return obj10;
              } else {
                const tmp5 = closure_129_10 && closure_129_13;
                if (tmp5) {
                  const obj2 = tmp61(c3[31]);
                  obj2.hideHotspot(closure_0(c3[20]).HotspotLocations.LIVE_STAGE_NOTIFICATION_BADGE);
                }
              }
            } else if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              c5 = 3;
              const obj = { value, done: true };
              return obj;
            }
            closure_129_8(false);
            closure_129_9(null);
            if (null != closure_129_1) {
              closure_129_1();
            } else {
              onConfirmPress();
            }
            if (closure_129_0 != null) {
              tmp24(closure_129_2);
            }
            c3 = 0;
          }
          c5 = 3;
          return { value: "IconComponent", done: null };
        } catch (tmp61) {
          if (0 === c3) {
            c5 = 3;
            throw tmp61;
          } else {
            c4 = 1;
          }
        }
      }
    });
    return obj(...arguments);
  };
  channel = channel.channel;
  const tmp = c16();
  onConfirmPress = first2;
  const imperativeHandle = first2.useImperativeHandle(arg1, () => {
    let onPress;
    let obj = {
      renderRightButton: function RightButton() {
        let intl;
        const obj = { style: c16().closeButtonContainer, accessibilityRole: "button", accessibilityLabel: intl.string(require("intl").t.cpT0Cq), source: require("AssetRegistry"), onPress, disableColor: true };
        const tmp2 = require("TouchableHitBox");
        intl = require("intl").intl;
        return obj5(tmp2, obj);
      }
    };
    return obj;
  });
  const tmp3 = _slicedToArray;
  [channel, tmp6] = first2.useState(channel);
  const items = [channel.id];
  const memo = first2.useMemo(() => StageInstanceStore.getStageInstanceByChannel(first.id), items);
  let str;
  const useState = first2.useState;
  if (memo != null) {
    str = memo.topic;
  }
  if (str == null) {
    str = "";
  }
  const tmp3Result = tmp3(useState(str), 2);
  first1 = tmp3Result[0];
  _slicedToArray = tmp10;
  const GUILD_ONLY = constants.GUILD_ONLY;
  let privacy_level;
  const useState2 = onConfirmPress.useState;
  if (memo != null) {
    privacy_level = memo.privacy_level;
  }
  if (privacy_level == null) {
    privacy_level = GUILD_ONLY;
  }
  const tmp3Result5 = tmp3(useState2(privacy_level), 2);
  first2 = tmp3Result5[0];
  closure_7 = tmp3Result5[1];
  [tmp15, c8] = tmp3(onConfirmPress.useState(false), 2);
  tmp3(onConfirmPress.useState(false), 2);
  [obj2, c9] = tmp3(onConfirmPress.useState(null), 2);
  tmp3(onConfirmPress.useState(null), 2);
  let obj3 = require("LiveStageNotificationsUtils");
  canSendStageStartNotification = obj3.useCanSendStageStartNotification(channel);
  let obj4 = require("LiveStageNotificationsUtils");
  let tmp21 = null == memo;
  const defaultSendStartStageNotificationToggle = obj4.useDefaultSendStartStageNotificationToggle(channel);
  if (tmp21) {
    tmp21 = canSendStageStartNotification;
  }
  canSendStageStartNotification = tmp21;
  let tmp22 = tmp21;
  const useState3 = onConfirmPress.useState;
  if (tmp21) {
    tmp22 = defaultSendStartStageNotificationToggle;
  }
  const tmp3Result8 = tmp3(useState3(tmp22), 2);
  first3 = tmp3Result8[0];
  closure_12 = tmp3Result8[1];
  const useStateFromStores = require("get initialized").useStateFromStores;
  const items1 = [];
  require("get initialized");
  items1[0] = require("HotspotStore").HotspotStore;
  constants = useStateFromStores(items1, () => {
    const HotspotStore = require("HotspotStore").HotspotStore;
    return HotspotStore.hasHotspot(require("HotspotStore").HotspotLocations.LIVE_STAGE_NOTIFICATION_BADGE);
  });
  obj5 = { stageInstance: memo, privacyDefault: GUILD_ONLY };
  ref = onConfirmPress.useRef(obj5);
  const effect = onConfirmPress.useEffect(() => {
    ref.current = obj5;
  });
  const items2 = [channel.id];
  const effect1 = onConfirmPress.useEffect(() => {
    const current = ref.current;
    const stageInstance = current.stageInstance;
    let privacy_level;
    const privacyDefault = current.privacyDefault;
    if (stageInstance != null) {
      privacy_level = stageInstance.privacy_level;
    }
    if (privacy_level == null) {
      privacy_level = privacyDefault;
    }
    closure_7(privacy_level);
    if (null != stageInstance) {
      closure_5(stageInstance.topic);
    }
  }, items2);
  ({ helpText, publicDisabled: c16 } = require("usePrivacyLevelHelpText")(channel, memo, first2));
  const tmp29 = require("usePrivacyLevelHelpText")(channel, memo, first2);
  require("useMountEffect")(() => {
    let id;
    const track = AnalyticsUtilsDefault.track;
    const START_STAGE_OPENED = AnalyticEvents.START_STAGE_OPENED;
    AnalyticsUtilsDefault;
    if (memo != null) {
      id = memo.id;
    }
    const obj = { stage_instance_id: id, can_start_public_stage: !c16, guild_id: first.guild_id };
    track(START_STAGE_OPENED, obj);
  });
  let obj6 = { style: tmp.header, children: items3 };
  items3 = [obj5(closure_19, { guild }), , ];
  let obj7 = { style: tmp.headerTitle, accessibilityRole: "header", variant: "text-lg/semibold", color: "mobile-text-heading-primary", children: stringResult };
  const Text = require("Text/Text").Text;
  if (null == memo) {
    const intl2 = require("intl").intl;
    stringResult = intl2.string(require("intl").t.DDF0cJ);
  } else {
    let intl = require("intl").intl;
    stringResult = intl.string(require("intl").t["5BKP4y"]);
  }
  items3[1] = obj5(Text, obj7);
  let obj8 = { style: tmp.headerSubtitle, variant: "text-sm/medium", color: "text-default", children: stringResult1 };
  const Text2 = require("Text/Text").Text;
  if (null == memo) {
    const intl4 = require("intl").intl;
    stringResult1 = intl4.string(require("intl").t.bqQIwa);
  } else {
    const intl3 = require("intl").intl;
    stringResult1 = intl3.string(require("intl").t["I+9bLx"]);
  }
  items3[2] = obj5(Text2, obj8);
  let obj9 = { keyboardShouldPersistTaps: "handled", showsVerticalScrollIndicator: false, alwaysBounceVertical: false, style: tmp.container, contentContainerStyle: items4, children: items5 };
  items4 = [tmp.contentContainer, ];
  let contentTopSpacing = null;
  const tmp31Result = ref(closure_7, obj6);
  const tmp37 = c8;
  if (null != guild) {
    contentTopSpacing = tmp.contentTopSpacing;
  }
  items4[1] = contentTopSpacing;
  items5 = [tmp31Result, , , , , , , , ];
  let obj10 = { children: intl5.string(require("intl").t["5FPBOB"]) };
  const tmp28Result = require("FormHeader");
  intl5 = require("intl").intl;
  items5[1] = obj5(tmp28Result, obj10);
  const obj11 = { style: tmp.textInput, showBorder: false, showTopContainer: false, multiline: false, maxLength: canSendStageStartNotification, value: first1, placeholder: intl6.string(require("intl").t.ZwWruY), onChange: tmp3Result[1], autoFocus: true, clearButtonVisibility: require("native").ClearButtonVisibility.WITH_CONTENT };
  const FormInput = require("Form").FormInput;
  intl6 = require("intl").intl;
  items5[2] = obj5(FormInput, obj11);
  let tmp33Result = null != helpText;
  if (tmp33Result) {
    const obj12 = { style: tmp.optionExplanation, variant: "text-xs/medium", color: "text-default", children: helpText };
    tmp33Result = tmp33(require("Text/Text").Text, obj12);
  }
  items5[3] = tmp33Result;
  let tmp33Result5 = null != guild;
  if (tmp33Result5) {
    const obj13 = { guild, channel, onChangeChannel: tmp6 };
    tmp33Result5 = tmp33(require("GuildStageChannelSelection"), obj13);
  }
  items5[4] = tmp33Result5;
  let tmp33Result6 = null;
  if (tmp21) {
    const obj14 = {
      sendStartNotification: first3,
      onToggle: function handleSetSendStartNotification() {
          const obj = KeyboardManagerUtilsAll;
          const result = obj.dismissGlobalKeyboard();
          closure_12(!first3);
        }
    };
    tmp33Result6 = tmp33(closure_20, obj14);
  }
  items5[5] = tmp33Result6;
  const obj15 = { onConfirmPress, style: tmp.ageVerificationNotice, channelId: channel.id };
  items5[6] = obj5(require("StageChannelAgeVerificationNotice"), obj15);
  let tmp33Result7 = null;
  if (null != obj2) {
    const obj16 = { style: tmp.error, variant: "text-xs/medium", color: "text-feedback-critical", children: obj2.getAnyErrorMessage() };
    const Text3 = require("Text/Text").Text;
    tmp33Result7 = tmp33(Text3, obj16);
  }
  items5[7] = tmp33Result7;
  const obj17 = { style: tmp.startButton, children: obj5(Button, obj18) };
  Button = require("components/Button/Button").Button;
  if (null == memo) {
    const intl8 = require("intl").intl;
    stringResult2 = intl8.string(require("intl").t.s8mM8A);
  } else {
    const intl7 = require("intl").intl;
    stringResult2 = intl7.string(require("intl").t.K344S7);
  }
  obj18 = {
    text: stringResult2,
    onPress: function handleSave() {
      return obj(...arguments);
    },
    disabled: "" === first1 || null == first2,
    loading: tmp15
  };
  items5[8] = obj5(closure_7, obj17);
  const tmp31Result2 = ref(tmp37, obj9);
  let tmp33Result8 = tmp31Result2;
  if (null == guild) {
    const rect = { top: true, bottom: true, style: tmp.container, children: ref(tmp28Result2, obj19) };
    const SafeAreaPaddingView = require("common/SafeAreaView").SafeAreaPaddingView;
    obj19 = { style: tmp.keyboardAwareView, children: items6 };
    items6 = [, ];
    const obj20 = { guild };
    tmp28Result2 = require("KeyboardAwareView");
    items6[0] = obj5(closure_18, obj20);
    items6[1] = tmp31Result2;
    tmp33Result8 = tmp33(SafeAreaPaddingView, rect);
  }
  return tmp33Result8;
});
let result = size.fileFinishedImporting("modules/stage_channels/native/modals/StartStageChannelModal.tsx");

export default forwardRefResult;
export const NotificationToggle = tmp6;