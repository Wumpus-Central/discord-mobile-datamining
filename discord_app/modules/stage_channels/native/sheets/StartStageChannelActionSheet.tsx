// discord_app/modules/stage_channels/native/sheets/StartStageChannelActionSheet.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import closure_4 from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import closure_5 from "../../../../../_runtime/metro/00032__slicedToArray.js";
import closure_6 from "../../../../../_runtime/00019_noop.js";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_8 from "../../StageInstanceStore.tsx";
import MAX_STAGE_TOPIC_LENGTH from "../../StageChannelsConstants.tsx";
import ME from "../../../../Constants.tsx";
import { GuildScheduledEventPrivacyLevel as closure_12 } from "../../../guild_scheduled_events/GuildScheduledEventsConstants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
({ MAX_STAGE_TOPIC_LENGTH: c9, START_STAGE_CHANNEL_EVENT_SHEET_KEY: c10 } = MAX_STAGE_TOPIC_LENGTH);
({ AnalyticEvents: unpackModuleId, Fonts } = ME);
({ jsx: map1, jsxs: closure_14 } = jsxProd);
createCacheKey = { container: { padding: 16 }, header: { alignItems: "center", paddingBottom: 24 }, headerTitle: { marginTop: 16, marginBottom: 8 }, headerSubtitle: { textAlign: "center" }, startButton: { marginTop: 16 }, buttonSubtitle: { paddingTop: 8, textAlign: "center" }, ageVerificationNotice: null, error: null };
createCacheKey = { marginBottom: ThemesDefault.space.PX_16 };
createCacheKey[6] = createCacheKey;
createCacheKey[7] = { paddingTop: 8, fontSize: 12, fontFamily: Fonts.PRIMARY_MEDIUM, color: ThemesDefault.unsafe_rawColors.RED_400 };
let closure_15 = createCacheKey.createStyles(createCacheKey);
let obj1 = { paddingTop: 8, fontSize: 12, fontFamily: Fonts.PRIMARY_MEDIUM, color: ThemesDefault.unsafe_rawColors.RED_400 };
let result = require("set").fileFinishedImporting("modules/stage_channels/native/sheets/StartStageChannelActionSheet.tsx");

