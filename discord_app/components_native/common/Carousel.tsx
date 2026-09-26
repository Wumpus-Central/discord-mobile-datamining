// discord_app/components_native/common/Carousel.tsx
import nativeDefault from "../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../design/void/native.tsx";
import noop from "../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ View: c2, ScrollView: c3 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4836);
let obj2 = {
  container: { alignItems: "center" },
  carouselContentWrapper: { flexDirection: "row" },
  pageIndicator: { flexDirection: "row", justifyContent: "space-around", alignItems: "center" },
  activeIndicator: { color: nativeDefault.colors.ICON_STRONG },
  inactiveIndicator: null,
};
let obj3 = { color: nativeDefault.colors.ICON_STRONG };
obj2.inactiveIndicator = { color: nativeDefault.colors.ICON_SUBTLE };
let closure_6 = createStyles.createLegacyClassComponentStyles(obj2);
const Component = noop.Component;
class PageIndicator extends Component {}
PageIndicator.prototype["render"] = function render() {
  const tmp = closure_6(this.context);
  const props = this.props;
  const count = props.count;
  const items = [];
  let num = 0;
  ({ indicatorSpace, pageIndicatorStyle } = props);
  if (0 < count) {
    do {
      let obj = { fontSize: tmp3 };
      let items1 = [obj];
      let obj2 = { style: null, children: "\u2022" };
      items1[1] = num === tmp2 ? tmp.activeIndicator : tmp.inactiveIndicator;
      obj2.style = items1;
      let arr = items.push(React4(native.LegacyText, obj2, num));
      num = num + 1;
    } while (num < count);
  }
  const obj3 = { style: null, children: items };
  const items2 = [tmp.pageIndicator, { width: count * indicatorSpace }, pageIndicatorStyle];
  obj3.style = items2;
  return React4(React2, obj3);
};
PageIndicator.contextType = fn(4540).ThemeContext;
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
    const obj = {
      count: length,
      activeIndex: self.state.activeIndex,
      pageIndicatorStyle: this.props.pageIndicatorStyle,
    };
    tmp3 = React4(PageIndicator, obj);
  }
  let scrollViewProps = self.props.scrollViewProps;
  if (scrollViewProps == null) {
    scrollViewProps = {};
  }
  const obj2 = { style: null, children: null };
  const items = [tmp.container, self.props.style];
  obj2.style = items;
  const obj3 = {
    automaticallyAdjustContentInsets: false,
    horizontal: true,
    pagingEnabled: true,
    scrollEnabled: this.props.children.length > 1,
    nestedScrollEnabled: true,
    showsHorizontalScrollIndicator: false,
    onMomentumScrollEnd: self.onAnimationEnd,
  };
  const merged = Object.assign(scrollViewProps);
  obj3.children = React4(React2, {
    style: tmp.carouselContentWrapper,
    onStartShouldSetResponder() {
      return true;
    },
    children: self.props.children,
  });
  const items1 = [React4(React3, obj3), tmp3];
  obj2.children = items1;
  return hasOwnProperty(React2, obj2);
};
Carousel.contextType = fn(4540).ThemeContext;
Carousel.defaultProps = { pageIndictor: true, width: 375 };
const size = fn(2);
const result = size.fileFinishedImporting("components_native/common/Carousel.tsx");

export default Carousel;
