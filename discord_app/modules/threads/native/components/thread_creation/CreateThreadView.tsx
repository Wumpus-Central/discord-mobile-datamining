// discord_app/modules/threads/native/components/thread_creation/CreateThreadView.tsx
import ThemesDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import useCreateThreadViewPropsDefault from "../../useCreateThreadViewProps.tsx";
import closure_3 from "../../../../../../_runtime/00005_asyncGeneratorStep.js";
import closure_4 from "../../../../../../_runtime/metro/00032__slicedToArray.js";
import importAllResult from "../../../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../../../_runtime/00017_get_ActivityIndicator.js";
import { DraftType } from "../../../../../stores/DraftStore.tsx";
import { SlowmodeType } from "../../../../../stores/SlowmodeStore.tsx";
import ME from "../../../../../Constants.tsx";
import jsxProd from "../../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../../design/components/Styles/native/createStyles.tsx";
import { createStandardNavigationFactories } from "../../../../../../_runtime/01501_createStandardNavigationFactories.js";
import { getIsPrivate } from "../../../ThreadCreationHooks.tsx";

const require = arg1;
function CreateThreadViewInner(screenIndex) {
  let threadSettingsDraft = screenIndex.threadSettingsDraft;
  let _require = threadSettingsDraft;
  const parentChannel = screenIndex.parentChannel;
  threadSettingsDraft = parentChannel;
  const tmp = callback3();
  let obj = getIsPrivate;
  const privateThreadMode = obj.usePrivateThreadMode(parentChannel);
  obj1 = importAllResult;
  const items = [parentChannel.id];
  const effect = importAllResult.useEffect(() => () => {
    closure_1_1(closure_1_2[11]).clearDraft(user.id, closure_1_8.ThreadSettings);
    const obj = closure_1_1(closure_1_2[11]);
    closure_1_1(closure_1_2[11]).clearDraft(user.id, closure_1_8.FirstThreadMessage);
  }, items);
  const tmp6 = callback(importAllResult.useState(null), 2);
  _require = parentChannel;
  dependencyMap = tmp7;
  let navigation;
  callback = undefined;
  importAllResult = undefined;
  closure_6 = undefined;
  let obj2 = createStandardNavigationFactories;
  navigation = obj2.useNavigation();
  callback = importAllResult.useRef(false);
  importAllResult = tmp9;
  const items1 = [null == threadSettingsDraft.parentMessageId, navigation, , , ];
  ({ location: arr2[2], parentMessageId: arr2[3] } = threadSettingsDraft);
  items1[4] = parentChannel;
  callback = importAllResult.useCallback((guild_id) => {
    if ("Message Shortcut" === threadSettingsDraft.location) {
      let obj = { channel_id: null, guild_id: null, original_message_id: null, action: "thread" };
      obj[0] = lib.id;
      guild_id = undefined;
      if (lib != null) {
        guild_id = tmp23.guild_id;
      }
      obj[1] = guild_id;
      obj[2] = tmp.parentMessageId;
      obj = lib(4653);
      let guild_id1;
      if (lib != null) {
        guild_id1 = tmp23.guild_id;
      }
      const merged = Object.assign(obj.collectGuildAnalyticsMetadata(guild_id1));
      const obj6 = threadSettingsDraft(698);
      const merged1 = Object.assign(lib(4653).collectChannelAnalyticsMetadata(tmp23));
      obj6.track(closure_1_11.MESSAGE_SHORTCUT_ACTION_SENT, obj);
      const obj2 = lib(4653);
    }
    if (null != navigation) {
      obj = { guildId: null, channelId: null, showCreateThread: false, screenKey: null };
      ({ guild_id: obj5[0], id: obj5[1] } = guild_id);
      obj[3] = lib(4324).CREATE_THREAD_SCREEN_KEY;
      navigation.navigate("channel", obj, { merge: true });
    } else if (closure_5) {
      lib(1222).transitionToGuild(guild_id.guild_id, guild_id.id);
      const obj4 = lib(1222);
    }
  }, items1);
  obj = { parentChannel, parentMessageId: threadSettingsDraft.parentMessageId, threadSettings: threadSettingsDraft, privateThreadMode, location: null, onThreadCreated: null, useDefaultThreadName: true };
  let str = threadSettingsDraft.location;
  if (str == null) {
    str = "(unknown)";
  }
  obj[4] = str;
  obj[5] = callback;
  const tmp12Result = threadSettingsDraft(10251)(obj);
  closure_6 = tmp12Result;
  _require = undefined;
  _require = navigation((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    c6 = 0;
    c7 = 0;
    c5 = 0;
    return (function*(arg0, arg1) {
      if (c7 === 2) {
        c7 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c7 = 2;
          let current = v0;
          if (0 === v0) {
            if (arg0 === 1) {
              c7 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c7 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_3 = tmp3;
              current = closure_1_4.current;
              if (!current) {
                closure_1_4.current = true;
                closure_1_2(null);
                c5 = 1;
                if (null == parentMessageId.parentMessageId) {
                  if (null != tmp50.name) {
                    const str = tmp50.name;
                  }
                  closure_1_2(lib(16118).makeEmptyTitleError());
                  const obj8 = lib(16118);
                  lib(4307).dismissKeyboard();
                  closure_1_4.current = false;
                  c5 = 0;
                  c7 = 3;
                  return { value: "HermesInternal", done: null };
                }
                v0 = 2;
                c7 = 1;
                obj1 = { value: null, done: false };
                obj1[0] = v0(tmp71, tmp72);
                return obj1;
              }
            }
          } else {
            if (1 === current) {
              c5 = 0;
              lib = closure_4;
              const body = lib.body;
              let code;
              if (body != null) {
                code = body.code;
              }
              if (code === closure_2_10.AUTOMOD_TITLE_BLOCKED) {
                closure_1_2(lib(16118).makeAutomodViolationError(lib.body, lib));
                const obj5 = lib(16118);
                lib(4307).dismissKeyboard();
                const obj6 = lib(4307);
              } else {
                const body3 = lib.body;
                let code1;
                if (body3 != null) {
                  code1 = body3.code;
                }
                let tmp23 = code1 === closure_2_10.INVALID_FORM_BODY;
                if (tmp23) {
                  const body2 = lib.body;
                  let name;
                  if (body2 != null) {
                    const errors = body2.errors;
                    if (errors != null) {
                      name = errors.name;
                    }
                  }
                  tmp23 = null != name;
                }
                if (tmp23) {
                  let obj2 = lib(16118);
                  closure_1_2(obj2.makeApiNameRequiredError());
                  lib(4307).dismissKeyboard();
                  const obj4 = lib(4307);
                }
              }
            } else if (arg0 === 1) {
              c7 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c5 = 0;
              c7 = 3;
              obj2 = { value: null, done: true };
              obj2[0] = arg1;
              return obj2;
            } else {
              obj = threadSettingsDraft(7454);
              obj.saveDraft(lib.id, "", closure_2_8.FirstThreadMessage);
              c5 = 0;
            }
            current = closure_1_4;
            closure_1_4.current = false;
          }
          c7 = 3;
        } catch (tmp60) {
          closure_4 = tmp60;
          if (tmp4 === c5) {
            c7 = tmp2;
            throw tmp60;
          } else {
            v0 = tmp;
          }
        }
      }
    })();
  });
  const items2 = [tmp6[1], , , , ];
  ({ parentMessageId: arr3[1], name: arr3[2] } = threadSettingsDraft);
  items2[3] = tmp12Result;
  items2[4] = parentChannel;
  const callback1 = obj1.useCallback(function() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }, items2);
  const tmp12 = threadSettingsDraft(10251);
  const tmp11Result = threadSettingsDraft(5905);
  const tmp16 = threadSettingsDraft(1629)();
  const ref = obj1.useRef(null);
  const ref1 = obj1.useRef(null);
  obj = { value: tmp11Result(tmp11(5925).CREATE_THREAD).analyticsLocations, children: null };
  const items3 = [callback2(threadSettingsDraft(5022), { absolute: true }), ];
  obj1 = { style: items4, children: null };
  items4 = [tmp.container, { marginBottom: threadSettingsDraft(5546)({ isKeyboardAwareOnAndroid: false, includeKeyboardHeight: true }).insets.bottom - tmp16.bottom }];
  obj2 = { style: tmp.expander };
  const items5 = [callback2(closure_6, obj2), , , , ];
  const obj3 = { style: tmp.containerContent, children: null };
  let obj4 = { style: tmp.options, children: null };
  let obj5 = { style: tmp.optionsInner, children: null };
  const isForumLikeChannelResult = parentChannel.isForumLikeChannel();
  const tmp20 = null != threadSettingsDraft.parentMessageId;
  const items6 = [callback2(closure_6, { style: tmp.threadIconContainer, children: callback2(require("../../../../../design/components/Icon/native/redesign/generated/ThreadIcon.tsx").ThreadIcon, { size: "lg" }) }), callback2(threadSettingsDraft(16117), { ref: ref1, chatInputRef: ref, threadSettingsDraft, threadNameError: tmp6[0], optional: tmp20 }), ];
  let tmp22Result = null;
  if (!isForumLikeChannelResult) {
    tmp22Result = null;
    if (null == threadSettingsDraft.parentMessageId) {
      tmp22Result = null;
      if (privateThreadMode !== tmp2(8093).PrivateThreadMode.Disabled) {
        const obj7 = { style: null, children: null };
        obj7[0] = tmp.optionPrivateThread;
        let obj8 = { start: true, end: true, disabled: null, label: null, subLabel: null, value: null, onValueChange: null };
        obj8[2] = privateThreadMode !== tmp2(8093).PrivateThreadMode.Enabled;
        const intl = tmp2(1236).intl;
        obj8[3] = intl.string(tmp2(1236).t.F1zyvU);
        const intl2 = tmp2(1236).intl;
        obj8[4] = intl2.string(tmp2(1236).t.Wy5RIQ);
        obj8[5] = tmp2(8093).getIsPrivate(threadSettingsDraft, privateThreadMode);
        obj8[6] = function onValueChange(arg0) {
          const parentChannelId = lib.parentChannelId;
          if (null != parentChannelId) {
            let obj = threadSettingsDraft(7454);
            obj = { isPrivate: null };
            obj[0] = arg0;
            obj.changeThreadSettings(parentChannelId, obj);
          }
        };
        obj7[1] = tmp22(tmp2(5945).TableSwitchRow, obj8);
        tmp22Result = tmp22(tmp23, obj7);
        const tmp2Result = tmp2(8093);
      }
    }
  }
  items6[2] = tmp22Result;
  obj5[1] = items6;
  const items7 = [closure_14(closure_6, obj5), ];
  let tmp21Result = null;
  if (null != threadSettingsDraft.parentMessageId) {
    const obj9 = { style: null, children: null };
    obj9[0] = tmp.parentMessageContainer;
    const obj10 = { style: null };
    obj10[0] = tmp.border;
    const items8 = [tmp22(tmp23, obj10), ];
    const obj11 = { channelId: null, messageId: null };
    obj11[0] = parentChannel.id;
    obj11[1] = threadSettingsDraft.parentMessageId;
    items8[1] = tmp22(tmp2(16119).ThreadCreationStarterMessage, obj11);
    obj9[1] = items8;
    tmp21Result = tmp21(tmp23, obj9);
  }
  items7[1] = tmp21Result;
  obj4[1] = items7;
  obj3[1] = closure_14(closure_6, obj4);
  items5[1] = callback2(closure_7, obj3);
  tmp22Result = null;
  if (parentChannel.rateLimitPerUser > 0) {
    const obj12 = { style: null, children: null };
    obj12[0] = tmp.typingWrapper;
    const obj13 = { channel: null, hasTypingText: false, slowmodeType: null };
    obj13[0] = parentChannel;
    obj13[2] = SlowmodeType.CreateThread;
    obj12[1] = tmp22(tmp11(11474), obj13);
    tmp22Result = tmp22(tmp23, obj12);
  }
  items5[2] = tmp22Result;
  items5[3] = callback2(threadSettingsDraft(11449), { ref, channel: parentChannel, onJumpToPresent: closure_12, screenIndex: screenIndex.screenIndex, secondaryTextFieldRef: ref1, threadCreationCallback: callback1 });
  items5[4] = callback2(threadSettingsDraft(12095), { channelId: parentChannel.id });
  obj1[1] = items5;
  items3[1] = closure_14(closure_6, obj1);
  obj[1] = items3;
  return closure_14(require("../../../../app_analytics/useAnalyticsLocations.tsx").AnalyticsLocationProvider, obj);
}
let c5 = importAllResult;
({ View: closure_6, ScrollView: error, StyleSheet } = get_ActivityIndicator);
({ AbortCodes: c10, AnalyticEvents: unpackModuleId, NOOP: closure_12 } = ME);
({ jsx: map1, jsxs: closure_14 } = jsxProd);
let obj = { container: null, containerContent: null, expander: null, border: null, options: null, optionsInner: null, optionPrivateThread: null, threadIconContainer: null, typingWrapper: null, parentMessageContainer: null };
obj = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW, flex: 1 };
obj[0] = obj;
obj[1] = { flexGrow: 0 };
obj[2] = { flex: 1 };
createCacheKey = { height: 1, backgroundColor: ThemesDefault.colors.BORDER_SUBTLE, alignSelf: "stretch", marginBottom: 16 };
obj[3] = createCacheKey;
obj[4] = { marginHorizontal: 12 };
obj[5] = { paddingBottom: ThemesDefault.space.PX_16 };
let obj2 = { paddingBottom: ThemesDefault.space.PX_16 };
obj[6] = { paddingTop: ThemesDefault.space.PX_8 };
let obj3 = { paddingTop: ThemesDefault.space.PX_8 };
obj[7] = { width: ThemesDefault.space.PX_64, height: ThemesDefault.space.PX_64, marginTop: ThemesDefault.space.PX_16, marginBottom: ThemesDefault.space.PX_16, borderRadius: ThemesDefault.radii.xxl, backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_SUBTLE, justifyContent: "center", alignItems: "center" };
let obj4 = { width: ThemesDefault.space.PX_64, height: ThemesDefault.space.PX_64, marginTop: ThemesDefault.space.PX_16, marginBottom: ThemesDefault.space.PX_16, borderRadius: ThemesDefault.radii.xxl, backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_SUBTLE, justifyContent: "center", alignItems: "center" };
obj[8] = { borderBottomWidth: StyleSheet.hairlineWidth, paddingHorizontal: ThemesDefault.space.PX_16, paddingVertical: ThemesDefault.space.PX_4, justifyContent: "flex-end", flexDirection: "row", borderColor: ThemesDefault.colors.CHAT_BORDER };
obj[9] = { marginBottom: 16 };
let closure_15 = createCacheKey.createStyles(obj);
let obj5 = { borderBottomWidth: StyleSheet.hairlineWidth, paddingHorizontal: ThemesDefault.space.PX_16, paddingVertical: ThemesDefault.space.PX_4, justifyContent: "flex-end", flexDirection: "row", borderColor: ThemesDefault.colors.CHAT_BORDER };
const memoResult = importAllResult.memo((arg0) => {
  ({ channelId, screenIndex } = arg0);
  const tmp = useCreateThreadViewPropsDefault(channelId);
  let tmp2 = null;
  if (null != tmp) {
    const obj = { parentChannel: null, screenIndex: null, threadSettingsDraft: null };
    obj[0] = tmp.parentChannel;
    obj[1] = screenIndex;
    obj[2] = tmp.threadSettingsDraft;
    tmp2 = callback2(CreateThreadViewInner, obj);
  }
  return tmp2;
});
const result = require("set").fileFinishedImporting("modules/threads/native/components/thread_creation/CreateThreadView.tsx");

export const CreateThreadView = memoResult;