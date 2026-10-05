// discord_common/js/packages/transition-group/TransitionGroup.tsx
import react2 from "TransitionChildMapping.tsx";
import _objectWithoutProperties from "../../../../_runtime/metro/00109__objectWithoutProperties.js";
import react from "../../../../_runtime/00019_react.js";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require;

function _toPropertyKey(obj) {
  let StringResult = obj;
  if (typeof obj === "object") {
    StringResult = obj;
    if (StringResult) {
      const _Symbol = Symbol;
      if (undefined !== obj[Symbol.toPrimitive]) {
        const callResult = obj[Symbol.toPrimitive].call(obj[Symbol.toPrimitive], "string");
        StringResult = callResult;
        if (typeof callResult === "object") {
          const _TypeError = TypeError;
          const self = this;
          const self2 = this;
          const typeError = new TypeError("@@toPrimitive must return a primitive value.");
          throw typeError;
        }
      } else {
        const _String = String;
        StringResult = String(obj);
      }
    }
  }
  let text = StringResult;
  if (typeof StringResult !== "symbol") {
    text = `${tmp}`;
  }
  return text;
}
const Component = react.Component;
class TransitionGroup extends Component {
  constructor(children) {
    let obj2;
    const tmp2 = new TransitionGroup(children, new.target, tmp, children);
    let closure_0 = tmp2;
    tmp2._keyChildMapping = {};
    tmp2.addChildRef = function addChildRef(key10011, arg1) {
      _keyChildMapping._keyChildMapping[key10011] = arg1;
    };
    const obj = { children: obj2.getChildMapping(children.children), firstRender: true };
    tmp2.state = obj;
    obj2 = react2;
    tmp2._currentlyTransitioningKeys = new Set();
    tmp2._keysToEnter = [];
    tmp2._keysToLeave = [];
    tmp2._isMounted = false;
    new Set();
    return tmp2;
  }
  static getDerivedStateFromProps(children, arg1) {
    let firstRender;
    ({ children, firstRender } = arg1);
    const obj = react2;
    const childMapping = obj.getChildMapping(children.children);
    let children1 = childMapping;
    if (!firstRender) {
      const tmpResult = react2;
      children1 = tmpResult.mergeChildMappings(children, childMapping);
    }
    return { children: children1, firstRender: false };
  }
  componentDidMount() {
    const self = this;
    this._isMounted = true;
    const children = this.state.children;
    if (this.props.transitionAppear) {
      for (const key10008 in children) {
        if (!children[key10008]) {
          continue;
        } else {
          let performAppearResult = self.performAppear(key10008);
          continue;
        }
        continue;
      }
    }
  }
  componentWillUnmount() {
    this._isMounted = false;
    this._keyChildMapping = {};
    this.state.children = {};
  }
  componentDidUpdate(children, children2) {
    const self = this;
    if (children.children === this.props.children) {
      if (self._keysToEnter.length > 0) {
        const _keysToEnter = self._keysToEnter;
        self._keysToEnter = [];
        const item = _keysToEnter.forEach(self.performEnter, self);
      }
      if (self._keysToLeave.length > 0) {
        const _keysToLeave = self._keysToLeave;
        self._keysToLeave = [];
        const item1 = _keysToLeave.forEach(self.performLeave, self);
      }
    }
    const obj = react2;
    const childMapping = obj.getChildMapping(self.props.children);
    children = children2.children;
    if (self.props.transitionEnter) {
      self._enqueueTransitions(childMapping, children, self._keysToEnter);
    } else if (self._keysToEnter.length > 0) {
      self._keysToEnter = [];
    }
    const _enqueueTransitions = self._enqueueTransitions;
    if (self.props.transitionLeave) {
      _enqueueTransitions(children, childMapping, self._keysToLeave);
    } else {
      const items = [];
      _enqueueTransitions(children, childMapping, items);
      const length = items.length;
      const tmpResult = react2;
      const mergeChildMappingsResult = tmpResult.mergeChildMappings(children, childMapping);
      for (let num4 = 0; num4 < length; num4 = num4 + 1) {
        delete tmp6[arr[num4]];
      }
      if (self._isMounted) {
        const obj2 = { children: mergeChildMappingsResult };
        self.setState(obj2);
      }
      if (self._keysToLeave.length > 0) {
        self._keysToLeave = [];
      }
    }
  }
  _enqueueTransitions(children, childMapping, _keysToEnter) {
    for (const key10006 in children) {
      let hasOwnPropertyResult = childMapping && childMapping.hasOwnProperty(key10006);
      let hasItem = !children[key10006] || hasOwnPropertyResult;
      if (!hasItem) {
        let _currentlyTransitioningKeys = tmp._currentlyTransitioningKeys;
        hasItem = _currentlyTransitioningKeys.has(key10006);
      }
      if (hasItem) {
        continue;
      } else {
        let arr = _keysToEnter.push(key10006);
        continue;
      }
      continue;
    }
  }
  _perform(key10008, componentWillAppear, componentDidAppear) {
    let flag;
    const self = this;
    let closure_1 = key10008;
    let closure_2 = componentDidAppear;
    if (flag === undefined) {
      flag = false;
    }
    const _currentlyTransitioningKeys = self._currentlyTransitioningKeys;
    _currentlyTransitioningKeys.add(key10008);
    if (null != self._keyChildMapping[key10008]) {
      if (null != self._keyChildMapping[key10008][componentWillAppear]) {
        self._keyChildMapping[key10008][componentWillAppear](function callback() {
          return self._handleDonePerform(key10008, componentDidAppear, flag);
        });
      }
    }
    self._handleDonePerform(key10008, componentDidAppear, flag);
  }
  _handleDonePerform(key10008, componentDidAppear) {
    _require = key10008;
    const self = this;
    const tmp2 = null != this._keyChildMapping[key10008] && null != this._keyChildMapping[key10008][componentDidAppear];
    if (tmp2) {
      this._keyChildMapping[key10008][componentDidAppear]();
    }
    const _currentlyTransitioningKeys = self._currentlyTransitioningKeys;
    _currentlyTransitioningKeys.delete(key10008);
    let obj = require("react");
    const childMapping = obj.getChildMapping(self.props.children);
    if (flag) {
      if (null != childMapping) {
        if (childMapping.hasOwnProperty(key10008)) {
          self.performEnter(key10008);
        }
      }
      self.setState((children) => {
        let items;
        const obj = { children: _objectWithoutProperties(children.children, items.map(_toPropertyKey)) };
        items = [key10008];
        return obj;
      });
    } else {
      const tmp5 = null != childMapping && childMapping.hasOwnProperty(key10008);
      if (!tmp5) {
        self.performLeave(key10008);
      }
    }
  }
  performAppear(key10008) {
    this._perform(key10008, "componentWillAppear", "componentDidAppear");
  }
  performEnter(key10008) {
    this._perform(key10008, "componentWillEnter", "componentDidEnter");
  }
  performLeave(key10008) {
    this._perform(key10008, "componentWillLeave", "componentDidLeave", true);
  }
  render() {
    const self = this;
    const props = this.props;
    const childFactory = props.childFactory;
    const children = this.state.children;
    const items = [];
    const component = props.component;
    for (const key10011 in children) {
      let tmp9 = children[key10011];
      let isValidElementResult = null != tmp9 && react.isValidElement(tmp9);
      if (!isValidElementResult) {
        continue;
      } else {
        let childFactoryResult = tmp9;
        let push = items.push;
        let cloneElement = react.cloneElement;
        if (null != childFactory) {
          childFactoryResult = childFactory(tmp9);
        }
        let obj = {
          ref(arg0) {
            return _require.addChildRef(key10011, arg0);
          },
          key: key10011,
        };
        let arr = push(cloneElement(childFactoryResult, obj));
        continue;
      }
      continue;
    }
    const merged = Object.assign(this.props);
    const keys = Object.keys(TransitionGroup.defaultProps);
    const item = keys.forEach((item) => {
      delete obj2[item];
      return tmp;
    });
    return <component>{items}</component>;
  }
}
const prototype = TransitionGroup.prototype;
TransitionGroup.defaultProps = {
  component: "span",
  transitionAppear: true,
  transitionLeave: true,
  transitionEnter: true,
  childFactory: null,
};
const result = size.fileFinishedImporting("../discord_common/js/packages/transition-group/TransitionGroup.tsx");

export { TransitionGroup };
