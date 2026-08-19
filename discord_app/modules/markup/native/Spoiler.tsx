// === Module 10062: render ===

// Module 10062 (render)
import ThemesDefault from "Themes" /* 712 */;
import importAllResult from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import { EMOJI_CHAT_SIZE } from "ME" /* 676 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;
import obj132 from "obj132" /* 500 */;

let require = fn;
({ View: c3, StyleSheet: c4 } = get_ActivityIndicator);
let str = "transparent";
if (obj132.isAndroid()) {
  str = "rgba(0,0,0,0.0019607844)";
}
createCacheKey = { color: str, backgroundColor: ThemesDefault.colors.SPOILER_HIDDEN_BACKGROUND };
createCacheKey[0] = createCacheKey;
obj132 = { width: EMOJI_CHAT_SIZE, height: EMOJI_CHAT_SIZE, backgroundColor: ThemesDefault.colors.SPOILER_HIDDEN_BACKGROUND };
createCacheKey[1] = obj132;
createCacheKey[2] = { color: ThemesDefault.colors.TEXT_DEFAULT, backgroundColor: ThemesDefault.colors.SPOILER_REVEALED_BACKGROUND };
createCacheKey[3] = { opacity: require("hairlineWidth").MUTED_OPACITY_CONTENT };
let closure_6 = createCacheKey.createLegacyClassComponentStyles(createCacheKey);
const PureComponent = importAllResult.PureComponent;
class Spoiler extends PureComponent {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    applyArgumentsResult.state = { revealed: false };
    applyArgumentsResult.handleTap = function handleTap() {
      let obj = applyArgumentsResult;
      if (!tmp) {
        obj = { revealed: null };
        obj[0] = !obj.state.revealed;
        obj.setState(obj);
      }
    };
    return applyArgumentsResult;
  }
}
Spoiler.prototype["render"] = function render() {
  const self = this;
  const tmp = callback(this.context);
  const _require = tmp;
  const revealed = this.state.revealed;
  const children = this.props.children;
  if (revealed) {
    let items = [tmp.spoilerRevealed, tmp3];
    let items1 = items;
  } else {
    items1 = [tmp.spoiler, tmp2];
  }
  let Children = importAllResult.Children;
  if (0 === Children.count(children)) {
    return null;
  } else {
    Children = importAllResult.Children;
    let mapped = Children.map(children, (type) => {
      let map = closure_1_2;
      if (!closure_1_2.isValidElement(type)) {
        return type;
      } else {
        if ("Image" === type.type.displayName) {
          if (!revealed) {
            let obj = { style: null };
            obj[0] = placeholder.placeholder;
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
              if (closure_1_2.isValidElement(props)) {
                const style = props.props.style;
                const _Array = Array;
                let flattenResult = style;
                if (Array.isArray(style)) {
                  flattenResult = closure_1_4.flatten(style);
                }
                const obj = { children: null, style: null, onPress: "Array" };
                ({ Children, cloneElement } = closure_1_2);
                obj[0] = Children.map(props.props.children, (props) => {
                  if (closure_1_2.isValidElement(props)) {
                    const style = props.props.style;
                    const _Array = Array;
                    let flattenResult = style;
                    if (Array.isArray(style)) {
                      flattenResult = closure_1_4.flatten(style);
                    }
                    const obj = { children: null, style: null, onPress: "Array" };
                    ({ Children, cloneElement } = closure_1_2);
                    obj[0] = Children.map(props.props.children, (props) => {
                      if (closure_1_2.isValidElement(props)) {
                        const style = props.props.style;
                        const _Array = Array;
                        let flattenResult = style;
                        if (Array.isArray(style)) {
                          flattenResult = closure_1_4.flatten(style);
                        }
                        const obj = { children: null, style: null, onPress: "Array" };
                        ({ Children, cloneElement } = closure_1_2);
                        obj[0] = Children.map(props.props.children, () => { ... });
                        const items = [flattenResult, spoiler.spoiler];
                        obj[1] = items;
                        return cloneElement(props, obj);
                      } else {
                        return props;
                      }
                    });
                    const items = [flattenResult, spoiler.spoiler];
                    obj[1] = items;
                    return cloneElement(props, obj);
                  } else {
                    return props;
                  }
                });
                const items = [flattenResult, spoiler.spoiler];
                obj[1] = items;
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
    obj[1] = items2;
    let handleTap;
    if (!self.props.disableReveal) {
      handleTap = self.handleTap;
    }
    obj[2] = handleTap;
    obj[3] = mapped;
    return jsx(_require(revealed[9]).LegacyText, { accessibilityRole: "button", style: null, onPress: null, children: null });
  }
};
Spoiler.contextType = require("ManaContext").ThemeContext;
const result = obj132.fileFinishedImporting("modules/markup/native/Spoiler.tsx");

export default Spoiler;