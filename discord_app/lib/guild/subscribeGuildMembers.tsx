// discord_app/lib/guild/subscribeGuildMembers.tsx
import _modDef12 from "../../../_runtime/metro/00012__.js";
import Fragment from "../../../_runtime/react/00021_Fragment.js";
import shallowEqualDefault from "../../../discord_common/js/packages/shallow-equal/shallowEqual.tsx";
import react2 from "../../../_runtime/00576_react.js";
import _objectWithoutProperties from "../../../_runtime/metro/00109__objectWithoutProperties.js";
import react from "../../../_runtime/00019_react.js";
import GuildMemberRequesterStore from "../../stores/GuildMemberRequesterStore.tsx";
import UserStore from "../../stores/UserStore.tsx";
import ReactCompilerGating_mod from "../../modules/react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, isEqualResult, item1, tmpResult, tmpResult1, tmpResult2;

let closure_3 = ["forwardedRef"];
const jsx = Fragment.jsx;
let c9 = false;
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, arg1) => {
      let closure_0;
      _require = arg0;
      let closure_1 = arg1;
      let obj = require("react");
      const cResult = obj.c(4);
      if (cResult[0] === arg1) {
        let tmp2;
        let tmp3;
        if (cResult[1] === arg0) {
          tmp2 = cResult[2];
          tmp3 = cResult[3];
        }
        const effect = react.useEffect(tmp2, tmp3);
      }
      const fn = function n() {
        let reason;
        let arr = _modDef12;
        let item = arr.forEach(closure_0, (userIds, guildId) => {
          let obj3;
          const tmp = !c9 && userIds.length > 50;
          if (tmp) {
            c9 = true;
            const obj2 = { extra: obj3 };
            obj3 = { count: userIds.length, guildId, reason };
            const obj = reason(dependencyMap[10]);
            obj.captureMessage("SubscribeGuildMembers called with more than 50 userIds.", obj2);
          }
          const obj4 = closure_0(dependencyMap[6]);
          obj4.subscribeMembers(guildId, userIds);
        });
        return () => {
          const arr = reason(dependencyMap[5]);
          const item = arr.forEach(closure_1_0, (userIds, guildId) => {
            const obj = closure_1_0(closure_1_2[6]);
            return obj.unsubscribeMembers(guildId, userIds);
          });
        };
      };
      const items = [arg0, arg1];
      cResult[0] = arg1;
      cResult[1] = arg0;
      cResult[2] = fn;
      cResult[3] = items;
      tmp3 = items;
      tmp2 = fn;
    }
  : (arg0, arg1) => {
      let closure_0 = arg0;
      let closure_1 = arg1;
      const items = [arg0, arg1];
      const effect = react.useEffect(() => {
        let reason;
        let arr = _modDef12;
        let item = arr.forEach(closure_0, (userIds, guildId) => {
          let obj3;
          const tmp = !c9 && userIds.length > 50;
          if (tmp) {
            c9 = true;
            const obj2 = { extra: obj3 };
            obj3 = { count: userIds.length, guildId, reason };
            const obj = reason(dependencyMap[10]);
            obj.captureMessage("SubscribeGuildMembers called with more than 50 userIds.", obj2);
          }
          const obj4 = closure_0(dependencyMap[6]);
          obj4.subscribeMembers(guildId, userIds);
        });
        return () => {
          const arr = reason(dependencyMap[5]);
          const item = arr.forEach(closure_1_0, (userIds, guildId) => {
            const obj = closure_1_0(closure_1_2[6]);
            return obj.unsubscribeMembers(guildId, userIds);
          });
        };
      }, items);
    };
