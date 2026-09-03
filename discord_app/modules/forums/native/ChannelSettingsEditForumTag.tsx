// === Module 16690: ChannelSettingsEditForumTag ===

// Module 16690 (ChannelSettingsEditForumTag)
import ThemesDefault from "Themes" /* 709 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_6 from "getEmojiToGroupId" /* 5410 */;
import closure_7 from "ensureGuildLoaded" /* 1386 */;
import set from "set" /* 1924 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

const require = arg1;
({ EMOJI_URL_BASE_SIZE: closure_8, EmojiIntention: c9 } = set);
({ jsx: c10, jsxs: unpackModuleId } = jsxProd);
createCacheKey = { container: null, sections: null, hint: null, emojiIconWrapper: null, imageEmoji: null, textEmoji: null, nameInput: null, saveButton: null };
createCacheKey = { display: "flex", flex: 1, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWER };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { paddingHorizontal: 12, paddingTop: ThemesDefault.space.PX_16 };
createCacheKey[2] = { marginTop: 8 };
createCacheKey[3] = { display: "flex", alignItems: "center", justifyContent: "center", height: 24, width: 24 };
createCacheKey[4] = { height: 20, width: 20 };
createCacheKey[5] = { fontSize: 20, lineHeight: 26 };
createCacheKey[6] = { width: "100%", flexGrow: 1 };
createCacheKey[7] = { flex: 0 };
let closure_12 = createCacheKey.createStyles(createCacheKey);
let result = set.fileFinishedImporting("modules/forums/native/ChannelSettingsEditForumTag.tsx");

export default function ChannelSettingsEditForumTag(channelId) {
  channelId = channelId.channelId;
  const tag = channelId.tag;
  dependencyMap = undefined;
  let callback;
  let navigation;
  let first;
  closure_6 = undefined;
  let first1;
  closure_8 = undefined;
  let flag;
  closure_10 = undefined;
  closure_11 = undefined;
  let callback2;
  closure_13 = undefined;
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
        closure_6(obj);
      }
    }
    name = id.name;
  }
  const tmp = callback2();
  dependencyMap = tmp;
  callback = tmp2;
  let obj = channelId(1498);
  navigation = obj.useNavigation();
  obj1 = navigation;
  let tmp6 = null;
  if (null != tag) {
    obj = { id: null, name: null };
    ({ emojiId: obj3[0], emojiName: obj3[1] } = tag);
    tmp6 = obj;
  }
  const tmp8 = callback(navigation.useState(tmp6), 2);
  first = tmp8[0];
  closure_6 = tmp8[1];
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
  let tmp3Result = tmp3(586);
  const items = [first1];
  closure_11 = tmp3Result.useStateFromStores(items, () => first1.getChannel(channelId));
  tmp3Result = tmp3(586);
  const items1 = [closure_6];
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
  callback2 = obj1.useRef({ emoji: first, tagName: first1, moderated: flag });
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
  closure_13 = tmp22;
  const items3 = [navigation, null == tag];
  const layoutEffect = obj1.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle() {
        const intl = closure_1_0(closure_1_2[12]).intl;
        const string = intl.string;
        const t = closure_1_0(closure_1_2[12]).t;
        if (closure_3) {
          let children = string(t["/jubeD"]);
        } else {
          children = string(t.zeVg5d);
        }
        return closure_1_10(closure_1_0(closure_1_2[11]).Text, { variant: "redesign/heading-18/bold", color: "mobile-text-heading-primary", accessibilityRole: "header", children });
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
    ({ tagName, emoji, moderated } = ref.current);
    if ("" !== tagName) {
      const obj3 = tag(7652);
      if (closure_3) {
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
    if (closure_13) {
      let obj = { headerRight: null };
      obj[0] = function headerRight() {
        const obj = { style: saveButton.saveButton, onPress: closure_14, text: null };
        const intl = closure_1_0(closure_1_2[12]).intl;
        obj[2] = intl.string(closure_1_0(closure_1_2[12]).t["R3BPH+"]);
        return closure_1_10(closure_1_0(closure_1_2[14]).HeaderActionButton, obj);
      };
      setOptions(obj);
    } else {
      setOptions({ headerRight: "Array" });
    }
  }, items5);
  obj = { style: tmp.container, children: null };
  obj1 = { spacing: 24, style: tmp.sections, children: null };
  const obj2 = {
    style: tmp.emojiIconWrapper,
    accessibilityRole: "button",
    onPress() {
      let obj = channelId(9116);
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
      let intl = tmp3(1233).intl;
      obj4[7] = intl.string(tmp3(1233).t.aMSq0a);
      obj3[1] = tmp27(tmp3(1296).TextInput, obj4);
      if (null != first) {
        const obj5 = { accessibilityRole: "button", onPress: null, children: null };
        obj5[1] = function onPress() {
          usableCustomEmojiById(null);
          callback("");
        };
        obj5[2] = tmp27(tmp3(6235).CircleXIcon, { size: "xs" });
        let tmp27Result = tmp27(tmp3(5077).PressableOpacity, obj5);
      } else {
        tmp27Result = null;
      }
      const obj6 = { children: null };
      const obj7 = { hasIcons: true, children: null };
      obj3[2] = tmp27Result;
      obj7[1] = tmp27(tmp3(5608).TableRow, obj3);
      const items6 = [tmp27(tmp3(6001).TableRowGroup, obj7), ];
      const obj8 = { style: null, children: null };
      obj8[0] = tmp.hint;
      const obj9 = { variant: "text-sm/medium", color: "text-muted", children: null };
      let intl2 = tmp3(1233).intl;
      obj9[2] = intl2.string(tmp3(1233).t["3v8kZH"]);
      obj8[1] = tmp27(tmp3(4474).Text, obj9);
      items6[1] = tmp27(tmp28, obj8);
      obj6[0] = items6;
      const items7 = [tmp29(tmp28, obj6), , ];
      const obj10 = { label: null, value: null, onValueChange: null };
      let intl3 = tmp3(1233).intl;
      obj10[0] = intl3.string(tmp3(1233).t["rMH+rt"]);
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
      obj11[1] = tmp27(tmp3(6002).TableSwitchRow, obj10);
      items7[1] = tmp27(tmp3(6001).TableRowGroup, obj11);
      tmp27Result = null;
      if (!tmp2) {
        const obj12 = { hasIcons: false, children: null };
        const obj13 = { variant: "danger", label: null, onPress: null };
        let intl4 = tmp3(1233).intl;
        obj13[1] = intl4.string(tmp3(1233).t.huYSMr);
        obj13[2] = function onPress() {
          let obj = tag(4859);
          obj = { title: null, body: null, cancelText: null, confirmText: null, onConfirm: null };
          const intl = channelId(1233).intl;
          obj[0] = intl.string(channelId(1233).t.huYSMr);
          const intl2 = channelId(1233).intl;
          obj[1] = intl2.string(channelId(1233).t.bkAFCf);
          const intl3 = channelId(1233).intl;
          obj[2] = intl3.string(channelId(1233).t.gm1Vej);
          const intl4 = channelId(1233).intl;
          obj[3] = intl4.string(channelId(1233).t.p89ACt);
          obj[4] = function onConfirm() {
            if (!closure_3) {
              closure_1_1(closure_1_2[13]).deleteForumTag(closure_0, id.id);
              arr = arr.pop();
              const obj = closure_1_1(closure_1_2[13]);
            }
          };
          obj.show(obj);
        };
        obj12[1] = tmp27(tmp3(5608).TableRow, obj13);
        tmp27Result = tmp27(tmp3(6001).TableRowGroup, obj12);
      }
      items7[2] = tmp27Result;
      obj1[2] = items7;
      obj[1] = tmp29(tmp3(4927).Stack, obj1);
      return tmp27(tmp28, obj);
    }
    const obj14 = { textEmojiStyle: null, fastImageStyle: null, src: null, name: null };
    ({ textEmoji: obj9[0], imageEmoji: obj9[1] } = tmp);
    let emojiURL;
    if (null != stateFromStores) {
      const obj15 = { id: null, animated: null, size: null };
      ({ id: obj11[0], animated: obj11[1] } = stateFromStores);
      obj15[2] = closure_8;
      emojiURL = tmp31(1430).getEmojiURL(obj15);
      const tmp31Result = tmp31(1430);
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
    tmp27Result1 = tmp27(tag(5594), obj14);
    tmp31 = tag;
    const tmp32 = tag(5594);
  }
  tmp27Result1 = tmp27(tmp3(8241).ReactionIcon, {});
};