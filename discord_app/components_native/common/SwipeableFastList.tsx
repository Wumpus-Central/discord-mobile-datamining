// === Module 9981: SwipeableFastList ===

// Module 9981 (SwipeableFastList)
import Fragment from "Fragment" /* 21 */;
import FastListDefault from "FastList" /* 6569 */;
import SwipeDirectionDefault from "SwipeDirection" /* 9982 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let importDefault;

const jsx = Fragment.jsx;
const Component = react.Component;
class SwipeableFastList extends Component {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    importDefault = applyArgumentsResult;
    applyArgumentsResult._shouldBounceFirstRowOnMount = applyArgumentsResult.props.bounceFirstRowOnMount;
    applyArgumentsResult._openRowKey = null;
    applyArgumentsResult._refs = {};
    applyArgumentsResult._bounceTimeout = null;
    applyArgumentsResult.renderRow = function renderRow(arg0, arg1, arg2) {
      let closure_0;
      importDefault = arg0;
      let closure_1 = arg1;
      let props = importDefault.props;
      const renderQuickActions = props.renderQuickActions;
      let tmp = importDefault;
      const renderItem = props.renderItem;
      let closure_3 = "" + arg0 + ":" + arg1;
      let c4 = false;
      if (importDefault._shouldBounceFirstRowOnMount) {
        tmp._shouldBounceFirstRowOnMount = false;
        c4 = true;
      }
      SwipeDirectionDefault;
      return <tmp2 renderRightActions={function renderRightActions() {
        return renderQuickActions(closure_0, closure_1);
      }} ref={function ref(arg0) {
        importDefault._refs[closure_3] = arg0;
        const tmp = null != arg0 && c4;
        if (tmp) {
          importDefault.bounceSwipeable(arg0);
          const props = importDefault.props;
          const onBounceSwipable = props.onBounceSwipable;
          if (onBounceSwipable != null) {
            onBounceSwipable();
          }
        }
      }} overshootFriction={8} onSwipeableWillOpen={function onSwipeableWillOpen() {
        return importDefault.handleOpen(closure_3);
      }} onSwipeableClose={function onSwipeableClose() {
        return importDefault.handleClose(closure_3);
      }}>{renderItem(arg0, arg1, arg2)}</tmp2>;
    };
    applyArgumentsResult.handleScroll = function handleScroll(arg0) {
      importDefault.closeOpenRow();
      const onScroll = importDefault.props.onScroll;
      if (onScroll != null) {
        onScroll(arg0);
      }
    };
    return applyArgumentsResult;
  }
  componentWillUnmount() {
    if (null != this._bounceTimeout) {
      const _clearTimeout = clearTimeout;
      clearTimeout(tmp._bounceTimeout);
    }
  }
  bounceSwipeable(arg0) {
    const self = this;
    let closure_0 = arg0;
    if (null != this._bounceTimeout) {
      const _clearTimeout = clearTimeout;
      clearTimeout(self._bounceTimeout);
    }
    self._bounceTimeout = setTimeout(() => {
      closure_0.openRight();
      self._bounceTimeout = setTimeout(() => {
        closure_1_0.close();
      }, 400);
    }, 700);
  }
  closeOpenRow() {
    const self = this;
    if (null != this._openRowKey) {
      if (null != self._refs[self._openRowKey]) {
        const obj = self._refs[self._openRowKey];
        obj.close();
      }
      self._openRowKey = null;
    }
  }
  handleOpen(_openRowKey) {
    this.closeOpenRow();
    this._openRowKey = _openRowKey;
  }
  handleClose(arg0) {
    if (this._openRowKey === arg0) {
      tmp._openRowKey = null;
    }
  }
  render() {
    const obj = {};
    FastListDefault;
    const merged = Object.assign(this.props);
    ({ handleScroll: obj.onScroll, renderRow: obj.renderItem } = this);
    return <tmp />;
  }
}
const prototype = SwipeableFastList.prototype;
SwipeableFastList.defaultProps = {
  bounceFirstRowOnMount: true,
  renderQuickActions() {
    return null;
  }
};
const result = size.fileFinishedImporting("components_native/common/SwipeableFastList.tsx");

export default SwipeableFastList;