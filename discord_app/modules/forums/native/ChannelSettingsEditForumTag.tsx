// discord_app/modules/forums/native/ChannelSettingsEditForumTag.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import intl5 from "../../../intl/index.native.tsx";
import actions_AlertActionCreatorsDefault from "../../../actions/native/AlertActionCreators.tsx";
import ForumActionCreatorsDefault from "../ForumActionCreators.tsx";
import openEmojiPickerActionSheet from "../../emoji_picker/native/openEmojiPickerActionSheet.tsx";
import _slicedToArray_mod from "../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../_runtime/00019_react.js";
import EmojiStore from "../../emojis/EmojiStore.tsx";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import EmojiConstants from "../../emojis/EmojiConstants.tsx";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../_runtime/metro/00002__.js";

let channelId, dependencyMap, navigation, tmp4;

let c10;
let c9;
let metroImportAll;
let obj2;
let obj3;
let unpackModuleId;
let _slicedToArray = _slicedToArray_mod;
const View = react_native.View;
({ EMOJI_URL_BASE_SIZE: metroImportAll, EmojiIntention: c9 } = EmojiConstants);
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  container: obj2,
  sections: obj3,
  hint: { marginTop: 8 },
  emojiIconWrapper: { display: "flex", alignItems: "center", justifyContent: "center", height: 24, width: 24 },
  imageEmoji: { height: 20, width: 20 },
  textEmoji: { fontSize: 20, lineHeight: 26 },
  nameInput: { width: "100%", flexGrow: 1 },
  saveButton: { flex: 0 },
};
obj2 = { display: "flex", flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
createStyles = createStyles.createStyles;
obj3 = { paddingHorizontal: 12, paddingTop: nativeDefault.space.PX_16 };
let closure_12 = createStyles(obj);
const tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channelId) => {
      let closure_10;
      let closure_2;
      let closure_3;
      let closure_6;
      let closure_8;
      let emoji;
      let first1;
      let first2;
      let onPressEmoji;
      let tmp17;
      let tmp21;
      let tmp6;
      const tmp = channelId;
      let tmp2 = dependencyMap;
      let obj = channelId(576);
      const cResult = obj.c(86);
      channelId = channelId.channelId;
      const tag = channelId.tag;
      dependencyMap = ref();
      _slicedToArray = null == tag;
      ref();
      let obj2 = channelId(1490);
      navigation = obj2.useNavigation();
      if (cResult[0] !== tag) {
        let tmp7 = null;
        if (null != tag) {
          const obj4 = { id: null, name: null };
          ({ emojiId: obj3.id, emojiName: obj3.name } = tag);
          tmp7 = obj4;
        }
        cResult[0] = tag;
        cResult[1] = tmp7;
        tmp6 = tmp7;
      } else {
        tmp6 = cResult[1];
      }
      [emoji, EmojiStore] = navigation.useState(tmp6);
      let str;
      const useState = navigation.useState;
      const tmp8 = navigation;
      if (tag != null) {
        str = tag.name;
      }
      if (str == null) {
        str = "";
      }
      [first1, closure_8] = useState(str);
      let moderated;
      const useState2 = tmp8.useState;
      if (tag != null) {
        moderated = tag.moderated;
      }
      [first2, closure_10] = useState2(moderated);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [first1];
        cResult[2] = items;
        tmp17 = items;
      } else {
        tmp17 = cResult[2];
      }
      if (cResult[3] !== channelId) {
        class R {
          constructor() {
            return closure_7.getChannel(channelId);
          }
        }
        cResult[3] = channelId;
        cResult[4] = R;
      } else {
        class R {
          constructor() {
            return closure_7.getChannel(channelId);
          }
        }
      }
      const tmpResult = tmp(504);
      const stateFromStores = tmpResult.useStateFromStores(tmp17, R);
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        class R {
          constructor() {
            return closure_7.getChannel(channelId);
          }
        }
        const items1 = [EmojiStore];
        cResult[5] = items1;
        tmp21 = items1;
      } else {
        class R {
          constructor() {
            return closure_7.getChannel(channelId);
          }
        }
      }
      if (cResult[6] !== emoji) {
        class G {
          constructor() {
            tmp = closure_5;
            id = undefined;
            if (closure_5 != null) {
              id = tmp.id;
            }
            usableCustomEmojiById = null;
            if (null != id) {
              tmp4 = closure_6;
              usableCustomEmojiById = closure_6.getUsableCustomEmojiById(tmp.id);
            }
            return usableCustomEmojiById;
          }
        }
        cResult[6] = emoji;
        cResult[7] = G;
      } else {
        class G {
          constructor() {
            tmp = closure_5;
            id = undefined;
            if (closure_5 != null) {
              id = tmp.id;
            }
            usableCustomEmojiById = null;
            if (null != id) {
              tmp4 = closure_6;
              usableCustomEmojiById = closure_6.getUsableCustomEmojiById(tmp.id);
            }
            return usableCustomEmojiById;
          }
        }
      }
      const tmpResult2 = tmp(504);
      const stateFromStores1 = tmpResult2.useStateFromStores(tmp21, G);
      if (cResult[8] === emoji) {
        class G {
          constructor() {
            tmp = closure_5;
            id = undefined;
            if (closure_5 != null) {
              id = tmp.id;
            }
            usableCustomEmojiById = null;
            if (null != id) {
              tmp4 = closure_6;
              usableCustomEmojiById = closure_6.getUsableCustomEmojiById(tmp.id);
            }
            return usableCustomEmojiById;
          }
        }
      }
      const obj5 = { emoji, tagName: first1, moderated: first2 };
      cResult[8] = emoji;
      cResult[9] = first2;
      cResult[10] = first1;
      cResult[11] = obj5;
    }
  : (channelId) => {
      let TableRow2;
      let Text;
      let TextInput;
      let closure_2;
      let closure_3;
      let closure_6;
      let closure_8;
      let emoji;
      let emojiURL;
      let intl;
      let intl2;
      let intl3;
      let intl4;
      let items6;
      let obj10;
      let obj16;
      let obj20;
      let str2;
      let tmp22;
      let tmp27Result;
      let tmp27Result4;
      channelId = channelId.channelId;
      const tag = channelId.tag;
      emoji = undefined;
      closure_6 = undefined;
      let first1;
      size = undefined;
      let flag;
      let closure_10;
      let channel;
      let ref;
      let closure_13;
      let callback;
      function handlePressEmoji(id) {
        let tmp2;
        if (null == id.id) {
          if (null != id.surrogates) {
            let name;
            if ("" !== id.surrogates) {
              name = id.surrogates;
            }
            const obj = { id: id.id, name: tmp2 };
            tmp2 = undefined;
            if (null == id.id) {
              tmp2 = name;
            }
            closure_6(obj);
          }
        }
        name = id.name;
      }
      const tmp = ref();
      dependencyMap = tmp;
      let tmp2 = null == tag;
      _slicedToArray = tmp2;
      let obj = channelId(1490);
      navigation = obj.useNavigation();
      let obj2 = navigation;
      let tmp6 = null;
      const useState = navigation.useState;
      if (null != tag) {
        const obj4 = { id: null, name: null };
        ({ emojiId: obj3.id, emojiName: obj3.name } = tag);
        tmp6 = obj4;
      }
      [emoji, closure_6] = useState(tmp6);
      let str;
      const useState2 = obj2.useState;
      if (tag != null) {
        str = tag.name;
      }
      if (str == null) {
        str = "";
      }
      const tmp7Result = _slicedToArray(useState2(str), 2);
      first1 = tmp7Result[0];
      size = tmp7Result[1];
      let moderated;
      const useState3 = obj2.useState;
      if (tag != null) {
        moderated = tag.moderated;
      }
      const tmp7Result2 = _slicedToArray(useState3(moderated), 2);
      flag = tmp7Result2[0];
      closure_10 = tmp7Result2[1];
      const items = [first1];
      const tmp3Result = channelId(504);
      channel = tmp3Result.useStateFromStores(items, () => ChannelStore.getChannel(channelId));
      const items1 = [closure_6];
      const tmp3Result2 = channelId(504);
      const stateFromStores = tmp3Result2.useStateFromStores(items1, () => {
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
        const obj = { emoji, tagName: first1, moderated: flag };
        ref.current = obj;
      }, items2);
      let tmp16 = null != tag;
      if (tmp16) {
        let tmp17 = tag.name !== first1;
        if (!tmp17) {
          let id;
          const emojiId = tag.emojiId;
          if (emoji != null) {
            id = emoji.id;
          }
          tmp17 = emojiId !== id;
        }
        if (!tmp17) {
          let name;
          const emojiName = tag.emojiName;
          if (emoji != null) {
            name = emoji.name;
          }
          tmp17 = emojiName !== name;
        }
        if (!tmp17) {
          tmp17 = tag.moderated !== flag;
        }
        tmp16 = tmp17;
      }
      if (tmp2) {
        tmp22 = tmp21;
      } else {
        tmp22 = tmp21;
        if ("" !== first1) {
          tmp22 = tmp16;
        }
      }
      closure_13 = tmp22;
      const items3 = [navigation, tmp2];
      const layoutEffect = obj2.useLayoutEffect(() => {
        const obj = {
          headerTitle() {
            let children;
            const Text = channelId(closure_2[13]).Text;
            const intl = channelId(closure_2[14]).intl;
            const string = intl.string;
            const t = channelId(closure_2[14]).t;
            if (closure_1_3) {
              children = string(t["/jubeD"]);
            } else {
              children = string(t.zeVg5d);
            }
            return closure_10(Text, {
              variant: "redesign/heading-18/bold",
              color: "mobile-text-heading-primary",
              accessibilityRole: "header",
              children,
            });
          },
        };
        navigation.setOptions(obj);
      }, items3);
      const items4 = [tmp2, navigation, channelId];
      let id1;
      const useCallback = obj2.useCallback;
      if (tag != null) {
        id1 = tag.id;
      }
      items4[3] = id1;
      callback = useCallback(() => {
        let id;
        let id2;
        let moderated;
        let name;
        let name1;
        let tagName;
        ({ tagName, emoji, moderated } = ref.current);
        if ("" !== tagName) {
          const tmp17 = ForumActionCreatorsDefault;
          if (closure_3) {
            const obj2 = { name: tagName, emojiId: id, emojiName: name, moderated };
            id = undefined;
            const createForumTag = tmp17.createForumTag;
            if (emoji != null) {
              id = emoji.id;
            }
            name = undefined;
            if (emoji != null) {
              name = emoji.name;
            }
            const forumTag = createForumTag(obj2, channelId);
          } else {
            let id1;
            const updateForumTag = tmp17.updateForumTag;
            if (tag != null) {
              id1 = tag.id;
            }
            const obj = { id: id1, name: tagName, emojiId: id2, emojiName: name1, moderated };
            id2 = undefined;
            if (emoji != null) {
              id2 = emoji.id;
            }
            name1 = undefined;
            if (emoji != null) {
              name1 = emoji.name;
            }
            updateForumTag(obj, channelId);
          }
          navigation.pop();
        }
      }, items4);
      const items5 = [tmp22, navigation, callback, tmp.saveButton];
      const effect1 = obj2.useEffect(() => {
        let onPress;
        let saveButton;
        const setOptions = navigation.setOptions;
        if (closure_13) {
          let obj = {
            headerRight() {
              let intl;
              const obj = {
                style: saveButton.saveButton,
                onPress,
                text: intl.string(channelId(saveButton[14]).t["R3BPH+"]),
              };
              const HeaderActionButton = channelId(saveButton[16]).HeaderActionButton;
              intl = channelId(saveButton[14]).intl;
              return closure_10(HeaderActionButton, obj);
            },
          };
          setOptions(obj);
        } else {
          setOptions({ headerRight: "r" });
        }
      }, items5);
      const obj5 = { style: tmp.container, children: null };
      const obj6 = { spacing: 24, style: tmp.sections, children: null };
      const Stack = tmp3(5600).Stack;
      const TableRowGroup = tmp3(6081).TableRowGroup;
      const TableRow = tmp3(6000).TableRow;
      const obj7 = {
        style: tmp.emojiIconWrapper,
        accessibilityRole: "button",
        onPress() {
          const obj = openEmojiPickerActionSheet;
          const obj2 = { onPressEmoji: handlePressEmoji, pickerIntention: constants.COMMUNITY_CONTENT, channel };
          const result = obj.openEmojiPickerActionSheet(obj2);
        },
        children: null,
      };
      if (null != emoji) {
        if (null == emoji.name) {
          obj7.children = tmp27Result4;
          const obj8 = { icon: closure_10(tmp30, obj7), label: closure_10(TextInput, obj10), trailing: tmp27Result };
          obj10 = {
            maxLength: 20,
            style: tmp.nameInput,
            value: first1,
            autoCorrect: false,
            autoCapitalize: "none",
            returnKeyType: "done",
            onChangeText(arg0) {
              closure_8(arg0);
            },
            placeholder: intl.string(channelId(1126).t.aMSq0a),
          };
          TextInput = tmp3(1188).TextInput;
          intl = tmp3(1126).intl;
          if (null != emoji) {
            const obj12 = {
              accessibilityRole: "button",
              onPress() {
                closure_6(null);
                closure_8("");
              },
              children: closure_10(channelId(4803).CircleXIcon, { size: "xs" }),
            };
            const PressableOpacity = tmp3(5916).PressableOpacity;
            tmp27Result = tmp27(PressableOpacity, obj12);
          } else {
            tmp27Result = null;
          }
          const obj13 = { children: items6 };
          const obj14 = { hasIcons: true, children: closure_10(TableRow, obj8) };
          items6 = [closure_10(TableRowGroup, obj14)];
          const obj15 = { style: tmp.hint, children: closure_10(Text, obj16) };
          obj16 = {
            variant: "text-sm/medium",
            color: "text-muted",
            children: intl2.string(channelId(1126).t["3v8kZH"]),
          };
          Text = tmp3(4892).Text;
          intl2 = tmp3(1126).intl;
          items6[1] = closure_10(emoji, obj15);
          const items7 = [channel(emoji, obj13), ,];
          const TableRowGroup2 = tmp3(6081).TableRowGroup;
          const obj17 = {
            label: intl3.string(channelId(1126).t["rMH+rt"]),
            value: flag,
            onValueChange() {
              let tmp2 = !flag;
              if (flag) {
                let moderated;
                if (tag != null) {
                  moderated = tag.moderated;
                }
                tmp2 = null == moderated && undefined;
              }
              closure_10(tmp2);
            },
          };
          const TableSwitchRow = tmp3(6705).TableSwitchRow;
          intl3 = tmp3(1126).intl;
          if (flag == null) {
            flag = false;
          }
          const obj18 = { hasIcons: false, children: closure_10(TableSwitchRow, obj17) };
          items7[1] = closure_10(TableRowGroup2, obj18);
          let tmp27Result3 = null;
          if (!tmp2) {
            const obj19 = { hasIcons: false, children: closure_10(TableRow2, obj20) };
            const TableRowGroup3 = tmp3(6081).TableRowGroup;
            obj20 = {
              variant: "danger",
              label: intl4.string(channelId(1126).t.huYSMr),
              onPress() {
                let id;
                let intl;
                let intl2;
                let intl3;
                let intl4;
                let obj = {
                  title: intl.string(intl5.t.huYSMr),
                  body: intl2.string(intl5.t.bkAFCf),
                  cancelText: intl3.string(intl5.t.gm1Vej),
                  confirmText: intl4.string(intl5.t.p89ACt),
                  onConfirm() {
                    if (!closure_1_3) {
                      const obj = tag(closure_2[15]);
                      obj.deleteForumTag(channelId, id.id);
                      navigation.pop();
                    }
                  },
                };
                const show = actions_AlertActionCreatorsDefault.show;
                actions_AlertActionCreatorsDefault;
                intl = intl5.intl;
                intl2 = intl5.intl;
                intl3 = intl5.intl;
                intl4 = intl5.intl;
                show(obj);
              },
            };
            TableRow2 = tmp3(6000).TableRow;
            intl4 = tmp3(1126).intl;
            tmp27Result3 = tmp27(TableRowGroup3, obj19);
          }
          items7[2] = tmp27Result3;
          obj6.children = items7;
          obj5.children = channel(Stack, obj6);
          return closure_10(emoji, obj5);
        }
        const obj21 = { textEmojiStyle: null, fastImageStyle: null, src: emojiURL, name: str2 };
        ({ textEmoji: obj9.textEmojiStyle, imageEmoji: obj9.fastImageStyle } = tmp);
        emojiURL = undefined;
        const tmp31 = tag;
        const tmp32 = tag(6632);
        if (null != stateFromStores) {
          const obj22 = { id: null, animated: null, size };
          ({ id: obj11.id, animated: obj11.animated } = stateFromStores);
          const tmp31Result = tmp31(1402);
          emojiURL = tmp31Result.getEmojiURL(obj22);
        }
        str2 = undefined;
        if (emoji != null) {
          str2 = emoji.name;
        }
        if (str2 == null) {
          str2 = "";
        }
        tmp27Result4 = tmp27(tmp32, obj21);
      }
      tmp27Result4 = tmp27(tmp3(8444).ReactionIcon, {});
    };
let size = size_mod;
let result = size.fileFinishedImporting("modules/forums/native/ChannelSettingsEditForumTag.tsx");

export default tmp5;
