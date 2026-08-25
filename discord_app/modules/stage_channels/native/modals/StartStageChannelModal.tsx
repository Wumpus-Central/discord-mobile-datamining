// === Module 9203: closeModal ===

// Module 9203 (closeModal)
import initialize from "initialize" /* 589 */;
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import Button from "Button" /* 1297 */;
import _modDef4611 from "module_4611" /* 4611 */;
import PressableBase from "PressableBase" /* 4949 */;
import GuildIconSizes from "GuildIconSizes" /* 5885 */;
import GuildIconSizesDefault from "GuildIconSizes" /* 5885 */;
import HotspotStore2 from "HotspotStore" /* 5941 */;
import StageSparkleInnerDefault from "StageSparkleInner" /* 7932 */;
import Form from "Form" /* 8118 */;
import registerAssetDefault from "registerAsset" /* 8211 */;
import closure_4 from "asyncGeneratorStep" /* 5 */;
import closure_5 from "_slicedToArray" /* 32 */;
import importAllResult from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import closure_9 from "handleStageInstanceCreateOrUpdate" /* 1396 */;
import MAX_STAGE_TOPIC_LENGTH from "MAX_STAGE_TOPIC_LENGTH" /* 5239 */;
import { AnalyticEvents } from "ME" /* 676 */;
import { GuildScheduledEventPrivacyLevel as closure_13 } from "GUILD_EVENT_MAX_NAME_LENGTH" /* 1397 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4380 */;

