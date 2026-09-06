// === Module 16619: CreateThreadView ===

// Module 16619 (CreateThreadView)
import nativeDefault from "native" /* 576 */;
import router_utils from "router_utils" /* 1100 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import Types from "Types" /* 4442 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 4740 */;
import DraftActionCreatorsDefault from "DraftActionCreators" /* 7777 */;
import useCreateThreadViewPropsDefault from "useCreateThreadViewProps" /* 11358 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
function CreateThreadViewInner(screenIndex) {
  const threadSettingsDraft = screenIndex.threadSettingsDraft;
  _require = threadSettingsDraft;
  const parentChannel = screenIndex.parentChannel;
  const tmp = closure_15();
  let obj = require("ThreadCreationHooks");
  const privateThreadMode = obj.usePrivateThreadMode(parentChannel);
  let obj1 = noop;
  const items = [parentChannel.id];
  const effect = noop.useEffect(() => () => {
    parentChannel(7777).clearDraft(user.id, DraftType.ThreadSettings);
    const obj = parentChannel(7777);
    parentChannel(7777).clearDraft(user.id, DraftType.FirstThreadMessage);
  }, items);
  const tmp6 = _slicedToArray(noop.useState(null), 2);
  closure_129_0 = parentChannel;
  closure_129_1 = threadSettingsDraft;
  closure_129_2 = tmp7;
  closure_129_6 = undefined;
  let obj2 = require("Link");
  const navigation = obj2.useNavigation();
  closure_129_3 = navigation;
  closure_129_4 = noop.useRef(false);
  closure_129_5 = tmp9;
  const items1 = [null == threadSettingsDraft.parentMessageId, navigation, , , ];
  ({ location: arr2[2], parentMessageId: arr2[3] } = threadSettingsDraft);
  items1[4] = parentChannel;
  const callback = noop.useCallback((guild_id) => {
    if ("Message Shortcut" === parentChannel.location) {
      let obj = { channel_id: closure_0.id, guild_id: null, original_message_id: null, action: "thread" };
      guild_id = undefined;
      if (closure_0 != null) {
        guild_id = closure_0.guild_id;
      }
      obj.guild_id = guild_id;
      obj.original_message_id = tmp.parentMessageId;
      obj = AppAnalyticsUtils;
      let guild_id1;
      if (closure_0 != null) {
        guild_id1 = closure_0.guild_id;
      }
      const merged = Object.assign(obj.collectGuildAnalyticsMetadata(guild_id1));
      const obj6 = AnalyticsUtilsDefault;
      const merged1 = Object.assign(AppAnalyticsUtils.collectChannelAnalyticsMetadata(closure_0));
      obj6.track(constants.MESSAGE_SHORTCUT_ACTION_SENT, obj);
    }
    if (null != asyncGeneratorStep) {
      obj = { guildId: null, channelId: null, showCreateThread: false, screenKey: null };
      ({ guild_id: obj5.guildId, id: obj5.channelId } = guild_id);
      obj.screenKey = Types.CREATE_THREAD_SCREEN_KEY;
      asyncGeneratorStep.navigate("channel", obj, { merge: true });
    } else if (noop) {
      router_utils.transitionToGuild(guild_id.guild_id, guild_id.id);
    }
  }, items1);
  obj = { parentChannel, parentMessageId: threadSettingsDraft.parentMessageId, threadSettings: threadSettingsDraft, privateThreadMode, location: null, onThreadCreated: null, useDefaultThreadName: true };
  let str = threadSettingsDraft.location;
  if (str == null) {
    str = "(unknown)";
  }
  obj.location = str;
  obj.onThreadCreated = callback;
  const tmp12Result = parentChannel(10255)(obj);
  closure_129_6 = tmp12Result;
  _require = asyncGeneratorStep(async (arg0, arg1) => {
    closure_0 = arg0;
    const parentMessageId = arg1;
    c6 = 0;
    c7 = 0;
    c5 = 0;
    return (async (arg0, value) => {
      if (c7 === 2) {
        c7 = 3;
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
          c7 = 2;
          current = v2;
          if (0 === v2) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              closure_3 = tmp3;
              current = tmp60.current;
              if (!current) {
                tmp60.current = true;
                current(null);
                c5 = 1;
                if (null == parentMessageId.parentMessageId) {
                  current(closure_0(16621).makeEmptyTitleError());
                  const obj8 = closure_0(16621);
                  closure_0(4425).dismissKeyboard();
                  tmp60.current = false;
                  c5 = 0;
                  c7 = 3;
                  return { value: "HermesInternal", done: null };
                }
                v2 = 2;
                c7 = 1;
                const obj1 = { value: v2(tmp70, tmp71), done: false };
                return obj1;
              }
            }
          } else {
            if (1 === current) {
              c5 = 0;
              closure_130_0 = tmp60;
              const body = closure_130_0.body;
              let code;
              if (body != null) {
                code = body.code;
              }
              if (code === constants.AUTOMOD_TITLE_BLOCKED) {
                current(closure_0(16621).makeAutomodViolationError(closure_130_0.body, closure_0));
                const obj5 = closure_0(16621);
                closure_0(4425).dismissKeyboard();
                const obj6 = closure_0(4425);
              } else {
                const body3 = closure_130_0.body;
                let code1;
                if (body3 != null) {
                  code1 = body3.code;
                }
                let tmp23 = code1 === constants.INVALID_FORM_BODY;
                if (tmp23) {
                  const body2 = closure_130_0.body;
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
                  let obj2 = closure_0(16621);
                  current(obj2.makeApiNameRequiredError());
                  closure_0(4425).dismissKeyboard();
                  const obj4 = closure_0(4425);
                }
              }
            } else if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 0;
              c7 = 3;
              obj2 = { value, done: true };
              return obj2;
            } else {
              obj = parentChannel(7777);
              obj.saveDraft(closure_0.id, "", DraftType.FirstThreadMessage);
              c5 = 0;
            }
            current = tmp60;
            tmp60.current = false;
          }
          c7 = 3;
        } catch (tmp60) {
          if (tmp4 === c5) {
            c7 = tmp2;
            throw tmp60;
          } else {
            v2 = tmp;
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
  const tmp12 = parentChannel(10255);
  const tmp11Result = parentChannel(7162);
  const tmp16 = parentChannel(1611)();
  const ref = obj1.useRef(null);
  const ref1 = obj1.useRef(null);
  obj = { value: tmp11Result(tmp11(7182).CREATE_THREAD).analyticsLocations, children: null };
  const items3 = [closure_13(parentChannel(5125), { absolute: true }), ];
  obj1 = { style: null, children: null };
  const items4 = [tmp.container, { marginBottom: parentChannel(6981)({ isKeyboardAwareOnAndroid: false, includeKeyboardHeight: true }).insets.bottom - tmp16.bottom }];
  obj1.style = items4;
  obj2 = { style: tmp.expander };
  const items5 = [closure_13(closure_6, obj2), , , , ];
  const obj3 = { style: tmp.containerContent, children: null };
  let obj4 = { style: tmp.options, children: null };
  let obj5 = { style: tmp.optionsInner, children: null };
  const isForumLikeChannelResult = parentChannel.isForumLikeChannel();
  const tmp20 = null != threadSettingsDraft.parentMessageId;
  const items6 = [closure_13(closure_6, { style: tmp.threadIconContainer, children: closure_13(require("ThreadIcon").ThreadIcon, { size: "lg" }) }), closure_13(parentChannel(16620), { ref: ref1, chatInputRef: ref, threadSettingsDraft, threadNameError: tmp6[0], optional: tmp20 }), ];
  let tmp22Result = null;
  if (!isForumLikeChannelResult) {
    tmp22Result = null;
    if (null == threadSettingsDraft.parentMessageId) {
      tmp22Result = null;
      if (privateThreadMode !== tmp2(9305).PrivateThreadMode.Disabled) {
        const obj7 = { style: tmp.optionPrivateThread, children: null };
        let obj8 = { start: true, end: true, disabled: privateThreadMode !== tmp2(9305).PrivateThreadMode.Enabled, label: null, subLabel: null, value: null, onValueChange: null };
        const intl = tmp2(1114).intl;
        obj8.label = intl.string(tmp2(1114).t.F1zyvU);
        const intl2 = tmp2(1114).intl;
        obj8.subLabel = intl2.string(tmp2(1114).t.Wy5RIQ);
        obj8.value = tmp2(9305).getIsPrivate(threadSettingsDraft, privateThreadMode);
        obj8.onValueChange = function onValueChange(isPrivate) {
          const parentChannelId = closure_0.parentChannelId;
          if (null != parentChannelId) {
            const obj = { isPrivate };
            obj.changeThreadSettings(parentChannelId, obj);
          }
        };
        obj7.children = closure_13(tmp2(7201).TableSwitchRow, obj8);
        tmp22Result = closure_13(closure_6, obj7);
        const tmp2Result = tmp2(9305);
      }
    }
  }
  items6[2] = tmp22Result;
  obj5.children = items6;
  const items7 = [closure_14(closure_6, obj5), ];
  let tmp21Result = null;
  if (null != threadSettingsDraft.parentMessageId) {
    const obj9 = { style: tmp.parentMessageContainer, children: null };
    const obj10 = { style: tmp.border };
    const items8 = [closure_13(closure_6, obj10), ];
    const obj11 = { channelId: parentChannel.id, messageId: threadSettingsDraft.parentMessageId };
    items8[1] = closure_13(tmp2(16622).ThreadCreationStarterMessage, obj11);
    obj9.children = items8;
    tmp21Result = closure_14(closure_6, obj9);
  }
  items7[1] = tmp21Result;
  obj4.children = items7;
  obj3.children = closure_14(closure_6, obj4);
  items5[1] = closure_13(closure_7, obj3);
  tmp22Result = null;
  if (parentChannel.rateLimitPerUser > 0) {
    const obj12 = { style: tmp.typingWrapper, children: null };
    const obj13 = { channel: parentChannel, hasTypingText: false, slowmodeType: SlowmodeType.CreateThread };
    obj12.children = closure_13(tmp11(11983), obj13);
    tmp22Result = closure_13(closure_6, obj12);
  }
  items5[2] = tmp22Result;
  items5[3] = closure_13(parentChannel(11958), { ref, channel: parentChannel, onJumpToPresent, screenIndex: screenIndex.screenIndex, secondaryTextFieldRef: ref1, threadCreationCallback: callback1 });
  items5[4] = closure_13(parentChannel(12642), { channelId: parentChannel.id });
  obj1.children = items5;
  items3[1] = closure_14(closure_6, obj1);
  obj.children = items3;
  return closure_14(require("useAnalyticsLocations").AnalyticsLocationProvider, obj);
}
get_ActivityIndicator = fn(17);
({ View: metroRequire, ScrollView: closure_7, StyleSheet } = get_ActivityIndicator);
const DraftType = fn(4901).DraftType;
const SlowmodeType = fn(7687).SlowmodeType;
const Constants = fn(1074);
({ AbortCodes: c10, AnalyticEvents: closure_11, NOOP: closure_12 } = Constants);
const jsxProd = fn(21);
({ jsx: map1, jsxs: closure_14 } = jsxProd);
fn(4560);
let obj = { container: null, containerContent: null, expander: null, border: null, options: null, optionsInner: null, optionPrivateThread: null, threadIconContainer: null, typingWrapper: null, parentMessageContainer: null };
obj = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 };
obj.container = obj;
obj.containerContent = { flexGrow: 0 };
obj.expander = { flex: 1 };
const createStyles = { height: 1, backgroundColor: nativeDefault.colors.BORDER_SUBTLE, alignSelf: "stretch", marginBottom: 16 };
obj.border = createStyles;
obj.options = { marginHorizontal: 12 };
obj.optionsInner = { paddingBottom: nativeDefault.space.PX_16 };
let obj2 = { paddingBottom: nativeDefault.space.PX_16 };
obj.optionPrivateThread = { paddingTop: nativeDefault.space.PX_8 };
let size = { width: nativeDefault.space.PX_64, height: nativeDefault.space.PX_64, marginTop: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_16, borderRadius: nativeDefault.radii.xxl, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, justifyContent: "center", alignItems: "center" };
obj.threadIconContainer = size;
let obj3 = { paddingTop: nativeDefault.space.PX_8 };
obj.typingWrapper = { borderBottomWidth: StyleSheet.hairlineWidth, paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_4, justifyContent: "flex-end", flexDirection: "row", borderColor: nativeDefault.colors.CHAT_BORDER };
obj.parentMessageContainer = { marginBottom: 16 };
let closure_15 = createStyles.createStyles(obj);
let obj4 = { borderBottomWidth: StyleSheet.hairlineWidth, paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_4, justifyContent: "flex-end", flexDirection: "row", borderColor: nativeDefault.colors.CHAT_BORDER };
size = fn(2);
const result = size.fileFinishedImporting("modules/threads/native/components/thread_creation/CreateThreadView.tsx");

export const CreateThreadView = noop.memo((arg0) => {
  ({ channelId, screenIndex } = arg0);
  const tmp = useCreateThreadViewPropsDefault(channelId);
  let tmp2 = null;
  if (null != tmp) {
    const obj = { parentChannel: tmp.parentChannel, screenIndex, threadSettingsDraft: tmp.threadSettingsDraft };
    tmp2 = map1(CreateThreadViewInner, obj);
  }
  return tmp2;
});