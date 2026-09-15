// _runtime/metro/01596__.js
import BaseNavigationContainer from "../01487_BaseNavigationContainer.js";
import clone from "../01597_clone.js";
import noop from "00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ Platform, Text: c3 } = get_ActivityIndicator);

export const Link = function Link(arg0) {
  ({ screen, params, action, href, style } = arg0);
  const merged = Object.assign(arg0, Object.assign({ screen: 0, params: 0, action: 0, href: 0, style: 0, target: 0 }));
  const linkProps = clone.useLinkProps({ screen, params, action, href });
  const theme = BaseNavigationContainer.useTheme();
  const obj3 = {};
  ({ colors, fonts } = theme);
  const merged1 = Object.assign(linkProps);
  const merged2 = Object.assign(merged);
  obj3.onPress = function onPress(preventDefault) {
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
  };
  const items = [{ color: colors.primary }, fonts.regular, style];
  obj3.style = items;
  return <React3 />;
};