require = arg1;
function closeModal() {
  _modDef4611.popWithKey(closure_11);
}
function NavigationBar(guild) {
  let tmp2 = null;
  if (null == guild.guild) {
    let obj = { style: null, children: null };
    const items = [, ];
    ({ contentContainer: arr[0], contentTopSpacing: arr[1] } = tmp);
    obj[0] = items;
    obj = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, children: null };
    const intl = getSystemLocale.intl;
    obj[1] = intl.string(getSystemLocale.t.cpT0Cq);
    obj[2] = closeModal;
    obj = { source: null };
    obj[0] = registerAssetDefault;
    obj[3] = callback2(Button.Icon, obj);
    obj[1] = callback2(PressableBase.PressableOpacity, obj);
    tmp2 = callback2(closure_7, obj);
  }
  return tmp2;
}
function HeaderIcon(guild) {
  guild = guild.guild;
  if (null == guild) {
    let tmp7 = callback2(StageSparkleInnerDefault, {});
  } else {
    const obj = { style: null, size: null, guild: null };
    obj[0] = tmp.guildIcon;
    obj[1] = GuildIconSizes.GuildIconSizes.LARGE;
    obj[2] = guild;
    tmp7 = callback2(GuildIconSizesDefault, obj);
    const tmp5 = GuildIconSizesDefault;
  }
  return tmp7;
}
class NotificationToggle {
  constructor(arg0) {
    ({ sendStartNotification, onToggle } = global);
    tmp = closure_16();
    tmp2 = closure_0;
    tmp3 = closure_3;
    obj = require("initialize");
    items = [];
    items[0] = require("HotspotStore").HotspotStore;
    tmp5 = jsx;
    stateFromStores = obj.useStateFromStores(items, () => {
      const HotspotStore = callback(5941).HotspotStore;
      return HotspotStore.hasHotspot(callback(5941).HotspotLocations.LIVE_STAGE_NOTIFICATION_BADGE);
    });
    obj = { DEPRECATED_style: tmp.notificationToggle, label: null, onPress: null, trailing: null };
    tmp7 = View;
    obj1 = { style: tmp.label, children: null };
    tmp6 = jsxs;
    obj2 = { text: null };
    intl = require("getSystemLocale").intl;
    obj2[0] = intl.string(require("getSystemLocale").t.BYJgew);
    items1 = [, ];
    items1[0] = jsx(require("Form").FormLabel, obj2);
    tmp5Result = null;
    if (stateFromStores) {
      obj3 = { style: null, children: null };
      obj3[0] = tmp.pill;
      obj4 = { style: null, variant: "text-xxs/bold", color: "text-overlay-light", children: null };
      obj4[0] = tmp.pillLabel;
      intl2 = require("getSystemLocale").intl;
      obj4[3] = intl2.string(require("getSystemLocale").t.y2b7CA);
      obj3[1] = tmp5(require("Text").Text, obj4);
      tmp5Result = tmp5(tmp7, obj3);
    }
    items1[1] = tmp5Result;
    obj1[1] = items1;
    obj[1] = tmp6(tmp7, obj1);
    obj[2] = onToggle;
    obj[3] = tmp5(require("Button").Checkbox, { selected: sendStartNotification });
    return tmp5(require("Form").FormRow, obj);
  }
}
({ View: error, ScrollView: closure_8 } = get_ActivityIndicator);
({ MAX_STAGE_TOPIC_LENGTH: c10, START_STAGE_CHANNEL_EVENT_MODAL_KEY: unpackModuleId } = MAX_STAGE_TOPIC_LENGTH);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
let obj = { keyboardAwareView: { flex: 1 }, closeButtonContainer: { right: 10 }, container: null, contentContainer: null, contentTopSpacing: null, header: null, headerTitle: null, headerSubtitle: null, textInput: null, startButton: null, error: null, optionExplanation: null, guildIcon: null, label: null, pill: null, pillLabel: null, notificationToggle: null, ageVerificationNotice: null };
obj = { flex: 1, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW };
obj[2] = obj;
obj[3] = { paddingHorizontal: 16 };
obj[4] = { paddingTop: 16 };
obj[5] = { alignItems: "center", paddingBottom: 24 };
obj[6] = { marginTop: 16, marginBottom: 8 };
obj[7] = { textAlign: "center" };
createCacheKey = { padding: 12, width: "100%", borderRadius: ThemesDefault.radii.xs, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWEST, marginBottom: 16 };
obj[8] = createCacheKey;
obj[9] = { marginTop: 16 };
obj[10] = { paddingTop: 8 };
obj[11] = { lineHeight: 16, paddingTop: 8 };
obj[12] = { borderRadius: ThemesDefault.radii.md };
obj[13] = { display: "flex", alignItems: "center", flexDirection: "row" };
let obj2 = { borderRadius: ThemesDefault.radii.md };
obj[14] = { backgroundColor: ThemesDefault.colors.BACKGROUND_BRAND, paddingHorizontal: 4, paddingVertical: 2, marginStart: 8, borderRadius: ThemesDefault.radii.xs };
obj[15] = { textTransform: "uppercase" };
let obj3 = { backgroundColor: ThemesDefault.colors.BACKGROUND_BRAND, paddingHorizontal: 4, paddingVertical: 2, marginStart: 8, borderRadius: ThemesDefault.radii.xs };
obj[16] = { marginTop: 16, backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: ThemesDefault.radii.sm };
let obj4 = { marginTop: 16, backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: ThemesDefault.radii.sm };
obj[17] = { marginBottom: ThemesDefault.space.PX_16 };
let closure_16 = createCacheKey.createStyles(obj);
let obj5 = { marginBottom: ThemesDefault.space.PX_16 };
const forwardRefResult = importAllResult.forwardRef((channel, ref) => {
  ({ guild, onStageStarted: require, onClose: importDefault } = channel);
  let first;
  let memo;
  let first1;
  let callback;
  let first2;
  closure_7 = undefined;
  c8 = undefined;
  c9 = undefined;
  let canSendStageStartNotification;
  let first3;
  closure_12 = undefined;
  let constants;
  let obj;
  closure_15 = undefined;
  let callback3;
  function _handleSave() {
    const self = this;
    const tmp = first1(function*() {
      if (c5 === 2) {
        c5 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c5 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_1 = tmp3;
              let aPIError = tmp7;
              aPIError = undefined;
              if ("" !== c4) {
                if (null != closure_1_6) {
                  closure_1_8(true);
                  closure_1_9(null);
                  let obj3 = closure_1_2(1892);
                  const result = obj3.dismissGlobalKeyboard();
                  dependencyMap = 1;
                  if (null != dependencyMap) {
                    c4 = 3;
                    c5 = 1;
                    obj1 = { value: null, done: false };
                    obj1[0] = closure_1_2(7923).editStage(closure_1_2, tmp76, tmp47);
                    return obj1;
                  } else {
                    const obj5 = closure_1_2(7923);
                    c4 = 2;
                    c5 = 1;
                    const obj2 = { value: null, done: false };
                    obj2[0] = obj5.startStage(closure_1_2, tmp76, tmp47, closure_1_11);
                    return obj2;
                  }
                }
              }
            }
          } else {
            if (1 === tmp7) {
              dependencyMap = 0;
              closure_1 = closure_2;
              aPIError = new closure_1_0(4278).APIError(closure_1);
              closure_1_9(aPIError);
              closure_1_8(false);
            } else {
              if (2 === tmp7) {
                if (arg0 === 1) {
                  c5 = 3;
                  throw arg1;
                } else if (arg0 !== 2) {
                  let tmp8 = closure_10;
                  if (closure_10) {
                    tmp8 = closure_13;
                  }
                  if (tmp8) {
                    obj1 = closure_1_2(5944);
                    obj1.hideHotspot(closure_1_0(5941).HotspotLocations.LIVE_STAGE_NOTIFICATION_BADGE);
                  }
                }
              } else if (arg0 === 1) {
                c5 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                dependencyMap = 0;
                c5 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              }
              closure_1_8(false);
              closure_1_9(null);
              if (null != closure_1_1) {
                closure_1_1();
              } else {
                closure_1_17();
              }
              if (closure_1_0 != null) {
                tmp27(closure_1_2);
              }
              dependencyMap = 0;
            }
            dependencyMap = 0;
            c5 = 3;
            obj3 = { value: null, done: true };
            obj3[0] = arg1;
            return obj3;
          }
          c5 = 3;
        } catch (tmp66) {
          closure_2 = tmp66;
          if (tmp4 === dependencyMap) {
            c5 = tmp2;
            throw tmp66;
          } else {
            c4 = tmp;
          }
        }
      }
    });
    closure_17 = tmp;
    const apply = tmp.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  let tmp = callback3();
  obj = first2;
  const imperativeHandle = first2.useImperativeHandle(ref, () => ({
    renderRightButton: function RightButton() {
      obj = { style: closure_1_16().closeButtonContainer, accessibilityRole: "button", accessibilityLabel: null, source: null, onPress: null, disableColor: true };
      const tmp = closure_1_16();
      const intl = closure_1_0(closure_1_3[13]).intl;
      obj[2] = intl.string(closure_1_0(closure_1_3[13]).t.cpT0Cq);
      obj[3] = closure_1_1(closure_1_3[15]);
      obj[4] = closure_1;
      return closure_1_14(closure_1_1(closure_1_3[22]), obj);
    }
  }));
  const tmp4 = callback(first2.useState(channel.channel), 2);
  first = tmp4[0];
  const items = [first.id];
  memo = first2.useMemo(() => _undefined.getStageInstanceByChannel(first.id), items);
  let str;
  if (memo != null) {
    str = memo.topic;
  }
  if (str == null) {
    str = "";
  }
  let tmp3Result = tmp3(first2.useState(str), 2);
  first1 = tmp3Result[0];
  callback = tmp9;
  const GUILD_ONLY = constants.GUILD_ONLY;
  let privacy_level;
  if (memo != null) {
    privacy_level = memo.privacy_level;
  }
  if (privacy_level == null) {
    privacy_level = GUILD_ONLY;
  }
  tmp3Result = tmp3(obj.useState(privacy_level), 2);
  first2 = tmp3Result[0];
  closure_7 = tmp3Result[1];
  [tmp14, c8] = callback(obj.useState(false), 2);
  const tmp3Result1 = callback(obj.useState(false), 2);
  [obj2, c9] = callback(obj.useState(null), 2);
  obj2 = require(memo[23]);
  canSendStageStartNotification = obj2.useCanSendStageStartNotification(first);
  let obj3 = require(memo[23]);
  let tmp20 = null == memo;
  const defaultSendStartStageNotificationToggle = obj3.useDefaultSendStartStageNotificationToggle(first);
  if (tmp20) {
    tmp20 = canSendStageStartNotification;
  }
  canSendStageStartNotification = tmp20;
  let tmp21 = tmp20;
  if (tmp20) {
    tmp21 = defaultSendStartStageNotificationToggle;
  }
  const tmp3Result3 = callback(obj.useState(tmp21), 2);
  first3 = tmp3Result3[0];
  closure_12 = tmp3Result3[1];
  const tmp3Result2 = callback(obj.useState(null), 2);
  const items1 = [require(memo[19]).HotspotStore];
  constants = require(memo[18]).useStateFromStores(items1, () => {
    const HotspotStore = callback(memo[19]).HotspotStore;
    return HotspotStore.hasHotspot(callback(memo[19]).HotspotLocations.LIVE_STAGE_NOTIFICATION_BADGE);
  });
  obj = { stageInstance: memo, privacyDefault: GUILD_ONLY };
  closure_15 = obj.useRef(obj);
  const effect = obj.useEffect(() => {
    closure_15.current = obj;
  });
  const items2 = [first.id];
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
      callback2(stageInstance.topic);
    }
  }, items2);
  const tmp16Result = require(memo[18]);
  ({ helpText, publicDisabled: c16 } = importDefault(memo[24])(first, memo, first2));
  importDefault(memo[25])(() => {
    obj = closure_1_1(memo[26]);
    let id;
    if (memo != null) {
      id = memo.id;
    }
    obj = { stage_instance_id: id, can_start_public_stage: !c16, guild_id: first.guild_id };
    obj.track(lib.START_STAGE_OPENED, obj);
  });
  obj = { style: tmp.header, children: null };
  const items3 = [obj(HeaderIcon, { guild }), , ];
  obj1 = { style: tmp.headerTitle, accessibilityRole: "header", variant: "text-lg/semibold", color: "mobile-text-heading-primary", children: null };
  if (null == memo) {
    const intl2 = tmp16(tmp17[13]).intl;
    let stringResult = intl2.string(tmp16(tmp17[13]).t.DDF0cJ);
  } else {
    let intl = tmp16(tmp17[13]).intl;
    stringResult = intl.string(tmp16(tmp17[13]).t["5BKP4y"]);
  }
  obj1[4] = stringResult;
  items3[1] = obj(require(memo[21]).Text, obj1);
  obj2 = { style: tmp.headerSubtitle, variant: "text-sm/medium", color: "text-default", children: null };
  if (null == memo) {
    const intl4 = tmp16(tmp17[13]).intl;
    let stringResult1 = intl4.string(tmp16(tmp17[13]).t.bqQIwa);
  } else {
    const intl3 = tmp16(tmp17[13]).intl;
    stringResult1 = intl3.string(tmp16(tmp17[13]).t["I+9bLx"]);
  }
  obj2[3] = stringResult1;
  items3[2] = obj(require(memo[21]).Text, obj2);
  obj[1] = items3;
  obj3 = { keyboardShouldPersistTaps: "handled", showsVerticalScrollIndicator: false, alwaysBounceVertical: false, style: tmp.container, contentContainerStyle: null, children: null };
  const items4 = [tmp.contentContainer, ];
  let contentTopSpacing = null;
  let tmp29Result = tmp29(tmp30, obj);
  if (null != guild) {
    contentTopSpacing = tmp.contentTopSpacing;
  }
  items4[1] = contentTopSpacing;
  obj3[4] = items4;
  const items5 = [tmp29Result, , , , , , , , ];
  const obj4 = { children: null };
  let tmp26Result = tmp26(tmp17[31]);
  const intl5 = tmp16(tmp17[13]).intl;
  obj4[0] = intl5.string(require(memo[13]).t["5FPBOB"]);
  items5[1] = obj(tmp26Result, obj4);
  let obj5 = { style: tmp.textInput, showBorder: false, showTopContainer: false, multiline: false, maxLength: canSendStageStartNotification, value: first1, placeholder: null, onChange: null, autoFocus: true, clearButtonVisibility: null };
  const intl6 = tmp16(tmp17[13]).intl;
  obj5[6] = intl6.string(require(memo[13]).t.ZwWruY);
  obj5[7] = tmp3Result[1];
  obj5[9] = require(memo[14]).ClearButtonVisibility.WITH_CONTENT;
  items5[2] = obj(require(memo[20]).FormInput, obj5);
  let tmp31Result = null != helpText;
  if (tmp31Result) {
    const obj6 = { style: null, variant: "text-xs/medium", color: "text-default", children: null };
    obj6[0] = tmp.optionExplanation;
    obj6[3] = helpText;
    tmp31Result = tmp31(tmp16(tmp17[21]).Text, obj6);
  }
  items5[3] = tmp31Result;
  tmp31Result = null != guild;
  if (tmp31Result) {
    const obj7 = { guild: null, channel: null, onChangeChannel: null };
    obj7[0] = guild;
    obj7[1] = first;
    obj7[2] = tmp4[1];
    tmp31Result = tmp31(tmp26(tmp17[32]), obj7);
  }
  items5[4] = tmp31Result;
  let tmp31Result1 = null;
  if (tmp20) {
    const obj8 = { sendStartNotification: null, onToggle: null };
    obj8[0] = first3;
    obj8[1] = function handleSetSendStartNotification() {
      const result = first(memo[27]).dismissGlobalKeyboard();
      lib(!first3);
    };
    tmp31Result1 = tmp31(NotificationToggle, obj8);
  }
  items5[5] = tmp31Result1;
  items5[6] = obj(importDefault(memo[33]), { onConfirmPress: _handleSave, style: tmp.ageVerificationNotice, channelId: first.id });
  let tmp31Result2 = null;
  if (null != obj1) {
    const obj10 = { style: null, variant: "text-xs/medium", color: "text-feedback-critical", children: null };
    obj10[0] = tmp.error;
    obj10[3] = obj1.getAnyErrorMessage();
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
  obj11[1] = obj(require(memo[34]).Button, {
    text: stringResult2,
    onPress: function handleSave() {
      const self = this;
      const apply = _handleSave.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    },
    disabled: tmp44,
    loading: tmp14
  });
  items5[8] = obj(closure_7, obj11);
  obj3[5] = items5;
  tmp29Result = tmp29(c8, obj3);
  let tmp31Result3 = tmp29Result;
  if (null == guild) {
    const obj13 = { top: true, bottom: true, style: null, children: null };
    obj13[2] = tmp.container;
    const obj14 = { style: null, children: null };
    obj14[0] = tmp.keyboardAwareView;
    const obj15 = { guild: null };
    obj15[0] = guild;
    tmp26Result = tmp26(tmp17[36]);
    const items6 = [tmp31(NavigationBar, obj15), tmp29Result];
    obj14[1] = items6;
    obj13[3] = tmp29(tmp26Result, obj14);
    tmp31Result3 = tmp31(tmp16(tmp17[35]).SafeAreaPaddingView, obj13);
  }
  return tmp31Result3;
});
let result = require("set").fileFinishedImporting("modules/stage_channels/native/modals/StartStageChannelModal.tsx");

export default forwardRefResult;
export { NotificationToggle };