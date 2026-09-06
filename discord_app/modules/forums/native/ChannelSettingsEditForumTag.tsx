// discord_app/modules/forums/native/ChannelSettingsEditForumTag.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import actions_AlertActionCreatorsDefault from "../../../actions/native/AlertActionCreators.tsx";
import ForumActionCreatorsDefault from "../ForumActionCreators.tsx";
import openEmojiPickerActionSheet from "../../emoji_picker/native/openEmojiPickerActionSheet.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import EmojiStore from "../../emojis/EmojiStore.tsx";
import ChannelStore from "../../../stores/ChannelStore.tsx";

require = fn;
const View = fn(17).View;
const EmojiConstants = fn(1374);
({ EMOJI_URL_BASE_SIZE: closure_8, EmojiIntention: closure_9 } = EmojiConstants);
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
fn(4560);
let createStyles = {
  container: null,
  sections: null,
  hint: null,
  emojiIconWrapper: null,
  imageEmoji: null,
  textEmoji: null,
  nameInput: null,
  saveButton: null,
};
createStyles = { display: "flex", flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
createStyles.container = createStyles;
createStyles.sections = { paddingHorizontal: 12, paddingTop: nativeDefault.space.PX_16 };
createStyles.hint = { marginTop: 8 };
createStyles.emojiIconWrapper = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: 24,
  width: 24,
};
createStyles.imageEmoji = { height: 20, width: 20 };
createStyles.textEmoji = { fontSize: 20, lineHeight: 26 };
createStyles.nameInput = { width: "100%", flexGrow: 1 };
createStyles.saveButton = { flex: 0 };
let closure_12 = createStyles.createStyles(createStyles);
let size = fn(2);
let result = size.fileFinishedImporting("modules/forums/native/ChannelSettingsEditForumTag.tsx");