export default function StartStageChannelEventActionSheet(channel) {
  channel = channel.channel;
  let stateFromStores;
  let first;
  dependencyMap = undefined;
  c4 = undefined;
  function _handleSave(closure_6, arg1) {
    const self = this;
    const tmp = _undefined2(function*() {
      if (c5 === 2) {
        c5 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c5 = 2;
          if (0 === v0) {
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
              if ("" !== closure_1_2.trim()) {
                dependencyMap(true);
                v0(null);
                let obj3 = closure_1_2(1892);
                const result = obj3.dismissGlobalKeyboard();
                dependencyMap = 1;
                if (null != closure_1_1) {
                  let tmp33Result = tmp33(7923);
                  v0 = 3;
                  c5 = 1;
                  obj1 = { value: null, done: false };
                  obj1[0] = tmp33Result.editStage(closure_1_0, tmp54, closure_1_12.GUILD_ONLY);
                  return obj1;
                } else {
                  tmp33Result = tmp33(7923);
                  v0 = 2;
                  c5 = 1;
                  const obj2 = { value: null, done: false };
                  obj2[0] = tmp33Result.startStage(closure_1_0, tmp54, closure_1_12.GUILD_ONLY, false);
                  return obj2;
                }
              }
            }
          } else {
            if (1 === tmp7) {
              dependencyMap = 0;
              closure_1 = closure_2;
              aPIError = new closure_1_0(4278).APIError(closure_1);
              v0(aPIError);
              dependencyMap(false);
            } else {
              if (2 === tmp7) {
                if (arg0 === 1) {
                  c5 = 3;
                  throw arg1;
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
              obj1 = closure_1_1(4347);
              obj1.hideActionSheet(closure_1_10);
              dependencyMap = 0;
            }
            dependencyMap = 0;
            c5 = 3;
            obj3 = { value: null, done: true };
            obj3[0] = arg1;
            return obj3;
          }
          c5 = 3;
        } catch (tmp45) {
          closure_2 = tmp45;
          if (tmp4 === dependencyMap) {
            c5 = tmp2;
            throw tmp45;
          } else {
            v0 = tmp;
          }
        }
      }
    });
    closure_5 = tmp;
    const apply = tmp.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  let tmp = callback2();
  let obj = channel(589);
  const items = [closure_8];
  stateFromStores = obj.useStateFromStores(items, () => closure_1_8.getStageInstanceByChannel(channel.id));
  obj1 = React;
  let str;
  if (stateFromStores != null) {
    str = stateFromStores.topic;
  }
  if (str == null) {
    str = "";
  }
  const tmp5 = _handleSave(React.useState(str), 2);
  first = tmp5[0];
  [tmp8, c3] = _handleSave(obj1.useState(false), 2);
  const tmp7 = _handleSave(obj1.useState(false), 2);
  [obj3, c4] = _handleSave(obj1.useState(null), 2);
  const tmp9 = _handleSave(obj1.useState(null), 2);
  const shouldAgeVerifyToSpeakForCurrentUser = channel(5247).useShouldAgeVerifyToSpeakForCurrentUser(channel.id);
  stateFromStores(4831)(() => {
    let obj = stateFromStores(_undefined[14]);
    let id;
    if (stateFromStores != null) {
      id = stateFromStores.id;
    }
    obj = { stage_instance_id: id, can_start_public_stage: false, guild_id: channel.guild_id };
    obj.track(closure_1_11.START_STAGE_OPENED, obj);
  });
  obj = { style: tmp.header, children: null };
  const items1 = [callback(stateFromStores(7932), {}), , ];
  obj = { style: tmp.headerTitle, accessibilityRole: "header", variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: null };
  if (null == stateFromStores) {
    const intl2 = tmp2(1236).intl;
    let stringResult = intl2.string(tmp2(1236).t.DDF0cJ);
  } else {
    const intl = tmp2(1236).intl;
    stringResult = intl.string(tmp2(1236).t["5BKP4y"]);
  }
  obj[4] = stringResult;
  items1[1] = callback(channel(4376).Text, obj);
  obj1 = { style: tmp.headerSubtitle, variant: "text-sm/medium", color: "text-default", children: null };
  if (null == stateFromStores) {
    const intl4 = tmp2(1236).intl;
    let stringResult1 = intl4.string(tmp2(1236).t.bqQIwa);
  } else {
    const intl3 = tmp2(1236).intl;
    stringResult1 = intl3.string(tmp2(1236).t["I+9bLx"]);
  }
  obj1[3] = stringResult1;
  items1[2] = callback(channel(4376).Text, obj1);
  obj[1] = items1;
  let stringResult2;
  const tmp11 = stateFromStores;
  const tmp2Result = channel(5247);
  if (null == stateFromStores) {
    const intl5 = tmp2(1236).intl;
    stringResult2 = intl5.string(tmp2(1236).t.gR66jX);
  }
  function handleSave() {
    const self = this;
    const apply = _handleSave.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  let obj2 = { bottom: true, style: tmp.container, children: null };
  const items2 = [closure_14(View, obj), , , , , ];
  obj3 = { label: null, maxLength: null, value: null, placeholder: null, onChange: null, autoFocus: true, returnKeyType: "done", isClearable: true, accessibilityLabel: null, onSubmitEditing: null };
  const intl6 = tmp2(1236).intl;
  obj3[0] = intl6.string(channel(1236).t["5FPBOB"]);
  obj3[1] = closure_9;
  obj3[2] = first;
  const intl7 = tmp2(1236).intl;
  obj3[3] = intl7.string(channel(1236).t.ZwWruY);
  obj3[4] = tmp5[1];
  const intl8 = tmp2(1236).intl;
  obj3[8] = intl8.string(channel(1236).t["5FPBOB"]);
  obj3[9] = handleSave;
  items2[1] = callback(channel(7935).TextInput, obj3);
  items2[2] = callback(tmp11(7941), {
    onConfirmPress() {
      return stateFromStores(_undefined[17]).hideActionSheet(closure_10);
    },
    style: tmp.ageVerificationNotice,
    channelId: channel.id
  });
  let tmp15Result = null;
  if (null != obj2) {
    const obj5 = { style: null, variant: "text-xs/medium", color: "text-feedback-critical", children: null };
    obj5[0] = tmp.error;
    obj5[3] = obj2.getAnyErrorMessage();
    tmp15Result = tmp15(tmp2(4376).Text, obj5);
  }
  items2[3] = tmp15Result;
  const obj6 = { style: tmp.startButton, children: null };
  if (null == stateFromStores) {
    const intl10 = tmp2(1236).intl;
    let stringResult3 = intl10.string(tmp2(1236).t.s8mM8A);
  } else {
    const intl9 = tmp2(1236).intl;
    stringResult3 = intl9.string(tmp2(1236).t.K344S7);
  }
  obj6[1] = callback(channel(4815).Button, { text: stringResult3, onPress: handleSave, disabled: "" === first, loading: tmp8, accessibilityHint: stringResult2 });
  items2[4] = callback(View, obj6);
  tmp15Result = null != stringResult2 && !shouldAgeVerifyToSpeakForCurrentUser;
  if (tmp15Result) {
    const obj8 = { accessible: false, style: null, variant: "text-xs/medium", color: "text-default", children: null };
    obj8[1] = tmp.buttonSubtitle;
    const intl11 = tmp2(1236).intl;
    obj8[4] = intl11.string(tmp2(1236).t.gR66jX);
    tmp15Result = tmp15(tmp2(4376).Text, obj8);
  }
  const obj4 = {
    onConfirmPress() {
      return stateFromStores(_undefined[17]).hideActionSheet(closure_10);
    },
    style: tmp.ageVerificationNotice,
    channelId: channel.id
  };
  const obj7 = { text: stringResult3, onPress: handleSave, disabled: "" === first, loading: tmp8, accessibilityHint: stringResult2 };
  const tmp13Result = closure_14(View, obj);
  items2[5] = tmp15Result;
  obj2[2] = items2;
  return callback(channel(5503).BottomSheet, { keyboardShouldPersistTaps: "always", children: closure_14(channel(5434).SafeAreaPaddingView, obj2) });
};