let closure_10 = tmp2;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, arg1) => {
      let closure_0;
      let first;
      let user;
      _require = arg0;
      let closure_1 = arg1;
      const obj = require("react");
      const cResult = obj.c(8);
      if (0 !== arg1.length) {
        if (cResult[1] === arg0) {
          let tmp4;
          if (cResult[2] === arg1) {
            tmp4 = cResult[3];
          }
          first = tmp4;
        }
        const obj2 = {};
        obj2[arg0] = arg1;
        cResult[1] = arg0;
        cResult[2] = arg1;
        cResult[3] = obj2;
        tmp4 = obj2;
      } else {
        const _Symbol = Symbol;
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const obj3 = {};
          cResult[0] = obj3;
          first = obj3;
        } else {
          first = cResult[0];
        }
      }
      if (cResult[4] === arg0) {
        let tmp5;
        let tmp6;
        if (cResult[5] === arg1) {
          tmp5 = cResult[6];
          tmp6 = cResult[7];
        }
        const effect = react.useEffect(tmp5, tmp6);
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
      tmp6 = items;
      tmp5 = fn;
    }
  : (arg0, arg1) => {
      let user;
      let closure_0 = arg0;
      let closure_1 = arg1;
      const items = [arg0, arg1];
      const items1 = [arg0, arg1];
      const memo = react.useMemo(() => {
        let obj;
        if (0 === closure_1.length) {
          obj = {};
        } else {
          obj = {};
          obj[closure_0] = tmp;
        }
        return obj;
      }, items);
      const effect = react.useEffect(() => {
        const item = closure_1.forEach((item) => {
          if (null == user.getUser(item)) {
            const member = GuildMemberRequesterStore.requestMember(closure_1_0, item);
          }
        });
      }, items1);
      closure_10(memo, "useEnsureHydratedGuildUsers");
    };
const result = size.fileFinishedImporting("lib/guild/subscribeGuildMembers.tsx");

export default function subscribeGuildMembers(arg0) {
  let closure_0 = arg0;
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
        item = arr.forEach(tmp4, (userIds, guildId) => {
          const obj = displayName(WrappedComponent[6]);
          return obj.subscribeMembers(guildId, userIds);
        });
        tmp3._subscriptions = tmp4;
        return tmp3;
      }
      componentDidUpdate(arg0) {
        self = this;
        tmp = closure_2_1;
        tmp2 = closure_2_2;
        if (!closure_2_1(closure_2_2[7])(this.props, displayName)) {
          tmp3 = closure_0;
          tmp4 = closure_0(self.props);
          tmp5 = null;
          isEqualResult = null != self._subscriptions;
          if (isEqualResult) {
            tmpResult = tmp(tmp2[5]);
            isEqualResult = tmpResult.isEqual(self._subscriptions, tmp4);
          }
          if (!isEqualResult) {
            if (null != self._subscriptions) {
              tmpResult1 = tmp(tmp2[5]);
              item = tmpResult1.forEach(self._subscriptions, (userIds, guildId) => {
                const obj = displayName(WrappedComponent[6]);
                return obj.unsubscribeMembers(guildId, userIds);
              });
            }
            tmpResult2 = tmp(tmp2[5]);
            item1 = tmpResult2.forEach(tmp4, (userIds, guildId) => {
              const obj = displayName(WrappedComponent[6]);
              return obj.subscribeMembers(guildId, userIds);
            });
            self._subscriptions = tmp4;
          }
        }
        return;
      }
      componentWillUnmount() {
        if (null != this._subscriptions) {
          tmp2 = WrappedComponent;
          tmp3 = WrappedComponent;
          arr = WrappedComponent(WrappedComponent[5]);
          item = arr.forEach(tmp._subscriptions, (userIds, guildId) => {
            const obj = displayName(WrappedComponent[6]);
            return obj.unsubscribeMembers(guildId, userIds);
          });
        }
        return;
      }
      render() {
        const props = this.props;
        const merged = Object.assign(_objectWithoutProperties(props, closure_3));
        return <displayName ref={props.forwardedRef} />;
      }
    }
    const prototype = WrappedComponent.prototype;
    WrappedComponent.displayName = combined;
    const forwardRef = React.forwardRef;
    let obj = displayName(dependencyMap[8]);
    const forwardRefResult = forwardRef(
      obj.isReactCompilerEnabled()
        ? (arg0, forwardedRef) => {
            const obj = react2;
            const cResult = obj.c(3);
            if (cResult[0] === arg0) {
              let tmp2;
              if (cResult[1] === forwardedRef) {
                tmp2 = cResult[2];
              }
              return tmp2;
            }
            const merged = Object.assign(arg0);
            const tmp4 = <WrappedComponent forwardedRef={forwardedRef} />;
            cResult[0] = arg0;
            cResult[1] = forwardedRef;
            cResult[2] = tmp4;
            tmp2 = tmp4;
          }
        : (arg0, forwardedRef) => {
            const merged = Object.assign(arg0);
            return <WrappedComponent forwardedRef={forwardedRef} />;
          },
    );
    forwardRefResult.displayName = "ForwardRef(" + combined + ")";
    return forwardRefResult;
  };
}
export const MAX_GUILD_MEMBER_SUBSCRIPTIONS = 50;
export const useSubscribeGuildMembers = tmp2;
export const useEnsureHydratedGuildUsers = tmp3;
