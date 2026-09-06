// === Module 10127: Spoiler ===

// Module 10127 (Spoiler)
import nativeDefault from "native" /* 576 */;
import noop from "module_19" /* 19 */;

let require = fn;
get_ActivityIndicator = fn(17);
({ View: c3, StyleSheet: closure_4 } = get_ActivityIndicator);
const EMOJI_CHAT_SIZE = fn(1074).EMOJI_CHAT_SIZE;
const jsx = fn(21).jsx;
let createStyles = fn(4560);
let PlatformUtils = fn(1115);
let str = "transparent";
if (PlatformUtils.isAndroid()) {
  str = "rgba(0,0,0,0.0019607844)";
}
createStyles = { spoiler: null, placeholder: null, spoilerRevealed: null, muted: null };
createStyles = { color: str, backgroundColor: nativeDefault.colors.SPOILER_HIDDEN_BACKGROUND };
createStyles.spoiler = createStyles;
let size = { width: EMOJI_CHAT_SIZE, height: EMOJI_CHAT_SIZE, backgroundColor: nativeDefault.colors.SPOILER_HIDDEN_BACKGROUND };
createStyles.placeholder = size;
PlatformUtils = { color: nativeDefault.colors.TEXT_DEFAULT, backgroundColor: nativeDefault.colors.SPOILER_REVEALED_BACKGROUND };
createStyles.spoilerRevealed = PlatformUtils;
createStyles.muted = { opacity: fn(10118).MUTED_OPACITY_CONTENT };
let closure_6 = createStyles.createLegacyClassComponentStyles(createStyles);
const PureComponent = noop.PureComponent;
class Spoiler extends PureComponent {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    applyArgumentsResult.state = { revealed: false };
    applyArgumentsResult.handleTap = function handleTap() {
      let obj = applyArgumentsResult;
      if (!tmp) {
        obj = { revealed: null };
        obj.revealed = !obj.state.revealed;
        obj.setState(obj);
      }
    };
    return applyArgumentsResult;
  }
}
Spoiler.prototype["render"] = function render() {
  const self = this;
  const tmp = closure_6(this.context);
  _require = tmp;
  const revealed = this.state.revealed;
  const children = this.props.children;
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
    Children = noop.Children;
    let mapped = Children.map(children, (type) => {
      let map = noop;
      if (!noop.isValidElement(type)) {
        return type;
      } else {
        if ("Image" === type.type.displayName) {
          if (!revealed) {
            let obj = { style: placeholder.placeholder };
            const tmp7 = <React3 style={placeholder.placeholder} />;
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
                  flattenResult = closure_2_4.flatten(style);
                }
                const obj = { children: null, style: null, onPress: "Array" };
                ({ Children, cloneElement } = validElement);
                obj.children = Children.map(props.props.children, (props) => {
                  if (validElement.isValidElement(props)) {
                    const style = props.props.style;
                    const _Array = Array;
                    let flattenResult = style;
                    if (Array.isArray(style)) {
                      flattenResult = closure_2_4.flatten(style);
                    }
                    const obj = { children: null, style: null, onPress: "Array" };
                    ({ Children, cloneElement } = validElement);
                    obj.children = Children.map(props.props.children, (props) => {
                      if (validElement.isValidElement(props)) {
                        const style = props.props.style;
                        const _Array = Array;
                        let flattenResult = style;
                        if (Array.isArray(style)) {
                          flattenResult = closure_2_4.flatten(style);
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
Spoiler.contextType = fn(4271).ThemeContext;
size = fn(2);
const result = size.fileFinishedImporting("modules/markup/native/Spoiler.tsx");

export default Spoiler;