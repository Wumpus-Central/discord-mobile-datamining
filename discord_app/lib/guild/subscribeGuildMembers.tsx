// discord_app/lib/guild/subscribeGuildMembers.tsx
import closure_4 from "../../../_runtime/metro/00109__objectWithoutProperties.js";
import closure_5 from "../../../_runtime/00019_noop.js";
import { jsx } from "../../../_runtime/react/00021_jsxProd.js";

const require = arg1;
let closure_3 = ["forwardedRef"];
let c7 = false;
const result = require("set").fileFinishedImporting("lib/guild/subscribeGuildMembers.tsx");

export default function subscribeGuildMembers(arg0) {
  closure_0 = arg0;
  return (displayName) => {
    closure_0 = displayName;
    let str = displayName.displayName;
    if (str == null) {
      str = displayName.name;
    }
    if (str == null) {
      str = "Component";
    }
    const combined = "SubscribeGuildMembersContainer(" + str + ")";
    const Component = closure_1_5.Component;
    class WrappedComponent extends Component {
      constructor(arg0) {
        tmp3 = new WrappedComponent(displayName, tmp2, tmp);
        // ThrowIfThisInitialized (0x7c)
        tmp4 = closure_0(displayName);
        arr = closure_2_1(closure_2_2[3]);
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
            const item = tmpResult.forEach(self._subscriptions, (userIds, guildId) => callback(6157).unsubscribeMembers(guildId, userIds));
          }
          const item1 = tmp(tmp2[3]).forEach(tmp4, (userIds, guildId) => callback(6157).subscribeMembers(guildId, userIds));
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
      const merged = Object.assign(closure_2_4(props, closure_2_3));
      return closure_2_6(closure_0, { ref: props.forwardedRef });
    };
    WrappedComponent.displayName = combined;
    const forwardRefResult = closure_1_5.forwardRef((arg0, forwardedRef) => {
      const obj = {};
      const merged = Object.assign(arg0);
      obj.forwardedRef = forwardedRef;
      return closure_2_6(WrappedComponent, obj);
    });
    forwardRefResult.displayName = "ForwardRef(" + combined + ")";
    return forwardRefResult;
  };
};
export const MAX_GUILD_MEMBER_SUBSCRIPTIONS = 50;
export const useSubscribeGuildMembers = function useSubscribeGuildMembers(memo, AddMembersActionSheet) {
  closure_0 = memo;
  closure_1 = AddMembersActionSheet;
  const items = [memo, AddMembersActionSheet];
  const effect = React.useEffect(() => {
    let item = AddMembersActionSheet(closure_1_2[3]).forEach(closure_0, (userIds, guildId) => {
      let tmp = !c7;
      if (!c7) {
        tmp = userIds.length > 50;
      }
      if (tmp) {
        c7 = true;
        let obj = closure_1_1(closure_1_2[6]);
        obj = { extra: null };
        obj = { count: null, guildId: null, reason: null };
        obj[0] = userIds.length;
        obj[1] = guildId;
        obj[2] = closure_1;
        obj[0] = obj;
        obj.captureMessage("SubscribeGuildMembers called with more than 50 userIds.", obj);
      }
      closure_1_0(closure_1_2[4]).subscribeMembers(guildId, userIds);
    });
    return () => {
      const item = closure_1_1(closure_1_2[3]).forEach(closure_0, (userIds, guildId) => callback(table[4]).unsubscribeMembers(guildId, userIds));
    };
  }, items);
};