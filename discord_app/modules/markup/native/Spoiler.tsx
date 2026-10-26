// === Module 11960: Spoiler ===

// Module 11960 (Spoiler)
import _mod570 from "module_570" /* 570 */;
import _mod571 from "module_571" /* 571 */;
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
function createSpoilerStore() {
  return _mod571.createStore()((arg0) => {
    closure_0 = arg0;
    let obj = {
      revealedIds: new Set(),
      reveal(dependencyMap) {
        closure_0 = dependencyMap;
        closure_0((revealedIds) => {
          const obj = { revealedIds: new Set(revealedIds.revealedIds).add(closure_0) };
          return obj;
        });
      }
    };
    return obj;
  });
}
let closure_2 = ["id", "store"];
let closure_3 = ["id"];
get_ActivityIndicator = fn(17);
({ View: closure_7, StyleSheet: closure_8 } = get_ActivityIndicator);
const EMOJI_CHAT_SIZE = fn(1087).EMOJI_CHAT_SIZE;
const jsx = fn(21).jsx;
const createStyles = fn(4971);
const PlatformUtils = fn(1384);
let str = "transparent";
if (PlatformUtils.isAndroid()) {
  str = "rgba(0,0,0,0.0019607844)";
}
let obj = { spoiler: { color: str, backgroundColor: nativeDefault.colors.SPOILER_HIDDEN_BACKGROUND }, placeholder: null, spoilerRevealed: null, muted: null };
let size = { width: EMOJI_CHAT_SIZE, height: EMOJI_CHAT_SIZE, backgroundColor: nativeDefault.colors.SPOILER_HIDDEN_BACKGROUND };
obj.placeholder = size;
const obj4 = { color: str, backgroundColor: nativeDefault.colors.SPOILER_HIDDEN_BACKGROUND };
obj.spoilerRevealed = { color: nativeDefault.colors.TEXT_DEFAULT, backgroundColor: nativeDefault.colors.SPOILER_REVEALED_BACKGROUND };
obj.muted = { opacity: fn(11953).MUTED_OPACITY_CONTENT };
let closure_10 = createStyles.createLegacyClassComponentStyles(obj);
const redux = noop.createContext(null);
fn(558);
const obj5 = { color: nativeDefault.colors.TEXT_DEFAULT, backgroundColor: nativeDefault.colors.SPOILER_REVEALED_BACKGROUND };
let ReactCompilerGating = fn(558);
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? (function SharedSpoiler(id) {
  const cResult = c.c(13);
  if (cResult[0] !== id) {
    id = id.id;
    closure_0 = id;
    const store = id.store;
    let state = store;
    const tmp9 = _objectWithoutProperties(id, closure_2);
    cResult[0] = id;
    cResult[1] = id;
    cResult[2] = tmp9;
    cResult[3] = store;
    let tmp5 = tmp9;
  } else {
    closure_0 = cResult[1];
    tmp5 = cResult[2];
    state = cResult[3];
  }
  if (cResult[4] !== tmp4) {
    const fn = function c(revealedIds) {
      revealedIds = revealedIds.revealedIds;
      return revealedIds.has(closure_0);
    };
    cResult[4] = tmp4;
    cResult[5] = fn;
    let tmp10 = fn;
  } else {
    tmp10 = cResult[5];
  }
  const store1 = _mod570.useStore(tmp6, tmp10);
  if (cResult[6] === tmp4) {
    if (cResult[7] === tmp6) {
      let tmp12 = cResult[8];
    }
    if (cResult[9] === tmp5) {
      if (cResult[10] === store1) {
        if (cResult[11] === tmp12) {
          let tmp13 = cResult[12];
        }
        return tmp13;
      }
    }
    const obj2 = {};
    const merged = Object.assign(tmp5);
    obj2.revealed = store1;
    obj2.onReveal = tmp12;
    const tmp19 = <Spoiler />;
    cResult[9] = tmp5;
    cResult[10] = store1;
    cResult[11] = tmp12;
    cResult[12] = tmp19;
    tmp13 = tmp19;
  }
  const fn2 = function u() {
    state = state.getState();
    return state.reveal(closure_0);
  };
  cResult[6] = tmp4;
  cResult[7] = tmp6;
  cResult[8] = fn2;
  tmp12 = fn2;
  const tmpResult = _mod570;
}) : (function SharedSpoiler(arg0) {
  ({ id: require, store } = arg0);
  const merged = Object.assign(arg0, Object.assign({ id: 0, store: 0 }));
  const obj2 = {};
  const store1 = _mod570.useStore(store, (revealedIds) => {
    revealedIds = revealedIds.revealedIds;
    return revealedIds.has(_require);
  });
  const merged1 = Object.assign(merged);
  obj2.revealed = store1;
  obj2.onReveal = function onReveal() {
    const state = store.getState();
    return state.reveal(_require);
  };
  return <Spoiler />;
});
const PureComponent = noop.PureComponent;
class Spoiler extends PureComponent {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    applyArgumentsResult.state = { revealed: false };
    applyArgumentsResult.handleTap = function handleTap() {
      let disableReveal = applyArgumentsResult.props.revealed;
      if (disableReveal == null) {
        disableReveal = applyArgumentsResult.state.revealed;
      }
      if (!disableReveal) {
        disableReveal = applyArgumentsResult.props.disableReveal;
      }
      if (!disableReveal) {
        if (null != applyArgumentsResult.props.onReveal) {
          const props = applyArgumentsResult.props;
          props.onReveal();
        } else {
          applyArgumentsResult.setState({ revealed: true });
        }
      }
    };
    return applyArgumentsResult;
  }
}
Spoiler.prototype["render"] = function render() {
  const self = this;
  const tmp = closure_10(this.context);
  _require = tmp;
  let revealed = this.props.revealed;
  if (revealed == null) {
    revealed = self.state.revealed;
  }
  const children = self.props.children;
  if (revealed) {
    let items = [tmp.spoilerRevealed, tmp3];
    let items1 = items;
  } else {
    items1 = [tmp.spoiler, tmp2];
  }
  let Children = noop.Children;
  if (0 === Children.count(children)) {
    return null;
  } else {
    const Children1 = noop.Children;
    let mapped = Children1.map(children, (type) => {
      let map = noop;
      if (!noop.isValidElement(type)) {
        return type;
      } else {
        let displayName;
        if (typeof type.type !== "string") {
          if ("displayName" in type.type) {
            displayName = type.type.displayName;
          }
        }
        if ("Image" === displayName) {
          if (!revealed) {
            let obj = { style: placeholder.placeholder };
            const tmp8 = <React5 style={placeholder.placeholder} />;
          }
        } else {
          const props = type.props;
          let source;
          if (props != null) {
            source = props.source;
          }
        }
        let mapped = type;
        if (null != type.props) {
          mapped = type;
          if (!revealed) {
            const Children = map.Children;
            map = Children.map;
            mapped = map(type, (props) => {
              if (validElement.isValidElement(props)) {
                const style = props.props.style;
                const _Array = Array;
                let flattenResult = style;
                if (Array.isArray(style)) {
                  flattenResult = closure_2_8.flatten(style);
                }
                const obj = { children: null, style: null, onPress: "Array" };
                ({ Children, cloneElement } = validElement);
                obj.children = Children.map(props.props.children, (props) => {
                  if (validElement.isValidElement(props)) {
                    const style = props.props.style;
                    const _Array = Array;
                    let flattenResult = style;
                    if (Array.isArray(style)) {
                      flattenResult = closure_2_8.flatten(style);
                    }
                    const obj = { children: null, style: null, onPress: "Array" };
                    ({ Children, cloneElement } = validElement);
                    obj.children = Children.map(props.props.children, (props) => {
                      if (validElement.isValidElement(props)) {
                        const style = props.props.style;
                        const _Array = Array;
                        let flattenResult = style;
                        if (Array.isArray(style)) {
                          flattenResult = closure_2_8.flatten(style);
                        }
                        const obj = { children: null, style: null, onPress: "Array" };
                        ({ Children, cloneElement } = validElement);
                        obj.children = Children.map(props.props.children, () => { ... });
                        const items = [flattenResult, spoiler.spoiler];
                        obj.style = items;
                        return cloneElement(props, obj);
                      } else {
                        return props;
                      }
                    });
                    const items = [flattenResult, spoiler.spoiler];
                    obj.style = items;
                    return cloneElement(props, obj);
                  } else {
                    return props;
                  }
                });
                const items = [flattenResult, spoiler.spoiler];
                obj.style = items;
                return cloneElement(props, obj);
              } else {
                return props;
              }
            });
          }
        }
      }
    });
    const items2 = [items1, ];
    let muted = self.props.muted;
    if (muted) {
      muted = tmp.muted;
    }
    let obj = { accessibilityRole: "button", style: null, onPress: null, children: null };
    items2[1] = muted;
    obj.style = items2;
    let handleTap;
    if (!self.props.disableReveal) {
      handleTap = self.handleTap;
    }
    obj.onPress = handleTap;
    obj.children = mapped;
    return jsx(require("native").LegacyText, { accessibilityRole: "button", style: null, onPress: null, children: null });
  }
};
Spoiler.contextType = fn(5037).ThemeContext;
ReactCompilerGating = fn(558);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function SpoilerRevealProvider(children) {
  const cResult = c.c(3);
  children = children.children;
  const first = _slicedToArray(noop.useState(createSpoilerStore), 1)[0];
  if (cResult[0] === children) {
    if (cResult[1] === first) {
      let tmp3 = cResult[2];
    }
    return tmp3;
  }
  const tmp4 = <redux.Provider value={first}>{children}</redux.Provider>;
  cResult[0] = children;
  cResult[1] = first;
  cResult[2] = tmp4;
  tmp3 = tmp4;
}) : (function SpoilerRevealProvider(children) {
  return <redux.Provider value={_slicedToArray(noop.useState(createSpoilerStore), 1)[0]}>{children.children}</redux.Provider>;
});
size = fn(2);
const result = size.fileFinishedImporting("modules/markup/native/Spoiler.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function NativeSpoiler(id) {
  const cResult = c.c(7);
  if (cResult[0] !== id) {
    id = id.id;
    const tmp6 = _objectWithoutProperties(id, closure_3);
    cResult[0] = id;
    cResult[1] = id;
    cResult[2] = tmp6;
    let tmp3 = tmp6;
    let tmp2 = id;
  } else {
    tmp2 = cResult[1];
    tmp3 = cResult[2];
  }
  const context = noop.useContext(closure_12);
  if (cResult[3] === tmp2) {
    if (cResult[4] === tmp3) {
      if (cResult[5] === context) {
        return cResult[6];
      }
    }
  }
  if (null == tmp2) {
    const obj2 = {};
    const merged = Object.assign(tmp3);
    let tmp13 = <Spoiler />;
    cResult[3] = tmp2;
    cResult[4] = tmp3;
    cResult[5] = context;
    cResult[6] = tmp13;
  }
  const obj3 = {};
  const merged1 = Object.assign(tmp3);
  obj3.id = tmp2;
  obj3.store = context;
  tmp13 = <closure_13 />;
}) : (function NativeSpoiler(id) {
  id = id.id;
  const merged = Object.assign(id, Object.assign({ id: 0 }));
  const context = noop.useContext(closure_12);
  if (null != id) {
    if (null != context) {
      const obj2 = {};
      const merged1 = Object.assign(merged);
      obj2.id = id;
      obj2.store = context;
      let tmp4 = <closure_13 />;
    }
    return tmp4;
  }
  const merged2 = Object.assign(merged);
  tmp4 = <Spoiler />;
  const obj = {};
});
export const SpoilerRevealProvider = tmp3;