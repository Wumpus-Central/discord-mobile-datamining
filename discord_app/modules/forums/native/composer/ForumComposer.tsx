// === Module 10385: ForumComposer ===

// Module 10385 (ForumComposer)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import KeyboardUIStore from "KeyboardUIStore" /* 1482 */;
import KeyboardTypes from "KeyboardTypes" /* 1610 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1897 */;
import dismissible_content from "dismissible_content" /* 1944 */;
import useKeyboardTypeDefault from "useKeyboardType" /* 4507 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4606 */;
import transitionToChannel from "transitionToChannel" /* 4650 */;
import useSafeAreaInsetsKeyboardAwareDefault from "useSafeAreaInsetsKeyboardAware" /* 7088 */;
import sanitizeThreadNameDefault from "sanitizeThreadName" /* 7381 */;
import MessageParser from "MessageParser" /* 7787 */;
import tracking_Tracking from "tracking/Tracking" /* 7872 */;
import DraftActionCreatorsDefault from "DraftActionCreators" /* 7882 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 8299 */;
import TagIcon from "TagIcon" /* 8990 */;
import useFocusHandlers from "useFocusHandlers" /* 10390 */;
import ForumGuidelinesActionSheet from "ForumGuidelinesActionSheet" /* 10398 */;
import openExpressionPickerActionSheet from "openExpressionPickerActionSheet" /* 10402 */;
import DismissibleActionSheet from "DismissibleActionSheet" /* 10759 */;
import ImageCarouselDefault from "ImageCarousel" /* 10764 */;
import MediaKeyboardUtils from "MediaKeyboardUtils" /* 10768 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4631 */;
import ThemeStore from "ThemeStore" /* 1182 */;
import DraftStore from "DraftStore" /* 4980 */;
import GuildMemberStore from "GuildMemberStore" /* 2022 */;
import PermissionStore from "PermissionStore" /* 4278 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2012 */;
import SlowmodeStore from "SlowmodeStore" /* 7792 */;
import UploadAttachmentStore from "UploadAttachmentStore" /* 4979 */;
import UserStore from "UserStore" /* 1372 */;

const require = globalThis.__r;

