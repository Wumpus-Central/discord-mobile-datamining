// === Module 10074: ForumComposer ===

// Module 10074 (ForumComposer)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import ThreadConstants from "ThreadConstants" /* 1125 */;
import intl6 from "intl" /* 1126 */;
import ExpressionPickerConstants from "ExpressionPickerConstants" /* 1229 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import KeyboardUIStore from "KeyboardUIStore" /* 1488 */;
import KeyboardTypes from "KeyboardTypes" /* 1616 */;
import asyncRequire from "asyncRequire" /* 1987 */;
import dismissible_content from "dismissible_content" /* 2036 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2048 */;
import ChannelConstants from "ChannelConstants" /* 2058 */;
import useKeyboardTypeDefault from "useKeyboardType" /* 4753 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4860 */;
import transitionToChannel from "transitionToChannel" /* 4907 */;
import useSafeAreaInsetsKeyboardAwareDefault from "useSafeAreaInsetsKeyboardAware" /* 6478 */;
import sanitizeThreadNameDefault from "sanitizeThreadName" /* 6787 */;
import DraftStore2 from "DraftStore" /* 7044 */;
import MessageParser from "MessageParser" /* 7179 */;
import SlowmodeStore2 from "SlowmodeStore" /* 7184 */;
import tracking_Tracking from "tracking/Tracking" /* 7276 */;
import DraftActionCreatorsDefault from "DraftActionCreators" /* 7416 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 7861 */;
import TagIcon from "TagIcon" /* 8557 */;
import useFocusHandlers from "useFocusHandlers" /* 10081 */;
import ForumGuidelinesActionSheet from "ForumGuidelinesActionSheet" /* 10089 */;
import openExpressionPickerActionSheet from "openExpressionPickerActionSheet" /* 10093 */;
import DismissibleActionSheet from "DismissibleActionSheet" /* 10368 */;
import AppliedForumTag from "AppliedForumTag" /* 10369 */;
import ImageCarouselDefault from "ImageCarousel" /* 10373 */;
import MediaKeyboardUtils from "MediaKeyboardUtils" /* 10377 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AccessibilityStore from "AccessibilityStore" /* 4885 */;
import ThemeStore from "ThemeStore" /* 1193 */;
import GuildMemberStore from "GuildMemberStore" /* 2112 */;
import PermissionStore from "PermissionStore" /* 4515 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2103 */;
import UploadAttachmentStore from "UploadAttachmentStore" /* 7280 */;
import UserStore from "UserStore" /* 1377 */;
import Constants_mod from "Constants" /* 1085 */;
import Constants_mod2 from "Constants" /* 1096 */;
import Fragment_mod from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const DraftStore = DraftStore2;
const SlowmodeStore = SlowmodeStore2;
let c5, closure_1, closure_12, maxLength, set, user, v3;

