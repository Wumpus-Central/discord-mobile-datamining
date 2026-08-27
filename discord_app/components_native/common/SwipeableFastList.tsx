// === Module 10821: componentWillUnmount ===

// Module 10821 (componentWillUnmount)
import renderDefaultEmptyDefault from "renderDefaultEmpty" /* 7728 */;
import { jsx } from "jsxProd" /* 21 */;
import importAllResult from "noop" /* 19 */;

const Component = importAllResult.Component;
class SwipeableFastList extends Component {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    applyArgumentsResult._shouldBounceFirstRowOnMount = applyArgumentsResult.props.bounceFirstRowOnMount;
    applyArgumentsResult._openRowKey = null;
    applyArgumentsResult._refs = {};
    applyArgumentsResult._bounceTimeout = null;
    applyArgumentsResult.renderRow = function renderRow(arg0, arg1, arg2) {
      closure_1 = arg1;
      let props = applyArgumentsResult.props;
      const renderQuickActions = props.renderQuickActions;
      closure_3 = "" + arg0 + ":" + arg1;
      c4 = false;
      if (arg0._shouldBounceFirstRowOnMount) {
        arg0._shouldBounceFirstRowOnMount = false;
        c4 = true;
      }
      const obj = {
        renderRightActions() {
          return renderQuickActions(closure_0, closure_1);
        },
        ref(arg0) {
          closure_0._refs[closure_3] = arg0;
          if (tmp) {
            obj.bounceSwipeable(arg0);
            const props = obj.props;
            const onBounceSwipable = props.onBounceSwipable;
            if (onBounceSwipable != null) {
              onBounceSwipable();
            }
          }
        },
        overshootFriction: 8,
        onSwipeableWillOpen(View, arg1) {
          return closure_0.handleOpen(closure_3);
        },
        onSwipeableClose() {
          return closure_0.handleClose(closure_3);
        },
        children: props.renderItem(arg0, arg1, arg2)
      };
      return closure_1_2(arg0(closure_1_1[2]), obj);
    };
    applyArgumentsResult.handleScroll = function handleScroll(arg0) {
      applyArgumentsResult.closeOpenRow();
      const onScroll = applyArgumentsResult.props.onScroll;
      if (onScroll != null) {
        onScroll(arg0);
      }
    };
    return applyArgumentsResult;
  }
}
const prototype = SwipeableFastList.prototype;
prototype["componentWillUnmount"] = function componentWillUnmount() {
  if (null != this._bounceTimeout) {
    const _clearTimeout = clearTimeout;
    clearTimeout(tmp._bounceTimeout);
  }
};
prototype["bounceSwipeable"] = function bounceSwipeable(arg0) {
  let self = this;
  self = this;
  closure_0 = arg0;
  if (null != this._bounceTimeout) {
    const _clearTimeout = clearTimeout;
    clearTimeout(self._bounceTimeout);
  }
  self._bounceTimeout = setTimeout(() => {
    closure_0.openRight();
    self._bounceTimeout = setTimeout(() => {
      closure_0.close();
    }, 400);
  }, 700);
};
prototype["closeOpenRow"] = function closeOpenRow() {
  const self = this;
  if (null != this._openRowKey) {
    if (null != self._refs[self._openRowKey]) {
      self._refs[self._openRowKey].close();
      const obj = self._refs[self._openRowKey];
    }
    self._openRowKey = null;
  }
};
prototype["handleOpen"] = function handleOpen(_openRowKey) {
  this.closeOpenRow();
  this._openRowKey = _openRowKey;
};
prototype["handleClose"] = function handleClose(arg0) {
  if (this._openRowKey === arg0) {
    tmp._openRowKey = null;
  }
};
prototype["render"] = function render() {
  const obj = {};
  const merged = Object.assign(this.props);
  ({ handleScroll: obj.onScroll, renderRow: obj.renderItem } = this);
  return jsx(renderDefaultEmptyDefault, {});
};
SwipeableFastList.defaultProps = {
  bounceFirstRowOnMount: true,
  renderQuickActions(closure_0, closure_1) {
    return null;
  }
};
const result = require("set").fileFinishedImporting("components_native/common/SwipeableFastList.tsx");

export default SwipeableFastList;