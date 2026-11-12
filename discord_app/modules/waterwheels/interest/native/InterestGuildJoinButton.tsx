// discord_app/modules/waterwheels/interest/native/InterestGuildJoinButton.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef2553 from "../../WaterwheelsUntranslated.messages.js";
import useGetIsMountedDefault from "../../../../hooks/useGetIsMounted.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import GuildMembershipStore from "../../../../stores/GuildMembershipStore.tsx";

const require = fn;
const View = fn(17).View;
let jsx = fn(21).jsx;
const createStyles = fn(5243);
const obj2 = { button: { width: nativeDefault.space.PX_64 + nativeDefault.space.PX_8 } };
let closure_9 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/waterwheels/interest/native/InterestGuildJoinButton.tsx");

export default function InterestGuildJoinButton(guildId) {
  guildId = guildId.guildId;
  ({ guildName, fullWidth } = guildId);
  if (fullWidth === undefined) {
    fullWidth = false;
  }
  ({ onJoinTapped: importDefault, onJoinResult: dependencyMap } = guildId);
  _slicedToArray = undefined;
  loading = undefined;
  closure_6 = undefined;
  closure_7 = undefined;
  jsx = async function _handleJoin() {
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c4 = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            if (!stateFromStores) {
              if (!_slicedToArray) {
                if (!loading) {
                  View(true);
                  c3 = 1;
                  c1 = 2;
                  c4 = 1;
                  const obj5 = {
                    value: tmp3(tmp34[12]).joinInterestGuild(guildId, importDefault, dependencyMap),
                    done: false,
                  };
                  return obj5;
                }
              }
            }
            c4 = 3;
          }
        } else if (1 === tmp7) {
          c3 = 0;
          if (closure_128_7()) {
            closure_128_6(false);
          }
          throw tmp34;
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 !== 2) {
          c3 = 0;
          if (closure_128_7()) {
            closure_128_6(false);
          }
        }
        c3 = 0;
        if (closure_128_7()) {
          closure_128_6(false);
        }
        c4 = 3;
        const obj = { value, done: true };
        return obj;
      } catch (tmp34) {
        if (tmp4 === c3) {
          c4 = tmp2;
          throw tmp34;
        } else {
          c1 = tmp;
        }
      }
    }
  };
  const tmp = closure_9();
  items = [closure_7];
  const items1 = [guildId];
  let stateFromStores = guildId(504).useStateFromStores(items, () => GuildMembershipStore.isMember(guildId), items1);
  let obj = guildId(504);
  const currentUserGuildJoinRequest = guildId(14773).useCurrentUserGuildJoinRequest(guildId);
  let applicationStatus;
  if (currentUserGuildJoinRequest != null) {
    applicationStatus = currentUserGuildJoinRequest.applicationStatus;
  }
  const tmp7 = applicationStatus === guildId(5289).GuildJoinRequestApplicationStatuses.SUBMITTED;
  _slicedToArray = tmp7;
  [loading, closure_6] = loading.useState(false);
  closure_7 = useGetIsMountedDefault();
  const intl = tmp2(1113).intl;
  const string = intl.string;
  if (stateFromStores) {
    let stringResult = string(_modDef2553.X4zfDg);
    const intl4 = tmp2(1113).intl;
    let obj3 = { guild: guildName };
    let formatToPlainStringResult = intl4.formatToPlainString(_modDef2553.t1du0D, obj3);
  } else if (tmp7) {
    stringResult = string(_modDef2553.fVWYWS);
    const intl3 = tmp2(1113).intl;
    let obj4 = { guild: guildName };
    formatToPlainStringResult = intl3.formatToPlainString(_modDef2553.nQnkb3, obj4);
  } else {
    const intl2 = tmp2(1113).intl;
    let obj5 = { guild: guildName };
    formatToPlainStringResult = intl2.formatToPlainString(_modDef2553.NOfX8z, obj5);
    stringResult = string(tmp2(1113).t.VJlc0S);
    const stringResult1 = string(tmp2(1113).t.VJlc0S);
  }
  let button;
  if (!fullWidth) {
    button = tmp.button;
  }
  const obj6 = { style: button, children: null };
  let str = "sm";
  if (fullWidth) {
    str = "lg";
  }
  const obj7 = {
    size: str,
    text: stringResult,
    accessibilityLabel: formatToPlainStringResult,
    variant: null,
    disabled: null,
    loading: null,
    onPress: null,
  };
  if (stateFromStores) {
    let str2 = "secondary";
  } else {
    str2 = "primary";
  }
  obj7.variant = str2;
  if (!stateFromStores) {
    stateFromStores = tmp7;
  }
  if (!stateFromStores) {
    stateFromStores = loading;
  }
  obj7.disabled = stateFromStores;
  obj7.loading = loading;
  obj7.onPress = function handleJoin() {
    const self = this;
    const apply = closure_8.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  };
  obj6.children = jsx(guildId(5873).Button, obj7);
  return jsx(closure_6, obj6);
}