require = fn;
function Tags(tags) {
  tags = tags.tags;
  const tmp = closure_33();
  let tmp2 = null;
  if (0 !== tags.length) {
    let obj = { style: tmp.tags, children: null };
    let obj2 = { size: "sm", style: tmp.tagIcon };
    let items = [
      __initData7(TagIcon.TagIcon, obj2),
      tags.map((tag, index) => {
          let tmp2 = 0 !== index;
          if (tmp2) {
            const obj = { style: { width: 4 } };
            tmp2 = closure_1_29(closure_1_9, obj);
          }
          const obj2 = { children: null };
          const items = [tmp2, closure_1_29(require("AppliedForumTag").AppliedForumTagPill, { tag })];
          obj2.children = items;
          return closure_1_30(React.Fragment, obj2, tag.id);
        })
    ];
    obj.children = items;
    tmp2 = __initData8(React7, obj);
  }
  return tmp2;
}
function ActionBar(channel) {
  channel = channel.channel;
  ({ tags: importDefault, onTagsSave: dependencyMap, canPost } = channel);
  ({ submitting, onSubmit: _slicedToArray, focusLastInput: noop, isEdit } = channel);
  ({ onShowExpressionPicker, lastInput, onLayout } = channel);
  const tmp = closure_33();
  const items = [UploadAttachmentStore];
  const stateFromStores = channel(504).useStateFromStores(items, () => UploadAttachmentStore.getUploads(channel.id, DraftType.ChannelMessage));
  let obj = channel(504);
  const items1 = [PermissionStore];
  const stateFromStores1 = channel(504).useStateFromStores(items1, () => {
    let canResult = !isEdit;
    if (!isEdit) {
      canResult = PermissionStore.can(constants.ATTACH_FILES, channel);
    }
    return canResult;
  });
  const tmp6 = useKeyboardTypeDefault();
  closure_7 = tmp6;
  let isMediaChannelResult = channel.isMediaChannel();
  const tmp8 = tmp6 === channel(1610).KeyboardTypes.MEDIA;
  closure_8 = tmp8;
  if (!isMediaChannelResult) {
    let tmp9 = stateFromStores1;
    if (stateFromStores1) {
      tmp9 = stateFromStores.length > 0;
    }
    isMediaChannelResult = tmp9;
  }
  let tmp10 = null != channel.availableTags;
  if (tmp10) {
    const availableTags = channel.availableTags;
    let length;
    if (availableTags != null) {
      length = availableTags.length;
    }
    tmp10 = length > 0;
  }
  const obj3 = { onLayout, style: null, children: null };
  const items2 = [tmp.actionsContainer, { marginBottom: useSafeAreaInsetsKeyboardAwareDefault({ includeKeyboardHeight: true }).insets.bottom }];
  obj3.style = items2;
  if (isMediaChannelResult) {
    const obj4 = { attachments: stateFromStores, channelId: channel.id, highlightThumbnails: true };
    isMediaChannelResult = closure_29(ImageCarouselDefault, obj4);
  }
  const items3 = [isMediaChannelResult, ];
  const obj5 = { style: tmp.actions, children: null };
  if (!stateFromStores1) {
    const items4 = [stateFromStores1, , , ];
    if (tmp10) {
      const obj6 = { accessibilityLabel: null, style: null, IconComponent: null, onPress: null, foregroundRipple: true };
      const intl2 = tmp2(1115).intl;
      obj6.accessibilityLabel = intl2.string(tmp2(1115).t["112vVE"]);
      const items5 = [, ];
      ({ actionButton: arr9[0], mediaButton: arr9[1] } = tmp);
      obj6.style = items5;
      obj6.IconComponent = tmp2(8990).TagIcon;
      obj6.onPress = function onPress() {
        timestampProducer.dismiss();
        const obj2 = {
          parentChannel: channel,
          onSave(arg0) {
            dependencyMap(arg0);
            if (!tmp5) {
              closure_1_5();
            }
            tmp5 = closure_1_7 !== channel(1610).KeyboardTypes.SYSTEM && closure_1_7 !== channel(1610).KeyboardTypes.EXPRESSION;
          },
          title: null,
          tags: null,
          onClose: null
        };
        const obj = ActionSheetActionCreatorsDefault;
        const intl = util.intl;
        obj2.title = intl.string(util.t.HPu3kq);
        obj2.tags = tags;
        obj2.onClose = function onClose() {
          if (!tmp4) {
            closure_1_5();
          }
          tmp4 = closure_1_7 !== channel(1610).KeyboardTypes.SYSTEM && closure_1_7 !== channel(1610).KeyboardTypes.EXPRESSION;
        };
        obj.openLazy(asyncRequireImpl(11386, dependencyMap.paths), "ForumPostTagsActionSheet", obj2);
      };
      tmp10 = closure_29(tmp2(7484).HeaderActionButton, obj6);
    }
    items4[1] = tmp10;
    let tmp18 = lastInput === tmp2(10390).PostComposerInputs.CONTENT;
    if (tmp18) {
      const obj7 = { accessibilityLabel: null, style: null, IconComponent: null, onPress: null, foregroundRipple: true };
      const intl3 = tmp2(1115).intl;
      obj7.accessibilityLabel = intl3.string(tmp2(1115).t.iZ7Mz9);
      obj7.style = tmp.actionButton;
      obj7.IconComponent = tmp2(8886).ReactionIcon;
      obj7.onPress = onShowExpressionPicker;
      tmp18 = closure_29(tmp2(7484).HeaderActionButton, obj7);
    }
    items4[2] = tmp18;
    const obj8 = { style: tmp.postButtonWrapper, children: null };
    const intl4 = tmp2(1115).intl;
    const string = intl4.string;
    const t = tmp2(1115).t;
    if (isEdit) {
      let stringResult = string(t["R3BPH+"]);
    } else {
      stringResult = string(t.pIuQI6);
    }
    const obj9 = { text: stringResult, loading: submitting, disabled: null, icon: null, onPress: null };
    if (!submitting) {
      submitting = !canPost;
    }
    obj9.disabled = submitting;
    const obj10 = { size: "sm", color: nativeDefault.colors.WHITE };
    obj9.icon = closure_29(tmp2(5155).ChatIcon, obj10);
    obj9.onPress = function onPress() {
      if (canPost) {
        _slicedToArray({});
      }
    };
    obj8.children = closure_29(tmp2(5059).Button, obj9);
    items4[3] = closure_29(closure_9, obj8);
    obj5.children = items4;
    items3[1] = closure_30(closure_9, obj5);
    obj3.children = items3;
    return closure_30(closure_9, obj3);
  } else {
    const obj11 = { accessibilityLabel: null, style: null, IconComponent: null, onPress: null, foregroundRipple: true };
    let intl = tmp2(1115).intl;
    obj11.accessibilityLabel = intl.string(tmp2(1115).t.aDZSuz);
    const items6 = [, ];
    ({ actionButton: arr7[0], mediaButton: arr7[1] } = tmp);
    obj11.style = items6;
    if (tmp8) {
      let ImageIcon = tmp2(11384).KeyboardIcon;
    } else {
      ImageIcon = tmp2(5171).ImageIcon;
    }
    obj11.IconComponent = ImageIcon;
    obj11.onPress = function onPress() {
      if (closure_8) {
        noop();
      } else {
        const result = MediaKeyboardUtils.showSimpleMediaKeyboard(channel);
        timestampProducer.dismiss();
      }
      const result1 = tracking_Tracking.trackForumChannelMediaUploaderClicked({ isMobile: true });
    };
    closure_29(tmp2(7484).HeaderActionButton, obj11);
  }
  let obj2 = channel(504);
}
get_ActivityIndicator = fn(17);
({ Keyboard: metroRequire, Pressable: closure_7, StyleSheet, Text: closure_8, View: closure_9 } = get_ActivityIndicator);
const DraftType = fn(4980).DraftType;
const SlowmodeType = fn(7792).SlowmodeType;
let Constants = fn(1074);
({ AbortCodes: closure_21, MAX_CHANNEL_NAME_LENGTH: closure_22, Permissions: closure_23 } = Constants);
const ChannelFlags = fn(1965).ChannelFlags;
const ContentDismissActionType = fn(1955).ContentDismissActionType;
const ExpressionPickerViewType = fn(1218).ExpressionPickerViewType;
let closure_27 = fn(1114).OpenThreadAnalyticsLocations;
Constants = fn(1085);
({ NOOP: closure_28, Fonts } = Constants);
const jsxProd = fn(21);
({ jsx: closure_29, jsxs: closure_30, Fragment: items } = jsxProd);
const re32 = /(#"[^"]*"|[@#]\S+|:[\w+-]+:)/g;
const createStyles = fn(4639);
let obj2 = { container: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, position: "relative" }, scrollViewContentContainer: { paddingBottom: 16 }, avatarContainer: { height: 40 }, avatar: { marginRight: 12 }, titleInput: { padding: 8 }, titleInputText: null, contentInput: null, mentionText: null, postButtonWrapper: null, tags: null, tagIcon: null, editor: null, editorBody: null, usernameToChannel: null, channelName: null, actionsContainer: null, actions: null, actionButton: null, mediaButton: null, horizontalAutocomplete: null, nameError: null, messageError: null };
let obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, position: "relative" };
obj2.titleInputText = { minHeight: 40, height: "auto", fontFamily: Fonts.DISPLAY_SEMIBOLD, color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
let size = { width: "100%", height: "100%", padding: 0, lineHeight: 20, color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, textAlignVertical: "top" };
obj2.contentInput = size;
let obj4 = { minHeight: 40, height: "auto", fontFamily: Fonts.DISPLAY_SEMIBOLD, color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
obj2.mentionText = { color: nativeDefault.unsafe_rawColors.BRAND_500 };
obj2.postButtonWrapper = { marginLeft: "auto" };
obj2.tags = { flexDirection: "row", alignItems: "center", padding: 8 };
obj2.tagIcon = { marginRight: 8 };
obj2.editor = { flex: 1, flexDirection: "row", paddingHorizontal: 12, paddingTop: 8 };
obj2.editorBody = { width: "100%", flex: 1, flexDirection: "column", minHeight: 200 };
obj2.usernameToChannel = { flex: 1, flexDirection: "row", alignItems: "flex-end" };
obj2.channelName = { lineHeight: 20, flex: 1 };
let obj6 = {};
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj6.borderTopWidth = StyleSheet.hairlineWidth;
obj6.borderTopColor = nativeDefault.colors.BORDER_SUBTLE;
obj6.backgroundColor = nativeDefault.colors.BACKGROUND_BASE_LOW;
obj6.top = undefined;
obj2.actionsContainer = obj6;
obj2.actions = { flex: 1, flexDirection: "row", alignItems: "center", padding: 8, width: "100%" };
const size1 = { height: 40, minHeight: 40, maxHeight: 40, width: 40, minWidth: 40, maxWidth: 40, borderRadius: 20, color: nativeDefault.colors.TEXT_DEFAULT, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL, marginLeft: 0, marginRight: 0, overflow: "hidden" };
obj2.actionButton = size1;
obj2.mediaButton = { marginRight: 8 };
const rect = { position: "absolute", bottom: 0, left: 0, right: 0, zIndex: 100, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
obj2.horizontalAutocomplete = rect;
obj2.nameError = { marginBottom: 16, marginLeft: 16, marginRight: 16 };
obj2.messageError = { marginTop: 8 };
let closure_33 = createStyles.createStyles(obj2);
let __initData = { code: "function ForumComposerTsx1({contentOffset:{y:y}}){const{scrollTopValue}=this.__closure;return scrollTopValue.set(y);}" };
size = fn(2);
let result = size.fileFinishedImporting("modules/forums/native/composer/ForumComposer.tsx");

export default function ForumComposer(parentChannel) {
  parentChannel = parentChannel.parentChannel;
  _require = parentChannel;
  const thread = parentChannel.thread;
  const threadSettingsDraft = parentChannel.threadSettingsDraft;
  const onClose = parentChannel.onClose;
  const message = parentChannel.message;
  const isEdit = parentChannel.isEdit;
  let stateFromStores5;
  let theme;
  closure_12 = undefined;
  c13 = undefined;
  value = undefined;
  closure_15 = undefined;
  let str4;
  closure_17 = undefined;
  let appliedTags;
  let first1;
  let currentUser;
  c21 = undefined;
  maxLength = undefined;
  let ref1;
  let sharedValue;
  let callback3;
  let memo;
  let memo1;
  let callback4;
  let createForumPost;
  let callback5;
  c31 = undefined;
  focusLastInput = undefined;
  let blurLastInput;
  __initData = undefined;
  let onPressEmoji;
  let onPressGIF;
  let onBackspace;
  c38 = undefined;
  let obj23;
  let memo2;
  function MediaPostMultipleThumbnailActionSheetImporter() {
    return channel(threadSettingsDraft[52])(threadSettingsDraft[51], threadSettingsDraft.paths);
  }
  const tmp = blurLastInput();
  closure_6 = tmp;
  const analyticsLocations = thread(threadSettingsDraft[22])().analyticsLocations;
  const ref = isEdit.useRef(null);
  let items = [currentUser];
  const stateFromStores = require("initialize").useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    if (currentUser == null) {
      currentUser = null;
    }
    return currentUser;
  }, []);
  let obj2 = require("initialize");
  const items1 = [stateFromStores5];
  const stateFromStores1 = require("initialize").useStateFromStores(items1, () => stateFromStores5.useReducedMotion);
  let obj3 = require("initialize");
  const items2 = [value];
  const stateFromStores2 = require("initialize").useStateFromStores(items2, () => GuildMemberStore.getSelfMember(channel.guild_id));
  let obj4 = require("initialize");
  const items3 = [closure_12];
  const str = require("initialize").useStateFromStores(items3, () => DraftStore.getDraft(channel.id, DraftType.ChannelMessage));
  let obj5 = require("initialize");
  const items4 = [theme];
  const stateFromStores3 = require("initialize").useStateFromStores(items4, () => channel(threadSettingsDraft[24]).isThemeDark(theme.theme));
  const unsafe_rawColors = thread(threadSettingsDraft[21]).unsafe_rawColors;
  const tmp10 = stateFromStores3 ? unsafe_rawColors.PRIMARY_330 : unsafe_rawColors.PRIMARY_460;
  let obj6 = require("initialize");
  const items5 = [closure_17];
  const stateFromStores4 = require("initialize").useStateFromStores(items5, () => SlowmodeStore.getSlowmodeCooldownGuess(channel.id, SlowmodeType.CreateThread));
  const tmp5Result = require("initialize");
  const items6 = [first1];
  stateFromStores5 = require("initialize").useStateFromStores(items6, () => UploadAttachmentStore.getUploads(channel.id, DraftType.ChannelMessage));
  const tmp12 = thread(threadSettingsDraft[25])();
  theme = tmp12;
  const tmp13 = thread(threadSettingsDraft[26])();
  closure_12 = tmp13;
  const tmp14 = thread(threadSettingsDraft[27])(parentChannel);
  const tmp5Result14 = require("initialize");
  [tmp17, c13] = message(isEdit.useState(false), 2);
  if (isEdit) {
    let name;
    if (thread != null) {
      name = thread.name;
    }
    let str2 = name;
  } else if (threadSettingsDraft != null) {
    str2 = threadSettingsDraft.name;
  }
  if (str2 == null) {
    str2 = "";
  }
  const tmp15Result = message(isEdit.useState(str2), 2);
  value = tmp15Result[0];
  closure_15 = tmp15Result[1];
  const tmp16 = message(isEdit.useState(false), 2);
  const channelTemplate = require("ForumHooks").useChannelTemplate(parentChannel);
  let str3 = "";
  if (isEdit) {
    str3 = "";
    if (null != message) {
      str3 = "";
      if (null != thread) {
        str3 = tmp2(tmp3[29]).unparse(message.content, thread.id);
        let tmp2Result = tmp2(tmp3[29]);
      }
    }
  }
  if (!isEdit) {
    let tmp22 = channelTemplate;
    if (null != str) {
      tmp22 = channelTemplate;
      if ("" !== str.trim()) {
        tmp22 = str;
      }
    }
    str3 = tmp22;
  }
  const tmp15Result7 = message(isEdit.useState(str3), 2);
  str4 = tmp15Result7[0];
  closure_17 = tmp24;
  const tmp5Result15 = require("ForumHooks");
  appliedTags = require("ForumTagHooks").useAppliedTags(thread);
  const tmp15Result8 = message(isEdit.useState(() => {
    let found = appliedTags;
    let availableTags = channel.availableTags;
    let map;
    if (!isEdit) {
      appliedTags = undefined;
      if (threadSettingsDraft != null) {
        appliedTags = threadSettingsDraft.appliedTags;
      }
      if (null != appliedTags) {
        if (0 !== appliedTags.size) {
          if (availableTags == null) {
            availableTags = [];
          }
          map = new Map(availableTags.map((id) => {
            const items = [id.id, id];
            return items;
          }));
          const _Array = Array;
          const mapped = Array.from(appliedTags).map((item) => map.get(item));
          found = mapped.filter((item) => null != item);
          const arr = Array.from(appliedTags);
        }
      }
      found = [];
    }
    return found;
  }), 2);
  first1 = tmp15Result8[0];
  currentUser = tmp15Result8[1];
  const tmp5Result16 = require("ForumTagHooks");
  [tmp28, c21] = message(isEdit.useState(null), 2);
  const tmp15Result10 = message(isEdit.useState(null), 2);
  maxLength = tmp15Result10[1];
  let colorString;
  if (stateFromStores2 != null) {
    colorString = stateFromStores2.colorString;
  }
  if (colorString == null) {
    colorString = null;
  }
  let colorStrings;
  if (stateFromStores2 != null) {
    colorStrings = stateFromStores2.colorStrings;
  }
  if (colorStrings == null) {
    colorStrings = null;
  }
  let str5;
  if (stateFromStores2 != null) {
    str5 = stateFromStores2.nick;
  }
  if (str5 == null) {
    str5 = tmp2(tmp3[31]).getName(stateFromStores);
    const tmp2Result3 = tmp2(tmp3[31]);
  }
  if (str5 == null) {
    str5 = "";
  }
  ref1 = obj.useRef(null);
  const insets = tmp2(tmp3[32])({ includeKeyboardHeight: true }).insets;
  const callback = obj.useCallback(() => {
    const current = ref1.current;
    if (current != null) {
      current.focus();
    }
  }, []);
  const tmp15Result9 = message(isEdit.useState(null), 2);
  sharedValue = require("ReanimatedRexport").useSharedValue(0);
  const tmp5Result17 = require("ReanimatedRexport");
  class D {
    constructor(arg0) {
      return closure_24.set(parentChannel.contentOffset.y);
    }
  }
  D.__closure = { scrollTopValue: sharedValue };
  D.__workletHash = 16880842576840;
  D.__initData = __initData;
  const items7 = [isEdit, parentChannel.id];
  const tmp5Result18 = require("ReanimatedRexport");
  const items8 = [isEdit, parentChannel.id];
  const callback1 = obj.useCallback((name) => {
    if (!isEdit) {
      const obj2 = { name };
      DraftActionCreatorsDefault.changeThreadSettings(channel.id, obj2);
    }
    closure_15(name);
  }, items7);
  const items9 = [onClose];
  const callback2 = obj.useCallback((arr) => {
    currentUser(arr);
    if (!isEdit) {
      const obj2 = { appliedTags: null };
      const _Set = Set;
      const set = new Set(arr.map((id) => id.id));
      obj2.appliedTags = set;
      DraftActionCreatorsDefault.changeThreadSettings(channel.id, obj2);
    }
  }, items8);
  callback3 = obj.useCallback((channel) => {
    onClose(true);
    transitionToChannel.transitionToThread(channel, { navigationReplace: true, source: memo1.FORUM });
  }, items9);
  const items10 = [first1];
  memo = obj.useMemo(() => new Set(first1.map((id) => id.id)), items10);
  const items11 = [appliedTags];
  memo1 = obj.useMemo(() => new Set(appliedTags.map((id) => id.id)), items11);
  _require = onClose((content) => {
    c2 = 0;
    c3 = 0;
    return (function*(arg0) {
      if (v1 === 2) {
        v1 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          v1 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              v1 = 3;
              throw value;
            } else if (arg0 === 2) {
              v1 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              if (null == tmp2) {
                v1 = 3;
              } else {
                let tmp6 = null != message;
                if (tmp6) {
                  tmp6 = message.content !== content;
                }
                if (tmp6) {
                  const obj7 = { content };
                  thread(threadSettingsDraft[36]).editMessage(tmp2.id, message.id, obj7);
                  const obj3 = thread(threadSettingsDraft[36]);
                }
                if (!obj5.isEqual(memo1, memo)) {
                  const _Array = Array;
                  c2 = 1;
                  v1 = 1;
                  const obj9 = { value: thread(threadSettingsDraft[38]).updateForumPostTags(tmp2.id, Array.from(memo)), done: false };
                  return obj9;
                }
                obj5 = thread(threadSettingsDraft[37]);
              }
              callback3(tmp2);
            }
          } else {
            if (1 === tmp5) {
              if (arg0 === 1) {
                v1 = 3;
                throw value;
              } else if (arg0 === 2) {
                v1 = 3;
                const obj10 = { value, done: true };
                return obj10;
              }
            } else if (arg0 === 1) {
              v1 = 3;
              throw value;
            } else if (arg0 === 2) {
              v1 = 3;
              const obj = { value, done: true };
              return obj;
            }
            if (str4.getChannelId() === tmp2.id) {
              v1(true);
            }
          }
          if (tmp2.name !== name) {
            const obj11 = { name };
            c2 = 2;
            v1 = 1;
            const obj12 = { value: thread(threadSettingsDraft[39]).saveChannel(tmp2.id, obj11), done: false };
            return obj12;
          }
        } catch (tmp37) {
          v1 = tmp;
          throw tmp37;
        }
      }
    })();
  });
  const items12 = [thread, message, memo1, memo, value, callback3, onClose];
  callback4 = obj.useCallback(function() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }, items12);
  let name1;
  if (threadSettingsDraft != null) {
    name1 = threadSettingsDraft.name;
  }
  const trimmed = str4.trim();
  let tmp46 = "" === channelTemplate;
  if (!tmp46) {
    tmp46 = trimmed !== channelTemplate;
  }
  if (tmp46) {
    tmp46 = trimmed.length > 0 || tmp45;
    const tmp47 = trimmed.length > 0 || tmp45;
  }
  let tmp48 = !isEdit;
  if (!isEdit) {
    tmp48 = tmp44;
  }
  if (tmp48) {
    tmp48 = tmp46;
  }
  if (!tmp48) {
    let tmp49 = isEdit;
    if (isEdit) {
      let name2;
      if (thread != null) {
        name2 = thread.name;
      }
      let tmp51 = value !== name2;
      if (!tmp51) {
        let content;
        if (message != null) {
          content = message.content;
        }
        tmp51 = trimmed !== content;
      }
      if (!tmp51) {
        tmp51 = !tmp2(tmp3[37]).isEqual(memo1, memo);
        const tmp2Result4 = tmp2(tmp3[37]);
      }
      tmp49 = tmp51;
    }
    tmp48 = tmp49;
  }
  const animatedScrollHandler = require("ReanimatedRexport").useAnimatedScrollHandler(D);
  const tmp41 = onClose;
  tmp44 = null != name1 && threadSettingsDraft.name.length > 0;
  tmp45 = stateFromStores5.length > 0;
  createForumPost = require("useCreateThread").useCreateForumPost({ parentChannel, threadSettings: threadSettingsDraft, appliedTags: memo, onThreadCreated: callback3 });
  _require = tmp41(function*(arg0) {
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp7 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj7 = { value, done: true };
            return obj7;
          } else {
            closure_2 = tmp4;
            closure_1 = tmp8;
            let stickerId;
            stickerId = channel.stickerId;
            let content;
            c5 = 1;
            c6 = 1;
            return { value: "PX_16", done: true };
          }
        } else {
          if (1 === tmp8) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              const obj8 = { value, done: true };
              return obj8;
            } else {
              if (channel.hasFlag(sharedValue.REQUIRE_TAG)) {
                if (0 === length.length) {
                  closure_1_22(channel(threadSettingsDraft[41]).makeEmptyTagsError());
                  const obj9 = channel(threadSettingsDraft[41]);
                }
                c6 = 3;
              }
              _undefined(true);
              if (c5) {
                let tmp74 = closure_1;
              } else {
                tmp74 = channel;
              }
              content = thread(threadSettingsDraft[29]).parse(tmp74, str4).content;
              c4 = 2;
              _undefined2(null);
              closure_1_22(null);
              if (c5) {
                c5 = 4;
                c6 = 1;
                const obj10 = { value: callback4(content), done: false };
                return obj10;
              } else {
                let tmp90;
                if (null != stickerId) {
                  const items = [stickerId];
                  tmp90 = items;
                }
                c5 = 5;
                c6 = 1;
                const obj11 = { value: createForumPost(content, tmp90, stateFromStores5), done: false };
                return obj11;
              }
              const obj6 = thread(threadSettingsDraft[29]);
            }
          } else if (2 !== tmp8) {
            if (3 === tmp8) {
              c4 = 1;
              closure_129_2 = closure_3;
              const body = closure_129_2.body;
              let code;
              if (body != null) {
                code = body.code;
              }
              if (null != code) {
                const body3 = closure_129_2.body;
                let code1;
                if (body3 != null) {
                  code1 = body3.code;
                }
                if (code1 === _undefined2.AUTOMOD_TITLE_BLOCKED) {
                  _undefined2(channel(threadSettingsDraft[41]).makeAutomodViolationError(closure_129_2.body, channel));
                  const obj5 = channel(threadSettingsDraft[41]);
                } else {
                  const body4 = closure_129_2.body;
                  let code2;
                  if (body4 != null) {
                    code2 = body4.code;
                  }
                  if (code2 === _undefined2.AUTOMOD_MESSAGE_BLOCKED) {
                    closure_1_22(channel(threadSettingsDraft[41]).makeAutomodViolationError(closure_129_2.body, channel));
                    const obj4 = channel(threadSettingsDraft[41]);
                  } else {
                    const body5 = closure_129_2.body;
                    let code3;
                    if (body5 != null) {
                      code3 = body5.code;
                    }
                    let tmp29 = code3 === _undefined2.INVALID_FORM_BODY;
                    if (tmp29) {
                      const body2 = closure_129_2.body;
                      let name;
                      if (body2 != null) {
                        const errors = body2.errors;
                        if (errors != null) {
                          name = errors.name;
                        }
                      }
                      tmp29 = null != name;
                    }
                    if (tmp29) {
                      _undefined2(channel(threadSettingsDraft[41]).makeApiNameValidationError());
                      const obj3 = channel(threadSettingsDraft[41]);
                    }
                  }
                }
              }
            } else {
              if (4 === tmp8) {
                if (arg0 === 1) {
                  c6 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c4 = 0;
                  _undefined(false);
                  c6 = 3;
                  const obj12 = { value, done: true };
                  return obj12;
                }
              } else if (arg0 === 1) {
                c6 = 3;
                throw value;
              } else if (arg0 === 2) {
                c4 = 0;
                _undefined(false);
                c6 = 3;
                const obj = { value, done: true };
                return obj;
              }
              c4 = 1;
            }
            c4 = 0;
            _undefined(false);
          }
          c4 = 0;
          _undefined(false);
          throw closure_3;
        }
      } catch (tmp103) {
        closure_3 = tmp103;
        if (tmp5 === c4) {
          c6 = tmp3;
          throw tmp103;
        } else if (tmp2 === tmp105) {
          c5 = tmp;
        } else {
          c5 = tmp3;
        }
      }
    }
  });
  const items13 = [parentChannel, first1.length, isEdit, thread, str4, callback4, createForumPost, stateFromStores5];
  callback5 = obj.useCallback(function() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }, items13);
  const items14 = [parentChannel, stateFromStores4, tmp13, stateFromStores5, callback5, str4];
  const items15 = [tmp15Result7[1], parentChannel.id];
  const callback6 = obj.useCallback((stickerId) => {
    stickerId = stickerId.stickerId;
    if (stateFromStores4 <= 0) {
      if (str4.length > closure_12) {
        const obj2 = { title: null, body: null };
        const intl4 = channel(threadSettingsDraft[43]).intl;
        obj2.title = intl4.string(channel(threadSettingsDraft[43]).t.l8rYLt);
        const intl5 = channel(threadSettingsDraft[43]).intl;
        const obj3 = { currentLength: str4.length, maxLength: tmp40 };
        obj2.body = intl5.formatToPlainString(channel(threadSettingsDraft[43]).t.FfjF15, obj3);
        thread(threadSettingsDraft[42]).show(obj2);
        const obj4 = thread(threadSettingsDraft[42]);
      } else {
        const RESTRICTIONS = channel(threadSettingsDraft[44]).RESTRICTIONS;
        const iter = RESTRICTIONS[Symbol.iterator]();
        while (iter !== undefined) {
          let checkResult = iter.next().check(str4, stickerId, null != stickerId.getGuildId());
          if (false !== checkResult) {
            let obj = thread(threadSettingsDraft[42]);
            let obj5 = { title: null, body: null, confirmText: null, onConfirm: null, cancelText: null };
            let intl = channel(threadSettingsDraft[43]).intl;
            obj5.title = intl.string(channel(threadSettingsDraft[43]).t.mY3Y38);
            obj5.body = checkResult.body;
            let intl2 = channel(threadSettingsDraft[43]).intl;
            obj5.confirmText = intl2.string(channel(threadSettingsDraft[43]).t.KJnHq3);
            obj5.onConfirm = function onConfirm() {
              callback5({ stickerId });
            };
            let intl3 = channel(threadSettingsDraft[43]).intl;
            obj5.cancelText = intl3.string(channel(threadSettingsDraft[43]).t.fsBWmS);
            let showResult1 = obj.show(obj5);
            iter.return();
          }
        }
        const obj6 = { stickerId };
        callback5(obj6);
      }
    }
  }, items14);
  const callback7 = obj.useCallback((draft) => {
    DraftActionCreatorsDefault.changeDraft(channel.id, draft, DraftType.ChannelMessage);
    closure_17(draft);
  }, items15);
  const tmp5Result19 = require("useCreateThread");
  const focusHandlers = require("useFocusHandlers").useFocusHandlers({ titleInput: ref, contentInput: ref1 });
  ({ setFocusedInput: c31, focusLastInput } = focusHandlers);
  blurLastInput = focusHandlers.blurLastInput;
  let obj7 = { start: str4.length, end: null };
  const tmp5Result20 = require("useFocusHandlers");
  [tmp59, c34] = message(isEdit.useState({ start: str4.length, end: null }), 2);
  const callback8 = obj.useCallback((nativeEvent) => {
    const merged = Object.assign(nativeEvent.nativeEvent.selection);
    _undefined2({});
  }, []);
  const callback9 = obj.useCallback((arg0) => {
    ({ start: closure_0, end: thread } = arg0);
    let current;
    if (obj.isAndroid()) {
      current = ref1.current;
      if (null != current) {
        const _setTimeout = setTimeout;
        const timerId = setTimeout(() => {
          let tmp3 = thread;
          if (thread == null) {
            tmp3 = channel;
          }
          current.setSelection(channel, tmp3);
        });
      }
    }
    obj = PlatformUtils;
  }, []);
  const tmp15Result11 = message(isEdit.useState({ start: str4.length, end: null }), 2);
  onPressEmoji = require("ExpressionPickerHandlers").usePressEmojiHandler({ selection: tmp59, draftContent: str4, handleTextChange: callback7, focusTextInput: callback, setSelection: callback9 });
  const tmp5Result21 = require("ExpressionPickerHandlers");
  onPressGIF = require("ExpressionPickerHandlers").usePressGIFHandler({ selection: tmp59, draftContent: str4, handleTextChange: callback7, focusTextInput: callback, setSelection: callback9 });
  const tmp5Result22 = require("ExpressionPickerHandlers");
  const tmp5Result23 = require("usePressHorizontalAutocompleteItemHandler");
  const pressHorizontalAutocompleteItemHandler = require("usePressHorizontalAutocompleteItemHandler").usePressHorizontalAutocompleteItemHandler({ draftContent: str4, handleTextChange: callback7, setSelection: callback9, channel: parentChannel });
  onBackspace = require("useBackspaceHandler").useBackspaceHandler({ selection: tmp59, draftContent: str4, handleTextChange: callback7 });
  const tmp5Result24 = require("useBackspaceHandler");
  [tmp64, c38] = message(isEdit.useState(0), 2);
  obj23 = parentChannel;
  const callback10 = obj.useCallback((nativeEvent) => {
    _undefined3(nativeEvent.nativeEvent.layout.height);
  }, []);
  if (isEdit) {
    obj23 = thread;
  }
  const items16 = [obj23];
  memo2 = obj.useMemo(() => {
    let parserState = null;
    if (null != obj23) {
      parserState = MessageParser.createParserState(tmp);
    }
    return parserState;
  }, items16);
  const items17 = [str4, obj23, memo2, tmp.mentionText];
  const memo3 = obj.useMemo(() => {
    if (0 !== str4.length) {
      if (null != obj23) {
        if (null != memo2) {
          const parts = str4.split(re32);
          let mapped = null;
          if (1 !== parts.length) {
            mapped = parts.map((children, index) => {
              if (index % 2 === 1) {
                if (obj.parse(obj23, children, memo2).content !== children) {
                  const obj2 = { style: mentionText.mentionText, children };
                  return createForumPost(stateFromStores, obj2, index);
                }
                obj = thread(threadSettingsDraft[29]);
              }
              return createForumPost(isEdit.Fragment, { children }, index);
            });
          }
          return mapped;
        }
      }
    }
    return null;
  }, items17);
  if (null == obj23) {
    return null;
  } else {
    let obj8 = { content: value };
    const renderErrorResult = tmp5(tmp3[41]).renderError(tmp28, obj8);
    const tmp5Result25 = tmp5(tmp3[41]);
    let obj9 = { content: str4, tags: first1 };
    const renderErrorResult1 = tmp5(tmp3[41]).renderError(tmp15Result10[0], obj9);
    if (obj23.isMediaChannel()) {
      const items18 = [tmp5(tmp3[50]).DismissibleContent.MEDIA_CHANNEL_MULTIPLE_THUMBNAIL_NOTICE];
      let items19 = items18;
    } else {
      items19 = [];
    }
    let obj10 = { style: null, children: null };
    const items20 = [tmp.container, ];
    let obj11 = { paddingTop: insets.top, paddingBottom: insets.bottom + tmp64 };
    items20[1] = obj11;
    obj10.style = items20;
    let obj12 = {
      channel: parentChannel,
      height: 44,
      onClose,
      onGuidelinesPress() {
          blurLastInput();
          const result = ForumGuidelinesActionSheet.openForumGuidelinesActionSheet({
            channel,
            onClose() {
              focusLastInput();
            }
          });
        },
      submitting: tmp17,
      title: tmp68
    };
    const items21 = [createForumPost(tmp2(tmp3[53]), obj12), ];
    const obj13 = { onScroll: animatedScrollHandler, scrollEventThrottle: 16, keyboardShouldPersistTaps: "always", nestedScrollEnabled: false, contentContainerStyle: tmp.scrollViewContentContainer, keyboardDismissMode: "on-drag", children: null };
    const obj14 = { ref, style: null, inputTextStyle: null, showTopContainer: false, placeholder: null, placeholderTextColor: null, large: true, multiline: true, value: null, clearButtonVisibility: null, maxLength: null, onChange: null, onBlur: null, onFocus: null, autoFocus: true, autoCorrect: true, textContentType: "none", returnKeyType: "next", onNext: null };
    ({ titleInput: obj28.style, titleInputText: obj28.inputTextStyle } = tmp);
    let intl = tmp5(tmp3[43]).intl;
    obj14.placeholder = intl.string(tmp5(tmp3[43]).t.lU4dDS);
    obj14.placeholderTextColor = tmp10;
    obj14.value = value;
    obj14.clearButtonVisibility = tmp5(tmp3[56]).ClearButtonVisibility.NEVER;
    obj14.maxLength = maxLength;
    obj14.onChange = callback1;
    obj14.onBlur = function onBlur() {
      if (!isEdit) {
        let name;
        if (threadSettingsDraft != null) {
          name = threadSettingsDraft.name;
        }
        if (null != name) {
          let name1;
          if (threadSettingsDraft != null) {
            name1 = threadSettingsDraft.name;
          }
          const tmp6Result = sanitizeThreadNameDefault(name1, true);
          let name2;
          if (threadSettingsDraft != null) {
            name2 = threadSettingsDraft.name;
          }
          if (tmp6Result !== name2) {
            const obj = { name: tmp6Result };
            DraftActionCreatorsDefault.changeThreadSettings(channel.id, obj);
            closure_15(tmp6Result);
            const tmp4Result = DraftActionCreatorsDefault;
          }
        }
      }
    };
    obj14.onFocus = function onFocus() {
      if (!tmp4) {
        const obj = { type: KeyboardTypes.KeyboardTypes.SYSTEM, context: { keyboardWillOpen: true } };
        KeyboardUIStore.setKeyboardType(obj);
        const tmp2Result = KeyboardUIStore;
      }
      _undefined(useFocusHandlers.PostComposerInputs.TITLE);
      tmp4 = closure_11 !== KeyboardTypes.KeyboardTypes.MEDIA && closure_11 !== KeyboardTypes.KeyboardTypes.EXPRESSION;
    };
    obj14.onNext = callback;
    const items22 = [createForumPost(tmp5(tmp3[55]).FormInput, obj14), , ];
    let tmp71Result = null;
    if (null != renderErrorResult) {
      const obj15 = { style: tmp.nameError, children: renderErrorResult };
      tmp71Result = tmp71(tmp2(tmp3[60]), obj15);
    }
    items22[1] = tmp71Result;
    const obj16 = { style: tmp.editor, children: null };
    let tmp71Result4 = null != stateFromStores;
    if (tmp71Result4) {
      const obj17 = {
        style: tmp.avatarContainer,
        onPress() {
              const obj = { userId: stateFromStores.id, channelId: obj23.id, messageId: null, sourceAnalyticsLocations: null };
              let id;
              if (message != null) {
                id = message.id;
              }
              obj.messageId = id;
              obj.sourceAnalyticsLocations = analyticsLocations;
              return showUserProfileActionSheetDefault(obj);
            },
        children: null
      };
      const obj18 = { animate: !stateFromStores1, style: tmp.avatar, user: stateFromStores, guildId: null, avatarDecoration: null, accessibilityLabel: null };
      let guildId;
      if (parentChannel != null) {
        guildId = parentChannel.getGuildId();
      }
      obj18.guildId = guildId;
      obj18.avatarDecoration = stateFromStores.avatarDecoration;
      let intl2 = tmp5(tmp3[43]).intl;
      const obj19 = { nickname: str5 };
      obj18.accessibilityLabel = intl2.formatToPlainString(tmp5(tmp3[43]).t.LvU3nj, obj19);
      obj17.children = tmp71(tmp5(tmp3[56]).Avatar, obj18);
      tmp71Result4 = tmp71(analyticsLocations, obj17);
    }
    const items23 = [tmp71Result4, ];
    const obj20 = { style: tmp.editorBody, children: null };
    const obj21 = { style: tmp.usernameToChannel, accessibilityLabel: null, children: null };
    let intl3 = tmp5(tmp3[43]).intl;
    const obj22 = { nickname: str5, channelName: tmp14 };
    obj21.accessibilityLabel = intl3.formatToPlainString(tmp5(tmp3[43]).t["QicUf+"], obj22);
    const obj24 = { name: str5, color: colorString, colors: colorStrings };
    const items24 = [createForumPost(tmp5(tmp3[62]).RoleLabel, obj24), ];
    const obj25 = { color: "text-default", variant: "text-xs/medium", style: tmp.channelName, lineClamp: 1, children: null };
    let intl4 = tmp5(tmp3[43]).intl;
    const obj26 = { channelName: tmp14 };
    const items25 = [" ", intl4.format(tmp5(tmp3[43]).t["6Y1Kev"], obj26)];
    obj25.children = items25;
    items24[1] = callback5(tmp5(tmp3[63]).Text, obj25);
    obj21.children = items24;
    const items26 = [callback5(stateFromStores4, obj21), , ];
    let tmp71Result5 = null;
    if (null != renderErrorResult1) {
      const obj27 = { style: tmp.messageError, children: renderErrorResult1 };
      tmp71Result5 = tmp71(tmp2(tmp3[60]), obj27);
    }
    items26[1] = tmp71Result5;
    const obj29 = { ref: ref1, style: tmp.contentInput, multiline: true, scrollEnabled: false, placeholder: null, placeholderTextColor: null, onChangeText: null, onSelectionChange: null, onFocus: null, showSoftInputOnFocus: null, children: null };
    let intl5 = tmp5(tmp3[43]).intl;
    obj29.placeholder = intl5.string(tmp5(tmp3[43]).t["8IPnv1"]);
    obj29.placeholderTextColor = tmp10;
    obj29.onChangeText = callback7;
    obj29.onSelectionChange = callback8;
    obj29.onFocus = function onFocus() {
      if (closure_11 === KeyboardTypes.KeyboardTypes.MEDIA) {
        const obj = { type: KeyboardTypes.KeyboardTypes.SYSTEM, context: { keyboardWillOpen: true } };
        KeyboardUIStore.setKeyboardType(obj);
        const tmpResult = KeyboardUIStore;
      }
      _undefined(useFocusHandlers.PostComposerInputs.CONTENT);
    };
    obj29.showSoftInputOnFocus = tmp12 !== tmp5(tmp3[58]).KeyboardTypes.EXPRESSION;
    let tmp71Result6 = str4;
    if (null != memo3) {
      const obj30 = { children: memo3 };
      tmp71Result6 = tmp71(stateFromStores, obj30);
    }
    const obj31 = { children: null };
    obj29.children = tmp71Result6;
    items26[2] = createForumPost(tmp5(tmp3[56]).TextInput, obj29);
    obj20.children = items26;
    items23[1] = callback5(stateFromStores4, obj20);
    obj16.children = items23;
    items22[2] = callback5(stateFromStores4, obj16);
    obj13.children = items22;
    const items27 = [callback5(tmp2(tmp3[33]).ScrollView, obj13), , , , ];
    const obj32 = { tags: first1 };
    items27[1] = createForumPost(onPressEmoji, obj32);
    const obj33 = {
      channel: parentChannel,
      tags: first1,
      onTagsSave: callback2,
      canPost: tmp48,
      submitting: tmp17,
      onSubmit: callback6,
      onShowExpressionPicker() {
          timestampProducer.dismiss();
          const obj2 = { channelId: channel.id, onPressEmoji, onPressSticker, onPressGIF, onBackspace, visibleTabs: null };
          const items = [, ];
          ({ EMOJI: arr[0], GIF: arr[1] } = ExpressionPickerViewType);
          obj2.visibleTabs = items;
          const result = openExpressionPickerActionSheet.openExpressionPickerActionSheet(obj2);
        },
      focusLastInput,
      lastInput: focusHandlers.focusedInput,
      isEdit,
      onLayout: callback10
    };
    items27[2] = createForumPost(onPressGIF, obj33);
    const obj34 = { style: null, onPressAutocompleteItem: null, text: null, selection: null, channel: null };
    const items28 = [tmp.horizontalAutocomplete, ];
    const obj35 = { bottom: insets.bottom };
    items28[1] = obj35;
    obj34.style = items28;
    obj34.onPressAutocompleteItem = pressHorizontalAutocompleteItemHandler;
    obj34.text = str4;
    obj34.selection = tmp59;
    obj34.channel = obj23;
    items27[3] = createForumPost(tmp2(tmp3[65]), obj34);
    const obj36 = {
      contentTypes: items19,
      children(markAsDismissed) {
          markAsDismissed = markAsDismissed.markAsDismissed;
          let tmp3 = null;
          if (markAsDismissed.visibleContent === dismissible_content.DismissibleContent.MEDIA_CHANNEL_MULTIPLE_THUMBNAIL_NOTICE) {
            const obj = {
              markAsDismissed() {
                  return markAsDismissed(callback3.UNKNOWN);
                },
              actionSheetKey: "ThumbnailBottomSheet",
              importer: MediaPostMultipleThumbnailActionSheetImporter
            };
            tmp3 = __initData7(DismissibleActionSheet.DismissibleActionSheet, obj);
          }
          return tmp3;
        }
    };
    items27[4] = createForumPost(tmp2(tmp3[66]), obj36);
    obj31.children = items27;
    items21[1] = callback5(c31, obj31);
    obj10.children = items21;
    return callback5(stateFromStores4, obj10);
  }
  const tmp15Result12 = message(isEdit.useState(0), 2);
};