// === Module 6074: subscribeGuildMembers ===

// Module 6074 (subscribeGuildMembers)
import _objectWithoutProperties from "_objectWithoutProperties";
import noop from "noop";
import { jsx } from "jsxProd";

const require = arg1;
let closure_3 = ["forwardedRef"];
let c7 = false;
const result = require("jsxProd").fileFinishedImporting("lib/guild/subscribeGuildMembers.tsx");

export default function subscribeGuildMembers(arg0) {
  let closure_0 = arg0;
  return (displayName) => {
    let closure_0 = displayName;
    let str = displayName.displayName;
    if (str == null) {
      str = displayName.name;
    }
    if (str == null) {
      str = "Component";
    }
    const combined = "SubscribeGuildMembersContainer(" + str + ")";
    const Component = outer1_5.Component;
    class WrappedComponent extends Component {
      constructor(arg0) {
        tmp3 = new WrappedComponent(displayName, tmp2, tmp);
        // ThrowIfThisInitialized (0x7c)
        tmp4 = closure_0(displayName);
        arr = outer2_1(outer2_2[3]);
        item = arr.forEach(tmp4, (userIds, guildId) => callback(table[4]).subscribeMembers(guildId, userIds));
        tmp3._subscriptions = tmp4;
        return tmp3;
      }
    }
    const prototype = WrappedComponent.prototype;
    prototype["componentDidUpdate"] = function componentDidUpdate(arg0) {
      const self = this;
      if (!WrappedComponent(WrappedComponent[5])(this.props, arg0)) {
        const tmp4 = displayName(self.props);
        let isEqualResult = null != self._subscriptions;
        if (isEqualResult) {
          let tmpResult = tmp(tmp2[3]);
          isEqualResult = tmpResult.isEqual(self._subscriptions, tmp4);
        }
        if (!isEqualResult) {
          if (null != self._subscriptions) {
            tmpResult = tmp(tmp2[3]);
            const item = tmpResult.forEach(self._subscriptions, (userIds, guildId) => callback(6075).unsubscribeMembers(guildId, userIds));
          }
          const item1 = tmp(tmp2[3]).forEach(tmp4, (userIds, guildId) => callback(6075).subscribeMembers(guildId, userIds));
          self._subscriptions = tmp4;
          const tmpResult1 = tmp(tmp2[3]);
        }
      }
    };
    prototype["componentWillUnmount"] = function componentWillUnmount() {
      if (null != this._subscriptions) {
        const item = WrappedComponent(WrappedComponent[3]).forEach(tmp._subscriptions, (userIds, guildId) => callback(table[4]).unsubscribeMembers(guildId, userIds));
        const arr = WrappedComponent(WrappedComponent[3]);
      }
    };
    prototype["render"] = function render() {
      const props = this.props;
      const merged = Object.assign(outer2_4(props, outer2_3));
      return outer2_6(closure_0, { ref: props.forwardedRef });
    };
    WrappedComponent.displayName = combined;
    const forwardRefResult = outer1_5.forwardRef((arg0, forwardedRef) => {
      const obj = {};
      const merged = Object.assign(arg0);
      obj.forwardedRef = forwardedRef;
      return outer2_6(WrappedComponent, obj);
    });
    forwardRefResult.displayName = "ForwardRef(" + combined + ")";
    return forwardRefResult;
  };
};
export const MAX_GUILD_MEMBER_SUBSCRIPTIONS = 50;
export const useSubscribeGuildMembers = function useSubscribeGuildMembers(memo, AddMembersActionSheet) {
  let closure_0 = memo;
  let closure_1 = AddMembersActionSheet;
  const items = [memo, AddMembersActionSheet];
  const effect = React.useEffect(() => {
    let item = AddMembersActionSheet(outer1_2[3]).forEach(closure_0, (userIds, guildId) => {
      let tmp = !outer1_7;
      if (!outer1_7) {
        tmp = userIds.length > 50;
      }
      if (tmp) {
        outer1_7 = true;
        let obj = outer1_1(outer1_2[6]);
        obj = { extra: null };
        obj = { count: null, guildId: null, reason: null };
        obj[0] = userIds.length;
        obj[1] = guildId;
        obj[2] = closure_1;
        obj[0] = obj;
        obj.captureMessage("SubscribeGuildMembers called with more than 50 userIds.", obj);
      }
      outer1_0(outer1_2[4]).subscribeMembers(guildId, userIds);
    });
    return () => {
      const item = outer1_1(outer1_2[3]).forEach(closure_0, (userIds, guildId) => callback(table[4]).unsubscribeMembers(guildId, userIds));
    };
  }, items);
};