export default function ChannelSettingsEditForumTag(channelId) {
  channelId = channelId.channelId;
  const tag = channelId.tag;
  let emoji;
  closure_6 = undefined;
  let first1;
  size = undefined;
  let flag;
  closure_10 = undefined;
  let channel;
  let ref;
  closure_13 = undefined;
  let callback;
  function handlePressEmoji(id) {
    if (null == id.id) {
      if (null != id.surrogates) {
        if ("" !== id.surrogates) {
          let name = id.surrogates;
        }
        const obj = { id: id.id, name: null };
        let tmp2;
        if (null == id.id) {
          tmp2 = name;
        }
        obj.name = tmp2;
        closure_6(obj);
      }
    }
    name = id.name;
  }
  const tmp = ref();
  dependencyMap = tmp;
  _slicedToArray = tmp2;
  let obj = channelId(1483);
  const navigation = obj.useNavigation();
  let obj1 = navigation;
  let tmp6 = null;
  if (null != tag) {
    obj = { id: null, name: null };
    ({ emojiId: obj3.id, emojiName: obj3.name } = tag);
    tmp6 = obj;
  }
  const tmp8 = _slicedToArray(navigation.useState(tmp6), 2);
  emoji = tmp8[0];
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
  size = tmp7Result[1];
  let moderated;
  if (tag != null) {
    moderated = tag.moderated;
  }
  tmp7Result = tmp7(obj1.useState(moderated), 2);
  flag = tmp7Result[0];
  closure_10 = tmp7Result[1];
  let tmp3Result = tmp3(504);
  const items = [first1];
  channel = tmp3Result.useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  tmp3Result = tmp3(504);
  const items1 = [closure_6];
  const stateFromStores = tmp3Result.useStateFromStores(items1, () => {
    let id;
    if (first != null) {
      id = tmp.id;
    }
    let usableCustomEmojiById = null;
    if (null != id) {
      usableCustomEmojiById = EmojiStore.getUsableCustomEmojiById(tmp.id);
    }
    return usableCustomEmojiById;
  });
  ref = obj1.useRef({ emoji, tagName: first1, moderated: flag });
  const items2 = [emoji, first1, flag];
  const effect = obj1.useEffect(() => {
    closure_12.current = { emoji, tagName: first1, moderated: flag };
  }, items2);
  let tmp16 = null != tag;
  if (tmp16) {
    let tmp17 = tag.name !== first1;
    if (!tmp17) {
      let id;
      if (emoji != null) {
        id = emoji.id;
      }
      tmp17 = tag.emojiId !== id;
    }
    if (!tmp17) {
      let name;
      if (emoji != null) {
        name = emoji.name;
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
        const intl = channelId(1114).intl;
        const string = intl.string;
        const t = channelId(1114).t;
        if (closure_1_3) {
          let children = string(t["/jubeD"]);
        } else {
          children = string(t.zeVg5d);
        }
        return closure_10(channelId(4556).Text, {
          variant: "redesign/heading-18/bold",
          color: "mobile-text-heading-primary",
          accessibilityRole: "header",
          children,
        });
      },
    });
  }, items3);
  const items4 = [null == tag, navigation, channelId];
  let id1;
  if (tag != null) {
    id1 = tag.id;
  }
  items4[3] = id1;
  callback = obj1.useCallback(() => {
    ({ tagName, emoji, moderated } = ref.current);
    if ("" !== tagName) {
      const obj3 = ForumActionCreatorsDefault;
      if (closure_3) {
        let obj = { name: tagName, emojiId: null, emojiName: null, moderated: null };
        let id;
        if (emoji != null) {
          id = emoji.id;
        }
        obj.emojiId = id;
        tagName = undefined;
        if (emoji != null) {
          tagName = emoji.name;
        }
        obj.emojiName = tagName;
        obj.moderated = moderated;
        const forumTag = obj3.createForumTag(obj, channelId);
      } else {
        let id1;
        if (tag != null) {
          id1 = tag.id;
        }
        obj = { id: id1, name: tagName, emojiId: null, emojiName: null, moderated: null };
        let id2;
        if (emoji != null) {
          id2 = emoji.id;
        }
        obj.emojiId = id2;
        let name;
        if (emoji != null) {
          name = emoji.name;
        }
        obj.emojiName = name;
        obj.moderated = moderated;
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
      let obj = {
        headerRight() {
          const obj = { style: saveButton.saveButton, onPress, text: null };
          const intl = channelId(saveButton[12]).intl;
          obj.text = intl.string(channelId(saveButton[12]).t["R3BPH+"]);
          return closure_10(channelId(saveButton[14]).HeaderActionButton, obj);
        },
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
      const obj = { onPressEmoji: handlePressEmoji, pickerIntention: constants.COMMUNITY_CONTENT, channel };
      const result = obj.openEmojiPickerActionSheet(obj);
    },
    children: null,
  };
  if (null != emoji) {
    if (null == emoji.name) {
      let obj3 = { icon: null, label: null, trailing: null };
      obj2.children = tmp27Result1;
      obj3.icon = tmp27(tmp30, obj2);
      const obj4 = {
        maxLength: 20,
        style: tmp.nameInput,
        value: first1,
        autoCorrect: false,
        autoCapitalize: "none",
        returnKeyType: "done",
        onChangeText(arg0) {
          closure_8(arg0);
        },
        placeholder: null,
      };
      let intl = tmp3(1114).intl;
      obj4.placeholder = intl.string(tmp3(1114).t.aMSq0a);
      obj3.label = tmp27(tmp3(1178).TextInput, obj4);
      if (null != emoji) {
        const obj5 = {
          accessibilityRole: "button",
          onPress() {
            closure_6(null);
            closure_8("");
          },
          children: tmp27(tmp3(6616).CircleXIcon, { size: "xs" }),
        };
        let tmp27Result = tmp27(tmp3(5123).PressableOpacity, obj5);
      } else {
        tmp27Result = null;
      }
      const obj6 = { children: null };
      const obj7 = { hasIcons: true, children: null };
      obj3.trailing = tmp27Result;
      obj7.children = tmp27(tmp3(5605).TableRow, obj3);
      const items6 = [tmp27(tmp3(5687).TableRowGroup, obj7)];
      const obj8 = { style: tmp.hint, children: null };
      const obj9 = { variant: "text-sm/medium", color: "text-muted", children: null };
      let intl2 = tmp3(1114).intl;
      obj9.children = intl2.string(tmp3(1114).t["3v8kZH"]);
      obj8.children = tmp27(tmp3(4556).Text, obj9);
      items6[1] = tmp27(tmp28, obj8);
      obj6.children = items6;
      const items7 = [tmp29(tmp28, obj6), ,];
      const obj10 = { label: null, value: null, onValueChange: null };
      let intl3 = tmp3(1114).intl;
      obj10.label = intl3.string(tmp3(1114).t["rMH+rt"]);
      if (flag == null) {
        flag = false;
      }
      const obj11 = { hasIcons: false, children: null };
      obj10.value = flag;
      obj10.onValueChange = function onValueChange() {
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
      obj11.children = tmp27(tmp3(7201).TableSwitchRow, obj10);
      items7[1] = tmp27(tmp3(5687).TableRowGroup, obj11);
      tmp27Result = null;
      if (!tmp2) {
        const obj12 = { hasIcons: false, children: null };
        const obj13 = { variant: "danger", label: null, onPress: null };
        let intl4 = tmp3(1114).intl;
        obj13.label = intl4.string(tmp3(1114).t.huYSMr);
        obj13.onPress = function onPress() {
          let obj = { title: null, body: null, cancelText: null, confirmText: null, onConfirm: null };
          const intl = util.intl;
          obj.title = intl.string(util.t.huYSMr);
          const intl2 = util.intl;
          obj.body = intl2.string(util.t.bkAFCf);
          const intl3 = util.intl;
          obj.cancelText = intl3.string(util.t.gm1Vej);
          const intl4 = util.intl;
          obj.confirmText = intl4.string(util.t.p89ACt);
          obj.onConfirm = function onConfirm() {
            if (!closure_1_3) {
              tag(dependencyMap[13]).deleteForumTag(channelId, id.id);
              navigation.pop();
              const obj = tag(dependencyMap[13]);
            }
          };
          obj.show(obj);
        };
        obj12.children = tmp27(tmp3(5605).TableRow, obj13);
        tmp27Result = tmp27(tmp3(5687).TableRowGroup, obj12);
      }
      items7[2] = tmp27Result;
      obj1.children = items7;
      obj.children = tmp29(tmp3(4973).Stack, obj1);
      return tmp27(tmp28, obj);
    }
    const obj14 = { textEmojiStyle: null, fastImageStyle: null, src: null, name: null };
    ({ textEmoji: obj9.textEmojiStyle, imageEmoji: obj9.fastImageStyle } = tmp);
    let emojiURL;
    if (null != stateFromStores) {
      const obj15 = { id: null, animated: null, size: null };
      ({ id: obj11.id, animated: obj11.animated } = stateFromStores);
      obj15.size = size;
      emojiURL = tmp31(1396).getEmojiURL(obj15);
      const tmp31Result = tmp31(1396);
    }
    obj14.src = emojiURL;
    let str2;
    if (emoji != null) {
      str2 = emoji.name;
    }
    if (str2 == null) {
      str2 = "";
    }
    obj14.name = str2;
    tmp27Result1 = tmp27(tag(7130), obj14);
    tmp31 = tag;
    const tmp32 = tag(7130);
  }
  tmp27Result1 = tmp27(tmp3(8757).ReactionIcon, {});
}
