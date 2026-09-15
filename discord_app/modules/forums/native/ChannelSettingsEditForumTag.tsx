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
const EmojiConstants = fn(1375);
({ EMOJI_URL_BASE_SIZE: closure_8, EmojiIntention: closure_9 } = EmojiConstants);
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(4639);
let obj2 = {
  container: { display: "flex", flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER },
  sections: null,
  hint: null,
  emojiIconWrapper: null,
  imageEmoji: null,
  textEmoji: null,
  nameInput: null,
  saveButton: null,
};
let obj3 = { display: "flex", flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
obj2.sections = { paddingHorizontal: 12, paddingTop: nativeDefault.space.PX_16 };
obj2.hint = { marginTop: 8 };
obj2.emojiIconWrapper = { display: "flex", alignItems: "center", justifyContent: "center", height: 24, width: 24 };
obj2.imageEmoji = { height: 20, width: 20 };
obj2.textEmoji = { fontSize: 20, lineHeight: 26 };
obj2.nameInput = { width: "100%", flexGrow: 1 };
obj2.saveButton = { flex: 0 };
let closure_12 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/forums/native/ChannelSettingsEditForumTag.tsx");

export default function ChannelSettingsEditForumTag(channelId) {
  channelId = channelId.channelId;
  const tag = channelId.tag;
  emoji = undefined;
  closure_6 = undefined;
  first1 = undefined;
  size = undefined;
  flag = undefined;
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
  const navigation = channelId(1484).useNavigation();
  let tmp6 = null;
  if (null != tag) {
    ({ emojiId: obj3.id, emojiName: obj3.name } = tag);
    tmp6 = { id: null, name: null };
    const obj4 = { id: null, name: null };
  }
  [emoji, closure_6] = navigation.useState(tmp6);
  let str;
  if (tag != null) {
    str = tag.name;
  }
  if (str == null) {
    str = "";
  }
  [first1, size] = navigation.useState(str);
  let moderated;
  if (tag != null) {
    moderated = tag.moderated;
  }
  [flag, closure_10] = navigation.useState(moderated);
  let obj = channelId(1484);
  const items = [first1];
  channel = channelId(504).useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  const tmp3Result = channelId(504);
  const items1 = [closure_6];
  const stateFromStores = channelId(504).useStateFromStores(items1, () => {
    let id;
    if (first != null) {
      id = first.id;
    }
    let usableCustomEmojiById = null;
    if (null != id) {
      usableCustomEmojiById = EmojiStore.getUsableCustomEmojiById(first.id);
    }
    return usableCustomEmojiById;
  });
  ref = obj2.useRef({ emoji, tagName: first1, moderated: flag });
  const items2 = [emoji, first1, flag];
  const effect = obj2.useEffect(() => {
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
  const layoutEffect = obj2.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle() {
        const intl = channelId(1115).intl;
        const string = intl.string;
        const t = channelId(1115).t;
        if (closure_1_3) {
          let children = string(t["/jubeD"]);
        } else {
          children = string(t.zeVg5d);
        }
        return closure_10(channelId(4635).Text, {
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
  callback = obj2.useCallback(() => {
    ({ tagName, emoji, moderated } = ref.current);
    if ("" !== tagName) {
      const obj3 = ForumActionCreatorsDefault;
      if (closure_3) {
        const obj2 = { name: tagName, emojiId: null, emojiName: null, moderated: null };
        let id;
        if (emoji != null) {
          id = emoji.id;
        }
        obj2.emojiId = id;
        tagName = undefined;
        if (emoji != null) {
          tagName = emoji.name;
        }
        obj2.emojiName = tagName;
        obj2.moderated = moderated;
        const forumTag = obj3.createForumTag(obj2, channelId);
      } else {
        let id1;
        if (tag != null) {
          id1 = tag.id;
        }
        const obj = { id: id1, name: tagName, emojiId: null, emojiName: null, moderated: null };
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
  const effect1 = obj2.useEffect(() => {
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
  const obj5 = { style: tmp.container, children: null };
  const obj6 = { spacing: 24, style: tmp.sections, children: null };
  const obj7 = {
    style: tmp.emojiIconWrapper,
    accessibilityRole: "button",
    onPress() {
      const result = openEmojiPickerActionSheet.openEmojiPickerActionSheet({
        onPressEmoji: handlePressEmoji,
        pickerIntention: constants.COMMUNITY_CONTENT,
        channel,
      });
    },
    children: null,
  };
  if (null != emoji) {
    if (null == emoji.name) {
      const obj8 = { icon: null, label: null, trailing: null };
      obj7.children = tmp27Result4;
      obj8.icon = tmp27(tmp30, obj7);
      const obj10 = {
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
      let intl = tmp3(1115).intl;
      obj10.placeholder = intl.string(tmp3(1115).t.aMSq0a);
      obj8.label = tmp27(tmp3(1177).TextInput, obj10);
      if (null != emoji) {
        const obj12 = {
          accessibilityRole: "button",
          onPress() {
            closure_6(null);
            closure_8("");
          },
          children: tmp27(tmp3(6721).CircleXIcon, { size: "xs" }),
        };
        let tmp27Result = tmp27(tmp3(5207).PressableOpacity, obj12);
      } else {
        tmp27Result = null;
      }
      const obj13 = { children: null };
      const obj14 = { hasIcons: true, children: null };
      obj8.trailing = tmp27Result;
      obj14.children = tmp27(tmp3(5690).TableRow, obj8);
      const items6 = [tmp27(tmp3(5772).TableRowGroup, obj14)];
      const obj15 = { style: tmp.hint, children: null };
      const obj16 = { variant: "text-sm/medium", color: "text-muted", children: null };
      let intl2 = tmp3(1115).intl;
      obj16.children = intl2.string(tmp3(1115).t["3v8kZH"]);
      obj15.children = tmp27(tmp3(4635).Text, obj16);
      items6[1] = tmp27(tmp28, obj15);
      obj13.children = items6;
      const items7 = [tmp29(tmp28, obj13), ,];
      const obj17 = { label: null, value: null, onValueChange: null };
      let intl3 = tmp3(1115).intl;
      obj17.label = intl3.string(tmp3(1115).t["rMH+rt"]);
      if (flag == null) {
        flag = false;
      }
      const obj18 = { hasIcons: false, children: null };
      obj17.value = flag;
      obj17.onValueChange = function onValueChange() {
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
      obj18.children = tmp27(tmp3(7307).TableSwitchRow, obj17);
      items7[1] = tmp27(tmp3(5772).TableRowGroup, obj18);
      let tmp27Result3 = null;
      if (!tmp2) {
        const obj19 = { hasIcons: false, children: null };
        const obj20 = { variant: "danger", label: null, onPress: null };
        let intl4 = tmp3(1115).intl;
        obj20.label = intl4.string(tmp3(1115).t.huYSMr);
        obj20.onPress = function onPress() {
          const obj2 = { title: null, body: null, cancelText: null, confirmText: null, onConfirm: null };
          const intl = util.intl;
          obj2.title = intl.string(util.t.huYSMr);
          const intl2 = util.intl;
          obj2.body = intl2.string(util.t.bkAFCf);
          const intl3 = util.intl;
          obj2.cancelText = intl3.string(util.t.gm1Vej);
          const intl4 = util.intl;
          obj2.confirmText = intl4.string(util.t.p89ACt);
          obj2.onConfirm = function onConfirm() {
            if (!closure_1_3) {
              tag(dependencyMap[13]).deleteForumTag(channelId, id.id);
              navigation.pop();
              const obj = tag(dependencyMap[13]);
            }
          };
          actions_AlertActionCreatorsDefault.show(obj2);
        };
        obj19.children = tmp27(tmp3(5690).TableRow, obj20);
        tmp27Result3 = tmp27(tmp3(5772).TableRowGroup, obj19);
      }
      items7[2] = tmp27Result3;
      obj6.children = items7;
      obj5.children = tmp29(tmp3(5057).Stack, obj6);
      return tmp27(tmp28, obj5);
    }
    const obj21 = { textEmojiStyle: null, fastImageStyle: null, src: null, name: null };
    ({ textEmoji: obj9.textEmojiStyle, imageEmoji: obj9.fastImageStyle } = tmp);
    let emojiURL;
    if (null != stateFromStores) {
      const obj22 = { id: null, animated: null, size: null };
      ({ id: obj11.id, animated: obj11.animated } = stateFromStores);
      obj22.size = size;
      emojiURL = tmp31(1397).getEmojiURL(obj22);
      const tmp31Result = tmp31(1397);
    }
    obj21.src = emojiURL;
    let str2;
    if (emoji != null) {
      str2 = emoji.name;
    }
    if (str2 == null) {
      str2 = "";
    }
    obj21.name = str2;
    tmp27Result4 = tmp27(tag(7237), obj21);
    tmp31 = tag;
    const tmp32 = tag(7237);
  }
  tmp27Result4 = tmp27(tmp3(8886).ReactionIcon, {});
}
