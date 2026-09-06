// === Module 8397: StartStageChannelActionSheet ===

// Module 8397 (StartStageChannelActionSheet)
import nativeDefault from "native" /* 576 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import StageInstanceStore from "StageInstanceStore" /* 1962 */;

const require = fn;
const View = fn(17).View;
const StageChannelsConstants = fn(5414);
({ MAX_STAGE_TOPIC_LENGTH: closure_9, START_STAGE_CHANNEL_EVENT_SHEET_KEY: c10 } = StageChannelsConstants);
const Constants = fn(1074);
({ AnalyticEvents: closure_11, Fonts } = Constants);
let closure_12 = fn(1963).GuildScheduledEventPrivacyLevel;
const jsxProd = fn(21);
({ jsx: map1, jsxs: closure_14 } = jsxProd);
fn(4560);
let createStyles = { container: { padding: 16 }, header: { alignItems: "center", paddingBottom: 24 }, headerTitle: { marginTop: 16, marginBottom: 8 }, headerSubtitle: { textAlign: "center" }, startButton: { marginTop: 16 }, buttonSubtitle: { paddingTop: 8, textAlign: "center" }, ageVerificationNotice: null, error: null };
createStyles = { marginBottom: nativeDefault.space.PX_16 };
createStyles.ageVerificationNotice = createStyles;
createStyles.error = { paddingTop: 8, fontSize: 12, fontFamily: Fonts.PRIMARY_MEDIUM, color: nativeDefault.unsafe_rawColors.RED_400 };
let closure_15 = createStyles.createStyles(createStyles);
const size = fn(2);
let result = size.fileFinishedImporting("modules/stage_channels/native/sheets/StartStageChannelActionSheet.tsx");

