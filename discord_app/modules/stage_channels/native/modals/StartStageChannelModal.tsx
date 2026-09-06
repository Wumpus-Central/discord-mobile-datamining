// discord_app/modules/stage_channels/native/modals/StartStageChannelModal.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import native from "../../../../design/void/native.tsx";
import AnalyticsUtilsDefault from "../../../../utils/AnalyticsUtils.tsx";
import KeyboardManagerUtilsAll from "../../../../utils/native/KeyboardManagerUtils.tsx";
import ModalActionCreatorsDefault from "../../../../actions/ModalActionCreators.tsx";
import Pressables from "../../../../design/void/Pressables/native/Pressables.tsx";
import GuildIcon from "../../../guild/native/GuildIcon.tsx";
import _modDef7089 from "../../../../../_runtime/metro/07089__.js";
import HotspotStore2 from "../../../hotspot/index.tsx";
import StageSparkleDefault from "../components/StageSparkle.tsx";
import Form from "../../../../design/void/Form/native/index.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import StageInstanceStore from "../../StageInstanceStore.tsx";

const GuildIconDefault = GuildIcon;

require = fn;
function closeModal() {
  ModalActionCreatorsDefault.popWithKey(closure_1_11);
}
function NavigationBar(guild) {
  let tmp2 = null;
  if (null == guild.guild) {
    let obj = { style: null, children: null };
    const items = [,];
    ({ contentContainer: arr[0], contentTopSpacing: arr[1] } = tmp);
    obj.style = items;
    obj = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, children: null };
    const intl = util.intl;
    obj.accessibilityLabel = intl.string(util.t.cpT0Cq);
    obj.onPress = closeModal;
    obj = { source: _modDef7089 };
    obj.children = closure_1_14(native.Icon, obj);
    obj.children = closure_1_14(Pressables.PressableOpacity, obj);
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
    obj = { DEPRECATED_style: tmp.notificationToggle, label: null, onPress: null, trailing: null };
    tmp7 = View;
    obj1 = { style: tmp.label, children: null };
    tmp6 = jsxs;
    obj2 = { text: null };
    intl = closure_0(closure_3[13]).intl;
    obj2.text = intl.string(closure_0(closure_3[13]).t.BYJgew);
    items1 = [,];
    items1[0] = jsx(closure_0(closure_3[20]).FormLabel, obj2);
    tmp5Result = null;
    if (stateFromStores) {
      obj3 = { style: null, children: null };
      obj3.style = tmp.pill;
      obj4 = { style: null, variant: "text-xxs/bold", color: "text-overlay-light", children: null };
      obj4.style = tmp.pillLabel;
      intl2 = tmp2(tmp3[13]).intl;
      obj4.children = intl2.string(tmp2(tmp3[13]).t.y2b7CA);
      obj3.children = tmp5(tmp2(tmp3[21]).Text, obj4);
      tmp5Result = tmp5(tmp7, obj3);
    }
    items1[1] = tmp5Result;
    obj1.children = items1;
    obj.label = tmp6(tmp7, obj1);
    obj.onPress = onToggle;
    obj.trailing = tmp5(tmp2(tmp3[14]).Checkbox, { selected: sendStartNotification });
    return tmp5(closure_0(closure_3[20]).FormRow, obj);
  }
}
get_ActivityIndicator = fn(17);
({ View: closure_7, ScrollView: closure_8 } = get_ActivityIndicator);
const StageChannelsConstants = fn(5414);
({ MAX_STAGE_TOPIC_LENGTH: c10, START_STAGE_CHANNEL_EVENT_MODAL_KEY: closure_11 } = StageChannelsConstants);
const AnalyticEvents = fn(1074).AnalyticEvents;
let constants = fn(1963).GuildScheduledEventPrivacyLevel;
const jsxProd = fn(21);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
fn(4560);
let obj = {
  keyboardAwareView: { flex: 1 },
  closeButtonContainer: { right: 10 },
  container: null,
  contentContainer: null,
  contentTopSpacing: null,
  header: null,
  headerTitle: null,
  headerSubtitle: null,
  textInput: null,
  startButton: null,
  error: null,
  optionExplanation: null,
  guildIcon: null,
  label: null,
  pill: null,
  pillLabel: null,
  notificationToggle: null,
  ageVerificationNotice: null,
};
obj = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj.container = obj;
obj.contentContainer = { paddingHorizontal: 16 };
obj.contentTopSpacing = { paddingTop: 16 };
obj.header = { alignItems: "center", paddingBottom: 24 };
obj.headerTitle = { marginTop: 16, marginBottom: 8 };
obj.headerSubtitle = { textAlign: "center" };
const createStyles = {
  padding: 12,
  width: "100%",
  borderRadius: nativeDefault.radii.xs,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
  marginBottom: 16,
};
obj.textInput = createStyles;
obj.startButton = { marginTop: 16 };
obj.error = { paddingTop: 8 };
obj.optionExplanation = { lineHeight: 16, paddingTop: 8 };
obj.guildIcon = { borderRadius: nativeDefault.radii.md };
obj.label = { display: "flex", alignItems: "center", flexDirection: "row" };
let obj2 = { borderRadius: nativeDefault.radii.md };
obj.pill = {
  backgroundColor: nativeDefault.colors.BACKGROUND_BRAND,
  paddingHorizontal: 4,
  paddingVertical: 2,
  marginStart: 8,
  borderRadius: nativeDefault.radii.xs,
};
obj.pillLabel = { textTransform: "uppercase" };
let obj3 = {
  backgroundColor: nativeDefault.colors.BACKGROUND_BRAND,
  paddingHorizontal: 4,
  paddingVertical: 2,
  marginStart: 8,
  borderRadius: nativeDefault.radii.xs,
};
obj.notificationToggle = {
  marginTop: 16,
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  borderRadius: nativeDefault.radii.sm,
};
let obj4 = {
  marginTop: 16,
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  borderRadius: nativeDefault.radii.sm,
};
obj.ageVerificationNotice = { marginBottom: nativeDefault.space.PX_16 };
const value = createStyles.createStyles(obj);
let obj5 = { marginBottom: nativeDefault.space.PX_16 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/stage_channels/native/modals/StartStageChannelModal.tsx");

export default noop.forwardRef((channel, ref) => {
  ({ guild, onStageStarted: require, onClose: importDefault } = channel);
  channel = undefined;
  let first1;
  _slicedToArray = undefined;
  let first2;
  closure_7 = undefined;
  c8 = undefined;
  c9 = undefined;
  let canSendStageStartNotification;
  let first3;
  closure_12 = undefined;
  constants = undefined;
  ref = undefined;
  c16 = undefined;
  onConfirmPress = async function _handleSave(arg0, value) {
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj = { value, done: true };
        return obj;
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
            obj = { value, done: true };
            return obj;
          } else {
            closure_1 = tmp3;
            closure_0 = tmp7;
            closure_128_0 = undefined;
            if ("" !== first1) {
              if (null != first2) {
                React6(true);
                StageInstanceStore(null);
                let obj3 = tmp66(1874);
                const result = obj3.dismissGlobalKeyboard();
                dependencyMap = 1;
                if (null != memo) {
                  c4 = 3;
                  c5 = 1;
                  let obj1 = { value: tmp66(8398).editStage(channel, tmp75, tmp47), done: false };
                  return obj1;
                } else {
                  const obj5 = tmp66(8398);
                  c4 = 2;
                  c5 = 1;
                  const obj2 = { value: obj5.startStage(channel, tmp75, tmp47, first3), done: false };
                  return obj2;
                }
              }
            }
          }
        } else {
          if (1 === tmp7) {
            dependencyMap = 0;
            closure_128_1 = tmp66;
            const aPIError = new closure_0(4461).APIError(closure_128_1);
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
                  obj1 = tmp66(7216);
                  obj1.hideHotspot(closure_0(7213).HotspotLocations.LIVE_STAGE_NOTIFICATION_BADGE);
                }
              }
            } else if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              dependencyMap = 0;
              c5 = 3;
              obj = { value, done: true };
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
          obj3 = { value, done: true };
          return obj3;
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
  let current = first2;
  const imperativeHandle = first2.useImperativeHandle(ref, () => ({
    renderRightButton: function RightButton() {
      const obj = {
        style: c16().closeButtonContainer,
        accessibilityRole: "button",
        accessibilityLabel: null,
        source: null,
        onPress: null,
        disableColor: true,
      };
      const tmp = c16();
      const intl = require("util").intl;
      obj.accessibilityLabel = intl.string(require("util").t.cpT0Cq);
      obj.source = require("../../../../../_runtime/metro/07089__.js");
      obj.onPress = onPress;
      return obj(require("TouchableHitBox"), obj);
    },
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
  let tmp3Result = tmp3(first2.useState(str), 2);
  first1 = tmp3Result[0];
  _slicedToArray = tmp9;
  const GUILD_ONLY = constants.GUILD_ONLY;
  let privacy_level;
  if (memo != null) {
    privacy_level = memo.privacy_level;
  }
  if (privacy_level == null) {
    privacy_level = GUILD_ONLY;
  }
  tmp3Result = tmp3(current.useState(privacy_level), 2);
  first2 = tmp3Result[0];
  closure_7 = tmp3Result[1];
  [tmp14, c8] = _slicedToArray(current.useState(false), 2);
  const tmp3Result1 = _slicedToArray(current.useState(false), 2);
  [obj2, c9] = _slicedToArray(current.useState(null), 2);
  obj2 = require("LiveStageNotificationsUtils");
  canSendStageStartNotification = obj2.useCanSendStageStartNotification(channel);
  let obj3 = require("LiveStageNotificationsUtils");
  let tmp20 = null == memo;
  const defaultSendStartStageNotificationToggle = obj3.useDefaultSendStartStageNotificationToggle(channel);
  if (tmp20) {
    tmp20 = canSendStageStartNotification;
  }
  canSendStageStartNotification = tmp20;
  let tmp21 = tmp20;
  if (tmp20) {
    tmp21 = defaultSendStartStageNotificationToggle;
  }
  const tmp3Result3 = _slicedToArray(current.useState(tmp21), 2);
  first3 = tmp3Result3[0];
  closure_12 = tmp3Result3[1];
  const tmp3Result2 = _slicedToArray(current.useState(null), 2);
  const items1 = [require("HotspotStore").HotspotStore];
  constants = require("initialize").useStateFromStores(items1, () => {
    const HotspotStore = require("HotspotStore").HotspotStore;
    return HotspotStore.hasHotspot(require("HotspotStore").HotspotLocations.LIVE_STAGE_NOTIFICATION_BADGE);
  });
  current = { stageInstance: memo, privacyDefault: GUILD_ONLY };
  ref = current.useRef(current);
  const effect = current.useEffect(() => {
    closure_15.current = current;
  });
  const items2 = [channel.id];
  const effect1 = current.useEffect(() => {
    current = ref.current;
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
    let obj = AnalyticsUtilsDefault;
    let id;
    if (memo != null) {
      id = memo.id;
    }
    obj = { stage_instance_id: id, can_start_public_stage: !c16, guild_id: first.guild_id };
    obj.track(AnalyticEvents.START_STAGE_OPENED, obj);
  });
  current = { style: tmp.header, children: null };
  const items3 = [current(HeaderIcon, { guild }), ,];
  let obj1 = {
    style: tmp.headerTitle,
    accessibilityRole: "header",
    variant: "text-lg/semibold",
    color: "mobile-text-heading-primary",
    children: null,
  };
  if (null == memo) {
    const intl2 = tmp16(tmp17[13]).intl;
    let stringResult = intl2.string(tmp16(tmp17[13]).t.DDF0cJ);
  } else {
    let intl = tmp16(tmp17[13]).intl;
    stringResult = intl.string(tmp16(tmp17[13]).t["5BKP4y"]);
  }
  obj1.children = stringResult;
  items3[1] = current(require("Text/Text").Text, obj1);
  obj2 = { style: tmp.headerSubtitle, variant: "text-sm/medium", color: "text-default", children: null };
  if (null == memo) {
    const intl4 = tmp16(tmp17[13]).intl;
    let stringResult1 = intl4.string(tmp16(tmp17[13]).t.bqQIwa);
  } else {
    const intl3 = tmp16(tmp17[13]).intl;
    stringResult1 = intl3.string(tmp16(tmp17[13]).t["I+9bLx"]);
  }
  obj2.children = stringResult1;
  items3[2] = current(require("Text/Text").Text, obj2);
  current.children = items3;
  obj3 = {
    keyboardShouldPersistTaps: "handled",
    showsVerticalScrollIndicator: false,
    alwaysBounceVertical: false,
    style: tmp.container,
    contentContainerStyle: null,
    children: null,
  };
  const items4 = [tmp.contentContainer];
  let contentTopSpacing = null;
  let tmp29Result = tmp29(tmp30, current);
  if (null != guild) {
    contentTopSpacing = tmp.contentTopSpacing;
  }
  items4[1] = contentTopSpacing;
  obj3.contentContainerStyle = items4;
  const items5 = [tmp29Result, , , , , , , ,];
  const obj4 = { children: null };
  let tmp26Result = tmp26(tmp17[31]);
  const intl5 = tmp16(tmp17[13]).intl;
  obj4.children = intl5.string(require("util").t["5FPBOB"]);
  items5[1] = current(tmp26Result, obj4);
  let obj5 = {
    style: tmp.textInput,
    showBorder: false,
    showTopContainer: false,
    multiline: false,
    maxLength: canSendStageStartNotification,
    value: first1,
    placeholder: null,
    onChange: null,
    autoFocus: true,
    clearButtonVisibility: null,
  };
  const intl6 = tmp16(tmp17[13]).intl;
  obj5.placeholder = intl6.string(require("util").t.ZwWruY);
  obj5.onChange = tmp3Result[1];
  obj5.clearButtonVisibility = require("native").ClearButtonVisibility.WITH_CONTENT;
  items5[2] = current(require("Form").FormInput, obj5);
  let tmp31Result = null != helpText;
  if (tmp31Result) {
    const obj6 = { style: tmp.optionExplanation, variant: "text-xs/medium", color: "text-default", children: helpText };
    tmp31Result = tmp31(tmp16(tmp17[21]).Text, obj6);
  }
  items5[3] = tmp31Result;
  tmp31Result = null != guild;
  if (tmp31Result) {
    const obj7 = { guild, channel, onChangeChannel: tmp4[1] };
    tmp31Result = tmp31(tmp26(tmp17[32]), obj7);
  }
  items5[4] = tmp31Result;
  let tmp31Result1 = null;
  if (tmp20) {
    const obj8 = {
      sendStartNotification: first3,
      onToggle: function handleSetSendStartNotification() {
        const result = KeyboardManagerUtilsAll.dismissGlobalKeyboard();
        closure_12(!first3);
      },
    };
    tmp31Result1 = tmp31(NotificationToggle, obj8);
  }
  items5[5] = tmp31Result1;
  items5[6] = current(require("StageChannelAgeVerificationNotice"), {
    onConfirmPress,
    style: tmp.ageVerificationNotice,
    channelId: channel.id,
  });
  let tmp31Result2 = null;
  if (null != obj1) {
    const obj10 = {
      style: tmp.error,
      variant: "text-xs/medium",
      color: "text-feedback-critical",
      children: obj1.getAnyErrorMessage(),
    };
    tmp31Result2 = tmp31(tmp16(tmp17[21]).Text, obj10);
  }
  items5[7] = tmp31Result2;
  const obj11 = { style: tmp.startButton, children: null };
  if (null == memo) {
    const intl8 = tmp16(tmp17[13]).intl;
    let stringResult2 = intl8.string(tmp16(tmp17[13]).t.s8mM8A);
  } else {
    const intl7 = tmp16(tmp17[13]).intl;
    stringResult2 = intl7.string(tmp16(tmp17[13]).t.K344S7);
  }
  obj11.children = current(require("components/Button/Button").Button, {
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
    loading: tmp14,
  });
  items5[8] = current(closure_7, obj11);
  obj3.children = items5;
  tmp29Result = tmp29(c8, obj3);
  let tmp31Result3 = tmp29Result;
  if (null == guild) {
    const rect = { top: true, bottom: true, style: tmp.container, children: null };
    const obj13 = { style: tmp.keyboardAwareView, children: null };
    const obj14 = { guild };
    tmp26Result = tmp26(tmp17[36]);
    const items6 = [tmp31(NavigationBar, obj14), tmp29Result];
    obj13.children = items6;
    rect.children = tmp29(tmp26Result, obj13);
    tmp31Result3 = tmp31(tmp16(tmp17[35]).SafeAreaPaddingView, rect);
  }
  return tmp31Result3;
});
export { NotificationToggle };
