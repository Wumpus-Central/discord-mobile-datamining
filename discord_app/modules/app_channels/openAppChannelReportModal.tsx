// === Module 13707: openAppChannelReportModal ===

// Module 13707 (openAppChannelReportModal)
import ApplicationActionCreatorsDefault from "ApplicationActionCreators" /* 6299 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import ApplicationStore from "ApplicationStore" /* 5503 */;

const require = fn;
let closure_5 = async function _getApplication(arg0) {
  if (c5 === 2) {
    c5 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "IconComponent", done: null };
    }
  } else {
    try {
      c5 = 2;
      if (0 === c4) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          closure_2 = tmp3;
          closure_1 = tmp7;
          closure_129_0 = closure_0;
          const application = ApplicationStore.getApplication(closure_0);
          if (null != application) {
            if (ApplicationStore.isHydrated(closure_0)) {
              c5 = 3;
              const obj5 = { value: application, done: true };
              return obj5;
            }
          }
          c3 = 1;
          c4 = 2;
          c5 = 1;
          const obj6 = { value: ApplicationActionCreatorsDefault.fetchApplication(closure_0), done: false };
          return obj6;
        }
      } else if (1 === tmp7) {
        c3 = 0;
        c5 = 3;
        return { value: null, done: true };
      } else if (arg0 === 1) {
        c5 = 3;
        throw value;
      } else if (arg0 === 2) {
        c3 = 0;
        c5 = 3;
        const obj7 = { value, done: true };
        return obj7;
      } else {
        c3 = 0;
        c5 = 3;
        const obj = { value: closure_130_4.getApplication(closure_129_0), done: true };
        return obj;
      }
    } catch (tmp15) {
      if (tmp4 === c3) {
        c5 = tmp2;
        throw tmp15;
      } else {
        c4 = tmp;
      }
    }
  }
};
let closure_6 = async function _openAppChannelReportModal(arg0) {
  if (c7 === 2) {
    c7 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "IconComponent", done: null };
    }
  } else {
    try {
      c7 = 2;
      if (0 === c6) {
        if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c7 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_5 = tmp5;
          closure_4 = tmp2;
          closure_132_0 = closure_1;
          closure_132_1 = closure_2;
          closure_132_2 = undefined;
          c6 = 1;
          c7 = 1;
          const obj4 = {
            value: (function getApplication() {
                      const self = this;
                      const apply = closure_1_5.apply;
                      if (typeof apply === "unknown") {
                        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                      } else {
                        applyArgumentsResult = apply(self, arguments);
                      }
                      return applyArgumentsResult;
                    })(closure_0),
            done: false
          };
          return obj4;
        }
      } else if (arg0 === 1) {
        c7 = 3;
        throw value;
      } else if (arg0 === 2) {
        c7 = 3;
        const obj5 = { value, done: true };
        return obj5;
      } else {
        closure_132_2 = value;
        if (null != closure_132_2) {
          const obj6 = { application: closure_132_2, entrypoint: closure_132_1, contextualGuildId: null, contextualChannelId: null };
          const guildId = closure_132_0.getGuildId();
          let contextualGuildId = guildId;
          if (guildId == null) {
            contextualGuildId = undefined;
          }
          obj6.contextualGuildId = contextualGuildId;
          obj6.contextualChannelId = closure_132_0.id;
          const result = closure_133_0(closure_133_2[4]).showReportModalForApp(obj6);
          const obj = closure_133_0(closure_133_2[4]);
        } else {
          closure_133_1(closure_133_2[3])();
        }
        c7 = 3;
      }
    } catch (tmp25) {
      c7 = tmp;
      throw tmp25;
    }
  }
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/app_channels/openAppChannelReportModal.tsx");

export default function openAppChannelReportModal() {
  const self = this;
  const apply = closure_6.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};