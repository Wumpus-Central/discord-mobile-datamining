// discord_app/lib/guild/subscribeGuildMembers.tsx
import _modDef12 from "../../../_runtime/metro/00012__.js";
import discord_common_shallowEqualDefault from "../../../discord_common/js/packages/shallow-equal/shallowEqual.tsx";
import c from "../../../_runtime/00576_c.js";
import _objectWithoutProperties from "../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../_runtime/metro/00019__.js";
import GuildMemberRequesterStore from "../../stores/GuildMemberRequesterStore.tsx";
import UserStore from "../../stores/UserStore.tsx";

const require = globalThis.__r;

require = fn;
let closure_3 = ["forwardedRef"];
const jsx = fn(21).jsx;
let c9 = false;
let ReactCompilerGating = fn(558);
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, arg1) => {
      _require = arg0;
      closure_1 = arg1;
      const cResult = require("c").c(4);
      if (cResult[0] === arg1) {
        if (cResult[1] === arg0) {
          let tmp2 = cResult[2];
          let tmp3 = cResult[3];
        }
        const effect = noop.useEffect(tmp2, tmp3);
      }
      const fn = function n() {
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
            reason(1242).captureMessage("SubscribeGuildMembers called with more than 50 userIds.", obj2);
            const obj = reason(1242);
          }
          closure_0(6815).subscribeMembers(guildId, userIds);
          const obj4 = closure_0(6815);
        });
        return () => {
          const item = reason(12).forEach(closure_1_0, (userIds, guildId) =>
            closure_1_0(closure_1_2[6]).unsubscribeMembers(guildId, userIds),
          );
        };
      };
      const items = [arg0, arg1];
      cResult[0] = arg1;
      cResult[1] = arg0;
      cResult[2] = fn;
      cResult[3] = items;
      tmp3 = items;
      tmp2 = fn;
      let obj = require("c");
    }
  : (arg0, arg1) => {
      closure_0 = arg0;
      closure_1 = arg1;
      const items = [arg0, arg1];
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
            reason(1242).captureMessage("SubscribeGuildMembers called with more than 50 userIds.", obj2);
            const obj = reason(1242);
          }
          closure_0(6815).subscribeMembers(guildId, userIds);
          const obj4 = closure_0(6815);
        });
        return () => {
          const item = reason(12).forEach(closure_1_0, (userIds, guildId) =>
            closure_1_0(closure_1_2[6]).unsubscribeMembers(guildId, userIds),
          );
        };
      }, items);
    };
let closure_10 = tmp2;
ReactCompilerGating = fn(558);
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
        item = arr.forEach(tmp4, (userIds, guildId) =>
          displayName(WrappedComponent[6]).subscribeMembers(guildId, userIds),
        );
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
            const item = _modDef12.forEach(self._subscriptions, (userIds, guildId) =>
              displayName(6815).unsubscribeMembers(guildId, userIds),
            );
            const tmpResult3 = _modDef12;
          }
          const item1 = _modDef12.forEach(tmp4, (userIds, guildId) =>
            displayName(6815).subscribeMembers(guildId, userIds),
          );
          self._subscriptions = tmp4;
          const tmpResult4 = _modDef12;
        }
      }
    };
    prototype["componentWillUnmount"] = function componentWillUnmount() {
      if (null != this._subscriptions) {
        const item = WrappedComponent(WrappedComponent[5]).forEach(tmp._subscriptions, (userIds, guildId) =>
          displayName(WrappedComponent[6]).unsubscribeMembers(guildId, userIds),
        );
        const arr = WrappedComponent(WrappedComponent[5]);
      }
    };
    prototype["render"] = function render() {
      const props = this.props;
      const merged = Object.assign(_objectWithoutProperties(props, closure_3));
      return <closure_0 ref={props.forwardedRef} />;
    };
    WrappedComponent.displayName = combined;
    const forwardRefResult = React.forwardRef(
      displayName(558).isReactCompilerEnabled()
        ? (arg0, forwardedRef) => {
            const cResult = c.c(3);
            if (cResult[0] === arg0) {
              if (cResult[1] === forwardedRef) {
                let tmp2 = cResult[2];
              }
              return tmp2;
            }
            const obj2 = {};
            const merged = Object.assign(arg0);
            obj2.forwardedRef = forwardedRef;
            const tmp4 = <WrappedComponent />;
            cResult[0] = arg0;
            cResult[1] = forwardedRef;
            cResult[2] = tmp4;
            tmp2 = tmp4;
          }
        : (arg0, forwardedRef) => {
            const obj = {};
            const merged = Object.assign(arg0);
            obj.forwardedRef = forwardedRef;
            return <WrappedComponent />;
          },
    );
    forwardRefResult.displayName = "ForwardRef(" + combined + ")";
    return forwardRefResult;
  };
}
export const MAX_GUILD_MEMBER_SUBSCRIPTIONS = 50;
export const useSubscribeGuildMembers = tmp2;
export const useEnsureHydratedGuildUsers = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, arg1) => {
      _require = arg0;
      closure_1 = arg1;
      const cResult = require("c").c(8);
      if (0 !== arg1.length) {
        if (cResult[1] === arg0) {
        }
        const obj2 = {};
        obj2[arg0] = arg1;
        cResult[1] = arg0;
        cResult[2] = arg1;
        cResult[3] = obj2;
      } else {
        const _Symbol = Symbol;
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const obj3 = {};
          cResult[0] = obj3;
          let first = obj3;
        } else {
          first = cResult[0];
        }
        if (cResult[4] === arg0) {
          if (cResult[5] === arg1) {
            let tmp6 = cResult[6];
            let tmp7 = cResult[7];
          }
          const effect = noop.useEffect(tmp6, tmp7);
          closure_10(first, "useEnsureHydratedGuildUsers");
        }
        const fn = function h() {
          const item = closure_1.forEach((item) => {
            if (null == user.getUser(item)) {
              const member = GuildMemberRequesterStore.requestMember(closure_1_0, item);
            }
          });
        };
        const items = [arg0, arg1];
        cResult[4] = arg0;
        cResult[5] = arg1;
        cResult[6] = fn;
        cResult[7] = items;
        tmp7 = items;
        tmp6 = fn;
      }
      const obj = require("c");
    }
  : (arg0, arg1) => {
      closure_0 = arg0;
      closure_1 = arg1;
      const items = [arg0, arg1];
      const items1 = [arg0, arg1];
      const memo = noop.useMemo(() => {
        if (0 === closure_1.length) {
          let obj = {};
        } else {
          obj = {};
          obj[closure_0] = tmp;
        }
        return obj;
      }, items);
      const effect = noop.useEffect(() => {
        const item = closure_1.forEach((item) => {
          if (null == user.getUser(item)) {
            const member = GuildMemberRequesterStore.requestMember(closure_1_0, item);
          }
        });
      }, items1);
      closure_10(memo, "useEnsureHydratedGuildUsers");
    };
