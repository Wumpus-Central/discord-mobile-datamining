// discord_app/modules/guild_tag/native/GuildTag.tsx
import react2 from "../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import intl2 from "../../../intl/index.native.tsx";
import asyncRequire from "../../../../_runtime/01987_asyncRequire.js";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import GuildTagConstants from "../GuildTagConstants.tsx";
import GuildTagUtils from "../GuildTagUtils.tsx";
import react from "../../../../_runtime/00019_react.js";
import react_native from "../../../../_runtime/00017_react-native.js";
import UserStore from "../../../stores/UserStore.tsx";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../design/components/Styles/native/createStyles.tsx";
import PlatformUtils_mod from "../../../utils/PlatformUtils.tsx";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let guildBadge, primaryGuild;

let c10;
let c9;
let closure_4;
let hasOwnProperty;
let metroImportAll;
let obj2;
let obj3;
let str;
({ Image: closure_4, View: hasOwnProperty } = react_native);
const GuildTagBadgeSize = GuildTagConstants.GuildTagBadgeSize;
({ jsx: metroImportAll, Fragment: c9, jsxs: c10 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, tag: obj3 };
obj2 = {
  flexDirection: "row",
  alignItems: "center",
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG,
  borderRadius: 4,
  paddingHorizontal: 4,
  paddingVertical: 1,
  columnGap: 2,
};
createStyles = createStyles.createStyles;
let PlatformUtils = PlatformUtils_mod;
let num = 16;
if (PlatformUtils.isAndroid()) {
  num = 14;
}
obj3 = { lineHeight: num, textAlignVertical: str, overflow: "hidden" };
PlatformUtils = PlatformUtils_mod;
str = undefined;
if (PlatformUtils.isAndroid()) {
  str = "center";
}
let closure_11 = createStyles(obj);
const memo = react.memo;
let ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (arg0) => {
        let source;
        const obj = react2;
        const cResult = obj.c(6);
        ({ source, size } = arg0);
        if (undefined === size) {
          size = GuildTagBadgeSize.SIZE_12;
        }
        let tmp5 = null;
        if (null != source) {
          let first;
          let tmp9;
          const _Symbol = Symbol;
          if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
            const intl = intl2.intl;
            const stringResult = intl.string(intl2.t.HHYPgJ);
            cResult[0] = stringResult;
            first = stringResult;
          } else {
            first = cResult[0];
          }
          if (cResult[1] !== size) {
            const size1 = { width: size, height: size };
            cResult[1] = size;
            cResult[2] = size1;
            tmp9 = size1;
          } else {
            tmp9 = cResult[2];
          }
          if (cResult[3] === source) {
            let tmp10;
            if (cResult[4] === tmp9) {
              tmp10 = cResult[5];
            }
            tmp5 = tmp10;
          }
          const obj2 = { source, alt: first, style: tmp9 };
          const tmp13 = metroImportAll(React3, obj2);
          cResult[3] = source;
          cResult[4] = tmp9;
          cResult[5] = tmp13;
          tmp10 = tmp13;
        }
        return tmp5;
      }
    : (arg0) => {
        let intl;
        let size1;
        let source;
        ({ source, size } = arg0);
        if (size === undefined) {
          size = GuildTagBadgeSize.SIZE_12;
        }
        let tmp2 = null;
        if (null != source) {
          const obj = { source, alt: intl.string(intl2.t.HHYPgJ), style: size1 };
          intl = intl2.intl;
          size1 = { width: size, height: size };
          tmp2 = metroImportAll(React3, obj);
        }
        return tmp2;
      },
);
const memo2 = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
const memo2Result = memo2(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (guildBadge) => {
        let containerStyles;
        let disabled;
        let guildTag;
        let items;
        let items1;
        let obj3;
        let onPress;
        let textColor;
        let textStyle;
        let textVariant;
        let obj = guildTag(textStyle[9]);
        const cResult = obj.c(14);
        ({ containerStyles, guildTag } = guildBadge);
        guildBadge = guildBadge.guildBadge;
        ({ onPress, disabled, textVariant, textColor, textStyle } = guildBadge);
        let SIZE_12 = guildBadge.badgeSize;
        let tmp4 = undefined !== disabled && disabled;
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
        const tmp6 = closure_11();
        const tag = tmp6;
        if (cResult[0] === SIZE_12) {
          if (cResult[1] === guildBadge) {
            if (cResult[2] === guildTag) {
              if (cResult[3] === tmp6.tag) {
                if (cResult[4] === str2) {
                  if (cResult[5] === textStyle) {
                    let tmp7;
                    let tmp12;
                    if (cResult[6] === str) {
                      tmp7 = cResult[7];
                    }
                    if (cResult[8] === containerStyles) {
                      if (cResult[9] === tmp4) {
                        if (cResult[10] === onPress) {
                          if (cResult[11] === tmp7) {
                            let tmp8;
                            if (cResult[12] === tmp6.container) {
                              tmp8 = cResult[13];
                            }
                            return tmp8;
                          }
                        }
                      }
                    }
                    if (null != onPress) {
                      let obj2 = {
                        onPress,
                        style: items,
                        disabled: tmp4,
                        accessibilityRole: "button",
                        accessibilityState: obj3,
                        children: tmp7(),
                      };
                      items = [tmp6.container, containerStyles];
                      obj3 = { disabled: tmp4 };
                      const PressableHighlight = guildTag(textStyle[12]).PressableHighlight;
                      tmp12 = closure_8(PressableHighlight, obj2);
                    } else {
                      let obj4 = { style: items1, children: tmp7() };
                      items1 = [tmp6.container, containerStyles];
                      tmp12 = closure_8(SIZE_12, obj4);
                    }
                    cResult[8] = containerStyles;
                    cResult[9] = tmp4;
                    cResult[10] = onPress;
                    cResult[11] = tmp7;
                    cResult[12] = tmp6.container;
                    cResult[13] = tmp12;
                    tmp8 = tmp12;
                  }
                }
              }
            }
          }
        }
        const fn = function l() {
          let items;
          let items1;
          let obj3;
          let tmp4 = guildBadge;
          if (null != guildBadge) {
            tmp4 = guildBadge;
            if (typeof guildBadge === "string") {
              const obj2 = { source: obj3, size: SIZE_12 };
              obj3 = { uri: guildBadge };
              tmp4 = metroImportAll(memoResult, obj2);
            }
          }
          const obj = { children: items };
          items = [tmp4];
          const obj4 = {
            variant: str,
            color: str2,
            lineClamp: 1,
            ellipsizeMode: "tail",
            style: items1,
            children: guildTag,
          };
          items1 = [tag.tag, textStyle];
          items[1] = metroImportAll(Text_Text.Text, obj4);
          return authStore(React4, obj);
        };
        cResult[0] = SIZE_12;
        cResult[1] = guildBadge;
        cResult[2] = guildTag;
        cResult[3] = tmp6.tag;
        cResult[4] = str2;
        cResult[5] = textStyle;
        cResult[6] = str;
        cResult[7] = fn;
        tmp7 = fn;
      }
    : (textVariant) => {
        let badgeSize;
        let children;
        let closure_4;
        let containerStyles;
        let disabled;
        let items;
        let items1;
        let obj3;
        let onPress;
        let tmp5;
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
          let items;
          let items1;
          let obj3;
          let tmp4 = importDefault;
          if (null != importDefault) {
            tmp4 = importDefault;
            if (typeof importDefault === "string") {
              const obj2 = { source: obj3, size: badgeSize };
              obj3 = { uri: importDefault };
              tmp4 = metroImportAll(memoResult, obj2);
            }
          }
          const obj = { children: items };
          items = [tmp4];
          const obj4 = {
            variant: str,
            color: str2,
            lineClamp: 1,
            ellipsizeMode: "tail",
            style: items1,
            children: require,
          };
          items1 = [tag.tag, closure_4];
          items[1] = metroImportAll(Text_Text.Text, obj4);
          return authStore(React4, obj);
        }
        const tmp2 = closure_11();
        const tag = tmp2;
        if (null != onPress) {
          let obj2 = {
            onPress,
            style: items,
            disabled,
            accessibilityRole: "button",
            accessibilityState: obj3,
            children: renderContent(),
          };
          items = [tmp2.container, containerStyles];
          obj3 = { disabled };
          const PressableHighlight = require("Pressables").PressableHighlight;
          tmp5 = closure_8(PressableHighlight, obj2);
        } else {
          let tmp4 = badgeSize;
          let obj = { style: items1, children: renderContent() };
          items1 = [tmp2.container, containerStyles];
          tmp5 = closure_8(badgeSize, obj);
        }
        return tmp5;
      },
);
const memoResult1 = react.memo((primaryGuild) => {
  let guildId;
  let tag;
  let tmp13;
  let tmp3Result;
  let tmp6;
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
  const merged = Object.assign(
    primaryGuild,
    Object.assign({ primaryGuild: 0, userId: 0, disabledTooltip: 0, badgeSize: 0 }),
  );
  guildId = undefined;
  const tmp4 = guildId;
  let obj = primaryGuild(guildId[13]);
  const items = [UserStore];
  const items1 = [userId, primaryGuild];
  const stateFromStoresObject = obj.useStateFromStoresObject(
    items,
    () => {
      const user = UserStore.getUser(userId);
      primaryGuild = undefined;
      if (user != null) {
        primaryGuild = user.primaryGuild;
      }
      const obj = GuildTagUtils;
      const userPrimaryGuild = obj.getUserPrimaryGuild(primaryGuild);
      return { tag: userPrimaryGuild.tag, badge: userPrimaryGuild.badge, guildId: userPrimaryGuild.guildId };
    },
    items1,
  );
  ({ tag, guildId } = stateFromStoresObject);
  [][0] = guildId;
  const badge = stateFromStoresObject.badge;
  let tmp8Result = null;
  const tmp3 = primaryGuild;
  if (null != guildId) {
    tmp8Result = null;
    if (null != tag) {
      const obj2 = {
        guildTag: tag,
        guildBadge: tmp3Result.getGuildTagBadgeUrl(guildId, badge, SIZE_12),
        badgeSize: SIZE_12,
        onPress: tmp13,
      };
      tmp3Result = tmp3(tmp4[14]);
      const merged1 = Object.assign(merged);
      tmp13 = undefined;
      if (!flag) {
        tmp13 = tmp6;
      }
      tmp8Result = closure_8(closure_13, obj2);
    }
  }
  return tmp8Result;
});
let size = size_mod;
const result = size.fileFinishedImporting("modules/guild_tag/native/GuildTag.tsx");

export default memoResult1;
export const GuildTagBadge = memoResult;
export const BaseGuildTagChiplet = memo2Result;
