// === Module 7639: subscribeGuildMembers ===

// Module 7639 (subscribeGuildMembers)
import _modDef12 from "module_12" /* 12 */;
import discord_common_shallowEqualDefault from "discord_common/shallowEqual" /* 558 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;
import GuildMemberRequesterStore from "GuildMemberRequesterStore" /* 5729 */;
import UserStore from "UserStore" /* 1372 */;

const require = fn;
let closure_3 = ["forwardedRef"];
const jsx = fn(21).jsx;
let c9 = false;
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
        arr = closure_1(closure_2[5]);
        item = arr.forEach(tmp4, (userIds, guildId) => displayName(WrappedComponent[6]).subscribeMembers(guildId, userIds));
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
          isEqualResult = _modDef12.isEqual(self._subscriptions, tmp4);
          const tmpResult = _modDef12;
        }
        if (!isEqualResult) {
          if (null != self._subscriptions) {
            const item = _modDef12.forEach(self._subscriptions, (userIds, guildId) => displayName(7640).unsubscribeMembers(guildId, userIds));
            const tmpResult3 = _modDef12;
          }
          const item1 = _modDef12.forEach(tmp4, (userIds, guildId) => displayName(7640).subscribeMembers(guildId, userIds));
          self._subscriptions = tmp4;
          const tmpResult4 = _modDef12;
        }
      }
    };
    prototype["componentWillUnmount"] = function componentWillUnmount() {
      if (null != this._subscriptions) {
        const item = WrappedComponent(WrappedComponent[5]).forEach(tmp._subscriptions, (userIds, guildId) => displayName(WrappedComponent[6]).unsubscribeMembers(guildId, userIds));
        const arr = WrappedComponent(WrappedComponent[5]);
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
      let tmp = !c9;
      if (!c9) {
        tmp = userIds.length > 50;
      }
      if (tmp) {
        c9 = true;
        const obj2 = { extra: null };
        const obj3 = { count: userIds.length, guildId, reason };
        obj2.extra = obj3;
        reason(1231).captureMessage("SubscribeGuildMembers called with more than 50 userIds.", obj2);
        const obj = reason(1231);
      }
      closure_0(7640).subscribeMembers(guildId, userIds);
      const obj4 = closure_0(7640);
    });
    return () => {
      const item = reason(12).forEach(guild_id, (userIds, guildId) => closure_1_0(closure_1_2[6]).unsubscribeMembers(guildId, userIds));
    };
  }, items);
};
export const useEnsureHydratedGuildUsers = function useEnsureHydratedGuildUsers(guild_id, items1) {
  closure_0 = guild_id;
  const items = [guild_id, items1];
  const memo = noop.useMemo(() => {
    if (0 === items1.length) {
      let obj = {};
    } else {
      obj = {};
      obj[closure_0] = tmp;
    }
    return obj;
  }, items);
  items1 = [guild_id, ];
  items1[1] = items1;
  const effect = noop.useEffect(() => {
    const item = items1.forEach((item) => {
      if (null == user.getUser(item)) {
        const member = GuildMemberRequesterStore.requestMember(guild_id, item);
      }
    });
  }, items1);
  closure_129_0 = memo;
  closure_129_1 = "useEnsureHydratedGuildUsers";
  const items2 = [memo, "useEnsureHydratedGuildUsers"];
  const effect1 = noop.useEffect(() => {
    let item = _modDef12.forEach(closure_0, (userIds, guildId) => {
      let tmp = !c9;
      if (!c9) {
        tmp = userIds.length > 50;
      }
      if (tmp) {
        c9 = true;
        const obj2 = { extra: null };
        const obj3 = { count: userIds.length, guildId, reason };
        obj2.extra = obj3;
        reason(1231).captureMessage("SubscribeGuildMembers called with more than 50 userIds.", obj2);
        const obj = reason(1231);
      }
      closure_0(7640).subscribeMembers(guildId, userIds);
      const obj4 = closure_0(7640);
    });
    return () => {
      const item = reason(12).forEach(guild_id, (userIds, guildId) => closure_1_0(closure_1_2[6]).unsubscribeMembers(guildId, userIds));
    };
  }, items2);
};