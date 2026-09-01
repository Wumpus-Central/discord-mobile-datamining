// discord_app/modules/forums/native/composer/ForumComposer.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import useKeyboardTypeDefault from "../../../keyboard/native/useKeyboardType.tsx";
import useSafeAreaInsetsKeyboardAwareDefault from "../../../safe_area/useSafeAreaInsetsKeyboardAware.native.tsx";
import TagIcon from "../../../../design/components/Icon/native/redesign/generated/TagIcon.tsx";
import closure_3 from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import closure_4 from "../../../../../_runtime/metro/00032__slicedToArray.js";
import closure_5 from "../../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_10 from "../../../a11y/AccessibilityStore.tsx";
import closure_11 from "../../../user_settings/ThemeStore.tsx";
import closure_12 from "../../../../stores/DraftStore.tsx";
import { DraftType } from "../../../../stores/DraftStore.tsx";
import closure_14 from "../../../../stores/GuildMemberStore.tsx";
import closure_15 from "../../../../stores/PermissionStore.tsx";
import closure_16 from "../../../../stores/SelectedChannelStore.tsx";
import closure_17 from "../../../../stores/SlowmodeStore.tsx";
import { SlowmodeType } from "../../../../stores/SlowmodeStore.tsx";
import closure_19 from "../../../../stores/UploadAttachmentStore.tsx";
import closure_20 from "../../../../stores/UserStore.tsx";
import ME from "../../../../Constants.tsx";
import { ChannelFlags } from "../../../channel/ChannelConstants.tsx";
import { ContentDismissActionType } from "../../../dismissible_content/DismissibleContentConstants.tsx";
import { ExpressionPickerViewType } from "../../../expression_picker/ExpressionPickerConstants.tsx";
import { OpenThreadAnalyticsLocations as closure_27 } from "../../../threads/ThreadConstants.tsx";
import sum from "../../../../../discord_common/js/shared/Constants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
function Tags(tags) {
  tags = tags.tags;
  const tmp = callback3();
  let tmp2 = null;
  if (0 !== tags.length) {
    let obj = { style: null, children: null };
    obj[0] = tmp.tags;
    obj = { size: "sm", style: null };
    obj[1] = tmp.tagIcon;
    let items = [
      callback(TagIcon.TagIcon, obj),
      tags.map((id) => {
          let tmp2 = 0 !== arg1;
          if (tmp2) {
            let obj = { style: null };
            obj[0] = { width: 4 };
            tmp2 = callback2(closure_9, obj);
          }
          obj = { children: null };
          const items = [tmp2, ];
          obj = { tag: id };
          items[1] = callback2(callback(table[69]).AppliedForumTagPill, obj);
          obj[0] = items;
          return closure_30(React.Fragment, obj, id.id);
        })
    ];
    obj[1] = items;
    tmp2 = callback2(closure_9, obj);
  }
  return tmp2;
}
function ActionBar(channel) {
  channel = channel.channel;
  ({ tags: importDefault, onTagsSave: dependencyMap, canPost } = channel);
  ({ submitting, onSubmit: closure_4, focusLastInput: closure_5, isEdit } = channel);
  closure_7 = undefined;
  closure_8 = undefined;
  ({ onShowExpressionPicker, lastInput, onLayout } = channel);
  const tmp = callback3();
  let obj = channel(589);
  const items = [closure_19];
  const stateFromStores = obj.useStateFromStores(items, () => closure_1_19.getUploads(channel.id, closure_1_13.ChannelMessage));
  obj1 = channel(589);
  const items1 = [closure_15];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => {
    let canResult = !isEdit;
    if (!isEdit) {
      canResult = closure_1_15.can(closure_1_23.ATTACH_FILES, channel);
    }
    return canResult;
  });
  const tmp6 = useKeyboardTypeDefault();
  closure_7 = tmp6;
  let isMediaChannelResult = channel.isMediaChannel();
  const tmp8 = tmp6 === channel(1626).KeyboardTypes.MEDIA;
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
  obj = { onLayout, style: items2, children: null };
  items2 = [tmp.actionsContainer, { marginBottom: useSafeAreaInsetsKeyboardAwareDefault({ includeKeyboardHeight: true }).insets.bottom }];
  if (isMediaChannelResult) {
    obj = { attachments: null, channelId: null, highlightThumbnails: true };
    obj[0] = stateFromStores;
    obj[1] = channel.id;
    isMediaChannelResult = callback(tmp5(10424), obj);
  }
  const items3 = [isMediaChannelResult, ];
  obj1 = { style: tmp.actions, children: null };
  if (!stateFromStores1) {
    const items4 = [stateFromStores1, , , ];
    if (tmp10) {
      const obj2 = { accessibilityLabel: null, style: null, IconComponent: null, onPress: null, foregroundRipple: true };
      const intl2 = tmp2(1236).intl;
      obj2[0] = intl2.string(tmp2(1236).t["112vVE"]);
      const items5 = [, ];
      ({ actionButton: arr9[0], mediaButton: arr9[1] } = tmp);
      obj2[1] = items5;
      obj2[2] = tmp2(10420).TagIcon;
      obj2[3] = function onPress() {
        isEdit.dismiss();
        let obj = closure_1_1(closure_1_2[76]);
        obj = {
          parentChannel: channel,
          onSave(arg0) {
            callback(arg0);
            if (!tmp5) {
              callback2();
            }
          },
          title: null,
          tags: null,
          onClose: null
        };
        const intl = channel(closure_1_2[43]).intl;
        obj[2] = intl.string(channel(closure_1_2[43]).t.HPu3kq);
        obj[3] = closure_1;
        obj[4] = function onClose() {
          if (!tmp4) {
            callback2();
          }
        };
        obj.openLazy(channel(closure_1_2[52])(closure_1_2[77], closure_1_2.paths), "ForumPostTagsActionSheet", obj);
      };
      tmp10 = callback(tmp2(6237).HeaderActionButton, obj2);
    }
    items4[1] = tmp10;
    let tmp18 = lastInput === tmp2(10336).PostComposerInputs.CONTENT;
    if (tmp18) {
      const obj3 = { accessibilityLabel: null, style: null, IconComponent: null, onPress: null, foregroundRipple: true };
      const intl3 = tmp2(1236).intl;
      obj3[0] = intl3.string(tmp2(1236).t.iZ7Mz9);
      obj3[1] = tmp.actionButton;
      obj3[2] = tmp2(8228).ReactionIcon;
      obj3[3] = onShowExpressionPicker;
      tmp18 = callback(tmp2(6237).HeaderActionButton, obj3);
    }
    items4[2] = tmp18;
    const obj4 = { style: null, children: null };
    obj4[0] = tmp.postButtonWrapper;
    const intl4 = tmp2(1236).intl;
    const string = intl4.string;
    const t = tmp2(1236).t;
    if (isEdit) {
      let stringResult = string(t["R3BPH+"]);
    } else {
      stringResult = string(t.pIuQI6);
    }
    const obj5 = { text: null, loading: null, disabled: null, icon: null, onPress: null };
    obj5[0] = stringResult;
    obj5[1] = submitting;
    if (!submitting) {
      submitting = !canPost;
    }
    obj5[2] = submitting;
    const obj6 = { size: "sm", color: null };
    obj6[1] = tmp5(712).colors.WHITE;
    obj5[3] = callback(tmp2(5020).ChatIcon, obj6);
    obj5[4] = function onPress() {
      if (canPost) {
        callback({});
      }
    };
    obj4[1] = callback(tmp2(4928).Button, obj5);
    items4[3] = callback(tmp13, obj4);
    obj1[1] = items4;
    items3[1] = tmp12(tmp13, obj1);
    obj[2] = items3;
    return tmp12(tmp13, obj);
  } else {
    const obj7 = { accessibilityLabel: null, style: null, IconComponent: null, onPress: null, foregroundRipple: true };
    let intl = tmp2(1236).intl;
    obj7[0] = intl.string(tmp2(1236).t.aDZSuz);
    const items6 = [, ];
    ({ actionButton: arr7[0], mediaButton: arr7[1] } = tmp);
    obj7[1] = items6;
    if (tmp8) {
      let ImageIcon = tmp2(10884).KeyboardIcon;
    } else {
      ImageIcon = tmp2(5036).ImageIcon;
    }
    obj7[2] = ImageIcon;
    obj7[3] = function onPress() {
      if (closure_8) {
        callback2();
      } else {
        const result = channel(closure_1_2[74]).showSimpleMediaKeyboard(channel);
        isEdit.dismiss();
        const obj = channel(closure_1_2[74]);
      }
      const result1 = channel(closure_1_2[75]).trackForumChannelMediaUploaderClicked({ isMobile: true });
    };
    callback(tmp2(6237).HeaderActionButton, obj7);
    const tmp15 = callback;
  }
}
({ Keyboard: closure_6, Pressable: error, StyleSheet, Text: closure_8, View: c9 } = get_ActivityIndicator);
({ AbortCodes: closure_21, MAX_CHANNEL_NAME_LENGTH: closure_22, Permissions: closure_23 } = ME);
({ NOOP: closure_28, Fonts } = sum);
({ jsx: closure_29, jsxs: closure_30, Fragment: closure_31 } = jsxProd);
const re32 = /(#"[^"]*"|[@#]\S+|:[\w+-]+:)/g;
createCacheKey = { container: null, scrollViewContentContainer: null, avatarContainer: null, avatar: null, titleInput: null, titleInputText: null, contentInput: null, mentionText: null, postButtonWrapper: null, tags: null, tagIcon: null, editor: null, editorBody: null, usernameToChannel: null, channelName: null, actionsContainer: null, actions: null, actionButton: null, mediaButton: null, horizontalAutocomplete: null, nameError: null, messageError: null };
createCacheKey = { flex: 1, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW, position: "relative" };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { paddingBottom: 16 };
createCacheKey[2] = { height: 40 };
createCacheKey[3] = { marginRight: 12 };
createCacheKey[4] = { padding: 8 };
createCacheKey[5] = { minHeight: 40, height: "auto", fontFamily: Fonts.DISPLAY_SEMIBOLD, color: ThemesDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
let obj1 = { minHeight: 40, height: "auto", fontFamily: Fonts.DISPLAY_SEMIBOLD, color: ThemesDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
createCacheKey[6] = { width: "100%", height: "100%", padding: 0, lineHeight: 20, color: ThemesDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, textAlignVertical: "top" };
let obj2 = { width: "100%", height: "100%", padding: 0, lineHeight: 20, color: ThemesDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, textAlignVertical: "top" };
createCacheKey[7] = { color: ThemesDefault.unsafe_rawColors.BRAND_500 };
createCacheKey[8] = { marginLeft: "auto" };
createCacheKey[9] = { flexDirection: "row", alignItems: "center", padding: 8 };
createCacheKey[10] = { marginRight: 8 };
createCacheKey[11] = { flex: 1, flexDirection: "row", paddingHorizontal: 12, paddingTop: 8 };
createCacheKey[12] = { width: "100%", flex: 1, flexDirection: "column", minHeight: 200 };
createCacheKey[13] = { flex: 1, flexDirection: "row", alignItems: "flex-end" };
createCacheKey[14] = { lineHeight: 20, flex: 1 };
let obj4 = {};
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj4.borderTopWidth = StyleSheet.hairlineWidth;
obj4.borderTopColor = ThemesDefault.colors.BORDER_SUBTLE;
obj4.backgroundColor = ThemesDefault.colors.BACKGROUND_BASE_LOW;
obj4.top = undefined;
createCacheKey[15] = obj4;
createCacheKey[16] = { flex: 1, flexDirection: "row", alignItems: "center", padding: 8, width: "100%" };
let obj3 = { color: ThemesDefault.unsafe_rawColors.BRAND_500 };
createCacheKey[17] = { height: 40, minHeight: 40, maxHeight: 40, width: 40, minWidth: 40, maxWidth: 40, borderRadius: 20, color: ThemesDefault.colors.TEXT_DEFAULT, backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_NORMAL, marginLeft: 0, marginRight: 0, overflow: "hidden" };
createCacheKey[18] = { marginRight: 8 };
let obj5 = { height: 40, minHeight: 40, maxHeight: 40, width: 40, minWidth: 40, maxWidth: 40, borderRadius: 20, color: ThemesDefault.colors.TEXT_DEFAULT, backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_NORMAL, marginLeft: 0, marginRight: 0, overflow: "hidden" };
createCacheKey[19] = { position: "absolute", bottom: 0, left: 0, right: 0, zIndex: 100, backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH };
createCacheKey[20] = { marginBottom: 16, marginLeft: 16, marginRight: 16 };
createCacheKey[21] = { marginTop: 8 };
let closure_33 = createCacheKey.createStyles(createCacheKey);
let closure_34 = { code: "function ForumComposerTsx1({contentOffset:{y:y}}){const{scrollTopValue}=this.__closure;return scrollTopValue.set(y);}" };
let obj6 = { position: "absolute", bottom: 0, left: 0, right: 0, zIndex: 100, backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH };
let result = require("set").fileFinishedImporting("modules/forums/native/composer/ForumComposer.tsx");

export default function ForumComposer(parentChannel) {
  parentChannel = parentChannel.parentChannel;
  let _require = parentChannel;
  const thread = parentChannel.thread;
  let content = thread;
  const threadSettingsDraft = parentChannel.threadSettingsDraft;
  const onClose = parentChannel.onClose;
  const message = parentChannel.message;
  const isEdit = parentChannel.isEdit;
  closure_6 = undefined;
  let analyticsLocations;
  let stateFromStores;
  let stateFromStores4;
  let stateFromStores5;
  closure_11 = undefined;
  closure_12 = undefined;
  c13 = undefined;
  let first;
  closure_15 = undefined;
  let str4;
  closure_17 = undefined;
  let appliedTags;
  let first1;
  closure_20 = undefined;
  c21 = undefined;
  closure_22 = undefined;
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
  c34 = undefined;
  closure_35 = undefined;
  closure_36 = undefined;
  closure_37 = undefined;
  c38 = undefined;
  let obj22;
  let memo2;
  function MediaPostMultipleThumbnailActionSheetImporter() {
    return lib(threadSettingsDraft[52])(threadSettingsDraft[51], threadSettingsDraft.paths);
  }
  const tmp = blurLastInput();
  closure_6 = tmp;
  analyticsLocations = content(threadSettingsDraft[22])().analyticsLocations;
  let obj = isEdit;
  const ref = isEdit.useRef(null);
  obj1 = _require(threadSettingsDraft[23]);
  let items = [closure_20];
  stateFromStores = obj1.useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    if (currentUser == null) {
      currentUser = null;
    }
    return currentUser;
  }, []);
  let obj2 = _require(threadSettingsDraft[23]);
  const items1 = [stateFromStores5];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => stateFromStores5.useReducedMotion);
  let obj3 = _require(threadSettingsDraft[23]);
  const items2 = [first];
  const stateFromStores2 = obj3.useStateFromStores(items2, () => first.getSelfMember(lib.guild_id));
  let obj4 = _require(threadSettingsDraft[23]);
  const items3 = [closure_12];
  const str = obj4.useStateFromStores(items3, () => draft.getDraft(lib.id, _undefined.ChannelMessage));
  let obj5 = _require(threadSettingsDraft[23]);
  const items4 = [closure_11];
  const stateFromStores3 = obj5.useStateFromStores(items4, () => lib(threadSettingsDraft[24]).isThemeDark(theme.theme));
  const unsafe_rawColors = content(threadSettingsDraft[21]).unsafe_rawColors;
  let tmp10 = stateFromStores3 ? unsafe_rawColors.PRIMARY_330 : unsafe_rawColors.PRIMARY_460;
  let tmp5Result = tmp5(tmp3[23]);
  const items5 = [closure_17];
  stateFromStores4 = tmp5Result.useStateFromStores(items5, () => slowmodeCooldownGuess.getSlowmodeCooldownGuess(lib.id, appliedTags.CreateThread));
  tmp5Result = tmp5(tmp3[23]);
  const items6 = [first1];
  stateFromStores5 = tmp5Result.useStateFromStores(items6, () => first1.getUploads(lib.id, _undefined.ChannelMessage));
  let tmp12 = content(threadSettingsDraft[25])();
  closure_11 = tmp12;
  let tmp13 = content(threadSettingsDraft[26])();
  closure_12 = tmp13;
  let tmp14 = content(threadSettingsDraft[27])(parentChannel);
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
  first = tmp15Result[0];
  closure_15 = tmp15Result[1];
  let tmp16 = message(obj.useState(false), 2);
  const channelTemplate = _require(threadSettingsDraft[28]).useChannelTemplate(parentChannel);
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
  const tmp5Result1 = _require(threadSettingsDraft[28]);
  appliedTags = _require(threadSettingsDraft[30]).useAppliedTags(thread);
  const tmp15Result1 = message(obj.useState(() => {
    let found = appliedTags;
    let availableTags = map.availableTags;
    map = undefined;
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
          map = new Map(availableTags.map((id) => {
            const items = [id.id, id];
            return items;
          }));
          const _Array = Array;
          const mapped = Array.from(appliedTags).map((arg0) => map.get(arg0));
          found = mapped.filter((arg0) => null != arg0);
          const arr = Array.from(appliedTags);
        }
      }
      found = [];
    }
    return found;
  }), 2);
  first1 = tmp15Result1[0];
  closure_20 = tmp15Result1[1];
  const tmp5Result2 = _require(threadSettingsDraft[30]);
  [tmp28, c21] = message(obj.useState(null), 2);
  const tmp15Result3 = message(obj.useState(null), 2);
  closure_22 = tmp15Result3[1];
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
  sharedValue = _require(threadSettingsDraft[33]).useSharedValue(0);
  const tmp5Result3 = _require(threadSettingsDraft[33]);
  class D {
    constructor(arg0) {
      return closure_24.set(parentChannel.contentOffset.y);
    }
  }
  D.__closure = { scrollTopValue: sharedValue };
  D.__workletHash = 16880842576840;
  D.__initData = c34;
  const items7 = [isEdit, parentChannel.id];
  const tmp5Result4 = _require(threadSettingsDraft[33]);
  const items8 = [isEdit, parentChannel.id];
  const callback1 = obj.useCallback((arg0) => {
    if (!isEdit) {
      let obj = content(threadSettingsDraft[34]);
      obj = { name: null };
      obj[0] = arg0;
      obj.changeThreadSettings(lib.id, obj);
    }
    callback(arg0);
  }, items7);
  const items9 = [onClose];
  const callback2 = obj.useCallback((arr) => {
    currentUser(arr);
    if (!isEdit) {
      let obj = content(threadSettingsDraft[34]);
      obj = { appliedTags: null };
      const _Set = Set;
      const set = new Set(arr.map((id) => id.id));
      obj[0] = set;
      obj.changeThreadSettings(lib.id, obj);
    }
  }, items8);
  callback3 = obj.useCallback((channel) => {
    onClose(true);
    let obj = lib(threadSettingsDraft[35]);
    obj = { navigationReplace: true, source: memo1.FORUM };
    obj.transitionToThread(channel, obj);
  }, items9);
  const items10 = [first1];
  memo = obj.useMemo(() => new Set(first1.map((id) => id.id)), items10);
  const items11 = [appliedTags];
  memo1 = obj.useMemo(() => new Set(appliedTags.map((id) => id.id)), items11);
  _require = undefined;
  _require = onClose((arg0) => {
    closure_0 = arg0;
    c2 = 0;
    c3 = 0;
    return (function*(arg0) {
      if (v0 === 2) {
        v0 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
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
          v0 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              v0 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              v0 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_1 = tmp2;
              if (null == closure_1_1) {
                v0 = 3;
              } else {
                let tmp6 = null != closure_1_4;
                if (tmp6) {
                  tmp6 = tmp46.content !== tmp43;
                }
                if (tmp6) {
                  let obj2 = content(threadSettingsDraft[36]);
                  obj1 = { content: null };
                  obj1[0] = tmp43;
                  obj2.editMessage(closure_1_1.id, tmp46.id, obj1);
                }
                let obj4 = content(threadSettingsDraft[37]);
                if (!obj4.isEqual(closure_1_27, closure_1_26)) {
                  let obj5 = content(threadSettingsDraft[38]);
                  const _Array = Array;
                  c2 = 1;
                  v0 = 1;
                  obj2 = { value: null, done: false };
                  obj2[0] = obj5.updateForumPostTags(closure_1_1.id, Array.from(tmp14));
                  return obj2;
                }
                tmp14 = closure_1_26;
              }
              closure_1_25(closure_1_1);
            }
          } else {
            if (1 === tmp5) {
              if (arg0 === 1) {
                v0 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                v0 = 3;
                const obj3 = { value: null, done: true };
                obj3[0] = arg1;
                return obj3;
              }
            } else if (arg0 === 1) {
              v0 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              v0 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            }
            if (str4.getChannelId() === closure_1_1.id) {
              v0(true);
            }
          }
          if (closure_1_1.name !== closure_1_14) {
            obj4 = { name: null };
            obj4[0] = closure_1_14;
            c2 = 2;
            v0 = 1;
            obj5 = { value: null, done: false };
            obj5[0] = content(threadSettingsDraft[39]).saveChannel(closure_1_1.id, obj4);
            return obj5;
          }
        } catch (tmp37) {
          v0 = tmp;
          throw tmp37;
        }
      }
    })();
  });
  const items12 = [thread, message, memo1, memo, first, callback3, onClose];
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
      let tmp51 = first !== name2;
      if (!tmp51) {
        content = undefined;
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
  const animatedScrollHandler = _require(threadSettingsDraft[33]).useAnimatedScrollHandler(D);
  const tmp41 = onClose;
  tmp44 = null != name1 && threadSettingsDraft.name.length > 0;
  tmp45 = stateFromStores5.length > 0;
  createForumPost = _require(threadSettingsDraft[40]).useCreateForumPost({ parentChannel, threadSettings: threadSettingsDraft, appliedTags: memo, onThreadCreated: callback3 });
  _require = undefined;
  _require = tmp41((arg0) => {
    closure_0 = arg0;
    c5 = 0;
    c6 = 0;
    c4 = 0;
    const iter = (function*(arg0) {
      if (c6 === 2) {
        c6 = 3;
        let throwTypeErrorResult = HermesBuiltin.throwTypeError();
      } else {
        throwTypeErrorResult = arg1;
        throwTypeErrorResult = arg0;
        throwTypeErrorResult = tmp6;
        throwTypeErrorResult = null;
        if (tmp7 === 3) {
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
            c6 = 2;
            if (0 === c5) {
              if (arg0 === 1) {
                c6 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c6 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                closure_2 = tmp4;
                c1 = tmp8;
                let stickerId;
                throwTypeErrorResult = stickerId;
                stickerId = stickerId.stickerId;
                c1 = undefined;
                c5 = 1;
                c6 = 1;
                return { value: "PX_16", done: null };
              }
            } else {
              if (1 === tmp8) {
                if (arg0 === 1) {
                  c6 = 3;
                  throw arg1;
                } else if (arg0 === 2) {
                  c6 = 3;
                  obj1 = { value: null, done: true };
                  obj1[0] = arg1;
                  return obj1;
                } else {
                  throwTypeErrorResult = closure_2;
                  throwTypeErrorResult = lib;
                  throwTypeErrorResult = sharedValue;
                  if (lib.hasFlag(sharedValue.REQUIRE_TAG)) {
                    if (0 === closure_1_19.length) {
                      throwTypeErrorResult = threadSettingsDraft;
                      throwTypeErrorResult = closure_1_22(lib(threadSettingsDraft[41]).makeEmptyTagsError());
                      const obj9 = lib(threadSettingsDraft[41]);
                    }
                    c6 = 3;
                  }
                  closure_1_13(true);
                  if (c5) {
                    let tmp74 = closure_1_1;
                  } else {
                    tmp74 = lib;
                  }
                  content = content(threadSettingsDraft[29]).parse(tmp74, closure_1_16).content;
                  c4 = 2;
                  closure_1_21(null);
                  closure_1_22(null);
                  if (c5) {
                    c5 = 4;
                    c6 = 1;
                    let obj2 = { value: null, done: false };
                    obj2[0] = closure_1_28(closure_1_1);
                    return obj2;
                  } else {
                    let tmp90;
                    if (null != lib) {
                      const items = [stickerId];
                      tmp90 = items;
                    }
                    c5 = 5;
                    c6 = 1;
                    let obj3 = { value: null, done: false };
                    obj3[0] = closure_1_29(closure_1_1, tmp90, closure_1_10);
                    return obj3;
                  }
                  const obj6 = content(threadSettingsDraft[29]);
                }
              } else if (2 !== tmp8) {
                if (3 === tmp8) {
                  c4 = 1;
                  closure_2 = closure_3;
                  const body = closure_2.body;
                  let code;
                  if (body != null) {
                    code = body.code;
                  }
                  if (null != code) {
                    throwTypeErrorResult = c1;
                    throwTypeErrorResult = closure_2;
                    const body3 = closure_2.body;
                    let code1;
                    if (body3 != null) {
                      code1 = body3.code;
                    }
                    if (code1 === constants.AUTOMOD_TITLE_BLOCKED) {
                      let obj4 = lib(threadSettingsDraft[41]);
                      closure_1_21(obj4.makeAutomodViolationError(closure_2.body, lib));
                    } else {
                      throwTypeErrorResult = c1;
                      throwTypeErrorResult = threadSettingsDraft;
                      const body4 = threadSettingsDraft.body;
                      let code2;
                      if (body4 != null) {
                        code2 = body4.code;
                      }
                      if (code2 === constants.AUTOMOD_MESSAGE_BLOCKED) {
                        obj3 = lib(threadSettingsDraft[41]);
                        closure_1_22(obj3.makeAutomodViolationError(closure_2.body, lib));
                      } else {
                        throwTypeErrorResult = c1;
                        throwTypeErrorResult = threadSettingsDraft;
                        const body5 = threadSettingsDraft.body;
                        let code3;
                        if (body5 != null) {
                          code3 = body5.code;
                        }
                        let tmp29 = code3 === constants.INVALID_FORM_BODY;
                        if (tmp29) {
                          const body2 = closure_2.body;
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
                          obj2 = lib(threadSettingsDraft[41]);
                          closure_1_21(obj2.makeApiNameValidationError());
                        }
                      }
                    }
                  }
                } else {
                  if (4 === tmp8) {
                    if (arg0 === 1) {
                      c6 = 3;
                      throw arg1;
                    } else if (arg0 === 2) {
                      c4 = 0;
                      closure_1_13(false);
                      c6 = 3;
                      obj4 = { value: null, done: true };
                      obj4[0] = arg1;
                      return obj4;
                    }
                  } else if (arg0 === 1) {
                    c6 = 3;
                    throw arg1;
                  } else if (arg0 === 2) {
                    c4 = 0;
                    closure_1_13(false);
                    c6 = 3;
                    obj = { value: null, done: true };
                    obj[0] = arg1;
                    return obj;
                  }
                  c4 = 1;
                }
                c4 = 0;
                closure_1_13(false);
              }
              c4 = 0;
              closure_1_13(false);
              throw closure_3;
            }
          } catch (throwTypeErrorResult) {
            closure_3 = throwTypeErrorResult;
            if (tmp5 === c4) {
              throwTypeErrorResult = tmp3;
              c6 = tmp3;
              throw throwTypeErrorResult;
            } else if (tmp2 === throwTypeErrorResult) {
              c5 = throwTypeErrorResult;
            } else {
              c5 = tmp3;
            }
          }
        }
      }
    })();
    iter.next();
    return iter;
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
  const items15 = [tmp15Result[1], parentChannel.id];
  const callback6 = obj.useCallback((stickerId) => {
    stickerId = stickerId.stickerId;
    if (stateFromStores4 <= 0) {
      if (str4.length > closure_12) {
        let obj = { title: null, body: null };
        const intl4 = lib(threadSettingsDraft[43]).intl;
        obj[0] = intl4.string(lib(threadSettingsDraft[43]).t.l8rYLt);
        const intl5 = lib(threadSettingsDraft[43]).intl;
        obj = { currentLength: null, maxLength: null };
        obj[0] = arr.length;
        obj[1] = tmp40;
        obj[1] = intl5.formatToPlainString(lib(threadSettingsDraft[43]).t.FfjF15, obj);
        content(threadSettingsDraft[42]).show(obj);
        const obj4 = content(threadSettingsDraft[42]);
      } else {
        const RESTRICTIONS = lib(threadSettingsDraft[44]).RESTRICTIONS;
        const iter = RESTRICTIONS[Symbol.iterator]();
        while (iter !== undefined) {
          let tmp5 = str4;
          let tmp6 = str4;
          let tmp7 = stickerId;
          let checkResult = iter.next().check(str4, stickerId, null != stickerId.getGuildId());
          let tmp9 = checkResult;
          if (false !== checkResult) {
            let tmp10 = content;
            let tmp11 = threadSettingsDraft;
            obj = content(threadSettingsDraft[42]);
            obj1 = { title: null, body: null, confirmText: null, onConfirm: null, cancelText: null };
            let tmp12 = lib;
            let tmp13 = threadSettingsDraft;
            let intl = lib(threadSettingsDraft[43]).intl;
            let tmp14 = lib;
            let tmp15 = threadSettingsDraft;
            obj1[0] = intl.string(lib(threadSettingsDraft[43]).t.mY3Y38);
            obj1[1] = checkResult.body;
            let tmp16 = lib;
            let tmp17 = threadSettingsDraft;
            let intl2 = lib(threadSettingsDraft[43]).intl;
            let tmp18 = lib;
            let tmp19 = threadSettingsDraft;
            obj1[2] = intl2.string(lib(threadSettingsDraft[43]).t.KJnHq3);
            obj1[3] = function onConfirm() {
              closure_1_30({ stickerId });
            };
            let tmp20 = lib;
            let tmp21 = threadSettingsDraft;
            let intl3 = lib(threadSettingsDraft[43]).intl;
            let tmp22 = lib;
            let tmp23 = threadSettingsDraft;
            obj1[4] = intl3.string(lib(threadSettingsDraft[43]).t.fsBWmS);
            let showResult1 = obj.show(obj1);
            let tmp25 = iter;
            iter.return();
          }
        }
        const obj2 = { stickerId: null };
        obj2[0] = stickerId;
        callback5(obj2);
      }
    }
  }, items14);
  const callback7 = obj.useCallback((draft) => {
    content(threadSettingsDraft[34]).changeDraft(lib.id, draft, _undefined.ChannelMessage);
    slowmodeCooldownGuess(draft);
  }, items15);
  const tmp5Result5 = _require(threadSettingsDraft[40]);
  const focusHandlers = _require(threadSettingsDraft[45]).useFocusHandlers({ titleInput: ref, contentInput: ref1 });
  ({ setFocusedInput: c31, focusLastInput } = focusHandlers);
  blurLastInput = focusHandlers.blurLastInput;
  obj = { start: str4.length, end: null };
  const tmp5Result6 = _require(threadSettingsDraft[45]);
  [tmp59, c34] = message(obj.useState(obj), 2);
  const callback8 = obj.useCallback((nativeEvent) => {
    const merged = Object.assign(nativeEvent.nativeEvent.selection);
    _undefined3({});
  }, []);
  const callback9 = obj.useCallback((arg0) => {
    ({ start: closure_0, end: content } = arg0);
    let current;
    if (obj.isAndroid()) {
      current = ref1.current;
      if (null != current) {
        const _setTimeout = setTimeout;
        const timerId = setTimeout(() => {
          let tmp3 = closure_1;
          if (closure_1 == null) {
            tmp3 = tmp2;
          }
          current.setSelection(closure_0, tmp3);
        });
      }
    }
  }, []);
  const tmp15Result4 = message(obj.useState(obj), 2);
  closure_35 = _require(threadSettingsDraft[47]).usePressEmojiHandler({ selection: tmp59, draftContent: str4, handleTextChange: callback7, focusTextInput: callback, setSelection: callback9 });
  const tmp5Result7 = _require(threadSettingsDraft[47]);
  closure_36 = _require(threadSettingsDraft[47]).usePressGIFHandler({ selection: tmp59, draftContent: str4, handleTextChange: callback7, focusTextInput: callback, setSelection: callback9 });
  const tmp5Result8 = _require(threadSettingsDraft[47]);
  const tmp5Result9 = _require(threadSettingsDraft[48]);
  const pressHorizontalAutocompleteItemHandler = _require(threadSettingsDraft[48]).usePressHorizontalAutocompleteItemHandler({ draftContent: str4, handleTextChange: callback7, setSelection: callback9, channel: parentChannel });
  closure_37 = _require(threadSettingsDraft[49]).useBackspaceHandler({ selection: tmp59, draftContent: str4, handleTextChange: callback7 });
  const tmp5Result10 = _require(threadSettingsDraft[49]);
  [tmp64, c38] = message(obj.useState(0), 2);
  obj22 = parentChannel;
  const callback10 = obj.useCallback((nativeEvent) => {
    _undefined4(nativeEvent.nativeEvent.layout.height);
  }, []);
  if (isEdit) {
    obj22 = thread;
  }
  const items16 = [obj22];
  memo2 = obj.useMemo(() => {
    let parserState = null;
    if (null != obj22) {
      parserState = lib(threadSettingsDraft[29]).createParserState(tmp);
      const obj = lib(threadSettingsDraft[29]);
    }
    return parserState;
  }, items16);
  const items17 = [str4, obj22, memo2, tmp.mentionText];
  const memo3 = obj.useMemo(() => {
    if (0 !== str4.length) {
      if (null != obj22) {
        if (null != memo2) {
          const parts = str4.split(focusLastInput);
          let mapped = null;
          if (1 !== parts.length) {
            mapped = parts.map((children) => {
              if (arg1 % 2 === 1) {
                let obj = closure_1_1(closure_1_2[29]);
                if (obj.parse(closure_39, children, closure_40).content !== children) {
                  obj = { style: null, children: null };
                  obj[0] = mentionText.mentionText;
                  obj[1] = children;
                  return closure_1_29(closure_1_8, obj, arg1);
                }
              }
              obj = { children };
              return closure_1_29(closure_1_5.Fragment, obj, arg1);
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
    obj = { content: null };
    obj[0] = first;
    const renderErrorResult = tmp5(tmp3[41]).renderError(tmp28, obj);
    const tmp5Result11 = tmp5(tmp3[41]);
    obj1 = { content: null, tags: null };
    obj1[0] = str4;
    obj1[1] = first1;
    const renderErrorResult1 = tmp5(tmp3[41]).renderError(tmp15Result3[0], obj1);
    if (obj22.isMediaChannel()) {
      const items18 = [tmp5(tmp3[50]).DismissibleContent.MEDIA_CHANNEL_MULTIPLE_THUMBNAIL_NOTICE];
      let items19 = items18;
    } else {
      items19 = [];
    }
    obj2 = { style: null, children: null };
    const items20 = [tmp.container, ];
    obj3 = { paddingTop: null, paddingBottom: null };
    obj3[0] = insets.top;
    obj3[1] = insets.bottom + tmp64;
    items20[1] = obj3;
    obj2[0] = items20;
    obj4 = { channel: null, height: 44, onClose: null, onGuidelinesPress: null, submitting: null, title: null };
    obj4[0] = parentChannel;
    obj4[2] = onClose;
    obj4[3] = function onGuidelinesPress() {
      blurLastInput();
      let obj = lib(threadSettingsDraft[54]);
      obj = {
        channel: lib,
        onClose() {
          callback();
        }
      };
      const result = obj.openForumGuidelinesActionSheet(obj);
    };
    obj4[4] = tmp17;
    obj4[5] = tmp68;
    const items21 = [createForumPost(tmp2(tmp3[53]), obj4), ];
    obj5 = { onScroll: null, scrollEventThrottle: 16, keyboardShouldPersistTaps: "always", nestedScrollEnabled: false, contentContainerStyle: null, keyboardDismissMode: "on-drag", children: null };
    obj5[0] = animatedScrollHandler;
    obj5[4] = tmp.scrollViewContentContainer;
    let obj6 = { ref: null, style: null, inputTextStyle: null, showTopContainer: false, placeholder: null, placeholderTextColor: null, large: true, multiline: true, value: null, clearButtonVisibility: null, maxLength: null, onChange: null, onBlur: null, onFocus: null, autoFocus: true, autoCorrect: true, textContentType: "none", returnKeyType: "next", onNext: null };
    obj6[0] = ref;
    ({ titleInput: obj28[1], titleInputText: obj28[2] } = tmp);
    let intl = tmp5(tmp3[43]).intl;
    obj6[4] = intl.string(tmp5(tmp3[43]).t.lU4dDS);
    obj6[5] = tmp10;
    obj6[8] = first;
    obj6[9] = tmp5(tmp3[56]).ClearButtonVisibility.NEVER;
    obj6[10] = closure_22;
    obj6[11] = callback1;
    obj6[12] = function onBlur() {
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
          const tmp6Result = content(threadSettingsDraft[57])(name1, true);
          let name2;
          if (tmp != null) {
            name2 = tmp.name;
          }
          if (tmp6Result !== name2) {
            const obj = { name: null };
            obj[0] = tmp6Result;
            tmp4(tmp5[34]).changeThreadSettings(lib.id, obj);
            callback(tmp6Result);
            const tmp4Result = tmp4(tmp5[34]);
          }
          tmp4 = content;
          tmp5 = threadSettingsDraft;
          const tmp6 = content(threadSettingsDraft[57]);
        }
      }
    };
    obj6[13] = function onFocus() {
      if (!tmp4) {
        const obj = { type: null, context: null };
        obj[0] = tmp2(tmp3[58]).KeyboardTypes.SYSTEM;
        obj[1] = { keyboardWillOpen: true };
        tmp2(tmp3[59]).setKeyboardType(obj);
        const tmp2Result = tmp2(tmp3[59]);
      }
      _undefined2(lib(threadSettingsDraft[45]).PostComposerInputs.TITLE);
    };
    obj6[18] = callback;
    const items22 = [createForumPost(tmp5(tmp3[55]).FormInput, obj6), , ];
    let tmp71Result = null;
    if (null != renderErrorResult) {
      const obj7 = { style: null, children: null };
      obj7[0] = tmp.nameError;
      obj7[1] = renderErrorResult;
      tmp71Result = tmp71(tmp2(tmp3[60]), obj7);
    }
    items22[1] = tmp71Result;
    const obj8 = { style: null, children: null };
    obj8[0] = tmp.editor;
    tmp71Result = null != stateFromStores;
    if (tmp71Result) {
      let obj9 = { style: null, onPress: null, children: null };
      obj9[0] = tmp.avatarContainer;
      obj9[1] = function onPress() {
        const obj = { userId: stateFromStores.id, channelId: obj22.id, messageId: null, sourceAnalyticsLocations: null };
        let id;
        if (message != null) {
          id = message.id;
        }
        obj[2] = id;
        obj[3] = analyticsLocations;
        return content(threadSettingsDraft[61])(obj);
      };
      const obj10 = { animate: null, style: null, user: null, guildId: null, avatarDecoration: null, accessibilityLabel: null };
      obj10[0] = !stateFromStores1;
      obj10[1] = tmp.avatar;
      obj10[2] = stateFromStores;
      let guildId;
      if (parentChannel != null) {
        guildId = parentChannel.getGuildId();
      }
      obj10[3] = guildId;
      obj10[4] = stateFromStores.avatarDecoration;
      let intl2 = tmp5(tmp3[43]).intl;
      const obj11 = { nickname: null };
      obj11[0] = str5;
      obj10[5] = intl2.formatToPlainString(tmp5(tmp3[43]).t.LvU3nj, obj11);
      obj9[2] = tmp71(tmp5(tmp3[56]).Avatar, obj10);
      tmp71Result = tmp71(analyticsLocations, obj9);
      const tmp76 = analyticsLocations;
    }
    const items23 = [tmp71Result, ];
    const obj12 = { style: null, children: null };
    obj12[0] = tmp.editorBody;
    const obj13 = { style: null, accessibilityLabel: null, children: null };
    obj13[0] = tmp.usernameToChannel;
    let intl3 = tmp5(tmp3[43]).intl;
    const obj14 = { nickname: null, channelName: null };
    obj14[0] = str5;
    obj14[1] = tmp14;
    obj13[1] = intl3.formatToPlainString(tmp5(tmp3[43]).t["QicUf+"], obj14);
    const obj15 = { name: null, color: null, colors: null };
    obj15[0] = str5;
    obj15[1] = colorString;
    obj15[2] = colorStrings;
    const items24 = [createForumPost(tmp5(tmp3[62]).RoleLabel, obj15), ];
    const obj16 = { color: "text-default", variant: "text-xs/medium", style: null, lineClamp: 1, children: null };
    obj16[2] = tmp.channelName;
    let intl4 = tmp5(tmp3[43]).intl;
    const obj17 = { channelName: null };
    obj17[0] = tmp14;
    const items25 = [" ", intl4.format(tmp5(tmp3[43]).t["6Y1Kev"], obj17)];
    obj16[4] = items25;
    items24[1] = callback5(tmp5(tmp3[63]).Text, obj16);
    obj13[2] = items24;
    const items26 = [callback5(stateFromStores4, obj13), , ];
    let tmp71Result1 = null;
    if (null != renderErrorResult1) {
      const obj18 = { style: null, children: null };
      obj18[0] = tmp.messageError;
      obj18[1] = renderErrorResult1;
      tmp71Result1 = tmp71(tmp2(tmp3[60]), obj18);
    }
    items26[1] = tmp71Result1;
    const obj19 = { ref: null, style: null, multiline: true, scrollEnabled: false, placeholder: null, placeholderTextColor: null, onChangeText: null, onSelectionChange: null, onFocus: null, showSoftInputOnFocus: null, children: null };
    obj19[0] = ref1;
    obj19[1] = tmp.contentInput;
    let intl5 = tmp5(tmp3[43]).intl;
    obj19[4] = intl5.string(tmp5(tmp3[43]).t["8IPnv1"]);
    obj19[5] = tmp10;
    obj19[6] = callback7;
    obj19[7] = callback8;
    obj19[8] = function onFocus() {
      if (closure_11 === lib(threadSettingsDraft[58]).KeyboardTypes.MEDIA) {
        const obj = { type: null, context: null };
        obj[0] = tmp(tmp2[58]).KeyboardTypes.SYSTEM;
        obj[1] = { keyboardWillOpen: true };
        tmp(tmp2[59]).setKeyboardType(obj);
        const tmpResult = tmp(tmp2[59]);
      }
      _undefined2(lib(threadSettingsDraft[45]).PostComposerInputs.CONTENT);
    };
    obj19[9] = tmp12 !== tmp5(tmp3[58]).KeyboardTypes.EXPRESSION;
    let tmp71Result2 = str4;
    if (null != memo3) {
      const obj20 = { children: null };
      obj20[0] = memo3;
      tmp71Result2 = tmp71(stateFromStores, obj20);
    }
    const obj21 = { children: null };
    obj19[10] = tmp71Result2;
    items26[2] = createForumPost(tmp5(tmp3[56]).TextInput, obj19);
    obj12[1] = items26;
    items23[1] = callback5(stateFromStores4, obj12);
    obj8[1] = items23;
    items22[2] = callback5(stateFromStores4, obj8);
    obj5[6] = items22;
    const items27 = [callback5(tmp2(tmp3[33]).ScrollView, obj5), , , , ];
    obj22 = { tags: null };
    obj22[0] = first1;
    items27[1] = createForumPost(closure_35, obj22);
    const obj23 = { channel: null, tags: null, onTagsSave: null, canPost: null, submitting: null, onSubmit: null, onShowExpressionPicker: null, focusLastInput: null, lastInput: null, isEdit: null, onLayout: null };
    obj23[0] = parentChannel;
    obj23[1] = first1;
    obj23[2] = callback2;
    obj23[3] = tmp48;
    obj23[4] = tmp17;
    obj23[5] = callback6;
    obj23[6] = function onShowExpressionPicker() {
      closure_6.dismiss();
      let obj = lib(threadSettingsDraft[64]);
      obj = { channelId: lib.id, onPressEmoji: closure_35, onPressSticker: callback4, onPressGIF: closure_36, onBackspace: closure_37, visibleTabs: items };
      items = [, ];
      ({ EMOJI: arr[0], GIF: arr[1] } = memo);
      const result = obj.openExpressionPickerActionSheet(obj);
    };
    obj23[7] = focusLastInput;
    obj23[8] = focusHandlers.focusedInput;
    obj23[9] = isEdit;
    obj23[10] = callback10;
    items27[2] = createForumPost(closure_36, obj23);
    const obj24 = { style: null, onPressAutocompleteItem: null, text: null, selection: null, channel: null };
    const items28 = [tmp.horizontalAutocomplete, ];
    const obj25 = { bottom: null };
    obj25[0] = insets.bottom;
    items28[1] = obj25;
    obj24[0] = items28;
    obj24[1] = pressHorizontalAutocompleteItemHandler;
    obj24[2] = str4;
    obj24[3] = tmp59;
    obj24[4] = obj22;
    items27[3] = createForumPost(tmp2(tmp3[65]), obj24);
    const obj26 = { contentTypes: null, children: null };
    obj26[0] = items19;
    obj26[1] = function children(markAsDismissed) {
      markAsDismissed = markAsDismissed.markAsDismissed;
      let tmp3 = null;
      if (markAsDismissed.visibleContent === lib(threadSettingsDraft[50]).DismissibleContent.MEDIA_CHANNEL_MULTIPLE_THUMBNAIL_NOTICE) {
        const obj = { markAsDismissed: null, actionSheetKey: "ThumbnailBottomSheet", importer: null };
        obj[0] = function markAsDismissed() {
          return markAsDismissed(closure_1_25.UNKNOWN);
        };
        obj[2] = MediaPostMultipleThumbnailActionSheetImporter;
        tmp3 = createForumPost(lib(threadSettingsDraft[67]).DismissibleActionSheet, obj);
      }
      return tmp3;
    };
    items27[4] = createForumPost(tmp2(tmp3[66]), obj26);
    obj21[0] = items27;
    items21[1] = callback5(c31, obj21);
    obj2[1] = items21;
    return callback5(stateFromStores4, obj2);
  }
  const tmp15Result5 = message(obj.useState(0), 2);
};