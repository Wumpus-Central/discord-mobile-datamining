// discord_app/modules/forums/native/composer/ForumComposer.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import KeyboardTypes from "../../../keyboard/native/KeyboardTypes.tsx";
import asyncRequireImpl from "../../../../../_runtime/01896_asyncRequireImpl.js";
import dismissible_content from "../../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import useKeyboardTypeDefault from "../../../keyboard/native/useKeyboardType.tsx";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import transitionToChannel from "../../../routing/transitionToChannel.tsx";
import useSafeAreaInsetsKeyboardAwareDefault from "../../../safe_area/useSafeAreaInsetsKeyboardAware.native.tsx";
import sanitizeThreadNameDefault from "../../../threads/sanitizeThreadName.tsx";
import MessageParser from "../../../messages/MessageParser.tsx";
import tracking_Tracking from "../../tracking/Tracking.tsx";
import DraftActionCreatorsDefault from "../../../../actions/DraftActionCreators.tsx";
import showUserProfileActionSheetDefault from "../../../user_profile/native/showUserProfileActionSheet.tsx";
import TagIcon from "../../../../design/components/Icon/native/redesign/generated/TagIcon.tsx";
import useFocusHandlers from "hooks/useFocusHandlers.tsx";
import ForumGuidelinesActionSheet from "../ForumGuidelinesActionSheet.tsx";
import openExpressionPickerActionSheet from "../../../expression_picker/native/openExpressionPickerActionSheet.tsx";
import DismissibleActionSheet from "../../../dismissible_content/native/DismissibleActionSheet.tsx";
import MediaKeyboardUtils from "../../../media_keyboard/native/MediaKeyboardUtils.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";
import ThemeStore from "../../../user_settings/ThemeStore.tsx";
import DraftStore from "../../../../stores/DraftStore.tsx";
import GuildMemberStore from "../../../../stores/GuildMemberStore.tsx";
import PermissionStore from "../../../../stores/PermissionStore.tsx";
import SelectedChannelStore from "../../../../stores/SelectedChannelStore.tsx";
import SlowmodeStore from "../../../../stores/SlowmodeStore.tsx";
import UploadAttachmentStore from "../../../../stores/UploadAttachmentStore.tsx";
import UserStore from "../../../../stores/UserStore.tsx";

