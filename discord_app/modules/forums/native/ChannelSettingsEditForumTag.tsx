// === Module 15704: ChannelSettingsEditForumTag ===

// Module 15704 (ChannelSettingsEditForumTag)
import _slicedToArray from "_slicedToArray";
import EMOJI_PICKER_ACTION_SHEET_KEY from "EMOJI_PICKER_ACTION_SHEET_KEY";
import { View } from "TableRowInner";
import getEmojiToGroupId from "getEmojiToGroupId";
import ensureGuildLoaded from "ensureGuildLoaded";
import set from "set";
import jsxProd from "getAvatarURL";
import createCacheKey from "createCacheKey";
import set from "get ActivityIndicator";

let c10;
let c9;
let metroImportAll;
let unpackModuleId;
const require = arg1;
({ EMOJI_URL_BASE_SIZE: metroImportAll, EmojiIntention: c9 } = set);
({ jsx: c10, jsxs: unpackModuleId } = jsxProd);
createCacheKey = { container: null, sections: null, hint: null, emojiIconWrapper: null, imageEmoji: null, textEmoji: null, nameInput: null, saveButton: null };
createCacheKey = { display: "flex", flex: 1, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWER };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { paddingHorizontal: 12, paddingTop: require("Themes").space.PX_16 };
createCacheKey[2] = { marginTop: 8 };
createCacheKey[3] = { display: "flex", alignItems: "center", justifyContent: "center", height: 24, width: 24 };
createCacheKey[4] = { height: 20, width: 20 };
createCacheKey[5] = { fontSize: 20, lineHeight: 26 };
createCacheKey[6] = { width: "100%", flexGrow: 1 };
createCacheKey[7] = { flex: 0 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let result = set.fileFinishedImporting("modules/forums/native/ChannelSettingsEditForumTag.tsx");

export default function ChannelSettingsEditForumTag(channelId) {
  channelId = channelId.channelId;
  const tag = channelId.tag;
  let dependencyMap;
  let callback;
  let navigation;
  let first;
  let getEmojiToGroupId;
  let first1;
  let closure_8;
  let flag;
  let closure_10;
  let closure_11;
  let createCacheKey;
  let c13;
  callback = undefined;
  function handlePressEmoji(id) {
    if (null == id.id) {
      if (null != id.surrogates) {
        if ("" !== id.surrogates) {
          let name = id.surrogates;
        }
        const obj = { id: null, name: null };
        obj[0] = id.id;
        let tmp2;
        if (null == id.id) {
          tmp2 = name;
        }
        obj[1] = tmp2;
        getEmojiToGroupId(obj);
      }
    }
    name = id.name;
  }
  const tmp = createCacheKey();
  dependencyMap = tmp;
  callback = tmp2;
  let obj = channelId(1480);
  navigation = obj.useNavigation();
  let obj1 = navigation;
  let tmp6 = null;
  if (null != tag) {
    obj = { id: null, name: null };
    ({ emojiId: obj3[0], emojiName: obj3[1] } = tag);
    tmp6 = obj;
  }
  const tmp8 = callback(navigation.useState(tmp6), 2);
  first = tmp8[0];
  getEmojiToGroupId = tmp8[1];
  let str;
  if (tag != null) {
    str = tag.name;
  }
  if (str == null) {
    str = "";
  }
  let tmp7Result = tmp7(obj1.useState(str), 2);
  first1 = tmp7Result[0];
  closure_8 = tmp7Result[1];
  let moderated;
  if (tag != null) {
    moderated = tag.moderated;
  }
  tmp7Result = tmp7(obj1.useState(moderated), 2);
  flag = tmp7Result[0];
  closure_10 = tmp7Result[1];
  let tmp3Result = tmp3(589);
  const items = [first1];
  closure_11 = tmp3Result.useStateFromStores(items, () => first1.getChannel(channelId));
  tmp3Result = tmp3(589);
  const items1 = [getEmojiToGroupId];
  const stateFromStores = tmp3Result.useStateFromStores(items1, () => {
    let id;
    if (first != null) {
      id = tmp.id;
    }
    let usableCustomEmojiById = null;
    if (null != id) {
      usableCustomEmojiById = usableCustomEmojiById.getUsableCustomEmojiById(tmp.id);
    }
    return usableCustomEmojiById;
  });
  createCacheKey = obj1.useRef({ emoji: first, tagName: first1, moderated: flag });
  const items2 = [first, first1, flag];
  const effect = obj1.useEffect(() => {
    closure_12.current = { emoji: first, tagName: first1, moderated: flag };
  }, items2);
  let tmp16 = null != tag;
  if (tmp16) {
    let tmp17 = tag.name !== first1;
    if (!tmp17) {
      let id;
      if (first != null) {
        id = first.id;
      }
      tmp17 = tag.emojiId !== id;
    }
    if (!tmp17) {
      let name;
      if (first != null) {
        name = first.name;
      }
      tmp17 = tag.emojiName !== name;
    }
    if (!tmp17) {
      tmp17 = tag.moderated !== flag;
    }
    tmp16 = tmp17;
  }
  if (null == tag) {
    let tmp22 = tmp21;
  } else {
    tmp22 = tmp21;
    if (!tmp20) {
      tmp22 = tmp16;
    }
  }
  c13 = tmp22;
  const items3 = [navigation, null == tag];
  const layoutEffect = obj1.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle() {
        const intl = outer1_0(outer1_2[12]).intl;
        const string = intl.string;
        const t = outer1_0(outer1_2[12]).t;
        if (_slicedToArray) {
          let children = string(t["/jubeD"]);
        } else {
          children = string(t.zeVg5d);
        }
        return outer1_10(outer1_0(outer1_2[11]).Text, { variant: "redesign/heading-18/bold", color: "mobile-text-heading-primary", accessibilityRole: "header", children });
      }
    });
  }, items3);
  const items4 = [null == tag, navigation, channelId, ];
  let id1;
  if (tag != null) {
    id1 = tag.id;
  }
  items4[3] = id1;
  callback = obj1.useCallback(() => {
    let emoji;
    let moderated;
    let tagName;
    ({ tagName, emoji, moderated } = ref.current);
    if ("" !== tagName) {
      const obj3 = tag(_undefined[13]);
      if (c3) {
        let obj = { name: null, emojiId: null, emojiName: null, moderated: null };
        obj[0] = tagName;
        let id;
        if (emoji != null) {
          id = emoji.id;
        }
        obj[1] = id;
        tagName = undefined;
        if (emoji != null) {
          tagName = emoji.name;
        }
        obj[2] = tagName;
        obj[3] = moderated;
        const forumTag = obj3.createForumTag(obj, channelId);
      } else {
        let id1;
        if (tag != null) {
          id1 = tag.id;
        }
        obj = { id: null, name: null, emojiId: null, emojiName: null, moderated: null };
        obj[0] = id1;
        obj[1] = tagName;
        let id2;
        if (emoji != null) {
          id2 = emoji.id;
        }
        obj[2] = id2;
        let name;
        if (emoji != null) {
          name = emoji.name;
        }
        obj[3] = name;
        obj[4] = moderated;
        obj3.updateForumTag(obj, channelId);
      }
      moderated = navigation;
      navigation.pop();
    }
  }, items4);
  const items5 = [tmp22, navigation, callback, tmp.saveButton];
  const effect1 = obj1.useEffect(() => {
    const setOptions = navigation.setOptions;
    if (c13) {
      let obj = { headerRight: null };
      obj[0] = function headerRight() {
        const obj = { style: saveButton.saveButton, onPress: closure_14, text: null };
        const intl = outer1_0(outer1_2[12]).intl;
        obj[2] = intl.string(outer1_0(outer1_2[12]).t["R3BPH+"]);
        return outer1_10(outer1_0(outer1_2[14]).HeaderActionButton, obj);
      };
      setOptions(obj);
    } else {
      setOptions({ headerRight: "r" });
    }
  }, items5);
  obj = { style: tmp.container, children: null };
  obj1 = { spacing: 24, style: tmp.sections, children: null };
  const obj2 = {
    style: tmp.emojiIconWrapper,
    accessibilityRole: "button",
    onPress() {
      let obj = channelId(_undefined[19]);
      obj = { onPressEmoji: handlePressEmoji, pickerIntention: flag.COMMUNITY_CONTENT, channel: closure_11 };
      const result = obj.openEmojiPickerActionSheet(obj);
    },
    children: null
  };
  if (null != first) {
    if (null == first.name) {
      let obj3 = { icon: null, label: null, trailing: null };
      obj2[3] = tmp27Result1;
      obj3[0] = tmp27(tmp30, obj2);
      const obj4 = { maxLength: 20, style: null, value: null, autoCorrect: false, autoCapitalize: "none", returnKeyType: "done", onChangeText: null, placeholder: null };
      obj4[1] = tmp.nameInput;
      obj4[2] = first1;
      obj4[6] = function onChangeText(arg0) {
        callback(arg0);
      };
      let intl = tmp3(1236).intl;
      obj4[7] = intl.string(tmp3(1236).t.aMSq0a);
      obj3[1] = tmp27(tmp3(1297).TextInput, obj4);
      if (null != first) {
        const obj5 = { accessibilityRole: "button", onPress: null, children: null };
        obj5[1] = function onPress() {
          usableCustomEmojiById(null);
          callback("");
        };
        obj5[2] = tmp27(tmp3(6739).CircleXIcon, { size: "xs" });
        let tmp27Result = tmp27(tmp3(4721).PressableOpacity, obj5);
      } else {
        tmp27Result = null;
      }
      const obj6 = { children: null };
      const obj7 = { hasIcons: true, children: null };
      obj3[2] = tmp27Result;
      obj7[1] = tmp27(tmp3(5224).TableRow, obj3);
      const items6 = [tmp27(tmp3(5558).TableRowGroup, obj7), ];
      const obj8 = { style: null, children: null };
      obj8[0] = tmp.hint;
      const obj9 = { variant: "text-sm/medium", color: "text-muted", children: null };
      let intl2 = tmp3(1236).intl;
      obj9[2] = intl2.string(tmp3(1236).t["3v8kZH"]);
      obj8[1] = tmp27(tmp3(4189).Text, obj9);
      items6[1] = tmp27(tmp28, obj8);
      obj6[0] = items6;
      const items7 = [tmp29(tmp28, obj6), , ];
      const obj10 = { label: null, value: null, onValueChange: null };
      let intl3 = tmp3(1236).intl;
      obj10[0] = intl3.string(tmp3(1236).t["rMH+rt"]);
      if (flag == null) {
        flag = false;
      }
      const obj11 = { hasIcons: false, children: null };
      obj10[1] = flag;
      obj10[2] = function onValueChange() {
        let tmp2 = !flag;
        if (flag) {
          let moderated;
          if (tag != null) {
            moderated = tag.moderated;
          }
          tmp2 = null == moderated && undefined;
          const tmp5 = null == moderated && undefined;
        }
        closure_10(tmp2);
      };
      obj11[1] = tmp27(tmp3(5559).TableSwitchRow, obj10);
      items7[1] = tmp27(tmp3(5558).TableRowGroup, obj11);
      tmp27Result = null;
      if (!tmp2) {
        const obj12 = { hasIcons: false, children: null };
        const obj13 = { variant: "danger", label: null, onPress: null };
        let intl4 = tmp3(1236).intl;
        obj13[1] = intl4.string(tmp3(1236).t.huYSMr);
        obj13[2] = function onPress() {
          let obj = tag(_undefined[26]);
          obj = { title: null, body: null, cancelText: null, confirmText: null, onConfirm: null };
          const intl = channelId(_undefined[12]).intl;
          obj[0] = intl.string(channelId(_undefined[12]).t.huYSMr);
          const intl2 = channelId(_undefined[12]).intl;
          obj[1] = intl2.string(channelId(_undefined[12]).t.bkAFCf);
          const intl3 = channelId(_undefined[12]).intl;
          obj[2] = intl3.string(channelId(_undefined[12]).t.gm1Vej);
          const intl4 = channelId(_undefined[12]).intl;
          obj[3] = intl4.string(channelId(_undefined[12]).t.p89ACt);
          obj[4] = function onConfirm() {
            if (!_slicedToArray) {
              outer1_1(outer1_2[13]).deleteForumTag(closure_0, id.id);
              arr = arr.pop();
              const obj = outer1_1(outer1_2[13]);
            }
          };
          obj.show(obj);
        };
        obj12[1] = tmp27(tmp3(5224).TableRow, obj13);
        tmp27Result = tmp27(tmp3(5558).TableRowGroup, obj12);
      }
      items7[2] = tmp27Result;
      obj1[2] = items7;
      obj[1] = tmp29(tmp3(4602).Stack, obj1);
      return tmp27(tmp28, obj);
    }
    const obj14 = { textEmojiStyle: null, fastImageStyle: null, src: null, name: null };
    ({ textEmoji: obj9[0], imageEmoji: obj9[1] } = tmp);
    let emojiURL;
    if (null != stateFromStores) {
      const obj15 = { id: null, animated: null, size: null };
      ({ id: obj11[0], animated: obj11[1] } = stateFromStores);
      obj15[2] = closure_8;
      emojiURL = tmp31(1416).getEmojiURL(obj15);
      const tmp31Result = tmp31(1416);
    }
    obj14[2] = emojiURL;
    let str2;
    if (first != null) {
      str2 = first.name;
    }
    if (str2 == null) {
      str2 = "";
    }
    obj14[3] = str2;
    tmp27Result1 = tmp27(tag(5210), obj14);
    tmp31 = tag;
    const tmp32 = tag(5210);
  }
  tmp27Result1 = tmp27(tmp3(6579).ReactionIcon, {});
};