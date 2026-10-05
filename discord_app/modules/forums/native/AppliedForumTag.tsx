// discord_app/modules/forums/native/AppliedForumTag.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import get_initialized from "../../../../discord_common/js/packages/flux/index.tsx";
import react2 from "../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import intl2 from "../../../intl/index.native.tsx";
import EmojiConstants from "../../emojis/EmojiConstants.tsx";
import AvatarUtilsDefault from "../../../utils/AvatarUtils.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import EmojiDefault from "../../emojis/native/Emoji.tsx";
import ForumTagContextMenuDefault from "ForumTagContextMenu.tsx";
import _objectWithoutProperties from "../../../../_runtime/metro/00109__objectWithoutProperties.js";
import react from "../../../../_runtime/00019_react.js";
import EmojiStore from "../../emojis/EmojiStore.tsx";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let dependencyMap, importDefault;

let c9;
let metroImportAll;
let obj2;
let closure_3 = ["ref"];
const View = react_native.View;
const EMOJI_URL_BASE_SIZE = EmojiConstants.EMOJI_URL_BASE_SIZE;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let obj = {
  pill: obj2,
  disableEndMargin: { marginRight: 0 },
  emoji: { height: 12, width: 12, marginRight: 4, flexShrink: 0 },
  textEmoji: { fontSize: 10, marginRight: 4 },
  tagName: { flexShrink: 1 },
  container: { display: "flex", flexDirection: "row", alignItems: "center" },
};
obj2 = {
  height: 24,
  paddingHorizontal: 8,
  borderRadius: 20,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL,
  borderWidth: 1,
  borderColor: nativeDefault.colors.BORDER_SUBTLE,
  marginRight: 4,
  flexShrink: 1,
};
let closure_10 = createStyles.createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let containerStyle;
      let disableEndMargin;
      let hasUnreads;
      let tag;
      const obj = react2;
      const cResult = obj.c(11);
      ({ tag, hasUnreads, containerStyle, disableEndMargin } = arg0);
      const tmp2 = closure_10();
      if (cResult[0] === disableEndMargin) {
        let tmp3;
        if (cResult[1] === tmp2.disableEndMargin) {
          tmp3 = cResult[2];
        }
        if (cResult[3] === containerStyle) {
          if (cResult[4] === tmp2.pill) {
            let tmp5;
            if (cResult[5] === tmp3) {
              tmp5 = cResult[6];
            }
            if (cResult[7] === hasUnreads) {
              if (cResult[8] === tmp5) {
                let tmp6;
                if (cResult[9] === tag) {
                  tmp6 = cResult[10];
                }
                return tmp6;
              }
            }
            const obj2 = { tag, hasUnreads, containerStyle: tmp5 };
            const tmp9 = metroImportAll(closure_11, obj2);
            cResult[7] = hasUnreads;
            cResult[8] = tmp5;
            cResult[9] = tag;
            cResult[10] = tmp9;
            tmp6 = tmp9;
          }
        }
        const items = [tmp2.pill, containerStyle, tmp3];
        cResult[3] = containerStyle;
        cResult[4] = tmp2.pill;
        cResult[5] = tmp3;
        cResult[6] = items;
        tmp5 = items;
      }
      const tmp4 = disableEndMargin ? tmp2.disableEndMargin : {};
      cResult[0] = disableEndMargin;
      cResult[1] = tmp2.disableEndMargin;
      cResult[2] = tmp4;
      tmp3 = tmp4;
    }
  : (arg0) => {
      let containerStyle;
      let disableEndMargin;
      let hasUnreads;
      let items;
      let tag;
      ({ tag, hasUnreads, containerStyle, disableEndMargin } = arg0);
      const tmp = closure_10();
      const obj = { tag, hasUnreads, containerStyle: items };
      items = [tmp.pill, containerStyle, disableEndMargin ? tmp.disableEndMargin : {}];
      return metroImportAll(closure_11, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (hasUnreads) => {
      let container;
      let containerStyle;
      let first;
      let name;
      let str;
      let tag;
      let tmp7;
      let obj = containerStyle(name[9]);
      const cResult = obj.c(17);
      ({ tag, containerStyle } = hasUnreads);
      hasUnreads = hasUnreads.hasUnreads;
      const tmp4 = closure_10();
      importDefault = tmp4;
      name = tag.name;
      const emojiId = tag.emojiId;
      const emojiName = tag.emojiName;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [str];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== emojiId) {
        const fn = function x() {
          let usableCustomEmojiById = null;
          if (null != emojiId) {
            usableCustomEmojiById = EmojiStore.getUsableCustomEmojiById(tmp);
          }
          return usableCustomEmojiById;
        };
        cResult[1] = emojiId;
        cResult[2] = fn;
        tmp7 = fn;
      } else {
        tmp7 = cResult[2];
      }
      const tmpResult = containerStyle(name[10]);
      const stateFromStores = tmpResult.useStateFromStores(first, tmp7);
      str = "text-muted";
      if (hasUnreads) {
        str = "text-default";
      }
      if (cResult[3] === str) {
        if (cResult[4] === containerStyle) {
          if (cResult[5] === stateFromStores) {
            if (cResult[6] === emojiId) {
              if (cResult[7] === emojiName) {
                if (cResult[8] === name) {
                  if (cResult[9] === tmp4.container) {
                    if (cResult[10] === tmp4.emoji) {
                      if (cResult[11] === tmp4.tagName) {
                        let tmp9;
                        if (cResult[12] === tmp4.textEmoji) {
                          tmp9 = cResult[13];
                        }
                        if (cResult[14] === tmp9) {
                          let tmp10;
                          if (cResult[15] === tag.id) {
                            tmp10 = cResult[16];
                          }
                          return tmp10;
                        }
                        let obj2 = { tagId: tag.id, children: tmp9 };
                        let tmp13 = closure_8(require("ForumTagContextMenu"), obj2);
                        cResult[14] = tmp9;
                        cResult[15] = tag.id;
                        cResult[16] = tmp13;
                        tmp10 = tmp13;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      class I {
        constructor(ref) {
          let emojiURL;
          let intl;
          let items;
          let items1;
          let obj2;
          const obj = {
            style: items,
            accessible: true,
            accessibilityLabel: intl.formatToPlainString(intl2.t.tXXD6v, obj2),
            ref: ref.ref,
            children: items1,
          };
          items = [container.container, containerStyle];
          const tmp = _objectWithoutProperties(ref.ref, closure_3);
          intl = intl2.intl;
          obj2 = { tagName: name };
          const merged = Object.assign(tmp);
          str = emojiName;
          let tmp11Result = null != emojiName || null != emojiId;
          if (tmp11Result) {
            const obj4 = { textEmojiStyle: null, fastImageStyle: null, src: emojiURL, name: str };
            ({ textEmoji: obj3.textEmojiStyle, emoji: obj3.fastImageStyle } = container);
            emojiURL = undefined;
            const tmp13 = EmojiDefault;
            if (null != stateFromStores) {
              const obj6 = { id: null, animated: null, size: EMOJI_URL_BASE_SIZE };
              ({ id: obj5.id, animated: obj5.animated } = stateFromStores);
              const tmp12Result = AvatarUtilsDefault;
              emojiURL = tmp12Result.getEmojiURL(obj6);
            }
            if (str == null) {
              str = "";
            }
            tmp11Result = metroImportAll(tmp13, obj4);
          }
          items1 = [tmp11Result];
          const obj10 = {
            lineClamp: 1,
            style: container.tagName,
            variant: "text-xs/semibold",
            color: str,
            children: name,
          };
          items1[1] = metroImportAll(Text_Text.Text, obj10);
          return React4(View, obj);
        }
      }
      cResult[3] = str;
      cResult[4] = containerStyle;
      cResult[5] = stateFromStores;
      cResult[6] = emojiId;
      cResult[7] = emojiName;
      cResult[8] = name;
      cResult[9] = tmp4.container;
      cResult[10] = tmp4.emoji;
      cResult[11] = tmp4.tagName;
      cResult[12] = tmp4.textEmoji;
      cResult[13] = I;
      tmp9 = I;
    }
  : (hasUnreads) => {
      let c2;
      let c3;
      let c4;
      let container;
      let require;
      let tag;
      let tagName;
      ({ tag, containerStyle: require } = hasUnreads);
      dependencyMap = undefined;
      c3 = undefined;
      c4 = undefined;
      let str;
      hasUnreads = hasUnreads.hasUnreads;
      importDefault = closure_10();
      ({ name: c2, emojiId: c3, emojiName: c4 } = tag);
      const tmp = dependencyMap;
      let obj = get_initialized;
      let items = [str];
      let closure_5 = obj.useStateFromStores(items, () => {
        let usableCustomEmojiById = null;
        if (null != c3) {
          usableCustomEmojiById = EmojiStore.getUsableCustomEmojiById(tmp);
        }
        return usableCustomEmojiById;
      });
      str = "text-muted";
      if (hasUnreads) {
        str = "text-default";
      }
      let obj2 = {
        tagId: tag.id,
        children(ref) {
          let emojiURL;
          let intl;
          let items;
          let items1;
          let obj2;
          const merged = Object.assign(ref, Object.assign({ ref: 0 }));
          const obj = {
            style: items,
            accessible: true,
            accessibilityLabel: intl.formatToPlainString(intl2.t.tXXD6v, obj2),
            ref: ref.ref,
            children: items1,
          };
          items = [container.container, _require];
          intl = intl2.intl;
          obj2 = { tagName };
          const merged1 = Object.assign(merged);
          str = c4;
          let tmp11Result = null != c4 || null != c3;
          if (tmp11Result) {
            const obj4 = { textEmojiStyle: null, fastImageStyle: null, src: emojiURL, name: str };
            ({ textEmoji: obj3.textEmojiStyle, emoji: obj3.fastImageStyle } = container);
            emojiURL = undefined;
            const tmp13 = EmojiDefault;
            if (null != closure_5) {
              const obj6 = { id: null, animated: null, size: EMOJI_URL_BASE_SIZE };
              ({ id: obj5.id, animated: obj5.animated } = closure_5);
              const tmp12Result = AvatarUtilsDefault;
              emojiURL = tmp12Result.getEmojiURL(obj6);
            }
            if (str == null) {
              str = "";
            }
            tmp11Result = metroImportAll(tmp13, obj4);
          }
          items1 = [tmp11Result];
          const obj10 = {
            lineClamp: 1,
            style: container.tagName,
            variant: "text-xs/semibold",
            color: str,
            children: tagName,
          };
          items1[1] = metroImportAll(Text_Text.Text, obj10);
          return React4(View, obj);
        },
      };
      return closure_8(ForumTagContextMenuDefault, obj2);
    };
let closure_11 = tmp5;
const result = size.fileFinishedImporting("modules/forums/native/AppliedForumTag.tsx");

export const AppliedForumTagPill = tmp4;
export const AppliedForumTag = tmp5;
