// discord_app/modules/conjure/chat/native/ConjureMessageAuthor.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import intl2 from "../../../../intl/index.native.tsx";
import _modDef3753 from "../../intl/ConjureUntranslated.messages.js";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import AppsIcon2 from "../../../../design/components/Icon/native/redesign/generated/AppsIcon.tsx";
import Pressables from "../../../../design/void/Pressables/native/Pressables.tsx";
import ConjureNativeStatusLine from "../../agent_activity/native/ConjureNativeStatusLine.tsx";
import conjureMessageAuthors from "../conjureMessageAuthors.tsx";
import ConjureMessageTime from "../ConjureMessageTime.tsx";
import ConjureMessageActionSheet from "ConjureMessageActionSheet.tsx";
import react from "../../../../../_runtime/00019_react.js";
import UserStore from "../../../../stores/UserStore.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require;

let metroImportDefault;
let metroRequire;
let obj2;
let size;
const View = react_native.View;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { header: obj2, name: { flexShrink: 1 }, time: { flexShrink: 0 }, conjureTile: size };
obj2 = { flexDirection: "row", alignItems: "baseline", gap: nativeDefault.space.PX_8 };
createStyles = createStyles.createStyles;
size = {
  width: ConjureNativeStatusLine.MESSAGE_AVATAR_SIZE,
  height: ConjureNativeStatusLine.MESSAGE_AVATAR_SIZE,
  borderRadius: nativeDefault.radii.sm,
  borderWidth: 1,
  borderColor: nativeDefault.colors.BORDER_MUTED,
  backgroundColor: nativeDefault.colors.BACKGROUND_CODE,
  alignItems: "center",
  justifyContent: "center",
};
let closure_8 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let closure_0;
      let tmp10;
      let tmp4;
      let tmp5;
      let tmp7;
      let tmp9;
      _require = arg0;
      const tmp = _require;
      let obj = require("react");
      const cResult = obj.c(7);
      if (cResult[0] !== arg0) {
        const fn = function s() {
          const obj = conjureMessageAuthors;
          return obj.requestMessageAuthor(closure_0);
        };
        const items = [arg0];
        cResult[0] = arg0;
        cResult[1] = fn;
        cResult[2] = items;
        tmp5 = items;
        tmp4 = fn;
      } else {
        tmp4 = cResult[1];
        tmp5 = cResult[2];
      }
      const effect = react.useEffect(tmp4, tmp5);
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [UserStore];
        cResult[3] = items1;
        tmp7 = items1;
      } else {
        tmp7 = cResult[3];
      }
      if (cResult[4] !== arg0) {
        const fn2 = function c() {
          let user = null;
          const resolveMessageAuthor = conjureMessageAuthors.resolveMessageAuthor;
          conjureMessageAuthors;
          if (null != closure_0) {
            user = UserStore.getUser(closure_0);
          }
          return resolveMessageAuthor(closure_0, user, UserStore.getCurrentUser());
        };
        const items2 = [arg0];
        cResult[4] = arg0;
        cResult[5] = fn2;
        cResult[6] = items2;
        tmp10 = items2;
        tmp9 = fn2;
      } else {
        tmp9 = cResult[5];
        tmp10 = cResult[6];
      }
      const tmpResult = tmp(504);
      return tmpResult.useStateFromStores(tmp7, tmp9, tmp10);
    }
  : (arg0) => {
      let closure_0;
      _require = arg0;
      const items = [arg0];
      const effect = react.useEffect(() => {
        const obj = conjureMessageAuthors;
        return obj.requestMessageAuthor(closure_0);
      }, items);
      let obj = require("get initialized");
      const items1 = [UserStore];
      const items2 = [arg0];
      return obj.useStateFromStores(
        items1,
        () => {
          let user = null;
          const resolveMessageAuthor = conjureMessageAuthors.resolveMessageAuthor;
          conjureMessageAuthors;
          if (null != closure_0) {
            user = UserStore.getUser(closure_0);
          }
          return resolveMessageAuthor(closure_0, user, UserStore.getCurrentUser());
        },
        items2,
      );
    };
