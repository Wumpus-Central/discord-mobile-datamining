// === Module 12087: GuildEnableCommunicationAlert ===

// Module 12087 (GuildEnableCommunicationAlert)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import CountDownDefault from "CountDown" /* 11180 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1372 */;

const require = fn;
const View = fn(17).View;
const GuildDisableCommunicationConstants = fn(2024);
({ CLEAR_COMMUNICATION_DISABLED_MODAL_NAME: closure_7, GUILD_COMMUNICATION_DISABLED_RESOURCE_LINK: closure_8 } = GuildDisableCommunicationConstants);
const Constants = fn(1074);
({ AnalyticEvents: closure_9, Fonts } = Constants);
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(4722);
let closure_12 = createStyles.createStyles({ wrapper: { padding: 16 }, body: { paddingTop: 16 }, description: { lineHeight: 18 }, cta: { paddingTop: 8 }, countdown: { fontFamily: Fonts.PRIMARY_SEMIBOLD } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_communication_disabled/native/GuildEnableCommunicationAlert.tsx");

export default function GuildEnableCommunicationAlert(guildId) {
  guildId = guildId.guildId;
  const userId = guildId.userId;
  const merged = Object.assign(guildId, Object.assign({ guildId: 0, userId: 0, onCancel: 0 }));
  _slicedToArray = async function _handleConfirmRemoveTimeout(arg0) {
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
        return { value: "HermesInternal", done: null };
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
            const obj5 = { value: v1(12086).setCommunicationDisabledDuration(guildId, userId), done: false };
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
          const intl = tmp4(1115).intl;
          obj7.content = intl.string(tmp4(1115).t["/Mmbfv"]);
          obj7.icon = v1(9814);
          v1(4420).open(obj7);
          dependencyMap = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp9) {
        dependencyMap = tmp;
        throw tmp9;
      }
    }
  };
  const tmp2 = closure_12();
  dependencyMap = tmp2;
  closure_3 = _slicedToArray(userId(8196)(userId, guildId), 1)[0];
  userId(5161)(() => {
    AnalyticsUtilsDefault.track(constants.OPEN_MODAL, { type, guild_id: guildId, other_user_id: userId });
  });
  let obj = {};
  const merged1 = Object.assign(merged);
  let intl = guildId(1115).intl;
  obj.title = intl.string(guildId(1115).t["+ZD3ou"]);
  obj.style = tmp2.wrapper;
  const intl2 = guildId(1115).intl;
  obj.cancelText = intl2.string(guildId(1115).t["ETE/oC"]);
  let onClose;
  if (merged != null) {
    onClose = merged.onClose;
  }
  obj.onClose = onClose;
  obj.onCancel = guildId.onCancel;
  const intl3 = tmp9(1115).intl;
  obj.confirmText = intl3.string(guildId(1115).t.qXtNtS);
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
  const intl4 = tmp9(1115).intl;
  const user = UserStore.getUser(userId);
  const tmp7 = userId(5163);
  let str = userId(4874).getName(guildId, null, user);
  if (str == null) {
    str = "";
  }
  obj3.children = intl4.format(guildId(1115).t["t+abNU"], {
    username: str,
    countdown(arg0) {
      let num = 0;
      if (null != closure_3) {
        const _Date = Date;
        num = new Date(closure_3);
      }
      return closure_2_10(CountDownDefault, { style: countdown.countdown, deadline: num, withUnits: true });
    }
  });
  const items = [closure_10(guildId(4718).Text, obj3), ];
  let obj5 = { style: null, variant: "text-sm/medium", children: null };
  const items1 = [, ];
  ({ cta: arr2[0], description: arr2[1] } = tmp2);
  obj5.style = items1;
  const intl5 = tmp9(1115).intl;
  obj5.children = intl5.format(guildId(1115).t.KtENkK, { link });
  items[1] = closure_10(guildId(4718).Text, obj5);
  obj2.children = items;
  obj.children = closure_11(View, obj2);
  return closure_10(tmp7, obj);
};