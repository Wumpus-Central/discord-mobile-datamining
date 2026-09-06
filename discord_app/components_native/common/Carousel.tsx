// === Module 9361: Carousel ===

// Module 9361 (Carousel)
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1178 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: c2, ScrollView: c3 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
fn(4560);
let createStyles = { container: { alignItems: "center" }, carouselContentWrapper: { flexDirection: "row" }, pageIndicator: { flexDirection: "row", justifyContent: "space-around", alignItems: "center" }, activeIndicator: null, inactiveIndicator: null };
createStyles = { color: nativeDefault.colors.ICON_STRONG };
createStyles.activeIndicator = createStyles;
createStyles.inactiveIndicator = { color: nativeDefault.colors.ICON_SUBTLE };
let closure_6 = createStyles.createLegacyClassComponentStyles(createStyles);
const Component = noop.Component;
class PageIndicator extends Component {
}
PageIndicator.prototype["render"] = function render() {
  const tmp = closure_6(this.context);
  const props = this.props;
  const count = props.count;
  const items = [];
  let num = 0;
  ({ indicatorSpace, pageIndicatorStyle } = props);
  if (0 < count) {
    do {
      let tmp4 = React4;
      let obj = { fontSize: tmp3 };
      let items1 = [obj, ];
      obj = { style: null, children: "\u2022" };
      items1[1] = num === tmp2 ? tmp.activeIndicator : tmp.inactiveIndicator;
      obj.style = items1;
      let arr = items.push(tmp4(native.LegacyText, obj, num));
      num = num + 1;
    } while (num < count);
  }
  obj = { style: null, children: items };
  const items2 = [tmp.pageIndicator, { width: count * indicatorSpace }, pageIndicatorStyle];
  obj.style = items2;
  return React4(React2, obj);
};
PageIndicator.contextType = fn(4271).ThemeContext;
PageIndicator.defaultProps = { indicatorSpace: 10, indicatorSize: 20 };
const Component2 = noop.Component;
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
  const tmp = closure_6(this.context);
  let tmp2 = true === this.props.pageIndictor;
  if (tmp2) {
    tmp2 = length > 1;
  }
  let tmp3;
  if (tmp2) {
    let obj = { count: length, activeIndex: self.state.activeIndex, pageIndicatorStyle: this.props.pageIndicatorStyle };
    tmp3 = React4(PageIndicator, obj);
  }
  let scrollViewProps = self.props.scrollViewProps;
  if (scrollViewProps == null) {
    scrollViewProps = {};
  }
  obj = { style: null, children: null };
  const items = [tmp.container, self.props.style];
  obj.style = items;
  obj = { automaticallyAdjustContentInsets: false, horizontal: true, pagingEnabled: true, scrollEnabled: length > 1, nestedScrollEnabled: true, showsHorizontalScrollIndicator: false, onMomentumScrollEnd: self.onAnimationEnd };
  const merged = Object.assign(scrollViewProps);
  obj.children = React4(React2, {
    style: tmp.carouselContentWrapper,
    onStartShouldSetResponder() {
      return true;
    },
    children: self.props.children
  });
  const items1 = [React4(React3, obj), tmp3];
  obj.children = items1;
  return hasOwnProperty(React2, obj);
};
Carousel.contextType = fn(4271).ThemeContext;
Carousel.defaultProps = { pageIndictor: true, width: 375 };
const size = fn(2);
const result = size.fileFinishedImporting("components_native/common/Carousel.tsx");

export default Carousel;