let closure_9 = tmp4;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let at;
      let color;
      let intl;
      let items;
      let name;
      let obj5;
      let onPressName;
      let tmp5;
      const obj = react2;
      const cResult = obj.c(18);
      ({ name, color, at, onPressName } = arg0);
      const tmp4 = closure_8();
      if (cResult[0] !== at) {
        const tmpResult = ConjureMessageTime;
        const describeMessageTimeResult = tmpResult.describeMessageTime(at);
        cResult[0] = at;
        cResult[1] = describeMessageTimeResult;
        tmp5 = describeMessageTimeResult;
      } else {
        tmp5 = cResult[1];
      }
      if (cResult[2] === color) {
        if (cResult[3] === name) {
          let tmp7;
          if (cResult[4] === tmp4.name) {
            tmp7 = cResult[5];
          }
          if (cResult[6] === name) {
            if (cResult[7] === tmp7) {
              if (cResult[8] === onPressName) {
                let tmp9;
                if (cResult[9] === tmp4.name) {
                  tmp9 = cResult[10];
                }
                if (cResult[11] === tmp4.time) {
                  let tmp13;
                  if (cResult[12] === tmp5) {
                    tmp13 = cResult[13];
                  }
                  if (cResult[14] === tmp4.header) {
                    if (cResult[15] === tmp9) {
                      let tmp16;
                      if (cResult[16] === tmp13) {
                        tmp16 = cResult[17];
                      }
                      return tmp16;
                    }
                  }
                  const obj2 = { style: tmp4.header, children: items };
                  items = [tmp9, tmp13];
                  const tmp19 = metroImportDefault(View, obj2);
                  cResult[14] = tmp4.header;
                  cResult[15] = tmp9;
                  cResult[16] = tmp13;
                  cResult[17] = tmp19;
                  tmp16 = tmp19;
                }
                let tmp14 = null;
                if (null != tmp5) {
                  const obj3 = { variant: "text-xs/medium", color: "text-muted", style: tmp4.time, children: tmp5 };
                  tmp14 = metroRequire(Text_Text.Text, obj3);
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
              accessibilityLabel: intl.formatToPlainString(intl2.t.uCenkh, obj5),
              children: tmp7,
            };
            const PressableOpacity = Pressables.PressableOpacity;
            intl = intl2.intl;
            obj5 = { username: name };
            tmp11 = metroRequire(PressableOpacity, obj4);
          }
          cResult[6] = name;
          cResult[7] = tmp7;
          cResult[8] = onPressName;
          cResult[9] = tmp4.name;
          cResult[10] = tmp11;
          tmp9 = tmp11;
        }
      }
      const obj6 = { variant: "text-md/semibold", color, style: tmp4.name, lineClamp: 1, children: name };
      const tmp8 = metroRequire(Text_Text.Text, obj6);
      cResult[2] = color;
      cResult[3] = name;
      cResult[4] = tmp4.name;
      cResult[5] = tmp8;
      tmp7 = tmp8;
    }
  : (arg0) => {
      let at;
      let color;
      let intl;
      let items;
      let name;
      let obj5;
      let onPressName;
      ({ name, onPressName } = arg0);
      ({ color, at } = arg0);
      const tmp = closure_8();
      const obj = ConjureMessageTime;
      const describeMessageTimeResult = obj.describeMessageTime(at);
      const obj2 = { variant: "text-md/semibold", color, style: tmp.name, lineClamp: 1, children: name };
      const tmp6 = metroRequire(Text_Text.Text, obj2);
      let tmp5Result = tmp6;
      const obj3 = { style: tmp.header, children: items };
      if (null != onPressName) {
        const obj4 = {
          style: tmp.name,
          onPress: onPressName,
          onLongPress: onPressName,
          accessibilityRole: "button",
          accessibilityLabel: intl.formatToPlainString(intl2.t.uCenkh, obj5),
          children: tmp6,
        };
        const PressableOpacity = Pressables.PressableOpacity;
        intl = intl2.intl;
        obj5 = { username: name };
        tmp5Result = metroRequire(PressableOpacity, obj4);
      }
      items = [tmp5Result];
      let tmp5Result2 = null;
      if (null != describeMessageTimeResult) {
        const obj6 = {
          variant: "text-xs/medium",
          color: "text-muted",
          style: tmp.time,
          children: describeMessageTimeResult,
        };
        tmp5Result2 = metroRequire(Text_Text.Text, obj6);
      }
      items[1] = tmp5Result2;
      return metroImportDefault(View, obj3);
    };
let closure_10 = tmp5;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? (userId) => {
      let closure_0;
      let tmp4;
      let obj = require("react");
      const cResult = obj.c(6);
      const at = userId.at;
      const tmp2 = closure_9(userId.userId);
      _require = tmp2;
      const obj2 = require("UserUtils");
      const name = obj2.useName(tmp2);
      if (cResult[0] !== tmp2) {
        const fn = function n() {
          if (null != closure_0) {
            const obj = ConjureMessageActionSheet;
            const result = obj.openMessageAuthorProfile(tmp.id);
          }
        };
        cResult[0] = tmp2;
        cResult[1] = fn;
        tmp4 = fn;
      } else {
        tmp4 = cResult[1];
      }
      let tmp5 = null;
      if (null != tmp2) {
        tmp5 = null;
        if (null != name) {
          if (cResult[2] === at) {
            if (cResult[3] === tmp4) {
              let tmp6;
              if (cResult[4] === name) {
                tmp6 = cResult[5];
              }
              tmp5 = tmp6;
            }
          }
          const obj3 = { name, color: "text-default", at, onPressName: tmp4 };
          const tmp9 = closure_6(closure_10, obj3);
          cResult[2] = at;
          cResult[3] = tmp4;
          cResult[4] = name;
          cResult[5] = tmp9;
          tmp6 = tmp9;
        }
      }
      return tmp5;
    }
  : (userId) => {
      let closure_0;
      const at = userId.at;
      const tmp = closure_9(userId.userId);
      _require = tmp;
      let obj = require("UserUtils");
      const name = obj.useName(tmp);
      [][0] = tmp;
      let tmp4 = null;
      if (null != tmp) {
        tmp4 = null;
        if (null != name) {
          const obj2 = { name, color: "text-default", at, onPressName: tmp3 };
          tmp4 = closure_6(closure_10, obj2);
        }
      }
      return tmp4;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp7 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let first;
      let tmp7;
      const obj = react2;
      const cResult = obj.c(3);
      const at = arg0.at;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = intl2.intl;
        const stringResult = intl.string(_modDef3753.uk6jhJ);
        cResult[0] = stringResult;
        first = stringResult;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== at) {
        const obj2 = { name: first, color: "text-brand", at };
        const tmp10 = metroRequire(closure_10, obj2);
        cResult[1] = at;
        cResult[2] = tmp10;
        tmp7 = tmp10;
      } else {
        tmp7 = cResult[2];
      }
      return tmp7;
    }
  : (arg0) => {
      let at;
      let intl;
      const obj = { name: intl.string(_modDef3753.uk6jhJ), color: "text-brand", at };
      at = arg0.at;
      intl = intl2.intl;
      return metroRequire(closure_10, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp8 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let closure_0;
      let tmp5;
      let userId;
      const tmp = _require;
      let obj = require("react");
      const cResult = obj.c(9);
      ({ size, userId } = arg0);
      if (undefined === size) {
        size = tmp(1188).AvatarSizes.NORMAL;
      }
      const tmp4 = closure_9(userId);
      _require = tmp4;
      if (cResult[0] !== tmp4) {
        const fn = function n() {
          if (null != closure_0) {
            const obj = ConjureMessageActionSheet;
            const result = obj.openMessageAuthorProfile(tmp.id);
          }
        };
        cResult[0] = tmp4;
        cResult[1] = fn;
        tmp5 = fn;
      } else {
        tmp5 = cResult[1];
      }
      let tmp6 = null;
      if (null != tmp4) {
        let tmp8;
        const _Symbol = Symbol;
        if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = tmp(1126).intl;
          const stringResult = intl.string(tmp(1126).t.iXAna6);
          cResult[2] = stringResult;
          tmp8 = stringResult;
        } else {
          tmp8 = cResult[2];
        }
        if (cResult[3] === size) {
          let tmp10;
          if (cResult[4] === tmp4) {
            tmp10 = cResult[5];
          }
          if (cResult[6] === tmp5) {
            let tmp13;
            if (cResult[7] === tmp10) {
              tmp13 = cResult[8];
            }
            tmp6 = tmp13;
          }
          const obj2 = {
            onPress: tmp5,
            onLongPress: tmp5,
            accessibilityRole: "button",
            accessibilityLabel: tmp8,
            children: tmp10,
          };
          const tmp15 = closure_6(tmp(5916).PressableOpacity, obj2);
          cResult[6] = tmp5;
          cResult[7] = tmp10;
          cResult[8] = tmp15;
          tmp13 = tmp15;
        }
        const obj3 = { size, user: tmp4, guildId: "Array" };
        const tmp12 = closure_6(tmp(1188).Avatar, obj3);
        cResult[3] = size;
        cResult[4] = tmp4;
        cResult[5] = tmp12;
        tmp10 = tmp12;
      }
      return tmp6;
    }
  : (size) => {
      let closure_0;
      let intl;
      let obj2;
      let NORMAL = size.size;
      const userId = size.userId;
      if (NORMAL === undefined) {
        const tmp = _require;
        NORMAL = require("native").AvatarSizes.NORMAL;
      }
      const tmp3 = closure_9(userId);
      _require = tmp3;
      const items = [tmp3];
      const callback = react.useCallback(() => {
        if (null != closure_0) {
          const obj = ConjureMessageActionSheet;
          const result = obj.openMessageAuthorProfile(tmp.id);
        }
      }, items);
      let tmp5 = null;
      if (null != tmp3) {
        let obj = {
          onPress: callback,
          onLongPress: callback,
          accessibilityRole: "button",
          accessibilityLabel: intl.string(require("intl").t.iXAna6),
          children: closure_6(require("native").Avatar, obj2),
        };
        const PressableOpacity = require("Pressables").PressableOpacity;
        intl = require("intl").intl;
        obj2 = { size: NORMAL, user: tmp3, guildId: "Array" };
        tmp5 = closure_6(PressableOpacity, obj);
      }
      return tmp5;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp9 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let first;
      let tmp9;
      const obj = react2;
      const cResult = obj.c(3);
      const tmp4 = closure_8();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { size: "sm", color: nativeDefault.colors.TEXT_BRAND };
        const AppsIcon = AppsIcon2.AppsIcon;
        const tmp8 = metroRequire(AppsIcon, obj2);
        cResult[0] = tmp8;
        first = tmp8;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== tmp4.conjureTile) {
        const obj3 = { style: tmp4.conjureTile, children: first };
        const tmp12 = metroRequire(View, obj3);
        cResult[1] = tmp4.conjureTile;
        cResult[2] = tmp12;
        tmp9 = tmp12;
      } else {
        tmp9 = cResult[2];
      }
      return tmp9;
    }
  : () => {
      let AppsIcon;
      let obj2;
      const obj = { style: closure_8().conjureTile, children: metroRequire(AppsIcon, obj2) };
      obj2 = { size: "sm", color: nativeDefault.colors.TEXT_BRAND };
      AppsIcon = AppsIcon2.AppsIcon;
      return metroRequire(View, obj);
    };
size = size_mod;
let result = size.fileFinishedImporting("modules/conjure/chat/native/ConjureMessageAuthor.tsx");

export const useMessageAuthorUser = tmp4;
export const ConjureMessageHeader = tmp5;
export const ConjureUserHeader = tmp6;
export const ConjureHeader = tmp7;
export const ConjureUserAvatar = tmp8;
export const ConjureAvatar = tmp9;
