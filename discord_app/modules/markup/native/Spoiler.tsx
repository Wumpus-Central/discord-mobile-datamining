// discord_app/modules/markup/native/Spoiler.tsx
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../Constants.tsx";
import native from "../../../../discord_common/js/packages/design/native.tsx";
import RedesignChannelListConstants from "../../channel_list_v2/native/RedesignChannelListConstants.tsx";
import react from "../../../../_runtime/00019_react.js";
import react_native from "../../../../_runtime/00017_react-native.js";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import PlatformUtils from "../../../utils/PlatformUtils.tsx";
import size_mod from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require;

let c3;
let closure_4;
let obj2;
let size;
({ View: c3, StyleSheet: closure_4 } = react_native);
const EMOJI_CHAT_SIZE = Constants.EMOJI_CHAT_SIZE;
const MUTED_OPACITY_CONTENT = RedesignChannelListConstants.MUTED_OPACITY_CONTENT;
const jsx = Fragment.jsx;
const createLegacyClassComponentStyles = createStyles.createLegacyClassComponentStyles;
let str = "transparent";
if (PlatformUtils.isAndroid()) {
  str = "rgba(0,0,0,0.0019607844)";
}
let obj = {
  spoiler: obj2,
  placeholder: size,
  spoilerRevealed: {
    color: nativeDefault.colors.TEXT_DEFAULT,
    backgroundColor: nativeDefault.colors.SPOILER_REVEALED_BACKGROUND,
  },
  muted: { opacity: MUTED_OPACITY_CONTENT },
};
obj2 = { color: str, backgroundColor: nativeDefault.colors.SPOILER_HIDDEN_BACKGROUND };
size = {
  width: EMOJI_CHAT_SIZE,
  height: EMOJI_CHAT_SIZE,
  backgroundColor: nativeDefault.colors.SPOILER_HIDDEN_BACKGROUND,
};
({ color: nativeDefault.colors.TEXT_DEFAULT, backgroundColor: nativeDefault.colors.SPOILER_REVEALED_BACKGROUND });
const metroRequire = createLegacyClassComponentStyles(obj);
const PureComponent = react.PureComponent;
class Spoiler extends PureComponent {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    applyArgumentsResult.state = { revealed: false };
    applyArgumentsResult.handleTap = function handleTap() {
      const tmp = applyArgumentsResult.state.revealed || applyArgumentsResult.props.disableReveal;
      if (!tmp) {
        const obj2 = { revealed: !applyArgumentsResult.state.revealed };
        applyArgumentsResult.setState(obj2);
      }
    };
    return applyArgumentsResult;
  }
  render() {
    let items1;
    let placeholder;
    let tmp2;
    const self = this;
    const tmp = closure_6(this.context);
    _require = tmp;
    const revealed = this.state.revealed;
    const children = this.props.children;
    if (revealed) {
      let items = [tmp.spoilerRevealed, tmp3];
      items1 = items;
    } else {
      items1 = [tmp.spoiler, tmp2];
    }
    let Children = react.Children;
    if (0 === Children.count(children)) {
      return null;
    } else {
      const Children1 = react.Children;
      let tmp9 = _require;
      let mapped = Children1.map(children, (type) => {
        let validElement;
        const f108948 = (props) => {
          let Children;
          let cloneElement;
          let items;
          if (validElement.isValidElement(props)) {
            const style = props.props.style;
            const _Array = Array;
            let flattenResult = style;
            if (Array.isArray(style)) {
              flattenResult = closure_2_4.flatten(style);
            }
            const obj = { children: Children.map(props.props.children, f108948), style: items, onPress: "Array" };
            ({ Children, cloneElement } = validElement);
            items = [flattenResult, spoiler.spoiler];
            return cloneElement(props, obj);
          } else {
            return props;
          }
        };
        let tmp2 = type;
        if (react.isValidElement(type)) {
          if ("Image" === type.type.displayName) {
            let tmp9;
            if (!revealed) {
              tmp9 = <_false style={placeholder.placeholder} />;
            }
            tmp2 = tmp9;
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
              const Children = react.Children;
              mapped = Children.map(type, f108948);
            }
          }
          tmp9 = mapped;
        }
        return tmp2;
      });
      const items2 = [items1];
      let muted = self.props.muted;
      const LegacyText = require("native").LegacyText;
      if (muted) {
        muted = tmp.muted;
      }
      items2[1] = muted;
      let handleTap;
      if (!self.props.disableReveal) {
        handleTap = self.handleTap;
      }
      return (
        <LegacyText accessibilityRole="button" style={items2} onPress={handleTap}>
          {mapped}
        </LegacyText>
      );
    }
  }
}
const prototype = Spoiler.prototype;
Spoiler.contextType = native.ThemeContext;
size = size_mod;
const result = size.fileFinishedImporting("modules/markup/native/Spoiler.tsx");

export default Spoiler;
