// discord_app/modules/conjure/chat/native/ConjureMessageAuthor.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import _modDef3827 from "../../intl/ConjureUntranslated.messages.js";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import Pressables from "../../../../design/void/Pressables/native/Pressables.tsx";
import AppsIcon from "../../../../design/components/Icon/native/redesign/generated/AppsIcon.tsx";
import conjureMessageAuthors from "../conjureMessageAuthors.tsx";
import ConjureMessageTime from "../ConjureMessageTime.tsx";
import ConjureMessageActionSheet from "ConjureMessageActionSheet.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import UserStore from "../../../../stores/UserStore.tsx";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(5091);
let obj2 = {
  header: { flexDirection: "row", alignItems: "baseline", gap: nativeDefault.space.PX_8 },
  name: { flexShrink: 1 },
  time: { flexShrink: 0 },
  conjureTile: null,
};
let size = {
  width: fn(17063).MESSAGE_AVATAR_SIZE,
  height: fn(17063).MESSAGE_AVATAR_SIZE,
  borderRadius: nativeDefault.radii.sm,
  borderWidth: 1,
  borderColor: nativeDefault.colors.BORDER_MUTED,
  backgroundColor: nativeDefault.colors.BACKGROUND_CODE,
  alignItems: "center",
  justifyContent: "center",
};
obj2.conjureTile = size;
let closure_8 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useMessageAuthorUser(arg0) {
      _require = arg0;
      const cResult = require("c").c(7);
      if (cResult[0] !== arg0) {
        const fn = function l() {
          return conjureMessageAuthors.requestMessageAuthor(closure_0);
        };
        const items = [arg0];
        cResult[0] = arg0;
        cResult[1] = fn;
        cResult[2] = items;
        let tmp5 = items;
        let tmp4 = fn;
      } else {
        tmp4 = cResult[1];
        tmp5 = cResult[2];
      }
      const effect = noop.useEffect(tmp4, tmp5);
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [UserStore];
        cResult[3] = items1;
        let tmp7 = items1;
      } else {
        tmp7 = cResult[3];
      }
      if (cResult[4] !== arg0) {
        const fn2 = function c() {
          let user = null;
          if (null != closure_0) {
            user = UserStore.getUser(closure_0);
          }
          return conjureMessageAuthors.resolveMessageAuthor(closure_0, user, UserStore.getCurrentUser());
        };
        const items2 = [arg0];
        cResult[4] = arg0;
        cResult[5] = fn2;
        cResult[6] = items2;
        let tmp10 = items2;
        let tmp9 = fn2;
      } else {
        tmp9 = cResult[5];
        tmp10 = cResult[6];
      }
      const obj = require("c");
      return require("initialize").useStateFromStores(tmp7, tmp9, tmp10);
    }
  : function useMessageAuthorUser(arg0) {
      _require = arg0;
      const items = [arg0];
      const effect = noop.useEffect(() => conjureMessageAuthors.requestMessageAuthor(closure_0), items);
      const items1 = [UserStore];
      const items2 = [arg0];
      return require("initialize").useStateFromStores(
        items1,
        () => {
          let user = null;
          if (null != closure_0) {
            user = UserStore.getUser(closure_0);
          }
          return conjureMessageAuthors.resolveMessageAuthor(closure_0, user, UserStore.getCurrentUser());
        },
        items2,
      );
    };
