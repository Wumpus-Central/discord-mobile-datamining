// === Module 1556: Link ===

// Module 1556 (Link)
import noop from "noop";
import get_ActivityIndicator from "get ActivityIndicator";

let Platform;
let c3;
({ Platform, Text: c3 } = get_ActivityIndicator);

export default function Link(arg0) {
  let action;
  let to;
  ({ to, action } = arg0);
  const merged = Object.assign(arg0, Object.create(null));
  let dependencyMap;
  const tmp2 = merged(1557)({ to, action });
  dependencyMap = tmp2;
  const obj = {};
  const merged1 = Object.assign(tmp2);
  const merged2 = Object.assign(merged);
  obj.onPress = function onPress(arg0) {
    if ("onPress" in merged) {
      const onPress = merged.onPress;
      if (onPress != null) {
        onPress(arg0);
      }
    }
    _undefined.onPress(arg0);
  };
  return <closure_3 />;
};