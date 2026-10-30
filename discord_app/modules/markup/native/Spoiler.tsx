// discord_app/modules/markup/native/Spoiler.tsx
import _mod560 from "../../../../_runtime/metro/00560__.js";
import _mod561 from "../../../../_runtime/metro/00561__.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
function createSpoilerStore() {
  return _mod561.createStore()((arg0) => {
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
function SharedSpoiler(arg0) {
  ({ id: require, store } = arg0);
  const merged = Object.assign(arg0, Object.assign({ id: 0, store: 0 }));
  const obj2 = {};
  const store1 = _mod560.useStore(store, (revealedIds) => {
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
}
get_ActivityIndicator = fn(17);
({ View: closure_4, StyleSheet: hasOwnProperty } = get_ActivityIndicator);
const EMOJI_CHAT_SIZE = fn(1072).EMOJI_CHAT_SIZE;
const jsx = fn(21).jsx;
const createStyles = fn(5009);
const PlatformUtils = fn(1376);
let str = "transparent";
if (PlatformUtils.isAndroid()) {
  str = "rgba(0,0,0,0.0019607844)";
}
let obj = { spoiler: { color: str, backgroundColor: nativeDefault.colors.SPOILER_HIDDEN_BACKGROUND }, placeholder: null, spoilerRevealed: null, muted: null };
let size = { width: EMOJI_CHAT_SIZE, height: EMOJI_CHAT_SIZE, backgroundColor: nativeDefault.colors.SPOILER_HIDDEN_BACKGROUND };
obj.placeholder = size;
const obj4 = { color: str, backgroundColor: nativeDefault.colors.SPOILER_HIDDEN_BACKGROUND };
obj.spoilerRevealed = { color: nativeDefault.colors.TEXT_DEFAULT, backgroundColor: nativeDefault.colors.SPOILER_REVEALED_BACKGROUND };
obj.muted = { opacity: fn(11027).MUTED_OPACITY_CONTENT };
let closure_7 = createStyles.createLegacyClassComponentStyles(obj);
const redux = noop.createContext(null);
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
  const tmp = closure_7(this.context);
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
            const tmp8 = <React4 style={placeholder.placeholder} />;
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
                  flattenResult = closure_2_5.flatten(style);
                }
                const obj = { children: null, style: null, onPress: "r" };
                ({ Children, cloneElement } = validElement);
                obj.children = Children.map(props.props.children, (props) => {
                  if (validElement.isValidElement(props)) {
                    const style = props.props.style;
                    const _Array = Array;
                    let flattenResult = style;
                    if (Array.isArray(style)) {
                      flattenResult = closure_2_5.flatten(style);
                    }
                    const obj = { children: null, style: null, onPress: "r" };
                    ({ Children, cloneElement } = validElement);
                    obj.children = Children.map(props.props.children, (props) => {
                      if (validElement.isValidElement(props)) {
                        const style = props.props.style;
                        const _Array = Array;
                        let flattenResult = style;
                        if (Array.isArray(style)) {
                          flattenResult = closure_2_5.flatten(style);
                        }
                        const obj = { children: null, style: null, onPress: "r" };
                        ({ Children, cloneElement } = validElement);
                        obj.children = Children.map(props.props.children, /* F98411 */ function() { ... });
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
Spoiler.contextType = fn(5075).ThemeContext;
size = fn(2);
const result = size.fileFinishedImporting("modules/markup/native/Spoiler.tsx");

export default function NativeSpoiler(id) {
  id = id.id;
  const merged = Object.assign(id, Object.assign({ id: 0 }));
  const context = noop.useContext(closure_9);
  if (null != id) {
    if (null != context) {
      const obj2 = {};
      const merged1 = Object.assign(merged);
      obj2.id = id;
      obj2.store = context;
      let tmp4 = <SharedSpoiler />;
    }
    return tmp4;
  }
  const merged2 = Object.assign(merged);
  tmp4 = <Spoiler />;
  const obj = {};
};
export function SpoilerRevealProvider(children) {
  return <redux.Provider value={_slicedToArray(noop.useState(createSpoilerStore), 1)[0]}>{children.children}</redux.Provider>;
}