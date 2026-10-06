// === Module 16086: VoiceUserNameItem ===

// Module 16086 (VoiceUserNameItem)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import intl2 from "intl" /* 1126 */;
import UserUtilsDefault from "UserUtils" /* 4728 */;
import Text_Text from "Text/Text" /* 4892 */;
import useDisplayNameStylesDefault from "useDisplayNameStyles" /* 5312 */;
import useDisplayNameStylesFont from "useDisplayNameStylesFont" /* 9403 */;
import VoiceGuildTagDefault from "VoiceGuildTag" /* 16087 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let tmp2;

let metroImportDefault;
let metroRequire;
const View = react_native.View;
({ jsxs: metroRequire, jsx: metroImportDefault } = Fragment);
let closure_8 = createStyles.createStyles({ container: { marginLeft: 8, flex: 1, flexDirection: "row" }, tag: { flexDirection: "row", alignItems: "center", paddingLeft: 8 }, measuringTag: { opacity: 0 } });
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_129_0;
  let closure_129_1;
  let closure_129_2;
  let closure_129_3;
  let color;
  let guildId;
  let isGuest;
  let items;
  let items1;
  let member;
  let tmp15;
  let tmp34;
  let user;
  let variant;
  const obj = react2;
  const cResult = obj.c(32);
  ({ member, user, guildId, isGuest, color, variant } = arg0);
  const tmp4 = closure_8();
  if (cResult[0] === guildId) {
    let tmp5;
    let tmp8;
    if (cResult[1] === user.id) {
      tmp5 = cResult[2];
    }
    const tmp7 = useDisplayNameStylesDefault(tmp5);
    if (cResult[3] !== tmp7) {
      const obj2 = { displayNameStyles: tmp7 };
      cResult[3] = tmp7;
      cResult[4] = obj2;
      tmp8 = obj2;
    } else {
      tmp8 = cResult[4];
    }
    const tmpResult = useDisplayNameStylesFont;
    const displayNameStylesFont = tmpResult.useDisplayNameStylesFont(tmp8);
    [r10047, closure_129_0] = react.useState(0);
    _slicedToArray(react.useState(0), 2);
    [r10052, closure_129_1] = react.useState(0);
    _slicedToArray(react.useState(0), 2);
    [tmp15, closure_129_2] = react.useState(true);
    _slicedToArray(react.useState(true), 2);
    [r10063, closure_129_3] = react.useState(0);
    const _Symbol = Symbol;
    _slicedToArray(react.useState(0), 2);
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      class C {
        constructor(arg0) {
          tmp = closure_0(arg0.nativeEvent.layout.width);
          return;
        }
      }
      cResult[5] = C;
    } else {
      class C {
        constructor(arg0) {
          tmp = closure_0(arg0.nativeEvent.layout.width);
          return;
        }
      }
    }
    const _Symbol2 = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      class A {
        constructor(arg0) {
          tmp = closure_1(arg0.nativeEvent.layout.width);
          return;
        }
      }
      cResult[6] = A;
    } else {
      class A {
        constructor(arg0) {
          tmp = closure_1(arg0.nativeEvent.layout.width);
          return;
        }
      }
    }
    const _Symbol3 = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      class H {
        constructor(arg0) {
          tmp = closure_3(arg0.nativeEvent.layout.width);
          tmp2 = closure_2(false);
          return;
        }
      }
      cResult[7] = H;
    } else {
      class H {
        constructor(arg0) {
          tmp = closure_3(arg0.nativeEvent.layout.width);
          tmp2 = closure_2(false);
          return;
        }
      }
    }
    let tmp21 = tmp15;
    if (!tmp21) {
      class H {
        constructor(arg0) {
          tmp = closure_3(arg0.nativeEvent.layout.width);
          tmp2 = closure_2(false);
          return;
        }
      }
      tmp21 = tmp22;
    }
    if (tmp15) {
      class H {
        constructor(arg0) {
          tmp = closure_3(arg0.nativeEvent.layout.width);
          tmp2 = closure_2(false);
          return;
        }
      }
    }
    if (cResult[8] === tmp4.container) {
      class H {
        constructor(arg0) {
          tmp = closure_3(arg0.nativeEvent.layout.width);
          tmp2 = closure_2(false);
          return;
        }
      }
      if (cResult[11] !== displayNameStylesFont) {
        class H {
          constructor(arg0) {
            tmp = closure_3(arg0.nativeEvent.layout.width);
            tmp2 = closure_2(false);
            return;
          }
        }
        let tmp25 = null != displayNameStylesFont;
        if (tmp25) {
          class H {
            constructor(arg0) {
              tmp = closure_3(arg0.nativeEvent.layout.width);
              tmp2 = closure_2(false);
              return;
            }
          }
          tmp26[0] = displayNameStylesFont;
          tmp25 = tmp26;
        }
        cResult[11] = displayNameStylesFont;
        cResult[12] = tmp25;
      } else {
        class H {
          constructor(arg0) {
            tmp = closure_3(arg0.nativeEvent.layout.width);
            tmp2 = closure_2(false);
            return;
          }
        }
      }
      const tmp27 = cResult[13];
      if (member != null) {
        class H {
          constructor(arg0) {
            tmp = closure_3(arg0.nativeEvent.layout.width);
            tmp2 = closure_2(false);
            return;
          }
        }
      }
      if (tmp27 === undefined) {
        class H {
          constructor(arg0) {
            tmp = closure_3(arg0.nativeEvent.layout.width);
            tmp2 = closure_2(false);
            return;
          }
        }
        if (cResult[16] !== isGuest) {
          class H {
            constructor(arg0) {
              tmp = closure_3(arg0.nativeEvent.layout.width);
              tmp2 = closure_2(false);
              return;
            }
          }
          if (tmp34) {
            class H {
              constructor(arg0) {
                tmp = closure_3(arg0.nativeEvent.layout.width);
                tmp2 = closure_2(false);
                return;
              }
            }
            const obj3 = { variant: "text-sm/normal", lineClamp: 1, color: "status-positive", children: items };
            const Text = Text_Text.Text;
            const intl = intl2.intl;
            items = ["\u00A0", intl.string(intl2.t["pFO/Ph"])];
            tmp34 = metroRequire(Text, obj3);
          }
          cResult[16] = isGuest;
          cResult[17] = tmp34;
        } else {
          class H {
            constructor(arg0) {
              tmp = closure_3(arg0.nativeEvent.layout.width);
              tmp2 = closure_2(false);
              return;
            }
          }
        }
        if (cResult[18] === color) {
          class H {
            constructor(arg0) {
              tmp = closure_3(arg0.nativeEvent.layout.width);
              tmp2 = closure_2(false);
              return;
            }
          }
        }
        const obj4 = { variant, color, lineClamp: 1, onLayout: A, style: tmp24, children: items1 };
        items1 = [tmp30, tmp33];
        cResult[18] = color;
        cResult[19] = tmp33;
        cResult[20] = tmp24;
        cResult[21] = tmp30;
        cResult[22] = variant;
        cResult[23] = metroRequire(Text_Text.Text, obj4);
        const tmp37 = metroRequire(Text_Text.Text, obj4);
      }
      let name;
      if (member != null) {
        class H {
          constructor(arg0) {
            tmp = closure_3(arg0.nativeEvent.layout.width);
            tmp2 = closure_2(false);
            return;
          }
        }
      }
      if (name == null) {
        class H {
          constructor(arg0) {
            tmp = closure_3(arg0.nativeEvent.layout.width);
            tmp2 = closure_2(false);
            return;
          }
        }
        name = obj5.getName(user);
      }
      if (member != null) {
        class H {
          constructor(arg0) {
            tmp = closure_3(arg0.nativeEvent.layout.width);
            tmp2 = closure_2(false);
            return;
          }
        }
      }
      cResult[13] = undefined;
      cResult[14] = user;
      cResult[15] = name;
    }
    const items2 = [tmp4.container, tmp15];
    cResult[8] = tmp4.container;
    cResult[9] = tmp15;
    cResult[10] = items2;
  }
  const obj6 = { userId: user.id, guildId };
  cResult[0] = guildId;
  cResult[1] = user.id;
  cResult[2] = obj6;
  tmp5 = obj6;
}) : ((arg0) => {
  let c0;
  let c1;
  let c2;
  let c3;
  let color;
  let guildId;
  let isGuest;
  let items;
  let items1;
  let items2;
  let items3;
  let member;
  let obj8;
  let tmp10;
  let tmp12;
  let tmp14;
  let tmp20;
  let tmp8;
  let user;
  let variant;
  ({ member, user, isGuest } = arg0);
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  ({ guildId, color, variant } = arg0);
  const tmp = closure_8();
  const obj = { userId: user.id, guildId };
  const tmp4 = useDisplayNameStylesDefault(obj);
  const obj2 = useDisplayNameStylesFont;
  const displayNameStylesFont = obj2.useDisplayNameStylesFont({ displayNameStyles: tmp4 });
  [tmp8, c0] = react.useState(0);
  _slicedToArray(react.useState(0), 2);
  [tmp10, c1] = react.useState(0);
  _slicedToArray(react.useState(0), 2);
  [tmp12, c2] = react.useState(true);
  _slicedToArray(react.useState(true), 2);
  [tmp14, c3] = react.useState(0);
  _slicedToArray(react.useState(0), 2);
  const callback = react.useCallback((nativeEvent) => {
    _undefined(nativeEvent.nativeEvent.layout.width);
  }, []);
  const callback1 = react.useCallback((nativeEvent) => {
    _undefined2(nativeEvent.nativeEvent.layout.width);
  }, []);
  const obj3 = { onLayout: callback, style: items, children: items3 };
  items = [tmp.container, ];
  let measuringTag = tmp12;
  const callback2 = react.useCallback((nativeEvent) => {
    _undefined4(nativeEvent.nativeEvent.layout.width);
    _undefined3(false);
  }, []);
  if (tmp12) {
    measuringTag = tmp.measuringTag;
  }
  items[1] = measuringTag;
  const obj4 = { variant, color, lineClamp: 1, onLayout: callback1, style: tmp20, children: items1 };
  tmp20 = null != displayNameStylesFont;
  const Text = Text_Text.Text;
  if (tmp20) {
    tmp20 = { fontFamily: displayNameStylesFont };
    const obj5 = { fontFamily: displayNameStylesFont };
  }
  let nick;
  if (member != null) {
    nick = member.nick;
  }
  if (nick == null) {
    const tmp2Result = UserUtilsDefault;
    nick = tmp2Result.getName(user);
  }
  items1 = [nick, ];
  if (isGuest) {
    const obj6 = { variant: "text-sm/normal", lineClamp: 1, color: "status-positive", children: items2 };
    const Text2 = Text_Text.Text;
    const intl = intl2.intl;
    items2 = ["\u00A0", intl.string(intl2.t["pFO/Ph"])];
    isGuest = metroRequire(Text2, obj6);
  }
  items1[1] = isGuest;
  items3 = [metroRequire(Text, obj4), ];
  if (!tmp12) {
    tmp12 = 0 !== tmp8 && 0 !== tmp10 && 0 !== tmp14 && tmp8 >= tmp10 + tmp14;
  }
  if (tmp12) {
    const obj7 = { onLayout: callback2, style: tmp.tag, children: metroImportDefault(VoiceGuildTagDefault, obj8) };
    obj8 = { userId: user.id };
    tmp12 = metroImportDefault(View, obj7);
  }
  items3[1] = tmp12;
  return metroRequire(View, obj3);
});
const result = size.fileFinishedImporting("modules/guild_sidebar/native/VoiceUserNameItem.tsx");

export default tmp3;