// discord_app/modules/guild_role_subscriptions/native/components/RoleTierEditScenesModal.tsx
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import usePriceTiers from "usePriceTiers" /* 16950 */;
import { GuildRoleSubscriptionsTierScenes as closure_7 } from "MAX_SUBSCRIPTION_TIERS" /* 14551 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

const require = arg1;
function orderify(str) {
  const sum = arg1 + 1;
  if (typeof str === "string") {
    let obj = { stepNumber: null, scene: null };
    obj[0] = sum;
    obj[1] = str;
  } else {
    obj = {};
    const merged = Object.assign(str);
    obj.stepNumber = sum;
  }
  return obj;
}
({ useCurrentTierEditScene: c5, useResetTierEditState: closure_6 } = usePriceTiers);
({ jsx: closure_8, Fragment: c9, jsxs: c10 } = jsxProd);
let closure_11 = createCacheKey.createStyles({ stepsIndicator: { position: "absolute", alignSelf: "center", height: 48 } });
const result = require("set").fileFinishedImporting("modules/guild_role_subscriptions/native/components/RoleTierEditScenesModal.tsx");

export default function RoleTierEditScenesModal(modalKey) {
  const _require = modalKey;
  function handleClose(arg0) {

  }
  modalKey = modalKey.modalKey;
  const steps = modalKey.steps;
  const onClose = modalKey.onClose;
  let tmp = callback4();
  [closure_4, closure_5] = onClose(callback(), 2);
  callback2 = callback2();
  let tmp3 = onClose(React.useState(0), 2);
  closure_7 = tmp3[1];
  let items = [modalKey];
  const callback3 = React.useCallback(() => {
    modalKey(steps[17]).popWithKey(modalKey);
  }, items);
  let items1 = [steps];
  const memo = React.useMemo(() => steps.map((str) => {
    let scene = str;
    if (typeof str !== "string") {
      scene = str.scene;
    }
    return scene;
  }), items1);
  const tmp2 = onClose(callback(), 2);
  let obj = { children: null };
  ({ screens, initialStack } = modalKey(steps[18])(() => {
    let sum;
    ({ steps, stepScreenPropsMap } = DETAILS);
    let obj = {};
    let merged = Object.assign(DETAILS, Object.create(null));
    const mapped = steps.map(closure_1_12);
    let num = 0;
    if (0 < steps.length) {
      do {
        sum = num + 1;
        let tmp6 = mapped[sum];
        let tmp7 = num;
        let scene;
        if (tmp6 != null) {
          scene = tmp6.scene;
        }
        if (scene == null) {
          scene = null;
        }
        obj = {};
        let tmp9 = obj;
        let merged1 = Object.assign(mapped[num]);
        obj.nextStep = scene;
        obj.stepsCount = tmp4;
        obj[mapped[num].scene] = obj;
        num = sum;
      } while (sum < steps.length);
    }
    DETAILS = obj;
    closure_1 = merged;
    obj = {
      fullscreen: true,
      headerTitle() {
        return null;
      }
    };
    obj1 = {};
    let merged2 = Object.assign(obj);
    DETAILS = lib.GATING;
    closure_1 = tmp;
    obj1.headerRight = () => {
      const obj = {
        source: callback(closure_1_2[8]),
        onPress() {
          if (closure_3 != null) {
            tmp2(tmp);
          }
          callback2();
          callback();
        },
        accessibilityLabel: null
      };
      const intl = DETAILS(closure_1_2[9]).intl;
      obj[2] = intl.string(DETAILS(closure_1_2[9]).t.cpT0Cq);
      return closure_1_8(DETAILS(closure_1_2[7]).HeaderActionButton, obj);
    };
    if (null == stepScreenPropsMap) {
      let obj2 = {};
    } else {
      obj2 = stepScreenPropsMap[tmp13];
      if (obj2 == null) {
        obj2 = {};
      }
    }
    const obj3 = {};
    let merged3 = Object.assign(obj2);
    obj1.render = function render() {
      const GATING = closure_1_7.GATING;
      callback(closure_1_2[6])(null != DETAILS[GATING], "Props not provided in screen map for scene " + GATING);
      const getRuntimeProps = tmp2.getRuntimeProps;
      let runtimeProps;
      if (getRuntimeProps != null) {
        runtimeProps = getRuntimeProps();
      }
      if (runtimeProps == null) {
        runtimeProps = {};
      }
      let obj = {};
      const merged = Object.assign(callback);
      const merged1 = Object.assign(tmp2);
      const merged2 = Object.assign(runtimeProps);
      let extraProps = tmp2.extraProps;
      if (extraProps == null) {
        extraProps = [];
      }
      const merged3 = Object.assign(extraProps);
      obj = {};
      const tmp = callback;
      const tmp3 = callback;
      const tmp4 = closure_1_2;
      const tmp5 = callback(closure_1_2[6]);
      const tmp6 = null != DETAILS[GATING];
      const merged4 = Object.assign(obj);
      return closure_1_8(callback(closure_1_2[10]), obj);
    };
    obj3[lib.GATING] = obj1;
    const obj4 = {};
    let merged4 = Object.assign(obj);
    DETAILS = tmp11.GROUP;
    closure_1 = tmp;
    obj4.headerRight = () => {
      const obj = {
        source: callback(closure_1_2[8]),
        onPress() {
          if (closure_3 != null) {
            tmp2(tmp);
          }
          callback2();
          callback();
        },
        accessibilityLabel: null
      };
      const intl = DETAILS(closure_1_2[9]).intl;
      obj[2] = intl.string(DETAILS(closure_1_2[9]).t.cpT0Cq);
      return closure_1_8(DETAILS(closure_1_2[7]).HeaderActionButton, obj);
    };
    if (null == stepScreenPropsMap) {
      let obj5 = {};
    } else {
      obj5 = stepScreenPropsMap[tmp16];
      if (obj5 == null) {
        obj5 = {};
      }
    }
    const merged5 = Object.assign(obj5);
    obj4.render = function render() {
      const GROUP = closure_1_7.GROUP;
      callback(closure_1_2[6])(null != DETAILS[GROUP], "Props not provided in screen map for scene " + GROUP);
      const getRuntimeProps = tmp2.getRuntimeProps;
      let runtimeProps;
      if (getRuntimeProps != null) {
        runtimeProps = getRuntimeProps();
      }
      if (runtimeProps == null) {
        runtimeProps = {};
      }
      let obj = {};
      const merged = Object.assign(callback);
      const merged1 = Object.assign(tmp2);
      const merged2 = Object.assign(runtimeProps);
      let extraProps = tmp2.extraProps;
      if (extraProps == null) {
        extraProps = [];
      }
      const merged3 = Object.assign(extraProps);
      obj = {};
      const tmp = callback;
      const tmp3 = callback;
      const tmp4 = closure_1_2;
      const tmp5 = callback(closure_1_2[6]);
      const tmp6 = null != DETAILS[GROUP];
      const merged4 = Object.assign(obj);
      return closure_1_8(callback(closure_1_2[11]), obj);
    };
    obj3[lib.GROUP] = obj4;
    const obj6 = {};
    const merged6 = Object.assign(obj);
    DETAILS = tmp11.CHANNEL_BENEFITS;
    closure_1 = tmp;
    obj6.headerRight = () => {
      const obj = {
        source: callback(closure_1_2[8]),
        onPress() {
          if (closure_3 != null) {
            tmp2(tmp);
          }
          callback2();
          callback();
        },
        accessibilityLabel: null
      };
      const intl = DETAILS(closure_1_2[9]).intl;
      obj[2] = intl.string(DETAILS(closure_1_2[9]).t.cpT0Cq);
      return closure_1_8(DETAILS(closure_1_2[7]).HeaderActionButton, obj);
    };
    if (null == stepScreenPropsMap) {
      let obj7 = {};
    } else {
      obj7 = stepScreenPropsMap[tmp19];
      if (obj7 == null) {
        obj7 = {};
      }
    }
    const merged7 = Object.assign(obj7);
    obj6.render = function render() {
      const CHANNEL_BENEFITS = closure_1_7.CHANNEL_BENEFITS;
      callback(closure_1_2[6])(null != DETAILS[CHANNEL_BENEFITS], "Props not provided in screen map for scene " + CHANNEL_BENEFITS);
      const getRuntimeProps = tmp2.getRuntimeProps;
      let runtimeProps;
      if (getRuntimeProps != null) {
        runtimeProps = getRuntimeProps();
      }
      if (runtimeProps == null) {
        runtimeProps = {};
      }
      let obj = {};
      const merged = Object.assign(callback);
      const merged1 = Object.assign(tmp2);
      const merged2 = Object.assign(runtimeProps);
      let extraProps = tmp2.extraProps;
      if (extraProps == null) {
        extraProps = [];
      }
      const merged3 = Object.assign(extraProps);
      obj = {};
      const merged4 = Object.assign(obj);
      return closure_1_8(DETAILS(closure_1_2[12]).GuildRoleSubscriptionTierChannelBenefitsModal, obj);
    };
    obj3[lib.CHANNEL_BENEFITS] = obj6;
    const obj8 = {};
    const merged8 = Object.assign(obj);
    DETAILS = tmp11.INTANGIBLE_BENEFITS;
    closure_1 = tmp;
    obj8.headerRight = () => {
      const obj = {
        source: callback(closure_1_2[8]),
        onPress() {
          if (closure_3 != null) {
            tmp2(tmp);
          }
          callback2();
          callback();
        },
        accessibilityLabel: null
      };
      const intl = DETAILS(closure_1_2[9]).intl;
      obj[2] = intl.string(DETAILS(closure_1_2[9]).t.cpT0Cq);
      return closure_1_8(DETAILS(closure_1_2[7]).HeaderActionButton, obj);
    };
    if (null == stepScreenPropsMap) {
      let obj9 = {};
    } else {
      obj9 = stepScreenPropsMap[tmp22];
      if (obj9 == null) {
        obj9 = {};
      }
    }
    const merged9 = Object.assign(obj9);
    obj8.render = function render() {
      const INTANGIBLE_BENEFITS = closure_1_7.INTANGIBLE_BENEFITS;
      callback(closure_1_2[6])(null != DETAILS[INTANGIBLE_BENEFITS], "Props not provided in screen map for scene " + INTANGIBLE_BENEFITS);
      const getRuntimeProps = tmp2.getRuntimeProps;
      let runtimeProps;
      if (getRuntimeProps != null) {
        runtimeProps = getRuntimeProps();
      }
      if (runtimeProps == null) {
        runtimeProps = {};
      }
      let obj = {};
      const merged = Object.assign(callback);
      const merged1 = Object.assign(tmp2);
      const merged2 = Object.assign(runtimeProps);
      let extraProps = tmp2.extraProps;
      if (extraProps == null) {
        extraProps = [];
      }
      const merged3 = Object.assign(extraProps);
      obj = {};
      const merged4 = Object.assign(obj);
      return closure_1_8(DETAILS(closure_1_2[12]).GuildRoleSubscriptionTierIntangibleBenefitsModal, obj);
    };
    obj3[lib.INTANGIBLE_BENEFITS] = obj8;
    const obj10 = {};
    const merged10 = Object.assign(obj);
    DETAILS = tmp11.CONFIRMATION;
    closure_1 = tmp;
    obj10.headerRight = () => {
      const obj = {
        source: callback(closure_1_2[8]),
        onPress() {
          if (closure_3 != null) {
            tmp2(tmp);
          }
          callback2();
          callback();
        },
        accessibilityLabel: null
      };
      const intl = DETAILS(closure_1_2[9]).intl;
      obj[2] = intl.string(DETAILS(closure_1_2[9]).t.cpT0Cq);
      return closure_1_8(DETAILS(closure_1_2[7]).HeaderActionButton, obj);
    };
    if (null == stepScreenPropsMap) {
      let obj11 = {};
    } else {
      obj11 = stepScreenPropsMap[tmp25];
      if (obj11 == null) {
        obj11 = {};
      }
    }
    const merged11 = Object.assign(obj11);
    obj10.render = function render() {
      const CONFIRMATION = closure_1_7.CONFIRMATION;
      callback(closure_1_2[6])(null != DETAILS[CONFIRMATION], "Props not provided in screen map for scene " + CONFIRMATION);
      const getRuntimeProps = tmp2.getRuntimeProps;
      let runtimeProps;
      if (getRuntimeProps != null) {
        runtimeProps = getRuntimeProps();
      }
      if (runtimeProps == null) {
        runtimeProps = {};
      }
      let obj = {};
      const merged = Object.assign(callback);
      const merged1 = Object.assign(tmp2);
      const merged2 = Object.assign(runtimeProps);
      let extraProps = tmp2.extraProps;
      if (extraProps == null) {
        extraProps = [];
      }
      const merged3 = Object.assign(extraProps);
      obj = {};
      const tmp = callback;
      const tmp3 = callback;
      const tmp4 = closure_1_2;
      const tmp5 = callback(closure_1_2[6]);
      const tmp6 = null != DETAILS[CONFIRMATION];
      const merged4 = Object.assign(obj);
      return closure_1_8(callback(closure_1_2[13]), obj);
    };
    obj3[lib.CONFIRMATION] = obj10;
    const obj12 = {};
    const merged12 = Object.assign(obj);
    DETAILS = tmp11.DESIGN;
    closure_1 = tmp;
    obj12.headerRight = () => {
      const obj = {
        source: callback(closure_1_2[8]),
        onPress() {
          if (closure_3 != null) {
            tmp2(tmp);
          }
          callback2();
          callback();
        },
        accessibilityLabel: null
      };
      const intl = DETAILS(closure_1_2[9]).intl;
      obj[2] = intl.string(DETAILS(closure_1_2[9]).t.cpT0Cq);
      return closure_1_8(DETAILS(closure_1_2[7]).HeaderActionButton, obj);
    };
    if (null == stepScreenPropsMap) {
      let obj13 = {};
    } else {
      obj13 = stepScreenPropsMap[tmp28];
      if (obj13 == null) {
        obj13 = {};
      }
    }
    const merged13 = Object.assign(obj13);
    obj12.render = function render() {
      const DESIGN = closure_1_7.DESIGN;
      callback(closure_1_2[6])(null != DETAILS[DESIGN], "Props not provided in screen map for scene " + DESIGN);
      const getRuntimeProps = tmp2.getRuntimeProps;
      let runtimeProps;
      if (getRuntimeProps != null) {
        runtimeProps = getRuntimeProps();
      }
      if (runtimeProps == null) {
        runtimeProps = {};
      }
      let obj = {};
      const merged = Object.assign(callback);
      const merged1 = Object.assign(tmp2);
      const merged2 = Object.assign(runtimeProps);
      let extraProps = tmp2.extraProps;
      if (extraProps == null) {
        extraProps = [];
      }
      const merged3 = Object.assign(extraProps);
      obj = {};
      const tmp = callback;
      const tmp3 = callback;
      const tmp4 = closure_1_2;
      const tmp5 = callback(closure_1_2[6]);
      const tmp6 = null != DETAILS[DESIGN];
      const merged4 = Object.assign(obj);
      return closure_1_8(callback(closure_1_2[14]), obj);
    };
    obj3[lib.DESIGN] = obj12;
    const obj14 = {};
    const merged14 = Object.assign(obj);
    DETAILS = tmp11.DETAILS;
    closure_1 = tmp;
    obj14.headerRight = () => {
      const obj = {
        source: callback(closure_1_2[8]),
        onPress() {
          if (closure_3 != null) {
            tmp2(tmp);
          }
          callback2();
          callback();
        },
        accessibilityLabel: null
      };
      const intl = DETAILS(closure_1_2[9]).intl;
      obj[2] = intl.string(DETAILS(closure_1_2[9]).t.cpT0Cq);
      return closure_1_8(DETAILS(closure_1_2[7]).HeaderActionButton, obj);
    };
    if (null == stepScreenPropsMap) {
      let obj15 = {};
    } else {
      obj15 = stepScreenPropsMap[tmp31];
      if (obj15 == null) {
        obj15 = {};
      }
    }
    const obj16 = { screens: null, initialStack: null };
    const merged15 = Object.assign(obj15);
    obj14.render = function render() {
      DETAILS = closure_1_7.DETAILS;
      callback(closure_1_2[6])(null != DETAILS[DETAILS], "Props not provided in screen map for scene " + DETAILS);
      const getRuntimeProps = tmp2.getRuntimeProps;
      let runtimeProps;
      if (getRuntimeProps != null) {
        runtimeProps = getRuntimeProps();
      }
      if (runtimeProps == null) {
        runtimeProps = {};
      }
      let obj = {};
      const merged = Object.assign(callback);
      const merged1 = Object.assign(tmp2);
      const merged2 = Object.assign(runtimeProps);
      let extraProps = tmp2.extraProps;
      if (extraProps == null) {
        extraProps = [];
      }
      const merged3 = Object.assign(extraProps);
      obj = {};
      const tmp = callback;
      const tmp3 = callback;
      const tmp4 = closure_1_2;
      const tmp5 = callback(closure_1_2[6]);
      const tmp6 = null != DETAILS[DETAILS];
      const merged4 = Object.assign(obj);
      return closure_1_8(callback(closure_1_2[15]), obj);
    };
    obj3[lib.DETAILS] = obj14;
    obj16[0] = obj3;
    let arr = memo;
    modalKey(steps[6])(memo.length > 0, "At least one step must be provided to RoleTierEditScenesModal");
    if (null == closure_4) {
      const obj17 = { name: null };
      obj17[0] = arr[0];
      const items = [obj17];
      let tmp35 = items;
    } else {
      const items1 = [];
      let num2 = 0;
      tmp35 = items1;
      if (0 < arr.length) {
        const obj18 = { name: null };
        obj18[0] = arr[num2];
        arr = items1.push(obj18);
        tmp35 = items1;
        while (arr[num2] !== closure_4) {
          num2 = num2 + 1;
          tmp35 = items1;
          if (num2 < arr.length) {
            continue;
          } else {
            break;
          }
          break;
        }
      }
    }
    obj16[1] = tmp35;
    return obj16;
  }));
  obj = {
    screens,
    initialRouteStack: initialStack,
    onWillFocus(route) {
      const name = route.route.name;
      if (null != name) {
        callback(name);
        const findIndexResult = memo.findIndex((arg0) => arg0 === name);
        if (findIndexResult >= 0) {
          lib(findIndexResult);
        }
      }
    },
    headerBackTitle: null
  };
  let intl = _require(steps[9]).intl;
  obj[3] = intl.string(_require(steps[9]).t["13/7kX"]);
  const items2 = [callback3(_require(steps[19]).Navigator, obj), ];
  obj = { style: items3, current: tmp3[0] + 1, total: memo.length };
  items3 = [tmp.stepsIndicator, { top: modalKey(steps[16])().top }];
  items2[1] = callback3(modalKey(steps[20]), obj);
  obj[0] = items2;
  return memo(handleClose, obj);
};