require = fn;
function Tags(tags) {
  tags = tags.tags;
  const tmp = closure_33();
  let tmp2 = null;
  if (0 !== tags.length) {
    let obj = { style: tmp.tags, children: null };
    obj = { size: "sm", style: tmp.tagIcon };
    let items = [
      __initData7(TagIcon.TagIcon, obj),
      tags.map((tag, index) => {
        let tmp2 = 0 !== index;
        if (tmp2) {
          let obj = { style: { width: 4 } };
          tmp2 = closure_1_29(closure_1_9, obj);
        }
        obj = { children: null };
        const items = [tmp2];
        obj = { tag };
        items[1] = closure_1_29(require("AppliedForumTag").AppliedForumTagPill, obj);
        obj.children = items;
        return closure_1_30(React.Fragment, obj, tag.id);
      }),
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
  let obj = channel(504);
  const items = [UploadAttachmentStore];
  const stateFromStores = obj.useStateFromStores(items, () =>
    UploadAttachmentStore.getUploads(channel.id, DraftType.ChannelMessage),
  );
  let obj1 = channel(504);
  const items1 = [PermissionStore];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => {
    let canResult = !isEdit;
    if (!isEdit) {
      canResult = PermissionStore.can(constants.ATTACH_FILES, channel);
    }
    return canResult;
  });
  const tmp6 = useKeyboardTypeDefault();
  closure_7 = tmp6;
  let isMediaChannelResult = channel.isMediaChannel();
  const tmp8 = tmp6 === channel(1609).KeyboardTypes.MEDIA;
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
  obj = { onLayout, style: null, children: null };
  const items2 = [
    tmp.actionsContainer,
    { marginBottom: useSafeAreaInsetsKeyboardAwareDefault({ includeKeyboardHeight: true }).insets.bottom },
  ];
  obj.style = items2;
  if (isMediaChannelResult) {
    obj = { attachments: stateFromStores, channelId: channel.id, highlightThumbnails: true };
    isMediaChannelResult = closure_29(tmp5(10631), obj);
  }
  const items3 = [isMediaChannelResult];
  obj1 = { style: tmp.actions, children: null };
  if (!stateFromStores1) {
    const items4 = [stateFromStores1, , ,];
    if (tmp10) {
      const obj2 = {
        accessibilityLabel: null,
        style: null,
        IconComponent: null,
        onPress: null,
        foregroundRipple: true,
      };
      const intl2 = tmp2(1114).intl;
      obj2.accessibilityLabel = intl2.string(tmp2(1114).t["112vVE"]);
      const items5 = [,];
      ({ actionButton: arr9[0], mediaButton: arr9[1] } = tmp);
      obj2.style = items5;
      obj2.IconComponent = tmp2(8862).TagIcon;
      obj2.onPress = function onPress() {
        timestampProducer.dismiss();
        const obj = {
          parentChannel: channel,
          onSave(arg0) {
            dependencyMap(arg0);
            if (!tmp5) {
              closure_1_5();
            }
          },
          title: null,
          tags: null,
          onClose: null,
        };
        const intl = util.intl;
        obj.title = intl.string(util.t.HPu3kq);
        obj.tags = tags;
        obj.onClose = function onClose() {
          if (!tmp4) {
            closure_1_5();
          }
        };
        obj.openLazy(asyncRequireImpl(11248, dependencyMap.paths), "ForumPostTagsActionSheet", obj);
      };
      tmp10 = closure_29(tmp2(7377).HeaderActionButton, obj2);
    }
    items4[1] = tmp10;
    let tmp18 = lastInput === tmp2(10259).PostComposerInputs.CONTENT;
    if (tmp18) {
      const obj3 = {
        accessibilityLabel: null,
        style: null,
        IconComponent: null,
        onPress: null,
        foregroundRipple: true,
      };
      const intl3 = tmp2(1114).intl;
      obj3.accessibilityLabel = intl3.string(tmp2(1114).t.iZ7Mz9);
      obj3.style = tmp.actionButton;
      obj3.IconComponent = tmp2(8757).ReactionIcon;
      obj3.onPress = onShowExpressionPicker;
      tmp18 = closure_29(tmp2(7377).HeaderActionButton, obj3);
    }
    items4[2] = tmp18;
    const obj4 = { style: tmp.postButtonWrapper, children: null };
    const intl4 = tmp2(1114).intl;
    const string = intl4.string;
    const t = tmp2(1114).t;
    if (isEdit) {
      let stringResult = string(t["R3BPH+"]);
    } else {
      stringResult = string(t.pIuQI6);
    }
    const obj5 = { text: stringResult, loading: submitting, disabled: null, icon: null, onPress: null };
    if (!submitting) {
      submitting = !canPost;
    }
    obj5.disabled = submitting;
    const obj6 = { size: "sm", color: tmp5(576).colors.WHITE };
    obj5.icon = closure_29(tmp2(5071).ChatIcon, obj6);
    obj5.onPress = function onPress() {
      if (canPost) {
        _slicedToArray({});
      }
    };
    obj4.children = closure_29(tmp2(4975).Button, obj5);
    items4[3] = closure_29(tmp13, obj4);
    obj1.children = items4;
    items3[1] = tmp12(tmp13, obj1);
    obj.children = items3;
    return tmp12(tmp13, obj);
  } else {
    const obj7 = { accessibilityLabel: null, style: null, IconComponent: null, onPress: null, foregroundRipple: true };
    let intl = tmp2(1114).intl;
    obj7.accessibilityLabel = intl.string(tmp2(1114).t.aDZSuz);
    const items6 = [,];
    ({ actionButton: arr7[0], mediaButton: arr7[1] } = tmp);
    obj7.style = items6;
    if (tmp8) {
      let ImageIcon = tmp2(11246).KeyboardIcon;
    } else {
      ImageIcon = tmp2(5087).ImageIcon;
    }
    obj7.IconComponent = ImageIcon;
    obj7.onPress = function onPress() {
      if (closure_8) {
        noop();
      } else {
        const result = MediaKeyboardUtils.showSimpleMediaKeyboard(channel);
        timestampProducer.dismiss();
      }
      const result1 = tracking_Tracking.trackForumChannelMediaUploaderClicked({ isMobile: true });
    };
    closure_29(tmp2(7377).HeaderActionButton, obj7);
  }
}
get_ActivityIndicator = fn(17);
({
  Keyboard: metroRequire,
  Pressable: closure_7,
  StyleSheet,
  Text: closure_8,
  View: closure_9,
} = get_ActivityIndicator);
const DraftType = fn(4901).DraftType;
const SlowmodeType = fn(7687).SlowmodeType;
let Constants = fn(1074);
({ AbortCodes: closure_21, MAX_CHANNEL_NAME_LENGTH: closure_22, Permissions: closure_23 } = Constants);
const ChannelFlags = fn(1964).ChannelFlags;
const ContentDismissActionType = fn(1954).ContentDismissActionType;
const ExpressionPickerViewType = fn(1219).ExpressionPickerViewType;
let closure_27 = fn(1113).OpenThreadAnalyticsLocations;
Constants = fn(1085);
({ NOOP: closure_28, Fonts } = Constants);
const jsxProd = fn(21);
({ jsx: closure_29, jsxs: closure_30, Fragment: items } = jsxProd);
const re32 = /(#"[^"]*"|[@#]\S+|:[\w+-]+:)/g;
fn(4560);
let createStyles = {
  container: null,
  scrollViewContentContainer: null,
  avatarContainer: null,
  avatar: null,
  titleInput: null,
  titleInputText: null,
  contentInput: null,
  mentionText: null,
  postButtonWrapper: null,
  tags: null,
  tagIcon: null,
  editor: null,
  editorBody: null,
  usernameToChannel: null,
  channelName: null,
  actionsContainer: null,
  actions: null,
  actionButton: null,
  mediaButton: null,
  horizontalAutocomplete: null,
  nameError: null,
  messageError: null,
};
createStyles = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, position: "relative" };
createStyles.container = createStyles;
createStyles.scrollViewContentContainer = { paddingBottom: 16 };
createStyles.avatarContainer = { height: 40 };
createStyles.avatar = { marginRight: 12 };
createStyles.titleInput = { padding: 8 };
createStyles.titleInputText = {
  minHeight: 40,
  height: "auto",
  fontFamily: Fonts.DISPLAY_SEMIBOLD,
  color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY,
};
let size = {
  width: "100%",
  height: "100%",
  padding: 0,
  lineHeight: 20,
  color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY,
  textAlignVertical: "top",
};
createStyles.contentInput = size;
let obj1 = {
  minHeight: 40,
  height: "auto",
  fontFamily: Fonts.DISPLAY_SEMIBOLD,
  color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY,
};
createStyles.mentionText = { color: nativeDefault.unsafe_rawColors.BRAND_500 };
createStyles.postButtonWrapper = { marginLeft: "auto" };
createStyles.tags = { flexDirection: "row", alignItems: "center", padding: 8 };
createStyles.tagIcon = { marginRight: 8 };
createStyles.editor = { flex: 1, flexDirection: "row", paddingHorizontal: 12, paddingTop: 8 };
createStyles.editorBody = { width: "100%", flex: 1, flexDirection: "column", minHeight: 200 };
createStyles.usernameToChannel = { flex: 1, flexDirection: "row", alignItems: "flex-end" };
createStyles.channelName = { lineHeight: 20, flex: 1 };
let obj3 = {};
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj3.borderTopWidth = StyleSheet.hairlineWidth;
obj3.borderTopColor = nativeDefault.colors.BORDER_SUBTLE;
obj3.backgroundColor = nativeDefault.colors.BACKGROUND_BASE_LOW;
obj3.top = undefined;
createStyles.actionsContainer = obj3;
createStyles.actions = { flex: 1, flexDirection: "row", alignItems: "center", padding: 8, width: "100%" };
const size1 = {
  height: 40,
  minHeight: 40,
  maxHeight: 40,
  width: 40,
  minWidth: 40,
  maxWidth: 40,
  borderRadius: 20,
  color: nativeDefault.colors.TEXT_DEFAULT,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL,
  marginLeft: 0,
  marginRight: 0,
  overflow: "hidden",
};
createStyles.actionButton = size1;
createStyles.mediaButton = { marginRight: 8 };
const rect = {
  position: "absolute",
  bottom: 0,
  left: 0,
  right: 0,
  zIndex: 100,
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
};
createStyles.horizontalAutocomplete = rect;
createStyles.nameError = { marginBottom: 16, marginLeft: 16, marginRight: 16 };
createStyles.messageError = { marginTop: 8 };
let closure_33 = createStyles.createStyles(createStyles);
let __initData = {
  code: "function ForumComposerTsx1({contentOffset:{y:y}}){const{scrollTopValue}=this.__closure;return scrollTopValue.set(y);}",
};
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
  let obj22;
  let memo2;
  function MediaPostMultipleThumbnailActionSheetImporter() {
    return channel(threadSettingsDraft[52])(threadSettingsDraft[51], threadSettingsDraft.paths);
  }
  const tmp = blurLastInput();
  closure_6 = tmp;
  const analyticsLocations = thread(threadSettingsDraft[22])().analyticsLocations;
  let obj = isEdit;
  const ref = isEdit.useRef(null);
  let obj1 = require("initialize");
  let items = [currentUser];
  const stateFromStores = obj1.useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    if (currentUser == null) {
      currentUser = null;
    }
    return currentUser;
  }, []);
  let obj2 = require("initialize");
  const items1 = [stateFromStores5];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => stateFromStores5.useReducedMotion);
  let obj3 = require("initialize");
  const items2 = [value];
  const stateFromStores2 = obj3.useStateFromStores(items2, () => GuildMemberStore.getSelfMember(channel.guild_id));
  let obj4 = require("initialize");
  const items3 = [closure_12];
  const str = obj4.useStateFromStores(items3, () => DraftStore.getDraft(channel.id, DraftType.ChannelMessage));
  let obj5 = require("initialize");
  const items4 = [theme];
  const stateFromStores3 = obj5.useStateFromStores(items4, () =>
    channel(threadSettingsDraft[24]).isThemeDark(theme.theme),
  );
  const unsafe_rawColors = thread(threadSettingsDraft[21]).unsafe_rawColors;
  let tmp10 = stateFromStores3 ? unsafe_rawColors.PRIMARY_330 : unsafe_rawColors.PRIMARY_460;
  let tmp5Result = tmp5(tmp3[23]);
  const items5 = [closure_17];
  const stateFromStores4 = tmp5Result.useStateFromStores(items5, () =>
    SlowmodeStore.getSlowmodeCooldownGuess(channel.id, SlowmodeType.CreateThread),
  );
  tmp5Result = tmp5(tmp3[23]);
  const items6 = [first1];
  stateFromStores5 = tmp5Result.useStateFromStores(items6, () =>
    UploadAttachmentStore.getUploads(channel.id, DraftType.ChannelMessage),
  );
  let tmp12 = thread(threadSettingsDraft[25])();
  theme = tmp12;
  let tmp13 = thread(threadSettingsDraft[26])();
  closure_12 = tmp13;
  let tmp14 = thread(threadSettingsDraft[27])(parentChannel);
  [tmp17, c13] = message(obj.useState(false), 2);
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
  let tmp15Result = tmp15(obj.useState(str2), 2);
  value = tmp15Result[0];
  closure_15 = tmp15Result[1];
  let tmp16 = message(obj.useState(false), 2);
  const channelTemplate = require("ForumHooks").useChannelTemplate(parentChannel);
  let str3 = "";
  if (isEdit) {
    str3 = "";
    if (null != message) {
      str3 = "";
      if (null != thread) {
        let tmp2Result = tmp2(tmp3[29]);
        str3 = tmp2Result.unparse(message.content, thread.id);
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
  tmp15Result = tmp15(obj.useState(str3), 2);
  str4 = tmp15Result[0];
  closure_17 = tmp24;
  const tmp5Result1 = require("ForumHooks");
  appliedTags = require("ForumTagHooks").useAppliedTags(thread);
  const tmp15Result1 = message(
    obj.useState(() => {
      let found = appliedTags;
      let availableTags = channel.availableTags;
      let map;
      if (!isEdit) {
        appliedTags = undefined;
        if (tmp != null) {
          appliedTags = tmp.appliedTags;
        }
        if (null != appliedTags) {
          if (0 !== appliedTags.size) {
            if (availableTags == null) {
              availableTags = [];
            }
            map = new Map(
              availableTags.map((id) => {
                const items = [id.id, id];
                return items;
              }),
            );
            const _Array = Array;
            const mapped = Array.from(appliedTags).map((item) => map.get(item));
            found = mapped.filter((item) => null != item);
            const arr = Array.from(appliedTags);
          }
        }
        found = [];
      }
      return found;
    }),
    2,
  );
  first1 = tmp15Result1[0];
  currentUser = tmp15Result1[1];
  const tmp5Result2 = require("ForumTagHooks");
  [tmp28, c21] = message(obj.useState(null), 2);
  const tmp15Result3 = message(obj.useState(null), 2);
  maxLength = tmp15Result3[1];
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
    tmp2Result = tmp2(tmp3[31]);
    str5 = tmp2Result.getName(stateFromStores);
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
  const tmp15Result2 = message(obj.useState(null), 2);
  sharedValue = require("ReanimatedRexport").useSharedValue(0);
  const tmp5Result3 = require("ReanimatedRexport");
  class D {
    constructor(arg0) {
      return closure_24.set(parentChannel.contentOffset.y);
    }
  }
  D.__closure = { scrollTopValue: sharedValue };
  D.__workletHash = 16880842576840;
  D.__initData = __initData;
  const items7 = [isEdit, parentChannel.id];
  const tmp5Result4 = require("ReanimatedRexport");
  const items8 = [isEdit, parentChannel.id];
  const callback1 = obj.useCallback((name) => {
    if (!isEdit) {
      const obj = { name };
      obj.changeThreadSettings(channel.id, obj);
    }
    closure_15(name);
  }, items7);
  const items9 = [onClose];
  const callback2 = obj.useCallback((arr) => {
    currentUser(arr);
    if (!isEdit) {
      const obj = { appliedTags: null };
      const _Set = Set;
      const set = new Set(arr.map((id) => id.id));
      obj.appliedTags = set;
      obj.changeThreadSettings(channel.id, obj);
    }
  }, items8);
  callback3 = obj.useCallback((channel) => {
    onClose(true);
    const obj = { navigationReplace: true, source: memo1.FORUM };
    obj.transitionToThread(channel, obj);
  }, items9);
  const items10 = [first1];
  memo = obj.useMemo(() => new Set(first1.map((id) => id.id)), items10);
  const items11 = [appliedTags];
  memo1 = obj.useMemo(() => new Set(appliedTags.map((id) => id.id)), items11);
  _require = onClose(function* (arg0, value) {
    if (v1 === 2) {
      v1 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
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
        v1 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            v1 = 3;
            throw value;
          } else if (arg0 === 2) {
            v1 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            if (null == tmp2) {
              v1 = 3;
            } else {
              let tmp6 = null != message;
              if (tmp6) {
                tmp6 = tmp45.content !== tmp42;
              }
              if (tmp6) {
                let obj2 = thread(threadSettingsDraft[36]);
                const obj1 = { content: tmp42 };
                obj2.editMessage(tmp2.id, tmp45.id, obj1);
              }
              let obj4 = thread(threadSettingsDraft[37]);
              if (!obj4.isEqual(memo1, memo)) {
                let obj5 = thread(threadSettingsDraft[38]);
                const _Array = Array;
                c2 = 1;
                v1 = 1;
                obj2 = { value: obj5.updateForumPostTags(tmp2.id, Array.from(tmp14)), done: false };
                return obj2;
              }
              tmp14 = memo;
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
              const obj3 = { value, done: true };
              return obj3;
            }
          } else if (arg0 === 1) {
            v1 = 3;
            throw value;
          } else if (arg0 === 2) {
            v1 = 3;
            obj = { value, done: true };
            return obj;
          }
          if (str4.getChannelId() === tmp2.id) {
            v1(true);
          }
        }
        if (tmp2.name !== name) {
          obj4 = { name };
          c2 = 2;
          v1 = 1;
          obj5 = { value: thread(threadSettingsDraft[39]).saveChannel(tmp2.id, obj4), done: false };
          return obj5;
        }
      } catch (tmp37) {
        v1 = tmp;
        throw tmp37;
      }
    }
  });
  const items12 = [thread, message, memo1, memo, value, callback3, onClose];
  callback4 = obj.useCallback(function () {
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
        const tmp2Result1 = tmp2(tmp3[37]);
      }
      tmp49 = tmp51;
    }
    tmp48 = tmp49;
  }
  const animatedScrollHandler = require("ReanimatedRexport").useAnimatedScrollHandler(D);
  const tmp41 = onClose;
  tmp44 = null != name1 && threadSettingsDraft.name.length > 0;
  tmp45 = stateFromStores5.length > 0;
  createForumPost = require("useCreateThread").useCreateForumPost({
    parentChannel,
    threadSettings: threadSettingsDraft,
    appliedTags: memo,
    onThreadCreated: callback3,
  });
  _require = tmp41(function* (arg0, value) {
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp7 === 3) {
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
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            obj = { value, done: true };
            return obj;
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
              const obj1 = { value, done: true };
              return obj1;
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
                let obj2 = { value: callback4(content), done: false };
                return obj2;
              } else {
                let tmp90;
                if (null != stickerId) {
                  const items = [stickerId];
                  tmp90 = items;
                }
                c5 = 5;
                c6 = 1;
                let obj3 = { value: createForumPost(content, tmp90, stateFromStores5), done: false };
                return obj3;
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
                  let obj4 = channel(threadSettingsDraft[41]);
                  _undefined2(obj4.makeAutomodViolationError(closure_129_2.body, channel));
                } else {
                  const body4 = closure_129_2.body;
                  let code2;
                  if (body4 != null) {
                    code2 = body4.code;
                  }
                  if (code2 === _undefined2.AUTOMOD_MESSAGE_BLOCKED) {
                    obj3 = channel(threadSettingsDraft[41]);
                    closure_1_22(obj3.makeAutomodViolationError(closure_129_2.body, channel));
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
                      obj2 = channel(threadSettingsDraft[41]);
                      _undefined2(obj2.makeApiNameValidationError());
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
                  obj4 = { value, done: true };
                  return obj4;
                }
              } else if (arg0 === 1) {
                c6 = 3;
                throw value;
              } else if (arg0 === 2) {
                c4 = 0;
                _undefined(false);
                c6 = 3;
                obj = { value, done: true };
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
  callback5 = obj.useCallback(function () {
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
  const items15 = [tmp15Result[1], parentChannel.id];
  const callback6 = obj.useCallback((stickerId) => {
    stickerId = stickerId.stickerId;
    if (stateFromStores4 <= 0) {
      if (str4.length > closure_12) {
        let obj = { title: null, body: null };
        const intl4 = channel(threadSettingsDraft[43]).intl;
        obj.title = intl4.string(channel(threadSettingsDraft[43]).t.l8rYLt);
        const intl5 = channel(threadSettingsDraft[43]).intl;
        obj = { currentLength: arr.length, maxLength: tmp40 };
        obj.body = intl5.formatToPlainString(channel(threadSettingsDraft[43]).t.FfjF15, obj);
        thread(threadSettingsDraft[42]).show(obj);
        const obj4 = thread(threadSettingsDraft[42]);
      } else {
        const RESTRICTIONS = channel(threadSettingsDraft[44]).RESTRICTIONS;
        const iter = RESTRICTIONS[Symbol.iterator]();
        while (iter !== undefined) {
          let checkResult = iter.next().check(str4, stickerId, null != stickerId.getGuildId());
          if (false !== checkResult) {
            obj = thread(threadSettingsDraft[42]);
            let obj1 = { title: null, body: null, confirmText: null, onConfirm: null, cancelText: null };
            let intl = channel(threadSettingsDraft[43]).intl;
            obj1.title = intl.string(channel(threadSettingsDraft[43]).t.mY3Y38);
            obj1.body = checkResult.body;
            let intl2 = channel(threadSettingsDraft[43]).intl;
            obj1.confirmText = intl2.string(channel(threadSettingsDraft[43]).t.KJnHq3);
            obj1.onConfirm = function onConfirm() {
              callback5({ stickerId });
            };
            let intl3 = channel(threadSettingsDraft[43]).intl;
            obj1.cancelText = intl3.string(channel(threadSettingsDraft[43]).t.fsBWmS);
            let showResult1 = obj.show(obj1);
            iter.return();
          }
        }
        const obj2 = { stickerId };
        callback5(obj2);
      }
    }
  }, items14);
  const callback7 = obj.useCallback((draft) => {
    DraftActionCreatorsDefault.changeDraft(channel.id, draft, DraftType.ChannelMessage);
    closure_17(draft);
  }, items15);
  const tmp5Result5 = require("useCreateThread");
  const focusHandlers = require("useFocusHandlers").useFocusHandlers({ titleInput: ref, contentInput: ref1 });
  ({ setFocusedInput: c31, focusLastInput } = focusHandlers);
  blurLastInput = focusHandlers.blurLastInput;
  obj = { start: str4.length, end: null };
  const tmp5Result6 = require("useFocusHandlers");
  [tmp59, c34] = message(obj.useState(obj), 2);
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
            tmp3 = tmp2;
          }
          current.setSelection(channel, tmp3);
        });
      }
    }
  }, []);
  const tmp15Result4 = message(obj.useState(obj), 2);
  onPressEmoji = require("ExpressionPickerHandlers").usePressEmojiHandler({
    selection: tmp59,
    draftContent: str4,
    handleTextChange: callback7,
    focusTextInput: callback,
    setSelection: callback9,
  });
  const tmp5Result7 = require("ExpressionPickerHandlers");
  onPressGIF = require("ExpressionPickerHandlers").usePressGIFHandler({
    selection: tmp59,
    draftContent: str4,
    handleTextChange: callback7,
    focusTextInput: callback,
    setSelection: callback9,
  });
  const tmp5Result8 = require("ExpressionPickerHandlers");
  const tmp5Result9 = require("usePressHorizontalAutocompleteItemHandler");
  const pressHorizontalAutocompleteItemHandler =
    require("usePressHorizontalAutocompleteItemHandler").usePressHorizontalAutocompleteItemHandler({
      draftContent: str4,
      handleTextChange: callback7,
      setSelection: callback9,
      channel: parentChannel,
    });
  onBackspace = require("useBackspaceHandler").useBackspaceHandler({
    selection: tmp59,
    draftContent: str4,
    handleTextChange: callback7,
  });
  const tmp5Result10 = require("useBackspaceHandler");
  [tmp64, c38] = message(obj.useState(0), 2);
  obj22 = parentChannel;
  const callback10 = obj.useCallback((nativeEvent) => {
    _undefined3(nativeEvent.nativeEvent.layout.height);
  }, []);
  if (isEdit) {
    obj22 = thread;
  }
  const items16 = [obj22];
  memo2 = obj.useMemo(() => {
    let parserState = null;
    if (null != obj22) {
      parserState = MessageParser.createParserState(tmp);
    }
    return parserState;
  }, items16);
  const items17 = [str4, obj22, memo2, tmp.mentionText];
  const memo3 = obj.useMemo(() => {
    if (0 !== str4.length) {
      if (null != obj22) {
        if (null != memo2) {
          const parts = str4.split(re32);
          let mapped = null;
          if (1 !== parts.length) {
            mapped = parts.map((children, index) => {
              if (index % 2 === 1) {
                let obj = thread(threadSettingsDraft[29]);
                if (obj.parse(obj22, children, memo2).content !== children) {
                  obj = { style: mentionText.mentionText, children };
                  return createForumPost(stateFromStores, obj, index);
                }
              }
              obj = { children };
              return createForumPost(isEdit.Fragment, obj, index);
            });
          }
          return mapped;
        }
      }
    }
    return null;
  }, items17);
  if (null == obj22) {
    return null;
  } else {
    obj = { content: value };
    const renderErrorResult = tmp5(tmp3[41]).renderError(tmp28, obj);
    const tmp5Result11 = tmp5(tmp3[41]);
    obj1 = { content: str4, tags: first1 };
    const renderErrorResult1 = tmp5(tmp3[41]).renderError(tmp15Result3[0], obj1);
    if (obj22.isMediaChannel()) {
      const items18 = [tmp5(tmp3[50]).DismissibleContent.MEDIA_CHANNEL_MULTIPLE_THUMBNAIL_NOTICE];
      let items19 = items18;
    } else {
      items19 = [];
    }
    obj2 = { style: null, children: null };
    const items20 = [tmp.container];
    obj3 = { paddingTop: insets.top, paddingBottom: insets.bottom + tmp64 };
    items20[1] = obj3;
    obj2.style = items20;
    obj4 = {
      channel: parentChannel,
      height: 44,
      onClose,
      onGuidelinesPress() {
        blurLastInput();
        const obj = {
          channel,
          onClose() {
            focusLastInput();
          },
        };
        const result = obj.openForumGuidelinesActionSheet(obj);
      },
      submitting: tmp17,
      title: tmp68,
    };
    const items21 = [createForumPost(tmp2(tmp3[53]), obj4)];
    obj5 = {
      onScroll: animatedScrollHandler,
      scrollEventThrottle: 16,
      keyboardShouldPersistTaps: "always",
      nestedScrollEnabled: false,
      contentContainerStyle: tmp.scrollViewContentContainer,
      keyboardDismissMode: "on-drag",
      children: null,
    };
    let obj6 = {
      ref,
      style: null,
      inputTextStyle: null,
      showTopContainer: false,
      placeholder: null,
      placeholderTextColor: null,
      large: true,
      multiline: true,
      value: null,
      clearButtonVisibility: null,
      maxLength: null,
      onChange: null,
      onBlur: null,
      onFocus: null,
      autoFocus: true,
      autoCorrect: true,
      textContentType: "none",
      returnKeyType: "next",
      onNext: null,
    };
    ({ titleInput: obj28.style, titleInputText: obj28.inputTextStyle } = tmp);
    let intl = tmp5(tmp3[43]).intl;
    obj6.placeholder = intl.string(tmp5(tmp3[43]).t.lU4dDS);
    obj6.placeholderTextColor = tmp10;
    obj6.value = value;
    obj6.clearButtonVisibility = tmp5(tmp3[56]).ClearButtonVisibility.NEVER;
    obj6.maxLength = maxLength;
    obj6.onChange = callback1;
    obj6.onBlur = function onBlur() {
      if (!isEdit) {
        let name;
        if (threadSettingsDraft != null) {
          name = tmp.name;
        }
        if (null != name) {
          let name1;
          if (tmp != null) {
            name1 = tmp.name;
          }
          const tmp6Result = sanitizeThreadNameDefault(name1, true);
          let name2;
          if (tmp != null) {
            name2 = tmp.name;
          }
          if (tmp6Result !== name2) {
            const obj = { name: tmp6Result };
            tmp4(7777).changeThreadSettings(channel.id, obj);
            closure_15(tmp6Result);
            const tmp4Result = tmp4(7777);
          }
          tmp4 = importDefault;
        }
      }
    };
    obj6.onFocus = function onFocus() {
      if (!tmp4) {
        const obj = { type: tmp2(1609).KeyboardTypes.SYSTEM, context: { keyboardWillOpen: true } };
        tmp2(1481).setKeyboardType(obj);
        const tmp2Result = tmp2(1481);
      }
      _undefined(useFocusHandlers.PostComposerInputs.TITLE);
    };
    obj6.onNext = callback;
    const items22 = [createForumPost(tmp5(tmp3[55]).FormInput, obj6), ,];
    let tmp71Result = null;
    if (null != renderErrorResult) {
      const obj7 = { style: tmp.nameError, children: renderErrorResult };
      tmp71Result = tmp71(tmp2(tmp3[60]), obj7);
    }
    items22[1] = tmp71Result;
    const obj8 = { style: tmp.editor, children: null };
    tmp71Result = null != stateFromStores;
    if (tmp71Result) {
      let obj9 = {
        style: tmp.avatarContainer,
        onPress() {
          const obj = {
            userId: stateFromStores.id,
            channelId: obj22.id,
            messageId: null,
            sourceAnalyticsLocations: null,
          };
          let id;
          if (message != null) {
            id = message.id;
          }
          obj.messageId = id;
          obj.sourceAnalyticsLocations = analyticsLocations;
          return showUserProfileActionSheetDefault(obj);
        },
        children: null,
      };
      const obj10 = {
        animate: !stateFromStores1,
        style: tmp.avatar,
        user: stateFromStores,
        guildId: null,
        avatarDecoration: null,
        accessibilityLabel: null,
      };
      let guildId;
      if (parentChannel != null) {
        guildId = parentChannel.getGuildId();
      }
      obj10.guildId = guildId;
      obj10.avatarDecoration = stateFromStores.avatarDecoration;
      let intl2 = tmp5(tmp3[43]).intl;
      const obj11 = { nickname: str5 };
      obj10.accessibilityLabel = intl2.formatToPlainString(tmp5(tmp3[43]).t.LvU3nj, obj11);
      obj9.children = tmp71(tmp5(tmp3[56]).Avatar, obj10);
      tmp71Result = tmp71(analyticsLocations, obj9);
    }
    const items23 = [tmp71Result];
    const obj12 = { style: tmp.editorBody, children: null };
    const obj13 = { style: tmp.usernameToChannel, accessibilityLabel: null, children: null };
    let intl3 = tmp5(tmp3[43]).intl;
    const obj14 = { nickname: str5, channelName: tmp14 };
    obj13.accessibilityLabel = intl3.formatToPlainString(tmp5(tmp3[43]).t["QicUf+"], obj14);
    const obj15 = { name: str5, color: colorString, colors: colorStrings };
    const items24 = [createForumPost(tmp5(tmp3[62]).RoleLabel, obj15)];
    const obj16 = {
      color: "text-default",
      variant: "text-xs/medium",
      style: tmp.channelName,
      lineClamp: 1,
      children: null,
    };
    let intl4 = tmp5(tmp3[43]).intl;
    const obj17 = { channelName: tmp14 };
    const items25 = [" ", intl4.format(tmp5(tmp3[43]).t["6Y1Kev"], obj17)];
    obj16.children = items25;
    items24[1] = callback5(tmp5(tmp3[63]).Text, obj16);
    obj13.children = items24;
    const items26 = [callback5(stateFromStores4, obj13), ,];
    let tmp71Result1 = null;
    if (null != renderErrorResult1) {
      const obj18 = { style: tmp.messageError, children: renderErrorResult1 };
      tmp71Result1 = tmp71(tmp2(tmp3[60]), obj18);
    }
    items26[1] = tmp71Result1;
    const obj19 = {
      ref: ref1,
      style: tmp.contentInput,
      multiline: true,
      scrollEnabled: false,
      placeholder: null,
      placeholderTextColor: null,
      onChangeText: null,
      onSelectionChange: null,
      onFocus: null,
      showSoftInputOnFocus: null,
      children: null,
    };
    let intl5 = tmp5(tmp3[43]).intl;
    obj19.placeholder = intl5.string(tmp5(tmp3[43]).t["8IPnv1"]);
    obj19.placeholderTextColor = tmp10;
    obj19.onChangeText = callback7;
    obj19.onSelectionChange = callback8;
    obj19.onFocus = function onFocus() {
      if (closure_11 === KeyboardTypes.KeyboardTypes.MEDIA) {
        const obj = { type: tmp(1609).KeyboardTypes.SYSTEM, context: { keyboardWillOpen: true } };
        tmp(1481).setKeyboardType(obj);
        const tmpResult = tmp(1481);
      }
      _undefined(useFocusHandlers.PostComposerInputs.CONTENT);
    };
    obj19.showSoftInputOnFocus = tmp12 !== tmp5(tmp3[58]).KeyboardTypes.EXPRESSION;
    let tmp71Result2 = str4;
    if (null != memo3) {
      const obj20 = { children: memo3 };
      tmp71Result2 = tmp71(stateFromStores, obj20);
    }
    const obj21 = { children: null };
    obj19.children = tmp71Result2;
    items26[2] = createForumPost(tmp5(tmp3[56]).TextInput, obj19);
    obj12.children = items26;
    items23[1] = callback5(stateFromStores4, obj12);
    obj8.children = items23;
    items22[2] = callback5(stateFromStores4, obj8);
    obj5.children = items22;
    const items27 = [callback5(tmp2(tmp3[33]).ScrollView, obj5), , , ,];
    obj22 = { tags: first1 };
    items27[1] = createForumPost(onPressEmoji, obj22);
    const obj23 = {
      channel: parentChannel,
      tags: first1,
      onTagsSave: callback2,
      canPost: tmp48,
      submitting: tmp17,
      onSubmit: callback6,
      onShowExpressionPicker() {
        timestampProducer.dismiss();
        const obj = { channelId: channel.id, onPressEmoji, onPressSticker, onPressGIF, onBackspace, visibleTabs: null };
        const items = [,];
        ({ EMOJI: arr[0], GIF: arr[1] } = ExpressionPickerViewType);
        obj.visibleTabs = items;
        const result = obj.openExpressionPickerActionSheet(obj);
      },
      focusLastInput,
      lastInput: focusHandlers.focusedInput,
      isEdit,
      onLayout: callback10,
    };
    items27[2] = createForumPost(onPressGIF, obj23);
    const obj24 = { style: null, onPressAutocompleteItem: null, text: null, selection: null, channel: null };
    const items28 = [tmp.horizontalAutocomplete];
    const obj25 = { bottom: insets.bottom };
    items28[1] = obj25;
    obj24.style = items28;
    obj24.onPressAutocompleteItem = pressHorizontalAutocompleteItemHandler;
    obj24.text = str4;
    obj24.selection = tmp59;
    obj24.channel = obj22;
    items27[3] = createForumPost(tmp2(tmp3[65]), obj24);
    const obj26 = {
      contentTypes: items19,
      children(markAsDismissed) {
        markAsDismissed = markAsDismissed.markAsDismissed;
        let tmp3 = null;
        if (
          markAsDismissed.visibleContent ===
          dismissible_content.DismissibleContent.MEDIA_CHANNEL_MULTIPLE_THUMBNAIL_NOTICE
        ) {
          const obj = {
            markAsDismissed() {
              return markAsDismissed(callback3.UNKNOWN);
            },
            actionSheetKey: "ThumbnailBottomSheet",
            importer: MediaPostMultipleThumbnailActionSheetImporter,
          };
          tmp3 = __initData7(DismissibleActionSheet.DismissibleActionSheet, obj);
        }
        return tmp3;
      },
    };
    items27[4] = createForumPost(tmp2(tmp3[66]), obj26);
    obj21.children = items27;
    items21[1] = callback5(c31, obj21);
    obj2.children = items21;
    return callback5(stateFromStores4, obj2);
  }
  const tmp15Result5 = message(obj.useState(0), 2);
}
