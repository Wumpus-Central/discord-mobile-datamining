import { ScrollView } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";
import importAllResult from "noop";

const require = arg1;
let obj = { container: null };
obj = { backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW, padding: require("Themes").space.PX_16 };
obj[0] = obj;
let closure_5 = createCacheKey.createStyles(obj);
const memoResult = require("noop").memo(function DevToolsPerformanceTestingScreen() {
  let obj = _require(1480);
  _require = obj.useNavigation();
  obj = { style: callback().container, contentContainerStyle: null, children: null };
  obj = { paddingBottom: null };
  obj[0] = importDefault(1581)().bottom + importDefault(712).space.PX_16;
  obj[1] = obj;
  const obj1 = { hasIcons: true, children: null };
  const entries = Object.entries(_require(13752).PerformanceTestingScreens);
  obj1[1] = entries.map((arg0) => {
    let tmp;
    [tmp, ] = arg0;
    let obj = { label: tmp2, icon: null, arrow: true, onPress: null };
    obj[1] = outer1_4(callback(outer1_2[9]).TableRow.Icon, { IconComponent: tmp3 });
    obj[3] = function onPress() {
      let arr = outer1_0;
      if (null != outer1_0.push) {
        arr = arr.push(callback);
      } else {
        let obj = callback(outer2_2[10]);
        obj = { screenKey: null };
        obj[0] = callback;
        obj.navigateToDevTools(obj);
      }
    };
    return outer1_4(callback(outer1_2[9]).TableRow, obj, tmp);
  });
  obj[2] = jsx(_require(5649).TableRowGroup, { hasIcons: true, children: null });
  return <ScrollView paddingBottom={null} />;
});
const result = require("jsxProd").fileFinishedImporting("modules/devtools/native/components/screens/DevToolsPerformanceTestingScreen.tsx");

export default memoResult;