let closure_9 = tmp3;
ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ConjureMessageHeader(arg0) {
      const cResult = c.c(18);
      ({ name, color, at, onPressName } = arg0);
      const tmp4 = closure_8();
      if (cResult[0] !== at) {
        const describeMessageTimeResult = ConjureMessageTime.describeMessageTime(at);
        cResult[0] = at;
        cResult[1] = describeMessageTimeResult;
        let tmp5 = describeMessageTimeResult;
        const tmpResult = ConjureMessageTime;
      } else {
        tmp5 = cResult[1];
      }
      if (cResult[2] === color) {
        if (cResult[3] === name) {
          if (cResult[4] === tmp4.name) {
            let tmp7 = cResult[5];
          }
          if (cResult[6] === name) {
            if (cResult[7] === tmp7) {
              if (cResult[8] === onPressName) {
                if (cResult[9] === tmp4.name) {
                  let tmp9 = cResult[10];
                }
                if (cResult[11] === tmp4.time) {
                  if (cResult[12] === tmp5) {
                    let tmp13 = cResult[13];
                  }
                  if (cResult[14] === tmp4.header) {
                    if (cResult[15] === tmp9) {
                      if (cResult[16] === tmp13) {
                        let tmp16 = cResult[17];
                      }
                      return tmp16;
                    }
                  }
                  const obj2 = { style: tmp4.header, children: null };
                  const items = [tmp9, tmp13];
                  obj2.children = items;
                  const tmp19 = React5(View, obj2);
                  cResult[14] = tmp4.header;
                  cResult[15] = tmp9;
                  cResult[16] = tmp13;
                  cResult[17] = tmp19;
                  tmp16 = tmp19;
                }
                let tmp14 = null;
                if (null != tmp5) {
                  const obj3 = { variant: "text-xs/medium", color: "text-muted", style: tmp4.time, children: tmp5 };
                  tmp14 = timestampProducer(Text_Text.Text, obj3);
                }
                cResult[11] = tmp4.time;
                cResult[12] = tmp5;
                cResult[13] = tmp14;
                tmp13 = tmp14;
              }
            }
          }
          let tmp11 = tmp7;
          if (null != onPressName) {
            const obj4 = {
              style: tmp4.name,
              onPress: onPressName,
              onLongPress: onPressName,
              accessibilityRole: "button",
              accessibilityLabel: null,
              children: null,
            };
            const intl = util.intl;
            const obj5 = { username: name };
            obj4.accessibilityLabel = intl.formatToPlainString(util.t.uCenkh, obj5);
            obj4.children = tmp7;
            tmp11 = timestampProducer(Pressables.PressableOpacity, obj4);
          }
          cResult[6] = name;
          cResult[7] = tmp7;
          cResult[8] = onPressName;
          cResult[9] = tmp4.name;
          cResult[10] = tmp11;
          tmp9 = tmp11;
        }
      }
      const tmp8 = timestampProducer(Text_Text.Text, {
        variant: "text-md/semibold",
        color,
        style: tmp4.name,
        lineClamp: 1,
        children: name,
      });
      cResult[2] = color;
      cResult[3] = name;
      cResult[4] = tmp4.name;
      cResult[5] = tmp8;
      tmp7 = tmp8;
      const obj6 = { variant: "text-md/semibold", color, style: tmp4.name, lineClamp: 1, children: name };
    }
  : function ConjureMessageHeader(arg0) {
      ({ name, onPressName } = arg0);
      ({ color, at } = arg0);
      const tmp = closure_8();
      const describeMessageTimeResult = ConjureMessageTime.describeMessageTime(at);
      const tmp6 = timestampProducer(Text_Text.Text, {
        variant: "text-md/semibold",
        color,
        style: tmp.name,
        lineClamp: 1,
        children: name,
      });
      const obj3 = { style: tmp.header, children: null };
      let tmp5Result = tmp6;
      if (null != onPressName) {
        const obj4 = {
          style: tmp.name,
          onPress: onPressName,
          onLongPress: onPressName,
          accessibilityRole: "button",
          accessibilityLabel: null,
          children: null,
        };
        const intl = util.intl;
        const obj5 = { username: name };
        obj4.accessibilityLabel = intl.formatToPlainString(util.t.uCenkh, obj5);
        obj4.children = tmp6;
        tmp5Result = timestampProducer(Pressables.PressableOpacity, obj4);
      }
      const items = [tmp5Result];
      let tmp5Result2 = null;
      if (null != describeMessageTimeResult) {
        const obj6 = {
          variant: "text-xs/medium",
          color: "text-muted",
          style: tmp.time,
          children: describeMessageTimeResult,
        };
        tmp5Result2 = timestampProducer(Text_Text.Text, obj6);
      }
      items[1] = tmp5Result2;
      obj3.children = items;
      return React5(View, obj3);
    };
let closure_10 = tmp4;
fn(558);
let obj3 = { flexDirection: "row", alignItems: "baseline", gap: nativeDefault.space.PX_8 };
ReactCompilerGating = fn(558);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ConjureUserHeader(userId) {
      const cResult = require("c").c(6);
      const at = userId.at;
      const tmp2 = closure_9(userId.userId);
      _require = tmp2;
      let obj = require("c");
      const name = require("UserUtils").useName(tmp2);
      if (cResult[0] !== tmp2) {
        const fn = function t() {
          if (null != closure_0) {
            const result = ConjureMessageActionSheet.openMessageAuthorProfile(tmp.id);
          }
        };
        cResult[0] = tmp2;
        cResult[1] = fn;
        let tmp4 = fn;
      } else {
        tmp4 = cResult[1];
      }
      let tmp5 = null;
      if (null != tmp2) {
        tmp5 = null;
        if (null != name) {
          if (cResult[2] === at) {
            if (cResult[3] === tmp4) {
            }
          }
          const obj3 = { name, color: "text-default", at, onPressName: tmp4 };
          const tmp9 = closure_6(closure_10, obj3);
          cResult[2] = at;
          cResult[3] = tmp4;
          cResult[4] = name;
          cResult[5] = tmp9;
        }
      }
      return tmp5;
    }
  : function ConjureUserHeader(userId) {
      const tmp = closure_9(userId.userId);
      _require = tmp;
      const name = require("UserUtils").useName(tmp);
      [][0] = tmp;
      let tmp4 = null;
      if (null != tmp) {
        tmp4 = null;
        if (null != name) {
          const obj2 = { name, color: "text-default", at: userId.at, onPressName: tmp3 };
          tmp4 = closure_6(closure_10, obj2);
        }
      }
      return tmp4;
    };
