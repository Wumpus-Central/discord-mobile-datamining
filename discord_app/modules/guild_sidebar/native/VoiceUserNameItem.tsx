// === Module 16346: VoiceUserNameItem ===

// Module 16346 (VoiceUserNameItem)
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import UserUtilsDefault from "UserUtils" /* 4922 */;
import Text_Text from "Text/Text" /* 5086 */;
import useDisplayNameStylesDefault from "useDisplayNameStyles" /* 5624 */;
import useDisplayNameStylesFont from "useDisplayNameStylesFont" /* 8825 */;
import VoiceGuildTagDefault from "VoiceGuildTag" /* 16347 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsxs: metroRequire, jsx: closure_7 } = jsxProd);
const createStyles = fn(5090);
let closure_8 = createStyles.createStyles({ container: { marginLeft: 8, flex: 1, flexDirection: "row" }, tag: { flexDirection: "row", alignItems: "center", paddingLeft: 8 }, measuringTag: { opacity: 0 } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_sidebar/native/VoiceUserNameItem.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function VoiceUserNameItem(arg0) {
  const cResult = c.c(32);
  ({ member, user, guildId, isGuest, color, variant } = arg0);
  const tmp4 = closure_8();
  if (cResult[0] === guildId) {
    if (cResult[1] === user.id) {
      let tmp5 = cResult[2];
    }
    const tmp7 = useDisplayNameStylesDefault(tmp5);
    if (cResult[3] !== tmp7) {
      const obj2 = { displayNameStyles: tmp7 };
      cResult[3] = tmp7;
      cResult[4] = obj2;
      let tmp8 = obj2;
    } else {
      tmp8 = cResult[4];
    }
    const displayNameStylesFont = useDisplayNameStylesFont.useDisplayNameStylesFont(tmp8);
    const tmpResult = useDisplayNameStylesFont;
    [r10047, require] = noop.useState(0);
    const tmp12 = _slicedToArray(noop.useState(0), 2);
    [r10052, importDefault] = noop.useState(0);
    const tmp13 = _slicedToArray(noop.useState(0), 2);
    [tmp15, dependencyMap] = noop.useState(true);
    const tmp14 = _slicedToArray(noop.useState(true), 2);
    [r10063, _slicedToArray] = noop.useState(0);
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      class N {
        constructor(arg0) {
          tmp = closure_0(arg0.nativeEvent.layout.width);
          return;
        }
      }
      cResult[5] = N;
    } else {
      class N {
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
    if (!tmp15) {
      class H {
        constructor(arg0) {
          tmp = closure_3(arg0.nativeEvent.layout.width);
          tmp2 = closure_2(false);
          return;
        }
      }
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
      if (member != null) {
        class H {
          constructor(arg0) {
            tmp = closure_3(arg0.nativeEvent.layout.width);
            tmp2 = closure_2(false);
            return;
          }
        }
      }
      if (cResult[13] === undefined) {
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
          if (isGuest) {
            class H {
              constructor(arg0) {
                tmp = closure_3(arg0.nativeEvent.layout.width);
                tmp2 = closure_2(false);
                return;
              }
            }
            const obj3 = { variant: "text-sm/normal", lineClamp: 1, color: "status-positive", children: null };
            const intl = util.intl;
            const items = ["\u00A0", intl.string(util.t["pFO/Ph"])];
            obj3.children = items;
            const tmp33 = timestampProducer(Text_Text.Text, obj3);
          }
          cResult[16] = isGuest;
          cResult[17] = tmp33;
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
        const obj4 = { variant, color, lineClamp: 1, onLayout: A, style: tmp24, children: null };
        const items1 = [tmp29, tmp32];
        obj4.children = items1;
        const tmp36 = timestampProducer(Text_Text.Text, obj4);
        cResult[18] = color;
        cResult[19] = tmp32;
        cResult[20] = tmp24;
        cResult[21] = tmp29;
        cResult[22] = variant;
        cResult[23] = tmp36;
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
    const tmp16 = _slicedToArray(noop.useState(0), 2);
  }
  const obj6 = { userId: user.id, guildId };
  cResult[0] = guildId;
  cResult[1] = user.id;
  cResult[2] = obj6;
  tmp5 = obj6;
}) : (function VoiceUserNameItem(arg0) {
  ({ member, user, isGuest } = arg0);
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  ({ guildId, color, variant } = arg0);
  const tmp = closure_8();
  const obj = { userId: user.id, guildId };
  const tmp4 = useDisplayNameStylesDefault({ userId: user.id, guildId });
  const displayNameStylesFont = useDisplayNameStylesFont.useDisplayNameStylesFont({ displayNameStyles: tmp4 });
  [tmp8, c0] = noop.useState(0);
  const tmp7 = _slicedToArray(noop.useState(0), 2);
  [tmp10, c1] = noop.useState(0);
  const tmp9 = _slicedToArray(noop.useState(0), 2);
  [tmp12, c2] = noop.useState(true);
  const tmp11 = _slicedToArray(noop.useState(true), 2);
  [tmp14, c3] = noop.useState(0);
  const callback = noop.useCallback((nativeEvent) => {
    _undefined(nativeEvent.nativeEvent.layout.width);
  }, []);
  const callback1 = noop.useCallback((nativeEvent) => {
    _undefined2(nativeEvent.nativeEvent.layout.width);
  }, []);
  const obj3 = { onLayout: callback, style: null, children: null };
  const items = [tmp.container, ];
  let measuringTag = tmp12;
  const callback2 = noop.useCallback((nativeEvent) => {
    _undefined4(nativeEvent.nativeEvent.layout.width);
    _undefined3(false);
  }, []);
  if (tmp12) {
    measuringTag = tmp.measuringTag;
  }
  items[1] = measuringTag;
  obj3.style = items;
  const obj4 = { variant, color, lineClamp: 1, onLayout: callback1, style: null, children: null };
  let tmp20 = null != displayNameStylesFont;
  if (tmp20) {
    const obj5 = { fontFamily: displayNameStylesFont };
    tmp20 = obj5;
  }
  obj4.style = tmp20;
  let nick;
  if (member != null) {
    nick = member.nick;
  }
  if (nick == null) {
    nick = UserUtilsDefault.getName(user);
    const tmp2Result = UserUtilsDefault;
  }
  const items1 = [nick, ];
  if (isGuest) {
    const obj6 = { variant: "text-sm/normal", lineClamp: 1, color: "status-positive", children: null };
    const intl = util.intl;
    const items2 = ["\u00A0", intl.string(util.t["pFO/Ph"])];
    obj6.children = items2;
    isGuest = timestampProducer(Text_Text.Text, obj6);
  }
  items1[1] = isGuest;
  obj4.children = items1;
  const items3 = [timestampProducer(Text_Text.Text, obj4), ];
  if (!tmp12) {
    tmp12 = 0 !== tmp8 && 0 !== tmp10 && 0 !== tmp14 && tmp8 >= tmp10 + tmp14;
    const tmp22 = 0 !== tmp8 && 0 !== tmp10 && 0 !== tmp14 && tmp8 >= tmp10 + tmp14;
  }
  if (tmp12) {
    const obj7 = { onLayout: callback2, style: tmp.tag, children: null };
    const obj8 = { userId: user.id };
    obj7.children = React5(VoiceGuildTagDefault, obj8);
    tmp12 = React5(View, obj7);
  }
  items3[1] = tmp12;
  obj3.children = items3;
  return timestampProducer(View, obj3);
});