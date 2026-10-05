// discord_app/modules/guild_communication_disabled/native/GuildEnableCommunicationAlert.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import NicknameUtilsDefault from "../../../utils/NicknameUtils.tsx";
import useUserCommunicationDisabledDefault from "../useUserCommunicationDisabled.tsx";
import CountDownDefault from "../../../components_native/common/CountDown.tsx";
import _asyncToGenerator from "../../../../_runtime/metro/00005__asyncToGenerator.js";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import _objectWithoutProperties from "../../../../_runtime/metro/00109__objectWithoutProperties.js";
import react from "../../../../_runtime/00019_react.js";
import UserStore from "../../../stores/UserStore.tsx";
import GuildDisableCommunicationConstants from "../GuildDisableCommunicationConstants.tsx";
import Constants from "../../../Constants.tsx";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let c2, dependencyMap, guildId, importDefault;

let Fonts;
let c10;
let c9;
let closure_12;
let map1;
let tmp11;
let unpackModuleId;
const useMountEffectDefault = tmp11(5590);
let closure_3 = ["guildId", "userId", "onCancel"];
const View = react_native.View;
({ CLEAR_COMMUNICATION_DISABLED_MODAL_NAME: c9, GUILD_COMMUNICATION_DISABLED_RESOURCE_LINK: c10 } =
  GuildDisableCommunicationConstants);
