// discord_common/js/packages/transition-group/TransitionGroup.tsx
import TransitionChildMapping from "TransitionChildMapping.tsx";
import _objectWithoutProperties from "../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
function _toPropertyKey(obj) {
  let StringResult = obj;
  if (typeof obj === "object") {
    StringResult = obj;
    if (obj) {
      const _Symbol = Symbol;
      if (undefined !== obj[Symbol.toPrimitive]) {
        const call = tmp3.call;
        if (typeof call === "unknown") {
          let callResult = tmp3("string");
        } else {
          callResult = call(obj, "string");
        }
        StringResult = callResult;
        if (typeof callResult === "object") {
          const _TypeError = TypeError;
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
let TransitionGroup;
const Component = noop.Component;
class TransitionGroup extends Component {
  constructor(arg0) {
    tmp2 = new TransitionGroup(global, new.target, tmp, global);
    closure_0 = tmp2;
    tmp2._keyChildMapping = {};
    tmp2.addChildRef = function addChildRef(key10011, arg1) {
      _keyChildMapping._keyChildMapping[key10011] = arg1;
    };
    obj = { children: null, firstRender: true };
    obj2 = closure_0(closure_1[2]);
    obj.children = obj2.getChildMapping(global.children);
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
TransitionGroup["getDerivedStateFromProps"] = function getDerivedStateFromProps(children, arg1) {
  ({ children, firstRender } = arg1);
  const childMapping = TransitionChildMapping.getChildMapping(children.children);
  children = childMapping;
  if (!firstRender) {
    children = TransitionChildMapping.mergeChildMappings(children, childMapping);
    const tmpResult = TransitionChildMapping;
  }
  return { children, firstRender: false };
};
prototype["componentDidMount"] = function componentDidMount() {
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
  let obj = TransitionChildMapping;
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
    const tmp3Result = TransitionChildMapping;
    if (0 < items.length) {
      do {
        delete tmp[tmp2];
        num4 = num4 + 1;
      } while (num4 < length);
    }
    if (self._isMounted) {
      obj = { children: mergeChildMappingsResult };
      self.setState(obj);
    }
    if (self._keysToLeave.length > 0) {
      self._keysToLeave = [];
    }
    mergeChildMappingsResult = TransitionChildMapping.mergeChildMappings(children, childMapping);
  }
};
prototype["_enqueueTransitions"] = function _enqueueTransitions(children, childMapping, _keysToEnter) {
  for (const key10006 in arg0) {
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
prototype["_perform"] = function _perform(key10008, componentWillAppear, componentDidAppear) {
  const self = this;
  closure_1 = key10008;
  closure_2 = componentDidAppear;
  if (flag === undefined) {
    flag = false;
  }
  const _currentlyTransitioningKeys = self._currentlyTransitioningKeys;
  _currentlyTransitioningKeys.add(key10008);
  if (null != self._keyChildMapping[key10008]) {
    if (null != tmp2[componentWillAppear]) {
      tmp2[componentWillAppear](function callback() {
        return self._handleDonePerform(closure_1, closure_2, flag);
      });
    }
  }
  self._handleDonePerform(key10008, componentDidAppear, flag);
};
prototype["_handleDonePerform"] = function _handleDonePerform(key10008, componentDidAppear) {
  _require = key10008;
  if (flag === undefined) {
    flag = false;
  }
  const self = this;
  if (tmp2) {
    tmp[componentDidAppear]();
  }
  const _currentlyTransitioningKeys = self._currentlyTransitioningKeys;
  _currentlyTransitioningKeys.delete(key10008);
  const childMapping = require("TransitionChildMapping").getChildMapping(self.props.children);
  if (flag) {
    if (null != childMapping) {
      if (childMapping.hasOwnProperty(key10008)) {
        self.performEnter(key10008);
      }
    }
    self.setState((children) => {
      const obj = { children: null };
      const items = [closure_0];
      obj.children = _objectWithoutProperties(children.children, items.map(_toPropertyKey));
      return obj;
    });
  } else {
    if (!tmp5) {
      self.performLeave(key10008);
    }
    tmp5 = null != childMapping && childMapping.hasOwnProperty(key10008);
  }
};
prototype["performAppear"] = function performAppear(key10008) {
  this._perform(key10008, "componentWillAppear", "componentDidAppear");
};
prototype["performEnter"] = function performEnter(key10008) {
  this._perform(key10008, "componentWillEnter", "componentDidEnter");
};
prototype["performLeave"] = function performLeave(key10008) {
  this._perform(key10008, "componentWillLeave", "componentDidLeave", true);
};
prototype["render"] = function render() {
  const props = this.props;
  const childFactory = props.childFactory;
  const children = this.state.children;
  const items = [];
  for (const key10011 in children) {
    let tmp9 = children[key10011];
    let isValidElementResult = null != tmp9;
    if (isValidElementResult) {
      isValidElementResult = noop.isValidElement(tmp9);
    }
    if (!isValidElementResult) {
      continue;
    } else {
      let childFactoryResult = tmp9;
      if (null != childFactory) {
        childFactoryResult = childFactory(tmp9);
      }
      let obj = {
        ref(arg0) {
          return require.addChildRef(key10011, arg0);
        },
        key: key10011,
      };
      let arr = items.push(noop.cloneElement(childFactoryResult, obj));
      continue;
    }
    continue;
  }
  obj = {};
  const merged = Object.assign(this.props);
  const keys = Object.keys(TransitionGroup.defaultProps);
  const item = keys.forEach((item) => {
    delete tmp3[tmp2];
    return tmp;
  });
  return <props.component>{items}</props.component>;
};
TransitionGroup.defaultProps = {
  component: "span",
  transitionAppear: true,
  transitionLeave: true,
  transitionEnter: true,
  childFactory: null,
};
const size = fn(2);
const result = size.fileFinishedImporting("../discord_common/js/packages/transition-group/TransitionGroup.tsx");

export { TransitionGroup };
