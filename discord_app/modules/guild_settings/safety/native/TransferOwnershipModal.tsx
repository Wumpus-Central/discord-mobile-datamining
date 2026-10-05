// discord_app/modules/guild_settings/safety/native/TransferOwnershipModal.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../_runtime/00576_react.js";
import intl3 from "../../../../intl/index.native.tsx";
import Navigator2 from "../../../../design/components/Navigator/native/Navigator.native.tsx";
import TransferOwnershipModalActionCreatorsDefault from "TransferOwnershipModalActionCreators.tsx";
import TransferOwnershipDefault from "TransferOwnership.tsx";
import _asyncToGenerator from "../../../../../_runtime/metro/00005__asyncToGenerator.js";
import react from "../../../../../_runtime/00019_react.js";
import TransferOwnershipConstants from "../TransferOwnershipConstants.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, c0;

let hasOwnProperty;
let metroRequire;
function closeModal() {
  const obj = TransferOwnershipModalActionCreatorsDefault;
  obj.close();
}
function getScreens(guild, toUser) {
  let intl;
  let intl2;
  let obj4;
  let obj6;
  _require = guild;
  let obj = {
    impression_group: require("discord_common/AnalyticsUtils").ImpressionGroups.GUILD_TRANSFER_OWNERSHIP_FLOW,
  };
  let obj2 = {};
  let obj3 = {
    headerTitle: intl.string(require("intl").t.Z5s7PM),
    headerLeft: obj4.getHeaderCloseButton(closeModal),
    impressionName: require("discord_common/AnalyticsUtils").ImpressionNames.GUILD_TRANSFER_OWNERSHIP,
    impressionProperties: obj,
    render() {
      return jsx(TransferOwnershipDefault, { guild, toUser });
    },
  };
  const TRANFSER_OWNERSHIP = constants.TRANFSER_OWNERSHIP;
  intl = require("intl").intl;
  obj4 = require("NavigatorHeader");
  obj2[TRANFSER_OWNERSHIP] = obj3;
  let obj5 = {
    headerTitle: intl2.string(require("intl").t.Z5s7PM),
    headerLeft: obj6.getHeaderCloseButton(closeModal),
    impressionName: require("discord_common/AnalyticsUtils").ImpressionNames
      .GUILD_TRANSFER_OWNERSHIP_CONFIRM_EMAIL_CODE,
    impressionProperties: obj,
    render() {
      let closure_0;
      toUser(dependencyMap[9]);
      guild = _asyncToGenerator(async (arg0) => {
        let id2;
        const id = arg0;
        let c2 = 0;
        let c1 = 0;
        return (async (arg0) => {
          const obj3 = toUser(closure_2_2[10]);
          await obj3.transferOwnership(id.id, id2.id, constants.EMAIL, id);
          return value;
        })();
      });
      const intl = guild(dependencyMap[6]).intl;
      const intl2 = guild(dependencyMap[6]).intl;
      return (
        <tmp
          onFormSubmit={function () {
            return closure_0(...arguments);
          }}
          onSuccess={function onSuccess() {
            const obj = toUser(closure_1_2[4]);
            obj.close();
            const obj2 = toUser(closure_1_2[10]);
            obj2.close();
            const obj3 = closure_0(closure_1_2[11]);
            const result = obj3.showTransferOwnershipSuccess();
          }}
          onResend={_asyncToGenerator(async () => {
            let v1;
            if (c0 === 2) {
              c0 = 3;
              throw new TypeError("Generator functions may not be called on executing generators");
            } else if (tmp2 === 3) {
              if (arg0 === 1) {
                throw value;
              } else if (arg0 === 2) {
                const obj3 = { value, done: true };
                return obj3;
              } else {
                return { value: "IconComponent", done: null };
              }
            } else {
              try {
                c0 = 2;
                if (0 === v1) {
                  if (arg0 === 1) {
                    c0 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c0 = 3;
                    const obj4 = { value, done: true };
                    return obj4;
                  } else {
                    const obj2 = v1(closure_1_2[10]);
                    v1 = 1;
                    c0 = 1;
                    const obj5 = { value: obj2.sendTransferOwnershipPincode(id.id, true), done: false };
                    return obj5;
                  }
                } else if (arg0 === 1) {
                  c0 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c0 = 3;
                  const obj = { value, done: true };
                  return obj;
                } else {
                  c0 = 3;
                  return { value: "IconComponent", done: null };
                }
              } catch (tmp7) {
                c0 = 3;
                throw tmp7;
              }
            }
          })}
          headerText={intl.string(guild(dependencyMap[6]).t.Z5s7PM)}
          confirmButtonText={intl2.string(guild(dependencyMap[6]).t.Z5s7PM)}
        />
      );
    },
  };
  const CONFIRM_EMAIL_CODE = constants.CONFIRM_EMAIL_CODE;
  intl2 = require("intl").intl;
  obj6 = require("NavigatorHeader");
  obj2[CONFIRM_EMAIL_CODE] = obj5;
  return obj2;
}
({ TransferOwnershipModalScenes: hasOwnProperty, TransferOwnershipVerificationTypes: metroRequire } =
  TransferOwnershipConstants);
const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let guild;
      let toUser;
      const obj = react2;
      const cResult = obj.c(6);
      ({ guild, toUser } = arg0);
      if (cResult[0] === guild) {
        let tmp4;
        let tmp7;
        let tmp9;
        if (cResult[1] === toUser) {
          tmp4 = cResult[2];
        }
        const _Symbol = Symbol;
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = intl3.intl;
          const stringResult = intl.string(intl3.t["13/7kX"]);
          cResult[3] = stringResult;
          tmp7 = stringResult;
        } else {
          tmp7 = cResult[3];
        }
        if (cResult[4] !== tmp4) {
          const tmp12 = jsx(Navigator2.Navigator, {
            screens: tmp4,
            initialRouteName: hasOwnProperty.TRANFSER_OWNERSHIP,
            headerBackTitle: tmp7,
          });
          cResult[4] = tmp4;
          cResult[5] = tmp12;
          tmp9 = tmp12;
        } else {
          tmp9 = cResult[5];
        }
        return tmp9;
      }
      const tmp5 = getScreens(guild, toUser);
      cResult[0] = guild;
      cResult[1] = toUser;
      cResult[2] = tmp5;
      tmp4 = tmp5;
    }
  : (guild) => {
      guild = guild.guild;
      const toUser = guild.toUser;
      const items = [guild, toUser];
      const memo = react.useMemo(() => getScreens(guild, toUser), items);
      const Navigator = guild(6496).Navigator;
      const intl = guild(1126).intl;
      return (
        <Navigator
          screens={memo}
          initialRouteName={constants.TRANFSER_OWNERSHIP}
          headerBackTitle={intl.string(guild(1126).t["13/7kX"])}
        />
      );
    };
let result = size.fileFinishedImporting("modules/guild_settings/safety/native/TransferOwnershipModal.tsx");

export default tmp3;