({ AnalyticEvents: unpackModuleId, Fonts } = Constants);
({ jsx: closure_12, jsxs: map1 } = Fragment);
let obj = {
  wrapper: { padding: 16 },
  body: { paddingTop: 16 },
  description: { lineHeight: 18 },
  cta: { paddingTop: 8 },
  countdown: { fontFamily: Fonts.PRIMARY_SEMIBOLD },
};
let closure_14 = createStyles.createStyles(obj);
const tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? (guildId) => {
      let _require;
      let countdown;
      let first;
      let other_user_id;
      let obj = require("react");
      const cResult = obj.c(43);
      if (cResult[0] !== guildId) {
        guildId = guildId.guildId;
        _require = guildId;
        const userId = guildId.userId;
        importDefault = userId;
        const onCancel = guildId.onCancel;
        let num = 0;
        cResult[0] = guildId;
        cResult[1] = _objectWithoutProperties(guildId, first);
        cResult[2] = guildId;
        cResult[3] = onCancel;
        cResult[4] = userId;
        const tmp9 = _objectWithoutProperties(guildId, first);
      } else {
        _require = cResult[2];
        importDefault = cResult[4];
      }
      const tmp10 = closure_14();
      dependencyMap = tmp10;
      first = _slicedToArray(useUserCommunicationDisabledDefault(tmp6, tmp4), 1)[0];
      if (cResult[5] === first) {
        if (cResult[8] === tmp4) {
          let tmp14;
          if (cResult[9] === tmp6) {
            tmp14 = cResult[10];
          }
          useMountEffectDefault(tmp14);
          class S {
            constructor() {
              const obj = AnalyticsUtilsDefault;
              const obj2 = { type, guild_id, other_user_id };
              obj.track(unpackModuleId.OPEN_MODAL, obj2);
            }
          }
          class U {
            constructor() {
              const user = UserStore.getUser(other_user_id);
              const obj = NicknameUtilsDefault;
              let str = obj.getName(guild_id, null, user);
              if (str == null) {
                str = "";
              }
              return str;
            }
          }
          cResult[11] = tmp4;
          cResult[12] = tmp6;
          cResult[13] = U;
        }
        class S {
          constructor() {
            const obj = AnalyticsUtilsDefault;
            const obj2 = { type, guild_id, other_user_id };
            obj.track(unpackModuleId.OPEN_MODAL, obj2);
          }
        }
        cResult[8] = tmp4;
        cResult[9] = tmp6;
        cResult[10] = S;
        tmp14 = S;
      }
      const fn = function b() {
        let num = 0;
        if (null != first) {
          const _Date = Date;
          const self = this;
          const self2 = this;
          num = new Date(first);
        }
        const obj = { style: countdown.countdown, deadline: num, withUnits: true };
        return closure_12(CountDownDefault, obj);
      };
      cResult[5] = first;
      cResult[6] = tmp10.countdown;
      cResult[7] = fn;
    }
  : (guildId) => {
      let countdown;
      let format;
      let intl;
      let intl2;
      let intl3;
      let intl5;
      let items;
      let items1;
      let obj2;
      let obj4;
      let obj6;
      let onClose;
      let prop;
      guildId = guildId.guildId;
      const userId = guildId.userId;
      const onCancel = guildId.onCancel;
      const merged = Object.assign(guildId, Object.assign({ guildId: 0, userId: 0, onCancel: 0 }));
      let obj = function _handleConfirmRemoveTimeout2() {
        obj = _asyncToGenerator(async () => {
          let closure_0;
          let intl;
          let v1;
          if (c2 === 2) {
            c2 = 3;
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
              c2 = 2;
              if (0 === v1) {
                if (arg0 === 1) {
                  c2 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c2 = 3;
                  const obj4 = { value, done: true };
                  return obj4;
                } else {
                  const obj2 = v1(c2[17]);
                  v1 = 1;
                  c2 = 1;
                  const obj5 = { value: obj2.setCommunicationDisabledDuration(guildId, userId), done: false };
                  return obj5;
                }
              } else if (arg0 === 1) {
                c2 = 3;
                throw value;
              } else if (arg0 === 2) {
                c2 = 3;
                obj = { value, done: true };
                return obj;
              } else {
                const obj6 = {
                  key: "GUILD_ENABLE_COMMUNICATION_SUCCESS",
                  content: intl.string(tmp3(c2[19]).t["/Mmbfv"]),
                  icon: v1(c2[20]),
                };
                const open = v1(c2[18]).open;
                const tmp15 = v1(c2[18]);
                intl = tmp3(c2[19]).intl;
                open(obj6);
                c2 = 3;
                return { value: "IconComponent", done: null };
              }
            } catch (tmp8) {
              c2 = 3;
              throw tmp8;
            }
          }
        });
        return obj(...arguments);
      };
      const tmp2 = closure_14();
      dependencyMap = tmp2;
      const tmp3 = userId;
      closure_3 = _slicedToArray(userId(7636)(userId, guildId), 1)[0];
      userId(5590)(() => {
        obj = AnalyticsUtilsDefault;
        const obj2 = { type, guild_id: guildId, other_user_id: userId };
        obj.track(unpackModuleId.OPEN_MODAL, obj2);
      });
      obj = {
        title: intl.string(guildId(1126).t["+ZD3ou"]),
        style: tmp2.wrapper,
        cancelText: intl2.string(guildId(1126).t["ETE/oC"]),
        onClose,
        onCancel,
        confirmText: intl3.string(tmp9(1126).t.qXtNtS),
        onConfirm: function handleConfirmRemoveTimeout() {
          return obj(...arguments);
        },
        children: closure_13(View, obj2),
      };
      const tmp7 = userId(5783);
      const merged1 = Object.assign(merged);
      intl = guildId(1126).intl;
      intl2 = guildId(1126).intl;
      onClose = undefined;
      if (merged != null) {
        onClose = merged.onClose;
      }
      intl3 = tmp9(1126).intl;
      obj2 = { style: tmp2.body, children: items };
      let obj3 = { style: tmp2.description, variant: "text-sm/medium", children: format(prop, obj4) };
      const Text = tmp9(4886).Text;
      const intl4 = tmp9(1126).intl;
      format = intl4.format;
      prop = tmp9(1126).t["t+abNU"];
      const user = UserStore.getUser(userId);
      const tmp3Result = tmp3(5042);
      let str = tmp3Result.getName(guildId, null, user);
      if (str == null) {
        str = "";
      }
      obj4 = {
        username: str,
        countdown(arg0) {
          let num = 0;
          if (null != closure_3) {
            const _Date = Date;
            const self = this;
            const self2 = this;
            num = new Date(closure_3);
          }
          obj = { style: countdown.countdown, deadline: num, withUnits: true };
          return closure_12(CountDownDefault, obj);
        },
      };
      items = [closure_12(Text, obj3)];
      let obj5 = { style: items1, variant: "text-sm/medium", children: intl5.format(tmp9(1126).t.KtENkK, obj6) };
      items1 = [,];
      ({ cta: arr2[0], description: arr2[1] } = tmp2);
      const Text2 = tmp9(4886).Text;
      intl5 = tmp9(1126).intl;
      obj6 = { link };
      items[1] = closure_12(Text2, obj5);
      return closure_12(tmp7, obj);
    };
const result = size.fileFinishedImporting(
  "modules/guild_communication_disabled/native/GuildEnableCommunicationAlert.tsx",
);

export default tmp6;
