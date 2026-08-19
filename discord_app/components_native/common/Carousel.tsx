// === Module 9368: render ===

// Module 9368 (render)
import ThemesDefault from "Themes" /* 712 */;
import Button from "Button" /* 1297 */;
import importAllResult from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";

require = fn;
({ View: obj1, ScrollView: c3 } = get_ActivityIndicator);
({ jsx: c4, jsxs: c5 } = jsxProd);
const createCacheKey = { color: ThemesDefault.colors.ICON_STRONG };
createCacheKey[3] = createCacheKey;
createCacheKey[4] = { color: ThemesDefault.colors.ICON_SUBTLE };
let closure_6 = createCacheKey.createLegacyClassComponentStyles(createCacheKey);
const Component = importAllResult.Component;
class PageIndicator extends Component {
}
PageIndicator.prototype["render"] = function render() {
  const tmp = callback3(this.context);
  const props = this.props;
  const count = props.count;
  const children = [];
  let num = 0;
  ({ indicatorSpace, pageIndicatorStyle } = props);
  if (0 < count) {
    do {
      let obj = { fontSize: null };
      obj[0] = tmp3;
      let items1 = [obj, ];
      obj = { style: null, children: "\u2022" };
      items1[1] = num === tmp2 ? tmp.activeIndicator : tmp.inactiveIndicator;
      obj[0] = items1;
      let arr = children.push(callback(Button.LegacyText, obj, num));
      num = num + 1;
    } while (num < count);
  }
  const style = [tmp.pageIndicator, { width: count * indicatorSpace }, pageIndicatorStyle];
  return callback(closure_2, { style, children });
};
PageIndicator.contextType = require("ManaContext").ThemeContext;
PageIndicator.defaultProps = { indicatorSpace: 10, indicatorSize: 20 };
const Component2 = importAllResult.Component;
class Carousel extends Component2 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    applyArgumentsResult.state = { activeIndex: 0 };
    applyArgumentsResult.onAnimationEnd = function onAnimationEnd(nativeEvent) {
      const rounded = Math.round(nativeEvent.nativeEvent.contentOffset.x / applyArgumentsResult.props.width);
      applyArgumentsResult.setState({ activeIndex: rounded });
      const props = applyArgumentsResult.props;
      const onPageChange = props.onPageChange;
      if (onPageChange != null) {
        onPageChange(rounded);
      }
    };
    return applyArgumentsResult;
  }
}
Carousel.prototype["render"] = function render() {
  const self = this;
  const tmp = callback3(this.context);
  let tmp2 = true === this.props.pageIndictor;
  if (tmp2) {
    tmp2 = length > 1;
  }
  let tmp3;
  if (tmp2) {
    let obj = { count: null, activeIndex: null, pageIndicatorStyle: null };
    obj[0] = length;
    obj[1] = self.state.activeIndex;
    obj[2] = this.props.pageIndicatorStyle;
    tmp3 = callback(PageIndicator, obj);
  }
  let scrollViewProps = self.props.scrollViewProps;
  if (scrollViewProps == null) {
    scrollViewProps = {};
  }
  const items = [tmp.container, self.props.style];
  obj = { automaticallyAdjustContentInsets: false, horizontal: true, pagingEnabled: true, scrollEnabled: length > 1, nestedScrollEnabled: true, showsHorizontalScrollIndicator: false, onMomentumScrollEnd: self.onAnimationEnd };
  const merged = Object.assign(scrollViewProps);
  obj.children = callback(closure_2, {
    style: tmp.carouselContentWrapper,
    onStartShouldSetResponder() {
      return true;
    },
    children: self.props.children
  });
  const items1 = [callback(closure_3, obj), tmp3];
  obj[1] = items1;
  return callback2(closure_2, obj);
};
Carousel.contextType = require("ManaContext").ThemeContext;
Carousel.defaultProps = { pageIndictor: true, width: 375 };
const result = require("obj132").fileFinishedImporting("components_native/common/Carousel.tsx");

export default Carousel;