let Fonts;
let StyleSheet;
let c9;
let closure_21;
let closure_22;
let closure_23;
let closure_28;
let closure_29;
let closure_30;
let closure_31;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let rect;
let size;
let size1;
function ActionBar(channel) {
  let Button;
  let ChatIcon;
  let ImageIcon;
  let canPost;
  let intl;
  let intl2;
  let intl3;
  let isEdit;
  let items2;
  let items3;
  let items4;
  let items5;
  let items6;
  let lastInput;
  let obj10;
  let obj11;
  let onLayout;
  let onShowExpressionPicker;
  let stringResult;
  let submitting;
  let tags;
  channel = channel.channel;
  ({ tags: importDefault, onTagsSave: dependencyMap, canPost } = channel);
  ({ submitting, onSubmit: _slicedToArray, focusLastInput: react, isEdit } = channel);
  ({ onShowExpressionPicker, lastInput, onLayout } = channel);
  const tmp = closure_33();
  const tmp2 = channel;
  let obj = channel(504);
  const items = [UploadAttachmentStore];
  const stateFromStores = obj.useStateFromStores(items, () => UploadAttachmentStore.getUploads(channel.id, DraftType.ChannelMessage));
  let obj2 = channel(504);
  const items1 = [PermissionStore];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => {
    const canResult = !isEdit && PermissionStore.can(constants.ATTACH_FILES, channel);
    return canResult;
  });
  const insets = useSafeAreaInsetsKeyboardAwareDefault({ includeKeyboardHeight: true }).insets;
  const tmp6 = useKeyboardTypeDefault();
  let closure_7 = tmp6;
  let isMediaChannelResult = channel.isMediaChannel();
  const tmp8 = tmp6 === channel(1616).KeyboardTypes.MEDIA;
  let closure_8 = tmp8;
  if (!isMediaChannelResult) {
    isMediaChannelResult = stateFromStores1 && stateFromStores.length > 0;
    const tmp9 = stateFromStores1 && stateFromStores.length > 0;
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
  const obj3 = { onLayout, style: items2, children: items3 };
  items2 = [tmp.actionsContainer, { marginBottom: insets.bottom }];
  if (isMediaChannelResult) {
    const obj4 = { attachments: stateFromStores, channelId: channel.id, highlightThumbnails: true };
    isMediaChannelResult = closure_29(ImageCarouselDefault, obj4);
  }
  items3 = [isMediaChannelResult, ];
  let tmp16Result = stateFromStores1;
  const obj5 = { style: tmp.actions, children: items5 };
  if (tmp16Result) {
    const obj6 = {
      accessibilityLabel: intl.string(tmp2(1126).t.aDZSuz),
      style: items4,
      IconComponent: ImageIcon,
      onPress() {
          if (closure_8) {
            react();
          } else {
            const obj = MediaKeyboardUtils;
            const result = obj.showSimpleMediaKeyboard(channel);
            metroRequire.dismiss();
          }
          const obj2 = tracking_Tracking;
          const result1 = obj2.trackForumChannelMediaUploaderClicked({ isMobile: true });
        },
      foregroundRipple: true
    };
    const HeaderActionButton = tmp2(6890).HeaderActionButton;
    intl = tmp2(1126).intl;
    items4 = [, ];
    ({ actionButton: arr7[0], mediaButton: arr7[1] } = tmp);
    if (tmp8) {
      ImageIcon = tmp2(11071).KeyboardIcon;
    } else {
      ImageIcon = tmp2(5878).ImageIcon;
    }
    tmp16Result = closure_29(HeaderActionButton, obj6);
  }
  items5 = [tmp16Result, , , ];
  if (tmp10) {
    const obj7 = {
      accessibilityLabel: intl2.string(tmp2(1126).t["112vVE"]),
      style: items6,
      IconComponent: tmp2(8557).TagIcon,
      onPress() {
          let intl;
          metroRequire.dismiss();
          const openLazy = ActionSheetActionCreatorsDefault.openLazy;
          const obj = {
            parentChannel: channel,
            onSave(arg0) {
              closure_1_2(arg0);
              const tmp5 = closure_1_7 !== channel(dependencyMap[58]).KeyboardTypes.SYSTEM && closure_1_7 !== channel(dependencyMap[58]).KeyboardTypes.EXPRESSION;
              if (!tmp5) {
                closure_1_5();
              }
            },
            title: intl.string(intl6.t.HPu3kq),
            tags: importDefault,
            onClose() {
              const tmp4 = closure_1_7 !== channel(dependencyMap[58]).KeyboardTypes.SYSTEM && closure_1_7 !== channel(dependencyMap[58]).KeyboardTypes.EXPRESSION;
              if (!tmp4) {
                closure_1_5();
              }
            }
          };
          ActionSheetActionCreatorsDefault;
          const tmp3 = asyncRequire(11073, dependencyMap.paths);
          intl = intl6.intl;
          openLazy(tmp3, "ForumPostTagsActionSheet", obj);
        },
      foregroundRipple: true
    };
    const HeaderActionButton2 = tmp2(6890).HeaderActionButton;
    intl2 = tmp2(1126).intl;
    items6 = [, ];
    ({ actionButton: arr9[0], mediaButton: arr9[1] } = tmp);
    tmp10 = closure_29(HeaderActionButton2, obj7);
  }
  items5[1] = tmp10;
  let tmp18 = lastInput === tmp2(10081).PostComposerInputs.CONTENT;
  if (tmp18) {
    const obj8 = { accessibilityLabel: intl3.string(tmp2(1126).t.iZ7Mz9), style: tmp.actionButton, IconComponent: tmp2(8444).ReactionIcon, onPress: onShowExpressionPicker, foregroundRipple: true };
    const HeaderActionButton3 = tmp2(6890).HeaderActionButton;
    intl3 = tmp2(1126).intl;
    tmp18 = closure_29(HeaderActionButton3, obj8);
  }
  items5[2] = tmp18;
  const obj9 = { style: tmp.postButtonWrapper, children: closure_29(Button, obj10) };
  Button = tmp2(5601).Button;
  const intl4 = tmp2(1126).intl;
  const string = intl4.string;
  const t = tmp2(1126).t;
  if (isEdit) {
    stringResult = string(t["R3BPH+"]);
  } else {
    stringResult = string(t.pIuQI6);
  }
  obj10 = {
    text: stringResult,
    loading: submitting,
    disabled: submitting,
    icon: closure_29(ChatIcon, obj11),
    onPress() {
      if (canPost) {
        _slicedToArray({});
      }
    }
  };
  if (!submitting) {
    submitting = !canPost;
  }
  obj11 = { size: "sm", color: nativeDefault.colors.WHITE };
  ChatIcon = tmp2(5862).ChatIcon;
  items5[3] = closure_29(closure_9, obj9);
  items3[1] = closure_30(closure_9, obj5);
  return closure_30(closure_9, obj3);
}
({ Keyboard: metroRequire, Pressable: metroImportDefault, StyleSheet, Text: metroImportAll, View: c9 } = react_native);
const DraftType = DraftStore2.DraftType;
const SlowmodeType = SlowmodeStore2.SlowmodeType;
let Constants = Constants_mod2;
({ AbortCodes: closure_21, MAX_CHANNEL_NAME_LENGTH: closure_22, Permissions: closure_23 } = Constants);
const ChannelFlags = ChannelConstants.ChannelFlags;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
const ExpressionPickerViewType = ExpressionPickerConstants.ExpressionPickerViewType;
let closure_27 = ThreadConstants.OpenThreadAnalyticsLocations;
Constants = Constants_mod2;
({ NOOP: closure_28, Fonts } = Constants);
let Fragment = Fragment_mod;
({ jsx: closure_29, jsxs: closure_30, Fragment: closure_31 } = Fragment);
const re32 = /(#"[^"]*"|[@#]\S+|:[\w+-]+:)/g;
let createStyles = createStyles_mod;
let obj = { container: obj2, scrollViewContentContainer: { paddingBottom: 16 }, avatarContainer: { height: 40 }, avatar: { marginRight: 12 }, titleInput: { padding: 8 }, titleInputText: obj3, contentInput: size, mentionText: obj4, postButtonWrapper: { marginLeft: "auto" }, tags: { flexDirection: "row", alignItems: "center", padding: 8 }, tagIcon: { marginRight: 8 }, editor: { flex: 1, flexDirection: "row", paddingHorizontal: 12, paddingTop: 8 }, editorBody: { width: "100%", flex: 1, flexDirection: "column", minHeight: 200 }, usernameToChannel: { flex: 1, flexDirection: "row", alignItems: "flex-end" }, channelName: { lineHeight: 20, flex: 1 }, actionsContainer: obj5, actions: { flex: 1, flexDirection: "row", alignItems: "center", padding: 8, width: "100%" }, actionButton: size1, mediaButton: { marginRight: 8 }, horizontalAutocomplete: rect, nameError: { marginBottom: 16, marginLeft: 16, marginRight: 16 }, messageError: { marginTop: 8 } };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, position: "relative" };
createStyles = createStyles.createStyles;
obj3 = { minHeight: 40, height: "auto", fontFamily: Fonts.DISPLAY_SEMIBOLD, color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
size = { width: "100%", height: "100%", padding: 0, lineHeight: 20, color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, textAlignVertical: "top" };
obj4 = { color: nativeDefault.unsafe_rawColors.BRAND_500 };
obj5 = { borderTopWidth: StyleSheet.hairlineWidth, borderTopColor: nativeDefault.colors.BORDER_SUBTLE, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, top: undefined };
let merged = Object.assign(StyleSheet.absoluteFillObject);
size1 = { height: 40, minHeight: 40, maxHeight: 40, width: 40, minWidth: 40, maxWidth: 40, borderRadius: 20, color: nativeDefault.colors.TEXT_DEFAULT, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL, marginLeft: 0, marginRight: 0, overflow: "hidden" };
rect = { position: "absolute", bottom: 0, left: 0, right: 0, zIndex: 100, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
let closure_33 = createStyles(obj);
let __initData = { code: "function ForumComposerTsx1({contentOffset:{y:y}}){const{scrollTopValue}=this.__closure;return scrollTopValue.set(y);}" };
let closure_35 = ReactCompilerGating.isReactCompilerEnabled() ? ((tags) => {
  let items;
  let obj = react2;
  const cResult = obj.c(9);
  const tags1 = tags.tags;
  const tmp4 = closure_33();
  if (0 === tags1.length) {
    return null;
  } else {
    let tmp5;
    let tmp8;
    tags = tmp4.tags;
    if (cResult[0] !== tmp4.tagIcon) {
      let obj2 = { size: "sm", style: tmp4.tagIcon };
      const tmp7 = set(TagIcon.TagIcon, obj2);
      cResult[0] = tmp4.tagIcon;
      cResult[1] = tmp7;
      tmp5 = tmp7;
    } else {
      tmp5 = cResult[1];
    }
    if (cResult[2] !== tags1) {
      let tmp10;
      const _Symbol = Symbol;
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function c(tag, arg1) {
          let items;
          let tmp2 = 0 !== arg1;
          const Fragment = React.Fragment;
          if (tmp2) {
            const obj = { style: { width: 4 } };
            tmp2 = closure_1_29(closure_1_9, obj);
          }
          const obj2 = { children: items };
          items = [tmp2, ];
          const obj3 = { tag };
          items[1] = closure_1_29(AppliedForumTag.AppliedForumTagPill, obj3);
          return closure_1_30(Fragment, obj2, tag.id);
        };
        cResult[4] = fn;
        tmp10 = fn;
      } else {
        tmp10 = cResult[4];
      }
      const mapped = tags1.map(tmp10);
      cResult[2] = tags1;
      cResult[3] = mapped;
      tmp8 = mapped;
    } else {
      tmp8 = cResult[3];
    }
    if (cResult[5] === tmp4.tags) {
      if (cResult[6] === tmp5) {
        let tmp12;
        if (cResult[7] === tmp8) {
          tmp12 = cResult[8];
        }
        return tmp12;
      }
    }
    let obj3 = { style: tags, children: items };
    items = [tmp5, tmp8];
    const tmp15 = __initData(React4, obj3);
    cResult[5] = tmp4.tags;
    cResult[6] = tmp5;
    cResult[7] = tmp8;
    cResult[8] = tmp15;
    tmp12 = tmp15;
  }
}) : ((tags) => {
  let items;
  tags = tags.tags;
  const tmp = closure_33();
  let tmp2 = null;
  if (0 !== tags.length) {
    let obj = { style: tmp.tags, children: items };
    let obj2 = { size: "sm", style: tmp.tagIcon };
    items = [
      set(TagIcon.TagIcon, obj2),
      tags.map((tag, index) => {
          let items;
          let tmp2 = 0 !== index;
          const Fragment = React.Fragment;
          if (tmp2) {
            const obj = { style: { width: 4 } };
            tmp2 = closure_1_29(closure_1_9, obj);
          }
          const obj2 = { children: items };
          items = [tmp2, ];
          const obj3 = { tag };
          items[1] = closure_1_29(AppliedForumTag.AppliedForumTagPill, obj3);
          return closure_1_30(Fragment, obj2, tag.id);
        })
    ];
    tmp2 = __initData(React4, obj);
  }
  return tmp2;
});
size = size_mod;
let result = size.fileFinishedImporting("modules/forums/native/composer/ForumComposer.tsx");

export default function ForumComposer(parentChannel) {
  let Avatar;
  let _undefined;
  let _undefined2;
  let _undefined3;
  let c13;
  let c21;
  let c31;
  let c34;
  let c38;
  let closure_22;
  let first;
  let focusLastInput;
  let guildId;
  let intl;
  let intl2;
  let intl3;
  let intl5;
  let items20;
  let items21;
  let items22;
  let items23;
  let items24;
  let items25;
  let items26;
  let items27;
  let items28;
  let obj18;
  let obj19;
  let obj22;
  let str2;
  let tmp17;
  let tmp28;
  let tmp60;
  let tmp65;
  let tmp72Result6;
  parentChannel = parentChannel.parentChannel;
  const thread = parentChannel.thread;
  const threadSettingsDraft = parentChannel.threadSettingsDraft;
  const onClose = parentChannel.onClose;
  const message = parentChannel.message;
  const isEdit = parentChannel.isEdit;
  let stateFromStores5;
  let theme;
  closure_12 = undefined;
  c13 = undefined;
  let value;
  let closure_15;
  let str4;
  let closure_17;
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
  let callback21;
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
    return parentChannel(threadSettingsDraft[52])(threadSettingsDraft[51], threadSettingsDraft.paths);
  }
  let tmp = blurLastInput();
  let closure_6 = tmp;
  let tmp3 = threadSettingsDraft;
  const analyticsLocations = thread(threadSettingsDraft[22])().analyticsLocations;
  let obj = isEdit;
  const ref = isEdit.useRef(null);
  let tmp5 = parentChannel;
  let obj2 = parentChannel(threadSettingsDraft[23]);
  let items = [currentUser];
  const stateFromStores = obj2.useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    if (currentUser == null) {
      currentUser = null;
    }
    return currentUser;
  }, []);
  let obj3 = parentChannel(threadSettingsDraft[23]);
  const items1 = [stateFromStores5];
  const stateFromStores1 = obj3.useStateFromStores(items1, () => stateFromStores5.useReducedMotion);
  let obj4 = parentChannel(threadSettingsDraft[23]);
  const items2 = [value];
  const stateFromStores2 = obj4.useStateFromStores(items2, () => GuildMemberStore.getSelfMember(parentChannel.guild_id));
  let obj5 = parentChannel(threadSettingsDraft[23]);
  const items3 = [closure_12];
  const str = obj5.useStateFromStores(items3, () => DraftStore.getDraft(parentChannel.id, DraftType.ChannelMessage));
  let obj6 = parentChannel(threadSettingsDraft[23]);
  const items4 = [theme];
  const stateFromStores3 = obj6.useStateFromStores(items4, () => {
    const obj = parentChannel(threadSettingsDraft[24]);
    return obj.isThemeDark(theme.theme);
  });
  const unsafe_rawColors = thread(threadSettingsDraft[21]).unsafe_rawColors;
  const tmp10 = stateFromStores3 ? unsafe_rawColors.PRIMARY_330 : unsafe_rawColors.PRIMARY_460;
  let tmp5Result = tmp5(tmp3[23]);
  const items5 = [closure_17];
  const stateFromStores4 = tmp5Result.useStateFromStores(items5, () => SlowmodeStore.getSlowmodeCooldownGuess(parentChannel.id, SlowmodeType.CreateThread));
  const items6 = [first1];
  const tmp5Result14 = tmp5(tmp3[23]);
  stateFromStores5 = tmp5Result14.useStateFromStores(items6, () => UploadAttachmentStore.getUploads(parentChannel.id, DraftType.ChannelMessage));
  let tmp12 = tmp2(tmp3[25])();
  theme = tmp12;
  const tmp13 = thread(tmp3[26])();
  closure_12 = tmp13;
  const tmp14 = thread(tmp3[27])(parentChannel);
  [tmp17, c13] = message(obj.useState(false), 2);
  const useState = obj.useState;
  const tmp16 = message(obj.useState(false), 2);
  if (isEdit) {
    let name;
    if (thread != null) {
      name = thread.name;
    }
    str2 = name;
  } else if (threadSettingsDraft != null) {
    str2 = threadSettingsDraft.name;
  }
  if (str2 == null) {
    str2 = "";
  }
  const tmp15Result = message(useState(str2), 2);
  value = tmp15Result[0];
  closure_15 = tmp15Result[1];
  const tmp5Result15 = tmp5(tmp3[28]);
  const channelTemplate = tmp5Result15.useChannelTemplate(parentChannel);
  let str3 = "";
  if (isEdit) {
    str3 = "";
    if (null != message) {
      str3 = "";
      if (null != thread) {
        const tmp2Result = tmp2(tmp3[29]);
        str3 = tmp2Result.unparse(message.content, thread.id);
      }
    }
  }
  const useState2 = obj.useState;
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
  const tmp15Result7 = message(useState2(str3), 2);
  str4 = tmp15Result7[0];
  closure_17 = tmp24;
  const tmp5Result16 = tmp5(tmp3[30]);
  appliedTags = tmp5Result16.useAppliedTags(thread);
  const tmp15Result8 = message(obj.useState(function() {
    let found = appliedTags;
    let availableTags = parentChannel.availableTags;
    let _Map1;
    if (!isEdit) {
      appliedTags = undefined;
      if (threadSettingsDraft != null) {
        appliedTags = threadSettingsDraft.appliedTags;
      }
      if (null != appliedTags) {
        if (0 !== appliedTags.size) {
          const _Map = Map;
          if (availableTags == null) {
            availableTags = [];
          }
          const self = this;
          const self2 = this;
          _Map1 = new _Map(availableTags.map((id) => {
            const items = [id.id, id];
            return items;
          }));
          const _Array = Array;
          const arr = Array.from(appliedTags);
          const mapped = arr.map((item) => _Map1.get(item));
          found = mapped.filter((item) => null != item);
        }
      }
      found = [];
    }
    return found;
  }), 2);
  first1 = tmp15Result8[0];
  currentUser = tmp15Result8[1];
  [tmp28, c21] = message(obj.useState(null), 2);
  message(obj.useState(null), 2);
  const tmp15Result10 = message(obj.useState(null), 2);
  maxLength = tmp15Result10[1];
  let colorString;
  const first2 = tmp15Result10[0];
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
    const tmp2Result3 = thread(tmp3[31]);
    str5 = tmp2Result3.getName(stateFromStores);
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
  const tmp5Result17 = tmp5(tmp3[33]);
  sharedValue = tmp5Result17.useSharedValue(0);
  const tmp5Result18 = tmp5(tmp3[33]);
  class D {
    constructor(contentOffset) {
      return sharedValue.set(contentOffset.contentOffset.y);
    }
  }
  D.__closure = { scrollTopValue: sharedValue };
  D.__workletHash = 16880842576840;
  D.__initData = __initData;
  const items7 = [isEdit, parentChannel.id];
  const items8 = [isEdit, parentChannel.id];
  const animatedScrollHandler = tmp5Result18.useAnimatedScrollHandler(D);
  const callback1 = obj.useCallback((name) => {
    if (!isEdit) {
      const obj2 = { name };
      const obj = DraftActionCreatorsDefault;
      obj.changeThreadSettings(parentChannel.id, obj2);
    }
    closure_15(name);
  }, items7);
  const items9 = [onClose];
  const callback2 = obj.useCallback(function(arr) {
    currentUser(arr);
    if (!isEdit) {
      const _Set = Set;
      const obj = { appliedTags: set };
      const changeThreadSettings = DraftActionCreatorsDefault.changeThreadSettings;
      const id = parentChannel.id;
      const self = this;
      const self2 = this;
      DraftActionCreatorsDefault;
      set = new Set(arr.map((id) => id.id));
      changeThreadSettings(id, obj);
    }
  }, items8);
  callback3 = obj.useCallback((channel) => {
    onClose(true);
    const obj = transitionToChannel;
    const obj2 = { navigationReplace: true, source: memo1.FORUM };
    obj.transitionToThread(channel, obj2);
  }, items9);
  const items10 = [first1];
  memo = obj.useMemo(() => {
    set = new Set(first1.map((id) => id.id));
    return set;
  }, items10);
  const items11 = [appliedTags];
  memo1 = obj.useMemo(() => {
    set = new Set(appliedTags.map((id) => id.id));
    return set;
  }, items11);
  const tmp42 = onClose;
  const useCallback = obj.useCallback;
  let closure_0 = onClose((content) => {
    let name;
    let c2 = 0;
    let c3 = 0;
    return (function*(arg0) {
      let obj6;
      let obj8;
      if (v3 === 2) {
        v3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          v3 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              v3 = 3;
              throw value;
            } else if (arg0 === 2) {
              v3 = 3;
              return { value, done: true };
            } else {
              user = tmp;
              if (null != user) {
                const tmp5 = null != closure_1_4 && closure_1_4.content !== content;
                if (tmp5) {
                  const obj7 = { content };
                  const obj3 = thread(threadSettingsDraft[36]);
                  obj3.editMessage(user.id, closure_1_4.id, obj7);
                }
                const obj5 = thread(threadSettingsDraft[37]);
                if (!obj5.isEqual(closure_1_27, closure_1_26)) {
                  const _Array = Array;
                  c2 = 1;
                  v3 = 1;
                  const obj9 = { value: obj6.updateForumPostTags(user.id, Array.from(closure_1_26)), done: false };
                  obj6 = thread(threadSettingsDraft[38]);
                  return obj9;
                }
              }
              v3 = 3;
              return { value: "IconComponent", done: null };
            }
          } else {
            if (1 === tmp4) {
              if (arg0 === 1) {
                v3 = 3;
                throw value;
              } else if (arg0 === 2) {
                v3 = 3;
                return { value, done: true };
              }
            } else if (arg0 === 1) {
              v3 = 3;
              throw value;
            } else if (arg0 === 2) {
              v3 = 3;
              return { value, done: true };
            }
            if (channelId.getChannelId() !== user.id) {
              closure_1_25(user);
            } else {
              v3(true);
            }
          }
          if (user.name !== name) {
            c2 = 2;
            v3 = 1;
            const obj11 = { name };
            const obj12 = { value: obj8.saveChannel(user.id, obj11), done: false };
            obj8 = thread(threadSettingsDraft[39]);
            return obj12;
          }
        } catch (tmp36) {
          v3 = 3;
          throw tmp36;
        }
      }
    })();
  });
  const items12 = [thread, message, memo1, memo, value, callback3, onClose];
  callback4 = useCallback(function() {
    return closure_0(...arguments);
  }, items12);
  let name1;
  if (threadSettingsDraft != null) {
    name1 = threadSettingsDraft.name;
  }
  const tmp45 = null != name1 && threadSettingsDraft.name.length > 0;
  const trimmed = str4.trim();
  let tmp47 = "" === channelTemplate;
  if (!tmp47) {
    tmp47 = trimmed !== channelTemplate;
  }
  if (tmp47) {
    tmp47 = trimmed.length > 0 || tmp46;
  }
  let tmp49 = !isEdit && tmp45 && tmp47;
  if (!tmp49) {
    let tmp50 = isEdit;
    if (tmp50) {
      let name2;
      if (thread != null) {
        name2 = thread.name;
      }
      let tmp52 = value !== name2;
      if (!tmp52) {
        let content;
        if (message != null) {
          content = message.content;
        }
        tmp52 = trimmed !== content;
      }
      if (!tmp52) {
        const tmp2Result4 = thread(tmp3[37]);
        tmp52 = !tmp2Result4.isEqual(memo1, memo);
      }
      tmp50 = tmp52;
    }
    tmp49 = tmp50;
  }
  const tmp5Result19 = tmp5(tmp3[40]);
  createForumPost = tmp5Result19.useCreateForumPost({ parentChannel, threadSettings: threadSettingsDraft, appliedTags: memo, onThreadCreated: callback3 });
  const useCallback2 = obj.useCallback;
  closure_0 = tmp42(function*(arg0) {
    let closure_2;
    let stickerId;
    closure_0 = arg0;
    if (1 === c5) {
      if (arg0 === 1) {
        let c6 = 3;
        throw value;
      } else if (arg0 === 2) {
        c6 = 3;
        const obj7 = { value, done: true };
        return obj7;
      } else {
        let tmp71;
        if (closure_0.hasFlag(constants2.REQUIRE_TAG)) {
          if (0 === length.length) {
            const obj8 = closure_0(threadSettingsDraft[41]);
            closure_1_22(obj8.makeEmptyTagsError());
          }
        }
        closure_1_13(true);
        const parse = thread(threadSettingsDraft[29]).parse;
        const tmp68 = thread(threadSettingsDraft[29]);
        if (c5) {
          tmp71 = closure_1;
        } else {
          tmp71 = closure_0;
        }
        const content = parse(tmp71, str4).content;
        let c4 = 2;
        constants(null);
        closure_1_22(null);
        if (c5) {
          c5 = 4;
          c6 = 1;
          const obj9 = { value: onPressSticker(content), done: false };
          return obj9;
        } else {
          let tmp87;
          const tmp85 = content;
          if (null != stickerId) {
            const items = [stickerId];
            tmp87 = items;
          }
          c5 = 5;
          c6 = 1;
          const obj10 = { value: createForumPost(tmp85, tmp87, stateFromStores5), done: false };
          return obj10;
        }
      }
    } else if (2 === c5) {
      c4 = 0;
      closure_1_13(false);
      throw closure_3;
    } else {
      if (3 === c5) {
        c4 = 1;
        const body = tmp.body;
        let code;
        if (body != null) {
          code = body.code;
        }
        if (null != code) {
          const body3 = tmp.body;
          let code1;
          if (body3 != null) {
            code1 = body3.code;
          }
          if (code1 === constants.AUTOMOD_TITLE_BLOCKED) {
            const obj5 = closure_0(threadSettingsDraft[41]);
            constants(obj5.makeAutomodViolationError(closure_3.body, closure_0));
          } else {
            const body4 = tmp.body;
            let code2;
            if (body4 != null) {
              code2 = body4.code;
            }
            if (code2 === constants.AUTOMOD_MESSAGE_BLOCKED) {
              const obj4 = closure_0(threadSettingsDraft[41]);
              closure_1_22(obj4.makeAutomodViolationError(closure_3.body, closure_0));
            } else {
              const body5 = tmp.body;
              let code3;
              if (body5 != null) {
                code3 = body5.code;
              }
              let tmp25 = code3 === constants.INVALID_FORM_BODY;
              if (tmp25) {
                const body2 = tmp.body;
                let name;
                if (body2 != null) {
                  const errors = body2.errors;
                  if (errors != null) {
                    name = errors.name;
                  }
                }
                tmp25 = null != name;
              }
              if (tmp25) {
                const obj3 = closure_0(threadSettingsDraft[41]);
                constants(obj3.makeApiNameValidationError());
              }
            }
          }
        }
      } else {
        if (4 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            closure_1_13(false);
            c6 = 3;
            const obj11 = { value, done: true };
            return obj11;
          }
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 0;
          closure_1_13(false);
          c6 = 3;
          const obj = { value, done: true };
          return obj;
        }
        c4 = 1;
      }
      c4 = 0;
      closure_1_13(false);
    }
    yield "IconComponent";
    closure_1 = tmp4;
    stickerId = closure_0.stickerId;
    return "Reflect";
  });
  const items13 = [parentChannel, first1.length, isEdit, thread, str4, callback4, createForumPost, stateFromStores5];
  callback21 = useCallback2(function() {
    return closure_0(...arguments);
  }, items13);
  const items14 = [parentChannel, stateFromStores4, tmp13, stateFromStores5, callback21, str4];
  const items15 = [tmp24, parentChannel.id];
  const callback5 = obj.useCallback((stickerId) => {
    let intl;
    let intl2;
    let intl3;
    let intl4;
    let intl5;
    let obj3;
    stickerId = stickerId.stickerId;
    if (stateFromStores4 <= 0) {
      if (str4.length > closure_12) {
        const obj2 = { title: intl4.string(parentChannel(threadSettingsDraft[43]).t.l8rYLt), body: intl5.formatToPlainString(parentChannel(threadSettingsDraft[43]).t.FfjF15, obj3) };
        const show2 = thread(threadSettingsDraft[42]).show;
        thread(threadSettingsDraft[42]);
        intl4 = parentChannel(threadSettingsDraft[43]).intl;
        intl5 = parentChannel(threadSettingsDraft[43]).intl;
        obj3 = { currentLength: str4.length, maxLength: tmp42 };
        show2(obj2);
      } else {
        const RESTRICTIONS = parentChannel(threadSettingsDraft[44]).RESTRICTIONS;
        const iter = RESTRICTIONS[Symbol.iterator]();
        while (iter !== undefined) {
          let checkResult = iter.next().check(str4, stickerId, null != stickerId.getGuildId());
          if (false !== checkResult) {
            let tmp12 = thread(threadSettingsDraft[42]);
            let obj = {
              title: intl.string(parentChannel(threadSettingsDraft[43]).t.mY3Y38),
              body: checkResult.body,
              confirmText: intl2.string(parentChannel(threadSettingsDraft[43]).t.KJnHq3),
              onConfirm() {
                        const obj = { stickerId };
                        callback21(obj);
                      },
              cancelText: intl3.string(parentChannel(threadSettingsDraft[43]).t.fsBWmS)
            };
            let show = tmp12.show;
            intl = parentChannel(threadSettingsDraft[43]).intl;
            intl2 = parentChannel(threadSettingsDraft[43]).intl;
            intl3 = parentChannel(threadSettingsDraft[43]).intl;
            let showResult = show(obj);
            iter.return();
          }
        }
        const obj4 = { stickerId };
        callback21(obj4);
      }
    }
  }, items14);
  const callback6 = obj.useCallback((draft) => {
    const obj = DraftActionCreatorsDefault;
    obj.changeDraft(parentChannel.id, draft, DraftType.ChannelMessage);
    closure_17(draft);
  }, items15);
  const tmp5Result20 = tmp5(tmp3[45]);
  const focusHandlers = tmp5Result20.useFocusHandlers({ titleInput: ref, contentInput: ref1 });
  ({ setFocusedInput: c31, focusLastInput } = focusHandlers);
  blurLastInput = focusHandlers.blurLastInput;
  let obj7 = { start: str4.length, end: null };
  const focusedInput = focusHandlers.focusedInput;
  [tmp60, c34] = message(obj.useState(obj7), 2);
  message(obj.useState(obj7), 2);
  const callback7 = obj.useCallback((nativeEvent) => {
    const obj = {};
    const merged = Object.assign(nativeEvent.nativeEvent.selection);
    _undefined2(obj);
  }, []);
  const callback8 = obj.useCallback((arg0) => {
    let closure_129_0;
    let closure_129_1;
    ({ start: closure_129_0, end: closure_129_1 } = arg0);
    let current;
    const obj = PlatformUtils;
    if (obj.isAndroid()) {
      current = ref1.current;
      if (null != current) {
        let tmp3 = globalThis;
        const _setTimeout = setTimeout;
        const timerId = setTimeout(() => {
          let tmp3 = closure_1_1;
          const setSelection = current.setSelection;
          if (closure_1_1 == null) {
            tmp3 = closure_1_0;
          }
          setSelection(closure_1_0, tmp3);
        });
      }
    }
  }, []);
  const tmp5Result21 = tmp5(tmp3[47]);
  onPressEmoji = tmp5Result21.usePressEmojiHandler({ selection: tmp60, draftContent: str4, handleTextChange: callback6, focusTextInput: callback, setSelection: callback8 });
  const tmp5Result22 = tmp5(tmp3[47]);
  onPressGIF = tmp5Result22.usePressGIFHandler({ selection: tmp60, draftContent: str4, handleTextChange: callback6, focusTextInput: callback, setSelection: callback8 });
  const tmp5Result23 = tmp5(tmp3[48]);
  const pressHorizontalAutocompleteItemHandler = tmp5Result23.usePressHorizontalAutocompleteItemHandler({ draftContent: str4, handleTextChange: callback6, setSelection: callback8, channel: parentChannel });
  const tmp5Result24 = tmp5(tmp3[49]);
  onBackspace = tmp5Result24.useBackspaceHandler({ selection: tmp60, draftContent: str4, handleTextChange: callback6 });
  [tmp65, c38] = message(obj.useState(0), 2);
  obj23 = parentChannel;
  message(obj.useState(0), 2);
  const callback9 = obj.useCallback((nativeEvent) => {
    _undefined3(nativeEvent.nativeEvent.layout.height);
  }, []);
  if (isEdit) {
    obj23 = thread;
  }
  const items16 = [obj23];
  memo2 = obj.useMemo(() => {
    let parserState = null;
    if (null != obj23) {
      const obj = MessageParser;
      parserState = obj.createParserState(tmp);
    }
    return parserState;
  }, items16);
  const items17 = [str4, obj23, memo2, tmp.mentionText];
  const memo3 = obj.useMemo(() => {
    let mentionText;
    if (0 !== str4.length) {
      if (null != obj23) {
        if (null != memo2) {
          const parts = str4.split(re32);
          let mapped = null;
          if (1 !== parts.length) {
            mapped = parts.map((children, index) => {
              if (index % 2 === 1) {
                const obj = thread(threadSettingsDraft[29]);
                if (obj.parse(obj23, children, memo2).content !== children) {
                  const obj2 = { style: mentionText.mentionText, children };
                  return createForumPost(stateFromStores, obj2, index);
                }
              }
              const obj3 = { children };
              return createForumPost(isEdit.Fragment, obj3, index);
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
    let items19;
    let obj8 = { content: value };
    const tmp5Result25 = tmp5(tmp3[41]);
    const renderErrorResult = tmp5Result25.renderError(tmp28, obj8);
    let obj9 = { content: str4, tags: first1 };
    const tmp5Result26 = tmp5(tmp3[41]);
    const renderErrorResult1 = tmp5Result26.renderError(first2, obj9);
    if (obj23.isMediaChannel()) {
      const items18 = [tmp5(tmp3[50]).DismissibleContent.MEDIA_CHANNEL_MULTIPLE_THUMBNAIL_NOTICE];
      items19 = items18;
    } else {
      items19 = [];
    }
    let tmp71 = stateFromStores4;
    let obj10 = { style: items20, children: items21 };
    items20 = [tmp.container, ];
    let obj11 = { paddingTop: insets.top, paddingBottom: insets.bottom + tmp65 };
    items20[1] = obj11;
    let obj12 = {
      channel: parentChannel,
      height: 44,
      onClose,
      onGuidelinesPress() {
          blurLastInput();
          const obj = ForumGuidelinesActionSheet;
          const obj2 = {
            channel: parentChannel,
            onClose() {
              focusLastInput();
            }
          };
          const result = obj.openForumGuidelinesActionSheet(obj2);
        },
      submitting: tmp17,
      title: tmp69
    };
    items21 = [createForumPost(tmp2(tmp3[53]), obj12), ];
    const obj13 = { onScroll: animatedScrollHandler, scrollEventThrottle: 16, keyboardShouldPersistTaps: "always", nestedScrollEnabled: false, contentContainerStyle: tmp.scrollViewContentContainer, keyboardDismissMode: "on-drag", children: items22 };
    const ScrollView = tmp2(tmp3[33]).ScrollView;
    ({ titleInput: obj28.style, titleInputText: obj28.inputTextStyle } = tmp);
    const obj14 = {
      ref,
      style: null,
      inputTextStyle: null,
      showTopContainer: false,
      placeholder: intl.string(tmp5(tmp3[43]).t.lU4dDS),
      placeholderTextColor: tmp10,
      large: true,
      multiline: true,
      value,
      clearButtonVisibility: tmp5(tmp3[56]).ClearButtonVisibility.NEVER,
      maxLength,
      onChange: callback1,
      onBlur() {
          if (!isEdit) {
            let name;
            if (threadSettingsDraft != null) {
              name = threadSettingsDraft.name;
            }
            if (null != name) {
              let name1;
              const tmp7 = sanitizeThreadNameDefault;
              if (threadSettingsDraft != null) {
                name1 = threadSettingsDraft.name;
              }
              const tmp7Result = tmp7(name1, true);
              let name2;
              if (threadSettingsDraft != null) {
                name2 = threadSettingsDraft.name;
              }
              if (tmp7Result !== name2) {
                const obj = { name: tmp7Result };
                const tmp5Result = DraftActionCreatorsDefault;
                tmp5Result.changeThreadSettings(parentChannel.id, obj);
                closure_15(tmp7Result);
              }
            }
          }
        },
      onFocus() {
          const tmp4 = theme !== KeyboardTypes.KeyboardTypes.MEDIA && theme !== KeyboardTypes.KeyboardTypes.EXPRESSION;
          if (!tmp4) {
            const obj = { type: KeyboardTypes.KeyboardTypes.SYSTEM, context: { keyboardWillOpen: true } };
            const setKeyboardType = KeyboardUIStore.setKeyboardType;
            KeyboardUIStore;
            setKeyboardType(obj);
          }
          _undefined(useFocusHandlers.PostComposerInputs.TITLE);
        },
      autoFocus: true,
      autoCorrect: true,
      textContentType: "none",
      returnKeyType: "next",
      onNext: callback
    };
    const FormInput = tmp5(tmp3[55]).FormInput;
    intl = tmp5(tmp3[43]).intl;
    items22 = [createForumPost(FormInput, obj14), , ];
    let tmp72Result = null;
    const tmp73 = c31;
    if (null != renderErrorResult) {
      const obj15 = { style: tmp.nameError, children: renderErrorResult };
      tmp72Result = tmp72(tmp2(tmp3[60]), obj15);
    }
    items22[1] = tmp72Result;
    let tmp72Result4 = null != stateFromStores;
    const obj16 = { style: tmp.editor, children: items23 };
    if (tmp72Result4) {
      const obj17 = {
        style: tmp.avatarContainer,
        onPress() {
              let id;
              const obj = { userId: stateFromStores.id, channelId: obj23.id, messageId: id, sourceAnalyticsLocations: analyticsLocations };
              id = undefined;
              const tmp = showUserProfileActionSheetDefault;
              if (message != null) {
                id = message.id;
              }
              return tmp(obj);
            },
        children: createForumPost(Avatar, obj18)
      };
      obj18 = { animate: !stateFromStores1, style: tmp.avatar, user: stateFromStores, guildId, avatarDecoration: stateFromStores.avatarDecoration, accessibilityLabel: intl2.formatToPlainString(tmp5(tmp3[43]).t.LvU3nj, obj19) };
      guildId = undefined;
      Avatar = tmp5(tmp3[56]).Avatar;
      const tmp77 = analyticsLocations;
      if (parentChannel != null) {
        guildId = parentChannel.getGuildId();
      }
      intl2 = tmp5(tmp3[43]).intl;
      obj19 = { nickname: str5 };
      tmp72Result4 = tmp72(tmp77, obj17);
    }
    items23 = [tmp72Result4, ];
    const obj20 = { style: tmp.editorBody, children: items26 };
    const obj21 = { style: tmp.usernameToChannel, accessibilityLabel: intl3.formatToPlainString(tmp5(tmp3[43]).t["QicUf+"], obj22), children: items24 };
    intl3 = tmp5(tmp3[43]).intl;
    obj22 = { nickname: str5, channelName: tmp14 };
    const obj24 = { name: str5, color: colorString, colors: colorStrings };
    items24 = [tmp72(tmp5(tmp3[62]).RoleLabel, obj24), ];
    const obj25 = { color: "text-default", variant: "text-xs/medium", style: tmp.channelName, lineClamp: 1, children: items25 };
    const Text = tmp5(tmp3[63]).Text;
    let intl4 = tmp5(tmp3[43]).intl;
    const obj26 = { channelName: tmp14 };
    items25 = [" ", intl4.format(tmp5(tmp3[43]).t["6Y1Kev"], obj26)];
    items24[1] = callback21(Text, obj25);
    items26 = [tmp70(tmp71, obj21), , ];
    let tmp72Result5 = null;
    if (null != renderErrorResult1) {
      const obj27 = { style: tmp.messageError, children: renderErrorResult1 };
      tmp72Result5 = tmp72(tmp2(tmp3[60]), obj27);
    }
    items26[1] = tmp72Result5;
    const obj29 = {
      ref: ref1,
      style: tmp.contentInput,
      multiline: true,
      scrollEnabled: false,
      placeholder: intl5.string(tmp5(tmp3[43]).t["8IPnv1"]),
      placeholderTextColor: tmp10,
      onChangeText: callback6,
      onSelectionChange: callback7,
      onFocus() {
          if (theme === KeyboardTypes.KeyboardTypes.MEDIA) {
            const obj = { type: KeyboardTypes.KeyboardTypes.SYSTEM, context: { keyboardWillOpen: true } };
            const setKeyboardType = KeyboardUIStore.setKeyboardType;
            KeyboardUIStore;
            setKeyboardType(obj);
          }
          _undefined(useFocusHandlers.PostComposerInputs.CONTENT);
        },
      showSoftInputOnFocus: tmp12 !== tmp5(tmp3[58]).KeyboardTypes.EXPRESSION,
      children: tmp72Result6
    };
    const TextInput = tmp5(tmp3[56]).TextInput;
    intl5 = tmp5(tmp3[43]).intl;
    tmp72Result6 = str4;
    if (null != memo3) {
      const obj30 = { children: memo3 };
      tmp72Result6 = tmp72(stateFromStores, obj30);
    }
    const obj31 = { children: items27 };
    items26[2] = createForumPost(TextInput, obj29);
    items23[1] = callback21(tmp71, obj20);
    items22[2] = callback21(tmp71, obj16);
    items27 = [tmp70(ScrollView, obj13), , , , ];
    const obj32 = { tags: first1 };
    items27[1] = createForumPost(onPressEmoji, obj32);
    const obj33 = {
      channel: parentChannel,
      tags: first1,
      onTagsSave: callback2,
      canPost: tmp49,
      submitting: tmp17,
      onSubmit: callback5,
      onShowExpressionPicker() {
          let items;
          metroRequire.dismiss();
          const obj2 = { channelId: parentChannel.id, onPressEmoji, onPressSticker, onPressGIF, onBackspace, visibleTabs: items };
          items = [, ];
          ({ EMOJI: arr[0], GIF: arr[1] } = ExpressionPickerViewType);
          const obj = openExpressionPickerActionSheet;
          const result = obj.openExpressionPickerActionSheet(obj2);
        },
      focusLastInput,
      lastInput: focusedInput,
      isEdit,
      onLayout: callback9
    };
    items27[2] = createForumPost(onPressGIF, obj33);
    const obj34 = { style: items28, onPressAutocompleteItem: pressHorizontalAutocompleteItemHandler, text: str4, selection: tmp60, channel: obj23 };
    items28 = [tmp.horizontalAutocomplete, ];
    const obj35 = { bottom: insets.bottom };
    items28[1] = obj35;
    items27[3] = createForumPost(thread(tmp3[65]), obj34);
    const obj36 = {
      contentTypes: items19,
      children(markAsDismissed) {
          markAsDismissed = markAsDismissed.markAsDismissed;
          let tmp3 = null;
          if (markAsDismissed.visibleContent === dismissible_content.DismissibleContent.MEDIA_CHANNEL_MULTIPLE_THUMBNAIL_NOTICE) {
            const obj = {
              markAsDismissed() {
                  return markAsDismissed(constants.UNKNOWN);
                },
              actionSheetKey: "ThumbnailBottomSheet",
              importer: MediaPostMultipleThumbnailActionSheetImporter
            };
            tmp3 = set(DismissibleActionSheet.DismissibleActionSheet, obj);
          }
          return tmp3;
        }
    };
    items27[4] = createForumPost(thread(tmp3[66]), obj36);
    items21[1] = callback21(tmp73, obj31);
    return callback21(tmp71, obj10);
  }
};