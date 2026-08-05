// _runtime/08387_useNavigationHeaderAccessibilityRefreshKey.js
import asyncGeneratorStep from "asyncGeneratorStep";
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import { AccessibilityInfo } from "get ActivityIndicator";

const require = arg1;

export default function useNavigationHeaderAccessibilityRefreshKey() {
  navigation = navigation(1481).useNavigation();
  const tmp2 = callback(React.useState(0), 2);
  const dependencyMap = tmp2[1];
  const items = [navigation];
  const effect = React.useEffect(() => navigation.addListener("focus", outer1_2(function*() {
    if (c3 === 2) {
      c3 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c3 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            const callback = tmp4;
            let closure_0 = tmp4;
            c2 = 1;
            c3 = 1;
            const obj1 = { value: null, done: false };
            obj1[0] = outer1_5.isScreenReaderEnabled();
            return obj1;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c3 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          if (arg1) {
            callback((arg0) => arg0 + 1);
          }
          c3 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp9) {
        c3 = tmp;
        throw tmp9;
      }
    }
  })), items);
  return "key-" + tmp2[0];
};