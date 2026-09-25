// === Module 17536: RoleTierEditScenesModal ===

// Module 17536 (RoleTierEditScenesModal)
import _modDef38 from "module_38" /* 38 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5032 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

const require = fn;
function orderify(scene, arg1) {
  const sum = arg1 + 1;
  if (typeof scene === "string") {
    const obj = { stepNumber: sum, scene };
    let obj2 = obj;
  } else {
    obj2 = {};
    const merged = Object.assign(scene);
    obj2.stepNumber = sum;
  }
  return obj2;
}
const RoleTierEditStore = fn(17523);
({ useCurrentTierEditScene: hasOwnProperty, useResetTierEditState: metroRequire } = RoleTierEditStore);
let closure_7 = fn(14724).GuildRoleSubscriptionsTierScenes;
const jsxProd = fn(21);
({ jsx: closure_8, Fragment: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4829);
let closure_11 = createStyles.createStyles({ stepsIndicator: { position: "absolute", alignSelf: "center", height: 48 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/RoleTierEditScenesModal.tsx");

export default function RoleTierEditScenesModal(modalKey) {
  _require = modalKey;
  function handleClose(arg0) {

  }
  modalKey = modalKey.modalKey;
  const steps = modalKey.steps;
  const onClose = modalKey.onClose;
  const tmp = closure_11();
  [noop, closure_5] = onClose(closure_5(), 2);
  closure_6 = closure_6();
  const tmp3 = onClose(noop.useState(0), 2);
  closure_7 = tmp3[1];
  let items = [modalKey];
  closure_8 = noop.useCallback(() => {
    ModalActionCreatorsDefault.popWithKey(modalKey);
  }, items);
  let items1 = [steps];
  const memo = noop.useMemo(() => steps.map((scene) => {
    if (typeof scene !== "string") {
      scene = scene.scene;
    }
    return scene;
  }), items1);
  const tmp2 = onClose(closure_5(), 2);
  let obj = { children: null };
  ({ screens, initialStack } = modalKey(steps[18])(() => {
    let sum;
    ({ steps, stepScreenPropsMap } = DETAILS);
    let obj = {};
    let merged = Object.assign(DETAILS, Object.assign({ steps: 0, stepScreenPropsMap: 0 }));
    const mapped = steps.map(orderify);
    let num = 0;
    if (0 < steps.length) {
      do {
        sum = num + 1;
        let tmp6 = mapped[sum];
        let scene;
        if (tmp6 != null) {
          scene = tmp6.scene;
        }
        if (scene == null) {
          scene = null;
        }
        let obj2 = {};
        let merged1 = Object.assign(mapped[num]);
        obj2.nextStep = scene;
        obj2.stepsCount = tmp4;
        obj[mapped[num].scene] = obj2;
        num = sum;
      } while (sum < steps.length);
    }
    const obj3 = {
      fullscreen: true,
      headerTitle() {
        return null;
      }
    };
    const obj4 = {};
    let merged2 = Object.assign(obj3);
    DETAILS = constants.GATING;
    closure_1 = handleClose;
    obj4.headerRight = () => {
      const obj = {
        source: modalKey(steps[8]),
        onPress() {
          if (closure_129_3 != null) {
            tmp2(tmp);
          }
          closure_129_8();
          closure_129_6();
        },
        accessibilityLabel: null
      };
      const intl = DETAILS(steps[9]).intl;
      obj.accessibilityLabel = intl.string(DETAILS(steps[9]).t.cpT0Cq);
      return closure_8(DETAILS(steps[7]).HeaderActionButton, obj);
    };
    if (null == stepScreenPropsMap) {
      let obj5 = {};
    } else {
      obj5 = stepScreenPropsMap[tmp13];
      if (obj5 == null) {
        obj5 = {};
      }
    }
    const obj6 = {};
    let merged3 = Object.assign(obj5);
    obj4.render = function render() {
      const GATING = constants.GATING;
      modalKey(steps[6])(null != DETAILS[GATING], "Props not provided in screen map for scene " + GATING);
      const getRuntimeProps = tmp2.getRuntimeProps;
      let runtimeProps;
      if (getRuntimeProps != null) {
        runtimeProps = getRuntimeProps();
      }
      if (runtimeProps == null) {
        runtimeProps = {};
      }
      const merged = Object.assign(closure_1);
      const merged1 = Object.assign(tmp2);
      const merged2 = Object.assign(runtimeProps);
      let extraProps = tmp2.extraProps;
      if (extraProps == null) {
        extraProps = [];
      }
      const merged3 = Object.assign(extraProps);
      const obj = {};
      const obj2 = {};
      const tmp5 = modalKey(steps[6]);
      const tmp6 = null != DETAILS[GATING];
      const merged4 = Object.assign(obj);
      return closure_8(modalKey(steps[10]), obj2);
    };
    obj6[constants.GATING] = obj4;
    const obj7 = {};
    let merged4 = Object.assign(obj3);
    DETAILS = constants.GROUP;
    closure_1 = handleClose;
    obj7.headerRight = () => {
      const obj = {
        source: modalKey(steps[8]),
        onPress() {
          if (closure_129_3 != null) {
            tmp2(tmp);
          }
          closure_129_8();
          closure_129_6();
        },
        accessibilityLabel: null
      };
      const intl = DETAILS(steps[9]).intl;
      obj.accessibilityLabel = intl.string(DETAILS(steps[9]).t.cpT0Cq);
      return closure_8(DETAILS(steps[7]).HeaderActionButton, obj);
    };
    if (null == stepScreenPropsMap) {
      let obj8 = {};
    } else {
      obj8 = stepScreenPropsMap[tmp16];
      if (obj8 == null) {
        obj8 = {};
      }
    }
    const merged5 = Object.assign(obj8);
    obj7.render = function render() {
      const GROUP = constants.GROUP;
      modalKey(steps[6])(null != DETAILS[GROUP], "Props not provided in screen map for scene " + GROUP);
      const getRuntimeProps = tmp2.getRuntimeProps;
      let runtimeProps;
      if (getRuntimeProps != null) {
        runtimeProps = getRuntimeProps();
      }
      if (runtimeProps == null) {
        runtimeProps = {};
      }
      const merged = Object.assign(closure_1);
      const merged1 = Object.assign(tmp2);
      const merged2 = Object.assign(runtimeProps);
      let extraProps = tmp2.extraProps;
      if (extraProps == null) {
        extraProps = [];
      }
      const merged3 = Object.assign(extraProps);
      const obj = {};
      const obj2 = {};
      const tmp5 = modalKey(steps[6]);
      const tmp6 = null != DETAILS[GROUP];
      const merged4 = Object.assign(obj);
      return closure_8(modalKey(steps[11]), obj2);
    };
    obj6[constants.GROUP] = obj7;
    const obj9 = {};
    const merged6 = Object.assign(obj3);
    DETAILS = constants.CHANNEL_BENEFITS;
    closure_1 = handleClose;
    obj9.headerRight = () => {
      const obj = {
        source: modalKey(steps[8]),
        onPress() {
          if (closure_129_3 != null) {
            tmp2(tmp);
          }
          closure_129_8();
          closure_129_6();
        },
        accessibilityLabel: null
      };
      const intl = DETAILS(steps[9]).intl;
      obj.accessibilityLabel = intl.string(DETAILS(steps[9]).t.cpT0Cq);
      return closure_8(DETAILS(steps[7]).HeaderActionButton, obj);
    };
    if (null == stepScreenPropsMap) {
      let obj10 = {};
    } else {
      obj10 = stepScreenPropsMap[tmp19];
      if (obj10 == null) {
        obj10 = {};
      }
    }
    const merged7 = Object.assign(obj10);
    obj9.render = function render() {
      const CHANNEL_BENEFITS = constants.CHANNEL_BENEFITS;
      modalKey(steps[6])(null != DETAILS[CHANNEL_BENEFITS], "Props not provided in screen map for scene " + CHANNEL_BENEFITS);
      const getRuntimeProps = tmp2.getRuntimeProps;
      let runtimeProps;
      if (getRuntimeProps != null) {
        runtimeProps = getRuntimeProps();
      }
      if (runtimeProps == null) {
        runtimeProps = {};
      }
      const merged = Object.assign(closure_1);
      const merged1 = Object.assign(tmp2);
      const merged2 = Object.assign(runtimeProps);
      let extraProps = tmp2.extraProps;
      if (extraProps == null) {
        extraProps = [];
      }
      const merged3 = Object.assign(extraProps);
      const merged4 = Object.assign({});
      return closure_8(DETAILS(steps[12]).GuildRoleSubscriptionTierChannelBenefitsModal, {});
    };
    obj6[constants.CHANNEL_BENEFITS] = obj9;
    const obj11 = {};
    const merged8 = Object.assign(obj3);
    DETAILS = constants.INTANGIBLE_BENEFITS;
    closure_1 = handleClose;
    obj11.headerRight = () => {
      const obj = {
        source: modalKey(steps[8]),
        onPress() {
          if (closure_129_3 != null) {
            tmp2(tmp);
          }
          closure_129_8();
          closure_129_6();
        },
        accessibilityLabel: null
      };
      const intl = DETAILS(steps[9]).intl;
      obj.accessibilityLabel = intl.string(DETAILS(steps[9]).t.cpT0Cq);
      return closure_8(DETAILS(steps[7]).HeaderActionButton, obj);
    };
    if (null == stepScreenPropsMap) {
      let obj12 = {};
    } else {
      obj12 = stepScreenPropsMap[tmp22];
      if (obj12 == null) {
        obj12 = {};
      }
    }
    const merged9 = Object.assign(obj12);
    obj11.render = function render() {
      const INTANGIBLE_BENEFITS = constants.INTANGIBLE_BENEFITS;
      modalKey(steps[6])(null != DETAILS[INTANGIBLE_BENEFITS], "Props not provided in screen map for scene " + INTANGIBLE_BENEFITS);
      const getRuntimeProps = tmp2.getRuntimeProps;
      let runtimeProps;
      if (getRuntimeProps != null) {
        runtimeProps = getRuntimeProps();
      }
      if (runtimeProps == null) {
        runtimeProps = {};
      }
      const merged = Object.assign(closure_1);
      const merged1 = Object.assign(tmp2);
      const merged2 = Object.assign(runtimeProps);
      let extraProps = tmp2.extraProps;
      if (extraProps == null) {
        extraProps = [];
      }
      const merged3 = Object.assign(extraProps);
      const merged4 = Object.assign({});
      return closure_8(DETAILS(steps[12]).GuildRoleSubscriptionTierIntangibleBenefitsModal, {});
    };
    obj6[constants.INTANGIBLE_BENEFITS] = obj11;
    const obj13 = {};
    const merged10 = Object.assign(obj3);
    DETAILS = constants.CONFIRMATION;
    closure_1 = handleClose;
    obj13.headerRight = () => {
      const obj = {
        source: modalKey(steps[8]),
        onPress() {
          if (closure_129_3 != null) {
            tmp2(tmp);
          }
          closure_129_8();
          closure_129_6();
        },
        accessibilityLabel: null
      };
      const intl = DETAILS(steps[9]).intl;
      obj.accessibilityLabel = intl.string(DETAILS(steps[9]).t.cpT0Cq);
      return closure_8(DETAILS(steps[7]).HeaderActionButton, obj);
    };
    if (null == stepScreenPropsMap) {
      let obj14 = {};
    } else {
      obj14 = stepScreenPropsMap[tmp25];
      if (obj14 == null) {
        obj14 = {};
      }
    }
    const merged11 = Object.assign(obj14);
    obj13.render = function render() {
      const CONFIRMATION = constants.CONFIRMATION;
      modalKey(steps[6])(null != DETAILS[CONFIRMATION], "Props not provided in screen map for scene " + CONFIRMATION);
      const getRuntimeProps = tmp2.getRuntimeProps;
      let runtimeProps;
      if (getRuntimeProps != null) {
        runtimeProps = getRuntimeProps();
      }
      if (runtimeProps == null) {
        runtimeProps = {};
      }
      const merged = Object.assign(closure_1);
      const merged1 = Object.assign(tmp2);
      const merged2 = Object.assign(runtimeProps);
      let extraProps = tmp2.extraProps;
      if (extraProps == null) {
        extraProps = [];
      }
      const merged3 = Object.assign(extraProps);
      const obj = {};
      const obj2 = {};
      const tmp5 = modalKey(steps[6]);
      const tmp6 = null != DETAILS[CONFIRMATION];
      const merged4 = Object.assign(obj);
      return closure_8(modalKey(steps[13]), obj2);
    };
    obj6[constants.CONFIRMATION] = obj13;
    const obj15 = {};
    const merged12 = Object.assign(obj3);
    DETAILS = constants.DESIGN;
    closure_1 = handleClose;
    obj15.headerRight = () => {
      const obj = {
        source: modalKey(steps[8]),
        onPress() {
          if (closure_129_3 != null) {
            tmp2(tmp);
          }
          closure_129_8();
          closure_129_6();
        },
        accessibilityLabel: null
      };
      const intl = DETAILS(steps[9]).intl;
      obj.accessibilityLabel = intl.string(DETAILS(steps[9]).t.cpT0Cq);
      return closure_8(DETAILS(steps[7]).HeaderActionButton, obj);
    };
    if (null == stepScreenPropsMap) {
      let obj16 = {};
    } else {
      obj16 = stepScreenPropsMap[tmp28];
      if (obj16 == null) {
        obj16 = {};
      }
    }
    const merged13 = Object.assign(obj16);
    obj15.render = function render() {
      const DESIGN = constants.DESIGN;
      modalKey(steps[6])(null != DETAILS[DESIGN], "Props not provided in screen map for scene " + DESIGN);
      const getRuntimeProps = tmp2.getRuntimeProps;
      let runtimeProps;
      if (getRuntimeProps != null) {
        runtimeProps = getRuntimeProps();
      }
      if (runtimeProps == null) {
        runtimeProps = {};
      }
      const merged = Object.assign(closure_1);
      const merged1 = Object.assign(tmp2);
      const merged2 = Object.assign(runtimeProps);
      let extraProps = tmp2.extraProps;
      if (extraProps == null) {
        extraProps = [];
      }
      const merged3 = Object.assign(extraProps);
      const obj = {};
      const obj2 = {};
      const tmp5 = modalKey(steps[6]);
      const tmp6 = null != DETAILS[DESIGN];
      const merged4 = Object.assign(obj);
      return closure_8(modalKey(steps[14]), obj2);
    };
    obj6[constants.DESIGN] = obj15;
    const obj17 = {};
    const merged14 = Object.assign(obj3);
    DETAILS = constants.DETAILS;
    closure_1 = handleClose;
    obj17.headerRight = () => {
      const obj = {
        source: modalKey(steps[8]),
        onPress() {
          if (closure_129_3 != null) {
            tmp2(tmp);
          }
          closure_129_8();
          closure_129_6();
        },
        accessibilityLabel: null
      };
      const intl = DETAILS(steps[9]).intl;
      obj.accessibilityLabel = intl.string(DETAILS(steps[9]).t.cpT0Cq);
      return closure_8(DETAILS(steps[7]).HeaderActionButton, obj);
    };
    if (null == stepScreenPropsMap) {
      let obj18 = {};
    } else {
      obj18 = stepScreenPropsMap[tmp31];
      if (obj18 == null) {
        obj18 = {};
      }
    }
    const obj19 = { screens: null, initialStack: null };
    const merged15 = Object.assign(obj18);
    obj17.render = function render() {
      DETAILS = constants.DETAILS;
      modalKey(steps[6])(null != DETAILS[DETAILS], "Props not provided in screen map for scene " + DETAILS);
      const getRuntimeProps = tmp2.getRuntimeProps;
      let runtimeProps;
      if (getRuntimeProps != null) {
        runtimeProps = getRuntimeProps();
      }
      if (runtimeProps == null) {
        runtimeProps = {};
      }
      const merged = Object.assign(closure_1);
      const merged1 = Object.assign(tmp2);
      const merged2 = Object.assign(runtimeProps);
      let extraProps = tmp2.extraProps;
      if (extraProps == null) {
        extraProps = [];
      }
      const merged3 = Object.assign(extraProps);
      const obj = {};
      const obj2 = {};
      const tmp5 = modalKey(steps[6]);
      const tmp6 = null != DETAILS[DETAILS];
      const merged4 = Object.assign(obj);
      return closure_8(modalKey(steps[15]), obj2);
    };
    obj6[constants.DETAILS] = obj17;
    obj19.screens = obj6;
    _modDef38(memo.length > 0, "At least one step must be provided to RoleTierEditScenesModal");
    if (null == noop) {
      const obj20 = { name: memo[0] };
      const items = [obj20];
      let tmp35 = items;
    } else {
      const items1 = [];
      let num2 = 0;
      tmp35 = items1;
      if (0 < memo.length) {
        const obj21 = { name: memo[num2] };
        items1.push(obj21);
        tmp35 = items1;
        while (memo[num2] !== noop) {
          num2 = num2 + 1;
          tmp35 = items1;
          if (num2 < memo.length) {
            continue;
          } else {
            break;
          }
          break;
        }
      }
    }
    obj19.initialStack = tmp35;
    return obj19;
  }));
  let obj2 = {
    screens,
    initialRouteStack: initialStack,
    onWillFocus(onDidFocus) {
      const name = onDidFocus.route.name;
      if (null != name) {
        closure_1_5(name);
        const findIndexResult = memo.findIndex((item) => item === name);
        if (findIndexResult >= 0) {
          closure_7(findIndexResult);
        }
      }
    },
    headerBackTitle: null
  };
  let intl = require("util").intl;
  obj2.headerBackTitle = intl.string(require("util").t["13/7kX"]);
  const items2 = [closure_8(require("Navigator").Navigator, obj2), ];
  let obj3 = { style: null, current: tmp3[0] + 1, total: memo.length };
  const items3 = [tmp.stepsIndicator, { top: modalKey(steps[16])().top }];
  obj3.style = items3;
  items2[1] = closure_8(modalKey(steps[20]), obj3);
  obj.children = items2;
  return memo(handleClose, obj);
};