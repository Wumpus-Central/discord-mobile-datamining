// === Module 7644: DoubleTapNitroAlert ===

// Module 7644 (DoubleTapNitroAlert)
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import CircleErrorIcon from "CircleErrorIcon" /* 4806 */;
import AlertModal from "AlertModal" /* 5720 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const NITRO_UPSELL_ALERT_KEY = fn(7639).NITRO_UPSELL_ALERT_KEY;
const UserSettingsSections = fn(1085).UserSettingsSections;
const MobileUserSettings = fn(7645).MobileUserSettings;
const jsxProd = fn(21);
({ jsx: closure_7, Fragment: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4896);
let closure_10 = createStyles.createStyles({ icon: { alignItems: "center", justifyContent: "center" } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/double_tap_to_react/native/DoubleTapNitroAlert.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((emojiName) => {
  const cResult = c.c(13);
  emojiName = emojiName.emojiName;
  const tmp4 = closure_10();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function l() {
      const obj2 = { screen: constants.TEXT, params: { initialSetting: constants2.DOUBLE_TAP_EMOJI } };
      require("openUserSettings").openUserSettings(obj2);
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    class E {
      constructor() {
        obj = closure_1_0(closure_1_1[9]);
        obj1 = { screen: closure_1_5.PREMIUM };
        openUserSettingsResult = obj.openUserSettings(obj1, () => {
          closure_1_0(dependencyMap[10]).dismissAlert(closure_1_4);
        });
        return;
      }
    }
    cResult[1] = E;
  } else {
    class E {
      constructor() {
        obj = closure_1_0(closure_1_1[9]);
        obj1 = { screen: closure_1_5.PREMIUM };
        openUserSettingsResult = obj.openUserSettings(obj1, () => {
          closure_1_0(dependencyMap[10]).dismissAlert(closure_1_4);
        });
        return;
      }
    }
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    class E {
      constructor() {
        obj = closure_1_0(closure_1_1[9]);
        obj1 = { screen: closure_1_5.PREMIUM };
        openUserSettingsResult = obj.openUserSettings(obj1, () => {
          closure_1_0(dependencyMap[10]).dismissAlert(closure_1_4);
        });
        return;
      }
    }
    let obj2 = { size: "custom", style: { width: 40, height: 40 } };
    const tmp8 = React5(CircleErrorIcon.CircleErrorIcon, obj2);
    cResult[2] = tmp8;
    const tmp7 = tmp8;
  } else {
    class E {
      constructor() {
        obj = closure_1_0(closure_1_1[9]);
        obj1 = { screen: closure_1_5.PREMIUM };
        openUserSettingsResult = obj.openUserSettings(obj1, () => {
          closure_1_0(dependencyMap[10]).dismissAlert(closure_1_4);
        });
        return;
      }
    }
  }
  if (cResult[3] !== tmp4.icon) {
    class E {
      constructor() {
        obj = closure_1_0(closure_1_1[9]);
        obj1 = { screen: closure_1_5.PREMIUM };
        openUserSettingsResult = obj.openUserSettings(obj1, () => {
          closure_1_0(dependencyMap[10]).dismissAlert(closure_1_4);
        });
        return;
      }
    }
    const obj3 = { style: tmp4.icon, children: tmp7 };
    const tmp11 = React5(View, obj3);
    cResult[3] = tmp4.icon;
    cResult[4] = tmp11;
  } else {
    class E {
      constructor() {
        obj = closure_1_0(closure_1_1[9]);
        obj1 = { screen: closure_1_5.PREMIUM };
        openUserSettingsResult = obj.openUserSettings(obj1, () => {
          closure_1_0(dependencyMap[10]).dismissAlert(closure_1_4);
        });
        return;
      }
    }
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    class E {
      constructor() {
        obj = closure_1_0(closure_1_1[9]);
        obj1 = { screen: closure_1_5.PREMIUM };
        openUserSettingsResult = obj.openUserSettings(obj1, () => {
          closure_1_0(dependencyMap[10]).dismissAlert(closure_1_4);
        });
        return;
      }
    }
    const stringResult = obj4.string(util.t.HRAWfC);
    cResult[5] = stringResult;
    const tmp12 = stringResult;
  } else {
    class E {
      constructor() {
        obj = closure_1_0(closure_1_1[9]);
        obj1 = { screen: closure_1_5.PREMIUM };
        openUserSettingsResult = obj.openUserSettings(obj1, () => {
          closure_1_0(dependencyMap[10]).dismissAlert(closure_1_4);
        });
        return;
      }
    }
  }
  if (cResult[6] !== emojiName) {
    class E {
      constructor() {
        obj = closure_1_0(closure_1_1[9]);
        obj1 = { screen: closure_1_5.PREMIUM };
        openUserSettingsResult = obj.openUserSettings(obj1, () => {
          closure_1_0(dependencyMap[10]).dismissAlert(closure_1_4);
        });
        return;
      }
    }
    const obj6 = { emojiName, onRenewNitro: E };
    const formatResult = obj5.format(util.t["3u/Je4"], obj6);
    cResult[6] = emojiName;
    cResult[7] = formatResult;
  } else {
    class E {
      constructor() {
        obj = closure_1_0(closure_1_1[9]);
        obj1 = { screen: closure_1_5.PREMIUM };
        openUserSettingsResult = obj.openUserSettings(obj1, () => {
          closure_1_0(dependencyMap[10]).dismissAlert(closure_1_4);
        });
        return;
      }
    }
  }
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    class E {
      constructor() {
        obj = closure_1_0(closure_1_1[9]);
        obj1 = { screen: closure_1_5.PREMIUM };
        openUserSettingsResult = obj.openUserSettings(obj1, () => {
          closure_1_0(dependencyMap[10]).dismissAlert(closure_1_4);
        });
        return;
      }
    }
    const obj7 = { onPress: first, text: null };
    const intl = util.intl;
    obj7.text = intl.string(util.t.LIIHRy);
    const tmp17 = React5(AlertModal.AlertActionButton, obj7, "confirm");
    cResult[8] = tmp17;
    const tmp16 = tmp17;
  } else {
    class E {
      constructor() {
        obj = closure_1_0(closure_1_1[9]);
        obj1 = { screen: closure_1_5.PREMIUM };
        openUserSettingsResult = obj.openUserSettings(obj1, () => {
          closure_1_0(dependencyMap[10]).dismissAlert(closure_1_4);
        });
        return;
      }
    }
  }
  if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
    class E {
      constructor() {
        obj = closure_1_0(closure_1_1[9]);
        obj1 = { screen: closure_1_5.PREMIUM };
        openUserSettingsResult = obj.openUserSettings(obj1, () => {
          closure_1_0(dependencyMap[10]).dismissAlert(closure_1_4);
        });
        return;
      }
    }
    const obj8 = { children: null };
    const items = [tmp16, ];
    const obj9 = { variant: "secondary", text: null };
    const intl2 = util.intl;
    obj9.text = intl2.string(util.t["Nr6v2+"]);
    items[1] = React5(AlertModal.AlertActionButton, obj9, "cancel");
    obj8.children = items;
    const tmp21 = options(closure_1_8, obj8);
    cResult[9] = tmp21;
    const tmp18 = tmp21;
  } else {
    class E {
      constructor() {
        obj = closure_1_0(closure_1_1[9]);
        obj1 = { screen: closure_1_5.PREMIUM };
        openUserSettingsResult = obj.openUserSettings(obj1, () => {
          closure_1_0(dependencyMap[10]).dismissAlert(closure_1_4);
        });
        return;
      }
    }
  }
  if (cResult[10] === tmp9) {
    class E {
      constructor() {
        obj = closure_1_0(closure_1_1[9]);
        obj1 = { screen: closure_1_5.PREMIUM };
        openUserSettingsResult = obj.openUserSettings(obj1, () => {
          closure_1_0(dependencyMap[10]).dismissAlert(closure_1_4);
        });
        return;
      }
    }
    return tmp22;
  }
  tmp22 = React5(AlertModal.AlertModal, { header: tmp9, title: tmp12, content: tmp14, actions: tmp18 });
  cResult[10] = tmp9;
  cResult[11] = tmp14;
  cResult[12] = tmp22;
}) : ((emojiName) => {
  const callback = noop.useCallback(() => {
    const obj2 = { screen: constants.TEXT, params: { initialSetting: constants2.DOUBLE_TAP_EMOJI } };
    require("openUserSettings").openUserSettings(obj2);
  }, []);
  const callback1 = noop.useCallback(() => {
    require("openUserSettings").openUserSettings({ screen: constants.PREMIUM }, () => {
      closure_1_0(dependencyMap[10]).dismissAlert(closure_1_4);
    });
  }, []);
  const obj = { header: null, title: null, content: null, actions: null };
  const tmp = closure_10();
  obj.header = React5(View, { style: closure_10().icon, children: React5(CircleErrorIcon.CircleErrorIcon, { size: "custom", style: { width: 40, height: 40 } }) });
  const intl = util.intl;
  obj.title = intl.string(util.t.HRAWfC);
  const intl2 = util.intl;
  obj.content = intl2.format(util.t["3u/Je4"], { emojiName: emojiName.emojiName, onRenewNitro: callback1 });
  const obj3 = { children: null };
  const obj4 = { onPress: callback, text: null };
  const intl3 = util.intl;
  obj4.text = intl3.string(util.t.LIIHRy);
  const items = [React5(AlertModal.AlertActionButton, obj4, "confirm"), ];
  const obj5 = { variant: "secondary", text: null };
  const intl4 = util.intl;
  obj5.text = intl4.string(util.t["Nr6v2+"]);
  items[1] = React5(AlertModal.AlertActionButton, obj5, "cancel");
  obj3.children = items;
  obj.actions = options(closure_1_8, obj3);
  return React5(AlertModal.AlertModal, obj);
});