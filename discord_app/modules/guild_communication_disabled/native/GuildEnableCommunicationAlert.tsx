// discord_app/modules/guild_communication_disabled/native/GuildEnableCommunicationAlert.tsx
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import NicknameUtilsDefault from "../../../utils/NicknameUtils.tsx";
import useUserCommunicationDisabledDefault from "../useUserCommunicationDisabled.tsx";
import CountDownDefault from "../../../components_native/common/CountDown.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import _objectWithoutProperties from "../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../../_runtime/metro/00019__.js";
import UserStore from "../../../stores/UserStore.tsx";

const require = globalThis.__r;

const useMountEffectDefault = tmp11(5393);
const require = fn;
let closure_3 = ["guildId", "userId", "onCancel"];
const View = fn(17).View;
const GuildDisableCommunicationConstants = fn(2126);
({ CLEAR_COMMUNICATION_DISABLED_MODAL_NAME: closure_9, GUILD_COMMUNICATION_DISABLED_RESOURCE_LINK: c10 } =
  GuildDisableCommunicationConstants);
const Constants = fn(1085);
({ AnalyticEvents: closure_11, Fonts } = Constants);
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
const createStyles = fn(5091);
let closure_14 = createStyles.createStyles({
  wrapper: { padding: 16 },
  body: { paddingTop: 16 },
  description: { lineHeight: 18 },
  cta: { paddingTop: 8 },
  countdown: { fontFamily: Fonts.PRIMARY_SEMIBOLD },
});
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/guild_communication_disabled/native/GuildEnableCommunicationAlert.tsx",
);

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function GuildEnableCommunicationAlert(guildId) {
      const cResult = require("c").c(43);
      if (cResult[0] !== guildId) {
        guildId = guildId.guildId;
        _require = guildId;
        const userId = guildId.userId;
        importDefault = userId;
        const onCancel = guildId.onCancel;
        const tmp9 = _objectWithoutProperties(guildId, first);
        cResult[0] = guildId;
        cResult[1] = tmp9;
        cResult[2] = guildId;
        cResult[3] = onCancel;
        cResult[4] = userId;
      } else {
        _require = cResult[2];
        importDefault = cResult[4];
      }
      const tmp10 = closure_14();
      dependencyMap = tmp10;
      first = _slicedToArray(useUserCommunicationDisabledDefault(tmp6, tmp4), 1)[0];
      if (cResult[5] === first) {
        if (cResult[8] === tmp4) {
          if (cResult[9] === tmp6) {
            let tmp14 = cResult[10];
          }
          useMountEffectDefault(tmp14);
          class U {
            constructor() {
              obj = closure_1(closure_2[14]);
              obj1 = { type: closure_9, guild_id: closure_0, other_user_id: closure_1 };
              trackResult = obj.track(AnalyticEvents.OPEN_MODAL, obj1);
              return;
            }
          }
          function getUsername() {
            const user = UserStore.getUser(closure_1);
            let str = NicknameUtilsDefault.getName(closure_0, null, user);
            if (str == null) {
              str = "";
            }
            return str;
          }
          cResult[11] = tmp4;
          cResult[12] = tmp6;
          cResult[13] = getUsername;
        }
        class U {
          constructor() {
            obj = closure_1(closure_2[14]);
            obj1 = { type: closure_9, guild_id: closure_0, other_user_id: closure_1 };
            trackResult = obj.track(AnalyticEvents.OPEN_MODAL, obj1);
            return;
          }
        }
        cResult[8] = tmp4;
        cResult[9] = tmp6;
        cResult[10] = U;
        tmp14 = U;
      }
      function countdown() {
        let num = 0;
        if (null != first) {
          const _Date = Date;
          num = new Date(first);
        }
        return __initData(CountDownDefault, { style: countdown.countdown, deadline: num, withUnits: true });
      }
      cResult[5] = first;
      cResult[6] = tmp10.countdown;
      cResult[7] = countdown;
      let obj = require("c");
    }
  : function GuildEnableCommunicationAlert(guildId) {
      guildId = guildId.guildId;
      const userId = guildId.userId;
      const merged = Object.assign(guildId, Object.assign({ guildId: 0, userId: 0, onCancel: 0 }));
      closure_4 = async function _handleConfirmRemoveTimeout2() {
        if (dependencyMap === 2) {
          dependencyMap = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp3 === 3) {
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
            dependencyMap = 2;
            if (0 === v1) {
              if (arg0 === 1) {
                dependencyMap = 3;
                throw value;
              } else if (arg0 === 2) {
                dependencyMap = 3;
                const obj4 = { value, done: true };
                return obj4;
              } else {
                v1 = 1;
                dependencyMap = 1;
                const obj5 = { value: v1(11358).setCommunicationDisabledDuration(guildId, userId), done: false };
                return obj5;
              }
            } else if (arg0 === 1) {
              dependencyMap = 3;
              throw value;
            } else if (arg0 === 2) {
              dependencyMap = 3;
              const obj = { value, done: true };
              return obj;
            } else {
              const obj7 = { key: "GUILD_ENABLE_COMMUNICATION_SUCCESS", content: null, icon: null };
              const intl = tmp4(1126).intl;
              obj7.content = intl.string(tmp4(1126).t["/Mmbfv"]);
              obj7.icon = v1(5006);
              v1(4768).open(obj7);
              dependencyMap = 3;
              return { value: "IconComponent", done: null };
            }
          } catch (tmp9) {
            dependencyMap = tmp;
            throw tmp9;
          }
        }
      };
      const tmp2 = closure_14();
      dependencyMap = tmp2;
      closure_3 = _slicedToArray(userId(7976)(userId, guildId), 1)[0];
      userId(5393)(() => {
        AnalyticsUtilsDefault.track(constants.OPEN_MODAL, { type, guild_id: guildId, other_user_id: userId });
      });
      let obj = {};
      const merged1 = Object.assign(merged);
      let intl = guildId(1126).intl;
      obj.title = intl.string(guildId(1126).t["+ZD3ou"]);
      obj.style = tmp2.wrapper;
      const intl2 = guildId(1126).intl;
      obj.cancelText = intl2.string(guildId(1126).t["ETE/oC"]);
      let onClose;
      if (merged != null) {
        onClose = merged.onClose;
      }
      obj.onClose = onClose;
      obj.onCancel = guildId.onCancel;
      const intl3 = tmp9(1126).intl;
      obj.confirmText = intl3.string(guildId(1126).t.qXtNtS);
      obj.onConfirm = function handleConfirmRemoveTimeout() {
        const self = this;
        const apply = closure_4.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      };
      const obj2 = { style: tmp2.body, children: null };
      let obj3 = { style: tmp2.description, variant: "text-sm/medium", children: null };
      const intl4 = tmp9(1126).intl;
      const user = UserStore.getUser(userId);
      const tmp7 = userId(5395);
      let str = userId(5406).getName(guildId, null, user);
      if (str == null) {
        str = "";
      }
      obj3.children = intl4.format(guildId(1126).t["t+abNU"], {
        username: str,
        countdown(arg0) {
          let num = 0;
          if (null != closure_3) {
            const _Date = Date;
            num = new Date(closure_3);
          }
          return __initData(CountDownDefault, { style: countdown.countdown, deadline: num, withUnits: true });
        },
      });
      const items = [closure_12(guildId(5087).Text, obj3)];
      let obj5 = { style: null, variant: "text-sm/medium", children: null };
      const items1 = [,];
      ({ cta: arr2[0], description: arr2[1] } = tmp2);
      obj5.style = items1;
      const intl5 = tmp9(1126).intl;
      obj5.children = intl5.format(guildId(1126).t.KtENkK, { link });
      items[1] = closure_12(guildId(5087).Text, obj5);
      obj2.children = items;
      obj.children = closure_13(View, obj2);
      return closure_12(tmp7, obj);
    };
