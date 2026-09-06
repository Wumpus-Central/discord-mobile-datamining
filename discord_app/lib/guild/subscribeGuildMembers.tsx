// === Module 7311: subscribeGuildMembers ===

// Module 7311 (subscribeGuildMembers)
import _modDef12 from "module_12" /* 12 */;
import discord_common_shallowEqualDefault from "discord_common/shallowEqual" /* 558 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

const require = fn;
let closure_3 = ["forwardedRef"];
const jsx = fn(21).jsx;
let c7 = false;
const size = fn(2);
const result = size.fileFinishedImporting("lib/guild/subscribeGuildMembers.tsx");

export default function subscribeGuildMembers(arg0) {
  closure_0 = arg0;
  return (displayName) => {
    let str = displayName.displayName;
    if (str == null) {
      str = displayName.name;
    }
    if (str == null) {
      str = "Component";
    }
    const combined = "SubscribeGuildMembersContainer(" + str + ")";
    const Component = React.Component;
    class WrappedComponent extends Component {
      constructor(arg0) {
        tmp3 = new WrappedComponent(displayName, tmp2, tmp);
        tmp4 = closure_0(displayName);
        arr = closure_1(closure_2[3]);
        item = arr.forEach(tmp4, (userIds, guildId) => displayName(WrappedComponent[4]).subscribeMembers(guildId, userIds));
        tmp3._subscriptions = tmp4;
        return tmp3;
      }
    }
    const prototype = WrappedComponent.prototype;
    prototype["componentDidUpdate"] = function componentDidUpdate(arg0) {
      const self = this;
      if (!discord_common_shallowEqualDefault(this.props, arg0)) {
        const tmp4 = displayName(self.props);
        let isEqualResult = null != self._subscriptions;
        if (isEqualResult) {
          let tmpResult = _modDef12;
          isEqualResult = tmpResult.isEqual(self._subscriptions, tmp4);
        }
        if (!isEqualResult) {
          if (null != self._subscriptions) {
            tmpResult = _modDef12;
            const item = tmpResult.forEach(self._subscriptions, (userIds, guildId) => displayName(7312).unsubscribeMembers(guildId, userIds));
          }
          const item1 = _modDef12.forEach(tmp4, (userIds, guildId) => displayName(7312).subscribeMembers(guildId, userIds));
          self._subscriptions = tmp4;
          const tmpResult1 = _modDef12;
        }
      }
    };
    prototype["componentWillUnmount"] = function componentWillUnmount() {
      if (null != this._subscriptions) {
        const item = WrappedComponent(WrappedComponent[3]).forEach(tmp._subscriptions, (userIds, guildId) => displayName(WrappedComponent[4]).unsubscribeMembers(guildId, userIds));
        const arr = WrappedComponent(WrappedComponent[3]);
      }
    };
    prototype["render"] = function render() {
      const props = this.props;
      const merged = Object.assign(_objectWithoutProperties(props, closure_3));
      return <closure_0 ref={props.forwardedRef} />;
    };
    WrappedComponent.displayName = combined;
    const forwardRefResult = React.forwardRef((arg0, forwardedRef) => {
      const obj = {};
      const merged = Object.assign(arg0);
      obj.forwardedRef = forwardedRef;
      return <WrappedComponent />;
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
  const effect = noop.useEffect(() => {
    let item = _modDef12.forEach(closure_0, (userIds, guildId) => {
      let tmp = !c7;
      if (!c7) {
        tmp = userIds.length > 50;
      }
      if (tmp) {
        c7 = true;
        reason(1232);
        let obj = { extra: null };
        obj = { count: userIds.length, guildId, reason };
        obj.extra = obj;
        obj.captureMessage("SubscribeGuildMembers called with more than 50 userIds.", obj);
      }
      closure_0(7312).subscribeMembers(guildId, userIds);
      const obj4 = closure_0(7312);
    });
    return () => {
      const item = reason(12).forEach(memo, (userIds, guildId) => closure_1_0(closure_1_2[4]).unsubscribeMembers(guildId, userIds));
    };
  }, items);
};