// _runtime/05420_gestureHandlerRootHOC.js
import "noop";
import { StyleSheet } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import { getStatics } from "04118_getStatics.js";

const styles = StyleSheet.create({ container: { flex: 1 } });

export default function gestureHandlerRootHOC(displayName) {
  const importDefault = displayName;
  const dependencyMap = arg1;
  class Wrapper {
    constructor(arg0) {
      obj = { style: items, children: null };
      items = [, ];
      items[0] = outer1_3.container;
      items[1] = closure_1;
      obj = {};
      tmp = closure_0(closure_1[3]);
      merged = Object.assign(displayName);
      obj[1] = outer1_2(closure_0, obj);
      return outer1_2(tmp, obj);
    }
  }
  Wrapper.displayName = "gestureHandlerRootHOC(" + displayName.displayName || displayName.name + ")";
  getStatics(Wrapper, displayName);
  return Wrapper;
};