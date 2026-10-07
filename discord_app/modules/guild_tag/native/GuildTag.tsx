// === Module 9409: GuildTag ===

// Module 9409 (GuildTag)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1987 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4860 */;
import Text_Text from "Text/Text" /* 4892 */;
import GuildTagUtils from "GuildTagUtils" /* 7847 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1377 */;

require = fn;
get_ActivityIndicator = fn(17);
({ Image: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const GuildTagBadgeSize = fn(7614).GuildTagBadgeSize;
const jsxProd = fn(21);
({ jsx: closure_8, Fragment: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4896);
let obj = { container: { flexDirection: "row", alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG, borderRadius: 4, paddingHorizontal: 4, paddingVertical: 1, columnGap: 2 }, tag: null };
let PlatformUtils = fn(1369);
let num = 16;
if (PlatformUtils.isAndroid()) {
  num = 14;
}
let obj4 = { lineHeight: num, textAlignVertical: null, overflow: "hidden" };
PlatformUtils = fn(1369);
let str;
if (PlatformUtils.isAndroid()) {
  str = "center";
}
obj4.textAlignVertical = str;
obj.tag = obj4;
let closure_11 = createStyles.createStyles(obj);
let ReactCompilerGating = fn(558);
const memoResult = noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(6);
  ({ source, size } = arg0);
  if (undefined === size) {
    size = GuildTagBadgeSize.SIZE_12;
  }
  if (null == source) {
    return null;
  } else {
    const _Symbol = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = util.intl;
      const stringResult = intl.string(util.t.HHYPgJ);
      cResult[0] = stringResult;
      let first = stringResult;
    } else {
      first = cResult[0];
    }
    if (cResult[1] !== size) {
      const size1 = { width: size, height: size };
      cResult[1] = size;
      cResult[2] = size1;
      let tmp8 = size1;
    } else {
      tmp8 = cResult[2];
    }
    if (cResult[3] === source) {
    }
    const obj2 = { source, alt: first, style: tmp8 };
    const tmp12 = closure_1_8(React4, obj2);
    cResult[3] = source;
    cResult[4] = tmp8;
    cResult[5] = tmp12;
  }
}) : ((arg0) => {
  ({ source, size } = arg0);
  if (size === undefined) {
    size = GuildTagBadgeSize.SIZE_12;
  }
  let tmp2 = null;
  if (null != source) {
    const obj = { source, alt: null, style: null };
    const intl = util.intl;
    obj.alt = intl.string(util.t.HHYPgJ);
    const size1 = { width: size, height: size };
    obj.style = size1;
    tmp2 = closure_1_8(React4, obj);
  }
  return tmp2;
}));
ReactCompilerGating = fn(558);
const memoResult1 = noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((guildBadge) => {
  let PressableHighlight = guildTag;
  let obj = textStyle;
  const cResult = guildTag(textStyle[9]).c(14);
  ({ containerStyles, guildTag } = guildBadge);
  guildBadge = guildBadge.guildBadge;
  ({ onPress, disabled, textVariant, textColor, textStyle } = guildBadge);
  let SIZE_12 = guildBadge.badgeSize;
  let str = "text-xs/semibold";
  if (undefined !== textVariant) {
    str = textVariant;
  }
  let str2 = "text-default";
  if (undefined !== textColor) {
    str2 = textColor;
  }
  if (undefined === SIZE_12) {
    SIZE_12 = GuildTagBadgeSize.SIZE_12;
  }
  let container = closure_11();
  if (cResult[0] === SIZE_12) {
    if (cResult[1] === guildBadge) {
      if (cResult[2] === guildTag) {
        if (cResult[3] === container.tag) {
          if (cResult[4] === str2) {
            if (cResult[5] === textStyle) {
              if (cResult[6] === str) {
                let tmp4 = cResult[7];
              }
              if (cResult[8] === containerStyles) {
                if (cResult[9] === tmp2) {
                  if (cResult[10] === onPress) {
                    if (cResult[11] === tmp4) {
                      if (cResult[12] === container.container) {
                        return cResult[13];
                      }
                    }
                  }
                }
              }
              if (null != onPress) {
                PressableHighlight = PressableHighlight(obj[12]).PressableHighlight;
                obj = { onPress, style: null, disabled: null, accessibilityRole: "button", accessibilityState: null, children: null };
                let items = [container.container, containerStyles];
                obj.style = items;
                obj.disabled = tmp2;
                let obj3 = { disabled: tmp2 };
                obj.accessibilityState = obj3;
                obj.children = tmp4();
                let tmp8 = closure_8(PressableHighlight, obj);
              } else {
                let obj4 = { style: null, children: null };
                let items1 = [container.container, containerStyles];
                obj4.style = items1;
                obj4.children = tmp4();
                tmp8 = closure_8(SIZE_12, obj4);
              }
              cResult[8] = containerStyles;
              cResult[9] = tmp2;
              cResult[10] = onPress;
              cResult[11] = tmp4;
              container = container.container;
              cResult[12] = container;
              cResult[13] = tmp8;
            }
          }
        }
      }
    }
  }
  const fn = function l() {
    let tmp4 = guildBadge;
    if (null != guildBadge) {
      tmp4 = guildBadge;
      if (typeof guildBadge === "string") {
        const obj2 = { source: null, size: null };
        const obj3 = { uri: guildBadge };
        obj2.source = obj3;
        obj2.size = SIZE_12;
        tmp4 = closure_2_8(memoResult, obj2);
      }
    }
    const obj = { children: null };
    const items = [tmp4, ];
    const obj4 = { variant: str, color: str2, lineClamp: 1, ellipsizeMode: "tail", style: null, children: guildTag };
    const items1 = [container.tag, textStyle];
    obj4.style = items1;
    items[1] = closure_2_8(Text_Text.Text, obj4);
    obj.children = items;
    return v65535(options, obj);
  };
  cResult[0] = SIZE_12;
  cResult[1] = guildBadge;
  cResult[2] = guildTag;
  cResult[3] = container.tag;
  cResult[4] = str2;
  cResult[5] = textStyle;
  cResult[6] = str;
  cResult[7] = fn;
  tmp4 = fn;
  let obj2 = guildTag(textStyle[9]);
}) : ((textVariant) => {
  ({ containerStyles, guildTag: require, guildBadge: importDefault, onPress, disabled } = textVariant);
  if (disabled === undefined) {
    disabled = false;
  }
  let str = textVariant.textVariant;
  if (str === undefined) {
    str = "text-xs/semibold";
  }
  let str2 = textVariant.textColor;
  if (str2 === undefined) {
    str2 = "text-default";
  }
  ({ textStyle: closure_4, badgeSize } = textVariant);
  if (badgeSize === undefined) {
    badgeSize = GuildTagBadgeSize.SIZE_12;
  }
  function renderContent() {
    let tmp4 = importDefault;
    if (null != importDefault) {
      tmp4 = importDefault;
      if (typeof importDefault === "string") {
        const obj2 = { source: null, size: null };
        const obj3 = { uri: importDefault };
        obj2.source = obj3;
        obj2.size = badgeSize;
        tmp4 = closure_2_8(memoResult, obj2);
      }
    }
    const obj = { children: null };
    const items = [tmp4, ];
    const obj4 = { variant: str, color: str2, lineClamp: 1, ellipsizeMode: "tail", style: null, children };
    const items1 = [tag.tag, closure_1_4];
    obj4.style = items1;
    items[1] = closure_2_8(Text_Text.Text, obj4);
    obj.children = items;
    return v65535(options, obj);
  }
  const tmp2 = closure_11();
  const tag = tmp2;
  if (null != onPress) {
    let obj2 = { onPress, style: null, disabled: null, accessibilityRole: "button", accessibilityState: null, children: null };
    let items = [tmp2.container, containerStyles];
    obj2.style = items;
    obj2.disabled = disabled;
    let obj3 = { disabled };
    obj2.accessibilityState = obj3;
    obj2.children = renderContent();
    let tmp5 = closure_8(require("Pressables").PressableHighlight, obj2);
  } else {
    let obj = { style: null, children: null };
    let items1 = [tmp2.container, containerStyles];
    obj.style = items1;
    obj.children = renderContent();
    tmp5 = closure_8(badgeSize, obj);
  }
  return tmp5;
}));
let obj3 = { flexDirection: "row", alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG, borderRadius: 4, paddingHorizontal: 4, paddingVertical: 1, columnGap: 2 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_tag/native/GuildTag.tsx");

export default noop.memo((primaryGuild) => {
  primaryGuild = primaryGuild.primaryGuild;
  const userId = primaryGuild.userId;
  let flag = primaryGuild.disabledTooltip;
  if (flag === undefined) {
    flag = false;
  }
  let SIZE_12 = primaryGuild.badgeSize;
  if (SIZE_12 === undefined) {
    SIZE_12 = GuildTagBadgeSize.SIZE_12;
  }
  const merged = Object.assign(primaryGuild, Object.assign({ primaryGuild: 0, userId: 0, disabledTooltip: 0, badgeSize: 0 }));
  guildId = undefined;
  const items = [UserStore];
  const items1 = [userId, primaryGuild];
  const stateFromStoresObject = primaryGuild(guildId[13]).useStateFromStoresObject(items, () => {
    const user = UserStore.getUser(userId);
    primaryGuild = undefined;
    if (user != null) {
      primaryGuild = user.primaryGuild;
    }
    const userPrimaryGuild = GuildTagUtils.getUserPrimaryGuild(primaryGuild);
    return { tag: userPrimaryGuild.tag, badge: userPrimaryGuild.badge, guildId: userPrimaryGuild.guildId };
  }, items1);
  ({ tag, guildId } = stateFromStoresObject);
  [][0] = guildId;
  let tmp8Result = null;
  if (null != guildId) {
    tmp8Result = null;
    if (null != tag) {
      let obj2 = { guildTag: tag, guildBadge: primaryGuild(guildId[14]).getGuildTagBadgeUrl(guildId, stateFromStoresObject.badge, SIZE_12), badgeSize: SIZE_12 };
      const merged1 = Object.assign(merged);
      let tmp13;
      if (!flag) {
        tmp13 = tmp6;
      }
      obj2.onPress = tmp13;
      tmp8Result = closure_8(memoResult1, obj2);
      const tmp3Result = primaryGuild(guildId[14]);
    }
  }
  return tmp8Result;
});
export const GuildTagBadge = memoResult;
export const BaseGuildTagChiplet = memoResult1;