export default function StartStageChannelEventActionSheet(channel) {
  channel = channel.channel;
  value = undefined;
  dependencyMap = undefined;
  c4 = undefined;
  _slicedToArray = async function _handleSave(noop) {
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
      if (noop === 1) {
        throw value;
      } else if (noop === 2) {
        let obj = { value, done: true };
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c5 = 2;
        if (0 === c4) {
          if (noop === 1) {
            c5 = 3;
            throw value;
          } else if (noop === 2) {
            c5 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            channel = tmp7;
            closure_128_0 = undefined;
            if ("" !== importAll.trim()) {
              _undefined(true);
              asyncGeneratorStep(null);
              let obj3 = tmp45(1874);
              const result = obj3.dismissGlobalKeyboard();
              dependencyMap = 1;
              if (null != stateFromStores) {
                let tmp33Result = tmp45(8398);
                c4 = 3;
                c5 = 1;
                let obj1 = { value: tmp33Result.editStage(channel, importAll, constants.GUILD_ONLY), done: false };
                return obj1;
              } else {
                tmp33Result = tmp45(8398);
                c4 = 2;
                c5 = 1;
                const obj2 = { value: tmp33Result.startStage(channel, importAll, constants.GUILD_ONLY, false), done: false };
                return obj2;
              }
            }
          }
        } else {
          if (1 === tmp7) {
            dependencyMap = 0;
            closure_128_1 = tmp45;
            const aPIError = new channel(4461).APIError(closure_128_1);
            closure_128_0 = aPIError;
            closure_129_4(closure_128_0);
            closure_129_3(false);
          } else {
            if (2 === tmp7) {
              if (noop === 1) {
                c5 = 3;
                throw value;
              }
            } else if (noop === 1) {
              c5 = 3;
              throw value;
            } else if (noop === 2) {
              dependencyMap = 0;
              c5 = 3;
              obj = { value, done: true };
              return obj;
            }
            obj1 = tmp3(4527);
            obj1.hideActionSheet(closure_1_10);
            dependencyMap = 0;
          }
          dependencyMap = 0;
          c5 = 3;
          obj3 = { value, done: true };
          return obj3;
        }
        c5 = 3;
      } catch (tmp45) {
        if (tmp4 === dependencyMap) {
          c5 = tmp2;
          throw tmp45;
        } else {
          c4 = tmp;
        }
      }
    }
  };
  const tmp = closure_15();
  let obj = channel(504);
  const items = [StageInstanceStore];
  const stateFromStores = obj.useStateFromStores(items, () => StageInstanceStore.getStageInstanceByChannel(channel.id));
  let obj1 = noop;
  let str;
  if (stateFromStores != null) {
    str = stateFromStores.topic;
  }
  if (str == null) {
    str = "";
  }
  const tmp5 = _slicedToArray(noop.useState(str), 2);
  value = tmp5[0];
  [tmp8, c3] = _slicedToArray(obj1.useState(false), 2);
  const tmp7 = _slicedToArray(obj1.useState(false), 2);
  [obj3, c4] = _slicedToArray(obj1.useState(null), 2);
  const tmp9 = _slicedToArray(obj1.useState(null), 2);
  const shouldAgeVerifyToSpeakForCurrentUser = channel(5422).useShouldAgeVerifyToSpeakForCurrentUser(channel.id);
  stateFromStores(4992)(() => {
    let obj = AnalyticsUtilsDefault;
    let id;
    if (stateFromStores != null) {
      id = stateFromStores.id;
    }
    obj = { stage_instance_id: id, can_start_public_stage: false, guild_id: channel.guild_id };
    obj.track(constants.START_STAGE_OPENED, obj);
  });
  obj = { style: tmp.header, children: null };
  const items1 = [closure_13(stateFromStores(8407), {}), , ];
  obj = { style: tmp.headerTitle, accessibilityRole: "header", variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: null };
  if (null == stateFromStores) {
    const intl2 = tmp2(1114).intl;
    let stringResult = intl2.string(tmp2(1114).t.DDF0cJ);
  } else {
    const intl = tmp2(1114).intl;
    stringResult = intl.string(tmp2(1114).t["5BKP4y"]);
  }
  obj.children = stringResult;
  items1[1] = closure_13(channel(4556).Text, obj);
  obj1 = { style: tmp.headerSubtitle, variant: "text-sm/medium", color: "text-default", children: null };
  if (null == stateFromStores) {
    const intl4 = tmp2(1114).intl;
    let stringResult1 = intl4.string(tmp2(1114).t.bqQIwa);
  } else {
    const intl3 = tmp2(1114).intl;
    stringResult1 = intl3.string(tmp2(1114).t["I+9bLx"]);
  }
  obj1.children = stringResult1;
  items1[2] = closure_13(channel(4556).Text, obj1);
  obj.children = items1;
  let stringResult2;
  const tmp11 = stateFromStores;
  const tmp2Result = channel(5422);
  if (null == stateFromStores) {
    const intl5 = tmp2(1114).intl;
    stringResult2 = intl5.string(tmp2(1114).t.gR66jX);
  }
  function handleSave() {
    const self = this;
    const apply = closure_5.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  let obj2 = { bottom: true, style: tmp.container, children: null };
  const items2 = [closure_14(View, obj), , , , , ];
  obj3 = { label: null, maxLength: null, value: null, placeholder: null, onChange: null, autoFocus: true, returnKeyType: "done", isClearable: true, onSubmitEditing: null };
  const intl6 = tmp2(1114).intl;
  obj3.label = intl6.string(channel(1114).t["5FPBOB"]);
  obj3.maxLength = maxLength;
  obj3.value = value;
  const intl7 = tmp2(1114).intl;
  obj3.placeholder = intl7.string(channel(1114).t.ZwWruY);
  obj3.onChange = tmp5[1];
  obj3.onSubmitEditing = handleSave;
  items2[1] = closure_13(channel(6606).TextInput, obj3);
  items2[2] = closure_13(tmp11(8410), {
    onConfirmPress() {
      return stateFromStores(_undefined[17]).hideActionSheet(closure_1_10);
    },
    style: tmp.ageVerificationNotice,
    channelId: channel.id
  });
  let tmp15Result = null;
  if (null != obj2) {
    const obj5 = { style: tmp.error, variant: "text-xs/medium", color: "text-feedback-critical", children: obj2.getAnyErrorMessage() };
    tmp15Result = closure_13(tmp2(4556).Text, obj5);
  }
  items2[3] = tmp15Result;
  const obj6 = { style: tmp.startButton, children: null };
  if (null == stateFromStores) {
    const intl9 = tmp2(1114).intl;
    let stringResult3 = intl9.string(tmp2(1114).t.s8mM8A);
  } else {
    const intl8 = tmp2(1114).intl;
    stringResult3 = intl8.string(tmp2(1114).t.K344S7);
  }
  obj6.children = closure_13(channel(4975).Button, { text: stringResult3, onPress: handleSave, disabled: "" === value, loading: tmp8, accessibilityHint: stringResult2 });
  items2[4] = closure_13(View, obj6);
  tmp15Result = null != stringResult2 && !shouldAgeVerifyToSpeakForCurrentUser;
  if (tmp15Result) {
    const obj8 = { accessible: false, style: tmp.buttonSubtitle, variant: "text-xs/medium", color: "text-default", children: null };
    const intl10 = tmp2(1114).intl;
    obj8.children = intl10.string(tmp2(1114).t.gR66jX);
    tmp15Result = closure_13(tmp2(4556).Text, obj8);
  }
  const obj4 = {
    onConfirmPress() {
      return stateFromStores(_undefined[17]).hideActionSheet(closure_1_10);
    },
    style: tmp.ageVerificationNotice,
    channelId: channel.id
  };
  const obj7 = { text: stringResult3, onPress: handleSave, disabled: "" === value, loading: tmp8, accessibilityHint: stringResult2 };
  const tmp13Result = closure_14(View, obj);
  items2[5] = tmp15Result;
  obj2.children = items2;
  return closure_13(channel(7150).BottomSheet, { keyboardShouldPersistTaps: "always", children: closure_14(channel(7123).SafeAreaPaddingView, obj2) });
};