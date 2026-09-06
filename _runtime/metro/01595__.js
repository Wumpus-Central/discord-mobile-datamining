// === Module 1595: ? ===

// Module 1595
import BaseNavigationContainer from "BaseNavigationContainer" /* 1486 */;
import clone from "clone" /* 1596 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ Platform, Text: c3 } = get_ActivityIndicator);

export const Link = function Link(arg0) {
  ({ screen, params, action, href, style } = arg0);
  const merged = Object.assign(arg0, Object.assign({ screen: 0, params: 0, action: 0, href: 0, style: 0, target: 0 }));
  let obj = clone;
  const linkProps = obj.useLinkProps({ screen, params, action, href });
  const theme = BaseNavigationContainer.useTheme();
  obj = {};
  ({ colors, fonts } = theme);
  const merged1 = Object.assign(linkProps);
  const merged2 = Object.assign(merged);
  obj.onPress = function onPress(preventDefault) {
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
  obj = { color: colors.primary };
  const items = [obj, fonts.regular, style];
  obj.style = items;
  return <React3 color={colors.primary} />;
};