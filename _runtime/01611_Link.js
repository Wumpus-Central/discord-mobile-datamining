// _runtime/01611_Link.js
import noop from "noop";
import get_ActivityIndicator from "get ActivityIndicator";

let Platform;
let c3;
const require = arg1;
({ Platform, Text: c3 } = get_ActivityIndicator);

export const Link = function Link(arg0) {
  let action;
  let colors;
  let fonts;
  let href;
  let params;
  let screen;
  let style;
  ({ screen, params, action, href, style } = arg0);
  const merged = Object.assign(arg0, Object.create(null));
  let linkProps;
  let obj = merged(linkProps[2]);
  linkProps = obj.useLinkProps({ screen, params, action, href });
  const theme = merged(linkProps[3]).useTheme();
  obj = {};
  ({ colors, fonts } = theme);
  const merged1 = Object.assign(linkProps);
  const merged2 = Object.assign(merged);
  obj.onPress = function onPress(preventDefault) {
    if (merged.disabled) {
      preventDefault.preventDefault();
      preventDefault.stopPropagation();
    } else {
      if ("onPress" in tmp) {
        const onPress = tmp.onPress;
        if (onPress != null) {
          onPress(preventDefault);
        }
      }
      if (!preventDefault.defaultPrevented) {
        linkProps.onPress(preventDefault);
      }
    }
  };
  obj = { color: colors.primary };
  const items = [obj, fonts.regular, style];
  obj.style = items;
  return <closure_3 color={colors.primary} />;
};