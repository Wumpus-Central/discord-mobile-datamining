// === Module 8895: Carousel ===

// Module 8895 (Carousel)
import nativeDefault from "native" /* 587 */;
import native from "native" /* 1188 */;
import native2 from "native" /* 4595 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import size from "module_2" /* 2 */;

let c2;
let c3;
let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
({ View: c2, ScrollView: c3 } = react_native);
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let obj = { container: { alignItems: "center" }, carouselContentWrapper: { flexDirection: "row" }, pageIndicator: { flexDirection: "row", justifyContent: "space-around", alignItems: "center" }, activeIndicator: obj2, inactiveIndicator: obj3 };
obj2 = { color: nativeDefault.colors.ICON_STRONG };
const createLegacyClassComponentStyles = createStyles.createLegacyClassComponentStyles;
obj3 = { color: nativeDefault.colors.ICON_SUBTLE };
const metroRequire = createLegacyClassComponentStyles(obj);
const Component = react.Component;
class PageIndicator extends Component {
  render() {
    let indicatorSpace;
    let items2;
    let pageIndicatorStyle;
    const tmp = closure_6(this.context);
    const props = this.props;
    const count = props.count;
    const items = [];
    let num = 0;
    ({ indicatorSpace, pageIndicatorStyle } = props);
    if (0 < count) {
      do {
        let obj = { fontSize: tmp3 };
        let items1 = [obj, ];
        let obj2 = { style: items1, children: "\u2022" };
        items1[1] = num === tmp2 ? tmp.activeIndicator : tmp.inactiveIndicator;
        let arr = items.push(React3(native.LegacyText, obj2, num));
        num = num + 1;
      } while (num < count);
    }
    const obj3 = { style: items2, children: items };
    items2 = [tmp.pageIndicator, { width: count * indicatorSpace }, pageIndicatorStyle];
    return React3(React2, obj3);
  }
}
const prototype = PageIndicator.prototype;
PageIndicator.contextType = native2.ThemeContext;
PageIndicator.defaultProps = { indicatorSpace: 10, indicatorSize: 20 };
const Component2 = react.Component;
class Carousel extends Component2 {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
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
  render() {
    let items;
    let items1;
    let obj4;
    const self = this;
    const tmp = closure_6(this.context);
    let tmp2 = true === this.props.pageIndictor;
    const pageIndicatorStyle = this.props.pageIndicatorStyle;
    if (tmp2) {
      tmp2 = length > 1;
    }
    let tmp3;
    if (tmp2) {
      const obj = { count: this.props.children.length, activeIndex: self.state.activeIndex, pageIndicatorStyle };
      tmp3 = React3(PageIndicator, obj);
    }
    let scrollViewProps = self.props.scrollViewProps;
    if (scrollViewProps == null) {
      scrollViewProps = {};
    }
    const obj2 = { style: items, children: items1 };
    items = [tmp.container, self.props.style];
    const obj3 = { automaticallyAdjustContentInsets: false, horizontal: true, pagingEnabled: true, scrollEnabled: this.props.children.length > 1, nestedScrollEnabled: true, showsHorizontalScrollIndicator: false, onMomentumScrollEnd: self.onAnimationEnd, children: React3(React2, obj4) };
    const merged = Object.assign(scrollViewProps);
    obj4 = {
      style: tmp.carouselContentWrapper,
      onStartShouldSetResponder() {
        return true;
      },
      children: self.props.children
    };
    items1 = [React3(_false, obj3), tmp3];
    return hasOwnProperty(React2, obj2);
  }
}
const prototype2 = Carousel.prototype;
Carousel.contextType = native2.ThemeContext;
Carousel.defaultProps = { pageIndictor: true, width: 375 };
const result = size.fileFinishedImporting("components_native/common/Carousel.tsx");

export default Carousel;