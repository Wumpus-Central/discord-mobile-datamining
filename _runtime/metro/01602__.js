// _runtime/metro/01602__.js
import BaseNavigationContainer from "../01493_BaseNavigationContainer.js";
import _mod1603 from "01603__.js";
import react from "../00019_react.js";
import react_native from "../00017_react-native.js";

let Platform;
let c3;
({ Platform, Text: c3 } = react_native);

export const Link = function Link(arg0) {
  let action;
  let colors;
  let fonts;
  let href;
  let params;
  let screen;
  let style;
  ({ screen, params, action, href, style } = arg0);
  const merged = Object.assign(arg0, Object.assign({ screen: 0, params: 0, action: 0, href: 0, style: 0, target: 0 }));
  const obj = _mod1603;
  const linkProps = obj.useLinkProps({ screen, params, action, href });
  const obj2 = BaseNavigationContainer;
  const theme = obj2.useTheme();
  ({ colors, fonts } = theme);
  const createElement = react.createElement;
  const merged1 = Object.assign(linkProps);
  const merged2 = Object.assign(merged);
  const items = [, ,];
  const obj4 = { color: colors.primary };
  items[0] = obj4;
  items[1] = fonts.regular;
  items[2] = style;
  return (
    <_false
      onPress={function onPress(preventDefault) {
        if (merged.disabled) {
          preventDefault.preventDefault();
          preventDefault.stopPropagation();
        } else {
          if ("onPress" in merged) {
            const onPress = merged.onPress;
            if (onPress != null) {
              onPress(preventDefault);
            }
          }
          if (!preventDefault.defaultPrevented) {
            linkProps.onPress(preventDefault);
          }
        }
      }}
      style={items}
    />
  );
};
