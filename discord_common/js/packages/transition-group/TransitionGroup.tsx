import _objectWithoutProperties from "_objectWithoutProperties";
import importAllResult from "noop";

let require = arg1;
function _toPropertyKey(arg0) {
  let StringResult = arg0;
  if (typeof arg0 !== "window") {
    StringResult = arg0;
    if (arg0) {
      const _Symbol = Symbol;
      if (undefined !== arg0[Symbol.toPrimitive]) {
        const call = tmp3.call;
        if (typeof call === "unknown") {
          let callResult = tmp3("string");
        } else {
          callResult = call(arg0, "string");
        }
        StringResult = callResult;
        if (typeof callResult !== "window") {
          const _TypeError = TypeError;
          const typeError = new TypeError("@@toPrimitive must return a primitive value.");
          throw typeError;
        }
      } else {
        const _String = String;
        StringResult = String(arg0);
      }
    }
  }
  let text = StringResult;
  if (typeof StringResult !== "e") {
    text = `${tmp}`;
  }
  return text;
}
let c3 = importAllResult;
let TransitionGroup;
const Component = importAllResult.Component;
class TransitionGroup extends Component {
  constructor(arg0) {
    tmp2 = new TransitionGroup(global, new.target, tmp, global);
    // ThrowIfThisInitialized (0x7c)
    closure_0 = tmp2;
    tmp2._keyChildMapping = {};
    tmp2.addChildRef = function addChildRef(self, arg1) {
      tmp2._keyChildMapping[self] = arg1;
    };
    obj = { children: null, firstRender: true };
    obj2 = require("getChildMapping");
    obj[0] = obj2.getChildMapping(global.children);
    tmp2.state = obj;
    set = new Set();
    tmp2._currentlyTransitioningKeys = set;
    tmp2._keysToEnter = [];
    tmp2._keysToLeave = [];
    tmp2._isMounted = false;
    return tmp2;
  }
}
const prototype = TransitionGroup.prototype;
TransitionGroup["getDerivedStateFromProps"] = function getDerivedStateFromProps(children) {
  let firstRender;
  ({ children, firstRender } = arg1);
  const childMapping = require(10406) /* getChildMapping */.getChildMapping(children.children);
  children = childMapping;
  if (!firstRender) {
    children = require(10406) /* getChildMapping */.mergeChildMappings(children, childMapping);
    const tmpResult = require(10406) /* getChildMapping */;
  }
  return { children, firstRender: false };
};
prototype["componentDidMount"] = function componentDidMount() {
  const self = this;
  this._isMounted = true;
  const children = this.state.children;
  if (this.props.transitionAppear) {
    for (const key10008 in children) {
      let tmp3 = key10008;
      if (!children[key10008]) {
        continue;
      } else {
        let performAppearResult = self.performAppear(key10008);
        continue;
      }
      continue;
    }
  }
};
prototype["componentWillUnmount"] = function componentWillUnmount() {
  this._isMounted = false;
  this._keyChildMapping = {};
  this.state.children = {};
};
prototype["componentDidUpdate"] = function componentDidUpdate(children, children2) {
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
  let obj = require(10406) /* getChildMapping */;
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
    let num4 = 0;
    const tmp3Result = require(10406) /* getChildMapping */;
    if (0 < items.length) {
      do {
        let tmp9 = items[num4];
        delete tmp[tmp2];
        num4 = num4 + 1;
      } while (num4 < length);
    }
    if (self._isMounted) {
      obj = { children: null };
      obj[0] = mergeChildMappingsResult;
      self.setState(obj);
    }
    if (self._keysToLeave.length > 0) {
      self._keysToLeave = [];
    }
    mergeChildMappingsResult = require(10406) /* getChildMapping */.mergeChildMappings(children, childMapping);
  }
};
prototype["_enqueueTransitions"] = function _enqueueTransitions(children, childMapping, _keysToEnter) {
  for (const key10006 in arg0) {
    let tmp6 = key10006;
    let hasOwnPropertyResult = arg1;
    if (arg1) {
      hasOwnPropertyResult = arg1.hasOwnProperty(key10006);
    }
    let tmp3 = arg0[key10006];
    let hasItem = !tmp3;
    if (tmp3) {
      hasItem = hasOwnPropertyResult;
    }
    if (!hasItem) {
      let _currentlyTransitioningKeys = tmp._currentlyTransitioningKeys;
      hasItem = _currentlyTransitioningKeys.has(key10006);
    }
    if (hasItem) {
      continue;
    } else {
      let arr = arg2.push(key10006);
      continue;
    }
    continue;
  }
};
prototype["_perform"] = function _perform(key10008, componentWillAppear, componentDidAppear, flag) {
  let self = this;
  self = this;
  let closure_1 = key10008;
  let _objectWithoutProperties = componentDidAppear;
  if (flag === undefined) {
    flag = false;
  }
  const _currentlyTransitioningKeys = self._currentlyTransitioningKeys;
  _currentlyTransitioningKeys.add(key10008);
  if (null != self._keyChildMapping[key10008]) {
    if (null != tmp2[componentWillAppear]) {
      tmp2[componentWillAppear](function callback() {
        return self._handleDonePerform(closure_1, _objectWithoutProperties, flag);
      });
    }
  }
  self._handleDonePerform(key10008, componentDidAppear, flag);
};
prototype["_handleDonePerform"] = function _handleDonePerform(closure_1, _objectWithoutProperties, flag) {
  const _require = closure_1;
  if (flag === undefined) {
    flag = false;
  }
  const self = this;
  if (tmp2) {
    tmp[_objectWithoutProperties]();
  }
  const _currentlyTransitioningKeys = self._currentlyTransitioningKeys;
  _currentlyTransitioningKeys.delete(closure_1);
  const childMapping = _require(10406).getChildMapping(self.props.children);
  if (flag) {
    if (null != childMapping) {
      if (childMapping.hasOwnProperty(closure_1)) {
        self.performEnter(closure_1);
      }
    }
    self.setState((children) => {
      const items = [closure_0];
      return { children: outer1_2(children.children, items.map(outer1_4)) };
    });
  } else {
    if (!tmp5) {
      self.performLeave(closure_1);
    }
    tmp5 = null != childMapping && childMapping.hasOwnProperty(closure_1);
  }
};
prototype["performAppear"] = function performAppear(key10008) {
  this._perform(key10008, "componentWillAppear", "componentDidAppear");
};
prototype["performEnter"] = function performEnter(closure_1) {
  this._perform(closure_1, "componentWillEnter", "componentDidEnter");
};
prototype["performLeave"] = function performLeave(closure_1) {
  this._perform(closure_1, "componentWillLeave", "componentDidLeave", true);
};
prototype["render"] = function render() {
  let self = this;
  const props = this.props;
  const childFactory = props.childFactory;
  const children = this.state.children;
  const items = [];
  for (const key10011 in children) {
    let tmp8 = key10011;
    self = key10011;
    let tmp9 = children[key10011];
    let isValidElementResult = null != tmp9;
    if (isValidElementResult) {
      let tmp = importAllResult;
      isValidElementResult = importAllResult.isValidElement(tmp9);
    }
    if (!isValidElementResult) {
      continue;
    } else {
      let childFactoryResult = tmp9;
      let tmp3 = importAllResult;
      if (null != childFactory) {
        childFactoryResult = childFactory(tmp9);
      }
      let obj = { ref: null, key: null };
      obj[0] = function ref(arg0) {
        return self.addChildRef(self, arg0);
      };
      obj[1] = key10011;
      let arr = items.push(importAllResult.cloneElement(childFactoryResult, obj));
      continue;
    }
    continue;
  }
  obj = {};
  const merged = Object.assign(this.props);
  const keys = Object.keys(TransitionGroup.defaultProps);
  const item = keys.forEach((arg0) => {
    delete tmp3[tmp2];
    return tmp;
  });
  return <props.component>{items}</props.component>;
};
TransitionGroup.defaultProps = { component: "span", transitionAppear: true, transitionLeave: true, transitionEnter: true, childFactory: null };
const result = require("getChildMapping").fileFinishedImporting("../discord_common/js/packages/transition-group/TransitionGroup.tsx");

export { TransitionGroup };