// === Module 11843: GuildEnableCommunicationAlert ===

// Module 11843 (GuildEnableCommunicationAlert)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import CountDownDefault from "CountDown" /* 10930 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1371 */;

const require = fn;
const View = fn(17).View;
const GuildDisableCommunicationConstants = fn(2023);
({ CLEAR_COMMUNICATION_DISABLED_MODAL_NAME: closure_7, GUILD_COMMUNICATION_DISABLED_RESOURCE_LINK: closure_8 } = GuildDisableCommunicationConstants);
const Constants = fn(1074);
({ AnalyticEvents: closure_9, Fonts } = Constants);
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
fn(4560);
const createStyles = { wrapper: { padding: 16 }, body: { paddingTop: 16 }, description: { lineHeight: 18 }, cta: { paddingTop: 8 }, countdown: { fontFamily: Fonts.PRIMARY_SEMIBOLD } };
let closure_12 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_communication_disabled/native/GuildEnableCommunicationAlert.tsx");

export default function GuildEnableCommunicationAlert(guildId) {
  guildId = guildId.guildId;
  const userId = guildId.userId;
  const merged = Object.assign(guildId, Object.assign({ guildId: 0, userId: 0, onCancel: 0 }));
  _slicedToArray = async function _handleConfirmRemoveTimeout(arg0, value) {
    if (dependencyMap === 2) {
      dependencyMap = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj = { value, done: true };
        return obj;
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
            obj = { value, done: true };
            return obj;
          } else {
            let obj1 = v1(11842);
            v1 = 1;
            dependencyMap = 1;
            obj1 = { value: null, done: false };
            obj1.value = obj1.setCommunicationDisabledDuration(guildId, userId);
            return obj1;
          }
        } else if (arg0 === 1) {
          dependencyMap = 3;
          throw value;
        } else if (arg0 === 2) {
          dependencyMap = 3;
          obj = { value, done: true };
          return obj;
        } else {
          const obj2 = { key: "GUILD_ENABLE_COMMUNICATION_SUCCESS", content: null, icon: null };
          const intl = tmp4(1114).intl;
          obj2.content = intl.string(tmp4(1114).t["/Mmbfv"]);
          obj2.icon = v1(9566);
          v1(4259).open(obj2);
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
  closure_3 = _slicedToArray(userId(7977)(userId, guildId), 1)[0];
  userId(4992)(() => {
    const obj = { type, guild_id: guildId, other_user_id: userId };
    obj.track(constants.OPEN_MODAL, obj);
  });
  let obj = {};
  const merged1 = Object.assign(merged);
  let intl = guildId(1114).intl;
  obj.title = intl.string(guildId(1114).t["+ZD3ou"]);
  obj.style = tmp2.wrapper;
  const intl2 = guildId(1114).intl;
  obj.cancelText = intl2.string(guildId(1114).t["ETE/oC"]);
  let onClose;
  if (merged != null) {
    onClose = merged.onClose;
  }
  obj.onClose = onClose;
  obj.onCancel = guildId.onCancel;
  const intl3 = tmp9(1114).intl;
  obj.confirmText = intl3.string(guildId(1114).t.qXtNtS);
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
  obj = { style: tmp2.body, children: null };
  obj = { style: tmp2.description, variant: "text-sm/medium", children: null };
  const intl4 = tmp9(1114).intl;
  const user = UserStore.getUser(userId);
  const tmp11 = closure_11;
  const tmp12 = View;
  const tmp7 = userId(4994);
  let str = userId(4712).getName(guildId, null, user);
  if (str == null) {
    str = "";
  }
  obj.children = intl4.format(guildId(1114).t["t+abNU"], {
    username: str,
    countdown(arg0) {
      let num = 0;
      if (null != closure_3) {
        const _Date = Date;
        num = new Date(tmp);
      }
      return closure_2_10(CountDownDefault, { style: countdown.countdown, deadline: num, withUnits: true });
    }
  });
  const items = [closure_10(guildId(4556).Text, obj), ];
  let obj2 = { style: null, variant: "text-sm/medium", children: null };
  const items1 = [, ];
  ({ cta: arr2[0], description: arr2[1] } = tmp2);
  obj2.style = items1;
  const intl5 = tmp9(1114).intl;
  obj2.children = intl5.format(guildId(1114).t.KtENkK, { link });
  items[1] = closure_10(guildId(4556).Text, obj2);
  obj.children = items;
  obj.children = tmp11(tmp12, obj);
  return closure_10(tmp7, obj);
};