ReactCompilerGating = fn(558);
let tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ConjureHeader(arg0) {
      const cResult = c.c(3);
      const at = arg0.at;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = util.intl;
        const stringResult = intl.string(_modDef3827.uk6jhJ);
        cResult[0] = stringResult;
        let first = stringResult;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== at) {
        const obj2 = { name: first, color: "text-brand", at };
        const tmp10 = timestampProducer(closure_10, obj2);
        cResult[1] = at;
        cResult[2] = tmp10;
        let tmp7 = tmp10;
      } else {
        tmp7 = cResult[2];
      }
      return tmp7;
    }
  : function ConjureHeader(arg0) {
      const obj = { name: null, color: "text-brand", at: null };
      const intl = util.intl;
      obj.name = intl.string(_modDef3827.uk6jhJ);
      obj.at = arg0.at;
      return timestampProducer(closure_10, obj);
    };
ReactCompilerGating = fn(558);
let tmp7 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ConjureUserAvatar(arg0) {
      let PressableOpacity = _require;
      let tmp = dependencyMap;
      const cResult = require("c").c(9);
      ({ size, userId } = arg0);
      if (undefined === size) {
        size = PressableOpacity(1200).AvatarSizes.NORMAL;
      }
      const tmp3 = closure_9(userId);
      _require = tmp3;
      if (cResult[0] !== tmp3) {
        const fn = function t() {
          if (null != closure_0) {
            const result = ConjureMessageActionSheet.openMessageAuthorProfile(tmp.id);
          }
        };
        cResult[0] = tmp3;
        cResult[1] = fn;
        let tmp4 = fn;
      } else {
        tmp4 = cResult[1];
      }
      if (null == tmp3) {
        return null;
      } else {
        const _Symbol = Symbol;
        if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = PressableOpacity(1126).intl;
          const stringResult = intl.string(PressableOpacity(1126).t.iXAna6);
          cResult[2] = stringResult;
          let tmp6 = stringResult;
        } else {
          tmp6 = cResult[2];
        }
        if (cResult[3] === size) {
          if (cResult[4] === tmp3) {
            let tmp8 = cResult[5];
          }
          if (cResult[6] === tmp4) {
          }
          PressableOpacity = PressableOpacity(6191).PressableOpacity;
          const obj2 = {
            onPress: tmp4,
            onLongPress: tmp4,
            accessibilityRole: "button",
            accessibilityLabel: tmp6,
            children: tmp8,
          };
          tmp = closure_6(PressableOpacity, obj2);
          cResult[6] = tmp4;
          cResult[7] = tmp8;
          cResult[8] = tmp;
        }
        const obj3 = { size, user: tmp3, guildId: "r" };
        const tmp10 = closure_6(PressableOpacity(1200).Avatar, obj3);
        cResult[3] = size;
        cResult[4] = tmp3;
        cResult[5] = tmp10;
        tmp8 = tmp10;
      }
      let obj = require("c");
    }
  : function ConjureUserAvatar(size) {
      let NORMAL = size.size;
      if (NORMAL === undefined) {
        NORMAL = require("native").AvatarSizes.NORMAL;
      }
      const tmp3 = closure_9(size.userId);
      _require = tmp3;
      const items = [tmp3];
      const callback = noop.useCallback(() => {
        if (null != closure_0) {
          const result = ConjureMessageActionSheet.openMessageAuthorProfile(tmp.id);
        }
      }, items);
      let tmp5 = null;
      if (null != tmp3) {
        let obj = {
          onPress: callback,
          onLongPress: callback,
          accessibilityRole: "button",
          accessibilityLabel: null,
          children: null,
        };
        const intl = require("util").intl;
        obj.accessibilityLabel = intl.string(require("util").t.iXAna6);
        const obj2 = { size: NORMAL, user: tmp3, guildId: "r" };
        obj.children = closure_6(require("native").Avatar, obj2);
        tmp5 = closure_6(require("Pressables").PressableOpacity, obj);
      }
      return tmp5;
    };
size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/chat/native/ConjureMessageAuthor.tsx");

export const useMessageAuthorUser = tmp3;
export const ConjureMessageHeader = tmp4;
export const ConjureUserHeader = tmp5;
export const ConjureHeader = tmp6;
export const ConjureUserAvatar = tmp7;
export const ConjureAvatar = ReactCompilerGating.isReactCompilerEnabled()
  ? function ConjureAvatar() {
      const cResult = c.c(3);
      const tmp4 = closure_8();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { size: "sm", color: nativeDefault.colors.TEXT_BRAND };
        const tmp8 = timestampProducer(AppsIcon.AppsIcon, obj2);
        cResult[0] = tmp8;
        let first = tmp8;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== tmp4.conjureTile) {
        const obj3 = { style: tmp4.conjureTile, children: first };
        const tmp12 = timestampProducer(View, obj3);
        cResult[1] = tmp4.conjureTile;
        cResult[2] = tmp12;
        let tmp9 = tmp12;
      } else {
        tmp9 = cResult[2];
      }
      return tmp9;
    }
  : function ConjureAvatar() {
      const obj = {
        style: closure_8().conjureTile,
        children: timestampProducer(AppsIcon.AppsIcon, { size: "sm", color: nativeDefault.colors.TEXT_BRAND }),
      };
      return timestampProducer(View, obj);
    };
